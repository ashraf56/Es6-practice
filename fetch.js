

let load = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => sideload(json))
 
}

let sideload=(json) =>{
    let divPost=document.getElementById('post');
    for (const user of json) {
        console.log(user);
      let div=document.createElement('div');
      div.classList.add('postDiv') 
    div.innerHTML=`
    <h3>user-id=${user.id}</h3>
    <h3>user-title=${user.title}</h3>
    
    `
     
  divPost.appendChild(div);
    }

}

load()