const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');



buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        switch(event.target.id){
            case'grey':{
                body.style.backgroundColor = event.target.id;
                break;
            }
            case'blue':{
                body.style.backgroundColor = event.target.id;
                h1.style.color = "red";
                break;
            }
            case'green':{
                body.style.backgroundColor = event.target.id;
                break;
            }
            case'red':{
                body.style.backgroundColor = event.target.id;
                break;
            }
            case'yellow':{
                body.style.backgroundColor = event.target.id;
                break;
            }
            case'white':{
                body.style.backgroundColor = event.target.id;
                break;
            }

        }
        // if(event.target.id === 'grey'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'blue'){
        //     body.style.color = "red";
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'white'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'red'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'yellow'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'green'){
        //     body.style.backgroundColor = event.target.id;
        // }

    })
})