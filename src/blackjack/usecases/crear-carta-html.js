/**
 * Función que recibe una carta
 * @param {String} carta El valor y tipo de la carta
 * @returns {HTMLImageElement} Regresa el elemento HTML (img) de la carta
 */
export const crearCartaHtml = (carta) => {

    if (!carta) throw new Error('La carta es obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;

}