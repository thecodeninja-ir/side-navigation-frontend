function openNav(type){
    if(type == 'pushcontnet'){
        document.getElementById('sidenavabar').style.width = "250px";
        document.getElementById('content').style.marginLeft = '250px';
    }else{
        document.getElementById('sidenavabar').style.width = "250px";
    }
}

function closeNave(){
    document.getElementById('sidenavabar').style.width = "0px";
    document.getElementById('content').style.marginLeft = '0px';
}