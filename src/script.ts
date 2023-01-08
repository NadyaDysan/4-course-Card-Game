import './styles/style.scss';
import {startTimer, timerDisplay, resetTimer} from './timer';

const form = document.querySelector('.form');
const gameField = document.querySelector('.game-field');

const formFieldInputs: any = document.querySelectorAll('.field-control');
const startError = document.querySelector('.start_error');

const FormText = document.querySelector('.form_text') as HTMLElement;
const difficultyRating = document.querySelector('.difficulty_rating');
const playTimeForm = document.querySelector('.play_time_form');

const playTime = document.querySelector('.play_time') as HTMLDivElement;
const ButtonStart = document.querySelector('.button_start') as HTMLElement;

const game = document.querySelector('.game');

// eslint-disable-next-line prefer-const
let chosenDifficulty = 0;

import wonPic from './styles/img/won_pic.svg';
import failPic from './styles/img/fail_pic.svg';

function getFieldValue() {
  for (const formFieldInput of formFieldInputs) {
    if (formFieldInput.checked) {
      chosenDifficulty = formFieldInput.value;
      localStorage.setItem('difficulty', chosenDifficulty.toString());
    } else if (
      !formFieldInputs[0].checked &&
      !formFieldInputs[1].checked &&
      !formFieldInputs[2].checked
    ) {
      startError?.classList.remove('hidden');
    }
  }
}

ButtonStart?.addEventListener('click', (event) => {
  event.preventDefault();
  startGame();
});

function startGame() {
  getFieldValue();
  form.classList.add('hidden');
  game?.classList.remove('hidden');
  createGameField();
}

const cardArray = [
  {
    name: '0',
    img: './img/cards/0.png',
  },
  {
    name: '1',
    img: './img/cards/1.png',
  },
  {
    name: '2',
    img: './img/cards/2.png',
  },
  {
    name: '3',
    img: './img/cards/3.png',
  },
  {
    name: '4',
    img: './img/cards/4.png',
  },
  {
    name: '5',
    img: './img/cards/5.png',
  },
  {
    name: '6',
    img: './img/cards/6.png',
  },
  {
    name: '7',
    img: './img/cards/7.png',
  },
  {
    name: '8',
    img: './img/cards/8.png',
  },
  {
    name: '9',
    img: './img/cards/9.png',
  },
  {
    name: '10',
    img: './img/cards/10.png',
  },
  {
    name: '11',
    img: './img/cards/11.png',
  },
  {
    name: '12',
    img: './img/cards/12.png',
  },
  {
    name: '13',
    img: './img/cards/13.png',
  },
  {
    name: '14',
    img: './img/cards/14.png',
  },
  {
    name: '15',
    img: './img/cards/15.png',
  },
  {
    name: '16',
    img: './img/cards/16.png',
  },
  {
    name: '17',
    img: './img/cards/17.png',
  },
  {
    name: '18',
    img: './img/cards/18.png',
  },
  {
    name: '19',
    img: './img/cards/19.png',
  },
  {
    name: '20',
    img: './img/cards/20.png',
  },
  {
    name: '21',
    img: './img/cards/21.png',
  },
  {
    name: '22',
    img: './img/cards/22.png',
  },
  {
    name: '23',
    img: './img/cards/23.png',
  },
  {
    name: '24',
    img: './img/cards/24.png',
  },
  {
    name: '25',
    img: './img/cards/25.png',
  },
  {
    name: '26',
    img: './img/cards/26.png',
  },
  {
    name: '27',
    img: './img/cards/27.png',
  },
  {
    name: '28',
    img: './img/cards/28.png',
  },
  {
    name: '29',
    img: './img/cards/29.png',
  },
  {
    name: '30',
    img: './img/cards/30.png',
  },
  {
    name: '31',
    img: './img/cards/31.png',
  },
  {
    name: '32',
    img: './img/cards/32.png',
  },
  {
    name: '33',
    img: './img/cards/33.png',
  },
  {
    name: '34',
    img: './img/cards/34.png',
  },
  {
    name: '35',
    img: './img/cards/35.png',
  },
];
let newCardArray: any = []; /* eslint-disable-line */

let cardsChosen: any = []; /* eslint-disable-line */
let cardsChosenId: any = []; /* eslint-disable-line */
const cardsWon = [];

function createGameField() {
  const newPairsArray = [...cardArray].sort(() => 0.5 - Math.random()).slice(0, (chosenDifficulty * 6) / 2);
  newCardArray = [...newPairsArray, ...newPairsArray].sort(() => 0.5 - Math.random());

  if (chosenDifficulty == 1) {
    gameField?.setAttribute('style', 'grid-template-columns: repeat(3, 6rem)');
  } else if (chosenDifficulty == 2) {
    gameField?.setAttribute('style', 'grid-template-columns: repeat(4, 6rem)');
  } else if (chosenDifficulty == 3) {
    gameField?.setAttribute('style', 'grid-template-columns: repeat(6, 6rem)');
  }

  for (let i = 0; i < newCardArray.length; i++) {
    const card = document.createElement('div');
    card.setAttribute('class', `cards card-${newCardArray[i]['name']}`);
    card.setAttribute('data-id', String(i));
    card.addEventListener('click', flipCard);
    gameField?.appendChild(card);

    setTimeout(() => {
      card.classList.add('cards_cover');
      startTimer();
    }, 5000);
  }
}

function flipCard(this: any) {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(newCardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.classList.add(`card-${newCardArray.cardId}`);
  this.classList.remove(`cards_cover`);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll('.cards');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute('style', 'background: none');
    cards[optionTwoId].setAttribute('style', 'background: none');
    cardsWon.push(cardsChosen);
  } else {
    YouFailed();
    cards[optionOneId].classList.add('cards_cover');
    cards[optionTwoId].classList.add('cards_cover');
  }
  cardsChosen = [];
  cardsChosenId = [];
  if (cardsWon.length === newCardArray.length / 2) {
    YouWin();
  }
}

function YouWin() {
  game?.classList.add('hidden');
  form?.classList.remove('hidden');
  playTimeForm?.classList.remove('hidden');
  difficultyRating?.classList.add('hidden');
  if (FormText != undefined) {
    FormText.textContent = 'Вы выиграли!';
    FormText.style.maxWidth = '256px';
  }
  playTime.textContent = timerDisplay?.textContent;
  if (ButtonStart != undefined) {
    ButtonStart.textContent = 'Играть снова';
    ButtonStart.style.marginTop = '40px';
  }

  const formImage = document.createElement('img');
  formImage.classList.add('form_img');
  formImage.setAttribute('src', wonPic);
  form?.insertBefore(formImage, FormText);

  while (gameField.firstChild) {
    gameField.removeChild(gameField.lastChild);
  }

  ButtonStart.addEventListener('click', (event) => {
    event.preventDefault();
    formImage.classList.add('hidden');
    generateStartScreen();
  });

  resetTimer();
}

function YouFailed() {
  game?.classList.add('hidden');
  form?.classList.remove('hidden');
  playTimeForm?.classList.remove('hidden');
  difficultyRating?.classList.add('hidden');
  if (FormText != undefined) {
    FormText.textContent = 'Вы проиграли!';
    FormText.style.maxWidth = '256px';
  }
  playTime.textContent = timerDisplay?.textContent;
  if (ButtonStart != undefined) {
    ButtonStart.textContent = 'Играть снова';
    ButtonStart.style.marginTop = '40px';
  }

  const formImage = document.createElement('img');
  formImage.classList.add('form_img');
  formImage.setAttribute('src', failPic);
  form?.insertBefore(formImage, FormText);

  while (gameField.firstChild) {
    gameField.removeChild(gameField.lastChild);
  }

  ButtonStart.addEventListener('click', (event) => {
    event.preventDefault();
    formImage.classList.add('hidden');
    generateStartScreen();
  });

  resetTimer();
}

const buttonGame = document.querySelector('.button_game');

buttonGame.addEventListener('click', (event) => {
  event.preventDefault();
  game?.classList.add('hidden');
  form?.classList.remove('hidden');
  playTimeForm?.classList.remove('hidden');
  difficultyRating?.classList.add('hidden');
  gameField.innerHTML = '';
  generateStartScreen();
  resetTimer();
});

const generateStartScreen = () => {
  localStorage.clear();
  difficultyRating?.classList.remove('hidden');
  FormText.textContent = 'Выбери сложность';
  playTimeForm?.classList.add('hidden');
  ButtonStart.textContent = 'Старт';
  ButtonStart.style.marginTop = '64px';
  FormText.style.maxWidth = '208px';
};
