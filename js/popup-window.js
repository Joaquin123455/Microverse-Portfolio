const cardetails = [
  { 
    title: 'Tonic',
    img: './img/Snapshoot Portfolio.png',
    imgdsk: './img/desktop/Snapshoot3-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    textcontent: 'A daily selection of privately personalized reads; no accounts or sign-ups',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    btntxt: 'See Project'
  },

  {
    title: 'Multi-Post Stories',
    img: './img/Snapshoot Portfolio-2.png',
    imgdsk: './img/desktop/Snapshoot2-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    spansdsk: ['Facebook', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'javascript'],
    technologiesdsk: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    btntxt: 'See Project'
  },

  {
    title: 'Tonic',
    titledsk: 'Facebook 360',
    img: './img/Snapshoot Portfolio-3.png',
    imgdsk: './img/desktop/Snapshoot3-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    spansdsk: ['Facebook', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'javascript'],
    technologiesdsk: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    btntxt: 'See Project'
  },

  {
    title: 'Multi-Post Stories',
    titledsk: 'Uber Navigation',
    img: './img/Snapshoot Portfolio-4.png',
    imgdsk: './img/desktop/Snapshoot4- desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    spansdsk: ['Uber', 'Back End Dev', '2015'],
    technologies: ['HTML', 'CSS', 'javascript'],
    technologiesdsk: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    btntxt: 'See Project'
  }
];

const cardWorks = document.querySelector('#portfolio');
const cardWorks1 = document.querySelector('#portfolio1');
const cardWorks2 = document.querySelector('#portfolio2');
const cardWorks3 = document.querySelector('#portfolio3');

cardWorks.className = "works";  
const workCard = document.createElement('article');
const workCardDiv = document.createElement('div');
workCardDiv.className = "card-works";
cardWorks.appendChild(workCard);
workCard.className = 'card-works';
workCard.innerHTML = `<img src="./img/Snapshoot Portfolio.png" alt="snapshootimg" class="snapshoot-img">
<img src="./img/desktop/Snapshoot1-desktop.svg" alt="snapshootdsk" class="snapshoot-img-dsk">
<div class="adjust">
  <div class="leftblock">
    <h2 class="card-works-title">Tonic</h2>
    <div class="ref">
      <span class="client">Canopy</span>
      <span><i class="fa fa-circle fa-xs"></i></span>
      <span>Back End Dev</span>
      <span><i class="fa fa-circle"></i></span>
      <span class="year">2015</span>
    </div>
    <p class="card-primary-text">A daily selection of privately personalized reads; no accounts or sign-ups
      required.</p>
  </div>
  <ul class="tags">
    <li class="tag">html</button>
    <li class="tag">css</button>
    <li class="tag">javascript</button>
  </ul>
  <div class="ref">
    <button>See project</button>
  </div>
</div>`;