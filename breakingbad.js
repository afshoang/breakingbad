var baseURL = 'https://www.breakingbadapi.com/api';
var url;

function fetchResult() {
  url = baseURL + '/characters?limit=12&offset=0';
  fetch(url)
    .then((response) => response.json())
    .then(function (json) {
      console.log(json);
      displayCharacters(json);
    });
}

// Grab element from html
let characterMap = document.querySelector('.character_map');

function displayCharacters(json) {
  console.log(json);
  // json = array of 12 character
  let characters = json;
  for (let character of characters) {
    let div1 = document.createElement('div');
    let image = document.createElement('img');
    let charBtm = document.createElement('div');
    let name = document.createElement('p');
    let bee = document.createElement('img');
    let nickName = document.createElement('p');

    div1.classList.add('card');

    image.src = character.img;
    image.alt = character.name;

    charBtm.classList.add('char_btm');
    name.textContent = character.name;
    let divNickname = document.createElement('div');
    bee.src =
      'https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg';
    bee.alt = 'bee logo';
    bee.classList.add('bee_logo');
    nickName.textContent = character.nickName;
    divNickname.appendChild(bee);
    divNickname.appendChild(nickName);

    charBtm.appendChild(name);
    charBtm.appendChild(divNickname);

    div1.append(image, charBtm);

    characterMap.appendChild(div1);
  }
}

fetchResult();
