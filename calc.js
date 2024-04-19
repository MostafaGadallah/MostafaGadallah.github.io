function numper(numper){
    document.querySelector(".equation").value+=numper
}
function parametar(parametar){
    document.querySelector(".equation").value+=parametar
}
function equal(){
    document.querySelector(".result").querySelector("span").innerText=eval(document.querySelector(".equation").value)
}
function deletenum(){
    let str=document.querySelector(".equation").value
    document.querySelector(".equation").value=str.substring(0, str.length-1)
}