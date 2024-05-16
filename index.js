import * as _ from '@hexlet/immutable-fs-trees';

const tree = _.mkdir('root', [
    _.mkfile('leaf1', { meta: 'meta' }),
    _.mkfile('leaf2', { meta: 'meta' }),   
    _.mkdir('node1', [], { meta: 'meta'}),
    _.mkdir('node2', [
        _.mkfile('leaf3', { meta: 'meta' }),
        _.mkfile('leaf4', { meta: 'meta' }),
    ], { meta: 'meta' }),
], { meta: 'root of tree' });

console.log(tree);
console.log(_.getName(tree));
console.log(_.getMeta(tree).meta);

const node2 = _.getChildren(tree)[3];
console.log(_.getChildren(node2));
console.log(_.isFile(node2));
console.log(_.isDirectory(node2));

