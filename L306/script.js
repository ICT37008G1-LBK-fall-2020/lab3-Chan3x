var search = prompt('studentis dzieba  ')
var students = ['გიორგი', 'ანი', 'ნინო', 'ბექა', 'ლევანი', 'ვაჟა']

var reLow = RegExp(`.*${search.toLowerCase().split('').join('.*')}.*`)

var matches = students.filter(e => e.toLowerCase().match(reLow))
alert (matches)
