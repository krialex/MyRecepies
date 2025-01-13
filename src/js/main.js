import { getPosts } from './auth/getAllPosts.js';
import { featuredPostsHtml } from './ui/featuredPostsHtml.js';
import { featuredPosts } from './auth/featuredPosts.js';
import { htmlForPosts } from './ui/htmlForPosts.js';
import { getToTop } from './ui/toTopBtn.js';
import { htmlForSinglePost } from './ui/getPostByIdHtml.js';

async function init() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    try {
        const postData = await getPosts();
        const allPosts = postData;

        console.log(allPosts);

        loader.style.display = 'none';

        const postContainer = document.querySelector('.feed-container');
        if (postContainer) {
            htmlForPosts(allPosts, postContainer);
        }

        const featuredSection = document.querySelector('.wrapper');
        const topPosts = featuredPosts(allPosts);
        if (featuredSection) {
            featuredPostsHtml(topPosts);
        }

        const onePostContainer = document.querySelector(".blog-post-site");
        if (onePostContainer) {
            const postId = getPostIdFromUrl();

            console.log('Hentet ID fra URL:', postId);

            if (postId) {
                const singlePost = allPosts.find(p => p.id === Number(postId));
                if (singlePost) {
                    htmlForSinglePost(singlePost, onePostContainer);

                    console.log(singlePost);



                } else {
                    console.log('Post med ID ' + postId + ' ble ikke funnet');
                }
            }
        }

    } catch (error) {
        console.log('dette fungerte ikke nei...', error);
    }

    function getPostIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }
}
init();

getToTop();

