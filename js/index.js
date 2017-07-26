function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}
function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr > 0) {
        x1=(-b-Math.sqrt(discr))/2*a;
        x2=(-b+Math.sqrt(discr))/2*a;
    } else {
       if (discr == 0){
           x1=x2=-b/2*a;
       }else {
           return 'No roots!'
       }
    }
    return 'x1 = ' + x1 + ', x2= ' + x2;
}
let a;
 let corr1 = false;
 while (!corr1) {
   a = parseInt(prompt('Enter the a'));
   corr1 = !isNaN(a);
   if (!corr1) {
       alert('Please enter correct a');
   }
 }
 let b;
 let corr2 = false;
 while (!corr2) {
   b = parseInt(prompt('Enter the b'));
   corr2 = !isNaN(b);
   if (!corr2) {
       alert('Please enter correct b');
   }
 }
 let c;
 let corr3 = false;
 while (!corr3) {
   c = parseInt(prompt('Enter the c'));
   corr3 = !isNaN(c);
   if (!corr3) {
       alert('Please enter correct c');
   }
 }
var result = solveQuadratic(a, b, c);
document.write(result);