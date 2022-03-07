import navbar from "./components/sidebar.js";

let navbar_div= document.getElementById("sidebar");
navbar_div.innerHTML=navbar();

import { getData,appendData } from "./scripts/main.js";

let key="75Z-tcQMOl_KwfEEAmkNzgWw4ZeT6AcZeoO90Q2jb9w"
let url=`https://api.unsplash.com/photos/?client_id=${key}`
let res= await getData(url);
let parent=document.getElementById("main")
appendData(res,parent)
import Searchterm from "./scripts/search.js"
let value=document.getElementById("search");
Searchterm(value);