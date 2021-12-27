document.getElementById("add__income").addEventListener("click",()=>{
    var amount_ =parseInt(document.getElementById('amount').value);
    document.getElementById("income_").innerHTML = amount_;
    document.getElementById("amount__earned").innerHTML = amount_;
})
document.getElementById("add__expense").addEventListener("click",()=>{
    var product_name =document.getElementById('description').value;
    var product_price  =parseInt(document.getElementById('amount').value);
    document.getElementById("expense_product_name").innerHTML = product_name;
    document.getElementById("product_price").innerHTML = product_price;
})

