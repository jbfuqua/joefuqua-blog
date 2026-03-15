export const writingCategoryLabels: Record<string, string> = {
  governance: 'Governance & Control',
  futures: 'Futures & Long Arc',
  'technology-society': 'Technology & Society',
};

export const writingCategoryOrder = [
  'governance',
  'futures',
  'technology-society',
] as const;

export function getWritingCategoryHref(category?: string) {
  return category ? `/writing/category/${category}` : '/writing';
}
