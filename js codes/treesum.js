
//Log2 of N time
function Treesum(root, x){
    if(root == null) return 0;

    return root.val + Treesum(root.left) +Treesum(root.right);

}



class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}





//Create tree
const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;


console.log(Treesum(a));
