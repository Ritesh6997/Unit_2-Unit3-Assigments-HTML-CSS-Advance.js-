import navbar from "./components/navbar.js";

let navbar_div=document.getElementById("navbar_container")

navbar_div.innerHTML=navbar();

import { getData,appendData } from "./scripts/showdata.js";

let url="https://fakestoreapi.com/products/category/electronics"

let res=await getData(url);
    console.log(res)
let parent=document.getElementById("data");
appendData(res,parent)