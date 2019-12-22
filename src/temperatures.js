import Build from './current_place';

"use strict"
let i = 0;
export function openToolTemp() {
    if(i === 0){
        document.querySelector('.temp').style.display='block';
        i = 1;
    }
    else if(i === 1){
        document.querySelector('.temp').style.display='none';
        i = 0;
    }
}

let tempc = document.querySelector('#temperatureC');
let tempf = document.querySelector('#temperatureF');

export function tempC() {
    tempc.style.display = 'block';
    tempf.style.display = 'none';
    document.querySelector('.temp').style.display='none';
    localStorage.setItem('displayP', 'block');
    localStorage.setItem('displayN', 'none');
    Build(1, -273.15, 'C');
}

export function tempF() {
    tempf.style.display = 'block';
    tempc.style.display = 'none';   
    document.querySelector('.temp').style.display='none';
    localStorage.setItem('displayP', 'none');
    localStorage.setItem('displayN', 'block');
    Build(9/5, - 459.67, 'F');
}

export function overC() {
    document.querySelector('.temp--C').style.background="#99adf2";
}

export function overCLeave() {
    document.querySelector('.temp--C').style.background="#99caf8";
}

export function overF() {
    document.querySelector('.temp--F').style.background="#99adf2";
}

export function overFLeave() {
    document.querySelector('.temp--F').style.background="#99caf8";
}
