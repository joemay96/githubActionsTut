//holen des Textes
const text = document.querySelector(".fancy");
const strText = text.textContent;

//die h1 muss gelöscht werden, da sonst Text doppelt angezeigt wird
text.textContent = "";

//Nun bauen wir ein Array mit den einzelnen Zeichen
const splitText = strText.split("");

for(let i=0; i<splitText.length; i++){
    //füge jedem Zeichen einen span hinzu
    text.innerHTML +="<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50); //-> alle 50 ms

function onTick() {
    const span = text.querySelectorAll("span")[char];
    //--> hinzufügen der fade Klasse --> damit kann man sich jetzt in CSS austoben
    span.classList.add("fade");
    char++;
    //stopen des Prozesses
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}