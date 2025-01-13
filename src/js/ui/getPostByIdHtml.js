export function htmlForSinglePost(post, onePostContainer) {
    onePostContainer.innerHTML = '';

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, 'text/html');
    const img = doc.querySelector('img');
    const imgSrc = img ? img.getAttribute('src') : null;

    if(imgSrc) {
        onePostContainer.innerHTML += `<div class="container postCard">
        <a href="spesificblog.html?id=${post.id}"">
        <h3 class="feed-h3">${post.title.rendered}</h3>
        <p>${post.content.rendered}</p>
        <img src="${imgSrc}" alt="${img.getAttribute('alt') || 'Post image'}">
        </a>
        </div>`;
    }

}


