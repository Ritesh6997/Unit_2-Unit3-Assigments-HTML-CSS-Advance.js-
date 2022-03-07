
async function getData(url)
{
    let res=await fetch(url);
    let data=await res.json();
    return data;
}


function appendData(data,parent,who){

    if (who=="rotd")
    {
        parent.innerHTML=null;
        data.meals.forEach((ele)=> {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.strMealThumb;
        let p=document.createElement("p");
        p.innerText=ele.strMeal;
        div.setAttribute("id","rotd1")
        
        parent.setAttribute("id","new_div");
        let ul=document.createElement("ul")
       
        var comp=-8;
        for (let key in ele)
        {
        // console.log(key,comp)
        if (key=="strIngredient"+comp)
        {
            if (ele[key]!="")
            {let li=document.createElement("li");
            li.append(`${key} : ${ele[key]}`)
            console.log(li)
            ul.append(li)}
        }
            
         comp++;
        }
        let div2=document.createElement("div");
        div2.append(p,ul)
        div.append(img,div2);
        parent.append(div); 
        });

    }
    else{
        parent.innerHTML=null;
        data.meals.forEach((ele)=> {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.strMealThumb;
        let p=document.createElement("p");
        p.innerText=ele.strMeal;
        div.append(img,p);
        parent.setAttribute("id","search_div_result")
        parent.append(div); 
    });

    }
    
}





export {getData,appendData}