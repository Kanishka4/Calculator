let element = document.getElementById("outputField");

function outputDisplay(val){
    console.log("outputDisplay");
    element.innerHTML = element.innerHTML +val;
}

function clearDisplay(){
    console.log('cleared');
   element.innerHTML="";
}

function displayResult(){

    var result=eval(element.innerText);
    console.log(result);
    element.innerHTML=element.innerHTML+" = "+result;
}