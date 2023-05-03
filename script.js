console.log("Hola mundo");

window.addEventListener('load',()=>{                                            //para que la pagina carge todo antes de que podamos interactuar
 const submitButton=document.querySelector('#submit'); 
  submitButton.addEventListener('click',(event)=> {                             //detecta cuando se presiona el boton enviar
    event.preventDefault();
    const name= document.querySelector('#name').value;                          
    const email= document.querySelector('#email').value;
    const message= document.querySelector('#message').value;


    if(name !== '' && email !=='' && message !=='') {
        //ok
        document.querySelector('#user-name').innerHTML=name;
        document.querySelector('#user-email').innerHTML=email;
        document.querySelector('#user-message').innerHTML=message;
    
    }else{
        //error
        document.querySelector('#error').classList.add('show-error');
    }
  });

})