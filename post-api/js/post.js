function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPosts(data))
}

function getPosts(data){
    const postConatainer = document.getElementById('post-container');
    for(const post of data){
        console.log(post)
        const div = document.createElement('div');
        div.classList = 'post';
        const title = post.title;
        const body = post.body;
        div.innerHTML =`
        <h4>${post.id}</h4>
        <h2>${title}</h2>
        <p>${body}</p>
        `
        postConatainer.appendChild(div);

    }
}
loadPosts();