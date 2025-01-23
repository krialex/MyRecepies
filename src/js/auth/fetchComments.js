export async function fetchComments(postId) {
    try {
        const response = await fetch(`https://unipop.no/bloggapi/wp-json/wp/v2/comments?post=${postId}`);
        if(!response.ok) {
            throw new Error('Kunne ikke hente kommentarer');
        }
        console.log(response);
        return await response.json();
    } catch (error) {
        console.error('Det ble feil med henting av kommentarer: ', error);
        return [];
    }
}