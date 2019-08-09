// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

var date = new Date(); // 2009-11-10
var month = date.toLocaleString('default', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});
console.log(month);

const headerContainer = document.querySelector('.header-container');

function Header() {
  const header = document.createElement('div');
  header.classList.add('header');

  const date = document.createElement('span');
  date.classList.add('date');
  const h1 = document.createElement('h1');
  const temp = document.createElement('span');
  temp.classList.add('temp');

  header.append(date, h1, temp);

  date.textContent = month;
  h1.textContent = 'Lambda Times';
  const symbol = '°';
  temp.textContent = `98${symbol}`;

  return header;
}

headerContainer.appendChild(Header());

function temp(val) {
  val = parseFloat(val);
  return (val - 273.15) / 1.8;
}