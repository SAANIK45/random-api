
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getUsers(data))
}

function getUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.background = 'coral';
        li.style.color = '#fff';
        li.style.width = '500px';
        li.style.margin = 'auto';
        li.style.marginTop = '10px';
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
loadUsers();