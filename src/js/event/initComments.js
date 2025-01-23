import { fetchComments } from "../auth/fetchComments.js";
import { displayComments } from "../ui/displayCommentsHtml.js";

export async function initComments(postId) {
    const commentsContainer = document.querySelector('.comments-container');

    try {
        const comments = await fetchComments(postId);
        displayComments(comments, commentsContainer);
    } catch (error) {
        commentsContainer.innerHTML = `<p>Kunne ikke laste inn kommentarer...</p>`;
    }
}
