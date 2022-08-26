let submit = document.getElementById("submit");
let cart = document.getElementById("cart");
let show_cart = document.getElementById("show_cart");
let duration = document.getElementById("time");
let tot = document.getElementById("total");
let no_cart = document.getElementById("no_cart");
let food = document.getElementById("food_token");
let activity = document.getElementById("acdrop");

window.addEventListener("load", function(){
    document.getElementById('form').reset(); 
    let total;
    let itemsincart;
});

 
let total = 0;
let token = 0;


let activityprice = 1000;
let Annual_Pass_Local = 4500;
let Annual_Pass_Foreign = 15000;
let Fadult = 5000;
let Fchild = 2500;
let Ladult = 1000;
let Lchild = 500;


let Lhalf = 250;
let Fhalf = 500;
let Lfull = 500;
let Ffull = 1000;


function carttable(total, ticket, time, price, activity){
    let table = document.getElementById("out");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `You Have Purchased A ${activity} Ticket <br> For ${ticket} (${time}).\n`;
    cell2.innerHTML = `${price}/=`;

    tot.innerHTML = `Rs.${total}/=`;
    cart.style.visibility = "visible";
}

function annualcarttable(total, ticket, price){
    let table = document.getElementById("out");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `You Have Purchased <br> ${ticket} Ticket.\n`;
    cell2.innerHTML = `${price}/=`;

    tot.innerHTML = `Rs.${total}/=`;
    cart.style.visibility = "visible";
}

let itemsincart = 0;
submit.addEventListener("click",function(addtocart){
    let price = 0;
    itemsincart += 1;
    addtocart.preventDefault();

    let ticket = document.getElementById("ticket").value;
    let time = document.getElementById("time").value;
 
    if(itemsincart>=1){
        no_cart.style.display="none";
    }

    if(food.checked == true){
        token = 500;
    }
    else{
        token = 0;
    }

    //Calculate Price And Add To Cart
    if(ticket==="Local-Child"){
        if(time === "12 hours"){
            price = Lchild + activityprice + Lhalf + token;
            console.log(price);
            total += price;
            carttable(total, ticket, time, price);
            cart.style.visibility = "visible";
        }
        else if(time === "24 hours"){
            price = Lchild + activityprice + Lfull + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
        else{
            price = Lchild + activityprice + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
    }
    else if(ticket==="Local-Adult"){
        if(time === "12 hours"){
            price = Ladult + activityprice + Lhalf + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
        else if(time === "24 hours"){
            price = Ladult + activityprice + Lfull + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
        else{
            price += Ladult + activityprice + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
    }
    else if(ticket==="Foregin-Child"){
        if(time === "12 hours"){
            price = Fchild + activityprice + Fhalf + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
        else if(time === "24 hours"){
            price = Fchild + activityprice + Ffull + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
        else{
            price += Fchild + activityprice + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
            cart.style.visibility = "visible";
        }
    }
    else if(ticket==="Foregin-Adult"){
        if(time === "12 hours"){
            price = Fadult + activityprice + Fhalf + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
        }
        else if(time === "24 hours"){
            price = Fadult + activityprice + Ffull + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
        }
        else{
            price += Fadult + activityprice + token;
            total += price;
            carttable(total, ticket, time, price, activity.value);
        }
    }
    else if(ticket==="Annual-Foreign"){
        price += Annual_Pass_Foreign;
        total += price;
        annualcarttable(total, ticket, price);
    }
    else if(ticket==="Annual-Local"){
        price += Annual_Pass_Local;
        total += price;
        annualcarttable(total, ticket, price);
    }
    else{
        alert("Pls Select A Vaild Option");
    }
});

//Disable Duration And Food Token
let ticket = document.getElementById("ticket");
ticket.addEventListener("change",function(){
    if(ticket.value === "Annual-Foreign"){
        duration.disabled = true;
    }
    else if(ticket.value === "Annual-Local"){
        duration.disabled = true;
    }
    else{
        duration.disabled = false;
    }
    //Disabling Food Token
    if(ticket.value === "Annual-Foreign" || ticket.value == "Annual-Local"){
        food_token.disabled = true;
    }
    else{
        food_token.disabled = false;
    }
});

//Remove item from cart 
remove.addEventListener("click", (form)=>{
    document.getElementById("no_cart").style.display="block";
    total = 0;
    itemsincart = 0;
    tot.innerHTML = `Rs.0/=`;
    out.innerHTML = '';
});

//close cart
let close = document.getElementById("close");
close.addEventListener('click', (form)=>{
    cart.style.visibility="hidden";

});

//show cart
show_cart.addEventListener('click', function(showcart){
    showcart.preventDefault();
    cart.style.visibility="visible";
    if(itemsincart>=1){
        no_cart.style.display="none";
    }
});

//checkout
checkout.addEventListener('click',function(){
    if(total>0){
        alert(`Order Confirmed! Thank You For Purchasing. \r\nYour Total Is Rs.${total}/=`);
        tot.innerHTML = `Rs.0/=`;
        cart.style.visibility="hidden";
        document.getElementById("no_cart").style.display="block";
        total = 0;
        itemsincart = 0;
        out.innerHTML = '';
        location.reload();
    }
    else{
        alert("Please Add Item(s) To Cart To Proceed");
        cart.style.visibility="hidden";
    }
});

let fadd = document.getElementById('fav_add');
fadd.addEventListener('click', function(addtofavourite){
    addtofavourite.preventDefault();
    //console.log(fav_tick,fav_acti);
    let store_acc = localStorage.setItem(`activity`,activity.value);
    let store_type = localStorage.setItem(`ticket`, ticket.value);
});