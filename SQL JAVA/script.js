// const userAdd ={
//     email: "ilkin@example.com",
//     password:"12345678" 
// }


// const getUserData = async () =>{
//      try {
//         const res = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(userAdd) 
//         });
 
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// getUserData()

// const writeData = async () =>{
//     try{
//         const res = await fetch("https://ilkinibadov.com/api/v1/products")
//         const dataa = await res.json()
//         console.log(dataa)
//     }catch(error){
//         console.error(error)
//     }
// }

// writeData()

// const test ="lamp"

// const searchData = async () =>{
//     try{
//         const res = await fetch(`https://ilkinibadov.com/api/v1/search?searchterm=${test}`)
//         const dataa = await res.json()
//         console.log(dataa)
//     }catch(error){
//         console.error(error)
        
//     }
// }

// searchData()

// var a = 9
// let b

// function logger(){
//     let b = 5  
//     console.log(a)
// }
// // execution context 

// logger()


// const message = document.getElementById("message")
// const list = document.getElementById("list")
// const divs = document.getElementsByTagName('div')
// message.innerText = "Hello, World!"


// const names = ["Turan","Emin","Ilkin","Resul","Esmiralda","Aqsin"]
// names.forEach((name)=>{
//     const listItem = document.createElement('li')
//     const span = document.createElement('span')
//     listItem.style.color='blue'
//     span.innerText = " student"
//     span.style.color = 'red'
//     listItem.innerText = `${name}`
//     list.append(listItem)
//     listItem.append(span)
// })


// console.log(list)
// console.log(message)

const container = document.getElementById('container')

const getAllProduct = async ()=>{
    try{
        const res = await fetch("https://ilkinibadov.com/api/v1/products")
        const data = await res.json()
        renderItem(data.products)
    }catch(error){
        console.error(error)
    }
}

getAllProduct()

const renderItem =(products)=>{
    products.forEach(product=>{
        const div = document.createElement('div')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        img.setAttribute('src',product.images[0])
        h3.innerText = product.title
        p.innerText = product.description.slice(0,60)+"..."
        span.innerHTML = `${product.currency} ${product.price}`
        div.append(img)
        div.append(h3)
        div.append(p)
        div.append(span)
        container.append(div)
        img.classList.add('size-[200px]','object-contain')
        h3.classList.add('font-bold','text-md')
        p.classList.add('text-xs','my-2')
        span.classList.add('text-red-500')
        div.classList.add('border','border-zinc-300','p-3','rounded-md')
    })
        
    
}


