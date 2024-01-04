function convert(){
    var a=document.getElementById("a").value;
    var r=(a * 9/5) + 32;
    var k=a+273.15;
    document.getElementById("b").value=r;
    document.getElementById("d").value=k;
}
