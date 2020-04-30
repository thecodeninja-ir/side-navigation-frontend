function openNav(){
    document.getElementById('sidenavbar').style.width = "250px";
}

function pushContent(){
    document.getElementById('sidenavbar').style.width = "250px";
    document.getElementById('content').style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById('sidenavbar').style.width = "0px";
    document.getElementById('content').style.marginLeft = "0px";
}