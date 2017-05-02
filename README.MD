# Create Child Item

Work item editor plugin that allows fast and simple creation of child items. A single click will create a new, empty, work item which has the current work item assigned as it's parent.

## Basic usage

The current implementation supports the simple creation of an empty child work item of the current work item. Open a work item and press the button to create a direct child. The newly created work item will be empty except for a link back to the parent.

![alt tag](https://github.com/SBI-/jazz-create-child-item-plugin/blob/master/documentation/work_item_action.png)

## Installation

(Explanation of where to copy files)

### Download from Github
(link to current release)

### Create a source build from the command line
* Clone this repository to your computer: `$ git clone git@github.com:SBI-/jazz-create-child-item-plugin.git`
* Navigate to the project's root folder: `$ cd jazz-create-child-item-plugin`
* Run ant `$ ant`

If the build was successful, there will be a file called `CreateChild.zip` in the folder you ran ant from. This file was created from the checked out sources and is deployable.

### Use your JBE
The supplied build.xml file can be run on the Jazz Build Engine. How to set up a jazz build is not part of this readme.

## Source explanation
