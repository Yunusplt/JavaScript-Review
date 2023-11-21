//! ################################################################
//! ######################## STRING METHODS ########################
//! ################################################################
//! length
//! charAt(index)               // "Hello World!"  str.chartAt(0)     // H
//! charCodeAt(index)           // str.charAt(0)                      // 72
//! toUpperCase()               // str.toUpperCase()                  // HELLO WORLD       
//! toLowerCase()               // str.toLowerCase()                  // hello world!
//! indexOf(substring)          // str.indexOf("World")               // 7
//! slice(start, end)           // str.slice(0, 5)                    // Hello
//! substring(start, end)       // str.substring(0, 5)                // Hello
//! replace(search, replace)    // str.replace("World", "Universe")   // Hello Universe
//! split(separator)            // str.split(" ")                     // ["Hello,", "World!"]
//! trim()                      // str.trim()                         // space remove
//! concat()
//! includes()
//! startWith() endsWith()
//! replace(searchFor, replaceWith)





//! ################################################################
//! ################ PRIMITIVE AND NON PRIMITIVE ###################
//! ################################################################

const vorname = "Yunus"                         //! Primitive
const lastname= new String("Polat")             //! NonPrimitive

console.log(vorname +" "+ typeof(vorname));     //! Yunus string
console.log(lastname +" "+ typeof(lastname));   //! Polat object


//! ################################################################
//! ##################### concat() immutable #######################
//! ################################################################

let w1 = "Hello"
let w2 = "World"

let sentence1 = w1.concat(w2)       //!assigning
console.log(sentence1)              //!HelloWorld
console.log(w1)                     //!Hello


//! ################################################################
//! ############ toLowerCase() toUpperCase() immutable #############
//! ################################################################

let country = "Türkiye"

console.log(country.toLowerCase());             //! türkiye
console.log(country.toLocaleLowerCase());       //! türkiye
console.log(country.toLocaleLowerCase("tr"));   //! türkiye
console.log(country.toUpperCase());             //! TüRKIYE
console.log(country.toLocaleUpperCase());       //! TÜRKIYE
console.log(country.toLocaleUpperCase("tr"));   //! TÜRKİYE


//! ################################################################
//! ########################## chartArt() ##########################
//! ################################################################

const sentence2 = "to be or not to be, that is the question"

console.log(sentence2.charAt());                    //! first character t
console.log(sentence2.charAt(sentence2.length-1));  //! last character  n
console.log(sentence2.charAt(7));                   //! r


//! ################################################################
//! ########################## includes() ##########################
//! ################################################################

console.log(sentence2);
console.log(sentence2.includes("TO BE"))            //! false
console.log(sentence2.includes("not to be"))        //! true
console.log(sentence2.includes("to be", 14))        //! false


//! ################################################################
//! ########################### indexOf() ##########################
//! ################################################################

console.log(sentence2.indexOf("be"))                //! 3
console.log(sentence2.lastIndexOf("be"))            //! 16
console.log(sentence2.indexOf("car"))               //! -1
console.log(sentence2.indexOf("be", 4))             //! 16
console.log(sentence2.indexOf("be", sentence2.indexOf("be") + 1))  //! 2. be yi bul demenin alternatif yolu


//! ################################################################
//! ########################### search() ###########################
//! ################################################################
const sentence3 = "You should go to CINEMA.";

console.log(sentence3.search(/[A-Z]/));//28         //! 0
console.log(sentence3.charAt(sentence3.search(/[A-Z]/)).toLowerCase()); //! y
console.log(sentence3)                              //! tamamen degismedi
console.log(sentence3.search(/[a-z]/));             //! 1
console.log(sentence3.search(/[0-9]/));             //! there is no number
console.log(sentence3.search(/[.]/));               //! 23
console.log(sentence3.length);                      //! 24
console.log(sentence3.search(/[^a-z]/)); // kücük harfler disinda ilk karakteri 


//! ################################################################
//! ################## startsWith() endsWith() #####################
//! ################################################################

console.log("startWith() endsWith()")
console.log(sentence3.startsWith("you"))            //! false
console.log(sentence3.startsWith("go", 11));        //! true


//! ################################################################
//! ############## replace(searchFor, replaceWith) #################
//! ################################################################
console.log("replace()");
let sentence4 = "You should go to CINEMA and you go too.";

const sentence5 = sentence4.replace("you", "flex")
console.log(sentence5);                                 //! You should go to CINEMA and flex too.
sentence4 = sentence4.replace("CINEMA", "MUSEUM" )
console.log(sentence4);                                 //! You should go to MUSEUM and you too.
console.log(sentence4.replace(/MUSEUM/i, "CINEMA"));    //! You should go to CINEMA and you too.
//! with /i/ caseSensetive out of order.
console.log(sentence4.replace(/go/gi, "come"))          //! You should come to MUSEUM and you come too.
//! with /gi/ tüm go kelimeleri bulduk ve degistirdik..


//! ################################################################
//! ######################### replaceAll() #########################
//! ################################################################

console.log(sentence4.replaceAll("come", "go"));        //! You should go to MUSEUM and you go too.
console.log(sentence4.replace(/go/gi, "come"));         //! alternative


//! ###################################################################
//! ## slice(beginIndex, endIndex) / substring(beginIndex, endIndex) ##
//! ###################################################################

const numbers = "One TWO Three FOUR Five SIX"

console.log(numbers.slice(4));                      //! TWO Three FOUR Five SIX
console.log(numbers.slice(8,13));                   //! Three

console.log(numbers.slice(-3));                     //! SIX
console.log(numbers.substring(-3));                 //! One TWO Three FOUR Five SIX
console.log(numbers.substring(numbers.length-3));   //! SIX


//! ################################################################
//! #################### split(seperator,limit) ####################
//! ################################################################
//? split turns a string into an array. 

console.log(numbers.split());       //! ['One TWO Three FOUR Five SIX']
console.log(numbers.split(""));     //! ['O', 'n', 'e', ' ', 'T', 'W', 'O', ' ', 'T', 'h', 'r', 'e', 'e', ' ', 'F', 'O', 'U', 'R', ' ', 'F', 'i', 'v', 'e', ' ', 'S', 'I', 'X']
console.log(numbers.split(" "));    //! ['One', 'TWO', 'Three', 'FOUR', 'Five', 'SIX']
console.log(numbers.split("e"));    //! ['On', ' TWO Thr', '', ' FOUR Fiv', ' SIX']
console.log(numbers.split("e",3));  //! ['On', ' TWO Thr', '']
console.log(numbers.split("",3));   //! ['O', 'n', 'e']


//! ################################################################
//! ############################ trim() ############################
//! ################################################################

const hi = "    Welcome to M y   Home"

console.log(hi);                        //!     Welcome to M y   Home
console.log(hi.length)                  //! 25
console.log(hi.trim());                 //! Welcome to M y   Home
console.log(hi);                        //!     Welcome to M y   Home   didn't turn into
console.log(hi.trim().length);          //! 21
console.log(hi.trimEnd());              //!     Welcome to M y   Home
console.log(hi.trimStart());            //! Welcome to M y   Home


//! ################################################################
//! ################################################################
