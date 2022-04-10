import { Piece, MUR } from "./case.js";
import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";

export class Mur extends Piece
{
    constructor(niveau, coordonnee)
    {
        //placement des murs dans les niveaux aux coordonnées correspondantes
        super(MUR, niveau, coordonnee);
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