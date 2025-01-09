/*export function featuredPostsHtml(topPosts) {
    const featuredSection = document.querySelector('.wrapper');
    featuredSection.innerHTML = '';

    if (topPosts.length === 0) {
        featuredSection.innerHTML = '<p>There are no posts here yet</p>';
        return;
    }

    let carouselHTML = `<div id="featuredCarousel" class="carousel slide"> <div class="carousel-inner">`;

    topPosts.forEach((post) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');

        const img = doc.querySelector('img');
        const imgSrc = img ? img.getAttribute('src') : null;

        if(imgSrc) {
            carouselHTML.innerHTML += `<div class="container postCard">
            <a href="spesificblog.html?id=${post.id}" class="carousel-item" aria-lable="View Post">
            <h3>${post.title.rendered}</h3>
            <img src="${imgSrc}" alt="${img.getAttribute('alt') || 'Post image'}">
            </a>
            </div>
            </div></div>
            </div>
                     <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                     </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                     </button>
                     </div>`;
        }
    });

    featuredSection.innerHTML = carouselHTML;
} */

export function featuredPostsHtml(topPosts) {
    const featuredSection = document.querySelector('.wrapper');
    featuredSection.innerHTML = '';

    if (topPosts.length === 0) {
        featuredSection.innerHTML = '<p>There are no posts here yet</p>';
        return;
    }

    let carouselHTML = `
        <div id="featuredCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
    `;

    topPosts.forEach((post, index) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const img = doc.querySelector('img');
        const imgSrc = img ? img.getAttribute('src') : 'default-image.jpg';

        carouselHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <a href="spesificblog.html?id=${post.id}">
                    <img src="${imgSrc}" alt="${img.getAttribute('alt') || 'Post image'}" class="d-block w-100">
                    <div class="carousel-caption">
                        <h3>${post.title.rendered}</h3>
                    </div>
                </a>
            </div>
        `;
    });

    carouselHTML += `
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;

    featuredSection.innerHTML = carouselHTML;
}
