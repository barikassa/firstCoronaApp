//!1/2/3/4
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var input7 = document.getElementById("input7");
var table = document.getElementById("table");
var button = document.getElementById("button");
var div = document.getElementById("div");
var compareinput = document.getElementById("compareinput");
var comparebutton = document.getElementById("comparebutton");
var compareid = document.getElementById("compareid");
var compareidbutton = document.getElementById("compareidbutton");

var p= document.getElementById("p");
var array = [person2 = {
    id: 1,
    firstName:"dan",
},
person3 = {
    id: 2,
    firstName:"bari"
}];

button.addEventListener("click", function () {
    let person1 = {
        firstName: input1.value,
        lastName: input2.value,
        age: input3.value,
        id: input4.value,
        adress: input5.value,
        cheackDate: new Date().getDate(),
        cheachHour: new Date().getHours(),

    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].id == person1.id) {

            console.log("the data is exist");
            return;
        }

    }
    array.push(person1);
    // document.write(person1.firstName,person1.lastName, person1.age,person1.id,person1.adress,person1.cheackDate,person1.cheachHour)
    console.log(person1);
    table.innerHTML += ` <tr><th>firstName</th><th>lastName</th><th>age</th> <th>id</th><th>adress</th></tr>`
    table.innerHTML += ` <tr><td>${input1.value.toUpperCase()}</td><td>${input2.value.toUpperCase()}</td><td>${input3.value.toUpperCase()}</td>><td>${input4.value.toUpperCase()}</td><td>${input5.value.toUpperCase()}</td></tr>`

})

//!7
var input1 = document.getElementById("input1");
input1.oninput = () => { inputUppercase() }

function inputUppercase() {
    input1.value = input1.value.toUpperCase();
}

//!7a/b
comparebutton.onclick = function () {
    for (let i = 0; i < array.length; i++) {
        if (array[i].firstName.indexOf(compareinput.value)!=-1) {
            console.log("j");
            table.innerHTML+=`<td>${array[i].firstName} ${array[i].id}<td>`
            return;
        }

    }
    p.innerHTML+=`<p>the detailes is exist</p>`;
}
//!8

compareidbutton.onclick=function(){
    for(let i=0;i<array.length;i++){
        if(array[i].id==compareid.value){
            p.innerHTML+=`<p>firstName:${array[i].firstName} id:${array[i].id}</p>`;
        }
    }
}


















