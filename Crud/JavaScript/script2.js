var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Nama"] = document.getElementById("Nama").value;
    formData["Umur"] = document.getElementById("Umur").value;
    formData["Obat"] = document.getElementById("Obat").value;
    formData["Alamat"] = document.getElementById("Alamat").value;
    formData["Jk"] = document.getElementById("Jk").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nama;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Umur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Obat;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Alamat;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.Jk;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Hapus</a>`;
}

function resetForm() {
    document.getElementById("Nama").value = "";
    document.getElementById("Umur").value = "";
    document.getElementById("Obat").value = "";
    document.getElementById("Alamat").value = "";
    document.getElementById("Jk").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nama").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Umur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Obat").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Alamat").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Jk").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nama;
    selectedRow.cells[1].innerHTML = formData.Umur;
    selectedRow.cells[2].innerHTML = formData.Obat;
    selectedRow.cells[3].innerHTML = formData.Alamat;
    selectedRow.cells[4].innerHTML = formData.Jk;
}

function onDelete(td) {
    if (confirm('Yakin Ingin Menghapus ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Nama").value == "") {
        isValid = false;
        document.getElementById("Nama Eror").classList.remove("Sembunyikan");
    } else {
        isValid = true;
        if (!document.getElementById("Nama Eror").classList.contains("Sembunyikan"))
            document.getElementById("Nama Eror").classList.add("Sembunyikan");
    }
    return isValid;
}