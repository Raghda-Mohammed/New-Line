var menuItem = document.getElementById("menu").getElementsByTagName("li");
var headline = document.getElementById("text");
var btn = document.getElementById("zer");
var myMenu = document.getElementById("menu");
var counter = 1;

// for (i = 0; i < menuItem. length; i++){
//     menuItem[i].addEventlistener("click", selectItem);
// }

myMenu.addEventListener("click", selectItem)

function selectItem(n){
    headline.innerHTML = n.target.innerHTML;
    for (i = 0; i < menuItem. length; i++){
        menuItem[i].classList.remove("selected");
    }
    n.target.classList.add("selected");
}

btn.addEventListener("click", newItem);

function newItem(){
    myMenu.innerHTML += "<li>new line " + counter + "</li>";
    counter++;
}
