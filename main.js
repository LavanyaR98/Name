document.getElementById("add__income").addEventListener("click",displayDetails=>{
    var product_name =document.getElementById('description').value;
    var amount_ =parseInt(document.getElementById('amount').value);
    document.getElementById("income_product_name").innerHTML = product_name;
    document.getElementById("product").innerHTML = amount_;
    document.getElementById("amount__earned").innerHTML = amount_;
})
document.getElementById("add__expense").addEventListener("click",()=>{
    var product_name =document.getElementById('description').value;
    var product_price  =parseInt(document.getElementById('amount').value);
    document.getElementById("expense_product_name").innerHTML = product_name;
    document.getElementById("product_price").innerHTML = product_price;
    document.getElementById("amount__spent").innerHTML = product_price;    
}) 

// var add__income = document.getElementById("add__income");
// add__income.addEventListener("click", displayDetails);

// var row = 1;
// function displayDetails(){
//     var description = document.getElementById("description").value; 
//     var amount = document.getElementById("amount").value; 
    
//     if(!description || !amount){
//         return;
//     }

//     var display = document.getElementById("display");

//     var newRow = display.insertRow(row);
    
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);

//     cell1.innerHTML = description;
//     cell2.innerHTML = amount;

//     row++;
// }

// var add__expense = document.getElementById("add__expense");
// add__expense.addEventListener("click", displayDetails);

// var row = 1;
// function displayDetails(){
//     var description = document.getElementById("description").value; 
//     var amount = document.getElementById("amount").value; 
    
//     if(!description || !amount){
//         return;
//     }

//     var display_e = document.getElementById("display_e");

//     var newRow = display_e.insertRow(row);
    
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);

//     cell1.innerHTML = description;
//     cell2.innerHTML = amount;

//     row++;
// }

