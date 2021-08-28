function loadPosts(){
    try{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPosts(data))
    }
    catch(error){
        console.log(error)
    }
    
}

function getPosts(data){
    const postConatainer = document.getElementById('post-container');
    for(const post of data){
        const div = document.createElement('div');
        div.classList = 'post';
        const title = post.title;
        const body = post.body;
        div.innerHTML =`
        <h4>${post.id}</h4>
        <h2>${title}</h2>
        <p>${body}</p>
        <a href="#" onclick="loadPostId(${post.id})" class="btn btn-primary">More Info</a>
        `
        postConatainer.appendChild(div);

    }
}
loadPosts();

const loadPostId = (postId) =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadPostDetails(data))

}

const loadPostDetails = (data) =>{
    console.log(data);
    const postDetailContainer = document.getElementById('load-post-detail');
    postDetailContainer.textContent = ' ';
    const detailDiv = document.createElement('div');
    detailDiv.classList = 'detail-info';
    detailDiv.innerHTML = `
        <h4>${data.id}</h4>
        <h2>${data.title}</h2>
        <p>${data.body}</p>
    `
    postDetailContainer.appendChild(detailDiv);
}
