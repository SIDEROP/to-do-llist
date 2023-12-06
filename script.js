
// Array
let ary = ["akash","vikash","rohit","amit","subham","sorabh"]
console.log('def-arry',ary)

// new array
let new_ary = []
console.log('empty-array',new_ary)
//daynamic code
let add = document.querySelector(".add_item")

for (let i = 0; i < ary.length; i++) {
    let h1 = document.createElement('h1')
    h1.textContent = ary[i]
    add.appendChild(h1)
    let span = document.createElement('span')
    span.className = 'add'
    span.textContent= 'ADD'
    h1.appendChild(span)
}

//add daynamic code new array
document.querySelectorAll('.add').forEach((elm,len)=>{
    elm.addEventListener('click',()=>{
        
        for (let i = 0; i < ary.length; i++) {
            if (i == len) {

                //push new array
                new_ary.push(ary[i])

                console.log("empty-array",new_ary)

                create(ary[i])

            }
        }
    })
    
})


let create = (ary)=>{
    
    if (ary != null) {
        let new_item = document.querySelector(".push_item")

        let h2 = document.createElement('h1')
        h2.textContent = ary
        new_item.appendChild(h2)
        let span1 = document.createElement('span')
        span1.className = 'delete'
        span1.textContent= 'DELETE'
        h2.appendChild(span1)
    } 
    
    call()
}


call = ()=>{
    document.querySelectorAll('.delete').forEach((elm,len) => {
        elm.addEventListener('click',()=>{
            create()
            new_ary.pop()
            document.removeChild(elm)
        })
    })
}


document.getElementById('del_elm').addEventListener('click',()=>{
    new_ary.pop()
    console.log(new_ary)
})




// let new_item = document.querySelector(".push_item")

// let data = ()=>{

//         for (let i = 0; i < new_ary.length; i++) {

//             let h2 = document.createElement('h1')
//             h2.textContent = new_ary[i]
//             new_item.appendChild(h2)
//             let span1 = document.createElement('span')
//             span1.className = 'addd'
//             span1.textContent= 'DELETE'

//         }
// }
    // let h2 = document.createElement('h1')
    // h2.textContent = "hello"
    // new_item.appendChild(h2)
    // let span1 = document.createElement('span')
    // span1.className = 'addd'
    // span1.textContent= 'DELETE'

// push_item new div