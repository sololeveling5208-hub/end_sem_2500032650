function addStudent() {
    let name = document.getElementById("name").value.trim();
    let a = document.getElementById("m1").value;
    let b = document.getElementById("m2").value;
    let c = document.getElementById("m3").value;

    if (name == "" || a == "" || b == "" || c == "") {
        alert("Please fill all fields");
        return;
    }

    let m1 = Number(a);
    let m2 = Number(b);
    let m3 = Number(c);

    if (m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100) {
        alert("Enter marks between 0 and 100");
        return;
    }

    let total = m1 + m2 + m3;
    let average = total / 3;
    let grade;

    if (average >= 80)
        grade = "A";
    else if (average >= 60)
        grade = "B";
    else if (average >= 40)
        grade = "C";
    else
        grade = "F";

    let row = document.getElementById("list").insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = m1;
    row.insertCell(2).innerHTML = m2;
    row.insertCell(3).innerHTML = m3;
    row.insertCell(4).innerHTML = total;
    row.insertCell(5).innerHTML = average.toFixed(2);
    row.insertCell(6).innerHTML = grade;

    document.getElementById("name").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
}
