import { getPosts } from './auth/getAllPosts.js';
import { featuredPostsHtml } from './ui/featuredPostsHtml.js';
import { featuredPosts } from './auth/featuredPosts.js';
import { htmlForPosts } from './ui/htmlForPosts.js';

async function init() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    try {
        const postData = await getPosts();
        const allPosts = postData;

        console.log(allPosts);

        loader.style.display = 'none';

        const postContainer = document.querySelector('.feed-container');
        htmlForPosts(allPosts, postContainer);

        const topPosts = featuredPosts(allPosts);
        featuredPostsHtml(topPosts);

        console.log('hva skjer her??')
    } catch (error) {
        console.log('dette fungerte ikke nei...', error);
    }
}
init();
