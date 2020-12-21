menu_list_array=["Chicken tanddoori pizza",
                 "Veg supreme pizza",
                 "Panner tikka pizza",
                 "Deluxe veggie pizza",
                 "Veg extravaganza pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list_array.sort();
    for(i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ "<li>" + menu_list_array[i] + "</li>";
    }
    htmldata=htmldata+"</ol>";
    console.log(htmldata);
    document.getElementById('display_menu').innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById('add_item').value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>";
    for( i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+"<div class='card'>" + "<img src='images/pizza.png'>" + menu_list_array[i] + '</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById('display_addmenu').innerHTML = htmldata;
}