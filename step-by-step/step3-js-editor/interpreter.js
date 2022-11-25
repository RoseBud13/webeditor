var r = console.log;

console.log = function() {
    for (var i = 0; i < arguments.length; i++) {
        printLine(arguments[i], arguments.length, i == arguments.length - 1);
    }
    r.apply(console, arguments)
}

function startExecution() {
    var codeContent = document.getElementById("code-panel");
    var code = codeContent.value;
    clearOutput();
    eval(code);
}

function haha() {
    console.log("哈哈");
}


function getOutputArea() {
    return document.getElementById("code-output");
}

// Clear the current output
function clearOutput() {
    var output = getOutputArea();
    output.innerHTML = "";
}

function printLine(something, argLen) {
    var output = getOutputArea();

    if (something instanceof Array) {
        something = "[" + something.join(", ") + "]";
    }

    if ( typeof something === "string" || typeof something === "number" || typeof something === "boolean") {
        var p = document.createElement("text");
        var spacer = " ";

        if (something === "<br>") {
            something = "<\bbr>";
        }

        if (typeof something === "string" && something.includes("\n")) {
            something = something.replace(/\n/g, "<br>");
        }

        if (arguments.length === 2 && arguments[1]) {
            spacer = "";
        }

        if (argLen === 1) {
            p.innerHTML = something + spacer + "<br>"; 
        } else {
            p.innerHTML = something + spacer;
        }
        output.appendChild(p);
    } else {
        alert("bad print with:" + something);
    }
}

