import navbar from "./component/navbar.js";
let navbar_div=document.getElementById("navbar_container");
navbar_div.innerHTML=navbar();

import { getData,appendData } from "./component/showData.js";
let url="https://www.themealdb.com/api/json/v1/1/search.php?s="
let displaydiv=document.getElementById("display_div")
let res=await getData(url)
console.log(res);
appendData(res,displaydiv)
console.log(res);