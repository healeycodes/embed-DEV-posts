const api = 'https://dev.to/api';

/** 
 * Creates a feed of DEV posts.
 * @param {Element} elem - Place list of posts inside this element.
 * @param {string} username - DEV username, e.g. 'ben'.
 * @param {number} numberOfPosts - Number of posts to list. 
 */
function createFeed(elem, username, numberOfPosts = 5) {
    const feed = document.createElement('ul');
    feed.classList.add('dev-feed-list');
    getPosts(username)
        .then(function (posts) {
            posts.length = numberOfPosts;
            posts.forEach(function (post) {
                const item = document.createElement('li');
                item.classList.add('dev-feed-item');
                const link = document.createElement('a');
                link.href = post.url;
                link.innerText = post.title;
                item.appendChild(link);
                feed.appendChild(item);
            });
            elem.appendChild(feed);
        });
}

/**
 * Get a DEV user's post objects.
 * Only fetches previously 30 posts. Using `&page=X` is too slow.
 * @param {string} username - DEV username, e.g. 'ben'.
 * @returns {array} User's post objects.
 */
function getPosts(username) {
    return fetch(`${api}/articles?username=${username}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            return posts.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count);
        });
}
