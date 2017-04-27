define([
        "dojo/_base/declare",
        "../library/ActionNode",
		"../library/WorkItem"
], function(declare, ActionNode, WorkItem) {
	var cssSelector = "img.button-img";

	return declare("com.siemens.bt.jazz.workitemeditor.createchild.ui.CreateChildAction", 
			com.ibm.team.workitem.web.ui2.internal.action.AbstractAction, {

		//	summary:
		//		Default constructor called when the WorkItemEditor is instantiated.
		//		For in-depth information on the creation procedure, see
		//		WorkItemEditorHeader.js, where all actions are created.
		//
		//	params: {actionSpec, workingCopy}
		//		actionSpec corresponds to the action values defined in plugin.xml.
		//		workingCopy is a reference to the current work item being edited:
		//		{
		//			actionSpec: {
		//				action,
		//				iconContext,
		//				iconUri,
		//				id,
		//				label,
		//				parameter
		//			},
		//			workingCopy: {}
		//		}
		constructor: function(params) {
			var nodeLabel = params.actionSpec.label;
			this._buttonNode = new ActionNode(cssSelector, nodeLabel);
		},
		
		isEnabled: function(params) {
			var workingCopy = params.workingCopy || params;
			return !workingCopy.isChanged() && !workingCopy.isNewWorkItem();
		},
		
		//	summary:
		//		Is run when the action button in the WorkItemEditor view is clicked.
		//	params: {actionSpec, workingCopy}
		//		Same as the params passed to the constructor.
		run: function(params) {
			var workItem = new WorkItem();
			workItem.createChildWorkItem(params.workingCopy.idLabel);
		}
	});
});
