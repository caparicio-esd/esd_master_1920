/**
 * Ejemplos del día anterior
 *
 *
 *
 *
 * */

//  USO DE PROMPT PARA TENER EL USER

let user = prompt('Dinos tu user_name');


/**
 * Funcionalidad 01
 *
 * Comprobar si el user name tiene más de 4 caracteres
 */

let limit = 4;
let userLength = user.length;
let isOverLimit = userLength > limit;

if (isOverLimit) {
    document.querySelector('.resultado01').innerHTML = 'El user name es correcto';
} else {
    document.querySelector('.resultado01').innerHTML = 'El user name NO es correcto';
}


/**
 * Funcionalidad 02
 *
 * Comprobar si tiene el caracter _
 */

let userHasUnderscore = user.includes('_');

if (userHasUnderscore) {
    document.querySelector('.resultado02').innerHTML = 'Tiene undescore';
} else {
    document.querySelector('.resultado02').innerHTML = 'No Tiene undescore';
}


/**
 * Funcionalidad 03
 *
 * Comprobar si tiene los caracteres $ o %
 */

let userHasWeirdChars = user.includes('%') || user.includes('$');

if (userHasWeirdChars) {
    document.querySelector('.resultado03').innerHTML = 'Tiene los caracteres $ o %';
} else {
    document.querySelector('.resultado03').innerHTML = 'No tiene los caracteres $ o %';
}


/**
 * Funcionalidad 04
 *
 * Comprobar si tiene números
 */

let userHasNumber =
    user.includes('0') ||
    user.includes('1') ||
    user.includes('2') ||
    user.includes('3') ||
    user.includes('4') ||
    user.includes('5') ||
    user.includes('6') ||
    user.includes('7') ||
    user.includes('8') ||
    user.includes('9');

if (userHasNumber) {
    document.querySelector('.resultado04').innerHTML = 'Tiene números';
} else {
    document.querySelector('.resultado04').innerHTML = 'No tiene números';
}


/**
 * Funcionalidad 05
 *
 * Comprobar si el último caracter es _
 */

let userLastChar = user.slice(-1);
let isLastCharSpecial = userLastChar == '_';

if (userHasNumber) {
    document.querySelector('.resultado05').innerHTML = 'El último caracter es _';
} else {
    document.querySelector('.resultado05').innerHTML = 'El último caracter no es _';
}
