import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  // Posts are trusted, repository-authored Markdown and may include HTML.
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}
