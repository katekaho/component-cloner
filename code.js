/*
Clone Master by Kate Miller (github: katekaho)

Allows users to create a clone of component instances under a new master

Usage: Select the existing component instances of a master component and run the plugin
This will create a new master component with the instances you selected attached to it

*/
var master; // The master component to clone
var firstCheck = true; // Tracks first iteration through selected nodes
// Prints the error and exits
function selectionError(errorMsg) {
    console.log(errorMsg);
    figma.closePlugin();
}
function copyInstanceNode(copy, original) {
    copy['backgrounds'] = original['backgrounds'];
    copy['blendMode'] = original['blendMode'];
    copy['clipsContent'] = original['clipsContent'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem cause ID??
    copy['exportSettings'] = original['exportSettings'];
    copy['gridStyleId'] = original['gridStyleId'];
    copy['guides'] = original['guides'];
    // copy['height'] = original['height'];
    copy['isMask'] = original['isMask'];
    copy['layoutGrids'] = original['layoutGrids'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    copy['rotation'] = original['rotation'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    copy['x'] = original['x'];
    copy['y'] = original['y'];
    return;
}
function copyTextNode(copy, original) {
    figma.loadFontAsync(original['fontName']) // load orignal font
        .then(function () { return figma.loadFontAsync(copy['fontName']); }) // load new font
        .then(function () {
        // now we can perform actions on the text
        copy['characters'] = original['characters'];
        copy['fontName'] = original['fontName'];
        copy['fontSize'] = original['fontSize'];
        copy['letterSpacing'] = original['letterSpacing'];
        copy['lineHeight'] = original['lineHeight'];
        copy['paragraphIndent'] = original['paragraphIndent'];
        copy['paragraphSpacing'] = original['paragraphSpacing'];
        copy['textAlignHorizontal'] = original['textAlignHorizontal'];
        copy['textAlignVertical'] = original['textAlignVertical'];
        copy['textAutoResize'] = original['textAutoResize'];
        copy['textCase'] = original['textCase'];
        copy['textDecoration'] = original['textDecoration'];
        copy['textStyleId'] = original['textStyleId'];
    });
    // copy['absoluteTransform'] = original['absoluteTransform'];
    copy['autoRename'] = original['autoRename'];
    copy['blendMode'] = original['blendMode'];
    copy['constraints'] = original['constraints'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    // copy['height'] = original['height'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['parent'] = original['parent'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
    return;
}
function copyRectangleNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    // copy['backgrounds'] = original['backgrounds'];
    copy['blendMode'] = original['blendMode'];
    // copy['bottomLeftRadius'] = original['bottomLeftRadius'];
    // copy['bottomRightRadius'] = original['bottomRightRadius'];
    copy['constraints'] = original['constraints'];
    // copy['cornerRadius'] = original['cornerRadius'];
    // copy['cornerSmoothing'] = original['cornerSmoothing'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    // copy['height'] = original['height'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
    return;
}
function copySliceNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    copy['constraints'] = original['constraints'];
    copy['exportSettings'] = original['exportSettings'];
    // copy['height'] = original['height'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
    return;
}
function copyFrameNode(copy, original) {
}
function copyComponentNode(copy, original) {
}
function copyBooleanOperationNode(copy, original) {
}
function copyVectorNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    copy['blendMode'] = original['blendMode'];
    copy['constraints'] = original['constraints'];
    copy['cornerRadius'] = original['cornerRadius'];
    copy['cornerSmoothing'] = original['cornerSmoothing'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    copy['handleMirroring'] = original['handleMirroring'];
    // copy['height'] = original['height'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['vectorNetwork'] = original['vectorNetwork'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
}
function copyStarNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    copy['blendMode'] = original['blendMode'];
    copy['constraints'] = original['constraints'];
    copy['cornerRadius'] = original['cornerRadius'];
    copy['cornerSmoothing'] = original['cornerSmoothing'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    // copy['height'] = original['height'];
    // copy['innerRadius'] = original['innerRadius'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['pointCount'] = original['pointCount'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
}
function copyLineNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    copy['blendMode'] = original['blendMode'];
    copy['constraints'] = original['constraints'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    // copy['height'] = original['height'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
}
function copyEllipseNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    // copy['arcData'] = original['arcData'];
    copy['blendMode'] = original['blendMode'];
    copy['constraints'] = original['constraints'];
    // copy['cornerRadius'] = original['cornerRadius'];
    // copy['cornerSmoothing'] = original['cornerSmoothing'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    // copy['height'] = original['height'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
}
function copyPolygonNode(copy, original) {
    // copy['absoluteTransform'] = original['absoluteTransform'];
    copy['blendMode'] = original['blendMode'];
    copy['constraints'] = original['constraints'];
    // copy['cornerRadius'] = original['cornerRadius'];
    // copy['cornerSmoothing'] = original['cornerSmoothing'];
    copy['dashPattern'] = original['dashPattern'];
    copy['effectStyleId'] = original['effectStyleId'];
    copy['effects'] = original['effects']; // might be problem
    copy['exportSettings'] = original['exportSettings'];
    copy['fillStyleId'] = original['fillStyleId'];
    copy['fills'] = original['fills'];
    // copy['height'] = original['height'];
    // copy['isMask'] = original['isMask'];
    copy['locked'] = original['locked'];
    copy['name'] = original['name'];
    copy['opacity'] = original['opacity'];
    // copy['relativeTransform'] = original['relativeTransform'];
    // copy['removed'] = original['removed'];
    // copy['rotation'] = original['rotation'];
    copy['strokeAlign'] = original['strokeAlign'];
    copy['strokeCap'] = original['strokeCap'];
    copy['strokeJoin'] = original['strokeJoin'];
    copy['strokeStyleId'] = original['strokeStyleId'];
    copy['strokeWeight'] = original['strokeWeight'];
    copy['strokes'] = original['strokes'];
    // copy['type'] = original['type'];
    copy['visible'] = original['visible'];
    // copy['width'] = original['width'];
    // copy['x'] = original['x'];
    // copy['y'] = original['y'];
}
// If nothing selected, exit
if (figma.currentPage.selection.length < 1) {
    selectionError('Nothing currently selected by user on this page');
}
// Verify user selection of component instances
for (var _i = 0, _a = figma.currentPage.selection; _i < _a.length; _i++) {
    var node = _a[_i];
    // Ensure that the node is of type instance
    if (node.type != 'INSTANCE') {
        selectionError('Selected nodes are not component instances');
    }
    // Ensure that each selected element has the same master
    if (master == null) {
        // Sets the master component on the first loop
        if (firstCheck) {
            master = node.masterComponent;
            firstCheck = false;
        }
        else {
            selectionError('Error: master was not assigned on first iteration');
        }
    }
    else {
        // Check that nodes have the same master
        if (master !== node.masterComponent) {
            selectionError('Selected nodes have different master components');
        }
    }
}
// Now that everything is set, create a new master component
var newMaster = master.clone();
// console.log(newMaster);
var i = 0;
var children = [];
// Create the new child components
for (var _b = 0, _c = figma.currentPage.selection; _b < _c.length; _b++) {
    var node = _c[_b];
    console.log('On node ' + i++);
    // Create another instance of the master (that's how clone works)
    var newChild = node.clone();
    // Set the master of the new instance to the new one
    newChild.masterComponent = newMaster;
    // console.log(node);
    // console.log(node.children);
    copyInstanceNode(newChild, node);
    // Copy elements of cloned instance (text, images, etc) into that new child
    var k = void 0;
    for (k = 0; k < node.children.length; k++) {
        var originalGrandchild = node.children[k];
        var newGrandchild = newChild.children[k];
        switch (originalGrandchild.constructor.name) {
            case 'SliceNode':
                console.log('slice');
                copySliceNode(newGrandchild, originalGrandchild);
            case 'FrameNode':
                console.log('frame');
                copyFrameNode(newGrandchild, originalGrandchild);
            case 'ComponentNode':
                console.log('component');
                copyComponentNode(newGrandchild, originalGrandchild);
            case 'InstanceNode':
                console.log('instance');
                copyInstanceNode(newGrandchild, originalGrandchild);
            case 'BooleanOperationNode':
                console.log('boolean operation');
                copyBooleanOperationNode(newGrandchild, originalGrandchild);
            case 'VectorNode':
                console.log('vector');
                copyBooleanOperationNode(newGrandchild, originalGrandchild);
            case 'StarNode':
                console.log('star');
                copyStarNode(newGrandchild, originalGrandchild);
            case 'LineNode':
                console.log('line');
                console.log(originalGrandchild);
                copyLineNode(newGrandchild, originalGrandchild);
            case 'EllipseNode':
                console.log('ellipse');
                copyEllipseNode(newGrandchild, originalGrandchild);
            case 'PolygonNode':
                console.log('polygon');
                copyPolygonNode(newGrandchild, originalGrandchild);
            case 'RectangleNode':
                console.log('rectangle');
                copyRectangleNode(newGrandchild, originalGrandchild);
                break;
            case 'TextNode':
                console.log('text');
                copyTextNode(newGrandchild, originalGrandchild);
                break;
            default:
                console.log('other type, need to add functionality');
        }
    }
    children.push(newChild);
}
// console.log(children);
figma.currentPage.selection = [newMaster].concat(children);
// console.log(figma.currentPage.selection);
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();
