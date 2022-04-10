import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";
import { DIAMANT, Piece } from "./case.js"

export class Diamant extends Piece
{
    constructor(niveau, coordonee)
    {
        //Placement des diamants dans les niveaux aux coordonnées correspondantes
        super(DIAMANT, niveau, coordonee);
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