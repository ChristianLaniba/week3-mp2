let txtSentence = document.querySelector("#txtSentence");
let txtWord = document.querySelector("#txtWord");
let btnSearch = document.querySelector("#btnSearch");
let txtOutput = document.querySelector("#txtOutput");

btnSearch.addEventListener("click", function(){

    let sentence = txtSentence.value;
    let word = txtWord.value;
    
    if (sentence.includes(word)) {
        txtOutput.innerText = "Found";
    } else {
        txtOutput.innerText = "Not Found";
    }
});