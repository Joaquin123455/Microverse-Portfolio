const cardetails = [
  {
    title: 'Tonic',
    img: './img/Snapshoot-Portfolio.png',
    imagedsk: './img/desktop/Snapshoot1-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    textcontent: 'A daily selection of privately personalized reads; no accounts or sign-ups',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    btntxt: 'See Project',
  },

  {
    title: 'Multi-Post Stories',
    img: './img/Snapshoot-Portfolio-2.png',
    imagedsk: './img/desktop/Snapshoot2-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    spansdsk: ['Facebook', 'Back End Dev', '2015'],
    textcontent: 'A daily selection of privately personalized reads; no accounts or sign-ups',
    technologies: ['HTML', 'CSS', 'javascript'],
    technologiesdsk: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    btntxt: 'See Project',
  },

  {
    title: 'Tonic',
    titledsk: 'Facebook 360',
    img: './img/Snapshoot-Portfolio-3.png',
    imagedsk: './img/desktop/Snapshoot3-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    spansdsk: ['Facebook', 'Back End Dev', '2015'],
    textcontent: 'A daily selection of privately personalized reads; no accounts or sign-ups',
    technologies: ['HTML', 'CSS', 'javascript'],
    technologiesdsk: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    btntxt: 'See Project',
  },

  {
    title: 'Multi-Post Stories',
    titledsk: 'Uber Navigation',
    img: './img/Snapshoot-Portfolio-4.png',
    imagedsk: './img/desktop/Snapshoot4-desktop.svg',
    spans: ['Canopy', 'Back End Dev', '2015'],
    spansdsk: ['Uber', 'Back End Dev', '2015'],
    textcontent: 'A daily selection of privately personalized reads; no accounts or sign-ups',
    technologies: ['HTML', 'CSS', 'javascript'],
    technologiesdsk: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    btntxt: 'See Project',
  },
];

const cardWorks = document.querySelector('#portfolio');
const cardWorks1 = document.querySelector('#portfolio1');
const cardWorks2 = document.querySelector('#portfolio2');
const cardWorks3 = document.querySelector('#portfolio3');

cardWorks.className = 'works';
const workCard = document.createElement('article');
const workCardDiv = document.createElement('div');
workCardDiv.className = 'card-works';
cardWorks.appendChild(workCard);
workCard.className = 'card-works';
workCard.innerHTML = `<img src= ${cardetails[0].img} alt="snapshootimg" class="snapshoot-img">
<img src= ${cardetails[0].imagedsk} alt="snapshootdsk" class="snapshoot-img-dsk">
<div class="adjust">
  <div class="leftblock">
    <h2 class="card-works-title">${cardetails[0].title}</h2>
    <div class="ref">
      <span class="client">${cardetails[0].spans[0]}</span>
      <span><i class="fa fa-circle fa-xs"></i></span>
      <span>${cardetails[0].spans[1]}</span>
      <span><i class="fa fa-circle"></i></span>
      <span class="year">${cardetails[0].spans[2]}</span>
    </div>
    <p class="card-primary-text">${cardetails[0].textcontent}</p>
  </div>
  <ul class="tags">
    <li class="tag">${cardetails[0].technologies[0]}</li>
    <li class="tag">${cardetails[0].technologies[1]}</li>
    <li class="tag">${cardetails[0].technologies[2]}</li>
  </ul>
  <div class="ref">
    <button class="popup-btn">${cardetails[0].btntxt}</button>
  </div>
</div>`;

cardWorks1.className = 'works-2';
const workCard1 = document.createElement('article');
const workCardDiv1 = document.createElement('div');
workCardDiv1.className = 'card-works';
cardWorks1.appendChild(workCard1);
workCard1.className = 'card-works';
workCard1.innerHTML = `<img src=${cardetails[1].img} alt="snapshootimg" class="snapshoot-img">
<div class="adjust">
  <div class="leftblock">
    <h2 class="card-works-title-2">${cardetails[1].title}</h2>
    <div class="ref">
      <span class="client-1">${cardetails[1].spans[0]}</span>
      <span class="client-hidden">${cardetails[1].spansdsk[0]}</span>
      <span><i class="fa fa-circle fa-xs"></i></span>
      <span class="role">${cardetails[1].spans[1]}</span>
      <span><i class="fa fa-circle"></i></span>
      <span class="year">${cardetails[1].spans[2]}</span>
    </div>
    <p class="card-primary-text">${cardetails[1].textcontent}</p>
  </div>
  <ul class="tags">
    <li class="tag">${cardetails[1].technologies[0]}</li>
    <li class="tag">${cardetails[1].technologies[1]}</li>
    <li class="tag-hidden">${cardetails[1].technologiesdsk[2]}</li>
    <li class="tag">${cardetails[1].technologies[2]}</li>
  </ul>
  <div class="ref">
    <button class="popup-btn">${cardetails[1].btntxt}</button>
  </div>
</div>
<img src=${cardetails[1].imagedsk} alt="snapshootdsk" class="snapshoot-img-dsk-2">`;

cardWorks2.className = 'works-3';
const workCard2 = document.createElement('article');
const workCardDiv2 = document.createElement('div');
workCardDiv2.className = 'card-works';
cardWorks2.appendChild(workCard2);
workCard2.className = 'card-works';
workCard2.innerHTML = `<img src=${cardetails[2].img} alt="snapshootimg" class="snapshoot-img">
<img src=${cardetails[2].imagedsk} alt="snapshootdsk" class="snapshoot-img-dsk">
<div class="adjust">
  <div class="leftblock">
    <h2 class="card-works-title-1">${cardetails[2].title}</h2>
    <h2 class="card-works-title-hidden">${cardetails[2].titledsk}</h2>
    <div class="ref">
      <span class="client-1">${cardetails[2].spans[0]}</span>
      <span class="client-hidden">${cardetails[2].spansdsk[0]}</span>
      <span><i class="fa fa-circle fa-xs"></i></span>
      <span class="role">${cardetails[2].spans[1]}</span>
      <span><i class="fa fa-circle"></i></span>
      <span class="year">${cardetails[2].spans[2]}</span>
    </div>
    <p class="card-primary-text">${cardetails[2].textcontent}</p>
  </div>
  <ul class="tags">
    <li class="tag">${cardetails[2].technologies[0]}</li>
    <li class="tag">${cardetails[2].technologies[1]}</li>
    <li class="tag-hidden">${cardetails[2].technologiesdsk[2]}</li>
    <li class="tag">${cardetails[2].technologies[2]}</li>
  </ul>
  <div class="ref">
    <button class="popup-btn">${cardetails[2].btntxt}</button>
  </div>
</div>`;

cardWorks3.className = 'works-4';
const workCard3 = document.createElement('article');
const workCardDiv3 = document.createElement('div');
workCardDiv3.className = 'card-works';
cardWorks3.appendChild(workCard3);
workCard3.className = 'card-works';
workCard3.innerHTML = `<img src=${cardetails[3].img} alt="snapshootimg" class="snapshoot-img">
<div class="adjust">
  <div class="leftblock">
    <h2 class="card-works-title-1">${cardetails[3].title}</h2>
    <h2 class="card-works-title-hidden-1">${cardetails[3].titledsk}</h2>
    <div class="ref">
      <span class="client-1">${cardetails[3].spans[0]}</span>
      <span class="client-hidden-2">${cardetails[3].spansdsk[0]}</span>
      <span><i class="fa fa-circle fa-xs"></i></span>
      <span class="role">${cardetails[3].spans[1]}</span>
      <span><i class="fa fa-circle"></i></span>
      <span class="year">${cardetails[3].spans[1]}</span>
    </div>
    <p class="card-primary-text">${cardetails[3].textcontent}</p>
  </div>
  <ul class="tags">
    <li class="tag">${cardetails[3].technologies[0]}</li>
    <li class="tag">${cardetails[3].technologies[1]}</li>
    <li class="tag-hidden">${cardetails[3].technologiesdsk[2]}</li>
    <li class="tag">${cardetails[3].technologies[2]}</li>
  </ul>
  <div class="ref">
    <button class="popup-btn">${cardetails[2].btntxt}</button>
  </div>
</div>
<img src=${cardetails[3].imagedsk} alt="snapshoot-img" class="snapshoot-img-dsk-2">`;

cardWorks.appendChild(workCard);

const buttons = document.querySelectorAll('.popup-btn');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

const spanone = () => {
  modal.style.display = 'none';
};

const close = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

window.addEventListener('click', close);
span.addEventListener('click', spanone);

// add Listener Event to each see-project button
for (let i = 0; i <= buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    modal.style.display = 'block';
  });
}