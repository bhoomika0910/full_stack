function isArmstrong(n){

}
function checkAndShow(){
    let val = document.getElementById("val").value;
    if(isArmstrong(val)){
        document.getElementById("val").innerHTML = val + " is an Armstrong Number";
    }else{
        document.getElementById("val").innerHTML = val + " is not an Armstrong Number";
    }
}
