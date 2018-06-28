import * as visit from 'unist-util-visit';
import visitor from './visitor';

function attacher() {
  return transformer;

  function transformer(tree: any, file: any) {
    visit(tree, visitor);
  }
}

module.exports = attacher;
