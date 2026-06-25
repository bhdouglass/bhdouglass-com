import path from 'node:path';

const autoImportMap = [
  { name: 'RandomSupport', from: './components/support/RandomSupport.astro' },
  { name: 'DigitalOceanAffiliate', from: './components/support/DigitalOceanAffiliate.astro' },
  { name: 'Donate', from: './components/support/Donate.astro' },
  { name: 'FastmailReferral', from: './components/support/FastmailReferral.astro' },
  { name: 'NamecheapAffiliate', from: './components/support/NamecheapAffiliate.astro' },
  { name: 'Ad', from: './components/support/Ad.astro' },
  { name: 'Image', from: './components/Image.astro' },
  { name: 'ImageAttrib', from: './components/ImageAttrib.astro' },
  { name: 'NewsletterForm', from: './components/NewsletterForm.astro' },
  { name: 'InfoBlock', from: './components/InfoBlock.astro' },
];

function createImportNode(name, from) {
  return {
    type: 'mdxjsEsm',
    value: `import ${name} from '${from}';`,
    data: {
      estree: {
        type: 'Program',
        sourceType: 'module',
        body: [
          {
            type: 'ImportDeclaration',
            specifiers: [
              {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name },
              },
            ],
            source: { type: 'Literal', value: from },
          },
        ],
      },
    },
  };
}

export default function remarkAutoImports() {
  return function (tree, file) {
    if (!file.path || !file.path.endsWith('.mdx')) return;

    const fileDir = path.dirname(file.path);
    const srcDir = path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      '..',
      'src'
    );
    const relativeToSrc = path.relative(fileDir, srcDir).replace(/\\/g, '/');

    const importNodes = autoImportMap.map(({ name, from }) => {
      const adjustedFrom = from.startsWith('.')
        ? relativeToSrc + from.slice(1)
        : from;
      return createImportNode(name, adjustedFrom);
    });

    tree.children = [...importNodes, ...(tree.children || [])];
  };
}
