function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

async function testMatches() {
    var num = document.getElementById("userInput").value;
    document.getElementById("result").innerHTML = "Computing...";
    await sleep(10);
    num = advMath.matches(num);
    if (num >= 1e9) {
        var e = 0;
        for (; num >= 10; num = num / 10) {
            e++;
        };
        num = Math.round(num * 1000000) / 1000000;
        document.getElementById("result").innerHTML = "Result: around " + num + "e" + e;
    } else document.getElementById("result").innerHTML = "Result: " + num;
};
