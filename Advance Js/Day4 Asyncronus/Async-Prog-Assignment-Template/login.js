
var loginData=JSON.parse(localStorage.getItem("LoginData"))||[]
console.log(loginData)
document.querySelector("form").addEventListener("submit",loginfunction)

function loginfunction(event)
{
    event.preventDefault()
    email=document.querySelector("#email").value;
    pass=document.querySelector("#pass").value;
    var is_present=false;
    for (var i=0;i<loginData.length;i++)
    {
        if (email==loginData[i].Email && pass==loginData[i].Password)
        {
            is_present=true;
            alert("login sucessful");
            window.location.href='index.html'
        }
    }
    if (is_present==false)
    {
        alert("check crediantail");
    }
}
