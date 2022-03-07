function myArray()
{
    Object.defineProperty(this,"length",{
        writable:true,
        enumerable:false
    })
    for (let i=0;i<arguments.length;i++)
    {
        this[i]=arguments[i];
        this.length=arguments.length;
    }

}

let arr=new myArray("a","b","c","d")

myArray.prototype.pushingvar=function (x)
{
    let index=this.length;
    this[index]=x
    this.length++;
}
myArray.prototype.popingvar=function ()
{
    let index=this.length-1;
    delete this[index]
    this.length--;
}

arr.pushingvar("x");
arr.popingvar();

myArray.prototype.reversing=function()
{
    for(let j=0, i=this.length-1;i>Math.floor(this.length/2);i--,j++)
    {
        var temp=this[i];
        this[i]=this[j];
        this[j]=temp;
    }
   return arr;
}
v=arr.reversing()

myArray.prototype.firstele=function()
{
    let index=0;
    return this[index];
}

console.log(Object.values(arr));

x=arr.firstele()
console.log(x);