import { Piece, ROCHER } from "./case.js";
import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";

export class Rocher extends Piece
{
    constructor(niveau, coordonnee)
    {
        //placement des rochers dans les niveaux aux coordonnées correspondantes
        super(ROCHER, niveau, coordonnee);
    }

    /**
     * Retourne vrai lorsque la case peut être détruite et non lorsqu'elle est indestructible
     * @returns {boolean} 
     */
    Destruction()
    {
        return false;
    }
}