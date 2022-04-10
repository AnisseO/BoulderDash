import { Observateur } from "../patterns/observateur.js";

export class VueMap extends Observateur {

    controleur; //Controleur en charge de la vue de la map

    constructor(controleurMap) {
        super();
        this.controleur = controleurMap;
        this.controleur.ajouterObservateur(this);
        this.MAJ();
    }

    //Actualise la vue
    MAJ() {
        this.afficherMap();
    }

    //Affiche la map
    afficherMap() {

        //Récupère la balise où représenter la map et vide son contenu
        const mapHTML = document.querySelector("map"); 
        mapHTML.innerHTML = "";

        //Récupère la map gérer par le controleur
        const jeu = this.controleur.jeu;

        //Création d'une div comportant la map mais aussi les infos de la partie en cours
        const jeuHTML = document.createElement("jeu");

        //Création d'une div header pour les infos de la partie
        const headerHTML = document.createElement("header");
        
        //Création d'une div pour afficher le numéro de niveau et son association à sa classe CSS
        const nbNiveau = document.createElement("div");
        nbNiveau.classList.add("nbNiveau");
        nbNiveau.textContent = "Niveau " + this.controleur.num_map;
        headerHTML.appendChild(nbNiveau);
        
        //Création d'une div pour le nb de diamants et son association à sa classe CSS
        const nbDiamantHTML = document.createElement("div");
        nbDiamantHTML.classList.add("nbDiamant");
        nbDiamantHTML.textContent = "Nombre de diamant: " + this.controleur.nbDiamant;
        headerHTML.appendChild(nbDiamantHTML);

        //Création d'une div pour le nb de diamants récupérés de niveau et son association à sa classe CSS
        const DiamantRecupHTML = document.createElement("div");
        DiamantRecupHTML.classList.add("DiamantCollecte");
        DiamantRecupHTML.textContent = "Nombre de diamant(s) récupéré(s): " + this.controleur.DiamantRecup;
        headerHTML.appendChild(DiamantRecupHTML);

        //Création d'une div pour le nombre de dplacement et son association à sa classe CSS
        const nbDeplacementHTML = document.createElement("div");
        nbDeplacementHTML.classList.add("nbDeplacement");
        nbDeplacementHTML.textContent = "Nombre de déplacements: " + this.controleur.nbDeplacement;
        headerHTML.appendChild(nbDeplacementHTML);

        //On ajoute la div header sous la div jeu
        jeuHTML.appendChild(headerHTML);

        //On créée la div niveau
        const niveauHTLM = document.createElement("niveau");
/*
        //Pour chaque ligne de la map
        jeu.grille.forEach((ligne, i) => {

            //Création d'une div qui contiendra les cases de la ligne
            const ligneHTML = document.createElement("div");
            
            //Pour chaque case de la ligne
            ligne.grille.forEach((carre, j) => {
                const carreHTML = document.createElement("div"); //Création d'un div représentant la case de la map
                carreHTML.classList.add(carre.type); //Ajout de la classe CSS correspondant au type de la pièce
                ligneHTML.appendChild(carreHTML);  //Ajout de la case HTML à la ligne HTML

            });
            niveauHTLM.appendChild(ligneHTML);
        });
*/
        //Ajout de la div niveau sous la div jeu
        jeuHTML.appendChild(niveauHTLM);

        //Le tout dans la balise map
        mapHTML.appendChild(jeuHTML);

    }
}



