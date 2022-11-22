// JavaScript source code
function click1() {
    let f1 = document.getElementById("field1");
    let f2 = document.getElementById("field2");
    let r = document.getElementById("result");
    let F1 = Math.abs(Number(f1.value));
    let F2 = Math.abs(Number(f2.value));
    let q;
     if (F1 % 10 >= "0" && F1 % 10 <= "9" && F2 % 10 <= "9" && F2%10 >= "0") {
    if (f1.value >= 0 && f2.value >= 0) {
        r.textContent = Number(f1.value) * Number(f2.value);
    }
    else r.textContent = " Not right ( < 0 ) !!! ";
      } else r.textContent ="Not right (  need numbers !) !!!!!! ";


    //r.textContent = q;
}
let buttom = document.getElementById("button1");

buttom.addEventListener("click", click1);


