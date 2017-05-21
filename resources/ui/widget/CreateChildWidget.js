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
            console.log(this.workItem);
            this.workitemTest();
            this.linkTypeTest();

            // bind child creation to 'Quick' link
            var self = this;
            var quicklink = query('.quick-create');
            quicklink.on('click', function() {
                var workItem = new WorkItem();
                workItem.createChildWorkItem(self.workItem.idLabel);
            });
        },

        workitemTest: function() {
            var properties = this.workItem.workItemSpec.editProps.allValues;
            var workItemType = properties.find(function(x) { return x.attributeName === 'workItemType' });
            var workItemNode = query('.workitems')[0];

            workItemType.uiItems.map(function(x) {
                domConstruct.place('<option value="' + x.id + '">'+ x.label +'</option>', workItemNode, 'last');
            });
        },

        linkTypeTest: function () {
            var linktypes = this.workItem.workItemSpec.editableLinkTypes;
            var linkNode = query('.linktypes')[0];

            linktypes.filter(function(linkType) {
                return linkType.isUserWriteable && linkType.isUserDeleteable;
            }).map(function(linkType) {
                domConstruct.place('<option>' + linkType.displayName + '</option>', linkNode, 'last');
            });
        }
    });
});
