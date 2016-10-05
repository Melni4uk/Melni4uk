var store = {"name": "NOVUS", "address": "Schevchenka str. 300", "employeesCount": "40"}
localStorage.setItem('store', JSON.stringify(store));
var retrivedObject = localStorage.getItem('store');
console.log('retrivedObject: ' , JSON.parse(retrivedObject));