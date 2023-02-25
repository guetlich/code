// ==UserScript==
// @name         SFInfo Copy Buttons
// @namespace    https://it.cornell.edu/
// @version      1
// @description  SFInfo Copy Buttons
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://sfinfo.cit.cornell.edu/vserver.php?*
// @require      https://raw.githubusercontent.com/guetlich/code/main/sfinfo_copy_buttons.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/waitForKeyElements.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/cookies.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/jquery-3.6.3.min.js
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @run-at       document-end
// ==/UserScript==

console.log("********* FART3 ************");

/*

[*]

<a href='' onclick=

*/

function copy_this(e) {
    // or e.currentTarget.innerHtml
    // or this.innerHtml
    var f = this.innerHtml;
    console.log(" FART " + this.type );

    if (f !== null && this.type === "td") {
        GM_setClipboard(f);
    }
}

window.addEventListener("dblclick", copy_this, false);
/*
GM_setClipboard

Sets data to system clipboard.

GM_setClipboard(data, type)

    data: string

    The data to be copied to system clipboard.
    type: string = 'text/plain'

    The MIME type of data to copy.
*/

//let element1 = GM_addElement(tagName, attributes);
//let element2 = GM_addElement(parentNode, tagName, attributes);
/*
GM_addElement(
    document.getElementsByTagName('div')[0],
    'img', 
    { 
        src: 'https://example.com/image.png' 
    }
    );
*/