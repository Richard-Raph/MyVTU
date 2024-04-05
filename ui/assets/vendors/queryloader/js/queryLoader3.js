/*
 * QueryLoader2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 3.0.16
 * Last update: 2015-07-20
 */
! function e(t, i, s) {
    function n(o, a) {
        if (!i[o]) {
            if (!t[o]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(o, !0);
                if (r) return r(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var u = i[o] = {
                exports: {}
            };
            t[o][0].call(u.exports, function(e) {
                var i = t[o][1][e];
                return n(i ? i : e)
            }, u, u.exports, e, t, i, s)
        }
        return i[o].exports
    }
    for (var r = "function" == typeof require && require, o = 0; o < s.length; o++) n(s[o]);
    return n
}({
    1: [
        function(e, t) {
            function i(e) {
                "use strict";
                this.src = e, this.element = null, "undefined" != typeof e && this.create()
            }
            var s = e("./ImageLoaded.js");
            i.prototype.create = function() {
                "use strict";
                this.element = document.createElement("img"), this.element.setAttribute("src", this.src)
            }, i.prototype.preload = function(e) {
                "use strict";
                s(this.element, function(t, i) {
                    e(t, i)
                })
            }, t.exports = i
        }, {
            "./ImageLoaded.js": 2
        }
    ],
    2: [
        function(e, t) {
            function i(e, t) {
                "use strict";

                function i(e, t, i, s) {
                    e.addEventListener ? e[i ? "addEventListener" : "removeEventListener"](t, s) : e[i ? "attachEvent" : "detachEvent"]("on" + t, s)
                }

                function n() {
                    i(e, "load", !1, n), i(e, "error", !1, n), t(null, !1)
                }
                var r;
                return e.nodeName ? "img" !== e.nodeName.toLowerCase() ? t(new Error("Element supplied is not an image")) : e.src && e.complete && void 0 !== e.naturalWidth ? t(null, !0) : (i(e, "load", !0, n), i(e, "error", !0, n), (e.readyState || e.complete) && (r = e.src, e.src = s, e.src = r), void 0) : t(new Error("First argument must be an image element"))
            }
            var s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            t.exports = i
        }, {}
    ],
    3: [
        function(e, t) {
            function i(e) {
                "use strict";
                this.parent = e, this.sources = [], this.images = [], this.loaded = 0, this.deepSearch = !0
            }
            var s = e("./Image.js");
            i.prototype.getImageSrcs = function(e) {
                "use strict";
                if (this.sources = [], "undefined" != typeof e && (this.findImageInElement(e), this.deepSearch === !0))
                    for (var t = e.querySelectorAll("*"), i = 0; i < t.length; i++) "SCRIPT" !== t[i].tagName && this.findImageInElement(t[i]);
                return this.sources
            }, i.prototype.findAndPreload = function(e) {
                "use strict";
                if ("undefined" != typeof e) {
                    this.sources = this.getImageSrcs(e);
                    for (var t = 0; t < this.sources.length; t++) {
                        var i = new s(this.sources[t]);
                        i.preload(this.imageLoaded.bind(this)), this.images.push(i)
                    }
                }
            }, i.prototype.imageLoaded = function() {
                "use strict";
                this.loaded++, this.updateProgress()
            }, i.prototype.updateProgress = function() {
                "use strict";
                this.parent.updateProgress(this.loaded, this.sources.length)
            }, i.prototype.findImageInElement = function(e) {
                "use strict";
                var t = this.determineUrlAndType(e);
                if (!this.hasGradient(t.url)) {
                    t.url = this.stripUrl(t.url);
                    for (var i = t.url.split(", "), s = 0; s < i.length; s++)
                        if (this.validUrl(i[s]) && this.urlIsNew(i[s])) {
                            var n = "";
                            (this.isIE() || this.isOpera()) && (n = "?rand=" + Math.random()), this.sources.push(i[s] + n)
                        }
                }
            }, i.prototype.determineUrlAndType = function(e) {
                "use strict";
                var t = "",
                    i = "normal",
                    s = e.currentStyle || window.getComputedStyle(e, null);
                return "undefined" != typeof s.backgroundImage && "" !== s.backgroundImage && "none" !== s.backgroundImage || "undefined" != typeof e.style.backgroundImage && "" !== e.style.backgroundImage && "none" !== e.style.backgroundImage ? (t = s.backgroundImage || e.style.backgroundImage, i = "background") : "undefined" != typeof e.getAttribute("src") && "img" === e.nodeName.toLowerCase() && (t = e.getAttribute("src")), {
                    url: t,
                    type: i
                }
            }, i.prototype.hasGradient = function(e) {
                "use strict";
                return e && "undefined" != typeof e.indexOf ? -1 !== e.indexOf("gradient(") : !1
            }, i.prototype.stripUrl = function(e) {
                "use strict";
                return e = e.replace(/url\(\"/g, ""), e = e.replace(/url\(/g, ""), e = e.replace(/\"\)/g, ""), e = e.replace(/\)/g, "")
            }, i.prototype.validUrl = function(e) {
                "use strict";
                return e.length > 0 && !e.match(/^(data:)/i) ? !0 : !1
            }, i.prototype.urlIsNew = function(e) {
                "use strict";
                return -1 === this.sources.indexOf(e)
            }, i.prototype.isIE = function() {
                "use strict";
                return navigator.userAgent.match(/msie/i)
            }, i.prototype.isOpera = function() {
                "use strict";
                return navigator.userAgent.match(/Opera/i)
            }, t.exports = i
        }, {
            "./Image.js": 1
        }
    ],
    4: [
        function(e, t) {
            function i() {
                "use strict";
                this.element = null, this.className = "queryloader__overlay__bar", this.barHeight = 1, this.barColor = "#fff"
            }
            i.prototype.create = function() {
                "use strict";
                this.element = document.createElement("div"), this.element.setAttribute("class", this.className), this.setStyling(), this.updateProgress(0, 0)
            }, i.prototype.setStyling = function() {
                "use strict";
                this.element.style.height = this.barHeight + "px", this.element.style.marginTop = "-" + this.barHeight / 2 + "px", this.element.style.backgroundColor = this.barColor, this.element.style.position = "absolute", this.element.style.top = "50%", this.setTransitionTime(100)
            }, i.prototype.updateProgress = function(e, t) {
                "use strict";
                parseInt(e) < 0 ? e = 0 : parseInt(e) > 100 && (e = 100), 0 !== t && this.setTransitionTime(t), this.element.style.width = parseInt(e) + "%"
            }, i.prototype.setTransitionTime = function(e) {
                "use strict";
                this.element.style.WebkitTransition = "width " + e + "ms", this.element.style.MozTransition = "width " + e + "ms", this.element.style.OTransition = "width " + e + "ms", this.element.style.MsTransition = "width " + e + "ms", this.element.style.Transition = "width " + e + "ms"
            }, t.exports = i
        }, {}
    ],
    5: [
        function(e, t) {
            function i() {
                "use strict";
                this.element = null, this.idName = "qlPercentage", this.className = "queryloader__overlay__percentage", this.barHeight = 1, this.barColor = "#fff"
            }
            i.prototype.create = function() {
                "use strict";
                this.element = document.createElement("div"), this.element.setAttribute("class", this.className), this.element.setAttribute("id", this.idName), this.applyStyling(), this.updateProgress(0, 0)
            }, i.prototype.applyStyling = function() {
                "use strict";
                this.element.style.height = "40px", this.element.style.width = "100%", this.element.style.position = "absolute", this.element.style.fontSize = "18px", this.element.style.top = "50%", this.element.style.left = "0", this.element.style.marginTop = "-" + (59 + this.barHeight) + "px", this.element.style.textAlign = "center", this.element.style.color = this.barColor
            }, i.prototype.updateProgress = function(e) {
                "use strict";
                parseInt(e) < 0 ? e = 0 : parseInt(e) > 100 && (e = 100), this.element.innerHTML = "Loading " + parseInt(e) + "%"
            }, t.exports = i
        }, {}
    ],
    6: [
        function(e, t) {
            function i(e) {
                "use strict";
                this.parentElement = e, this.idName = "qLoverlay", this.percentageId = "qlPercentage", this.className = "queryloader__overlay", this.element = null, this.loadingBar = null, this.percentage = null, this.barColor = "#ff0000", this.backgroundColor = "#000", this.barHeight = 1, this.fadeOutTime = 300, this.showPercentage = !1
            }
            var s = e("./LoadingBar.js"),
                n = e("./Percentage.js");
            i.prototype.init = function() {
                "use strict";
                this.create(), this.loadingBar = new s, this.loadingBar.barHeight = this.barHeight, this.loadingBar.barColor = this.barColor, this.loadingBar.create(), this.element.appendChild(this.loadingBar.element), this.showPercentage && (this.percentage = new n, this.percentage.barColor = this.barColor, this.percentage.idName = this.percentageId, this.percentage.create(), this.element.appendChild(this.percentage.element)), this.parentElement.appendChild(this.element)
            }, i.prototype.create = function() {
                "use strict";
                this.element = document.querySelector("#" + this.idName) || document.createElement("div"), this.element.setAttribute("class", this.className), this.element.setAttribute("id", this.idName), this.applyStyling()
            }, i.prototype.applyStyling = function() {
                "use strict";
                this.element.style.position = this.calculatePosition(), this.element.style.width = "100%", this.element.style.height = "100%", this.element.style.backgroundColor = this.backgroundColor, this.element.style.backgroundPosition = "fixed", this.element.style.zIndex = 666999, this.element.style.top = "0", this.element.style.left = "0", this.element.style.WebkitTransition = "opacity " + this.fadeOutTime + "ms", this.element.style.MozTransition = "opacity " + this.fadeOutTime + "ms", this.element.style.OTransition = "opacity " + this.fadeOutTime + "ms", this.element.style.MsTransition = "opacity " + this.fadeOutTime + "ms", this.element.style.Transition = "opacity " + this.fadeOutTime + "ms"
            }, i.prototype.calculatePosition = function() {
                "use strict";
                var e = "absolute";
                return "body" === this.parentElement.tagName.toLowerCase() ? e = "fixed" : ("fixed" !== this.parentElement.style.position || "absolute" !== this.parentElement.style.position) && (this.parentElement.style.position = "relative"), e
            }, i.prototype.updateProgress = function(e, t) {
                "use strict";
                null !== this.loadingBar && this.loadingBar.updateProgress(e, t), null !== this.percentage && this.percentage.updateProgress(e, t)
            }, i.prototype.remove = function() {
                "use strict";
                this.canRemove(this.element) && this.element.parentNode.removeChild(this.element)
            }, i.prototype.canRemove = function(e) {
                "use strict";
                return e.parentNode && "undefined" != typeof e.parentNode.removeChild
            }, t.exports = i
        }, {
            "./LoadingBar.js": 4,
            "./Percentage.js": 5
        }
    ],
    7: [
        function() {
            Function.prototype.bind || (Function.prototype.bind = function(e) {
                "use strict";
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var t = Array.prototype.slice.call(arguments, 1),
                    i = this,
                    s = function() {}, n = function() {
                        return i.apply(this instanceof s && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                    };
                return s.prototype = this.prototype, n.prototype = new s, n
            })
        }, {}
    ],
    8: [
        function(e, t) {
            function i(e, t) {
                "use strict";
                this.element = e, this.options = t, this.done = !1, this.maxTimeout = null, this.defaultOptions = {
                    onComplete: function() {},
                    onProgress: function() {},
                    backgroundColor: "#000",
                    barColor: "#fff",
                    overlayId: "qLoverlay",
                    percentageId: "qLpercentage",
                    barHeight: 1,
                    percentage: !1,
                    deepSearch: !0,
                    minimumTime: 300,
                    maxTime: 1e4,
                    fadeOutTime: 1e3
                }, this.overlay = null, this.preloader = null, null !== e && this.init()
            }
            var s = e("./ImagePreloader/"),
                n = e("./Overlay/");
            i.prototype.init = function() {
                "use strict";
                this.options = this.extend(this.defaultOptions, this.options), "undefined" != typeof this.element && (this.createOverlay(), this.removeTempOverlay(), this.createPreloader(), this.startMaxTimeout())
            }, i.prototype.extend = function(e, t) {
                "use strict";
                "undefined" == typeof e && (e = {});
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
            }, i.prototype.startMaxTimeout = function() {
                "use strict";
                this.maxTimeout = window.setTimeout(this.doneLoading.bind(this), this.options.maxTime)
            }, i.prototype.createOverlay = function() {
                "use strict";
                this.overlay = new n(this.element), this.overlay.idName = this.options.overlayId, this.overlay.percentageId = this.options.percentageId, this.overlay.backgroundColor = this.options.backgroundColor, this.overlay.barHeight = this.options.barHeight, this.overlay.barColor = this.options.barColor, this.overlay.showPercentage = this.options.percentage, this.overlay.fadeOutTime = this.options.fadeOutTime, "undefined" != typeof this.element && this.overlay.init()
            }, i.prototype.removeTempOverlay = function() {
                window.setTimeout(function() {
                    var e = document.getElementById("qLtempOverlay");
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, 0)
            }, i.createTempOverlay = function() {
                var e = window.setInterval(function() {
                    if ("undefined" != typeof document.getElementsByTagName("body")[0]) {
                        var t = document.createElement("div");
                        t.style.position = "fixed", t.style.width = "100%", t.style.height = "100%", t.style.zIndex = "9999", t.style.backgroundColor = "#000", t.style.left = "0", t.style.top = "0", t.setAttribute("id", "qLtempOverlay"), document.getElementsByTagName("body")[0].appendChild(t), window.clearInterval(e)
                    }
                }, 1)
            }, i.prototype.createPreloader = function() {
                "use strict";
                this.preloader = new s(this), this.preloader.deepSearch = this.options.deepSearch, window.setTimeout(function() {
                    this.preloader.findAndPreload(this.element)
                }.bind(this), 100)
            }, i.prototype.updateProgress = function(e, t) {
                "use strict";
                var i = e / t * 100;
                this.overlay.updateProgress(i, this.options.minimumTime), "function" == typeof this.options.onProgress && this.options.onProgress(i, e, t), e === t && this.done === !1 && (window.clearTimeout(this.maxTimeout), window.setTimeout(this.doneLoading.bind(this), this.options.minimumTime))
            }, i.prototype.doneLoading = function() {
                "use strict";
                window.clearTimeout(this.maxTimeout), this.done = !0, this.overlay.element.style.opacity = 0, window.setTimeout(this.destroy.bind(this), this.options.fadeOutTime)
            }, i.prototype.destroy = function() {
                "use strict";
                this.overlay.remove(), this.options.onComplete()
            }, t.exports = i
        }, {
            "./ImagePreloader/": 3,
            "./Overlay/": 6
        }
    ],
    9: [
        function(e, t) {
            e("./Polyfills/");
            var i = e("./QueryLoader.js");
            (window.jQuery || window.Zepto) && ! function(e) {
                "use strict";
                e.fn.queryLoader2 = function(e) {
                    return this.each(function() {
                        new i(this, e)
                    })
                }
            }(window.jQuery || window.Zepto), "undefined" != typeof t && (t.exports = i), "function" == typeof define && define.amd && define([], function() {
                "use strict";
                return i
            }), window.QueryLoader2 = i, i.createTempOverlay()
        }, {
            "./Polyfills/": 7,
            "./QueryLoader.js": 8
        }
    ]
}, {}, [9]);
