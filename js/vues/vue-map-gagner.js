import { VueMap } from "./vue-map.js";

export class VueMapGagner extends VueMap
{
    constructor(controleur)
    {
        super(controleur);
        this.afficher();
    }

    afficher()
    {
        //Récupère la balise map
        const mapHTML = document.querySelector("map");
        //creation élémement div
        const gagnerHTML = document.createElement("div");
        //creation éléement h1
        const titreHTML = document.createElement("h1");
        titreHTML.textContent = "Partie remportée.";
        gagnerHTML.appendChild(titreHTML);
        //création élément bt
        const boutonHTML = document.createElement("bt");

        const bt_menu = document.createElement("btMenu"); //création du bouton pour retourner au menu principal
        bt_menu.textContent = "Retour au menu principal";
        bt_menu.addEventListener("click", () => {
            window.location.href = '../accueil.html';
        });
        boutonHTML.appendChild(bt_menu);

        const bt_niveau = document.createElement("btNiveau"); //création du bouton pour recommencer le niveau 
        bt_niveau.textContent = "Recommencer le niveau";
        bt_niveau.addEventListener("click", () => {
            this.controleur.niveauSup();
        });
        boutonHTML.appendChild(bt_niveau);

        gagnerHTML.appendChild(boutonHTML);

        mapHTML.appendChild(gagnerHTML);
    }
}