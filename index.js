const count = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");
const buy = document.querySelector(".Buy");
const listcontainer = document.querySelector(".list-container");
const Totalsalary = document.querySelector(".Total-salary");
const TotalAll = document.querySelector(".Total-salaryALl");
const pay = document.querySelector(".pay");
const TotalShow = document.querySelector(".total-show1");
const totalShow1 = document.querySelector(".total-show2");
const qr = document.querySelector(".img-qr");
const remve = document.querySelector(".qr");

let number = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.innerText == "+") {
      number++;
    } else {
      if (number <= 0) {
        count = 0;
      } else {
        number--;
      }
    }
    count.innerHTML = number;
  });
});
let salary = 0;
buy.onclick = function () {
  let li1 = document.createElement("li");

  if (number == 0) {
    return null;
  } else {
    const coca = "Coca";
    const pricePerItem = 3000;
    const total = pricePerItem * number;

    li1.innerHTML =
      coca +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total +
      "រ";
    number = 0;
    listcontainer.appendChild(li1);
    count.innerHTML = 0;
    salary += total;
    all = salary + salary1 + salary3 + salary2 + salary4 + salary5;
    TotalAll.innerHTML = all + "រ";
  }
  if (qr == qr.classList.contains("act")) {
    qr.classList.add("act");
  } else {
    qr.classList.remove("act");
  }
};

let number1 = 0;
let all = 0;
const count1 = document.querySelector(".numberitem1");
const btnitem1 = document.querySelectorAll(".btnitem1");
const btnbuy = document.querySelector(".btnbuy");
const Totalsalary1 = document.querySelector(".Total-salary1");

btnitem1.forEach(function (bn) {
  bn.addEventListener("click", function (r) {
    if (r.currentTarget.innerText == "+") {
      number1++;
    } else {
      if (number1 <= 0) {
        count1 = 0;
      } else {
        number1--;
      }
    }
    count1.innerHTML = number1;
  });
});

let salary1 = 0;
btnbuy.onclick = function () {
  let li = document.createElement("li");

  if (number1 == 0) {
    return null;
  } else {
    const coca = "Hanuman";
    const pricePerItem1 = 5000;
    const total1 = pricePerItem1 * number1;

    li.innerHTML =
      coca +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number1 +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total1 +
      "រ";
    number1 = 0;
    listcontainer.appendChild(li);
    count1.innerHTML = 0;
    salary1 += total1;
    all = salary + salary1 + salary3 + salary2 + salary4 + salary5;
    TotalAll.innerHTML = all + "រ";
  }
  if (qr == qr.classList.contains("act")) {
    qr.classList.add("act");
  } else {
    qr.classList.remove("act");
  }
};
let salary2 = 0;
let number2 = 0;
const count2 = document.querySelector(".numberitem2");
const btnall = document.querySelectorAll(".btnTiger");
const btnbuy1 = document.querySelector(".btnbye1");

btnall.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.innerText == "+") {
      number2++;
    } else {
      if (number2 <= 0) {
        count2 = 0;
      } else {
        number2--;
      }
    }
    count2.innerHTML = number2;
  });
});

const totalancher = document.querySelector(".total-ancher");
btnbuy1.addEventListener("click", function () {
  let li2 = document.createElement("li");
  console.log(li2);
  if (number2 == 0) {
    return null;
  } else {
    const Tiger = "Tiger";
    const pricePerItem2 = 4000;
    const total2 = pricePerItem2 * number2;

    count2.innerHTML = 0;
    li2.innerHTML =
      Tiger +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number2 +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total2 +
      "រ";
    listcontainer.appendChild(li2);
    salary2 += total2;
    number2 = 0;
    all = salary + salary1 + salary3 + salary2 + salary4 + salary5;
    TotalAll.innerHTML = all + "រ";
  }
  if (qr == qr.classList.contains("act")) {
    qr.classList.add("act");
  } else {
    qr.classList.remove("act");
  }
});
let salary3 = 0;

let number3 = 0;
const count3 = document.querySelector(".numberitem3");
const btnall1 = document.querySelectorAll(".btnAncher");
const btnbuy2 = document.querySelector(".btnbuy2");
btnall1.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.innerText == "+") {
      number3++;
    } else {
      if (number3 <= 0) {
        count3 = 0;
      } else {
        number3--;
      }
    }
    count3.innerHTML = number3;
  });
});

btnbuy2.addEventListener("click", function () {
  let li3 = document.createElement("li");
  if (number3 == 0) {
    return null;
  } else {
    const Ancher = "Ancher";
    const pricePerItem3 = 4000;
    const total3 = pricePerItem3 * number3;
    li3.innerHTML =
      Ancher +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number3 +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total3 +
      "រ";
    listcontainer.appendChild(li3);

    salary3 += total3;
    count3.innerHTML = 0;
    number3 = 0;
    all = salary + salary1 + salary3 + salary2 + salary4 + salary5;
    TotalAll.innerHTML = all + "រ";
  }
  if (qr == qr.classList.contains("act")) {
    qr.classList.add("act");
  } else {
    qr.classList.remove("act");
  }
});

const count4 = document.querySelector(".numberitem4");
const btnABC = document.querySelectorAll(".btnABC");
const btnbuy3 = document.querySelector(".btnbuy3 ");
let number4 = 0;
let salary4 = 0;
btnABC.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.innerText == "+") {
      number4++;
    } else {
      if (number4 <= 0) {
        count4 = 0;
      } else {
        number4--;
      }
    }
    count4.innerHTML = number4;
  });
});

btnbuy3.addEventListener("click", function () {
  let li3 = document.createElement("li");
  if (number4 == 0) {
    return null;
  } else {
    const abc = "ABC";
    const pricePerItem4 = 5000;
    const total4 = number4 * pricePerItem4;
    li3.innerHTML =
      abc +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number4 +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total4 +
      "រ";
    listcontainer.appendChild(li3);
    salary4 += total4;
    number4 = 0;
    count4.innerHTML = 0;
    all = salary + salary1 + salary3 + salary2 + salary4 + salary5;
    TotalAll.innerHTML = all + "រ";
  }
  if (qr == qr.classList.contains("act")) {
    qr.classList.add("act");
  } else {
    qr.classList.remove("act");
  }
});

const count5 = document.querySelector(".numberitem5");
const btnGBZ = document.querySelectorAll(".btnGBZ");
const btnbuy4 = document.querySelector(".btnbuy4");

let number5 = 0;
btnGBZ.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.innerText == "+") {
      number5++;
    } else {
      if (number5 <= 0) {
        count5 = 0;
      } else {
        number5--;
      }
    }
    count5.innerHTML = number5;
  });
});
let salary5 = 0;
btnbuy4.addEventListener("click", function () {
  let li4 = document.createElement("li");
  if (number5 == 0) {
    return null;
  } else {
    const gbz = "GBZ";
    const pricePerItem5 = 3000;
    const total5 = number5 * pricePerItem5;
    li4.innerHTML =
      gbz +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      number5 +
      " " +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      "​​​ ​" +
      total5 +
      "រ";
    listcontainer.appendChild(li4);
    salary5 += total5;
    count5.innerHTML = 0;
    number5 = 0;
    all = salary + salary1 + salary3 + salary2 + salary4 + salary5;
    TotalAll.innerHTML = all + "រ";
  }
  if (qr == qr.classList.contains("act")) {
    qr.classList.add("act");
  } else {
    qr.classList.remove("act");
  }
});
pay.addEventListener("click", function () {
  salary = 0;
  salary1 = 0;
  all = 0;
  salary2 = 0;
  salary3 = 0;
  salary4 = 0;
  salary5 = 0;
  listcontainer.innerHTML = "";
  Totalsalary.innerHTML = "";
  Totalsalary1.innerHTML = "";
  TotalAll.innerHTML = "";
  const chack = qr.classList.contains("act");
  if (chack) {
    qr.classList.remove("act");
  } else {
    qr.classList.add("act");
  }
});
