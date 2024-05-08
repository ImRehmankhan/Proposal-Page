const heading=document.querySelector('.heading')
const container=document.querySelector('.container')

const nobtn=document.querySelector('.no-btn')
const yesbtn=document.querySelector('.yes-btn')
const wrapperreact=container.getBoundingClientRect();
const nobtnrect=nobtn.getBoundingClientRect();
yesbtn.addEventListener('click',()=>{heading.innerHTML='I Love You Too! jAAnu'})
nobtn.addEventListener('mouseover',()=>{
    const i=Math.floor(Math.random()*(wrapperreact.width-nobtnrect.width))
    const j=Math.floor(Math.random()*(wrapperreact.height-nobtnrect.height))
    nobtn.style.left=i +'px';
    nobtn.style.top=j+'px';
    




});

