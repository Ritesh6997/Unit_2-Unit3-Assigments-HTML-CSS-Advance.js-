document.querySelector("form").addEventListener("submit",mysignup)

var loginData=JSON.parse(localStorage.getItem("LoginData"))||[]
function mysignup(event)
{
    event.preventDefault()
    name1=document.querySelector("#name").value;
    Mobilenum=document.querySelector("#num").value;
    Email=document.querySelector("#email").value;
    Password=document.querySelector("#pass").value;
    if (name1==""||Mobilenum==""||Email==""||Password=="")
    {
        alert("all feilds are mandatory")
    }
    else{
        var obj=new myfunction(name1,Mobilenum,Email,Password)
        loginData.push(obj);
        alert("SignUp sucessful")
        window.location.href='login.html'
        localStorage.setItem("LoginData",JSON.stringify(loginData))
    }

}
function myfunction(n,m,e,p)
{
    this.name1=n
    this.Mobumber=m
    this.Email=e
    this.Password=p
}
console.log(loginData);