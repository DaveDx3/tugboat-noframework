define(function() {
    var EventHandler = function() {
        this._listeners = {};
    };

    EventHandler.prototype = {
        addListener : function(name, triggerFunc) {
            if (this._listeners[name]) {
                this._listeners[name].eventFunc.push(triggerFunc);
            } else {
                this._listeners[name] = {
                    "eventFunc" : new Array(triggerFunc)
                };
            }
        },
        removeListener : function(name) {
            delete this._listeners[name];
        },
        dispatchEvent : function(event, params) {
            if (this._listeners[event]) {
                for ( var i = 0 in this._listeners[event].eventFunc) {
                    if (!params)
                        params = [ "" ];
                    this._listeners[event].eventFunc[i].apply(this, params);
                }
            }
        }
    };

    return EventHandler;
});
