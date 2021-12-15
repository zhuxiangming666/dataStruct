import TreeNode from "./utils/node";

export default class BinarySearchTree<Number> {
  private root: TreeNode<Number| null>;
  // private sortNodeByKey: (curNode: TreeNode<Number| null>,nextNode: TreeNode<Number| null>)=>boolean;
  //TODO: add sortNodeByKey defaultValue
  constructor(params: {
    val: Number|null,
    // sortNodeByKey: (curNode: TreeNode<Number| null>,nextNode: TreeNode<Number| null>)=>boolean;
  }){
    const {val} = params; 
    this.root = new TreeNode(val);
  }
  get getRootNode(){
    return this.root;
  }
  /**
   * @desc insertNode 插入一个node节点
   * @param val 
   */
  insertNode(val: Number|null){
    // 判断根节点是否有值
    if(TreeNode.isEmptyNode(this.root)){
      this.root.setVal = val;
    }else{
      
    }
  }

  /**
   * @d
  */
  
}