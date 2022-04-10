import { Piece, TERRE } from "./case.js";
import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";

export class Terre extends Piece
{
    constructor(niveau, coordonnee)
    {
        //placement de la terre dans les niveaux aux coordonnées correspondantes
        super(TERRE, niveau, coordonnee);
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