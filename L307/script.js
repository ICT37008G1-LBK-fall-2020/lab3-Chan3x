var students = prompt('sia 1 ramdeni studentis sheyvana gsurt ? ')
var sia1 = []
for (var i = 0 ; i < students; i++) {
   sia1[i] = prompt('sheiyvanet '  + (i+1) + ' studenti : ')
}
var studentss = prompt('sia 2 ramdeni studentis sheyvana gsurt ? ')
var sia2 = []
for (var i = 0 ; i < studentss; i++) {
    sia2[i] = prompt('sheiyvanet '  + (i+1) + ' studenti : ')
}
for (var i = 0; i < sia1.length; i++ ) {
    for(var j = 0; j < sia2.length; j++ ) {
        if(sia1[i] === sia2[j]) {
            sia2.splice(j)
        }
    }
}

var sia = [...sia1, ...sia2]
alert (sia)