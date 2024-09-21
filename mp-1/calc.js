function adder() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  let result = Number(first) + Number(second);

  if (result < 0) {
    document.getElementById("alt-output").innerHTML = String(result);
    document.getElementById("alt-output").style.display = "block";
    document.getElementById("output").style.display = "none";
  } else {
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("output").style.display = "block";
    document.getElementById("alt-output").style.display = "none";
  }
}

function subber() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    
    let result = Number(first) - Number(second);
    
    if (result < 0) {
        document.getElementById("alt-output").innerHTML = String(result);
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("output").style.display = "none";
    } else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.display = "block";
        document.getElementById("alt-output").style.display = "none";
    }
}

function multiplier() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    
    let result = Number(first) * Number(second);
    
    if (result < 0) {
        document.getElementById("alt-output").innerHTML = String(result);
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("output").style.display = "none";
    } else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.display = "block";
        document.getElementById("alt-output").style.display = "none";
    }
}

function divider() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    
    let result = Number(first) / Number(second);
    
    if (result < 0) {
        document.getElementById("alt-output").innerHTML = String(result);
        document.getElementById("alt-output").style.display = "block";
        document.getElementById("output").style.display = "none";
    } else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.display = "block";
        document.getElementById("alt-output").style.display = "none";
    }
}

function powNums() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    
    let result = first;
    
    if (second < 0) {
        num2 = second * -1;
        for (let c = 1; c < num2;) {
            result = result * first;
            c++;
        }
        result = 1 / result;

    } else {
        for (let c = 1; c < second;) {
            result = result * first;
            c++;
        }
    }
    
    if (second == 0) {
        document.getElementById("output").innerHTML = "1"
    } else {
        if (result < 0) {
            document.getElementById("alt-output").innerHTML = String(result);
            document.getElementById("alt-output").style.display = "block";
            document.getElementById("output").style.display = "none";
        } else {
            document.getElementById("output").innerHTML = String(result);
            document.getElementById("output").style.display = "block";
            document.getElementById("alt-output").style.display = "none";
        }
    }
}

function clearer() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").style.display = "none";
    document.getElementById("alt-output").style.display = "none";
}