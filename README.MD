# Create Child Work Item Editor Extension
Work item editor plugin that allows fast and simple creation of child items. A single click will create a new, empty, work item which has the current work item assigned as it's parent.

## Basic usage
The current implementation supports the simple creation of an empty child work item of the current work item. Open a work item and press the button to create a direct child. The newly created work item will be empty except for a link back to the parent.

![alt tag](https://github.com/SBI-/jazz-create-child-item-plugin/blob/master/documentation/work_item_action.png)

## Installation
Install just like any other update site:

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
For more information about deploying extensions, check out [Ralph Schoon's blog](https://rsjazz.wordpress.com/2014/06/12/is-the-extension-deployed-how-can-i-redeploy/)

## Acquiring an installable

### Download from Github
(link to current release)

### Create a source build from the command line
1. Clone this repository to your computer: `$ git clone git@github.com:SBI-/jazz-create-child-item-plugin.git`
2. Navigate to the project's root folder: `$ cd jazz-create-child-item-plugin`
3. Run ant `$ ant`

If the build was successful, there is a file called `CreateChild.zip` in the folder you ran ant from. This file was created from the checked out sources and is deployable.

### Use your JBE
The supplied build.xml file can be run on the Jazz Build Engine. How to set up a jazz build is not part of this readme.

## Source explanation
