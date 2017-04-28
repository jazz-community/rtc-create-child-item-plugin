define([
    "dojo/_base/declare"
], function(declare) {
    return declare(null, {
        constructor: function(label, url) {
            this._label = label;
            this._url = url;
        },

        attach: function() {
            var self = this;
            var backgroundStyle = 'rgba(0, 0, 0, 0) url("' + net.jazz.ajax._contextRoot + self._url + '") no-repeat scroll -96px -96px';

            var observer = new MutationObserver(function(mutations) {
                mutations.filter(function(mutation) {
                    return mutation.target.title === self._label;
                }).forEach(function(mutation) {
                    // instead of selecting again, I think I should be able to just grab the inner node.
                    observer.disconnect();
                    
                    [].filter.call(mutation.target.childNodes, function(node) {
                        return node.nodeName.toUpperCase() === "IMG";
                    }).forEach(function(node) {
                        node.style.background = backgroundStyle;
                    });
                });
            });

            var config = { attributes: true, childList: true, characterData: true, subtree: true };
            observer.observe(document.body, config);
        }
    });
});