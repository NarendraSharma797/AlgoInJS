
/**
 * find next grater element
 * 
 * Brute force method
 */

let arr = [4, 5, 2, 25];
// let next;
// for (var i = 0; i < arr.length; i++){
//     next = -1;
//     for (var j = i+1; j <arr.length;j++){
//         if(arr[i]<arr[j]){
//             next = arr[j];
//             break;
//         }
//     }
//     console.log(arr[i],'--',next)
// }

/**
 * Using stack O(n) complexity
 */
let stack = [];
let next, popped 
arr.forEach( element =>{
   
    if(stack.length < arr.length){
        popped = stack.pop()
            while(element>popped){
                console.log(popped, '===',element)
                if(stack.length==0)
                break
                popped = stack.pop()
                
            }
     if(element<popped){
         stack.push(popped)
     }
    }
    stack.push(element)
    // console.log(element , stack)
})
while(stack.length>0){

    console.log(stack.pop(), '===',-1)
}
// console.log(stack)