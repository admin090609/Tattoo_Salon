document.addEventListener('DOMContentLoaded', () => {
  const navIcon = document.getElementById('nav-icon');
  const nav = document.getElementById('nav');

  navIcon.addEventListener('click', () => {
    console.log('Before toggle - Nav Icon Open:', navIcon.classList.contains('open'));
    console.log('Before toggle - Nav Active:', nav.classList.contains('active'));

    navIcon.classList.toggle('open');
    nav.classList.toggle('active');

    console.log('After toggle - Nav Icon Open:', navIcon.classList.contains('open'));
    console.log('After toggle - Nav Active:', nav.classList.contains('active'));
  });

  displayNav();
  displayBtn();
});


function displayNav() {
  const nav = document.getElementById('nav');
  nav.style.display = 'flex';
}

function displayBtn() {
  const btn = document.getElementById('animateCamera');
  btn.style.display = 'block';
}



function showGallery() {
  const popUp = document.createElement('div');
  popUp.classList.add('popup');
  popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up"> 
<button class="close-popup">&#10006;</button>

				<div class="box">
 					<main><div class="container">
      <div class="fixed">
        <div class="nav-content">
          <a href="https://www.instagram.com/_untamed_ink_/" target="_blank"><img class="logo" alt="logo" src="/images/ig-logo.png" /></a>
          <div>
            <button class="btn-primary">Log In</button>
            <button class="btn-ig">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
    
      <header>
        <div class="header-wrap">
          <div class="profile-pic">
            <img src="/images/circle.png" alt="profile-logo" />
          </div>
          <div class="profile-info">
            <div class="title row">
              <a href="https://www.instagram.com/_untamed_ink_/" target="_blank" class="ig-name"><h2>_untamed_ink_</h2></a>
              <span class="verfied-icon"></span>
              <button class="btn-primary">Follow</button>
            </div>
            <div class="desktop-only">
              <div class="details row">
                <ul>
                  <li><span>22</span> posts</li>
                  <li><span>6</span> followers</li>
                  <li><span>0</span> following</li>
                </ul>
              </div>
              <div class="descriptions row last">
                Wear your story inked <br />
                Wear it with pride <br />
                untamedink.vercel.app 
              </div>
            </div>
          </div>
        </div>
      </header>

      

      <div class="desktop-only">
        <div class="tabs">
          <div class="tab-item active" style="margin-right: 60px;">
            <svg
              aria-label="Posts"
              class="_8-yf5"
              fill="#262626"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                clip-rule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>POSTS</span>
          </div>
          <div class="tab-item" style="margin-right: 60px;">
            <svg
              aria-label="Posts"
              class="_8-yf5"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
              ></path>
            </svg>
            <span>IGTV</span>
          </div>
          <div class="tab-item">
            <svg
              aria-label="Tagged"
              class="_8-yf5"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
              ></path>
            </svg>
            <span>TAGGED</span>
          </div>
        </div>
      </div>
      <div class="mobile-tabs mobile-only">
        <ul>
          <li>
            <span>22</span>
            posts
          </li>
          <li>
            <span>6</span>
            followers
          </li>
          <li>
            <span>0</span>
            following
          </li>
        </ul>
        <div class="actions">
          <svg
            aria-label="Posts"
            class="_8-yf5"
            fill="rgb(0, 149, 246)"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-label="Posts"
            class="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
            ></path>
          </svg>
          <svg
            aria-label="Tagged"
            class="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="gallery">
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool1.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool2.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool3.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool4.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool5.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool6.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool7.jpeg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline1.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline2.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline3.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline4.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline5.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline6.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline7.jpeg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism1.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism2.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism3.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism4.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism5.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism6.jpeg" />
        </div>
      </div>
    </main>

                </div>
            </div>

        </div>
	`
    ;

  // Append the pop-up to the body
  document.body.appendChild(popUp);

  // Close button functionality
  const closeButton = popUp.querySelector('.close-popup');
  closeButton.addEventListener('click', () => {
    popUp.classList.add('closed'); 
    setTimeout(() => {
      popUp.remove(); // Remove pop-up after animation
      showNavIconAndMenu();

    }, 500);   
  });




  // Create a modal for displaying images
  const imageModal = document.createElement('div');
  imageModal.classList.add('image-modal');
  imageModal.innerHTML = `
    <div class="image-modal-content">
      <span class="close-button">&times;</span>
      <img class="modal-image" src="" alt="Image">
    </div>
  `;
  document.body.appendChild(imageModal);
  
  const modalImage = imageModal.querySelector('.modal-image');
  const closeBtn = imageModal.querySelector('.close-button');
  
  // Close modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });
  
  // Close modal when clicking outside the image
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
    }
  });
  
  // Add click event to open gallery images in a modal
  const galleryImages = document.querySelectorAll('.gallery-post');
  galleryImages.forEach(galleryImage => {
    galleryImage.addEventListener('click', () => {
      modalImage.src = galleryImage.src;
      imageModal.style.display = 'block';
    });
  });
}







function showPopUp() {
  const popUp = document.createElement('div');
  popUp.classList.add('popup');
  popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up-contact">
                    <div class="box1">
                        <div class="title">Contactează-ne</div>
                        <div class="info">
                            <div>
                                <div class="subtitle">Vizitează-ne</div>
                                <div>
                                    <a href="https://maps.app.goo.gl/PimnCLwfDJouARXq8" target="_blank" class="address"><div class="text">bd. Alexandru cel Bun <br/> or. Ialoveni, R. Moldova</div></a>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Contactează-ne</div>
                                <div>
                                    <div class="text">Noi așteaptăm mesajul tău la adresa:</div>
                                    <div class="text">untamedinkstudio@gmail.com</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Sună la</div>
                                <div>
                                    <div class="text">079 992 446</div>
                                    <div class="text">Luni-Vineri: 09:00-18:00</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Social media</div>
                                <div class="icons">
                                    <a href="https://www.facebook.com/profile.php?id=61573171680739" target="_blank"><img src="/images/facebook.png" class="icon"
                                            alt="Facebook Icon"></a>
                                    <a href="https://www.pinterest.com/untamedinkstudio/" target="_blank"><img src="/images/pinterest.png" class="icon"
                                            alt="Pinterest Icon"></a>
                                    <a href="https://www.instagram.com/_untamed_ink_/" target="_blank"><img src="/images/ig.png" class="icon"
                                            alt="Instagram Icon"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form -->
                    <div class="box2">
                        <div class="title">Programează-te</div>
                        <form id="contact-form">
                            <div class="firstname">
                                <div class="form_text">Prenume</div>
                                <div><input type="text" class="input" placeholder="Ion" name="name" required></div>
                            </div>
                            <div class="lastname">
                                <div class="form_text">Nume</div>
                                <div><input type="text" class="input" placeholder="Popescu" name="lastname" required>
                                </div>
                            </div>
                            <div>
                                <div class="form_text">Email</div>
                                <input type="email" class="input" placeholder="exemplu@gmail.com" name="email" required>
                            </div>
                            <div>
                                <div class="form_text">Nr. de telefon</div>
                                <div><input type="number" class="input" placeholder="060000000" name="phone" required></div>
                            </div>
                            <div>
                                <div class="form_title form_text">Mesaj</div>
                                <textarea name="message" placeholder="Mesajul dvs..." required></textarea>
                            </div>
                            <div class="policy">
                                <input type="checkbox" name="privacy" class="checkbox" required>
                                <span class="form_text">Aș dori să primesc mai multe informații despre companie. Înțeleg și sunt de acord cu <a class="privacy" href="/pages/privacy_policy.html">Politica de confidențialitate.</a></span>
                            </div>
                            <div>
                                <button class="btn" type="submit">Trimite Mesaj</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
	<button class="close-popup">&#10006;</button>`
    ;

  // Append the pop-up to the body
  document.body.appendChild(popUp);

  // Close button functionality
  const closeButton = popUp.querySelector('.close-popup');
  closeButton.addEventListener('click', () => {
    popUp.classList.add('closed'); // 
    setTimeout(() => {
      popUp.remove(); // Remove the pop-up after animation
      showNavIconAndMenu();

    }, 500); 
  });

  // EmailJS Connection
  const form = popUp.querySelector('#contact-form');

  emailjs.init("I3DnisvYrfkPlxjpy");

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_uqjphyf', 'template_qiobdx5', this)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      }, function (error) {
        console.error('FAILED...', error);
        alert('Failed to send the message.');
      });
  });
}

// Artist's data
const images = {
  "person1": {
    "name": "Mihai",
    "age": 25,
    "loves": "muzica",
    "specializes": "Old-School tattoos",
    "image": "/images/artist_2.jpg",
    "projects": ["/images/oldschool1.jpg", "/images/oldschool2.jpg", "/images/oldschool3.jpg", "/images/oldschool4.jpg", "/images/oldschool5.jpg", "/images/oldschool6.jpg", "/images/oldschool7.jpeg"]
  },
  "person2": {
    "name": "Ana",
    "age": 23,
    "loves": "arta",
    "specializes": "Realism tattoos",
    "image": "/images/artist_1.jpg",
    "projects": ["/images/realism1.jpg", "/images/realism2.jpg", "/images/realism3.jpg", "/images/realism4.jpg", "/images/realism5.jpg", "/images/realism6.jpeg"]
  },
  "person3": {
    "name": "Alex",
    "age": 27,
    "loves": "natura",
    "specializes": "Outline tattoos",
    "image": "/images/artist_3.jpg",
    "projects": ["/images/outline1.jpg", "/images/outline2.jpg", "/images/outline3.jpg", "/images/outline4.jpg", "/images/outline5.jpg", "/images/outline6.jpg", "/images/outline7.jpeg"]
  }
};

// Create a modal for displaying images
const imageModal = document.createElement('div');
imageModal.classList.add('image-modal');
imageModal.innerHTML = `
  <div class="image-modal-content">
    <span class="close-button">&times;</span>
    <img class="modal-image" src="" alt="Image">
  </div>
`;
document.body.appendChild(imageModal);

const modalImage = imageModal.querySelector('.modal-image');
const closeButton = imageModal.querySelector('.close-button');

// Close modal when the close button is clicked
closeButton.addEventListener('click', () => {
  imageModal.style.display = 'none';
});

function showAboutUs() {
  const popUp = document.createElement('div');
  popUp.classList.add('popup');
  popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up-abtUs">
                    <div class="abtUs" id="abtUs">
                          <div class="names-column">
                            <div class="name-item" data-person="person1">Mihai</div>
                            <div class="name-item" data-person="person2">Ana</div>
                            <div class="name-item" data-person="person3">Alex</div>
                        </div>
                        <div class="info-profile" style="display: none;"></div> 
                    </div>
                </div>
            </div>
        </div>
        <button class="close-popup">&#10006;</button>
    `;

  // Append the pop-up to the body
  document.body.appendChild(popUp);

  // Close button functionality
  const closeButton = popUp.querySelector('.close-popup');
  closeButton.addEventListener('click', () => {
    popUp.classList.add('closed'); 
    setTimeout(() => {
      popUp.remove(); // Remove the pop-up after animation
      showNavIconAndMenu();

    }, 500); 
  });

  // display artist's info in the pop-up
  function updateInfo(person) {
    const infoDiv = popUp.querySelector('.info-profile');
    infoDiv.innerHTML = `
            <button class="back-button">Înapoi</button>
            <div class="data">
                <div class="image">
                    <img src="${person.image}" alt="${person.name}" class="person-image">
                </div>
                <div class="details">
                    <div class="person-name">${person.name}</div>
                    <div>Vârsta: ${person.age}</div>
                    <div>Îi place: ${person.loves}</div>
                    <div>Specializat în: ${person.specializes}</div>
                </div>
            </div>
            <div class="projects-container">
                <h3 class="project-title">Proiecte:</h3>
                <div class="projects">
                    ${person.projects.map(project => `<img src="${project}" class="project" alt="Project">`).join('')}
                </div>
            </div>
        `;
    infoDiv.style.display = 'block';
    popUp.querySelector('.names-column').style.display = 'none';

    // Back button functionality
    const backButton = infoDiv.querySelector('.back-button');
    backButton.addEventListener('click', () => {
      infoDiv.style.display = 'none';
      popUp.querySelector('.names-column').style.display = 'flex';
    });

    // Add click event to open project images in a modal
    const projectImages = infoDiv.querySelectorAll('.project');
    projectImages.forEach(projectImage => {
      projectImage.addEventListener('click', () => {
        modalImage.src = projectImage.src;
        imageModal.style.display = 'block';
      });
    });
  }

  // Add event listeners to name items
  const nameItems = popUp.querySelectorAll('.name-item');
  nameItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const selectedPerson = images[event.target.dataset.person];
      updateInfo(selectedPerson);
    });
  });
}
