import navbar  from "./component/navbar.js";

let navbar_div=document.getElementById("navbar_container")

navbar_div.innerHTML=navbar();

import { getData,appendData } from "./component/showData.js";
let parent=document.getElementById("displayContainer")
let receipeoftheday="https://www.themealdb.com/api/json/v1/1/random.php"
let result=await getData(receipeoftheday)
let x=result.meals[0]

var comp=-8;
for (let key in x)
{
    // console.log(key,comp)
    if (key=="strIngredient"+comp)
    console.log(key);

    comp++;
}



appendData(result,parent,"rotd")
async function funct()
{
    console.log(1)
            let name_value=document.querySelector("#search_value").value;
            console.log(name_value);
            let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name_value}`;
            console.log(1);
           let res=await getData(url);
            appendData(res,parent)
};
document.getElementById("search_value").addEventListener("input", debouncing);
let ifset;
function debouncing()
{
    if (ifset)
    {
        console.log(2)
        clearTimeout(ifset);
    }
    ifset= setTimeout(function()
    {
        funct();
    },1000)
}