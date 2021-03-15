var baseURL = 'https://www.breakingbadapi.com/api';
var url;

function fetchResult() {
  url = baseURL + '/characters?category=Breaking+Bad';
  fetch(url)
    .then((response) => response.json())
    .then(function (json) {
      displayCharacters(json);
    });
}

function randomCharacter(json) {
  let characters = json;
  let charactersOf12 = [];
  while (charactersOf12.length < 12) {
    let random = Math.floor(Math.random() * characters.length);
    // if duplicate character dont push to characterOf12
    if (charactersOf12.indexOf(characters[random]) === -1) {
      charactersOf12.push(characters[random]);
    }
  }
  return charactersOf12;
}

// Grab element from html
let characterMap = document.querySelector('.character_map');
// input search quotes
let searchQuotes = document.querySelector('#searchQuotes');
let quoteText = document.querySelector('#quote_text');
let quoteAuthor = document.querySelector('#quote_author');

function displayCharacters(json) {
  // array of 12 character
  let characters = randomCharacter(json);
  // json = array of 12 character
  for (let character of characters) {
    let div1 = document.createElement('div');
    let image = document.createElement('img');
    let charBtm = document.createElement('div');
    let name = document.createElement('p');
    let divNickname = document.createElement('div');
    let nickName = document.createElement('p');
    let bee = document.createElement('img');

    // hidden
    let divHidden = document.createElement('div');
    // BORN
    let divBorn = document.createElement('div');
    let pBorn1 = document.createElement('p');
    let pBorn2 = document.createElement('p');

    // OCCUPATION
    let divOccupation = document.createElement('div');
    let pOc1 = document.createElement('p');
    let pOc2 = document.createElement('p');

    // APPEARANCE
    let divApprearance = document.createElement('div');
    let pAp1 = document.createElement('p');
    let pAp2 = document.createElement('p');

    // Status
    let divStatus = document.createElement('div');
    let pSta1 = document.createElement('p');
    let pSta2 = document.createElement('p');

    div1.classList.add('card');

    image.src = character.img;
    image.alt = character.name;

    charBtm.classList.add('char_btm');
    name.textContent = character.name;
    nickName.textContent = character.nickname;

    // bee img nickname
    bee.src =
      'https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg';
    bee.alt = 'bee logo';
    bee.classList.add('bee_logo');
    divNickname.appendChild(bee);
    divNickname.appendChild(nickName);

    // Hidden information
    // ID
    pBorn1.textContent = 'Born';
    pBorn2.textContent = character.birthday;
    divBorn.append(pBorn1, pBorn2);
    divHidden.classList.add('hidden', 'hidden_info');
    //OCCUPATION
    pOc1.textContent = 'Occupation';
    // occupation = []
    pOc2.textContent = character.occupation.join(', ');
    // => job1, job2
    divOccupation.append(pOc1, pOc2);
    // APPEARANCE
    pAp1.textContent = 'Breaking Bad Seasons';
    pAp2.textContent = character.appearance.join(', ');

    divApprearance.append(pAp1, pAp2);
    // STATUS
    pSta1.textContent = 'Status';
    pSta2.textContent = character.status;
    divStatus.append(pSta1, pSta2);

    divHidden.append(divBorn, divOccupation, divApprearance, divStatus);

    charBtm.appendChild(name);
    charBtm.appendChild(divNickname);
    charBtm.appendChild(divHidden);

    div1.append(image, charBtm);
    characterMap.appendChild(div1);

    // toggle hidden information of character
    image.addEventListener('click', function hiddenInform() {
      charBtm.classList.toggle('btm2');
      divHidden.classList.toggle('hidden');
    });
  }
}

searchQuotes.addEventListener('keydown', function search(e) {
  if (e.key == 'Enter') {
    e.preventDefault();
    console.log(this.value);
  }
});

fetchResult();
