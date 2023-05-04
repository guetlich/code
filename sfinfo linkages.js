// ==UserScript==
// @name         SFInfo Linkages
// @namespace    https://it.cornell.edu/
// @version      20
// @description  Add context-based clickable linkages to SFInfo
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://sfinfo.cit.cornell.edu/*
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_openInTab
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

var azure_div = GM_addElement('div',
    { /* comment */
      class: 'cornerIconDiv', 
      id: 'azure',
    });


var aws_div = GM_addElement('div',
    { /* comment */
      class: 'cornerIconDiv', 
      id: 'aws',
    });



//create a span
var aws_span = GM_addElement(aws_div, 'span', { class: 'hSpan' } );

var azure_span = GM_addElement(azure_div, 'span', { class: 'hSpan' } );

var aws_icon = GM_addElement(aws_span, 'img',
    // LONG LIVE IVBOR
    {
        src: 'data:image/png;base64,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',
                                    
    }
);

var azure_icon = GM_addElement(azure_span, 'img',
    // LONG LIVE IVBOR
    {
        src: 'data:image/png;base64,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',
                                    
    }
);


aws_icon.addEventListener("click", () => { 
    GM_openInTab('https://cornell-sso.awsapps.com/start');
});

azure_icon.addEventListener("click", () => { 
    GM_openInTab('http://portal.azure.com/');
});

if (/Parent\ Entity.*?Amazon/i.test(document.body.innerHTML)) {
    aws_div.style.display = 'block';
}

if (/Parent\ Entity.*?Azure/i.test(document.body.innerHTML)) {
    azure_div.style.display = 'block';
}