## Description

"Redactor is powerful, flexible and easy to use tool, that allows you to provide great service to your clients without spending expensive time on complex customization. Most features work out of the box and are customizable with literally a line of code." –http://imperavi.com/redactor/

Pat-redactor makes it easy to use the Redactor wysiwyg editor in a prototype or production website, without the need for programming JavaScript.

## Documentation

Property | Value | Default | Type | Description
---------|-------|---------|------|------------
toolbar-type | `standard`, `fixed`, `air` | `standard` | Mutually exclusive | Toolbars may either float (air) when you make a text selection, be position statically above the editable content field (standard) or snap to the top of the viewport or a scrollable panel once it reaches the edge of it.
toolbar | CSS selector | - | CSS selector | CSS selector of the element where in which the toolbar should be injected as a first child. This is convenient in cases your design doesn't allow the toolbar and the editable region to live in the same part of the DOM tree.
buttons | `html`, `formatting`, `bold`, `italic`, `unorderedlist`, `orderedlist`, `image`, `video`, `link`, `horizontalrule`, `table` | `formatting`, `bold`, `italic`, `unorderedlist`, `orderedlist`, `image`, `video`, `link`, `horizontalrule` | Comma separated multi value
