const webSite = 'https://api.opencagedata.com/geocode/v1/json?'
const myId =  '&key=85997c23fa5046499a421241d902d3b2';
const id = '7cae3891212243c6653d4e8e6cf14477/';

const input = document.getElementById('city');
const inputWeather = document.getElementById('weather');

export default async function Build(ext1, ext2, temper, message, language, langMessage, tempMessage, placeMessage) {
  const webUrl = await getLinkToCurPlace();
  localStorage.setItem('currentCity', `${webUrl.city}`);
  let location = 'q=' + localStorage.getItem('setCity');
   function getLocation(start, end) {
      const coord = webUrl.loc;
      let result = '';
    for (let i = start; i <= end; i++) {
      result = result + coord[i];
    }
    return result;
    }
  localStorage.setItem('locationLat', `${getLocation(0, 6)}`);
  localStorage.setItem('locationLon', `${getLocation(8, 14)}`);
  const webPlace = await getLinkToPlace();
  localStorage.setItem('locationLat', `${webPlace.results[0].geometry.lat}`);
  localStorage.setItem('locationLon', `${webPlace.results[0].geometry.lng}`);
  initMap();

  const webWeather = await getLinkToWeather();
  input.innerHTML =  message + webWeather.timezone;
  document.querySelector('#Time').innerHTML = timeConverter(webWeather.currently.time);
  document.querySelector('#icon').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
  inputWeather.innerHTML =  webWeather.currently.summary + ', ' + (((webWeather.currently.temperature  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
  document.querySelector('#lang-text').innerHTML = langMessage;
  document.querySelector('#temp-text').innerHTML = tempMessage;
  document.querySelector('#current_place').innerHTML = placeMessage;
  
    async function initMap() {
    let posY = webPlace.results[0].geometry.lng;
    let posX = webPlace.results[0].geometry.lat;
    new google.maps.Map(document.querySelector('#city-map'), {
        center: {lat: +posX, lng: +posY},
        zoom: 12,
    });
        document.querySelector('#location').innerHTML = 'lat: ' + `${posX}` + ', ' + 'lng: ' + `${posY}` + ';'
  }

  function getLinkToPlace() {
      const url = webSite + location  + myId;
      return fetch(url)
        .then(blob => blob.json())
        .then(data => {
            return data;
        })
        }
        
        function getLinkToWeather() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const url = 'https://api.darksky.net/forecast/' + id + localStorage.getItem('locationLat') + ',' + localStorage.getItem('locationLon') + language;
        return fetch(proxyUrl + url)
        .then(blob => blob.json())
        .then(data => {
            return data;
        })
    }
}

function getLinkToCurPlace() {
    const url = 'https://ipinfo.io/json?token=1b397c90e9c6ac';
    return fetch(url)
    .then(blob => blob.json())
    .then(data => {
        return data;
    })
    }

function timeConverter(UNIX_timestamp){
  let a = new Date(UNIX_timestamp * 1000);
  let months
  if(localStorage.getItem('lang') === '?lang=en') {
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  }
  else if(localStorage.getItem('lang') === '?lang=ru') {
    months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
  }
  else if(localStorage.getItem('lang') === '?lang=be') {
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  }
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}