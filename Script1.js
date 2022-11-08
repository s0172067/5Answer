// JavaScript source code
function click1() {
    let f1 = document.getElementById("field1");
    let f2 = document.getElementById("field2");
    let r = document.getElementById("result");
    let q = Number(f1.value) * Number(f2.value);
    r.textContent = q;
}