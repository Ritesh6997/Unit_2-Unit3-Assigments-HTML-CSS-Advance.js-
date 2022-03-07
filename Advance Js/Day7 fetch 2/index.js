let key="9bd5c7f573234d3b0fc415b8731a1062";

async function getWeatherData()
{
    try{
        let city=document.querySelector("#city").value;
        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        let data= await res.json();
        console.log(data);
        console.log(data.name);
        showWether(data)
    }
    catch (err){
        console.log(err)
    }
    
}

function showWether(d)
{
 let name=document.createElement("p")
 name.innerText=d.name;
let temp=document.createElement("p")
 temp.innerText=d.main.temp;
 let humidity=document.createElement("p");
 humidity.innerText=`Humidity: ${d.main.humidity}`;
 let presure=document.createElement("p");
 presure.innerText=`Presure: ${d.main.pressure}`;
 document.querySelector("#container").append(name,temp,humidity,presure)
}