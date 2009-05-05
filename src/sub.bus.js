document.subscriptions = []

jQuery.sub = {
    reset:function(){
        document.subscriptions = []
    },
    subscribe:function(event, callback) {
        document.subscriptions.push({key: event, callback: callback})
    },
    publish:function(event, obj){
        for (i=0; i<document.subscriptions.length; i++){
            subs = document.subscriptions[i];
            if (subs.key == event){
                subs.callback(obj);
            }
        }
    },
};
