function showTime(){
    var date = new Date();
    var godziny = date.getHours();
    var minuty = date.getMinutes();
    var sekundy = date.getSeconds();

    godziny = (godziny < 10) ? "0" + godziny : godziny;
    minuty = (minuty < 10) ? "0" + minuty : minuty;
    sekundy = (sekundy < 10) ? "0" + sekundy : sekundy;

    var time = "Godzina: " + godziny + ":" + minuty + ":" + sekundy;
    document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(showTime, 1000); //odswiazanie 
}
function myFunction() {
    var element = document.body;
    var napis = document.getElementById("MyClockDisplay").innerText;
    element.classList.toggle("dark-mode");
    napis.classList.toggle("dark-mode");
  }