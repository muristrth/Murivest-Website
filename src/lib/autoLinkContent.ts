import { internalLinks, type InternalLink } from './internalLinks';

// Generic words that make poor anchor text
const BLACKLIST = new Set([
  'property', 'properties', 'market', 'investment', 'investing',
  'kenya', 'nairobi', 'real estate', 'estate', 'building', 'buildings',
  'area', 'location', 'price', 'prices', 'buy', 'sell', 'rent', 'rental',
]);

export function isBlacklisted(keyword: string): boolean {
  const normalized = keyword.toLowerCase().trim();
  return BLACKLIST.has(normalized) || normalized.length < 5;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export interface AutoLinkOptions {
  maxLinks?: number;
  skipHeadings?: boolean;
  skipExistingLinks?: boolean;
  caseInsensitive?: boolean;
}

export function autoLinkContent(
  content: string,
  customLinks?: InternalLink[],
  options: AutoLinkOptions = {}
): string {
  const {
    maxLinks = 6,
    skipHeadings = true,
    skipExistingLinks = true,
    caseInsensitive = true,
  } = options;

  let updatedContent = content;
  let linkCount = 0;

  const links = customLinks || internalLinks;
  const validLinks = links.filter((link) => !isBlacklisted(link.keyword));

  for (const { keyword, href } of validLinks) {
    if (linkCount >= maxLinks) break;

    const escapedKeyword = escapeRegExp(keyword);
    const flags = caseInsensitive ? 'i' : '';

    let pattern = '';

    if (skipExistingLinks) {
      pattern += `(?!<a[^>]*?>)`;
    }

    if (skipHeadings) {
      pattern += `(?!<h[1-6][^>]*?>)`;
    }

    pattern += `(\\b${escapedKeyword}\\b)`;

    if (skipExistingLinks) {
      pattern += `(?![^<]*?<\\/a>)`;
    }

    if (skipHeadings) {
      pattern += `(?![^<]*?<\\/h[1-6]>)`;
    }

    const regex = new RegExp(pattern, flags);

    if (regex.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        regex,
        `<a href="${href}" class="internal-link">$1</a>`
      );
      linkCount++;
    }
  }

  return updatedContent;
}

export function generateLinksFromPosts(
  posts: Array<{ title: string; slug: string; category?: string; tags?: string[] }>
): InternalLink[] {
  const links: InternalLink[] = [];

  posts.forEach((post) => {
    if (post.title && post.title.length > 5 && !isBlacklisted(post.title)) {
      links.push({
        keyword: post.title,
        href: `/research/${post.slug}`,
      });
    }

    if (post.category && !isBlacklisted(post.category)) {
      links.push({
        keyword: post.category,
        href: `/research/${post.slug}`,
      });
    }

    post.tags?.forEach((tag) => {
      if (!isBlacklisted(tag)) {
        links.push({
          keyword: tag,
          href: `/research/${post.slug}`,
        });
      }
    });
  });

  const seen = new Set<string>();
  return links.filter((link) => {
    const key = `${link.keyword.toLowerCase()}-${link.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}