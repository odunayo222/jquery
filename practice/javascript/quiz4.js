var name;
var maths;
var eng;
var science;
var econs;
var counter = 1;
store = [];
function data(){
    name = prompt("Plese enter name");
    maths = parseInt(prompt("Please enter your maths score"));
    eng = parseInt(prompt("Please enter eng score"));
    science = parseInt(prompt("Please enter your science score"));
    econs = parseInt(prompt("Please enter your econs score"));
    
    dataset = {
        name: none,
        maths: maths,
        eng:eng,
        science:science,
        econs:econs

    }
    store.push(dataset)
    check = prompt("Do you want to enter more data (n): ")
    if (check != "n"){
        counter++
        data()
    } else{
        output()
    }

}

function grade(score){
    if(score >= 75 && score <= 100){
        return "A1"
    } else if(score >= 65 && score <= 74){
        return "B2"
    } else if(score >= 55 && score <= 64){
        return "B3"
    } else if(score >= 50 && score <= 54){
        return "C4"
    } else if(score >= 45 && score <= 49){
        return "D5"
    } else if(score >= 40 && score <= 44){
        return "E8"
    }
    else if(score >= 0 && score <= 39){
        return "F9"
    }
    else{
        return "Invalid";
    }
}

function output(){
    for(i=0; i <= counter-1; i++){
        console.log("Your name is "+store[i]['name'])
        console.log(" Your grade for maths is "+grade(store[i]['maths']))
        console.log(" Your grade for eng is "+grade(store[i]['eng']))
        console.log(" Your grade for science is "+grade(store[i]['science']))
        console.log(" Your grade for econs is "+grade(store[i]['econs']))
        ave = (store[i]['maths'] + store[i]['eng']+ store[i]['science']+store[i]['econs'])/4
        console.log("Your average is "+ave)
        console.log("*************************************************************")
    }
}
data()
