var anbani = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ']
var sorted = []

var students = prompt(' ramdeni studentis sheyvana gsurt ? ')
var arr = []
for (var i = 0 ; i < students; i++) {
   arr[i] = prompt('sheiyvanet '  + (i+1) + ' studenti : ')
}

for(var i = 0; i < anbani.length; i++) {
    for(var j =0; j < arr.length; j ++) {
        if(arr[j].slice(0,1) === anbani[i]) {
            sorted = [...sorted, arr[j]]
        }
    }
}

alert(sorted)