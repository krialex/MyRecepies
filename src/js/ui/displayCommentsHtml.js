export function displayComments(comments, commentsContainer) {
    commentsContainer.innerHTML = '';

    if (comments.length === 0) {
        commentsContainer.innerHTML = '<div>Det er ingen kommentarer her enda.. Bli den første til å kommentere!</div>';
        return;
    }

    comments.forEach(comment => {
        const avatarUrl = comment.author_avatar_urls["48"] || '/images/default-img.webp';
        const commentHtml = `<div class="comment">
                            <div class="header-comment"><img src="${avatarUrl}" alt="avatar-image">
                            <h4>${comment.author_name}</h4></div>
                            <p>${comment.content.rendered}</p>
                            <small>Publisert: ${new Date(comment.date).toLocaleString('no-NO')}</small>
                            <hr></div>`;

        commentsContainer.innerHTML += commentHtml;
    });
} 