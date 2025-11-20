

//  // var num  = 5 
//  let username = null //= "turan"

//  undefined

//  username ="Turan";


//  console.log(username )
//  const a = 5 
//  const b = 5

//  const age = 23

//  const students = ["Turan","Resul","Emin","Esmiralda","Emin","Aqsin"]
//  console.log(students)

//  //+ - * / < > <= >= toplama cixma vurma bolme
//  // and && or || not ! truyu false, falseyu true edir

 

//  const jop = {
//     title:"ACADEMY",
//     department:"IT",
//     salary: 6000,
//  }

//  console.log(jop)



//  function sum(a,b) {
//     console.log(a+b)
//  }

//  const findDif=(a,b)=>{
//     console.log(a-b)
//  }

//  findDif(30,20)

// sum(10,20 )

// const c = 10

// const message = "Hello Word"

// if(c>=10){
//     console.log(message)
// } else if(c < 8 && c>5){
//     console.log("c is between 8 and 5")
// } else{
//     console.log("c is smaller then 5")
// }

// switch (c){
//     case 10:
//         console.log(message)
//         break;
//     case 8:
//         console.log("c is 8")
//         break;
//     case 5:
//         console.log("c is 5")
//         break;
//     default: console.log("Undifine")
//         break;
    
// }

const age = 19

const name = "Turan"

const isStudent = true

const scores =[78,67,90]

const person ={
    height:1.80,
    weight:70
}

const checkEligibility =(age,isStudent)=>{

    console.log(age>=18, age && isStudent)

    if(age>=18 &&isStudent){
        console.log("You qualify")
    } else {
        console.log("You do not qualify.")
    }
}

function averageScore (scores){
    console.log((scores[0]+scores[1]+scores[2])/3)
}

averageScore(scores)

checkEligibility(age, isStudent)


