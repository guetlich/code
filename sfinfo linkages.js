// ==UserScript==
// @name         SFInfo Linkages
// @namespace    https://it.cornell.edu/
// @version      1
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
        width:207px;
        margin:37px;
        float:right;
        top:-44px;
    }
    .hSpan {
        display: block;
    }`;
GM_addStyle(css);

var icon_div = GM_addElement('div',
    { class: 'cornerIconDiv' }
);


//create a span
var icon_span = GM_addElement(icon_div, 'span', { class: 'hSpan' } );


var icon = GM_addElement(icon_span, 'img',
    // LONG LIVE IVBOR
    {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADICAMAAACNpM5lAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFBgEHAAAABAIPAwQWDQMCAgcbBgglCQcpDgcdCgghAgshBQkvAAs0AwsqAAwvAgs5Ag4YAA4nAAxAGAoDAA4wCgs1CgpCAA8sARAfBQ4sABEkABA2AhA4Cw8pCxAgEA8cHA4ACRAzJAsMBBMrCRImGg0nFg4uAxQ1Dxc1MBEFCxkxCRlCFBgyFhoWEBotGRgkEhsjFBopCxw+JBgUCh05JhsKGSc/MCUdIygyLikoSiMQJCtAQSUfNyobKC0+Oi8USS0WMDZAPkNRZT0kW0QlZEA5WkU0TkhEUUo2TVNgXGJvgF9OdWRPkl07bWhkgWVCa3J9foCKqXxPmIVvnIVhw3tL0noiroJnpYtX/3Ub/3UlwoVXjJKb/Xkm6oEY/3se2YYr/38A4ocw040s/oIT/4EgwpBR/4Eq2Yw2/YUh+ooA/oU2/oYs+okh+4oVwpVl5I81xJhL5JA925RD/Ywu6ZFJ9ZEhxJl8nKKr/444+ZBI25pG5pdC/ZIw/ZM67ZhF4JxS75k/zqJU/Jcz+5dD2aBX/Zg8uqaO555N+JwnxKWA3KJS/JpV8Z5R+50++ZxS8p5Z+p828KFKuq2D26dY1qlb/Z9H7aRJ/Z9Oyqx2+qRB8KZUrbO75apa9akv6qhr/aVK5ath7apW/qZS860t96tE96hv+aw9/KpM8axh87A8/axV/atk/axc+q9O9rFG8a5857Nm47Vm+a9d7rJi6bRh6LNx5LR/7rNp/LFY+LRV/rNh/bNn+bVg9LlW+rdo77ptvMPO/blj+7h5+Ltj/blxwMXH2sGY/rpr7r9w8MFX6cNs/L5t58Cs6cV85cWL/MB1+8B928as+MNo98N77sOd+cR2+cWE/cZy+MaL/cd59seU/ciAzNHN98qG+cqB/8l7+8t0zNLc/8t9/M189tB469Cm9dGH0dbZ9dKS99eg79ud+t2z3ePt5Ors7Ont6ezp+u6+/u+y7PL7+vPa8PX49/T49Pfz+fvx9/z/9P75//v5+v36+f7//P/7////acUoMwAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAWO0lEQVR42u1cb2gbZ5q370PuLpp3ysDA3Lup15hke0uRIvJpJXYpjNlkIlmxZxxlXdiB+3J1LzRB0LpkwhHTqx2zBOpdAjVRdo46GI4U14U7lbhe26iXxkMKJnFZb+LVemxna67zZSx9OeuL6N77b/THVpreWnYVmF9iaaTRzDy/93me932e531nWlp8+PDhw4cPHz58+PDhw4cPHz58+PDhw4cPHz58+PDhw0exmM8XXNs2ESzbdgsF53kSf7uYLzimFosAEOA5HgiHD/9QVg3LLVjPC4O8pZ2AAR6gf3wgEOARAECfjqmmi7g1vfwlWwvyvCjyBCIGRygQHFftvNXc8hfNmCRS0csMPDpYGZJ0OGZtNa1bFEvbRifkealKeEahvCEJACASTerbpZIdh7T5xacCWRSmobqO2Xw+USxoYFfz71IDpSGBiFnM682mA0uukh91pZyE3mCg7cSJYwBin67oh5dQP6vlC2q4mQhsG21VTY1ElUC0O5lKP3iIkU4lz8qAh6C8HwhCzC3oodZmIfBNXhOkKmORoHJp+ut1hLVV9Lf2GG19PX0pcaKKpSTIjmuEW1uboyfaikuoz2f9qMSdSE6vIaFXa4G4PDjbSQyKAIBXnILa2toEJIolp5OMXdRE4CvJB2ub65ubX21sVOTf2MghEmvrf7okV6wNyK4ttzYBiZLbCQGJIHjkDseSD9ewAnK5jRwWm8qPGKAvNnJo18OzHZDj2Zjd6VhKOPS9k8jHyuEDEJX0+iplkCNCM+kJ0LfYnNavKZLwAlUEjG25lqmryvfqE9uqWKYAk2uonTc3UcPndsOjsP4wwXovrAdVM0zbtXVFVb4vM9JpBITsSIhcWluvL32FBXGQtbNHCQmOdq/CYVmzt4pO9/c0onXwLC4FSnptnSqAGdCGhxz5I6bFOqezUOJYAIi9SALH4lYpr34f1rQlo6iO6AGcRj3p6ubG6kZ95LwXRGFzfS2JR/BKDIvDP9W1lYMf60qaF7xJ8vT65obnw7mNTYYKBaoU1kWtriVYPMJe0TmEiOUc+HhdsiEzIhC5hqyo0g9t7qCAzWijbEj4Vw8Vga+OAFGCKkHT7T7Yvqm0HfNSGXgN9TRfUUv5auOrzVo8yT3Jsc7Ve9vcTJ/AkS3HkeEEvSM2wjErf7Dj9TeWQDpGNB4kv8ajAW3xzafgCULOG+ZyueVrEZIccVwlChcirnGgI10pDlhqrzwkIdHG0zk8Yai4xurqdN/Zs31nk0pVJnEo7sZaDzDmsCEO1vCQdm2tQqAOBWRZRP6VlScblSHbi5/Wps9GSICI/gRgmaGD40C6I0RAkhJ/LA/IuylQiSmDlScb1UEH3VjJrT/sgpQCL8YcpfWgOBQLQQ5TQL6czq1vrFaPwtWhERV5haHemL2BYlg01hEKgmBpTA37T6JosR41kFhbXa0RGCtix8iGPDm38vS4YxWNdQLWgyTorqnFoqGD4LCtscgCXsqtrtZqYPfYXF9wNkigl8drCRJy8CAY0y3HMWMH0DNtR2iEAOS1Gqk2qllUBH5EgTZW6lHJracD3kgPwDHVckwlFNpnErZ3xeRmrTBPA/OFRzt9wuuY5CNHRJ4NNLhe5lhmdH85mC/iPBhdL/24Rpr68qOM7WuEdcZkZbdFrScDR8rhhiQIUHULlhraTw46iW+Q7T5mciyv1miB9lEbyIKWHz+4lkwokRPhaCJ5aXp5cbFiTMwX8HGXoEjCDC8bAhGz5Cr76BHbcfEIvpqUeFxlDauVlGeDsVleSyXaAIklAC9CFJX3Tf8+t5vC6sMoL1aVk3EypLlGdP84FGWqBSnpuery8pc1ZkTi00drqdOQp7EQyhBISCiEkw+wbzxijk45bK6mcDGKY+Erj4t+IOZY+6eHfJAqXOjzPJXhCflMmzi3mlYCfG2lGFlIAMip5ZUl4uP0YPLz9UsKBAJJhbywD8r2/nEoQJr+Cqkc6Stzq49XHz9+jJvzK691V5YvtUmCWF2o9OYbQPIBOor1s8jacsSgHk+nryUVWCn5gcArjrVfxuQCIg8HUkjS5WUi/TKt4OGt3KPlR18uJztqS918uWosCInpL3NP8JH4Pzp8GbP5EuHxdDJCTQlzlWS3qO7PUO0CZkippZWllZWlpSVsD/RvCWNx4UGCCb2rZE9C9NPT5JilRQ/kqKUlRH46GYSeMcHYFov8Gu4LbUzXfYvZpbpYTkLeKxbX4cBD5eHiEhV855HLy9cUsZxTqwV9PzgUjQ4qiZTEbVcW5NGj8lYf8Fo/IPEQDQlnk92KIAE2E4eG4MTy5/fLqCHxaPFhgiv7tFE0Gx/2FVXITAQkMINFIj0FkyL943/wyhNSR1d6mbZu+qwsVQav5BIWfqFsRhV8vojNkB4tHXcsudHhdz7uFcBegIwCFX+FUVhc+kKReEB/JCqEAMODZJtXQgIvpRcQhcXdFDCraY8DD+N5W2ksh6JargEBIblYD9nUUZHRPJb8gslH9txfSMs0rkayJb5YIFZU9xzTChvoeGjm4w1Ng0ooU2CzCSIfTS9W7Lmy+cVpjvZEfFtqeQF1Txhkz8LCYlr26k+H0gvZbPZ+fSykg5WZiHgjU7mSAYlwJOc8na4vQAoGiKIA7FtGolPp7zNxF9NBPkAowK5aBtkK0IfPk0wNAjCdBqrhL1YH5CmFQLjvs7v3797dxeLuYtcRqgM+sby0uHN39vdJCZCAiQ/fIYdn796t0w7ZOycJBUkCsUJ349RQ6ORZPR6pADXb7N0azKG/7L0H4QB1hRPIzhbv7gCyMwUQC5FACrdBfWTvZVNtVAu8YKmtjeJAJhRo9Ui5s5j1Lnfv3j3c+uza2TSbdJC6llAbe1JWOU2fNzwksQbmnsIh+3mCY8mobjassOEGPQqn7yzcvztPsePK2RSjAN7N3rtf4VZmsnjnBFtqklhiFOfrYC6bhnRs4F8p15f2yuEbHdJWgeH0wr2qq80i4Pfs3Xufvd+nsHKx8nl2bnaWyudJOTuHfHUpAejoJr+aSv/Xo2wW79hBAJ3x3meyV+ezjfbGUCgEeY6E/PDVhezd2VpgIbLpZBR4sx9CMosp7ARis9jnRRkSz/2t3NP/yezM7+r8ciEZIB4NBKNCYU8cSuaLPFkhBU99ilopk9lBIZtOHBI4b+jmhVezs3WALOTeu17ASg1OjPbeqvfLbAqIEomUNCvcGArddFYKCCkkP0X5er+bv9MlgMpCC9zfzM3WRXb+FvDm6IilIBbhVz/NYONhp8zMoPeZ+c/wVBj+pVzpVvfEIX8cx7/YhD/ZxWB+Pi2/WLMUDIAPZmdn0H+MHXq4c4jnynNt5P0H8OSt+dkp77TkiJnZ+S4Wqh92GkPBEpkWeucySKwqDpnZ+VQQ8uUiCg2U70zNlFFL4YswXzVdiK0dOVD0ahUFzABdoc9bs2HFGkLB8Jr3ViZD5Mrgd3rR1I8hX5tigp/9BxN+lxo+upcoLyErHwWE6Ptz1b/Ep05507tWQ7SwrR6hEbz82cykRyEzS3i8Hxa4HblZR1+GKaCiixnP0K9GIG2P6uIG4jBTjcmpqXchs8uq8XkPHIryEeqnXfPo9ARTTPOfnpI4VhHgRBhWEl1dXf3zU5OTFUPyKFPMvZ9M9vQkE6ehCJFbcGTWkwOnPpiZwmdFFjg1ibeuQpqA8mZDKBRYUg6SjADmQAT66FXI0nxebEukPp3LTCHlTE1WgOSfqkZmMpPNZjLz2TspZFNe8Yg/3JPxDqBHX4U0bG8QBZcTiSXxfZO3b3uyEQqfRCXPKk6l5pGAMzMzk7XY+cVUhnWg83OpRHlRnwRTtT+7CljP1RgKDqUg8v2Iwu0yi6nJzC+PstCpo+c/p6YmvzOIiU3NfNIXZDrkhVMfejsnEJAW2AqJxlIA/RPjCBVFTCZYuAB7Pp35aIJc+5mo/AYpLRWBLEM7lPq4isJEinm9YDWKAu05+scJhYnbRNaJzK0gtmbEIfrBDLs0k2+mtskrBjU+UQFuhZRIDUYSEplJelpGgZyYP1w9Lvz1HFw2mcT3jVeALpN5n8zQoCbsRUaENXTzNnolxnb747Lf3GYge8jPKjwmMz2s9wThD25Xzn47KZIMERz+s9IICv/LeiSpC19kDIFK8XHqRVoF/furqHVv3Bi7OZ5h/edsZj6D4td7GCiRmMvOz83hmHzuo48n2DnGbty4gTh8EGXtI6Qmx71d45MnJXReRCHiRBtBoRQ7QtYFCicnyq1EKPS/eATbgBT9kKhg/F97lNM1UJRdH3r6f1vR48TEbz/uFWghX+idQKcgJMZv3ArTMFBQqyLVPVAoasidOY4H0Q9v3iBth4B5pCgFEM3cwNfuf0ni+G8HEMDhnt8QNSKgc41PXIU04hN7pvAXN4iC+iFPg+3qfGEv/myS0Zfn4S/Hb46OjjHcGO8XmRYyY6jt/j0CK/Fb5XUHBwDa+scqGB//UBaIQ0ldE0gJ9Oy/7qFhFKjtkPYQJDk0kgNC1/gYY0Aa61fwBSyTIKP2G7vRC3mxXlGextVimcKhnrHxyjnGx3uhROa+epkjjI2NvvMS8/Hq3HlvcZ4ssV7jN1UNODZ6/RTgMIWTN8aGx8Z6IeeJvOMeAG/tPONw6vooBjnH8NjN/jYSrcP+m2Ojo8MY13s98lUVjL1RKOoCW4XWi645OkIxOjJ6rgNJFDjaiz+OnRPLpkNqHSQzY1km/YLOH8KesdFqXO8RUcwnnvk1OiE6z/DI8DtRNnkIau1oLwmDLeDxmRMDP3lr1GNAWPS2BQLg5Ht4e/jt6LFnODOSipOkl/qHhobwwRjDw6Mj7/VGA9He6+UTD/Z6GVTMkRtFoRTj2HrrnuujSIChQYqR6/1nenqvX8EYGemPgmcA+ZMYOXdzhFDwgJr9vXfewwQGyYlH3wmzWzegafxNoyi0mB10jh4cPjc8RCSmLEbI/ytXLl8ZGBgceru3qy56CMjmmd63hzyM7ABtmpHrJyFzG9mJNYwBmTLn8EynEH1rBDMYuHz58qCHAYahoWHclkgM7JR4z/DgMP5q2Ps8iAS9wjA0WIsr+OXywEgvy0053qx15r1RyJsSc2hw6ldDV6jElz0MXCCfr1wepLY8SHgMspdhwoLsGME8PApVbcA+YwydawMSLdN0bumtjaPQsh1nPSOQfv7mFU9oetU3Bt544/K3YfBp33sot8Xl4XNB1HWRlciCZSqNpFB0gsAbcH/+1pWBCzuBCFFaA/RDDZBw1R8uVz7X7LlycfDcS4BRAJotN5IBSqBNQG4+4vgA+Mm5gQvnL5w/f/71aqDPF56N8xQ7edLP/9YbBHQFKQ+RGbU3lgIa37zJAV44dObNC6+9/lotzv//wHRXZnbx4sBbPdDrfvnj9rbWYAYteXznCK0icgEheubN80Twf/prKZw/z4648PoFrMKBN3sjUmUIMSxdaTSFlu18POAVdXE998wvBi+ef+2fK6JfxCCmcuECatOL1SjvHvC+P3/hoqcLxGLw3JkfBcon5wXdVtobzgBxKMS4SsAmQBg92XNmL/gXz4oun/sZhBK1U+IIml07qDVs6jmfV/GIQ1a943vjmT4CKE7aCUmSnhVtAOFHZy6SHuHyGQgCXCWjEPS8tj8McBqtA65q4X5NUuPFot8ZkvR35xCF1177BZ4QLp+NazMcLbpfDFqcbTNYfV9n3dSMfVVhKNaljG/lOfk/f/jTH//QxYkVAwURy9llRQ1dDZN3VBrA7F5txHGewLzIf9st3OX0h4+4pmW5qpcsobPCuOt0t+8nA6SIotUpct8u4G5pvXmd6rVWSA+aFQ2FDYOlrMhII6Zr7q8O6EBdNDvLdrJ77de30hFxQZ4twRNFwcIFim6nk5XO2/SC0x3efwYoiUOa0F4WySyoxD87VUO5BkXFM4jfdhgkuw8ZdidJDww7b3S3HgQDkgO5rmWonZE28F0QwM/22Pnly3HLVonVRw3HMkzbsUxTPjAGZPm25ThbjvPnWthl/PczYNu6J3AopltGtxxqDx0kAYKosgvyd0e0quNpD7e31kPL/qN1X9FyMHjuCewfiZYDhueW6H9ot0u2tu/cakdoJvnLJDRTMyzLVLtDUd3QdBIntCuqqtEBtz2OtvQo7n9M0zQ0JdRE8lOErOKWqevoVVHzBcvZwssbVTSAWAUDd5+K65h2UYubjqVriKyzs0LRBE+WsFwZ8hDohbjhRKBgm0gNunNc4tW8haJnzToEBNNxzSDE9/4D2bKizUWgpWVLJ/FnGxprjQAvGYhCyNJROAFdO9zajr8UtW/sY5AmRcIPa2cPmuApK1aR1JokqBUd4wVR1By5VSYhHG+izW43znNHtFKcJUeSoDZmLrCRFBya/EqC61gviHznltIad8gcuFZQWrUCXslsODg2hDFd7YCW3mQMWvJs3ZIkGLaDQuqXUfalWSQuDbqIgoUZmgY2Nh15u2NUL1prCgZOsRML28mJUmex2ClxvK2FTIPM7kNLVRzMEDoadpeCFVWMQoPW3TUO2w5ejdGJZ1Og8w2umxlmbCvO4bWOomEoBXyz90+LGtLFoQJiJ6Pxo9koGHgZaCyODccoGSInqXZ3IcLzeKKu246hTVGMlzRc9DW2XaXJulM6m4X7yngLRMlZrGih9Pq4o9nIuTtlUYw4qo0TNr1o4NrBYTNv1gzOzaEENyABEGlpkRGFQ44TkDjJts2AAAwVqcE2LUzBsmxI7pTXXPbkiGZSgoGrYfGWlhhZCbX9Y0TBKum8AG3kx0esgs5LvGB1OzonkXKRiR981lQUijE84sZaWuK4xhTDT2rg9b/EeOkHWxaU/tEoxXggHLUVq6jiuVNJkAxXDTUVBdwfCbATUQhgh3VNZDaxLcyqgB+d0ZkPIiXE7ahqu3oHHgF5aG4pTaUE3B8Jx2KxeJws6DJsIPLHTFGSdMsJooEOeQUv4LAprBYsGd8xIwTLq5mbpD/ybtIAZFl2LH+c4wGKh45aht0tciCO91i4Yh3qNp0YrsIL5QijSeyI1aVxxQtvOnH8yEUAjuYdUxc5MoUWZNOwUdOVyX0uRhNRKOmkMs8RCgE8q6gbQCK3kLuaZqEvcfwXK2hRORoNy2oe91vQaCYKRZnM6UJMARsSJ8WcQxJeIWhYoW6bpw9Y0E0ZhXeO5bhGAOnqqG00kR1ZZM4nbhHE8C38QRfXjnmcuynOT8ld/cj2444sa4Yuk1mpmDeZ0xQUDPwEtmNOkQbd+K4EyUS2xfERFHFHHZUuU7O7NQtPagl4FosL2ixUbQoGLTpKJqG+TY3KwYEd1PEzxaCGUs6QYZLHa8VdRTMD3qNHgpYbDzURBSfIC8cdb/6hG1Mw8Y2t0MKRkJHvFHku4mwpqvsK9mxEIu6U8s2khJaSFceP8WPzDwUt0mkWSwUjZhQ1PIFQclVZdYpaKI4yBTnQ0anbqKvVo03EAEeq29XVGNe1Dct0XJvMGMQNE3dEaDusIuFdtK0rodbW5mJQF+EofehoaygUjUZZqTIqK7Icbn0uCDy7ZNzynOA5F38XjxYfPnz48OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPjz8H4Wp0Qb+ldVSAAAAAElFTkSuQmCC',
    }
);



var thing = document.createElement('li');
    thing.innerHTML = `<button id="inProcess" type="button" class="btn btn-holly btn-sm" title="InProcess">
    <span class="hidden-xs padding-left-xs">In Process</span>
    </button>`;
    $("#btnRefresh").closest('ul').append(thing);