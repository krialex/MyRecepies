export function displayComments(comments, commentsContainer) {
    commentsContainer.innerHtml = '';

    if (comments.length === 0) {
        commentsContainer.innerHtml = '<div>Det er ingen kommentarer her enda.. Bli den første til å kommentere!</div>';
        return;
    }

    comments.forEach(comment => {
        const commentHtml = `<div class="comment">
                            <h4>${comment.author_name}</h4><p>${comment.content.rendered}</p>
                            <small>Publisert: ${new Date(comment.date).toLocaleString('no-NO')}</small>
                            </div>`;

        commentsContainer.innerHtml += commentHtml;
    });
} //her holder jeg på enda. funker ikke.