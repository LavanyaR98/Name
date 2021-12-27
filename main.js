document.getElementById("add__income").addEventListener("click",()=>{
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

