function focusFunction(element) {
    element.style.background = "lime";
}
function blurFunction(element) {
    element.style.background = " ";
}
function inputFunction(element) {
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}
function changeFunction(element){
    var x=element.value;
    document.getElementById("test").innerHTML=x;
}
function selectFunction(){
    console.log("You Selected Some Test.")
}