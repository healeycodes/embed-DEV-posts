# Embed Your Latest DEV Posts Anywhere!

A tiny library for embedding DEV posts. Explainer post here!

<hr>

#### `function createFeed(elem, username, num = 5)`

Creates a DEV feed of posts.

 * **Parameters:**
   * `elem` — `Element` — - Place list of posts inside this element.
   * `username` — `string` — - DEV username, e.g. 'ben'.
   * `num` — `number` — - Number of posts to list.

<hr>

Generates HTML that looks like this:

```html
<div class="posts">
  <ul class="dev-feed-list">
    <li>
      <a href="https://dev.to/devteam/dev-community-is-open-sourcing-its-performance-metrics-via-skylight-221m" class="dev-feed-item">DEV Community Is Open-Sourcing Its Performance Metrics via Skylight</a>
    </li>
  </ul>
</div>
```

Use `.dev-feed-list` to style the list and `.dev-feed-item` to style the items.
