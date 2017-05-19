define([
    // dojo
    "dojo/_base/declare",
    // templating
    "./_AbstractActionWidget",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/CreateChildTemplate.html"
], function(
    declare,
    _AbstractActionWidget,
    _TemplatedMixin,
    HtmlTemplate
) {
    return declare([_AbstractActionWidget, _TemplatedMixin], {
        templateString: HtmlTemplate,

        constructor: function() {

        }
    });
});
