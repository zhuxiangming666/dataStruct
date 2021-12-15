export class TreeNode{
  private _val: Number;
  private _left: TreeNode | null = null;
  private _right: TreeNode | null = null;
  constructor(val: Number){
    this._val = val;
  }

  get getLeft(){
    return this._left;
  }
  get getRight(){
    return this._right;
  }
  set setLeft(leftNode: TreeNode){
    this._left = leftNode;
  }
  set setRight(rightNode: TreeNode){
    this._right = rightNode;
  }
  get getVal(){
    return this._val;
  }
  set setVal(val: Number){
    this._val = val;
  }
}

export class BinarySearchTree{
  private root;
  constructor(val: number){
    this.root = new TreeNode(val);
  }
  // 插入的方法
  insertNode(nodeVal: number){
    const node = new TreeNode(nodeVal);
    const val = node.getVal;
    let tmp:TreeNode = this.root;
    while(true){
      const curVal = tmp.getVal;
      if(curVal > val && tmp.getLeft){
        tmp = tmp.getLeft;
      }else if(curVal < val  && tmp.getRight){
        tmp = tmp.getRight;
      }else{
        break;
      }
    }
    if(tmp.getVal > node.getVal){
      tmp.setLeft = node;
    }else{
      tmp.setRight = node;
    }
  }
  // 获取最大的node
  getMaxValueNode(){
    let tmp = this.root;
    while(tmp && tmp.getRight){
      tmp = tmp.getRight;
    }
    return tmp;
  }
  
  getMinValueNode(){
    let tmp = this.root;
    while(tmp && tmp.getLeft){
      tmp = tmp.getLeft;
    }
    return tmp;
  }
  // 获取最小的node
  inOrderTraverse(){
    const stack:TreeNode[] = [this.root];
    const returnNode:TreeNode[] = [];
    let tmp:TreeNode | null = this.root;
    let flag = true;
    while(stack.length){
      const tmp = stack[0];
      if(flag){
        if(!tmp.getLeft){
          flag = false;
          continue;
        }
        stack.unshift(tmp.getLeft);
      }else{
        const a = stack.shift();
        a&&returnNode.push(a);
        if(tmp.getRight){
          flag = true;
          stack.unshift(tmp.getRight);
        }
      }
    }
    return returnNode;
  }

  // 先讯遍历
  preOrderTraverse(){
    const stack:TreeNode[] = [this.root];
    const returnNode:TreeNode[] = [];
    while(stack.length){
      const tmp = stack.shift();
      if(!tmp) break;
      returnNode.push(tmp);
      if(tmp.getRight){
        stack.unshift(tmp.getRight);
      }
      if(tmp.getLeft){
        stack.unshift(tmp.getLeft);
      }
    }
    return returnNode;
  }

  // 后续遍历
  postOrderTraverse(){
    const queen:TreeNode[] = [this.root];
    const returnNode:TreeNode[] = [];
    while(queen.length){
      const tmp = queen.shift();
      if(!tmp) break;
      returnNode.unshift(tmp);
      if(tmp.getLeft){
        queen.unshift(tmp.getLeft);
      }
      if(tmp.getRight){
        queen.unshift(tmp.getRight);
      }
    }
    return returnNode;
  }

  // 获取NodeByValue
  getNodeByValue(val: number){
    let tmp:TreeNode| null= this.root;
    while(tmp?.getVal){
      if(tmp.getVal>val){
        tmp = tmp.getLeft;
      }else if(tmp.getVal < val){
        tmp = tmp.getRight;
      }else{
        break;
      }
    }
    return tmp;
  }
}