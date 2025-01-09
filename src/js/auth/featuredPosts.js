export function featuredPosts(posts) {
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedPosts.slice(0, 6);
}
