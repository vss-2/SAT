var fs = require('fs');
var conteudo = fs.readFileSync('./simple2.cnf', 'utf8').toString();
readFormula(conteudo);

//-------------PARTE DO FS FEITA-------------//

function readFormula(conteudo) {
	let base = conteudo.split('\n'); //feito
//-------------Leitura BRline --------------//
	//var base = semBR(quebrarlinha);			 //feito
	let clauses = readQuantidades(base); 	 //feito
	let qV = clauses[0];
	let qC = clauses[1];
//--------Gera combinacoes -----------------//
	var combina = new Array;				 //feito
	combina = combinationGenerator(qV);		 //feito
//-------Le clausulas e salva no clauses----//

}	
//-------------Tirando BRlines -------------//
function semBR(quebrarlinha) {
	let semb = new Array;
	for (let z0 = 0; z0 < quebrarlinha.length; z0++) {
		if (z0 < quebrarlinha.length - 1) {
			semb[z0] = quebrarlinha[z0].substring(0,(quebrarlinha[z0].length) - 1);
		} else {
			semb[z0] = quebrarlinha[z0];
		}
	}
	return semb;
}	

//----Descobre quantas variaveis/clausulas----//
function readQuantidades(base){
	var semComments = new Array;
	var final = new Array;
	var q = 0;
	var clalines = new Array;
	let cl = 0;
	for (let b = 0; b < base.length; b++){
	  if(base[b].startsWith("c")){
	  }
	    else if (base[b].startsWith("p")){
	    var pivo = base[b].toString();
	    var spliter = new Array;
	    spliter = pivo.split(" ");
	    var numVariaveis = spliter[2];
	    var numClausulas = spliter[3];
	    q++;
	  } else {
		  clalines[cl] = base[b].toString();
		  clalines[cl] = clalines[cl].substr(0,clalines[cl].length - 2);
		  cl++;
	  }
	}
	var numVC = new Array;
	numVC[0] = numVariaveis;
	numVC[1] = numClausulas;
	//console.log(numVC,clalines);
	//var quebro = new Array;
	//quebro = claBR(clalines);
	var teucu = new Array;
	console.log(teucu);
	clalines.pop();
	clalines.pop();
	teucu = arrayClausulas(clalines);
	//console.log("quebro sou eu:",quebro);
	//eu = onlyUnique (numVC[0], quebro);
	return numVC;
}
//----------Gera combinacoes---------------//
function combinationGenerator(qV) {
	var caselist = new Array;
	var d = 0;
	let dois = 2;
	while (d < Math.pow(2, qV)) {
		var parse = d.toString(2);
		caselist[d] = parse;
		d++;
	}
	
	var final = caselist.pop();
	let lengthfinal = final.length;
	caselist.push(final);
	console.log(lengthfinal);
	let e = 0
	while(caselist[e].length < lengthfinal){
	while(caselist[e].length < lengthfinal){
		caselist[e] = "0" + caselist[e];
	}
	e++;
	}
	//console.log(caselist);
	return caselist;
}
//----------Verifica variaveis-------------//
function garbage(){
	/*function pesquisaCla (qV, quebro){
	var variaveis = new Array;
	if (variaveis[0] == undefined){
		let e = 0;
		while(quebro[e] != undefined){			
			variaveis[e] = Math.abs(quebro[e]);
			console.log("passei por aqui", variaveis[e]);
			
			e++;
		}
	}
}*/
}

function claBR (clalines){
	var broke = new Array;
	let d6 = 0;
	console.log("clalines sou eu",clalines);
	var d7 = new Array;
	let d8 = 0;
	while (clalines[d6] != undefined){
		d7[d6] = clalines[d6].toString();
		if(d7[d6].includes(" ")){
			let d8 = new Array;
			d8 = d7[d6].split(" ");
			console.log("eu",d8);
			let d9 = 0;
		while(d8[d9] != undefined){
				broke[d9] = d8[d9];
				d9++;
			}
		}
		d6++;
		d8=0;
	}
	console.log("broke sou eu:", broke);
	return broke;
}

function arrayClausulas (clalines){
	console.log("opa",clalines);
	var a = new Array;
	let cont = 0;
	
	while (clalines[cont] != undefined){
		let as = clalines[cont].toString();
		as = as.split(" ");
		cont++;
		let cont2 = 0;
		let cont3 = 0;
		var aneg = new Array;
		//var apos = new Array;
		//console.log(as);
		while(as[cont2] != undefined){
			if (as[cont2].startsWith("-") || as[cont2].includes("-")){
				var as2 = as[cont2].toString();
				as2 = as2.substr(1,as2.length -1);
				as[cont2] = as2;
				cont2++;
				cont3++;
			}
			cont2++;
		}
		//console.log(as);
	}
	
}
/*
function onlyUnique(value, index, self) { 
	console.log("Passei por aqui");
    return self.indexOf(value) === index;
}*/

	Livre de vírus. www.avast.com.
