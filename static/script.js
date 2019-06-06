data = [
    ["https://github.com/regi18/Sonoff-Blynk", "ARDUINO", "&emsp;/ SONOFF BLYNK"],
    ["https://github.com/regi18/offset-chiper", "CRYPTO", "&emsp;&emsp;/ OFFSET CHIPER"],
    ["https://github.com/regi18/wpstool", "EXPLOIT", " / WPS TOOL"],
    ["https://github.com/regi18/hexascii2bin", "&emsp;&emsp;CTF", "&emsp;&emsp;&emsp;/ HEXASCII2BIN"],
    ["https://github.com/regi18/plotMouseMovements", "&emsp;&emsp;CTF", "&emsp;&emsp;&emsp;/ PLOT MOUSE MOVEMENTS"]
]



function makeAList(array) {
    for (let i of array) {
        $("#contentList").append(`<li>&emsp;<a target="_blank" href=${i[0]}>${i[1]}${i[2]}</a></li>`);
    }
}

function filterList(filter) {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    ul = document.getElementById("contentList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


makeAList(data);
