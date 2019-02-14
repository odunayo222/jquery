items = {
    bread: 100,
    cookies: 80,
    sweet: 20,
    garri: 50,
    chicken: 500,
    fanta: 250,
    pizza: 2000
}
displayitems();
cart = []
position = 0
action = ""

function displayitems(){
    i=1
    lines = ""
    for(var item in items)
    {
        lines += "<tr>";
        lines += "<td>" +  i +"</td>";
        lines += "<td>" + item + "</td>";
        lines += "<td>" + items[item] + "</td>";
        lines += "<td><a href='#' class='direct' id='"+item+"' >add</a></td>";
        lines += "</tr>"
        i++
    }
    $('#storeitems').html(lines)
}


$(document).on('submit','#orderform', function(e){
    e.preventDefault();
    action = "add"
    item = $('#basket').val()
    if (items[item]) {
        if (cart.length > 0) {
            for (i = 0; i < cart.length; i++) {
                if (cart[i]['item'] == item) {
                    position = i
                    action = "update"
                    break;
                }
            }
        }
        if (action == "add") {
            add(item)
        } else if (action == "update") {
            update(position)
        }
    }else{
        alert("we don't have this item sorry");
    }
});
 

function add(item) {
    data = {
        item: item,
        qty: 1
    }
    cart.push(data)
    $('#orderform')[0].reset()
    display()
}
function update(position) {
    cart[position]['qty']++
    $('#orderform')[0].reset()
    display()
}
function clear() {
    cart = []
    action = ""
    position = 0
    display()
}

function delete_item(item) {
    for (i = 0; i < cart.length; i++) {
        if (cart[i]['item'] == item) {
            cart.splice(i-1, 1)
            alert("deleted")
            console.log(cart)
        }
    }
    display()
}

function display() {
    rows = "";
    total = 0;
    qtys = 0;
    prices = 0;
    for (i = 0; i < cart.length; i++) {
        total = total + (items[cart[i]['item']] * cart[i]['qty'])
        qtys += cart[i]['qty']
        prices += items[cart[i]['item']]
        rows += "<tr>"
        rows += "<td>"+ (i+1) +"</td>"
        rows += "<td>" + cart[i]['item'] + "</td>"
        rows += "<td>" + cart[i]['qty'] + "</td>"
        rows += "<td>" + items[cart[i]['item']] + "</td>"
        rows += "<td>" + cart[i]['qty'] * items[cart[i]['item']] + "</td>"
        rows += "<td><a href='#' class='delete' id='" + item + "' >Delete</a></td>";
        rows += "</tr>"
    }
    $('#cart').html(rows)
    $('#qtys').html(qtys)
    $('#prices').html(prices) 
    $('#total').html(total)
}

$(document).on('click', '#clear', function (e) {
    e.preventDefault()
    clear();
})

$(document).on('click', '.delete', function (e) {
    e.preventDefault()
    item = $(this).attr('id')
    delete_item(item)
})

$(document).on('click', '.direct', function(e){
    e.preventDefault()
    action = "add"
    item = $(this).attr('id')
    if (items[item]) {
        if (cart.length > 0) {
            for (i = 0; i < cart.length; i++) {
                if (cart[i]['item'] == item) {
                    position = i
                    action = "update"
                    break;
                }
            }
        }
        if (action == "add") {
            add(item)
        } else if (action == "update") {
            update(position)
        }
    }
})