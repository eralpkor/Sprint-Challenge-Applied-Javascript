// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author"> //
//     <div class="img-container"> //
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function card(article) {
  const card = document.createElement('div');
  card.classList.add('card');
  const headline = document.createElement('div');
  headline.textContent = article.headline;

  headline.classList.add('headline');
  const author = document.createElement('div');
  author.classList.add('author');

  // append to card element
  card.append(headline, author);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const images = document.createElement('img');
  images.src = article.authorPhoto;
  // append images to img container
  imgContainer.appendChild(images);

  const span = document.createElement('span');
  span.textContent = `By `;

  span.textContent = article.authorName;

  author.append(imgContainer, span);
  imgContainer.appendChild(images);

  cardsContainer.appendChild(card);

  return card;

}

// get data and run component function
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    for (const [key, value] of Object.entries(response.data.articles)) {
      value.forEach(val => {
        card(val)
      })
    }
  })
  .catch(err => console.log(`Something went wrong, ${err}`));