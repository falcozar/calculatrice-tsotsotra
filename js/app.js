'use strict'
// recuperation chiffre
const chiffres = document.getElementsByClassName('chiffre')
const output = document.getElementById("output")
const sortie_text = document.getElementById("sortie")
const el_egal = document.getElementById("egal")
const btn_clear = document.getElementById("clear")

// console.log(chiffres[0])
//list des boutons
for (let btn of chiffres)
{
    //ajout event click on each button
    btn.addEventListener('click', () => {
         
        const valeur = btn.textContent
        output.value+=valeur
        //sortie_text.textContent += valeur 
            
         output.focus()
         console.log(valeur)
    })
    //recuperation du text sur le bouton
   
    
}
const letters = Array.from(Array(26), (e, i) => String.fromCharCode(i + 97));
console.log(letters)
//add event calculer on id egal
const calculer = () => {


   const span = document.createElement('span')
    let out = output.value
    //verification des texts si contient des letters
    //isLetter(wordToCheck, letters)
    

    let op = eval(output.value)  //evaluer les chiffres en entrée et en sortie
    output.value = op
    //sortie_text.textContent = ""
    span.innerHTML = out + " = " + op + "<br>"
    sortie_text.insertBefore(span, sortie_text.firstChild)
    //sortie_text.removeChild(span.parentNode) 
    //output.value = ""
    output.focus()
} 
el_egal.addEventListener('click', calculer)

      
//fonction qui efface l'écran 
const effacer = () =>  { 
             output.value = "" 
             sortie_text.innerHTML = "" 
             output.focus()
         } 
     btn_clear.addEventListener('click', effacer) 

    //cas ou l'user taper directement sur le champ input le calculer
    output.addEventListener('keydown', (e) => {
        //console.log(typeof e.key)
       // const filter = output.value.filter(test  => test = "a")
        //console.log(filter) 
       // if (e.key == "a") console.error("tsy mety")
      // if (isLetter(e.key)) console.log('tsy poinsa', e.key)
       if (e.key == "Enter") calculer()
        if (output.value == "undefined" ) effacer() 
       
    })
/*
    function  isLetter(value) {
        value = value.toUpperCase();
        for (let i = 0; i < value.length; i++) 
           if (!(value[i] >= "A" && value[i] <= "Z")) return false;
     
        return true;
     }
     */
     function isLetter(wordToCheck, letters){
        return !letters.reduce((a, b) => a.replace(b,''), wordToCheck.toLowerCase()).length;
      }