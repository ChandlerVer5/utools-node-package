/*! For license information please see index.js.LICENSE.txt */
(()=>{
    var e = {
        506: e=>{
            e.exports = function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        }
        ,
        575: e=>{
            e.exports = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
        }
        ,
        913: e=>{
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            e.exports = function(e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
        }
        ,
        154: e=>{
            function t() {
                return e.exports = t = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                t.apply(this, arguments)
            }
            e.exports = t
        }
        ,
        754: e=>{
            function t(n) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                t(n)
            }
            e.exports = t
        }
        ,
        205: (e,t,n)=>{
            var r = n(489);
            e.exports = function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && r(e, t)
            }
        }
        ,
        318: e=>{
            e.exports = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }
        ,
        862: e=>{
            e.exports = function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                t
            }
        }
        ,
        479: (e,t,n)=>{
            var r = n(316);
            e.exports = function(e, t) {
                if (null == e)
                    return {};
                var n, l, a = r(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++)
                        n = i[l],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
        }
        ,
        316: e=>{
            e.exports = function(e, t) {
                if (null == e)
                    return {};
                var n, r, l = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (l[n] = e[n]);
                return l
            }
        }
        ,
        585: (e,t,n)=>{
            var r = n(8)
              , l = n(506);
            e.exports = function(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? l(e) : t
            }
        }
        ,
        489: e=>{
            function t(n, r) {
                return e.exports = t = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                t(n, r)
            }
            e.exports = t
        }
        ,
        8: e=>{
            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t(e)
            }
            function n(r) {
                return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = n = function(e) {
                    return t(e)
                }
                : e.exports = n = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                }
                ,
                n(r)
            }
            e.exports = n
        }
        ,
        693: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>o
            });
            var r = n(81)
              , l = n.n(r)
              , a = n(645)
              , i = n.n(a)()(l());
            i.push([e.id, 'body {\n  margin: 0;\n  overflow: hidden;\n  font-family: system-ui, "PingFang SC", "Helvetica Neue", "Microsoft Yahei", sans-serif;\n  user-select: none;\n}\n.voice-panel {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.voice-panel {\n  flex-direction: column;\n}\n.voiceInput {\n  position: relative;\n  height: 56px;\n  display: flex;\n}\n.voiceInput .voiceOut {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-right: 6px;\n  box-sizing: border-box;\n  color: #527190;\n}\n.voiceInput .voiceOut > div {\n  width: 100%;\n  max-height: 48px;\n  word-wrap: break-word;\n  word-break: break-all;\n  font-size: 14px;\n  line-height: 16px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.voiceInput .voiceOut > div::-webkit-scrollbar {\n  display: none;\n}\n.voiceInput .matchLabel {\n  position: absolute;\n  z-index: 1;\n  height: 56px;\n  left: 56px;\n  top: 0;\n  right: 0;\n  padding-right: 12px;\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 1.2;\n  color: #777;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  white-space: pre-line;\n}\n.voiceInput .matchLabel svg path {\n  fill: #777;\n}\n.voiceInput .logo,\n.voiceInput .appUpdateIcon {\n  background-color: #fff;\n  position: absolute;\n  z-index: 1;\n  height: 56px;\n  width: 56px;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.voiceInput .logo > img,\n.voiceInput .appUpdateIcon > img {\n  user-select: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.voiceInput .logo > img {\n  border: 1px solid transparent;\n}\n.microphone {\n  height: 56px;\n  width: 56px;\n  padding-top: 10px;\n  text-align: center;\n  position: relative;\n  box-sizing: border-box;\n}\n.microphone img {\n  width: 36px;\n  height: 36px;\n}\n.microphone .voiceNum {\n  background-color: #717171;\n  width: 12px;\n  height: 22px;\n  border-radius: 6px;\n  position: absolute;\n  top: 12px;\n  left: 22px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column-reverse;\n}\n.microphone .voiceNum > div {\n  background-color: #ffffff;\n  width: 100%;\n}\n.microphone .disable {\n  position: absolute;\n  width: 42px;\n  top: 24px;\n  left: 7px;\n  height: 4px;\n  transform: rotate(45deg);\n  background-color: #717171;\n  border-top: 2px solid #ffffff;\n  box-sizing: border-box;\n}\n.translate {\n  padding: 2px 6px;\n  min-height: 22px;\n  line-height: 18px;\n  cursor: default;\n  font-size: 12px;\n  color: #666;\n  background-color: #f7f8f9;\n  box-sizing: border-box;\n  white-space: pre-line;\n  word-break: break-all;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 10;\n  overflow: hidden;\n}\n.translate .spinner {\n  width: 100%;\n  text-align: center;\n}\n@keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.translate .spinner > div {\n  width: 8px;\n  height: 8px;\n  background-color: #888;\n  border-radius: 100%;\n  display: inline-block;\n  animation: sk-bouncedelay 1s infinite ease-in-out both;\n}\n.translate .spinner .bounce1 {\n  animation-delay: -0.32s;\n}\n.translate .spinner .bounce2 {\n  animation-delay: -0.16s;\n}\n.translate .member {\n  color: #faad14;\n  cursor: pointer;\n  margin-left: 6px;\n}\n.search-result {\n  flex: 1;\n  display: flex;\n  overflow-x: hidden;\n}\n.search-result::-webkit-scrollbar {\n  width: 3px;\n}\n.search-result::-webkit-scrollbar-thumb {\n  border-radius: 1px;\n  background-color: #888888;\n}\n.search-result {\n  flex-direction: column;\n}\n.feature-row {\n  height: 34px;\n  min-height: 34px;\n  display: flex;\n  box-sizing: border-box;\n}\n.feature-row .feature-icon {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.feature-row .feature-icon img {\n  width: 20px;\n  height: 20px;\n}\n.feature-row .feature-label {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-width: 0;\n}\n.feature-row .feature-label > div:first-child {\n  min-width: 0;\n  line-height: 1;\n  font-size: 14px;\n  word-break: break-all;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  padding-right: 4px;\n  color: #212121;\n}\n.feature-row .feature-label .match {\n  color: #F18325;\n}\n.feature-row .feature-label .dev {\n  padding-right: 4px;\n  display: flex;\n  align-items: center;\n}\n.feature-row .feature-label .dev > span {\n  line-height: 1.2;\n  background-color: #eee;\n  font-size: 10px;\n  color: #8e8e8e;\n  border-radius: 3px;\n  padding: 0 3px;\n  border: 1px solid #ddd;\n}\n.feature-row-selected {\n  background-color: #dee2e6 !important;\n}\n.menus-views {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.menus-box {\n  width: 100%;\n  height: 340px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  user-select: none;\n  position: relative;\n  cursor: default;\n  overflow: hidden;\n}\n.menus-item {\n  width: 85px;\n  height: 85px;\n  cursor: pointer;\n  color: #212121;\n}\n.menus-item > div {\n  width: 85px;\n}\n.menus-item > div:first-child {\n  padding-top: 4px;\n  box-sizing: border-box;\n  height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menus-item > div:last-child {\n  padding: 0 8px;\n  box-sizing: border-box;\n  line-height: 1.2;\n  font-size: 12px;\n  word-break: break-all;\n}\n.menus-item .menus-item-icon {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  justify-content: space-between;\n}\n.menus-item .menus-item-icon > img {\n  width: 100%;\n  height: 100%;\n}\n.menus-item .menus-item-label {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-align: center;\n}\n.menus-item-folder .menus-item-icon,\n.menus-item-folder0 .menus-item-icon {\n  width: 37px;\n  height: 37px;\n  background-color: #f0f0f0;\n  box-shadow: 0 0 0 1px #ced4da;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 3px;\n}\n.menus-item-folder .menus-item-icon > img,\n.menus-item-folder0 .menus-item-icon > img {\n  width: 14px;\n  height: 14px;\n  transition: 300ms;\n}\n.menus-item-folder.menus-item-folder0 .menus-item-icon {\n  transform: scale(0.8);\n  transition: transform 300ms;\n}\n.menus-item-window {\n  background-color: #fffde7;\n}\n.menus-item-empty {\n  width: 85px;\n  height: 85px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.menus-item-empty > svg > path {\n  fill: #ccc;\n}\n.menus-item-hover {\n  background-color: #dee2e6;\n}\n.menus-item-draging {\n  position: fixed;\n  color: rgba(0, 0, 0, 0);\n}\n.menus-step {\n  position: absolute;\n  right: 36px;\n  font-size: 13px;\n  color: #777;\n}\n.menus-dustbin-forward,\n.menus-dustbin-reverse {\n  position: absolute;\n  z-index: 3;\n  height: 56px;\n  width: 100%;\n  left: 0;\n  background-color: rgba(203, 84, 76, 0.68);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 200;\n}\n.menus-dustbin-forward > svg path,\n.menus-dustbin-reverse > svg path {\n  fill: #fff;\n}\n.menus-dustbin-forward > span,\n.menus-dustbin-reverse > span {\n  padding-top: 2px;\n}\n.menus-dustbin-forward {\n  top: -56px;\n  transition: top 300ms;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n.menus-dustbin-reverse {\n  bottom: -56px;\n  transition: bottom 300ms;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n.menus-folder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.menus-folder .menus-folder-label {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  font-size: 20px;\n  flex: 1;\n  background: rgba(0, 0, 0, 0.36);\n  backdrop-filter: blur(2px);\n  color: #fff;\n  opacity: 0;\n  transition: opacity 225ms;\n  cursor: default;\n  position: relative;\n}\n.menus-folder .menus-folder-label > span {\n  padding: 4px 16px 5px 16px;\n  box-sizing: border-box;\n  line-height: 1;\n  border-radius: 20px;\n  cursor: text;\n  display: inline-block;\n  max-width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menus-folder .menus-folder-label > span:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.menus-folder .menus-folder-label-input {\n  border: none;\n  background-color: #fff;\n  font-size: 20px;\n  width: 90%;\n  line-height: 1;\n  padding: 4px 16px 5px 16px;\n  box-sizing: border-box;\n  outline: none;\n  border-radius: 18px;\n}\n.menus-folder .menus-folder-label-input:focus {\n  outline: none;\n}\n.menus-folder .menus-folder-content {\n  width: 100%;\n  user-select: none;\n  background-color: #fff;\n  height: 0;\n  transition: height 225ms;\n  overflow: hidden;\n}\n.menus-folder .menus-folder-box {\n  width: 100%;\n  height: 255px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n}\n.menus-folder .menus-folder-stepper {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menus-folder .menus-folder-stepper > div {\n  width: 8px;\n  height: 8px;\n  margin: 0 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.menus-folder .menus-folder-stepper > div > span {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.8);\n  transition: 225ms;\n}\n.menus-folder .menus-folder-stepper > div:hover > span {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n.menus-folder .menus-folder-stepper .menus-folder-stepper-current > span {\n  width: 6px;\n  height: 6px;\n}\n.voice-panel-hold .voiceInput .matchLabel:hover svg path {\n  fill: #1890ff;\n}\n.voice-panel-hold .feature-row:hover {\n  background-color: #dee2e6;\n}\n.voice-panel-hold .logo:hover > img {\n  box-shadow: 0 0 0 1px #1890ff;\n}\n.voice-panel-hold .appUpdateIcon:hover > img {\n  transform: rotate(1turn);\n}\n.voice-panel-hold .menus-item:hover {\n  background-color: #dee2e6;\n}\n.voice-panel-hold .menus-item-empty:hover {\n  border: 1px dashed #ccc;\n}\n@media (prefers-color-scheme: light) {\n  body {\n    background-color: #FFFFFF;\n  }\n  .voice-panel {\n    border-color: #cecece;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #303133;\n  }\n  .voice-panel {\n    border-color: #515151;\n  }\n  .voiceInput .voiceOut {\n    color: #90caf9;\n  }\n  .voiceInput .matchLabel {\n    color: #ababab;\n  }\n  .voiceInput .matchLabel svg path {\n    fill: #ababab;\n  }\n  .voiceInput .logo,\n  .voiceInput .appUpdateIcon {\n    background-color: #303133;\n  }\n  .microphone .voiceNum > div {\n    background-color: #303133;\n  }\n  .microphone .disable {\n    border-color: #303133;\n  }\n  .translate {\n    background-color: #3a3a3b;\n    color: #ccc;\n  }\n  .feature-row .feature-label > div:first-child {\n    color: #e6e6e6;\n  }\n  .feature-row .feature-label .dev > span {\n    background-color: #555;\n    color: #ccc;\n    border-color: #666;\n  }\n  .feature-row-selected {\n    background-color: #515151 !important;\n  }\n  .menus-item {\n    color: #e6e6e6;\n  }\n  .menus-item-folder .menus-item-icon,\n  .menus-item-folder0 .menus-item-icon {\n    box-shadow: 0 0 0 1px #868e96;\n    background-color: #424242;\n  }\n  .menus-item-window {\n    background-color: #343a40;\n  }\n  .menus-item-empty > svg > path {\n    fill: #666;\n  }\n  .menus-item-hover {\n    background-color: #515151;\n  }\n  .menus-step {\n    color: #ababab;\n  }\n  .menus-folder .menus-folder-label {\n    background: rgba(200, 200, 200, 0.36);\n  }\n  .menus-folder .menus-folder-label > span:hover {\n    background-color: rgba(30, 30, 30, 0.3);\n  }\n  .menus-folder .menus-folder-label-input {\n    background-color: #303133;\n    color: #fff;\n  }\n  .menus-folder .menus-folder-content {\n    background-color: #303133;\n  }\n  .menus-folder .menus-folder-stepper > div > span {\n    background-color: rgba(30, 30, 30, 0.8);\n  }\n  .menus-folder .menus-folder-stepper > div:hover > span {\n    background-color: rgba(30, 30, 30, 0.6);\n  }\n  .voice-panel-hold .feature-row:hover {\n    background-color: #515151;\n  }\n  .voice-panel-hold .menus-item:hover {\n    background-color: #515151;\n  }\n  .voice-panel-hold .menus-item-empty:hover {\n    border: 1px dashed #666;\n  }\n}\n', ""]);
            const o = i
        }
        ,
        645: e=>{
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = ""
                          , r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        r && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, r, l, a) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var i = {};
                    if (r)
                        for (var o = 0; o < this.length; o++) {
                            var s = this[o][0];
                            null != s && (i[s] = !0)
                        }
                    for (var u = 0; u < e.length; u++) {
                        var c = [].concat(e[u]);
                        r && i[c[0]] || (void 0 !== a && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")),
                        c[5] = a),
                        n && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"),
                        c[2] = n) : c[2] = n),
                        l && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"),
                        c[4] = l) : c[4] = "".concat(l)),
                        t.push(c))
                    }
                }
                ,
                t
            }
        }
        ,
        81: e=>{
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        }
        ,
        703: (e,t,n)=>{
            "use strict";
            var r = n(414);
            function l() {}
            function a() {}
            a.resetWarningCache = l,
            e.exports = function() {
                function e(e, t, n, l, a, i) {
                    if (i !== r) {
                        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation",
                        o
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: l
                };
                return n.PropTypes = n,
                n
            }
        }
        ,
        697: (e,t,n)=>{
            e.exports = n(703)()
        }
        ,
        414: e=>{
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        ,
        448: (e,t,n)=>{
            "use strict";
            var r = n(294)
              , l = n(840);
            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var i = new Set
              , o = {};
            function s(e, t) {
                u(e, t),
                u(e + "Capture", t)
            }
            function u(e, t) {
                for (o[e] = t,
                e = 0; e < t.length; e++)
                    i.add(t[e])
            }
            var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
              , d = Object.prototype.hasOwnProperty
              , f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = {}
              , h = {};
            function m(e, t, n, r, l, a, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = l,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = a,
                this.removeEmptyString = i
            }
            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                g[e] = new m(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                g[t] = new m(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                g[e] = new m(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                g[e] = new m(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                g[e] = new m(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                g[e] = new m(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                g[e] = new m(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                g[e] = new m(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                g[e] = new m(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var v = /[\-:]([a-z])/g;
            function y(e) {
                return e[1].toUpperCase()
            }
            function b(e, t, n, r) {
                var l = g.hasOwnProperty(t) ? g[t] : null;
                (null !== l ? 0 !== l.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null == t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, l, r) && (n = null),
                r || null === l ? function(e) {
                    return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = null === n ? 3 !== l.type && "" : n : (t = l.attributeName,
                r = l.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (l = l.type) || 4 === l && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(v, y);
                g[t] = new m(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(v, y);
                g[t] = new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(v, y);
                g[t] = new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                g[e] = new m(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            g.xlinkHref = new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                g[e] = new m(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , x = Symbol.for("react.element")
              , k = Symbol.for("react.portal")
              , S = Symbol.for("react.fragment")
              , C = Symbol.for("react.strict_mode")
              , E = Symbol.for("react.profiler")
              , M = Symbol.for("react.provider")
              , _ = Symbol.for("react.context")
              , T = Symbol.for("react.forward_ref")
              , I = Symbol.for("react.suspense")
              , P = Symbol.for("react.suspense_list")
              , N = Symbol.for("react.memo")
              , L = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var R = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var z = Symbol.iterator;
            function O(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = z && e[z] || e["@@iterator"]) ? e : null
            }
            var F, D = Object.assign;
            function U(e) {
                if (void 0 === F)
                    try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        F = t && t[1] || ""
                    }
                return "\n" + F + e
            }
            var A = !1;
            function H(e, t) {
                if (!e || A)
                    return "";
                A = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (e) {
                                var r = e
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (e) {
                                r = e
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (t) {
                    if (t && r && "string" == typeof t.stack) {
                        for (var l = t.stack.split("\n"), a = r.stack.split("\n"), i = l.length - 1, o = a.length - 1; 1 <= i && 0 <= o && l[i] !== a[o]; )
                            o--;
                        for (; 1 <= i && 0 <= o; i--,
                        o--)
                            if (l[i] !== a[o]) {
                                if (1 !== i || 1 !== o)
                                    do {
                                        if (i--,
                                        0 > --o || l[i] !== a[o]) {
                                            var s = "\n" + l[i].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                            s
                                        }
                                    } while (1 <= i && 0 <= o);
                                break
                            }
                    }
                } finally {
                    A = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? U(e) : ""
            }
            function j(e) {
                switch (e.tag) {
                case 5:
                    return U(e.type);
                case 16:
                    return U("Lazy");
                case 13:
                    return U("Suspense");
                case 19:
                    return U("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return H(e.type, !1);
                case 11:
                    return H(e.type.render, !1);
                case 1:
                    return H(e.type, !0);
                default:
                    return ""
                }
            }
            function W(e) {
                if (null == e)
                    return null;
                if ("function" == typeof e)
                    return e.displayName || e.name || null;
                if ("string" == typeof e)
                    return e;
                switch (e) {
                case S:
                    return "Fragment";
                case k:
                    return "Portal";
                case E:
                    return "Profiler";
                case C:
                    return "StrictMode";
                case I:
                    return "Suspense";
                case P:
                    return "SuspenseList"
                }
                if ("object" == typeof e)
                    switch (e.$$typeof) {
                    case _:
                        return (e.displayName || "Context") + ".Consumer";
                    case M:
                        return (e._context.displayName || "Context") + ".Provider";
                    case T:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case N:
                        return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
                    case L:
                        t = e._payload,
                        e = e._init;
                        try {
                            return W(e(t))
                        } catch (e) {}
                    }
                return null
            }
            function B(e) {
                var t = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = t.render).displayName || e.name || "",
                    t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return W(t);
                case 8:
                    return t === C ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" == typeof t)
                        return t.displayName || t.name || null;
                    if ("string" == typeof t)
                        return t
                }
                return null
            }
            function V(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function $(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function X(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = $(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var l = n.get
                          , a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return l.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                a.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function Q(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = $(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function Y(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function q(e, t) {
                var n = t.checked;
                return D({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function Z(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = V(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function K(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }
            function G(e, t) {
                K(e, t);
                var n = V(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function J(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function ee(e, t, n) {
                "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;
            function ne(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var l = 0; l < n.length; l++)
                        t["$" + n[l]] = !0;
                    for (n = 0; n < e.length; n++)
                        l = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== l && (e[n].selected = l),
                        l && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + V(n),
                    t = null,
                    l = 0; l < e.length; l++) {
                        if (e[l].value === n)
                            return e[l].selected = !0,
                            void (r && (e[l].defaultSelected = !0));
                        null !== t || e[l].disabled || (t = e[l])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(a(91));
                return D({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function le(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(a(92));
                        if (te(n)) {
                            if (1 < n.length)
                                throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: V(n)
                }
            }
            function ae(e, t) {
                var n = V(t.value)
                  , r = V(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            function oe(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, de = (ce = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, t)
                }
                ))
            }
            : ce);
            function fe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , he = ["Webkit", "ms", "Moz", "O"];
            function me(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
            }
            function ge(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , l = me(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, l) : e[n] = l
                    }
            }
            Object.keys(pe).forEach((function(e) {
                he.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    pe[t] = pe[e]
                }
                ))
            }
            ));
            var ve = D({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ye(e, t) {
                if (t) {
                    if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(a(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(a(61))
                    }
                    if (null != t.style && "object" != typeof t.style)
                        throw Error(a(62))
                }
            }
            function be(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" == typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var we = null;
            function xe(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var ke = null
              , Se = null
              , Ce = null;
            function Ee(e) {
                if (e = bl(e)) {
                    if ("function" != typeof ke)
                        throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = xl(t),
                    ke(e.stateNode, e.type, t))
                }
            }
            function Me(e) {
                Se ? Ce ? Ce.push(e) : Ce = [e] : Se = e
            }
            function _e() {
                if (Se) {
                    var e = Se
                      , t = Ce;
                    if (Ce = Se = null,
                    Ee(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Ee(t[e])
                }
            }
            function Te(e, t) {
                return e(t)
            }
            function Ie() {}
            var Pe = !1;
            function Ne(e, t, n) {
                if (Pe)
                    return e(t, n);
                Pe = !0;
                try {
                    return Te(e, t, n)
                } finally {
                    Pe = !1,
                    (null !== Se || null !== Ce) && (Ie(),
                    _e())
                }
            }
            function Le(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = xl(n);
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" != typeof n)
                    throw Error(a(231, t, typeof n));
                return n
            }
            var Re = !1;
            if (c)
                try {
                    var ze = {};
                    Object.defineProperty(ze, "passive", {
                        get: function() {
                            Re = !0
                        }
                    }),
                    window.addEventListener("test", ze, ze),
                    window.removeEventListener("test", ze, ze)
                } catch (ce) {
                    Re = !1
                }
            function Oe(e, t, n, r, l, a, i, o, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u)
                } catch (e) {
                    this.onError(e)
                }
            }
            var Fe = !1
              , De = null
              , Ue = !1
              , Ae = null
              , He = {
                onError: function(e) {
                    Fe = !0,
                    De = e
                }
            };
            function je(e, t, n, r, l, a, i, o, s) {
                Fe = !1,
                De = null,
                Oe.apply(He, arguments)
            }
            function We(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 != (4098 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function Be(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function Ve(e) {
                if (We(e) !== e)
                    throw Error(a(188))
            }
            function $e(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = We(e)))
                            throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var l = n.return;
                        if (null === l)
                            break;
                        var i = l.alternate;
                        if (null === i) {
                            if (null !== (r = l.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (l.child === i.child) {
                            for (i = l.child; i; ) {
                                if (i === n)
                                    return Ve(l),
                                    e;
                                if (i === r)
                                    return Ve(l),
                                    t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return)
                            n = l,
                            r = i;
                        else {
                            for (var o = !1, s = l.child; s; ) {
                                if (s === n) {
                                    o = !0,
                                    n = l,
                                    r = i;
                                    break
                                }
                                if (s === r) {
                                    o = !0,
                                    r = l,
                                    n = i;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!o) {
                                for (s = i.child; s; ) {
                                    if (s === n) {
                                        o = !0,
                                        n = i,
                                        r = l;
                                        break
                                    }
                                    if (s === r) {
                                        o = !0,
                                        r = i,
                                        n = l;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!o)
                                    throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(a(190))
                    }
                    if (3 !== n.tag)
                        throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Xe(e) : null
            }
            function Xe(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var t = Xe(e);
                    if (null !== t)
                        return t;
                    e = e.sibling
                }
                return null
            }
            var Qe = l.unstable_scheduleCallback
              , Ye = l.unstable_cancelCallback
              , qe = l.unstable_shouldYield
              , Ze = l.unstable_requestPaint
              , Ke = l.unstable_now
              , Ge = l.unstable_getCurrentPriorityLevel
              , Je = l.unstable_ImmediatePriority
              , et = l.unstable_UserBlockingPriority
              , tt = l.unstable_NormalPriority
              , nt = l.unstable_LowPriority
              , rt = l.unstable_IdlePriority
              , lt = null
              , at = null
              , it = Math.clz32 ? Math.clz32 : function(e) {
                return 0 == (e >>>= 0) ? 32 : 31 - (ot(e) / st | 0) | 0
            }
              , ot = Math.log
              , st = Math.LN2
              , ut = 64
              , ct = 4194304;
            function dt(e) {
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function ft(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , l = e.suspendedLanes
                  , a = e.pingedLanes
                  , i = 268435455 & n;
                if (0 !== i) {
                    var o = i & ~l;
                    0 !== o ? r = dt(o) : 0 != (a &= i) && (r = dt(a))
                } else
                    0 != (i = n & ~l) ? r = dt(i) : 0 !== a && (r = dt(a));
                if (0 === r)
                    return 0;
                if (0 !== t && t !== r && 0 == (t & l) && ((l = r & -r) >= (a = t & -t) || 16 === l && 0 != (4194240 & a)))
                    return t;
                if (0 != (4 & r) && (r |= 16 & n),
                0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        l = 1 << (n = 31 - it(t)),
                        r |= e[n],
                        t &= ~l;
                return r
            }
            function pt(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1
                }
            }
            function ht(e) {
                return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function mt() {
                var e = ut;
                return 0 == (4194240 & (ut <<= 1)) && (ut = 64),
                e
            }
            function gt(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function vt(e, t, n) {
                e.pendingLanes |= t,
                536870912 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[t = 31 - it(t)] = n
            }
            function yt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - it(n)
                      , l = 1 << r;
                    l & t | e[r] & t && (e[r] |= t),
                    n &= ~l
                }
            }
            var bt = 0;
            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var xt, kt, St, Ct, Et, Mt = !1, _t = [], Tt = null, It = null, Pt = null, Nt = new Map, Lt = new Map, Rt = [], zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Ot(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Tt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    It = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Pt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Nt.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Lt.delete(t.pointerId)
                }
            }
            function Ft(e, t, n, r, l, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [l]
                },
                null !== t && null !== (t = bl(t)) && kt(t),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== l && -1 === t.indexOf(l) && t.push(l),
                e)
            }
            function Dt(e) {
                var t = yl(e.target);
                if (null !== t) {
                    var n = We(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Be(n)))
                                return e.blockedOn = t,
                                void Et(e.priority, (function() {
                                    St(n)
                                }
                                ))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function Ut(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = bl(n)) && kt(t),
                        e.blockedOn = n,
                        !1;
                    var r = new (n = e.nativeEvent).constructor(n.type,n);
                    we = r,
                    n.target.dispatchEvent(r),
                    we = null,
                    t.shift()
                }
                return !0
            }
            function At(e, t, n) {
                Ut(e) && n.delete(t)
            }
            function Ht() {
                Mt = !1,
                null !== Tt && Ut(Tt) && (Tt = null),
                null !== It && Ut(It) && (It = null),
                null !== Pt && Ut(Pt) && (Pt = null),
                Nt.forEach(At),
                Lt.forEach(At)
            }
            function jt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                Mt || (Mt = !0,
                l.unstable_scheduleCallback(l.unstable_NormalPriority, Ht)))
            }
            function Wt(e) {
                function t(t) {
                    return jt(t, e)
                }
                if (0 < _t.length) {
                    jt(_t[0], e);
                    for (var n = 1; n < _t.length; n++) {
                        var r = _t[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Tt && jt(Tt, e),
                null !== It && jt(It, e),
                null !== Pt && jt(Pt, e),
                Nt.forEach(t),
                Lt.forEach(t),
                n = 0; n < Rt.length; n++)
                    (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
                    Dt(n),
                    null === n.blockedOn && Rt.shift()
            }
            var Bt = w.ReactCurrentBatchConfig
              , Vt = !0;
            function $t(e, t, n, r) {
                var l = bt
                  , a = Bt.transition;
                Bt.transition = null;
                try {
                    bt = 1,
                    Qt(e, t, n, r)
                } finally {
                    bt = l,
                    Bt.transition = a
                }
            }
            function Xt(e, t, n, r) {
                var l = bt
                  , a = Bt.transition;
                Bt.transition = null;
                try {
                    bt = 4,
                    Qt(e, t, n, r)
                } finally {
                    bt = l,
                    Bt.transition = a
                }
            }
            function Qt(e, t, n, r) {
                if (Vt) {
                    var l = qt(e, t, n, r);
                    if (null === l)
                        Vr(e, t, r, Yt, n),
                        Ot(e, r);
                    else if (function(e, t, n, r, l) {
                        switch (t) {
                        case "focusin":
                            return Tt = Ft(Tt, e, t, n, r, l),
                            !0;
                        case "dragenter":
                            return It = Ft(It, e, t, n, r, l),
                            !0;
                        case "mouseover":
                            return Pt = Ft(Pt, e, t, n, r, l),
                            !0;
                        case "pointerover":
                            var a = l.pointerId;
                            return Nt.set(a, Ft(Nt.get(a) || null, e, t, n, r, l)),
                            !0;
                        case "gotpointercapture":
                            return a = l.pointerId,
                            Lt.set(a, Ft(Lt.get(a) || null, e, t, n, r, l)),
                            !0
                        }
                        return !1
                    }(l, e, t, n, r))
                        r.stopPropagation();
                    else if (Ot(e, r),
                    4 & t && -1 < zt.indexOf(e)) {
                        for (; null !== l; ) {
                            var a = bl(l);
                            if (null !== a && xt(a),
                            null === (a = qt(e, t, n, r)) && Vr(e, t, r, Yt, n),
                            a === l)
                                break;
                            l = a
                        }
                        null !== l && r.stopPropagation()
                    } else
                        Vr(e, t, r, null, n)
                }
            }
            var Yt = null;
            function qt(e, t, n, r) {
                if (Yt = null,
                null !== (e = yl(e = xe(r))))
                    if (null === (t = We(e)))
                        e = null;
                    else if (13 === (n = t.tag)) {
                        if (null !== (e = Be(t)))
                            return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null);
                return Yt = e,
                null
            }
            function Zt(e) {
                switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (Ge()) {
                    case Je:
                        return 1;
                    case et:
                        return 4;
                    case tt:
                    case nt:
                        return 16;
                    case rt:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var Kt = null
              , Gt = null
              , Jt = null;
            function en() {
                if (Jt)
                    return Jt;
                var e, t, n = Gt, r = n.length, l = "value"in Kt ? Kt.value : Kt.textContent, a = l.length;
                for (e = 0; e < r && n[e] === l[e]; e++)
                    ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === l[a - t]; t++)
                    ;
                return Jt = l.slice(e, 1 < t ? 1 - t : void 0)
            }
            function tn(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function nn() {
                return !0
            }
            function rn() {
                return !1
            }
            function ln(e) {
                function t(t, n, r, l, a) {
                    for (var i in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = l,
                    this.target = a,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(i) && (t = e[i],
                        this[i] = t ? t(l) : l[i]);
                    return this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? nn : rn,
                    this.isPropagationStopped = rn,
                    this
                }
                return D(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }),
                t
            }
            var an, on, sn, un = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, cn = ln(un), dn = D({}, un, {
                view: 0,
                detail: 0
            }), fn = ln(dn), pn = D({}, dn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: En,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (an = e.screenX - sn.screenX,
                    on = e.screenY - sn.screenY) : on = an = 0,
                    sn = e),
                    an)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : on
                }
            }), hn = ln(pn), mn = ln(D({}, pn, {
                dataTransfer: 0
            })), gn = ln(D({}, dn, {
                relatedTarget: 0
            })), vn = ln(D({}, un, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), yn = D({}, un, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), bn = ln(yn), wn = ln(D({}, un, {
                data: 0
            })), xn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, kn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Sn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Cn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
            }
            function En() {
                return Cn
            }
            var Mn = D({}, dn, {
                key: function(e) {
                    if (e.key) {
                        var t = xn[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: En,
                charCode: function(e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , _n = ln(Mn)
              , Tn = ln(D({}, pn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , In = ln(D({}, dn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: En
            }))
              , Pn = ln(D({}, un, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , Nn = D({}, pn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , Ln = ln(Nn)
              , Rn = [9, 13, 27, 32]
              , zn = c && "CompositionEvent"in window
              , On = null;
            c && "documentMode"in document && (On = document.documentMode);
            var Fn = c && "TextEvent"in window && !On
              , Dn = c && (!zn || On && 8 < On && 11 >= On)
              , Un = String.fromCharCode(32)
              , An = !1;
            function Hn(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Rn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function jn(e) {
                return "object" == typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Wn = !1
              , Bn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Vn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Bn[e.type] : "textarea" === t
            }
            function $n(e, t, n, r) {
                Me(r),
                0 < (t = Xr(t, "onChange")).length && (n = new cn("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Xn = null
              , Qn = null;
            function Yn(e) {
                Ur(e, 0)
            }
            function qn(e) {
                if (Q(wl(e)))
                    return e
            }
            function Zn(e, t) {
                if ("change" === e)
                    return t
            }
            var Kn = !1;
            if (c) {
                var Gn;
                if (c) {
                    var Jn = "oninput"in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Jn = "function" == typeof er.oninput
                    }
                    Gn = Jn
                } else
                    Gn = !1;
                Kn = Gn && (!document.documentMode || 9 < document.documentMode)
            }
            function tr() {
                Xn && (Xn.detachEvent("onpropertychange", nr),
                Qn = Xn = null)
            }
            function nr(e) {
                if ("value" === e.propertyName && qn(Qn)) {
                    var t = [];
                    $n(t, Qn, e, xe(e)),
                    Ne(Yn, t)
                }
            }
            function rr(e, t, n) {
                "focusin" === e ? (tr(),
                Qn = n,
                (Xn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }
            function lr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return qn(Qn)
            }
            function ar(e, t) {
                if ("click" === e)
                    return qn(t)
            }
            function ir(e, t) {
                if ("input" === e || "change" === e)
                    return qn(t)
            }
            var or = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
            ;
            function sr(e, t) {
                if (or(e, t))
                    return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var l = n[r];
                    if (!d.call(t, l) || !or(e[l], t[l]))
                        return !1
                }
                return !0
            }
            function ur(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, t) {
                var n, r = ur(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }
            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function fr() {
                for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = Y((e = t.contentWindow).document)
                }
                return t
            }
            function pr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            function hr(e) {
                var t = fr()
                  , n = e.focusedElem
                  , r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && pr(n))
                        if (t = r.start,
                        void 0 === (e = r.end) && (e = t),
                        "selectionStart"in n)
                            n.selectionStart = t,
                            n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var l = n.textContent.length
                              , a = Math.min(r.start, l);
                            r = void 0 === r.end ? a : Math.min(r.end, l),
                            !e.extend && a > r && (l = r,
                            r = a,
                            a = l),
                            l = cr(n, a);
                            var i = cr(n, r);
                            l && i && (1 !== e.rangeCount || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(l.node, l.offset),
                            e.removeAllRanges(),
                            a > r ? (e.addRange(t),
                            e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                            e.addRange(t)))
                        }
                    for (t = [],
                    e = n; e = e.parentNode; )
                        1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" == typeof n.focus && n.focus(),
                    n = 0; n < t.length; n++)
                        (e = t[n]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var mr = c && "documentMode"in document && 11 >= document.documentMode
              , gr = null
              , vr = null
              , yr = null
              , br = !1;
            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == gr || gr !== Y(r) || (r = "selectionStart"in (r = gr) && pr(r) ? {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                yr && sr(yr, r) || (yr = r,
                0 < (r = Xr(vr, "onSelect")).length && (t = new cn("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = gr)))
            }
            function xr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var kr = {
                animationend: xr("Animation", "AnimationEnd"),
                animationiteration: xr("Animation", "AnimationIteration"),
                animationstart: xr("Animation", "AnimationStart"),
                transitionend: xr("Transition", "TransitionEnd")
            }
              , Sr = {}
              , Cr = {};
            function Er(e) {
                if (Sr[e])
                    return Sr[e];
                if (!kr[e])
                    return e;
                var t, n = kr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Cr)
                        return Sr[e] = n[t];
                return e
            }
            c && (Cr = document.createElement("div").style,
            "AnimationEvent"in window || (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
            "TransitionEvent"in window || delete kr.transitionend.transition);
            var Mr = Er("animationend")
              , _r = Er("animationiteration")
              , Tr = Er("animationstart")
              , Ir = Er("transitionend")
              , Pr = new Map
              , Nr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function Lr(e, t) {
                Pr.set(e, t),
                s(t, [e])
            }
            for (var Rr = 0; Rr < Nr.length; Rr++) {
                var zr = Nr[Rr];
                Lr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)))
            }
            Lr(Mr, "onAnimationEnd"),
            Lr(_r, "onAnimationIteration"),
            Lr(Tr, "onAnimationStart"),
            Lr("dblclick", "onDoubleClick"),
            Lr("focusin", "onFocus"),
            Lr("focusout", "onBlur"),
            Lr(Ir, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Fr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
            function Dr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                function(e, t, n, r, l, i, o, s, u) {
                    if (je.apply(this, arguments),
                    Fe) {
                        if (!Fe)
                            throw Error(a(198));
                        var c = De;
                        Fe = !1,
                        De = null,
                        Ue || (Ue = !0,
                        Ae = c)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            function Ur(e, t) {
                t = 0 != (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , l = r.event;
                    r = r.listeners;
                    e: {
                        var a = void 0;
                        if (t)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var o = r[i]
                                  , s = o.instance
                                  , u = o.currentTarget;
                                if (o = o.listener,
                                s !== a && l.isPropagationStopped())
                                    break e;
                                Dr(l, o, u),
                                a = s
                            }
                        else
                            for (i = 0; i < r.length; i++) {
                                if (s = (o = r[i]).instance,
                                u = o.currentTarget,
                                o = o.listener,
                                s !== a && l.isPropagationStopped())
                                    break e;
                                Dr(l, o, u),
                                a = s
                            }
                    }
                }
                if (Ue)
                    throw e = Ae,
                    Ue = !1,
                    Ae = null,
                    e
            }
            function Ar(e, t) {
                var n = t[ml];
                void 0 === n && (n = t[ml] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Br(t, e, 2, !1),
                n.add(r))
            }
            function Hr(e, t, n) {
                var r = 0;
                t && (r |= 4),
                Br(n, e, r, t)
            }
            var jr = "_reactListening" + Math.random().toString(36).slice(2);
            function Wr(e) {
                if (!e[jr]) {
                    e[jr] = !0,
                    i.forEach((function(t) {
                        "selectionchange" !== t && (Fr.has(t) || Hr(t, !1, e),
                        Hr(t, !0, e))
                    }
                    ));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[jr] || (t[jr] = !0,
                    Hr("selectionchange", !1, t))
                }
            }
            function Br(e, t, n, r) {
                switch (Zt(t)) {
                case 1:
                    var l = $t;
                    break;
                case 4:
                    l = Xt;
                    break;
                default:
                    l = Qt
                }
                n = l.bind(null, t, n, e),
                l = void 0,
                !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (l = !0),
                r ? void 0 !== l ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: l
                }) : e.addEventListener(t, n, !0) : void 0 !== l ? e.addEventListener(t, n, {
                    passive: l
                }) : e.addEventListener(t, n, !1)
            }
            function Vr(e, t, n, r, l) {
                var a = r;
                if (0 == (1 & t) && 0 == (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var o = r.stateNode.containerInfo;
                            if (o === l || 8 === o.nodeType && o.parentNode === l)
                                break;
                            if (4 === i)
                                for (i = r.return; null !== i; ) {
                                    var s = i.tag;
                                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === l || 8 === s.nodeType && s.parentNode === l))
                                        return;
                                    i = i.return
                                }
                            for (; null !== o; ) {
                                if (null === (i = yl(o)))
                                    return;
                                if (5 === (s = i.tag) || 6 === s) {
                                    r = a = i;
                                    continue e
                                }
                                o = o.parentNode
                            }
                        }
                        r = r.return
                    }
                Ne((function() {
                    var r = a
                      , l = xe(n)
                      , i = [];
                    e: {
                        var o = Pr.get(e);
                        if (void 0 !== o) {
                            var s = cn
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tn(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                s = _n;
                                break;
                            case "focusin":
                                u = "focus",
                                s = gn;
                                break;
                            case "focusout":
                                u = "blur",
                                s = gn;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = gn;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = hn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = mn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = In;
                                break;
                            case Mr:
                            case _r:
                            case Tr:
                                s = vn;
                                break;
                            case Ir:
                                s = Pn;
                                break;
                            case "scroll":
                                s = fn;
                                break;
                            case "wheel":
                                s = Ln;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = bn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = Tn
                            }
                            var c = 0 != (4 & t)
                              , d = !c && "scroll" === e
                              , f = c ? null !== o ? o + "Capture" : null : o;
                            c = [];
                            for (var p, h = r; null !== h; ) {
                                var m = (p = h).stateNode;
                                if (5 === p.tag && null !== m && (p = m,
                                null !== f && null != (m = Le(h, f)) && c.push($r(h, m, p))),
                                d)
                                    break;
                                h = h.return
                            }
                            0 < c.length && (o = new s(o,u,null,n,l),
                            i.push({
                                event: o,
                                listeners: c
                            }))
                        }
                    }
                    if (0 == (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e,
                        (!(o = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !yl(u) && !u[hl]) && (s || o) && (o = l.window === l ? l : (o = l.ownerDocument) ? o.defaultView || o.parentWindow : window,
                        s ? (s = r,
                        null !== (u = (u = n.relatedTarget || n.toElement) ? yl(u) : null) && (u !== (d = We(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null,
                        u = r),
                        s !== u)) {
                            if (c = hn,
                            m = "onMouseLeave",
                            f = "onMouseEnter",
                            h = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Tn,
                            m = "onPointerLeave",
                            f = "onPointerEnter",
                            h = "pointer"),
                            d = null == s ? o : wl(s),
                            p = null == u ? o : wl(u),
                            (o = new c(m,h + "leave",s,n,l)).target = d,
                            o.relatedTarget = p,
                            m = null,
                            yl(l) === r && ((c = new c(f,h + "enter",u,n,l)).target = p,
                            c.relatedTarget = d,
                            m = c),
                            d = m,
                            s && u)
                                e: {
                                    for (f = u,
                                    h = 0,
                                    p = c = s; p; p = Qr(p))
                                        h++;
                                    for (p = 0,
                                    m = f; m; m = Qr(m))
                                        p++;
                                    for (; 0 < h - p; )
                                        c = Qr(c),
                                        h--;
                                    for (; 0 < p - h; )
                                        f = Qr(f),
                                        p--;
                                    for (; h--; ) {
                                        if (c === f || null !== f && c === f.alternate)
                                            break e;
                                        c = Qr(c),
                                        f = Qr(f)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== s && Yr(i, o, s, c, !1),
                            null !== u && null !== d && Yr(i, d, u, c, !0)
                        }
                        if ("select" === (s = (o = r ? wl(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === s && "file" === o.type)
                            var g = Zn;
                        else if (Vn(o))
                            if (Kn)
                                g = ir;
                            else {
                                g = lr;
                                var v = rr
                            }
                        else
                            (s = o.nodeName) && "input" === s.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (g = ar);
                        switch (g && (g = g(e, r)) ? $n(i, g, n, l) : (v && v(e, o, r),
                        "focusout" === e && (v = o._wrapperState) && v.controlled && "number" === o.type && ee(o, "number", o.value)),
                        v = r ? wl(r) : window,
                        e) {
                        case "focusin":
                            (Vn(v) || "true" === v.contentEditable) && (gr = v,
                            vr = r,
                            yr = null);
                            break;
                        case "focusout":
                            yr = vr = gr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            br = !1,
                            wr(i, n, l);
                            break;
                        case "selectionchange":
                            if (mr)
                                break;
                        case "keydown":
                        case "keyup":
                            wr(i, n, l)
                        }
                        var y;
                        if (zn)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Wn ? Hn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Dn && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = en()) : (Gt = "value"in (Kt = l) ? Kt.value : Kt.textContent,
                        Wn = !0)),
                        0 < (v = Xr(r, b)).length && (b = new wn(b,e,null,n,l),
                        i.push({
                            event: b,
                            listeners: v
                        }),
                        (y || null !== (y = jn(n))) && (b.data = y))),
                        (y = Fn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return jn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (An = !0,
                                Un);
                            case "textInput":
                                return (e = t.data) === Un && An ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Wn)
                                return "compositionend" === e || !zn && Hn(e, t) ? (e = en(),
                                Jt = Gt = Kt = null,
                                Wn = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Dn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && 0 < (r = Xr(r, "onBeforeInput")).length && (l = new wn("onBeforeInput","beforeinput",null,n,l),
                        i.push({
                            event: l,
                            listeners: r
                        }),
                        l.data = y)
                    }
                    Ur(i, t)
                }
                ))
            }
            function $r(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function Xr(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var l = e
                      , a = l.stateNode;
                    5 === l.tag && null !== a && (l = a,
                    null != (a = Le(e, n)) && r.unshift($r(e, a, l)),
                    null != (a = Le(e, t)) && r.push($r(e, a, l))),
                    e = e.return
                }
                return r
            }
            function Qr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function Yr(e, t, n, r, l) {
                for (var a = t._reactName, i = []; null !== n && n !== r; ) {
                    var o = n
                      , s = o.alternate
                      , u = o.stateNode;
                    if (null !== s && s === r)
                        break;
                    5 === o.tag && null !== u && (o = u,
                    l ? null != (s = Le(n, a)) && i.unshift($r(n, s, o)) : l || null != (s = Le(n, a)) && i.push($r(n, s, o))),
                    n = n.return
                }
                0 !== i.length && e.push({
                    event: t,
                    listeners: i
                })
            }
            var qr = /\r\n?/g
              , Zr = /\u0000|\uFFFD/g;
            function Kr(e) {
                return ("string" == typeof e ? e : "" + e).replace(qr, "\n").replace(Zr, "")
            }
            function Gr(e, t, n) {
                if (t = Kr(t),
                Kr(e) !== t && n)
                    throw Error(a(425))
            }
            function Jr() {}
            var el = null
              , tl = null;
            function nl(e, t) {
                return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var rl = "function" == typeof setTimeout ? setTimeout : void 0
              , ll = "function" == typeof clearTimeout ? clearTimeout : void 0
              , al = "function" == typeof Promise ? Promise : void 0
              , il = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== al ? function(e) {
                return al.resolve(null).then(e).catch(ol)
            }
            : rl;
            function ol(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function sl(e, t) {
                var n = t
                  , r = 0;
                do {
                    var l = n.nextSibling;
                    if (e.removeChild(n),
                    l && 8 === l.nodeType)
                        if ("/$" === (n = l.data)) {
                            if (0 === r)
                                return e.removeChild(l),
                                void Wt(t);
                            r--
                        } else
                            "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = l
                } while (n);
                Wt(t)
            }
            function ul(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                            break;
                        if ("/$" === t)
                            return null
                    }
                }
                return e
            }
            function cl(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var dl = Math.random().toString(36).slice(2)
              , fl = "__reactFiber$" + dl
              , pl = "__reactProps$" + dl
              , hl = "__reactContainer$" + dl
              , ml = "__reactEvents$" + dl
              , gl = "__reactListeners$" + dl
              , vl = "__reactHandles$" + dl;
            function yl(e) {
                var t = e[fl];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[hl] || n[fl]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = cl(e); null !== e; ) {
                                if (n = e[fl])
                                    return n;
                                e = cl(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function bl(e) {
                return !(e = e[fl] || e[hl]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function wl(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(a(33))
            }
            function xl(e) {
                return e[pl] || null
            }
            var kl = []
              , Sl = -1;
            function Cl(e) {
                return {
                    current: e
                }
            }
            function El(e) {
                0 > Sl || (e.current = kl[Sl],
                kl[Sl] = null,
                Sl--)
            }
            function Ml(e, t) {
                Sl++,
                kl[Sl] = e.current,
                e.current = t
            }
            var _l = {}
              , Tl = Cl(_l)
              , Il = Cl(!1)
              , Pl = _l;
            function Nl(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return _l;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var l, a = {};
                for (l in n)
                    a[l] = t[l];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = a),
                a
            }
            function Ll(e) {
                return null != e.childContextTypes
            }
            function Rl() {
                El(Il),
                El(Tl)
            }
            function zl(e, t, n) {
                if (Tl.current !== _l)
                    throw Error(a(168));
                Ml(Tl, t),
                Ml(Il, n)
            }
            function Ol(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes,
                "function" != typeof r.getChildContext)
                    return n;
                for (var l in r = r.getChildContext())
                    if (!(l in t))
                        throw Error(a(108, B(e) || "Unknown", l));
                return D({}, n, r)
            }
            function Fl(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _l,
                Pl = Tl.current,
                Ml(Tl, e),
                Ml(Il, Il.current),
                !0
            }
            function Dl(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(a(169));
                n ? (e = Ol(e, t, Pl),
                r.__reactInternalMemoizedMergedChildContext = e,
                El(Il),
                El(Tl),
                Ml(Tl, e)) : El(Il),
                Ml(Il, n)
            }
            var Ul = null
              , Al = !1
              , Hl = !1;
            function jl(e) {
                null === Ul ? Ul = [e] : Ul.push(e)
            }
            function Wl() {
                if (!Hl && null !== Ul) {
                    Hl = !0;
                    var e = 0
                      , t = bt;
                    try {
                        var n = Ul;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Ul = null,
                        Al = !1
                    } catch (t) {
                        throw null !== Ul && (Ul = Ul.slice(e + 1)),
                        Qe(Je, Wl),
                        t
                    } finally {
                        bt = t,
                        Hl = !1
                    }
                }
                return null
            }
            var Bl = []
              , Vl = 0
              , $l = null
              , Xl = 0
              , Ql = []
              , Yl = 0
              , ql = null
              , Zl = 1
              , Kl = "";
            function Gl(e, t) {
                Bl[Vl++] = Xl,
                Bl[Vl++] = $l,
                $l = e,
                Xl = t
            }
            function Jl(e, t, n) {
                Ql[Yl++] = Zl,
                Ql[Yl++] = Kl,
                Ql[Yl++] = ql,
                ql = e;
                var r = Zl;
                e = Kl;
                var l = 32 - it(r) - 1;
                r &= ~(1 << l),
                n += 1;
                var a = 32 - it(t) + l;
                if (30 < a) {
                    var i = l - l % 5;
                    a = (r & (1 << i) - 1).toString(32),
                    r >>= i,
                    l -= i,
                    Zl = 1 << 32 - it(t) + l | n << l | r,
                    Kl = a + e
                } else
                    Zl = 1 << a | n << l | r,
                    Kl = e
            }
            function ea(e) {
                null !== e.return && (Gl(e, 1),
                Jl(e, 1, 0))
            }
            function ta(e) {
                for (; e === $l; )
                    $l = Bl[--Vl],
                    Bl[Vl] = null,
                    Xl = Bl[--Vl],
                    Bl[Vl] = null;
                for (; e === ql; )
                    ql = Ql[--Yl],
                    Ql[Yl] = null,
                    Kl = Ql[--Yl],
                    Ql[Yl] = null,
                    Zl = Ql[--Yl],
                    Ql[Yl] = null
            }
            var na = null
              , ra = null
              , la = !1
              , aa = null;
            function ia(e, t) {
                var n = Nu(5, null, null, 0);
                n.elementType = "DELETED",
                n.stateNode = t,
                n.return = e,
                null === (t = e.deletions) ? (e.deletions = [n],
                e.flags |= 16) : t.push(n)
            }
            function oa(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    na = e,
                    ra = ul(t.firstChild),
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    na = e,
                    ra = null,
                    !0);
                case 13:
                    return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== ql ? {
                        id: Zl,
                        overflow: Kl
                    } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    (n = Nu(18, null, null, 0)).stateNode = t,
                    n.return = e,
                    e.child = n,
                    na = e,
                    ra = null,
                    !0);
                default:
                    return !1
                }
            }
            function sa(e) {
                return 0 != (1 & e.mode) && 0 == (128 & e.flags)
            }
            function ua(e) {
                if (la) {
                    var t = ra;
                    if (t) {
                        var n = t;
                        if (!oa(e, t)) {
                            if (sa(e))
                                throw Error(a(418));
                            t = ul(n.nextSibling);
                            var r = na;
                            t && oa(e, t) ? ia(r, n) : (e.flags = -4097 & e.flags | 2,
                            la = !1,
                            na = e)
                        }
                    } else {
                        if (sa(e))
                            throw Error(a(418));
                        e.flags = -4097 & e.flags | 2,
                        la = !1,
                        na = e
                    }
                }
            }
            function ca(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                na = e
            }
            function da(e) {
                if (e !== na)
                    return !1;
                if (!la)
                    return ca(e),
                    la = !0,
                    !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !nl(e.type, e.memoizedProps)),
                t && (t = ra)) {
                    if (sa(e))
                        throw fa(),
                        Error(a(418));
                    for (; t; )
                        ia(e, t),
                        t = ul(t.nextSibling)
                }
                if (ca(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(a(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        ra = ul(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        ra = null
                    }
                } else
                    ra = na ? ul(e.stateNode.nextSibling) : null;
                return !0
            }
            function fa() {
                for (var e = ra; e; )
                    e = ul(e.nextSibling)
            }
            function pa() {
                ra = na = null,
                la = !1
            }
            function ha(e) {
                null === aa ? aa = [e] : aa.push(e)
            }
            var ma = w.ReactCurrentBatchConfig;
            function ga(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = D({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var va = Cl(null)
              , ya = null
              , ba = null
              , wa = null;
            function xa() {
                wa = ba = ya = null
            }
            function ka(e) {
                var t = va.current;
                El(va),
                e._currentValue = t
            }
            function Sa(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function Ca(e, t) {
                ya = e,
                wa = ba = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wo = !0),
                e.firstContext = null)
            }
            function Ea(e) {
                var t = e._currentValue;
                if (wa !== e)
                    if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    },
                    null === ba) {
                        if (null === ya)
                            throw Error(a(308));
                        ba = e,
                        ya.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        ba = ba.next = e;
                return t
            }
            var Ma = null;
            function _a(e) {
                null === Ma ? Ma = [e] : Ma.push(e)
            }
            function Ta(e, t, n, r) {
                var l = t.interleaved;
                return null === l ? (n.next = n,
                _a(t)) : (n.next = l.next,
                l.next = n),
                t.interleaved = n,
                Ia(e, r)
            }
            function Ia(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            var Pa = !1;
            function Na(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function La(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function Ra(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function za(e, t, n) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 != (2 & Ts)) {
                    var l = r.pending;
                    return null === l ? t.next = t : (t.next = l.next,
                    l.next = t),
                    r.pending = t,
                    Ia(e, n)
                }
                return null === (l = r.interleaved) ? (t.next = t,
                _a(r)) : (t.next = l.next,
                l.next = t),
                r.interleaved = t,
                Ia(e, n)
            }
            function Oa(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 != (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    yt(e, n)
                }
            }
            function Fa(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var l = null
                      , a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? l = a = i : a = a.next = i,
                            n = n.next
                        } while (null !== n);
                        null === a ? l = a = t : a = a.next = t
                    } else
                        l = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: l,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function Da(e, t, n, r) {
                var l = e.updateQueue;
                Pa = !1;
                var a = l.firstBaseUpdate
                  , i = l.lastBaseUpdate
                  , o = l.shared.pending;
                if (null !== o) {
                    l.shared.pending = null;
                    var s = o
                      , u = s.next;
                    s.next = null,
                    null === i ? a = u : i.next = u,
                    i = s;
                    var c = e.alternate;
                    null !== c && (o = (c = c.updateQueue).lastBaseUpdate) !== i && (null === o ? c.firstBaseUpdate = u : o.next = u,
                    c.lastBaseUpdate = s)
                }
                if (null !== a) {
                    var d = l.baseState;
                    for (i = 0,
                    c = u = s = null,
                    o = a; ; ) {
                        var f = o.lane
                          , p = o.eventTime;
                        if ((r & f) === f) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            });
                            e: {
                                var h = e
                                  , m = o;
                                switch (f = t,
                                p = n,
                                m.tag) {
                                case 1:
                                    if ("function" == typeof (h = m.payload)) {
                                        d = h.call(p, d, f);
                                        break e
                                    }
                                    d = h;
                                    break e;
                                case 3:
                                    h.flags = -65537 & h.flags | 128;
                                case 0:
                                    if (null == (f = "function" == typeof (h = m.payload) ? h.call(p, d, f) : h))
                                        break e;
                                    d = D({}, d, f);
                                    break e;
                                case 2:
                                    Pa = !0
                                }
                            }
                            null !== o.callback && 0 !== o.lane && (e.flags |= 64,
                            null === (f = l.effects) ? l.effects = [o] : f.push(o))
                        } else
                            p = {
                                eventTime: p,
                                lane: f,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            },
                            null === c ? (u = c = p,
                            s = d) : c = c.next = p,
                            i |= f;
                        if (null === (o = o.next)) {
                            if (null === (o = l.shared.pending))
                                break;
                            o = (f = o).next,
                            f.next = null,
                            l.lastBaseUpdate = f,
                            l.shared.pending = null
                        }
                    }
                    if (null === c && (s = d),
                    l.baseState = s,
                    l.firstBaseUpdate = u,
                    l.lastBaseUpdate = c,
                    null !== (t = l.shared.interleaved)) {
                        l = t;
                        do {
                            i |= l.lane,
                            l = l.next
                        } while (l !== t)
                    } else
                        null === a && (l.shared.lanes = 0);
                    Fs |= i,
                    e.lanes = i,
                    e.memoizedState = d
                }
            }
            function Ua(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , l = r.callback;
                        if (null !== l) {
                            if (r.callback = null,
                            r = n,
                            "function" != typeof l)
                                throw Error(a(191, l));
                            l.call(r)
                        }
                    }
            }
            var Aa = (new r.Component).refs;
            function Ha(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : D({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var ja = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && We(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = eu()
                      , l = tu(e)
                      , a = Ra(r, l);
                    a.payload = t,
                    null != n && (a.callback = n),
                    null !== (t = za(e, a, l)) && (nu(t, e, l, r),
                    Oa(t, e, l))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = eu()
                      , l = tu(e)
                      , a = Ra(r, l);
                    a.tag = 1,
                    a.payload = t,
                    null != n && (a.callback = n),
                    null !== (t = za(e, a, l)) && (nu(t, e, l, r),
                    Oa(t, e, l))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = eu()
                      , r = tu(e)
                      , l = Ra(n, r);
                    l.tag = 2,
                    null != t && (l.callback = t),
                    null !== (t = za(e, l, r)) && (nu(t, e, r, n),
                    Oa(t, e, r))
                }
            };
            function Wa(e, t, n, r, l, a, i) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !(t.prototype && t.prototype.isPureReactComponent && sr(n, r) && sr(l, a))
            }
            function Ba(e, t, n) {
                var r = !1
                  , l = _l
                  , a = t.contextType;
                return "object" == typeof a && null !== a ? a = Ea(a) : (l = Ll(t) ? Pl : Tl.current,
                a = (r = null != (r = t.contextTypes)) ? Nl(e, l) : _l),
                t = new t(n,a),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = ja,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l,
                e.__reactInternalMemoizedMaskedChildContext = a),
                t
            }
            function Va(e, t, n, r) {
                e = t.state,
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && ja.enqueueReplaceState(t, t.state, null)
            }
            function $a(e, t, n, r) {
                var l = e.stateNode;
                l.props = n,
                l.state = e.memoizedState,
                l.refs = Aa,
                Na(e);
                var a = t.contextType;
                "object" == typeof a && null !== a ? l.context = Ea(a) : (a = Ll(t) ? Pl : Tl.current,
                l.context = Nl(e, a)),
                l.state = e.memoizedState,
                "function" == typeof (a = t.getDerivedStateFromProps) && (Ha(e, t, a, n),
                l.state = e.memoizedState),
                "function" == typeof t.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (t = l.state,
                "function" == typeof l.componentWillMount && l.componentWillMount(),
                "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
                t !== l.state && ja.enqueueReplaceState(l, l.state, null),
                Da(e, n, l, r),
                l.state = e.memoizedState),
                "function" == typeof l.componentDidMount && (e.flags |= 4194308)
            }
            function Xa(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(a(147, e));
                        var l = r
                          , i = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                            var t = l.refs;
                            t === Aa && (t = l.refs = {}),
                            null === e ? delete t[i] : t[i] = e
                        }
                        ,
                        t._stringRef = i,
                        t)
                    }
                    if ("string" != typeof e)
                        throw Error(a(284));
                    if (!n._owner)
                        throw Error(a(290, e))
                }
                return e
            }
            function Qa(e, t) {
                throw e = Object.prototype.toString.call(t),
                Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function Ya(e) {
                return (0,
                e._init)(e._payload)
            }
            function qa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function l(e, t) {
                    return (e = Ru(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function i(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2,
                    n) : r : (t.flags |= 2,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function o(t) {
                    return e && null === t.alternate && (t.flags |= 2),
                    t
                }
                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Du(n, e.mode, r)).return = e,
                    t) : ((t = l(t, n)).return = e,
                    t)
                }
                function u(e, t, n, r) {
                    var a = n.type;
                    return a === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === L && Ya(a) === t.type) ? ((r = l(t, n.props)).ref = Xa(e, t, n),
                    r.return = e,
                    r) : ((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Xa(e, t, n),
                    r.return = e,
                    r)
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Uu(n, e.mode, r)).return = e,
                    t) : ((t = l(t, n.children || [])).return = e,
                    t)
                }
                function d(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = Ou(n, e.mode, r, a)).return = e,
                    t) : ((t = l(t, n)).return = e,
                    t)
                }
                function f(e, t, n) {
                    if ("string" == typeof t && "" !== t || "number" == typeof t)
                        return (t = Du("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case x:
                            return (n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Xa(e, null, t),
                            n.return = e,
                            n;
                        case k:
                            return (t = Uu(t, e.mode, n)).return = e,
                            t;
                        case L:
                            return f(e, (0,
                            t._init)(t._payload), n)
                        }
                        if (te(t) || O(t))
                            return (t = Ou(t, e.mode, n, null)).return = e,
                            t;
                        Qa(e, t)
                    }
                    return null
                }
                function p(e, t, n, r) {
                    var l = null !== t ? t.key : null;
                    if ("string" == typeof n && "" !== n || "number" == typeof n)
                        return null !== l ? null : s(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case x:
                            return n.key === l ? u(e, t, n, r) : null;
                        case k:
                            return n.key === l ? c(e, t, n, r) : null;
                        case L:
                            return p(e, t, (l = n._init)(n._payload), r)
                        }
                        if (te(n) || O(n))
                            return null !== l ? null : d(e, t, n, r, null);
                        Qa(e, n)
                    }
                    return null
                }
                function h(e, t, n, r, l) {
                    if ("string" == typeof r && "" !== r || "number" == typeof r)
                        return s(t, e = e.get(n) || null, "" + r, l);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case x:
                            return u(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                        case k:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                        case L:
                            return h(e, t, n, (0,
                            r._init)(r._payload), l)
                        }
                        if (te(r) || O(r))
                            return d(t, e = e.get(n) || null, r, l, null);
                        Qa(t, r)
                    }
                    return null
                }
                function m(l, a, o, s) {
                    for (var u = null, c = null, d = a, m = a = 0, g = null; null !== d && m < o.length; m++) {
                        d.index > m ? (g = d,
                        d = null) : g = d.sibling;
                        var v = p(l, d, o[m], s);
                        if (null === v) {
                            null === d && (d = g);
                            break
                        }
                        e && d && null === v.alternate && t(l, d),
                        a = i(v, a, m),
                        null === c ? u = v : c.sibling = v,
                        c = v,
                        d = g
                    }
                    if (m === o.length)
                        return n(l, d),
                        la && Gl(l, m),
                        u;
                    if (null === d) {
                        for (; m < o.length; m++)
                            null !== (d = f(l, o[m], s)) && (a = i(d, a, m),
                            null === c ? u = d : c.sibling = d,
                            c = d);
                        return la && Gl(l, m),
                        u
                    }
                    for (d = r(l, d); m < o.length; m++)
                        null !== (g = h(d, l, m, o[m], s)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key),
                        a = i(g, a, m),
                        null === c ? u = g : c.sibling = g,
                        c = g);
                    return e && d.forEach((function(e) {
                        return t(l, e)
                    }
                    )),
                    la && Gl(l, m),
                    u
                }
                function g(l, o, s, u) {
                    var c = O(s);
                    if ("function" != typeof c)
                        throw Error(a(150));
                    if (null == (s = c.call(s)))
                        throw Error(a(151));
                    for (var d = c = null, m = o, g = o = 0, v = null, y = s.next(); null !== m && !y.done; g++,
                    y = s.next()) {
                        m.index > g ? (v = m,
                        m = null) : v = m.sibling;
                        var b = p(l, m, y.value, u);
                        if (null === b) {
                            null === m && (m = v);
                            break
                        }
                        e && m && null === b.alternate && t(l, m),
                        o = i(b, o, g),
                        null === d ? c = b : d.sibling = b,
                        d = b,
                        m = v
                    }
                    if (y.done)
                        return n(l, m),
                        la && Gl(l, g),
                        c;
                    if (null === m) {
                        for (; !y.done; g++,
                        y = s.next())
                            null !== (y = f(l, y.value, u)) && (o = i(y, o, g),
                            null === d ? c = y : d.sibling = y,
                            d = y);
                        return la && Gl(l, g),
                        c
                    }
                    for (m = r(l, m); !y.done; g++,
                    y = s.next())
                        null !== (y = h(m, l, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
                        o = i(y, o, g),
                        null === d ? c = y : d.sibling = y,
                        d = y);
                    return e && m.forEach((function(e) {
                        return t(l, e)
                    }
                    )),
                    la && Gl(l, g),
                    c
                }
                return function e(r, a, i, s) {
                    if ("object" == typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children),
                    "object" == typeof i && null !== i) {
                        switch (i.$$typeof) {
                        case x:
                            e: {
                                for (var u = i.key, c = a; null !== c; ) {
                                    if (c.key === u) {
                                        if ((u = i.type) === S) {
                                            if (7 === c.tag) {
                                                n(r, c.sibling),
                                                (a = l(c, i.props.children)).return = r,
                                                r = a;
                                                break e
                                            }
                                        } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === L && Ya(u) === c.type) {
                                            n(r, c.sibling),
                                            (a = l(c, i.props)).ref = Xa(r, c, i),
                                            a.return = r,
                                            r = a;
                                            break e
                                        }
                                        n(r, c);
                                        break
                                    }
                                    t(r, c),
                                    c = c.sibling
                                }
                                i.type === S ? ((a = Ou(i.props.children, r.mode, s, i.key)).return = r,
                                r = a) : ((s = zu(i.type, i.key, i.props, null, r.mode, s)).ref = Xa(r, a, i),
                                s.return = r,
                                r = s)
                            }
                            return o(r);
                        case k:
                            e: {
                                for (c = i.key; null !== a; ) {
                                    if (a.key === c) {
                                        if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                                            n(r, a.sibling),
                                            (a = l(a, i.children || [])).return = r,
                                            r = a;
                                            break e
                                        }
                                        n(r, a);
                                        break
                                    }
                                    t(r, a),
                                    a = a.sibling
                                }
                                (a = Uu(i, r.mode, s)).return = r,
                                r = a
                            }
                            return o(r);
                        case L:
                            return e(r, a, (c = i._init)(i._payload), s)
                        }
                        if (te(i))
                            return m(r, a, i, s);
                        if (O(i))
                            return g(r, a, i, s);
                        Qa(r, i)
                    }
                    return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i,
                    null !== a && 6 === a.tag ? (n(r, a.sibling),
                    (a = l(a, i)).return = r,
                    r = a) : (n(r, a),
                    (a = Du(i, r.mode, s)).return = r,
                    r = a),
                    o(r)) : n(r, a)
                }
            }
            var Za = qa(!0)
              , Ka = qa(!1)
              , Ga = {}
              , Ja = Cl(Ga)
              , ei = Cl(Ga)
              , ti = Cl(Ga);
            function ni(e) {
                if (e === Ga)
                    throw Error(a(174));
                return e
            }
            function ri(e, t) {
                switch (Ml(ti, t),
                Ml(ei, e),
                Ml(Ja, Ga),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                    break;
                default:
                    t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                El(Ja),
                Ml(Ja, t)
            }
            function li() {
                El(Ja),
                El(ei),
                El(ti)
            }
            function ai(e) {
                ni(ti.current);
                var t = ni(Ja.current)
                  , n = se(t, e.type);
                t !== n && (Ml(ei, e),
                Ml(Ja, n))
            }
            function ii(e) {
                ei.current === e && (El(Ja),
                El(ei))
            }
            var oi = Cl(0);
            function si(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var ui = [];
            function ci() {
                for (var e = 0; e < ui.length; e++)
                    ui[e]._workInProgressVersionPrimary = null;
                ui.length = 0
            }
            var di = w.ReactCurrentDispatcher
              , fi = w.ReactCurrentBatchConfig
              , pi = 0
              , hi = null
              , mi = null
              , gi = null
              , vi = !1
              , yi = !1
              , bi = 0
              , wi = 0;
            function xi() {
                throw Error(a(321))
            }
            function ki(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!or(e[n], t[n]))
                        return !1;
                return !0
            }
            function Si(e, t, n, r, l, i) {
                if (pi = i,
                hi = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                di.current = null === e || null === e.memoizedState ? io : oo,
                e = n(r, l),
                yi) {
                    i = 0;
                    do {
                        if (yi = !1,
                        bi = 0,
                        25 <= i)
                            throw Error(a(301));
                        i += 1,
                        gi = mi = null,
                        t.updateQueue = null,
                        di.current = so,
                        e = n(r, l)
                    } while (yi)
                }
                if (di.current = ao,
                t = null !== mi && null !== mi.next,
                pi = 0,
                gi = mi = hi = null,
                vi = !1,
                t)
                    throw Error(a(300));
                return e
            }
            function Ci() {
                var e = 0 !== bi;
                return bi = 0,
                e
            }
            function Ei() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === gi ? hi.memoizedState = gi = e : gi = gi.next = e,
                gi
            }
            function Mi() {
                if (null === mi) {
                    var e = hi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = mi.next;
                var t = null === gi ? hi.memoizedState : gi.next;
                if (null !== t)
                    gi = t,
                    mi = e;
                else {
                    if (null === e)
                        throw Error(a(310));
                    e = {
                        memoizedState: (mi = e).memoizedState,
                        baseState: mi.baseState,
                        baseQueue: mi.baseQueue,
                        queue: mi.queue,
                        next: null
                    },
                    null === gi ? hi.memoizedState = gi = e : gi = gi.next = e
                }
                return gi
            }
            function _i(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            function Ti(e) {
                var t = Mi()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = mi
                  , l = r.baseQueue
                  , i = n.pending;
                if (null !== i) {
                    if (null !== l) {
                        var o = l.next;
                        l.next = i.next,
                        i.next = o
                    }
                    r.baseQueue = l = i,
                    n.pending = null
                }
                if (null !== l) {
                    i = l.next,
                    r = r.baseState;
                    var s = o = null
                      , u = null
                      , c = i;
                    do {
                        var d = c.lane;
                        if ((pi & d) === d)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var f = {
                                lane: d,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = f,
                            o = r) : u = u.next = f,
                            hi.lanes |= d,
                            Fs |= d
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === u ? o = r : u.next = s,
                    or(r, t.memoizedState) || (wo = !0),
                    t.memoizedState = r,
                    t.baseState = o,
                    t.baseQueue = u,
                    n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    l = e;
                    do {
                        i = l.lane,
                        hi.lanes |= i,
                        Fs |= i,
                        l = l.next
                    } while (l !== e)
                } else
                    null === l && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }
            function Ii(e) {
                var t = Mi()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , l = n.pending
                  , i = t.memoizedState;
                if (null !== l) {
                    n.pending = null;
                    var o = l = l.next;
                    do {
                        i = e(i, o.action),
                        o = o.next
                    } while (o !== l);
                    or(i, t.memoizedState) || (wo = !0),
                    t.memoizedState = i,
                    null === t.baseQueue && (t.baseState = i),
                    n.lastRenderedState = i
                }
                return [i, r]
            }
            function Pi() {}
            function Ni(e, t) {
                var n = hi
                  , r = Mi()
                  , l = t()
                  , i = !or(r.memoizedState, l);
                if (i && (r.memoizedState = l,
                wo = !0),
                r = r.queue,
                Bi(zi.bind(null, n, r, e), [e]),
                r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
                    if (n.flags |= 2048,
                    Ui(9, Ri.bind(null, n, r, l, t), void 0, null),
                    null === Is)
                        throw Error(a(349));
                    0 != (30 & pi) || Li(n, t, l)
                }
                return l
            }
            function Li(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = hi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                hi.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function Ri(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                Oi(t) && Fi(e)
            }
            function zi(e, t, n) {
                return n((function() {
                    Oi(t) && Fi(e)
                }
                ))
            }
            function Oi(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !or(e, n)
                } catch (e) {
                    return !0
                }
            }
            function Fi(e) {
                var t = Ia(e, 1);
                null !== t && nu(t, e, 1, -1)
            }
            function Di(e) {
                var t = Ei();
                return "function" == typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: _i,
                    lastRenderedState: e
                },
                t.queue = e,
                e = e.dispatch = to.bind(null, hi, e),
                [t.memoizedState, e]
            }
            function Ui(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = hi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                hi.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function Ai() {
                return Mi().memoizedState
            }
            function Hi(e, t, n, r) {
                var l = Ei();
                hi.flags |= e,
                l.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function ji(e, t, n, r) {
                var l = Mi();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== mi) {
                    var i = mi.memoizedState;
                    if (a = i.destroy,
                    null !== r && ki(r, i.deps))
                        return void (l.memoizedState = Ui(t, n, a, r))
                }
                hi.flags |= e,
                l.memoizedState = Ui(1 | t, n, a, r)
            }
            function Wi(e, t) {
                return Hi(8390656, 8, e, t)
            }
            function Bi(e, t) {
                return ji(2048, 8, e, t)
            }
            function Vi(e, t) {
                return ji(4, 2, e, t)
            }
            function $i(e, t) {
                return ji(4, 4, e, t)
            }
            function Xi(e, t) {
                return "function" == typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null != t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function Qi(e, t, n) {
                return n = null != n ? n.concat([e]) : null,
                ji(4, 4, Xi.bind(null, t, e), n)
            }
            function Yi() {}
            function qi(e, t) {
                var n = Mi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function Zi(e, t) {
                var n = Mi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ki(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function Ki(e, t, n) {
                return 0 == (21 & pi) ? (e.baseState && (e.baseState = !1,
                wo = !0),
                e.memoizedState = n) : (or(n, t) || (n = mt(),
                hi.lanes |= n,
                Fs |= n,
                e.baseState = !0),
                t)
            }
            function Gi(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4,
                e(!0);
                var r = fi.transition;
                fi.transition = {};
                try {
                    e(!1),
                    t()
                } finally {
                    bt = n,
                    fi.transition = r
                }
            }
            function Ji() {
                return Mi().memoizedState
            }
            function eo(e, t, n) {
                var r = tu(e);
                n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                no(e) ? ro(t, n) : null !== (n = Ta(e, t, n, r)) && (nu(n, e, r, eu()),
                lo(n, t, r))
            }
            function to(e, t, n) {
                var r = tu(e)
                  , l = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (no(e))
                    ro(t, l);
                else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                        try {
                            var i = t.lastRenderedState
                              , o = a(i, n);
                            if (l.hasEagerState = !0,
                            l.eagerState = o,
                            or(o, i)) {
                                var s = t.interleaved;
                                return null === s ? (l.next = l,
                                _a(t)) : (l.next = s.next,
                                s.next = l),
                                void (t.interleaved = l)
                            }
                        } catch (e) {}
                    null !== (n = Ta(e, t, l, r)) && (nu(n, e, r, l = eu()),
                    lo(n, t, r))
                }
            }
            function no(e) {
                var t = e.alternate;
                return e === hi || null !== t && t === hi
            }
            function ro(e, t) {
                yi = vi = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function lo(e, t, n) {
                if (0 != (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    yt(e, n)
                }
            }
            var ao = {
                readContext: Ea,
                useCallback: xi,
                useContext: xi,
                useEffect: xi,
                useImperativeHandle: xi,
                useInsertionEffect: xi,
                useLayoutEffect: xi,
                useMemo: xi,
                useReducer: xi,
                useRef: xi,
                useState: xi,
                useDebugValue: xi,
                useDeferredValue: xi,
                useTransition: xi,
                useMutableSource: xi,
                useSyncExternalStore: xi,
                useId: xi,
                unstable_isNewReconciler: !1
            }
              , io = {
                readContext: Ea,
                useCallback: function(e, t) {
                    return Ei().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: Ea,
                useEffect: Wi,
                useImperativeHandle: function(e, t, n) {
                    return n = null != n ? n.concat([e]) : null,
                    Hi(4194308, 4, Xi.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return Hi(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return Hi(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = Ei();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = Ei();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    },
                    r.queue = e,
                    e = e.dispatch = eo.bind(null, hi, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    Ei().memoizedState = e
                },
                useState: Di,
                useDebugValue: Yi,
                useDeferredValue: function(e) {
                    return Ei().memoizedState = e
                },
                useTransition: function() {
                    var e = Di(!1)
                      , t = e[0];
                    return e = Gi.bind(null, e[1]),
                    Ei().memoizedState = e,
                    [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var r = hi
                      , l = Ei();
                    if (la) {
                        if (void 0 === n)
                            throw Error(a(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === Is)
                            throw Error(a(349));
                        0 != (30 & pi) || Li(r, t, n)
                    }
                    l.memoizedState = n;
                    var i = {
                        value: n,
                        getSnapshot: t
                    };
                    return l.queue = i,
                    Wi(zi.bind(null, r, i, e), [e]),
                    r.flags |= 2048,
                    Ui(9, Ri.bind(null, r, i, n, t), void 0, null),
                    n
                },
                useId: function() {
                    var e = Ei()
                      , t = Is.identifierPrefix;
                    if (la) {
                        var n = Kl;
                        t = ":" + t + "R" + (n = (Zl & ~(1 << 32 - it(Zl) - 1)).toString(32) + n),
                        0 < (n = bi++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = wi++).toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            }
              , oo = {
                readContext: Ea,
                useCallback: qi,
                useContext: Ea,
                useEffect: Bi,
                useImperativeHandle: Qi,
                useInsertionEffect: Vi,
                useLayoutEffect: $i,
                useMemo: Zi,
                useReducer: Ti,
                useRef: Ai,
                useState: function() {
                    return Ti(_i)
                },
                useDebugValue: Yi,
                useDeferredValue: function(e) {
                    return Ki(Mi(), mi.memoizedState, e)
                },
                useTransition: function() {
                    return [Ti(_i)[0], Mi().memoizedState]
                },
                useMutableSource: Pi,
                useSyncExternalStore: Ni,
                useId: Ji,
                unstable_isNewReconciler: !1
            }
              , so = {
                readContext: Ea,
                useCallback: qi,
                useContext: Ea,
                useEffect: Bi,
                useImperativeHandle: Qi,
                useInsertionEffect: Vi,
                useLayoutEffect: $i,
                useMemo: Zi,
                useReducer: Ii,
                useRef: Ai,
                useState: function() {
                    return Ii(_i)
                },
                useDebugValue: Yi,
                useDeferredValue: function(e) {
                    var t = Mi();
                    return null === mi ? t.memoizedState = e : Ki(t, mi.memoizedState, e)
                },
                useTransition: function() {
                    return [Ii(_i)[0], Mi().memoizedState]
                },
                useMutableSource: Pi,
                useSyncExternalStore: Ni,
                useId: Ji,
                unstable_isNewReconciler: !1
            };
            function uo(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do {
                        n += j(r),
                        r = r.return
                    } while (r);
                    var l = n
                } catch (e) {
                    l = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: l,
                    digest: null
                }
            }
            function co(e, t, n) {
                return {
                    value: e,
                    source: null,
                    stack: null != n ? n : null,
                    digest: null != t ? t : null
                }
            }
            function fo(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout((function() {
                        throw e
                    }
                    ))
                }
            }
            var po = "function" == typeof WeakMap ? WeakMap : Map;
            function ho(e, t, n) {
                (n = Ra(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Vs || (Vs = !0,
                    $s = r),
                    fo(0, t)
                }
                ,
                n
            }
            function mo(e, t, n) {
                (n = Ra(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var l = t.value;
                    n.payload = function() {
                        return r(l)
                    }
                    ,
                    n.callback = function() {
                        fo(0, t)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
                    fo(0, t),
                    "function" != typeof r && (null === Xs ? Xs = new Set([this]) : Xs.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                n
            }
            function go(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new po;
                    var l = new Set;
                    r.set(t, l)
                } else
                    void 0 === (l = r.get(t)) && (l = new Set,
                    r.set(t, l));
                l.has(n) || (l.add(n),
                e = Eu.bind(null, e, t, n),
                t.then(e, e))
            }
            function vo(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                    t)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function yo(e, t, n, r, l) {
                return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ra(-1, 1)).tag = 2,
                za(n, t, 1))),
                n.lanes |= 1),
                e) : (e.flags |= 65536,
                e.lanes = l,
                e)
            }
            var bo = w.ReactCurrentOwner
              , wo = !1;
            function xo(e, t, n, r) {
                t.child = null === e ? Ka(t, null, n, r) : Za(t, e.child, n, r)
            }
            function ko(e, t, n, r, l) {
                n = n.render;
                var a = t.ref;
                return Ca(t, l),
                r = Si(e, t, n, r, a, l),
                n = Ci(),
                null === e || wo ? (la && n && ea(t),
                t.flags |= 1,
                xo(e, t, r, l),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~l,
                Vo(e, t, l))
            }
            function So(e, t, n, r, l) {
                if (null === e) {
                    var a = n.type;
                    return "function" != typeof a || Lu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = zu(n.type, null, r, t, t.mode, l)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = a,
                    Co(e, t, a, r, l))
                }
                if (a = e.child,
                0 == (e.lanes & l)) {
                    var i = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref)
                        return Vo(e, t, l)
                }
                return t.flags |= 1,
                (e = Ru(a, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function Co(e, t, n, r, l) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (sr(a, r) && e.ref === t.ref) {
                        if (wo = !1,
                        t.pendingProps = r = a,
                        0 == (e.lanes & l))
                            return t.lanes = e.lanes,
                            Vo(e, t, l);
                        0 != (131072 & e.flags) && (wo = !0)
                    }
                }
                return _o(e, t, n, r, l)
            }
            function Eo(e, t, n) {
                var r = t.pendingProps
                  , l = r.children
                  , a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 == (1 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        Ml(Rs, Ls),
                        Ls |= n;
                    else {
                        if (0 == (1073741824 & n))
                            return e = null !== a ? a.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            t.updateQueue = null,
                            Ml(Rs, Ls),
                            Ls |= e,
                            null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== a ? a.baseLanes : n,
                        Ml(Rs, Ls),
                        Ls |= r
                    }
                else
                    null !== a ? (r = a.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    Ml(Rs, Ls),
                    Ls |= r;
                return xo(e, t, l, n),
                t.child
            }
            function Mo(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512,
                t.flags |= 2097152)
            }
            function _o(e, t, n, r, l) {
                var a = Ll(n) ? Pl : Tl.current;
                return a = Nl(t, a),
                Ca(t, l),
                n = Si(e, t, n, r, a, l),
                r = Ci(),
                null === e || wo ? (la && r && ea(t),
                t.flags |= 1,
                xo(e, t, n, l),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~l,
                Vo(e, t, l))
            }
            function To(e, t, n, r, l) {
                if (Ll(n)) {
                    var a = !0;
                    Fl(t)
                } else
                    a = !1;
                if (Ca(t, l),
                null === t.stateNode)
                    Bo(e, t),
                    Ba(t, n, r),
                    $a(t, n, r, l),
                    r = !0;
                else if (null === e) {
                    var i = t.stateNode
                      , o = t.memoizedProps;
                    i.props = o;
                    var s = i.context
                      , u = n.contextType;
                    u = "object" == typeof u && null !== u ? Ea(u) : Nl(t, u = Ll(n) ? Pl : Tl.current);
                    var c = n.getDerivedStateFromProps
                      , d = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                    d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== r || s !== u) && Va(t, i, r, u),
                    Pa = !1;
                    var f = t.memoizedState;
                    i.state = f,
                    Da(t, r, i, l),
                    s = t.memoizedState,
                    o !== r || f !== s || Il.current || Pa ? ("function" == typeof c && (Ha(t, n, c, r),
                    s = t.memoizedState),
                    (o = Pa || Wa(t, n, o, r, f, s, u)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(),
                    "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = s),
                    i.props = r,
                    i.state = s,
                    i.context = u,
                    r = o) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    i = t.stateNode,
                    La(e, t),
                    o = t.memoizedProps,
                    u = t.type === t.elementType ? o : ga(t.type, o),
                    i.props = u,
                    d = t.pendingProps,
                    f = i.context,
                    s = "object" == typeof (s = n.contextType) && null !== s ? Ea(s) : Nl(t, s = Ll(n) ? Pl : Tl.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== d || f !== s) && Va(t, i, r, s),
                    Pa = !1,
                    f = t.memoizedState,
                    i.state = f,
                    Da(t, r, i, l);
                    var h = t.memoizedState;
                    o !== d || f !== h || Il.current || Pa ? ("function" == typeof p && (Ha(t, n, p, r),
                    h = t.memoizedState),
                    (u = Pa || Wa(t, n, u, r, f, h, s) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s),
                    "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = h),
                    i.props = r,
                    i.state = h,
                    i.context = s,
                    r = u) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return Io(e, t, n, r, a, l)
            }
            function Io(e, t, n, r, l, a) {
                Mo(e, t);
                var i = 0 != (128 & t.flags);
                if (!r && !i)
                    return l && Dl(t, n, !1),
                    Vo(e, t, a);
                r = t.stateNode,
                bo.current = t;
                var o = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && i ? (t.child = Za(t, e.child, null, a),
                t.child = Za(t, null, o, a)) : xo(e, t, o, a),
                t.memoizedState = r.state,
                l && Dl(t, n, !0),
                t.child
            }
            function Po(e) {
                var t = e.stateNode;
                t.pendingContext ? zl(0, t.pendingContext, t.pendingContext !== t.context) : t.context && zl(0, t.context, !1),
                ri(e, t.containerInfo)
            }
            function No(e, t, n, r, l) {
                return pa(),
                ha(l),
                t.flags |= 256,
                xo(e, t, n, r),
                t.child
            }
            var Lo, Ro, zo, Oo = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function Fo(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Do(e, t, n) {
                var r, l = t.pendingProps, i = oi.current, o = !1, s = 0 != (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
                r ? (o = !0,
                t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1),
                Ml(oi, 1 & i),
                null === e)
                    return ua(t),
                    null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824,
                    null) : (s = l.children,
                    e = l.fallback,
                    o ? (l = t.mode,
                    o = t.child,
                    s = {
                        mode: "hidden",
                        children: s
                    },
                    0 == (1 & l) && null !== o ? (o.childLanes = 0,
                    o.pendingProps = s) : o = Fu(s, l, 0, null),
                    e = Ou(e, l, n, null),
                    o.return = t,
                    e.return = t,
                    o.sibling = e,
                    t.child = o,
                    t.child.memoizedState = Fo(n),
                    t.memoizedState = Oo,
                    e) : Uo(t, s));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
                    return function(e, t, n, r, l, i, o) {
                        if (n)
                            return 256 & t.flags ? (t.flags &= -257,
                            Ao(e, t, o, r = co(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child,
                            t.flags |= 128,
                            null) : (i = r.fallback,
                            l = t.mode,
                            r = Fu({
                                mode: "visible",
                                children: r.children
                            }, l, 0, null),
                            (i = Ou(i, l, o, null)).flags |= 2,
                            r.return = t,
                            i.return = t,
                            r.sibling = i,
                            t.child = r,
                            0 != (1 & t.mode) && Za(t, e.child, null, o),
                            t.child.memoizedState = Fo(o),
                            t.memoizedState = Oo,
                            i);
                        if (0 == (1 & t.mode))
                            return Ao(e, t, o, null);
                        if ("$!" === l.data) {
                            if (r = l.nextSibling && l.nextSibling.dataset)
                                var s = r.dgst;
                            return r = s,
                            Ao(e, t, o, r = co(i = Error(a(419)), r, void 0))
                        }
                        if (s = 0 != (o & e.childLanes),
                        wo || s) {
                            if (null !== (r = Is)) {
                                switch (o & -o) {
                                case 4:
                                    l = 2;
                                    break;
                                case 16:
                                    l = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    l = 32;
                                    break;
                                case 536870912:
                                    l = 268435456;
                                    break;
                                default:
                                    l = 0
                                }
                                0 !== (l = 0 != (l & (r.suspendedLanes | o)) ? 0 : l) && l !== i.retryLane && (i.retryLane = l,
                                Ia(e, l),
                                nu(r, e, l, -1))
                            }
                            return mu(),
                            Ao(e, t, o, r = co(Error(a(421))))
                        }
                        return "$?" === l.data ? (t.flags |= 128,
                        t.child = e.child,
                        t = _u.bind(null, e),
                        l._reactRetry = t,
                        null) : (e = i.treeContext,
                        ra = ul(l.nextSibling),
                        na = t,
                        la = !0,
                        aa = null,
                        null !== e && (Ql[Yl++] = Zl,
                        Ql[Yl++] = Kl,
                        Ql[Yl++] = ql,
                        Zl = e.id,
                        Kl = e.overflow,
                        ql = t),
                        (t = Uo(t, r.children)).flags |= 4096,
                        t)
                    }(e, t, s, l, r, i, n);
                if (o) {
                    o = l.fallback,
                    s = t.mode,
                    r = (i = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: l.children
                    };
                    return 0 == (1 & s) && t.child !== i ? ((l = t.child).childLanes = 0,
                    l.pendingProps = u,
                    t.deletions = null) : (l = Ru(i, u)).subtreeFlags = 14680064 & i.subtreeFlags,
                    null !== r ? o = Ru(r, o) : (o = Ou(o, s, n, null)).flags |= 2,
                    o.return = t,
                    l.return = t,
                    l.sibling = o,
                    t.child = l,
                    l = o,
                    o = t.child,
                    s = null === (s = e.child.memoizedState) ? Fo(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    },
                    o.memoizedState = s,
                    o.childLanes = e.childLanes & ~n,
                    t.memoizedState = Oo,
                    l
                }
                return e = (o = e.child).sibling,
                l = Ru(o, {
                    mode: "visible",
                    children: l.children
                }),
                0 == (1 & t.mode) && (l.lanes = n),
                l.return = t,
                l.sibling = null,
                null !== e && (null === (n = t.deletions) ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
                t.child = l,
                t.memoizedState = null,
                l
            }
            function Uo(e, t) {
                return (t = Fu({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e,
                e.child = t
            }
            function Ao(e, t, n, r) {
                return null !== r && ha(r),
                Za(t, e.child, null, n),
                (e = Uo(t, t.pendingProps.children)).flags |= 2,
                t.memoizedState = null,
                e
            }
            function Ho(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                Sa(e.return, t, n)
            }
            function jo(e, t, n, r, l) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: l
                } : (a.isBackwards = t,
                a.rendering = null,
                a.renderingStartTime = 0,
                a.last = r,
                a.tail = n,
                a.tailMode = l)
            }
            function Wo(e, t, n) {
                var r = t.pendingProps
                  , l = r.revealOrder
                  , a = r.tail;
                if (xo(e, t, r.children, n),
                0 != (2 & (r = oi.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 != (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && Ho(e, n, t);
                            else if (19 === e.tag)
                                Ho(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (Ml(oi, r),
                0 == (1 & t.mode))
                    t.memoizedState = null;
                else
                    switch (l) {
                    case "forwards":
                        for (n = t.child,
                        l = null; null !== n; )
                            null !== (e = n.alternate) && null === si(e) && (l = n),
                            n = n.sibling;
                        null === (n = l) ? (l = t.child,
                        t.child = null) : (l = n.sibling,
                        n.sibling = null),
                        jo(t, !1, l, n, a);
                        break;
                    case "backwards":
                        for (n = null,
                        l = t.child,
                        t.child = null; null !== l; ) {
                            if (null !== (e = l.alternate) && null === si(e)) {
                                t.child = l;
                                break
                            }
                            e = l.sibling,
                            l.sibling = n,
                            n = l,
                            l = e
                        }
                        jo(t, !0, n, null, a);
                        break;
                    case "together":
                        jo(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function Bo(e, t) {
                0 == (1 & t.mode) && null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2)
            }
            function Vo(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                Fs |= t.lanes,
                0 == (n & t.childLanes))
                    return null;
                if (null !== e && t.child !== e.child)
                    throw Error(a(153));
                if (null !== t.child) {
                    for (n = Ru(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = Ru(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function $o(e, t) {
                if (!la)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Xo(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var l = e.child; null !== l; )
                        n |= l.lanes | l.childLanes,
                        r |= 14680064 & l.subtreeFlags,
                        r |= 14680064 & l.flags,
                        l.return = e,
                        l = l.sibling;
                else
                    for (l = e.child; null !== l; )
                        n |= l.lanes | l.childLanes,
                        r |= l.subtreeFlags,
                        r |= l.flags,
                        l.return = e,
                        l = l.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            function Qo(e, t, n) {
                var r = t.pendingProps;
                switch (ta(t),
                t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Xo(t),
                    null;
                case 1:
                case 17:
                    return Ll(t.type) && Rl(),
                    Xo(t),
                    null;
                case 3:
                    return r = t.stateNode,
                    li(),
                    El(Il),
                    El(Tl),
                    ci(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (da(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024,
                    null !== aa && (iu(aa),
                    aa = null))),
                    Xo(t),
                    null;
                case 5:
                    ii(t);
                    var l = ni(ti.current);
                    if (n = t.type,
                    null !== e && null != t.stateNode)
                        Ro(e, t, n, r),
                        e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(a(166));
                            return Xo(t),
                            null
                        }
                        if (e = ni(Ja.current),
                        da(t)) {
                            r = t.stateNode,
                            n = t.type;
                            var i = t.memoizedProps;
                            switch (r[fl] = t,
                            r[pl] = i,
                            e = 0 != (1 & t.mode),
                            n) {
                            case "dialog":
                                Ar("cancel", r),
                                Ar("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ar("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Or.length; l++)
                                    Ar(Or[l], r);
                                break;
                            case "source":
                                Ar("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ar("error", r),
                                Ar("load", r);
                                break;
                            case "details":
                                Ar("toggle", r);
                                break;
                            case "input":
                                Z(r, i),
                                Ar("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                },
                                Ar("invalid", r);
                                break;
                            case "textarea":
                                le(r, i),
                                Ar("invalid", r)
                            }
                            for (var s in ye(n, i),
                            l = null,
                            i)
                                if (i.hasOwnProperty(s)) {
                                    var u = i[s];
                                    "children" === s ? "string" == typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Gr(r.textContent, u, e),
                                    l = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Gr(r.textContent, u, e),
                                    l = ["children", "" + u]) : o.hasOwnProperty(s) && null != u && "onScroll" === s && Ar("scroll", r)
                                }
                            switch (n) {
                            case "input":
                                X(r),
                                J(r, i, !0);
                                break;
                            case "textarea":
                                X(r),
                                ie(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof i.onClick && (r.onclick = Jr)
                            }
                            r = l,
                            t.updateQueue = r,
                            null !== r && (t.flags |= 4)
                        } else {
                            s = 9 === l.nodeType ? l : l.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                            "select" === n && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                            e[fl] = t,
                            e[pl] = r,
                            Lo(e, t),
                            t.stateNode = e;
                            e: {
                                switch (s = be(n, r),
                                n) {
                                case "dialog":
                                    Ar("cancel", e),
                                    Ar("close", e),
                                    l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ar("load", e),
                                    l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < Or.length; l++)
                                        Ar(Or[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    Ar("error", e),
                                    l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ar("error", e),
                                    Ar("load", e),
                                    l = r;
                                    break;
                                case "details":
                                    Ar("toggle", e),
                                    l = r;
                                    break;
                                case "input":
                                    Z(e, r),
                                    l = q(e, r),
                                    Ar("invalid", e);
                                    break;
                                case "option":
                                default:
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    l = D({}, r, {
                                        value: void 0
                                    }),
                                    Ar("invalid", e);
                                    break;
                                case "textarea":
                                    le(e, r),
                                    l = re(e, r),
                                    Ar("invalid", e)
                                }
                                for (i in ye(n, l),
                                u = l)
                                    if (u.hasOwnProperty(i)) {
                                        var c = u[i];
                                        "style" === i ? ge(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (o.hasOwnProperty(i) ? null != c && "onScroll" === i && Ar("scroll", e) : null != c && b(e, i, c, s))
                                    }
                                switch (n) {
                                case "input":
                                    X(e),
                                    J(e, r, !1);
                                    break;
                                case "textarea":
                                    X(e),
                                    ie(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + V(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" == typeof l.onClick && (e.onclick = Jr)
                                }
                                switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                            }
                            r && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152)
                    }
                    return Xo(t),
                    null;
                case 6:
                    if (e && null != t.stateNode)
                        zo(0, t, e.memoizedProps, r);
                    else {
                        if ("string" != typeof r && null === t.stateNode)
                            throw Error(a(166));
                        if (n = ni(ti.current),
                        ni(Ja.current),
                        da(t)) {
                            if (r = t.stateNode,
                            n = t.memoizedProps,
                            r[fl] = t,
                            (i = r.nodeValue !== n) && null !== (e = na))
                                switch (e.tag) {
                                case 3:
                                    Gr(r.nodeValue, n, 0 != (1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 != (1 & e.mode))
                                }
                            i && (t.flags |= 4)
                        } else
                            (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fl] = t,
                            t.stateNode = r
                    }
                    return Xo(t),
                    null;
                case 13:
                    if (El(oi),
                    r = t.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (la && null !== ra && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                            fa(),
                            pa(),
                            t.flags |= 98560,
                            i = !1;
                        else if (i = da(t),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!i)
                                    throw Error(a(318));
                                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                                    throw Error(a(317));
                                i[fl] = t
                            } else
                                pa(),
                                0 == (128 & t.flags) && (t.memoizedState = null),
                                t.flags |= 4;
                            Xo(t),
                            i = !1
                        } else
                            null !== aa && (iu(aa),
                            aa = null),
                            i = !0;
                        if (!i)
                            return 65536 & t.flags ? t : null
                    }
                    return 0 != (128 & t.flags) ? (t.lanes = n,
                    t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192,
                    0 != (1 & t.mode) && (null === e || 0 != (1 & oi.current) ? 0 === zs && (zs = 3) : mu())),
                    null !== t.updateQueue && (t.flags |= 4),
                    Xo(t),
                    null);
                case 4:
                    return li(),
                    null === e && Wr(t.stateNode.containerInfo),
                    Xo(t),
                    null;
                case 10:
                    return ka(t.type._context),
                    Xo(t),
                    null;
                case 19:
                    if (El(oi),
                    null === (i = t.memoizedState))
                        return Xo(t),
                        null;
                    if (r = 0 != (128 & t.flags),
                    null === (s = i.rendering))
                        if (r)
                            $o(i, !1);
                        else {
                            if (0 !== zs || null !== e && 0 != (128 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = si(e))) {
                                        for (t.flags |= 128,
                                        $o(i, !1),
                                        null !== (r = s.updateQueue) && (t.updateQueue = r,
                                        t.flags |= 4),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child; null !== n; )
                                            e = r,
                                            (i = n).flags &= 14680066,
                                            null === (s = i.alternate) ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = s.childLanes,
                                            i.lanes = s.lanes,
                                            i.child = s.child,
                                            i.subtreeFlags = 0,
                                            i.deletions = null,
                                            i.memoizedProps = s.memoizedProps,
                                            i.memoizedState = s.memoizedState,
                                            i.updateQueue = s.updateQueue,
                                            i.type = s.type,
                                            e = s.dependencies,
                                            i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            n = n.sibling;
                                        return Ml(oi, 1 & oi.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== i.tail && Ke() > Ws && (t.flags |= 128,
                            r = !0,
                            $o(i, !1),
                            t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = si(s))) {
                                if (t.flags |= 128,
                                r = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.flags |= 4),
                                $o(i, !0),
                                null === i.tail && "hidden" === i.tailMode && !s.alternate && !la)
                                    return Xo(t),
                                    null
                            } else
                                2 * Ke() - i.renderingStartTime > Ws && 1073741824 !== n && (t.flags |= 128,
                                r = !0,
                                $o(i, !1),
                                t.lanes = 4194304);
                        i.isBackwards ? (s.sibling = t.child,
                        t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s,
                        i.last = s)
                    }
                    return null !== i.tail ? (t = i.tail,
                    i.rendering = t,
                    i.tail = t.sibling,
                    i.renderingStartTime = Ke(),
                    t.sibling = null,
                    n = oi.current,
                    Ml(oi, r ? 1 & n | 2 : 1 & n),
                    t) : (Xo(t),
                    null);
                case 22:
                case 23:
                    return du(),
                    r = null !== t.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (t.flags |= 8192),
                    r && 0 != (1 & t.mode) ? 0 != (1073741824 & Ls) && (Xo(t),
                    6 & t.subtreeFlags && (t.flags |= 8192)) : Xo(t),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(a(156, t.tag))
            }
            function Yo(e, t) {
                switch (ta(t),
                t.tag) {
                case 1:
                    return Ll(t.type) && Rl(),
                    65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 3:
                    return li(),
                    El(Il),
                    El(Tl),
                    ci(),
                    0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 5:
                    return ii(t),
                    null;
                case 13:
                    if (El(oi),
                    null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate)
                            throw Error(a(340));
                        pa()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 19:
                    return El(oi),
                    null;
                case 4:
                    return li(),
                    null;
                case 10:
                    return ka(t.type._context),
                    null;
                case 22:
                case 23:
                    return du(),
                    null;
                default:
                    return null
                }
            }
            Lo = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            Ro = function(e, t, n, r) {
                var l = e.memoizedProps;
                if (l !== r) {
                    e = t.stateNode,
                    ni(Ja.current);
                    var a, i = null;
                    switch (n) {
                    case "input":
                        l = q(e, l),
                        r = q(e, r),
                        i = [];
                        break;
                    case "select":
                        l = D({}, l, {
                            value: void 0
                        }),
                        r = D({}, r, {
                            value: void 0
                        }),
                        i = [];
                        break;
                    case "textarea":
                        l = re(e, l),
                        r = re(e, r),
                        i = [];
                        break;
                    default:
                        "function" != typeof l.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
                    }
                    for (c in ye(n, r),
                    n = null,
                    l)
                        if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
                            if ("style" === c) {
                                var s = l[c];
                                for (a in s)
                                    s.hasOwnProperty(a) && (n || (n = {}),
                                    n[a] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (o.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != l ? l[c] : void 0,
                        r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                            if ("style" === c)
                                if (s) {
                                    for (a in s)
                                        !s.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}),
                                        n[a] = "");
                                    for (a in u)
                                        u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}),
                                        n[a] = u[a])
                                } else
                                    n || (i || (i = []),
                                    i.push(c, n)),
                                    n = u;
                            else
                                "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != u && s !== u && (i = i || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (o.hasOwnProperty(c) ? (null != u && "onScroll" === c && Ar("scroll", e),
                                i || s === u || (i = [])) : (i = i || []).push(c, u))
                    }
                    n && (i = i || []).push("style", n);
                    var c = i;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }
            ,
            zo = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            }
            ;
            var qo = !1
              , Zo = !1
              , Ko = "function" == typeof WeakSet ? WeakSet : Set
              , Go = null;
            function Jo(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" == typeof n)
                        try {
                            n(null)
                        } catch (n) {
                            Cu(e, t, n)
                        }
                    else
                        n.current = null
            }
            function es(e, t, n) {
                try {
                    n()
                } catch (n) {
                    Cu(e, t, n)
                }
            }
            var ts = !1;
            function ns(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var l = r = r.next;
                    do {
                        if ((l.tag & e) === e) {
                            var a = l.destroy;
                            l.destroy = void 0,
                            void 0 !== a && es(t, n, a)
                        }
                        l = l.next
                    } while (l !== r)
                }
            }
            function rs(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function ls(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag,
                    e = n,
                    "function" == typeof t ? t(e) : t.current = e
                }
            }
            function as(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null,
                as(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && null !== (t = e.stateNode) && (delete t[fl],
                delete t[pl],
                delete t[ml],
                delete t[gl],
                delete t[vl]),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function is(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function os(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || is(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function ss(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr));
                else if (4 !== r && null !== (e = e.child))
                    for (ss(e, t, n),
                    e = e.sibling; null !== e; )
                        ss(e, t, n),
                        e = e.sibling
            }
            function us(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (us(e, t, n),
                    e = e.sibling; null !== e; )
                        us(e, t, n),
                        e = e.sibling
            }
            var cs = null
              , ds = !1;
            function fs(e, t, n) {
                for (n = n.child; null !== n; )
                    ps(e, t, n),
                    n = n.sibling
            }
            function ps(e, t, n) {
                if (at && "function" == typeof at.onCommitFiberUnmount)
                    try {
                        at.onCommitFiberUnmount(lt, n)
                    } catch (e) {}
                switch (n.tag) {
                case 5:
                    Zo || Jo(n, t);
                case 6:
                    var r = cs
                      , l = ds;
                    cs = null,
                    fs(e, t, n),
                    ds = l,
                    null !== (cs = r) && (ds ? (e = cs,
                    n = n.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cs.removeChild(n.stateNode));
                    break;
                case 18:
                    null !== cs && (ds ? (e = cs,
                    n = n.stateNode,
                    8 === e.nodeType ? sl(e.parentNode, n) : 1 === e.nodeType && sl(e, n),
                    Wt(e)) : sl(cs, n.stateNode));
                    break;
                case 4:
                    r = cs,
                    l = ds,
                    cs = n.stateNode.containerInfo,
                    ds = !0,
                    fs(e, t, n),
                    cs = r,
                    ds = l;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Zo && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                        l = r = r.next;
                        do {
                            var a = l
                              , i = a.destroy;
                            a = a.tag,
                            void 0 !== i && (0 != (2 & a) || 0 != (4 & a)) && es(n, t, i),
                            l = l.next
                        } while (l !== r)
                    }
                    fs(e, t, n);
                    break;
                case 1:
                    if (!Zo && (Jo(n, t),
                    "function" == typeof (r = n.stateNode).componentWillUnmount))
                        try {
                            r.props = n.memoizedProps,
                            r.state = n.memoizedState,
                            r.componentWillUnmount()
                        } catch (e) {
                            Cu(n, t, e)
                        }
                    fs(e, t, n);
                    break;
                case 21:
                    fs(e, t, n);
                    break;
                case 22:
                    1 & n.mode ? (Zo = (r = Zo) || null !== n.memoizedState,
                    fs(e, t, n),
                    Zo = r) : fs(e, t, n);
                    break;
                default:
                    fs(e, t, n)
                }
            }
            function hs(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Ko),
                    t.forEach((function(t) {
                        var r = Tu.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    }
                    ))
                }
            }
            function ms(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r];
                        try {
                            var i = e
                              , o = t
                              , s = o;
                            e: for (; null !== s; ) {
                                switch (s.tag) {
                                case 5:
                                    cs = s.stateNode,
                                    ds = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cs = s.stateNode.containerInfo,
                                    ds = !0;
                                    break e
                                }
                                s = s.return
                            }
                            if (null === cs)
                                throw Error(a(160));
                            ps(i, o, l),
                            cs = null,
                            ds = !1;
                            var u = l.alternate;
                            null !== u && (u.return = null),
                            l.return = null
                        } catch (e) {
                            Cu(l, t, e)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        gs(t, e),
                        t = t.sibling
            }
            function gs(e, t) {
                var n = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (ms(t, e),
                    vs(e),
                    4 & r) {
                        try {
                            ns(3, e, e.return),
                            rs(3, e)
                        } catch (t) {
                            Cu(e, e.return, t)
                        }
                        try {
                            ns(5, e, e.return)
                        } catch (t) {
                            Cu(e, e.return, t)
                        }
                    }
                    break;
                case 1:
                    ms(t, e),
                    vs(e),
                    512 & r && null !== n && Jo(n, n.return);
                    break;
                case 5:
                    if (ms(t, e),
                    vs(e),
                    512 & r && null !== n && Jo(n, n.return),
                    32 & e.flags) {
                        var l = e.stateNode;
                        try {
                            fe(l, "")
                        } catch (t) {
                            Cu(e, e.return, t)
                        }
                    }
                    if (4 & r && null != (l = e.stateNode)) {
                        var i = e.memoizedProps
                          , o = null !== n ? n.memoizedProps : i
                          , s = e.type
                          , u = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== u)
                            try {
                                "input" === s && "radio" === i.type && null != i.name && K(l, i),
                                be(s, o);
                                var c = be(s, i);
                                for (o = 0; o < u.length; o += 2) {
                                    var d = u[o]
                                      , f = u[o + 1];
                                    "style" === d ? ge(l, f) : "dangerouslySetInnerHTML" === d ? de(l, f) : "children" === d ? fe(l, f) : b(l, d, f, c)
                                }
                                switch (s) {
                                case "input":
                                    G(l, i);
                                    break;
                                case "textarea":
                                    ae(l, i);
                                    break;
                                case "select":
                                    var p = l._wrapperState.wasMultiple;
                                    l._wrapperState.wasMultiple = !!i.multiple;
                                    var h = i.value;
                                    null != h ? ne(l, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(l, !!i.multiple, i.defaultValue, !0) : ne(l, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                l[pl] = i
                            } catch (t) {
                                Cu(e, e.return, t)
                            }
                    }
                    break;
                case 6:
                    if (ms(t, e),
                    vs(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(a(162));
                        l = e.stateNode,
                        i = e.memoizedProps;
                        try {
                            l.nodeValue = i
                        } catch (t) {
                            Cu(e, e.return, t)
                        }
                    }
                    break;
                case 3:
                    if (ms(t, e),
                    vs(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                        try {
                            Wt(t.containerInfo)
                        } catch (t) {
                            Cu(e, e.return, t)
                        }
                    break;
                case 4:
                default:
                    ms(t, e),
                    vs(e);
                    break;
                case 13:
                    ms(t, e),
                    vs(e),
                    8192 & (l = e.child).flags && (i = null !== l.memoizedState,
                    l.stateNode.isHidden = i,
                    !i || null !== l.alternate && null !== l.alternate.memoizedState || (js = Ke())),
                    4 & r && hs(e);
                    break;
                case 22:
                    if (d = null !== n && null !== n.memoizedState,
                    1 & e.mode ? (Zo = (c = Zo) || d,
                    ms(t, e),
                    Zo = c) : ms(t, e),
                    vs(e),
                    8192 & r) {
                        if (c = null !== e.memoizedState,
                        (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                            for (Go = e,
                            d = e.child; null !== d; ) {
                                for (f = Go = d; null !== Go; ) {
                                    switch (h = (p = Go).child,
                                    p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ns(4, p, p.return);
                                        break;
                                    case 1:
                                        Jo(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" == typeof m.componentWillUnmount) {
                                            r = p,
                                            n = p.return;
                                            try {
                                                t = r,
                                                m.props = t.memoizedProps,
                                                m.state = t.memoizedState,
                                                m.componentWillUnmount()
                                            } catch (e) {
                                                Cu(r, n, e)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Jo(p, p.return);
                                        break;
                                    case 22:
                                        if (null !== p.memoizedState) {
                                            xs(f);
                                            continue
                                        }
                                    }
                                    null !== h ? (h.return = p,
                                    Go = h) : xs(f)
                                }
                                d = d.sibling
                            }
                        e: for (d = null,
                        f = e; ; ) {
                            if (5 === f.tag) {
                                if (null === d) {
                                    d = f;
                                    try {
                                        l = f.stateNode,
                                        c ? "function" == typeof (i = l.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode,
                                        o = null != (u = f.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null,
                                        s.style.display = me("display", o))
                                    } catch (t) {
                                        Cu(e, e.return, t)
                                    }
                                }
                            } else if (6 === f.tag) {
                                if (null === d)
                                    try {
                                        f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                    } catch (t) {
                                        Cu(e, e.return, t)
                                    }
                            } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                f.child.return = f,
                                f = f.child;
                                continue
                            }
                            if (f === e)
                                break e;
                            for (; null === f.sibling; ) {
                                if (null === f.return || f.return === e)
                                    break e;
                                d === f && (d = null),
                                f = f.return
                            }
                            d === f && (d = null),
                            f.sibling.return = f.return,
                            f = f.sibling
                        }
                    }
                    break;
                case 19:
                    ms(t, e),
                    vs(e),
                    4 & r && hs(e);
                case 21:
                }
            }
            function vs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n; ) {
                                if (is(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(a(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var l = r.stateNode;
                            32 & r.flags && (fe(l, ""),
                            r.flags &= -33),
                            us(e, os(e), l);
                            break;
                        case 3:
                        case 4:
                            var i = r.stateNode.containerInfo;
                            ss(e, os(e), i);
                            break;
                        default:
                            throw Error(a(161))
                        }
                    } catch (t) {
                        Cu(e, e.return, t)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }
            function ys(e, t, n) {
                Go = e,
                bs(e, t, n)
            }
            function bs(e, t, n) {
                for (var r = 0 != (1 & e.mode); null !== Go; ) {
                    var l = Go
                      , a = l.child;
                    if (22 === l.tag && r) {
                        var i = null !== l.memoizedState || qo;
                        if (!i) {
                            var o = l.alternate
                              , s = null !== o && null !== o.memoizedState || Zo;
                            o = qo;
                            var u = Zo;
                            if (qo = i,
                            (Zo = s) && !u)
                                for (Go = l; null !== Go; )
                                    s = (i = Go).child,
                                    22 === i.tag && null !== i.memoizedState ? ks(l) : null !== s ? (s.return = i,
                                    Go = s) : ks(l);
                            for (; null !== a; )
                                Go = a,
                                bs(a, t, n),
                                a = a.sibling;
                            Go = l,
                            qo = o,
                            Zo = u
                        }
                        ws(e)
                    } else
                        0 != (8772 & l.subtreeFlags) && null !== a ? (a.return = l,
                        Go = a) : ws(e)
                }
            }
            function ws(e) {
                for (; null !== Go; ) {
                    var t = Go;
                    if (0 != (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 != (8772 & t.flags))
                                switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Zo || rs(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Zo)
                                        if (null === n)
                                            r.componentDidMount();
                                        else {
                                            var l = t.elementType === t.type ? n.memoizedProps : ga(t.type, n.memoizedProps);
                                            r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var i = t.updateQueue;
                                    null !== i && Ua(t, i, r);
                                    break;
                                case 3:
                                    var o = t.updateQueue;
                                    if (null !== o) {
                                        if (n = null,
                                        null !== t.child)
                                            switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                            }
                                        Ua(t, o, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            u.src && (n.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var d = c.memoizedState;
                                            if (null !== d) {
                                                var f = d.dehydrated;
                                                null !== f && Wt(f)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                                }
                            Zo || 512 & t.flags && ls(t)
                        } catch (e) {
                            Cu(t, t.return, e)
                        }
                    }
                    if (t === e) {
                        Go = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return,
                        Go = n;
                        break
                    }
                    Go = t.return
                }
            }
            function xs(e) {
                for (; null !== Go; ) {
                    var t = Go;
                    if (t === e) {
                        Go = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return,
                        Go = n;
                        break
                    }
                    Go = t.return
                }
            }
            function ks(e) {
                for (; null !== Go; ) {
                    var t = Go;
                    try {
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                rs(4, t)
                            } catch (e) {
                                Cu(t, n, e)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if ("function" == typeof r.componentDidMount) {
                                var l = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (e) {
                                    Cu(t, l, e)
                                }
                            }
                            var a = t.return;
                            try {
                                ls(t)
                            } catch (e) {
                                Cu(t, a, e)
                            }
                            break;
                        case 5:
                            var i = t.return;
                            try {
                                ls(t)
                            } catch (e) {
                                Cu(t, i, e)
                            }
                        }
                    } catch (e) {
                        Cu(t, t.return, e)
                    }
                    if (t === e) {
                        Go = null;
                        break
                    }
                    var o = t.sibling;
                    if (null !== o) {
                        o.return = t.return,
                        Go = o;
                        break
                    }
                    Go = t.return
                }
            }
            var Ss, Cs = Math.ceil, Es = w.ReactCurrentDispatcher, Ms = w.ReactCurrentOwner, _s = w.ReactCurrentBatchConfig, Ts = 0, Is = null, Ps = null, Ns = 0, Ls = 0, Rs = Cl(0), zs = 0, Os = null, Fs = 0, Ds = 0, Us = 0, As = null, Hs = null, js = 0, Ws = 1 / 0, Bs = null, Vs = !1, $s = null, Xs = null, Qs = !1, Ys = null, qs = 0, Zs = 0, Ks = null, Gs = -1, Js = 0;
            function eu() {
                return 0 != (6 & Ts) ? Ke() : -1 !== Gs ? Gs : Gs = Ke()
            }
            function tu(e) {
                return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ts) && 0 !== Ns ? Ns & -Ns : null !== ma.transition ? (0 === Js && (Js = mt()),
                Js) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Zt(e.type)
            }
            function nu(e, t, n, r) {
                if (50 < Zs)
                    throw Zs = 0,
                    Ks = null,
                    Error(a(185));
                vt(e, n, r),
                0 != (2 & Ts) && e === Is || (e === Is && (0 == (2 & Ts) && (Ds |= n),
                4 === zs && ou(e, Ns)),
                ru(e, r),
                1 === n && 0 === Ts && 0 == (1 & t.mode) && (Ws = Ke() + 500,
                Al && Wl()))
            }
            function ru(e, t) {
                var n = e.callbackNode;
                !function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
                        var i = 31 - it(a)
                          , o = 1 << i
                          , s = l[i];
                        -1 === s ? 0 != (o & n) && 0 == (o & r) || (l[i] = pt(o, t)) : s <= t && (e.expiredLanes |= o),
                        a &= ~o
                    }
                }(e, t);
                var r = ft(e, e === Is ? Ns : 0);
                if (0 === r)
                    null !== n && Ye(n),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (t = r & -r,
                e.callbackPriority !== t) {
                    if (null != n && Ye(n),
                    1 === t)
                        0 === e.tag ? function(e) {
                            Al = !0,
                            jl(e)
                        }(su.bind(null, e)) : jl(su.bind(null, e)),
                        il((function() {
                            0 == (6 & Ts) && Wl()
                        }
                        )),
                        n = null;
                    else {
                        switch (wt(r)) {
                        case 1:
                            n = Je;
                            break;
                        case 4:
                            n = et;
                            break;
                        case 16:
                        default:
                            n = tt;
                            break;
                        case 536870912:
                            n = rt
                        }
                        n = Iu(n, lu.bind(null, e))
                    }
                    e.callbackPriority = t,
                    e.callbackNode = n
                }
            }
            function lu(e, t) {
                if (Gs = -1,
                Js = 0,
                0 != (6 & Ts))
                    throw Error(a(327));
                var n = e.callbackNode;
                if (ku() && e.callbackNode !== n)
                    return null;
                var r = ft(e, e === Is ? Ns : 0);
                if (0 === r)
                    return null;
                if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
                    t = gu(e, r);
                else {
                    t = r;
                    var l = Ts;
                    Ts |= 2;
                    var i = hu();
                    for (Is === e && Ns === t || (Bs = null,
                    Ws = Ke() + 500,
                    fu(e, t)); ; )
                        try {
                            yu();
                            break
                        } catch (t) {
                            pu(e, t)
                        }
                    xa(),
                    Es.current = i,
                    Ts = l,
                    null !== Ps ? t = 0 : (Is = null,
                    Ns = 0,
                    t = zs)
                }
                if (0 !== t) {
                    if (2 === t && 0 !== (l = ht(e)) && (r = l,
                    t = au(e, l)),
                    1 === t)
                        throw n = Os,
                        fu(e, 0),
                        ou(e, r),
                        ru(e, Ke()),
                        n;
                    if (6 === t)
                        ou(e, r);
                    else {
                        if (l = e.current.alternate,
                        0 == (30 & r) && !function(e) {
                            for (var t = e; ; ) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores))
                                        for (var r = 0; r < n.length; r++) {
                                            var l = n[r]
                                              , a = l.getSnapshot;
                                            l = l.value;
                                            try {
                                                if (!or(a(), l))
                                                    return !1
                                            } catch (e) {
                                                return !1
                                            }
                                        }
                                }
                                if (n = t.child,
                                16384 & t.subtreeFlags && null !== n)
                                    n.return = t,
                                    t = n;
                                else {
                                    if (t === e)
                                        break;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e)
                                            return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return,
                                    t = t.sibling
                                }
                            }
                            return !0
                        }(l) && (2 === (t = gu(e, r)) && 0 !== (i = ht(e)) && (r = i,
                        t = au(e, i)),
                        1 === t))
                            throw n = Os,
                            fu(e, 0),
                            ou(e, r),
                            ru(e, Ke()),
                            n;
                        switch (e.finishedWork = l,
                        e.finishedLanes = r,
                        t) {
                        case 0:
                        case 1:
                            throw Error(a(345));
                        case 2:
                        case 5:
                            xu(e, Hs, Bs);
                            break;
                        case 3:
                            if (ou(e, r),
                            (130023424 & r) === r && 10 < (t = js + 500 - Ke())) {
                                if (0 !== ft(e, 0))
                                    break;
                                if (((l = e.suspendedLanes) & r) !== r) {
                                    eu(),
                                    e.pingedLanes |= e.suspendedLanes & l;
                                    break
                                }
                                e.timeoutHandle = rl(xu.bind(null, e, Hs, Bs), t);
                                break
                            }
                            xu(e, Hs, Bs);
                            break;
                        case 4:
                            if (ou(e, r),
                            (4194240 & r) === r)
                                break;
                            for (t = e.eventTimes,
                            l = -1; 0 < r; ) {
                                var o = 31 - it(r);
                                i = 1 << o,
                                (o = t[o]) > l && (l = o),
                                r &= ~i
                            }
                            if (r = l,
                            10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cs(r / 1960)) - r)) {
                                e.timeoutHandle = rl(xu.bind(null, e, Hs, Bs), r);
                                break
                            }
                            xu(e, Hs, Bs);
                            break;
                        default:
                            throw Error(a(329))
                        }
                    }
                }
                return ru(e, Ke()),
                e.callbackNode === n ? lu.bind(null, e) : null
            }
            function au(e, t) {
                var n = As;
                return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
                2 !== (e = gu(e, t)) && (t = Hs,
                Hs = n,
                null !== t && iu(t)),
                e
            }
            function iu(e) {
                null === Hs ? Hs = e : Hs.push.apply(Hs, e)
            }
            function ou(e, t) {
                for (t &= ~Us,
                t &= ~Ds,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - it(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function su(e) {
                if (0 != (6 & Ts))
                    throw Error(a(327));
                ku();
                var t = ft(e, 0);
                if (0 == (1 & t))
                    return ru(e, Ke()),
                    null;
                var n = gu(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = ht(e);
                    0 !== r && (t = r,
                    n = au(e, r))
                }
                if (1 === n)
                    throw n = Os,
                    fu(e, 0),
                    ou(e, t),
                    ru(e, Ke()),
                    n;
                if (6 === n)
                    throw Error(a(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                xu(e, Hs, Bs),
                ru(e, Ke()),
                null
            }
            function uu(e, t) {
                var n = Ts;
                Ts |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Ts = n) && (Ws = Ke() + 500,
                    Al && Wl())
                }
            }
            function cu(e) {
                null !== Ys && 0 === Ys.tag && 0 == (6 & Ts) && ku();
                var t = Ts;
                Ts |= 1;
                var n = _s.transition
                  , r = bt;
                try {
                    if (_s.transition = null,
                    bt = 1,
                    e)
                        return e()
                } finally {
                    bt = r,
                    _s.transition = n,
                    0 == (6 & (Ts = t)) && Wl()
                }
            }
            function du() {
                Ls = Rs.current,
                El(Rs)
            }
            function fu(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                ll(n)),
                null !== Ps)
                    for (n = Ps.return; null !== n; ) {
                        var r = n;
                        switch (ta(r),
                        r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && Rl();
                            break;
                        case 3:
                            li(),
                            El(Il),
                            El(Tl),
                            ci();
                            break;
                        case 5:
                            ii(r);
                            break;
                        case 4:
                            li();
                            break;
                        case 13:
                        case 19:
                            El(oi);
                            break;
                        case 10:
                            ka(r.type._context);
                            break;
                        case 22:
                        case 23:
                            du()
                        }
                        n = n.return
                    }
                if (Is = e,
                Ps = e = Ru(e.current, null),
                Ns = Ls = t,
                zs = 0,
                Os = null,
                Us = Ds = Fs = 0,
                Hs = As = null,
                null !== Ma) {
                    for (t = 0; t < Ma.length; t++)
                        if (null !== (r = (n = Ma[t]).interleaved)) {
                            n.interleaved = null;
                            var l = r.next
                              , a = n.pending;
                            if (null !== a) {
                                var i = a.next;
                                a.next = l,
                                r.next = i
                            }
                            n.pending = r
                        }
                    Ma = null
                }
                return e
            }
            function pu(e, t) {
                for (; ; ) {
                    var n = Ps;
                    try {
                        if (xa(),
                        di.current = ao,
                        vi) {
                            for (var r = hi.memoizedState; null !== r; ) {
                                var l = r.queue;
                                null !== l && (l.pending = null),
                                r = r.next
                            }
                            vi = !1
                        }
                        if (pi = 0,
                        gi = mi = hi = null,
                        yi = !1,
                        bi = 0,
                        Ms.current = null,
                        null === n || null === n.return) {
                            zs = 1,
                            Os = t,
                            Ps = null;
                            break
                        }
                        e: {
                            var i = e
                              , o = n.return
                              , s = n
                              , u = t;
                            if (t = Ns,
                            s.flags |= 32768,
                            null !== u && "object" == typeof u && "function" == typeof u.then) {
                                var c = u
                                  , d = s
                                  , f = d.tag;
                                if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                    var p = d.alternate;
                                    p ? (d.updateQueue = p.updateQueue,
                                    d.memoizedState = p.memoizedState,
                                    d.lanes = p.lanes) : (d.updateQueue = null,
                                    d.memoizedState = null)
                                }
                                var h = vo(o);
                                if (null !== h) {
                                    h.flags &= -257,
                                    yo(h, o, s, 0, t),
                                    1 & h.mode && go(i, c, t),
                                    u = c;
                                    var m = (t = h).updateQueue;
                                    if (null === m) {
                                        var g = new Set;
                                        g.add(u),
                                        t.updateQueue = g
                                    } else
                                        m.add(u);
                                    break e
                                }
                                if (0 == (1 & t)) {
                                    go(i, c, t),
                                    mu();
                                    break e
                                }
                                u = Error(a(426))
                            } else if (la && 1 & s.mode) {
                                var v = vo(o);
                                if (null !== v) {
                                    0 == (65536 & v.flags) && (v.flags |= 256),
                                    yo(v, o, s, 0, t),
                                    ha(uo(u, s));
                                    break e
                                }
                            }
                            i = u = uo(u, s),
                            4 !== zs && (zs = 2),
                            null === As ? As = [i] : As.push(i),
                            i = o;
                            do {
                                switch (i.tag) {
                                case 3:
                                    i.flags |= 65536,
                                    t &= -t,
                                    i.lanes |= t,
                                    Fa(i, ho(0, u, t));
                                    break e;
                                case 1:
                                    s = u;
                                    var y = i.type
                                      , b = i.stateNode;
                                    if (0 == (128 & i.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === Xs || !Xs.has(b)))) {
                                        i.flags |= 65536,
                                        t &= -t,
                                        i.lanes |= t,
                                        Fa(i, mo(i, s, t));
                                        break e
                                    }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        wu(n)
                    } catch (e) {
                        t = e,
                        Ps === n && null !== n && (Ps = n = n.return);
                        continue
                    }
                    break
                }
            }
            function hu() {
                var e = Es.current;
                return Es.current = ao,
                null === e ? ao : e
            }
            function mu() {
                0 !== zs && 3 !== zs && 2 !== zs || (zs = 4),
                null === Is || 0 == (268435455 & Fs) && 0 == (268435455 & Ds) || ou(Is, Ns)
            }
            function gu(e, t) {
                var n = Ts;
                Ts |= 2;
                var r = hu();
                for (Is === e && Ns === t || (Bs = null,
                fu(e, t)); ; )
                    try {
                        vu();
                        break
                    } catch (t) {
                        pu(e, t)
                    }
                if (xa(),
                Ts = n,
                Es.current = r,
                null !== Ps)
                    throw Error(a(261));
                return Is = null,
                Ns = 0,
                zs
            }
            function vu() {
                for (; null !== Ps; )
                    bu(Ps)
            }
            function yu() {
                for (; null !== Ps && !qe(); )
                    bu(Ps)
            }
            function bu(e) {
                var t = Ss(e.alternate, e, Ls);
                e.memoizedProps = e.pendingProps,
                null === t ? wu(e) : Ps = t,
                Ms.current = null
            }
            function wu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return,
                    0 == (32768 & t.flags)) {
                        if (null !== (n = Qo(n, t, Ls)))
                            return void (Ps = n)
                    } else {
                        if (null !== (n = Yo(n, t)))
                            return n.flags &= 32767,
                            void (Ps = n);
                        if (null === e)
                            return zs = 6,
                            void (Ps = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    }
                    if (null !== (t = t.sibling))
                        return void (Ps = t);
                    Ps = t = e
                } while (null !== t);
                0 === zs && (zs = 5)
            }
            function xu(e, t, n) {
                var r = bt
                  , l = _s.transition;
                try {
                    _s.transition = null,
                    bt = 1,
                    function(e, t, n, r) {
                        do {
                            ku()
                        } while (null !== Ys);
                        if (0 != (6 & Ts))
                            throw Error(a(327));
                        n = e.finishedWork;
                        var l = e.finishedLanes;
                        if (null === n)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        n === e.current)
                            throw Error(a(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var i = n.lanes | n.childLanes;
                        if (function(e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= t,
                            e.mutableReadLanes &= t,
                            e.entangledLanes &= t,
                            t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n; ) {
                                var l = 31 - it(n)
                                  , a = 1 << l;
                                t[l] = 0,
                                r[l] = -1,
                                e[l] = -1,
                                n &= ~a
                            }
                        }(e, i),
                        e === Is && (Ps = Is = null,
                        Ns = 0),
                        0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Qs || (Qs = !0,
                        Iu(tt, (function() {
                            return ku(),
                            null
                        }
                        ))),
                        i = 0 != (15990 & n.flags),
                        0 != (15990 & n.subtreeFlags) || i) {
                            i = _s.transition,
                            _s.transition = null;
                            var o = bt;
                            bt = 1;
                            var s = Ts;
                            Ts |= 4,
                            Ms.current = null,
                            function(e, t) {
                                if (el = Vt,
                                pr(e = fr())) {
                                    if ("selectionStart"in e)
                                        var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var l = r.anchorOffset
                                                  , i = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType,
                                                    i.nodeType
                                                } catch (e) {
                                                    n = null;
                                                    break e
                                                }
                                                var o = 0
                                                  , s = -1
                                                  , u = -1
                                                  , c = 0
                                                  , d = 0
                                                  , f = e
                                                  , p = null;
                                                t: for (; ; ) {
                                                    for (var h; f !== n || 0 !== l && 3 !== f.nodeType || (s = o + l),
                                                    f !== i || 0 !== r && 3 !== f.nodeType || (u = o + r),
                                                    3 === f.nodeType && (o += f.nodeValue.length),
                                                    null !== (h = f.firstChild); )
                                                        p = f,
                                                        f = h;
                                                    for (; ; ) {
                                                        if (f === e)
                                                            break t;
                                                        if (p === n && ++c === l && (s = o),
                                                        p === i && ++d === r && (u = o),
                                                        null !== (h = f.nextSibling))
                                                            break;
                                                        p = (f = p).parentNode
                                                    }
                                                    f = h
                                                }
                                                n = -1 === s || -1 === u ? null : {
                                                    start: s,
                                                    end: u
                                                }
                                            } else
                                                n = null
                                        }
                                    n = n || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    n = null;
                                for (tl = {
                                    focusedElem: e,
                                    selectionRange: n
                                },
                                Vt = !1,
                                Go = t; null !== Go; )
                                    if (e = (t = Go).child,
                                    0 != (1028 & t.subtreeFlags) && null !== e)
                                        e.return = t,
                                        Go = e;
                                    else
                                        for (; null !== Go; ) {
                                            t = Go;
                                            try {
                                                var m = t.alternate;
                                                if (0 != (1024 & t.flags))
                                                    switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== m) {
                                                            var g = m.memoizedProps
                                                              , v = m.memoizedState
                                                              , y = t.stateNode
                                                              , b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ga(t.type, g), v);
                                                            y.__reactInternalSnapshotBeforeUpdate = b
                                                        }
                                                        break;
                                                    case 3:
                                                        var w = t.stateNode.containerInfo;
                                                        1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(a(163))
                                                    }
                                            } catch (e) {
                                                Cu(t, t.return, e)
                                            }
                                            if (null !== (e = t.sibling)) {
                                                e.return = t.return,
                                                Go = e;
                                                break
                                            }
                                            Go = t.return
                                        }
                                m = ts,
                                ts = !1
                            }(e, n),
                            gs(n, e),
                            hr(tl),
                            Vt = !!el,
                            tl = el = null,
                            e.current = n,
                            ys(n, e, l),
                            Ze(),
                            Ts = s,
                            bt = o,
                            _s.transition = i
                        } else
                            e.current = n;
                        if (Qs && (Qs = !1,
                        Ys = e,
                        qs = l),
                        0 === (i = e.pendingLanes) && (Xs = null),
                        function(e) {
                            if (at && "function" == typeof at.onCommitFiberRoot)
                                try {
                                    at.onCommitFiberRoot(lt, e, void 0, 128 == (128 & e.current.flags))
                                } catch (e) {}
                        }(n.stateNode),
                        ru(e, Ke()),
                        null !== t)
                            for (r = e.onRecoverableError,
                            n = 0; n < t.length; n++)
                                r((l = t[n]).value, {
                                    componentStack: l.stack,
                                    digest: l.digest
                                });
                        if (Vs)
                            throw Vs = !1,
                            e = $s,
                            $s = null,
                            e;
                        0 != (1 & qs) && 0 !== e.tag && ku(),
                        0 != (1 & (i = e.pendingLanes)) ? e === Ks ? Zs++ : (Zs = 0,
                        Ks = e) : Zs = 0,
                        Wl()
                    }(e, t, n, r)
                } finally {
                    _s.transition = l,
                    bt = r
                }
                return null
            }
            function ku() {
                if (null !== Ys) {
                    var e = wt(qs)
                      , t = _s.transition
                      , n = bt;
                    try {
                        if (_s.transition = null,
                        bt = 16 > e ? 16 : e,
                        null === Ys)
                            var r = !1;
                        else {
                            if (e = Ys,
                            Ys = null,
                            qs = 0,
                            0 != (6 & Ts))
                                throw Error(a(331));
                            var l = Ts;
                            for (Ts |= 4,
                            Go = e.current; null !== Go; ) {
                                var i = Go
                                  , o = i.child;
                                if (0 != (16 & Go.flags)) {
                                    var s = i.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (Go = c; null !== Go; ) {
                                                var d = Go;
                                                switch (d.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ns(8, d, i)
                                                }
                                                var f = d.child;
                                                if (null !== f)
                                                    f.return = d,
                                                    Go = f;
                                                else
                                                    for (; null !== Go; ) {
                                                        var p = (d = Go).sibling
                                                          , h = d.return;
                                                        if (as(d),
                                                        d === c) {
                                                            Go = null;
                                                            break
                                                        }
                                                        if (null !== p) {
                                                            p.return = h,
                                                            Go = p;
                                                            break
                                                        }
                                                        Go = h
                                                    }
                                            }
                                        }
                                        var m = i.alternate;
                                        if (null !== m) {
                                            var g = m.child;
                                            if (null !== g) {
                                                m.child = null;
                                                do {
                                                    var v = g.sibling;
                                                    g.sibling = null,
                                                    g = v
                                                } while (null !== g)
                                            }
                                        }
                                        Go = i
                                    }
                                }
                                if (0 != (2064 & i.subtreeFlags) && null !== o)
                                    o.return = i,
                                    Go = o;
                                else
                                    e: for (; null !== Go; ) {
                                        if (0 != (2048 & (i = Go).flags))
                                            switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ns(9, i, i.return)
                                            }
                                        var y = i.sibling;
                                        if (null !== y) {
                                            y.return = i.return,
                                            Go = y;
                                            break e
                                        }
                                        Go = i.return
                                    }
                            }
                            var b = e.current;
                            for (Go = b; null !== Go; ) {
                                var w = (o = Go).child;
                                if (0 != (2064 & o.subtreeFlags) && null !== w)
                                    w.return = o,
                                    Go = w;
                                else
                                    e: for (o = b; null !== Go; ) {
                                        if (0 != (2048 & (s = Go).flags))
                                            try {
                                                switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rs(9, s)
                                                }
                                            } catch (e) {
                                                Cu(s, s.return, e)
                                            }
                                        if (s === o) {
                                            Go = null;
                                            break e
                                        }
                                        var x = s.sibling;
                                        if (null !== x) {
                                            x.return = s.return,
                                            Go = x;
                                            break e
                                        }
                                        Go = s.return
                                    }
                            }
                            if (Ts = l,
                            Wl(),
                            at && "function" == typeof at.onPostCommitFiberRoot)
                                try {
                                    at.onPostCommitFiberRoot(lt, e)
                                } catch (e) {}
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n,
                        _s.transition = t
                    }
                }
                return !1
            }
            function Su(e, t, n) {
                e = za(e, t = ho(0, t = uo(n, t), 1), 1),
                t = eu(),
                null !== e && (vt(e, 1, t),
                ru(e, t))
            }
            function Cu(e, t, n) {
                if (3 === e.tag)
                    Su(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            Su(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Xs || !Xs.has(r))) {
                                t = za(t, e = mo(t, e = uo(n, e), 1), 1),
                                e = eu(),
                                null !== t && (vt(t, 1, e),
                                ru(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function Eu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = eu(),
                e.pingedLanes |= e.suspendedLanes & n,
                Is === e && (Ns & n) === n && (4 === zs || 3 === zs && (130023424 & Ns) === Ns && 500 > Ke() - js ? fu(e, 0) : Us |= n),
                ru(e, t)
            }
            function Mu(e, t) {
                0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct,
                0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = eu();
                null !== (e = Ia(e, t)) && (vt(e, t, n),
                ru(e, n))
            }
            function _u(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                Mu(e, n)
            }
            function Tu(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , l = e.memoizedState;
                    null !== l && (n = l.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(a(314))
                }
                null !== r && r.delete(t),
                Mu(e, n)
            }
            function Iu(e, t) {
                return Qe(e, t)
            }
            function Pu(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Nu(e, t, n, r) {
                return new Pu(e,t,n,r)
            }
            function Lu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Ru(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Nu(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 14680064 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function zu(e, t, n, r, l, i) {
                var o = 2;
                if (r = e,
                "function" == typeof e)
                    Lu(e) && (o = 1);
                else if ("string" == typeof e)
                    o = 5;
                else
                    e: switch (e) {
                    case S:
                        return Ou(n.children, l, i, t);
                    case C:
                        o = 8,
                        l |= 8;
                        break;
                    case E:
                        return (e = Nu(12, n, t, 2 | l)).elementType = E,
                        e.lanes = i,
                        e;
                    case I:
                        return (e = Nu(13, n, t, l)).elementType = I,
                        e.lanes = i,
                        e;
                    case P:
                        return (e = Nu(19, n, t, l)).elementType = P,
                        e.lanes = i,
                        e;
                    case R:
                        return Fu(n, l, i, t);
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                            case M:
                                o = 10;
                                break e;
                            case _:
                                o = 9;
                                break e;
                            case T:
                                o = 11;
                                break e;
                            case N:
                                o = 14;
                                break e;
                            case L:
                                o = 16,
                                r = null;
                                break e
                            }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                    }
                return (t = Nu(o, n, t, l)).elementType = e,
                t.type = r,
                t.lanes = i,
                t
            }
            function Ou(e, t, n, r) {
                return (e = Nu(7, e, r, t)).lanes = n,
                e
            }
            function Fu(e, t, n, r) {
                return (e = Nu(22, e, r, t)).elementType = R,
                e.lanes = n,
                e.stateNode = {
                    isHidden: !1
                },
                e
            }
            function Du(e, t, n) {
                return (e = Nu(6, e, null, t)).lanes = n,
                e
            }
            function Uu(e, t, n) {
                return (t = Nu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Au(e, t, n, r, l) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = gt(0),
                this.expirationTimes = gt(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = gt(0),
                this.identifierPrefix = r,
                this.onRecoverableError = l,
                this.mutableSourceEagerHydrationData = null
            }
            function Hu(e, t, n, r, l, a, i, o, s) {
                return e = new Au(e,t,n,o,s),
                1 === t ? (t = 1,
                !0 === a && (t |= 8)) : t = 0,
                a = Nu(3, null, null, t),
                e.current = a,
                a.stateNode = e,
                a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                Na(a),
                e
            }
            function ju(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: k,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }
            function Wu(e) {
                if (!e)
                    return _l;
                e: {
                    if (We(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(a(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (Ll(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(a(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Ll(n))
                        return Ol(e, n, t)
                }
                return t
            }
            function Bu(e, t, n, r, l, a, i, o, s) {
                return (e = Hu(n, r, !0, e, 0, a, 0, o, s)).context = Wu(null),
                n = e.current,
                (a = Ra(r = eu(), l = tu(n))).callback = null != t ? t : null,
                za(n, a, l),
                e.current.lanes = l,
                vt(e, l, r),
                ru(e, r),
                e
            }
            function Vu(e, t, n, r) {
                var l = t.current
                  , a = eu()
                  , i = tu(l);
                return n = Wu(n),
                null === t.context ? t.context = n : t.pendingContext = n,
                (t = Ra(a, i)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                null !== (e = za(l, t, i)) && (nu(e, l, i, a),
                Oa(e, l, i)),
                i
            }
            function $u(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Xu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function Qu(e, t) {
                Xu(e, t),
                (e = e.alternate) && Xu(e, t)
            }
            Ss = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || Il.current)
                        wo = !0;
                    else {
                        if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                            return wo = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    Po(t),
                                    pa();
                                    break;
                                case 5:
                                    ai(t);
                                    break;
                                case 1:
                                    Ll(t.type) && Fl(t);
                                    break;
                                case 4:
                                    ri(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = t.type._context
                                      , l = t.memoizedProps.value;
                                    Ml(va, r._currentValue),
                                    r._currentValue = l;
                                    break;
                                case 13:
                                    if (null !== (r = t.memoizedState))
                                        return null !== r.dehydrated ? (Ml(oi, 1 & oi.current),
                                        t.flags |= 128,
                                        null) : 0 != (n & t.child.childLanes) ? Do(e, t, n) : (Ml(oi, 1 & oi.current),
                                        null !== (e = Vo(e, t, n)) ? e.sibling : null);
                                    Ml(oi, 1 & oi.current);
                                    break;
                                case 19:
                                    if (r = 0 != (n & t.childLanes),
                                    0 != (128 & e.flags)) {
                                        if (r)
                                            return Wo(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (l = t.memoizedState) && (l.rendering = null,
                                    l.tail = null,
                                    l.lastEffect = null),
                                    Ml(oi, oi.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    Eo(e, t, n)
                                }
                                return Vo(e, t, n)
                            }(e, t, n);
                        wo = 0 != (131072 & e.flags)
                    }
                else
                    wo = !1,
                    la && 0 != (1048576 & t.flags) && Jl(t, Xl, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    var r = t.type;
                    Bo(e, t),
                    e = t.pendingProps;
                    var l = Nl(t, Tl.current);
                    Ca(t, n),
                    l = Si(null, t, r, e, l, n);
                    var i = Ci();
                    return t.flags |= 1,
                    "object" == typeof l && null !== l && "function" == typeof l.render && void 0 === l.$$typeof ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Ll(r) ? (i = !0,
                    Fl(t)) : i = !1,
                    t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null,
                    Na(t),
                    l.updater = ja,
                    t.stateNode = l,
                    l._reactInternals = t,
                    $a(t, r, e, n),
                    t = Io(null, t, r, !0, i, n)) : (t.tag = 0,
                    la && i && ea(t),
                    xo(null, t, l, n),
                    t = t.child),
                    t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (Bo(e, t),
                        e = t.pendingProps,
                        r = (l = r._init)(r._payload),
                        t.type = r,
                        l = t.tag = function(e) {
                            if ("function" == typeof e)
                                return Lu(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === T)
                                    return 11;
                                if (e === N)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = ga(r, e),
                        l) {
                        case 0:
                            t = _o(null, t, r, e, n);
                            break e;
                        case 1:
                            t = To(null, t, r, e, n);
                            break e;
                        case 11:
                            t = ko(null, t, r, e, n);
                            break e;
                        case 14:
                            t = So(null, t, r, ga(r.type, e), n);
                            break e
                        }
                        throw Error(a(306, r, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    l = t.pendingProps,
                    _o(e, t, r, l = t.elementType === r ? l : ga(r, l), n);
                case 1:
                    return r = t.type,
                    l = t.pendingProps,
                    To(e, t, r, l = t.elementType === r ? l : ga(r, l), n);
                case 3:
                    e: {
                        if (Po(t),
                        null === e)
                            throw Error(a(387));
                        r = t.pendingProps,
                        l = (i = t.memoizedState).element,
                        La(e, t),
                        Da(t, r, null, n);
                        var o = t.memoizedState;
                        if (r = o.element,
                        i.isDehydrated) {
                            if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: o.cache,
                                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                                transitions: o.transitions
                            },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            256 & t.flags) {
                                t = No(e, t, r, n, l = uo(Error(a(423)), t));
                                break e
                            }
                            if (r !== l) {
                                t = No(e, t, r, n, l = uo(Error(a(424)), t));
                                break e
                            }
                            for (ra = ul(t.stateNode.containerInfo.firstChild),
                            na = t,
                            la = !0,
                            aa = null,
                            n = Ka(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (pa(),
                            r === l) {
                                t = Vo(e, t, n);
                                break e
                            }
                            xo(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return ai(t),
                    null === e && ua(t),
                    r = t.type,
                    l = t.pendingProps,
                    i = null !== e ? e.memoizedProps : null,
                    o = l.children,
                    nl(r, l) ? o = null : null !== i && nl(r, i) && (t.flags |= 32),
                    Mo(e, t),
                    xo(e, t, o, n),
                    t.child;
                case 6:
                    return null === e && ua(t),
                    null;
                case 13:
                    return Do(e, t, n);
                case 4:
                    return ri(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = Za(t, null, r, n) : xo(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    l = t.pendingProps,
                    ko(e, t, r, l = t.elementType === r ? l : ga(r, l), n);
                case 7:
                    return xo(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return xo(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        if (r = t.type._context,
                        l = t.pendingProps,
                        i = t.memoizedProps,
                        o = l.value,
                        Ml(va, r._currentValue),
                        r._currentValue = o,
                        null !== i)
                            if (or(i.value, o)) {
                                if (i.children === l.children && !Il.current) {
                                    t = Vo(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                                    var s = i.dependencies;
                                    if (null !== s) {
                                        o = i.child;
                                        for (var u = s.firstContext; null !== u; ) {
                                            if (u.context === r) {
                                                if (1 === i.tag) {
                                                    (u = Ra(-1, n & -n)).tag = 2;
                                                    var c = i.updateQueue;
                                                    if (null !== c) {
                                                        var d = (c = c.shared).pending;
                                                        null === d ? u.next = u : (u.next = d.next,
                                                        d.next = u),
                                                        c.pending = u
                                                    }
                                                }
                                                i.lanes |= n,
                                                null !== (u = i.alternate) && (u.lanes |= n),
                                                Sa(i.return, n, t),
                                                s.lanes |= n;
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else if (10 === i.tag)
                                        o = i.type === t.type ? null : i.child;
                                    else if (18 === i.tag) {
                                        if (null === (o = i.return))
                                            throw Error(a(341));
                                        o.lanes |= n,
                                        null !== (s = o.alternate) && (s.lanes |= n),
                                        Sa(o, n, t),
                                        o = i.sibling
                                    } else
                                        o = i.child;
                                    if (null !== o)
                                        o.return = i;
                                    else
                                        for (o = i; null !== o; ) {
                                            if (o === t) {
                                                o = null;
                                                break
                                            }
                                            if (null !== (i = o.sibling)) {
                                                i.return = o.return,
                                                o = i;
                                                break
                                            }
                                            o = o.return
                                        }
                                    i = o
                                }
                        xo(e, t, l.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return l = t.type,
                    r = t.pendingProps.children,
                    Ca(t, n),
                    r = r(l = Ea(l)),
                    t.flags |= 1,
                    xo(e, t, r, n),
                    t.child;
                case 14:
                    return l = ga(r = t.type, t.pendingProps),
                    So(e, t, r, l = ga(r.type, l), n);
                case 15:
                    return Co(e, t, t.type, t.pendingProps, n);
                case 17:
                    return r = t.type,
                    l = t.pendingProps,
                    l = t.elementType === r ? l : ga(r, l),
                    Bo(e, t),
                    t.tag = 1,
                    Ll(r) ? (e = !0,
                    Fl(t)) : e = !1,
                    Ca(t, n),
                    Ba(t, r, l),
                    $a(t, r, l, n),
                    Io(null, t, r, !0, e, n);
                case 19:
                    return Wo(e, t, n);
                case 22:
                    return Eo(e, t, n)
                }
                throw Error(a(156, t.tag))
            }
            ;
            var Yu = "function" == typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function qu(e) {
                this._internalRoot = e
            }
            function Zu(e) {
                this._internalRoot = e
            }
            function Ku(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function Gu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function Ju() {}
            function ec(e, t, n, r, l) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a;
                    if ("function" == typeof l) {
                        var o = l;
                        l = function() {
                            var e = $u(i);
                            o.call(e)
                        }
                    }
                    Vu(t, i, e, l)
                } else
                    i = function(e, t, n, r, l) {
                        if (l) {
                            if ("function" == typeof r) {
                                var a = r;
                                r = function() {
                                    var e = $u(i);
                                    a.call(e)
                                }
                            }
                            var i = Bu(t, r, e, 0, null, !1, 0, "", Ju);
                            return e._reactRootContainer = i,
                            e[hl] = i.current,
                            Wr(8 === e.nodeType ? e.parentNode : e),
                            cu(),
                            i
                        }
                        for (; l = e.lastChild; )
                            e.removeChild(l);
                        if ("function" == typeof r) {
                            var o = r;
                            r = function() {
                                var e = $u(s);
                                o.call(e)
                            }
                        }
                        var s = Hu(e, 0, !1, null, 0, !1, 0, "", Ju);
                        return e._reactRootContainer = s,
                        e[hl] = s.current,
                        Wr(8 === e.nodeType ? e.parentNode : e),
                        cu((function() {
                            Vu(t, s, n, r)
                        }
                        )),
                        s
                    }(n, t, e, l, r);
                return $u(i)
            }
            Zu.prototype.render = qu.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t)
                    throw Error(a(409));
                Vu(e, t, null, null)
            }
            ,
            Zu.prototype.unmount = qu.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    cu((function() {
                        Vu(null, e, null, null)
                    }
                    )),
                    t[hl] = null
                }
            }
            ,
            Zu.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Ct();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++)
                        ;
                    Rt.splice(n, 0, e),
                    0 === n && Dt(e)
                }
            }
            ,
            xt = function(e) {
                switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = dt(t.pendingLanes);
                        0 !== n && (yt(t, 1 | n),
                        ru(t, Ke()),
                        0 == (6 & Ts) && (Ws = Ke() + 500,
                        Wl()))
                    }
                    break;
                case 13:
                    cu((function() {
                        var t = Ia(e, 1);
                        if (null !== t) {
                            var n = eu();
                            nu(t, e, 1, n)
                        }
                    }
                    )),
                    Qu(e, 1)
                }
            }
            ,
            kt = function(e) {
                if (13 === e.tag) {
                    var t = Ia(e, 134217728);
                    null !== t && nu(t, e, 134217728, eu()),
                    Qu(e, 134217728)
                }
            }
            ,
            St = function(e) {
                if (13 === e.tag) {
                    var t = tu(e)
                      , n = Ia(e, t);
                    null !== n && nu(n, e, t, eu()),
                    Qu(e, t)
                }
            }
            ,
            Ct = function() {
                return bt
            }
            ,
            Et = function(e, t) {
                var n = bt;
                try {
                    return bt = e,
                    t()
                } finally {
                    bt = n
                }
            }
            ,
            ke = function(e, t, n) {
                switch (t) {
                case "input":
                    if (G(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var l = xl(r);
                                if (!l)
                                    throw Error(a(90));
                                Q(r),
                                G(r, l)
                            }
                        }
                    }
                    break;
                case "textarea":
                    ae(e, n);
                    break;
                case "select":
                    null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }
            ,
            Te = uu,
            Ie = cu;
            var tc = {
                usingClientEntryPoint: !1,
                Events: [bl, wl, xl, Me, _e, uu]
            }
              , nc = {
                findFiberByHostInstance: yl,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            }
              , rc = {
                bundleType: nc.bundleType,
                version: nc.version,
                rendererPackageName: nc.rendererPackageName,
                rendererConfig: nc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: w.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = $e(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!lc.isDisabled && lc.supportsFiber)
                    try {
                        lt = lc.inject(rc),
                        at = lc
                    } catch (ce) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc,
            t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Ku(t))
                    throw Error(a(200));
                return ju(e, t, null, n)
            }
            ,
            t.createRoot = function(e, t) {
                if (!Ku(e))
                    throw Error(a(299));
                var n = !1
                  , r = ""
                  , l = Yu;
                return null != t && (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
                t = Hu(e, 1, !1, null, 0, n, 0, r, l),
                e[hl] = t.current,
                Wr(8 === e.nodeType ? e.parentNode : e),
                new qu(t)
            }
            ,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render)
                        throw Error(a(188));
                    throw e = Object.keys(e).join(","),
                    Error(a(268, e))
                }
                return null === (e = $e(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e) {
                return cu(e)
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!Gu(t))
                    throw Error(a(200));
                return ec(null, e, t, !0, n)
            }
            ,
            t.hydrateRoot = function(e, t, n) {
                if (!Ku(e))
                    throw Error(a(405));
                var r = null != n && n.hydratedSources || null
                  , l = !1
                  , i = ""
                  , o = Yu;
                if (null != n && (!0 === n.unstable_strictMode && (l = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
                t = Bu(t, null, e, 1, null != n ? n : null, l, 0, i, o),
                e[hl] = t.current,
                Wr(e),
                r)
                    for (e = 0; e < r.length; e++)
                        l = (l = (n = r[e])._getVersion)(n._source),
                        null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
                return new Zu(t)
            }
            ,
            t.render = function(e, t, n) {
                if (!Gu(t))
                    throw Error(a(200));
                return ec(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!Gu(e))
                    throw Error(a(40));
                return !!e._reactRootContainer && (cu((function() {
                    ec(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[hl] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = uu,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Gu(n))
                    throw Error(a(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(a(38));
                return ec(e, t, n, !1, r)
            }
            ,
            t.version = "18.2.0-next-9e3b772b8-20220608"
        }
        ,
        745: (e,t,n)=>{
            "use strict";
            var r = n(935);
            t.s = r.createRoot,
            r.hydrateRoot
        }
        ,
        935: (e,t,n)=>{
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
            }(),
            e.exports = n(448)
        }
        ,
        714: (e,t,n)=>{
            "use strict";
            var r = n(318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var l = r(n(294))
              , a = (r(n(473)),
            function(e) {
                e.index;
                var t = e.children;
                l.default.Children.count(t)
            }
            );
            t.default = a
        }
        ,
        493: (e,t,n)=>{
            "use strict";
            var r = n(318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e) {
                var t, n = e.children, r = e.startIndex, i = e.startX, o = e.pageX, s = e.viewLength, u = e.resistance, c = l.default.Children.count(n) - 1, d = r + (i - o) / s;
                return u ? d < 0 ? d = Math.exp(d * a.default.RESISTANCE_COEF) - 1 : d > c && (d = c + 1 - Math.exp((c - d) * a.default.RESISTANCE_COEF)) : d < 0 ? t = ((d = 0) - r) * s + o : d > c && (t = ((d = c) - r) * s + o),
                {
                    index: d,
                    startX: t
                }
            }
            ;
            var l = r(n(294))
              , a = r(n(491))
        }
        ,
        491: (e,t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0,
            t.default = {
                RESISTANCE_COEF: .6,
                UNCERTAINTY_THRESHOLD: 3
            }
        }
        ,
        661: (e,t,n)=>{
            "use strict";
            var r = n(318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var l = r(n(294));
            t.default = function(e, t) {
                var n = !1
                  , r = function(e) {
                    return e ? e.key : "empty"
                };
                if (e.children.length && t.children.length) {
                    var a = l.default.Children.map(e.children, r)[e.index];
                    null != a && a === l.default.Children.map(t.children, r)[t.index] && (n = !0)
                }
                return n
            }
        }
        ,
        303: (e,t,n)=>{
            "use strict";
            var r = n(318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            Object.defineProperty(t, "checkIndexBounds", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }),
            Object.defineProperty(t, "computeIndex", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }),
            Object.defineProperty(t, "constant", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }),
            Object.defineProperty(t, "getDisplaySameSlide", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }),
            Object.defineProperty(t, "mod", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            });
            var l = r(n(714))
              , a = r(n(493))
              , i = r(n(491))
              , o = r(n(661))
              , s = r(n(410))
        }
        ,
        410: (e,t)=>{
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            t.default = function(e, t) {
                var n = e % t;
                return n < 0 ? n + t : n
            }
        }
        ,
        496: (e,t,n)=>{
            "use strict";
            var r = n(862)
              , l = n(318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getDomTreeShapes = x,
            t.findNativeHandler = S,
            t.default = t.SwipeableViewsContext = void 0;
            var a = l(n(154))
              , i = l(n(479))
              , o = l(n(575))
              , s = l(n(913))
              , u = l(n(585))
              , c = l(n(754))
              , d = l(n(205))
              , f = r(n(294))
              , p = (l(n(697)),
            l(n(473)),
            n(303));
            function h(e, t, n, r) {
                return e.addEventListener(t, n, r),
                {
                    remove: function() {
                        e.removeEventListener(t, n, r)
                    }
                }
            }
            var m = {
                direction: "ltr",
                display: "flex",
                willChange: "transform"
            }
              , g = {
                width: "100%",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                overflow: "auto"
            }
              , v = {
                root: {
                    x: {
                        overflowX: "hidden"
                    },
                    "x-reverse": {
                        overflowX: "hidden"
                    },
                    y: {
                        overflowY: "hidden"
                    },
                    "y-reverse": {
                        overflowY: "hidden"
                    }
                },
                flexDirection: {
                    x: "row",
                    "x-reverse": "row-reverse",
                    y: "column",
                    "y-reverse": "column-reverse"
                },
                transform: {
                    x: function(e) {
                        return "translate(".concat(-e, "%, 0)")
                    },
                    "x-reverse": function(e) {
                        return "translate(".concat(e, "%, 0)")
                    },
                    y: function(e) {
                        return "translate(0, ".concat(-e, "%)")
                    },
                    "y-reverse": function(e) {
                        return "translate(0, ".concat(e, "%)")
                    }
                },
                length: {
                    x: "width",
                    "x-reverse": "width",
                    y: "height",
                    "y-reverse": "height"
                },
                rotationMatrix: {
                    x: {
                        x: [1, 0],
                        y: [0, 1]
                    },
                    "x-reverse": {
                        x: [-1, 0],
                        y: [0, 1]
                    },
                    y: {
                        x: [0, 1],
                        y: [1, 0]
                    },
                    "y-reverse": {
                        x: [0, -1],
                        y: [1, 0]
                    }
                },
                scrollPosition: {
                    x: "scrollLeft",
                    "x-reverse": "scrollLeft",
                    y: "scrollTop",
                    "y-reverse": "scrollTop"
                },
                scrollLength: {
                    x: "scrollWidth",
                    "x-reverse": "scrollWidth",
                    y: "scrollHeight",
                    "y-reverse": "scrollHeight"
                },
                clientLength: {
                    x: "clientWidth",
                    "x-reverse": "clientWidth",
                    y: "clientHeight",
                    "y-reverse": "clientHeight"
                }
            };
            function y(e, t) {
                var n = t.duration
                  , r = t.easeFunction
                  , l = t.delay;
                return "".concat(e, " ").concat(n, " ").concat(r, " ").concat(l)
            }
            function b(e, t) {
                var n = v.rotationMatrix[t];
                return {
                    pageX: n.x[0] * e.pageX + n.x[1] * e.pageY,
                    pageY: n.y[0] * e.pageX + n.y[1] * e.pageY
                }
            }
            function w(e) {
                return e.touches = [{
                    pageX: e.pageX,
                    pageY: e.pageY
                }],
                e
            }
            function x(e, t) {
                for (var n = []; e && e !== t && e !== document.body && !e.hasAttribute("data-swipeable"); ) {
                    var r = window.getComputedStyle(e);
                    "absolute" === r.getPropertyValue("position") || "hidden" === r.getPropertyValue("overflow-x") ? n = [] : (e.clientWidth > 0 && e.scrollWidth > e.clientWidth || e.clientHeight > 0 && e.scrollHeight > e.clientHeight) && n.push({
                        element: e,
                        scrollWidth: e.scrollWidth,
                        scrollHeight: e.scrollHeight,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                    }),
                    e = e.parentNode
                }
                return n
            }
            var k = null;
            function S(e) {
                var t = e.domTreeShapes
                  , n = e.pageX
                  , r = e.startX
                  , l = e.axis;
                return t.some((function(e) {
                    var t = n >= r;
                    "x" !== l && "y" !== l || (t = !t);
                    var a = Math.round(e[v.scrollPosition[l]])
                      , i = a > 0
                      , o = a + e[v.clientLength[l]] < e[v.scrollLength[l]];
                    return !!(t && o || !t && i) && (k = e.element,
                    !0)
                }
                ))
            }
            var C = f.createContext();
            t.SwipeableViewsContext = C;
            var E = function(e) {
                function t(e) {
                    var n;
                    return (0,
                    o.default)(this, t),
                    (n = (0,
                    u.default)(this, (0,
                    c.default)(t).call(this, e))).rootNode = null,
                    n.containerNode = null,
                    n.ignoreNextScrollEvents = !1,
                    n.viewLength = 0,
                    n.startX = 0,
                    n.lastX = 0,
                    n.vx = 0,
                    n.startY = 0,
                    n.isSwiping = void 0,
                    n.started = !1,
                    n.startIndex = 0,
                    n.transitionListener = null,
                    n.touchMoveListener = null,
                    n.activeSlide = null,
                    n.indexCurrent = null,
                    n.firstRenderTimeout = null,
                    n.setRootNode = function(e) {
                        n.rootNode = e
                    }
                    ,
                    n.setContainerNode = function(e) {
                        n.containerNode = e
                    }
                    ,
                    n.setActiveSlide = function(e) {
                        n.activeSlide = e,
                        n.updateHeight()
                    }
                    ,
                    n.handleSwipeStart = function(e) {
                        var t = n.props.axis
                          , r = b(e.touches[0], t);
                        n.viewLength = n.rootNode.getBoundingClientRect()[v.length[t]],
                        n.startX = r.pageX,
                        n.lastX = r.pageX,
                        n.vx = 0,
                        n.startY = r.pageY,
                        n.isSwiping = void 0,
                        n.started = !0;
                        var l = window.getComputedStyle(n.containerNode)
                          , a = l.getPropertyValue("-webkit-transform") || l.getPropertyValue("transform");
                        if (a && "none" !== a) {
                            var i = a.split("(")[1].split(")")[0].split(",")
                              , o = window.getComputedStyle(n.rootNode)
                              , s = b({
                                pageX: parseInt(i[4], 10),
                                pageY: parseInt(i[5], 10)
                            }, t);
                            n.startIndex = -s.pageX / (n.viewLength - parseInt(o.paddingLeft, 10) - parseInt(o.paddingRight, 10)) || 0
                        }
                    }
                    ,
                    n.handleSwipeMove = function(e) {
                        if (n.started) {
                            if (null === k || k === n.rootNode) {
                                var t = n.props
                                  , r = t.axis
                                  , l = t.children
                                  , a = t.ignoreNativeScroll
                                  , i = t.onSwitching
                                  , o = t.resistance
                                  , s = b(e.touches[0], r);
                                if (void 0 === n.isSwiping) {
                                    var u = Math.abs(s.pageX - n.startX)
                                      , c = Math.abs(s.pageY - n.startY)
                                      , d = u > c && u > p.constant.UNCERTAINTY_THRESHOLD;
                                    if (!o && ("y" === r || "y-reverse" === r) && (0 === n.indexCurrent && n.startX < s.pageX || n.indexCurrent === f.Children.count(n.props.children) - 1 && n.startX > s.pageX))
                                        return void (n.isSwiping = !1);
                                    if (u > c && e.preventDefault(),
                                    !0 === d || c > p.constant.UNCERTAINTY_THRESHOLD)
                                        return n.isSwiping = d,
                                        void (n.startX = s.pageX)
                                }
                                if (!0 === n.isSwiping) {
                                    e.preventDefault(),
                                    n.vx = .5 * n.vx + .5 * (s.pageX - n.lastX),
                                    n.lastX = s.pageX;
                                    var h = (0,
                                    p.computeIndex)({
                                        children: l,
                                        resistance: o,
                                        pageX: s.pageX,
                                        startIndex: n.startIndex,
                                        startX: n.startX,
                                        viewLength: n.viewLength
                                    })
                                      , m = h.index
                                      , g = h.startX;
                                    if (null === k && !a && S({
                                        domTreeShapes: x(e.target, n.rootNode),
                                        startX: n.startX,
                                        pageX: s.pageX,
                                        axis: r
                                    }))
                                        return;
                                    g ? n.startX = g : null === k && (k = n.rootNode),
                                    n.setIndexCurrent(m);
                                    var v = function() {
                                        i && i(m, "move")
                                    };
                                    !n.state.displaySameSlide && n.state.isDragging || n.setState({
                                        displaySameSlide: !1,
                                        isDragging: !0
                                    }, v),
                                    v()
                                }
                            }
                        } else
                            n.handleTouchStart(e)
                    }
                    ,
                    n.handleSwipeEnd = function() {
                        if (k = null,
                        n.started && (n.started = !1,
                        !0 === n.isSwiping)) {
                            var e, t = n.state.indexLatest, r = n.indexCurrent, l = t - r;
                            e = Math.abs(n.vx) > n.props.threshold ? n.vx > 0 ? Math.floor(r) : Math.ceil(r) : Math.abs(l) > n.props.hysteresis ? l > 0 ? Math.floor(r) : Math.ceil(r) : t;
                            var a = f.Children.count(n.props.children) - 1;
                            e < 0 ? e = 0 : e > a && (e = a),
                            n.setIndexCurrent(e),
                            n.setState({
                                indexLatest: e,
                                isDragging: !1
                            }, (function() {
                                n.props.onSwitching && n.props.onSwitching(e, "end"),
                                n.props.onChangeIndex && e !== t && n.props.onChangeIndex(e, t, {
                                    reason: "swipe"
                                }),
                                r === t && n.handleTransitionEnd()
                            }
                            ))
                        }
                    }
                    ,
                    n.handleTouchStart = function(e) {
                        n.props.onTouchStart && n.props.onTouchStart(e),
                        n.handleSwipeStart(e)
                    }
                    ,
                    n.handleTouchEnd = function(e) {
                        n.props.onTouchEnd && n.props.onTouchEnd(e),
                        n.handleSwipeEnd(e)
                    }
                    ,
                    n.handleMouseDown = function(e) {
                        n.props.onMouseDown && n.props.onMouseDown(e),
                        e.persist(),
                        n.handleSwipeStart(w(e))
                    }
                    ,
                    n.handleMouseUp = function(e) {
                        n.props.onMouseUp && n.props.onMouseUp(e),
                        n.handleSwipeEnd(w(e))
                    }
                    ,
                    n.handleMouseLeave = function(e) {
                        n.props.onMouseLeave && n.props.onMouseLeave(e),
                        n.started && n.handleSwipeEnd(w(e))
                    }
                    ,
                    n.handleMouseMove = function(e) {
                        n.props.onMouseMove && n.props.onMouseMove(e),
                        n.started && n.handleSwipeMove(w(e))
                    }
                    ,
                    n.handleScroll = function(e) {
                        if (n.props.onScroll && n.props.onScroll(e),
                        e.target === n.rootNode)
                            if (n.ignoreNextScrollEvents)
                                n.ignoreNextScrollEvents = !1;
                            else {
                                var t = n.state.indexLatest
                                  , r = Math.ceil(e.target.scrollLeft / e.target.clientWidth) + t;
                                n.ignoreNextScrollEvents = !0,
                                e.target.scrollLeft = 0,
                                n.props.onChangeIndex && r !== t && n.props.onChangeIndex(r, t, {
                                    reason: "focus"
                                })
                            }
                    }
                    ,
                    n.updateHeight = function() {
                        if (null !== n.activeSlide) {
                            var e = n.activeSlide.children[0];
                            void 0 !== e && void 0 !== e.offsetHeight && n.state.heightLatest !== e.offsetHeight && n.setState({
                                heightLatest: e.offsetHeight
                            })
                        }
                    }
                    ,
                    n.state = {
                        indexLatest: e.index,
                        isDragging: !1,
                        renderOnlyActive: !e.disableLazyLoading,
                        heightLatest: 0,
                        displaySameSlide: !0
                    },
                    n.setIndexCurrent(e.index),
                    n
                }
                return (0,
                d.default)(t, e),
                (0,
                s.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.transitionListener = h(this.containerNode, "transitionend", (function(t) {
                            t.target === e.containerNode && e.handleTransitionEnd()
                        }
                        )),
                        this.touchMoveListener = h(this.rootNode, "touchmove", (function(t) {
                            e.props.disabled || e.handleSwipeMove(t)
                        }
                        ), {
                            passive: !1
                        }),
                        this.props.disableLazyLoading || (this.firstRenderTimeout = setTimeout((function() {
                            e.setState({
                                renderOnlyActive: !1
                            })
                        }
                        ), 0)),
                        this.props.action && this.props.action({
                            updateHeight: this.updateHeight
                        })
                    }
                }, {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        var t = e.index;
                        "number" == typeof t && t !== this.props.index && (this.setIndexCurrent(t),
                        this.setState({
                            displaySameSlide: (0,
                            p.getDisplaySameSlide)(this.props, e),
                            indexLatest: t
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.transitionListener.remove(),
                        this.touchMoveListener.remove(),
                        clearTimeout(this.firstRenderTimeout)
                    }
                }, {
                    key: "getSwipeableViewsContext",
                    value: function() {
                        var e = this;
                        return {
                            slideUpdateHeight: function() {
                                e.updateHeight()
                            }
                        }
                    }
                }, {
                    key: "setIndexCurrent",
                    value: function(e) {
                        if (this.props.animateTransitions || this.indexCurrent === e || this.handleTransitionEnd(),
                        this.indexCurrent = e,
                        this.containerNode) {
                            var t = this.props.axis
                              , n = v.transform[t](100 * e);
                            this.containerNode.style.WebkitTransform = n,
                            this.containerNode.style.transform = n
                        }
                    }
                }, {
                    key: "handleTransitionEnd",
                    value: function() {
                        this.props.onTransitionEnd && (this.state.displaySameSlide || this.state.isDragging || this.props.onTransitionEnd())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n = this, r = this.props, l = (r.action,
                        r.animateHeight), o = r.animateTransitions, s = r.axis, u = r.children, c = r.containerStyle, d = r.disabled, p = (r.disableLazyLoading,
                        r.enableMouseEvents), h = (r.hysteresis,
                        r.ignoreNativeScroll,
                        r.index,
                        r.onChangeIndex,
                        r.onSwitching,
                        r.onTransitionEnd,
                        r.resistance,
                        r.slideStyle), b = r.slideClassName, w = r.springConfig, x = r.style, k = (r.threshold,
                        (0,
                        i.default)(r, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"])), S = this.state, E = S.displaySameSlide, M = S.heightLatest, _ = S.indexLatest, T = S.isDragging, I = S.renderOnlyActive, P = d ? {} : {
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd
                        }, N = !d && p ? {
                            onMouseDown: this.handleMouseDown,
                            onMouseUp: this.handleMouseUp,
                            onMouseLeave: this.handleMouseLeave,
                            onMouseMove: this.handleMouseMove
                        } : {}, L = (0,
                        a.default)({}, g, h);
                        if (T || !o || E)
                            e = "all 0s ease 0s",
                            t = "all 0s ease 0s";
                        else if (e = y("transform", w),
                        t = y("-webkit-transform", w),
                        0 !== M) {
                            var R = ", ".concat(y("height", w));
                            e += R,
                            t += R
                        }
                        var z = {
                            height: null,
                            WebkitFlexDirection: v.flexDirection[s],
                            flexDirection: v.flexDirection[s],
                            WebkitTransition: t,
                            transition: e
                        };
                        if (!I) {
                            var O = v.transform[s](100 * this.indexCurrent);
                            z.WebkitTransform = O,
                            z.transform = O
                        }
                        return l && (z.height = M),
                        f.createElement(C.Provider, {
                            value: this.getSwipeableViewsContext()
                        }, f.createElement("div", (0,
                        a.default)({
                            ref: this.setRootNode,
                            style: (0,
                            a.default)({}, v.root[s], x)
                        }, k, P, N, {
                            onScroll: this.handleScroll
                        }), f.createElement("div", {
                            ref: this.setContainerNode,
                            style: (0,
                            a.default)({}, z, m, c),
                            className: "react-swipeable-view-container"
                        }, f.Children.map(u, (function(e, t) {
                            if (I && t !== _)
                                return null;
                            var r, a = !0;
                            return t === _ && (a = !1,
                            l && (r = n.setActiveSlide,
                            L.overflowY = "hidden")),
                            f.createElement("div", {
                                ref: r,
                                style: L,
                                className: b,
                                "aria-hidden": a,
                                "data-swipeable": "true"
                            }, e)
                        }
                        )))))
                    }
                }]),
                t
            }(f.Component);
            E.displayName = "ReactSwipableView",
            E.propTypes = {},
            E.defaultProps = {
                animateHeight: !1,
                animateTransitions: !0,
                axis: "x",
                disabled: !1,
                disableLazyLoading: !1,
                enableMouseEvents: !1,
                hysteresis: .6,
                ignoreNativeScroll: !1,
                index: 0,
                threshold: 5,
                springConfig: {
                    duration: "0.35s",
                    easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
                    delay: "0s"
                },
                resistance: !1
            };
            var M = E;
            t.default = M
        }
        ,
        314: (e,t,n)=>{
            "use strict";
            var r = n(862);
            Object.defineProperty(t, "ZP", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var l = r(n(496))
        }
        ,
        408: (e,t)=>{
            "use strict";
            var n = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , l = Symbol.for("react.fragment")
              , a = Symbol.for("react.strict_mode")
              , i = Symbol.for("react.profiler")
              , o = Symbol.for("react.provider")
              , s = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , d = Symbol.for("react.memo")
              , f = Symbol.for("react.lazy")
              , p = Symbol.iterator
              , h = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , m = Object.assign
              , g = {};
            function v(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = g,
                this.updater = n || h
            }
            function y() {}
            function b(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = g,
                this.updater = n || h
            }
            v.prototype.isReactComponent = {},
            v.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = v.prototype;
            var w = b.prototype = new y;
            w.constructor = b,
            m(w, v.prototype),
            w.isPureReactComponent = !0;
            var x = Array.isArray
              , k = Object.prototype.hasOwnProperty
              , S = {
                current: null
            }
              , C = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function E(e, t, r) {
                var l, a = {}, i = null, o = null;
                if (null != t)
                    for (l in void 0 !== t.ref && (o = t.ref),
                    void 0 !== t.key && (i = "" + t.key),
                    t)
                        k.call(t, l) && !C.hasOwnProperty(l) && (a[l] = t[l]);
                var s = arguments.length - 2;
                if (1 === s)
                    a.children = r;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++)
                        u[c] = arguments[c + 2];
                    a.children = u
                }
                if (e && e.defaultProps)
                    for (l in s = e.defaultProps)
                        void 0 === a[l] && (a[l] = s[l]);
                return {
                    $$typeof: n,
                    type: e,
                    key: i,
                    ref: o,
                    props: a,
                    _owner: S.current
                }
            }
            function M(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }
            var _ = /\/+/g;
            function T(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function I(e, t, l, a, i) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var s = !1;
                if (null === e)
                    s = !0;
                else
                    switch (o) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case n:
                        case r:
                            s = !0
                        }
                    }
                if (s)
                    return i = i(s = e),
                    e = "" === a ? "." + T(s, 0) : a,
                    x(i) ? (l = "",
                    null != e && (l = e.replace(_, "$&/") + "/"),
                    I(i, t, l, "", (function(e) {
                        return e
                    }
                    ))) : null != i && (M(i) && (i = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, l + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(_, "$&/") + "/") + e)),
                    t.push(i)),
                    1;
                if (s = 0,
                a = "" === a ? "." : a + ":",
                x(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = a + T(o = e[u], u);
                        s += I(o, t, l, c, i)
                    }
                else if (c = function(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e),
                "function" == typeof c)
                    for (e = c.call(e),
                    u = 0; !(o = e.next()).done; )
                        s += I(o = o.value, t, l, c = a + T(o, u++), i);
                else if ("object" === o)
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }
            function P(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , l = 0;
                return I(e, r, "", "", (function(e) {
                    return t.call(n, e, l++)
                }
                )),
                r
            }
            function N(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var L = {
                current: null
            }
              , R = {
                transition: null
            }
              , z = {
                ReactCurrentDispatcher: L,
                ReactCurrentBatchConfig: R,
                ReactCurrentOwner: S
            };
            t.Children = {
                map: P,
                forEach: function(e, t, n) {
                    P(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return P(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return P(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!M(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            t.Component = v,
            t.Fragment = l,
            t.Profiler = i,
            t.PureComponent = b,
            t.StrictMode = a,
            t.Suspense = c,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z,
            t.cloneElement = function(e, t, r) {
                if (null == e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var l = m({}, e.props)
                  , a = e.key
                  , i = e.ref
                  , o = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref,
                    o = S.current),
                    void 0 !== t.key && (a = "" + t.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (u in t)
                        k.call(t, u) && !C.hasOwnProperty(u) && (l[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u)
                    l.children = r;
                else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    l.children = s
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: a,
                    ref: i,
                    props: l,
                    _owner: o
                }
            }
            ,
            t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: o,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = E,
            t.createFactory = function(e) {
                var t = E.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            t.isValidElement = M,
            t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: N
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.startTransition = function(e) {
                var t = R.transition;
                R.transition = {};
                try {
                    e()
                } finally {
                    R.transition = t
                }
            }
            ,
            t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            ,
            t.useCallback = function(e, t) {
                return L.current.useCallback(e, t)
            }
            ,
            t.useContext = function(e) {
                return L.current.useContext(e)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useDeferredValue = function(e) {
                return L.current.useDeferredValue(e)
            }
            ,
            t.useEffect = function(e, t) {
                return L.current.useEffect(e, t)
            }
            ,
            t.useId = function() {
                return L.current.useId()
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return L.current.useImperativeHandle(e, t, n)
            }
            ,
            t.useInsertionEffect = function(e, t) {
                return L.current.useInsertionEffect(e, t)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return L.current.useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return L.current.useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return L.current.useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return L.current.useRef(e)
            }
            ,
            t.useState = function(e) {
                return L.current.useState(e)
            }
            ,
            t.useSyncExternalStore = function(e, t, n) {
                return L.current.useSyncExternalStore(e, t, n)
            }
            ,
            t.useTransition = function() {
                return L.current.useTransition()
            }
            ,
            t.version = "18.2.0"
        }
        ,
        294: (e,t,n)=>{
            "use strict";
            e.exports = n(408)
        }
        ,
        53: (e,t)=>{
            "use strict";
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                      , l = e[r];
                    if (!(0 < a(l, t)))
                        break e;
                    e[r] = t,
                    e[n] = l,
                    n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function l(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                  , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
                        var o = 2 * (r + 1) - 1
                          , s = e[o]
                          , u = o + 1
                          , c = e[u];
                        if (0 > a(s, n))
                            u < l && 0 > a(c, s) ? (e[r] = c,
                            e[u] = n,
                            r = u) : (e[r] = s,
                            e[o] = n,
                            r = o);
                        else {
                            if (!(u < l && 0 > a(c, n)))
                                break e;
                            e[r] = c,
                            e[u] = n,
                            r = u
                        }
                    }
                }
                return t
            }
            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var i = performance;
                t.unstable_now = function() {
                    return i.now()
                }
            } else {
                var o = Date
                  , s = o.now();
                t.unstable_now = function() {
                    return o.now() - s
                }
            }
            var u = []
              , c = []
              , d = 1
              , f = null
              , p = 3
              , h = !1
              , m = !1
              , g = !1
              , v = "function" == typeof setTimeout ? setTimeout : null
              , y = "function" == typeof clearTimeout ? clearTimeout : null
              , b = "undefined" != typeof setImmediate ? setImmediate : null;
            function w(e) {
                for (var t = r(c); null !== t; ) {
                    if (null === t.callback)
                        l(c);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        l(c),
                        t.sortIndex = t.expirationTime,
                        n(u, t)
                    }
                    t = r(c)
                }
            }
            function x(e) {
                if (g = !1,
                w(e),
                !m)
                    if (null !== r(u))
                        m = !0,
                        R(k);
                    else {
                        var t = r(c);
                        null !== t && z(x, t.startTime - e)
                    }
            }
            function k(e, n) {
                m = !1,
                g && (g = !1,
                y(M),
                M = -1),
                h = !0;
                var a = p;
                try {
                    for (w(n),
                    f = r(u); null !== f && (!(f.expirationTime > n) || e && !I()); ) {
                        var i = f.callback;
                        if ("function" == typeof i) {
                            f.callback = null,
                            p = f.priorityLevel;
                            var o = i(f.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" == typeof o ? f.callback = o : f === r(u) && l(u),
                            w(n)
                        } else
                            l(u);
                        f = r(u)
                    }
                    if (null !== f)
                        var s = !0;
                    else {
                        var d = r(c);
                        null !== d && z(x, d.startTime - n),
                        s = !1
                    }
                    return s
                } finally {
                    f = null,
                    p = a,
                    h = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var S, C = !1, E = null, M = -1, _ = 5, T = -1;
            function I() {
                return !(t.unstable_now() - T < _)
            }
            function P() {
                if (null !== E) {
                    var e = t.unstable_now();
                    T = e;
                    var n = !0;
                    try {
                        n = E(!0, e)
                    } finally {
                        n ? S() : (C = !1,
                        E = null)
                    }
                } else
                    C = !1
            }
            if ("function" == typeof b)
                S = function() {
                    b(P)
                }
                ;
            else if ("undefined" != typeof MessageChannel) {
                var N = new MessageChannel
                  , L = N.port2;
                N.port1.onmessage = P,
                S = function() {
                    L.postMessage(null)
                }
            } else
                S = function() {
                    v(P, 0)
                }
                ;
            function R(e) {
                E = e,
                C || (C = !0,
                S())
            }
            function z(e, n) {
                M = v((function() {
                    e(t.unstable_now())
                }
                ), n)
            }
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                m || h || (m = !0,
                R(k))
            }
            ,
            t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return p
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            t.unstable_next = function(e) {
                switch (p) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = function() {}
            ,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, l, a) {
                var i = t.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i,
                e) {
                case 1:
                    var o = -1;
                    break;
                case 2:
                    o = 250;
                    break;
                case 5:
                    o = 1073741823;
                    break;
                case 4:
                    o = 1e4;
                    break;
                default:
                    o = 5e3
                }
                return e = {
                    id: d++,
                    callback: l,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: o = a + o,
                    sortIndex: -1
                },
                a > i ? (e.sortIndex = a,
                n(c, e),
                null === r(u) && e === r(c) && (g ? (y(M),
                M = -1) : g = !0,
                z(x, a - i))) : (e.sortIndex = o,
                n(u, e),
                m || h || (m = !0,
                R(k))),
                e
            }
            ,
            t.unstable_shouldYield = I,
            t.unstable_wrapCallback = function(e) {
                var t = p;
                return function() {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        }
        ,
        840: (e,t,n)=>{
            "use strict";
            e.exports = n(53)
        }
        ,
        379: e=>{
            "use strict";
            var t = [];
            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++)
                    if (t[r].identifier === e) {
                        n = r;
                        break
                    }
                return n
            }
            function r(e, r) {
                for (var a = {}, i = [], o = 0; o < e.length; o++) {
                    var s = e[o]
                      , u = r.base ? s[0] + r.base : s[0]
                      , c = a[u] || 0
                      , d = "".concat(u, " ").concat(c);
                    a[u] = c + 1;
                    var f = n(d)
                      , p = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3],
                        supports: s[4],
                        layer: s[5]
                    };
                    if (-1 !== f)
                        t[f].references++,
                        t[f].updater(p);
                    else {
                        var h = l(p, r);
                        r.byIndex = o,
                        t.splice(o, 0, {
                            identifier: d,
                            updater: h,
                            references: 1
                        })
                    }
                    i.push(d)
                }
                return i
            }
            function l(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, l) {
                var a = r(e = e || [], l = l || {});
                return function(e) {
                    e = e || [];
                    for (var i = 0; i < a.length; i++) {
                        var o = n(a[i]);
                        t[o].references--
                    }
                    for (var s = r(e, l), u = 0; u < a.length; u++) {
                        var c = n(a[u]);
                        0 === t[c].references && (t[c].updater(),
                        t.splice(c, 1))
                    }
                    a = s
                }
            }
        }
        ,
        569: e=>{
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var r = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }
        ,
        216: e=>{
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        }
        ,
        565: (e,t,n)=>{
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }
        ,
        795: e=>{
            "use strict";
            e.exports = function(e) {
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")),
                            n.media && (r += "@media ".concat(n.media, " {"));
                            var l = void 0 !== n.layer;
                            l && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            r += n.css,
                            l && (r += "}"),
                            n.media && (r += "}"),
                            n.supports && (r += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                            t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }
        ,
        589: e=>{
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
        ,
        473: e=>{
            "use strict";
            e.exports = function() {}
        }
    }
      , t = {};
    function n(r) {
        var l = t[r];
        if (void 0 !== l)
            return l.exports;
        var a = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](a, a.exports, n),
        a.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n.nc = void 0,
    (()=>{
        "use strict";
        var e = n(294)
          , t = n(745)
          , r = n(379)
          , l = n.n(r)
          , a = n(795)
          , i = n.n(a)
          , o = n(569)
          , s = n.n(o)
          , u = n(565)
          , c = n.n(u)
          , d = n(216)
          , f = n.n(d)
          , p = n(589)
          , h = n.n(p)
          , m = n(693)
          , g = {};
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        g.styleTagTransform = h(),
        g.setAttributes = c(),
        g.insert = s().bind(null, "head"),
        g.domAPI = i(),
        g.insertStyleElement = f(),
        l()(m.Z, g),
        m.Z && m.Z.locals && m.Z.locals;
        class y extends e.Component {
            constructor(e) {
                super(e),
                v(this, "_stopMicrophone", !0),
                v(this, "audioBuffer", []),
                v(this, "voiceBeginNum", 20),
                v(this, "initMicrophone", (()=>{
                    this._initMicrophoneKey = Date.now(),
                    this._stopMicrophone = !1,
                    navigator.mediaDevices.getUserMedia({
                        audio: !0
                    }).then((e=>{
                        this.onGetUserMediaSuccess(e, this._initMicrophoneKey)
                    }
                    )).catch((()=>{
                        this._stopMicrophone = !0,
                        this.setState({
                            voiceNum: -1
                        })
                    }
                    ))
                }
                )),
                v(this, "onGetUserMediaSuccess", ((e,t)=>{
                    if (this._stopMicrophone || this.audioStream)
                        return e.getTracks().forEach((e=>e.stop())),
                        this.stopMicrophone();
                    this.audioBuffer = [],
                    this.audioStream = e,
                    this.transformpcmWorker || (this.transformpcmWorker = new window.Worker("./voice/transformpcm.worker.js"),
                    this.transformpcmWorker.onmessage = e=>{
                        this.audioBuffer.push(...e.data)
                    }
                    ),
                    this.audioContext = new window.AudioContext;
                    const n = this.audioContext.createAnalyser()
                      , r = this.audioContext.createScriptProcessor(0, 1, 1)
                      , l = this.audioContext.createMediaStreamSource(e);
                    let a = !1
                      , i = [];
                    r.onaudioprocess = e=>{
                        const t = e.inputBuffer.getChannelData(0);
                        a ? (i && (i.forEach((e=>{
                            this.transformpcmWorker.postMessage(e)
                        }
                        )),
                        i = null),
                        this.transformpcmWorker.postMessage(t)) : (3 === i.length && i.shift(),
                        i.push(t))
                    }
                    ,
                    l.connect(n),
                    n.connect(r),
                    r.connect(this.audioContext.destination),
                    n.fftSize = 32;
                    const o = new Uint8Array(n.frequencyBinCount)
                      , s = ()=>{
                        if (t !== this._initMicrophoneKey)
                            return;
                        if (this._stopMicrophone)
                            return void (this.state.voiceNum > 0 && this.setState({
                                voiceNum: 0
                            }));
                        window.requestAnimationFrame(s),
                        n.getByteFrequencyData(o);
                        let e = o.sort(((e,t)=>t - e)).slice(0, 8).reduce(((e,t)=>e + t)) / 8 * 100 / 255 | 0;
                        e < this.voiceBeginNum ? e = this.voiceBeginNum : a || (a = !0,
                        this.connectXFYUN(t)),
                        e !== this.state.voiceNum && this.setState({
                            voiceNum: e
                        })
                    }
                    ;
                    s(),
                    this.setState({
                        voiceNum: this.voiceBeginNum
                    })
                }
                )),
                v(this, "stopMicrophone", (()=>{
                    this._stopMicrophone || (this._stopMicrophone = !0,
                    this.audioStream && (this.audioStream.getTracks().forEach((e=>e.stop())),
                    this.audioStream = null,
                    this.audioBuffer = [],
                    this.audioContext.close()),
                    this.setState({
                        voiceNum: 0
                    }))
                }
                )),
                v(this, "connectXFYUN", (e=>{
                    if (this.webSocket && 3 !== this.webSocket.readyState)
                        return this.stopMicrophone();
                    if (this.props.checkVoiceLimit())
                        return this.stopMicrophone();
                    let t = [];
                    const n = (new Date).toGMTString()
                      , r = `wss://iat-api.xfyun.cn/v2/iat?authorization=${window.services.voice.getXFAuthStr(n)}&date=${n}&host=iat-api.xfyun.cn`;
                    this.webSocket = new window.WebSocket(r),
                    this.webSocket.onopen = e=>{
                        setTimeout(this.startSendAudioToXFYUN, 40)
                    }
                    ,
                    this.webSocket.onmessage = n=>{
                        if (e !== this._initMicrophoneKey)
                            return;
                        const r = JSON.parse(n.data);
                        if (r.code || 2 === r.data.status)
                            return this.webSocket.close();
                        if (!this._stopMicrophone) {
                            if ("rpl" === r.data.result.pgs) {
                                const e = r.data.result.rg;
                                for (let n = e[0] - 1; n < e[1]; n++)
                                    t[n] = ""
                            }
                            t.push(r.data.result.ws.map((e=>e.cw[0].w)).join("")),
                            this.props.onChange(t.join(""))
                        }
                    }
                    ,
                    this.webSocket.onerror = ()=>{
                        e === this._initMicrophoneKey && (t = null,
                        this.stopMicrophone())
                    }
                    ,
                    this.webSocket.onclose = ()=>{
                        e === this._initMicrophoneKey && (t = null,
                        this.stopMicrophone())
                    }
                }
                )),
                v(this, "startSendAudioToXFYUN", (()=>{
                    if (this.webSocket.readyState > 1)
                        return this.stopMicrophone();
                    let e = this.audioBuffer.splice(0, 1280);
                    const t = {
                        common: {
                            app_id: "56f3a3f4"
                        },
                        business: {
                            language: "zh_cn",
                            domain: "iat",
                            accent: "mandarin",
                            vad_eos: 1e4,
                            dwa: "wpgs",
                            ptt: 1
                        },
                        data: {
                            status: 0,
                            format: "audio/L16;rate=16000",
                            encoding: "raw",
                            audio: this.arrayBufferToBase64(e)
                        }
                    };
                    this.webSocket.send(JSON.stringify(t)),
                    this.sendAudioInterval && clearInterval(this.sendAudioInterval),
                    this.sendAudioInterval = setInterval((()=>this.webSocket.readyState > 1 ? (clearInterval(this.sendAudioInterval),
                    this.sendAudioInterval = null,
                    this.stopMicrophone()) : this._stopMicrophone || 0 === this.audioBuffer.length ? (this.webSocket.send(JSON.stringify({
                        data: {
                            status: 2,
                            format: "audio/L16;rate=16000",
                            encoding: "raw",
                            audio: ""
                        }
                    })),
                    clearInterval(this.sendAudioInterval),
                    void (this.sendAudioInterval = null)) : (e = this.audioBuffer.splice(0, 1280),
                    void this.webSocket.send(JSON.stringify({
                        data: {
                            status: 1,
                            format: "audio/L16;rate=16000",
                            encoding: "raw",
                            audio: this.arrayBufferToBase64(e)
                        }
                    })))), 40)
                }
                )),
                this.state = {
                    voiceNum: 0
                }
            }
            shouldComponentUpdate(e, t) {
                return t.voiceNum !== this.state.voiceNum
            }
            arrayBufferToBase64(e) {
                let t = "";
                const n = new Uint8Array(e)
                  , r = n.byteLength;
                for (let e = 0; e < r; e++)
                    t += String.fromCharCode(n[e]);
                return window.btoa(t)
            }
            render() {
                return e.createElement("div", {
                    className: "microphone"
                }, e.createElement("img", {
                    src: "./res/microphone.svg"
                }), e.createElement("div", {
                    className: "voiceNum"
                }, e.createElement("div", {
                    style: {
                        height: this.state.voiceNum + "%"
                    }
                })), -1 === this.state.voiceNum && e.createElement("div", {
                    className: "disable"
                }))
            }
        }
        class b extends e.Component {
            constructor(...e) {
                var t, n;
                super(...e),
                n = ()=>{
                    this.props.onClick(this.props.item)
                }
                ,
                (t = "handleClick")in this ? Object.defineProperty(this, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : this[t] = n
            }
            shouldComponentUpdate(e, t) {
                return this.props.item !== e.item || this.props.isSelected !== e.isSelected
            }
            cmdLabel(t, n, r) {
                if ("base" === t.type || "pyfirst" === t.type || "pyfirst+" === t.type)
                    return e.createElement("span", null, t.label.substring(0, n), e.createElement("span", {
                        className: "match"
                    }, t.label.substr(n, r.length)), t.label.substr(n + r.length));
                if ("enfirst" === t.type) {
                    /(.*?)(?<=(?:^|[\u4e00-\u9fa5 ]))([A-Z][a-z0-9]*(?: ?[A-Z][a-z0-9]*| \d+)+)(.*)/.test(t.label);
                    const l = RegExp.$1
                      , a = RegExp.$2
                      , i = RegExp.$3;
                    let o = a.match(/ ?[A-Z][a-z0-9]*| \d+/g);
                    if (/ \d+/.test(a)) {
                        const e = [];
                        o.forEach((t=>{
                            /^ \d+$/.test(t) ? t.match(/\d/g).forEach(((t,n)=>{
                                0 === n ? e.push(" " + t) : e.push(t)
                            }
                            )) : e.push(t)
                        }
                        )),
                        o = e
                    }
                    for (let t = n - l.length; t < r.length + n - l.length && o[t]; t++)
                        " " === o[t][0] ? o[t] = e.createElement("span", {
                            key: t
                        }, e.createElement("span", {
                            className: "match"
                        }, o[t].substr(0, 2)), o[t].substr(2)) : o[t] = e.createElement("span", {
                            key: t
                        }, e.createElement("span", {
                            className: "match"
                        }, o[t].charAt(0)), o[t].substr(1));
                    return l && o.unshift(l),
                    i && o.push(i),
                    e.createElement("span", null, o)
                }
                return e.createElement("span", null, t.label)
            }
            render() {
                const {item: t, isSelected: n, pluginContainer: r, voiceText: l} = this.props
                  , a = r[t.cmd.pluginId]
                  , i = a.featureDic[t.cmd.featureCode];
                return e.createElement("div", {
                    onClick: this.handleClick,
                    className: "feature-row" + (t.extend ? " extend-feature-row" : "") + (n ? " feature-row-selected" : "")
                }, i.icon ? e.createElement("div", {
                    className: "feature-icon"
                }, e.createElement("img", {
                    style: i.backgroundColor ? {
                        backgroundColor: i.backgroundColor
                    } : null,
                    draggable: "false",
                    src: i.icon
                })) : e.createElement("div", {
                    className: "feature-icon"
                }, e.createElement("img", {
                    draggable: "false",
                    src: a.logo
                })), e.createElement("div", {
                    className: "feature-label"
                }, e.createElement("div", null, this.cmdLabel(t.cmd, t.indexAt, l)), a.unsafe && e.createElement("div", {
                    className: "dev"
                }, e.createElement("span", null, "!"))))
            }
        }
        var w = n(314);
        const x = (0,
        e.memo)((function() {
            return e.createElement("svg", {
                viewBox: "0 0 1024 1024",
                width: "32",
                height: "32"
            }, e.createElement("path", {
                d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
            }), e.createElement("path", {
                d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
            }))
        }
        ))
          , k = (0,
        e.memo)((function() {
            return e.createElement("svg", {
                viewBox: "0 0 1024 1024",
                width: "14",
                height: "14"
            }, e.createElement("path", {
                d: "M385 156c-14.912 0-27-12.088-27-27L358 63c-0.004-5.065 1.164-22.021 15.808-37.166C388.458 10.683 410.899 3 440.507 3l152.162 0 1.179 0.104c1.565 0.138 15.714 1.511 30.324 7.289C649.483 20.402 664 39.212 664 62l0 66c0 14.912-12.088 27-27 27s-27-12.088-27-27L610 63.531c-3.27-2.581-12.425-5.604-19.969-6.531L440.507 57c-20.752 0-27.526 5.375-28.507 7.189L412 129C412 143.912 399.912 156 385 156z"
            }), e.createElement("path", {
                d: "M990 263 35 263c-17.673 0-32-14.327-32-32s14.327-32 32-32l955 0c17.673 0 32 14.327 32 32S1007.673 263 990 263z"
            }), e.createElement("path", {
                d: "M790 1024 230.048 1024l-1.938-0.237c-3.197-0.392-20.021-2.881-37.32-13.472C165.131 994.581 151 968.907 151 938L151 246c0-17.673 14.327-32 32-32s32 14.327 32 32l0 692c0 10.111 3.92 14.161 8.157 17.031 4.123 2.793 8.994 4.331 11.713 4.969L790 960c8.359 0 14.558-2.268 18.947-6.932 0.777-0.826 1.479-1.724 2.053-2.523L811 235c0-17.673 14.327-32 32-32s32 14.327 32 32l0 728.048-1.554 4.803c-0.829 2.562-5.588 16.006-17.894 29.081C843.931 1009.28 823.123 1024 790 1024z"
            }), e.createElement("path", {
                d: "M384 841c-14.912 0-27-12.088-27-27L357 414c0-14.912 12.088-27 27-27s27 12.088 27 27l0 400C411 828.912 398.912 841 384 841z"
            }), e.createElement("path", {
                d: "M639 841c-14.912 0-27-12.088-27-27L612 414c0-14.912 12.088-27 27-27s27 12.088 27 27l0 400C666 828.912 653.912 841 639 841z"
            }))
        }
        ));
        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const C = 56
          , E = 85
          , M = "menus-item-folder0";
        class _ extends e.Component {
            constructor(...e) {
                super(...e),
                S(this, "handleWheel", (e=>{
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    !this._handleWheelTimeout && 1 !== this.props.panelMenuCmds.length)
                        if (e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : 0 === e.deltaMode) {
                            if (e.deltaX > 30 || e.deltaX < -30) {
                                this._handleWheelTimeout = setTimeout((()=>{
                                    this._handleWheelTimeout = null
                                }
                                ), 500);
                                const t = this.state.index;
                                if (e.deltaX > 0) {
                                    if (t === this.props.panelMenuCmds.length - 1)
                                        return;
                                    return this.setState({
                                        index: t + 1
                                    })
                                }
                                if (e.deltaX < 0) {
                                    if (0 === t)
                                        return;
                                    this.setState({
                                        index: t - 1
                                    })
                                }
                            }
                        } else {
                            this._handleWheelTimeout = setTimeout((()=>{
                                this._handleWheelTimeout = null
                            }
                            ), 350);
                            const t = this.state.index;
                            if (e.deltaY > 0) {
                                if (t === this.props.panelMenuCmds.length - 1)
                                    return;
                                return this.setState({
                                    index: t + 1
                                })
                            }
                            if (e.deltaY < 0) {
                                if (0 === t)
                                    return;
                                this.setState({
                                    index: t - 1
                                })
                            }
                        }
                }
                )),
                S(this, "getMouseMoveHoverMenuIndex", ((e,t)=>{
                    let n;
                    if (this.props.isForward) {
                        if (t <= C)
                            return null;
                        n = Math.floor((t - C - 1) / E)
                    } else {
                        if (t < 0)
                            return null;
                        n = Math.floor(t / E)
                    }
                    let r = Math.floor((e + 1) / E);
                    return 3 === r && (r = 2),
                    3 * n + r
                }
                )),
                S(this, "getMenuItemPositionByIndex", (e=>{
                    const t = Math.floor(e / 3)
                      , n = e % 3;
                    return this.props.isForward ? [n * E + window.borderWidth, C + t * E + window.borderWidth] : [n * E + window.borderWidth, t * E + window.borderWidth]
                }
                )),
                S(this, "handleMouseDown", (()=>{
                    document.addEventListener("mousemove", this.handleMouseMove),
                    document.addEventListener("mouseup", this.handleMouseUp)
                }
                )),
                S(this, "handleMouseUp", (e=>{
                    if (document.removeEventListener("mousemove", this.handleMouseMove),
                    document.removeEventListener("mouseup", this.handleMouseUp),
                    this._dragMenuItem) {
                        if (!this._dragMenuItem.dragRef)
                            return void (this._dragMenuItem = null);
                        const {createAt: e, dragRef: t, targetIndex: n, menuCmd: r, action: l} = this._dragMenuItem;
                        if (this._dragMenuItem = null,
                        t.remove(),
                        !r.child) {
                            const e = document.getElementById("menus-dustbin");
                            e && (e.style = "")
                        }
                        for (let e = 0; e < this.props.panelMenuCmds.length; e++) {
                            const t = this["panelRef" + e];
                            if (t)
                                for (let e = 0; e < t.childNodes.length; e++) {
                                    const n = t.childNodes[e];
                                    n.style && (n.style = ""),
                                    n.classList.contains(M) && n.classList.remove(M)
                                }
                        }
                        if (Date.now() - e < 300)
                            return void this.handleItemClick(r);
                        if (!l)
                            return;
                        if ("sort" === l) {
                            const e = this.props.panelMenuCmds[this.state.index][n];
                            if (!e || e === r)
                                return;
                            return void window.services.voice.sortPanelMenus(r.child ? {
                                pluginId: r.child[0].pluginId,
                                label: r.child[0].label
                            } : {
                                pluginId: r.pluginId,
                                label: r.label
                            }, e.child ? {
                                pluginId: e.child[0].pluginId,
                                label: e.child[0].label
                            } : {
                                pluginId: e.pluginId,
                                label: e.label
                            }).then((e=>{
                                this.props.refreshPanelMenus(e)
                            }
                            ))
                        }
                        if ("folder" === l) {
                            const e = this.props.panelMenuCmds[this.state.index][n];
                            if (!e)
                                return;
                            if (r.child)
                                return;
                            return void window.services.voice.joinPanelMenusFolder({
                                pluginId: r.pluginId,
                                label: r.label
                            }, e.child ? {
                                pluginId: e.child[0].pluginId,
                                label: e.child[0].label
                            } : {
                                pluginId: e.pluginId,
                                label: e.label
                            }).then((e=>{
                                this.props.refreshPanelMenus(e)
                            }
                            ))
                        }
                        if ("outfolder" === l) {
                            if (!this.props.folderCmd)
                                return;
                            return void window.services.voice.outPanelMenusFolder({
                                pluginId: r.pluginId,
                                label: r.label
                            }).then((e=>{
                                this.props.refreshPanelMenus(e)
                            }
                            ))
                        }
                        if ("delete" === l) {
                            if (r.child)
                                return;
                            window.services.voice.removePanelMenus({
                                pluginId: r.pluginId,
                                label: r.label
                            }).then((e=>{
                                this.props.refreshPanelMenus(e)
                            }
                            ))
                        }
                    }
                }
                )),
                S(this, "_menuItemsZeroPlace", ((e,t,n,r)=>{
                    this._dragMenuItem.action = n,
                    this._dragMenuItem.targetIndex = r;
                    for (let n = 0; n < t.length; n++) {
                        if ("text" !== e[n]?.trueType)
                            continue;
                        const l = t[n];
                        l.style.transform = "translate3d(0,0,0)",
                        l.style.transitionDuration = "300ms",
                        r === n ? l.classList.contains(M) || l.classList.add(M) : l.classList.contains(M) && l.classList.remove(M)
                    }
                }
                )),
                S(this, "_dragSwitchPanel", (e=>{
                    if (this._switchPanelTimeout)
                        return;
                    let t;
                    if (e) {
                        if (this.state.index === this.props.panelMenuCmds.length - 1)
                            return;
                        t = this.state.index + 1
                    } else {
                        if (0 === this.state.index)
                            return;
                        t = this.state.index - 1
                    }
                    this.setState({
                        index: t
                    }),
                    this._switchPanelTimeout = setTimeout((()=>{
                        this._switchPanelTimeout = null,
                        this._dragMenuItem && (e ? this._dragMenuItem.mouseX > window.innerWidth - window.borderWidth && this._dragSwitchPanel(!0) : this._dragMenuItem.mouseX < window.borderWidth && this._dragSwitchPanel(!1))
                    }
                    ), 1500)
                }
                )),
                S(this, "handleMouseMove", (e=>{
                    const t = e.clientX - window.borderWidth
                      , n = e.clientY - window.borderWidth;
                    if (this._dragMenuItem) {
                        if (!this._dragMenuItem.dragRef)
                            return;
                        const {dragRef: r, menuCmd: l, sourceIndex: a, panelIndex: i, sourceOffset: o} = this._dragMenuItem;
                        this._dragMenuItem.mouseX = e.clientX,
                        this._dragMenuItem.mouseY = e.clientY,
                        r.style.transform = `translate3d(${e.clientX - o.x}px, ${e.clientY - o.y}px, 0px)`;
                        const s = this["panelRef" + this.state.index]?.childNodes;
                        if (!s)
                            return;
                        const u = this.props.panelMenuCmds[this.state.index];
                        if (e.clientX < window.borderWidth)
                            return this._menuItemsZeroPlace(u, s, null),
                            void (this.state.index > 0 && this._dragSwitchPanel(!1));
                        if (e.clientX > window.innerWidth - window.borderWidth)
                            return this._menuItemsZeroPlace(u, s, null),
                            void (this.state.index < this.props.panelMenuCmds.length - 1 && this._dragSwitchPanel(!0));
                        if (e.clientY < window.borderWidth || e.clientY > window.innerHeight - window.borderWidth)
                            return this._menuItemsZeroPlace(u, s, null);
                        if (this.props.isForward) {
                            if (e.clientY <= C + window.borderWidth)
                                return void this._menuItemsZeroPlace(u, s, l.child ? null : "delete")
                        } else if (e.clientY >= window.innerHeight - C - window.borderWidth)
                            return void this._menuItemsZeroPlace(u, s, l.child ? null : "delete");
                        if (this.props.folderCmd)
                            if (this.props.isForward) {
                                if (e.clientY <= 141 + window.borderWidth)
                                    return void this._menuItemsZeroPlace(u, s, "outfolder")
                            } else if (e.clientY >= window.innerHeight - C - E - window.borderWidth)
                                return void this._menuItemsZeroPlace(u, s, "outfolder");
                        const c = this.getMouseMoveHoverMenuCmd(t, n);
                        if ("text" !== c?.trueType)
                            return this._menuItemsZeroPlace(u, s, null);
                        let d;
                        const f = this.state.index === i;
                        d = f ? a : this.state.index > i ? 0 : this.props.panelMenuCmds[this.state.index].length - 1;
                        const p = u.indexOf(c);
                        if (f && d === p)
                            return this._menuItemsZeroPlace(u, s, null);
                        let h = p;
                        if (!l.child && !this.props.folderCmd) {
                            const t = this.getMenuItemPositionByIndex(p);
                            if (d < p) {
                                if (e.clientX < t[0] + 26)
                                    h = p - 1;
                                else if (e.clientX < t[0] + E - 26)
                                    return void this._menuItemsZeroPlace(u, s, "folder", p)
                            } else if (e.clientX > t[0] + E - 26)
                                h = p + 1;
                            else if (e.clientX > t[0] + 26)
                                return void this._menuItemsZeroPlace(u, s, "folder", p)
                        }
                        this._dragMenuItem.targetIndex = h,
                        this._dragMenuItem.action = "sort";
                        const m = d < h;
                        for (let e = 0; e < s.length; e++) {
                            if ("text" !== u[e]?.trueType)
                                continue;
                            const t = s[e];
                            if (e === d) {
                                if (f)
                                    continue;
                                t.style.transform = `translate3d(${(d ? 1 : -1) * E}px, 0px, 0px)`
                            } else {
                                const n = this.getMenuItemPositionByIndex(e);
                                if (m && e >= d && e <= h || !m && e >= h && e <= d) {
                                    const r = m ? e - 1 : e + 1;
                                    if (r >= 0 && r < s.length) {
                                        const e = this.getMenuItemPositionByIndex(r)
                                          , l = e[0] - n[0]
                                          , a = e[1] - n[1];
                                        t.style.transform = `translate3d(${l}px, ${a}px, 0px)`
                                    }
                                } else
                                    t.style.transform = "translate3d(0,0,0)"
                            }
                            t.style.transitionDuration = "300ms",
                            t.classList.contains(M) && t.classList.remove(M)
                        }
                    } else {
                        const r = this.getMouseMoveHoverMenuCmd(t, n);
                        if ("text" === r?.trueType) {
                            const t = this.state.index
                              , n = this.props.panelMenuCmds[t].indexOf(r)
                              , l = this["panelRef" + t]?.childNodes[n];
                            if (!l)
                                return;
                            const a = l.getBoundingClientRect()
                              , i = {
                                x: e.clientX - a.left,
                                y: e.clientY - a.top
                            }
                              , o = l.cloneNode(!0);
                            if (o.classList.add("menus-item-draging"),
                            o.style.transform = `translate3d(${e.clientX - i.x}px, ${e.clientY - i.y}px, 0px)`,
                            document.body.appendChild(o),
                            l.style.visibility = "hidden",
                            !r.child) {
                                const e = document.getElementById("menus-dustbin");
                                this.props.isForward ? e.style.top = 0 : e.style.bottom = 0
                            }
                            this._dragMenuItem = {
                                createAt: Date.now(),
                                sourceOffset: i,
                                dragRef: o,
                                menuCmd: r,
                                sourceIndex: n,
                                panelIndex: t
                            }
                        } else
                            this._dragMenuItem = {}
                    }
                }
                ))
            }
        }
        const T = (0,
        e.memo)((function({pluginContainer: t, cmd: n, onItemClick: r, mouseHover: l}) {
            if (n.child)
                return e.createElement("div", {
                    onClick: ()=>r(n),
                    className: "menus-item menus-item-folder" + (l ? " menus-item-hover" : "")
                }, e.createElement("div", null, e.createElement("div", {
                    className: "menus-item-icon"
                }, n.child.slice(0, 4).map(((n,r)=>{
                    const l = t[n.pluginId]
                      , a = l.featureDic[n.featureCode];
                    return e.createElement("img", {
                        key: r,
                        style: a.backgroundColor ? {
                            backgroundColor: a.backgroundColor
                        } : null,
                        draggable: "false",
                        src: a.icon || l.logo
                    })
                }
                )))), e.createElement("div", null, e.createElement("div", {
                    className: "menus-item-label"
                }, n.label)));
            const a = t[n.pluginId]
              , i = a.featureDic[n.featureCode];
            return e.createElement("div", {
                onClick: ()=>r(n),
                className: "menus-item" + ("window" === n.trueType ? " menus-item-window" : "") + (l ? " menus-item-hover" : "")
            }, e.createElement("div", null, e.createElement("div", {
                className: "menus-item-icon"
            }, e.createElement("img", {
                style: i.backgroundColor ? {
                    backgroundColor: i.backgroundColor
                } : null,
                draggable: "false",
                src: i.icon || a.logo
            }))), e.createElement("div", null, e.createElement("div", {
                className: "menus-item-label"
            }, n.label)))
        }
        ));
        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        class P extends _ {
            constructor(...e) {
                super(...e),
                I(this, "state", {
                    index: 0,
                    editLabel: !1
                }),
                I(this, "getMouseMoveHoverMenuCmd", ((e,t)=>{
                    const n = this.getMouseMoveHoverMenuIndex(e, t);
                    return n < 3 ? null : this.props.panelMenuCmds[this.state.index][n - 3] || null
                }
                )),
                I(this, "handleLabelBoxClick", (()=>{
                    this.folderLabelRef && !this.state.editLabel && (this.folderLabelRef.style.opacity = 0,
                    this.folderContentRef.style.height = 0,
                    setTimeout((()=>{
                        this.props.onClose()
                    }
                    ), 225))
                }
                )),
                I(this, "handleLabelClick", (e=>{
                    e.stopPropagation(),
                    window.services.voice.windowFocus(),
                    this.setState({
                        editLabel: !0
                    })
                }
                )),
                I(this, "handleStepperItemClick", (e=>{
                    e.stopPropagation();
                    const t = e.currentTarget
                      , n = [...t.parentNode.childNodes].indexOf(t);
                    n !== this.state.index && this.setState({
                        index: n
                    })
                }
                )),
                I(this, "handleLabelInputBlur", (e=>{
                    let t = e.target.value;
                    this.setState({
                        editLabel: !1
                    }),
                    t.length > 255 && (t = t.substring(0, 255)),
                    t !== this.props.folderCmd.label && window.services.voice.updatePanelMenusFolderLabel(this.props.folderCmd.pluginId, t) && (this.props.folderCmd.label = t,
                    this.props.refreshPanelMenus())
                }
                )),
                I(this, "handleLabelInputKeydown", (e=>{
                    if (229 === e.keyCode)
                        return e.preventDefault(),
                        void e.stopPropagation();
                    "Enter" !== e.key && "NumpadEnter" !== e.key || (e.preventDefault(),
                    e.stopPropagation(),
                    e.currentTarget.blur())
                }
                )),
                I(this, "handleItemClick", (e=>{
                    this._dragMenuItem || this.props.onItemClick(e)
                }
                ))
            }
            componentDidMount() {
                window.addEventListener("wheel", this.handleWheel, {
                    capture: !0,
                    passive: !1
                }),
                setTimeout((()=>{
                    this.folderLabelRef.style.opacity = 1,
                    this.folderContentRef.style.height = "255px"
                }
                ))
            }
            componentDidUpdate(e) {
                e.panelMenuCmds !== this.props.panelMenuCmds && this.state.index >= this.props.panelMenuCmds.length && this.setState({
                    index: this.props.panelMenuCmds.length - 1
                })
            }
            componentWillUnmount() {
                window.removeEventListener("wheel", this.handleWheel, {
                    capture: !0,
                    passive: !1
                })
            }
            render() {
                const {index: t, editLabel: n} = this.state
                  , {folderCmd: r, panelMenuCmds: l, pluginContainer: a} = this.props;
                return e.createElement("div", {
                    className: "menus-folder"
                }, e.createElement("div", {
                    ref: e=>{
                        this.folderLabelRef = e
                    }
                    ,
                    onClick: this.handleLabelBoxClick,
                    className: "menus-folder-label"
                }, n ? e.createElement("input", {
                    className: "menus-folder-label-input",
                    onKeyDown: this.handleLabelInputKeydown,
                    onBlur: this.handleLabelInputBlur,
                    type: "text",
                    autoFocus: !0,
                    defaultValue: r.label
                }) : e.createElement("span", {
                    onClick: this.handleLabelClick
                }, r.label), l.length > 1 && e.createElement("div", {
                    className: "menus-folder-stepper"
                }, l.map(((n,r)=>e.createElement("div", {
                    key: r,
                    onClick: this.handleStepperItemClick,
                    className: t === r ? "menus-folder-stepper-current" : null
                }, e.createElement("span", null)))))), e.createElement("div", {
                    ref: e=>{
                        this.folderContentRef = e
                    }
                    ,
                    onMouseDown: this.handleMouseDown,
                    className: "menus-folder-content"
                }, e.createElement(w.ZP, {
                    index: t
                }, l.map(((t,n)=>e.createElement("div", {
                    key: n,
                    ref: e=>{
                        this["panelRef" + n] = e
                    }
                    ,
                    className: "menus-folder-box"
                }, t.map(((t,n)=>e.createElement(T, {
                    key: t.pluginId + "/" + t.label,
                    pluginContainer: a,
                    onItemClick: this.handleItemClick,
                    cmd: t
                })))))))))
            }
        }
        function N(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const L = {
            top: 20
        }
          , R = {
            bottom: 20
        };
        class z extends _ {
            constructor(...e) {
                super(...e),
                N(this, "state", {
                    index: 0,
                    hoverMenu: null,
                    openFolderMenus: null
                }),
                N(this, "setOpenFolderMenus", (e=>{
                    const t = []
                      , n = Math.floor(e.child.length / 9) + (e.child.length % 9 == 0 ? 0 : 1);
                    for (let r = 0; r < n; r++)
                        t.push(e.child.slice(9 * r, 9 * (r + 1)));
                    this.setState({
                        hoverMenu: null,
                        openFolderMenus: {
                            cmd: e,
                            panelMenuCmds: t
                        }
                    })
                }
                )),
                N(this, "getMouseMoveHoverMenuCmd", ((e,t)=>{
                    const n = this.getMouseMoveHoverMenuIndex(e, t);
                    return this.props.panelMenuCmds[this.state.index][n] || null
                }
                )),
                N(this, "nextPanel", (()=>{
                    this.state.openFolderMenus || (this.state.index !== this.props.panelMenuCmds.length - 1 ? this.setState({
                        index: this.state.index + 1
                    }) : window.services.voice.showMainWindowToInput())
                }
                )),
                N(this, "mouseOut", (()=>{
                    this.state.hoverMenu && this.setState({
                        hoverMenu: null
                    })
                }
                )),
                N(this, "mouseMove", ((e,t)=>{
                    const n = this.getMouseMoveHoverMenuCmd(e, t);
                    this.state.hoverMenu !== n && this.setState({
                        hoverMenu: n
                    })
                }
                )),
                N(this, "getHoldUpMenuCmd", (()=>{
                    const e = this.state.hoverMenu;
                    return e ? e.child ? (this.setOpenFolderMenus(e),
                    null) : e : null
                }
                )),
                N(this, "handleStepClick", (()=>{
                    this.nextPanel()
                }
                )),
                N(this, "handlePlusClick", (()=>{
                    window.services.voice.triggerHide(!0),
                    setTimeout((()=>{
                        window.services.voice.enterPlugin({
                            pluginId: "FFFFFFFF",
                            featureCode: "cmds",
                            trueType: "text",
                            type: "base",
                            label: "所有关键字"
                        }, {
                            type: "text",
                            payload: "所有关键字",
                            way: "panel"
                        })
                    }
                    ), window.platform.isLinux ? 100 : 0)
                }
                )),
                N(this, "handleItemClick", (e=>{
                    if (!this._dragMenuItem)
                        return e.child ? this.setOpenFolderMenus(e) : void this.props.onItemClick(e)
                }
                )),
                N(this, "handleCloseFolderMenus", (()=>{
                    this.setState({
                        openFolderMenus: null
                    })
                }
                ))
            }
            UNSAFE_componentWillReceiveProps(e) {
                if (e.panelMenuCmds !== this.props.panelMenuCmds) {
                    if (this.state.openFolderMenus) {
                        const t = this.state.openFolderMenus.cmd
                          , n = e.panelMenuCmds[this.state.index]?.find((e=>"text" === e?.trueType && e.pluginId === t.pluginId && e.label === t.label));
                        n ? this.setOpenFolderMenus(n) : this.setState({
                            openFolderMenus: null
                        })
                    }
                    this.state.index >= e.panelMenuCmds.length && this.setState({
                        index: e.panelMenuCmds.length - 1
                    })
                }
            }
            componentDidMount() {
                this._handleWheelTimeout = setTimeout((()=>{
                    this._handleWheelTimeout = null
                }
                ), 350),
                window.addEventListener("wheel", this.handleWheel, {
                    passive: !1
                })
            }
            componentWillUnmount() {
                window.removeEventListener("wheel", this.handleWheel, {
                    passive: !1
                })
            }
            render() {
                const {index: t, hoverMenu: n, openFolderMenus: r} = this.state
                  , {isForward: l, pluginContainer: a, panelMenuCmds: i} = this.props;
                return e.createElement(e.Fragment, null, e.createElement(w.ZP, {
                    onMouseDown: this.handleMouseDown,
                    className: "menus-views",
                    index: t
                }, i.map(((t,r)=>e.createElement("div", {
                    key: r,
                    ref: e=>{
                        this["panelRef" + r] = e
                    }
                    ,
                    className: "menus-box"
                }, t.map(((t,r)=>t ? e.createElement(T, {
                    key: t.pluginId + "/" + t.label,
                    mouseHover: n === t,
                    pluginContainer: a,
                    onItemClick: this.handleItemClick,
                    cmd: t
                }) : e.createElement("div", {
                    key: "null",
                    className: "menus-item-empty",
                    onClick: this.handlePlusClick
                }, e.createElement(x, null)))))))), i.length > 1 && e.createElement("span", {
                    onClick: this.handleStepClick,
                    style: l ? L : R,
                    className: "menus-step"
                }, t + 1, "/", i.length), r && e.createElement(P, {
                    folderCmd: r.cmd,
                    panelMenuCmds: r.panelMenuCmds,
                    isForward: !0,
                    pluginContainer: a,
                    onItemClick: this.props.onItemClick,
                    onClose: this.handleCloseFolderMenus,
                    refreshPanelMenus: this.props.refreshPanelMenus
                }), e.createElement("div", {
                    id: "menus-dustbin",
                    className: l || r ? "menus-dustbin-forward" : "menus-dustbin-reverse"
                }, e.createElement(k, null), e.createElement("span", null, "鼠标移到此处，删除固定")))
            }
        }
        function O(e) {
            if (e.length < 2)
                return e;
            let t;
            try {
                t = JSON.parse(window.localStorage.getItem("matchfeaturelog")) || []
            } catch (e) {
                t = []
            }
            return e.forEach((e=>{
                const n = t.indexOf(e.cmd.pluginId + e.cmd.featureCode);
                -1 !== n && (e.weight += .99 - n / 100)
            }
            )),
            e.sort(((e,t)=>t.weight - e.weight))
        }
        function F(e, t) {
            return t.length < 2 ? t : e && t.find((e=>"text" === e.cmd.trueType)) ? function(e, t) {
                if ("string" != typeof t || !t)
                    return e;
                const n = window.localStorage.getItem("enterlog:" + t.toLowerCase());
                if (!n)
                    return e;
                const r = e.find((e=>n === e.cmd.pluginId + e.cmd.featureCode + e.cmd.label));
                return r && (e.splice(e.indexOf(r), 1),
                e.unshift(r)),
                e
            }(t, e.value) : O(t)
        }
        function D(e, t, n, r) {
            const l = t.pluginId + t.featureCode;
            l in e ? n > e[l].weight && (e[l] = {
                cmd: t,
                weight: n,
                indexAt: r
            }) : e[l] = {
                cmd: t,
                weight: n,
                indexAt: r
            }
        }
        function U(e, t, n, r, l) {
            e.forEach((e=>{
                const a = e.match.indexOf(r);
                if (a >= 0) {
                    let r = 0;
                    if (0 === a)
                        r = t - e.match.length + (e.weight || 0);
                    else {
                        r = n - a - e.match.length / n + (e.weight || 0);
                        const t = e.label.charCodeAt(a);
                        (t > 64 && t < 91 || " " === e.label[a - 1]) && (r += n)
                    }
                    D(l, e, r, a)
                }
            }
            ))
        }
        function A(e, t, n, r, l) {
            e.forEach((e=>{
                const a = e.match.indexOf(r);
                if (a >= 0) {
                    let r = 0;
                    r = 0 === a ? t - e.match.length : n - a,
                    D(l, e, r, a)
                }
            }
            ))
        }
        function H(e, t, n, r, l) {
            e.forEach((e=>{
                const a = e.match.indexOf(r);
                if (a >= 0) {
                    let r = 0;
                    r = 0 === a ? t - e.match.length : n - a - e.label.length,
                    D(l, e, r, a)
                }
            }
            ))
        }
        function j(e, t, n) {
            const r = {
                payload: t
            };
            e.forEach((e=>{
                e.minLength && e.minLength > t.length || e.maxLength && e.maxLength < t.length || (r.regex = e.match,
                window.services.regexCmdTest(r) && D(n, e, 1, 0))
            }
            ))
        }
        function W(e, t, n) {
            for (const r of e)
                r.maxLength && t.length > r.maxLength || r.minLength && t.length < r.minLength || (r.fileType || r.match) && t.find((e=>r.fileType && (e.isDirectory && "directory" !== r.fileType || e.isFile && "file" !== r.fileType) || r.match && !r.match.test(e.name))) || n.push({
                    cmd: r,
                    weight: 0,
                    indexAt: 0
                })
        }
        function B(e, t, n) {
            e.forEach((e=>{
                e.minLength && e.minLength > t.length || e.maxLength && e.maxLength < t.length || e.exclude && window.services.regexCmdTest({
                    regex: e.exclude,
                    payload: t
                }) || D(n, e, 0, 0)
            }
            ))
        }
        function V(e, t) {
            if ("files" === t.type) {
                const n = [];
                return W(e.files, t.data, n),
                n
            }
            if ("img" === t.type) {
                const t = [];
                return function(e, t) {
                    e.forEach((e=>{
                        t.push({
                            cmd: e,
                            weight: 0,
                            indexAt: 0
                        })
                    }
                    ))
                }(e.img, t),
                t
            }
            if ("bigtext" === t.type) {
                const n = {};
                return j(e.regex, t.data, n),
                B(e.over, t.data, n),
                Object.values(n)
            }
            return []
        }
        function $(e, t) {
            return window.platform.isWindow ? e.filter((e=>!e.match || (!e.match.class || e.match.class.includes(t.class)) && (!e.match.app || e.match.app.includes(t.app) && (!e.match.title || e.match.title.test(t.title))))).map((e=>({
                cmd: e,
                weight: e.match ? 1 : 0,
                indexAt: 0
            }))) : e.filter((e=>!e.match || e.match.app.includes(t.app) && (!e.match.title || e.match.title.test(t.title)))).map((e=>({
                cmd: e,
                weight: e.match ? 1 : 0,
                indexAt: 0
            })))
        }
        function X(e) {
            const t = "abcdefghijklmnopqrstuvwxyz";
            let n = "";
            for (let r = 0; r < e; r++)
                n += t.charAt(Math.floor(Math.random() * t.length));
            return n
        }
        function Q(e) {
            let t = "";
            for (let n = 0; n < e; n++)
                t += String.fromCharCode(Math.floor(20902 * Math.random() + 19968));
            return t
        }
        const Y = {};
        function q(e, t) {
            const n = e + (t ? (t.minLength || 0) + "-" + (t.maxLength || 99999) : "");
            if (n in Y)
                return Y[n];
            const r = e.match(/^\/(.+)\/([gimuy]{0,})$/);
            if (!r)
                return Y[n] = null,
                null;
            let l;
            try {
                l = r[2] ? new RegExp(r[1],r[2]) : new RegExp(r[1])
            } catch (e) {
                return Y[n] = null,
                null
            }
            return t && t.pluginId ? Y[n] = function(e, t, n) {
                const r = n - t;
                if (0 === r)
                    return n > 0 && n < 10 && !window.services.isLegalCmdRegexTest(e, X(n)) && !window.services.isLegalCmdRegexTest(e, Q(n));
                if (t < 15) {
                    if (t < 2 && !window.services.isLegalCmdRegexTest(e, X(1)))
                        return !0;
                    if (t < 3 && !window.services.isLegalCmdRegexTest(e, X(2)))
                        return !0;
                    let r = 0;
                    const l = n < 16 ? n : 16;
                    for (let n = t > 3 ? t : 3; n <= l; n++)
                        if (window.services.isLegalCmdRegexTest(e, X(n)))
                            r = 0;
                        else if (++r > 1)
                            return !0
                }
                return r > 19 && !window.services.isLegalCmdRegexTest(e, X(Math.floor(16 * Math.random() + 3)) + " " + X(Math.floor(16 * Math.random() + 3)) + " " + X(Math.floor(16 * Math.random() + 3))) || t < 3 && !window.services.isLegalCmdRegexTest(e, Q(2)) || t < 4 && r > 2 && !window.services.isLegalCmdRegexTest(e, Q(3)) && !window.services.isLegalCmdRegexTest(e, Q(4))
            }(l, t.minLength || 0, t.maxLength || 99999) ? null : l : Y[n] = l,
            Y[n]
        }
        const Z = (0,
        e.memo)((function() {
            return e.createElement("svg", {
                viewBox: "0 0 1024 1024",
                width: "20",
                height: "20"
            }, e.createElement("path", {
                d: "M758.528 512L384 886.528l-60.330667-60.330667 313.984-314.453333-310.954666-310.912L386.986667 140.501333z"
            }))
        }
        ))
          , K = (0,
        e.memo)((function() {
            return e.createElement("svg", {
                viewBox: "0 0 1024 1024",
                width: "20",
                height: "20"
            }, e.createElement("path", {
                d: "M682.666667 853.333333h170.666666v-170.666666h-170.666666m0-85.333334h170.666666v-170.666666h-170.666666m-256-85.333334h170.666666V170.666667h-170.666666m256 170.666666h170.666666V170.666667h-170.666666m-256 426.666666h170.666666v-170.666666h-170.666666m-256 170.666666h170.666666v-170.666666H170.666667m0 426.666666h170.666666v-170.666666H170.666667m256 170.666666h170.666666v-170.666666h-170.666666M170.666667 341.333333h170.666666V170.666667H170.666667v170.666666z"
            }))
        }
        ));
        function G(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        const J = 34
          , ee = 10
          , te = {
            pluginId: "@panel",
            featureCode: "voice",
            trueType: "over",
            type: "over",
            label: "语音输入"
        };
        class ne extends e.Component {
            constructor(e) {
                super(e),
                G(this, "initCmdSource", (()=>{
                    this.pluginContainer = window.services.getPluginContainer(),
                    this.cmdSource = {
                        base: [],
                        pyfirst: [],
                        pyfirstplus: [],
                        enfirst: [],
                        regex: [],
                        files: [],
                        img: [],
                        over: [],
                        window: []
                    },
                    Object.values(this.pluginContainer).forEach((e=>{
                        Object.values(e.featureDic).forEach((t=>{
                            t.cmds.forEach((n=>{
                                const r = {
                                    ...n,
                                    pluginId: e.name,
                                    featureCode: t.code
                                };
                                switch (n.type) {
                                case "base":
                                    this.cmdSource.base.push(r);
                                    break;
                                case "pyfirst":
                                    this.cmdSource.pyfirst.push(r);
                                    break;
                                case "pyfirst+":
                                    this.cmdSource.pyfirstplus.push(r);
                                    break;
                                case "enfirst":
                                    this.cmdSource.enfirst.push(r);
                                    break;
                                case "regex":
                                    r.match = q(r.match, r),
                                    r.match && this.cmdSource.regex.push(r);
                                    break;
                                case "files":
                                    r.match && (r.match = q(r.match)),
                                    this.cmdSource.files.push(r);
                                    break;
                                case "img":
                                    this.cmdSource.img.push(r);
                                    break;
                                case "over":
                                    if (!e.name && "pluginstoresearch" === t.code)
                                        break;
                                    r.exclude && (r.exclude = q(r.exclude)),
                                    this.cmdSource.over.push(r);
                                    break;
                                case "window":
                                    r.match && r.match.title && (r.match.title = q(r.match.title)),
                                    r.labelCmds.forEach((e=>{
                                        e.pluginId = r.pluginId,
                                        e.featureCode = r.featureCode
                                    }
                                    )),
                                    this.cmdSource.window.push(r)
                                }
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    this.pluginContainer["@panel"] = {
                        featureDic: {
                            voice: {
                                cmds: [],
                                icon: "res/voice/input.png"
                            }
                        }
                    }
                }
                )),
                G(this, "panelMenusDocsToMenuCmds", ((e,t)=>{
                    const n = {}
                      , r = {};
                    let l;
                    e.forEach((e=>{
                        e.isFolder ? r[e._id] = {
                            pluginId: e._id,
                            label: e.label || "文件夹",
                            child: [],
                            trueType: "text"
                        } : n[e.pluginId + "/" + e.label] = e
                    }
                    ));
                    const a = Object.keys(n);
                    if (a.length > 0) {
                        if (l = this.cmdSource.base.filter((e=>a.includes(e.pluginId + "/" + e.label) && !e.weight)),
                        l.length > 0) {
                            l = l.sort(((e,t)=>a.indexOf(e.pluginId + "/" + e.label) - a.indexOf(t.pluginId + "/" + t.label)));
                            const e = [];
                            for (let t = 0; t < l.length; t++) {
                                const a = l[t]
                                  , i = n[a.pluginId + "/" + a.label];
                                if (i.parent && i.parent in r) {
                                    const t = r[i.parent];
                                    if (t.child.push(a),
                                    t.child.length >= 2) {
                                        e.push(a),
                                        2 === t.child.length && l.splice(l.indexOf(t.child[0]), 1, t);
                                        const n = t.child[t.child.length - 2];
                                        a.label === n.label && a.pluginId === n.pluginId && (t.childRemoveCmds || (t.childRemoveCmds = []),
                                        a.featureCode && i.featureCode === a.featureCode ? t.childRemoveCmds.push(n) : t.childRemoveCmds.push(a))
                                    }
                                }
                                if (t > 0) {
                                    const n = l[t - 1];
                                    a.label === n.label && a.pluginId === n.pluginId && (a.featureCode && i.featureCode === a.featureCode ? e.push(n) : e.push(a))
                                }
                            }
                            e.length > 0 && (l = l.filter((t=>!e.includes(t)))),
                            l.filter((e=>e.childRemoveCmds)).forEach((e=>{
                                e.child = e.child.filter((t=>!e.childRemoveCmds.includes(t))),
                                delete e.childRemoveCmds,
                                1 === e.child.length && l.splice(l.indexOf(e), 1, e.child[0])
                            }
                            ))
                        }
                    } else
                        l = [];
                    t && t.length > 0 && l.unshift(...t),
                    l.push(null);
                    const i = Math.floor(l.length / 12) + (l.length % 12 == 0 ? 0 : 1)
                      , o = [];
                    for (let e = 0; e < i; e++)
                        o.push(l.splice(0, 12));
                    return o
                }
                )),
                G(this, "showPanelMenus", (async e=>{
                    const t = await window.services.voice.getPanelMenusDocs();
                    let n, r;
                    e && e.length > 0 ? (r = e.map((e=>e.cmd)),
                    n = "当前窗口功能+") : n = "已固定关键字";
                    const l = this.panelMenusDocsToMenuCmds(t, r);
                    this.setState({
                        matchLabel: n,
                        voiceText: "",
                        translateResult: null,
                        searchResult: [],
                        panelMenuCmds: l,
                        selectedIndex: null
                    }),
                    window.services.voice.setWindowBounds(340, this.state.isForward)
                }
                )),
                G(this, "refreshPanelMenus", (e=>{
                    if (!e)
                        return this.forceUpdate();
                    const t = this.state.panelMenuCmds;
                    if (!t)
                        return;
                    let n;
                    "window" === t[0]?.[0]?.trueType && (n = [],
                    t.forEach((e=>{
                        const t = e.filter((e=>e && "window" === e.trueType));
                        t.length > 0 && n.push(...t)
                    }
                    )));
                    const r = this.panelMenusDocsToMenuCmds(e, n);
                    this.setState({
                        panelMenuCmds: r
                    })
                }
                )),
                G(this, "handleMicrophoneChange", (e=>{
                    if (this.state.voiceText !== e)
                        if (e) {
                            if (this.state.hold)
                                return this.microphoneRef.stopMicrophone();
                            let t = function(e, t, n) {
                                const r = {};
                                if (n.length > 60)
                                    return j(e.regex, n, r),
                                    Object.values(r);
                                const l = n.toLowerCase();
                                t && t.base.length > 0 && U(t.base, 2e3, 200, l, r),
                                U(e.base, 1e3, 100, l, r),
                                /[a-z]/.test(l) && (/^[a-z]+$/.test(l) && l.length < 10 && (t && t.pyfirst.length > 0 && A(t.pyfirst, 2e3, 200, l, r),
                                A(e.pyfirst, 1e3, 100, l, r)),
                                /^[a-z0-9]{2,}$/.test(l) && l.length < 10 && (t && t.enfirst.length > 0 && H(t.enfirst, 2e3, 200, l, r),
                                H(e.enfirst, 1e3, 100, l, r)));
                                let a = Object.values(r);
                                if (0 === a.length)
                                    return j(e.regex, n, r),
                                    B(e.over, n, r),
                                    Object.values(r);
                                if (a = a.sort(((e,t)=>t.weight - e.weight)),
                                a.length < 10) {
                                    const t = {};
                                    return B(e.over, n, t),
                                    a.concat(O(Object.values(t)))
                                }
                                return a
                            }(this.cmdSource, this._matchCmdSource, e);
                            if (t = F({
                                value: e
                            }, t),
                            0 === t.length)
                                t.push({
                                    cmd: te,
                                    weight: 0,
                                    indexAt: 0
                                });
                            else if ("text" === t[0].cmd.trueType) {
                                const e = t.findIndex((e=>"text" !== e.cmd.trueType));
                                e && t.splice(e, 0, {
                                    cmd: te,
                                    weight: 0,
                                    indexAt: 0
                                })
                            } else
                                t.unshift({
                                    cmd: te,
                                    weight: 0,
                                    indexAt: 0
                                });
                            const n = this.state.voiceText ? this.state.isForward : 73;
                            this.setState({
                                voiceText: e,
                                translateResult: null,
                                panelMenuCmds: null,
                                searchResult: t
                            }),
                            window.services.voice.setWindowBounds(J * (t.length > ee ? ee : t.length), n)
                        } else
                            this._matchPayload ? this.matchSearch(this._matchPayload) : this.showPanelMenus()
                }
                )),
                G(this, "matchSearch", (e=>{
                    this._matchPayload = e;
                    let t = null;
                    e.wininfo && (t = $(this.cmdSource.window, e.wininfo));
                    let n, r = null;
                    if ("window" === e.type)
                        n = t || [];
                    else if ("text" === e.type) {
                        if (this._useTranslate && e.data && e.data.length < 500)
                            if (/^[1-9](?:\d{8,9}|\d{11,12})$/.test(e.data)) {
                                const t = 10 === e.data.length ? 1e3 * parseInt(e.data) : parseInt(e.data);
                                r = {
                                    status: "ok",
                                    translated: new Date(t).toLocaleString("zh-Hans-CN", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: !1
                                    }).replace(/\//g, "-").replace(" 24:", " 00:")
                                }
                            } else {
                                let t = null;
                                /^\$?[a-zA-Z]{1,45}(?:-[a-zA-Z]{1,45})?(?:_[a-zA-Z]{1,45}(?:-[a-zA-Z]{1,45})?)*$/.test(e.data) ? (t = e.data,
                                t.startsWith("$") && (t = t.replace("$", "")),
                                /[a-z][A-Z]/.test(t) && (t = t.replace(/([a-z])([A-Z])/g, "$1 $2")),
                                t.includes("_") && (t = t.replace(/_/g, " "))) : /(?:^| )(?:[A-Z][a-z]{0,44}|[a-z]{1,45})(?:'[a-z]{1,2})?(?:-[A-Z][a-z]{0,44}|-[a-z]{1,45})?[.,:;!?]?(?: |$)/m.test(e.data) && window.services.getStringSize(e.data) / 2 > window.services.getStringSize(e.data.replace(/(?:^| )(?:[A-Z][a-z]{0,44}|[a-z]{1,45})(?:'[a-z]{1,2})?(?:-[A-Z][a-z]{0,44}|-[a-z]{1,45})?[.,:;!?]?(?= |$)/gm, "")) && (t = e.data),
                                t && (r = {
                                    status: "loading"
                                },
                                window.services.voice.translate(t).then((e=>{
                                    if (this.state.translateResult && "member" !== this.state.translateResult.status)
                                        return e || 0 !== n.length ? void this.setState({
                                            translateResult: e
                                        }) : this.showPanelMenus()
                                }
                                )).catch((()=>{
                                    0 === n.length && this.showPanelMenus()
                                }
                                )))
                            }
                        n = V(this.cmdSource, {
                            type: "bigtext",
                            data: e.data
                        })
                    } else
                        n = V(this.cmdSource, e);
                    return this._matchCmdSource = {
                        base: [],
                        pyfirst: [],
                        pyfirstplus: [],
                        enfirst: []
                    },
                    n.forEach((e=>{
                        e.cmd.labelCmds.forEach((t=>{
                            switch (t.featureCode || (t.pluginId = e.cmd.pluginId,
                            t.featureCode = e.cmd.featureCode),
                            t.type) {
                            case "base":
                                this._matchCmdSource.base.push(t);
                                break;
                            case "pyfirst":
                                this._matchCmdSource.pyfirst.push(t);
                                break;
                            case "pyfirst+":
                                this._matchCmdSource.pyfirstplus.push(t);
                                break;
                            case "enfirst":
                                this._matchCmdSource.enfirst.push(t)
                            }
                        }
                        ))
                    }
                    )),
                    "window" !== e.type && t && t.length > 0 && t.forEach((e=>{
                        e.cmd.labelCmds.forEach((e=>{
                            switch (e.type) {
                            case "base":
                                this._matchCmdSource.base.push(e);
                                break;
                            case "pyfirst":
                                this._matchCmdSource.pyfirst.push(e);
                                break;
                            case "pyfirst+":
                                this._matchCmdSource.pyfirstplus.push(e);
                                break;
                            case "enfirst":
                                this._matchCmdSource.enfirst.push(e)
                            }
                        }
                        ))
                    }
                    )),
                    "window" === e.type ? this.showPanelMenus(F(null, n)) : 0 !== n.length || r ? (n = F(null, n),
                    this.setState({
                        matchLabel: this.getMatchLabel(e),
                        voiceText: "",
                        translateResult: r,
                        searchResult: n,
                        panelMenuCmds: null,
                        selectedIndex: null
                    }),
                    void window.services.voice.setWindowBounds(J * (n.length > ee ? ee : n.length), this.state.isForward)) : this.showPanelMenus()
                }
                )),
                G(this, "logEnter", (e=>{
                    if (0 === e)
                        return;
                    const t = this.state.searchResult;
                    "text" === t[e - 1].cmd.trueType && function(e, t, n) {
                        const r = "enterlog:" + e.toLowerCase();
                        n && window.localStorage.getItem(r) === n.pluginId + n.featureCode + n.label ? window.localStorage.removeItem(r) : window.localStorage.setItem(r, t.pluginId + t.featureCode + t.label)
                    }(this.state.voiceText, t[e].cmd, 1 === e ? t[0].cmd : null)
                }
                )),
                G(this, "action", ((e,t,n)=>{
                    if (!e)
                        return;
                    if ("@panel" === e.pluginId)
                        return void ("voice" === e.featureCode && window.services.voice.voiceTextInput(t));
                    let r;
                    if (n)
                        r = {
                            type: e.trueType,
                            payload: e.label,
                            way: "panel"
                        };
                    else if (t)
                        if ("text" === e.trueType) {
                            if (r = {
                                type: e.trueType,
                                payload: e.label,
                                way: "voice"
                            },
                            e.pluginId && this._matchPayload && "window" !== this._matchPayload.type) {
                                const t = function(e, t, n=!1) {
                                    const r = e.cmds.filter((e=>["regex", "files", "img", "over"].includes(e.type)));
                                    if (0 === r.length)
                                        return null;
                                    if ("files" === t.type) {
                                        const e = r.filter((e=>"files" === e.type));
                                        if (0 === e.length)
                                            return null;
                                        const n = [];
                                        for (const t of e) {
                                            const e = {
                                                ...t
                                            };
                                            e.match && (e.match = q(e.match)),
                                            n.push(e)
                                        }
                                        const l = [];
                                        return W(n, t.data, l),
                                        0 === l.length ? null : l[0]
                                    }
                                    if ("img" === t.type) {
                                        const e = r.find((e=>"img" === e.type));
                                        return e ? {
                                            cmd: e,
                                            weight: 0,
                                            indexAt: 0
                                        } : null
                                    }
                                    if (!0 === n)
                                        return null;
                                    if ("text" === t.type) {
                                        if (!t.data)
                                            return null;
                                        const e = r.filter((e=>"regex" === e.type || "over" === e.type));
                                        if (0 === e.length)
                                            return null;
                                        const n = e.filter((e=>"regex" === e.type));
                                        let l = [];
                                        const a = {};
                                        let i = [];
                                        if (n.length > 0) {
                                            for (const e of n) {
                                                const t = {
                                                    ...e
                                                };
                                                t.match && (t.match = q(t.match)),
                                                l.push(t)
                                            }
                                            if (j(l, t.data, a),
                                            i = Object.values(a),
                                            i.length > 0)
                                                return i[0]
                                        }
                                        const o = e.filter((e=>"over" === e.type));
                                        if (o.length > 0) {
                                            l = [];
                                            for (const e of o) {
                                                const t = {
                                                    ...e
                                                };
                                                t.exclude && (t.exclude = q(t.exclude)),
                                                l.push(t)
                                            }
                                            return B(l, t.data, a),
                                            i = Object.values(a),
                                            0 === i.length ? null : i[0]
                                        }
                                        return null
                                    }
                                    return null
                                }(this.pluginContainer[e.pluginId].featureDic[e.featureCode], this._matchPayload);
                                t ? (r = {
                                    type: t.cmd.trueType,
                                    payload: this._matchPayload.data,
                                    way: "voice"
                                },
                                e = {
                                    ...t.cmd,
                                    pluginId: e.pluginId,
                                    featureCode: e.featureCode,
                                    label: e.label
                                }) : "text" === this._matchPayload.type && (r.subInputInput = this._matchPayload.data)
                            }
                        } else
                            "regex" === e.trueType ? r = "regex" === e.type ? {
                                type: e.trueType,
                                payload: t,
                                way: "voice"
                            } : {
                                type: e.trueType,
                                payload: this._matchPayload.data,
                                way: "voice"
                            } : "over" === e.trueType ? r = {
                                type: e.trueType,
                                payload: t,
                                way: "voice"
                            } : this._matchPayload && (r = {
                                type: e.trueType,
                                payload: this._matchPayload.data,
                                way: "voice"
                            });
                    else {
                        if (!this._matchPayload)
                            return;
                        r = {
                            type: e.trueType,
                            payload: this._matchPayload.data,
                            way: "panel"
                        }
                    }
                    "text" !== e.trueType && function(e) {
                        const t = e.pluginId + e.featureCode;
                        let n;
                        try {
                            n = JSON.parse(window.localStorage.getItem("matchfeaturelog")) || []
                        } catch (e) {
                            n = []
                        }
                        const r = n.indexOf(t);
                        0 !== r && (r > 0 && n.splice(r, 1),
                        n.unshift(t),
                        n.length > 32 && n.splice(32),
                        window.localStorage.setItem("matchfeaturelog", JSON.stringify(n)))
                    }(e),
                    "img" === r.type && "object" == typeof r.payload && (r.payload = window.services.imageBuffer2DataUrl(r.payload)),
                    e.pluginId ? window.platform.isLinux ? setTimeout((()=>{
                        window.services.voice.enterPlugin(e, r)
                    }
                    ), 100) : window.services.voice.enterPlugin(e, r) : "text" !== e.trueType ? window.services.nativeMatchCall(e.featureCode, r.type, r.payload, r.way) : window.services.nativeOpen(e.featureCode, r.way)
                }
                )),
                G(this, "onMouseOut", (()=>{
                    if (this.state.panelMenuCmds)
                        return this.panelMenusRef.mouseOut();
                    null !== this.state.selectedIndex && this.setState({
                        selectedIndex: null
                    })
                }
                )),
                G(this, "onMouseMove", ((e,t,n)=>{
                    if (this.state.panelMenuCmds)
                        return this.panelMenusRef.mouseMove(e, t);
                    if (n && this.searchResultRef.scrollTop && (this.searchResultRef.scrollTop = 0),
                    this.state.isForward) {
                        if (t <= 56 + (this.state.translateResult ? this.translateRef.scrollHeight : 0))
                            return void (null !== this.state.selectedIndex && this.setState({
                                selectedIndex: null
                            }));
                        const e = Math.floor((t - 56 - (this.state.translateResult ? this.translateRef.scrollHeight : 0) - 1) / J) + Math.round(this.searchResultRef.scrollTop / J);
                        if (this.state.selectedIndex === e)
                            return;
                        this.setState({
                            selectedIndex: e
                        })
                    } else {
                        const e = this.state.searchResult.length > ee ? ee : this.state.searchResult.length;
                        if (t > e * J)
                            return void (null !== this.state.selectedIndex && this.setState({
                                selectedIndex: null
                            }));
                        const n = Math.floor(t / J);
                        if (n >= e)
                            return void (null !== this.state.selectedIndex && this.setState({
                                selectedIndex: null
                            }));
                        const r = e - n - 1 + Math.abs(Math.round(this.searchResultRef.scrollTop / J));
                        if (this.state.selectedIndex === r)
                            return;
                        this.setState({
                            selectedIndex: r
                        })
                    }
                }
                )),
                G(this, "handleSearchResultMouseDown", (e=>{
                    1 === e.button && (e.stopPropagation(),
                    e.preventDefault())
                }
                )),
                G(this, "_scrollTick", 0),
                G(this, "searchResultScroll", (e=>{
                    this._scrollTick += e,
                    Math.abs(this._scrollTick) >= J && (this._scrollTick > 0 ? (this.searchResultRef.scrollTop += J,
                    this._scrollTick -= J) : (this.searchResultRef.scrollTop -= J,
                    this._scrollTick += J))
                }
                )),
                G(this, "_ticking", !1),
                G(this, "handleSearchResultWheel", (e=>{
                    e.preventDefault();
                    const t = e.deltaY;
                    if (this.state.isForward) {
                        if (t > 0 && this.searchResultRef.scrollHeight - this.searchResultRef.scrollTop === this.searchResultRef.offsetHeight)
                            return void e.stopPropagation();
                        if (t < 0 && 0 === this.searchResultRef.scrollTop)
                            return void e.stopPropagation()
                    } else {
                        if (t < 0 && this.searchResultRef.scrollHeight + this.searchResultRef.scrollTop === this.searchResultRef.offsetHeight)
                            return void e.stopPropagation();
                        if (t > 0 && 0 === this.searchResultRef.scrollTop)
                            return void e.stopPropagation()
                    }
                    this._ticking || window.requestAnimationFrame((()=>{
                        this.searchResultScroll(t),
                        this._ticking = !1
                    }
                    )),
                    this._ticking = !0,
                    this._scrollTickTimer && clearTimeout(this._scrollTickTimer),
                    this._scrollTickTimer = setTimeout((()=>{
                        this._scrollTickTimer = null,
                        this._scrollTick = 0
                    }
                    ), 100)
                }
                )),
                G(this, "handleVoiceInputClick", (()=>{
                    if (this.state.panelMenuCmds)
                        return "window" === this.state.panelMenuCmds[0]?.[0]?.trueType ? this.showPanelMenus() : void this.panelMenusRef.nextPanel();
                    this.showPanelMenus()
                }
                )),
                G(this, "handleContextMenu", (e=>{
                    if (this.state.panelMenuCmds)
                        return "window" === this.state.panelMenuCmds[0]?.[0]?.trueType ? this.showPanelMenus() : void this.panelMenusRef.nextPanel();
                    this.showPanelMenus()
                }
                )),
                G(this, "handleRowItemClick", (e=>{
                    const t = {
                        ...e.cmd
                    };
                    t.labelCmds && delete t.labelCmds,
                    window.services.voice.triggerHide(!!t.pluginId && "@panel" !== t.pluginId),
                    this.action(t, this.state.voiceText, !1)
                }
                )),
                G(this, "handleMenuItemClick", (e=>{
                    const t = {
                        ...e
                    };
                    t.labelCmds && delete t.labelCmds,
                    window.services.voice.triggerHide(!!t.pluginId),
                    this.action(t, "", "text" === e.trueType)
                }
                )),
                G(this, "handleAppUpdate", (e=>{
                    e.stopPropagation(),
                    window.services.voice.triggerHide(!1);
                    const t = this.state.updateNewVersion;
                    if (!0 === t)
                        return window.services.appUpdate();
                    window.services.shellOpenExternal(t)
                }
                )),
                G(this, "handleGoPluginApps", (e=>{
                    e.stopPropagation(),
                    window.services.voice.triggerHide(!0),
                    this.action({
                        pluginId: "FFFFFFFF",
                        featureCode: "store",
                        trueType: "text",
                        type: "base",
                        label: "插件应用市场"
                    }, "", !0)
                }
                )),
                G(this, "handleLogoLoadFailed", (e=>{
                    e.target.src = "res/logo.png",
                    e.onerror = null
                }
                )),
                G(this, "handleTranslateResultClick", (e=>{
                    e.stopPropagation();
                    const t = this.state.translateResult;
                    t && "ok" === t.status && (window.services.voice.triggerHide(!1),
                    window.services.voice.copyText(t.translated))
                }
                )),
                G(this, "handleUpgradeMemberClick", (e=>{
                    e.stopPropagation(),
                    window.services.voice.triggerHide(!0),
                    this.action({
                        pluginId: "FFFFFFFF",
                        featureCode: "accountdb",
                        trueType: "text",
                        type: "base",
                        label: "帐号与数据"
                    }, "", !0)
                }
                )),
                G(this, "checkVoiceLimit", (()=>!(this.localAccount && 1 === this.localAccount.type || (this.setState({
                    voiceText: "",
                    matchLabel: "",
                    panelMenuCmds: null,
                    translateResult: {
                        status: "member",
                        message: "语音功能受限！"
                    }
                }),
                0)))),
                G(this, "_translateSetBoundsTimeout", null),
                this.state = {
                    updateNewVersion: !1,
                    hold: !1,
                    isForward: !0,
                    matchLabel: "",
                    voiceText: "",
                    translateResult: null,
                    searchResult: [],
                    selectedIndex: null,
                    panelMenuCmds: null
                },
                this.initCmdSource()
            }
            getMatchLabel(e) {
                return "text" === e.type ? (e.isClipboardData ? "剪贴板" : "选中的") + "文本 " + e.data.length + " 个" : "files" === e.type ? (e.isClipboardData ? "剪贴板" : "选中的") + "文件 " + e.data.length + " 个" : "img" === e.type ? (e.isClipboardData ? "剪贴板" : "选中的") + "图像" : ""
            }
            componentDidMount() {
                window.bridge = {
                    showInit: ({payload: e, useVoice: t, useTranslate: n})=>{
                        if (this.state.hold) {
                            const t = {
                                hold: !1,
                                matchLabel: "",
                                voiceText: "",
                                translateResult: null,
                                searchResult: [],
                                selectedIndex: null,
                                panelMenuCmds: null
                            };
                            !1 !== e && (t.isForward = !0),
                            this.setState(t)
                        }
                        if (this._matchPayload = null,
                        this._matchCmdSource = null,
                        this._useTranslate = n,
                        t && (this._initMicrophoneStatus = 1,
                        setTimeout((()=>{
                            1 === this._initMicrophoneStatus && (this._initMicrophoneStatus = 2,
                            this.microphoneRef.initMicrophone(),
                            this.forceUpdate())
                        }
                        ), 300)),
                        e) {
                            if ("clipboard" === e.type) {
                                const t = window.services.getPasteCmd();
                                return t.data ? (t.wininfo = e.wininfo,
                                t.isClipboardData = !0,
                                this.state.hold ? void setTimeout((()=>{
                                    this.matchSearch(t)
                                }
                                ), 20) : this.matchSearch(t)) : void setTimeout((()=>{
                                    this.showPanelMenus()
                                }
                                ), 20)
                            }
                            if ("window|simulatecopy" === e.type && (0 === $(this.cmdSource.window, e.wininfo).length ? e.type = "simulatecopy" : e.type = "window"),
                            "simulatecopy" !== e.type)
                                return this.state.hold ? setTimeout((()=>{
                                    this.matchSearch(e)
                                }
                                ), 20) : void this.matchSearch(e);
                            setTimeout((()=>{
                                if (!window.services.voice.isSimulateCopyForClipboardUpdate())
                                    return this.matchSearch({
                                        type: "window",
                                        data: e.wininfo,
                                        wininfo: e.wininfo
                                    });
                                const t = window.services.getPasteCmd();
                                return t.data ? (t.wininfo = e.wininfo,
                                this.matchSearch(t)) : this.matchSearch({
                                    type: "window",
                                    data: e.wininfo,
                                    wininfo: e.wininfo
                                })
                            }
                            ), 50)
                        } else
                            setTimeout((()=>{
                                this.showPanelMenus()
                            }
                            ), 20)
                    }
                    ,
                    holdUp: e=>{
                        if (this._initMicrophoneStatus && (this._initMicrophoneStatus = null),
                        e)
                            return this.microphoneRef.stopMicrophone(),
                            this.state.panelMenuCmds && this.panelMenusRef.mouseOut(),
                            this.setState({
                                hold: !0,
                                selectedIndex: null
                            }),
                            !0;
                        let t;
                        if (this.state.panelMenuCmds) {
                            const e = this.panelMenusRef.getHoldUpMenuCmd();
                            return e ? (t = {
                                ...e
                            },
                            t.labelCmds && delete t.labelCmds,
                            window.services.voice.triggerHide(!!t.pluginId),
                            void this.action(t, "", "text" === t.trueType)) : (this.microphoneRef.stopMicrophone(),
                            this.setState({
                                hold: !0,
                                selectedIndex: null
                            }),
                            !0)
                        }
                        if (null === this.state.selectedIndex || !this.state.searchResult[this.state.selectedIndex])
                            return this.microphoneRef.stopMicrophone(),
                            this.setState({
                                hold: !0,
                                selectedIndex: null
                            }),
                            !0;
                        t = {
                            ...this.state.searchResult[this.state.selectedIndex].cmd
                        },
                        t.labelCmds && delete t.labelCmds;
                        const n = this.state.voiceText;
                        n && "text" === t.trueType && this.logEnter(this.state.selectedIndex),
                        window.services.voice.triggerHide(!!t.pluginId && "@panel" !== t.pluginId),
                        this.action(t, n)
                    }
                    ,
                    changeDirection: e=>{
                        e !== this.state.isForward && this.setState({
                            isForward: e
                        })
                    }
                    ,
                    empty: ()=>{
                        this._initMicrophoneStatus && (this._initMicrophoneStatus = null),
                        window.services.voice.setWindowBounds(0, this.state.isForward),
                        this.setState({
                            hold: !1,
                            isForward: !0,
                            matchLabel: "",
                            voiceText: "",
                            translateResult: null,
                            searchResult: [],
                            selectedIndex: null,
                            panelMenuCmds: null
                        }),
                        this.microphoneRef.stopMicrophone()
                    }
                    ,
                    refreshCmdSource: ()=>{
                        this.initCmdSource()
                    }
                    ,
                    changeAccount: e=>{
                        this.localAccount = e
                    }
                    ,
                    noticeUpdate: e=>{
                        if (!e) {
                            if (this.state.updateNewVersion)
                                return;
                            e = !0
                        }
                        this.setState({
                            updateNewVersion: e
                        })
                    }
                },
                window.services.voice.registerMouseMoveEvent(this.onMouseMove),
                window.services.voice.registerMouseOutEvent(this.onMouseOut),
                window.onkeydown = e=>{
                    "Escape" === e.code && window.services.voice.triggerHide(!1)
                }
                ,
                this.searchResultRef.addEventListener("wheel", this.handleSearchResultWheel, {
                    passive: !1
                })
            }
            componentDidUpdate(e, t) {
                t.voiceText !== this.state.voiceText && this.voiceTextRef.scrollHeight > this.voiceTextRef.clientHeight && (this.voiceTextRef.scrollTop = this.voiceTextRef.scrollHeight - this.voiceTextRef.clientHeight),
                t.translateResult !== this.state.translateResult && null !== this.state.translateResult && (this._translateSetBoundsTimeout && clearTimeout(this._translateSetBoundsTimeout),
                this._translateSetBoundsTimeout = setTimeout((()=>{
                    if (this._translateSetBoundsTimeout = null,
                    null === this.state.translateResult)
                        return;
                    let e = J * (this.state.searchResult.length > ee ? ee : this.state.searchResult.length);
                    this.state.translateResult && (e += this.translateRef.scrollHeight),
                    window.services.voice.setWindowBounds(e, this.state.isForward)
                }
                ), 50))
            }
            render() {
                const {updateNewVersion: t, hold: n, isForward: r, matchLabel: l, voiceText: a, translateResult: i, searchResult: o, selectedIndex: s, panelMenuCmds: u} = this.state;
                return e.createElement("div", {
                    onContextMenu: this.handleContextMenu,
                    style: r ? null : {
                        flexDirection: "column-reverse"
                    },
                    className: "voice-panel" + (n ? " voice-panel-hold" : "")
                }, e.createElement("div", {
                    onClick: this.handleVoiceInputClick,
                    className: "voiceInput"
                }, e.createElement(y, {
                    ref: e=>{
                        this.microphoneRef = e
                    }
                    ,
                    onChange: this.handleMicrophoneChange,
                    checkVoiceLimit: this.checkVoiceLimit
                }), e.createElement("div", {
                    className: "voiceOut"
                }, e.createElement("div", {
                    ref: e=>{
                        this.voiceTextRef = e
                    }
                }, a)), !a && l && e.createElement("div", {
                    className: "matchLabel"
                }, l, "text" === u?.[0]?.[0]?.trueType ? e.createElement(Z, null) : e.createElement(K, null)), 2 !== this._initMicrophoneStatus && (t ? e.createElement("div", {
                    onClick: this.handleAppUpdate,
                    title: !0 === t ? "已下载新版本，点击重启更新" : "发现更新，下载新版本",
                    className: "appUpdateIcon"
                }, e.createElement("img", {
                    draggable: "false",
                    alt: "",
                    src: "res/update.png"
                })) : e.createElement("div", {
                    onClick: this.handleGoPluginApps,
                    className: "logo"
                }, e.createElement("img", {
                    draggable: "false",
                    onError: this.handleLogoLoadFailed,
                    alt: "",
                    src: this.localAccount && window.navigator.onLine ? this.localAccount.avatar : "res/logo.png"
                })))), i && e.createElement("div", {
                    ref: e=>{
                        this.translateRef = e
                    }
                    ,
                    onClick: this.handleTranslateResultClick,
                    className: "translate"
                }, "loading" === i.status ? e.createElement("div", {
                    className: "spinner"
                }, e.createElement("div", {
                    className: "bounce1"
                }), e.createElement("div", {
                    className: "bounce2"
                }), e.createElement("div", {
                    className: "bounce3"
                })) : "member" === i.status ? e.createElement("span", null, i.message, e.createElement("a", {
                    onClick: this.handleUpgradeMemberClick,
                    className: "member"
                }, "购买 uTools 会员")) : "ok" === i.status && i.translated), e.createElement("div", {
                    ref: e=>{
                        this.searchResultRef = e
                    }
                    ,
                    onMouseDown: this.handleSearchResultMouseDown,
                    className: "search-result",
                    style: {
                        flexDirection: r ? "column" : "column-reverse",
                        flex: 0 === o.length ? 0 : 1,
                        overflowY: o.length > ee ? "scroll" : "hidden"
                    }
                }, o.map(((t,n)=>e.createElement(b, {
                    key: n,
                    item: t,
                    isSelected: n === s,
                    pluginContainer: this.pluginContainer,
                    voiceText: a,
                    onClick: this.handleRowItemClick
                })))), u && e.createElement(z, {
                    ref: e=>{
                        this.panelMenusRef = e
                    }
                    ,
                    isForward: r,
                    pluginContainer: this.pluginContainer,
                    panelMenuCmds: u,
                    refreshPanelMenus: this.refreshPanelMenus,
                    onItemClick: this.handleMenuItemClick
                }))
            }
        }
        (0,
        t.s)(document.getElementById("root")).render(e.createElement(ne, null))
    }
    )()
}
)();
