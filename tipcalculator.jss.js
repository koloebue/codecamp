


function calculate () {
    var bill = document.getElementById('bill').value;
    var tip = document.getElementById('tip').value;
    var quantityPeople = document.getElementById('people').value;
    var result = document.getElementById('result').innerHTML = (tip * bill)/quantityPeople;
   
    


}