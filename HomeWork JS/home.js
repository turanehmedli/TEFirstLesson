const vievbtn = document.getElementById('vievbtn')
const container = document.getElementById('container')



//======================================================================

limit = 8

vievbtn.addEventListener('click',()=>{
    limit +=8
    getAllProduct()
})

const getAllProduct = async ()=>{
    try{
        const res = await fetch(`https://ilkinibadov.com/api/v1/products?limit=${limit}`)
        const data = await res.json()
        if(data.totalProducts === limit){
            vievbtn.classList.add('hidden')
        }
        renderItem(data.products)
    }catch(error){
        console.error(error)
    }
}

getAllProduct()

const renderItem =(products)=>{
    container.innerHTML =""
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


