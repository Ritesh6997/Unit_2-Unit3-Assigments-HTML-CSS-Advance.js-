import navbar from"./components/navbar.js";

let navbar_div= document.getElementById("navbar_container");
navbar_div.innerHTML=navbar();appendData
import { appendData, getData, } from "./scripts/showdata.js"; //logic components
let url="https://fakestoreapi.com/products/category/jewelery"
// let res = getData(url).then((data)=>{
//    console.log(data);
// });

let res=await getData(url);
console.log(res);
console.log(1)
let parent=document.getElementById("data");

appendData(res,parent);
