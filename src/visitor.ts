/**
 * Body extraction
 * @param node MDAST Syntax Node
 */
export default function visitor(node: any) {
  if (node.type !== 'text' && Array.isArray(node.children)) {
    node.type = 'paragraph';
  }
  if (node.type === 'text') {
    node.value += '\n';
  }
}
