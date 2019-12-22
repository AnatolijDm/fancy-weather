//const webSite = 'https://api.openweathermap.org/data/2.5/forecast?'
//const myId =  '&appid=cbe837deecc14b3d73d4dc70346bdb7c';
const id = '7cae3891212243c6653d4e8e6cf14477/';

export default async function futureBuild(ext1, ext2, temper, language) {
  const webWeather = await getLinkToWeather();
  document.querySelector('.TimeFirstDay').innerHTML = timeConverter(webWeather.daily.data[1].time);
  document.querySelector('.iconF').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
  document.querySelector('.firstDay').innerHTML =  webWeather.daily.data[1].summary + ', ' + (((webWeather.daily.data[1].temperatureHigh  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
  document.querySelector('.TimeSecondDay').innerHTML = timeConverter(webWeather.daily.data[2].time);
  document.querySelector('.iconS').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
  document.querySelector('.secondDay').innerHTML = webWeather.daily.data[2].summary + ', ' + (((webWeather.daily.data[2].temperatureHigh  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
  document.querySelector('.TimeThirdDay').innerHTML = timeConverter(webWeather.daily.data[3].time);
  document.querySelector('.iconT').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
  document.querySelector('.thirdDay').innerHTML = webWeather.daily.data[3].summary + ', ' + (((webWeather.daily.data[3].temperatureHigh  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
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

/*export async function futureBuild(ext1, ext2, temper, language) {

    let location = 'q=' + localStorage.getItem('setCity');
    const webWeather = await getLinkToWeather();
    document.querySelector('.TimeFirstDay').innerHTML = timeConverter(webWeather.list[3].dt);
    document.querySelector('.iconF').style.background = `url(https://openweathermap.org/img/wn/` + `${webWeather.list[3].weather[0].icon}` + `@2x.png)`;
    document.querySelector('.firstDay').innerHTML =  webWeather.list[3].weather[0].description + ', ' + ((webWeather.list[3].main.temp * ext1 + ext2).toFixed(1) ) + ' ' + temper;
    document.querySelector('.TimeSecondDay').innerHTML = timeConverter(webWeather.list[11].dt);
    document.querySelector('.iconS').style.background = `url(https://openweathermap.org/img/wn/` + `${webWeather.list[11].weather[0].icon}` + `@2x.png)`;
    document.querySelector('.secondDay').innerHTML = webWeather.list[11].weather[0].description  + ', ' + ((webWeather.list[11].main.temp * ext1 + ext2).toFixed(1) ) + ' ' + temper;
    document.querySelector('.TimeThirdDay').innerHTML = timeConverter(webWeather.list[18].dt);
    document.querySelector('.iconT').style.background = `url(https://openweathermap.org/img/wn/` + `${webWeather.list[18].weather[0].icon}` + `@2x.png)`;
    document.querySelector('.thirdDay').innerHTML = webWeather.list[18].weather[0].description  + ', ' + ((webWeather.list[18].main.temp * ext1 + ext2).toFixed(1) ) + ' ' + temper;
    function getLinkToWeather() {
        const url = webSite + location +  language + myId;
        return fetch(url)
            .then(blob => blob.json())
            .then(data => {
                return data;
            })
      }
  }
*/
  /*export async function futureBuildBe(ext1, ext2, temper, language) {
    const webWeather = await getLinkToWeather();
    document.querySelector('.TimeFirstDay').innerHTML = timeConverter(webWeather.daily.data[1].time);
    document.querySelector('.iconF').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
    document.querySelector('.firstDay').innerHTML =  webWeather.daily.data[1].summary + ', ' + (((webWeather.daily.data[1].temperatureHigh  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
    document.querySelector('.TimeSecondDay').innerHTML = timeConverter(webWeather.daily.data[2].time);
    document.querySelector('.iconS').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
    document.querySelector('.secondDay').innerHTML = webWeather.daily.data[2].summary + ', ' + (((webWeather.daily.data[2].temperatureHigh  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
    document.querySelector('.TimeThirdDay').innerHTML = timeConverter(webWeather.daily.data[3].time);
    document.querySelector('.iconT').style.background = `url(https://darksky.net/images/weather-icons/` + `${webWeather.currently.icon}` + `.png)`;
    document.querySelector('.thirdDay').innerHTML = webWeather.daily.data[3].summary + ', ' + (((webWeather.daily.data[3].temperatureHigh  - ext1) / ext2).toFixed(1) ) + ' ' + temper;
    function getLinkToWeather() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const url = 'https://api.darksky.net/forecast/' + id + localStorage.getItem('locationLat') + ',' + localStorage.getItem('locationLon') + language;
      return fetch(proxyUrl + url)
      .then(blob => blob.json())
      .then(data => {
          return data;
      })
      }
  }*/

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
      months = ['Студзеня','Лютага','Сакавiка','Красавiка','Мая','Чэрвеня','Лiпеня','Жнiвеня','Верасня','Кастрычнiка','Лiстапада','Снежня'];
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