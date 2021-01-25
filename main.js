customerArray = [];

document.addEventListener("DOMContentLoaded", function (event) {
    
});

function StartProgram() {
    let ul = document.getElementById("output");
    ul.innerHTML = '';
    
    let Customer = {
        name:  document.getElementById("name").value,
        city: document.getElementById("city").value,
        paymentType : document.getElementById("paymentType").value
    }    

    customerArray.push(Customer); 
    console.log(customerArray.length)
    customerArray.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.name} ${element.city} ${element.paymentType}` 
        let ul = document.getElementById("output");
        ul.appendChild(li)
    });

    
    let frm = document.getElementsByName('mainForm')[0];
   //reset form data
   frm.reset();
   //prevents page from refreshing
   return false;

}
    
    

