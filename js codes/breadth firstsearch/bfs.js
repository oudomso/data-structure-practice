// Uses queue to keep track of tree height


//Add first index to stack
//Pop it from stack and use it as current
//Put current's child into stack
//Pop child out of stack and put into array
//Put child of child into stack and repeat

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthfirstsearch = (root)=>{

    if(root == null) return [];
    const queue = [ root ];
    while (queue.length > 0){
        const current = queue.shift();
        console.log(current.val);
        if(current.left!=null) queue.push(current.left);
        if(current.right!=null) queue.push(current.right);
    
        
    }


}


//Create tree
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;


breadthfirstsearch(a);
