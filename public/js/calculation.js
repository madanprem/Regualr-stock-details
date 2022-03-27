

function add_to_total(el) {
 
    var parent = $(el).closest('tr');
    var price = parent.find('.rate').val() == "" ? 1 : parent.find('.rate').val();
    var qty = parent.find('.qty').val() == "" ? 1 : parent.find('.qty').val();
    
    var total = price * qty;
    var total = total.toFixed(2);
    parent.find('.total_price').val(total);
  
    /*var gtot = 0;
  
    $("#quantum tr > tbody td:nth-child(3)").each(
      (_, el) => gtot += Number($(el).text()) || 0
    );
  
    $("#sum1").text(gtot);*/
  }




/*let inputDynamicFieldsQty = document.querySelectorAll('.table tr td:nth-child(3) input[type="number"]');
let inputDynamicFieldsRate = document.querySelectorAll('.table tr td:nth-child(4) input[type="number"]');
for (let inp of inputDynamicFieldsRate) {
    inp.addEventListener('change', function (e) {
        inp.hasChanged = true;
    });
    inp.addEventListener('blur', changeAmountDynamicallyOnRate);
}

for (let inp of inputDynamicFieldsQty) {
    inp.addEventListener('change', function (e) {
        inp.hasChanged = true;
    });
    inp.addEventListener('blur', changeAmountDynamicallyOnRate);
}

function changeAmountDynamicallyOnRate(e) {
    if (!e.target.hasChanged) return;
    e.target.hasChanged = false;
    let row = e.target.closest('tr');
    let totalAmount;
    let quantity = +row.cells[3].children[0].value;
    let pricePerKgElement = row.cells[4].children[0];
    let pricePerKg = +pricePerKgElement.value;
    totalAmount = parseFloat((quantity * pricePerKg).toFixed(0));
    if (!isNaN(totalAmount)) {
        row.cells[5].innerText = totalAmount;
    } else {
        row.cells[5].innerText = 0;
    }
}*/
