
var arr=JSON.parse(localStorage.getItem("data"))||[];
console.log(arr)
function newpage()
{

   document.querySelector("#newpagecontainer").innerText="";
   arr.map((ele)=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=ele.Poster;
    let name1=document.createElement("h3");
    name1.innerText=`Title: ${ele.Title}`;
    let year=document.createElement("h3");
    imdb=Math.ceil(Math.random()*10)
    console.log(imdb);
    year.innerText=`Year: ${ele.Year}`;
    div.append(img,name1,year,imdb)
    document.querySelector("#newpagecontainer").append(div)
   })
    
}
newpage()
console.log(1)