/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".edu", ".web"];

  let dominio = function(pronoun, adj, noun, dom) {
    let website = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            website.push(pronoun[i] + adj[j] + noun[k] + dom[l]);
          }
        }
      }
    }
    console.log(website);
  };

  dominio(pronoun, adj, noun, dom);
};
