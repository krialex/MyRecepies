import { postsAPI } from '../js/auth/variables.js';

async function getPosts() {
    const postContainer = document.querySelector(".displayPosts");
    postContainer.innerHTML += "";

    try {
        const response = await fetch(postsAPI);
        const result = await response.json();

        console.log(result);

        result.forEach(post => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');

            const img = doc.querySelector('img');
            const imgSrc = img ? img.getAttribute('src') : null;

            if(imgSrc) {
                postContainer.innerHTML += `<div class="container postCard">
                <a href="spesificblog.html">
                <h2>${post.title.rendered}</h2>
                <img src="${imgSrc}" alt="${img.getAttribute('alt') || 'Post image'}">
                </a>
                </div>`;
            }

        });
    } catch(error) {
        console.log(error, "could not fetch posts..")
    }
}
getPosts();

