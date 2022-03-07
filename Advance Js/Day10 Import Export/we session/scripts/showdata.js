
async function getData(url)
{
    try {
        let res=await fetch(url);
        let data=await res.json();
        return data
    } 
    catch (error) {
        console.log ("error:",error);
    }
    ;
}

function appendData(data,parent,who){

    data.forEach((ele)=> {
        let div=document.createElement("div");
        let p=document.createElement("p");
        p.innerText=ele.title;
        let img=document.createElement("img");
        img.src=ele.image;
        div.append(img,p);
        parent.append(div); 
    });

}

export {getData,appendData};

// https://fakestoreapi.com/products/category/jewelery