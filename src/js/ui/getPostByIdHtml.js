export function htmlForSinglePost(post, onePostContainer) {
    onePostContainer.innerHTML = '';

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, 'text/html');
    const img = doc.querySelector('img');
    const imgSrc = img ? img.getAttribute('src') : null;

    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('no-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    if (imgSrc) {
        onePostContainer.innerHTML += `
        <div class="container onePost">
                <h3 class="feed-h3 onePostH3">${post.title.rendered}</h3>
                <div>Publisert: ${formattedDate}</div>
                <p>${post.content.rendered}</p>
        </div>`;
    }

    const idInNav = document.querySelector(".spesificblog-list");
    if (idInNav) {
        idInNav.innerHTML = '';

        const navItem = document.createElement("div");
        navItem.textContent = post.title.rendered;
        navItem.classList.add("current");
        idInNav.appendChild(navItem);
    } else {
        console.log('Det gikk ikke å finne tittel til id i posten.');
    }
}
