function add(num1, num2) {
    operator = []
    return +num1 + +num2
}

function sub(num1, num2) {
    operator = []
    return num1 - num2
}

function multiply(num1, num2) {
    operator = []
    return num1 * num2
}

function divide(num1, num2) {
    operator = []
    return num1 / num2
}

oneButton = document.getElementById("one")
oneButton.addEventListener("click", function () {
    num2.push(1)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2, num1)
})
num1 = []
num2 = []
operator = []

function update(n) {
    document.getElementById("screen").innerHTML = num1
}

twoButton = document.getElementById("two")
twoButton.addEventListener("click", function () {
    num2.push(2)
    document.getElementById("screen").innerHTML = (num2.join(""))
})

threeButton = document.getElementById("three")
threeButton.addEventListener("click", function () {
    num2.push(3)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

fourButton = document.getElementById("four")
fourButton.addEventListener("click", function () {
    num2.push(4)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

fiveButton = document.getElementById("five")
fiveButton.addEventListener("click", function () {
    num2.push(5)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

sixButton = document.getElementById("six")
sixButton.addEventListener("click", function () {
    num2.push(6)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

sevenButton = document.getElementById("seven")
sevenButton.addEventListener("click", function () {
    num2.push(7)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

eightButton = document.getElementById("eight")
eightButton.addEventListener("click", function () {
    num2.push(8)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

nineButton = document.getElementById("nine")
nineButton.addEventListener("click", function () {
    num2.push(9)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

zeroButton = document.getElementById("zero")
zeroButton.addEventListener("click", function () {
    num2.push(0)
    document.getElementById("screen").innerHTML = (num2.join(""))
    console.log(num2)
})

plusButton = document.getElementById("plus")
plusButton.addEventListener("click", function () {
    if (operator.length === 0) {
    operator.push("+")
    console.log(operator)
    operate()
    operator.push("+")
    } else {
        operate()
        operator.push("+")
    }
})

minusButton = document.getElementById("minus")
minusButton.addEventListener("click", function () {
    if (operator.length === 0) {
    operator.push("-")
    console.log(operator)
    operate()
    operator.push("-")
    } else {
        operate()
        operator.push("-")
    }
})

multiplyButton = document.getElementById("multiply")
multiplyButton.addEventListener("click", function () {
    if (operator.length === 0) {
        operator.push("*")
        console.log(operator)
        operate()
    } else {
        operate()
        operator.push("*")
    }
})

divideButton = document.getElementById("divide")
divideButton.addEventListener("click", function () {
    if (operator.length === 0) {
        operator.push("/")
        operate()
    } else {
        operate()
        operator.push("/")
    }
})

clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function () {
    num1 = []
    num2 = []
    operator = []
    document.getElementById("screen").innerHTML = (0)
})

equalButton = document.getElementById("equal")
equalButton.addEventListener("click", operate)

function operate() {
    console.log(operator)
    if (operator.at(-1) === ("+")) {
        num1 = [(add(num1, num2.join("")))]
        num2 = []
        console.log()
        document.getElementById("screen").innerHTML = add(num1, num2.join(""))
    }
    else if ( operator.at(-1) === "-") {
        if (operator.reverse().at(1) === "*") {
            console.log(operator, num1)
            if (num1.join("") > 0) {
                num1 = [(sub(num1.join(""), num2.join("")))]
                num2 = []
                console.log(num1)
                document.getElementById("screen").innerHTML = sub(num1.join(""), num2)
            }
                else {
                    console.log(num1)
                    num1 = (sub(num1, num2.join("")))
                    num2 = []
                    console.log(sub(num2.join(""), num1))
                    document.getElementById("screen").innerHTML = sub(num2.join(""), num1)
                }
        } else {
            if (num1 > 0) {
                num1 = [(sub(num1, num2.join("")))]
                num2 = []}
                else {
                    num1 = (sub(num2.join(""), num1.join("")))
                    num2 = []
                }
            console.log(sub(num1, num2.join("")))
            document.getElementById("screen").innerHTML = sub(num1, num2.join(""))
        }
    }
    else if (operator.at(-1) === "*") {
        if (num1.length > 0 && num2.length > 0) {
            num1 = [multiply(num1.join(""), num2.join(""))]
            num2 = []
            console.log(num1)
            document.getElementById("screen").innerHTML = num1
        }
        else {
            num1.push(num2.join(""))
            num2 = []
        }
    }
    else if (operator.at(-1) === "/") {
        if (num1.length > 0 && num2.length > 0) {
            num3 = (divide(num1.join(""), num2.join("")))
            num1 = [(divide(num1, num2.join("")))]
            num2 = []
            console.log(Math.round(num1 * 10)/10)
            document.getElementById("screen").innerHTML = Math.round(num3 * 10)/10
        } else {
            console.log(num1, num2)
            num1.push(num2.join(""))
            num2 = []
        }
    }
}