import { initComments } from './../event/initComments.js';
import { createComment } from './../auth/createComment.js';
import { getPostIdFromUrl } from './../auth/getIdFromUrl.js';


const authorName = document.getElementById('author_name');
const authorEmail = document.getElementById("author_email");
const commentContent = document.getElementById("comment_content");
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorContent = document.getElementById("error-content");

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }


export function sendCommentForm() {
document.getElementById('send-comment').addEventListener('click', async (event) => {
    event.preventDefault();

    let valueValid = true;

    if(authorName.value.trim().length < 2) {
        errorName.style.display = "block";
        valueValid = false;
    } else {
        errorName.style.display = "none";
    }
    if(authorEmail.value.trim() === '' || !validateEmail(authorEmail.value)) {
        errorEmail.style.display = "block";
        valueValid = false;
    } else {
        errorEmail.style.display = "none";
    }
    if(commentContent.value.trim().length < 1) {
        errorContent.style.display = "block";
        valueValid = false;
    } else {
        errorContent.style.display = "none";
    }
    if(valueValid) {
    const postId = getPostIdFromUrl(); 
    try {
        await createComment(postId, authorName.value.trim(), authorEmail.value.trim(), commentContent.value.trim());
        await initComments(postId); 

        authorName.value = '';
        authorEmail.value = '';
        commentContent.value = '';

        alert('Kommentaren ble sendt!');
        window.location.reload();
    } catch (error) {
        console.error('Kunne ikke sende kommentaren:', error);
        alert('Noe gikk galt. Prøv igjen senere.');
    }
} 
});
}




