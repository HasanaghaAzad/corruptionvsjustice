document.getElementById('nj').style.display='block';var c = document.querySelectorAll(".cbut");
for(var i = 0; i < c.length; i++) {c[i].style.color = '#000';}
document.onkeydown = checkKey;function checkKey(e) {if(e.key>0 && e.key<10){pd(e.key);}}
function pd(n){ window.location = document.getElementById('c'+n).href;}
