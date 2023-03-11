let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "gray";
    }

    if (count === 25 || count === -25) {
      alert("Tu abuses des click !");
      count = 0;
    }

    value.textContent = count;
  });
});

console.log(btns)

/* const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase"); */

/* Can I do the same things with every button assigned to a const ? */
