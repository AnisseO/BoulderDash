import { Coordonnee } from "./coordonnees.js";

export const DIAMANT = "D";
export const MUR = "M";
export const PERSONNAGE = "P";
export const ROCHER = "R";
export const TERRE = "T";
export const VIDE = "V";
export const MORT = "Z";

export class Piece
{
    //Type de la case
    #type;      

    //Niveau de la map
    #niveau;

    //Coordonnee
    #coordonnee;

    /**
     * Constructeur
     * @param {string} type : Type de la case (MUR, ROCHER, VIDE, DIAMAND, PERSO, TERRE)
     * @param {int} niveau : Niveau de la map
     * @param {Coordonnee} coordonnee : Coordonnee de la case sur la map
     */
    constructor(type, niveau, coordonnee)
    {
        this.#type = type;
        this.#niveau = niveau;
        this.#coordonnee = new Coordonnee(coordonnee);
    }

    set coordonnee(valeur) { 
        this.#coordonnee.x = valeur.x; 
        this.#coordonnee.y = valeur.y;
    }
    get coordonnee() {
        return this.#coordonnee; 
    }

    get type() { 
        return this.#type;
     }
    
    get niveau() { 
        return this.#niveau;
    }

     Destruction()
    {
        throw "Cette méthode doit être redéfinie !";
    }
}