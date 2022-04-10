import { Piece, MORT } from "./case.js";
import { Coordonnee } from "./coordonnees.js";
import { Niveau } from "./niveau.js";

export class Mort extends Piece
{
    constructor(niveau, coordonnee)
    {
        super(MORT, niveau, coordonnee);
    }

    Destruction()
    {
        return false;
    }
}