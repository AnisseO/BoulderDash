import { VueMap } from "./vue-map.js";

export class VuePerdu extends VueMap
{
    constructor(controleur)
    {
        super(controleur);
        this.afficher();
    }

    afficher()
    {               
        //Récupère la balise où représenter la map et vide son contenu
        const mapHTML = document.querySelector("map");
        //on créer les éléments div
        const perduHTML = document.createElement("div");
        //création d'un élément H1
        const titreHTML = document.createElement("h1");
        titreHTML.textContent = "Niveau " + this.controleur.nbNiveau + " perdu !";
        perduHTML.appendChild(titreHTML);
        //création de l'élément div
        const boutonHTML = document.createElement("div-bt");
        //création d'un bouton qui retourne au menu principal
        const bt_menu = document.createElement("button");
        bt_menu.textContent = "Retour au menu principal";
        bt_menu.addEventListener("click", () => {
            window.location.href="accueil.html";
        });
        boutonHTML.appendChild(bt_menu);
        //création d'un bouton pour recommencer le niveau
        const bt_niveau = document.createElement("button");
        bt_niveau.textContent = "Recommencer le niveau";
        bt_niveau.addEventListener("click", () => {
            this.controleur.refaireNiveau();
        });
        boutonHTML.appendChild(bt_niveau);

        perduHTML.appendChild(boutonHTML);

        mapHTML.appendChild(perduHTML);
    }
}