function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function toUpper(){
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
}

function toLower(){
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
}

function toProper(){
    let text = document.querySelector("textarea").value;
    let ntext = String();
    for(let i = 0; i < text.length; i++){
        if(i == 0){
            ntext += text[0].toUpperCase();
        }else if(text[i - 1] == ' '){
            ntext += text[i].toUpperCase();
        }else{
            ntext += text[i];
        }
    }
    document.querySelector("textarea").value = ntext;
}

function toSentence(){
    let change = true;
    let text = document.querySelector("textarea").value;
    let new_text = String();
    for(let i = 0; i < text.length;i++){
        if(isLetter(text[i])){
            if(change){
                new_text += text[i].toUpperCase();
                change = false;
            }else {
                new_text += text[i].toLowerCase();
            }
        }else{
            if(text[i] == "."){
                new_text += text[i];
                change = true;
            }else{
                new_text += text[i];
            }
        }
    }
    document.querySelector("textarea").value = new_text;
}

function download(file_name, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +encodeURIComponent(text) );

    element.setAttribute('download', file_name);

    element.style.display = 'none';

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener("click", function (){
    toUpper();
});

document.getElementById("lower-case").addEventListener("click", function (){
    toLower();
});

document.getElementById("proper-case").addEventListener("click", function (){
    toProper();
});

document.getElementById("sentence-case").addEventListener("click", function (){
    toSentence();
});

document.getElementById("save-text-file").addEventListener("click", function (){
   download("text.txt", document.querySelector("textarea").value);
});

