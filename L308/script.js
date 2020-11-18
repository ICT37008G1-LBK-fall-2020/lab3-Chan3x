var students = prompt('sia 1 ramdeni studentis sheyvana gsurt ? ')
var sia = []
for (var i = 0 ; i < students; i++) {
   sia[i] = prompt('sheiyvanet '  + (i+1) + ' studenti : ')
}


alert(sia.reverse())