export default class TreeNode<T>{
  private val: T | null;
  private left: TreeNode<T> | null;
  private right: TreeNode<T> | null;

  constructor(val: T|null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  set setLeft(left: TreeNode<T>){
    if(TreeNode.isEmptyNode(this)) {
      throw Error('this node is Empty');
    }
    this.left = left;
  }
  set setRight(right: TreeNode<T>){
    if(TreeNode.isEmptyNode(this)){
      throw Error('this node is Empty');
    }
    this.right = right;
  }
  set setVal(val: T|null){
    this.val = val;
  }
  get getRight(){
    return this.right;
  }
  get getLeft(){
    return this.left
  }
  get getVal(){
    return this.val;
  }
  static isEmptyNode(node: any){
    return node.getVal === null;
  }
};