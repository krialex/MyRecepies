export async function createComment(id, author_name, author_email, content) {
    const commentUrl = await fetch('https://unipop.no/bloggapi/wp-json/wp/v2/comments', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ id, author_name, author_email, content }),
    });

    if (commentUrl.ok) {
        await commentUrl.json();
        console.log("klarte ikke å sende POST på kommentar.");
    }
    throw console.error('Could not send POST comment..');
    
} // her holder jeg på enda.. funker ikke.