data = [
    ["https://github.com/regi18/Sonoff-Blynk", "ARDUINO", "SONOFF BLYNK"],
    ["https://github.com/regi18/Espegi", "ARDUINO", "ESPEGI"],
    ["https://github.com/regi18/offset-chiper", "CRYPTO", "OFFSET CHIPER"],
    ["https://github.com/regi18/hexascii2bin", "CTF", "HEXASCII2BIN"],
    ["https://github.com/regi18/plotMouseMovements", "CTF", "PLOT MOUSE MOVEMENTS"],
    ["https://github.com/regi18/wpstool", "EXPLOIT", "WPS TOOL"],
    ["https://github.com/regi18/vuejs-generate-component", "SCRIPTS", "VUE.JS GENERATE COMPONENT"],
]

donateList = [
    ["BTC", "15cahY8GCj3at48vuPSDhQkBkyL51JXr9C"],
    ["LTC", "LXs2Z6UYsfxR2Q9hfvfrdDxdowoX4wWVie"],
    ["ETH", "0xb006536907DceD1723a9c4EaEb7D3905fBfA088a"]
]

function filterList(filter) {
    let node = document.querySelector("#contentList");
    node.innerHTML = '';

    for (let i of data) {
        if (i[1] === filter || filter === "") {
            var html = `<li class="post-teaser"><a target="_blank" href=${i[0]}>
                <span class="post-teaser__title">${i[2]}</span>
                <span class="post-teaser__date">${i[1]}</span>
                </a></li>
            `;

            node.insertAdjacentHTML('beforeend', html);
        }
    }

    return false;
}


function showDonate() {
    let node = document.querySelector("#contentList");
    node.innerHTML = '';

    for (let i of donateList) {
        var html =
        `
        <li class="post-teaser donate">
        <span class="post-teaser__title">${i[1]}</span>
        <span class="post-teaser__date">${i[0]}</span>
        </li>
        `;

        node.insertAdjacentHTML('beforeend', html);
    }

    return false;
}

document.addEventListener("load", filterList(""));
