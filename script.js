/*var store = {"name": "NOVUS", "address": "Schevchenka str. 300", "employeesCount": "40"}
localStorage.setItem('store', JSON.stringify(store));
var retrivedObject = localStorage.getItem('store');
console.log('retrivedObject: ' , JSON.parse(retrivedObject));*/

/*
var getInfo = document.getElementById('informatiomForm')
form.onsubmit  = function(event){
    event.preventDefault();
    console.log(form.adress);
};*/


/*var form = document.getElementById('informationForm');
form.onsubmit = function(e){
    e.preventDefault();
    console.log(form.informationForm);
};*/
function processForm() {
    event.preventDefault();


    var inForm = document.getElementById('informationForm');

    var i;
    var container = [];
    for (i = 0; i <= 2; i++){
        container [i]=inForm.getElementsByTagName('input');
        console.log(container[i]);
    }


}
