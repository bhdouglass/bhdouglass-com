import { defineMdastPlugin } from "satteri";
// Sätteri uses github-slugger (new Slugger().slug(text)) in its
// heading-ids HAST plugin (satteri-processor.js:87) to generate heading IDs.
// We match that by using the same standalone slug() function for base slug
// generation and our own usedSlugs set for duplicate tracking.
import { slug } from "github-slugger";

function extractHeadingText(node) {
  if (!node.children) return "";
  let text = "";
  for (const child of node.children) {
    if (child.type === "text") text += child.value;
    else if (child.type === "inlineCode") text += child.value;
    else if (child.children) text += extractHeadingText(child);
  }
  return text;
}

export default function satteriToc() {
  return defineMdastPlugin({
    name: "toc",
    heading(node, ctx) {
      if (ctx.data._tocDone) return;

      const text = ctx.textContent(node);
      if (!/^table of contents$/i.test(text.trim())) return;

      ctx.data._tocDone = true;

      const parent = ctx.parent(node);
      if (!parent || !("children" in parent)) return;

      const tocHeadingText = text.trim().toLowerCase();

      const allHeadings = [];
      for (const child of parent.children) {
        if (child.type === "heading") {
          allHeadings.push(child);
        }
      }

      const tocIdx = allHeadings.findIndex((h) => {
        return ctx.textContent(h).trim().toLowerCase() === tocHeadingText;
      });

      if (tocIdx === -1) return;

      const headingsAfter = allHeadings.slice(tocIdx + 1);
      if (headingsAfter.length === 0) return;

      const usedSlugs = new Set();

      function uniqueSlug(text) {
        let s = slug(text);
        let counter = 1;
        while (usedSlugs.has(s)) {
          s = `${slug(text)}-${counter}`;
          counter++;
        }
        usedSlugs.add(s);
        return s;
      }

      const listItems = headingsAfter.map((h) => {
        const headingText = extractHeadingText(h);
        const slug = uniqueSlug(headingText);
        return {
          type: "listItem",
          spread: false,
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "link",
                  url: `#${slug}`,
                  children: [{ type: "text", value: headingText }],
                },
              ],
            },
          ],
        };
      });

      ctx.insertAfter(node, {
        type: "list",
        ordered: false,
        spread: false,
        children: listItems,
      });
    },
  });
}
