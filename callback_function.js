const upperFirstWord = function(str){
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}

const oneWord = function(str){
    return str.replace(/ /g, ' ').toLowerCase();
}

const transfer = function(str, fn){
    console.log(`Original String : ${str}`);
    console.log(`Transfer String: ${fn(str)}`);
    console.log(`Work function with: ${fn.name}`);
}

transfer('JavaScript is the best programming language.', upperFirstWord);
transfer('JavaScript is the best programming language:', oneWord);

// const fiveTimes = function(){
//     console.log('Hello World!');
// }
// document.body.addEventListener('click', fiveTimes);

// ['Mg Mg', 'Ma Ma', 'Hla Hla'].forEach(fiveTimes);