async function getData(url)
{
    try {
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error:",error)
    }
}


function appendData(Data,parent)
{
    parent.innerText="";
    Data.map((ele)=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.urls.regular;
        let discription=document.createElement("h3");
        discription.innerText=ele.description;
        div.append(image,discription)
        parent.append(div)
    }) 

}

export{getData,appendData};

// full: "https://images.unsplash.com/photo-1640622842936-b81247a2d4a9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDI4NTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=85"
// raw: "https://images.unsplash.com/photo-1640622842936-b81247a2d4a9?ixid=MnwzMDI4NTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1"
// regular: "https://images.unsplash.com/photo-1640622842936-b81247a2d4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDI4NTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=80&w=1080"
// small: "https://images.unsplash.com/photo-1640622842936-b81247a2d4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDI4NTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=80&w=400"
// small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1640622842936-b81247a2d4a9"
// thumb: 

// 0:
// alt_description: null
// blur_hash: "LCG8WJvy0L%M^hNIkW%15[I[wbkC"
// categories: []
// color: "#8c5926"
// created_at: "2021-12-27T11:35:01-05:00"
// current_user_collections: []
// description: null
// height: 6000
// id: "1OG9mfUQkxE"
// liked_by_user: false
// likes: 71
// links: {self: 'https://api.unsplash.com/photos/1OG9mfUQkxE', html: 'https://unsplash.com/photos/1OG9mfUQkxE', download: 'https://unsplash.com/photos/1OG9mfUQkxE/download?i…nwzMDI4NTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw', download_location: 'https://api.unsplash.com/photos/1OG9mfUQkxE/downlo…nwzMDI4NTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw'}
// promoted_at: null
// sponsorship: {impression_urls: Array(1), tagline: 'Make the most of your 365', tagline_url: 'https://www.microsoft.com/en-us/microsoft-365', sponsor: {…}}
// topic_submissions: {}
// updated_at: "2022-02-20T21:25:44-05:00"
// urls: {raw: 'https://images.unsplash.com/photo-1640622842936-b8…fGFsbHwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1', full: 'https://images.unsplash.com/photo-1640622842936-b8…HwxfHx8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=85', regular: 'https://images.unsplash.com/photo-1640622842936-b8…fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=80&w=1080', small: 'https://images.unsplash.com/photo-1640622842936-b8…8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1640622842936-b8…8fHx8Mnx8MTY0NTQ2OTkxMw&ixlib=rb-1.2.1&q=80&w=200', …}
// user: {id: 'VKlg9Ffk2GE', updated_at: '2022-02-21T11:44:25-05:00', username: 'microsoft365', name: 'Microsoft 365', first_name: 'Microsoft', …}
// width: 4000