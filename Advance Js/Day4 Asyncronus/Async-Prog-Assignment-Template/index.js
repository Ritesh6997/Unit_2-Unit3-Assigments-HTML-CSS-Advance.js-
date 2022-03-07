var imagearr=["https://c4.wallpaperflare.com/wallpaper/796/310/540/jurassic-park-logos-movie-posters-1972x3014-entertainment-movies-hd-art-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/221/116/854/joaquin-phoenix-joker-batman-fire-car-hd-wallpaper-thumb.jpg","https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/852/644/1008/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/144/450/423/star-wars-movies-star-wars-the-last-jedi-poster-wallpaper-preview.jpg"];


// setInterval(slideshow,2000)
slideshow()


function slideshow()
{ var i=0;
    image=document.createElement("img");
    setInterval(function (){
    image.setAttribute("src",value=imagearr[i])
    document.querySelector("#slideshow").append(image);
    i=i+1;
    if (i==imagearr.length)
    {
        i=0;
    }
    console.log(1)
    },2000)
    
}
function sortfunction(index)
{
    if (index==0)
    {
        data.sort(function (a,b){
            return +(a.rating) - +(b.rating);
        })
        display()
    }
    else 
        {
            data.sort(function (a,b){
                return +(b.rating)- +(a.rating);
            })
            display()
        }
}

var items=[];


function Object(x)
{
    this["image"]=x[0];
    this["name"]=x[1];
    this["rating"]=x[2];
    this["release"]=x[3]
};

let arr=[
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z","SpiderMan","4","2019"],
["https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png","Sipderman2","4","2020"],
["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnp8E_VF5k2NoxLX1eOgIoJa2XY-SsgJlDoA&usqp=CAU","SpiderMan 3","5","2021"],
["https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","Avengers","4","2019"],
["https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","Avengers II","5","2020"],
["https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810","Avengers III","4.5","2021"],
["https://flxt.tmsimg.com/assets/p170620_p_v10_an.jpg","IronMan","3","2018"],
["https://st1.bollywoodlife.com/wp-content/uploads/2019/01/Iron-Man-1.jpg?impolicy=Medium_Widthonly&w=600","IronMan II","4","2020"],
["https://st1.bollywoodlife.com/wp-content/uploads/2019/01/Iron-Man-1.jpg?impolicy=Medium_Widthonly&w=600","IronMan III","5","2021"],
]

for (var i=0;i<arr.length;i++)
{
    let obj=new Object(arr[i]);
     items.push(obj) ;
     
}

localStorage.setItem("Items",JSON.stringify(items));
console.log(items)

var data=JSON.parse(localStorage.getItem("Items"))||[];
console.log(data)
display()
console.log(data[0].name)
function display()
{
    document.querySelector("#movies").textContent="";
    data.map(function (ele,index)
    {
        let image=document.createElement("img");
        image.setAttribute("src",ele.image);
        let name1=document.createElement("h2");
        name1.textContent=`Name: ${ele.name}`;
        let rating=document.createElement("h3");
        rating.textContent=`Rating: ${ele.rating}`;
        let date=document.createElement("h3");
        date.textContent= `Release Date : ${ele.release}`;
        div2=document.createElement("div");
        div2.append(name1,rating,date)
        div=document.createElement("div");
        div.append(image,div2);
        document.querySelector("#movies").append(div)
    })
}

