// ==UserScript==
// @name         SFInfo shift + copy
// @namespace    https://it.cornell.edu/
// @version      18
// @description  shift + click to copy text anywhere in SFInfo
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://sfinfo.cit.cornell.edu/*
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @grant        GM_setClipboard
// @grant        GM_addElement
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

/* CSS + HTML payloads */

let css=`.cornerIcon { 
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;`;
GM_addStyle(css);

//create our new div
var icon_div = GM_addElement('div',
    { class: 'cornerIcon' }
);

//add icon to the div
var icon = GM_addElement(icon_div, 'img',
    // base64 encoding is pretty neat-o
    {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADzUlEQVRYw7WX/W9TVRjHP+fe9m5td1vHWvZWEPcuzBcYOkIWNU5GmHa+BOdrDJgtJvwy4k+GGPUP0ASdSoJmCj+QyBYoiSb4C9FMFNCBvGy6mrEN2HC8jdJ27Tra6w/bGhu29nZtv8nJTe45z3O+5znP8z3nQGLcBxwDtAXabWAbWcbu9z74SDt5bkA7PeCJtd6+c9orO9/XJNkQBpzpTGCY+1YBnwDVgJjvNJnNq5pdLSiKwsjwRdw93VRW19DsaqFx4+OMj7Yaew8fODMXjXn4gC7g81QIfPXShkeeKFpmi3VcGLlCc1sHqmoF4HD3QV50PYfb7eZqXR0PVVdQsfph/jh21N5aV2W35CoAXBy/wanBoc5bwemTwO/JCEhz34aVywuwWcxYzSZueP1cCgkannwKTdPQNI2KqmqOHHFzvr8fVbWSoxhprF9LfZOLwcvjGGQZm8VMgTUPu00FWK8nAvMEJCFmIz909Rp5tfV8+XUXFosFIQRCCJ5teZ6tb25j9569qFYrQgjWVJWzq2MHeY9txn28j6imASBmd1FKhUAME5Nenn6mieKS0viBkkSp04mqqnH/HfYCnOVVjAdm8AdDS07CGB4octC1dw9bX30dSYikDgLBIBdO9FJbnI/VbOK2L5gegZKCfBSvj5+/+Uy3k0pJwrluTVplCEDfPyPUrCjGblPnEynriCMQCoe5G4kkNLgbidI/coXL12/Fku7/8AdDTHj9AB8CHUAQ2A6cTkqgMN9GjtGYkIBn7F+2NPyNq8GQYJQMyA4iOFa9FsZmET95A1orcDQhAadjGblJCEz6/DSuN7CyUNId5t+6V6ttuzzf//rnzNvA/kXLsM8zjDcwldShjuKIQ3WZiYOdD8pNG3P2ATsS6kC2UOxQ2P9xDS9vtnwxd+4sXIaZxhuNgu9+uI49f3aqFzYV0P1j4F3ACrRnPQKf7lRwMIaYHEVMjrI8PEZPO8zfJdKKQN9ghCkd6qsYZ5NGlqGuUsKvROfuNGkSOOOJ4g1o+kVHhtpCObEUp4I2lzF1o2CUm5ki0NkTJjidms07mxJE4NHy+8lV9K9qywYDMxH9k8sSmE1wZzECltyclFZTXiqhpTBeACIUzVwOrNse4uxwajYTB4xx6pdeFXybu7QkHM8QAb06EMsBGepWiMxtQSZ1IKppWlJZ1gDf1HRWdOCXS9duxj1MFoI/OM2kL5AVHWg/dOLsPU+zRVAKiikdHfBq9xLwAC6dfvadGoi8VVYiUVa6hMP0ToS/Zqvg/FJzrwg4vsiTXW8bAtYC/AcFV0x/ZZY+ZQAAAABJRU5ErkJggg==',
    }
);

/* functions */

function copy_this(e) {
    
    if (e.shiftKey) { 
        let g = e.target.innerText;
        if (g !== undefined)
            e.preventDefault(); //lol
            window.getSelection().empty(); //double lol
            GM_setClipboard(g.trim(), 'text/plain');
    }
}

/* key handlers */

// shift down
function key_down(e) {
    // 16 = shift key
    if (e.keyCode == 16) {
        //console.log(" **** SHIFT DOWN ****");
        //show the thing
        icon_div.style.display = 'block'; //???
    }
}

// shift up
function key_up(e) {
    //16 = shift key
    if (e.keyCode == 16) {
        //console.log(" **** SHIFT UP ****");
        //hide the thing
        icon_div.style.display = 'none';
    }
}

/* event listeners */

window.addEventListener("keydown", key_down);
window.addEventListener("keyup", key_up);

window.addEventListener("click", copy_this);