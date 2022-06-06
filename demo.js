function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

async function testMatches() {
    var num = document.getElementById("userInput0").value;
    document.getElementById("result0").innerHTML = "Computing...";
    await sleep(10);
    num = advMath.matches(num);
    if (num >= 1e9) {
        for (var e = 0; num >= 10; num = num / 10) {
            e++;
        };
        num = Math.round(num * 1000000) / 1000000;
        document.getElementById("result0").innerHTML = "Result: around " + num + "e" + e;
    } else document.getElementById("result0").innerHTML = "Result: " + num;
};

function testToRadians() {
    var num = document.getElementById("userInput1").value;
    num = advMath.toRadians(num);
    if (num >= 1e9) {
        for (var e = 0; num >= 10; num = num / 10) {
            e++;
        };
        num = Math.round(num * 1000000) / 1000000;
        document.getElementById("result1").innerHTML = "Result: around " + num + "e" + e;
    } else document.getElementById("result1").innerHTML = "Result: " + num;
};

function testToDegrees() {
    var num = document.getElementById("userInput2").value;
    num = advMath.toDegrees(num);
    if (num >= 1e9) {
        for (var e = 0; num >= 10; num = num / 10) {
            e++;
        };
        num = Math.round(num * 1000000) / 1000000;
        document.getElementById("result2").innerHTML = "Result: around " + num + "e" + e;
    } else document.getElementById("result2").innerHTML = "Result: " + num;
};

async function testTetration() {
    var numA = document.getElementById("userInput3A").value;
    var numB = document.getElementById("userInput3B").value;
    document.getElementById("result3").innerHTML = "Computing...";
    await sleep(10);
    numC = advMath.tetration(numA, numB);
    if (numC === Infinity) document.getElementById("result3").innerHTML = "Result: Infinity";
    else if (numC >= 1e9) {
        for (var e = 0; numC >= 10; numC = numC / 10) {
            e++;
        };
        numC = Math.round(numC * 1000000) / 1000000;
        document.getElementById("result3").innerHTML = "Result: around " + numC + "e" + e;
    } else document.getElementById("result3").innerHTML = "Result: " + numC;
};
