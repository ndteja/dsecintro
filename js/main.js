var modal = document.getElementById('simplemodal');
var modalbtn = document.getElementById('modalbtn');
var closebtn = document.getElementById('btn1');
var cntnt = document.getElementById('cntnt');

modalbtn.addEventListener('click', openmodal);
closebtn.addEventListener('click', closemodal);


function openmodal(){
    modal.style.display='block';
    cntnt.style.display='none';
}

function closemodal(){
    modal.style.display = 'none';
    cntnt.style.display='block';
}

document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed')!= -1){
        skew = 990;
    }

    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});