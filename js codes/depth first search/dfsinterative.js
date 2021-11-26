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

const depthfirstsearch = (root)=>{

    if(root == null) return [];
    const stack = [ root ];
    while (stack.length > 0){
        const current = stack.pop();
        console.log(current.val);

        if(current.right!=null) stack.push(current.right);
        if(current.left!=null) stack.push(current.left);
    
        
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


depthfirstsearch(a);
