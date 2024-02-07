/**
 * Función que retorna una carta
 * @param {Array<String>} deck 
 * @returns {String} Retorna la carta del tope de la baraja
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    return carta;

}