document.addEventListener("DOMContentLoaded", function (event) {
    var cur = null;
    var acc = document.getElementsByClassName("accordion__heading");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {

            if (cur === this) {
                toggleItem(cur);
                cur = null;
                return;
            }
            toggleItem(this);
            cur = this;
        }
    }

    function toggleItem(item) {
        item.classList.toggle("active");
        var panel = item.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.margin = "0 0 0 0";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.margin = "0 0 10px 0";
        }
    }
})