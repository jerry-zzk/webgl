! function(c, s, y) {
    "use strict";
    var n = "ht";
    if (!c[n]) {
        ! function() {
            Date.now && Date.prototype.getTime || (Date.now = function() {
                return (new Date).getTime()
            }), c.performance && c.performance.now || function() {
                var p = Date.now();
                c.performance || (c.performance = {}), c.performance.now = function() {
                    return Date.now() - p
                }
            }();
            for (var w = Date.now(), r = 16, z = ["ms", "moz", "webkit", "o"], H = 0; H < z.length && !c.requestAnimationFrame; ++H) c.requestAnimationFrame = c[z[H] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[z[H] + "CancelAnimationFrame"] || c[z[H] + "CancelRequestAnimationFrame"];
            c.requestAnimationFrame || (c.requestAnimationFrame = function(l) {
                var P = Date.now(),
                    p = r + w - P;
                return 0 > p && (p = 0), w = P, c.setTimeout(function() {
                    w = Date.now(), l(performance.now())
                }, p)
            }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function(R) {
                return c.clearTimeout(R)
            })
        }();
        var f, G, L, o, U = c.document,
            r = null,
            D = c[n] = {},
            p = c[n + "config"],
            S = D.Default = p && p.Default || {},
            $ = D.Style = p && p.Style || {},
            Z = D.Color = p && p.Color || {},
            J = D.IsGetter = p && p.IsGetter || {},
            M = Math,
            T = M.round,
            R = M.floor,
            P = M.ceil,
            Q = M.sqrt,
            v = M.max,
            I = M.min,
            E = M.abs,
            m = M.cos,
            j = M.acos,
            q = M.sin,
            d = M.pow,
            _ = M.asin,
            B = M.PI,
            C = 2 * B,
            F = B / 2,
            l = M.tan,
            H = M.atan2,
            b = M.random,
            O = !1,
            Y = !1,
            t = c.parseInt || global.parseInt,
            w = "2017-07-01",
            X = function() {
                try {
                    return c.navigator.platform.indexOf("Win") > -1
                } catch (a) {}
            }(),
            g = function(u) {
                return u * u
            },
            V = c.setTimeout,
            e = c.clearTimeout,
            z = c.location,
            i = c.navigator ? c.navigator.userAgent.toLowerCase() : "",
            N = function(y) {
                return y.test(i)
            },
            K = N(/msie/) || N(/trident/),
            W = N(/msie 10/),
            A = N(/edge/),
            u = N(/firefox/),
            a = N(/mac/),
            h = S.isTouchable === y ? X ? !1 : U ? "ontouchend" in U : !1 : S.isTouchable,
            x = "default",
            ze = "single",
            Im = "multiple",
            nh = "front",
            Ym = "back",
            fp = "left",
            th = "right",
            Un = "top",
            Hn = "bottom",
            Vf = "center",
            is = "eye",
            bo = "middle",
            In = "east",
            Mg = "west",
            Nf = "north",
            dq = "none",
            Yg = "px",
            _k = "absolute",
            ud = "border",
            oh = "triangle",
            li = "rect",
            Cm = "circle",
            Wf = "cylinder",
            Di = "shape",
            nn = "items",
            Wi = "normal",
            Nk = "remove",
            Kr = "clear",
            kk = "width",
            uk = "height",
            lc = "ingroup",
            xf = "check",
            dr = "uncheck",
            ti = "radio",
            Dq = "radioOn",
            Jp = "radioOff",
            ai = "points",
            kf = "values",
            Pm = "series",
            go = "body",
            Vi = "label",
            tj = "label2",
            Qe = "note",
            Gl = "note2",
            Oq = "icons",
            Bl = "labelFont",
            mk = "labelColor",
            Tb = "labelSelectColor",
            qd = "note.expanded",
            Vp = "note2.expanded",
            tf = "edge.expanded",
            Hc = "edge.points",
            cb = "edge.type",
            Ll = "rotation",
            cg = "getRotation",
            Dk = "setRotation",
            se = "hidden",
            Jj = "visible",
            Hf = "tuv",
            hb = "no",
            wo = "select",
            Wr = "currentSubGraph",
            zd = "selectBackground",
            Yp = "autoMakeVisible",
            td = "autoHideScrollBar",
            ho = "scrollBarColor",
            ld = "scrollBarSize",
            pg = "indent",
            En = "rowHeight",
            Ih = "columnLineColor",
            Xp = "rowLineColor",
            Lk = "columnLineVisible",
            pp = "rowLineVisible",
            Bf = "visibleFunc",
            kl = "expandIcon",
            nr = "collapseIcon",
            Sl = "checkMode",
            Wl = "sortFunc",
            kb = "editable",
            $n = "batchEditable",
            qj = "tristate",
            Xd = "asc",
            ie = "desc",
            Ve = "position",
            jk = "elevation",
            ib = "children",
            Ec = "translateX",
            Kk = "translateY",
            Tr = "dataModel",
            Cb = "maxSize",
            $o = "shape3d",
            vo = "shape3d.resolution",
            $e = "shape3d.visible",
            hh = "shape3d.from.visible",
            On = "shape3d.to.visible",
            Rq = "shape3d.top.visible",
            Zi = "shape3d.bottom.visible",
            Ko = "repeat.uv.length",
            $d = "serializeValue",
            xe = "deserializeValue",
            qg = "centerUniform",
            ar = "rgba(255,255,255,0)",
            ml = "style",
            te = "attr",
            Zd = "field",
            Gq = "string",
            je = "boolean",
            Jc = "color",
            lg = "int",
            dh = "number",
            Tn = "ew-resize",
            gs = "ns-resize",
            yc = "pointer",
            no = "auto",
            eo = "mousedown",
            lb = "mousemove",
            Zf = "mouseup",
            ei = "mouseout",
            tg = "touchstart",
            mi = "touchmove",
            cd = "touchend",
            Tc = "keydown",
            Kd = "keyup",
            be = u ? "DOMMouseScroll" : "mousewheel",
            Zb = h ? [tg, mi, cd, Tc, Kd, "keypress", "input", "contextmenu"] : [Tc, Kd, "keypress", "input", eo, lb, Zf, ei, be, "contextmenu", "mouseenter", "mouseleave", "mouseout"],
            Rl = r,
            Fi = r,
            Em = r,
            fd = Zf.length,
            nd = function() {
                Em && (e(Em.timeout), Em = r)
            },
            Rk = function() {
                Em && Ur(Em.e, Em.info)
            };
        c.addEventListener && (h || (c.addEventListener(ei, function() {
            nd()
        }, !1), c.addEventListener(be, function() {
            Fk()
        }, !1)), c.addEventListener(Kd, function(q) {
            91 === q.keyCode ? zm = {} : delete zm[q.keyCode]
        }, !0), c.addEventListener(Tc, function(I) {
            zm[I.keyCode] = !0
        }, !0));
        var oe, cl, or, jj = !1,
            Li = r,
            Id = r,
            dp = {},
            wl = {},
            Kp = {},
            Qr = {},
            gl = {},
            zm = {},
            cc = {},
            cp = {},
            ue = {},
            mf = /.json$/,
            Cc = {},
            Pk = [],
            Mq = {},
            Ui = r,
            hi = r,
            lr = function() {},
            Sr = function() {
                throw "Oops!"
            },
            zf = [0, 0, 0],
            Fe = [0, 0, 0, 0],
            Kh = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            hk = r,
            Gp = r,
            gm = r,
            Ef = function($) {
                Gp && !$._72O && (gm || (gm = {}), gm[$._72O = Vj()] = $), oe != r ? ok() < .05 && o && !cl && (me = nd) : me = fc
            },
            hj = function(k, O, b, Y) {
                Gp || (Gp = {});
                var F = Gp[k];
                if (F) {
                    if (F.url === O) return;
                    F.image ? (F.image.onload = lr, F.image.onerror = lr) : F.request && (F.request.onload = lr, F.request.onerror = lr)
                }
                if (mf.test(O)) {
                    var H = new XMLHttpRequest;
                    if (Gp[k] = {
                            request: H,
                            url: O
                        }, H.overrideMimeType("text/plain"), S.convertURL && (O = S.convertURL(O)), O.data) {
                        var I = S.parse(O.data);
                        gd(k, I), S.handleImageLoaded(k, I)
                    } else H.open("GET", encodeURI(O), !0), H.onload = function(o) {
                        if (200 === this.status || 0 === this.status) {
                            var n = S.parse(o.target.response);
                            gd(k, n), S.handleImageLoaded(k, n)
                        } else gd(k, S.handleUnfoundImage(k, O) || r)
                    }, H.onerror = function() {
                        gd(k, S.handleUnfoundImage(k, O) || r)
                    }, H.send(null)
                } else {
                    var I = new Image;
                    Gp[k] = {
                        image: I,
                        url: O
                    }, K && O.toLowerCase().indexOf(".svg") > 0 ? (U.body.appendChild(I), I.style.visibility = "hidden", I.onload = function() {
                        V(function() {
                            if (b && (I.width = b), Y && (I.height = Y), !I.width || !I.height) {
                                var x = I.width || I.clientWidth,
                                    r = I.height || I.clientHeight;
                                I.width = x, I.height = r
                            }
                            S.handleImageLoaded(k, I), gd(k, I), U.body.removeChild(I), I.style.visibility = ""
                        }, 150)
                    }, I.onerror = function() {
                        gd(k, S.handleUnfoundImage(k, O) || r), U.body.removeChild(I), I.style.visibility = ""
                    }) : (I.onload = function() {
                        b && (I.width = b), Y && (I.height = Y), S.handleImageLoaded(k, I), gd(k, I)
                    }, I.onerror = function() {
                        gd(k, S.handleUnfoundImage(k, O) || r)
                    }), /^data:image/.test(O) || (S.convertURL && (O = S.convertURL(O)), /^data:image/.test(O) || (O += O.indexOf("?") >= 0 ? "&__ht__=" + To() : "?" + To(), O = encodeURI(O))), I.src = O
                }
            },
            gd = function(i, M) {
                if (wl[i] = M, delete Gp[i], fo(Gp) && (Gp = r, gm)) {
                    for (var I in gm) {
                        var x = gm[I];
                        x._2O && (x._2O = {}), x.invalidateAll && x.invalidateAll(y, "imageLoaded", i), x.redraw && x.redraw(), x.iv(), delete x._72O
                    }
                    gm = r
                }
                if (M && gm)
                    for (var I in gm) {
                        var x = gm[I];
                        x.invalidateAll && x.invalidateAll(y, "imageLoading", i), x.redraw && x.redraw(), x.iv()
                    }
            },
            To = function() {
                return c.performance && c.performance.now ? c.performance.now() : Date.now()
            },
            Qb = function(Q, T) {
                T ? e(Q) : c.cancelAnimationFrame(Q)
            },
            $q = function(G, m, L) {
                return {
                    width: G,
                    height: m,
                    comps: _o(L) ? L : [L]
                }
            },
            Nb = function(k, F) {
                return {
                    type: Cm,
                    rect: [k, F, 1.6, 1.6],
                    borderWidth: 1,
                    borderColor: Tg,
                    gradient: bl,
                    gradientColor: vp,
                    background: Tg
                }
            },
            Ti = function(g, d) {
                return $q(16, 16, {
                    type: oh,
                    rect: [4, 4, 10, 8],
                    background: g,
                    rotation: d ? 1.57 : 3.14
                })
            },
            sq = function(s, c) {
                return $q(16, 16, {
                    type: oh,
                    rect: [4, 4, 8, 7],
                    background: s,
                    rotation: c ? 3.14 : 0
                })
            },
            un = function(d) {
                var B = d._orientation;
                return "horizontal" === B || "h" === B
            },
            _q = function(p) {
                var $ = r || 4,
                    z = r || 1,
                    N = r || 1;
                0 > $ ? $ = 0 : $ > .25 && ($ = .25);
                var P, Z, K, d, t, k, I, V = .5,
                    O = [],
                    l = [],
                    x = [],
                    S = C / N,
                    Y = C / z,
                    e = V - $;
                for (Z = 0; z >= Z; Z++)
                    for (d = -B + Z * Y, k = m(d), t = q(d), P = 0; N >= P; P++) K = P * S, I = e + $ * k, O.push(m(K) * I, t * $, -q(K) * I), (G = p) && l.push(P / N, 1 - Z / z);
                for (Z = 0; z > Z; Z++) {
                    var w = Z * (N + 1),
                        R = (Z + 1) * (N + 1);
                    for (P = 0; N > P; P++) x.push(w + P, R + P + 1, R + P, w + P, w + P + 1, R + P + 1), ad.z = io.z = p
                }
            },
            Vl = function(v) {
                var D = 2,
                    R = 0;
                for (var i in v) i.length === D && t(i, 32) === jr && (Ui = hi = v[i]), R++;
                return R
            },
            Qf = function(k, i, f, U) {
                return f || (f = h ? 5 : 3, f /= U || 1), {
                    x: k - f,
                    y: i - f,
                    width: 2 * f,
                    height: 2 * f
                }
            },
            Nr = function(U, i, s, H) {
                var D = this;
                i || (i = h ? 5 : 3, s = 20, H = 20);
                var A = {
                    x: U,
                    y: i,
                    width: s,
                    height: H
                };
                if (s)
                    for (var g = 0; s > g; g++)
                        if (3 === s) H = 20;
                        else
                            for (var z = 0; H > z; z++) D = c ? c : s;
                var X = {
                    x: B,
                    y: 2 * B
                };
                if (db(A, X)) {
                    var q = uk[0] + Un[0] + Kr[1];
                    Pd[is] = D[q], D[q] = qe[is]
                }
            },
            Rm = function(T) {
                return (/ble$/.test(T) || /ed$/.test(T) || J[T] ? "is" : "get") + T.charAt(0).toUpperCase() + T.slice(1)
            },
            qe = function(x) {
                return "set" + x.charAt(0).toUpperCase() + x.slice(1)
            },
            Rr = function(m) {
                return typeof m === Gq || m instanceof String
            },
            dl = function(I) {
                return typeof I === dh
            },
            fc = function(f) {
                return typeof f === je
            },
            Je = function(d) {
                return d && "object" == typeof d
            },
            eh = function(O) {
                return "function" == typeof O
            },
            _o = function(J) {
                return J instanceof Array
            },
            hg = function(N) {
                return N instanceof pm
            },
            Mr = function(f) {
                return _o(f) ? new pm(f) : f
            },
            Ac = function(Y) {
                return Y instanceof bs
            },
            _g = function(m) {
                return m instanceof vm
            },
            rn = function(N) {
                return N instanceof _d
            },
            km = function(A) {
                return A instanceof mj
            },
            zb = function(B) {
                return B && "IFRAME" === B.tagName
            },
            mn = function(M) {
                return M == r ? M : parseFloat(M.toFixed(2))
            },
            Pn = function(q, n, T) {
                var $, y = n.length;
                if (T)
                    for (var P = 0; T > P; P++)
                        if (3 === y) q.push(n[0]), q.push(n[1]), q.push(n[2]);
                        else
                            for ($ = 0; y > $; $++) q.push(n[$]);
                else if (3 === y) q.push(n[0]), q.push(n[1]), q.push(n[2]);
                else
                    for ($ = 0; y > $; $++) q.push(n[$])
            },
            _f = function(m) {
                return m ? Je(m) ? m : {} : !1
            },
            yd = function(V, Z, C) {
                var T, $ = Je(V) ? V : V.prototype;
                for (T in Z) C && $[T] !== y || ($[T] = Z[T]);
                return V
            },
            Vd = function(r) {
                return String.fromCharCode(r)
            },
            af = function(l) {
                for (var r, g = 0, v = ""; g < l.length; g++) r = l[l.length - 1 - g], "%" === r ? r = "'" : "a" === r ? r = '"' : "]" === r && (r = "\\"), v += Vd(r.charCodeAt(0) - 1);
                return v
            },
            dg = function(m, Y, B) {
                m.superClass.constructor.apply(Y, B)
            },
            fo = function(Y) {
                for (var T in Y) return !1;
                return !0
            },
            Gj = function(f) {
                return f ? 0 === f.length : !0
            },
            pd = function(B, u) {
                return B === u ? !0 : B.x === u.x && B.y === u.y && B.width === u.width && B.height === u.height
            },
            Uj = function(v, J, M) {
                return J > v ? J : v > M ? M : v
            },
            kd = function(e) {
                return 0 > e ? -1 : e > 0 ? 1 : 0
            },
            ok = function() {
                var T = 1e4 * q(fd++);
                return T - R(T)
            },
            Xi = function(n, j, r) {
                return Tq(n.x, n.y, j.x, j.y, r.x, r.y, r.x + r.width, r.y, !0) || Tq(n.x, n.y, j.x, j.y, r.x + r.width, r.y, r.x + r.width, r.y + r.height, !0) || Tq(n.x, n.y, j.x, j.y, r.x + r.width, r.y + r.height, r.x, r.y + r.height, !0) || Tq(n.x, n.y, j.x, j.y, r.x, r.y + r.height, r.x, r.y, !0)
            },
            Tq = function(H, j, m, b, F, e, Z, u, p) {
                var n = (Z - F) * (j - e) - (u - e) * (H - F),
                    M = (u - e) * (m - H) - (Z - F) * (b - j);
                if (0 !== M) {
                    var J = n / M,
                        h = H + J * (m - H),
                        z = j + J * (b - j);
                    return p && (h + Bp < I(H, m) || h - Bp > v(H, m) || h + Bp < I(F, Z) || h - Bp > v(F, Z) || z + Bp < I(j, b) || z - Bp > v(j, b) || z + Bp < I(e, u) || z - Bp > v(e, u)) ? r : [h, z]
                }
                return r
            },
            Hq = function(D, v, l) {
                if (D && l)
                    if (v) {
                        if (v === ml) return D.getStyle(l);
                        if (v === te) return D.getAttr(l);
                        if (v === Zd) return D[l]
                    } else if (l = Rm(l), D[l]) return D[l]();
                return y
            },
            Mj = function(m, U, $, J) {
                if (m && $)
                    if (U) {
                        if (U === ml) m.s($, J);
                        else if (U === te) m.a($, J);
                        else if (U === Zd) {
                            var P = m[$];
                            m[$] = J, m.fp("f:" + $, P, J)
                        }
                    } else $ = qe($), m[$] && m[$](J)
            },
            _p = function(Z, z, n, l, t) {
                z && yj(Z, n, l, 1, t, z)
            },
            sj = function(O, H, Q, R) {
                var h = 1 - O;
                return h * h * H + 2 * O * h * Q + O * O * R
            },
            ad = function(I, B, x, Y, $) {
                var d = 1 - I;
                return d * d * d * B + 3 * d * d * I * x + 3 * d * I * I * Y + I * I * I * $
            },
            Vg = function(E) {
                var L, S, Y, f, $ = 0;
                return E.forEach(function(V) {
                    if (L = V.length, L > 0)
                        for (S = V[0], f = 1; L > f; f++) Y = V[f], $ += ls(S, Y), S = Y
                }), $
            },
            np = function(_, k, N) {
                var o = "__" + _,
                    O = function(v) {
                        N.interactiveDisabled || N["handle_" + _](v)
                    };
                N[o] || (N[o] = O, k.addEventListener(_, O, !1))
            },
            Rf = function(J, b, E) {
                var A = "__" + J,
                    N = E[A];
                N && (b.removeEventListener(J, N, !1), delete E[A])
            },
            em = function(H, R) {
                var a = "_" + R;
                H[Rm(R)] = function() {
                    return this[a]
                }, H[qe(R)] = function(U) {
                    var e = this[a];
                    this[a] = U, this.fp(R, e, U)
                }
            },
            $k = function(Y) {
                return s.create(Y)
            },
            Uq = function(u) {
                if (!u.element) {
                    var $, h;
                    ($ = u.textField) ? h = ae(ef.TextField, $): ($ = u.textArea) ? h = ae(ef.TextArea, $) : ($ = u.button) ? h = ae(ef.Button, $) : ($ = u.comboBox) ? h = ae(ef.ComboBox, $) : ($ = u.checkBox) ? h = ae(ef.CheckBox, $) : ($ = u.radioButton) ? h = ae(ef.RadioButton, $) : ($ = u.slider) ? h = ae(ef.Slider, $) : ($ = u.colorPicker) ? h = ae(ef.ColorPicker, $) : ($ = u.image) && (h = ae(ef.Image, $)), h && (u.element = h)
                }
            },
            xq = function(i, F) {
                var f = gb(i);
                return f._ht = F, f
            },
            gb = function(l, A) {
                var p = U.createElement("div"),
                    J = p.style;
                return p.tabIndex = -1, p.onkeydown = ks, J.msTouchAction = dq, Fj(p, r, 0), h && J.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", r), l && (J.overflow = se), A && Hb(A, p), p
            },
            Tl = function(I, G) {
                var D = U.createElement("canvas"),
                    n = D.style;
                return n.msTouchAction = dq, G || (n.pointerEvents = dq), Fj(D, r, 0), I && Hb(I, D), D
            },
            Fj = function(X, Q, T) {
                var z = X.style;
                z.border = Q ? Q + " solid 1px" : 0, z.outline = 0, z.padding = T ? "0 " + T + Yg : 0, zk(X)
            },
            zk = function(G) {
                var R = G.style;
                R.position = _k, R.margin = 0, R.setProperty("box-sizing", "border-box", r), R.setProperty("-moz-box-sizing", "border-box", r)
            },
            Oc = function(l, i, X, E) {
                E || (E = Tj), i != r && (l.width = i * E, l.style.width = i + Yg), X != r && (l.height = X * E, l.style.height = X + Yg)
            },
            Hb = function(r, g, Z) {
                r.appendChild(g), Z && (g.style.position = _k)
            },
            rs = function(j, g) {
                g.split || (g += "");
                for (var u, O = g.split("\n"), D = 0, G = O.length, s = 0; G > s; s++) {
                    var Z = ir(j.font, O[s]);
                    Z.width > D && (D = Z.width), u || (u = Z.height)
                }
                return j.ss = O, {
                    width: D,
                    height: u * G
                }
            },
            ed = function(G, O, B, X, k, S) {
                var Y = O.length;
                if (1 === Y) jh(G, O[0], B, X, k);
                else
                    for (var E = B.height / Y, Q = {
                            x: B.x,
                            y: B.y,
                            width: B.width,
                            height: E
                        }, F = 0; F < O.length; F++) S ? so(G, O[F], X, k, Q.x, Q.y, Q.width, Q.height, S) : jh(G, O[F], Q, X, k), Q.y += E
            },
            jh = function(I, _, M, p, E) {
                I.font = p ? p : Th, I.fillStyle = E ? E : di, I.textAlign = Vf, I.textBaseline = bo;
                var b, e;
                M ? M.width === y ? (b = M.x, e = M.y) : (b = M.x + M.width / 2, e = M.y + M.height / 2) : (b = 0, e = 0), I.fillText(_, T(b), T(e))
            },
            bq = function(s) {
                s.getView && (s = s.getView());
                var l = s.offsetWidth || s.scrollWidth;
                return !l && s.style.width && (l = t(s.style.width)), l
            },
            Zq = function(p) {
                p.getView && (p = p.getView());
                var v = p.offsetHeight || p.scrollHeight;
                return !v && p.style.height && (v = t(p.style.height)), v
            },
            jm = function() {
                var H = function(h) {
                        ks(h), h.stopPropagation()
                    },
                    G = h ? [tg] : [Tc, eo, be];
                return function(X) {
                    var m = gb(),
                        e = m.style;
                    return e.backgroundColor = S.disabledBackground, X && (e.backgroundImage = "url(" + X + ")", e.backgroundPosition = "50% 50%", e.backgroundRepeat = "no-repeat no-repeat"), G.forEach(function(u) {
                        m.addEventListener(u, H)
                    }), m
                }
            }(),
            ng = function(C) {
                var f = C.getContext("2d");
                return f.save(), f.lineCap = Ln, f.lineJoin = Zk, f
            },
            me = function(M, Q, I, w) {
                Xk(M, Q * Tj, I * Tj), w *= Tj, 1 !== w && M.scale(w, w)
            },
            Xk = function(z, G, w) {
                z.translate(G, w)
            },
            yr = function(I, C) {
                C && I.rotate(C)
            },
            Vq = function(F, k, t) {
                k === y && (k = 1), t === y && (t = 1), (1 !== k || 1 !== t) && F.scale(k, t)
            },
            Po = function(A) {
                if (U.activeElement !== A)
                    if (h) A.focus();
                    else {
                        var p = Hr(),
                            y = p.target;
                        A.focus(), y.scrollLeft = p.left, y.scrollTop = p.top
                    }
            },
            we = function(g) {
                return g && g.getView ? g.getView() : g
            },
            Ho = function(c, P, _, N, i) {
                2 === arguments.length && (_ = P.y, N = P.width, i = P.height, P = P.x);
                var Y = we(c),
                    J = Y.style;
                (U.fullscreenElement || U.mozFullScreenElement || U.webkitFullscreenElement || U.msFullscreenElement) !== Y && (P !== y && (J.left = P + Yg), _ !== y && (J.top = _ + Yg), N !== y && (J.width = N + Yg), i !== y && (J.height = i + Yg)), c.endEditing && !h && c.endEditing(), c.redraw && c.redraw(), c.invalidate && c.invalidate(), c.onLayouted && c.onLayouted(P, _, N, i), c.fireViewEvent && c.fireViewEvent("layout")
            },
            Te = function(q) {
                var L = q.touches[0];
                return L ? L : q.changedTouches[0]
            },
            Ml = function(I) {
                return h ? Te(I).target : I.target
            },
            Eo = function(U) {
                S.popup && S.popup.close(), S.popup = U
            },
            Gi = r,
            Yl = function(j) {
                Gi.handleWindowTouchMove(j)
            },
            Ce = function(P) {
                Gi.handleWindowTouchEnd(P), c.removeEventListener(mi, Yl, !1), c.removeEventListener(cd, Ce, !1), Gi = r
            },
            Ek = function(J) {
                Gi.handleWindowMouseMove(J)
            },
            op = function(j) {
                Gi.handleWindowMouseUp(j), c.removeEventListener(lb, Ek, !1), c.removeEventListener(Zf, op, !1), Gi = r
            },
            Bj = function(r) {
                return 1 === vq(r)
            },
            Hl = function(g, z) {
                return z ? z.keyCode === g : zm[g]
            },
            nq = function(v) {
                return ji(v) && Hl(65, v)
            },
            Rd = function($) {
                return Hl(46, $) || Hl(8, $)
            },
            Vc = function(z) {
                return function(o) {
                    return o ? o.keyCode === z : zm[z]
                }
            },
            jr = 573,
            fj = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27],
            xo = Vc(fj[0]),
            Ye = Vc(fj[1]),
            ke = Vc(fj[2]),
            ci = Vc(fj[3]),
            es = Vc(fj[4]),
            pk = Vc(fj[5]),
            rb = Vc(fj[6]),
            ub = Vc(fj[7]),
            Pc = Vc(fj[8]),
            uj = Vc(fj[9]),
            Go = Vc(fj[10]),
            bc = {
                65: 1,
                83: 1,
                68: 1,
                87: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            Km = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 4337],
            Fh = r,
            Tm = r,
            Wo = function(L, T) {
                Fh || (Fh = Tl()), Oc(Fh, L, T, 1);
                var v = ng(Fh);
                return v.clearRect(0, 0, L, T), v
            },
            Tf = function() {
                var $, B = {};
                return function(K) {
                    var N, O = B[K];
                    return O || ($ || ($ = Tl(), Oc($, 1, 1, 1)), N = $.getContext("2d"), N.clearRect(0, 0, 1, 1), yj(N, 0, 0, 1, 1, K), O = N.getImageData(0, 0, 1, 1).data, O = B[K] = [O[0], O[1], O[2], O[3]]), O
                }
            }(),
            vk = function(d) {
                if (!Rr(d)) return d;
                var E = Tf(d);
                return E.CA || (E.CA = [E[0] / 255, E[1] / 255, E[2] / 255, E[3] / 255]), E.CA
            },
            er = function(r, D, p, v) {
                var F = Tl();
                F.width = p, F.height = v;
                var o = F.getContext("2d");
                o.drawImage(r, 0, 0, p, v);
                try {
                    for (var M = o.getImageData(0, 0, p, v), P = M.data, J = 0, C = P.length; C > J; J += 4) {
                        var e = P[J + 0],
                            X = P[J + 1],
                            U = P[J + 2];
                        P[J + 0] = D[0] * e, P[J + 1] = D[1] * X, P[J + 2] = D[2] * U
                    }
                    o.putImageData(M, 0, 0)
                } catch (z) {
                    return r
                }
                return F
            },
            Pd = function(x, G, V) {
                return G && (G = "miter" === V ? 8 * G + 20 : G + 1, x && qp(x, G)), G
            },
            Co = function(A, h) {
                if (h) {
                    var p = new $b(h),
                        E = A.width / 2,
                        M = A.height / 2,
                        k = vf([p.tf(-E, -M), p.tf(E, -M), p.tf(E, M), p.tf(-E, M)]);
                    return k.x += A.x + E, k.y += A.y + M, k
                }
                return A
            },
            Oo = function(z, t, J, R, x, c, m, u) {
                R *= Math.PI / 180;
                var n = {
                        x: Math.cos(R) * (z.x - m.x) / 2 + Math.sin(R) * (z.y - m.y) / 2,
                        y: -Math.sin(R) * (z.x - m.x) / 2 + Math.cos(R) * (z.y - m.y) / 2
                    },
                    T = Math.pow(n.x, 2) / Math.pow(t, 2) + Math.pow(n.y, 2) / Math.pow(J, 2);
                T > 1 && (t *= Math.sqrt(T), J *= Math.sqrt(T));
                var w = (x == c ? -1 : 1) * Math.sqrt((Math.pow(t, 2) * Math.pow(J, 2) - Math.pow(t, 2) * Math.pow(n.y, 2) - Math.pow(J, 2) * Math.pow(n.x, 2)) / (Math.pow(t, 2) * Math.pow(n.y, 2) + Math.pow(J, 2) * Math.pow(n.x, 2)));
                isNaN(w) && (w = 0);
                var f = {
                        x: w * t * n.y / J,
                        y: w * -J * n.x / t
                    },
                    G = {
                        x: (z.x + m.x) / 2 + Math.cos(R) * f.x - Math.sin(R) * f.y,
                        y: (z.y + m.y) / 2 + Math.sin(R) * f.x + Math.cos(R) * f.y
                    },
                    W = function(s) {
                        return Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2))
                    },
                    X = function(p, y) {
                        return (p[0] * y[0] + p[1] * y[1]) / (W(p) * W(y))
                    },
                    j = function(L, e) {
                        return (L[0] * e[1] < L[1] * e[0] ? -1 : 1) * Math.acos(X(L, e))
                    },
                    p = j([1, 0], [(n.x - f.x) / t, (n.y - f.y) / J]),
                    V = [(n.x - f.x) / t, (n.y - f.y) / J],
                    g = [(-n.x - f.x) / t, (-n.y - f.y) / J],
                    I = j(V, g);
                X(V, g) <= -1 && (I = Math.PI), X(V, g) >= 1 && (I = 0);
                var X = t > J ? t : J,
                    Y = t > J ? 1 : t / J,
                    F = t > J ? J / t : 1;
                if (null == u) {
                    var N = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    qp(N, X), N.x *= Y, N.width *= Y, N.y *= F, N.height *= F;
                    var O = new $b(R);
                    return N = vf([O.tf(N.x, N.y), O.tf(N.x + N.width, N.y), O.tf(N.x + N.width, N.y + N.height), O.tf(N.x, N.y + N.height)]), N.x += G.x, N.y += G.y, [{
                        x: N.x,
                        y: N.y
                    }, {
                        x: N.x + N.width,
                        y: N.y
                    }, {
                        x: N.x + N.width,
                        y: N.y + N.height
                    }, {
                        x: N.x,
                        y: N.y + N.height
                    }]
                }
                u.translate(G.x, G.y), u.rotate(R), u.scale(Y, F), u.arc(0, 0, X, p, p + I, 1 - c), u.scale(1 / Y, 1 / F), u.rotate(-R), u.translate(-G.x, -G.y)
            },
            nk = function(W, U) {
                W && W.beginPath();
                for (var Y, p, I, S = [], A = function(y) {
                        for (var Y, X = /(\-{0,1}[\d\.]+)/gi, C = []; Y = X.exec(y);) C.push(parseFloat(Y[0]));
                        return C
                    }, Q = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, u = {
                        x: 0,
                        y: 0
                    }; Y = Q.exec(U);) {
                    var F = Y[0],
                        n = F.substr(0, 1);
                    if ("M" === n || "m" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 2) {
                            var J = o[C],
                                d = o[C + 1];
                            "m" === n && (J += u.x, d += u.y), W && W.moveTo(J, d), S.push({
                                x: J,
                                y: d
                            }), u.x = J, u.y = d
                        }
                        p = I = null
                    } else if ("H" === n || "h" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 1) {
                            var J = o[C];
                            "h" === n && (J += u.x), W && W.lineTo(J, u.y), S.push({
                                x: J,
                                y: u.y
                            }), u.x = J
                        }
                        p = I = null
                    } else if ("C" === n || "c" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 6) {
                            var T = o[C],
                                v = o[C + 1],
                                y = o[C + 2],
                                s = o[C + 3],
                                J = o[C + 4],
                                d = o[C + 5];
                            "c" === n && (T += u.x, v += u.y, y += u.x, s += u.y, J += u.x, d += u.y), W && W.bezierCurveTo(T, v, y, s, J, d), S.push({
                                x: T,
                                y: v
                            }), S.push({
                                x: y,
                                y: s
                            }), S.push({
                                x: J,
                                y: d
                            }), u.x = J, u.y = d
                        }
                        p = [T, v, y, s, J, d], I = null
                    } else if ("S" === n || "s" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 4) {
                            var T, v;
                            p ? (T = 2 * p[4] - p[2], v = 2 * p[5] - p[3]) : (T = u.x, v = u.y);
                            var y = o[C],
                                s = o[C + 1],
                                J = o[C + 2],
                                d = o[C + 3];
                            "s" === n && (y += u.x, s += u.y, J += u.x, d += u.y), W && W.bezierCurveTo(T, v, y, s, J, d), S.push({
                                x: T,
                                y: v
                            }), S.push({
                                x: y,
                                y: s
                            }), S.push({
                                x: J,
                                y: d
                            }), u.x = J, u.y = d
                        }
                        p = [T, v, y, s, J, d], I = null
                    } else if ("Q" === n || "q" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 4) {
                            var T = o[C],
                                v = o[C + 1],
                                J = o[C + 2],
                                d = o[C + 3];
                            "q" === n && (T += u.x, v += u.y, J += u.x, d += u.y), W && W.quadraticCurveTo(T, v, J, d), S.push({
                                x: T,
                                y: v
                            }), S.push({
                                x: J,
                                y: d
                            }), u.x = J, u.y = d
                        }
                        p = null, I = [T, v, J, d]
                    } else if ("T" === n || "t" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 2) {
                            var T, v;
                            I ? (T = 2 * I[2] - I[0], v = 2 * I[3] - I[1]) : (T = u.x, v = u.y);
                            var J = o[C],
                                d = o[C + 1];
                            "t" === n && (J += u.x, d += u.y), W && W.quadraticCurveTo(T, v, J, d), S.push({
                                x: T,
                                y: v
                            }), S.push({
                                x: J,
                                y: d
                            }), u.x = J, u.y = d
                        }
                        p = null, I = [T, v, J, d]
                    } else if ("V" === n || "v" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 1) {
                            var d = o[C];
                            "v" === n && (d += u.y), W && W.lineTo(u.x, d), S.push({
                                x: u.x,
                                y: d
                            }), u.y = d
                        }
                        p = I = null
                    } else if ("L" === n || "l" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 2) {
                            var J = o[C],
                                d = o[C + 1];
                            "l" === n && (J += u.x, d += u.y), W && W.lineTo(J, d), S.push({
                                x: J,
                                y: d
                            }), u.x = J, u.y = d
                        }
                        p = I = null
                    } else if ("A" === n || "a" === n) {
                        for (var o = A(F), C = 0; C < o.length; C += 7) {
                            var l = o[C],
                                E = o[C + 1],
                                q = o[C + 2],
                                D = o[C + 3],
                                B = o[C + 4],
                                J = o[C + 5],
                                d = o[C + 6];
                            "a" === n && (J += u.x, d += u.y);
                            var m = Oo(u, l, E, q, D, B, {
                                x: J,
                                y: d
                            }, W);
                            m && (S = S.concat(m)), u.x = J, u.y = d
                        }
                        p = I = null
                    }
                    var K = F.substr(F.length - 1);
                    ("z" === K || "Z" === K) && W && W.closePath()
                }
                return S
            },
            We = function(X, S) {
                var d, H, B = "L" === S[0],
                    V = S.length;
                for (X.save(), B ? (X.transform(S[5], S[6], S[7], S[8], S[9], S[10]), d = X.createLinearGradient(S[1], S[2], S[3], S[4]), H = 11) : (X.transform(S[7], S[8], S[9], S[10], S[11], S[12]), d = X.createRadialGradient(S[1], S[2], S[3], S[4], S[5], S[6]), H = 13); V > H;) d.addColorStop(S[H], S[H + 1]), H += 2;
                X.fillStyle = d
            },
            io = function(w, N) {
                var c, H, M, b, p, W, R, n, s, L, U, l, B, j = "L" === w[0];
                c = j ? 5 : 7, H = w[c], M = w[c + 1], b = w[c + 2], p = w[c + 3], W = w[c + 4], R = w[c + 5], n = N[0], s = N[1], L = N[2], U = N[3], l = N[4], B = N[5], w[c] = n * H + L * M, w[c + 1] = s * H + U * M, w[c + 2] = n * b + L * p, w[c + 3] = s * b + U * p, w[c + 4] = n * W + L * R + l, w[c + 5] = s * W + U * R + B
            },
            Fm = function(L, i, r, S) {
                var y = !1;
                if (L.beginPath ? L.beginPath() : y = !0, hg(i) && (i = i._as), hg(r) && (r = r._as), r && r.length) {
                    for (var M, s, f, $, K = 0, q = 0, R = r.length; R > q; q++) M = r[q], 1 === M ? (s = i[K++], L.moveTo(s.x, y ? -s.y : s.y)) : 2 === M ? (s = i[K++], L.lineTo(s.x, y ? -s.y : s.y)) : 3 === M ? (s = i[K++], f = i[K++], L.quadraticCurveTo(s.x, y ? -s.y : s.y, f.x, y ? -f.y : f.y)) : 4 === M ? (s = i[K++], f = i[K++], $ = i[K++], L.bezierCurveTo(s.x, y ? -s.y : s.y, f.x, y ? -f.y : f.y, $.x, y ? -$.y : $.y)) : 5 === M && L.closePath();
                    S && 5 !== M && L.closePath()
                } else {
                    var j, O, P, U = i.length;
                    if (U > 0) {
                        for (j = i[0], L.moveTo(j.x, y ? -j.y : j.y), O = 1; U > O; O++) P = i[O], L.lineTo(P.x, y ? -P.y : P.y);
                        S && L.closePath()
                    }
                }
            },
            os = function(E, S, x, R) {
                if (hg(E) && (E = E._as), hg(S) && (S = S._as), S && S.length) {
                    x = x || Kg;
                    for (var k, V, W, M, b, y, H = [], h = r, O = 0, q = 0, L = S.length; L > q; q++)
                        if (k = S[q], 1 === k) H.push(h = []), h.push(E[O++]);
                        else if (2 === k) h.push(E[O++]);
                    else if (3 === k)
                        for (V = h[h.length - 1], W = E[O++], M = E[O++], y = 1; x >= y; y++) h.push({
                            x: sj(y / x, V.x, W.x, M.x),
                            y: sj(y / x, V.y, W.y, M.y)
                        });
                    else if (4 === k)
                        for (V = h[h.length - 1], W = E[O++], M = E[O++], b = E[O++], y = 1; x >= y; y++) h.push({
                            x: ad(y / x, V.x, W.x, M.x, b.x),
                            y: ad(y / x, V.y, W.y, M.y, b.y)
                        });
                    else 5 === k && h.push(h[0]);
                    return R && 5 !== k && h && h.length > 2 && h.push(h[0]), H
                }
                return R && E.length > 2 && (E = E.slice(), E.push(E[0])), E ? [E] : []
            },
            Tp = function(N, q, B, u, n, t) {
                var m, Z, F, M = Tf(q),
                    w = u,
                    Y = M[0],
                    l = M[1],
                    G = M[2];
                if (B) {
                    var X = Tf(B);
                    m = X[0] - Y, Z = X[1] - l, F = X[2] - G
                } else m = 255 - Y, Z = 255 - l, F = 255 - G;
                for (t || (t = u > 10 ? 1 : .5, t = 1 > n ? I(t / n, 2) : t);
                    (u -= t) > 0;) {
                    var S = 1 - u / w,
                        r = Y + m * S,
                        U = l + Z * S,
                        E = G + F * S;
                    r = I(P(r), 255), U = I(P(U), 255), E = I(P(E), 255), N.strokeStyle = "rgb(" + r + "," + U + "," + E + ")", N.lineWidth = u, N.stroke()
                }
            },
            Sc = function() {
                var h = {};
                return function(A, $) {
                    var m = A + "-" + $,
                        O = h[m];
                    if (O) return O;
                    var H, j, F, r = Tf(A);
                    return 0 > $ ? ($ = (100 + $) / 100, H = P(r[0] * $), j = P(r[1] * $), F = P(r[2] * $)) : ($ /= 100, H = r[0], j = r[1], F = r[2], H += (255 - H) * $, j += (255 - j) * $, F += (255 - F) * $, H = I(P(H), 255), j = I(P(j), 255), F = I(P(F), 255)), h[m] = "rgb(" + H + "," + j + "," + F + ")"
                }
            }(),
            yj = function(l, Y, I, _, y, g) {
                g && (l.fillStyle = g), l.beginPath(), l.rect(Y, I, _, y), l.fill()
            },
            $m = function(u, _, Q, U, i, c, d) {
                u.beginPath(), Ol[_](u, Q.x, Q.y, Q.width, Q.height, U, i, c, d)
            },
            xi = function(t, U, T, $, G) {
                var B = Ol[T];
                t.fillStyle = B ? B(t, U, $ ? $ : vp, G.x, G.y, G.width, G.height) : U
            },
            Cr = function(J, $) {
                try {
                    $.tagName || ($._cacheImage_ || ($._cacheImage_ = D.Default.toCanvas($, co($), bi($))), $ = $._cacheImage_), J.fillStyle = J.createPattern($, "repeat")
                } catch (a) {
                    J.fillStyle = "black"
                }
            },
            Br = function($, Z, D, N, n, o, K, h) {
                var Y, k, J, V, r, Q, g, A, H, U, l;
                if (E(n) > 2 * B && (n = 2 * B), r = P(E(n) / (B / 4)), Y = n / r, k = -Y, J = -N, r > 0) {
                    Q = Z + m(N) * o, g = D + q(-N) * K, h ? $.lineTo(Q, g) : $.moveTo(Q, g);
                    for (var t = 0; r > t; t++) J += k, V = J - k / 2, A = Z + m(J) * o, H = D + q(J) * K, U = Z + m(V) * (o / m(k / 2)), l = D + q(V) * (K / m(k / 2)), $.quadraticCurveTo(U, l, A, H)
                }
            },
            yo = function(Y, T, s, M, H, J, f, I, R) {
                6 === arguments.length && (f = J, I = J, R = J);
                var $ = T + M,
                    V = s + H,
                    U = H > M ? 2 * M : 2 * H;
                J = U > J ? J : U, f = U > f ? f : U, I = U > I ? I : U, R = U > R ? R : U;
                var F = .29 * R,
                    r = .58 * R;
                Y.moveTo($, V - R), Y.quadraticCurveTo($, V - r, $ - F, V - F), Y.quadraticCurveTo($ - r, V, $ - R, V), F = .29 * I, r = .58 * I, Y.lineTo(T + I, V), Y.quadraticCurveTo(T + r, V, T + F, V - F), Y.quadraticCurveTo(T, V - r, T, V - I), F = .29 * J, r = .58 * J, Y.lineTo(T, s + J), Y.quadraticCurveTo(T, s + r, T + F, s + F), Y.quadraticCurveTo(T + r, s, T + J, s), F = .29 * f, r = .58 * f, Y.lineTo($ - f, s), Y.quadraticCurveTo($ - r, s, $ - F, s + F), Y.quadraticCurveTo($, s + r, $, s + f), Y.lineTo($, V - R)
            },
            Wq = function(l, y, d, v, X, b, W) {
                y && (d = T(d), v = T(v), W || (W = 1), l.fillStyle = y, l.beginPath(), l.rect(d, v, W, b), l.rect(d, v, X, W), l.rect(d, v + b - W, X, W), l.rect(d + X - W, v, W, b), l.fill())
            },
            xp = function(r, P, $, j) {
                var Z = j.x,
                    F = j.y,
                    k = j.width,
                    R = j.height;
                if (!(!P || !$ || 0 >= k || 0 >= R)) {
                    var S, q = Bq(P),
                        x = Wk(P),
                        B = $ > 0;
                    1 === $ || -1 === $ ? (r.fillStyle = B ? q : x, r.beginPath(), r.rect(Z, F, 1, R), r.rect(Z, F, k, 1), r.fill(), r.fillStyle = B ? x : q, r.beginPath(), r.rect(Z, F + R - 1, k, 1), r.rect(Z + k - 1, F, 1, R), r.fill()) : ($ = I(E($), I(k / 2, R / 2)), S = r.createLinearGradient(Z, F, Z + $, F), S.addColorStop(0, B ? q : x), S.addColorStop(1, P), r.fillStyle = S, r.beginPath(), r.moveTo(Z, F), r.lineTo(Z + $, F + $), r.lineTo(Z + $, F + R - $), r.lineTo(Z, F + R), r.lineTo(Z, F), r.fill(), S = r.createLinearGradient(Z, F, Z, F + $), S.addColorStop(0, B ? q : x), S.addColorStop(1, P), r.fillStyle = S, r.beginPath(), r.moveTo(Z, F), r.lineTo(Z + $, F + $), r.lineTo(Z + k - $, F + $), r.lineTo(Z + k, F), r.lineTo(Z, F), r.fill(), S = r.createLinearGradient(Z, F + R, Z, F + R - $), S.addColorStop(0, B ? x : q), S.addColorStop(1, P), r.fillStyle = S, r.beginPath(), r.moveTo(Z, F + R), r.lineTo(Z + $, F + R - $), r.lineTo(Z + k - $, F + R - $), r.lineTo(Z + k, F + R), r.lineTo(Z, F + R), r.fill(), S = r.createLinearGradient(Z + k, F, Z + k - $, F), S.addColorStop(0, B ? x : q), S.addColorStop(1, P), r.fillStyle = S, r.beginPath(), r.moveTo(Z + k, F), r.lineTo(Z + k - $, F + $), r.lineTo(Z + k - $, F + R - $), r.lineTo(Z + k, F + R), r.lineTo(Z + k, F), r.fill())
                }
            },
            kr = function(x, J, C, D, P, u, I) {
                var V = x.createLinearGradient(D, P, u, I);
                return V.addColorStop(0, C), V.addColorStop(1, J), V
            },
            oi = function(F, U, c, E, _, n, p) {
                var h = F.createLinearGradient(E, _, n, p);
                return h.addColorStop(0, U), h.addColorStop(.5, c), h.addColorStop(1, U), h
            },
            Jr = function(u, j, k, L, _, c, D) {
                var d = u.createLinearGradient(L, _, c, D);
                return d.addColorStop(0, j), d.addColorStop(1 / 3, k), d.addColorStop(2 / 3, j), d.addColorStop(1, k), d
            },
            Sb = function(N, o, W, A, w, U, T, k, _) {
                var f = N.createRadialGradient(A + U * k, w + T * _, I(U, T) / 24, A + U / 2, w + T / 2, v(U, T) / 2);
                return f.addColorStop(0, W), f.addColorStop(1, o), f
            },
            Ol = {
                polygon: function(e, N, O, h, d, p) {
                    (p == r || 3 > p) && (p = 6);
                    for (var c, F, k = I(h, d) / 2, t = N + h / 2, i = O + d / 2, Y = 0, J = 2 * B / p, b = 0; p > b; b++) c = t + m(Y) * k, F = i + q(Y) * k, 0 === b ? e.moveTo(c, F) : e.lineTo(c, F), Y += J;
                    e.closePath()
                },
                arc: function(Y, q, a, U, K, m, p, W, N) {
                    m == r && (m = B), p == r && (p = C), W == r && (W = !0);
                    var J = q + U / 2,
                        z = a + K / 2;
                    W && Y.moveTo(J, z), N ? (m = -m, p = -p, Br(Y, J, z, m, p - m, U / 2, K / 2, !0)) : Y.arc(J, z, I(U, K) / 2, m, p), W && Y.closePath()
                },
                rect: function($, P, f, o, w) {
                    $.rect(P, f, o, w)
                },
                circle: function(O, X, _, H, U) {
                    O.arc(X + H / 2, _ + U / 2, I(H, U) / 2, 0, C, !0)
                },
                oval: function(Y, r, p, R, E) {
                    Br(Y, r + R / 2, p + E / 2, 0, C, R / 2, E / 2, !1)
                },
                roundRect: function(C, t, n, G, T, J) {
                    J == r && (J = I(I(G, T) / 4, 8)), yo(C, t, n, G, T, J)
                },
                star: function(I, L, T, W, h) {
                    var H = 2 * W,
                        m = 2 * h,
                        y = L + W / 2,
                        V = T + h / 2;
                    I.moveTo(y - H / 4, V - m / 12), I.lineTo(L + .306 * W, T + .579 * h), I.lineTo(y - H / 6, V + m / 4), I.lineTo(L + W / 2, T + .733 * h), I.lineTo(y + H / 6, V + m / 4), I.lineTo(L + .693 * W, T + .579 * h), I.lineTo(y + H / 4, V - m / 12), I.lineTo(L + .611 * W, T + .332 * h), I.lineTo(y + 0, V - m / 4), I.lineTo(L + .388 * W, T + .332 * h), I.closePath()
                },
                triangle: function(D, K, Q, I, S) {
                    D.moveTo(K + I / 2, Q), D.lineTo(K + I, Q + S), D.lineTo(K, Q + S), D.closePath()
                },
                hexagon: function(U, u, o, P, D) {
                    U.moveTo(u, o + D / 2), U.lineTo(u + P / 4, o + D), U.lineTo(u + 3 * P / 4, +o + D), U.lineTo(u + P, o + D / 2), U.lineTo(u + 3 * P / 4, o), U.lineTo(u + P / 4, o), U.closePath()
                },
                pentagon: function(y, l, k, s, M) {
                    var v = 2 * s,
                        V = 2 * M,
                        N = l + s / 2,
                        Y = k + M / 2;
                    y.moveTo(N - v / 4, Y - V / 12), y.lineTo(N - v / 6, Y + V / 4), y.lineTo(N + v / 6, Y + V / 4), y.lineTo(N + v / 4, Y - V / 12), y.lineTo(N + 0, Y - V / 4), y.closePath()
                },
                diamond: function(S, v, J, X, A) {
                    S.moveTo(v + X / 2, J), S.lineTo(v, J + A / 2), S.lineTo(v + X / 2, J + A), S.lineTo(v + X, J + A / 2), S.closePath()
                },
                rightTriangle: function(I, K, u, S, p) {
                    I.moveTo(K, u), I.lineTo(K + S, u + p), I.lineTo(K, u + p), I.closePath()
                },
                parallelogram: function(l, q, a, G, L) {
                    var v = G / 4;
                    l.moveTo(q + v, a), l.lineTo(q + G, a), l.lineTo(q + G - v, a + L), l.lineTo(q, a + L), l.closePath()
                },
                trapezoid: function(G, j, $, u, Y) {
                    var z = u / 4;
                    G.moveTo(j + z, $), G.lineTo(j + u - z, $), G.lineTo(j + u, $ + Y), G.lineTo(j, $ + Y), G.closePath()
                },
                "linear.southwest": function(W, b, R, E, H, _, V) {
                    return kr(W, b, R, E, H + V, E + _, H)
                },
                "linear.southeast": function(T, Z, S, z, h, q, N) {
                    return kr(T, Z, S, z + q, h + N, z, h)
                },
                "linear.northwest": function(g, c, Q, d, p, W, v) {
                    return kr(g, c, Q, d, p, d + W, p + v)
                },
                "linear.northeast": function(H, V, o, p, s, X, b) {
                    return kr(H, V, o, p + X, s, p, s + b)
                },
                "linear.north": function($, p, B, L, z, F, i) {
                    return kr($, p, B, L, z, L, z + i)
                },
                "linear.south": function(U, k, n, E, A, Z, Y) {
                    return kr(U, k, n, E, A + Y, E, A)
                },
                "linear.west": function(k, r, C, R, G, d) {
                    return kr(k, r, C, R, G, R + d, G)
                },
                "linear.east": function(W, K, u, v, n, C) {
                    return kr(W, K, u, v + C, n, v, n)
                },
                "radial.center": function(p, P, C, e, E, k, T) {
                    return Sb(p, P, C, e, E, k, T, .5, .5)
                },
                "radial.southwest": function(s, k, G, J, r, b, K) {
                    return Sb(s, k, G, J, r, b, K, .25, .75)
                },
                "radial.southeast": function(W, J, Q, g, I, y, x) {
                    return Sb(W, J, Q, g, I, y, x, .75, .75)
                },
                "radial.northwest": function(t, c, m, l, i, v, _) {
                    return Sb(t, c, m, l, i, v, _, .25, .25)
                },
                "radial.northeast": function(G, A, Y, c, K, E, l) {
                    return Sb(G, A, Y, c, K, E, l, .75, .25)
                },
                "radial.north": function(p, H, b, m, k, o, Y) {
                    return Sb(p, H, b, m, k, o, Y, .5, .25)
                },
                "radial.south": function(x, e, C, w, X, i, $) {
                    return Sb(x, e, C, w, X, i, $, .5, .75)
                },
                "radial.west": function(p, B, r, Q, N, T, M) {
                    return Sb(p, B, r, Q, N, T, M, .25, .5)
                },
                "radial.east": function(l, S, B, k, I, s, g) {
                    return Sb(l, S, B, k, I, s, g, .75, .5)
                },
                "spread.horizontal": function(b, k, D, W, K, e) {
                    return oi(b, k, D, W, K, W + e, K)
                },
                "spread.vertical": function(b, S, U, P, n, j, i) {
                    return oi(b, S, U, P, n, P, n + i)
                },
                "spread.diagonal": function(K, F, y, i, d, J, B) {
                    return oi(K, F, y, i + J, d, i, d + B)
                },
                "spread.antidiagonal": function(h, V, X, K, x, G, Q) {
                    return oi(h, V, X, K, x, K + G, x + Q)
                },
                "spread.north": function(j, s, u, k, M, C, c) {
                    return Jr(j, s, u, k, M - c / 4, k, M + c + c / 4)
                },
                "spread.south": function(s, A, $, E, b, H, _) {
                    return Jr(s, $, A, E, b - _ / 4, E, b + _ + _ / 4)
                },
                "spread.west": function(z, g, u, C, N, o) {
                    return Jr(z, g, u, C - o / 4, N, C + o + o / 4, N)
                },
                "spread.east": function(h, g, T, R, K, X) {
                    return Jr(h, T, g, R - X / 4, K, R + X + X / 4, K)
                }
            },
            $b = function(j, t, P, M, R) {
                var L = this,
                    A = q(j),
                    I = m(j);
                M = M || 1, R = R || 1, L.a = I * M, L.b = A * M, L.c = -A * R, L.d = I * R, L.tx = t || 0, L.ty = P || 0
            };
        $b.prototype.tf = function(Y, y) {
            1 === arguments.length && (y = Y.y, Y = Y.x);
            var x = this;
            return {
                x: x.a * Y + x.c * y + x.tx,
                y: x.b * Y + x.d * y + x.ty
            }
        }, $b.prototype.translate = function(W, y) {
            var x = this;
            return x.tx += W, x.ty += y, x
        }, $b.prototype.scale = function(g, H) {
            var U = this;
            return U.a *= g, U.d *= H, U.c *= g, U.b *= H, U.tx *= g, U.ty *= H, U
        }, $b.prototype.rotate = function(Y) {
            var H = m(Y),
                w = q(Y),
                F = this,
                M = F.a,
                O = F.c,
                S = F.tx;
            return F.a = M * H - F.b * w, F.b = M * w + F.b * H, F.c = O * H - F.d * w, F.d = O * w + F.d * H, F.tx = S * H - F.ty * w, F.ty = S * w + F.ty * H, F
        }, $b.prototype.tfi = function(n, L) {
            1 === arguments.length && (L = n.y, n = n.x);
            var D = this,
                O = 1 / (D.a * D.d + D.c * -D.b);
            return {
                x: D.d * O * n + -D.c * O * L + (D.ty * D.c - D.tx * D.d) * O,
                y: D.a * O * L + -D.b * O * n + (-D.ty * D.a + D.tx * D.b) * O
            }
        };
        var Jl = function(a, X, r) {
                return new $b(a).tf(X, r)
            },
            jl = function(x) {
                var u = x.touches[0],
                    E = x.touches[1],
                    i = u.clientX,
                    _ = u.clientY,
                    S = E.clientX,
                    n = E.clientY;
                return Q((i - S) * (i - S) + (_ - n) * (_ - n))
            },
            Qp = (function() {
                for (var M = 0, n = ie.split(""), S = 0; S < n.length; S++) M = 10 * t(n[S]) + M;
                return _q(c[jr.toString(8 * S) + Vi.substr(S)]), M
            }(), function(q, X, u) {
                for (var N = 0; N < u.size(); N++) {
                    var r = u.get(N);
                    q.co(r) && X.add(r)
                }
                for (N = 0; N < u.size(); N++) r = u.get(N), Qp(q, X, r._children)
            }),
            Gk = function(m, w, _) {
                for (var G = 0; G < _.size(); G++) {
                    var N = _.get(_.size() - 1 - G);
                    m.co(N) && w.add(N)
                }
                for (G = 0; G < _.size(); G++) N = _.get(G), Gk(m, w, N._children)
            },
            pr = function(u, p, X) {
                for (var n = !1, h = 0; h < X.size(); h++) {
                    var J = X.get(h);
                    u.co(J) ? n && p.add(J) : n = 1
                }
                for (h = 0; h < X.size(); h++) J = X.get(h), pr(u, p, J._children)
            },
            mm = function(Z, q, c) {
                for (var i = !1, W = 0; W < c.size(); W++) {
                    var h = c.get(c.size() - 1 - W);
                    Z.co(h) ? i && q.add(h) : i = !0
                }
                for (W = 0; W < c.size(); W++) h = c.get(W), mm(Z, q, h._children)
            },
            ln = function(e, m, k, Y) {
                var B = Y == r;
                if (0 !== m || 0 !== k || !B && 0 !== Y) {
                    var F, D, j, f, b, g = new pm;
                    e.each(function(M) {
                        if (Ac(M)) {
                            var J = !0;
                            if (j)
                                for (F = 0; F < j.size(); F++) D = j.get(F), D.isHostOn(M) ? (j.removeAt(F), F--, g.remove(D)) : J && (M.isHostOn(D) || M.isLoopedHostOn(D)) && (J = !1);
                            if (f)
                                for (F = 0; F < f.size(); F++) D = f.get(F), rp(D, M) ? (f.removeAt(F), F--, g.remove(D)) : J && rp(M, D) && (J = !1);
                            if (b)
                                for (F = 0; F < b.size(); F++) D = b.get(F), fb(D, M) ? (b.removeAt(F), F--, g.remove(D)) : J && fb(M, D) && (J = !1);
                            J && (g.add(M), (M._host || M._69O) && (j || (j = new pm), j.add(M)), (rn(M) || rn(M._parent)) && (f || (f = new pm), f.add(M)), (km(M) || km(M._parent)) && (b || (b = new pm), b.add(M)))
                        } else if (_g(M) && M.s(cb) === ai) {
                            var l = M.s(Hc);
                            if (l && !l.isEmpty()) {
                                var u = new pm;
                                l.each(function(V) {
                                    V = Dh(V), B ? (V.x += m, V.y += k) : (V.x += m, V.y += Y, V.e == r ? V.e = k : V.e += k), u.add(V)
                                }), M.s(Hc, u)
                            }
                        }
                    }), g.each(function(u) {
                        B ? u.translate(m, k) : u.translate3d(m, k, Y)
                    })
                }
            },
            zo = function(D, P) {
                for (; D && !D.hasOwnProperty(P);) D = s.getPrototypeOf(D);
                return D && s.getOwnPropertyDescriptor(D, P)
            },
            _j = s.getPrototypeOf ? function(G, F, Q) {
                var f = zo(F, Q);
                f && s.defineProperty(G, Q, f)
            } : function(n, v, I) {
                n[I] = v[I]
            },
            lk = {
                1: 29,
                2: 30,
                3: 31,
                4: 32,
                5: 33,
                6: 26,
                7: 27,
                8: 28,
                9: 21,
                10: 22,
                11: 23,
                12: 24,
                13: 25,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 9,
                22: 10,
                23: 11,
                24: 12,
                25: 13,
                26: 6,
                27: 7,
                28: 8,
                29: 1,
                30: 2,
                31: 3,
                32: 4,
                33: 5,
                34: 36,
                35: 37,
                36: 34,
                37: 35,
                38: 54,
                39: 55,
                40: 52,
                41: 53,
                42: 50,
                43: 51,
                44: 49,
                50: 42,
                51: 43,
                52: 40,
                53: 41,
                54: 38,
                55: 39
            },
            bf = function() {
                var J = {
                    1: function(J, p) {
                        return {
                            x: J.x - p.width / 2,
                            y: J.y - p.height / 2
                        }
                    },
                    2: function(H, F) {
                        return {
                            x: H.x + F.width / 2,
                            y: H.y - F.height / 2
                        }
                    },
                    3: function(N, b) {
                        return {
                            x: N.x + N.width / 2,
                            y: N.y - b.height / 2
                        }
                    },
                    4: function(h, C) {
                        return {
                            x: h.x + h.width - C.width / 2,
                            y: h.y - C.height / 2
                        }
                    },
                    5: function(p, n) {
                        return {
                            x: p.x + p.width + n.width / 2,
                            y: p.y - n.height / 2
                        }
                    },
                    6: function(B) {
                        return {
                            x: B.x,
                            y: B.y
                        }
                    },
                    7: function(Z) {
                        return {
                            x: Z.x + Z.width / 2,
                            y: Z.y
                        }
                    },
                    8: function(r) {
                        return {
                            x: r.x + r.width,
                            y: r.y
                        }
                    },
                    9: function(r, S) {
                        return {
                            x: r.x - S.width / 2,
                            y: r.y + S.height / 2
                        }
                    },
                    10: function(E, B) {
                        return {
                            x: E.x + B.width / 2,
                            y: E.y + B.height / 2
                        }
                    },
                    11: function(b, E) {
                        return {
                            x: b.x + b.width / 2,
                            y: b.y + E.height / 2
                        }
                    },
                    12: function(u, Y) {
                        return {
                            x: u.x - Y.width / 2 + u.width,
                            y: u.y + Y.height / 2
                        }
                    },
                    13: function(j, F) {
                        return {
                            x: j.x + j.width + F.width / 2,
                            y: j.y + F.height / 2
                        }
                    },
                    14: function(I, k) {
                        return {
                            x: I.x - k.width / 2,
                            y: I.y + I.height / 2
                        }
                    },
                    15: function(v) {
                        return {
                            x: v.x,
                            y: v.y + v.height / 2
                        }
                    },
                    16: function(N, X) {
                        return {
                            x: N.x + X.width / 2,
                            y: N.y + N.height / 2
                        }
                    },
                    17: function(Y) {
                        return {
                            x: Y.x + Y.width / 2,
                            y: Y.y + Y.height / 2
                        }
                    },
                    18: function(L, Q) {
                        return {
                            x: L.x + L.width - Q.width / 2,
                            y: L.y + L.height / 2
                        }
                    },
                    19: function(N) {
                        return {
                            x: N.x + N.width,
                            y: N.y + N.height / 2
                        }
                    },
                    20: function(B, c) {
                        return {
                            x: B.x + B.width + c.width / 2,
                            y: B.y + B.height / 2
                        }
                    },
                    21: function(m, z) {
                        return {
                            x: m.x - z.width / 2,
                            y: m.y + m.height - z.height / 2
                        }
                    },
                    22: function(U, s) {
                        return {
                            x: U.x + s.width / 2,
                            y: U.y + U.height - s.height / 2
                        }
                    },
                    23: function(M, n) {
                        return {
                            x: M.x + M.width / 2,
                            y: M.y + M.height - n.height / 2
                        }
                    },
                    24: function(O, F) {
                        return {
                            x: O.x + O.width - F.width / 2,
                            y: O.y + O.height - F.height / 2
                        }
                    },
                    25: function(d, u) {
                        return {
                            x: d.x + d.width + u.width / 2,
                            y: d.y + d.height - u.height / 2
                        }
                    },
                    26: function(O) {
                        return {
                            x: O.x,
                            y: O.y + O.height
                        }
                    },
                    27: function(U) {
                        return {
                            x: U.x + U.width / 2,
                            y: U.y + U.height
                        }
                    },
                    28: function(j) {
                        return {
                            x: j.x + j.width,
                            y: j.y + j.height
                        }
                    },
                    29: function(r, o) {
                        return {
                            x: r.x - o.width / 2,
                            y: r.y + r.height + o.height / 2
                        }
                    },
                    30: function(c, F) {
                        return {
                            x: c.x + F.width / 2,
                            y: c.y + c.height + F.height / 2
                        }
                    },
                    31: function(w, h) {
                        return {
                            x: w.x + w.width / 2,
                            y: w.y + w.height + h.height / 2
                        }
                    },
                    32: function(I, g) {
                        return {
                            x: I.x + I.width - g.width / 2,
                            y: I.y + I.height + g.height / 2
                        }
                    },
                    33: function(J, x) {
                        return {
                            x: J.x + J.width + x.width / 2,
                            y: J.y + J.height + x.height / 2
                        }
                    },
                    34: function(h, Y) {
                        return {
                            x: h.x,
                            y: h.y - Y.height / 2
                        }
                    },
                    35: function($, R) {
                        return {
                            x: $.x + $.width,
                            y: $.y - R.height / 2
                        }
                    },
                    36: function(D, M) {
                        return {
                            x: D.x,
                            y: D.y + D.height + M.height / 2
                        }
                    },
                    37: function(y, M) {
                        return {
                            x: y.x + y.width,
                            y: y.y + y.height + M.height / 2
                        }
                    },
                    38: function($, W) {
                        return {
                            x: $.x + $.width / 4,
                            y: $.y - W.height / 2
                        }
                    },
                    39: function(X, E) {
                        return {
                            x: X.x + 3 * X.width / 4,
                            y: X.y - E.height / 2
                        }
                    },
                    40: function(g) {
                        return {
                            x: g.x + g.width / 4,
                            y: g.y
                        }
                    },
                    41: function(k) {
                        return {
                            x: k.x + 3 * k.width / 4,
                            y: k.y
                        }
                    },
                    42: function(Q, u) {
                        return {
                            x: Q.x + Q.width / 4,
                            y: Q.y + u.height / 2
                        }
                    },
                    43: function(c, U) {
                        return {
                            x: c.x + 3 * c.width / 4,
                            y: c.y + U.height / 2
                        }
                    },
                    44: function(M, L) {
                        return {
                            x: M.x + M.width / 2,
                            y: M.y + M.height / 2 - L.height / 2
                        }
                    },
                    45: function($) {
                        return {
                            x: $.x + $.width / 4,
                            y: $.y + $.height / 2
                        }
                    },
                    46: function(e, p) {
                        return {
                            x: e.x + e.width / 2 - p.width / 2,
                            y: e.y + e.height / 2
                        }
                    },
                    47: function(t, i) {
                        return {
                            x: t.x + t.width / 2 + i.width / 2,
                            y: t.y + t.height / 2
                        }
                    },
                    48: function(h) {
                        return {
                            x: h.x + 3 * h.width / 4,
                            y: h.y + h.height / 2
                        }
                    },
                    49: function(k, y) {
                        return {
                            x: k.x + k.width / 2,
                            y: k.y + k.height / 2 + y.height / 2
                        }
                    },
                    50: function(G, Z) {
                        return {
                            x: G.x + G.width / 4,
                            y: G.y + G.height - Z.height / 2
                        }
                    },
                    51: function(J, H) {
                        return {
                            x: J.x + 3 * J.width / 4,
                            y: J.y + J.height - H.height / 2
                        }
                    },
                    52: function(I) {
                        return {
                            x: I.x + I.width / 4,
                            y: I.y + I.height
                        }
                    },
                    53: function(j) {
                        return {
                            x: j.x + 3 * j.width / 4,
                            y: j.y + j.height
                        }
                    },
                    54: function(F, p) {
                        return {
                            x: F.x + F.width / 4,
                            y: F.y + F.height + p.height / 2
                        }
                    },
                    55: function(b, P) {
                        return {
                            x: b.x + 3 * b.width / 4,
                            y: b.y + b.height + P.height / 2
                        }
                    }
                };
                return Vl(c) ? function(P, r, M) {
                    return J[P](r, M ? M : Kh)
                } : void 0
            }();
        yd(Z, {
            highlight: "#1ABC9C",
            label: "#000",
            labelSelect: "#FFF",
            transparent: "rgba(0,0,0,0.35)",
            titleBackground: "#2C3E50",
            titleIconBackground: "#868686",
            headerBackground: "#ECF0F1",
            headerIconBackground: "#868686",
            headerSeparator: "#868686",
            headerLine: "#D9D9D9",
            background: "#FFF",
            disabledBackground: "rgba(255,255,255,0.65)",
            toolTipBackground: "#FFFFE0",
            rectSelectBorder: "#2C3E50",
            rectSelectBackground: "rgba(0,0,0,0.35)",
            editPointBorder: "#2C3E50",
            editPointBackground: "#D9D9D9",
            dash: "#2C3E50",
            groupBackground: "#ECF0F1",
            groupTitleBackground: "#2C3E50",
            gridBackground: "#D9D9D9",
            gridCellBorderColor: "#868686",
            gridBlockColor: "#868686",
            reverse: "#868686",
            contentIconBackground: "#868686",
            contentLine: "#D9D9D9",
            widgetBackground: "#ECF0F1",
            widgetBorder: "#D9D9D9",
            widgetIconBackground: "#868686",
            widgetIconBorder: "#868686",
            widgetIconGradient: "#D9D9D9",
            widgetIconHighlight: "#43AFF1",
            imageBackground: "#3498DB",
            imageGradient: "#D9D9D9",
            chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
        }, !0);
        var Gf = Z.reverse,
            wr = Z.transparent,
            $c = Z.rectSelectBackground,
            Xj = Z.dash,
            zc = Z.titleBackground,
            dn = Z.titleIconBackground,
            Eg = Z.headerBackground,
            lq = Z.headerIconBackground,
            zg = Z.headerSeparator,
            $j = Z.headerLine,
            lo = Z.contentIconBackground,
            cm = Z.contentLine,
            Oh = (Z.widgetIconHighlight, Z.widgetIconBorder),
            Tg = (Z.widgetIconGradient, Z.imageBackground),
            vp = Z.imageGradient,
            Zr = Z.highlight,
            mr = Z.label,
            vr = Z.labelSelect;
        if (w && !c.noAlert) {
            var dc = new Date,
                vj = w.split("-"),
                vs = new Date(dc.getFullYear(), dc.getMonth(), dc.getDate()),
                w = new Date(t(vj[0], 10), t(vj[1], 10) - 1, t(vj[2], 10)),
                fg = vs.getTime(),
                Uo = w.getTime(),
                wf = n + "_try",
                ip = c.localStorage,
                yg = c.alert;
            if (ip && yg)
                if (Uo > fg && 1728e6 > Uo - fg) {
                    var Aq = (Uo - fg) / 864e5;
                    ip && ip[wf] != Aq && (ip[wf] = Aq, yg("HT for Web free trial license will expire in " + Aq + " days, please apply for a new license!"))
                } else fg >= Uo && yg("Your free trial of HT for Web has expired!"), ip && delete ip[wf]
        }
        var wi = {
            ms_ac: function(n, S) {
                for (var s = S.ms_ac, A = 0; A < s.length; A++) em(n, s[A])
            },
            ms_listener: function(B) {
                B.addListeners = function() {
                    for (var x = this, $ = 0; $ < Zb.length; $++) x["handle_" + Zb[$]] && np(Zb[$], x.getView(), x)
                }, B.removeListeners = function() {
                    for (var U = this, r = 0; r < Zb.length; r++) U["handle_" + Zb[r]] && Rf(Zb[r], U.getView(), U)
                }
            },
            ms_fire: function(k) {
                k.mp = function(A, v, d) {
                    this.addPropertyChangeListener(A, v, d)
                }, k.ump = function(c, v) {
                    this.removePropertyChangeListener(c, v)
                }, k.fp = function(D, r, P, a) {
                    return this.firePropertyChange(D, r, P, a)
                }, k.addPropertyChangeListener = function(V, e, t) {
                    var s = this;
                    s._62I || (s._62I = new $i), s._62I.add(V, e, t)
                }, k.removePropertyChangeListener = function(u, a) {
                    this._62I && this._62I.remove(u, a)
                }, k.firePropertyChange = function(T, C, U, u) {
                    if (u) {
                        if (u(C, U)) return !1
                    } else if (C === U) return !1;
                    var N = this,
                        q = {
                            property: T,
                            oldValue: C,
                            newValue: U,
                            source: N,
                            data: N
                        };
                    return N._62I && N._62I.fire(q), N.onPropertyChanged && N.onPropertyChanged(q), !0
                }
            },
            ms_attr: function(x) {
                x.a = function(z, Z) {
                    var n = this;
                    if (2 === arguments.length) n.setAttr(z, Z);
                    else {
                        if (!Je(z)) return n.getAttr(z);
                        for (var j in z) n.setAttr(j, z[j])
                    }
                    return n
                }, x.getAttr = function(e) {
                    return this._attrObject ? this._attrObject[e] : y
                }, x.setAttr = function(i, p) {
                    var Z = this;
                    Z._attrObject || (Z._attrObject = {});
                    var f = Z._attrObject[i];
                    p === y ? delete Z._attrObject[i] : Z._attrObject[i] = p, Z.fp && Z.fp("a:" + i, f, p) && Z.onAttrChanged && Z.onAttrChanged(i, f, p)
                }, x.getSerializableAttrs = function() {
                    var N, P = {};
                    for (N in this._attrObject) P[N] = 1;
                    return P
                }
            },
            ms_bnb: function(r) {
                r.getBodyColor = function(A) {
                    return A.s("body.color")
                }, r.getBorderColor = function(f) {
                    return f.s("border.color")
                }
            },
            _51o: function(s) {
                s.mi = function(g, P, V) {
                    this.addInteractorListener(g, P, V)
                }, s.umi = function(O, S) {
                    this.removeInteractorListener(O, S)
                }, s.fi = function(o) {
                    this.fireInteractorEvent(o)
                }, s.addInteractorListener = function(D, V, i) {
                    var W = this;
                    W._63I || (W._63I = new $i), W._63I.add(D, V, i)
                }, s.removeInteractorListener = function(N, L) {
                    this._63I.remove(N, L)
                }, s.fireInteractorEvent = function(u) {
                    this._63I && this._63I.fire(u)
                }, s.setInteractors = function(b) {
                    var K = this,
                        i = K._interactors;
                    i && i.each(function(y) {
                        y.tearDown()
                    }), _o(b) && (b = new pm(b)), K._interactors = b, b && b.each(function(P) {
                        P.setUp()
                    }), K.fp("interactors", i, b), K.invalidateSelection()
                }, s.getInteractors = function() {
                    return this._interactors
                }
            },
            _49o: function(J) {
                J._44O = r, J._45O = r, J.addTopPainter = function(t) {
                    var l = this;
                    l._44O || (l._44O = new pm), l._44O.contains(t) || (l._44O.add(t), l.redraw && l.redraw())
                }, J.removeTopPainter = function(M) {
                    var I = this;
                    I._44O && (I._44O.remove(M), I.redraw && I.redraw())
                }, J.addBottomPainter = function(P) {
                    var W = this;
                    W._45O || (W._45O = new pm), W._45O.contains(P) || (W._45O.add(P), W.redraw && W.redraw())
                }, J.removeBottomPainter = function(c) {
                    var H = this;
                    H._45O && (H._45O.remove(c), H.redraw && H.redraw())
                }, J._93db = function(_, V) {
                    var q = this;
                    q._45O && q._45O.each(function(m) {
                        m.draw ? m.draw(_, V) : m.call(q, _, V)
                    })
                }, J._92db = function(N, M) {
                    var k = this;
                    k._44O && k._44O.each(function(g) {
                        g.draw ? g.draw(N, M) : g.call(k, N, M)
                    })
                }
            },
            ms_sm: function(P) {
                P.sm = function() {
                    return this.getSelectionModel()
                }, P.setSelectableFunc = function(m) {
                    this.sm().setFilterFunc(m)
                }, P.getSelectableFunc = function() {
                    return this.sm().getFilterFunc()
                }, P.getSelectionModel = function() {
                    var x = this;
                    return x._selectionModel ? x._selectionModel : x.dm().sm()
                }, P.isSelectionModelShared = function() {
                    return !this._selectionModel
                }, P.setSelectionModelShared = function(x) {
                    var U = this,
                        v = !U._selectionModel,
                        C = U.handleSelectionChange,
                        t = U.dm();
                    v !== x && (U.invalidateSelection && U.invalidateSelection(), x ? (t.sm().ms(C, U), U._selectionModel.ums(C, U), U._selectionModel.dispose(), U._selectionModel = r) : (t.sm().ums(C, U), U._selectionModel = new Qj(t), U._selectionModel.ms(C, U)), U.onSelectionModelSharedChanged(), U.fp("selectionModelShared", v, x))
                }, P.onSelectionModelSharedChanged = function() {
                    var C = this;
                    C.redraw(), C.invalidateSelection && C.invalidateSelection()
                }, P.removeSelection = function() {
                    var x = this.dm(),
                        m = x.getHistoryManager();
                    m && m.beginInteraction(), this.sm().toSelection().each(x.remove, x), m && m.endInteraction()
                }, P.selectAll = function() {
                    var k = this;
                    k.sm().ss(k.dm().toDatas(function(V) {
                        return k.isVisible(V) && k.isSelectable(V)
                    }))
                }, P.isSelected = function(V) {
                    return this.sm().co(V)
                }, P.isSelectedById = function(u) {
                    var K = this.dm().getDataById(u);
                    return K ? this.isSelected(K) : !1
                }, P.isSelectable = function(O) {
                    return this.sm().isSelectable(O)
                }
            },
            ms_tx: function(f) {
                f._64I = 0, f._65O = 0, f.isScrollable = function() {
                    return this.getWidth() < this._64I
                }, f._40o = function() {
                    return this.isScrollable()
                }, f.getLogicalPoint = function(m) {
                    return Jd(m, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
                }, f.tx = function(V) {
                    return V === y ? this.getTranslateX() : (this.setTranslateX(V), void 0)
                }, f.getTranslateX = function() {
                    return this._65O
                }, f.setTranslateX = function(I) {
                    var n = this,
                        z = n.getWidth() - n._64I;
                    z > I && (I = z), I > 0 && (I = 0), I = T(I);
                    var Z = n._65O;
                    n._65O = I, n.fp(Ec, Z, I)
                }
            },
            ms_ty: function(s) {
                s._23Q = 0, s._66O = 0, s._41o = function() {
                    return this.getHeight() < this._23Q
                }, s.getLogicalPoint = function(j) {
                    return Jd(j, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
                }, s.ty = function(t) {
                    return t === y ? this.getTranslateY() : (this.setTranslateY(t), void 0)
                }, s.getTranslateY = function() {
                    return this._66O
                }, s.setTranslateY = function(X) {
                    var I = this,
                        L = I.getHeight() - I._23Q;
                    L > X && (X = L), X > 0 && (X = 0), X = T(X);
                    var z = I._66O;
                    I._66O = X, I.fp(Kk, z, X)
                }
            },
            ms_txy: function(q) {
                q._65O = 0, q._66O = 0, q.tx = function(t) {
                    return t === y ? this.getTranslateX() : (this.setTranslateX(t), void 0)
                }, q.ty = function(T) {
                    return T === y ? this.getTranslateY() : (this.setTranslateY(T), void 0)
                }, q.onTranslateEnded = function() {}, q.setTranslate = function(l, W, i) {
                    var o = this;
                    if (i = _f(i)) {
                        o._65I && o._65I.stop(!0);
                        var g = o.tx(),
                            C = o.ty();
                        i.action = function(w) {
                            o.setTranslate(g + (l - g) * w, C + (W - C) * w)
                        }, i._37o = function() {
                            delete o._66I, delete o._65I, o.onTranslateEnded()
                        }, o._66I = 1, o._65I = Ub(i)
                    } else o.tx(l), o.ty(W)
                }, q.getTranslateX = function() {
                    return this._65O
                }, q.setTranslateX = function(s) {
                    var A = this;
                    s = A.adjustTranslateX(s);
                    var r = A._65O;
                    A._65O = s, A.fp(Ec, r, s)
                }, q.getTranslateY = function() {
                    return this._66O
                }, q.setTranslateY = function(e) {
                    var l = this;
                    e = l.adjustTranslateY(e);
                    var y = l._66O;
                    l._66O = e, l.fp(Kk, y, e)
                }, q.adjustTranslateX = function(Y) {
                    return T(Y)
                }, q.adjustTranslateY = function(e) {
                    return T(e)
                }, q.translate = function(I, B, Z) {
                    this.setTranslate(this.tx() + I, this.ty() + B, Z)
                }, q.getLogicalPoint = function(O) {
                    var G = this;
                    return Jd(O, this._canvas || G._view, G.tx(), G.ty())
                }
            },
            ms_dm: function(n) {
                n.dm = function(e) {
                    return e ? (this.setDataModel(e), void 0) : this.getDataModel()
                }, n.getDataModel = function() {
                    return this._dataModel
                }
            },
            ms_lp: function(x) {
                x.lp = function(p) {
                    return this.getLogicalPoint(p)
                }
            },
            ms_v: function(g) {
                g._disabled = !1, g.setDisabled = function(s, T) {
                    var l = this,
                        y = l._disabled;
                    y !== s && (y && (Nl(l._63O), delete l._63O), s && (Hb(l._view, l._63O = jm(T)), l.iv()), l._disabled = s, l.fp("disabled", y, s))
                }, g.isDisabled = function() {
                    return this._disabled
                }, g.getView = function() {
                    return this._view
                }, g.addToDOM = function() {
                    var q = this,
                        v = q.getView(),
                        D = v.style;
                    U.body.appendChild(v), D.left = "0", D.right = "0", D.top = "0", D.bottom = "0", c.addEventListener("resize", function() {
                        q.iv()
                    }, !1), q.iv()
                }, g.getWidth = function() {
                    return this._view.clientWidth
                }, g.getHeight = function() {
                    return this._view.clientHeight
                }, g.setWidth = function(S) {
                    var V = this;
                    V._view.style.width = S + Yg, V.iv(), V.fp && V.fp(kk, r, S)
                }, g.setHeight = function(H) {
                    var p = this;
                    p._view.style.height = H + Yg, p.iv(), p.fp && p.fp(uk, r, H)
                }, g.setFocus = function(j) {
                    var c = this,
                        A = c._currentEditor;
                    return j && A && (A.getView && (A = A.getView()), A.contains(j.target)) ? !1 : (Po(c._view), c.endEditing && c.endEditing(), c.fireViewEvent("focus"), !0)
                }, g.iv = function(t) {
                    this.invalidate(t)
                }, g.invalidate = function(y) {
                    var w = this;
                    w._68I || (w._68I = 1, cf(w.validate, w, r, y), w.onInvalidated && w.onInvalidated(), w.fireViewEvent("invalidate"))
                }, g.validate = function() {
                    var O = this,
                        P = O._view;
                    if (O._68I && (delete O._68I, P.parentNode))
                        if (0 === P.offsetWidth && 0 === P.offsetHeight && O._67I !== r) O._67I === y && (O._67I = S.reinvalidateCount), O._67I > 0 ? O._67I-- : O._67I = r, O.iv();
                        else {
                            O.fireViewEvent("beginValidate"), O.validateImpl(), O.onValidated && O.onValidated(), O.fireViewEvent("validate");
                            var Y = O._63O;
                            Y && (P.lastChild !== Y && (Nl(Y), Hb(P, Y)), Ho(Y, 0, 0, O.getWidth(), O.getHeight())), Ef(O), zn(O)
                        }
                }, g.layout = function(y, C, E, H) {
                    1 === arguments.length ? Ho(this, y) : Ho(this, y, C, E, H)
                }, g.addViewListener = function(x, H, G) {
                    var Z = this;
                    Z._67O || (Z._67O = new $i), Z._67O.add(x, H, G)
                }, g.removeViewListener = function(H, L) {
                    this._67O.remove(H, L)
                }, g.fireViewEvent = function(a) {
                    var t = this;
                    t._67O && (Rr(a) && (a = {
                        kind: a
                    }), t._67O.fire(a)), S.viewListener && S.viewListener(t, a)
                }
            },
            ms_tip: function(L) {
                L.setToolTipEnabled = function(d) {
                    var P = this;
                    d ? h || P._13o || (P.enableToolTip(), P.fp("toolTipEnabled", !1, !0)) : P._13o && (P.disableToolTip(), P.fp("toolTipEnabled", !0, !1))
                }, L.isToolTipEnabled = function() {
                    return !!this._13o
                }, L.enableToolTip = function() {
                    var D = this;
                    h || D._13o || (D._13o = function(v) {
                        var d = D.getToolTip(v);
                        d != r ? S.toolTipContinual && S.isToolTipShowing() ? Ur(v, d) : (Fk(), Em = {
                            timeout: V(Rk, Yf),
                            e: v,
                            info: d
                        }) : Fk()
                    }, D.getView().addEventListener(lb, D._13o, !1), D.getView().addEventListener("mouseleave", S.hideToolTip, !1))
                }, L.disableToolTip = function() {
                    var d = this;
                    d._13o && (d.getView().removeEventListener(lb, d._13o, !1), d.getView().removeEventListener("mouseleave", S.hideToolTip, !1), delete d._13o)
                }, L.getToolTip = function(R) {
                    var u = this;
                    if (u.getDataAt) {
                        var Z = u.getDataAt(R);
                        return Z ? Z.getToolTip() : r
                    }
                    return u.getValue ? mn(u.getValue()) : void 0
                }
            },
            _52o: function(C) {
                C._zoom = 1, C._29I = Kh, C.zoomIn = function(V, i) {
                    this.setZoom(this._zoom * wd, V, i)
                }, C.zoomOut = function(u, n) {
                    this.setZoom(this._zoom / wd, u, n)
                }, C.zoomReset = function(V, G) {
                    this.setZoom(1, V, G)
                }, C.scrollZoomIn = function(H) {
                    this.setZoom(this._zoom * Nj, r, H)
                }, C.scrollZoomOut = function(p) {
                    this.setZoom(this._zoom / Nj, r, p)
                }, C.pinchZoomIn = function(M) {
                    this.setZoom(this._zoom * xk, r, M)
                }, C.pinchZoomOut = function(Y) {
                    this.setZoom(this._zoom / xk, r, Y)
                }, C.adjustZoom = function($) {
                    return Jk > $ ? Jk : $ > Le ? Le : $
                }, C.getZoom = function() {
                    return this._zoom
                }, C.setZoom = function(F, X, j) {
                    var T = this;
                    if (X = _f(X)) {
                        T._14o && T._14o.stop(!0);
                        var Y = T._zoom;
                        X.action = function(w) {
                            T._96O(Y + (F - Y) * w, j)
                        }, X._37o = function() {
                            delete T._zooming, delete T._14o, T.onZoomEnded()
                        }, T._zooming = 1, T._14o = Ub(X)
                    } else T._96O(F, j)
                }, C._96O = function(D, W) {
                    var O = this;
                    if (D = O.adjustZoom(D), D !== O._zoom) {
                        O.validate();
                        var U = O._29I,
                            X = O._zoom;
                        0 !== U.width && 0 !== U.height && (W = W ? W : {
                            x: U.x + U.width / 2,
                            y: U.y + U.height / 2
                        }, O.tx((W.x - U.x) * X - W.x * D), O.ty((W.y - U.y) * X - W.y * D)), O._zoom = D, O.fp("zoom", X, D)
                    }
                }
            }
        };
        yd(S, {
            baseZIndex: y,
            isTouchable: h,
            devicePixelRatio: c.devicePixelRatio ? c.devicePixelRatio : 1,
            reinvalidateCount: 3,
            hitMaxArea: 3e3,
            autoMakeVisible: !0,
            autoHideScrollBar: !0,
            disabledOpacity: .4,
            disabledBackground: Z.disabledBackground,
            toolTipDelay: 800,
            toolTipContinual: !1,
            getDragger: function() {
                return Gi
            },
            lineCap: "butt",
            lineJoin: "round",
            imageGradient: "linear.northeast",
            dashPattern: [16, 16],
            animDuration: 200,
            animEasing: function(r) {
                return r * r
            },
            labelColor: mr,
            labelSelectColor: vr,
            labelFont: (h ? "15" : "12") + "px arial, sans-serif",
            widgetIndent: h ? 30 : 20,
            widgetRowHeight: h ? 30 : 20,
            widgetHeaderHeight: h ? 32 : 22,
            widgetTitleHeight: h ? 34 : 24,
            scrollBarColor: wr,
            scrollBarSize: 7,
            scrollBarTimeout: 1e3,
            scrollBarMinLength: 20,
            scrollBarInteractiveSize: h ? 32 : 16,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            zoomMax: 20,
            zoomMin: .01,
            segmentResolution: 12,
            shapeResolution: 24,
            shapeSide: 24,
            intersectionLineRect: Xi,
            intersectionLineLine: Tq,
            isEnter: uj,
            isEsc: Go,
            isDelete: Rd,
            isSpace: Pc,
            isLeft: es,
            isUp: pk,
            isRight: rb,
            isDown: ub,
            getTarget: Ml,
            isString: Rr,
            isNumber: dl,
            isBoolean: fc,
            isArray: _o,
            isSelectAll: nq,
            isFunction: eh,
            getVersion: function() {
                return "6.0.5"
            },
            setCompType: function(y, F) {
                eh(F) || Je(F) ? cc[y] = F : Mk(y)
            },
            getCompType: function(f) {
                return cc[f]
            },
            getCompTypeMap: function() {
                return cc
            },
            drawCompType: function(z, b, N, x, J, g) {
                z(b, N, x, J, g)
            },
            numberListener: function() {
                var T = {
                    46: 1,
                    8: 1,
                    9: 1,
                    27: 1,
                    13: 1,
                    109: 1,
                    110: 1,
                    189: 1,
                    190: 1
                };
                return function(X) {
                    var h = X.keyCode;
                    T[h] || 65 === h && S.isCtrlDown(X) || h >= 35 && 39 >= h || (X.shiftKey || 48 > h || h > 57) && (96 > h || h > 105) && X.preventDefault()
                }
            }(),
            ignoreKeyCodes: [122, 123],
            preventDefault: function(n) {
                var Q = n.target.tagName;
                ("DIV" === Q || "CANVAS" === Q) && !(S.ignoreKeyCodes.indexOf(n.keyCode) >= 0) && ("keydown" !== n.type || es(n) || rb(n) || pk(n) || ub(n) || Rd(n) || 65 === n.keyCode && (n.metaKey || n.ctrlKey)) && (n.preventDefault(), n.preventManipulation && n.preventManipulation())
            },
            getWindowInfo: function() {
                var u = U.documentElement,
                    O = u && (u.scrollLeft || u.scrollTop) ? u : U.body;
                return {
                    target: O,
                    left: O.scrollLeft,
                    top: O.scrollTop,
                    width: c.innerWidth || O.clientWidth,
                    height: c.innerHeight || O.clientHeight
                }
            },
            isDragging: function() {
                return !!Gi
            },
            isLeftButton: function(b) {
                return h ? !0 : 0 === b.button
            },
            isInput: function(S) {
                if (!S) return !1;
                var b = S.tagName;
                return "INPUT" === b || "TEXTAREA" === b || "SELECT" === b
            },
            getTouchCount: function(Z) {
                return h ? Z.touches.length : 1
            },
            isDoubleClick: function() {
                var _ = {};
                return Li = new Date, Id = Li.getTime(),
                    function(g) {
                        var Z = (new Date).getTime(),
                            k = g.type,
                            B = k + "_isDoubleClick",
                            T = _[k];
                        if (T || (T = _[k] = {
                                details: 0,
                                timeout: null,
                                lastPoint: null,
                                lastTime: Z
                            }), g[B] === y) {
                            var R = Lf(g);
                            g[B] = T.lastPoint && ls(T.lastPoint, R) < 20 && Z - T.lastTime < 500, T.lastTime = Z, T.lastPoint = R, T.details++, T.timeout && (e(T.timeout), T.timeout = null), T.timeout = V(function() {
                                this.details = 0, this.timeout = null, this.lastPoint = null
                            }.bind(T), 500)
                        }
                        return !!g[B] && 2 === T.details
                    }
            }(),
            isShiftDown: function(i) {
                return i ? i.shiftKey : zm["16"]
            },
            isCtrlDown: function(I) {
                return I ? a ? I.metaKey : I.ctrlKey : a ? zm["91"] : zm["17"]
            },
            getClientPoint: function(T) {
                return h && (T = Te(T)), {
                    x: T.clientX,
                    y: T.clientY
                }
            },
            isMouseEvent: function(C) {
                return C instanceof MouseEvent || 0 === C.type.indexOf("mouse")
            },
            getTargetElement: function(T) {
                if (S.isMouseEvent(T) || !U.elementFromPoint) return T.target;
                var H = Pb(T);
                return U.elementFromPoint(H.x, H.y)
            },
            getPagePoint: function(q) {
                return h && (q = Te(q)), {
                    x: q.pageX,
                    y: q.pageY
                }
            },
            createObject: function(S, p) {
                var P = new S;
                for (var r in p) {
                    var V = qe(r),
                        D = p[r];
                    P[V] ? (P[V](D), "setToolTip" === V && P.enableToolTip && P.enableToolTip()) : P[r] = D
                }
                return P
            },
            setImage: function(A, s, Q, x) {
                var S = arguments.length;
                4 === S ? hj(A, x, s, Q) : 2 === S ? Rr(s) ? hj(A, s) : wl[A] = s : 1 === S && hj(A, A)
            },
            getImage: function(I, a) {
                var A;
                if (I == r) return r;
                if (Je(I) ? A = I : (A = wl[I], I && A === y && (Gp && Gp[I] || hj(I, I))), a && A && A.tagName) {
                    A.colors || (A.colors = {});
                    var t = A.colors[a];
                    return t || (t = er(A, vk(a), A.width, A.height), A.colors[a] = t), t
                }
                return A
            },
            getId: function() {
                var H = 1;
                return function() {
                    return ++H
                }
            }(),
            callLater: function(k, t, K, C) {
                var G = function() {
                    k.apply(t, K)
                };
                return C ? V(G, C) : c.requestAnimationFrame(G)
            },
            asyncEach: function(x, J, f) {
                "function" != typeof f && (f = Function.prototype);
                var S = new Array(x.length),
                    j = 0,
                    z = !1;
                x.forEach(function(m, v) {
                    J(m, function(X, L) {
                        return z ? void 0 : X ? (z = !0, f(null)) : (S[v] = L, j++, j === x.length ? f(S) : void 0)
                    })
                })
            },
            xhrLoad: function(M, e, C) {
                var w = !1;
                _o(M) || (w = !0, M = [M]), M.length;
                var j = C && C.sync;
                Af(M, function(x, E) {
                    var n = new XMLHttpRequest;
                    n.overrideMimeType("text/plain"), S.convertURL && (x = S.convertURL(x)), x.data ? E(null, x.data) : (n.open("GET", encodeURI(x), !j), n.onload = function(R) {
                        200 === this.status || 0 === this.status ? E(null, R.target.response) : E(!0)
                    }, n.onerror = function() {
                        E(!0)
                    }, n.send(null))
                }, function(I) {
                    "function" == typeof e && e(w && I ? I[0] : I)
                })
            },
            clone: function(P) {
                if (!P) return r;
                if (_o(P)) return P.slice(0);
                if (hg(P)) return new pm(P);
                if (Je(P)) {
                    var R, l = {};
                    for (R in P) l[R] = P[R];
                    return l
                }
                return P
            },
            handleCompTypeLoaded: function() {},
            handleImageLoaded: function() {},
            handleUnfoundImage: function() {},
            sortFunc: function(e, P) {
                if (e === P) return 0;
                if (e == r && P != r) return 1;
                if (e != r && P == r) return -1;
                if (e == r && P == r) return 0;
                var R, I = typeof e,
                    x = typeof P;
                return I === Gq && x === Gq ? R = e.localeCompare(P) : I === dh && x === dh && (R = e - P), R === y && (R = ("" + e).localeCompare("" + P)), R > 0 ? 1 : 0 > R ? -1 : 0
            },
            getClassMap: function() {
                return dp
            },
            getClass: function(G) {
                if (Rr(G)) {
                    var M, H = dp[G];
                    if (!H) {
                        M = G.split("."), H = c;
                        for (var y = 0; y < M.length; y++) H = H[M[y]];
                        dp[G] = H
                    }
                    return H
                }
                return G
            },
            def: function(U, S, x) {
                var B, n, k, q = function() {};
                if (q.prototype = S.prototype, B = new q, Rr(U)) {
                    if (dp[U]) throw "'" + U + "' already defined";
                    k = Xc(U), B.getClassName = function() {
                        return U
                    }
                } else k = U;
                if (B.constructor = k, B.getClass = function() {
                        return k
                    }, B.getSuperClass = function() {
                        return S
                    }, x)
                    for (n in x) wi[n] && wi.hasOwnProperty(n) ? wi[n](B, x) : _j(B, x, n);
                k.prototype = B, k.superClass = S.prototype
            },
            startAnim: function() {
                var Z = function(N) {
                    N.duration && (N.startTime = To()), N.timeId = cf(N.tick, r, r, N.interval)
                };
                return function(F) {
                    return F = Dh(F), F.easing = F.easing || S.animEasing, F.duration || F.frames || (F.duration = S.animDuration), F.t = 0, F.duration ? F.interval = 0 : (F.frame = 0, F.interval = F.interval || 10), F.tick = function() {
                        if (F.duration) {
                            var V = (To() - F.startTime) / F.duration;
                            V > 1 && (V = 1), F.t = V, F.action(F.easing(V), V), 1 === V ? F.stop() : F._isPaused || (F.timeId = cf(F.tick))
                        } else F.frame++, V = F.t = F.frame / F.frames, F.action(F.easing(V), V), F.frame < F.frames ? F._isPaused || (F.timeId = cf(F.tick, r, r, F.interval)) : F.stop()
                    }, F.resume = function() {
                        F._isPaused && (delete F._isPaused, F.duration ? F.t < 1 && (F.startTime = To() - F.duration * F.t, F.timeId = cf(F.tick)) : F.frame < F.frames && (F.timeId = cf(F.tick, r, r, F.interval)))
                    }, F.pause = function() {
                        F._isPaused = !0
                    }, F.stop = function(S) {
                        F.isRunning() && (F.duration ? F.t < 1 && S && (F.t = 1, F.action(F.easing(1))) : F.frame < F.frames && S && (F.frame = F.frames, F.action(F.easing(1))), F._37o && F._37o(), F.finishFunc && F.finishFunc(), Qb(F.timeId, !F.duration), delete F.timeId)
                    }, F.isRunning = function() {
                        return F.timeId != r
                    }, F.delay ? cf(Z, r, [F], F.delay) : Z(F), F
                }
            }(),
            getTextSize: function() {
                var h = {},
                    t = U ? Tl().getContext("2d") : r;
                return function(z, Z) {
                    t.font = z ? z : Th;
                    var R = h[t.font];
                    return R || (R = 2 * t.measureText("e").width + 4, h[t.font] = R), {
                        width: t.measureText(Z).width + 4,
                        height: R
                    }
                }
            }(),
            drawText: function(H, U, N, e, t, E, l, C, F, y) {
                if (U != r) {
                    var j = ir(N, U),
                        n = {};
                    n.y = y && y !== bo ? y === Un ? E + j.height / 2 : E + C - j.height / 2 : E + C / 2, n.x = F && F !== fp ? F === th ? t + l - j.width / 2 : t + l / 2 : t + j.width / 2, jh(H, U, n, N, e)
                }
            },
            getDistance: function(u, i) {
                var J = u.length;
                return i ? 3 === J ? Q(g(u[0] - i[0]) + g(u[1] - i[1]) + g(u[2] - i[2])) : 2 === J ? Q(g(u[0] - i[0]) + g(u[1] - i[1])) : u.z === y ? Q(g(i.x - u.x) + g(i.y - u.y)) : Q(g(i.x - u.x) + g(i.y - u.y) + g(i.z - u.z)) : 3 === J ? Q(g(u[0]) + g(u[1]) + g(u[2])) : 2 === J ? Q(g(u[0]) + g(u[1])) : void 0
            },
            brighter: function(o, p) {
                return 0 > p && (p = -p), Sc(o, p ? p : 40)
            },
            darker: function(w, x) {
                return x > 0 && (x = -x), Sc(w, x ? x : -40)
            },
            unionPoint: function(i, u) {
                if (!i) return r;
                if (2 === arguments.length) return i && u ? {
                    x: I(i.x, u.x),
                    y: I(i.y, u.y),
                    width: E(i.x - u.x),
                    height: E(i.y - u.y)
                } : r;
                var Z = i;
                if (Z._as && (Z = Z._as), Z.length === y) return r;
                var T = Z.length;
                if (0 >= T) return r;
                for (var w = 1, f = Z[0], h = {
                        x: f.x,
                        y: f.y,
                        width: 0,
                        height: 0
                    }; T > w; w++) {
                    f = Z[w];
                    var o = I(h.x, f.x),
                        x = v(h.x + h.width, f.x),
                        $ = I(h.y, f.y),
                        P = v(h.y + h.height, f.y);
                    h.x = o, h.y = $, h.width = x - o, h.height = P - $
                }
                return h
            },
            unionRect: function(W, U) {
                if (W && !U) return Dh(W);
                if (!W && U) return Dh(U);
                if (W && U) {
                    var a = {
                        x: I(W.x, U.x),
                        y: I(W.y, U.y)
                    };
                    return a.width = v(W.x + W.width, U.x + U.width) - a.x, a.height = v(W.y + W.height, U.y + U.height) - a.y, a
                }
                return r
            },
            containsPoint: function(C, R) {
                return !(!C || R.x < C.x || R.y < C.y || R.x > C.x + C.width || R.y > C.y + C.height)
            },
            containsRect: function(U, e) {
                if (!U || !e) return !1;
                var S = e.x,
                    s = e.y,
                    W = e.width,
                    N = e.height,
                    z = U.width,
                    D = U.height;
                if (0 > (z | D | W | N)) return !1;
                var c = U.x,
                    I = U.y;
                if (c > S || I > s) return !1;
                if (z += c, W += S, S >= W) {
                    if (z >= c || W > z) return !1
                } else if (z >= c && W > z) return !1;
                if (D += I, N += s, s >= N) {
                    if (D >= I || N > D) return !1
                } else if (D >= I && N > D) return !1;
                return !0
            },
            intersectsRect: function(K, U) {
                if (!K || !U) return !1;
                var d = U.width,
                    w = U.height,
                    P = K.width,
                    r = K.height;
                if (0 >= P || 0 >= r || 0 >= d || 0 >= w) return !1;
                var S = U.x,
                    i = U.y,
                    o = K.x,
                    q = K.y;
                return P += o, r += q, d += S, w += i, P > S && r > i && d > o && w > q
            },
            intersection: function(F, G) {
                if (!F || !G) return r;
                var C = G.x,
                    u = G.y,
                    H = F.x,
                    Q = F.y,
                    W = C,
                    D = u,
                    B = H,
                    X = Q;
                return W += G.width, D += G.height, B += F.width, X += F.height, H > C && (C = H), Q > u && (u = Q), W > B && (W = B), D > X && (D = X), W -= C, D -= u, 0 >= W || 0 >= D ? r : {
                    x: C,
                    y: u,
                    width: W,
                    height: D
                }
            },
            grow: function(z, t) {
                z.x -= t, z.y -= t, z.width = z.width + 2 * t, z.height = z.height + 2 * t
            },
            getLogicalPoint: function(R, m, s, j, S, X) {
                var o = m.getBoundingClientRect();
                return R = h ? Te(R) : R, {
                    x: (R.clientX - o.left + m.scrollLeft - (s || 0)) / (S || 1),
                    y: (R.clientY - o.top + m.scrollTop - (j || 0)) / (X || 1)
                }
            },
            removeHTML: function() {
                var U;
                return function(p) {
                    return p && p.parentNode ? U === p ? !0 : (U = p, p.parentNode.removeChild(p), U = r, !0) : !1
                }
            }(),
            getToolTipDiv: function() {
                if (!Rl) {
                    Rl = gb(), Fi = gb();
                    var X = Rl.style;
                    S.baseZIndex != r && (X.zIndex = t(S.baseZIndex) + 3 + ""), X.whiteSpace = "nowrap", X.color = S.toolTipLabelColor, X.background = S.toolTipBackground, X.font = S.toolTipLabelFont, X.padding = "5px", X.boxShadow = "0px 0px 3px " + S.toolTipShadowColor
                }
                return Rl
            },
            isToolTipShowing: function() {
                return Rl && Rl.parentNode ? !0 : Fi && Fi.parentNode ? !0 : !1
            },
            hideToolTip: function() {
                Nl(Rl), Nl(Fi), nd()
            },
            showToolTip: function(V, f) {
                if (!V || f == r) return Fk(), void 0;
                S.getToolTipDiv();
                var P, l;
                if (f.html ? (f = f.html, P = Fi, Nl(Rl)) : (P = Rl, Nl(Fi)), l = P.style, P.innerHTML = f, P.parentNode || Hb(U.body, P), V.target) {
                    V = Pb(V);
                    var z = Hr(),
                        p = V.x,
                        F = V.y,
                        n = h ? 60 : 12;
                    if (h) {
                        var H = P.getBoundingClientRect();
                        l.left = p - H.width / 2 + Yg, l.top = F - H.height - n < z.top ? F + n + Yg : F - H.height - n + Yg
                    } else {
                        l.left = p + n + Yg, l.top = F + n + Yg;
                        var H = P.getBoundingClientRect();
                        H.left + H.width > z.width && (l.left = p - n - H.width + Yg), H.top + H.height > z.height && (l.top = F - n - H.height + Yg), H.left < 0 && (l.left = p + n + Yg), H.top < 0 && (l.top = F + n + Yg)
                    }
                } else l.left = V.x + Yg, l.top = V.y + Yg;
                nd()
            },
            startDragging: function(z, s) {
                z !== Gi && (Gi ? h ? Gi.handleWindowTouchEnd(s) : Gi.handleWindowMouseUp(s) : h ? (c.addEventListener(mi, Yl, !1), c.addEventListener(cd, Ce, !1)) : (c.addEventListener(lb, Ek, !1), c.addEventListener(Zf, op, !1)), Gi = z)
            },
            getImageMap: function() {
                return wl
            },
            toBoundaries: function(U, x, X, l) {
                var e = [];
                return os(U, x, X, l).forEach(function(m) {
                    var z = [];
                    m.forEach(function(h) {
                        z.push(h.x, h.y)
                    }), e.push(z)
                }), e
            },
            getCurrentKeyCodeMap: function() {
                return zm
            },
            drawCenterImage: function(N, e, w, k, c, D, m) {
                var A = co(e, c, D),
                    B = bi(e, c, D);
                Sq(N, e, T(w - A / 2), T(k - B / 2), A, B, c, D, m)
            },
            drawStretchImage: function(N, s, Q, x, J, v, E, H, R, r, X) {
                var W, y = co(s, H, R, v),
                    F = bi(s, H, R, E);
                if ("uniform" === Q ? (W = I(v / y, E / F), y *= W, F *= W, x += T((v - y) / 2), J += T((E - F) / 2), v = y, E = F) : "centerUniform" === Q && ((y > v || F > E) && (W = I(v / y, E / F), y *= W, F *= W), x += T((v - y) / 2), J += T((E - F) / 2), v = y, E = F), "center" === Q) {
                    var L = X !== !1 && (y > v || F > E);
                    L && (N.save(), N.beginPath(), N.rect(x, J, v, E), N.clip()), Sq(N, s, x + v / 2 - y / 2, J + E / 2 - F / 2, y, F, H, R, r), L && N.restore()
                } else Sq(N, s, x, J, v, E, H, R, r)
            },
            toCanvas: function(K, O, H, b, x, R, V, X) {
                K = Eq(K, V), O = O || co(K, x), H = H || bi(K, x);
                var Y = Tl(),
                    P = ng(Y);
                return X ? (Oc(Y, O, H, X), P.scale(X, X)) : Oc(Y, O, H, 1), Qh(P, K, b, 0, 0, O, H, x, R, V), P.restore(), Y
            },
            createElement: function(g, E, d, w) {
                var q = U.createElement(g);
                return Fj(q, E || Z.widgetBorder, 2), q.style.font = d ? d : Th, w != r && (q.value = w), S.onElementCreated && S.onElementCreated(q), q
            },
            containedInView: function(G, s) {
                var T = we(s).getBoundingClientRect();
                return db({
                    x: T.left,
                    y: T.top,
                    width: T.width,
                    height: T.height
                }, Lf(G))
            },
            isIsolating: function() {
                return jj
            },
            setIsolating: function($) {
                jj = $
            },
            getMSMap: function() {
                return wi
            },
            stringify: function(x, h) {
                var F = Date.prototype.toJSON;
                Date.prototype.toJSON = function() {
                    return "__ht__date" + this.getTime()
                };
                var a = JSON.stringify(x, function(r, k) {
                    return "function" == typeof k ? "__ht__" + (k.__ht__ || k.toString()) : k
                }, h == r ? 2 : h);
                return Date.prototype.toJSON = F, a
            },
            parse: function(j) {
                return Rr(j) ? JSON.parse(j, function(D, w) {
                    if (Rr(w)) {
                        if ("__ht__function" == w.substr(0, 14)) {
                            var h = w.indexOf("{") + 1,
                                H = w.lastIndexOf("}"),
                                U = w.indexOf("(") + 1,
                                v = w.indexOf(")");
                            if (h && H && U && v) {
                                var V = new Function(w.substring(U, v), w.substring(h, H));
                                return V.__ht__ = w.substr(6), V
                            }
                        }
                        if ("__ht__date" == w.substr(0, 10)) return new Date(t(w.substr(10)))
                    }
                    return w
                }) : j
            },
            loadJS: function(b, v) {
                v && b.push(v);
                var d = b.shift();
                if (_o(d)) b = d.contact(b), S.loadJS(b);
                else if (eh(d)) d(), S.loadJS(b);
                else if (Rr(d)) {
                    var h = U.createElement("script");
                    h.onload = function() {
                        S.loadJS(b)
                    }, h.setAttribute("src", d), U.getElementsByTagName("head")[0].appendChild(h)
                } else b.length && S.loadJS(b)
            },
            toColorData: Tf,
            setCanvas: Oc,
            createDiv: gb,
            createDisabledDiv: jm,
            createView: xq,
            createCanvas: Tl,
            appendChild: Hb,
            initContext: ng,
            checkLoadingImage: Ef,
            translateAndScale: me,
            layout: Ho,
            getPosition: bf,
            drawPoints: Fm,
            drawRoundRect: yo,
            drawBorder: Wq,
            setFocus: Po,
            getter: Rm,
            setter: qe,
            isEmptyObject: fo
        }, !0), yd(J, {
            autoAdjustIndex: 1,
            hierarchicalRendering: 1,
            adjustChildrenToTop: 1,
            autoHideScrollBar: 1,
            autoUpdate: 1,
            firstPersonMode: 1,
            ortho: 1,
            strict: 1,
            stickToRight: 1,
            instant: 1,
            closePath: 1,
            hierarchical: 1,
            doubleClickToToggle: 1,
            continuousLayout: !0
        }, !0);
        var hr = S.disabledOpacity,
            Yf = S.toolTipDelay,
            Tj = S.devicePixelRatio,
            ug = S.autoMakeVisible,
            Md = S.autoHideScrollBar,
            bl = S.imageGradient,
            Ur = S.showToolTip,
            Fk = S.hideToolTip,
            Gg = S.dashPattern,
            Ln = S.lineCap,
            Zk = S.lineJoin,
            di = S.labelColor,
            as = S.labelSelectColor,
            Th = S.labelFont,
            Bk = S.widgetIndent,
            sr = S.widgetRowHeight,
            qc = S.widgetHeaderHeight,
            Ke = S.widgetTitleHeight,
            zq = S.scrollBarColor,
            fr = S.scrollBarSize,
            dk = S.scrollBarTimeout,
            vi = S.scrollBarMinLength,
            wh = S.scrollBarInteractiveSize,
            wd = S.zoomIncrement,
            Nj = S.scrollZoomIncrement,
            xk = S.pinchZoomIncrement,
            Le = S.zoomMax,
            Jk = S.zoomMin,
            ae = S.createObject,
            ks = S.preventDefault,
            Ae = S.setImage,
            Eq = S.getImage,
            Jh = S.drawCenterImage,
            Qh = S.drawStretchImage,
            Vj = S.getId,
            cf = S.callLater,
            Af = S.asyncEach,
            am = (S.xhrLoad, S.sortFunc),
            Dh = S.clone,
            Xc = S.getClass,
            Ub = S.startAnim,
            Bq = S.brighter,
            Wk = S.darker,
            so = S.drawText,
            ir = S.getTextSize,
            Yq = S.isLeftButton,
            vq = S.getTouchCount,
            gc = S.isDoubleClick,
            kn = S.isShiftDown,
            ji = S.isCtrlDown,
            Lf = S.getClientPoint,
            Pb = S.getPagePoint,
            ls = S.getDistance,
            vf = S.unionPoint,
            Ap = S.unionRect,
            db = S.containsPoint,
            sg = S.containsRect,
            Hi = S.intersectsRect,
            Xn = S.intersection,
            Hr = S.getWindowInfo,
            qp = S.grow,
            Jd = S.getLogicalPoint,
            sh = S.startDragging,
            Nl = S.removeHTML,
            ss = S.createElement,
            Kg = S.segmentResolution,
            Ci = S.shapeResolution,
            qs = S.shapeSide,
            Ni = S.def,
            xr = function(g, L, x) {
                Ni(n + "." + g, L, x)
            },
            Mh = function(t, q) {
                t.childNodes.forEach(function(h) {
                    q(h), Mh(h, q)
                })
            };
        yd(S, {
            toolTipLabelColor: di,
            toolTipLabelFont: Th,
            toolTipBackground: Z.toolTipBackground,
            toolTipShadowColor: wr,
            setDevicePixelRatio: function(y) {
                Tj = S.devicePixelRatio = "number" == typeof y ? y : c.devicePixelRatio, Mh(U.body, function(D) {
                    var F = D._ht;
                    F && F._canvas && (Oc(F._canvas, F.getWidth(), F.getHeight()), F.redraw ? F.redraw() : F.iv())
                })
            }
        }, !0);
        var Bp = 1e-6,
            pb = "undefined" != typeof Uint16Array ? Uint16Array : Array,
            um = "undefined" != typeof Float32Array ? Float32Array : Array,
            wg = function(J, x, A) {
                var Q = [J[0] - x[0], J[1] - x[1], J[2] - x[2]];
                if (A) {
                    var S = ls(Q);
                    S > 0 && (Q[0] /= S, Q[1] /= S, Q[2] /= S)
                }
                return Q
            },
            qn = function(Z) {
                return [-Z[0], -Z[1], -Z[2]]
            },
            lp = function(l, c) {
                return 3 === l.length ? l[0] * c[0] + l[1] * c[1] + l[2] * c[2] : l[0] * c[0] + l[1] * c[1]
            },
            ym = function() {
                var U = new um(16);
                return U[0] = 1, U[1] = 0, U[2] = 0, U[3] = 0, U[4] = 0, U[5] = 1, U[6] = 0, U[7] = 0, U[8] = 0, U[9] = 0, U[10] = 1, U[11] = 0, U[12] = 0, U[13] = 0, U[14] = 0, U[15] = 1, U
            },
            cj = ym(),
            Zp = function(y) {
                var F = new um(16);
                return F[0] = y[0], F[1] = y[1], F[2] = y[2], F[3] = y[3], F[4] = y[4], F[5] = y[5], F[6] = y[6], F[7] = y[7], F[8] = y[8], F[9] = y[9], F[10] = y[10], F[11] = y[11], F[12] = y[12], F[13] = y[13], F[14] = y[14], F[15] = y[15], F
            },
            nm = function(p, M) {
                return p[0] = M[0], p[1] = M[1], p[2] = M[2], p[3] = M[3], p[4] = M[4], p[5] = M[5], p[6] = M[6], p[7] = M[7], p[8] = M[8], p[9] = M[9], p[10] = M[10], p[11] = M[11], p[12] = M[12], p[13] = M[13], p[14] = M[14], p[15] = M[15], p
            },
            Bi = function(j) {
                return j[0] = 1, j[1] = 0, j[2] = 0, j[3] = 0, j[4] = 0, j[5] = 1, j[6] = 0, j[7] = 0, j[8] = 0, j[9] = 0, j[10] = 1, j[11] = 0, j[12] = 0, j[13] = 0, j[14] = 0, j[15] = 1, j
            },
            nl = function(L, J) {
                var Q = L[0],
                    R = L[1],
                    p = L[2];
                return L[0] = J[0] * Q + J[4] * R + J[8] * p + J[12], L[1] = J[1] * Q + J[5] * R + J[9] * p + J[13], L[2] = J[2] * Q + J[6] * R + J[10] * p + J[14], L
            },
            Ad = function(D, v) {
                var a = D[0],
                    w = D[1],
                    s = D[2],
                    f = D[3];
                return D[0] = v[0] * a + v[4] * w + v[8] * s + v[12] * f, D[1] = v[1] * a + v[5] * w + v[9] * s + v[13] * f, D[2] = v[2] * a + v[6] * w + v[10] * s + v[14] * f, D[3] = v[3] * a + v[7] * w + v[11] * s + v[15] * f, D
            },
            Mc = function() {
                var F, s, N, g, b = Vd(fj[1] + fj[7]),
                    u = Vd(fj[0] + fj[3] - fj[10]),
                    L = Vd(fj[8] + 2),
                    q = function() {
                        return s = N.charAt(F), F += 1, s
                    },
                    S = function() {
                        var G = "";
                        if (s === L)
                            for (; q();) {
                                if (s === L) return q(), G;
                                G += s
                            } else q()
                    },
                    e = function() {
                        for (; s && " " >= s;) q()
                    },
                    O = function() {
                        var x, $ = {};
                        if (s === b) {
                            if (q(), e(), s === u) return q(), $;
                            for (; s;) {
                                if (x = S(), e(), q(), $[x] = g(), e(), s === u) return q(), $;
                                q(), e()
                            }
                        }
                    };
                return g = function() {
                        switch (e(), s) {
                            case b:
                                return O();
                            default:
                                return S()
                        }
                    },
                    function(c) {
                        if (o = {}, c) {
                            var B;
                            if (N = c, F = 0, s = " ", B = g(), e(), !s) return B
                        }
                    }
            }(),
            Xq = function(H, Q) {
                if (Q) {
                    var N = q(Q),
                        C = m(Q),
                        O = H[4],
                        R = H[5],
                        u = H[6],
                        c = H[7],
                        r = H[8],
                        Z = H[9],
                        P = H[10],
                        f = H[11];
                    H[4] = O * C + r * N, H[5] = R * C + Z * N, H[6] = u * C + P * N, H[7] = c * C + f * N, H[8] = r * C - O * N, H[9] = Z * C - R * N, H[10] = P * C - u * N, H[11] = f * C - c * N
                }
            },
            Fq = function(v, $) {
                if ($) {
                    var g = q($),
                        M = m($),
                        e = v[0],
                        L = v[1],
                        a = v[2],
                        Z = v[3],
                        O = v[8],
                        B = v[9],
                        p = v[10],
                        R = v[11];
                    v[0] = e * M - O * g, v[1] = L * M - B * g, v[2] = a * M - p * g, v[3] = Z * M - R * g, v[8] = e * g + O * M, v[9] = L * g + B * M, v[10] = a * g + p * M, v[11] = Z * g + R * M
                }
            },
            ii = function(A, a) {
                if (a) {
                    var K = q(a),
                        W = m(a),
                        e = A[0],
                        E = A[1],
                        t = A[2],
                        b = A[3],
                        d = A[4],
                        B = A[5],
                        o = A[6],
                        n = A[7];
                    A[0] = e * W + d * K, A[1] = E * W + B * K, A[2] = t * W + o * K, A[3] = b * W + n * K, A[4] = d * W - e * K, A[5] = B * W - E * K, A[6] = o * W - t * K, A[7] = n * W - b * K
                }
            },
            to = function(J, q, Q) {
                return rg(r, Q === !1 ? r : J.s3(), J.r3(), J.getRotationMode(), J.p3(), r, q)
            },
            rg = function(T, j, w, U, q, k, u) {
                return k || (k = ym()), q && Ej(k, q), lf(k, w, U), u && Qm(k, k, u), j && Mf(k, j), T && Qm(k, k, T), k
            },
            Yj = function(Y, P, H) {
                P = t(P), H = t(H);
                var R = this;
                R.g = Y, R._84O = P, R._85O = H, R._70I = !0, R.F = 0, R._83O = P + H, R.pen = {
                    x: 0,
                    y: 0
                }
            },
            zs = "lineDashOffset",
            Ab = "setLineDash",
            Xr = function(k) {
                for (var V in k) 1 === V.length && (zs = k[V]);
                return V ? 1 : 0
            },
            up = function(L, I, A) {
                return Gj(I) ? L : L[Ab] ? (L[Ab](I), A && (L.lineDashOffset = A), L) : new Yj(L, I[0], I.length > 1 ? I[1] : I[0])
            },
            Ah = function(H, R) {
                !Gj(R) && H[Ab] && (H[Ab](Pk), H.lineDashOffset = 0)
            };
        if (Ni(Yj, s, {
                _69I: 6,
                moveTo: function(v, G) {
                    var l = this,
                        Y = l.pen;
                    Y.x = v, Y.y = G, l.g.moveTo(v, G), l.start || (l.start = {
                        x: v,
                        y: G
                    })
                },
                lineTo: function(G, C) {
                    var S = this,
                        X = S.pen,
                        l = G - X.x,
                        A = C - X.y,
                        _ = H(A, l),
                        P = m(_),
                        F = q(_),
                        J = S._23O(X.x, X.y, G, C),
                        W = S._85O,
                        M = S._84O,
                        g = S._83O;
                    if (S.F) {
                        if (S.F > J) return S._70I ? S._72I(G, C) : S.moveTo(G, C), S.F -= J, void 0;
                        if (S._70I ? S._72I(X.x + P * S.F, X.y + F * S.F) : S.moveTo(X.x + P * S.F, X.y + F * S.F), J -= S.F, S.F = 0, S._70I = !S._70I, !J) return
                    }
                    var o = R(J / g);
                    if (o) {
                        for (var D = P * M, x = F * M, U = P * W, f = F * W, $ = 0; o > $; $++) S._70I ? (S._72I(X.x + D, X.y + x), S.moveTo(X.x + U, X.y + f)) : (S.moveTo(X.x + U, X.y + f), S._72I(X.x + D, X.y + x));
                        J -= g * o
                    }
                    S._70I ? J > M ? (S._72I(X.x + P * M, X.y + F * M), S.moveTo(G, C), S.F = W - (J - M), S._70I = !1) : (S._72I(G, C), J === M ? (S.F = 0, S._70I = !S._70I) : (S.F = M - J, S.moveTo(G, C))) : J > W ? (S.moveTo(X.x + P * W, X.y + F * W), S._72I(G, C), S.F = M - (J - W), S._70I = !0) : (S.moveTo(G, C), J === W ? (S.F = 0, S._70I = !S._70I) : S.F = W - J)
                },
                quadraticCurveTo: function(Y, U, r, b) {
                    var N, V = this,
                        x = V.pen,
                        q = x.x,
                        w = x.y,
                        d = V._22O(q, w, Y, U, r, b),
                        Z = 0,
                        T = 0,
                        z = V._85O,
                        i = V._84O;
                    if (V.F) {
                        if (V.F > d) return V._70I ? V._71I(Y, U, r, b) : V.moveTo(r, b), V.F -= d, void 0;
                        if (Z = V.F / d, N = V._20O(q, w, Y, U, r, b, Z), V._70I ? V._71I(N[2], N[3], N[4], N[5]) : V.moveTo(N[4], N[5]), V.F = 0, V._70I = !V._70I, !d) return
                    }
                    var k = d - d * Z,
                        D = R(k / V._83O),
                        J = i / d,
                        H = z / d;
                    if (D)
                        for (var W = 0; D > W; W++) V._70I ? (T = Z + J, N = V._21O(q, w, Y, U, r, b, Z, T), V._71I(N[2], N[3], N[4], N[5]), Z = T, T = Z + H, N = V._21O(q, w, Y, U, r, b, Z, T), V.moveTo(N[4], N[5])) : (T = Z + H, N = V._21O(q, w, Y, U, r, b, Z, T), V.moveTo(N[4], N[5]), Z = T, T = Z + J, N = V._21O(q, w, Y, U, r, b, Z, T), V._71I(N[2], N[3], N[4], N[5])), Z = T;
                    k = d - d * Z, V._70I ? k > i ? (T = Z + J, N = V._21O(q, w, Y, U, r, b, Z, T), V._71I(N[2], N[3], N[4], N[5]), V.moveTo(r, b), V.F = z - (k - i), V._70I = !1) : (N = V._19O(q, w, Y, U, r, b, Z), V._71I(N[2], N[3], N[4], N[5]), d === i ? (V.F = 0, V._70I = !V._70I) : (V.F = i - k, V.moveTo(r, b))) : k > z ? (T = Z + H, N = V._21O(q, w, Y, U, r, b, Z, T), V.moveTo(N[4], N[5]), N = V._19O(q, w, Y, U, r, b, T), V._71I(N[2], N[3], N[4], N[5]), V.F = i - (k - z), V._70I = !0) : (V.moveTo(r, b), k === z ? (V.F = 0, V._70I = !V._70I) : V.F = z - k)
                },
                bezierCurveTo: function() {
                    var t = arguments;
                    this.pen = {
                        x: t[4],
                        y: t[5]
                    }, this.g.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5])
                },
                arc: function(z, m, W, i, x, U) {
                    U || (i = -i, x = -x), Br(this, z, m, i, x - i, W, W, !1)
                },
                rect: function(m, d, M, V) {
                    var A = this;
                    A.pen = {
                        x: m,
                        y: d
                    }, A.moveTo(m, d), A.lineTo(m, d + V), A.lineTo(m + M, d + V), A.lineTo(m + M, d), A.lineTo(m, d)
                },
                beginPath: function() {
                    this.g.beginPath()
                },
                closePath: function() {
                    this.lineTo(this.start.x, this.start.y)
                },
                _23O: function(K, s, c, m) {
                    var Y = c - K,
                        G = m - s;
                    return Q(Y * Y + G * G)
                },
                _22O: function(V, Y, P, C, g, K, m) {
                    for (var Z, y, M, f, A, z, E, I = 0, b = V, t = Y, x = m > 0 ? m : this._69I, X = 1; x >= X; X++) M = X / x, f = 1 - M, A = f * f, z = 2 * M * f, E = M * M, Z = A * V + z * P + E * g, y = A * Y + z * C + E * K, I += this._23O(b, t, Z, y), b = Z, t = y;
                    return I
                },
                _21O: function(r, G, Q, J, T, V, q, d) {
                    var N = this;
                    if (0 === q) return N._20O(r, G, Q, J, T, V, d);
                    if (1 === d) return N._19O(r, G, Q, J, T, V, q);
                    var _ = N._20O(r, G, Q, J, T, V, d);
                    return _.push(q / d), N._19O.apply(N, _)
                },
                _20O: function(x, W, D, y, l, t, e) {
                    if (1 !== e) {
                        var m = D + (l - D) * e,
                            q = y + (t - y) * e;
                        D = x + (D - x) * e, y = W + (y - W) * e, l = D + (m - D) * e, t = y + (q - y) * e
                    }
                    return [x, W, D, y, l, t]
                },
                _19O: function(T, U, z, r, f, R, B) {
                    if (1 !== B) {
                        var e = T + (z - T) * B,
                            M = U + (r - U) * B;
                        z += (f - z) * B, r += (R - r) * B, T = e + (z - e) * B, U = M + (r - M) * B
                    }
                    return [T, U, z, r, f, R]
                },
                _72I: function(O, i) {
                    var K = this.pen;
                    (O !== K.x || i !== K.y) && (K.x = O, K.y = i, this.g.lineTo(O, i))
                },
                _71I: function($, p, E, t) {
                    var N = this.pen;
                    ($ !== E || p !== t || E !== N.x || t !== N.y) && (N.x = E, N.y = t, this.g.quadraticCurveTo($, p, E, t))
                }
            }), O && z) {
            var _b = z.toString();
            Y = _b.indexOf(se.substr(0, 2)) > 0 && _b.indexOf(Un + Un.substr(1, 1)) > 1 ? !0 : !1
        }
        var Bh = r,
            sk = r,
            zn = function(n) {
                Bh && !n._72O && (sk || (sk = {}), sk[n._72O = Vj()] = n)
            },
            Mk = function(B, u) {
                if (u || (u = B), u && (Bh || (Bh = {}), !Bh[B])) {
                    var W = new XMLHttpRequest;
                    if (Bh[u] = {
                            request: W,
                            url: u
                        }, W.overrideMimeType("text/plain"), S.convertURL && (u = S.convertURL(u)), u.data) {
                        var I = S.parse(u.data);
                        ms(B, I), S.handleCompTypeLoaded(B, I)
                    } else W.open("GET", encodeURI(u), !0), W.onload = function(o) {
                        if (200 === this.status || 0 === this.status) {
                            var d = S.parse(o.target.response);
                            ms(B, d), S.handleCompTypeLoaded(B, d)
                        } else ms(B, r)
                    }, W.onerror = function() {
                        ms(B, r)
                    }, W.send(null)
                }
            },
            ms = function(P, D) {
                if (cc[P] = D, delete Bh[P], fo(Bh) && (Bh = r, sk)) {
                    for (var s in sk) {
                        var V = sk[s];
                        V.invalidateAll && V.invalidateAll(y, "compTypeLoaded", P), V.redraw && V.redraw(), V.iv(), delete V._72O
                    }
                    sk = r
                }
                if (D && sk)
                    for (var s in sk) {
                        var V = sk[s];
                        V.invalidateAll && V.invalidateAll(y, "compTypeLoading", P), V.redraw && V.redraw(), V.iv()
                    }
            },
            hp = Z.chart,
            kq = S.compStack = [],
            Dp = /^style@/,
            Ne = /^attr@/,
            Wp = /^field@/,
            fh = {
                x: .5,
                y: .5
            },
            co = function(F, J, s, r) {
                if (!F) return 0;
                if (F.fitSize && r) return r;
                var A = yq(F.width, J, s);
                return null == A ? 20 : A
            },
            bi = function(R, s, L, P) {
                if (!R) return 0;
                if (R.fitSize && P) return P;
                var g = yq(R.height, s, L);
                return null == g ? 20 : g
            },
            yq = function(J, W, S) {
                if (!J || !J.func) return J;
                var K, T = J.func,
                    c = J.value;
                return K = eh(T) ? S && S.vectorDataBindingDisabled && !J.isSafeFunc ? c : T(W, S) : W ? Ne.test(T) ? W.a(T.slice(5)) : Dp.test(T) ? W.s(T.slice(6)) : Wp.test(T) ? W[T.slice(6)] : W[T] ? W[T](S) : c : c, c !== y && K == r ? c : K
            },
            Sq = S.drawImage = function() {
                var X, x, d, g, J, c = function(f, S) {
                        f.getValue && f.getValue.compType === S || (f.getValue = function(F) {
                            var $ = O(f, F);
                            if ($ === y && S.properties) {
                                var s = S.properties[F];
                                s && ($ = s.defaultValue)
                            }
                            return $
                        }, f.getValue.compType = S)
                    },
                    O = function(t, Y, X) {
                        var M = t[Y];
                        return M && M.func ? (M = yq(M, x, d), X && (M = X(M))) : X && (M = t[Y] = X(M)), M
                    },
                    U = function(k, z) {
                        var c = O(k, z);
                        if (J && c) {
                            var Y = vk(J);
                            return c = Tf(c), "rgba(" + R(c[0] * Y[0]) + "," + R(c[1] * Y[1]) + "," + R(c[2] * Y[2]) + "," + c[3] + ")"
                        }
                        return c
                    },
                    w = function(v) {
                        if (_o(v)) {
                            for (var K = new pm, g = v.length, o = 0; g > o; o += 2) K.add({
                                x: v[o],
                                y: v[o + 1]
                            });
                            v = K
                        }
                        return v
                    },
                    M = function(p) {
                        var u = O(p, "anchorX"),
                            W = O(p, "anchorY");
                        if (u !== y || W !== y) return {
                            x: u === y ? fh.x : u,
                            y: W === y ? fh.y : W
                        };
                        var m = O(p, "type"),
                            P = O(p, "name");
                        if ("image" !== m || !P) return fh;
                        var J = Eq(P);
                        return J && J.anchorX && J.anchorY ? {
                            x: J.anchorX,
                            y: J.anchorY
                        } : fh
                    },
                    a = function(F, z) {
                        var d = O(F, li),
                            N = M(F);
                        if (_o(d)) {
                            var h = d.length,
                                Q = O(F, "relative"),
                                $ = z.width,
                                H = z.height;
                            if (4 === h) d = {
                                x: d[0],
                                y: d[1],
                                width: d[2],
                                height: d[3]
                            }, Q ? (d.x *= $, d.y *= H, d.width *= $, d.height *= H) : z.fitSize && (d.x *= z.widthScale, d.width *= z.widthScale, d.y *= z.heightScale, d.height *= z.heightScale);
                            else if (3 === h) {
                                var Y = d[0];
                                d = {
                                    width: d[1],
                                    height: d[2]
                                }, Q ? (d.width *= $, d.height *= H) : z.fitSize && (d.width *= z.widthScale, d.height *= z.heightScale), "object" == typeof Y ? Y.length && (Y = {
                                    x: Y[0],
                                    y: Y[1]
                                }) : Y = bf(Y, z, d), d.x = Y.x - d.width * N.x, d.y = Y.y - d.height * N.y
                            }
                            var y = O(F, "offsetX");
                            y && (z.fitSize && (y *= z.widthScale), d.x += y), y = O(F, "offsetY"), y && (z.fitSize && (y *= z.heightScale), d.y += y)
                        }
                        return d
                    },
                    l = function(l) {
                        return _o(l) ? new pm(l) : l
                    },
                    H = function(n, z, c, q, M, v) {
                        q === y && (q = 1), M === y && (M = 1);
                        var W = pd(z, n);
                        if (W && !c && 1 === q && 1 === M) return !1;
                        v = v || fh;
                        var N = n.x + n.width * v.x,
                            F = n.y + n.height * v.y,
                            Z = z.x + z.width * v.x,
                            G = z.y + z.height * v.y;
                        return X.save(), Xk(X, N, F), yr(X, c), Vq(X, q * (n.width / z.width), M * (n.height / z.height)), Xk(X, -Z, -G), !0
                    },
                    N = function() {
                        X.restore()
                    },
                    Y = function(n, t, E) {
                        var v = O(n, "path"),
                            f = O(n, Ll),
                            m = O(n, "scaleX"),
                            G = O(n, "scaleY"),
                            l = M(n),
                            s = r,
                            u = nk(null, v);
                        if (E || (E = n.unionRect, E || (E = vf(u), n.path.func || (n.unionRect = E)), s = E), E) {
                            s || (s = n.unionRect, s || (s = vf(u), n.path.func || (n.unionRect = s)));
                            var h = H(E, s, f, m, G, l),
                                J = O(n, "borderPattern"),
                                I = up(X, J),
                                $ = U(n, "background"),
                                F = U(n, "borderColor"),
                                B = O(n, "borderWidth"),
                                z = O(n, "gradient"),
                                W = U(n, "gradientColor"),
                                T = O(n, "border3d"),
                                p = O(n, "border3dColor"),
                                R = O(n, "border3dAccuracy"),
                                D = X.lineJoin,
                                w = X.lineCap;
                            if (X.lineJoin = O(n, "borderJoin") || Zk, X.lineCap = O(n, "borderCap") || Ln, $ ? (xi(X, $, z, W, s), nk(X, v), X.fill(), I !== X && nk(X, v)) : nk(X, v), B && F) {
                                var C = O(n, "borderWidthAbsolute");
                                C && (X.save(), X.setTransform(1, 0, 0, 1, 0, 0)), X.lineWidth = B, X.strokeStyle = F, X.stroke(), C && X.restore(), T && Tp(X, F, p, B, g, R)
                            }
                            if (Ah(X, J), O(n, "dash")) {
                                var i = O(n, "dashWidth") || B;
                                if (i > 0) {
                                    J = O(n, "dashPattern") || Gg;
                                    var I = up(X, J, O(n, "dashOffset")),
                                        j = O(n, "dashColor") || Xj;
                                    I !== X && nk(X, v), X.strokeStyle = j, X.lineWidth = i, X.stroke(), O(n, "dash3d") && Tp(X, j, O(n, "dash3dColor"), i, g, O(n, "dash3dAccuracy")), Ah(X, J)
                                }
                            }
                            t === li && xp(X, $, O(n, "depth"), s), X.lineJoin = D, X.lineCap = w, h && N()
                        }
                    },
                    s = function(T, L, $, P) {
                        var A = O(T, ai, w),
                            n = O(T, Ll),
                            W = M(T);
                        if (A && P.fitSize) {
                            var Q = Math.abs(Math.cos(n)) < .001,
                                j = new pm,
                                c = vf(A),
                                p = P.widthScale,
                                I = P.heightScale,
                                s = c.x + W.x * c.width,
                                e = c.y + W.y * c.height,
                                V = s * p,
                                Z = e * I;
                            A.each(function(T) {
                                var y = T.x - s,
                                    S = T.y - e;
                                j.add({
                                    x: V + y * (Q ? I : p),
                                    y: Z + S * (Q ? p : I)
                                })
                            }), A = j, T.unionRect = null
                        }
                        var q = O(T, "scaleX"),
                            y = O(T, "scaleY"),
                            d = L === Di,
                            x = r;
                        if (!$ && d && ($ = T.unionRect, $ || ($ = vf(A), T.points.func || (T.unionRect = $)), x = $), $) {
                            d ? x || (x = T.unionRect, x || (x = vf(A), T.points.func || (T.unionRect = x))) : x = $;
                            var R, C, m, z, i = H($, x, n, q, y, W),
                                K = O(T, "borderPattern"),
                                G = up(X, K),
                                f = U(T, "background"),
                                v = Eq(O(T, "repeatImage"), J),
                                u = O(T, "gradientPack"),
                                k = U(T, "borderColor"),
                                b = O(T, "borderWidth"),
                                t = O(T, "segments", l),
                                S = O(T, "gradient"),
                                a = U(T, "gradientColor"),
                                _ = O(T, "border3d"),
                                E = O(T, "border3dColor"),
                                h = O(T, "border3dAccuracy"),
                                D = O(T, "closePath"),
                                Y = O(T, "fillRule") || "nonzero",
                                B = X.lineJoin,
                                F = X.lineCap;
                            if (X.lineJoin = O(T, "borderJoin") || Zk, X.lineCap = O(T, "borderCap") || Ln, d ? f || v || u ? (Fm(X, A, t, D), u ? We(X, u) : v ? Cr(X, v) : xi(X, f, S, a, x), X.fill(Y), u && X.restore(), G !== X && Fm(G, A, t, D)) : Fm(G, A, t, D) : ("roundRect" === L ? R = O(T, "cornerRadius") : "polygon" === L ? R = O(T, "polygonSide") : "arc" === L && (R = O(T, "arcFrom"), C = O(T, "arcTo"), m = O(T, "arcClose"), z = O(T, "arcOval")), f || v || u ? ($m(X, L, x, R, C, m, z), u ? We(X, u) : v ? Cr(X, v) : xi(X, f, S, a, x), X.fill(Y), u && X.restore(), X !== G && $m(G, L, x, R, C, m, z)) : $m(G, L, x, R, C, m, z)), b && k) {
                                var o = O(T, "borderWidthAbsolute");
                                o && (X.save(), X.setTransform(1, 0, 0, 1, 0, 0)), X.lineWidth = b, X.strokeStyle = k, X.stroke(), o && X.restore(), _ && Tp(X, k, E, b, g, h)
                            }
                            if (Ah(X, K), O(T, "dash")) {
                                var Yl = O(T, "dashWidth") || b;
                                if (Yl > 0) {
                                    K = O(T, "dashPattern") || Gg;
                                    var G = up(X, K, O(T, "dashOffset")),
                                        ce = O(T, "dashColor") || Xj;
                                    G !== X && (d ? Fm(G, A, t, D) : $m(G, L, x, R, C, m, z)), X.strokeStyle = ce, X.lineWidth = Yl, X.stroke(), O(T, "dash3d") && Tp(X, ce, O(T, "dash3dColor"), Yl, g, O(T, "dash3dAccuracy")), Ah(X, K)
                                }
                            }
                            L === li && xp(X, f, O(T, "depth"), x), X.lineJoin = B, X.lineCap = F, i && N()
                        }
                    },
                    e = function(B, K) {
                        var v = J,
                            c = J || O(B, Jc),
                            m = Eq(O(B, "name"), c);
                        m && (Qh(X, m, O(B, "stretch"), K.x, K.y, K.width, K.height, x, d, c), J = v)
                    },
                    $ = function(M, j) {
                        var S = O(M, "text");
                        S != r && so(X, S, O(M, "font"), U(M, Jc), j.x, j.y, j.width, j.height, O(M, "align"), O(M, "vAlign"))
                    },
                    P = function(N, k) {
                        Wq(X, U(N, Jc), k.x, k.y, k.width, k.height, O(N, "width"))
                    },
                    u = function($, h) {
                        var W = O($, kf),
                            s = 0;
                        if (W && (W.forEach(function(y) {
                                s += y
                            }), s > 0)) {
                            for (var A = O($, "colors") || hp, D = O($, "startAngle") || 0, L = O($, "hollow"), v = O($, Vi), w = O($, Bl), J = O($, mk), Y = v ? new pm : r, M = h.x, d = h.y, Q = h.width, u = h.height, y = M + Q / 2, o = d + u / 2, H = I(Q, u) / 2, c = 0, K = 0; K < W.length; K++) {
                                var e = W[K],
                                    p = C * e / s,
                                    G = D + p;
                                if (X.fillStyle = A[c++], c === A.length && (c = 0), X.beginPath(), L) {
                                    var f = y + m(D) * H / 2,
                                        n = o + q(D) * H / 2,
                                        l = y + m(G) * H,
                                        F = o + q(G) * H;
                                    X.moveTo(f, n), X.arc(y, o, H / 2, D, G, !1), X.lineTo(l, F), X.arc(y, o, H, G, D, !0)
                                } else X.moveTo(y, o), X.arc(y, o, H, G, D, !0);
                                Y && (p = (D + G) / 2, Y.add({
                                    text: eh(v) ? v(e, K, s, x) : e,
                                    x: y + .75 * m(p) * H,
                                    y: o + .75 * q(p) * H
                                })), X.closePath(), X.fill(), D = G
                            }
                            Y && Y.each(function(b) {
                                so(X, b.text, w, J, b.x, b.y, 0, 0, Vf)
                            })
                        }
                    },
                    j = function(R, K) {
                        var i = O(R, Pm);
                        if (i && i.length > 0) {
                            var E = i.length,
                                Z = O(R, Vi),
                                $ = O(R, Bl),
                                q = O(R, mk),
                                G = Z ? new pm : r,
                                g = O(R, "minValue") || 0,
                                o = O(R, "maxValue");
                            if (o == r && (o = 0, i.forEach(function(P) {
                                    P.values.forEach(function(q) {
                                        o = v(o, q)
                                    })
                                })), g === o) return;
                            for (var J = K.height / (o - g), w = K.y + o * J, Q = O(i[0], kf).length, V = K.width / (3 * Q + 1), H = 2 * V / E, Y = 0, A = 0; E > A; A++)
                                for (var m = i[A], T = O(m, Jc), j = O(m, "colors"), P = O(m, kf), M = 0; Q > M; M++) {
                                    j ? X.fillStyle = j[M] : T ? X.fillStyle = T : (X.fillStyle = hp[Y++], Y === hp.length && (Y = 0));
                                    var C = P[M],
                                        h = C * J,
                                        t = K.x + (1 + 3 * M) * V + A * H;
                                    if (yj(X, t, w - h, H, h), G) {
                                        var z = eh(Z) ? Z(C, M, m, x) : C,
                                            y = ir($, z).height;
                                        G.add({
                                            x: t,
                                            y: w - h - y,
                                            width: H,
                                            height: y,
                                            text: z
                                        })
                                    }
                                }
                            G && G.each(function(r) {
                                so(X, r.text, $, q, r.x, r.y, r.width, r.height, Vf)
                            })
                        }
                    },
                    f = function(k, b) {
                        var j = O(k, Pm);
                        if (j && j.length > 0) {
                            var i = j.length,
                                J = O(j[0], kf).length,
                                e = b.width / (3 * J + 1),
                                f = 0,
                                E = O(k, "maxValue"),
                                F = O(k, Vi),
                                g = O(k, Bl),
                                W = O(k, mk),
                                o = F ? new pm : r;
                            if (E == r) {
                                E = 0;
                                for (var B = 0; J > B; B++) {
                                    for (var N = 0, a = 0; i > a; a++) N += O(j[a], kf)[B];
                                    E = v(E, N)
                                }
                            }
                            if (E > 0) {
                                for (var B = 0; J > B; B++)
                                    for (var n = b.y + b.height, a = 0; i > a; a++) {
                                        var D = j[a],
                                            C = O(D, Jc),
                                            A = O(D, kf)[B],
                                            K = A / E * b.height;
                                        C ? X.fillStyle = C : (X.fillStyle = hp[f++], f === hp.length && (f = 0)), n -= K;
                                        var y = {
                                            x: b.x + (1 + 3 * B) * e,
                                            y: n,
                                            width: 2 * e,
                                            height: K
                                        };
                                        yj(X, y.x, y.y, y.width, y.height), o && (y.text = eh(F) ? F(A, B, D, x) : A, o.add(y))
                                    }
                                o && o.each(function(k) {
                                    so(X, k.text, g, W, k.x, k.y, k.width, k.height, Vf)
                                })
                            }
                        }
                    },
                    K = function($, z) {
                        var M = O($, Pm);
                        if (M && M.length > 0) {
                            for (var n = M.length, d = O(M[0], kf).length, m = z.width / (3 * d + 1), h = 0, T = O($, Vi), N = O($, Bl), L = O($, mk), o = T ? new pm : r, K = 0; d > K; K++) {
                                for (var u = 0, E = 0; n > E; E++) u += O(M[E], kf)[K];
                                if (u > 0) {
                                    var e = z.y + z.height;
                                    for (E = 0; n > E; E++) {
                                        var C = M[E],
                                            b = O(C, Jc),
                                            B = O(C, kf)[K],
                                            t = B / u * z.height;
                                        b ? X.fillStyle = b : (X.fillStyle = hp[h++], h === hp.length && (h = 0)), e -= t;
                                        var D = {
                                            x: z.x + (1 + 3 * K) * m,
                                            y: e,
                                            width: 2 * m,
                                            height: t
                                        };
                                        yj(X, D.x, D.y, D.width, D.height), o && (D.text = eh(T) ? T(B, K, C, x) : B, o.add(D))
                                    }
                                }
                            }
                            o && o.each(function(z) {
                                so(X, z.text, N, L, z.x, z.y, z.width, z.height, Vf)
                            })
                        }
                    },
                    Q = function(l, b) {
                        var B = O(l, Pm);
                        if (B && B.length > 0) {
                            var Z = B.length,
                                h = O(l, "minValue") || 0,
                                t = O(l, "maxValue");
                            if (t == r && (t = 0, B.forEach(function(U) {
                                    U.values.forEach(function(w) {
                                        t = v(t, w)
                                    })
                                })), h === t) return;
                            for (var J = b.height / (t - h), G = b.y + t * J, n = O(B[0], kf).length, y = b.width / (3 * n + 1), k = 0, M = O(l, "lineWidth") || 2, f = O(l, "line3d"), K = O(l, "linePoint"), z = O(l, Vi), e = O(l, Bl), i = O(l, mk), I = 0; Z > I; I++) {
                                var d = B[I],
                                    q = O(d, Jc),
                                    w = O(d, kf);
                                q ? X.strokeStyle = q : (q = X.strokeStyle = hp[k++], k === hp.length && (k = 0)), X.beginPath();
                                for (var A = 0; n > A; A++) {
                                    var $ = b.x + (2 + 3 * A) * y,
                                        u = G - w[A] * J;
                                    0 === A ? X.moveTo($, u) : X.lineTo($, u)
                                }
                                if (X.lineWidth = M, X.stroke(), f && Tp(X, q, r, M, g), K || z) {
                                    var T, m = M / 2 + 2;
                                    for (A = 0; n > A; A++) {
                                        var P = w[A];
                                        if ($ = b.x + (2 + 3 * A) * y, u = G - P * J, eh(K) ? K(X, $, u, q, A, d, x) : K && (X.fillStyle = q, X.beginPath(), X.arc($, u, m, 0, C, !0), X.fill()), eh(z) ? T = z(P, A, d, x) : z && (T = P), T) {
                                            var L = ir(e, T).height,
                                                U = X.shadowBlur;
                                            if (U) {
                                                var p = X.shadowOffsetX,
                                                    F = X.shadowOffsetY,
                                                    a = X.shadowColor;
                                                X.shadowOffsetX = 0, X.shadowOffsetY = 0, X.shadowBlur = 0, X.shadowColor = r
                                            }
                                            so(X, T, e, i, $, u - L - m + 2, 0, L, Vf), U && (X.shadowOffsetX = p, X.shadowOffsetY = F, X.shadowBlur = U, X.shadowColor = a)
                                        }
                                    }
                                }
                            }
                        }
                    },
                    o = {
                        border: P,
                        image: e,
                        text: $,
                        pieChart: u,
                        columnChart: j,
                        stackedColumnChart: f,
                        percentageColumnChart: K,
                        lineChart: Q
                    };
                return function(C, I, A, p, k, f, W, Q, T) {
                    if (I && k && f) {
                        X = C, x = W, d = Q, g = d ? d._zoom ? d._zoom : 1 : 1, J = T;
                        var F = k,
                            E = f;
                        if (Sm()) {
                            var R, m;
                            0 === X[Cb] ? Sm[0] && (R = !0) : R = !0, X.texureImage2D ? Sm[1] && (m = !0) : m = !0, R && m && (F = A, E = p)
                        }
                        if (I.tagName) return X.drawImage(I, F, E, k, f), void 0;
                        if (O(I, "visible") !== !1) {
                            J || (J = yq(I.color, x, d));
                            var n = co(I, x, d, k),
                                h = bi(I, x, d, f),
                                q = {
                                    x: 0,
                                    y: 0,
                                    width: n,
                                    height: h,
                                    fitSize: O(I, "fitSize")
                                },
                                D = O(I, "clip"),
                                $ = O(I, "opacity");
                            q.fitSize && (q.widthScale = n / yq(I.width, x, d), q.heightScale = h / yq(I.height, x, d)), X.save(), Xk(X, F, E), (n !== k || h !== f) && X.scale(k / n, f / h), D && (eh(D) ? D(X, n, h, x, d, I) : (X.beginPath(), X.rect(0, 0, n, h), X.clip())), $ != r && (X.globalAlpha *= $), O(I, "comps").forEach(function(E) {
                                if (O(E, Jj) !== !1) {
                                    kq.splice(0, 0, E);
                                    var h = O(E, "opacity"),
                                        A = O(E, "shadow"),
                                        i = O(E, "type"),
                                        f = a(E, q);
                                    if (h != r) {
                                        var K = X.globalAlpha;
                                        X.globalAlpha *= h
                                    }
                                    if (A) {
                                        var I = X.shadowOffsetX,
                                            L = X.shadowOffsetY,
                                            v = X.shadowBlur,
                                            t = X.shadowColor,
                                            B = O(E, "shadowOffsetX"),
                                            k = O(E, "shadowOffsetY"),
                                            G = O(E, "shadowBlur"),
                                            Z = O(E, "shadowColor");
                                        X.shadowOffsetX = (B == r ? 3 : B) * g, X.shadowOffsetY = (k == r ? 3 : k) * g, X.shadowBlur = (G == r ? 6 : G) * g, X.shadowColor = Z || wr
                                    }
                                    if ("restore" === i) X.restore();
                                    else if ("clip" === i) X.save(), Fm(X, O(E, "points", w), O(E, "segments", l), !0), X.clip();
                                    else if (Ol[i] || i === Di) s(E, i, f, q);
                                    else if ("SVGPath" === i) Y(E, i, f);
                                    else {
                                        f = f || {
                                            x: 0,
                                            y: 0,
                                            width: q.width,
                                            height: q.height
                                        };
                                        var W = O(E, Ll),
                                            u = O(E, "scaleX"),
                                            m = O(E, "scaleY"),
                                            Q = M(E),
                                            U = H(f, f, W, u, m, Q);
                                        if (eh(i)) c(E, i), S.drawCompType(i, X, f, E, x, d);
                                        else if (S.getCompType(i)) {
                                            var b = S.getCompType(i),
                                                C = b.func || b;
                                            c(E, b), S.drawCompType(C, X, f, E, x, d)
                                        } else o[i] ? o[i](E, f) : S.getCompType(i) === y && mf.test(i) && Mk(i);
                                        U && N()
                                    }
                                    A && (X.shadowOffsetX = I, X.shadowOffsetY = L, X.shadowBlur = v, X.shadowColor = t), h != r && (X.globalAlpha = K), kq.splice(0, 1)
                                }
                            }), X.restore()
                        }
                    }
                }
            }();
        S.getCurrentComp = function() {
                return kq[0]
            }, S.getParentComp = function() {
                return kq[1]
            }, S.getInternal = function() {
                return {
                    isEnter: uj,
                    isEsc: Go,
                    isSpace: Pc,
                    isLeft: es,
                    isUp: pk,
                    isRight: rb,
                    isDown: ub,
                    addMethod: yd,
                    superCall: dg,
                    toPointsArray: os,
                    translateAndScale: me,
                    appendArray: Pn,
                    createWorldMatrix: rg,
                    vec3TransformMat4: nl,
                    setCanvas: Oc,
                    createDiv: gb,
                    createView: xq,
                    createCanvas: Tl,
                    createImage: $q,
                    initContext: ng,
                    layout: Ho,
                    fillRect: yj,
                    Mat: $b,
                    drawBorder: Wq,
                    isString: Rr,
                    setBorder: Fj,
                    getPropertyValue: Hq,
                    setPropertyValue: Mj,
                    drawVerticalLine: _p,
                    draw3DRect: xp,
                    getPinchDist: jl,
                    isSameRect: pd,
                    getPosition: bf,
                    intersectionLineRect: Xi,
                    getNodeRect: yp,
                    getEdgeAgentPosition: Vo,
                    getImageWidth: co,
                    getImageHeight: bi,
                    formatNumber: mn,
                    initItemElement: Uq,
                    drawPoints: Fm,
                    createG2: up,
                    closePopup: Eo,
                    isH: un,
                    createAnim: _f,
                    createNormalMatrix: Xo,
                    createNormals: Cn,
                    toFloatArray: yk,
                    glMV: Uc,
                    batchShape: cs,
                    createNodeMatrix: to,
                    getFaceInfo: ur,
                    transformAppend: Bb,
                    drawFaceInfo: Cg,
                    to3dPointsArray: pl,
                    setGLDebugMode: function(g) {
                        ee = g
                    },
                    cube: function() {
                        return {
                            vs: qr,
                            is: Qk,
                            uv: Mb
                        }
                    },
                    ui: function() {
                        return {
                            DataUI: Pp,
                            NodeUI: nc,
                            EdgeUI: Do,
                            GroupUI: He,
                            ShapeUI: qm,
                            GridUI: rh,
                            Data3dUI: el,
                            Node3dUI: Dl,
                            Shape3dUI: Sg
                        }
                    },
                    getInternalVersion: function() {
                        return "U2FsdGVkX18AhzefPJMvmQXAuSt4gikSB655DpWzttE="
                    },
                    getDragger: function() {
                        return Gi
                    },
                    addMSMap: function(O) {
                        yd(wi, O)
                    },
                    k: f
                }
            },
            function(T) {
                function N(w, j) {
                    w != r && (j == r && Gq != typeof w ? this._54O(w, 256) : this._54O(w, j))
                }

                function X() {
                    return new N(r)
                }

                function j(g, h, Y, E, b, y) {
                    for (; --y >= 0;) {
                        var x = h * this[g++] + Y[E] + b;
                        b = R(x / 67108864), Y[E++] = 67108863 & x
                    }
                    return b
                }

                function $(E, R, l, e, $, N) {
                    for (var g = 32767 & R, h = R >> 15; --N >= 0;) {
                        var B = 32767 & this[E],
                            H = this[E++] >> 15,
                            D = h * B + H * g;
                        B = g * B + ((32767 & D) << 15) + l[e] + (1073741823 & $), $ = (B >>> 30) + (D >>> 15) + h * H + ($ >>> 30), l[e++] = 1073741823 & B
                    }
                    return $
                }

                function E(v, z, X, b, y, T) {
                    for (var w = 16383 & z, E = z >> 14; --T >= 0;) {
                        var h = 16383 & this[v],
                            P = this[v++] >> 14,
                            x = E * h + P * w;
                        h = w * h + ((16383 & x) << 14) + X[b] + y, y = (h >> 28) + (x >> 14) + E * P, X[b++] = 268435455 & h
                    }
                    return y
                }

                function K(c) {
                    return ye.charAt(c)
                }

                function g(L, F) {
                    var t = am[L.charCodeAt(F)];
                    return t == r ? -1 : t
                }

                function D(T) {
                    for (var F = this.t - 1; F >= 0; --F) T[F] = this[F];
                    T.t = this.t, T.s = this.s
                }

                function k(V) {
                    this.t = 1, this.s = 0 > V ? -1 : 0, V > 0 ? this[0] = V : -1 > V ? this[0] = V + this.DV : this.t = 0
                }

                function y(u) {
                    var d = X();
                    return d._58O(u), d
                }

                function M(H, D) {
                    var S, t = this;
                    if (16 == D) S = 4;
                    else if (8 == D) S = 3;
                    else if (256 == D) S = 8;
                    else if (2 == D) S = 1;
                    else if (32 == D) S = 5;
                    else {
                        if (4 != D) return t.fromRadix(H, D), void 0;
                        S = 2
                    }
                    t.t = 0, t.s = 0;
                    for (var A = H.length, Y = !1, C = 0; --A >= 0;) {
                        var m = 8 == S ? 255 & H[A] : g(H, A);
                        0 > m ? "-" == H.charAt(A) && (Y = !0) : (Y = !1, 0 == C ? t[t.t++] = m : C + S > t.DB ? (t[t.t - 1] |= (m & (1 << t.DB - C) - 1) << C, t[t.t++] = m >> t.DB - C) : t[t.t - 1] |= m << C, C += S, C >= t.DB && (C -= t.DB))
                    }
                    8 == S && 0 != (128 & H[0]) && (t.s = -1, C > 0 && (t[t.t - 1] |= (1 << t.DB - C) - 1 << C)), t._57O(), Y && N.ZERO._78O(t, t)
                }

                function G() {
                    for (var c = this, r = c.s & c.DM; c.t > 0 && c[c.t - 1] == r;) --c.t
                }

                function S(D) {
                    var e = this;
                    if (e.s < 0) return "-" + e._85O()[Tq](D);
                    var w;
                    if (16 == D) w = 4;
                    else if (8 == D) w = 3;
                    else if (2 == D) w = 1;
                    else if (32 == D) w = 5;
                    else {
                        if (4 != D) return e.toRadix(D);
                        w = 2
                    }
                    var q, E = (1 << w) - 1,
                        o = !1,
                        O = "",
                        M = e.t,
                        t = e.DB - M * e.DB % w;
                    if (M-- > 0)
                        for (t < e.DB && (q = e[M] >> t) > 0 && (o = !0, O = K(q)); M >= 0;) w > t ? (q = (e[M] & (1 << t) - 1) << w - t, q |= e[--M] >> (t += e.DB - w)) : (q = e[M] >> (t -= w) & E, 0 >= t && (t += e.DB, --M)), q > 0 && (o = !0), o && (O += K(q));
                    return o ? O : "0"
                }

                function h() {
                    var z = X();
                    return N.ZERO._78O(this, z), z
                }

                function p() {
                    return this.s < 0 ? this._85O() : this
                }

                function B(C) {
                    var g = this,
                        t = g.s - C.s;
                    if (0 != t) return t;
                    var N = g.t;
                    if (t = N - C.t, 0 != t) return g.s < 0 ? -t : t;
                    for (; --N >= 0;)
                        if (0 != (t = g[N] - C[N])) return t;
                    return 0
                }

                function i(E) {
                    var h, i = 1;
                    return 0 != (h = E >>> 16) && (E = h, i += 16), 0 != (h = E >> 8) && (E = h, i += 8), 0 != (h = E >> 4) && (E = h, i += 4), 0 != (h = E >> 2) && (E = h, i += 2), 0 != (h = E >> 1) && (E = h, i += 1), i
                }

                function J() {
                    var F = this;
                    return F.t <= 0 ? 0 : F.DB * (F.t - 1) + i(F[F.t - 1] ^ F.s & F.DM)
                }

                function z(_, W) {
                    var A;
                    for (A = this.t - 1; A >= 0; --A) W[A + _] = this[A];
                    for (A = _ - 1; A >= 0; --A) W[A] = 0;
                    W.t = this.t + _, W.s = this.s
                }

                function U(Y, R) {
                    for (var c = Y; c < this.t; ++c) R[c - Y] = this[c];
                    R.t = v(this.t - Y, 0), R.s = this.s
                }

                function e(s, x) {
                    var K, $ = this,
                        E = s % $.DB,
                        v = $.DB - E,
                        T = (1 << v) - 1,
                        W = R(s / $.DB),
                        I = $.s << E & $.DM;
                    for (K = $.t - 1; K >= 0; --K) x[K + W + 1] = $[K] >> v | I, I = ($[K] & T) << E;
                    for (K = W - 1; K >= 0; --K) x[K] = 0;
                    x[W] = I, x.t = $.t + W + 1, x.s = $.s, x._57O()
                }

                function w(m, f) {
                    var D = this;
                    f.s = D.s;
                    var L = R(m / D.DB);
                    if (L >= D.t) return f.t = 0, void 0;
                    var x = m % D.DB,
                        l = D.DB - x,
                        K = (1 << x) - 1;
                    f[0] = D[L] >> x;
                    for (var d = L + 1; d < D.t; ++d) f[d - L - 1] |= (D[d] & K) << l, f[d - L] = D[d] >> x;
                    x > 0 && (f[D.t - L - 1] |= (D.s & K) << l), f.t = D.t - L, f._57O()
                }

                function s(O, $) {
                    for (var X = this, B = 0, E = 0, g = I(O.t, X.t); g > B;) E += X[B] - O[B], $[B++] = E & X.DM, E >>= X.DB;
                    if (O.t < X.t) {
                        for (E -= O.s; B < X.t;) E += X[B], $[B++] = E & X.DM, E >>= X.DB;
                        E += X.s
                    } else {
                        for (E += X.s; B < O.t;) E -= O[B], $[B++] = E & X.DM, E >>= X.DB;
                        E -= O.s
                    }
                    $.s = 0 > E ? -1 : 0, -1 > E ? $[B++] = X.DV + E : E > 0 && ($[B++] = E), $.t = B, $._57O()
                }

                function l(m, y) {
                    var E = this.abs(),
                        g = m.abs(),
                        $ = E.t;
                    for (y.t = $ + g.t; --$ >= 0;) y[$] = 0;
                    for ($ = 0; $ < g.t; ++$) y[$ + E.t] = E.am(0, g[$], y, $, 0, E.t);
                    y.s = 0, y._57O(), this.s != m.s && N.ZERO._78O(y, y)
                }

                function o(q) {
                    for (var B = this.abs(), u = q.t = 2 * B.t; --u >= 0;) q[u] = 0;
                    for (u = 0; u < B.t - 1; ++u) {
                        var g = B.am(u, B[u], q, 2 * u, 0, 1);
                        (q[u + B.t] += B.am(u + 1, 2 * B[u], q, 2 * u + 1, g, B.t - u - 1)) >= B.DV && (q[u + B.t] -= B.DV, q[u + B.t + 1] = 1)
                    }
                    q.t > 0 && (q[q.t - 1] += B.am(u, B[u], q, 2 * u, 0, 1)), q.s = 0, q._57O()
                }

                function c(c, A, a) {
                    var O = c.abs(),
                        d = this;
                    if (!(O.t <= 0)) {
                        var m = d.abs();
                        if (m.t < O.t) return A != r && A._58O(0), a != r && d._77O(a), void 0;
                        a == r && (a = X());
                        var s = X(),
                            u = d.s,
                            L = c.s,
                            B = d.DB - i(O[O.t - 1]);
                        B > 0 ? (O._44O(B, s), m._44O(B, a)) : (O._77O(s), m._77O(a));
                        var C = s.t,
                            v = s[C - 1];
                        if (0 != v) {
                            var w = v * (1 << d.F1) + (C > 1 ? s[C - 2] >> d.F2 : 0),
                                I = d.FV / w,
                                Y = (1 << d.F1) / w,
                                T = 1 << d.F2,
                                j = a.t,
                                E = j - C,
                                h = A == r ? X() : A;
                            for (s._59O(E, h), a._52O(h) >= 0 && (a[a.t++] = 1, a._78O(h, a)), N.ONE._59O(C, h), h._78O(s, s); s.t < C;) s[s.t++] = 0;
                            for (; --E >= 0;) {
                                var k = a[--j] == v ? d.DM : R(a[j] * I + (a[j - 1] + T) * Y);
                                if ((a[j] += s.am(0, k, a, E, 0, C)) < k)
                                    for (s._59O(E, h), a._78O(h, a); a[j] < --k;) a._78O(h, a)
                            }
                            A != r && (a._45O(C, A), u != L && N.ZERO._78O(A, A)), a.t = C, a._57O(), B > 0 && a._46O(B, a), 0 > u && N.ZERO._78O(a, a)
                        }
                    }
                }

                function _(K) {
                    var G = X();
                    return this.abs()._49O(K, r, G), this.s < 0 && G._52O(N.ZERO) > 0 && K._78O(G, G), G
                }

                function Y(l) {
                    this.m = l
                }

                function x(w) {
                    return w.s < 0 || w._52O(this.m) >= 0 ? w.mod(this.m) : w
                }

                function W(k) {
                    return k
                }

                function V(J) {
                    J._49O(this.m, r, J)
                }

                function A(e, w, S) {
                    e._47O(w, S), this._74O(S)
                }

                function Z(I, O) {
                    I._48O(O), this._74O(O)
                }

                function a() {
                    if (this.t < 1) return 0;
                    var f = this[0];
                    if (0 == (1 & f)) return 0;
                    var w = 3 & f;
                    return w = 15 & w * (2 - (15 & f) * w), w = 255 & w * (2 - (255 & f) * w), w = 65535 & w * (2 - (65535 & (65535 & f) * w)), w = w * (2 - f * w % this.DV) % this.DV, w > 0 ? this.DV - w : -w
                }

                function H(J) {
                    var M = this;
                    M.m = J, M.mp = J._50O(), M.mpl = 32767 & M.mp, M.mph = M.mp >> 15, M.um = (1 << J.DB - 15) - 1, M.mt2 = 2 * J.t
                }

                function u($) {
                    var S = X();
                    return $.abs()._59O(this.m.t, S), S._49O(this.m, r, S), $.s < 0 && S._52O(N.ZERO) > 0 && this.m._78O(S, S), S
                }

                function O(c) {
                    var n = X();
                    return c._77O(n), this._74O(n), n
                }

                function F(O) {
                    for (var Z = this; O.t <= Z.mt2;) O[O.t++] = 0;
                    for (var N = 0; N < Z.m.t; ++N) {
                        var v = 32767 & O[N],
                            t = v * Z.mpl + ((v * Z.mph + (O[N] >> 15) * Z.mpl & Z.um) << 15) & O.DM;
                        for (v = N + Z.m.t, O[v] += Z.m.am(0, t, O, N, 0, Z.m.t); O[v] >= O.DV;) O[v] -= O.DV, O[++v] ++
                    }
                    O._57O(), O._45O(Z.m.t, O), O._52O(Z.m) >= 0 && O._78O(Z.m, O)
                }

                function Cb(C, r) {
                    C._48O(r), this._74O(r)
                }

                function as(a, f, p) {
                    a._47O(f, p), this._74O(p)
                }

                function gq() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }

                function er(J, S) {
                    if (J > 4294967295 || 1 > J) return N.ONE;
                    var x = X(),
                        R = X(),
                        D = S._73O(this),
                        P = i(J) - 1;
                    for (D._77O(x); --P >= 0;)
                        if (S._76O(x, R), (J & 1 << P) > 0) S._75O(R, D, x);
                        else {
                            var E = x;
                            x = R, R = E
                        }
                    return S.revert(x)
                }

                function bp(G, k) {
                    var p;
                    return p = 256 > G || k._51O() ? new Y(k) : new H(k), this.exp(G, p)
                }

                function Ip() {
                    var n = this;
                    if (n.s < 0) {
                        if (1 == n.t) return n[0] - n.DV;
                        if (0 == n.t) return -1
                    } else {
                        if (1 == n.t) return n[0];
                        if (0 == n.t) return 0
                    }
                    return (n[1] & (1 << 32 - n.DB) - 1) << n.DB | n[0]
                }

                function wm(a, n) {
                    return new N(a, n)
                }

                function Fq() {
                    var W = this;
                    W.n = r, W.e = 0, W.d = r, W.p = r, W.q = r, W.dmp1 = r, W.dmq1 = r, W._10A = r
                }

                function Tf(T) {
                    return T._53O(this.e, this.n)
                }

                function Ul(Z) {
                    var _, R, b, O = "",
                        U = 0;
                    for (_ = 0; _ < Z.length && Z.charAt(_) != yl; ++_) b = ef.indexOf(Z.charAt(_)), 0 > b || (0 == U ? (O += K(b >> 2), R = 3 & b, U = 1) : 1 == U ? (O += K(R << 2 | b >> 4), R = 15 & b, U = 2) : 2 == U ? (O += K(R), O += K(b >> 2), R = 3 & b, U = 3) : (O += K(R << 2 | b >> 4), O += K(15 & b), U = 0));
                    return 1 == U && (O += K(R << 2)), O
                }

                function fh(V) {
                    var l = V.split(""),
                        $ = Ul(V);
                    return l.forEach(function(V) {
                        var E = V.length;
                        E > 0 && $ && (oe += t(V))
                    }), $
                }

                function Yn(C, v) {
                    var k = hi._4O.Util._56O(C, "ss"),
                        E = {},
                        Z = 0;
                    return E.v = k == v, E.t = 1, E.s = 0 > Z ? -1 : 0, cl = E.v, Z > 0 ? E[0] = Z : -1 > Z ? E[0] = Z + E.DV : E.t = 0, [k, E]
                }

                function Gr(R) {
                    var U = 38,
                        I = R.substring(0, U);
                    if (I && 30 == I.indexOf("05000420")) {
                        var t = ["ss", R.substring(U)];
                        return t
                    }
                    return []
                }

                function Bl(K, T) {
                    T = T.replace(Nk, ""), T = T.replace(/[ \n]+/g, "");
                    var y = wm(T, 16);
                    if (y._55O() > this.n._55O()) return 0;
                    var X = this._37O(y),
                        W = X[Tq](16).replace(/^1f+00/, ""),
                        L = Gr(W);
                    if (0 == L.length) return !1;
                    for (var f, i, S, o = .5, w = qs, D = [0, .5, .75, .875, .9375], R = [], M = [], c = [], F = C / w, P = L[1], B = Yn(K, P)[0], z = 0, b = 0; z < D.length; z++) {
                        var N = 0 === z % 2 ? 0 : .5;
                        for (f = 0; w >= f; f++) i = (f + N) * F, S = 1 - D[z], R.push(m(i) * o * S, -o + 2 * D[z] * o, -q(i) * o * S), M.push((f + N) / w, S)
                    }
                    for (z = 0; z < D.length - 1; z++) {
                        var d = z * (w + 1),
                            r = (z + 1) * (w + 1);
                        for (f = 0; w > f; f++) c.push(d + f, r + f + 1, r + f, d + f, d + f + 1, r + f + 1)
                    }
                    return c.forEach(function(Q) {
                        b += Q
                    }), P == B && b > 10
                }
                var ss, Ji = 0xdeadbeefcafe,
                    sd = 15715070 == (16777215 & Ji),
                    Tq = "toString",
                    de = "",
                    sq = "nat",
                    Mo = function() {};
                L = T["D" + 11182[Tq](d(2, 5))];
                var Hn = N.prototype;
                hb += Mg.substr(0, 1);
                var ee = T.navigator ? T.navigator.appName : "";
                sd && "Microsoft Internet Explorer" == ee ? (Hn.am = $, ss = 30) : sd && "Netscape" != ee ? (Hn.am = j, ss = 26) : (Hn.am = E, ss = 28), Hn.DB = ss, Hn.DM = (1 << ss) - 1, Hn.DV = 1 << ss;
                var Bq = 52;
                Hn.FV = d(2, Bq), Hn.F1 = Bq - ss, Hn.F2 = 2 * ss - Bq;
                var Sr, _h, ye = "0123456789abcdefghijklmnopqrstuvwxyz",
                    am = [],
                    ho = function(I) {
                        return String.fromCharCode(I)
                    };
                for (Sr = "0".charCodeAt(0), _h = 0; 9 >= _h; ++_h) am[Sr++] = _h;
                for (Sr = "a".charCodeAt(0), _h = 10; 36 > _h; ++_h) am[Sr++] = _h;
                for (Sr = "A".charCodeAt(0), _h = 10; 36 > _h; ++_h) am[Sr++] = _h;
                var Gp = Y.prototype;
                Gp._73O = x, Gp.revert = W, Gp._74O = V, Gp._75O = A, Gp._76O = Z;
                var Lf = H.prototype;
                Lf._73O = u, Lf.revert = O, Lf._74O = F, Lf._75O = as, Lf._76O = Cb, Hn._77O = D, Hn._58O = k, Hn._54O = M, Hn._57O = G, Hn._59O = z, Hn._45O = U, Hn._44O = e, Hn._46O = w, Hn._78O = s, Hn._47O = l, Hn._48O = o, Hn._49O = c, Hn._50O = a, Hn._51O = gq, Hn.exp = er, Hn.toString = S, Hn._85O = h, Hn.abs = p, Hn._52O = B, Hn._55O = J, Hn.mod = _, Hn._53O = bp, N.ZERO = y(0), N.ONE = y(1), Hn._86O = Ip;
                var Oq = function(B, p) {
                    var W = this;
                    W.isPublic = !0, typeof B !== Gq ? (W.n = B, W.e = p) : B != r && p != r && B.length > 0 && p.length > 0 && (W.n = wm(B, 16), W.e = t(p, 16))
                };
                Tm = function() {
                    var E, s, d = fh(Ep),
                        R = d.substr(0, 4),
                        y = d.substr(4, 2),
                        t = d.substr(6, 2),
                        X = 1,
                        u = !X,
                        m = f,
                        z = [],
                        k = gs.charAt(7);
                    if (L && (L[Tq]().indexOf(sq) < 0 || L[hb][Tq]().indexOf(sq) < 0 || !d ? E = Mc(io[k]) : (d = new L(R - 0, y - X, t - 0), s = d.setHours(9), L[hb]() > s ? E = Mc(io[k]) : u = !0)), d && E && m) {
                        for (var w in E) z.push(w);
                        var N, P = E[z[0]],
                            _ = E[z[1]],
                            C = E[z[2]],
                            $ = E[z[4]],
                            U = E[z[5]],
                            K = E[z[6]],
                            c = Lp._27O(m);
                        c && K && (N = P + _ + C + $ + "" + U, N && c._31O(N, K) && (u = !0))
                    }
                    return u || ($m = Gj), k
                };
                var ej = Fq.prototype;
                ej._37O = Tf, ej._38O = Oq;
                var ef = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    yl = "=",
                    uo = 25,
                    Kc = 10,
                    Ep = "IBcHAQ==",
                    Cn = Cn || function(u, H) {
                        var g = {},
                            w = g._7A = {},
                            s = w._6A = function() {
                                function U() {}
                                return {
                                    _80O: function(c) {
                                        U.prototype = this;
                                        var f = new U;
                                        return c && f._5A(c), f.hasOwnProperty("_82O") || (f._82O = function() {
                                            f.$super._82O.apply(this, arguments)
                                        }), f._82O.prototype = f, f.$super = this, f
                                    },
                                    _3A: function() {
                                        var k = this._80O();
                                        return k._82O.apply(k, arguments), k
                                    },
                                    _82O: function() {},
                                    _5A: function(r) {
                                        for (var $ in r) r.hasOwnProperty($) && (this[$] = r[$]);
                                        r.hasOwnProperty(Tq) && (this.toString = r.toString)
                                    },
                                    _88O: function() {
                                        return this._82O.prototype._80O(this)
                                    }
                                }
                            }(),
                            m = w._39O = s._80O({
                                _82O: function(O, K) {
                                    O = this._84O = O || [], this._65O = K != H ? K : 4 * O.length
                                },
                                toString: function(y) {
                                    return (y || c).stringify(this)
                                },
                                _89O: function(m) {
                                    var P = this._84O,
                                        g = m._84O,
                                        d = this._65O,
                                        Z = m._65O;
                                    if (this._57O(), d % 4)
                                        for (var G = 0; Z > G; G++) {
                                            var M = 255 & g[G >>> 2] >>> 24 - 8 * (G % 4);
                                            P[d + G >>> 2] |= M << 24 - 8 * ((d + G) % 4)
                                        } else if (g.length > 65535)
                                            for (var G = 0; Z > G; G += 4) P[d + G >>> 2] = g[G >>> 2];
                                        else P.push.apply(P, g);
                                    return this._65O += Z, this
                                },
                                _57O: function() {
                                    var j = this._84O,
                                        S = this._65O;
                                    j[S >>> 2] &= 4294967295 << 32 - 8 * (S % 4), j.length = P(S / 4)
                                },
                                _88O: function() {
                                    var P = s._88O.call(this);
                                    return P._84O = this._84O.slice(0), P
                                },
                                _87O: function(Z) {
                                    for (var I = [], d = 0; Z > d; d += 4) I.push(0 | 4294967296 * b);
                                    return new m._82O(I, Z)
                                }
                            }),
                            x = g._2A = {},
                            c = x._69O = {
                                stringify: function(c) {
                                    var F, I = c._84O,
                                        W = c._65O,
                                        e = [];
                                    for (F = 0; W > F; F++) {
                                        var T = 255 & I[F >>> 2] >>> 24 - 8 * (F % 4);
                                        e.push((T >>> 4).toString(16)), e.push((15 & T).toString(16))
                                    }
                                    return e.join("")
                                },
                                _68O: function(k) {
                                    for (var L = k.length, d = [], j = 0; L > j; j += 2) d[j >>> 3] |= t(k.substr(j, 2), 16) << 24 - 4 * (j % 8);
                                    return new m._82O(d, L / 2)
                                }
                            },
                            j = x._8A = {
                                stringify: function(Y) {
                                    var J, Z = Y._84O,
                                        i = Y._65O,
                                        X = [];
                                    for (J = 0; i > J; J++) {
                                        var W = 255 & Z[J >>> 2] >>> 24 - 8 * (J % 4);
                                        X.push(ho(W))
                                    }
                                    return X.join("")
                                },
                                _68O: function(A) {
                                    var z, Q = A.length,
                                        c = [];
                                    for (z = 0; Q > z; z++) c[z >>> 2] |= (255 & A.charCodeAt(z)) << 24 - 8 * (z % 4);
                                    return new m._82O(c, Q)
                                }
                            },
                            l = x._9A = {
                                stringify: function($) {
                                    try {
                                        return decodeURIComponent(escape(j.stringify($)))
                                    } catch (l) {
                                        throw new Error("")
                                    }
                                },
                                _68O: function(K) {
                                    return j._68O(unescape(encodeURIComponent(K)))
                                }
                            },
                            L = w._32O = s._80O({
                                _1A: function() {
                                    this._83O = new m._82O, this._23O = 0
                                },
                                _33O: function(M) {
                                    typeof M == Gq && (M = l._68O(M)), this._83O._89O(M), this._23O += M._65O
                                },
                                _25O: function(Z) {
                                    var e = this._83O,
                                        N = e._84O,
                                        b = e._65O,
                                        z = this._79O,
                                        G = 4 * z,
                                        T = b / G;
                                    T = Z ? P(T) : v((0 | T) - this._22O, 0);
                                    var q = T * z,
                                        g = I(4 * q, b);
                                    if (q) {
                                        for (var o = 0; q > o; o += z) this._20O(N, o);
                                        var U = N.splice(0, q);
                                        e._65O -= g
                                    }
                                    return new m._82O(U, g)
                                },
                                _88O: function() {
                                    var m = s._88O.call(this);
                                    return m._83O = this._83O._88O(), m
                                },
                                _22O: 0
                            });
                        w._66O = L._80O({
                            cfg: s._80O(),
                            _82O: function(p) {
                                this.cfg = this.cfg._80O(p), this._1A()
                            },
                            _1A: function() {
                                L._1A.call(this), this._34O()
                            },
                            _81O: function(d) {
                                return this._33O(d), this._25O(), this
                            },
                            _72O: function(v) {
                                v && this._33O(v);
                                var A = this._21O();
                                return A
                            },
                            _79O: 16,
                            _26O: function(J) {
                                return function(R, Z) {
                                    return new J._82O(Z)._72O(R)
                                }
                            },
                            _19O: function(U) {
                                return function(i, K) {
                                    return new S._71O._82O(U, K)._72O(i)
                                }
                            }
                        });
                        var S = g._67O = {};
                        return g
                    }();
                ! function() {
                    var e = Cn,
                        S = e._7A,
                        t = S._39O,
                        z = S._66O,
                        r = e._67O,
                        K = [],
                        I = [];
                    ! function() {
                        function y(J) {
                            for (var j = Q(J), n = 2; j >= n; n++)
                                if (!(J % n)) return !1;
                            return !0
                        }

                        function X(W) {
                            return 0 | 4294967296 * (W - (0 | W))
                        }
                        for (var g = 2, P = 0; 64 > P;) y(g) && (8 > P && (K[P] = X(d(g, .5))), I[P] = X(d(g, 1 / 3)), P++), g++
                    }();
                    var L = [],
                        G = r._41O = z._80O({
                            _34O: function() {
                                this._64O = new t._82O(K.slice(0))
                            },
                            _20O: function(Y, h) {
                                for (var r = this._64O._84O, p = r[0], D = r[1], T = r[2], c = r[3], J = r[4], f = r[5], a = r[6], A = r[7], i = 0; 64 > i; i++) {
                                    if (16 > i) L[i] = 0 | Y[h + i];
                                    else {
                                        var q = L[i - 15],
                                            w = (q << 25 | q >>> 7) ^ (q << 14 | q >>> 18) ^ q >>> 3,
                                            $ = L[i - 2],
                                            j = ($ << 15 | $ >>> 17) ^ ($ << 13 | $ >>> 19) ^ $ >>> 10;
                                        L[i] = w + L[i - 7] + j + L[i - 16]
                                    }
                                    var s = J & f ^ ~J & a,
                                        _ = p & D ^ p & T ^ D & T,
                                        v = (p << 30 | p >>> 2) ^ (p << 19 | p >>> 13) ^ (p << 10 | p >>> 22),
                                        N = (J << 26 | J >>> 6) ^ (J << 21 | J >>> 11) ^ (J << 7 | J >>> 25),
                                        C = A + N + s + I[i] + L[i],
                                        u = v + _;
                                    A = a, a = f, f = J, J = 0 | c + C, c = T, T = D, D = p, p = 0 | C + u
                                }
                                r[0] = 0 | r[0] + p, r[1] = 0 | r[1] + D, r[2] = 0 | r[2] + T, r[3] = 0 | r[3] + c, r[4] = 0 | r[4] + J, r[5] = 0 | r[5] + f, r[6] = 0 | r[6] + a, r[7] = 0 | r[7] + A
                            },
                            _21O: function() {
                                var m = this._83O,
                                    Y = m._84O,
                                    d = 8 * this._23O,
                                    J = 8 * m._65O;
                                return Y[J >>> 5] |= 128 << 24 - J % 32, Y[(J + 64 >>> 9 << 4) + 14] = R(d / 4294967296), Y[(J + 64 >>> 9 << 4) + 15] = d, m._65O = 4 * Y.length, this._25O(), this._64O
                            },
                            _88O: function() {
                                var C = z._88O.call(this);
                                return C._64O = this._64O._88O(), C
                            }
                        });
                    e._41O = z._26O(G), e._42O = z._19O(G)
                }();
                var Nk = new RegExp("");
                Nk.compile("[^0-9a-f]", "gi"), Fq._28O = -1, Fq._29O = -2, ej._31O = Bl, ej._63O = Bl, Fq._43O = -2;
                var nb = new function() {
                    var o = this;
                    o._5O = function(g, e) {
                        if ("8" != g.substring(e + 2, e + 3)) return 1;
                        var $ = t(g.substring(e + 3, e + 4));
                        return 0 == $ ? -1 : $ > 0 && 10 > $ ? $ + 1 : -2
                    }, o._13O = function(D, w) {
                        var E = o._5O(D, w);
                        return 1 > E ? "" : D.substring(w + 2, w + 2 + 2 * E)
                    }, o._12O = function(h, c) {
                        var y = o._13O(h, c);
                        if ("" == y) return -1;
                        var s;
                        return s = t(y.substring(0, 1)) < 8 ? new N(y, 16) : new N(y.substring(2), 16), s._86O()
                    }, o._6O = function(n, B) {
                        var w = o._5O(n, B);
                        return 0 > w ? w : B + 2 * (w + 1)
                    }, o._11O = function(m, d) {
                        var h = o._6O(m, d),
                            l = o._12O(m, d);
                        return m.substring(h, h + 2 * l)
                    }, o._10O = function(G, S) {
                        var V = o._6O(G, S),
                            r = o._12O(G, S);
                        return V + 2 * r
                    }, o._7O = function(X, P) {
                        var O = [],
                            i = o._6O(X, P);
                        O.push(i);
                        for (var H = o._12O(X, P), z = i, f = 0;;) {
                            var I = o._10O(X, z);
                            if (I == r || I - i >= 2 * H) break;
                            if (f >= 200) break;
                            O.push(I), z = I, f++
                        }
                        return O
                    }
                };
                if (nb._90O = ho(Kc + 24), nb._91O = n + ho(Kc * Kc + 8), hi == r || !hi) var hi = {};
                hi._4O != r && hi._4O || (hi._4O = {});
                var rp = hi._4O;
                hi._4O.Util = new function() {
                    var y = this;
                    y._56O = function(W) {
                        var o = new hi._4O._3O;
                        return o._30O(W)
                    }, y._4A = function(B) {
                        var k = new hi._4O._3O;
                        return k._36O(B)
                    }, y._11A = function(m) {
                        var G = new rp._3O;
                        return G._30O(m)
                    }
                }, hi._4O._3O = function() {
                    var $ = this;
                    $._8O = function(E, t) {
                        if ("ss" == E && "cj" == t) {
                            try {
                                $.md = Cn._67O._41O._3A()
                            } catch (e) {
                                Mo(de)
                            }
                            $._24O = function(P) {
                                $.md._81O(P)
                            }, $._35O = function(U) {
                                var H = Cn._2A._69O._68O(U);
                                $.md._81O(H)
                            }, $._60O = function() {
                                var C = $.md._72O();
                                return C[Tq](Cn._2A._69O)
                            }, $._30O = function(m) {
                                return $._24O(m), $._60O()
                            }, $._36O = function(K) {
                                return $._35O(K), $._60O()
                            }
                        }
                    }, $._24O = function() {
                        Mo(de)
                    }, $._35O = function() {
                        Mo(de)
                    }, $._60O = function() {
                        Mo(de)
                    }, $._30O = function() {
                        Mo(de)
                    }, $._36O = function() {
                        Mo(de)
                    }, $._8O("ss", "cj")
                }, or = function(T) {
                    var u = ad[$d[7]],
                        B = 1,
                        x = !1;
                    if (Km.a != ad[dh]) return Km.a;
                    if (Km.forEach(function(_) {
                            B *= _
                        }), T > B) {
                        if (u) {
                            u = u.split(nb._90O);
                            var c = u[3],
                                Z = u[7],
                                v = u[11],
                                X = u[19],
                                l = u[23],
                                p = u[27],
                                R = c + Z + v + X + l;
                            x = hk()(R, p)
                        }
                        x || (Pp.prototype._42 = Rk)
                    } else x = !0;
                    return Km.a = x, x
                }, uo = String.fromCharCode(uo + 20);
                var cc = function(v) {
                        return v = v.replace(Nk, de), v = v.replace(/[ \n]+/g, de)
                    },
                    Bk = "30",
                    gd = "06",
                    Um = "02",
                    Oo = "03",
                    An = wm,
                    yb = /^1f+00/,
                    Lp = function() {
                        var f;
                        return f = {
                            _18O: function(C) {
                                var p = C,
                                    c = p.replace(/\s+/g, ""),
                                    O = Ul(c);
                                return O
                            },
                            _14O: function(_) {
                                var e = this._18O(_),
                                    M = this._15O(e);
                                return M
                            },
                            _15O: function(d) {
                                var i = this._17O(d);
                                if ("2a864886f70d010101" == i._61O) {
                                    var y = this._16O(i.key),
                                        t = new Fq;
                                    return t._38O(y.n, y.e), t
                                }
                                Mo(de)
                            },
                            _16O: function(h) {
                                var u = {};
                                h.substr(0, 2) != Bk && Mo(de);
                                var J = nb._7O(h, 0);
                                return 2 != J.length && Mo(de), h.substr(J[0], 2) != Um && Mo(de), u.n = nb._11O(h, J[0]), h.substr(J[1], 2) != Um && Mo(de), u.e = nb._11O(h, J[1]), u
                            },
                            _17O: function(V) {
                                var b = {};
                                b._40O = r;
                                var O = nb._7O(V, 0);
                                2 != O.length && Mo(de);
                                var L = O[0];
                                V.substr(L, 2) != Bk && Mo(de);
                                var g = nb._7O(V, L);
                                return 2 != g.length && Mo(de), V.substr(g[0], 2) != gd && Mo(de), b._61O = nb._11O(V, g[0]), V.substr(g[1], 2) == gd ? b._40O = nb._11O(V, g[1]) : V.substr(g[1], 2) == Bk && (b._40O = {}, b._40O.p = nb._70O(V, g[1], [0], Um), b._40O.q = nb._70O(V, g[1], [1], Um), b._40O.g = nb._70O(V, g[1], [2], Um)), V.substr(O[1], 2) != Oo && Mo(de), b.key = nb._11O(V, O[1]).substr(2), b
                            }
                        }, f._17O ? f : r
                    }(),
                    ve = Lp._27O = function(X) {
                        return Lp._14O(X)
                    };
                hk = function() {
                    return function(_, f) {
                        f = cc(f);
                        var L = An(f, d(2, 4)),
                            U = this;
                        if (!U || !U.n || L._55O() > U.n._55O()) return 0;
                        var D = U._37O(L),
                            s = D[Tq](d(2, 4)).replace(yb, ""),
                            x = Gr(s);
                        if (0 == x.length) return !1;
                        var A = x[0],
                            I = x[1],
                            P = function(P) {
                                return hi._4O.Util._56O(P, A)
                            },
                            g = P(_);
                        return I == g
                    }.bind(ve(f))
                };
                var $j, tf;
                return function() {
                    var X = nr.length - kl.length;
                    if (X > 0)
                        for (var K = 0; X > K; K++) $j = rp.Util, tf = cc
                }(), Cc = function(j, l) {
                    l = tf(l);
                    var Z = ve(zs),
                        S = Yg.length,
                        m = 2 * S,
                        E = An(l, d(S, m)),
                        Q = Z,
                        q = !0;
                    if (Q) {
                        var R = Q[dq[0]];
                        R && E._55O() <= R._55O() && (q = !1)
                    }
                    if (q) return 0;
                    var u = Q._37O(E),
                        $ = u[Tq](d(S, m)).replace(yb, ""),
                        L = Gr($);
                    if (0 == L.length) return !1;
                    var _ = L[0],
                        o = L[1],
                        D = $j._11A(j, _);
                    return o == D
                }, Lp
            }(c, s);
        var pm = D.List = function() {
            this._as = [];
            var U, R, T = arguments.length;
            if (1 === T) {
                var k = arguments[0];
                if (hg(k) && (k = k._as), _o(k))
                    for (R = k.length, U = 0; R > U; U++) this._as.push(k[U]);
                else k != r && this._as.push(k)
            } else if (T > 1)
                for (U = 0; T > U; U++) this._as.push(arguments[U])
        };
        xr("List", s, {
            size: function() {
                return this._as.length
            },
            isEmpty: function() {
                return 0 === this._as.length
            },
            add: function(P, l) {
                return l === y ? this._as.push(P) : this._as.splice(l, 0, P)
            },
            addAll: function(Y) {
                hg(Y) && (Y = Y._as), _o(Y) ? Pn(this._as, Y) : this._as.push(Y)
            },
            get: function(_) {
                return this._as[_]
            },
            slice: function(H, x) {
                return new pm(this._as.slice(H, x))
            },
            remove: function(p) {
                var j = this._as.indexOf(p);
                return j >= 0 && j < this._as.length && this.removeAt(j), j
            },
            removeAt: function(n) {
                return this._as.splice(n, 1)[0]
            },
            set: function(f, Y) {
                return this._as[f] = Y
            },
            clear: function() {
                return this._as.splice(0, this._as.length)
            },
            contains: function(r) {
                return this._as.indexOf(r) >= 0
            },
            indexOf: function(X) {
                return this._as.indexOf(X)
            },
            each: function(I, c) {
                for (var Q = 0, a = this._as.length; a > Q; Q++) {
                    var J = this._as[Q];
                    c ? I.call(c, J) : I(J)
                }
            },
            reverseEach: function(Y, $) {
                for (var r = this._as.length - 1; r >= 0; r--) {
                    var s = this._as[r];
                    $ ? Y.call($, s) : Y(s)
                }
            },
            toArray: function(N, F) {
                if (N) {
                    for (var s, U = [], g = 0, z = this._as.length; z > g; g++) s = this._as[g], F ? N.call(F, s) && U.push(s) : N(s) && U.push(s);
                    return U
                }
                return this._as.concat()
            },
            toList: function(T, d) {
                if (T) {
                    for (var H, Y = new pm, z = 0, r = this._as.length; r > z; z++) H = this._as[z], d ? T.call(d, H) && Y.add(H) : T(H) && Y.add(H);
                    return Y
                }
                return new pm(this)
            },
            reverse: function() {
                this._as.reverse()
            },
            sort: function(I) {
                return this._as.sort(I ? I : am), this
            },
            toString: function() {
                return this._as.toString()
            }
        });
        var Lc = new pm;
        yd(Lc, {
            size: function() {
                return 0
            },
            indexOf: function() {
                return -1
            },
            contains: function() {
                return !1
            },
            isEmpty: function() {
                return !0
            },
            sort: lr,
            each: lr,
            reverseEach: lr,
            toArray: function() {
                return []
            },
            toList: function() {
                return new pm
            },
            add: Sr,
            addAll: Sr,
            set: Sr,
            remove: Sr,
            removeAt: Sr,
            clear: Sr
        });
        var $i = D.Notifier = function() {};
        xr("Notifier", s, {
            contains: function(S, a) {
                if (this._ls)
                    for (var Q, Y = 0, P = this._ls.size(); P > Y; Y++)
                        if (Q = this._ls.get(Y), S === Q.l && a === Q.s) return !0;
                return !1
            },
            add: function(P, c, Z) {
                var s = this,
                    V = {
                        l: P,
                        s: c,
                        a: Z
                    };
                s._ls || (s._ls = new pm), s._f ? (s._as || (s._as = new pm), s._as.add(V)) : V.a ? s._ls.add(V, 0) : s._ls.add(V)
            },
            remove: function(E, k) {
                var P = this;
                P._ls && (P._f ? (P._rs || (P._rs = new pm), P._rs.add({
                    l: E,
                    s: k
                })) : P._remove(E, k))
            },
            _remove: function(F, _) {
                for (var V, h = this._ls, E = 0, I = h.size(); I > E; E++)
                    if (V = h.get(E), V.l === F && V.s === _) return h.removeAt(E), void 0
            },
            fire: function(M) {
                var Q = this,
                    F = Q._ls;
                if (Q._b = 1e4, F) {
                    Q._f = 1;
                    for (var g, X = 0, G = F.size(); G > X; X++) g = F.get(X), g.s ? g.l.call(g.s, M) : g.l(M);
                    if (delete Q._f, Q._rs) {
                        for (G = Q._rs.size(), X = 0; G > X; X++) g = Q._rs.get(X), Q._remove(g.l, g.s);
                        delete Q._rs
                    }
                    if (Q._as) {
                        for (G = Q._as.size(), X = 0; G > X; X++) g = Q._as.get(X), g.a ? F.add(g, 0) : F.add(g);
                        delete Q._as
                    }
                }
            }
        });
        var Bg = D.Data = function() {
            this._id = Vj()
        };
        xr("Data", s, {
            ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop", "dataBindings"],
            ms_dm: 1,
            ms_attr: 1,
            _icon: r,
            _parent: r,
            _children: Lc,
            _childMap: r,
            _styleMap: r,
            _layer: 0,
            _adjustChildrenToTop: !1,
            getUIClass: function() {
                return r
            },
            _22Q: function() {
                return r
            },
            s: function(d, h) {
                var E = this;
                if (2 === arguments.length) E.setStyle(d, h);
                else {
                    if (!Je(d)) return E.getStyle(d);
                    for (var q in d) E.setStyle(q, d[q])
                }
                return E
            },
            fp: function(G, O, c) {
                return this.firePropertyChange(G, O, c)
            },
            firePropertyChange: function(x, h, S) {
                if (h === S) return !1;
                var A = this,
                    n = {
                        property: x,
                        oldValue: h,
                        newValue: S,
                        data: A
                    };
                return A._dataModel && A._dataModel.handleDataPropertyChange(n), A.onPropertyChanged(n), !0
            },
            onPropertyChanged: function(O) {
                var i = this,
                    g = i._parent,
                    A = O.property;
                if (rn(g)) {
                    var S = i.s(lc),
                        h = "s:ingroup" === A;
                    (S && No[A] || A === h) && g._81I(), (S || h) && g.fp("childChange", !0, !1)
                }
                km(g) && No[A] && g.updateFromChildren()
            },
            _21I: function(a) {
                var x = this;
                if (a && x._dataModel) throw "HT-DM";
                x._dataModel = a
            },
            getId: function() {
                return this._id
            },
            setId: function(D) {
                this._id = D
            },
            getChildren: function() {
                return this._children
            },
            size: function() {
                return this._children.size()
            },
            toChildren: function(B, w) {
                return this._children.toList(B, w)
            },
            eachChild: function(i, R) {
                this._children.each(i, R)
            },
            addChild: function(h, v) {
                var J = this;
                h !== J && (J._children === Lc && (J._children = new pm, J._childMap = {}), v === y && (v = J._children.size()), J._childMap[h._id] || J.isDescendantOf(h) || (h._parent && h._parent.removeChild(h), (0 > v || v > J._children.size()) && (v = J._children.size()), J._children.add(h, v), J._childMap[h._id] = h, h.setParent(J), J.onChildAdded(h, v), J.fp(ib, r, h)))
            },
            onChildAdded: function() {},
            removeChild: function(U) {
                var n = this;
                if (n._childMap && n._childMap[U._id]) {
                    var O = n._children.remove(U);
                    delete n._childMap[U._id], n.fp(ib, U, r), U.setParent(r), n.onChildRemoved(U, O)
                }
            },
            onChildRemoved: function() {},
            getChildAt: function(u) {
                return this._children.get(u)
            },
            clearChildren: function() {
                var w = this;
                if (!w._children.isEmpty())
                    for (var s = 0, V = w._children.toArray(), X = V.length; X > s; s++) w.removeChild(V[s])
            },
            getParent: function() {
                return this._parent
            },
            setParent: function(U) {
                var e = this;
                if (!(e._73I || e._parent === U || e === U || U && U.isDescendantOf(e))) {
                    var W = e._parent;
                    e._parent = U, e._73I = 1, W && W.removeChild(e), U && U.addChild(e), delete e._73I, e.fp("parent", W, U), e.onParentChanged(W, U)
                }
            },
            onParentChanged: function() {},
            hasChildren: function() {
                return this._children.size() > 0
            },
            isEmpty: function() {
                return this._children.isEmpty()
            },
            isRelatedTo: function(W) {
                return W ? this.isDescendantOf(W) || W.isDescendantOf(this) : !1
            },
            isParentOf: function(Y) {
                return Y && this._childMap ? !!this._childMap[Y._id] : !1
            },
            isDescendantOf: function(w) {
                if (!w || w.isEmpty()) return !1;
                for (var T = this._parent; T;) {
                    if (w === T) return !0;
                    T = T._parent
                }
                return !1
            },
            getStyleMap: function() {
                return this._styleMap
            },
            getStyle: function(K, v) {
                v === y && (v = 1);
                var x = this._styleMap ? this._styleMap[K] : y;
                return x === y && v ? $[K] : x
            },
            setStyle: function(o, S) {
                var w = this;
                w._styleMap || (w._styleMap = {});
                var g = w._styleMap[o];
                S === y ? delete w._styleMap[o] : w._styleMap[o] = S, w.fp("s:" + o, g, S) && w.onStyleChanged(o, g, S)
            },
            onStyleChanged: function() {},
            iv: function() {
                this.invalidate()
            },
            invalidate: function() {
                this.fp("*", !1, !0)
            },
            toString: function() {
                var C = this;
                return C._displayName || C._name || C._tag || C._id
            },
            toLabel: function() {
                return this._displayName || this._name
            },
            addStyleIcon: function(P, v) {
                var M = this,
                    i = M.s(Oq);
                i || M.s(Oq, i = {}), v ? i[P] = v : delete i[P], M.fp(Oq, r, i)
            },
            removeStyleIcon: function(N) {
                var n = this.s(Oq);
                if (n) {
                    var B = n[N];
                    delete n[N], this.fp(Oq, r, n)
                }
                return B
            },
            getSerializableProperties: function() {
                return {
                    name: 1,
                    displayName: 1,
                    icon: 1,
                    toolTip: 1,
                    parent: 1,
                    layer: 1,
                    tag: 1,
                    adjustChildrenToTop: 1,
                    dataBindings: 1
                }
            },
            getSerializableStyles: function() {
                var n, G = {};
                for (n in this._styleMap) G[n] = 1;
                return G
            }
        });
        var Wg = D.DataModel = function() {
            var p = this;
            p._datas = new pm, p._dataMap = {}, p._roots = new pm, p._rootMap = {}, p._78O = {}, p._36I = new $i, p._35I = new $i, p._selectionModel = new Qj(p);
            var e = p._29Q = [],
                U = p._scheduleCallback = function() {
                    for (var Q = Date.now(), O = 0; O < e.length; O++) {
                        var N = e[O];
                        N.enabled && Q - N.lastTime > N.interval && (p.each(function(O) {
                            N.action(O)
                        }), N.lastTime = Q)
                    }
                    e.length && (p._30Q = c.requestAnimationFrame(U))
                }
        };
        xr("DataModel", s, {
            ms_fire: 1,
            ms_attr: 1,
            ms_ac: ["name", "autoAdjustIndex", "hierarchicalRendering", "background", "init"],
            _name: y,
            _autoAdjustIndex: !0,
            _hierarchicalRendering: !1,
            _background: y,
            _init: y,
            sm: function() {
                return this.getSelectionModel()
            },
            mm: function(u, Y, S) {
                this.addDataModelChangeListener(u, Y, S)
            },
            umm: function(a, Q) {
                this.removeDataModelChangeListener(a, Q)
            },
            md: function(W, w, o) {
                this.addDataPropertyChangeListener(W, w, o)
            },
            umd: function(t, h) {
                this.removeDataPropertyChangeListener(t, h)
            },
            mh: function(d, I, Z) {
                this.addHierarchyChangeListener(d, I, Z)
            },
            umh: function(d, h) {
                this.removeHierarchyChangeListener(d, h)
            },
            getHistoryManager: function() {
                return this._historyManager
            },
            getAttrObject: function() {
                return this._attrObject
            },
            setAttrObject: function(I) {
                return this._attrObject = I
            },
            getSelectionModel: function() {
                return this._selectionModel
            },
            size: function() {
                return this._datas.size()
            },
            isEmpty: function() {
                return this._datas.isEmpty()
            },
            getRoots: function() {
                return this._roots
            },
            getDatas: function() {
                return this._datas
            },
            getDataById: function(r) {
                return this._dataMap[r]
            },
            removeDataById: function(B) {
                this.remove(this.getDataById(B))
            },
            toDatas: function(K, w) {
                return this._datas.toList(K, w)
            },
            each: function(z, r) {
                this._datas.each(z, r)
            },
            getDataByTag: function(b) {
                return this._78O[b]
            },
            removeDataByTag: function(l) {
                this.remove(this.getDataByTag(l))
            },
            add: function(i, L) {
                var Z = this,
                    o = i._id,
                    K = i._tag,
                    k = Z._roots;
                if (Z._dataMap[o]) throw "'" + o + "' already exists";
                K != r && (Z._78O[K] = i), Z._dataMap[o] = i, Z._datas.add(i), i._parent || (Z._rootMap[o] = i, L >= 0 ? k.add(i, L) : k.add(i)), i._21I(Z), Z.onAdded(i), Z._36I.fire({
                    kind: "add",
                    data: i
                })
            },
            onAdded: function() {},
            remove: function(U) {
                if (U) {
                    var w = this,
                        X = U._id,
                        W = U.getTag(),
                        Q = w.getHistoryManager();
                    U._dataModel === w && (Q && Q.beginInteraction(), w.prepareRemove(U), U.toChildren().each(w.remove, w), U._parent && U._parent.removeChild(U), w._datas.remove(U), delete w._dataMap[X], W != r && delete w._78O[W], w._rootMap[X] && (delete w._rootMap[X], w._roots.remove(U)), U._21I(r), w.onRemoved(U), w._36I.fire({
                        kind: Nk,
                        data: U
                    }), Q && Q.endInteraction())
                }
            },
            onRemoved: function() {},
            prepareRemove: function() {},
            clear: function() {
                var x = this;
                x._datas.size() > 0 && (x._datas.each(function(l) {
                    l._21I(r)
                }), x._datas.clear(), x._dataMap = {}, x._roots.clear(), x._rootMap = {}, x._78O = {}, x._36I.fire({
                    kind: Kr
                }))
            },
            contains: function(K) {
                return K && K._dataModel === this
            },
            handleDataPropertyChange: function(Z) {
                var I = this,
                    w = Z.data,
                    f = Z.property;
                if ("parent" === f) {
                    var S = w._id,
                        K = I._rootMap,
                        G = I._roots;
                    w._parent ? K[S] && (delete K[S], G.remove(w)) : K[S] || (K[S] = w, G.add(w))
                } else if ("tag" === f) {
                    var V = Z.oldValue,
                        X = Z.newValue,
                        c = I._78O;
                    V != r && delete c[V], X != r && (c[X] = w)
                }
                this.onDataPropertyChanged(w, Z), this._35I.fire(Z)
            },
            onDataPropertyChanged: function() {},
            addDataModelChangeListener: function(z, S, H) {
                this._36I.add(z, S, H)
            },
            removeDataModelChangeListener: function(O, I) {
                this._36I.remove(O, I)
            },
            addDataPropertyChangeListener: function(R, A, g) {
                this._35I.add(R, A, g)
            },
            removeDataPropertyChangeListener: function(Q, D) {
                this._35I.remove(Q, D)
            },
            _38I: function(b, w, T) {
                this._37I && this._37I.fire({
                    data: b,
                    oldIndex: w,
                    newIndex: T
                })
            },
            addHierarchyChangeListener: function(K, k, m) {
                this._37I || (this._37I = new $i), this._37I.add(K, k, m)
            },
            removeHierarchyChangeListener: function(D, r) {
                this._37I.remove(D, r)
            },
            getSiblings: function(E) {
                var c = E._parent;
                return c ? c._children : this._roots
            },
            eachByHierarchical: function(C, g, d) {
                if (g) return this._eachByHierarchical(C, g, d);
                for (var i = 0, A = this._roots, h = A.size(); h > i; i++)
                    if (this._eachByHierarchical(C, A.get(i), d) === !1) return !1;
                return !0
            },
            _eachByHierarchical: function(g, K, i) {
                if (i) {
                    if (g.call(i, K) === !1) return !1
                } else if (g(K) === !1) return !1;
                for (var b = K.size(), u = 0; b > u; u++)
                    if (this._eachByHierarchical(g, K.getChildAt(u), i) === !1) return !1;
                return !0
            },
            reverseEachByHierarchical: function(m, N, R) {
                if (N) return this._reverseEachByHierarchical(m, N, R);
                for (var D = this._roots, J = D.size(), i = J - 1; i >= 0; i--)
                    if (this._reverseEachByHierarchical(m, D.get(i), R) === !1) return !1;
                return !0
            },
            _reverseEachByHierarchical: function(W, r, M) {
                for (var v = r.size(), p = v - 1; p >= 0; p--)
                    if (this._reverseEachByHierarchical(W, r.getChildAt(p), M) === !1) return !1;
                if (M) {
                    if (W.call(M, r) === !1) return !1
                } else if (W(r) === !1) return !1;
                return !0
            },
            eachByDepthFirst: function(l, f, K) {
                if (f) return this._11I(l, f, K);
                for (var W = 0, c = this._roots, V = c.size(); V > W; W++)
                    if (this._11I(l, c.get(W), K) === !1) return !1;
                return !0
            },
            _11I: function($, V, D) {
                for (var A = V.size(), c = 0; A > c; c++)
                    if (this._11I($, V.getChildAt(c), D) === !1) return !1;
                if (D) {
                    if ($.call(D, V) === !1) return !1
                } else if ($(V) === !1) return !1;
                return !0
            },
            eachByBreadthFirst: function(D, M, A) {
                var h = new pm;
                for (M ? h.add(M) : this._roots.each(h.add, h); h.size() > 0;)
                    if (M = h.removeAt(0), M.eachChild(h.add, h), A) {
                        if (D.call(A, M) === !1) return !1
                    } else if (D(M) === !1) return !1;
                return !0
            },
            moveTo: function(I, U) {
                var D = this.getSiblings(I),
                    V = D.indexOf(I);
                V === U || 0 > V || U >= 0 && U <= D.size() && (D.remove(I), U > D.size() && U--, D.add(I, U), this._38I(I, V, U))
            },
            moveUp: function(O) {
                this.moveTo(O, this.getSiblings(O).indexOf(O) - 1)
            },
            moveDown: function(q) {
                this.moveTo(q, this.getSiblings(q).indexOf(q) + 1)
            },
            moveToTop: function(O) {
                this.moveTo(O, 0)
            },
            moveToBottom: function(g) {
                this.moveTo(g, this.getSiblings(g).size())
            },
            moveSelectionUp: function(w) {
                w || (w = this.sm());
                var r = new pm;
                pr(w, r, this._roots), r.each(this.moveUp, this)
            },
            moveSelectionDown: function(L) {
                L || (L = this.sm());
                var d = new pm;
                mm(L, d, this._roots), d.each(this.moveDown, this)
            },
            moveSelectionToTop: function(P) {
                P || (P = this.sm());
                var f = new pm;
                Gk(P, f, this._roots), f.each(this.moveToTop, this)
            },
            moveSelectionToBottom: function(k) {
                k || (k = this.sm());
                var H = new pm;
                Qp(k, H, this._roots), H.each(this.moveToBottom, this)
            },
            moveToIndex: function($, r, C) {
                var b = this.getDatas();
                null == C && (C = b.indexOf($)), C === r || 0 > C || r >= 0 && r <= b.size() && (b.remove($), r > b.size() && r--, b.add($, r), this._76I($, C, r))
            },
            bringForward: function(C) {
                this.moveToIndex(C, this.getDatas().indexOf(C) + 1)
            },
            bringToFront: function(l) {
                this.moveToIndex(l, this.size())
            },
            sendBackward: function(U) {
                this.moveToIndex(U, this.getDatas().indexOf(U) - 1)
            },
            sendToBack: function(P) {
                this.moveToIndex(P, 0)
            },
            bringSelectionForward: function(i) {
                i || (i = this.sm());
                for (var l = new pm, I = this.getDatas(), f = !1, R = 0; R < I.size(); R++) {
                    var G = I.get(I.size() - 1 - R);
                    i.contains(G) ? f && l.add(G) : f = !0
                }
                l.each(this.bringForward, this)
            },
            bringSelectionToFront: function(w) {
                w || (w = this.sm());
                for (var h = new pm, b = this.getDatas(), c = 0; c < b.size(); c++) {
                    var X = b.get(c);
                    w.contains(X) && h.add(X)
                }
                h.each(this.bringToFront, this)
            },
            sendSelectionBackward: function(D) {
                D || (D = this.sm());
                for (var Z = new pm, r = this.getDatas(), I = !1, Q = 0; Q < r.size(); Q++) {
                    var J = r.get(Q);
                    D.contains(J) ? I && Z.add(J) : I = !0
                }
                Z.each(this.sendBackward, this)
            },
            sendSelectionToBack: function(P) {
                P || (P = this.sm());
                for (var E = new pm, F = this.getDatas(), L = 0; L < F.size(); L++) {
                    var D = F.get(F.size() - 1 - L);
                    P.contains(D) && E.add(D)
                }
                E.each(this.sendToBack, this)
            },
            addScheduleTask: function(Q) {
                var A = this;
                A.removeScheduleTask(Q), Q.enabled == r && (Q.enabled = !0), Q.interval == r && (Q.interval = 10), Q.action == r && (Q.action = lr), Q.lastTime = Date.now(), A._29Q.push(Q), A._30Q == r && (A._30Q = c.requestAnimationFrame(A._scheduleCallback))
            },
            removeScheduleTask: function(O) {
                var T = this,
                    y = T._29Q,
                    b = y.indexOf(O);
                b >= 0 && y.splice(b, 1), y.length || T._30Q == r || (c.cancelAnimationFrame(T._30Q), delete T._30Q)
            }
        });
        var Qj = D.SelectionModel = function(q) {
            var o = this;
            o._68O = Im, o._map = {}, o._73O = new pm, o._74I = new $i, o._21I(q)
        };
        xr("SelectionModel", s, {
            ms_fire: 1,
            ms_dm: 1,
            ms: function(n, i, D) {
                this.addSelectionChangeListener(n, i, D)
            },
            ums: function(V, z) {
                this.removeSelectionChangeListener(V, z)
            },
            fd: function() {
                return this.getFirstData()
            },
            ld: function() {
                return this.getLastData()
            },
            sg: function() {
                return this._68O === ze
            },
            co: function(b) {
                return this._map[b._id] != r
            },
            ss: function(b) {
                this.setSelection(b)
            },
            as: function(i) {
                this.appendSelection(i)
            },
            rs: function(h) {
                this.removeSelection(h)
            },
            cs: function() {
                this.clearSelection()
            },
            sa: function() {
                this.selectAll()
            },
            getSelectionMode: function() {
                return this._68O
            },
            setSelectionMode: function(c) {
                var u = this;
                if (u._68O !== c && (c === dq || c === ze || c === Im)) {
                    u.cs();
                    var e = u._68O;
                    u._68O = c, u.fp("selectionMode", e, c)
                }
            },
            _21I: function(M) {
                var W = this,
                    p = W._dataModel;
                p !== M && (p && (W.cs(), p.umm(W.handleDataModelChange, W)), W._dataModel = M, M.mm(W.handleDataModelChange, W, !0), W.fp(Tr, p, M))
            },
            dispose: function() {
                var d = this;
                d.cs(), d._dataModel.umm(d.handleDataModelChange, d)
            },
            handleDataModelChange: function(n) {
                var N = this;
                if (n.kind === Nk) {
                    var S = n.data;
                    N.co(S) && (N._73O.remove(S), delete N._map[S._id], N._75I(Nk, new pm(S)))
                } else n.kind === Kr && N.cs()
            },
            getFilterFunc: function() {
                return this._filterFunc
            },
            setFilterFunc: function(V) {
                var m = this;
                if (m._filterFunc !== V) {
                    m.cs();
                    var r = m._filterFunc;
                    m._filterFunc = V, m.fp("filterFunc", r, m._filterFunc)
                }
            },
            _75I: function($, S, I, m) {
                I && (this._73O.each(function(c) {
                    m[c._id] ? I.remove(c) : I.add(c)
                }), S = I.toList()), this._74I.fire({
                    kind: $,
                    datas: new pm(S)
                })
            },
            addSelectionChangeListener: function(n, U, T) {
                this._74I.add(n, U, T)
            },
            removeSelectionChangeListener: function(S, n) {
                this._74I.remove(S, n)
            },
            _97O: function(y, s) {
                for (var m, k = this, F = 0, h = new pm(y); F < h.size(); F++) m = h.get(F), (k._filterFunc && !k._filterFunc(m) || s && k.co(m) || !s && !k.co(m) || !k._dataModel.contains(m)) && (h.removeAt(F), F--);
                return h
            },
            appendSelection: function(k) {
                var T = this;
                if (T._68O !== dq) {
                    var $, m, c = T._73O,
                        Y = T._97O(k, !0);
                    Y.isEmpty() || (T.sg() && ($ = new pm(c), m = T._map, c.clear(), T._map = {}, Y = new pm(Y.get(Y.size() - 1))), Y.each(function(D) {
                        c.add(D), T._map[D._id] = D
                    }), T._75I("append", Y, $, m))
                }
            },
            removeSelection: function(c) {
                var u = this,
                    I = u._97O(c),
                    w = 0,
                    Z = I.size();
                if (0 !== Z) {
                    for (; Z > w; w++) {
                        var T = I.get(w);
                        u._73O.remove(T), delete u._map[T._id]
                    }
                    u._75I(Nk, I)
                }
            },
            toSelection: function($, i) {
                return this._73O.toList($, i)
            },
            getSelection: function() {
                return this._73O
            },
            each: function(L, z) {
                this._73O.each(L, z)
            },
            setSelection: function(R) {
                var S = this,
                    c = S._73O;
                if (S._68O !== dq && !(c.isEmpty() && !R || 1 === c.size() && S.ld() === R)) {
                    var t = new pm(c),
                        s = S._map;
                    c.clear(), S._map = {};
                    var Z = S._97O(R, !0);
                    S.sg() && Z.size() > 1 && (Z = new pm(Z.get(Z.size() - 1))), Z.each(function(H) {
                        c.add(H), S._map[H._id] = H
                    }), S._75I("set", r, t, s)
                }
            },
            clearSelection: function() {
                var A = this,
                    u = A._73O;
                if (u.size() > 0) {
                    var Y = u.toList();
                    u.clear(), A._map = {}, A._75I(Kr, Y)
                }
            },
            selectAll: function() {
                var o = this;
                if (o._68O !== dq) {
                    var N, Z, t = o._dataModel.toDatas();
                    if (o._filterFunc)
                        for (N = 0; N < t.size(); N++) Z = t.get(N), o._filterFunc(Z) || (t.removeAt(N), N--);
                    var H = o._73O,
                        k = new pm(H),
                        $ = o._map;
                    H.clear(), o._map = {}, o.sg() && t.size() > 1 && (t = new pm(t.get(t.size() - 1)));
                    var K = t.size();
                    for (N = 0; K > N; N++) Z = t.get(N), H.add(Z), o._map[Z._id] = Z;
                    o._75I("all", r, k, $)
                }
            },
            size: function() {
                return this._73O.size()
            },
            isEmpty: function() {
                return this._73O.isEmpty()
            },
            contains: function(C) {
                return this._map[C._id] != r
            },
            getLastData: function() {
                var V = this._73O;
                return V.size() > 0 ? V.get(V.size() - 1) : r
            },
            getFirstData: function() {
                var z = this._73O;
                return z.size() > 0 ? z.get(0) : r
            },
            isSelectable: function(E) {
                var m = this;
                return E && m._68O !== dq ? m._filterFunc ? m._filterFunc(E) : !0 : !1
            },
            getTopSelection: function() {
                var G = this,
                    e = new pm;
                return G._73O.each(function(i) {
                    for (var t = i.getParent(); t;) {
                        if (G.contains(t)) {
                            i = r;
                            break
                        }
                        t = t.parent
                    }
                    i && e.add(i)
                }), e
            }
        });
        var yp = function() {
            return Nr(0),
                function(H, $) {
                    var j;
                    if (rn($) && $.isExpanded()) {
                        var x = H.getDataUI($);
                        x && x._88I && (j = x._88I.rect)
                    }
                    return j ? j : $.getRect()
                }
        }();
        yd(S, {
            edgeGroupAgentFunc: r,
            graphViewAutoScrollZone: 16,
            graphViewResettable: !1,
            graphViewPannable: !0,
            graphViewRectSelectable: !0,
            graphViewScrollBarVisible: !0,
            graphViewRectSelectBorderColor: Z.rectSelectBorder,
            graphViewRectSelectBackground: $c,
            graphViewEditPointSize: h ? 17 : 7,
            graphViewEditPointBorderColor: Z.editPointBorder,
            graphViewEditPointBackground: Z.editPointBackground,
            setEdgeType: function(P, d, Y) {
                cp[P] = d, ue[P] = Y
            },
            getEdgeType: function(j) {
                return cp[j]
            },
            getEdgeTypeMap: function() {
                return cp
            },
            getNodeRect: yp
        }, !0), yd($, {
            "2d.selectable": !0,
            "2d.visible": !0,
            "2d.movable": !0,
            "2d.editable": !0,
            "2d.move.mode": y,
            "image.stretch": "fill",
            icons: y,
            ingroup: !0,
            "body.color": y,
            opacity: y,
            pixelPerfect: !0,
            "select.color": Zr,
            "select.width": 1,
            "select.padding": 2,
            "select.type": li,
            shadow: !1,
            "shadow.blur": 6,
            "shadow.offset.x": 3,
            "shadow.offset.y": 3,
            "border.color": y,
            "border.width": 2,
            "border.padding": 2,
            "border.type": li,
            label: y,
            "label.font": y,
            "label.color": di,
            "label.background": y,
            "label.position": 31,
            "label.position.fixed": !1,
            "label.offset.x": 0,
            "label.offset.y": 2,
            "label.rotation": y,
            "label.max": y,
            "label.opacity": y,
            "label.scale": 1,
            "label.align": y,
            "label.selectable": !0,
            label2: y,
            "label2.font": y,
            "label2.color": di,
            "label2.background": y,
            "label2.position": 34,
            "label2.position.fixed": !1,
            "label2.offset.x": 0,
            "label2.offset.y": -2,
            "label2.rotation": y,
            "label2.max": y,
            "label2.opacity": y,
            "label2.scale": 1,
            "label2.align": y,
            "label2.selectable": !0,
            note: y,
            "note.expanded": !0,
            "note.font": y,
            "note.color": as,
            "note.background": Zr,
            "note.position": 8,
            "note.offset.x": -3,
            "note.offset.y": 3,
            "note.max": y,
            "note.toggleable": !0,
            "note.border.width": 1,
            "note.border.color": y,
            "note.opacity": y,
            "note.scale": 1,
            "note.align": y,
            note2: y,
            "note2.expanded": !0,
            "note2.font": y,
            "note2.color": as,
            "note2.background": Zr,
            "note2.position": 3,
            "note2.offset.x": 3,
            "note2.offset.y": -3,
            "note2.max": y,
            "note2.toggleable": !0,
            "note2.border.width": 1,
            "note2.border.color": y,
            "note2.opacity": y,
            "note2.scale": 1,
            "note2.align": y,
            "group.type": y,
            "group.image": y,
            "group.image.stretch": "fill",
            "group.repeat.image": y,
            "group.padding": 8,
            "group.padding.left": 0,
            "group.padding.right": 0,
            "group.padding.top": 0,
            "group.padding.bottom": 0,
            "group.position": 17,
            "group.toggleable": !0,
            "group.title.font": y,
            "group.title.color": as,
            "group.title.background": Z.groupTitleBackground,
            "group.title.align": fp,
            "group.background": Z.groupBackground,
            "group.depth": 1,
            "group.border.width": 1,
            "group.border.pattern": y,
            "group.border.color": Tg,
            "group.border.cap": Ln,
            "group.border.join": Zk,
            "group.gradient": r,
            "group.gradient.color": "#FFF",
            shape: y,
            "shape.background": Tg,
            "shape.repeat.image": y,
            "shape.border.width": 0,
            "shape.border.width.absolute": !1,
            "shape.border.color": Tg,
            "shape.border.3d": !1,
            "shape.border.3d.color": y,
            "shape.border.3d.accuracy": y,
            "shape.border.cap": Ln,
            "shape.border.join": Zk,
            "shape.border.pattern": y,
            "shape.gradient": r,
            "shape.gradient.color": "#FFF",
            "shape.depth": 0,
            "shape.dash": !1,
            "shape.dash.pattern": Gg,
            "shape.dash.offset": 0,
            "shape.dash.color": Xj,
            "shape.dash.width": y,
            "shape.dash.3d": !1,
            "shape.dash.3d.color": y,
            "shape.dash.3d.accuracy": y,
            "shape.polygon.side": 6,
            "shape.arc.from": B,
            "shape.arc.to": C,
            "shape.arc.close": !0,
            "shape.arc.oval": !1,
            "shape.corner.radius": y,
            "edge.type": y,
            "edge.points": y,
            "edge.segments": y,
            "edge.color": Tg,
            "edge.width": 2,
            "edge.width.absolute": !1,
            "edge.offset": 20,
            "edge.group": 0,
            "edge.expanded": !0,
            "edge.gap": 12,
            "edge.toggleable": !0,
            "edge.center": !1,
            "edge.3d": !1,
            "edge.3d.color": y,
            "edge.3d.accuracy": y,
            "edge.cap": Ln,
            "edge.join": Zk,
            "edge.source.position": 17,
            "edge.source.anchor.x": y,
            "edge.source.anchor.y": y,
            "edge.source.offset.x": 0,
            "edge.source.offset.y": 0,
            "edge.target.position": 17,
            "edge.target.anchor.x": y,
            "edge.target.anchor.y": y,
            "edge.target.offset.x": 0,
            "edge.target.offset.y": 0,
            "edge.pattern": y,
            "edge.dash": !1,
            "edge.dash.pattern": Gg,
            "edge.dash.offset": 0,
            "edge.dash.color": Xj,
            "edge.dash.width": y,
            "edge.dash.3d": !1,
            "edge.dash.3d.color": y,
            "edge.dash.3d.accuracy": y,
            "edge.independent": !1,
            "attach.row.index": 0,
            "attach.column.index": 0,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 0,
            "attach.padding.left": 0,
            "attach.padding.right": 0,
            "attach.padding.top": 0,
            "attach.padding.bottom": 0,
            "attach.index": -1,
            "attach.offset": 0,
            "attach.offset.relative": !1,
            "attach.offset.opposite": !1,
            "attach.thickness": y,
            "attach.gap": 0,
            "attach.gap.relative": !1,
            "grid.row.count": 1,
            "grid.column.count": 1,
            "grid.row.percents": y,
            "grid.column.percents": y,
            "grid.border": 1,
            "grid.border.left": 0,
            "grid.border.right": 0,
            "grid.border.top": 0,
            "grid.border.bottom": 0,
            "grid.gap": 1,
            "grid.background": Z.gridBackground,
            "grid.depth": 1,
            "grid.cell.depth": -1,
            "grid.cell.border.color": Z.gridCellBorderColor,
            "grid.block": y,
            "grid.block.padding": 3,
            "grid.block.width": 1,
            "grid.block.color": Z.gridBlockColor,
            text: "",
            "text.align": "left",
            "text.vAlign": "middle",
            "text.color": di,
            "text.font": Th,
            "text.shadow": !1,
            "text.shadow.color": wr,
            "text.shadow.blur": 6,
            "text.shadow.offset.x": 3,
            "text.shadow.offset.y": 3
        }, !0), yd(Wg, {
            _76I: function(f, d, N) {
                this._39I && this._39I.fire({
                    data: f,
                    oldIndex: d,
                    newIndex: N
                })
            },
            addIndexChangeListener: function(y, K, H) {
                var e = this;
                e._39I || (e._39I = new $i), e._39I.add(y, K, H)
            },
            removeIndexChangeListener: function(e, E) {
                this._39I.remove(e, E)
            },
            prepareRemove: function(k) {
                _g(k) && (k.setSource(r), k.setTarget(r)), k._70O && k._70O.toList().each(this.remove, this), k._69O && k._69O.toList().each(function(K) {
                    K.setHost(r)
                }), k._host && k.setHost(r)
            },
            onAdded: function(Y) {
                this.isAutoAdjustIndex() && this.adjustIndex(Y)
            },
            onDataPropertyChanged: function(f, C) {
                Df[C.property] && this.isAutoAdjustIndex() && this.adjustIndex(f)
            },
            isAdjustable: function(G) {
                return Ac(G) || _g(G)
            },
            isAdjustedToBottom: function(z) {
                return rn(z) ? z.isExpanded() && Qq(z) : !1
            },
            adjustIndex: function(k) {
                var N = this;
                this.isHierarchicalRendering() || (N.isAdjustedToBottom(k) ? (N.sendToBottom(k), k.eachChild(N.adjustIndex, N)) : N.sendToTop(k))
            },
            sendToTop: function(K) {
                var V = this;
                if (V.contains(K) && V.isAdjustable(K)) {
                    var b = V._datas;
                    if (K !== b.get(V.size() - 1)) {
                        var j = b.indexOf(K);
                        b.removeAt(j), b.add(K), V._76I(K, j, V.size() - 1)
                    }
                    if (_g(K)) {
                        var v = K._40I;
                        v && !V.isAdjustedToBottom(v) && V.sendToTop(v), v = K._41I, v && !V.isAdjustedToBottom(v) && V.sendToTop(v)
                    }
                    K._69O && K._69O.each(function(E) {
                        E.isRelatedTo(K) || Ac(K) && E.isLoopedHostOn(K) || V.sendToTop(E)
                    }), K.ISubGraph || (!rn(K) || K.isExpanded()) && K._adjustChildrenToTop && K.eachChild(function(y) {
                        _g(y) || V.sendToTop(y)
                    })
                }
            },
            sendToBottom: function(Z, l) {
                var T = this;
                if (Z !== l && T.contains(Z) && T.isAdjustable(Z) && (!l || T.contains(l))) {
                    var z = T._datas,
                        K = z.remove(Z),
                        y = l ? T._datas.indexOf(l) : 0;
                    if (z.add(Z, y), K !== y) {
                        T._76I(Z, K, y);
                        var E = Z._parent;
                        !E || E.ISubGraph || _g(E) || T.sendToBottom(Z._parent, Z)
                    }
                }
            }
        }), yd(wi, {
            ms_edit: function(t) {
                t._46O = function($) {
                    var T = this,
                        t = T.gv.dm(),
                        M = t.getHistoryManager(),
                        V = T._index,
                        f = T._89I,
                        Y = T._node,
                        U = T._shape,
                        I = T._edge,
                        N = T._77I;
                    Y && f ? (this.fi({
                        kind: "endEditRect",
                        event: $,
                        data: Y,
                        direction: f
                    }), M && M.endInteraction()) : U && V >= 0 ? (T.fi({
                        kind: "endEditPoint",
                        event: $,
                        data: U,
                        index: V
                    }), M && M.endInteraction()) : I && V >= 0 ? (T.fi({
                        kind: "endEditPoint",
                        event: $,
                        data: I,
                        index: V
                    }), M && M.endInteraction()) : N && (T.fi({
                        kind: "endEditRotation",
                        event: $,
                        data: N
                    }), M && M.endInteraction())
                }, t._78I = function(O) {
                    var t = this;
                    t.autoScroll(O);
                    var N = t.gv.lp(O),
                        q = t._index,
                        Z = t._89I,
                        s = t._node,
                        o = t._shape,
                        b = t._edge,
                        g = t._77I;
                    if (s && Z) t._80O(N), t.fi({
                        kind: "betweenEditRect",
                        event: O,
                        data: s,
                        direction: Z
                    });
                    else if (o && q >= 0) N.e = o.getPoints().get(q).e, o.setPoint(q, N), t.fi({
                        kind: "betweenEditPoint",
                        event: O,
                        data: o,
                        index: q
                    });
                    else if (b && q >= 0) {
                        var w = b.s(Hc);
                        N.e = w.get(q).e, w.set(q, N), b.fp(Hc, r, w), t.fi({
                            kind: "betweenEditPoint",
                            event: O,
                            data: b,
                            index: q
                        })
                    } else if (g) {
                        var c = g.p(),
                            k = g.getScale(),
                            e = F + H(N.y - c.y, N.x - c.x);
                        k.y < 0 && (e += B), E(e) < .04 && (e = 0), g.setRotation(e), t.fi({
                            kind: "betweenEditRotation",
                            event: O,
                            data: g
                        })
                    }
                }, t._80O = function(c) {
                    var F = this,
                        I = F._node,
                        U = F._rect,
                        Y = U.x,
                        d = U.y,
                        h = U.width,
                        u = U.height,
                        z = F._89I,
                        s = F._anchor,
                        _ = F._matrix,
                        c = _.tfi(c);
                    "northwest" === z ? U = vf(c, {
                        x: Y + h,
                        y: d + u
                    }) : z === Nf ? U = vf({
                        x: Y,
                        y: c.y
                    }, {
                        x: Y + h,
                        y: d + u
                    }) : "northeast" === z ? U = vf({
                        x: Y,
                        y: c.y
                    }, {
                        x: c.x,
                        y: d + u
                    }) : z === Mg ? U = vf({
                        x: c.x,
                        y: d
                    }, {
                        x: Y + h,
                        y: d + u
                    }) : z === In ? U = vf({
                        x: Y,
                        y: d
                    }, {
                        x: c.x,
                        y: d + u
                    }) : "southwest" === z ? U = vf({
                        x: c.x,
                        y: d
                    }, {
                        x: Y + h,
                        y: c.y
                    }) : "south" === z ? U = vf({
                        x: Y,
                        y: d
                    }, {
                        x: Y + h,
                        y: c.y
                    }) : "southeast" === z && (U = vf({
                        x: Y,
                        y: d
                    }, c)), I.setPosition(_.tf(U.x + U.width * s.x, U.y + U.height * s.y)), I.setWidth(U.width), I.setHeight(U.height)
                }, t._80I = function(h, c, k, L) {
                    var e = this,
                        S = e.gv._zoom,
                        T = (e.gv.getEditPointSize() + 2) / S;
                    return db({
                        x: c - T / 2,
                        y: k - T / 2,
                        width: T,
                        height: T
                    }, h) ? (e._89I !== L && (e._89I = L), !0) : !1
                }, t._79I = function(d, V, g) {
                    var T = this,
                        C = T.gv,
                        k = V ? C.getDataUI(V) : r,
                        K = k ? k._55O : r;
                    if (K) {
                        var J, Z, O, j, w = C._zoom,
                            y = (C.getEditPointSize() + 2) / w,
                            u = C.lp(d);
                        if (Ac(V)) {
                            if (K._56O && Ac(V) && (Z = K._98o, db({
                                    x: Z.x - y / 2,
                                    y: Z.y - y / 2,
                                    width: y,
                                    height: y
                                }, u))) return T._77I = V, g && T.fi({
                                kind: "beginEditRotation",
                                event: d,
                                data: V
                            }), T.setCursor("crosshair"), !0;
                            if (K._43O && V instanceof _r)
                                for (O = V.getPoints(), J = O.size() - 1; J >= 0; J--)
                                    if (Z = O.get(J), db({
                                            x: Z.x - y / 2,
                                            y: Z.y - y / 2,
                                            width: y,
                                            height: y
                                        }, u)) return T._index = J, T._shape = V, g && T.fi({
                                        kind: "beginEditPoint",
                                        event: d,
                                        data: V,
                                        index: J
                                    }), T.setCursor("crosshair"), !0;
                            if (K._42O)
                                for (var x = V.getEditControlPoints(), e = ["northwest", -1, -1, Mg, -1, 0, "southwest", -1, 1, "south", 0, 1, "southeast", 1, 1, In, 1, 0, "northeast", 1, -1, Nf, 0, -1], J = 0, j = x.length; j > J; J++) {
                                    var F = e[3 * J],
                                        N = x[J];
                                    if (T._80I(u, N.x, N.y, F)) {
                                        T._node = V;
                                        var R = V.getWidth(),
                                            s = V.getHeight(),
                                            B = V.getAnchor();
                                        T._rect = {
                                            x: -R * B.x,
                                            y: -s * B.y,
                                            width: R,
                                            height: s
                                        }, T._anchor = B, T._matrix = V.getMatrix();
                                        var L = V.getRotation(),
                                            D = m(L),
                                            z = q(L),
                                            h = e[3 * J + 1] * kd(V.getScale().x),
                                            l = e[3 * J + 2] * kd(V.getScale().y),
                                            M = Math.atan2(-z * h - D * l, D * h - z * l),
                                            f = (Math.round(M / (Math.PI / 4)) + 8) % 8,
                                            Y = [Tn, "nesw-resize", gs, "nwse-resize", Tn, "nesw-resize", gs, "nwse-resize"][f];
                                        return T.setCursor(Y), g && T.fi({
                                            kind: "beginEditRect",
                                            event: d,
                                            data: V,
                                            direction: T._89I
                                        }), !0
                                    }
                                }
                        }
                        if (K._43O && _g(V) && V.s(cb) === ai && (O = V.s(Hc)))
                            for (J = O.size() - 1; J >= 0; J--)
                                if (Z = O.get(J), db({
                                        x: Z.x - y / 2,
                                        y: Z.y - y / 2,
                                        width: y,
                                        height: y
                                    }, u)) return T._index = J, T._edge = V, g && T.fi({
                                    kind: "beginEditPoint",
                                    event: d,
                                    data: V,
                                    index: J
                                }), T.setCursor("crosshair"), !0
                    }
                    return !1
                }
            },
            ms_gv: function(O) {
                O._currentSubGraph = r, O.upSubGraph = function() {
                    this.setCurrentSubGraph(wk(this._currentSubGraph))
                }, O.isVisible = function($) {
                    var q = this;
                    if (wk($) !== q._currentSubGraph) return !1;
                    if (_g($)) {
                        var e = $._40I,
                            S = $._41I;
                        if (!e || !S) return !1;
                        if (!($.s("edge.independent") || q.isVisible(e) && q.isVisible(S))) return !1;
                        if ($.isEdgeGroupHidden()) return !1
                    } else
                        for (var P = $._parent; P && !P.ISubGraph;) {
                            if (rn(P) && (!P.isExpanded() || !q.isVisible(P))) return !1;
                            P = P._parent
                        }
                    if ($._parent instanceof mj && !q.isVisible($._parent)) return !1;
                    if (q instanceof de) {
                        if (!$.s("3d.visible")) return !1
                    } else if (!$.s("2d.visible")) return !1;
                    return q._visibleFunc ? q._visibleFunc($) : !0
                }, O.handleSelectionChange = function(v) {
                    var d = this;
                    v.datas.each(function(u) {
                        d.invalidateData(u);
                        var T = u._parent;
                        rn(T) && Ac(u) && u.s(lc) && (d.invalidateData(T), T._49I && T._49I.each(function(b) {
                            d.invalidateData(b)
                        }))
                    }), d.onSelectionChanged(v)
                }, O.onSelectionChanged = function(o) {
                    var b = this,
                        v = b.sm();
                    if (1 === v.size() && ("set" === o.kind || "append" === o.kind)) {
                        var A = v.ld();
                        b.isAutoMakeVisible() && b.makeVisible(A), b.adjustIndex && b._dataModel.isAutoAdjustIndex() && b.adjustIndex(A)
                    }
                }, O.makeVisible = function(V) {
                    if (V) {
                        var Z = this,
                            w = Z.getDataUI ? Z.getDataUI(V) : Z.getData3dUI(V);
                        if (w) {
                            var M = V,
                                J = wk(V);
                            for (J !== Z._currentSubGraph && Z.setCurrentSubGraph(J);
                                (M = M._parent) && M !== J;) rn(M) && M.setExpanded(!0);
                            Z._23I = V, Z.iv()
                        }
                    }
                }, O.getLabel = function(b) {
                    var D = b.getStyle(Vi);
                    return D === y ? b.getName() : D
                }, O.getLabelBackground = function(_) {
                    return _.getStyle("label.background")
                }, O.getLabelColor = function(Y) {
                    return Y.getStyle("label.color")
                }, O.getLabel2 = function(Q) {
                    return Q.getStyle("label2")
                }, O.getLabel2Background = function(q) {
                    return q.getStyle("label2.background")
                }, O.getLabel2Color = function(N) {
                    return N.getStyle("label2.color")
                }, O.getNote = function(O) {
                    return O.getStyle(Qe)
                }, O.getNoteBackground = function(M) {
                    return M.getStyle("note.background")
                }, O.getNote2 = function(a) {
                    return a.getStyle(Gl)
                }, O.getNote2Background = function(N) {
                    return N.getStyle("note2.background")
                }, O.handleClick = function(D, e, c) {
                    var Q = this;
                    e ? (Q.fi({
                        kind: "clickData",
                        event: D,
                        data: e,
                        part: c
                    }), Q.onDataClicked(e, D)) : (Q.fi({
                        kind: "clickBackground",
                        event: D
                    }), Q.onBackgroundClicked(D))
                }, O.handleDoubleClick = function(e, r, T) {
                    var M = this;
                    Yq(e) && (r ? (M.fi({
                        kind: "doubleClickData",
                        event: e,
                        data: r,
                        part: T
                    }), M.onDataDoubleClicked(r, e, T), M.checkDoubleClickOnNote(e, r, T) || M.checkDoubleClickOnRotation && M.checkDoubleClickOnRotation(e, r, T) || (_g(r) ? M.onEdgeDoubleClicked(r, e, T) : r.ISubGraph ? M.onSubGraphDoubleClicked(r, e, T) : rn(r) ? M.onGroupDoubleClicked(r, e, T) : r.IDoorWindow ? M.onDoorWindowDoubleClicked(r, e, T) : r.ICSGBox && M.onCSGBoxDoubleClicked(r, e, T))) : (M.fi({
                        kind: "doubleClickBackground",
                        event: e
                    }), M.onBackgroundDoubleClicked(e)))
                }, O.onSubGraphDoubleClicked = function(C) {
                    this.setCurrentSubGraph(C)
                }, O.onEdgeDoubleClicked = function(L, a) {
                    L.ISubGraph && !ji(a) ? this.setCurrentSubGraph(L) : L.s("edge.toggleable") && L.toggle()
                }, O.onGroupDoubleClicked = function(F) {
                    F.s("group.toggleable") && F.toggle()
                }, O.onDoorWindowDoubleClicked = function(A) {
                    A.s("dw.toggleable") && A.toggle(!0)
                }, O.onCSGBoxDoubleClicked = function(y, M) {
                    var R = this;
                    if (R instanceof de) {
                        var a = R.getHitFaceInfo(M);
                        a && a.face && y.s(a.face + ".toggleable") && y.toggleFace(a.face, !0)
                    }
                }, O.onBackgroundClicked = function() {}, O.onBackgroundDoubleClicked = function() {
                    this.upSubGraph()
                }, O.onDataClicked = function() {}, O.onDataDoubleClicked = function() {}, O.onAutoLayoutEnded = function() {}, O.onMoveEnded = function() {}, O.onPanEnded = function() {}, O.onPinchEnded = function() {}, O.onRectSelectEnded = function() {}, O.onZoomEnded = function() {}
            },
            ms_icons: function(q) {
                q.getRotation = function(M) {
                    return M == r ? 0 : M
                }, q._15O = function() {
                    var X = this,
                        l = X.s(Oq);
                    if (l) {
                        var u = X,
                            S = X.data || X._data,
                            T = X._38o = {
                                icons: l,
                                rects: {}
                            };
                        for (var V in l) {
                            var H = l[V],
                                g = yq(H.shape3d, S, u);
                            if (!(yq(H.visible, S, u) === !1 || yq(H.for3d, S, u) && !X.I3d || g && !X.I3d)) {
                                var c = g ? [g] : yq(H.names, S, u),
                                    I = c ? c.length : 0,
                                    F = yq(H.position, S, u) || 3,
                                    $ = yq(H.offsetX, S, u) || 0,
                                    n = yq(H.offsetY, S, u) || 0,
                                    Z = yq(H.direction, S, u) || In,
                                    A = yq(H.gap, S, u),
                                    L = A != r ? A : 1,
                                    j = yq(H.rotation, S, u),
                                    Q = yq(H.keepOrien, S, u),
                                    f = yq(H.rotationFixed, S, u) ? j : X.getRotation(j, Q, F),
                                    h = r,
                                    e = T.rects[V] = new Array(I);
                                e.rotation = f;
                                for (var E = 0; I > E; E++) {
                                    var z, G, w, d, B = c[E];
                                    if (g) w = 0, d = 0;
                                    else {
                                        var R = Eq(B);
                                        w = yq(H.width, S, u), d = yq(H.height, S, u), w == r && (w = co(R, S)), d == r && (d = bi(R, S))
                                    }
                                    if (h ? Z === In ? $ += w / 2 : Z === Mg ? $ -= w / 2 : Z === Nf ? n -= d / 2 : n += d / 2 : h = {
                                            width: w,
                                            height: d
                                        }, X.I3d) {
                                        var x = -w / 2,
                                            s = -d / 2;
                                        G = {
                                            width: w,
                                            height: d,
                                            mat: X._16O(yq(H.autorotate, S, u), F, h, yq(H.face, S, u) || nh, yq(H.t3, S, u), yq(H.r3, S, u), yq(H.rotationMode, S, u), $, n),
                                            vs: new um([x, -s, 0, x, -s - d, 0, x + w, -s - d, 0, x + w, -s, 0])
                                        }
                                    } else z = X.getPosition(F, $, n, h, yq(H.positionFixed, S, u)), G = {
                                        x: z.x - w / 2,
                                        y: z.y - d / 2,
                                        width: w,
                                        height: d
                                    }, X._68o(G, f);
                                    e[E] = G, Z === In ? $ += w / 2 + L : Z === Mg ? $ -= w / 2 + L : Z === Nf ? n -= d / 2 + L : n += d / 2 + L
                                }
                            }
                        }
                    }
                }
            }
        });
        var Op = {
                1: 1,
                2: 1,
                6: 1,
                9: 1,
                10: 1,
                14: 1,
                15: 1,
                16: 1,
                21: 1,
                22: 1,
                26: 1,
                29: 1,
                30: 1,
                34: 1,
                36: 1,
                38: 1,
                40: 1,
                42: 1,
                45: 1,
                50: 1,
                52: 1,
                54: 1
            },
            gj = {
                3: 1,
                7: 1,
                11: 1,
                17: 1,
                23: 1,
                27: 1,
                31: 1,
                44: 1,
                46: 1,
                47: 1,
                49: 1
            },
            ak = {
                translateX: 1,
                translateY: 1,
                zoom: 1,
                scrollBarVisible: 1
            },
            Df = {
                sourceAgent: 1,
                targetAgent: 1,
                expanded: 1,
                parent: 1,
                host: 1
            },
            No = {
                position: 1,
                width: 1,
                height: 1,
                expanded: 1,
                rotation: 1,
                anchor: 1,
                scale: 1,
                "s:edge.points": 1
            },
            uq = {
                "edge.type": 1,
                "edge.group": 1
            },
            Aj = {
                rotation: 1,
                rotationX: 1,
                rotationZ: 1
            },
            An = {
                position: 1,
                width: 1,
                height: 1,
                anchor: 1,
                scale: 1,
                "s:grid.row.count": 1,
                "s:grid.column.count": 1,
                "s:grid.row.percents": 1,
                "s:grid.column.percents": 1,
                "s:grid.border": 1,
                "s:grid.border.left": 1,
                "s:grid.border.right": 1,
                "s:grid.border.top": 1,
                "s:grid.border.bottom": 1,
                "s:grid.gap": 1
            },
            pi = {
                "attach.row.index": 1,
                "attach.column.index": 1,
                "attach.row.span": 1,
                "attach.column.span": 1,
                "attach.padding": 1,
                "attach.padding.left": 1,
                "attach.padding.right": 1,
                "attach.padding.top": 1,
                "attach.padding.bottom": 1,
                "attach.index": 1,
                "attach.offset": 1,
                "attach.offset.relative": 1,
                "attach.offset.opposite": 1,
                "attach.gap": 1,
                "attach.gap.relative": 1,
                "attach.thickness": 1
            },
            Og = {
                shape: 1,
                thickness: 1,
                position: 1,
                anchor: 1,
                scale: 1
            },
            rp = function(L, Y) {
                if (!L || !rn(Y) || Y.isEmpty()) return !1;
                for (L = L._parent; rn(L);) {
                    if (L === Y) return !0;
                    L = L._parent
                }
                return !1
            },
            fb = function(W, e) {
                if (!W || !km(e) || e.isEmpty()) return !1;
                for (W = W._parent; km(W);) {
                    if (W === e) return !0;
                    W = W._parent
                }
                return !1
            },
            wk = function(k) {
                if (!k) return r;
                if (_g(k)) {
                    var Y = k._40I,
                        m = k._41I;
                    if (!Y || !m) return r;
                    var i = wk(Y),
                        M = wk(m);
                    return i === M ? i : r
                }
                for (var B = k._parent; _g(B) && !B.ISubGraph;) B = B._parent;
                return B ? B.ISubGraph ? B : wk(B) : r
            },
            Hk = function(Q, l, m, j) {
                var M = l.getStyle(m) * j;
                M && qp(Q, M), M = l.getStyle(m + ".left") * j, M && (Q.x -= M, Q.width += M), M = l.getStyle(m + ".right") * j, M && (Q.width += M), M = l.getStyle(m + ".top") * j, M && (Q.y -= M, Q.height += M), M = l.getStyle(m + ".bottom") * j, M && (Q.height += M), Q.width < 0 && (Q.width = -Q.width, Q.x -= Q.width), Q.height < 0 && (Q.height = -Q.height, Q.y -= Q.height)
            },
            Qq = function(R) {
                for (var v, O = 0, X = R.size(); X > O; O++)
                    if (v = R.getChildAt(O), Ac(v) && Qq(v)) return !0;
                return R.hasAgentEdges()
            },
            Qn = function(a) {
                if (!a) return r;
                for (var y = a._parent; rn(y);) {
                    if (!rn(y._parent)) return y.isExpanded() ? a : y;
                    y.isExpanded() || (a = y), y = y._parent
                }
                return a
            },
            pj = function(Z, k) {
                if (!Z || !k) return r;
                var A, U, u, l = wk(Z),
                    F = wk(k);
                if (l !== F) {
                    for (; F && l !== F;) F = wk(F);
                    if (l === F) return Z;
                    A = new pm, A.add(Z, 0);
                    for (var t = Z._parent; Ac(t) && !k.isDescendantOf(t);) A.add(t, 0), t = t._parent;
                    for (u = A.size(), U = 0; u > U; U++) {
                        var C = A.get(U);
                        if (rn(C) && !C.isExpanded()) return C;
                        if (C.ISubGraph) return C
                    }
                    return Z
                }
                return Z
            },
            js = function(I) {
                if (I.isLooped()) return I._source;
                var o = Qn(I._source),
                    w = Qn(I._target);
                return o === w ? I._source : pj(o, w)
            },
            ql = function(P) {
                if (P.isLooped()) return P._target;
                var F = Qn(P._source),
                    s = Qn(P._target);
                return F === s ? P._target : pj(s, F)
            },
            Vo = function(E, L, R, f, O, i, v) {
                if (!L) return r;
                var a;
                if (i !== y || v !== y) {
                    i = i === y ? .5 : i, v = v === y ? .5 : v;
                    var x = L.getRotation() || 0;
                    if (x) {
                        var K = L.getPosition(),
                            B = L.getWidth(),
                            w = L.getHeight(),
                            n = L.getAnchor(),
                            Q = L.getScale(),
                            $ = new $b(x, K.x, K.y, Q.x, Q.y);
                        R = $.tf((i - n.x) * B, (v - n.y) * w)
                    } else a = yp(E, L), R = {
                        x: a.x + i * a.width,
                        y: a.y + v * a.height
                    }
                } else R = bf(R, yp(E, L));
                return R.x += f, R.y += O, R
            },
            ts = function(p, z) {
                if (!p || !z) return r;
                var F, i, d, S, l, g;
                if (p === z) {
                    if (S = p.getLoopedEdges(), !S) return r;
                    S = new pm(S)
                } else {
                    if (l = p.getAgentEdges(), g = z.getAgentEdges(), !l || !g) return r;
                    for (i = l.size(), F = 0; i > F; F++) d = l.get(F), g.contains(d) && (S || (S = new pm), S.add(d))
                }
                if (S)
                    for (F = 0; F < S.size(); F++) d = S.get(F), d.getStyle(cb) === ai && (d._22I(r), S.removeAt(F), F--);
                return S
            },
            Bm = function(C, W) {
                var g = ts(C, W);
                if (g && !g.isEmpty()) {
                    if (1 === g.size()) return g.get(0)._22I(r), void 0;
                    var d = new pm,
                        S = new pm;
                    g.each(function($) {
                        var l = $.s("edge.group");
                        d.contains(l) || d.add(l)
                    }), d.sort(), d.each(function(M) {
                        S.add(new D.EdgeGroup(g.toList(function(w) {
                            return M === w.s("edge.group")
                        }), S))
                    }), S.each(function(N) {
                        N.each(function(Z) {
                            Z._22I(N)
                        })
                    })
                }
            },
            ce = function(L, k) {
                if (k) {
                    var n = k.rect,
                        S = k.color,
                        B = k.rotation,
                        I = k.labelWidth,
                        U = k.background,
                        Y = k.opacity,
                        m = k.scale,
                        b = m != r && 1 !== m;
                    if (Y != r) {
                        var F = L.globalAlpha;
                        L.globalAlpha *= Y
                    }
                    if (B || b) {
                        L.save();
                        var t = n.x + n.width / 2,
                            H = n.y + n.height / 2;
                        Xk(L, t, H), B && yr(L, B), b && L.scale(m, m), Xk(L, -t, -H)
                    }
                    if (U && yj(L, n.x, n.y, n.width, n.height, U), I) {
                        var e = n.width,
                            q = L.createLinearGradient(n.x, n.y, n.x + e, n.y);
                        q.addColorStop(0, S), q.addColorStop(.9, S), q.addColorStop(1, ar), S = q, n.width = I
                    }
                    ed(L, k.ss, n, k.font, S, k.align), I && (n.width = e), (B || b) && L.restore(), Y != r && (L.globalAlpha = F)
                }
            },
            Cq = function(O, f) {
                if (f) {
                    var Z = f.rect,
                        g = Z.x,
                        W = Z.y,
                        y = Z.width,
                        q = Z.height,
                        Y = f.background,
                        $ = f.backgroundImage,
                        V = f.borderWidth,
                        N = f.borderColor,
                        M = f.labelWidth,
                        L = f.opacity,
                        T = f.scale,
                        H = T != r && 1 !== T;
                    if (L != r) {
                        var E = O.globalAlpha;
                        O.globalAlpha *= L
                    }
                    if (H) {
                        O.save();
                        var P = Z.x + Z.width / 2,
                            R = Z.y + Z.height / 2;
                        Xk(O, P, R), O.scale(T, T), Xk(O, -P, -R)
                    }
                    if (f.expanded) {
                        var k = I(8, y / 4),
                            s = W + q - 8;
                        if (O.fillStyle = Y, O.beginPath(), O.moveTo(g, W), O.lineTo(g, s), O.lineTo(g + y / 2, s), O.lineTo(g + y / 2, W + q), O.lineTo(g + y / 2 + k, s), O.lineTo(g + y, s), O.lineTo(g + y, W), O.closePath(), O.fill(), V && (O.lineWidth = V, O.lineJoin = "round", O.lineCap = "round", N ? (O.strokeStyle = N, O.stroke()) : (O.strokeStyle = Wk(Y), O.beginPath(), O.moveTo(g + y, W), O.lineTo(g + y, s), O.lineTo(g + y / 2 + k, s), O.lineTo(g + y / 2, W + q), O.stroke(), O.strokeStyle = Bq(Y), O.beginPath(), O.moveTo(g + y, W), O.lineTo(g, W), O.lineTo(g, s), O.lineTo(g + y / 2, s), O.lineTo(g + y / 2, W + q), O.stroke())), $) Qh(O, Eq($), qg, Z.x, Z.y, Z.width, Z.height - 8, f.data, f.view);
                        else {
                            if (Z.height -= 8, Y = f.color, M) {
                                var t = y,
                                    p = O.createLinearGradient(g, W, g + t, W);
                                p.addColorStop(0, Y), p.addColorStop(.9, Y), p.addColorStop(1, ar), Y = p, Z.width = M
                            }
                            ed(O, f.ss, Z, f.font, Y, f.align), M && (Z.width = t), Z.height += 8
                        }
                    } else if (f.icon) Sq(O, Eq(f.icon), g, W, y, q, f.data, f.view);
                    else {
                        var G = y / 2;
                        V && (O.lineWidth = V, O.lineJoin = "round", O.lineCap = "round", O.strokeStyle = N ? N : Wk(Y), O.beginPath(), O.arc(g + G, W + G, G, F, 1.6 * B, !0), O.moveTo(g + G, W + q), O.lineTo(g + y - G / 5, W + G), O.stroke(), O.strokeStyle = N ? N : Bq(Y), O.beginPath(), O.arc(g + G, W + G, G, 1.6 * B, F, !0), O.moveTo(g + G, W + q), O.lineTo(g + G / 5, W + G), O.stroke()), O.fillStyle = Y, O.beginPath(), O.arc(g + G, W + G, G, 0, C, !0), O.moveTo(g + G, W + q), O.lineTo(g + y - G / 5, W + G), O.lineTo(g + G / 5, W + G), O.closePath(), O.fill(), O.fillStyle = f.color, O.beginPath(), O.arc(g + G, W + G, G / 3, 0, C, !0), O.fill()
                    }
                    H && O.restore(), L != r && (O.globalAlpha = E)
                }
            },
            Ip = function(r, m) {
                return m > 2 * r ? r : m / 2
            },
            kh = function(K, s, T, A) {
                if (!K || !s) return 0;
                var j = H(s.y - K.y, s.x - K.x);
                return T || (j = s.x < K.x ? j + B : j), j + A
            },
            Zn = function(B, G, D, j, T, y, g) {
                g && (B.x > G.x || B.x === G.x && B.y > G.y) && (D = lk[D], T = -T);
                var x = bf(D, {
                    x: 0,
                    y: 0,
                    width: ls(B, G),
                    height: 0
                }, y);
                return x.x += j, x.y += T, x = new $b(H(G.y - B.y, G.x - B.x)).tf(x), x.x += B.x, x.y += B.y, x
            },
            Ei = function($, M, i, e, d) {
                if ($._19Q = !0, !i.getEdgeGroup()) return e ? i.s("edge.gap") : 0;
                var A, p = 0,
                    O = 0,
                    g = 0;
                if (i.getEdgeGroup().getSiblings().each(function(z) {
                        z.each(function(F) {
                            if (M.isVisible(F) && F.s(cb) == d) {
                                var v = F.s("edge.gap");
                                A ? (O += g / 2 + v / 2, g = v) : (A = F, g = v), F === i && (p = O)
                            }
                        })
                    }), e) return O - p + g;
                var B = p - O / 2;
                return A && i._40I !== A._40I && ($._19Q = !1), B
            },
            zj = function() {
                var Y = function(g) {
                    var t = [];
                    return g.forEach(function(e) {
                        t.push({
                            x: e.x,
                            y: e.y
                        }), t.push({
                            x: e.x + e.width,
                            y: e.y + e.height
                        }), t.push({
                            x: e.x + e.width,
                            y: e.y
                        }), t.push({
                            x: e.x,
                            y: e.y + e.height
                        })
                    }), t
                };
                return function(F, Z, H) {
                    if ("oval" === F) {
                        var c = 0,
                            z = H.height / H.width,
                            C = z * z,
                            p = H.x + H.width / 2,
                            j = H.y + H.height / 2,
                            s = Y(Z);
                        s.forEach(function(e) {
                            var O = e.x - p,
                                U = e.y - j,
                                d = O * O + U * U / C;
                            d > c && (c = d)
                        }), c = Q(c);
                        var v = z * c;
                        return {
                            x: p - c,
                            y: j - v,
                            width: 2 * c,
                            height: 2 * v
                        }
                    }
                    if ("circle" === F) {
                        var $ = 0,
                            p = H.x + H.width / 2,
                            j = H.y + H.height / 2,
                            s = Y(Z);
                        return s.forEach(function(g) {
                            var T = g.x - p,
                                o = g.y - j,
                                R = T * T + o * o;
                            R > $ && ($ = R)
                        }), $ = Q($), {
                            x: p - $,
                            y: j - $,
                            width: 2 * $,
                            height: 2 * $
                        }
                    }
                    return "roundRect" === F ? (qp(H, I(H.width, H.height) / 16), H) : H
                }
            }(),
            Dm = D.graph = {},
            tk = function(u, U, M) {
                Ni(n + ".graph." + u, U, M)
            };
        D.layout = {};
        var Se = {
            comps: [{
                type: Di,
                points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 56, 112, 79, 73, 53, 81, 67, 100, 48, 107, 77, 85, 55, 110, 53, 85, 99, 115, 104, 115, 65, 56, 111, 82, 102, 67, 47, 89, 86, 72, 65, 106, 103, 61],
                borderWidth: 1,
                borderColor: r
            }]
        };
        Se[kk] = Se[uk] = 160, Ae("node_image", $q(30, 30, [{
            type: li,
            rect: [4, 5, 22, 16],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [2, 3, 26, 20],
            borderWidth: 1,
            borderColor: Tg
        }, {
            type: li,
            rect: [11, 23, 8, 4],
            background: Tg
        }, {
            type: li,
            rect: [6, 27, 18, 2],
            background: Tg
        }])), Ae("node_icon", $q(16, 16, [{
            type: li,
            rect: [2, 2, 12, 10],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: ud,
            rect: [2, 2, 12, 10],
            width: 1,
            color: Tg
        }, {
            type: li,
            rect: [6, 12, 4, 2],
            background: Tg
        }, {
            type: li,
            rect: [4, 14, 8, 1],
            background: Tg
        }])), Ae("block_icon", $q(16, 16, [{
            type: ud,
            rect: [1, 1, 14, 14],
            width: 1,
            color: Tg
        }])), Ae("group_image", $q(66, 39, [{
            type: li,
            rect: [44.3, 18, 18.1, 12.8],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [3.3, 17.8, 18.1, 12.8],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [15.8, 3.2, 33.5, 26.4],
            borderWidth: 1,
            borderColor: Tg,
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [26.2, 29.4, 12.8, 4.2],
            background: Tg
        }, {
            type: li,
            rect: [21.3, 33.5, 22.5, 2.3],
            background: Tg
        }, {
            type: li,
            rect: [5.3, 32.7, 14.1, 2.1],
            background: Tg
        }, {
            type: li,
            rect: [9, 30.4, 6.7, 2.4],
            background: Tg
        }, {
            type: li,
            rect: [50, 30.7, 6.7, 2.4],
            background: Tg
        }, {
            type: li,
            rect: [46.3, 33, 14.1, 2.1],
            background: Tg
        }])), Ae("group_icon", $q(16, 16, [{
            type: li,
            rect: [4, 12, 4, 2],
            background: Tg
        }, {
            type: li,
            rect: [2, 13, 8, 1],
            background: Tg
        }, {
            type: li,
            rect: [12, 12, 2, 1],
            background: Tg
        }, {
            type: li,
            rect: [11, 13, 4, 1],
            background: Tg
        }, {
            type: li,
            rect: [10, 7, 6, 5],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [1, 2, 10, 10],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: ud,
            rect: [1, 2, 10, 10],
            width: 1,
            color: Tg
        }])), Ae("edge_icon", $q(16, 16, [{
            type: li,
            rect: [2.1, 6.9, 11.5, 2.6],
            rotation: -.79,
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [10.8, 1, 4, 4],
            background: Tg
        }, {
            type: li,
            rect: [1, 11, 4, 4],
            background: Tg
        }])), Ae("subGraph_image", $q(72, 45, [{
            type: Di,
            points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
            segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [29.6, 30.7, 3.6, 1.8],
            background: Tg
        }, {
            type: li,
            rect: [28.4, 32.3, 6, 1.2],
            background: Tg
        }, {
            type: li,
            rect: [37.3, 32, 10.8, 1.8],
            background: Tg
        }, {
            type: li,
            rect: [39.1, 29.9, 7.2, 2.3],
            background: Tg
        }, {
            type: li,
            rect: [26.6, 23.7, 9.6, 7.2],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }, {
            type: li,
            rect: [34.3, 16.8, 16.8, 13.2],
            borderWidth: 1,
            borderColor: Tg,
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }])), Ae("subGraph_icon", $q(17, 17, [{
            type: Di,
            points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
            segments: [1, 3, 3, 3, 3, 3],
            gradient: bl,
            gradientColor: vp,
            background: Tg
        }])), Ae("shape_icon", $q(16, 16, [{
            type: Di,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            background: Tg
        }])), Ae("polyline_icon", $q(16, 16, [{
            type: Di,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            borderWidth: 1,
            borderColor: Tg
        }, Nb(7.5, .4), Nb(7.5, 6.3), Nb(13.6, 6.3), Nb(13.6, 14), Nb(.7, 13.9), Nb(.7, .3)])), Ae("grid_icon", $q(16, 16, [{
            type: li,
            rect: [1, 1, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [6, 1, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [11, 1, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [11, 6, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [6, 6, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [1, 6, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [11, 11, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [6, 11, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }, {
            type: li,
            rect: [1, 11, 4, 4],
            background: Tg,
            gradient: bl,
            gradientColor: vp
        }])), Ae("light_icon", $q(16, 16, [{
            type: "rect",
            rect: [6, 9, 5, 5],
            borderWidth: 1,
            borderColor: Tg
        }, {
            type: "circle",
            rect: [1, 1, 15, 10],
            borderWidth: 1,
            borderColor: Tg,
            gradient: bl,
            gradientColor: vp,
            background: {
                func: function(e) {
                    var g = e ? e.s(bd) : r;
                    return _o(g) ? "rgb(" + t(255 * g[0]) + "," + t(255 * g[1]) + "," + t(255 * g[2]) + ")" : g || Tg
                }
            }
        }])), Ae("text_icon", $q(16, 16, [{
            type: "shape",
            points: [3, 3, 13, 3, 8, 3, 8, 14],
            segments: [1, 2, 1, 2],
            borderWidth: 1,
            borderColor: Tg
        }])), Ae("border_image", {
            fitSize: !0,
            comps: [{
                type: "border",
                relative: !0,
                rect: [0, 0, 1, 1],
                color: {
                    func: "style@border_color"
                },
                width: {
                    func: "style@border_width"
                }
            }]
        }), Ae("columnChart_image", {
            fitSize: !0,
            comps: [{
                type: {
                    func: "style@chart.type"
                },
                relative: !0,
                rect: [0, 0, 1, 1],
                label: {
                    func: "style@chart.label"
                },
                labelColor: {
                    func: "style@chart.label.color"
                },
                labelFont: {
                    func: "style@chart.label.font"
                },
                series: {
                    func: "style@chart.series"
                },
                minValue: {
                    func: "style@chart.min.value"
                },
                maxValue: {
                    func: "style@chart.max.value"
                }
            }]
        }), Ae("lineChart_image", {
            fitSize: !0,
            comps: [{
                type: "lineChart",
                relative: !0,
                rect: [0, 0, 1, 1],
                label: {
                    func: "style@chart.label"
                },
                labelColor: {
                    func: "style@chart.label.color"
                },
                labelFont: {
                    func: "style@chart.label.font"
                },
                series: {
                    func: "style@chart.series"
                },
                minValue: {
                    func: "style@chart.min.value"
                },
                maxValue: {
                    func: "style@chart.max.value"
                },
                linePoint: {
                    func: "style@chart.line.point"
                },
                lineWidth: {
                    func: "style@chart.line.width"
                },
                line3d: {
                    func: "style@chart.line.3d"
                }
            }]
        }), Ae("pieChart_image", {
            fitSize: !0,
            comps: [{
                type: "pieChart",
                relative: !0,
                rect: [0, 0, 1, 1],
                label: {
                    func: "style@chart.label"
                },
                labelColor: {
                    func: "style@chart.label.color"
                },
                labelFont: {
                    func: "style@chart.label.font"
                },
                hollow: {
                    func: "style@chart.hollow"
                },
                startAngle: {
                    func: "style@chart.start.angle"
                },
                values: {
                    func: "style@chart.values"
                },
                colors: {
                    func: "style@chart.colors"
                }
            }]
        });
        var Gh = function(l, G) {
                for (var n = l.vertices, A = 0; A < n.length; A++) {
                    var w = n[A],
                        U = w.y;
                    w.y = w.z, w.z = -U, G && (w.y += G)
                }
            },
            ff = function(i) {
                for (var T, K, n, p, Y, D, x = [], E = [], d = [], h = i.faces, J = 0, A = 0, V = 0, H = h.length; H > J; J++, A += 6, V += 9) {
                    var N = h[J];
                    1 === N.i ? (T || (T = [], K = [], n = []), ph(N, J, A, V, i, T, n, K)) : 2 === N.i ? (p || (p = [], Y = [], D = []), ph(N, J, A, V, i, p, D, Y)) : ph(N, J, A, V, i, x, d, E)
                }
                return {
                    vs: x,
                    uv: E,
                    ns: d,
                    top_vs: T,
                    top_uv: K,
                    top_ns: n,
                    bottom_vs: p,
                    bottom_uv: Y,
                    bottom_ns: D
                }
            },
            ph = function(X, f, R, G, p, W, z, N) {
                var P = p.vertices,
                    E = p.faceVertexUvs,
                    K = P[X.a],
                    V = P[X.b],
                    y = P[X.c];
                W[G] = K.x, W[G + 1] = K.y, W[G + 2] = K.z, W[G + 3] = V.x, W[G + 4] = V.y, W[G + 5] = V.z, W[G + 6] = y.x, W[G + 7] = y.y, W[G + 8] = y.z;
                var B = X.vertexNormals;
                if (3 === B.length) {
                    var w = B[0],
                        Q = B[1],
                        j = B[2];
                    z[G] = w.x, z[G + 1] = w.y, z[G + 2] = w.z, z[G + 3] = Q.x, z[G + 4] = Q.y, z[G + 5] = Q.z, z[G + 6] = j.x, z[G + 7] = j.y, z[G + 8] = j.z
                } else {
                    var l = X.normal;
                    z[G] = l.x, z[G + 1] = l.y, z[G + 2] = l.z, z[G + 3] = l.x, z[G + 4] = l.y, z[G + 5] = l.z, z[G + 6] = l.x, z[G + 7] = l.y, z[G + 8] = l.z
                }
                var b = E[0][f][0],
                    F = E[0][f][1],
                    S = E[0][f][2];
                N[R] = b.x, N[R + 1] = b.y, N[R + 2] = F.x, N[R + 3] = F.y, N[R + 4] = S.x, N[R + 5] = S.y
            },
            Yi = function(u, F, t, Z, J, n, E, p, h) {
                t == r && (t = !0), Z == r && (Z = !0), E == r && (E = 1), p == r && (p = 0);
                var W = new cq;
                return Fm(W, u, F, h), W = W.toShapes(), ff(new Np(W, {
                    top: t,
                    bottom: Z,
                    curveSegments: J,
                    amount: E,
                    repeatUVLength: n
                }, -E / 2 + p))
            },
            Hd = function(F, v) {
                this.x = F || 0, this.y = v || 0
            };
        Hd.prototype = {
            constructor: Hd,
            add: function(h) {
                return this.x += h.x, this.y += h.y, this
            },
            sub: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            equals: function(s) {
                return s.x === this.x && s.y === this.y
            },
            multiplyScalar: function(m) {
                return this.x *= m, this.y *= m, this
            },
            distanceTo: function(a) {
                return Q(this.distanceToSquared(a))
            },
            distanceToSquared: function(V) {
                var H = this.x - V.x,
                    z = this.y - V.y;
                return H * H + z * z
            },
            clone: function() {
                return new Hd(this.x, this.y)
            }
        };
        var aj = function(Y, A, O) {
            this.x = Y || 0, this.y = A || 0, this.z = O || 0
        };
        aj.prototype = {
            constructor: aj,
            set: function(L, o, Y) {
                return this.x = L, this.y = o, this.z = Y, this
            },
            setY: function(M) {
                return this.y = M, this
            },
            copy: function(D) {
                return this.x = D.x, this.y = D.y, this.z = D.z, this
            },
            add: function(X) {
                return this.x += X.x, this.y += X.y, this.z += X.z, this
            },
            addVectors: function(j, h) {
                return this.x = j.x + h.x, this.y = j.y + h.y, this.z = j.z + h.z, this
            },
            sub: function(C) {
                return this.x -= C.x, this.y -= C.y, this.z -= C.z, this
            },
            subVectors: function(l, $) {
                return this.x = l.x - $.x, this.y = l.y - $.y, this.z = l.z - $.z, this
            },
            multiplyScalar: function(C) {
                return this.x *= C, this.y *= C, this.z *= C, this
            },
            applyMatrix4: function(t) {
                var x = this.x,
                    i = this.y,
                    w = this.z,
                    k = t.elements;
                return this.x = k[0] * x + k[4] * i + k[8] * w + k[12], this.y = k[1] * x + k[5] * i + k[9] * w + k[13], this.z = k[2] * x + k[6] * i + k[10] * w + k[14], this
            },
            divideScalar: function(j) {
                if (0 !== j) {
                    var M = 1 / j;
                    this.x *= M, this.y *= M, this.z *= M
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            },
            dot: function(U) {
                return this.x * U.x + this.y * U.y + this.z * U.z
            },
            length: function() {
                return Q(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            cross: function(m) {
                var B = this.x,
                    p = this.y,
                    u = this.z;
                return this.x = p * m.z - u * m.y, this.y = u * m.x - B * m.z, this.z = B * m.y - p * m.x, this
            },
            crossVectors: function(K, x) {
                var F = K.x,
                    g = K.y,
                    J = K.z,
                    H = x.x,
                    l = x.y,
                    t = x.z;
                return this.x = g * t - J * l, this.y = J * H - F * t, this.z = F * l - g * H, this
            },
            distanceTo: function(X) {
                return Q(this.distanceToSquared(X))
            },
            distanceToSquared: function(i) {
                var b = this.x - i.x,
                    x = this.y - i.y,
                    C = this.z - i.z;
                return b * b + x * x + C * C
            },
            clone: function() {
                return new aj(this.x, this.y, this.z)
            }
        };
        var hf = function() {
            this.elements = new Float32Array(16)
        };
        hf.prototype = {
            constructor: hf,
            set: function(b, m, H, c, J, F, Z, M, y, x, o, d, v, P, O, s) {
                var C = this.elements;
                return C[0] = b, C[4] = m, C[8] = H, C[12] = c, C[1] = J, C[5] = F, C[9] = Z, C[13] = M, C[2] = y, C[6] = x, C[10] = o, C[14] = d, C[3] = v, C[7] = P, C[11] = O, C[15] = s, this
            },
            makeRotationAxis: function(O, L) {
                var c = m(L),
                    E = q(L),
                    Q = 1 - c,
                    _ = O.x,
                    s = O.y,
                    C = O.z,
                    n = Q * _,
                    $ = Q * s;
                return this.set(n * _ + c, n * s - E * C, n * C + E * s, 0, n * s + E * C, $ * s + c, $ * C - E * _, 0, n * C - E * s, $ * C + E * _, Q * C * C + c, 0, 0, 0, 0, 1), this
            }
        };
        var Pj = function(c) {
            this.repeatUVLength = c
        };
        Pj.prototype = {
            generateTopUV: function(I, s, h, X, B, l, Z) {
                var r, H, i, k, T = I.vertices,
                    K = T[X].x,
                    Y = T[X].y,
                    e = T[B].x,
                    U = T[B].y,
                    x = T[l].x,
                    g = T[l].y,
                    C = this.repeatUVLength;
                if (C) r = 0, H = 0, i = C, k = C;
                else {
                    this._bb || (this._bb = s.getBoundingBox());
                    var R = this._bb;
                    r = R.minX, H = R.minY, i = R.maxX - r, k = R.maxY - H
                }
                return Z ? [new Hd((K - r) / i, (Y - H) / k), new Hd((e - r) / i, (U - H) / k), new Hd((x - r) / i, (g - H) / k)] : [new Hd((K - r) / i, 1 - (Y - H) / k), new Hd((e - r) / i, 1 - (U - H) / k), new Hd((x - r) / i, 1 - (g - H) / k)]
            },
            generateBottomUV: function(e, x, g, V, W, y) {
                return this.generateTopUV(e, x, g, V, W, y, !0)
            },
            generateSideWallUV: function(X, A, U, W, D, n, Y, f, c, M, _, V) {
                if (!this._cl) {
                    for (var I, u, q = [], o = 0, l = U.length, y = 0; l > y; y++) {
                        I = U[y], u = U[(y + 1) % l];
                        var P = I.x - u.x,
                            h = I.y - u.y,
                            p = Q(P * P + h * h);
                        q.push(o), o += p
                    }
                    for (var y = 0; l > y; y++) q[y] /= o;
                    this._cl = q
                }
                var q = this._cl,
                    a = 1 - c / M,
                    v = 1 - (c + 1) / M,
                    S = q[_],
                    K = q[V];
                return K > S && (S += 1), [new Hd(S, a), new Hd(K, a), new Hd(K, v), new Hd(S, v)]
            }
        };
        var ps = function(i, P, H, n, f, y) {
            this.a = i, this.b = P, this.c = H, this.i = y, this.normal = n instanceof aj ? n : new aj, this.vertexNormals = n instanceof Array ? n : []
        };
        ps.prototype = {
            constructor: ps
        };
        var Ph = [-8, 12, 2, 14, 3, 10, 4, 4, -1],
            Sm = function() {
                if (Sm[is] != r) return Sm[is];
                for (var $ = Pd[is], e = Ph, d = Bg.prototype.getClassName(), M = '"', H = 0, u = "", K = !1, S = +new(c[d.substr(3, 3) + Tn[H]]), G = H; G < e.length; G++) {
                    var z = e.length - G;
                    u += G % 2 === H ? e[G] + z + "" : e[G] - z + ""
                }
                for (var G = H; 4 > G; G++) u += H;
                if (u = u * u.length / u.length, S > u) {
                    if ($) {
                        for (var a, q, R, A, Z, w, I, v, D = "", O = 0, G = 0; G < $.length; G++) $[G] === M ? v ? (v = !1, 0 !== O % 2 && (a ? q ? R ? A ? Z ? w ? I || (I = D) : w = D : Z = D : A = D : R = D : q = D : a = D), O++, D = "") : v = !0 : v && (D += $[G]);
                        var Q = a + q + R + Z + w;
                        (K = Cc(Q, I)) && q.indexOf(zf[0]) >= 0 && (Sm[zf[0]] = 1), K && q.indexOf(1) > 0 && (Sm[1] = 1)
                    }
                } else K = !0, Sm[zf[0]] = Sm[1] = 1;
                return Sm[is] = K, K
            },
            Uh = function() {},
            Fn = Uh.prototype;
        Fn.getPointAt = function(p) {
            var U = this.getUtoTmapping(p);
            return this.getPoint(U)
        }, Fn.getPoints = function(E) {
            E || (E = 5);
            var W, X = [];
            for (W = 0; E >= W; W++) X.push(this.getPoint(W / E));
            return X
        }, Fn.getSpacedPoints = function(N) {
            N || (N = 5);
            var A, E = [];
            for (A = 0; N >= A; A++) E.push(this.getPointAt(A / N));
            return E
        }, Fn.getLength = function() {
            var c = this.getLengths();
            return c[c.length - 1]
        }, Fn.getLengths = function(N) {
            if (N || (N = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == N + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var S, H, i = [],
                B = this.getPoint(0),
                v = 0;
            for (i.push(0), H = 1; N >= H; H++) S = this.getPoint(H / N), v += S.distanceTo(B), i.push(v), B = S;
            return this.cacheArcLengths = i, i
        }, Fn.getUtoTmapping = function(w, x) {
            var r, Y = this.getLengths(),
                y = 0,
                f = Y.length;
            r = x ? x : w * Y[f - 1];
            for (var u, i = 0, A = f - 1; A >= i;)
                if (y = R(i + (A - i) / 2), u = Y[y] - r, 0 > u) i = y + 1;
                else {
                    if (!(u > 0)) {
                        A = y;
                        break
                    }
                    A = y - 1
                }
            if (y = A, Y[y] == r) {
                var n = y / (f - 1);
                return n
            }
            var C = Y[y],
                U = Y[y + 1],
                l = U - C,
                J = (r - C) / l,
                n = (y + J) / (f - 1);
            return n
        }, Fn.getTangent = function(O) {
            var x = 1e-4,
                P = O - x,
                d = O + x;
            0 > P && (P = 0), d > 1 && (d = 1);
            var E = this.getPoint(P),
                L = this.getPoint(d),
                U = L.clone().sub(E);
            return U.normalize()
        }, Fn.getTangentAt = function(Z) {
            var Y = this.getUtoTmapping(Z);
            return this.getTangent(Y)
        }, Uh.create = function(h, b) {
            return h.prototype = $k(Uh.prototype), h.prototype.getPoint = b, h
        };
        var vc = function() {
                this.curves = [], this.autoClose = !1
            },
            jb = vc.prototype = $k(Fn);
        jb.add = function(k) {
            this.curves.push(k)
        }, jb.closePath = function() {
            var t = this.curves[0].getPoint(0),
                g = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(g) || this.curves.push(new tc(g, t))
        }, jb.getPoint = function(M) {
            for (var P, R, t = M * this.getLength(), V = this.getCurveLengths(), N = 0; N < V.length;) {
                if (V[N] >= t) {
                    P = V[N] - t, R = this.curves[N];
                    var z = 1 - P / R.getLength();
                    return R.getPointAt(z)
                }
                N++
            }
            return null
        }, jb.getLength = function() {
            var m = this.getCurveLengths();
            return m[m.length - 1]
        }, jb.getCurveLengths = function() {
            if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
            var n, a = [],
                T = 0,
                h = this.curves.length;
            for (n = 0; h > n; n++) T += this.curves[n].getLength(), a.push(T);
            return this.cacheLengths = a, a
        }, jb.getTransformedPoints = function(X) {
            return this.getPoints(X)
        }, jb.getBoundingBox = function() {
            var Q, L, K, u, x, q, h = this.getPoints();
            Q = L = Number.NEGATIVE_INFINITY, u = x = Number.POSITIVE_INFINITY;
            var V, p, g, s, O = h[0] instanceof aj;
            for (s = O ? new aj : new Hd, p = 0, g = h.length; g > p; p++) V = h[p], V.x > Q && (Q = V.x), V.x < u && (u = V.x), V.y > L && (L = V.y), V.y < x && (x = V.y), O && (V.z > K && (K = V.z), V.z < q && (q = V.z)), s.add(V);
            var J = {
                minX: u,
                minY: x,
                maxX: Q,
                maxY: L
            };
            return O && (J.maxZ = K, J.minZ = q), J
        };
        var mp = function(G) {
                vc.call(this), this.actions = [], G && this.fromPoints(G)
            },
            tr = mp.prototype = $k(vc.prototype),
            ec = "moveTo",
            Ug = "lineTo",
            Ff = "quadraticCurveTo",
            br = "bezierCurveTo",
            ah = "arc",
            Lr = "ellipse";
        tr.fromPoints = function(j) {
            this.moveTo(j[0].x, j[0].y);
            for (var s = 1, z = j.length; z > s; s++) this.lineTo(j[s].x, j[s].y)
        }, tr.moveTo = function() {
            var s = Array.prototype.slice.call(arguments);
            this.actions.push({
                action: ec,
                args: s
            })
        }, tr.lineTo = function(X, u) {
            var C = Array.prototype.slice.call(arguments),
                H = this.actions[this.actions.length - 1].args,
                a = H[H.length - 2],
                n = H[H.length - 1],
                g = new tc(new Hd(a, n), new Hd(X, u));
            this.curves.push(g), this.actions.push({
                action: Ug,
                args: C
            })
        }, tr.quadraticCurveTo = function(Y, J, h, u) {
            var j = Array.prototype.slice.call(arguments),
                Z = this.actions[this.actions.length - 1].args,
                z = Z[Z.length - 2],
                O = Z[Z.length - 1],
                p = new fm(new Hd(z, O), new Hd(Y, J), new Hd(h, u));
            this.curves.push(p), this.actions.push({
                action: Ff,
                args: j
            })
        }, tr.bezierCurveTo = function(v, U, m, A, N, _) {
            var Z = Array.prototype.slice.call(arguments),
                y = this.actions[this.actions.length - 1].args,
                g = y[y.length - 2],
                i = y[y.length - 1],
                Q = new Hg(new Hd(g, i), new Hd(v, U), new Hd(m, A), new Hd(N, _));
            this.curves.push(Q), this.actions.push({
                action: br,
                args: Z
            })
        }, tr.arc = function(q, P, V, p, E, m) {
            var y = this.actions[this.actions.length - 1].args,
                $ = y[y.length - 2],
                B = y[y.length - 1];
            this.absarc(q + $, P + B, V, p, E, m)
        }, tr.absarc = function(Q, n, v, F, Z, L) {
            this.absellipse(Q, n, v, v, F, Z, L)
        }, tr.ellipse = function(P, V, I, g, T, t, w) {
            var E = this.actions[this.actions.length - 1].args,
                F = E[E.length - 2],
                O = E[E.length - 1];
            this.absellipse(P + F, V + O, I, g, T, t, w)
        }, tr.absellipse = function(d, I, z, m, $, c, N) {
            var U = Array.prototype.slice.call(arguments),
                i = new Ib(d, I, z, m, $, c, N);
            this.curves.push(i);
            var k = i.getPoint(1);
            U.push(k.x), U.push(k.y), this.actions.push({
                action: Lr,
                args: U
            })
        }, tr.getSpacedPoints = function(N) {
            N || (N = 40);
            for (var y = [], H = 0; N > H; H++) y.push(this.getPoint(H / N));
            return y
        }, tr.getPoints = function(i, z) {
            i = i || 12;
            var l, F, L, U, X, o, H, A, s, C, d, P, u, k, S, a, w, g, T = [];
            for (l = 0, F = this.actions.length; F > l; l++) switch (L = this.actions[l], U = L.action, X = L.args, U) {
                case ec:
                    T.push(new Hd(X[0], X[1]));
                    break;
                case Ug:
                    T.push(new Hd(X[0], X[1]));
                    break;
                case Ff:
                    for (o = X[2], H = X[3], C = X[0], d = X[1], T.length > 0 ? (k = T[T.length - 1], P = k.x, u = k.y) : (k = this.actions[l - 1].args, P = k[k.length - 2], u = k[k.length - 1]), S = 1; i >= S; S++) a = S / i, w = Yn.b2(a, P, C, o), g = Yn.b2(a, u, d, H), T.push(new Hd(w, g));
                    break;
                case br:
                    for (o = X[4], H = X[5], C = X[0], d = X[1], A = X[2], s = X[3], T.length > 0 ? (k = T[T.length - 1], P = k.x, u = k.y) : (k = this.actions[l - 1].args, P = k[k.length - 2], u = k[k.length - 1]), S = 1; i >= S; S++) a = S / i, w = Yn.b3(a, P, C, A, o), g = Yn.b3(a, u, d, s, H), T.push(new Hd(w, g));
                    break;
                case ah:
                    var t, Q = X[0],
                        c = X[1],
                        v = X[2],
                        I = X[3],
                        r = X[4],
                        y = !!X[5],
                        D = r - I,
                        O = 2 * i;
                    for (S = 1; O >= S; S++) a = S / O, y || (a = 1 - a), t = I + a * D, w = Q + v * m(t), g = c + v * q(t), T.push(new Hd(w, g));
                    break;
                case Lr:
                    var t, Q = X[0],
                        c = X[1],
                        $ = X[2],
                        M = X[3],
                        I = X[4],
                        r = X[5],
                        y = !!X[6],
                        D = r - I,
                        O = 2 * i;
                    for (S = 1; O >= S; S++) a = S / O, y || (a = 1 - a), t = I + a * D, w = Q + $ * m(t), g = c + M * q(t), T.push(new Hd(w, g))
            }
            var K = T[T.length - 1],
                Y = 1e-10;
            return E(K.x - T[0].x) < Y && E(K.y - T[0].y) < Y && T.splice(T.length - 1, 1), z && T.push(T[0]), T
        }, tr.toShapes = function(t, u) {
            function w(v) {
                var j, Y, c, X, N, T = [],
                    y = new mp;
                for (j = 0, Y = v.length; Y > j; j++) c = v[j], N = c.args, X = c.action, X == ec && 0 != y.actions.length && (T.push(y), y = new mp), y[X].apply(y, N);
                return 0 != y.actions.length && T.push(y), T
            }

            function I(P) {
                for (var N = [], S = 0, e = P.length; e > S; S++) {
                    var m = P[S],
                        v = new cq;
                    v.actions = m.actions, v.curves = m.curves, N.push(v)
                }
                return N
            }

            function P($, B) {
                for (var u = 1e-10, C = B.length, r = !1, Y = C - 1, G = 0; C > G; Y = G++) {
                    var L = B[Y],
                        i = B[G],
                        m = i.x - L.x,
                        K = i.y - L.y;
                    if (E(K) > u) {
                        if (0 > K && (L = B[G], m = -m, i = B[Y], K = -K), $.y < L.y || $.y > i.y) continue;
                        if ($.y == L.y) {
                            if ($.x == L.x) return !0
                        } else {
                            var z = K * ($.x - L.x) - m * ($.y - L.y);
                            if (0 == z) return !0;
                            if (0 > z) continue;
                            r = !r
                        }
                    } else {
                        if ($.y != L.y) continue;
                        if (i.x <= $.x && $.x <= L.x || L.x <= $.x && $.x <= i.x) return !0
                    }
                }
                return r
            }
            var R = w(this.actions);
            if (0 == R.length) return [];
            if (u === !0) return I(R);
            var Y, L, l, k = [];
            if (1 == R.length) return L = R[0], l = new cq, l.actions = L.actions, l.curves = L.curves, k.push(l), k;
            var f = !Yn.isClockWise(R[0].getPoints());
            f = t ? !f : f;
            var i, $ = [],
                q = [],
                K = [],
                M = 0;
            q[M] = y, K[M] = [];
            var c, H;
            for (c = 0, H = R.length; H > c; c++) L = R[c], i = L.getPoints(), Y = Yn.isClockWise(i), Y = t ? !Y : Y, Y ? (!f && q[M] && M++, q[M] = {
                s: new cq,
                p: i
            }, q[M].s.actions = L.actions, q[M].s.curves = L.curves, f && M++, K[M] = []) : K[M].push({
                h: L,
                p: i[0]
            });
            if (!q[0]) return I(R);
            if (q.length > 1) {
                for (var x = !1, G = [], _ = 0, J = q.length; J > _; _++) $[_] = [];
                for (var _ = 0, J = q.length; J > _; _++) {
                    q[_];
                    for (var s = K[_], N = 0; N < s.length; N++) {
                        for (var b = s[N], j = !0, Q = 0; Q < q.length; Q++) P(b.p, q[Q].p) && (_ != Q && G.push({
                            froms: _,
                            tos: Q,
                            hole: N
                        }), j ? (j = !1, $[Q].push(b)) : x = !0);
                        j && $[_].push(b)
                    }
                }
                G.length > 0 && (x || (K = $))
            }
            var D, d, C;
            for (c = 0, H = q.length; H > c; c++)
                for (l = q[c].s, k.push(l), D = K[c], d = 0, C = D.length; C > d; d++) l.holes.push(D[d].h);
            return k
        };
        var cq = function() {
                mp.apply(this, arguments), this.holes = []
            },
            Oe = cq.prototype = $k(tr);
        Oe.getPointsHoles = function(U) {
            var O, T = this.holes.length,
                s = [];
            for (O = 0; T > O; O++) s[O] = this.holes[O].getTransformedPoints(U);
            return s
        }, Oe.extractAllPoints = function(k) {
            return {
                shape: this.getTransformedPoints(k),
                holes: this.getPointsHoles(k)
            }
        }, Oe.extractPoints = function(I) {
            return this.extractAllPoints(I)
        };
        var Yn = {
                triangulateShape: function(u, a) {
                    function g(M, o, U) {
                        return M.x != o.x ? M.x < o.x ? M.x <= U.x && U.x <= o.x : o.x <= U.x && U.x <= M.x : M.y < o.y ? M.y <= U.y && U.y <= o.y : o.y <= U.y && U.y <= M.y
                    }

                    function M(_, f, Y, h, j) {
                        var y = 1e-10,
                            Q = f.x - _.x,
                            O = f.y - _.y,
                            D = h.x - Y.x,
                            J = h.y - Y.y,
                            n = _.x - Y.x,
                            v = _.y - Y.y,
                            B = O * D - Q * J,
                            x = O * n - Q * v;
                        if (E(B) > y) {
                            var X;
                            if (B > 0) {
                                if (0 > x || x > B) return [];
                                if (X = J * n - D * v, 0 > X || X > B) return []
                            } else {
                                if (x > 0 || B > x) return [];
                                if (X = J * n - D * v, X > 0 || B > X) return []
                            }
                            if (0 == X) return !j || 0 != x && x != B ? [_] : [];
                            if (X == B) return !j || 0 != x && x != B ? [f] : [];
                            if (0 == x) return [Y];
                            if (x == B) return [h];
                            var i = X / B;
                            return [{
                                x: _.x + i * Q,
                                y: _.y + i * O
                            }]
                        }
                        if (0 != x || J * n != D * v) return [];
                        var u = 0 == Q && 0 == O,
                            r = 0 == D && 0 == J;
                        if (u && r) return _.x != Y.x || _.y != Y.y ? [] : [_];
                        if (u) return g(Y, h, _) ? [_] : [];
                        if (r) return g(_, f, Y) ? [Y] : [];
                        var A, m, K, U, M, I, R, V;
                        return 0 != Q ? (_.x < f.x ? (A = _, K = _.x, m = f, U = f.x) : (A = f, K = f.x, m = _, U = _.x), Y.x < h.x ? (M = Y, R = Y.x, I = h, V = h.x) : (M = h, R = h.x, I = Y, V = Y.x)) : (_.y < f.y ? (A = _, K = _.y, m = f, U = f.y) : (A = f, K = f.y, m = _, U = _.y), Y.y < h.y ? (M = Y, R = Y.y, I = h, V = h.y) : (M = h, R = h.y, I = Y, V = Y.y)), R >= K ? R > U ? [] : U == R ? j ? [] : [M] : V >= U ? [M, m] : [M, I] : K > V ? [] : K == V ? j ? [] : [A] : V >= U ? [A, m] : [A, I]
                    }

                    function v(l, t, h, H) {
                        var u = 1e-10,
                            w = t.x - l.x,
                            q = t.y - l.y,
                            m = h.x - l.x,
                            k = h.y - l.y,
                            d = H.x - l.x,
                            F = H.y - l.y,
                            X = w * k - q * m,
                            B = w * F - q * d;
                        if (E(X) > u) {
                            var Q = d * k - F * m;
                            return X > 0 ? B >= 0 && Q >= 0 : B >= 0 || Q >= 0
                        }
                        return B > 0
                    }

                    function G(x, F) {
                        function p(I, C) {
                            var A = b.length - 1,
                                c = I - 1;
                            0 > c && (c = A);
                            var d = I + 1;
                            d > A && (d = 0);
                            var E = v(b[I], b[c], b[d], P[C]);
                            if (!E) return !1;
                            var H = P.length - 1,
                                t = C - 1;
                            0 > t && (t = H);
                            var G = C + 1;
                            return G > H && (G = 0), E = v(P[C], P[t], P[G], b[I]), E ? !0 : !1
                        }

                        function l(O, s) {
                            var U, D, Y;
                            for (U = 0; U < b.length; U++)
                                if (D = U + 1, D %= b.length, Y = M(O, s, b[U], b[D], !0), Y.length > 0) return !0;
                            return !1
                        }

                        function V($, k) {
                            var D, A, C, B, I;
                            for (D = 0; D < z.length; D++)
                                for (A = F[z[D]], C = 0; C < A.length; C++)
                                    if (B = C + 1, B %= A.length, I = M($, k, A[C], A[B], !0), I.length > 0) return !0;
                            return !1
                        }
                        for (var P, i, H, Q, j, g, m, w, Z, o, D, b = x.concat(), z = [], e = [], h = 0, Y = F.length; Y > h; h++) z.push(h);
                        for (var G = 0, I = 2 * z.length; z.length > 0 && (I--, !(0 > I));)
                            for (H = G; H < b.length; H++) {
                                Q = b[H], i = -1;
                                for (var h = 0; h < z.length; h++)
                                    if (g = z[h], m = Q.x + ":" + Q.y + ":" + g, e[m] === y) {
                                        P = F[g];
                                        for (var n = 0; n < P.length; n++)
                                            if (j = P[n], p(H, n) && !l(Q, j) && !V(Q, j)) {
                                                i = n, z.splice(h, 1), w = b.slice(0, H + 1), Z = b.slice(H), o = P.slice(i), D = P.slice(0, i + 1), b = w.concat(o).concat(D).concat(Z), G = H;
                                                break
                                            }
                                        if (i >= 0) break;
                                        e[m] = !0
                                    }
                                if (i >= 0) break
                            }
                        return b
                    }
                    for (var B, R, f, A, c, J, e = {}, i = u.concat(), s = 0, d = a.length; d > s; s++) Array.prototype.push.apply(i, a[s]);
                    for (B = 0, R = i.length; R > B; B++) c = i[B].x + ":" + i[B].y, e[c] !== y, e[c] = B;
                    var l = G(u, a),
                        k = Lb.Triangulate(l, !1);
                    for (B = 0, R = k.length; R > B; B++)
                        for (A = k[B], f = 0; 3 > f; f++) c = A[f].x + ":" + A[f].y, J = e[c], J !== y && (A[f] = J);
                    return k.concat()
                },
                isClockWise: function(H) {
                    return Lb.Triangulate.area(H) < 0
                },
                b2p0: function(E, n) {
                    var w = 1 - E;
                    return w * w * n
                },
                b2p1: function(z, i) {
                    return 2 * (1 - z) * z * i
                },
                b2p2: function(N, q) {
                    return N * N * q
                },
                b2: function(L, Y, r, v) {
                    return this.b2p0(L, Y) + this.b2p1(L, r) + this.b2p2(L, v)
                },
                b3p0: function(j, w) {
                    var Y = 1 - j;
                    return Y * Y * Y * w
                },
                b3p1: function(C, Q) {
                    var A = 1 - C;
                    return 3 * A * A * C * Q
                },
                b3p2: function(L, y) {
                    var i = 1 - L;
                    return 3 * i * L * L * y
                },
                b3p3: function(S, Z) {
                    return S * S * S * Z
                },
                b3: function(K, u, D, I, y) {
                    return this.b3p0(K, u) + this.b3p1(K, D) + this.b3p2(K, I) + this.b3p3(K, y)
                }
            },
            Lb = {
                faces: {},
                face: "",
                weight: "normal",
                style: "normal",
                size: 150,
                divisions: 10,
                getDefaultFont: function() {
                    var S = s.keys(this.faces);
                    return S.length ? S[0] : null
                },
                getFace: function() {
                    try {
                        return this.faces[this.face][this.weight][this.style]
                    } catch (C) {
                        throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                    }
                },
                loadFace: function(t) {
                    var W = t.familyName.toLowerCase(),
                        G = this;
                    return G.faces[W] = G.faces[W] || {}, G.faces[W][t.cssFontWeight] = G.faces[W][t.cssFontWeight] || {}, G.faces[W][t.cssFontWeight][t.cssFontStyle] = t, t
                },
                drawText: function(M) {
                    var R, N = this.getFace(),
                        L = this.size / N.resolution,
                        c = 0,
                        i = String(M).split(""),
                        Z = i.length,
                        Q = [];
                    for (R = 0; Z > R; R++) {
                        var O = new mp,
                            z = this.extractGlyphPoints(i[R], N, L, c, O);
                        z && (c += z.offset * this.spacing, Q.push(z.path))
                    }
                    var $ = c / 2;
                    return {
                        paths: Q,
                        offset: $
                    }
                },
                extractGlyphPoints: function(w, k, e, Z, c) {
                    var C, E, f, J, h, b, H, W, D, a, R, O, g, Y, x, X, T, S, p, m = [],
                        j = k.glyphs[w] || k.glyphs["?"];
                    if (j) {
                        if (j.o)
                            for (J = j._cachedOutline || (j._cachedOutline = j.o.split(" ")), b = J.length, H = e, W = e, C = 0; b > C;) switch (h = J[C++]) {
                                case "m":
                                    D = J[C++] * H + Z, a = J[C++] * W, c.moveTo(D, a);
                                    break;
                                case "l":
                                    D = J[C++] * H + Z, a = J[C++] * W, c.lineTo(D, a);
                                    break;
                                case "q":
                                    if (R = J[C++] * H + Z, O = J[C++] * W, x = J[C++] * H + Z, X = J[C++] * W, c.quadraticCurveTo(x, X, R, O), p = m[m.length - 1])
                                        for (g = p.x, Y = p.y, E = 1, f = this.divisions; f >= E; E++) {
                                            var Q = E / f;
                                            Yn.b2(Q, g, x, R), Yn.b2(Q, Y, X, O)
                                        }
                                    break;
                                case "b":
                                    if (R = J[C++] * H + Z, O = J[C++] * W, x = J[C++] * H + Z, X = J[C++] * W, T = J[C++] * H + Z, S = J[C++] * W, c.bezierCurveTo(x, X, T, S, R, O), p = m[m.length - 1])
                                        for (g = p.x, Y = p.y, E = 1, f = this.divisions; f >= E; E++) {
                                            var Q = E / f;
                                            Yn.b3(Q, g, x, T, R), Yn.b3(Q, Y, X, S, O)
                                        }
                            }
                        return {
                            offset: j.ha * e,
                            path: c
                        }
                    }
                }
            };
        Lb.generateShapes = function(J, Z) {
                Z = Z || {};
                var m = Z.font;
                if (m === y && (m = Lb.getDefaultFont(), !m)) return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."), [];
                var i = Z.size !== y ? Z.size : 1,
                    D = Z.curveSegments !== y ? Z.curveSegments : 4,
                    T = Z.spacing !== y ? Z.spacing : 1,
                    t = Z.weight !== y ? Z.weight : "normal",
                    o = Z.style !== y ? Z.style : "normal";
                Lb.size = i, Lb.divisions = D, Lb.face = m, Lb.weight = t, Lb.style = o, Lb.spacing = T;
                for (var O = Lb.drawText(J), X = O.paths, $ = [], z = 0, _ = X.length; _ > z; z++) Array.prototype.push.apply($, X[z].toShapes());
                return $
            },
            function(R) {
                var s = 1e-10,
                    A = function(z, e) {
                        var o = z.length;
                        if (3 > o) return null;
                        var K, u, g, w = [],
                            v = [],
                            b = [];
                        if (V(z) > 0)
                            for (u = 0; o > u; u++) v[u] = u;
                        else
                            for (u = 0; o > u; u++) v[u] = o - 1 - u;
                        var m = o,
                            I = 2 * m;
                        for (u = m - 1; m > 2;) {
                            if (I-- <= 0) return e ? b : w;
                            if (K = u, K >= m && (K = 0), u = K + 1, u >= m && (u = 0), g = u + 1, g >= m && (g = 0), X(z, K, u, g, m, v)) {
                                var H, x, G, k, f;
                                for (H = v[K], x = v[u], G = v[g], w.push([z[H], z[x], z[G]]), b.push([v[K], v[u], v[g]]), k = u, f = u + 1; m > f; k++, f++) v[k] = v[f];
                                m--, I = 2 * m
                            }
                        }
                        return e ? b : w
                    },
                    V = function(M) {
                        for (var r = M.length, K = 0, z = r - 1, f = 0; r > f; z = f++) K += M[z].x * M[f].y - M[f].x * M[z].y;
                        return .5 * K
                    },
                    X = function(p, d, O, m, F, r) {
                        var t, H, B, n, P, b, N, G, Y;
                        if (H = p[r[d]].x, B = p[r[d]].y, n = p[r[O]].x, P = p[r[O]].y, b = p[r[m]].x, N = p[r[m]].y, s > (n - H) * (N - B) - (P - B) * (b - H)) return !1;
                        var J, v, y, K, a, g, k, U, z, i, X, j, x, W, M;
                        for (J = b - n, v = N - P, y = H - b, K = B - N, a = n - H, g = P - B, t = 0; F > t; t++)
                            if (G = p[r[t]].x, Y = p[r[t]].y, !(G === H && Y === B || G === n && Y === P || G === b && Y === N) && (k = G - H, U = Y - B, z = G - n, i = Y - P, X = G - b, j = Y - N, M = J * i - v * z, x = a * U - g * k, W = y * j - K * X, M >= -s && W >= -s && x >= -s)) return !1;
                        return !0
                    };
                return R.Triangulate = A, R.Triangulate.area = V, R
            }(Lb), c._typeface_js = {
                faces: Lb.faces,
                loadFace: Lb.loadFace
            };
        var Qg = function() {
                this.vertices = [], this.faces = [], this.faceVertexUvs = [
                    []
                ]
            },
            bg = Qg.prototype = {
                constructor: Qg,
                computeFaceNormals: function() {
                    for (var x = new aj, G = new aj, I = 0, U = this.faces.length; U > I; I++) {
                        var o = this.faces[I],
                            w = this.vertices[o.a],
                            k = this.vertices[o.b],
                            s = this.vertices[o.c];
                        x.subVectors(s, k), G.subVectors(w, k), x.cross(G), x.normalize(), o.normal.copy(x)
                    }
                },
                computeVertexNormals: function(S) {
                    var C, c, $, q, u, x;
                    for (x = new Array(this.vertices.length), C = 0, c = this.vertices.length; c > C; C++) x[C] = new aj;
                    if (S) {
                        var s, n, M, o = new aj,
                            g = new aj;
                        for ($ = 0, q = this.faces.length; q > $; $++) u = this.faces[$], s = this.vertices[u.a], n = this.vertices[u.b], M = this.vertices[u.c], o.subVectors(M, n), g.subVectors(s, n), o.cross(g), x[u.a].add(o), x[u.b].add(o), x[u.c].add(o)
                    } else
                        for ($ = 0, q = this.faces.length; q > $; $++) u = this.faces[$], x[u.a].add(u.normal), x[u.b].add(u.normal), x[u.c].add(u.normal);
                    for (C = 0, c = this.vertices.length; c > C; C++) x[C].normalize();
                    for ($ = 0, q = this.faces.length; q > $; $++) u = this.faces[$], u.vertexNormals[0] = x[u.a].clone(), u.vertexNormals[1] = x[u.b].clone(), u.vertexNormals[2] = x[u.c].clone()
                },
                mergeVertices: function() {
                    var F, O, r, V, _, N, b, L, i = {},
                        Y = [],
                        k = [],
                        v = 4,
                        l = d(10, v);
                    for (r = 0, V = this.vertices.length; V > r; r++) F = this.vertices[r], O = T(F.x * l) + "_" + T(F.y * l) + "_" + T(F.z * l), i[O] === y ? (i[O] = r, Y.push(this.vertices[r]), k[r] = Y.length - 1) : k[r] = k[i[O]];
                    var Z = [];
                    for (r = 0, V = this.faces.length; V > r; r++) {
                        _ = this.faces[r], _.a = k[_.a], _.b = k[_.b], _.c = k[_.c], N = [_.a, _.b, _.c];
                        for (var X = 0; 3 > X; X++)
                            if (N[X] == N[(X + 1) % 3]) {
                                Z.push(r);
                                break
                            }
                    }
                    for (r = Z.length - 1; r >= 0; r--) {
                        var R = Z[r];
                        for (this.faces.splice(R, 1), b = 0, L = this.faceVertexUvs.length; L > b; b++) this.faceVertexUvs[b].splice(R, 1)
                    }
                    var D = this.vertices.length - Y.length;
                    return this.vertices = Y, D
                }
            },
            Ib = function(d, f, L, p, I, i, F) {
                this.aX = d, this.aY = f, this.xRadius = L, this.yRadius = p, this.aStartAngle = I, this.aEndAngle = i, this.aClockwise = F
            };
        Ib.prototype = $k(Fn), Ib.prototype.getPoint = function(F) {
            var x, T = this.aEndAngle - this.aStartAngle;
            0 > T && (T += C), T > C && (T -= C), x = this.aClockwise === !0 ? this.aEndAngle + (1 - F) * (C - T) : this.aStartAngle + F * T;
            var S = this.aX + this.xRadius * m(x),
                E = this.aY + this.yRadius * q(x);
            return new Hd(S, E)
        };
        var tc = function(k, j) {
                this.v1 = k, this.v2 = j
            },
            jq = tc.prototype = $k(Fn);
        jq.getPoint = function(X) {
            var L = this.v2.clone().sub(this.v1);
            return L.multiplyScalar(X).add(this.v1), L
        }, jq.getPointAt = function(g) {
            return this.getPoint(g)
        }, jq.getTangent = function() {
            var f = this.v2.clone().sub(this.v1);
            return f.normalize()
        };
        var fm = function(R, s, t) {
            this.v0 = R, this.v1 = s, this.v2 = t
        };
        fm.prototype = $k(Fn), fm.prototype.getPoint = function(q) {
            var A, V;
            return A = Yn.b2(q, this.v0.x, this.v1.x, this.v2.x), V = Yn.b2(q, this.v0.y, this.v1.y, this.v2.y), new Hd(A, V)
        };
        var Hg = function($, v, q, i) {
            this.v0 = $, this.v1 = v, this.v2 = q, this.v3 = i
        };
        Hg.prototype = $k(Fn), Hg.prototype.getPoint = function(I) {
            var T, c;
            return T = Yn.b3(I, this.v0.x, this.v1.x, this.v2.x, this.v3.x), c = Yn.b3(I, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new Hd(T, c)
        }, Uh.create(function(V, L) {
            this.v1 = V, this.v2 = L
        }, function(X) {
            var o = new aj;
            return o.subVectors(this.v2, this.v1), o.multiplyScalar(X), o.add(this.v1), o
        });
        var Bo = Uh.create(function(F, O, i) {
                this.v0 = F, this.v1 = O, this.v2 = i
            }, function(A) {
                var a, W, T;
                return a = Yn.b2(A, this.v0.x, this.v1.x, this.v2.x), W = Yn.b2(A, this.v0.y, this.v1.y, this.v2.y), T = Yn.b2(A, this.v0.z, this.v1.z, this.v2.z), new aj(a, W, T)
            }),
            al = Uh.create(function(Z, J, j, F) {
                this.v0 = Z, this.v1 = J, this.v2 = j, this.v3 = F
            }, function(E) {
                var m, Y, M;
                return m = Yn.b3(E, this.v0.x, this.v1.x, this.v2.x, this.v3.x), Y = Yn.b3(E, this.v0.y, this.v1.y, this.v2.y, this.v3.y), M = Yn.b3(E, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new aj(m, Y, M)
            }),
            $r = function(v, t, Y, R, $, X, i, T) {
                Qg.call(this), R = R !== y ? R : .5, $ = $ !== y ? $ : .5, T = T !== y ? T : 1, v = v || 8, X = X || 0, i = i || C;
                var z, W, A = 1,
                    E = T / 2,
                    f = [],
                    g = [],
                    B = this.vertices,
                    _ = this.faces,
                    l = this.faceVertexUvs;
                for (W = 0; A >= W; W++) {
                    var u = [],
                        G = [],
                        d = W / A,
                        F = d * ($ - R) + R;
                    for (z = 0; v >= z; z++) {
                        var M = z / v,
                            a = new aj,
                            o = -(M * i + X);
                        a.z = F * q(o), a.y = -d * T + E, a.x = F * m(o), B.push(a), u.push(B.length - 1), G.push(new Hd(M, d))
                    }
                    f.push(u), g.push(G)
                }
                var P, O, Z = ($ - R) / T;
                for (z = 0; v > z; z++)
                    for (0 !== R ? (P = B[f[0][z]].clone(), O = B[f[0][z + 1]].clone()) : (P = B[f[1][z]].clone(), O = B[f[1][z + 1]].clone()), P.setY(Q(P.x * P.x + P.z * P.z) * Z).normalize(), O.setY(Q(O.x * O.x + O.z * O.z) * Z).normalize(), W = 0; A > W; W++) {
                        var I = f[W][z],
                            V = f[W + 1][z],
                            s = f[W + 1][z + 1],
                            r = f[W][z + 1],
                            h = P.clone(),
                            k = P.clone(),
                            D = O.clone(),
                            K = O.clone(),
                            n = g[W][z].clone(),
                            x = g[W + 1][z].clone(),
                            H = g[W + 1][z + 1].clone(),
                            c = g[W][z + 1].clone();
                        _.push(new ps(I, V, r, [h, k, K])), l[0].push([n, x, c]), _.push(new ps(V, s, r, [k.clone(), D, K.clone()])), l[0].push([x.clone(), H, c.clone()])
                    }
                if (t && R > 0)
                    for (this.vertices.push(new aj(0, E, 0)), z = 0; v > z; z++) {
                        var I = f[0][z],
                            V = f[0][z + 1],
                            s = this.vertices.length - 1,
                            h = new aj(0, 1, 0),
                            k = new aj(0, 1, 0),
                            D = new aj(0, 1, 0),
                            n = g[0][z].clone(),
                            x = g[0][z + 1].clone(),
                            H = new Hd(x.x, 0);
                        _.push(new ps(I, V, s, [h, k, D], null, 1));
                        var S = z / v * C,
                            b = m(S),
                            N = q(S),
                            L = (z + 1) / v * C,
                            w = m(L),
                            e = q(L);
                        l[0].push([new Hd(.5 + .5 * b, .5 + .5 * N), new Hd(.5 + .5 * w, .5 + .5 * e), new Hd(.5, .5)])
                    }
                if (Y && $ > 0)
                    for (this.vertices.push(new aj(0, -E, 0)), z = 0; v > z; z++) {
                        var I = f[W][z + 1],
                            V = f[W][z],
                            s = B.length - 1,
                            h = new aj(0, -1, 0),
                            k = new aj(0, -1, 0),
                            D = new aj(0, -1, 0),
                            n = g[W][z + 1].clone(),
                            x = g[W][z].clone();
                        _.push(new ps(I, V, s, [h, k, D], null, 2));
                        var S = z / v * C,
                            b = m(S),
                            N = q(S),
                            L = (z + 1) / v * C,
                            w = m(L),
                            e = q(L);
                        l[0].push([new Hd(.5 + .5 * w, .5 - .5 * e), new Hd(.5 + .5 * b, .5 - .5 * N), new Hd(.5, .5)])
                    }
            };
        $r.prototype = $k(bg);
        var Cj = function(V, H, i, N, l, Z, S) {
            Qg.call(this), S = S || .5, V = V || 16, H = H || 16, i = (i !== y ? i : 0) - B, N = N !== y ? N : C, l = l !== y ? l : 0, Z = Z !== y ? Z : B;
            var v, s, o = [],
                $ = [],
                G = this.vertices,
                h = this.faces,
                d = this.faceVertexUvs;
            for (s = 0; H >= s; s++) {
                var w = [],
                    z = [];
                for (v = 0; V >= v; v++) {
                    var U = v / V,
                        g = s / H,
                        O = new aj;
                    O.x = -S * m(i + U * N) * q(l + g * Z), O.y = S * m(l + g * Z), O.z = S * q(i + U * N) * q(l + g * Z), G.push(O), w.push(G.length - 1), z.push(new Hd(U, g))
                }
                o.push(w), $.push(z)
            }
            for (s = 0; H > s; s++)
                for (v = 0; V > v; v++) {
                    var R = o[s][v + 1],
                        M = o[s][v],
                        A = o[s + 1][v],
                        K = o[s + 1][v + 1],
                        Y = G[R].clone().normalize(),
                        e = G[M].clone().normalize(),
                        Q = G[A].clone().normalize(),
                        F = G[K].clone().normalize(),
                        r = $[s][v + 1].clone(),
                        X = $[s][v].clone(),
                        f = $[s + 1][v].clone(),
                        T = $[s + 1][v + 1].clone();
                    E(G[R].y) === S ? (r.x = (r.x + X.x) / 2, h.push(new ps(R, A, K, [Y, Q, F])), d[0].push([r, f, T])) : E(G[A].y) === S ? (f.x = (f.x + T.x) / 2, h.push(new ps(R, M, A, [Y, e, Q])), d[0].push([r, X, f])) : (h.push(new ps(R, M, K, [Y, e, F])), d[0].push([r, X, T]), h.push(new ps(M, A, K, [e.clone(), Q, F.clone()])), d[0].push([X.clone(), f, T.clone()]))
                }
        };
        Cj.prototype = $k(bg);
        var bj = function(n, r, c, G, f, A) {
            Qg.call(this), n = n || .33, r = r || .17, G = G || 8, c = c || 6, f = f || 0, A = A || C;
            for (var Q = new aj, N = [], u = [], l = 0; G >= l; l++)
                for (var o = l / G * C + B, k = 0; c >= k; k++) {
                    var R = k / c * A + f;
                    Q.x = n * m(R), Q.z = -n * q(R);
                    var J = new aj,
                        V = n + r * m(o);
                    J.x = V * m(R), J.z = -V * q(R), J.y = r * q(o), this.vertices.push(J), N.push(new Hd(k / c, 1 - l / G)), u.push(J.clone().sub(Q).normalize())
                }
            for (var l = 1; G >= l; l++)
                for (var k = 1; c >= k; k++) {
                    var D = (c + 1) * l + k - 1,
                        K = (c + 1) * (l - 1) + k - 1,
                        H = (c + 1) * (l - 1) + k,
                        j = (c + 1) * l + k,
                        L = new ps(D, K, j, [u[D].clone(), u[K].clone(), u[j].clone()]);
                    this.faces.push(L), this.faceVertexUvs[0].push([N[D].clone(), N[K].clone(), N[j].clone()]), L = new ps(K, H, j, [u[K].clone(), u[H].clone(), u[j].clone()]), this.faces.push(L), this.faceVertexUvs[0].push([N[K].clone(), N[H].clone(), N[j].clone()])
                }
            this.computeFaceNormals()
        };
        bj.prototype = $k(bg);
        var Np = function(Y, S, m) {
                return Y ? (Qg.call(this), Y = Y instanceof Array ? Y : [Y], this.addShapeList(Y, S), S.convertYZ !== !1 && Gh(this, m), this.computeFaceNormals(), void 0) : (Y = [], void 0)
            },
            of = Np.prototype = $k(Qg.prototype);
        of.addShapeList = function(z, A) {
            for (var K = z.length, s = 0; K > s; s++) {
                var h = z[s];
                this.addShape(h, A)
            }
        }, of.addShape = function(f, h) {
            function S() {
                if (h.bottom)
                    for (var Z = 0; L > Z; Z++) I = c[Z], U(I[2], I[1], I[0], !0);
                if (h.top)
                    for (Z = 0; L > Z; Z++) I = c[Z], U(I[0] + d * t, I[1] + d * t, I[2] + d * t, !1)
            }

            function b() {
                var G = 0;
                for (l(x, G), G += x.length, n = 0, _ = J.length; _ > n; n++) $ = J[n], l($, G), G += $.length
            }

            function l(F, P) {
                for (var D, l, K = F.length; --K >= 0;) {
                    D = K, l = K - 1, 0 > l && (l = F.length - 1);
                    var g = 0,
                        o = t;
                    for (g = 0; o > g; g++) {
                        var M = d * g,
                            T = d * (g + 1),
                            p = P + D + M,
                            b = P + l + M,
                            i = P + l + T,
                            N = P + D + T;
                        w(p, b, i, N, F, g, o, D, l)
                    }
                }
            }

            function C(o, w, V) {
                X.vertices.push(new aj(o, w, V))
            }

            function U(M, E, V, Q) {
                M += s, E += s, V += s, X.faces.push(new ps(M, E, V, null, null, Q ? 2 : 1));
                var u = Q ? k.generateBottomUV(X, f, h, M, E, V) : k.generateTopUV(X, f, h, M, E, V);
                X.faceVertexUvs[0].push(u)
            }

            function w(y, H, G, u, r, K, R, I, l) {
                y += s, H += s, G += s, u += s, X.faces.push(new ps(y, H, u)), X.faces.push(new ps(H, G, u));
                var W = k.generateSideWallUV(X, f, r, h, y, H, G, u, K, R, I, l);
                X.faceVertexUvs[0].push([W[0], W[1], W[3]]), X.faceVertexUvs[0].push([W[1], W[2], W[3]])
            }
            var z, E, T, m, r, o = h.amount,
                v = h.curveSegments || Ci,
                t = h.steps || 1,
                N = h.extrudePath,
                W = !1,
                k = new Pj(h.repeatUVLength);
            N && (z = N.getSpacedPoints(t), W = !0, E = h.frames !== y ? h.frames : new hd.FrenetFrames(N, t, !1), T = new aj, m = new aj, r = new aj);
            var $, n, _, X = this,
                s = this.vertices.length,
                G = f.extractPoints(v),
                g = G.shape,
                J = G.holes,
                e = !Yn.isClockWise(g);
            if (e) {
                for (g = g.reverse(), n = 0, _ = J.length; _ > n; n++) $ = J[n], Yn.isClockWise($) && (J[n] = $.reverse());
                e = !1
            }
            var c = Yn.triangulateShape(g, J),
                x = g;
            for (n = 0, _ = J.length; _ > n; n++) $ = J[n], g = g.concat($);
            for (var P, I, d = g.length, L = c.length, M = 0; d > M; M++) P = g[M], W ? (m.copy(E.normals[0]).multiplyScalar(P.x), T.copy(E.binormals[0]).multiplyScalar(P.y), r.copy(z[0]).add(m).add(T), C(r.x, r.y, r.z)) : C(P.x, P.y, 0);
            var j;
            for (j = 1; t >= j; j++)
                for (M = 0; d > M; M++) P = g[M], W ? (m.copy(E.normals[j]).multiplyScalar(P.x), T.copy(E.binormals[j]).multiplyScalar(P.y), r.copy(z[j]).add(m).add(T), C(r.x, r.y, r.z)) : C(P.x, P.y, o / t * j);
            S(), b()
        };
        var hd = function(E, X, k, U, V) {
            function S(B, k, j) {
                return x.vertices.push(new aj(B, k, j)) - 1
            }
            Qg.call(this), X = X || 64, k = k || 1, U = U || 8, V = V || !1;
            var l, A, v, B, c, R, W, a, $, r, t, p, Q, g, G, K, f, _, d, z, n = [],
                x = this,
                J = X + 1,
                T = new aj,
                i = new hd.FrenetFrames(E, X, V),
                I = i.tangents,
                j = i.normals,
                o = i.binormals;
            for (this.tangents = I, this.normals = j, this.binormals = o, $ = 0; J > $; $++)
                for (n[$] = [], B = $ / (J - 1), a = E.getPointAt(B), l = I[$], A = j[$], v = o[$], r = 0; U > r; r++) c = r / U * C, R = -k * m(c), W = k * q(c), T.copy(a), T.x += R * A.x + W * v.x, T.y += R * A.y + W * v.y, T.z += R * A.z + W * v.z, n[$][r] = S(T.x, T.y, T.z);
            for ($ = 0; X > $; $++)
                for (r = 0; U > r; r++) t = V ? ($ + 1) % X : $ + 1, p = (r + 1) % U, Q = n[$][r], g = n[t][r], G = n[t][p], K = n[$][p], f = new Hd($ / X, r / U), _ = new Hd(($ + 1) / X, r / U), d = new Hd(($ + 1) / X, (r + 1) / U), z = new Hd($ / X, (r + 1) / U), this.faces.push(new ps(Q, g, K)), this.faceVertexUvs[0].push([f, _, z]), this.faces.push(new ps(g, G, K)), this.faceVertexUvs[0].push([_.clone(), d, z.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        };
        hd.prototype = $k(bg), hd.FrenetFrames = function(y, h, L) {
            function p() {
                K[0] = new aj, k[0] = new aj, X = Number.MAX_VALUE, Y = E(x[0].x), W = E(x[0].y), O = E(x[0].z), X >= Y && (X = Y, q.set(1, 0, 0)), X >= W && (X = W, q.set(0, 1, 0)), X >= O && q.set(0, 0, 1), R.crossVectors(x[0], q).normalize(), K[0].crossVectors(x[0], R), k[0].crossVectors(x[0], K[0])
            }
            var o, X, Y, W, O, H, d, q = new aj,
                x = [],
                K = [],
                k = [],
                R = new aj,
                $ = new hf,
                n = h + 1,
                g = 1e-4;
            for (this.tangents = x, this.normals = K, this.binormals = k, H = 0; n > H; H++) d = H / (n - 1), x[H] = y.getTangentAt(d), x[H].normalize();
            for (p(), H = 1; n > H; H++) K[H] = K[H - 1].clone(), k[H] = k[H - 1].clone(), R.crossVectors(x[H - 1], x[H]), R.length() > g && (R.normalize(), o = j(Uj(x[H - 1].dot(x[H]), -1, 1)), K[H].applyMatrix4($.makeRotationAxis(R, o))), k[H].crossVectors(x[H], K[H]);
            if (L)
                for (o = j(Uj(K[0].dot(K[n - 1]), -1, 1)), o /= n - 1, x[0].dot(R.crossVectors(K[0], K[n - 1])) > 0 && (o = -o), H = 1; n > H; H++) K[H].applyMatrix4($.makeRotationAxis(x[H], o * H)), k[H].crossVectors(x[H], K[H])
        };
        var Ar = function(p, G, E, M) {
            Qg.call(this), G = G || 18, E = E || 0, M = M == r ? C : M;
            for (var Z = 1 / (p.length - 1), t = 1 / G, X = 0, D = G; D >= X; X++)
                for (var d = E + X * t * M, g = m(d), W = q(d), H = 0, R = p.length; R > H; H++) {
                    var L = p[H],
                        b = new aj;
                    b.x = g * L.x - W * L.y, b.y = W * L.x + g * L.y, b.z = L.z, this.vertices.push(b)
                }
            for (var l = p.length, X = 0, D = G; D > X; X++)
                for (var H = 0, R = p.length - 1; R > H; H++) {
                    var o = H + l * X,
                        s = o,
                        S = o + l,
                        g = o + 1 + l,
                        h = o + 1,
                        y = X * t,
                        $ = H * Z,
                        O = y + t,
                        Y = $ + Z;
                    this.faces.push(new ps(s, h, S)), this.faceVertexUvs[0].push([new Hd(y, $), new Hd(y, Y), new Hd(O, $)]), this.faces.push(new ps(S, h, g)), this.faceVertexUvs[0].push([new Hd(O, $), new Hd(y, Y), new Hd(O, Y)])
                }
            this.mergeVertices(), Gh(this), this.computeFaceNormals(), this.computeVertexNormals()
        };
        Ar.prototype = $k(bg);
        var xm = function(o, r) {
            r = r || {};
            var i = Lb.generateShapes(o, r);
            r.amount = r.amount !== y ? r.amount : .5, r.convertYZ = !1, r.fill !== !1 && (r.bottom = !0, r.top = !0), Np.call(this, i, r)
        };
        xm.prototype = $k(of);
        var bs = D.Node = function() {
                dg(bs, this)
            },
            md = {
                X: Xq,
                Y: Fq,
                Z: ii
            },
            Jm = {
                xyz: "XYZ",
                xzy: "XZY",
                yxz: "YXZ",
                yzx: "YZX",
                zxy: "ZXY",
                zyx: "ZYX"
            },
            Mi = "xzy",
            lf = function(x, V, T) {
                if (V) {
                    var z = V[0],
                        h = V[1],
                        R = V[2];
                    "xzy" === T ? (Fq(x, h), ii(x, R), Xq(x, z)) : "xyz" === T ? (ii(x, R), Fq(x, h), Xq(x, z)) : "yxz" === T ? (ii(x, R), Xq(x, z), Fq(x, h)) : "yzx" === T ? (Xq(x, z), ii(x, R), Fq(x, h)) : "zxy" === T ? (Fq(x, h), Xq(x, z), ii(x, R)) : "zyx" === T ? (Xq(x, z), Fq(x, h), ii(x, R)) : (Fq(x, h), ii(x, R), Xq(x, z))
                }
            };
        xr("Node", Bg, {
            ms_ac: ["rotationMode", "tall"],
            _adjustChildrenToTop: !0,
            _icon: "node_icon",
            _image: "node_image",
            _rotationMode: Mi,
            _64O: 0,
            _rotationX: 0,
            _53O: 0,
            _host: r,
            _position: {
                x: 0,
                y: 0
            },
            _anchor: {
                x: .5,
                y: .5
            },
            _scale: {
                x: 1,
                y: 1
            },
            _tall: 20,
            _54O: 0,
            getUIClass: function() {
                return nc
            },
            _22Q: function() {
                return Dl
            },
            getX: function() {
                return this.p().x
            },
            setX: function(u) {
                this.p(u, this.p().y)
            },
            getY: function() {
                return this.p().y
            },
            setY: function(i) {
                this.p(this.p().x, i)
            },
            getAnchorX: function() {
                return this.getAnchor().x
            },
            setAnchorX: function(C) {
                this.setAnchor(C, this.getAnchor().y)
            },
            getAnchorY: function() {
                return this.getAnchor().y
            },
            setAnchorY: function(S) {
                this.setAnchor(this.getAnchor().x, S)
            },
            getScaleX: function() {
                return this.getScale().x
            },
            setScaleX: function($) {
                this.setScale($, this.getScale().y)
            },
            getScaleY: function() {
                return this.getScale().y
            },
            setScaleY: function(R) {
                this.setScale(this.getScale().x, R)
            },
            p: function() {
                return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
            },
            p3: function() {
                return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
            },
            s3: function() {
                return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
            },
            r3: function() {
                return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
            },
            t3: function() {
                return this.translate3d.apply(this, arguments), this
            },
            translate3dBy: function(G, K) {
                nl(G, rg(r, r, this.r3(), this.getRotationMode())), this.translate3d(G[0] * K, G[1] * K, G[2] * K)
            },
            translateFront: function(z) {
                this.translate3dBy([0, 0, 1], z)
            },
            translateBack: function(y) {
                this.translate3dBy([0, 0, -1], y)
            },
            translateLeft: function(I) {
                this.translate3dBy([-1, 0, 0], I)
            },
            translateRight: function(C) {
                this.translate3dBy([1, 0, 0], C)
            },
            translateTop: function(k) {
                this.translate3dBy([0, 1, 0], k)
            },
            translateBottom: function(R) {
                this.translate3dBy([0, -1, 0], R)
            },
            getPosition3d: function() {
                return [this._position.x, this._54O, this._position.y]
            },
            setPosition3d: function(M, t, g) {
                1 === arguments.length && (t = M[1], g = M[2], M = M[0]), this.p(M, g), this.setElevation(t)
            },
            translate3d: function(x, l, c) {
                1 === arguments.length && (l = x[1], c = x[2], x = x[0]), this.translate(x, c), this.setElevation(this._54O + l)
            },
            getSize3d: function() {
                return [this.getWidth(), this.getTall(), this.getHeight()]
            },
            setSize3d: function(g, K, u) {
                1 === arguments.length && (K = g[1], u = g[2], g = g[0]), this.setSize(g, u), this.setTall(K)
            },
            getRotation3d: function() {
                return [this._rotationX, -this._64O, this._53O]
            },
            setRotation3d: function(G, O, u) {
                1 === arguments.length && (O = G[1], u = G[2], G = G[0]), this.setRotationX(G), this.setRotation(-O), this.setRotationZ(u)
            },
            setRotationY: function(F) {
                this.setRotation(-F)
            },
            getRotationY: function() {
                return -this._64O
            },
            lookAt: function(i, p) {
                p = p || nh;
                var s = this,
                    u = wg(i, s.p3()),
                    h = ls(u);
                p === nh ? (s.r3([-_(u[1] / h), -H(u[2], u[0]) + F, 0]), s.setRotationMode("xzy")) : p === th ? (s.r3(0, -H(u[2], u[0]), _(u[1] / h)), s.setRotationMode("zyx")) : p === fp ? (s.r3(0, -H(u[2], u[0]) + B, -_(u[1] / h)), s.setRotationMode("zyx")) : p === Un ? (s.r3([-_(u[1] / h) + F, -H(u[2], u[0]) + F, 0]), s.setRotationMode("xzy")) : p === Hn && (s.r3([-_(u[1] / h) - F, -H(u[2], u[0]) + F, 0]), s.setRotationMode("xzy")), p === Ym && (s.r3([-_(u[1] / h) + B, -H(u[2], u[0]) + F, B]), s.setRotationMode("zxy"))
            },
            getLoopedEdges: function() {
                return this._45I
            },
            getEdges: function() {
                return this._70O
            },
            getAgentEdges: function() {
                return this._49I
            },
            getHost: function() {
                return this._host
            },
            setHost: function($) {
                var t = this;
                if (t !== $ && t._host !== $) {
                    var A = t._host;
                    A && A._removeAttach(t), t._host = $, t._host && t._host._addAttach(t), t.fp("host", A, $), t.onHostChanged(A, $)
                }
            },
            getAttaches: function() {
                return this._69O
            },
            _addAttach: function(R) {
                var y = this;
                y._69O || (y._69O = new pm), y._69O.add(R), y.fp("attaches", r, R)
            },
            _removeAttach: function(h) {
                var w = this;
                w._69O.remove(h), w._69O.isEmpty() && delete w._69O, w.fp("attaches", h, r)
            },
            getSourceEdges: function() {
                return this._42I
            },
            getTargetEdges: function() {
                return this._43I
            },
            _2I: function(U) {
                var _ = this;
                _._44I || (_._44I = new pm), _._42I || (_._42I = new pm), _._44I.add(U), _._42I.add(U), _._20I()
            },
            _4I: function(G) {
                var c = this;
                c._44I || (c._44I = new pm), c._43I || (c._43I = new pm), c._44I.add(G), c._43I.add(G), c._20I()
            },
            _16I: function(j) {
                var s = this;
                s._44I.remove(j), s._42I.remove(j), s._44I.isEmpty() && delete s._44I, s._42I.isEmpty() && delete s._42I, s._20I()
            },
            _18I: function(y) {
                var v = this;
                v._44I.remove(y), v._43I.remove(y), v._44I.isEmpty() && delete v._44I, v._43I.isEmpty() && delete v._43I, v._20I()
            },
            _20I: function() {
                var b = this;
                if (delete b._45I, !b._44I || b._44I.isEmpty()) return delete b._70O, void 0;
                var q;
                b._44I.each(function(H) {
                    H.isLooped() && (q || (q = {}), q[H._id] || (b._45I || (b._45I = new pm), b._45I.add(H), q[H._id] = H))
                }), q ? (b._70O = new pm, b._44I.each(function(P) {
                    q[P._id] ? "A" === q[P._id] || (q[P._id] = "A", b._70O.add(P)) : b._70O.add(P)
                })) : b._70O = b._44I
            },
            hasAgentEdges: function() {
                return !!this._49I && !this._49I.isEmpty()
            },
            getSourceAgentEdges: function() {
                return this._46I
            },
            getTargetAgentEdges: function() {
                return this._47I
            },
            _1I: function(X) {
                var g = this;
                g._46I || (g._46I = new pm), g._48I || (g._48I = new pm), g._46I.add(X), g._48I.add(X), g._19I()
            },
            _3I: function(o) {
                var H = this;
                H._47I || (H._47I = new pm), H._48I || (H._48I = new pm), H._47I.add(o), H._48I.add(o), H._19I()
            },
            _15I: function(G) {
                var s = this;
                s._46I.remove(G), s._48I.remove(G), s._46I.isEmpty() && delete s._46I, s._48I.isEmpty() && delete s._48I, s._19I()
            },
            _17I: function(u) {
                var i = this;
                i._47I.remove(u), i._48I.remove(u), i._47I.isEmpty() && delete i._47I, i._48I.isEmpty() && delete i._48I, i._19I()
            },
            _19I: function() {
                var j = this;
                delete j._49I;
                var L = j._48I;
                if (L && !L.isEmpty()) {
                    var B = {};
                    L.each(function(z) {
                        B[z._id] ? j._49I || (j._49I = new pm) : B[z._id] = z
                    }), j._49I ? L.each(function(G) {
                        B[G._id] && (j._49I.add(G), delete B[G._id])
                    }) : j._49I = L
                }
            },
            getImage: function() {
                return this._image
            },
            setImage: function(w) {
                var I = this,
                    B = I._image,
                    G = I.getWidth(),
                    E = I.getHeight();
                I._image = w, I.fp("image", B, w), I.fp(kk, G, I.getWidth()), I.fp(uk, E, I.getHeight())
            },
            getElevation: function() {
                return this._54O
            },
            setElevation: function(c) {
                var O = this;
                if (!O._50O) {
                    O._50O = 1;
                    var b = O._54O;
                    O._54O = c, O.fp(jk, b, c), delete this._50O
                }
            },
            getRotation: function() {
                return this._64O
            },
            setRotation: function(c) {
                var C = this;
                if (!C._49O) {
                    C._49O = 1;
                    var t = C._64O;
                    C._64O = c, C.fp(Ll, t, c), delete C._49O
                }
            },
            getRotationX: function() {
                return this._rotationX
            },
            setRotationX: function(k) {
                var d = this;
                if (!d._51O) {
                    d._51O = 1;
                    var A = d._rotationX;
                    d._rotationX = k, d.fp("rotationX", A, k), delete d._51O
                }
            },
            getRotationZ: function() {
                return this._53O
            },
            setRotationZ: function(U) {
                var m = this;
                if (!m._52O) {
                    m._52O = 1;
                    var B = m._53O;
                    m._53O = U, m.fp("rotationZ", B, U), delete m._52O
                }
            },
            getPosition: function() {
                return this._position
            },
            setPosition: function(e, z) {
                var b = this;
                if (!b._50I) {
                    b._50I = 1;
                    var j;
                    if (j = 2 === arguments.length ? {
                            x: e,
                            y: z
                        } : e, j.x !== b._position.x || j.y !== b._position.y) {
                        var I = b._position;
                        b._position = j, b.fp(Ve, I, j)
                    }
                    delete b._50I
                }
            },
            translate: function(Y, C) {
                var w = this._position;
                this.p(w.x + Y, w.y + C)
            },
            getWidth: function() {
                var m = this;
                if (m._width >= 0) return m._width;
                var k = Eq(m._image);
                return k ? co(k, m) : 20
            },
            setWidth: function(R) {
                var G = this,
                    Y = G._width;
                G._width = R, G.fp(kk, Y, R)
            },
            getHeight: function() {
                var T = this;
                if (T._height >= 0) return T._height;
                var D = Eq(T._image);
                return D ? bi(D, T) : 20
            },
            setHeight: function(I) {
                var T = this,
                    j = T._height;
                T._height = I, T.fp(uk, j, I)
            },
            setSize: function($, O) {
                var F = this;
                2 === arguments.length ? (F.setWidth($), F.setHeight(O)) : (F.setWidth($.width), F.setHeight($.height))
            },
            getSize: function() {
                return {
                    width: this.getWidth(),
                    height: this.getHeight()
                }
            },
            setRect: function(w, S, G, y, J) {
                var r = this,
                    x = r.getAnchor(),
                    z = r.getScale();
                arguments.length <= 2 && (J = S, S = w.y, G = w.width, y = w.height, w = w.x);
                var Z = z.x < 0 ? 1 - x.x : x.x,
                    l = z.y < 0 ? 1 - x.y : x.y;
                r.p(w + G * Z, S + y * l), J && (G /= Math.abs(z.x), y /= Math.abs(z.y)), r.setWidth(G), r.setHeight(y)
            },
            getMatrix: function() {
                var A = this,
                    C = A._64O,
                    m = A._position,
                    n = A.getScale();
                return new $b(C, m.x, m.y, n.x, n.y)
            },
            getRect: function() {
                var c = this,
                    E = c.getWidth(),
                    H = c.getHeight(),
                    z = c.getAnchor(),
                    r = {
                        x: -E * z.x,
                        y: -H * z.y,
                        width: E,
                        height: H
                    },
                    w = c.getMatrix();
                return r = vf([w.tf(r.x, r.y), w.tf(r.x + r.width, r.y), w.tf(r.x + r.width, r.y + r.height), w.tf(r.x, r.y + r.height)])
            },
            getAnchor: function() {
                var l = this;
                if (l.hasOwnProperty("_anchor")) return l._anchor;
                var j = Eq(l._image);
                return j && j.anchorX !== y ? {
                    x: j.anchorX,
                    y: j.anchorY
                } : l._anchor
            },
            setAnchor: function(a, c, e) {
                var R, w = this;
                "number" == typeof a ? R = {
                    x: a,
                    y: c
                } : (R = a.length ? {
                    x: a[0],
                    y: a[1]
                } : a, e = c);
                var k = w.getAnchor();
                if (k.x !== R.x || k.y !== R.y) {
                    if (w._anchor = R, e && !jj) {
                        var D = w.getPosition(),
                            b = w.getSize(),
                            O = w.getRotation(),
                            P = w.getScale(),
                            G = -b.width * (k.x - R.x) * P.x,
                            B = -b.height * (k.y - R.y) * P.y,
                            y = q(O),
                            J = m(O);
                        w.setPosition(D.x + J * G - y * B, D.y + y * G + J * B)
                    }
                    w.fp("anchor", k, R)
                }
            },
            getScale: function() {
                return this._scale
            },
            setScale: function(k, I) {
                var h, Z = this;
                h = 2 === arguments.length ? {
                    x: k,
                    y: I
                } : k;
                var H = Z.getScale();
                (H.x !== h.x || H.y !== h.y) && (Z._scale = h, Z.fp("scale", H, h))
            },
            getCorners: function(R, m) {
                R == r && (R = 0), m == r && (m = R);
                var H = this,
                    x = H.getAnchor(),
                    k = H.getWidth(),
                    y = H.getHeight(),
                    d = -k * x.x - R,
                    t = -y * x.y - m,
                    s = k + 2 * R,
                    w = y + 2 * m,
                    i = H.getMatrix();
                return [i.tf(d, t), i.tf(d, t + w), i.tf(d + s, t + w), i.tf(d + s, t)]
            },
            getEditControlPoints: function(N, X, h) {
                X == r && (X = 0), h == r && (h = X);
                var M = this,
                    s = M.getAnchor(),
                    C = M.getWidth(),
                    q = M.getHeight(),
                    R = -C * s.x - X,
                    k = -q * s.y - h,
                    U = C + 2 * X,
                    e = q + 2 * h;
                if (N) return [{
                    x: R,
                    y: k
                }, {
                    x: R,
                    y: 0
                }, {
                    x: R,
                    y: k + e
                }, {
                    x: 0,
                    y: k + e
                }, {
                    x: R + U,
                    y: k + e
                }, {
                    x: R + U,
                    y: 0
                }, {
                    x: R + U,
                    y: k
                }, {
                    x: 0,
                    y: k
                }];
                var o = M.getMatrix();
                return [o.tf(R, k), o.tf(R, 0), o.tf(R, k + e), o.tf(0, k + e), o.tf(R + U, k + e), o.tf(R + U, 0), o.tf(R + U, k), o.tf(0, k)]
            },
            rotateAt: function(s, k, b) {
                var N = this,
                    P = N._position,
                    E = N._64O,
                    f = new $b(E, P.x, P.y).tf(s, k),
                    I = Q(s * s + k * k),
                    e = H(P.y - f.y, P.x - f.x) + b;
                N.setRotation(E + b), N.p(f.x + I * m(e), f.y + I * q(e))
            },
            onParentChanged: function() {
                bs.superClass.onParentChanged.apply(this, arguments), this._8I()
            },
            _8I: function() {
                this._70O && this._70O.each(function(N) {
                    N._7I()
                })
            },
            onPropertyChanged: function(O) {
                var Z = this;
                bs.superClass.onPropertyChanged.call(Z, O), Z._69O && Z._69O.each(function(s) {
                    s.handleHostPropertyChange(O)
                }), Z._49I && Z._49I.each(function(q) {
                    q.fp("agentChange", !0, !1)
                })
            },
            onHostChanged: function() {
                this.updateAttach()
            },
            handleHostPropertyChange: function(X) {
                this.updateAttach(X)
            },
            onStyleChanged: function(W) {
                bs.superClass.onStyleChanged.apply(this, arguments), pi[W] && this.updateAttach()
            },
            updateAttach: function(W) {
                var C = this;
                C._51I || jj || (C._51I = 1, C._71O(W), delete C._51I)
            },
            _71O: function(V) {
                var S, E, Q, m, R, B, o = this,
                    g = o._host,
                    c = V ? V.property : r,
                    v = V ? V.oldValue : r,
                    F = V ? V.newValue : r;
                if (g instanceof D.Grid) {
                    if (c === jk) o.setElevation(o._54O + F - v);
                    else if (!V || An[c]) {
                        if (S = o.s("attach.row.index"), E = o.s("attach.column.index"), Q = g.getCellRect(S, E), !Q) return;
                        m = o.s("attach.row.span"), R = o.s("attach.column.span"), (1 !== m || 1 !== R) && (Q = Ap(Q, g.getCellRect(S + m - 1, E + R - 1))), Hk(Q, o, "attach.padding", 1), o.setRect(Q)
                    }
                } else if (g instanceof _r && (B = o.s("attach.index")) >= 0 && (!V || Og[c])) {
                    var Y = o.s("attach.thickness");
                    Y != r && o.setHeight(g.getThickness() * Y);
                    var k = o.s("attach.offset"),
                        T = g.getPoints(),
                        K = T.size();
                    if (K > B) {
                        var t = T.get(B),
                            P = K === B + 1 ? T.get(0) : T.get(B + 1),
                            j = [P.x - t.x, P.y - t.y],
                            b = ls(j);
                        if (b) {
                            o.s("attach.offset.relative") && (k *= b), o.s("attach.offset.opposite") && (k = b - k);
                            var s = {
                                    x: t.x + j[0] / b * k,
                                    y: t.y + j[1] / b * k
                                },
                                O = o.s("attach.gap");
                            O && (o.s("attach.gap.relative") && (O *= g.getThickness()), s = sl(r, s, P, O)), o.p(s), o.setRotation(H(j[1], j[0]))
                        }
                    }
                } else V && (c === Ve ? o.translate(F.x - v.x, F.y - v.y) : c === jk ? o.setElevation(o._54O + F - v) : Aj[c] && o._11Q(g, c, F - v))
            },
            _11Q: function(z, $, L) {
                var S = this,
                    b = z.p3(),
                    m = wg(S.p3(), b),
                    d = ym(),
                    C = Jm[S.getRotationMode()],
                    q = C[0],
                    y = C[1],
                    c = C[2],
                    U = md[q],
                    K = md[y],
                    x = md[c];
                $ === Ll && ($ = "rotationY", L = -L), $ === Ll + q ? (x(d, z[cg + c]()), K(d, z[cg + y]()), U(d, L), K(d, -z[cg + y]()), x(d, -z[cg + c]()), S[Dk + q](S[cg + q]() + L)) : $ === Ll + y ? (x(d, z[cg + c]()), K(d, L), x(d, -z[cg + c]()), S[Dk + y](S[cg + y]() + L)) : $ === Ll + c && (x(d, L), S[Dk + c](S[cg + c]() + L)), nl(m, d), S.p3(b[0] + m[0], b[1] + m[1], b[2] + m[2])
            },
            isHostOn: function(G) {
                var c = this;
                if (c._host && G && G._69O)
                    for (var w = {}, W = c._host; W && W !== c && !w[W._id];) {
                        if (W === G) return !0;
                        w[W._id] = W, W = W._host
                    }
                return !1
            },
            isLoopedHostOn: function(l) {
                return this.isHostOn(l) && l.isHostOn(this)
            },
            getSerializableProperties: function() {
                var j = bs.superClass.getSerializableProperties.call(this);
                return yd(j, {
                    image: 1,
                    host: 1,
                    rotation: 1,
                    rotationX: 1,
                    rotationZ: 1,
                    rotationMode: 1,
                    position: 1,
                    anchor: 1,
                    scale: 1,
                    _width: 1,
                    _height: 1,
                    tall: 1,
                    elevation: 1
                }), j
            }
        });
        var vm = D.Edge = function(R, Z) {
            var S = this;
            dg(vm, S), S.setSource(R), S.setTarget(Z)
        };
        xr("Edge", Bg, {
            _icon: "edge_icon",
            getUIClass: function() {
                return Do
            },
            _22Q: function() {
                return Td
            },
            getSource: function() {
                return this._source
            },
            getTarget: function() {
                return this._target
            },
            getSourceAgent: function() {
                return this._40I
            },
            getTargetAgent: function() {
                return this._41I
            },
            setSource: function(U) {
                var s = this;
                if (s._source !== U) {
                    var H = s._source;
                    s._source = U, H && H._16I(s), U && U._2I(s), s._7I(), s.fp("source", H, U)
                }
            },
            setTarget: function(z) {
                var h = this;
                if (h._target !== z) {
                    var b = h._target;
                    h._target = z, b && b._18I(h), z && z._4I(h), h._7I(), h.fp("target", b, z)
                }
            },
            isLooped: function() {
                var u = this;
                return u._source === u._target && !!u._source && !!u._target
            },
            _7I: function() {
                var H, K = this,
                    y = js(K);
                K._40I !== y && (H = this._40I, H && H._15I(K), K._40I = y, y && y._1I(K), K.fp("sourceAgent", H, y), Bm(H, K._41I), Bm(y, K._41I));
                var V = ql(K);
                K._41I !== V && (H = K._41I, H && H._17I(K), K._41I = V, V && V._3I(K), K.fp("targetAgent", H, V), Bm(H, K._40I), Bm(V, K._40I))
            },
            _22I: function(z) {
                this._52I = z, this.fp("edgeGroup", !0, !1)
            },
            getEdgeGroup: function() {
                return this._52I
            },
            isEdgeGroupHidden: function() {
                var B = this;
                return B._52I && B._52I.get(0) !== B && !B.getStyle(tf)
            },
            getEdgeGroupSize: function() {
                return this._52I ? this._52I.size() : 1
            },
            getEdgeGroupIndex: function() {
                return this._52I ? this._52I.indexOf(this) : 0
            },
            isEdgeGroupAgent: function() {
                var v = this,
                    w = v._52I;
                return w && !v.getStyle(tf) && w.size() > 1 && v === w.get(0)
            },
            toggle: function() {
                var Z = this._52I,
                    w = !this.s(tf);
                Z && Z.size() > 1 && (Z.each(function(u) {
                    u.s(tf, w)
                }), Z.getSiblings().each(function(D) {
                    D !== Z && D.each(function(Q) {
                        Q.fp("edgeGroup", r, D)
                    })
                }))
            },
            setStyle: function(m, Z) {
                (m === Hc || "edge.segments" === m) && (Z = Mr(Z)), vm.superClass.setStyle.call(this, m, Z)
            },
            onStyleChanged: function(o) {
                vm.superClass.onStyleChanged.apply(this, arguments), uq[o] && Bm(this._41I, this._40I)
            },
            getSerializableProperties: function() {
                var v = vm.superClass.getSerializableProperties.call(this);
                return yd(v, {
                    source: 1,
                    target: 1
                }), v
            }
        });
        var _d = D.Group = function() {
            dg(_d, this)
        };
        xr("Group", bs, {
            _image: "group_image",
            _icon: "group_icon",
            _57O: !1,
            getUIClass: function() {
                return He
            },
            onChildAdded: function() {
                _d.superClass.onChildAdded.apply(this, arguments), this._81I()
            },
            onChildRemoved: function() {
                _d.superClass.onChildRemoved.apply(this, arguments), this._81I()
            },
            _81I: function() {
                var h = this;
                if (!h._54I && !jj) {
                    var J = h.getChildrenRect();
                    J && (h._53I = 1, h.p(bf(h.s("group.position"), J, h.getSize())), delete h._53I)
                }
            },
            getChildrenRect: function() {
                var R, F = this;
                return F.eachChild(function(i) {
                    R = Ap(R, F.getChildRect(i))
                }), R
            },
            getChildRect: function(y) {
                var U;
                return Ac(y) && y.s(lc) && (rn(y) && y.isExpanded() && y.eachChild(function(c) {
                    U = Ap(U, y.getChildRect(c))
                }), !U && y.getRect && (U = y.getRect())), U
            },
            setPosition: function(N, T) {
                var f = this;
                if (!f._54I) {
                    var r;
                    r = 2 === arguments.length ? {
                        x: N,
                        y: T
                    } : N, jj || f._53I || (f._54I = 1, ln(f._children, r.x - f._position.x, r.y - f._position.y), delete f._54I), _d.superClass.setPosition.call(this, r)
                }
            },
            toggle: function() {
                this.setExpanded(!this.isExpanded())
            },
            isExpanded: function() {
                return this._57O
            },
            setExpanded: function(E) {
                var Q = this;
                if (Q._57O !== E) {
                    var x = Q._57O;
                    Q._57O = E, Q.fp("expanded", x, Q._57O), Q._8I()
                }
            },
            _8I: function() {
                _d.superClass._8I.call(this), this.eachChild(function(m) {
                    Ac(m) && m._8I()
                })
            },
            onStyleChanged: function(U) {
                _d.superClass.onStyleChanged.apply(this, arguments), "group.position" === U && this._81I()
            },
            getSerializableProperties: function() {
                var Q = _d.superClass.getSerializableProperties.call(this);
                return Q.expanded = 1, Q
            }
        });
        var mj = D.Block = function() {
            dg(mj, this)
        };
        xr("Block", bs, {
            _icon: "block_icon",
            getUIClass: function() {
                return Pg
            },
            onChildAdded: function() {
                mj.superClass.onChildAdded.apply(this, arguments), this.updateFromChildren()
            },
            onChildRemoved: function() {
                mj.superClass.onChildRemoved.apply(this, arguments), this.updateFromChildren()
            },
            updateFromChildren: function() {
                var r = this;
                if (!jj && !r._updatingToChildren) {
                    var t, D, x, d, e, Z = [],
                        A = r.getRotation();
                    if (r.eachChild(function(n) {
                            Ac(n) && Z.push.apply(Z, n.getCorners())
                        }), Z.length) {
                        r._updatingFromChildren = 1;
                        var U = m(-A),
                            f = q(-A),
                            M = 1 / 0,
                            Y = -1 / 0,
                            h = 1 / 0,
                            W = -1 / 0;
                        for (d = 0, e = Z.length; e > d; d++) x = Z[d], t = x.x, D = x.y, x.x = U * t - f * D, x.y = f * t + U * D, M = I(M, x.x), Y = v(Y, x.x), h = I(h, x.y), W = v(W, x.y);
                        var $ = r.getScale();
                        r.setSize(E((Y - M) / $.x), E((W - h) / $.y));
                        var w;
                        $.x < 0 && (w = M, M = Y, Y = w), $.y < 0 && (w = h, h = W, W = w), U = m(A), f = q(A);
                        var j = r.getAnchor();
                        t = M + (Y - M) * j.x, D = h + (W - h) * j.y, r.setPosition(U * t - f * D, f * t + U * D), delete r._updatingFromChildren
                    }
                }
            },
            setPosition: function(E, M) {
                var f = this;
                if (!f._updatingToChildren) {
                    var g;
                    g = 2 === arguments.length ? {
                        x: E,
                        y: M
                    } : E, jj || f._updatingFromChildren || (f._updatingToChildren = 1, ln(f._children, g.x - f._position.x, g.y - f._position.y), delete f._updatingToChildren), mj.superClass.setPosition.call(this, g)
                }
            },
            setWidth: function(g) {
                return this.setSize(g, this.getHeight())
            },
            setHeight: function(F) {
                return this.setSize(this.getWidth(), F)
            },
            setSize: function(i, B) {
                1 > i && (i = 1), 1 > B && (B = 1);
                var e = this;
                if (!e._updatingToChildren) {
                    2 !== arguments.length && (B = i.height, i = i.width);
                    var Q = e.getWidth(),
                        o = e.getHeight();
                    if (i !== Q && mj.superClass.setWidth.call(e, i), B !== o && mj.superClass.setHeight.call(e, B), !jj && !e._updatingFromChildren) {
                        e._updatingToChildren = 1;
                        var N = i / Q,
                            _ = B / o;
                        e._adjustChildScaleOrSize(N, _, "size"), delete e._updatingToChildren, e.updateFromChildren()
                    }
                }
            },
            _adjustChildScaleOrSize: function(B, z, K) {
                var O = this,
                    d = O.getPosition(),
                    $ = O.getRotation();
                O.getScale(), O.eachChild(function(y) {
                    if (Ac(y)) {
                        var _ = y.getPosition(),
                            D = y.getRotation(),
                            o = y.getWidth(),
                            u = y.getHeight(),
                            E = y.getScale(),
                            s = E.x * o,
                            v = E.y * u,
                            t = new $b(D, _.x, _.y, s, v);
                        t.translate(-d.x, -d.y), t.rotate(-$), D = H(t.b * Math.sign(s), t.a * Math.sign(s)), t.scale(B, z);
                        var i, n, W, w = m(D);
                        if (Math.abs(w) < .001 ? (i = q(D), n = t.b / i, W = -t.c / i) : (n = t.a / w, W = t.d / w), "scale" === K) y.setScale(n / o, W / u);
                        else if ("size" === K) {
                            var F = n / E.x,
                                N = W / E.y;
                            y.setScale(kd(n) * Math.abs(E.x), kd(W) * Math.abs(E.y)), y.setSize(Math.max(.1, Math.abs(F)), Math.max(.1, Math.abs(N)))
                        }
                        t.rotate($), t.translate(d.x, d.y), y.setPosition(t.tx, t.ty)
                    }
                })
            },
            _calcChangeFactor: function(o, U, P, p) {
                var u, g, h, d;
                return u = E(o), g = E(P), h = u > g ? u / g : g / u, u = E(U), g = E(p), d = u > g ? u / g : g / u, v(h, d)
            },
            setAnchor: function() {
                var a = this;
                if (!a._updatingToChildren) {
                    var b = a.getAnchor();
                    if (mj.superClass.setAnchor.apply(a, arguments), !jj && !a._updatingFromChildren) {
                        a._updatingToChildren = 1;
                        var J = a.getAnchor();
                        a.getPosition();
                        var B = a.getSize(),
                            R = a.getScale(),
                            G = a.getRotation(),
                            j = -B.width * R.x * (b.x - J.x),
                            x = -B.height * R.y * (b.y - J.y),
                            g = q(G),
                            Z = m(G),
                            L = Z * j - g * x,
                            $ = g * j + Z * x;
                        a.eachChild(function(q) {
                            if (Ac(q)) {
                                var _ = q.getPosition();
                                q.setPosition(_.x - L, _.y - $)
                            }
                        }), delete a._updatingToChildren
                    }
                }
            },
            setRotation: function(u) {
                var x = this;
                if (!x._updatingToChildren) {
                    var S = x.getRotation();
                    if (mj.superClass.setRotation.apply(x, arguments), !jj && !x._updatingFromChildren) {
                        x._updatingToChildren = 1;
                        var w = x.getPosition(),
                            g = u - S;
                        x.eachChild(function(B) {
                            if (Ac(B)) {
                                var e = B.getMatrix();
                                e.translate(-w.x, -w.y), e.rotate(g), e.translate(w.x, w.y);
                                var r = Math.sign(B.getScale().x);
                                B.setRotation(H(e.b * r, e.a * r)), B.setPosition(e.tx, e.ty)
                            }
                        }), delete x._updatingToChildren
                    }
                }
            },
            setScale: function(i, h) {
                var B = this;
                if (!B._updatingToChildren) {
                    null == h && (h = i.y, i = i.x);
                    var x = B.getScale();
                    if (E(i) < .01 && (i = .01 * (kd(i) || kd(x.x))), E(h) < .01 && (h = .01 * (kd(h) || kd(x.y))), mj.superClass.setScale.call(B, i, h), !jj && !B._updatingFromChildren) {
                        B._updatingToChildren = 1;
                        var s = i / x.x,
                            C = h / x.y;
                        B._adjustChildScaleOrSize(s, C, "size"), delete B._updatingToChildren, B.updateFromChildren()
                    }
                }
            }
        });
        var If = D.Grid = function() {
            dg(D.Grid, this)
        };
        xr("Grid", bs, {
            IRotatable: !1,
            _icon: "grid_icon",
            _image: r,
            getUIClass: function() {
                return rh
            },
            setRotation: function() {},
            getCellRect: function(d, W) {
                var p = this,
                    Y = p.s("grid.row.count"),
                    j = p.s("grid.column.count");
                if (0 >= Y || 0 >= j || 0 > d || d >= Y || 0 > W || W >= j) return r;
                var i, E, T, L = p.getRect(),
                    O = p.s("grid.row.percents"),
                    l = p.s("grid.column.percents");
                if (Hk(L, p, "grid.border", -1), O && O._as && (O = O._as), l && l._as && (l = l._as), O && O.length === Y) {
                    for (T = 0, i = 0; d > i; i++) T += L.height * O[i];
                    L.y += T, L.height = L.height * O[d]
                } else L.height = L.height / Y, L.y += L.height * d;
                if (l && l.length === j) {
                    for (E = 0, i = 0; W > i; i++) E += L.width * l[i];
                    L.x += E, L.width = L.width * l[W]
                } else L.width = L.width / j, L.x += L.width * W;
                return qp(L, -p.s("grid.gap")), L
            }
        });
        var Jb = D.Text = function() {
            dg(Jb, this), this.setSize(100, 50), this.s("text", "TEXT")
        };
        xr("Text", bs, {
            _icon: "text_icon",
            _image: "__text__",
            getUIClass: function() {
                return Ij
            },
            setWidth: function(Z) {
                Z || (Z = .001), Jb.superClass.setWidth.call(this, Z)
            },
            setHeight: function(q) {
                q || (q = .001), Jb.superClass.setHeight.call(this, q)
            },
            toLabel: function() {
                return this._displayName || this._name || this.s("text")
            }
        }), Ae("__text__", {
            width: {
                value: 100,
                isSafeFunc: !0,
                func: function(D) {
                    return D._width
                }
            },
            height: {
                value: 50,
                isSafeFunc: !0,
                func: function(Z) {
                    return Z._height
                }
            },
            comps: [{
                type: "text",
                relative: !0,
                rect: [0, 0, 1, 1],
                text: {
                    func: "style@text"
                },
                align: {
                    func: "style@text.align"
                },
                vAlign: {
                    func: "style@text.vAlign"
                },
                color: {
                    func: "style@text.color"
                },
                font: {
                    func: "style@text.font"
                },
                shadow: {
                    func: "style@text.shadow"
                },
                shadowColor: {
                    func: "style@text.shadow.color"
                },
                shadowBlur: {
                    func: "style@text.shadow.blur"
                },
                shadowOffsetX: {
                    func: "style@text.shadow.offset.x"
                },
                shadowOffsetY: {
                    func: "style@text.shadow.offset.y"
                }
            }]
        });
        var _r = D.Shape = function() {
            dg(_r, this), this._59O = new pm
        };
        _r.__de__ = Se, xr("Shape", bs, {
            ms_ac: ["thickness", "closePath"],
            _icon: "shape_icon",
            _thickness: 10,
            _closePath: !1,
            getUIClass: function() {
                return qm
            },
            _22Q: function() {
                return Sg
            },
            getLength: function(u) {
                return Vg(os(this._59O, this._58O, u, this._closePath))
            },
            getSegments: function() {
                return this._58O
            },
            toSegments: function() {
                var N = this._58O;
                return N ? new pm(N._as.slice(0)) : N
            },
            setSegments: function(G) {
                var x = this._58O;
                G = G ? _o(G) ? new pm(G.slice(0)) : new pm(G._as.slice(0)) : new pm, (x && G && x._as.join(",") !== G._as.join(",") || x !== G) && (this._58O = G, this.fp("segments", x, G))
            },
            getPoints: function() {
                return this._59O
            },
            toPoints: function() {
                var y = this._59O;
                return new pm(y._as.slice(0))
            },
            setPoints: function(x, E) {
                var n = this,
                    e = n._59O;
                x = x ? _o(x) ? new pm(x.slice(0)) : new pm(x._as.slice(0)) : new pm;
                var w, u, M, g, l, L;
                E && (w = n.getPosition(), L = new $b(n.getRotation(), 0, 0, n.getScale().x, n.getScale().y)), (e && x && e._as.join(",") !== x._as.join(",") || e !== x) && (n._59O = x, n.fs(), n.fp("points", e, x)), E && (u = n.getPosition(), M = u.x - w.x, g = u.y - w.y, l = L.tf(M, g), n.setPosition(u.x - M + l.x, u.y - g + l.y))
            },
            addPoint: function(g, K, x) {
                var U = this.toPoints();
                U.add(g, K), this.setPoints(U, x)
            },
            setPoint: function(a, L, Q) {
                var U = this.toPoints();
                U.set(a, L), this.setPoints(U, Q)
            },
            removePointAt: function(f) {
                var r = this.toPoints();
                r.removeAt(f), this.setPoints(r)
            },
            setWidth: function(V) {
                var I = this;
                if (1 > V && (V = 1), !I._55I && !jj && I.getWidth()) {
                    I._55I = 1;
                    var z = I._position.x,
                        k = V / I.getWidth(),
                        _ = I.toPoints(),
                        L = new pm;
                    _.each(function(e) {
                        L.add({
                            x: (e.x - z) * k + z,
                            y: e.y,
                            e: e.e
                        })
                    }), I.setPoints(L);
                    var E = I.s("shape.gradient.pack");
                    E && io(E, [k, 0, 0, 1, z * (1 - k), 0]), I.fs(), delete I._55I
                }
                _r.superClass.setWidth.call(I, V)
            },
            setHeight: function(F) {
                var t = this;
                if (1 > F && (F = 1), !t._55I && !jj && t.getHeight()) {
                    t._55I = 1;
                    var n = t._position.y,
                        S = F / t.getHeight(),
                        v = t.toPoints(),
                        g = new pm;
                    v.each(function(Q) {
                        g.add({
                            x: Q.x,
                            y: (Q.y - n) * S + n,
                            e: Q.e
                        })
                    }), t.setPoints(g);
                    var Y = t.s("shape.gradient.pack");
                    Y && io(Y, [1, 0, 0, S, 0, n * (1 - S)]), t.fs(), delete t._55I
                }
                _r.superClass.setHeight.call(t, F)
            },
            setAnchor: function(l, p, I) {
                var b = this;
                if (b._55I = !0, !jj) {
                    var _, M, r;
                    "number" == typeof l ? r = {
                        x: l,
                        y: p
                    } : (r = l.length ? {
                        x: l[0],
                        y: l[1]
                    } : l, I = p);
                    var m = b.getAnchor(),
                        L = b.getSize();
                    _ = L.width * (m.x - r.x), M = L.height * (m.y - r.y), I || b.shiftPoints(_, M);
                    var O = b.getPosition()
                }
                if (_r.superClass.setAnchor.apply(b, arguments), !jj) {
                    var N = b.getPosition();
                    I && b.shiftPoints(N.x - O.x + _, N.y - O.y + M)
                }
                delete b._55I
            },
            shiftPoints: function(m, X) {
                var _ = this,
                    G = _.toPoints(),
                    x = new pm;
                G.each(function(K) {
                    x.add({
                        x: K.x + m,
                        y: K.y + X,
                        e: K.e
                    })
                }), _.setPoints(x), _.fs()
            },
            setPosition: function(H, S) {
                var r, p = this;
                if (!p._28Q) {
                    if (p._28Q = 1, !p._55I && !jj) {
                        r = 2 === arguments.length ? {
                            x: H,
                            y: S
                        } : H;
                        var L = r.x - p._position.x,
                            n = r.y - p._position.y;
                        if (0 === L && 0 === n) return delete p._28Q, void 0;
                        p._55I = 1, p.shiftPoints(L, n);
                        var c = p.s("shape.gradient.pack");
                        c && io(c, [1, 0, 0, 1, L, n]), delete p._55I
                    }
                    _r.superClass.setPosition.apply(p, arguments), delete p._28Q
                }
            },
            fs: function() {
                this.fireShapeChange()
            },
            _70I: function() {
                var x = this;
                if (2 !== x._59O.size()) return !1;
                var l = x._58O;
                return l ? 2 === l.size() && 1 === l.get(0) && 2 === l.get(1) ? !0 : !1 : !0
            },
            fireShapeChange: function() {
                var I = this;
                if (!I._55I && !jj) {
                    var j = vf(I._59O);
                    j && (I._55I = 1, I.setRect(j), delete I._55I)
                }
                I.fp(Di, !1, !0)
            },
            getSerializableProperties: function() {
                var P = _r.superClass.getSerializableProperties.call(this);
                return P.segments = 1, P.points = 1, P.thickness = 1, P.closePath = 1, P
            }
        });
        var on = D.Polyline = function() {
            dg(on, this), this.s({
                "shape.background": null,
                "shape.border.width": 2
            })
        };
        xr("Polyline", _r, {
            IRotatable: !1,
            _icon: "polyline_icon",
            _22Q: function() {
                return fi
            },
            getUIClass: function() {
                return pe
            },
            setRotationX: function() {},
            setRotation: function() {},
            setRotationZ: function() {},
            setClosePath: function() {},
            setTall: function(m) {
                var o = this;
                if (!o._24Q && !jj && o.getTall()) {
                    o._24Q = 1;
                    var Y = o._54O,
                        J = m / o.getTall();
                    o._59O.each(function(i) {
                        i.e = i.e == r ? Y : (i.e - Y) * J + Y
                    }), o.fs(), delete o._24Q
                }
                on.superClass.setTall.call(o, m)
            },
            setElevation: function(v) {
                var S = this;
                if (!S._24Q && !jj) {
                    S._24Q = 1;
                    var $ = v - S._54O;
                    S._59O.each(function(W) {
                        W.e == r ? W.e = v : W.e += $
                    }), S.fs(), delete S._24Q
                }
                on.superClass.setElevation.apply(S, arguments)
            },
            fireShapeChange: function() {
                var $ = this,
                    S = $._59O;
                if (!$._24Q && !jj) {
                    var b = S.size();
                    if (b) {
                        var z = 1,
                            G = S.get(0),
                            C = $._54O;
                        G.e == r && (G.e = C);
                        for (var o = G.e, h = 0; b > z; z++) {
                            G = S.get(z), G.e == r && (G.e = C);
                            var n = I(o, G.e),
                                T = v(o + h, G.e);
                            o = n, h = T - n
                        }
                        $._24Q = 1, $.setTall(h), $.setElevation(o + h / 2), delete $._24Q
                    }
                }
                on.superClass.fireShapeChange.apply($, arguments)
            }
        });
        var Ze = D.SubGraph = function() {
            dg(Ze, this)
        };
        xr("SubGraph", bs, {
            ISubGraph: 1,
            _image: "subGraph_image",
            _icon: "subGraph_icon",
            _8I: function() {
                Ze.superClass._8I.call(this), this.eachChild(function(w) {
                    Ac(w) && w._8I()
                })
            }
        }), D.EdgeGroup = function(k, L) {
            this._70O = k, this._siblings = L;
            for (var V, H, d = 0, z = k.size(), I = $[tf]; z > d; d++)
                if (V = k.get(d).getStyle(tf, !1), V != r) {
                    I = V;
                    break
                }
            I == r && (I = !0);
            var o = S.edgeGroupAgentFunc;
            for (o && (H = o(k), H && H !== k.get(0) && (k.remove(H), k.add(H, 0))), d = 0; z > d; d++) k.get(d).s(tf, I)
        }, xr("EdgeGroup", s, {
            getEdges: function() {
                return this._70O
            },
            size: function() {
                return this._70O.size()
            },
            get: function(p) {
                return this._70O.get(p)
            },
            indexOf: function(o) {
                return this._70O.indexOf(o)
            },
            each: function(u, z) {
                this._70O.each(u, z)
            },
            getSiblings: function() {
                return this._siblings
            },
            eachSiblingEdge: function(Q, w) {
                this._siblings.each(function(k) {
                    k._70O.each(Q, w)
                })
            }
        });
        var Vk = D.JSONSerializer = function(n, k) {
            this.dm = this._dataModel = n, this._hierarchical = k == r ? n.isHierarchicalRendering() : k
        };
        xr("JSONSerializer", s, {
            ms_ac: ["hierarchical"],
            serialize: function(x) {
                return S.stringify(this.toJSON(), x)
            },
            toJSON: function() {
                var Y = this,
                    G = Y.dm,
                    b = G.getRoots(),
                    w = Y.json = {
                        v: S.getVersion(),
                        p: {},
                        a: {},
                        d: []
                    },
                    P = G.getSerializableAttrs();
                G.getInit() && (w.init = G.getInit()), G.getName() && (w.p.name = G.getName()), G.getBackground() && (w.p.background = G.getBackground()), w.p.autoAdjustIndex = G.isAutoAdjustIndex(), w.p.hierarchicalRendering = G.isHierarchicalRendering();
                for (var h in P) {
                    var C = G.a(h);
                    C !== y && Y[$d](h, C, w.a)
                }
                return fo(w.a) && delete w.a, Y._hierarchical ? b.each(Y.serializeData, this) : G.each(function(n) {
                    Y.serializeData(n)
                }), w
            },
            isSerializable: function() {
                return !0
            },
            getProperties: function(X) {
                return X.getSerializableProperties()
            },
            getStyles: function($) {
                return $.getSerializableStyles()
            },
            getAttrs: function(i) {
                return i.getSerializableAttrs()
            },
            serializeData: function(x) {
                var c = this;
                if (c.isSerializable(x)) {
                    var u, F, T, D, W = Xc(x.getClassName()) || x.getClass(),
                        N = new W,
                        w = {
                            c: x.getClassName(),
                            i: x.getId(),
                            p: {},
                            s: {},
                            a: {}
                        };
                    c.json.d.push(w), u = c.getProperties(x);
                    for (F in u) /^_/.test(F) ? (T = x[F], T !== N[F] && c[$d](F.substr(1), T, w.p)) : (D = Rm(F), x[D] && (T = x[D](), T !== N[D]() && c[$d](F, T, w.p)));
                    u = c.getStyles(x);
                    for (F in u) T = x.s(F), T !== N.s(F) && c[$d](F, T, w.s);
                    u = c.getAttrs(x);
                    for (F in u) T = x.a(F), T !== N.a(F) && c[$d](F, T, w.a);
                    fo(w.p) && delete w.p, fo(w.s) && delete w.s, fo(w.a) && delete w.a
                }
                c._hierarchical && x.getChildren().each(c.serializeData, c)
            },
            serializeValue: function(f, E, u) {
                hg(E) ? E = {
                    __a: E._as
                } : E instanceof Bg && (E = {
                    __i: E.getId()
                }), u[f] = E
            },
            deserialize: function(U, f, V) {
                jj = !0;
                var y = this;
                U = y.json = Rr(U) ? S.parse(U) : U, y._82I = {};
                var Z = y.dm,
                    w = new pm,
                    o = new pm,
                    A = 0,
                    g = U.d.length;
                for (eh(U.init) && U.init(Z), Z.setInit(U.init); g > A; A++) {
                    var b = U.d[A],
                        Y = Xc(b.c),
                        p = new Y,
                        K = b.i;
                    V && K != r && (p._id = K), y._82I[K] = p, w.add(p), o.add(b)
                }
                for (A = 0; g > A; A++) y.deserializeData(w.get(A), o.get(A));
                w.each(function(s) {
                    f && !s.getParent() && s.setParent(f), Z.add(s)
                });
                for (var n in U.a) Z.a(n, y[xe](U.a[n]));
                for (var F in U.p) Z[qe(F)](U.p[F]);
                return jj = !1, w
            },
            deserializeData: function(x, s) {
                for (var r in s.p) x[qe(r)](this[xe](s.p[r]));
                for (r in s.s) x.s(r, this[xe](s.s[r]));
                for (r in s.a) x.a(r, this[xe](s.a[r]))
            },
            deserializeValue: function(j) {
                if (Je(j)) {
                    var w = j.__i;
                    if (w != r) return this._82I[w];
                    if (w = j.__a, _o(w)) return new pm(w)
                }
                return j
            }
        }), yd(Wg, {
            serialize: function(n, w) {
                return new Vk(this, w).serialize(n)
            },
            toJSON: function($) {
                return new Vk(this, $).toJSON()
            },
            deserialize: function(V, G, w) {
                return new Vk(this).deserialize(V, G, w)
            }
        }), Dm.GraphView = function(f) {
            var X = this;
            X._24I = {}, X._34I = new pm, X._25I = {}, X._56I = {}, X._view = xq(1, X), X._canvas = Tl(X._view), X.dm(f ? f : new Wg), X.setEditable(!1), X.setScrollBarVisible(S.graphViewScrollBarVisible)
        }, tk("GraphView", s, {
            ms_v: 1,
            ms_gv: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            _52o: 1,
            _51o: 1,
            ms_ac: ["layers", ho, ld, Yp, td, "resettable", "editInteractor", Wr, "pannable", "rectSelectable", "autoScrollZone", Bf, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
            _resettable: S.graphViewResettable,
            _pannable: S.graphViewPannable,
            _rectSelectable: S.graphViewRectSelectable,
            _autoScrollZone: S.graphViewAutoScrollZone,
            _rectSelectBackground: S.graphViewRectSelectBackground,
            _rectSelectBorderColor: S.graphViewRectSelectBorderColor,
            _editPointSize: S.graphViewEditPointSize,
            _editPointBorderColor: S.graphViewEditPointBorderColor,
            _editPointBackground: S.graphViewEditPointBackground,
            _scrollBarColor: zq,
            _scrollBarSize: fr,
            _autoHideScrollBar: Md,
            _autoMakeVisible: ug,
            setEditable: function(E) {
                var g = this,
                    S = Dm.XEditInteractor;
                E ? g.setInteractors([new Fd(g), new jd(g), S ? new S(g) : new Dr(g), new Hm(g), new Dj(g), new Io(g, {
                    editable: !S
                })]) : g.setInteractors([new Fd(g), new jd(g), new Hm(g), new Dj(g), new Io(g, {
                    editable: !1
                })])
            },
            getCanvas: function() {
                return this._canvas
            },
            _33I: function(l) {
                var W = l.getUIClass();
                return W ? new W(this, l) : r
            },
            getDataUI: function(e) {
                var R = this,
                    d = R._25I[e._id];
                return d === y && (d = R._33I(e), R._25I[e._id] = d), d
            },
            getNodeRect: function(U) {
                return S.getNodeRect(this, U)
            },
            getEdgeInfo: function(P) {
                var _ = this.getDataUI(P);
                return _ ? (_._79o(), _._78o) : null
            },
            invalidateAll: function(l) {
                var E = this;
                if (l) {
                    for (var x in E._25I) {
                        var g = E._25I[x];
                        g && g.dispose()
                    }
                    E._25I = {}, E._56I = {}, E._24I = {}, E._34I.clear(), E.redraw()
                } else E.dm().each(function(I) {
                    E.invalidateData(I)
                })
            },
            invalidateSelection: function() {
                var x = this;
                x.sm().each(function(w) {
                    x.invalidateData(w)
                })
            },
            invalidateData: function(r) {
                var z = this;
                z._24I[r._id] = r, z._21Q(r), z.iv()
            },
            _21Q: function($) {
                var O = this,
                    m = O._24I;
                if (_g($) && ue[$.s(cb)]) {
                    var Z = $.getSourceAgent();
                    Z && Z.getAgentEdges().each(function(K) {
                        m[K._id] = K
                    }), Z = $.getTargetAgent(), Z && Z.getAgentEdges().each(function(V) {
                        m[V._id] = V
                    }), O.iv()
                }
            },
            redraw: function(R) {
                var X = this;
                X._32I || (R ? X._34I.add(R) : (X._32I = 1, X._34I.clear()), X.iv())
            },
            each: function(c, J) {
                var K, N, a, E = 0,
                    Q = this._layers,
                    e = this._dataModel,
                    z = e._datas._as,
                    u = z.length;
                if (Q) {
                    for (var _ = Q.length; _ > E; E++)
                        if (a = Q[E], e.isHierarchicalRendering()) {
                            if (this._dataModel.eachByHierarchical(c, null, J) === !1) return
                        } else
                            for (var C = 0; u > C; C++)
                                if (K = z[C], K._layer === a && (N = J ? c.call(J, K) : c(K), N === !1)) return
                } else if (e.isHierarchicalRendering()) this._dataModel.eachByHierarchical(c, null, J);
                else
                    for (; u > E; E++)
                        if (K = z[E], N = J ? c.call(J, K) : c(K), N === !1) return
            },
            reverseEach: function(O, g) {
                var W, G, q, r, P = this._layers,
                    D = this._dataModel,
                    f = D._datas._as,
                    L = f.length;
                if (P) {
                    for (W = P.length - 1; W >= 0; W--)
                        if (r = P[W], D.isHierarchicalRendering()) {
                            if (D.reverseEachByHierarchical(O, null, g) === !1) return
                        } else
                            for (var o = L - 1; o >= 0; o--)
                                if (G = f[o], G._layer === r && (q = g ? O.call(g, G) : O(G), q === !1)) return
                } else if (D.isHierarchicalRendering()) D.reverseEachByHierarchical(O, null, g);
                else
                    for (W = L - 1; W >= 0; W--)
                        if (G = f[W], q = g ? O.call(g, G) : O(G), q === !1) return
            },
            getViewRect: function() {
                return this._29I
            },
            getContentRect: function() {
                var v = this,
                    o = v._84I;
                return o || (v.each(function(R) {
                    v.isVisible(R) && (o = Ap(o, v.getDataUIBounds(R)))
                }), v._84I = o ? o : Kh), v._84I
            },
            getScrollRect: function() {
                return Ap(this.getContentRect(), this._29I)
            },
            makeCenter: function(l, s, K) {
                var p = this;
                if (!p.getWidth() || !p.getHeight()) return K || cf(p.centerData, p, [l, s, !0], 200), void 0;
                p.makeVisible(l), p.validate();
                var H = p.getDataUIBounds(l);
                if (H) {
                    var c = p.getWidth(),
                        $ = p.getHeight(),
                        m = H.x + H.width / 2,
                        P = H.y + H.height / 2,
                        J = -m * p._zoom + c / 2,
                        C = -P * p._zoom + $ / 2;
                    p.setTranslate(J, C, s)
                }
            },
            fitData: function(E, w, v, O, L) {
                var k = this;
                if (!k.getWidth() || !k.getHeight()) return L || cf(k.fitData, k, [E, w, v, O, !0], 200), void 0;
                k.makeVisible(E), k.validate();
                var u = k.getDataUIBounds(E);
                u && (u = Dh(u), qp(u, v == r ? 20 : v), k.fitRect(u, w, O))
            },
            fitContent: function(P, i, Z, D) {
                var F = this;
                if (!F.getWidth() || !F.getHeight()) return D || cf(F.fitContent, F, [P, i, Z, !0], 200), void 0;
                F.validate();
                var f = Dh(F.getContentRect());
                qp(f, i == r ? 20 : i), F.fitRect(f, P, Z)
            },
            fitRect: function(y, b, l) {
                var V = this,
                    e = V.getWidth(),
                    G = V.getHeight(),
                    H = y.x + y.width / 2,
                    Q = y.y + y.height / 2,
                    s = I(e / y.width, G / y.height),
                    t = V._zoom,
                    F = -H * t + e / 2,
                    C = -Q * t + G / 2;
                0 === s || isNaN(s) || (l && (s = I(1, s)), b ? V.setTranslate(F, C, {
                    finishFunc: function() {
                        V.setZoom(s, b)
                    }
                }) : (V.setTranslate(F, C), V.setZoom(s)))
            },
            toCanvas: function(d, K) {
                K = K || this._zoom, this.validateImpl();
                var X = this,
                    l = X.getContentRect();
                l.width || (l.width = 10), l.height || (l.height = 10);
                var H = Tl(),
                    i = l.x * K,
                    N = l.y * K,
                    j = l.width * K,
                    G = l.height * K;
                Oc(H, j, G, 1);
                var P = ng(H);
                return d = d || this._dataModel.getBackground(), d && yj(P, 0, 0, j, G, d), Xk(P, -i, -N), P.scale(K, K), X._42(P), P.restore(), H
            },
            toDataURL: function(b, B, T) {
                return this.toCanvas(b, T).toDataURL(B || "image/png", 1)
            },
            getClipBounds: function() {
                return this._74O
            },
            _42: function(g, X) {
                var V, w, s = this;
                s._93db(g, X), s.each(function(t) {
                    s._56I[t._id] && (V = s.getDataUI(t), V && (w = V._79o(), D.HtmlNode && t instanceof D.HtmlNode ? V._42(g) : (!X || Hi(X, w)) && V._42(g)))
                }), s._92db(g, X)
            },
            validateImpl: function() {
                var a, r, U, Z, _, u = this,
                    K = u.tx(),
                    J = u.ty(),
                    x = u._zoom,
                    e = u._canvas,
                    s = this.getWidth(),
                    G = this.getHeight(),
                    q = u._29I,
                    w = {
                        x: -K / x,
                        y: -J / x,
                        width: s / x,
                        height: G / x
                    },
                    Y = {},
                    W = u._34I,
                    L = u._24I,
                    N = u._32I,
                    S = u._23I;
                (s !== e.clientWidth || G !== e.clientHeight) && (Oc(e, s, G), N = 1), N || pd(w, q) || (N = 1), u._29I = w, u.each(function(a) {
                    r = a._id;
                    var H = Y[r] = u.isVisible(a);
                    H !== u._56I[r] && (L[r] = a, U = u.getDataUI(L[r]), U && U._84o(H), u._84o(a, H))
                }, u);
                for (r in L) U = u.getDataUI(L[r]), U && (!N && u._56I[r] && (_ = U._79o(), _ && W.add(_)), U.invalidate()), u._83I = 1;
                if (u._56I = Y, !N)
                    for (r in L) Y[r] && (U = u.getDataUI(L[r]), U && (_ = U._79o(), _ && W.add(_)));
                if (N ? Z = w : (W.each(function(A) {
                        Hi(w, A) && (Z = Ap(Z, A))
                    }), Z && (qp(Z, v(1, 1 / x)), Z.x = R(Z.x * x) / x, Z.y = R(Z.y * x) / x, Z.width = P(Z.width * x) / x, Z.height = P(Z.height * x) / x, Z = Xn(w, Z))), u._74O = Z, Z && (a = ng(e), me(a, K, J, x), a.beginPath(), a.rect(Z.x, Z.y, Z.width, Z.height), a.clip(), a.clearRect(Z.x, Z.y, Z.width, Z.height), u._42(a, Z), a.restore(), delete u._74O), u._24I = {}, W.clear(), delete u._32I, S && s > 0 && G > 0) {
                    var U = u.getDataUI(S);
                    if (U) {
                        var _ = U._79o(),
                            n = u._29I,
                            I = n.x,
                            B = n.y,
                            F = n.width,
                            z = n.height,
                            x = u._zoom;
                        _ && !Hi(_, n) && (_.x + _.width < I && u.tx(-_.x * x), _.x > I + F && u.tx(-(_.x + _.width - F) * x), _.y + _.height < B && u.ty(-_.y * x), _.y > B + z && u.ty(-(_.y + _.height - z) * x))
                    }
                    delete u._23I
                }
                u._83I && (delete u._83I, delete u._84I), u._98O()
            },
            isScrollBarVisible: function() {
                return !!this._79O
            },
            setScrollBarVisible: function(R) {
                var $ = this;
                R !== $.isScrollBarVisible() && (R ? (Hb($._view, $._79O = gb()), Hb($._79O, $._27I = gb()), Hb($._79O, $._28I = gb())) : (Nl($._79O), delete $._79O, delete $._27I, delete $._28I), $.fp("scrollBarVisible", !R, R))
            },
            showScrollBar: function() {
                var r = this;
                r._79O && (r._85I || (V(function() {
                    r._86I()
                }, dk), r.iv()), r._85I = new Date)
            },
            _86I: function() {
                var P = this;
                if (P._85I) {
                    var a = new Date,
                        T = a.getTime();
                    T - P._85I.getTime() >= dk ? (delete P._85I, P.iv()) : V(function() {
                        P._86I()
                    }, dk)
                }
            },
            _98O: function() {
                var Y = this,
                    o = this._27I,
                    s = this._28I;
                if (Y._79O) {
                    if (Y._autoHideScrollBar && !Y._85I) return o.style.visibility = se, s.style.visibility = se, void 0;
                    var f = Y.getScrollBarColor(),
                        p = Y._zoom,
                        c = Y.getScrollBarSize(),
                        n = Y.getViewRect(),
                        e = Y.getScrollRect(),
                        N = n.height * p,
                        V = e.height * p,
                        u = n.width * p - c - 2,
                        d = N * ((n.y - e.y) * p / V),
                        D = N * (N / V),
                        m = o.style;
                    V - .5 > N ? (vi > D && (d = d + D / 2 - vi / 2, 0 > d && (d = 0), d + vi > N && (d = N - vi), D = vi), Ho(o, u, d, c, D), m.visibility = Jj, m.background = f, m.borderRadius = c / 2 + Yg) : m.visibility = se;
                    var Z = n.width * p,
                        q = e.width * p,
                        d = n.height * p - c - 2,
                        u = Z * ((n.x - e.x) * p / q),
                        M = Z * (Z / q),
                        m = s.style;
                    q - .5 > Z ? (vi > M && (u = u + M / 2 - vi / 2, 0 > u && (u = 0), u + vi > Z && (u = Z - vi), M = vi), Ho(s, u, d, M, c), m.visibility = Jj, m.background = f, m.borderRadius = c / 2 + Yg) : m.visibility = se
                }
            },
            setDataModel: function(r) {
                var h = this,
                    p = h._dataModel,
                    i = h._selectionModel;
                p !== r && (p && (p.ump(h.handleDataModelPropertyChange, h), p.umm(h.handleDataModelChange, h), p.umd(h.handleDataPropertyChange, h), p.removeIndexChangeListener(h._75O, h), p.removeHierarchyChangeListener(h.handleHierarchyChange, h), i || p.sm().ums(h.handleSelectionChange, h)), h._dataModel = r, r.mp(h.handleDataModelPropertyChange, h), r.mm(h.handleDataModelChange, h), r.md(h.handleDataPropertyChange, h), r.addIndexChangeListener(h._75O, h), r.addHierarchyChangeListener(h.handleHierarchyChange, h), i ? i._21I(r) : r.sm().ms(h.handleSelectionChange, h), h.invalidateAll(!0), h.fp(Tr, p, r), h._canvas.style.background = r.getBackground() || "")
            },
            handleDataModelPropertyChange: function(O) {
                if ("background" === O.property) {
                    var h = this._canvas.style.background,
                        a = O.newValue || "";
                    this._canvas.style.background = a, this.fp("canvasBackground", h, a)
                } else "hierarchicalRendering" === O.property && this.redraw()
            },
            handleDataPropertyChange: function(s) {
                this.invalidateData(s.data)
            },
            onPropertyChanged: function(w) {
                var o = this,
                    F = w.property;
                if (o.redraw(), "zoom" === F) {
                    var B = o.sm().getSelection();
                    B.size() && B.each(function(v) {
                        v.invalidate()
                    })
                }
                ak[F] ? o.showScrollBar() : F === Wr && o.onCurrentSubGraphChanged(w)
            },
            onCurrentSubGraphChanged: function() {
                this.reset()
            },
            handleDataModelChange: function(I) {
                var S = this,
                    P = I.kind,
                    N = I.data;
                if (S._83I = 1, "add" === P) S.invalidateData(N), _g(N) && N.getEdgeGroup() && N.getEdgeGroup().eachSiblingEdge(S.invalidateData, S);
                else if (P === Nk) {
                    S._21Q(N);
                    var a = N._id,
                        d = S._25I[a];
                    if (d) {
                        if (S._56I[a]) {
                            var c = d._79o();
                            c && S.redraw(c)
                        }
                        d.dispose(), delete S._25I[a], delete S._24I[a], delete S._56I[a]
                    }
                    N === S._currentSubGraph && S.setCurrentSubGraph(r)
                } else P === Kr && (S.invalidateAll(!0), S.setCurrentSubGraph(r))
            },
            _75O: function(g) {
                this.invalidateData(g.data)
            },
            handleHierarchyChange: function(E) {
                this.invalidateData(E.data)
            },
            adjustIndex: function(b) {
                var n = this;
                if (n.isVisible(b)) {
                    for (var A = b; A._parent && n.isVisible(A._parent);) A = A._parent;
                    A && A !== b && n._dataModel.adjustIndex(A), n._dataModel.adjustIndex(b)
                }
            },
            getSelectWidth: function(M) {
                return M.s("select.width")
            },
            isSelectable: function(B) {
                return !(B.getParent() instanceof D.Block) && B.s("2d.selectable") && this.sm().isSelectable(B)
            },
            isMovable: function(b) {
                var q = this;
                return _g(b) && b.getStyle(cb) !== ai ? !1 : b.s("2d.movable") ? q._movableFunc ? q._movableFunc(b) : !0 : !1
            },
            isEditable: function(B) {
                var Z = this;
                if (!Z._editInteractor || !Z.isSelected(B)) return !1;
                if (rn(B)) {
                    var _ = Z.getDataUI(B);
                    if (!_ || _._88I) return !1
                }
                return _g(B) && B.getStyle(cb) !== ai ? !1 : B.s("2d.editable") ? Z._editableFunc ? Z._editableFunc(B) : !0 : !1
            },
            handleDelete: function() {
                this._editInteractor && (this._editInteractor.handleDelete ? this._editInteractor.handleDelete() : this.removeSelection())
            },
            isPointEditable: function(f) {
                return Ac(f) && 0 !== f.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(f) : !0
            },
            isRectEditable: function(X) {
                return this._rectEditableFunc ? this._rectEditableFunc(X) : !0
            },
            isRotationEditable: function(b) {
                return b.setRotation && b.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(b) : !0 : !1
            },
            getRotationPoint: function(x) {
                var G = x.getAnchor(),
                    I = x.getScale(),
                    V = this._zoom,
                    O = Jl(x.getRotation(), 0, -x.getHeight() * I.y * G.y - (I.y < 0 ? -1 : 1) * (h ? 32 : 16) / V),
                    n = x.p();
                return O.x += n.x, O.y += n.y, O
            },
            getLogicalPoint: function(y) {
                var U = this;
                return Jd(y, U._canvas, U.tx(), U.ty(), U._zoom, U._zoom)
            },
            getSelectedDataAt: function(N) {
                var w = this;
                return this.getDataAt(N, function(h) {
                    return w.isSelected(h)
                })
            },
            getDataAt: function(B, G, V) {
                B.target && (B = this.lp(B));
                var l, v = this._zoom;
                return this.reverseEach(function(K) {
                    return (G ? G(K) : this.isSelectable(K)) && this.rectIntersects(K, Qf(B.x, B.y, V, v)) ? (l = K, !1) : void 0
                }, this), l
            },
            getIconInfoAt: function(n, c) {
                var R = this;
                if (n.target && (n = R.lp(n)), c || (c = R.getDataAt(n)), c) {
                    var G = R.getDataUI(c);
                    if (G && G._38o) {
                        var M, j = G._38o,
                            F = new pm;
                        for (M in j.icons) F.add(M);
                        for (var L = F.size() - 1; L >= 0; L--) {
                            M = F.get(L);
                            for (var d = j.rects[M], W = d.rotation, x = d.length - 1; x >= 0; x--) {
                                var k = d[x],
                                    X = k.width,
                                    Y = k.height,
                                    _ = {
                                        x: n.x - k.x - X / 2,
                                        y: n.y - k.y - Y / 2
                                    };
                                W != r && (_ = Jl(-W, _.x, _.y));
                                var k = {
                                    x: -X / 2,
                                    y: -Y / 2,
                                    width: X,
                                    height: Y
                                };
                                if (db(k, _)) return {
                                    key: M,
                                    index: x,
                                    name: j.icons[M].names[x],
                                    rect: d[x],
                                    point: n,
                                    rotation: W,
                                    relativeRect: k,
                                    relativePoint: _,
                                    data: c
                                }
                            }
                        }
                    }
                }
                return r
            },
            getDatasInRect: function(b, W, S) {
                S === y && (S = 1);
                var h = this,
                    x = new pm;
                return h.reverseEach(function(c) {
                    S && !h.isSelectable(c) || (W ? h.rectIntersects(c, b) : h.rectContains(c, b)) && x.add(c)
                }), x
            },
            moveSelection: function(N, r) {
                var O, D = this,
                    A = D.dm();
                A && (O = A.getHistoryManager()), O && O.beginInteraction(), ln(D.sm().toSelection(D.isMovable, D), N, r), O && O.endInteraction()
            },
            getDataUIBounds: function(G) {
                var k = this.getDataUI(G);
                return k ? k._79o() : r
            },
            drawData: function(Y, z) {
                var E = this.getDataUI(z);
                E && E._42(Y), z instanceof D.Block && z.eachChild(function(P) {
                    this.drawData(Y, P)
                }, this)
            },
            getBoundsForGroup: function(n) {
                return n.s(lc) ? this.getDataUIBounds(n) : r
            },
            rectIntersects: function(N, o) {
                this.validate();
                var x = r;
                if (this._56I[N._id]) {
                    var l = this._25I[N._id];
                    if (l) {
                        var m = l._79o();
                        if (sg(o, m)) x = !0;
                        else if ((o = Xn(o, m)) && (l.rectIntersects && (x = l.rectIntersects(o)), x == r)) {
                            if (!N.s("pixelPerfect")) return !0;
                            var A = o.x,
                                n = o.y,
                                y = o.width,
                                J = o.height,
                                Z = this._zoom,
                                B = S.hitMaxArea,
                                f = y * J * Z * Z;
                            if (f > B) {
                                var i = Math.sqrt(B / f);
                                Z *= i
                            }
                            y *= Z, J *= Z, A *= Z, n *= Z;
                            var s = Wo(y, J);
                            Xk(s, -A, -n), s.scale(Z, Z), this._drawForChecking = !0, this.drawData(s, N), this._drawForChecking = !1;
                            try {
                                for (var u = 0, V = s.getImageData(0, 0, y, J).data; u < V.length; u += 4)
                                    if (0 !== V[u + 3]) {
                                        x = !0;
                                        break
                                    }
                                s.restore()
                            } catch (c) {
                                Fh = r, x = !0
                            }
                        }
                    }
                }
                return x ? !0 : !1
            },
            rectContains: function(i, S) {
                if (this._56I[i._id]) {
                    var q = this._25I[i._id];
                    if (q) return sg(S, q._79o())
                }
                return !1
            },
            reset: function() {
                this.setZoom(1), this.setTranslate(0, 0)
            },
            handleKeyDown: function(i) {
                if (!S.isInput(i.target)) {
                    var H = this,
                        u = H._focusData,
                        M = u && H._25I[u._id],
                        B = 0,
                        e = H._dataModel._datas;
                    if (!(u && u._enabled && u._editable && M && M.onKeyDown && M.onKeyDown(i) === !0))
                        if (9 === i.keyCode && (u && (B = e.indexOf(u), kn(i) ? -1 === --B && (B = 0) : ++B === e.size() && (B = 0)), H._focusData = u = e.get(B), H.sm().setSelection(u)), nq(i) ? H.selectAll() : Pc(i) && H.isResettable() && H.reset(), H.sm().isEmpty()) {
                            if (H._editing) return;
                            var W = H.tx(),
                                R = H.ty(),
                                n = !1,
                                z = kn() ? 100 : 10;
                            es(i) && (W -= z, n = !0), pk(i) && (R -= z, n = !0), rb(i) && (W += z, n = !0), ub(i) && (R += z, n = !0), n && H.setTranslate(W, R)
                        } else {
                            Rd(i) && H.handleDelete(i);
                            var b = kn() ? 10 : 1;
                            es(i) && (H.moveSelection(-b, 0), H.fi({
                                kind: "moveLeft"
                            })), pk(i) && (H.moveSelection(0, -b), H.fi({
                                kind: "moveUp"
                            })), rb(i) && (H.moveSelection(b, 0), H.fi({
                                kind: "moveRight"
                            })), ub(i) && (H.moveSelection(0, b), H.fi({
                                kind: "moveDown"
                            }))
                        }
                }
            },
            handleScroll: function(o, b) {
                ks(o);
                var L = this.lp(o);
                b > 0 ? this.scrollZoomIn(L) : 0 > b && this.scrollZoomOut(L)
            },
            handlePinch: function(n, L, _) {
                this._68I || (L > _ ? this.pinchZoomIn(n) : this.pinchZoomOut(n))
            },
            checkDoubleClickOnNote: function(f, c) {
                var o = this,
                    $ = o.lp(f),
                    Z = o.getDataUI(c),
                    y = Z.note2Info;
                return y && c.s("note2.toggleable") && db(y.clickRect, $) ? (c.s(Vp, !c.s(Vp)), o.fi({
                    kind: "toggleNote2",
                    event: f,
                    data: c
                }), !0) : (y = Z.noteInfo, y && c.s("note.toggleable") && db(y.clickRect, $) ? (c.s(qd, !c.s(qd)), o.fi({
                    kind: "toggleNote",
                    event: f,
                    data: c
                }), !0) : !1)
            },
            _84o: function() {},
            isNoteVisible: function() {
                return this._zoom > .15
            },
            isLabelVisible: function() {
                return this._zoom > .15
            },
            isSelectVisible: function() {
                return this._zoom > .15
            },
            isEditVisible: function() {
                return this._zoom > .15
            },
            autoScroll: function(A, H) {
                var I = this,
                    u = I.getAutoScrollZone(),
                    F = u / I.getZoom(),
                    z = u / 4,
                    d = I._29I,
                    f = I.lp(A),
                    X = {
                        x: I.tx(),
                        y: I.ty()
                    };
                return f && u > 0 && d && (f.x - d.x < F ? I.translate(z, 0) : d.x + d.width - f.x < F && I.translate(-z, 0), f.y - d.y < F ? I.translate(0, z) : d.y + d.height - f.y < F && I.translate(0, -z)), X.x = I.tx() - X.x, X.y = I.ty() - X.y, H && (H.x += X.x, H.y += X.y), X
            },
            getMoveMode: function(r, l) {
                var J = l.s("2d.move.mode");
                return J ? J : zm["88"] ? "x" : zm["89"] ? "y" : "xy"
            }
        });
        var Pp = function(C, s) {
            var E = this;
            E.gv = C, E.s = function(c) {
                return s.getStyle(c)
            }, E._data = s, E._87I = new pm
        };
        Ni(Pp, s, {
            _6I: r,
            ms_icons: 1,
            _84o: function() {},
            dispose: function() {},
            isShadowed: function() {
                return this.s("shadow") || this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
            },
            getSelectWidth: function() {
                var _ = this,
                    R = _.gv.isSelected(_._data);
                return !R || _.isShadowed() ? 0 : _.gv.getSelectWidth(_._data)
            },
            getBodyColor: function(T) {
                var W = this._data,
                    F = this.gv.getBodyColor(W);
                return F ? F : T ? W.getStyle(T) : r
            },
            _2Q: function(n) {
                return this.s(n)
            },
            _1Q: function(O, T, Q, x) {
                var Y = this.s,
                    B = Y(T + ".dash.color");
                O.strokeStyle = B, O.lineWidth = Q, O.stroke(), Y(T + ".dash.3d") && Tp(O, B, Y(T + ".dash.3d.color"), Q, this.gv._zoom, Y(T + ".dash.3d.accuracy")), Ah(O, x)
            },
            invalidate: function() {
                this._6I = r
            },
            _79o: function() {
                var q = this;
                if (!q._6I) {
                    q.labelInfo = q.label2Info = q.noteInfo = q.note2Info = q._38o = r, q._87I.clear(), q._3O();
                    var H = q._data,
                        W = q.gv;
                    q._55O = W.isEditable(H) ? {
                        _42O: W.isRectEditable(H),
                        _43O: W.isPointEditable(H),
                        _56O: W.isRotationEditable(H)
                    } : r, q._6I = q._81o()
                }
                return q._6I
            },
            _3O: function() {},
            getPosition: function() {
                return Kh
            },
            _68o: function(k, z) {
                k && this._87I.add(Co(k, z))
            },
            _81o: function() {
                var X = this,
                    f = X.s;
                X._24O(Vi, "getLabel"), X._24O(tj, "getLabel2"), X._26O(Qe, "getNote"), X._26O(Gl, "getNote2"), X._15O(), X._55O && X._48O();
                var v;
                if (X._87I.each(function(Y) {
                        v = Ap(v, Y)
                    }), v && X.isShadowed()) {
                    var g = Dh(v);
                    g.x += f("shadow.offset.x"), g.y += f("shadow.offset.y"), qp(g, f("shadow.blur")), v = Ap(v, g)
                }
                return X._87I.clear(), v
            },
            _42: function(P) {
                var l = this,
                    U = l._data,
                    T = l.gv,
                    R = l.s,
                    d = R("opacity"),
                    s = this.isShadowed();
                if (s) {
                    var _ = P.shadowOffsetX,
                        i = P.shadowOffsetY,
                        Q = P.shadowBlur,
                        c = P.shadowColor,
                        V = T.getZoom();
                    P.shadowOffsetX = R("shadow.offset.x") * V, P.shadowOffsetY = R("shadow.offset.y") * V, P.shadowBlur = R("shadow.blur") * V, P.shadowColor = R("select.color")
                }
                if (d != r) {
                    var W = P.globalAlpha;
                    P.globalAlpha = d
                }
                l._80o(P), T.isLabelVisible(U) && ((!T._drawForChecking || R("label.selectable")) && ce(P, l.labelInfo), (!T._drawForChecking || R("label2.selectable")) && ce(P, l.label2Info)), T.isNoteVisible(U) && (Cq(P, l.noteInfo), Cq(P, l.note2Info)), l._99O(P), d != r && (P.globalAlpha = W), s && (P.shadowOffsetX = _, P.shadowOffsetY = i, P.shadowBlur = Q, P.shadowColor = c)
            },
            _80o: function() {},
            _47O: function() {},
            _24O: function(f, T) {
                var i = this,
                    s = i._data,
                    R = i.gv,
                    k = i.s,
                    K = R[T](s);
                if (K != r) {
                    var L = k(f + ".scale"),
                        p = k(f + ".max"),
                        a = k(f + ".position"),
                        b = i[f + "Info"] = {
                            label: K,
                            scale: L,
                            color: R[T + "Color"](s),
                            font: k(f + ".font"),
                            opacity: k(f + ".opacity"),
                            align: k(f + ".align"),
                            rotation: i.getRotation(k(f + ".rotation"), !1, a),
                            background: R[T + "Background"](s)
                        },
                        M = rs(b, K);
                    p > 0 && p < M.width && (b.labelWidth = M.width, M.width = p), 1 !== L && (M.width *= L, M.height *= L);
                    var t = i.getPosition(a, k(f + ".offset.x"), k(f + ".offset.y"), M, k(f + ".position.fixed"));
                    if (M.x = t.x - M.width / 2, M.y = t.y - M.height / 2, i._68o(b.rect = M, b.rotation), 1 !== L) {
                        var y = M.width / L,
                            S = M.height / L;
                        b.rect = {
                            x: t.x - y / 2,
                            y: t.y - S / 2,
                            width: y,
                            height: S
                        }
                    }
                }
            },
            _26O: function(Q, i) {
                var M = this,
                    N = M.gv,
                    x = M._data,
                    w = M.s,
                    c = N[i](x);
                if (c != r) {
                    var I, C, G = w(Q + ".scale"),
                        J = M[Q + "Info"] = {
                            note: c,
                            scale: G,
                            data: x,
                            view: N,
                            expanded: w(Q + ".expanded"),
                            font: w(Q + ".font"),
                            color: w(Q + ".color"),
                            opacity: w(Q + ".opacity"),
                            align: w(Q + ".align"),
                            icon: w(Q + ".icon"),
                            backgroundImage: w(Q + ".backgroundImage"),
                            borderWidth: w(Q + ".border.width"),
                            borderColor: w(Q + ".border.color"),
                            background: N[i + "Background"](x)
                        },
                        m = M.getPosition(w(Q + ".position"), w(Q + ".offset.x"), w(Q + ".offset.y")),
                        S = m.x,
                        T = m.y;
                    if (J.expanded) {
                        var X, L = w(Q + ".max"),
                            K = w(Q + ".backgroundImage");
                        K ? (K = Eq(K), X = {
                            width: co(K, x),
                            height: bi(K, x)
                        }) : X = rs(J, c), X.width += 6, X.height += 2, L > 0 && L < X.width && (J.labelWidth = X.width, X.width = L), I = X.width, C = X.height + 8, J.clickRect = {
                            x: S - I * G / 2,
                            y: T - C * G,
                            width: I * G,
                            height: C * G * X.height / C
                        }
                    } else {
                        var U = w(Q + ".icon");
                        U ? (U = Eq(U), I = co(U, x), C = bi(U, x)) : (I = 12, C = 18), J.clickRect = {
                            x: S - I * G / 2,
                            y: T - C * G,
                            width: I * G,
                            height: C * G
                        }
                    }
                    J.rect = {
                        x: S - I / 2,
                        y: T - C * G / 2 - C / 2,
                        width: I,
                        height: C
                    };
                    var $ = P(J.borderWidth / 2) * G;
                    M._68o({
                        x: S - I * G / 2 - $,
                        y: T - C * G - $,
                        width: I * G + 2 * $,
                        height: C * G + 2 * $
                    })
                }
            },
            _48O: function() {},
            _99O: function(A) {
                var C = this,
                    o = C._38o;
                if (o) {
                    var Z = C.gv,
                        R = C._data,
                        g = o.icons;
                    for (var J in g) {
                        var Y = g[J],
                            d = o.rects[J];
                        if (d) {
                            var l = yq(Y.opacity, R, Z),
                                W = yq(Y.names, R, Z),
                                m = W ? W.length : 0,
                                q = d.rotation;
                            if (l != r) {
                                var F = A.globalAlpha;
                                A.globalAlpha *= l
                            }
                            for (var U = 0; m > U; U++) {
                                var k = W[U],
                                    L = Eq(k),
                                    h = d[U];
                                if (q) {
                                    var n = h.x + h.width / 2,
                                        _ = h.y + h.height / 2;
                                    A.save(), Xk(A, n, _), yr(A, q), Xk(A, -n, -_)
                                }
                                Qh(A, L, yq(Y.stretch, R, Z), h.x, h.y, h.width, h.height, C._data, C.gv), q && A.restore()
                            }
                            l != r && (A.globalAlpha = F)
                        }
                    }
                }
            }
        });
        var nc = function(X, w) {
            dg(nc, this, [X, w])
        };
        Ni(nc, Pp, {
            _checkEmptyRect: !0,
            _40O: function(X, S) {
                var Q = this,
                    o = Q.s,
                    K = X.rect;
                if ((X.borderColor = Q.gv.getBorderColor(Q._data)) && (X.borderType = o("border.type"), X.borderWidth = o("border.width"), X.borderPadding = o("border.padding"), S = v(S, X.borderPadding + X.borderWidth / 2)), X.selectWidth = Q.getSelectWidth()) {
                    var B = Q.gv._zoom;
                    X.selectType = o("select.type"), X._97o = o("select.color"), X.selectPadding = o("select.padding"), S = v(S, (X.selectPadding + X.selectWidth / 2) / B)
                }
                if (S > 0) {
                    var U = Q._data.getScale();
                    S *= v(1, v(E(U.x), E(U.y))), K = Dh(K), qp(K, S)
                }
                Q._68o(K)
            },
            _39O: function(m, v) {
                var Y, K = this,
                    A = v.rect;
                if (v.borderWidth > 0 && (Y = v.borderPadding, m.strokeStyle = v.borderColor, m.lineWidth = v.borderWidth, $m(m, v.borderType, {
                        x: A.x - Y,
                        y: A.y - Y,
                        width: A.width + 2 * Y,
                        height: A.height + 2 * Y
                    }), m.stroke()), v.selectWidth > 0) {
                    var f = K.gv._zoom;
                    if (Y = v.selectPadding / f, m.strokeStyle = v._97o, m.lineWidth = v.selectWidth / f, v.rotation != r) {
                        m.save(), m.translate(v.position.x, v.position.y), m.rotate(v.rotation);
                        var T = K._data,
                            H = T.getWidth(),
                            C = T.getHeight(),
                            d = v.scale,
                            M = v.anchor;
                        A = {
                            x: d.x * -H * M.x,
                            y: d.y * -C * M.y,
                            width: d.x * H,
                            height: d.y * C
                        }
                    }
                    $m(m, v.selectType, {
                        x: A.x - Y,
                        y: A.y - Y,
                        width: A.width + 2 * Y,
                        height: A.height + 2 * Y
                    }), v.rotation != r && m.restore(), m.stroke()
                }
            },
            _3O: function() {
                var X = this,
                    Z = X.s,
                    F = X._data,
                    W = F.getStyle(Di),
                    B = X.getBodyColor(),
                    R = X._83o = W ? {
                        shape: W,
                        _53o: X.getBodyColor("shape.background"),
                        _27Q: Eq(Z("shape.repeat.image"), B),
                        shapeGradientPack: Z("shape.gradient.pack"),
                        _54o: Z("shape.border.width"),
                        _55o: Z("shape.border.color"),
                        _56o: Z("shape.border.3d"),
                        _57o: Z("shape.border.3d.color"),
                        _58o: Z("shape.border.3d.accuracy"),
                        shapeGradient: Z("shape.gradient"),
                        _59o: Z("shape.gradient.color"),
                        _60o: Z("shape.border.pattern"),
                        _61o: Z("shape.border.cap"),
                        _62o: Z("shape.border.join")
                    } : {
                        img: Eq(F.getImage(), B),
                        bodyColor: B,
                        stretch: Z("image.stretch")
                    };
                if (O && !Y);
                else {
                    R.rect = F.getRect(), R.position = F.p(), R.scale = F.getScale(), R.anchor = F.getAnchor(), R.rotation = F.getRotation(), W === li && (R._63o = Z("shape.depth"));
                    var u = 0;
                    W ? (u = Pd(r, R._54o / 2, R._62o), X.s("shape.dash") && (u = v(u, (X.s("shape.dash.width") || R._54o) / 2))) : R.img && R.img.boundExtend && (u = yq(R.img.boundExtend, F, X.gv)), X._40O(R, u)
                }
            },
            getPosition: function(W, N, e, s) {
                var d = bf(W, this._83o.rect, s);
                return d.x += N, d.y += e, d
            },
            _80o: function(J) {
                var F = this,
                    s = F.s,
                    m = F.gv,
                    H = F._data,
                    f = F._83o,
                    Z = f.rect,
                    b = f.position,
                    I = f.rotation,
                    N = f.anchor,
                    L = f.scale,
                    z = f.shape;
                if (!F._checkEmptyRect || Z.width > 0 && Z.height > 0) {
                    var B = H.getSize();
                    if (B.x = -B.width * N.x, B.y = -B.height * N.y, J.save(), Xk(J, b.x, b.y), yr(J, I), Vq(J, L.x, L.y), F.freeDraw) F.freeDraw(J, B, f);
                    else if (z) {
                        var A, e, P, l, n = f._60o,
                            Q = up(J, n),
                            d = f._53o,
                            k = f._27Q,
                            Y = f._54o,
                            q = f._55o,
                            O = f.shapeGradientPack,
                            t = J.lineJoin,
                            U = J.lineCap;
                        if ("roundRect" === z ? A = s("shape.corner.radius") : "polygon" === z ? A = s("shape.polygon.side") : "arc" === z && (A = s("shape.arc.from"), e = s("shape.arc.to"), P = s("shape.arc.close"), l = s("shape.arc.oval")), J.lineJoin = f._62o, J.lineCap = f._61o, d || k || O ? ($m(J, z, B, A, e, P, l), O ? We(J, O) : k ? Cr(J, k) : xi(J, d, f.shapeGradient, f._59o, B), J.fill(), O && J.restore(), J !== Q && $m(Q, z, B, A, e, P, l)) : $m(Q, z, B, A, e, P, l), Y > 0) {
                            var x = s("shape.border.width.absolute");
                            x && (J.save(), J.setTransform(1, 0, 0, 1, 0, 0)), J.lineWidth = Y, J.strokeStyle = q, J.stroke(), x && J.restore(), f._56o && Tp(J, q, f._57o, Y, m._zoom, f._58o)
                        }
                        if (Ah(J, n), s("shape.dash")) {
                            var T = s("shape.dash.width") || Y;
                            if (T > 0) {
                                n = s("shape.dash.pattern");
                                var Q = up(J, n, F._2Q("shape.dash.offset"));
                                Q !== J && $m(Q, z, B, A, e, P, l), F._1Q(J, "shape", T, n)
                            }
                        }
                        xp(J, d, f._63o, B), J.lineJoin = t, J.lineCap = U
                    } else Qh(J, f.img, f.stretch, B.x, B.y, B.width, B.height, H, m, f.bodyColor);
                    J.restore()
                }
                F._39O(J, f)
            },
            _48O: function() {},
            _47O: function() {}
        });
        var Do = function(I, i) {
                dg(Do, this, [I, i])
            },
            So = function(Z, q, l, r) {
                var E = ls(Z, q);
                return l = r ? I(l, E) : Ip(l, E), E ? l /= E : l = 0, {
                    x: Z.x + (q.x - Z.x) * l,
                    y: Z.y + (q.y - Z.y) * l
                }
            };
        Ni(Do, Pp, {
            _3O: function() {
                var R, D = this,
                    t = D._data,
                    f = D.gv,
                    d = D.s,
                    h = d(cb),
                    C = t.isLooped(),
                    i = d("edge.width"),
                    M = d("edge.center"),
                    c = d("edge.offset"),
                    l = f.getBorderColor(t),
                    z = l ? d("border.width") : 0,
                    A = D.getSelectWidth(),
                    e = t._40I,
                    V = t._41I,
                    a = D._78o = e && V ? {
                        looped: C,
                        type: h,
                        width: i,
                        center: M,
                        color: D.getBodyColor("edge.color"),
                        borderColor: l,
                        borderWidth: z,
                        _97o: A ? d("select.color") : r,
                        selectWidth: A,
                        pattern: d("edge.pattern"),
                        cap: d("edge.cap"),
                        join: d("edge.join"),
                        is3d: d("edge.3d"),
                        _67o: d("edge.3d.color"),
                        _66o: d("edge.3d.accuracy")
                    } : r;
                if (a) {
                    var Y = S.getEdgeType(h);
                    if (Y) {
                        var $ = Y(t, Ei(D, f, t, C, h), f, D._19Q);
                        $.points && $.points.size() > 1 && (a._4O = $, R = vf(a._4O.points))
                    } else {
                        var L = Vo(f, e, d("edge.source.position"), d("edge.source.offset.x"), d("edge.source.offset.y"), d("edge.source.anchor.x"), d("edge.source.anchor.y")),
                            k = Vo(f, V, d("edge.target.position"), d("edge.target.offset.x"), d("edge.target.offset.y"), d("edge.target.anchor.x"), d("edge.target.anchor.y"));
                        if (h === ai) {
                            var Z = a.points = d(Hc) || Lc,
                                s = Z.size();
                            if (a.segments = d("edge.segments"), !M)
                                if (c) {
                                    var G = So(L, s ? Z.get(0) : k, c, s),
                                        X = So(k, s ? Z.get(s - 1) : L, c, s);
                                    L = G, k = X
                                } else {
                                    var W = yp(f, e),
                                        q = yp(f, V),
                                        P = Xi(L, s ? Z.get(0) : k, W);
                                    P && (L = {
                                        x: P[0],
                                        y: P[1]
                                    }), P = Xi(s ? Z.get(s - 1) : L, k, q), P && (k = {
                                        x: P[0],
                                        y: P[1]
                                    })
                                }
                            R = Ap(vf(a.points), vf(L, k))
                        } else {
                            var u = Ei(D, f, t, C, h);
                            if (D._19Q || (u = -u), C) L = Dh(L), L.x = f.getNodeRect(e).x, a.radius = u, R = {
                                x: L.x - u,
                                y: L.y - u,
                                width: 2 * u,
                                height: 2 * u
                            };
                            else {
                                var T = ls(L, k),
                                    O = Ip(c, T),
                                    G = {
                                        x: O,
                                        y: u
                                    },
                                    X = {
                                        x: T - O,
                                        y: u
                                    },
                                    g = H(k.y - L.y, k.x - L.x),
                                    E = a.mat = new $b(g);
                                if (a.orienAngle = g, a.angle = k.x < L.x ? g + B : g, a.rect = {
                                        x: G.x,
                                        y: G.y,
                                        width: X.x - G.x,
                                        height: 0
                                    }, a.origin = L, G = E.tf(G), G.x += L.x, G.y += L.y, X = E.tf(X), X.x += L.x, X.y += L.y, M) {
                                    var x = {
                                        x: T,
                                        y: 0
                                    };
                                    x = E.tf(x), x.x += L.x, x.y += L.y, R = vf([L, G, X, x]), a.c1 = L, a.c2 = x
                                } else R = vf(G, X);
                                L = G, k = X
                            }
                        }
                        a.sourcePoint = L, a.targetPoint = k
                    }
                    var J = 0;
                    d("edge.dash") && (J = d("edge.dash.width") || i);
                    var w = "square" === a.cap ? .71 : .5;
                    Pd(R, v(J * w, i * w + z + A), a.join), D._68o(R)
                }
            },
            getRotation: function(i, V, M) {
                i = i || 0;
                var E = this._78o;
                if (E) {
                    var t, I = E.angle,
                        X = E.points,
                        S = E._4O;
                    if (I != r) return V ? E.orienAngle + i : I + i;
                    if (S) {
                        var P = S.points;
                        return t = P.size(), gj[M] ? t && 0 === t % 2 ? kh(P.get(t / 2 - 1), P.get(t / 2), V, i) : i : Op[M] ? kh(P.get(0), P.get(1), V, i) : kh(P.get(t - 2), P.get(t - 1), V, i)
                    }
                    if (X) return t = X.size(), gj[M] ? t && 0 === t % 2 ? kh(X.get(t / 2 - 1), X.get(t / 2), V, i) : i : Op[M] ? kh(E.sourcePoint, t ? X.get(0) : E.targetPoint, V, i) : kh(t ? X.get(t - 1) : E.sourcePoint, E.targetPoint, V, i)
                }
                return i
            },
            getPosition: function(k, L, u, p, $) {
                var Q = this._78o;
                if (Q) {
                    var N, I = Q.type,
                        o = Q.points,
                        h = Q._4O,
                        M = Q.sourcePoint,
                        w = Q.targetPoint;
                    if (!I) return Q.looped ? {
                        x: M.x - Q.radius + L,
                        y: M.y + u
                    } : ($ && M && w && (M.x > w.x || M.x === w.x && M.y > w.y) && (k = lk[k], u = -u), N = bf(k, Q.rect, p), N.x += L, N.y += u, N = Q.mat.tf(N), N.x += Q.origin.x, N.y += Q.origin.y, N);
                    if (o) {
                        var N, B = o.size();
                        if (gj[k]) {
                            if (B) {
                                var A = B % 2;
                                if (0 === A) return Zn(o.get(B / 2 - 1), o.get(B / 2), k, L, u, p, $);
                                N = o.get((B - A) / 2)
                            } else N = {
                                x: (M.x + w.x) / 2,
                                y: (M.y + w.y) / 2
                            };
                            return N = bf(k, {
                                x: N.x,
                                y: N.y,
                                width: 0,
                                height: 0
                            }, p), N.x += L, N.y += u, N
                        }
                        return Op[k] ? Zn(M, B ? o.get(0) : w, k, L, u, p, $) : Zn(B ? o.get(B - 1) : M, w, k, L, u, p, $)
                    }
                    if (h) {
                        var X = h.points,
                            B = X.size();
                        if (gj[k]) {
                            var A = B % 2;
                            return 0 === A ? Zn(X.get(B / 2 - 1), X.get(B / 2), k, L, u, p, $) : (N = X.get((B - A) / 2), N = bf(k, {
                                x: N.x,
                                y: N.y,
                                width: 0,
                                height: 0
                            }, p), N.x += L, N.y += u, N)
                        }
                        return Op[k] ? Zn(X.get(0), X.get(1), k, L, u, p, $) : Zn(X.get(B - 2), X.get(B - 1), k, L, u, p, $)
                    }
                }
                return Kh
            },
            _42: function(t) {
                this._78o && Do.superClass._42.call(this, t)
            },
            drawPath: function($, S) {
                $.beginPath();
                var r = S.type,
                    V = S.points,
                    e = S.segments,
                    N = S._4O;
                if (!r || V) {
                    var u = S.sourcePoint,
                        J = u.x,
                        t = u.y,
                        d = S.targetPoint,
                        v = d.x,
                        y = d.y;
                    if (r)
                        if (e) {
                            var _ = new pm({
                                x: J,
                                y: t
                            });
                            _.addAll(V), _.add({
                                x: v,
                                y: y
                            }), Fm($, _, e)
                        } else $.moveTo(J, t), V.each(function(g) {
                            $.lineTo(g.x, g.y)
                        }), $.lineTo(v, y);
                    else S.looped ? $.arc(J, t, S.radius, 0, C, !0) : S.center ? ($.moveTo(S.c1.x, S.c1.y), $.lineTo(J, t), $.lineTo(v, y), $.lineTo(S.c2.x, S.c2.y)) : ($.moveTo(J, t), $.lineTo(v, y))
                } else N && Fm($, N.points, N.segments)
            },
            _80o: function(z) {
                var O = this,
                    e = O.s,
                    $ = O._78o,
                    H = $.width,
                    L = $.selectWidth,
                    w = $.borderWidth,
                    X = $.color,
                    A = z.lineJoin,
                    Z = z.lineCap,
                    r = $.pattern;
                z.lineJoin = $.join, z.lineCap = $.cap, O.drawPath(up(z, r), $);
                var q = e("edge.width.absolute");
                if (q && (z.save(), z.setTransform(1, 0, 0, 1, 0, 0)), L && (z.strokeStyle = $._97o, z.lineWidth = H + 2 * (w + L), z.stroke()), w && (z.strokeStyle = $.borderColor, z.lineWidth = H + 2 * w, z.stroke()), z.strokeStyle = X, z.lineWidth = H, z.stroke(), $.is3d && Tp(z, X, $._67o, H, O.gv._zoom, $._66o), q && z.restore(), Ah(z, r), e("edge.dash")) {
                    r = e("edge.dash.pattern");
                    var x = up(z, r, O._2Q("edge.dash.offset"));
                    x !== z && O.drawPath(x, $), O._1Q(z, "edge", e("edge.dash.width") || H, r)
                }
                z.lineJoin = A, z.lineCap = Z
            },
            _48O: function() {},
            _47O: function() {},
            _71o: function(f, r) {
                var $ = this,
                    y = $._data;
                if ($._19Q = !0, !y.getEdgeGroup()) return f ? y.s("edge.gap") : 0;
                var C, Z = 0,
                    o = 0,
                    u = 0;
                if (y.getEdgeGroup().getSiblings().each(function(O) {
                        O.each(function(D) {
                            if ($.gv.isVisible(D) && D.s(cb) == r) {
                                var A = D.s("edge.gap");
                                C ? (o += u / 2 + A / 2, u = A) : (C = D, u = A), D === y && (Z = o)
                            }
                        })
                    }), f) return o - Z + u;
                var n = Z - o / 2;
                return C && y._40I !== C._40I && ($._19Q = !1), n
            }
        });
        var He = function(z, e) {
            dg(He, this, [z, e])
        };
        Ni(He, nc, {
            _3O: function() {
                var m, x, q = this,
                    T = q.s,
                    Z = q._data,
                    e = q.gv;
                if (q._88I = r, Z.isExpanded() && Z.eachChild(function(u) {
                        var E = e.getBoundsForGroup(u);
                        E && (x || (x = []), x.push(E), m = Ap(m, E))
                    }), m) {
                    var f = e.getLabel(Z),
                        X = T("group.type");
                    m = zj(X, x, m), Hk(m, Z, "group.padding", 1);
                    var H = q._88I = {
                        type: X,
                        rect: m,
                        _64o: m
                    };
                    if (!X && f != r) {
                        var k, L = q.labelInfo = {
                                label: f,
                                color: T("group.title.color"),
                                font: T("group.title.font"),
                                align: T("group.title.align")
                            },
                            $ = rs(L, f),
                            y = $.width,
                            b = $.height,
                            S = T("group.title.align");
                        y > m.width && (m.width = y), L.rect = {
                            y: m.y - b,
                            width: $.width,
                            height: b
                        }, k = S === fp ? m.x : S === th ? m.x + m.width - y : m.x + m.width / 2 - y / 2, L.rect.x = k, H.titleRect = {
                            x: m.x,
                            y: m.y - b,
                            width: m.width,
                            height: b + 1
                        }, H.rect = {
                            x: m.x,
                            y: m.y - b,
                            width: m.width,
                            height: m.height + b
                        }
                    }
                    q._40O(H, T("group.border.width") / 2)
                } else He.superClass._3O.call(q)
            },
            getPosition: function(W, H, I, f) {
                var D = this._88I;
                if (D) {
                    var z = bf(W, D.rect, f);
                    return z.x += H, z.y += I, z
                }
                return He.superClass.getPosition.apply(this, arguments)
            },
            _24O: function(y, T) {
                var R = this._88I;
                (!R || R.type || "label2" === y) && He.superClass._24O.call(this, y, T)
            },
            _80o: function(x) {
                var E = this,
                    o = E._88I;
                if (o) {
                    var S = E._data,
                        G = E.s,
                        n = E.gv,
                        i = o.type,
                        Y = o.rect,
                        A = o._64o,
                        l = o.titleRect,
                        N = E.getBodyColor(),
                        U = Eq(G("group.image"), N),
                        q = G("group.image.stretch"),
                        t = E.getBodyColor("group.background"),
                        L = Eq(G("group.repeat.image"), N),
                        p = G("group.gradient.pack"),
                        y = G("group.gradient"),
                        F = G("group.gradient.color"),
                        X = G("group.depth");
                    if (i) {
                        var Z = G("group.border.pattern"),
                            f = G("group.border.width"),
                            C = x.lineJoin,
                            m = x.lineCap;
                        if (x.lineJoin = G("group.border.join"), x.lineCap = G("group.border.cap"), U) {
                            if (x.save(), $m(x, i, Y), x.clip(), Qh(x, U, q, Y.x, Y.y, Y.width, Y.height, S, n, N), x.restore(), f > 0) {
                                var r = up(x, Z);
                                $m(r, i, Y), x.lineWidth = f, x.strokeStyle = G("group.border.color"), x.stroke(), Ah(x, Z)
                            }
                        } else {
                            var r = up(x, Z);
                            t || L || p ? ($m(x, i, Y), p ? We(x, p) : L ? Cr(x, L) : xi(x, t, y, F, Y), x.fill(), p && x.restore(), x !== r && $m(r, i, Y)) : $m(r, i, Y), f > 0 && (x.lineWidth = f, x.strokeStyle = G("group.border.color"), x.stroke()), Ah(x, Z), i === li && xp(x, t, X, Y)
                        }
                        x.lineJoin = C, x.lineCap = m
                    } else if (U ? Qh(x, U, q, A.x, A.y, A.width, A.height, S, n, E.getBodyColor()) : (t || L) && (L ? Cr(x, L) : xi(x, t, y, F, A), $m(x, li, A), x.fill(), xp(x, t, X, A)), l) {
                        var b = G("group.title.background");
                        yj(x, l.x, l.y, l.width, l.height, b), xp(x, b, X, l)
                    }
                    E._39O(x, o)
                } else He.superClass._80o.call(E, x)
            }
        });
        var Pg = function(y, n) {
            dg(Pg, this, [y, n])
        };
        Ni(Pg, nc, {
            _80o: function() {}
        });
        var qm = function(W, S) {
            dg(qm, this, [W, S])
        };
        Ni(qm, nc, {
            _3O: function() {
                var G = this,
                    O = G._data,
                    m = G.s,
                    P = G.gv,
                    F = O.getPoints(),
                    x = P.getBorderColor(O),
                    B = x ? m("border.width") : 0,
                    H = G.getSelectWidth(),
                    b = m("shape.border.width"),
                    $ = O.getRect(),
                    V = P.getBodyColor(O),
                    a = G._99o = F.isEmpty() ? r : {
                        rect: $,
                        rotation: O.getRotation(),
                        fillRule: m("shape.fill.rule") || "nonzero",
                        scale: O.getScale(),
                        position: O.p(),
                        points: F,
                        segments: O.getSegments(),
                        bodyColor: V,
                        borderColor: x,
                        borderWidth: B,
                        _94o: m("shape.border.3d"),
                        _95o: m("shape.border.3d.color"),
                        _96o: m("shape.border.3d.accuracy"),
                        _97o: H ? m("select.color") : r,
                        selectWidth: H,
                        _53o: m("shape.background"),
                        _27Q: Eq(m("shape.repeat.image"), V),
                        shapeGradientPack: m("shape.gradient.pack"),
                        _54o: b,
                        _55o: m("shape.border.color"),
                        shapeGradient: m("shape.gradient"),
                        _59o: m("shape.gradient.color"),
                        _60o: m("shape.border.pattern"),
                        _61o: m("shape.border.cap"),
                        _62o: m("shape.border.join")
                    };
                if (a) {
                    var s = b * ("square" === a._61o ? .71 : .5) + B + H / G.gv._zoom;
                    if (s) {
                        var j = O.getScale();
                        s *= v(1, v(E(j.x), E(j.y))), $ = Dh($), Pd($, s, a._62o)
                    }
                    G._68o($)
                }
            },
            getPosition: function(m, f, y, Q) {
                var P = this._99o;
                if (P) {
                    var t = bf(m, P.rect, Q);
                    return t.x += f, t.y += y, t
                }
                return Kh
            },
            _42: function(M) {
                this._99o && qm.superClass._42.call(this, M)
            },
            _80o: function(U) {
                var H, s = this,
                    i = s.s,
                    g = s._99o,
                    x = g.position,
                    c = g.scale,
                    l = g.rotation,
                    M = g.bodyColor,
                    X = g.borderWidth,
                    C = g.selectWidth,
                    W = g._53o,
                    z = g._27Q,
                    A = g.shapeGradientPack,
                    w = g._54o,
                    q = g.points,
                    K = g.segments,
                    o = s._data.isClosePath(),
                    G = g.fillRule;
                U.save(), Xk(U, x.x, x.y), yr(U, l), Vq(U, c.x, c.y), Xk(U, -x.x, -x.y);
                var u = g._60o,
                    B = up(U, u),
                    r = U.lineJoin,
                    D = U.lineCap;
                U.lineJoin = g._62o, U.lineCap = g._61o, W || z || A ? (Fm(U, q, K, o), A ? We(U, A) : z ? Cr(U, z) : (H = M ? M : W, xi(U, H, g.shapeGradient, g._59o, g.rect)), U.fill(G), A && U.restore(), B !== U && Fm(B, q, K, o)) : Fm(B, q, K, o);
                var j = i("shape.border.width.absolute");
                if (j && (U.save(), U.setTransform(1, 0, 0, 1, 0, 0)), C && (U.strokeStyle = g._97o, U.lineWidth = w + 2 * (X + C), U.stroke()), X && (U.strokeStyle = g.borderColor, U.lineWidth = w + 2 * X, U.stroke()), w && (H = g._55o, !W && M && (H = M), U.strokeStyle = H, U.lineWidth = w, U.stroke(), g._94o && Tp(U, H, g._95o, w, s.gv._zoom, g._96o)), j && U.restore(), Ah(U, u), i("shape.dash")) {
                    var e = i("shape.dash.width") || w;
                    if (e > 0) {
                        u = i("shape.dash.pattern");
                        var B = up(U, u, s._2Q("shape.dash.offset"));
                        B !== U && Fm(B, q, K, o), s._1Q(U, "shape", e, u)
                    }
                }
                U.lineJoin = r, U.lineCap = D, U.restore()
            },
            _48O: function() {},
            _47O: function() {}
        });
        var pe = function(C, s) {
            dg(pe, this, [C, s])
        };
        Ni(pe, qm, {
            getRotation: function(v, K, I) {
                v = v || 0;
                var M = this._data.getPoints(),
                    S = M.size();
                return S > 1 ? gj[I] ? S && 0 === S % 2 ? kh(M.get(S / 2 - 1), M.get(S / 2), K, v) : v : Op[I] ? kh(M.get(0), M.get(1), K, v) : kh(M.get(S - 2), M.get(S - 1), K, v) : v
            },
            getPosition: function(P, A, p, y, Y) {
                var c = this._data.getPoints(),
                    m = c.size();
                if (m > 1) {
                    if (gj[P]) {
                        var d = m % 2;
                        if (0 === d) return Zn(c.get(m / 2 - 1), c.get(m / 2), P, A, p, y, Y);
                        var l = c.get((m - d) / 2),
                            N = {
                                x: l.x,
                                y: l.y,
                                width: 0,
                                height: 0
                            };
                        return l = bf(P, N, y), l.x += A, l.y += p, l
                    }
                    return Op[P] ? Zn(c.get(0), c.get(1), P, A, p, y, Y) : Zn(c.get(m - 2), c.get(m - 1), P, A, p, y, Y)
                }
                return Kh
            }
        });
        var rh = function(u, P) {
            dg(rh, this, [u, P])
        };
        Ni(rh, nc, {
            _3O: function() {
                var x = this;
                rh.superClass._3O.call(x);
                var j = x.s,
                    e = x._83o;
                x._82o = e.img || e.shape ? r : {
                    background: x.getBodyColor("grid.background"),
                    depth: j("grid.depth"),
                    rect: e.rect,
                    _88o: j("grid.cell.depth"),
                    cellBorderColor: j("grid.cell.border.color"),
                    _89o: j("grid.row.count"),
                    _90o: j("grid.column.count"),
                    block: j("grid.block"),
                    _91o: j("grid.block.color"),
                    _92o: j("grid.block.padding"),
                    _93o: j("grid.block.width")
                }
            },
            _80o: function(P) {
                var h = this,
                    p = h._82o;
                if (!p) return rh.superClass._80o.call(h, P), void 0;
                var g, Q, Z = h._data,
                    S = p.background,
                    $ = p.rect,
                    V = p.block,
                    t = p._91o,
                    l = p._92o,
                    C = p._93o,
                    w = p._88o,
                    T = p.cellBorderColor,
                    z = p._89o,
                    r = p._90o;
                if (S)
                    if (yj(P, $.x, $.y, $.width, $.height, S), xp(P, S, p.depth, $), w)
                        for (g = 0; z > g; g++)
                            for (Q = 0; r > Q; Q++) $ = Z.getCellRect(g, Q), $ && xp(P, S, w, $);
                    else if (T) {
                    for (P.beginPath(), g = 0; z > g; g++)
                        for (Q = 0; r > Q; Q++) $ = Z.getCellRect(g, Q), $ && P.rect($.x, $.y, $.width, $.height);
                    P.strokeStyle = T, P.lineWidth = 1, P.stroke()
                }
                if ("h" === V)
                    for (g = 0; z > g; g++) $ = Ap(Z.getCellRect(g, 0), Z.getCellRect(g, r - 1)), qp($, l), Wq(P, t, $.x, $.y, $.width, $.height, C);
                else if ("v" === V)
                    for (Q = 0; r > Q; Q++) $ = Ap(Z.getCellRect(0, Q), Z.getCellRect(z - 1, Q)), qp($, l), Wq(P, t, $.x, $.y, $.width, $.height, C);
                h._39O(P, h._83o)
            }
        });
        var Ij = function(i, z) {
            dg(Ij, this, [i, z])
        };
        Ni(Ij, nc, {
            _checkEmptyRect: !1,
            _81o: function() {
                var n = this._data,
                    Y = Ij.superClass._81o.call(this),
                    z = n.s("text");
                if (z != r) {
                    var K, V, R = n.s("text.font"),
                        U = n.s("text.align"),
                        l = n.s("text.vAlign"),
                        Q = n.getRotation(),
                        u = ir(R, z),
                        S = u.width,
                        I = u.height;
                    "left" === U ? K = -n.getWidth() / 2 : "center" === U ? K = -u.width / 2 : "right" === U && (K = n.getWidth() / 2 - u.width), "top" === l ? V = -n.getHeight() / 2 : "middle" === l ? V = -u.height / 2 : "bottom" === l && (V = n.getHeight() / 2 - u.height);
                    var a;
                    if (Q) {
                        var x = new $b(Q);
                        a = vf([x.tf(K, V), x.tf(K + S, V), x.tf(K + S, V + I), x.tf(K, V + I)])
                    } else a = {
                        x: K,
                        y: V,
                        width: S,
                        height: I
                    };
                    a.x += n.getPosition().x, a.y += n.getPosition().y, Y = Ap(Y, a)
                }
                return Y
            }
        });
        var Wb = Dm.Interactor = function(r) {
            this.gv = this._graphView = r
        };
        tk("Interactor", s, {
            ms_listener: 1,
            getView: function() {
                return this.gv.getView()
            },
            setUp: function() {
                this.addListeners()
            },
            tearDown: function() {
                this.removeListeners(), this.clear()
            },
            clear: function() {},
            fi: function(Y) {
                this.gv.fi(Y)
            },
            setCursor: function(K) {
                h || (this.getView().style.cursor = K)
            },
            startDragging: function(a) {
                var e = this;
                e._lastClientPoint = Lf(a), e._lastLogicalPoint = e.gv.lp(a), sh(e, a)
            },
            clearDragging: function() {
                var i = this;
                i._lastClientPoint = i._lastLogicalPoint = i._logicalPoint = r
            },
            autoScroll: function(C) {
                return this.gv.autoScroll(C, this._lastClientPoint)
            }
        });
        var Dj = Dm.DefaultInteractor = function(H) {
            dg(Dj, this, [H])
        };
        tk("DefaultInteractor", Wb, {
            handle_mousedown: function(P) {
                ks(P);
                var N = this,
                    $ = N.gv,
                    x = $.getDataAt(P);
                !$.setFocus(P) || $._editing || $._scrolling || (gc(P) ? $.handleDoubleClick(P, x) : $.handleClick(P, x), !Pc() && x || !$.isPannable() || !Yq(P) || ji(P) || (N._tx = $.tx(), N._ty = $.ty(), N.startDragging(P)))
            },
            handleWindowMouseUp: function(c) {
                var V = this,
                    m = V.gv;
                m._panning && (delete m._panning, m.onPanEnded(), V.fi({
                    kind: "endPan",
                    event: c
                })), delete V._tx, delete V._ty, V.clearDragging()
            },
            handle_mousemove: function(T) {
                var x = this,
                    z = x.gv;
                x._hoverTimer && (e(x._hoverTimer), delete x._hoverTimer), x._hoverTimer = V(function() {
                    x.fi({
                        kind: "hover",
                        event: T
                    }), e(x._hoverTimer), delete x._hoverTimer
                }, z.getHoverDelay() || 800)
            },
            handle_touchmove: function(r) {
                this.handle_mousemove(r)
            },
            handleWindowMouseMove: function(r) {
                var x = this,
                    i = x.gv,
                    G = x._lastClientPoint;
                x.fi({
                    kind: i._panning ? "betweenPan" : "beginPan",
                    event: r
                }), i._panning = 1, i.setTranslate(x._tx + r.clientX - G.x, x._ty + r.clientY - G.y)
            },
            handle_mousewheel: function(t) {
                this.gv.handleScroll(t, t.wheelDelta)
            },
            handle_DOMMouseScroll: function(g) {
                2 === g.axis && this.gv.handleScroll(g, -g.detail)
            },
            handle_keydown: function(r) {
                this.gv.handleKeyDown(r)
            }
        });
        var jd = Dm.SelectInteractor = function(H) {
            dg(jd, this, [H])
        };
        tk("SelectInteractor", Wb, {
            _42: function() {
                var F = this,
                    x = F.gv,
                    E = x.getZoom(),
                    M = F.mark,
                    A = F.div;
                A || (A = F.div = gb(), Hb(F.getView(), A));
                var n = {};
                n.x = M.x * E + x.tx(), n.y = M.y * E + x.ty(), n.width = M.width * E, n.height = M.height * E, Ho(A, n), this.intersects() ? (A.style.border = "", A.style.background = x.getRectSelectBackground()) : (A.style.background = "", A.style.border = "1px solid " + x.getRectSelectBorderColor())
            },
            handle_mousedown: function(x) {
                var g = this,
                    l = g.gv;
                if (g._57I = r, !(l._editing || l._scrolling || Pc())) {
                    var f = l.getDataAt(x),
                        k = l.sm();
                    f ? ji(x) ? k.co(f) ? k.rs(f) : k.as(f) : k.co(f) || k.ss(f) : ji(x) || !l.isPannable() ? Yq(x) && (ji(x) || k.cs(), l.isRectSelectable() && (g.startDragging(x), l._77O = 1)) : g._57I = Lf(x)
                }
            },
            handle_mouseup: function(F) {
                var U = this,
                    j = U._57I;
                j && (ls(j, Lf(F)) <= 1 && U.gv.sm().cs(), U._57I = r)
            },
            handleWindowMouseUp: function(e) {
                this.clear(e)
            },
            handleWindowMouseMove: function(y) {
                var k = this,
                    u = k.gv;
                k._logicalPoint = u.lp(y), k.mark ? (k.fi({
                    kind: "betweenRectSelect",
                    event: y
                }), k.autoScroll(y), k.redraw()) : k.fi({
                    kind: "beginRectSelect",
                    event: y
                }), k.mark = vf(k._lastLogicalPoint, k._logicalPoint), k.redraw()
            },
            intersects: function() {
                var Z = this,
                    l = Z._lastLogicalPoint,
                    K = Z._logicalPoint;
                return l.x > K.x || l.y > K.y
            },
            clear: function(n) {
                var m = this,
                    U = m.gv,
                    A = m.mark;
                if (m._57I = r, m._lastLogicalPoint) {
                    if (A) {
                        if (0 !== A.width && 0 !== A.height) {
                            var N = U.getDatasInRect(A, m.intersects());
                            if (!N.isEmpty()) {
                                var O = U.sm(),
                                    G = O.toSelection();
                                N.each(function(w) {
                                    O.co(w) ? G.remove(w) : G.add(w)
                                }), O.ss(G)
                            }
                        }
                        Nl(m.div), delete m.div, delete m.mark, m.redraw(), m.fi({
                            kind: "endRectSelect",
                            event: n
                        }), U.onRectSelectEnded()
                    }
                    m.clearDragging(), delete U._77O
                }
            },
            redraw: function() {
                var I = this;
                I._draw || (I._draw = 1, V(function() {
                    I.mark && I._42(), delete I._draw
                }, 16))
            }
        });
        var Hm = Dm.MoveInteractor = function($) {
            dg(Hm, this, [$])
        };
        tk("MoveInteractor", Wb, {
            handle_mousedown: function(S) {
                var w = this,
                    C = w.gv;
                if (Yq(S) && !C._editing && !C._scrolling && !Pc()) {
                    var J = C.getSelectedDataAt(S);
                    J ? (w._data = J, C.handleMouseDown && C.handleMouseDown(S, J), w.startDragging(S), C.isMovable(J) && (C._moving = 1)) : C._focusData = r
                }
            },
            handleWindowMouseUp: function(l) {
                var _ = this,
                    X = _.gv;
                X.handleMouseUp && X.handleMouseUp(l, _._data), _.clear(l)
            },
            handleWindowMouseMove: function(u) {
                var t = this,
                    z = t._data,
                    i = t.gv,
                    $ = i.getDataModel(),
                    B = $.getHistoryManager();
                if ((!i._93O || !i._93O(u, z)) && i._moving) {
                    var v = t._logicalPoint ? "betweenMove" : "beginMove",
                        T = {
                            kind: v,
                            event: u
                        },
                        g = t._logicalPoint = i.lp(u);
                    B && "beginMove" === v && B.beginInteraction();
                    var E = t._calcShift(v, u),
                        d = E.x,
                        l = E.y,
                        k = t.gv.getMoveMode(u, z);
                    k && ("x" === k ? l = 0 : "y" === k ? d = 0 : "xy" !== k && (d = l = 0)), i.moveSelection(d, l), t._lastLogicalPoint = g, t.autoScroll(u), t.fi(T)
                }
            },
            _calcShift: function() {
                var E = this,
                    _ = E._logicalPoint,
                    b = E._lastLogicalPoint,
                    k = _.x - b.x,
                    D = _.y - b.y;
                return {
                    x: k,
                    y: D
                }
            },
            clear: function(H) {
                var d = this,
                    z = d.gv,
                    i = z.getDataModel(),
                    n = i.getHistoryManager();
                d._lastLogicalPoint && (d._lastLogicalPoint = d._data = z._moving = r, d._logicalPoint && (d.fi({
                    kind: "endMove",
                    event: H
                }), z.onMoveEnded(), n && n.endInteraction()), d.clearDragging())
            }
        });
        var Fd = Dm.ScrollBarInteractor = function(y) {
            dg(Fd, this, [y])
        };
        tk("ScrollBarInteractor", Wb, {
            _41o: function() {
                return this.gv.getViewRect().height < this.gv.getScrollRect().height
            },
            _40o: function() {
                return this.gv.getViewRect().width < this.gv.getScrollRect().width
            },
            isV: function(j) {
                var t = this.gv.getViewRect();
                return this._41o() && (t.x + t.width - this.gv.lp(j).x) * this.gv.getZoom() < wh
            },
            isH: function(x) {
                var N = this.gv.getViewRect();
                return this._40o() && (N.y + N.height - this.gv.lp(x).y) * this.gv.getZoom() < wh
            },
            handle_mousemove: function(L) {
                this.handle_touchmove(L)
            },
            handle_touchmove: function(F) {
                if (!Gi && Yq(F)) {
                    var D = this,
                        s = D.isV(F),
                        l = D.isH(F);
                    (s || l) && D.gv.showScrollBar(), D.gv._scrolling = s || l
                }
            },
            handleWindowMouseUp: function(B) {
                this.handleWindowTouchEnd(B)
            },
            handleWindowTouchEnd: function(z) {
                this._state = this._cp = this._tx = this._ty = this.gv._scrolling = r, this.fi({
                    kind: "endScroll",
                    event: z
                })
            },
            handle_mousedown: function(N) {
                this.handle_touchstart(N)
            },
            handle_touchstart: function(I) {
                var X = this;
                if (X.gv.setFocus(I), ks(I), X.handle_touchmove(I), !(vq(I) > 1) && X.gv._scrolling) {
                    X._cp = Lf(I), X._tx = X.gv.tx(), X._ty = X.gv.ty();
                    var _ = X.isV(I);
                    X._state = _ ? "vScroll" : "hScroll", sh(X, I), X.fi({
                        kind: "beginScroll",
                        event: I
                    })
                }
            },
            handleWindowMouseMove: function(i) {
                this.handleWindowTouchMove(i)
            },
            handleWindowTouchMove: function(p) {
                var d = Lf(p),
                    E = this.gv.getViewRect(),
                    U = this.gv.getScrollRect();
                "vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - d.y) * U.height / E.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - d.x) * U.width / E.width), this.fi({
                    kind: "betweenScroll",
                    event: p
                })
            }
        });
        var Io = Dm.TouchInteractor = function(x, s) {
            s = s || {}, s.selectable === y && (s.selectable = !0), s.movable === y && (s.movable = !0), s.pannable === y && (s.pannable = !0), s.pinchable === y && (s.pinchable = !0), s.editable === y && (s.editable = !0), this.params = s, dg(Io, this, [x])
        };
        tk("TouchInteractor", Wb, {
            ms_edit: 1,
            setUp: function() {
                var Q = this;
                Io.superClass.setUp.call(Q), h && Q.params.editable && Q.gv.setEditInteractor(Q)
            },
            tearDown: function() {
                var U = this;
                Io.superClass.tearDown.call(U), h && U.params.editable && U.gv.setEditInteractor(r)
            },
            clear: function(J) {
                var C = this,
                    P = C.gv,
                    i = P.dm().getHistoryManager();
                P._moving && (C.fi({
                    kind: "endMove",
                    event: J
                }), delete P._moving, P.onMoveEnded(), i && i.endInteraction()), P._panning && (C.fi({
                    kind: "endPan",
                    event: J
                }), delete P._panning, P.onPanEnded()), P._pinching && (C.fi({
                    kind: "endPinch",
                    event: J
                }), delete P._pinching, P.onPinchEnded()), P._editing && (C._46O(J), C._77I = C._node = C._edge = C._shape = C._rect = C._89I = C._index = P._editing = r), C._moving = C._panning = C._pinching = C._editing = C._57I = C._data = C._beginHistory = r, C.clearDragging()
            },
            handle_touchstart: function(d) {
                var F = this;
                if (!F.gv._editing) {
                    ks(d), F._57I = r;
                    var Z = F.params,
                        _ = F.gv,
                        p = _.sm(),
                        B = _.getDataAt(d),
                        v = vq(d);
                    if (1 === v) gc(d) ? _.handleDoubleClick(d, B) : (_.handleClick(d, B), B && (_.handleMouseDown && _.handleMouseDown(d, B), F._data = B)), Z.selectable || (B = r), B ? (p.co(B) || p.ss(B), Z.editable && _.isEditable(B) && F._79I(d, B, !0) ? (F._editing = 1, F.startDragging(d)) : Z.movable && _.isMovable(B) && (F._moving = 1, F.startDragging(d))) : (F._57I = Lf(d), Z.pannable && _.isPannable() && (F._panning = 1, F.startDragging(d), F._translate = {
                        x: _.tx(),
                        y: _.ty()
                    }));
                    else if (Z.pinchable && 2 === v) {
                        F._pinching = 1, F.startDragging(d);
                        var H = _.getView(),
                            Y = _.getZoom(),
                            n = H.getBoundingClientRect(),
                            j = d.touches[0],
                            X = d.touches[1],
                            T = {
                                x: (j.clientX + X.clientX) / 2 - n.left,
                                y: (j.clientY + X.clientY) / 2 - n.top
                            };
                        T.x -= _.tx(), T.y -= _.ty(), T.x /= Y, T.y /= Y, F._p = T, F._d = jl(d)
                    }
                }
            },
            handle_touchend: function(m) {
                var K = this,
                    X = K.gv,
                    g = K._57I,
                    P = K._data;
                g && (ls(g, Lf(m)) <= 1 && X.sm().cs(), K._57I = r), P && X.handleMouseUp && X.handleMouseUp(m, P)
            },
            handleWindowTouchEnd: function(A) {
                this.clear(A)
            },
            handleWindowTouchMove: function(v) {
                var c = this,
                    J = c.gv,
                    s = J.dm().getHistoryManager(),
                    T = vq(v);
                if (1 === T) {
                    if (c._editing && (s && !c._beginHistory && (c._beginHistory = 1, s.beginInteraction()), J._editing = 1, c._78I(v)), c._moving) s && !c._beginHistory && (c._beginHistory = 1, s.beginInteraction()), c.handleMove(v);
                    else if (c._panning) {
                        var V = Lf(v);
                        J.setTranslate(c._translate.x + V.x - c._lastClientPoint.x, c._translate.y + V.y - c._lastClientPoint.y), c.fi({
                            kind: J._panning ? "betweenPan" : "beginPan",
                            event: v
                        }), J._panning = 1
                    }
                } else if (2 === T && c._pinching) {
                    var b = jl(v);
                    J.handlePinch(c._p, b, c._d), c._d = b, c.fi({
                        kind: J._pinching ? "betweenPinch" : "beginPinch",
                        event: v
                    }), J._pinching = 1
                }
            },
            handleMove: function(S) {
                var l = this,
                    F = l.gv,
                    T = F.lp(S);
                F._93O && F._93O(S, l._data) || (F.moveSelection(T.x - l._lastLogicalPoint.x, T.y - l._lastLogicalPoint.y), l._lastLogicalPoint = T, l.autoScroll(S), l.fi({
                    kind: F._moving ? "betweenMove" : "beginMove",
                    event: S
                }), F._moving = 1)
            }
        });
        var D = c.ht,
            Sf = D.graph._editor = {
                Math: {},
                Guide: {}
            };
        Sf.getStyle = function(C) {
            var u, z = Sf.StyleMap;
            return z && (u = z[C], u !== y) ? u : Sf.DefaultStyleMap[C]
        }, Sf.setStyle = function(w, Z) {
            var W = Sf.StyleMap;
            W || (W = Sf.StyleMap = {}), W[w] = Z
        }, Sf.inEdit = function(j) {
            return j._inXEdit === !0
        }, Sf.startEdit = function(L) {
            L._inXEdit = !0, Sf.Inject.doInject(L)
        }, Sf._46O = function(H) {
            H._inXEdit = !1, Sf.Inject.undoInject(H)
        }, Sf.toScreenPosition = function(n, t) {
            var $ = n.tx(),
                w = n.ty(),
                j = n._zoom;
            return new Sf.Math.Vector2(t.x * j + $, t.y * j + w)
        }, Sf.checkHit = function(S, e, l) {
            return S.distanceTo(e) < l ? !0 : !1
        }, Sf.toWorldPosition = function(P, b) {
            var R = P.tx(),
                B = P.ty(),
                N = P._zoom;
            return {
                x: (b.x - R) / N,
                y: (b.y - B) / N
            }
        }, Sf.log = function() {};
        var Nh = Sf.Inject = {
            _modules: []
        };
        Nh.registAsModule = function(V, m) {
            var W = {},
                z = {};
            for (var t in V) {
                var Q = m.prototype[t];
                W[t] = Q
            }
            V.getBackup = function(G) {
                return W[G]
            }, V.getBackups = function() {
                return W
            }, z.doInject = function() {
                for (var E in V) "getBackup" !== E && (m.prototype[E] = V[E])
            }, z.undoInject = function() {
                for (var k in V) "getBackup" !== k && (m.prototype[k] = W[k])
            }, Nh._modules.push(z)
        }, Nh.doInject = function(P) {
            for (var A, y = Nh._modules, O = 0, B = y.length; B > O; O++) A = y[O], A.doInject(P)
        }, Nh.undoInject = function(m) {
            for (var Q, q = Nh._modules, l = 0, R = q.length; R > l; l++) Q = q[l], Q.undoInject(m)
        };
        var Wb = D.graph.EditInteractor = function(o) {
                var V = this,
                    T = U.createElement("canvas");
                T.className = "editCanvas", T.style.position = "absolute", V._styleMap = {}, V._canvas = T, V._context = T.getContext("2d"), Wb.superClass.constructor.call(V, o), V.setAntialias(!1), V._subModules = [new Sf.Anchor(V), new Sf.Rect(V), new Sf.Curve(V), new Sf.MoveHelper(V)], V._gridGuide = new Sf.Guide.Grid(V), V._rectGuide = new Sf.Guide.Rect(V)
            },
            Dr = Wb;
        D.Default.def(Wb, D.graph.Interactor, {
            ms_edit: 1,
            ms_fire: 1
        }), s.defineProperties(Wb.prototype, {
            editDetail: {
                get: function() {
                    var z = !!this._editDetail;
                    return z
                },
                set: function(X) {
                    var f = this,
                        H = f._editDetail;
                    H !== X && (f._editDetail = X, f.gv._editing = X, f.fp("editDetail", H, X))
                }
            },
            gvEditing: {
                get: function() {
                    return this.gv._editing
                },
                set: function(L) {
                    (!this._editDetail || L) && (this.gv._editing = L, L || (this.editDetail = !1))
                }
            },
            editing: {
                get: function() {
                    return this._editing
                },
                set: function(m) {
                    this._editing = m, this.gvEditing = m
                }
            },
            gridEnabled: {
                get: function() {
                    var C = this._gridEnabled;
                    if (!C) return !1;
                    var B = this.gv;
                    return B ? B._zoom < this.getStyle("gridZoomThreshold") ? !1 : !0 : !0
                },
                set: function(g) {
                    g !== this._gridEnabled && (this._gridEnabled = g, this._42())
                }
            },
            alignmentGuideEnabled: {
                get: function() {
                    return this._agEnabled
                },
                set: function(o) {
                    o !== this._agEnabled && (this._agEnabled = o, this._42())
                }
            },
            gridGuide: {
                get: function() {
                    return this._gridGuide
                }
            },
            rectGuide: {
                get: function() {
                    return this._rectGuide
                }
            }
        }), Wb.prototype.getSubModule = function(p) {
            var w, L, v, S = this._subModules;
            for (L = 0, v = S.length; v > L; L++)
                if (w = S[L], w.catalog === p) return w
        }, Wb.prototype.invokeSubModule = function(R, a) {
            var r = this,
                f = r._subModules;
            if (f)
                for (var s, G, h, e = Array.prototype.slice.call(arguments, 2), u = 0, F = f.length; F > u; u++)
                    if (s = f[u], G = s[R], G && (h = G.apply(s, e), h != y && a)) return s
        }, Wb.prototype.invokeSubModuleInverse = function($, r) {
            var v = this,
                N = v._subModules;
            if (N)
                for (var B, e, X, h = Array.prototype.slice.call(arguments, 2), G = N.length - 1; G >= 0; G--)
                    if (B = N[G], e = B[$], e && (X = e.apply(B, h), X != y && r)) return B
        }, Wb.prototype.setUp = function() {
            Sf.log("setUp");
            var P = this,
                V = P.gv,
                z = V.getView(),
                u = P._canvas;
            Wb.superClass.setUp.call(P), V.setEditInteractor(P), V._79O ? z.insertBefore(u, V._79O) : z.appendChild(u), Sf.startEdit(V), P.invokeSubModule("setUp"), V.dm().mm(P._onDataModelChanged, P), V.dm().md(P._onDataPropertyChanged, P)
        }, Wb.prototype.tearDown = function() {
            Sf.log("tearDown");
            var g = this,
                I = g.gv,
                Q = I.getView();
            Wb.superClass.tearDown.call(g), I.dm().umm(g._onDataModelChanged), I.dm().umd(g._onDataPropertyChanged), I.setEditInteractor(null), Q.removeChild(g._canvas), Sf._46O(I), g.invokeSubModule("tearDown")
        }, Wb.prototype._onDataModelChanged = function(v) {
            var w = this;
            ("clear" === v.kind || "remove" === v.kind && w.editDetail && v.data === w.getSubModule("Curve").target) && (w.editDetail = !1, w._42())
        }, Wb.prototype._onDataPropertyChanged = function(H) {
            var V = this;
            if (V.editDetail) {
                var Y = V.getSubModule("Curve"),
                    g = H.data;
                g === Y.target && (g._writing || Y._handleDataChanged())
            }
        }, Wb.prototype.clear = function() {
            Sf.log("clear")
        }, Wb.prototype.redraw = function() {
            this._42()
        }, Wb.prototype._42 = function() {
            var b = this;
            b._drawTimer || (b._drawTimer = V(function() {
                delete b._drawTimer, b.drawImpl()
            }, 0))
        }, Wb.prototype.drawImpl = function() {
            var F;
            for (F in {
                    _42: !0
                }) break;
            return function() {
                var d = this,
                    t = d._canvas,
                    V = d.gv,
                    r = V.getWidth(),
                    $ = V.getHeight(),
                    Z = d._context,
                    w = D.Default.getInternal();
                (t.width !== r || t.height !== $) && w.setCanvas(t, r, $), Z.clearRect(0, 0, t.width, t.height);
                var E = d._getValidSelection();
                Z.save();
                var B = D.Default.devicePixelRatio;
                Z.scale(B, B), d._gridGuide._42(), d._rectGuide._42(), d.invokeSubModuleInverse(F, !1, Z, V, E), Z.restore()
            }
        }(), Wb.prototype._getValidSelection = function() {
            var E = this,
                d = E.gv,
                Y = d.sm().getSelection(),
                k = [];
            return Y.each(function(R) {
                d.isVisible(R) && k.push(R)
            }), k
        }, Wb.prototype.setAntialias = function(H) {
            for (var a, M = this._context, W = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], k = 0, y = W.length; y > k && (a = W[k], !M[a]); k++);
            M[a] = H
        }, Wb.prototype.handle_touchmove = function(p) {
            return this.handle_mousemove(p)
        }, Wb.prototype.handle_mousemove = function(j) {
            if (!D.Default.isDragging()) {
                var c = this;
                (c.editDetail || !Pc()) && (c.gvEditing = !1, c.gv.sm().size() && c._checkEdit(j) && (c.gvEditing = !0))
            }
        }, Wb.prototype.handle_touchstart = function(B) {
            return this.handle_mousedown(B)
        }, Wb.prototype.handle_mousedown = function(x) {
            ks(x);
            var H = this;
            if (H.editDetail || !Pc()) {
                if (gc(x)) {
                    if (H.editDetail) {
                        if (H._tryQuitEditDetailMode(x)) return
                    } else if (H._tryEnterEditDetailMode()) return;
                    if (H.invokeSubModule("handleDoubleClick", !0, x)) return
                }
                var K = H._checkEdit(x);
                K && (H._downPosition = H._getLogicalPoint(x), K.startEdit(H, x), H.editing = !0)
            }
        }, Wb.prototype._checkEdit = function(z) {
            var q = this,
                n = q.gv,
                v = q._getLogicalPoint(z),
                S = q.invokeSubModule("check", !0, n, z, v) || null;
            return q._editMod = S, S
        }, Wb.prototype.handleWindowTouchMove = function(D) {
            return this.handleWindowMouseMove(D)
        }, Wb.prototype.handleWindowMouseMove = function(v) {
            var e = this,
                w = e._downPosition;
            if (w) {
                var h = e._getLogicalPoint(v);
                if (h.distanceTo(w) < e.getStyle("moveSensitivity")) return;
                delete e._downPosition
            }
            var u = e._editMod;
            u && u.handleEdit(e.gv, v)
        }, Wb.prototype._getLogicalPoint = function(I) {
            var x = this,
                G = D.Default.getLogicalPoint(I, x._canvas);
            return new Sf.Math.Vector2(G)
        }, Wb.prototype.handleWindowTouchEnd = function(d) {
            return this.handleWindowMouseUp(d)
        }, Wb.prototype.handleWindowMouseUp = function() {
            var B;
            for (B in {
                    _46O: !0
                }) break;
            return function() {
                var D = this;
                D.editing = !1, D.setCursor("default"), D.invokeSubModule(B, !1), D._42()
            }
        }(), Wb.prototype.handle_mousewheel = function(N) {
            var o = this;
            ks(N), o.invokeSubModule("preHandleScroll", !0) || o.gv.handleScroll(N, N.wheelDelta)
        }, Wb.prototype.handleDelete = function() {
            var X = this;
            return X.editDetail ? (X.invokeSubModule("handleDelete", !0), X._42(), void 0) : (X.gv.removeSelection(), void 0)
        }, Wb.prototype.handle_keydown = function(t) {
            var a = this;
            if ((t.metaKey || t.ctrlKey) && a._42(), Pc(t) && !a.editing) return a.gvEditing = !1, a.setCursor("default"), a._42(), void 0;
            var l = uj(t);
            return a.editDetail ? ((l || Go(t)) && (a.editDetail = !1, a._42()), a.invokeSubModule("handle_keydown", !0, t), void 0) : (l && a._tryEnterEditDetailMode(), void 0)
        }, Wb.prototype._tryEnterEditDetailMode = function() {
            var w = this;
            return !w.editDetail && w.invokeSubModule("canEnterEditDetailMode", !0) && 1 === w._getValidSelection().length ? (w.editDetail = !0, w._42(), !0) : void 0
        }, Wb.prototype._tryQuitEditDetailMode = function(p) {
            var F = this;
            if (F.editDetail) {
                var t = F.gv,
                    O = F.getSubModule("Curve").target;
                return t.getDataAt(p) !== O ? (F.editDetail = !1, F._42(), !0) : void 0
            }
        }, Wb.prototype.setStyle = function(e, r, o) {
            var A = this;
            o ? Sf.setStyle(e, r) : A._styleMap[e] = r, A._42()
        }, Wb.prototype.getStyle = function(b) {
            var Z = this,
                p = Z._styleMap[b];
            return p !== y ? p : Sf.getStyle(b)
        };
        var ic = Sf.Group = function(H) {
            var q = this;
            q._entities = H, q._64O = 0, q._position = {
                x: 0,
                y: 0
            }, q._scale = {
                x: 1,
                y: 1
            }, q._anchor = {
                x: .5,
                y: .5
            }, q._anchor2 = {
                x: .5,
                y: .5
            }
        };
        ic.prototype = {}, ic.prototype.constructor = ic;
        var Qd = null;
        ic.findOrCreateGroup = function(Y) {
            if (Qd && Qd.checkIsMe(Y)) return Qd;
            var _ = new Sf.Group(Y);
            return _.getKeyOb() ? (Qd = _, _) : void 0
        }, ic.prototype.checkIsMe = function(c) {
            var n = this._entities;
            if (n.length !== c.length) return !1;
            var T, q = {},
                B = c.length;
            for (T = 0; B > T; T++) q[c[T]._id] = !0;
            for (T = 0; B > T; T++)
                if (!q[n[T]._id]) return !1;
            return !0
        }, ic.prototype.getRotation = function() {
            return this._64O
        }, ic.prototype.getPosition = function() {
            return this._position
        }, ic.prototype.getAnchor = function() {
            return this._anchor
        }, ic.prototype.getWidth = function() {
            return this._width
        }, ic.prototype.getScale = function() {
            return this._scale
        }, ic.prototype.getSize = function() {
            return {
                width: this._width,
                height: this._height
            }
        }, ic.prototype.getHeight = function() {
            return this._height
        }, ic.prototype.getKeyOb = function() {
            for (var H = this._entities, q = H.length - 1; q >= 0; q--) {
                var V = H[q];
                if (this.isNode(V)) return V
            }
        }, ic.prototype.getAnchor2 = function() {
            var T = this,
                w = T.getKeyOb();
            if (!w) return T._anchor;
            var t = T._anchor2,
                A = w.getMatrix();
            return A.tf({
                x: w.getWidth() * (t.x - w.getAnchor().x),
                y: w.getHeight() * (t.y - w.getAnchor().y)
            })
        }, ic.prototype.setAnchor2 = function(p, C) {
            var i = this,
                e = i.getKeyOb();
            if (e) {
                var W, x = e.getMatrix();
                W = "number" == typeof p ? {
                    x: p,
                    y: C
                } : p;
                var D = x.tfi(W);
                i._anchor2 = {
                    x: e.getAnchor().x + D.x / e.getWidth(),
                    y: e.getAnchor().y + D.y / e.getHeight()
                }
            }
        }, ic.prototype.addRotation = function(v) {
            var L = this,
                G = L._anchor2;
            L._entities.forEach(function(x) {
                if (L.isNode(x)) {
                    var E = x.getAnchor(),
                        d = x.getMatrix(),
                        h = d.tf({
                            x: x.getWidth() * (G.x - E.x),
                            y: x.getHeight() * (G.y - E.y)
                        }),
                        V = new Sf.Math.Matrix2;
                    V.set(d.a, d.b, d.c, d.d, d.tx, d.ty), V.translate(-h.x, -h.y), V.rotate(v), V.translate(h.x, h.y);
                    var w = Math.sign(x.getScale().x);
                    x.setRotation(H(V.b * w, V.a * w)), x.setPosition(V.tx, V.ty)
                }
            })
        }, ic.prototype.setPosition = function(l) {
            var g, V, Z, s, x = this,
                Y = x._position,
                E = l.x - Y.x,
                h = l.y - Y.y,
                Q = x._entities;
            for (V = 0, Z = Q.length; Z > V; V++) g = Q[V], Ac(g) && (s = g.getPosition(), g.setPosition(s.x + E, s.y + h));
            x._position = l
        }, ic.prototype.setScale = function(J, K) {
            var O = this,
                z = J / O._scale.x,
                d = K / O._scale.y;
            O._adjustChildScaleOrSize(z, d, "size"), O._scale = {
                x: J,
                y: K
            }
        }, ic.prototype.getRect = function() {
            var l = this,
                u = l._position,
                v = l._width,
                L = l._height;
            return {
                x: u.x - v / 2,
                y: u.y - L / 2,
                width: v,
                height: L
            }
        }, ic.prototype.setSize = function(c, J) {
            var S = this,
                c = Math.max(1, c),
                J = Math.max(1, J),
                t = c / S._width,
                M = J / S._height;
            S._adjustChildScaleOrSize(t, M, "size"), S._width = c, S._height = J
        }, ic.prototype._adjustChildScaleOrSize = function(I, J, s) {
            var w, y, o, z, h, N, S, g, V, v, U, m, M, c, B = this,
                Y = B._position,
                T = B._entities,
                e = new Sf.Math.Matrix2;
            for (y = 0, o = T.length; o > y; y++)
                if (w = T[y], B.isNode(w)) {
                    if (z = w.getPosition(), h = w.getRotation(), N = w.getWidth(), S = w.getHeight(), g = w.getScale(), U = g.x * N, m = g.y * S, e.identity().scale(U, m).rotate(h).translate(z.x, z.y).translate(-Y.x, -Y.y).rotate(-B._64O), h = H(e.b * Math.sign(U), e.a * Math.sign(U)), e.scale(I, J), V = Math.cos(h), v = Math.sin(h), Math.abs(V) < .001 ? (M = e.b / v, c = -e.c / v) : (M = e.a / V, c = e.d / V), "scale" === s) w.setScale(M / N, c / S);
                    else if ("size" === s) {
                        var A = M / g.x,
                            E = c / g.y;
                        w.setScale(kd(M) * Math.abs(g.x), kd(c) * Math.abs(g.y)), w.setSize(Math.max(.1, Math.abs(A)), Math.max(.1, Math.abs(E)))
                    }
                    e.rotate(B._64O).translate(Y.x, Y.y), w.setPosition(e.tx, e.ty)
                }
        }, ic.prototype.getMatrix = function() {
            var H = this,
                t = H._position,
                j = D.Default.getInternal(),
                A = H._scale;
            return new j.Mat(H._64O, t.x, t.y, A.x, A.y)
        }, ic.prototype.getCorners = function() {
            var S = this,
                f = S._width,
                w = S._height,
                d = S._anchor,
                r = -f * d.x,
                M = -w * d.y,
                l = S.getMatrix();
            return [l.tf(r, M), l.tf(r, M + w), l.tf(r + f, M + w), l.tf(r + f, M)]
        }, ic.prototype.calcInfo = function() {
            var X, q, V, Q, J, U, u = this,
                P = [],
                N = u._entities,
                T = u._64O;
            for (Q = 0, J = N.length; J > Q; Q++) U = N[Q], u.isNode(U) && U.getCorners && P.push.apply(P, U.getCorners());
            if (P.length) {
                var j = Math.cos(-T),
                    M = Math.sin(-T),
                    H = 1 / 0,
                    w = -1 / 0,
                    s = 1 / 0,
                    y = -1 / 0;
                for (Q = 0, J = P.length; J > Q; Q++) V = P[Q], X = V.x, q = V.y, V.x = j * X - M * q, V.y = M * X + j * q, H = Math.min(H, V.x), w = Math.max(w, V.x), s = Math.min(s, V.y), y = Math.max(y, V.y);
                u._width = (w - H) / u._scale.x, u._height = (y - s) / u._scale.y, j = Math.cos(T), M = Math.sin(T);
                var Y = u._anchor;
                X = H + (w - H) * Y.x, q = s + (y - s) * Y.y, u._position = {
                    x: j * X - M * q,
                    y: M * X + j * q
                }
            }
        }, ic.prototype.isNode = function(O) {
            return Ac(O) ? O instanceof D.Group && O.isExpanded() ? !1 : !0 : !1
        }, ic.prototype._42 = function(U, K, b) {
            var p, J, X, F, q, Z, n, N = this,
                v = N._entities,
                j = N.getKeyOb();
            for (p = 0, J = v.length; J > p; p++) X = v[p], N.isNode(X) && (Z = X.getRect(), F = Sf.toScreenPosition(b, {
                x: Z.x,
                y: Z.y
            }), q = Sf.toScreenPosition(b, {
                x: Z.x + Z.width,
                y: Z.y + Z.height
            }), n = {
                min: F,
                max: q
            }, X === j && (n.isKeyOb = !0), Sf.Icons.DrawIcon(U, K, Sf.Icons.GroupSubEntityRect, n))
        };
        var If = Sf.Guide.Grid = function(m) {
            var F = this;
            F._interactor = m, F._alignmentGuideId = 0, F._xAlignmentGuide = [], F._yAlignmentGuide = []
        };
        If.prototype = {}, If.prototype.constructor = If, s.defineProperties(If.prototype, {
            gridBlockSize: {
                get: function() {
                    var J = this;
                    return J._gridBlockSize || J._interactor.getStyle("gridBlockSize")
                },
                set: function(N) {
                    this._gridBlockSize = N, this._interactor._42()
                }
            },
            gridThickLinesEvery: {
                get: function() {
                    var M = this;
                    return M._gridThickLinesEvery || M._interactor.getStyle("gridThickLinesEvery")
                },
                set: function(W) {
                    this._gridThickLinesEvery = W, this._interactor._42()
                }
            }
        }), If.prototype._42 = function() {
            var s = this,
                Y = s._interactor;
            Y.gridEnabled && s.drawGrid(), Y.alignmentGuideEnabled && s.drawAlignmentGuide()
        }, If.prototype.drawAlignmentGuide = function() {
            var n = this,
                f = n._interactor,
                q = f.gv,
                G = f._canvas,
                i = f._context,
                J = G.width,
                V = G.height,
                F = q.tx(),
                b = q.ty(),
                X = q._zoom;
            i.beginPath(), i.strokeStyle = f.getStyle("gridAlignmentGuideColor"), i.lineWidth = 1, n._xAlignmentGuide.forEach(function(P) {
                var t = P.p * X + F;
                i.moveTo(t, 0), i.lineTo(t, V)
            }), n._yAlignmentGuide.forEach(function(v) {
                var Y = v.p * X + b;
                i.moveTo(0, Y), i.lineTo(J, Y)
            }), i.stroke()
        }, If.prototype.drawGrid = function() {
            var U, t, e, l = this,
                R = l._interactor,
                L = l.gridBlockSize,
                J = l.gridThickLinesEvery,
                h = R.getStyle("gridThickColor"),
                H = R.getStyle("gridLightColor"),
                V = R.gv,
                F = R._canvas,
                P = R._context,
                D = F.width,
                m = F.height,
                a = Sf.toWorldPosition(V, {
                    x: 0,
                    y: 0
                }),
                o = Sf.toWorldPosition(V, {
                    x: D,
                    y: m
                }),
                O = Math.ceil(a.x / L),
                C = Math.floor(o.x / L),
                W = Math.ceil(a.y / L),
                v = Math.floor(o.y / L),
                u = V.tx(),
                E = V.ty(),
                n = V._zoom;
            for (P.lineWidth = 1, P.beginPath(), P.strokeStyle = h, e = Math.ceil(O / J) * J; C >= e; e += J) U = e * L * n + u, P.moveTo(U, 0), P.lineTo(U, m);
            for (e = Math.ceil(W / J) * J; v >= e; e += J) t = e * L * n + E, P.moveTo(0, t), P.lineTo(D, t);
            for (P.stroke(), P.beginPath(), P.strokeStyle = H, e = O; C >= e; e++) 0 !== e % J && (U = e * L * n + u, P.moveTo(U, 0), P.lineTo(U, m));
            for (e = W; v >= e; e++) 0 !== e % J && (t = e * L * n + E, P.moveTo(0, t), P.lineTo(D, t));
            P.stroke()
        }, If.prototype.getAlignmentGuides = function() {
            var A = this;
            return {
                x: A._xAlignmentGuide,
                y: A._yAlignmentGuide
            }
        }, If.prototype.addAlignmentGuide = function(x, e, S) {
            var D = this,
                A = "x" === x ? D._xAlignmentGuide : D._yAlignmentGuide,
                S = S ? S : ++D._alignmentGuideId,
                T = {
                    p: e,
                    id: S
                };
            if (A.length) {
                var w = D._findClosestAlignmentGuide(T.p, A);
                w.dis < 0 ? A.splice(w.index + 1, 0, T) : A.splice(w.index, 0, T)
            } else A.push(T);
            return D._interactor._42(), S
        }, If.prototype.findClosest = function(l, T, X) {
            var O = this,
                S = O._interactor,
                D = S.gv;
            X && (l = Sf.toWorldPosition(D, l));
            var t, x, d, A = 1 / 0,
                V = 1 / 0,
                i = l.x,
                M = l.y;
            if (S.gridEnabled) {
                var p = O.gridBlockSize;
                A = Math.round(i / p) * p - i, V = Math.round(M / p) * p - M, d = !0
            }
            if (S.alignmentGuideEnabled && (t = O._findClosestAlignmentGuide(i, O._xAlignmentGuide).dis, x = O._findClosestAlignmentGuide(M, O._yAlignmentGuide).dis, Math.abs(t) < Math.abs(A) && (A = t, d = !0), Math.abs(x) < Math.abs(V) && (V = x, d = !0)), d) {
                d = !1;
                var o = D._zoom,
                    r = S.getStyle("smartGuideSensitivity") / o,
                    e = {};
                if (Math.abs(A) < r && "y" !== T && (e.x = X ? A * o : A, d = !0), Math.abs(V) < r && "x" !== T && (e.y = X ? V * o : V, d = !0), d) return e
            }
        }, If.prototype._findClosestAlignmentGuide = function(d, S) {
            if (!S.length) return {
                dis: 1 / 0
            };
            for (var K, Q = 0, M = S.length - 1; M - Q > 1;) K = Math.floor((Q + M) / 2), S[K].p < d ? Q = K : M = K;
            var B = S[Q].p - d,
                C = S[M].p - d;
            return Math.abs(B) <= Math.abs(C) ? {
                line: S[Q],
                dis: B,
                index: Q
            } : {
                line: S[M],
                dis: C,
                index: M
            }
        }, If.prototype.removeAllAlignmentGuide = function(Z) {
            var k = this;
            "y" !== Z && (k._xAlignmentGuide = []), "x" !== Z && (k._yAlignmentGuide = []), k._interactor._42()
        }, If.prototype.removeAlignmentGuide = function(O) {
            var y, L, I, s = this,
                h = s._xAlignmentGuide;
            for (k = 0; 2 > k; k++)
                for (h = 0 === k ? s._xAlignmentGuide : s._yAlignmentGuide, y = 0, L = h.length; L > y; y++)
                    if (I = h[y], I.id === O) return h.splice(y, 1), s._interactor._42(), {
                        axis: 0 === k ? "x" : "y",
                        position: I.p
                    };
            return !1
        }, If.prototype.adjustAlignmentGuide = function(J, C) {
            var I = this,
                d = I.removeAlignmentGuide(J);
            return d ? (I.addAlignmentGuide(d.axis, C, J), !0) : !1
        };
        var he = Sf.Guide.Rect = function(S) {
            var e = this;
            e._interactor = S
        };
        he.prototype = {}, he.prototype.constructor = he, he.prototype.gatherRects = function() {
            var N = this,
                T = N._interactor.gv,
                R = [],
                k = [],
                I = {
                    x: R,
                    y: k
                },
                S = {};
            T.getDataModel().each(function(V) {
                if (Ac(V) && !T.isSelected(V) && T.isVisible(V)) {
                    var P = !1;
                    if (T.sm().getSelection().each(function(n) {
                            P || (V.isHostOn(n) ? P = !0 : V.isDescendantOf(n) && (P = !0))
                        }), !P) {
                        var b = V.getRect(),
                            Q = b.x,
                            x = b.y,
                            l = b.width,
                            v = b.height;
                        R.push({
                            node: V,
                            type: 0,
                            p: Q
                        }, {
                            node: V,
                            type: 1,
                            p: Q + l / 2
                        }, {
                            node: V,
                            type: 2,
                            p: Q + l
                        }), k.push({
                            node: V,
                            type: 0,
                            p: x
                        }, {
                            node: V,
                            type: 1,
                            p: x + v / 2
                        }, {
                            node: V,
                            type: 2,
                            p: x + v
                        }), S[V._id] = b
                    }
                }
            }), R.sort(function(z, S) {
                return z.p - S.p
            }), k.sort(function(Y, s) {
                return Y.p - s.p
            }), N._grid = I, N._87I = S
        }, he.prototype.gatherLines = function(c, a, E) {
            var W, D, F, I, V, T, N, K, q, i, k, l, Y = this,
                b = [Y.findClosest({
                    x: c.x,
                    y: c.y
                }, a), Y.findClosest({
                    x: c.x + c.w / 2,
                    y: c.y + c.h / 2
                }, a), Y.findClosest({
                    x: c.x + c.w,
                    y: c.y + c.h
                }, a)],
                U = {},
                Q = Y._87I;
            E = E || 255;
            var O;
            for (Y._guideLine = [], W = 0; 2 > W; W++)
                for (U = {}, 0 === W ? (I = "y", K = c.x, q = K + c.w) : (I = "x", K = c.y, q = K + c.h), D = 0; 3 > D; D++) V = b[D], V && isFinite(V[I]) && (O = 1 << 3 * W + D, E & O && (T = V[I + "Line"], N = T.node, U[N._id] || (U[N._id] = !0, l = Q[N._id], "y" === I ? (i = l.x, k = l.x + l.width) : (i = l.y, k = l.y + l.height), F = T.p, Y._guideLine.push({
                    type: I,
                    a: K,
                    b: q,
                    c: i,
                    d: k,
                    p: F
                }))))
        }, he.prototype._binarySearchClosest = function(G, k) {
            if (!k.length) return {
                dis: 1 / 0
            };
            for (var Z, y = 0, f = k.length - 1; f - y > 1;) Z = Math.floor((y + f) / 2), k[Z].p < G ? y = Z : f = Z;
            var J = k[y].p - G,
                c = k[f].p - G;
            return Math.abs(J) <= Math.abs(c) ? {
                line: k[y],
                dis: J
            } : {
                line: k[f],
                dis: c
            }
        }, he.prototype.findClosest = function(Q, N, e) {
            var G = this,
                R = G._interactor,
                y = R.gv,
                T = G._grid;
            e && (Q = Sf.toWorldPosition(y, Q));
            var O, S = G._binarySearchClosest(Q.x, T.x),
                z = G._binarySearchClosest(Q.y, T.y),
                B = S.dis,
                o = z.dis,
                Z = y._zoom,
                C = R.getStyle("smartGuideSensitivity") / Z,
                E = {};
            return Math.abs(B) < C && "y" !== N && (E.x = e ? B * Z : B, E.xLine = S.line, O = !0), Math.abs(o) < C && "x" !== N && (E.y = e ? o * Z : o, E.yLine = z.line, O = !0), O ? E : void 0
        }, he.prototype._42 = function() {
            var L = this,
                X = L._guideLine;
            if (X && !D.Default.isCtrlDown()) {
                var H, M, v, J, g, n, B, O, t, z, f, r, i, h, T, F, R, Q = L._interactor,
                    m = Q.gv,
                    p = Q._context,
                    K = m.tx(),
                    b = m.ty(),
                    P = m._zoom,
                    N = Q.getStyle("guideLineTextSpacing");
                for (H = 0, M = X.length; M > H; H++) v = X[H], O = v.type, t = v.p, z = v.a, f = v.b, r = v.c, i = v.d, h = Math.min(z, r), T = Math.max(f, i), "x" === O ? (J = t * P + K, g = h * P + b, n = J, B = T * P + b) : (J = h * P + K, g = t * P + b, n = T * P + K, B = g), Sf.Icons.DrawIcon(Q, p, Sf.Icons.MoveLineGuide, [J, g, n, B]), i >= z && f >= r || (h = z > i ? i : f, T = z > i ? z : r, R = T - h, "x" === O ? (v.center2center || (J -= N, n = J), g = h * P + b, B = T * P + b, F = Sf.Icons.MoveLineGuideDistanceV) : "y" === O && (v.center2center || (g -= N, B = g), J = h * P + K, n = T * P + K, F = Sf.Icons.MoveLineGuideDistanceH), Sf.Icons.DrawIcon(Q, p, F, {
                    x0: J,
                    y0: g,
                    x1: n,
                    y1: B,
                    dis: R
                }))
            }
        }, he.prototype.clear = function() {
            this._guideLine = null
        }, Sf.DefaultStyleMap = {
            pointSize: [24, 9],
            checkSize: 7,
            rotateCheckSize: 10,
            moveSensitivity: 10,
            rotateRound: Math.PI / 2,
            rotateSensitivity: Math.PI / 60,
            shiftRotateRound: Math.PI / 12,
            shiftLineRotateRound: Math.PI / 4,
            anchorMovable: !0,
            anchorVisible: !0,
            anchorRound: .25,
            anchorSensitivity: .02,
            smartGuideSensitivity: 8,
            curveIntersectSize: 5,
            curvePointIntersectSize: 8,
            guideLineTextSpacing: 32,
            gridBlockSize: 40,
            gridThickLinesEvery: 10,
            gridThickColor: "#5d5d5d",
            gridLightColor: "#d0d0d0",
            gridZoomThreshold: .25,
            gridAlignmentGuideColor: "#ff0000",
            tipTextColor: "#ffffff",
            tipBackground: "#333333",
            curveHighlightColor: "#30599e",
            rectPointBackground: "white",
            rectPointBorderColor: "#666666",
            rectPointShadowColor: "rgba(0,0,0,0.35)",
            shapeCtrlPointBackground: "white",
            shapeCtrlPointBorderColor: "#707070"
        };
        var Ul = Sf.Icons = {},
            bh = 1e4,
            Er = null,
            Ud = 8;
        D.Default.setImage("Icons.RectPoint", {
            width: Ud,
            height: Ud,
            comps: [{
                type: "shape",
                points: [0, 0, 0, Ud, Ud, Ud, Ud, 0],
                segments: [1, 2, 2, 2, 5],
                shadow: !0,
                borderWidth: 1,
                shadowColor: {
                    func: function() {
                        return Er.getStyle("rectPointShadowColor")
                    }
                },
                background: {
                    func: function() {
                        return Er.getStyle("rectPointBackground")
                    }
                },
                borderColor: {
                    func: function() {
                        return Er.getStyle("rectPointBorderColor")
                    }
                }
            }]
        });
        var vg = "#e000e0";
        Ul.GroupSubEntityRect = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        var F = Ul.GroupSubEntityRect.data;
                        if (!F) return [];
                        var Y = F.min,
                            i = F.max;
                        return [Y.x, Y.y, Y.x, i.y, i.x, i.y, i.x, Y.y]
                    }
                },
                segments: [1, 2, 2, 2, 5],
                background: null,
                borderWidth: 1,
                borderColor: {
                    func: function() {
                        return Ul.GroupSubEntityRect.data.isKeyOb ? vg : "#666666"
                    }
                }
            }]
        }, Ul.Line = {
            comps: [{
                type: "image",
                name: "Icons.RectPoint",
                rect: {
                    func: function() {
                        return [
                            [Ul.Line.data.P1.x, Ul.Line.data.P1.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                rect: {
                    func: function() {
                        return [
                            [Ul.Line.data.P2.x, Ul.Line.data.P2.y], Ud, Ud
                        ]
                    }
                }
            }]
        }, Ul.Rect = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        var w = Ul.Rect.data;
                        if (!w) return [];
                        var I = w.LT,
                            M = w.LB,
                            o = w.RB,
                            C = w.RT;
                        return [I.x, I.y, M.x, M.y, o.x, o.y, C.x, C.y]
                    }
                },
                segments: [1, 2, 2, 2, 5],
                background: null,
                borderWidth: 1,
                borderColor: "#666666"
            }, {
                type: "image",
                name: "Icons.RectPoint",
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.LT.x, Ul.Rect.data.LT.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.LB.x, Ul.Rect.data.LB.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.RB.x, Ul.Rect.data.RB.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.RT.x, Ul.Rect.data.RT.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                scaleX: .9,
                scaleY: .9,
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                visible: {
                    func: function() {
                        return Ul.Rect.data.L ? !0 : !1
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.L.x, Ul.Rect.data.L.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                scaleX: .9,
                scaleY: .9,
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                visible: {
                    func: function() {
                        return Ul.Rect.data.R ? !0 : !1
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.R.x, Ul.Rect.data.R.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                scaleX: .9,
                scaleY: .9,
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                visible: {
                    func: function() {
                        return Ul.Rect.data.T ? !0 : !1
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.T.x, Ul.Rect.data.T.y], Ud, Ud
                        ]
                    }
                }
            }, {
                type: "image",
                name: "Icons.RectPoint",
                scaleX: .9,
                scaleY: .9,
                rotation: {
                    func: function() {
                        return Ul.Rect.data.rotation
                    }
                },
                visible: {
                    func: function() {
                        return Ul.Rect.data.B ? !0 : !1
                    }
                },
                rect: {
                    func: function() {
                        return [
                            [Ul.Rect.data.B.x, Ul.Rect.data.B.y], Ud, Ud
                        ]
                    }
                }
            }]
        };
        var bb = 18;
        D.Default.setImage("Icons.Anchor", {
            width: bb,
            height: bb,
            comps: [{
                type: "arc",
                rect: [4, 4, bb - 8, bb - 8],
                arcFrom: 0,
                arcClose: !1,
                background: "#ffffff",
                borderWidth: 0,
                borderColor: "#000000"
            }, {
                type: "shape",
                points: [2, bb / 2, bb - 2, bb / 2, bb / 2, 2, bb / 2, bb - 2],
                segments: [1, 2, 1, 2],
                background: null,
                borderWidth: 1,
                borderColor: "#111111"
            }, {
                type: "arc",
                rect: [5.5, 5.5, bb - 11, bb - 11],
                arcFrom: 0,
                arcClose: !1,
                background: null,
                borderWidth: 1,
                borderColor: "#111111"
            }]
        }), Ul.Anchor = {
            comps: [{
                type: "image",
                name: "Icons.Anchor",
                rect: {
                    func: function() {
                        return [
                            [Ul.Anchor.data.POS.x, Ul.Anchor.data.POS.y], bb, bb
                        ]
                    }
                }
            }]
        }, Ul.TipShiftX = 12, Ul.TipShiftY = 12;
        var Pf = [8, 28];
        Ul.TipHelper = {
            comps: [{
                type: "roundRect",
                rect: {
                    func: function() {
                        return [Ul.TipHelper.data.helperPos.x, Ul.TipHelper.data.helperPos.y, Pf[0] * Ul.TipHelper.data.size, Pf[1]]
                    }
                },
                background: {
                    func: function() {
                        return Er.getStyle("tipBackground")
                    }
                },
                opacity: .6
            }, {
                type: "text",
                text: {
                    func: function() {
                        return Ul.TipHelper.data.text
                    }
                },
                rect: {
                    func: function() {
                        return [Ul.TipHelper.data.helperPos.x, Ul.TipHelper.data.helperPos.y, Pf[0] * Ul.TipHelper.data.size, Pf[1]]
                    }
                },
                color: {
                    func: function() {
                        return Er.getStyle("tipTextColor")
                    }
                },
                font: "bold 12px Arial",
                align: "center"
            }]
        };
        var an = 7;
        Ul.ShapePoint = {
            comps: [{
                type: "circle",
                rect: {
                    func: function() {
                        var o = Ul.ShapePoint.data;
                        return [o, an, an]
                    }
                },
                background: "#ffffff",
                borderWidth: 1,
                borderColor: "#333333"
            }]
        }, Ul.ShapeBgCurve = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        return Ul.ShapeBgCurve.data.P
                    }
                },
                segments: {
                    func: function() {
                        return Ul.ShapeBgCurve.data.S
                    }
                },
                background: null,
                borderWidth: 1,
                borderColor: "#333333"
            }]
        };
        var rf = 8;
        Ul.ShapeHighlighPoint = {
            comps: [{
                type: "circle",
                rect: {
                    func: function() {
                        var S = Ul.ShapeHighlighPoint.data;
                        return [
                            [S.x, S.y], rf, rf
                        ]
                    }
                },
                background: "#30599e",
                borderWidth: 0
            }]
        };
        var xs = 10;
        Ul.ShapeHighlighRealPoint = {
            comps: [{
                type: "circle",
                rect: {
                    func: function() {
                        var D = Ul.ShapeHighlighRealPoint.data;
                        return [
                            [D.x, D.y], xs, xs
                        ]
                    }
                },
                background: "#ffffff",
                borderWidth: 2,
                borderColor: "#333333"
            }]
        };
        var Dn = 3;
        Ul.ShapeHighlightCurve = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        return Ul.ShapeHighlightCurve.data
                    }
                },
                segments: [1, 4],
                background: null,
                borderWidth: Dn,
                borderColor: {
                    func: function() {
                        return Er.getStyle("curveHighlightColor")
                    }
                }
            }]
        }, Ul.ShapeGuideLine = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        return Ul.ShapeGuideLine.data
                    }
                },
                background: null,
                borderWidth: 1,
                borderColor: "red"
            }]
        }, Ul.MoveLineGuide = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        return Ul.MoveLineGuide.data
                    }
                },
                background: null,
                borderWidth: 1,
                borderColor: "red"
            }]
        };
        var Cf = 5;
        Ul.MoveLineGuideDistanceH = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        var k = Ul.MoveLineGuideDistanceH.data,
                            W = k.x0,
                            I = k.y0,
                            z = k.x1,
                            m = k.y1;
                        return [W, I, z, m, W, I - Cf, W, I + Cf, z, m - Cf, z, m + Cf]
                    }
                },
                segments: [1, 2, 1, 2, 1, 2],
                background: null,
                borderWidth: 1,
                borderColor: "red"
            }, {
                type: "text",
                text: {
                    func: function() {
                        return Math.round(Ul.MoveLineGuideDistanceH.data.dis)
                    }
                },
                rect: {
                    func: function() {
                        var D = Ul.MoveLineGuideDistanceH.data;
                        return [
                            [(D.x0 + D.x1) / 2, D.y0 - 10], 20, 20
                        ]
                    }
                },
                color: "red",
                font: "12px Arial",
                align: "center"
            }]
        }, Ul.MoveLineGuideDistanceV = {
            comps: [{
                type: "shape",
                points: {
                    func: function() {
                        var S = Ul.MoveLineGuideDistanceV.data,
                            v = S.x0,
                            A = S.y0,
                            X = S.x1,
                            N = S.y1;
                        return [v, A, X, N, v - Cf, A, v + Cf, A, X - Cf, N, X + Cf, N]
                    }
                },
                segments: [1, 2, 1, 2, 1, 2],
                background: null,
                borderWidth: 1,
                borderColor: "red"
            }, {
                type: "text",
                text: {
                    func: function() {
                        return Math.round(Ul.MoveLineGuideDistanceV.data.dis)
                    }
                },
                rect: {
                    func: function() {
                        var Q = Ul.MoveLineGuideDistanceV.data;
                        return [
                            [Q.x0 - 10, (Q.y0 + Q.y1) / 2], 20, 20
                        ]
                    }
                },
                color: "red",
                font: "12px Arial",
                align: "center"
            }]
        };
        var Ig = 6;
        Ul.ShapeActivingCtrl = {
            comps: [{
                type: "shape",
                visible: {
                    func: function() {
                        return Ul.ShapeActivingCtrl.data.c1 ? !0 : !1
                    }
                },
                points: {
                    func: function() {
                        var n = Ul.ShapeActivingCtrl.data;
                        return [n.point.x, n.point.y, n.c1.x, n.c1.y]
                    }
                },
                segments: [1, 2],
                background: null,
                borderWidth: 1,
                borderColor: "#707070"
            }, {
                type: "shape",
                visible: {
                    func: function() {
                        return Ul.ShapeActivingCtrl.data.c2 ? !0 : !1
                    }
                },
                points: {
                    func: function() {
                        var J = Ul.ShapeActivingCtrl.data;
                        return [J.point.x, J.point.y, J.c2.x, J.c2.y]
                    }
                },
                segments: [1, 2],
                background: null,
                borderWidth: 1,
                borderColor: "#707070"
            }, {
                type: "shape",
                visible: {
                    func: function() {
                        return Ul.ShapeActivingCtrl.data.c1 ? !0 : !1
                    }
                },
                points: {
                    func: function() {
                        var $ = Ul.ShapeActivingCtrl.data.c1,
                            Z = $.x,
                            J = $.y,
                            X = Ig / 2;
                        return [Z - X, J - X, Z - X, J + X, Z + X, J + X, Z + X, J - X]
                    }
                },
                segments: [1, 2, 2, 2, 5],
                borderWidth: 2,
                background: {
                    func: function() {
                        return Er.getStyle("shapeCtrlPointBackground")
                    }
                },
                borderColor: {
                    func: function() {
                        return Er.getStyle("shapeCtrlPointBorderColor")
                    }
                }
            }, {
                type: "shape",
                visible: {
                    func: function() {
                        return Ul.ShapeActivingCtrl.data.c2 ? !0 : !1
                    }
                },
                points: {
                    func: function() {
                        var r = Ul.ShapeActivingCtrl.data.c2,
                            k = r.x,
                            T = r.y,
                            J = Ig / 2;
                        return [k - J, T - J, k - J, T + J, k + J, T + J, k + J, T - J]
                    }
                },
                segments: [1, 2, 2, 2, 5],
                borderWidth: 2,
                background: {
                    func: function() {
                        return Er.getStyle("shapeCtrlPointBackground")
                    }
                },
                borderColor: {
                    func: function() {
                        return Er.getStyle("shapeCtrlPointBorderColor")
                    }
                }
            }]
        }, Sf.Icons.DrawIcon = function(Z, U, c, y) {
            c.width = c.height = bh, c.data = y, Er = Z, D.Default.drawImage(U, c, 0, 0, bh, bh)
        }, Sf.Icons.MapPoints = function(u, T) {
            for (var B = 0, X = u.length; X > B; B++) u[B] /= T
        }, Sf.roundTo = function($, l, N) {
            var i = Math.abs($ % l);
            return N > i || N > l - i ? l * Math.round($ / l) : $
        }, Sf.toFixed = function(S) {
            return Math.round(100 * S) / 100
        };
        var Wn = Sf.Math.Matrix2 = function() {
            this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
        };
        Wn.prototype = {}, Wn.prototype.constructor = Wn, Wn.prototype.set = function(A, F, u, i, T, s) {
            return this.a = A, this.b = F, this.c = u, this.d = i, this.tx = T, this.ty = s, this
        }, Wn.prototype.apply = function(e, F) {
            F = F || new Uk;
            var w = e.x,
                M = e.y;
            return F.x = this.a * w + this.c * M + this.tx, F.y = this.b * w + this.d * M + this.ty, F
        }, Wn.prototype.applyInverse = function(x, V) {
            V = V || new Uk;
            var $ = 1 / (this.a * this.d + this.c * -this.b),
                I = x.x,
                E = x.y;
            return V.x = this.d * $ * I + -this.c * $ * E + (this.ty * this.c - this.tx * this.d) * $, V.y = this.a * $ * E + -this.b * $ * I + (-this.ty * this.a + this.tx * this.b) * $, V
        }, Wn.prototype.translate = function(q, N) {
            return this.tx += q, this.ty += N, this
        }, Wn.prototype.scale = function(x, y) {
            return this.a *= x, this.d *= y, this.c *= x, this.b *= y, this.tx *= x, this.ty *= y, this
        }, Wn.prototype.rotate = function(j) {
            var G = Math.cos(j),
                n = Math.sin(j),
                Q = this.a,
                z = this.c,
                q = this.tx;
            return this.a = Q * G - this.b * n, this.b = Q * n + this.b * G, this.c = z * G - this.d * n, this.d = z * n + this.d * G, this.tx = q * G - this.ty * n, this.ty = q * n + this.ty * G, this
        }, Wn.prototype.append = function(m) {
            var A = this.a,
                $ = this.b,
                B = this.c,
                J = this.d;
            return this.a = m.a * A + m.b * B, this.b = m.a * $ + m.b * J, this.c = m.c * A + m.d * B, this.d = m.c * $ + m.d * J, this.tx = m.tx * A + m.ty * B + this.tx, this.ty = m.tx * $ + m.ty * J + this.ty, this
        }, Wn.prototype.setTransform = function(h, J, x, q, H, u, _, l, Y) {
            var v, r, Q, B, P, t, s, I, V, N;
            return P = Math.sin(_), t = Math.cos(_), s = Math.cos(Y), I = Math.sin(Y), V = -Math.sin(l), N = Math.cos(l), v = t * H, r = P * H, Q = -P * u, B = t * u, this.a = s * v + I * Q, this.b = s * r + I * B, this.c = V * v + N * Q, this.d = V * r + N * B, this.tx = h + (x * v + q * Q), this.ty = J + (x * r + q * B), this
        }, Wn.prototype.prepend = function(Q) {
            var I = this.tx;
            if (1 !== Q.a || 0 !== Q.b || 0 !== Q.c || 1 !== Q.d) {
                var Z = this.a,
                    B = this.c;
                this.a = Z * Q.a + this.b * Q.c, this.b = Z * Q.b + this.b * Q.d, this.c = B * Q.a + this.d * Q.c, this.d = B * Q.b + this.d * Q.d
            }
            return this.tx = I * Q.a + this.ty * Q.c + Q.tx, this.ty = I * Q.b + this.ty * Q.d + Q.ty, this
        }, Wn.prototype.invert = function() {
            var X = this.a,
                Q = this.b,
                Y = this.c,
                z = this.d,
                D = this.tx,
                E = X * z - Q * Y;
            return this.a = z / E, this.b = -Q / E, this.c = -Y / E, this.d = X / E, this.tx = (Y * this.ty - z * D) / E, this.ty = -(X * this.ty - Q * D) / E, this
        }, Wn.prototype.identity = function() {
            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
        }, Wn.prototype.clone = function() {
            var z = new Wn;
            return z.a = this.a, z.b = this.b, z.c = this.c, z.d = this.d, z.tx = this.tx, z.ty = this.ty, z
        }, Wn.prototype.copy = function(B) {
            return B.a = this.a, B.b = this.b, B.c = this.c, B.d = this.d, B.tx = this.tx, B.ty = this.ty, B
        }, Wn.IDENTITY = new Wn, Wn.TEMP_MATRIX = new Wn;
        var Uk = Sf.Math.Vector2 = function(J, P) {
            "object" == typeof J && (J.x != y ? (P = J.y, J = J.x) : (P = J[1], J = J[0])), this.set(J || 0, P || 0)
        };
        Uk.prototype = {}, Uk.prototype.constructor = Uk, s.defineProperties(Uk.prototype, {
            width: {
                get: function() {
                    return this.x
                },
                set: function(P) {
                    this.x = P
                }
            },
            height: {
                get: function() {
                    return this.y
                },
                set: function(x) {
                    this.y = x
                }
            }
        }), Uk.prototype.clone = function() {
            return new Uk(this.x, this.y)
        }, Uk.prototype.copy = function(m) {
            return this.set(m.x, m.y), this
        }, Uk.prototype.equals = function(M) {
            return M.x === this.x && M.y === this.y
        }, Uk.prototype.set = function(x, p) {
            return this.x = x || 0, this.y = p || (0 !== p ? this.x : 0), this
        }, Uk.prototype.setScalar = function(L) {
            return this.x = L, this.y = L, this
        }, Uk.prototype.setX = function(h) {
            return this.x = h || 0, this
        }, Uk.prototype.setY = function(H) {
            return this.y = H || 0, this
        }, Uk.prototype.add = function(E) {
            return this.x += E.x, this.y += E.y, this
        }, Uk.prototype.addVectors = function(Y, W) {
            return this.x = Y.x + W.x, this.y = Y.y + W.y, this
        }, Uk.prototype.addScalar = function(A) {
            return this.x += A, this.y += A, this
        }, Uk.prototype.addScaledVector = function(b, S) {
            return this.x += b.x * S, this.y += b.y * S, this
        }, Uk.prototype.sub = function(g) {
            return this.x -= g.x, this.y -= g.y, this
        }, Uk.prototype.subScalar = function(r) {
            return this.x -= r, this.y -= r, this
        }, Uk.prototype.subVectors = function(S, V) {
            return this.x = S.x - V.x, this.y = S.y - V.y, this
        }, Uk.prototype.multiply = function(u) {
            return this.x *= u.x, this.y *= u.y, this
        }, Uk.prototype.multiplyScalar = function(X) {
            return this.x *= X, this.y *= X, this
        }, Uk.prototype.divide = function(d) {
            return this.x /= d.x, this.y /= d.y, this
        }, Uk.prototype.divideScalar = function(f) {
            return this.multiplyScalar(1 / f)
        }, Uk.prototype.min = function(r) {
            return this.x = Math.min(this.x, r.x), this.y = Math.min(this.y, r.y), this
        }, Uk.prototype.max = function(k) {
            return this.x = Math.max(this.x, k.x), this.y = Math.max(this.y, k.y), this
        }, Uk.prototype.clamp = function(G, u) {
            return this.x = Math.max(G.x, Math.min(u.x, this.x)), this.y = Math.max(G.y, Math.min(u.y, this.y)), this
        }, Uk.prototype.clampScalar = function() {
            var H, r;
            return function(p, F) {
                return H === y && (H = new Uk, r = new Uk), H.set(p, p), r.set(F, F), this.clamp(H, r)
            }
        }(), Uk.prototype.clampLength = function(p, l) {
            var r = this.length();
            return this.multiplyScalar(Math.max(p, Math.min(l, r)) / r)
        }, Uk.prototype.dot = function(H) {
            return this.x * H.x + this.y * H.y
        }, Uk.prototype.lengthSq = function() {
            return this.x * this.x + this.y * this.y
        }, Uk.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, Uk.prototype.normalize = function() {
            return this.divideScalar(this.length())
        }, Uk.prototype.angle = function() {
            var V = Math.atan2(this.y, this.x);
            return 0 > V && (V += 2 * Math.PI), V
        }, Uk.prototype.distanceTo = function(Z) {
            return Math.sqrt(this.distanceToSquared(Z))
        }, Uk.prototype.distanceToSquared = function(T) {
            var F = this.x - T.x,
                j = this.y - T.y;
            return F * F + j * j
        }, Uk.prototype.isNearEnough = function(F) {
            return this.distanceToSquared(F) < 1e-8
        }, Uk.prototype.setLength = function(u) {
            return this.multiplyScalar(u / this.length())
        }, Uk.prototype.lerp = function(c, o) {
            return this.x += (c.x - this.x) * o, this.y += (c.y - this.y) * o, this
        }, Uk.prototype.lerpVectors = function(Z, V, b) {
            return this.subVectors(V, Z).multiplyScalar(b).add(Z)
        }, Uk.prototype.rotateAround = function(P, Y) {
            var d = Math.cos(Y),
                g = Math.sin(Y),
                a = this.x - P.x,
                A = this.y - P.y;
            return this.x = a * d - A * g + P.x, this.y = a * g + A * d + P.y, this
        };
        var Dd = Sf.Math.Curve = function() {
            this._curves = []
        };
        Dd.prototype = {}, Dd.prototype.constructor = Dd, Dd.prototype.createFromHtShape = function(n, A) {
            A instanceof D.List && (A = A.toArray());
            var $, x, Y, F, l, g, Q, d = this,
                K = null,
                p = null,
                h = 0,
                P = Sf.Math.Vector2,
                X = Sf.Math.CubicBezier;
            for (x = 0, Y = A.length; Y > x; x++) {
                switch (F = A[x], l = null, F) {
                    case 1:
                        p = new P(n[h], n[h + 1]), K = p, h += 2;
                        break;
                    case 2:
                        $ = new P(n[h], n[h + 1]), h += 2, l = new X(p, p.clone(), $.clone(), $), p = $;
                        break;
                    case 3:
                        g = new P(n[h], n[h + 1]), $ = new P(n[h + 2], n[h + 3]), h += 4, l = new X(p, g.clone().sub(p).multiplyScalar(2 / 3).add(p), g.clone().sub($).multiplyScalar(2 / 3).add($), $), p = $;
                        break;
                    case 4:
                        g = new P(n[h], n[h + 1]), Q = new P(n[h + 2], n[h + 3]), $ = new P(n[h + 4], n[h + 5]), h += 6, l = new X(p, g, Q, $), p = $;
                        break;
                    case 5:
                        if (!K) break;
                        l = new X(p, p.clone(), K.clone(), K), p = null, K = null
                }
                l && (l._index = d._curves.length, d._curves.push(l))
            }
        }, Dd.prototype.checkPoint = function(d, F) {
            var y, H, i, O, I, t = this,
                U = t._curves;
            for (y = 0, H = U.length; H > y; y++)
                if (O = U[y], I = O.intersectRect(d, F, F), I.length) return i = 0, I.forEach(function(e) {
                    i += e.t
                }), i /= I.length, d = O.getPointAt(i), d.t = i, {
                    bezier: O,
                    intersection: d
                }
        }, Dd.prototype.insertKnot = function(U, z) {
            var h = U.insertKnot(z),
                J = this,
                K = J._curves;
            K.splice(U._index, 1, h[0], h[1])
        }, Dd.prototype._isCloseEnough = function(D, P) {
            return Math.abs(D.x - P.x) < 1e-6 && Math.abs(D.y - P.y) < 1e-6
        }, Dd.prototype._isSamePoint = function(F, I) {
            return F === I
        }, Dd.prototype.moveRealPoint = function(j, i) {
            var b = this,
                S = b._curves,
                G = i.clone().sub(j);
            S.forEach(function(r) {
                var e = r._p1;
                r._p2, r._p3;
                var L = r._p4;
                b._isSamePoint(e, j) && (r._p2.add(G), r._p1 = i), b._isSamePoint(L, j) && (r._p3.add(G), r._p4 = i)
            })
        }, Dd.prototype.moveCtrlPoint = function(p, O, o) {
            var q = p[o];
            if (q) {
                var V = this,
                    b = V._curves;
                O.clone().sub(q), b.forEach(function(m) {
                    var t;
                    "c2" === o ? t = "_p2" : "c1" === o && (t = "_p3"), V._isSamePoint(m[t], q) && (m[t] = O)
                }), p[o] = O
            }
        }, Dd.prototype.deleteRealPoint = function(C) {
            var n, x, z, M, K, i, v, R = this,
                Q = R._curves,
                H = {},
                s = [],
                E = Sf.Math.CubicBezier;
            for (x = 0, z = Q.length; z > x; x++) n = Q[x], M = n._p1, K = n._p2, i = n._p3, v = n._p4, (H[x] || !R._isSamePoint(M, C)) && (R._isSamePoint(v, C) ? z > x + 1 && R._isSamePoint(Q[x + 1]._p1, C) && s.push(new E(M, K, Q[x + 1]._p3, Q[x + 1]._p4)) : s.push(n));
            R._curves = s
        }, Dd.prototype.findPairs = function(q, t) {
            var E, F, c, R, T, h, K, U, I = this,
                P = I._curves,
                $ = {},
                p = [];
            for (F = 0, c = P.length; c > F; F++) E = P[F], R = E._p1, T = E._p2, h = E._p3, K = E._p4, !$[F] && I._isSamePoint(R, q) && (t ? p.push({
                point: R,
                r2: K
            }) : p.push({
                point: R,
                c2: T
            })), I._isSamePoint(K, q) && (U = t ? {
                point: K,
                r1: R
            } : {
                point: K,
                c1: h
            }, c > F + 1 && I._isSamePoint(P[F + 1]._p1, q) && (t ? U.r2 = P[F + 1]._p4 : U.c2 = P[F + 1]._p2, $[F + 1] = !0), p.push(U));
            return p
        }, Dd.prototype.toHtShape = function() {
            var G = this,
                Z = G._curves,
                p = [],
                D = [],
                b = {
                    x: 1 / 0,
                    y: 1 / 0
                };
            return Z.forEach(function(J) {
                var x = J._p1,
                    K = J._p2,
                    X = J._p3,
                    Y = J._p4;
                return G._isCloseEnough(x, b) || (p.push(1), D.push(x.clone())), b = Y, G._isCloseEnough(x, K) && G._isCloseEnough(X, Y) ? (p.push(2), D.push(Y.clone()), void 0) : (p.push(4), D.push(K.clone(), X.clone(), Y.clone()), void 0)
            }), {
                segments: p,
                points: D
            }
        };
        var kg = Sf.Math.CubicBezier = function(X, w, Q, m) {
            var n = this;
            n._p1 = X, n._p2 = w, n._p3 = Q, n._p4 = m
        };
        kg.prototype = {}, kg.prototype.constructor = kg, kg.prototype.intersectRect = function(k, y, M) {
            var l = y / 2,
                H = M / 2,
                B = k.x,
                N = k.y,
                A = Sf.Math.Vector2,
                C = new A(-l + B, -H + N),
                O = new A(l + B, H + N),
                Y = new A(O.x, C.y),
                V = new A(C.x, O.y),
                P = this,
                v = P.intersectLine(C, Y),
                K = P.intersectLine(Y, O),
                X = P.intersectLine(O, V),
                L = P.intersectLine(V, C),
                U = v.concat(K).concat(X).concat(L);
            return U
        }, kg.prototype.intersectLine = function(m, v) {
            var E, k, C, p, Q, W, N, g, T, x, S, Y, F, K = this,
                d = m.clone().min(v),
                t = m.clone().max(v);
            p = K._p1, Q = K._p2, W = K._p3, N = K._p4, E = p.clone().multiplyScalar(-1), k = Q.clone().multiplyScalar(3), C = W.clone().multiplyScalar(-3), S = E.add(k).add(C).add(N), E = p.clone().multiplyScalar(3), k = Q.clone().multiplyScalar(-6), C = W.clone().multiplyScalar(3), x = E.add(k).add(C), E = p.clone().multiplyScalar(-3), k = Q.clone().multiplyScalar(3), T = E.add(k), g = p.clone(), F = new Sf.Math.Vector2(m.y - v.y, v.x - m.x), Y = m.x * v.y - v.x * m.y;
            for (var R = K.getRoots(F.dot(S), F.dot(x), F.dot(T), F.dot(g) + Y), D = new Array, G = 0, $ = R.length; $ > G; G++) {
                var l = R[G];
                if (!(0 > l || l > 1)) {
                    var z = p.clone().lerp(Q, l),
                        M = Q.clone().lerp(W, l),
                        Z = W.clone().lerp(N, l),
                        f = z.lerp(M, l),
                        n = M.lerp(Z, l),
                        o = f.lerp(n, l);
                    o.t = l, m.x == v.x ? d.y <= o.y && o.y <= t.y && D.push(o) : m.y == v.y ? d.x <= o.x && o.x <= t.x && D.push(o) : o.x >= d.x && o.y >= d.y && o.x <= t.x && o.y <= t.y && D.push(o)
                }
            }
            return D
        }, kg.prototype.getPointAt = function(W) {
            var b = this,
                h = b._p1,
                U = b._p2,
                X = b._p3,
                I = b._p4,
                g = h.clone().lerp(U, W),
                s = U.clone().lerp(X, W),
                w = X.clone().lerp(I, W),
                T = g.lerp(s, W),
                q = s.lerp(w, W);
            return T.lerp(q, W)
        }, kg.prototype.getRoots = function(W, N, $, G) {
            var e, X, h, R, l, T = new Array;
            if (Math.abs(W) < 1e-6) {
                var e = N,
                    X = $ / e,
                    h = G / e,
                    R = X * X - 4 * h;
                if (R > 0) {
                    var l = Math.sqrt(R);
                    T.push(.5 * (-X + l)), T.push(.5 * (-X - l))
                } else 0 == R && T.push(.5 * -X)
            }
            N /= W, $ /= W, G /= W, e = (3 * $ - N * N) / 3, X = (2 * N * N * N - 9 * $ * N + 27 * G) / 27;
            var E = N / 3,
                P = X * X / 4 + e * e * e / 27,
                c = X / 2;
            if (Math.abs(P) <= 1e-6 && (P = 0), P > 0) {
                var C, u, l = Math.sqrt(P);
                C = -c + l, u = C >= 0 ? Math.pow(C, 1 / 3) : -Math.pow(-C, 1 / 3), C = -c - l, C >= 0 ? u += Math.pow(C, 1 / 3) : u -= Math.pow(-C, 1 / 3), T.push(u - E)
            } else if (0 > P) {
                var Z = Math.sqrt(-e / 3),
                    f = Math.atan2(Math.sqrt(-P), -c) / 3,
                    M = Math.cos(f),
                    i = Math.sin(f),
                    J = Math.sqrt(3);
                T.push(2 * Z * M - E), T.push(-Z * (M + J * i) - E), T.push(-Z * (M - J * i) - E)
            } else {
                var C;
                C = c >= 0 ? -Math.pow(c, 1 / 3) : Math.pow(-c, 1 / 3), T.push(2 * C - E), T.push(-C - E)
            }
            return T
        }, kg.prototype._70I = function() {
            var H = this;
            return H._p1.distanceToSquared(H._p2) < 1e-10 && H._p3.distanceToSquared(H._p4) < 1e-10
        }, kg.prototype.insertKnot = function(n) {
            var e = this,
                c = e._p1,
                H = e._p2,
                J = e._p3,
                O = e._p4,
                k = c.clone().lerp(H, n),
                M = H.clone().lerp(J, n),
                I = J.clone().lerp(O, n),
                _ = k.clone().lerp(M, n),
                z = M.clone().lerp(I, n),
                F = _.clone().lerp(z, n);
            return e._70I() ? (c.clone().lerp(O, n), [new Sf.Math.CubicBezier(c, c.clone(), F.clone(), F), new Sf.Math.CubicBezier(F, F.clone(), O.clone(), O)]) : [new Sf.Math.CubicBezier(c, k, _, F), new Sf.Math.CubicBezier(F, z, I, O)]
        };
        var Do = D.Default.getInternal().ui().EdgeUI,
            mg = {
                _47O: function(u) {
                    var T = this,
                        g = mg.getBackups()._47O;
                    Sf.inEdit(T.gv) || g.call(T, u)
                }
            };
        Sf.Inject.registAsModule(mg, Do);
        var nc = D.Default.getInternal().ui().NodeUI,
            ik = {
                _47O: function(F) {
                    var T = this,
                        X = ik.getBackups()._47O;
                    Sf.inEdit(T.gv) || X.call(T, F)
                },
                getSelectWidth: function() {
                    var A = this,
                        K = A.gv,
                        T = A._data;
                    if (K.isEditable(T) && Sf.inEdit(K)) return 0;
                    var Y = ik.getBackup("getSelectWidth");
                    return Y.call(A)
                }
            };
        Sf.Inject.registAsModule(ik, nc);
        var uo = D.graph.GraphView,
            vl = {
                _editPointSize: function() {
                    var H = D.Default.isTouchable,
                        I = Sf.getStyle("pointSize");
                    return I[H ? 0 : 1]
                }(),
                isPointEditable: function(i) {
                    var A = this;
                    if (Sf.inEdit(A)) return A._pointEditableFunc ? A._pointEditableFunc(i) : !0;
                    var Z = vl.getBackup("isPointEditable");
                    Z.call(A, i)
                },
                isEditable: function(s) {
                    var m = this,
                        z = vl.getBackup("isEditable"),
                        E = z.call(m, s);
                    if (!Sf.inEdit(m)) return E;
                    if (!(s instanceof D.Edge)) return E;
                    if (!s.s("2d.editable")) return !1;
                    var v = m.getEditableFunc();
                    return v ? v(s) : !0
                },
                _42: function(i, v) {
                    var h = this,
                        J = vl.getBackups()._42;
                    if (J.call(h, i, v), Sf.inEdit(h)) {
                        var Y = h.getEditInteractor();
                        Y.drawImpl()
                    }
                }
            };
        Sf.Inject.registAsModule(vl, uo);
        var qm = D.Default.getInternal().ui().ShapeUI,
            Uf = {
                _47O: function(g) {
                    var L = this,
                        O = Uf.getBackups()._47O;
                    Sf.inEdit(L.gv) || O.call(L, g)
                }
            };
        Sf.Inject.registAsModule(Uf, qm);
        var Dj = D.graph.DefaultInteractor,
            Gm = {
                handle_mousewheel: function(x) {
                    var G = this,
                        C = Gm.getBackup("handle_mousewheel");
                    Sf.inEdit(G.gv) || C.call(G, x)
                }
            };
        Sf.Inject.registAsModule(Gm, Dj);
        var Hm = D.graph.MoveInteractor,
            uc = {
                _calcShift: function(b, r) {
                    var k = this,
                        f = uc.getBackup("_calcShift"),
                        _ = k.gv;
                    if (!Sf.inEdit(_)) return f.call(k, b, r);
                    var q = _.getEditInteractor(),
                        x = q.getSubModule("Move").calcShift(b, r, k);
                    return x || f.call(k, b, r)
                },
                clear: function(_) {
                    var l = this,
                        $ = uc.getBackup("clear");
                    $.call(l, _);
                    var a = l.gv;
                    if (Sf.inEdit(a)) {
                        var u = a.getEditInteractor();
                        u.getSubModule("Move").clear(_)
                    }
                }
            };
        Sf.Inject.registAsModule(uc, Hm);
        var he = Sf.Rect = function(X) {
            this.catalog = "Rect", this._interactor = X
        };
        he.prototype = {}, he.prototype.constructor = he, he.prototype.gatherInfo = function(M, A) {
            var _ = this;
            if (1 === A.length) {
                var K = A[0];
                return K instanceof D.Shape && K._70I() ? _.gatherLine(M, K) : K instanceof D.Group && K.isExpanded() ? !1 : _.gatherSingleTarget(M, K)
            }
            return A.length > 1 ? _.gatherMultiTargets(M, A) : !1
        }, he.prototype.gatherSingleTarget = function(z, L) {
            if (L.getCorners) {
                var H, F = this.info;
                this.target = L, H = this.screenInfo = {};
                var _ = L.getCorners();
                F.LT = new Sf.Math.Vector2(_[0]), F.LB = new Sf.Math.Vector2(_[1]), F.RB = new Sf.Math.Vector2(_[2]), F.RT = new Sf.Math.Vector2(_[3]), F.T = F.LT.clone().add(F.RT).divideScalar(2), F.B = F.LB.clone().add(F.RB).divideScalar(2), F.L = F.LT.clone().add(F.LB).divideScalar(2), F.R = F.RT.clone().add(F.RB).divideScalar(2);
                for (var v in F) H[v] = Sf.toScreenPosition(z, F[v]);
                var D = this._interactor.getStyle("checkSize"),
                    Q = function(Y, o, V) {
                        var Z = o.clone().sub(Y).setLength(-D),
                            I = V.clone().sub(Y).setLength(-D),
                            T = Z.add(I).add(Y);
                        return T
                    };
                return H.rotLT = Q(H.LT, H.RT, H.LB), H.rotLB = Q(H.LB, H.LT, H.RB), H.rotRB = Q(H.RB, H.LB, H.RT), H.rotRT = Q(H.RT, H.LT, H.RB), H.rotT = H.rotLT.clone().add(H.rotRT).divideScalar(2), H.rotB = H.rotLB.clone().add(H.rotRB).divideScalar(2), H.rotL = H.rotLT.clone().add(H.rotLB).divideScalar(2), H.rotR = H.rotRT.clone().add(H.rotRB).divideScalar(2), H.rotation = L.getRotation(), !0
            }
        }, he.prototype.gatherMultiTargets = function(V, h) {
            var C = Sf.Group.findOrCreateGroup(h);
            if (!C) return !1;
            var X = this;
            return X.editing && "rotate" !== X.editing.mode || C.calcInfo(), X.gatherSingleTarget(V, C)
        }, he.prototype.gatherLine = function(g, t) {
            this.target = t;
            var q = this.screenInfo = {},
                Q = t.getPoints();
            return q.P1 = Sf.toScreenPosition(g, Q.get(0)), q.P2 = Sf.toScreenPosition(g, Q.get(1)), !0
        }, he.ResizeKeys = ["LT", "RB", "LB", "RT", "L", "R", "B", "T"], he.ResizeDirection = [{
            x: -1,
            y: -1
        }, {
            x: 1,
            y: 1
        }, {
            x: -1,
            y: 1
        }, {
            x: 1,
            y: -1
        }, {
            x: -1,
            y: 0
        }, {
            x: 1,
            y: 0
        }, {
            x: 0,
            y: 1
        }, {
            x: 0,
            y: -1
        }], he.RotateKeys = ["rotLT", "rotRB", "rotLB", "rotRT", "rotL", "rotR", "rotB", "rotT"], he.prototype.check = function(A, L, q) {
            if (D.Default.isLeftButton(L)) {
                var l = this;
                if (l.editing = null, l.tipInfo = null, l.screenInfo) {
                    if (l.screenInfo.P1) return l._checkLine(q);
                    var b, z, v, F = null,
                        h = l._interactor,
                        R = h.getStyle("checkSize");
                    for (z in Sf.Rect.ResizeKeys)
                        if (v = Sf.Rect.ResizeKeys[z], Sf.checkHit(q, l.screenInfo[v], R)) {
                            F = v, b = "resize";
                            break
                        }
                    if (!F) {
                        var d = h.getStyle("rotateCheckSize");
                        for (z in Sf.Rect.RotateKeys)
                            if (v = Sf.Rect.RotateKeys[z], Sf.checkHit(q, l.screenInfo[v], d)) {
                                F = v, b = "rotate";
                                break
                            }
                    }
                    if (!F) return this._interactor.setCursor("default"), void 0;
                    var P = l.target;
                    if ("rotate" === b) {
                        this._interactor.setCursor("crosshair");
                        var S = A.lp(L),
                            s = P instanceof Sf.Group ? P.getAnchor2() : P.getPosition();
                        l.editing = {
                            mode: b,
                            key: F,
                            pos: s,
                            flipY: P.getScale().y < 0,
                            rotation: P.getRotation(),
                            hitRot: Math.atan2(S.y - s.y, S.x - s.x)
                        }
                    } else {
                        var K = Sf.Rect.ResizeKeys.indexOf(F),
                            m = Sf.Rect.ResizeDirection[K],
                            r = Math.cos(P.getRotation()),
                            x = Math.sin(P.getRotation()),
                            N = m.x * Math.sign(P.getScale().x),
                            Q = m.y * Math.sign(P.getScale().y),
                            n = Math.atan2(-x * N - r * Q, r * N - x * Q),
                            Y = (Math.round(n / (Math.PI / 4)) + 8) % 8,
                            e = ["ew-resize", "nesw-resize", "ns-resize", "nwse-resize", "ew-resize", "nesw-resize", "ns-resize", "nwse-resize"][Y];
                        this._interactor.setCursor(e);
                        var p = P.getWidth(),
                            g = P.getHeight(),
                            i = P.getAnchor();
                        l.editing = {
                            mode: b,
                            key: F,
                            rect: {
                                x: -p * i.x,
                                y: -g * i.y,
                                width: p,
                                height: g
                            },
                            anchor: i,
                            matrix: P.getMatrix()
                        }
                    }
                    return F
                }
            }
        }, he.prototype._checkLine = function(G) {
            var C = this;
            C.screenInfo;
            var o, p = C._interactor.getStyle("checkSize");
            if (Sf.checkHit(G, C.screenInfo.P1, p)) o = "P1";
            else {
                if (!Sf.checkHit(G, C.screenInfo.P2, p)) return this._interactor.setCursor("default"), void 0;
                o = "P2"
            }
            return C.editing = {
                mode: "line",
                key: o
            }, o
        }, he.prototype.startEdit = function(y, N) {
            y.startDragging(N);
            var x = this,
                M = x.editing,
                I = x.target;
            M && "rotate" !== M.mode && ("line" === M.mode || I && 0 === I.getRotation()) && (x._inSmartGuide = !0, x._interactor.rectGuide.gatherRects())
        }, he.prototype._46O = function() {
            var k = this;
            k.editing = null, k.tipInfo = null, k._inSmartGuide && (k._interactor.rectGuide.clear(), k._inSmartGuide = !1)
        }, he.prototype.handleEdit = function(k, z) {
            var c = this,
                S = c.editing;
            if (S) {
                var L, o, f, C, u, i, P = c.target,
                    v = S.key,
                    Z = S.mode,
                    e = c._interactor;
                if ("rotate" === Z) {
                    var M, Y = k.lp(z),
                        j = S.pos,
                        r = Math.atan2(Y.y - j.y, Y.x - j.x);
                    if (P instanceof Sf.Group ? M = r - S.hitRot : (r -= S.hitRot, M = S.rotation + r, S.flipY && (M += Math.PI)), M %= 2 * Math.PI, 0 > M && (M += 2 * Math.PI), !D.Default.isCtrlDown(z)) {
                        var b, O;
                        D.Default.isShiftDown(z) ? (b = e.getStyle("shiftRotateRound"), O = b / 2) : (b = e.getStyle("rotateRound"), O = e.getStyle("rotateSensitivity")), M = Sf.roundTo(M, b, O)
                    }
                    P instanceof Sf.Group ? (r = M - (S.lastRotation || 0), 0 !== r && (P.addRotation(r), S.lastRotation = M)) : P.setRotation(M), M > Math.PI && (M -= 2 * Math.PI);
                    var x = 180 * (M / Math.PI);
                    x = x.toFixed(2), L = "" + x + "Â°"
                } else if ("resize" === Z) {
                    var Q = S.rect;
                    C = Q.x, u = Q.y;
                    var w = Q.width,
                        N = Q.height,
                        d = S.anchor,
                        p = S.matrix;
                    o = k.lp(z);
                    var R, a = D.Default.unionPoint;
                    if (c._inSmartGuide && !D.Default.isCtrlDown(z)) {
                        var G;
                        "L" === v || "R" === v ? G = "x" : ("T" === v || "B" === v) && (G = "y"), c._adsorbedToClosest(o, G), i = !0
                    }
                    R = p.tfi(o);
                    var $;
                    "LT" === v ? (Q = a(R, {
                        x: C + w,
                        y: u + N
                    }), $ = 9) : "T" === v ? (Q = a({
                        x: C,
                        y: R.y
                    }, {
                        x: C + w,
                        y: u + N
                    }), $ = 1) : "RT" === v ? (Q = a({
                        x: C,
                        y: R.y
                    }, {
                        x: R.x,
                        y: u + N
                    }), $ = 33) : "L" === v ? (Q = a({
                        x: R.x,
                        y: u
                    }, {
                        x: C + w,
                        y: u + N
                    }), $ = 8) : "R" === v ? (Q = a({
                        x: C,
                        y: u
                    }, {
                        x: R.x,
                        y: u + N
                    }), $ = 32) : "LB" === v ? (Q = a({
                        x: R.x,
                        y: u
                    }, {
                        x: C + w,
                        y: R.y
                    }), $ = 12) : "B" === v ? (Q = a({
                        x: C,
                        y: u
                    }, {
                        x: C + w,
                        y: R.y
                    }), $ = 4) : "RB" === v && (Q = a({
                        x: C,
                        y: u
                    }, R), $ = 36);
                    var A = p.tf(Q.x + Q.width * d.x, Q.y + Q.height * d.y);
                    P.setPosition(A), P.setSize(Q.width, Q.height), i && (f = P.getRect(), e.rectGuide.gatherLines({
                        node: P,
                        x: f.x,
                        y: f.y,
                        w: f.width,
                        h: f.height
                    }, G, $)), L = "" + Math.round(Q.width) + " * " + Math.round(Q.height)
                } else if ("line" === Z) {
                    if (o = k.lp(z), kn(z)) {
                        var X = P.getPoints(),
                            W = "P1" === v ? X.get(1) : X.get(0),
                            s = {
                                x: o.x - W.x,
                                y: o.y - W.y
                            },
                            F = e.getStyle("shiftLineRotateRound"),
                            J = c._shiftDirList;
                        if (!J || c._shiftRotateRound !== F) {
                            c._shiftRotateRound = F, c._shiftDirList = J = [];
                            for (var l = 0; l < Math.PI; l += F) J.push({
                                x: q(l),
                                y: m(l)
                            })
                        }
                        for (var B, T = 0, t = 0, H = J.length; H > t; t++) {
                            var _ = J[t],
                                y = _.x * s.x + _.y * s.y;
                            Math.abs(y) > Math.abs(T) && (T = y, B = _)
                        }
                        o = {
                            x: W.x + B.x * T,
                            y: W.y + B.y * T
                        }, e.rectGuide.clear()
                    } else c._inSmartGuide && !D.Default.isCtrlDown(z) && (c._adsorbedToClosest(o), i = !0);
                    P.setPoint("P1" === v ? 0 : 1, o, !0);
                    var U = P.getPoints(),
                        V = U.get(0),
                        n = U.get(1);
                    C = V.x - n.x, u = V.y - n.y, L = " " + Math.round(Math.sqrt(C * C + u * u)) + " ", i && (f = P.getRect(), e.rectGuide.gatherLines({
                        node: P,
                        x: f.x,
                        y: f.y,
                        w: f.width,
                        h: f.height
                    }))
                }
                var E = D.Default.getLogicalPoint(z, e._canvas);
                E.x += Sf.Icons.TipShiftX, E.y += Sf.Icons.TipShiftY, c.tipInfo = {
                    helperPos: E,
                    text: L,
                    size: L.length
                }
            }
        }, he.prototype._adsorbedToClosest = function(y, J) {
            var F = this,
                n = F._interactor,
                M = n.rectGuide.findClosest(y, J),
                K = n.gridGuide.findClosest(y, J),
                S = 1 / 0,
                Q = 1 / 0;
            M && (isFinite(M.x) && (S = M.x), isFinite(M.y) && (Q = M.y)), K && (isFinite(K.x) && Math.abs(K.x) < Math.abs(S) && (S = K.x), isFinite(K.y) && Math.abs(K.y) < Math.abs(Q) && (Q = K.y)), isFinite(S) && (y.x += S), isFinite(Q) && (y.y += Q)
        }, he.prototype._42 = function(v, E, Z) {
            var r = this;
            r.info = {}, r.screenInfo = null;
            var j = r._interactor;
            if (!j.editDetail && r.gatherInfo(E, Z)) {
                var i = r.screenInfo;
                i.P1 ? Sf.Icons.DrawIcon(j, v, Sf.Icons.Line, r.screenInfo) : Sf.Icons.DrawIcon(j, v, Sf.Icons.Rect, r.screenInfo), r.tipInfo && Sf.Icons.DrawIcon(j, v, Sf.Icons.TipHelper, r.tipInfo), r.target instanceof Sf.Group && r.target._42(j, v, E)
            }
        };
        var Be = Sf.Anchor = function($) {
            this.catalog = "Anchor", this._interactor = $
        };
        Be.prototype = {}, Be.prototype.constructor = Be, Be.prototype.gatherInfo = function(C, $) {
            var i = this;
            if (1 === $.length) {
                var X = $[0];
                if (!X.getAnchor) return;
                if (X instanceof D.Shape && X._70I()) return;
                if (X instanceof D.Group && X.isExpanded()) return;
                return i.gatherSingleTarget(C, $[0])
            }
            return $.length > 1 ? i.gatherMultiTargets(C, $) : !1
        }, Be.prototype.gatherSingleTarget = function(F, W) {
            var Z = this;
            return Z.info.POS = W.getPosition(), Z.screenInfo.POS = Sf.toScreenPosition(F, Z.info.POS), Z.target = W, !0
        }, Be.prototype.gatherMultiTargets = function(N, $) {
            var U = this,
                x = Sf.Group.findOrCreateGroup($);
            return x ? (U.screenInfo.POS = Sf.toScreenPosition(N, x.getAnchor2()), U.target = x, !0) : !1
        }, Be.prototype.check = function(p, l, V) {
            if (D.Default.isLeftButton(l)) {
                var b = this,
                    z = b._interactor;
                if (z.getStyle("anchorMovable") !== !1) {
                    b.editing = null, b.tipInfo = null;
                    var W;
                    if (b.screenInfo && (W = b.screenInfo.POS) && Sf.checkHit(V, new Sf.Math.Vector2(W), z.getStyle("checkSize"))) {
                        if (b.target instanceof Sf.Group) return b.editing = {}, !0;
                        var N = b.target,
                            K = N.getWidth(),
                            e = N.getHeight(),
                            n = N.getAnchor();
                        return b.editing = {
                            rect: {
                                x: -K * n.x,
                                y: -e * n.y,
                                width: K,
                                height: e
                            },
                            anchor: n,
                            matrix: N.getMatrix()
                        }, !0
                    }
                }
            }
        }, Be.prototype.startEdit = function(O, a) {
            O.startDragging(a)
        }, Be.prototype._46O = function() {
            this.editing = null, this.tipInfo = null
        }, Be.prototype.handleEdit = function(G, R) {
            var F = this,
                b = F.target;
            if (b && F.editing) {
                var L = G.lp(R);
                if (b instanceof Sf.Group) return b.setAnchor2(L), F._interactor._42(), void 0;
                var N = F.editing.matrix,
                    x = N.tfi(L),
                    E = F.editing.rect,
                    c = (x.x - E.x) / E.width,
                    J = (x.y - E.y) / E.height;
                if (!D.Default.isCtrlDown(R)) {
                    var $ = F._interactor.getStyle("anchorRound"),
                        t = F._interactor.getStyle("anchorSensitivity");
                    c = Sf.roundTo(c, $, t), J = Sf.roundTo(J, $, t)
                }
                b.setAnchor(c, J, !0);
                var v = D.Default.getLogicalPoint(R, F._interactor._canvas);
                v.x += Sf.Icons.TipShiftX, v.y += Sf.Icons.TipShiftY;
                var V = "" + c.toFixed(2) + ", " + J.toFixed(2);
                F.tipInfo = {
                    helperPos: v,
                    text: V,
                    size: V.length
                }
            }
        }, Be.prototype._42 = function(g, l, S) {
            var n = this;
            n.info = {}, n.screenInfo = {};
            var F = n._interactor;
            F.editDetail || n.gatherInfo(l, S) && F.getStyle("anchorVisible") !== !1 && (Sf.Icons.DrawIcon(F, g, Sf.Icons.Anchor, n.screenInfo), n.tipInfo && Sf.Icons.DrawIcon(F, g, Sf.Icons.TipHelper, n.tipInfo))
        };
        var Dd = Sf.Curve = function(E) {
            this.catalog = "Curve", this._interactor = E
        };
        Dd.prototype = {}, Dd.prototype.constructor = Dd, Dd.PointType = {
            Mirrored: 0,
            Straight: 1,
            Disconnected: 2,
            Asymmetric: 3
        }, Dd.prototype.setUp = function() {
            var H = this,
                L = H._interactor;
            L && L.gv.mp(H._onGraphviewPropertyChanged, H)
        }, Dd.prototype._onGraphviewPropertyChanged = function(I) {
            ("zoom" === I.property || "translateX" === I.property || "translateY" === I.property) && this._handleDataChanged()
        }, Dd.prototype.tearDown = function() {
            var U = this,
                o = U._interactor;
            o && o.gv.ump(U._onGraphviewPropertyChanged)
        }, Dd.prototype.canEnterEditDetailMode = function() {
            var $ = this,
                z = $._interactor._getValidSelection();
            if (1 === z.length) {
                var N = z[0];
                if (N instanceof D.Shape) return $.target = N, !0
            }
        }, Dd.prototype.preHandleScroll = function() {
            var C = this.editing;
            return C && C.inEdit ? !0 : void 0
        }, Dd.prototype.calcCurrentSelectintStatus = function() {
            var C = this;
            if (C.activing && !C.activing.selections) {
                if (C.activing.status != y) return C.activing.status;
                var E = function(w) {
                        var S = C.activing.status;
                        C.activing.status = w, C._interactor.fp("shapePointStatus", S, w)
                    },
                    F = Sf.Curve.PointType,
                    $ = C.activing.point,
                    Y = C.activing.pairs;
                if (!Y || 1 !== Y.length) return E(F.Mirrored);
                var o = Y[0],
                    D = o.c1 && o.c1.isNearEnough($),
                    d = o.c2 && o.c2.isNearEnough($);
                if (!o.c1 || !o.c2) return D || d ? E(F.Straight) : E(F.Disconnected);
                if (D && d) return E(F.Straight);
                if (D || d) return E(F.Asymmetric);
                var U = o.c1.clone().sub($),
                    S = o.c2.clone().sub($);
                return Math.abs(U.x * S.y - U.y * S.x) > 1e-5 || U.x * S.x > 0 ? E(F.Disconnected) : Math.abs(U.length() - S.length()) > 1e-5 ? E(F.Asymmetric) : E(F.Mirrored)
            }
        }, Dd.prototype.handle_keydown = function(f) {
            var C = this;
            if (C._interactor.editDetail) {
                var w = Sf.Curve.PointType;
                "1" === f.key ? C.setCurrentSelectionStatus(w.Straight) : "2" === f.key ? C.setCurrentSelectionStatus(w.Mirrored) : "3" === f.key ? C.setCurrentSelectionStatus(w.Disconnected) : "4" === f.key && C.setCurrentSelectionStatus(w.Asymmetric)
            }
        }, Dd.prototype.setCurrentSelectionStatus = function(p) {
            var s = this;
            if (s.activing) {
                var G = s.calcCurrentSelectintStatus();
                if (null !== G && G !== p) {
                    s.activing.status = p;
                    var L = s.activing.point,
                        U = s.activing.pairs;
                    if (U && 1 === U.length) {
                        var g = U[0],
                            W = s.screenInfo.curve,
                            v = Sf.Curve.PointType,
                            C = function() {
                                s._writeToShape(), s._interactor.fp("shapePointStatus", G, p)
                            };
                        if (p === v.Straight) return W.moveCtrlPoint(g, L, "c1"), W.moveCtrlPoint(g, L, "c2"), C(), void 0;
                        if (G === v.Straight) {
                            var c = W.findPairs(L, !0),
                                Y = c[0],
                                k = Y.r1 || L,
                                O = Y.r2 || L,
                                P = O.clone().sub(k).multiplyScalar(.25);
                            return W.moveCtrlPoint(g, L.clone().sub(P), "c1"), W.moveCtrlPoint(g, L.clone().add(P), "c2"), C(), void 0
                        }
                        var B = g.c1,
                            x = g.c2;
                        if (B && x) {
                            if (p === v.Mirrored) return W.moveCtrlPoint(g, L.clone().multiplyScalar(2).sub(x), "c1"), C(), void 0;
                            if (p === v.Asymmetric && G === v.Disconnected) {
                                var w = B.clone().sub(L).length(),
                                    P = L.clone().sub(x).setLength(w).add(L);
                                return W.moveCtrlPoint(g, P, "c1"), C(), void 0
                            }
                        }
                        s._interactor.fp("shapePointStatus", G, p)
                    }
                }
            }
        }, Dd.prototype._handleDataChanged = function(H) {
            var m = this;
            if (m.screenInfo && m.target) {
                var L = m._interactor;
                m.gatherSingleTarget(L.gv, m.target, !0), m.check(L.gv, null, H ? L._getLogicalPoint(H) : new Sf.Math.Vector2(L._lastClientPoint)), L._42()
            }
        }, Dd.prototype.gatherSingleTarget = function(C, o, U) {
            var M, Q, H = this;
            H.screenInfo && H.screenInfo.curve && (Q = H.screenInfo.curve._curves);
            var j = H.editing;
            M = j ? H.screenInfo : H.screenInfo = {}, M.S = o._58O;
            var V = M.P = [],
                B = H._getShapeMatrix();
            if (o._59O.each(function(D) {
                    D = B.apply(D);
                    var s = Sf.toScreenPosition(C, D);
                    V.push(s.x, s.y)
                }), !M.S || !M.S.size()) {
                M.S = new D.List, M.S.add(1);
                for (var d = 0; d < V.length / 2 - 1; d++) M.S.add(2)
            }
            if ((!j || U) && H.convertToCubicBezier(Q), H.activing && (U || !H.editing || "realPoint" === H.editing.type)) {
                var Y = M.curve.findPairs(H.activing.point);
                H.activing.pairs = Y
            }
        }, Dd.prototype._getShapeMatrix = function() {
            var n = new Sf.Math.Matrix2,
                c = this.target,
                W = c.getPosition();
            return n.translate(-W.x, -W.y).scale(c.getScale().x, c.getScale().y).rotate(c.getRotation()).translate(W.x, W.y), n
        }, Dd.prototype._convertToNewPoint = function(s, e, $) {
            var f, I, U;
            for (f = 0, I = e.length; I > f; f++) {
                if (U = e[f], U._p1.isNearEnough(s)) return U._p1;
                if (U._p4.isNearEnough(s)) return U._p4
            }
            if ($)
                for (f = 0, I = Math.min($.length, I); I > f; f++) {
                    if (U = $[f], U._p1 === s) return e[f]._p1;
                    if (U._p4 === s) return e[f]._p4
                }
        }, Dd.prototype.convertToCubicBezier = function(O) {
            var q, l, Q = this,
                s = new Sf.Math.Curve,
                G = Q.screenInfo;
            if (s.createFromHtShape(G.P, G.S), G.curve = s, Q.activing) {
                var y = s._curves;
                if (q = Q.activing.point, l = Q._convertToNewPoint(q, y, O), l && (Q.activing.point = l), Q.activing.selections) {
                    var g = -1,
                        N = Q.activing.selections;
                    N.forEach(function(o) {
                        g++, l = Q._convertToNewPoint(o, y, O), l && (N[g] = l)
                    })
                }
            }
        }, Dd.prototype.check = function(y, q, c) {
            if (!q || D.Default.isLeftButton(q)) {
                var o = this;
                if (o._interactor.setCursor("default"), o.editing = null, o.highlight = null, o.tipInfo = null, o.screenInfo) {
                    if (Pc()) return o._interactor._42(), !0;
                    if (o._checkEditCtrlPoint(c)) return o._interactor._42(), !0;
                    if (o._checkEditRealPoint(c)) return o._interactor._42(), !0;
                    var Z = o.screenInfo.curve,
                        b = Z.checkPoint(c, o._interactor.getStyle("curveIntersectSize"));
                    if (b) {
                        var W = o.highlight = {};
                        W.type = "insertKnot", W.bezier = b.bezier, W.point = b.intersection
                    }
                    return o._interactor._42(), !0
                }
            }
        }, Dd.prototype._checkEditRealPoint = function(L) {
            var t, c, W, k, l, s, g = this,
                v = g.screenInfo.curve._curves,
                T = g._interactor.getStyle("curvePointIntersectSize"),
                Y = 1 / 0;
            for (T *= T, W = 0, k = v.length; k > W; W++) t = v[W], l = t._p1, s = L.distanceToSquared(l), Y > s && (Y = s, c = l), l = t._p4, s = L.distanceToSquared(l), Y > s && (Y = s, c = l);
            if (Y > T) return !1;
            var J = g.highlight = {};
            return J.type = "changeRealPoint", J.point = c, g.editing = {
                type: "realPoint",
                point: c,
                shiftGuide: {
                    point: c.clone(),
                    dir: "x",
                    limit: 0
                }
            }, g._interactor.setCursor("crosshair"), !0
        }, Dd.prototype._checkEditCtrlPoint = function(c) {
            var q = this;
            if (q.activing && !q.activing.selections) {
                var Q = q.calcCurrentSelectintStatus();
                if (Q !== Sf.Curve.PointType.Straight) {
                    var Z = q.activing.pairs;
                    if (Z) {
                        var v = q._interactor.getStyle("curvePointIntersectSize");
                        v *= v;
                        var e, k, L, V, b, s, O, E, K, Y = 1 / 0;
                        for (O = 0, K = Z.length; K > O; O++)
                            for (V = Z[O], E = 0; 2 > E; E++) b = 0 === E ? "c1" : "c2", V[b] && (s = c.distanceToSquared(V[b]), Y > s && (Y = s, e = V, k = O, L = b));
                        if (Y > v) return !1;
                        q.activing.hlpair = e, q.activing.hltype = L;
                        var d = q.highlight = {};
                        return d.type = "chnageCtrlPoint", d.point = e[L], q.editing = {
                            type: "ctrlPoint",
                            pair: e,
                            pairId: k,
                            ctrlType: L,
                            direction: e[L].clone().sub(q.activing.point).normalize()
                        }, q._interactor.setCursor("crosshair"), !0
                    }
                }
            }
        }, Dd.prototype.startEdit = function(N, r) {
            N.startDragging(r);
            var T = this;
            T.highlight && "insertKnot" === T.highlight.type && (T.insertKnot(), T.gatherSingleTarget(T._interactor.gv, T.target), T.activing = null, T._checkEditRealPoint(T._interactor._getLogicalPoint(r)));
            var v = T.highlight,
                f = D.Default.isCtrlDown(r);
            if (!v || Pc()) {
                var h = T._interactor.gv;
                if (!h.setFocus(r) || h._scrolling) return;
                return h.isPannable() && Yq(r) && !f && (T._pan = {
                    tx: h.tx(),
                    ty: h.ty()
                }), void 0
            }
            if ("changeRealPoint" === v.type) {
                var c, L = T.activing ? T.activing.point : null,
                    p = T.activing ? T.activing.selections : null;
                if (f && T.activing) L === v.point ? (p ? (T.activing = {
                    point: p[0]
                }, p.length > 1 && (p.splice(0, 1), T.activing.selections = p)) : T.activing = null, T.editing = null) : p && (c = p.indexOf(v.point)) >= 0 ? (p.length > 1 ? p.splice(c, 1) : delete T.activing.selections, T.editing = null) : p ? (p.push(L), T.activing = {
                    point: v.point,
                    selections: p
                }) : T.activing = {
                    point: v.point,
                    selections: [L]
                };
                else if (p) L === v.point || ((c = p.indexOf(v.point)) >= 0 ? (p.splice(c, 1, L), T.activing = {
                    point: v.point,
                    selections: p
                }) : T.activing = {
                    point: v.point
                });
                else {
                    var j;
                    L === v.point && (j = T.activing.status), T.activing = {
                        point: v.point
                    }, j && (T.activing.status = j)
                }
            }
        }, Dd.prototype.insertKnot = function() {
            var M = this,
                c = M.highlight,
                I = M.screenInfo.curve;
            I.insertKnot(c.bezier, c.point.t), M._writeToShape()
        }, Dd.prototype._writeToShape = function() {
            var $, v, o = this,
                f = o.screenInfo.curve,
                B = f.toHtShape(),
                b = B.points,
                Q = [],
                d = B.segments,
                M = o._interactor.gv,
                j = o.target,
                D = o._getShapeMatrix().invert();
            j.getPosition();
            for (var C = 0, z = b.length; z > C; C++) $ = b[C], v = Sf.toWorldPosition(M, $), v = D.apply(v), Q.push(v);
            o.target._writing = !0, o.target.setSegments(d), o.target.setPoints(Q, !0), delete o.target._writing
        }, Dd.prototype._handlePanning = function(R) {
            var l = this,
                w = l._pan;
            if (w) {
                w.started = !0;
                var v = l._interactor,
                    W = v.gv,
                    b = v._lastClientPoint;
                W.setTranslate(w.tx + R.clientX - b.x, w.ty + R.clientY - b.y), l.gatherSingleTarget(v.gv, l.target), v._42()
            }
        }, Dd.prototype.handleEdit = function(X, m) {
            var Q = this,
                K = Q.editing;
            if (Q._pan) return Q._handlePanning(m), void 0;
            Q.editing.inEdit = !0;
            var R, n = Q._interactor._getLogicalPoint(m),
                f = D.Default.isCtrlDown(m),
                t = D.Default.isShiftDown(m);
            if (Q._guideInfo = null, "ctrlPoint" === K.type && t) {
                var M = Q.editing.direction.clone();
                R = Q.activing.point;
                var l = M.dot(n.clone().sub(R));
                n = M.setLength(l).add(R)
            } else {
                var M;
                if ("realPoint" === K.type && t) {
                    var w = Q.editing.shiftGuide,
                        N = w.point,
                        g = Math.abs(n.x - N.x),
                        v = Math.abs(n.y - N.y);
                    g > v && g > w.limit && "y" === w.dir && (w.dir = "x"), v > g && v > w.limit && "x" === w.dir && (w.dir = "y"), M = w.dir, "x" === M ? (n.y = N.y, w.limit = Math.max(w.limit, g)) : "y" === M && (n.x = N.x, w.limit = Math.max(w.limit, v))
                }
                if (!f) {
                    var b = Q._guidingToEdit(n, M),
                        r = "realPoint" === K.type ? Q._interactor.gridGuide.findClosest(n, M, !0) : null,
                        I = 1 / 0,
                        S = 1 / 0;
                    r && (r.x && (I = r.x), r.y && (S = r.y));
                    var B = !1;
                    b && (b.xList && (Math.abs(b.x) <= Math.abs(I) ? (B = !0, I = b.x) : delete b.xList), b.yList && (Math.abs(b.y) <= Math.abs(S) ? (B = !0, S = b.y) : delete b.yList), B && (Q._guideInfo = b)), isFinite(I) && (n.x += I), isFinite(S) && (n.y += S), B && (b.v = n)
                }
            }
            var Y = Q.screenInfo.curve;
            if ("realPoint" === K.type) {
                R = K.point, Y.moveRealPoint(R, n), K.point = n, Q.highlight.point = n;
                var c = Q.activing.status,
                    A = Q.activing.selections;
                if (Q.activing = {
                        point: n,
                        status: c
                    }, A) {
                    var O = n.clone().sub(R),
                        T = 0;
                    A.forEach(function(C) {
                        var N = C.clone().add(O);
                        Y.moveRealPoint(C, N), A[T++] = N
                    }), Q.activing.selections = A
                }
            } else if ("ctrlPoint" === K.type) {
                var V = Q.activing,
                    e = V.pairs,
                    h = e[K.pairId];
                Y.moveCtrlPoint(h, n, K.ctrlType);
                var Z = V.status,
                    s = Sf.Curve.PointType;
                if ((Z === s.Mirrored || Z === s.Asymmetric) && h.c1 && h.c2) {
                    var R = new Sf.Math.Vector2(V.point),
                        u = "c1" === K.ctrlType ? "c2" : "c1";
                    if (Z === Sf.Curve.PointType.Mirrored) Y.moveCtrlPoint(h, R.clone().multiplyScalar(2).sub(n), u);
                    else if (Z === s.Asymmetric) {
                        var l = h[u].clone().sub(R).length(),
                            i = R.clone().sub(h[K.ctrlType]).setLength(l).add(R);
                        isNaN(i.x) || Y.moveCtrlPoint(h, i, u)
                    }
                }
            }
            var j = D.Default.getLogicalPoint(m, Q._interactor._canvas);
            j.x += Sf.Icons.TipShiftX, j.y += Sf.Icons.TipShiftY;
            var y = Sf.toWorldPosition(X, n),
                o = "" + Sf.toFixed(y.x) + ", " + Sf.toFixed(y.y);
            Q.tipInfo = {
                helperPos: j,
                text: o,
                size: o.length
            }, Q._writeToShape()
        }, Dd.prototype._guidingToEdit = function(U, G) {
            var T, y, r = this;
            if (T = r.screenInfo.curve) {
                y = T._curves;
                var v, q, m, l, O, b, F, L, h = 1 / 0,
                    M = 1 / 0,
                    n = [];
                for (r.editing && "realPoint" === r.editing.type && (L = r.editing.point), O = 0, b = 2 * y.length; b > O; O++) F = y[Math.floor(O / 2)][O % 2 ? "_p4" : "_p1"], n.indexOf(F) >= 0 || (n.push(F), L && L === F || (m = F.x - U.x, l = F.y - U.y, Math.abs(m) < Math.abs(h) ? (h = m, v = [F]) : m === h && v.push(F), Math.abs(l) < Math.abs(M) ? (M = l, q = [F]) : l === M && q.push(F)));
                var Z = r._interactor.getStyle("smartGuideSensitivity");
                if ((Math.abs(h) > Z || "y" === G) && (v = null), (Math.abs(M) > Z || "x" === G) && (q = null), v || q) {
                    var B = !1,
                        Y = {};
                    if (v && (B = !0, Y.xList = v, Y.x = h), q && (B = !0, Y.yList = q, Y.y = M), B) return Y
                }
            }
        }, Dd.prototype._46O = function() {
            var s = this;
            s.editing = null, s._guideInfo = null, s._pan = null, s.tipInfo = null
        }, Dd.prototype.handleDelete = function() {
            var U = this;
            if (U.activing && U.screenInfo) {
                var O = U.screenInfo.curve;
                O.deleteRealPoint(U.activing.point), U.activing.selections && U.activing.selections.forEach(function(Y) {
                    O.deleteRealPoint(Y)
                }), delete U.activing, delete U.editing, delete U.tipInfo, delete U._pan, U._writeToShape(), U._interactor.fp("deleteShapePoint", !1, !0)
            }
        }, Dd.prototype.handleDoubleClick = function(x) {
            var J = this,
                $ = J._interactor._getLogicalPoint(x);
            if (J.screenInfo && J._checkEditRealPoint($)) {
                var f = J.calcCurrentSelectintStatus(),
                    _ = Sf.Curve.PointType;
                return f = f === _.Mirrored ? _.Straight : _.Mirrored, J.setCurrentSelectionStatus(f), J._interactor._42(), !0
            }
        }, Dd.prototype._drawHighlight = function(Q) {
            var V = this,
                u = V.highlight;
            if (u) {
                var R = u.bezier,
                    L = V._interactor;
                R && Sf.Icons.DrawIcon(L, Q, Sf.Icons.ShapeHighlightCurve, [R._p1.x, R._p1.y, R._p2.x, R._p2.y, R._p3.x, R._p3.y, R._p4.x, R._p4.y]);
                var h = u.point;
                h && "insertKnot" === u.type && Sf.Icons.DrawIcon(L, Q, Sf.Icons.ShapeHighlighPoint, h)
            }
        }, Dd.prototype._drawGuide = function(y) {
            var d = this,
                w = d._guideInfo;
            if (w) {
                var L, a, $, N, D = w.v;
                for (L = 0; 2 > L; L++)
                    if (N = 0 === L ? w.xList : w.yList)
                        for (a = 0, $ = N.length; $ > a; a++) Sf.Icons.DrawIcon(d._interactor, y, Sf.Icons.ShapeGuideLine, [D.x, D.y, N[a].x, N[a].y])
            }
        }, Dd.prototype._drawCurrentPoint = function(M) {
            var d = this;
            if (d.activing) {
                var i = d.activing,
                    f = d.calcCurrentSelectintStatus(),
                    n = d._interactor;
                if (f !== Sf.Curve.PointType.Straight) {
                    var y = i.pairs,
                        S = i.hlpair,
                        N = i.hltype,
                        $ = i.selections;
                    if (y && !$) {
                        var l, Z, j;
                        for (Z = 0, j = y.length; j > Z; Z++) l = y[Z], Z === S && l[N] ? Sf.Icons.DrawIcon(n, M, Sf.Icons.ShapeActivingCtrl, {
                            point: l.point,
                            c1: l.c1,
                            c2: l.c2,
                            hl: N
                        }) : Sf.Icons.DrawIcon(n, M, Sf.Icons.ShapeActivingCtrl, l)
                    }
                }
                Sf.Icons.DrawIcon(n, M, Sf.Icons.ShapeHighlighRealPoint, d.activing.point), $ && $.forEach(function(R) {
                    Sf.Icons.DrawIcon(n, M, Sf.Icons.ShapeHighlighRealPoint, R)
                })
            }
        }, Dd.prototype.clear = function() {
            var W = this;
            W.editing = null, W._guideInfo = null, W.activing = null, W.highlight = null
        }, Dd.prototype._42 = function(H) {
            var r = this;
            r.info = {}, r.editing || (r.screenInfo = null);
            var f = r._interactor;
            return f.editDetail ? r.target && r._interactor.gv.isSelected(r.target) && r._interactor.gv.isVisible(r.target) ? (r.gatherSingleTarget(f.gv, r.target), Sf.Icons.DrawIcon(f, H, Sf.Icons.ShapeBgCurve, r.screenInfo), r._drawHighlight(H), r._drawCurrentPoint(H), r._getRealPoint().forEach(function(i) {
                Sf.Icons.DrawIcon(f, H, Sf.Icons.ShapePoint, i)
            }), r._drawGuide(H), r.tipInfo && Sf.Icons.DrawIcon(f, H, Sf.Icons.TipHelper, r.tipInfo), void 0) : (f.editDetail = !1, r.clear(), void 0) : (r.clear(), void 0)
        }, Dd.prototype._getRealPoint = function() {
            var Q = this.screenInfo,
                n = Q.P,
                y = Q.S,
                F = -1,
                O = [];
            return y.each(function(g) {
                var V = 1;
                if (3 === g) V = 2;
                else if (4 === g) V = 3;
                else if (5 === g) return;
                F += V, O.push({
                    x: n[2 * F],
                    y: n[2 * F + 1]
                })
            }), O
        };
        var cn = Sf.MoveHelper = function(U) {
            var b = this;
            b.catalog = "Move", b._interactor = U
        };
        cn.prototype = {}, cn.prototype.constructor = cn, cn.prototype.calcShift = function(w, c, m) {
            var y, f, S = this,
                J = S._interactor.gv,
                l = J.lp(c);
            if ("beginMove" === w && S._gatherGridInfo(m._lastLogicalPoint || l), y = S._target) {
                var j = y.downPosition;
                if (j) {
                    var i = S._interactor.getStyle("moveSensitivity") / J._zoom;
                    if (j.distanceTo(l) < i) return {
                        x: 0,
                        y: 0
                    };
                    delete y.downPosition
                }
                var I;
                f = D.Default.isShiftDown(c), f && (l = S._dealShiftDown(l), I = y.shiftGuide.dir);
                var x, G = y.rawPos = {
                    x: y.pos.x + l.x - y.lp.x,
                    y: y.pos.y + l.y - y.lp.y
                };
                if (D.Default.isCtrlDown(c)) {
                    if (x = S._calcShiftByAddon(), S._target.node instanceof Sf.Group) {
                        var F = S._target.node;
                        F._position.x += x.x, F._position.y += x.y
                    }
                    return x
                }
                for (var Q, z = y.x + G.x, h = y.y + G.y, H = {
                        x: z,
                        y: h
                    }, C = {
                        x: z + y.w / 2,
                        y: h + y.h / 2
                    }, L = {
                        x: z + y.w,
                        y: h + y.h
                    }, p = S._interactor.rectGuide, P = S._interactor.gridGuide, B = [p.findClosest(H, I), p.findClosest(C, I), p.findClosest(L, I), P.findClosest(H, I), P.findClosest(C, I), P.findClosest(L, I)], n = 1 / 0, W = 1 / 0, s = 0, e = B.length; e > s; s++) Q = B[s], Q && (z = Q.x, h = Q.y, isFinite(z) && Math.abs(z) < Math.abs(n) && (n = z), isFinite(h) && Math.abs(h) < Math.abs(W) && (W = h));
                if (isFinite(n) || (n = 0), isFinite(W) || (W = 0), x = S._calcShiftByAddon(n, W), S._target.node instanceof Sf.Group) {
                    var F = S._target.node;
                    F._position.x += x.x, F._position.y += x.y
                }
                var v = y.node,
                    g = v instanceof D.Group && v.isExpanded();
                if (!g) {
                    var O = G.x + n,
                        _ = G.y + W;
                    S._interactor.rectGuide.gatherLines({
                        node: v,
                        x: y.x + O,
                        y: y.y + _,
                        w: y.w,
                        h: y.h
                    }, I)
                }
                return x
            }
        }, cn.prototype._calcShiftByAddon = function(o, k) {
            var t = this._target,
                C = t.rawPos,
                e = t.node.getPosition();
            return o = o || 0, k = k || 0, {
                x: C.x - e.x + o,
                y: C.y - e.y + k
            }
        }, cn.prototype._dealShiftDown = function(N) {
            var w = this,
                V = w._target.shiftGuide,
                D = w._target.lp,
                d = Math.abs(N.x - D.x),
                l = Math.abs(N.y - D.y);
            d > l && d > V.limit && "y" === V.dir && (V.dir = "x"), l > d && l > V.limit && "x" === V.dir && (V.dir = "y");
            var v = V.dir;
            return "x" === v ? (N.y = D.y, V.limit = Math.max(V.limit, d)) : "y" === v && (N.x = D.x, V.limit = Math.max(V.limit, l)), N
        }, cn.prototype._gatherGridInfo = function(n) {
            var a, S = this,
                Z = S._interactor,
                K = Z._getValidSelection();
            if (1 === K.length) {
                if (a = K[0], !a.getRect) return S._target = null, void 0
            } else if (a = Sf.Group.findOrCreateGroup(K), !a) return S._target = null, void 0;
            var d = a.getPosition(),
                H = a.getRect();
            S._target = {
                node: a,
                x: H.x - d.x,
                y: H.y - d.y,
                w: H.width,
                h: H.height,
                lp: {
                    x: n.x,
                    y: n.y
                },
                pos: {
                    x: d.x,
                    y: d.y
                },
                shiftGuide: {
                    dir: "x",
                    limit: 0
                },
                downPosition: new Sf.Math.Vector2(n)
            }, Z.rectGuide.gatherRects()
        }, cn.prototype.clear = function() {
            var g = this;
            g._interactor.rectGuide.clear(), g._interactor._42()
        };
        var Nd = "directional",
            ep = "point",
            gg = "spot",
            bd = "light.color";
        yd(S, {
            graph3dViewAttributes: r,
            graph3dViewFirstPersonMode: !1,
            graph3dViewMouseRoamable: !0,
            graph3dViewMoveStep: 15,
            graph3dViewRotateStep: B / 60,
            graph3dViewPannable: !0,
            graph3dViewRotatable: !0,
            graph3dViewWalkable: !0,
            graph3dViewResettable: !0,
            graph3dViewZoomable: !0,
            graph3dViewRectSelectable: !0,
            graph3dViewRectSelectBackground: $c,
            graph3dViewGridVisible: !1,
            graph3dViewGridSize: 50,
            graph3dViewGridGap: 50,
            graph3dViewGridColor: [.4, .75, .85, 1],
            graph3dViewOriginAxisVisible: !1,
            graph3dViewCenterAxisVisible: !1,
            graph3dViewAxisXColor: [1, 0, 0, 1],
            graph3dViewAxisYColor: [0, 1, 0, 1],
            graph3dViewAxisZColor: [0, 0, 1, 1],
            graph3dViewEditSizeColor: [1, 1, 0, 1],
            graph3dViewOrtho: !1,
            graph3dViewOrthoWidth: 2e3,
            graph3dViewFovy: B / 4,
            graph3dViewNear: 10,
            graph3dViewFar: 1e4,
            graph3dViewEye: [0, 300, 1e3],
            graph3dViewCenter: [0, 0, 0],
            graph3dViewUp: [0, 1, -1e-7],
            graph3dViewHeadlightRange: 0,
            graph3dViewHeadlightColor: [1, 1, 1, 1],
            graph3dViewHeadlightIntensity: 1,
            graph3dViewHeadlightDisabled: !1,
            graph3dViewFogDisabled: !0,
            graph3dViewFogColor: "white",
            graph3dViewFogNear: 1,
            graph3dViewFogFar: 2e3,
            graph3dViewDashDisabled: !0,
            graph3dViewBatchBlendDisabled: !0,
            graph3dViewBatchBrightnessDisabled: !0,
            graph3dViewBatchColorDisabled: !1,
            setShape3dModel: function(y, R) {
                Qr[y] = R
            },
            getShape3dModel: function(R) {
                return Qr[R]
            },
            createMatrix: function(B, X) {
                _o(B) || (B = [B]);
                for (var k = B.length - 1; k >= 0; k--) {
                    var R = B[k];
                    X = rg(R.mat, R.s3, R.r3, R.rotationMode, R.t3, X)
                }
                return X
            },
            transformVec: function($, I) {
                return nl($, I)
            },
            createBoxModel: function() {
                return {
                    vs: qr,
                    ns: ek,
                    uv: Mb,
                    is: Qk
                }
            },
            createRoundRectModel: function(K, I) {
                return qb.roundRect(K, I)
            },
            createStarModel: function(J, n) {
                return qb.star(J, n)
            },
            createRectModel: function(e, h) {
                return qb.rect(e, h)
            },
            createTriangleModel: function(O, G) {
                return qb.triangle(O, G)
            },
            createRightTriangleModel: function(O, z) {
                return qb.rightTriangle(O, z)
            },
            createParallelogramModel: function(L, x) {
                return qb.parallelogram(L, x)
            },
            createTrapezoidModel: function(r, u) {
                return qb.trapezoid(r, u)
            },
            createSmoothSphereModel: function(T, w, p, W, B, D, Z) {
                return ff(new Cj(T, w, p, W, B, D, Z))
            },
            createSphereModel: function(T, C, d, K, I, c) {
                return T ? Pi(T, C, d, K, I, c) : S.createSmoothSphereModel()
            },
            createSmoothConeModel: function(U, z, f, y, I) {
                return Hh(U, z, f, y, I)
            },
            createConeModel: function(j, i, r, C, G, q) {
                return j ? eb(j, i, r, C, G, q) : Hh(q)
            },
            createSmoothCylinderModel: function(X, Q, P, E, J, j, S, w) {
                return ff(new $r(X, Q, P, E, J, j, S, w))
            },
            createCylinderModel: function(u, $, z, m, c, r, t) {
                return u ? Fo(u, $, z, m, c, r, t) : fl(r, t)
            },
            createSmoothTorusModel: function(s, x, v, u, h, S) {
                return ff(new bj(s, x, v, u, h, S))
            },
            createTorusModel: function(D, K, U, v, R, t, $) {
                return D ? Eh(D, K, U, v, R, t, $) : $l(t, $)
            },
            createExtrusionModel: function(i, c, E, w, Q, J, B, l) {
                return Yo(i, c, E, w, Q, J, B, l)
            },
            createSmoothRingModel: function(O, A, _, m, o, P) {
                for (var $ = [], z = 0; z < O.length - 1; z += 2) $.push({
                    x: O[z],
                    y: O[z + 1]
                });
                for (O = os($, A, _)[0], $ = [], z = 0; z < O.length; z++) {
                    var e = O[z];
                    $.push(new aj(e.x, 0, e.y))
                }
                return ff(new Ar($, P, m, o))
            },
            createTextGeometry: function(t, J) {
                return ff(new xm(t, J))
            },
            loadFontFace: function(F, U) {
                S.xhrLoad(F, function(d) {
                    if (!d) return U();
                    var G;
                    try {
                        G = JSON.parse(d)
                    } catch (A) {
                        G = JSON.parse(d.substring(65, d.length - 2))
                    }
                    Lb.loadFace(G), U && U(G.familyName.toLowerCase())
                }, U ? null : {
                    sync: !0
                })
            },
            createRingModel: function(e, x, E, n, f, Y, U, J, j, t) {
                for (var d = [], s = 0; s < e.length - 1; s += 2) d.push({
                    x: e[s],
                    y: e[s + 1]
                });
                Y = Y || S.shapeSide, U = U || 0, J = J || Y;
                var k, R, Z, a, T, g, F, Q, $, B, s, h, w, l, G, H, M, L, v = [],
                    I = [],
                    i = j ? [] : r,
                    K = j ? [] : r,
                    P = t ? [] : r,
                    z = t ? [] : r,
                    W = n ? [] : r,
                    N = n ? [] : r,
                    b = f ? [] : r,
                    p = f ? [] : r,
                    e = os(d, x, E),
                    X = Vg(e),
                    V = 0,
                    _ = 2 * Math.PI / Y;
                return e.forEach(function(d) {
                    if (Z = d.length, Z > 1) {
                        if (a = d[0], n)
                            for (g = a.x, Q = a.y, s = U; J > s; s++) h = s + 1, w = s * _, l = h * _, G = m(w), H = q(w), M = m(l), L = q(l), W.push(G * g, Q, -H * g, M * g, Q, -L * g, 0, Q, 0), N.push(.5 - .5 * G, .5 - .5 * H, .5 - .5 * M, .5 - .5 * L, .5, .5);
                        for (B = 0; Z > B; B++) {
                            for (T = d[B], g = a.x, F = T.x, Q = a.y, $ = T.y, k = V / X, V += ls(a, T), R = V / X, s = U; J > s; s++) h = s + 1, w = s * _, l = h * _, G = m(w), H = q(w), M = m(l), L = q(l), v.push(G * F, $, -H * F, M * F, $, -L * F, G * g, Q, -H * g, M * F, $, -L * F, M * g, Q, -L * g, G * g, Q, -H * g), I.push(s / Y, R, h / Y, R, s / Y, k, h / Y, R, h / Y, k, s / Y, k), j && s === U && (i.push(0, Q, 0, 0, $, 0, G * F, $, -H * F, G * F, $, -H * F, G * g, Q, -H * g, 0, Q, 0), K.push(0, .5 - Q, 0, .5 - $, 2 * F, .5 - $, 2 * F, .5 - $, 2 * g, .5 - Q, 0, .5 - Q)), t && h === J && (P.push(0, Q, 0, M * F, $, -L * F, 0, $, 0, M * F, $, -L * F, 0, Q, 0, M * g, Q, -L * g), z.push(1, .5 - Q, 1 - 2 * F, .5 - $, 1, .5 - $, 1 - 2 * F, .5 - $, 1, .5 - Q, 1 - 2 * g, .5 - Q));
                            a = T
                        }
                        if (f)
                            for (g = a.x, Q = a.y, s = U; J > s; s++) h = s + 1, w = s * _, l = h * _, G = m(w), H = q(w), M = m(l), L = q(l), b.push(M * g, Q, -L * g, G * g, Q, -H * g, 0, Q, 0), p.push(.5 - .5 * M, .5 + .5 * L, .5 - .5 * G, .5 + .5 * H, .5, .5)
                    }
                }), {
                    vs: v,
                    uv: I,
                    bottom_vs: b,
                    bottom_uv: p,
                    top_vs: W,
                    top_uv: N,
                    from_vs: i,
                    from_uv: K,
                    to_vs: P,
                    to_uv: z
                }
            }
        }, !0), yd($, {
            "3d.move.mode": y,
            "3d.selectable": !0,
            "3d.visible": !0,
            "3d.movable": !0,
            "3d.editable": !0,
            "shape.border.gradient.color": y,
            "edge.gradient.color": y,
            "edge.source.t3": y,
            "edge.target.t3": y,
            "light.type": ep,
            "light.center": [0, 0, 0],
            "light.color": [1, 1, 1, 1],
            "light.disabled": !1,
            "light.angle": B / 4,
            "light.range": 0,
            "light.exponent": 1,
            "light.intensity": 1,
            "wf.visible": !1,
            "wf.width": 1,
            "wf.color": Zr,
            "wf.short": !1,
            "wf.mat": y,
            batch: y,
            "transparent.mask": !1,
            brightness: y,
            "select.brightness": .7,
            "repeat.uv.length": y,
            "label.face": nh,
            "label.t3": y,
            "label.r3": y,
            "label.texture.scale": 2,
            "label.rotationMode": Mi,
            "label.light": !1,
            "label.blend": y,
            "label.reverse.flip": !1,
            "label.reverse.color": Gf,
            "label.reverse.cull": !1,
            "label.transparent": !1,
            "label.autorotate": !1,
            "label2.face": nh,
            "label2.t3": y,
            "label2.r3": y,
            "label2.texture.scale": 2,
            "label2.rotationMode": Mi,
            "label2.light": !1,
            "label2.blend": y,
            "label2.reverse.flip": !1,
            "label2.reverse.color": Gf,
            "label2.reverse.cull": !1,
            "label2.transparent": !1,
            "label2.autorotate": !1,
            "note.face": nh,
            "note.t3": y,
            "note.r3": y,
            "note.texture.scale": 2,
            "note.rotationMode": Mi,
            "note.light": !1,
            "note.blend": y,
            "note.reverse.flip": !1,
            "note.reverse.color": Gf,
            "note.reverse.cull": !1,
            "note.transparent": !1,
            "note.autorotate": !1,
            "note2.face": nh,
            "note2.t3": y,
            "note2.r3": y,
            "note2.texture.scale": 2,
            "note2.rotationMode": Mi,
            "note2.light": !1,
            "note2.blend": y,
            "note2.reverse.flip": !1,
            "note2.reverse.color": Gf,
            "note2.reverse.cull": !1,
            "note2.transparent": !1,
            "note2.autorotate": !1,
            shape3d: y,
            "shape3d.color": Tg,
            "shape3d.top.color": y,
            "shape3d.bottom.color": y,
            "shape3d.from.color": y,
            "shape3d.to.color": y,
            "shape3d.image": y,
            "shape3d.top.image": y,
            "shape3d.bottom.image": y,
            "shape3d.from.image": y,
            "shape3d.to.image": y,
            "shape3d.light": !0,
            "shape3d.side": 0,
            "shape3d.side.from": y,
            "shape3d.side.to": y,
            "shape3d.visible": !0,
            "shape3d.from.visible": !0,
            "shape3d.to.visible": !0,
            "shape3d.top.visible": !0,
            "shape3d.bottom.visible": !0,
            "shape3d.torus.radius": .17,
            "shape3d.resolution": 0,
            "shape3d.blend": y,
            "shape3d.opacity": y,
            "shape3d.reverse.flip": !1,
            "shape3d.reverse.color": Gf,
            "shape3d.reverse.cull": !1,
            "shape3d.transparent": !1,
            "shape3d.uv.offset": y,
            "shape3d.uv.scale": y,
            "shape3d.top.uv.offset": y,
            "shape3d.top.uv.scale": y,
            "shape3d.bottom.uv.offset": y,
            "shape3d.bottom.uv.scale": y,
            "shape3d.from.uv.offset": y,
            "shape3d.from.uv.scale": y,
            "shape3d.to.uv.offset": y,
            "shape3d.to.uv.scale": y,
            "shape3d.top.cap": y,
            "shape3d.bottom.cap": y,
            "shape3d.start.angle": 0,
            "shape3d.sweep.angle": C,
            "shape3d.discard.selectable": !0,
            "shape3d.top.discard.selectable": !0,
            "shape3d.bottom.discard.selectable": !0,
            "shape3d.from.discard.selectable": !0,
            "shape3d.to.discard.selectable": !0,
            "shape3d.scaleable": !0,
            "all.light": !0,
            "all.visible": !0,
            "all.color": Tg,
            "all.image": y,
            "all.blend": y,
            "all.opacity": y,
            "all.reverse.flip": !1,
            "all.reverse.color": Gf,
            "all.reverse.cull": !1,
            "all.transparent": !1,
            "all.uv": y,
            "all.uv.offset": y,
            "all.uv.scale": y,
            "all.discard.selectable": !0,
            mat: y,
            "left.mat": y,
            "right.mat": y,
            "top.mat": y,
            "bottom.mat": y,
            "front.mat": y,
            "back.mat": y
        }, !0);
        var ee, mh = !1,
            im = [0, 0, 0, 1 / 255],
            yl = {
                left: [1 / 255, 0, 0, 1],
                right: [2 / 255, 0, 0, 1],
                top: [3 / 255, 0, 0, 1],
                bottom: [4 / 255, 0, 0, 1],
                front: [5 / 255, 0, 0, 1],
                back: [6 / 255, 0, 0, 1],
                m: {
                    1: fp,
                    2: th,
                    3: Un,
                    4: Hn,
                    5: nh,
                    6: Ym
                }
            },
            pq = function(s, u, o, h) {
                if (u.getFaceVisible(s, o)) {
                    Uc(u, to(s, u.getFaceMat(s, o) || u.getMat(s)));
                    var B = u._26I;
                    u.getFaceReverseCull(s, o) ? B.enable(B.CULL_FACE) : B.disable(B.CULL_FACE), Cs(B, u._prg.uFixPickReverseColor, yl[o]), ac(B), yf(B, h, 6), hl(B), bp(u)
                }
            },
            ij = function(h) {
                return h instanceof bn
            },
            Ge = function(G) {
                return [G.x, G.e || 0, G.y]
            },
            yn = function($, Z, t) {
                for (var Z = vk(Z), x = Z[0], M = Z[1], R = Z[2]; t--;) $.push(x, M, R)
            },
            mo = function(C, E, Y) {
                for (var E = vk(E), z = E[0], J = E[1], P = E[2], Z = E[3]; Y--;) C.push(z, J, P, Z)
            },
            Bb = function(g, s, k) {
                if (s)
                    for (var a, p, K, q = s[0], l = s[1], E = s[2], F = s[4], S = s[5], X = s[6], H = s[8], J = s[9], e = s[10], C = s[12], G = s[13], w = s[14], T = k.length, x = 0, x = 0; T > x; x += 3) a = k[x], p = k[x + 1], K = k[x + 2], g.push(q * a + F * p + H * K + C, l * a + S * p + J * K + G, E * a + X * p + e * K + w);
                else Pn(g, k)
            },
            Fg = function(j, c) {
                var X = c.s("light.intensity"),
                    k = vk(c.s(bd)),
                    w = k[0],
                    i = k[1],
                    r = k[2];
                1 !== X && (w *= X, i *= X, r *= X), j.push(w, i, r, c.s("light.disabled") ? 1 : 0)
            },
            eq = function(N, V, B) {
                Cs(V, B.uHeadlightRange, N._headlightRange);
                var W = N._headlightIntensity,
                    D = vk(N._headlightColor);
                1 !== W && (D = [D[0] * W, D[1] * W, D[2] * W]), Cs(V, B.uHeadlightColor, [D[0], D[1], D[2], N._headlightDisabled ? 1 : 0]);
                var e = N._59O,
                    p = N._spots,
                    y = N._dirs;
                if (e.length) {
                    var q = [],
                        l = [],
                        F = [];
                    e.forEach(function(s) {
                        Fg(q, s), Pn(l, s.p3()), F.push(s.s("light.range"))
                    }), V.uniform4fv(B.uPointColor, q), V.uniform1fv(B.uPointRange, F), V.uniform3fv(B.uPointPosition, l)
                }
                if (p.length) {
                    var K = [],
                        G = [],
                        I = [],
                        k = [],
                        g = [],
                        U = [];
                    p.forEach(function(y) {
                        Fg(K, y), Pn(G, y.p3()), Pn(I, y.s("light.center")), k.push(y.s("light.range")), g.push(m(y.s("light.angle") / 2)), U.push(y.s("light.exponent"))
                    }), V.uniform4fv(B.uSpotColor, K), V.uniform1fv(B.uSpotRange, k), V.uniform1fv(B.uSpotAngle, g), V.uniform1fv(B.uSpotExponent, U), V.uniform3fv(B.uSpotPosition, G), V.uniform3fv(B.uSpotCenter, I)
                }
                if (y.length) {
                    var X = [],
                        P = [];
                    y.forEach(function(U) {
                        Fg(X, U), Pn(P, U.p3())
                    }), V.uniform4fv(B.uDirColor, X), V.uniform3fv(B.uDirPosition, P)
                }
            },
            Ro = function(t) {
                return t > 0 && 0 === (t - 1 & t)
            },
            xb = function(d) {
                return d = v(0, I(B, d)), d = v(Bp, I(B - Bp, d))
            },
            pf = function() {
                return .05 + b() / 2
            },
            Jq = function(H, o, g, M) {
                var $, Q = H.getEye();
                return H.isOrtho() ? ($ = wg(H.getCenter(), Q), $[0] += M[0], $[1] += M[1], $[2] += M[2]) : $ = Q, rc(o, g, M, $)
            },
            rc = function(m, k, Q, p) {
                var Y = lp(m, k),
                    C = wg(p, Q, !0),
                    b = lp(C, k);
                if (E(b) < Bp) return r;
                var $ = (Y - lp(Q, k)) / b;
                return [Q[0] + C[0] * $, Q[1] + C[1] * $, Q[2] + C[2] * $]
            },
            Ee = function($, a) {
                return {
                    x: 2 * $.x - a.x,
                    y: 2 * $.y - a.y
                }
            },
            sl = function(p, $, x, i) {
                var l, z;
                if (!p) return l = H($.y - x.y, x.x - $.x), {
                    x: $.x + i * q(l),
                    y: $.y + i * m(l)
                };
                if (!x) return l = H(p.y - $.y, $.x - p.x), {
                    x: $.x + i * q(l),
                    y: $.y + i * m(l)
                };
                var G = wg([p.x, p.y, 0], [$.x, $.y, 0], !0),
                    L = wg([x.x, x.y, 0], [$.x, $.y, 0], !0),
                    E = -(G[0] + L[0]) / 2,
                    U = -(G[1] + L[1]) / 2,
                    n = Q(E * E + U * U);
                if (Bp > n) return l = H(p.y - $.y, $.x - p.x), {
                    x: $.x + i * q(l),
                    y: $.y + i * m(l)
                };
                var P = p.x - $.x,
                    g = p.y - $.y,
                    h = x.x - $.x,
                    D = x.y - $.y,
                    r = Q(Math.min(P * P + g * g, h * h + D * D));
                return l = j(lp(G, L)) / 2, z = G[1] * L[0] - G[0] * L[1] > 0 ? -1 : 1, E /= n, U /= n, n = Math.min(i / q(l), r / m(l)), {
                    x: $.x + z * n * E,
                    y: $.y + z * n * U
                }
            },
            Wj = function(T) {
                var t = T[1],
                    n = T[2],
                    a = T[3],
                    u = T[6],
                    I = T[7],
                    S = T[11];
                T[1] = T[4], T[2] = T[8], T[3] = T[12], T[4] = t, T[6] = T[9], T[7] = T[13], T[8] = n, T[9] = u, T[11] = T[14], T[12] = a, T[13] = I, T[14] = S
            },
            Cl = function(J) {
                var U = J[0],
                    q = J[1],
                    _ = J[2],
                    t = J[3],
                    F = J[4],
                    n = J[5],
                    i = J[6],
                    T = J[7],
                    k = J[8],
                    c = J[9],
                    e = J[10],
                    X = J[11],
                    p = J[12],
                    f = J[13],
                    g = J[14],
                    y = J[15],
                    B = U * n - q * F,
                    z = U * i - _ * F,
                    l = U * T - t * F,
                    v = q * i - _ * n,
                    D = q * T - t * n,
                    M = _ * T - t * i,
                    N = k * f - c * p,
                    R = k * g - e * p,
                    L = k * y - X * p,
                    j = c * g - e * f,
                    s = c * y - X * f,
                    w = e * y - X * g,
                    A = B * w - z * s + l * j + v * L - D * R + M * N;
                return A ? (A = 1 / A, J[0] = (n * w - i * s + T * j) * A, J[1] = (_ * s - q * w - t * j) * A, J[2] = (f * M - g * D + y * v) * A, J[3] = (e * D - c * M - X * v) * A, J[4] = (i * L - F * w - T * R) * A, J[5] = (U * w - _ * L + t * R) * A, J[6] = (g * l - p * M - y * z) * A, J[7] = (k * M - e * l + X * z) * A, J[8] = (F * s - n * L + T * N) * A, J[9] = (q * L - U * s - t * N) * A, J[10] = (p * D - f * l + y * B) * A, J[11] = (c * l - k * D - X * B) * A, J[12] = (n * R - F * j - i * N) * A, J[13] = (U * j - q * R + _ * N) * A, J[14] = (f * z - p * v - g * B) * A, J[15] = (k * v - c * z + e * B) * A, void 0) : r
            },
            Ej = function(k, v) {
                if (v) {
                    var X = v[0],
                        l = v[1],
                        i = v[2];
                    k[12] = k[0] * X + k[4] * l + k[8] * i + k[12], k[13] = k[1] * X + k[5] * l + k[9] * i + k[13], k[14] = k[2] * X + k[6] * l + k[10] * i + k[14], k[15] = k[3] * X + k[7] * l + k[11] * i + k[15]
                }
            },
            Mf = function(B, t) {
                if (t) {
                    var J = t[0],
                        v = t[1],
                        c = t[2];
                    B[0] = B[0] * J, B[1] = B[1] * J, B[2] = B[2] * J, B[3] = B[3] * J, B[4] = B[4] * v, B[5] = B[5] * v, B[6] = B[6] * v, B[7] = B[7] * v, B[8] = B[8] * c, B[9] = B[9] * c, B[10] = B[10] * c, B[11] = B[11] * c
                }
            },
            Qm = function(i, G, t) {
                var J = G[0],
                    U = G[1],
                    V = G[2],
                    v = G[3],
                    I = G[4],
                    Y = G[5],
                    P = G[6],
                    x = G[7],
                    O = G[8],
                    f = G[9],
                    T = G[10],
                    k = G[11],
                    z = G[12],
                    $ = G[13],
                    N = G[14],
                    Q = G[15],
                    C = t[0],
                    q = t[1],
                    h = t[2],
                    S = t[3];
                return i[0] = C * J + q * I + h * O + S * z, i[1] = C * U + q * Y + h * f + S * $, i[2] = C * V + q * P + h * T + S * N, i[3] = C * v + q * x + h * k + S * Q, C = t[4], q = t[5], h = t[6], S = t[7], i[4] = C * J + q * I + h * O + S * z, i[5] = C * U + q * Y + h * f + S * $, i[6] = C * V + q * P + h * T + S * N, i[7] = C * v + q * x + h * k + S * Q, C = t[8], q = t[9], h = t[10], S = t[11], i[8] = C * J + q * I + h * O + S * z, i[9] = C * U + q * Y + h * f + S * $, i[10] = C * V + q * P + h * T + S * N, i[11] = C * v + q * x + h * k + S * Q, C = t[12], q = t[13], h = t[14], S = t[15], i[12] = C * J + q * I + h * O + S * z, i[13] = C * U + q * Y + h * f + S * $, i[14] = C * V + q * P + h * T + S * N, i[15] = C * v + q * x + h * k + S * Q, i
            },
            Pl = function(n, B, s, z) {
                var K, f, X, g, I, P, L, p, u, y, W = B[0],
                    U = B[1],
                    r = B[2],
                    $ = z[0],
                    S = z[1],
                    O = z[2],
                    q = s[0],
                    T = s[1],
                    Y = s[2];
                return E(W - q) < Bp && E(U - T) < Bp && E(r - Y) < Bp ? Bi(n) : (L = W - q, p = U - T, u = r - Y, y = 1 / Q(L * L + p * p + u * u), L *= y, p *= y, u *= y, K = S * u - O * p, f = O * L - $ * u, X = $ * p - S * L, y = Q(K * K + f * f + X * X), y ? (y = 1 / y, K *= y, f *= y, X *= y) : (K = 0, f = 0, X = 0), g = p * X - u * f, I = u * K - L * X, P = L * f - p * K, y = Q(g * g + I * I + P * P), y ? (y = 1 / y, g *= y, I *= y, P *= y) : (g = 0, I = 0, P = 0), n[0] = K, n[1] = g, n[2] = L, n[3] = 0, n[4] = f, n[5] = I, n[6] = p, n[7] = 0, n[8] = X, n[9] = P, n[10] = u, n[11] = 0, n[12] = -(K * W + f * U + X * r), n[13] = -(g * W + I * U + P * r), n[14] = -(L * W + p * U + u * r), n[15] = 1, n)
            },
            Rg = function(N, G, R, X, T) {
                var o = 1 / l(G / 2),
                    m = 1 / (X - T);
                return N[0] = o / R, N[1] = 0, N[2] = 0, N[3] = 0, N[4] = 0, N[5] = o, N[6] = 0, N[7] = 0, N[8] = 0, N[9] = 0, N[10] = (T + X) * m, N[11] = -1, N[12] = 0, N[13] = 0, N[14] = 2 * T * X * m, N[15] = 0, N
            },
            Gn = function(y, C, W, j, c, L, i) {
                var o = 1 / (C - W),
                    K = 1 / (j - c),
                    U = 1 / (L - i);
                return y[0] = -2 * o, y[1] = 0, y[2] = 0, y[3] = 0, y[4] = 0, y[5] = -2 * K, y[6] = 0, y[7] = 0, y[8] = 0, y[9] = 0, y[10] = 2 * U, y[11] = 0, y[12] = (C + W) * o, y[13] = (c + j) * K, y[14] = (i + L) * U, y[15] = 1, y
            },
            gq = function(H, h) {
                var t = h[0],
                    X = h[1],
                    N = h[2],
                    r = h[3],
                    i = t * t + X * X + N * N + r * r,
                    s = i ? 1 / i : 0;
                return H[0] = -t * s, H[1] = -X * s, H[2] = -N * s, H[3] = r * s, H
            },
            Al = function(X, w) {
                var T = w[0] + w[5] + w[10],
                    n = 0;
                return T > 0 ? (n = 2 * Math.sqrt(T + 1), X[3] = .25 * n, X[0] = (w[6] - w[9]) / n, X[1] = (w[8] - w[2]) / n, X[2] = (w[1] - w[4]) / n) : w[0] > w[5] & w[0] > w[10] ? (n = 2 * Math.sqrt(1 + w[0] - w[5] - w[10]), X[3] = (w[6] - w[9]) / n, X[0] = .25 * n, X[1] = (w[1] + w[4]) / n, X[2] = (w[8] + w[2]) / n) : w[5] > w[10] ? (n = 2 * Math.sqrt(1 + w[5] - w[0] - w[10]), X[3] = (w[8] - w[2]) / n, X[0] = (w[1] + w[4]) / n, X[1] = .25 * n, X[2] = (w[6] + w[9]) / n) : (n = 2 * Math.sqrt(1 + w[10] - w[0] - w[5]), X[3] = (w[1] - w[4]) / n, X[0] = (w[8] + w[2]) / n, X[1] = (w[6] + w[9]) / n, X[2] = .25 * n), X
            },
            gp = function(n, J, f) {
                var b = J[0],
                    z = J[1],
                    c = J[2],
                    v = J[3],
                    l = b + b,
                    U = z + z,
                    B = c + c,
                    S = b * l,
                    H = b * U,
                    y = b * B,
                    G = z * U,
                    N = z * B,
                    W = c * B,
                    m = v * l,
                    k = v * U,
                    s = v * B;
                return n[0] = 1 - (G + W), n[1] = H + s, n[2] = y - k, n[3] = 0, n[4] = H - s, n[5] = 1 - (S + W), n[6] = N + m, n[7] = 0, n[8] = y + k, n[9] = N - m, n[10] = 1 - (S + G), n[11] = 0, n[12] = f[0], n[13] = f[1], n[14] = f[2], n[15] = 1, n
            },
            sd = function(S, f) {
                return Pl(f ? f : ym(), S._eye, S._center, S._up)
            },
            Zo = function(M) {
                var c = M.getAspect(),
                    A = M._near,
                    q = M._far,
                    F = ym();
                if (M._ortho) {
                    var r = M._orthoWidth / 2,
                        X = r / c;
                    Gn(F, -r, r, -X, X, A, q)
                } else Rg(F, M._fovy, c, A, q);
                return F
            },
            Cn = function(b, a) {
                if (!b) return r;
                var D = 0,
                    G = 1,
                    S = 2,
                    w = [],
                    Z = 0,
                    _ = b.length,
                    l = _ / 3;
                if (a) {
                    for (; _ > Z; Z++) w[Z] = 0;
                    for (Z = 0; Z < a.length; Z += 3) {
                        var U = [],
                            e = [],
                            P = [];
                        U[D] = b[3 * a[Z + 1] + D] - b[3 * a[Z] + D], U[G] = b[3 * a[Z + 1] + G] - b[3 * a[Z] + G], U[S] = b[3 * a[Z + 1] + S] - b[3 * a[Z] + S], e[D] = b[3 * a[Z + 2] + D] - b[3 * a[Z + 1] + D], e[G] = b[3 * a[Z + 2] + G] - b[3 * a[Z + 1] + G], e[S] = b[3 * a[Z + 2] + S] - b[3 * a[Z + 1] + S], P[D] = U[G] * e[S] - U[S] * e[G], P[G] = U[S] * e[D] - U[D] * e[S], P[S] = U[D] * e[G] - U[G] * e[D];
                        for (var O = 0; 3 > O; O++) w[3 * a[Z + O] + D] += P[D], w[3 * a[Z + O] + G] += P[G], w[3 * a[Z + O] + S] += P[S]
                    }
                } else
                    for (Z = 0; l > Z; Z += 3) {
                        var U = [],
                            e = [],
                            P = [];
                        U[D] = b[3 * (Z + 1) + D] - b[3 * Z + D], U[G] = b[3 * (Z + 1) + G] - b[3 * Z + G], U[S] = b[3 * (Z + 1) + S] - b[3 * Z + S], e[D] = b[3 * (Z + 2) + D] - b[3 * (Z + 1) + D], e[G] = b[3 * (Z + 2) + G] - b[3 * (Z + 1) + G], e[S] = b[3 * (Z + 2) + S] - b[3 * (Z + 1) + S], P[D] = U[G] * e[S] - U[S] * e[G], P[G] = U[S] * e[D] - U[D] * e[S], P[S] = U[D] * e[G] - U[G] * e[D];
                        for (var O = 0; 3 > O; O++) w[3 * (Z + O) + D] = P[D], w[3 * (Z + O) + G] = P[G], w[3 * (Z + O) + S] = P[S]
                    }
                for (Z = 0; _ > Z; Z += 3) {
                    var K = [];
                    K[D] = w[Z + D], K[G] = w[Z + G], K[S] = w[Z + S];
                    var m = Q(K[D] * K[D] + K[G] * K[G] + K[S] * K[S]);
                    0 === m && (m = Bp), K[D] = K[D] / m, K[G] = K[G] / m, K[S] = K[S] / m, w[Z + D] = K[D], w[Z + G] = K[G], w[Z + S] = K[S]
                }
                return new um(w)
            },
            dj = function(e, b, q) {
                if (q || (q = e.createTexture()), b) {
                    var j = e.TEXTURE_2D,
                        Z = e.LINEAR,
                        i = e.REPEAT,
                        _ = e.CLAMP_TO_EDGE,
                        M = e.TEXTURE_MIN_FILTER;
                    Um(e, q), e.texImage2D(j, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, b), en(e, e.TEXTURE_MAG_FILTER, Z), Ro(b.width) && Ro(b.height) ? (en(e, e.TEXTURE_WRAP_S, i), en(e, e.TEXTURE_WRAP_T, i), en(e, M, e.LINEAR_MIPMAP_LINEAR), e.generateMipmap(j)) : (en(e, e.TEXTURE_WRAP_S, _), en(e, e.TEXTURE_WRAP_T, _), en(e, M, Z)), Um(e, r)
                }
                return q
            },
            zp = function(g, m) {
                var W = new Uint8Array(3);
                return m = m || g.createTexture(), Um(g, m), en(g, g.TEXTURE_MIN_FILTER, g.LINEAR), g.texImage2D(g.TEXTURE_2D, 0, g.RGB, 1, 1, 0, g.RGB, g.UNSIGNED_BYTE, W), m
            },
            lm = function(w) {
                w._26I && w._prg && (w._26I.deleteProgram(w._prg), w._prg = r)
            },
            Pe = function(q, p, c, E) {
                var Q = q.createShader(c);
                return q.shaderSource(Q, E), q.compileShader(Q), q.attachShader(p, Q), Q
            },
            rj = function(n) {
                return n.createBuffer()
            },
            Um = function(P, m) {
                P.bindTexture(P.TEXTURE_2D, m)
            },
            Ir = function(P, X) {
                P.bindFramebuffer(P.FRAMEBUFFER, X)
            },
            en = function(t, l, r) {
                t.texParameteri(t.TEXTURE_2D, l, r)
            },
            ag = function(x, L) {
                if (L) {
                    var L = vk(L);
                    x.clearColor(L[0], L[1], L[2], L[3])
                }
            },
            rk = function(j, m) {
                Cs(j, m.uFix, !0), Sj(j, m.aNormal)
            },
            re = function(Q, B) {
                Cs(Q, B.uFix, !1), Vn(Q, B.aNormal)
            },
            Hj = function(t, c, $, I, u, w, X, R) {
                t._picking || ($ ? (Cs(t, c.uBlend, !0), Cs(t, c.uBlendColor, $)) : Cs(t, c.uBlend, !1), Cs(t, c.uLight, I == r ? !0 : I), dl(u) && 1 !== u && Cs(t, c.uPartOpacity, u), Cs(t, c.uReverseFlip, w == r ? !1 : w), Cs(t, c.uFixPickReverseColor, X || Gf)), R ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE)
            },
            rl = function(x, I) {
                x._picking || Cs(x, I.uPartOpacity, 1)
            },
            ac = function(H, g, G, S, m, J, p, L) {
                if (!G) return Um(H, H._emptyTexture), void 0;
                Cs(H, g.uTexture, !0), Cs(H, g.uDiscardSelectable, fc(S) ? S : !0), Vn(H, g.aUv), jp(H, m, J, g.aUv, 2), H.activeTexture(H.TEXTURE0), Um(H, G), H.uniform1i(g.uSampler, 0);
                var W = [0, 0, 1, 1];
                p && (W[0] = p[0], W[1] = p[1]), L && (W[2] = L[0], W[3] = L[1]), Cs(H, g.uOffsetScale, W)
            },
            hl = function(n, W, i) {
                Um(n, r), i && (Sj(n, W.aUv), Cs(n, W.uTexture, !1))
            },
            wp = function(x, k, a, X, u, Q) {
                !a || K || A || x.lineWidth(a), X && !x._picking && Cs(x, k.uFixPickReverseColor, X), u && jp(x, u, Q, k.aPosition)
            },
            Oi = function(q, h, u, n) {
                ee && (n = q[ee]), q.drawArrays(n == r ? q.TRIANGLES : n, h, u)
            },
            yf = function(J, S, K, q) {
                ee && (q = J[ee]), J.drawElements(q == r ? J.TRIANGLES : q, K, J.UNSIGNED_SHORT, S == r ? 0 : 2 * S)
            },
            jp = function(A, D, l, y, f) {
                var K = A.ARRAY_BUFFER;
                A.bindBuffer(K, D), l && A.bufferData(K, l, A.STATIC_DRAW), y != r && A.vertexAttribPointer(y, f ? f : 3, A.FLOAT, !1, 0, 0)
            },
            Nm = function(l, e, a) {
                var K = l.ELEMENT_ARRAY_BUFFER;
                l.bindBuffer(K, e), a && l.bufferData(K, a, l.STATIC_DRAW)
            },
            Cs = function(w, X, g) {
                if (g != r && X != r) {
                    g = vk(g);
                    var p = g.length;
                    3 === p ? w.uniform3fv(X, g) : 4 === p ? w.uniform4fv(X, g) : 16 === p ? w.uniformMatrix4fv(X, !1, g) : fc(g) ? w.uniform1i(X, g ? 1 : 0) : 2 === p ? w.uniform2fv(X, g) : w.uniform1f(X, g)
                }
            },
            Vn = function(N, v) {
                v != r && v >= 0 && N.enableVertexAttribArray(v)
            },
            Sj = function(f, c) {
                c != r && c >= 0 && f.disableVertexAttribArray(c)
            },
            bp = function(S, i) {
                var y = S.getGL(),
                    j = S._prg;
                S._7O = S._8O.pop(), i && (Cs(y, j.uMVMatrix, S._7O), S._6O = i, Cs(y, j.uNMatrix, i))
            },
            Xo = function(r, L) {
                return L || (L = ym()), nm(L, r), Cl(L), Wj(L), L
            },
            Uc = function(G, U) {
                var y = G.getGL(),
                    J = G._prg,
                    m = G._7O;
                U && (G._8O.push(Zp(m)), Qm(m, m, U)), Cs(y, J.uMVMatrix, m), Cs(y, J.uNMatrix, Xo(m, G._6O))
            },
            jf = function(S, C, V, j, L, i) {
                if (V) {
                    if (j) {
                        var B = V.value++,
                            d = [(255 & B >> 24) / 255, (255 & B >> 16) / 255, (255 & B >> 8) / 255, (255 & B) / 255];
                        V[B] = {
                            data: L,
                            part: i
                        }
                    } else d = im;
                    return Cs(S, C.uFixPickReverseColor, d), d
                }
            },
            Ep = function() {
                var D = {
                    center: function(M, C, p, a, v) {
                        var x = C[1] / 2,
                            y = {
                                x: -C[0] / 2,
                                y: x,
                                width: C[0],
                                height: C[1]
                            },
                            N = bf(M, y, p);
                        return [N.x + a, 2 * x - N.y - v, pf()]
                    },
                    front: function(i, v, P, W, t) {
                        var N = v[1] / 2,
                            Q = {
                                x: -v[0] / 2,
                                y: N,
                                width: v[0],
                                height: v[1]
                            },
                            M = bf(i, Q, P);
                        return [M.x + W, 2 * N - M.y - t, v[2] / 2 + pf()]
                    },
                    back: function(F, X, A, K, M) {
                        var N = X[0] / 2,
                            e = X[1] / 2,
                            S = {
                                x: N,
                                y: e,
                                width: X[0],
                                height: X[1]
                            },
                            g = bf(F, S, A);
                        return [2 * N - g.x - K, 2 * e - g.y - M, -X[2] / 2 - pf()]
                    },
                    left: function(a, n, f, y, L) {
                        var H = n[1] / 2,
                            h = {
                                x: -n[2] / 2,
                                y: H,
                                width: n[2],
                                height: n[1]
                            },
                            J = bf(a, h, f);
                        return [-n[0] / 2 - pf(), 2 * H - J.y - L, J.x + y]
                    },
                    right: function(q, z, d, W, I) {
                        var k = z[2] / 2,
                            T = z[1] / 2,
                            O = {
                                x: k,
                                y: T,
                                width: z[2],
                                height: z[1]
                            },
                            y = bf(q, O, d);
                        return [z[0] / 2 + pf(), 2 * T - y.y - I, 2 * k - y.x - W]
                    },
                    top: function(o, e, I, p, L) {
                        var m = {
                                x: -e[0] / 2,
                                y: -e[2] / 2,
                                width: e[0],
                                height: e[2]
                            },
                            g = bf(o, m, I);
                        return [g.x + p, e[1] / 2 + pf(), g.y + L]
                    },
                    bottom: function(w, O, k, c, i) {
                        var U = O[2] / 2,
                            p = {
                                x: -O[0] / 2,
                                y: U,
                                width: O[0],
                                height: O[2]
                            },
                            C = bf(w, p, k);
                        return [C.x + c, -O[1] / 2 - pf(), 2 * U - C.y - i]
                    }
                };
                return function(Q, d, z, i, J, N) {
                    return D[i](Q, d, z, J || 0, N || 0)
                }
            }(),
            df = function(L, h, D, R, r, X, v, T, K, S) {
                if (r && (h[0] += r[0], h[1] += r[1], h[2] += r[2]), Ej(L, D), T) {
                    var g = ym();
                    if (lf(g, K, S), nl(h, g), Ej(L, h), L.auto = T, L.pos = nl([0, 0, 0], L), X) {
                        var q = L.mat2 = ym();
                        lf(q, X, v)
                    }
                } else lf(L, K, S), Ej(L, h), R === fp ? Fq(L, -F) : R === th ? Fq(L, F) : R === Un ? Xq(L, -F) : R === Hn ? Xq(L, F) : R === Ym && Fq(L, B), lf(L, X, v);
                return L
            },
            Re = function(y, o) {
                var J = o.auto,
                    x = o.mat2,
                    e = y.gv;
                if (J) {
                    var N, a = ym(),
                        l = [0, 0, 0, 0];
                    N = "string" == typeof J ? [J.indexOf("x") < 0 ? e._eye[0] : e._center[0], J.indexOf("y") < 0 ? e._eye[1] : e._center[1], J.indexOf("z") < 0 ? e._eye[2] : e._center[2]] : e._eye, Al(l, Pl(ym(), N, e._center, e._up)), gp(a, gq(l, l), o.pos), x && Qm(a, a, x), Uc(e, a)
                } else Uc(e, o)
            },
            Am = function(M, E, S, x, J) {
                var W = M.s,
                    v = M.gv,
                    D = v.getGL(),
                    U = v._prg,
                    G = v._buffer,
                    j = v._1O;
                dj(D, Fh, j), Re(M, S), Hj(D, U, W(E + ".blend"), W(E + ".light"), W(E + ".opacity"), W(E + ".reverse.flip"), W(E + ".reverse.color"), W(E + ".reverse.cull")), ac(D, U, j, J, G.uv, Tk), jp(D, G.vs, x, U.aPosition), jp(D, G.ns, xh, U.aNormal), Nm(D, G.is, nj), yf(D, 0, nj.length), hl(D, U, j), rl(D, U), bp(v)
            },
            ur = function(Y, w, f) {
                var s = Y.gv,
                    S = Y.data,
                    J = Y[w] = {
                        blend: s.getBodyColor(S) || s.getFaceBlend(S, w),
                        light: s.getFaceLight(S, w),
                        color: s.getFaceColor(S, w),
                        opacity: s.getFaceOpacity(S, w),
                        transparent: s.getFaceTransparent(S, w),
                        reverseFlip: s.getFaceReverseFlip(S, w),
                        reverseColor: s.getFaceReverseColor(S, w),
                        reverseCull: s.getFaceReverseCull(S, w),
                        texture: s.getFaceImage(S, w),
                        discardSelectable: s.getFaceDiscardSelectable(S, w)
                    };
                if ("csg" !== w) {
                    J.uv = s.getFaceUv(S, w) || f && f[w + "Uv"], J.uvScale = s.getFaceUvScale(S, w) || f && f[w + "UvScale"], J.uvOffset = s.getFaceUvOffset(S, w) || f && f[w + "UvOffset"];
                    var h = s.getFaceMat(S, w);
                    h && (J.mat = to(S, h))
                }
                return J
            },
            Cg = function(S, N, l, Q, G) {
                if (Q) {
                    if (!G(Q.transparent)) return;
                    var m = S.data,
                        R = S.gv,
                        u = R._buffer,
                        q = R.getTexture(Q.texture, m);
                    ac(N, l, q, Q.discardSelectable, u.uv, Q.tuv, Q.uvOffset, Q.uvScale), Hj(N, l, Q.blend, Q.light, Q.opacity, Q.reverseFlip, Q.reverseColor, Q.reverseCull), Cs(N, l.uDiffuse, Q.color), jp(N, u.vs, Q.vs, l.aPosition), jp(N, u.ns, Q.ns, l.aNormal), Oi(N, 0, Q.vs.length / 3), rl(N, l), hl(N, l, q)
                }
            },
            Xe = function(Z, E, G, d, t, f) {
                var D, R, F, O, j, W, _, z, K, x, c, T = [d - E, t - G],
                    w = Z ? Z.length : 0;
                for (F = 0; w > F; F++) {
                    for (O = 2, D = Z[F], j = D[0], W = D[1]; O + 1 < D.length;) {
                        if (_ = D[O], z = D[O + 1], R = Tq(E, G, d, t, j, W, _, z, !0)) {
                            K = [_ - j, z - W], x = ls(K), K[0] /= x, K[1] /= x, x = lp(T, K), x = x > 0 ? f : -f, c = [K[0] * x, K[1] * x];
                            break
                        }
                        j = _, W = z, O += 2
                    }
                    if (c) break
                }
                if (c)
                    for (d = E + c[0], t = G + c[1], F = 0; w > F; F++)
                        for (O = 2, D = Z[F], j = D[0], W = D[1]; O + 1 < D.length;) {
                            if (_ = D[O], z = D[O + 1], R = Tq(E, G, d, t, j, W, _, z, !0)) return [0, 0];
                            j = _, W = z, O += 2
                        }
                return c ? c : [d - E, t - G]
            },
            sm = D.graph3d = {},
            Kq = function(J, u, P) {
                Ni(n + ".graph3d." + J, u, P)
            },
            fq = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
            wc = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
        yd(S, {
            setBatchInfo: function(R, S) {
                Kp[R] = S
            },
            getBatchInfo: function(Q) {
                return Kp[Q]
            }
        }, !0);
        var _e = [1, 1, 1],
            sb = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
            Oj = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
            Rn = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
            Yk = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
            Of = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
            Qo = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
            Qc = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
            rr = function(I, w) {
                Up(I, w), _i(I, w, "_wireframeModelMap", "_wireframeIndexMap"), _i(I, w, "_polylineModelMap", "_polylineIndexMap")
            },
            Up = function(_, N) {
                if (N) {
                    var x, v, W = N._id,
                        g = _._33O,
                        O = _._34O,
                        Z = O[W];
                    if (Z) {
                        v = Z.batch, x = g[v];
                        var U = Z.begin,
                            T = Z.size,
                            y = 3 * U,
                            c = 3 * T,
                            K = 4 * U,
                            E = 4 * T,
                            m = x.vs,
                            h = x.uv,
                            D = x.cs,
                            s = x.bs,
                            w = x.rs,
                            X = x.ds,
                            q = Z.index;
                        if (x.invalidate = !0, delete O[W], X.splice(q, 1), Gj(X)) delete g[v];
                        else {
                            for (; q < X.length; q++) Z = O[X[q]._id], Z.index--, Z.begin -= T;
                            m.splice(y, c), x.ns.splice(y, c), x.ps.splice(K, E), h && h.splice(2 * U, 2 * T), D && D.splice(K, E), s && s.splice(y, c), w && w.splice(U, T)
                        }
                    }
                } else _._34O = {}, _._33O = {}
            },
            _i = function(l, d, g, j) {
                if (d) {
                    var D, U, m = d._id,
                        C = l[g],
                        G = l[j],
                        e = G[m];
                    if (e) {
                        U = e.batch, D = C[U];
                        var c = e.begin,
                            F = e.size,
                            M = 3 * c,
                            o = 3 * F,
                            K = 4 * c,
                            Q = 4 * F,
                            A = D.ds,
                            z = e.index;
                        if (D.invalidate = !0, delete G[m], A.splice(z, 1), Gj(A)) delete C[U];
                        else {
                            for (; z < A.length; z++) e = G[A[z]._id], e.index--, e.begin -= F;
                            D.vs.splice(M, o), D.cs.splice(K, Q), D.ps.splice(K, Q), D.ls && D.ls.splice(c, F)
                        }
                    }
                } else l[g] = {}, l[j] = {}
            },
            ko = function($, i, J, v) {
                if (!v) return r;
                var E = i[v];
                if (!E) {
                    var d = Kp[v] || Mq,
                        m = d.image ? [] : r;
                    E = i[v] = {
                        vs: [],
                        ns: [],
                        uv: m,
                        cs: m ? r : d.color ? r : [],
                        bs: d.blend ? [] : r,
                        ps: [],
                        rs: d.brightness ? [] : r,
                        ds: []
                    }
                }
                return E.invalidate = !0, $[J._id] = {
                    index: E.ds.length,
                    begin: E.vs.length / 3,
                    batch: v
                }, E.ds.push(J), E
            },
            zh = function(l, h) {
                return h != r && 1 !== h ? [l[0] * h, l[1] * h, l[2] * h, l[3]] : l
            },
            Ak = function(A, I, g) {
                var j = A.getBrightness(I),
                    d = vk(g.color || "white"),
                    t = d[3] < 1,
                    a = Math.ceil(g.width) || 1,
                    Z = (t ? "T" : "O") + a,
                    m = A._wireframeIndexMap,
                    k = A._wireframeModelMap,
                    N = k[Z];
                N || (N = k[Z] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    T: t,
                    W: a
                }), N.invalidate = !0;
                var i = N.vs,
                    _ = N.cs,
                    D = N.ds,
                    G = m[I._id] = {
                        index: D.length,
                        begin: i.length / 3,
                        batch: Z
                    };
                D.push(I), Bb(i, to(I, g.mat), g.short ? om : gh);
                var E = G.size = i.length / 3 - G.begin;
                mo(_, zh(d, j), E)
            },
            fe = function(u, P, H, _, x, V, l, y, T) {
                var I = u.getBrightness(P);
                I == r && (I = 1);
                var j = zh(vk(_), I),
                    C = j[3] < 1;
                V = Math.ceil(V) || 1;
                var t = (C ? "T" : "O") + V;
                if (l) {
                    var h = l[0],
                        K = (l[1] || h) + h;
                    t += "-" + h + "-" + K, T && (t += "-" + Tf(T) + "-" + I, T = zh(vk(T), I))
                }
                var L = u._polylineIndexMap,
                    Q = u._polylineModelMap,
                    N = Q[t];
                N || (N = Q[t] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    ls: l ? [] : r,
                    T: C,
                    W: V
                }, l && (N.D = h, N.G = K, N.A = T)), N.invalidate = !0;
                var s, c = N.vs,
                    d = N.cs,
                    G = N.ds,
                    A = N.ls,
                    k = L[P._id] = {
                        index: G.length,
                        begin: c.length / 3,
                        batch: t
                    };
                G.push(P), Pn(c, H);
                var n, R = k.size = c.length / 3 - k.begin,
                    U = H.length,
                    v = 0,
                    J = [];
                if (l || x)
                    for (s = 0; U > s; s += 6) n = ls([H[s], H[s + 1], H[s + 2]], [H[s + 3], H[s + 4], H[s + 5]]), J.push(n), v += n;
                if (v && x) {
                    var o, b = zh(vk(x), I),
                        m = [b[0] - j[0], b[1] - j[1], b[2] - j[2], b[3] - j[3]],
                        X = 0;
                    for (s = 0; U > s; s += 6) o = X / v, mo(d, [j[0] + m[0] * o, j[1] + m[1] * o, j[2] + m[2] * o, j[3] + m[3] * o], 1), X += J[s / 6], o = X / v, mo(d, [j[0] + m[0] * o, j[1] + m[1] * o, j[2] + m[2] * o, j[3] + m[3] * o], 1)
                } else mo(d, j, R);
                if (l)
                    for (X = y || 0, s = 0; U > s; s += 6) A.push(X), X += J[s / 6], A.push(X)
            },
            Lj = function(L, f, X) {
                if (f)
                    for (var s = 4 * f.begin, l = X[f.batch].ps, z = 0; z < f.size; z++) l[s++] = L[0], l[s++] = L[1], l[s++] = L[2], l[s++] = L[3]
            },
            Dg = function(O, u) {
                var n = u + ["32"],
                    g = O[u],
                    d = O[n];
                g ? d && d.length === g.length ? d.set(g) : O[n] = new um(g) : delete O[n]
            },
            Ri = function(J, T, w, _, $, n, i, r, b) {
                if (_o(w)) w.forEach(function(A) {
                    Ri(J, T, A, _, $, n, i, r, b)
                });
                else if (Rr(w)) Ri(J, T, Zm(_, w), _, $, n, i, r, b);
                else if (Je(w)) {
                    var g, m = yq(w.mat, T, J),
                        z = yq(w.s3, T, J),
                        V = yq(w.t3, T, J),
                        v = yq(w.r3, T, J);
                    if ((z || v || V || m) && (g = rg(m, z, v, yq(w.rotationMode, T, J), V), n.push(g)), w.shape3d) Ri(J, T, w.shape3d, _, $, n, i, r, w);
                    else {
                        var p = _.s;
                        b = b || Mq;
                        var U = n[0],
                            D = n.length,
                            W = p("shape3d.color", w.color, b.color);
                        if ($ || ($ = p("shape3d.blend", w.blend, b.blend)), D > 1) {
                            U = Zp(U);
                            for (var X = 1; D > X; X++) Qm(U, U, n[X])
                        }
                        w.vs && p($e, w.visible, b.visible) && Nq(U, i, r, w.vs, w.uv, w.is, $, W), w.top_vs && p(Rq, w.topVisible, b.topVisible) && Nq(U, i, r, w.top_vs, w.top_uv, w.top_is, $, p("shape3d.top.color", w.topColor, b.topColor) || W), w.bottom_vs && p(Zi, w.bottomVisible, b.bottomVisible) && Nq(U, i, r, w.bottom_vs, w.bottom_uv, w.bottom_is, $, p("shape3d.bottom.color", w.bottomColor, b.bottomColor) || W), w.from_vs && p(hh, w.fromVisible, b.fromVisible) && Nq(U, i, r, w.from_vs, w.from_uv, w.from_is, $, p("shape3d.from.color", w.fromColor, b.fromColor) || W), w.to_vs && p(On, w.toVisible, b.toVisible) && Nq(U, i, r, w.to_vs, w.to_uv, w.to_is, $, p("shape3d.to.color", w.toColor, b.toColor) || W)
                    }
                    g && n.pop()
                }
            },
            Nq = function(J, w, Y, k, m, e, M, r) {
                var T, Q = w.cs,
                    H = w.uv,
                    B = w.bs;
                if (e) {
                    T = e.length;
                    for (var q = 0; T > q; q++) {
                        var f = e[q];
                        Bb(Y, J, [k[3 * f], k[3 * f + 1], k[3 * f + 2]]), H && Pn(H, [m[2 * f], m[2 * f + 1]])
                    }
                } else T = k.length / 3, Bb(Y, J, k), H && Pn(H, m);
                Q && mo(Q, r, T), B && (M ? yn(B, M, T) : Pn(B, _e, T))
            },
            cs = function(d, r, q, m) {
                var b = [];
                m ? Ri(d.gv, d.data, m, d, d.getBodyColor(), [r], q, b) : (Ic(d, fp, r, q, b), Ic(d, th, r, q, b), Ic(d, nh, r, q, b), Ic(d, Ym, r, q, b), Ic(d, Un, r, q, b), Ic(d, Hn, r, q, b), Ic(d, "csg", r, q, b)), b.length && (Pn(q.vs, b), Pn(q.ns, Cn(b)))
            },
            Ic = function(M, p, O, j, E) {
                var P = M[p];
                if (P) {
                    var s = P.tuv;
                    if (s) {
                        var S, I, X, i, g = P.uvScale,
                            v = P.uvOffset;
                        if (g)
                            for (S = s.length, I = g[0], X = g[1], i = 0; S > i; i += 2) s[i] *= I, s[i + 1] *= X;
                        if (v)
                            for (S = s.length, I = v[0], X = v[1], i = 0; S > i; i += 2) s[i] += I, s[i + 1] += X
                    }
                    Nq(O, j, E, P.vs, s, r, P.blend, P.color)
                }
            },
            Xl = function(u, z, r, P, f, Y, Z, I) {
                var b, _ = r.cs,
                    T = r.uv,
                    m = r.bs;
                if (u.getFaceVisible(z, Y)) {
                    var G = u.getFaceMat(z, Y);
                    if (G && (f = to(z, G)), Bb(Z, f, I), _ && mo(_, u.getFaceColor(z, Y), 6), T) {
                        var e = u.getFaceUv(z, Y) || P[Y + "Uv"],
                            K = u.getFaceUvScale(z, Y) || P[Y + "UvScale"],
                            F = u.getFaceUvOffset(z, Y) || P[Y + "UvOffset"];
                        e = e ? [e[6], e[7], e[0], e[1], e[2], e[3], e[2], e[3], e[4], e[5], e[6], e[7]] : sb;
                        var O = e[0],
                            o = e[1],
                            A = e[2],
                            W = e[3],
                            C = e[4],
                            n = e[5],
                            N = e[6],
                            w = e[7],
                            q = e[8],
                            x = e[9],
                            S = e[10],
                            y = e[11];
                        if (K) {
                            var d = K[0],
                                U = K[1];
                            O *= d, o *= U, A *= d, W *= U, C *= d, n *= U, N *= d, w *= U, q *= d, x *= U, S *= d, y *= U
                        }
                        if (F) {
                            var v = F[0],
                                J = F[1];
                            O += v, o += J, A += v, W += J, C += v, n += J, N += v, w += J, q += v, x += J, S += v, y += J
                        }
                        T.push(O, o, A, W, C, n, N, w, q, x, S, y)
                    }
                    m && (b = u.getBodyColor(z) || u.getFaceBlend(z, Y), b ? yn(m, b, 6) : Pn(m, _e, 6))
                }
            },
            Vh = function(Y, h, l, g) {
                var m = Y.getGL(),
                    Z = Y._prg,
                    H = Y._buffer;
                if (!fo(h)) {
                    Uc(Y), rk(m, Z);
                    for (var S in h) {
                        var x = h[S];
                        if (!(g && !x.T || !g && x.T)) {
                            x.invalidate ? (x.invalidate = !1, Dg(x, "vs"), Dg(x, "cs"), Dg(x, "ls"), Dg(x, "ps")) : l && Dg(x, "ps");
                            var z = x.vs32,
                                D = l ? x.ps32 : x.cs32;
                            wp(m, Z, x.W, r, H.vs, z);
                            var R = x.D,
                                E = !Y._dashDisabled && R;
                            E && (Cs(m, Z.uDash, !0), Cs(m, Z.uDashDistance, R), Cs(m, Z.uDashGapDistance, x.G), Vn(m, Z.aLineDistance), jp(m, H.lineDistance, x.ls32, Z.aLineDistance, 1), Cs(m, Z.uDiffuse, x.A || Fe));
                            var I = !Y._batchColorDisabled;
                            I && (Cs(m, Z.uBatchColor, !0), Vn(m, Z.aBatchColor), jp(m, H.batchColor, D, Z.aBatchColor, 4)), ac(m), Oi(m, 0, z.length / 3, m.LINES), hl(m), I && (Cs(m, Z.uBatchColor, !1), Sj(m, Z.aBatchColor)), E && (Cs(m, Z.uDash, !1), Sj(m, Z.aLineDistance))
                        }
                    }
                    re(m, Z)
                }
            },
            Xm = function(I, T, U) {
                var K, S, l, P, J, X, E, p, L, D, x, m = I.getGL(),
                    Z = I._prg,
                    B = I._buffer,
                    t = I._33O;
                if (!fo(t)) {
                    Uc(I);
                    for (K in t)
                        if (S = Kp[K] || Mq, !(U && !S.transparent || !U && S.transparent) && (l = t[K], T || !S.transparentMask)) {
                            var _ = U && S.autoSort !== !1 && (I._33Q || l.invalidate);
                            if (l.invalidate ? (l.invalidate = !1, Dg(l, "vs"), Dg(l, "ns"), Dg(l, "cs"), Dg(l, "rs"), Dg(l, "ps"), Dg(l, "bs"), Dg(l, "uv")) : T && Dg(l, "ps"), J = l.vs32, X = T ? l.ps32 : l.cs32, L = l.uv32, E = l.bs32, p = l.rs32, x = J.length / 3, _ && (l.is = Ik(J, I.getEye())), x) {
                                P = S.light, D = I.getTexture(S.image), Hj(m, Z, r, S.light, S.opacity, S.reverseFlip, S.reverseColor, S.reverseCull), X ? I._batchColorDisabled || (Cs(m, Z.uBatchColor, !0), Vn(m, Z.aBatchColor), jp(m, B.batchColor, X, Z.aBatchColor, 4)) : Cs(m, Z.uDiffuse, S.color);
                                var g = E && !I._batchBlendDisabled;
                                g && (Cs(m, Z.uBatchBlend, !0), Vn(m, Z.aBatchBlend), jp(m, B.batchBlend, E, Z.aBatchBlend));
                                var i = p && !I._batchBrightnessDisabled;
                                i && (Cs(m, Z.uBatchBrightness, !0), Vn(m, Z.aBatchBrightness), jp(m, B.batchBrightness, p, Z.aBatchBrightness, 1)), L ? ac(m, Z, D, S.discardSelectable, B.uv, L, S.uvOffset, S.uvScale) : ac(m), jp(m, B.vs, J, Z.aPosition), jp(m, B.ns, l.ns32, Z.aNormal), l.is ? (Nm(m, B.is, l.is), yf(m, 0, x)) : Oi(m, 0, x), L ? hl(m, Z, D) : hl(m), X && !I._batchColorDisabled && (Cs(m, Z.uBatchColor, !1), Sj(m, Z.aBatchColor)), g && (Cs(m, Z.uBatchBlend, !1), Sj(m, Z.aBatchBlend)), i && (Cs(m, Z.uBatchBrightness, !1), Sj(m, Z.aBatchBrightness)), rl(m, Z)
                            }
                        }
                }
            },
            Ik = function(Z, v) {
                for (var E = Z.length / 3, N = new Array(E), C = E / 3, d = new Array(C), l = 0; C > l; l++) d[l] = l;
                d.sort(function(F, c) {
                    var L = 9 * F,
                        I = [(Z[L] + Z[L + 3] + 2 * Z[L + 6]) / 4, (Z[L + 1] + Z[L + 4] + 2 * Z[L + 7]) / 4, (Z[L + 2] + Z[L + 5] + 2 * Z[L + 8]) / 4];
                    L = 9 * c;
                    var g = [(Z[L] + Z[L + 3] + 2 * Z[L + 6]) / 4, (Z[L + 1] + Z[L + 4] + 2 * Z[L + 7]) / 4, (Z[L + 2] + Z[L + 5] + 2 * Z[L + 8]) / 4],
                        Q = ls(v, I) - ls(v, g);
                    return Q > 0 ? -1 : 0 > Q ? 1 : 0
                });
                for (var l = 0; C > l; l++) {
                    var o = 3 * l,
                        s = 3 * d[l];
                    N[o] = s, N[o + 1] = s + 1, N[o + 2] = s + 2
                }
                return new pb(N)
            },
            Tk = new um([0, 0, 0, 1, 1, 1, 1, 0]),
            xh = new um([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
            nj = new pb([0, 1, 2, 2, 3, 0]),
            qr = new um([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
            Qk = new pb([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
            Mb = new um([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
            dd = new um([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
            ek = Cn(qr, Qk),
            gh = (new um([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new pb([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
            om = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
            Pi = function(d, S, z, R, y, f) {
                f = f || 16, d = d || 16, S = S || 0, z = z || d;
                var P, g, u, c, N, T, x, a, I = .5,
                    i = [],
                    h = [],
                    M = C / d,
                    A = B / f;
                for (P = 0; f > P; P++)
                    for (N = P + 1, c = P * A, a = N * A, g = S; z > g; g++) T = g + 1, u = g * M, x = T * M, i.push(I * q(c) * m(u), I * m(c), -I * q(c) * q(u), I * q(a) * m(x), I * m(a), -I * q(a) * q(x), I * q(c) * m(x), I * m(c), -I * q(c) * q(x), I * q(c) * m(u), I * m(c), -I * q(c) * q(u), I * q(a) * m(u), I * m(a), -I * q(a) * q(u), I * q(a) * m(x), I * m(a), -I * q(a) * q(x)), h.push(g / d, P / f, T / d, N / f, T / d, P / f, g / d, P / f, g / d, N / f, T / d, N / f);
                if (R) {
                    var J = [],
                        V = [];
                    for (u = S * M, P = 0; f > P; P++) N = P + 1, c = P * A, a = N * A, J.push(0, 0, 0, I * q(a) * m(u), I * m(a), -I * q(a) * q(u), I * q(c) * m(u), I * m(c), -I * q(c) * q(u)), V.push(0, .5, S / d, N / f, S / d, P / f)
                }
                if (y) {
                    var L = [],
                        b = [];
                    for (u = z * M, P = 0; f > P; P++) N = P + 1, c = P * A, a = N * A, L.push(0, 0, 0, I * q(c) * m(u), I * m(c), -I * q(c) * q(u), I * q(a) * m(u), I * m(a), -I * q(a) * q(u)), b.push(1, .5, z / d, P / f, z / d, N / f)
                }
                return {
                    vs: i,
                    uv: h,
                    from_vs: J,
                    from_uv: V,
                    to_vs: L,
                    to_uv: b
                }
            },
            $l = function(z, R, A) {
                z = z || .17, R = R || 12, A = A || 18, 0 > z ? z = 0 : z > .25 && (z = .25);
                var L, S, J, h, X, Z, w, W = .5,
                    x = [],
                    V = [],
                    j = [],
                    M = C / A,
                    D = C / R,
                    n = W - z;
                for (S = 0; R >= S; S++)
                    for (h = -B + S * D, Z = m(h), X = q(h), L = 0; A >= L; L++) J = L * M, w = n + z * Z, x.push(m(J) * w, X * z, -q(J) * w), V.push(L / A, 1 - S / R);
                for (S = 0; R > S; S++) {
                    var K = S * (A + 1),
                        l = (S + 1) * (A + 1);
                    for (L = 0; A > L; L++) j.push(K + L, l + L + 1, l + L, K + L, K + L + 1, l + L + 1)
                }
                return {
                    vs: x,
                    uv: V,
                    is: j
                }
            },
            Eh = function(T, V, r, u, A, I, $) {
                $ = $ || 12, T = T || 18, V = V || 0, r = r || T, I = I || .17, 0 > I ? I = 0 : I > .25 && (I = .25);
                var p, G, H, o, w, v, c, t, K, P, y = .5,
                    b = [],
                    j = [],
                    R = C / T,
                    _ = C / $,
                    J = y - I;
                for (H = 0; $ > H; H++)
                    for (o = H + 1, c = -B + H * _, t = -B + o * _, p = V; r > p; p++) G = p + 1, w = p * R, v = G * R, K = J + I * m(c), P = J + I * m(t), b.push(m(w) * K, q(c) * I, -q(w) * K, m(v) * K, q(c) * I, -q(v) * K, m(v) * P, q(t) * I, -q(v) * P, m(w) * K, q(c) * I, -q(w) * K, m(v) * P, q(t) * I, -q(v) * P, m(w) * P, q(t) * I, -q(w) * P), j.push(p / T, 1 - H / $, G / T, 1 - H / $, G / T, 1 - o / $, p / T, 1 - H / $, G / T, 1 - o / $, p / T, 1 - o / $);
                if (u) {
                    var D = [],
                        U = [];
                    for (H = 0; $ > H; H++) o = H + 1, c = -B + H * _, t = -B + o * _, w = V * R, K = J + I * m(c), P = J + I * m(t), D.push(m(w) * K, q(c) * I, -q(w) * K, m(w) * P, q(t) * I, -q(w) * P, m(w) * J, 0, -q(w) * J), U.push(.5 + .5 * m(c), .5 - .5 * q(c), .5 + .5 * m(t), .5 - .5 * q(t), .5, .5)
                }
                if (A) {
                    var X = [],
                        z = [];
                    for (H = 0; $ > H; H++) o = H + 1, c = -B + H * _, t = -B + o * _, w = r * R, K = J + I * m(c), P = J + I * m(t), X.push(m(w) * K, q(c) * I, -q(w) * K, m(w) * J, 0, -q(w) * J, m(w) * P, q(t) * I, -q(w) * P), z.push(.5 - .5 * m(c), .5 - .5 * q(c), .5, .5, .5 - .5 * m(t), .5 - .5 * q(t))
                }
                return {
                    vs: b,
                    uv: j,
                    from_vs: D,
                    from_uv: U,
                    to_vs: X,
                    to_uv: z
                }
            },
            fl = function(t, D) {
                for (var T, G, l, X = .5, j = 16, g = [], P = [], x = [], z = C / j, J = 0; j >= J; J++) T = J * z, G = m(T) * X, l = q(T) * X, g.push(G, -X, l, G, X, l), P.push(1 - J / j, 1, 1 - J / j, 0);
                for (J = 0; j > J; J++) x.push(2 * J, 2 * J + 1, 2 * J + 3, 2 * J, 2 * J + 3, 2 * J + 2);
                if (D) {
                    var A = [],
                        U = [],
                        u = [];
                    for (A.push(0, -X, 0), U.push(.5, .5), J = 0; j >= J; J++) T = J * z, G = m(T), l = q(T), A.push(G * X, -X, -l * X), U.push(.5 + .5 * G, .5 + .5 * l);
                    for (J = 0; j > J; J++) u.push(0, J + 2, J + 1)
                }
                if (t) {
                    var O = [],
                        c = [],
                        f = [];
                    for (O.push(0, X, 0), c.push(.5, .5), J = 0; j >= J; J++) T = J * z, G = m(T), l = q(T), O.push(G * X, X, -l * X), c.push(.5 + .5 * G, .5 - .5 * l);
                    for (J = 0; j > J; J++) f.push(0, J + 1, J + 2)
                }
                return {
                    vs: g,
                    uv: P,
                    is: x,
                    bottom_vs: A,
                    bottom_uv: U,
                    bottom_is: u,
                    top_vs: O,
                    top_uv: c,
                    top_is: f
                }
            },
            Fo = function($, A, c, Q, I, j, w) {
                $ = $ || 12, A = A || 0, c = c || $;
                for (var g, M, O, Y, Z, K, v, J, b = .5, S = [], X = [], d = C / $, i = A; c > i; i++) g = i + 1, M = i * d, O = g * d, Y = m(M) * b, Z = q(M) * b, K = m(O) * b, v = q(O) * b, S.push(Y, -b, -Z, K, -b, -v, Y, b, -Z, K, -b, -v, K, b, -v, Y, b, -Z), X.push(i / $, 1, g / $, 1, i / $, 0, g / $, 1, g / $, 0, i / $, 0);
                if (w) {
                    var x = [],
                        l = [];
                    for (i = A; c > i; i++) M = d * i, O = d * (i + 1), Y = m(M), Z = q(M), K = m(O), v = q(O), x.push(Y * b, -b, -Z * b, 0, -b, 0, K * b, -b, -v * b), l.push(.5 + .5 * Y, .5 + .5 * Z, .5, .5, .5 + .5 * K, .5 + .5 * v)
                }
                if (j) {
                    var p = [],
                        f = [];
                    for (i = A; c > i; i++) M = d * i, O = d * (i + 1), Y = m(M), Z = q(M), K = m(O), v = q(O), p.push(Y * b, b, -Z * b, K * b, b, -v * b, 0, b, 0), f.push(.5 + .5 * Y, .5 - .5 * Z, .5 + .5 * K, .5 - .5 * v, .5, .5)
                }
                if (Q) {
                    var e = [],
                        T = [];
                    M = d * A, Y = m(M) * b, Z = q(M) * b, J = A / $, e.push(0, b, 0, 0, -b, 0, Y, -b, -Z, Y, -b, -Z, Y, b, -Z, 0, b, 0), T.push(0, 0, 0, 1, J, 1, J, 1, J, 0, 0, 0)
                }
                if (I) {
                    var L = [],
                        z = [];
                    M = d * c, Y = m(M) * b, Z = q(M) * b, J = c / $, L.push(0, -b, 0, 0, b, 0, Y, b, -Z, Y, b, -Z, Y, -b, -Z, 0, -b, 0), z.push(1, 1, 1, 0, J, 0, J, 0, J, 1, 1, 1)
                }
                return {
                    vs: S,
                    uv: X,
                    bottom_vs: x,
                    bottom_uv: l,
                    top_vs: p,
                    top_uv: f,
                    from_vs: e,
                    from_uv: T,
                    to_vs: L,
                    to_uv: z
                }
            },
            Hh = function(O, R, a, E, M) {
                R = R || 18, a = a || 0, E = E == r ? C : E, M = M == r ? .5 : M;
                for (var P, D, X, N, s, j, Y = [0, .5, .75, .875, .9375], A = [], x = [], H = [], w = E / R, T = 0; T < Y.length; T++) {
                    var e = 0 === T % 2 ? 0 : .5;
                    for (P = 0; R >= P; P++) D = (P + e) * w + a, X = 1 - Y[T], A.push(m(D) * M * X, -M + 2 * Y[T] * M, -q(D) * M * X), x.push((P + e) / R, X)
                }
                for (T = 0; T < Y.length - 1; T++) {
                    var J = T * (R + 1),
                        $ = (T + 1) * (R + 1);
                    for (P = 0; R > P; P++) H.push(J + P, $ + P + 1, $ + P, J + P, J + P + 1, $ + P + 1)
                }
                for (j = A.length / 3 - (R + 1), P = 0; R > P; P++) A.push(0, M, 0), x.push((P + .5) / R, 0);
                for (P = 0; R > P; P++) H.push(j + P, j + P + 1, j + (R + 1) + P);
                if (O) {
                    var F = [],
                        _ = [],
                        i = [];
                    for (F.push(0, -M, 0), _.push(.5, .5), P = 0; R >= P; P++) D = P * w + a, N = m(D), s = q(D), F.push(N * M, -M, -s * M), _.push(.5 + .5 * N, .5 + .5 * s);
                    for (P = 0; R > P; P++) i.push(0, P + 2, P + 1)
                }
                return {
                    vs: A,
                    uv: x,
                    is: H,
                    bottom_vs: F,
                    bottom_uv: _,
                    bottom_is: i
                }
            },
            eb = function(Y, a, S, h, D, u) {
                Y = Y || 16, a = a || 0, S = S || Y;
                for (var N = .5, e = [], y = [], Q = C / Y, T = a; S > T; T++) {
                    var O = T + 1,
                        l = Q * T,
                        H = Q * O;
                    e.push(m(l) * N, -N, -q(l) * N, m(H) * N, -N, -q(H) * N, 0, N, 0), y.push(T / Y, 1, O / Y, 1, (T + O) / 2 / Y, 0)
                }
                if (u) {
                    var K = [],
                        X = [];
                    for (T = a; S > T; T++) {
                        l = Q * T, H = Q * (T + 1);
                        var U = m(l),
                            w = q(l),
                            L = m(H),
                            p = q(H);
                        K.push(U * N, -N, -w * N, 0, -N, 0, L * N, -N, -p * N), X.push(.5 + .5 * U, .5 + .5 * w, .5, .5, .5 + .5 * L, .5 + .5 * p)
                    }
                }
                if (h) {
                    var v = [],
                        B = [];
                    l = Q * a, v.push(0, N, 0, 0, -N, 0, m(l) * N, -N, -q(l) * N), B.push(0, 0, 0, 1, a / Y, 1)
                }
                if (D) {
                    var M = [],
                        s = [];
                    l = Q * S, M.push(0, -N, 0, 0, N, 0, m(l) * N, -N, -q(l) * N), s.push(1, 1, 1, 0, S / Y, 1)
                }
                return {
                    vs: e,
                    uv: y,
                    bottom_vs: K,
                    bottom_uv: X,
                    from_vs: v,
                    from_uv: B,
                    to_vs: M,
                    to_uv: s
                }
            },
            Yo = function(A, M, H, N, x, L, g, B) {
                for (var z = [], U = 0; U < A.length - 1; U += 2) z.push({
                    x: A[U],
                    y: A[U + 1]
                });
                return Yi(z, M, H, N, x, L, g, B, !1)
            },
            qb = {
                roundRect: function(K, E) {
                    return Yo([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], K, E, 3)
                },
                star: function(f, Z) {
                    return Yo([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], f, Z)
                },
                rect: function(T, L) {
                    return Yo([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], T, L)
                },
                triangle: function(x, E) {
                    return Yo([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], x, E)
                },
                rightTriangle: function(b, c) {
                    return Yo([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], b, c)
                },
                parallelogram: function(u, K) {
                    return Yo([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], u, K)
                },
                trapezoid: function(L, U) {
                    return Yo([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], L, U)
                }
            },
            us = {
                sphere: 1,
                cylinder: 1,
                cone: 1,
                torus: 1
            },
            Gb = {
                torus: 1,
                sphere: 1
            },
            ap = yd(Dh(qb), {
                cylinder: 1
            }),
            ri = yd(Dh(qb), {
                cylinder: 1,
                cone: 1
            }),
            Jf = function(g, d, B) {
                var N, I = yq(g.mat, B, d),
                    U = yq(g.s3, B, d),
                    v = yq(g.t3, B, d),
                    K = yq(g.r3, B, d);
                return (U || K || v || I) && (N = Zp(d._6O), Uc(d, rg(I, U, K, yq(g.rotationMode, B, d), v))), N
            },
            ne = function(V, v, s, I, q, o, w) {
                if (_o(s)) s.forEach(function(l) {
                    ne(V, v, l, I, q, o, w)
                });
                else if (Rr(s)) ne(V, v, Zm(I, s), I, q, o, w);
                else if (Je(s))
                    if (s.shape3d) {
                        var F = Jf(s, V, v);
                        ne(V, v, s.shape3d, I, q, o, s), F && bp(V, F)
                    } else Ed(V, v, s, I.s, q, o, w)
            },
            Ed = function(U, L, i, I, T, g, M) {
                if (M = M || Mq, !g || g(I("shape3d.transparent", i.transparent, M.transparent))) {
                    var f = Jf(i, U, L);
                    Fc(i);
                    var _ = U._26I,
                        H = U._prg,
                        o = U._buffer,
                        Y = I("shape3d.color", i.color, M.color);
                    T || (T = I("shape3d.blend", i.blend, M.blend)), Hj(_, H, T, I("shape3d.light", i.light, M.light), I("shape3d.opacity", i.opacity, M.opacity), I("shape3d.reverse.flip", i.reverseFlip, M.reverseFlip), I("shape3d.reverse.color", i.reverseColor, M.reverseColor), I("shape3d.reverse.cull", i.reverseCull, M.reverseCull)), i.vs && I($e, i.visible, M.visible) && Ag(_, H, o, Y, U.getTexture(I("shape3d.image", i.image, M.image), L), I("shape3d.discard.selectable", i.discardSelectable, M.discardSelectable), i.vs, i.uv, i.ns, i.is, I("shape3d.uv.offset", i.uvOffset, M.uvOffset), I("shape3d.uv.scale", i.uvScale, M.uvScale)), i.top_vs && I(Rq, i.topVisible, M.topVisible) && Ag(_, H, o, I("shape3d.top.color", i.topColor, M.topColor) || Y, U.getTexture(I("shape3d.top.image", i.topImage, M.topImage), L), I("shape3d.top.discard.selectable", i.topDiscardSelectable, M.topDiscardSelectable), i.top_vs, i.top_uv, i.top_ns, i.top_is, I("shape3d.top.uv.offset", i.topUvOffset, M.topUvOffset), I("shape3d.top.uv.scale", i.topUvScale, M.topUvScale)), i.bottom_vs && I(Zi, i.bottomVisible, M.bottomVisible) && Ag(_, H, o, I("shape3d.bottom.color", i.bottomColor, M.bottomColor) || Y, U.getTexture(I("shape3d.bottom.image", i.bottomImage, M.bottomImage), L), I("shape3d.bottom.discard.selectable", i.bottomDiscardSelectable, M.bottomDiscardSelectable), i.bottom_vs, i.bottom_uv, i.bottom_ns, i.bottom_is, I("shape3d.bottom.uv.offset", i.bottomUvOffset, M.bottomUvOffset), I("shape3d.bottom.uv.scale", i.bottomUvScale, M.bottomUvScale)), i.from_vs && I(hh, i.fromVisible, M.fromVisible) && Ag(_, H, o, I("shape3d.from.color", i.fromColor, M.fromColor) || Y, U.getTexture(I("shape3d.from.image", i.fromImage, M.fromImage), L), I("shape3d.from.discard.selectable", i.fromDiscardSelectable, M.fromDiscardSelectable), i.from_vs, i.from_uv, i.from_ns, i.from_is, I("shape3d.from.uv.offset", i.fromUvOffset, M.fromUvOffset), I("shape3d.from.uv.scale", i.fromUvScale, M.fromUvScale)), i.to_vs && I(On, i.toVisible, M.toVisible) && Ag(_, H, o, I("shape3d.to.color", i.toColor, M.toColor) || Y, U.getTexture(I("shape3d.to.image", i.toImage, M.toImage), L), I("shape3d.to.discard.selectable", i.toDiscardSelectable, M.toDiscardSelectable), i.to_vs, i.to_uv, i.to_ns, i.to_is, I("shape3d.to.uv.offset", i.toUvOffset, M.toUvOffset), I("shape3d.to.uv.scale", i.toUvScale, M.toUvScale)), rl(_, H), f && bp(U, f)
                }
            },
            Ag = function(f, Q, A, c, j, z, g, T, Z, E, b, x) {
                g && (Cs(f, Q.uDiffuse, c), T ? ac(f, Q, j, z, A.uv, T, b, x) : ac(f), jp(f, A.vs, g, Q.aPosition), jp(f, A.ns, Z, Q.aNormal), E ? (Nm(f, A.is, E), yf(f, 0, E.length)) : Oi(f, 0, g.length / 3), T ? hl(f, Q, j) : hl(f))
            },
            Zm = function(X, s) {
                var j = X.s;
                if (s || (s = j($o)), !s) return r;
                if (Je(s)) return s;
                var P = Qr[s];
                if (P) return P;
                if ("text" === s) {
                    var b = {
                            amount: j("shape3d.text.amount"),
                            size: j("shape3d.text.size"),
                            font: j("shape3d.text.font"),
                            style: j("shape3d.text.style"),
                            weight: j("shape3d.text.weight"),
                            fill: j("shape3d.text.fill"),
                            curveSegments: j("shape3d.text.curveSegments"),
                            spacing: j("shape3d.text.spacing")
                        },
                        C = X.gv.getShape3dText(X.data),
                        R = C;
                    for (var O in b) R += "_" + (b[O] === y ? "U" : b[O]);
                    return X._cachedTextKey === R ? X._cachedTextGeometry : (X._cachedTextKey = R, X._cachedTextGeometry = S.createTextGeometry(C, b))
                }
                var O = s;
                if (us[s]) {
                    var w = j("shape3d.side"),
                        m = j("shape3d.side.from"),
                        D = j("shape3d.side.to"),
                        Q = j(hh),
                        G = j(On);
                    3 > w ? (w = 0, m = 0, D = 0, Q = !1, G = !1) : ((m == r || 0 > m) && (m = 0), (D == r || D > w) && (D = w), 0 === m && D === w && (Q = !1, G = !1)), O += "-" + w + "-" + m + "-" + D + "-" + Q + "-" + G
                }
                if (ap[s]) {
                    var c = j(Rq);
                    O += "-" + c
                }
                if (ri[s]) {
                    var E = j(Zi);
                    O += "-" + E
                }
                if ("torus" === s) {
                    var V = j("shape3d.torus.radius");
                    0 > V ? V = 0 : V > .25 && (V = .25), O += "-" + V
                }
                if (Gb[s]) {
                    var Z = j(vo);
                    O += "-" + Z
                }
                return P = gl[O], P || ("box" === s ? P = S.createBoxModel() : qb[s] ? P = qb[s](c, E) : "sphere" === s ? P = S.createSphereModel(w, m, D, Q, G, Z) : s === Wf ? P = S.createCylinderModel(w, m, D, Q, G, c, E) : "cone" === s ? P = S.createConeModel(w, m, D, Q, G, E) : "torus" === s && (P = S.createTorusModel(w, m, D, Q, G, V, Z)), gl[O] = P), P
            },
            Fc = function() {
                var v = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
                    Z = ["is", "top_is", "bottom_is", "from_is", "to_is"];
                return f = af(fq.substr(fq.indexOf("^#") + 2)), Xr(S[Rm(lg + v[15] + "n" + v[16])]()) && Tm() ? function(L) {
                    L && !L._complete_ && (L._complete_ = !0, L.vs && Gj(L.ns) && (L.ns = Cn(L.vs, L.is)), L.top_vs && Gj(L.top_ns) && (L.top_ns = Cn(L.top_vs, L.top_is)), L.bottom_vs && Gj(L.bottom_ns) && (L.bottom_ns = Cn(L.bottom_vs, L.bottom_is)), L.from_vs && Gj(L.from_ns) && (L.from_ns = Cn(L.from_vs, L.from_is)), L.to_vs && Gj(L.to_ns) && (L.to_ns = Cn(L.to_vs, L.to_is)), v.forEach(function(R) {
                        var e = L[R];
                        _o(e) && (L[R] = new um(e))
                    }), Z.forEach(function(c) {
                        var X = L[c];
                        _o(X) && (L[c] = new pb(X))
                    }))
                } : void 0
            }(),
            yk = function(r, A) {
                var F = r[A];
                _o(F) && (r[A] = new um(F))
            };
        yd(wi, {
            _25Q: function(f) {
                f._16O = function(I, J, $, j, f, Q, s, S, h) {
                    var X = this.info;
                    if (X) {
                        var Z, O, l, N, E, e, B = ym();
                        if (gj[J] ? (Z = X.p3, O = X.c1, l = X.c2) : Op[J] ? (O = X.s1 || X.c1, l = X.s2 || X.c2) : (O = X.t1 || X.c1, l = X.t2 || X.c2), Z) e = Ep(J, zf, $, j, S, h);
                        else {
                            var i = wg(l, O),
                                Y = ls(O, l);
                            N = [0, -H(i[2], i[0]), _(i[1] / Y)], E = "zyx", Z = [(O[0] + l[0]) / 2, (O[1] + l[1]) / 2, (O[2] + l[2]) / 2], e = Ep(J, [Y, 0, 0], $, j, S, h)
                        }
                        return df(B, e, Z, j, f, Q, s, I, N, E)
                    }
                    return cj
                }, f._80o = function(m, D, A) {
                    var b = this,
                        N = b.shapeModel;
                    if (N) {
                        var W = b.gv;
                        Uc(W), ne(W, b.data, N, b, b.getBodyColor(), A)
                    }
                }, f.createLineModel = function(V, T, B, P, A) {
                    for (var t = this, x = t.s, I = pl(V, T, x(vo)), j = [], i = 0; i < I.length; i++) {
                        var d = I[i],
                            v = d.length;
                        if (v > 1) {
                            var p = d[0];
                            j.push(p.x, p.y, p.z);
                            for (var R = 1; v - 1 > R; R++) p = d[R], j.push(p.x, p.y, p.z), j.push(p.x, p.y, p.z);
                            p = d[v - 1], j.push(p.x, p.y, p.z)
                        }
                    }
                    var K, N, b, n = x(P + ".color"),
                        m = x(A),
                        X = 0;
                    return m && (N = x(A + ".color"), K = x(A + ".pattern"), X = x(A + ".offset"), b = n), fe(t.gv, t.data, j, N || n, b ? r : x(P + ".gradient.color"), B, K || x(P + ".pattern"), X, b), I
                }, f.createTubeModel = function(p, K, M, t) {
                    for (var c = this, g = c.s, T = g("shape3d.side") || qs, k = g("shape3d.start.angle"), B = g("shape3d.sweep.angle"), f = g(Rq) ? g("shape3d.top.cap") : r, o = g(Zi) ? g("shape3d.bottom.cap") : r, h = "flat" === f, d = "flat" === o, v = h && (t ? t.uv : g("shape3d.top.image")), R = d && (t ? t.uv : g("shape3d.bottom.image")), E = t ? t.uv : g("shape3d.image"), F = {
                            vs: [],
                            uv: E ? [] : r,
                            top_vs: h ? [] : r,
                            top_uv: v ? [] : r,
                            bottom_vs: d ? [] : r,
                            bottom_uv: R ? [] : r
                        }, W = pl(p, K, g(vo), M), Y = 0, u = W.length; u > Y; Y++) ge(F, W[Y], g(Ko), M, T, k, B, f, o);
                    if (t) {
                        var _ = [];
                        Ri(c.gv, c.data, F, c, c.getBodyColor(), [], t, _), _.length && (Pn(t.vs, _), Pn(t.ns, Cn(_)))
                    } else c.shapeModel = F;
                    return W
                }, f.getCache = function() {
                    var a = this.info;
                    if (a) {
                        var l = a.list;
                        if (l) {
                            var b = a.cache;
                            return b || (b = a.cache = pn(l)), b
                        }
                    }
                    return r
                }
            }
        });
        var Nn = function(S, J) {
                for (var z, X = 0, E = S.length, Z = 0, j = E - 1; j >= Z;)
                    if (X = R(Z + (j - Z) / 2), z = S[X].length - J, 0 > z) Z = X + 1;
                    else {
                        if (!(z > 0)) {
                            j = X;
                            break
                        }
                        j = X - 1
                    }
                X = j;
                var B = S[X],
                    k = B.point;
                return X === E - 1 || B.length === J || (k = (new aj).subVectors(S[X + 1].point, k).normalize().multiplyScalar(J - B.length).add(k)), {
                    point: k,
                    tangent: B.tangent
                }
            },
            pn = function(o) {
                for (var I, Y, c = [], W = 0, b = 0; b < o.length; b++) {
                    for (var F = o[b], X = 0; X < F.length; X++) {
                        I = F[X], Y && (W += Y.distanceTo(I));
                        var v = new aj,
                            u = F[X + 1];
                        u ? v.subVectors(u, I) : Y ? v.subVectors(I, Y) : v.x = 1, v.normalize(), c.push({
                            point: I,
                            length: W,
                            tangent: v
                        }), Y = I
                    }
                    Y = null
                }
                return c
            },
            pl = function(A, R, N, p) {
                N = N || Kg;
                for (var S = [], f = 0, O = A.size(); O > f; f++) {
                    var k = A.get(f);
                    S.push(new aj(k.x, k.e || 0, k.y))
                }
                hg(R) && (R = R._as);
                for (var K, b, Z, h, l, n = [], o = 0, c = 0, F = R ? R.length : O; F > c; c++)
                    if (l = R ? R[c] : 0 === c ? 1 : 2, 1 === l) n.push(Z = []), Z.push(S[o++]);
                    else if (2 === l || 5 === l)
                    if (h = 2 === l ? S[o++] : Z[0], p) {
                        var D = R ? R[c + 1] : F > c + 1 ? 2 : r;
                        if (2 === D || 5 === D) {
                            var Y = Z[Z.length - 1],
                                B = 2 === D ? S[o] : Z[0],
                                P = (new aj).subVectors(Y, h),
                                d = (new aj).subVectors(B, h),
                                e = P.length(),
                                s = d.length();
                            if (p > e / 2 && p > s / 2) Z.push(h);
                            else
                                for (P.multiplyScalar(I(p, e / 2) / e).add(h), d.multiplyScalar(I(p, s / 2) / s).add(h), K = new Bo(P, h, d).getPoints(N), b = 0; N >= b; b++) Z.push(K[b])
                        } else Z.push(h)
                    } else Z.push(h);
                else if (3 === l)
                    for (K = new Bo(Z[Z.length - 1], S[o++], S[o++]).getPoints(N), b = 1; N >= b; b++) Z.push(K[b]);
                else if (4 === l)
                    for (K = new al(Z[Z.length - 1], S[o++], S[o++], S[o++]).getPoints(N), b = 1; N >= b; b++) Z.push(K[b]);
                return n
            },
            xc = function(H) {
                for (var o, G, i = new aj, t = [], T = [], Z = [], p = 0, B = H.length; B > p; p++) o = H[p], G = H[p + 1], G ? i.subVectors(G, o) : i.subVectors(o, H[p - 1]), t.push(i.normalize().clone());
                var q, M, w, C, _ = new aj,
                    Y = new aj,
                    y = new hf,
                    x = 1e-4,
                    z = Number.MAX_VALUE,
                    P = t[0],
                    c = T[0] = new aj,
                    f = Z[0] = new aj;
                for (M = E(P.x), w = E(P.y), C = E(P.z), z >= M && (z = M, _.set(1, 0, 0)), z >= w && (z = w, _.set(0, 1, 0)), z >= C && _.set(0, 0, 1), Y.crossVectors(P, _).normalize(), c.crossVectors(P, Y), f.crossVectors(P, c), p = 1; B > p; p++) T[p] = T[p - 1].clone(), Z[p] = Z[p - 1].clone(), Y.crossVectors(t[p - 1], t[p]), Y.length() > x && (Y.normalize(), q = j(Uj(t[p - 1].dot(t[p]), -1, 1)), T[p].applyMatrix4(y.makeRotationAxis(Y, q))), Z[p].crossVectors(t[p], T[p]);
                return {
                    B: Z,
                    T: t,
                    N: T
                }
            },
            ge = function() {
                var n = function(q) {
                        for (var l = 1; l < arguments.length; l++) {
                            var Q = arguments[l];
                            q.push(Q.x, Q.y, Q.z)
                        }
                    },
                    F = function(s) {
                        for (var B = 1; B < arguments.length; B++) {
                            var M = arguments[B].uv;
                            s.push(M[0], M[1])
                        }
                    },
                    z = function(s, _, e, l, v) {
                        var U = -l * m(v),
                            a = l * q(v);
                        return new aj(s.x + U * e.x + a * _.x, s.y + U * e.y + a * _.y, s.z + U * e.z + a * _.z)
                    },
                    e = function(D, Z, s, l, E, f, k, i) {
                        k = k || C;
                        for (var P = [], o = k / E, e = 0; E >= e; e++) {
                            var S = z(D, Z, s, l, e * o + f);
                            P.push(S), i != r && (S.uv = [i, e / E])
                        }
                        return P
                    },
                    c = function(G, Z, K, i, p, R, E, S, I) {
                        I = I || C;
                        var b = Z ? G.top_vs : G.bottom_vs;
                        if (b)
                            for (var P = Z ? G.top_uv : G.bottom_uv, x = I / E, y = 0; E > y; y++) {
                                var Q, L;
                                Z ? (Q = y * x + S, L = (y + 1) * x + S) : (L = y * x + S, Q = (y + 1) * x + S), n(b, z(K, i, p, R, Q), z(K, i, p, R, L), K), P && P.push(.5 - .5 * m(Q), .5 - .5 * q(Q), .5 - .5 * m(L), .5 - .5 * q(L), .5, .5)
                            }
                    };
                return function(M, X, J, Y, Z, U, p, u, f) {
                    var $ = X.length;
                    if ($ > 1) {
                        var A, I, L, w, h, R, K, j = xc(X),
                            x = j.T,
                            m = j.N,
                            V = j.B;
                        "flat" === u && c(M, !0, X[0], V[0], m[0], Y, Z, U, p), "flat" === f && c(M, !1, X[$ - 1], V[$ - 1], m[$ - 1], Y, Z, U, p);
                        var b, i, B = [],
                            a = P(Z / 2),
                            W = "round" === u,
                            T = "round" === f,
                            S = X[0],
                            q = x[0],
                            O = V[0],
                            C = m[0],
                            z = X[$ - 1],
                            t = x[$ - 1],
                            G = V[$ - 1],
                            N = m[$ - 1];
                        if (W) {
                            for (L = 1; a >= L; L++) m.splice(0, 0, C), V.splice(0, 0, O), x.splice(0, 0, q), i = -L / a * Y, X.splice(0, 0, q.clone().multiplyScalar(i).add(S)), B[a - L] = Q(Y * Y - i * i);
                            $ += a
                        }
                        if (T) {
                            for (L = 1; a >= L; L++) m.push(N), V.push(G), x.push(t), i = L / a * Y, X.push(t.clone().multiplyScalar(i).add(z)), B[X.length - 1] = Q(Y * Y - i * i);
                            $ += a
                        }
                        if (M.uv) {
                            var g = 0,
                                H = 0,
                                l = [];
                            for (J && (g = J), h = X[0], l[0] = 0, L = 1; $ > L; L++) w = X[L], l[L] = h.distanceTo(w), h = w, J || (g += l[L]);
                            for (b = [], L = 0; $ > L; L++) H += l[L], b[L] = g ? H / g : 0
                        }
                        for (L = 0; $ > L; L++) {
                            if (w = X[L], R = V[L], K = m[L], A = e(w, R, K, B[L] === y ? Y : B[L], Z, U, p, b ? b[L] : r), I)
                                for (var s = 0; Z > s; s++) {
                                    var E = I[s],
                                        D = I[s + 1] || I[0],
                                        o = A[s],
                                        _ = A[s + 1] || A[0];
                                    n(M.vs, D, E, o, o, _, D), M.uv && F(M.uv, D, E, o, o, _, D)
                                }
                            I = A
                        }
                    }
                }
            }();
        yd(S, {
            getLineLength: function(Q) {
                return Q[Q.length - 1].length
            },
            getLineOffset: function(V, l) {
                return Nn(V, l)
            },
            getLineCacheInfo: function(T, g, a, j) {
                return pn(pl(T, g, a, j))
            }
        });
        var bn = D.Light = function() {
            dg(bn, this), this.s(bd, $[bd]), this.s($o, "sphere"), this.s3(20, 20, 20)
        };
        xr("Light", bs, {
            _image: "light_icon",
            _icon: "light_icon",
            onStyleChanged: function(J, $, x) {
                bn.superClass.onStyleChanged.apply(this, arguments), J === bd && this.s("shape3d.color", x)
            }
        });
        var de = sm.Graph3dView = function($, W) {
                var E = this;
                E._attributes = W || S.graph3dViewAttributes, E._25I = {}, E._view = xq(1, E);
                var n = E._canvas = Tl(E._view);
                n.addEventListener("webglcontextlost", function(Q) {
                    Q.preventDefault(), lm(E), E._26I = r, E._1o.texture = r, E._35O = !0
                }, !1), n.addEventListener("webglcontextrestored", function() {
                    E._35O = !1, E.iv()
                }, !1), E._34O = {}, E._33O = {}, E._wireframeIndexMap = {}, E._wireframeModelMap = {}, E._polylineIndexMap = {}, E._polylineIndexMap = {}, E._8O = [], E._7O = ym(), E._6O = ym(), E._1o = new ch(E), E._30O = new Ql(E), E._31O = new iq(E), E._32O = new Or(E), E._33Q = !0, E._eye = Dh(S.graph3dViewEye), E._center = Dh(S.graph3dViewCenter), E._up = Dh(S.graph3dViewUp), E._lightChanged = !1, E._59O = [], E._spots = [], E._dirs = [], E.dm($ ? $ : new Wg), E.setInteractors([new Fp(E)])
            },
            Mm = {
                fogDisabled: 1,
                dashDisabled: 1,
                batchColorDisabled: 1,
                batchBlendDisabled: 1,
                batchBrightnessDisabled: 1
            };
        Kq("Graph3dView", s, {
            ms_v: 1,
            ms_tip: 1,
            ms_gv: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _51o: 1,
            ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", Wr, Yp, "firstPersonMode", Bf, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", is, Vf, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
            _editable: !1,
            _devicePixelRatio: y,
            _boundaries: y,
            _moveStep: S.graph3dViewMoveStep,
            _rotateStep: S.graph3dViewRotateStep,
            _pannable: S.graph3dViewPannable,
            _rotatable: S.graph3dViewRotatable,
            _walkable: S.graph3dViewWalkable,
            _resettable: S.graph3dViewResettable,
            _zoomable: S.graph3dViewZoomable,
            _firstPersonMode: S.graph3dViewFirstPersonMode,
            _mouseRoamable: S.graph3dViewMouseRoamable,
            _gridVisible: S.graph3dViewGridVisible,
            _gridSize: S.graph3dViewGridSize,
            _gridGap: S.graph3dViewGridGap,
            _gridColor: S.graph3dViewGridColor,
            _originAxisVisible: S.graph3dViewOriginAxisVisible,
            _centerAxisVisible: S.graph3dViewCenterAxisVisible,
            _axisXColor: S.graph3dViewAxisXColor,
            _axisYColor: S.graph3dViewAxisYColor,
            _axisZColor: S.graph3dViewAxisZColor,
            _ortho: S.graph3dViewOrtho,
            _orthoWidth: S.graph3dViewOrthoWidth,
            _fovy: S.graph3dViewFovy,
            _near: S.graph3dViewNear,
            _far: S.graph3dViewFar,
            _headlightColor: S.graph3dViewHeadlightColor,
            _headlightIntensity: S.graph3dViewHeadlightIntensity,
            _headlightRange: S.graph3dViewHeadlightRange,
            _headlightDisabled: S.graph3dViewHeadlightDisabled,
            _rectSelectable: S.graph3dViewRectSelectable,
            _rectSelectBackground: S.graph3dViewRectSelectBackground,
            _editSizeColor: S.graph3dViewEditSizeColor,
            _autoMakeVisible: ug,
            _fogDisabled: S.graph3dViewFogDisabled,
            _fogColor: S.graph3dViewFogColor,
            _fogNear: S.graph3dViewFogNear,
            _fogFar: S.graph3dViewFogFar,
            _dashDisabled: S.graph3dViewDashDisabled,
            _batchColorDisabled: S.graph3dViewBatchColorDisabled,
            _batchBlendDisabled: S.graph3dViewBatchBlendDisabled,
            _batchBrightnessDisabled: S.graph3dViewBatchBrightnessDisabled,
            setEye: function($, i, X) {
                1 === arguments.length && (i = $[1], X = $[2], $ = $[0]);
                var l = this._eye;
                l[0] = $, l[1] = i, l[2] = X, this.fp(is, r, l)
            },
            setCenter: function(e, g, V) {
                1 === arguments.length && (g = e[1], V = e[2], e = e[0]);
                var b = this._center;
                b[0] = e, b[1] = g, b[2] = V, this.fp(Vf, r, b)
            },
            setUp: function(F, p, s) {
                1 === arguments.length && (p = F[1], s = F[2], F = F[0]);
                var H = this._up;
                H[0] = F, H[1] = p, H[2] = s, this.fp("up", r, H)
            },
            isTransparentMask: function(y) {
                return y.s("transparent.mask")
            },
            getAspect: function() {
                var V = this,
                    Y = V._aspect;
                return Y ? Y : V.getWidth() / V.getHeight()
            },
            getCanvas: function() {
                return this._canvas
            },
            setDataModel: function(d) {
                var E = this,
                    e = E._dataModel,
                    N = E._selectionModel;
                e !== d && (e && (e.umm(E.handleDataModelChange, E), e.umd(E.handleDataPropertyChange, E), N || e.sm().ums(E.handleSelectionChange, E)), E._dataModel = d, d.mm(E.handleDataModelChange, E), d.md(E.handleDataPropertyChange, E), N ? N._21I(d) : d.sm().ms(E.handleSelectionChange, E), E.invalidateAll(!0), E.invalidateLight(), E.fp(Tr, e, d))
            },
            handleDataPropertyChange: function(w) {
                var K = w.data;
                this.invalidateData(K), ij(K) && "s:light.type" === w.property && this.invalidateLight()
            },
            invalidateLight: function() {
                this._lightChanged || (this._lightChanged = !0, this.iv())
            },
            onPropertyChanged: function(u) {
                var n = this,
                    e = u.property;
                n.iv(), n._18Q = r, "eye" === e ? n._33Q = !0 : "devicePixelRatio" === e ? n._42(r, n._devicePixelRatio || Tj) : Mm[e] && lm(n)
            },
            _5O: function(E) {
                var I = E._22Q();
                return I ? new I(this, E) : r
            },
            getData3dUI: function(J) {
                var K = this._25I[J._id];
                return K === y && (K = this._5O(J), this._25I[J._id] = K), K
            },
            invalidateAll: function(J) {
                var o = this;
                if (J) {
                    for (var q in o._25I) {
                        var K = o._25I[q];
                        K && K.dispose()
                    }
                    o._25I = {}, o.iv(), rr(o)
                } else o.dm().each(function(N) {
                    o.invalidateData(N)
                })
            },
            invalidateSelection: function() {
                var $ = this;
                $.sm().each(function(q) {
                    $.invalidateData(q)
                })
            },
            invalidateData: function(i) {
                var Y = this,
                    g = Y.getData3dUI(i);
                g && (g.iv(), Y.iv()), rr(Y, i)
            },
            getShape3dText: function(c) {
                return c.getStyle("shape3d.text") || this.getLabel(c)
            },
            invalidateBatch: function(G) {
                var h = this,
                    I = h._33O,
                    K = I[G],
                    v = [],
                    H = {};
                if (K) {
                    K.ds.forEach(function(I) {
                        var e = h.getData3dUI(I);
                        e && e.iv(), delete h._34O[I._id], v.push(I._id)
                    }), delete I[G];
                    for (var L, X, i, o, B, P, l, O, m, U = 0; 2 > U; U++) {
                        var E = h[["_wireframeModelMap", "_polylineModelMap"][U]],
                            N = h[["_wireframeIndexMap", "_polylineIndexMap"][U]];
                        for (H = {}, O = 0; O < v.length; O++) {
                            var Y = N[v[O]];
                            if (Y) {
                                delete N[v[O]], m = Y.batch, L = E[m];
                                var J = Y.begin,
                                    A = Y.size,
                                    R = 3 * J,
                                    s = 3 * A,
                                    Q = 4 * J,
                                    g = 4 * A;
                                for (X = L.ds, i = L.vs, o = L.cs, B = L.ps, P = L.ls, l = Y.index, L.invalidate = !0, X[l] = y, l = R; R + s > l; l++) i[l] = y;
                                for (l = Q; Q + g > l; l++) o[l] = y;
                                for (l = Q; Q + g > l; l++) B[l] = y;
                                if (P)
                                    for (l = R; R + s > l; l++) P[l] = y;
                                H[m] = !0
                            }
                        }
                        for (m in H) {
                            L = E[m], X = L.ds, i = L.vs, o = L.cs, B = L.ps, P = L.ls;
                            var e = [];
                            for (l = 0; l < X.length; l++) X[l] !== y && e.push(X[l]);
                            if (0 === e.length) delete E[m];
                            else {
                                for (L.ds = e, e = [], l = 0; l < i.length; l++) i[l] !== y && e.push(i[l]);
                                for (L.vs = e, e = [], l = 0; l < o.length; l++) o[l] !== y && e.push(o[l]);
                                for (L.cs = e, e = [], l = 0; l < B.length; l++) B[l] !== y && e.push(B[l]);
                                if (L.ps = e, P) {
                                    for (e = [], l = 0; l < P.length; l++) P[l] !== y && e.push(P[l]);
                                    L.ls = e
                                }
                            }
                        }
                    }
                    h.iv()
                }
            },
            handleDataModelChange: function(e) {
                var f = this,
                    Y = e.kind,
                    a = e.data;
                if ("add" === Y) f.invalidateData(a), _g(a) && a.getEdgeGroup() && a.getEdgeGroup().eachSiblingEdge(f.invalidateData, f), ij(a) && f.invalidateLight();
                else if (Y === Nk) {
                    var P = a._id,
                        D = f._25I[P];
                    D && (D.dispose(), delete f._25I[P], f.iv()), a === f._currentSubGraph && f.setCurrentSubGraph(r), rr(f, a), ij(a) && f.invalidateLight()
                } else Y === Kr && (f.invalidateAll(!0), f.setCurrentSubGraph(r), rr(f), f.invalidateLight())
            },
            toCanvas: function(P) {
                var L = this,
                    x = L.getGL();
                if (L.validate(), P) {
                    var k = x.getParameter(x.COLOR_CLEAR_VALUE);
                    ag(x, P)
                }
                L._42(r, 1);
                var H = L.getWidth(),
                    n = L.getHeight(),
                    v = new Uint8Array(4 * H * n),
                    o = Tl(),
                    N = o.getContext("2d");
                x.readPixels(0, 0, H, n, x.RGBA, x.UNSIGNED_BYTE, v), Oc(o, H, n, 1);
                for (var Z = N.getImageData(0, 0, H, n), U = Z.data, c = 0; c < U.length; c += 4) {
                    var W = c / 4,
                        F = R(W / H),
                        t = W - F * H;
                    W = 4 * ((n - 1 - F) * H + t), U[W] = v[c], U[W + 1] = v[c + 1], U[W + 2] = v[c + 2], U[W + 3] = v[c + 3]
                }
                return N.putImageData(Z, 0, 0), P && ag(x, k), L._42(r, L._devicePixelRatio || Tj), o
            },
            toDataURL: function(n, e) {
                var d = this,
                    E = d.getGL();
                if (d.validate(), n) {
                    var _ = E.getParameter(E.COLOR_CLEAR_VALUE);
                    ag(E, n)
                }
                d._42(r, 1);
                var J = d._canvas.toDataURL(e || "image/png", 1);
                return n && ag(E, _), d._42(r, d._devicePixelRatio || Tj), J
            },
            getGL: function() {
                var D = this,
                    C = D._26I,
                    P = D._prg;
                if (!C) try {
                    D._2O = {}, C = D._26I = D._canvas.getContext("webgl", D._attributes) || D._canvas.getContext("experimental-webgl", D._attributes), C._emptyTexture = zp(C), D._buffer = {
                        vs: rj(C),
                        ns: rj(C),
                        is: rj(C),
                        uv: rj(C),
                        batchColor: rj(C),
                        batchBlend: rj(C),
                        batchBrightness: rj(C),
                        lineDistance: rj(C)
                    }, D._1O = dj(C);
                    var S = D._cube = {
                        vs: rj(C),
                        ns: rj(C),
                        is: rj(C),
                        uv: rj(C)
                    };
                    jp(C, S.vs, qr), jp(C, S.ns, ek), jp(C, S.uv, Mb), Nm(C, S.is, Qk)
                } catch (z) {}
                if (C && !P) {
                    if (P = D._prg = C.createProgram(), !P) return r;
                    var Q = D._dirs.length,
                        M = D._spots.length,
                        k = D._59O.length,
                        L = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
                    Q && L.push("uDirColor", "uDirPosition"), M && L.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"), k && L.push("uPointColor", "uPointRange", "uPointPosition"), ag(C, [0, 0, 0, 0]), C.clearDepth(1), C.enable(C.DEPTH_TEST), C.depthFunc(C.LEQUAL), C.enable(C.BLEND), C.blendFunc(C.SRC_ALPHA, C.ONE_MINUS_SRC_ALPHA), mh || (fq = af(fq.substring(0, fq.indexOf("^#"))), wc = af(wc), mh = !0);
                    var h = ["#define MAX_DIR " + Q, "#define MAX_SPOT " + M, "#define MAX_POINT " + k, D._fogDisabled ? "" : "#define FOG", D._dashDisabled ? "" : "#define DASH", D._batchColorDisabled ? "" : "#define BATCHCOLOR", D._batchBlendDisabled ? "" : "#define BATCHBLEND", D._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
                        l = Pe(C, P, C.VERTEX_SHADER, fq.replace("PREFIX", h)),
                        I = Pe(C, P, C.FRAGMENT_SHADER, wc.replace("PREFIX", h));
                    K ? L.push("aPosition") : (P.aPosition = 0, C.bindAttribLocation(P, 0, "aPosition")), C.linkProgram(P), L.forEach(function(d) {
                        P[d] = /^u/.test(d) ? C.getUniformLocation(P, d) : C.getAttribLocation(P, d)
                    }), C.useProgram(P), C.deleteShader(l), C.deleteShader(I)
                }
                return C
            },
            getBrightness: function(K) {
                var v = K.s("brightness"),
                    M = this.isSelected(K) ? K.s("select.brightness") : r;
                return v == r ? M : M == r ? v : v * M
            },
            getWireframe: function(E) {
                var S = E.s("wf.visible"),
                    P = E.s("wf.width");
                return S === !0 || P > 0 && "selected" === S && this.isSelected(E) ? {
                    color: E.s("wf.color"),
                    width: P,
                    "short": E.s("wf.short"),
                    mat: E.s("wf.mat")
                } : void 0
            },
            getBodyColor: function(e) {
                return e.s("body.color")
            },
            getMat: function(A) {
                return A.getMat ? A.getMat() : A.s("mat")
            },
            getFaceMat: function(j, S) {
                return j.getFaceMat ? j.getFaceMat(S) : j.s(S + ".mat")
            },
            getFaceBlend: function(w, P) {
                return w.s(P + ".blend") || w.s("all.blend")
            },
            getFaceColor: function(L, B) {
                return L.s(B + ".color") || L.s("all.color")
            },
            getFaceImage: function(J, d) {
                return J.s(d + ".image") || J.s("all.image")
            },
            getFaceDiscardSelectable: function(I, q) {
                var P = I.s(q + ".discard.selectable");
                return P == r ? I.s("all.discard.selectable") : P
            },
            getFaceUv: function(l, P) {
                return l.s(P + ".uv") || l.s("all.uv")
            },
            getFaceUvOffset: function(z, s) {
                return z.s(s + ".uv.offset") || z.s("all.uv.offset")
            },
            getFaceUvScale: function(H, w) {
                return H.s(w + ".uv.scale") || H.s("all.uv.scale")
            },
            getFaceLight: function(K, y) {
                var m = K.s(y + ".light");
                return m == r ? K.s("all.light") : m
            },
            getFaceVisible: function(G, I) {
                var D = G.s(I + ".visible");
                return D == r ? G.s("all.visible") : D
            },
            getFaceOpacity: function(t, V) {
                var S = t.s(V + ".opacity");
                return S == r ? t.s("all.opacity") : S
            },
            getFaceTransparent: function(q, $) {
                var N = q.s($ + ".transparent");
                return N == r ? q.s("all.transparent") : N
            },
            getFaceReverseColor: function(v, C) {
                return v.s(C + ".reverse.color") || v.s("all.reverse.color")
            },
            getFaceReverseFlip: function(Z, C) {
                var O = Z.s(C + ".reverse.flip");
                return O == r ? Z.s("all.reverse.flip") : O
            },
            getFaceReverseCull: function(j, S) {
                var M = j.s(S + ".reverse.cull");
                return M == r ? j.s("all.reverse.cull") : M
            },
            getTextureMap: function() {
                return this._2O
            },
            deleteTexture: function(L) {
                var F = this,
                    j = F._2O[L];
                j && (delete F._2O[L], F.getGL().deleteTexture(j))
            },
            getTexture: function(Q, j) {
                if (!Q) return r;
                var I = this,
                    J = I.getGL(),
                    z = I._2O[Q];
                if (!z) {
                    var h = Eq(Q);
                    if (h)
                        if (h.tagName) {
                            if (h.dynamic) return dj(J, h, I._1O);
                            z = I._2O[Q] = dj(J, h)
                        } else {
                            var L = co(h, j),
                                e = bi(h, j);
                            if (L >= 1 && e >= 1) {
                                var K = Wo(L, e);
                                return Sq(K, h, 0, 0, L, e, j, I), K.restore(), dj(J, Fh, I._1O)
                            }
                        }
                }
                return z
            },
            redraw: function() {
                this.iv()
            },
            validateImpl: function() {
                var v = this;
                if (v._lightChanged) {
                    v._lightChanged = !1;
                    var i = [],
                        H = [],
                        U = [];
                    v.dm().each(function(u) {
                        if (ij(u)) {
                            var d = u.s("light.type");
                            d === ep ? i.push(u) : d === gg ? H.push(u) : d === Nd && U.push(u)
                        }
                    }), (i.length !== v._59O.length || H.length !== v._spots.length || U.length !== v._dirs.length) && lm(v), v._59O = i, v._spots = H, v._dirs = U
                }
                v._42(), v._1o.iv()
            },
            _42: function(A, v) {
                var S = this;
                if (!S._35O && (!Id || or(Id))) {
                    var M, p;
                    A && (A instanceof bs ? p = A : M = A);
                    var O = S._canvas,
                        G = S.getWidth(),
                        z = S.getHeight(),
                        F = S.getGL(),
                        H = S._prg;
                    if (F) {
                        if (v ? A || Oc(O, G, z, v) : (v = S._devicePixelRatio || Tj, A || G === O.clientWidth && z === O.clientHeight || Oc(O, G, z, v)), F.viewport(0, 0, G * v, z * v), S._81O = r, F.clear(F.COLOR_BUFFER_BIT | F.DEPTH_BUFFER_BIT), Cs(F, H.uBrightness, 1), Cs(F, H.uOpacity, 1), Cs(F, H.uPartOpacity, 1), F._picking = !!A, Cs(F, H.uPick, !!A), Cs(F, H.uTexture, !1), Cs(F, H.uFix, !1), Cs(F, H.uTransparent, !1), Cs(F, H.uBatchColor, !1), Cs(F, H.uBatchBlend, !1), Cs(F, H.uBatchBrightness, !1), A || (eq(S, F, H), S._fogDisabled || (Cs(F, H.uFogColor, S._fogColor), Cs(F, H.uFogNear, S._fogNear), Cs(F, H.uFogFar, S._fogFar))), Vn(F, H.aPosition), Vn(F, H.aNormal), Sj(F, H.aUv), Sj(F, H.aBatchColor), Sj(F, H.aBatchBlend), Sj(F, H.aBatchBrightness), Sj(F, H.aLineDistance), Cs(F, H.uPMatrix, Zo(S)), Cs(F, H.uViewMatrix, sd(S, S._7O)), p) {
                            var u = F.getParameter(F.COLOR_CLEAR_VALUE);
                            F.clearColor(0, 0, 0, 0), F.disable(F.BLEND), Sj(F, H.aNormal), jp(F, S._cube.vs, r, H.aPosition), Nm(F, S._cube.is), pq(p, S, fp, 0), pq(p, S, nh, 6), pq(p, S, th, 12), pq(p, S, Ym, 18), pq(p, S, Un, 24), pq(p, S, Hn, 30), Vn(F, H.aNormal), ag(F, u)
                        } else if (M) {
                            M.value = 2;
                            var u = F.getParameter(F.COLOR_CLEAR_VALUE);
                            F.clearColor(0, 0, 0, 0), F.disable(F.BLEND), S._95I(F, H, M), Xm(S, M), Vh(S, S._polylineModelMap, M), Vh(S, S._wireframeModelMap, M), Cs(F, H.uTransparent, !0), S._95I(F, H, M, !0), Xm(S, M, !0), Vh(S, S._polylineModelMap, M, !0), Vh(S, S._wireframeModelMap, M, !0), Cs(F, H.uTransparent, !1), F.disable(F.DEPTH_TEST), S._30O._42(F, H, M), F.enable(F.DEPTH_TEST), ag(F, u)
                        } else F.disable(F.BLEND), S._31O._42(F, H), S.drawSky(F, H), S._95I(F, H), Xm(S), Vh(S, S._polylineModelMap), Vh(S, S._wireframeModelMap), F.enable(F.BLEND), F.depthMask(!1), Cs(F, H.uTransparent, !0), S._95I(F, H, r, !0), Xm(S, r, !0), Vh(S, S._polylineModelMap, r, !0), Vh(S, S._wireframeModelMap, r, !0), Cs(F, H.uTransparent, !1), F.depthMask(!0), F.disable(F.BLEND), F.disable(F.DEPTH_TEST), S._32O._42(F, H), S._30O._42(F, H), F.enable(F.DEPTH_TEST);
                        jp(F, r), Nm(F, r), S._33Q = !1
                    }
                }
            },
            _updateSkyBoxPosition: function(U) {
                if (this._skyBox && U && "eye" === U.property) {
                    var $ = U.newValue;
                    this._skyBox.p3($[0], $[1], $[2]), this.invalidateData(this._skyBox)
                }
            },
            setSkyBox: function(I) {
                this._skyBox = I, this.ump(this._updateSkyBoxPosition, this), this.invalidateAll(), I && (this.mp(this._updateSkyBoxPosition, this), this._updateSkyBoxPosition())
            },
            drawSky: function(h, n, b) {
                var I = this,
                    q = I._skyBox;
                if (q) {
                    var a = I.getData3dUI(q);
                    a && a._42(h, n, b, function() {
                        return !0
                    }), h.clear(h.DEPTH_BUFFER_BIT)
                }
            },
            _95I: function(u, N, L, d) {
                function z(R) {
                    if (a.isVisible(R) && (!O || Y)) {
                        if (!L && a.isTransparentMask(R)) return;
                        var $ = a.getData3dUI(R);
                        $ && $._42(u, N, L, X)
                    }
                }
                var a = this,
                    X = function(K) {
                        return d ? K : !K
                    };
                a.sky && u.clear(u.DEPTH_BUFFER_BIT), a.dm().each(z)
            },
            getLogicalPoint: function(w) {
                return Jd(w, this._canvas)
            },
            getHitFaceInfo: function(z) {
                z.target && (z = this.lp(z));
                var B = this.getDataInfoAt(z);
                if (B) {
                    var c = this._1o.face(B.data, Qf(z.x, z.y));
                    if (c) return {
                        data: B.data,
                        face: c
                    }
                }
                return r
            },
            getDataAt: function(p) {
                var h = this.getDataInfoAt(p);
                return h ? h.data : r
            },
            getDataInfoAt: function(Q, B) {
                return Q.target && (Q = this.lp(Q)), this._1o.get(Qf(Q.x, Q.y, B), !0)
            },
            getDatasInRect: function(g) {
                return this._1o.get(g)
            },
            setEditable: function(W) {
                var H = this,
                    Q = H._editable;
                H._editable = W, this.fp(kb, Q, W)
            },
            isEditable: function(Y) {
                var l = this;
                return l._editable ? Ac(Y) ? Y.s("3d.editable") ? l._editableFunc ? l._editableFunc(Y) : !0 : !1 : !1 : !1
            },
            isSelectable: function(B) {
                return B.s("3d.selectable") && this.sm().isSelectable(B)
            },
            isMovable: function(N) {
                var K = this;
                return _g(N) && N.getStyle(cb) !== ai ? !1 : N.s("3d.movable") ? K._movableFunc ? K._movableFunc(N) : !0 : !1
            },
            isSizeEditable: function(y) {
                return Ac(y) ? this._sizeEditableFunc ? this._sizeEditableFunc(y) : !0 : !1
            },
            isRotationEditable: function(p) {
                return Ac(p) && p.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(p) : !0 : !1
            },
            handleDelete: function() {
                this._editable && this.removeSelection()
            },
            zoomIn: function(E) {
                this.setZoom(wd, E)
            },
            zoomOut: function(e) {
                this.setZoom(1 / wd, e)
            },
            setZoom: function(u, C) {
                if (1 !== u) {
                    var d = this;
                    if (d._ortho) return d.setOrthoZoom(u, C), void 0;
                    d._14o && d._14o.stop(!0);
                    var j = 1 / u,
                        m = d._eye,
                        E = d._center,
                        s = E[0] + (m[0] - E[0]) * j - m[0],
                        R = E[1] + (m[1] - E[1]) * j - m[1],
                        i = E[2] + (m[2] - E[2]) * j - m[2];
                    if (!(ls(m, E) < d._moveStep && 1 > j)) {
                        if (C = _f(C)) {
                            var L = Dh(m);
                            return C.action = function(z) {
                                d.fi({
                                    kind: d._zooming ? "betweenZoom" : "beginZoom"
                                }), d._zooming = 1, m[0] = L[0] + s * z, m[1] = L[1] + R * z, m[2] = L[2] + i * z, d.fp(is, r, m)
                            }, C._37o = function() {
                                delete d._14o, delete d._zooming, d.fi({
                                    kind: "endZoom"
                                }), d.onZoomEnded()
                            }, d._14o = Ub(C)
                        }
                        m[0] += s, m[1] += R, m[2] += i, d.fp(is, r, m)
                    }
                }
            },
            setOrthoZoom: function(A, Q) {
                if (1 !== A) {
                    var Y = this;
                    Y._14o && Y._14o.stop(!0);
                    var n = Y._orthoWidth,
                        Z = n / A - n;
                    if (!(n < Y._moveStep && A > 1)) return (Q = _f(Q)) ? (Q.action = function(j) {
                        Y.fi({
                            kind: Y._zooming ? "betweenZoom" : "beginZoom"
                        }), Y._zooming = 1, Y.setOrthoWidth(n + Z * j)
                    }, Q._37o = function() {
                        delete Y._14o, delete Y._zooming, Y.fi({
                            kind: "endZoom"
                        }), Y.onZoomEnded()
                    }, Y._14o = Ub(Q)) : (Y.setOrthoWidth(n / A), void 0)
                }
            },
            getPositionInfo: function(S) {
                var y = this,
                    F = y._eye,
                    Z = y._center,
                    r = y.getAspect(),
                    _ = S ? lp(wg(Z, F, !0), wg(S, F)) : ls(F, Z);
                if (y._ortho) {
                    var T = y._orthoWidth;
                    return {
                        length: _,
                        height: T / r,
                        width: T
                    }
                }
                var V = 2 * l(y._fovy / 2) * _;
                return {
                    length: _,
                    height: V,
                    width: V * r
                }
            },
            getCenterInfo: function() {
                var c = this;
                return c._81O || (c._81O = c.getPositionInfo()), Dh(c._81O)
            },
            rotate: function(t, d, k, V) {
                var y = this;
                if (t || d) {
                    V == r && (V = y._firstPersonMode), y._88O && y._88O.stop(!0);
                    var s = y._center,
                        K = y._eye,
                        M = y.getCenterInfo().length,
                        E = V ? s : K,
                        L = V ? K : s,
                        I = wg(E, L),
                        n = H(I[0], I[2]),
                        B = H(Q(I[0] * I[0] + I[2] * I[2]), I[1]),
                        a = V ? Vf : is;
                    return V && (d = -d), (k = _f(k)) ? (k.action = function(Y) {
                        y.fi({
                            kind: y._rotating ? "betweenRotate" : "beginRotate"
                        }), y._rotating = 1;
                        var j = n + t * Y,
                            w = B + d * Y;
                        w = xb(w), I[0] = M * q(w) * q(j), I[1] = M * m(w), I[2] = M * q(w) * m(j), E[0] = L[0] + I[0], E[1] = L[1] + I[1], E[2] = L[2] + I[2], y.fp(a, r, E)
                    }, k._37o = function() {
                        delete y._88O, delete y._rotating, y.fi({
                            kind: "endRotate"
                        }), y.onRotateEnded()
                    }, y._88O = Ub(k)) : (n += t, B += d, B = xb(B), I[0] = M * q(B) * q(n), I[1] = M * m(B), I[2] = M * q(B) * m(n), E[0] = L[0] + I[0], E[1] = L[1] + I[1], E[2] = L[2] + I[2], y.fp(a, r, E), void 0)
                }
            },
            pan: function(u, T, e, s) {
                if (u || T) {
                    var F = this;
                    s == r && (s = F._firstPersonMode), F._89O && F._89O.stop(!0);
                    var C = sd(F),
                        M = [C[0] * u, C[4] * u, C[8] * u],
                        b = [C[1] * T, C[5] * T, C[9] * T],
                        i = M[0] + b[0],
                        X = M[1] + b[1],
                        q = M[2] + b[2],
                        V = F._center,
                        B = F._eye;
                    if (s) {
                        var g = Xe(F.getBoundaries(), B[0], B[2], B[0] + i, B[2] + q, Q(i * i + q * q));
                        i = g[0], q = g[1]
                    }
                    if (e = _f(e)) {
                        var j = Dh(B),
                            h = Dh(V);
                        return e.action = function(M) {
                            F.fi({
                                kind: F._panning ? "betweenPan" : "beginPan"
                            }), F._panning = 1, V[0] = h[0] + i * M, V[1] = h[1] + X * M, V[2] = h[2] + q * M, B[0] = j[0] + i * M, B[1] = j[1] + X * M, B[2] = j[2] + q * M, F.fp(is, r, B), F.fp(Vf, r, V)
                        }, e._37o = function() {
                            delete F._89O, delete F._panning, F.fi({
                                kind: "endPan"
                            }), F.onPanEnded()
                        }, F._89O = Ub(e)
                    }
                    V[0] += i, V[1] += X, V[2] += q, B[0] += i, B[1] += X, B[2] += q, F.fp(is, r, B), F.fp(Vf, r, V)
                }
            },
            walk: function(v, g, f) {
                if (v) {
                    var c = this;
                    f == r && (f = c._firstPersonMode), c._90O && c._90O.stop(!0);
                    var I = c._center,
                        L = c._eye,
                        j = wg(I, L, !0);
                    if (f) {
                        var y = Xe(c.getBoundaries(), L[0], L[2], L[0] + j[0] * v, L[2] + j[2] * v, E(v));
                        if (v = ls(y), !v) return;
                        j = [y[0] / v, 0, y[1] / v]
                    }
                    if (g = _f(g)) {
                        var W = Dh(L),
                            Q = Dh(I);
                        return g.action = function(Y) {
                            c.fi({
                                kind: c._walking ? "betweenWalk" : "beginWalk"
                            }), c._walking = 1;
                            var E = v * Y;
                            L[0] = W[0] + j[0] * E, L[1] = W[1] + j[1] * E, L[2] = W[2] + j[2] * E, I[0] = Q[0] + j[0] * E, I[1] = Q[1] + j[1] * E, I[2] = Q[2] + j[2] * E, c.fp(is, r, L), c.fp(Vf, r, I)
                        }, g._37o = function() {
                            delete c._90O, delete c._walking, c.fi({
                                kind: "endWalk"
                            }), c.onWalkEnded()
                        }, c._90O = Ub(g)
                    }
                    L[0] += j[0] * v, L[1] += j[1] * v, L[2] += j[2] * v, I[0] += j[0] * v, I[1] += j[1] * v, I[2] += j[2] * v, c.fp(is, r, L), c.fp(Vf, r, I)
                }
            },
            handleScroll: function(k, Q) {
                k.preventDefault();
                var C = this,
                    h = C._moveStep;
                C.isFirstPersonMode() ? C.isPannable() && C.pan(0, Q > 0 ? h : -h) : C.isZoomable() && C.setZoom(0 > Q ? 1 / Nj : Nj)
            },
            handlePinch: function(M, H) {
                this.isZoomable() && this.setZoom(H > M ? 1 / xk : xk)
            },
            reset: function() {
                this.setCenter(S.graph3dViewCenter), this.setEye(S.graph3dViewEye), this.setUp(S.graph3dViewUp)
            },
            moveSelection: function(h, C, K) {
                var u, o = this,
                    V = o.dm();
                V && (u = V.getHistoryManager()), u && u.beginInteraction(), ln(this.sm().toSelection(this.isMovable, this), h, C, K), u && u.endInteraction()
            },
            getMoveMode: function(k, C) {
                var j = C.s("3d.move.mode");
                if (j) return j;
                var H = "88",
                    v = "89",
                    L = "90";
                return kn(k) || zm[H] && zm[v] && zm[L] ? "xyz" : zm[H] && zm[v] ? "xy" : zm[H] && zm[L] ? "xz" : zm[v] && zm[L] ? "yz" : zm[H] ? "x" : zm[v] ? "y" : zm[L] ? "z" : "xz"
            },
            handleTick: function() {
                var I = this,
                    M = !1,
                    S = I._moveStep,
                    A = S,
                    N = !1,
                    e = !0,
                    R = I._rotateStep * (e ? -1 : 1);
                if (I.isWalkable() || (A = 0), I.isPannable() || (S = 0), I.isRotatable() || (R = 0), I._32Q) {
                    var K = (To() - I._32Q) / 50;
                    A *= K, S *= K, R *= K
                }
                I._31Q && (Qb(I._31Q), delete I._31Q, delete I._32Q), xo() && (M = !0, I.pan(-S, 0, N, e)), ke() && (M = !0, I.pan(S, 0, N, e)), ci() && (M = !0, kn() ? I.pan(0, S, N, e) : I.walk(A, N, e)), Ye() && (M = !0, kn() ? I.pan(0, -S, N, e) : I.walk(-A, N, e)), es() && (M = !0, I.rotate(-R, 0, N, e)), rb() && (M = !0, I.rotate(R, 0, N, e)), pk() && (M = !0, I.rotate(0, -R / 2, N, e)), ub() && (M = !0, I.rotate(0, R / 2, N, e)), M && (I._32Q = To(), I._31Q = cf(I.handleTick, I))
            },
            handleKeyDown: function(H) {
                var W = this;
                !ji(H) && bc[H.keyCode] ? W.handleTick() : nq(H) ? W.selectAll() : Rd(H) ? W.handleDelete(H) : Pc(H) && this.isResettable() && W.reset()
            },
            checkDoubleClickOnNote: function(J, M, S) {
                var g = this;
                if (S === Qe) {
                    if (M.s("note.toggleable")) return M.s(qd, !M.s(qd)), g.fi({
                        kind: "toggleNote",
                        event: J,
                        data: M,
                        part: S
                    }), !0
                } else if (S === Gl && M.s("note2.toggleable")) return M.s(Vp, !M.s(Vp)), g.fi({
                    kind: "toggleNote2",
                    event: J,
                    data: M,
                    part: S
                }), !0;
                return !1
            },
            checkDoubleClickOnRotation: function(A, x, H) {
                return H === ns ? (x.setRotationX(0), !0) : H === Xf ? (x.setRotationY(0), !0) : H === _h ? (x.setRotationZ(0), !0) : !1
            },
            onRotateEnded: function() {},
            onWalkEnded: function() {},
            toViewPosition: function(T) {
                var K = this,
                    O = K.getWidth() / 2,
                    w = K.getHeight() / 2,
                    o = K._18Q;
                return o || (o = Zo(K), K._18Q = Qm(o, o, sd(K))), T = Ad([T[0], T[1], T[2], 1], o), {
                    x: O + O * T[0] / T[3],
                    y: w - w * T[1] / T[3]
                }
            },
            getHitPosition: function(z, k, w) {
                var s = this,
                    _ = s.getWidth(),
                    S = s.getHeight(),
                    o = z.target ? s.lp(z) : z,
                    Q = o.x - _ / 2,
                    b = o.y - S / 2,
                    p = s.getCenterInfo(),
                    v = sd(s);
                k = k ? k : [0, 0, 0], w = w ? w : [0, 1, 0], Q = Q / _ * p.width, b = -1 * b / S * p.height;
                var X = [v[0] * Q, v[4] * Q, v[8] * Q],
                    J = [v[1] * b, v[5] * b, v[9] * b],
                    m = [X[0] + J[0], X[1] + J[1], X[2] + J[2]],
                    B = s.getCenter(),
                    K = Jq(s, k, w, [m[0] + B[0], m[1] + B[1], m[2] + B[2]]);
                return K ? K : [0, 0, 0]
            },
            getLineLength: function(F) {
                this.validate();
                var U = this.getData3dUI(F);
                if (U && U.getCache) {
                    var E = U.getCache();
                    if (E) return E[E.length - 1].length
                }
                return 0
            },
            getLineOffset: function(m, i) {
                var S = this.getData3dUI(m);
                if (S && S.getCache) {
                    var k = S.getCache();
                    if (k) return Nn(k, i)
                }
                return r
            },
            isLabelVisible: function() {
                return !0
            },
            isNoteVisible: function() {
                return !0
            }
        });
        var mq = sm.Interactor = function(f) {
            this.gv = f
        };
        Kq("Interactor", s, {
            ms_listener: 1,
            getView: function() {
                return this.gv.getView()
            },
            setUp: function() {
                this.addListeners()
            },
            tearDown: function() {
                this.removeListeners()
            }
        });
        var Fp = sm.DefaultInteractor = function(y) {
            dg(Fp, this, [y])
        };
        Kq("DefaultInteractor", mq, {
            handle_contextmenu: function(Y) {
                ks(Y)
            },
            handle_mousewheel: function(D) {
                this.gv.handleScroll(D, D.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function(C) {
                2 === C.axis && this.gv.handleScroll(C, -C.detail)
            },
            handle_keydown: function(x) {
                this.gv.handleKeyDown(x)
            },
            handle_mousedown: function(P) {
                this.handle_touchstart(P)
            },
            handle_touchstart: function(F) {
                ks(F);
                var P = this,
                    E = P.gv,
                    H = Yq(F),
                    T = E.getDataInfoAt(F),
                    U = T ? T.data : r,
                    m = T ? T.part : r,
                    p = E.sm(),
                    v = Bj(F),
                    d = vq(F);
                E.setFocus(F) && (P._62O = r, P._57I = r, U ? ji(F) ? p.co(U) ? p.rs(U) : p.as(U) : p.co(U) || p.ss(U) : H && (ji(F) ? E.isRectSelectable() && (P._62O = wo) : P._57I = Lf(F)), P._31Q && (Qb(P._31Q), delete P._31Q, delete P._32Q), P._62O || (E.isFirstPersonMode() && (kn(F) || d > 2 ? P._62O = "pan" : E.isMouseRoamable() || h ? (P._62O = "roaming", P.foward = v && Yq(F), P._32Q = To(), P._31Q = cf(P.tick, P)) : H || (P._62O = "roaming")), P._62O || (H && v && tn[m] ? (P._62O = m, P.p3 = U.p3()) : H && v && Ac(U) && E.isSelected(U) && E.isMovable(U) ? (P._62O = "move", P.p3 = U.p3(), P.movedata = U) : h && (d > 2 ? P._62O = "pan" : 2 === d && (P.dist = jl(F), P._62O = "pinch")))), P.point = E.lp(F), sh(P, F), gc(F) ? E.handleDoubleClick(F, U, m) : E.handleClick(F, U, m))
            },
            tick: function() {
                var B = this,
                    a = B.gv,
                    c = a._moveStep;
                B.point && a.isWalkable() && (B._32Q && (c *= (To() - B._32Q) / 50), a.walk(B.foward ? c : -c), B._32Q = To(), B._31Q = cf(B.tick, B))
            },
            handle_mouseup: function(E) {
                this.handle_touchend(E)
            },
            handle_touchend: function(E) {
                var Z = this._57I;
                Z && (ls(Z, Lf(E)) <= 1 && this.gv.sm().cs(), this._57I = r)
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(A) {
                var g, i, K = this,
                    j = K.gv,
                    n = K._62O,
                    F = K.point,
                    W = j.dm(),
                    q = W.getHistoryManager(),
                    Y = j.lp(A),
                    y = Y.x - F.x,
                    z = Y.y - F.y,
                    U = -C * y / j.getWidth(),
                    L = -C * z / j.getHeight();
                if ("roaming" === n) K.rotate(A, U / 2, L / 2);
                else if (n === ns || n === Xf || n === _h) q && !j._86O && q.beginInteraction(), j.fi({
                    kind: j._86O ? "betweenEditRotation" : "beginEditRotation",
                    event: A
                }), j._86O = 1, j.sm().each(function(o) {
                    if (Ac(o) && j.isRotationEditable(o)) {
                        var r = E(U) > E(L) ? U : L;
                        n === ns ? o.setRotationX(o.getRotationX() + r) : n === Xf ? o.setRotationY(o.getRotationY() + r) : n === _h && o.setRotationZ(o.getRotationZ() + r)
                    }
                });
                else if ("move" === n || tn[n]) {
                    n === ih || n === ki || n === wj ? (q && !j._87O && q.beginInteraction(), j.fi({
                        kind: j._87O ? "betweenEditSize" : "beginEditSize",
                        event: A
                    }), j._87O = 1) : (q && !j._moving && q.beginInteraction(), j.fi({
                        kind: j._moving ? "betweenMove" : "beginMove",
                        event: A
                    }), j._moving = 1);
                    var o, M = K.p3,
                        c = j.getPositionInfo(M),
                        a = sd(j);
                    o = n === jc ? "x" : n === Kj ? "y" : n === $h ? "z" : n === ih ? "sx" : n === ki ? "sy" : n === wj ? "sz" : j.getMoveMode(A, K.movedata), y = y / j.getWidth() * c.width, z = -1 * z / j.getHeight() * c.height;
                    var t, r, _ = [a[0] * y, a[4] * y, a[8] * y],
                        u = [a[1] * z, a[5] * z, a[9] * z],
                        h = _[0] + u[0],
                        s = _[1] + u[1],
                        J = _[2] + u[2],
                        O = [M[0] + h, M[1] + s, M[2] + J],
                        k = wg(j.getEye(), O, !0);
                    if ("xyz" === o ? (t = O, j.moveSelection(h, s, J)) : "xz" === o ? (t = Jq(j, M, [0, 1, 0], O), t && j.moveSelection(t[0] - M[0], 0, t[2] - M[2])) : "xy" === o ? (t = Jq(j, M, [0, 0, 1], O), t && j.moveSelection(t[0] - M[0], t[1] - M[1], 0)) : "yz" === o ? (t = Jq(j, M, [1, 0, 0], O), t && j.moveSelection(0, t[1] - M[1], t[2] - M[2])) : "x" === o || "sx" === o ? (k[0] = 0, t = Jq(j, M, k, O), t && (r = t[0] - M[0], "x" === o ? j.moveSelection(r, 0, 0) : j.sm().each(function(l) {
                            Ac(l) && j.isSizeEditable(l) && (g = v(Bp, l.getWidth() + r), i = g / l.getWidth(), l.setWidth(g), kn(A) && (l.setHeight(l.getHeight() * i), l.setTall(l.getTall() * i)))
                        }))) : "y" === o || "sy" === o ? (k[1] = 0, t = Jq(j, M, k, O), t && (r = t[1] - M[1], "y" === o ? j.moveSelection(0, r, 0) : j.sm().each(function(c) {
                            Ac(c) && j.isSizeEditable(c) && (g = v(Bp, c.getTall() + r), i = g / c.getTall(), c.setTall(g), kn(A) && (c.setHeight(c.getHeight() * i), c.setWidth(c.getWidth() * i)))
                        }))) : ("z" === o || "sz" === o) && (k[2] = 0, t = Jq(j, M, k, O), t && (r = t[2] - M[2], "z" === o ? j.moveSelection(0, 0, r) : j.sm().each(function(W) {
                            Ac(W) && j.isSizeEditable(W) && (g = v(Bp, W.getHeight() + r), i = g / W.getHeight(), W.setHeight(g), kn(A) && (W.setTall(W.getTall() * i), W.setWidth(W.getWidth() * i)))
                        }))), !t) return;
                    K.p3 = t
                } else if (n === wo) {
                    var e = K.div;
                    e || (e = K.div = gb(), Hb(K.getView(), e), e.op = F, e.style.background = j.getRectSelectBackground()), j.fi({
                        kind: j._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
                        event: A
                    }), j._rectSelecting = 1, e.rect = vf(e.op, Y), Ho(e, e.rect)
                } else if ("pinch" === n && 2 === vq(A)) {
                    j.fi({
                        kind: j._pinching ? "betweenPinch" : "beginPinch",
                        event: A
                    }), j._pinching = 1;
                    var r = jl(A);
                    j.handlePinch(r, K.dist), K.dist = r
                } else "pan" === n || kn(A) ? K.pan(A, y, z) : j.isFirstPersonMode() || (Yq(A) ? K.rotate(A, U, L) : (K.pan(A, y, 0), j.isWalkable() && (j.fi({
                    kind: j._walking ? "betweenWalk" : "beginWalk",
                    event: A
                }), j._walking = 1, j.walk(z / j.getHeight() * j.getCenterInfo().height))));
                K.point = Y
            },
            pan: function(B, Y, H) {
                var L = this.gv;
                if (L.isPannable()) {
                    var w = L.getCenterInfo(),
                        i = Y / L.getWidth() * w.width,
                        A = -1 * H / L.getHeight() * w.height;
                    L.fi({
                        kind: L._panning ? "betweenPan" : "beginPan",
                        event: B
                    }), L._panning = 1, L.pan(-i, -A)
                }
            },
            rotate: function(F, C, U) {
                var p = this.gv;
                p.isRotatable() && (p.fi({
                    kind: p._rotating ? "betweenRotate" : "beginRotate",
                    event: F
                }), p._rotating = 1, p.rotate(C, U))
            },
            handleWindowMouseUp: function(L) {
                this.handleWindowTouchEnd(L)
            },
            handleWindowTouchEnd: function(x) {
                var B = this,
                    G = B.gv,
                    E = G.dm(),
                    o = E.getHistoryManager(),
                    j = B.div;
                if (j) {
                    var J = G.getDatasInRect(j.rect);
                    if (!J.isEmpty()) {
                        var n = G.sm(),
                            D = n.toSelection();
                        J.each(function(h) {
                            n.co(h) ? D.remove(h) : D.add(h)
                        }), n.ss(D)
                    }
                    Nl(j)
                }
                G._moving && (delete G._moving, G.fi({
                    kind: "endMove",
                    event: x
                }), G.onMoveEnded(), o && o.endInteraction()), G._panning && (delete G._panning, G.fi({
                    kind: "endPan",
                    event: x
                }), G.onPanEnded()), G._rotating && (delete G._rotating, G.fi({
                    kind: "endRotate",
                    event: x
                }), G.onRotateEnded()), G._86O && (delete G._86O, G.fi({
                    kind: "endEditRotation",
                    event: x
                }), o && o.endInteraction()), G._87O && (delete G._87O, G.fi({
                    kind: "endEditSize",
                    event: x
                }), o && o.endInteraction()), G._pinching && (delete G._pinching, G.fi({
                    kind: "endPinch",
                    event: x
                }), G.onPinchEnded()), G._rectSelecting && (delete G._rectSelecting, G.fi({
                    kind: "endRectSelect",
                    event: x
                }), G.onRectSelectEnded()), G._walking && (delete G._walking, G.fi({
                    kind: "endWalk",
                    event: x
                }), G.onWalkEnded()), B.dist = B.point = B._62O = B.p3 = B.movedata = B.div = B._57I = B._32Q = B._31Q = B.foward = r
            }
        });
        var ch = function(C) {
            this.gv = C
        };
        Ni(ch, s, {
            _iv: !0,
            iv: function() {
                this._iv = !0
            },
            face: function(K, Q) {
                var X = this,
                    F = X.gv.getGL();
                if (!F || !Ac(K)) return r;
                var u = Q.x,
                    S = Q.width,
                    A = Q.height,
                    W = X.height - Q.y - A,
                    Y = R(S / 2),
                    D = new Uint8Array(4 * S * A),
                    V = 0;
                for (X.iv(), X.validate(K), Ir(F, X.frame), F.readPixels(u, W, S, A, F.RGBA, F.UNSIGNED_BYTE, D), Ir(F, r), X.iv(); Y >= V; V++)
                    for (var l = Y - V, f = Y + V, t = l; f >= t; t++)
                        for (var T = l; f >= T; T++)
                            if (t === l || t === f || T === l || T === f) {
                                var H = yl.m[D[4 * (t * S + T)]];
                                if (H) return H
                            }
            },
            get: function(h, V) {
                this.validate();
                var e = this,
                    w = e.gv.getGL();
                if (!w) return r;
                var Y, f, g = h.x,
                    H = h.width,
                    K = h.height,
                    j = e.height - h.y - K,
                    M = R(H / 2),
                    l = new Uint8Array(4 * H * K),
                    N = 0,
                    A = l.length,
                    I = V ? r : new pm,
                    s = V ? r : {};
                if (Ir(w, e.frame), w.readPixels(g, j, H, K, w.RGBA, w.UNSIGNED_BYTE, l), Ir(w, r), V) {
                    for (; M >= N; N++)
                        for (var F = M - N, a = M + N, X = F; a >= X; X++)
                            for (var c = F; a >= c; c++)
                                if ((X === F || X === a || c === F || c === a) && (Y = e.info(l, 4 * (X * H + c)))) return Y
                } else
                    for (; A > N; N += 4) Y = e.info(l, N), Y && (f = Y.data, s[f._id] || (I.add(f), s[f._id] = f));
                return I
            },
            info: function(P, q) {
                return this.colorMap[(P[q] << 24) + (P[q + 1] << 16) + (P[q + 2] << 8) + P[q + 3]]
            },
            validate: function(z) {
                var G = this,
                    i = G.gv,
                    d = i.getGL();
                if (d) {
                    var t = i.getWidth(),
                        F = i.getHeight(),
                        J = d.RGBA,
                        x = d.TEXTURE_2D,
                        M = d.RENDERBUFFER,
                        I = d.FRAMEBUFFER;
                    G.texture || (G.texture = dj(d), G.render = d.createRenderbuffer(), G.frame = d.createFramebuffer()), (G.width !== t || G.height !== F) && (Um(d, G.texture), d.texImage2D(x, 0, J, t, F, 0, J, d.UNSIGNED_BYTE, r), en(d, d.TEXTURE_MIN_FILTER, d.LINEAR), d.bindRenderbuffer(M, G.render), d.renderbufferStorage(M, d.DEPTH_COMPONENT16, t, F), Ir(d, G.frame), d.framebufferTexture2D(I, d.COLOR_ATTACHMENT0, x, G.texture, 0), d.framebufferRenderbuffer(I, d.DEPTH_ATTACHMENT, M, G.render), Um(d, r), d.bindRenderbuffer(M, r), Ir(d, r), G.width = t, G.height = F), G._iv && (G._iv = !1, Ir(d, G.frame), i._42(z || (G.colorMap = {}), 1), Ir(d, r))
                }
            }
        });
        var iq = function(q) {
            this.gv = q
        };
        Ni(iq, s, {
            gap: 0,
            size: 0,
            _42: function(N, J) {
                var g = this,
                    n = g.gv,
                    q = n._gridGap,
                    W = n._gridSize;
                if (n._gridVisible) {
                    if (g.gap !== q || g.size !== W) {
                        for (var l = [], i = n._gridSize / 2, S = q * i, F = 0; 2 * i + 1 > F; F++) {
                            var a = 6 * F,
                                H = 6 * (2 * i + 1) + a;
                            l[a] = -S, l[a + 1] = 0, l[a + 2] = -S + F * q, l[a + 3] = S, l[a + 4] = 0, l[a + 5] = -S + F * q, l[H] = -S + F * q, l[H + 1] = 0, l[H + 2] = -S, l[H + 3] = -S + F * q, l[H + 4] = 0, l[H + 5] = S
                        }
                        g.vs = new um(l), g.gap = q, g.size = W
                    }
                    Uc(n), rk(N, J), ac(N), wp(N, J, 1, n._gridColor, n._buffer.vs, g.vs), Oi(N, 0, g.vs.length / 3, N.LINES), hl(N), re(N, J)
                } else g.vs = g.gap = g.size = r
            }
        });
        var Or = function(i) {
            this.gv = i
        };
        Ni(Or, s, {
            _42: function(e, m) {
                var N = this.gv,
                    s = N._buffer.vs,
                    D = N._axisXColor,
                    R = N._axisYColor,
                    a = N._axisZColor,
                    d = N._originAxisVisible,
                    A = N._centerAxisVisible;
                if (d || A) {
                    var n = K ? e.TRIANGLES : e.TRIANGLE_FAN,
                        L = e.LINES;
                    if (Uc(N), rk(e, m), ac(e), d) {
                        var V = N.getCenterInfo(),
                            Y = I(V.width, V.height) / 5,
                            v = .8 * Y,
                            G = .05 * Y;
                        wp(e, m, 1.5, D, s, new um([0, 0, 0, Y, 0, 0, v, G, 0, v, 0, G, v, -G, 0, v, 0, -G, v, G, 0, 0, 0, 0, 0, Y, 0, G, v, 0, 0, v, G, -G, v, 0, 0, v, -G, G, v, 0, 0, 0, 0, 0, 0, Y, G, 0, v, 0, G, v, -G, 0, v, 0, -G, v, G, 0, v])), Oi(e, 0, 2, L), Oi(e, 1, 6, n), wp(e, m, r, R), Oi(e, 7, 2, L), Oi(e, 8, 6, n), wp(e, m, r, a), Oi(e, 14, 2, L), Oi(e, 15, 6, n)
                    }
                    if (A) {
                        var X = N._center,
                            k = X[0],
                            C = X[1],
                            p = X[2],
                            V = N.getPositionInfo(X);
                        Y = I(V.width, V.height) / 20, wp(e, m, 1.5, D, s, new um([k, C, p, k + Y, C, p, k, C, p, k, C + Y, p, k, C, p, k, C, p + Y])), Oi(e, 0, 2, L), wp(e, m, r, R), Oi(e, 2, 2, L), wp(e, m, r, a), Oi(e, 4, 2, L)
                    }
                    hl(e), re(e, m)
                }
            }
        });
        var Ql = function(B) {
                this.gv = B
            },
            jc = "edit_tx",
            Kj = "edit_ty",
            $h = "edit_tz",
            ns = "edit_rx",
            Xf = "edit_ry",
            _h = "edit_rz",
            ih = "edit_sx",
            ki = "edit_sy",
            wj = "edit_sz",
            tn = {};
        tn[jc] = 1, tn[Kj] = 1, tn[$h] = 1, tn[ns] = 1, tn[Xf] = 1, tn[_h] = 1, tn[ih] = 1, tn[ki] = 1, tn[wj] = 1, Ni(Ql, s, {
            _42: function(G, F, P) {
                var V = this,
                    K = V.gv,
                    u = K.sm().ld();
                if (K.isEditable(u) && Ac(u) && (!K.isFirstPersonMode() || !K.isMouseRoamable() && !h)) {
                    Uc(K);
                    var n, d, f = K.isMovable(u),
                        U = K.isRotationEditable(u),
                        j = K.isSizeEditable(u),
                        B = K._axisXColor,
                        R = K._axisYColor,
                        o = K._axisZColor,
                        b = K._editSizeColor,
                        W = K.getCenterInfo(),
                        A = I(W.width, W.height) / 10,
                        z = A / (P ? 5 : 10),
                        m = .7 * A,
                        x = .4 * m,
                        p = u.p3(),
                        t = p[0],
                        C = p[1],
                        $ = p[2];
                    n = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], f && V._17O(G, F, u, P, jc, B, n, [t, C - z, $, t + m, C - z, $, t + m, C, $, t + m, C, $, t, C, $, t, C - z, $, t, C - z, $ + z, t + m, C - z, $ + z, t + m, C - z, $, t + m, C - z, $, t, C - z, $, t, C - z, $ + z]), d = t + m, j && V._17O(G, F, u, P, ih, b, n, [d, C - z, $, d + x, C - z, $, d + x, C, $, d + x, C, $, d, C, $, d, C - z, $, d, C - z, $ + z, d + x, C - z, $ + z, d + x, C - z, $, d + x, C - z, $, d, C - z, $, d, C - z, $ + z]), d += x, U && V._17O(G, F, u, P, ns, B, n, [d, C - z, $, d + x, C - z, $, d + x, C, $, d + x, C, $, d, C, $, d, C - z, $, d, C - z, $ + z, d + x, C - z, $ + z, d + x, C - z, $, d + x, C - z, $, d, C - z, $, d, C - z, $ + z]), n = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], f && V._17O(G, F, u, P, Kj, R, n, [t, C, $, t, C + m, $, t - z, C + m, $, t - z, C + m, $, t - z, C, $, t, C, $, t, C, $, t, C, $ - z, t, C + m, $ - z, t, C + m, $ - z, t, C + m, $, t, C, $]), d = C + m, j && V._17O(G, F, u, P, ki, b, n, [t, d, $, t, d + x, $, t - z, d + x, $, t - z, d + x, $, t - z, d, $, t, d, $, t, d, $, t, d, $ - z, t, d + x, $ - z, t, d + x, $ - z, t, d + x, $, t, d, $]), d += x, U && V._17O(G, F, u, P, Xf, R, n, [t, d, $, t, d + x, $, t - z, d + x, $, t - z, d + x, $, t - z, d, $, t, d, $, t, d, $, t, d, $ - z, t, d + x, $ - z, t, d + x, $ - z, t, d + x, $, t, d, $]), n = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], f && V._17O(G, F, u, P, $h, o, n, [t, C, $, t, C, $ + m, t, C - z, $ + m, t, C - z, $ + m, t, C - z, $, t, C, $, t, C - z, $, t - z, C - z, $, t - z, C - z, $ + m, t - z, C - z, $ + m, t, C - z, $ + m, t, C - z, $]), d = $ + m, j && V._17O(G, F, u, P, wj, b, n, [t, C, d, t, C, d + x, t, C - z, d + x, t, C - z, d + x, t, C - z, d, t, C, d, t, C - z, d, t - z, C - z, d, t - z, C - z, d + x, t - z, C - z, d + x, t, C - z, d + x, t, C - z, d]), d += x, U && V._17O(G, F, u, P, _h, o, n, [t, C, d, t, C, d + x, t, C - z, d + x, t, C - z, d + x, t, C - z, d, t, C, d, t, C - z, d, t - z, C - z, d, t - z, C - z, d + x, t - z, C - z, d + x, t, C - z, d + x, t, C - z, d])
                }
            },
            _17O: function(a, w, c, U, u, K, b, d) {
                var s = this.gv._buffer;
                jf(a, w, U, !0, c, u), Hj(a, w, r, !0, r, !0, r, !1), Cs(a, w.uDiffuse, K), jp(a, s.vs, new um(d), w.aPosition), jp(a, s.ns, new um(b), w.aNormal), ac(a), Oi(a, 0, 12), hl(a), rl(a, w)
            }
        });
        var el = function(B, _) {
            this.gv = B, this.s = function(O, I, g) {
                return I == r && (I = g), I == r ? _.getStyle(O) : yq(I, _, B)
            }, this.data = _
        };
        Ni(el, s, {
            I3d: !0,
            ms_icons: 1,
            _iv: !0,
            iv: function() {
                this._iv = !0
            },
            _42: function(V, w, h, u) {
                var c, T, J, S, Z, P, l, a = this,
                    D = a.gv,
                    E = a.data,
                    X = E._id,
                    p = a.s("batch"),
                    M = D._34O,
                    A = D._33O,
                    n = D.isSelectable(E),
                    x = D.getBrightness(E),
                    k = x != r && 1 !== x;
                if (a._iv) {
                    if (J = ko(M, A, E, p), a.validate(J, p ? Kp[p] || Mq : r), J && (S = M[X], Z = S.size = J.vs.length / 3 - S.begin, l = J.rs))
                        for (x = k ? x : 1, P = 0; Z > P; P++) l.push(x);
                    if (Ac(E)) {
                        var K = D.getWireframe(E);
                        K && Ak(D, E, K)
                    }
                    a.labelInfo = a.label2Info = a.noteInfo = a.note2Info = a._38o = r, a._24O(Vi, "getLabel"), a._24O(tj, "getLabel2"), a._26O(Qe, "getNote"), a._26O(Gl, "getNote2"), a._15O(), a._iv = !1
                }
                k && Cs(V, w.uBrightness, x), T = jf(V, w, h, n, E, go), T && (Lj(T, M[X], A), Lj(T, D._polylineIndexMap[X], D._polylineModelMap), Lj(T, D._wireframeIndexMap[X], D._wireframeModelMap)), M[X] || a._80o(V, w, u), D.isLabelVisible(E) && ((c = a.labelInfo) && (jf(V, w, h, n, E, Vi), a._28O(c, Vi, u)), (c = a.label2Info) && (jf(V, w, h, n, E, tj), a._28O(c, tj, u))), D.isNoteVisible(E) && ((c = a.noteInfo) && (jf(V, w, h, n, E, Qe), a._29O(c, Qe, u)), (c = a.note2Info) && (jf(V, w, h, n, E, Gl), a._29O(c, Gl, u))), (c = a._38o) && a._99O(V, w, c, h, n, u), k && Cs(V, w.uBrightness, 1)
            },
            validate: function() {},
            _16O: function() {
                return cj
            },
            _80o: function() {},
            dispose: function() {},
            getBodyColor: function(i) {
                var c = this.data,
                    K = this.gv.getBodyColor(c);
                return K ? K : i ? c.getStyle(i) : r
            },
            _24O: function(X, $) {
                var k = this,
                    J = k.data,
                    Y = k.gv,
                    u = k.s,
                    q = Y[$](J);
                if (q != r) {
                    var U = u(X + ".scale"),
                        o = u(X + ".max"),
                        f = k[X + "Info"] = {
                            label: q,
                            textureScale: u(X + ".texture.scale"),
                            color: Y[$ + "Color"](J),
                            font: u(X + ".font"),
                            align: u(X + ".align"),
                            background: Y[$ + "Background"](J)
                        },
                        t = f.rect = rs(f, q);
                    o > 0 && o < t.width && (f.labelWidth = t.width, t.width = o), t.x = t.y = 0, t.width *= U, t.height *= U, f.mat = k._16O(u(X + ".autorotate"), u(X + ".position"), t, u(X + ".face"), u(X + ".t3"), u(X + ".r3"), u(X + ".rotationMode"));
                    var n = t.width / 2,
                        S = t.height / 2;
                    f.vs = new um([-n, S, 0, -n, -S, 0, n, -S, 0, n, S, 0]), t.width /= U, t.height /= U
                }
            },
            _26O: function(S, e) {
                var a = this,
                    E = a.data,
                    g = a.gv,
                    Y = a.s,
                    Z = g[e](E);
                if (Z != r) {
                    var C = Y(S + ".scale"),
                        B = this[S + "Info"] = {
                            note: Z,
                            textureScale: Y(S + ".texture.scale"),
                            expanded: Y(S + ".expanded"),
                            font: Y(S + ".font"),
                            color: Y(S + ".color"),
                            align: Y(S + ".align"),
                            borderWidth: Y(S + ".border.width"),
                            borderColor: Y(S + ".border.color"),
                            background: g[e + "Background"](E)
                        };
                    if (B.expanded) {
                        var X = Y(S + ".max"),
                            m = rs(B, Z);
                        m.width += 6, m.height += 2, X > 0 && X < m.width && (B.labelWidth = m.width, m.width = X);
                        var k = {
                            x: -m.width / 2,
                            y: -8 - m.height,
                            width: m.width,
                            height: m.height + 8
                        }
                    } else k = {
                        x: -6,
                        y: -18,
                        width: 12,
                        height: 18
                    };
                    B.mat = a._16O(Y(S + ".autorotate"), Y(S + ".position"), r, Y(S + ".face"), Y(S + ".t3"), Y(S + ".r3"), Y(S + ".rotationMode")), B.rect = k, 1 !== C && (k = Dh(k), k.x *= C, k.height *= C, k.y = -k.height, k.width *= C);
                    var N = k.x,
                        T = k.y,
                        z = k.width,
                        I = k.height;
                    B.vs = new um([N, -T, 0, N, -T - I, 0, N + z, -T - I, 0, N + z, -T, 0])
                }
            },
            _28O: function(q, H, Z) {
                if (Z(this.s(H + ".transparent"))) {
                    var w = q.rect,
                        V = q.textureScale,
                        n = w.width * V,
                        E = w.height * V;
                    if (n >= 1 && E >= 1) {
                        var j = Wo(n, E);
                        1 !== V && (j.translate(j, w.x, w.y), j.scale(V, V), j.translate(j, -w.x, -w.y)), ce(j, q), j.restore(), Am(this, H, q.mat, q.vs, !0)
                    }
                }
            },
            _29O: function(u, b, _) {
                if (_(this.s(b + ".transparent"))) {
                    var d = u.rect,
                        w = u.textureScale,
                        l = d.x,
                        J = d.y,
                        q = d.width * w,
                        I = d.height * w;
                    if (q >= 1 && I >= 1) {
                        d.x = d.y = 0;
                        var x = Wo(q, I);
                        1 !== w && x.scale(w, w), Cq(x, u), x.restore(), d.x = l, d.y = J, Am(this, b, u.mat, u.vs, !1)
                    }
                }
            },
            _99O: function(N, k, h, n, a, F) {
                if (h) {
                    var K = this,
                        M = K.gv,
                        d = K.data,
                        X = M._buffer,
                        Q = M._1O,
                        D = h.icons;
                    for (var $ in D) {
                        var o = D[$],
                            i = h.rects[$];
                        if (i && F(yq(o.transparent, d, M))) {
                            jf(N, k, n, a, d, $);
                            var y = yq(o.shape3d, d, M),
                                B = y ? [y] : yq(o.names, d, M),
                                T = B ? B.length : 0,
                                J = yq(o.textureScale, d, M) || 1,
                                j = yq(o.light, d, M);
                            j == r && (j = y ? !0 : !1), Hj(N, k, yq(o.blend, d, M), j, yq(o.opacity, d, M), yq(o.reverseFlip, d, M), yq(o.reverseColor, d, M), yq(o.reverseCull, d, M));
                            for (var p = 0; T > p; p++) {
                                var O = B[p],
                                    V = i[p];
                                if (Re(K, V.mat), y) ne(M, d, Zm(K, y), K);
                                else {
                                    var S = Eq(O);
                                    if (S) {
                                        var G = V.width * J,
                                            w = V.height * J;
                                        if (G >= 1 && w >= 1) {
                                            var b = Wo(G, w);
                                            Qh(b, S, yq(o.stretch, d, M), 0, 0, G, w, d, M), b.restore(), dj(N, Fh, Q), ac(N, k, Q, yq(o.discardSelectable, d, M), X.uv, Tk), jp(N, X.vs, V.vs, k.aPosition), jp(N, X.ns, xh, k.aNormal), Nm(N, X.is, nj), yf(N, 0, nj.length), hl(N, k, Q)
                                        }
                                    }
                                }
                                bp(M)
                            }
                            rl(N, k)
                        }
                    }
                }
            }
        });
        var Dl = function(z, q) {
            dg(Dl, this, [z, q])
        };
        Ni(Dl, el, {
            _16O: function(G, r, a, Q, K, o, E, A, N) {
                var g = this.data,
                    T = Ep(r, g.s3(), a, Q, A, N);
                return df(ym(), T, g.p3(), Q, K, o, E, G, g.r3(), g.getRotationMode())
            },
            clear: function() {
                var l = this;
                l.faceMat = l.mat = l.shapeModel = l.left = l.right = l.front = l.back = l.top = l.bottom = l.csg = r
            },
            validate: function(T, P) {
                var o = this,
                    t = o.gv,
                    V = o.data,
                    a = Zm(o),
                    B = to(V, t.getMat(V), a ? o.s("shape3d.scaleable") : !0);
                if (o.clear(), T) {
                    var f = [];
                    a ? Ri(t, V, a, o, o.getBodyColor(), [B], T, f) : (Xl(t, V, T, P, B, fp, f, Oj), Xl(t, V, T, P, B, th, f, Rn), Xl(t, V, T, P, B, Un, f, Yk), Xl(t, V, T, P, B, Hn, f, Of), Xl(t, V, T, P, B, nh, f, Qo), Xl(t, V, T, P, B, Ym, f, Qc)), f.length && (Pn(T.vs, f), Pn(T.ns, Cn(f)))
                } else o.mat = B, (o.shapeModel = a) || (o.vf(fp), o.vf(th), o.vf(nh), o.vf(Ym), o.vf(Un), o.vf(Hn))
            },
            vf: function(h) {
                var v = this;
                if (v.gv.getFaceVisible(v.data, h)) {
                    var x = ur(v, h);
                    return x.mat && (v.faceMat = !0), x
                }
            },
            _80o: function(A, U, F) {
                var G = this,
                    a = G.gv,
                    K = G.data,
                    w = a._cube,
                    m = G.shapeModel;
                Uc(a, G.mat), m ? ne(a, K, m, G, G.getBodyColor(), F) : (jp(A, w.vs, r, U.aPosition), jp(A, w.ns, r, U.aNormal), Nm(A, w.is), G._18O(A, U, G.left, 0, F), G._18O(A, U, G.front, 6, F), G._18O(A, U, G.right, 12, F), G._18O(A, U, G.back, 18, F), G._18O(A, U, G.top, 24, F), G._18O(A, U, G.bottom, 30, F)), bp(a), G.faceMat && (G._18O(A, U, G.left, 0, F, !0), G._18O(A, U, G.front, 6, F, !0), G._18O(A, U, G.right, 12, F, !0), G._18O(A, U, G.back, 18, F, !0), G._18O(A, U, G.top, 24, F, !0), G._18O(A, U, G.bottom, 30, F, !0))
            },
            _18O: function(s, c, t, Z, C, Q) {
                if (t) {
                    if (!C(t.transparent)) return;
                    if (Q && !t.mat || !Q && t.mat) return;
                    Q && Uc(this.gv, t.mat);
                    var P = this,
                        G = P.data,
                        L = P.gv,
                        k = L.getTexture(t.texture, G),
                        o = t.uv,
                        V = t.uvScale,
                        y = t.uvOffset,
                        A = t.discardSelectable;
                    if (k)
                        if (o) {
                            for (var R = 8 * (Z / 6), D = 0; 8 > D; D++) dd[R + D] = o[D];
                            ac(s, c, k, A, L._buffer.uv, dd, y, V)
                        } else ac(s, c, k, A, L._cube.uv, r, y, V);
                    else ac(s);
                    Hj(s, c, t.blend, t.light, t.opacity, t.reverseFlip, t.reverseColor, t.reverseCull), Cs(s, c.uDiffuse, t.color), yf(s, Z, 6), rl(s, c), hl(s, c, k), Q && bp(L)
                }
            }
        });
        var Td = function(x, q) {
            dg(Td, this, [x, q])
        };
        Ni(Td, el, {
            _25Q: 1,
            validate: function(Z) {
                var f = this,
                    _ = f.gv,
                    F = f.data,
                    c = f.s,
                    h = c("edge.width"),
                    k = F._40I,
                    $ = F._41I;
                if (f.shapeModel = f.info = r, k && $) {
                    var K, l, Y, A, d, g, W, a, M, V, O = F.isLooped(),
                        E = c(cb),
                        J = S.getEdgeType(E);
                    if (J) {
                        var w = J(F, Ei(f, _, F, O, E), _, f._19Q);
                        if (!w.points || w.points.isEmpty()) return;
                        g = f.info = {}, W = w.segments, d = w.points, a = d.size();
                        for (var H = k.getElevation(), D = $.getElevation(), o = 0; a > o; o++) {
                            var n = d.get(o);
                            n.e == r && (n.e = H + (D - H) * o / (a - 1))
                        }
                        M = Ge(d.get(0)), V = Ge(d.get(a - 1));
                        var L = a % 2;
                        0 === L ? (g.c1 = Ge(d.get(a / 2 - 1)), g.c2 = Ge(d.get(a / 2))) : g.p3 = Ge(d.get((a - L) / 2)), g.s1 = M, g.s2 = Ge(d.get(1)), g.t1 = Ge(d.get(a - 2)), g.t2 = V
                    } else {
                        d = new pm, g = f.info = {};
                        var s = c("edge.offset"),
                            U = c("edge.center"),
                            j = c("edge.source.t3"),
                            B = c("edge.target.t3"),
                            i = k.p3(),
                            u = $.p3();
                        if (j && (i[0] += j[0], i[1] += j[1], i[2] += j[2]), B && (u[0] += B[0], u[1] += B[1], u[2] += B[2]), E === ai) {
                            W = c("edge.segments");
                            var z = g.points = c(Hc) || Lc;
                            if (a = z.size()) {
                                M = Ge(z.get(0)), V = Ge(z.get(a - 1)), !U && s && (Y = wg(M, i, !0), s = I(s, ls(i, M)), i = [i[0] + Y[0] * s, i[1] + Y[1] * s, i[2] + Y[2] * s], Y = wg(u, V, !0), s = I(s, ls(V, u)), u = [u[0] - Y[0] * s, u[1] - Y[1] * s, u[2] - Y[2] * s]);
                                var L = a % 2;
                                0 === L ? (K = Ge(z.get(a / 2 - 1)), l = Ge(z.get(a / 2))) : g.p3 = Ge(z.get((a - L) / 2)), g.s1 = i, g.s2 = M, g.t1 = V, g.t2 = u
                            } else !U && s && (Y = wg(u, i, !0), A = ls(i, u), s = Ip(s, A), i = [i[0] + Y[0] * s, i[1] + Y[1] * s, i[2] + Y[2] * s], u = [u[0] - Y[0] * s, u[1] - Y[1] * s, u[2] - Y[2] * s]), K = i, l = u;
                            d.add({
                                x: i[0],
                                y: i[2],
                                e: i[1]
                            }), d.addAll(z), d.add({
                                x: u[0],
                                y: u[2],
                                e: u[1]
                            })
                        } else {
                            var N = Ei(f, _, F, O, E);
                            if (f._19Q || (N = -N), O) {
                                var e = i[0],
                                    x = i[1],
                                    q = i[2],
                                    Q = k.getTall() / 2 + N;
                                K = [e - N, x + Q, q], l = [e + N, x + Q, q], d.add({
                                    x: e - N,
                                    y: q,
                                    e: x
                                }), d.add({
                                    x: e - N,
                                    y: q,
                                    e: x + Q
                                }), d.add({
                                    x: e + N,
                                    y: q,
                                    e: x + Q
                                }), d.add({
                                    x: e + N,
                                    y: q,
                                    e: x
                                })
                            } else {
                                Y = wg(u, i, !0), A = ls(i, u);
                                var R = {
                                        x: i[0],
                                        y: i[2]
                                    },
                                    b = {
                                        x: u[0],
                                        y: u[2]
                                    },
                                    t = sl(r, R, b, N),
                                    p = t.x - R.x,
                                    v = t.y - R.y;
                                s = Ip(s, A), Y[0] *= s, Y[1] *= s, Y[2] *= s, K = [i[0] + Y[0] + p, i[1] + Y[1], i[2] + Y[2] + v], l = [u[0] - Y[0] + p, u[1] - Y[1], u[2] - Y[2] + v], U ? (d.add({
                                    x: i[0],
                                    y: i[2],
                                    e: i[1]
                                }), d.add({
                                    x: K[0],
                                    y: K[2],
                                    e: K[1]
                                }), d.add({
                                    x: l[0],
                                    y: l[2],
                                    e: l[1]
                                }), d.add({
                                    x: u[0],
                                    y: u[2],
                                    e: u[1]
                                })) : (d.add({
                                    x: K[0],
                                    y: K[2],
                                    e: K[1]
                                }), d.add({
                                    x: l[0],
                                    y: l[2],
                                    e: l[1]
                                }))
                            }
                        }
                        g.c1 = K, g.c2 = l
                    }
                    g.list = c($o) === Wf ? f.createTubeModel(d, W, h / 2, Z) : f.createLineModel(d, W, h, "edge", "edge.dash")
                }
            }
        });
        var Sg = function(X, M) {
            dg(Sg, this, [X, M])
        };
        Ni(Sg, Dl, {
            _80o: function(T, L, s) {
                var A = this,
                    h = A.gv,
                    J = A.shapeModel;
                Uc(h, A.mat), J ? ne(h, A.data, J, A, A.getBodyColor(), s) : (Cg(A, T, L, A.left, s), Cg(A, T, L, A.front, s), Cg(A, T, L, A.right, s), Cg(A, T, L, A.back, s), Cg(A, T, L, A.top, s), Cg(A, T, L, A.bottom, s)), bp(h)
            },
            validate: function(W, H) {
                var b, k, w = this,
                    K = w.s,
                    A = w.data,
                    z = A.p3(),
                    x = A._thickness / 2,
                    P = A.isClosePath(),
                    j = A.getPoints(),
                    C = A.getSegments(),
                    y = K(vo),
                    F = W && W.uv;
                if (w.clear(), 0 > x) k = w.shapeModel = Yi(j, C, K(Rq), K(Zi), y, K(Ko), A.getTall(), A.getElevation(), P), K($e) ? K("shape3d.image") || delete k.uv : (delete k.vs, delete k.ns, delete k.uv), K("shape3d.top.image") || delete k.top_uv, K("shape3d.bottom.image") || delete k.bottom_uv;
                else if (K($o) === Wf) b = os(j, C, y, P), k = w.shapeModel = {
                    vs: []
                }, K("shape3d.image") && (k.uv = [], k.sum = K(Ko) || Vg(b) || 1, k.len = 0), K(Rq) && !P && (k.top_vs = [], K("shape3d.top.image") && (k.top_uv = [])), K(Zi) && !P && (k.bottom_vs = [], K("shape3d.bottom.image") && (k.bottom_uv = [])), w._12O(b, x);
                else {
                    var R, q, u, E, e, o, B, O, n, v;
                    b = os(j, C, y, P), e = w.vf(nh, F, !1, H), x && (o = w.vf(Ym, F, !1, H), B = P ? r : w.vf(fp, F, !1, H), O = P ? r : w.vf(th, F, !1, H), n = w.vf(Un, F, !1, H), v = w.vf(Hn, F, !1, H)), x ? w._12O(b, x) : e && b.forEach(function(D) {
                        if (E = D.length, E > 0)
                            for (R = D[0], u = 1; E > u; u++) q = D[u], w.addV(e.vs, R, q), R = q
                    }), w._20Q(b), W || (e && (e.ns = Cn(e.vs), yk(e, "vs"), yk(e, Hf)), x && (o && (o.ns = Cn(o.vs), yk(o, "vs"), yk(o, Hf)), B && (B.ns = Cn(B.vs), yk(B, "vs"), yk(B, Hf)), O && (O.ns = Cn(O.vs), yk(O, "vs"), yk(O, Hf)), n && (n.ns = Cn(n.vs), yk(n, "vs"), yk(n, Hf)), v && (v.ns = Cn(v.vs), yk(v, "vs"), yk(v, Hf))))
                }
                var S = w.mat = ym();
                Ej(S, z), lf(S, A.r3(), A.getRotationMode()), Ej(S, qn(z)), W && (cs(w, S, W, k), w.clear())
            },
            _20Q: function(E) {
                var P, Z, k, T, B, v, t, y = this,
                    C = y.front,
                    w = y.back,
                    J = y.top,
                    N = y.bottom,
                    q = C ? C.tuv : r,
                    R = w ? w.tuv : r,
                    j = J ? J.tuv : r,
                    W = N ? N.tuv : r,
                    A = 0;
                (q || R || j || W) && (P = y.s(Ko) || Vg(E) || 1, E.forEach(function(l) {
                    if (Z = l.length, Z > 0)
                        for (v = l[0], k = 1; Z > k; k++) t = l[k], T = A / P, A += ls(v, t), B = A / P, y._14O(C, T, B), y._14O(w, 1 - B, 1 - T), y._14O(J, T, B), y._14O(N, T, B), v = t
                }))
            },
            _14O: function(c, z, d) {
                if (c) {
                    var B = c.uv,
                        R = c.tuv;
                    if (R) {
                        if (B) var S = B[0] + (B[6] - B[0]) * z,
                            s = B[1] + (B[7] - B[1]) * z,
                            N = B[2] + (B[4] - B[2]) * z,
                            m = B[3] + (B[5] - B[3]) * z,
                            b = B[2] + (B[4] - B[2]) * d,
                            x = B[3] + (B[5] - B[3]) * d,
                            n = B[0] + (B[6] - B[0]) * d,
                            _ = B[1] + (B[7] - B[1]) * d;
                        else S = z, s = 0, N = z, m = 1, b = d, x = 1, n = d, _ = 0;
                        R.push(N, m, b, x, n, _, n, _, S, s, N, m)
                    }
                }
            },
            _13O: function(L) {
                var Z = L.uv,
                    A = L.tuv;
                A && (Z ? A.push(Z[2], Z[3], Z[4], Z[5], Z[6], Z[7], Z[6], Z[7], Z[0], Z[1], Z[2], Z[3]) : A.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
            },
            _12O: function($, U) {
                var C, F, O, a, N, d = this;
                $.forEach(function(g) {
                    if (N = g.length, N > 0)
                        for (C = {
                                p: g[0],
                                n: !0
                            }, a = 1; N > a; a++) F = g[a], O = N - 1 > a ? g[a + 1] : r, d.addPoint(C, F, O, U, g)
                })
            },
            addPoint: function(Z, b, J, h, L) {
                var w, k, u, e, q, R, i, z, B, D = this,
                    I = Z.p,
                    l = Z.f,
                    v = Z.b,
                    G = D.s("shape3d.side") || qs,
                    s = D.s("shape3d.start.angle"),
                    f = D.s("shape3d.sweep.angle"),
                    p = D.shapeModel,
                    X = D.data.isClosePath();
                if (Z.n && (Z.n = !1, l = X && L.length > 2 ? sl(L[L.length - 2], I, b, h) : sl(r, I, b, h), v = Ee(I, l), p ? p.top_vs && D._10O(v, l, G, s, f, p.top_vs, p.top_uv) : (w = D.left) && (D.addV(w.vs, v, l), D._13O(w))), k = J ? sl(I, b, J, h) : X && L.length > 2 ? sl(I, b, L[1], h) : sl(I, b, r, h), u = Ee(b, k), p) {
                    var x, m, W = p.vs,
                        j = p.uv,
                        $ = p.sum;
                    for (j && (x = p.len / $, p.len += ls(I, b), m = p.len / $), R = D._9O(v, l, G, s, f), i = D._9O(u, k, G, s, f), z = 0; G > z; z++) B = z + 1, Pn(W, R[B]), Pn(W, i[z]), Pn(W, R[z]), Pn(W, i[z]), Pn(W, R[B]), Pn(W, i[B]), j && (e = z / G, q = B / G, j.push(x, q, m, e, x, e, m, e, x, q, m, q));
                    !J && p.bottom_vs && D._10O(u, k, G, s, f, p.bottom_vs, p.bottom_uv, !0)
                } else !J && (w = D.right) && (D.addV(w.vs, k, u), D._13O(w)), (w = D.front) && D.addV(w.vs, l, k), (w = D.back) && D.addV(w.vs, u, v), (w = D.top) && D.addH(w.vs, l, k, u, v, !0), (w = D.bottom) && D.addH(w.vs, v, u, k, l);
                Z.p = b, Z.f = k, Z.b = u
            },
            _10O: function(U, n, V, Y, w, x, j, l) {
                var F, S, e = this,
                    Q = e.data,
                    A = e._9O(U, n, V, Y, w),
                    s = (U.x + n.x) / 2,
                    G = (U.y + n.y) / 2,
                    r = Q.getElevation(),
                    z = 0;
                for (z = 0; V > z; z++) l ? (Pn(x, A[z]), Pn(x, A[z + 1])) : (Pn(x, A[z + 1]), Pn(x, A[z])), Pn(x, [s, r, G]), j && (l ? (F = C * (z + 1) / V + Y, S = C * z / V + Y) : (F = C * z / V + Y, S = C * (z + 1) / V + Y), j.push(.5 - .5 * m(S), .5 - .5 * q(S), .5 - .5 * m(F), .5 - .5 * q(F), .5, .5))
            },
            _9O: function(T, P, e, I, M) {
                var s, D, S = this,
                    W = S.data,
                    c = [],
                    a = (T.x + P.x) / 2,
                    w = (T.y + P.y) / 2,
                    p = W.getTall() / 2,
                    Y = W.getElevation(),
                    G = 0;
                for (M = M || C; e >= G; G++) s = M * G / e + I, D = m(s), c.push([a + (T.x - a) * D, Y + p * q(s), w + (T.y - w) * D]);
                return c
            },
            addV: function(d, x, w) {
                var P = x.x,
                    e = x.y,
                    V = w.x,
                    M = w.y,
                    j = this.data,
                    q = j.getElevation(),
                    c = j.getTall() / 2;
                d.push(P, q - c, e, V, q - c, M, V, q + c, M, V, q + c, M, P, q + c, e, P, q - c, e)
            },
            addH: function(w, e, P, z, l, j) {
                var f = this.data,
                    M = f.getTall() / 2,
                    n = f.getElevation() + (j ? M : -M);
                w.push(e.x, n, e.y, P.x, n, P.y, z.x, n, z.y, z.x, n, z.y, l.x, n, l.y, e.x, n, e.y)
            },
            vf: function(o, p, Y, N) {
                var Z, T = this,
                    d = T.gv.getFaceVisible(T.data, o);
                return (Y || d) && (Z = ur(T, o, N), Z.vs = [], Z.tuv = d && (Z.texture || p) ? [] : r, Z.visible = d), Z
            }
        });
        var fi = function(D, e) {
            dg(fi, this, [D, e])
        };
        Ni(fi, el, {
            _25Q: 1,
            validate: function(H) {
                var S = this,
                    v = S.data,
                    y = S.s,
                    L = v.getPoints(),
                    p = L.size();
                if (S.shapeModel = S.info = r, p > 1) {
                    var d = S.info = {},
                        _ = v.getSegments(),
                        V = v.getThickness(),
                        M = Ge(L.get(0)),
                        P = Ge(L.get(p - 1)),
                        Z = p % 2;
                    0 === Z ? (d.c1 = Ge(L.get(p / 2 - 1)), d.c2 = Ge(L.get(p / 2))) : d.p3 = Ge(L.get((p - Z) / 2)), d.s1 = M, d.s2 = Ge(L.get(1)), d.t1 = Ge(L.get(p - 2)), d.t2 = P, d.list = y($o) === Wf ? S.createTubeModel(L, _, V / 2, H) : S.createLineModel(L, _, V, "shape.border", "shape.dash")
                }
            }
        }), yd(S, {
            accordionViewExpandIcon: Ti(dn),
            accordionViewCollapseIcon: Ti(dn, !0),
            accordionViewLabelColor: as,
            accordionViewLabelFont: Th,
            accordionViewTitleBackground: zc,
            accordionViewSelectBackground: Zr,
            accordionViewSelectWidth: 3,
            accordionViewSeparatorColor: y,
            splitViewDividerSize: 1,
            splitViewDividerBackground: zc,
            splitViewDragOpacity: .5,
            splitViewToggleIcon: {
                width: 16,
                height: 16,
                comps: [{
                    type: oh,
                    rect: [2, 2, 12, 12],
                    background: dn
                }]
            },
            propertyViewLabelColor: di,
            propertyViewLabelSelectColor: as,
            propertyViewLabelFont: Th,
            propertyViewExpandIcon: Ti(lq),
            propertyViewCollapseIcon: Ti(lq, !0),
            propertyViewBackground: Eg,
            propertyViewRowLineVisible: !0,
            propertyViewColumnLineVisible: !0,
            propertyViewRowLineColor: cm,
            propertyViewColumnLineColor: cm,
            propertyViewSelectBackground: Zr,
            listViewLabelColor: di,
            listViewLabelSelectColor: as,
            listViewLabelFont: Th,
            listViewRowLineVisible: !1,
            listViewRowLineColor: cm,
            listViewSelectBackground: Zr,
            treeViewLabelColor: di,
            treeViewLabelSelectColor: as,
            treeViewLabelFont: Th,
            treeViewExpandIcon: Ti(lo),
            treeViewCollapseIcon: Ti(lo, !0),
            treeViewRowLineVisible: !1,
            treeViewRowLineColor: cm,
            treeViewSelectBackground: Zr,
            treeViewDoubleClickToToggle: !0,
            tableViewLabelColor: di,
            tableViewLabelSelectColor: as,
            tableViewLabelFont: Th,
            tableViewRowLineVisible: !0,
            tableViewColumnLineVisible: !0,
            tableViewRowLineColor: cm,
            tableViewColumnLineColor: cm,
            tableViewSelectBackground: Zr,
            treeTableViewLabelColor: di,
            treeTableViewLabelSelectColor: as,
            treeTableViewLabelFont: Th,
            treeTableViewExpandIcon: Ti(lo),
            treeTableViewCollapseIcon: Ti(lo, !0),
            treeTableViewRowLineVisible: !0,
            treeTableViewColumnLineVisible: !0,
            treeTableViewRowLineColor: cm,
            treeTableViewColumnLineColor: cm,
            treeTableViewSelectBackground: Zr,
            tableHeaderLabelColor: di,
            tableHeaderLabelFont: Th,
            tableHeaderColumnLineVisible: !0,
            tableHeaderColumnLineColor: $j,
            tableHeaderBackground: Eg,
            tableHeaderMoveBackground: wr,
            tableHeaderInsertColor: Zr,
            tableHeaderSortDescIcon: sq(lq, !0),
            tableHeaderSortAscIcon: sq(lq),
            tabViewTabGap: 1,
            tabViewLabelColor: as,
            tabViewLabelFont: Th,
            tabViewTabBackground: zc,
            tabViewSelectWidth: 3,
            tabViewSelectBackground: Zr,
            tabViewMoveBackground: wr,
            tabViewInsertColor: Zr,
            toolbarLabelColor: di,
            toolbarLabelSelectColor: as,
            toolbarLabelFont: Th,
            toolbarBackground: Eg,
            toolbarSelectBackground: Zr,
            toolbarItemGap: 8,
            toolbarSeparatorColor: zg
        }, !0);
        var Mp = {
                translateX: 1,
                sortColumn: 1
            },
            Lg = {
                sortable: 1,
                sortOrder: 1,
                sortFunc: 1
            },
            Lm = {
                focusData: 1
            },
            Vb = {
                dataModel: 1,
                sortColumn: 1,
                sortFunc: 1,
                visibleFunc: 1,
                rootData: 1,
                rootVisible: 1
            },
            oj = {
                dataModel: 1,
                sortFunc: 1,
                visibleFunc: 1,
                categorizable: 1
            },
            po = function(U, Q) {
                Q.add(U), U.hasChildren() && U.eachChild(function(Y) {
                    po(Y, Q)
                })
            },
            Ki = function(Z, K, X, i, H, c, G, E, m, o, q) {
                var l, p = X.getValueType(o),
                    T = X.getAlign(o);
                if (X.getEnumValues(o)) {
                    var O = X.toEnumLabel(K, o),
                        x = Bk || 0,
                        F = 0,
                        Y = c,
                        j = S.getTextSize(i, O).width;
                    return l = Eq(X.toEnumIcon(K, o)), l && (F = c + Bk / 2, "center" === T ? F += (E - (x + j)) / 2 : "right" === T && (F = F + E - (x + j)), Jh(Z, l, F, G + m / 2), Y = F + Bk / 2), O != r && (l ? so(Z, O, i, H, Y, G, E - (Y - c), m) : so(Z, O, i, H, c, G, E, m, T)), void 0
                }
                return K = X.formatValue(K), K != r ? p === Jc ? (yj(Z, c, G, E, m, K), void 0) : p === je || !p && fc(K) ? (l = Eq(K ? xf : dr), Jh(Z, l, c + E / 2, G + m / 2, o, q), void 0) : (so(Z, K, i, H, c, G, E, m, T), void 0) : void 0
            },
            hs = function(o, P) {
                var F = P.view,
                    z = F.getDataModel().getHistoryManager(),
                    Y = we(o),
                    I = P.column || P.property;
                z && z.beginInteraction(), P.editor = o, o.info = P, F.setCurrentEditor(o), F.getView().insertBefore(Y, F._79O), Ho(o, P.editorRect), o.setFocus ? o.setFocus() : Po(o), o.commitValue = function() {
                    o._17Q && (o = o._17Q), F.setValue(P.data, I, o.getValue ? o.getValue() : o.value), o.close && o.close(), Nl(Y)
                }, I.onEditorCreated && I.onEditorCreated(P)
            },
            zr = function(b, c, d, L, R) {
                var x = ss(b, d),
                    X = c.value,
                    Q = c.view,
                    Y = R.getValueType(c.data);
                return x.onblur = x.onchange = function() {
                    Q.endEditing()
                }, "input" === b ? (X = R.formatValue(X), X != r && (x.value = X), x.onkeydown = function(e) {
                    uj(e) && Q.endEditing()
                }, (Y === lg || Y === dh) && x.addEventListener(Tc, S.numberListener, !1)) : b === wo && L.forEach(function(k) {
                    var j = U.createElement("option");
                    j.innerHTML = R.toEnumLabel(k), j.value = k, R.isEnumEqual(X, k) && (j.selected = !0), Hb(x, j)
                }), hs(x, c), x
            },
            ef = D.widget = {},
            vh = function(k, G, W) {
                Ni(n + ".widget." + k, G, W)
            };
        yd(wi, {
            ms_value: function(Z) {
                Z.getValue = function(P) {
                    var i = this.getItemById(P),
                        C = i.element;
                    return Rr(C) ? C : C ? C.getValue ? C.getValue() : C.value : i.selected
                }, Z.setValue = function(v, Q) {
                    var L = this.getItemById(v),
                        e = L.element;
                    e && !Rr(e) ? e.setValue ? e.setValue(Q) : e.value = Q : fc(Q) ? (L.selected = Q, this.iv()) : (L.element = Q, this.iv())
                }, Z.v = function(p, u) {
                    var C = this;
                    if (2 === arguments.length) C.setValue(p, u);
                    else {
                        if (!Je(p)) return C.getValue(p);
                        for (var $ in p) C.setValue($, p[$])
                    }
                    return C
                }
            },
            _46o: function(Y) {
                Y._icon = r, Y._accessType = r, Y._valueType = r, Y._editable = !1, Y._batchEditable = !0, Y._align = fp, Y._nullable = !0, Y._emptiable = !1, Y.setParent = Sr, Y.formatValue = function(j) {
                    var P = this,
                        i = P._valueType;
                    if (P.getEnumValues()) return P.toEnumLabel(j);
                    if (i === je) return !!j;
                    if (j != r) {
                        if (i === lg) return T(j);
                        if (dl(j)) return mn(j)
                    }
                    return j
                }, Y.setEnum = function(C, g, w, E, B, m, s) {
                    var l = this;
                    C && !_o(C) && C.values && (E = C.editable, w = C.icons, g = C.labels, B = C.strict, m = C.maxHeight, s = C.dropDownWidth, C = C.values), hg(C) && (C = C._as), hg(g) && (g = g._as), hg(w) && (w = w._as), l._enumValues = C, l._enumLabels = g, l._enumIcons = w, l._enumEditable = E, l._enumStrict = B == r ? !0 : B, l._enumMaxHeight = m, l._enumDropDownWidth = s, C && C.length && dl(C[0]) && (l._valueType = dh), l.fp("enum", !1, !0)
                }, Y.getEnumDropDownWidth = function() {
                    return this._enumDropDownWidth
                }, Y.getEnumMaxHeight = function() {
                    return this._enumMaxHeight
                }, Y.isEnumEditable = function() {
                    return this._enumEditable
                }, Y.getEnumValues = function() {
                    return this._enumValues
                }, Y.getEnumLabels = function() {
                    return this._enumLabels
                }, Y.getEnumIcons = function() {
                    return this._enumIcons
                }, Y.isEnumStrict = function() {
                    return this._enumStrict
                }, Y.isEnumEqual = function(v, H) {
                    return this._enumStrict ? v === H : v == H
                }, Y.toEnumLabel = function(w, M) {
                    var e = this,
                        q = e.getEnumValues(M),
                        S = e.getEnumLabels(M);
                    if (q && S)
                        for (var z = 0; z < q.length; z++)
                            if (e.isEnumEqual(w, q[z])) return S[z];
                    return w
                }, Y.toEnumIcon = function(F, w) {
                    var Q = this,
                        $ = Q.getEnumValues(w),
                        m = Q.getEnumIcons(w);
                    if ($ && m)
                        for (var n = 0; n < $.length; n++)
                            if (Q.isEnumEqual(F, $[n])) return m[n];
                    return y
                }
            },
            _45o: function(e) {
                e._87o = function(l, G, r, H, P, Z) {
                    if (l) {
                        var W = this,
                            N = W._90I,
                            b = gb(1);
                        W._columnLineVisible && (P -= 1), W._rowLineVisible && (Z -= 1), 0 >= P || 0 >= Z || (W._90I || (N = W._90I = {}), N[G] || (N[G] = new pm), Ho(b, W.tx() + r, W.ty() + H, P, Z), Hb(b, l), W._view.insertBefore(b, W._79O), l.onParentAdded && l.onParentAdded(b), N[G].add(b))
                    }
                }, e._76o = function() {
                    var t = this,
                        g = t._90I;
                    if (g) {
                        for (var G in g) g[G].each(function(H) {
                            Nl(H)
                        });
                        delete t._90I
                    }
                }, e._77o = function(J) {
                    var F = this;
                    if (F._90I) {
                        var e = F._90I[J];
                        e && (e.each(function(I) {
                            Nl(I)
                        }), delete F._90I[J])
                    }
                }
            },
            _47o: function(k) {
                k.getValue = function(x, b) {
                    return b.getValue ? b.getValue(x, b, this) : Hq(x, b.getAccessType(), b.getName())
                }, k.setValue = function(a, n, p) {
                    if (n.isEmptiable(a) || "" !== p || (p = y), n.isNullable(a) || p != r) {
                        var z = this,
                            V = n.getName(a),
                            v = n.getAccessType(a),
                            g = n.getValueType(a);
                        g === lg && Rr(p) ? p = t(p) : g === dh && Rr(p) ? p = parseFloat(p) : g === je && Rr(p) && (p = "true" === p), z._batchEditable && n._batchEditable && z.isSelected(a) ? z.sm().each(function(i) {
                            n.setValue ? n.setValue(i, n, p, z) : Mj(i, v, V, p)
                        }) : n.setValue ? n.setValue(a, n, p, z) : Mj(a, v, V, p)
                    }
                }, k.setCurrentEditor = function(J) {
                    this.endEditing(), this._currentEditor = J, this.redraw()
                }, k.isEditing = function(X, $) {
                    var O = this,
                        i = O._currentEditor;
                    if (!i) return !1;
                    if ($) {
                        var v = i.info;
                        return v ? (v.column || v.property) === $ && v.data === X : !1
                    }
                    return !0
                }, k.endEditing = function() {
                    var g = this,
                        Z = g._currentEditor,
                        W = g.getDataModel().getHistoryManager();
                    Z && (delete g._currentEditor, Z.commitValue && Z.commitValue(Z.info), g.redraw(), W && W.endInteraction())
                }, k.beginEditing = function(S) {
                    this.endEditing();
                    var d = this,
                        P = S.column || S.property;
                    if (P.beginEditing) P.beginEditing(S);
                    else {
                        var T = S.data,
                            V = S.value,
                            j = d.getSelectBackground(T),
                            a = P.getEnumValues(T),
                            D = P.getSlider(T),
                            A = P.getColorPicker(T);
                        if (D) {
                            var g = ae(ef.Slider, D);
                            return g.setValue(V), g.getView().onblur = function() {
                                d.endEditing()
                            }, g.isInstant() && (g.onValueChanged = function() {
                                d.setValue(T, P, g.getValue())
                            }), hs(g, S), void 0
                        }
                        if (A || P.getValueType(T) === Jc) {
                            var o = ae(ef.ColorPicker, A);
                            return o.setValue(V), o.onClosed = function() {
                                d.endEditing()
                            }, o.isInstant() && (o.onValueChanged = function(_, B) {
                                d.setValue(T, P, B)
                            }), hs(o, S), o.open(), void 0
                        }
                        if (a) {
                            if (ef.ComboBox) {
                                var v = new ef.ComboBox;
                                v.setValue(V), v.setValues(a), v.setLabels(P.getEnumLabels(T)), v.setIcons(P.getEnumIcons(T)), v.setEditable(P.isEnumEditable(T)), v.setStrict(P.isEnumStrict(T)), v.setMaxHeight(P.getEnumMaxHeight(T)), v.setDropDownWidth(P.getEnumDropDownWidth(T)), v.onClosed = function() {
                                    d.endEditing()
                                }, hs(v, S), v.open()
                            } else zr(wo, S, j, a, P);
                            return
                        }
                        var i = P.getValueType(T);
                        if (i === je || fc(V)) return d.setValue(T, P, !V), void 0;
                        if (P.getItemEditor(T)) {
                            var m = Xc(P.getItemEditor(T)),
                                L = new m(T, P, d, S),
                                q = L.getView();
                            return q._17Q = L, L.setValue(V), zk(q), hs(q, S), L.editBeginning && L.editBeginning(), void 0
                        }
                        zr("input", S, j, r, P)
                    }
                }
            },
            _44o: function(C) {
                C.init = function(X) {
                    var L = this,
                        w = L.th = new ll(X),
                        Y = L._view = xq(1, L);
                    L.tv = L._tableView = X, Hb(Y, w.getView()), Hb(Y, X.getView()), w.mp(function(A) {
                        A.property === uk && L.iv()
                    }), L.iv()
                }, C.getTableView = function() {
                    return this.tv
                }, C.getTableHeader = function() {
                    return this.th
                }, C.getDataModel = function() {
                    return this.tv.dm()
                }, C.getColumnModel = function() {
                    return this.tv.getColumnModel()
                }, C.setColumns = function(H) {
                    this.tv.setColumns(H)
                }, C.addColumns = function(f) {
                    this.tv.addColumns(f)
                }, C.endEditing = function() {
                    this.tv.endEditing()
                }, C.validateImpl = function() {
                    var F = this,
                        _ = F.th,
                        T = Zq(_),
                        m = {
                            x: 0,
                            y: 0,
                            width: F.getWidth(),
                            height: T
                        };
                    Ho(_, m), m.y = T, m.height = v(0, F.getHeight() - T), Ho(F.tv, m)
                }
            },
            ms_vs: function(F) {
                F._41o = function() {
                    return this._29I.height < this._59I
                }, F._43o = function() {
                    var q = this;
                    q._41o() && (q._58I || (V(function() {
                        q._94O()
                    }, dk), q.iv()), q._58I = new Date)
                }, F._94O = function() {
                    var g = this;
                    if (g._58I) {
                        var a = new Date;
                        a.getTime() - g._58I.getTime() >= dk ? (delete g._58I, g.iv()) : V(function() {
                            g._94O()
                        }, dk)
                    }
                }, F._93I = function() {
                    var Y = this,
                        M = Y._27I;
                    if (Y._58I || !Y._autoHideScrollBar) {
                        M || Hb(Y._79O, M = Y._27I = gb());
                        var P = Y._29I,
                            o = P.height,
                            c = Y._59I,
                            v = Y.getScrollBarSize(),
                            T = P.width - v - 2,
                            u = o * (-Y.ty() / c),
                            i = o * (o / c),
                            k = M.style;
                        c > o ? (vi > i && (u = u + i / 2 - vi / 2, 0 > u && (u = 0), u + vi > o && (u = o - vi), i = vi), k.visibility = Jj, k.background = Y.getScrollBarColor(), k.borderRadius = v / 2 + Yg, Ho(M, T, u, v, i)) : k.visibility = se
                    } else M && (M.style.visibility = se)
                }
            },
            ms_hs: function(L) {
                L._40o = function() {
                    return this._29I.width < this._91I
                }, L._42o = function() {
                    var M = this;
                    M._40o() && (M._95O || (V(function() {
                        M._94I()
                    }, dk), M.iv()), M._95O = new Date)
                }, L._94I = function() {
                    var x = this;
                    if (x._95O) {
                        var W = new Date;
                        W.getTime() - x._95O.getTime() >= dk ? (delete x._95O, x.iv()) : V(function() {
                            x._94I()
                        }, dk)
                    }
                }, L._92I = function() {
                    var W = this,
                        l = W._28I;
                    if (W._95O || !W._autoHideScrollBar) {
                        l || Hb(W._79O, l = W._28I = gb());
                        var Q = W._29I,
                            u = Q.width,
                            U = W._91I,
                            Z = W.getScrollBarSize(),
                            H = Q.height - Z - 2,
                            T = u * (-W.tx() / U),
                            j = u * (u / U),
                            e = l.style;
                        U > u ? (vi > j && (T = T + j / 2 - vi / 2, 0 > T && (T = 0), T + vi > u && (T = u - vi), j = vi), e.visibility = Jj, e.background = W.getScrollBarColor(), e.borderRadius = Z / 2 + Yg, Ho(l, T, H, j, Z)) : e.visibility = se
                    } else l && (l.style.visibility = se)
                }
            }
        }), Ae(xf, $q(16, 16, [{
            type: li,
            rect: [1, 1, 14, 14],
            background: Zr
        }, {
            type: ud,
            rect: [1, 1, 14, 14],
            width: 1,
            color: Oh
        }, {
            type: Di,
            points: [13, 3, 7, 12, 4, 8],
            borderWidth: 2,
            borderColor: "#FFF"
        }])), Ae(dr, $q(16, 16, {
            type: ud,
            rect: [1, 1, 14, 14],
            width: 1,
            color: Oh
        })), Ae(Dq, $q(16, 16, [{
            type: Cm,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: Oh,
            background: "#FFF"
        }, {
            type: Cm,
            rect: [4, 4, 8, 8],
            background: Zr
        }])), Ae(Jp, $q(16, 16, {
            type: Cm,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: Oh
        })), wi._15Q = function(v) {
            v._29I = Kh, v._59I = 0, v._91I = 0, v._5o = function(q) {
                var V = this;
                V._30I = new pm, V._rows = new pm, V._rowMap = {}, V._31I = 0, V._14I = 0, V._view = xq(1, V), V._canvas = Tl(V._view), Hb(V._view, V._79O = gb()), V.dm(q ? q : new Wg)
            }, v.getCheckIcon = function(x) {
                var M = this.sm(),
                    c = M.co(x);
                return M.sg() ? Eq(c ? Dq : Jp) : Eq(c ? xf : dr)
            }, v.checkData = function($) {
                var V = this.sm(),
                    v = V.co($);
                V.sg() && v || (this._32o = 1, v ? V.rs($) : V.as($), delete this._32o)
            }, v.getDataAt = function(E) {
                E.target && (E = this.lp(E));
                var a = R(E.y / this._rowHeight),
                    g = this._rows;
                return 0 > a || a >= g.size() ? r : g.get(a)
            }, v.onDataDoubleClicked = function() {}, v.onDataClicked = function() {}, v.adjustTranslateX = function() {
                return 0
            }, v.adjustTranslateY = function(x) {
                var N = this.getHeight() - this._59I;
                return N > x && (x = N), x > 0 ? 0 : T(x)
            }, v.onPropertyChanged = function(g) {
                var G = this,
                    w = g.property;
                Vb[w] ? G.ivm() : Lm[w] || G.redraw(), w === Ec ? G._42o() : w === Kk && G._43o()
            }, v.getLabel = function(I) {
                return I.toLabel()
            }, v.getLabelFont = function() {
                return this._labelFont
            }, v.getLabelColor = function(b) {
                var N = this;
                if (N.isCheckMode()) {
                    if (N._focusData === b) return N._labelSelectColor
                } else if (N.isSelected(b)) return N._labelSelectColor;
                return N._labelColor
            }, v.getStartRowIndex = function() {
                return this._31I
            }, v.getEndRowIndex = function() {
                return this._14I
            }, v.getRowDatas = function() {
                return this._rows
            }, v.getRowIndex = function(O) {
                return this._rowMap[O._id]
            }, v.getRowSize = function() {
                return this._rows.size()
            }, v.getViewRect = function() {
                return Dh(this._29I)
            }, v.isVisible = function(n) {
                return this._visibleFunc ? this._visibleFunc(n) : !0
            }, v.getCurrentSortFunc = function() {
                return this._sortFunc
            }, v.setDataModel = function(C) {
                var f = this,
                    o = f._dataModel,
                    Y = f._selectionModel;
                o !== C && (o && (o.umm(f.handleDataModelChange, f), o.umd(f.handleDataPropertyChange, f), o.umh(f.handleHierarchyChange, f), Y || o.sm().ums(f.handleSelectionChange, f)), f._dataModel = C, C.mm(f.handleDataModelChange, f), C.md(f.handleDataPropertyChange, f), C.mh(f.handleHierarchyChange, f), Y ? Y._21I(C) : C.sm().ms(f.handleSelectionChange, f), f.fp("dataModel", o, C))
            }, v.validateModel = function() {
                var C = this;
                C._rows.clear(), C._rowMap = {}, C.buildChildren(C._dataModel._roots);
                var F = C._rows = C._rows.toList(C.isVisible, C),
                    o = 0,
                    M = C.getCurrentSortFunc(),
                    W = F.size();
                for (M && F.sort(M); W > o; o++) C._rowMap[F.get(o)._id] = o
            }, v.buildChildren = function(s) {
                var I = this;
                s.each(function(E) {
                    I._rows.add(E), I.buildChildren(E._children)
                })
            }, v.handleDataModelChange = function() {
                this.ivm()
            }, v.handleDataPropertyChange = function(r) {
                "parent" === r.property ? this.ivm() : this.invalidateData(r.data)
            }, v.handleHierarchyChange = function() {
                this.ivm()
            }, v.handleSelectionChange = function(L) {
                L.datas.each(this.invalidateData, this), this.onSelectionChanged(L)
            }, v.onSelectionChanged = function(V) {
                var S = this,
                    m = S.sm();
                !S.isAutoMakeVisible() || 1 !== m.size() || "set" !== V.kind && "append" !== V.kind || S._32o || S.makeVisible(m.ld())
            }, v.handleBackgroundClick = function(h) {
                Yq(h) && !this.isCheckMode() && this.sm().cs()
            }, v.makeVisible = function(W) {
                W && (this._23I = W, this.iv())
            }, v.scrollToIndex = function(X) {
                var l = this,
                    V = l._29I,
                    P = V.height,
                    c = l._rowHeight,
                    C = c * X;
                X >= 0 && X < l._rows.size() && P > 0 && (C + c > V.y + P ? l.ty(-C + P - c) : C < V.y && l.ty(-C))
            }, v.autoScroll = function(n, H) {
                var v = this,
                    g = v._rowHeight,
                    u = g,
                    q = g / 4,
                    e = v._29I,
                    V = v.lp(n),
                    c = {
                        x: v.tx(),
                        y: v.ty()
                    };
                return g > 0 && e && (V.x - e.x < u ? v.translate(q, 0) : e.x + e.width - V.x < u && v.translate(-q, 0), V.y - e.y < u ? v.translate(0, q) : e.y + e.height - V.y < u && v.translate(0, -q)), c.x = v.tx() - c.x, c.y = v.ty() - c.y, H && (H.x += c.x, H.y += c.y), c
            }, v.getTopRowOrderSelection = function() {
                var y = this.sm().getTopSelection(),
                    Y = {},
                    h = new pm;
                return y.each(function(e) {
                    Y[e._id] = e
                }), this._rows.each(function(Z) {
                    Y[Z._id] && h.add(Z)
                }), h
            }, v.getRowOrderSelection = function() {
                var D = new pm;
                return this._rows.each(function(o) {
                    this.isSelected(o) && D.add(o)
                }, this), D
            }, v.ivm = function() {
                this.invalidateModel()
            }, v.invalidateModel = function() {
                var M = this;
                M._96I || (M._96I = 1, M._32I = 1, delete M._24I), M.iv()
            }, v.redraw = function() {
                var x = this;
                x._32I || (x._32I = 1, delete x._24I, x.iv())
            }, v.invalidateData = function(S) {
                var G = this;
                W ? G.redraw() : G._32I || (G._24I || (G._24I = {}), G._24I[S._id] = S, G.iv())
            }, v.getFocusData = function() {
                return this._focusData
            }, v.setFocusDataById = function(o) {
                this.setFocusData(this.dm().getDataById(o))
            }, v.setFocusData = function(I) {
                var V = this,
                    k = V._focusData;
                k !== I && (V._focusData = I, V.fp("focusData", k, I), k && V.invalidateData(k), I && (V.invalidateData(I), V.isAutoMakeVisible() && V.makeVisible(I)))
            }, v.drawRowBackground = function(x, N, Y, K, O, F, b) {
                var G = this,
                    q = G.isCheckMode();
                (N === G._focusData && q || Y && !q) && yj(x, K, O, F, b, G.getSelectBackground(N))
            }, v.drawData = function(U, n, N) {
                var A = this,
                    I = A._rowHeight,
                    Y = I * N,
                    q = A._29I,
                    G = q.x,
                    X = q.width;
                U.save(), U.beginPath(), U.rect(G, Y, X, I), U.clip(), A._87o(A.drawRow(U, n, A.isSelected(n), G, Y, X, I), N, G, Y, X, I), U.restore(), A._rowLineVisible && yj(U, G, Y + I - 1, X, 1, A._rowLineColor)
            }, v._12I = function(r) {
                var d = this,
                    y = d._31I,
                    c = d._29I,
                    V = c.x,
                    j = c.y,
                    n = c.width,
                    J = c.height;
                for (r.beginPath(), r.rect(V, j, n, J), r.clip(), r.clearRect(V, j, n, J), d._76o(), d._93db(r); y < d._14I; y++) d.drawData(r, d._rows.get(y), y);
                d._92db(r)
            }, v._13I = function(A) {
                for (var d, Y = this, K = Y._rowHeight, I = Y._29I, t = I.x, T = I.width, X = Y._31I, y = Y._30I; X < Y._14I; X++) d = Y._rows.get(X), Y._24I[d._id] && y.add({
                    data: d,
                    index: X
                });
                y.isEmpty() || (A.beginPath(), y.each(function(B) {
                    A.rect(t, B.index * K, T, K)
                }), A.clip(), y.each(function(N) {
                    A.clearRect(t, N.index * K, T, K)
                }), y.each(function(o) {
                    Y._77o(o.index)
                }), Y._93db(A), y.each(function(C) {
                    Y.drawData(A, C.data, C.index)
                }), Y._92db(A), y.clear())
            }, v.validateImpl = function() {
                var y = this,
                    v = y._canvas,
                    T = y.getWidth(),
                    W = y.getHeight(),
                    M = y._rowHeight,
                    S = y._32I;
                (T !== v.clientWidth || W !== v.clientHeight) && (Oc(v, T, W), S = 1);
                var j = O && !Y;
                y._96I && !j && y.validateModel();
                var G = y._29I,
                    o = {
                        x: -y.tx(),
                        y: -y.ty(),
                        width: T,
                        height: W
                    },
                    Q = y._rows.size(),
                    w = ng(v),
                    h = y._23I;
                S || pd(o, G) || (S = 1), y._29I = o, y._59I = Q * M, y._31I = R(o.y / M), y._14I = P((o.y + o.height) / M), y._31I < 0 && (y._31I = 0), y._14I > Q && (y._14I = Q), y._99I && S && y._99I(), me(w, y.tx(), y.ty(), 1), S ? y._12I(w) : y._24I && y._13I(w), y._93I(), y._92I(), w.restore(), y._32I = y._24I = y._96I = r, h && (y.scrollToIndex(y.getRowIndex(h)), delete y._23I), y.tx(y.tx()), y.ty(y.ty())
            }
        }, wi._48o = function(Q) {
            Q._rootVisible = !0, Q._rootData = r, Q._35o = function() {
                this._expandMap = {}, this._levelMap = {}
            }, Q.validateModel = function() {
                var Z = this,
                    L = Z._rootData;
                Z._rows.clear(), Z._levelMap = {}, Z._rowMap = {}, Z._currentLevel = 0, L ? Z._rootVisible ? Z.isVisible(L) && Z.buildData(L) : Z.buildChildren(L) : Z.buildChildren(), delete Z._currentLevel
            }, Q.buildData = function(P) {
                var K = this,
                    O = P._id,
                    s = K._rows;
                K._rowMap[O] = s.size(), s.add(P), K._levelMap[O] = K._currentLevel, K.isExpanded(P) && (K._currentLevel++, K.buildChildren(P), K._currentLevel--)
            }, Q.buildChildren = function(P) {
                var B = this,
                    l = P ? P._children : B._dataModel._roots,
                    O = B.getCurrentSortFunc();
                O && B.isChildrenSortable(P) ? l.toList(B.isVisible, B).sort(O).each(B.buildData, B) : l.each(function(d) {
                    B.isVisible(d) && B.buildData(d)
                })
            }, Q.getLevel = function(Q) {
                return this._levelMap[Q._id]
            }, Q.getToggleIcon = function(s) {
                var J = this,
                    L = J._loader,
                    H = J._collapseIcon;
                return L && !L.isLoaded(s) ? H : s.hasChildren() ? J.isExpanded(s) ? J._expandIcon : H : r
            }, Q.isCheckMode = function() {
                return this._checkMode != r
            }, Q.isChildrenSortable = function() {
                return !0
            }, Q.handleDataModelChange = function(Y) {
                var q = this;
                Y.kind === Nk ? delete q._expandMap[Y.data._id] : Y.kind === Kr && (q._expandMap = {}), q.ivm()
            }, Q.toggle = function(z) {
                var h = this;
                h.isExpanded(z) ? h.collapse(z) : h.expand(z)
            }, Q.isExpanded = function(D) {
                return 1 === this._expandMap[D._id]
            }, Q.expand = function(o) {
                var i = this,
                    Z = i._loader;
                i.isExpanded(o) || (Z && !Z.isLoaded(o) && Z.load(o), i._expandMap[o._id] = 1, i.ivm(), i.onExpanded(o))
            }, Q.onExpanded = function() {}, Q.collapse = function(q) {
                var Z = this;
                Z.isExpanded(q) && (delete Z._expandMap[q._id], Z.ivm(), Z.onCollapsed(q))
            }, Q.onCollapsed = function() {}, Q.expandAll = function() {
                var e = this;
                e._dataModel.each(function(C) {
                    C.hasChildren() && (e._expandMap[C._id] = 1)
                }), e.ivm()
            }, Q.collapseAll = function() {
                this._expandMap = {}, this.ivm()
            }, Q.makeVisible = function(n) {
                if (n) {
                    var a = this;
                    if (!a._rootData || n.isDescendantOf(a._rootData)) {
                        for (var W = n._parent; W;) a.expand(W), W = W._parent;
                        a._23I = n, a.iv()
                    }
                }
            }, Q.checkData = function(I) {
                var b, d = this,
                    T = d._checkMode,
                    n = d.sm(),
                    z = n.co(I);
                if (!n.sg() || !z) {
                    if (d._32o = 1, T === x) z ? n.rs(I) : n.as(I);
                    else if (T === ib) b = new pm(I), b.addAll(I._children);
                    else if ("descendant" === T) b = new pm, po(I, b);
                    else if ("all" === T && (b = new pm, po(I, b), !z))
                        for (var v = I._parent; v;) b.add(v), v = v._parent;
                    b && (z ? n.rs(b) : n.as(b)), delete d._32o
                }
            }, Q._97I = function(z, Z, m, C, R, l, H) {
                var p = this,
                    U = p._indent,
                    i = p._levelMap[Z._id],
                    Y = p.getIconWidth(Z),
                    f = Eq(p.getToggleIcon(Z));
                f ? (C += U * i, Jh(z, f, C + U / 2, R + H / 2, Z, p), C += U) : C += U * (i + 1), p._checkMode && (Jh(z, p.getCheckIcon(Z), C + U / 2, R + H / 2, Z, p), C += U), p.drawIcon(z, Z, C, R, Y, H), p.drawLabel(z, Z, C + Y, R, H)
            }
        }, wi._14Q = function(q) {
            q.getIcon = function(I) {
                return I.getIcon()
            }, q.getIconWidth = function(m) {
                return this.getIcon(m) ? this._indent : 0
            }, q.drawIcon = function(W, Y, P, X, q, y) {
                if (q) {
                    var r = this,
                        Q = r.getBodyColor(Y),
                        I = Eq(r.getIcon(Y), Q);
                    I && (y -= r.isRowLineVisible() ? 1 : 0, Qh(W, I, qg, P, X, q, y, Y, r, Q), Wq(W, r.getBorderColor(Y), P, X, q, y))
                }
            }, q.drawLabel = function(l, r, q, g, d) {
                var K = this;
                so(l, K.getLabel(r), K.getLabelFont(r), K.getLabelColor(r), q, g, 0, d)
            }
        }, wi._50o = function(x) {
            x._98I = function() {
                var n = this,
                    I = n._39o = new Wg;
                n._60I = new pm, I.mm(n._17o, n), I.md(n._18o, n), I.mh(n._19o, n)
            }, x.setColumns = function($) {
                this._39o.clear(), this.addColumns($)
            }, x.addColumns = function(d) {
                var i = this._39o;
                d.forEach(function(V) {
                    if (!(V instanceof tp)) {
                        var D = Xc(V.className);
                        V = ae(D ? D : tp, V)
                    }
                    i.add(V)
                })
            }, x.onColumnClicked = function() {}, x.onCheckColumnClicked = function() {}, x._3Q = function(z) {
                for (var $, f = 0, w = this._60I, W = w.size(); W > f; f++)
                    if ($ = w.get(f), $.column === z) return $;
                return r
            }, x.getColumnAt = function(i) {
                var I = this._4Q(i);
                return I ? I.column : r
            }, x._4Q = function(k) {
                for (var Q = this, s = k.target ? Q.lp(k).x : k.x, i = Q._60I, x = 0; x < i.size(); x++) {
                    var E = i.get(x),
                        N = E.startX;
                    if (s >= N && s < N + E.column.getWidth()) return E
                }
                return r
            }, x.getToolTip = function(E) {
                var p = this,
                    w = p.getDataAt(E),
                    h = p.getColumnAt(E);
                return w && h ? h.getToolTip(w, p) : r
            }, x.adjustTranslateX = function(W) {
                var $ = this.getWidth() - this._91I;
                return $ > W && (W = $), W > 0 ? 0 : T(W)
            }, x._99I = function() {
                var M = this,
                    V = M._29I,
                    H = M._60I;
                H.clear(), M._91I = 0, M._39o._roots.each(function(y) {
                    if (y.isVisible()) {
                        var b = M._91I + y.getWidth();
                        M._91I <= V.x + V.width && b >= V.x && H.add({
                            column: y,
                            startX: M._91I
                        }), M._91I = b
                    }
                })
            }, x.drawData = function(r, z, i) {
                var V = this,
                    R = V._rowHeight,
                    H = R * i,
                    C = V.isSelected(z),
                    t = V._29I,
                    g = t.x,
                    K = t.width;
                V.drawRowBackground(r, z, C, g, H, K, R), V._60I.each(function(N) {
                    var O = N.column,
                        n = N.startX,
                        c = O.getWidth();
                    c > 0 && !V.isEditing(z, O) && (r.save(), r.beginPath(), r.rect(n, H, c, R), r.clip(), V._87o(V.drawCell(r, z, C, O, n, H, c, R), i, n, H, c, R), V._columnLineVisible && yj(r, n + c - 1, H, 1, R, V._columnLineColor), r.restore())
                }), V._rowLineVisible && yj(r, g, H + R - 1, K, 1, V._rowLineColor)
            }, x.drawCell = function(r, A, q, b, l, L, O, i) {
                var s = this;
                if (b.drawCell) return b.drawCell(r, A, q, b, l, L, O, i, s);
                var p = s.getValue(A, b);
                Ki(r, p, b, s.getLabelFont(A, b, p), s.getLabelColor(A, b, p), l, L, O, i, A, s)
            }, x.getColumnModel = function() {
                return this._39o
            }, x._17o = function() {
                this.redraw()
            }, x._18o = function(P) {
                var f = this;
                P.data === f._sortColumn && Lg[P.property] ? f.ivm() : (f._42o(), f.redraw())
            }, x._19o = function() {
                this.redraw()
            }, x.getCurrentSortFunc = function() {
                var H = this,
                    P = H._sortColumn;
                if (P && P.isSortable()) {
                    var j = P.getSortFunc(),
                        W = Xd === P.getSortOrder() ? 1 : -1;
                    return j || (j = am),
                        function(y, U) {
                            return j.call(H, H.getValue(y, P), H.getValue(U, P), y, U) * W
                        }
                }
                return H._sortFunc
            }, x.isCellEditable = function(j, l) {
                return l.isEditable() && this.isEditable()
            }, x._37O = function(d, j) {
                if (Yq(j))
                    for (var z = this, u = z.lp(j), J = z._60I, B = z._rowHeight, N = z._29I, b = N.x, K = N.y, m = N.width, v = N.height, q = 0; q < J.size(); q++) {
                        var c = J.get(q),
                            x = c.startX,
                            Z = c.column,
                            t = Z.getWidth();
                        if (Z !== z._31o && Z !== z._4o && z.isCellEditable(d, Z, j) && u.x >= x && u.x < x + t) {
                            var T = {
                                    x: x,
                                    y: z.getRowIndex(d) * B,
                                    width: t,
                                    height: B
                                },
                                H = {
                                    x: T.x + z.tx(),
                                    y: T.y + z.ty(),
                                    width: T.width,
                                    height: T.height
                                },
                                W = 0,
                                M = 0;
                            return T.x < b ? W = T.x - b : T.x + T.width > b + m && (W = T.x + T.width - b - m), W && (z.tx(z.tx() - W), H.x -= W), T.y < K ? M = T.y - K : T.y + B > K + v && (M = T.y + B - K - v), M && (z.ty(z.ty() - M), H.y -= M), z.beginEditing({
                                data: d,
                                column: Z,
                                value: z.getValue(d, Z),
                                event: j,
                                rect: T,
                                editorRect: H,
                                view: z
                            }), void 0
                        }
                    }
            }
        }, ef.BaseItemEditor = function(n, Z, W, A) {
            this._data = n, this._column = Z, this._master = W, this._editInfo = A
        }, vh("BaseItemEditor", s, {
            ms_ac: ["data", "column", "master", "editInfo"],
            editBeginning: function() {},
            getView: function() {},
            getValue: function() {},
            setValue: function() {}
        });
        var bm = D.Tab = function() {
            dg(bm, this)
        };
        xr("Tab", Bg, {
            ms_ac: ["view", "closable", "disabled"],
            _icon: r,
            _closable: !1,
            _disabled: !1,
            setParent: Sr
        });
        var tp = D.Column = function() {
            dg(tp, this)
        };
        xr("Column", Bg, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", Jj, kb, $n, kk, "align", Jc, "sortOrder", Wl, "sortable", "clickable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
            _visible: !0,
            _width: 80,
            _sortOrder: Xd,
            _sortFunc: r,
            _sortable: !0,
            _clickable: !0,
            setWidth: function(e) {
                16 > e && (e = 16);
                var t = this._width;
                this._width = e, this.fp(kk, t, e)
            },
            getToolTip: function(W, G) {
                return this.formatValue(G.getValue(W, this))
            }
        });
        var Bd = D.Property = function() {
            dg(Bd, this)
        };
        xr("Property", Bg, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", kb, $n, "categoryName", Jc, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
            _categoryName: r,
            getToolTip: function(M, d, F) {
                var N = this;
                return d ? N.formatValue(F.getValue(M, N)) : F.getPropertyName(N)
            }
        }), ef.AccordionView = function() {
            var e = this;
            e._20o = {}, e._21o = new pm, e._10o = r, e._9o = r, e._11o = r, e._view = xq(0, e), e.iv()
        }, vh("AccordionView", s, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: [kl, nr, "titleHeight", mk, Bl, "titleBackground", "selectWidth", zd, "orientation", "separatorColor"],
            _expandIcon: S.accordionViewExpandIcon,
            _collapseIcon: S.accordionViewCollapseIcon,
            _titleHeight: Ke,
            _labelColor: S.accordionViewLabelColor,
            _labelFont: S.accordionViewLabelFont,
            _titleBackground: S.accordionViewTitleBackground,
            _selectBackground: S.accordionViewSelectBackground,
            _selectWidth: S.accordionViewSelectWidth,
            _orientation: "v",
            _separatorColor: S.accordionViewSeparatorColor,
            onPropertyChanged: function() {
                this.iv()
            },
            getView: function() {
                return this._view
            },
            getTitles: function() {
                return this._21o
            },
            getCurrentTitle: function() {
                return this._10o
            },
            add: function(J, j, b, u) {
                var i = this,
                    T = gb();
                if (i._20o[J]) throw J + " already exists";
                T.onmousedown = ks, T.style.cursor = yc, T.addEventListener(h ? tg : eo, function(z) {
                    ks(z)
                }, !1), T.addEventListener(h ? cd : Zf, function(v) {
                    ks(v), Yq(v) && (i._10o === J ? i.collapse() : i.expand(J))
                }, !1), Hb(i._view, T), i._20o[J] = {
                    content: j,
                    div: T,
                    canvas: Tl(T),
                    icon: u
                }, i._21o.add(J), b && i.expand(J), i.iv()
            },
            remove: function(s) {
                var X = this,
                    d = X._20o[s];
                d && (Nl(d.div), delete X._20o[s], X._21o.remove(s), X.iv())
            },
            clear: function() {
                var F = this;
                F._20o = {}, F._21o.clear(), F.iv()
            },
            isExpanded: function($) {
                return this._10o === $
            },
            expand: function(Q) {
                var o = this;
                o._20o[Q] && o._10o !== Q && (o._10o = Q, o.onExpanded(Q), o.iv())
            },
            onExpanded: function() {},
            collapse: function() {
                var u = this;
                u._10o && (u.onCollapsed(u._10o), delete u._10o, u.iv())
            },
            onCollapsed: function() {},
            initCanvas: function(L, A, $) {
                Oc(L, A, $);
                var I = ng(L);
                return me(I, 0, 0, 1), I.clearRect(0, 0, A, $), I
            },
            drawTitle: function(L, V, D, T, l) {
                var j = this,
                    H = Eq(l.icon),
                    k = j.isExpanded(V),
                    e = j._titleHeight,
                    F = j._titleBackground,
                    v = j._selectWidth,
                    r = j._separatorColor,
                    h = Eq(k ? j._expandIcon : j._collapseIcon),
                    b = v + 4;
                yj(L, 0, 0, D, T, F), k && v && yj(L, 0, 0, v, T, j._selectBackground), (k || j._21o.get(j._21o.size() - 1) !== V) && yj(L, 0, T - 1, D, 1, r ? r : Bq(F)), H && (Jh(L, H, b + co(H) / 2, e / 2), b += co(H) + 2), so(L, V, j.getLabelFont(V), j.getLabelColor(V), b, 0, 0, e), h && Jh(L, h, D - co(h) / 2 - 4, e / 2)
            },
            validateImpl: function() {
                var K = this,
                    Z = K._view,
                    T = 0,
                    L = 0,
                    Y = K.getWidth(),
                    e = K.getHeight(),
                    p = K._titleHeight,
                    a = K._21o.size() * p,
                    G = K._11o,
                    C = K._9o;
                delete K._11o, delete K._9o, K._21o.each(function(X) {
                    var z, A, E = K._20o[X],
                        n = E.content,
                        M = K._10o === X;
                    un(K) ? (Ho(E.div, T, 0, p, e), z = K.initCanvas(E.canvas, p, e), Xk(z, 0, e), yr(z, -F), K.drawTitle(z, X, e, p, E), z.restore(), M ? (A = v(0, Y - a), n && (K._11o = n, K._9o = we(n), Ho(n, T + p, 0, A, e)), T += p + A) : T += p) : (Ho(E.div, 0, L, Y, p), z = K.initCanvas(E.canvas, Y, p), K.drawTitle(z, X, Y, p, E), z.restore(), M ? (A = v(0, e - a), n && (K._11o = n, K._9o = we(n), Ho(n, 0, L + p, Y, A)), L += p + A) : L += p)
                });
                var B = K._9o;
                G && G !== K._11o && G.endEditing && G.endEditing(), B && B !== C && Hb(Z, B), C && C !== B && Nl(C)
            }
        }), ef.SplitView = function(s, f, $, B) {
            var H = this,
                I = H._dividerDiv = gb(),
                N = H._60O = Tl(),
                o = H._61O = Tl(),
                w = N.style,
                h = o.style;
            H._view = xq(1, H), Hb(H._view, I), w.msTouchAction = no, w.pointerEvents = no, w.cursor = yc, h.msTouchAction = no, h.pointerEvents = no, h.cursor = yc, s && H.setLeftView(s), f && H.setRightView(f), $ && H.setOrientation($), B != r && H.setPosition(B), H.setStatus(Wi), new Ng(H)
        }, vh("SplitView", s, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: ["continuousLayout", "dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
            _continuousLayout: !1,
            _position: .5,
            _togglable: !0,
            _orientation: "h",
            _draggable: !0,
            _dividerSize: S.splitViewDividerSize,
            _dividerBackground: S.splitViewDividerBackground,
            _dragOpacity: S.splitViewDragOpacity,
            _toggleIcon: S.splitViewToggleIcon,
            onPropertyChanged: function() {
                this.iv()
            },
            getDividerDiv: function() {
                return this._dividerDiv
            },
            getPosition: function() {
                return this._position
            },
            setPosition: function(D, s) {
                var t = this,
                    v = t._position;
                isNaN(D) || (s || (t._82O = 0 > D ? -1 : D > 1 ? 1 : 0), t._position = D, t.fp(Ve, v, D))
            },
            getLeftView: function() {
                return this._leftView
            },
            setLeftView: function(q) {
                var n = this,
                    i = n._leftView,
                    I = n._view;
                if (n._leftView !== q) {
                    if (i && i !== n._rightView) {
                        var t = we(i);
                        t.parentNode === I && Nl(t)
                    }
                    if (n._leftView = q, q) {
                        var X = we(q);
                        X.parentNode !== I && I.insertBefore(X, n._dividerDiv)
                    }
                    n.fp("leftView", i, q)
                }
            },
            getRightView: function() {
                return this._rightView
            },
            setRightView: function(o) {
                var L = this,
                    C = L._rightView,
                    d = L._view;
                if (L._rightView !== o) {
                    if (C && C !== L._leftView) {
                        var p = we(C);
                        p.parentNode === d && Nl(p)
                    }
                    if (L._rightView = o, o) {
                        var J = we(o);
                        J.parentNode !== d && d.insertBefore(J, L._dividerDiv)
                    }
                    L.fp("rightView", C, o)
                }
            },
            validateImpl: function() {
                var n = this,
                    d = n._draggable,
                    D = n._position,
                    C = n.getWidth(),
                    N = n.getHeight(),
                    L = n._dividerSize,
                    Z = n._dividerBackground,
                    l = h ? 18 : 8,
                    m = n._dividerDiv,
                    r = n._82O,
                    e = n._60O,
                    O = n._61O,
                    k = n._toggleIcon,
                    M = n._status,
                    q = m.style,
                    x = null,
                    c = h ? 20 : 4,
                    g = k.comps[0];
                L >= l || 0 === L ? n._coverDiv && (Nl(n._coverDiv), delete n._coverDiv) : n._coverDiv || (n._coverDiv = gb(), K && (n._coverDiv.style.background = ar), Hb(m, n._coverDiv)), n._togglable ? e.parentNode || (Hb(m, e), Hb(m, O)) : (Nl(e), Nl(O));
                var $ = n._coverDiv,
                    w = n._leftView,
                    Y = n._rightView;
                if (un(n)) {
                    if (L > C && (L = C), M === Wi)
                        if (1 === r) var U = I(D, C),
                            R = v(0, C - L - U);
                        else -1 === r ? (R = I(-D, C), U = v(0, C - L - R)) : (U = T((C - L) * D), R = v(0, C - L - U));
                    else "cl" === M ? (U = 0, R = v(0, C - L)) : "cr" === M && (R = 0, U = v(0, C - L));
                    w && Ho(w, 0, 0, U, N), Y && Ho(Y, U + L, 0, R, N), Ho(m, U, 0, L, N), n._22o = U, $ && (Ho($, L / 2 - l / 2, 0, l, N), $.style.cursor = d ? Tn : ""), m.style.cursor = d ? Tn : "";
                    var P = m.clientHeight / 2,
                        Q = m.clientWidth;
                    Oc(e, Q, Q), Ho(e, 0, P - Q - c, Q, Q), x = ng(e), me(x, 0, 0, 1), g.rotation = -F, Sq(x, k, 0, 0, Q, Q), x.restore(), Oc(O, Q, Q), Ho(O, 0, P + c, Q, Q), x = ng(O), me(x, 0, 0, 1), g.rotation = F, Sq(x, k, 0, 0, Q, Q), x.restore()
                } else {
                    if (L > N && (L = N), M === Wi)
                        if (1 === r) var G = I(D, N),
                            t = v(0, N - L - G);
                        else -1 === r ? (t = I(-D, N), G = v(0, N - L - t)) : (G = T((N - L) * D), t = v(0, N - L - G));
                    else "cl" === M ? (G = 0, t = v(0, N - L)) : "cr" === M && (t = 0, G = v(0, N - L));
                    w && Ho(w, 0, 0, C, G), Y && Ho(Y, 0, G + L, C, t), Ho(m, 0, G, C, L), n._22o = G, $ && (Ho($, 0, L / 2 - l / 2, C, l), $.style.cursor = d ? gs : ""), q.cursor = d ? gs : "";
                    var j = m.clientWidth / 2,
                        Q = m.clientHeight;
                    Oc(e, Q, Q), Ho(e, j - Q - c, 0, Q, Q), x = ng(e), me(x, 0, 0, 1), g.rotation = 0, Sq(x, k, 0, 0, Q, Q), x.restore(), Oc(O, Q, Q), Ho(O, j + c, 0, Q, Q), x = ng(O), me(x, 0, 0, 1), g.rotation = B, Sq(x, k, 0, 0, Q, Q), x.restore()
                }
                q.background = Z
            }
        });
        var Ng = function(I) {
            this.sv = I, this.addListeners()
        };
        Ni(Ng, s, {
            ms_listener: 1,
            getView: function() {
                return this.sv.getView()
            },
            handle_touchstart: function(P) {
                var V = this,
                    L = V.sv,
                    N = L._dividerDiv,
                    M = L._60O,
                    T = L._61O,
                    g = L._status,
                    n = P.target;
                if (n === M) g === Wi ? L.setStatus("cl") : "cr" === g && L.setStatus(Wi);
                else if (n === T) g === Wi ? L.setStatus("cr") : "cl" === g && L.setStatus(Wi);
                else if (Bj(P) && (n === N || n === L._coverDiv) && (ks(P), L.isDraggable())) {
                    L.getLeftView(), L.getRightView();
                    var A = V.maskDiv = gb();
                    if (A.style.left = 0, A.style.top = 0, A.style.width = L.getWidth() + "px", A.style.height = L.getHeight() + "px", L.getView().appendChild(A), !L.isContinuousLayout()) {
                        var x = V.resizeDiv = gb();
                        x.style.left = N.style.left, x.style.top = N.style.top, x.style.width = N.style.width, x.style.height = N.style.height, x.style.opacity = L.getDragOpacity(), x.style.background = L.getDividerBackground(), Hb(V.getView(), x)
                    }
                    V._lastAbsPosition = L._22o, V._86o = un(L) ? Lf(P).x : Lf(P).y, sh(V, P)
                }
            },
            handleWindowTouchMove: function(t) {
                Bj(t) && this.update(t, this.sv.isContinuousLayout())
            },
            handleWindowTouchEnd: function(b) {
                var h = this;
                h.update(b, !0), h.sv.setStatus(Wi), h.maskDiv && Nl(h.maskDiv), h.resizeDiv && Nl(h.resizeDiv), h.maskDiv = h.resizeDiv = r
            },
            handle_mousedown: function(K) {
                Yq(K) && this.handle_touchstart(K)
            },
            handleWindowMouseMove: function(z) {
                this.handleWindowTouchMove(z)
            },
            handleWindowMouseUp: function(l) {
                this.handleWindowTouchEnd(l)
            },
            update: function(z, f) {
                var l = this,
                    Y = l.sv,
                    H = un(Y) ? Y.getWidth() : Y.getHeight(),
                    T = Y._dividerSize,
                    C = l._lastAbsPosition - l._86o;
                un(Y) ? (C += Lf(z).x, C > H - T && (C = H - T), 0 > C && (C = 0), l.resizeDiv && (l.resizeDiv.style.left = C + Yg)) : (C += Lf(z).y, C > H - T && (C = H - T), 0 > C && (C = 0), l.resizeDiv && (l.resizeDiv.style.top = C + Yg)), f && H !== T && (1 === Y._82O ? Y.setPosition(C, 1) : -1 === Y._82O ? Y.setPosition(C - H + T, 1) : Y.setPosition(C / (H - T), 1))
            }
        }), ef.TabView = function() {
            var d = this,
                z = d._view = xq(1, d),
                Y = d._91O = gb(1),
                y = d._tabModel = new Wg,
                n = y.sm(),
                N = d.invalidate;
            d._7o = new pm, d._canvas = Tl(Y), Hb(z, Y), Hb(z, d._92O = gb(1)), n.setSelectionMode(ze), n.ms(N, d), y.mm(N, d), y.md(N, d), y.mh(N, d), new Gd(d), d.iv()
        }, vh("TabView", s, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_ty: 1,
            ms_lp: 1,
            ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", mk, Bl, "tabBackground", "selectWidth", zd, "moveBackground", "insertColor"],
            _tabPosition: Un,
            _tabHeight: Ke,
            _tabGap: S.tabViewTabGap,
            _labelColor: S.tabViewLabelColor,
            _labelFont: S.tabViewLabelFont,
            _tabBackground: S.tabViewTabBackground,
            _selectWidth: S.tabViewSelectWidth,
            _selectBackground: S.tabViewSelectBackground,
            _moveBackground: S.tabViewMoveBackground,
            _insertColor: S.tabViewInsertColor,
            _movable: !0,
            getContentDiv: function() {
                return this._92O
            },
            getTitleDiv: function() {
                return this._91O
            },
            getTabModel: function() {
                return this._tabModel
            },
            add: function(G, D, U) {
                var Y = new bm,
                    j = this._tabModel;
                return Y.setName(G), Y.setView(D), j.add(Y), U && j.sm().ss(Y), Y
            },
            getLabel: function(w) {
                return w.toLabel()
            },
            onPropertyChanged: function() {
                this.iv()
            },
            _7Q: function(g) {
                this._23o = g, this.iv()
            },
            get: function(B) {
                var F = this,
                    I = F._tabModel;
                if (dl(B)) return I._roots.get(B);
                if (Rr(B)) {
                    var Z;
                    return I.each(function(k) {
                        B === F.getLabel(k) && (Z = k)
                    }), Z
                }
                return B instanceof bm ? B : r
            },
            select: function(s) {
                this._tabModel.sm().ss(this.get(s))
            },
            remove: function(z) {
                var A = this;
                if (z = A.get(z)) {
                    var Z = A._tabModel,
                        F = Z._roots.indexOf(z);
                    A._tabModel.remove(z), A._12Q(--F)
                }
            },
            getCurrentTab: function() {
                return this._8o
            },
            hideTabView: function(s, d) {
                d.parentNode === this._92O && (zb(d) ? (d.style.display = dq, d._tab_ = s) : Nl(d), Fk())
            },
            showTabView: function(q, d) {
                zb(d) && (d.style.display = "block", d._tab_ = q), d.parentNode !== this._92O && (Hb(this._92O, d), Fk())
            },
            _24o: function() {
                var D, U = this,
                    h = U._8o,
                    s = U._9o,
                    o = U._tabModel.sm().ld();
                o && (D = we(o.getView())), D !== s && (s && (h.getView() && h.getView().endEditing && h.getView().endEditing(), U.hideTabView(h, s)), D && U.showTabView(o, D)), U._8o = o, U._9o = D, h !== o && U.onTabChanged(h, o)
            },
            onTabClosing: function() {
                return !0
            },
            onTabChanged: function() {},
            onTabClosed: function(P, T) {
                this._12Q(--T)
            },
            _12Q: function(W) {
                var R = this,
                    j = R._tabModel,
                    p = j.size();
                if (p && !j.sm().ld()) {
                    W == r && (W = 0), W >= p && (W = p - 1), 0 > W && (W = 0);
                    for (var E = W; E >= 0; E--) {
                        var d = R.get(E);
                        if (!d.isDisabled()) return R.select(d), d
                    }
                    for (E = W + 1; p > E; E++)
                        if (d = R.get(E), !d.isDisabled()) return R.select(d), d
                }
            },
            _9Q: function(x) {
                var u = 4,
                    E = Eq(x.getIcon());
                E && (u += co(E, x) + 4);
                var b = this.getLabel(x);
                return b && (u += ir(this.getLabelFont(x), b).width + 4), x.isClosable() && (u += 10), u
            },
            drawTab: function(s, M, f, z, U, v, w) {
                var c, o = this,
                    H = o._tabPosition,
                    K = f + 4,
                    _ = o._selectWidth,
                    S = Eq(M.getIcon()),
                    t = M.isDisabled(),
                    Q = o.getLabelColor(M),
                    J = o.getLabelFont(M),
                    r = o.getLabel(M),
                    e = o._selectBackground,
                    R = H === fp + "-vertical",
                    g = H === th + "-vertical";
                (R || g) && (K = z + 4), t && (s.globalAlpha = hr), yj(s, f, z, U, v, w), M === o._8o && _ && (H === Un ? yj(s, f, z + v - _, U, _, e) : H === fp ? yj(s, f + U - _, z, _, v, e) : H === th ? yj(s, f, z, _, v, e) : R ? yj(s, f + U - _, z, _, v, e) : g ? yj(s, f, z, _, v, e) : yj(s, f, z, U, _, e));
                var D = U / 2;
                if (R && (Xk(s, D, z + v / 2), yr(s, B), Xk(s, -D, -z - v / 2)), S) {
                    var O = bi(S, M),
                        N = co(S, M);
                    if (R || g) {
                        var b = f + U / 2,
                            G = K + O / 2;
                        Xk(s, b, G), yr(s, F), Xk(s, -b, -G), Jh(s, S, f + U / 2, K + O / 2, M, o), Xk(s, b, G), yr(s, -F), Xk(s, -b, -G), K += O + 4
                    } else Jh(s, S, K + N / 2, z + v / 2, M, o), K += N + 4
                }
                return R || g ? (Xk(s, U / 2, K + U / 2), yr(s, F), Xk(s, -U / 2, -K - U / 2), so(s, r, J, Q, f, K, v, U), Xk(s, U / 2, K + U / 2), yr(s, -F), Xk(s, -U / 2, -K - U / 2)) : so(s, r, J, Q, K, z, U, v), R && (Xk(s, D, z + v / 2), yr(s, -B), Xk(s, -D, -z - v / 2)), M.isClosable() && (c = g ? {
                    x: f + U - 12,
                    y: z + v - 12,
                    width: 12,
                    height: 12
                } : {
                    x: f + U - 12,
                    y: z + 2,
                    width: 12,
                    height: 12
                }, this.drawCloseIcon(M, s, Q, c)), t && (s.globalAlpha = 1), c
            },
            drawCloseIcon: function(b, d, z, i) {
                var M = i.x,
                    g = i.y;
                d.strokeStyle = z, d.lineWidth = 1, d.beginPath(), d.moveTo(M + 2, g + 8), d.lineTo(M + 8, g + 2), d.moveTo(M + 8, g + 8), d.lineTo(M + 2, g + 2), d.stroke()
            },
            validateImpl: function() {
                var e = this;
                e._24o();
                var d, m = e._canvas,
                    R = e._tabPosition,
                    O = e._91O,
                    J = e._92O,
                    X = e._tabModel,
                    Z = e.getWidth(),
                    N = e.getHeight(),
                    K = e._tabHeight,
                    x = e._7o,
                    q = e._tabGap,
                    a = R === Un,
                    r = R === fp,
                    T = R === th,
                    s = R === fp + "-vertical",
                    p = R === th + "-vertical",
                    g = e._23o,
                    b = 0;
                if ((r || T) && X._roots.each(function(s) {
                        b = v(e._9Q(s), b)
                    }), a ? (Ho(O, 0, 0, Z, K), d = {
                        x: 0,
                        y: K,
                        width: Z,
                        height: v(0, N - K)
                    }) : r ? (Ho(O, 0, 0, b, N), d = {
                        x: b,
                        y: 0,
                        width: v(0, Z - b),
                        height: N
                    }) : T ? (Ho(O, Z - b, 0, b, N), d = {
                        x: 0,
                        y: 0,
                        width: v(0, Z - b),
                        height: N
                    }) : s ? (Ho(O, 0, 0, K, N), d = {
                        x: K,
                        y: 0,
                        width: v(0, Z - K),
                        height: N
                    }) : p ? (Ho(O, Z - K, 0, K, N), d = {
                        x: 0,
                        y: 0,
                        width: v(0, Z - K),
                        height: N
                    }) : (Ho(O, 0, N - K, Z, K), d = {
                        x: 0,
                        y: 0,
                        width: Z,
                        height: v(0, N - K)
                    }), Ho(J, d), s || p) {
                    e._9o && (d.x = 0, Ho(e._8o.getView(), d)), Oc(m, K, N);
                    var o = ng(m),
                        u = 0;
                    if (me(o, 0, e.ty(), 1), o.clearRect(0, 0, K, N), x.clear(), X._roots.each(function(R) {
                            var O, b = e._9Q(R);
                            g && g.tab === R || (O = e.drawTab(o, R, 0, u, K, b, e._tabBackground)), x.add({
                                _75o: O,
                                tab: R,
                                startY: u,
                                endY: u + b,
                                height: b
                            }), u += b + q
                        }), e._23Q = v(0, u - q), g) {
                        var M = g.position;
                        e.drawTab(o, g.tab, 0, g.startY, K, g.height, e._moveBackground), yj(o, 0, M, K, 1, e._insertColor)
                    }
                    o.restore(), e.ty(e.ty())
                } else if (r || T) {
                    e._9o && (d.x = 0, Ho(e._8o.getView(), d)), Oc(m, b, N);
                    var o = ng(m),
                        u = 0;
                    if (me(o, 0, e.ty(), 1), o.clearRect(0, 0, b, N), x.clear(), X._roots.each(function(O) {
                            var P;
                            g && g.tab === O || (P = e.drawTab(o, O, 0, u, b, K, e._tabBackground)), x.add({
                                _75o: P,
                                tab: O,
                                startY: u,
                                endY: u + K,
                                height: K
                            }), u += K + q
                        }), e._23Q = v(0, u - q), g) {
                        var M = g.position;
                        e.drawTab(o, g.tab, 0, g.startY, b, g.height, e._moveBackground), yj(o, 0, M, b, 1, e._insertColor)
                    }
                    o.restore(), e.ty(e.ty())
                } else {
                    e._9o && (d.y = 0, Ho(e._8o.getView(), d)), Oc(m, Z, K);
                    var o = ng(m),
                        A = 0;
                    if (me(o, e.tx(), 0, 1), o.clearRect(0, 0, Z, K), x.clear(), X._roots.each(function(b) {
                            var D, n = e._9Q(b);
                            g && g.tab === b || (D = e.drawTab(o, b, A, 0, n, K, e._tabBackground)), x.add({
                                _75o: D,
                                tab: b,
                                startX: A,
                                endX: A + n,
                                width: n
                            }), A += n + q
                        }), e._64I = v(0, A - q), g) {
                        var M = g.position;
                        e.drawTab(o, g.tab, g.startX, 0, g.width, K, e._moveBackground), _p(o, e._insertColor, M, 0, K)
                    }
                    o.restore(), e.tx(e.tx())
                }
                for (var Y = [], B = J.children, j = 0; j < B.length; j++) {
                    var n = B[j],
                        G = n._tab_;
                    G && !X.contains(G) && Y.push(n)
                }
                Y.forEach(function(v) {
                    J.removeChild(v)
                })
            }
        });
        var Gd = function(h) {
            this.tv = h, this.addListeners()
        };
        Ni(Gd, s, {
            ms_listener: 1,
            getView: function() {
                return this.tv._91O
            },
            handle_mousewheel: function(K) {
                this.handleScroll(K, 10 * (K.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function(A) {
                this.handleScroll(A, 10 * -A.detail)
            },
            handleScroll: function(A, F) {
                ks(A);
                var M = this.tv,
                    R = M._tabPosition;
                !M._40o() || R !== Un && R !== Hn || M.tx(this.tv.tx() + F), !M._41o() || R !== fp && R !== th && R !== fp + "-vertical" && R !== th + "-vertical" || M.ty(this.tv.ty() + F)
            },
            _8Q: function(N) {
                var x, A, n = this.tv,
                    e = n._tabPosition,
                    i = n._7o;
                if (e === Un || e === Hn) {
                    var Z = n.lp(N).x;
                    for (x = 0; x < i.size(); x++)
                        if (A = i.get(x), A.startX <= Z && Z <= A.endX) return A
                } else if (e === fp || e === th || e === fp + "-vertical" || e === th + "-vertical") {
                    var M = n.lp(N).y;
                    for (x = 0; x < i.size(); x++)
                        if (A = i.get(x), A.startY <= M && M <= A.endY) return A
                }
                return r
            },
            isClickable: function(i) {
                var r = this.tv,
                    X = r._tabPosition,
                    F = this._73o = this._8Q(i);
                return !r._40o() || X !== Un && X !== Hn ? !r._41o() || X !== fp && X !== th && X !== fp + "-vertical" && X !== th + "-vertical" ? F && (!F.tab.isDisabled() || r.isMovable()) : !0 : !0
            },
            handle_mousemove: function(d) {
                var o = this;
                Gi ? o._74o = o._8Q(d) : o.getView().style.cursor = o.isClickable(d) ? yc : ""
            },
            handle_mousedown: function(I) {
                this.handle_mousemove(I), this.handle_touchstart(I)
            },
            handle_touchstart: function($) {
                var X = this,
                    J = X.tv,
                    K = J._tabPosition;
                ks($), X.isClickable($) && (K === Un || K === Hn ? (X.x = Lf($).x, X.lp = J.lp($), X.tx = J.tx()) : (X.y = Lf($).y, X.lp = J.lp($), X.ty = J.ty()), sh(X, $))
            },
            handleWindowMouseMove: function(R) {
                this.handleWindowTouchMove(R)
            },
            handleWindowTouchMove: function(R) {
                var b, H = this,
                    q = H.tv,
                    C = q._tabPosition,
                    W = H._73o;
                if (C === Un || C === Hn) {
                    if (b = Lf(R).x - H.x, !H._25o && !H.moving && E(b) > 2 && (q._40o() && !ji(R) ? H._25o = 1 : W && q.isMovable() && (H.moving = 1)), H._25o) q.tx(H.tx + b);
                    else if (H.moving) {
                        var J = H.lp.x + b,
                            o = q._tabGap / 2;
                        q._7o.each(function(C) {
                            var E = C.endX,
                                s = J - C.startX < E - J;
                            J >= C.startX && E >= J && q._7Q({
                                tab: W.tab,
                                startX: W.startX + b,
                                width: W.width,
                                front: s,
                                insertTab: C.tab,
                                position: s ? v(0, C.startX - o) : I(q._64I, E + o)
                            })
                        })
                    }
                } else if (b = Lf(R).y - H.y, !H._25o && !H.moving && E(b) > 2 && (q._41o() && !ji(R) ? H._25o = 1 : W && q.isMovable() && (H.moving = 1)), H._25o) q.ty(H.ty + b);
                else if (H.moving) {
                    var G = H.lp.y + b,
                        o = q._tabGap / 2;
                    q._7o.each(function(u) {
                        var J = u.endY,
                            t = G - u.startY < J - G;
                        G >= u.startY && J >= G && q._7Q({
                            tab: W.tab,
                            startY: W.startY + b,
                            height: W.height,
                            front: t,
                            insertTab: u.tab,
                            position: t ? v(0, u.startY - o) : I(q._23Q, J + o)
                        })
                    })
                }
            },
            handleWindowMouseUp: function(T) {
                this.handleWindowTouchEnd(T)
            },
            handleWindowTouchEnd: function() {
                var v = this,
                    o = v.tv,
                    y = o._tabPosition,
                    K = o.getTabModel(),
                    d = K._roots,
                    U = v._73o;
                if (v.moving) {
                    var t = o._23o;
                    if (t && t.insertTab !== t.tab) {
                        var q = t.tab,
                            Q = d.remove(q),
                            Z = d.indexOf(t.insertTab);
                        Z >= 0 && (t.front || Z++, Z <= d.size() && (d.add(q, Z), K._38I(q, Q, Z)))
                    }
                    o._7Q(r), delete v.moving
                } else if (!v._25o && U) {
                    q = U.tab;
                    var B = v._74o;
                    if (!B || B.tab === q)
                        if (!q.isDisabled() && db(U._75o, v.lp)) {
                            var L = function() {
                                var z = d.indexOf(q);
                                K.remove(q), o.onTabClosed(q, z)
                            };
                            o.onTabClosing(q, L) && L()
                        } else q.isDisabled() || o._8o === q || K.sm().ss(q)
                }
                v._25o = v._73o = v._74o = y === Un || y === Hn ? v.x = v.lp = v.tx = r : v.y = v.lp = v.ty = r
            }
        }), ef.PropertyView = function(f) {
            var z = this;
            z._view = xq(1, z), z._canvas = Tl(z._view), Hb(z._view, z._79O = gb()), z._rows = new pm, z._28o = new pm, z._26o = {}, z._26Q = {};
            var n = z._propertyModel = new Wg,
                R = z.ivm;
            n.mm(R, z), n.md(R, z), n.mh(R, z), z.dm(f ? f : new Wg), new wm(z)
        }, vh("PropertyView", s, {
            ms_ac: [mk, Tb, Bl, kb, $n, "categorizable", pg, Wl, Bf, kl, nr, ho, ld, td, "selectRowIndex", zd, "background", En, pp, Xp, Lk, Ih],
            ms_v: 1,
            ms_dm: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            _45o: 1,
            _47o: 1,
            ms_tip: 1,
            _29I: Kh,
            _59I: 0,
            _9I: 0,
            _selectRowIndex: -1,
            _editable: !0,
            _batchEditable: !0,
            _categorizable: !0,
            _indent: Bk,
            _background: S.propertyViewBackground,
            _expandIcon: S.propertyViewExpandIcon,
            _collapseIcon: S.propertyViewCollapseIcon,
            _scrollBarColor: zq,
            _scrollBarSize: fr,
            _autoHideScrollBar: Md,
            _selectBackground: S.propertyViewSelectBackground,
            _rowHeight: sr,
            _rowLineVisible: S.propertyViewRowLineVisible,
            _rowLineColor: S.propertyViewRowLineColor,
            _10I: .5,
            _columnLineVisible: S.propertyViewColumnLineVisible,
            _columnLineColor: S.propertyViewColumnLineColor,
            _labelColor: S.propertyViewLabelColor,
            _labelSelectColor: S.propertyViewLabelSelectColor,
            _labelFont: S.propertyViewLabelFont,
            getRows: function() {
                return this._rows
            },
            getColumnPosition: function() {
                return this._10I
            },
            setColumnPosition: function(g) {
                0 > g && (g = 0), g > 1 && (g = 1);
                var S = this,
                    m = S._10I;
                S._10I = g, S.fp("columnPosition", m, g)
            },
            getPropertyName: function(g) {
                return g.toLabel()
            },
            getLabelFont: function() {
                return this._labelFont
            },
            getLabelColor: function(F, Z, Q) {
                return Q === this._selectRowIndex ? this._labelSelectColor : this._labelColor
            },
            getPropertyFont: function() {
                return this._labelFont
            },
            getPropertyColor: function(m, r) {
                return r === this._selectRowIndex ? this._labelSelectColor : m.getColor() || this._labelColor
            },
            getCategoryFont: function() {
                return this._labelFont
            },
            getCategoryColor: function() {
                return this._labelColor
            },
            adjustTranslateX: function() {
                return 0
            },
            adjustTranslateY: function(d) {
                var F = this.getHeight() - this._59I;
                return F > d && (d = F), d > 0 ? 0 : T(d)
            },
            isExpanded: function(x) {
                if (!x) return !0;
                var y = this._26o[x];
                return y ? y.isExpanded : !(this._26Q[x] === !1)
            },
            toggle: function(s) {
                var C = this;
                C.isExpanded(s) ? C.collapse(s) : C.expand(s)
            },
            expandAll: function() {
                this.validate();
                for (var S in this._26o) this.expand(S)
            },
            expand: function(E) {
                if (E && E !== dq) {
                    var R = this,
                        f = R._26o[E];
                    f && !f.isExpanded && (f.isExpanded = !0, R.onExpanded(E), R.ivm())
                }
            },
            onExpanded: function() {},
            collapseAll: function() {
                this.validate();
                for (var f in this._26o) this.collapse(f)
            },
            collapse: function(O) {
                if (O && O !== dq) {
                    var I = this,
                        C = I._26o[O];
                    C && C.isExpanded && (C.isExpanded = !1, I.onCollapsed(O), I.ivm())
                }
            },
            onCollapsed: function() {},
            getCategoryName: function(U) {
                if (!this.isCategorizable()) return dq;
                var H = U.getCategoryName();
                return H ? H : dq
            },
            getPropertyModel: function() {
                return this._propertyModel
            },
            setDataModel: function(c) {
                var S = this,
                    e = S._dataModel;
                e !== c && (e && (e.umd(S.handlePropertyChange, S), S._selectionModel || e.sm().ums(S.ivm, S)), S._dataModel = c, c.md(S.handlePropertyChange, S), S._selectionModel ? S._selectionModel._21I(c) : c.sm().ms(S.ivm, S), S.fp(Tr, e, c))
            },
            isVisible: function(c) {
                return this._visibleFunc ? this._visibleFunc(c) : !0
            },
            onPropertyChanged: function(d) {
                var F = this,
                    Y = d.property;
                oj[Y] ? F.ivm() : F.iv(), Y === Kk && F._43o()
            },
            getCurrentData: function() {
                return this._27o
            },
            updateCurrentData: function() {
                this._27o = this.sm().ld()
            },
            getRawProperties: function() {
                return this._27o ? this._propertyModel._roots : Lc
            },
            handlePropertyChange: function(b) {
                this._27o === b.data && this.iv()
            },
            ivm: function() {
                this.invalidateModel()
            },
            invalidateModel: function() {
                var E = this;
                E._96I || (E.setSelectRowIndex(-1), E._96I = 1, E.iv())
            },
            redraw: function() {
                this.iv()
            },
            validateModel: function() {
                var o = this,
                    V = o._rows,
                    H = o._28o,
                    r = {},
                    f = new pm,
                    K = o._27o;
                o.updateCurrentData(), K !== o._27o && o.endEditing(), V.clear(), H.clear(), o.getRawProperties().each(function(p) {
                    if (o.isVisible(p)) {
                        f.add(p);
                        var h = o.getCategoryName(p);
                        r[h] || (H.add(h, h === dq ? 0 : y), r[h] = {
                            isExpanded: o.isExpanded(h),
                            properties: new pm
                        })
                    }
                }), o._sortFunc && f.sort(o._sortFunc);
                for (var E in o._26o) o._26Q[E] = o.isExpanded(E);
                o._26o = r, H.each(function(z) {
                    z !== dq && V.add(z);
                    var Q = r[z];
                    Q.isExpanded && f.each(function(H) {
                        o.getCategoryName(H) === z && (Q.properties.add(H), V.add({
                            property: H,
                            data: o._27o
                        }))
                    }, o)
                })
            },
            validateImpl: function() {
                var A = this;
                A._76o(), A._96I && (A.validateModel(), delete A._96I);
                var $ = A._canvas,
                    J = A.getWidth(),
                    w = A.getHeight(),
                    j = -A.ty(),
                    L = A._rowHeight,
                    y = A._indent,
                    O = J - y,
                    K = A._rows,
                    W = K.size(),
                    V = A._9I = y + O * A._10I,
                    v = A._59I = W * L;
                Oc($, J, w), A._29I = {
                    x: 0,
                    y: j,
                    width: J,
                    height: w
                }, A._31I = R(j / L), A._14I = P((j + w) / L), A._31I < 0 && (A._31I = 0), A._14I > W && (A._14I = W);
                var m, C = ng($),
                    d = A._background;
                me(C, 0, -j, 1), C.beginPath(), C.rect(0, j, J, w), C.clip(), C.clearRect(0, j, J, w), A._93db(C), d && yj(C, 0, 0, y, v, d);
                for (var E = A._31I; E < A._14I; E++) {
                    var T = K.get(E),
                        j = L * E;
                    if (Rr(T)) d && yj(C, y, j, O, L, d), m = Eq(A.isExpanded(T) ? A._expandIcon : A._collapseIcon), m && Qh(C, m, qg, 0, j, y, L), C.save(), C.beginPath(), C.rect(y, j, O, L), C.clip(), A.drawCategoryName(C, T, E, y, j, O, L), C.restore();
                    else {
                        var N = T.property,
                            I = T.data,
                            m = Eq(N.getIcon()),
                            x = A._selectRowIndex === E ? A.getSelectBackground() : r;
                        if (m && Qh(C, m, qg, 0, j, y, L), x && yj(C, y, j, O, L, x), C.save(), C.beginPath(), C.rect(y, j, V - y, L), C.clip(), A.drawPropertyName(C, N, E, y, j, V - y, L), C.restore(), !A.isEditing(I, N)) {
                            var X = V + 1,
                                t = J - V - 1;
                            C.save(), C.beginPath(), C.rect(X, j, t, L), C.clip(), A._87o(A.drawPropertyValue(C, N, A.getValue(I, N), E, X, j, t, L, I), E, X, j, t, L), C.restore()
                        }
                    }
                    A._rowLineVisible && yj(C, y, j + L - 1, O, 1, A._rowLineColor)
                }
                A._columnLineVisible && (yj(C, V, 0, 1, v, A._columnLineColor), yj(C, J - 1, 0, 1, v)), A._92db(C), A._93I(), C.restore(), A.ty(A.ty())
            },
            drawCategoryName: function($, Z, n, V, L, D, _) {
                so($, Z, this.getCategoryFont(Z), this.getCategoryColor(Z), V, L, D, _)
            },
            drawPropertyName: function(n, Q, Y, d, J, C, x) {
                return Q.drawPropertyName ? (Q.drawPropertyName(n, Q, Y, d, J, C, x, this), void 0) : (so(n, this.getPropertyName(Q), this.getPropertyFont(Q, Y), this.getPropertyColor(Q, Y), d, J, C, x), void 0)
            },
            drawPropertyValue: function(N, L, u, G, K, J, $, U, e) {
                return L.drawPropertyValue ? L.drawPropertyValue(N, L, u, G, K, J, $, U, e, this) : (Ki(N, u, L, this.getLabelFont(L, u, G), this.getLabelColor(L, u, G), K, J, $, U, e, this), void 0)
            },
            isPropertyEditable: function(T) {
                return T.isEditable() && this.isEditable()
            },
            setProperties: function(l) {
                this._propertyModel.clear(), this.addProperties(l)
            },
            addProperties: function(S) {
                if (S) {
                    var V = this._propertyModel;
                    S.forEach(function(w) {
                        if (!(w instanceof Bd)) {
                            var S = Xc(w.className);
                            w = ae(S ? S : Bd, w)
                        }
                        V.add(w)
                    })
                }
            },
            getRowIndexAt: function(T) {
                var C = this,
                    k = R(C.lp(T).y / C._rowHeight);
                return k >= 0 && k < C._rows.size() ? k : -1
            },
            getPropertyAt: function(t) {
                var V = this,
                    i = V.getRowIndexAt(t);
                return i >= 0 ? V._rows.get(i).property : r
            },
            getToolTip: function(y) {
                var d = this,
                    j = d.getPropertyAt(y),
                    e = d._27o;
                return j && e ? j.getToolTip(e, d._9I < d.lp(y).x, d) : r
            }
        });
        var wm = function(U) {
            this.pv = U, this.addListeners()
        };
        Ni(wm, s, {
            ms_listener: 1,
            getView: function() {
                return this.pv._view
            },
            setCursor: function(Q) {
                this.getView().style.cursor = Q
            },
            clear: function() {
                var K = this;
                K._62O = K.cp = K.ty = K.p = r, K.setCursor(x)
            },
            handle_mousedown: function(I) {
                this.handle_touchstart(I)
            },
            handle_touchstart: function(C) {
                var I = this,
                    y = I.pv;
                ks(C), y.setFocus(C) && (Yq(C) ? (I.cp = Lf(C), I.ty = y.ty(), I.p = y.getColumnPosition(), I.handle_touchmove(C)) : y.setSelectRowIndex(y.getRowIndexAt(C)))
            },
            handleWindowMouseUp: function() {
                this.clear()
            },
            handleWindowTouchEnd: function() {
                this.clear()
            },
            handle_mouseup: function(W) {
                this.handle_touchend(W)
            },
            handle_touchend: function(H) {
                var T = this;
                if (T.cp && !T._62O) {
                    var s = T.pv,
                        a = s.lp(H),
                        x = a.x,
                        q = a.y,
                        F = s._indent,
                        G = s.getRowIndexAt(H),
                        E = s._9I;
                    if (G >= 0) {
                        var C = s._rowHeight,
                            h = C * G,
                            u = s._rows.get(G),
                            c = u.property;
                        if (Rr(u)) Eq(s.isExpanded(u) ? s._expandIcon : s._collapseIcon) && x >= 0 && F >= x && q >= h && h + C >= q ? s.toggle(u) : gc(H) && s.toggle(u);
                        else if (x > E && s.isPropertyEditable(c, H)) {
                            var w = {
                                    x: E + 1,
                                    y: h,
                                    width: s.getWidth() - E - 1,
                                    height: C
                                },
                                K = {
                                    x: w.x + s.tx(),
                                    y: w.y + s.ty(),
                                    width: w.width,
                                    height: w.height
                                },
                                v = 0,
                                l = s._29I;
                            w.y < l.y ? v = w.y - l.y : w.y + C > l.y + l.height && (v = w.y + C - l.y - l.height), v && (s.ty(s.ty() - v), K.y -= v), s.beginEditing({
                                data: u.data,
                                property: c,
                                value: s.getValue(u.data, c),
                                event: H,
                                rect: w,
                                editorRect: K,
                                view: s
                            })
                        }
                    }
                    s.setSelectRowIndex(G)
                }
                T.clear()
            },
            handleWindowMouseMove: function(g) {
                this.handleWindowTouchMove(g)
            },
            handleWindowTouchMove: function(D) {
                var y = this,
                    $ = y.pv,
                    M = y.ty,
                    N = y.cp,
                    E = Lf(D),
                    B = y._62O;
                if ("p" === B) $.setTranslateY(M + E.y - N.y);
                else if ("c" === B) {
                    var P = $.getWidth() - $._indent;
                    if (P > 16) {
                        var v = y.p - (N.x - E.x) / P,
                            t = 16 / P;
                        t > v && (v = t), v > 1 - t && (v = 1 - t), $.setColumnPosition(v)
                    }
                } else "s" === B && $.setTranslateY(M + (N.y - E.y) * $._59I / $._29I.height)
            },
            handle_mousemove: function(p) {
                this.handle_touchmove(p)
            },
            handle_touchmove: function(w) {
                if (!Gi && Yq(w)) {
                    var W = this,
                        k = W.pv,
                        F = E(k.lp(w).x - k._9I) <= (h ? 8 : 3);
                    W.cp ? W._62O || (F ? (W._62O = "c", sh(W)) : E(Lf(w).y - W.cp.y) >= 2 && (W._62O = W.isV(w) ? "s" : "p", sh(W))) : (F ? W.setCursor(Tn) : W.setCursor(x), W.isV(w) && k._43o())
                }
            },
            isV: function(b) {
                var f = this.pv,
                    n = f._29I;
                return f._41o() && n.x + n.width - f.lp(b).x < wh
            },
            handle_mousewheel: function(t) {
                this.handleScroll(t, t.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function(J) {
                2 === J.axis && this.handleScroll(J, -J.detail)
            },
            handleScroll: function(U, A) {
                var z = this.pv;
                ks(U), z.endEditing(), z.translate(0, A * z.getRowHeight())
            },
            handle_keydown: function(c) {
                var y = this.pv,
                    v = y._rows.size(),
                    r = y._selectRowIndex + (pk(c) ? -1 : 1);
                (pk(c) || ub(c)) && (0 > r && (r = 0), r >= v && (r = v - 1), y.setSelectRowIndex(r))
            }
        }), ef.ListView = function(v) {
            this._5o(v), new Fl(this)
        }, vh("ListView", s, {
            ms_ac: [mk, Tb, Bl, En, pg, pp, Xp, Wl, Bf, ho, ld, td, Yp, zd],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            _14Q: 1,
            ms_dm: 1,
            _45o: 1,
            _checkMode: !1,
            _indent: Bk,
            _rowHeight: sr,
            _rowLineVisible: S.listViewRowLineVisible,
            _rowLineColor: S.listViewRowLineColor,
            _scrollBarColor: zq,
            _scrollBarSize: fr,
            _autoMakeVisible: ug,
            _autoHideScrollBar: Md,
            _selectBackground: S.listViewSelectBackground,
            _labelColor: S.listViewLabelColor,
            _labelSelectColor: S.listViewLabelSelectColor,
            _labelFont: S.listViewLabelFont,
            isCheckMode: function() {
                return this._checkMode
            },
            setCheckMode: function(m) {
                var Z = this,
                    g = Z._checkMode;
                Z._checkMode = m, Z.fp(Sl, g, m)
            },
            drawRow: function(D, C, x, V, b, f, W) {
                var B = this,
                    Z = 0,
                    Y = B._indent,
                    d = B.getIconWidth(C);
                B.drawRowBackground(D, C, x, V, b, f, W), B._checkMode && (Jh(D, B.getCheckIcon(C), Z + Y / 2, b + W / 2, C, B), Z += Y), B.drawIcon(D, C, Z, b, d, W), B.drawLabel(D, C, Z + d, b, W)
            }
        });
        var Fl = function(s) {
            this.list = s, this._lastSelectDataTime = To(), this.addListeners()
        };
        Ni(Fl, s, {
            ms_listener: 1,
            getView: function() {
                return this.list._view
            },
            clear: function(O) {
                var f = this,
                    U = f.list;
                O && "d" === f._62O && !f.dragCancel && U.handleDragAndDrop(O, "end"), U.draggingData && (U.draggingData = null, U.redraw()), f.dragCancel = f._62O = f._isV = f._isH = f.cp = f.tx = f.ty = r
            },
            handle_mousedown: function(L) {
                this.handle_touchstart(L)
            },
            handle_touchstart: function(d) {
                var M = this,
                    i = M.list;
                if (ks(d), i.setFocus(d)) {
                    var K = i.getDataAt(d);
                    M.cp = Lf(d), M.tx = i.tx(), M.ty = i.ty(), Yq(d) ? K && i.handleDragAndDrop && !M.isV(d) && !M.isH(d) && (i.draggingData = K, i.redraw(), i.handleDragAndDrop(d, "prepare")) : (K && M._33o(d, K), M.clear(d))
                }
            },
            handleWindowMouseUp: function(L) {
                this.clear(L)
            },
            handleWindowTouchEnd: function(W) {
                this.clear(W)
            },
            handle_mouseup: function(R) {
                this.handle_touchend(R)
            },
            handle_touchend: function(y) {
                var t = this,
                    P = t.list;
                if (!t._isV && !t._isH && t.cp && !t._62O) {
                    var B = P.getDataAt(y);
                    B ? (P.isCheckMode() ? t._34o(y, B) : t._33o(y, B), gc(y) ? P.onDataDoubleClicked(B, y) : P.onDataClicked(B, y)) : P.handleBackgroundClick(y)
                }
                t.clear(y)
            },
            handleWindowMouseMove: function(N) {
                this.handleWindowTouchMove(N)
            },
            handleWindowTouchMove: function(g) {
                var F = this,
                    m = F.list,
                    G = F._62O,
                    V = F.tx,
                    L = F.ty,
                    h = F.cp,
                    D = Lf(g),
                    p = m._29I;
                "p" === G ? m.setTranslate(V + D.x - h.x, L + D.y - h.y) : "v" === G ? m.ty(L + (h.y - D.y) * m._59I / p.height) : "h" === G ? m.tx(V + (h.x - D.x) * m._91I / p.width) : "d" === G && (F.dragCancel || m.handleDragAndDrop(g, "between"))
            },
            handle_mousemove: function(F) {
                this.handle_touchmove(F)
            },
            handle_touchmove: function(t) {
                if (!Gi && Yq(t)) {
                    var Y = this,
                        D = Y.list;
                    if (Y._isV = Y.isV(t), Y._isH = Y.isH(t), Y.cp) {
                        if (!Y._62O) {
                            if (ls(Lf(t), Y.cp) < 2) return;
                            Y._isV ? Y._62O = "v" : Y._isH ? Y._62O = "h" : D.draggingData && !this.dragCancel ? (Y._62O = "d", D.handleDragAndDrop(t, "begin")) : Y._62O = "p", Y._62O && "d" !== Y._62O && D.draggingData && (D.draggingData = null, D.redraw()), sh(Y)
                        }
                    } else Y._isV && D._43o(), Y._isH && D._42o()
                }
            },
            isV: function(s) {
                var H = this.list,
                    E = H._29I;
                return H._41o() && E.x + E.width - H.lp(s).x < wh
            },
            isH: function(J) {
                var B = this.list,
                    y = B._29I;
                return B._40o() && y.y + y.height - B.lp(J).y < wh
            },
            handle_mousewheel: function(d) {
                this.handleScroll(d, d.wheelDelta / 40, d.wheelDelta !== d.wheelDeltaX)
            },
            handle_DOMMouseScroll: function(p) {
                this.handleScroll(p, -p.detail, 1)
            },
            handleScroll: function(s, w, X) {
                var F = this.list;
                ks(s), F.endEditing && F.endEditing(), X && F._41o() ? F.translate(0, w * F.getRowHeight()) : F._40o() && F.translate(10 * w, 0)
            },
            handle_keydown: function(X) {
                if (!S.isInput(X.target)) {
                    var P, o = this.list,
                        i = o.sm(),
                        l = o._rows,
                        n = l.size();
                    if (nq(X)) o.selectAll();
                    else if (Rd(X)) o.handleDelete && o.handleDelete(X);
                    else if (Go(X)) "d" !== this._62O || this.dragCancel || (o.handleDragAndDrop(X, "cancel"), this.dragCancel = !0);
                    else if (Pc(X)) o.isCheckMode() && (P = o.getFocusData(), P && o.checkData(P));
                    else if (pk(X) || ub(X)) {
                        var u = o.isCheckMode();
                        if (P = u ? o.getFocusData() : i.ld()) {
                            var h = o.getRowIndex(P);
                            h >= 0 && (pk(X) ? 0 !== h && (P = l.get(h - 1), u ? o.setFocusData(P) : i.ss(P)) : h !== n - 1 && (P = l.get(h + 1), u ? o.setFocusData(P) : i.ss(P)))
                        } else n > 0 && (P = l.get(0), u ? o.setFocusData(P) : i.ss(P))
                    }
                }
            },
            _34o: function(o, O) {
                var D = this.list,
                    z = D.lp(o).x;
                return z >= 0 && z <= D._indent ? (D.checkData(O), void 0) : (D.setFocusData(O), void 0)
            },
            _33o: function(B, t) {
                var b = this.list,
                    g = b.sm(),
                    n = g.ld();
                if (ji(B)) b.isSelected(t) ? g.rs(t) : g.as(t);
                else if (kn(B))
                    if (n)
                        for (var m = b.getRowIndex(n), D = b.getRowIndex(t); m !== D;) m += D > m ? 1 : -1, g.as(b._rows.get(m));
                    else g.ss(t);
                else if (Yq(B)) {
                    var a = To();
                    if (g.contains(t)) {
                        var v = a - this._lastSelectDataTime;
                        b.handleDataDoubleSelect && v > 500 && 1500 > v && b.handleDataDoubleSelect(B, t)
                    }
                    g.ss(t), this._lastSelectDataTime = a
                } else g.contains(t) || g.ss(t)
            }
        }), ef.TreeView = function(e) {
            var E = this;
            E._35o(), E._5o(e), new Yd(E)
        }, vh("TreeView", s, {
            ms_ac: [mk, Tb, Bl, "rootVisible", Sl, "rootData", Wl, Bf, ho, ld, td, pg, En, pp, Xp, kl, nr, Yp, zd, "loader", "doubleClickToToggle"],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _checkMode: r,
            _indent: Bk,
            _rowHeight: sr,
            _rowLineVisible: S.treeViewRowLineVisible,
            _rowLineColor: S.treeViewRowLineColor,
            _scrollBarColor: zq,
            _scrollBarSize: fr,
            _autoHideScrollBar: Md,
            _expandIcon: S.treeViewExpandIcon,
            _collapseIcon: S.treeViewCollapseIcon,
            _autoMakeVisible: ug,
            _selectBackground: S.treeViewSelectBackground,
            _labelColor: S.treeViewLabelColor,
            _labelSelectColor: S.treeViewLabelSelectColor,
            _labelFont: S.treeViewLabelFont,
            _doubleClickToToggle: S.treeViewDoubleClickToToggle,
            drawRow: function(i, r, s, b, J, Y, h) {
                var y = this;
                y.drawRowBackground(i, r, s, b, J, Y, h), y._97I(i, r, s, 0, J, Y, h)
            },
            isOnToggleIcon: function(V) {
                var E = this.getDataAt(V);
                if (E) {
                    var j = this.getIndent(),
                        f = this.lp(V).x;
                    if (Eq(this.getToggleIcon(E))) {
                        var Q = j * this.getLevel(E);
                        if (f >= Q && Q + j >= f) return !0
                    }
                }
                return !1
            }
        });
        var Yd = function(a) {
            dg(Yd, this, [a])
        };
        Ni(Yd, Fl, {
            toggle: function(P, Q, Y, J) {
                var K = this.list,
                    E = K.lp(P).x;
                if (Eq(K.getToggleIcon(Q))) {
                    var o = Y * J;
                    if (E >= o && o + Y >= E) return K.toggle(Q), !0
                }
                return K.isDoubleClickToToggle() && gc(P) ? (K.toggle(Q), !0) : !1
            },
            _34o: function(K, A) {
                var Y = this.list,
                    T = Y.lp(K).x,
                    k = Y._levelMap[A._id],
                    a = Y._indent,
                    V = a * (k + 1);
                return T >= V && V + a >= T ? (Y.checkData(A), void 0) : (this.toggle(K, A, a, k) || Y.setFocusData(A), void 0)
            },
            _33o: function(B, w) {
                var E = this,
                    k = E.list;
                E.toggle(B, w, k._indent, k.getLevel(w)) || Yd.superClass._33o.call(E, B, w)
            },
            handle_keydown: function(C) {
                if (es(C) || rb(C)) {
                    var z = this.list,
                        f = z._rows,
                        F = z.isCheckMode(),
                        x = z.sm(),
                        p = F ? z.getFocusData() : x.ld();
                    p ? p.hasChildren() && (es(C) ? z.collapse(p) : z.expand(p)) : f.size() > 0 && (p = f.get(0), F ? z.setFocusData(p) : x.ss(p))
                } else Yd.superClass.handle_keydown.call(this, C)
            }
        });
        var si = ef.TableView = function(W) {
            this._98I(), this._5o(W), new Mo(this)
        };
        vh("TableView", s, {
            ms_ac: [mk, Tb, Bl, "sortMode", kb, $n, En, pp, Xp, Lk, Ih, "sortColumn", Wl, Bf, ho, ld, td, Yp, zd],
            ms_v: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: qj,
            _editable: !0,
            _batchEditable: !1,
            _rowHeight: sr,
            _rowLineVisible: S.tableViewRowLineVisible,
            _rowLineColor: S.tableViewRowLineColor,
            _columnLineVisible: S.tableViewColumnLineVisible,
            _columnLineColor: S.tableViewColumnLineColor,
            _scrollBarColor: zq,
            _scrollBarSize: fr,
            _autoHideScrollBar: Md,
            _autoMakeVisible: ug,
            _selectBackground: S.tableViewSelectBackground,
            _labelColor: S.tableViewLabelColor,
            _labelSelectColor: S.tableViewLabelSelectColor,
            _labelFont: S.tableViewLabelFont,
            getCheckColumn: function() {
                var Z = this;
                if (!Z._31o) {
                    var n = Z._31o = new tp;
                    n.setEditable(!0), n.setWidth(40), n.getValue = Z.getCheckColumValue, n.drawCell = Z.drawCheckColumnCell
                }
                return Z._31o
            },
            isCheckMode: function() {
                return this._39o.contains(this._31o)
            },
            setCheckMode: function(C) {
                var d = this,
                    k = d._39o,
                    H = d.getCheckColumn();
                C !== d.isCheckMode() && (C ? k.add(H, 0) : k.remove(H), d.fp(Sl, !C, C))
            },
            getCheckColumValue: function(c, r, N) {
                return N.isSelected(c)
            },
            drawCheckColumnCell: function(H, e, Y, Z, E, s, $, _, k) {
                Jh(H, k.getCheckIcon(e), E + $ / 2, s + _ / 2, e, k)
            }
        });
        var Mo = function(I) {
            dg(Mo, this, [I])
        };
        Ni(Mo, Fl, {
            _34o: function(I, s) {
                var D = this.list,
                    k = D._31o;
                if (D.isCellEditable(s, k, I)) {
                    var u = D._3Q(k),
                        G = D.lp(I).x;
                    if (u && G >= u.startX && G < u.startX + k.getWidth()) return D.checkData(s), void 0
                }
                D.setFocusData(s), D._37O(s, I)
            },
            _33o: function(S, u) {
                Mo.superClass._33o.apply(this, arguments), this.list._37O(u, S)
            }
        });
        var sp = ef.TreeTableView = function(E) {
                var G = this,
                    u = G._4o = new tp;
                G._35o(), G._98I(), G._5o(E), u.setDisplayName("Name"), u.setEditable(!0), u.setWidth(180), u.drawCell = zl, u.getValue = Sp, G._39o.add(u), new Sn(G)
            },
            zl = function(N, Q, $, b, G, a, r, Y, c) {
                c._97I(N, Q, $, G, a, r, Y)
            },
            Sp = function(Q, e, f) {
                return f.getLabel(Q)
            };
        vh("TreeTableView", s, {
            ms_ac: [mk, Tb, Bl, "sortMode", kb, $n, pg, Sl, "rootData", "rootVisible", Wl, Bf, "sortColumn", kl, nr, ho, ld, td, Yp, Xp, En, pp, Lk, Ih, zd, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: qj,
            _checkMode: r,
            _editable: !0,
            _batchEditable: !1,
            _indent: Bk,
            _rowHeight: sr,
            _rowLineVisible: S.treeTableViewRowLineVisible,
            _rowLineColor: S.treeTableViewRowLineColor,
            _columnLineVisible: S.treeTableViewColumnLineVisible,
            _columnLineColor: S.treeTableViewColumnLineColor,
            _expandIcon: S.treeTableViewExpandIcon,
            _collapseIcon: S.treeTableViewCollapseIcon,
            _scrollBarColor: zq,
            _scrollBarSize: fr,
            _autoHideScrollBar: Md,
            _autoMakeVisible: ug,
            _selectBackground: S.treeTableViewSelectBackground,
            _labelColor: S.treeTableViewLabelColor,
            _labelSelectColor: S.treeTableViewLabelSelectColor,
            _labelFont: S.treeTableViewLabelFont,
            getTreeColumn: function() {
                return this._4o
            }
        });
        var Sn = function(y) {
            dg(Sn, this, [y])
        };
        Ni(Sn, Fl, {
            _34o: function(z, o) {
                var $ = this.list,
                    r = $._4o,
                    t = $._3Q(r),
                    q = $.lp(z).x;
                if (t) {
                    var P = $._indent,
                        A = t.startX + P * $.getLevel(o);
                    if (Eq($.getToggleIcon(o)) && q >= A && A + P >= q) return $.toggle(o), void 0;
                    if ($.isCellEditable(o, r) && (A += P, q >= A && A + P >= q)) return $.checkData(o), void 0
                }
                $.setFocusData(o), $._37O(o, z)
            },
            _33o: function(j, $) {
                var L = this.list,
                    _ = L.lp(j).x;
                if (Eq(L.getToggleIcon($))) {
                    var B = L._3Q(L._4o);
                    if (B) {
                        var d = L._indent,
                            R = B.startX + d * L.getLevel($);
                        if (_ >= R && R + d >= _) return L.toggle($), void 0
                    }
                }
                Sn.superClass._33o.apply(this, arguments), L._37O($, j)
            }
        });
        var ll = ef.TableHeader = function(W) {
            var I = this,
                w = I._view = xq(1, I),
                Y = I._39o = W.getColumnModel(),
                A = I.iv;
            I.tv = I._tableView = W, I._60I = new pm, I._canvas = Tl(w), w.style.background = S.tableHeaderBackground || "", w.style.height = qc + Yg, Y.mm(A, I), Y.md(A, I), Y.mh(A, I), W.mp(function(N) {
                Mp[N.property] && I.iv()
            }, I), new Qi(I), I.iv()
        };
        vh("TableHeader", s, {
            ms_v: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", mk, Bl, pg, "moveBackground", "insertColor", Lk, Ih, "resizable", "movable"],
            _checkIcon: dr,
            _movable: !0,
            _resizable: !0,
            _labelColor: S.tableHeaderLabelColor,
            _labelFont: S.tableHeaderLabelFont,
            _columnLineColor: S.tableHeaderColumnLineColor,
            _columnLineVisible: S.tableHeaderColumnLineVisible,
            _sortDescIcon: S.tableHeaderSortDescIcon,
            _sortAscIcon: S.tableHeaderSortAscIcon,
            _moveBackground: S.tableHeaderMoveBackground,
            _insertColor: S.tableHeaderInsertColor,
            _indent: Bk,
            getCheckIcon: function() {
                return this._checkIcon
            },
            getTableView: function() {
                return this.tv
            },
            getLabel: function(W) {
                return W.toLabel()
            },
            getLabelFont: function() {
                return this._labelFont
            },
            getLabelColor: function(v) {
                return v.getColor() || this._labelColor
            },
            getLabelAlign: function(e) {
                return e._align
            },
            onPropertyChanged: function() {
                this.iv()
            },
            _5Q: function(u) {
                this._61I = u, this.iv()
            },
            getLogicalPoint: function(B) {
                return Jd(B, this._canvas, this.tv.tx())
            },
            validateImpl: function() {
                var o = this,
                    p = o._canvas,
                    T = o.getWidth(),
                    x = o.getHeight(),
                    U = o.tv,
                    Y = o._60I,
                    g = o._61I,
                    X = -U.tx(),
                    v = 0;
                (T !== p.clientWidth || x !== p.clientHeight) && Oc(p, T, x), Y.clear(), o._39o._roots.each(function(c) {
                    if (c.isVisible()) {
                        var k = v + c.getWidth();
                        X + T >= v && k >= X && Y.add({
                            column: c,
                            startX: v
                        }), v = k
                    }
                });
                var f = ng(p);
                if (me(f, -X, 0, 1), f.beginPath(), f.rect(X, 0, T, x), f.clip(), f.clearRect(X, 0, T, x), Y.each(function(b) {
                        var P = b.column,
                            m = b.startX,
                            i = P.getWidth();
                        i > 0 && (f.save(), f.beginPath(), f.rect(m, 0, i, x), f.clip(), g && g.column === P || o.drawColumn(f, P, m, 0, i, x), o._columnLineVisible && yj(f, m + i - 1, 0, 1, x, o._columnLineColor), f.restore())
                    }), g) {
                    var b = g.column,
                        v = g.startX,
                        K = g.position,
                        S = b.getWidth();
                    f.save(), f.beginPath(), f.rect(v, 0, S, x), f.clip(), f.fillStyle = o._moveBackground, f.fill(), o.drawColumn(f, b, v, 0, S, x), f.restore(), _p(f, o._insertColor, K, 0, x)
                }
                f.restore()
            },
            _6Q: function(_) {
                var T = this.tv;
                return T._31o === _ && T.sm().getSelectionMode() === Im
            },
            drawColumn: function(x, v, r, I, R, E) {
                var n = this,
                    e = n.tv,
                    H = Eq(v.getIcon()),
                    z = n.getLabelAlign(v);
                if (n._6Q(v)) {
                    var V = Eq(n._checkIcon);
                    Jh(x, V, r + R / 2, I + E / 2, v, n)
                } else {
                    var y = n.getLabel(v),
                        q = n.getLabelFont(v),
                        j = n.getLabelColor(v),
                        T = ir(q, y).width,
                        W = H ? n._indent : 0;
                    z === fp ? (H && Qh(x, H, qg, r, I, W, E), so(x, y, q, j, r + W, I, R, E, fp)) : z === th ? (H && Qh(x, H, qg, r + R - T - W, I, W, E), so(x, y, q, j, r, I, R, E, th)) : (H && Qh(x, H, qg, r + (R - T - W) / 2, I, W, E), so(x, y, q, j, r + (R - T + W) / 2, I, 0, E, fp))
                }
                if (v.isSortable() && e.getSortColumn() === v && (H = Eq(v.getSortOrder() === Xd ? n._sortAscIcon : n._sortDescIcon))) {
                    var a = co(H, v) / 2 + 2;
                    Jh(x, H, z === th ? r + a : r + R - a, I + E / 2, v, e)
                }
            }
        });
        var Qi = function(H) {
            var p = this;
            p.th = H, p.tv = H._tableView, p.addListeners()
        };
        Ni(Qi, s, {
            ms_listener: 1,
            getView: function() {
                return this.th.getView()
            },
            setCursor: function(x) {
                this.getView().style.cursor = x
            },
            handle_mousemove: function(F) {
                if (!Gi) {
                    var U = this;
                    delete U._29o, U.setCursor(x);
                    for (var v = U.th, H = v._60I, t = v.lp(F).x, i = H.size() - 1; i >= 0; i--) {
                        var j = H.get(i),
                            O = j.column,
                            B = j.startX + O.getWidth();
                        if (v.isResizable() && E(B - t) <= (h ? 10 : 3)) return U._29o = j, U.setCursor(Tn), void 0;
                        t > j.startX && B > t && (U._29o = j), (O.isClickable() || O.isSortable() || v.isMovable() || U.tv.getCheckColumn && O === U.tv.getCheckColumn()) && t > j.startX && B > t && U.setCursor(yc)
                    }
                }
            },
            handle_mousedown: function(S) {
                this.handle_touchstart(S)
            },
            handle_touchstart: function(B) {
                var t = this;
                ks(B), t.tv.endEditing(), t.handle_mousemove(B), t._29o && (t.x = Lf(B).x, t.lx = t.th.lp(B).x, t.w = t._29o.column.getWidth(), sh(t, B))
            },
            handleWindowMouseMove: function(d) {
                this.handleWindowTouchMove(d)
            },
            handleWindowTouchMove: function(C) {
                var P = this,
                    c = P.th,
                    g = P.getView().style.cursor,
                    N = P._29o,
                    Y = Lf(C).x - P.x;
                if (P.resizing || P.moving || (g === Tn ? P.resizing = 1 : c.isMovable() && g === yc && E(Y) > 2 && (P.moving = 1)), P.resizing) N.column.setWidth(P.w + Y);
                else if (P.moving) {
                    var k = P.lx + Y;
                    c._60I.each(function(E) {
                        var F = E.startX,
                            K = F + E.column.getWidth();
                        if (k >= F && K >= k) {
                            var v = {
                                column: N.column,
                                startX: N.startX + Y,
                                front: K - k > k - F,
                                insertColumn: E.column
                            };
                            v.position = v.front ? F : K, c._5Q(v)
                        }
                    })
                }
            },
            _16Q: function(e, F) {
                var o = this,
                    A = o.tv,
                    j = o.th,
                    n = j._checkIcon;
                if (j._6Q(e)) {
                    var V = Eq(n),
                        r = o.lx,
                        W = e.getWidth(),
                        s = co(V, e);
                    if (r >= F + W / 2 - s && F + W / 2 + s >= r) {
                        j.setCheckIcon(n === xf ? dr : xf);
                        var t = A.sm(),
                            f = A._rows;
                        return n === xf ? t.rs(f) : t.ss(f), A.onCheckColumnClicked(e), !0
                    }
                }
                return !1
            },
            handleWindowMouseUp: function(x) {
                this.handleWindowTouchEnd(x)
            },
            handleWindowTouchEnd: function(C) {
                var X = this,
                    Y = X.tv,
                    b = X.th,
                    O = X._29o;
                if (X.moving) {
                    var N = b._61I;
                    if (N && N.insertColumn !== N.column) {
                        var l = N.column,
                            E = Y.getColumnModel()._roots,
                            J = E.remove(l),
                            p = E.indexOf(N.insertColumn);
                        p >= 0 && (N.front || p++, p <= E.size() && (E.add(l, p), Y.getColumnModel()._38I(l, J, p)))
                    }
                    b._5Q(r), delete X.moving
                } else if (!X.resizing && O) {
                    l = O.column;
                    var o = b.lp(C).x,
                        H = O.startX,
                        k = !0;
                    if (b.onColumnClicked) {
                        var y = b.onColumnClicked(l, C, H);
                        y === !1 && (k = !1)
                    }
                    if (k && o >= H && o <= H + l.getWidth() && !X._16Q(l, H)) {
                        if (l.isSortable()) {
                            var A = Y.getSortMode(),
                                L = l.getSortOrder();
                            A === qj ? Y.getSortColumn() === l ? (L === ie && Y.setSortColumn(r), l.setSortOrder(L === Xd ? ie : Xd)) : Y.setSortColumn(l) : "bistate" === A && (Y.getSortColumn() === l ? l.setSortOrder(L === Xd ? ie : Xd) : Y.setSortColumn(l))
                        }
                        Y.onColumnClicked(l, C, H)
                    }
                }
                X._29o = X.resizing = X.x = X.lx = X.w = r
            }
        }), ef.TablePane = function(U) {
            this.init(new si(U))
        }, vh("TablePane", s, {
            ms_v: 1,
            _44o: 1
        }), ef.TreeTablePane = function(v) {
            this.init(new sp(v))
        }, vh("TreeTablePane", s, {
            ms_v: 1,
            _44o: 1
        }), ef.Toolbar = function(M) {
            var c = this,
                C = c._view = xq(1, c),
                n = C.style;
            n.background = S.toolbarBackground || "", n.height = Ke + Yg, c._canvas = Tl(C), c._30o = new pm, c._90I = new pm, c.setItems(M || []), C.handleGroupSelectedChanged = function(P) {
                if (P.isSelected()) {
                    var B = P.getGroupId();
                    null != B && c._items.forEach(function(w) {
                        var s = w.element;
                        s && s !== P && s.setSelected && s.getGroupId && s.getGroupId() === B && s.setSelected(!1)
                    })
                }
            }, new Lq(c)
        }, vh("Toolbar", s, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_lp: 1,
            ms_tip: 1,
            ms_value: 1,
            ms_ac: [nn, mk, Bl, Tb, zd, "itemGap", "separatorColor", "currentItem", "stickToRight"],
            _labelColor: S.toolbarLabelColor,
            _labelSelectColor: S.toolbarLabelSelectColor,
            _labelFont: S.toolbarLabelFont,
            _selectBackground: S.toolbarSelectBackground,
            _itemGap: S.toolbarItemGap,
            _separatorColor: S.toolbarSeparatorColor,
            _stickToRight: !1,
            getSumWidth: function() {
                return this._64I
            },
            getToolTip: function(I) {
                var Z = this.getItemInfoAt(I);
                return Z ? Z.item.toolTip : r
            },
            getLabelColor: function(j) {
                return j && j.selected && j.type !== xf && j.type !== ti ? this._labelSelectColor : this._labelColor
            },
            onPropertyChanged: function(I) {
                this.iv(), I.property === nn && this._items.forEach(function(i) {
                    Uq(i)
                })
            },
            redraw: function() {
                this.iv()
            },
            addItem: function(Y, e) {
                var D = this._items;
                e == r ? D.push(Y) : D.splice(e, 0, Y), this.fp(nn, r, D)
            },
            removeItem: function(f) {
                if (f)
                    for (var B = this._items, Z = 0; Z < B.length; Z++) f === B[Z] && (B.splice(Z, 1), this.fp(nn, r, B))
            },
            removeItemById: function(P) {
                if (P != r)
                    for (var b = this._items, R = 0; R < b.length; R++) P === b[R].id && (b.splice(R, 1), this.fp(nn, r, b))
            },
            getItemById: function(g) {
                if (g != r)
                    for (var T = this._items, U = 0; U < T.length; U++) {
                        var x = T[U];
                        if (g === x.id) return x
                    }
            },
            getItemInfos: function() {
                return this._30o
            },
            getItemInfoAt: function(O) {
                var s = this,
                    a = 0,
                    n = s._30o,
                    X = s.lp(O),
                    S = X.x,
                    j = X.y;
                if (j >= 0 && j <= s.getHeight())
                    for (; a < n.size(); a++) {
                        var B = n.get(a);
                        if (B.startX <= S && S <= B.endX) return B
                    }
                return r
            },
            drawItem: function(W, G, i, Y, v) {
                if (G.visible === !1) return 0;
                if (eh(G.visible) && G.visible() === !1) return 0;
                var V = this,
                    r = G.disabled;
                r && (W.globalAlpha = hr);
                var j = V.drawItemImpl(W, G, i, Y, v),
                    t = V._itemGap;
                return r && (W.globalAlpha = 1), this._currentItem !== G || "separator" === G || G.separator === !0 || G.unfocusable || Wq(W, V._separatorColor, i - t / 2, 0, j + t, Y), j
            },
            drawItemImpl: function(s, M, K, d, S) {
                var G = this,
                    E = G._view,
                    P = G._itemGap,
                    _ = d / 2,
                    X = M.type,
                    e = M.element,
                    l = M.label;
                Rr(e) && (l = e, e = r);
                var D, O = G.getLabelFont(M),
                    u = G.getLabelColor(M),
                    R = M.selected,
                    C = Eq(M.icon),
                    A = co(C, M),
                    U = 0,
                    J = A + (l ? ir(O, l).width : 0);
                if ("separator" === M || M.separator === !0) return _p(s, G._separatorColor, K, d / 4, _), 1;
                if (e) {
                    C && Jh(s, C, K + A / 2, _), so(s, l, O, u, K + A, 0, 0, d);
                    var y = we(e);
                    S || G._90I.add(y), y.parentNode !== E && Hb(E, y), e.iv && e.iv(), e.validate && e.validate();
                    var L = y.getBoundingClientRect(),
                        o = L.width,
                        V = y.style;
                    return zk(y), V.left = G.tx() + K + J + Yg, V.top = (d - L.height) / 2 + Yg, J + o
                }
                return X === ti ? D = Eq(R ? Dq : Jp) : X === xf && (D = Eq(R ? xf : dr)), D ? (U = co(D, M), Jh(s, D, K + U / 2, _), K += U, J += U) : R && yj(s, K - P / 2, 0, J + P, d, G.getSelectBackground(M)), C && Jh(s, C, K + A / 2, _), so(s, l, O, u, K + A, 0, 0, d), J
            },
            validateImpl: function() {
                var N = this,
                    x = N._canvas,
                    m = N.getWidth(),
                    c = N.getHeight(),
                    l = N._30o,
                    D = N._items;
                Oc(x, m, c);
                var w = ng(x),
                    A = N._itemGap,
                    $ = A / 2;
                me(w, N.tx(), 0, 1), w.clearRect(0, 0, m, c);
                var F = N._90I;
                N._90I = new pm, l.clear(), D.forEach(function(z) {
                    var P = N.drawItem(w, z, $, c);
                    l.add({
                        item: z,
                        startX: $,
                        endX: $ + P,
                        width: P
                    }), P && ($ += P + A)
                }), F.each(function(g) {
                    N._90I.contains(g) || Nl(g)
                }), N._64I = v(0, $), w.restore(), N._stickToRight ? (N._65O = 0, w = ng(x), $ = m - N._64I + A, me(w, 0, 0, 1), w.clearRect(0, 0, m, c), l.clear(), D.forEach(function(g) {
                    var M = N.drawItem(w, g, $, c, !0);
                    l.add({
                        item: g,
                        startX: $,
                        endX: $ + M,
                        width: M
                    }), M && ($ += M + A)
                }), w.restore()) : N.tx(N.tx())
            },
            handleClick: function(c) {
                var T = this,
                    K = c.type,
                    l = c.action,
                    L = c.groupId,
                    $ = c.selected;
                c.disabled || (L != r ? $ || (c.selected = !0, this._items.forEach(function(v) {
                    v.groupId === L && c !== v && (v.selected = !1)
                }), l && c.action(c, T)) : K === xf || "toggle" === K ? (c.selected = !$, l && c.action(c, T)) : l && c.action(c, T)), Fk(), T.iv()
            }
        });
        var Lq = function(q) {
            this.tb = q, this.addListeners()
        };
        Ni(Lq, s, {
            ms_listener: 1,
            getView: function() {
                return this.tb._view
            },
            handle_mousewheel: function(M) {
                this.handleScroll(M, 10 * (M.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function(r) {
                this.handleScroll(r, 10 * -r.detail)
            },
            handleScroll: function(e, E) {
                ks(e);
                var J = this.tb;
                J.isScrollable() && !J._stickToRight && (J.tx(J.tx() + E), Eo())
            },
            handle_mousemove: function(e) {
                var X = this;
                Gi ? X.info2 = X.tb.getItemInfoAt(e) : X.setItem(e)
            },
            handle_mouseout: function(P) {
                var n = this;
                P.target === n.getView() ? n.tb.setCurrentItem(r) : n.handle_mousemove(P)
            },
            handle_mousedown: function(J) {
                this.handle_mousemove(J), this.handle_touchstart(J)
            },
            handle_touchstart: function(l) {
                var G = this,
                    B = G.tb,
                    a = l.target;
                Yq(l) && (a === G.getView() || a === B._canvas) && (ks(l), B.setFocus(l) && (this.setItem(l, !0), (B.isScrollable() || G.info && !G.info.item.disabled) && (G.x = Lf(l).x, G.tx = B.tx(), sh(G, l))))
            },
            handleWindowMouseMove: function(x) {
                this.handleWindowTouchMove(x)
            },
            handleWindowTouchMove: function(N) {
                var V = this,
                    F = V.tb;
                if (!F._stickToRight) {
                    var i = Lf(N).x - V.x;
                    !V._25o && E(i) > 2 && F.isScrollable() && (V._25o = 1), V._25o && F.tx(V.tx + i)
                }
            },
            handleWindowMouseUp: function(w) {
                this.handleWindowTouchEnd(w)
            },
            handleWindowTouchEnd: function() {
                var m = this,
                    W = m.tb,
                    e = m.info,
                    o = m.info2;
                if (!m._25o && e) {
                    var c = e.item;
                    o && o.item !== c || W.handleClick(c)
                }
                m._25o = m.x = m.tx = m.info2 = r, m.setItem()
            },
            setItem: function(X, K) {
                var h = this,
                    P = h.tb,
                    A = h.info = X ? P.getItemInfoAt(X) : r,
                    g = A ? A.item : r;
                P.setCurrentItem(g), K && g && eh(g.onDown) && g.onDown(X)
            }
        }), ef.BorderPane = function() {
            this._view = xq(1, this), this.iv()
        }, vh("BorderPane", s, {
            ms_v: 1,
            ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
            ms_fire: 1,
            getLeftView: function() {
                return this._leftView
            },
            setLeftView: function(g, $) {
                this._12o("leftView", g), $ != r && this.setLeftWidth($)
            },
            getRightView: function() {
                return this._rightView
            },
            setRightView: function(M, j) {
                this._12o("rightView", M), j != r && this.setRightWidth(j)
            },
            getTopView: function() {
                return this._topView
            },
            setTopView: function(i, G) {
                this._12o("topView", i), G != r && this.setTopHeight(G)
            },
            getBottomView: function() {
                return this._bottomView
            },
            setBottomView: function(E, k) {
                this._12o("bottomView", E), k != r && this.setBottomHeight(k)
            },
            getCenterView: function() {
                return this._centerView
            },
            setCenterView: function(B) {
                this._12o("centerView", B)
            },
            _12o: function(R, t) {
                var _ = this,
                    p = "_" + R,
                    g = _._view,
                    B = _[p];
                B !== t && (B && (B.getView ? Nl(B.getView()) : Nl(B)), _[p] = t, t && (t.getView ? Hb(g, t.getView(), 1) : Hb(g, t, 1)), _.fp(R, B, t))
            },
            onPropertyChanged: function() {
                this.iv()
            },
            validateImpl: function() {
                var O = this,
                    q = O._topView,
                    e = O._bottomView,
                    g = O._leftView,
                    X = O._rightView,
                    s = O._centerView,
                    Z = O.getWidth(),
                    _ = O.getHeight(),
                    k = 0,
                    b = 0,
                    l = Z,
                    R = _,
                    i = 0,
                    M = 0,
                    w = 0,
                    P = 0;
                q && (i = O._topHeight == r ? Zq(q) : O._topHeight, b = i), e && (M = O._bottomHeight == r ? Zq(e) : O._bottomHeight, R = _ - M), g && (w = O._leftWidth == r ? bq(g) : O._leftWidth, k = w), X && (P = O._rightWidth == r ? bq(X) : O._rightWidth, l = Z - P);
                var D = v(0, l - k),
                    c = v(0, R - b);
                q && Ho(q, 0, 0, Z, i), e && Ho(e, 0, R, Z, M), g && Ho(g, 0, b, w, c), X && Ho(X, l, b, P, c), s && Ho(s, k, b, D, c)
            }
        })
    }
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);