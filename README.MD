# Create Child Work Item Editor Extension
Work item editor plugin that allows fast and simple creation of child work items. A single click in the work item editor will create a new, empty, work item which has the current work item assigned as it's parent.

From RTC 6.0.6 M3 onward, this feature is now delivered by IBM out of the box (see [Release Notes](https://jazz.net/pub/new-noteworthy/rtc/6.0.6/M3/index.html#5)). As child creation out of the work item editor is now part of the product, **we will no longer actively maintain or improve this plugin**.

## Basic usage
The current implementation supports the simple creation of an empty child work item linked to the current work item. Open a work item and press the button to create a direct child. The newly created work item will be empty except for a link back to the parent.

![Work item editor screenshot](https://github.com/jazz-community/jazz-create-child-item-plugin/blob/master/documentation/work_item_action.png)

## Installation
Deploy just like any other update site:

1. Extract the `com.siemens.bt.jazz.workitemeditor.createchild_updatesite.ini` **file** from the zip file to the `server/conf/ccm/provision_profiles` directory
2. Extract the `com.siemens.bt.jazz.workitemeditor.createchild_updatesite` **folder** to the `server/conf/ccm/sites` directory
3. Restart the server

## Update existing installation
1. Request a server reset in one of the following ways:
    * If the server is currently running, call `https://server-address/ccm/admin/cmd/requestReset`
    * Navigate to `https://localhost:9443/ccm/admin?internaltools=true` so you can see the internal tools (on the left in the side-pane). Click on `Server Reset` and press the `Request Server Reset` button
    * If your server is down, you can delete the ccm `built-on.txt` file. Liberty packed with 6.0.3 puts this file in a subfolder of `server/liberty/servers/clm/workarea/org.eclipse.osgi/**/ccm`. The easiest way to locate the file is using your operating system's search capabilites.
2. Delete previously deployed updatesite folder
3. Follow the file extraction steps from the section above
4. Restart the server

### More Information
For more information on deploying extensions, check out [Ralph Schoon's blog](https://rsjazz.wordpress.com/2014/06/12/is-the-extension-deployed-how-can-i-redeploy/).

## Acquiring an installable

### Download from Github
The current stable release can be downloaded directly from the [Releases page](https://github.com/jazz-community/jazz-create-child-item-plugin/releases).

### Create a source build from the command line
1. Clone this repository to your computer: `git clone https://github.com/jazz-community/rtc-create-child-item-plugin.git`
2. Navigate to the project's root folder: `cd jazz-create-child-item-plugin`
3. Run ant: `ant`(requires [Apache Ant](http://ant.apache.org/))

If the build was successful, there is a file called `CreateChild.zip` in the folder you ran ant from. This file was created from the checked out sources and is immediately deployable to RTC.

### Build using JBE
The supplied build.xml file can be run on the Jazz Build Engine (JBE). However, setting up a JBE based build is not part of this readme.

## Source explanation
The inspirtation for extending the work item editor was taken from [Creating a Linked Defect from a Work Item Editor Toolbar Action](https://jazz.net/library/article/782). It summerizes how to create toolbar actions and links to the related wiki article. The following is a list of files relevant to the functionality of the create child plugin.

```
com.siemens.bt.jazz.workitemeditor.createchild
│   build.xml                               Ant build script
│   plugin.xml                              Plugin configuration
├───META-INF
│       MANIFEST.MF                         Jar metainformation
│
└───resources
    ├───images
    │   └───icons
    │           fallback_icon_child.png     Icon displayed when the correct icon is unavailable on the server
    │
    ├───library                             Library code for working inside the work item editor
    |
    │       ActionButtonIcon.js             Injects child icon into work item editor
    │       ActionNode.js                   Wrapper for a button node in the work item editor
    │       Discovery.js                    OSLC url lookup
    │       HoverViewWrapper.js             Wrapper for using a hover view with custom widgets
    │       WorkItem.js                     Custom work item code
    │
    └───ui
        │   CreateChildAction.js            Entry point for the plugin within the work item editor
        │
        └───widget
            │   _AbstractActionWidget.js    Abstract widget that can be inherited to wrap in a hover view
            │
            ├───css
            │       widget.css              CSS styling for custom widgets
            │
            ├───nls                         Internationalization files (currently unused)
            └───templates                   HTML templates for widgets (current unused)
```

## Contributing
Please use the [Issue Tracker](https://github.com/jazz-community/rtc-create-child-item-plugin/issues) of this repository to report issues or suggest enhancements.

For general contribution guidelines, please refer to [CONTRIBUTING.md](https://github.com/jazz-community/rtc-create-child-item-plugin/blob/master/CONTRIBUTING.md)

## Licensing
Copyright (c) Siemens AG. All rights reserved.<br>
Licensed under the [MIT](https://github.com/jazz-community/jazz-create-child-item-plugin/blob/master/LICENSE) License.

