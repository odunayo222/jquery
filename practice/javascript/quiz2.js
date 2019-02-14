function number(){
    num = [];
    for(i=0; i<10; i++){
        num.push(prompt("input a number"));
    }

    var big = num[0];
    for(i=1; i<9; i++){
        if(big < num[i]){
            big=num[i];
        }
    }
    alert(big)
}