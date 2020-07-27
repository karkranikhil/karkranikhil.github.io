! function (o) {
    "use strict";
    var t = function () { };
    t.prototype.initprofileRipple = function () {
        o("#profile_ripple").ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: .04
        })
    }, t.prototype.initCounter = function () {
        var i = 0;
        o(window).scroll(function () {
            var t = o("#counter").offset().top - window.innerHeight;
            0 == i && o(window).scrollTop() > t && (o(".counter-value").each(function () {
                var t = o(this),
                    i = t.attr("data-count");
                o({
                    countNum: t.text()
                }).animate({
                    countNum: i
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function () {
                        t.text(Math.floor(this.countNum))
                    },
                    complete: function () {
                        t.text(this.countNum)
                    }
                })
            }), i = 1)
        })
    }, t.prototype.initFilter = function () {
        o(window).on("load", function () {
            var i = o(".projects-wrapper"),
                n = o("#filter");
            i.isotope({
                filter: "*",
                layoutMode: "masonry",
                animationOptions: {
                    duration: 750,
                    easing: "linear"
                }
            }), n.find("a").click(function () {
                var t = o(this).attr("data-filter");
                return n.find("a").removeClass("active"), o(this).addClass("active"), i.isotope({
                    filter: t,
                    animationOptions: {
                        animationDuration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), !1
            })
        })
    }, t.prototype.initmagnificPopup = function () {
        o(".mfp-image").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            mainClass: "mfp-fade",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            }
        })
    }, t.prototype.initPrint = function () {
        o("#lnkPrint").click(function () {
            window.print()
        })
    }, t.prototype.init = function () {
        this.initprofileRipple(), this.initCounter(), this.initFilter(), this.initmagnificPopup(), this.initPrint()
    }, o.MainApp = new t, o.MainApp.Constructor = t
}(window.jQuery),
    function (t) {
        "use strict";
        window.jQuery.MainApp.init()
    }();