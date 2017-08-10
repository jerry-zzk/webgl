! function(u, E, k) {
    "use strict";
    var b = "ht",
        U = u[b],
        w = null,
        K = Math,
        q = K.PI,
        Y = K.cos,
        e = K.sin,
        G = K.abs,
        g = K.max,
        T = K.sqrt,
        Q = 1e-5,
        y = U.Default,
        n = y.def,
        S = y.startAnim,
        N = y.createMatrix,
        Z = y.transformVec,
        C = y.getInternal(),
        z = C.addMethod,
        m = C.superCall,
        d = C.toPointsArray,
        f = C.createNormals,
        $ = C.toFloatArray,
        H = C.glMV,
        B = C.batchShape,
        c = C.createNodeMatrix,
        o = C.getFaceInfo,
        L = C.transformAppend,
        x = C.drawFaceInfo,
        _ = C.createAnim,
        J = C.cube(),
        F = J.is,
        A = J.vs,
        s = J.uv,
        p = C.ui(),
        D = U.Node,
        I = U.Shape,
        V = "h",
        M = "v",
        P = "front",
        W = "back",
        v = "left",
        i = "right",
        t = "top",
        j = "bottom",
        r = "dw.expanded",
        h = ".expanded",
        l = "dw.angle",
        R = ".angle",
        O = function(K, c, Z) {
            n(b + "." + K, c, Z)
        },
        X = function(P, T, G) {
            G ? P.push(T.x, T.y) : P.push(T.x, T.y, T.z)
        },
        a = [1, 0, 0],
        xp = function(e, T, I, J) {
            var E, j, l, v, b = 0,
                G = [];
            if (J)
                for (E = J.length; E > b; b += 3) j = J[b], l = J[b + 1], v = J[b + 2], G.push(new Tm([new Zi([T[3 * j], T[3 * j + 1], T[3 * j + 2]], a, I ? [I[2 * j], I[2 * j + 1], 0] : w), new Zi([T[3 * l], T[3 * l + 1], T[3 * l + 2]], a, I ? [I[2 * l], I[2 * l + 1], 0] : w), new Zi([T[3 * v], T[3 * v + 1], T[3 * v + 2]], a, I ? [I[2 * v], I[2 * v + 1], 0] : w)], e));
            else
                for (E = T.length; E > b; b += 3) j = b, l = b + 1, v = b + 2, G.push(new Tm([new Zi([T[3 * j], T[3 * j + 1], T[3 * j + 2]], a, I ? [I[2 * j], I[2 * j + 1], 0] : w), new Zi([T[3 * l], T[3 * l + 1], T[3 * l + 2]], a, I ? [I[2 * l], I[2 * l + 1], 0] : w), new Zi([T[3 * v], T[3 * v + 1], T[3 * v + 2]], a, I ? [I[2 * v], I[2 * v + 1], 0] : w)], e));
            return G
        },
        Gi = [v, P, i, W, t, j],
        rn = Gi.concat("csg"),
        Qm = [0, 6, 12, 18, 24, 30],
        $k = function(l, r, z) {
            for (var p = c(l), n = [], e = 0; 6 > e; e++)
                for (var G = Gi[e], T = Qm[e], y = z ? r.getFaceUv(l, G) : w, j = z ? r.getFaceUvScale(l, G) : w, k = z ? r.getFaceUvOffset(l, G) : w, B = 0; 2 > B; B++) {
                    var _, f, O, H = F[T + 3 * B],
                        C = F[T + 3 * B + 1],
                        N = F[T + 3 * B + 2];
                    if (z) {
                        if (y) {
                            var v = 8 * e;
                            _ = [y[2 * H - v], y[2 * H + 1 - v], 0], f = [y[2 * C - v], y[2 * C + 1 - v], 0], O = [y[2 * N - v], y[2 * N + 1 - v], 0]
                        } else _ = [s[2 * H], s[2 * H + 1], 0], f = [s[2 * C], s[2 * C + 1], 0], O = [s[2 * N], s[2 * N + 1], 0];
                        j && (_[0] *= j[0], _[1] *= j[1], f[0] *= j[0], f[1] *= j[1], O[0] *= j[0], O[1] *= j[1]), k && (_[0] += k[0], _[1] += k[1], f[0] += k[0], f[1] += k[1], O[0] += k[0], O[1] += k[1])
                    }
                    n.push(new Tm([new Zi(Z([A[3 * H], A[3 * H + 1], A[3 * H + 2]], p), a, _), new Zi(Z([A[3 * C], A[3 * C + 1], A[3 * C + 2]], p), a, f), new Zi(Z([A[3 * N], A[3 * N + 1], A[3 * N + 2]], p), a, O)], l))
                }
            return Bk.$15n(n)
        },
        hm = function(L, l) {
            var j, W = L.data.getAttaches();
            if (W && W.each(function(I) {
                    I instanceof fi && I.s("attach.operation") && (j || (j = []), j.push(I))
                }), j) {
                var g;
                Gi.forEach(function(J) {
                    var u = xp(J, L[J].vs, L[J].tuv);
                    g = g ? g.concat(u) : u
                }), g = Bk.$15n(g), j.forEach(function(d) {
                    var l = d.s("attach.operation");
                    g[l] && (g = g[l]($k(d, L.gv, L.csg.tuv)))
                }), Gi.forEach(function(Q) {
                    Q = L[Q], Q.vs = [], Q.tuv && (Q.tuv = [])
                }), g.$19n().forEach(function(G) {
                    var A = G.$10n;
                    if (A instanceof fi) {
                        if (A.s("attach.cull")) return;
                        A = "csg"
                    }
                    for (var S = L[A], Z = S.vs, w = S.tuv, K = G.$9n, b = 2; b < K.length; b++) X(Z, K[0].$24n), X(Z, K[b - 1].$24n), X(Z, K[b].$24n), w && (X(w, K[0].uv, !0), X(w, K[b - 1].uv, !0), X(w, K[b].uv, !0))
                })
            }
            rn.forEach(function(h) {
                var F = L[h];
                F.visible && F.vs.length ? (F.ns = f(F.vs), $(F, "vs"), $(F, "tuv")) : delete L[h]
            }), l && (B(L, w, l), L.clear())
        };
    z(y, {
        createFrameModel: function(X, l, v, P) {
            X = X == w ? .07 : X, l = l == w ? X : l, v = v == w ? X : v, P = P ? P : {};
            var U = P.top,
                L = P.bottom,
                Z = P.left,
                g = P.right,
                G = P.front,
                e = P.back,
                k = [],
                E = [];
            return G === !0 ? (k.push(-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5), E.push(0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0)) : G === !1 || (k.push(-.5, .5, .5, -.5, -.5, .5, -.5 + X, -.5, .5, -.5 + X, -.5, .5, -.5 + X, .5, .5, -.5, .5, .5, .5 - X, .5, .5, .5 - X, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5 - X, .5, .5, -.5 + X, .5, .5, -.5 + X, .5 - l, .5, .5 - X, .5 - l, .5, .5 - X, .5 - l, .5, .5 - X, .5, .5, -.5 + X, .5, .5, -.5 + X, -.5 + l, .5, -.5 + X, -.5, .5, .5 - X, -.5, .5, .5 - X, -.5, .5, .5 - X, -.5 + l, .5, -.5 + X, -.5 + l, .5), E.push(0, 0, 0, 1, X, 1, X, 1, X, 0, 0, 0, 1 - X, 0, 1 - X, 1, 1, 1, 1, 1, 1, 0, 1 - X, 0, X, 0, X, l, 1 - X, l, 1 - X, l, 1 - X, 0, X, 0, X, 1 - l, X, 1, 1 - X, 1, 1 - X, 1, 1 - X, 1 - l, X, 1 - l)), e === !0 ? (k.push(-.5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5), E.push(1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0)) : e === !1 || (k.push(-.5, .5, -.5, -.5 + X, -.5, -.5, -.5, -.5, -.5, -.5 + X, -.5, -.5, -.5, .5, -.5, -.5 + X, .5, -.5, .5 - X, .5, -.5, .5, -.5, -.5, .5 - X, -.5, -.5, .5, -.5, -.5, .5 - X, .5, -.5, .5, .5, -.5, -.5 + X, .5, -.5, .5 - X, .5 - l, -.5, -.5 + X, .5 - l, -.5, .5 - X, .5 - l, -.5, -.5 + X, .5, -.5, .5 - X, .5, -.5, -.5 + X, -.5 + l, -.5, .5 - X, -.5, -.5, -.5 + X, -.5, -.5, .5 - X, -.5, -.5, -.5 + X, -.5 + l, -.5, .5 - X, -.5 + l, -.5), E.push(1, 0, 1 - X, 1, 1, 1, 1 - X, 1, 1, 0, 1 - X, 0, X, 0, 0, 1, X, 1, 0, 1, X, 0, 0, 0, 1 - X, 0, X, l, 1 - X, l, X, l, 1 - X, 0, X, 0, 1 - X, 1 - l, X, 1, 1 - X, 1, X, 1, 1 - X, 1 - l, X, 1 - l)), Z === !0 ? (k.push(-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, -.5), E.push(0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0)) : Z === !1 || (k.push(-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5 + v, -.5, -.5, -.5 + v, -.5, .5, -.5 + v, -.5, .5, -.5, -.5, .5, .5 - v, -.5, -.5, .5 - v, -.5, -.5, .5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5 - v, -.5, .5, -.5 + v, -.5, .5 - l, -.5 + v, -.5, .5 - l, .5 - v, -.5, .5 - l, .5 - v, -.5, .5, .5 - v, -.5, .5, -.5 + v, -.5, -.5 + l, -.5 + v, -.5, -.5, -.5 + v, -.5, -.5, .5 - v, -.5, -.5, .5 - v, -.5, -.5 + l, .5 - v, -.5, -.5 + l, -.5 + v), E.push(0, 0, 0, 1, v, 1, v, 1, v, 0, 0, 0, 1 - v, 0, 1 - v, 1, 1, 1, 1, 1, 1, 0, 1 - v, 0, v, 0, v, l, 1 - v, l, 1 - v, l, 1 - v, 0, v, 0, v, 1 - l, v, 1, 1 - v, 1, 1 - v, 1, 1 - v, 1 - l, v, 1 - l)), g === !0 ? (k.push(.5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, -.5, .5, .5, .5), E.push(1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0)) : g === !1 || (k.push(.5, .5, -.5, .5, -.5, -.5 + v, .5, -.5, -.5, .5, -.5, -.5 + v, .5, .5, -.5, .5, .5, -.5 + v, .5, .5, .5 - v, .5, -.5, .5, .5, -.5, .5 - v, .5, -.5, .5, .5, .5, .5 - v, .5, .5, .5, .5, .5, -.5 + v, .5, .5 - l, .5 - v, .5, .5 - l, -.5 + v, .5, .5 - l, .5 - v, .5, .5, -.5 + v, .5, .5, .5 - v, .5, -.5 + l, -.5 + v, .5, -.5, .5 - v, .5, -.5, -.5 + v, .5, -.5, .5 - v, .5, -.5 + l, -.5 + v, .5, -.5 + l, .5 - v), E.push(1, 0, 1 - v, 1, 1, 1, 1 - v, 1, 1, 0, 1 - v, 0, v, 0, 0, 1, v, 1, 0, 1, v, 0, 0, 0, 1 - v, 0, v, l, 1 - v, l, v, l, 1 - v, 0, v, 0, 1 - v, 1 - l, v, 1, 1 - v, 1, v, 1, 1 - v, 1 - l, v, 1 - l)), U === !0 ? (k.push(.5, .5, .5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5), E.push(1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1)) : U === !1 || (k.push(.5, .5, .5, .5, .5, -.5, .5 - X, .5, -.5, .5 - X, .5, -.5, .5 - X, .5, .5, .5, .5, .5, -.5 + X, .5, .5, -.5 + X, .5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5 + X, .5, .5, .5 - X, .5, .5, .5 - X, .5, .5 - v, -.5 + X, .5, .5 - v, -.5 + X, .5, .5 - v, -.5 + X, .5, .5, .5 - X, .5, .5, .5 - X, .5, -.5 + v, .5 - X, .5, -.5, -.5 + X, .5, -.5, -.5 + X, .5, -.5, -.5 + X, .5, -.5 + v, .5 - X, .5, -.5 + v), E.push(1, 1, 1, 0, 1 - X, 0, 1 - X, 0, 1 - X, 1, 1, 1, X, 1, X, 0, 0, 0, 0, 0, 0, 1, X, 1, 1 - X, 1, 1 - X, 1 - v, X, 1 - v, X, 1 - v, X, 1, 1 - X, 1, 1 - X, v, 1 - X, 0, X, 0, X, 0, X, v, 1 - X, v)), L === !0 ? (k.push(.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, -.5, -.5, .5), E.push(1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0)) : L === !1 || (k.push(.5, -.5, .5, .5 - X, -.5, -.5, .5, -.5, -.5, .5 - X, -.5, -.5, .5, -.5, .5, .5 - X, -.5, .5, -.5 + X, -.5, .5, -.5, -.5, -.5, -.5 + X, -.5, -.5, -.5, -.5, -.5, -.5 + X, -.5, .5, -.5, -.5, .5, .5 - X, -.5, .5, -.5 + X, -.5, .5 - v, .5 - X, -.5, .5 - v, -.5 + X, -.5, .5 - v, .5 - X, -.5, .5, -.5 + X, -.5, .5, .5 - X, -.5, -.5 + v, -.5 + X, -.5, -.5, .5 - X, -.5, -.5, -.5 + X, -.5, -.5, .5 - X, -.5, -.5 + v, -.5 + X, -.5, -.5 + v), E.push(1, 0, 1 - X, 1, 1, 1, 1 - X, 1, 1, 0, 1 - X, 0, X, 0, 0, 1, X, 1, 0, 1, X, 0, 0, 0, 1 - X, 0, X, v, 1 - X, v, X, v, 1 - X, 0, X, 0, 1 - X, 1 - v, X, 1, 1 - X, 1, X, 1, 1 - X, 1 - v, X, 1 - v)), {
                vs: k,
                uv: E
            }
        }
    }), z(U.Style, {
        "dw.flip": !1,
        "dw.s3": [.999, .999, .5],
        "dw.t3": k,
        "dw.expanded": !1,
        "dw.toggleable": !0,
        "dw.axis": "left",
        "dw.start": 0,
        "dw.end": q / 2,
        "dw.angle": 0,
        "attach.cull": !1,
        "attach.operation": "subtract"
    }, !0), Gi.forEach(function(J) {
        var e = {};
        e[J + h] = !1, e[J + ".toggleable"] = !1, e[J + ".axis"] = v, e[J + ".start"] = 0, e[J + ".end"] = q / 2, e[J + R] = 0, z(U.Style, e, !0)
    });
    var Bk = function() {
        this.$4n = []
    };
    Bk.$15n = function(D) {
        var y = new Bk;
        return y.$4n = D, y
    }, Bk.prototype = {
        clone: function() {
            var k = new Bk;
            return k.$4n = this.$4n.map(function(Z) {
                return Z.clone()
            }), k
        },
        $19n: function() {
            return this.$4n
        },
        union: function(k) {
            var y = new Qb(this.clone().$4n),
                I = new Qb(k.clone().$4n);
            return y.$3n(I), I.$3n(y), I.$6n(), I.$3n(y), I.$6n(), y.$7n(I.$2n()), Bk.$15n(y.$2n())
        },
        subtract: function(E) {
            var h = new Qb(this.clone().$4n),
                i = new Qb(E.clone().$4n);
            return h.$6n(), h.$3n(i), i.$3n(h), i.$6n(), i.$3n(h), i.$6n(), h.$7n(i.$2n()), h.$6n(), Bk.$15n(h.$2n())
        },
        intersect: function(c) {
            var E = new Qb(this.clone().$4n),
                C = new Qb(c.clone().$4n);
            return E.$6n(), C.$3n(E), C.$6n(), E.$3n(C), C.$3n(E), E.$7n(C.$2n()), E.$6n(), Bk.$15n(E.$2n())
        },
        inverse: function() {
            var J = this.clone();
            return J.$4n.map(function(S) {
                S.flip()
            }), J
        }
    }, Bk.cube = function(F) {
        F = F || {};
        var n = new fp(F.center || [0, 0, 0]),
            o = F.radius ? F.radius.length ? F.radius : [F.radius, F.radius, F.radius] : [1, 1, 1];
        return Bk.$15n([
            [
                [0, 4, 6, 2],
                [-1, 0, 0]
            ],
            [
                [1, 3, 7, 5],
                [1, 0, 0]
            ],
            [
                [0, 1, 5, 4],
                [0, -1, 0]
            ],
            [
                [2, 6, 7, 3],
                [0, 1, 0]
            ],
            [
                [0, 2, 3, 1],
                [0, 0, -1]
            ],
            [
                [4, 5, 7, 6],
                [0, 0, 1]
            ]
        ].map(function(k) {
            return new Tm(k[0].map(function(z) {
                var m = new fp(n.x + o[0] * (2 * !!(1 & z) - 1), n.y + o[1] * (2 * !!(2 & z) - 1), n.z + o[2] * (2 * !!(4 & z) - 1));
                return new Zi(m, new fp(k[1]))
            }))
        }))
    }, Bk.sphere = function(p) {
        function W(l, J) {
            l *= 2 * q, J *= q;
            var y = new fp(Y(l) * e(J), Y(J), e(l) * e(J));
            z.push(new Zi($.$20n(y.$21n(P)), y))
        }
        p = p || {};
        for (var z, $ = new fp(p.center || [0, 0, 0]), P = p.radius || 1, u = p.slices || 16, K = p.stacks || 8, h = [], f = 0; u > f; f++)
            for (var g = 0; K > g; g++) z = [], W(f / u, g / K), g > 0 && W((f + 1) / u, g / K), K - 1 > g && W((f + 1) / u, (g + 1) / K), W(f / u, (g + 1) / K), h.push(new Tm(z));
        return Bk.$15n(h)
    }, Bk.cylinder = function(U) {
        function M(v, H, N) {
            var p = 2 * H * q,
                s = Z.$21n(Y(p)).$20n(B.$21n(e(p))),
                M = g.$20n(S.$21n(v)).$20n(s.$21n(n)),
                $ = s.$21n(1 - G(N)).$20n(l.$21n(N));
            return new Zi(M, $)
        }
        U = U || {};
        for (var g = new fp(U.start || [0, -1, 0]), c = new fp(U.end || [0, 1, 0]), S = c.$13n(g), n = U.radius || 1, J = U.slices || 16, l = S.$14n(), u = G(l.y) > .5, Z = new fp(u, !u, 0).$12n(l).$14n(), B = Z.$12n(l).$14n(), O = new Zi(g, l.$11n()), T = new Zi(c, l.$14n()), j = [], o = 0; J > o; o++) {
            var h = o / J,
                P = (o + 1) / J;
            j.push(new Tm([O, M(0, h, -1), M(0, P, -1)])), j.push(new Tm([M(0, P, 0), M(0, h, 0), M(1, h, 0), M(1, P, 0)])), j.push(new Tm([T, M(1, P, 1), M(1, h, 1)]))
        }
        return Bk.$15n(j)
    };
    var fp = function(R, F, U) {
        var E = this;
        3 == arguments.length ? (E.x = R, E.y = F, E.z = U) : "x" in R ? (E.x = R.x, E.y = R.y, E.z = R.z) : (E.x = R[0], E.y = R[1], E.z = R[2])
    };
    fp.prototype = {
        clone: function() {
            return new fp(this.x, this.y, this.z)
        },
        $11n: function() {
            return new fp(-this.x, -this.y, -this.z)
        },
        $20n: function(M) {
            return new fp(this.x + M.x, this.y + M.y, this.z + M.z)
        },
        $13n: function(G) {
            return new fp(this.x - G.x, this.y - G.y, this.z - G.z)
        },
        $21n: function(n) {
            return new fp(this.x * n, this.y * n, this.z * n)
        },
        $16n: function(B) {
            return new fp(this.x / B, this.y / B, this.z / B)
        },
        $23n: function(r) {
            return this.x * r.x + this.y * r.y + this.z * r.z
        },
        lerp: function(w, r) {
            return this.$20n(w.$13n(this).$21n(r))
        },
        length: function() {
            return T(this.$23n(this))
        },
        $14n: function() {
            return this.$16n(this.length())
        },
        $12n: function(T) {
            var u = this;
            return new fp(u.y * T.z - u.z * T.y, u.z * T.x - u.x * T.z, u.x * T.y - u.y * T.x)
        }
    };
    var Zi = function(W, N, r) {
        var s = this;
        s.$24n = new fp(W), s.$22n = new fp(N), s.uv = r ? new fp(r) : null
    };
    Zi.prototype = {
        clone: function() {
            var l = this;
            return new Zi(l.$24n.clone(), l.$22n.clone(), l.uv ? l.uv.clone() : null)
        },
        flip: function() {
            this.$22n = this.$22n.$11n()
        },
        $18n: function(f, W) {
            var d = this;
            return new Zi(d.$24n.lerp(f.$24n, W), d.$22n.lerp(f.$22n, W), d.uv ? d.uv.lerp(f.uv, W) : null)
        }
    };
    var bo = function(n, C) {
        this.$22n = n, this.w = C
    };
    bo.$17n = function(S, K, a) {
        var t = K.$13n(S).$12n(a.$13n(S)).$14n();
        return new bo(t, t.$23n(S))
    }, bo.prototype = {
        clone: function() {
            return new bo(this.$22n.clone(), this.w)
        },
        flip: function() {
            var D = this;
            D.$22n = D.$22n.$11n(), D.w = -D.w
        },
        $5n: function(C, h, j, H, V) {
            for (var x = this, l = 0, e = 1, U = 2, A = 3, r = 0, O = [], S = 0; S < C.$9n.length; S++) {
                var n = x.$22n.$23n(C.$9n[S].$24n) - x.w,
                    _ = -Q > n ? U : n > Q ? e : l;
                r |= _, O.push(_)
            }
            switch (r) {
                case l:
                    (x.$22n.$23n(C.$8n.$22n) > 0 ? h : j).push(C);
                    break;
                case e:
                    H.push(C);
                    break;
                case U:
                    V.push(C);
                    break;
                case A:
                    for (var G = [], c = [], S = 0; S < C.$9n.length; S++) {
                        var p = (S + 1) % C.$9n.length,
                            P = O[S],
                            L = O[p],
                            D = C.$9n[S],
                            m = C.$9n[p];
                        if (P != U && G.push(D), P != e && c.push(P != U ? D.clone() : D), (P | L) == A) {
                            var n = (x.w - this.$22n.$23n(D.$24n)) / x.$22n.$23n(m.$24n.$13n(D.$24n)),
                                b = D.$18n(m, n);
                            G.push(b), c.push(b.clone())
                        }
                    }
                    G.length >= 3 && H.push(new Tm(G, C.$10n)), c.length >= 3 && V.push(new Tm(c, C.$10n))
            }
        }
    };
    var Tm = function(v, i) {
        var O = this;
        O.$9n = v, O.$10n = i, O.$8n = bo.$17n(v[0].$24n, v[1].$24n, v[2].$24n)
    };
    Tm.prototype = {
        clone: function() {
            var C = this.$9n.map(function(z) {
                return z.clone()
            });
            return new Tm(C, this.$10n)
        },
        flip: function() {
            this.$9n.reverse().map(function(h) {
                h.flip()
            }), this.$8n.flip()
        }
    };
    var Qb = function(q) {
        var Q = this;
        Q.$8n = null, Q.front = null, Q.back = null, Q.$4n = [], q && Q.$7n(q)
    };
    Qb.prototype = {
        clone: function() {
            var U = this,
                y = new Qb;
            return y.$8n = U.$8n && U.$8n.clone(), y.front = U.front && U.front.clone(), y.back = U.back && U.back.clone(), y.$4n = U.$4n.map(function(Q) {
                return Q.clone()
            }), y
        },
        $6n: function() {
            for (var z = this, N = 0; N < z.$4n.length; N++) z.$4n[N].flip();
            z.$8n.flip(), z.front && z.front.$6n(), z.back && z.back.$6n();
            var h = z.front;
            z.front = z.back, z.back = h
        },
        $1n: function(q) {
            var e = this;
            if (!e.$8n) return q.slice();
            for (var T = [], a = [], K = 0; K < q.length; K++) e.$8n.$5n(q[K], T, a, T, a);
            return e.front && (T = e.front.$1n(T)), a = e.back ? e.back.$1n(a) : [], T.concat(a)
        },
        $3n: function(f) {
            var D = this;
            D.$4n = f.$1n(D.$4n), D.front && D.front.$3n(f), D.back && D.back.$3n(f)
        },
        $2n: function() {
            var s = this,
                P = s.$4n.slice();
            return s.front && (P = P.concat(s.front.$2n())), s.back && (P = P.concat(s.back.$2n())), P
        },
        $7n: function(A) {
            var d = this;
            if (A.length) {
                d.$8n || (d.$8n = A[0].$8n.clone());
                for (var c = [], z = [], g = 0; g < A.length; g++) this.$8n.$5n(A[g], d.$4n, d.$4n, c, z);
                c.length && (d.front || (d.front = new Qb), this.front.$7n(c)), z.length && (d.back || (d.back = new Qb), d.back.$7n(z))
            }
        }
    };
    var nq = "symbol",
        Tr = U.Symbol = function(P, d, F) {
            var z = this;
            m(Tr, z), z.s3(20, 20, 20), z.s({
                "all.visible": !1,
                shape: "rect"
            }), z.setIcon(P, d, F)
        };
    O("Symbol", D, {
        setIcon: function(j, h, u) {
            var O, Z = this;
            return Tr.superClass.setIcon.call(Z, j), j ? (O = {
                for3d: !0,
                face: "center",
                position: 44,
                names: [j]
            }, u && (O.transaprent = !0), h && (O.autorotate = h), Z.addStyleIcon(nq, O)) : Z.removeStyleIcon(nq), Z.setWidth(C.getImageWidth(y.getImage(j), Z) || 20), O
        }
    });
    var fi = U.CSGNode = function() {
            m(fi, this), this.s({
                shape: "rect",
                "attach.thickness": 1.001
            })
        },
        Zj = {
            position: 1,
            width: 1,
            height: 1,
            rotation: 1,
            rotationX: 1,
            rotationZ: 1,
            rotationMode: 1,
            tall: 1,
            elevation: 1,
            "s:attach.cull": 1,
            "s:attach.operation": 1
        };
    O("CSGNode", D, {
        _22Q: function() {
            return Ym
        },
        onPropertyChanged: function(V) {
            var W = this,
                M = W.getHost();
            fi.superClass.onPropertyChanged.call(W, V), Zj[V.property] && (M instanceof dq || M instanceof fi) && M.fp("csgNodeChange", !0, !1)
        }
    });
    var Ym = function(O, Q) {
        m(Ym, this, [O, Q])
    };
    n(Ym, p.Node3dUI, {
        _80o: function(l, J, P) {
            var M = this;
            M._shape3d ? Ym.superClass._80o.call(M, l, J, P) : (H(M.gv), rn.forEach(function(i) {
                x(M, l, J, M[i], P)
            }))
        },
        validate: function(D, y) {
            var t = this,
                h = t.gv,
                X = t.data;
            if (X.s("shape3d")) return Ym.superClass.validate.call(t, D, y), t._shape3d = !0, void 0;
            t._shape3d = !1;
            var N = c(X, h.getMat(X)),
                j = D && D.uv;
            t.vf2("csg", j);
            for (var Y = 0; 6 > Y; Y++)
                for (var B = Gi[Y], x = Qm[Y], E = t.vf2(B, j, y), z = E.mat || N, C = E.vs, r = E.uv, I = E.tuv, n = 0; 2 > n; n++) {
                    var w = F[x + 3 * n],
                        d = F[x + 3 * n + 1],
                        a = F[x + 3 * n + 2];
                    if (L(C, z, [A[3 * w], A[3 * w + 1], A[3 * w + 2]]), L(C, z, [A[3 * d], A[3 * d + 1], A[3 * d + 2]]), L(C, z, [A[3 * a], A[3 * a + 1], A[3 * a + 2]]), I)
                        if (r) {
                            var S = 8 * Y;
                            I.push(r[2 * w - S], r[2 * w + 1 - S], r[2 * d - S], r[2 * d + 1 - S], r[2 * a - S], r[2 * a + 1 - S])
                        } else I.push(s[2 * w], s[2 * w + 1], s[2 * d], s[2 * d + 1], s[2 * a], s[2 * a + 1])
                }
            hm(t, D, y)
        },
        vf2: function(O, T, F) {
            var d, J = this,
                r = J.gv.getFaceVisible(J.data, O);
            return d = o(J, O, F), d.vs = [], d.tuv = r && (d.texture || T) ? [] : w, d.visible = r, d
        }
    });
    var dq = U.CSGShape = function() {
        var A = this;
        m(dq, A), A.s({
            "shape.background": w,
            "shape.border.width": 8
        }), A.setTall(240), A.setElevation(120), A.setThickness(14)
    };
    O("CSGShape", I, {
        IRotatable: !1,
        _22Q: function() {
            return qm
        },
        setRotationX: function() {},
        setRotation: function() {},
        setRotationZ: function() {},
        setSegments: function() {}
    });
    var qm = function(p, W) {
        m(qm, this, [p, W])
    };
    n(qm, p.Shape3dUI, {
        _80o: function(v, X, g) {
            var L = this;
            L.undrawable || (H(L.gv), rn.forEach(function(D) {
                x(L, v, X, L[D], g)
            }))
        },
        validate: function(q, z) {
            var J = this,
                F = J.data,
                m = F.getPoints();
            if (J.undrawable = m.size() < 2) return J.clear(), void 0;
            var v = F.isClosePath(),
                c = g(F._thickness / 2, Q),
                V = d(m, w, w, v);
            rn.forEach(function(h) {
                J.vf(h, q && q.uv, !0, z)
            }), v && (J.left.visible = !1, J.right.visible = !1), J._12O(V, c), J._20Q(V), hm(J, q, z)
        }
    });
    var Ni = U.DoorWindow = function() {
        var f = this;
        m(Ni, f), f.setElevation(100), f.s3(100, 200, 14)
    };
    O("DoorWindow", fi, {
        IDoorWindow: !0,
        toggle: function(W) {
            this.setExpanded(!this.s(r), W)
        },
        isExpanded: function() {
            return this.s(r)
        },
        setExpanded: function(c, y) {
            var O, Z = this,
                w = Z.$25n,
                k = Z.getDataModel(),
                t = Z.s(r);
            if (k && (O = k.getHistoryManager()), w && (w.stop(!0), delete Z.$25n), t !== c) {
                O && O.beginInteraction();
                var e = c ? Z.s("dw.end") : Z.s("dw.start");
                Z.s(r, c), y = _(y), y ? (t = Z.s(l), y.action = function(F) {
                    Z.s(l, t + (e - t) * F)
                }, y.finishFunc = function() {
                    O && O.endInteraction()
                }, Z.$25n = S(y)) : (Z.s(l, e), O && O.endInteraction())
            }
        },
        getMat: function() {
            var f = this,
                d = f.s("dw.s3"),
                p = f.s("dw.t3"),
                a = f.s("dw.flip"),
                I = f.s(l);
            if (d || I || p || a) {
                var e = [];
                if (a && e.push({
                        r3: [0, q, 0]
                    }), d && e.push({
                        s3: d
                    }), I) {
                    d = f.s3();
                    var x = f.s("dw.axis"),
                        F = d[0] / 2,
                        A = d[1] / 2;
                    d[2] / 2, x === v ? e.push({
                        t3: [F, 0, 0]
                    }, {
                        r3: [0, -I, 0]
                    }, {
                        t3: [-F, 0, 0]
                    }) : x === i ? e.push({
                        t3: [-F, 0, 0]
                    }, {
                        r3: [0, I, 0]
                    }, {
                        t3: [F, 0, 0]
                    }) : x === t ? e.push({
                        t3: [0, -A, 0]
                    }, {
                        r3: [-I, 0, 0]
                    }, {
                        t3: [0, A, 0]
                    }) : x === j ? e.push({
                        t3: [0, A, 0]
                    }, {
                        r3: [I, 0, 0]
                    }, {
                        t3: [0, -A, 0]
                    }) : x === M ? e.push({
                        r3: [0, I, 0]
                    }) : x === V && e.push({
                        r3: [I, 0, 0]
                    })
                }
                return p && e.push({
                    t3: p
                }), N(e)
            }
            return w
        }
    });
    var Xc = U.CSGBox = function() {
        var $ = this;
        m(Xc, $), $.setElevation(100), $.s3(100, 200, 100)
    };
    O("CSGBox", fi, {
        ICSGBox: !0,
        toggleFace: function(F, w) {
            this.setFaceExpanded(F, !this.s(F + h), w)
        },
        isFaceExpanded: function(X) {
            return this.s(X + h)
        },
        setFaceExpanded: function(t, e, $) {
            var m = this,
                T = m.$25n,
                g = m.s(t + h);
            if (T && (T.stop(!0), delete m.$25n), g !== e) {
                var F = e ? m.s(t + ".end") : m.s(t + ".start");
                m.s(t + h, e), $ = _($), $ ? (g = m.s(t + R), $.action = function(u) {
                    m.s(t + R, g + (F - g) * u)
                }, m.$25n = S($)) : m.s(t + R, F)
            }
        },
        getFaceMat: function(a) {
            var g = this,
                E = g.s(a + R);
            if (!E) return w;
            var $ = g.s(a + ".axis"),
                Z = g.s3(),
                k = Z[0] / 2,
                O = Z[1] / 2,
                l = Z[2] / 2,
                f = [];
            return a === P && ($ === v ? f.push({
                t3: [k, 0, -l]
            }, {
                r3: [0, -E, 0]
            }, {
                t3: [-k, 0, l]
            }) : $ === i ? f.push({
                t3: [-k, 0, -l]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [k, 0, l]
            }) : $ === t ? f.push({
                t3: [0, -O, -l]
            }, {
                r3: [-E, 0, 0]
            }, {
                t3: [0, O, l]
            }) : $ === j ? f.push({
                t3: [0, O, -l]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, -O, l]
            }) : $ === M ? f.push({
                t3: [0, 0, -l]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [0, 0, l]
            }) : $ === V && f.push({
                t3: [0, 0, -l]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, 0, l]
            })), a === W && ($ === v ? f.push({
                t3: [-k, 0, l]
            }, {
                r3: [0, -E, 0]
            }, {
                t3: [k, 0, -l]
            }) : $ === i ? f.push({
                t3: [k, 0, l]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [-k, 0, -l]
            }) : $ === t ? f.push({
                t3: [0, -O, l]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, O, -l]
            }) : $ === j ? f.push({
                t3: [0, O, l]
            }, {
                r3: [-E, 0, 0]
            }, {
                t3: [0, -O, -l]
            }) : $ === M ? f.push({
                t3: [0, 0, l]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [0, 0, -l]
            }) : $ === V && f.push({
                t3: [0, 0, l]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, 0, -l]
            })), a === v && ($ === v ? f.push({
                t3: [k, 0, l]
            }, {
                r3: [0, -E, 0]
            }, {
                t3: [-k, 0, -l]
            }) : $ === i ? f.push({
                t3: [k, 0, -l]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [-k, 0, l]
            }) : $ === t ? f.push({
                t3: [k, -O, 0]
            }, {
                r3: [0, 0, -E]
            }, {
                t3: [-k, O, 0]
            }) : $ === j ? f.push({
                t3: [k, O, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [-k, -O, 0]
            }) : $ === M ? f.push({
                t3: [k, 0, 0]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [-k, 0, 0]
            }) : $ === V && f.push({
                t3: [k, 0, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [-k, 0, 0]
            })), a === i && ($ === v ? f.push({
                t3: [-k, 0, -l]
            }, {
                r3: [0, -E, 0]
            }, {
                t3: [k, 0, l]
            }) : $ === i ? f.push({
                t3: [-k, 0, l]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [k, 0, -l]
            }) : $ === t ? f.push({
                t3: [-k, -O, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [k, O, 0]
            }) : $ === j ? f.push({
                t3: [-k, O, 0]
            }, {
                r3: [0, 0, -E]
            }, {
                t3: [k, -O, 0]
            }) : $ === M ? f.push({
                t3: [-k, 0, 0]
            }, {
                r3: [0, E, 0]
            }, {
                t3: [k, 0, 0]
            }) : $ === V && f.push({
                t3: [-k, 0, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [k, 0, 0]
            })), a === t && ($ === v ? f.push({
                t3: [k, -O, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [-k, O, 0]
            }) : $ === i ? f.push({
                t3: [-k, -O, 0]
            }, {
                r3: [0, 0, -E]
            }, {
                t3: [k, O, 0]
            }) : $ === t ? f.push({
                t3: [0, -O, l]
            }, {
                r3: [-E, 0, 0]
            }, {
                t3: [0, O, -l]
            }) : $ === j ? f.push({
                t3: [0, -O, -l]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, O, l]
            }) : $ === M ? f.push({
                t3: [0, -O, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [0, O, 0]
            }) : $ === V && f.push({
                t3: [0, -O, 0]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, O, 0]
            })), a === j && ($ === v ? f.push({
                t3: [k, O, 0]
            }, {
                r3: [0, 0, -E]
            }, {
                t3: [-k, -O, 0]
            }) : $ === i ? f.push({
                t3: [-k, O, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [k, -O, 0]
            }) : $ === t ? f.push({
                t3: [0, O, -l]
            }, {
                r3: [-E, 0, 0]
            }, {
                t3: [0, -O, l]
            }) : $ === j ? f.push({
                t3: [0, O, l]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, -O, -l]
            }) : $ === M ? f.push({
                t3: [0, O, 0]
            }, {
                r3: [0, 0, E]
            }, {
                t3: [0, -O, 0]
            }) : $ === V && f.push({
                t3: [0, O, 0]
            }, {
                r3: [E, 0, 0]
            }, {
                t3: [0, -O, 0]
            })), N(f)
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);