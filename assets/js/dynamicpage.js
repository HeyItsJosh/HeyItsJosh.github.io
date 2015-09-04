$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#body_container"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("nav.js_dynamicpage").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav.js_dynamicpage  a").removeClass("current");
                        $("nav.js_dynamicpage  a[href="+newHash+"]").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});