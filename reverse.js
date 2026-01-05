
const sentence = 'I Am a Learning Web Devolopment'

for(const letter of sentence){
    console.log(letter);
}


//output ashba

// I
 
// A
// m

// a

// L
// e
// a
// r
// n
// i
// n
// g

// W
// e
// b

// D
// e
// v
// o
// l
// o
// p
// m
// e
// n
// D
// e
// v
// o
// l
// o
// p
// m
// e
// n
// t





// pura line ta ka ultay falay deba
let reverse = ''
for(const letter of sentence){

    reverse = letter + reverse;
}
console.log(reverse)

//output ashba 
//tnempoloveD beW gninraeL a mA I



//ignore this solution
let rev = ''
for(let i = 0; i<sentence.length; i++){
    //console.log(i);
    //console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);