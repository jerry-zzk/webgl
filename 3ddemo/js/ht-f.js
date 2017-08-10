! function(S, A, I) {
    "use strict";
    var N = "ht",
        z = N + ".widget.",
        G = S[N],
        o = G.Color,
        y = G.widget,
        J = o.widgetBorder,
        Y = o.widgetBackground,
        c = o.widgetIconBorder,
        K = o.transparent,
        p = o.background,
        Z = o.highlight,
        O = G.Default,
        L = O.def,
        j = O.widgetRowHeight,
        k = O.removeHTML,
        d = O.drawText,
        U = O.getTextSize,
        H = O.isLeftButton,
        T = O.getWindowInfo,
        v = O.getImage,
        u = O.drawCenterImage,
        a = O.preventDefault,
        F = O.getLogicalPoint,
        V = O.labelFont,
        l = O.labelColor,
        w = O.labelSelectColor,
        h = O.widgetIndent,
        X = O.startDragging,
        e = O.createElement,
        B = O.getClientPoint,
        W = O.scrollBarInteractiveSize,
        P = O.getInternal(),
        m = (P.createView, P.createDiv),
        M = P.createCanvas,
        q = P.createImage,
        r = P.setCanvas,
        g = P.initContext,
        s = P.translateAndScale,
        C = P.isString,
        E = P.drawBorder,
        R = P.getImageWidth,
        n = P.getImageHeight,
        $ = P.fillRect,
        Q = P.layout,
        D = P.formatNumber,
        b = P.addMethod,
        t = P.isH,
        i = O.isTouchable,
        f = Math.round,
        x = "readonly",
        _ = i ? "touchstart" : "mousedown",
        Lq = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        xk = function(b) {
            var G = b.touches[0];
            return G ? G : b.changedTouches[0]
        },
        Oq = function(T, Z) {
            return T.querySelector(Z)
        },
        Ei = function(G, S) {
            var y = O.getLogicalPoint(S, G._canvas || G._view);
            return y.x >= 0 && y.y >= 0 && y.x <= G.getWidth() && y.y <= G.getHeight()
        };
    b(O, {
        textFieldFont: V,
        textFieldColor: l,
        textFieldBorderColor: J,
        textAreaFont: V,
        textAreaColor: l,
        textAreaBorderColor: J,
        radioButtonLabelFont: V,
        radioButtonLabelColor: l,
        radioButtonPressBackground: J,
        checkBoxLabelFont: V,
        checkBoxLabelColor: l,
        checkBoxPressBackground: J,
        buttonLabelFont: V,
        buttonLabelColor: l,
        buttonLabelSelectColor: w,
        buttonBackground: Y,
        buttonBorderColor: J,
        buttonSelectBackground: Z,
        sliderBackground: o.widgetIconBackground,
        sliderLeftBackground: o.widgetIconHighlight,
        sliderThickness: 3,
        sliderPadding: 4,
        sliderButton: q(14, 14, {
            type: "circle",
            rect: [0, 0, 14, 14],
            borderWidth: 1,
            borderColor: c,
            gradient: "linear.northeast",
            gradientColor: o.widgetIconGradient,
            background: Y
        }),
        comboBoxMaxHeight: -1,
        comboBoxLabelFont: V,
        comboBoxLabelColor: l,
        comboBoxLabelSelectColor: w,
        comboBoxShadowColor: K,
        comboBoxBorderColor: J,
        comboBoxBackground: p,
        comboBoxSelectBackground: Z,
        comboBoxDropDownIcon: q(12, 16, {
            type: "shape",
            points: [1, 5, 6, 11, 11, 5],
            borderWidth: 2,
            borderColor: c
        }),
        imageBorderColor: I,
        imageBackground: I,
        formPaneLabelColor: l,
        formPaneLabelFont: V,
        formPaneLabelAlign: "left",
        formPaneLabelVAlign: "middle",
        formPaneHPadding: 8,
        formPaneVPadding: 8,
        formPaneLabelHPadding: 2,
        formPaneLabelVPadding: 0,
        formPaneHGap: 6,
        formPaneVGap: 6
    }, !0);
    var xo = function(R, Q) {
        var t = this;
        (t._view = P.createView(null, t)).appendChild(t._element = e(R, Q)), t.setHeight(j), t.setWidth(80), t.iv()
    };
    L(xo, A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["toolTip"],
        onPropertyChanged: function() {
            this.iv()
        },
        getToolTip: function() {
            return this._toolTip || this.getText()
        },
        getElement: function() {
            return this._element
        },
        getText: function() {
            return this._element.value
        },
        setText: function(p) {
            this._element.value = p
        },
        getValue: function() {
            return this.getText()
        },
        setValue: function(_) {
            this.setText(_)
        },
        getColor: function() {
            return this._element.style.color
        },
        setColor: function(a) {
            this._element.style.color = a
        },
        getBackground: function() {
            return this._element.style.background
        },
        setBackground: function(B) {
            this._element.style.background = B
        },
        getBorder: function() {
            return this._element.style.border
        },
        setBorder: function(x) {
            this._element.style.border = x
        },
        getFont: function() {
            return this._element.style.font
        },
        setFont: function(q) {
            this._element.style.font = q
        },
        isEditable: function() {
            return this._element.hasAttribute(x)
        },
        setEditable: function(d) {
            var p = this._element;
            d ? p.removeAttribute(x) : p.setAttribute(x, !0)
        },
        validateImpl: function() {
            var j = this;
            Q(j._element, 0, 0, j.getWidth(), j.getHeight())
        },
        setFocus: function() {
            return O.setFocus(this._element), this.fireViewEvent("focus"), !0
        }
    }), y.TextField = function() {
        y.TextField.superClass.constructor.call(this, "input", O.textFieldBorderColor), this.setColor(O.textFieldLabelColor), this.setFont(O.textFieldLabelFont)
    }, L(z + "TextField", xo, {
        getType: function() {
            return this._element.getAttribute("type")
        },
        setType: function(N) {
            var Z = this._element,
                L = O.numberListener;
            Z.setAttribute("type", N), Z.removeEventListener("keydown", L, !1), "number" === N && Z.addEventListener("keydown", L, !1)
        }
    }), y.TextArea = function() {
        y.TextArea.superClass.constructor.call(this, "textarea", O.textAreaBorderColor), this.setColor(O.textAreaLabelColor), this.setFont(O.textAreaLabelFont)
    }, L(z + "TextArea", xo, {}), y.Button = function() {
        var $ = this,
            _ = $._view = P.createView(null, $);
        $.setHeight(j), $.setWidth(80), $._canvas = M(_), new sc($), $.iv()
    }, L(z + "Button", A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["groupId", "label", "icon", "iconColor", "orientation", "toolTip", "labelFont", "labelColor", "labelSelectColor", "borderColor", "background", "selectBackground", "togglable", "selected", "pressed", "clickable"],
        _clickable: !0,
        _togglable: !1,
        _selected: !1,
        _pressed: !1,
        _orientation: "h",
        _labelFont: O.buttonLabelFont,
        _labelColor: O.buttonLabelColor,
        _labelSelectColor: O.buttonLabelSelectColor,
        _borderColor: O.buttonBorderColor,
        _background: O.buttonBackground,
        _selectBackground: O.buttonSelectBackground,
        onClicked: function() {},
        onSelectedChanged: function() {},
        onValueChanged: function() {},
        onPropertyChanged: function(z) {
            var o = this,
                O = o._view.parentNode;
            o.iv(), "selected" === z.property && (null != o.getGroupId() && O && O.handleGroupSelectedChanged && O.handleGroupSelectedChanged(o), o.onSelectedChanged(), o.onValueChanged(z.oldValue, z.newValue))
        },
        getToolTip: function() {
            return this._toolTip || this._label
        },
        validateImpl: function() {
            var V = this,
                i = V._canvas,
                B = V.getWidth(),
                j = V.getHeight(),
                F = V._pressed || V._selected,
                o = F ? V._selectBackground : V._background;
            r(i, B, j);
            var M = g(i);
            s(M, 0, 0, 1), M.clearRect(0, 0, B, j), o && $(M, 0, 0, B, j, o), E(M, V._borderColor, 0, 0, B, j);
            var K = V._iconColor,
                I = v(V._icon, K),
                G = R(I),
                D = n(I),
                m = V._label,
                Y = V.getLabelFont(),
                e = F ? V._labelSelectColor : V._labelColor,
                T = null == m ? Lq : U(Y, m),
                O = T.width,
                z = T.height;
            t(V) ? (G && u(M, I, B / 2 - (G + O) / 2 + G / 2, j / 2, V, V, K), O && d(M, m, Y, e, B / 2 - (G + O) / 2 + G, 0, O, j, "center")) : (G && u(M, I, B / 2, j / 2 - (D + z) / 2 + D / 2, V, V, K), O && d(M, m, Y, e, B / 2 - O / 2, j / 2 - (D + z) / 2 + D, O, z, "center")), M.restore()
        }
    });
    var sc = function(V) {
        this.button = V, this.addListeners()
    };
    L(sc, A, {
        ms_listener: 1,
        getView: function() {
            return this.button._view
        },
        handle_mousedown: function(v) {
            H(v) && this.handle_touchstart(v)
        },
        handleWindowMouseMove: function(w) {
            this.handleWindowTouchMove(w)
        },
        handleWindowMouseUp: function(d) {
            this.handleWindowTouchEnd(d)
        },
        handle_touchstart: function(J) {
            a(J), this.button.isClickable() && (X(this, J), this.button.setPressed(!0))
        },
        handleWindowTouchMove: function() {},
        handleWindowTouchEnd: function(V) {
            var C = this,
                e = C.button;
            e.setPressed(!1), Ei(e, V) && (e.isTogglable() && (null != e.getGroupId() ? e.setSelected(!0) : e.setSelected(!e.isSelected())), e.onClicked(V))
        }
    });
    var ym = function() {
        var l = this,
            z = l._view = P.createView(null, l);
        l.setHeight(j), l.setWidth(80), l._canvas = M(z), new nd(l), l.iv()
    };
    L(ym, A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["label", "labelFont", "labelColor", "toolTip", "icon", "iconColor", "selected", "pressed", "pressBackground", "padding"],
        _padding: 0,
        _selected: !1,
        _pressed: !1,
        onClicked: function() {},
        onSelectedChanged: function() {},
        onValueChanged: function() {},
        getValue: function() {
            return this.isSelected()
        },
        setValue: function(D) {
            this.setSelected(D)
        },
        onPropertyChanged: function(t) {
            var z = this;
            z.iv(), "selected" === t.property && (z.onSelectedChanged(), z.onValueChanged(t.oldvalue, t.newValue))
        },
        getToolTip: function() {
            return this._toolTip || this._label
        },
        validateImpl: function() {
            var b = this,
                l = b._canvas,
                _ = b.getWidth(),
                o = b.getHeight(),
                Z = b.getCheckIcon;
            r(l, _, o);
            var x = g(l);
            s(x, 0, 0, 1), x.clearRect(0, 0, _, o);
            var B = b._padding,
                H = b._iconColor,
                i = v(Z ? b.getCheckIcon() : b.getRadioIcon()),
                q = R(i),
                p = n(i);
            b._pressed && (x.fillStyle = b._pressBackground, x.beginPath(), Z ? x.rect(B, o / 2 - p / 2, q, p) : x.arc(B + q / 2, o / 2, Math.min(q, p) / 2, 0, 2 * Math.PI, !0), x.fill()), u(x, i, B + q / 2, o / 2, b, b), B += q + 1, i = v(b.getIcon(), H), q = R(i), u(x, i, B + q / 2, o / 2, b, b, H), B += q, d(x, b._label, b._labelFont, b._labelColor, B, 0, 0, o), x.restore()
        }
    });
    var nd = function(j) {
        this.c = j, this.addListeners()
    };
    L(nd, A, {
        ms_listener: 1,
        getView: function() {
            return this.c._view
        },
        handle_mousedown: function(t) {
            H(t) && this.handle_touchstart(t)
        },
        handleWindowMouseMove: function(W) {
            this.handleWindowTouchMove(W)
        },
        handleWindowMouseUp: function(x) {
            this.handleWindowTouchEnd(x)
        },
        handle_touchstart: function(Q) {
            a(Q), X(this, Q), this.c.setPressed(!0)
        },
        handleWindowTouchMove: function() {},
        handleWindowTouchEnd: function(X) {
            var o = this,
                Y = o.c;
            Y.setPressed(!1), Ei(Y, X) && (Y.handleClick(X), Y.onClicked(X))
        }
    }), y.CheckBox = function() {
        y.CheckBox.superClass.constructor.call(this)
    }, L(z + "CheckBox", ym, {
        _labelFont: O.checkBoxLabelFont,
        _labelColor: O.checkBoxLabelColor,
        _pressBackground: O.checkBoxPressBackground,
        getCheckIcon: function() {
            return this._selected ? "check" : "uncheck"
        },
        handleClick: function() {
            this.setSelected(!this.isSelected())
        }
    }), y.RadioButton = function() {
        y.RadioButton.superClass.constructor.call(this)
    }, L(z + "RadioButton", ym, {
        ms_ac: ["groupId"],
        _pressBackground: O.radioButtonPressBackground,
        _labelFont: O.radioButtonLabelFont,
        _labelColor: O.radioButtonLabelColor,
        getRadioIcon: function() {
            return this._selected ? "radioOn" : "radioOff"
        },
        onPropertyChanged: function(E) {
            var V = this,
                X = V._view.parentNode;
            V.iv(), null != V.getGroupId() && "selected" === E.property && (X && X.handleGroupSelectedChanged && X.handleGroupSelectedChanged(V), V.onSelectedChanged(), V.onValueChanged(E.oldValue, E.newValue))
        },
        handleClick: function() {
            this.setSelected(!0)
        }
    }), y.Slider = function() {
        var R = this,
            m = R._view = P.createView(null, R);
        R.setHeight(j), R.setWidth(80), R._canvas = M(m), new Ar(R), R.iv(), R.enableToolTip()
    }, L(z + "Slider", A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["value", "min", "max", "step", "button", "toolTip", "instant", "thickness", "padding", "background", "leftBackground"],
        _min: 0,
        _max: 100,
        _value: 50,
        _step: I,
        _instant: !0,
        _button: O.sliderButton,
        _thickness: O.sliderThickness,
        _padding: O.sliderPadding,
        _background: O.sliderBackground,
        _leftBackground: O.sliderLeftBackground,
        onPropertyChanged: function(S) {
            var B = this,
                J = S.property;
            ("min" === J || "max" === J || "step" === J) && B.setValue(B._value), B.iv()
        },
        adjustValue: function(z) {
            null == z && (z = 0);
            var U = this,
                X = U._min,
                R = U._max,
                $ = U._step;
            return X > z && (z = X), z > R && (z = R), $ > 0 && (z = Math.floor((z - X) / $) * $ + X), z
        },
        getToolTip: function() {
            return this._toolTip || D(this._value)
        },
        getValue: function() {
            return this._value
        },
        setValue: function(R) {
            var Z = this,
                E = Z._value;
            R = Z.adjustValue(R), E !== R && (Z._value = R, Z.fp("value", E, R), Z.onValueChanged(E, R))
        },
        onValueChanged: function() {},
        onEndValueChanged: function() {},
        drawBackground: function(f, N, P, T, n) {
            $(f, N, P, T, n, this.getBackground())
        },
        drawLeftBackground: function(F, X, W, h, g) {
            var w = this.getLeftBackground();
            w && $(F, X, W, h, g, w)
        },
        drawButton: function(I, U, r, g, W) {
            u(I, v(this._button), U + g / 2, r + W / 2, this, this)
        },
        getButtonWidth: function() {
            var _ = v(this._button);
            return _ ? _.width : 0
        },
        validateImpl: function() {
            var j = this,
                X = j._canvas,
                V = j._min,
                O = j._max,
                d = j._value,
                b = j._padding,
                v = j._thickness,
                F = j.getWidth(),
                P = j.getHeight(),
                q = j.getButtonWidth(),
                z = (P - v) / 2,
                E = q / 2 + (d - V) / (O - V) * (F - 2 * b - q);
            r(X, F, P);
            var _ = g(X);
            s(_, 0, 0, 1), _.clearRect(0, 0, F, P), j.drawBackground(_, b, z, F - 2 * b, v), j.drawLeftBackground(_, b, z, E, v), j.drawButton(_, b + E - q / 2, 0, q, P), _.restore()
        }
    });
    var Ar = function(L) {
        this.slider = L, this.addListeners()
    };
    L(Ar, A, {
        ms_listener: 1,
        getView: function() {
            return this.slider._view
        },
        handle_mousedown: function(R) {
            H(R) && this.handle_touchstart(R)
        },
        handleWindowMouseMove: function(V) {
            this.handleWindowTouchMove(V)
        },
        handleWindowMouseUp: function(h) {
            this.handleWindowTouchEnd(h)
        },
        setValue: function(Z) {
            var p = this.slider,
                U = p.getPadding() + p.getButtonWidth() / 2,
                Y = p.getMin();
            p.setValue(Y + (F(Z, p._canvas).x - U) / (p.getWidth() - 2 * U) * (p.getMax() - Y))
        },
        handle_touchstart: function(U) {
            var t = this;
            a(U), t.setValue(U), X(t, U), O.showToolTip(U, t.slider.getToolTip(U))
        },
        handleWindowTouchMove: function(Z) {
            this.setValue(Z), O.showToolTip(Z, this.slider.getToolTip(Z))
        },
        handleWindowTouchEnd: function(W) {
            this.setValue(W), this.slider.onEndValueChanged(), O.hideToolTip()
        }
    }), y.ComboBox = function() {
        var h = this,
            f = h._view = P.createView(null, h),
            p = h._listView = new y.ListView,
            x = h._canvas = M(f),
            R = p._view,
            Q = p.sm();
        h.setHeight(j), h.setWidth(80), Q.setSelectionMode("single"), p.drawRow = function(V, R, Q, k, S, K, i) {
            h.drawRow(V, R, Q, k, S, K, i)
        }, f.style.display = "inline-block", P.setBorder(f, O.comboBoxBorderColor), R.style.boxShadow = "0px 0px 10px " + O.comboBoxShadowColor, null != O.baseZIndex && (R.style.zIndex = parseInt(O.baseZIndex) + 1 + ""), R.addEventListener("mousemove", function(H) {
            Q.ss(p.getDataAt(H))
        }, !1), R.addEventListener("keydown", function(d) {
            if (P.isEnter(d)) {
                var X = Q.ld();
                X && (h.setValue(X.value), h.close())
            }
            P.isEsc(d) && h.close()
        }, !1), f.addEventListener("keydown", function(l) {
            (P.isDown(l) || P.isUp(l)) && h.open()
        }, !1), p.onDataClicked = function(t) {
            h.setValue(t.value), h.close()
        }, f.addEventListener(_, function(C) {
            if (H(C)) {
                var c = C.target;
                (c === x || c === f) && (a(C), h.toggle())
            }
        }, !1), h._handleWindowClick = function(t) {
            if (H(t)) {
                var V = t.target;
                V === h._input || R.contains(V) || V === f || h.close()
            }
        }, h.iv()
    }, O.def(z + "ComboBox", A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["dropDownIcon", "dropDownWidth", "toolTip", "strict", "indent", "background", "labelFont", "labelColor", "labelSelectColor", "maxHeight", "selectBackground", "value", "values", "labels", "icons", "editable"],
        _strict: !0,
        _editable: !1,
        _maxHeight: O.comboBoxMaxHeight,
        _labelFont: O.comboBoxLabelFont,
        _labelColor: O.comboBoxLabelColor,
        _labelSelectColor: O.comboBoxLabelSelectColor,
        _background: O.comboBoxBackground,
        _dropDownWidth: I,
        _dropDownIcon: O.comboBoxDropDownIcon,
        _selectBackground: O.comboBoxSelectBackground,
        _indent: h,
        getListView: function() {
            return this._listView
        },
        onPropertyChanged: function(a) {
            this.iv(), "value" === a.property && this.onValueChanged(a.oldValue, a.newValue)
        },
        onValueChanged: function() {},
        getToolTip: function() {
            return this._toolTip || this.toLabel(this._value)
        },
        getLabelColor: function(B, O) {
            return O ? this._labelSelectColor : this._labelColor
        },
        isEqual: function(B, n) {
            return this._strict ? B === n : B == n
        },
        toLabel: function(z) {
            var u = this,
                $ = u._values,
                E = u._labels;
            if (E && $ && E.length === $.length)
                for (var Z = 0; Z < $.length; Z++)
                    if (u.isEqual($[Z], z)) return E[Z];
            return null == z ? "" : z + ""
        },
        toIcon: function(Q) {
            var J = this,
                L = J._values,
                o = J._icons;
            if (o && L && o.length === L.length)
                for (var T = 0; T < L.length; T++)
                    if (J.isEqual(L[T], Q)) return o[T];
            return null
        },
        drawValue: function(l, A, S, k, Y, X, q) {
            var K = this,
                h = K._indent,
                w = K.toLabel(A),
                I = v(K.toIcon(A));
            I && (u(l, I, k + h / 2, Y + q / 2), k += h), w && d(l, w, K.getLabelFont(A, S), K.getLabelColor(A, S), k, Y, 0, q)
        },
        drawRow: function(v, I, V, S, f, E, l) {
            var j = this,
                F = I.value,
                A = j._indent;
            V && $(v, S, f, E, l, j._selectBackground), j.drawValue(v, F, V, S, f, E - A, l)
        },
        validateImpl: function() {
            var A = this,
                w = A._canvas,
                x = A._indent,
                Q = A.getWidth(),
                q = A.getHeight(),
                d = Q - x,
                c = A._background || "";
            A._view.style.background = c, A._listView._view.style.background = c, r(w, Q, q);
            var S = g(w);
            s(S, 0, 0, 1), S.clearRect(0, 0, Q, q), u(S, v(A._dropDownIcon), d + x / 2, q / 2, A, A), S.beginPath(), S.rect(0, 0, d, q), S.clip(), A.drawValue(S, A._value, !1, 0, 0, d, q), S.restore()
        },
        isOpened: function() {
            return !!this._listView._view.parentNode
        },
        open: function() {
            var X = this,
                f = X._listView,
                q = f.dm(),
                F = X._values || [],
                u = F.length;
            if (!X.isOpened()) {
                q.clear();
                for (var r = 0; u > r; r++) {
                    var H = new G.Data,
                        c = F[r];
                    H.setName(X.toLabel(c)), H.value = c, q.add(H), X.isEqual(c, X._value) && q.sm().ss(H)
                }
                var x = T(),
                    B = x.left,
                    A = x.top,
                    Y = x.height,
                    y = X._view.getBoundingClientRect(),
                    n = y.left + B,
                    v = y.top + A,
                    t = y.height,
                    V = X.getIndent(),
                    C = X.getWidth(),
                    I = X.getHeight(),
                    M = n + 1,
                    h = v + t,
                    W = X.getDropDownWidth() || C,
                    b = u * I;
                if (X._maxHeight > 0 && (b = Math.min(b, X._maxHeight)), f.setRowHeight(I), h + b > A + Y && (v - A > A + Y - v - t ? (b = Math.min(b, v - A), h = v - b) : b = A + Y - h), X._editable) {
                    var z = X._input = O.createElement("input", X.getSelectBackground(), X.getLabelFont(), X.toLabel(X._value));
                    document.body.appendChild(z), Q(z, n, v + 1, C - V, I), z.addEventListener("keydown", function(q) {
                        P.isEnter(q) ? X.setInputValue(z) : P.isEsc(q) && X.close()
                    }, !1), X.onInputCreated(z)
                }
                document.body.appendChild(f.getView()), Q(f, M, h, W, b), f.setFocus(), G.Default.callLater(function() {
                    S.addEventListener(_, X._handleWindowClick, !1)
                }), X.onOpened && X.onOpened(), P.closePopup(X)
            }
        },
        onInputCreated: function() {},
        setInputValue: function(R) {
            var o = this,
                B = o._labels,
                c = o._values,
                g = R.value;
            if (B)
                for (var s = 0; s < B.length; s++) g === B[s] && (g = c[s]);
            "string" == typeof g && c && c.length && "number" == typeof c[0] && (g = parseFloat(g)), o.setValue(g), o.close()
        },
        close: function() {
            var $ = this;
            $.isOpened() && (k($._listView._view), $._input && (k($._input), delete $._input), S.removeEventListener(_, $._handleWindowClick, !1), $.onClosed && $.onClosed(), O.popup === $ && delete O.popup), $.setFocus()
        },
        toggle: function() {
            var c = this;
            c.isOpened() ? c.close() : c.open()
        }
    }), y.BaseDropDownTemplate = function(j) {
        this._master = j
    }, O.def(z + "BaseDropDownTemplate", A, {
        ms_ac: ["master"],
        getView: function() {},
        onOpened: function() {},
        onClosed: function() {},
        getValue: function() {},
        getWidth: function() {},
        getHeight: function() {}
    }), y.MultiComboBox = function() {
        var f = this,
            e = f._view = P.createView(null, f),
            G = f._canvas = M(e);
        f.setHeight(j), f.setWidth(80), e.style.display = "inline-block", P.setBorder(e, O.comboBoxBorderColor), e.addEventListener("keydown", function(C) {
            (P.isDown(C) || P.isUp(C)) && f.open()
        }, !1), e.addEventListener(_, function(J) {
            if (H(J)) {
                var y = J.target;
                (y === G || y === e) && (a(J), f.toggle())
            }
        }, !1), f._handleWindowClick = function(u) {
            if (H(u)) {
                var X = u.target,
                    $ = f._dropDownComponentInstanceView;
                X === f._input || X === e || $ && $.contains(X) || f.close()
            }
        }, f.iv()
    }, O.def(z + "MultiComboBox", A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["dropDownIcon", "toolTip", "background", "labelFont", "labelColor", "value", "editable", "indent", "dropDownComponent"],
        _editable: !1,
        _background: O.comboBoxBackground,
        _dropDownIcon: O.comboBoxDropDownIcon,
        _indent: h,
        _labelFont: O.comboBoxLabelFont,
        _labelColor: O.comboBoxLabelColor,
        onPropertyChanged: function(y) {
            var g = this;
            g.iv(), "value" === y.property && g.onValueChanged(y.oldValue, y.newValue)
        },
        onValueChanged: function() {},
        getDropDownComponentInstance: function() {
            return this._dropDownComponentInstance
        },
        getToolTip: function() {
            return this._toolTip
        },
        validateImpl: function() {
            var Y = this,
                b = Y._canvas,
                Q = Y._indent,
                E = Y.getWidth(),
                x = Y.getHeight(),
                $ = E - Q,
                L = Y._background || "";
            Y._view.style.background = L, r(b, E, x);
            var T = g(b);
            s(T, 0, 0, 1), T.clearRect(0, 0, E, x), u(T, v(Y._dropDownIcon), $ + Q / 2, x / 2, Y, Y), T.beginPath(), T.rect(0, 0, $, x), T.clip(), this.drawValue(T, 0, 0, $, x), Y._input && Y._input.value !== Y._value && (Y._input.value = null == Y._value ? "" : Y._value), T.restore()
        },
        drawValue: function(E, y, I, M, A) {
            d(E, this._value, this.getLabelFont(), this.getLabelColor(), y + 1, I, 0, A)
        },
        isOpened: function() {
            var d = this,
                K = d._dropDownComponentInstanceView;
            return !!K
        },
        open: function() {
            var f = this;
            if (!f.isOpened()) {
                var N = O.getClass(f._dropDownComponent),
                    w = f._dropDownComponentInstance = new N(f),
                    I = f._dropDownComponentInstanceView = w.getView(),
                    o = T(),
                    D = o.left,
                    Z = o.top,
                    b = o.width,
                    K = o.height,
                    y = f._view.getBoundingClientRect(),
                    Y = y.left + D,
                    L = y.top + Z,
                    v = (y.width, y.height),
                    m = f.getIndent(),
                    E = f.getWidth(),
                    x = f.getHeight(),
                    n = Y,
                    F = L + v,
                    z = w.getWidth() || E,
                    M = w.getHeight();
                if (F + M > Z + K && L - Z > Z + K - L - v && (F = L - M), n + z > D + b && (n -= n + z - D - b), f._editable) {
                    var s = f._input = O.createElement("input", O.comboBoxSelectBackground, f.getLabelFont(), f._value);
                    document.body.appendChild(s), Q(s, Y, L + 1, E - m, x), s.addEventListener("keydown", function(k) {
                        P.isEnter(k) ? (f.setValue(s.value), f.close(!0)) : P.isEsc(k) && f.close(!0)
                    }, !1), f.onInputCreated(s)
                }
                I.style.boxShadow = "0px 0px 10px " + O.toolTipShadowColor, I.style.position = "absolute", null != O.baseZIndex && (I.style.zIndex = parseInt(O.baseZIndex) + 1 + ""), document.body.appendChild(I), I.focus(), Q(w, n, F, z, M), w.onOpened && w.onOpened(f._value), S.addEventListener(_, f._handleWindowClick, !1), f.onOpened && f.onOpened(), P.closePopup(f)
            }
        },
        onInputCreated: function() {},
        close: function(l) {
            var m = this;
            if (m.isOpened()) {
                l || m.setValue(m._dropDownComponentInstance.getValue());
                var Z = m._dropDownComponentInstance,
                    C = m._dropDownComponentInstanceView;
                Z.onClosed && Z.onClosed(), k(C), delete m._dropDownComponentInstanceView, delete m._dropDownComponentInstance, m._input && (k(m._input), delete m._input), S.removeEventListener(_, m._handleWindowClick, !1), m.onClosed && m.onClosed(), O.popup === m && delete O.popup
            }
            m.setFocus()
        },
        toggle: function() {
            var M = this;
            M.isOpened() ? M.close() : M.open()
        }
    }), y.Image = function() {
        var S = this,
            q = S._view = P.createView(null, S);
        q.onmousedown = a, S.setHeight(j), S.setWidth(80), S._canvas = M(q), new Bl(S), S.iv()
    }, L(z + "Image", A, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["icon", "iconColor", "stretch", "toolTip", "borderColor", "background"],
        _borderColor: O.imageBorderColor,
        _background: O.imageBackground,
        _stretch: "centerUniform",
        onClicked: function() {},
        onPropertyChanged: function() {
            this.iv()
        },
        validateImpl: function() {
            var P = this,
                q = P._canvas,
                l = P.getWidth(),
                d = P.getHeight(),
                H = P._iconColor,
                B = v(P._icon, H),
                N = P._background;
            r(q, l, d);
            var j = g(q);
            s(j, 0, 0, 1), j.clearRect(0, 0, l, d), N && $(j, 0, 0, l, d, N), this.drawImage(j, B, 0, 0, l, d, H), E(j, P._borderColor, 0, 0, l, d), j.restore()
        },
        drawImage: function(Y, r, f, d, D, Q, w) {
            r && O.drawStretchImage(Y, r, this._stretch, f, d, D, Q, null, this, w)
        }
    });
    var Bl = function(E) {
        this.image = E, this.addListeners()
    };
    L(Bl, A, {
        ms_listener: 1,
        getView: function() {
            return this.image._view
        },
        handle_mousedown: function(u) {
            H(u) && this.handle_touchstart(u)
        },
        handleWindowMouseMove: function(v) {
            this.handleWindowTouchMove(v)
        },
        handleWindowMouseUp: function(R) {
            this.handleWindowTouchEnd(R)
        },
        handle_touchstart: function(Q) {
            a(Q), X(this, Q)
        },
        handleWindowTouchMove: function() {},
        handleWindowTouchEnd: function(X) {
            var q = this,
                v = q.image;
            Ei(v, X) && v.onClicked(X)
        }
    });
    var Wd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAA2MUlEQVR42uxddYwsafW9jbu7u7sTHIIGDRYsSLAgQYIECbBBggQJEixIsABL0KBBFgm++C6wLMsuLCyysMh7u/vmvan6/fGbntT75sq597tfdfVMTfIyb6qrq3t6+px7zrn3+3rR931PRD39/5f23TrWA7d5jiG3tfzXVZzjOY4ci5yz6p+j52S9rpFzWvzzvretYwjetGOHfV90XTcTwMgEMCDdKRAAZRPA4PdrRgDAa4i89uI/7TzutvIYU1i3jw1vk44Nv5bHtrC6/f/Nzc2eiKjruv7QoUM9EdHy+4EDB/ozzzyzJyL63//+1xMR/eMf/+iJiI455pieiOiII46YCWAmgJkA9jQBbF1kTxKA8WbogOcyGQvQ9/0oEr8S3CECVB5T+t0JOCcC5h0/MwAujx0Gcu625dcQ4Mufl8eG/9/c3OwPHTq0TQAHDx7sNzY2toFPRHTGGWf0+/bt64mITjvttJ6I6C9/+UtPRHTsscf2RERHHnnkTAAzAcwEsKcJYEsyrDUBKEAmmmgIaLypUyyAATSXBfASzNZjm7+HAExI6nOvoQLozgNoTsaXYOe+M//fQQAS2JfnL8G+ubl5GOiXgD906FB/6NCh/uDBgz0R0cbGRr8E/lL279+/v19K/3/+8589EdEpp5zSExEdd9xxPRHRUUcdNRPATAAzAexpAti6yKQJoPiDjRUK1gRLGRaAFDC7JXzEIoAEAgF56+/YeYNR7jgD4A6Q8R0I9ijQWVnPhXoc2IeksAT+EPRL2b8kgIMHD24TwDDwO+OMM7YJ4D//+U9PRPSvf/2rJyL661//2hMRnXDCCT0R0dFHHz0TwEwAMwHsaQLYCg8mQQBc62SVbUCgZaQBncBwK2wBPABVQjyqIQDNykikA4CdO4+kv8nwcRRQdxGgW8Dnji0BrbXwSgIoQ77hv6HsX4Z+ZfC3JIDTTz+9JyLat29f/9///vewEPBvf/tbT0R00kknbYeBiy3vMDoBFGBf2RyAAvKqLoBwXVgBgEk5RVN6SxE4byck3xAqdYf6deFcjgBIOgclAAv0HAmU4B+CfJjqD8Feev6SAIZVf0gAGxsbhxHAsvIvCWD//v07CGA5B3DyySf3RETHH3/8TAAzAcwEsKcJYEs6NCcAA/DNCQCcACNvBuAAOmIBzES+AcDJe3/OuiDgHrxear6hSHqVADRPX5xDUeAjX6Wn58A/7O8P0/6yz1/6/iEBLJP/IQEsv+/bt2+7C7AkgLIbcOKJJ84EMBPATAB7mgC27tCMAJg/+CiTgAmzAR1wPTTtJ0fghyT2kk0gFLCWZTACPArKe5EABaCTJPU1AhBkfqck94dJdgn03PFS8g/BLwV9XOA3nOcvgW8RwJlnnrkjBBzOASy7AUsCWIaBJ598cr/YukM6AQxeTKTaVxOAAFCqUAyeQSAC7+sehFF+vyxPT2BF74zhG2TQRgP7YedJIOa8vkQABWi7qL8nQwYMSaD0+xIBDBfySIn/EvwlASz9/1ABaASwzAKW7cBlFnDKKafMBDATwEwAe5oA9u/f34IAOOmfTgAMKDLtAtQF8FgDBezktQCAR+9rJD+weKbzgFsBcOfo2XcCyMvjxAC8A8Fuevyyn89Jf40AuBFfiQCGsn+JrYMHD/YHDhzY7gIMLcBwEGi5GKjsBgytwGLrpCwCoGJyL50AsqYC0XXhxv086/57JynAakTy+MbATemzzfsbP/dAmAcpAG2YRzgH9fdVwJcqfkkIXNBXgr9cy48QwBLwQxUgEcDpp5++TQBLJfDvf/97hxJYbN2YQQA1gZ9JAAapZACeAiDunI8BLYfdAgV5JggFRUDo+QYBkEUAQMBHgrTvkEpvSHyEALqyikcSfqnaD8lgON47HO0dkoDW81/+/+DBg9vHNjY2DrMAw6W/3Cjw6aef3m+peyrDwCURnHrqqTMBzAQwE8CeJoAtf1BLAOSY44cJoCCUUduBYAgI5QfAhhZuC6D18Z2Ap4jkZ1p1LAFE5L4S6nWatDdkf6e19TQ2sFp9mvTnlvcOCWBoATgCGFoAbvlvSQDDMHBJAGUWMLQCiy1WCBGAkPRXE4BjTDitIwCu6CNgIQ9EHoFFNFQR4pGUCRihHinJPBTwAeFe5xjP7TQFwO2rt/xv13Wdp+Jrq/g40GvDPqUK4BTAcIefof8vx39L/y8pgDPOOKMfLgzilMBpp502E8BMADMB7GkC2JIDUQtAxnp9NwGAOUJaW9BYDEQVUp/QxN/KDsAx2z4AcHYOQEjsO2MnnQ7o26OtPY4UiOsCDOU96bvydFG/PyQDRP5z037cWn9p7Hdzc3Mb/JIFKG1AaQE4AuCswGKrNxghAKnXHyIA59xAX9MaNABHnv0AhOzDu6UVOkOvrb6DB3PACq6O7Ar3J40ANEKw2n0l0IeFp6zuXIuv20KqJ/njKn4526+BnwP98Jg298+1AbVBoJIIhgRQZgFDJbDY6gmujACUiUHvIFAN8Mkr44194z33tToD5JyzJ6dkJ5AQyoU8kLwfAtWyAMD3zurpS/39rkzyKib8pN18pGEfKQAsLYAWAh46dGiHBRjOAQztwJIAhkNBw+/DCcHF1lQQTAAMYMMEAIDf6hDUAJ8CQz7k3KTSzAyELa3NoRvOo1uTeca4bYcM9QgKgEB/Xz5niQA6YZutDkn4uRYfRwAaGXDg5yq/tthH2uKLIwEuA4goAI4ANCUwE8BMADMB7GUCOPXUU70WwBr3hQjA0eOnROAT+Xv5pJ0jPIZrU0uyt7k21wtoHl4byy1DQGvprdbjLy0ZRxrIgM/Q0zPHd8z5D/w9C+zhOeguPlbgZ438cgt+pIU/5RLgYQjIdQG4HYGGNmBpC8o9AjgrsNhaGTQqATiTfq1D0AL4ntu9qwHZdqNQbcnKCQKTegTO6ZM1xCNdT1qko6T4UAbApf1DZRCd60dm/L1tPykDGJLAEOwlGXAKYJgBcAQwVAESAXBKYPH3v/8dIoBCrsMbgoCBHzoKnNIRQMJAAMSkLNvthOdv7ggEjvmSUtG9KT4ZoR+sACx5z230oZECI+c7AeSdFOhxIeASlJ7kHyUArvXHyX9uDmC49JcjgNICDENBjgC48eDh93379vWLrd1BEAVAYPVGlwp7CICc1ZqieYAxtkseSW9UbXE5LMnbX8NzAECbDvL0WgsPHN9V/X4p6yNpP9MG5IZ4OmRZr+b5OSKQ/g09fkkA5e4/ZReA2xOgHAuWCGBoBbjx4FIJzAQwE8BMAHuZALY+LWQMAnAN+4AdAjgYREhHSPgJHaZR1tZL3t5M38GEvmaUl1BC0Pr+noEeLfArp/aEDIAUeS+BvEO37/as+NMIoBwF5mYBhkNAZRZQjgKXHYFhBlCuECyHgrjv+/fv7xdbO4S2JoDQJiGI7w+An8g31GNtwkHA5hyk+PSOeY0sMIdCPmSQZ/hclZSfpLagFvoJO/N2UluPaeftCPu2wNhZm3hqXcDyk3zQ1F8bACrHfTklYE0ClmQgEYA1FagpgcXWZ4arwDd6/y0IgBzAbgF8ArbEstp9hFoAZScdstbaAxWcEEJAb+eur4z5dgjYy4ouzPaTlPYvbYSR8Hdar1/bzlsL/6T2H9cGLNf/W4uBlmAvQ8Al+LnlwdxMALdOYJsA/vznP/eByu8hAOTDPYmcHwbaAPzISj8CvDqR/hl25Ozfcy061/r8FoAvF/Ewt5sWQBjuIWn/vjLtl8Z8rQygbPFx1d4a9+X2/Surv7YACF0LMMwENAXAbRKiLRRafl9sfUzQVAiAHF6dorZAez5CCEiGN0d8PSkWgJwBn7hPPxrqgYAnadUeZzkifp9byGMN/KBDPkUfv4t6fyT84zb+4Db+LBcDDfcD1AiAywM4AtCygOGU4DYB/OlPf2pFAJ7EX0v6yajCMDlYz4WT8cDUXg/6etYCKPKelIDPSv1Jq+CRCl++HuAATweEe6IF0IDuXdvf/f+XutxXG/m1PuWnlPza1t/SYiBtFJjLA8q5AIkANCswE8BMADMB7GUC+OMf/7hqAiBj3p4agJ8cSb/2GB1ABlpSz12DLH8vLa31LNbhCMGzlBcA+477cD1/oYdvAr2cA/Au70W3946k/1zwF10MVNoAjgDKluCQCDQCOPPMM/vFSSed1IIAPJ7eGvShRPDDYaDQBTArOpIBWEoD8O9I2y9CCCS07KztuUjYsJNVDZIqKIlCGvhhAjwzBNzc3OyYXMDsACAkwO36uySBLAIolYClADgC4IhgceKJJzYhAHDoBwE3jQR+Amb0kVRfSu09FkBbukvKYh7StuNySv7emgOwugDcqj5tjp+Y/fsKMHeSvLdCwCUBoOGfteHH8tol+KUhIIkAyjBQIoBSCUgKACGAIREs/vCHP6j7/Qk9edJSfwOU5FjkY9mDHvDpLmLg9vVDJD54jmUBpBYf2xo02nraqC5Zi3kckp/IuTe/RBJWvz/6tQU0dhLQkv2W70fmALQcoFwZWE4HclOB0mhwSQBDEhAJ4IQTTlgZAQDDPqY98ILfmwUI4NMyAAI27OwNgKtDPsbqPIooAFTyS+cL4O+0DT2s7bwEC0CcZeB6+8hKP236T/uI7+U5ZfAXIQBpb4BSAXA2gNsrQFohWG4hduDAgX7x+9//Pp0AgKk/Avr11ihwDfhNYghkAKR4eMgCAIEeaWvtEUvAKQAr5VckPymZgLaDz44pPmnkV7IAXI9fW+67fBxE9ktKQLIEXPpfzgGU8wDSZODQAgzVAacApM1CUAVw4MCBfnH88cdnEYBn7NcaDoJUBJDSeyS/CmJE0ittPJcFQEhBaQOStQOvJOFrJD8BH8wphHidNduvzfxbGcAAsJ0k+1Hvr9kBiQTKKs99LsDQ/0sWgAsEue3CNALgpgUXv/vd78YkAMnTE+GfBai2DA0Zj4LfXA2Y+bNGLFy1J/0jtBFPT9pkH5rySwQhhICELPPN8v3MOG+Hen8O6JIaQOYArFFgiwRKyc+tE+AUwNAycC3CAwcO9IvjjjsujQDAlYLVBOABv3QbSApiq1Dp4Us7+LgsgBUCGltycRLfrOgWwC1wI2v3pbFfYY+/kgU6YQPPLrLTj7XbjzYCLJEAB3iu6i/PHY4CczbAWiFYkkO5bRinAA4jgN/+9rdjEQAyG2CSgzYsFFAF5Ez2SWjPkRHimRZAauFx1ZeMTTURgBP4MVxa6GdZAI40ymEhrgsgbfAh9fuV4yYJWCv/SqCXSoBrA5YgL/cCkHIBrhvgJQBNAbAE8Jvf/CaDACTP7iEAMsZ1CQRlLfjJ2OzDI+VR/45UeykEhAEe8fQaQShLfYmMT+yJyn7aud13r80AlBkANwhkDf9o3h8J/7gdgbghIG2nYE9HAFUAGxsb/eLXv/71GASAhHoawN0g9xw3knxCOgXaKK9mGXrsQzWRyi8NAkFtPkQBGF0B5P/cuv3OI/Wlpb5S1R8M7HTcUmAN7Ijvl1qAyG5AUmeA2x0oQgCWAtjY2OgXxx57bAoBCJ4aIQDSQKbcpqoCJ/jhJF8BNClr85H9AAic0+cqPiGpv9DmI6TtZ435agl/uZintADF9QmR+lwbUFrjXy4Gsj7nTwoBEd/v3RKsDAK14SCODLiWoKQAypxgY2OjXxxzzDGalycj8U8lgIg1qCEFZFhImPVXVwx6pT5Q4XdkB8p6fDdBIADnwEz6J/eaE30Z6f+QMEpgW95f6/1LAaClBLgtwdAVgdZ0oJcASgXAEsCvfvWr3qj8asvPSO25Ck7kC/8IAGILRSAl/NEMgKQ98YxuAUn77VmA1lL8qAIwdvYhQ/J30nBPWdHLzoC1sk+bAVhaAKn1Z5EAYgesOQCOBLgwUJsNsDYM4ZYMl+sCSiJY/PKXvxyFACyFoIV/Rr++lSLoGGlvZQCkLN6RrtlZVqEEq7fiI5IeUQAlcLmMQFMJmtznbIFD6qsZwHIOQFv7L7UDUe8v2YES5FxLMIMANAWgKYHFL37xi1URgNbeM2+rJQXrmNCykzoF8H0D4V70mAhgrwIoW3Pefj8q/w1rQNLIL0cMZa9/GAJKg0C1JGBtCIIMBWURABcMsgTw85//vBUBSAGeRQCIZehRUoiAXwEnafP21n1BuW9ZgCYVH1nYwygAMwTMsABoBsCl/Jzk1/r/mveX8oAyAOTmAKxdgrnVgOVHhnHLhTULwO0lUA4LLX72s59VE4Di3QlM9jWQUxT86LkCIUjyXvX9EmCNxJ+cY71wxbcGe5g2H6sIrNCP+T8SAnLXVS2A0AYMZwBeEkCXAy+PS1Wf2zCUmw1ACcD6HAFOARw8eLBf/PSnP40SgOXRIwQAKQalImeoBKvFJ1Z0w+tD0t2a/BNmBdSKD1R31zmKAiBN6kvnIPKfI4bhkA8n/4uq3WmAzyKB8kNBJe+PEkBpA6QxYe4ciAB+8pOfrIwAHCBvAnRDDXBbdYkZAODpCZH7WsAHVHhXxfcoAmNhD3F7Apa2YOjVqdjTP2IBhtfVpP8wA5BSfy7xt45p4R/XApTUgZcAuJWCXBYgWYDDCODoo49uQQCkLOwxQV5BAK5jFiEIIHZ5fQ+QPdXb09MP+H3PvH848BOIBEr7NQsg7Adgtv6iJCBtCiIRgDYfwJFACXKEALjVgywB/PjHP25KAOBkHyVU/1RCALoEkDJwSH8o0OMqtpHqmz97FAB3u7HdF0kr/xzz/ywxSNt8ax0Ba/6fk/6o95esQGkDuAlBZDpQWyocJoAf/ehHUyUAAroC0LGIGlB29RElvdEdIG2k1yPvM1RAjRKwqjwxG3gg1Z6Uz/orx3k5y6ApgdoQ0EsC2iCQhwBqFIBkAYbHFz/84Q/HIoCILVD3BwBbh1FCkD7cw5TvUrYgrerjEn5DOXCqQGoLWim/WeGFkK/TWn7ImK9AEvA+/5K/55TAcFtwj/TXSEAiAGtVYGkRkOlAjgC429wE8IMf/CBMAMLtVn+fHNVfXUfgALuLEIwq7skAKDDQQ4C8N7ODrLQf/D8J+/VxNsO91U8RKpK3BbgkCe8QUGkREBVQ5gHWTABKAFxLkFMAQ1KQLMBhBPD973/fSwDW8l8PASAyn6LARu5ndRUcOQHc2/cm/MD3HXZE2rEH8fxKVwGu+N6ev0UMnFpAMgDPJiAS4D0k4CUAaTiIWxTE5QDc4iBuclAkgO9973tNCEACuEMVqLsDSysLteTeSRCdIyewwj5SZvphRWCFesbobzj1N9p+pE35ccA2ugImKTAgZ9cCWBkAWvWtWQBrDkDbHozbOFQbD+YUQHmbRQBDZbD47ne/OzUCkEDtArvl3y2CUGR8NOyDvD0Ibtd3bbafk+ekfES3p+KXpMAFfqj8L0EMhoNmBqB1AqJWoAQ3FwpKW4ZrBKApgOFtLgL4zne+k0UAkMS3sgUBoC5gg+cgZOBSCRG5j1R8ZYMR1Oez1/SEfAHw77iGtczX0+7TiEHb9UfaCIQjBmtBkKUEhr1+qTOAkIEUCErqALUAhw4d6hff/va3WxMAUtFJ2ywkG+zWNSIqAcwGTLnPVXwkA/BYAoBAIMnvSf2Lpb+EzAFYn/bDVXdrxR+zkhDOANAuANfus1qDHNiH9x9Wee1zBd0E8K1vfWs0AtBIQQJlBNxgn9/6uRMAbIaFyn1NsAOgF+/nSPulUJCy5D4y5CPdjwMr2gXgOgBbIDMzANQOZKkACezaXEAJfEkBSF2CHQTwzW9+M50AgBafp9JTA3AjP3fGDICmEqxsQMwFwGouenwE4EC7T7QI0pQfAm5plLfsDGheX+r3a/J/OCughXycMvBUfe5nZBDIagtqtkBTANycwA4COOqoo0IEoCzkcRFA0CqghFD1M6ISgFSf0Hl+qQVnzQpYAOem9DRJb1X/Us6T8AEfEoAlErC8vtTv57oAHvkvSX1U+nsIQNsrUDtmKYAwAXzjG9/oDeBb03+k+Hmo0hvApjHAbvT5iQOqMMVHtHPPfms60AX2SCZQhnxaus91CZDlvsKWYBaAOwTo0rLf8hrWp/5qfh8ZArJIAWkDchUfVQEc4LU1AxxhDG9ffP3rX58kAaCzAkk/k7Igx60ShEEgCMiIBbDOQTMAowsgen+NICSVgFqAsqJrZIHKf2sOwLICSCvQagNqk4AeFZBOAF/72tdGIYCg/zf3HQQn/dzkIIEYsQho4IfaCEa+WwuEzD6/FvZ5U3/OEjj6++V1d/h1Tf4jU4DLayIhoKcViPxctvq8OUB5njQUVNqDUuqXt20TwFe/+tVVEoC4aAghALSaV5KFSCJoX98a+kEUgZH4Q5kAmgFYikGa8iP+M/5I2vlHsgBcB0BrEXKrAcuf0eQftQIeAuCsgTYJGFEA0qIhkwC+8pWvpBEAA3JzAMgI+pqBH034kTagNQykVG3EFpjncM/P8PyQBdBCP6vnbw3+KOeQtMNPtAPgzQA8SgDJArS1ARwBSOPBHOCt80wC+PKXvzwlArCqfybArXM77Tw07beIBSEFxDp4Aa8FgFaFB7sA7nM8g0CoBUAyALT9F+kKlDKf6wxIE4HckJCHALiJwR0E8KUvfamGACyZHxoZBo65AO+cBZDmANC+vhQgQtUesAVIq4+Aa7gtALKwByUNNO3npL63DVjmCh47gPh/5DZN+mukUB5DOgQuAvjiF7/YnACkVN+zVBioxjAZKLKdkOrOVW+rqjvS/JoMAAa8NgRkDfpohICeY1kADsTCKDELbjQHsOR9DSFY3QDpmLQ+wAoNpQxA6gJsbm72iy984QtTIQAp6afa6o8C3vLwXqlvZAYiKZQJvpILuAHPgdlo/UGEABCG2wJofl87bg0DaZVf8/+RQJCr9lqHQMsDvAoAIoDPf/7zqyAA2OujE4EBwKthoiTjI+Gfs9qbLUCUEIy2oKYm1LX8UsLPXMNc4osSBUoCZW7ArQWwpgFrQc8RAKcMrOlAzhakE8DnPvc5FwEwtxHZHxWOhobiHgOgn4cBrrT4kDYgZBUiYEeqO9mbd5gS36r4VsKPZgCIJUASf+1cLfzTdv1BQ0EtBEQCQHSlIPez1SasJoDPfvazCAGQktpbBIBUewuchFZ7DbDWbQjoAElfBX5krBcFPO38rD4t9Rfn/qU+vjLXb6mIkNxvTQLaYJAEeu02qQOg2QBrWlDqBGiZgdQG3Nzc7Bef+cxnUghAGfSpkv/Biu8GPDIH4CAIdo2A0vKDq721+MdK9RWf3kvLea05AMliIICXcgEh0OskgFskoM0BSJ2BiArQhoG45B9VBdKSYanaW+pgmwA+/elPr5IAzKS/RuJXdA6IC+esdN5b2aVjUk9fkf9aBqCGeBKgtfX9AnBVwAOrASkSAHLEILUBtcqvrRFAB4BKcuC8PtINQABvWQCYAD71qU9FCUACb5gAgIVCZHl6J8hDKb9WeZUpQDcheJUDF9JlSH7JvxuEYI0Cp5EA0gHwyP9MFSCFfdqMgPdnbxZwGAF88pOfnCoBIFOCIYlvKQkj3LPAK60RkBQDl3izbUArJ/AM8hgZAmmf5GsMBhG6PLiszBqZcBuFeEkADf60ToBH+lvdAGkgyPtzFQF84hOfSCEA0B6gYLcIIAvwhPp41NN75T+iKhAbYN1HquDSMc0yIOsAaqq91R1ggKouBvJYgAwSGDwmRADIeLB0ewlslBS2CeDII48cnQACXr8G8CEyMMBNWs9fqNaqlPf4eaSCa9eIhoCagkDAjdgEJOyT1gJI1d9LAN6hIFT+W14fUQXpBPDxj398txMA/H/Q3yO3d+h90DagYBMIVQDKaj9CR321jEADsjIZCCsCyS7UWAAPCSCg51QD19fXyEFaDCTdLoFd2kdgBwF87GMfa0oAyGgvEPZF5b87AHT4f1UloIThlfuoxHcqBBOsZKz1jygCtKprtkDJEapJoAR1CwXgDQbTCeCjH/3oqgnAAnhqxY8QgEQszmQfkvscGJWVgGZbD/X0jtV/JuizLAD3aT/aDMDw76MNA0WDP2voRyIEZA6gxgJYYOeIYpsAPvKRj1QTgGNuQOwMOOV/OuAd4HbdXlHtYb8PAN7MBDTPX0sIFklIQOfOy7IAFgl4QsDyeE0OYAWD6QTw4Q9/OEMBSFuEhQmAex7Bil+TDViEgXQK3G1A7xyAlehbmUBU0kfmABAFIHn9DAvgAX6t/C8JB8kBLFugKQMJ7CoBfOhDH5oSAXjbhtDtSMWPWgDQPiByvpcAbVR8M8SzEn6gNQj3/bPOKcHn6QJELECkLYiQgdUG9HYGIgTAKYVtAvjgBz/oIgCwgpMCADM/MAjAI/mj3QC1ukvThlzFdqb96voAS5JrJOKxCAAZWIRjZgDeToBV6TXvP7xvRgiIjAtHBoGQzgBiIVwE8IEPfGA0AkDlvjMkdEn+YDfAZRGEUWSznYck/GDFhz2/BHAt9UcUgTYKrJ1TAh3pAqCrAT0tQMTne7oAHnVg+XxtnYGbAN7//vdDBFBUb2jcFyELcMkvZVT8LPB7qrOVDWgKApkDqJH8VoXXUn6LELhzpD39EKsgEQN3f8nPR32/RAhWRwBtAyKgtkLD0t9r3YPDCOB973ufRgAkyHeJAMixNgBp99EIFT8aAGphH5ruk8ffWxIfCQI9cwARSxDJALykwHUNpJ2A0CDQsgLeGQFEBXhyAWkmQCMAjRS2CeC9733v1AgAagNGgj3LaiiJfZU9AG4zfwZzgkjolwJ6zt9HSUCT8qjMZ8DZocCPVH6NDFCgo8GgpQhcBPCe97xnLAKAg0EjT6gBtes+EbWAZAOIgrDICCGKBgoAHgJC24DacA8a+Ennah2ADOCjZOAlACT4SyOAd7/73TUEQEDF1gJBKxeA5gESyQGt4GQRRI3cBxSBWfm1Pr9GAMjt1vNABn8ybAHSBdBUglcRWIM/SBfAsgdS68+jCDRS2EEA73rXu5oQgCfwA4FKTskfAT1p6bwU9oEdgCq1oFVzi1g8qb9V9aNS3lIAFtClqUEtHNTOiSoCdEioZg7AIoooAXCKYPHOd75z8gSQWNVd54FkYc0QuAJD8GerC9BUASA/Z5ACA6jOU/2j4R9ynmcMWBsi8hAAaglcBPCOd7xjZQQA5AQehZBODppCAGcBTMIoz9XAu2oFAIaGbpJA/L9nBgDpAGiZgQZyz0QgB1YrH9AWAyH3cRPA29/+9moCAGYA4FzAGB12AbuGHJBrOio6GhiGFIFlDzIUQJbsl6S9Vf29rUCODFDgW4GfJwdABoA8gaGWCZTghgjgbW97WxYBaOEeQgBu+R8AeFUYaIWN6H0tC1GCEanwqDpwEACaC8BgR2wCV80R8HPHpSEgr+z3dgRQGxAlAG3Bj5sA3vrWt0IEAE4J9o7zvQSQBmxnBoAsBqKIAkDzAvR+no5BMAT0KIw+4uuRxUBWDqBN+EWAj4aAlg0ob/d0BlACsGzBDgJ4y1ve0oIA4LUAyBxAQ8lPaGIP3I62Dc3zWyqCWgWQXfERj1+TA0RagN6w0OvzvcSAjPaGCeDNb35zEwJIsgXmz7W3IQEgB1QORFpo5+gOqLMEEjmhQWFGLx8hpYi019J+73EkB6iV/1oWYLUDvXLfqw5gAnjTm97UmgDMxN+q6p5BIQvYzvuHLECWAsgghAwCQKt5+TtZQR7yf8nvIx7fYwFqLQHi86M5QFMCeOMb3xglAETmo5OB6pSfEcK5q78y2GPOACAWwasArNYhGihGb0MB7VEIHrAjuYA08FNrAbSugOX7kXO8t0cIQBsW0iYBu67rF294wxtGIQADsN51AlV5AEIoEbvgrfaadPcoAo8l8PT1EQVQQwLWdb3VH1UBHuBbvt9SA1Yb0GMVmhDA61//+skSQFT+A5XbJBQD9DVdADLSenEDEEsRIIBW2oJhBTAG2LUcQTruVQFopZeGhSRyQEErEUFTAnjd615XTQBGcu8CPJIxOCq7xw5ArT9AlsP5AKIAED9vtAWRFiFlZQLRc6R0Hxn0QS2AFhBGqj+aDUSCQUklICPCGuB3EMBrX/vaTAKIen54DqCysquEELUAwPivSwGAawHM0V5vhUfkvIdQkKqOhICekLAW+AgpeMJALQfwBnqWIggRwGte85pJEYBjDiAjBIyC3lXlrSAPHejRAKtZAqSiezMBjy1AicUa+tE6C1p7D80DsgBv5QCTIoBXv/rVTQjAOfQD5QCeKu9sD3o9PgW7AJ5lwuTJCSwFgrQFUfmOXB+t4oAVMecAkCDQA3RPu7DW/1tqoQb0EAG86lWvGoMAIFKIhITe9p5TDZjXQecAAgrAmwFAkt5QEWR1ChwZAjSgg1zLAno0APQC25sJWP4/ag1SCeCVr3zlqgjA9P81U4JZwWGWBUABD2YC7k6C1hVACAFpA6LARlp7Uthn2QVk0q9l9UcJQLt9VAJ4xSteMQoB1Mr/JAKAicK6DjhIlBICIpYAmfTzAjjSBkQeA5n591b6rDZgLeCt2X50EEg7L5UAXv7yl6cTQEIA2LQLgBBFZIjISQAhW4AAXpv0qyGEmgDQe0wK+1BbgFyvBugelYAEhJZqaEYARxxxhEkAFbK/KQE0Ar27VejNBoIpP0VUg8MyhFt2y8e3QOu5pnUtTwjYkgTQQR7PbegsQAoBvOxlL7O2+5oMAWQDviYDSLAALlXgBXyk7ZdJCJnV3hrbzcoA9iQBvPSlL7U+/stz29qRQE3r0CPhazoBFnjRCh0BtLdrgI76OrsJbgLRZgDGVAHoiK8nALTyAc9ti5e85CW7kgBaZACRNqB0TccUIKoK3JI9s8JnZAA1XYAs+d+CADy3jU4AL37xiydLAN4FRRPIANzWIFMBtA79FFWTShLazD/39/Z0ARDwoud5z0HBjnYAJEvgIoAXvehFkyEAYw5grKpPY1iAMRRAtsRvnQEgjx3x/9xjeIBe4/295OAhACkfcBHAC1/4wikpgCZdAI+SCGQA3pFfK82PLBYSz6us8OFqr2UA0cAPqfJZAWCmHfCQg6cFmEIAL3jBC1ZFAJDHDxJAdQiY2AakCJg9FR2wCeE24JgWQQJrVhsw43gWASDyfRQCeP7znz8GAUSmA60hIxeAvWBHyMSz7gBQBa4WHwKujAruaU16Jv1QcrGqu5UZaOFiSxWQ1QbUWoApBPC85z2vCQEg5IDahGAbMKQcWlkAjw1wnCMCyXvNqOevIBRTAdSQghUARkO/mjZghAAY3EEbgKIB4eK5z33upAigog0YBjrQCSDUv3usgWfoBwUXME1oWpFMie8J8RBl4SUHbxuwZRcAVQejEsBznvOcTAKgimrvnQNokgmgHhyZ7vP6+iRVUNUViAI8iyAkwEYUg6QCWlV9L0nUBIFpBPDsZz+7GuRO6R6dA8iS/XBegPTaK6yBFgBC8wYVoaF4/yxL4AnnPAoAlfw1bUCvtNeugwaA1n08oHYRwLOe9azJEkANqL32wRPQBZJ+FewWUUQqulMtNK34NQoA+B3VQSD09ighoPefLAE885nPHIUAoqFfNqiz2oUev95SFTjBZXr81gCX7oMGe1FpX1P1W3l+T8uvGQE84xnPiBKA2fcPEIAFZFe7r5I43ITiyQEig0A1xIGQSkQBeFp8VlW3ruVN/1vZAG8LMavSIyRh3W8HATz96U9PJwCP3EdAG630tbdFCMR7O2I9UPVRayFqKjxCUjX+3ns+EhR6QR+xAch9ka6ARw24COBpT3vaqggg1BqsWDzUZGbAygG80h21AZ7FQBG7UuPfo77eqwAiFkADNjIIVHM+mu6PSgBPfepTW1iA8CiwJd29QA5YAjV5j+QGrc+LpvgtFUHG91pV4LEAXu+Pnu8hBaQtmE4AT3nKU+CgD/X6qNz3EEAUyFGFoFUIgCQgzx4Ft1f2RwBrVVmAvEIkIaX2VrW3/l7SNWttACLvI9OBKEkgeYBKAE9+8pNTCAAJ7oKtwWaVvsbje8BpXSOgDFSAZ1VoMJcwq2skO0BTeW5DkUhA2JIQao97KrqbAJ70pCeNQQBVnYGa9QS1aiFyTg1ZBOV/9f2m8t2q6N62XSTtryEHL9AjIE8lgCc+8YmTIwAvSbQgiNpzkGplWY0sUE+VFCSwe1QBch+kE5AFem8LL6PKW3mASgBPeMITJk8AY6mAmsGh4LyAS8q3BHWD66m7/XjAjgDOE+plAxzp90+WAB7/+Mc3IYBAoJdqAyIEgVTnyAwAWKVcQIkoiWxw1/7sIY4oQSA5QQTgnvt4A0LteDoBPO5xj6shABXk4GCPtzNQFe6hZIKQhvacssDurcxoRyAD4C0UgTfs81gA6/2iEYi3tedpCXoIA70NJoDHPvaxYxFAWOJ7gd1AEUCVxev/nQB2DSUlANZ9bU9aHyAw8gwC1YA+UvE1VeslAM0KpBPAYx7zmKkRAGIDqqo8ShaB9Qhitc2szJGcwUMGmRU/8jiolK+1AICCVO0CYhMQ4lgpATz60Y+2pv1U4FYEfu7zgp0B83YnuCHVkK0MvMDKygVqCCTL60fDPi9JoKCPLvypbflZtgEhjx0E8KhHPaopASCB3wjtQVfGYFVxtIKjdqKmo5AFSM9zQEK07OdZYwG852UoAg/gUf/fhAAe+chHjkYAnmAwqgKQP6LDFkDneRVEVsX3kEkrwmh5jre6o6BGgFkL+sggD0oMqQTwiEc8wkUAXmmP+v1auzCmYkAJxvtmz5T/LUK4lqD39vi9o7q1FT/aOWihDKLtP5YAHv7wh0+GAFC7EPHyUfUQURnewaMEW+FuPdZI8QhBLN94kftFB3miGUCG5I/Iem/FTyGAhz3sYdUEgILae67XBnhVQCD8g0BdSRpmMNjaayO5g0ea15CGJzT0ALkG0DU9/iwCsM6FCeChD31oCwJokgNkADxDQURajDVTiRlzBTUE0koReCt6TZVvCXhPWp8V+CF5AEQAD3nIQ1ZNAK4ZgWCY18xC1N4nmjV4r9tCIbSS7pHXzwJmBgFEp/4iLb0MAuBUQXnu4sEPfvAkCKB2n4EGKgA+N7OqV2YHTQgiI8hrcQz1/xkZQGYOkJH4pxHAgx70oF1NADUkEG0zZgI5IwMAws10S9DiWG2V9xCFR8qvNQE88IEPnIoFGEUFZFiIaIiVUW3JGJNeRQaQ/RgRoCNyO6viZ4N/pQTwgAc8IIUAlPvDrBftJGTZAm+y7OlKZGcG2cST5cVbADpT1qPArAV8q7Tfk/hDBHD/+9+/KQFUtAdhFRBRDhXbklWHjLWLljIAClTwUYAcBb8n6bcyBMd7o7oLMDkCuN/97hcigGxZX2kDqrMB5+KiKnnuqdqtwTTGtTOu7+kc1CiF1gk/AtSa890EcN/73ndlBOC1AcGKHrEFYRLw7IBUU40zAZ9FCJm5AbKkNgr+7BDQM5HnHeBpTgD3uc99xiQAdy6AVvcxbEHgvqF8IfIYHkC3vt3z+yELaYKvi1viR+S+RyVkhIPpBHDve98bIYBoJ8BVkTNbhLWDRoGPMauW9VGSsFTDKggBSeIzCASR+GhOgEr8qNz3rt5Dge3x/zsI4F73ulcaAUTDPUT2ZGQDyaog5PlrAshWnjvTt7eo5J5MYFXV3ivdA4UPquhuArjnPe+5CgJwdwSSRoenYg1GIYSWFX0MwNfK+Oyq3XKwp0bqVxHAPe5xj0kQwIpUQCggXBEhuGzLKhXAqnx7dpqfYRHG8PpVBHD3u9+9OQE0sgFZLcPUFuJYhODNKLIfc2qAjwRznvdFS68f6Q6kEcDd7na3MAFkdgMiNiBqCzJUwVRswiptxdjAbunnayb5xpD/npDQRQB3vetdJ0MALVVAgLX76DUy9zHwVryxwFYbvGX9jpH0v6baj1H9RyWAu9zlLukEEE05UauRuBsR/IbJyBxqWpZjA641IY0Z3qHkUasco5t0ROV/CgHc+c53XhkBrMIa1LxZWlqFzKAyMzAb+zEiQdsqwJ8l9Wtm/VMI4E53uhNEABkBYZY1yCaB1m3ElkAci4TWxa+3CvIytuyeJAHc8Y533PMEkPmGo8B8QsYgy1QJIruitwD/Kqv9ygngDne4g+vCtesFHMdWSgJjdBHGqsarUAAVdieFGFZZ7cfw+d75f+k+i9vf/va7hgDGtAbRrkJrqzAFgGc/7pTBv/YEcLvb3W6qBNBKBTTLB6L5QfTNngGYsa7XiuyiNgN9r9Rah1YyP40Abnvb245OANHq3ZIUKG+SMCx3V2UdVinlPffLbNll7MvXus03CgHc5ja3aUoACSrA7eWTmLrZm621dRjbZqyblM8Af0WhSQn50gjg1re+dRYBNFEBLUPCVXcTWgGwdTfC65Ub2qiVePpolc+S+Rnp/zYB3OpWt5oUAdRkBFFbUWsZWlajVu3KVVy3Jdiz1tdnvF9ay/xUArjlLW/ZnAAaMl/aCHJryzAV4Ix1bstrrUrSt6j+mfI/RAC3uMUteifIXQFdYxuQpgxahIm1xNMKrNk/tw7jssGeuXYluh13TZX3Lv9VCeDmN795JgG4KnNDe5A2mdi6zTglcE6ZZFYN/hrpn/U+91Z3iABudrObjUIAXlbLVgGtmX/MMHH+eVxJ38Lnj5HwQwRw05vedJIEsEdIYCaCkar6lMA/KQK4yU1uMlkCaPXHo0ZjxmOphXUF8lgr6loTQss+/ugEcOMb37gFAaQFgqtUB1E5N2InorlKWRWwMwdvWoM/K+CLpvtVBHCjG91o8gSQUPEnaRFavvGnWOFXfc6YQI9U+JUQwA1veMMQAURtQPaLMyUS2A3A2Q2Pva5VPrO/DxPADW5wg9EJIPsFmnqA2DI/GDOwXGVOshvAH71PUwK4/vWv34oArHOaBoKtSGAVb9Z1AOMUQF3bU2+pPlsEfykEcL3rXW9VBNA8KMw47iGwqVa7dQZwdvbTclBnbOmfQgDXve5114oAVvXHqlEIuwFMU73+2BW+BchXSgDXuc51mniLvUIC2cSwqmNTfm4ZPn43gj8Dn4trX/vaa0kAU7IJtUHiOgBwBnk8wJs0AVzrWtdaNQFMQgmsIGBMzRFqn//UiGlqQd2YlX9UArjmNa/ZnADAc0ZrG7Z+IzWyFVWKolUYOlWvvmog17T1EjFlE8A1rnGNagIYQwWMzcJjq4ExuxUtCKJluj7F9lxL8CfiySaAq1/96qMQwLqRwJQCyKmDaMzfY6y/2ZTBn0oAV7va1XYFAbQKY9bBRszXHg/4tfedHAFc9apXHY0AEuVNkz/QKtXAlAC4KiCva9Uf0/enE8BVrnKVFAJYl9Cw5g+57lZi3Y6PeZ9Vgz8bPzABXPnKVx6dAKZAAmMHQ2OFU+sE4ikEdhngHhP86QRwpStdaZ0JYGUkMJVgaa/cZ7dX9pURwBWveMV+zAdseN7k1MCUPOoUBlymFMito6RvgcPFFa5whZURwNRygym+GdcBiOsk2TPeR6vy800I4PKXv3w6AazyBchQC6t8A+4GEK7ba+c5Z1V+vhUGF5e73OVWSgArUgLNbcM6EsU6AnssOZ/93mupqmcCmAlgJoCZADACuOxlL9uEAFp7nKnYgYznMlWimTIBZv1dpp7it8be4jKXucxkCGCV/mkmi90D6rG9/KqDvCoCuPSlL91P4YlMKUQZo+041pt91bePdY11COemBn4iosWlLnWpyRHAqjOEBudNpvKt0+NMudc+FQ9fTQCXvOQlmxPA1EhglQw/FmFM8Zwp++2pVfKx8La4xCUuMQoB1Fyj9Qs+9SoyJkin+njrWMXHer/PBDATwEwAMwHECODiF794P9UnN+U/2Cql5VTBN/XXZAY+QwAXu9jFRieAsV+k1vdZ9Zt0HSrouoF+bO++KlwtLnrRi66EAGqvNdU/6Krtx7rJ5SlW46km9k0I4CIXuchaMdY6KYmpKI+p2KHd8rpP4f2bdZ2ZAGYCmAlgLxPAhS984ZUSwBReyKmGklOUyLvhd56CbJ8KfhYXutCFJkEAWddcJ0Wxm7KMdam8UwDulLCzuOAFL9hP6RfZDfZiFffdrcS1m6r1FPGyuMAFLtDvxl9sN6mLdbE4uwmwU3vvtbruTAAzAcwEsJcJ4PznP/9kCWCKocluIpXdcP+p+vJ1wcTifOc7X78uv/CsNtbXu85VeZqPMxPATAAzAexlAjjvec/br9svP8bjTbXNOUVwrwM41+29MtbjLc5znvP06/6CjPW461Q11sHTrmsV3k3v78W5z33uXfli7QZbsu7Va7cAcTe/h2cCmAlgJoC9TADnOte5+t38Ak7huey2N+puBt5ee68uznnOc+7pF3lKz2uvvOH34us81ec1E8BMADMB7GUCOMc5zjH/Mdb0uU7l+cyvy/o+15kA5jf6/LrsZQI4+9nP3s8vyt79Hebnubd/h8XZzna2fn4R599z/n325u85E8D8e86/z14mgLOe9az9/MfYu1/za7S3X6OZAOY39/wa7WUCOMtZzjK/AeY3wvx32qNfMwHMb6z577SXCWCxWMwv1gyW+WsmgPlrJoD5a88RABHNb4D5a/7ao1//NwC1EoQ8cflAagAAAABJRU5ErkJggg==",
        Wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAIAAABdw+MhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNrs2sEJgDAQRNGJBPuvV5R4FAuYnF4aeGRv+9mx0n0zOQEAAAAAAAAAAAAAAABsAsbK0/3Bk6MLXO1WAQAAAAAAAAAAAAAAAOBLCUn3bGCWWwgAAAAAAAAAAAAAAACA36Z/rzKw7vKIcgEAAAAAAAAAAAAAAADYBIzyzUBmuYUAAAAAAAAAAAAAAAAA2AmM8s1AZrmFAAAAAAAAAAAAAAAAAPht+uWU8AowAGyEi9doBGciAAAAAElFTkSuQmCC",
        je = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAMCAYAAAAd3Y8KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAMpJREFUeNrU1bGJAkEUBuDP4dbt4sKrYDGyBKPrwMxIEK6MA8FIIzswsgQjSzC8Cgzd3eSStyCD5rMvm/e/4GOYx0yapnngC3/GUZ+4JdS4YTYC9CysdYpGjQsWBaMXYawhPQUVTlgWiF6GrRoaKRuosMemIPQmTNVzM70YnOIXuwLQu7BM8yAZab2Cd/jBugDfOixdHnxk5x4rHAu63C3uOLxbzh7fhaGHOoatz+Et5jgX/KzPYWwHeBtf/nUEO3kNa/sPAAD//wMAcAgh6ci5pdMAAAAASUVORK5CYII=",
        Wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVChTY/iPCk6DwRkYoKv0sWPHjiIBBohyCADKQVXBAIr0kSNHoMIwwAC1BAyApkGFYYAS6f//AVzgDAPz1XkAAAAAAElFTkSuQmCC",
        ze = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAANUlEQVR42myNsQ0AMAzC8P9Hu0sjpU3YkLFADWBmIInqQsgDAar8kCY6zDtYzfUzte5ROQMAeFAiAMRBE+oAAAAASUVORK5CYII=";
    y.ColorPicker = function() {
        var k = this;
        y.ColorPicker.superClass.constructor.call(k), k.setEditable(!0), k.setDropDownComponent(y.ColorPickerTemp)
    }, L(z + "ColorPicker", y.MultiComboBox, {
        ms_ac: ["instant", "clearButtonVisible"],
        _clearButtonVisible: !0,
        setValue: function($) {
            var b = this;
            if ($ !== I) {
                var d = b._value;
                b._value = $, b.fp("value", d, $)
            }
        },
        drawValue: function(E, A, W, k, h) {
            this._value && (E.beginPath(), E.rect(A + 2, W + 2, 20, h - 4), E.fillStyle = this._value, E.fill()), d(E, this._value, this.getLabelFont(), this.getLabelColor(), A + 23, W, 0, h)
        }
    }), y.ColorPickerTemp = function(A) {
        var s = this,
            g = "px",
            K = s._view = P.createView(null, s),
            E = s.$10o = document.createElement("div"),
            J = s.$11o = m(),
            o = s.$12o = m(),
            D = E.style;
        s._h = 360, s._s = 100, s._v = 100, K.className = "colorPickerPopup", K.style.position = "absolute", K.style.background = "white", y.ColorPickerTemp.superClass.constructor.call(s, A);
        var B = '<div style="border: 1px solid rgba(0, 0, 0, 0); position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px; background: url(' + Wo + ') repeat;"></div>                      <div class= "preview" style="border: 1px solid black; position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px;"></div>                      <div style="margin-left: 50px; font: ' + O.labelFont + '; line-height: 30px;" >                             R:<input class="color_R" style="width: 28px;" type="' + (i ? "number" : "text") + '">                             G:<input class="color_G" style="width: 28px" type="' + (i ? "number" : "text") + '">                             B:<input class="color_B" style="width: 28px" type="' + (i ? "number" : "text") + '">                             A:<input class="color_A" style="width: 28px" value="1" type="' + (i ? "number" : "text") + '">                      </div>',
            d = '<div>        <div class="satval" style="position: absolute;cursor:crosshair;margin-left:5px;top: 6px;border:1px solid black;width:128px;height:128px;background-image: url(' + Wd + ');background-color: red;background-size:contain;">            <div class="satval_pointer" style="position:absolute;left: 124px; top: -3px;width: 7px; height: 7px;background-image: url(' + ze + ')"></div>        </div>        <div class="hue_picker" style="position:absolute;width: 46px; height: 140px;left: 152px;top:0;">            <div class="hue_image" style="border: 1px solid black;position:absolute;left:7px;top:6px;width:30px; height:128px; background: url(' + Wm + ');background-size:contain;"></div>            <div class="hue_pointer" style="position:absolute;top:1px;left:0;width:46px; height:12px; background: url(' + je + ')"></div>        </div>        <div style="position: absolute; left: 210px;top:6px;">        <input type="button" value="&#10003" class="color_ok"><br><br>        <input type="button" value="&#10005" class="color_clear">        </div>        </div>';
        D.font = O.labelFont, D.height = 30 + g, D.lineHeight = 30 + g, D.position = "relative", D.whiteSpace = "nowrap", E.innerHTML = B, o.innerHTML = d, K.appendChild(E), K.appendChild(o), K.addEventListener("click", function($) {
            var r = $.target,
                E = r.className;
            "color_ok" === E ? (s.$13o = s.$9o(), A.close()) : "color_clear" === E ? (s.$13o = null, A.close()) : ["color_R", "color_G", "color_B", "color_A"].indexOf(E) >= 0 && r.select()
        });
        var $ = function(b) {
            var $, p = b.target,
                B = p.className,
                z = !1;
            ["color_R", "color_G", "color_B"].indexOf(B) >= 0 ? ($ = parseInt(p.value), p.value = $ >= 0 && 255 >= $ ? parseInt(p.value) : 0, z = !0) : "color_A" === B && ($ = parseFloat(p.value), p.value = $ >= 0 && 1 >= $ ? parseFloat(p.value) : 0, z = !0), z && (J.style.backgroundColor = s.$9o())
        };
        K.addEventListener("keydown", function(n) {
            var X = n.target,
                L = X.className;
            ["color_R", "color_G", "color_B", "color_A", "color_ok", "color_clear"].indexOf(L) >= 0 && 13 == n.keyCode && ($(n), s.$13o = s.$9o(), A.close())
        }), new jq(s), K.addEventListener("change", $);
        var z = Oq(K, ".color_clear");
        A._clearButtonVisible || (z.style.display = "none"), G.Default.onElementCreated && (G.Default.onElementCreated(K.querySelector("input.color_R")), G.Default.onElementCreated(K.querySelector("input.color_G")), G.Default.onElementCreated(K.querySelector("input.color_B")), G.Default.onElementCreated(K.querySelector("input.color_A")), G.Default.onElementCreated(K.querySelector(".color_ok")), G.Default.onElementCreated(K.querySelector(".color_clear")))
    }, L(y.ColorPickerTemp, y.BaseDropDownTemplate, {
        $6o: function() {
            var x = this,
                S = x._view,
                i = x._master,
                X = x._h,
                w = x._s,
                D = x._v,
                R = x.$2o(X / 360, w / 100, D / 100),
                Y = R.r,
                v = R.g,
                I = R.b;
            S.querySelector("input.color_R").value = f(255 * Y), S.querySelector("input.color_G").value = f(255 * v), S.querySelector("input.color_B").value = f(255 * I);
            var h = x.$9o();
            S.querySelector(".preview").style.backgroundColor = h;
            var $ = x.$2o(X / 360, 1, 1);
            S.querySelector(".satval").style.backgroundColor = x.$4o($.r, $.g, $.b, !0), i._instant && i.setValue(h)
        },
        $5o: function(L, x, c) {
            var t, V, T = Math.max(Math.max(L, x), c),
                A = Math.min(Math.min(L, x), c),
                O = T;
            if (A == T) t = 0, V = 0;
            else {
                var g = T - A;
                V = g / T, t = L == T ? (x - c) / g : x == T ? 2 + (c - L) / g : 4 + (L - x) / g, t /= 6, 0 > t && (t += 1), t > 1 && (t -= 1)
            }
            return {
                h: t,
                s: V,
                v: O
            }
        },
        $4o: function(d, h, B, A) {
            return d = f(255 * d), h = f(255 * h), B = f(255 * B), A == I && (A = !0), d = d.toString(16), 1 == d.length && (d = "0" + d), h = h.toString(16), 1 == h.length && (h = "0" + h), B = B.toString(16), 1 == B.length && (B = "0" + B), ((A ? "#" : "") + d + h + B).toUpperCase()
        },
        $3o: function(F, G, j) {
            j == I && (j = null), "#" == F.substr(0, 1) && (F = F.substr(1));
            var _, z, K;
            if (3 == F.length) _ = F.substr(0, 1), _ += _, z = F.substr(1, 1), z += z, K = F.substr(2, 1), K += K;
            else {
                if (6 != F.length) return j;
                _ = F.substr(0, 2), z = F.substr(2, 2), K = F.substr(4, 2)
            }
            return _ = parseInt(_, 16), z = parseInt(z, 16), K = parseInt(K, 16), isNaN(_) || isNaN(z) || isNaN(K) ? j : G ? {
                r: _,
                g: z,
                b: K
            } : {
                r: _ / 255,
                g: z / 255,
                b: K / 255
            }
        },
        $2o: function(S, E, Q) {
            var V, L, n;
            if (0 == Q) V = 0, L = 0, n = 0;
            else {
                var J = Math.floor(6 * S),
                    e = 6 * S - J,
                    _ = Q * (1 - E),
                    c = Q * (1 - E * e),
                    M = Q * (1 - E * (1 - e));
                switch (J) {
                    case 1:
                        V = c, L = Q, n = _;
                        break;
                    case 2:
                        V = _, L = Q, n = M;
                        break;
                    case 3:
                        V = _, L = c, n = Q;
                        break;
                    case 4:
                        V = M, L = _, n = Q;
                        break;
                    case 5:
                        V = Q, L = _, n = c;
                        break;
                    case 6:
                    case 0:
                        V = Q, L = M, n = _
                }
            }
            return {
                r: V,
                g: L,
                b: n
            }
        },
        $9o: function() {
            var C = this._view,
                f = Oq(C, "input.color_R").value,
                c = Oq(C, "input.color_G").value,
                r = Oq(C, "input.color_B").value,
                s = Oq(C, "input.color_A").value || 1;
            return "" === f || "" === c || "" === r || "" === s ? I : 1 == s ? "rgb(" + f + "," + c + "," + r + ")" : "rgba(" + f + "," + c + "," + r + "," + s + ")"
        },
        getView: function() {
            return this._view
        },
        onOpened: function(x) {
            if (x) {
                var H, z = this,
                    p = z._view;
                if (z.$11o.style.backgroundColor = x, 0 === x.indexOf("#") ? (x = x.substr(1, 6), H = z.$3o(x, !0), H = [H.r, H.g, H.b]) : 0 === x.indexOf("rgb") && (x = x.substring(x.indexOf("(") + 1, x.indexOf(")")), H = x.split(",")), H) {
                    var g = 4 === H.length ? H[3] : 1,
                        G = z.$5o(H[0] / 255, H[1] / 255, H[2] / 255),
                        T = Oq(p, ".satval_pointer");
                    Oq(p, "input.color_R").value = H[0], Oq(p, "input.color_G").value = H[1], Oq(p, "input.color_B").value = H[2], Oq(p, "input.color_A").value = g, z._h = f(360 * G.h), z._s = f(100 * G.s), z._v = f(100 * G.v), T.style.left = 127 * G.s - 3 + "px", T.style.top = 127 - 127 * G.v - 3 + "px", Oq(p, ".hue_pointer").style.top = 128 - 127 * G.h + "px", z.$6o()
                }
            }
        },
        onClosed: function() {},
        getValue: function() {
            return this.$13o
        },
        getHeight: function() {
            return 170
        },
        getWidth: function() {
            return 252
        }
    });
    var jq = function(s) {
        this.$8o = s, this.setUp()
    };
    L(jq, A, {
        ms_listener: 1,
        getView: function() {
            return this.$8o._view
        },
        setUp: function() {
            this.addListeners()
        },
        tearDown: function() {
            this.removeListeners(), this.clear()
        },
        clear: function() {
            delete this.$7o
        },
        handle_touchstart: function(Z) {
            var B = this,
                N = Z.target,
                l = B.$8o,
                J = B.getView(),
                p = Oq(J, ".hue_picker"),
                I = Oq(J, ".satval");
            p.contains(N) ? (B.$7o = 1, B.$1o(Z, 1)) : I.contains(N) && (B.$7o = 2, B.$1o(Z, 2)), B.$7o && O.isDoubleClick(Z) && (l.$13o = l.$9o(), l._master.close())
        },
        $1o: function(l, k) {
            O.preventDefault(l);
            var K, M, $, B = this,
                z = B.$8o,
                _ = B.getView(),
                a = Oq(_, ".hue_picker"),
                j = Oq(_, ".satval");
            if (l = i ? xk(l) : l, 1 === k) {
                K = a.getBoundingClientRect(), $ = l.clientY - K.top, $ -= 7, 0 > $ && ($ = 0), $ > 127 && ($ = 127), Oq(_, ".hue_pointer").style.top = $ + 1 + "px";
                var A = $;
                A = f(360 - A * (360 / 127)), z._h = A, z.$6o()
            } else if (2 === k) {
                K = j.getBoundingClientRect(), M = l.clientX - K.left - 1, $ = l.clientY - K.top - 1, 0 > M && (M = 0), M > 127 && (M = 127), 0 > $ && ($ = 0), $ > 127 && ($ = 127), z._s = f(100 * M / 127), z._v = f(100 - 100 * $ / 127);
                var W = Oq(_, ".satval_pointer");
                W.style.left = M - 3 + "px", W.style.top = $ - 3 + "px", z.$6o()
            }
        },
        handle_mousedown: function(J) {
            this.handle_touchstart(J)
        },
        handle_mouseup: function(K) {
            this.handle_touchend(K)
        },
        handle_touchend: function(G) {
            var B = this;
            B.clear(G)
        },
        handle_mousemove: function(W) {
            this.handle_touchmove(W)
        },
        handle_touchmove: function() {
            var X = this;
            X.$7o && O.startDragging(X)
        },
        handleWindowMouseUp: function(Q) {
            this.handleWindowTouchEnd(Q)
        },
        handleWindowTouchEnd: function(D) {
            var t = this;
            t.clear(D)
        },
        handleWindowMouseMove: function(K) {
            this.handleWindowTouchMove(K)
        },
        handleWindowTouchMove: function(J) {
            var M = this,
                c = M.$7o;
            c && M.$1o(J, c)
        }
    }), y.FormPane = function(L) {
        var I = this,
            Z = I._view = P.createView(1, I);
        L || (I._canvas = M(Z)), Z.appendChild(I._79O = m()), I._rows = [], I._itemMap = {}, I.iv(), Z.handleGroupSelectedChanged = function(q) {
            if (q.isSelected()) {
                var K = q.getGroupId();
                null != K && I._rows.forEach(function(D) {
                    var G = D.items;
                    G && G.forEach(function(l) {
                        if (l) {
                            var N = l.element;
                            N && N !== q && N.setSelected && N.getGroupId && N.getGroupId() === K && N.setSelected(!1)
                        }
                    })
                })
            }
        }, new An(I)
    }, L(z + "FormPane", A, {
        ms_v: 1,
        ms_fire: 1,
        ms_txy: 1,
        ms_lp: 1,
        ms_vs: 1,
        ms_hs: 1,
        ms_value: 1,
        ms_ac: ["labelColor", "labelFont", "labelAlign", "labelVAlign", "vPadding", "hPadding", "labelHPadding", "labelVPadding", "hGap", "vGap", "rows", "rowHeight", "scrollBarColor", "scrollBarSize", "autoHideScrollBar"],
        _29I: Lq,
        _91I: 0,
        _59I: 0,
        _labelColor: O.formPaneLabelColor,
        _labelFont: O.formPaneLabelFont,
        _labelAlign: O.formPaneLabelAlign,
        _labelVAlign: O.formPaneLabelVAlign,
        _hPadding: O.formPaneHPadding,
        _vPadding: O.formPaneVPadding,
        _labelHPadding: O.formPaneLabelHPadding,
        _labelVPadding: O.formPaneLabelVPadding,
        _hGap: O.formPaneHGap,
        _vGap: O.formPaneVGap,
        _rowHeight: O.widgetRowHeight,
        _scrollBarColor: O.scrollBarColor,
        _scrollBarSize: O.scrollBarSize,
        _autoHideScrollBar: O.autoHideScrollBar,
        onPropertyChanged: function(i) {
            var F = this,
                N = i.property;
            F.iv(), "translateX" === N ? F._42o() : "translateY" === N && F._43o()
        },
        adjustTranslateX: function(F) {
            var z = this.getWidth() - this._91I;
            return z > F && (F = z), F > 0 ? 0 : Math.round(F)
        },
        adjustTranslateY: function(l) {
            var N = this.getHeight() - this._59I;
            return N > l && (l = N), l > 0 ? 0 : Math.round(l)
        },
        setPadding: function(R) {
            this.setVPadding(R), this.setHPadding(R)
        },
        getLabelFont: function(E) {
            return E && E.font ? E.font : this._labelFont
        },
        getLabelColor: function(o) {
            return o && o.color ? o.color : this._labelColor
        },
        getLabelAlign: function(K) {
            return K && K.align ? K.align : this._labelAlign
        },
        getLabelVAlign: function(R) {
            return R && R.vAlign ? R.vAlign : this._labelVAlign
        },
        getRowBorderColor: function(L) {
            return L ? L.borderColor : null
        },
        getRowBackground: function(W) {
            return W ? W.background : null
        },
        getItemBorderColor: function(K) {
            return K ? K.borderColor : null
        },
        getItemBackground: function(f) {
            return f ? f.background : null
        },
        getItemById: function(V) {
            return this._itemMap[V]
        },
        getViewById: function(f) {
            var L = this.getItemById(f);
            return L ? L.element : null
        },
        getItemView: function(v) {
            if (v) {
                var T = v.element;
                if (T) {
                    if (T.tagName) return T;
                    if (T.getView) return T.getView()
                }
            }
            return null
        },
        updateItemElement: function(x, F) {
            var D = this,
                y = D.getItemById(x);
            if (y) {
                var I = D.getItemView(y);
                I && D._view.removeChild(I), y.element = F, I = D.getItemView(y), I && (I.style.position = "absolute", D._view.insertBefore(I, D._79O)), D.iv()
            }
        },
        addRow: function(S, u, s, g) {
            var p = this,
                G = p._view;
            if (S) {
                for (var e = 0; e < S.length; e++) {
                    var W = S[e];
                    W && ((W.tagName || W.getView) && (S[e] = {
                        element: W
                    }), P.initItemElement(W), null != W.id && (p._itemMap[W.id] = W))
                }
                S.forEach(function(n) {
                    var J = p.getItemView(n);
                    J && (J.style.position = "absolute", G.insertBefore(J, p._79O))
                })
            }
            var c = g || {};
            return c.items = S, c.widths = u, c.height = s, null == c.index ? p._rows.push(c) : p._rows.splice(c.index, 0, c), p.iv(), c
        },
        removeRows: function(b) {
            if (b) {
                var S = this,
                    h = [];
                b.forEach(function(f) {
                    f.items && f.items.forEach(function(w) {
                        var E = S.getItemView(w);
                        E && S._view.removeChild(E), w && null != w.id && delete S._itemMap[w.id]
                    })
                }), S._rows.forEach(function(e) {
                    b.indexOf(e) < 0 && h.push(e)
                }), S._rows = h, S.iv()
            }
        },
        removeRow: function(U) {
            var Y = this,
                V = Y._rows.splice(U, 1)[0].items;
            V && V.forEach(function(v) {
                var j = Y.getItemView(v);
                j && Y._view.removeChild(j), v && null != v.id && delete Y._itemMap[v.id]
            }), Y.iv()
        },
        clear: function() {
            for (var r = this, f = r._view; f.firstChild;) f.removeChild(f.firstChild);
            r._canvas && f.appendChild(r._canvas), f.appendChild(r._79O), r._rows = [], r._itemMap = {}, r.iv()
        },
        validateImpl: function() {
            var V, D, R, N, B, G, i = this,
                P = i._canvas,
                j = i._rowHeight,
                d = i.getWidth(),
                Y = i.getHeight(),
                b = i._hPadding,
                w = i._vPadding,
                z = i._vGap,
                Z = i.ty(),
                M = i.tx(),
                e = d - 2 * b,
                v = Y - 2 * w,
                U = i._rows,
                y = U.length,
                K = 0,
                J = v - (y - 1) * z;
            for (i._29I = {
                    x: -M,
                    y: -Z,
                    width: d,
                    height: Y
                }, P && (r(P, d, Y), G = g(P), s(G, 0, 0, 1), G.clearRect(0, 0, d, Y)), R = 0; y > R; R++) N = U[R], B = N.height, null == B ? J -= j : C(B) ? (V = B.split("+"), D = parseFloat(V[0]), D > 1 ? J -= D : K += D, D = parseFloat(V[1]), D > 1 ? J -= D : K += D) : B > 1 ? J -= B : K += B;
            0 > J ? (i._59I = Y - J, J = 0) : i._59I = Y;
            var X = w + Z,
                H = d;
            for (R = 0; y > R; R++) {
                N = U[R], B = N.height, null == B ? B = j : C(B) ? (V = B.split("+"), D = parseFloat(V[0]), B = D > 1 ? D : D / K * J, D = parseFloat(V[1]), B += D > 1 ? D : D / K * J) : 1 >= B && (B = B / K * J);
                var S = b + M;
                if (G) {
                    var O = i.getRowBorderColor(N),
                        _ = i.getRowBackground(N);
                    _ && $(G, S, X, e, B, _), O && E(G, O, S, X, e, B)
                }
                var L = i.validateRow(G, d, N.items, N.widths, S, X, e, B);
                L > H && (H = L), X += B + z
            }
            G && G.restore(), i._91I = H, i._92I(), i._93I(), i.tx(i.tx()), i.ty(i.ty())
        },
        validateRow: function(Q, Y, P, R, k, L, W, G) {
            if (!P) return 0;
            var J, B, O, d, T, D = this,
                o = Y,
                H = D._hGap,
                n = P.length,
                v = 0,
                h = W - (n - 1) * H;
            for (O = 0; n > O; O++) d = R[O], C(d) ? (J = d.split("+"), B = parseFloat(J[0]), B > 1 ? h -= B : v += B, B = parseFloat(J[1]), B > 1 ? h -= B : v += B) : d > 1 ? h -= d : v += d;
            for (0 > h && (o -= h, h = 0), O = 0; n > O; O++) {
                if (T = P[O], d = R[O], C(d) ? (J = d.split("+"), B = parseFloat(J[0]), d = B > 1 ? B : B / v * h, B = parseFloat(J[1]), d += B > 1 ? B : B / v * h) : 1 >= d && (d = d / v * h), T) {
                    if (Q) {
                        var u = D.getItemBorderColor(T),
                            F = D.getItemBackground(T);
                        F && $(Q, k, L, d, G, F), u && E(Q, u, k, L, d, G)
                    }
                    D.validateItem(Q, T, k, L, d, G)
                }
                k += d + H
            }
            return o
        },
        validateItem: function(E, z, i, Z, O, h) {
            var $, y = this,
                n = z.element;
            n && !C(n) ? Q(n, i, Z, O, h) : E && (C(z) ? $ = z : C(z.element) && ($ = z.element), $ && (E.save(), E.beginPath(), E.rect(i, Z, O, h), E.clip(), d(E, $, y.getLabelFont(z), y.getLabelColor(z), i + y._labelHPadding, Z - y._labelVPadding, O - 2 * y._labelHPadding, h - 2 * y._labelVPadding, y.getLabelAlign(z), y.getLabelVAlign(z)), E.restore()))
        }
    });
    var An = function(e) {
        this.f = e, this.addListeners()
    };
    L(An, A, {
        ms_listener: 1,
        getView: function() {
            return this.f._view
        },
        handle_mousedown: function(A) {
            H(A) && this.handle_touchstart(A)
        },
        handleWindowMouseMove: function(a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowMouseUp: function(Q) {
            this.handleWindowTouchEnd(Q)
        },
        handle_touchstart: function(L) {
            var t, g = this,
                v = g.f,
                T = L.target;
            g.isV(L) ? t = "v" : g.isH(L) ? t = "h" : (T === g.getView() || v._79O.contains(T)) && (t = "p"), (g.s = t) && (g.cp = B(L), g.tx = v.tx(), g.ty = v.ty(), a(L), X(g, L))
        },
        handle_mousemove: function(J) {
            var G = this,
                y = G.f;
            G.isV(J) && y._43o(), G.isH(J) && y._42o()
        },
        handleWindowTouchMove: function(o) {
            var b = this,
                d = b.f,
                A = b.s,
                x = b.tx,
                z = b.ty,
                R = b.cp,
                W = B(o),
                O = d._29I;
            "p" === A ? d.setTranslate(x + W.x - R.x, z + W.y - R.y) : "v" === A ? d.ty(z + (R.y - W.y) * d._59I / O.height) : "h" === A && d.tx(x + (R.x - W.x) * d._91I / O.width)
        },
        handleWindowTouchEnd: function() {},
        handle_mousewheel: function(L) {
            this.h(L, L.wheelDelta / 40, L.wheelDelta !== L.wheelDeltaX)
        },
        handle_DOMMouseScroll: function(Q) {
            this.h(Q, -Q.detail, 1)
        },
        h: function(p, k, _) {
            var v = this.f;
            a(p), P.closePopup(), _ && v._41o() ? v.translate(0, 10 * k) : v._40o() && v.translate(10 * k, 0)
        },
        isV: function(d) {
            var C = this.f,
                u = C._29I;
            return C._41o() && u.x + u.width - C.lp(d).x < W
        },
        isH: function(R) {
            var Q = this.f,
                S = Q._29I;
            return Q._40o() && S.y + S.height - Q.lp(R).y < W
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);