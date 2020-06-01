/*part of navbar */
/*
var nav = document.getElementById('nav');
window.onscroll = function(){
    if(window.pageYOffset > 90){
        nav.style.position = 'fixed';
        nav.style.top = '-31px';
        nav.style.height = '80px';
        nav.style.transition = 'all .5s';
    }else{
        nav.style.position = '';
        nav.style.top = '0px';
        nav.style.transition = 'all .5s';
    }
}
*/
//nav hidden

var icon_nav = document.getElementById('icon_nav');
var ul_hidden = document.getElementById('ul_hidden');
var li_all = Array.from(document.querySelectorAll('#ul_hidden li'));
 
icon_nav.onclick = function(){
ul_hidden.toggleAttribute('is')
for(var s = 0 ; s < li_all.length;s++){
if(ul_hidden.hasAttribute('is') ){
        ul_hidden.classList.remove('none_height');
        li_all[s].classList.remove('opacity1');
        ul_hidden.style.transition = 'all .5s'
    }else{
        ul_hidden.classList.add('none_height');
        li_all[s].classList.add('opacity1');
        ul_hidden.style.transition = 'all .5s'
    }    
    li_all[s].height = window.innerHeight;
}
}

/*end hidden nav*/

/*end nav */

/* follow part of number with javascript code  */ 
var li = Array.from(document.querySelectorAll('.drop_one ul li')),
     ul = document.getElementById('ul'),
     arro1 = document.getElementById('arro1'),
      p = document.getElementById('p');
p.addEventListener('click' , function(){
    if(ul.getAttribute('class') == 'display'){
        ul.classList.remove('display');
        arro1.style.transform = 'rotateX(180deg)';
        arro1.style.transition = 'all .5s'
    }else{
        ul.classList.add('display');
        arro1.style.transform = 'rotateX(0deg)';
        arro1.style.transition = 'all .5s'
    }
})

for(var i = 0 ; i < li.length; i++){    
        li[i].addEventListener('click' , function(){
            p.textContent =this.innerHTML;
            ul.classList.add('display');
            arro1.style.transform = 'rotateX(0deg)';
    })
}

var p2 = document.getElementById('p2'),
        ul2 = document.getElementById('ul2'),
        li2 = Array.from(document.querySelectorAll('.drop_two ul li')),
        arro2 = document.getElementById('arro2');
        p2.addEventListener('click' , function(){
          if(ul2.getAttribute('class') == 'display'){
              ul2.classList.remove('display');
              arro2.style.transform = 'rotateX(180deg)';
              arro2.style.transition = 'all .5s'
          }else{
              ul2.classList.add('display')
              arro2.style.transform = 'rotateX(0deg)';
              arro2.style.transition = 'all .5s'
          }    
    })
for(var x = 0 ; x <= li2.length -1 ; x++){
    li2[x].addEventListener('click' ,function(){
        ul2.classList.add('display');
         p2.innerText = this.innerText;
         arro2.style.transform = 'rotateX(0deg)';
    })
}

/* end part of number with javascript code  */




/**/