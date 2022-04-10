import { Coordonnee } from "./coordonnees.js";

 //Ici nous parametrons les déplacements de bases pour se deplacer dans la map 
export const HAUT = new Coordonnee({ x: -1, y: 0});
export const BAS = new Coordonnee({ x: 1, y: 0});
export const GAUCHE = new Coordonnee({ x: 0, y: -1});
export const DROITE = new Coordonnee({ x: 0, y: 1});