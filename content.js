var elements = document.querySelectorAll(':not(script):not(style)');
for (var i = elements.length - 1; i >= 0; i--) {
    var current = elements[i];
    for (var j = 0; j < current.childNodes.length; j++) {
        var node = current.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[b]/gi, '🅱');
            if (replacedText !== text) {
                current.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }   
}