fetch("https://api.enstrayed.com/nowplaying?format=html").then(response => response.text()).then(response => {document.getElementById("nowplaying").innerHTML = response}) 

fetch("https://api.enstrayed.com/blogposts?format=html").then(response => response.text()).then(response => {document.getElementById("blogposts").innerHTML += response}) 