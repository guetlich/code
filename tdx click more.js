
        if ((kiddies[i].tagName === 'BUTTON') && (kiddies[i].innerText.trim() === 'More')) {
            //console.log("**** YUP ****" + kiddies[i].innerText);
            kiddies[i].click();
            break;
        }
    }
}