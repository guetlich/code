// ==UserScript==
// @name           TDX click "more" button
// @namespace      https://it.cornell.edu
// @version        34
// @description    TDX click "more" button for me b/c it shouldn't exist like AT ALL
// @author         Holly Klimowicz <hek52@cornell.edu>
// @match          https://tdx.cornell.edu/TDNext/Apps/32/Tickets/TicketDet?TicketID=*
// @require        https://raw.githubusercontent.com/guetlich/code/main/support/jquery-3.6.3.min.js
// @require        https://raw.githubusercontent.com/guetlich/code/main/support/waitForKeyElements.js
// @icon           data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @run-at         document-start
// ==/UserScript==


waitForKeyElements('div[class="moreToggle"]', doIt);


function doIt(e) {

    //there should only be one of these
    let elements = document.getElementsByClassName('moreToggle');
    //console.log("**** LENGTH " + elements[0].children.length);
    let kiddies = elements[0].children[1].children; //sloppy AND ugly BUT it works so there

    for (let i = 0; i < kiddies.length; i++) {

        if ((kiddies[i].tagName === 'BUTTON') && (kiddies[i].innerText.trim() === 'More')) {
            //console.log("**** YUP ****" + kiddies[i].innerText);
            kiddies[i].click();
            break;
        }
    }
}