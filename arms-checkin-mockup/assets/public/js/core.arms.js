$(document).ready(function(){

    if($('#page_name').length){
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
    setPage(page);
}

function setPage(page){
    $('#page_name').attr('name',page);
}