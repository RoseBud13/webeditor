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
  
compile();