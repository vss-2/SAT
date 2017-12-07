let location = process.argv[2];

readFormula(location)

// cnt is for counters
// str is for strings
// val is for values
// arr is for array

exports.solve = function(location) {
	let formula = propsat.readFormula(location)
	let result = doSolve(formula.clauses, formula.variables)
	return result
	// two fields: isSat and satisfyingAssignment
}

function readFormula(location) {
	let start = require('fs') // chama o fs
	let text2 = start.readFileSync(location, 'utf8').toString() 
	// pega o texto	 e transforma em string
	let text = text2.split("\n") // quebra e joga cada linha em um array
	let clauses = readClauses(text) // passa o texto
	let variables = readVariables(clauses)

	let specOk = checkProblemSpecification(text, clauses, variables)

	let result = {
		'clauses' : [],
		'variables' : []
	}

	if (specOk) {
		result.clauses = clauses
		result.variables = variables
	}
	return result

}
function readClauses(text) {
	let cont = 0;
	var clauses = new Array()
	while (text[cont] != undefined) {
		if (text[cont].endsWith(" 0")) {
			clauses[cont] = text[cont].split(" 0").pop()
			cont++
		}
	}
	return clauses
}

function readVariables(clauses) {
	let cont2 = 0
	var variables = new Array()
	while (clauses[cont2] != undefined) {
		let split = clauses.split(" ");
		let cont3 = 0
		while (cont3 < split.length) {
			split = split.filter(function(split) {
				return split.trim() != '';
			});
			variables[cont2][cont3] = split[cont3];
			cont3++
		}
		cont2++
	}
	cont2 = 0
	cont3 = 0
	var arrf = new Array;
	while (variables[cont2][cont3] != undefined) {
		while (variables[cont2][cont3] != undefined) {
			let arrf = variables[cont2][cont3]
			if (str.includes("-")) {
			}
			cont3++
		}
		cont2++
	}
	arrf.sort()
	return arrf;
}

function checkProblemSpecification(text, clauses, variables) {
	let cont = 0
	var size = variables.length;
	while (text[cont] != undefined) {
		if (text[cont].startsWith("p ") && text[cont].includes("cnf")) {
			let str = text[cont].split(" ");
			str = str.filter(function(str) {
				return str.trim() != '';
			});
			let str2 = str[2];
			let str3 = str[3];
			if (str == size) {
				return true;
			} else {
				return false;
			}

		} else {
			return false;
		}
	}
}

function doSolve(clauses, assignment) {
	let cont = 0
	var t = '';
	var boolean = '';
	var strb = '';
	var cont2 = 0;
	let strb = b[cont] + "";
	while (a[cont] != undefined || strb!.include("0"){
		if (strb.charAt(cont2) == 0){
			if (t == false || t == ''){
				t = false;
				cont2++
			} else {
				boolean = "stop";
				nextAssignment(assignment)
			}
		} else {
			if (t == true || t == ''){
				t = true;
				cont++
			} else {
				boolean = "stop";
				nextAssignment(assignment)
			}
		}
		boolean = "";
		cont++
	}
	if (t == true && boolean != "stop"){
		console.log("isSat", t)
		let comb = assignment+"";
		let cont7 = 0
		while(comb.charAt(cont7) != undefined){
			if(comb.chartAt(cont7) == 0){
				console.log("true")
			} else {
				console.log("false")
			}
		}
		
	} else {
		console.log("isSat", t)
		console.log("null")
	}
}

function nextAssignment(assignment) {
	// faz a conversao para base binaria quantas vezes forem necessarias
	if (assignment == undefined) {
		assignment = 1
	} else {
		assignment += 1
	}
	let basetwo = assignment.toString(2)
	return basetwo
}
