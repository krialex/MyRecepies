export async function getPosts() {
    try {
        const response = await fetch('https://unipop.no/bloggapi/wp-json/wp/v2/posts/?per_page=100');
        const result = await response.json();

        console.log(result);

        return result;
    } catch(error) {
        console.log(error, "could not fetch posts..")
    }
}


