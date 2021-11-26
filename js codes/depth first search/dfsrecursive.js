const depthfirstsearch = (root) => {

    if(root == null) return [];

    return [root.val, ...depthfirstsearch(root.left), ...depthfirstsearch(root.right)];

};



class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
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


console.log(depthfirstsearch(a));
