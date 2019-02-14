function grade(){
    var input = prompt('write your score');

    if(input >= 75 && input<= 100){
        alert("Excellent");
    } else if(input > 49 && input< 75){
        alert("Credit"); 
    } else if(input <= 49){
        alert('failed')
    }
     else{
        alert('Invalid Score');
    }
}
grade();