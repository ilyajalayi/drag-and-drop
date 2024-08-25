const box = document.querySelectorAll('.box');
const item = document.querySelectorAll('.but');
let tar;

box.forEach(b =>{
    b.addEventListener('dragover', (e)=>{
        // console.log(e);
        tar = e.target
    })
 
 
})

item.forEach(i =>{
    i.addEventListener('dragstart', (e)=>{
        e.target.classList.add('drageble')
       
    })
    i.addEventListener('dragend', (e)=>{
        e.target.classList.remove('drageble')
        tar.append(e.target)
        
    })

})

const bod = document.querySelectorAll('.but');
bod.forEach(b=>{
    b.addEventListener('click',()=>{
        t = prompt('');
        b.textContent = t;
    });
})
