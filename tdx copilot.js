// ==UserScript==
// @name         TDX Copilot
// @namespace    https://it.cornell.edu/
// @version      12
// @description  TDX Copilot
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://tdx.cornell.edu/TDNext/Apps/32/Tickets/TicketDet?TicketID*
// @match        https://tdx.cornell.edu/TDNext/Apps/32/Tickets/Edit?TicketID=*
// @match        https://tdx.cornell.edu/TDNext/Apps/32/Tickets/TicketDet.aspx?TicketID=*
// @match        https://tdx.cornell.edu/TDNext/Home/Desktop/Default.aspx
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/waitForKeyElements.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/cookies.js
// @require      https://raw.githubusercontent.com/guetlich/code/main/support/jquery-3.6.3.min.js
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @grant        GM_addElement
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

/* CSS + HTML payloads */

//onclick="window.location.href = window.location.href;"

//eff ewe
let css=`/* this is a comment to make the code line up in my IDE */
    .cornerIconDiv {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 500px;
        height: 309px;
        cursor: none;
        background-color: burlywood;
        z-index: 100;
        position: absolute;
    }
    .hSpan {
        display: block;
    }
    .btn-holly {
        background-color: DeepPink;
        border-color: FireBrick;
        color: #fff;
    }`;
GM_addStyle(css);

//create our new div
var icon_div = GM_addElement('div',
    { class: 'cornerIconDiv' }
);

var zero_span = GM_addElement(icon_div, 'span', { class: 'hSpan' } );

var spans = [];
const tutes = [
    '<ctrl> + a : Assign to yourself',
    '<ctrl> + h : Go Home',
    '<ctrl> + i : Set In Process',
    '<ctrl> + r:  Refresh',
    '<ctrl> + <shift> + r : Resolve',
    '<ctrl> + s : Save',
    '<ctrl> + t : Turbo Cancel',
    '<ctrl> + u : Update',
]

for (var i=0; i<tutes.length; i++) {
    spans.push(GM_addElement(icon_div, 'span', { class: 'hSpan' } ).innerText = tutes[i]);
}

//add icon to the div
var icon = GM_addElement(zero_span, 'img',
    // LONG LIVE IVBOR
    {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAGNQTFRFj4W+XW97ZX2G7msA7mwIs3xb7XIb73MN8HQA8HUugpCWe5Od8nwC73s69YAJ84Ik9oQc9IQv+4kA9oc59Is++I0s+Y8XxJl4+pAk/JUL+ZU5/qQa/6Uo/6c1/qs+/atO/qxHv0Ao3QAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAABMElEQVQ4y7WS0ZKDIAxFo7SKSguNirqi9v+/chNdFbCzb804QyY5JDdBgNDqGv43pb4EnI2N+hCERqlmddzs6Fvdl5IPv7AGeLvD3gBPKbwWWiszOc8mI7MsUGE4PG8iqY8bZCST7o/LPsUyDmjDPPUfjd4BrRDxJwCo6KJZKQNa5j1iHwETX9TzOM6tzAEsYlSAj9Z1ZdnZnH0MVMwbMHdVVaV3GwAvRUYV+BjLCiBNUJCRzBsdD6gp8fwDXAiIFQhbpGmaRC0CkfaeUD7bgP46psxpOpuL7DLmtihJCUFvSESL0a551YpLMwCZvKyaHmvAdgfofvxYYIYtyAD1R8yDtDarvtOsFIWPKNbX90eaJsyE98s1xK+O5Wfe5i+OLbKdrrh9CPrmF/4SUBRR4Bd3/BoXPComPwAAAABJRU5ErkJggg==',
    }
);

/* generate factoids */

/* where are we, and we are we doing right now? */
//TODO: learn a better way to do this : )
//eventually everything turns into a FSM
//eventually everything becomes EMACS
//eventually every app evolves to send email please shoot me if that happens
//var t = getCookie("copilot");// ? t : "";
var ticketStatus = $('#thTicket_lblStatus').html();

//say my name
if (! getCookie("copilot_name")) {
    //attempt to find out
    var whoami = $('span[title="Me"]').parent().text().trim();
    setCookie("copilot_name", whoami, 2); //sneaky
} 
console.log("*** i think your name is " + getCookie("copilot_name"));

//am i looking at a ticket?
//who is responsible for it?
if (getElementById('divResponsibility')) {
    var qq = 4242; //noop
}

//console.log("**** current status = " + currentStatus);

switch(getCookie("copilot")) {

    case 'turboCancel':
        setCookie("copilot", "editTurboCancel", 1);
        $('button:contains("Edit")').click();
        break;

    case 'editTurboCancel':
        $('select[name="attribute40"]').val('89');
        setCookie("copilot", "toDetail", 1);
        $("#btnSubmit").closest('form').submit();
        break;

    case 'inProcess':
        console.log("in process do something");
        setCookie("copilot", "editInProcess", 1);
        $('button:contains("Edit")').click();
        break;

    case 'editInProcess':
        //we are now on the edit page, and need to in process this
        console.log("edit page in process");
        $('select[name="attribute40"]').val('86');
        //clear the cookie
        setCookie("copilot", "toDetail", 1);
        //lastly submit
        $("#btnSubmit").closest('form').submit();
        break;
    
    case 'resolve':
        setCookie("copilot", "editResolve", 1);
        $('button:contains("Edit")').click();
        break;

    case 'editResolve':
        $('select[name="attribute40"]').val('87');
        setCookie("copilot", "toDetail", 1);
        $("#btnSubmit").closest('form').submit();
        break;

    case 'toDetail':
        setCookie("copilot", "", 0);
        $('button:contains("To Detail")').click();
        break;

    case '':
        //console.log("do nothing");
        break;

    default:
        console.log("!! destroy the cookie !!");
        setCookie("copilot", "", 0);
}



/* remove useless Print button */

//find the NoPrint button, then hide that useless boomer piece of crap
$('button:contains("Print View")').hide();

/* add better buttons */

//TODO: make this an array and instantiate repeat item creation in a loop
//TODO: i want a pony too

// TURBO CANCEL MONKEY-FIGHTER
//turbo cancel & in process should only be an option if the ticket status is new
if (ticketStatus === "New") {
    var thing = document.createElement('li');
    thing.innerHTML = `<button id="turboCancel" type="button" class="btn btn-holly btn-sm" title="TurboCancel">
    <span class="hidden-xs padding-left-xs">Turbo Cancel</span>
    </button>`;
    //$("#btnRefresh").parent().parent().append(thing0);
    $("#btnRefresh").closest('ul').append(thing);
}

if ((ticketStatus === "New") || (ticketStatus === "Resolved")) {
    // in process
    var thing = document.createElement('li');
    thing.innerHTML = `<button id="inProcess" type="button" class="btn btn-holly btn-sm" title="InProcess">
    <span class="hidden-xs padding-left-xs">In Process</span>
    </button>`;
    $("#btnRefresh").closest('ul').append(thing);

}

// assign to me
var thing1 = document.createElement('li');
thing1.innerHTML = `<button id="assignToMe" type="button" class="btn btn-holly btn-sm" title="AssignToMe">
 <span class="hidden-xs padding-left-xs">Assign to Me</span>
 </button>`;
$("#btnRefresh").closest('ul').append(thing1);

// resolve
// resolve should only be an option if the ticket status is In Process
if ((ticketStatus === "In Process") || (ticketStatus === "New")) {
    var thing = document.createElement('li');
    thing.innerHTML = `<button id="resolve" type="button" class="btn btn-holly btn-sm" title="Resolve">
    <span class="hidden-xs padding-left-xs">Resolve</span>
    </button>`;
    $("#btnRefresh").closest('ul').append(thing);
}

//update button
var thing2 = document.createElement('li');
thing2.innerHTML = `<button id="update" type="button" class="btn btn-holly btn-sm" title="Update">
 <span class="hidden-xs padding-left-xs">Update</span>
 </button>`;
$("#btnRefresh").closest('ul').append(thing2);
 
/* functions */

/* key handlers */

// https://www.toptal.com/developers/keycode


// shift down
function key_down(e) {

    //if a match is already found, subsequent case clause values will not be evaluated, even when they will be visited by fall-through.
    switch (e.keyCode) {
        // ctrl + shift => show help overlay
        case 16: // 16 = shift key
        case 17: // 17 = ctrl
            if (e.ctrlKey && e.shiftKey) {
                icon_div.style.display = 'block';
            }
            break;
        case 65: // 65 = 'a'
            if (e.ctrlKey) assign_to_me();
            break;
        case 72: // 72 = 'h'
            if (e.ctrlKey) home();
            break;
        case 73: // 73 = 'i'
            if (e.ctrlKey) in_process();
            break;
        case 82: // 82 = 'r'
            if (e.ctrlKey && e.shiftKey) { resolve(); break; }
            if (e.ctrlKey && !e.shiftKey) { window.location.href = window.location.href; break; }
            break;
        case 83: // 83 = 's'
            if (e.ctrlKey) save();
            break;
        case 84: // 84 = 't'
            if (e.ctrlKey) turbo_cancel();
            break;
        case 85: // 85 = 'u'
            if (e.ctrlKey) update();
            break;
        
        default:
            //console.log("default key down block//");
            var q = 42;

    }

}

// shift up
function key_up(e) {
    //16 = shift key
    if ((e.keyCode == 16) || (e.keyCode == 17)) {
        //console.log(" **** SHIFT UP ****");
        //hide the thing
        icon_div.style.display = 'none';
    }
}

/* Event Handlers */

//turbo cancel
function turbo_cancel(e) {
    console.log("entry turbo cancel");
    setCookie("copilot", "turboCancel", 1);
    //location.reload();
    window.location.href = window.location.href;
}

//assign to me
function assign_to_me(e) {
    __doPostBack('btnTakeTicket','');
    //location.reload();
}

//resolve
function resolve(e) {
    console.log("entry resolve function");
    setCookie("copilot", "resolve", 1);
    //location.reload();
    window.location.href = window.location.href;
}

//in process
function in_process(e) {
    console.log("entry in_process function");
    setCookie("copilot", "inProcess", 1);
    //location.reload();
    window.location.href = window.location.href;
}

//update
function update(e) {
    $("#btnUpdateTicket").click();
}

//save 
function save(e) {
    $("#btnSubmit").click();
}

//home
function home(e) {
    window.location.href = "https://tdx.cornell.edu/TDNext/Home/Desktop/Default.aspx"
}

/* event listeners */

window.addEventListener("keydown", key_down);
window.addEventListener("keyup", key_up);


if (document.getElementById("turboCancel"))
    document.getElementById("turboCancel").addEventListener("click", turbo_cancel);

if (document.getElementById("assignToMe"))
    document.getElementById("assignToMe").addEventListener("click", assign_to_me);

if (document.getElementById("inProcess"))
    document.getElementById("inProcess").addEventListener("click", in_process);

if (document.getElementById("resolve"))
    document.getElementById("resolve").addEventListener("click", resolve);

if (document.getElementById("update"))
    document.getElementById("update").addEventListener("click", update);