// function rightangle(row){
//     console.log("right angle trianle");
//     for(let i=1; i<=row;i++){
//         console.log("*".repeat(i))
//     }
//     console.log("\n");
// }
// rightangle(5)
// function reveresrightangle(row){
//     console.log("right angle reverse triangle");
//     for(let i=5; i<=row;i--){
//         console.log("*".repeat(i))
//     }
//     console.log("\n");
// }
// reveresrightangle(5)


// function pyramid(row){
//     console.log("pyramid");
//     for(let i=1;i<=row;i++){
//         let spaces=" ".repeat(row-i);
//         let star="*".repeat(2*i-1);
//         console.log(spaces+star)
//     }
//     console.log("\n");

// }
// pyramid(5)

// function pyramid(row){
//     console.log("inverse pyramid");
//     for(let i=5;i>=row;i--){
//         let spaces=" ".repeat(row-i);
//         let star="*".repeat(2*i-1);
//         console.log(spaces+star)
//     }
//     console.log("\n");

// }
// pyramid(5);


// function square(row){
//      console.log("square patten");
//      for(let i=1; i<=row;i++){
//         console.log("*".repeat(row));
//      }
//      console.log("\n");
// }
// square(5)


// function hollow(rows){
//     console.log("hollow sqaure");
//     for(let i=1;i<=rows;i++){
//         if(i===1 ||i===rows){
//             console.log("*".repeat(rows));
//         }else{
//             console.log("*"+ " ".repeat(rows-2)+"*");
//         }
//     }
//     console.log("\n");
    
// }
// hollow(5)