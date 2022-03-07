// AIzaSyBHCrPkKASbEThW93PHMBb4ytD5aXG0MMU

 let key="AIzaSyCnqvOa5JvbmVkks0UCCZTV2s-iBQFd9aY";
async function homepageData()
{
    let inputvalue=document.getElementById("searchinput").value;
    let res=await fetch (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${key}&maxResults=20`);
    let data=await res.json();
    console.log(data);
    displaydata(data,"trending");
}
homepageData()
async function searchData()
{
    try {
        let inputvalue=document.getElementById("searchinput").value;
        console.log(inputvalue)
        if(inputvalue)
        { console.log(inputvalue)
            let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inputvalue}&key=${key}&type=video&maxResults=30&part=snippet`)
            let data=await res.json();
            console.log(data);
            displaydata(data)
        }
   
    } catch (error) {
        console.log(error)
    }
   
}
 const displaydata=(data,para)=>{
    let {items}=data
    console.log(items)
    let maindiv=document.getElementById("homepagecontainer").innerText="";
    if (para=="trending")   
    {
        items.map(({id})=>{
        let div=document.createElement('div');
        iframe=document.createElement("iframe");
        if (typeof(id)=="object"){
            iframe.src=`https://www.youtube.com/embed/${id.videoId}`
        }
        else{
            iframe.src=`https://www.youtube.com/embed/${id}`
        }
        iframe.setAttribute("allowfullscreen",true)
        div.append(iframe)
        document.getElementById("homepagecontainer").append(div);
        });
    }
    else{
       items.map((ele,index)=>{
        let div=document.createElement('div');
        let image=document.createElement("img");
        image.src=ele.snippet.thumbnails.high.url;
        let name=document.createElement("h3");
        name.textContent=ele.snippet.title;
        div.append(image,name);
        div.addEventListener("click",function(){
            addtolocal(ele);
        })
        document.getElementById("homepagecontainer").append(div);
       })
    } 
}

function addtolocal(ele)
{
    console.log(ele);
    obj={items:[]}
    console.log(ele);
    obj.items.push(ele);
    displaydata(obj,"trending");
    
}


