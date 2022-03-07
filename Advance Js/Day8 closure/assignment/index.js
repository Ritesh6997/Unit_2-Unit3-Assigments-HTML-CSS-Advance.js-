let url="http://www.omdbapi.com/?apikey=3ad012ab&s=";



async function tradingmovies()
{
    try {
        let res=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=daaf4e9e2f19ea069cc96e25f4b3b460")
        let data= await res.json();
        console.log(data.results);
        displaytraindingmovies(data.results)
    } catch (error) {
        console.log(error);
    }
}
tradingmovies()

function displaytraindingmovies(data)
{
   document.querySelector("#Display_Data").innerText="";
    data.map(function(ele,index){
        let div=document.createElement("div");
        div.addEventListener("click",function()
        {
            showdetails(ele)
        })
        let img=document.createElement("img");
        img.src=`https://image.tmdb.org/t/p/w500${ele.poster_path}`;
        let name1=document.createElement("h3");
        name1.innerText=`Title: ${ele.title}`;
        let year=document.createElement("h3");
        year.innerText=`Year: ${ele.release_date}`;
        div.append(img,name1,year)
        document.querySelector("#Display_Data").append(div);
    })
}


async function moviesData()
{ try{
    let url1=document.querySelector("#url").value;
    let res= await fetch(url+url1);
    let data= await res.json();
    console.log(data);
    resdata=data.Search;
    console.log(resdata)
    return resdata;
    
  } 
  catch(err)
  {
      console.log("err:",err);
  }
}

async function main()
{
   let data= await moviesData()
   if (data==undefined)
   {
    document.querySelector("#Display_Data").innerText="";
       return;
   }
   displaymovies(data)
}

function displaymovies(resdata)
{
   document.querySelector("#Display_Data").innerText="";
    resdata.map(function(ele,index){
        let div=document.createElement("div");
        div.addEventListener("click",function()
        {
            showdetails(ele)
        })
        let img=document.createElement("img");
        img.src=ele.Poster;
        let name1=document.createElement("h3");
        name1.innerText=`Title: ${ele.Title}`;
        let year=document.createElement("h3");
        imdb=Math.ceil(Math.random()*10)
        console.log(imdb);
        let re=document.createElement("div");
        re.innerText="Recomended";
        re.setAttribute("class",value="recomended");
        year.innerText=`Year: ${ele.Year}`;
        if (imdb>8.5)
        {
            console.log(1)
            div.append(re);
        }
        div.append(img,name1,year,)
        
        document.querySelector("#Display_Data").append(div);
    })
}
var arr=JSON.parse(localStorage.getItem("data"))||[];
function showdetails(index)
{
    arr=[]
    arr.push(index);
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr));
    window.location.href='data.html';    
}

let ifset;
function debouncing(funct,delay)
{
    if (ifset)
    {
        clearTimeout(ifset);
    }
    ifset= setTimeout(function()
    {
        funct();
    },delay)
}


