
const siteLabel = 'Студии керамики в вашей ОО под ключ';
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  textNode.nodeValue = textNode.nodeValue.replaceAll('Керамические студии', siteLabel);
}

document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open'))});
document.querySelectorAll('.slider').forEach(slider=>{const track=slider.querySelector('.slider-track');slider.querySelector('.prev')?.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.85,behavior:'smooth'}));slider.querySelector('.next')?.addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.85,behavior:'smooth'}));});
document.querySelectorAll('img').forEach(image=>{image.addEventListener('error',()=>{image.classList.add('image-missing');image.removeAttribute('src');});});
document.querySelectorAll('form').forEach(form=>{form.addEventListener('submit',e=>{e.preventDefault();alert('Форма-заглушка. Подключите обработчик на сервере или сервис приема заявок.');});});
