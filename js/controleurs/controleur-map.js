import { HAUT, BAS, GAUCHE, DROITE } from "../modeles/deplacement.js"
import { Niveau } from "../modeles/niveau.js";
import { Sujet } from "../patterns/sujet.js";

export class ControleurMap extends Sujet
{
    #niveau;
    #maps;
    #num_map;
    #chgmt_map;

    constructor() {
        super(); //Appel du constructeur de la classe mère
        this.#niveau = 0;
        this.#maps = [];
        this.ajouterMap("../map/map1.txt");
        this.#num_map = 0 ;
        this.#chgmt_map = [];
    }

    // Accesseur sur l'attribut privé niveau
    get niveau() {
        return this.#niveau;
    }

    // Accesseur sur l'attribut privé changement de map
    get chgmt_map() {
        return this.#chgmt_map;
    }

    // Accesseur sur l'attribut privé numéro de map
    get num_map() {
        return this.#num_map;
    }

    //Déplacement du personnage
    Deplacement(event) {
        switch(event.key) {
            case 'z':
                this.#niveau.deplacement(HAUT);
                this.notifier();
                break;

            case 'q':
                this.#niveau.deplacement(GAUCHE);
                this.notifier();
                break;

            case 's':
                this.#niveau.deplacement(BAS);
                this.notifier();
                break;

            case 'd':
                this.#niveau.deplacement(DROITE);
                this.notifier();
                break;          
        }
    }

    //Recommencer le niveau
    refaireNiveau() {
        this.#niveau = new Niveau(this.#maps[this.#num_map]);
    }

    //Passer au niveau supérieur
    niveauSup()
    {
        ++this.#num_map;
        this.#niveau = new Niveau(this.#maps[this.#num_map]);
    }

    //Ajouter une map
    ajouterMap()
    {
        const doc = document.getElementById("bouttons");
        if (doc) {
            const lecture = new FileReader();
            lecture.readAsText(doc);
            lecture.onload = (evt) => {
                const divi = evt.target.result.split(/\r\n/m);
                const map = [];
                divi.forEach((ligne, i) => {
                    map.push(ligne.split(""));
                });
                this.#chgmt_map.push(map);
                this.notifier();
            };
            lecture.onerror = (evt) => {
                throw "Erreur de lecture du fichier!";
            }
        }
    } 
}
