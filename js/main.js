(function() {
    'use strict';
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {
        var skillsPython = ['Python', 'Django', 'Flask', 'FastAPI', 'PyQt', 'Tkinter', 'NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'MySQL', 'PostgreSQL', 'SQLite', 'RESTful APIs', 'Web scraping'],
            skillsHacking = ['Penetration Testing','jasdj', 'Network Scanning', 'Vulnerability Assessment', 'Exploit Development', 'Metasploit', 'Wireshark', 'Burp Suite', 'Nmap', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'OWASP Top Ten', 'Web Application Security', 'Reverse Engineering', 'Malware Analysis', 'Digital Forensics', 'Cryptography', 'Kali Linux', 'Python Scripting for Hacking', 'Ethical Hacking Methodologies', 'Security Assessments'],
            skillsOthers = ['Linux', 'HTML5', 'CSS3', 'git', 'Heroku'],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsPython, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsHacking, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOthers, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();

if (
    (!(function (a, b) {
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = a.document
                  ? b(a, !0)
                  : function (a) {
                        if (!a.document) throw new Error("jQuery requires a window with a document");
                        return b(a);
                    })
            : b(a);
    })("undefined" != typeof window ? window : this, function (a, b) {
        function c(a) {
            var b = !!a && "length" in a && a.length,
                c = fa.type(a);
            return "function" === c || fa.isWindow(a) ? !1 : "array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a);
        }
        function d(a, b, c) {
            if (fa.isFunction(b))
                return fa.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c;
                });
            if (b.nodeType)
                return fa.grep(a, function (a) {
                    return (a === b) !== c;
                });
            if ("string" == typeof b) {
                if (pa.test(b)) return fa.filter(b, a, c);
                b = fa.filter(b, a);
            }
            return fa.grep(a, function (a) {
                return _.call(b, a) > -1 !== c;
            });
        }
        function e(a, b) {
            for (; (a = a[b]) && 1 !== a.nodeType; );
            return a;
        }
        function f(a) {
            var b = {};
            return (
                fa.each(a.match(va) || [], function (a, c) {
                    b[c] = !0;
                }),
                b
            );
        }
        function g() {
            X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready();
        }
        function h() {
            this.expando = fa.expando + h.uid++;
        }
        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (((d = "data-" + b.replace(Ca, "-$&").toLowerCase()), (c = a.getAttribute(d)), "string" == typeof c)) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c;
                    } catch (e) {}
                    Aa.set(a, b, c);
                } else c = void 0;
            return c;
        }
        function j(a, b, c, d) {
            var e,
                f = 1,
                g = 20,
                h = d
                    ? function () {
                          return d.cur();
                      }
                    : function () {
                          return fa.css(a, b, "");
                      },
                i = h(),
                j = (c && c[3]) || (fa.cssNumber[b] ? "" : "px"),
                k = (fa.cssNumber[b] || ("px" !== j && +i)) && Ea.exec(fa.css(a, b));
            if (k && k[3] !== j) {
                (j = j || k[3]), (c = c || []), (k = +i || 1);
                do (f = f || ".5"), (k /= f), fa.style(a, b, k + j);
                while (f !== (f = h() / i) && 1 !== f && --g);
            }
            return c && ((k = +k || +i || 0), (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]), d && ((d.unit = j), (d.start = k), (d.end = e))), e;
        }
        function k(a, b) {
            var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || (b && fa.nodeName(a, b)) ? fa.merge([a], c) : c;
        }
        function l(a, b) {
            for (var c = 0, d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"));
        }
        function m(a, b, c, d, e) {
            for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)
                if (((f = a[p]), f || 0 === f))
                    if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
                    else if (La.test(f)) {
                        for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--; ) g = g.lastChild;
                        fa.merge(o, g.childNodes), (g = n.firstChild), (g.textContent = "");
                    } else o.push(b.createTextNode(f));
            for (n.textContent = "", p = 0; (f = o[p++]); )
                if (d && fa.inArray(f, d) > -1) e && e.push(f);
                else if (((j = fa.contains(f.ownerDocument, f)), (g = k(n.appendChild(f), "script")), j && l(g), c)) for (m = 0; (f = g[m++]); ) Ja.test(f.type || "") && c.push(f);
            return n;
        }
        function n() {
            return !0;
        }
        function o() {
            return !1;
        }
        function p() {
            try {
                return X.activeElement;
            } catch (a) {}
        }
        function q(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && ((d = d || c), (c = void 0));
                for (h in b) q(a, h, c, d, b[h], f);
                return a;
            }
            if ((null == d && null == e ? ((e = c), (d = c = void 0)) : null == e && ("string" == typeof c ? ((e = d), (d = void 0)) : ((e = d), (d = c), (c = void 0))), e === !1)) e = o;
            else if (!e) return this;
            return (
                1 === f &&
                    ((g = e),
                    (e = function (a) {
                        return fa().off(a), g.apply(this, arguments);
                    }),
                    (e.guid = g.guid || (g.guid = fa.guid++))),
                a.each(function () {
                    fa.event.add(this, b, e, d, c);
                })
            );
        }
        function r(a, b) {
            return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
        }
        function s(a) {
            return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
        }
        function t(a) {
            var b = Sa.exec(a.type);
            return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
        }
        function u(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (za.hasData(a) && ((f = za.access(a)), (g = za.set(b, f)), (j = f.events))) {
                    delete g.handle, (g.events = {});
                    for (e in j) for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c]);
                }
                Aa.hasData(a) && ((h = Aa.access(a)), (i = fa.extend({}, h)), Aa.set(b, i));
            }
        }
        function v(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && Ha.test(a.type) ? (b.checked = a.checked) : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
        function w(a, b, c, d) {
            b = Z.apply([], b);
            var e,
                f,
                g,
                h,
                i,
                j,
                l = 0,
                n = a.length,
                o = n - 1,
                p = b[0],
                q = fa.isFunction(p);
            if (q || (n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)))
                return a.each(function (e) {
                    var f = a.eq(e);
                    q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d);
                });
            if (n && ((e = m(b, a[0].ownerDocument, !1, a, d)), (f = e.firstChild), 1 === e.childNodes.length && (e = f), f || d)) {
                for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) (i = e), l !== o && ((i = fa.clone(i, !0, !0)), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
                if (h)
                    for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++)
                        (i = g[l]), Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")));
            }
            return a;
        }
        function x(a, b, c) {
            for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
            return a;
        }
        function y(a, b) {
            var c = fa(b.createElement(a)).appendTo(b.body),
                d = fa.css(c[0], "display");
            return c.detach(), d;
        }
        function z(a) {
            var b = X,
                c = Va[a];
            return (
                c ||
                    ((c = y(a, b)),
                    ("none" !== c && c) || ((Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement)), (b = Ua[0].contentDocument), b.write(), b.close(), (c = y(a, b)), Ua.detach()),
                    (Va[a] = c)),
                c
            );
        }
        function A(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.style;
            return (
                (c = c || Ya(a)),
                c &&
                    ((g = c.getPropertyValue(b) || c[b]),
                    "" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)),
                    !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f))),
                void 0 !== g ? g + "" : g
            );
        }
        function B(a, b) {
            return {
                get: function () {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments);
                },
            };
        }
        function C(a) {
            if (a in db) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--; ) if (((a = cb[c] + b), a in db)) return a;
        }
        function D(a, b, c) {
            var d = Ea.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
        }
        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)),
                    d
                        ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e)))
                        : ((g += fa.css(a, "padding" + Fa[f], !0, e)), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
            return g;
        }
        function F(b, c, d) {
            var e = !0,
                f = "width" === c ? b.offsetWidth : b.offsetHeight,
                g = Ya(b),
                h = "border-box" === fa.css(b, "boxSizing", !1, g);
            if ((X.msFullscreenElement && a.top !== a && b.getClientRects().length && (f = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= f || null == f)) {
                if (((f = A(b, c, g)), (0 > f || null == f) && (f = b.style[c]), Xa.test(f))) return f;
                (e = h && (da.boxSizingReliable() || f === b.style[c])), (f = parseFloat(f) || 0);
            }
            return f + E(b, c, d || (h ? "border" : "content"), e, g) + "px";
        }
        function G(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                (d = a[g]),
                    d.style &&
                        ((f[g] = za.get(d, "olddisplay")),
                        (c = d.style.display),
                        b
                            ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName))))
                            : ((e = Ga(d)), ("none" === c && e) || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
            for (g = 0; h > g; g++) (d = a[g]), d.style && ((b && "none" !== d.style.display && "" !== d.style.display) || (d.style.display = b ? f[g] || "" : "none"));
            return a;
        }
        function H(a, b, c, d, e) {
            return new H.prototype.init(a, b, c, d, e);
        }
        function I() {
            return (
                a.setTimeout(function () {
                    eb = void 0;
                }),
                (eb = fa.now())
            );
        }
        function J(a, b) {
            var c,
                d = 0,
                e = { height: a };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) (c = Fa[d]), (e["margin" + c] = e["padding" + c] = a);
            return b && (e.opacity = e.width = a), e;
        }
        function K(a, b, c) {
            for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++) if ((d = e[f].call(c, b, a))) return d;
        }
        function L(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = this,
                m = {},
                n = a.style,
                o = a.nodeType && Ga(a),
                p = za.get(a, "fxshow");
            c.queue ||
                ((h = fa._queueHooks(a, "fx")),
                null == h.unqueued &&
                    ((h.unqueued = 0),
                    (i = h.empty.fire),
                    (h.empty.fire = function () {
                        h.unqueued || i();
                    })),
                h.unqueued++,
                l.always(function () {
                    l.always(function () {
                        h.unqueued--, fa.queue(a, "fx").length || h.empty.fire();
                    });
                })),
                1 === a.nodeType &&
                    ("height" in b || "width" in b) &&
                    ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
                    (j = fa.css(a, "display")),
                    (k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j),
                    "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")),
                c.overflow &&
                    ((n.overflow = "hidden"),
                    l.always(function () {
                        (n.overflow = c.overflow[0]), (n.overflowX = c.overflow[1]), (n.overflowY = c.overflow[2]);
                    }));
            for (d in b)
                if (((e = b[d]), gb.exec(e))) {
                    if ((delete b[d], (f = f || "toggle" === e), e === (o ? "hide" : "show"))) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0;
                    }
                    m[d] = (p && p[d]) || fa.style(a, d);
                } else j = void 0;
            if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : (p = za.access(a, "fxshow", {})),
                    f && (p.hidden = !o),
                    o
                        ? fa(a).show()
                        : l.done(function () {
                              fa(a).hide();
                          }),
                    l.done(function () {
                        var b;
                        za.remove(a, "fxshow");
                        for (b in m) fa.style(a, b, m[b]);
                    });
                for (d in m) (g = K(o ? p[d] : 0, d, l)), d in p || ((p[d] = g.start), o && ((g.end = g.start), (g.start = "width" === d || "height" === d ? 1 : 0)));
            }
        }
        function M(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (((d = fa.camelCase(c)), (e = b[d]), (f = a[c]), fa.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = fa.cssHooks[d]), g && "expand" in g)) {
                    (f = g.expand(f)), delete a[d];
                    for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
                } else b[d] = e;
        }
        function N(a, b, c) {
            var d,
                e,
                f = 0,
                g = N.prefilters.length,
                h = fa.Deferred().always(function () {
                    delete i.elem;
                }),
                i = function () {
                    if (e) return !1;
                    for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
                },
                j = h.promise({
                    elem: a,
                    props: fa.extend({}, b),
                    opts: fa.extend(!0, { specialEasing: {}, easing: fa.easing._default }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: eb || I(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function (b, c) {
                        var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d;
                    },
                    stop: function (b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
                    },
                }),
                k = j.props;
            for (M(k, j.opts.specialEasing); g > f; f++) if ((d = N.prefilters[f].call(j, a, k, j.opts))) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
            return (
                fa.map(k, K, j),
                fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
                fa.fx.timer(fa.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
            );
        }
        function O(a) {
            return (a.getAttribute && a.getAttribute("class")) || "";
        }
        function P(a) {
            return function (b, c) {
                "string" != typeof b && ((c = b), (b = "*"));
                var d,
                    e = 0,
                    f = b.toLowerCase().match(va) || [];
                if (fa.isFunction(c)) for (; (d = f[e++]); ) "+" === d[0] ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            };
        }
        function Q(a, b, c, d) {
            function e(h) {
                var i;
                return (
                    (f[h] = !0),
                    fa.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || g || f[j] ? (g ? !(i = j) : void 0) : (b.dataTypes.unshift(j), e(j), !1);
                    }),
                    i
                );
            }
            var f = {},
                g = a === zb;
            return e(b.dataTypes[0]) || (!f["*"] && e("*"));
        }
        function R(a, b) {
            var c,
                d,
                e = fa.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && fa.extend(!0, a, d), a;
        }
        function S(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break;
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break;
                    }
                    g || (g = e);
                }
                f = f || g;
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
        }
        function T(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j = {},
                k = a.dataTypes.slice();
            if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f; )
                if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                        if (((g = j[i + " " + f] || j["* " + f]), !g))
                            for (e in j)
                                if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                                    g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                    break;
                                }
                        if (g !== !0)
                            if (g && a["throws"]) b = g(b);
                            else
                                try {
                                    b = g(b);
                                } catch (l) {
                                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                                }
                    }
            return { state: "success", data: b };
        }
        function U(a, b, c, d) {
            var e;
            if (fa.isArray(b))
                fa.each(b, function (b, e) {
                    c || Db.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
                });
            else if (c || "object" !== fa.type(b)) d(a, b);
            else for (e in b) U(a + "[" + e + "]", b[e], c, d);
        }
        function V(a) {
            return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
        }
        var W = [],
            X = a.document,
            Y = W.slice,
            Z = W.concat,
            $ = W.push,
            _ = W.indexOf,
            aa = {},
            ba = aa.toString,
            ca = aa.hasOwnProperty,
            da = {},
            ea = "2.2.0",
            fa = function (a, b) {
                return new fa.fn.init(a, b);
            },
            ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ha = /^-ms-/,
            ia = /-([\da-z])/gi,
            ja = function (a, b) {
                return b.toUpperCase();
            };
        (fa.fn = fa.prototype = {
            jquery: ea,
            constructor: fa,
            selector: "",
            length: 0,
            toArray: function () {
                return Y.call(this);
            },
            get: function (a) {
                return null != a ? (0 > a ? this[a + this.length] : this[a]) : Y.call(this);
            },
            pushStack: function (a) {
                var b = fa.merge(this.constructor(), a);
                return (b.prevObject = this), (b.context = this.context), b;
            },
            each: function (a) {
                return fa.each(this, a);
            },
            map: function (a) {
                return this.pushStack(
                    fa.map(this, function (b, c) {
                        return a.call(b, c, b);
                    })
                );
            },
            slice: function () {
                return this.pushStack(Y.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: $,
            sort: W.sort,
            splice: W.splice,
        }),
            (fa.extend = fa.fn.extend = function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = arguments[0] || {},
                    h = 1,
                    i = arguments.length,
                    j = !1;
                for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && ((g = this), h--); i > h; h++)
                    if (null != (a = arguments[h]))
                        for (b in a)
                            (c = g[b]),
                                (d = a[b]),
                                g !== d &&
                                    (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d)))
                                        ? (e ? ((e = !1), (f = c && fa.isArray(c) ? c : [])) : (f = c && fa.isPlainObject(c) ? c : {}), (g[b] = fa.extend(j, f, d)))
                                        : void 0 !== d && (g[b] = d));
                return g;
            }),
            fa.extend({
                expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (a) {
                    throw new Error(a);
                },
                noop: function () {},
                isFunction: function (a) {
                    return "function" === fa.type(a);
                },
                isArray: Array.isArray,
                isWindow: function (a) {
                    return null != a && a === a.window;
                },
                isNumeric: function (a) {
                    var b = a && a.toString();
                    return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0;
                },
                isPlainObject: function (a) {
                    return "object" !== fa.type(a) || a.nodeType || fa.isWindow(a) ? !1 : a.constructor && !ca.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
                },
                isEmptyObject: function (a) {
                    var b;
                    for (b in a) return !1;
                    return !0;
                },
                type: function (a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a;
                },
                globalEval: function (a) {
                    var b,
                        c = eval;
                    (a = fa.trim(a)), a && (1 === a.indexOf("use strict") ? ((b = X.createElement("script")), (b.text = a), X.head.appendChild(b).parentNode.removeChild(b)) : c(a));
                },
                camelCase: function (a) {
                    return a.replace(ha, "ms-").replace(ia, ja);
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
                },
                each: function (a, b) {
                    var d,
                        e = 0;
                    if (c(a)) for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
                    else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
                    return a;
                },
                trim: function (a) {
                    return null == a ? "" : (a + "").replace(ga, "");
                },
                makeArray: function (a, b) {
                    var d = b || [];
                    return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d;
                },
                inArray: function (a, b, c) {
                    return null == b ? -1 : _.call(b, a, c);
                },
                merge: function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                    return (a.length = e), a;
                },
                grep: function (a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
                    return e;
                },
                map: function (a, b, d) {
                    var e,
                        f,
                        g = 0,
                        h = [];
                    if (c(a)) for (e = a.length; e > g; g++) (f = b(a[g], g, d)), null != f && h.push(f);
                    else for (g in a) (f = b(a[g], g, d)), null != f && h.push(f);
                    return Z.apply([], h);
                },
                guid: 1,
                proxy: function (a, b) {
                    var c, d, e;
                    return (
                        "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                        fa.isFunction(a)
                            ? ((d = Y.call(arguments, 2)),
                              (e = function () {
                                  return a.apply(b || this, d.concat(Y.call(arguments)));
                              }),
                              (e.guid = a.guid = a.guid || fa.guid++),
                              e)
                            : void 0
                    );
                },
                now: Date.now,
                support: da,
            }),
            "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]),
            fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
                aa["[object " + b + "]"] = b.toLowerCase();
            });
        var ka = (function (a) {
            function b(a, b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    l,
                    n,
                    o = b && b.ownerDocument,
                    p = b ? b.nodeType : 9;
                if (((c = c || []), "string" != typeof a || !a || (1 !== p && 9 !== p && 11 !== p))) return c;
                if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), (b = b || G), I)) {
                    if (11 !== p && (j = ra.exec(a)))
                        if ((e = j[1])) {
                            if (9 === p) {
                                if (!(g = b.getElementById(e))) return c;
                                if (g.id === e) return c.push(g), c;
                            } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c;
                        } else {
                            if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c;
                        }
                    if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                        if (1 !== p) (o = b), (n = a);
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? (h = h.replace(ta, "\\$&")) : b.setAttribute("id", (h = N)), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--; ) l[f] = i + " " + m(l[f]);
                            (n = l.join(",")), (o = (sa.test(a) && k(b.parentNode)) || b);
                        }
                        if (n)
                            try {
                                return $.apply(c, o.querySelectorAll(n)), c;
                            } catch (q) {
                            } finally {
                                h === N && b.removeAttribute("id");
                            }
                    }
                }
                return B(a.replace(ha, "$1"), b, c, d);
            }
            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], (a[c + " "] = d);
                }
                var b = [];
                return a;
            }
            function d(a) {
                return (a[N] = !0), a;
            }
            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b);
                } catch (c) {
                    return !1;
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), (b = null);
                }
            }
            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--; ) w.attrHandle[c[d]] = b;
            }
            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
                return a ? 1 : -1;
            }
            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a;
                };
            }
            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a;
                };
            }
            function j(a) {
                return d(function (b) {
                    return (
                        (b = +b),
                        d(function (c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--; ) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                        })
                    );
                });
            }
            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a;
            }
            function l() {}
            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d;
            }
            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first
                    ? function (b, c, f) {
                          for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
                      }
                    : function (b, c, g) {
                          var h,
                              i,
                              j,
                              k = [P, f];
                          if (g) {
                              for (; (b = b[d]); ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                          } else
                              for (; (b = b[d]); )
                                  if (1 === b.nodeType || e) {
                                      if (((j = b[N] || (b[N] = {})), (i = j[b.uniqueID] || (j[b.uniqueID] = {})), (h = i[d]) && h[0] === P && h[1] === f)) return (k[2] = h[2]);
                                      if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                                  }
                      };
            }
            function o(a) {
                return a.length > 1
                    ? function (b, c, d) {
                          for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                          return !0;
                      }
                    : a[0];
            }
            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d;
            }
            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g;
            }
            function r(a, b, c, e, f, g) {
                return (
                    e && !e[N] && (e = r(e)),
                    f && !f[N] && (f = r(f, g)),
                    d(function (d, g, h, i) {
                        var j,
                            k,
                            l,
                            m = [],
                            n = [],
                            o = g.length,
                            r = d || p(b || "*", h.nodeType ? [h] : h, []),
                            s = !a || (!d && b) ? r : q(r, m, a, h, i),
                            t = c ? (f || (d ? a : o || e) ? [] : g) : s;
                        if ((c && c(s, t, h, i), e)) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                        if (d) {
                            if (f || a) {
                                if (f) {
                                    for (j = [], k = t.length; k--; ) (l = t[k]) && j.push((s[k] = l));
                                    f(null, (t = []), j, i);
                                }
                                for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                            }
                        } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
                    })
                );
            }
            function s(a) {
                for (
                    var b,
                        c,
                        d,
                        e = a.length,
                        f = w.relative[a[0].type],
                        g = f || w.relative[" "],
                        h = f ? 1 : 0,
                        i = n(
                            function (a) {
                                return a === b;
                            },
                            g,
                            !0
                        ),
                        j = n(
                            function (a) {
                                return aa(b, a) > -1;
                            },
                            g,
                            !0
                        ),
                        k = [
                            function (a, c, d) {
                                var e = (!f && (d || c !== C)) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                                return (b = null), e;
                            },
                        ];
                    e > h;
                    h++
                )
                    if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
                    else {
                        if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s((a = a.slice(d))), e > d && m(a));
                        }
                        k.push(c);
                    }
                return o(k);
            }
            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function (d, g, h, i, j) {
                        var k,
                            l,
                            m,
                            n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || (f && w.find.TAG("*", j)),
                            u = (P += null == s ? 1 : Math.random() || 0.1),
                            v = t.length;
                        for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === G || (F(k), (h = !I)); (m = a[l++]); )
                                    if (m(k, g || G, h)) {
                                        i.push(k);
                                        break;
                                    }
                                j && (P = u);
                            }
                            e && ((k = !m && k) && n--, d && p.push(k));
                        }
                        if (((n += o), e && o !== n)) {
                            for (l = 0; (m = c[l++]); ) m(p, r, g, h);
                            if (d) {
                                if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r);
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                        }
                        return j && ((P = u), (C = s)), p;
                    };
                return e ? d(g) : g;
            }
            var u,
                v,
                w,
                x,
                y,
                z,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N = "sizzle" + 1 * new Date(),
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function (a, b) {
                    return a === b && (E = !0), 0;
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function (a, b) {
                    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                    return -1;
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"),
                na = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da + "|[*])"),
                    ATTR: new RegExp("^" + ea),
                    PSEUDO: new RegExp("^" + fa),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i"),
                },
                oa = /^(?:input|select|textarea|button)$/i,
                pa = /^h\d$/i,
                qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sa = /[+~]/,
                ta = /'|\\/g,
                ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                va = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
                },
                wa = function () {
                    F();
                };
            try {
                $.apply((X = _.call(O.childNodes)), O.childNodes), X[O.childNodes.length].nodeType;
            } catch (xa) {
                $ = {
                    apply: X.length
                        ? function (a, b) {
                              Z.apply(a, _.call(b));
                          }
                        : function (a, b) {
                              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                              a.length = c - 1;
                          },
                };
            }
            (v = b.support = {}),
                (y = b.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1;
                }),
                (F = b.setDocument = function (a) {
                    var b,
                        c,
                        d = a ? a.ownerDocument || a : O;
                    return d !== G && 9 === d.nodeType && d.documentElement
                        ? ((G = d),
                          (H = G.documentElement),
                          (I = !y(G)),
                          (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)),
                          (v.attributes = e(function (a) {
                              return (a.className = "i"), !a.getAttribute("className");
                          })),
                          (v.getElementsByTagName = e(function (a) {
                              return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length;
                          })),
                          (v.getElementsByClassName = qa.test(G.getElementsByClassName)),
                          (v.getById = e(function (a) {
                              return (H.appendChild(a).id = N), !G.getElementsByName || !G.getElementsByName(N).length;
                          })),
                          v.getById
                              ? ((w.find.ID = function (a, b) {
                                    if ("undefined" != typeof b.getElementById && I) {
                                        var c = b.getElementById(a);
                                        return c ? [c] : [];
                                    }
                                }),
                                (w.filter.ID = function (a) {
                                    var b = a.replace(ua, va);
                                    return function (a) {
                                        return a.getAttribute("id") === b;
                                    };
                                }))
                              : (delete w.find.ID,
                                (w.filter.ID = function (a) {
                                    var b = a.replace(ua, va);
                                    return function (a) {
                                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                })),
                          (w.find.TAG = v.getElementsByTagName
                              ? function (a, b) {
                                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
                                }
                              : function (a, b) {
                                    var c,
                                        d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                                        return d;
                                    }
                                    return f;
                                }),
                          (w.find.CLASS =
                              v.getElementsByClassName &&
                              function (a, b) {
                                  return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0;
                              }),
                          (K = []),
                          (J = []),
                          (v.qsa = qa.test(G.querySelectorAll)) &&
                              (e(function (a) {
                                  (H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                                      a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                                      a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                                      a.querySelectorAll(":checked").length || J.push(":checked"),
                                      a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
                              }),
                              e(function (a) {
                                  var b = G.createElement("input");
                                  b.setAttribute("type", "hidden"),
                                      a.appendChild(b).setAttribute("name", "D"),
                                      a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                                      a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                                      a.querySelectorAll("*,:x"),
                                      J.push(",.*:");
                              })),
                          (v.matchesSelector = qa.test((L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                              e(function (a) {
                                  (v.disconnectedMatch = L.call(a, "div")), L.call(a, "[s!='']:x"), K.push("!=", fa);
                              }),
                          (J = J.length && new RegExp(J.join("|"))),
                          (K = K.length && new RegExp(K.join("|"))),
                          (b = qa.test(H.compareDocumentPosition)),
                          (M =
                              b || qa.test(H.contains)
                                  ? function (a, b) {
                                        var c = 9 === a.nodeType ? a.documentElement : a,
                                            d = b && b.parentNode;
                                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                                    }
                                  : function (a, b) {
                                        if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                                        return !1;
                                    }),
                          (U = b
                              ? function (a, b) {
                                    if (a === b) return (E = !0), 0;
                                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return c
                                        ? c
                                        : ((c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                                          1 & c || (!v.sortDetached && b.compareDocumentPosition(a) === c)
                                              ? a === G || (a.ownerDocument === O && M(O, a))
                                                  ? -1
                                                  : b === G || (b.ownerDocument === O && M(O, b))
                                                  ? 1
                                                  : D
                                                  ? aa(D, a) - aa(D, b)
                                                  : 0
                                              : 4 & c
                                              ? -1
                                              : 1);
                                }
                              : function (a, b) {
                                    if (a === b) return (E = !0), 0;
                                    var c,
                                        d = 0,
                                        e = a.parentNode,
                                        f = b.parentNode,
                                        h = [a],
                                        i = [b];
                                    if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                                    if (e === f) return g(a, b);
                                    for (c = a; (c = c.parentNode); ) h.unshift(c);
                                    for (c = b; (c = c.parentNode); ) i.unshift(c);
                                    for (; h[d] === i[d]; ) d++;
                                    return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0;
                                }),
                          G)
                        : G;
                }),
                (b.matches = function (a, c) {
                    return b(a, null, null, c);
                }),
                (b.matchesSelector = function (a, c) {
                    if (((a.ownerDocument || a) !== G && F(a), (c = c.replace(ka, "='$1']")), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))))
                        try {
                            var d = L.call(a, c);
                            if (d || v.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
                        } catch (e) {}
                    return b(c, G, null, [a]).length > 0;
                }),
                (b.contains = function (a, b) {
                    return (a.ownerDocument || a) !== G && F(a), M(a, b);
                }),
                (b.attr = function (a, b) {
                    (a.ownerDocument || a) !== G && F(a);
                    var c = w.attrHandle[b.toLowerCase()],
                        d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                    return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }),
                (b.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a);
                }),
                (b.uniqueSort = function (a) {
                    var b,
                        c = [],
                        d = 0,
                        e = 0;
                    if (((E = !v.detectDuplicates), (D = !v.sortStable && a.slice(0)), a.sort(U), E)) {
                        for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
                        for (; d--; ) a.splice(c[d], 1);
                    }
                    return (D = null), a;
                }),
                (x = b.getText = function (a) {
                    var b,
                        c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                        } else if (3 === e || 4 === e) return a.nodeValue;
                    } else for (; (b = a[d++]); ) c += x(b);
                    return c;
                }),
                (w = b.selectors = {
                    cacheLength: 50,
                    createPseudo: d,
                    match: na,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (a) {
                            return (a[1] = a[1].replace(ua, va)), (a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                        },
                        CHILD: function (a) {
                            return (
                                (a[1] = a[1].toLowerCase()),
                                "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3]))) : a[3] && b.error(a[0]),
                                a
                            );
                        },
                        PSEUDO: function (a) {
                            var b,
                                c = !a[6] && a[2];
                            return na.CHILD.test(a[0])
                                ? null
                                : (a[3] ? (a[2] = a[4] || a[5] || "") : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(ua, va).toLowerCase();
                            return "*" === a
                                ? function () {
                                      return !0;
                                  }
                                : function (a) {
                                      return a.nodeName && a.nodeName.toLowerCase() === b;
                                  };
                        },
                        CLASS: function (a) {
                            var b = R[a + " "];
                            return (
                                b ||
                                ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                                    R(a, function (a) {
                                        return b.test(("string" == typeof a.className && a.className) || ("undefined" != typeof a.getAttribute && a.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (a, c, d) {
                            return function (e) {
                                var f = b.attr(e, a);
                                return null == f
                                    ? "!=" === c
                                    : c
                                    ? ((f += ""),
                                      "=" === c
                                          ? f === d
                                          : "!=" === c
                                          ? f !== d
                                          : "^=" === c
                                          ? d && 0 === f.indexOf(d)
                                          : "*=" === c
                                          ? d && f.indexOf(d) > -1
                                          : "$=" === c
                                          ? d && f.slice(-d.length) === d
                                          : "~=" === c
                                          ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1
                                          : "|=" === c
                                          ? f === d || f.slice(0, d.length + 1) === d + "-"
                                          : !1)
                                    : !0;
                            };
                        },
                        CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e
                                ? function (a) {
                                      return !!a.parentNode;
                                  }
                                : function (b, c, i) {
                                      var j,
                                          k,
                                          l,
                                          m,
                                          n,
                                          o,
                                          p = f !== g ? "nextSibling" : "previousSibling",
                                          q = b.parentNode,
                                          r = h && b.nodeName.toLowerCase(),
                                          s = !i && !h,
                                          t = !1;
                                      if (q) {
                                          if (f) {
                                              for (; p; ) {
                                                  for (m = b; (m = m[p]); ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                                  o = p = "only" === a && !o && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                              for (
                                                  m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n];
                                                  (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                                              )
                                                  if (1 === m.nodeType && ++t && m === b) {
                                                      k[a] = [P, n, t];
                                                      break;
                                                  }
                                          } else if ((s && ((m = b), (l = m[N] || (m[N] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === P && j[1]), (t = n)), t === !1))
                                              for (
                                                  ;
                                                  (m = (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                                                  ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((l = m[N] || (m[N] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (k[a] = [P, t])), m !== b));

                                              );
                                          return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (a, c) {
                            var e,
                                f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                            return f[N]
                                ? f(c)
                                : f.length > 1
                                ? ((e = [a, a, "", c]),
                                  w.setFilters.hasOwnProperty(a.toLowerCase())
                                      ? d(function (a, b) {
                                            for (var d, e = f(a, c), g = e.length; g--; ) (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                                        })
                                      : function (a) {
                                            return f(a, 0, e);
                                        })
                                : f;
                        },
                    },
                    pseudos: {
                        not: d(function (a) {
                            var b = [],
                                c = [],
                                e = A(a.replace(ha, "$1"));
                            return e[N]
                                ? d(function (a, b, c, d) {
                                      for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                                  })
                                : function (a, d, f) {
                                      return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop();
                                  };
                        }),
                        has: d(function (a) {
                            return function (c) {
                                return b(a, c).length > 0;
                            };
                        }),
                        contains: d(function (a) {
                            return (
                                (a = a.replace(ua, va)),
                                function (b) {
                                    return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                                }
                            );
                        }),
                        lang: d(function (a) {
                            return (
                                ma.test(a || "") || b.error("unsupported lang: " + a),
                                (a = a.replace(ua, va).toLowerCase()),
                                function (b) {
                                    var c;
                                    do if ((c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        },
                        root: function (a) {
                            return a === H;
                        },
                        focus: function (a) {
                            return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                        },
                        enabled: function (a) {
                            return a.disabled === !1;
                        },
                        disabled: function (a) {
                            return a.disabled === !0;
                        },
                        checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                        },
                        empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (a) {
                            return !w.pseudos.empty(a);
                        },
                        header: function (a) {
                            return pa.test(a.nodeName);
                        },
                        input: function (a) {
                            return oa.test(a.nodeName);
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b && "button" === a.type) || "button" === b;
                        },
                        text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                        },
                        first: j(function () {
                            return [0];
                        }),
                        last: j(function (a, b) {
                            return [b - 1];
                        }),
                        eq: j(function (a, b, c) {
                            return [0 > c ? c + b : c];
                        }),
                        even: j(function (a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a;
                        }),
                        odd: j(function (a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a;
                        }),
                        lt: j(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                            return a;
                        }),
                        gt: j(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                            return a;
                        }),
                    },
                }),
                (w.pseudos.nth = w.pseudos.eq);
            for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u);
            for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
            return (
                (l.prototype = w.filters = w.pseudos),
                (w.setFilters = new l()),
                (z = b.tokenize = function (a, c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = S[a + " "];
                    if (k) return c ? 0 : k.slice(0);
                    for (h = a, i = [], j = w.preFilter; h; ) {
                        (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push((f = []))), (d = !1), (e = ja.exec(h)) && ((d = e.shift()), f.push({ value: d, type: e[0].replace(ha, " ") }), (h = h.slice(d.length)));
                        for (g in w.filter) !(e = na[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((d = e.shift()), f.push({ value: d, type: g, matches: e }), (h = h.slice(d.length)));
                        if (!d) break;
                    }
                    return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
                }),
                (A = b.compile = function (a, b) {
                    var c,
                        d = [],
                        e = [],
                        f = T[a + " "];
                    if (!f) {
                        for (b || (b = z(a)), c = b.length; c--; ) (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
                        (f = T(a, t(e, d))), (f.selector = a);
                    }
                    return f;
                }),
                (B = b.select = function (a, b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j = "function" == typeof a && a,
                        l = !d && z((a = j.selector || a));
                    if (((c = c || []), 1 === l.length)) {
                        if (((f = l[0] = l[0].slice(0)), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type])) {
                            if (((b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0]), !b)) return c;
                            j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
                        }
                        for (e = na.needsContext.test(a) ? 0 : f.length; e-- && ((g = f[e]), !w.relative[(h = g.type)]); )
                            if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), (sa.test(f[0].type) && k(b.parentNode)) || b))) {
                                if ((f.splice(e, 1), (a = d.length && m(f)), !a)) return $.apply(c, d), c;
                                break;
                            }
                    }
                    return (j || A(a, l))(d, b, !I, c, !b || (sa.test(a) && k(b.parentNode)) || b), c;
                }),
                (v.sortStable = N.split("").sort(U).join("") === N),
                (v.detectDuplicates = !!E),
                F(),
                (v.sortDetached = e(function (a) {
                    return 1 & a.compareDocumentPosition(G.createElement("div"));
                })),
                e(function (a) {
                    return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
                }) ||
                    f("type|href|height|width", function (a, b, c) {
                        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                    }),
                (v.attributes &&
                    e(function (a) {
                        return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                    })) ||
                    f("value", function (a, b, c) {
                        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                    }),
                e(function (a) {
                    return null == a.getAttribute("disabled");
                }) ||
                    f(ba, function (a, b, c) {
                        var d;
                        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                    }),
                b
            );
        })(a);
        (fa.find = ka), (fa.expr = ka.selectors), (fa.expr[":"] = fa.expr.pseudos), (fa.uniqueSort = fa.unique = ka.uniqueSort), (fa.text = ka.getText), (fa.isXMLDoc = ka.isXML), (fa.contains = ka.contains);
        var la = function (a, b, c) {
                for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                    if (1 === a.nodeType) {
                        if (e && fa(a).is(c)) break;
                        d.push(a);
                    }
                return d;
            },
            ma = function (a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c;
            },
            na = fa.expr.match.needsContext,
            oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            pa = /^.[^:#\[\.,]*$/;
        (fa.filter = function (a, b, c) {
            var d = b[0];
            return (
                c && (a = ":not(" + a + ")"),
                1 === b.length && 1 === d.nodeType
                    ? fa.find.matchesSelector(d, a)
                        ? [d]
                        : []
                    : fa.find.matches(
                          a,
                          fa.grep(b, function (a) {
                              return 1 === a.nodeType;
                          })
                      )
            );
        }),
            fa.fn.extend({
                find: function (a) {
                    var b,
                        c = this.length,
                        d = [],
                        e = this;
                    if ("string" != typeof a)
                        return this.pushStack(
                            fa(a).filter(function () {
                                for (b = 0; c > b; b++) if (fa.contains(e[b], this)) return !0;
                            })
                        );
                    for (b = 0; c > b; b++) fa.find(a, e[b], d);
                    return (d = this.pushStack(c > 1 ? fa.unique(d) : d)), (d.selector = this.selector ? this.selector + " " + a : a), d;
                },
                filter: function (a) {
                    return this.pushStack(d(this, a || [], !1));
                },
                not: function (a) {
                    return this.pushStack(d(this, a || [], !0));
                },
                is: function (a) {
                    return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length;
                },
            });
        var qa,
            ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            sa = (fa.fn.init = function (a, b, c) {
                var d, e;
                if (!a) return this;
                if (((c = c || qa), "string" == typeof a)) {
                    if (((d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a)), !d || (!d[1] && b))) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (d[1]) {
                        if (((b = b instanceof fa ? b[0] : b), fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b)))
                            for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this;
                    }
                    return (e = X.getElementById(d[2])), e && e.parentNode && ((this.length = 1), (this[0] = e)), (this.context = X), (this.selector = a), this;
                }
                return a.nodeType
                    ? ((this.context = this[0] = a), (this.length = 1), this)
                    : fa.isFunction(a)
                    ? void 0 !== c.ready
                        ? c.ready(a)
                        : a(fa)
                    : (void 0 !== a.selector && ((this.selector = a.selector), (this.context = a.context)), fa.makeArray(a, this));
            });
        (sa.prototype = fa.fn), (qa = fa(X));
        var ta = /^(?:parents|prev(?:Until|All))/,
            ua = { children: !0, contents: !0, next: !0, prev: !0 };
        fa.fn.extend({
            has: function (a) {
                var b = fa(a, this),
                    c = b.length;
                return this.filter(function () {
                    for (var a = 0; c > a; a++) if (fa.contains(this, b[a])) return !0;
                });
            },
            closest: function (a, b) {
                for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                            f.push(c);
                            break;
                        }
                return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f);
            },
            index: function (a) {
                return a ? ("string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (a, b) {
                return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))));
            },
            addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
            },
        }),
            fa.each(
                {
                    parent: function (a) {
                        var b = a.parentNode;
                        return b && 11 !== b.nodeType ? b : null;
                    },
                    parents: function (a) {
                        return la(a, "parentNode");
                    },
                    parentsUntil: function (a, b, c) {
                        return la(a, "parentNode", c);
                    },
                    next: function (a) {
                        return e(a, "nextSibling");
                    },
                    prev: function (a) {
                        return e(a, "previousSibling");
                    },
                    nextAll: function (a) {
                        return la(a, "nextSibling");
                    },
                    prevAll: function (a) {
                        return la(a, "previousSibling");
                    },
                    nextUntil: function (a, b, c) {
                        return la(a, "nextSibling", c);
                    },
                    prevUntil: function (a, b, c) {
                        return la(a, "previousSibling", c);
                    },
                    siblings: function (a) {
                        return ma((a.parentNode || {}).firstChild, a);
                    },
                    children: function (a) {
                        return ma(a.firstChild);
                    },
                    contents: function (a) {
                        return a.contentDocument || fa.merge([], a.childNodes);
                    },
                },
                function (a, b) {
                    fa.fn[a] = function (c, d) {
                        var e = fa.map(this, b, c);
                        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e);
                    };
                }
            );
        var va = /\S+/g;
        (fa.Callbacks = function (a) {
            a = "string" == typeof a ? f(a) : fa.extend({}, a);
            var b,
                c,
                d,
                e,
                g = [],
                h = [],
                i = -1,
                j = function () {
                    for (e = a.once, d = b = !0; h.length; i = -1) for (c = h.shift(); ++i < g.length; ) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && ((i = g.length), (c = !1));
                    a.memory || (c = !1), (b = !1), e && (g = c ? [] : "");
                },
                k = {
                    add: function () {
                        return (
                            g &&
                                (c && !b && ((i = g.length - 1), h.push(c)),
                                (function d(b) {
                                    fa.each(b, function (b, c) {
                                        fa.isFunction(c) ? (a.unique && k.has(c)) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c);
                                    });
                                })(arguments),
                                c && !b && j()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            fa.each(arguments, function (a, b) {
                                for (var c; (c = fa.inArray(b, g, c)) > -1; ) g.splice(c, 1), i >= c && i--;
                            }),
                            this
                        );
                    },
                    has: function (a) {
                        return a ? fa.inArray(a, g) > -1 : g.length > 0;
                    },
                    empty: function () {
                        return g && (g = []), this;
                    },
                    disable: function () {
                        return (e = h = []), (g = c = ""), this;
                    },
                    disabled: function () {
                        return !g;
                    },
                    lock: function () {
                        return (e = h = []), c || (g = c = ""), this;
                    },
                    locked: function () {
                        return !!e;
                    },
                    fireWith: function (a, c) {
                        return e || ((c = c || []), (c = [a, c.slice ? c.slice() : c]), h.push(c), b || j()), this;
                    },
                    fire: function () {
                        return k.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!d;
                    },
                };
            return k;
        }),
            fa.extend({
                Deferred: function (a) {
                    var b = [
                            ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", fa.Callbacks("memory")],
                        ],
                        c = "pending",
                        d = {
                            state: function () {
                                return c;
                            },
                            always: function () {
                                return e.done(arguments).fail(arguments), this;
                            },
                            then: function () {
                                var a = arguments;
                                return fa
                                    .Deferred(function (c) {
                                        fa.each(b, function (b, f) {
                                            var g = fa.isFunction(a[b]) && a[b];
                                            e[f[1]](function () {
                                                var a = g && g.apply(this, arguments);
                                                a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                                            });
                                        }),
                                            (a = null);
                                    })
                                    .promise();
                            },
                            promise: function (a) {
                                return null != a ? fa.extend(a, d) : d;
                            },
                        },
                        e = {};
                    return (
                        (d.pipe = d.then),
                        fa.each(b, function (a, f) {
                            var g = f[2],
                                h = f[3];
                            (d[f[1]] = g.add),
                                h &&
                                    g.add(
                                        function () {
                                            c = h;
                                        },
                                        b[1 ^ a][2].disable,
                                        b[2][2].lock
                                    ),
                                (e[f[0]] = function () {
                                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                                }),
                                (e[f[0] + "With"] = g.fireWith);
                        }),
                        d.promise(e),
                        a && a.call(e, e),
                        e
                    );
                },
                when: function (a) {
                    var b,
                        c,
                        d,
                        e = 0,
                        f = Y.call(arguments),
                        g = f.length,
                        h = 1 !== g || (a && fa.isFunction(a.promise)) ? g : 0,
                        i = 1 === h ? a : fa.Deferred(),
                        j = function (a, c, d) {
                            return function (e) {
                                (c[a] = this), (d[a] = arguments.length > 1 ? Y.call(arguments) : e), d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                            };
                        };
                    if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
                    return h || i.resolveWith(d, f), i.promise();
                },
            });
        var wa;
        (fa.fn.ready = function (a) {
            return fa.ready.promise().done(a), this;
        }),
            fa.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? fa.readyWait++ : fa.ready(!0);
                },
                ready: function (a) {
                    (a === !0 ? --fa.readyWait : fa.isReady) || ((fa.isReady = !0), (a !== !0 && --fa.readyWait > 0) || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))));
                },
            }),
            (fa.ready.promise = function (b) {
                return (
                    wa ||
                        ((wa = fa.Deferred()),
                        "complete" === X.readyState || ("loading" !== X.readyState && !X.documentElement.doScroll) ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))),
                    wa.promise(b)
                );
            }),
            fa.ready.promise();
        var xa = function (a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === fa.type(c)) {
                    e = !0;
                    for (h in c) xa(a, b, h, c[h], !0, f, g);
                } else if (
                    void 0 !== d &&
                    ((e = !0),
                    fa.isFunction(d) || (g = !0),
                    j &&
                        (g
                            ? (b.call(a, d), (b = null))
                            : ((j = b),
                              (b = function (a, b, c) {
                                  return j.call(fa(a), c);
                              }))),
                    b)
                )
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
            },
            ya = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
            };
        (h.uid = 1),
            (h.prototype = {
                register: function (a, b) {
                    var c = b || {};
                    return a.nodeType ? (a[this.expando] = c) : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
                },
                cache: function (a) {
                    if (!ya(a)) return {};
                    var b = a[this.expando];
                    return b || ((b = {}), ya(a) && (a.nodeType ? (a[this.expando] = b) : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
                },
                set: function (a, b, c) {
                    var d,
                        e = this.cache(a);
                    if ("string" == typeof b) e[b] = c;
                    else for (d in b) e[d] = b[d];
                    return e;
                },
                get: function (a, b) {
                    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
                },
                access: function (a, b, c) {
                    var d;
                    return void 0 === b || (b && "string" == typeof b && void 0 === c) ? ((d = this.get(a, b)), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
                },
                remove: function (a, b) {
                    var c,
                        d,
                        e,
                        f = a[this.expando];
                    if (void 0 !== f) {
                        if (void 0 === b) this.register(a);
                        else {
                            fa.isArray(b) ? (d = b.concat(b.map(fa.camelCase))) : ((e = fa.camelCase(b)), b in f ? (d = [b, e]) : ((d = e), (d = d in f ? [d] : d.match(va) || []))), (c = d.length);
                            for (; c--; ) delete f[d[c]];
                        }
                        (void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
                    }
                },
                hasData: function (a) {
                    var b = a[this.expando];
                    return void 0 !== b && !fa.isEmptyObject(b);
                },
            });
        var za = new h(),
            Aa = new h(),
            Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ca = /[A-Z]/g;
        fa.extend({
            hasData: function (a) {
                return Aa.hasData(a) || za.hasData(a);
            },
            data: function (a, b, c) {
                return Aa.access(a, b, c);
            },
            removeData: function (a, b) {
                Aa.remove(a, b);
            },
            _data: function (a, b, c) {
                return za.access(a, b, c);
            },
            _removeData: function (a, b) {
                za.remove(a, b);
            },
        }),
            fa.fn.extend({
                data: function (a, b) {
                    var c,
                        d,
                        e,
                        f = this[0],
                        g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && ((e = Aa.get(f)), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                            for (c = g.length; c--; ) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = fa.camelCase(d.slice(5))), i(f, d, e[d])));
                            za.set(f, "hasDataAttrs", !0);
                        }
                        return e;
                    }
                    return "object" == typeof a
                        ? this.each(function () {
                              Aa.set(this, a);
                          })
                        : xa(
                              this,
                              function (b) {
                                  var c, d;
                                  if (f && void 0 === b) {
                                      if (((c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase())), void 0 !== c)) return c;
                                      if (((d = fa.camelCase(a)), (c = Aa.get(f, d)), void 0 !== c)) return c;
                                      if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                                  } else
                                      (d = fa.camelCase(a)),
                                          this.each(function () {
                                              var c = Aa.get(this, d);
                                              Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b);
                                          });
                              },
                              null,
                              b,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (a) {
                    return this.each(function () {
                        Aa.remove(this, a);
                    });
                },
            }),
            fa.extend({
                queue: function (a, b, c) {
                    var d;
                    return a ? ((b = (b || "fx") + "queue"), (d = za.get(a, b)), c && (!d || fa.isArray(c) ? (d = za.access(a, b, fa.makeArray(c))) : d.push(c)), d || []) : void 0;
                },
                dequeue: function (a, b) {
                    b = b || "fx";
                    var c = fa.queue(a, b),
                        d = c.length,
                        e = c.shift(),
                        f = fa._queueHooks(a, b),
                        g = function () {
                            fa.dequeue(a, b);
                        };
                    "inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
                },
                _queueHooks: function (a, b) {
                    var c = b + "queueHooks";
                    return (
                        za.get(a, c) ||
                        za.access(a, c, {
                            empty: fa.Callbacks("once memory").add(function () {
                                za.remove(a, [b + "queue", c]);
                            }),
                        })
                    );
                },
            }),
            fa.fn.extend({
                queue: function (a, b) {
                    var c = 2;
                    return (
                        "string" != typeof a && ((b = a), (a = "fx"), c--),
                        arguments.length < c
                            ? fa.queue(this[0], a)
                            : void 0 === b
                            ? this
                            : this.each(function () {
                                  var c = fa.queue(this, a, b);
                                  fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a);
                              })
                    );
                },
                dequeue: function (a) {
                    return this.each(function () {
                        fa.dequeue(this, a);
                    });
                },
                clearQueue: function (a) {
                    return this.queue(a || "fx", []);
                },
                promise: function (a, b) {
                    var c,
                        d = 1,
                        e = fa.Deferred(),
                        f = this,
                        g = this.length,
                        h = function () {
                            --d || e.resolveWith(f, [f]);
                        };
                    for ("string" != typeof a && ((b = a), (a = void 0)), a = a || "fx"; g--; ) (c = za.get(f[g], a + "queueHooks")), c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b);
                },
            });
        var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
            Fa = ["Top", "Right", "Bottom", "Left"],
            Ga = function (a, b) {
                return (a = b || a), "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a);
            },
            Ha = /^(?:checkbox|radio)$/i,
            Ia = /<([\w:-]+)/,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        (Ka.optgroup = Ka.option), (Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead), (Ka.th = Ka.td);
        var La = /<|&#?\w+;/;
        !(function () {
            var a = X.createDocumentFragment(),
                b = a.appendChild(X.createElement("div")),
                c = X.createElement("input");
            c.setAttribute("type", "radio"),
                c.setAttribute("checked", "checked"),
                c.setAttribute("name", "t"),
                b.appendChild(c),
                (da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (b.innerHTML = "<textarea>x</textarea>"),
                (da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
        })();
        var Ma = /^key/,
            Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Oa = /^([^.]*)(?:\.(.+)|)/;
        (fa.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q = za.get(a);
                if (q)
                    for (
                        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                            c.guid || (c.guid = fa.guid++),
                            (i = q.events) || (i = q.events = {}),
                            (g = q.handle) ||
                                (g = q.handle = function (b) {
                                    return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0;
                                }),
                            b = (b || "").match(va) || [""],
                            j = b.length;
                        j--;

                    )
                        (h = Oa.exec(b[j]) || []),
                            (n = p = h[1]),
                            (o = (h[2] || "").split(".").sort()),
                            n &&
                                ((l = fa.event.special[n] || {}),
                                (n = (e ? l.delegateType : l.bindType) || n),
                                (l = fa.event.special[n] || {}),
                                (k = fa.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && fa.expr.match.needsContext.test(e), namespace: o.join(".") }, f)),
                                (m = i[n]) || ((m = i[n] = []), (m.delegateCount = 0), (l.setup && l.setup.call(a, d, o, g) !== !1) || (a.addEventListener && a.addEventListener(n, g))),
                                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                                e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                                (fa.event.global[n] = !0));
            },
            remove: function (a, b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q = za.hasData(a) && za.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(va) || [""], j = b.length; j--; )
                        if (((h = Oa.exec(b[j]) || []), (n = p = h[1]), (o = (h[2] || "").split(".").sort()), n)) {
                            for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                                (k = m[f]),
                                    (!e && p !== k.origType) ||
                                        (c && c.guid !== k.guid) ||
                                        (h && !h.test(k.namespace)) ||
                                        (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                                        (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) || fa.removeEvent(a, n, q.handle), delete i[n]);
                        } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                    fa.isEmptyObject(i) && za.remove(a, "handle events");
                }
            },
            dispatch: function (a) {
                a = fa.event.fix(a);
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = [],
                    h = Y.call(arguments),
                    i = (za.get(this, "events") || {})[a.type] || [],
                    j = fa.event.special[a.type] || {};
                if (((h[0] = a), (a.delegateTarget = this), !j.preDispatch || j.preDispatch.call(this, a) !== !1)) {
                    for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                            (!a.rnamespace || a.rnamespace.test(f.namespace)) &&
                                ((a.handleObj = f), (a.data = f.data), (d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result;
                }
            },
            handlers: function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i !== this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; h > c; c++) (f = b[c]), (e = f.selector + " "), void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({ elem: i, handlers: d });
                        }
                return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, b) {
                    var c,
                        d,
                        e,
                        f = b.button;
                    return (
                        null == a.pageX &&
                            null != b.clientX &&
                            ((c = a.target.ownerDocument || X),
                            (d = c.documentElement),
                            (e = c.body),
                            (a.pageX = b.clientX + ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) - ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                            (a.pageY = b.clientY + ((d && d.scrollTop) || (e && e.scrollTop) || 0) - ((d && d.clientTop) || (e && e.clientTop) || 0))),
                        a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        a
                    );
                },
            },
            fix: function (a) {
                if (a[fa.expando]) return a;
                var b,
                    c,
                    d,
                    e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--; ) (c = d[b]), (a[c] = f[c]);
                return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        return this !== p() && this.focus ? (this.focus(), !1) : void 0;
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0;
                    },
                    _default: function (a) {
                        return fa.nodeName(a.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                    },
                },
            },
        }),
            (fa.removeEvent = function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c);
            }),
            (fa.Event = function (a, b) {
                return this instanceof fa.Event
                    ? (a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? n : o)) : (this.type = a),
                      b && fa.extend(this, b),
                      (this.timeStamp = (a && a.timeStamp) || fa.now()),
                      void (this[fa.expando] = !0))
                    : new fa.Event(a, b);
            }),
            (fa.Event.prototype = {
                constructor: fa.Event,
                isDefaultPrevented: o,
                isPropagationStopped: o,
                isImmediatePropagationStopped: o,
                preventDefault: function () {
                    var a = this.originalEvent;
                    (this.isDefaultPrevented = n), a && a.preventDefault();
                },
                stopPropagation: function () {
                    var a = this.originalEvent;
                    (this.isPropagationStopped = n), a && a.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    (this.isImmediatePropagationStopped = n), a && a.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            fa.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
                fa.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (!e || (e !== d && !fa.contains(d, e))) && ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
                    },
                };
            }),
            fa.fn.extend({
                on: function (a, b, c, d) {
                    return q(this, a, b, c, d);
                },
                one: function (a, b, c, d) {
                    return q(this, a, b, c, d, 1);
                },
                off: function (a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == typeof a) {
                        for (e in a) this.off(e, b, a[e]);
                        return this;
                    }
                    return (
                        (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
                        c === !1 && (c = o),
                        this.each(function () {
                            fa.event.remove(this, a, c, b);
                        })
                    );
                },
            });
        var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Qa = /<script|<style|<link/i,
            Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Sa = /^true\/(.*)/,
            Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        fa.extend({
            htmlPrefilter: function (a) {
                return a.replace(Pa, "<$1></$2>");
            },
            clone: function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = a.cloneNode(!0),
                    i = fa.contains(a.ownerDocument, a);
                if (!(da.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || fa.isXMLDoc(a))) for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
                if (b)
                    if (c) for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
                    else u(a, h);
                return (g = k(h, "script")), g.length > 0 && l(g, !i && k(a, "script")), h;
            },
            cleanData: function (a) {
                for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (ya(c)) {
                        if ((b = c[za.expando])) {
                            if (b.events) for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                            c[za.expando] = void 0;
                        }
                        c[Aa.expando] && (c[Aa.expando] = void 0);
                    }
            },
        }),
            fa.fn.extend({
                domManip: w,
                detach: function (a) {
                    return x(this, a, !0);
                },
                remove: function (a) {
                    return x(this, a);
                },
                text: function (a) {
                    return xa(
                        this,
                        function (a) {
                            return void 0 === a
                                ? fa.text(this)
                                : this.empty().each(function () {
                                      (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                                  });
                        },
                        null,
                        a,
                        arguments.length
                    );
                },
                append: function () {
                    return w(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = r(this, a);
                            b.appendChild(a);
                        }
                    });
                },
                prepend: function () {
                    return w(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = r(this, a);
                            b.insertBefore(a, b.firstChild);
                        }
                    });
                },
                before: function () {
                    return w(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this);
                    });
                },
                after: function () {
                    return w(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), (a.textContent = ""));
                    return this;
                },
                clone: function (a, b) {
                    return (
                        (a = null == a ? !1 : a),
                        (b = null == b ? a : b),
                        this.map(function () {
                            return fa.clone(this, a, b);
                        })
                    );
                },
                html: function (a) {
                    return xa(
                        this,
                        function (a) {
                            var b = this[0] || {},
                                c = 0,
                                d = this.length;
                            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                            if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                                a = fa.htmlPrefilter(a);
                                try {
                                    for (; d > c; c++) (b = this[c] || {}), 1 === b.nodeType && (fa.cleanData(k(b, !1)), (b.innerHTML = a));
                                    b = 0;
                                } catch (e) {}
                            }
                            b && this.empty().append(a);
                        },
                        null,
                        a,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var a = [];
                    return w(
                        this,
                        arguments,
                        function (b) {
                            var c = this.parentNode;
                            fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this));
                        },
                        a
                    );
                },
            }),
            fa.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
                fa.fn[a] = function (a) {
                    for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) (c = g === f ? this : this.clone(!0)), fa(e[g])[b](c), $.apply(d, c.get());
                    return this.pushStack(d);
                };
            });
        var Ua,
            Va = { HTML: "block", BODY: "block" },
            Wa = /^margin/,
            Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
            Ya = function (b) {
                var c = b.ownerDocument.defaultView;
                return c.opener || (c = a), c.getComputedStyle(b);
            },
            Za = function (a, b, c, d) {
                var e,
                    f,
                    g = {};
                for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e;
            },
            $a = X.documentElement;
        !(function () {
            function b() {
                (h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (h.innerHTML = ""), $a.appendChild(g);
                var b = a.getComputedStyle(h);
                (c = "1%" !== b.top), (f = "2px" === b.marginLeft), (d = "4px" === b.width), (h.style.marginRight = "50%"), (e = "4px" === b.marginRight), $a.removeChild(g);
            }
            var c,
                d,
                e,
                f,
                g = X.createElement("div"),
                h = X.createElement("div");
            h.style &&
                ((h.style.backgroundClip = "content-box"),
                (h.cloneNode(!0).style.backgroundClip = ""),
                (da.clearCloneStyle = "content-box" === h.style.backgroundClip),
                (g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                g.appendChild(h),
                fa.extend(da, {
                    pixelPosition: function () {
                        return b(), c;
                    },
                    boxSizingReliable: function () {
                        return null == d && b(), d;
                    },
                    pixelMarginRight: function () {
                        return null == d && b(), e;
                    },
                    reliableMarginLeft: function () {
                        return null == d && b(), f;
                    },
                    reliableMarginRight: function () {
                        var b,
                            c = h.appendChild(X.createElement("div"));
                        return (
                            (c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (c.style.marginRight = c.style.width = "0"),
                            (h.style.width = "1px"),
                            $a.appendChild(g),
                            (b = !parseFloat(a.getComputedStyle(c).marginRight)),
                            $a.removeChild(g),
                            h.removeChild(c),
                            b
                        );
                    },
                }));
        })();
        var _a = /^(none|table(?!-c[ea]).+)/,
            ab = { position: "absolute", visibility: "hidden", display: "block" },
            bb = { letterSpacing: "0", fontWeight: "400" },
            cb = ["Webkit", "O", "Moz", "ms"],
            db = X.createElement("div").style;
        fa.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = A(a, "opacity");
                            return "" === c ? "1" : c;
                        }
                    },
                },
            },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: "cssFloat" },
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e,
                        f,
                        g,
                        h = fa.camelCase(b),
                        i = a.style;
                    return (
                        (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
                        (g = fa.cssHooks[b] || fa.cssHooks[h]),
                        void 0 === c
                            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                                ? e
                                : i[b]
                            : ((f = typeof c),
                              "string" === f && (e = Ea.exec(c)) && e[1] && ((c = j(a, b, e)), (f = "number")),
                              void (
                                  null != c &&
                                  c === c &&
                                  ("number" === f && (c += (e && e[3]) || (fa.cssNumber[h] ? "" : "px")),
                                  da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                                  (g && "set" in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c))
                              ))
                    );
                }
            },
            css: function (a, b, c, d) {
                var e,
                    f,
                    g,
                    h = fa.camelCase(b);
                return (
                    (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
                    (g = fa.cssHooks[b] || fa.cssHooks[h]),
                    g && "get" in g && (e = g.get(a, !0, c)),
                    void 0 === e && (e = A(a, b, d)),
                    "normal" === e && b in bb && (e = bb[b]),
                    "" === c || c ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e) : e
                );
            },
        }),
            fa.each(["height", "width"], function (a, b) {
                fa.cssHooks[b] = {
                    get: function (a, c, d) {
                        return c
                            ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth
                                ? Za(a, ab, function () {
                                      return F(a, b, d);
                                  })
                                : F(a, b, d)
                            : void 0;
                    },
                    set: function (a, c, d) {
                        var e,
                            f = d && Ya(a),
                            g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                        return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && ((a.style[b] = c), (c = fa.css(a, b))), D(a, c, g);
                    },
                };
            }),
            (fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
                return b
                    ? (parseFloat(A(a, "marginLeft")) ||
                          a.getBoundingClientRect().left -
                              Za(a, { marginLeft: 0 }, function () {
                                  return a.getBoundingClientRect().left;
                              })) + "px"
                    : void 0;
            })),
            (fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
                return b ? Za(a, { display: "inline-block" }, A, [a, "marginRight"]) : void 0;
            })),
            fa.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
                (fa.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                        return e;
                    },
                }),
                    Wa.test(a) || (fa.cssHooks[a + b].set = D);
            }),
            fa.fn.extend({
                css: function (a, b) {
                    return xa(
                        this,
                        function (a, b, c) {
                            var d,
                                e,
                                f = {},
                                g = 0;
                            if (fa.isArray(b)) {
                                for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                                return f;
                            }
                            return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b);
                        },
                        a,
                        b,
                        arguments.length > 1
                    );
                },
                show: function () {
                    return G(this, !0);
                },
                hide: function () {
                    return G(this);
                },
                toggle: function (a) {
                    return "boolean" == typeof a
                        ? a
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              Ga(this) ? fa(this).show() : fa(this).hide();
                          });
                },
            }),
            (fa.Tween = H),
            (H.prototype = {
                constructor: H,
                init: function (a, b, c, d, e, f) {
                    (this.elem = a), (this.prop = c), (this.easing = e || fa.easing._default), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (fa.cssNumber[c] ? "" : "px"));
                },
                cur: function () {
                    var a = H.propHooks[this.prop];
                    return a && a.get ? a.get(this) : H.propHooks._default.get(this);
                },
                run: function (a) {
                    var b,
                        c = H.propHooks[this.prop];
                    return (
                        this.options.duration ? (this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
                        (this.now = (this.end - this.start) * b + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        c && c.set ? c.set(this) : H.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (H.prototype.init.prototype = H.prototype),
            (H.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return 1 !== a.elem.nodeType || (null != a.elem[a.prop] && null == a.elem.style[a.prop]) ? a.elem[a.prop] : ((b = fa.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
                    },
                    set: function (a) {
                        fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || (null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop]) ? (a.elem[a.prop] = a.now) : fa.style(a.elem, a.prop, a.now + a.unit);
                    },
                },
            }),
            (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
                },
            }),
            (fa.easing = {
                linear: function (a) {
                    return a;
                },
                swing: function (a) {
                    return 0.5 - Math.cos(a * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (fa.fx = H.prototype.init),
            (fa.fx.step = {});
        var eb,
            fb,
            gb = /^(?:toggle|show|hide)$/,
            hb = /queueHooks$/;
        (fa.Animation = fa.extend(N, {
            tweeners: {
                "*": [
                    function (a, b) {
                        var c = this.createTween(a, b);
                        return j(c.elem, a, Ea.exec(b), c), c;
                    },
                ],
            },
            tweener: function (a, b) {
                fa.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(va));
                for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (N.tweeners[c] = N.tweeners[c] || []), N.tweeners[c].unshift(b);
            },
            prefilters: [L],
            prefilter: function (a, b) {
                b ? N.prefilters.unshift(a) : N.prefilters.push(a);
            },
        })),
            (fa.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? fa.extend({}, a) : { complete: c || (!c && b) || (fa.isFunction(a) && a), duration: a, easing: (c && b) || (b && !fa.isFunction(b) && b) };
                return (
                    (d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default),
                    (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                    (d.old = d.complete),
                    (d.complete = function () {
                        fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue);
                    }),
                    d
                );
            }),
            fa.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(Ga).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
                },
                animate: function (a, b, c, d) {
                    var e = fa.isEmptyObject(a),
                        f = fa.speed(b, c, d),
                        g = function () {
                            var b = N(this, fa.extend({}, a), f);
                            (e || za.get(this, "finish")) && b.stop(!0);
                        };
                    return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
                },
                stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop, b(c);
                    };
                    return (
                        "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                        b && a !== !1 && this.queue(a || "fx", []),
                        this.each(function () {
                            var b = !0,
                                e = null != a && a + "queueHooks",
                                f = fa.timers,
                                g = za.get(this);
                            if (e) g[e] && g[e].stop && d(g[e]);
                            else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                            for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                            (b || !c) && fa.dequeue(this, a);
                        })
                    );
                },
                finish: function (a) {
                    return (
                        a !== !1 && (a = a || "fx"),
                        this.each(function () {
                            var b,
                                c = za.get(this),
                                d = c[a + "queue"],
                                e = c[a + "queueHooks"],
                                f = fa.timers,
                                g = d ? d.length : 0;
                            for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                            delete c.finish;
                        })
                    );
                },
            }),
            fa.each(["toggle", "show", "hide"], function (a, b) {
                var c = fa.fn[b];
                fa.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e);
                };
            }),
            fa.each({ slideDown: J("show"), slideUp: J("hide"), slideToggle: J("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
                fa.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }),
            (fa.timers = []),
            (fa.fx.tick = function () {
                var a,
                    b = 0,
                    c = fa.timers;
                for (eb = fa.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
                c.length || fa.fx.stop(), (eb = void 0);
            }),
            (fa.fx.timer = function (a) {
                fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop();
            }),
            (fa.fx.interval = 13),
            (fa.fx.start = function () {
                fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval));
            }),
            (fa.fx.stop = function () {
                a.clearInterval(fb), (fb = null);
            }),
            (fa.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (fa.fn.delay = function (b, c) {
                return (
                    (b = fa.fx ? fa.fx.speeds[b] || b : b),
                    (c = c || "fx"),
                    this.queue(c, function (c, d) {
                        var e = a.setTimeout(c, b);
                        d.stop = function () {
                            a.clearTimeout(e);
                        };
                    })
                );
            }),
            (function () {
                var a = X.createElement("input"),
                    b = X.createElement("select"),
                    c = b.appendChild(X.createElement("option"));
                (a.type = "checkbox"),
                    (da.checkOn = "" !== a.value),
                    (da.optSelected = c.selected),
                    (b.disabled = !0),
                    (da.optDisabled = !c.disabled),
                    (a = X.createElement("input")),
                    (a.value = "t"),
                    (a.type = "radio"),
                    (da.radioValue = "t" === a.value);
            })();
        var ib,
            jb = fa.expr.attrHandle;
        fa.fn.extend({
            attr: function (a, b) {
                return xa(this, fa.attr, a, b, arguments.length > 1);
            },
            removeAttr: function (a) {
                return this.each(function () {
                    fa.removeAttr(this, a);
                });
            },
        }),
            fa.extend({
                attr: function (a, b, c) {
                    var d,
                        e,
                        f = a.nodeType;
                    return 3 !== f && 8 !== f && 2 !== f
                        ? "undefined" == typeof a.getAttribute
                            ? fa.prop(a, b, c)
                            : ((1 === f && fa.isXMLDoc(a)) || ((b = b.toLowerCase()), (e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0))),
                              void 0 !== c
                                  ? null === c
                                      ? void fa.removeAttr(a, b)
                                      : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                      ? d
                                      : (a.setAttribute(b, c + ""), c)
                                  : e && "get" in e && null !== (d = e.get(a, b))
                                  ? d
                                  : ((d = fa.find.attr(a, b)), null == d ? void 0 : d))
                        : void 0;
                },
                attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b;
                            }
                        },
                    },
                },
                removeAttr: function (a, b) {
                    var c,
                        d,
                        e = 0,
                        f = b && b.match(va);
                    if (f && 1 === a.nodeType) for (; (c = f[e++]); ) (d = fa.propFix[c] || c), fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
                },
            }),
            (ib = {
                set: function (a, b, c) {
                    return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c;
                },
            }),
            fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = jb[b] || fa.find.attr;
                jb[b] = function (a, b, d) {
                    var e, f;
                    return d || ((f = jb[b]), (jb[b] = e), (e = null != c(a, b, d) ? b.toLowerCase() : null), (jb[b] = f)), e;
                };
            });
        var kb = /^(?:input|select|textarea|button)$/i,
            lb = /^(?:a|area)$/i;
        fa.fn.extend({
            prop: function (a, b) {
                return xa(this, fa.prop, a, b, arguments.length > 1);
            },
            removeProp: function (a) {
                return this.each(function () {
                    delete this[fa.propFix[a] || a];
                });
            },
        }),
            fa.extend({
                prop: function (a, b, c) {
                    var d,
                        e,
                        f = a.nodeType;
                    return 3 !== f && 8 !== f && 2 !== f
                        ? ((1 === f && fa.isXMLDoc(a)) || ((b = fa.propFix[b] || b), (e = fa.propHooks[b])),
                          void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b])
                        : void 0;
                },
                propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b = fa.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : kb.test(a.nodeName) || (lb.test(a.nodeName) && a.href) ? 0 : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            da.optSelected ||
                (fa.propHooks.selected = {
                    get: function (a) {
                        var b = a.parentNode;
                        return b && b.parentNode && b.parentNode.selectedIndex, null;
                    },
                }),
            fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                fa.propFix[this.toLowerCase()] = this;
            });
        var mb = /[\t\r\n\f]/g;
        fa.fn.extend({
            addClass: function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = 0;
                if (fa.isFunction(a))
                    return this.each(function (b) {
                        fa(this).addClass(a.call(this, b, O(this)));
                    });
                if ("string" == typeof a && a)
                    for (b = a.match(va) || []; (c = this[i++]); )
                        if (((e = O(c)), (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))) {
                            for (g = 0; (f = b[g++]); ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
                        }
                return this;
            },
            removeClass: function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = 0;
                if (fa.isFunction(a))
                    return this.each(function (b) {
                        fa(this).removeClass(a.call(this, b, O(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a)
                    for (b = a.match(va) || []; (c = this[i++]); )
                        if (((e = O(c)), (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))) {
                            for (g = 0; (f = b[g++]); ) for (; d.indexOf(" " + f + " ") > -1; ) d = d.replace(" " + f + " ", " ");
                            (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
                        }
                return this;
            },
            toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c
                    ? b
                        ? this.addClass(a)
                        : this.removeClass(a)
                    : fa.isFunction(a)
                    ? this.each(function (c) {
                          fa(this).toggleClass(a.call(this, c, O(this), b), b);
                      })
                    : this.each(function () {
                          var b, d, e, f;
                          if ("string" === c) for (d = 0, e = fa(this), f = a.match(va) || []; (b = f[d++]); ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                          else (void 0 === a || "boolean" === c) && ((b = O(this)), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (a) {
                var b,
                    c,
                    d = 0;
                for (b = " " + a + " "; (c = this[d++]); ) if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
                return !1;
            },
        });
        var nb = /\r/g;
        fa.fn.extend({
            val: function (a) {
                var b,
                    c,
                    d,
                    e = this[0];
                return arguments.length
                    ? ((d = fa.isFunction(a)),
                      this.each(function (c) {
                          var e;
                          1 === this.nodeType &&
                              ((e = d ? a.call(this, c, fa(this).val()) : a),
                              null == e
                                  ? (e = "")
                                  : "number" == typeof e
                                  ? (e += "")
                                  : fa.isArray(e) &&
                                    (e = fa.map(e, function (a) {
                                        return null == a ? "" : a + "";
                                    })),
                              (b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()]),
                              (b && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
                      }))
                    : e
                    ? ((b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()]), b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c))
                    : void 0;
            },
        }),
            fa.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            return fa.trim(a.value);
                        },
                    },
                    select: {
                        get: function (a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                if (((c = d[i]), (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup")))) {
                                    if (((b = fa(c).val()), f)) return b;
                                    g.push(b);
                                }
                            return g;
                        },
                        set: function (a, b) {
                            for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--; ) (d = e[g]), (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                            return c || (a.selectedIndex = -1), f;
                        },
                    },
                },
            }),
            fa.each(["radio", "checkbox"], function () {
                (fa.valHooks[this] = {
                    set: function (a, b) {
                        return fa.isArray(b) ? (a.checked = fa.inArray(fa(a).val(), b) > -1) : void 0;
                    },
                }),
                    da.checkOn ||
                        (fa.valHooks[this].get = function (a) {
                            return null === a.getAttribute("value") ? "on" : a.value;
                        });
            });
        var ob = /^(?:focusinfocus|focusoutblur)$/;
        fa.extend(fa.event, {
            trigger: function (b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = [d || X],
                    n = ca.call(b, "type") ? b.type : b,
                    o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
                if (
                    ((g = h = d = d || X),
                    3 !== d.nodeType &&
                        8 !== d.nodeType &&
                        !ob.test(n + fa.event.triggered) &&
                        (n.indexOf(".") > -1 && ((o = n.split(".")), (n = o.shift()), o.sort()),
                        (j = n.indexOf(":") < 0 && "on" + n),
                        (b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b)),
                        (b.isTrigger = e ? 2 : 3),
                        (b.namespace = o.join(".")),
                        (b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (b.result = void 0),
                        b.target || (b.target = d),
                        (c = null == c ? [b] : fa.makeArray(c, [b])),
                        (l = fa.event.special[n] || {}),
                        e || !l.trigger || l.trigger.apply(d, c) !== !1))
                ) {
                    if (!e && !l.noBubble && !fa.isWindow(d)) {
                        for (i = l.delegateType || n, ob.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), (h = g);
                        h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a);
                    }
                    for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                        (b.type = f > 1 ? i : l.bindType || n),
                            (k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle")),
                            k && k.apply(g, c),
                            (k = j && g[j]),
                            k && k.apply && ya(g) && ((b.result = k.apply(g, c)), b.result === !1 && b.preventDefault());
                    return (
                        (b.type = n),
                        e ||
                            b.isDefaultPrevented() ||
                            (l._default && l._default.apply(m.pop(), c) !== !1) ||
                            !ya(d) ||
                            (j && fa.isFunction(d[n]) && !fa.isWindow(d) && ((h = d[j]), h && (d[j] = null), (fa.event.triggered = n), d[n](), (fa.event.triggered = void 0), h && (d[j] = h))),
                        b.result
                    );
                }
            },
            simulate: function (a, b, c) {
                var d = fa.extend(new fa.Event(), c, { type: a, isSimulated: !0 });
                fa.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
            },
        }),
            fa.fn.extend({
                trigger: function (a, b) {
                    return this.each(function () {
                        fa.event.trigger(a, b, this);
                    });
                },
                triggerHandler: function (a, b) {
                    var c = this[0];
                    return c ? fa.event.trigger(a, b, c, !0) : void 0;
                },
            }),
            fa.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function (a, b) {
                    fa.fn[b] = function (a, c) {
                        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
                    };
                }
            ),
            fa.fn.extend({
                hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a);
                },
            }),
            (da.focusin = "onfocusin" in a),
            da.focusin ||
                fa.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                    var c = function (a) {
                        fa.event.simulate(b, a.target, fa.event.fix(a));
                    };
                    fa.event.special[b] = {
                        setup: function () {
                            var d = this.ownerDocument || this,
                                e = za.access(d, b);
                            e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1);
                        },
                        teardown: function () {
                            var d = this.ownerDocument || this,
                                e = za.access(d, b) - 1;
                            e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b));
                        },
                    };
                });
        var pb = a.location,
            qb = fa.now(),
            rb = /\?/;
        (fa.parseJSON = function (a) {
            return JSON.parse(a + "");
        }),
            (fa.parseXML = function (b) {
                var c;
                if (!b || "string" != typeof b) return null;
                try {
                    c = new a.DOMParser().parseFromString(b, "text/xml");
                } catch (d) {
                    c = void 0;
                }
                return (!c || c.getElementsByTagName("parsererror").length) && fa.error("Invalid XML: " + b), c;
            });
        var sb = /#.*$/,
            tb = /([?&])_=[^&]*/,
            ub = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            wb = /^(?:GET|HEAD)$/,
            xb = /^\/\//,
            yb = {},
            zb = {},
            Ab = "*/".concat("*"),
            Bb = X.createElement("a");
        (Bb.href = pb.href),
            fa.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: pb.href,
                    type: "GET",
                    isLocal: vb.test(pb.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": Ab, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": fa.parseJSON, "text xml": fa.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (a, b) {
                    return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a);
                },
                ajaxPrefilter: P(yb),
                ajaxTransport: P(zb),
                ajax: function (b, c) {
                    function d(b, c, d, h) {
                        var j,
                            l,
                            s,
                            t,
                            v,
                            x = c;
                        2 !== u &&
                            ((u = 2),
                            i && a.clearTimeout(i),
                            (e = void 0),
                            (g = h || ""),
                            (w.readyState = b > 0 ? 4 : 0),
                            (j = (b >= 200 && 300 > b) || 304 === b),
                            d && (t = S(m, w, d)),
                            (t = T(m, t, w, j)),
                            j
                                ? (m.ifModified && ((v = w.getResponseHeader("Last-Modified")), v && (fa.lastModified[f] = v), (v = w.getResponseHeader("etag")), v && (fa.etag[f] = v)),
                                  204 === b || "HEAD" === m.type ? (x = "nocontent") : 304 === b ? (x = "notmodified") : ((x = t.state), (l = t.data), (s = t.error), (j = !s)))
                                : ((s = x), (b || !x) && ((x = "error"), 0 > b && (b = 0))),
                            (w.status = b),
                            (w.statusText = (c || x) + ""),
                            j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
                            w.statusCode(r),
                            (r = void 0),
                            k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]),
                            q.fireWith(n, [w, x]),
                            k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")));
                    }
                    "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m = fa.ajaxSetup({}, c),
                        n = m.context || m,
                        o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                        p = fa.Deferred(),
                        q = fa.Callbacks("once memory"),
                        r = m.statusCode || {},
                        s = {},
                        t = {},
                        u = 0,
                        v = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function (a) {
                                var b;
                                if (2 === u) {
                                    if (!h) for (h = {}; (b = ub.exec(g)); ) h[b[1].toLowerCase()] = b[2];
                                    b = h[a.toLowerCase()];
                                }
                                return null == b ? null : b;
                            },
                            getAllResponseHeaders: function () {
                                return 2 === u ? g : null;
                            },
                            setRequestHeader: function (a, b) {
                                var c = a.toLowerCase();
                                return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
                            },
                            overrideMimeType: function (a) {
                                return u || (m.mimeType = a), this;
                            },
                            statusCode: function (a) {
                                var b;
                                if (a)
                                    if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                                    else w.always(a[w.status]);
                                return this;
                            },
                            abort: function (a) {
                                var b = a || v;
                                return e && e.abort(b), d(0, b), this;
                            },
                        };
                    if (
                        ((p.promise(w).complete = q.add),
                        (w.success = w.done),
                        (w.error = w.fail),
                        (m.url = ((b || m.url || pb.href) + "").replace(sb, "").replace(xb, pb.protocol + "//")),
                        (m.type = c.method || c.type || m.method || m.type),
                        (m.dataTypes = fa
                            .trim(m.dataType || "*")
                            .toLowerCase()
                            .match(va) || [""]),
                        null == m.crossDomain)
                    ) {
                        j = X.createElement("a");
                        try {
                            (j.href = m.url), (j.href = j.href), (m.crossDomain = Bb.protocol + "//" + Bb.host != j.protocol + "//" + j.host);
                        } catch (x) {
                            m.crossDomain = !0;
                        }
                    }
                    if ((m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(yb, m, c, w), 2 === u)) return w;
                    (k = fa.event && m.global),
                        k && 0 === fa.active++ && fa.event.trigger("ajaxStart"),
                        (m.type = m.type.toUpperCase()),
                        (m.hasContent = !wb.test(m.type)),
                        (f = m.url),
                        m.hasContent || (m.data && ((f = m.url += (rb.test(f) ? "&" : "?") + m.data), delete m.data), m.cache === !1 && (m.url = tb.test(f) ? f.replace(tb, "$1_=" + qb++) : f + (rb.test(f) ? "&" : "?") + "_=" + qb++)),
                        m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])),
                        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
                        w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ab + "; q=0.01" : "") : m.accepts["*"]);
                    for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
                    if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
                    v = "abort";
                    for (l in { success: 1, error: 1, complete: 1 }) w[l](m[l]);
                    if ((e = Q(zb, m, c, w))) {
                        if (((w.readyState = 1), k && o.trigger("ajaxSend", [w, m]), 2 === u)) return w;
                        m.async &&
                            m.timeout > 0 &&
                            (i = a.setTimeout(function () {
                                w.abort("timeout");
                            }, m.timeout));
                        try {
                            (u = 1), e.send(s, d);
                        } catch (x) {
                            if (!(2 > u)) throw x;
                            d(-1, x);
                        }
                    } else d(-1, "No Transport");
                    return w;
                },
                getJSON: function (a, b, c) {
                    return fa.get(a, b, c, "json");
                },
                getScript: function (a, b) {
                    return fa.get(a, void 0, b, "script");
                },
            }),
            fa.each(["get", "post"], function (a, b) {
                fa[b] = function (a, c, d, e) {
                    return fa.isFunction(c) && ((e = e || d), (d = c), (c = void 0)), fa.ajax(fa.extend({ url: a, type: b, dataType: e, data: c, success: d }, fa.isPlainObject(a) && a));
                };
            }),
            (fa._evalUrl = function (a) {
                return fa.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
            }),
            fa.fn.extend({
                wrapAll: function (a) {
                    var b;
                    return fa.isFunction(a)
                        ? this.each(function (b) {
                              fa(this).wrapAll(a.call(this, b));
                          })
                        : (this[0] &&
                              ((b = fa(a, this[0].ownerDocument).eq(0).clone(!0)),
                              this[0].parentNode && b.insertBefore(this[0]),
                              b
                                  .map(function () {
                                      for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                                      return a;
                                  })
                                  .append(this)),
                          this);
                },
                wrapInner: function (a) {
                    return fa.isFunction(a)
                        ? this.each(function (b) {
                              fa(this).wrapInner(a.call(this, b));
                          })
                        : this.each(function () {
                              var b = fa(this),
                                  c = b.contents();
                              c.length ? c.wrapAll(a) : b.append(a);
                          });
                },
                wrap: function (a) {
                    var b = fa.isFunction(a);
                    return this.each(function (c) {
                        fa(this).wrapAll(b ? a.call(this, c) : a);
                    });
                },
                unwrap: function () {
                    return this.parent()
                        .each(function () {
                            fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes);
                        })
                        .end();
                },
            }),
            (fa.expr.filters.hidden = function (a) {
                return !fa.expr.filters.visible(a);
            }),
            (fa.expr.filters.visible = function (a) {
                return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
            });
        var Cb = /%20/g,
            Db = /\[\]$/,
            Eb = /\r?\n/g,
            Fb = /^(?:submit|button|image|reset|file)$/i,
            Gb = /^(?:input|select|textarea|keygen)/i;
        (fa.param = function (a, b) {
            var c,
                d = [],
                e = function (a, b) {
                    (b = fa.isFunction(b) ? b() : null == b ? "" : b), (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
                };
            if ((void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || (a.jquery && !fa.isPlainObject(a))))
                fa.each(a, function () {
                    e(this.name, this.value);
                });
            else for (c in a) U(c, a[c], b, e);
            return d.join("&").replace(Cb, "+");
        }),
            fa.fn.extend({
                serialize: function () {
                    return fa.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var a = fa.prop(this, "elements");
                        return a ? fa.makeArray(a) : this;
                    })
                        .filter(function () {
                            var a = this.type;
                            return this.name && !fa(this).is(":disabled") && Gb.test(this.nodeName) && !Fb.test(a) && (this.checked || !Ha.test(a));
                        })
                        .map(function (a, b) {
                            var c = fa(this).val();
                            return null == c
                                ? null
                                : fa.isArray(c)
                                ? fa.map(c, function (a) {
                                      return { name: b.name, value: a.replace(Eb, "\r\n") };
                                  })
                                : { name: b.name, value: c.replace(Eb, "\r\n") };
                        })
                        .get();
                },
            }),
            (fa.ajaxSettings.xhr = function () {
                try {
                    return new a.XMLHttpRequest();
                } catch (b) {}
            });
        var Hb = { 0: 200, 1223: 204 },
            Ib = fa.ajaxSettings.xhr();
        (da.cors = !!Ib && "withCredentials" in Ib),
            (da.ajax = Ib = !!Ib),
            fa.ajaxTransport(function (b) {
                var c, d;
                return da.cors || (Ib && !b.crossDomain)
                    ? {
                          send: function (e, f) {
                              var g,
                                  h = b.xhr();
                              if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                              b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                              for (g in e) h.setRequestHeader(g, e[g]);
                              (c = function (a) {
                                  return function () {
                                      c &&
                                          ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                                          "abort" === a
                                              ? h.abort()
                                              : "error" === a
                                              ? "number" != typeof h.status
                                                  ? f(0, "error")
                                                  : f(h.status, h.statusText)
                                              : f(
                                                    Hb[h.status] || h.status,
                                                    h.statusText,
                                                    "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText },
                                                    h.getAllResponseHeaders()
                                                ));
                                  };
                              }),
                                  (h.onload = c()),
                                  (d = h.onerror = c("error")),
                                  void 0 !== h.onabort
                                      ? (h.onabort = d)
                                      : (h.onreadystatechange = function () {
                                            4 === h.readyState &&
                                                a.setTimeout(function () {
                                                    c && d();
                                                });
                                        }),
                                  (c = c("abort"));
                              try {
                                  h.send((b.hasContent && b.data) || null);
                              } catch (i) {
                                  if (c) throw i;
                              }
                          },
                          abort: function () {
                              c && c();
                          },
                      }
                    : void 0;
            }),
            fa.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (a) {
                        return fa.globalEval(a), a;
                    },
                },
            }),
            fa.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
            }),
            fa.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function (d, e) {
                            (b = fa("<script>")
                                .prop({ charset: a.scriptCharset, src: a.url })
                                .on(
                                    "load error",
                                    (c = function (a) {
                                        b.remove(), (c = null), a && e("error" === a.type ? 404 : 200, a.type);
                                    })
                                )),
                                X.head.appendChild(b[0]);
                        },
                        abort: function () {
                            c && c();
                        },
                    };
                }
            });
        var Jb = [],
            Kb = /(=)\?(?=&|$)|\?\?/;
        fa.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var a = Jb.pop() || fa.expando + "_" + qb++;
                return (this[a] = !0), a;
            },
        }),
            fa.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e,
                    f,
                    g,
                    h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0]
                    ? ((e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                      h ? (b[h] = b[h].replace(Kb, "$1" + e)) : b.jsonp !== !1 && (b.url += (rb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                      (b.converters["script json"] = function () {
                          return g || fa.error(e + " was not called"), g[0];
                      }),
                      (b.dataTypes[0] = "json"),
                      (f = a[e]),
                      (a[e] = function () {
                          g = arguments;
                      }),
                      d.always(function () {
                          void 0 === f ? fa(a).removeProp(e) : (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)), g && fa.isFunction(f) && f(g[0]), (g = f = void 0);
                      }),
                      "script")
                    : void 0;
            }),
            (da.createHTMLDocument = (function () {
                var a = X.implementation.createHTMLDocument("").body;
                return (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length;
            })()),
            (fa.parseHTML = function (a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && ((c = b), (b = !1)), (b = b || (da.createHTMLDocument ? X.implementation.createHTMLDocument("") : X));
                var d = oa.exec(a),
                    e = !c && [];
                return d ? [b.createElement(d[1])] : ((d = m([a], b, e)), e && e.length && fa(e).remove(), fa.merge([], d.childNodes));
            });
        var Lb = fa.fn.load;
        (fa.fn.load = function (a, b, c) {
            if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
            var d,
                e,
                f,
                g = this,
                h = a.indexOf(" ");
            return (
                h > -1 && ((d = fa.trim(a.slice(h))), (a = a.slice(0, h))),
                fa.isFunction(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (e = "POST"),
                g.length > 0 &&
                    fa
                        .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
                        .done(function (a) {
                            (f = arguments), g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a);
                        })
                        .always(
                            c &&
                                function (a, b) {
                                    g.each(function () {
                                        c.apply(g, f || [a.responseText, b, a]);
                                    });
                                }
                        ),
                this
            );
        }),
            fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                fa.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }),
            (fa.expr.filters.animated = function (a) {
                return fa.grep(fa.timers, function (b) {
                    return a === b.elem;
                }).length;
            }),
            (fa.offset = {
                setOffset: function (a, b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = fa.css(a, "position"),
                        l = fa(a),
                        m = {};
                    "static" === k && (a.style.position = "relative"),
                        (h = l.offset()),
                        (f = fa.css(a, "top")),
                        (i = fa.css(a, "left")),
                        (j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
                        j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                        fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))),
                        null != b.top && (m.top = b.top - h.top + g),
                        null != b.left && (m.left = b.left - h.left + e),
                        "using" in b ? b.using.call(a, m) : l.css(m);
                },
            }),
            fa.fn.extend({
                offset: function (a) {
                    if (arguments.length)
                        return void 0 === a
                            ? this
                            : this.each(function (b) {
                                  fa.offset.setOffset(this, a, b);
                              });
                    var b,
                        c,
                        d = this[0],
                        e = { top: 0, left: 0 },
                        f = d && d.ownerDocument;
                    return f ? ((b = f.documentElement), fa.contains(b, d) ? ((e = d.getBoundingClientRect()), (c = V(f)), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e) : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var a,
                            b,
                            c = this[0],
                            d = { top: 0, left: 0 };
                        return (
                            "fixed" === fa.css(c, "position")
                                ? (b = c.getBoundingClientRect())
                                : ((a = this.offsetParent()),
                                  (b = this.offset()),
                                  fa.nodeName(a[0], "html") || (d = a.offset()),
                                  (d.top += fa.css(a[0], "borderTopWidth", !0) - a.scrollTop()),
                                  (d.left += fa.css(a[0], "borderLeftWidth", !0) - a.scrollLeft())),
                            { top: b.top - d.top - fa.css(c, "marginTop", !0), left: b.left - d.left - fa.css(c, "marginLeft", !0) }
                        );
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var a = this.offsetParent; a && "static" === fa.css(a, "position"); ) a = a.offsetParent;
                        return a || $a;
                    });
                },
            }),
            fa.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
                var c = "pageYOffset" === b;
                fa.fn[a] = function (d) {
                    return xa(
                        this,
                        function (a, d, e) {
                            var f = V(a);
                            return void 0 === e ? (f ? f[b] : a[d]) : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : (a[d] = e));
                        },
                        a,
                        d,
                        arguments.length
                    );
                };
            }),
            fa.each(["top", "left"], function (a, b) {
                fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
                    return c ? ((c = A(a, b)), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0;
                });
            }),
            fa.each({ Height: "height", Width: "width" }, function (a, b) {
                fa.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
                    fa.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d),
                            g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return xa(
                            this,
                            function (b, c, d) {
                                var e;
                                return fa.isWindow(b)
                                    ? b.document.documentElement["client" + a]
                                    : 9 === b.nodeType
                                    ? ((e = b.documentElement), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]))
                                    : void 0 === d
                                    ? fa.css(b, c, g)
                                    : fa.style(b, c, d, g);
                            },
                            b,
                            f ? d : void 0,
                            f,
                            null
                        );
                    };
                });
            }),
            fa.fn.extend({
                bind: function (a, b, c) {
                    return this.on(a, null, b, c);
                },
                unbind: function (a, b) {
                    return this.off(a, null, b);
                },
                delegate: function (a, b, c, d) {
                    return this.on(b, a, c, d);
                },
                undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
                },
                size: function () {
                    return this.length;
                },
            }),
            (fa.fn.andSelf = fa.fn.addBack),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return fa;
                });
        var Mb = a.jQuery,
            Nb = a.$;
        return (
            (fa.noConflict = function (b) {
                return a.$ === fa && (a.$ = Nb), b && a.jQuery === fa && (a.jQuery = Mb), fa;
            }),
            b || (a.jQuery = a.$ = fa),
            fa
        );
    }),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1) || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
})(jQuery),
    +(function (a) {
        "use strict";
        function b() {
            var a = document.createElement("bootstrap"),
                b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
            return !1;
        }
        (a.fn.emulateTransitionEnd = function (b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function () {
                c = !0;
            });
            var e = function () {
                c || a(d).trigger(a.support.transition.end);
            };
            return setTimeout(e, b), this;
        }),
            a(function () {
                (a.support.transition = b()),
                    a.support.transition &&
                        (a.event.special.bsTransitionEnd = {
                            bindType: a.support.transition.end,
                            delegateType: a.support.transition.end,
                            handle: function (b) {
                                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
                            },
                        });
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("bs.alert");
                e || c.data("bs.alert", (e = new d(this))), "string" == typeof b && e[b].call(c);
            });
        }
        var c = '[data-dismiss="alert"]',
            d = function (b) {
                a(b).on("click", c, this.close);
            };
        (d.VERSION = "3.3.6"),
            (d.TRANSITION_DURATION = 150),
            (d.prototype.close = function (b) {
                function c() {
                    g.detach().trigger("closed.bs.alert").remove();
                }
                var e = a(this),
                    f = e.attr("data-target");
                f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
                var g = a(f);
                b && b.preventDefault(),
                    g.length || (g = e.closest(".alert")),
                    g.trigger((b = a.Event("close.bs.alert"))),
                    b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
            });
        var e = a.fn.alert;
        (a.fn.alert = b),
            (a.fn.alert.Constructor = d),
            (a.fn.alert.noConflict = function () {
                return (a.fn.alert = e), this;
            }),
            a(document).on("click.bs.alert.data-api", c, d.prototype.close);
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof b && b;
                e || d.data("bs.button", (e = new c(this, f))), "toggle" == b ? e.toggle() : b && e.setState(b);
            });
        }
        var c = function (b, d) {
            (this.$element = a(b)), (this.options = a.extend({}, c.DEFAULTS, d)), (this.isLoading = !1);
        };
        (c.VERSION = "3.3.6"),
            (c.DEFAULTS = { loadingText: "loading..." }),
            (c.prototype.setState = function (b) {
                var c = "disabled",
                    d = this.$element,
                    e = d.is("input") ? "val" : "html",
                    f = d.data();
                (b += "Text"),
                    null == f.resetText && d.data("resetText", d[e]()),
                    setTimeout(
                        a.proxy(function () {
                            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? ((this.isLoading = !0), d.addClass(c).attr(c, c)) : this.isLoading && ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
                        }, this),
                        0
                    );
            }),
            (c.prototype.toggle = function () {
                var a = !0,
                    b = this.$element.closest('[data-toggle="buttons"]');
                if (b.length) {
                    var c = this.$element.find("input");
                    "radio" == c.prop("type")
                        ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active"))
                        : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")),
                        c.prop("checked", this.$element.hasClass("active")),
                        a && c.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            });
        var d = a.fn.button;
        (a.fn.button = b),
            (a.fn.button.Constructor = c),
            (a.fn.button.noConflict = function () {
                return (a.fn.button = d), this;
            }),
            a(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
                    var d = a(c.target);
                    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
                    a(b.target)
                        .closest(".btn")
                        .toggleClass("focus", /^focus(in)?$/.test(b.type));
                });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", (e = new c(this, f))), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
            });
        }
        var c = function (b, c) {
            (this.$element = a(b)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = c),
                (this.paused = null),
                (this.sliding = null),
                (this.interval = null),
                (this.$active = null),
                (this.$items = null),
                this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 600),
            (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
            (c.prototype.keydown = function (a) {
                if (!/input|textarea/i.test(a.target.tagName)) {
                    switch (a.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    a.preventDefault();
                }
            }),
            (c.prototype.cycle = function (b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
            }),
            (c.prototype.getItemIndex = function (a) {
                return (this.$items = a.parent().children(".item")), this.$items.index(a || this.$active);
            }),
            (c.prototype.getItemForDirection = function (a, b) {
                var c = this.getItemIndex(b),
                    d = ("prev" == a && 0 === c) || ("next" == a && c == this.$items.length - 1);
                if (d && !this.options.wrap) return b;
                var e = "prev" == a ? -1 : 1,
                    f = (c + e) % this.$items.length;
                return this.$items.eq(f);
            }),
            (c.prototype.to = function (a) {
                var b = this,
                    c = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                return a > this.$items.length - 1 || 0 > a
                    ? void 0
                    : this.sliding
                    ? this.$element.one("slid.bs.carousel", function () {
                          b.to(a);
                      })
                    : c == a
                    ? this.pause().cycle()
                    : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
            }),
            (c.prototype.pause = function (b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (c.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }),
            (c.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }),
            (c.prototype.slide = function (b, d) {
                var e = this.$element.find(".item.active"),
                    f = d || this.getItemForDirection(b, e),
                    g = this.interval,
                    h = "next" == b ? "left" : "right",
                    i = this;
                if (f.hasClass("active")) return (this.sliding = !1);
                var j = f[0],
                    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
                if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
                    if (((this.sliding = !0), g && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                        l && l.addClass("active");
                    }
                    var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });
                    return (
                        a.support.transition && this.$element.hasClass("slide")
                            ? (f.addClass(b),
                              f[0].offsetWidth,
                              e.addClass(h),
                              f.addClass(h),
                              e
                                  .one("bsTransitionEnd", function () {
                                      f.removeClass([b, h].join(" ")).addClass("active"),
                                          e.removeClass(["active", h].join(" ")),
                                          (i.sliding = !1),
                                          setTimeout(function () {
                                              i.$element.trigger(m);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(c.TRANSITION_DURATION))
                            : (e.removeClass("active"), f.addClass("active"), (this.sliding = !1), this.$element.trigger(m)),
                        g && this.cycle(),
                        this
                    );
                }
            });
        var d = a.fn.carousel;
        (a.fn.carousel = b),
            (a.fn.carousel.Constructor = c),
            (a.fn.carousel.noConflict = function () {
                return (a.fn.carousel = d), this;
            });
        var e = function (c) {
            var d,
                e = a(this),
                f = a(e.attr("data-target") || ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
            a(window).on("load", function () {
                a('[data-ride="carousel"]').each(function () {
                    var c = a(this);
                    b.call(c, c.data());
                });
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            var c,
                d = b.attr("data-target") || ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
            return a(d);
        }
        function c(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", (e = new d(this, f))), "string" == typeof b && e[b]();
            });
        }
        var d = function (b, c) {
            (this.$element = a(b)),
                (this.options = a.extend({}, d.DEFAULTS, c)),
                (this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        (d.VERSION = "3.3.6"),
            (d.TRANSITION_DURATION = 350),
            (d.DEFAULTS = { toggle: !0 }),
            (d.prototype.dimension = function () {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height";
            }),
            (d.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b,
                        e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && ((b = e.data("bs.collapse")), b && b.transitioning))) {
                        var f = a.Event("show.bs.collapse");
                        if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                            e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                            var g = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var h = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[g](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!a.support.transition) return h.call(this);
                            var i = a.camelCase(["scroll", g].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                        }
                    }
                }
            }),
            (d.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");
                    if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var e = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                    }
                }
            }),
            (d.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (d.prototype.getParent = function () {
                return a(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        a.proxy(function (c, d) {
                            var e = a(d);
                            this.addAriaAndCollapsedClass(b(e), e);
                        }, this)
                    )
                    .end();
            }),
            (d.prototype.addAriaAndCollapsedClass = function (a, b) {
                var c = a.hasClass("in");
                a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
            });
        var e = a.fn.collapse;
        (a.fn.collapse = c),
            (a.fn.collapse.Constructor = d),
            (a.fn.collapse.noConflict = function () {
                return (a.fn.collapse = e), this;
            }),
            a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
                var e = a(this);
                e.attr("data-target") || d.preventDefault();
                var f = b(e),
                    g = f.data("bs.collapse"),
                    h = g ? "toggle" : e.data();
                c.call(f, h);
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            var c = b.attr("data-target");
            c || ((c = b.attr("href")), (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
            var d = c && a(c);
            return d && d.length ? d : b.parent();
        }
        function c(c) {
            (c && 3 === c.which) ||
                (a(e).remove(),
                a(f).each(function () {
                    var d = a(this),
                        e = b(d),
                        f = { relatedTarget: this };
                    e.hasClass("open") &&
                        ((c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target)) ||
                            (e.trigger((c = a.Event("hide.bs.dropdown", f))), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
                }));
        }
        function d(b) {
            return this.each(function () {
                var c = a(this),
                    d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", (d = new g(this))), "string" == typeof b && d[b].call(c);
            });
        }
        var e = ".dropdown-backdrop",
            f = '[data-toggle="dropdown"]',
            g = function (b) {
                a(b).on("click.bs.dropdown", this.toggle);
            };
        (g.VERSION = "3.3.6"),
            (g.prototype.toggle = function (d) {
                var e = a(this);
                if (!e.is(".disabled, :disabled")) {
                    var f = b(e),
                        g = f.hasClass("open");
                    if ((c(), !g)) {
                        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                        var h = { relatedTarget: this };
                        if ((f.trigger((d = a.Event("show.bs.dropdown", h))), d.isDefaultPrevented())) return;
                        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
                    }
                    return !1;
                }
            }),
            (g.prototype.keydown = function (c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);
                    if ((c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled"))) {
                        var e = b(d),
                            g = e.hasClass("open");
                        if ((!g && 27 != c.which) || (g && 27 == c.which)) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                        var h = " li:not(.disabled):visible a",
                            i = e.find(".dropdown-menu" + h);
                        if (i.length) {
                            var j = i.index(c.target);
                            38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                        }
                    }
                }
            });
        var h = a.fn.dropdown;
        (a.fn.dropdown = d),
            (a.fn.dropdown.Constructor = g),
            (a.fn.dropdown.noConflict = function () {
                return (a.fn.dropdown = h), this;
            }),
            a(document)
                .on("click.bs.dropdown.data-api", c)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
                    a.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b, d) {
            return this.each(function () {
                var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", (f = new c(this, g))), "string" == typeof b ? f[b](d) : g.show && f.show(d);
            });
        }
        var c = function (b, c) {
            (this.options = c),
                (this.$body = a(document.body)),
                (this.$element = a(b)),
                (this.$dialog = this.$element.find(".modal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        a.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 300),
            (c.BACKDROP_TRANSITION_DURATION = 150),
            (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (c.prototype.toggle = function (a) {
                return this.isShown ? this.hide() : this.show(a);
            }),
            (c.prototype.show = function (b) {
                var d = this,
                    e = a.Event("show.bs.modal", { relatedTarget: b });
                this.$element.trigger(e),
                    this.isShown ||
                        e.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var e = a.support.transition && d.$element.hasClass("fade");
                            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                            var f = a.Event("shown.bs.modal", { relatedTarget: b });
                            e
                                ? d.$dialog
                                      .one("bsTransitionEnd", function () {
                                          d.$element.trigger("focus").trigger(f);
                                      })
                                      .emulateTransitionEnd(c.TRANSITION_DURATION)
                                : d.$element.trigger("focus").trigger(f);
                        }));
            }),
            (c.prototype.hide = function (b) {
                b && b.preventDefault(),
                    (b = a.Event("hide.bs.modal")),
                    this.$element.trigger(b),
                    this.isShown &&
                        !b.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        a(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
            }),
            (c.prototype.enforceFocus = function () {
                a(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        a.proxy(function (a) {
                            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (c.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.modal",
                          a.proxy(function (a) {
                              27 == a.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (c.prototype.resize = function () {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
            }),
            (c.prototype.hideModal = function () {
                var a = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
                    });
            }),
            (c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (c.prototype.backdrop = function (b) {
                var d = this,
                    e = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;
                    if (
                        ((this.$backdrop = a(document.createElement("div"))
                            .addClass("modal-backdrop " + e)
                            .appendTo(this.$body)),
                        this.$element.on(
                            "click.dismiss.bs.modal",
                            a.proxy(function (a) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                            }, this)
                        ),
                        f && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !b)
                    )
                        return;
                    f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var g = function () {
                        d.removeBackdrop(), b && b();
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
                } else b && b();
            }),
            (c.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (c.prototype.adjustDialog = function () {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
            }),
            (c.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (c.prototype.checkScrollbar = function () {
                var a = window.innerWidth;
                if (!a) {
                    var b = document.documentElement.getBoundingClientRect();
                    a = b.right - Math.abs(b.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < a), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (c.prototype.setScrollbar = function () {
                var a = parseInt(this.$body.css("padding-right") || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
            }),
            (c.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }),
            (c.prototype.measureScrollbar = function () {
                var a = document.createElement("div");
                (a.className = "modal-scrollbar-measure"), this.$body.append(a);
                var b = a.offsetWidth - a.clientWidth;
                return this.$body[0].removeChild(a), b;
            });
        var d = a.fn.modal;
        (a.fn.modal = b),
            (a.fn.modal.Constructor = c),
            (a.fn.modal.noConflict = function () {
                return (a.fn.modal = d), this;
            }),
            a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
                var d = a(this),
                    e = d.attr("href"),
                    f = a(d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))),
                    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
                d.is("a") && c.preventDefault(),
                    f.one("show.bs.modal", function (a) {
                        a.isDefaultPrevented() ||
                            f.one("hidden.bs.modal", function () {
                                d.is(":visible") && d.trigger("focus");
                            });
                    }),
                    b.call(f, g, this);
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof b && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", (e = new c(this, f))), "string" == typeof b && e[b]());
            });
        }
        var c = function (a, b) {
            (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", a, b);
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 150),
            (c.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (c.prototype.init = function (b, c, d) {
                if (
                    ((this.enabled = !0),
                    (this.type = b),
                    (this.$element = a(c)),
                    (this.options = this.getOptions(d)),
                    (this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                    (this.inState = { click: !1, hover: !1, focus: !1 }),
                    this.$element[0] instanceof document.constructor && !this.options.selector)
                )
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
                    var g = e[f];
                    if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                    else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focusin",
                            i = "hover" == g ? "mouseleave" : "focusout";
                        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = a.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }),
            (c.prototype.getOptions = function (b) {
                return (b = a.extend({}, this.getDefaults(), this.$element.data(), b)), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
            }),
            (c.prototype.getDelegateOptions = function () {
                var b = {},
                    c = this.getDefaults();
                return (
                    this._options &&
                        a.each(this._options, function (a, d) {
                            c[a] != d && (b[a] = d);
                        }),
                    b
                );
            }),
            (c.prototype.enter = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return (
                    c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c)),
                    b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
                    c.tip().hasClass("in") || "in" == c.hoverState
                        ? void (c.hoverState = "in")
                        : (clearTimeout(c.timeout),
                          (c.hoverState = "in"),
                          c.options.delay && c.options.delay.show
                              ? void (c.timeout = setTimeout(function () {
                                    "in" == c.hoverState && c.show();
                                }, c.options.delay.show))
                              : c.show())
                );
            }),
            (c.prototype.isInStateTrue = function () {
                for (var a in this.inState) if (this.inState[a]) return !0;
                return !1;
            }),
            (c.prototype.leave = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return (
                    c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c)),
                    b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
                    c.isInStateTrue()
                        ? void 0
                        : (clearTimeout(c.timeout),
                          (c.hoverState = "out"),
                          c.options.delay && c.options.delay.hide
                              ? void (c.timeout = setTimeout(function () {
                                    "out" == c.hoverState && c.hide();
                                }, c.options.delay.hide))
                              : c.hide())
                );
            }),
            (c.prototype.show = function () {
                var b = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);
                    var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (b.isDefaultPrevented() || !d) return;
                    var e = this,
                        f = this.tip(),
                        g = this.getUID(this.type);
                    this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                    var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                        i = /\s?auto?\s?/i,
                        j = i.test(h);
                    j && (h = h.replace(i, "") || "top"),
                        f
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(h)
                            .data("bs." + this.type, this),
                        this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var k = this.getPosition(),
                        l = f[0].offsetWidth,
                        m = f[0].offsetHeight;
                    if (j) {
                        var n = h,
                            o = this.getPosition(this.$viewport);
                        (h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h),
                            f.removeClass(n).addClass(h);
                    }
                    var p = this.getCalculatedOffset(h, k, l, m);
                    this.applyPlacement(p, h);
                    var q = function () {
                        var a = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type), (e.hoverState = null), "out" == a && e.leave(e);
                    };
                    a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
                }
            }),
            (c.prototype.applyPlacement = function (b, c) {
                var d = this.tip(),
                    e = d[0].offsetWidth,
                    f = d[0].offsetHeight,
                    g = parseInt(d.css("margin-top"), 10),
                    h = parseInt(d.css("margin-left"), 10);
                isNaN(g) && (g = 0),
                    isNaN(h) && (h = 0),
                    (b.top += g),
                    (b.left += h),
                    a.offset.setOffset(
                        d[0],
                        a.extend(
                            {
                                using: function (a) {
                                    d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                                },
                            },
                            b
                        ),
                        0
                    ),
                    d.addClass("in");
                var i = d[0].offsetWidth,
                    j = d[0].offsetHeight;
                "top" == c && j != f && (b.top = b.top + f - j);
                var k = this.getViewportAdjustedDelta(c, b, i, j);
                k.left ? (b.left += k.left) : (b.top += k.top);
                var l = /top|bottom/.test(c),
                    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                    n = l ? "offsetWidth" : "offsetHeight";
                d.offset(b), this.replaceArrow(m, d[0][n], l);
            }),
            (c.prototype.replaceArrow = function (a, b, c) {
                this.arrow()
                    .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
                    .css(c ? "top" : "left", "");
            }),
            (c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
            }),
            (c.prototype.hide = function (b) {
                function d() {
                    "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
                }
                var e = this,
                    f = a(this.$tip),
                    g = a.Event("hide.bs." + this.type);
                return (
                    this.$element.trigger(g),
                    g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), (this.hoverState = null), this)
                );
            }),
            (c.prototype.fixTitle = function () {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
            }),
            (c.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (c.prototype.getPosition = function (b) {
                b = b || this.$element;
                var c = b[0],
                    d = "BODY" == c.tagName,
                    e = c.getBoundingClientRect();
                null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
                var f = d ? { top: 0, left: 0 } : b.offset(),
                    g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
                    h = d ? { width: a(window).width(), height: a(window).height() } : null;
                return a.extend({}, e, g, h, f);
            }),
            (c.prototype.getCalculatedOffset = function (a, b, c, d) {
                return "bottom" == a
                    ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
                    : "top" == a
                    ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
                    : "left" == a
                    ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
                    : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
            }),
            (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                var e = { top: 0, left: 0 };
                if (!this.$viewport) return e;
                var f = (this.options.viewport && this.options.viewport.padding) || 0,
                    g = this.getPosition(this.$viewport);
                if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll,
                        i = b.top + f - g.scroll + d;
                    h < g.top ? (e.top = g.top - h) : i > g.top + g.height && (e.top = g.top + g.height - i);
                } else {
                    var j = b.left - f,
                        k = b.left + f + c;
                    j < g.left ? (e.left = g.left - j) : k > g.right && (e.left = g.left + g.width - k);
                }
                return e;
            }),
            (c.prototype.getTitle = function () {
                var a,
                    b = this.$element,
                    c = this.options;
                return (a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
            }),
            (c.prototype.getUID = function (a) {
                do a += ~~(1e6 * Math.random());
                while (document.getElementById(a));
                return a;
            }),
            (c.prototype.tip = function () {
                if (!this.$tip && ((this.$tip = a(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip;
            }),
            (c.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (c.prototype.enable = function () {
                this.enabled = !0;
            }),
            (c.prototype.disable = function () {
                this.enabled = !1;
            }),
            (c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (c.prototype.toggle = function (b) {
                var c = this;
                b && ((c = a(b.currentTarget).data("bs." + this.type)), c || ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())), a(b.currentTarget).data("bs." + this.type, c))),
                    b ? ((c.inState.click = !c.inState.click), c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
            }),
            (c.prototype.destroy = function () {
                var a = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), (a.$tip = null), (a.$arrow = null), (a.$viewport = null);
                    });
            });
        var d = a.fn.tooltip;
        (a.fn.tooltip = b),
            (a.fn.tooltip.Constructor = c),
            (a.fn.tooltip.noConflict = function () {
                return (a.fn.tooltip = d), this;
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof b && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", (e = new c(this, f))), "string" == typeof b && e[b]());
            });
        }
        var c = function (a, b) {
            this.init("popover", a, b);
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (c.VERSION = "3.3.6"),
            (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
            (c.prototype.constructor = c),
            (c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }),
            (c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b),
                    a.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof c ? "html" : "append") : "text"](c),
                    a.removeClass("fade top bottom left right in"),
                    a.find(".popover-title").html() || a.find(".popover-title").hide();
            }),
            (c.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (c.prototype.getContent = function () {
                var a = this.$element,
                    b = this.options;
                return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
            }),
            (c.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            });
        var d = a.fn.popover;
        (a.fn.popover = b),
            (a.fn.popover.Constructor = c),
            (a.fn.popover.noConflict = function () {
                return (a.fn.popover = d), this;
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(c, d) {
            (this.$body = a(document.body)),
                (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
                (this.options = a.extend({}, b.DEFAULTS, d)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
        function c(c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", (e = new b(this, f))), "string" == typeof c && e[c]();
            });
        }
        (b.VERSION = "3.3.6"),
            (b.DEFAULTS = { offset: 10 }),
            (b.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (b.prototype.refresh = function () {
                var b = this,
                    c = "offset",
                    d = 0;
                (this.offsets = []),
                    (this.targets = []),
                    (this.scrollHeight = this.getScrollHeight()),
                    a.isWindow(this.$scrollElement[0]) || ((c = "position"), (d = this.$scrollElement.scrollTop())),
                    this.$body
                        .find(this.selector)
                        .map(function () {
                            var b = a(this),
                                e = b.data("target") || b.attr("href"),
                                f = /^#./.test(e) && a(e);
                            return (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) || null;
                        })
                        .sort(function (a, b) {
                            return a[0] - b[0];
                        })
                        .each(function () {
                            b.offsets.push(this[0]), b.targets.push(this[1]);
                        });
            }),
            (b.prototype.process = function () {
                var a,
                    b = this.$scrollElement.scrollTop() + this.options.offset,
                    c = this.getScrollHeight(),
                    d = this.options.offset + c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;
                if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);
                if (g && b < e[0]) return (this.activeTarget = null), this.clear();
                for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
            }),
            (b.prototype.activate = function (b) {
                (this.activeTarget = b), this.clear();
                var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                    d = a(c).parents("li").addClass("active");
                d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
            }),
            (b.prototype.clear = function () {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            });
        var d = a.fn.scrollspy;
        (a.fn.scrollspy = c),
            (a.fn.scrollspy.Constructor = b),
            (a.fn.scrollspy.noConflict = function () {
                return (a.fn.scrollspy = d), this;
            }),
            a(window).on("load.bs.scrollspy.data-api", function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);
                    c.call(b, b.data());
                });
            });
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", (e = new c(this))), "string" == typeof b && e[b]();
            });
        }
        var c = function (b) {
            this.element = a(b);
        };
        (c.VERSION = "3.3.6"),
            (c.TRANSITION_DURATION = 150),
            (c.prototype.show = function () {
                var b = this.element,
                    c = b.closest("ul:not(.dropdown-menu)"),
                    d = b.data("target");
                if ((d || ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))), !b.parent("li").hasClass("active"))) {
                    var e = c.find(".active:last a"),
                        f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                        g = a.Event("show.bs.tab", { relatedTarget: e[0] });
                    if ((e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented())) {
                        var h = a(d);
                        this.activate(b.closest("li"), c),
                            this.activate(h, h.parent(), function () {
                                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                            });
                    }
                }
            }),
            (c.prototype.activate = function (b, d, e) {
                function f() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
                        b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        e && e();
                }
                var g = d.find("> .active"),
                    h = e && a.support.transition && ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
                g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
            });
        var d = a.fn.tab;
        (a.fn.tab = b),
            (a.fn.tab.Constructor = c),
            (a.fn.tab.noConflict = function () {
                return (a.fn.tab = d), this;
            });
        var e = function (c) {
            c.preventDefault(), b.call(a(this), "show");
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
    })(jQuery),
    +(function (a) {
        "use strict";
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof b && b;
                e || d.data("bs.affix", (e = new c(this, f))), "string" == typeof b && e[b]();
            });
        }
        var c = function (b, d) {
            (this.options = a.extend({}, c.DEFAULTS, d)),
                (this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = a(b)),
                (this.affixed = null),
                (this.unpin = null),
                (this.pinnedOffset = null),
                this.checkPosition();
        };
        (c.VERSION = "3.3.6"),
            (c.RESET = "affix affix-top affix-bottom"),
            (c.DEFAULTS = { offset: 0, target: window }),
            (c.prototype.getState = function (a, b, c, d) {
                var e = this.$target.scrollTop(),
                    f = this.$element.offset(),
                    g = this.$target.height();
                if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
                if ("bottom" == this.affixed) return null != c ? (e + this.unpin <= f.top ? !1 : "bottom") : a - d >= e + g ? !1 : "bottom";
                var h = null == this.affixed,
                    i = h ? e : f.top,
                    j = h ? g : b;
                return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
            }),
            (c.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(c.RESET).addClass("affix");
                var a = this.$target.scrollTop(),
                    b = this.$element.offset();
                return (this.pinnedOffset = b.top - a);
            }),
            (c.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1);
            }),
            (c.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var b = this.$element.height(),
                        d = this.options.offset,
                        e = d.top,
                        f = d.bottom,
                        g = Math.max(a(document).height(), a(document.body).height());
                    "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                    var h = this.getState(g, b, e, f);
                    if (this.affixed != h) {
                        null != this.unpin && this.$element.css("top", "");
                        var i = "affix" + (h ? "-" + h : ""),
                            j = a.Event(i + ".bs.affix");
                        if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
                        (this.affixed = h),
                            (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(c.RESET)
                                .addClass(i)
                                .trigger(i.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == h && this.$element.offset({ top: g - b - f });
                }
            });
        var d = a.fn.affix;
        (a.fn.affix = b),
            (a.fn.affix.Constructor = c),
            (a.fn.affix.noConflict = function () {
                return (a.fn.affix = d), this;
            }),
            a(window).on("load", function () {
                a('[data-spy="affix"]').each(function () {
                    var c = a(this),
                        d = c.data();
                    (d.offset = d.offset || {}), null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
                });
            });
    })(jQuery),
    (function (a) {
        function b() {
            window.addEventListener(
                "scroll",
                function (a) {
                    e || ((e = !0), setTimeout(c, 250));
                },
                !1
            );
        }
        function c() {
            var b = d(),
                c = a(".animated-header");
            b >= f ? c.addClass("animated-header-scroll") : c.removeClass("animated-header-scroll"), (e = !1);
        }
        function d() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        var e = !1,
            f = 300;
        b();
    })(jQuery),
    !(function (a, b) {
        "function" == typeof define && define.amd ? define([], b(a)) : "object" == typeof exports ? (module.exports = b(a)) : (a.smoothScroll = b(a));
    })("undefined" != typeof global ? global : this.window || this.global, function (a) {
        "use strict";
        var b,
            c,
            d,
            e,
            f,
            g = {},
            h = "querySelector" in document && "addEventListener" in a && "onhashchange" in a,
            i = { selector: "[data-scroll]", selectorHeader: "[data-scroll-header]", speed: 500, easing: "easeInOutCubic", offset: 0, scrollOnLoad: !0, callback: function () {} },
            j = function () {
                var a = {},
                    b = !1,
                    c = 0,
                    d = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && ((b = arguments[0]), c++);
                for (
                    var e = function (c) {
                        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b && "[object Object]" === Object.prototype.toString.call(c[d]) ? (a[d] = j(!0, a[d], c[d])) : (a[d] = c[d]));
                    };
                    d > c;
                    c++
                ) {
                    var f = arguments[c];
                    e(f);
                }
                return a;
            },
            k = function (a) {
                return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
            },
            l = function (a, b) {
                var c,
                    d,
                    e = b.charAt(0),
                    f = "classList" in document.documentElement;
                for ("[" === e && ((b = b.substr(1, b.length - 2)), (c = b.split("=")), c.length > 1 && ((d = !0), (c[1] = c[1].replace(/"/g, "").replace(/'/g, "")))); a && a !== document; a = a.parentNode) {
                    if ("." === e)
                        if (f) {
                            if (a.classList.contains(b.substr(1))) return a;
                        } else if (new RegExp("(^|\\s)" + b.substr(1) + "(\\s|$)").test(a.className)) return a;
                    if ("#" === e && a.id === b.substr(1)) return a;
                    if ("[" === e && a.hasAttribute(c[0])) {
                        if (!d) return a;
                        if (a.getAttribute(c[0]) === c[1]) return a;
                    }
                    if (a.tagName.toLowerCase() === b) return a;
                }
                return null;
            };
        g.escapeCharacters = function (a) {
            "#" === a.charAt(0) && (a = a.substr(1));
            for (var b, c = String(a), d = c.length, e = -1, f = "", g = c.charCodeAt(0); ++e < d; ) {
                if (((b = c.charCodeAt(e)), 0 === b)) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                f +=
                    (b >= 1 && 31 >= b) || 127 == b || (0 === e && b >= 48 && 57 >= b) || (1 === e && b >= 48 && 57 >= b && 45 === g)
                        ? "\\" + b.toString(16) + " "
                        : b >= 128 || 45 === b || 95 === b || (b >= 48 && 57 >= b) || (b >= 65 && 90 >= b) || (b >= 97 && 122 >= b)
                        ? c.charAt(e)
                        : "\\" + c.charAt(e);
            }
            return "#" + f;
        };
        var m = function (a, b) {
                var c;
                return (
                    "easeInQuad" === a && (c = b * b),
                    "easeOutQuad" === a && (c = b * (2 - b)),
                    "easeInOutQuad" === a && (c = 0.5 > b ? 2 * b * b : -1 + (4 - 2 * b) * b),
                    "easeInCubic" === a && (c = b * b * b),
                    "easeOutCubic" === a && (c = --b * b * b + 1),
                    "easeInOutCubic" === a && (c = 0.5 > b ? 4 * b * b * b : (b - 1) * (2 * b - 2) * (2 * b - 2) + 1),
                    "easeInQuart" === a && (c = b * b * b * b),
                    "easeOutQuart" === a && (c = 1 - --b * b * b * b),
                    "easeInOutQuart" === a && (c = 0.5 > b ? 8 * b * b * b * b : 1 - 8 * --b * b * b * b),
                    "easeInQuint" === a && (c = b * b * b * b * b),
                    "easeOutQuint" === a && (c = 1 + --b * b * b * b * b),
                    "easeInOutQuint" === a && (c = 0.5 > b ? 16 * b * b * b * b * b : 1 + 16 * --b * b * b * b * b),
                    c || b
                );
            },
            n = function (a, b, c) {
                var d = 0;
                if (a.offsetParent)
                    do (d += a.offsetTop), (a = a.offsetParent);
                    while (a);
                return (d = d - b - c), d >= 0 ? d : 0;
            },
            o = function () {
                return Math.max(
                    a.document.body.scrollHeight,
                    a.document.documentElement.scrollHeight,
                    a.document.body.offsetHeight,
                    a.document.documentElement.offsetHeight,
                    a.document.body.clientHeight,
                    a.document.documentElement.clientHeight
                );
            },
            p = function (a) {
                return a && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(a) : {};
            },
            q = function (a) {
                return null === a ? 0 : k(a) + a.offsetTop;
            };
        g.animateScroll = function (b, c, f) {
            var g = p(c ? c.getAttribute("data-options") : null),
                h = j(h || i, f || {}, g),
                k = "[object Number]" === Object.prototype.toString.call(b) ? !0 : !1,
                l = k ? null : a.document.querySelector(b);
            if (k || l) {
                var r = a.pageYOffset;
                d || (d = a.document.querySelector(h.selectorHeader)), e || (e = q(d));
                var s,
                    t,
                    u,
                    v = k ? b : n(l, e, parseInt(h.offset, 10)),
                    w = v - r,
                    x = o(),
                    y = 0,
                    z = function (d, e, f) {
                        var g = a.pageYOffset;
                        (d == e || g == e || a.innerHeight + g >= x) && (clearInterval(f), l && l.focus(), h.callback(b, c));
                    },
                    A = function () {
                        (y += 16), (t = y / parseInt(h.speed, 10)), (t = t > 1 ? 1 : t), (u = r + w * m(h.easing, t)), a.scrollTo(0, Math.floor(u)), z(u, v, s);
                    },
                    B = function () {
                        s = setInterval(A, 16);
                    };
                0 === a.pageYOffset && a.scrollTo(0, 0), B();
            }
        };
        var r = function () {
                var c = a.location.hash;
                if ((f && ((f.id = f.getAttribute("data-scroll-id")), (f = null)), c)) {
                    c = g.escapeCharacters(c);
                    var d = document.querySelector(b.select + '[href*="' + c + '"]');
                    g.animateScroll(c, d, b);
                }
            },
            s = function (c) {
                var d = l(c.target, b.selector);
                if (d && d.hash) {
                    var e = g.escapeCharacters(d.hash);
                    if (e === (a.location.hash || "#top")) return void g.animateScroll(e, d, b);
                    (f = document.querySelector(e)), f && (f.setAttribute("data-scroll-id", f.id), (f.id = ""));
                }
            },
            t = function (a) {
                c ||
                    (c = setTimeout(function () {
                        (c = null), (e = q(d));
                    }, 66));
            };
        return (
            (g.destroy = function () {
                b && (document.removeEventListener("click", s, !1), a.removeEventListener("hashchange", r, !1), a.removeEventListener("resize", t, !1), (b = null), (c = null), (d = null), (e = null), (f = null));
            }),
            (g.init = function (c) {
                h &&
                    (g.destroy(),
                    (b = j(i, c || {})),
                    (d = a.document.querySelector(b.selectorHeader)),
                    (e = q(d)),
                    document.addEventListener("click", s, !1),
                    a.addEventListener("hashchange", r, !1),
                    d && a.addEventListener("resize", t, !1),
                    b.scrollOnLoad &&
                        (setTimeout(function () {
                            window.scrollTo(0, 0);
                        }, 1),
                        r()));
            }),
            g
        );
    }),
    function () {
        var a,
            b,
            c,
            d,
            e,
            f = function (a, b) {
                return function () {
                    return a.apply(b, arguments);
                };
            },
            g =
                [].indexOf ||
                function (a) {
                    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
                    return -1;
                };
        (b = (function () {
            function a() {}
            return (
                (a.prototype.extend = function (a, b) {
                    var c, d;
                    for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
                    return a;
                }),
                (a.prototype.isMobile = function (a) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
                }),
                (a.prototype.createEvent = function (a, b, c, d) {
                    var e;
                    return (
                        null == b && (b = !1),
                        null == c && (c = !1),
                        null == d && (d = null),
                        null != document.createEvent
                            ? ((e = document.createEvent("CustomEvent")), e.initCustomEvent(a, b, c, d))
                            : null != document.createEventObject
                            ? ((e = document.createEventObject()), (e.eventType = a))
                            : (e.eventName = a),
                        e
                    );
                }),
                (a.prototype.emitEvent = function (a, b) {
                    return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
                }),
                (a.prototype.addEvent = function (a, b, c) {
                    return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : (a[b] = c);
                }),
                (a.prototype.removeEvent = function (a, b, c) {
                    return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
                }),
                (a.prototype.innerHeight = function () {
                    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
                }),
                a
            );
        })()),
            (c =
                this.WeakMap ||
                this.MozWeakMap ||
                (c = (function () {
                    function a() {
                        (this.keys = []), (this.values = []);
                    }
                    return (
                        (a.prototype.get = function (a) {
                            var b, c, d, e, f;
                            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (((c = f[b]), c === a)) return this.values[b];
                        }),
                        (a.prototype.set = function (a, b) {
                            var c, d, e, f, g;
                            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (((d = g[c]), d === a)) return void (this.values[c] = b);
                            return this.keys.push(a), this.values.push(b);
                        }),
                        a
                    );
                })())),
            (a =
                this.MutationObserver ||
                this.WebkitMutationObserver ||
                this.MozMutationObserver ||
                (a = (function () {
                    function a() {
                        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
                    }
                    return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
                })())),
            (d =
                this.getComputedStyle ||
                function (a) {
                    return (
                        (this.getPropertyValue = function (b) {
                            var c;
                            return (
                                "float" === b && (b = "styleFloat"),
                                e.test(b) &&
                                    b.replace(e, function (a, b) {
                                        return b.toUpperCase();
                                    }),
                                (null != (c = a.currentStyle) ? c[b] : void 0) || null
                            );
                        }),
                        this
                    );
                }),
            (e = /(\-([a-z]){1})/g),
            (this.WOW = (function () {
                function e(a) {
                    null == a && (a = {}),
                        (this.scrollCallback = f(this.scrollCallback, this)),
                        (this.scrollHandler = f(this.scrollHandler, this)),
                        (this.resetAnimation = f(this.resetAnimation, this)),
                        (this.start = f(this.start, this)),
                        (this.scrolled = !0),
                        (this.config = this.util().extend(a, this.defaults)),
                        (this.animationNameCache = new c()),
                        (this.wowEvent = this.util().createEvent(this.config.boxClass));
                }
                return (
                    (e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null }),
                    (e.prototype.init = function () {
                        var a;
                        return (
                            (this.element = window.document.documentElement),
                            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                            (this.finished = [])
                        );
                    }),
                    (e.prototype.start = function () {
                        var b, c, d, e;
                        if (
                            ((this.stopped = !1),
                            (this.boxes = function () {
                                var a, c, d, e;
                                for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
                                return e;
                            }.call(this)),
                            (this.all = function () {
                                var a, c, d, e;
                                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
                                return e;
                            }.call(this)),
                            this.boxes.length)
                        )
                            if (this.disabled()) this.resetStyle();
                            else for (e = this.boxes, c = 0, d = e.length; d > c; c++) (b = e[c]), this.applyStyle(b, !0);
                        return (
                            this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))),
                            this.config.live
                                ? new a(
                                      (function (a) {
                                          return function (b) {
                                              var c, d, e, f, g;
                                              for (g = [], c = 0, d = b.length; d > c; c++)
                                                  (f = b[c]),
                                                      g.push(
                                                          function () {
                                                              var a, b, c, d;
                                                              for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) (e = c[a]), d.push(this.doSync(e));
                                                              return d;
                                                          }.call(a)
                                                      );
                                              return g;
                                          };
                                      })(this)
                                  ).observe(document.body, { childList: !0, subtree: !0 })
                                : void 0
                        );
                    }),
                    (e.prototype.stop = function () {
                        return (this.stopped = !0), this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
                    }),
                    (e.prototype.sync = function () {
                        return a.notSupported ? this.doSync(this.element) : void 0;
                    }),
                    (e.prototype.doSync = function (a) {
                        var b, c, d, e, f;
                        if ((null == a && (a = this.element), 1 === a.nodeType)) {
                            for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)
                                (b = e[c]), g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push((this.scrolled = !0))) : f.push(void 0);
                            return f;
                        }
                    }),
                    (e.prototype.show = function (a) {
                        return (
                            this.applyStyle(a),
                            (a.className = a.className + " " + this.config.animateClass),
                            null != this.config.callback && this.config.callback(a),
                            this.util().emitEvent(a, this.wowEvent),
                            this.util().addEvent(a, "animationend", this.resetAnimation),
                            this.util().addEvent(a, "oanimationend", this.resetAnimation),
                            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                            a
                        );
                    }),
                    (e.prototype.applyStyle = function (a, b) {
                        var c, d, e;
                        return (
                            (d = a.getAttribute("data-wow-duration")),
                            (c = a.getAttribute("data-wow-delay")),
                            (e = a.getAttribute("data-wow-iteration")),
                            this.animate(
                                (function (f) {
                                    return function () {
                                        return f.customStyle(a, b, d, c, e);
                                    };
                                })(this)
                            )
                        );
                    }),
                    (e.prototype.animate = (function () {
                        return "requestAnimationFrame" in window
                            ? function (a) {
                                  return window.requestAnimationFrame(a);
                              }
                            : function (a) {
                                  return a();
                              };
                    })()),
                    (e.prototype.resetStyle = function () {
                        var a, b, c, d, e;
                        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), e.push((a.style.visibility = "visible"));
                        return e;
                    }),
                    (e.prototype.resetAnimation = function (a) {
                        var b;
                        return a.type.toLowerCase().indexOf("animationend") >= 0 ? ((b = a.target || a.srcElement), (b.className = b.className.replace(this.config.animateClass, "").trim())) : void 0;
                    }),
                    (e.prototype.customStyle = function (a, b, c, d, e) {
                        return (
                            b && this.cacheAnimationName(a),
                            (a.style.visibility = b ? "hidden" : "visible"),
                            c && this.vendorSet(a.style, { animationDuration: c }),
                            d && this.vendorSet(a.style, { animationDelay: d }),
                            e && this.vendorSet(a.style, { animationIterationCount: e }),
                            this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }),
                            a
                        );
                    }),
                    (e.prototype.vendors = ["moz", "webkit"]),
                    (e.prototype.vendorSet = function (a, b) {
                        var c, d, e, f;
                        d = [];
                        for (c in b)
                            (e = b[c]),
                                (a["" + c] = e),
                                d.push(
                                    function () {
                                        var b, d, g, h;
                                        for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) (f = g[b]), h.push((a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e));
                                        return h;
                                    }.call(this)
                                );
                        return d;
                    }),
                    (e.prototype.vendorCSS = function (a, b) {
                        var c, e, f, g, h, i;
                        for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
                        return g;
                    }),
                    (e.prototype.animationName = function (a) {
                        var b;
                        try {
                            b = this.vendorCSS(a, "animation-name").cssText;
                        } catch (c) {
                            b = d(a).getPropertyValue("animation-name");
                        }
                        return "none" === b ? "" : b;
                    }),
                    (e.prototype.cacheAnimationName = function (a) {
                        return this.animationNameCache.set(a, this.animationName(a));
                    }),
                    (e.prototype.cachedAnimationName = function (a) {
                        return this.animationNameCache.get(a);
                    }),
                    (e.prototype.scrollHandler = function () {
                        return (this.scrolled = !0);
                    }),
                    (e.prototype.scrollCallback = function () {
                        var a;
                        return !this.scrolled ||
                            ((this.scrolled = !1),
                            (this.boxes = function () {
                                var b, c, d, e;
                                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                                return e;
                            }.call(this)),
                            this.boxes.length || this.config.live)
                            ? void 0
                            : this.stop();
                    }),
                    (e.prototype.offsetTop = function (a) {
                        for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
                        for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
                        return b;
                    }),
                    (e.prototype.isVisible = function (a) {
                        var b, c, d, e, f;
                        return (
                            (c = a.getAttribute("data-wow-offset") || this.config.offset),
                            (f = window.pageYOffset),
                            (e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c),
                            (d = this.offsetTop(a)),
                            (b = d + a.clientHeight),
                            e >= d && b >= f
                        );
                    }),
                    (e.prototype.util = function () {
                        return null != this._util ? this._util : (this._util = new b());
                    }),
                    (e.prototype.disabled = function () {
                        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
                    }),
                    e
                );
            })());
    }.call(this),
    (function () {
        "use strict";
        function a() {
            smoothScroll.init();
            var a = new WOW({ mobile: !1 });
            a.init(), b();
        }
        function b() {
            var a = ["Python", "Django", "Flask", "FastAPI", "PyQt", "Tkinter", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV", "MySQL", "PostgreSQL", "SQLite", "RESTful APIs", "Web scraping"],
                b = [
                    "Penetration Testing",
                    "Network Scanning",
                    "Vulnerability Assessment",
                    "Exploit Development",
                    "Metasploit",
                    "Wireshark",
                    "Burp Suite",
                    "Nmap",
                    "SQL Injection",
                    "Cross-Site Scripting (XSS)",
                    "OWASP Top Ten",
                    "Web Application Security",
                    "Reverse Engineering",
                    "Cryptography",
                    "Kali Linux",
                    "Python Scripting",
                ],
                c = ["Linux", "HTML5", "CSS3", "git", "Heroku"],
                d = ["btn-info", "btn-success", "btn-danger", "btn-primary", "btn-warning"],
                e = 0;
            $.each(a, function (a, b) {
                5 === e && (e = 0), $(".tags.skills-1").append('<div class="tag label  ' + d[e] + ' lg"><span>' + b + "</span></div>"), e++;
            }),
                $.each(b, function (a, b) {
                    5 === e && (e = 0), $(".tags.skills-2").append('<div class="tag label  ' + d[e] + ' lg"><span>' + b + "</span></div>"), e++;
                }),
                $.each(c, function (a, b) {
                    5 === e && (e = 0), $(".tags.skills-3").append('<div class="tag label  ' + d[e] + ' lg"><span>' + b + "</span></div>"), e++;
                });
        }
        a();
    })();
