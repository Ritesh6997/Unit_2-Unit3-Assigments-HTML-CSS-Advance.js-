let url="http://www.omdbapi.com/?apikey=3ad012ab&s=";


async function moviesData()
{ try{
    let url1=document.querySelector("#url").value;
    let res= await fetch(url+url1);
    let data= await res.json();
    console.log(data);
    resdata=data.Search;
    console.log(resdata)
    displaymovies(resdata)
  } 
  catch(err)
  {
      console.log("err:",err);
  }
}


function displaymovies(resdata)
{
   document.querySelector("#Display_Data").innerText="";
   if (resdata==undefined)
   {
    let img=document.createElement("img");
    img.src="https://www.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg";
    document.querySelector("#Display_Data").append(img);
   }
   else
   {
    resdata.map(function(ele){
        let div=document.createElement("div");
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
}