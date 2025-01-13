export function htmlForPosts(post, container) {
    container.innerHTML = '';

    post.forEach(post => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');

        const img = doc.querySelector('img');
        const imgSrc = img ? img.getAttribute('src') : null;

        if(imgSrc) {
            container.innerHTML += `<div class="container postCard">
            <a href="spesificblog.html?id=${post.id}"">
            <h3 class="feed-h3">${post.title.rendered}</h3>
            <img src="${imgSrc}" alt="${img.getAttribute('alt') || 'Post image'}">
            </a>
            </div>`;
        }

    });
}