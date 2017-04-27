define([
        "dojo/_base/declare",
        "dojo/json",
        "../library/Discovery"
], function(declare, json, Discovery) {

	return declare(null, {

        constructor: function() {
            this.discovery = new Discovery();
        },

        createChildWorkItem: function(parentId) {
            var data = {
                "dc:type": "task",
                "rtc_cm:com.ibm.team.workitem.linktype.parentworkitem.parent":
                {
                    "rdf:resource" : this.discovery.workitems() + parentId
                }
            };

            var dataString = json.stringify(data);

            jazz.client.xhrPost({
                url: this.discovery.drafts(),
                postData: dataString,
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                }
            }).then(function(result){
                var resultData = json.parse(result);
                window.location = resultData["rdf:resource"];
            });
        }
	});
});
