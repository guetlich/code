// ==UserScript==
// @name         SFInfo Linkages
// @namespace    https://it.cornell.edu/
// @version      17
// @description  Add context-based clickable linkages to SFInfo
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://sfinfo.cit.cornell.edu/*
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @grant        GM_addElement
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

let css=`/* this is a comment to make the code line up in my IDE */
    .cornerIconDiv {
        //in another times forgotten space
        //width:207px;
        //margin:37px;
        //float:right;
        //top:-44px;
        display: none;
        top: 50%;
        right: 0;
        width: 207px;
        height: 335px;
        z-index: auto;
        position: absolute;
    }
    .hSpan {
        display: block;
    }`;
GM_addStyle(css);

var icon_div = GM_addElement('div',
    { /* comment */
      class: 'cornerIconDiv', 
      id: 'aws',
    });



//create a span
var icon_span = GM_addElement(icon_div, 'span', { class: 'hSpan' } );

//icon_span.append("<a href='https://cornell-sso.awsapps.com/start'>");
//$('#aws').click(function() {})
var icon = GM_addElement(icon_span, 'img',
    // LONG LIVE IVBOR
    {
        src: 'data:image/png;base64,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',
                                    
    }
);

icon.addEventListener("click", () => { 
    document.location = 'https://cornell-sso.awsapps.com/start';
});

//icon_span.append("</a>");
//var a = icon.innerHTML();
//icon.innerHTML("<a href='https://cornell-sso.awsapps.com/start'>" + a + "</a>");


if (/Parent\ Entity.*?Amazon/i.test(document.body.innerHTML)) {
    icon_div.style.display = 'block';
}