var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["a"] = document.getElementById("a").value;
  formData["b"] = document.getElementById("b").value;
  formData["c"] = document.getElementById("c").value;
  formData["d"] = document.getElementById("d").value;
  formData["e"] = document.getElementById("e").value;
  formData["f"] = document.getElementById("f").value;

  if (formData["c"] == "Paramex") {
    formData["e"] = 1000;
    formData["f"] = formData["d"] * formData["e"];
  }
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.a;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.b;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.c;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.d;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.e;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.f;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("d").value = "";
  document.getElementById("e").value = "";
  document.getElementById("f").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("a").value = selectedRow.cells[0].innerHTML;
  document.getElementById("b").value = selectedRow.cells[1].innerHTML;
  document.getElementById("c").value = selectedRow.cells[2].innerHTML;
  document.getElementById("d").value = selectedRow.cells[3].innerHTML;
  document.getElementById("e").value = selectedRow.cells[4].innerHTML;
  document.getElementById("f").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.a;
  selectedRow.cells[1].innerHTML = formData.b;
  selectedRow.cells[2].innerHTML = formData.c;
  selectedRow.cells[3].innerHTML = formData.d;
  selectedRow.cells[4].innerHTML = formData.e;
  selectedRow.cells[5].innerHTML = formData.f;
}

function onDelete(td) {
  if (confirm("Yakin Ingin Menghapus ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("ID").value == "") {
    isValid = false;
    document.getElementById("ID Eror").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("Eror").classList.contains("hide")
    )
      document.getElementById("Eror").classList.add("hide");
  }
  return isValid;
}