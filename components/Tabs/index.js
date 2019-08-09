// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

function tabComponent(topic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;

  tab.classList.add(topic);
  return tab;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((res) => {
    topics.appendChild(tabComponent('all'));
    res.data.topics.map(val => {
      topics.appendChild(tabComponent(val));
    });
  })

  .catch(error => {
    console.log('Sorry something went wrong ', error);
  });


// const topicsArray = Array.from(topics.children);
// console.log(topicsArray)

topics.addEventListener('click', function (event) {
  let name = event.target.classList[1];
  name = name.split('.')[0];

  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      if (name == 'all') {
        for (const [key, value] of Object.entries(response.data.articles)) {
          value.forEach(val => {
            card(val)
          })
        }
      } else {
        const res = response.data.articles[name];
        const cardsCont = document.querySelector('.cards-container');
        cardsCont.innerHTML = '';
        for (let i = 0; i < res.length; i++) {
          card(res[i]);
          console.log(res[i]);
        }
      }

    })
    .catch(err => console.log(`Something went wrong, ${err}`));
});