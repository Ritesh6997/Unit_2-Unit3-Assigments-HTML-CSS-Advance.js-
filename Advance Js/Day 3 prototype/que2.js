

function array()
{
    Object.defineProperty(this,"length",{
        writable:true,  //due to this we can change the value of length.
        enumerable:false // false cause we dont want to iterate on the key.
    })
    // Object.defineProperty use to set the property of any key of the object.
   for (let i=0;i<arguments.length;i++)
    {
        this[i]=arguments[i];
        this.length=arguments.length;
    }
}

var obj=new array("a","b","c","d","e")
console.log(Object.values(obj));
// Object.values(obj) due to this the object is look like a arr in out.
