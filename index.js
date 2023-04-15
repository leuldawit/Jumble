var submit=document.getElementById('submit')
var word='chair'
var answer=word.split('');
var pos=1
$('#submit').click(function(){

    var textarea=document.getElementById('text').value
    var text=textarea.split('');
    if(pos>25){
    var win=document.getElementById('win')
    win.textContent='game over!'
    win.style.display='inline-block' }
    
    else{
       
       text.forEach(t => {
            var label=document.getElementById(pos)
            label.textContent=t
             pos++
            answer.forEach(a => {
                if(answer.includes(t)&&answer.indexOf(t)!=text.indexOf(t)){
                    label.style.backgroundColor='#c9b458'
                }
                else if( answer.indexOf(t)==text.indexOf(t) ){
                    label.style.backgroundColor='#6aaa64'   
                }
                else if(answer.indexOf(t)==-1){
                    label.style.backgroundColor='#787c7e'
                }
                
            });
           
        
       });
    }
    if(word===textarea){
        var win=document.getElementById('win')  
        win.style.display='inline-block' 
    }
    
});

function move(){
    // $('#button').toggle(2000,()=>{
        //alert('hidden')
       
        var div=$('#win')
        let width=window.innerWidth
        let height=window.innerHeight
        div.animate({left:100,top:100},slow)
        div.animate({left:width=200,top:100},slow)
        div.animate({left:width=200,top:height=200},slow)
        div.animate({left:100,top:height=200},slow)
        div.animate({left:100,top:100},slow)
        
        // forget this and finish it with css
        // add animations
        // if possible fix the 'hello ' problem
        // add some info or help sections
      

    }

    var help=document.getElementById('help')
    var close=document.getElementById('close')

$('#help').click(function(){
    var inst=document.querySelector('.instructions')
    inst.style.height='50vh'
});
$('#close').click(function(){
    var inst=document.querySelector('.instructions')
    inst.style.height='0vh'
});
    
    

