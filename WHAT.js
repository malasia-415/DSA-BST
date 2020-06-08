function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

This function is calling tree if not t then return 0, else return the left side of the tree plus the 
the value of the tree plus the right side of the tree then get your output. 
