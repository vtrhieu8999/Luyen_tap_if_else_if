let username= prompt('Who are you?', '');
if(username=='Admin'){
    let pass= prompt('Passwords?', '');
    if(pass=='The master') alert('Welcome');
    else if(pass== null) alert('Canceled');
        else alert('Wrong passwords');
}
else if(username== null) alert('Canceled');
    else alert('I don`t know you');