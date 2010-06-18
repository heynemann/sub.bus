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
        subscribe:function(event, callback, reference) {
            this._debug({'subscribing' : event, callback : callback, 'reference': reference});
            jQuery.sub.getSubscriptions().push({key: event, callback: callback, reference: reference});
        },
        hasSubscription:function(reference) {
            if(!reference){
                throw("The reference argument is required by hasSubscription.");
            }
            subscriptions = jQuery.sub.getSubscriptions();
            
            subs = jQuery.sub.getSubscriptions();
            for (i=0; i<subs.length; i++){
                subscription = subs[i];
                if (subscription.reference === reference){
                    return true;
                }
            }
            return false;
        },
        unsubscribe:function(reference){
            
            if(!reference){
                throw("The reference argument is required by unsubscribe.");
            }
            
            subscriptions = jQuery.sub.getSubscriptions();
            
            subs = jQuery.sub.getSubscriptions();
            for (i=0; i<subs.length; i++){
                subscription = subs[i];
                if (subscription.reference === reference){
                    subs.splice(i,1);
                    return;
                }
            }
            throw("The subscription with reference '" + reference + "' was not found");
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
            if(!this.options.debug) {
                return;
            }
            if (window.console && window.console.log){
                window.console.log('[%s - sub.bus]', new Date(), $obj);
            }
        }
    };

})(jQuery);
