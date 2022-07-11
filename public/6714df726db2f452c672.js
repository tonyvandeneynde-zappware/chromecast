function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  var g = {};
  var _ = {};
  (function (window) {
    var ca, fa, ha, ia, ja, pa, sa, ta, xa, ya, za, Ba, Ea, Fa, Ia, Ja, Ka, Ma, Na, Wa, Xa, Ya, jb, lb, nb, rb, Wb, ic, jc, pc, qc, sc, uc, vc, wc, Ic, Lc, Mc, Nc, Sc, fd, Cd, Jd, Rd, Td, ae, ve, Ke, Oe, Pe, Re, Se, Ue, Ve, We, Xe, Ye, cf, df, jf, kf, lf, pf, sf, qf, rf, tf, uf, vf, wf, Jf, Lf, Pf, Uf, Vf, Tf, Qf, Zf, bg, eg, jg, sg, xg, Pg, Tg, Ug, Vg, $g, ah, fh, dh, gh, ih, hh, kh, nh, uh, wh, zh, Ch, Dh, Eh, Hh, Gh, Ih, Jh, Kh, Lh, Mh, Ph, Qh, Rh, Sh, Th, ei, gi, hi, fi, ii, _li, ji, mi, ni, qi, _ti, si, ui, vi, ri, wi, Hi, Ji, Ki, Li, Ui, Wi, Mi, bj, aj, ij, kj, lj, mj, pj, rj, tj, qj, nj, vj, yj, dj, ki, Aj, Cj, Ej, Mj, Nj, Oj, Pj, Rj, ek, ok, pk, qk, rk, sk, tk, yk, Ck, Ek, Fk, Jk, Pk, Wk, el, tl, yl, zl, ql, jl, Al, Hl, Gl, Ll, Jl, Kl, al, sl, Il, bl, Fl, il, El, kl, dl, Rl, Tl, Ul, Vl, Wl, am, dm, em, gm, im, cm, bm, km, lm, om, sm, tm, Am, Dm, Fm, Hm, Im, Jm, Km, Lm, Mm, Nm, Om, Pm, Qm, Rm, Tm, Vm, Wm, Xm, Sm, Ym, Um, $m, an, Zm, cn, en, dn, gn, hn, kn, ln, fn, mn, nn, pn, qn, _on, rn, wn, zn, Cn, Fn, In, Jn, Ln, Mn, Nn, On, Pn, Qn, Rn, Sn, Un, Vn, Wn, Xn, Tn, $n, T, po, oo, ro, to, uo, zo, vo, Fo, Go, Ho, Lo, Oo, Eo, $o, ap, bp, wo, fp, U, gp, bf, $e;

    _.aa = " is registered.";
    _.ba = " is unsupported on this platform.";
    ca = " to a log level. Falling back to default!";
    _.da = "6.2.4";
    fa = "\x3c/DATA\x3e\x3c/WRMHEADER\x3e";
    ha = "\x3c/LA_URL\x3e";
    ia = "\x3cLA_URL\x3e";
    ja = '\x3cWRMHEADER xmlns\x3d"http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version\x3d"';
    _.ka = "AdaptationSet";
    _.la = "Already destroyed. No-op";
    _.ma = "Already released. No-op";
    _.na = "Autoplay is not allowed due to browser policy.";
    _.oa = "CODECS";
    pa = "Can not set volume to ";
    _.qa = "Cannot retrieve buffer information due to platform limitations";
    _.ra = "CastlabsPlayer";
    sa = "Content-Length";
    ta = "Content-Type";
    _.ua = "Could not find configured DRM environment.";
    _.va = "DRM environment '";
    xa = "DRM licenses loaded";
    ya = "DRMtoday";
    za = "Destroying player";
    _.Aa = "Disable track type ";
    Ba = "Error while decoding string!";
    _.Da = "Error while fetching license!";
    Ea = "HW_SECURE_CRYPTO";
    Fa = "HW_SECURE_DECODE";
    Ia = "HeaderDrm";
    Ja = "Ignoring duplicate init data.";
    Ka = "Illegal constructor.";
    Ma = "Invalid track type: ";
    Na = "License verification failed: ";
    _.Pa = "Loading player with configuration";
    _.Qa = "MaxHeight";
    _.Ta = "MaxWidth";
    _.Ua = "MediaKeySession.load not yet supported";
    _.Va = "MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform";
    Wa = "No drmtoday configuration found in player configuration. Unable to modify the DRM license request!";
    Xa = "No event provided!";
    Ya = "No track data attached to the event, unable to add track!";
    _.Za = "NotSupportedError";
    _.$a = "Player sources";
    _.ab = "Player state change: ";
    _.bb = "Please make sure ";
    _.db = "QualityLevel";
    _.eb = "Releasing player with source";
    _.fb = "Representation";
    _.gb = "SW_SECURE_CRYPTO";
    _.hb = "SW_SECURE_DECODE";
    _.ib = "Session type ";
    jb = "Signature Verification failed";
    _.kb = "SmoothStreamingMedia";
    lb = "The index is not in the allowed range.";
    _.mb = "Trident/";
    nb = "Unable to translate ";
    _.ob = "Unregistering listeners";
    _.pb = "Unsupported keySystem";
    _.qb = "Updating manifest...";
    rb = "Using VTTCue polyfill from 3 argument TextTrackCue.";
    _.sb = "ad-break-started";
    _.tb = "ad-break-stopped";
    _.ub = "ad-buffering";
    _.vb = "ad-clicked";
    _.wb = "ad-completed";
    _.xb = "ad-first-quartile";
    _.yb = "ad-impression";
    _.Ab = "ad-loaded";
    _.Bb = "ad-midpoint";
    _.Cb = "ad-paused";
    _.Db = "ad-progress";
    _.Eb = "ad-resumed";
    _.Fb = "ad-skipped";
    _.Gb = "ad-started";
    _.Hb = "ad-stopped";
    _.Ib = "ad-third-quartile";
    _.Jb = "addtrack";
    _.Kb = "ads-timeline-changed";
    _.Lb = "airplay-casting-ended";
    _.Mb = "airplay-casting-started";
    _.Pb = "airplay-status-changed";
    _.Qb = "application";
    _.Rb = "application/cea-608";
    _.Sb = "application/mp4";
    _.Tb = 'application/mp4; codecs\x3d"stpp"';
    _.Ub = 'application/mp4; codecs\x3d"wvtt"';
    _.Vb = "application/ttml+xml";
    Wb = "application/x-www-form-urlencoded";
    _.Xb = "audio";
    _.Yb = "audio/aac";
    _.Zb = "audio/ac3";
    _.$b = "audio/eac3";
    _.ac = "audio/mp4";
    _.bc = "audiobufferchanged";
    _.cc = "autoplaynotallowed";
    _.dc = "bitratechanged";
    _.ec = "boolean";
    _.gc = "bufferingended";
    _.hc = "bufferingstarted";
    ic = "canplay";
    jc = "canplaythrough";
    _.kc = "castingstarted";
    _.lc = "caststatuschanged";
    _.mc = "cdn-switch-success";
    _.nc = "cenc";
    _.oc = "center";
    pc = "change";
    qc = "clpp-container";
    _.rc = "clpp-fill";
    sc = "clpp-hidden";
    _.tc = "clpp.cast.CastSender";
    uc = "clpp.drm.HeaderDrm";
    vc = "clpp.native.Player";
    wc = "clpp.utils.Platform";
    _.xc = "codecs";
    _.yc = "column-reverse";
    _.zc = "com.adobe.primetime";
    _.Ac = "com.apple.fps";
    _.Bc = "com.microsoft.playready";
    _.Cc = "com.widevine.alpha";
    _.Dc = "cuechange";
    _.Ec = "destroy()";
    _.Fc = "disabled";
    _.Gc = "div";
    _.Hc = "drmexpirationupdate";
    Ic = "drmrenewalstarted";
    _.Jc = "drmsessionpersisted";
    _.Kc = "drmsessionupdate";
    Lc = "drmtoday";
    Mc = "dt-custom-data";
    Nc = "durationchange";
    _.Oc = "encrypted";
    _.Pc = "end";
    _.Qc = "ended";
    _.Rc = "error";
    Sc = "fullscreenElement";
    _.Tc = "function";
    _.Uc = "height";
    _.Vc = "hidden";
    _.Wc = "image";
    _.Xc = "internal-error";
    _.Yc = "keystatuseschange";
    _.Zc = "left";
    _.$c = "license-renewal";
    _.ad = "license-request";
    _.bd = "line-left";
    _.cd = "line-right";
    _.dd = "loadeddata";
    _.ed = "loadedmetadata";
    fd = "loadstart";
    _.gd = "mdat";
    _.hd = "mdia";
    _.id = "message";
    _.jd = "metadata";
    _.kd = "mimeType";
    _.ld = "minf";
    _.md = "moov";
    _.nd = "mp4";
    _.od = "mpd-type-changed";
    _.rd = "mpeg-dash-callback-event";
    _.sd = "native";
    _.td = "none";
    _.ud = "number";
    _.vd = "object";
    _.wd = "onBitrateChanged()";
    _.xd = "onContentLoaded";
    _.yd = "onPlayerError()";
    _.zd = "onPlayerWillDestroy";
    _.Ad = "onPlayerWillRelease";
    _.Bd = "onStateChanged()";
    Cd = "online-status-changed";
    _.Dd = "optional";
    _.Ed = "org.w3.clearkey";
    _.Fd = "output-not-allowed";
    _.Gd = "pause";
    _.Hd = "persistent";
    _.Id = "persistent-license";
    Jd = "picture-in-picture";
    _.Kd = "play";
    _.Ld = "playing";
    _.Md = "playlist-item-changed";
    _.Nd = "playlist-modified";
    _.Od = "progress";
    _.Pd = "px";
    _.Qd = "ratechange";
    Rd = "released";
    _.Sd = "releasing";
    Td = "removetrack";
    _.Ud = "required";
    _.Vd = "resize";
    _.Wd = "right";
    _.Xd = "seeked";
    _.Yd = "seeking";
    _.Zd = "showing";
    _.$d = "single-native";
    ae = "stalled";
    _.ce = "start";
    _.de = "statechanged";
    _.ee = "status-pending";
    _.fe = "stbl";
    _.ge = "string";
    _.he = "stsd";
    _.ie = "style";
    _.je = "subtitle";
    _.ke = "subtitles";
    _.le = "subtitles-htmlcue";
    _.me = "subtitles-ttml";
    _.ne = "temporary";
    _.oe = "text";
    _.pe = "text/vtt";
    _.qe = "text/xml";
    _.re = "timeupdate";
    _.se = "trak";
    _.te = "ttml-xml";
    _.ue = "und";
    ve = "unknown";
    _.we = "urn:scte:scte35";
    _.xe = "urn:scte:scte35:2014";
    _.ye = "usable";
    _.ze = "user-seeked";
    _.Ae = "user-seeking";
    _.Be = "value";
    _.Ce = "vertical-lr";
    _.De = "vertical-rl";
    _.Ee = "video";
    _.Fe = "video/mp2t";
    _.Ge = "video/mp4";
    _.He = "videobufferchanged";
    _.Ie = "videotrackchanged";
    _.Je = "vimond-response";
    Ke = "visibilitychange";
    _.Le = "vtt-xml";
    _.Me = "waiting";
    _.Ne = "waitingforkey";
    Oe = "webkitkeyadded";
    Pe = "webkitkeyerror";
    Re = "webkitkeymessage";
    Se = "webkitneedkey";
    _.Te = "width";
    Ue = "x-dt-auth-token";
    Ve = "x-dt-csl-tracking-token";
    We = "x-dt-follow-up-token";
    Xe = "x-dt-resp-code";

    Ye = function Ye(a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    };

    _.Ze = function () {
      _.Ze = function () {};

      $e.Symbol || ($e.Symbol = af);
    };

    cf = function cf(a, b) {
      this.a = a;
      bf(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
      });
    };

    _.ef = function () {
      _.Ze();

      var a = $e.Symbol.iterator;
      a || (a = $e.Symbol.iterator = $e.Symbol("Symbol.iterator"));
      _typeof(Array.prototype[a]) != _.Tc && bf(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function value() {
          return df(Ye(this));
        }
      });

      _.ef = function () {};
    };

    df = function df(a) {
      _.ef();

      a = {
        next: a
      };

      a[$e.Symbol.iterator] = function () {
        return this;
      };

      return a;
    };

    _.t = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: Ye(a)
      };
    };

    _.ff = function (a) {
      if (!(a instanceof Array)) {
        a = _.t(a);

        for (var b, c = []; !(b = a.next()).done;) {
          c.push(b.value);
        }

        a = c;
      }

      return a;
    };

    _.u = function (a, b) {
      a.prototype = gf(b.prototype);
      a.prototype.constructor = a;
      if (hf) hf(a, b);else for (var c in b) {
        if ("prototype" != c) if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else a[c] = b[c];
      }
    };

    jf = function jf() {
      this.o = !1;
      this.h = null;
      this.f = void 0;
      this.a = 1;
      this.j = this.m = 0;
      this.A = this.g = null;
    };

    kf = function kf(a) {
      if (a.o) throw new TypeError("Generator is already running");
      a.o = !0;
    };

    lf = function lf(a, b) {
      a.g = {
        kf: b,
        wf: !0
      };
      a.a = a.m || a.j;
    };

    _.v = function (a, b, c) {
      a.a = c;
      return {
        value: b
      };
    };

    _.w = function (a) {
      a.a = 0;
    };

    _.mf = function (a, b, c) {
      a.m = b;
      void 0 != c && (a.j = c);
    };

    _.nf = function (a, b) {
      a.a = b;
      a.m = 0;
    };

    _.of = function (a) {
      a.m = 0;
      var b = a.g.kf;
      a.g = null;
      return b;
    };

    pf = function pf(a) {
      this.a = new jf();
      this.f = a;
    };

    sf = function sf(a, b) {
      kf(a.a);
      var c = a.a.h;
      if (c) return qf(a, "return" in c ? c["return"] : function (d) {
        return {
          value: d,
          done: !0
        };
      }, b, a.a["return"]);
      a.a["return"](b);
      return rf(a);
    };

    qf = function qf(a, b, c, d) {
      try {
        var e = b.call(a.a.h, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.a.o = !1, e;
        var f = e.value;
      } catch (g) {
        return a.a.h = null, lf(a.a, g), rf(a);
      }

      a.a.h = null;
      d.call(a.a, f);
      return rf(a);
    };

    rf = function rf(a) {
      for (; a.a.a;) {
        try {
          var b = a.f(a.a);
          if (b) return a.a.o = !1, {
            value: b.value,
            done: !1
          };
        } catch (c) {
          a.a.f = void 0, lf(a.a, c);
        }
      }

      a.a.o = !1;

      if (a.a.g) {
        b = a.a.g;
        a.a.g = null;
        if (b.wf) throw b.kf;
        return {
          value: b["return"],
          done: !0
        };
      }

      return {
        value: void 0,
        done: !0
      };
    };

    tf = function tf(a) {
      this.next = function (b) {
        kf(a.a);
        a.a.h ? b = qf(a, a.a.h.next, b, a.a.w) : (a.a.w(b), b = rf(a));
        return b;
      };

      this["throw"] = function (b) {
        kf(a.a);
        a.a.h ? b = qf(a, a.a.h["throw"], b, a.a.w) : (lf(a.a, b), b = rf(a));
        return b;
      };

      this["return"] = function (b) {
        return sf(a, b);
      };

      _.ef();

      this[Symbol.iterator] = function () {
        return this;
      };
    };

    uf = function uf(a, b) {
      var c = new tf(new pf(b));
      hf && hf(c, a.prototype);
      return c;
    };

    vf = function vf(a, b) {
      if (b) {
        for (var c = $e, d = a.split("."), e = 0; e < d.length - 1; e++) {
          var f = d[e];
          f in c || (c[f] = {});
          c = c[f];
        }

        d = d[d.length - 1];
        e = c[d];
        f = b(e);
        f != e && null != f && bf(c, d, {
          configurable: !0,
          writable: !0,
          value: f
        });
      }
    };

    wf = function wf(a) {
      function b(d) {
        return a.next(d);
      }

      function c(d) {
        return a["throw"](d);
      }

      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }

        f(a.next());
      });
    };

    _.z = function (a) {
      return wf(new tf(new pf(a)));
    };

    _.A = function (a, b) {
      var c = a.split("."),
          d = xf;
      c[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + c[0]);

      for (var e; c.length && (e = c.shift());) {
        c.length || void 0 === b ? d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} : d[e] = b;
      }
    };

    _.zf = function (a) {
      a = a.getConfiguration();
      a = _.B.ua(a.textStyle || a.textstyle || {});
      this.K = _typeof(a.backgroundColor) === _.ge ? a.backgroundColor : null;
      this.Y = _typeof(a.windowColor) === _.ge ? a.windowColor : null;
      this.S = _typeof(a.fontColor) === _.ge ? a.fontColor : null;
      this.V = _typeof(a.fontFamily) === _.ge ? a.fontFamily : null;
      this.I = _typeof(a.fontSize) === _.ge ? a.fontSize : null;
      this.D = _typeof(a.fontSizePercent) === _.ud ? a.fontSizePercent : null;
      this.H = _typeof(a.edgeColor) === _.ge ? a.edgeColor : "rgba(0, 0, 0, 1)";
      this.B = _.yf;
      _typeof(a.edgeType) === _.ge && (this.B = a.edgeType);
    };

    _.Ef = function (a) {
      var b = _.td,
          c = a.H;

      switch (a.B) {
        case Af:
          b = "-2px -2px 0 " + c + ", -1px -1px 0 " + c;
          break;

        case Bf:
          b = "2px 2px 0 " + c + ", 1px 1px 0 " + c;
          break;

        case Cf:
          b = "-1px 0 " + c + ", 0 1px " + c + ", 1px 0 " + c + ", 0 -1px " + c;
          break;

        case Df:
          b = "2px 2px 3px " + c + ", 2px 2px 4px " + c + ", 2px 2px 5px " + c;
      }

      return b;
    };

    Jf = function Jf(a) {
      return a && 0 <= Ff[a] ? Ff[a] : Gf;
    };

    Lf = function Lf(a) {
      if (!a) return _.C("clpp.log", nb + a + ca), -1;
      var b = Kf[a.toUpperCase()];
      return void 0 === b ? (_.C("clpp.log", nb + a + ca), -1) : b;
    };

    _.F = function (a) {
      (this.a = a) && void 0 === Ff[a] && (Ff[a] = -1);
    };

    _.Nf = function (a) {
      Mf.info.apply(Mf, arguments);
    };

    _.H = function (a) {
      Mf.debug.apply(Mf, arguments);
    };

    _.C = function (a) {
      Mf.warn.apply(Mf, arguments);
    };

    _.Of = function (a) {
      Mf.error.apply(Mf, arguments);
    };

    Pf = function Pf() {};

    _.Sf = function (a, b) {
      if (!a && !b) return !0;
      if (!a || !b || a.byteLength != b.byteLength) return !1;
      if (Qf(a) == Qf(b) && (a.byteOffset || 0) == (b.byteOffset || 0)) return !0;

      for (var c = _.J(a), d = _.J(b), e = _.t(Rf(a.byteLength)), f = e.next(); !f.done; f = e.next()) {
        if (f = f.value, c[f] != d[f]) return !1;
      }

      return !0;
    };

    _.J = function (a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Tf(a, void 0 === b ? 0 : b, c, Uint8Array);
    };

    Uf = function Uf(a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Tf(a, void 0 === b ? 0 : b, c, Uint16Array);
    };

    Vf = function Vf(a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Tf(a, void 0 === b ? 0 : b, c, Uint32Array);
    };

    _.Wf = function (a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Tf(a, void 0 === b ? 0 : b, c, Int32Array);
    };

    _.Xf = function (a, b, c) {
      c = void 0 === c ? Infinity : c;
      return Tf(a, void 0 === b ? 0 : b, c, DataView);
    };

    _.Yf = function (a) {
      return a instanceof ArrayBuffer ? a : 0 == a.byteOffset && a.byteLength == a.buffer.byteLength ? a.buffer : new Uint8Array(a).buffer;
    };

    Tf = function Tf(a, b, c, d) {
      var e = d.BYTES_PER_ELEMENT || 1,
          f = Qf(a),
          g = (a.byteOffset || 0) + a.byteLength;
      a = Math.max(0, Math.min((a.byteOffset || 0) + b * e, g));
      c = Math.min(a + Math.max(c * e, 0), g);
      a /= e;
      return new d(f, a, c / e - a);
    };

    Qf = function Qf(a) {
      return a instanceof ArrayBuffer ? a : a.buffer;
    };

    Zf = function Zf(a) {
      for (var b = "", c = 0; c < a.length; c += 16E3) {
        b += String.fromCharCode.apply(null, a.subarray(c, c + 16E3));
      }

      return b;
    };

    _.$f = function (a) {
      if (!a) return "";
      a = _.J(a);
      239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));

      if ("TextDecoder" in window) {
        a = new TextDecoder().decode(a);
        if (a.includes("\uFFFD")) throw Error(Ba);
        return a;
      }

      a = escape(Zf(a));

      try {
        return decodeURIComponent(a);
      } catch (b) {
        throw Error(Ba);
      }
    };

    bg = function bg(a, b, c) {
      if (!a) return "";
      if (!c && 0 !== a.byteLength % 2) throw ag.error("Data has an incorrect length, must be even."), Error("Data does not seem to be UTF-16 encoded!");
      c = _.J(a);
      if (b && 255 === c[0] && 254 === c[1] || 254 === c[0] && 255 === c[1]) a = c.subarray(2);
      if (a instanceof ArrayBuffer) var d = a;else c = new Uint8Array(a.byteLength), c.set(_.J(a)), d = c.buffer;
      a = Math.floor(a.byteLength / 2);
      c = new Uint16Array(a);
      d = new DataView(d);

      for (var e = 0; e < a; e++) {
        c[e] = d.getUint16(2 * e, b);
      }

      return Zf(c);
    };

    _.cg = function (a, b) {
      if (_.B.W(a)) return a;

      var c = "",
          d = !!b,
          e = _.J(a);

      239 == e[0] && 187 == e[1] && 191 == e[2] ? c = _.$f(e) : 254 == e[0] && 255 == e[1] ? c = bg(e.subarray(2), !1) : 255 == e[0] && 254 == e[1] && (c = bg(e.subarray(2), !0));

      var f = function (g, k) {
        return g.byteLength <= k || 32 <= g[k] && 126 >= g[k];
      }.bind(null, e);

      ag.debug("Unable to find byte-order-mark, making an educated guess.");
      0 == e[0] && 0 == e[2] ? c = bg(a, !1) : 0 == e[1] && 0 == e[3] ? c = bg(a, !0) : f(0) && f(1) && f(2) && f(3) && (c = _.$f(a));
      if (c) return d && (c = escape(c)), c;
      throw Error("Unable to detect text encoding");
    };

    _.dg = function (a) {
      if ("TextEncoder" in window) return new TextEncoder().encode(a);
      a = encodeURIComponent(a);
      a = unescape(a);

      for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) {
        b[c] = a.charCodeAt(c);
      }

      return b;
    };

    eg = function eg(a, b) {
      for (var c = new Uint8Array(2 * a.length), d = new DataView(c.buffer), e = 0; e < a.length; ++e) {
        d.setUint16(2 * e, a.charCodeAt(e), b);
      }

      return c.buffer;
    };

    _.fg = function (a, b) {
      var c = b || 1,
          d = a.length,
          e = new ArrayBuffer(d * c),
          f;
      4 === c ? f = Vf(e) : 2 === c ? f = Uf(e) : f = _.J(e);

      for (c = 0; c < d; c++) {
        f[c] = a.charCodeAt(c);
      }

      return e;
    };

    _.gg = function (a, b) {
      return String.prototype.startsWith ? a.startsWith(b) : 0 === a.indexOf(b);
    };

    _.hg = function (a, b) {
      if (String.prototype.endsWith) return a.endsWith(b);
      var c = a.length - b.length,
          d = a.lastIndexOf(b, c);
      return -1 !== d && d === c;
    };

    _.ig = function (a) {
      return !!(a && 0 < a.length);
    };

    jg = function jg(a) {
      return !a || 0 === a.length;
    };

    _.lg = function (a) {
      a = a.replace(/<[^>]+>/gi, "");
      kg.innerHTML = a;
      a = kg.textContent;
      return a = a.replace(/<[^>]+>/gi, "");
    };

    _.mg = function (a, b) {
      var c = document.createElement(a),
          d;

      for (d in b) {
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          null === e || void 0 === e ? c.setAttribute(d, "") : c.setAttribute(d, e);
        }
      }

      return c;
    };

    _.ng = function (a, b) {
      a.classList.add(b);
    };

    _.og = function (a, b) {
      if (a && _typeof(b) === _.vd) for (var c in b) {
        b.hasOwnProperty(c) && (a.style[c] = b[c]);
      }
    };

    _.pg = function (a) {
      return document.createElement(a);
    };

    _.rg = function (a) {
      _.zf.call(this, a);

      this.j = a.getSurface().getMedia();
      this.f = "clpp-video-" + qg++;
      this.g = document.createElement(_.ie);
      this.h = this.m = !1;

      _.ng(this.j, this.f);

      document.head.appendChild(this.g);
      this.ib();
    };

    sg = function sg() {};

    _.vg = function (a, b) {
      a && b && (tg.set(a, b), ug.info("Registered TextDisplayerFactory: '" + a + "'"));
    };

    _.wg = function (a, b) {
      var c = b.find(function (d) {
        return (d = tg.get(d)) ? d.$(a) : !1;
      });
      ug.info("Chosen the text displayer: " + c);
      return c ? tg.get(c) : null;
    };

    xg = function xg() {};

    _.zg = function (a, b) {
      for (var c = _.t(_.yg), d = c.next(); !d.done; d = c.next()) {
        if (d = d.value, d.probe(a, b)) return d.create();
      }

      return null;
    };

    _.Gg = function (a, b, c, d) {
      d = void 0 === d ? _.Ag : d;
      this.startTime = a;
      this.endTime = b;
      this.payload = c;
      this.payloadType = d;
      this.positionAlign = this.position = null;
      this.size = 100;
      this.textAlign = _.Bg;
      this.writingMode = _.Cg;
      this.lineInterpretation = _.Dg;
      this.line = null;
      this.lineAlign = _.Eg;
      this.direction = Fg;
      this.region = null;
      this.cssClassList = [];
      this.id = this.backgroundImage = "";
      this.containerRows = null;
    };

    _.Mg = function () {
      this.id = "";
      this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
      this.height = this.width = 100;
      this.viewportAnchorUnits = this.widthUnits = this.heightUnits = _.Hg;
      this.scroll = Ig;
      this.cssClassList = [];
      this.writingMode = this.displayAlign = null;
    };

    _.Ng = function (a, b) {
      var c = a;
      b && (c += '; codecs\x3d"' + b + '"');
      return c;
    };

    _.Og = function (a) {
      a = a.split(".");
      var b = a[0];
      a.pop();
      return [b, a.join(".")];
    };

    _.K = function (a, b, c, d, e) {
      var f = Error.call(this, Pg(a, b, c, d));
      this.message = f.message;
      "stack" in f && (this.stack = f.stack);
      this.a = a;
      this.h = b;
      this.code = c;
      this.data = !d || _.B.W(d) ? {} : d;
      this.g = void 0 === e ? null : e;
      this.j = !1;
      Error.captureStackTrace && Error.captureStackTrace(this, _.K);
    };

    Pg = function Pg(a, b, c, d) {
      a = (a === _.L ? "FATAL" : "RECOVERABLE") + " Clpp-Error [Category " + b + " - Code " + c + "]";
      if (_.B.W(d)) a += ": " + d;else if (null != d && void 0 != d) if (null != d.message && void 0 != d.message) a += ": " + d.message, delete d.message;else try {
        a += ": " + JSON.stringify(d);
      } catch (e) {}
      return a;
    };

    _.Rg = function (a) {
      delete _.Qg[a];
    };

    _.Sg = function (a) {
      a = a.toLowerCase();
      return _.Qg[a] || window.muxjs && a == _.Rb ? !0 : !1;
    };

    Tg = function Tg(a) {
      this.g = a;
      this.a = null;
      this.f = new _.F("clpp.text.Mp4TextParser");
    };

    Ug = function Ug(a, b) {
      this.pd = a;
      this.a = b;
    };

    Vg = function Vg(a, b) {
      this.a = a;
      this.f = b;
    };

    _.Yg = function (a) {
      if (a) {
        var b = a.getName();
        _.Wg.hasOwnProperty(b) ? _.Xg.warn("Player-Factory '" + b + "' already registered") : (_.Wg[b] = a, _.Xg.info("Registered Player-Factory: '" + b + "'"));
      }
    };

    _.Zg = function () {
      this.a = {};
    };

    $g = function $g(a, b, c, d) {
      this.f = a;
      this.rc = b;
      this.a = c;
      this.uj = !!d;
    };

    _.M = function (a, b) {
      if (b) for (var c in b) {
        this[c] = b[c];
      }
      this.defaultPrevented = this.cancelable = this.bubbles = !1;
      this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
      this.type = a;
      this.isTrusted = !1;
      this.target = this.currentTarget = null;
      this.f = this.a = !1;
    };

    ah = function ah(a) {
      this.a = new _.Zg();
      this.f = a;
    };

    _.bh = function () {
      this.a = new _.Zg();
    };

    _.ch = function (a, b, c, d) {
      function e(k) {
        for (var l = _.t(c), m = l.next(); !m.done; m = l.next()) {
          a.off(b, m.value, e);
        }

        d(k);
      }

      for (var f = _.t(c), g = f.next(); !g.done; g = f.next()) {
        a.on(b, g.value, e);
      }
    };

    _.eh = function (a) {
      var b = a.a,
          c = [],
          d;

      for (d in b.a) {
        c.push.apply(c, b.a[d]);
      }

      for (b = 0; b < c.length; ++b) {
        dh(c[b]);
      }

      a.a.clear();
    };

    fh = function fh(a, b, c, d) {
      this.target = a;
      this.type = b;
      this.listener = c;
      this.a = d;
      this.target.addEventListener(b, c, d);
    };

    dh = function dh(a) {
      a.target.removeEventListener(a.type, a.listener, a.a);
      a.target = null;
      a.listener = null;
    };

    gh = function gh(a) {
      this.l = a;
      this.m = a.getConfiguration().streaming.addMissingTimelineCues || !1;
      this.h = null;
      this.f = new _.bh();
      this.a = this.j = null;
      this.g = [];
      this.o = new _.F("clpp.native.Metadata");
    };

    ih = function ih(a, b) {
      a.h = b;
      a.j = a.h.textTracks;
      a.f.on(a.j, _.Jb, function (c) {
        c = c.track;
        c.kind === _.jd && hh(a, c);
      });
    };

    hh = function hh(a, b) {
      function c(l) {
        for (var m = _.t(d), n = m.next(); !n.done; n = m.next()) {
          if (n = n.value, l.startTime === n.startTime && l.endTime === n.endTime) return n;
        }

        m = {
          schemeIdUri: "",
          value: "",
          startTime: 0,
          endTime: 0,
          id: "",
          type: _.jh,
          eventElement: null
        };
        a.m && e && "SCTE35-IN" === l.value.key && 0 < l.startTime ? (m.startTime = 0, m.endTime = l.startTime) : (m.startTime = l.startTime, m.endTime = l.endTime);
        e = !1;
        d.push(m);
        return d[d.length - 1];
      }

      a.o.debug("onMetadata_()");
      b.mode = _.Vc;
      var d = [],
          e = !0;

      if (b.cues) {
        for (var f = _.t(b.cues), g = f.next(); !g.done; g = f.next()) {
          if (g = g.value, !kh(a, g)) {
            var k = c(g);

            switch (g.value.key) {
              case "SCTE35-IN":
              case "SCTE35-OUT":
                k.schemeIdUri = _.xe;
                k.type = _.lh;
                break;

              case "X-CUSTOM-ID":
                k.id = g.value.data;
            }
          }
        }

        f = _.t(d);

        for (g = f.next(); !g.done; g = f.next()) {
          a.l.trigger(new _.M(_.mh, {
            detail: g.value
          }));
        }

        Array.prototype.push.apply(a.g, d);
        nh(a, d, b);
        a.f.off(b, _.Dc);
        a.f.on(b, _.Dc, function (l) {
          l = l.target.activeCues;
          l = l.length ? kh(a, l[0]) : a.a;
          var m;
          if (m = l) m = a.l.getPosition(), m = l.startTime <= m && m < l.endTime;
          if (m) a.a = l, a.l.trigger(new _.M(_.oh, {
            detail: l
          }));else {
            if (l = a.a) l = a.a, m = a.l.getPosition(), l = l.endTime <= m;
            l && (l = a.a, a.a = null, a.l.trigger(new _.M(_.ph, {
              detail: l
            })));
          }
        });
      }
    };

    kh = function kh(a, b) {
      for (var c = _.t(a.g), d = c.next(); !d.done; d = c.next()) {
        if (d = d.value, b.startTime === d.startTime && b.endTime === d.endTime) return d;
      }

      return null;
    };

    nh = function nh(a, b, c) {
      if (a.m) {
        for (; 0 < c.cues.length;) {
          c.removeCue(c.cues[0]);
        }

        b.forEach(function (d) {
          c.addCue(new DataCue(d.startTime, d.endTime, {
            key: "SCTE35-OUT",
            data: null
          }));
        });
      }
    };

    _.qh = function (a, b) {
      this.id = a;
      this.type = b;
      this.roles = [];
      this.channelsCount = this.src = this.mimeType = this.frameRate = this.label = this.language = this.kind = null;
      this.renditions = [];
    };

    _.rh = function (a) {
      return void 0 !== a && null !== a && "" !== a ? a : null;
    };

    uh = function uh(a) {
      if (!a) throw new _.K(_.L, 3, 3101, Ma + a);
      if (!_.B.W(a)) throw new _.K(_.L, 3, 3101, Ma + a + ". Track type must be a string!");

      switch (a.toLowerCase()) {
        case _.O:
          return _.O;

        case _.Q:
          return _.Q;

        case _.sh:
          return _.sh;

        case th:
          return th;
      }

      throw new _.K(_.L, 3, 3101, "Unknown track type: " + a + ".");
    };

    wh = function wh(a, b) {
      a = uh(a);

      var c = _.rh(b.kind),
          d = b.id;

      d || (d = String(_.vh++));
      d = new _.qh(d, c === _.jd ? th : a);
      d.kind = c;
      d.label = _.rh(b.label);
      d.language = _.rh(b.language);
      return d;
    };

    _.xh = function (a, b) {
      this.track = b;
      this.id = a;
      this.originalId = this.drmInfo = this.codec = this.bandwidth = this.height = this.width = null;
    };

    _.R = function () {};

    _.yh = function (a) {
      this.f = a;
      this.a = null;
    };

    zh = function zh(a, b, c) {
      function d() {
        e && a.f();
      }

      a.stop();
      var e = !0,
          f = null;

      a.a = function () {
        c ? clearInterval(f) : clearTimeout(f);
        e = !1;
      };

      f = c ? setInterval(d, 1E3 * b) : setTimeout(d, 1E3 * b);
      return a;
    };

    _.Ah = function (a) {
      this.f = a;
      this.a = null;
    };

    _.Bh = function (a) {
      return Array.isArray(a) ? a : [a];
    };

    Ch = function Ch() {
      this.a = new _.F("clpp.native.TrackManager");
      this.l = null;
      this.g = new _.bh();
      this.h = [];
      this.w = 0;
      this.m = {};
      this.A = [];
      this.f = new Map();
      this.j = new Map();
      this.o = !0;
      this.H = this.we.bind(this, _.O);
      this.J = this.ye.bind(this, _.O);
      this.I = this.xe.bind(this, _.O);
      this.K = this.we.bind(this, _.sh);
      this.P = this.ye.bind(this, _.sh);
      this.M = this.xe.bind(this, _.sh);
      this.B = this.we.bind(this, _.Q);
      this.D = this.ye.bind(this, _.Q);
      this.C = this.xe.bind(this, _.Q);
    };

    Dh = function Dh(a) {
      (a = a.l.getTextDisplayer()) && a.remove(0, Infinity);
    };

    Eh = function Eh(a, b, c) {
      return a.type !== c ? !1 : void 0 !== b.id && null !== b.id && "" !== b.id ? a.id === b.id : _.B.Ma(a, {
        kind: _.rh(b.kind),
        language: _.rh(b.language),
        label: _.rh(b.label)
      }, ["kind", "language", "label"]);
    };

    Hh = function Hh(a, b) {
      var c, d, e, f, g, k, l;
      return _.z(function (m) {
        if (1 == m.a) {
          c = _.zg(b.mimeType, _.pe);
          if (!c) return a.a.warn("Track mimetype is not supported", b), m["return"]();
          d = _.Fh(b.url);
          return _.v(m, a.l.getNetworkEngine().fetch(d).N, 2);
        }

        (e = m.f) && e.data && (f = "External_" + a.w++, a.m[f] = b, g = c.a(_.J(e.data)), k = URL.createObjectURL(new Blob([g])), l = {
          url: k,
          kind: b.kind,
          language: b.language,
          label: b.label,
          mimeType: _.pe
        }, Gh(a, l, f));

        _.w(m);
      });
    };

    Gh = function Gh(a, b, c) {
      if (a.l) {
        var d = a.l.getSurface().getMedia();

        if (d) {
          var e = document.createElement("track");
          e.id = c;
          e.kind = b.kind;
          e.srclang = b.language;
          b.label && (e.label = b.label);
          e.src = jg(b.url) ? URL.createObjectURL(new Blob([])) : b.url;
          d.appendChild(e);
          a.A.push(e);
        }
      }
    };

    Ih = function Ih(a, b) {
      if (!a.l) return null;
      var c = a.l.getSurface();
      if (!c) return null;
      c = c.getMedia();
      if (!c) return null;

      switch (b) {
        case _.Q:
          return c.audioTracks;

        case _.sh:
          return c.videoTracks;

        case _.O:
          return c.textTracks;

        default:
          return null;
      }
    };

    Jh = function Jh(a, b) {
      var c = Ih(a, b);
      c && (c = Array.from(c), b === _.O && (c = c.filter(function (d) {
        return d.kind !== _.jd;
      })));
      return c;
    };

    Kh = function Kh(a, b) {
      return a.h.filter(function (c) {
        return c.type === b;
      });
    };

    Lh = function Lh(a, b) {
      var c = a.f.get(b) || null;
      return c && c.renditions[0];
    };

    Mh = function Mh(a, b) {
      var c = a.j.get(b);
      return c && c.renditions[0];
    };

    Ph = function Ph(a, b, c) {
      var d = Jh(a, b);

      if (c) {
        if (void 0 === a.h.find(function (l) {
          return l.id === c.id;
        })) throw Error("Unknown track with ID " + c.id + " and type " + b);
        if (c.type !== b) throw Error("Types mismatch for track " + c.type + " and arg " + b);
        a.a.debug("Activate track type " + b + " with ID: " + c.id);

        if (d) {
          a.j.set(b, c);
          var e = !0,
              f = !1;

          switch (b) {
            case _.O:
              var g = "mode";
              e = _.Zd;
              f = _.Fc;
              break;

            case _.Q:
              g = "enabled";
              break;

            case _.sh:
              g = "selected";
          }

          if (g) {
            d = _.t(d);

            for (var k = d.next(); !k.done; k = d.next()) {
              k = k.value, k[g] = Eh(c, k, c.type) ? e : f;
            }
          }
        }
      } else if (a.a.debug(_.Aa + b), a.f.get(b) && d && b === _.O) {
        g = _.t(d);

        for (k = g.next(); !k.done; k = g.next()) {
          k.value.mode = _.Fc;
        }

        a.f.set(b, null);
      }

      b === _.Q ? a.l.trigger(new _.M(_.Nh)) : b === _.O && a.l.trigger(new _.M(_.Oh));
    };

    Qh = function Qh(a) {
      return a.enabled || a.selected || a.mode === _.Zd || a.mode === _.Vc;
    };

    Rh = function Rh(a, b, c) {
      c = _.Bh(c);
      a.a.info("Find preferred tracks for", b, c);
      var d = Kh(a, b);
      c.some(function (e) {
        var f = d.find(function (g) {
          return g.language === e;
        });
        return f ? (a.a.info("Will select track with id", f.id), Ph(a, b, f), !0) : !1;
      });
    };

    Sh = function Sh(a) {
      this.l = a;
      this.j = a.getTextDisplayer();
      this.f = this.g = null;
      this.a = new _.bh();
      this.h = !1;
      this.m = new _.F("clpp.native.CueHandler");
    };

    Th = function Th(a, b) {
      var c = b.track;
      c.kind !== _.jd && (c.mode === _.Zd && (c.mode = _.Vc), a.a.on(c, _.Dc, function (d) {
        d = d.target || d.srcElement;
        d.mode = _.Vc;
        d.activeCues && (d = Array.from(d.activeCues).map(a.o), a.j.append(d, []));
      }));
    };

    _.Uh = function (a, b) {
      this.length = (this.f = a) ? a.length : 0;
      this.a = [];
      this.type = void 0 === b ? "total" : b;
    };

    _.Vh = function () {
      this.Oc = new ah(this);
      this.Nc = [];
    };

    _.Wh = function () {};

    _.Yh = function (a, b) {
      var c = void 0 == b ? !0 : b,
          d = _.Xh(a).replace(/\+/g, "-").replace(/\//g, "_");

      return c ? d : d.replace(/[=]*$/, "");
    };

    _.Zh = function (a) {
      a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));

      for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) {
        b[c] = a.charCodeAt(c);
      }

      return b;
    };

    _.$h = function (a) {
      for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length; c += 2) {
        b[c / 2] = window.parseInt(a.substr(c, 2), 16);
      }

      return b;
    };

    _.ai = function (a) {
      for (var b = "", c = 0; c < a.length; ++c) {
        var d = a[c].toString(16);
        1 == d.length && (d = "0" + d);
        b += d;
      }

      return b;
    };

    _.bi = function (a, b) {
      if (!a && !b) return !0;
      if (!a || !b || a.length != b.length) return !1;

      for (var c = 0; c < a.length; ++c) {
        if (a[c] != b[c]) return !1;
      }

      return !0;
    };

    _.ci = function (a) {
      for (var b = 0, c = 0; c < arguments.length; ++c) {
        b += arguments[c].length;
      }

      b = new Uint8Array(+b);

      for (var d = c = 0; d < arguments.length; ++d) {
        b.set(arguments[d], c), c += arguments[d].length;
      }

      return b;
    };

    _.Xh = function (a) {
      a = Zf(_.J(a));
      return btoa(a);
    };

    ei = function ei(a) {
      try {
        var b = a.uris[a.uriIndex],
            c = _.di(b);

        return {
          N: Promise.resolve({
            uri: b,
            data: c.data,
            request: a,
            headers: {
              "content-type": c.contentType
            }
          }),
          request: a,
          abort: function abort() {
            return Promise.resolve();
          }
        };
      } catch (d) {
        return {
          N: Promise.reject(d),
          request: a,
          abort: function abort() {
            return Promise.resolve();
          }
        };
      }
    };

    _.di = function (a) {
      var b = a.split(":");
      if (2 > b.length || "data" !== b[0]) throw _.Of("Bad data URI, failed to parse scheme"), new _.K(_.L, 1, 1004, {
        uri: a
      });
      b = b.slice(1).join(":").split(",");
      if (2 > b.length) throw _.Of("Bad data URI, failed to extract encoding and MIME type"), new _.K(_.L, 1, 1004, {
        uri: a
      });
      var c = b[0];
      b = window.decodeURIComponent(b.slice(1).join(","));
      c = c.split(";");
      var d = "";
      1 < c.length && (d = c[1]);
      if ("base64" === d) a = _.Zh(b).buffer;else {
        if (d) throw _.Of("Bad data URI, unknown encoding " + d), new _.K(_.L, 1, 1005, {
          uri: a
        });
        a = _.dg(b).buffer;
      }
      return {
        data: a,
        contentType: c[0]
      };
    };

    gi = function gi() {
      this.a = fi();
    };

    hi = function hi(a) {
      var b = new gi();
      b.a = a.a;
      return b;
    };

    fi = function fi() {
      return window.performance && window.performance.now ? window.performance.now() : Date.now();
    };

    ii = function ii(a) {
      this.a = new Uint8Array(a || 65536);
      this.f = 0;
      this.g = new gi();
    };

    _li = function li(a, b, c) {
      return b.read().then(function (d) {
        var e = d.done;
        d = d.value;
        null != d && (ji(a, d), ki(c, d.byteLength, fi() - a.g.a), a.g.a = fi());
        return e ? (e = a.a.buffer, a.a.byteLength !== a.f && (e = e.slice(0, a.f)), Promise.resolve(e)) : Promise.resolve().then(function () {
          return _li(a, b, c);
        });
      });
    };

    ji = function ji(a, b) {
      var c = a.f + b.byteLength;

      if (a.a.byteLength < c) {
        for (var d = a.a.byteLength; d < c;) {
          d *= 2;
        }

        c = new Uint8Array(d);
        c.set(a.a);
        a.a = c;
      }

      a.a.set(b, a.f);
      a.f += b.byteLength;
    };

    mi = function mi(a) {
      var b = void 0 === b ? 2 : b;
      this.a = new Uint8Array(a);
      this.g = b;
      this.f = 0;
    };

    ni = function ni(a, b) {
      var c = a.f + b.byteLength;

      if (c > a.a.byteLength) {
        var d = a.a;
        a.a = new Uint8Array(Math.max(Math.ceil(a.a.buffer.byteLength * a.g), c));
        a.a.set(d);
      }

      a.a.set(b, a.f);
      a.f += b.byteLength;
    };

    qi = function qi(a) {
      a = void 0 === a ? 1E6 : a;
      this.h = new mi(a);
      this.length = a;
      this.f = this.a = this.g = 0;
      this.j = null;
      this.m = -1;
      this.o = new gi();
    };

    _ti = function ti(a, b, c, d) {
      return b.read().then(function (e) {
        var f = e.done;
        e = e.value;

        if (d && e) {
          var g = fi() - a.o.a;
          100 < g && (d(e.byteLength, g), a.o.a = fi());
        }

        if (f) return f = ri(a), (f = c(!0, f)) ? f.then(function () {
          return a.h.a.buffer;
        }) : Promise.resolve(a.h.a.buffer);
        f = Promise.resolve();

        if (null != e) {
          ni(a.h, e);
          a.a = a.g;
          a.f = a.h.f;
          a.j = new DataView(a.h.a.buffer, 0, a.h.f);
          g = si(a);

          for (e = []; g;) {
            e.push(g), g = si(a);
          }

          if (0 < e.length) {
            g = e[0];

            if (1 < e.length) {
              g = e[0];
              var k = e[e.length - 1],
                  l = k.end - g.start;
              g = {
                start: g.start,
                end: k.end,
                length: l,
                data: new DataView(a.h.a.buffer, g.start, l),
                count: e.length
              };
            }

            (e = c(!1, g)) && (f = e);
          }
        }

        return f.then(function () {
          return _ti(a, b, c, d);
        });
      });
    };

    si = function si(a) {
      if (0 <= a.m && a.f < a.m) return null;

      for (var b = ui(a); null !== b;) {
        if (b.name === _.gd) {
          var c = {
            start: a.g,
            end: b.end,
            length: b.end - a.g,
            data: new DataView(a.h.a.buffer, a.g, b.end - a.g),
            count: 1
          };
          a.g = b.end;
          return c;
        }

        b = ui(a);
      }

      return null;
    };

    ui = function ui(a) {
      var b = a.a;
      if (a.a + 4 >= a.f) return a.a = a.f, null;
      var c = vi(a);
      if (a.a + 4 >= a.f) return a.a = a.f, null;
      var d = vi(a);
      d = String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);

      switch (c) {
        case 0:
          c = a.f - b;
          break;

        case 1:
          if (a.a + 8 >= a.f) return a.a = a.f, null;

          try {
            var e = a.j.getUint32(a.a, !1);
            var f = a.j.getUint32(a.a + 4, !1);
          } catch (g) {
            throw new _.K(_.L, 3, 3E3);
          }

          if (2097151 < e) throw new _.K(_.L, 3, 3E3);
          a.a += 8;
          c = e * Math.pow(2, 32) + f;
      }

      c = b + c;
      a.m = c;
      return a.f >= c ? (a.a = c, {
        name: d,
        start: b,
        end: c
      }) : null;
    };

    vi = function vi(a) {
      var b = a.j.getUint32(a.a, !1);
      a.a += 4;
      return b;
    };

    ri = function ri(a) {
      var b = null;
      a.g !== a.f && (b = {
        start: a.g,
        end: a.f,
        length: a.f - a.g,
        data: new DataView(a.h.a.buffer, a.g, a.f - a.g),
        count: -1
      });
      return b;
    };

    wi = function wi() {};

    _.xi = function () {
      return !!navigator.userAgent.match(/Edge?\//);
    };

    _.zi = function (a) {
      return _.yi("Tizen" + (a ? " " + String(a) : ""));
    };

    _.Ai = function () {
      return _.yi("Web0S");
    };

    _.Bi = function () {
      return _.yi("CrKey");
    };

    _.Ci = function () {
      return !!navigator.vendor && navigator.vendor.includes("Apple") && !_.zi();
    };

    _.Di = function () {
      return /(?:iPhone|iPad|iPod|Android)/.test(navigator.userAgent);
    };

    _.Ei = function () {
      return /(?:iPhone|iPad|iPod)/.test(navigator.userAgent);
    };

    _.yi = function (a) {
      return (navigator.userAgent || "").includes(a);
    };

    Hi = function Hi() {
      if (Fi) return Fi;
      Gi || (Gi = new _.Ah(function () {
        Fi = null;
      }));
      (Fi = document.querySelector(_.Ee) || document.querySelector(_.Xb)) || (Fi = document.createElement(_.Ee));
      Gi.X(1);
      return Fi;
    };

    Ji = function Ji(a, b) {
      try {
        return parseInt(b, 10);
      } catch (c) {
        Ii.warn("Unable to parse version number for '" + b + "' from '" + a + "'");
      }

      return -1;
    };

    Ki = function Ki(a) {
      var b = {
        major: -1,
        name: ve
      };
      if (!a) return b;
      var c = a.replace(/_/g, ".");
      b.name = c;
      c = c.split(".");
      1 <= c.length && (b.major = Ji(a, c[0]));
      2 <= c.length && (b.minor = Ji(a, c[1]));
      3 <= c.length && (b.patch = Ji(a, c[2]));
      4 <= c.length && (b.build = Ji(a, c[3]));
      return b;
    };

    Li = function Li(a, b) {
      if (!a || !b || 0 === b.length) return !1;

      for (var c = 0; c < b.length; c++) {
        if (0 <= a.indexOf(b[c])) return !0;
      }

      return !1;
    };

    Ui = function Ui() {
      var a = Mi();
      if (!a) return Ni;
      var b = a.match(/^.+?(?=\))/);
      if (!b) return Ni;
      b = b[0];
      if (Li(b, ["iphone", "ipad"])) return Oi;
      if (Li(b, ["android"])) return Pi;
      if (Li(b, ["macintosh"])) return Qi;
      if (Li(b, ["windows nt"])) return Ri;
      if (Li(b, ["tizen"])) return Si;
      if (Li(b, ["linux"])) return Ti;
      Ii.warn("Unable to identify OS from user agent: " + a);
      return Ni;
    };

    Wi = function Wi() {
      var a = Mi(),
          b = "ie edge opera firefox safari chrome".split(" ");
      var c = Ui();

      for (var d = Vi[c], e = 0, f = b.length; e < f; e++) {
        if (c = d[b[e]] && a.match(d[b[e]])) return Ki(c[1]);
      }

      return Ki("");
    };

    Mi = function Mi() {
      var a = window.navigator.userAgent;
      return a = a.toLowerCase();
    };

    _.Yi = function () {
      var a = Ui();
      var b = Ui();
      var c = Vi[b];

      if (c) {
        c = Mi().match(c.os_version)[1];
        c = Ki(c);
        if (b === Ri) if ("5.1" === c.name) c.name = "xp";else if ("6.1" === c.name) c.name = "7";else if ("6.2" === c.name || "6.3" === c.name) c.name = "8";
        b = c;
      } else b = Ki("");

      a: {
        c = Mi();
        var d = "ie edge opera firefox safari chrome".split(" "),
            e = Ui();
        e = Vi[e];

        for (var f = 0, g = d.length; f < g; f++) {
          if (e[d[f]] && c.match(e[d[f]])) {
            c = d[f];
            break a;
          }
        }

        c = Xi;
      }

      return {
        os: a,
        osVersion: b,
        browser: c,
        browserVersion: Wi()
      };
    };

    bj = function bj(a) {
      var b = new Zi(),
          c;

      for (c in a.headers) {
        b.append(c.toLowerCase(), a.headers[c]);
      }

      var d = new $i(),
          e = {
        Jc: !1,
        cg: !1
      };
      b = {
        N: aj(a.uris[a.uriIndex], a, {
          body: a.body || void 0,
          headers: b,
          method: a.method,
          signal: d.signal,
          credentials: a.allowCrossSiteCredentials ? "include" : void 0
        }, e),
        request: a,
        abort: function abort() {
          e.Jc || (e.Jc = !0, d.abort());
          return Promise.resolve();
        }
      };

      if (a = a.timeout) {
        var f = window.setTimeout(function () {
          e.cg = !0;
          d.abort();
        }, a);
        b.N = b.N["finally"](function () {
          window.clearTimeout(f);
        });
      }

      return b;
    };

    aj = function aj(a, b, c, d) {
      var e, f, g, k, l, m, n, p, r, q, x, y, D, I, E;
      return _.z(function (G) {
        switch (G.a) {
          case 1:
            return e = cj, k = new gi(), l = hi(k), _.mf(G, 2), _.v(G, e(a, c), 4);

          case 4:
            f = G.f;
            m = f.headers.get(sa);
            dj(b, m);
            n = m ? parseInt(m, 10) : 0;
            if (b.onFragment && b.type === _.ej) return q = f.body.getReader(), x = new qi(n), y = function y(N, P) {
              if (d.Jc) return null;
              P && P.data && (ki(b, P.data.byteLength, fi() - k.a), k.a = fi());
              return b.onFragment && P ? b.onFragment(P) : null;
            }, _.v(G, _ti(x, q, y, b.onProgress), 8);
            p = f.body.getReader();
            r = new ii(n);
            return _.v(G, _li(r, p, b), 7);

          case 7:
            g = G.f;
            G.G(6);
            break;

          case 8:
            g = G.f;

          case 6:
            _.nf(G, 3);

            break;

          case 2:
            D = _.of(G);
            if (d.Jc) throw new _.K(1, 1, 7001, {
              url: a,
              request: b
            });
            if (d.cg) throw new _.K(1, 1, 1003, {
              url: a,
              request: b
            });

            _.Of("Error while fetching data:", D);

            throw new _.K(1, 1, 1002, {
              url: a,
              error: D,
              request: b,
              status: -1
            }, D);

          case 3:
            I = {};
            E = f.headers;
            E.forEach(function (N, P) {
              I[P.trim()] = N;
            });
            if (d.Jc) throw new _.K(1, 1, 7001, {
              url: a,
              request: b
            });
            return G["return"](_.fj(I, g, f.status, a, f.url, b, fi() - l.a));
        }
      });
    };

    _.gj = function () {
      var a,
          b,
          c = new Promise(function (d, e) {
        a = d;
        b = e;
      });
      c.resolve = a;
      c.reject = b;
      return c;
    };

    ij = function ij(a) {
      var b = a.uris[a.uriIndex],
          c = new hj(),
          d = new gi(),
          e = hi(d),
          f = 0,
          g = new _.gj();
      c.open(a.method, b, !0);
      c.responseType = "arraybuffer";
      c.timeout = a.timeout;
      c.withCredentials = a.allowCrossSiteCredentials;
      var k = !1,
          l = !1;

      c.onreadystatechange = function (n) {
        n = n.target;
        n.readyState >= XMLHttpRequest.HEADERS_RECEIVED && !k && (n = n.getResponseHeader(sa), dj(a, n), k = !0);
      };

      c.onload = function (n) {
        n = n.target;
        var p = (n.getAllResponseHeaders() || "").trim().split("\r\n"),
            r = {};
        p = _.t(p);

        for (var q = p.next(); !q.done; q = p.next()) {
          q = q.value.split(": "), r[q[0].toLowerCase()] = q.slice(1).join(": ");
        }

        try {
          var x = fi() - e.a;
          l || ki(a, n.response ? n.response.length : 0, x);

          var y = _.fj(r, n.response, n.status, b, n.responseURL, a, x);

          g.resolve(y);
        } catch (D) {
          g.reject(D);
        }
      };

      c.onerror = function (n) {
        n = n.target;
        if (0 >= n.status) g.reject(new _.K(1, 1, 1002, {
          url: b,
          request: a,
          status: n.status
        }));else {
          var p = n.getAllResponseHeaders(),
              r = {};

          if (p) {
            p = _.t(p.trim().split("\r\n"));

            for (var q = p.next(); !q.done; q = p.next()) {
              q = q.value.split(": "), r[q[0].toLowerCase()] = q.slice(1).join(": ");
            }
          }

          n = _.fj(r, n.response, n.status, b, n.responseURL, a, fi() - e.a);
          g.resolve(n);
        }
      };

      c.ontimeout = function () {
        g.reject(new _.K(1, 1, 1003, {
          url: b,
          request: a
        }));
      };

      c.onprogress = function (n) {
        var p = fi() - d.a;
        d.a = fi();
        if (100 < p || n.lengthComputable && n.loaded === n.total) ki(a, n.loaded - f, p), f = n.loaded, l = !0;
      };

      for (var m in a.headers) {
        c.setRequestHeader(m.toLowerCase(), a.headers[m]);
      }

      c.send(a.body);
      return {
        N: g,
        request: a,
        abort: function abort() {
          c.abort();
          g.reject(new _.K(1, 1, 7001, {
            url: b,
            request: a
          }));
          return Promise.resolve();
        }
      };
    };

    _.jj = function (a) {
      var b;
      a instanceof _.jj ? (kj(this, a.Ra), this.fc = a.fc, this.Fa = a.Fa, lj(this, a.Dc), this.ra = a.ra, mj(this, nj(a.a)), this.Sb = a.Sb) : a && (b = String(a).match(oj)) ? (kj(this, b[1] || "", !0), this.fc = pj(b[2] || ""), this.Fa = pj(b[3] || "", !0), lj(this, b[4]), this.ra = pj(b[5] || "", !0), mj(this, b[6] || "", !0), this.Sb = pj(b[7] || "")) : this.a = new qj(null);
    };

    kj = function kj(a, b, c) {
      a.Ra = c ? pj(b, !0) : b;
      a.Ra && (a.Ra = a.Ra.replace(/:$/, ""));
    };

    lj = function lj(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.Dc = b;
      } else a.Dc = null;
    };

    mj = function mj(a, b, c) {
      b instanceof qj ? a.a = b : (c || (b = rj(b, sj)), a.a = new qj(b));
    };

    pj = function pj(a, b) {
      return a ? b ? decodeURI(a) : decodeURIComponent(a) : "";
    };

    rj = function rj(a, b, c) {
      return _typeof(a) === _.ge ? (a = encodeURI(a).replace(b, tj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    };

    tj = function tj(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    };

    qj = function qj(a) {
      this.f = a || null;
    };

    nj = function nj(a) {
      var b = new qj();
      b.f = a.f;

      if (a.a) {
        var c = {},
            d;

        for (d in a.a) {
          c[d] = a.a[d].concat();
        }

        b.a = c;
        b.g = a.g;
      }

      return b;
    };

    _.uj = function () {
      return {
        maxAttempts: 1,
        baseDelay: 1E3,
        backoffFactor: 2,
        fuzzFactor: .5,
        timeout: 0
      };
    };

    vj = function vj(a, b) {
      a.timeout = b.timeout;
      a.baseDelay = b.baseDelay;
      a.backoffFactor = b.backoffFactor;
      a.fuzzFactor = b.fuzzFactor;
      a.maxAttempts = b.maxAttempts;
    };

    _.xj = function () {
      this.f = [];
      this.g = [];
      this.j = !1;
      this.h = new _.wj();
      this.a = {};
      this.a.data = ei;
      !window.fetch || !window.AbortController || _.zi(6) || _.Ai() && 68 < _.Yi().browserVersion.major ? (this.a.http = ij, this.a.https = ij) : (this.a.http = bj, this.a.https = bj);
    };

    yj = function yj(a, b, c, d) {
      d = void 0 === d ? "HEAD" : d;
      var e, f;
      return _.z(function (g) {
        switch (g.a) {
          case 1:
            if (!navigator.onLine) return g["return"](!1);

            if (!b) {
              g.G(2);
              break;
            }

            e = _.Fh(b, c);
            e.method = d;
            c || (e.timeout = 5E3);
            e.headers["cache-control"] = "no-cache";

            _.mf(g, 4);

            return _.v(g, a.fetch(e).N, 6);

          case 6:
            _.nf(g, 2);

            break;

          case 4:
            if (f = _.of(g), 1002 === f.code || 1003 === f.code) return g["return"](!1);

          case 2:
            return g["return"](!0);
        }
      });
    };

    _.Fh = function (a, b) {
      _.B.W(a) && (a = {
        uris: [a]
      });
      Array.isArray(a) && (a = {
        uris: a
      });
      var c = {
        uris: a.uris || [],
        type: a.type || _.zj,
        uriIndex: 0,
        method: a.method || "GET",
        body: a.body || null,
        headers: Object.assign({}, a.headers),
        allowCrossSiteCredentials: a.allowCrossSiteCredentials || !1,
        onProgress: a.onProgress || null,
        onFragment: a.onFragment || null,
        maxAttempts: a.maxAttempts || 1,
        currentAttempt: 0,
        baseDelay: a.baseDelay || 1E3,
        backoffFactor: a.backoffFactor || 2,
        fuzzFactor: a.fuzzFactor || .5,
        timeout: a.timeout || 0,
        requestModifiers: a.requestModifiers || [],
        responseModifiers: a.responseModifiers || [],
        startTime: a.startTime || null,
        endTime: a.endTime || null,
        contentType: a.contentType || null,
        licenseRequestType: a.licenseRequestType || null,
        sessionId: null,
        bytesRemaining: -1,
        bytesLoaded: -1,
        bytesTotal: -1,
        timescale: a.timescale || null
      };
      a.keyInfo && (c.keyInfo = a.keyInfo);
      b && vj(c, b);
      return c;
    };

    _.fj = function (a, b, c, d, e, f, g) {
      e && (d = e);
      e = {
        uri: d,
        data: b || new ArrayBuffer(0),
        headers: a,
        status: c,
        fromCache: !!a["x-shaka-from-cache"],
        timeMs: g,
        request: f
      };
      if (200 <= c && 299 >= c && 202 !== c) return e;
      g = null;

      try {
        g = _.cg(b, !0);
      } catch (k) {}

      _.H("HTTP error text:", g);

      throw new _.K(401 === c || 403 === c ? _.L : 1, 1, 1001, {
        url: d,
        status: c,
        responseText: g,
        headers: a,
        request: f,
        response: e
      });
    };

    dj = function dj(a, b) {
      var c = parseInt(b, 10);
      Number.isNaN(c) && (c = -1);
      a.bytesTotal = c;
      a.bytesLoaded = 0;
      a.bytesRemaining = c;
    };

    ki = function ki(a, b, c) {
      0 < a.bytesRemaining && (a.bytesRemaining -= b);
      a.bytesLoaded += b;
      if (a.onProgress) a.onProgress(b, c);
    };

    Aj = function Aj() {};

    _.Dj = function () {
      var a = Infinity;
      navigator.connection && navigator.connection.saveData && _.Di() && (a = 360);

      var b = _.uj();

      b.maxAttempts = 3;
      a = {
        source: "",
        license: Bj,
        viewerId: void 0,
        autoplay: void 0,
        pauseWhenInBackground: !1,
        manifest: {
          attemptParameters: _.uj(),
          availabilityWindowOverride: NaN,
          clockSyncUri: "",
          ignoreDrmInfo: !1,
          xlinkFailGracefully: !1,
          autoCorrectDrift: !0
        },
        abr: {
          enabled: !0,
          defaultBandwidthEstimate: 1E3,
          switchInterval: 8,
          bandwidthUpgradeTarget: .85,
          bandwidthDowngradeTarget: .95,
          useSwitchIntervalForInitialSwitch: !1,
          restrictions: Cj(a)
        },
        drm: null,
        enableHtmlCue: !0,
        preferredAudioLanguage: "",
        preferredTextLanguage: "",
        preferredAudioRole: "",
        preferredTextRole: "",
        preferredAudioChannelCount: 2,
        preferredAudioCodec: [],
        preferredVideoCodec: [],
        volume: null,
        startTime: null,
        loop: !1,
        lowLatencyMode: !1,
        suggestedPresentationDelay: void 0,
        muted: void 0,
        streaming: {
          attemptParameters: b,
          bufferingGoal: 10,
          rebufferingGoal: 2,
          bufferBehind: 30,
          ignoreTextStreamFailures: !1,
          alwaysStreamText: !1,
          startAtSegmentBoundary: !1,
          smallGapLimit: .5,
          jumpLargeGaps: !0,
          durationBackoff: 1,
          maxSegmentToMediaOffset: 1,
          forceNativeTS: !1,
          safeSeekOffset: 5,
          stallEnabled: !0,
          stallThreshold: 3,
          stallSkip: .5,
          bufferLimitUpdateInterval: .5,
          overridePasp: !1,
          enableLiveEdgeChasing: !1,
          chasingRate: 1.15,
          startChasingAt: 5,
          stopChasingAt: 2,
          chaseJumpDistance: 10,
          patchEdgeWhenMixedContent: !1
        },
        restrictions: Cj(),
        tizen: {
          sideStreamText: _.zi(2)
        }
      };
      _.Ai() && (a.streaming.stallEnabled = !1);
      _.zi() && (a.streaming.stallEnabled = !0, a.streaming.stallThreshold = 1, a.streaming.stallSkip = 0);
      return a;
    };

    _.Fj = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        b[c] = arguments[c];
      }

      if (!b) return _.Dj();
      c = [_.Dj()];
      var d = !1;
      b = _.t(b);

      for (var e = b.next(); !e.done; e = b.next()) {
        e = e.value, null !== e && void 0 !== e && (_.B.W(e) && (e = {
          source: e
        }), e.lowLatencyMode && !d && (c.push({
          suggestedPresentationDelay: 0,
          streaming: {
            rebufferingGoal: .1,
            bufferLimitUpdateInterval: .01,
            attemptParameters: {
              maxAttempts: 3,
              baseDelay: 250,
              backoffFactor: 1
            }
          },
          abr: {
            bandwidthUpgradeTarget: .6,
            bandwidthDowngradeTarget: .95
          },
          manifest: {
            ek: {
              clockSyncUri: "//time.akamai.com"
            }
          }
        }), d = !0), c.push(e));
      }

      c = _.B.Qa.apply(null, c);
      _.B.W(c.volume) && ("" === "" + c.volume ? c.volume = null : c.volume = Number(c.volume));
      if (!_.B.R(c.volume) && (!_.B.ja(c.volume) || _.B.isNaN(c.volume))) throw new _.K(_.L, 7, 7100, "config.volume is not a number");
      if (!_.B.R(c.preferredTextLanguage) && !_.B.W(c.preferredTextLanguage) && !Array.isArray(c.preferredTextLanguage)) throw new _.K(_.L, 7, 7100, "config.preferredTextLanguage is not a string or an array");
      if (!_.B.R(c.preferredAudioLanguage) && !_.B.W(c.preferredAudioLanguage) && !Array.isArray(c.preferredAudioLanguage)) throw new _.K(_.L, 7, 7100, "config.preferredAudioLanguage is not a string or an array");
      if (!_.B.R(c.preferredAudioCodec) && !_.B.W(c.preferredAudioCodec) && !Array.isArray(c.preferredAudioCodec)) throw new _.K(_.L, 7, 7100, "config.preferredAudioCodec is not a string or an array");
      if (!_.B.R(c.preferredVideoCodec) && !_.B.W(c.preferredVideoCodec) && !Array.isArray(c.preferredVideoCodec)) throw new _.K(_.L, 7, 7100, "config.preferredVideoCodec is not a string or an array");

      if (!_.B.R(c.drm)) {
        if (c.drm.env && !_.B.W(c.drm.env)) throw new _.K(_.L, 7, 7100, "config.drm.env is not a string");
        if (c.drm.offlineId && !_.B.W(c.drm.offlineId)) throw new _.K(_.L, 7, 7100, "config.drm.offlineId is not a string");
      }

      if (d = c.streaming) {
        d.bufferingGoal = Number(d.bufferingGoal);
        d.rebufferingGoal = Number(d.rebufferingGoal);
        d.bufferBehind = Number(d.bufferBehind);
        d.smallGapLimit = Number(d.smallGapLimit);
        d.durationBackoff = Number(d.durationBackoff);
        if (!_.B.ja(d.bufferingGoal) || _.B.isNaN(d.bufferingGoal)) throw new _.K(_.L, 7, 7100, "config.streaming.bufferingGoal is not a number");
        if (!_.B.ja(d.rebufferingGoal) || _.B.isNaN(d.rebufferingGoal)) throw new _.K(_.L, 7, 7100, "config.streaming.rebufferingGoal is not a number");
        if (d.rebufferingGoal > d.bufferingGoal) throw new _.K(_.L, 7, 7100, "config.streaming.rebufferingGoal must be \x3e\x3d bufferingGoal");
        if (!_.B.ja(d.bufferBehind) || _.B.isNaN(d.bufferBehind)) throw new _.K(_.L, 7, 7100, "config.streaming.bufferBehind is not a number");
        if (!_.B.ja(d.smallGapLimit) || _.B.isNaN(d.smallGapLimit)) throw new _.K(_.L, 7, 7100, "config.streaming.smallGapLimit is not a number");
        if (!_.B.ja(d.durationBackoff) || _.B.isNaN(d.durationBackoff)) throw new _.K(_.L, 7, 7100, "config.streaming.durationBackoff is not a number");
        d = c.manifest;
        if (_.B.R(d.availabilityWindowOverride)) d.availabilityWindowOverride = NaN;else if (_typeof(d.availabilityWindowOverride) !== _.ud) throw new _.K(_.L, 7, 7100, "Invalid value for |manifest.availabilityWindowOverride|");
        Ej(c.restrictions);
        Ej(c.abr.restrictions);
        c.abr.initialRestrictions && Ej(c.abr.initialRestrictions);
      }

      return c;
    };

    Cj = function Cj(a) {
      a = void 0 === a ? Infinity : a;
      return {
        minWidth: 0,
        maxWidth: Infinity,
        minHeight: 0,
        maxHeight: a,
        minPixels: 0,
        maxPixels: Infinity,
        minBandwidth: 0,
        maxBandwidth: Infinity
      };
    };

    Ej = function Ej(a) {
      _.B.R(a.maxPixels) && (a.maxPixels = Infinity);
      _.B.R(a.maxBandwidth) && (a.maxBandwidth = Infinity);
      _.B.R(a.maxHeight) && (a.maxHeight = Infinity);
      _.B.R(a.maxWidth) && (a.maxWidth = Infinity);
      _.B.R(a.minPixels) && (a.minPixels = 0);
      _.B.R(a.minBandwidth) && (a.minBandwidth = 0);
      _.B.R(a.minHeight) && (a.minHeight = 0);
      _.B.R(a.minWidth) && (a.minWidth = 0);
      a.minWidth = Number(a.minWidth);
      a.maxWidth = Number(a.maxWidth);
      a.minHeight = Number(a.minHeight);
      a.maxHeight = Number(a.maxHeight);
      a.minBandwidth = Number(a.minBandwidth);
      a.maxBandwidth = Number(a.maxBandwidth);
      a.minPixels = Number(a.minPixels);
      a.maxPixels = Number(a.maxPixels);
      if (Number.isNaN(a.minWidth) || Number.isNaN(a.maxWidth) || Number.isNaN(a.minHeight) || Number.isNaN(a.maxHeight) || Number.isNaN(a.minBandwidth) || Number.isNaN(a.maxBandwidth) || Number.isNaN(a.minPixels) || Number.isNaN(a.maxPixels)) throw new _.K(_.L, 7, 7100, "Restrictions contain NaN");
    };

    _.Gj = function (a) {
      return _typeof(a) === _.vd && !Array.isArray(a) && a.hasOwnProperty("source");
    };

    _.Hj = function (a) {
      _.Vh.call(this);

      this.log = new _.F(a);
      this.configuration = this.ed = _.Dj();
      this.o = this.A = null;
      this.td = this.fe = !1;
      this.Yf = new _.F("clpp.video.events");
      this.md = null;
      this.kd = -1;
      this.Hj = this.tj.bind(this);
      this.zf = new _.xj();
      this.K = new _.bh();
      this.Ea = this.vc = this.J = null;
    };

    _.Jj = function (a) {
      return _.Ij.get(a) || null;
    };

    _.Lj = function (a) {
      _.Ij.get(a.id()) ? Kj.warn("Component already in use.") : _.Ij.set(a.id(), a);
    };

    Mj = function Mj(a) {
      for (var b = _.t(_.Ij.values()), c = b.next(); !c.done; c = b.next()) {
        a(c.value);
      }
    };

    Nj = function Nj() {
      this.a = this.f = null;
      this.g = new _.F("clpp.drm.csl");
    };

    Oj = function Oj(a, b) {
      3 === b.type && (a.f && (a.g.debug("Attaching tracking token"), b.headers[Ve] = a.f), a.a && (b.headers[We] = a.a));
    };

    Pj = function Pj(a, b) {
      if (b.request && 3 === b.request.type) {
        a.f = b.headers[Ve];
        a.a = b.headers[We];
        var c = b.headers["x-dt-csl-renewal-info"];
        a.f && a.g.debug("Loaded tracking token " + a.f);
        a.a && a.g.debug("Loaded followup token " + a.a);
        if (c) return c = JSON.parse(_.$f(_.Zh(c))), {
          delay: c.renewalPeriod,
          $j: {
            maxAttempts: c.retryCount,
            baseDelay: 1E3 * c.retryPeriod,
            backoffFactor: 1,
            fuzzFactor: 0,
            timeout: 0
          }
        };
      }

      return null;
    };

    _.Qj = function (a) {
      this.w = a;
      this.f = {};
    };

    Rj = function Rj(a, b) {
      var c = _.Yi();

      if (c.os !== Pi || "chrome" !== c.browser) return a || b;
    };

    _.Vj = function (a, b) {
      var c = {},
          d = b ? b.widevineVideoRobustness : void 0,
          e = b ? b.widevineAudioRobustness : void 0,
          f = a.f[_.Sj];
      f && (c[_.Sj] = {
        licenseUrl: f.licenseUrl,
        videoRobustness: Rj(d, f.videoRobustness),
        audioRobustness: Rj(e, f.audioRobustness),
        modifiers: f.modifiers,
        distinctiveIdentifierRequired: f.distinctiveIdentifierRequired,
        persistentStateRequired: f.persistentStateRequired,
        serverCertificate: f.serverCertificate
      });
      (f = a.f[_.Tj]) && (c[_.Tj] = {
        licenseUrl: f.licenseUrl,
        certificateUrl: f.certificateUrl,
        modifiers: f.modifiers
      });
      d = b ? b.playReadyVideoRobustness : void 0;
      e = b ? b.playReadyAudioRobustness : void 0;
      (f = a.f[_.Uj]) && (c[_.Uj] = {
        licenseUrl: f.licenseUrl,
        videoRobustness: d || f.videoRobustness,
        audioRobustness: e || f.audioRobustness,
        individualizationServer: f.individualizationServer,
        useLegacySystem: f.useLegacySystem,
        modifiers: f.modifiers
      });
      return c;
    };

    _.Xj = function (a) {
      _.Wj[a.getName()] = a;
    };

    _.Yj = function (a) {
      var b = {
        attemptParameters: _.uj(),
        enforceSingleSession: !1,
        delayLicenseRequestUntilPlayed: !1,
        Ua: {}
      };

      if (a && (b.enforceSingleSession = !!a.enforceSingleSession, b.delayLicenseRequestUntilPlayed = !!a.delayLicenseRequestUntilPlayed, b.preferredDrmSystem = a.preferredDrmSystem, a.attemptParameters && (b.attemptParameters = a.attemptParameters), a.env)) {
        var c = _.Wj[a.env] || null;
        if (!c) throw _.H(_.ua, _.bb + a.env + _.aa), new _.K(_.L, 6, 6015, _.va + a.env + "' is missing.");
        b.Ua = _.Vj(c, a.customData) || {};
        _.gg(a.env.toLowerCase(), Lc) && (b.enforceSingleSession = !0);
      }

      return b;
    };

    _.Zj = function (a, b) {
      this.f = _.B.ja(a) ? new DataView(new ArrayBuffer(a), 0, a) : a;
      this.a = 0;
      this.g = !!b;
      this.buffer = this.f.buffer;
    };

    _.bk = function (a, b, c) {
      var d = c || 0;
      c = b.byteLength - d;

      var e = _.J(a.f.buffer);

      b = _.J(b.buffer, d, c);

      try {
        e.set(b, a.a), a.a += c;
      } catch (f) {
        _.ak();
      }
    };

    _.S = function (a, b) {
      try {
        a.f.setUint32(a.a, b, a.g), a.a += 4;
      } catch (c) {
        _.ak();
      }
    };

    _.ak = function () {
      throw new _.K(_.L, 3, 3E3);
    };

    _.ck = function (a, b) {
      this.f = a;
      this.g = void 0 === b ? !0 : b;
      this.a = 0;
    };

    _.dk = function (a) {
      return a.a < a.f.byteLength;
    };

    _.fk = function (a) {
      try {
        var b = a.f.getUint8(a.a);
        a.a += 1;
        return b;
      } catch (c) {
        ek();
      }
    };

    _.gk = function (a) {
      try {
        var b = a.f.getUint16(a.a, a.g);
        a.a += 2;
        return b;
      } catch (c) {
        ek();
      }
    };

    _.hk = function (a) {
      try {
        var b = a.f.getUint32(a.a, a.g);
        a.a += 4;
        return b;
      } catch (c) {
        ek();
      }
    };

    _.ik = function (a) {
      try {
        var b = a.f.getInt32(a.a, a.g);
        a.a += 4;
        return b;
      } catch (c) {
        ek();
      }
    };

    _.jk = function (a) {
      var b = 0;

      try {
        if (a.g) {
          var c = a.f.getUint32(a.a, !0);
          b = a.f.getUint32(a.a + 4, !0);
        } else b = a.f.getUint32(a.a, !1), c = a.f.getUint32(a.a + 4, !1);
      } catch (d) {
        ek();
      }

      if (2097151 < b) throw new _.K(_.L, 3, 3001);
      a.a += 8;
      return b * Math.pow(2, 32) + c;
    };

    _.kk = function (a, b) {
      a.a + b > a.f.byteLength && ek();
      var c = a.f.buffer.slice(a.a, a.a + b);
      a.a += b;
      return _.J(c);
    };

    _.lk = function (a) {
      if (1 > a.a) throw ek();
      --a.a;
    };

    ek = function ek() {
      throw new _.K(_.L, 3, 3E3);
    };

    _.mk = function (a) {
      this.scheme = null;
      var b = document.createElement("a"),
          c = a.match(/^(.*:)(\/\/(.*))$/),
          d = !1;

      if (c) {
        if (this.scheme = c[1], b.href = c[2], ":" === b.protocol || "" === b.host && "" === b.pathname) b.href = "//dummy.com/" + c[3], d = !0;
      } else {
        b.href = a;
        if (":" === b.protocol || "" === b.host && "" === b.pathname) b.href = "//dummy.com/" + a.match(/\/?\/?(.*)/)[1], d = !0;
        this.scheme = b.protocol;
      }

      "" === this.scheme && (this.scheme = window.location.protocol);
      this.f = d ? "" : b.hostname;
      this.port = b.port;
      this.path = b.pathname;
      _.gg(this.path, "/") || (this.path = "/" + this.path);
      this.a = b.search;
      this.g = b.hash;
    };

    _.nk = function (a) {
      return a.scheme + "//" + (a.f + (a.port ? ":" + a.port : "") + a.path + a.g + a.a);
    };

    ok = function ok(a, b, c) {
      return a ? (c || Object.keys(a).sort()).reduce(function (d, e) {
        if (!a.hasOwnProperty(e)) return d;
        var f = a[e],
            g = "\x26";
        "" === d && (g = b ? "" : "?");
        d = d + g + encodeURIComponent(e);
        return d = d + "\x3d" + encodeURIComponent(void 0 === f ? "" : f);
      }, "") : "";
    };

    pk = function pk(a) {
      var b = {};
      a = a || "";
      a = a.substring(a.indexOf("?") + 1);
      a = _.t(a.split("\x26"));

      for (var c = a.next(); !c.done; c = a.next()) {
        var d = c.value.split("\x3d");
        c = decodeURIComponent(d[0]);
        d = decodeURIComponent(d[1] || "");
        c && (b[c] = d);
      }

      return b;
    };

    qk = function qk() {};

    rk = function rk(a) {
      var b = "";

      try {
        b = _.cg(a);
      } catch (c) {}

      return b;
    };

    sk = function sk(a) {
      a = rk(a);
      var b = "";
      a.length && (b = new _.mk(a).f);
      return b;
    };

    tk = function tk(a, b, c) {
      if (!c || !c.byteLength) throw new _.K(_.L, 6, 6102);
      var d;
      _typeof(b) === _.ge ? d = eg(b, !0) : d = b;
      a = eg(rk(a), !0);
      b = new _.Zj(12 + a.byteLength + d.byteLength + c.byteLength, !0);

      _.S(b, a.byteLength);

      _.bk(b, _.J(a));

      _.S(b, d.byteLength);

      _.bk(b, _.J(d));

      _.S(b, c.byteLength);

      _.bk(b, _.J(c));

      return _.J(b.buffer);
    };

    yk = function yk() {
      var a = uk;
      if (a === vk) return "https://lic.drmtoday.com";
      if (a === wk) return "https://lic.staging.drmtoday.com";
      if (a === xk) return "https://lic.test.drmtoday.com";
      throw Error("Unknown DRMtoday environment '" + a + "'. Can not infer DRMtoday base URL!");
    };

    Ck = function Ck(a) {
      var b = yk();
      if (a == _.Sj) return b + zk;
      if (a == _.Uj) return b + Ak;
      if (a == _.Tj) return b + Bk;
      throw Error("Unknown DRM Key-System '" + a + "'. Can not infer license URL!");
    };

    Ek = function Ek() {
      var a = Dk[uk];
      if (!a) return null;

      var b = _.Yi();

      return b.os === Pi && 4 === b.osVersion.major && 4 === b.osVersion.minor ? null : new Uint8Array(a);
    };

    Fk = function Fk(a) {
      a = a.replace(/assetid/gi, "assetId");
      a = a.replace(/variantid/gi, "variantId");
      return a = a.replace(/keyid/gi, "keyId");
    };

    _.Hk = function (a, b, c) {
      b = rk(b);
      c = c && c.customData ? c.customData : {};
      b = new _.mk(Fk(b));
      var d = pk(b.a);

      if (a && a.drm && a.drm.customData) {
        var e = a.drm.customData;
        a = e.assetId;
        e = e.variantId;
        a && _.ig("" + a) && (d.assetId = a, Gk.info("Using assetId from the configuration instead of the value from the HLS manifest."));
        e && _.ig("" + e) && (d.variantId = e, Gk.info("Using variantId from the configuration instead of the value from the HLS manifest."));
      }

      b.a = ok(d, !1, ["assetId", "variantId", "keyId"]);
      a = _.nk(b);
      return c.fpsContentId = a;
    };

    _.Ik = function (a, b, c, d) {
      d = void 0 === d ? !0 : d;
      a = a.drm;
      a && a.env.startsWith(ya) ? a.customData && (c = btoa(JSON.stringify({
        userId: a.customData.userId,
        sessionId: a.customData.sessionId,
        merchant: a.customData.merchant
      })), b.headers[Mc] = c, a.customData.authToken && (b.headers[Ue] = "" + a.customData.authToken), c = b.uris[0], d && a.customData.assetId && (c += "?assetId\x3d" + encodeURI("" + a.customData.assetId), a.customData.variantId && (c += "\x26variantId\x3d" + encodeURI("" + a.customData.variantId)), b.uris[0] = c)) : Gk.warn(Wa);
    };

    Jk = function Jk(a, b, c) {
      _.Ik(a, b, c);

      a = a.drm;
      a = !(!a || !a.offlineId);
      c = new _.jj(b.uris[0]);
      c.a.add(_.Hd, a);
      b.uris[0] = c.toString();
    };

    _.Kk = function (a, b, c) {
      var d = c && c.customData && c.customData.fpsContentId;

      _.Ik(a, b, c, !1);

      b.headers[ta] = Wb;
      c = {
        spc: _.Xh(b.body)
      };

      if ((a = a.drm) && a.env.startsWith("DRMtodayOnboard") && d) {
        a = {};
        var e = pk(new _.mk(Fk(d)).a);
        d = e.keyId;
        if (e = e.assetId) Gk.info("Applying assetId from HLS manifest."), a.assetId = e;
        d && (Gk.info("Applying keyId from HLS manifest."), a.keyId = d);
        a.keyId && (Gk.info("Adding keyID to FPS payload:", a.keyId), c.keyId = a.keyId);
        a.assetId && (Gk.info("Adding assetID to FPS payload:", a.assetId), c.assetId = a.assetId);
      }

      b.body = _.fg(ok(c, !0));
    };

    _.Lk = function (a, b) {
      Gk.debug("Clearing response data");

      if (200 === b.status) {
        var c = _.$f(b.data).trim();

        "\x3cckc\x3e" === c.substr(0, 5) && "\x3c/ckc\x3e" === c.substr(-6) && (c = c.slice(5, -6));
        b.data = _.Zh(c).buffer;
      }
    };

    _.Mk = function (a, b) {
      var c = a.drm;
      if (!c || !c.env.startsWith(ya)) Gk.warn(Wa);else if (c.customData) {
        var d = btoa(JSON.stringify({
          userId: c.customData.userId,
          sessionId: c.customData.sessionId,
          merchant: c.customData.merchant
        }));
        b.headers[Mc] = d;
        c.customData.authToken && (b.headers[Ue] = "" + c.customData.authToken);
      }
    };

    _.Nk = function (a, b) {
      try {
        var c = _.J(b.data),
            d = JSON.parse(String.fromCharCode.apply(null, c));

        Gk.debug("Widevine License response", d);
        var e = atob(d.license),
            f = new Uint8Array(e.length);

        for (c = 0; c < e.length; ++c) {
          f[c] = e.charCodeAt(c);
        }

        b.data = f.buffer;
      } catch (g) {
        Gk.debug("Unable to parse DRMtoday response JSON, assuming the response contained raw data");
      }
    };

    Pk = function Pk(a) {
      var b = {},
          c = a ? a[Xe] : void 0;
      a = Ok[a ? a[Xe] : void 0];
      c && (b.hk = c);
      a && (b.ik = a);
      return b;
    };

    _.Qk = function (a, b) {
      for (var c = _.t(a), d = c.next(); !d.done; d = c.next()) {
        if (!b(d.value)) return !1;
      }

      return !0;
    };

    _.Rk = function (a) {
      this.f = a;
      this.a = void 0;
    };

    _.Sk = function () {
      this.g = [];
      this.f = [];
      this.a = !1;
      this.h = new _.F("clpp.mp4");
    };

    _.Tk = function (a) {
      for (; _.dk(a.F) && !a.ab.a;) {
        a.ab.xd(a.start + a.de, a.F, a.Tf);
      }
    };

    _.Uk = function (a) {
      for (var b = _.hk(a.F); 0 < b && !a.ab.a; --b) {
        a.ab.xd(a.start + a.de, a.F, a.Tf);
      }
    };

    _.Vk = function (a) {
      return function (b) {
        var c = b.F.xa() - b.F.getPosition();
        a(_.kk(b.F, c));
      };
    };

    Wk = function Wk(a) {
      for (var b = 0, c = 0; c < a.length; c++) {
        b = b << 8 | a.charCodeAt(c);
      }

      return b;
    };

    _.Xk = function (a) {
      return String.fromCharCode(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255);
    };

    _.Yk = function (a) {
      return 8 + (a.ki ? 8 : 0) + (null != a.flags ? 4 : 0);
    };

    _.Zk = function (a) {
      this.f = [];
      this.g = [];
      this.a = [];
      8 <= a.byteLength && new _.Sk().T("pssh", this.h.bind(this)).parse(a.buffer);
      0 == this.a.length && _.C("No pssh box found!");
    };

    _.cl = function (a) {
      var b = this;
      this.m = a;
      this.M = new Set();
      this.w = this.I = null;
      this.V = !1;
      this.f = null;
      this.J = $k;
      this.B = new _.bh();
      this.P = new Nj();
      this.g = new Map();
      this.K = [];
      this.H = new _.gj();
      this.h = null;

      this.o = function (c) {
        b.A = !0;
        b.C = !1;
        b.H.reject(c);
        a.onError(c);
      };

      this.Ka = new Map();
      this.ca = new Map();
      this.Y = new _.Ah(function () {
        return al(b);
      });
      this.j = !1;
      this.Da = new _.gj();
      this.D = !1;
      this.aa = [];
      this.Ea = !1;
      this.S = 0;
      this.a = new _.F("clpp.drm.DrmEngine");
      this.ia = new _.Ah(function () {
        bl(b);
      }).Va(1);
      this.H["catch"](function () {});
      this.A = this.C = !1;
    };

    el = function el(a) {
      var b, c, d, e;
      return _.z(function (f) {
        switch (f.a) {
          case 1:
            a.B.release();
            a.B = null;
            a.P.release();
            a.P = null;
            a.A = !1;
            a.C = !1;
            a.H.reject();
            a.ia.stop();
            a.ia = null;
            a.Y.stop();
            a.Y = null;
            b = Array.from(a.g.keys());
            c = _.t(a.g.values());

            for (d = c.next(); !d.done; d = c.next()) {
              e = d.value, e.tc && e.tc.stop();
            }

            a.g.clear();
            return _.v(f, Promise.all(b.map(function (g) {
              return Promise.resolve().then(function () {
                return _.z(function (k) {
                  if (1 == k.a) return a.a.debug("Closing session", g.sessionId), _.mf(k, 2), _.v(k, dl(g), 4);
                  if (2 != k.a) return _.nf(k, 0);

                  _.of(k);

                  _.w(k);
                });
              });
            })), 2);

          case 2:
            if (!a.w) {
              f.G(3);
              break;
            }

            _.mf(f, 4);

            return _.v(f, a.w.setMediaKeys(null), 6);

          case 6:
            _.nf(f, 5);

            break;

          case 4:
            _.of(f);

          case 5:
            a.w = null;

          case 3:
            a.f = null, a.M.clear(), a.I = null, a.K = [], a.h = null, a.o = null, a.m = null, a.S = 0, _.w(f);
        }
      });
    };

    _.hl = function (a, b, c) {
      a.J = fl;
      a.K = c;
      a.D = 0 < c.length;
      a.a.debug("Using Persisted Licenses: " + a.D);
      return _.gl(a, b);
    };

    _.gl = function (a, b) {
      var c = b.some(function (g) {
        return 0 < g.drmInfos.length;
      });

      if (!c) {
        var d = _.B.Oe(a.h.Ua);

        il(b, d);
      }

      var e = jl(a);

      if (e) {
        var f = _.t(b);

        for (d = f.next(); !d.done; d = f.next()) {
          d.value.drmInfos = [e];
        }
      }

      e = _.t(b);

      for (d = e.next(); !d.done; d = e.next()) {
        for (d = _.t(d.value.drmInfos), f = d.next(); !f.done; f = d.next()) {
          kl(f.value, a.h.Ua);
        }
      }

      d = ql(a, b);
      if (!d.size) return a.V = !0, Promise.resolve();
      d = _.rl(a, d);
      return c ? d : d["catch"](function () {});
    };

    _.xl = function (a, b) {
      if (!a.I) return _.ch(a.B, b, [_.Oc, "msneedkey", Se, "needkey"], function () {
        a.o(new _.K(_.L, 6, 6010));
      }), Promise.resolve();
      a.w = b;
      a.B.one(a.w, _.Kd, function () {
        return sl(a);
      });
      a.B.on(a.w, _.Ne, function (e) {
        var f = a.C;
        a.C = !a.A;
        !f && a.C && (a.a.info("Waiting for DRM license key delivery"), a.m.onEvent(e));
      });
      var c = a.w.setMediaKeys(a.I);
      c = c["catch"](function (e) {
        return Promise.reject(new _.K(_.L, 6, 6003, {
          browserError: e.message
        }));
      });
      var d = Promise.resolve();
      _.Ai() && 38 === Wi().major || (a.f && a.f.keySystem !== _.Ed && !a.f.serverCertificate && (d = tl(a)), d = d.then(function () {
        return _.ul(a);
      }));
      return Promise.all([c, d]).then(function () {
        if (!a.j && (_.vl(a), _.zi(2) || !a.f.initData.length && !a.K.length)) a.B.on(a.w, _.Oc, function (e) {
          _.wl(a, e.initDataType, _.J(e.initData));
        });
      })["catch"](function (e) {
        if (!a.j) {
          if (6004 === e.code && a.f && a.f.keySystem === _.Cc && 1 > a.S && a.f.serverCertificate && a.f.serverCertificate.length) return a.a.warn("Detected invalid widevine server certificate!. Retrying"), a.o(new _.K(1, 6, 6004)), a.f.serverCertificate = null, a.S++, _.xl(a, b);
          1 <= a.S && a.a.info("Could not get valid widevine server certificate. Giving up");
          throw e;
        }
      });
    };

    _.ul = function (a) {
      var b, c;
      return _.z(function (d) {
        if (1 == d.a) {
          if (!(a.I && a.f && a.f.serverCertificate && a.f.serverCertificate.length)) return d.G(0);

          _.mf(d, 3);

          return _.v(d, a.I.setServerCertificate(a.f.serverCertificate), 5);
        }

        if (3 != d.a) return (b = d.f) || a.a.warn("Server certificates are not supported by the key system. The server certificate has been ignored."), _.nf(d, 0);
        c = _.of(d);
        throw new _.K(_.L, 6, 6004, {
          browserError: c.message
        });
      });
    };

    tl = function tl(a) {
      var b = a.keySystem(),
          c = a.h.Ua[b],
          d = c.certificateUrl || "";
      if ("" === d) return Promise.resolve();
      var e = a.m.getConfiguration();
      return yl(a, e).then(function () {
        var f = c.modifiers,
            g = f && f.certificateRequest,
            k = f && f.certificateResponse;
        f = _.Fh([d], a.h.attemptParameters);
        f.type = 3;
        g && f.requestModifiers.push(function (l) {
          return g(e, l);
        });
        k && f.responseModifiers.push(function (l) {
          return k(e, l);
        });
        a.a.debug("Fetching certificate");
        return a.m.tb.fetch(f).N;
      }).then(function (f) {
        a.f.serverCertificate = _.J(f.data);
      })["catch"](function (f) {
        var g = f.data.headers;
        g = Object.assign({
          message: "Error while fetching certificate!",
          url: f.data.url,
          status: f.data.status,
          response: f.data.response
        }, g ? {
          headers: g
        } : {}, Pk(g));
        throw new _.K(_.L, 6, 6100, g, f);
      });
    };

    yl = function yl(a, b) {
      var c, d;
      return _.z(function (e) {
        c = a.m.yc();
        return c ? (d = b && b.drm && b.drm.customData) ? _.v(e, c(d), 0) : e["return"]() : e["return"]();
      });
    };

    zl = function zl(a, b) {
      for (var c = 0; c < b.nd.length; c++) {
        if (_.bi(a, b.nd[c])) return !0;
      }

      return !1;
    };

    _.vl = function (a) {
      for (var b = a.f ? a.f.initData || [] : [], c = _.t(b), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = !_.zi(2);

        if (a.h.enforceSingleSession && !a.keySystem().startsWith(_.Ac)) {
          var f = a.g.values();
          f = _.t(f);

          for (var g = f.next(); !g.done; g = f.next()) {
            g = g.value, _.bi(d.initData, g.initData) ? (a.a.debug(Ja), e = !1) : g.periodId === d.periodId && (a.a.debug("Ignore duplicated init data with same period id"), zl(d.initData, g) || g.nd.push(d.initData), e = !1);
          }
        }

        !e || a.D && a.J === fl || Al(a, d.keyId, d.periodId, d.initDataType, d.initData);
      }

      c = _.t(a.K);

      for (d = c.next(); !d.done; d = c.next()) {
        _.Bl(a, d.value);
      }

      b.length || a.K.length || (a.A || a.a.info(xa), a.A = !0, a.C = !1, a.H.resolve());
      return a.H;
    };

    _.wl = function (a, b, c) {
      if (!a.D || a.J !== fl) {
        var d = a.keySystem();

        if (!d.startsWith(_.Ac)) {
          var e = new _.Zk(c);
          if (1 < e.a.length && (d = {
            "org.w3.clearkey": "1077efecc0b24d02ace33c1e52e2fb4b",
            "com.widevine.alpha": "edef8ba979d64acea3c827dcd51d21ed",
            "com.microsoft.playready": "9a04f07998404286ab92e65be0885f95",
            "com.adobe.primetime": "f239e769efa348509c16a903c6932efb"
          }[d])) for (var f = 0; f < e.f.length; f++) {
            if (d === e.f[f]) {
              c = c.subarray(e.a[f].start, e.a[f].end + 1);
              break;
            }
          }
        }

        e = a.g.values();
        if (!a.w.webkitCurrentPlaybackTargetIsWireless && !_.zi(2) && !a.keySystem().startsWith(_.Ac)) for (e = _.t(e), d = e.next(); !d.done; d = e.next()) {
          d = d.value;

          if (_.bi(c, d.initData)) {
            a.a.debug(Ja);
            return;
          }

          if (zl(c, d)) {
            a.a.debug("Ignoring duplicate init data (extra).");
            return;
          }
        }
        Al(a, "", null, b, c);
      }
    };

    _.Cl = function (a) {
      var b = Infinity;
      a = a.g.keys();
      a = _.t(a);

      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value, isNaN(c.expiration) || (b = Math.min(b, c.expiration));
      }

      return b;
    };

    ql = function ql(a, b) {
      for (var c = new Set(), d = _.t(b), e = d.next(); !e.done; e = d.next()) {
        var f = _.t(e.value.drmInfos);

        for (e = f.next(); !e.done; e = f.next()) {
          c.add(e.value);
        }
      }

      d = _.t(c);

      for (e = d.next(); !e.done; e = d.next()) {
        kl(e.value, a.h.Ua);
      }

      f = a.D ? _.Ud : _.Dd;
      var g = a.D ? [_.Id] : [_.ne];
      d = new Map();
      c = _.t(c);

      for (e = c.next(); !e.done; e = c.next()) {
        e = e.value, d.set(e.keySystem, {
          initDataTypes: [_.nc],
          audioCapabilities: [],
          videoCapabilities: [],
          distinctiveIdentifier: _.Dd,
          persistentState: f,
          sessionTypes: g,
          label: e.keySystem,
          drmInfos: []
        });
      }

      c = {};
      f = _.t(b);

      for (e = f.next(); !e.done; c = {
        Ed: c.Ed,
        Md: c.Md
      }, e = f.next()) {
        e = e.value;
        g = e.audio;
        var k = e.video;
        c.Ed = g ? _.Ng(g.mimeType, g.codecs) : "";
        c.Md = k ? _.Ng(k.mimeType, k.codecs) : "";

        var l = {},
            m = _.t(e.drmInfos);

        for (e = m.next(); !e.done; l = {
          zb: l.zb
        }, e = m.next()) {
          e = e.value, l.zb = d.get(e.keySystem), l.zb.drmInfos.push(e), e.initData && e.initData.length && (l.zb.initDataTypes = _.ff(new Set(e.initData.map(function (n) {
            return n.initDataType;
          }))).concat()), e.distinctiveIdentifierRequired && (l.zb.distinctiveIdentifier = _.Ud), e.persistentStateRequired && (l.zb.persistentState = _.Ud), g && _.Bh(e.audioRobustness).forEach(function (n, p) {
            return function (r) {
              p.zb.audioCapabilities.push({
                robustness: r || "",
                contentType: n.Ed
              });
            };
          }(c, l)), k && _.Bh(e.videoRobustness).forEach(function (n, p) {
            return function (r) {
              p.zb.videoCapabilities.push({
                robustness: r || "",
                contentType: n.Md
              });
            };
          }(c, l));
        }
      }

      return d;
    };

    _.rl = function (a, b) {
      function c(n, p, r) {
        p.drmInfos.some(function (q) {
          return !!q.licenseServerUri;
        }) == n && (g = g["catch"](function () {
          if (a.j) return null;
          if (r === _.Bc && _.xi()) if (a.m.getConfiguration().streaming.patchEdgeWhenMixedContent || a.h.Ua[r].useLegacySystem) d(p);else return navigator.requestMediaKeySystemAccess("com.microsoft.playready.recommendation", [p])["catch"](function () {
            d(p);
            return navigator.requestMediaKeySystemAccess(r, [p]);
          });
          return navigator.requestMediaKeySystemAccess(r, [p]);
        }));
      }

      function d(n) {
        for (var p = _.t(n.audioCapabilities), r = p.next(); !r.done; r = p.next()) {
          delete r.value.robustness;
        }

        n = _.t(n.videoCapabilities);

        for (p = n.next(); !p.done; p = n.next()) {
          delete p.value.robustness;
        }
      }

      if (1 == b.size && b.has("")) return Promise.reject(new _.K(_.L, 6, 6E3));

      for (var e = _.t(b.values()), f = e.next(); !f.done; f = e.next()) {
        f = f.value, 0 == f.audioCapabilities.length && delete f.audioCapabilities, 0 == f.videoCapabilities.length && delete f.videoCapabilities;
      }

      var g = e = new _.gj(),
          k = a.h.preferredDrmSystem;
      k || (f = _.Yi(), f.os === Ri && 10 <= f.osVersion.major && "edge" === f.browser && (k = _.Uj));
      k && (f = b.get(k)) && (c(!0, f, k), c(!1, f, k));
      f = {};

      for (var l = _.t([!0, !1]), m = l.next(); !m.done; f = {
        Kd: f.Kd
      }, m = l.next()) {
        f.Kd = m.value, b.forEach(function (n) {
          return function (p, r) {
            r !== k && c(n.Kd, p, r);
          };
        }(f));
      }

      g = g["catch"](function () {
        throw new _.K(_.L, 6, 6001);
      });
      g = g.then(function (n) {
        if (a.j) return null;
        a.M.clear();
        var p = n.getConfiguration();
        a.a.debug("Got MediaKeySystemAccess with configuration", p);

        var r = p.videoCapabilities || [],
            q = _.t(p.audioCapabilities || []);

        for (p = q.next(); !p.done; p = q.next()) {
          a.M.add(p.value.contentType);
        }

        r = _.t(r);

        for (p = r.next(); !p.done; p = r.next()) {
          a.M.add(p.value.contentType);
        }

        r = n.keySystem;
        p = b.get(_.Dl(n.keySystem));
        q = [];
        var x = [],
            y = [],
            D = [];
        El(p.drmInfos, q, x, y, D);
        1 < x.length && _.C("Multiple unique server certificates found! Only the first will be used.");
        1 < q.length && _.C("Multiple unique license server URIs found! Only the first will be used.");
        a.f = {
          keySystem: r,
          licenseServerUri: q[0],
          distinctiveIdentifierRequired: p.distinctiveIdentifier == _.Ud,
          persistentStateRequired: p.persistentState == _.Ud,
          audioRobustness: p.audioCapabilities ? p.audioCapabilities[0].robustness : "",
          videoRobustness: p.videoCapabilities ? p.videoCapabilities[0].robustness : "",
          serverCertificate: x[0],
          initData: y,
          keyIds: D,
          periodId: null
        };
        if (!a.f.licenseServerUri) throw new _.K(_.L, 6, 6012, a.f.keySystem);
        return n.createMediaKeys();
      }).then(function (n) {
        a.j || (a.a.info("Created MediaKeys object for key system", a.f.keySystem), a.I = n, a.V = !0);
      })["catch"](function (n) {
        if (!a.j) {
          a.f = null;
          a.M.clear();
          if (n instanceof _.K) throw n;
          throw new _.K(_.L, 6, 6002, {
            browserError: n.message
          });
        }
      });
      e.reject();
      return g;
    };

    jl = function jl(a) {
      a = _.B.Oe(a.h.Ua[_.Ed] || {});
      if (0 == a.size) return null;
      var b = [],
          c = [];
      a.forEach(function (e, f) {
        var g = _.$h(f),
            k = _.$h(e);

        g = {
          kty: "oct",
          kid: _.Yh(g, !1),
          k: _.Yh(k, !1)
        };
        b.push(g);
        c.push(g.kid);
      });
      a = JSON.stringify({
        keys: b
      });
      var d = JSON.stringify({
        kids: c
      });
      d = [{
        initData: _.dg(d),
        initDataType: "keyids"
      }];
      return {
        keySystem: _.Ed,
        licenseServerUri: "data:application/json;base64," + window.btoa(a),
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        initData: d,
        keyIds: [],
        periodId: null
      };
    };

    _.Bl = function (a, b) {
      try {
        a.a.debug("Attempting to load an offline session", b);
        var c = a.I.createSession(_.Id);
      } catch (f) {
        var d = new _.K(_.L, 6, 6005, {
          browserError: f.message
        });
        a.o(d);
        return Promise.reject(d);
      }

      a.B.on(c, _.id, a.Qf.bind(a));
      a.B.on(c, _.Yc, a.Mf.bind(a));
      var e = {
        initData: null,
        loaded: !1,
        re: Infinity,
        hb: null,
        periodId: null,
        nd: [],
        keyId: null,
        initDataType: null,
        Rb: null,
        sessionContext: {
          ldlDelay: 0,
          customData: {}
        }
      };
      a.g.set(c, e);
      return c.load(b).then(function (f) {
        if (a.j) return null;
        a.a.debug("Loaded offline session", b, f);
        if (!f) return a.g["delete"](c), a.o(new _.K(_.L, 6, 6013)), null;
        e.loaded = !0;
        Fl(a) && (a.A || a.a.info(xa), a.A = !0, a.C = !1, a.H.resolve());
        return c;
      }, function (f) {
        a.j || (a.g["delete"](c), a.o(new _.K(_.L, 6, 6005, {
          browserError: f.message
        })));
      });
    };

    Al = function Al(a, b, c, d, e, f) {
      f = void 0 === f ? null : f;

      try {
        var g = a.D ? _.Id : _.ne;
        a.a.debug("Creating new " + g + " session.");
        var k = a.I.createSession(g);
      } catch (m) {
        a.o(new _.K(_.L, 6, 6005, {
          browserError: m.message
        }));
        return;
      }

      a.B.on(k, _.id, a.Qf.bind(a));
      a.B.on(k, _.Yc, a.Mf.bind(a));
      b = {
        Rb: f,
        nd: [],
        initData: e,
        initDataType: d,
        keyId: b,
        loaded: !1,
        re: Infinity,
        periodId: c,
        hb: null,
        sessionContext: {
          ldlDelay: 0,
          customData: {}
        }
      };
      f && (f = a.g.get(f), b.sessionContext = f.sessionContext);
      a.g.set(k, b);
      f = _.B.rb;
      c = a.m.getConfiguration();
      g = a.keySystem();
      g = a.h.Ua[g];
      var l = g.modifiers;
      l = l && l.transformInitData;
      f(l) || (l = Gl);

      try {
        e = l({
          playerConfig: c,
          initData: e,
          initDataType: d,
          drmInfo: a.f,
          drmSystemConfig: g,
          sessionContext: b.sessionContext
        });
      } catch (m) {
        d = m;
        m instanceof _.K || (d = new _.K(_.L, 6, 6016, m));
        a.o(d);
        return;
      }

      k.generateRequest(d, e.buffer)["catch"](function (m) {
        if (!a.j) {
          a.g["delete"](k);
          var n = null;
          m.errorCode && m.errorCode.systemCode && (n = m.errorCode.systemCode, 0 > n && (n += Math.pow(2, 32)), n = "0x" + n.toString(16));
          a.o(new _.K(_.L, 6, 6006, {
            browserError: m.message,
            error: m,
            extended: n
          }, m));
        }
      });
    };

    Hl = function Hl(a, b) {
      var c = sk(b);

      _.H("Using default Content ID extractor. The hostname part from HLS #EXT-X-KEY:URI skd:// will be used.", "Extracted Content ID: " + c);

      return c;
    };

    Gl = function Gl(a) {
      var b = a.playerConfig,
          c = a.initData,
          d = a.drmInfo,
          e = a.drmSystemConfig,
          f = a.sessionContext;

      if ("skd" === a.initDataType) {
        a = _.B.rb;
        d = d.serverCertificate;
        e = e && e.modifiers && e.modifiers.extractContentId;
        a(e) || (e = Hl);
        a = "";

        try {
          a = e(b, c, f);
        } catch (g) {
          throw new _.K(_.L, 6, 6103);
        }

        if (!a.length) throw new _.K(_.L, 6, 6101, "Content ID is an empty string");
        c = tk(c, a, d);
      }

      return c;
    };

    Ll = function Ll(a, b) {
      var c = b.target;
      a.a.debug("Sending license request for session", c.sessionId);
      var d = a.g.get(c),
          e = a.f.licenseServerUri,
          f = a.keySystem();
      f = a.h.Ua[f];
      "individualization-request" === b.messageType && f && f.individualizationServer && (e = f.individualizationServer);

      var g = _.Fh([e], a.h.attemptParameters);

      g.type = 3;
      g.body = b.message;
      g.method = "POST";
      g.licenseRequestType = b.messageType === _.ad && d.Rb ? _.$c : b.messageType;
      g.sessionId = c.sessionId;
      if (g.licenseRequestType === _.$c) a.m.onEvent(new _.M(Ic));
      Il(a.f.keySystem) && Jl(a, g);
      Oj(a.P, g);
      var k = Date.now();
      return Kl(a, g, d.sessionContext).then(function () {
        a.a.debug("Sending DRM license request to", e, g);
        return a.m.tb.fetch(g).N;
      }).then(function (l) {
        if (a.j) return Promise.reject();
        a.a.info("Received license response in " + (Date.now() - k) + "ms");
        var m = Pj(a.P, l);
        return c.update(l.data).then(function () {
          var n = new _.M(_.Kc, {
            keySystem: a.keySystem(),
            Uh: _.Cl(a)
          });
          a.m.onEvent(n);
          d && (d.hb && d.hb.resolve(), d.Rb && (dl(d.Rb)["catch"](function () {
            a.a.warn("Unable to close expired session in time");
          }), (n = a.g.get(d.Rb)) && n.tc && n.tc.stop(), a.g["delete"](d.Rb), d.Rb = null), new _.Ah(function () {
            d.loaded = !0;
            Fl(a) && (a.A || a.a.info(xa), a.A = !0, a.C = !1, a.H.resolve());
          }).X(5), null !== d.initData && (0 < d.sessionContext.ldlDelay || m && _.gg(a.keySystem(), _.Bc)) && (n = new _.Ah(function () {
            !a.j && a.P && (a.a.info("Updating CSL Sessions"), Al(a, d.keyId, d.periodId, d.initDataType, d.initData, c));
          }), d.tc = n, n.X(m ? m.delay : d.sessionContext.ldlDelay)));
        });
      }, function (l) {
        if (!a.j) {
          var m = l.data.headers;
          m = Object.assign({
            message: _.Da,
            url: l.data.url,
            status: l.data.status,
            response: l.data.response
          }, m ? {
            headers: m
          } : {}, Pk(m));
          l = new _.K(_.L, 6, 6007, m, l);
          a.o(l);
          d && d.hb && d.hb.reject(l);
        }
      })["catch"](function (l) {
        a.j || (l = new _.K(_.L, 6, 6008, {
          browserError: l.message
        }), a.o(l), d && d.hb && d.hb.reject(l));
      });
    };

    Jl = function Jl(a, b) {
      var c = bg(b.body, !0, !0);

      if (c.includes("PlayReadyKeyMessage")) {
        a.a.debug("Unwrapping PlayReady request.");
        c = new DOMParser().parseFromString(c, "application/xml");

        for (var d = c.getElementsByTagName("HttpHeader"), e = 0; e < d.length; ++e) {
          b.headers[d[e].querySelector("name").textContent] = d[e].querySelector(_.Be).textContent;
        }

        b.body = _.Zh(c.querySelector("Challenge").textContent).buffer;
      } else a.a.debug("PlayReady request is already unwrapped."), b.headers[ta] = "text/xml; charset\x3dutf-8";
    };

    Kl = function Kl(a, b, c) {
      var d, e, f, g, k, l;
      return _.z(function (m) {
        if (1 == m.a) return d = a.m.getConfiguration(), _.v(m, yl(a, d), 2);
        e = a.keySystem();
        k = (g = (f = a.h.Ua[e]) && f.modifiers) && g.licenseRequest;
        l = g && g.licenseResponse;
        k ? b.requestModifiers.push(function (n) {
          return k(d, n, c);
        }) : e.startsWith(_.Ac) && b.requestModifiers.push(function (n) {
          var p = _.J(n.body);

          p = "spc\x3d" + _.Xh(p);
          n.body = _.dg(encodeURIComponent(p)).buffer;
          n.headers[ta] = Wb;
        });
        l ? b.responseModifiers.push(function (n) {
          return l(d, n, c);
        }) : e.startsWith(_.Ac) && b.responseModifiers.push(function (n) {
          a: {
            try {
              var p = _.$f(n.data);
            } catch (r) {
              n = void 0;
              break a;
            }

            p = p.trim();
            "\x3cckc\x3e" === p.substr(0, 5) && "\x3c/ckc\x3e" === p.substr(-6) && (p = p.slice(5, -6));

            try {
              p = JSON.parse(p).ckc;
            } catch (r) {}

            n.data = _.Zh(p).buffer;
            n = void 0;
          }

          return n;
        });

        _.w(m);
      });
    };

    al = function al(a) {
      var b = a.Ka,
          c = a.ca;
      c.clear();
      b.forEach(function (d, e) {
        return c.set(e, d);
      });
      b = Array.from(c.values());
      b.length && b.every(function (d) {
        return "expired" == d;
      }) && a.o(new _.K(_.L, 6, 6014));
      a.m.ue(_.B.Pe(c));
      a.A || a.a.info(xa);
      a.A = !0;
      a.C = !1;
    };

    sl = function sl(a) {
      var b;
      return _.z(function (c) {
        b = a.aa.map(function (d) {
          return Ll(a, d);
        });
        a.Ea = !0;
        a.aa = [];
        return _.v(c, Promise.all(b), 0);
      });
    };

    Il = function Il(a) {
      return !!a.match(/^com\.(microsoft|chromecast)\.playready/);
    };

    _.Dl = function (a) {
      return Il(a) ? _.Bc : a;
    };

    _.Ml = function (a, b) {
      if (!a.length) return b;
      if (!b.length) return a;

      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = 0; e < b.length; e++) {
          if (a[d].keySystem === b[e].keySystem && a[d].periodId === b[e].periodId) {
            var f = a[d];
            e = b[e];
            var g = [];
            g = g.concat(f.initData || []);
            g = g.concat(e.initData || []);
            var k = [];
            k = k.concat(f.keyIds);
            k = k.concat(e.keyIds);
            c.push({
              keySystem: f.keySystem,
              licenseServerUri: f.licenseServerUri || e.licenseServerUri,
              distinctiveIdentifierRequired: f.distinctiveIdentifierRequired || e.distinctiveIdentifierRequired,
              persistentStateRequired: f.persistentStateRequired || e.persistentStateRequired,
              videoRobustness: f.videoRobustness || e.videoRobustness,
              audioRobustness: f.audioRobustness || e.audioRobustness,
              serverCertificate: f.serverCertificate || e.serverCertificate,
              initData: g,
              keyIds: k,
              periodId: f.periodId
            });
            break;
          }
        }
      }

      return c;
    };

    bl = function bl(a) {
      a.g.forEach(function (b, c) {
        var d = b.re,
            e = c.expiration;
        isNaN(e) && (e = Infinity);
        e != d && (a.m.onExpirationUpdated(c.sessionId, e), b.re = e);
      });
    };

    Fl = function Fl(a) {
      a = a.g.values();
      return _.Qk(a, function (b) {
        return b.loaded;
      });
    };

    il = function il(a, b) {
      var c = [];
      b.forEach(function (f, g) {
        c.push({
          keySystem: g,
          licenseServerUri: f.licenseUrl,
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          audioRobustness: "",
          videoRobustness: "",
          serverCertificate: null,
          initData: [],
          keyIds: []
        });
      });

      for (var d = _.t(a), e = d.next(); !e.done; e = d.next()) {
        e.value.drmInfos = c;
      }
    };

    El = function El(a, b, c, d, e) {
      var f = {};
      a = _.t(a);

      for (var g = a.next(); !g.done; f = {
        la: f.la
      }, g = a.next()) {
        f.la = g.value;
        b.includes(f.la.licenseServerUri) || b.push(f.la.licenseServerUri);
        f.la.serverCertificate && (c.some(function (m) {
          return function (n) {
            return _.bi(n, m.la.serverCertificate);
          };
        }(f)) || c.push(f.la.serverCertificate));

        if (f.la.initData) {
          var k = _.t(f.la.initData);

          for (g = k.next(); !g.done; g = k.next()) {
            g.value.periodId = f.la.periodId;
          }

          k = {};

          var l = _.t(f.la.initData);

          for (g = l.next(); !g.done; k = {
            bd: k.bd
          }, g = l.next()) {
            k.bd = g.value, d.some(function (m) {
              return function (n) {
                var p = m.bd;
                return n.keyId && n.keyId == p.keyId && n.periodId === p.periodId ? !0 : n.initDataType == p.initDataType && _.bi(n.initData, p.initData) && n.periodId === p.periodId;
              };
            }(k)) || d.push(k.bd);
          }
        }

        if (f.la.keyIds) for (g = 0; g < f.la.keyIds.length; ++g) {
          e.includes(f.la.keyIds[g]) || e.push(f.la.keyIds[g]);
        }
      }
    };

    kl = function kl(a, b) {
      if (a.keySystem) {
        var c = _.Dl(a.keySystem),
            d = b[c];

        c === _.Ed && a.licenseServerUri || (d && (a.licenseServerUri = d.licenseUrl || ""), a.keyIds || (a.keyIds = []), d && (a.distinctiveIdentifierRequired || (a.distinctiveIdentifierRequired = d.distinctiveIdentifierRequired), a.persistentStateRequired || (a.persistentStateRequired = d.persistentStateRequired), a.videoRobustness || (a.videoRobustness = d.videoRobustness || ""), a.audioRobustness || (a.audioRobustness = d.audioRobustness || ""), a.serverCertificate || (a.serverCertificate = d.serverCertificate || null)));
      }
    };

    dl = function dl(a) {
      var b, c;
      return _.z(function (d) {
        if (1 == d.a) return b = new Promise(function (e) {
          new _.Ah(e).X(1);
        }), _.v(d, Promise.race([a.close().then(function () {
          return !0;
        }), b.then(function () {
          return !1;
        })]), 2);
        (c = d.f) || _.C("Timeout waiting for session close");

        _.w(d);
      });
    };

    _.Nl = function (a, b) {
      return a.concat(b);
    };

    _.Ol = function (a) {
      return null != a;
    };

    _.Pl = function (a, b) {
      if (0 == b.length) return a;
      var c = b.map(function (d) {
        return new _.jj(d);
      });
      return a.map(function (d) {
        return new _.jj(d);
      }).map(function (d) {
        return c.map(d.resolve.bind(d));
      }).reduce(_.Nl, []).map(function (d) {
        return d.toString();
      });
    };

    _.Ql = function (a, b) {
      return {
        keySystem: a,
        licenseServerUri: "",
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        initData: b || [],
        keyIds: [],
        periodId: null
      };
    };

    Rl = function Rl() {
      this.a = null;
      this.f = [];
    };

    _.Sl = function (a, b) {
      if (null == a.a) a.a = {
        timestamp: Date.now() / 1E3,
        state: b,
        duration: 0
      };else {
        var c = Date.now() / 1E3;
        a.a.duration = c - a.a.timestamp;
        a.a.state != b && (a.f.push(a.a), a.a = {
          timestamp: c,
          state: b,
          duration: 0
        });
      }
    };

    Tl = function Tl(a, b) {
      var c = 0;
      a.a && a.a.state == b && (c += a.a.duration);

      for (var d = _.t(a.f), e = d.next(); !e.done; e = d.next()) {
        e = e.value, c += e.state == b ? e.duration : 0;
      }

      return c;
    };

    Ul = function Ul(a) {
      function b(f) {
        return {
          timestamp: f.timestamp,
          state: f.state,
          duration: f.duration
        };
      }

      for (var c = [], d = _.t(a.f), e = d.next(); !e.done; e = d.next()) {
        c.push(b(e.value));
      }

      a.a && c.push(b(a.a));
      return c;
    };

    Vl = function Vl() {
      this.g = this.f = this.h = null;
      this.a = [];
    };

    Wl = function Wl(a) {
      return a.a.map(function (b) {
        return _.B.ua(b);
      });
    };

    _.Xl = function () {
      this.m = this.A = this.o = this.B = this.g = this.h = this.f = this.j = NaN;
      this.a = new Rl();
      this.w = new Vl();
    };

    _.Yl = function () {
      return {
        width: NaN,
        height: NaN,
        streamBandwidth: NaN,
        decodedFrames: NaN,
        droppedFrames: NaN,
        corruptedFrames: NaN,
        estimatedBandwidth: NaN,
        loadLatency: NaN,
        playTime: NaN,
        pauseTime: NaN,
        bufferingTime: NaN,
        switchHistory: [],
        stateHistory: []
      };
    };

    _.$l = function (a, b, c, d) {
      b === HTMLMediaElement.HAVE_NOTHING || a.readyState >= b ? d() : (b = Zl.value().get(b), c.one(a, b, d));
    };

    am = function am() {
      _.Hj.call(this, vc);

      this.w = this.D = !1;
      this.j = this.B = this.m = this.a = this.h = null;
      this.g = new _.bh();
      this.C = this.f = this.H = null;
    };

    dm = function dm(a, b) {
      return a.w ? bm() : new Promise(function (c) {
        a.a || (a.g.on(b, _.Rc, function () {
          var d = cm(a);
          if (d) a.onError(d);
        }), a.g.on(b, _.Vd, function () {
          a.trigger(new _.M(_.dc, {
            detail: {
              width: b.videoWidth,
              height: b.videoHeight
            }
          }));
        }), a.a = b);
        c();
      });
    };

    em = function em(a) {
      return a.w ? bm() : new Promise(function (b) {
        if (a.a) {
          var c = a.a;
          a.g.off(c, _.Rc);
          a.g.off(c, _.Vd);
          a.a = null;
        }

        b();
      });
    };

    gm = function gm(a) {
      var b, c, d, e, f;
      return _.z(function (g) {
        if (1 == g.a) {
          if (a.w) return g["return"](bm());
          b = a.o[a.getSourceIndex()];
          if (!a.configuration.drm || !1 === b.drmProtected) return a.log.debug("No DRM configuration present.", "Skipping DRM engine initialization"), g["return"](Promise.resolve());
          c = _.fm;
          d = _.Yj(a.configuration.drm);
          a.log.debug("Drm configuration: ", d);
          e = a.getNetworkEngine();
          a.m = new _.cl({
            tb: e,
            onError: function onError(k) {
              return a.onError(k);
            },
            ue: function ue() {},
            onExpirationUpdated: function onExpirationUpdated(k, l) {
              a.trigger(new _.M(_.Hc, {
                expirationTime: l
              }));
            },
            onEvent: function onEvent(k) {
              return a.trigger(k);
            },
            getConfiguration: function getConfiguration() {
              return a.getConfiguration();
            },
            yc: function yc() {
              return a.yc();
            }
          });
          a.m.h = d;
          f = {
            id: 0,
            language: _.ue,
            primary: !1,
            audio: null,
            video: {
              id: 0,
              originalId: null,
              createSegmentIndex: Promise.resolve.bind(Promise),
              findSegmentPosition: function findSegmentPosition() {
                return null;
              },
              getSegmentReference: function getSegmentReference() {
                return null;
              },
              adjustSegmentDurations: function adjustSegmentDurations() {},
              getDuration: a.getDuration.bind(a),
              initSegmentReference: null,
              ub: 0,
              mimeType: _.Ge,
              codecs: "",
              encrypted: !0,
              keyId: null,
              language: _.ue,
              label: null,
              type: c.VIDEO,
              primary: !1,
              frameRate: void 0,
              pk: void 0,
              trickModeVideo: null,
              emsgSchemeIdUris: null,
              roles: [],
              channelsCount: null,
              ak: null,
              closedCaptions: null
            },
            bandwidth: 100,
            drmInfos: [],
            allowedByApplication: !0,
            allowedByKeySystem: !0
          };
          return _.v(g, _.hl(a.m, [f], []), 2);
        }

        return 3 != g.a ? _.v(g, _.xl(a.m, a.a), 3) : g["return"](Promise.resolve());
      });
    };

    im = function im(a, b) {
      _.$l(a.a, HTMLMediaElement.HAVE_METADATA, a.g, function () {
        a.getState() !== _.hm && a.seek(b)["catch"](function (c) {
          a.log.warn("Error while seeking to start position.", c);
        });
      });
    };

    cm = function cm(a) {
      if (null === a.o || !a.a.error) return null;
      var b = a.a.error.code;
      if (1 === b) return null;
      var c = a.a.error.msExtendedCode;
      c && (0 > c && (c += Math.pow(2, 32)), c = c.toString(16));
      return new _.K(_.L, 3, 3016, {
        code: b,
        jk: c,
        message: a.a.error.message
      });
    };

    bm = function bm() {
      return Promise.reject(new _.K(_.L, 7, 7E3));
    };

    km = function km(a) {
      if (a.w) return bm();
      var b = a.o[a.getSourceIndex()],
          c = a.configuration.startTime || null,
          d = a.a,
          e = a.H;
      c && im(a, c);
      if (d.preload !== _.td) a.g.one(d, _.dd, function () {
        var g = Date.now() / 1E3 - e;
        a.f.o = g;
        a.log.debug("Time to load: ", g);
      });
      d.src = b.url;
      d.load();
      var f = new _.gj();
      a.g.one(d, ae, function () {
        var g = a.getConfiguration().manifest.attemptParameters.timeout || 30;
        a.C || (a.C = new _.Ah(function () {
          f.reject(new _.K(_.L, 3, 3100, {
            message: "Unable to load media source successfully from " + b.url,
            uri: b.url
          }, d.error));
        }).X(g));
      });

      _.$l(d, HTMLMediaElement.HAVE_CURRENT_DATA, a.g, function () {
        return f.resolve();
      });

      d.error ? f.reject(cm(a)) : d.preload === _.td && (a.log.warn('With \x3cvideo preload\x3d"none"\x3e, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way. Please do not use preload\x3d"none" with PRESTOplay for Web Apps.'), f.resolve());
      a.g.one(d, _.Rc, function () {
        f.reject(cm(a));
      });
      return new _.jm(f, function () {
        var g = new _.K(_.L, 7, 7001);
        f.reject(g);
        return Promise.resolve();
      });
    };

    lm = function lm() {};

    _.mm = function () {};

    om = function om(a, b) {
      this.h = new _.F("clpp.PlayerSurface");

      var c = _.B.Qa({}, nm, b);

      c.containerEl = (b || null) && b.containerEl;
      this.g = _typeof(a) === _.ge ? document.getElementById(a) : a;
      this.f = this.j = this.a = null;
      this.h.debug("Initializing Player Surface on ", this.g);
      this.g instanceof Element && (this.g instanceof HTMLMediaElement ? this.a = this.g : "cast-media-player" === this.g.tagName.toLowerCase() && (this.j = this.g));
      if (c.containerEl) this.f = c.containerEl, _.ng(this.f, qc);else if (!c.disableContainer && !this.j) {
        var d = document.createElement(_.Gc);

        _.ng(d, qc);

        this.f = d;
        this.g.parentNode ? this.g.parentNode.replaceChild(this.f, this.g) : this.g.parentNode || this.h.warn("Player Surface Element has no parent. Can not inject container. You have to manually add playerSurface.getContainer() to the DOM!");
        this.a && this.f.appendChild(this.a);
      }

      if (this.a && (this.a.hasAttribute("crossorigin") || (d = c.crossorigin, this.h.info("Setting media elements crossorigin to " + d), this.a.setAttribute("crossorigin", d)), this.f)) {
        if (!c.containerEl && this.a && this.f) {
          c = this.a;
          d = [];

          for (var e = 0; e < c.classList.length; e++) {
            d.push(c.classList[e]);
          }

          c = _.t(d);

          for (d = c.next(); !d.done; d = c.next()) {
            d = d.value, this.a.classList.remove(d), _.ng(this.f, d);
          }

          this.f.style.cssText = this.a.style.cssText;
          this.a.removeAttribute(_.ie);
          c = _.t([_.Te, _.Uc]);

          for (d = c.next(); !d.done; d = c.next()) {
            d = d.value, e = this.a.getAttribute(d), e = parseInt(e, 10), isNaN(e) || (this.f.style[d] = e + _.Pd), _.zi() || this.a.removeAttribute(d);
          }
        }

        _.ng(this.a, _.rc);
      }
    };

    sm = function sm(a) {
      a = new _.jj(a).ra;
      if (!a) return null;
      a = a.toUpperCase();
      return _.hg(a, ".MPD") ? _.pm : _.hg(a, ".M3U8") ? _.qm : _.hg(a, ".MP4") ? _.Ge : _.hg(a, "MANIFEST") || _.hg(a, ".ISM") ? _.rm : null;
    };

    _.um = function (a) {
      var b;
      _.Gj(a) ? b = a.source : b = a;
      Array.isArray(b) || (b = [b]);
      b = b.filter(function (e) {
        return _typeof(e) === _.ge || e.hasOwnProperty("url");
      });
      a = [];

      for (var c = 0; c < b.length; c++) {
        var d = tm(b[c]);
        d && a.push(d);
      }

      return a;
    };

    tm = function tm(a) {
      var b = null;
      _.B.W(a) && (a = {
        url: a
      });
      _typeof(a) === _.vd && !Array.isArray(a) && a.hasOwnProperty("url") && (b = {
        url: a.url,
        type: a.type ? a.type : null
      }, _.B.R(a.drmProtected) || _typeof(a.drmProtected) !== _.ec || (b.drmProtected = a.drmProtected), _.B.R(a.isLive) || _typeof(a.isLive) !== _.ec || (b.isLive = a.isLive), _.B.R(a.name) || _typeof(a.name) !== _.ge || (b.name = a.name), _.B.R(a.xb) || _typeof(a.xb) !== _.ge || (b.xb = a.xb), _.B.R(a.audioMimeType) || _typeof(a.audioMimeType) !== _.ge || (b.audioMimeType = a.audioMimeType));
      b && !b.type && (b.type = sm(a.url), b.type ? vm.debug("Detect media type " + b.type + " for " + a.url) : vm.warn("Unable to detect media type for " + a.url));
      return b;
    };

    _.xm = function (a) {
      _.wm[a] && delete _.wm[a];
    };

    _.zm = function (a) {
      _.ym[a] && delete _.ym[a];
    };

    _.Bm = function (a, b, c, d) {
      var e, f;
      return _.z(function (g) {
        if (1 == g.a) return _.mf(g, 2), _.v(g, Am(a, b, c, d), 4);
        if (2 != g.a) return e = g.f, g["return"](new e());
        f = _.of(g);
        f.f(_.L);
        throw f;
      });
    };

    Am = function Am(a, b, c, d) {
      var e, f, g, k;
      return _.z(function (l) {
        if (1 == l.a) {
          if (d) {
            if (e = _.ym[d.toLowerCase()]) return l["return"](e);

            _.C("Could not determine manifest type using MIME type ", d);
          }

          if (f = _.Cm(a)) {
            if (g = _.wm[f]) return l["return"](g);

            _.C("Could not determine manifest type for extension ", f);
          } else _.C("Could not find extension for ", a);

          return d ? l.G(2) : _.v(l, Dm(a, b, c), 3);
        }

        if (2 != l.a && (d = l.f)) {
          if (k = _.ym[d]) return l["return"](k);

          _.C("Could not determine manifest type using MIME type", d);
        }

        throw new _.K(_.L, 4, 4E3, {
          url: a
        });
      });
    };

    Dm = function Dm(a, b, c) {
      var d, e, f;
      return _.z(function (g) {
        if (1 == g.a) return d = _.Fh(a), vj(d, c), d.type = 1, d.method = "HEAD", _.v(g, b.fetch(d).N, 2);
        e = g.f;
        f = e.headers["content-type"];
        return g["return"](f ? f.toLowerCase() : "");
      });
    };

    _.Cm = function (a) {
      a = new _.jj(a).ra.split("/").pop().split(".");
      return 1 == a.length ? "" : a.pop().toLowerCase();
    };

    Fm = function Fm() {
      for (var a = 0; a < Em.length; ++a) {
        Em[a].rc();
      }
    };

    _.Gm = function (a, b) {
      b = b || 0;

      for (var c = {
        priority: b,
        rc: a
      }, d = 0; d < Em.length; d++) {
        if (Em[d].priority < b) {
          Em.splice(d, 0, c);
          return;
        }
      }

      Em.push(c);
    };

    Hm = function Hm(a) {
      var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
      if ((typeof Event === "undefined" ? "undefined" : _typeof(Event)) === _.Tc) var c = new Event(b, a);else c = document.createEvent("Event"), c.initEvent(b, a.bubbles, a.cancelable);
      a.target.dispatchEvent(c);
    };

    Im = function Im() {
      return {
        droppedVideoFrames: this.webkitDroppedFrameCount,
        totalVideoFrames: this.webkitDecodedFrameCount,
        corruptedVideoFrames: 0,
        creationTime: NaN,
        totalFrameDelay: 0
      };
    };

    Jm = function Jm() {
      _.H("PatchedMediaKeysNop.requestMediaKeySystemAccess");

      return Promise.reject(Error("The key system specified is not supported."));
    };

    Km = function Km(a) {
      _.H("PatchedMediaKeysNop.setMediaKeys");

      return null == a ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."));
    };

    Lm = function Lm() {
      throw new TypeError(Ka);
    };

    Mm = function Mm() {
      this.keySystem = "";
      throw new TypeError(Ka);
    };

    Nm = function Nm(a, b, c) {
      return new window.TextTrackCue(a, b, c);
    };

    Om = function Om(a, b, c) {
      return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c);
    };

    Pm = function Pm(a) {
      a = a.target;

      if (a.webkitPresentationMode === Jd) {
        document.pictureInPictureElement = a;
        var b = new Event("enterpictureinpicture");
        a.dispatchEvent(b);
      } else document.pictureInPictureElement === a && (document.pictureInPictureElement = null), b = new Event("leavepictureinpicture"), a.dispatchEvent(b);
    };

    Qm = function Qm() {
      return this.webkitSupportsPresentationMode(Jd) ? (this.webkitSetPresentationMode(Jd), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error("PiP not allowed by video element"));
    };

    Rm = function Rm() {
      var a = document.pictureInPictureElement;
      return a ? (a.webkitSetPresentationMode("inline"), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error("No picture in picture element found"));
    };

    Tm = function Tm(a, b) {
      _.H("PatchedMediaKeysApple.requestMediaKeySystemAccess");

      try {
        var c = new Sm(a, b);
        return Promise.resolve(c);
      } catch (d) {
        return Promise.reject(d);
      }
    };

    Vm = function Vm(a) {
      _.H("PatchedMediaKeysApple.setMediaKeys");

      var b = this.mediaKeys;
      b && b != a && Um(b, null);
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? Um(a, this) : Promise.resolve();
    };

    Wm = function Wm(a) {
      _.H("PatchedMediaKeysApple.onWebkitNeedKey_", a);

      a = _.J(a.initData);
      if (_.Xf(a).getUint32(0, !0) + 4 != a.byteLength) throw new RangeError("Malformed FairPlay init data");
      a = bg(a.subarray(4), !0);
      a = _.dg(a);
      var b = new Event(_.Oc);
      b.initDataType = "skd";
      b.initData = _.Yf(a);
      this.dispatchEvent(b);
    };

    Xm = function Xm(a) {
      _.H("PatchedMediaKeysApple.cancelNativeMediaEncryptedEvent_", a);

      a instanceof MediaEncryptedEvent && (_.Nf("Cancel native MediaEncryptedEvent when using Apple-prefixed EME"), a.stopImmediatePropagation());
    };

    Sm = function Sm(a, b) {
      _.H("PatchedMediaKeysApple.MediaKeySystemAccess");

      this.keySystem = a;
      if (a.startsWith(_.Ac)) for (var c = _.t(b), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        if (e.persistentState == _.Ud) d = null;else {
          d = {
            audioCapabilities: [],
            videoCapabilities: [],
            persistentState: _.Dd,
            distinctiveIdentifier: _.Dd,
            initDataTypes: e.initDataTypes,
            sessionTypes: [_.ne],
            label: e.label
          };
          var f = !1,
              g = !1;
          if (e.audioCapabilities) for (var k = _.t(e.audioCapabilities), l = k.next(); !l.done; l = k.next()) {
            l = l.value, l.contentType && (f = !0, WebKitMediaKeys.isTypeSupported(this.keySystem, l.contentType.split(";")[0]) && (d.audioCapabilities.push(l), g = !0));
          }
          if (e.videoCapabilities) for (e = _.t(e.videoCapabilities), l = e.next(); !l.done; l = e.next()) {
            k = l.value, k.contentType && (f = !0, WebKitMediaKeys.isTypeSupported(this.keySystem, k.contentType.split(";")[0]) && (d.videoCapabilities.push(k), g = !0));
          }
          f || (g = WebKitMediaKeys.isTypeSupported(this.keySystem, _.Ge));
          d = g ? d : null;
        }

        if (d) {
          this.a = d;
          return;
        }
      }
      c = Error(_.pb);
      c.name = _.Za;
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    };

    Ym = function Ym(a) {
      _.H("PatchedMediaKeysApple.MediaKeys");

      this.f = new WebKitMediaKeys(a);
      this.a = new _.bh();
    };

    Um = function Um(a, b) {
      _.eh(a.a);

      if (!b) return Promise.resolve();
      a.a.on(b, _.Oc, Xm);
      a.a.on(b, Se, Wm);

      try {
        if (1 <= b.readyState) b.webkitSetMediaKeys(a.f);else a.a.one(b, _.ed, function () {
          b.webkitSetMediaKeys(a.f);
        });
        return Promise.resolve();
      } catch (c) {
        return Promise.reject(c);
      }
    };

    $m = function $m(a) {
      _.H("PatchedMediaKeysApple.MediaKeySession");

      _.Vh.call(this);

      this.g = null;
      this.j = a;
      this.f = this.a = null;
      this.h = new _.bh();
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new _.gj();
      this.keyStatuses = new Zm();
    };

    an = function an(a, b) {
      var c = a.keyStatuses;
      c.size = void 0 == b ? 0 : 1;
      c.a = b;
      a.dispatchEvent(new _.M(_.Yc));
    };

    Zm = function Zm() {
      this.size = 0;
      this.a = void 0;
    };

    cn = function cn(a, b, c) {
      if ("input" === a) switch (this.type) {
        case "range":
          a = pc;
      }
      bn.call(this, a, b, c);
    };

    en = function en(a) {
      this.l = a;
      this.h = this.l.getNetworkEngine();
      this.a = new _.bh();
      this.g = null;
      this.f = !0;
      dn(this);
    };

    dn = function dn(a) {
      a.a.on(window, "offline", function () {
        fn(a, !1);
      });
      a.a.on(window, "online", function () {
        a.f || gn(a);
      });
      a.a.on(a.l, ae, function () {
        return hn(a);
      });
      a.a.on(a.l, "suspend", function () {
        return hn(a);
      });
      a.a.on(a.l, _.Me, function () {
        return hn(a);
      });
      a.a.on(a.l, _.Ld, function () {
        a.f || gn(a);
      });
      a.a.on(a.l, _.Od, function () {
        a.f || gn(a);
      });
      a.a.on(a.l, _.de, function () {
        switch (a.l.getState()) {
          case _.jn:
            hn(a);
            break;

          default:
            hn(a);
        }
      });
    };

    gn = function gn(a) {
      a.l.getConfiguration().connectivityCheck && (kn(a), a.g = new _.Ah(function () {
        return ln(a);
      }).X(5));
    };

    hn = function hn(a) {
      a.f && gn(a);
    };

    kn = function kn(a) {
      a.g && (a.g.stop(), a.g = null);
    };

    ln = function ln(a) {
      var b, c;
      return _.z(function (d) {
        if (1 == d.a) return (b = a.l.getConfiguration().connectivityCheck) && a.l ? _.v(d, yj(a.h, b.url, b.attemptParameters, b.method), 2) : d["return"]();
        c = d.f;
        fn(a, c);

        _.w(d);
      });
    };

    fn = function fn(a, b) {
      kn(a);
      a.f !== b && (a.f = b, a.l && a.l.getConfiguration().connectivityCheck && a.l.trigger(new _.M(Cd, {
        online: a.f
      })));
    };

    _.jm = function (a, b) {
      this.N = a;
      this.w = b;
      this.a = !1;
    };

    mn = function mn(a, b) {
      a.N.then(function () {
        return b(!0);
      }, function () {
        return b(!1);
      });
      return a;
    };

    nn = function nn(a, b, c) {
      try {
        var d = a(b);
        if (d && d.N && d.abort) return c.resolve(d.N), function () {
          return d.abort();
        };
        c.resolve(d);
        return function () {
          return Promise.resolve(d).then(function () {})["catch"](function () {});
        };
      } catch (e) {
        return c.reject(e), function () {
          return Promise.resolve();
        };
      }
    };

    pn = function pn(a) {
      _.jm.call(this, new _.gj(), function () {
        return Promise.resolve();
      });

      this.A = a;
      this.g = null;
      this.o = this.N;
      this.f = -1;
      this.h = this.j = this.m = null;

      _on(this);
    };

    qn = function qn(a, b, c) {
      a.m = setTimeout(b, c);
    };

    _on = function on(a) {
      a.g = a.A.then(function (e) {
        a.h = e.request;
        e.request.uriIndex = e.request.currentAttempt % e.request.uris.length;

        if (0 < e.request.currentAttempt) {
          -1 === a.f && (a.f = rn(e.request.baseDelay, 1E3));
          var f = a.f * (1 + (2 * Math.random() - 1) * rn(e.request.fuzzFactor, .5));
          a.f *= rn(e.request.backoffFactor, 2);
          if (0 < f) return new Promise(function (g, k) {
            a.j = k;
            qn(a, function () {
              g(e.plugin(e.request));
            }, f);
          })["catch"](function (g) {
            if (!a.a) throw g;
          });
        }

        if (a.a) throw new _.K(1, 1, 7001, {
          url: e.request.uris[e.request.uriIndex],
          request: e.request
        });
        return e.plugin(e.request);
      });
      var b = 0,
          c = 0,
          d = 0;
      return a.g.then(function (e) {
        var f = e.request;
        f.currentAttempt += 1;
        b = f.currentAttempt;
        c = f.maxAttempts;
        d = f.uris.length;
        return e.N;
      }).then(function (e) {
        a.o.resolve(e);
      })["catch"](function (e) {
        if (e instanceof _.K) {
          if ((1 === e.a || b < d) && 7001 !== e.code && b < c) return _on(a);
          7001 !== e.code && e.f(_.L);
          a.o.reject(e);
        } else a.o.reject(e);
      });
    };

    rn = function rn(a, b) {
      return null === a || void 0 === a ? b : a;
    };

    _.tn = function (a, b) {
      var c = _.sn(a, b);

      return 1 != c.length ? null : c[0];
    };

    _.sn = function (a, b) {
      return Array.prototype.filter.call(a.childNodes, function (c) {
        return c instanceof Element && c.tagName == b;
      });
    };

    _.un = function (a) {
      return Array.prototype.every.call(a.childNodes, function (b) {
        return b.nodeType == Node.TEXT_NODE || b.nodeType == Node.CDATA_SECTION_NODE;
      }) ? a.textContent.trim() : null;
    };

    _.vn = function (a, b) {
      var c = new DOMParser(),
          d = null,
          e = null;

      try {
        e = c.parseFromString(a, _.qe);
      } catch (f) {}

      e && e.documentElement.tagName == b && (d = e.documentElement);
      return d && 0 < d.getElementsByTagName("parsererror").length ? null : d;
    };

    wn = function wn(a, b, c) {
      this.h = new Uint8Array(a);
      this.a = b;
      this.f = c;
    };

    _.yn = function (a) {
      var b = new Uint8Array(xn),
          c = 4 + b.byteLength + a.h.byteLength + 4 + a.f.byteLength,
          d = new _.Zj(c, !1);

      _.S(d, c);

      _.bk(d, b);

      _.bk(d, a.h);

      _.S(d, a.f.byteLength);

      _.bk(d, a.f);

      return _.J(d.buffer);
    };

    zn = function zn() {
      wn.apply(this, arguments);
    };

    _.Bn = function (a) {
      var b = _.$h(a);

      b = parseInt(b.byteLength, 10).toString(16);
      b = _.$h("12" + b + a);
      return new zn(An, a, b);
    };

    Cn = function Cn(a, b, c, d, e, f) {
      f = void 0 === f ? null : f;
      wn.call(this, a, b, d);
      this.version = e;
      this.g = c;
      this.j = f;
    };

    _.En = function (a, b) {
      return b === a.version ? a : _.Dn(b, a.a, a.j || void 0, a.g || void 0);
    };

    _.Dn = function (a, b, c, d) {
      var e = _.$h(b);

      var f = Fn(e);
      e = _.Xh(f);

      a: switch (f = f.byteLength, _.H("Trying to create PlayReady header in version", a), a) {
        case "4.0.0.0":
          e = [ja + a + '"\x3e', "\x3cDATA\x3e\x3cPROTECTINFO\x3e", "\x3cKEYLEN\x3e" + f + "\x3c/KEYLEN\x3e", "\x3cALGID\x3eAESCTR\x3c/ALGID\x3e\x3c/PROTECTINFO\x3e", "\x3cKID\x3e" + e + "\x3c/KID\x3e", c ? "\x3cCHECKSUM\x3e" + c + "\x3c/CHECKSUM\x3e" : "", d ? ia + d + ha : "", fa].join("");
          break a;

        case "4.1.0.0":
          e = [ja + a + '"\x3e', '\x3cDATA\x3e\x3cPROTECTINFO\x3e\x3cKID ALGID\x3d"AESCTR" ', c ? 'CHECKSUM\x3d"' + c + '" ' : "", 'VALUE\x3d"' + e + '"', "\x3e\x3c/KID\x3e\x3c/PROTECTINFO\x3e", d ? ia + d + ha : "", fa].join("");
          break a;

        case "4.2.0.0":
        case "4.3.0.0":
          e = [ja + a + '"\x3e', '\x3cDATA\x3e\x3cPROTECTINFO\x3e\x3cKIDS\x3e\x3cKID ALGID\x3d"AESCTR" ', c ? 'CHECKSUM\x3d"' + c + '" ' : "", 'VALUE\x3d"' + e + '"', "\x3e\x3c/KID\x3e\x3c/KIDS\x3e\x3c/PROTECTINFO\x3e", d ? ia + d + ha : "", fa].join("");
          break a;

        default:
          _.C("Cannot create PlayReady header in version", a), e = "";
      }

      _.H("New payload", e);

      e = _.J(eg(e, !0));
      return new Cn(Gn, b, d || null, e, a, c);
    };

    _.Hn = function (a) {
      a: {
        a = new _.ck(new DataView(a.buffer), !0);

        _.hk(a);

        for (_.gk(a); _.dk(a);) {
          if (1 === _.gk(a)) {
            var b = _.gk(a);

            a = _.kk(a, b);
            break a;
          }
        }

        a = null;
      }

      b = bg(a, !0);

      var c = _.vn(b, "WRMHEADER");

      b = c.getAttribute("version");

      var d = _.tn(c, "DATA");

      c = (c = _.tn(d, "LA_URL")) ? _.un(c) : "";

      var e = "",
          f = _.tn(d, "KID");

      if (f) {
        e = _.un(f) || "";
        var g = f.getAttribute("CHECKSUM");
      } else if ((f = _.tn(d, "PROTECTINFO")) && (f = _.tn(f, "KIDS")) && (e = _.tn(f, "KID").getAttribute("VALUE") || ""), d = _.tn(d, "CHECKSUM")) g = d.textContent;

      d = _.Zh(e);
      d = Fn(d);
      d = _.ai(d);
      return new Cn(Gn, d, c, a, b, g);
    };

    Fn = function Fn(a) {
      var b = [];
      b.push(a[3]);
      b.push(a[2]);
      b.push(a[1]);
      b.push(a[0]);
      b.push(a[5]);
      b.push(a[4]);
      b.push(a[7]);
      b.push(a[6]);
      a = _.J(a);
      a.set(b, 0);
      return a;
    };

    In = function In() {
      this.l = null;
    };

    Jn = function Jn(a, b, c, d, e) {
      _.Qj.call(this, Ia);

      this.m = a;
      this.j = b;
      this.h = c;
      this.g = d;
      this.o = e;
      this.a = new _.F(uc);
      jg(this.m) ? this.a.warn("Widevine License URL is not defined") : this.fb(_.Sj, {
        licenseUrl: this.m,
        videoRobustness: [_.hb, void 0],
        audioRobustness: [_.gb, void 0],
        persistentStateRequired: !1,
        distinctiveIdentifierRequired: !1,
        serverCertificate: null,
        modifiers: {
          licenseRequest: this.Uc.bind(this)
        }
      });
      jg(this.j) ? this.a.warn("PlayReady License URL is not defined") : this.fb(_.Uj, {
        licenseUrl: this.j,
        videoRobustness: ["3000"],
        audioRobustness: ["2000"],
        modifiers: {
          licenseRequest: this.Uc.bind(this)
        }
      });
      jg(this.h) ? this.a.warn("FairPlay License URL is not defined") : jg(this.g) ? this.a.warn("FairPlay Certificate URL is not defined") : this.fb(_.Tj, {
        licenseUrl: this.h,
        certificateUrl: this.g,
        modifiers: {
          licenseRequest: this.Kf.bind(this),
          licenseResponse: this.Lf.bind(this),
          certificateRequest: this.Uc.bind(this),
          extractContentId: this.mf.bind(this)
        }
      });
    };

    _.Kn = function (a) {
      var b = [];
      a = _.t(a);

      for (var c = a.next(); !c.done; c = a.next()) {
        c = _.t(c.value.variants);

        for (var d = c.next(); !d.done; d = c.next()) {
          b.push(d.value);
        }
      }

      return b;
    };

    Ln = function Ln(a, b) {
      a.onError(b);
      a.release().then(function () {
        return a.destroy();
      });
    };

    Mn = function Mn(a, b, c) {
      this.g = a;
      this.f = b;
      JSON.parse(_.$f(_.Zh(a)));
      this.a = JSON.parse(_.$f(_.Zh(b)));
      this.h = c;
    };

    Nn = function Nn(a) {
      this.license = a;
      this.a = null;
      this.f = new _.F("clpp.utils.LicenseKey");
    };

    On = function On(a) {
      if (!a.a) {
        var b = a.license.split(".");
        if (3 != b.length) throw Error("Expected to find 3 data sections in JWT raw data");
        b = new Mn(b[0], b[1], b[2]);
        a.a = b;
      }

      return a.a;
    };

    Pn = function Pn(a) {
      switch ((a.rd()[0] || {
        src: "",
        type: ""
      }).type) {
        case _.pm:
          a = "dash";
          break;

        case _.rm:
          a = "ss";
          break;

        case _.qm:
          a = "hls";
          break;

        case _.Ge:
          a = _.nd;
          break;

        default:
          a = "";
      }

      return a;
    };

    Qn = function Qn(a) {
      return a.viewerId ? a.viewerId : (a = a.drm || null) && a.customData && a.customData.userId ? "" + a.customData.userId : "";
    };

    Rn = function Rn(a) {
      return (a = a.drm || null) && a.customData && a.customData.assetId ? "" + a.customData.assetId : "";
    };

    Sn = function Sn(a) {
      return (a = a.drm || null) && a.customData && a.customData.sessionId ? "" + a.customData.sessionId : "";
    };

    Un = function Un(a) {
      var b = a.getConfiguration(),
          c = "no";
      b.drm && (c = "custom", b.drm.env && b.drm.env.toLowerCase().startsWith(Lc) || Tn(a).endsWith("drmtoday.com")) && (c = Lc);
      return c;
    };

    Vn = function Vn(a) {
      a = a.getDrmInfo();
      var b = "";
      if (a) switch (a.keySystem) {
        case _.Sj:
          b = "wv";
          break;

        case _.Uj:
          b = "pr";
          break;

        case _.Tj:
          b = "fps";
      }
      return b;
    };

    Wn = function Wn(a) {
      a = a.getDrmInfo();
      var b = !1;
      a && (b = a.persistentStateRequired);
      return b.toString();
    };

    Xn = function Xn(a) {
      a = a.getDrmInfo();
      var b = "";
      if (a) switch (a.videoRobustness) {
        case Fa:
        case "HW_SECURE_ALL":
          b = "L1";
          break;

        case Ea:
          b = "L2";
          break;

        case _.hb:
        case _.gb:
          b = "L3";
      }
      return b;
    };

    Tn = function Tn(a) {
      a = a.getDrmInfo();
      return new _.jj(a && a.licenseServerUri || "").Fa;
    };

    $n = function $n(a, b) {
      if (!window.location.protocol.startsWith("http")) return a.f.debug("Registration protocol check", window.location.protocol, window.location.protocol.startsWith("http")), Promise.resolve();

      var c = "ie" === _.Yi().browser,
          d = b.getConfiguration(),
          e = _.ff(Array.from(_.Ij.keys())).concat(_.ff(b.hi()));

      d = {
        "CL-KEY": a.license,
        "CL-LOCATION": window.location.href,
        "CL-SDK-VERSION": _.da,
        "CL-USER-ID": Qn(d),
        "CL-ASSET-ID": Rn(d),
        "CL-SESSION-ID": Sn(d),
        "CL-PLAYBACK-TYPE": b.isLive() ? Yn : Zn,
        "CL-CONTENT-TYPE": Pn(b),
        "CL-PLUGINS": e.join(" "),
        "CL-DRM": Un(b),
        "CL-DRM-CDM": Vn(b),
        "CL-DRM-SEC-LEVEL": Xn(b),
        "CL-DRM-OFFLINE": Wn(b),
        "CL-DRM-IP": Tn(b)
      };
      c && (e = window.localStorage.getItem("cl_et")) && (d["CL-ETAG"] = e);
      e = _.Fh(["https://downloads.castlabs.com/r/register/"]);
      e.method = "GET";
      e.headers = d;
      return new _.xj().fetch(e).N.then(function (f) {
        200 === f.status && c && window.localStorage.setItem("cl_et", f.headers.etag);
        return Promise.resolve();
      })["catch"](function (f) {
        a: {
          var g = On(a);
          f = f.data;
          var k = f.status;
          if (g.a && g.a.ilv) f = Promise.resolve();else {
            switch (k) {
              case 403:
              case 404:
                g = 7101;
                var l = "castLabs Player license is invalid";

                if (403 === k) {
                  k = l;
                  l = "";

                  try {
                    l = JSON.parse(decodeURIComponent(f.responseText)).message;
                  } catch (m) {}

                  f = k + (": " + l);
                } else f = l + "!";

                l = f;
                break;

              case 412:
                g = 7103;
                l = "userID is required for playback!";
                break;

              default:
                f = Promise.resolve();
                break a;
            }

            a.f.error(Na + l);
            f = Promise.reject(new _.K(_.L, 7, g, l));
          }
        }

        return f;
      });
    };

    _.ao = function (a, b, c) {
      this.f = a;
      this.g = b;
      this.h = c || this.f.getMedia();
      this.a = null;
    };

    _.wj = function () {
      this.a = [];
    };

    _.bo = function (a, b) {
      a.a.push(mn(b, function () {
        var c = a.a,
            d = c.indexOf(b);
        -1 < d && c.splice(d, 1);
      }));
    };

    _.eo = function (a) {
      var b = (a || "").split("-");
      a = b[0] || "";
      b = b[1] || "";
      a = a.toLowerCase();
      a = co.get(a) || a;
      return (b = b.toUpperCase()) ? a + "-" + b : a;
    };

    _.fo = function (a, b, c, d, e, f, g, k) {
      a = _.Fh(a);
      a.timeout = d.timeout;
      a.maxAttempts = d.maxAttempts;
      a.baseDelay = d.baseDelay;
      a.fuzzFactor = d.fuzzFactor;
      a.backoffFactor = d.backoffFactor;
      if (0 != b || null != c) a.headers.Range = c ? "bytes\x3d" + b + "-" + c : "bytes\x3d" + b + "-";
      e && (a.startTime = e);
      f && (a.endTime = f);
      g && (a.contentType = g);
      k && (a.timescale = k);
      return a;
    };

    _.ho = function () {
      this.a = new Blob([go], {
        type: _.Ge
      });
    };

    _.io = function (a) {
      this.g = Math.exp(Math.log(.5) / a);
      this.f = this.a = 0;
    };

    _.jo = function (a, b, c) {
      var d = Math.pow(a.g, b);
      c = c * (1 - d) + d * a.a;
      isNaN(c) || (a.a = c, a.f += b);
    };

    _.ko = function (a) {
      return a.a / (1 - Math.pow(a.g, a.f));
    };

    _.lo = function (a) {
      this.f = a;
      this.a = 0;
    };

    _.mo = function (a, b) {
      b.lastIndex = a.a;
      var c = b.exec(a.f);
      c = null == c ? null : {
        position: c.index,
        length: c[0].length,
        results: c
      };
      if (a.a == a.f.length || null == c || c.position != a.a) return null;
      a.a += c.length;
      return c.results;
    };

    T = function T(a, b, c) {
      _.Vh.call(this);

      var d = this;
      Fm();
      this.g = new _.F("clpp.Player");
      if (!a) throw new _.K(_.L, 7, 7102);
      this.A = new _.bh();
      this.f = this.S = b || _.Dj();
      this.w = null;
      void 0 === this.f.license && (this.f.license = Bj, this.g.warn("You are using the embedded demo license!"));
      if (!this.f.license) throw this.g.error("You provided null or empty string as your license. Please check your license configuration."), new _.K(_.L, 7, 7101, "No license provided in configuration!");
      this.h = new om(a, c);
      this.a = this.o = null;
      this.H = new _.xj();
      this.j = null;
      this.K = [];
      this.M = {};
      this.m = null;
      this.I = !0;
      this.J = this.D = !1;
      this.C = this.vc = null;
      this.Vd = !1;
      this.V = new en(this);
      this.P = !1;

      this.B = function (f) {
        (f = f.detail) && f.currentState === _.no && (d.off(_.de, d.B), oo(d));
      };

      this.on(_.de, function () {
        d.getState() === _.hm && d.unload();
      });
      this.on(_.Mb, this.Ff.bind(this));
      this.on(_.Lb, this.Ff.bind(this));
      po(this, this.f.license);
      this.h.getMedia() && (a = this.h.getMedia(), a.hasAttribute("autoplay") && (a.removeAttribute("autoplay"), this.g.debug("Removed autoplay attribute from video element. Auto play will be handled by configuration."), void 0 === this.f.autoplay && (this.f.autoplay = !0, this.g.debug("Setting autoplay in configuration since it was specified in the video element"))));
      a = [];
      b = _.t(qo);

      for (c = b.next(); !c.done; c = b.next()) {
        c = c.value;

        try {
          var e = c.create(this.f);
          e && a.push(e);
        } catch (f) {
          this.g.error("Error while creating player plugin", f);
        }
      }

      ro(this, a);

      _.Ij.clear();
    };

    _.so = function (a, b) {
      b !== a.a && (a.a && (a.a.removeDelegate(a), a.a.destroy()), a.a = b, a.a && (a.a.init(a.h, a.f), a.a.setNetworkEngine(a.getNetworkEngine()), a.a.addDelegate(a)));
    };

    po = function po(a, b) {
      a.o = new Nn(b);
      a.o.verify()["catch"](function (c) {
        setTimeout(function () {
          a.g.error(Na + c);
          a.trigger(new _.M(_.Rc, {
            detail: new _.K(_.L, 7, 7101)
          }));
          a.destroy();
        }, 1E3);
      });
    };

    oo = function oo(a) {
      if (!a.P) {
        a.P = !0;
        a.h.getMedia() || a.h.getCastElement();
        a.o || (a.o = new Nn(a.f.license));
        var b = Object.keys(a.M);
        $n(a.o, {
          getConfiguration: a.getConfiguration.bind(a),
          rd: a.rd.bind(a),
          getDrmInfo: a.getDrmInfo.bind(a),
          hi: function hi() {
            return b;
          },
          isLive: a.isLive.bind(a)
        }).then(function () {
          a.g.debug("License verified remotely");
        })["catch"](function (c) {
          setTimeout(Ln, 1E3, {
            release: a.release.bind(a),
            destroy: a.destroy.bind(a),
            onError: a.onError.bind(a)
          }, c);
        });
      }
    };

    ro = function ro(a, b) {
      a.K = b;
      a.bc("onPlayerCreated").then(function () {
        for (var c = _.t(a.K), d = c.next(); !d.done; d = c.next()) {
          d = d.value;
          var e = d.id();
          e && (a.M[e] = d);
        }
      });
    };

    to = function to(a) {
      var b, c;
      return _.z(function (d) {
        if (1 == d.a) {
          if (a.I) return a.g.debug("The player is already released. No-op"), d["return"](new Promise(function (e) {
            return e();
          }));
          a.off(_.de, a.B);
          a.A.off(a, _.de, a.B);
          a.A.off(document, Ke);
          a.trigger(new _.M(_.Sd));
          a.P = !1;
          a.h && a.h.release();
          return a.j ? _.v(d, a.j.dispose(), 3) : d.G(2);
        }

        2 != d.a && (a.j = null);
        Mj(function (e) {
          e.release();
        });
        if (a.a) return b = null, c = a.a.on(_.de, function (e) {
          b = e;
        }), d["return"](a.bc(_.Ad).then(function () {
          a.a.removeDelegate(a);
          return Promise.all([a.a.release(), a.H.release()]);
        }).then(function () {
          a.g.debug("Releasing player completed");
          b && (a.g.debug("Re-post state change event after release"), a.trigger(b));
        })["finally"](function () {
          a.a.off(_.de, c);
          a.trigger(new _.M(Rd));
        }));
        a.trigger(new _.M(Rd));
        return d["return"](new Promise(function (e) {
          return e();
        }));
      });
    };

    uo = function uo(a, b) {
      return new Promise(function (c, d) {
        var e;

        if (b) {
          for (var f = e = null, g = 0; g < b.length; g++) {
            ;
          }

          g = Object.values(_.Wg);

          for (var k = 0; k < b.length; k++) {
            for (var l = 0; l < g.length; l++) {
              var m = {
                pd: g[l],
                confidence: g[l].canPlay(b[k])
              };
              if (null === e || e.confidence < m.confidence) e = m, f = k;
            }
          }

          e && _typeof(f) === _.ud && 0 < e.confidence ? (_.Xg.debug("Player Factory '" + e.pd.getName() + "' can play", b[f]), e = new Ug(e.pd, f)) : (_.Xg.error("No compatible Player Factory found for sources:", b), e = null);
        } else e = null;

        e ? (f = e.pd.create(), c(new Vg(f, e.a))) : (e = new _.M(_.Rc, {
          detail: new _.K(_.L, 7, 7003)
        }), a.trigger(e), d(e));
      });
    };

    _.xo = function (a, b) {
      var c, d, e, f;
      return _.z(function (g) {
        switch (g.a) {
          case 1:
            if (a.D) throw Error("Player is already destroyed.");
            if (!a.h) throw Error("No surface associated with this player!");
            return _.v(g, a.release(), 2);

          case 2:
            a.m = _.um(b);
            c = _.Gj(b);
            a.f = _.Fj(a.S, c ? b : {}, {
              source: a.m
            });
            if (0 === a.m.length) throw Error("Invalid request to load: could not find source to load");
            a.I = !1;
            e = 0;

            if (!a.J && a.canPlay(a.m[0])) {
              g.G(3);
              break;
            }

            return _.v(g, uo(a, a.m), 4);

          case 4:
            f = g.f, d = f.a, e = f.f, a.J = !1;

          case 3:
            d ? _.so(a, d) : a.a.addDelegate(a);
            vo(a);
            a.a && a.a.setCdnErrorCallback(a.C);
            a.j = wo(a, a.f).create(a);
            a.setSourceIndex(e);
            if (a.f.pauseWhenInBackground) a.A.on(document, Ke, function () {
              document.hidden ? (a.g.debug("Player is hidden: pausing..."), a.pause()) : (a.g.debug("Player is visible: resuming..."), a.play());
            });
            Mj(function (k) {
              k.sc();
            });
            return _.v(g, a.bc("onContentWillLoad", a.f.source[e]), 0);
        }
      });
    };

    _.yo = function (a) {
      return _.z(function (b) {
        a.h.getMedia() || a.h.getCastElement();
        a.A.on(a, _.de, a.B);
        a.trigger(new _.M(fd));
        return _.v(b, Promise.all([a.a.load(a.f), a.j.load()]), 0);
      });
    };

    zo = function zo(a) {
      _.Bh(a.f.preferredTextLanguage).some(function (b) {
        var c = _.eo(b);

        return (b = a.getTrackManager().da().find(function (d) {
          d = _.eo(d.language || "");
          var e = c;
          d = _.eo(d);
          e = _.eo(e);
          return d.split("-")[0] == e.split("-")[0];
        })) ? (a.getTrackManager().sa(b), !0) : !1;
      });
    };

    _.Ao = function (a) {
      var b, c, d, e;
      return _.z(function (f) {
        if (1 == f.a) {
          b = [];
          if (a.f.remoteTextTracks) for (c = _.t(a.f.remoteTextTracks), d = c.next(); !d.done; d = c.next()) {
            e = d.value, b.push(a.getTrackManager().addTextTrack(e));
          }
          return _.v(f, Promise.all(b), 2);
        }

        return 3 != f.a ? (zo(a), Mj(function () {}), _.v(f, a.bc(_.xd), 3)) : a.f.autoplay ? _.v(f, a.play(), 0) : f.G(0);
      });
    };

    vo = function vo(a) {
      a.a && a.a.setDrmCustomDataModifier(function (b) {
        return _.z(function (c) {
          if (!a.vc || !a.Vd) return c.G(0);
          a.Vd = !1;
          return _.v(c, a.vc(b), 0);
        });
      });
    };

    _.Bo = function (a) {
      a && (0 <= qo.indexOf(a) || qo.push(a));
    };

    Fo = function Fo(a) {
      this.g = new _.F("clpp.StateManager");
      this.l = a;
      this.a = new _.bh();
      this.f = _.Co;
      this.A = _.Do;
      this.I = 0;
      this.w = -1;
      this.M = this.o = this.J = this.B = 0;
      this.j = this.m = this.D = !1;
      this.H = 0;
      this.h = null;
      this.K = 0;
      this.P = _.Ci();
      this.C = !1;
      this.J = Date.now();
      Eo(this);
    };

    Go = function Go(a, b) {
      return Object.keys(b)[a];
    };

    Ho = function Ho(a, b) {
      var c = {
        type: _.de
      };
      b === _.hc || b === _.gc ? (c.reason = a.w, b === _.hc ? c.timeSinceLastStateChangeMS = a.I : c.bufferedTimeMS = a.B) : (a.f === _.jn && (c.reason = a.w), a.A === _.jn && (c.reason = a.w, c.bufferedTimeMS = a.B), c.currentState = a.f, c.previousState = a.A, c.timeSinceLastStateChangeMS = a.I);
      return c;
    };

    Lo = function Lo(a, b) {
      if (a.f === b) return !1;
      var c = Date.now(),
          d = a.f === _.jn;
      a.A = a.f;
      a.f = b;
      a.A === _.Io && (a.J = c, a.o = 0);
      a.o || (a.o = a.J || c);
      a.I = c - a.o;
      a.o = c;
      b === _.jn ? (a.M = a.o, a.w = a.m ? 1 : 2, a.g.info("Buffering started. Reason: " + Go(a.w - 1, _.Jo)), c = Ho(a, _.hc), a.Mb(_.hc, c)) : d && (a.B = a.o - a.M, a.g.info("Buffering finished. Reason: " + Go(a.w - 1, _.Jo) + ". Buffering time: " + a.B + " ms"), c = Ho(a, _.gc), a.Mb(_.gc, c));
      c = Go(a.A, _.Ko);
      d = Go(a.f, _.Ko);
      a.g.info(_.ab + c + " -\x3e " + d);
      a.Mb(_.de, Ho(a, ""));
      return !0;
    };

    Oo = function Oo(a, b) {
      if (a.f === _.hm) a.g.warn("Player is in error state, aborting any further state checks");else {
        var c = a.l.isPaused();
        var d = a.l.getPosition();
        var e = a.l.getDuration();
        if (d = a.l.isEnded() || a.f === _.Io && 1 >= Math.abs(d - e) || c && d >= e) Lo(a, _.Io) && a.g.debug("Player claims to be in ended state, not checking more");else if (b !== _.re) {
          e = a.l.getPosition();
          e = null !== e && void 0 !== e && 0 <= e ? a.l.getBufferInfo().ta(e, !0) : -1;
          a.H = e;
          e = a.l.getSurface().getMedia();
          a.h = e ? e.readyState : null;
          a.K = a.l.getPlaybackRate() || 1;
          e = _typeof(a.h) === _.ud && 2 > a.h && 2 === e.networkState;

          var f = _typeof(a.h) === _.ud && 0 >= a.H && a.f === _.Co,
              g = _typeof(a.h) === _.ud && 2 >= a.h && a.j;

          e = a.m || f || e || g;
          !a.P || a.l.isLive() || a.f !== _.jn || e || (f = b === _.Xd && 4 === a.h, (g = a.A === _.Mo) && !a.C ? e = !0 : g || a.C || f || (e = !0));
          f = !1;
          e ? f = Lo(a, _.jn) : c ? f = Lo(a, _.No) : a.D && (f = Lo(a, _.no));
          f && (a.C = !1);
          a.g.debug("Video state check for event " + b + ":: seeking: " + a.m + ", waiting: " + a.j + ", playing: " + a.D + ", paused: " + c + ", readyState: " + a.h + ", rate: " + a.K + ", buffer: " + a.H + ", ended: " + d + ". Changed state: " + f + ", Current state: " + Go(a.f, _.Ko));
        }
      }
    };

    Eo = function Eo(a) {
      function b(d) {
        return Oo(a, d.type);
      }

      a.g.debug("Start watching for video events for " + a.l.namespace());
      var c = a.l;
      a.a.on(c, _.Qc, function () {
        a.j = !1;
        Lo(a, _.Io);
      });
      a.a.on(c, ic, b);
      a.a.on(c, _.Ld, function () {
        a.D = !0;
        a.j = !1;
        Oo(a, _.Ld);
      });
      a.a.on(c, _.Gd, function () {
        a.D = !1;
        a.j = !1;
        Oo(a, _.Gd);
      });
      a.a.on(c, _.re, b);
      a.a.on(c, _.Qd, b);
      a.a.on(c, _.Xd, function (d) {
        a.m = !1;
        a.j = !1;
        Oo(a, d.type);
      });
      a.a.on(c, _.Yd, function (d) {
        a.m = !0;
        Oo(a, d.type);
      });
      a.a.on(c, ae, b);
      a.a.on(c, _.Me, function () {
        a.j = !0;
        Oo(a, _.Me);
      });
      a.a.on(c, _.Rc, function (d) {
        (d = d && d.detail) && d.a && d.a === _.L && Lo(a, _.hm);
      });
      a.a.on(c, _.ed, b);
      a.a.on(c, jc, function () {
        a.C = !0;
        Oo(a, jc);
      });
      a.a.on(c, _.Ae, function (d) {
        a.m = !0;
        Oo(a, d.type);
      });
      a.a.on(c, _.ze, function (d) {
        a.m = !1;
        a.j = !1;
        Oo(a, d.type);
      });
    };

    _.Po = function (a, b, c, d, e) {
      this.Pa = a;
      this.Ia = b;
      this.va = c;
      this.keyInfo = d || null;
      this.uc = !!e;
    };

    _.Qo = function (a, b, c, d, e, f, g, k, l, m, n, p, r) {
      this.position = a;
      this.startTime = b;
      this.endTime = c;
      this.ub = g;
      this.Pa = d;
      this.Ia = e;
      this.va = f;
      this.keyInfo = k || null;
      this.uc = !!l;
      this.timescale = void 0 === m ? null : m;
      this.horizontalTiles = void 0 === n ? null : n;
      this.verticalTiles = void 0 === p ? null : p;
      this.durationPerTile = void 0 === r ? null : r;
    };

    _.Ro = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      this.m = a;
      this.D = b;
      this.cc = this.h = Infinity;
      this.a = 1;
      this.o = 0;
      this.g = this.j = null;
      this.w = 0;
      this.f = !0;
      this.B = !1;
      this.H = void 0 === c ? !0 : c;
      this.A = new _.F("clpp.media.PresentationTimeline");
      this.C = d;
    };

    _.To = function (a, b, c) {
      if (0 != b.length) {
        var d = b[b.length - 1].endTime + c;

        _.So(a, b[0].startTime + c);

        a.a = b.reduce(function (e, f) {
          return Math.max(e, f.endTime - f.startTime);
        }, a.a);
        a.g = Math.max(a.g, d);
        null != a.m && a.H && (a.m = (Date.now() + a.w) / 1E3 - a.g - a.a);
        a.A.debug("notifySegments: maxSegmentDuration\x3d" + a.a);
      }
    };

    _.So = function (a, b) {
      a.j = null == a.j ? b : Math.min(a.j, b);
    };

    _.Uo = function (a, b) {
      a.a = Math.max(a.a, b);
      a.A.debug("notifyNewSegmentDuration: maxSegmentDuration\x3d" + a.a);
    };

    _.Wo = function (a) {
      if (Infinity == a.cc) return 0;
      a = _.Vo(a) - a.cc;
      return Math.max(0, a);
    };

    _.Vo = function (a) {
      if (a.Yb()) a = a.g;else if (a.isLive() || Infinity != a.h && !a.f) {
        var b = (Date.now() + a.w) / 1E3;
        a = Math.min(a.C ? Math.max(0, b - (a.a - a.o) - a.m) : Math.max(0, b - a.a - a.m), a.h);
      } else a = a.h;
      return a;
    };

    _.Xo = function (a) {
      this.a = a;
      this.f = new _.F("clpp.media.SegmentIndex");
    };

    _.Yo = function (a, b) {
      for (var c = 0; c < a.a.length; ++c) {
        if (a.a[c].endTime > b) {
          a.a.splice(0, c);
          return;
        }
      }

      a.a = [];
    };

    _.Zo = function (a, b) {
      for (; a.a.length;) {
        if (0 >= a.a[0].endTime) a.a.shift();else break;
      }

      if (0 != a.a.length) {
        var c = a.a[a.a.length - 1];
        c.startTime >= b || (a.a[a.a.length - 1] = new _.Qo(c.position, c.startTime, b, c.Pa, c.Ia, c.va, c.ub, c.keyInfo, c.uc, c.timescale, c.horizontalTiles, c.verticalTiles, c.durationPerTile));
      }
    };

    $o = function $o() {};

    ap = function ap() {};

    bp = function bp() {};

    _.ep = function (a) {
      a && (0 <= cp.indexOf(a) ? dp.warn("Factory '" + a.name() + "' is already registered") : (cp.push(a), dp.info("Factory " + a.name() + "' has been registered.")));
    };

    wo = function wo(a, b) {
      var c = cp.find(function (d) {
        return d.$(a, b);
      });
      c || (c = new ap());
      dp.info("Chosen ads: " + c.name());
      return c;
    };

    fp = function fp() {};

    U = function U() {};

    gp = function gp() {};

    _.hp = function () {};

    bf = _typeof(Object.defineProperties) == _.Tc ? Object.defineProperty : function (a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    };
    $e = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    cf.prototype.toString = function () {
      return this.a;
    };

    var af = function () {
      function a(c) {
        if (this instanceof a) throw new TypeError("Symbol is not a constructor");
        return new cf("jscomp_symbol_" + (c || "") + "_" + b++, c);
      }

      var b = 0;
      return a;
    }(),
        gf = _typeof(Object.create) == _.Tc ? Object.create : function (a) {
      function b() {}

      b.prototype = a;
      return new b();
    },
        ip;

    if (_typeof(Object.setPrototypeOf) == _.Tc) ip = Object.setPrototypeOf;else {
      var jp;

      a: {
        var kp = {
          hg: !0
        },
            lp = {};

        try {
          lp.__proto__ = kp;
          jp = lp.hg;
          break a;
        } catch (a) {}

        jp = !1;
      }

      ip = jp ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var hf = ip;

    jf.prototype.w = function (a) {
      this.f = a;
    };

    jf.prototype["return"] = function (a) {
      this.g = {
        "return": a
      };
      this.a = this.j;
    };

    jf.prototype.G = function (a) {
      this.a = a;
    };

    vf("Promise", function (a) {
      function b(g) {
        this.f = 0;
        this.j = void 0;
        this.a = [];
        var k = this.g();

        try {
          g(k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      }

      function c() {
        this.a = null;
      }

      function d(g) {
        return g instanceof b ? g : new b(function (k) {
          k(g);
        });
      }

      if (a) return a;

      c.prototype.f = function (g) {
        if (null == this.a) {
          this.a = [];
          var k = this;
          this.g(function () {
            k.j();
          });
        }

        this.a.push(g);
      };

      var e = $e.setTimeout;

      c.prototype.g = function (g) {
        e(g, 0);
      };

      c.prototype.j = function () {
        for (; this.a && this.a.length;) {
          var g = this.a;
          this.a = [];

          for (var k = 0; k < g.length; ++k) {
            var l = g[k];
            g[k] = null;

            try {
              l();
            } catch (m) {
              this.h(m);
            }
          }
        }

        this.a = null;
      };

      c.prototype.h = function (g) {
        this.g(function () {
          throw g;
        });
      };

      b.prototype.g = function () {
        function g(m) {
          return function (n) {
            l || (l = !0, m.call(k, n));
          };
        }

        var k = this,
            l = !1;
        return {
          resolve: g(this.B),
          reject: g(this.h)
        };
      };

      b.prototype.B = function (g) {
        if (g === this) this.h(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof b) this.C(g);else {
          a: switch (_typeof(g)) {
            case _.vd:
              var k = null != g;
              break a;

            case _.Tc:
              k = !0;
              break a;

            default:
              k = !1;
          }

          k ? this.A(g) : this.m(g);
        }
      };

      b.prototype.A = function (g) {
        var k = void 0;

        try {
          k = g.then;
        } catch (l) {
          this.h(l);
          return;
        }

        _typeof(k) == _.Tc ? this.D(k, g) : this.m(g);
      };

      b.prototype.h = function (g) {
        this.o(2, g);
      };

      b.prototype.m = function (g) {
        this.o(1, g);
      };

      b.prototype.o = function (g, k) {
        if (0 != this.f) throw Error("Cannot settle(" + g + ", " + k + "): Promise already settled in state" + this.f);
        this.f = g;
        this.j = k;
        this.w();
      };

      b.prototype.w = function () {
        if (null != this.a) {
          for (var g = 0; g < this.a.length; ++g) {
            f.f(this.a[g]);
          }

          this.a = null;
        }
      };

      var f = new c();

      b.prototype.C = function (g) {
        var k = this.g();
        g.fd(k.resolve, k.reject);
      };

      b.prototype.D = function (g, k) {
        var l = this.g();

        try {
          g.call(k, l.resolve, l.reject);
        } catch (m) {
          l.reject(m);
        }
      };

      b.prototype.then = function (g, k) {
        function l(r, q) {
          return _typeof(r) == _.Tc ? function (x) {
            try {
              m(r(x));
            } catch (y) {
              n(y);
            }
          } : q;
        }

        var m,
            n,
            p = new b(function (r, q) {
          m = r;
          n = q;
        });
        this.fd(l(g, m), l(k, n));
        return p;
      };

      b.prototype["catch"] = function (g) {
        return this.then(void 0, g);
      };

      b.prototype.fd = function (g, k) {
        function l() {
          switch (m.f) {
            case 1:
              g(m.j);
              break;

            case 2:
              k(m.j);
              break;

            default:
              throw Error("Unexpected state: " + m.f);
          }
        }

        var m = this;
        null == this.a ? f.f(l) : this.a.push(l);
      };

      b.resolve = d;

      b.reject = function (g) {
        return new b(function (k, l) {
          l(g);
        });
      };

      b.race = function (g) {
        return new b(function (k, l) {
          for (var m = _.t(g), n = m.next(); !n.done; n = m.next()) {
            d(n.value).fd(k, l);
          }
        });
      };

      b.all = function (g) {
        var k = _.t(g),
            l = k.next();

        return l.done ? d([]) : new b(function (m, n) {
          function p(x) {
            return function (y) {
              r[x] = y;
              q--;
              0 == q && m(r);
            };
          }

          var r = [],
              q = 0;

          do {
            r.push(void 0), q++, d(l.value).fd(p(r.length - 1), n), l = k.next();
          } while (!l.done);
        });
      };

      return b;
    });
    var xf = this || self;
    xf.a = !0;
    clpp = {};
    _.h = _.zf.prototype;

    _.h.getBackgroundColor = function () {
      return this.K;
    };

    _.h.setBackgroundColor = function (a) {
      this.K = a;
      this.ib();
    };

    _.h.getWindowColor = function () {
      return this.Y;
    };

    _.h.setWindowColor = function (a) {
      this.Y = a;
      this.ib();
    };

    _.h.getFontFamily = function () {
      return this.V;
    };

    _.h.setFontFamily = function (a) {
      this.V = a;
      this.ib();
    };

    _.h.getFontColor = function () {
      return this.S;
    };

    _.h.setFontColor = function (a) {
      this.S = a;
      this.ib();
    };

    _.h.getFontSize = function () {
      return this.I;
    };

    _.h.setFontSize = function (a) {
      this.I = a;
      this.ib();
    };

    _.h.getFontSizePercent = function () {
      return null === this.D ? mp : this.D;
    };

    _.h.setFontSizePercent = function (a) {
      this.D = a;
      this.ib();
    };

    _.h.getEdgeColor = function () {
      return this.H;
    };

    _.h.setEdgeColor = function (a) {
      this.H = a;
      this.ib();
    };

    _.h.getEdgeType = function () {
      return this.B;
    };

    _.h.setEdgeType = function (a) {
      this.B = a;
      this.ib();
    };

    _.zf.prototype.setEdgeType = _.zf.prototype.setEdgeType;
    _.zf.prototype.getEdgeType = _.zf.prototype.getEdgeType;
    _.zf.prototype.setEdgeColor = _.zf.prototype.setEdgeColor;
    _.zf.prototype.getEdgeColor = _.zf.prototype.getEdgeColor;
    _.zf.prototype.setFontSizePercent = _.zf.prototype.setFontSizePercent;
    _.zf.prototype.getFontSizePercent = _.zf.prototype.getFontSizePercent;
    _.zf.prototype.setFontSize = _.zf.prototype.setFontSize;
    _.zf.prototype.getFontSize = _.zf.prototype.getFontSize;
    _.zf.prototype.setFontColor = _.zf.prototype.setFontColor;
    _.zf.prototype.getFontColor = _.zf.prototype.getFontColor;
    _.zf.prototype.setFontFamily = _.zf.prototype.setFontFamily;
    _.zf.prototype.getFontFamily = _.zf.prototype.getFontFamily;
    _.zf.prototype.setWindowColor = _.zf.prototype.setWindowColor;
    _.zf.prototype.getWindowColor = _.zf.prototype.getWindowColor;
    _.zf.prototype.setBackgroundColor = _.zf.prototype.setBackgroundColor;
    _.zf.prototype.getBackgroundColor = _.zf.prototype.getBackgroundColor;
    var mp = 1 / 15;
    _.B = {
      gg: 20,
      ua: function ua(a) {
        var b = _.B.R,
            c = _.B.xf,
            d = _.B.Qa;
        return b(a) || c(a) ? a : d(a);
      }
    };

    _.A("clpp.utils.obj.cloneItem", _.B.ua);

    _.B.Qa = function (a) {
      for (var b = {}, c = 0; c < arguments.length; c++) {
        null !== arguments[c] && void 0 !== arguments[c] && (b = _.B.Af(b, {
          merging: arguments[c]
        }));
      }

      return b.merging;
    };

    _.A("clpp.utils.obj.merge", _.B.Qa);

    _.B.Af = function (a, b, c) {
      var d = _.B.R,
          e = _.B.xf,
          f = _.B.Af,
          g = _.B.rb,
          k = _.B.oi,
          l = _.B.mi,
          m = _.B.Ac;
      c = c + 1 || 1;
      if (d(a) || !m(a)) a = {};

      for (var n in b) {
        b.hasOwnProperty(n) && (m = b[n], e(m) || d(m) || g(m) ? a[n] = m : k(m) ? a[n] = m.subarray(0) : m instanceof Array ? a[n] = f([], m) : !d(m) && l(m) && c < _.B.gg && (a[n] = f(a[n], m, c)));
      }

      return a;
    };

    _.B.xf = function (a) {
      a = _typeof(a);
      return a === _.ge || a === _.ud || a === _.ec;
    };

    _.B.R = function (a) {
      return null === a || void 0 === a;
    };

    _.B.Ac = function (a) {
      return _typeof(a) === _.vd;
    };

    _.B.rb = function (a) {
      return _typeof(a) === _.Tc;
    };

    _.B.W = function (a) {
      return _typeof(a) === _.ge;
    };

    _.B.ja = function (a) {
      return _typeof(a) === _.ud;
    };

    _.B.vf = function (a) {
      return _typeof(a) === _.ec;
    };

    _.B.oi = function (a) {
      var b = _.B.Ac,
          c = _.B.rb;
      return !!(b(a) && a.buffer && a.buffer instanceof ArrayBuffer && c(a.subarray));
    };

    _.B.mi = function (a) {
      var b = _.B.Ac,
          c = _.B.R;
      return !c(a) && b(a) && a.constructor === Object;
    };

    _.B.Ma = function (a, b, c, d) {
      if (a === b || null === a && null === b || void 0 === a && void 0 === b) return !0;
      if (null === a && null !== b || null !== a && null === b || void 0 !== a && void 0 === b || void 0 === a && void 0 !== b || !_.B.Ac(a) || !_.B.Ac(b)) return !1;

      for (var e = c || Object.keys(a), f = {}, g = 0; g < e.length; g++) {
        var k = e[g];
        if (_.B.R(d) || 0 > d.indexOf(k)) if (f[k] = !0, a[k] !== b[k]) return !1;
      }

      if (_.B.R(c)) for (a = Object.keys(b), b = 0; b < a.length; b++) {
        if (c = a[b], (_.B.R(d) || 0 > d.indexOf(c)) && !f[c]) return !1;
      }
      return !0;
    };

    _.B.isNaN = function (a) {
      return (Number.hasOwnProperty("isNaN") ? Number.isNaN : function (b) {
        return b !== b;
      })(a);
    };

    _.B.Oe = function (a) {
      for (var b = new Map(), c = _.t(Object.keys(a)), d = c.next(); !d.done; d = c.next()) {
        d = d.value, b.set(d, a[d]);
      }

      return b;
    };

    _.B.Pe = function (a) {
      var b = {};
      a.forEach(function (c, d) {
        b[d] = c;
      });
      return b;
    };

    var Kf = {
      DEFAULT: -1,
      NONE: 0,
      ERROR: 1,
      WARNING: 2,
      INFO: 3,
      DEBUG: 4
    };

    _.A("clpp.log.Level", Kf);

    var Gf = 3,
        Ff = {},
        np = [];

    _.A("clpp.log.getLoggers", function () {
      return _.B.ua(Ff);
    });

    _.A("clpp.log.addInterceptor", function (a) {
      a && np.push(a);
    });

    _.A("clpp.log.removeInterceptor", function (a) {
      a && (a = np.indexOf(a), 0 <= a && np.splice(a, 1));
    });

    _.A("clpp.log.getTagLevel", Jf);

    _.A("clpp.log.hasTagLevel", function (a) {
      return void 0 === a ? !1 : 0 <= Ff[a];
    });

    _.A("clpp.log.setTagLevel", function (a, b) {
      a && (_.B.W(b) && (b = Lf(b)), Ff[a] = b);
    });

    _.A("clpp.log.setLogLevel", function (a) {
      -1 === a && (a = 3);
      _.B.W(a) && (a = Lf(a));
      Gf = a;
    });

    _.A("clpp.log.getLogLevel", function () {
      return Gf;
    });

    _.h = _.F.prototype;

    _.h.log = function (a, b) {
      if (window.console) {
        if (1 < arguments.length) {
          var c = arguments[0];
          Array.prototype.shift.call(arguments);
        } else c = 3;

        var d = Jf(this.a);

        if (0 <= d) {
          if (d < c) return;
        } else if (Gf < c) return;

        this.a && Array.prototype.unshift.call(arguments, "[" + this.a + "]");
        d = new Date();
        d.toISOString && (d = d.toISOString().substring(11).replace("Z", ""), Array.prototype.unshift.call(arguments, d));
        4 === c ? console.log.apply(console, arguments) : 3 === c ? console.info.apply(console, arguments) : 2 === c ? console.warn.apply(console, arguments) : 1 === c ? console.error.apply(console, arguments) : console.log.apply(console, arguments);
        d = _.t(np);

        for (var e = d.next(); !e.done; e = d.next()) {
          e = e.value, e.call(e, c, arguments);
        }
      }
    };

    _.h.info = function (a) {
      Array.prototype.unshift.call(arguments, 3);
      this.log.apply(this, arguments);
    };

    _.h.debug = function (a) {
      Array.prototype.unshift.call(arguments, 4);
      this.log.apply(this, arguments);
    };

    _.h.warn = function (a) {
      Array.prototype.unshift.call(arguments, 2);
      this.log.apply(this, arguments);
    };

    _.h.error = function (a) {
      Array.prototype.unshift.call(arguments, 1);
      this.log.apply(this, arguments);
    };

    _.h.Qh = function (a) {
      return a ? this.a ? new _.F(this.a + "." + a) : new _.F(a) : this;
    };

    _.A("clpp.log.Logger", _.F);

    _.F.prototype.createChild = _.F.prototype.Qh;
    _.F.prototype.error = _.F.prototype.error;
    _.F.prototype.warn = _.F.prototype.warn;
    _.F.prototype.debug = _.F.prototype.debug;
    _.F.prototype.info = _.F.prototype.info;
    _.F.prototype.log = _.F.prototype.log;
    var Mf = new _.F("clpp");

    _.A("clpp.log.info", _.Nf);

    _.A("clpp.log.debug", _.H);

    _.A("clpp.log.warn", _.C);

    _.A("clpp.log.error", _.Of);

    _.A("clpp.utils.BufferUtils", Pf);

    Pf.toArrayBuffer = _.Yf;
    Pf.toDataView = _.Xf;
    Pf.toInt32Array = _.Wf;
    Pf.toUint32Array = Vf;
    Pf.toUint16Array = Uf;
    Pf.toUint8Array = _.J;
    Pf.equal = _.Sf;
    var ag = new _.F("clpp.utils.strings");

    _.A("clpp.utils.strings.fromUtf8", _.$f);

    _.A("clpp.utils.strings.fromBytesAutoDetect", _.cg);

    _.A("clpp.utils.strings.toUtf8", _.dg);

    _.A("clpp.utils.strings.toUtf16", eg);

    _.A("clpp.utils.strings.toByteArray", _.fg);

    _.A("clpp.utils.strings.startsWith", _.gg);

    _.A("clpp.utils.strings.endsWith", _.hg);

    _.A("clpp.utils.strings.bitrateToString", function (a) {
      if (void 0 === a || null === a || "" === a) return "";

      try {
        var b = Number(a);
        if (_.B.isNaN(b)) return "";
        a = "bps";
        1E3 <= Math.abs(b) && (a = "Kbps", b /= 1E3);
        1E3 <= Math.abs(b) && (a = "Mbps", b /= 1E3);
        return b.toFixed(2).replace(/[.,]00$/, "") + a;
      } catch (c) {
        return "";
      }
    });

    _.A("clpp.utils.strings.durationToString", function (a, b) {
      function c(k) {
        return function (l, m) {
          return d(k, m.length - 1);
        };
      }

      function d(k, l) {
        return k.length < l ? d("0" + k, l) : k;
      }

      b = void 0 === b ? "%h:%mm:%ss" : b;
      if (null === a || void 0 === a) a = 0;
      if (null === b || void 0 === b) b = "%h:%mm:%ss";
      var e = Math.floor(a / 3600),
          f = Math.floor((a - 3600 * e) / 60),
          g = Math.floor(a - 3600 * e - 60 * f);
      return b.replace(/(%h+)/, c(String(e))).replace(/(%m+)/, c(String(f))).replace(/(%s+)/, c(String(g)));
    });

    _.A("clpp.utils.strings.hashCode", function (a) {
      var b = 0;
      if (0 === a.length) return b;

      for (var c = 0; c < a.length; c++) {
        b = (b << 5) - b + a.charCodeAt(c), b |= 0;
      }

      return b;
    });

    var kg = document.createElement("span");

    _.A("clpp.utils.dom.createHTMLElement", _.pg);
    /*
    Copyright 2016 Google Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */


    _.u(_.rg, _.zf);

    _.h = _.rg.prototype;

    _.h.append = function () {};

    _.h.remove = function () {
      return !0;
    };

    _.h.isTextVisible = function () {
      return this.m;
    };

    _.h.setTextVisibility = function (a) {
      this.m = a;
    };

    _.h.ib = function () {
      if (!this.h) {
        var a = {
          "background-color": this.getBackgroundColor(),
          color: this.getFontColor(),
          "font-family": this.getFontFamily(),
          "font-size": this.getFontSize(),
          "text-shadow": _.Ef(this)
        },
            b = Object.keys(a).reduce(function (c, d) {
          return "" + c + d + ": " + a[d] + ";";
        }, "");
        this.g.textContent = "." + this.f + "::cue {" + b + "}";
      }
    };

    _.h.destroy = function () {
      this.j.classList.remove(this.f);
      document.head.removeChild(this.g);
      this.h = !0;
      return Promise.resolve();
    };

    var qg = 0;

    sg.prototype.$ = function () {};

    sg.prototype.create = function () {};

    _.A("clpp.text.TextDisplayerFactory", sg);

    sg.prototype.create = sg.prototype.create;
    sg.prototype.isSupported = sg.prototype.$;
    var tg = new Map(),
        ug = new _.F("clpp.text");
    sg.Type = {
      HTML: "html",
      NATIVE: _.sd,
      SINGLE_NATIVE: _.$d
    };

    xg.prototype.$ = function () {
      return !0;
    };

    xg.prototype.create = function (a) {
      return new _.rg(a);
    };

    xg.prototype.create = xg.prototype.create;
    xg.prototype.isSupported = xg.prototype.$;

    _.vg(_.sd, new xg());

    _.yg = [];

    _.A("clpp.text.Cue", _.Gg);

    _.Gg.positionAlign = {
      LEFT: _.bd,
      RIGHT: _.cd,
      CENTER: _.oc,
      AUTO: "auto"
    };
    _.Ag = _.oe;
    _.Gg.payloadType = {
      TEXT: _.Ag,
      VTT_XML: _.Le,
      TTML_XML: _.te
    };
    _.Bg = _.oc;
    _.op = {
      LEFT: _.Zc,
      RIGHT: _.Wd,
      CENTER: _.Bg,
      START: _.Zc,
      END: _.Wd
    };
    _.Gg.textAlign = _.op;
    var Fg = "ltr";
    _.Gg.direction = {
      HORIZONTAL_LEFT_TO_RIGHT: Fg,
      HORIZONTAL_RIGHT_TO_LEFT: "rtl"
    };
    _.Cg = "horizontal-tb";
    _.Gg.writingMode = {
      HORIZONTAL_TOP_TO_BOTTOM: _.Cg,
      VERTICAL_LEFT_TO_RIGHT: _.Ce,
      VERTICAL_RIGHT_TO_LEFT: _.De
    };
    _.Dg = 0;
    _.Gg.lineInterpretation = {
      LINE_NUMBER: _.Dg,
      PERCENTAGE: 1
    };
    _.Eg = _.ce;
    _.pp = {
      CENTER: _.oc,
      START: _.Eg,
      END: _.Pc
    };
    _.Gg.lineAlign = _.pp;

    _.A("clpp.text.CueRegion", _.Mg);

    _.Hg = 1;
    _.Mg.units = {
      PX: 0,
      PERCENTAGE: _.Hg,
      LINES: 2
    };
    var Ig = "";
    _.Mg.scrollMode = {
      NONE: Ig,
      UP: "up"
    };
    _.Mg.displayAlign = {
      BEFORE: "flex-end",
      CENTER: _.oc,
      AFTER: "flex-start"
    };
    _.Mg.writingMode = {
      HORIZONTAL_TOP_TO_BOTTOM: _.yc,
      VERTICAL_LEFT_TO_RIGHT: "row-reverse",
      VERTICAL_RIGHT_TO_LEFT: "row"
    };
    _.qp = new Map().set(_.xc, _.xc).set("frameRate", "framerate").set("bandwidth", "bitrate").set(_.Te, _.Te).set(_.Uc, _.Uc).set("channelsCount", "channels");

    _.u(_.K, Error);

    _.K.prototype.f = function (a) {
      this.a !== a && (this.a = a, this.message = Pg(this.a, this.h, this.code, this.data));
    };

    _.K.prototype.toString = function () {
      var a = this.message;
      this.g && (a += "\n Caused by " + this.g);
      return a;
    };

    _.A("clpp.Error", _.K);

    _.L = 2;
    _.K.Severity = {
      RECOVERABLE: 1,
      FATAL: _.L
    };
    _.K.Category = {
      NETWORK: 1,
      TEXT: 2,
      MEDIA: 3,
      MANIFEST: 4,
      STREAMING: 5,
      DRM: 6,
      PLAYER: 7,
      CAST: 8,
      PLUGIN: 9,
      ADS: 10
    };
    _.K.Code = {
      UNSUPPORTED_SCHEME: 1E3,
      BAD_HTTP_STATUS: 1001,
      HTTP_ERROR: 1002,
      TIMEOUT: 1003,
      MALFORMED_DATA_URI: 1004,
      UNKNOWN_DATA_URI_ENCODING: 1005,
      REQUEST_MODIFIER_ERROR: 1006,
      RESPONSE_MODIFIER_ERROR: 1007,
      MALFORMED_TEST_URI: 1008,
      UNEXPECTED_TEST_REQUEST: 1009,
      ATTEMPTS_EXHAUSTED: 1010,
      INVALID_TEXT_HEADER: 2E3,
      INVALID_TEXT_CUE: 2001,
      UNABLE_TO_DETECT_ENCODING: 2003,
      BAD_ENCODING: 2004,
      INVALID_XML: 2005,
      INVALID_MP4_TTML: 2007,
      INVALID_MP4_VTT: 2008,
      UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
      FETCH_OR_APPEND_ERROR: 2010,
      INVALID_MP4: 2011,
      TEXT_PARSER_MISSING: 2012,
      BUFFER_READ_OUT_OF_BOUNDS: 3E3,
      JS_INTEGER_OVERFLOW: 3001,
      EBML_OVERFLOW: 3002,
      EBML_BAD_FLOATING_POINT_SIZE: 3003,
      MP4_SIDX_WRONG_BOX_TYPE: 3004,
      MP4_SIDX_INVALID_TIMESCALE: 3005,
      MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
      WEBM_CUES_ELEMENT_MISSING: 3007,
      WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
      WEBM_SEGMENT_ELEMENT_MISSING: 3009,
      WEBM_INFO_ELEMENT_MISSING: 3010,
      WEBM_DURATION_ELEMENT_MISSING: 3011,
      WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
      WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
      MEDIA_SOURCE_OPERATION_FAILED: 3014,
      MEDIA_SOURCE_OPERATION_THREW: 3015,
      VIDEO_ERROR: 3016,
      QUOTA_EXCEEDED_ERROR: 3017,
      TRANSMUXING_FAILED: 3018,
      MP4_PARSER_ERROR: 3019,
      MEDIA_LOAD_ERROR: 3100,
      INVALID_TRACK_TYPE: 3101,
      UNKNOWN_TRACK: 3102,
      MEDIA_DECRYPTION_ERROR: 3103,
      PLAY_NOT_ALLOWED: 3200,
      UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
      DASH_INVALID_XML: 4001,
      DASH_NO_SEGMENT_INFO: 4002,
      DASH_EMPTY_ADAPTATION_SET: 4003,
      DASH_EMPTY_PERIOD: 4004,
      DASH_WEBM_MISSING_INIT: 4005,
      DASH_UNSUPPORTED_CONTAINER: 4006,
      DASH_PSSH_BAD_ENCODING: 4007,
      DASH_NO_COMMON_KEY_SYSTEM: 4008,
      DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
      DASH_CONFLICTING_KEY_IDS: 4010,
      UNPLAYABLE_PERIOD: 4011,
      RESTRICTIONS_CANNOT_BE_MET: 4012,
      NO_PERIODS: 4014,
      HLS_PLAYLIST_HEADER_MISSING: 4015,
      INVALID_HLS_TAG: 4016,
      HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
      DASH_DUPLICATE_REPRESENTATION_ID: 4018,
      HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
      HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
      HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
      HLS_REQUIRED_TAG_MISSING: 4024,
      HLS_COULD_NOT_GUESS_CODECS: 4025,
      HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
      DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
      DASH_XLINK_DEPTH_LIMIT: 4028,
      HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
      CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
      SMOOTH_INVALID_MANIFEST_XML: 4033,
      SMOOTH_EMPTY_PRESENTATION: 4034,
      SMOOTH_MEDIA_PROCESSING_ERROR: 4035,
      SMOOTH_INVALID_VERSION: 4036,
      SMOOTH_INVALID_FRAGMENT_METADATA: 4037,
      SMOOTH_REQUIRED_ATTRIBUTE_MISSING: 4038,
      SMOOTH_TRUNCATED_MEDIA_FILE: 4039,
      CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4040,
      INVALID_STREAMS_CHOSEN: 5005,
      NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
      REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
      FAILED_TO_CREATE_CDM: 6002,
      FAILED_TO_ATTACH_TO_VIDEO: 6003,
      INVALID_SERVER_CERTIFICATE: 6004,
      FAILED_TO_CREATE_SESSION: 6005,
      FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
      LICENSE_REQUEST_FAILED: 6007,
      LICENSE_RESPONSE_REJECTED: 6008,
      ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
      NO_LICENSE_SERVER_GIVEN: 6012,
      OFFLINE_SESSION_REMOVED: 6013,
      EXPIRED: 6014,
      REQUESTED_DRM_ENVIRONMENT_UNAVAILABLE: 6015,
      INIT_DATA_TRANSFORM_ERROR: 6016,
      CERTIFICATE_REQUEST_FAILED: 6100,
      NO_CONTENT_ID: 6101,
      SERVER_CERTIFICATE_REQUIRED: 6102,
      EXTRACT_CONTENT_ID_MODIFIER_ERROR: 6103,
      FAILED_TO_PERSIST_SESSION: 6200,
      FAILED_TO_REMOVE_SESSION: 6201,
      INVALID_SESSION_STORAGE_IMPLEMENTATION: 6202,
      LOAD_INTERRUPTED: 7E3,
      OPERATION_ABORTED: 7001,
      NO_VIDEO_ELEMENT: 7002,
      CANNOT_LOAD_SOURCE: 7003,
      INVALID_CONFIGURATION: 7100,
      INVALID_LICENSE: 7101,
      NO_ELEMENT: 7102,
      USER_ID_NOT_PROVIDED: 7103,
      KEY_LOAD_ERROR: 7104,
      TIZEN_INTERNAL_ERROR: 7200,
      CAF_INTERNAL_ERROR: 7300,
      INTERNAL_CAST_ERROR: 8E3,
      CAST_API_NOT_READY: 8001,
      NO_RECEIVERS_AVAILABLE: 8002,
      ALREADY_CASTING: 8003,
      NO_CAST_SESSION: 8004,
      CONVIVA_SDK_NOT_LOADED: 9E3,
      CONVIVA_INVALID_CONFIGURATION: 9001,
      CONVIVA_RUNTIME_ERROR: 9002,
      YOUBORA_SDK_MISSING: 9100,
      YOUBORA_INVALID_CONFIGURATION: 9101,
      VIMOND_INVALID_CONFIGURATION: 9200,
      VIMOND_SESSION_ERROR: 9201,
      MUXDATA_INVALID_CONFIGURATION: 9300,
      MUX_SDK_MISSING: 9301,
      MUXDATA_INIT_ERROR: 9302,
      IMA_SDK_MISSING: 1E4,
      IMA_INVALID_CONFIGURATION: 10001,
      IMA_UNSUPPORTED_PLATFORM: 10002,
      AD_ERROR: 10003,
      BROADPEAK_SDK_MISSING: 11E3,
      BROADPEAK_SESSION_ERROR: 11001,
      FREEWHEEL_SDK_MISSING: 12E3,
      FREEWHEEL_INVALID_CONFIGURATION: 12001,
      CONTENT_TRANSFORMATION_FAILED: 14E3
    };
    _.Qg = {};
    var Af, Bf, Df, Cf;
    _.yf = _.td;
    Af = "raised";
    Bf = "depressed";
    Df = "dropshadow";
    Cf = "uniform";

    _.A("clpp.text.EdgeType", {
      NONE: _.yf,
      RAISED: Af,
      DEPRESSED: Bf,
      DROP_SHADOW: Df,
      UNIFORM: Cf
    });

    Tg.prototype.parseInit = function (a) {
      try {
        var b = _.Qg[_.Tb] || null;

        if (b) {
          var c = new b(this.g);
          c.parseInit(a);
        } else this.f.warn("The clpp.ttml.Mp4TtmlParser class is not available. Please register the ttml component first.");
      } catch (e) {
        c = null;
      }

      if (c) this.a = c;else {
        try {
          var d = _.Qg[_.Ub] || null;
          d ? (c = new d(this.g), c.parseInit(a)) : this.f.warn("The clpp.vtt.Mp4VttParser class is not available. Please register the vtt component first.");
        } catch (e) {
          c = null;
        }

        if (c) this.a = c;else throw new _.K(_.L, 2, 2011);
      }
    };

    Tg.prototype.parseMedia = function (a, b) {
      if (!this.a) throw new _.K(_.L, 2, 2011);
      return this.a.parseMedia(a, b);
    };

    _.Qg[_.Sb] = Tg;
    _.Xg = new _.F("clpp.players");
    _.Wg = {};

    _.Zg.prototype.push = function (a, b) {
      this.a.hasOwnProperty(a) ? this.a[a].push(b) : this.a[a] = [b];
    };

    _.Zg.prototype.get = function (a) {
      return (a = this.a[a]) ? a.slice() : [];
    };

    _.Zg.prototype.remove = function (a, b) {
      var c = this.a[a];
      if (!c) return !1;

      for (var d = !1, e = 0; e < c.length; ++e) {
        c[e] == b && (c.splice(e, 1), --e, d = !0);
      }

      return d;
    };

    _.Zg.prototype.clear = function () {
      this.a = {};
    };

    $g.prototype.Mb = function (a) {
      try {
        this.rc.handleEvent ? this.rc.handleEvent(a) : this.rc.call(this.a, a);
      } catch (b) {
        _.Of("clpp", "Uncaught exception in event handler for event '" + this.f + "'", b, b ? b.message : null, b ? b.stack : null);
      }
    };

    _.M.prototype.preventDefault = function () {
      this.cancelable && (this.defaultPrevented = !0);
    };

    _.M.prototype.stopImmediatePropagation = function () {
      this.f = !0;
    };

    _.M.prototype.stopPropagation = function () {};

    _.h = ah.prototype;

    _.h.trigger = function (a) {
      var b = this.a.get(a.type);
      if (b) for (var c = 0; c < b.length && (a.target = this.f, a.currentTarget = this.f, b[c].Mb(a), b[c].uj && this.a.remove(a.type, b[c]), !a || !a.f); c++) {
        ;
      }
    };

    _.h.on = function (a, b, c) {
      this.a.push(a, new $g(a, b, c || this.f));
      return b;
    };

    _.h.one = function (a, b, c) {
      this.a.push(a, new $g(a, b, c || this.f, !0));
      return b;
    };

    _.h.off = function (a, b) {
      var c = this.a.get(a),
          d = !1;
      if (c) for (var e = 0; e < c.length; e++) {
        c[e].rc === b && (d = this.a.remove(a, c[e]) || d);
      }
      return d;
    };

    _.h.clear = function () {
      this.a.clear();
    };

    _.A("clpp.EventBus", ah);

    ah.prototype.clear = ah.prototype.clear;
    ah.prototype.off = ah.prototype.off;
    ah.prototype.one = ah.prototype.one;
    ah.prototype.on = ah.prototype.on;
    ah.prototype.trigger = ah.prototype.trigger;

    _.bh.prototype.release = function () {
      _.eh(this);
    };

    _.bh.prototype.on = function (a, b, c, d) {
      a = new fh(a, b, c, void 0 === d ? !1 : d);
      this.a.push(b, a);
    };

    _.bh.prototype.one = function (a, b, c) {
      function d(f) {
        e.off(a, b, d);
        return c(f);
      }

      var e = this;
      this.on(a, b, d);
    };

    _.bh.prototype.off = function (a, b, c) {
      for (var d = this.a.get(b) || [], e = 0; e < d.length; ++e) {
        var f = d[e];
        f.target != a || c != f.listener && c || (dh(f), this.a.remove(b, f));
      }
    };

    gh.prototype.release = function () {
      this.f.release();
      this.g = [];
      this.a = null;
    };

    gh.prototype.destroy = function () {
      var a = this;
      return _.z(function (b) {
        a.release();
        a.j = null;
        a.h = null;

        _.w(b);
      });
    };

    gh.prototype.getTimelineCues = function () {
      return this.g;
    };

    var th;

    _.qh.prototype.toString = function () {
      return "Track type: " + this.type + " id: " + this.id + "\n        renditions size: " + this.renditions.length;
    };

    _.A("clpp.Track", _.qh);

    _.qh.prototype.toString = _.qh.prototype.toString;

    _.A("clpp.Rendition", _.xh);

    _.vh = 1;
    _.sh = _.Ee;
    _.Q = _.Xb;
    _.O = _.oe;
    th = _.jd;
    _.rp = {
      VIDEO: _.sh,
      AUDIO: _.Q,
      TEXT: _.O,
      Vj: th
    };
    _.qh.Type = _.rp;
    _.h = _.R.prototype;

    _.h.$h = function (a) {
      return this.getVideoTracks().find(function (b) {
        return _.B.Ma(b, a, a && Object.keys(a));
      });
    };

    _.h.Wh = function (a) {
      return this.getAudioTracks().find(function (b) {
        return _.B.Ma(b, a, a && Object.keys(a));
      });
    };

    _.h.Yh = function (a) {
      return this.da().find(function (b) {
        return _.B.Ma(b, a, a && Object.keys(a));
      });
    };

    _.h.Zh = function (a) {
      return this.getVideoTracks().flatMap(function (b) {
        return b.renditions;
      }).find(function (b) {
        return _.B.Ma(b, a, a && Object.keys(a));
      });
    };

    _.h.Vh = function (a) {
      return this.getAudioTracks().flatMap(function (b) {
        return b.renditions;
      }).find(function (b) {
        return _.B.Ma(b, a, a && Object.keys(a));
      });
    };

    _.h.Xh = function (a) {
      return this.da().flatMap(function (b) {
        return b.renditions;
      }).find(function (b) {
        return _.B.Ma(b, a, a && Object.keys(a));
      });
    };

    _.A("clpp.TrackManager", _.R);

    _.R.prototype.isAbrEnabled = _.R.prototype.na;
    _.R.prototype.addTextTrack = _.R.prototype.addTextTrack;
    _.R.prototype.findTextRendition = _.R.prototype.Xh;
    _.R.prototype.findAudioRendition = _.R.prototype.Vh;
    _.R.prototype.findVideoRendition = _.R.prototype.Zh;
    _.R.prototype.findTextTrack = _.R.prototype.Yh;
    _.R.prototype.findAudioTrack = _.R.prototype.Wh;
    _.R.prototype.findVideoTrack = _.R.prototype.$h;
    _.R.prototype.setTextRendition = _.R.prototype.gb;
    _.R.prototype.setAudioRendition = _.R.prototype.eb;
    _.R.prototype.setVideoRendition = _.R.prototype.Sa;
    _.R.prototype.setTextTrack = _.R.prototype.sa;
    _.R.prototype.setAudioTrack = _.R.prototype.ka;
    _.R.prototype.setVideoTrack = _.R.prototype.Ta;
    _.R.prototype.getTextTrack = _.R.prototype.ha;
    _.R.prototype.getAudioTrack = _.R.prototype.ga;
    _.R.prototype.getVideoTrack = _.R.prototype.za;
    _.R.prototype.getLoadingTextRendition = _.R.prototype.Xa;
    _.R.prototype.getLoadingAudioRendition = _.R.prototype.Wa;
    _.R.prototype.getLoadingVideoRendition = _.R.prototype.Na;
    _.R.prototype.getTextRendition = _.R.prototype.ya;
    _.R.prototype.getAudioRendition = _.R.prototype.wa;
    _.R.prototype.getVideoRendition = _.R.prototype.ea;
    _.R.prototype.getTextTracks = _.R.prototype.da;
    _.R.prototype.getAudioTracks = _.R.prototype.getAudioTracks;
    _.R.prototype.getVideoTracks = _.R.prototype.getVideoTracks;

    _.yh.prototype.X = function (a) {
      return zh(this, a, !1);
    };

    _.yh.prototype.Va = function (a) {
      return zh(this, a, !0);
    };

    _.yh.prototype.stop = function () {
      this.a && (this.a(), this.a = null);
    };

    _.Ah.prototype.He = function () {
      this.stop();
      this.f();
      return this;
    };

    _.Ah.prototype.X = function (a) {
      var b = this;
      this.stop();
      this.a = new _.yh(function () {
        b.f();
      }).X(a);
      return this;
    };

    _.Ah.prototype.Va = function (a) {
      var b = this;
      this.stop();
      this.a = new _.yh(function () {
        b.f();
      }).Va(a);
      return this;
    };

    _.Ah.prototype.stop = function () {
      this.a && (this.a.stop(), this.a = null);
    };

    _.A("clpp.utils.Timer", _.Ah);

    _.Ah.prototype.stop = _.Ah.prototype.stop;
    _.Ah.prototype.tickEvery = _.Ah.prototype.Va;
    _.Ah.prototype.tickAfter = _.Ah.prototype.X;
    _.Ah.prototype.tickNow = _.Ah.prototype.He;

    _.u(Ch, _.R);

    _.h = Ch.prototype;

    _.h.we = function (a, b) {
      if (b) {
        var c = b.track;

        if (c) {
          var d = this.h.find(function (g) {
            return Eh(g, c, a);
          });
          if (d) this.a.warn("Track from event already exists", c, d);else {
            var e = wh(a, c);

            if (a === _.O) {
              if (c.kind === _.jd) return;
              var f;
              void 0 !== c.id ? f = this.m[c.id] : f = Object.values(this.m).find(function (g) {
                return Eh(e, g, a);
              });
              e.kind && "captions" === e.kind && (e.mimeType = _.Rb);
              f && (e.src = f.url, e.mimeType = f.mimeType);
            } else if (d = this.h.find(function (g) {
              return g.type === a && _.B.Ma(g, e, ["kind", "label", "language"]);
            })) {
              d.id = c.id;
              Qh(c) && this.f.set(a, d);
              this.a.debug("Track from event seems to already exists, flipped native track to", c);
              return;
            }

            try {
              e.renditions.push(new _.xh(e.id, e)), this.h.push(e), this.a.debug(a + " Track added", e), this.l.trigger(new _.M(_.sp)), Qh(c) && this.f.set(a, e);
            } catch (g) {
              this.a.error("Error while converting track data", g);
            }
          }
        } else this.a.warn(Ya);
      } else this.a.warn(Xa);
    };

    _.h.ye = function (a, b) {
      if (b) {
        var c = b.track;
        if (!c) this.a.warn(Ya);else if (a === _.O && c.kind !== _.jd) {
          var d = this.h.find(function (e) {
            return Eh(e, c, a);
          });
          d && (this.h.splice(this.h.indexOf(d), 1), (this.f.get(a) || null) === d && (this.f.set(a, null), Dh(this)), this.a.debug(a + " Track removed, id: ", d.id));
        }
      } else this.a.warn(Xa);
    };

    _.h.xe = function (a, b) {
      this.a.debug(a + " Track changed", b);
      a === _.O && Dh(this);
      var c = Jh(this, a);
      if (c) for (var d = {
        kc: 0
      }; d.kc < c.length; d = {
        kc: d.kc
      }, ++d.kc) {
        if (Qh(c[d.kc])) {
          if (d = this.h.find(function (e) {
            return function (f) {
              return Eh(f, c[e.kc], a);
            };
          }(d))) this.f.set(a, d), this.a.debug("Track change detected, id:", d.id), d === this.j.get(a) && this.j.set(a, null), a === _.Q ? this.l.trigger(new _.M(_.Nh)) : a === _.O && this.l.trigger(new _.M(_.Oh));
          break;
        }
      }
    };

    _.h.Cb = function (a) {
      this.l = a;
    };

    _.h.load = function () {
      this.o = !1;
      var a = Ih(this, _.O);
      a && (this.g.on(a, _.Jb, this.H), this.g.on(a, Td, this.J), this.g.on(a, pc, this.I));
      if (a = Ih(this, _.Q)) this.g.on(a, _.Jb, this.B), this.g.on(a, Td, this.D), this.g.on(a, pc, this.C);
      if (a = Ih(this, _.sh)) this.g.on(a, _.Jb, this.K), this.g.on(a, Td, this.P), this.g.on(a, pc, this.M);
      this.g.one(this.l, jc, this.th.bind(this));
    };

    _.h.release = function () {
      this.o = !0;
      this.h = [];
      this.m = {};
      this.f.clear();
      this.j.clear();
      this.g.release();
    };

    _.h.destroy = function () {
      this.release();
      this.l = null;
    };

    _.h.getVideoTracks = function () {
      return Kh(this, _.sh);
    };

    _.h.getAudioTracks = function () {
      return Kh(this, _.Q);
    };

    _.h.da = function () {
      return Kh(this, _.O);
    };

    _.h.ea = function () {
      return Lh(this, _.sh);
    };

    _.h.wa = function () {
      return Lh(this, _.Q);
    };

    _.h.ya = function () {
      return Lh(this, _.O);
    };

    _.h.Na = function () {
      return Mh(this, _.sh);
    };

    _.h.Wa = function () {
      return Mh(this, _.Q);
    };

    _.h.Xa = function () {
      return Mh(this, _.O);
    };

    _.h.za = function () {
      return this.f.get(_.sh) || null;
    };

    _.h.ga = function () {
      return this.f.get(_.Q) || null;
    };

    _.h.ha = function () {
      return this.f.get(_.O) || null;
    };

    _.h.Ta = function (a) {
      Ph(this, _.sh, a);
    };

    _.h.ka = function (a) {
      Ph(this, _.Q, a);
    };

    _.h.sa = function (a) {
      Ph(this, _.O, a);
    };

    _.h.Sa = function (a) {
      Ph(this, _.sh, a && a.track);
    };

    _.h.eb = function (a) {
      Ph(this, _.Q, a && a.track);
    };

    _.h.gb = function (a) {
      Ph(this, _.O, a && a.track);
    };

    _.h.addTextTrack = function (a) {
      var b = this,
          c;
      return _.z(function (d) {
        return a.mimeType.match(/text\/vtt/) ? (c = "External_" + b.w++, b.m[c] = a, Gh(b, a, c), d.G(0)) : _.v(d, Hh(b, a), 0);
      });
    };

    _.h.th = function () {
      var a = this,
          b,
          c,
          d;
      return _.z(function (e) {
        if (1 == e.a) {
          b = a.l.getConfiguration();
          Rh(a, _.Q, b.preferredAudioLanguage);
          c = Jh(a, _.O);
          if (c.some(function (f) {
            return Qh(f);
          })) return e.G(2);
          d = Ih(a, _.O);
          return _.v(e, new Promise(function (f) {
            a.g.one(d, pc, f);
            new _.Ah(f).X(1);
          }), 2);
        }

        if (a.o) return e["return"]();
        Rh(a, _.O, b.preferredTextLanguage);

        _.w(e);
      });
    };

    _.h.na = function () {
      return 1 >= this.getVideoTracks().flatMap(function (a) {
        return a.renditions;
      }).length;
    };

    Ch.prototype.isAbrEnabled = Ch.prototype.na;
    Ch.prototype.addTextTrack = Ch.prototype.addTextTrack;
    Ch.prototype.setTextRendition = Ch.prototype.gb;
    Ch.prototype.setAudioRendition = Ch.prototype.eb;
    Ch.prototype.setVideoRendition = Ch.prototype.Sa;
    Ch.prototype.setTextTrack = Ch.prototype.sa;
    Ch.prototype.setAudioTrack = Ch.prototype.ka;
    Ch.prototype.setVideoTrack = Ch.prototype.Ta;
    Ch.prototype.getTextTrack = Ch.prototype.ha;
    Ch.prototype.getAudioTrack = Ch.prototype.ga;
    Ch.prototype.getVideoTrack = Ch.prototype.za;
    Ch.prototype.getLoadingTextRendition = Ch.prototype.Xa;
    Ch.prototype.getLoadingAudioRendition = Ch.prototype.Wa;
    Ch.prototype.getLoadingVideoRendition = Ch.prototype.Na;
    Ch.prototype.getTextRendition = Ch.prototype.ya;
    Ch.prototype.getAudioRendition = Ch.prototype.wa;
    Ch.prototype.getVideoRendition = Ch.prototype.ea;
    Ch.prototype.getTextTracks = Ch.prototype.da;
    Ch.prototype.getAudioTracks = Ch.prototype.getAudioTracks;
    Ch.prototype.getVideoTracks = Ch.prototype.getVideoTracks;

    Sh.prototype.destroy = function () {
      this.a.release();
      this.h = !1;
      this.j = this.a = this.g = this.f = null;
      return Promise.resolve();
    };

    Sh.prototype.start = function (a) {
      var b = this;
      this.h ? this.m.warn("Already started. Ignoring request...") : (this.h = !0, this.g = a, this.f = this.g.textTracks, this.a.on(this.f, _.Jb, function (c) {
        return Th(b, c);
      }), this.a.on(this.f, pc, function () {
        for (var c = b.f, d = 0; d < c.length; d++) {
          var e = c[d];
          e.mode === _.Zd && (e.mode = _.Vc);
        }
      }));
    };

    Sh.prototype.o = function (a) {
      var b = new _.Gg(a.startTime, a.endTime, a.text, _.Le);
      if (_.B.W(a.vertical)) switch (a.vertical) {
        case "lr":
          b.writingMode = _.Ce;
          break;

        case "rl":
          b.writingMode = _.De;
      }
      _.B.ja(a.size) && (b.size = a.size);
      if (_.B.W(a.align)) switch (a.align) {
        case _.Zc:
        case _.ce:
          b.textAlign = _.Zc;
          break;

        case _.oc:
          b.textAlign = _.Bg;
          break;

        case _.Wd:
        case _.Pc:
          b.textAlign = _.Wd;
      }
      _.B.ja(a.position) && (b.position = a.position);
      if (_.B.W(a.positionAlign)) switch (a.positionAlign) {
        case _.bd:
          b.positionAlign = _.bd;
          break;

        case _.oc:
          b.positionAlign = _.oc;
          break;

        case _.cd:
          b.positionAlign = _.cd;
      }
      _.B.ja(a.line) && (b.line = a.line);
      if (_.B.W(a.lineAlign)) switch (a.lineAlign) {
        case _.ce:
          b.lineAlign = _.Eg;
          break;

        case _.oc:
          b.lineAlign = _.oc;
          break;

        case _.Pc:
          b.lineAlign = _.Pc;
      }
      _.B.vf(a.snapToLines) && (b.lineInterpretation = a.snapToLines ? _.Dg : 1);
      return b;
    };

    _.h = _.Uh.prototype;

    _.h.start = function (a) {
      if (this.f) return this.f.start(a);
      if (a < this.a.length) return this.a[a].start;
      throw Error(lb);
    };

    _.h.end = function (a) {
      if (this.f) return this.f.end(a);
      if (a < this.a.length) return this.a[a].end;
      throw Error(lb);
    };

    _.h.jb = function () {
      return !this.length || 1 === this.length && 1E-6 > this.end(0) - this.start(0) ? null : 1 === this.length && 0 > this.start(0) ? 0 : this.start(0);
    };

    _.h.pa = function () {
      return !this.length || 1 === this.length && 1E-6 > this.end(0) - this.start(0) ? null : this.end(this.length - 1);
    };

    _.h.Wb = function (a, b, c) {
      b = void 0 === b ? !0 : b;
      c = void 0 === c ? 0 : c;
      if (!this.length || 1 === this.length && 1E-6 > this.end(0) - this.start(0) || a > this.end(this.length - 1)) return !1;
      if (b) return c + a >= this.start(0) && a <= this.end(this.length - 1);

      for (b = 0; b < this.length; b++) {
        if (c + a >= this.start(b) && a <= this.end(b)) return !0;
      }

      return !1;
    };

    _.h.ta = function (a, b) {
      b = void 0 === b ? !1 : b;
      if (!this.length || 1 === this.length && 1E-6 > this.end(0) - this.start(0)) return 0;
      var c = 0;

      if (b) {
        var d = this.pa();
        null != d && (c = Math.max(0, d - a));
      } else for (d = this.length - 1; 0 <= d && this.end(d) > a; --d) {
        c += this.end(d) - Math.max(this.start(d), a);
      }

      return c;
    };

    _.A("clpp.BufferInfo", _.Uh);

    _.Uh.prototype.bufferedAheadOf = _.Uh.prototype.ta;
    _.Uh.prototype.isBuffered = _.Uh.prototype.Wb;
    _.Uh.prototype.bufferEnd = _.Uh.prototype.pa;
    _.Uh.prototype.bufferStart = _.Uh.prototype.jb;
    _.Uh.prototype.end = _.Uh.prototype.end;
    _.Uh.prototype.start = _.Uh.prototype.start;
    _.h = _.Vh.prototype;

    _.h.trigger = function (a) {
      this.Oc.trigger(a);

      for (var b = _.t(this.Nc), c = b.next(); !c.done; c = b.next()) {
        c.value.dispatchEvent(a);
      }
    };

    _.h.addEventListener = function (a, b) {
      this.on(a, b);
    };

    _.h.removeEventListener = function (a, b) {
      this.off(a, b);
    };

    _.h.dispatchEvent = function (a) {
      this.trigger(a);
      return a.defaultPrevented;
    };

    _.h.on = function (a, b, c) {
      return this.Oc.on(a, b, c);
    };

    _.h.one = function (a, b, c) {
      return this.Oc.one(a, b, c);
    };

    _.h.off = function (a, b) {
      return this.Oc.off(a, b);
    };

    _.h.addDelegate = function (a) {
      a && (0 <= this.Nc.indexOf(a) || this.Nc.push(a));
    };

    _.h.removeDelegate = function (a) {
      a && (a = this.Nc.indexOf(a), 0 <= a && this.Nc.splice(a, 1));
    };

    _.Vh.prototype.off = _.Vh.prototype.off;
    _.Vh.prototype.one = _.Vh.prototype.one;
    _.Vh.prototype.on = _.Vh.prototype.on;
    _.Vh.prototype.removeEventListener = _.Vh.prototype.removeEventListener;
    _.Vh.prototype.addEventListener = _.Vh.prototype.addEventListener;

    _.A("clpp.events.ERROR", _.Rc);

    _.A("clpp.events.LOADEDMETADATA", _.ed);

    _.A("clpp.events.BUFFERING_ENDED", _.gc);

    _.A("clpp.events.BUFFERING_STARTED", _.hc);

    _.A("clpp.events.STATE_CHANGED", _.de);

    _.Nh = "audiotrackchanged";

    _.A("clpp.events.AUDIO_TRACK_CHANGED", _.Nh);

    _.Oh = "texttrackchanged";

    _.A("clpp.events.TEXT_TRACK_CHANGED", _.Oh);

    _.A("clpp.events.VIDEO_TRACK_CHANGED", _.Ie);

    _.A("clpp.events.BITRATE_CHANGED", _.dc);

    _.sp = "tracksadded";

    _.A("clpp.events.TRACKS_ADDED", _.sp);

    _.A("clpp.events.LOAD_START", fd);

    _.A("clpp.events.RELEASING", _.Sd);

    _.A("clpp.events.RELEASED", Rd);

    _.A("clpp.events.DESTROYING", "destroying");

    _.A("clpp.events.DESTROYED", "destroyed");

    _.A("clpp.events.VIDEO_BUFFER_CHANGED", _.He);

    _.A("clpp.events.AUDIO_BUFFER_CHANGED", _.bc);

    _.A("clpp.events.DOWNLOAD_TRACE", "downloadtrace");

    _.A("clpp.events.DRM_SESSION_UPDATE", _.Kc);

    _.A("clpp.events.DRM_SESSION_PERSISTED", _.Jc);

    _.A("clpp.events.DRM_RENEWAL_STARTED", Ic);

    _.A("clpp.events.DRM_EXPIRATION_UPDATE", _.Hc);

    _.A("clpp.events.AUTOPLAY_NOT_ALLOWED", _.cc);

    _.A("clpp.events.PLAY", _.Kd);

    _.A("clpp.events.SEEKING", _.Yd);

    _.A("clpp.events.SEEKED", _.Xd);

    _.A("clpp.events.USER_SEEKING", _.Ae);

    _.A("clpp.events.USER_SEEKED", _.ze);

    _.Jo = {
      SEEKING: 1,
      NO_DATA: 2
    };

    _.A("clpp.events.BufferingReasons", _.Jo);

    _.A("clpp.events.ADS_TIMELINE_CHANGED", _.Kb);

    _.A("clpp.events.AD_LOADED", _.Ab);

    _.A("clpp.events.AD_BREAK_STARTED", _.sb);

    _.A("clpp.events.AD_STARTED", _.Gb);

    _.A("clpp.events.AD_BUFFERING", _.ub);

    _.A("clpp.events.AD_PROGRESS", _.Db);

    _.A("clpp.events.AD_FIRST_QUARTILE", _.xb);

    _.A("clpp.events.AD_MIDPOINT", _.Bb);

    _.A("clpp.events.AD_THIRD_QUARTILE", _.Ib);

    _.A("clpp.events.AD_PAUSED", _.Cb);

    _.A("clpp.events.AD_RESUMED", _.Eb);

    _.A("clpp.events.AD_SKIPPED", _.Fb);

    _.A("clpp.events.AD_CLICKED", _.vb);

    _.A("clpp.events.AD_IMPRESSION", _.yb);

    _.A("clpp.events.AD_COMPLETED", _.wb);

    _.A("clpp.events.AD_STOPPED", _.Hb);

    _.A("clpp.events.AD_BREAK_STOPPED", _.tb);

    _.A("clpp.events.CASTING_STARTED", _.kc);

    _.A("clpp.events.CASTING_ENDED", "castingended");

    _.A("clpp.events.CAST_STATUS_CHANGED", _.lc);

    _.A("clpp.events.AIRPLAY_STATUS_CHANGED", _.Pb);

    _.A("clpp.events.AIRPLAY_CASTING_STARTED", _.Mb);

    _.A("clpp.events.AIRPLAY_CASTING_ENDED", _.Lb);

    _.mh = "timeline-cue-added";

    _.A("clpp.events.TIMELINE_CUE_ADDED", _.mh);

    _.oh = "timeline-cue-enter";

    _.A("clpp.events.TIMELINE_CUE_ENTER", _.oh);

    _.ph = "timeline-cue-exit";

    _.A("clpp.events.TIMELINE_CUE_EXIT", _.ph);

    _.A("clpp.events.MPD_TYPE_CHANGED", _.od);

    _.A("clpp.events.VIMOND_RESPONSE", _.Je);

    _.A("clpp.events.PLAYLIST_ITEM_CHANGED", _.Md);

    _.A("clpp.events.PLAYLIST_MODIFIED", _.Nd);

    _.A("clpp.events.CDN_SWITCH_SUCCESS", _.mc);

    _.A("clpp.events.ONLINE_STATUS_CHANGED", Cd);

    _.A("clpp.utils.Uint8ArrayUtils", _.Wh);

    _.Wh.toStandardBase64 = _.Xh;
    _.Wh.concat = _.ci;
    _.Wh.equal = _.bi;
    _.Wh.toHex = _.ai;
    _.Wh.fromHex = _.$h;
    _.Wh.fromBase64 = _.Zh;
    _.Wh.toBase64Url = _.Yh;

    _.A(wc, wi);

    wi.getInfo = _.Yi;
    var Gi = null,
        Fi = null,
        Ii = new _.F(wc),
        Pi = "android",
        Oi = "ios",
        Ti = "linux",
        Qi = "osx",
        Ri = "windows",
        Si = "tizen",
        Ni = ve,
        Xi = ve,
        Vi = {
      windows: {
        os_version: /windows\s+?nt\s([\d.]+)/i,
        ie: /windows\s+?nt.+?trident\/[\d.]+.*rv:([\d.]+)/i,
        edge: /windows\s+?nt.+?edge?\/([\d.]+)/i,
        chrome: /windows\s+?nt.+?chrome\/([\d.]+)/i,
        firefox: /windows\s+?nt.+?firefox\/([\d.]+)/i,
        opera: /windows\s+?nt.+?opr\/([\d.]+)/i
      },
      osx: {
        os_version: /macintosh.+?([\d._]+)/i,
        safari: /macintosh.+?version\/([\d._]+).+?safari/i,
        edge: /macintosh.+?edge?\/([\d._]+)/i,
        chrome: /macintosh.+?chrome\/([\d._]+)/i,
        firefox: /macintosh.+?firefox\/([\d._]+)/i,
        opera: /macintosh.+?opr\/([\d._]+)/i
      },
      unknown: {
        ie: /.+?trident\/([\d.]+)/i,
        edge: /.+?edge?\/([\d.]+)/i,
        safari: /.+?version\/([\d._]+).+?safari/i,
        chrome: /.+?chrome\/([\d._]+)/i,
        firefox: /.+?firefox\/([\d._]+)/i,
        opera: /.+?opr\/([\d._]+)/i
      },
      android: {
        os_version: /android.+?([\d._]+)/i,
        chrome: /android.+?chrome\/([\d._]+)/i,
        firefox: /android.+?firefox\/([\d._]+)/i,
        opera: /android.+?opr\/([\d._]+)/i
      },
      ios: {
        os_version: /(?:iPad|iPhone).+?([\d._]+)/i,
        chrome: /.+?CriOS\/([\d._]+)/i,
        firefox: /.+?FxiOS\/([\d._]+)/i,
        safari: /.+?version\/([\d._]+).+?safari/i,
        opera: /.+?opr\/([\d._]+)/i
      },
      linux: {
        os_version: /linux.+?([\d._]+)/i,
        safari: /linux.+?version\/([\d._]+).+?safari/i,
        chrome: /linux.+?chrome\/([\d._]+)/i,
        firefox: /linux.+?firefox\/([\d._]+)/i,
        opera: /linux.+?opr\/([\d._]+)/i
      },
      tizen: {
        os_version: /tizen.+?([\d._]+)/i,
        safari: /linux.+?version\/([\d._]+).+?safari/i,
        chrome: /linux.+?chrome\/([\d._]+)/i,
        firefox: /linux.+?firefox\/([\d._]+)/i,
        opera: /linux.+?opr\/([\d._]+)/i
      }
    };
    var cj = window.fetch,
        $i = window.AbortController,
        Zi = window.Headers;

    _.gj.prototype.resolve = function () {};

    _.gj.prototype.reject = function () {};

    var hj = window.XMLHttpRequest;
    var oj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    _.h = _.jj.prototype;
    _.h.Ra = "";
    _.h.fc = "";
    _.h.Fa = "";
    _.h.Dc = null;
    _.h.ra = "";
    _.h.Sb = "";

    _.h.toString = function () {
      var a = [],
          b = this.Ra;
      b && a.push(rj(b, tp, !0), ":");

      if (b = this.Fa) {
        a.push("//");
        var c = this.fc;
        c && a.push(rj(c, tp, !0), "@");
        a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.Dc;
        null != b && a.push(":", String(b));
      }

      if (b = this.ra) this.Fa && "/" != b.charAt(0) && a.push("/"), a.push(rj(b, "/" == b.charAt(0) ? up : vp, !0));
      (b = this.a.toString()) && a.push("?", b);
      (b = this.Sb) && a.push("#", rj(b, Dp));
      return a.join("");
    };

    _.h.resolve = function (a) {
      var b = new _.jj(this);
      "data" === b.Ra && (b = new _.jj());
      var c = !!a.Ra;
      c ? kj(b, a.Ra) : c = !!a.fc;
      c ? b.fc = a.fc : c = !!a.Fa;
      c ? b.Fa = a.Fa : c = null != a.Dc;
      var d = a.ra;
      if (c) lj(b, a.Dc);else if (c = !!a.ra) {
        if ("/" != d.charAt(0)) if (this.Fa && !this.ra) d = "/" + d;else {
          var e = b.ra.lastIndexOf("/");
          -1 != e && (d = b.ra.substr(0, e + 1) + d);
        }
        if (".." == d || "." == d) d = "";else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
          e = 0 == d.lastIndexOf("/", 0);
          d = d.split("/");

          for (var f = [], g = 0; g < d.length;) {
            var k = d[g++];
            "." == k ? e && g == d.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(k), e = !0);
          }

          d = f.join("/");
        }
      }
      c ? b.ra = d : c = "" !== a.a.toString();
      c ? mj(b, nj(a.a)) : c = !!a.Sb;
      c && (b.Sb = a.Sb);
      return b;
    };

    var tp = /[#\/\?@]/g,
        vp = /[#\?:]/g,
        up = /[#\?]/g,
        sj = /[#\?@]/g,
        Dp = /#/g;
    qj.prototype.a = null;
    qj.prototype.g = null;

    qj.prototype.add = function (a, b) {
      if (!this.a && (this.a = {}, this.g = 0, this.f)) for (var c = this.f.split("\x26"), d = 0; d < c.length; d++) {
        var e = c[d].indexOf("\x3d"),
            f = null;

        if (0 <= e) {
          var g = c[d].substring(0, e);
          f = c[d].substring(e + 1);
        } else g = c[d];

        g = decodeURIComponent(g.replace(/\+/g, " "));
        f = f || "";
        this.add(g, decodeURIComponent(f.replace(/\+/g, " ")));
      }
      this.f = null;
      (c = this.a.hasOwnProperty(a) && this.a[a]) || (this.a[a] = c = []);
      c.push(b);
      null !== this.g && this.g++;
      return this;
    };

    qj.prototype.toString = function () {
      if (this.f) return this.f;
      if (!this.a) return "";
      var a = [],
          b;

      for (b in this.a) {
        for (var c = encodeURIComponent(b), d = this.a[b], e = 0; e < d.length; e++) {
          var f = c;
          "" !== d[e] && (f += "\x3d" + encodeURIComponent(d[e]));
          a.push(f);
        }
      }

      return this.f = a.join("\x26");
    };

    _.h = _.xj.prototype;

    _.h.release = function () {
      return this.h.destroy();
    };

    _.h.destroy = function () {
      this.j = !0;
      this.f = [];
      this.g = [];
      return this.h.destroy();
    };

    _.h.rg = function (a) {
      this.f.push(a);
    };

    _.h.Od = function (a) {
      this.g.push(a);
    };

    _.h.vj = function (a) {
      this.f = this.f.filter(function (b) {
        return b !== a;
      });
    };

    _.h.Be = function (a) {
      this.g = this.g.filter(function (b) {
        return b !== a;
      });
    };

    _.h.fetch = function (a) {
      var b = this;
      if (this.j) return new pn(Promise.reject(new _.K(1, 1, 7001, {
        url: a.uris[a.uriIndex],
        request: a
      })));

      for (var c = [], d = _.t(this.f), e = d.next(); !e.done; e = d.next()) {
        c.push(e.value);
      }

      if (a.requestModifiers) for (d = _.t(a.requestModifiers), e = d.next(); !e.done; e = d.next()) {
        c.push(e.value);
      }
      a.requestModifiers = c;
      c = [];
      d = _.t(this.g);

      for (e = d.next(); !e.done; e = d.next()) {
        c.push(e.value);
      }

      if (a.responseModifiers) for (d = _.t(a.responseModifiers), e = d.next(); !e.done; e = d.next()) {
        c.push(e.value);
      }
      a.responseModifiers = c;
      d = c = new _.gj();

      try {
        var f = {},
            g = _.t(a.requestModifiers);

        for (e = g.next(); !e.done; f = {
          Gd: f.Gd
        }, e = g.next()) {
          f.Gd = e.value, d = d.then(function (m) {
            return function (n) {
              if (k.a) throw new _.K(_.L, 1, 7001, n ? {
                url: n.uris[n.uriIndex],
                request: n
              } : null);
              return m.Gd(n) || n;
            };
          }(f))["catch"](function (m) {
            if (m instanceof _.K) throw m;
            throw new _.K(_.L, 1, 1006, null, m);
          });
        }

        d = d.then(function (m) {
          var n = new _.jj(m.uris[m.uriIndex]),
              p = n.Ra;
          p || (p = location.protocol, p = p.slice(0, -1), kj(n, p), m.uris[m.uriIndex] = n.toString());
          p = b.a[p];
          if (!p) throw new _.K(_.L, 1, 1E3, {
            url: n.toString()
          });
          return {
            request: m,
            plugin: p
          };
        });
        var k = new pn(d);
        g = {};

        var l = _.t(a.responseModifiers);

        for (e = l.next(); !e.done; g = {
          cd: g.cd
        }, e = l.next()) {
          g.cd = e.value, k.then(function (m) {
            return function (n) {
              function p() {
                if (k.a) throw new _.K(_.L, 1, 7001, n ? {
                  url: n.request.uris[n.request.uriIndex],
                  request: n.request
                } : null);
              }

              p();
              var r = m.cd(n) || n;
              p();
              return r;
            };
          }(g))["catch"](function (m) {
            return function (n) {
              if (n instanceof _.K && n.data && n.data.response) {
                var p = m.cd(n.data.response);
                if (p) return p.then(function () {
                  return Promise.reject(n);
                });
              }

              return Promise.reject(n);
            };
          }(g))["catch"](function (m) {
            if (m instanceof _.K) throw m;
            throw new _.K(_.L, 1, 1007, null, m);
          });
        }

        _.bo(this.h, k);

        c.resolve(a);
        return k;
      } catch (m) {
        return new pn(Promise.reject(m));
      }
    };

    _.xj.prototype.fetch = _.xj.prototype.fetch;
    _.xj.prototype.removeResponseModifier = _.xj.prototype.Be;
    _.xj.prototype.removeRequestModifier = _.xj.prototype.vj;
    _.xj.prototype.addResponseModifier = _.xj.prototype.Od;
    _.xj.prototype.addRequestModifier = _.xj.prototype.rg;

    _.A("clpp.net.makeRequest", _.Fh);

    _.ej = 2;
    _.zj = 6;

    _.A("clpp.net.RequestType", {
      MANIFEST: 1,
      SEGMENT: _.ej,
      LICENSE: 3,
      APP: 4,
      TIMING: 5,
      OTHER: _.zj
    });

    _.A("clpp.utils.PlayerConfiguration", Aj);

    Aj.create = _.Fj;
    var Lp = ["abort", ic, jc, Nc, "emptied", _.Oc, _.Qc, _.Rc, "interruptbegin", "interruptend", _.dd, _.ed, fd, "mozaudioavailable", _.Gd, _.Kd, _.Ld, _.Od, _.Qd, _.Xd, _.Yd, ae, "suspend", _.re, "volumechange", _.Me, _.Ne, _.Vd, Se, Re, Oe, Pe];

    _.u(_.Hj, _.Vh);

    _.h = _.Hj.prototype;

    _.h.init = function (a, b) {
      this.configuration = this.ed = b;
      this.A = a;
      this.log.info("Initializing Player surface");
      var c = this.A.getMedia();
      this.log.info("Attaching media element listeners");

      for (var d = _.t(Lp), e = d.next(); !e.done; e = d.next()) {
        e = e.value, this.K.on(c, e, this.Hj, e !== _.Rc);
      }

      this.md || (this.md = this.gf());
      this.md.Cb(this);
      this.A.showMediaElement();
    };

    _.h.release = function () {
      this.J && (this.J.destroy(), this.J = null);
      return Promise.resolve();
    };

    _.h.destroy = function () {
      this.K.release();
      return Promise.resolve();
    };

    _.h.canPlay = function (a) {
      return _.Wg[this.namespace()].canPlay(a);
    };

    _.h.play = function () {
      var a = this;
      if (!this.o) return Promise.reject("No sources specified yet. You need to load content before calling play.");
      var b = this.A.getMedia().play();
      return Promise.resolve(b)["catch"](function (c) {
        var d = c.message || "",
            e = c.stack || "";
        "NotAllowedError" === (c.name || "") && (0 === e.indexOf(_.Kd) || 0 <= d.indexOf(_.Kd)) && (a.trigger(new _.M(_.cc)), a.log.warn(_.na));
        throw c;
      });
    };

    _.h.pause = function () {
      var a = this;
      return this.o ? new Promise(function (b, c) {
        var d = a.getState();
        if (d !== _.jn && d !== _.Io && d !== _.no && d !== _.No) c();else if (a.A.getMedia().pause(), a.getState() === _.no) a.K.one(a, _.de, function () {
          b();
        });else b();
      }) : Promise.reject("No sources specified yet. You need to load content before calling pause.");
    };

    _.h.isPaused = function () {
      return this.A.getMedia().paused;
    };

    _.h.isEnded = function () {
      return this.A.getMedia().ended;
    };

    _.h.getConfiguration = function () {
      return this.configuration;
    };

    _.h.setDrmCustomDataModifier = function (a) {
      this.vc = a;
    };

    _.h.setCdnErrorCallback = function (a) {
      this.Ea = a;
    };

    _.h.yc = function () {
      return this.vc;
    };

    _.h.getSurface = function () {
      return this.A;
    };

    _.h.getBufferInfo = function (a) {
      var b = this.getSurface().getMedia();
      return new _.Uh(b ? b.buffered : void 0, a);
    };

    _.h.getPosition = function () {
      var a = this.A.getMedia();
      if (a) return a.currentTime;
      this.log.warn("No media element available, can not report current time!");
      return 0;
    };

    _.h.seek = function (a) {
      var b = this,
          c = this.getPosition();
      if (void 0 === a || null === a || _typeof(a) !== _.ud || a === c) return Promise.resolve();
      var d = this.A.getMedia();
      if (!d) return this.log.warn("No media element available, can not set current time!"), Promise.reject();
      var e = a - c;
      return .1 >= Math.abs(e) ? (this.log.info("Skip seek. Delta " + Math.abs(e) + " \x3c 0.1"), Promise.resolve()) : new Promise(function (f, g) {
        function k() {
          if (d.readyState > HTMLMediaElement.HAVE_NOTHING) m();else b.K.one(d, _.ed, m);
        }

        function l(n) {
          var p = b.getPosition(),
              r = .1 >= Math.abs(a - p),
              q = .25 < p - a,
              x = d.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA,
              y = n.type === _.Xd,
              D = n.type === _.Od,
              I = n.type === _.re,
              E = D && x;
          q = y || r && E || I && q;
          b.log.debug("Checking seeking state after " + n.type + " event. Seek completed:", q, "Current Time:", p, "Target Time:", a, "Native Event:", y, "Time reached", r, "Timeupdate:", I, "Progress:", D, "ReadyState:", x, "Progress Ready:", E);
          q ? (b.fe = !1, b.td = !1, b.K.off(d, _.Xd, l), b.K.off(d, _.re, l), b.K.off(d, _.Od, l), b.Rf(), b.trigger(new _.M(_.ze)), f()) : D && c === p && (b.log.debug("Seek seemed to have been ignored. Trying again"), d.currentTime = a);
        }

        function m() {
          b.trigger(new _.M(_.Ae));
          b.K.on(d, _.Xd, l);
          b.K.on(d, _.re, l);
          b.K.on(d, _.Od, l);
          b.log.info("Seeking to " + a + ". Delta " + e);
          b.fe = !0;
          b.td = !0;
          d.currentTime = a;
        }

        b.getState() === _.Co ? (b.log.debug("Player is in IDLE state. Postpone seek."), b.K.one(b, _.de, function () {
          switch (b.getState()) {
            case _.jn:
            case _.no:
            case _.No:
              b.log.debug("Valid seek state reached.");
              k();
              break;

            default:
              b.log.warn("Invalid seek target state. Aborting seek"), g();
          }
        })) : k();
      });
    };

    _.h.getVolume = function () {
      var a = this.A.getMedia();
      if (a) return a.volume;
      this.log.warn("No media element available, can not report volume!");
      return null;
    };

    _.h.setVolume = function (a) {
      var b = this.A.getMedia();
      b ? _.B.ja(a) ? 0 > a || 1 < a ? this.log.warn(pa + a + ".\n          Value must be between 0 and 1.") : b.volume = a : this.log.warn(pa + a + ". Volume must be a number") : this.log.warn("No media element available, can not set volume !");
    };

    _.h.isMuted = function () {
      return this.A.getMedia().muted;
    };

    _.h.setMuted = function (a) {
      var b = this.A.getMedia();
      _typeof(a) === _.ec && (b.muted = a);
    };

    _.h.getDuration = function () {
      return this.o ? this.A.getMedia().duration : -1;
    };

    _.h.getTrackManager = function () {
      return this.md;
    };

    _.h.getPlaybackRate = function () {
      var a = this.A.getMedia();
      return a && a.playbackRate || 1;
    };

    _.h.setPlaybackRate = function (a) {
      var b = this.A.getMedia();
      void 0 !== a && b && (b.playbackRate = a);
    };

    _.h.setSourceIndex = function (a) {
      this.kd = a;
    };

    _.h.getSourceIndex = function () {
      return this.kd;
    };

    _.h.getLoadedSource = function () {
      return this.o && -1 !== this.kd ? this.o[this.kd] : null;
    };

    _.h.getPeriods = function () {
      return [];
    };

    _.h.getNetworkEngine = function () {
      return this.zf;
    };

    _.h.setNetworkEngine = function (a) {
      this.zf = a;
    };

    _.h.getTextDisplayer = function () {
      return this.J;
    };

    _.h.getTimelineCues = function () {
      return [];
    };

    _.h.resetAbr = function () {};

    _.h.tj = function (a) {
      var b = this.getSurface().getMedia(),
          c = this.getPosition(),
          d = "Received Video Element Event: '" + a.type + "' with playhead at: " + c;
      if (a.type === _.re || a.type === _.Od) this.Yf.debug(d);else {
        var e = "";

        switch (a.type) {
          case _.Qd:
            e = "Rate: " + this.getPlaybackRate();
            break;

          case Nc:
            e = "Duration: " + this.getDuration();
            break;

          case "volumechange":
            e = "Volume: " + this.getVolume() + " Muted: " + this.isMuted();
            break;

          case _.Kd:
          case _.Ld:
          case "suspend":
          case _.Me:
          case ae:
          case _.Yd:
          case _.Xd:
          case _.re:
          case _.Od:
          case ic:
          case jc:
            b = this.getBufferInfo().ta(c);
            e = "State " + this.getSurface().getMedia().readyState + " Buffer: " + b;
            break;

          case _.Vd:
            null != b && (e = "Size: " + b.videoWidth + "x" + b.videoHeight);
        }

        e && (d += ". " + e);
        this.Yf.info(d);
      }
      this.trigger(new _.M(a.type, {
        detail: a
      }));
    };

    _.h.Rf = function () {};

    _.Hj.prototype.getTextDisplayer = _.Hj.prototype.getTextDisplayer;
    _.Hj.prototype.setNetworkEngine = _.Hj.prototype.setNetworkEngine;
    _.Hj.prototype.getNetworkEngine = _.Hj.prototype.getNetworkEngine;
    var Kj;
    Kj = new _.F("clpp.Components");
    _.Ij = new Map();

    Nj.prototype.release = function () {
      this.a = this.f = null;
    };

    _.Qj.prototype.getName = function () {
      return this.w;
    };

    _.Qj.prototype.fb = function (a, b) {
      this.f[a] = b;
    };

    _.A("clpp.drm.DrmEnvironment", _.Qj);

    _.Qj.prototype.setDrmSystem = _.Qj.prototype.fb;
    var Mp = {
      SW_SECURE_CRYPTO: _.gb,
      SW_SECURE_DECODE: _.hb,
      HW_SECURE_CRYPTO: Ea,
      HW_SECURE_DECODE: Fa,
      HW_SECURE_ALL: "HW_SECURE_ALL"
    };

    _.A("clpp.drm.WidevineRobustnessLevel", Mp);

    _.A("clpp.drm.RobustnessLevel", Mp);

    _.A("clpp.drm.PlayreadyRobustnessLevel", {
      SL150: "150",
      SL2000: "2000",
      SL3000: "3000"
    });

    _.Sj = _.Cc;
    _.Uj = _.Bc;
    _.Tj = "com.apple.fps.1_0";

    _.A("clpp.drm.KeySystem", {
      NONE: _.td,
      CLEAR_KEY: _.Ed,
      WIDEVINE: _.Sj,
      PLAYREADY: _.Uj,
      FAIRPLAY: _.Tj,
      PRIMETIME: _.zc
    });

    _.Wj = {};

    _.A("clpp.drm.registerDrmEnvironment", _.Xj);

    var Dk = {
      STAGING: [10, 191, 2, 8, 3, 18, 16, 40, 112, 52, 84, 192, 8, 246, 54, 24, 173, 231, 68, 61, 182, 196, 200, 24, 139, 231, 249, 144, 5, 34, 142, 2, 48, 130, 1, 10, 2, 130, 1, 1, 0, 181, 33, 18, 184, 208, 93, 2, 63, 204, 93, 149, 226, 194, 81, 193, 198, 73, 180, 23, 124, 216, 210, 190, 239, 53, 91, 176, 103, 67, 222, 102, 30, 61, 42, 188, 49, 130, 183, 153, 70, 213, 95, 220, 8, 223, 233, 84, 7, 129, 94, 154, 98, 116, 179, 34, 162, 199, 245, 224, 103, 187, 95, 10, 192, 122, 137, 212, 90, 234, 148, 178, 81, 111, 7, 91, 102, 239, 129, 29, 13, 38, 225, 185, 166, 184, 148, 242, 185, 133, 121, 98, 170, 23, 28, 79, 102, 99, 13, 62, 76, 96, 39, 24, 137, 127, 94, 30, 249, 182, 170, 245, 173, 77, 186, 42, 126, 20, 23, 109, 241, 52, 161, 211, 24, 91, 90, 33, 138, 192, 90, 76, 65, 240, 129, 239, 255, 128, 163, 160, 64, 197, 11, 9, 187, 199, 64, 238, 220, 216, 241, 77, 103, 90, 145, 152, 15, 146, 202, 125, 220, 100, 106, 6, 173, 173, 81, 1, 247, 74, 14, 73, 140, 192, 31, 0, 83, 43, 172, 33, 120, 80, 189, 144, 94, 144, 146, 54, 86, 183, 223, 239, 239, 66, 72, 103, 103, 243, 62, 246, 40, 61, 79, 66, 84, 171, 114, 88, 147, 144, 190, 229, 88, 8, 241, 214, 104, 8, 13, 69, 216, 147, 194, 188, 162, 247, 77, 96, 160, 192, 208, 160, 153, 60, 239, 1, 96, 71, 3, 51, 76, 54, 56, 19, 148, 134, 188, 157, 175, 36, 253, 103, 160, 127, 154, 217, 67, 2, 3, 1, 0, 1, 58, 18, 115, 116, 97, 103, 105, 110, 103, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 18, 128, 3, 152, 62, 48, 53, 38, 117, 244, 11, 167, 21, 252, 36, 155, 218, 229, 212, 172, 114, 73, 162, 102, 101, 33, 228, 54, 85, 115, 149, 41, 114, 31, 248, 128, 224, 170, 239, 197, 226, 123, 201, 128, 218, 234, 218, 191, 63, 195, 134, 208, 132, 160, 44, 130, 83, 120, 72, 204, 117, 63, 244, 151, 176, 17, 167, 218, 151, 120, 138, 0, 226, 170, 107, 132, 205, 125, 113, 192, 122, 72, 235, 246, 22, 2, 204, 165, 163, 243, 32, 48, 167, 41, 92, 48, 218, 145, 91, 145, 220, 24, 185, 188, 149, 147, 184, 222, 139, 181, 15, 13, 237, 193, 41, 56, 184, 233, 224, 57, 205, 222, 24, 250, 130, 232, 27, 176, 50, 99, 15, 233, 85, 216, 90, 86, 108, 225, 84, 48, 11, 246, 212, 193, 189, 18, 105, 102, 53, 107, 40, 125, 101, 123, 24, 206, 99, 208, 239, 212, 95, 197, 38, 158, 151, 234, 177, 28, 181, 99, 229, 86, 67, 178, 111, 244, 159, 16, 156, 33, 1, 175, 202, 243, 91, 131, 47, 40, 143, 13, 157, 69, 150, 14, 37, 158, 133, 251, 93, 36, 219, 210, 207, 130, 118, 76, 93, 217, 191, 114, 126, 251, 233, 200, 97, 248, 105, 50, 31, 106, 222, 24, 144, 95, 77, 146, 249, 166, 218, 101, 54, 219, 132, 117, 135, 29, 22, 142, 135, 11, 178, 48, 60, 247, 12, 110, 151, 132, 201, 61, 45, 232, 69, 173, 130, 98, 190, 126, 13, 78, 46, 74, 7, 89, 206, 248, 45, 16, 157, 37, 146, 199, 36, 41, 248, 192, 23, 66, 186, 226, 179, 222, 202, 219, 195, 60, 62, 95, 75, 175, 94, 22, 236, 183, 78, 173, 186, 252, 183, 198, 112, 95, 122, 158, 59, 111, 57, 64, 56, 63, 156, 81, 22, 210, 2, 162, 12, 146, 41, 238, 150, 156, 37, 25, 113, 131, 3, 181, 13, 1, 48, 195, 53, 46, 6, 176, 20, 216, 56, 84, 15, 138, 12, 34, 124, 0, 17, 224, 245, 179, 142, 78, 41, 142, 210, 203, 48, 30, 180, 86, 73, 101, 245, 92, 93, 121, 117, 122, 37, 10, 78, 185, 200, 74, 179, 230, 83, 159, 107, 111, 223, 86, 137, 158, 162, 153, 20],
      PRODUCTION: [10, 193, 2, 8, 3, 18, 16, 23, 5, 185, 23, 204, 18, 4, 134, 139, 6, 51, 58, 47, 119, 42, 140, 24, 130, 180, 130, 146, 5, 34, 142, 2, 48, 130, 1, 10, 2, 130, 1, 1, 0, 153, 237, 91, 59, 50, 125, 171, 94, 36, 239, 195, 182, 42, 149, 181, 152, 82, 10, 213, 188, 203, 55, 80, 62, 6, 69, 184, 20, 216, 118, 184, 223, 64, 81, 4, 65, 173, 140, 227, 173, 177, 27, 184, 140, 78, 114, 90, 94, 74, 158, 7, 149, 41, 29, 88, 88, 64, 35, 167, 225, 175, 14, 56, 169, 18, 121, 57, 48, 8, 97, 11, 111, 21, 140, 135, 140, 126, 33, 191, 251, 254, 234, 119, 225, 1, 158, 30, 87, 129, 232, 164, 95, 70, 38, 61, 20, 230, 14, 128, 88, 168, 96, 122, 220, 224, 79, 172, 132, 87, 177, 55, 168, 214, 124, 205, 235, 51, 112, 93, 152, 58, 33, 251, 78, 236, 189, 74, 16, 202, 71, 73, 12, 164, 126, 170, 93, 67, 130, 24, 221, 186, 241, 202, 222, 51, 146, 241, 61, 111, 251, 100, 66, 253, 49, 225, 191, 64, 176, 198, 4, 209, 196, 186, 76, 149, 32, 164, 191, 151, 238, 189, 96, 146, 154, 252, 238, 245, 91, 186, 245, 100, 226, 208, 231, 108, 215, 197, 92, 115, 160, 130, 185, 150, 18, 11, 131, 89, 237, 206, 36, 112, 112, 130, 104, 13, 111, 103, 198, 216, 44, 74, 197, 243, 19, 68, 144, 167, 78, 236, 55, 175, 75, 47, 1, 12, 89, 232, 40, 67, 226, 88, 47, 11, 107, 159, 93, 176, 252, 94, 110, 223, 100, 251, 211, 8, 180, 113, 27, 207, 18, 80, 1, 156, 159, 90, 9, 2, 3, 1, 0, 1, 58, 20, 108, 105, 99, 101, 110, 115, 101, 46, 119, 105, 100, 101, 118, 105, 110, 101, 46, 99, 111, 109, 18, 128, 3, 174, 52, 115, 20, 181, 168, 53, 41, 127, 39, 19, 136, 251, 123, 184, 203, 82, 119, 210, 73, 130, 60, 221, 209, 218, 48, 185, 51, 57, 81, 30, 179, 204, 189, 234, 4, 185, 68, 185, 39, 193, 33, 52, 110, 253, 189, 234, 201, 212, 19, 145, 126, 110, 193, 118, 161, 4, 56, 70, 10, 80, 59, 193, 149, 43, 155, 164, 228, 206, 15, 196, 191, 194, 10, 152, 8, 170, 175, 75, 252, 209, 156, 29, 207, 205, 245, 116, 204, 172, 40, 209, 180, 16, 65, 108, 249, 222, 136, 4, 48, 28, 189, 179, 52, 202, 252, 208, 212, 9, 120, 66, 58, 100, 46, 84, 97, 61, 240, 175, 207, 150, 202, 74, 146, 73, 216, 85, 228, 43, 58, 112, 62, 241, 118, 127, 106, 155, 211, 109, 107, 248, 43, 231, 107, 191, 12, 186, 79, 222, 89, 210, 171, 204, 118, 254, 182, 66, 71, 184, 92, 67, 31, 188, 165, 34, 102, 182, 25, 252, 54, 151, 149, 67, 252, 169, 203, 189, 187, 250, 250, 14, 26, 85, 231, 85, 163, 199, 188, 230, 85, 249, 100, 111, 88, 42, 185, 207, 112, 170, 8, 185, 121, 248, 103, 246, 58, 11, 43, 127, 219, 54, 44, 91, 196, 236, 213, 85, 216, 91, 202, 169, 197, 147, 195, 131, 200, 87, 212, 157, 170, 183, 126, 64, 183, 133, 29, 223, 210, 73, 152, 128, 142, 53, 178, 88, 231, 93, 120, 234, 192, 202, 22, 247, 4, 115, 4, 194, 13, 147, 237, 228, 232, 255, 28, 111, 23, 230, 36, 62, 63, 61, 168, 252, 23, 9, 135, 14, 196, 95, 186, 130, 58, 38, 63, 12, 239, 161, 247, 9, 59, 25, 9, 146, 131, 38, 51, 55, 5, 4, 58, 41, 189, 166, 249, 180, 52, 44, 200, 223, 84, 60, 177, 161, 24, 47, 124, 95, 255, 51, 241, 4, 144, 250, 202, 91, 37, 54, 11, 118, 1, 94, 156, 90, 6, 171, 142, 224, 47, 0, 210, 232, 213, 152, 97, 4, 170, 204, 77, 212, 117, 253, 150, 238, 156, 228, 227, 38, 242, 27, 131, 199, 5, 133, 119, 179, 135, 50, 205, 218, 188, 106, 107, 237, 19, 251, 13, 73, 211, 138, 69, 235, 135, 165, 244]
    };

    _.Zj.prototype.getPosition = function () {
      return this.a;
    };

    _.Zj.prototype.xa = function () {
      return this.f.byteLength;
    };

    _.Zj.prototype.seek = function (a) {
      (0 > a || a > this.f.byteLength) && _.ak();
      this.a = a;
    };

    _.Zj.prototype.seek = _.Zj.prototype.seek;

    _.ck.prototype.getPosition = function () {
      return this.a;
    };

    _.ck.prototype.xa = function () {
      return this.f.byteLength;
    };

    _.ck.prototype.skip = function (a) {
      this.a + a > this.f.byteLength && ek();
      this.a += a;
    };

    _.ck.prototype.seek = function (a) {
      if (0 > a || a > this.f.byteLength) throw ek();
      this.a = a;
    };

    _.A("clpp.utils.url.queryString", ok);

    _.A("clpp.utils.FairplayUtils", qk);

    qk.createFairplayPayload = tk;
    qk.extractContentId = sk;
    qk.extractExtXKeyUri = rk;
    var Gk = new _.F("clpp.drm.DrmToday"),
        vk = "PRODUCTION",
        wk = "STAGING",
        xk = "TEST",
        Np = {
      PRODUCTION: vk,
      STAGING: wk,
      TEST: xk
    };

    _.A("clpp.drm.DrmToday.Environment", Np);

    for (var zk = "/license-proxy-widevine/cenc/", Ak = "/license-proxy-headerauth/drmtoday/RightsManager.asmx", Bk = "/license-server-fairplay/", Ok = {
      "00000": "Success",
      "01000": "General Internal Error",
      "02000": "General Request Error",
      "03000": "General Request Authentication Error",
      3E4: "General DRM error",
      4E4: "General Widevine Modular error",
      40001: "Widevine Device Certificate Revocation (wv 127)",
      40002: "Widevine Device Certificate Revocation - Permanently (wv 175)",
      41E3: "General Widevine Classic error",
      42E3: "General Playready error",
      43E3: "General Fairplay error",
      44E3: "General OMA error",
      44001: "OMA Device registration failed",
      45E3: "General CDRM error",
      45001: "CDRM Device registration failed",
      7E4: "General Output Protection",
      70001: "All keys filtered by EOP settings",
      8E4: "General CSL error",
      80001: "Too many concurrent streams",
      9E4: "General GBL error",
      90001: "License delivery prohibited in your region"
    }, Op = {
      video: [_.hb, void 0],
      audio: [_.gb, void 0]
    }, Pp = {
      video: ["3000"],
      audio: ["2000"]
    }, Qp = _.t(Object.keys(Np)), Rp = Qp.next(); !Rp.done; Rp = Qp.next()) {
      var uk = Rp.value,
          Sp = ya;
      uk !== vk && (Sp += "_" + uk);
      var Tp = new _.Qj(Sp);
      Tp.fb(_.Sj, {
        licenseUrl: Ck(_.Sj),
        videoRobustness: Op.video,
        audioRobustness: Op.audio,
        persistentStateRequired: !1,
        distinctiveIdentifierRequired: !1,
        serverCertificate: Ek(),
        modifiers: {
          licenseRequest: _.Ik,
          licenseResponse: _.Nk
        }
      });
      Tp.fb(_.Tj, {
        licenseUrl: Ck(_.Tj),
        certificateUrl: yk() + "/license-server-fairplay/cert/",
        modifiers: {
          licenseRequest: _.Kk,
          licenseResponse: _.Lk,
          extractContentId: _.Hk,
          certificateRequest: _.Mk
        }
      });
      Tp.fb(_.Uj, {
        licenseUrl: Ck(_.Uj),
        videoRobustness: Pp.video,
        audioRobustness: Pp.audio,
        modifiers: {
          licenseRequest: Jk
        }
      });

      _.Xj(Tp);
    }

    ;
    var Rf;

    Rf = function Up(a) {
      var c;
      return uf(Up, function (d) {
        1 == d.a && (c = 0);
        if (3 != d.a) return c < a ? _.v(d, c, 3) : d.G(0);
        c++;
        return d.G(2);
      });
    };

    _.Wp = function Vp(a) {
      var c, d, e, f, g, k;
      return uf(Vp, function (l) {
        1 == l.a && (c = -1, e = d = void 0, f = _.t(a), g = f.next());

        if (5 != l.a) {
          if (g.done) return -1 === c ? l.G(0) : _.v(l, {
            ee: c,
            qj: d,
            item: e,
            next: void 0
          }, 0);
          k = g.value;
          return 0 <= c ? _.v(l, {
            ee: c,
            item: e,
            qj: d,
            next: k
          }, 5) : l.G(5);
        }

        c++;
        d = e;
        e = k;
        g = f.next();
        return l.G(2);
      });
    };

    _.Rk.prototype.value = function () {
      void 0 == this.a && (this.a = this.f());
      return this.a;
    };

    _.h = _.Sk.prototype;

    _.h.L = function (a, b) {
      var c = Wk(a);
      this.g[c] = Xp;
      this.f[c] = b;
      return this;
    };

    _.h.T = function (a, b) {
      var c = Wk(a);
      this.g[c] = Yp;
      this.f[c] = b;
      return this;
    };

    _.h.stop = function () {
      this.a = !0;
    };

    _.h.parse = function (a, b) {
      var c = _.J(a);

      c = new _.ck(new DataView(c.buffer, c.byteOffset, c.byteLength), !1);

      for (this.a = !1; _.dk(c) && !this.a;) {
        this.xd(0, c, b);
      }
    };

    _.h.xd = function (a, b, c) {
      var d = b.getPosition(),
          e = _.hk(b),
          f = _.hk(b),
          g = !1;

      this.h.debug("Parsing MP4 box", _.Xk(f));

      switch (e) {
        case 0:
          e = b.xa() - d;
          break;

        case 1:
          e = _.jk(b), g = !0;
      }

      var k = this.f[f];

      if (k) {
        var l = null,
            m = null;
        this.g[f] == Yp && (m = _.hk(b), l = m >>> 24, m &= 16777215);
        f = b.getPosition() - d;
        var n = d + e;
        c && n > b.xa() && (n = b.xa());
        n -= b.getPosition();
        b = 0 < n ? _.kk(b, n) : new Uint8Array(0);
        b = new _.ck(new DataView(b.buffer, b.byteOffset, b.byteLength), !1);
        k({
          ab: this,
          Tf: c || !1,
          version: l,
          flags: m,
          F: b,
          size: e,
          start: d + a,
          de: f,
          ki: g
        });
      } else a = Math.min(d + e - b.getPosition(), b.xa() - b.getPosition()), b.skip(a);
    };

    _.A("clpp.utils.Mp4Parser", _.Sk);

    _.Sk.typeToString = _.Xk;
    _.Sk.allData = _.Vk;
    _.Sk.sampleDescription = _.Uk;
    _.Sk.children = _.Tk;
    _.Sk.prototype.parseNext = _.Sk.prototype.xd;
    _.Sk.prototype.parse = _.Sk.prototype.parse;
    _.Sk.prototype.stop = _.Sk.prototype.stop;
    _.Sk.prototype.fullBox = _.Sk.prototype.T;
    _.Sk.prototype.box = _.Sk.prototype.L;
    _.Sk.headerSize = _.Yk;
    var Xp = 0,
        Yp = 1;

    _.Zk.prototype.h = function (a) {
      if (1 < a.version) _.C("Unrecognized PSSH version found!");else {
        var b = _.ai(_.kk(a.F, 16)),
            c = [];

        if (0 < a.version) for (var d = _.hk(a.F), e = 0; e < d; ++e) {
          var f = _.ai(_.kk(a.F, 16));

          c.push(f);
        }
        d = _.hk(a.F);
        a.F.skip(d);
        this.g.push.apply(this.g, c);
        this.f.push(b);
        this.a.push({
          start: a.start,
          end: a.start + a.size - 1
        });
        a.F.getPosition() != a.F.xa() && _.C("Mismatch between box size and data size!");
      }
    };

    var fl, $k;
    _.h = _.cl.prototype;

    _.h.destroy = function () {
      var a = this;
      return _.z(function (b) {
        if (1 == b.a) {
          if (a.j) return _.v(b, a.Da, 0);
          a.j = !0;
          return _.v(b, el(a), 4);
        }

        a.Da.resolve();
        return b.G(0);
      });
    };

    _.h.keySystem = function () {
      return this.f ? _.Dl(this.f.keySystem) : "";
    };

    _.h.getDrmInfo = function () {
      return this.f;
    };

    _.h.Qf = function (a) {
      var b = this;
      return _.z(function (c) {
        return b.D && b.J === fl ? c["return"]() : !b.h.delayLicenseRequestUntilPlayed || b.w && !b.w.paused || b.Ea ? _.v(c, Ll(b, a), 0) : (b.aa.push(a), c.G(0));
      });
    };

    _.h.Mf = function (a) {
      var b = this,
          c = a.target;
      this.a.debug("Key status changed for session", c.sessionId);
      var d = this.g.get(c),
          e = !1;
      c.keyStatuses.forEach(function (f, g) {
        if (_typeof(g) == _.ge) {
          var k = g;
          g = f;
          f = k;
        }

        if (Il(b.f.keySystem)) {
          if (16 === g.byteLength && (_.yi(_.mb) || _.xi())) {
            k = _.Xf(g);
            var l = k.getUint32(0, !0),
                m = k.getUint16(4, !0),
                n = k.getUint16(6, !0);
            k.setUint32(0, l, !1);
            k.setUint16(4, m, !1);
            k.setUint16(6, n, !1);
          }

          f === _.ee && (f = _.ye);
        }

        f != _.ee && (d.loaded = !0);
        "expired" == f && (e = !0);

        var p = _.ai(_.J(g));

        b.a.debug("Key status for", p, f);
        b.Ka.set(p, f);
        d && !d.keyId && b.g.forEach(function (r, q) {
          q === c || r.keyId !== p || r.loaded || (r.loaded = !0);
        });
      });
      a = c.expiration - Date.now();
      (0 > a || e && 1E3 > a) && d && !d.hb && (this.a.debug("Session has expired", c.sessionId), (a = this.g.get(c)) && a.tc && a.tc.stop(), this.g["delete"](c), c.close()["catch"](function () {}));
      Fl(this) && (this.H.resolve(), 1 !== this.g.size || e ? this.Y.X(.5) : al(this));
    };

    _.Zp = new _.Rk(function () {
      return _.Yf(new Uint8Array([0]));
    });
    fl = 0;
    $k = 3;
    _.fm = {
      VIDEO: _.Ee,
      AUDIO: _.Xb,
      TEXT: _.oe,
      Mj: _.Qb,
      Uj: _.Wc
    };
    _.$p = 1 / 15;

    _.Xl.prototype.getStats = function () {
      return {
        width: this.j,
        height: this.f,
        streamBandwidth: this.A,
        decodedFrames: this.g,
        droppedFrames: this.h,
        corruptedFrames: this.B,
        estimatedBandwidth: this.m,
        loadLatency: this.o,
        playTime: Tl(this.a, _.no),
        pauseTime: Tl(this.a, _.No),
        bufferingTime: Tl(this.a, _.jn),
        stateHistory: Ul(this.a),
        switchHistory: Wl(this.w)
      };
    };

    var Zl = new _.Rk(function () {
      return new Map([[HTMLMediaElement.HAVE_METADATA, _.ed], [HTMLMediaElement.HAVE_CURRENT_DATA, _.dd], [HTMLMediaElement.HAVE_FUTURE_DATA, ic], [HTMLMediaElement.HAVE_ENOUGH_DATA, jc]]);
    });

    _.u(am, _.Hj);

    _.h = am.prototype;

    _.h.init = function (a, b) {
      _.Hj.prototype.init.call(this, a, b);

      this.h = new Fo(this);
      Lo(this.h, _.Co);
    };

    _.h.namespace = function () {
      return vc;
    };

    _.h.unload = function () {
      var a = this,
          b;
      return _.z(function (c) {
        if (!a.o) return c.G(0);
        a.log.debug(_.eb, a.o);
        a.C && (a.C.stop(), a.C = null);
        (b = a.getTrackManager()) && b.release();
        a.B && (a.B.destroy(), a.B = null);
        a.J && (a.J.destroy(), a.J = null);
        a.j && a.j.release();
        a.m && (a.m.destroy(), a.m = null);

        _.eh(a.g);

        a.f && (a.f = new _.Xl());
        a.o = null;
        a.D = !1;
        a.a && (a.a.removeAttribute("src"), a.a.load());
        return _.v(c, em(a), 0);
      });
    };

    _.h.release = function () {
      var a = this;
      return _.Hj.prototype.release.call(this).then(function () {
        return a.unload();
      }).then(function () {
        a.h && Lo(a.h, _.Co);
      });
    };

    _.h.destroy = function () {
      var a = this;
      if (this.w) return this.log.warn("Player is already destroyed!"), Promise.resolve();
      this.w = !0;
      return _.Hj.prototype.destroy.call(this).then(function () {
        return a.release();
      }).then(function () {
        a.log.debug(za);
        var b = a.getTrackManager();
        b && b.destroy();
        a.j && (a.j.destroy()["catch"](function (c) {
          a.log.warn("Error while disposing metadata handler", c);
        }), a.j = null);
        a.h && (a.h.destroy(), a.h = null);
        a.f = null;
      });
    };

    _.h.getDrmInfo = function () {
      return this.m ? this.m.getDrmInfo() : null;
    };

    _.h.load = function (a) {
      var b = this,
          c,
          d,
          e,
          f,
          g;
      return _.z(function (k) {
        switch (k.a) {
          case 1:
            if (b.w) return k["return"](bm());
            if (!b.getSurface() || !b.getSurface().getMedia()) return k["return"](Promise.reject("No surface or no media element in surface"));
            c = _.B;
            d = b.A.getMedia();
            b.H = Date.now() / 1E3;
            b.f = new _.Xl();
            b.g.on(b, _.de, function () {
              b.f && _.Sl(b.f.a, b.getState());
            });
            Lo(b.h, _.Mo);
            b.o = _.um(a);
            _.Gj(a) && (b.configuration = _.Fj(b.ed, a));
            b.log.debug(_.Pa, b.configuration);
            b.log.debug(_.$a, b.o);
            e = _.wg(b.configuration, ["html", _.sd]);
            b.J = e.create(b);
            b.J.setTextVisibility(!0);
            b.configuration.enableHtmlCue && _.Jj(_.le) && !_.Ei() && (b.B = new Sh(b), b.B.start(d));
            b.j ? b.j.release() : b.j = new gh(b);
            ih(b.j, d);
            f = b.getTrackManager();
            f.load();
            d.loop = !!b.configuration.loop;
            c.R(b.configuration.volume) || b.setVolume(b.configuration.volume);
            c.R(b.configuration.muted) || b.setMuted(b.configuration.muted);
            b.g.one(d, ic, function () {
              b.trigger(new _.M(_.sp));
            });

            _.mf(k, 2);

            return _.v(k, dm(b, d), 4);

          case 4:
            return _.v(k, gm(b), 5);

          case 5:
            return _.v(k, km(b).N, 6);

          case 6:
            _.nf(k, 0);

            break;

          case 2:
            g = _.of(k), b.D = !1, b.onError(g), _.w(k);
        }
      });
    };

    _.h.onError = function (a) {
      this.D || (a.a === _.L && null !== this.h && Lo(this.h, _.hm), this.trigger(new _.M(_.Rc, {
        detail: a
      })));
    };

    _.h.gf = function () {
      return new Ch();
    };

    _.h.getState = function () {
      return null !== this.h ? this.h.getState().currentState : _.Do;
    };

    _.h.getPresentationStartTime = function () {
      if (this.a && this.a.getStartDate && this.isLive()) {
        var a = this.a.getStartDate();
        return isNaN(a.getTime()) ? (this.log.warn("EXT-X-PROGRAM-DATETIME required to get presentation start time as Date!"), 0) : a.getTime() / 1E3;
      }

      return 0;
    };

    _.h.getSeekRange = function () {
      var a = this.getSurface().getMedia();
      return a && a.src && (a = a.seekable, a.length) ? {
        start: a.start(0),
        end: a.end(a.length - 1)
      } : {
        start: 0,
        end: this.getDuration()
      };
    };

    _.h.isLive = function () {
      return this.a && this.a.src ? Infinity === this.a.duration : !1;
    };

    _.h.getStats = function () {
      if (!this.f || !this.a) return _.Yl();
      this.f && _.Sl(this.f.a, this.getState());
      var a = this.a,
          b = this.f,
          c = a.videoHeight;
      b.j = a.videoWidth;
      b.f = c;
      a.getVideoPlaybackQuality && (a = a.getVideoPlaybackQuality(), b = this.f, c = Number(a.totalVideoFrames), b.h = Number(a.droppedVideoFrames), b.g = c, this.f.B = Number(a.corruptedVideoFrames));
      return this.f.getStats();
    };

    _.h.getTimelineCues = function () {
      return this.j ? this.j.getTimelineCues() : [];
    };

    lm.prototype.getName = function () {
      return vc;
    };

    lm.prototype.canPlay = function (a) {
      a = a.type || "";
      var b = a === _.rm,
          c = a === _.qm;
      return a === _.pm || b || c && !_.Ci() ? 0 : _.Bi() || "" === Hi().canPlayType(a) ? 0 : 2;
    };

    lm.prototype.create = function () {
      return new am();
    };

    _.Yg(new lm());

    _.mm.prototype.sc = function () {};

    _.mm.prototype.release = function () {};

    _.h = om.prototype;

    _.h.getMedia = function () {
      return this.a;
    };

    _.h.getContainer = function () {
      return this.f;
    };

    _.h.getCastElement = function () {
      return this.j;
    };

    _.h.isFullscreen = function () {
      return !!document.fullscreenElement;
    };

    _.h.hideMediaElement = function () {
      var a = this.getMedia();
      a ? _.ng(a, sc) : this.h.debug("No media element available that could be hidden");
    };

    _.h.showMediaElement = function () {
      var a = this.getMedia();
      a ? a.classList.remove(sc) : this.h.debug("No media element available that could be shown");
    };

    _.h.addElementToContainer = function (a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? !1 : c;
      var d = this.getContainer();
      if (!d) throw Error("No container is available. Unable to add element");
      b && _.ng(a, _.rc);
      c ? d.insertBefore(a, d.firstElementChild) : d.appendChild(a);
    };

    _.h.removeElementFromContainer = function (a) {
      var b = this.getContainer();
      if (!b) throw Error("No container is available. Unable to remove element");
      b.removeChild(a);
    };

    _.h.hide = function (a) {
      _.ng(a, sc);
    };

    _.h.show = function (a) {
      a.classList.remove(sc);
    };

    _.h.release = function () {};

    om.prototype.removeElementFromContainer = om.prototype.removeElementFromContainer;
    om.prototype.addElementToContainer = om.prototype.addElementToContainer;
    om.prototype.getCastElement = om.prototype.getCastElement;
    om.prototype.getContainer = om.prototype.getContainer;
    om.prototype.getMedia = om.prototype.getMedia;
    var nm = {
      disableContainer: !1,
      crossorigin: "anonymous",
      containerEl: null
    };

    _.A("clpp.version", _.da);

    _.A("clpp.name", _.ra);

    _.pm = "application/dash+xml";
    _.qm = "application/x-mpegurl";
    _.rm = "application/vnd.ms-sstr+xml";

    _.A("clpp.Type", {
      DASH: _.pm,
      HLS: _.qm,
      SMOOTH_STREAMING: _.rm,
      MP4: _.Ge
    });

    _.lh = "scte35";
    _.jh = ve;

    _.A("clpp.TimelineCueType", {
      SCTE35: _.lh,
      DASH_CALLBACK: _.rd,
      UNKNOWN: _.jh
    });

    _.A("clpp.utils.media.detectType", sm);

    var vm = new _.F("clpp.sources");
    _.ym = {};
    _.wm = {};

    _.A("clpp.polyfill.installAll", Fm);

    var Em = [];

    _.A("clpp.polyfill.register", _.Gm);

    _.Gm(function () {
      if (window.Document) {
        var a = Element.prototype;
        a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
        a = Document.prototype;
        a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitExitFullscreen;
        Sc in document || (Object.defineProperty(document, Sc, {
          get: function get() {
            return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
          }
        }), Object.defineProperty(document, "fullscreenEnabled", {
          get: function get() {
            return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled;
          }
        }));
        document.addEventListener("webkitfullscreenchange", Hm);
        document.addEventListener("webkitfullscreenerror", Hm);
        document.addEventListener("mozfullscreenchange", Hm);
        document.addEventListener("mozfullscreenerror", Hm);
        document.addEventListener("MSFullscreenChange", Hm);
        document.addEventListener("MSFullscreenError", Hm);
      }
    });

    _.Gm(function () {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        !a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = Im);
      }
    });

    Lm.prototype.createSession = function () {};

    Lm.prototype.setServerCertificate = function () {};

    Mm.prototype.getConfiguration = function () {};

    Mm.prototype.createMediaKeys = function () {};

    _.Gm(function () {
      !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (_.Nf("EME not available."), navigator.requestMediaKeySystemAccess = Jm, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Km, window.MediaKeys = Lm, window.MediaKeySystemAccess = Mm);
    }, -10);

    _.Gm(function () {
      _.H("VideoPlayPromise.install");

      if (window.HTMLMediaElement) {
        var a = HTMLMediaElement.prototype.play;

        HTMLMediaElement.prototype.play = function () {
          var b = a.apply(this);
          b && b["catch"](function () {});
          return b;
        };
      }
    });

    _.Gm(function () {
      navigator.languages || Object.defineProperty(navigator, "languages", {
        get: function get() {
          return navigator.language ? [navigator.language] : ["en"];
        }
      });
    });

    _.Gm(function () {
      if (window.VTTCue) _.Nf("Using native VTTCue.");else if (window.TextTrackCue) {
        var a = TextTrackCue.length;
        if (3 === a) _.Nf(rb), window.VTTCue = Nm;else if (6 === a) _.Nf("Using VTTCue polyfill from 6 argument TextTrackCue."), window.VTTCue = Om;else {
          try {
            var b = !!Nm(1, 2, "");
          } catch (c) {
            b = !1;
          }

          b && (_.Nf(rb), window.VTTCue = Nm);
        }
      } else _.Of("VTTCue not available.");
    });

    _.Gm(function () {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        a.requestPictureInPicture && document.exitPictureInPicture || !a.webkitSupportsPresentationMode || (_.H("PiPWebkit.install"), document.pictureInPictureEnabled = !0, document.pictureInPictureElement = null, a.requestPictureInPicture = Qm, document.exitPictureInPicture = Rm, document.addEventListener("webkitpresentationmodechanged", Pm, !0));
      }
    });

    Sm.prototype.createMediaKeys = function () {
      _.H("PatchedMediaKeysApple.MediaKeySystemAccess.createMediaKeys");

      var a = new Ym(this.keySystem);
      return Promise.resolve(a);
    };

    Sm.prototype.getConfiguration = function () {
      _.H("PatchedMediaKeysApple.MediaKeySystemAccess.getConfiguration");

      return this.a;
    };

    Ym.prototype.createSession = function (a) {
      _.H("PatchedMediaKeysApple.MediaKeys.createSession");

      a = a || _.ne;
      if (a != _.ne) throw new TypeError(_.ib + a + _.ba);
      return new $m(this.f, a);
    };

    Ym.prototype.setServerCertificate = function () {
      _.H("PatchedMediaKeysApple.MediaKeys.setServerCertificate");

      return Promise.resolve(!1);
    };

    _.u($m, _.Vh);

    _.h = $m.prototype;

    _.h.generateRequest = function (a, b) {
      _.H("PatchedMediaKeysApple.MediaKeySession.generateRequest");

      this.a = new _.gj();

      try {
        var c = this.j.createSession(_.Ge, _.J(b));
        this.g = c;
        this.sessionId = c.sessionId || "";
        this.h.on(this.g, Re, this.wh.bind(this));
        this.h.on(this.g, Oe, this.uh.bind(this));
        this.h.on(this.g, Pe, this.vh.bind(this));
        an(this, _.ee);
      } catch (d) {
        this.a.reject(d);
      }

      return this.a;
    };

    _.h.load = function () {
      _.H("PatchedMediaKeysApple.MediaKeySession.load");

      return Promise.reject(Error(_.Ua));
    };

    _.h.update = function (a) {
      _.H("PatchedMediaKeysApple.MediaKeySession.update");

      this.f = new _.gj();

      try {
        this.g.update(_.J(a));
      } catch (b) {
        this.f.reject(b);
      }

      return this.f;
    };

    _.h.close = function () {
      _.H("PatchedMediaKeysApple.MediaKeySession.close");

      try {
        this.g.close(), this.closed.resolve(), _.eh(this.h);
      } catch (a) {
        this.closed.reject(a);
      }

      return this.closed;
    };

    _.h.remove = function () {
      _.H("PatchedMediaKeysApple.MediaKeySession.remove");

      return Promise.reject(Error(_.Va));
    };

    _.h.wh = function (a) {
      _.H("PatchedMediaKeysApple.onWebkitKeyMessage_", a);

      this.a && (this.a.resolve(), this.a = null);
      a = new _.M(_.id, {
        messageType: void 0 == this.keyStatuses.a ? _.ad : _.$c,
        message: _.Yf(a.message.buffer)
      });
      this.dispatchEvent(a);
    };

    _.h.uh = function (a) {
      _.H("PatchedMediaKeysApple.onWebkitKeyAdded_", a);

      this.f && (an(this, _.ye), this.f.resolve(), this.f = null);
    };

    _.h.vh = function (a) {
      _.H("PatchedMediaKeysApple.onWebkitKeyError_", a);

      a = Error("EME PatchedMediaKeysApple key error");
      a.errorCode = this.g.error;
      if (null != this.a) this.a.reject(a), this.a = null;else if (null != this.f) this.f.reject(a), this.f = null;else switch (this.g.error.code) {
        case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
        case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
          an(this, _.Fd);
          break;

        default:
          an(this, _.Xc);
      }
    };

    var aq;
    _.h = Zm.prototype;

    _.h.forEach = function (a) {
      this.a && a(this.a, aq);
    };

    _.h.get = function (a) {
      if (this.has(a)) return this.a;
    };

    _.h.has = function (a) {
      var b = aq;
      return this.a && _.bi(_.J(a), _.J(b)) ? !0 : !1;
    };

    _.h.entries = function () {};

    _.h.keys = function () {};

    _.h.values = function () {};

    _.Gm(function () {
      window.HTMLVideoElement && window.WebKitMediaKeys && (_.Nf("Using Apple-prefixed EME"), aq = _.Yf(new Uint8Array([0])), delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Vm, window.MediaKeys = Ym, window.MediaKeySystemAccess = Sm, navigator.requestMediaKeySystemAccess = Tm);
    });

    _.Gm(function () {
      ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function (a, b) {
        b = void 0 !== b ? b : this.byteLength;
        a = Math.floor(a);
        b = Math.floor(b);
        0 > a && (a += this.byteLength);
        0 > b && (b += this.byteLength);
        a = Math.min(Math.max(0, a), this.byteLength);
        b = Math.min(Math.max(0, b), this.byteLength);
        if (0 >= b - a) return new ArrayBuffer(0);

        var c = new ArrayBuffer(b - a),
            d = _.J(c),
            e = new Uint8Array(this, a, b - a);

        d.set(e);
        return c;
      });
    });

    _.Gm(function () {
      _.H("mathRound.install");
    });

    var bn;

    _.Gm(function () {
      _.H("InputEvent.install");

      _.yi(_.mb) && HTMLInputElement.prototype.addEventListener !== cn && (_.Nf("Patching input event support on IE."), bn = HTMLInputElement.prototype.addEventListener, HTMLInputElement.prototype.addEventListener = cn);
    });

    en.prototype.release = function () {
      this.a.release();
      kn(this);
      this.l = null;
    };

    _.jm.prototype.abort = function () {
      this.a = !0;
      return this.w();
    };

    _.jm.prototype.gd = function (a, b) {
      function c() {
        e.reject(new _.K(_.L, 7, 7001));
        return d.abort();
      }

      var d = this,
          e = new _.gj();
      this.N.then(function (f) {
        d.a ? e.reject(new _.K(_.L, 7, 7001)) : a ? c = nn(a, f, e) : e.resolve(f);
      }, function (f) {
        b ? c = nn(b, f, e) : e.reject(f);
      });
      return new _.jm(e, function () {
        return c();
      });
    };

    _.jm.aborted = function () {
      var a = Promise.reject(new _.K(_.L, 7, 7001));
      a["catch"](function () {});
      return new _.jm(a, function () {
        return Promise.resolve();
      });
    };

    _.jm.prototype.chain = _.jm.prototype.gd;

    _.u(pn, _.jm);

    pn.prototype.then = function (a, b) {
      this.N = this.N.then(a, b);
      return this;
    };

    pn.prototype["catch"] = function (a) {
      this.N = this.N["catch"](a);
      return this;
    };

    pn.prototype.abort = function () {
      var a = this;
      if (this.a) return Promise.resolve();
      this.a = !0;
      return this.g.then(function (b) {
        a.m && clearTimeout(a.m);
        a.j && a.j();
        return b.abort();
      })["catch"](function () {});
    };

    var Gn = [154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149],
        An = [237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237],
        xn = [112, 115, 115, 104, 0, 0, 0, 0];

    _.u(zn, wn);

    _.u(Cn, wn);

    _.u(In, _.mm);

    _.h = In.prototype;

    _.h.Ga = function (a) {
      this.l = a;
    };

    _.h.Ca = function () {
      this.l = null;
    };

    _.h.sc = function () {
      var a = this.l.getConfiguration();

      if (a.drm && a.drm && a.drm.env === Ia) {
        a = a.drm.customData;
        if (!a) throw new _.K(_.L, 7, 7100, "config.drm.customData is not defined");
        a = new Jn(a.widevineLicenseUrl, a.playReadyLicenseUrl, a.fairPlayLicenseUrl, a.fairPlayCertificateUrl, a.fairPlayContentIdStrategy || bq);

        _.Xj(a);
      }
    };

    _.h.release = function () {};

    _.h.id = function () {
      return "headerdrm";
    };

    _.A("clpp.drm.HeaderDrmComponent", In);

    _.u(Jn, _.Qj);

    Jn.prototype.Uc = function (a, b) {
      for (var c = a.drm.customData.headers || {}, d = _.t(Object.keys(c)), e = d.next(); !e.done; e = d.next()) {
        e = e.value, b.headers[e] = c[e];
      }
    };

    Jn.prototype.mf = function (a, b) {
      var c = rk(b);

      switch (this.o) {
        case bq:
          return c;

        case cq:
          return new _.mk(c).f;

        default:
          throw Error("Unknown content ID strategy");
      }
    };

    Jn.prototype.Kf = function (a, b) {
      b.headers[ta] = Wb;
      this.Uc(a, b);
      var c = {
        spc: _.Xh(b.body)
      };
      b.body = _.fg(ok(c, !0));
    };

    Jn.prototype.Lf = function (a, b) {
      var c = _.$f(b.data).trim(),
          d = "\x3c/ckc\x3e" === c.substr(-6);

      "\x3cckc\x3e" === c.substr(0, 5) && d && (c = c.slice(5, -6));
      b.data = _.Zh(c).buffer;
    };

    _.A(uc, Jn);

    Jn.prototype.onFairPlayLicenseResponse = Jn.prototype.Lf;
    Jn.prototype.onFairPlayLicenseRequest = Jn.prototype.Kf;
    Jn.prototype.extractFairPlayContentId = Jn.prototype.mf;
    Jn.prototype.onLicenseRequest = Jn.prototype.Uc;
    Jn.prototype.constructor = Jn.prototype.constructor;
    Jn.NAME = Ia;
    var cq = "hostname",
        bq = "full-skd";
    Jn.FairPlayContentIdStrategy = {
      HOSTNAME: cq,
      FULL_SKD: bq
    };

    Mn.prototype.verify = function (a, b) {
      var c = {
        kty: "RSA",
        n: a.n,
        e: a.e
      },
          d = this.g + "." + this.f,
          e = this.h;
      return new Promise(function (f, g) {
        try {
          var k = window && window.crypto && window.crypto.subtle;
        } catch (m) {}

        if (k) {
          var l = {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
              name: "SHA-256"
            }
          };
          k.importKey("jwk", c, l, !1, ["verify"]).then(function (m) {
            var n = _.dg(d),
                p = _.Zh(e);

            return k.verify(l, m, p.buffer, n.buffer);
          }).then(function (m) {
            m ? f() : g(jb);
          })["catch"](g);
        } else b ? g("Web Crypto API is not supported") : f();
      });
    };

    var dq = {
      n: "vXdoJIQCz6sZ9pbduNukEHOR0H2dHlwuuBUAR5Ot7WLEYvav5mn63yxr6F6TIl8RHTFw2siXQhHblZH2Y89o8vhcZRFkYXo6h0igEVafu-n0w52UEcH8Cqzlb8Q7x03Qb8OcKLngSzDkwe5Y2Aix6I66RRVNLLssqyjp2n5tXs4JQmYdqY6hhpGhmBN84naeCTdcPpAYhCw8jqbTSNrJp5hjU4GVvOiUtoYCvdESV9xrOR7fPCFXhWfLtC3i1k1zVoIM7YW5qD0F676jhqkF-GmDuCHpRY2I2Cxui-ytYEVIM6_pylSIlmYLjARmv2jXz9aV_WvHLh6B8Yx0slNGCQ",
      e: "AQAB"
    },
        Bj = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cmxzIjpbIjovL2Nhc3RsYWJzLmNvbSJdLCJ0eXBlIjoiV2ViIiwia2lkIjoxOTUwLCJpbHYiOmZhbHNlfQ.jzGGRcbFr_2QET-4tbMcpR5pSaj7eV7X2d1HWw_VKQpPg3zCwSZSDuqw225dIYyAYwLSiElbozbZPSArkBXOsoUm-KZRUPF4m7WG0T7Uza5G-QaQw57BbbfcSsooSpatC997kHKLMTjO71By9Olcu5ykN164nZpGQtZNzQjYag-bnUaMVI5vvhzjlvDihORQ9V_qRlEh0-mpoz6W0-36HGAbWIXWq0kxPh6inbovby-ZmFpqGrVjWOEFa55EARZXPNW9ERupW5xrrYHZdwwTpdRTY5IwEnobS85yTrLhK8Y2MV4jlQLTtQp372fKDsuU6q6_4XvmNq1SgAoKoaf41g";

    Nn.prototype.verify = function () {
      var a = this;
      return new Promise(function (b, c) {
        try {
          var d = On(a);
          b(d);
        } catch (e) {
          c();
        }
      }).then(function (b) {
        return b.verify(dq);
      })["catch"](function (b) {
        if (b && b !== jb) {
          var c = window.location.href;
          var d = new _.jj(c);
          c = d.Ra || d.Fa ? d : new _.jj("//" + c);
          if (/(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)|(^localhost)/.test(c.Fa)) return Promise.resolve();
        }

        throw b;
      });
    };

    var Zn = "vod",
        Yn = "live";

    _.ao.prototype.start = function () {
      var a = this;
      this.a = new ResizeObserver(function (b) {
        b = b[0];
        a.g(b.contentRect.width, b.contentRect.height, a.f.isFullscreen());
      });
      this.a.observe(this.h);
    };

    _.ao.prototype.stop = function () {
      this.a && (this.a.disconnect(), this.a = null);
    };

    _.wj.prototype.destroy = function () {
      for (var a = [], b = _.t(this.a), c = b.next(); !c.done; c = b.next()) {
        c = c.value, c.N["catch"](function () {}), a.push(c.abort());
      }

      this.a = [];
      return Promise.all(a);
    };

    var co = new Map([["aar", "aa"], ["abk", "ab"], ["afr", "af"], ["aka", "ak"], ["alb", "sq"], ["amh", "am"], ["ara", "ar"], ["arg", "an"], ["arm", "hy"], ["asm", "as"], ["ava", "av"], ["ave", "ae"], ["aym", "ay"], ["aze", "az"], ["bak", "ba"], ["bam", "bm"], ["baq", "eu"], ["bel", "be"], ["ben", "bn"], ["bih", "bh"], ["bis", "bi"], ["bod", "bo"], ["bos", "bs"], ["bre", "br"], ["bul", "bg"], ["bur", "my"], ["cat", "ca"], ["ces", "cs"], ["cha", "ch"], ["che", "ce"], ["chi", "zh"], ["chu", "cu"], ["chv", "cv"], ["cor", "kw"], ["cos", "co"], ["cre", "cr"], ["cym", "cy"], ["cze", "cs"], ["dan", "da"], ["deu", "de"], [_.Gc, "dv"], ["dut", "nl"], ["dzo", "dz"], ["ell", "el"], ["eng", "en"], ["epo", "eo"], ["est", "et"], ["eus", "eu"], ["ewe", "ee"], ["fao", "fo"], ["fas", "fa"], ["fij", "fj"], ["fin", "fi"], ["fra", "fr"], ["fre", "fr"], ["fry", "fy"], ["ful", "ff"], ["geo", "ka"], ["ger", "de"], ["gla", "gd"], ["gle", "ga"], ["glg", "gl"], ["glv", "gv"], ["gre", "el"], ["grn", "gn"], ["guj", "gu"], ["hat", "ht"], ["hau", "ha"], ["heb", "he"], ["her", "hz"], ["hin", "hi"], ["hmo", "ho"], ["hrv", "hr"], ["hun", "hu"], ["hye", "hy"], ["ibo", "ig"], ["ice", "is"], ["ido", "io"], ["iii", "ii"], ["iku", "iu"], ["ile", "ie"], ["ina", "ia"], ["ind", "id"], ["ipk", "ik"], ["isl", "is"], ["ita", "it"], ["jav", "jv"], ["jpn", "ja"], ["kal", "kl"], ["kan", "kn"], ["kas", "ks"], ["kat", "ka"], ["kau", "kr"], ["kaz", "kk"], ["khm", "km"], ["kik", "ki"], ["kin", "rw"], ["kir", "ky"], ["kom", "kv"], ["kon", "kg"], ["kor", "ko"], ["kua", "kj"], ["kur", "ku"], ["lao", "lo"], ["lat", "la"], ["lav", "lv"], ["lim", "li"], ["lin", "ln"], ["lit", "lt"], ["ltz", "lb"], ["lub", "lu"], ["lug", "lg"], ["mac", "mk"], ["mah", "mh"], ["mal", "ml"], ["mao", "mi"], ["mar", "mr"], ["may", "ms"], ["mkd", "mk"], ["mlg", "mg"], ["mlt", "mt"], ["mon", "mn"], ["mri", "mi"], ["msa", "ms"], ["mya", "my"], ["nau", "na"], ["nav", "nv"], ["nbl", "nr"], ["nde", "nd"], ["ndo", "ng"], ["nep", "ne"], ["nld", "nl"], ["nno", "nn"], ["nob", "nb"], ["nor", "no"], ["nya", "ny"], ["oci", "oc"], ["oji", "oj"], ["ori", "or"], ["orm", "om"], ["oss", "os"], ["pan", "pa"], ["per", "fa"], ["pli", "pi"], ["pol", "pl"], ["por", "pt"], ["pus", "ps"], ["que", "qu"], ["roh", "rm"], ["ron", "ro"], ["rum", "ro"], ["run", "rn"], ["rus", "ru"], ["sag", "sg"], ["san", "sa"], ["sin", "si"], ["slk", "sk"], ["slo", "sk"], ["slv", "sl"], ["sme", "se"], ["smo", "sm"], ["sna", "sn"], ["snd", "sd"], ["som", "so"], ["sot", "st"], ["spa", "es"], ["sqi", "sq"], ["srd", "sc"], ["srp", "sr"], ["ssw", "ss"], ["sun", "su"], ["swa", "sw"], ["swe", "sv"], ["tah", "ty"], ["tam", "ta"], ["tat", "tt"], ["tel", "te"], ["tgk", "tg"], ["tgl", "tl"], ["tha", "th"], ["tib", "bo"], ["tir", "ti"], ["ton", "to"], ["tsn", "tn"], ["tso", "ts"], ["tuk", "tk"], ["tur", "tr"], ["twi", "tw"], ["uig", "ug"], ["ukr", "uk"], ["urd", "ur"], ["uzb", "uz"], ["ven", "ve"], ["vie", "vi"], ["vol", "vo"], ["wel", "cy"], ["wln", "wa"], ["wol", "wo"], ["xho", "xh"], ["yid", "yi"], ["yor", "yo"], ["zha", "za"], ["zho", "zh"], ["zul", "zu"]]);

    _.ho.prototype.canPlay = function (a) {
      function b(f) {
        e.stop();
        d.resolve(f);
      }

      var c = document.createElement(_.Ee);
      c.setAttribute("playsinline", "playsinline");
      a && (c.muted = !0, c.setAttribute("muted", "muted"));
      c.src = URL.createObjectURL(this.a);
      var d = new _.gj();
      c = c.play();
      var e = new _.Ah(function () {
        b(a);
      }).X(.25);
      void 0 !== c ? c.then(function () {
        return b(!0);
      })["catch"](function (f) {
        f && f.message && f.message === _.Za ? b(!0) : b(!1);
      }) : b(!0);
      return d;
    };

    var go = new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49]);

    _.u(T, _.Vh);

    _.h = T.prototype;

    _.h.init = function () {};

    _.h.onError = function (a) {
      if (null !== this.a) this.a.onError(a);else this.trigger(new _.M(_.Rc, {
        detail: a
      }));
    };

    _.h.Tb = function (a) {
      a = this.M[a];
      void 0 === a && (a = null);
      return a;
    };

    _.h.getSurface = function () {
      return this.h;
    };

    _.h.getConfiguration = function () {
      return _.B.ua(this.f);
    };

    _.h.getDrmInfo = function () {
      return this.a ? this.a.getDrmInfo() : null;
    };

    _.h.unload = function () {
      return this.a ? this.a.unload() : Promise.resolve();
    };

    _.h.release = function () {
      var a = this;
      if (null != this.w) return this.g.info("Player release already in progress"), this.w;
      this.g.debug("Releasing player");
      this.w = to(this);
      return this.w["finally"](function () {
        a.g.debug("Player released");
        a.w = null;
      });
    };

    _.h.destroy = function () {
      var a = this;
      if (this.D) return this.g.debug("The player is already destroyed. No-op"), new Promise(function (b) {
        return b();
      });
      this.D = !0;
      return this.release().then(function () {
        a.g.debug(za);
        a.trigger(new _.M("destroying"));
        return a.bc(_.zd);
      }).then(function () {
        a.a && a.a.removeDelegate(a);
        a.Oc.clear();
        a.V.release();
        if (a.a) return a.a.destroy();
      }).then(function () {
        Mj(function (b) {
          b.Ca();
        });

        _.Ij.clear();

        a.a = null;
        a.trigger(new _.M("destroyed"));
      });
    };

    _.h.load = function (a) {
      var b = this;
      return _.z(function (c) {
        return 1 == c.a ? _.v(c, _.xo(b, a), 2) : 3 != c.a ? _.v(c, _.yo(b), 3) : _.v(c, _.Ao(b), 0);
      });
    };

    _.h.bc = function (a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) {
        c[d - 1] = arguments[d];
      }

      var e = this;
      d = this.K.map(function (f) {
        var g = f[a];
        return g.call.apply(g, [f, e].concat(_.ff(c)));
      }).filter(function (f) {
        return f instanceof Promise;
      });
      return Promise.all(d);
    };

    _.h.use = function (a) {
      a = new a();
      a.Ga(this);

      _.Lj(a);
    };

    _.h.remove = function (a) {
      if (this.getState() <= _.Co || this.I) {
        var b = "";
        Mj(function (c) {
          c instanceof a && (b = c.id(), c.Ca());
        });
        if (b) return _.Ij["delete"](b), this.J = !0;
      }

      return !1;
    };

    _.h.play = function () {
      return this.a ? this.j && this.a.namespace() !== _.tc ? this.j.start(this.a) : this.a.play() : Promise.reject("No player initialized. You need to load content before calling play.");
    };

    _.h.pause = function () {
      return this.a ? this.a.pause() : Promise.reject("No player initialized. You need to load content before calling pause.");
    };

    _.h.getTrackManager = function () {
      return this.a && this.a.getTrackManager();
    };

    _.h.getBufferInfo = function (a) {
      return this.a ? this.a.getBufferInfo(a) : new _.Uh();
    };

    _.h.getState = function () {
      return this.a ? this.a.getState() : _.Co;
    };

    _.h.getPeriods = function () {
      return this.a ? this.a.getPeriods() : [];
    };

    _.h.isEnded = function () {
      return this.a && this.a.isEnded() || !1;
    };

    _.h.isPaused = function () {
      return this.a && this.a.isPaused() || !1;
    };

    _.h.getPosition = function () {
      return this.a ? this.a.getPosition() : 0;
    };

    _.h.seek = function (a) {
      return this.getState() === _.hm ? Promise.reject("Cannot seek in current state.") : this.a ? this.a.seek(a) : Promise.reject("delegate does not exist");
    };

    _.h.getPresentationStartTime = function () {
      return this.a ? this.a.getPresentationStartTime() : 0;
    };

    _.h.getSeekRange = function () {
      return this.a ? this.a.getSeekRange() : {
        start: 0,
        end: 0
      };
    };

    _.h.getVolume = function () {
      return this.a ? this.a.getVolume() : null;
    };

    _.h.setVolume = function (a) {
      this.a && this.a.setVolume(a);
    };

    _.h.getDuration = function () {
      return this.a ? this.a.getDuration() : -1;
    };

    _.h.getAdsManager = function () {
      return this.j;
    };

    _.h.namespace = function () {
      return this.a && this.a.namespace() || "Undefined";
    };

    _.h.canPlay = function (a) {
      return this.a ? this.a.canPlay(a) : 0;
    };

    _.h.getPlaybackRate = function () {
      return this.a ? this.a.getPlaybackRate() : 1;
    };

    _.h.setPlaybackRate = function (a) {
      this.a && this.a.setPlaybackRate(a);
    };

    _.h.isMuted = function () {
      return this.a && this.a.isMuted() || !1;
    };

    _.h.setMuted = function (a) {
      this.a && this.a.setMuted(a);
    };

    _.h.getNetworkEngine = function () {
      return this.H;
    };

    _.h.setNetworkEngine = function (a) {
      this.H = a;
    };

    _.h.getTextDisplayer = function () {
      return this.a && this.a.getTextDisplayer();
    };

    _.h.isLive = function () {
      return !!this.a && this.a.isLive();
    };

    _.h.getStats = function () {
      return this.a ? this.a.getStats() : null;
    };

    _.h.rd = function () {
      return Object.freeze(this.m);
    };

    _.h.setSourceIndex = function (a) {
      this.a && this.a.setSourceIndex(a);
    };

    _.h.getSourceIndex = function () {
      return this.a ? this.a.getSourceIndex() : -1;
    };

    _.h.getLoadedSource = function () {
      return this.a && this.a.getLoadedSource();
    };

    _.h.getTimelineCues = function () {
      return this.a ? this.a.getTimelineCues() : [];
    };

    _.h.resetAbr = function () {
      this.a && this.a.resetAbr();
    };

    _.h.setDrmCustomDataModifier = function (a) {
      this.vc = a;
      vo(this);
    };

    _.h.setCdnErrorCallback = function (a) {
      this.C = a;
      this.a && this.a.setCdnErrorCallback(this.C);
    };

    _.h.Ff = function () {
      this.Vd = !0;
    };

    _.A("clpp.Player", T);

    T.registerPlugin = _.Bo;
    T.prototype.setCdnErrorCallback = T.prototype.setCdnErrorCallback;
    T.prototype.setDrmCustomDataModifier = T.prototype.setDrmCustomDataModifier;
    T.prototype.resetAbr = T.prototype.resetAbr;
    T.prototype.getTimelineCues = T.prototype.getTimelineCues;
    T.prototype.getLoadedSource = T.prototype.getLoadedSource;
    T.prototype.getSources = T.prototype.rd;
    T.prototype.getStats = T.prototype.getStats;
    T.prototype.isLive = T.prototype.isLive;
    T.prototype.getTextDisplayer = T.prototype.getTextDisplayer;
    T.prototype.setNetworkEngine = T.prototype.setNetworkEngine;
    T.prototype.getNetworkEngine = T.prototype.getNetworkEngine;
    T.prototype.setMuted = T.prototype.setMuted;
    T.prototype.isMuted = T.prototype.isMuted;
    T.prototype.setPlaybackRate = T.prototype.setPlaybackRate;
    T.prototype.getPlaybackRate = T.prototype.getPlaybackRate;
    T.prototype.namespace = T.prototype.namespace;
    T.prototype.getAdsManager = T.prototype.getAdsManager;
    T.prototype.getDuration = T.prototype.getDuration;
    T.prototype.setVolume = T.prototype.setVolume;
    T.prototype.getVolume = T.prototype.getVolume;
    T.prototype.getSeekRange = T.prototype.getSeekRange;
    T.prototype.getPresentationStartTime = T.prototype.getPresentationStartTime;
    T.prototype.seek = T.prototype.seek;
    T.prototype.getPosition = T.prototype.getPosition;
    T.prototype.isPaused = T.prototype.isPaused;
    T.prototype.isEnded = T.prototype.isEnded;
    T.prototype.getState = T.prototype.getState;
    T.prototype.getBufferInfo = T.prototype.getBufferInfo;
    T.prototype.getTrackManager = T.prototype.getTrackManager;
    T.prototype.pause = T.prototype.pause;
    T.prototype.play = T.prototype.play;
    T.prototype.remove = T.prototype.remove;
    T.prototype.use = T.prototype.use;
    T.prototype.load = T.prototype.load;
    T.prototype.destroy = T.prototype.destroy;
    T.prototype.release = T.prototype.release;
    T.prototype.getDrmInfo = T.prototype.getDrmInfo;
    T.prototype.getConfiguration = T.prototype.getConfiguration;
    T.prototype.getSurface = T.prototype.getSurface;
    T.prototype.getPlugin = T.prototype.Tb;
    _.Co = 0;
    _.Mo = 1;
    _.jn = 2;
    _.no = 3;
    _.No = 4;
    _.Io = 5;
    _.hm = 6;
    _.Do = 7;
    _.Ko = {
      IDLE: _.Co,
      PREPARING: _.Mo,
      BUFFERING: _.jn,
      PLAYING: _.no,
      PAUSED: _.No,
      ENDED: _.Io,
      ERROR: _.hm,
      UNSET: _.Do
    };
    T.State = _.Ko;
    var qo = [];

    Fo.prototype.Mb = function (a, b) {
      this.l && this.l.trigger(new _.M(a, {
        detail: b
      }));
    };

    Fo.prototype.getState = function () {
      return Ho(this, "");
    };

    Fo.prototype.destroy = function () {
      this.g.debug("Stop watching for video events for " + this.l.namespace());
      this.a.release();
    };

    _.Po.prototype.a = function () {
      return this.keyInfo;
    };

    _.Qo.prototype.getPosition = function () {
      return this.position;
    };

    _.Qo.prototype.a = function () {
      return this.keyInfo;
    };

    _.h = _.Ro.prototype;

    _.h.getDuration = function () {
      return this.h;
    };

    _.h.Lb = function (a) {
      this.h = a;
    };

    _.h.getPresentationStartTime = function () {
      return this.m;
    };

    _.h.Yb = function () {
      return this.B;
    };

    _.h.offset = function (a) {
      null != this.j && (this.j += a);
      null != this.g && (this.g += a);
    };

    _.h.isLive = function () {
      return Infinity == this.h && !this.f;
    };

    _.h = _.Xo.prototype;

    _.h.destroy = function () {
      this.a = [];
      return Promise.resolve();
    };

    _.h.Kc = function (a) {
      for (var b = this.a.length - 1; 0 <= b; --b) {
        var c = this.a[b];
        if (a >= c.startTime && a < c.endTime) return c.position;
      }

      return this.a.length && a < this.a[0].startTime ? this.a[0].position : null;
    };

    _.h.get = function (a) {
      if (0 == this.a.length) return null;
      a -= this.a[0].position;
      return 0 > a || a >= this.a.length ? null : this.a[a];
    };

    _.h.offset = function (a) {
      this.f.info("Apply offset" + a + " to segment index");

      for (var b = _.t(this.a), c = b.next(); !c.done; c = b.next()) {
        c = c.value, c.startTime += a, c.endTime += a, c.ub -= a;
      }
    };

    _.h.Hc = function (a, b) {
      var c = a - this.a[0].position;
      if (0 <= c && c < this.a.length) for (this.f.warn("Accounting for segment duration drift", b, "at", c), this.a[c].endTime += b, c += 1; c < this.a.length; ++c) {
        this.a[c].startTime += b, this.a[c].endTime += b;
      }
    };

    _.h.getDuration = function () {
      return this.a[this.a.length - 1].endTime - this.a[0].startTime;
    };

    _.h.Qa = function (a) {
      for (var b = [], c = [], d = 0, e = 0; d < this.a.length && e < a.length;) {
        var f = this.a[d],
            g = a[e];
        f.startTime < g.startTime ? (b.push(f), d++) : (f.startTime > g.startTime ? 0 === d ? c.push(g) : this.f.warn("Refusing to rewrite original references on update!") : (.1 < Math.abs(f.endTime - g.endTime) ? b.push(new _.Qo(f.position, g.startTime, g.endTime, g.Pa, g.Ia, g.va, g.ub, g.keyInfo, g.uc, g.timescale, g.horizontalTiles, g.verticalTiles, g.durationPerTile)) : b.push(f), d++), e++);
      }

      for (; d < this.a.length;) {
        b.push(this.a[d++]);
      }

      if (b.length) for (d = b[b.length - 1].position + 1; e < a.length;) {
        f = a[e++], f = new _.Qo(d++, f.startTime, f.endTime, f.Pa, f.Ia, f.va, f.ub, f.keyInfo, f.uc, f.timescale, f.horizontalTiles, f.verticalTiles, f.durationPerTile), b.push(f);
      } else b = a;
      a = b;

      if (c.length && b.length) {
        a = [];
        e = b[0].position;
        d = c.length;
        c = _.t(c);

        for (f = c.next(); !f.done; f = c.next()) {
          f = f.value, a.push(new _.Qo(e - d--, f.startTime, f.endTime, f.Pa, f.Ia, f.va, f.ub, f.keyInfo, f.uc, f.timescale, f.horizontalTiles, f.verticalTiles, f.durationPerTile));
        }

        b = _.t(b);

        for (f = b.next(); !f.done; f = b.next()) {
          a.push(f.value);
        }
      }

      this.a = a;
    };

    _.h.replace = function (a) {
      this.a = a;
    };

    _.h = $o.prototype;

    _.h.load = function () {
      return Promise.resolve();
    };

    _.h.start = function (a) {
      return a.play();
    };

    _.h.resume = function () {};

    _.h.pause = function () {};

    _.h.skip = function () {};

    _.h.getVolume = function () {
      return 1;
    };

    _.h.setVolume = function () {};

    _.h.getPosition = function () {
      return -1;
    };

    _.h.dispose = function () {
      return _.z(function (a) {
        _.w(a);
      });
    };

    $o.prototype.dispose = $o.prototype.dispose;
    $o.prototype.getPosition = $o.prototype.getPosition;
    $o.prototype.setVolume = $o.prototype.setVolume;
    $o.prototype.getVolume = $o.prototype.getVolume;
    $o.prototype.skip = $o.prototype.skip;
    $o.prototype.pause = $o.prototype.pause;
    $o.prototype.resume = $o.prototype.resume;
    $o.prototype.start = $o.prototype.start;
    $o.prototype.load = $o.prototype.load;

    ap.prototype.name = function () {
      return "clpp.ads.NopAdsManagerFactory";
    };

    ap.prototype.$ = function () {
      return !0;
    };

    ap.prototype.create = function () {
      return new $o();
    };

    ap.prototype.create = ap.prototype.create;
    ap.prototype.isSupported = ap.prototype.$;
    ap.prototype.name = ap.prototype.name;

    bp.prototype.name = function () {};

    bp.prototype.$ = function () {};

    bp.prototype.create = function () {};

    _.A("clpp.ads.IAdsManagerFactory", bp);

    bp.prototype.create = bp.prototype.create;
    bp.prototype.isSupported = bp.prototype.$;
    bp.prototype.name = bp.prototype.name;

    _.A("clpp.ads.PodType", {
      PREROLL: 0,
      MIDROLL: 1,
      POSTROLL: 2
    });

    _.A("clpp.ads.Technology", {
      CLIENT_SIDE: 0,
      SERVER_SIDE: 1
    });

    _.A("clpp.ads.ErrorType", {
      LOAD: 0,
      PLAY: 1,
      OTHER: 2
    });

    var dp = new _.F("clpp.ads"),
        cp = [];
    _.h = fp.prototype;

    _.h.load = function () {};

    _.h.start = function () {};

    _.h.resume = function () {};

    _.h.pause = function () {};

    _.h.skip = function () {};

    _.h.getVolume = function () {};

    _.h.setVolume = function () {};

    _.h.getPosition = function () {};

    _.h.dispose = function () {};

    _.A("clpp.ads.IAdsManager", fp);

    fp.prototype.getPosition = fp.prototype.getPosition;
    fp.prototype.setVolume = fp.prototype.setVolume;
    fp.prototype.getVolume = fp.prototype.getVolume;
    fp.prototype.skip = fp.prototype.skip;
    fp.prototype.pause = fp.prototype.pause;
    fp.prototype.resume = fp.prototype.resume;
    _.h = U.prototype;

    _.h.kb = function () {};

    _.h.lb = function () {};

    _.h.qb = function () {};

    _.h.Z = function () {};

    _.h.getCreativeId = function () {};

    _.h.getApiFramework = function () {};

    _.h.getAdSystem = function () {};

    _.h.getAdvertiserName = function () {};

    _.h.getTitle = function () {};

    _.h.getDuration = function () {};

    _.h.getSkipTimeOffset = function () {};

    _.h.Xb = function () {};

    _.h.Db = function () {};

    _.h.getMediaUrl = function () {};

    _.h.nb = function () {};

    _.h.mb = function () {};

    _.h.Ya = function () {};

    _.h.Oa = function () {};

    _.h.getPodIndex = function () {};

    _.h.Eb = function () {};

    _.h.Fb = function () {};

    _.h.pb = function () {};

    _.h.getWrapperAdIds = function () {};

    _.h.getWrapperAdSystems = function () {};

    _.h.getWrapperCreativeIds = function () {};

    _.A("clpp.ads.IAd", U);

    U.prototype.getWrapperCreativeIds = U.prototype.getWrapperCreativeIds;
    U.prototype.getWrapperAdSystems = U.prototype.getWrapperAdSystems;
    U.prototype.getWrapperAdIds = U.prototype.getWrapperAdIds;
    U.prototype.getSequenceLength = U.prototype.pb;
    U.prototype.getPositionInSequence = U.prototype.Fb;
    U.prototype.getPodTimeOffset = U.prototype.Eb;
    U.prototype.getPodIndex = U.prototype.getPodIndex;
    U.prototype.getPodType = U.prototype.Oa;
    U.prototype.getMediaBitrate = U.prototype.Ya;
    U.prototype.getMediaHeight = U.prototype.mb;
    U.prototype.getMediaWidth = U.prototype.nb;
    U.prototype.getMediaUrl = U.prototype.getMediaUrl;
    U.prototype.getClickThroughUrl = U.prototype.Db;
    U.prototype.isBumper = U.prototype.Xb;
    U.prototype.getSkipTimeOffset = U.prototype.getSkipTimeOffset;
    U.prototype.getDuration = U.prototype.getDuration;
    U.prototype.getTitle = U.prototype.getTitle;
    U.prototype.getAdvertiserName = U.prototype.getAdvertiserName;
    U.prototype.getAdSystem = U.prototype.getAdSystem;
    U.prototype.getApiFramework = U.prototype.getApiFramework;
    U.prototype.getCreativeId = U.prototype.getCreativeId;
    U.prototype.getId = U.prototype.Z;
    U.prototype.getTechnology = U.prototype.qb;
    U.prototype.getAdManagerVersion = U.prototype.lb;
    U.prototype.getAdManagerName = U.prototype.kb;

    gp.prototype.getCuePoints = function () {};

    gp.prototype.Gb = function () {};

    gp.prototype.Za = function () {};

    _.A("clpp.ads.IAdsTimeline", gp);

    gp.prototype.hasPostroll = gp.prototype.Za;
    gp.prototype.hasPreroll = gp.prototype.Gb;
    gp.prototype.getCuePoints = gp.prototype.getCuePoints;

    _.hp.prototype.onContentWillLoad = function () {
      return Promise.resolve();
    };

    _.hp.prototype.onContentLoaded = function (a, b) {
      for (var c = 1; c < arguments.length; ++c) {
        ;
      }

      return Promise.resolve();
    };

    _.hp.prototype.onPlayerWillDestroy = function () {};

    _.hp.prototype.onPlayerWillRelease = function () {};
  }).call(g, this);
  g.clpp._ = _;

  if (typeof module != "undefined" && module.exports) {
    module.exports = g.clpp;
  } else if (typeof define != "undefined" && define.amd) {
    define(function () {
      return g.clpp;
    });
  } else {
    this.clpp = g.clpp;
  }
})();