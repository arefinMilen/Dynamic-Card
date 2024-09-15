//dummy text
// const posts = [
    

//     {
//         title:"post title 1",
//         body:'this is Description 1'
//     },
//     {
//         title:"post title 2",
//         body:'this is Description 2'
//     },
//     {
//         title:"post title 3",
//         body:'this is Description 3'
//     },
//     {
//         title:"post title 4",
//         body:'this is Description 4'
//     },
//     {
//         title:"post title 5",
//         body:'this is Description 5'
//     },
//     {
//         title:"post title 6",
//         body:'this is Description 6'
//     },
//     {
//         title:"post title 7",
//         body:'this is Description 7'
//     },
//     {
//         title:"post title 8",
//         body:'this is Description 8'
//     }

// ]

const fetchData =async(config)=>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("data is not loaded");
    }
       
        
    
   
    
};



//selection data
var postsElement = document.querySelector(".posts");
const loadAllData = async() =>
{
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
   posts.map((post) =>{
   const postElement = document.createElement("div");
   postElement.classList.add("post");
   postElement.innerHTML = ` <h4 class="post-title">
       ${post.title}
   </h4>
   <p class="post-body">${post.body} </p>`
   postsElement.appendChild(postElement);

   });
   
};
loadAllData();


// <div class="post">
//
// </div>
