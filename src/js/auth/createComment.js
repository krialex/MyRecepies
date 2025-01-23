export async function createComment(postId, author_name, author_email, content) {
    try {   
    const commentUrl = await fetch(`https://unipop.no/bloggapi/wp-json/wp/v2/comments`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ 
            post: postId, 
            author_name,
            author_email, 
            content }),
    });

    if (!commentUrl.ok) {
        throw new Error('Kunne ikke sende kommentar: ' + commentUrl.statusText);
    }
    console.log('Kommentar sendt!', await commentUrl.json());
} catch (error) {
    console.error('Feil ved sending av kommentar:', error);
    throw error;
}
  
} 