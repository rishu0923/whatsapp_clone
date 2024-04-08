// const socket=io('http://localhost:8000');//there is problem in this line
//client nodemon per chala nhi sakte 
//nodemon live server per kaam karte h therfore normal js not work in that 
var socket = io();
// let name;
// do
// {
//     name=prompt("enter the name ");
// }while(!name);

// socket.emit('new-user-joined',x);
var audio=new Audio('audio.mp3');
function append(message1,position1)
{
    var msg_container=document.querySelector('.display');
    var msg_Element=document.createElement('div');
    msg_Element.innerText=message1;
    msg_Element.classList.add('message_box');
    msg_Element.classList.add(position1);
    msg_container.appendChild(msg_Element); //check for append
    socket.emit('send',msg_Element);
    if(position1 == 'left')
    {
        audio.play();
    }
}

socket.on('send',msg=>
{
    append(msg,'left');
})

// socket.on('user-joined',name =>
// {
//     append(`${name} joined the chat`,'right')
// });


// socket.on('recieve',data =>
// {
//     append(`${data.name} :{data.message}`,'left')
// });

// socket.on('left',name =>
// {
//     append(`${name} left the chat`);
// })

// Form.addeventlistenenr
