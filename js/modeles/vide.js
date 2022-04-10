import { Piece, VIDE } from "./case.js";
import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";

export class Vide extends Piece
{
    constructor(niveau, coordonnee)
    {
        //placement des vide dans les niveaux aux coordonnées correspondantes
        super(VIDE, niveau, coordonnee);
    }

    /**
     * Retourne vrai lorsque la case peut être détruite et non lorsqu'elle est indestructible
     * @returns {boolean} 
     */
    Destruction()
    {
        return true;
    }
}