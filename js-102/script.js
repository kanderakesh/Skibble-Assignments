let credit = 0;
let debit = 0;
let total = 0;

function creditinfo() {
  let table = document.getElementById("table");
  let input = document.getElementById("credit-data");

  let rowdata = document.createElement("tr");
  if (input.value == "" || input.value == undefined) {
    alert("Please enter the credit value");
    return;
  }
  rowdata.innerHTML = "<b>credited amount:<b>" + input.value;
  credit = parseFloat(input.value);
  total = total + credit;
  console.log(total);
  table.appendChild(rowdata);
}
function debitinfo() {
  let table1 = document.getElementById("table");
  let input1 = document.getElementById("debit-data");
  if (input1.value == "" || input1.value == undefined) {
    alert("please enter the debit value");
    return;
  }

  let rowdata = document.createElement("tr");
  rowdata.innerHTML = "<b>debited amount:<b>" + input1.value;
  debit = parseFloat(input1.value);
  total = total - debit;
  console.log(total);
  table1.appendChild(rowdata);
}

function output() {
  let rowdata = document.createElement("tr");
  rowdata.innerHTML = `<h3><b>The Available balance is ${total}</b></h3>`;
  let table2 = document.getElementById("table");
  table2.appendChild(rowdata);
}
