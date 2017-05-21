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
            this.bindWorkItemTypes();
            this.bindLinkTypes();

            // bind child creation to 'Quick' link
            var self = this;
            query('.quick-create').on('click', function() {
                var workItem = new WorkItem();
                workItem.createChildWorkItem(self.workItem.idLabel);
            });

            // bind check box status to links
            query('.set-selection > a').on('click', function(e) {
                self._setCheckBoxStatus(status = e.target.getAttribute('value'));
            });
        },

        _setCheckBoxStatus: function(status) {
            query('input[type="checkbox"]').map(function(checkbox) {
                checkbox.checked = status === 'true';
            });
        },

        bindWorkItemTypes: function() {
            var properties = this.workItem.workItemSpec.editProps.allValues;
            var workItemType = properties.find(function(x) { return x.attributeName === 'workItemType' });
            var workItemNode = query('.workitems')[0];

            workItemType.uiItems.map(function(type) {
                var node = '<option value="' + type.id + '">'+ type.label +'</option>';
                domConstruct.place(node, workItemNode, 'last');
            });
        },

        bindLinkTypes: function () {
            var linktypes = this.workItem.workItemSpec.editableLinkTypes;
            var linkNode = query('.linktypes')[0];

            linktypes.filter(function(linkType) {
                return linkType.isUserWriteable && linkType.isUserDeleteable;
            }).map(function(linkType) {
                var node = '<option linkid="' + linkType.id + '">' + linkType.displayName + '</option>';
                domConstruct.place(node, linkNode, 'last');
            });
        }
    });
});
