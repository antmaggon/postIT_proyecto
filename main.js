(function () {
    var f = document,
        g = JSON.parse(localStorage.getItem("n")) || [],
        h = f.getElementById("form"),
        i = f.getElementById("textBox"),
        j = f.getElementById("postits");

    function k(q) {
        var r = f.createElement("div");
        r.className = "n";

        var s = f.createElement("div");
        s.className = "c";
        s.contentEditable = "true";
        s.textContent = q;
        s.addEventListener("blur", l);

        var t = f.createElement("button");
        t.textContent = "x";
        t.className = "d";
        t.onclick = function () {
            j.removeChild(r);
            l();
        };

        r.appendChild(t);
        r.appendChild(s);
        j.appendChild(r);
    }

    function l() {
        var m = [];
        f.querySelectorAll(".n .c").forEach(function (n) {
            m.push(n.textContent);
        });
        localStorage.setItem("n", JSON.stringify(m));
    }

    h.addEventListener("submit", function (o) {
        o.preventDefault();
        var p = i.value.trim();
        if (p === "") return;
        k(p);
        l();
        i.value = "";
    });

    g.forEach(function (u) {
        k(u);
    });
})();
