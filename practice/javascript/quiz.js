items = {
    bread:100,
    cookies:80,
    sweet:20,
    garri:50,
    chicken:500,
    fanta:250,
    pizza:2000
 }
 cart = []
 total = 0
 position = 0
 action = ""
 qtys = 0
 function run() {
    action = "add"
    item = prompt("Please enter an item: ")
    if(items[item])
    {
     if (cart.length > 0) {
        for (i = 0; i < cart.length; i++) {
            if (cart[i]['item'] == item) {
                position = i
                action = "update"
                break;
            }
        }
    }
    if (action == "add")
    {
        add(item)
    }else if(action == "update"){
        update(position)
    }
    check = prompt("Do you want to add more items? y/n")
    if (check == 'n') {
        pay()
    } else {
        run()
    }
    }else{
       run()
    }
 }
 
 function add(item){
    data = {
        item: item,
        qty: 1
    }
    cart.push(data)
    // console.log(cart)
 }
 
 function update(position){
    cart[position]['qty']++
    // console.log(cart)
 }
 function display(pay){
    // console.log(cart)
    // delete_me = prompt("Do you want to delete an item ")
    // if (delete_me != "n")
    // {
    //     delete_item(delete_me)
    // }
 
    console.log("item \t qty \t total")
    console.log("-------------------------------------------")
    for (i=0; i < cart.length;i++){
     total = total + (items[cart[i]['item']] * cart[i]['qty'])
     qtys += cart[i]['qty']
        console.log(cart[i]['item'] + "\t " + cart[i]['qty']+" \t " + items[cart[i]['item']] * cart[i]['qty'])
     }
     console.log("-------------------------------------------")
     console.log("Total \t "+ qtys +" \t "+total)
     console.log("Paid: "+pay)
     change = pay - total
     if(change < 1){
        console.log("You are oweing "+change)
     } else{
     console.log("Your change is "+ change)
 }
}
 function pay() {
    subtotal = 0
    for (i = 0; i < cart.length; i++) {
        subtotal = subtotal + (items[cart[i]['item']] * cart[i]['qty'])
    }
    pay = parseInt(prompt("Your total amount is N"+subtotal+ " please add payment: "))
    display(pay)
    if(pay < total){
        alert("Your money is not complete");
    }
 }
 
 function clear(){
    cart = []
    action = ""
    position = 0
 }
 
 
 function delete_item(item){
    for (i=0; i<cart.length;i++){
        if (cart[i]['item'] == item)
        {
            cart.splice(i,1)
            alert("deleted")
            console.log(cart)
        }
    }
 }
 run()