import type { Frontmatter } from './types';

export function generateSchema(url: string, title: string, frontmatter?: Frontmatter) {
  const image = new URL(frontmatter?.image ?? '/images/logo.webp', import.meta.env.SITE);

  const dateModified = frontmatter?.updatedDate ? (frontmatter.updatedDate === 'now' ? new Date() : new Date(frontmatter.updatedDate)).toISOString() : undefined;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      frontmatter ? {
        '@type': 'Article',
        '@id': `${url}#article`,
        isPartOf: {
          '@id': url
        },
        author: {
          name: 'Brian Douglass',
          '@id': import.meta.env.SITE,
        },
        headline: frontmatter.title,
        description: frontmatter.description || frontmatter.title,
        keywords: frontmatter.categories ?? [],
        datePublished: new Date(frontmatter.date).toISOString(),
        dateModified,
        mainEntityOfPage: {
          '@id': url,
        },
        image: {
          '@id': `${url}#primaryimage`,
        },
        thumbnailUrl: image,
        inLanguage: 'en-US',
      } : undefined,
      {
        '@type': 'WebPage',
        '@id': url,
        url: url,
        name: title,
        isPartOf: {
          '@id': `${import.meta.env.SITE}#website`
        },
        primaryImageOfPage: {
          '@id': `${url}#primaryimage`,
        },
        image: {
          '@id': `${url}#primaryimage`,
        },
        thumbnailUrl: image,
        datePublished: frontmatter?.date ? new Date(frontmatter.date).toISOString() : undefined,
        dateModified,
        description: frontmatter?.description || frontmatter?.title,
        breadcrumb: {
          '@id': `${url}#breadcrumb`,
        },
        inLanguage: 'en-US',
        potentialAction: [
          {
            '@type': 'ReadAction',
            target: [
              url
            ]
          }
        ]
      },
      {
        '@type': 'ImageObject',
        inLanguage: 'en-US',
        '@id': `${url}#primaryimage`,
        url: image,
        contentUrl: image,
        caption: frontmatter?.imageAlt ?? "Brian Douglass' Logo",
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: import.meta.env.SITE,
          },
          frontmatter ? {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: new URL('/blog', import.meta.env.SITE).href,
          } : undefined,
          frontmatter ? {
            '@type': 'ListItem',
            position: 3,
            name: title,
          } : undefined,
        ].filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${import.meta.env.SITE}#website`,
        url: import.meta.env.SITE,
        name: 'Brian Douglass',
        description: 'Brian Douglass - Senior Software Engineer',
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': import.meta.env.SITE,
        name: 'Brian Douglass',
        url: import.meta.env.SITE
      }
    ].filter(Boolean),
  }
}
