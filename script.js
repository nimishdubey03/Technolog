const openModelBtn = document.querySelector('.contact-btn');
const closeModelBtn = document.querySelector('.btn--close-modal');
const startFreeBtn = document.querySelector('.start');
const meetdevopBtn = document.querySelector('.meet');
const chatWithUs = document.querySelector('.final-btn');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModel = (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = (e) => {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModelBtn.addEventListener('click', openModel);
closeModelBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
startFreeBtn.addEventListener('click', openModel);
meetdevopBtn.addEventListener('click', openModel);
chatWithUs.addEventListener('click', openModel);
