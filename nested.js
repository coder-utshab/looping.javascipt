const colleage = {
    name: 'sajib',
    class: ['14','15'],
    events: ['ecience fair', 'bijoy diboh', '21 Feb'],
    unique: {
        color:'blue',
        result: {
            gpa: 5,
            mery: 'top'
        }
    }
}

colleage.unique.result.merit = 'top top top most'
console.log(colleage['unique'] .result.merit)
colleage.events[1] = '16 December'
console.log(colleage.events[1])
//amra jodi kono property delete korta chay
// delete.colleage.class;
// console.log(colleage)