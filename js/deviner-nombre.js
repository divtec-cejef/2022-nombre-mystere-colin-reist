/**
* Jeu du nombre mystère
* @author  Colin Reist
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    const VALMIN = 1;
    const VALMAX = 100;

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbMystere = tireNombre(VALMIN, VALMAX);
    console.log(nbMystere);

    let nbessaie = 0;
    let texte = 'le nombre est entre 1 et 100';
    let valUtilisateur = 0;
    do {
         valUtilisateur = Number(prompt(texte));

        if (valUtilisateur < nbMystere) {
            texte = 'plus grand';
        } else {
            texte = 'plus petit';
        }
        nbessaie++;
    } while(valUtilisateur !== nbMystere);
    window.alert(`Félicitation tu as trouvé en ${nbessaie} fois et c'était le nombre ${nbMystere}`);
}()); // main IIFE
