!
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function m(e, t, n) {
        var i, o = (t = t || se).createElement("script");
        if (o.text = e, n)
            for (i in be) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function g(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[he.call(e)] || "object" : typeof e
    }

    function a(e) {
        var t = !!e && "length" in e && e.length,
            n = g(e);
        return !ve(e) && !xe(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function t(e, n, i) {
        return ve(n) ? we.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? we.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? we.grep(e, function(e) {
            return -1 < fe.call(n, e) !== i
        }) : we.filter(n, e, i)
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function c(e) {
        var n = {};
        return we.each(e.match(Ae) || [], function(e, t) {
                n[t] = !0
            }),
            n
    }

    function f(e) {
        return e
    }

    function d(e) {
        throw e
    }

    function u(e, t, n, i) {
        var o;
        try {
            e && ve(o = e.promise) ? o.call(e).done(t).fail(n) : e && ve(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function i() {
        se.removeEventListener("DOMContentLoaded", i),
            C.removeEventListener("load", i),
            we.ready()
    }

    function o(e, t) {
        return t.toUpperCase()
    }

    function h(e) {
        return e.replace(Oe, "ms-").replace(He, o)
    }

    function r() {
        this.expando = we.expando + r.uid++
    }

    function s(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = s(n)
                } catch (e) {}
                Me.set(e, t, n)
            } else n = void 0;
        return n
    }

    function y(e, t, n, i) {
        var o, r, s = 20,
            a = i ?
            function() {
                return i.cur()
            } : function() {
                return we.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (we.cssNumber[t] ? "" : "px"),
            c = (we.cssNumber[t] || "px" !== l && +u) && $e.exec(we.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--;) we.style(e, t, c + l),
                (1 - r) * (1 - (r = a() / u || .5)) <= 0 && (s = 0),
                c /= r;
            c *= 2,
                we.style(e, t, c + l),
                n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = o)),
            o
    }

    function v(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = Ge[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = we.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ge[i] = o)
    }

    function x(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Re.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ye(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", Re.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function b(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && l(e, t) ? we.merge([e], n) : n
    }

    function w(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
    }

    function T(e, t, n, i, o) {
        for (var r, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === g(r)) we.merge(d, r.nodeType ? [r] : r);
                else if (tt.test(r)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Ve.exec(r) || ["", ""])[1].toLowerCase(), u = Ke[a] || Ke._default, s.innerHTML = u[1] + we.htmlPrefilter(r) + u[2], c = u[0]; c--;) s = s.lastChild;
            we.merge(d, s.childNodes),
                (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(r));
        for (f.textContent = "", h = 0; r = d[h++];)
            if (i && -1 < we.inArray(r, i)) o && o.push(r);
            else if (l = we.contains(r.ownerDocument, r), s = b(f.appendChild(r), "script"), l && w(s), n)
            for (c = 0; r = s[c++];) Je.test(r.type || "") && n.push(r);
        return f
    }

    function _() {
        return !0
    }

    function E() {
        return !1
    }

    function S() {
        try {
            return se.activeElement
        } catch (C) {}
    }

    function I(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) I(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = E;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
                return we().off(e),
                    s.apply(this, arguments)
            }).guid = s.guid || (s.guid = we.guid++)),
            e.each(function() {
                we.event.add(this, t, o, i, n)
            })
    }

    function D(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && we(e).children("tbody")[0] || e
    }

    function L(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }

    function j(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }

    function k(e, t) {
        var n, i, o, r, s, a, u, l;
        if (1 === t.nodeType) {
            if (Re.hasData(e) && (r = Re.access(e), s = Re.set(t, r), l = r.events))
                for (o in delete s.handle, s.events = {}, l)
                    for (n = 0, i = l[o].length; n < i; n++) we.event.add(t, o, l[o][n]);
            Me.hasData(e) && (a = Me.access(e), u = we.extend({}, a), Me.set(t, u))
        }
    }

    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function z(n, i, o, r) {
        i = le.apply([], i);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            d = f - 1,
            h = i[0],
            p = ve(h);
        if (p || 1 < f && "string" == typeof h && !ye.checkClone && ut.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())),
                z(t, i, o, r)
        });
        if (f && (t = (e = T(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = we.map(b(e, "script"), L)).length; c < f; c++) u = e,
                c !== d && (u = we.clone(u, !0, !0), a && we.merge(s, b(u, "script"))),
                o.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, we.map(s, j), c = 0; c < a; c++) u = s[c],
                    Je.test(u.type || "") && !Re.access(u, "globalEval") && we.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(u.src) : m(u.textContent.replace(lt, ""), l, u))
        }
        return n
    }

    function N(e, t, n) {
        for (var i, o = t ? we.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || we.cleanData(b(i)),
            i.parentNode && (n && we.contains(i.ownerDocument, i) && w(b(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function q(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || ft(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || we.contains(e.ownerDocument, e) || (s = we.style(e, t)), !ye.pixelBoxStyles() && ct.test(s) && dt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)),
            void 0 !== s ? s + "" : s
    }

    function O(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function H(e) {
        if (e in vt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--;)
            if ((e = yt[n] + t) in vt) return e
    }

    function W(e) {
        var t = we.cssProps[e];
        return t || (t = we.cssProps[e] = H(e) || e),
            t
    }

    function R(e, t, n) {
        var i = $e.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function M(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += we.css(e, n + Ue[s], !0, o)),
            i ? ("content" === n && (u -= we.css(e, "padding" + Ue[s], !0, o)), "margin" !== n && (u -= we.css(e, "border" + Ue[s] + "Width", !0, o))) : (u += we.css(e, "padding" + Ue[s], !0, o), "padding" !== n ? u += we.css(e, "border" + Ue[s] + "Width", !0, o) : a += we.css(e, "border" + Ue[s] + "Width", !0, o));
        return !i && 0 <= r && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - u - a - .5))),
            u
    }

    function P(e, t, n) {
        var i = ft(e),
            o = q(e, t, i),
            r = "border-box" === we.css(e, "boxSizing", !1, i),
            s = r;
        if (ct.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (ye.boxSizingReliable() || o === e.style[t]),
            ("auto" === o || !parseFloat(o) && "inline" === we.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0),
            (o = parseFloat(o) || 0) + M(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function F(e, t, n, i, o) {
        return new F.prototype.init(e, t, n, i, o)
    }

    function B() {
        bt && (!1 === se.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(B) : C.setTimeout(B, we.fx.interval), we.fx.tick())
    }

    function $() {
        return C.setTimeout(function() {
                xt = void 0
            }),
            xt = Date.now()
    }

    function U(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Ue[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
            o
    }

    function Y(e, t, n) {
        for (var i, o = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function X(e, t, n) {
        var i, o, r, s, a, u, l, c, f = "width" in t || "height" in t,
            d = this,
            h = {},
            p = e.style,
            m = e.nodeType && Ye(e),
            g = Re.get(e, "fxshow");
        for (i in n.queue || (null == (s = we._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--,
                        we.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
            if (o = t[i], Ct.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    m = !0
                }
                h[i] = g && g[i] || we.style(e, i)
            }
        if ((u = !we.isEmptyObject(t)) || !we.isEmptyObject(h))
            for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = Re.get(e, "display")), "none" === (c = we.css(e, "display")) && (l ? c = l : (x([e], !0), l = e.style.display || l, c = we.css(e, "display"), x([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === we.css(e, "float") && (u || (d.done(function() {
                    p.display = l
                }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                })), u = !1, h) u || (g ? "hidden" in g && (m = g.hidden) : g = Re.access(e, "fxshow", {
                    display: l
                }), r && (g.hidden = !m), m && x([e], !0), d.done(function() {
                    for (i in m || x([e]), Re.remove(e, "fxshow"), h) we.style(e, i, h[i])
                })),
                u = Y(m ? g[i] : 0, i, d),
                i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0))
    }

    function G(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (o = t[i = h(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = we.cssHooks[i]) && "expand" in s)
                for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
            else t[i] = o
    }

    function Q(r, e, t) {
        var n, s, i = 0,
            o = Q.prefilters.length,
            a = we.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (s) return !1;
                for (var e = xt || $(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), i = 0, o = l.tweens.length; i < o; i++) l.tweens[i].run(n);
                return a.notifyWith(r, [l, n, t]),
                    n < 1 && o ? t : (o || a.notifyWith(r, [l, 1, 0]), a.resolveWith(r, [l]), !1)
            },
            l = a.promise({
                elem: r,
                props: we.extend({}, e),
                opts: we.extend(!0, {
                    specialEasing: {},
                    easing: we.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: xt || $(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = we.Tween(r, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n),
                        n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [l, 1, 0]), a.resolveWith(r, [l, e])) : a.rejectWith(r, [l, e]),
                        this
                }
            }),
            c = l.props;
        for (G(c, l.opts.specialEasing); i < o; i++)
            if (n = Q.prefilters[i].call(l, r, c, l.opts)) return ve(n.stop) && (we._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return we.map(c, Y, l),
            ve(l.opts.start) && l.opts.start.call(r, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            we.fx.timer(we.extend(u, {
                elem: r,
                anim: l,
                queue: l.opts.queue
            })),
            l
    }

    function V(e) {
        return (e.match(Ae) || []).join(" ")
    }

    function J(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ae) || []
    }

    function Z(n, e, i, o) {
        var t;
        if (Array.isArray(e)) we.each(e, function(e, t) {
            i || qt.test(n) ? o(n, t) : Z(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== g(e)) o(n, e);
        else
            for (t in e) Z(n + "[" + t + "]", e[t], i, o)
    }

    function ee(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(Ae) || [];
            if (ve(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function te(t, o, r, s) {
        function a(e) {
            var i;
            return u[e] = !0,
                we.each(t[e] || [], function(e, t) {
                    var n = t(o, r, s);
                    return "string" != typeof n || l || u[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), a(n), !1)
                }),
                i
        }
        var u = {},
            l = t === Xt;
        return a(o.dataTypes[0]) || !u["*"] && a("*")
    }

    function ne(e, t) {
        var n, i, o = we.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && we.extend(!0, e, i),
            e
    }

    function ie(e, t, n) {
        for (var i, o, r, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in n) r = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== u[0] && u.unshift(r),
            n[r]
    }

    function oe(e, t, n, i) {
        var o, r, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = r, r = c.shift())
                if ("*" === r) r = u;
                else if ("*" !== u && u !== r) {
            if (!(s = l[u + " " + r] || l["* " + r]))
                for (o in l)
                    if ((a = o.split(" "))[1] === r && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        !0 === s ? s = l[o] : !0 !== l[o] && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var re = [],
        se = C.document,
        ae = Object.getPrototypeOf,
        ue = re.slice,
        le = re.concat,
        ce = re.push,
        fe = re.indexOf,
        de = {},
        he = de.toString,
        pe = de.hasOwnProperty,
        me = pe.toString,
        ge = me.call(Object),
        ye = {},
        ve = function C(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        xe = function C(e) {
            return null != e && e === e.window
        },
        be = {
            type: !0,
            src: !0,
            noModule: !0
        },
        we = function(e, t) {
            return new we.fn.init(e, t)
        },
        Te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    we.fn = we.prototype = {
            jquery: "3.3.1",
            constructor: we,
            length: 0,
            toArray: function() {
                return ue.call(this)
            },
            get: function(e) {
                return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = we.merge(this.constructor(), e);
                return t.prevObject = this,
                    t
            },
            each: function(e) {
                return we.each(this, e)
            },
            map: function(n) {
                return this.pushStack(we.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(ue.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: re.sort,
            splice: re.splice
        },
        we.extend = we.fn.extend = function(e) {
            var t, n, i, o, r, s, a = e || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[u] || {}, u++), "object" == typeof a || ve(a) || (a = {}), u === l && (a = this, u--); u < l; u++)
                if (null != (t = arguments[u]))
                    for (n in t) i = a[n],
                        a !== (o = t[n]) && (c && o && (we.isPlainObject(o) || (r = Array.isArray(o))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && we.isPlainObject(i) ? i : {}, a[n] = we.extend(c, s, o)) : void 0 !== o && (a[n] = o));
            return a
        },
        we.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== he.call(e) || (t = ae(e)) && ("function" != typeof(n = pe.call(t, "constructor") && t.constructor) || me.call(n) !== ge))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                m(e)
            },
            each: function(e, t) {
                var n, i = 0;
                if (a(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(Te, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : fe.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o,
                    e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, r = 0,
                    s = [];
                if (a(e))
                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return le.apply([], s)
            },
            guid: 1,
            support: ye
        }),
        "function" == typeof Symbol && (we.fn[Symbol.iterator] = re[Symbol.iterator]),
        we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            de["[object " + t + "]"] = t.toLowerCase()
        });
    var Ce = function(n) {
        function b(e, t, n, i) {
            var o, r, s, a, u, l, c, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== z && A(t), t = t || z, q)) {
                if (11 !== d && (u = ye.exec(e)))
                    if (o = u[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(o)) && R(t, s) && s.id === o) return n.push(s),
                            n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (T.qsa && !Y[e + " "] && (!O || !O.test(e))) {
                    if (1 !== d) f = t,
                        c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, Te) : t.setAttribute("id", a = M), r = (l = S(e)).length; r--;) l[r] = "#" + a + " " + p(l[r]);
                        c = l.join(","),
                            f = ve.test(e) && h(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, f.querySelectorAll(c)),
                            n
                    } catch (e) {} finally {
                        a === M && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, n, i)
        }

        function e() {
            function n(e, t) {
                return i.push(e + " ") > C.cacheLength && delete n[i.shift()],
                    n[e + " "] = t
            }
            var i = [];
            return n
        }

        function u(e) {
            return e[M] = !0,
                e
        }

        function o(e) {
            var t = z.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function l(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function i(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function s(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && _e(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function a(s) {
            return u(function(r) {
                return r = +r,
                    u(function(e, t) {
                        for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }

        function h(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(a, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                d = B++;
            return e.first ?
                function(e, t, n) {
                    for (; e = e[u];)
                        if (1 === e.nodeType || f) return a(e, t, n);
                    return !1
                } : function(e, t, n) {
                    var i, o, r, s = [F, d];
                    if (n) {
                        for (; e = e[u];)
                            if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                    } else
                        for (; e = e[u];)
                            if (1 === e.nodeType || f)
                                if (o = (r = e[M] || (e[M] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                                else {
                                    if ((i = o[c]) && i[0] === F && i[1] === d) return s[2] = i[2];
                                    if ((o[c] = s)[2] = a(e, t, n)) return !0
                                }
                    return !1
                }
        }

        function d(o) {
            return 1 < o.length ?
                function(e, t, n) {
                    for (var i = o.length; i--;)
                        if (!o[i](e, t, n)) return !1;
                    return !0
                } : o[0]
        }

        function v(e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) b(e, t[i], n);
            return n
        }

        function w(e, t, n, i, o) {
            for (var r, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), l && t.push(a)));
            return s
        }

        function x(h, p, m, g, y, e) {
            return g && !g[M] && (g = x(g)),
                y && !y[M] && (y = x(y, e)),
                u(function(e, t, n, i) {
                    var o, r, s, a = [],
                        u = [],
                        l = t.length,
                        c = e || v(p || "*", n.nodeType ? [n] : n, []),
                        f = !h || !e && p ? c : w(c, a, h, n, i),
                        d = m ? y || (e ? h : l || g) ? [] : t : f;
                    if (m && m(f, d, n, i), g)
                        for (o = w(d, u), g(o, [], n, i), r = o.length; r--;)(s = o[r]) && (d[u[r]] = !(f[u[r]] = s));
                    if (e) {
                        if (y || h) {
                            if (y) {
                                for (o = [], r = d.length; r--;)(s = d[r]) && o.push(f[r] = s);
                                y(null, d = [], o, i)
                            }
                            for (r = d.length; r--;)(s = d[r]) && -1 < (o = y ? ee(e, s) : a[r]) && (e[o] = !(t[o] = s))
                        }
                    } else d = w(d === t ? d.splice(l, d.length) : d),
                        y ? y(null, t, d, i) : K.apply(t, d)
                })
        }

        function m(e) {
            for (var o, t, n, i = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, u = f(function(e) {
                    return e === o
                }, s, !0), l = f(function(e) {
                    return -1 < ee(o, e)
                }, s, !0), c = [function(e, t, n) {
                    var i = !r && (n || t !== L) || ((o = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return o = null,
                        i
                }]; a < i; a++)
                if (t = C.relative[e[a].type]) c = [f(d(c), t)];
                else {
                    if ((t = C.filter[e[a].type].apply(null, e[a].matches))[M]) {
                        for (n = ++a; n < i && !C.relative[e[n].type]; n++);
                        return x(1 < a && d(c), 1 < a && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), t, a < n && m(e.slice(a, n)), n < i && m(e = e.slice(n)), n < i && p(e))
                    }
                    c.push(t)
                }
            return d(c)
        }

        function g(g, y) {
            var v = 0 < y.length,
                x = 0 < g.length,
                e = function(e, t, n, i, o) {
                    var r, s, a, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        d = L,
                        h = e || x && C.find.TAG("*", o),
                        p = F += null == d ? 1 : Math.random() || .1,
                        m = h.length;
                    for (o && (L = t === z || t || o); l !== m && null != (r = h[l]); l++) {
                        if (x && r) {
                            for (s = 0, t || r.ownerDocument === z || (A(r), n = !q); a = g[s++];)
                                if (a(r, t || z, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (F = p)
                        }
                        v && ((r = !a && r) && u--, e && c.push(r))
                    }
                    if (u += l, v && l !== u) {
                        for (s = 0; a = y[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = V.call(i));
                            f = w(f)
                        }
                        K.apply(i, f),
                            o && !e && 0 < f.length && 1 < u + y.length && b.uniqueSort(i)
                    }
                    return o && (F = p, L = d),
                        c
                };
            return v ? u(e) : e
        }
        var y, T, C, _, E, S, I, D, L, j, k, A, z, N, q, O, H, W, R, M = "sizzle" + 1 * new Date,
            P = n.document,
            F = 0,
            B = 0,
            $ = e(),
            U = e(),
            Y = e(),
            X = function(e, t) {
                return e === t && (k = !0),
                    0
            },
            G = {}.hasOwnProperty,
            Q = [],
            V = Q.pop,
            J = Q.push,
            K = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(re),
            de = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                A()
            },
            _e = f(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(Q = Z.call(P.childNodes), P.childNodes),
                Q[P.childNodes.length].nodeType
        } catch (n) {
            K = {
                apply: Q.length ?
                    function(e, t) {
                        J.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
            }
        }
        for (y in T = b.support = {}, E = b.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, A = b.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : P;
                return i !== z && 9 === i.nodeType && i.documentElement && (N = (z = i).documentElement, q = !E(z), P !== z && (n = z.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = o(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), T.getElementsByTagName = o(function(e) {
                            return e.appendChild(z.createComment("")), !e.getElementsByTagName("*").length
                        }), T.getElementsByClassName = ge.test(z.getElementsByClassName), T.getById = o(function(e) {
                            return N.appendChild(e).id = M, !z.getElementsByName || !z.getElementsByName(M).length
                        }), T.getById ? (C.filter.ID = function(e) {
                            var t = e.replace(xe, be);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, C.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && q) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (C.filter.ID = function(e) {
                            var n = e.replace(xe, be);
                            return function(e) {
                                var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }, C.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && q) {
                                var n, i, o, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                    for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                }
                                return []
                            }
                        }), C.find.TAG = T.getElementsByTagName ?
                        function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" !== e) return r;
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, C.find.CLASS = T.getElementsByClassName &&
                        function(e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && q) return t.getElementsByClassName(e)
                        }, H = [], O = [], (T.qsa = ge.test(z.querySelectorAll)) && (o(function(e) {
                            N.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                                e.querySelectorAll("[id~=" + M + "-]").length || O.push("~="),
                                e.querySelectorAll(":checked").length || O.push(":checked"),
                                e.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]")
                        }), o(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = z.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
                                N.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                O.push(",.*:")
                        })), (T.matchesSelector = ge.test(W = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(e) {
                            T.disconnectedMatch = W.call(e, "*"),
                                W.call(e, "[s!='']:x"),
                                H.push("!=", re)
                        }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), t = ge.test(N.compareDocumentPosition), R = t || ge.test(N.contains) ?
                        function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, X = t ?
                        function(e, t) {
                            if (e === t) return k = !0,
                                0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === z || e.ownerDocument === P && R(P, e) ? -1 : t === z || t.ownerDocument === P && R(P, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return k = !0,
                                0;
                            var n, i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!o || !r) return e === z ? -1 : t === z ? 1 : o ? -1 : r ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                            if (o === r) return l(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? l(s[i], a[i]) : s[i] === P ? -1 : a[i] === P ? 1 : 0
                        }),
                    z
            }, b.matches = function(e, t) {
                return b(e, null, null, t)
            }, b.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== z && A(e), t = t.replace(ce, "='$1']"), T.matchesSelector && q && !Y[t + " "] && (!H || !H.test(t)) && (!O || !O.test(t))) try {
                    var n = W.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < b(t, z, null, [e]).length
            }, b.contains = function(e, t) {
                return (e.ownerDocument || e) !== z && A(e),
                    R(e, t)
            }, b.attr = function(e, t) {
                (e.ownerDocument || e) !== z && A(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== i ? i : T.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, b.escape = function(e) {
                return (e + "").replace(we, Te)
            }, b.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, b.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (k = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(X), k) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null,
                    e
            }, _ = b.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += _(t);
                return n
            }, (C = b.selectors = {
                cacheLength: 50,
                createPseudo: u,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, be),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, be).toLowerCase();
                        return "*" === e ?
                            function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = $[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = b.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(se, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(p, e, t, m, g) {
                        var y = "nth" !== p.slice(0, 3),
                            v = "last" !== p.slice(-4),
                            x = "of-type" === e;
                        return 1 === m && 0 === g ?
                            function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var i, o, r, s, a, u, l = y !== v ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = x && e.nodeName.toLowerCase(),
                                    d = !n && !x,
                                    h = !1;
                                if (c) {
                                    if (y) {
                                        for (; l;) {
                                            for (s = e; s = s[l];)
                                                if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                            u = l = "only" === p && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [v ? c.firstChild : c.lastChild], v && d) {
                                        for (h = (a = (i = (o = (r = (s = c)[M] || (s[M] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === F && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (h = a = 0) || u.pop();)
                                            if (1 === s.nodeType && ++h && s === e) {
                                                o[p] = [F, a, h];
                                                break
                                            }
                                    } else if (d && (h = a = (i = (o = (r = (s = e)[M] || (s[M] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === F && i[1]), !1 === h)
                                        for (;
                                            (s = ++a && s && s[l] || (h = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((o = (r = s[M] || (s[M] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [F, h]), s !== e)););
                                    return (h -= g) === m || h % m == 0 && 0 <= h / m
                                }
                            }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = C.pseudos[e] || C.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                        return s[M] ? s(r) : 1 < s.length ? (t = [e, e, "", r], C.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = ee(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: u(function(e) {
                        var i = [],
                            o = [],
                            a = I(e.replace(ae, "$1"));
                        return a[M] ? u(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e,
                                a(i, null, n, o),
                                i[0] = null, !o.pop()
                        }
                    }),
                    has: u(function(t) {
                        return function(e) {
                            return 0 < b(t, e).length
                        }
                    }),
                    contains: u(function(t) {
                        return t = t.replace(xe, be),


                            function(e) {
                                return -1 < (e.textContent || e.innerText || _(e)).indexOf(t)
                            }
                    }),
                    lang: u(function(n) {
                        return de.test(n || "") || b.error("unsupported lang: " + n),
                            n = n.replace(xe, be).toLowerCase(),


                            function(e) {
                                var t;
                                do {
                                    if (t = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === N
                    },
                    focus: function(e) {
                        return e === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(function() {
                        return [0]
                    }),
                    last: a(function(e, t) {
                        return [t - 1]
                    }),
                    eq: a(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: a(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: a(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: a(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: a(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = C.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[y] = i(y);
        for (y in {
                submit: !0,
                reset: !0
            }) C.pseudos[y] = r(y);
        return c.prototype = C.filters = C.pseudos,
            C.setFilters = new c,
            S = b.tokenize = function(e, t) {
                var n, i, o, r, s, a, u, l = U[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (s = e, a = [], u = C.preFilter; s;) {
                    for (r in n && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = le.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(ae, " ")
                        }), s = s.slice(n.length)), C.filter) !(i = he[r].exec(s)) || u[r] && !(i = u[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? b.error(e) : U(e, a).slice(0)
            },
            I = b.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = Y[e + " "];
                if (!r) {
                    for (t || (t = S(e)), n = t.length; n--;)(r = m(t[n]))[M] ? i.push(r) : o.push(r);
                    (r = Y(e, g(o, i))).selector = e
                }
                return r
            },
            D = b.select = function(e, t, n, i) {
                var o, r, s, a, u, l = "function" == typeof e && e,
                    c = !i && S(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && q && C.relative[r[1].type]) {
                        if (!(t = (C.find.ID(s.matches[0].replace(xe, be), t) || [])[0])) return n;
                        l && (t = t.parentNode),
                            e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                        if ((u = C.find[a]) && (i = u(s.matches[0].replace(xe, be), ve.test(r[0].type) && h(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && p(r))) return K.apply(n, i),
                                n;
                            break
                        }
                }
                return (l || I(e, c))(i, t, !q, n, !t || ve.test(e) && h(t.parentNode) || t),
                    n
            },
            T.sortStable = M.split("").sort(X).join("") === M,
            T.detectDuplicates = !!k,
            A(),
            T.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(z.createElement("fieldset"))
            }),
            o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || t("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            T.attributes && o(function(e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || t("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }),
            o(function(e) {
                return null == e.getAttribute("disabled")
            }) || t(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            b
    }(C);
    we.find = Ce,
        we.expr = Ce.selectors,
        we.expr[":"] = we.expr.pseudos,
        we.uniqueSort = we.unique = Ce.uniqueSort,
        we.text = Ce.getText,
        we.isXMLDoc = Ce.isXML,
        we.contains = Ce.contains,
        we.escapeSelector = Ce.escape;
    var _e = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && we(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        Ee = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Se = we.expr.match.needsContext,
        Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType ? we.find.matchesSelector(i, e) ? [i] : [] : we.find.matches(e, we.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
        },
        we.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(we(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (we.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) we.find(e, o[t], n);
                return 1 < i ? we.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(t(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(t(this, e || [], !0))
            },
            is: function(e) {
                return !!t(this, "string" == typeof e && Se.test(e) ? we(e) : e || [], !1).length
            }
        });
    var De, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || De, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? void 0 !== n.ready ? n.ready(e) : e(we) : we.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Le.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ie.test(i[1]) && we.isPlainObject(t))
                for (i in t) ve(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (o = se.getElementById(i[2])) && (this[0] = o, this.length = 1),
            this
    }).prototype = we.fn,
        De = we(se);
    var je = /^(?:parents|prev(?:Until|All))/,
        ke = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    we.fn.extend({
            has: function(e) {
                var t = we(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (we.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && we(e);
                if (!Se.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(1 < r.length ? we.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? fe.call(we(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        we.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return _e(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return _e(e, "parentNode", n)
            },
            next: function(e) {
                return n(e, "nextSibling")
            },
            prev: function(e) {
                return n(e, "previousSibling")
            },
            nextAll: function(e) {
                return _e(e, "nextSibling")
            },
            prevAll: function(e) {
                return _e(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return _e(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return _e(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ee((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ee(e.firstChild)
            },
            contents: function(e) {
                return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e), we.merge([], e.childNodes))
            }
        }, function(i, o) {
            we.fn[i] = function(e, t) {
                var n = we.map(this, o, e);
                return "Until" !== i.slice(-5) && (t = e),
                    t && "string" == typeof t && (n = we.filter(t, n)),
                    1 < this.length && (ke[i] || we.uniqueSort(n), je.test(i) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var Ae = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function(i) {
            i = "string" == typeof i ? c(i) : we.extend({}, i);
            var o, e, t, n, r = [],
                s = [],
                a = -1,
                u = function() {
                    for (n = n || i.once, t = o = !0; s.length; a = -1)
                        for (e = s.shift(); ++a < r.length;) !1 === r[a].apply(e[0], e[1]) && i.stopOnFalse && (a = r.length, e = !1);
                    i.memory || (e = !1),
                        o = !1,
                        n && (r = e ? [] : "")
                },
                l = {
                    add: function() {
                        return r && (e && !o && (a = r.length - 1, s.push(e)), function n(e) {
                                we.each(e, function(e, t) {
                                    ve(t) ? i.unique && l.has(t) || r.push(t) : t && t.length && "string" !== g(t) && n(t)
                                })
                            }(arguments), e && !o && u()),
                            this
                    },
                    remove: function() {
                        return we.each(arguments, function(e, t) {
                                for (var n; - 1 < (n = we.inArray(t, r, n));) r.splice(n, 1),
                                    n <= a && a--
                            }),
                            this
                    },
                    has: function(e) {
                        return e ? -1 < we.inArray(e, r) : 0 < r.length
                    },
                    empty: function() {
                        return r && (r = []),
                            this
                    },
                    disable: function() {
                        return n = s = [],
                            r = e = "",
                            this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return n = s = [],
                            e || o || (r = e = ""),
                            this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(e, t) {
                        return n || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), o || u()),
                            this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return l
        },
        we.extend({
            Deferred: function(e) {
                var r = [
                        ["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2],
                        ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    s = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments),
                                this
                        },
                        "catch": function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var o = arguments;
                            return we.Deferred(function(i) {
                                we.each(r, function(e, t) {
                                        var n = ve(o[t[4]]) && o[t[4]];
                                        a[t[1]](function() {
                                            var e = n && n.apply(this, arguments);
                                            e && ve(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                        })
                                    }),
                                    o = null
                            }).promise()
                        },
                        then: function(t, n, i) {
                            function u(o, r, s, a) {
                                return function() {
                                    var n = this,
                                        i = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(o < l)) {
                                                if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                    ve(t) ? a ? t.call(e, u(l, r, f, a), u(l, r, d, a)) : (l++, t.call(e, u(l, r, f, a), u(l, r, d, a), u(l, r, f, r.notifyWith))) : (s !== f && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                            }
                                        },
                                        t = a ? e : function() {
                                            try {
                                                e()
                                            } catch (C) {
                                                we.Deferred.exceptionHook && we.Deferred.exceptionHook(C, t.stackTrace),
                                                    l <= o + 1 && (s !== d && (n = void 0, i = [C]), r.rejectWith(n, i))
                                            }
                                        };
                                    o ? t() : (we.Deferred.getStackHook && (t.stackTrace = we.Deferred.getStackHook()), C.setTimeout(t))
                                }
                            }
                            var l = 0;
                            return we.Deferred(function(e) {
                                r[0][3].add(u(0, e, ve(i) ? i : f, e.notifyWith)),
                                    r[1][3].add(u(0, e, ve(t) ? t : f)),
                                    r[2][3].add(u(0, e, ve(n) ? n : d))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? we.extend(e, s) : s
                        }
                    },
                    a = {};
                return we.each(r, function(e, t) {
                        var n = t[2],
                            i = t[5];
                        s[t[1]] = n.add,
                            i && n.add(function() {
                                o = i
                            }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock),
                            n.add(t[3].fire),
                            a[t[0]] = function() {
                                return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                                    this
                            },
                            a[t[0] + "With"] = n.fireWith
                    }),
                    s.promise(a),
                    e && e.call(a, a),
                    a
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    i = Array(t),
                    o = ue.call(arguments),
                    r = we.Deferred(),
                    s = function(t) {
                        return function(e) {
                            i[t] = this,
                                o[t] = 1 < arguments.length ? ue.call(arguments) : e,
                                --n || r.resolveWith(i, o)
                        }
                    };
                if (n <= 1 && (u(e, r.done(s(t)).resolve, r.reject, !n), "pending" === r.state() || ve(o[t] && o[t].then))) return r.then();
                for (; t--;) u(o[t], s(t), r.reject);
                return r.promise()
            }
        });
    var ze = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function(e, t) {
            C.console && C.console.warn && e && ze.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        },
        we.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        };
    var Ne = we.Deferred();
    we.fn.ready = function(e) {
            return Ne.then(e)["catch"](function(e) {
                    we.readyException(e)
                }),
                this
        },
        we.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --we.readyWait : we.isReady) || ((we.isReady = !0) !== e && 0 < --we.readyWait || Ne.resolveWith(se, [we]))
            }
        }),
        we.ready.then = Ne.then,
        "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? C.setTimeout(we.ready) : (se.addEventListener("DOMContentLoaded", i), C.addEventListener("load", i));
    var qe = function(e, t, n, i, o, r, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === g(n))
                for (a in o = !0, n) qe(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, ve(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(we(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : r
        },
        Oe = /^-ms-/,
        He = /-([a-z])/g,
        We = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    r.uid = 1,
        r.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, We(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[h(t)] = n;
                else
                    for (i in t) o[h(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in i ? [t] : t.match(Ae) || []).length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || we.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !we.isEmptyObject(t)
            }
        };
    var Re = new r,
        Me = new r,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    we.extend({
            hasData: function(e) {
                return Me.hasData(e) || Re.hasData(e)
            },
            data: function(e, t, n) {
                return Me.access(e, t, n)
            },
            removeData: function(e, t) {
                Me.remove(e, t)
            },
            _data: function(e, t, n) {
                return Re.access(e, t, n)
            },
            _removeData: function(e, t) {
                Re.remove(e, t)
            }
        }),
        we.fn.extend({
            data: function(n, e) {
                var t, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    Me.set(this, n)
                }) : qe(this, function(e) {
                    var t;
                    if (r && void 0 === e) {
                        if (void 0 !== (t = Me.get(r, n))) return t;
                        if (void 0 !== (t = p(r, n))) return t
                    } else this.each(function() {
                        Me.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (o = Me.get(r), 1 === r.nodeType && !Re.get(r, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = h(i.slice(5)), p(r, i, o[i]));
                    Re.set(r, "hasDataAttrs", !0)
                }
                return o
            },
            removeData: function(e) {
                return this.each(function() {
                    Me.remove(this, e)
                })
            }
        }),
        we.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue",
                    i = Re.get(e, t),
                    n && (!i || Array.isArray(n) ? i = Re.access(e, t, we.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = we.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = we._queueHooks(e, t),
                    s = function() {
                        we.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--),
                    o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Re.get(e, n) || Re.access(e, n, {
                    empty: we.Callbacks("once memory").add(function() {
                        Re.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        we.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--),
                    arguments.length < e ? we.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = we.queue(this, t, n);
                        we._queueHooks(this, t),
                            "fx" === t && "inprogress" !== e[0] && we.dequeue(this, t)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    we.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = we.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Re.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(),
                    o.promise(t)
            }
        });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $e = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        Ue = ["Top", "Right", "Bottom", "Left"],
        Ye = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
        },
        Xe = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r],
                e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        },
        Ge = {};
    we.fn.extend({
        show: function() {
            return x(this, !0)
        },
        hide: function() {
            return x(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ye(this) ? we(this).show() : we(this).hide()
            })
        }
    });
    var Qe = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Je = /^$|^module$|\/(?:java|ecma)script/i,
        Ke = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ke.optgroup = Ke.option,
        Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead,
        Ke.th = Ke.td;
    var Ze, et, tt = /<|&#?\w+;/;
    Ze = se.createDocumentFragment().appendChild(se.createElement("div")),
        (et = se.createElement("input")).setAttribute("type", "radio"),
        et.setAttribute("checked", "checked"),
        et.setAttribute("name", "t"),
        Ze.appendChild(et),
        ye.checkClone = Ze.cloneNode(!0).cloneNode(!0).lastChild.checked,
        Ze.innerHTML = "<textarea>x</textarea>",
        ye.noCloneChecked = !!Ze.cloneNode(!0).lastChild.defaultValue;
    var nt = se.documentElement,
        it = /^key/,
        ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rt = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, u, l, c, f, d, h, p, m, g = Re.get(t);
                if (g)
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && we.find.matchesSelector(nt, o), n.guid || (n.guid = we.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                            return void 0 !== we && we.event.triggered !== e.type ? we.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(Ae) || [""]).length; l--;) h = m = (a = rt.exec(e[l]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        h && (f = we.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = we.event.special[h] || {}, c = we.extend({
                            type: h,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && we.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        }, r), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), we.event.global[h] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, u, l, c, f, d, h, p, m, g = Re.hasData(e) && Re.get(e);
                if (g && (u = g.events)) {
                    for (l = (t = (t || "").match(Ae) || [""]).length; l--;)
                        if (h = m = (a = rt.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                            for (f = we.event.special[h] || {}, d = u[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) c = d[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || we.removeEvent(e, h, g.handle), delete u[h])
                        } else
                            for (h in u) we.event.remove(e, h + t[l], n, i, !0);
                    we.isEmptyObject(u) && Re.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, s, a = we.event.fix(e),
                    u = new Array(arguments.length),
                    l = (Re.get(this, "events") || {})[a.type] || [],
                    c = we.event.special[a.type] || {};
                for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (s = we.event.handlers.call(this, a, l), t = 0;
                        (o = s[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((we.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a),
                        a.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, s, a = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (r = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < we(o, this).index(l) : we.find(o, this, null, [l]).length),
                                s[o] && r.push(i);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return l = this,
                    u < t.length && a.push({
                        elem: l,
                        handlers: t.slice(u)
                    }),
                    a
            },
            addProp: function(t, e) {
                Object.defineProperty(we.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: ve(e) ?
                        function() {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[we.expando] ? e : new we.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== S() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === S() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return l(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        we.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        },
        we.Event = function(e, t) {
            if (!(this instanceof we.Event)) return new we.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _ : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
                t && we.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[we.expando] = !0
        },
        we.Event.prototype = {
            constructor: we.Event,
            isDefaultPrevented: E,
            isPropagationStopped: E,
            isImmediatePropagationStopped: E,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = _,
                    e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = _,
                    e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = _,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        we.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && it.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, we.event.addProp),
        we.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, r) {
            we.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function(e) {
                    var t, n = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === n || we.contains(n, i)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = r),
                        t
                }
            }
        }),
        we.fn.extend({
            on: function(e, t, n, i) {
                return I(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return I(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
                    we(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = E),
                    this.each(function() {
                        we.event.remove(this, e, n, t)
                    });
                for (o in e) this.off(o, t, e[o]);
                return this
            }
        });
    var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        at = /<script|<style|<link/i,
        ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
            htmlPrefilter: function(e) {
                return e.replace(st, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0),
                    u = we.contains(e.ownerDocument, e);
                if (!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                    for (s = b(a), i = 0, o = (r = b(e)).length; i < o; i++) A(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || b(e), s = s || b(a), i = 0, o = r.length; i < o; i++) k(r[i], s[i]);
                    else k(e, a);
                return 0 < (s = b(a, "script")).length && w(s, !u && b(e, "script")),
                    a
            },
            cleanData: function(e) {
                for (var t, n, i, o = we.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (We(n)) {
                        if (t = n[Re.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? we.event.remove(n, i) : we.removeEvent(n, i, t.handle);
                            n[Re.expando] = void 0
                        }
                        n[Me.expando] && (n[Me.expando] = void 0)
                    }
            }
        }),
        we.fn.extend({
            detach: function(e) {
                return N(this, e, !0)
            },
            remove: function(e) {
                return N(this, e)
            },
            text: function(e) {
                return qe(this, function(e) {
                    return void 0 === e ? we.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return z(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return z(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return z(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return z(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (we.cleanData(b(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return we.clone(this, e, t)
                    })
            },
            html: function(e) {
                return qe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !at.test(e) && !Ke[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = we.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (we.cleanData(b(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return z(this, arguments, function(e) {
                    var t = this.parentNode;
                    we.inArray(this, n) < 0 && (we.cleanData(b(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }),
        we.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            we.fn[e] = function(e) {
                for (var t, n = [], i = we(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0),
                    we(i[r])[s](t),
                    ce.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var ct = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        ft = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C),
                t.getComputedStyle(e)
        },
        dt = new RegExp(Ue.join("|"), "i");
    !
    function() {
        function e() {
            if (u) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    nt.appendChild(a).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                    s = 12 === t(e.marginLeft),
                    u.style.right = "60%",
                    r = 36 === t(e.right),
                    i = 36 === t(e.width),
                    u.style.position = "absolute",
                    o = 36 === u.offsetWidth || "absolute",
                    nt.removeChild(a),
                    u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, o, r, s, a = se.createElement("div"),
            u = se.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === u.style.backgroundClip, we.extend(ye, {
            boxSizingReliable: function() {
                return e(),
                    i
            },
            pixelBoxStyles: function() {
                return e(),
                    r
            },
            pixelPosition: function() {
                return e(),
                    n
            },
            reliableMarginLeft: function() {
                return e(),
                    s
            },
            scrollboxSize: function() {
                return e(),
                    o
            }
        }))
    }();
    var ht = /^(none|table(?!-c[ea]).+)/,
        pt = /^--/,
        mt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        yt = ["Webkit", "Moz", "ms"],
        vt = se.createElement("div").style;
    we.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = q(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = h(t),
                        u = pt.test(t),
                        l = e.style;
                    if (u || (t = W(a)), s = we.cssHooks[t] || we.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                    "string" == (r = typeof n) && (o = $e.exec(n)) && o[1] && (n = y(e, t, o), r = "number"),
                        null != n && n == n && ("number" === r && (n += o && o[3] || (we.cssNumber[a] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, s, a = h(t);
                return pt.test(t) || (t = W(a)),
                    (s = we.cssHooks[t] || we.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)),
                    void 0 === o && (o = q(e, t, i)),
                    "normal" === o && t in gt && (o = gt[t]),
                    "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }),
        we.each(["height", "width"], function(e, a) {
            we.cssHooks[a] = {
                get: function(e, t, n) {
                    if (t) return !ht.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, a, n) : Xe(e, mt, function() {
                        return P(e, a, n)
                    })
                },
                set: function(e, t, n) {
                    var i, o = ft(e),
                        r = "border-box" === we.css(e, "boxSizing", !1, o),
                        s = n && M(e, a, n, r, o);
                    return r && ye.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - M(e, a, "border", !1, o) - .5)),
                        s && (i = $e.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = we.css(e, a)),
                        R(e, t, s)
                }
            }
        }),
        we.cssHooks.marginLeft = O(ye.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }),
        we.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, r) {
            we.cssHooks[o + r] = {
                    expand: function(e) {
                        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + Ue[t] + r] = i[t] || i[t - 2] || i[0];
                        return n
                    }
                },
                "margin" !== o && (we.cssHooks[o + r].set = R)
        }),
        we.fn.extend({
            css: function(e, t) {
                return qe(this, function(e, t, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (i = ft(e), o = t.length; s < o; s++) r[t[s]] = we.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? we.style(e, t, n) : we.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        (we.Tween = F).prototype = {
            constructor: F,
            init: function(e, t, n, i, o, r) {
                this.elem = e,
                    this.prop = n,
                    this.easing = o || we.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (we.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : F.propHooks._default.set(this),
                    this
            }
        },
        F.prototype.init.prototype = F.prototype,
        F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        we.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        we.fx = F.prototype.init,
        we.fx.step = {};
    var xt, bt, wt, Tt, Ct = /^(?:toggle|show|hide)$/,
        _t = /queueHooks$/;
    we.Animation = we.extend(Q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, $e.exec(t), n),
                        n
                }]
            },
            tweener: function(e, t) {
                ve(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i],
                    Q.tweeners[n] = Q.tweeners[n] || [],
                    Q.tweeners[n].unshift(t)
            },
            prefilters: [X],
            prefilter: function(e, t) {
                t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
            }
        }),
        we.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? we.extend({}, e) : {
                complete: n || !n && t || ve(e) && e,
                duration: e,
                easing: n && t || t && !ve(t) && t
            };
            return we.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in we.fx.speeds ? i.duration = we.fx.speeds[i.duration] : i.duration = we.fx.speeds._default),
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    ve(i.old) && i.old.call(this),
                        i.queue && we.dequeue(this, i.queue)
                },
                i
        },
        we.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ye).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var o = we.isEmptyObject(t),
                    r = we.speed(e, n, i),
                    s = function() {
                        var e = Q(this, we.extend({}, t), r);
                        (o || Re.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s,
                    o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(o, e, r) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(r)
                };
                return "string" != typeof o && (r = e, e = o, o = void 0),
                    e && !1 !== o && this.queue(o || "fx", []),
                    this.each(function() {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = we.timers,
                            i = Re.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i) i[t] && i[t].stop && _t.test(t) && s(i[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                        !e && r || we.dequeue(this, o)
                    })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"),
                    this.each(function() {
                        var e, t = Re.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            o = we.timers,
                            r = n ? n.length : 0;
                        for (t.finish = !0, we.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        we.each(["toggle", "show", "hide"], function(e, i) {
            var o = we.fn[i];
            we.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(U(i, !0), e, t, n)
            }
        }),
        we.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            we.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }),
        we.timers = [],
        we.fx.tick = function() {
            var e, t = 0,
                n = we.timers;
            for (xt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || we.fx.stop(),
                xt = void 0
        },
        we.fx.timer = function(e) {
            we.timers.push(e),
                we.fx.start()
        },
        we.fx.interval = 13,
        we.fx.start = function() {
            bt || (bt = !0, B())
        },
        we.fx.stop = function() {
            bt = null
        },
        we.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        we.fn.delay = function(i, e) {
            return i = we.fx && we.fx.speeds[i] || i,
                e = e || "fx",
                this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, i);
                    t.stop = function() {
                        C.clearTimeout(n)
                    }
                })
        },
        wt = se.createElement("input"),
        Tt = se.createElement("select").appendChild(se.createElement("option")),
        wt.type = "checkbox",
        ye.checkOn = "" !== wt.value,
        ye.optSelected = Tt.selected,
        (wt = se.createElement("input")).value = "t",
        wt.type = "radio",
        ye.radioValue = "t" === wt.value;
    var Et, St = we.expr.attrHandle;
    we.fn.extend({
            attr: function(e, t) {
                return qe(this, we.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    we.removeAttr(this, e)
                })
            }
        }),
        we.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? we.prop(e, t, n) : (1 === r && we.isXMLDoc(e) || (o = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void we.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = we.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ye.radioValue && "radio" === t && l(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(Ae);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }),
        Et = {
            set: function(e, t, n) {
                return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        we.each(we.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = St[t] || we.find.attr;
            St[t] = function(e, t, n) {
                var i, o, r = t.toLowerCase();
                return n || (o = St[r], St[r] = i, i = null != s(e, t, n) ? r : null, St[r] = o),
                    i
            }
        });
    var It = /^(?:input|select|textarea|button)$/i,
        Dt = /^(?:a|area)$/i;
    we.fn.extend({
            prop: function(e, t) {
                return qe(this, we.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[we.propFix[e] || e]
                })
            }
        }),
        we.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && we.isXMLDoc(e) || (t = we.propFix[t] || t, o = we.propHooks[t]),
                    void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = we.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : It.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        ye.optSelected || (we.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            we.propFix[this.toLowerCase()] = this
        }),
        we.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, u = 0;
                if (ve(t)) return this.each(function(e) {
                    we(this).addClass(t.call(this, e, J(this)))
                });
                if ((e = K(t)).length)
                    for (; n = this[u++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = V(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, u = 0;
                if (ve(t)) return this.each(function(e) {
                    we(this).removeClass(t.call(this, e, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = K(t)).length)
                    for (; n = this[u++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            o !== (a = V(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(o, t) {
                var r = typeof o,
                    s = "string" === r || Array.isArray(o);
                return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : ve(o) ? this.each(function(e) {
                    we(this).toggleClass(o.call(this, e, J(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if (s)
                        for (t = 0, n = we(this), i = K(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== o && "boolean" !== r || ((e = J(this)) && Re.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Re.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + V(J(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
    var Lt = /\r/g;
    we.fn.extend({
            val: function(n) {
                var i, e, o, t = this[0];
                return arguments.length ? (o = ve(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = o ? n.call(this, e, we(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = we.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (i = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                })) : t ? (i = we.valHooks[t.type] || we.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(Lt, "") : null == e ? "" : e : void 0
            }
        }),
        we.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = we.find.attr(e, "value");
                        return null != t ? t : V(we.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            u = s ? r + 1 : o.length;
                        for (i = r < 0 ? u : s ? r : 0; i < u; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                                if (t = we(n).val(), s) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = we.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < we.inArray(we.valHooks.option.get(i), r)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            r
                    }
                }
            }
        }),
        we.each(["radio", "checkbox"], function() {
            we.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < we.inArray(we(e).val(), t)
                    }
                },
                ye.checkOn || (we.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
        }),
        ye.focusin = "onfocusin" in C;
    var jt = /^(?:focusinfocus|focusoutblur)$/,
        kt = function(e) {
            e.stopPropagation()
        };
    we.extend(we.event, {
            trigger: function(e, t, n, i) {
                var o, r, s, a, u, l, c, f, d = [n || se],
                    h = pe.call(e, "type") ? e.type : e,
                    p = pe.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = f = s = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType && !jt.test(h + we.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), u = h.indexOf(":") < 0 && "on" + h, (e = e[we.expando] ? e : new we.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : we.makeArray(t, [e]), c = we.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!i && !c.noBubble && !xe(n)) {
                        for (a = c.delegateType || h, jt.test(a + h) || (r = r.parentNode); r; r = r.parentNode) d.push(r),
                            s = r;
                        s === (n.ownerDocument || se) && d.push(s.defaultView || s.parentWindow || C)
                    }
                    for (o = 0;
                        (r = d[o++]) && !e.isPropagationStopped();) f = r,
                        e.type = 1 < o ? a : c.bindType || h,
                        (l = (Re.get(r, "events") || {})[e.type] && Re.get(r, "handle")) && l.apply(r, t),
                        (l = u && r[u]) && l.apply && We(r) && (e.result = l.apply(r, t), !1 === e.result && e.preventDefault());
                    return e.type = h,
                        i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !We(n) || u && ve(n[h]) && !xe(n) && ((s = n[u]) && (n[u] = null), we.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, kt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, kt), we.event.triggered = void 0, s && (n[u] = s)),
                        e.result
                }
            },
            simulate: function(e, t, n) {
                var i = we.extend(new we.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                we.event.trigger(i, null, t)
            }
        }),
        we.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    we.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return we.event.trigger(e, t, n, !0)
            }
        }),
        ye.focusin || we.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            var o = function(e) {
                we.event.simulate(i, e.target, we.event.fix(e))
            };
            we.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = Re.access(e, i);
                    t || e.addEventListener(n, o, !0),
                        Re.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = Re.access(e, i) - 1;
                    t ? Re.access(e, i, t) : (e.removeEventListener(n, o, !0), Re.remove(e, i))
                }
            }
        });
    var At = C.location,
        zt = Date.now(),
        Nt = /\?/;
    we.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (C) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + e),
            t
    };
    var qt = /\[\]$/,
        Ot = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Wt = /^(?:input|select|textarea|keygen)/i;
    we.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    var n = ve(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Z(n, e[n], t, o);
            return i.join("&")
        },
        we.fn.extend({
            serialize: function() {
                return we.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = we.prop(this, "elements");
                    return e ? we.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !we(this).is(":disabled") && Wt.test(this.nodeName) && !Ht.test(e) && (this.checked || !Qe.test(e))
                }).map(function(e, t) {
                    var n = we(this).val();
                    return null == n ? null : Array.isArray(n) ? we.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        });
    var Rt = /%20/g,
        Mt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        $t = /^(?:GET|HEAD)$/,
        Ut = /^\/\//,
        Yt = {},
        Xt = {},
        Gt = "*/".concat("*"),
        Qt = se.createElement("a");
    Qt.href = At.href,
        we.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: Bt.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Gt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": we.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e)
            },
            ajaxPrefilter: ee(Yt),
            ajaxTransport: ee(Xt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var o, r, s, a, u, l = t;
                    p || (p = !0, h && C.clearTimeout(h), c = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = ie(g, T, n)), a = oe(g, a, T, o), o ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (we.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (we.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, r = a.data, o = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", o ? x.resolveWith(y, [r, l, T]) : x.rejectWith(y, [T, l, s]), T.statusCode(w), w = void 0, m && v.trigger(o ? "ajaxSuccess" : "ajaxError", [T, g, o ? r : s]), b.fireWith(y, [T, l]), m && (v.trigger("ajaxComplete", [T, g]), --we.active || we.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0),
                    t = t || {};
                var c, f, d, i, h, o, p, m, r, s, g = we.ajaxSetup({}, t),
                    y = g.context || g,
                    v = g.context && (y.nodeType || y.jquery) ? we(y) : we.event,
                    x = we.Deferred(),
                    b = we.Callbacks("once memory"),
                    w = g.statusCode || {},
                    a = {},
                    u = {},
                    l = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (p) {
                                if (!i)
                                    for (i = {}; t = Ft.exec(d);) i[t[1].toLowerCase()] = t[2];
                                t = i[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return p ? d : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == p && (e = u[e.toLowerCase()] = u[e.toLowerCase()] || e, a[e] = t),
                                this
                        },
                        overrideMimeType: function(e) {
                            return null == p && (g.mimeType = e),
                                this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (p) T.always(e[T.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            return c && c.abort(t),
                                n(0, t),
                                this
                        }
                    };
                if (x.promise(T), g.url = ((e || g.url || At.href) + "").replace(Ut, At.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(Ae) || [""], null == g.crossDomain) {
                    o = se.createElement("a");
                    try {
                        o.href = g.url,
                            o.href = o.href,
                            g.crossDomain = Qt.protocol + "//" + Qt.host != o.protocol + "//" + o.host
                    } catch (C) {
                        g.crossDomain = !0
                    }
                }
                if (g.data && g.processData && "string" != typeof g.data && (g.data = we.param(g.data, g.traditional)), te(Yt, g, t, T), p) return T;
                for (r in (m = we.event && g.global) && 0 == we.active++ && we.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !$t.test(g.type), f = g.url.replace(Mt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Rt, "+")) : (s = g.url.slice(f.length), g.data && (g.processData || "string" == typeof g.data) && (f += (Nt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(Pt, "$1"), s = (Nt.test(f) ? "&" : "?") + "_=" + zt++ + s), g.url = f + s), g.ifModified && (we.lastModified[f] && T.setRequestHeader("If-Modified-Since", we.lastModified[f]), we.etag[f] && T.setRequestHeader("If-None-Match", we.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(r, g.headers[r]);
                if (g.beforeSend && (!1 === g.beforeSend.call(y, T, g) || p)) return T.abort();
                if (l = "abort", b.add(g.complete), T.done(g.success), T.fail(g.error), c = te(Xt, g, t, T)) {
                    if (T.readyState = 1, m && v.trigger("ajaxSend", [T, g]), p) return T;
                    g.async && 0 < g.timeout && (h = C.setTimeout(function() {
                        T.abort("timeout")
                    }, g.timeout));
                    try {
                        p = !1,
                            c.send(a, n)
                    } catch (C) {
                        if (p) throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return we.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return we.get(e, void 0, t, "script")
            }
        }),
        we.each(["get", "post"], function(e, o) {
            we[o] = function(e, t, n, i) {
                return ve(t) && (i = i || n, n = t, t = void 0),
                    we.ajax(we.extend({
                        url: e,
                        type: o,
                        dataType: i,
                        data: t,
                        success: n
                    }, we.isPlainObject(e) && e))
            }
        }),
        we._evalUrl = function(e) {
            return we.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        },
        we.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (ve(e) && (e = e.call(this[0])), t = we(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function(n) {
                return ve(n) ? this.each(function(e) {
                    we(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = we(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = ve(t);
                return this.each(function(e) {
                    we(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                        we(this).replaceWith(this.childNodes)
                    }),
                    this
            }
        }),
        we.expr.pseudos.hidden = function(e) {
            return !we.expr.pseudos.visible(e)
        },
        we.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        we.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (C) {}
        };
    var Vt = {
            0: 200,
            1223: 204
        },
        Jt = we.ajaxSettings.xhr();
    ye.cors = !!Jt && "withCredentials" in Jt,
        ye.ajax = Jt = !!Jt,
        we.ajaxTransport(function(o) {
            var r, s;
            if (ye.cors || Jt && !o.crossDomain) return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields) i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                    r = function(e) {
                            return function() {
                                r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                    binary: i.response
                                } : {
                                    text: i.responseText
                                }, i.getAllResponseHeaders()))
                            }
                        },
                        i.onload = r(),
                        s = i.onerror = i.ontimeout = r("error"),
                        void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                            4 === i.readyState && C.setTimeout(function() {
                                r && s()
                            })
                        },
                        r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (C) {
                        if (r) throw C
                    }
                },
                abort: function() {
                    r && r()
                }
            }
        }),
        we.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        we.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return we.globalEval(e),
                        e
                }
            }
        }),
        we.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        we.ajaxTransport("script", function(n) {
            var i, o;
            if (n.crossDomain) return {
                send: function(e, t) {
                    i = we("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", o = function(e) {
                            i.remove(),
                                o = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                        }),
                        se.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
        });
    var Kt, Zt = [],
        en = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Zt.pop() || we.expando + "_" + zt++;
                return this[e] = !0,
                    e
            }
        }),
        we.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, o, r, s = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ve(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(en, "$1" + i) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return r || we.error(i + " was not called"),
                        r[0]
                },
                e.dataTypes[0] = "json",
                o = C[i],
                C[i] = function() {
                    r = arguments
                },
                n.always(function() {
                    void 0 === o ? we(C).removeProp(i) : C[i] = o,
                        e[i] && (e.jsonpCallback = t.jsonpCallback, Zt.push(i)),
                        r && ve(o) && o(r[0]),
                        r = o = void 0
                }),
                "script"
        }),
        ye.createHTMLDocument = ((Kt = se.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length),
        we.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ye.createHTMLDocument ? ((i = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(i)) : t = se), r = !n && [], (o = Ie.exec(e)) ? [t.createElement(o[1])] : (o = T([e], t, r), r && r.length && we(r).remove(), we.merge([], o.childNodes)));
            var i, o, r
        },
        we.fn.load = function(e, t, n) {
            var i, o, r, s = this,
                a = e.indexOf(" ");
            return -1 < a && (i = V(e.slice(a)), e = e.slice(0, a)),
                ve(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
                0 < s.length && we.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments,
                        s.html(i ? we("<div>").append(we.parseHTML(e)).find(i) : e)
                }).always(n &&
                    function(e, t) {
                        s.each(function() {
                            n.apply(this, r || [e.responseText, t, e])
                        })
                    }),
                this
        },
        we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            we.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        we.expr.pseudos.animated = function(t) {
            return we.grep(we.timers, function(e) {
                return t === e.elem
            }).length
        },
        we.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, s, a, u, l = we.css(e, "position"),
                    c = we(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    a = c.offset(),
                    r = we.css(e, "top"),
                    u = we.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && -1 < (r + u).indexOf("auto") ? (s = (i = c.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(u) || 0),
                    ve(t) && (t = t.call(e, n, we.extend({}, a))),
                    null != t.top && (f.top = t.top - a.top + s),
                    null != t.left && (f.left = t.left - a.left + o),
                    "using" in t ? t.using.call(e, f) : c.css(f)
            }
        },
        we.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    we.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === we.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === we.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = we(e).offset()).top += we.css(e, "borderTopWidth", !0), o.left += we.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - we.css(i, "marginTop", !0),
                        left: t.left - o.left - we.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === we.css(e, "position");) e = e.offsetParent;
                    return e || nt
                })
            }
        }),
        we.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var r = "pageYOffset" === o;
            we.fn[t] = function(e) {
                return qe(this, function(e, t, n) {
                    var i;
                    if (xe(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
                    i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        we.each(["top", "left"], function(e, n) {
            we.cssHooks[n] = O(ye.pixelPosition, function(e, t) {
                if (t) return t = q(e, n),
                    ct.test(t) ? we(e).position()[n] + "px" : t
            })
        }),
        we.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            we.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(i, r) {
                we.fn[r] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        o = i || (!0 === e || !0 === t ? "margin" : "border");
                    return qe(this, function(e, t, n) {
                        var i;
                        return xe(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? we.css(e, t, o) : we.style(e, t, n, o)
                    }, a, n ? e : void 0, n)
                }
            })
        }),
        we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            we.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        we.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        we.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        we.proxy = function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ve(e)) return i = ue.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, i.concat(ue.call(arguments)))
                }).guid = e.guid = e.guid || we.guid++,
                o
        },
        we.holdReady = function(e) {
            e ? we.readyWait++ : we.ready(!0)
        },
        we.isArray = Array.isArray,
        we.parseJSON = JSON.parse,
        we.nodeName = l,
        we.isFunction = ve,
        we.isWindow = xe,
        we.camelCase = h,
        we.type = g,
        we.now = Date.now,
        we.isNumeric = function(e) {
            var t = we.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return we
        });
    var tn = C.jQuery,
        nn = C.$;
    return we.noConflict = function(e) {
            return C.$ === we && (C.$ = nn),
                e && C.jQuery === we && (C.jQuery = tn),
                we
        },
        e || (C.jQuery = C.$ = we),
        we
}),


function(t, n) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e) {
        return n(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(t, require("jquery")) : t.jQueryBridget = n(t, t.jQuery)
}(window, function(e, i) {
    "use strict";

    function t(l, o, c) {
        function t(e, r, s) {
            var a, u = "$()." + l + '("' + r + '")';
            return e.each(function(e, t) {
                    var n = c.data(t, l);
                    if (n) {
                        var i = n[r];
                        if (i && "_" != r.charAt(0)) {
                            var o = i.apply(n, s);
                            a = void 0 === a ? o : a
                        } else f(u + " is not a valid method")
                    } else f(l + " not initialized. Cannot call methods, i.e. " + u)
                }),
                void 0 !== a ? a : e
        }

        function n(e, i) {
            e.each(function(e, t) {
                var n = c.data(t, l);
                n ? (n.option(i), n._init()) : (n = new o(t, i), c.data(t, l, n))
            })
        }(c = c || i || e.jQuery) && (o.prototype.option || (o.prototype.option = function(e) {
            c.isPlainObject(e) && (this.options = c.extend(!0, this.options, e))
        }), c.fn[l] = function(e) {
            return "string" != typeof e ? (n(this, e), this) : t(this, e, s.call(arguments, 1))
        }, r(c))
    }

    function r(e) {
        !e || e && e.bridget || (e.bridget = t)
    }
    var s = Array.prototype.slice,
        n = e.console,
        f = void 0 === n ?
        function() {} : function(e) {
            n.error(e)
        };
    return r(i || e.jQuery),
        t
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
            if (e && t) {
                var n = this._events = this._events || {},
                    i = n[e] = n[e] || [];
                return -1 == i.indexOf(t) && i.push(t),
                    this
            }
        },
        t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[e] = n[e] || {})[t] = !0,
                    this
            }
        },
        t.off = function(e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var i = n.indexOf(t);
                return -1 != i && n.splice(i, 1),
                    this
            }
        },
        t.emitEvent = function(e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                n = n.slice(0),
                    t = t || [];
                for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                    var r = n[o];
                    i && i[r] && (this.off(e, r), delete i[r]),
                        r.apply(this, t)
                }
                return this
            }
        },
        t.allOff = function() {
            delete this._events,
                delete this._onceEvents
        },
        e
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    "use strict";

    function y(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function e() {}

    function v() {
        for (var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, t = 0; t < C; t++) {
            e[T[t]] = 0
        }
        return e
    }

    function x(e) {
        var t = getComputedStyle(e);
        return t || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
            t
    }

    function b() {
        if (!o) {
            o = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
                e.style.padding = "1px 2px 3px 4px",
                e.style.borderStyle = "solid",
                e.style.borderWidth = "1px 2px 3px 4px",
                e.style.boxSizing = "border-box";
            var t = document.body || document.documentElement;
            t.appendChild(e);
            var n = x(e);
            w = 200 == Math.round(y(n.width)),
                i.isBoxSizeOuter = w,
                t.removeChild(e)
        }
    }

    function i(e) {
        if (b(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var t = x(e);
            if ("none" == t.display) return v();
            var n = {};
            n.width = e.offsetWidth,
                n.height = e.offsetHeight;
            for (var i = n.isBorderBox = "border-box" == t.boxSizing, o = 0; o < C; o++) {
                var r = T[o],
                    s = t[r],
                    a = parseFloat(s);
                n[r] = isNaN(a) ? 0 : a
            }
            var u = n.paddingLeft + n.paddingRight,
                l = n.paddingTop + n.paddingBottom,
                c = n.marginLeft + n.marginRight,
                f = n.marginTop + n.marginBottom,
                d = n.borderLeftWidth + n.borderRightWidth,
                h = n.borderTopWidth + n.borderBottomWidth,
                p = i && w,
                m = y(t.width);
            !1 !== m && (n.width = m + (p ? 0 : u + d));
            var g = y(t.height);
            return !1 !== g && (n.height = g + (p ? 0 : l + h)),
                n.innerWidth = n.width - (u + d),
                n.innerHeight = n.height - (l + h),
                n.outerWidth = n.width + c,
                n.outerHeight = n.height + f,
                n
        }
    }
    var w, n = "undefined" == typeof console ? e : function(e) {
            console.error(e)
        },
        T = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        C = T.length,
        o = !1;
    return i
}),


function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    "use strict";
    var n = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n] + "MatchesSelector";
            if (e[i]) return i
        }
    }();
    return function(e, t) {
        return e[n](t)
    }
}),


function(t, n) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(e) {
        return n(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(t, require("desandro-matches-selector")) : t.fizzyUIUtils = n(t, t.matchesSelector)
}(window, function(i, r) {
    var c = {
            extend: function(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        t = Array.prototype.slice;
    c.makeArray = function(e) {
            return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
        },
        c.removeFrom = function(e, t) {
            var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
        },
        c.getParent = function(e, t) {
            for (; e.parentNode && e != document.body;)
                if (e = e.parentNode, r(e, t)) return e
        },
        c.getQueryElement = function(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        },
        c.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        },
        c.filterFindElements = function(e, i) {
            e = c.makeArray(e);
            var o = [];
            return e.forEach(function(e) {
                    if (e instanceof HTMLElement) {
                        if (!i) return void o.push(e);
                        r(e, i) && o.push(e);
                        for (var t = e.querySelectorAll(i), n = 0; n < t.length; n++) o.push(t[n])
                    }
                }),
                o
        },
        c.debounceMethod = function(e, t, i) {
            i = i || 100;
            var o = e.prototype[t],
                r = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[r];
                clearTimeout(e);
                var t = arguments,
                    n = this;
                this[r] = setTimeout(function() {
                    o.apply(n, t),
                        delete n[r]
                }, i)
            }
        },
        c.docReady = function(e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
        },
        c.toDashed = function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, n) {
                return t + "-" + n
            }).toLowerCase()
        };
    var f = i.console;
    return c.htmlInit = function(u, l) {
            c.docReady(function() {
                var e = c.toDashed(l),
                    o = "data-" + e,
                    r = document.querySelectorAll("[" + o + "]"),
                    t = document.querySelectorAll(".js-" + e),
                    n = c.makeArray(r).concat(c.makeArray(t)),
                    s = o + "-options",
                    a = i.jQuery;
                n.forEach(function(e) {
                    var t, n = e.getAttribute(o) || e.getAttribute(s);
                    try {
                        t = n && JSON.parse(n)
                    } catch (r) {
                        return void(f && f.error("Error parsing " + o + " on " + e.className + ": " + r))
                    }
                    var i = new u(e, t);
                    a && a.data(e, l, i)
                })
            })
        },
        c
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
    "use strict";

    function i(e) {
        for (var t in e) return !1;
        return !null
    }

    function n(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(e) {
        return e.replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        l = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        c = n.prototype = Object.create(e.prototype);
    c.constructor = n,
        c._create = function() {
            this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                },
                this.css({
                    position: "absolute"
                })
        },
        c.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        },
        c.getSize = function() {
            this.size = t(this.element)
        },
        c.css = function(e) {
            var t = this.element.style;
            for (var n in e) {
                t[l[n] || n] = e[n]
            }
        },
        c.getPosition = function() {
            var e = getComputedStyle(this.element),
                t = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = e[t ? "left" : "right"],
                o = e[n ? "top" : "bottom"],
                r = parseFloat(i),
                s = parseFloat(o),
                a = this.layout.size; - 1 != i.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height),
                r = isNaN(r) ? 0 : r,
                s = isNaN(s) ? 0 : s,
                r -= t ? a.paddingLeft : a.paddingRight,
                s -= n ? a.paddingTop : a.paddingBottom,
                this.position.x = r,
                this.position.y = s
        },
        c.layoutPosition = function() {
            var e = this.layout.size,
                t = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = n ? "paddingLeft" : "paddingRight",
                r = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + e[o];
            t[r] = this.getXValue(a),
                t[s] = "";
            var u = i ? "paddingTop" : "paddingBottom",
                l = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                f = this.position.y + e[u];
            t[l] = this.getYValue(f),
                t[c] = "",
                this.css(t),
                this.emitEvent("layout", [this])
        },
        c.getXValue = function(e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
        },
        c.getYValue = function(e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
        },
        c._transitionTo = function(e, t) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                o = e == this.position.x && t == this.position.y;
            if (this.setPosition(e, t), !o || this.isTransitioning) {
                var r = e - n,
                    s = t - i,
                    a = {};
                a.transform = this.getTranslate(r, s),
                    this.transition({
                        to: a,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
            } else this.layoutPosition()
        },
        c.getTranslate = function(e, t) {
            return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
        },
        c.goTo = function(e, t) {
            this.setPosition(e, t),
                this.layoutPosition()
        },
        c.moveTo = c._transitionTo,
        c.setPosition = function(e, t) {
            this.position.x = parseFloat(e),
                this.position.y = parseFloat(t)
        },
        c._nonTransition = function(e) {
            for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
        },
        c.transition = function(e) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var t = this._transn;
                for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
                for (n in e.to) t.ingProperties[n] = !0,
                    e.isCleaning && (t.clean[n] = !0);
                if (e.from) {
                    this.css(e.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(e.to),
                    this.css(e.to),
                    this.isTransitioning = !0
            } else this._nonTransition(e)
        };
    var f = "opacity," + o(a);
    c.enableTransition = function() {
            if (!this.isTransitioning) {
                var e = this.layout.options.transitionDuration;
                e = "number" == typeof e ? e + "ms" : e,
                    this.css({
                        transitionProperty: f,
                        transitionDuration: e,
                        transitionDelay: this.staggerDelay || 0
                    }),
                    this.element.addEventListener(u, this, !1)
            }
        },
        c.onwebkitTransitionEnd = function(e) {
            this.ontransitionend(e)
        },
        c.onotransitionend = function(e) {
            this.ontransitionend(e)
        };
    var d = {
        "-webkit-transform": "transform"
    };
    c.ontransitionend = function(e) {
            if (e.target === this.element) {
                var t = this._transn,
                    n = d[e.propertyName] || e.propertyName;
                if (delete t.ingProperties[n], i(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) t.onEnd[n].call(this),
                    delete t.onEnd[n];
                this.emitEvent("transitionEnd", [this])
            }
        },
        c.disableTransition = function() {
            this.removeTransitionStyles(),
                this.element.removeEventListener(u, this, !1),
                this.isTransitioning = !1
        },
        c._removeStyles = function(e) {
            var t = {};
            for (var n in e) t[n] = "";
            this.css(t)
        };
    var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return c.removeTransitionStyles = function() {
            this.css(h)
        },
        c.stagger = function(e) {
            e = isNaN(e) ? 0 : e,
                this.staggerDelay = e + "ms"
        },
        c.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
                this.css({
                    display: ""
                }),
                this.emitEvent("remove", [this])
        },
        c.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        },
        c.reveal = function() {
            delete this.isHidden,
                this.css({
                    display: ""
                });
            var e = this.layout.options,
                t = {};
            t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
                this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: t
                })
        },
        c.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        },
        c.getHideRevealTransitionEndProperty = function(e) {
            var t = this.layout.options[e];
            if (t.opacity) return "opacity";
            for (var n in t) return n
        },
        c.hide = function() {
            this.isHidden = !0,
                this.css({
                    display: ""
                });
            var e = this.layout.options,
                t = {};
            t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
                this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: t
                })
        },
        c.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        },
        c.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        },
        n
}),


function(o, r) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(e, t, n, i) {
        return r(o, e, t, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
}(window, function(e, t, o, r, i) {
    "use strict";

    function s(e, t) {
        var n = r.getQueryElement(e);
        if (n) {
            this.element = n,
                l && (this.$element = l(this.element)),
                this.options = r.extend({}, this.constructor.defaults),
                this.option(t);
            var i = ++f;
            this.element.outlayerGUID = i,
                (d[i] = this)._create(),
                this._getOption("initLayout") && this.layout()
        } else u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
    }

    function a(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t
    }

    function n(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/(^\d*\.?\d*)(\w*)/),
            n = t && t[1],
            i = t && t[2];
        return n.length ? (n = parseFloat(n)) * (p[i] || 1) : 0
    }
    var u = e.console,
        l = e.jQuery,
        c = function() {},
        f = 0,
        d = {};
    s.namespace = "outlayer",
        s.Item = i,
        s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
    var h = s.prototype;
    r.extend(h, t.prototype),
        h.option = function(e) {
            r.extend(this.options, e)
        },
        h._getOption = function(e) {
            var t = this.constructor.compatOptions[e];
            return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
        },
        s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        },
        h._create = function() {
            this.reloadItems(),
                this.stamps = [],
                this.stamp(this.options.stamp),
                r.extend(this.element.style, this.options.containerStyle),
                this._getOption("resize") && this.bindResize()
        },
        h.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        },
        h._itemize = function(e) {
            for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0; o < t.length; o++) {
                var r = new n(t[o], this);
                i.push(r)
            }
            return i
        },
        h._filterFindItemElements = function(e) {
            return r.filterFindElements(e, this.options.itemSelector)
        },
        h.getItemElements = function() {
            return this.items.map(function(e) {
                return e.element
            })
        },
        h.layout = function() {
            this._resetLayout(),
                this._manageStamps();
            var e = this._getOption("layoutInstant"),
                t = void 0 !== e ? e : !this._isLayoutInited;
            this.layoutItems(this.items, t),
                this._isLayoutInited = !0
        },
        h._init = h.layout,
        h._resetLayout = function() {
            this.getSize()
        },
        h.getSize = function() {
            this.size = o(this.element)
        },
        h._getMeasurement = function(e, t) {
            var n, i = this.options[e];
            i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), this[e] = n ? o(n)[t] : i) : this[e] = 0
        },
        h.layoutItems = function(e, t) {
            e = this._getItemsForLayout(e),
                this._layoutItems(e, t),
                this._postLayout()
        },
        h._getItemsForLayout = function(e) {
            return e.filter(function(e) {
                return !e.isIgnored
            })
        },
        h._layoutItems = function(e, n) {
            if (this._emitCompleteOnItems("layout", e), e && e.length) {
                var i = [];
                e.forEach(function(e) {
                        var t = this._getItemLayoutPosition(e);
                        t.item = e,
                            t.isInstant = n || e.isLayoutInstant,
                            i.push(t)
                    }, this),
                    this._processLayoutQueue(i)
            }
        },
        h._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        },
        h._processLayoutQueue = function(e) {
            this.updateStagger(),
                e.forEach(function(e, t) {
                    this._positionItem(e.item, e.x, e.y, e.isInstant, t)
                }, this)
        },
        h.updateStagger = function() {
            var e = this.options.stagger;
            return null == e ? void(this.stagger = 0) : (this.stagger = n(e), this.stagger)
        },
        h._positionItem = function(e, t, n, i, o) {
            i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n))
        },
        h._postLayout = function() {
            this.resizeContainer()
        },
        h.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        },
        h._getContainerSize = c,
        h._setContainerMeasure = function(e, t) {
            if (void 0 !== e) {
                var n = this.size;
                n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth),
                    e = Math.max(e, 0),
                    this.element.style[t ? "width" : "height"] = e + "px"
            }
        },
        h._emitCompleteOnItems = function(t, e) {
            function n() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                ++s == r && n()
            }
            var o = this,
                r = e.length;
            if (e && r) {
                var s = 0;
                e.forEach(function(e) {
                    e.once(t, i)
                })
            } else n()
        },
        h.dispatchEvent = function(e, t, n) {
            var i = t ? [t].concat(n) : n;
            if (this.emitEvent(e, i), l)
                if (this.$element = this.$element || l(this.element), t) {
                    var o = l.Event(t);
                    o.type = e,
                        this.$element.trigger(o, n)
                } else this.$element.trigger(e, n)
        },
        h.ignore = function(e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        },
        h.unignore = function(e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        },
        h.stamp = function(e) {
            (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
        },
        h.unstamp = function(e) {
            (e = this._find(e)) && e.forEach(function(e) {
                r.removeFrom(this.stamps, e),
                    this.unignore(e)
            }, this)
        },
        h._find = function(e) {
            if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)),
                r.makeArray(e)
        },
        h._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        },
        h._getBoundingRect = function() {
            var e = this.element.getBoundingClientRect(),
                t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        },
        h._manageStamp = c,
        h._getElementOffset = function(e) {
            var t = e.getBoundingClientRect(),
                n = this._boundingRect,
                i = o(e);
            return {
                left: t.left - n.left - i.marginLeft,
                top: t.top - n.top - i.marginTop,
                right: n.right - t.right - i.marginRight,
                bottom: n.bottom - t.bottom - i.marginBottom
            }
        },
        h.handleEvent = r.handleEvent,
        h.bindResize = function() {
            e.addEventListener("resize", this),
                this.isResizeBound = !0
        },
        h.unbindResize = function() {
            e.removeEventListener("resize", this),
                this.isResizeBound = !1
        },
        h.onresize = function() {
            this.resize()
        },
        r.debounceMethod(s, "onresize", 100),
        h.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        },
        h.needsResizeLayout = function() {
            var e = o(this.element);
            return this.size && e && e.innerWidth !== this.size.innerWidth
        },
        h.addItems = function(e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)),
                t
        },
        h.appended = function(e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        },
        h.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                var n = this.items.slice(0);
                this.items = t.concat(n),
                    this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(t, !0),
                    this.reveal(t),
                    this.layoutItems(n)
            }
        },
        h.reveal = function(e) {
            if (this._emitCompleteOnItems("reveal", e), e && e.length) {
                var n = this.updateStagger();
                e.forEach(function(e, t) {
                    e.stagger(t * n),
                        e.reveal()
                })
            }
        },
        h.hide = function(e) {
            if (this._emitCompleteOnItems("hide", e), e && e.length) {
                var n = this.updateStagger();
                e.forEach(function(e, t) {
                    e.stagger(t * n),
                        e.hide()
                })
            }
        },
        h.revealItemElements = function(e) {
            var t = this.getItems(e);
            this.reveal(t)
        },
        h.hideItemElements = function(e) {
            var t = this.getItems(e);
            this.hide(t)
        },
        h.getItem = function(e) {
            for (var t = 0; t < this.items.length; t++) {
                var n = this.items[t];
                if (n.element == e) return n
            }
        },
        h.getItems = function(e) {
            e = r.makeArray(e);
            var n = [];
            return e.forEach(function(e) {
                    var t = this.getItem(e);
                    t && n.push(t)
                }, this),
                n
        },
        h.remove = function(e) {
            var t = this.getItems(e);
            this._emitCompleteOnItems("remove", t),
                t && t.length && t.forEach(function(e) {
                    e.remove(),
                        r.removeFrom(this.items, e)
                }, this)
        },
        h.destroy = function() {
            var e = this.element.style;
            e.height = "",
                e.position = "",
                e.width = "",
                this.items.forEach(function(e) {
                    e.destroy()
                }),
                this.unbindResize();
            var t = this.element.outlayerGUID;
            delete d[t],
                delete this.element.outlayerGUID,
                l && l.removeData(this.element, this.constructor.namespace)
        },
        s.data = function(e) {
            var t = (e = r.getQueryElement(e)) && e.outlayerGUID;
            return t && d[t]
        },
        s.create = function(e, t) {
            var n = a(s);
            return n.defaults = r.extend({}, s.defaults),
                r.extend(n.defaults, t),
                n.compatOptions = r.extend({}, s.compatOptions),
                n.namespace = e,
                n.data = s.data,
                n.Item = a(i),
                r.htmlInit(n, e),
                l && l.bridget && l.bridget(e, n),
                n
        };
    var p = {
        ms: 1,
        s: 1e3
    };
    return s.Item = i,
        s
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function(e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }
    var n = t.prototype = Object.create(e.Item.prototype),
        i = n._create;
    n._create = function() {
            this.id = this.layout.itemGUID++,
                i.call(this),
                this.sortData = {}
        },
        n.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id,
                    this.sortData["original-order"] = this.id,
                    this.sortData.random = Math.random();
                var e = this.layout.options.getSortData,
                    t = this.layout._sorters;
                for (var n in e) {
                    var i = t[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
    var o = n.destroy;
    return n.destroy = function() {
            o.apply(this, arguments),
                this.css({
                    display: ""
                })
        },
        t
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function(t, n) {
    "use strict";

    function i(e) {
        (this.isotope = e) && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var o = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
            o[e] = function() {
                return n.prototype[e].apply(this.isotope, arguments)
            }
        }),
        o.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        },
        o._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        },
        o.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        },
        o.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        },
        o.getSegmentSize = function(e, t) {
            var n = e + t,
                i = "outer" + t;
            if (this._getMeasurement(n, i), !this[n]) {
                var o = this.getFirstItemSize();
                this[n] = o && o[i] || this.isotope.size["inner" + t]
            }
        },
        o.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        },
        o.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        },
        o.getSize = function() {
            this.isotope.getSize(),
                this.size = this.isotope.size
        },
        i.modes = {},
        i.create = function(e, t) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = Object.create(o),
                n.prototype.constructor = n,
                t && (n.options = t),
                n.prototype.namespace = e,
                i.modes[e] = n
        },
        i
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, l) {
    var t = e.create("masonry");
    t.compatOptions.fitWidth = "isFitWidth";
    var n = t.prototype;
    return n._resetLayout = function() {
            this.getSize(),
                this._getMeasurement("columnWidth", "outerWidth"),
                this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns(),
                this.colYs = [];
            for (var e = 0; e < this.cols; e++) this.colYs.push(0);
            this.maxY = 0,
                this.horizontalColIndex = 0
        },
        n.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var e = this.items[0],
                    t = e && e.element;
                this.columnWidth = t && l(t).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                i = this.containerWidth + this.gutter,
                o = i / n,
                r = n - i % n;
            o = Math[r && r < 1 ? "round" : "floor"](o),
                this.cols = Math.max(o, 1)
        },
        n.getContainerWidth = function() {
            var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                t = l(e);
            this.containerWidth = t && t.innerWidth
        },
        n._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth,
                n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), o = {
                    x: this.columnWidth * i.col,
                    y: i.y
                }, r = i.y + e.size.outerHeight, s = n + i.col, a = i.col; a < s; a++) this.colYs[a] = r;
            return o
        },
        n._getTopColPosition = function(e) {
            var t = this._getTopColGroup(e),
                n = Math.min.apply(Math, t);
            return {
                col: t.indexOf(n),
                y: n
            }
        },
        n._getTopColGroup = function(e) {
            if (e < 2) return this.colYs;
            for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) t[i] = this._getColGroupY(i, e);
            return t
        },
        n._getColGroupY = function(e, t) {
            if (t < 2) return this.colYs[e];
            var n = this.colYs.slice(e, e + t);
            return Math.max.apply(Math, n)
        },
        n._getHorizontalColPosition = function(e, t) {
            var n = this.horizontalColIndex % this.cols;
            n = 1 < e && n + e > this.cols ? 0 : n;
            var i = t.size.outerWidth && t.size.outerHeight;
            return this.horizontalColIndex = i ? n + e : this.horizontalColIndex, {
                col: n,
                y: this._getColGroupY(n, e)
            }
        },
        n._manageStamp = function(e) {
            var t = l(e),
                n = this._getElementOffset(e),
                i = this._getOption("originLeft") ? n.left : n.right,
                o = i + t.outerWidth,
                r = Math.floor(i / this.columnWidth);
            r = Math.max(0, r);
            var s = Math.floor(o / this.columnWidth);
            s -= o % this.columnWidth ? 0 : 1,
                s = Math.min(this.cols - 1, s);
            for (var a = (this._getOption("originTop") ? n.top : n.bottom) + t.outerHeight, u = r; u <= s; u++) this.colYs[u] = Math.max(a, this.colYs[u])
        },
        n._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()),
                e
        },
        n._getContainerFitWidth = function() {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
            return (this.cols - e) * this.columnWidth - this.gutter
        },
        n.needsResizeLayout = function() {
            var e = this.containerWidth;
            return this.getContainerWidth(),
                e != this.containerWidth
        },
        t
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, t) {
    "use strict";
    var n = e.create("masonry"),
        i = n.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in t.prototype) o[r] || (i[r] = t.prototype[r]);
    var s = i.measureColumns;
    i.measureColumns = function() {
        this.items = this.isotope.filteredItems,
            s.call(this)
    };
    var a = i._getOption;
    return i._getOption = function(e) {
            return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        },
        n
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var t = e.create("fitRows"),
        n = t.prototype;
    return n._resetLayout = function() {
            this.x = 0,
                this.y = 0,
                this.maxY = 0,
                this._getMeasurement("gutter", "outerWidth")
        },
        n._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth + this.gutter,
                n = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && t + this.x > n && (this.x = 0, this.y = this.maxY);
            var i = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight),
                this.x += t,
                i
        },
        n._getContainerSize = function() {
            return {
                height: this.maxY
            }
        },
        t
}),


function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var t = e.create("vertical", {
            horizontalAlignment: 0
        }),
        n = t.prototype;
    return n._resetLayout = function() {
            this.y = 0
        },
        n._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
                n = this.y;
            return this.y += e.size.outerHeight, {
                x: t,
                y: n
            }
        },
        n._getContainerSize = function() {
            return {
                height: this.y
            }
        },
        t
}),


function(s, a) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(e, t, n, i, o, r) {
        return a(s, e, t, n, i, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = a(s, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : s.Isotope = a(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode)
}(window, function(e, n, t, i, r, o, s) {
    function a(s, a) {
        return function(e, t) {
            for (var n = 0; n < s.length; n++) {
                var i = s[n],
                    o = e.sortData[i],
                    r = t.sortData[i];
                if (r < o || o < r) return (r < o ? 1 : -1) * ((void 0 !== a[i] ? a[i] : a) ? 1 : -1)
            }
            return 0
        }
    }
    var u = e.jQuery,
        l = String.prototype.trim ?
        function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        c = n.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    c.Item = o,
        c.LayoutMode = s;
    var f = c.prototype;
    f._create = function() {
            for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), n.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(e)
        },
        f.reloadItems = function() {
            this.itemGUID = 0,
                n.prototype.reloadItems.call(this)
        },
        f._itemize = function() {
            for (var e = n.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++) {
                e[t].id = this.itemGUID++
            }
            return this._updateItemsSortData(e),
                e
        },
        f._initLayoutMode = function(e) {
            var t = s.modes[e],
                n = this.options[e] || {};
            this.options[e] = t.options ? r.extend(t.options, n) : n,
                this.modes[e] = new t(this)
        },
        f.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        },
        f._layout = function() {
            var e = this._getIsInstant();
            this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(this.filteredItems, e),
                this._isLayoutInited = !0
        },
        f.arrange = function(e) {
            this.option(e),
                this._getIsInstant();
            var t = this._filter(this.items);
            this.filteredItems = t.matches,
                this._bindArrangeComplete(),
                this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t),
                this._sort(),
                this._layout()
        },
        f._init = f.arrange,
        f._hideReveal = function(e) {
            this.reveal(e.needReveal),
                this.hide(e.needHide)
        },
        f._getIsInstant = function() {
            var e = this._getOption("layoutInstant"),
                t = void 0 !== e ? e : !this._isLayoutInited;
            return this._isInstant = t
        },
        f._bindArrangeComplete = function() {
            function e() {
                t && n && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var t, n, i, o = this;
            this.once("layoutComplete", function() {
                    t = !0,
                        e()
                }),
                this.once("hideComplete", function() {
                    n = !0,
                        e()
                }),
                this.once("revealComplete", function() {
                    i = !0,
                        e()
                })
        },
        f._filter = function(e) {
            var t = this.options.filter;
            t = t || "*";
            for (var n = [], i = [], o = [], r = this._getFilterTest(t), s = 0; s < e.length; s++) {
                var a = e[s];
                if (!a.isIgnored) {
                    var u = r(a);
                    u && n.push(a),
                        u && a.isHidden ? i.push(a) : u || a.isHidden || o.push(a)
                }
            }
            return {
                matches: n,
                needReveal: i,
                needHide: o
            }
        },
        f._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ?
                function(e) {
                    return u(e.element).is(t)
                } : "function" == typeof t ?
                function(e) {
                    return t(e.element)
                } : function(e) {
                    return i(e.element, t)
                }
        },
        f.updateSortData = function(e) {
            var t;
            e ? (e = r.makeArray(e), t = this.getItems(e)) : t = this.items,
                this._getSorters(),
                this._updateItemsSortData(t)
        },
        f._getSorters = function() {
            var e = this.options.getSortData;
            for (var t in e) {
                var n = e[t];
                this._sorters[t] = d(n)
            }
        },
        f._updateItemsSortData = function(e) {
            for (var t = e && e.length, n = 0; t && n < t; n++) {
                e[n].updateSortData()
            }
        };
    var d = function() {
        function e(e) {
            if ("string" != typeof e) return e;
            var t = l(e).split(" "),
                n = t[0],
                i = n.match(/^\[(.+)\]$/),
                o = s(i && i[1], n),
                r = c.sortDataParsers[t[1]];
            return r ?
                function(e) {
                    return e && r(o(e))
                } : function(e) {
                    return e && o(e)
                }
        }

        function s(t, n) {
            return t ?
                function(e) {
                    return e.getAttribute(t)
                } : function(e) {
                    var t = e.querySelector(n);
                    return t && t.textContent
                }
        }
        return e
    }();
    c.sortDataParsers = {
            parseInt: function(e) {
                return parseInt(e, 10)
            },
            parseFloat: function(e) {
                return parseFloat(e)
            }
        },
        f._sort = function() {
            if (this.options.sortBy) {
                var e = r.makeArray(this.options.sortBy);
                this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
                var t = a(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(t)
            }
        },
        f._getIsSameSortBy = function(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] != this.sortHistory[t]) return !1;
            return !0
        },
        f._mode = function() {
            var e = this.options.layoutMode,
                t = this.modes[e];
            if (!t) throw new Error("No layout mode: " + e);
            return t.options = this.options[e],
                t
        },
        f._resetLayout = function() {
            n.prototype._resetLayout.call(this),
                this._mode()._resetLayout()
        },
        f._getItemLayoutPosition = function(e) {
            return this._mode()._getItemLayoutPosition(e)
        },
        f._manageStamp = function(e) {
            this._mode()._manageStamp(e)
        },
        f._getContainerSize = function() {
            return this._mode()._getContainerSize()
        },
        f.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        },
        f.appended = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var n = this._filterRevealAdded(t);
                this.filteredItems = this.filteredItems.concat(n)
            }
        },
        f.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                this._resetLayout(),
                    this._manageStamps();
                var n = this._filterRevealAdded(t);
                this.layoutItems(this.filteredItems),
                    this.filteredItems = n.concat(this.filteredItems),
                    this.items = t.concat(this.items)
            }
        },
        f._filterRevealAdded = function(e) {
            var t = this._filter(e);
            return this.hide(t.needHide),
                this.reveal(t.matches),
                this.layoutItems(t.matches, !0),
                t.matches
        },
        f.insert = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var n, i, o = t.length;
                for (n = 0; n < o; n++) i = t[n],
                    this.element.appendChild(i.element);
                var r = this._filter(t).matches;
                for (n = 0; n < o; n++) t[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < o; n++) delete t[n].isLayoutInstant;
                this.reveal(r)
            }
        };
    var h = f.remove;
    return f.remove = function(e) {
            e = r.makeArray(e);
            var t = this.getItems(e);
            h.call(this, e);
            for (var n = t && t.length, i = 0; n && i < n; i++) {
                var o = t[i];
                r.removeFrom(this.filteredItems, o)
            }
        },
        f.shuffle = function() {
            for (var e = 0; e < this.items.length; e++) {
                this.items[e].sortData.random = Math.random()
            }
            this.options.sortBy = "random",
                this._sort(),
                this._layout()
        },
        f._noTransition = function(e, t) {
            var n = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = e.apply(this, t);
            return this.options.transitionDuration = n,
                i
        },
        f.getFilteredItemElements = function() {
            return this.filteredItems.map(function(e) {
                return e.element
            })
        },
        c
}),

$(document).ready(function() {
    function e() {
        100 < window.pageYOffset ? ($("header.header__private").addClass("is__hidden"), $(".header__private .header__menu").slideUp(100)) : ($("header.header__private").removeClass("is__hidden"), $(".header__private .header__menu").slideDown(100))
    }
    $(".header__tel-btn").click(function(e) {
            e.preventDefault(),
                $(".header__private .header__contact").slideToggle()
        }),
        $(window).on("scroll", function() {
            e()
        }),
        $(".header__private .header__top-arr").click(function() {
            $("header.header__private").removeClass("is__hidden"),
                $(".header__private .header__menu").slideDown(100)
        }),
        $(window).width() < 980 && $(".footer__menu-top").click(function() {
            $(this).next("ul").slideToggle(100)
        });
    var t = location.hash;
    1 < t.length && $("html, body").animate({
            scrollTop: $(t).position().top - 100
        }, 500),
        $(".header__private .header__anchor-links a").click(function() {
            var e = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(e).position().top - 100
            }, 500)
        })
});

const slider = document.querySelector('.header__menu-small');
const slider_big = document.querySelector('.header__menu-big')
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

slider_big.addEventListener('mousedown', (e) => {
    isDown = true;
    slider_big.classList.add('active');
    startX = e.pageX - slider_big.offsetLeft;
    scrollLeft = slider_big.scrollLeft;
});
slider_big.addEventListener('mouseleave', () => {
    isDown = false;
    slider_big.classList.remove('active');
});
slider_big.addEventListener('mouseup', () => {
    isDown = false;
    slider_big.classList.remove('active');
});
slider_big.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider_big.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider_big.scrollLeft = scrollLeft - walk;
});

// let isDown = false;
// let startX;
// let scrollLeft;
// let c = document.querySelector('.header__menu-overflow');

// function addEvent(element, eventType, handler) {
//     if (element.addEventListener)
//         element.addEventListener(eventType, handler);
//     else
//         element.attachEvent(eventType, handler);
// }
// addEvent(c, 'mouseup', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         isDown = false;
//         e.target.classList.remove('active');
//     }
// });

// addEvent(c, 'mouseleave', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         isDown = false;
//         e.target.classList.remove('active');
//     }
// });
// addEvent(c, 'mousemove', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - e.target.offsetLeft;
//         const walk = (x - startX) * 3; //scroll-fast
//         e.target.scrollLeft = scrollLeft - walk;
//     }
// });
// addEvent(c, 'mousedown', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         isDown = true;
//         e.target.classList.add('active');
//         startX = e.pageX - e.target.offsetLeft;
//         scrollLeft = e.target.scrollLeft;
//     }
// });