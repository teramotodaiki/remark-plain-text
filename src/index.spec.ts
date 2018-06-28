import 'mocha';
import { expect } from 'chai';

const attacher = require('./index');

describe('Attacher', () => {
  it('should be a function gives function', () => {
    expect(attacher).to.be.a('function');
    expect(attacher()).to.be.a('function');
  });
});
