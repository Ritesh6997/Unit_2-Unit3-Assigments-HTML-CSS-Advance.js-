  crossorigin="anonymous"
  src="https://kit.fontawesome.com/629044acfa.js"
 

let key="9bd5c7f573234d3b0fc415b8731a1062";
async function getWeatherData(){
    try
    {
        let city=document.querySelector("#url").value;
        let res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`)
        let data=await res.json();
        console.log(data);
        displayData(data);
        displayDataofweek(data.list)
        }
    catch (err){
        console.log("err:" ,err) 
    }  
}

function displayData(ele)
{
    console.log(ele)
    x=document.querySelector("#gmap_canvas")
    let city=document.querySelector("#url").value;
    x.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let pardiv=document.querySelector("#displaydata").innerText="";
        let name=document.createElement("p");
        name.innerText=`Name:${ele.city.name}`;
        let mintemp=document.createElement("p");
        mintemp.innerText=`Min Temp: ${ele.list[0].main.temp_min}`;
        let maxtemp=document.createElement("p");
        maxtemp.innerText=`Max Temp: ${ele.list[0].main.temp_max}`;
        let wind=document.createElement("p");
        let humidity=document.createElement("p");
        humidity.innerText=`Humidity: ${ele.list[0].main.humidity}`
        wind.innerText=`Wind Speed: ${ele.list[0].wind.speed}`;
        let clouds= document.createElement("p");
        clouds.innerText=`Clouds: ${ele.clouds}`;
        let sunrise=document.createElement("p");
        sunrise.innerText=`Sunrise: ${ele.city.sunrise}`;
        let sunset=document.createElement("p");
        sunset.innerText=`Sunset: ${ele.city.sunset}`;
        let description=document.createElement("p");
        description.innerText=`Description: ${ele.list[0].weather[0].description}`;
        let i=document.createElement("i");
        i.setAttribute("class",value="fas fa-sunset")
        document.querySelector("#displaydata").append(name,mintemp,maxtemp,humidity,wind,description,sunrise,sunset,i)
        

}

 function displayDataofweek(data)
{
    document.querySelector("#week").innerText="";
    data.map(function (ele){
        let div=document.createElement("div")
        let mintemp=document.createElement("p");
        mintemp.innerText=`Min Temp: ${ele.main.temp_min}`;
        let maxtemp=document.createElement("p");
        maxtemp.innerText=`Max Temp: ${ele.main.temp_max}`;
        let wind=document.createElement("p");
        let humidity=document.createElement("p");
        humidity.innerText=`Humidity: ${ele.main.humidity}`
        wind.innerText=`Wind Speed: ${ele.wind.speed}`;
        let description=document.createElement("p");
        description.innerText=`Description: ${ele.weather[0].description}`;
        div.append(description,mintemp,maxtemp,wind,humidity);
        document.querySelector("#week").append(div)
    })

}


// feels_like: 13.48
// grnd_level: 979
// humidity: 28
// pressure: 1012
// sea_level: 1012
// temp: 15.18
// temp_max: 15.18
// temp_min: 15.18
// [[Prototype]]: Object
// name: "Wardha"
// sys:
// country: "IN"
// id: 9069
// sunrise: 1644024045
// sunset: 1644064696
// type: 1
// [[Prototype]]: Object
// timezone: 19800
// visibility: 10000
// weather: Array(1)
// 0:
// description: "clear sky"
// icon: "01n"
// id: 800
// main: "Clear"