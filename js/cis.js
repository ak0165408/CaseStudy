// While loop for creating a printer friendly page using data arrays above 

function printpage() {
    var newopen = window.open("");
    var count = 0;
    var i = 0;
    while (count < 3) {
        newopen.document.write("<p>" + names[i] + "<br>" + dates[i] + "<br>" + desc[i] + "</p>");
        i++;
        count++;
    }
    newopen.document.writeln("<p>Enjoy!</p>");
}