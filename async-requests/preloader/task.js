const img = document.querySelector('#loader');
const itemDiv = document.querySelector('#items');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange',() => {

  if (xhr.readyState === xhr.DONE) {
    const data = JSON.parse(xhr.responseText).response.Valute;



    for (const item in data) {

      const addInf = `<div class="item">
                                 <div class="item__code">${data[item].CharCode}</div>
                                 <div class="item__value">${data[item].Value}</div>
                                 <div class="item__currency">руб.</div>
                                </div>`;

      itemDiv.insertAdjacentHTML('beforeend', addInf)
    }

    img.classList.remove('loader_active')
  }

  const myStorage = window.localStorage;
  console.log(myStorage)
})

xhr.open('GET',
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.send();

