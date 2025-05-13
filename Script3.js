// Fetch and display RSS feed using rss2json API
function loadFeed(feedUrl) {
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
    const contentDiv = document.getElementById('content');
  
    // Clear previous content
    contentDiv.innerHTML = '<p>Loading feed...</p>';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Feed request failed");
        }
        return response.json();
      })
      .then(data => {
        if (data.status !== "ok" || !data.items) {
          throw new Error("Feed data invalid");
        }
        displayArticles(data.items);
      })
      .catch(error => {
        console.error("Error:", error);
        contentDiv.innerHTML = '<p class="error">❌ Unable to load the feed. Please try again later.</p>';
      });
  }
  
  // Render RSS articles in the DOM
  function displayArticles(articles) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    if (!articles.length) {
      contentDiv.innerHTML = '<p>No articles found.</p>';
      return;
    }
  
    articles.forEach(article => {
      const articleEl = document.createElement('article');
      articleEl.innerHTML = `
        <h3><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
        <p>${article.description}</p>
      `;
      contentDiv.appendChild(articleEl);
    });
  }
  
  // Setup event listener for dropdown
  document.getElementById('feed-selector').addEventListener('change', function () {
    loadFeed(this.value);
  });
  
  // Load the default feed on page load
  window.addEventListener('DOMContentLoaded', () => {
    const defaultFeed = document.getElementById('feed-selector').value;
    loadFeed(defaultFeed);
  });
  