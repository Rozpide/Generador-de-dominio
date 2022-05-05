/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombres = ["el", "nuestro"];
  let adjetivos = ["genial", "estupendo"];
  let sustantivo = ["corredor", "mapache"];
  let dominio = [".com", ".es"];

  let resultado = "";
  for (let i in pronombres) {
    for (let j in adjetivos) {
      for (let k in sustantivo) {
        for (let m in dominio) {
          resultado = pronombres[i] + adjetivos[j] + sustantivo[k] + dominio[m];
          console.log(resultado);
        }
      }
    }
  }
  return resultado;
};
