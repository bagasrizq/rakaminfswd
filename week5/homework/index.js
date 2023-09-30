
function openTab(tabName) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function submitForm() {
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var uang = document.getElementById("uang").value;

    if (nama.length < 10) {
        alert("Nama harus minimal 10 karakter.");
        return;
    }

    if (umur < 25) {
        alert("Umur harus minimal 25 tahun.");
        return;
    }

    if (uang < 100000 || uang > 1000000) {
        alert("Uang Sangu harus minimal 100 ribu dan maksimal 1 juta.");
        return;
    }

    // Simpan data pendaftar ke dalam tabel
    var table = document.querySelector("table");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
    cell3.innerHTML = uang;

    //   Reset form
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uang").value = "";
    
}