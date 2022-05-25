 function changeColor(event){
     document.getElementById("main").style.backgroundColor=event.value;
 }
 function changeColorText(event){
     document.getElementById("main").style.backgroundColor=event.value;
 }

 const numbers =[1,2,3,4,5,6,7,8,9,10];
 //const numberPlusTen =[];

// for(let i=0; i<numbers.length; i++){
   // numberPlusTen.push(numbers[i] + 10)
 // }
 //const numberPlusTen =numbers.map((number) => numbre + 10)
 //const greaterThanFive =numbers.filter((number) => number > 5)
 //const numberFive = numbers.find((number) => number ==5)
 const indexOfFive = numbers.findIndex((number)=> number ==5)
 const items =[
     {"pen":21},
     {"soda":37},
     {"backpak":45},
     {"usb":12},
     {"usb":33},
     {"soda":13},
     {"bakpack":12},
     {"usb":20}
 ]

 const grouped = items.reduce((acc, item)=> {
     for(let prop in item){
         if(acc.hasOwnProperty(prop)) acc[prop] += item[prop];
         else acc[prop]= item[prop];
     }
     return acc;
 },{})
 console.log(grouped);