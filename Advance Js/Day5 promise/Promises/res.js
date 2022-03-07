function OrderFood(){

    let status="open";
    let order =document.querySelector("#food").value;
    if (order!=="")
    {        
        alert("Your order is Preparing")
    }
    let food_Promise= new Promise(function (resolve,reject){
      setTimeout(function(){
        if (status==="open")
        {
            resolve(order);
        }
        else {
            reject("Resturent is closed")
        }
      },5000);
    });

    food_Promise.then(function(res){
        console.log("res",res)
        displayid();
        displayimg();
    });
    food_Promise.catch(function(err)
    {
        console.log(err);
    });
}
var orderno=101;
function displayid()
{
    document.querySelector("#display_id").textContent="";
    let display=document.querySelector("#display_id");
    display.append(orderno);
    orderno++;
}
function displayimg(){
    let order=document.querySelector("#food").value;
    document.querySelector("#show_img").innerText="";
    let display=document.querySelector("#show_img");
    let image=document.createElement("img");

    if (order=="burger")
    {
        image.setAttribute("src",value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRgvH8xELOIxt6Y3qpZ-UYKBykMdN7X803w&usqp=CAU")
        display.append(image);
    }
    else if (order=="pizza")
    {
        image.setAttribute("src",value="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg")
        display.append(image);
    }
    else if (order=="coffee")
    {
            image.setAttribute("src",value="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
            display.append(image);
    }

}