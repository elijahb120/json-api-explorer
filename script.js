// so much empty
const fetchButton = document.getElementById("fetchButton")
const postList = document.getElementById("postList")

fetchButton.addEventListener("click",fetchPosts)

function fetchPosts() {
    console.log("fetching posts...")
    if (event.target.id === 'fetchButton')
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            response.json().then((data) => {
            console.log(data);
            for(let text of data)
            postList.innerHTML += `${text.title} </br> ${text.body}.</br> </br>`;

         })
    }
    )
}
