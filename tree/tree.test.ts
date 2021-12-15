import { TreeNode,BinarySearchTree } from './tree';
// import {writeFile} from 'fs';
import{ tap,compose,map } from 'ramda';
// // 穿件测试的树
// const root = new BinarySearchTree(6);

// // test('测试先讯遍历',()=>{
// //   expect();
// // });

// 测试插入节点
const root = new BinarySearchTree(6);
root.insertNode(4);
root.insertNode(2);
root.insertNode(1);
root.insertNode(5);
root.insertNode(7);
root.insertNode(8);
root.insertNode(9);
root.insertNode(10);
const getVal = map((item: TreeNode)=>item.getVal);
const clgTree = compose(tap(console.log),getVal)
/**
   *            6
   *          4      7
   *        2   5      8
  *       1             9
  *                       10
  */

test('测试获取最大的值', () => {
  expect(root.getMaxValueNode().getVal).toBe(10);
})

test('测试获取最小的值', () => {
  expect(root.getMinValueNode().getVal).toBe(1);
})

test('树节点的先序遍历',()=>{
  const arr = clgTree((root.preOrderTraverse())); 
  expect(arr).toStrictEqual([6,4,2,1,5,7,8,9,10]);
})

test('树节点的中序遍历',()=>{
  const inOrderArr = clgTree(root.inOrderTraverse());
  expect(inOrderArr).toStrictEqual([1,2,4,5,6,7,8,9,10]);
})
test('树节点的后序遍历',()=>{
  const postArr = clgTree(root.postOrderTraverse());
  expect(postArr).toStrictEqual([1,2,5,4,10,9,8,7,6]);
})

test('根据值获取对应的节点',()=>{
  expect(root.getNodeByValue(10)?.getVal).toBe(10);
  expect(root.getNodeByValue(3)?.getVal).toBeUndefined();
  expect(root.getNodeByValue(9)?.getVal).toBe(9);
});