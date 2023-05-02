const businessButton = document.getElementById('business');
const enterButton = document.getElementById('entertainment');
const generalButton = document.getElementById('general');
const healthButton = document.getElementById('health');
const sportsButton = document.getElementById('sports');
const techButton = document.getElementById('technology');

const newsContainer = document.getElementById('news-container');
let articlesLoaded = 0;
const articlesPerPage = 6;
const loadMoreButton = document.getElementById('load-more-button');
// Show all category buttons
  
businessButton.addEventListener('click', () => {
  loadArticlesByCategory('business');
});

generalButton.addEventListener('click', () => {
  loadArticlesByCategory('general');
});

healthButton.addEventListener('click', () => {
  loadArticlesByCategory('health');
});

sportsButton.addEventListener('click', () => {
  loadArticlesByCategory('sports');
});
techButton.addEventListener('click', () => {
  loadArticlesByCategory('technology');
});
enterButton.addEventListener('click', () => {
  loadArticlesByCategory('entertainment');
});


loadArticles();

function loadArticlesByCategory(category) {
    articlesLoaded = 0; // Reset the loaded articles count
    newsContainer.innerHTML = ''; // Clear the news container
    // Fetch data from NewsAPI with the selected category
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2b69c6fdc51241cb9848b8270de11c77`)
      .then(response => response.json())
      .then(data => {
        // Generate HTML content based on NewsAPI data
        data.articles.slice(0, articlesPerPage).forEach(article => {
          const articleHtml = `
            <div class="col-md-6">
              <div class="blog-item">
                <figure class="blog-thumb">
                  <img src="${article.urlToImage}" alt="" width="360" height="200">
                </figure>
                <div class="blog-text">
                  <div class="post-date">${article.publishedAt}</div>
                  <h4 class="blog-title"><a href="${article.url}">${article.title.slice(0, 50)}</a></h4>
                  <div class="post-meta">
                    <a href=""><span>by</span> ${article.author}</a>
                  </div>
                  <p>${article.description.slice(0,50)}</p>
                </div>
              </div>
            </div>
          `;
          newsContainer.innerHTML += articleHtml;
        });
  
        // Hide Load more button if all articles have been loaded
    
      });
  }


// Load initial articles
loadArticles();

// Load more articles when Load more button is clicked
loadMoreButton.addEventListener('click', loadArticles);

function loadArticles() {
  // Fetch data from NewsAPI
  fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2b69c6fdc51241cb9848b8270de11c77`)
    .then(response => response.json())
    .then(data => {
      // Get a slice of the articles list from the last loaded article index to the new index
      const articles = data.articles.slice(articlesLoaded, articlesLoaded + articlesPerPage);
      
      // Increment the loaded articles count
      articlesLoaded += articlesPerPage;

      // Generate HTML content based on NewsAPI data
      articles.forEach(article => {
        const articleHtml = `
          <div class="col-md-6">
            <div class="blog-item">
              <figure class="blog-thumb">
                <img src="${article.urlToImage}" alt="" width="360" height="200">
              </figure>
              <div class="blog-text">
                <div class="post-date">${article.publishedAt}</div>
                <h4 class="blog-title"><a href="${article.url}">${article.title.slice(0, 50)}</a></h4>
                <div class="post-meta">
                  <a href=""><span>by</span> ${article.author}</a>
                </div>
                <p>${article.description.slice(0,50)}</p>
              </div>
            </div>
          </div>
        `;
        newsContainer.innerHTML += articleHtml;
      });

      // Hide Load more button if all articles have been loaded
      if (articlesLoaded >= data.articles.length) {
        loadMoreButton.style.display = 'none';
      }
    });
}

// // Get all the category buttons
// const categoryButtons = document.querySelectorAll('.nav-btn');

// // Set up click event listener for each category button
// categoryButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Clear the news container before loading new articles
//     newsContainer.innerHTML = '';

//     // Get the category value from the button's data-category attribute
//     const category = button.getAttribute('data-category');

//     // Fetch data from NewsAPI with the selected category
//     fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2b69c6fdc51241cb9848b8270de11c77`)
//       .then(response => response.json())
//       .then(data => {
//         // Reset the loaded articles count
//         articlesLoaded = 0;

//         // Load the initial set of articles
//         loadArticles(data);
//       });
//   });
// });

// // Load initial articles
// loadArticles();

// // Load more articles when Load more button is clicked
// loadMoreButton.addEventListener('click', () => loadArticles());

// function loadArticles(data) {
//   // Get a slice of the articles list from the last loaded article index to the new index
//   const articles = data.articles.slice(articlesLoaded, articlesLoaded + articlesPerPage);

//   // Increment the loaded articles count
//   articlesLoaded += articlesPerPage;

//   // Generate HTML content based on NewsAPI data
//   articles.forEach(article => {
//     const articleHtml = `
//       <div class="col-md-6">
//         <div class="blog-item">
//           <figure class="blog-thumb">
//             <img src="${article.urlToImage}" alt="" width="360" height="200">
//           </figure>
//           <div class="blog-text">
//             <div class="post-date">${article.publishedAt}</div>
//             <h4 class="blog-title"><a href="${article.url}">${article.title.slice(0, 50)}</a></h4>
//             <div class="post-meta">
//               <a href=""><span>by</span> ${article.author}</a>
//             </div>
//             <p>${article.description.slice(0,50)}</p>
//           </div>
//         </div>
//       </div>
//     `;
//     newsContainer.innerHTML += articleHtml;
//   });

//   // Hide Load more button if all articles have been loaded
//   if (articlesLoaded >= data.articles.length) {
//     loadMoreButton.style.display = 'none';
//   }
// }

