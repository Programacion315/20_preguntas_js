const comparar = () => {

    let txt_uno = document.getElementById('numero_uno').value;
    let txt_dos = document.getElementById('numero_dos').value;
    let res = document.getElementById('res');

    let v = "";

    if(txt_uno > txt_dos){
        v = "mayor";
    } 
    else if(txt_uno < txt_dos){
        v = "menor";
    }
    else{
        v = "igual"
    }

    res.innerHTML += `El numero uno es ${v} que el numero dos`;
}
 




