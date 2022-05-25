  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  document.getElementById("now").innerHTML = "今天是" + year +"年" + month + "月" + day + "日";

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementByTagName("*");
  for (i=0; i<z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page Not Found.");}
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        } /* end inner if*/
      } /* end inner function */
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    } /* end outer if */
  }
};

