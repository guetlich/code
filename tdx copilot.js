// ==UserScript==
// @name         TDX Copilot
// @namespace    https://it.cornell.edu/
// @version      6
// @description  TDX Copilot
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://tdx.cornell.edu/TDNext/Apps/32/Tickets/TicketDet?TicketID=*
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/waitForKeyElements.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/cookies.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/jquery-3.6.3.min.js
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @grant        GM_addElement
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

/* CSS + HTML payloads */

//eff ewe
let css=`.cornerIconDiv {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    cursor: none;
    background-color: burlywood;
    z-index: 100;
    position: absolute;`;
GM_addStyle(css);

//create our new div
var icon_div = GM_addElement('div',
    { class: 'cornerIconDiv' }
);

//add icon to the div
var icon = GM_addElement(icon_div, 'img',
    // LONG LIVE IVBOR
    {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAGNQTFRFj4W+XW97ZX2G7msA7mwIs3xb7XIb73MN8HQA8HUugpCWe5Od8nwC73s69YAJ84Ik9oQc9IQv+4kA9oc59Is++I0s+Y8XxJl4+pAk/JUL+ZU5/qQa/6Uo/6c1/qs+/atO/qxHv0Ao3QAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAABMElEQVQ4y7WS0ZKDIAxFo7SKSguNirqi9v+/chNdFbCzb804QyY5JDdBgNDqGv43pb4EnI2N+hCERqlmddzs6Fvdl5IPv7AGeLvD3gBPKbwWWiszOc8mI7MsUGE4PG8iqY8bZCST7o/LPsUyDmjDPPUfjd4BrRDxJwCo6KJZKQNa5j1iHwETX9TzOM6tzAEsYlSAj9Z1ZdnZnH0MVMwbMHdVVaV3GwAvRUYV+BjLCiBNUJCRzBsdD6gp8fwDXAiIFQhbpGmaRC0CkfaeUD7bgP46psxpOpuL7DLmtihJCUFvSESL0a551YpLMwCZvKyaHmvAdgfofvxYYIYtyAD1R8yDtDarvtOsFIWPKNbX90eaJsyE98s1xK+O5Wfe5i+OLbKdrrh9CPrmF/4SUBRR4Bd3/BoXPComPwAAAABJRU5ErkJggg==',
    }
);

var icon_i = GM_addElement(icon_div, 'img',
    {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAA9QTFRFAAAAAAAAMDAwoKCg////aH9gHwAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAAQ0lEQVQoz2NgMEYBDAzMqAIGIAUuMOAMUmJsbAIXcIEIIPggJUQKGA8SAZchIoAR6hjxAhdxNoYJoEQuhgBGZKMnBwD7ingdHGtM+AAAAABJRU5ErkJggg==',
    }
);


/* where are we, and we are we doing right now? */
var t = getCookie("copilot") ? t : "";

switch(t) {
    case 'turboCancel':
        console.log("do something");
        break;
    case 'assignMe':
        console.log("something else");
        break;
    case 'inProcess':
        console.log("pie");
        break;
    case 'resolve':
        console.log("more pie");
        break;
    case '':
        console.log("nothing");
        break;
    default:
        setCookie("copilot", "", 0);
}



/* remove useless Print button */

//find the NoPrint div, then the button inside it, then hide that useless thing
//$(".NoPrint").find("button:contains('Print View')").style.display = "none";

/* add better buttons */

//find NoPrint div, then divTabHeader, the the UL in it, then append an LI



// turbo cancel
// if status in New, then allow to kill

// assign to me
// if unassigned to anyone, assign to me

// in process

// resolve

/* functions */

function doIt(e) {

    if (e.shiftKey) {
        let g = e.target.innerText;
        if (g !== undefined) {
            e.preventDefault(); //lol

        }
    }

}

/* key handlers */

// https://www.toptal.com/developers/keycode


// shift down
function key_down(e) {

    //if a match is already found, subsequent case clause values will not be evaluated, even when they will be visited by fall-through.
    switch (e.keyCode) {
        case 16: // 16 = shift key
            console.log(" **** SHIFT DOWN ****");
            //show the thing
            icon_div.style.display = 'block';
            break;
        case 73: // 73 = 'i'
            //in process
            if (e.shiftKey) {
                console.log("shift + i");
            } else {
                console.log("just i");
            }
            break;
        default:
            console.log("asdfasdf");

    }

}

// shift up
function key_up(e) {
    //16 = shift key
    if (e.keyCode == 16) {
        console.log(" **** SHIFT UP ****");
        //hide the thing
        icon_div.style.display = 'none';
    }
}

/* event listeners */

window.addEventListener("keydown", key_down);
window.addEventListener("keyup", key_up);

//window.addEventListener("click", doIt);