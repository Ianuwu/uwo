var Alumnos = [];
function submit(){
    for (var j=1 ;j <=4 ;j++){
        Alumnos.push(document.getElementById("nombre").value);
        console.log(Alumnos);
    }  
}
