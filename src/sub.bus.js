(function($){

    $(document).data("subs", []);

    $.sub = {
        options : { debug : false },
        reset:function(){
            this._debug('resetting');
            $(document).data("subs", []);
        },
        getSubscriptions:function(){
            subscriptions = $(document).data("subs");
            this._debug({subscriptions:subscriptions});
            return subscriptions;
        },
        subscribe:function(event, callback) {
            this._debug({'subscribing' : event, callback : callback});
            jQuery.sub.getSubscriptions().push({key: event, callback: callback})
        },
        publish:function(event, obj){
            this._debug({'publishing' : event, message : obj});
            subs = jQuery.sub.getSubscriptions();
            for (i=0; i<subs.length; i++){
                subscription = subs[i];
                if (subscription.key == event){
                    subscription.callback(obj);
                }
            }
        },
        enableDebugger : function(){
            this.options.debug = true;
            this._debug('DEBUGGING ENABLED');
        },
        disableDebugger : function(){
            this._debug('DISABLING DEBUGGER');
            this.options.debug = false;
        },
        _debug : function($obj){
            if(!this.options.debug) {return;}
            if (window.console && window.console.log){
                window.console.log('[%s - sub.bus]',new Date(), $obj)
            }
        }
    };

})(jQuery);
