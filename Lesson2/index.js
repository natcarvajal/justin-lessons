/*
Array
Boolean
String
Integer
Object
*/

// Base Datatypes
let name = "Justin"
let age = 29
let is_hungry = true 

// Collections 
let fave_bands = ["Joji", "Frank Ocean", "Linkin Park"]
let person = {
    name:name,
    age: age,
    is_hungry:is_hungry, 
    fave_bands:fave_bands
}

// console.log(fave_bands[1])
// console.log(fave_bands[0])
// for(where i start; where I end; how to get there){do this}
// for(var i = 0; i < fave_bands.length; i+=1){
//     console.log(i + " " + fave_bands[i] )
// }
// fave_bands.forEach(element =>{
//     console.log(element)
// })

function is_even(give_number){
    return give_number % 2 === 0
}

function search(the_term_we_are_looking_for, collection){
    let found = "";
    for(var i = 0; i < collection.length; i++){
        if (collection[i] == the_term_we_are_looking_for){
            console.log("Foaund it!! at index " + i)
        }
    }
}


let nums = [1,2,3,4,5,6,7]
search("Frank Ocean", fave_bands)
search(4, nums)

/*
What is the data-type
What methods do I get for free



*/
