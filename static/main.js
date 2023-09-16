//primero con fetch
const endpointPosts="https://jsonplaceholder.typicode.com/posts"
const endpointUsers = "https://jsonplaceholder.typicode.com/users"
printPosts()

/*  */

//vesión resumida:
async function printPosts(){
    try{
        //obtiene los posts
        var resPosts= await axios(endpointPosts)
        var posts = resPosts.data
        //obtiene los usuarios
        var resUsers= await axios(endpointUsers)
        var users= resUsers.data
            //los pinta en el html
    const contenedor= document.getElementById("contenedor")
    let postsHTML=""
    posts.forEach((post)=>{
        //obtener el usuario
        const posterUser= users.find((user)=> user.id == post.userId)
        //crear el html
        postsHTML+=`
        <div class="post">
            <h3 class="titulo">${post.title}</h3>
            <p>${post.description || ""}</p>
            <hr>
            <div>
                <p>User: </p>
                <h5>${posterUser.name}</h5>
            </div>
            <div>
                <p>Website: </p>
                <h5>${posterUser.website}</h5>
            </div>
            <div>
                <p>Email: </p>
                <h5>${posterUser.email}</h5>
            </div>
        </div>
        ` 
    })
    contenedor.innerHTML= postsHTML
    }catch(error){console.log(error)}

}

//vesión sin resumir
/* async function printPosts(){
    //obtiene los posts
    const posts = await getPosts()
    //obtiene los usuarios
    const users = await getUsers()
    //ahora los pinta en el html
    const contenedor= document.getElementById("contenedor")
    let postsHTML=""
    posts.forEach((post)=>{
        //obtener el usuario
        const posterUser= users.find((user)=> user.id == post.userId)
        //crear el html
        postsHTML+=`
        <div class="post">
            <h3 class="titulo">${post.title}</h3>
            <p>${post.description || ""}</p>
            <hr>
            <div>
                <p>User: </p>
                <h5>${posterUser.name}</h5>
            </div>
            <div>
                <p>Website: </p>
                <h5>${posterUser.website}</h5>
            </div>
            <div>
                <p>Email: </p>
                <h5>${posterUser.email}</h5>
            </div>
        </div>
        ` 
    })
    contenedor.innerHTML= postsHTML
}

async function getPosts(){
    
    try{
        const response= await axios(endpointPosts)
        return response.data
    }catch(error){
        console.log(console.error())
    }
}

async function getUsers(){
    try{
        const response= await axios(endpointUsers)
        return response.data

    }catch(error){console.log(error)}
} */