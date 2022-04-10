import { Coordonnee } from "./coordonnees.js";
import { HAUT, BAS, GAUCHE, DROITE } from "./deplacement.js";
import { Mur } from "./mur.js";
import { Diamant } from "./diamant.js";
import { Terre } from "./terre.js";
import { Rocher } from "./rocher.js";
import { Vide } from "./vide.js";
import { Personnage } from "./personnage.js";
import { Mort } from "./mort.js";
import { MUR, DIAMANT, PERSONNAGE, ROCHER, TERRE, VIDE, MORT } from "./case.js";


export class Niveau {
    #grille; //Grille de la map
    #joueur; //Le personnage
    #nbDiamant; // Nombre de diamant
    #DiamantRecup; //Nombre de diamant récupérés
    #nbDeplacement; //Nombre de déplacements effectués

    constructor(map){
        this.#grille = [];
        this.#nbDiamant = 0;
        this.#DiamantRecup = 0;
        this.#nbDeplacement = 0;
        this.chrgmtMap(map);
    }
    get nbDeplacement() { 
        return this.#nbDeplacement;
    }
    get DiamandRecuperer() { 
        return this.#DiamantRecup; 
    }
    get joueur() { 
        return this.#joueur; 
    }
    get nbDiam() { 
        return this.#nbDiamant; 
    }  
    get grille() { 
        return this.#grille; 
    }
   

    initialisationGrille(map)
    {
        this.#grille = [];

        for (let i=0; i < 16; ++i){
            let ligne = [];

            for (let j = 0; j < 32; ++j){
                ligne.push(null);
            }
            this.#grille.push(ligne);
        }
    }

    //Chargement de la map après l'initialisation de la grille
    chrgmtMap(map){
        this.initialisationGrille(map);
        for (let i = 0; i < this.#grille.length; ++i)
        {
            for (let j = 0; j < this.#grille[i].length; ++j)
            {
                switch(map[i][j])
                {
                    case PERSONNAGE:
                        this.#grille[i][j] = new Personnage(this, new Coordonnee({ x: i, y: j}));
                        this.#joueur = this.#grille[i][j];
                        break;

                    case DIAMANT:
                        this.#grille[i][j] = new Diamant(this, new Coordonnee({ x: i, y: j}));
                        ++this.#nbDiamant;
                        break;
    
                    case MUR:
                        this.#grille[i][j] = new Mur(this, new Coordonnee({ x: i, y: j}));
                        break;
                    
                    case VIDE:
                        this.#grille[i][j] = new Vide(this, new Coordonnee({ x: i, y: j}));
                        break;
    
                    case TERRE:
                        this.#grille[i][j] = new Terre(this, new Coordonnee({ x: i, y: j}));
                        break;

                    case ROCHER:
                        this.#grille[i][j] = new Rocher(this, new Coordonnee({ x: i, y: j}));
                        break;       
                }
            }
        }
        this.Gravite();
    }

    //On vérifie que les coordonnonées sont bien dans la grille et pas en dehors
    Verif(coordonnee)
    {
        return coordonnee.x >= 0 && coordonnee.x < this.#grille.length && coordonnee.y >= 0 && coordonnee.y < this.#grille[coordonnee.x].length;
    }

    //Victoire si le nombre de diamant recup est égal au nombre de diamant
    Victoire()
    {
        return this.#DiamantRecup == this.#nbDiamant;
    }

    //Défaite si le rocher tombe sur le personnage
    Defaite()
    {
        return this.#joueur == MORT;
    }

    //Déplacement uniquement pour le personnage
    deplacementJoueur(placement)
    {
        this.#grille[placement.x][placement.y] = this.#joueur;
        
        this.#grille[this.#joueur.coordonnee.x][this.#joueur.coordonnee.y] = new Vide(this, new Coordonnee({ x: this.#joueur.coordonnee.x, y: this.#joueur.coordonnee.y}));
        
        this.#joueur.coordonnee.x = placement.x;
        this.#joueur.coordonnee.y = placement.y;

        ++this.#nbDeplacement;
    }

    //Déplacement pour tout
    deplacement(direction)
    {
        if ((direction === HAUT || direction === BAS  || direction === GAUCHE  || direction === DROITE) && !this.Victoire() && !this.Defaite())
        {
            const coord = new Coordonnee({ x: this.#joueur.coordonnee.x + direction.x, y: this.#joueur.coordonnee.y + direction.y});
            if (this.Verif(coord))
            {
                if (this.#grille[coord.x][coord.y].Destruction()) 
                {
                    if (this.#grille[coord.x][coord.y] == Diamant){
                        ++this.#DiamantRecup;
                    }

                    this.deplacementJoueur(coord);  
                    this.Gravite();
                }
                else if (this.#grille[coord.x][coord.y] == Rocher && this.#grille[coord.x + direction.x][coord.y + direction.y] == Vide && (direction === GAUCHE || direction === DROITE))
                {
                    this.#grille[coord.x + direction.x][coord.y + direction.y] = this.#grille[coord.x][coord.y];
                    this.#grille[coord.x + direction.x][coord.y + direction.y].coordonnee.x = coord.x + direction.x;
                    this.#grille[coord.x + direction.x][coord.y + direction.y].coordonnee.y = coord.y + direction.y;

                    this.deplacementJoueur(coord);
                    this.Gravite();
                }
            }
        }
    }

    //Application de la gravité
    Gravite()
    {
        for (let i = this.#grille.length - 1; i >= 0 ; --i)
        {
            for (let j = this.#grille[i].length - 1; j >= 0; --j)
            {
                var coord, mvmt;
                coord = new Coordonnee({ x: i, y: j});
                mvmt = false;

                while (this.Verif(new Coordonnee({ x: coord.x + BAS.x, y: coord.y + BAS.y})) && this.#grille[coord.x][coord.y] == ROCHER && this.#grille[coord.x + BAS.x][coord.y + BAS.y] == VIDE)
                {
                    this.#grille[coord.x + BAS.x][coord.y + BAS.y] = this.#grille[coord.x][coord.y];
                    this.#grille[coord.x + BAS.x][coord.y + BAS.y].coordonnee.x = coord.x + BAS.x;
                    this.#grille[coord.x + BAS.x][coord.y + BAS.y].coordonnee.y = coord.y + BAS.y;
                    this.#grille[coord.x][coord.y] = new Vide(this, new Coordonnee({ x: coord.x, y: coord.y}));

                    coord.x += BAS.x;
                    coord.y += BAS.y;
                    mvmt = true;
                }
                
                if (this.Verif(new Coordonnee({ x: coord.x + BAS.x, y: coord.y + BAS.y})) && this.#grille[coord.x + BAS.x][coord.y + BAS.y] == Joueur && mvmt)
                {
                    this.#grille[coord.x + DOWN.x][coord.y + DOWN.y] = new Mort(this, new Coordonnee({ x: coord.x + DOWN.x, y: coord.y + DOWN.y}));
                    this.#joueur = this.#grille[coord.x + BAS.x][coord.y + BAS.y];
                    
                    this.#grille[coord.x][coord.y] = new Vide(this, new Coordonnee({ x: coord.x, y: coord.y}));

                    coord.x += BAS.x;
                    coord.y += BAS.y;
                }

                while (this.Verif(new Coordonnee({ x: coord.x + BAS.x, y: coord.y + BAS.y})) && this.#grille[coord.x][coord.y] == MORT  && this.#grille[coord.x + BAS.x][coord.y + BAS.y] == VIDE)
                {
                    this.#grille[coord.x + BAS.x][coord.y + BAS.y] = this.#grille[coord.x][coord.y];
                    this.#grille[coord.x + BAS.x][coord.y + BAS.y].coordonnee.x = coord.x + BAS.x;
                    this.#grille[coord.x + BAS.x][coord.y + BAS.y].coordonnee.y = coord.y + BAS.y;
                    this.#grille[coord.x][coord.y] = new Vide(this, new Coordonnee({ x: coord.x, y: coord.y}));

                    coord.x += BAS.x;
                    coord.y += BAS.y;
                }
            }
        }
    }
} 