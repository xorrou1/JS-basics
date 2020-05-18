let a = parseInt(prompt('Введите число'));
let b = parseInt(prompt('Введите число'));

if ( a >= 0  && b >= 0 ) {
	alert(a - b);
} else if ( a < 0  && b < 0 ) {
	alert( a * b );
}	else if ( ( a * b ) < 0 ) {
	alert ( a + b );
}