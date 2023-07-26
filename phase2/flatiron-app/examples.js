function AreaCalculator (length,width){
    // returns length and width as area
    let area = length*width
    return area
 }

 function Perimeter (length,width){
 // return length+ width as perimeter
 let perimeter =2*(length+width)
 return perimeter 
 }

 console.log(Perimeter(30000,800))
 Perimeter(27,956)
 Perimeter(3545676788,0987655)
 console.log(AreaCalculator(3000,6000))

 function Names (firstName,lastName){
    // console.log(firstName);
    // console.log(lastName);
    let surname = ("Good Morning"+ firstName + lastName)
    return  surname
 }

console.log( Names ("Mercy","Nzau"))

function Studies (Subject,Time){
    let books = ("hello " + Subject+"will be at"+ Time)
    return books
}
    
    // hello this subject will be at 10.00 amBooks ("hello this" + Subject + "will be at"+ Time)
   console.log(Studies("Cre",1400))