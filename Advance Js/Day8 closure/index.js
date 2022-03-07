
async function searchMovie()
{
try {
    let movie= document.querySelector("#query").value;
   let res =await fetch(`http://www.omdbapi.com/?apikey=d806bd70&s=${movie}`);
   let data =await res.json();
   return data.Search;
} catch (error) {
    console.log("err:",error);
}
   
}

async function main()
{
    let data = await searchMovie();
    if (data===undefined)
    {
        return ;
    }
    console.log("data",data);
    appendData(data);
}

let movies_div =document.getElementById("movies");

function appendData(movies)

{
    movies_div.innerHTML="";
    movies.forEach(function (ele) {
     let p=document.createElement('p');
     p.innerText=ele.Title;
        movies_div.append(p);

    });
}

let ispresent;
function debounce(func,delay)
{
    if (ispresent)
    {
        clearTimeout(ispresent)
    }
    
     ispresent= setTimeout (function (){
        func();
    },delay);
}