class Stack{
    constructor()
    {
        this.length=0;
        this.stack=[];
    }
    push(v){
        this.stack.push(v);
        this.length++;
    }
    pop(){
        this.stack.pop();
        this.length--;
    }
}

let s1=new Stack();

s1.push("ritesh");
s1.push("sahil");
s1.push("saurabh");
console.log(s1)