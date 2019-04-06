# Embed Your Latest DEV Posts Anywhere!

A tiny library for embedding your latest DEV posts, sorted by popularity. Explainer post [here](https://dev.to/healeycodes/embed-your-latest-dev-posts-anywhere-lj9)!

<hr>

#### `function createFeed(elem, username, numberOfPosts = 5)`

Creates a feed of DEV posts.

 * **Parameters:**
   * `elem` — `Element` — Place list of posts inside this element.
   * `username` — `string` — DEV username, e.g. 'ben'.
   * `numberOfPosts` — `number` — Number of posts to list.

<hr>

Generates HTML that looks like this:

```html
<div class="example">
  <ul class="dev-feed-list">
    <li class="dev-feed-item">
      <a href="https://dev.to/devteam/dev-community-is-open-sourcing-its-performance-metrics-via-skylight-221m">
        DEV Community Is Open-Sourcing Its Performance Metrics via Skylight
      </a>
    </li>
  </ul>
</div>
```

Use `.dev-feed-list` to style the list and `.dev-feed-item` to style the items.

<br>

Accepting PRs/issues 👍
