import htmlToReact from 'html-to-react';

export function parseHtmlToReact(html: string) {
  return html && new htmlToReact.Parser().parse(html);
}