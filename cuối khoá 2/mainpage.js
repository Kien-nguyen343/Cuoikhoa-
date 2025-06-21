

let btn = document.getElementsByClassName('boarding')
console.log(btn)
for(let i =0;i<btn.length;i++){
  btn[i].addEventListener('click', ()=>{
    // alert(btn[i].innerHTML)
    localStorage.setItem('page',btn[i].innerHTML)
    window.location.href = 'detailpagethree.html'
  })
}
