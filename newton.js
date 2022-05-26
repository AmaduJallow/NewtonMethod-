function newton(funcx,derx, x, n){
   function f(x){ 
        const f = eval(funcx);
        return f;
    }
    function df(x){ 
       const f = eval(derx);
        return f;
    }
    for(let i = 0; i<=n; i++){
    let i = x - (f(x)/df(x)).toFixed(100);
    x= i.toFixed(100);
    }
    console.log(`The root of ${funcx} is approximately ${x}`);

 return (x);


}
// newton("x**2 - ","2*x", 3, 20000);
// // 𝑒 = 𝑠𝑞𝑢𝑎𝑟𝑒𝑟𝑜𝑜𝑡2(𝑥, 𝑛) that computes the errors 𝑒𝑘 ∶= 𝑥𝑘 − √2 for 
// // 𝑘 = 0,1, 2, . . . , 𝑛, starting with 𝑥0 = 𝑥. Use 𝑓𝑜𝑟𝑚𝑎𝑡 𝑠ℎ𝑜𝑟𝑡 𝑒. What seems to be the order of the 
// // method?

function e(x,n){
    for(let i =1 ; i<= n ; i++ ){
        console.log(" the error therefore is : "+(newton("x**2 - 2","2*x", x, i) - Math.sqrt(2).toFixed()) +"\n");
        }
      
}

e(2,200)