define([
    // dojo
    "dojo/_base/declare",
    "dojo/on",
    "dojo/query",
    "dojo/dom-construct",
    // library
    "../../library/WorkItem",
    // templating
    "./_AbstractActionWidget",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/CreateChildTemplate.html"
], function(
    declare,
    on,
    query,
    domConstruct,
    WorkItem,
    _AbstractActionWidget,
    _TemplatedMixin,
    HtmlTemplate
) {
    return declare([_AbstractActionWidget, _TemplatedMixin], {
        templateString: HtmlTemplate,

        constructor: function() {
        },

        startup: function() {
            this.test();
            // bind child creation to 'Quick' link
            var self = this;
            var quicklink = query('.quick-create');
            quicklink.on('click', function() {
                var workItem = new WorkItem();
                workItem.createChildWorkItem(self.workItem.idLabel);
            });
        },

        test: function() {
            var properties = this.workItem.workItemSpec.editProps.allValues;
            var workItemType = properties.find(function(x) { return x.attributeName === 'workItemType' });
            var workItems = query('.workitems');

            workItemType.uiItems.forEach(function(x) {
                console.log(x);
                domConstruct.place('<option value="' + x.id + '">'+ x.label +'</option>', workItems[0], 'last');
            });
        }
    });
});
