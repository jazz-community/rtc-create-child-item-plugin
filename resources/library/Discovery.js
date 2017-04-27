define([
        "dojo/_base/declare",
], function(declare) {
    return declare(null, {

        // These aren't really discovery functions, but parsing a whole lot of xml every
        // time seems even more ridiculous, especially in javascript.
        contexts: function() {
            return this.oslc() + "contexts/"
        },

        currentContext: function() {
            return this.contexts() + jazz.app.context.get().itemId;
        },

        drafts: function() {
            return this.currentContext() + "/drafts/workitems/";
        },

        oslc: function() {
            return net.jazz.ajax._contextRoot + "/oslc/";
        },

        workitems: function() {
            return this.oslc() + "workitems/";
        }

    });
});
