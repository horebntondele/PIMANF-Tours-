

var imagedef=document.querySelectorAll(".imgdef");
var Nbrephotos1=imagedef.length;
var imagedef2=document.querySelectorAll(".defiler1");
var Nbrephotos2=imagedef2.length;
defiler(imagedef, Nbrephotos1);
defiler(imagedef2, Nbrephotos2)

function defiler(imgdef, Nbrephotos){
function DIAPO(){
 
    
[].forEach.call(imgdef, function(item){
    item.style.display="none";

})


if(Nbrephotos===imgdef.length){
    imgdef[Nbrephotos-1].style.display="inline-block";
    Nbrephotos=Nbrephotos-1; 
    setTimeout(DIAPO, 5000); 
}
else if(Nbrephotos > 0 && Nbrephotos!=imgdef.length){
    imgdef[Nbrephotos-1].style.display="inline-block";
    imgdef[Nbrephotos].style.display="none";
    Nbrephotos=Nbrephotos-1; 
    setTimeout(DIAPO, 5000);
}
else{
    imgdef[0].style.display="inline-block";
    Nbrephotos=imgdef.length; 
    setTimeout(DIAPO, 5000);
}

}
DIAPO();
}
