let i = 0;
export function openTool() {
    if(i === 0){
        document.querySelector('.lang').style.display='block';
        i = 1;
    }
    else if(i === 1){
        document.querySelector('.lang').style.display='none';
        i = 0;
    }
}

let languaRu = document.querySelector('#languageRu');
let languaEn = document.querySelector('#languageEn');
let languaBe =  document.querySelector('#languageBe');

export function langEn() {
    languaRu.style.display = 'none';
    languaEn.style.display = 'block';
    languaBe.style.display = 'none';
    document.querySelector('.lang').style.display='none';
    localStorage.setItem('displayL', 'block');
    localStorage.setItem('displayLa', 'none');
    localStorage.setItem('displayLan', 'none');
    localStorage.setItem('lang', '?lang=en');
}

export function langRu() {
    languaRu.style.display = 'block';
    languaEn.style.display = 'none';
    languaBe.style.display = 'none';
    document.querySelector('.lang').style.display='none';
    localStorage.setItem('displayLa', 'block');
    localStorage.setItem('displayL', 'none');
    localStorage.setItem('displayLan', 'none');
    localStorage.setItem('lang', '?lang=ru');
}

export function langBe() {
    languaRu.style.display = 'none';
    languaEn.style.display = 'none';
    languaBe.style.display = 'block';
    document.querySelector('.lang').style.display='none';
    localStorage.setItem('displayLan', 'block');
    localStorage.setItem('displayLa', 'none');
    localStorage.setItem('displayL', 'none');
    localStorage.setItem('lang', '?lang=be');
}

export function overEn() {
    document.querySelector('.lang--en').style.background="#99adf2";
}

export function overEnLeave() {
    document.querySelector('.lang--en').style.background="#99caf8";
}

export function overRu() {
    document.querySelector('.lang--ru').style.background="#99adf2";
}

export function overRuLeave() {
    document.querySelector('.lang--ru').style.background="#99caf8";
}

export function overBe() {
    document.querySelector('.lang--be').style.background="#99adf2";
}

export function overBeLeave() {
    document.querySelector('.lang--be').style.background="#99caf8";
}