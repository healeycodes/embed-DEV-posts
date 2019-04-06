const api = 'https://dev.to/api';

/** 
 * Creates a DEV feed of posts.
 * @param {Element} elem - Place list of posts inside this element.
 * @param {string} username - DEV username, e.g. 'ben'.
 * @param {number} num - Number of posts to list. 
 */
function createFeed(elem, username, num = 5) {
    const feed = document.createElement('ul');
    feed.classList.add('dev-feed-list');
    getPosts(username)
        .then(function (posts) {
            posts.length = num;
            posts.forEach(function (post) {
                const item = document.createElement('li');
                const link = document.createElement('a');
                link.href = post.url;
                link.innerText = post.title;
                link.classList.add('dev-feed-item');
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
