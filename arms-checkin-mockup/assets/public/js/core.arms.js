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
    $('#root').load('../template/'+page+'.html',function(e){
        setPageTitle();    
    });
    setPageName(page);
    saveStorage(page);  
}

function setPageName(page){
    $('#page_name').attr('name',page);
}

function setPageTitle(){
    console.log("TEST");
    var title = $('#page_title').attr('name');
    document.title = title;
}
function saveStorage(page){
    sessionStorage.setItem('page_name',page);    
}