export class Coordonnee
{
    //Abscisse
    #x; 
    
    //Ordonnée
    #y;

    /**
     * Constructeur
     * @param {Coordonnee} coordonnee : Coordonnee avec laquelle initialisée l'instance 
     */
    constructor(coordonnee)
    {
        this.#x = coordonnee.x;
        this.#y = coordonnee.y;
    }

    set x(value) { this.#x = value; } //Mutateur de la valeur x
    get x() { return this.#x;} // Accesseur de la valeur x

    set y(value) { this.#y = value; } //Mutateur de la valeur y
    get y() { return this.#y;} // Accesseur de la valeur de y
}