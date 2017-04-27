define([
        "dojo/_base/declare",
        "../library/ActionNode",
		"../library/WorkItem",
], function(declare, ActionNode, WorkItem) {
	var cssSelector = "img.button-img";
	var backgroundUrl = "/service/com.ibm.team.rtc.common.internal.service.web.sprite.ISpriteImageService/img/bundle?id=com.ibm.team.workitem.common&etag=b8b09f70d69bbc3fef0753f03eb21ae9"

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
			// extract this functionality into a separate class
			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					if (mutation.target.title === nodeLabel) {
						observer.disconnect();
						[].forEach.call(document.querySelectorAll('[alt="' + nodeLabel + '"]'), function(node) {
							node.style.background = 'rgba(0, 0, 0, 0) url("' + net.jazz.ajax._contextRoot + backgroundUrl + '") no-repeat scroll -96px -96px';
						});
					}
				});
			});

			var config = { attributes: true, childList: true, characterData: true, subtree: true };
			observer.observe(document.body, config);


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
