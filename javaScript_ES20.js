//ES20 JavaScript
//BigInt 
//Är en ny typ i JavaScript 

//Nollish colesching operator
//Är en ännu bättre variant av eller

//Optional changing operator
//Gör så att du slipper skriva && och kan smartare kontrollera t.ex objekt
let andrei_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30
		power: 0
	}
}

let weight = andrei_pokemon?.pikachu?.weight
console.log(weight);

let power = andrei_pokemon?.pikachu?.power ?? 'no power'
console.log(power);

typeof bigInt 
//typeof 1n ger oss bigInt
//JavaScript maximala så kallade "Safe number är" 9007199254740991
//Det finns en begränsning på hur mycket minne vi kan kalkulera i JavaScript, bigInt fixar detta
//Number.MAX_SAFE_INTEGER

//> Number.MAX_SAFE_INTEGER + 10
//< 9007199254741000 
//Fungerar inte då bryter den ihop i konsolen

//> 9007199254741000n - 1n
//< 9007199254740999n
//Nu så kunde den göra en uträkning