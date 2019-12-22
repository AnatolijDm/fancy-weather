import {openTool, langEn, langRu, langBe, overEn, overEnLeave, overRu, overRuLeave, overBe, overBeLeave} from './languages.js';
import {openToolTemp, tempC, tempF, overC, overCLeave, overF, overFLeave} from './temperatures';
import Build from './current_place';
import imageBuild from './Background';
import futureBuild from './3daysWeather'

document.querySelector('#search--button').onclick = function () {
    localStorage.setItem('setCity', `${document.querySelector('#search').value}`);
}

document.querySelector('#current_place').onclick = function () {
    if (localStorage.getItem('setCity') == null) {
        localStorage.setItem('setCity', `Minsk`);
    } else {
    let curCity = localStorage.getItem('currentCity');
    localStorage.setItem('setCity', `${curCity}`);
    window.location.reload (true);
    }
}

window.onload  = function() {
    if (localStorage.getItem('setCity') == null) {
        localStorage.setItem('setCity', `Minsk`);
        tempC();
        langEn();
        buttons();
    }
    if (localStorage.getItem('displayP') !== null && localStorage.getItem('displayN') !== null) {
        document.querySelector('#temperatureC').style.display = localStorage.getItem('displayP');
        document.querySelector('#temperatureF').style.display = localStorage.getItem('displayN');
    }
    if  (localStorage.getItem('displayL') !== null && localStorage.getItem('displayLa') !== null) {
        document.querySelector('#languageRu').style.display = localStorage.getItem('displayLa');
        document.querySelector('#languageEn').style.display = localStorage.getItem('displayL');
    }
    if( localStorage.getItem('displayLan') !== null) {
        document.querySelector('#languageBe').style.display = localStorage.getItem('displayLan');
    }
    buttons();
    imageBuild();
}

{
    let en = document.querySelector('.lang--en');
    let ru = document.querySelector('.lang--ru');
    let be = document.querySelector('.lang--be');

    document.querySelector('.language').addEventListener('click', function() {
        openTool();
        document.querySelector('.temp').style.display='none';
    })

    en.addEventListener('click', function() {
        langEn();
        buttons();
    })

    ru.addEventListener('click', function() {
        langRu();
        buttons();
    })

    be.addEventListener('click', function() {
        langBe();
        buttons();
    })

    en.addEventListener('mouseenter', () => {
        overEn();
    })

    en.addEventListener('mouseleave', () => {
        overEnLeave();
    })

    ru.addEventListener('mouseenter', () => {
        overRu();
    })

    ru.addEventListener('mouseleave', () => {
        overRuLeave();
    })

    be.addEventListener('mouseenter', () => {
        overBe();
    })

    be.addEventListener('mouseleave', () => {
        overBeLeave();
    })
}

{
    let Celsium = document.querySelector('.temp--C');
    let Foreng = document.querySelector('.temp--F');
    
    document.querySelector('.temperature').addEventListener('click', function() {
        openToolTemp();
        document.querySelector('.lang').style.display='none';
    })
    
    Celsium.addEventListener('click', function() {
        tempC();
        buttons();
    })
    
    Foreng.addEventListener('click', function() {
        tempF();
        buttons();
    })
    
    Celsium.addEventListener('mouseenter', () => {
        overC();
    })
    
    Celsium.addEventListener('mouseleave', () => {
        overCLeave();
    })
    
    Foreng.addEventListener('mouseenter', () => {
        overF();
    })
    
    Foreng.addEventListener('mouseleave', () => {
        overFLeave();
    })
}


function buttons() {
    if (localStorage.getItem('displayP') === 'block' && localStorage.getItem('lang') === '?lang=en') {
   Build(32, 1.8, 'C', 'Your current location: ', '?lang=en', 'Language: ', 'Temperature in: ', 'Set my current place');
   futureBuild(32, 1.8, 'C', '?lang=en')
   }
   else if (localStorage.getItem('displayP') === 'block' && localStorage.getItem('lang') === '?lang=ru') {
       Build(32, 1.8, 'C', 'Ваше место положение: ', '?lang=ru', 'Язык: ', 'Температура в: ', 'Выбрать мое местоположение');
       futureBuild(32, 1.8, 'C', '?lang=ru')
   }
   else if (localStorage.getItem('displayP') === 'block' && localStorage.getItem('lang') === '?lang=be') {
    Build(32, 1.8, 'C', 'Ваша месцазнаходжанне: ', '?lang=be', 'Мова: ', 'Тэмпература ў: ', 'Выбраць маё месцазнаходжанне');
    futureBuild(32, 1.8, 'C', '?lang=be')
   }
   else if (localStorage.getItem('displayN') === 'block' && localStorage.getItem('lang') === '?lang=en') {
       Build(1, 1, 'F', 'Your current location: ', '?lang=en', 'Language: ', 'Temperature in: ', 'Set my current place');
       futureBuild(1, 1, 'F', '?lang=en')
   }
   else if (localStorage.getItem('displayN') === 'block' && localStorage.getItem('lang') === '?lang=ru') {
       Build(1, 1, 'F', 'Ваше место положение: ', '?lang=ru', 'Язык: ', 'Температура в: ', 'Выбрать мое местоположение');
       futureBuild(1, 1, 'F', '?lang=ru')
   }
   else if (localStorage.getItem('displayN') === 'block' && localStorage.getItem('lang') === '?lang=be') {
    Build(1, 1, 'F', 'Ваша месцазнаходжанне: ', '?lang=be', 'Мова: ', 'Тэмпература ў: ', 'Выбраць маё месцазнаходжанне');
    futureBuild(1, 1, 'F', '?lang=be')
   }
}
