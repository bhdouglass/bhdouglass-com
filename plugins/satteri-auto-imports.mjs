import { defineMdastPlugin } from "satteri";

/**
 * @typedef {{name: string, from: string}[]} AutoImportMap
 */

function createMdxjsEsmNode(name, from) {
  return {
    type: "mdxjsEsm",
    value: `import ${name} from '${from}';`,
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ImportDeclaration",
            specifiers: [
              {
                type: "ImportDefaultSpecifier",
                local: { type: "Identifier", name },
              },
            ],
            source: { type: "Literal", value: from },
          },
        ],
      },
    },
  };
}

function insertImports(node, ctx, autoImportMap) {
  if (ctx.data._autoImportsDone) return;
  if (!ctx.fileURL?.pathname.endsWith(".mdx")) return;

  ctx.data._autoImportsDone = true;

  const importNodes = autoImportMap.map(({ name, from }) => createMdxjsEsmNode(name, from));

  ctx.insertBefore(node, importNodes);
}

/**
 * @param {AutoImportMap} autoImportMap
 */
export default function satteriAutoImports(autoImportMap = []) {
  // Astro consumes frontmatter before the MDAST tree is built, so there is no
  // `yaml` node to visit. We visit every possible first-content-node type and
  // use _autoImportsDone to insert exactly once.
  return defineMdastPlugin({
    name: "auto-imports",
    heading(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    paragraph(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    mdxJsxFlowElement(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    mdxFlowExpression(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    code(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    list(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    blockquote(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    table(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
    thematicBreak(node, ctx) {
      insertImports(node, ctx, autoImportMap);
    },
  });
}
