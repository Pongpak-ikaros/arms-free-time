$(document).ready(function(){
    if($('#page_name').length){
        if(sessionStorage.getItem('page_name') != null){
            setPageName(sessionStorage.getItem('page_name'));
        }
        var page = $('#page_name').attr('name');        
        if($.trim(page) < 1){
            changePage('main/login');
        } else {
            if(page != "main/login"){
                changePage("main/panel");
            } else {
                changePage(page);
            }
        }
        console.log(page);
    }        
});

function changePage(page){
    $('#root').load('../template/'+page+'.html',function(e){
        setPageTitle();    
        setPageName(page);
        saveStorage(page); 
    });
   
}
function setPageName(page){
    $('#page_name').attr('name',page);
}

function setPageTitle(){
    var title = $('#page_title').attr('name');
    document.title = title;
}
function saveStorage(page){
    sessionStorage.setItem('page_name',page);    
}

function sideBarControll(){
    document.getElementsByClassName('sidebar')[0].classList.toggle('collapsed');
}

function collapseMenu(menu){
    changePage('main/' + $(menu).attr('name'));
    console.log($(menu).attr('name'));
}