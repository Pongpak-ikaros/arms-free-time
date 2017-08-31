$(document).ready(function(){
    if($('#page_name').length){
        if(sessionStorage.getItem('page_name') != null){
            setPageName(sessionStorage.getItem('page_name'));
        }
        var page = $('#page_name').attr('name');        
        if($.trim(page) < 1){
            changePage('main/checkin');
        } else {
            changePage(page);
        }
    }  
});

function changePage(page){
    $('#root').load('../template/'+page+'.html');
    setPageName(page);
    saveStorage(page);    
}

function setPageName(page){
    $('#page_name').attr('name',page);
}

function saveStorage(page){
    sessionStorage.setItem('page_name',page);    
}