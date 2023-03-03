// ==UserScript==
// @name         SFInfo Colour Barf
// @namespace    https://it.cornell.edu/
// @version      2
// @description  Make SFInfo look like a rainbow threw up on it
// @author       Holly Klimowicz <hek52@cornell.edu>
// @match        https://sfinfo.cit.cornell.edu/*
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

//waitforkeyelements requires jqeury btw

let css=`th, td {
    padding: 2px;}`
  GM_addStyle(css);
  
  
  var tds = document.getElementsByTagName("td");
  
  //only interested in like the first 10 - 20
  
  for (var i=0; i<100; i++) {
  
      if (tds[i].innerText === "FQDN:") tds[i].bgColor = "Tomato";
      if (tds[i].innerText === "ServInfo Name:") tds[i].bgColor = "orange";
      if (tds[i].innerText === "OS:") tds[i].bgColor = "yellow";
      if (tds[i].innerText === "Build Date:") tds[i].bgColor = "ForestGreen";
      if (tds[i].innerText === "Decommission Date:") tds[i].bgColor = "CornflowerBlue";
      if (tds[i].innerText === "Service Type:") tds[i].bgColor = "Plum";
      if (tds[i].innerText === "Billing Delay (Hosting Only):") tds[i].bgColor = "Orchid";
  }
  
  