const int = Object.create(null);

int.init = function () {
    const el = function (id) {
        return document.getElementById(id);
    };

    function opacity(element) {
        console.log("trig");
        el(element).style.marginLeft = "6vw";
    }
    function kopacity(element) {
        el(element).style.marginLeft = "0";
    }
    function move(element) {
        console.log("trig");
        el(element).style.marginRight = "6vw";
    }
    function kmove(element) {
        el(element).style.marginRight = "0";
    }
    function test() {
        console.log("yea");
    }

    var width = window.screen.width;
    if (width > 768) {

        el("cs").addEventListener("mouseover", function () { opacity("cs");});
        el("cs1").addEventListener("mouseover", function () { opacity("cs");});


        el("ag").addEventListener("mouseenter", function () { move("ag");});
        el("ag1").addEventListener("mouseenter", function () { move("ag");});
        
        el("fc").addEventListener("mouseenter", function () { move("fc");});
        el("fc1").addEventListener("mouseenter", function () { move("fc");});

        el("tg").addEventListener("mouseenter", function () { opacity("tg");});
        el("tg1").addEventListener("mouseenter", function () { opacity("tg");});

        el("webOne").addEventListener("mouseenter", function () { move("webOne");});
        el("webOne1").addEventListener("mouseenter", function () { move("webOne");});

        el("sb").addEventListener("mouseenter", function () { opacity("sb");});
        el("sb1").addEventListener("mouseenter", function () { opacity("sb");});

        el("webTwo").addEventListener("mouseenter", function () { opacity("webTwo");});
        el("webTwo1").addEventListener("mouseenter", function () { opacity("webTwo");});

        el("ab").addEventListener("mouseenter", function () { opacity("ab");});
        el("ab1").addEventListener("mouseenter", function () { opacity("ab");});

        el("cp").addEventListener("mouseenter", function () { opacity("cp");});
        el("cp1").addEventListener("mouseenter", function () { opacity("cp");});

        el("rh").addEventListener("mouseenter", function () { move("rh");});
        el("rh1").addEventListener("mouseenter", function () { move("rh");});




        el("cs").addEventListener("mouseleave", function () { kopacity("cs");});
        el("cs1").addEventListener("mouseleave", function () { kopacity("cs");});

        el("ag").addEventListener("mouseleave", function () { kmove("ag");});
        el("ag1").addEventListener("mouseleave", function () { kmove("ag");});

        el("fc").addEventListener("mouseleave", function () { kmove("fc");});
        el("fc1").addEventListener("mouseleave", function () { kmove("fc");});


        el("tg").addEventListener("mouseleave", function () { kopacity("tg");});
        el("tg1").addEventListener("mouseleave", function () { kopacity("tg");});

        el("webOne").addEventListener("mouseleave", function () { kmove("webOne");});
        el("webOne1").addEventListener("mouseleave", function () { kmove("webOne");});

        el("sb").addEventListener("mouseleave", function () { kopacity("sb");});
        el("sb1").addEventListener("mouseleave", function () { kopacity("sb");});

        el("webTwo").addEventListener("mouseleave", function () { kopacity("webTwo");});
        el("webTwo1").addEventListener("mouseleave", function () { kopacity("webTwo");});

        el("ab").addEventListener("mouseleave", function () { kopacity("ab");});
        el("ab1").addEventListener("mouseleave", function () { kopacity("ab");});

        el("cp").addEventListener("mouseleave", function () { kopacity("cp");});
        el("cp1").addEventListener("mouseleave", function () { kopacity("cp");});

        el("rh").addEventListener("mouseleave", function () { kmove("rh");});
        el("rh1").addEventListener("mouseleave", function () { kmove("rh");});
    }
};

export default Object.freeze(int);