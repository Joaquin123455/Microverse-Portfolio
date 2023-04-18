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

cardWorks.className = 'works';
for (let i = 0; i < cardetails.length; i++) {
  const workCard = document.createElement('article');
  const workCardDiv = document.createElement('div');
  workCardDiv.className = 'card-works';
  cardWorks.appendChild(workCard);
  workCard.className = 'card-works';
  workCard.innerHTML = `<img src= ${cardetails[i].img} alt="snapshootimg" class="snapshoot-img">
  <img src= ${cardetails[i].imagedsk} alt="snapshootdsk" class="snapshoot-img-dsk">
  <div class="adjust">
    <div class="leftblock">
      <h2 class="card-works-title popup-title">${cardetails[i].title}</h2>
      <div class="ref">
        <span class="client">${cardetails[i].spans[0]}</span>
        <span><i class="fa fa-circle fa-xs"></i></span>
        <span>${cardetails[i].spans[1]}</span>
        <span><i class="fa fa-circle"></i></span>
        <span class="year">${cardetails[i].spans[2]}</span>
      </div>
      <p class="card-primary-text">${cardetails[i].textcontent}</p>
    </div>
    <ul class="tags">
      <li class="tag">${cardetails[i].technologies[0]}</li>
      <li class="tag">${cardetails[i].technologies[1]}</li>
      <li class="tag">${cardetails[i].technologies[2]}</li>
    </ul>
    <div class="ref">
      <button class="popup-btn" id="1">${cardetails[i].btntxt}</button>
    </div>
  </div>`;
  cardWorks.appendChild(workCard);
}

const modal = document.getElementById('myModal');

function modalClick(i) {
  modal.innerHTML =`
  <div class="modal">
        <!-- Modal content -->
        <div class="frame-desktop">
          <h2 class="frame-mobile-h2">${cardetails[i].title}</h2>
          <span id="close-popup" class="close-popup">&times;</span>
        </div>
        <div class="spans-popup">
          <span class="client">Canopy</span>
          <span><i class="fa fa-circle fa-xs"></i></span>
          <span class="role"> Back End Dev</span>
          <span><i class="fa fa-circle"></i></span>
          <span class="year">2015</span>
        </div>
        <img src=${cardetails[i].img} alt="Snapshoot-Portfolio" class="img-popup" id="popupimage">
        <img src=${cardetails[i].img} alt="mobile-popup" class="img-popup-mobile" id="popupimage">
        <div class="modal-container"> 
          <div class="information-popup">
            <p class="paragraph-popup">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              <br>
              <br>
              <br>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.
            </p>
            <p class="paragraph-popup-mobile">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
            </p>
          </div>
          <div class="tags-button">
            <ul class="tags">
              <li class="tag">${cardetails[i].technologies[0]}</li>
              <li class="tag">${cardetails[i].technologies[1]}</li>
              <li class="tag">${cardetails[i].technologies[0]}</li>
            </ul>
            <ul class="tags-hidden">
              <li class="tag">Ruby</li>
              <li class="tag">Bootstrap</li>
            </ul>
            <hr>
            <div class="btn-block">
              <a href="https://joaquin123455.github.io/microverse-portfolio/" target="_blank" rel="noopener" class="btn-a">
              <button class="btn-popup-left" type="button"> See Live <img class="img-btn"
                  src="./img/live-popup.svg" alt="Button of project "> </button></a>
              <a href="https://github.com/Joaquin123455" target="_blank" rel="noopener" class="btn-a">
              <button class="btn-popup-right" type="button">See Source <img class="img-btn"
                  src="./img/github-popup.svg" alt="Button of repository"> </button></a>
            </div>
          </div>
        </div>
      </div>
  `;

  const closeButton = document.getElementById('close-popup');
  closeButton.addEventListener('click', () => {
    modal.classList.add('display-none');
  });
}


const buttons = document.querySelectorAll('.popup-btn');

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    modal.classList.remove('display-none');
    modalClick(i);
  });
});
