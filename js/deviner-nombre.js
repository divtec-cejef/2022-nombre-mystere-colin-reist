/**
* Jeu du nombre mystère
* @author  Colin Reist
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    const valMin = 1;
    const valMax = 100;

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbMystere = tireNombre(valMin, valMax);
    console.log(nbMystere);

    let nbessaie = 0;
    let controle = false;
    do {
        let valUtilisateur = prompt('le nombre est entre 1 et 100');

        if (valUtilisateur < nbMystere) {
            window.alert('plus grand');
        } else if (valUtilisateur > nbMystere) {
            window.alert('plus petit');
        } else {
            controle = true;
        }
        nbessaie++;
    } while(!controle);
    window.alert(`Félicitation tu as trouvé en ${nbessaie} fois et c'était le nombre ${nbMystere}`);
}()); // main IIFE
