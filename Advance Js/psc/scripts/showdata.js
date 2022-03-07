async function getData(url)
{
    try{
        res=await fetch(url);
        data=await res.json();
        console.log(data)
    }

  catch (error) {
    console.log('error:',error);
}
   
}

function displaydata()
{
    
}