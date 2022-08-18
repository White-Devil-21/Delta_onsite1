
if(localStorage.getItem('num') == null){
    localStorage.setItem('num', 1)
}
else{
    var total = localStorage.getItem('num')
    for(var i = 1;i< parseInt(total);i++){
        var faq = localStorage.getItem(`faq${i}`)
        var desc = localStorage.getItem(`desc${i}`)
        accordion(faq, desc)
    }
}

var faq = document.getElementById('faq')
faq.addEventListener('click', ()=>{
    faq.value = ''
})

var desc = document.getElementById('desc')
desc.addEventListener('click', ()=>{
    desc.value = ''
})

function add(){
    var faq = document.getElementById('faq')
    var desc = document.getElementById('desc')
    var no = localStorage.getItem('num')
    localStorage.setItem(`faq${no}`, faq.value)
    localStorage.setItem(`desc${no}`, desc.value)
    setTimeout(()=>{
        localStorage.setItem('num', parseInt(no) + 1)
        location.reload()
    })

}


function accordion(name, desc){
    let accDiv = document.getElementById('accord')
    const button = document.createElement('button')
    button.className = "faqName"
    button.innerHTML = name
    const div = document.createElement('div')
    div.className = "descDiv"
    const p = document.createElement('p')
    p.className = 'faqDesc'
    p.innerHTML = desc
    div.appendChild(p)
    accDiv.appendChild(button)
    accDiv.appendChild(div)

}

var faqName = document.getElementsByClassName('faqName')
for(var i=0; i<faqName.length;i++){
    faqName[i].addEventListener('click', function(){
        this.classList.toggle("active")
        var descDiv = this.nextElementSibling
        if(descDiv.style.display === 'block'){
            descDiv.style.display = 'none'
        }
        else{
            descDiv.style.display = 'block'
        }
    })
}