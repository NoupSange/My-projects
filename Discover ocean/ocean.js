let english = document.querySelector('.eng')
let russian = document.querySelector('.rus')


russian.addEventListener('click', rus)
english.addEventListener('click',eng)


function rus(){
   if (russian.classList.contains('active')){
    return
   } else {
    russian.classList.add('active')
    english.classList.remove('active')
   }
}

function eng(){
    if (english.classList.contains('active')){
        return
       } else {
        english.classList.add('active')
        russian.classList.remove('active')
       }
}