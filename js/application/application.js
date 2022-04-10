import { ControleurMap } from "../controleurs/controleur-map.js";
import { VueMap } from "../vues/vue-map.js";
import { VueMapGagner } from "../vues/vue-map-gagner.js";
import { VuePerdu } from "../vues/vue-map-perdu.js";

class Application {
    #controleurMap; //Controleur en charge de la map
    #vueMap; //Vue en charge de la map
    #vueGagner; // Vue en charge de l'écran lors de la victoire
    #vuePerdu; // Vue en charge de l'écran lors de la défaite


    constructor(){
        //document.addEventListener("Deplacement", this.#controleurMap.Deplacement.bind(this.#controleurMap) );
        this.#controleurMap = new ControleurMap();
        this.#vueMap = new VueMap(this.#controleurMap);
        this.#vueGagner = new VueMapGagner(this.#controleurMap);
        this.#vuePerdu = new VuePerdu(this.#controleurMap);
    }
}

//Point d'entrée de l'application : démarrage une fois tous les éléments chargés
window.addEventListener("load", () => {
    const map = new Application();
})
//on suppose que le problème vient de là la constante map qui n'affiche rien