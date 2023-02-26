// ==UserScript==
// @name         duo trust this browser
// @namespace    https://it.cornell.edu
// @version      5
// @description  Click another stupid no-trust button
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://api-68fd2842.duosecurity.com/frame/v4/auth/prompt?*
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at       document-idle
// ==/UserScript==

/*
waitForKeyElements('button[id="trust-browser-button"]', doNext);

function doNext() {
     $('button[id="trust-browser-button"]').click();
}
*/

waitForKeyElements('button[id="trust-browser-button"]', doNext);

function doNext(e) {
     e.click();
}

