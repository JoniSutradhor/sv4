$('window').scroll( function () {
    if(($('document').scrollTop)>120){
        $('try').addClass('shrink');
    }else{
        $('try').removeClass('shrink');
    }
});