// JavaScript source code
function click1() {
    let f1 = document.getElementById("field1");
    let f2 = document.getElementById("field2");
    let r = document.getElementById("result");
    let F1 = Number(f1.value);
    let F2 = Number(f2.value);
    let q;
    if (F1 >= 0 && F2 >= 0) {
        if (f1.value >= 0 && f2.value >= 0) {
            r.textContent = Number(f1.value) * Number(f2.value);
        }
        else r.textContent = "Отрицательное значение";
    } else r.textContent ="Введено неверное значение";
    
    
    //r.textContent = q;
}
let buttom = document.getElementById("button1");

buttom.addEventListener("click", click1);
//var l = document.createElement("lable");
//l.textContent = "Русский";
//var f_ = document.getElementById("mainForm");
//f_.appendChild(l);

