let s = 'now';

function reversedVowels(s){
    let vowels = ['a', 'e', 'i' , 'o', 'u'];
    let positions = '';
    // let stringArr = s.split('');
    let i = 0;

    for (i; i < s.length; i++){
        if (i in vowels){
            positions += s[i];
        }
    }
    return positions
}

console.log(reversedVowels())