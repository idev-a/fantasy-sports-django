function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
if(inIframe()) {
    // $('body').toggleClass('d-none');
} else {
    $('nav').toggleClass('d-none');
    $('.lineups-container').toggleClass('container');
    $('.lineups-container').toggleClass('container-iframe');
}