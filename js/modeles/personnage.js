import { Piece, PERSONNAGE } from "./case.js";
import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";

export class Personnage extends Piece
{
    constructor(niveau, coordonnee)
    {
        super(PERSONNAGE, niveau, coordonnee);
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