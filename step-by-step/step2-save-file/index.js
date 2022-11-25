function compile() {
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let output = document.getElementById("output").contentWindow.document;
  
    document.body.onkeyup = function() {
        output.open();
        output.writeln(
            html.value +
            "<style>" +
            css.value +
            "</style>" +
            "<script>" +
            js.value +
            "</script>"
        );
        output.close();
    };
}

function saveAsHtml() {
    // https://stackoverflow.com/questions/27177661/save-html-locally-with-javascript
    // https://developer.chrome.com/blog/don-t-build-blobs-construct-them/
    let htmlContent = [document.getElementById("output").contentWindow.document.documentElement.outerHTML];
    let blobFile = new Blob(htmlContent, {type: "text/html"});
    let a = document.body.appendChild(
        document.createElement("a")
    );
    // a.href = "data:text/html;charset=UTF-8," + encodeURIComponent(document.getElementById("output").contentWindow.document.documentElement.outerHTML); // Grab the HTML
    a.href = URL.createObjectURL(blobFile);
    a.download = "export.html";
    a.hidden = true;
    a.click(); // Trigger a click on the element
}
  
compile();