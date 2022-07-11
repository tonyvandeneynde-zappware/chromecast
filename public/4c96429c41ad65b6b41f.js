function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  var g = {};

  var _ = _ || {};

  var f = function f(window) {
    var MI = "Cannot seek during ads playout.",
        NI = "Cannot switch track",
        OI = "Media session does not exist.",
        PI = "No receivers available",
        QI = "Reset ABR functionality not available on cast.",
        RI = "SDK not yet ready",
        SI = "Sender is destroyed.",
        TI = "clpp.cast.CastProxy",
        UI = "clpp.cast.Player",
        VI = "clpp.cast.Receiver",
        WI = "urn:x-cast:castlabs",
        XI = "urn:x-cast:com.google.cast.media",
        YI = function YI(a) {
      return _.z(function (b) {
        return 1 == b.a ? _.v(b, a.bc(_.Ad), 2) : _.v(b, a.bc(_.zd), 0);
      });
    },
        ZI = function ZI(a, b) {
      this.log = new _.F(b);
      this.a = a;
      this.j = null;
      this.g = _.Co;
      this.m = _.Do;
      this.h = 2;
      this.B = Date.now();
      this.A = -1;
    },
        $I = function $I(a) {
      return JSON.stringify(a, function (b, c) {
        if ("license" !== b && _typeof(c) !== _.Tc) {
          if (c instanceof Event) {
            var d = {},
                e;

            for (e in c) {
              var f = c[e];
              _typeof(f) === _.vd ? "detail" === e && (d[e] = f) : e in Event || (d[e] = f);
            }

            return d;
          }

          return _typeof(c) === _.ud ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
        }
      });
    },
        aJ = function aJ(a) {
      if (_typeof(a) !== _.ge) return a;

      try {
        return JSON.parse(a, function (b, c) {
          return "NaN" === c ? NaN : "-Infinity" === c ? -Infinity : "Infinity" === c ? Infinity : c;
        });
      } catch (b) {
        return a;
      }
    },
        bJ = function bJ(a, b, c) {
      var d, e, f, g, k, l, m, n;
      return _.z(function (p) {
        if (1 == p.a) {
          if (b.includes(a.mimeType)) return p["return"](a);
          f = e = d = null;

          for (g = 0; g < b.length && !e;) {
            f = b[g++], e = _.zg(a.mimeType, f);
          }

          if (!e || !f) return p.G(2);
          k = _.Fh(a.url);
          return _.v(p, c.fetch(k).N, 3);
        }

        2 != p.a && (l = p.f) && l.data && (m = e.a(_.J(l.data)), n = URL.createObjectURL(new Blob([m])), d = {
          url: n,
          kind: a.kind,
          language: a.language,
          label: a.label,
          mimeType: f
        });
        return p["return"](d);
      });
    },
        cJ = function cJ(a, b) {
      if (window.chrome && chrome.cast && chrome.cast.media) {
        var c = chrome.cast.media.HlsSegmentFormat;
        var d = chrome.cast.media.HlsVideoSegmentFormat;
      } else if (window.cast && cast.framework && cast.framework.messages) c = cast.framework.messages.HlsSegmentFormat, d = cast.framework.messages.HlsVideoSegmentFormat;else return;

      switch (a) {
        case _.Ge:
          return d.FMP4;

        case _.Fe:
          return b === _.sh ? d.MPEG2_TS : c.TS;

        case _.Yb:
          return c.AAC;

        case _.Zb:
          return c.AC3;

        case _.$b:
          return c.E_AC3;

        case "audio/mpeg":
          return c.MP3;

        case _.ac:
          return c.FMP4;
      }
    },
        dJ = function dJ(a) {
      ZI.call(this, a, "clpp.cast.SenderStateManager");
      this.o = this.f = null;
      this.w = this.C.bind(this);
    },
        eJ = function eJ() {
      this.h = new _.F("clpp.cast.SenderTrackManager");
      this.a = null;
      this.g = [];
      this.f = {};
    },
        fJ = function fJ(a) {
      return (a = a.a ? a.a.a : null) ? a.activeTrackIds.map(function (b) {
        return b.toString();
      }) : [];
    },
        hJ = function hJ(a, b) {
      var c = fJ(a);
      return gJ(a, b).find(function (d) {
        return c.includes(d.id);
      }) || null;
    },
        gJ = function gJ(a, b) {
      return a.g.filter(function (c) {
        return c.type === b;
      });
    },
        jJ = function jJ(a, b, c) {
      var d = a.a.a;
      if (d) if (c) {
        a.f[b] = c.renditions[0];
        c = [+c.id];

        if (b !== _.O) {
          var e = a.ha();
          e && c.push(+e.id);
        }

        c = new chrome.cast.media.EditTracksInfoRequest(c);
        d.editTracksInfo(c, function () {
          a.f[b] = null;
          iJ(a, b);
        }, function (f) {
          a.f[b] = null;
          a.h.debug(NI, f);
        });
      } else b === _.O && (c = new chrome.cast.media.EditTracksInfoRequest([]), d.editTracksInfo(c, function () {
        iJ(a, b);
      }, function (f) {
        a.h.debug(NI, f);
      }));
    },
        iJ = function iJ(a, b) {
      b === _.Q ? a.a.trigger(new _.M(_.Nh)) : b === _.O && a.a.trigger(new _.M(_.Oh));
    },
        nJ = function nJ(a, b, c, d) {
      _.Vh.call(this);

      this.m = new _.F(_.tc);
      this.aa = a;
      this.w = new _.Ah(b);
      this.Y = c;
      this.ia = d;
      this.j = this.K = _.Dj();
      this.D = [];
      this.C = 0;
      this.M = new _.xj();
      this.I = this.o = this.a = null;
      this.B = this.A = !1;
      this.Da = "";
      this.Ka = 1E6;
      this.g = new eJ();
      this.g.Cb(this);
      this.h = new dJ(this);
      this.J = new _.bh();
      this.f = null;
      this.H = new Set();
      this.S = this.Li.bind(this);
      this.Ea = this.hj.bind(this);
      this.ca = this.Wi.bind(this);
      this.V = this.Pi.bind(this);
      this.P = null;
      window.hasOwnProperty("cast") || Object.defineProperty(window, "cast", {
        get: function get() {
          return window.cast_;
        },
        set: function set(e) {
          window.cast_ = e;
          window.setTimeout(function () {
            kJ(!0);
          }, 0);
        }
      });
      lJ(this);
      mJ.add(this);
    },
        oJ = function oJ(a) {
      var b, c;
      return _.z(function (d) {
        if (1 == d.a) return mJ["delete"](a), a.A && (a.A = !1, b = cast.framework.CastContext.getInstance(), b.removeEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, a.S), b.removeEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, a.Ea)), c = [], a.g && (c.push(a.g.destroy()), a.g = null), a.h && (c.push(a.h.destroy()), a.h = null), _.v(d, Promise.all(c), 2);
        a.B = !1;
        a.w && (a.w.stop(), a.w = null);
        a.Y = null;
        a.ia = null;

        _.w(d);
      });
    },
        lJ = function lJ(a) {
      if (!a.A && window.chrome && chrome.cast && chrome.cast.isAvailable && window.cast && cast.framework && cast.framework.CastContext && a.aa.length) {
        a.A = !0;
        a.w.He();
        var b = cast.framework.CastContext.getInstance(),
            c = new cast.framework.CastOptions();
        c.receiverApplicationId = a.aa;
        c.autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED;
        b.setOptions(c);
        b.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, a.S);
        b.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, a.Ea);
        pJ && a.w.X(.02);
      }
    },
        rJ = function rJ(a, b) {
      qJ(a, b.getMediaSession());
      b.addEventListener(cast.framework.SessionEventType.MEDIA_SESSION, a.ca);
      b.addMessageListener(WI, a.V);
    },
        qJ = function qJ(a, b) {
      b !== a.a && (a.a = b, a.a && (a.J.release(), a.I = null, a.o = null, a.o = new cast.framework.RemotePlayer(), a.I = new cast.framework.RemotePlayerController(a.o), a.J.on(a.I, cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED, a.Eg.bind(a)), a.g && a.g.load(), a.h && a.h.init(), a.trigger(new _.M(_.ed))));
    },
        sJ = function sJ(a) {
      return _.z(function (b) {
        return a.$a() ? b.G(0) : _.v(b, cast.framework.CastContext.getInstance().requestSession(), 0);
      });
    },
        tJ = function tJ(a, b) {
      var c, d, e, f, g, k, l, m, n, p, r;
      return _.z(function (q) {
        switch (q.a) {
          case 1:
            return c = chrome.cast.media.StreamType, d = _.rp, _.v(q, sJ(a), 2);

          case 2:
            if (!b) return q["return"]();
            e = cast.framework.CastContext.getInstance();
            f = e.getCurrentSession();
            g = new chrome.cast.media.MediaInfo(b.source.url, b.source.type);
            g.streamType = b.isLive ? c.LIVE : c.BUFFERED;
            k = b;
            l = k.xb;
            m = k.audioMimeType;
            g.hlsVideoSegmentFormat = cJ(l, d.VIDEO);
            g.hlsSegmentFormat = cJ(m, d.AUDIO);

            if (!b.Ha) {
              q.G(3);
              break;
            }

            if (!a.P) {
              q.G(4);
              break;
            }

            return _.v(q, Promise.resolve(a.P(b.Ha)), 5);

          case 5:
            if (n = q.f) b.Ha = n;

          case 4:
            a.j = b.Ha;
            a.D = _.um(a.j);
            a.C = a.D.findIndex(function (x) {
              return x.url === b.source.url;
            });

            if (!b.Ha.remoteTextTracks) {
              q.G(6);
              break;
            }

            return _.v(q, Promise.all(b.Ha.remoteTextTracks.map(a.Ph.bind(a))), 7);

          case 7:
            p = q.f, g.tracks = p.filter(function (x) {
              return x;
            }), b.Ha.remoteTextTracks = void 0;

          case 6:
            delete b.Ha.autoplay, b.Ha.startTime = null, g.customData = {
              playerConfiguration: $I(b.Ha)
            };

          case 3:
            return b.source.name && a.yd(b.source.name), a.f && (g.metadata = a.f), r = new chrome.cast.media.LoadRequest(g), _typeof(b.autoplay) === _.ec && (r.autoplay = b.autoplay), _typeof(b.currentTime) === _.ud && (r.currentTime = b.currentTime), _.v(q, f.loadMedia(r), 0);
        }
      });
    },
        uJ = function uJ(a, b, c) {
      c = void 0 === c ? 0 : c;
      var d, e;
      return _.z(function (f) {
        (d = a.g.ha()) && d.language && (a.j.preferredTextLanguage = d.language);
        (e = a.g.ga()) && e.language && (a.j.preferredAudioLanguage = e.language);
        return _.v(f, tJ(a, {
          source: a.getLoadedSource(),
          currentTime: c,
          isLive: a.isLive(),
          autoplay: b,
          Ha: a.j
        }), 0);
      });
    },
        kJ = function kJ(a) {
      if (a) {
        a = _.t(mJ);

        for (var b = a.next(); !b.done; b = a.next()) {
          lJ(b.value);
        }
      }
    },
        wJ = function wJ(a, b, c) {
      _.Vh.call(this);

      var d = this;
      this.f = a;
      this.h = b;
      this.j = _typeof(c) === _.Tc ? c : function (e, f) {
        d.f && e !== _.Io && e !== _.Co && d.f.load(f);
      };
      this.a = vJ(this);
      this.g = new _.F(TI);
      this.addDelegate(this.f);
    },
        vJ = function vJ(a) {
      return new nJ(a.h, function () {
        a.trigger(new _.M(_.lc));
      }, function (b, c) {
        var d = a.f.getConfiguration();
        d.source = c.source;
        d.autoplay = !1;
        d.startTime = c.currentTime ? Math.max(c.currentTime - 1, 0) : null;
        d.ima && d.startTime && (d.ima.playAdsAfterTime = d.startTime);
        c.Re && (d.preferredAudioLanguage = c.Re);
        c.bg && (d.preferredTextLanguage = c.bg);

        _.so(a.f, null);

        a.trigger(new _.M("castingended"));
        a.j(b, d);
      }, function () {
        return xJ(a);
      });
    },
        xJ = function xJ(a) {
      var b;
      return _.z(function (c) {
        if (1 == c.a) return a.trigger(new _.M(_.kc)), b = a.f.a, b !== a.a && a.f && a.a ? _.v(c, a.f.release(), 2) : c["return"]();

        _.so(a.f, a.a);

        _.w(c);
      });
    },
        yJ = function yJ(a) {
      ZI.call(this, a, "clpp.cast.StateManager");
      this.I = this.Jg.bind(this);
      this.H = this.Ig.bind(this);
      this.w = this.Ri.bind(this);
      this.o = this.Ji.bind(this);
      this.K = this.Lg.bind(this);
      this.J = this.Kg.bind(this);
      this.M = this.kj.bind(this);
      this.D = this.Vi.bind(this);
      this.C = this.Hg.bind(this);
      this.f = this.Gg.bind(this);
    },
        zJ = function zJ(a) {
      this.Mb = a;
      this.a = this.f.bind(this);
    },
        AJ = function AJ() {
      return [cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, cast.framework.events.EventType.TIMED_METADATA_CHANGED, cast.framework.events.EventType.TIMED_METADATA_ENTER, cast.framework.events.EventType.TIMED_METADATA_EXIT];
    },
        BJ = function BJ(a) {
      var b = a.dashTimedMetadata,
          c = _.xe;
      b && (c = b.schemeIdUri);
      return {
        type: c.startsWith(_.we) ? _.lh : _.jh,
        schemeIdUri: c,
        id: a.id || "",
        startTime: a.startTime,
        endTime: a.endTime,
        value: b && b.value || "",
        eventElement: b && b.eventElement
      };
    },
        CJ = function CJ() {
      this.g = new _.F("clpp.cast.TrackManager");
      this.l = null;
      this.o = 1E9;
      this.h = [];
      this.j = [];
      this.m = this.pj.bind(this);
      this.a = this.f = null;
    },
        DJ = function DJ() {
      return cast.framework.CastReceiverContext.getInstance().getPlayerManager();
    },
        FJ = function FJ(a) {
      a.a = DJ().getTextTracksManager();
      var b = a.a.getTracks();
      a.j = EJ(_.O, b);
    },
        GJ = function GJ(a, b, c, d) {
      c = _.Bh(c);
      var e = !1,
          f = [];
      b === _.Q ? f = a.getAudioTracks() : b === _.O && (f = a.da());
      var g = c.find(function (k) {
        return f.some(function (l) {
          return l.language === k;
        });
      });
      _.ig(g) && (c = f.filter(function (k) {
        return k.language === g;
      }), f = c.length ? c : f, e = e || !!c.length);
      _.ig(d) && (c = f.filter(function (k) {
        return k.roles.includes(d);
      }), f = c.length ? c : f, e = e || !!c.length);
      e && f[0] && (e = f[0], a.g.info("Will select track", e), b === _.Q ? a.ka(e) : b === _.O && a.sa(e));
    },
        EJ = function EJ(a, b) {
      for (var c = [], d = _.t(b), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = new _.qh(e.trackId.toString(), a);
        f.roles = e.roles || [];
        f.kind = e.subtype || null;
        f.language = e.language || null;
        f.label = e.name || null;
        f.src = e.trackContentId || null;
        f.mimeType = e.trackContentType || null;
        e.customData && (f.mimeType = e.customData.mimeType || f.mimeType, f.src = e.customData.url || f.src);
        f.renditions.push(new _.xh(f.id, f));
        c.push(f);
      }

      return c;
    },
        HJ = function HJ() {
      _.Vh.call(this);

      this.C = new _.F(UI);
      this.g = this.o = _.Dj();
      this.w = null;
      this.j = -1;
      this.D = new _.xj();
      this.f = this.m = this.h = this.a = this.A = null;
      this.B = !1;
    },
        IJ = function IJ() {
      return cast.framework.CastReceiverContext.getInstance().getPlayerManager();
    },
        LJ = function LJ(a, b) {
      function c() {
        b.protectionSystem = cast.framework.ContentProtection.NONE;
        b.licenseUrl = void 0;
        b.licenseRequestHandler = void 0;
        b.licenseHandler = void 0;
      }

      if (a && a.drm) {
        var d = a.drm,
            e = _.Yj(d);

        if (e) {
          var f = _.um(a)[0],
              g = [_.Uj];

          f.type !== _.rm && g.unshift(_.Sj);
          d.preferredDrmSystem === _.Uj && g.reverse();

          for (var k, l; g.length && !l;) {
            k = g.shift(), l = e.Ua[k];
          }

          l ? (d = k === _.Sj ? cast.framework.ContentProtection.WIDEVINE : k === _.Uj ? cast.framework.ContentProtection.PLAYREADY : void 0, b.protectionSystem = d, b.licenseUrl = l.licenseUrl, d = {
            ldlDelay: 0,
            customData: {}
          }, JJ(b, l, a, d), KJ(b, l, a, d)) : c();
        } else c();
      } else c();
    },
        JJ = function JJ(a, b, c, d) {
      b.modifiers.licenseRequest ? a.licenseRequestHandler = function (e) {
        var f = _.Fh(e.url);

        e.headers && (f.headers = e.headers);
        f.body = e.content;
        f.allowCrossSiteCredentials = e.withCredentials;
        b.modifiers.licenseRequest(c, f, d);
        e.url = f.uris[0];
        e.headers = f.headers;
        e.content = f.body;
        e.withCredentials = f.allowCrossSiteCredentials;
      } : a.licenseRequestHandler = void 0;
    },
        KJ = function KJ(a, b, c, d) {
      b.modifiers.licenseResponse ? a.licenseHandler = function (e) {
        e = _.fj({}, e.buffer, 200, "");
        b.modifiers.licenseResponse(c, e, d);
        return _.J(e.data);
      } : a.licenseHandler = void 0;
    },
        Z = function Z(a, b, c, d, e) {
      this.a = a;
      this.f = b;
      this.h = _typeof(c) === _.ud ? c : 1;
      this.j = _typeof(d) === _.ud ? d : 1;
      this.g = _typeof(e) === _.ud ? e : 0;
    },
        MJ = function MJ(a) {
      this.a = a;
    },
        OJ = function OJ(a) {
      this.l = a;
      this.a = null;
      this.g = this.Mg.bind(this);
      this.f = [cast.framework.events.EventType.PLAYER_LOADING, cast.framework.events.EventType.BREAK_CLIP_LOADING, cast.framework.events.EventType.BREAK_STARTED, cast.framework.events.EventType.BREAK_ENDED, cast.framework.events.EventType.BREAK_CLIP_STARTED, cast.framework.events.EventType.BREAK_CLIP_ENDED, cast.framework.events.EventType.PLAYING, cast.framework.events.EventType.PAUSE, cast.framework.events.EventType.BUFFERING];
      NJ().addEventListener(this.f, this.g);
    },
        RJ = function RJ(a, b, c) {
      var d, e, f, g, k, l, m;
      return _.z(function (n) {
        if (1 == n.a) {
          d = b.adTagUrl;
          if (!d) return n["return"]();

          _.mf(n, 2);

          PJ = !1;
          e = _.Fh(d);
          return _.v(n, c.fetch(e).N, 4);
        }

        if (2 != n.a) {
          if ((f = n.f) && f.data) if (g = _.$f(f.data), k = new DOMParser(), l = k.parseFromString(g, _.qe), l.getElementsByTagName("vmap:VMAP").length) _.C("VMAP detected."), a.vmapAdsRequest = QJ(g);else if (l.getElementsByTagName("VAST").length) {
            _.C("VAST detected.");

            var p = new cast.framework.messages.BreakClip("bc1");
            p.vastAdsRequest = QJ(g);
            var r = new cast.framework.messages.Break("b1", [p.id], 0);
            a.breakClips = [p];
            a.breaks = [r];
          } else _.C("Unsupported schema."), PJ = !0;
          return _.nf(n, 0);
        }

        m = _.of(n);

        _.C("Failed to fetch an ad", m);

        PJ = !0;

        _.w(n);
      });
    },
        QJ = function QJ(a) {
      var b = new cast.framework.messages.VastAdsRequest();
      b.adsResponse = a;
      return b;
    },
        NJ = function NJ() {
      return cast.framework.CastReceiverContext.getInstance().getPlayerManager();
    },
        TJ = function TJ(a, b, c) {
      if (c instanceof cast.framework.events.BreaksEvent || -1 !== a.getPosition()) {
        var d = null;
        (c = SJ(a, c)) && (d = {
          ad: c
        });
        a.l.trigger(new _.M(b, d));
      }
    },
        UJ = function UJ(a, b) {
      var c = new _.K(1, 10, 10003, {
        errorType: b
      });
      a.l.onError(c);
    },
        SJ = function SJ(a, b) {
      var c = null;

      if (a.a && b instanceof cast.framework.events.BreaksEvent) {
        var d = null,
            e = null,
            f;
        _typeof(b.breakClipId) === _.ge && (d = a.a.getBreakClipById(b.breakClipId));
        _typeof(b.breakId) === _.ge && (e = a.a.getBreakById(b.breakId), !e && d && (e = a.a.getBreaks().find(function (g) {
          return g.breakClipIds.includes(d.id);
        }) || null), e && (f = a.a.getBreaks().filter(function (g) {
          return 0 <= g.position;
        }).sort(function (g, k) {
          return g.position - k.position;
        }).findIndex(function (g) {
          return g === e;
        })));
        c = new Z(d, e, b.index, b.total, f);
      }

      return c;
    },
        VJ = function VJ() {
      this.a = !1;
      this.h = new _.F(VI);
      this.f = this.l = null;
      this.g = new Set();
      this.A = this.Ui.bind(this);
      this.w = this.Fg.bind(this);
      this.j = null;
      this.o = new _.bh();
      this.m = null;
    },
        XJ = function XJ() {
      return WJ || (WJ = new VJ());
    },
        ZJ = function ZJ(a, b) {
      a.h.debug("Detected HLS, parsing");
      var c = cast.framework.messages.HlsVideoSegmentFormat,
          d = cast.framework.CastReceiverContext.getInstance();
      c = d.getPlayerManager().getMediaInformation().hlsVideoSegmentFormat === c.FMP4 ? _.Ge : _.Fe;
      b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");

      for (var e = b.split(/\n+/m), f = [], g = 0; g < e.length;) {
        var k = e[g].trim();

        if (e[g].startsWith("#EXT-X-STREAM-INF")) {
          var l = YJ(k, _.oa),
              m = YJ(k, "RESOLUTION"),
              n = _.t([]),
              p = n.next().value;

          n = n.next().value;
          m && (m = _.t(m.split("x").map(function (r) {
            return +r;
          })), p = m.next().value, n = m.next().value);

          if (!d.canDisplayType(c, l, p, n)) {
            g += 2;
            continue;
          }
        }

        f.push(k);
        ++g;
      }

      return f.join("\n");
    },
        YJ = function YJ(a, b) {
      b += "\x3d";
      var c = a.indexOf(b);

      if (0 <= c) {
        var d = a.substring(c + b.length);
        d.startsWith('"') ? (d = d.substring(1), d = d.substring(0, d.indexOf('"'))) : (c = d.indexOf(","), 0 <= c && (d = d.substring(0, c)));
      }

      return d;
    },
        $J = function $J(a) {
      this.f = a;
      this.a = null;
      this.g = new _.bh();
      this.h = [cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED, cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_NUMBER_CHANGED, cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED, cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED];
    },
        bK = function bK(a, b) {
      var c = null,
          d = aK(a);
      d && (c = {
        ad: d
      });
      a.f.trigger(new _.M(b, c));
    },
        aK = function aK(a) {
      var b = null;

      if (a.a && a.a.mediaInfo) {
        b = a.a.mediaInfo;
        var c = null,
            d = null,
            e = a.a.currentBreakClipNumber;

        if (b.breaks && (c = b.breaks.find(function (k) {
          return k.id === a.a.breakId;
        }) || null)) {
          var f = c.breakClipIds.length;
          var g = 0 >= c.position ? c.position : b.breaks.filter(function (k) {
            return 0 <= k.position;
          }).sort(function (k, l) {
            return k.position - l.position;
          }).findIndex(function (k) {
            return k === c;
          });
        }

        b.breakClips && (d = b.breakClips.find(function (k) {
          return k.id === a.a.breakClipId;
        }) || null);
        b = new Z(d, c, e, f, g);
      }

      return b;
    },
        cK = function cK() {},
        dK = function dK() {};

    _.h = ZI.prototype;

    _.h.release = function () {
      this.fa(_.Co);
    };

    _.h.destroy = function () {
      this.j = this.a = null;
      return Promise.resolve();
    };

    _.h.getState = function () {
      return this.g;
    };

    _.h.onError = function (a) {
      a.a === _.L && this.fa(_.hm);
    };

    _.h.fa = function (a) {
      if (a !== this.g) if (this.g === _.hm && a !== _.Co) this.log.debug("Player is in ERROR state and can not switch to", a);else {
        var b = Date.now();
        this.m = this.g;
        this.g = a;
        this.g === _.jn ? (this.A = b, this.a.trigger(new _.M(_.hc, {
          detail: {
            bufferedTimeMS: -1,
            reason: this.h
          }
        }))) : this.m === _.jn && this.a.trigger(new _.M(_.gc, {
          detail: {
            bufferedTimeMS: b - this.A,
            reason: this.h
          }
        }));
        a = {
          currentState: this.g,
          previousState: this.m,
          timeSinceLastStateChangeMS: b - this.B
        };
        this.B = b;
        this.j && _.Sl(this.j, this.g);
        this.a.trigger(new _.M(_.de, {
          detail: a
        }));
      }
    };

    _.A("clpp.cast.CastUtils", function () {});

    _.u(dJ, ZI);

    dJ.prototype.init = function () {
      var a = this.a,
          b = a.a;
      b && (this.f && this.f.removeUpdateListener(this.w), this.f = b, this.f.addUpdateListener(this.w), this.o = a.o);
    };

    dJ.prototype.destroy = function () {
      var a = this;
      return _.z(function (b) {
        a.f && (a.f.removeUpdateListener(a.w), a.f = null);
        return _.v(b, ZI.prototype.destroy.call(a), 0);
      });
    };

    dJ.prototype.fa = function (a) {
      var b = this.a.o;
      b && b.isPlayingBreak || ZI.prototype.fa.call(this, a);
    };

    dJ.prototype.C = function () {
      if (this.f && this.o && !this.o.isPlayingBreak) switch (this.f.playerState) {
        case chrome.cast.media.PlayerState.IDLE:
          switch (this.f.idleReason) {
            case chrome.cast.media.IdleReason.FINISHED:
              this.fa(_.Io);
              break;

            case chrome.cast.media.IdleReason.ERROR:
              this.fa(_.hm);
              break;

            default:
              this.fa(_.Co);
          }

          break;

        case chrome.cast.media.PlayerState.PLAYING:
          this.fa(_.no);
          break;

        case chrome.cast.media.PlayerState.PAUSED:
          this.fa(_.No);
          break;

        case chrome.cast.media.PlayerState.BUFFERING:
          this.fa(_.jn);
      }
    };

    _.u(eJ, _.R);

    _.h = eJ.prototype;

    _.h.Cb = function (a) {
      this.a = a;
    };

    _.h.release = function () {
      this.g = [];
      this.f = {};
    };

    _.h.load = function () {
      this.release();
      var a = this.a.a;
      a && (a = a.media) && (this.g = (a = a.tracks) ? a.map(function (b) {
        switch (b.type) {
          case chrome.cast.media.TrackType.VIDEO:
            var c = _.sh;
            break;

          case chrome.cast.media.TrackType.AUDIO:
            c = _.Q;
            break;

          case chrome.cast.media.TrackType.TEXT:
            c = _.O;
        }

        c = new _.qh(b.trackId.toString(), c);
        c.kind = b.subtype;
        c.language = b.language;
        c.label = b.name;
        c.src = b.trackContentId;
        c.mimeType = b.trackContentType;
        b.customData && (c.src = b.customData.url || c.src, c.mimeType = b.customData.mimeType || c.mimeType);
        c.renditions.push(new _.xh(c.id, c));
        return c;
      }) : [], this.a.trigger(new _.M(_.sp)));
    };

    _.h.destroy = function () {
      this.a = null;
    };

    _.h.getVideoTracks = function () {
      return gJ(this, _.sh);
    };

    _.h.getAudioTracks = function () {
      return gJ(this, _.Q);
    };

    _.h.da = function () {
      return gJ(this, _.O);
    };

    _.h.ea = function () {
      var a = this.za();
      return a ? a.renditions[0] : null;
    };

    _.h.wa = function () {
      var a = this.ga();
      return a ? a.renditions[0] : null;
    };

    _.h.ya = function () {
      var a = this.ha();
      return a ? a.renditions[0] : null;
    };

    _.h.Na = function () {
      return this.f[_.sh] || null;
    };

    _.h.Wa = function () {
      return this.f[_.Q] || null;
    };

    _.h.Xa = function () {
      return this.f[_.O] || null;
    };

    _.h.za = function () {
      return hJ(this, _.sh);
    };

    _.h.ga = function () {
      return hJ(this, _.Q);
    };

    _.h.ha = function () {
      return hJ(this, _.O);
    };

    _.h.Ta = function (a) {
      jJ(this, _.sh, a);
    };

    _.h.ka = function (a) {
      jJ(this, _.Q, a);
    };

    _.h.sa = function (a) {
      jJ(this, _.O, a);
    };

    _.h.Sa = function (a) {
      this.Ta(a && a.track);
    };

    _.h.eb = function (a) {
      this.ka(a && a.track);
    };

    _.h.gb = function (a) {
      this.sa(a && a.track);
    };

    _.h.addTextTrack = function () {
      return _.z(function (a) {
        _.w(a);
      });
    };

    _.h.na = function () {
      return !0;
    };

    eJ.prototype.isAbrEnabled = eJ.prototype.na;
    eJ.prototype.addTextTrack = eJ.prototype.addTextTrack;
    eJ.prototype.setTextRendition = eJ.prototype.gb;
    eJ.prototype.setAudioRendition = eJ.prototype.eb;
    eJ.prototype.setVideoRendition = eJ.prototype.Sa;
    eJ.prototype.setTextTrack = eJ.prototype.sa;
    eJ.prototype.setAudioTrack = eJ.prototype.ka;
    eJ.prototype.setVideoTrack = eJ.prototype.Ta;
    eJ.prototype.getTextTrack = eJ.prototype.ha;
    eJ.prototype.getAudioTrack = eJ.prototype.ga;
    eJ.prototype.getVideoTrack = eJ.prototype.za;
    eJ.prototype.getLoadingTextRendition = eJ.prototype.Xa;
    eJ.prototype.getLoadingAudioRendition = eJ.prototype.Wa;
    eJ.prototype.getLoadingVideoRendition = eJ.prototype.Na;
    eJ.prototype.getTextRendition = eJ.prototype.ya;
    eJ.prototype.getAudioRendition = eJ.prototype.wa;
    eJ.prototype.getVideoRendition = eJ.prototype.ea;
    eJ.prototype.getTextTracks = eJ.prototype.da;
    eJ.prototype.getAudioTracks = eJ.prototype.getAudioTracks;
    eJ.prototype.getVideoTracks = eJ.prototype.getVideoTracks;

    _.u(nJ, _.Vh);

    _.h = nJ.prototype;

    _.h.init = function (a, b) {
      this.j = this.K = b;
    };

    _.h.unload = function () {
      var a = this;
      return new Promise(function (b, c) {
        a.g && a.g.release();
        a.a && !a.a.idleReason || b();
        a.a.stop(null, b, c);
      });
    };

    _.h.release = function () {
      var a = this;
      return this.unload().then(function () {
        a.h && a.h.release();
      });
    };

    _.h.destroy = function () {
      return _.z(function (a) {
        _.w(a);
      });
    };

    _.h.Xc = function (a) {
      this.P = a;
    };

    _.h.Vb = function () {
      return this.A;
    };

    _.h.$a = function () {
      return this.B;
    };

    _.h.ce = function () {
      return this.Da;
    };

    _.h.sendMessage = function (a, b) {
      var c = this,
          d,
          e,
          f;
      return _.z(function (g) {
        switch (g.a) {
          case 1:
            e = cast.framework.CastContext.getInstance().getCurrentSession();

            if (!e) {
              d = new _.K(1, 8, 8004, void 0);
              g.G(2);
              break;
            }

            _.mf(g, 3);

            return _.v(g, e.sendMessage(a, $I(b)), 5);

          case 5:
            _.nf(g, 2);

            break;

          case 3:
            f = _.of(g), d = new _.K(1, 8, 8E3, {
              detailedErrorCode: f
            });

          case 2:
            if (d) c.onError(d);

            _.w(g);

        }
      });
    };

    _.h.cast = function () {
      var a = this,
          b,
          c;
      return _.z(function (d) {
        if (1 == d.a) {
          if (!a.Vb()) throw a.m.warn(RI), new _.K(1, 8, 8001, void 0);
          if (!pJ) throw a.m.warn(PI), new _.K(1, 8, 8002, void 0);
          if (a.$a()) throw a.m.warn("Already casting"), new _.K(1, 8, 8003, void 0);

          _.mf(d, 2);

          return _.v(d, sJ(a), 4);
        }

        if (2 != d.a) return _.nf(d, 0);
        b = _.of(d);
        c = {};
        b instanceof chrome.cast.Error ? (c.detailedErrorCode = b.code, c.details = b.details, c.reason = b.description) : c.detailedErrorCode = b;
        throw new _.K(1, 8, 8E3, c);
      });
    };

    _.h.Yd = function () {
      this.$a() && cast.framework.CastContext.getInstance().endCurrentSession(!0);
    };

    _.h.addMessageListener = function (a) {
      _typeof(a) === _.Tc && this.H.add(a);
    };

    _.h.removeMessageListener = function (a) {
      _typeof(a) === _.Tc && this.H["delete"](a);
    };

    _.h.play = function () {
      var a = this;
      return this.isEnded() ? uJ(this, !0) : new Promise(function (b, c) {
        if (!a.a) return c(OI);
        a.a.play(null, b, c);
      });
    };

    _.h.pause = function () {
      var a = this;
      return new Promise(function (b, c) {
        a.isEnded() && b();
        if (!a.a) return c(OI);
        a.a.pause(null, b, c);
      });
    };

    _.h.isPaused = function () {
      return !!this.a && this.a.playerState === chrome.cast.media.PlayerState.PAUSED;
    };

    _.h.isEnded = function () {
      return this.getState() === _.Io;
    };

    _.h.seek = function (a) {
      var b = this;
      return this.isEnded() ? uJ(this, !1, a) : new Promise(function (c, d) {
        b.a || d(OI);
        b.o.isPlayingBreak && d(MI);
        var e = new chrome.cast.media.SeekRequest();
        e.currentTime = a;
        b.trigger(new _.M(_.Ae));
        b.a.seek(e, function () {
          b.trigger(new _.M(_.ze));
          c();
        }, d);
      });
    };

    _.h.getPosition = function () {
      return this.a && this.a.getEstimatedTime() || 0;
    };

    _.h.getDuration = function () {
      return this.a && this.a.media && _typeof(this.a.media.duration) === _.ud ? this.a.media.duration : 0;
    };

    _.h.setDrmCustomDataModifier = function () {};

    _.h.setCdnErrorCallback = function () {};

    _.h.getPlaybackRate = function () {
      return this.a && this.a.playbackRate || 0;
    };

    _.h.setPlaybackRate = function (a) {
      this.a && 0 < a && this.sendMessage(XI, {
        type: "SET_PLAYBACK_RATE",
        requestId: Math.round(1E3 * Math.random()),
        mediaSessionId: this.a.mediaSessionId,
        playbackRate: a
      });
    };

    _.h.getVolume = function () {
      return this.a && this.a.volume.level;
    };

    _.h.setVolume = function (a) {
      this.a && 0 <= a && 1 >= a && (a = new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(a)), this.a.setVolume(a));
    };

    _.h.isMuted = function () {
      return this.a && this.a.volume.muted;
    };

    _.h.setMuted = function (a) {
      this.a && (a = new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(void 0, a)), this.a.setVolume(a));
    };

    _.h.getPresentationStartTime = function () {
      return this.a && this.a.media.startAbsoluteTime || 0;
    };

    _.h.getSeekRange = function () {
      var a = {
        start: 0,
        end: this.getDuration()
      };

      if (this.isLive()) {
        var b = this.a.getEstimatedLiveSeekableRange();
        b && _typeof(b.start) === _.ud && _typeof(b.end) === _.ud && (a = {
          start: b.start,
          end: b.end
        });
      }

      return a;
    };

    _.h.getState = function () {
      return this.h ? this.h.getState() : _.Do;
    };

    _.h.getStats = function () {
      return this.a && this.a.customData && this.a.customData.stats ? aJ(this.a.customData.stats) : _.Yl();
    };

    _.h.isLive = function () {
      return -1 === this.getDuration();
    };

    _.h.load = function (a) {
      var b = this,
          c,
          d;
      return _.z(function (e) {
        if (!b.Vb()) return b.m.warn(RI), e["return"]();
        if (!pJ) return b.m.warn(PI), e["return"]();
        b.D = _.um(a);
        _.Gj(a) && (b.j = _.Fj(b.K, a));
        c = b.D[b.C];
        d = {
          source: c,
          isLive: c.isLive,
          autoplay: b.j.autoplay,
          Ha: b.j,
          xb: c.xb,
          audioMimeType: c.audioMimeType
        };
        return _.v(e, tJ(b, d), 0);
      });
    };

    _.h.getBufferInfo = function () {
      return new _.Uh();
    };

    _.h.getTrackManager = function () {
      return this.g;
    };

    _.h.getConfiguration = function () {
      return this.j;
    };

    _.h.getSurface = function () {
      return null;
    };

    _.h.setNetworkEngine = function (a) {
      this.M = a;
    };

    _.h.getNetworkEngine = function () {
      return this.M;
    };

    _.h.getSourceIndex = function () {
      return this.C;
    };

    _.h.setSourceIndex = function (a) {
      this.C = a;
    };

    _.h.getLoadedSource = function () {
      return this.D[this.C];
    };

    _.h.getPeriods = function () {
      return [];
    };

    _.h.getDrmInfo = function () {
      return null;
    };

    _.h.getTimelineCues = function () {
      return [];
    };

    _.h.resetAbr = function () {
      this.m.warn(QI);
    };

    _.h.onError = function (a) {
      if (a && (this.trigger(new _.M(_.Rc, {
        detail: a
      })), this.h)) this.h.onError(a);
    };

    _.h.namespace = function () {
      return _.tc;
    };

    _.h.canPlay = function () {
      return this.Vb() ? 2 : 0;
    };

    _.h.Ee = function (a) {
      this.f = a;
    };

    _.h.Sd = function () {
      this.f = null;
    };

    _.h.yd = function (a) {
      this.f || (this.f = {
        metadataType: chrome.cast.media.MetadataType.GENERIC
      });
      this.f.title = a;
    };

    _.h.De = function (a) {
      this.f || (this.f = {
        metadataType: chrome.cast.media.MetadataType.GENERIC
      });
      this.f.images = [{
        url: a
      }];
    };

    _.h.Ce = function (a) {
      this.f || (this.f = {});
      this.f.metadataType = chrome.cast.media.MetadataType.MUSIC_TRACK;
      this.f.artist = a;
    };

    _.h.Fe = function (a) {
      this.f || (this.f = {
        metadataType: chrome.cast.media.MetadataType.GENERIC
      });
      this.f.releaseDate = a;
    };

    _.h.Li = function (a) {
      var b = cast.framework.CastContext.getInstance(),
          c = a.castState === cast.framework.CastState.CONNECTED;
      pJ = a.castState !== cast.framework.CastState.NO_DEVICES_AVAILABLE;
      this.Da = c ? b.getCurrentSession().getCastDevice().friendlyName : "";
      this.w.He();
    };

    _.h.hj = function (a) {
      this.m.debug("state: " + a.sessionState + ", details:", a);

      switch (a.sessionState) {
        case cast.framework.SessionState.SESSION_STARTED:
          this.B = !0;
          rJ(this, a.session);
          break;

        case cast.framework.SessionState.SESSION_RESUMED:
          this.$a() || (this.B = !0, rJ(this, a.session), this.ia());
          break;

        case cast.framework.SessionState.SESSION_ENDED:
          if (this.$a() && this.a) {
            var b = this.a.media,
                c = this.g.ga(),
                d = this.g.ha();
            c = c && c.language || void 0;
            d = d && d.language || void 0;
            this.Y(this.getState(), {
              source: {
                url: b.contentId,
                type: b.contentType,
                isLive: b.streamType === chrome.cast.media.StreamType.LIVE
              },
              currentTime: this.getPosition(),
              bg: d,
              Re: c
            });
          }

          a.session.removeEventListener(cast.framework.SessionEventType.MEDIA_SESSION, this.ca);
          a.session.removeMessageListener(WI, this.V);
          this.B = !1;
          this.a = null;
          this.J.release();
          this.o = this.I = null;
      }
    };

    _.h.Wi = function (a) {
      this.m.debug("New media session", a.mediaSession);
      qJ(this, a.mediaSession);
    };

    _.h.Pi = function (a, b) {
      if (a === WI && 0 < this.H.size) {
        var c = aJ(b);
        this.H.forEach(function (d) {
          return d(c);
        });
      }
    };

    _.h.Eg = function (a) {
      this.trigger(new _.M(_.re, {
        currentTime: a.value
      }));
    };

    _.h.Ph = function (a) {
      var b = this,
          c,
          d;
      return _.z(function (e) {
        if (1 == e.a) return c = null, _.v(e, bJ(a, [_.pe, _.Vb], b.M), 2);
        if (d = e.f) c = new chrome.cast.media.Track(b.Ka++, chrome.cast.media.TrackType.TEXT), c.language = d.language, c.name = d.label || null, c.trackContentId = d.url, c.trackContentType = d.mimeType, c.customData = {
          mimeType: a.mimeType,
          url: a.url
        };
        return e["return"](c);
      });
    };

    _.h.getTextDisplayer = function () {
      return null;
    };

    nJ.prototype.getTextDisplayer = nJ.prototype.getTextDisplayer;
    nJ.prototype.getNetworkEngine = nJ.prototype.getNetworkEngine;
    nJ.prototype.setNetworkEngine = nJ.prototype.setNetworkEngine;
    var pJ = !1,
        mJ = new Set();
    window.__onGCastApiAvailable = kJ;

    _.u(wJ, _.Vh);

    _.h = wJ.prototype;

    _.h.destroy = function () {
      var a = this;
      return _.z(function (b) {
        if (1 == b.a) return a.a ? _.v(b, oJ(a.a), 3) : b.G(2);
        2 != b.a && (a.a = null);
        a.removeDelegate(a.f);

        _.w(b);
      });
    };

    _.h.Rd = function () {
      return !!this.a && this.a.Vb() && pJ;
    };

    _.h.$a = function () {
      return !!this.a && this.a.$a();
    };

    _.h.ce = function () {
      return this.a ? this.a.ce() : "";
    };

    _.h.Xc = function (a) {
      this.a && this.a.Xc(a);
    };

    _.h.cast = function (a) {
      var b = this,
          c,
          d,
          e;
      return _.z(function (f) {
        switch (f.a) {
          case 1:
            if (!b.a) return f["return"]();
            var g = null,
                k = b.f.getLoadedSource();

            if (k) {
              var l = b.f.getTrackManager();
              g = l.getVideoTracks()[0];
              if (g && g.mimeType) var m = g.mimeType;
              g = b.f.getConfiguration();
              var n = l.ga();

              if (n) {
                if (n.mimeType) var p = n.mimeType;
                n.language && (g.preferredAudioLanguage = n.language);
                n.roles.length && (g.preferredAudioRole = n.roles[0]);
              }

              if (l = l.ha()) l.language && (g.preferredTextLanguage = l.language), l.roles.length && (g.preferredTextRole = l.roles[0]);
              l = k && _typeof(k.isLive) === _.ec ? k.isLive : b.f.isLive();
              g = {
                source: k,
                isLive: l,
                autoplay: !b.f.isPaused(),
                currentTime: Math.max(b.f.getPosition() - 1, 0),
                xb: m,
                audioMimeType: p,
                Ha: g
              };
            }

            c = g;

            _.mf(f, 2);

            return _.v(f, b.a.cast(), 4);

          case 4:
            return b.f && b.a ? _.v(f, xJ(b), 5) : f["return"]();

          case 5:
            if (!b.a) return f["return"]();
            c && (c.autoplay = !b.f.isPaused());
            if (a) return _.v(f, b.f.load(a), 7);

            if (b.a.a) {
              f.G(7);
              break;
            }

            return _.v(f, tJ(b.a, c), 7);

          case 7:
            _.nf(f, 0);

            break;

          case 2:
            d = _.of(f), b.g.error("Error while trying to cast", d), e = new _.M(_.Rc, {
              detail: d
            }), b.trigger(e), _.w(f);
        }
      });
    };

    _.h.Yd = function () {
      this.a && this.a.Yd();
    };

    _.h.Ag = function (a) {
      var b = this;
      return _.z(function (c) {
        if (1 == c.a) {
          if (a === b.h) return c["return"]();
          b.h = a;
          return b.a ? _.v(c, oJ(b.a), 2) : c.G(2);
        }

        b.a = vJ(b);

        _.w(c);
      });
    };

    _.h.sendMessage = function (a) {
      var b = this;
      return _.z(function (c) {
        return b.a ? _.v(c, b.a.sendMessage(WI, a), 0) : (b.g.warn(SI), c["return"]());
      });
    };

    _.h.addMessageListener = function (a) {
      this.a ? this.a.addMessageListener(a) : this.g.warn(SI);
    };

    _.h.removeMessageListener = function (a) {
      this.a ? this.a.removeMessageListener(a) : this.g.warn(SI);
    };

    _.h.Ee = function (a) {
      this.a && this.a.Ee(a);
    };

    _.h.Sd = function () {
      this.a && this.a.Sd();
    };

    _.h.yd = function (a) {
      this.a && this.a.yd(a);
    };

    _.h.De = function (a) {
      this.a && this.a.De(a);
    };

    _.h.Ce = function (a) {
      this.a && this.a.Ce(a);
    };

    _.h.Fe = function (a) {
      this.a && this.a.Fe(a);
    };

    _.A(TI, wJ);

    wJ.prototype.setContentReleaseDate = wJ.prototype.Fe;
    wJ.prototype.setContentArtist = wJ.prototype.Ce;
    wJ.prototype.setContentImage = wJ.prototype.De;
    wJ.prototype.setContentTitle = wJ.prototype.yd;
    wJ.prototype.clearContentMetadata = wJ.prototype.Sd;
    wJ.prototype.setContentMetadata = wJ.prototype.Ee;
    wJ.prototype.removeMessageListener = wJ.prototype.removeMessageListener;
    wJ.prototype.addMessageListener = wJ.prototype.addMessageListener;
    wJ.prototype.sendMessage = wJ.prototype.sendMessage;
    wJ.prototype.changeReceiverId = wJ.prototype.Ag;
    wJ.prototype.forceDisconnect = wJ.prototype.Yd;
    wJ.prototype.cast = wJ.prototype.cast;
    wJ.prototype.setPlayerConfigInterceptor = wJ.prototype.Xc;
    wJ.prototype.getReceiverName = wJ.prototype.ce;
    wJ.prototype.isCasting = wJ.prototype.$a;
    wJ.prototype.canCast = wJ.prototype.Rd;
    wJ.prototype.destroy = wJ.prototype.destroy;

    _.u(yJ, ZI);

    _.h = yJ.prototype;

    _.h.init = function () {
      var a = cast.framework.events.EventType,
          b = cast.framework.CastReceiverContext.getInstance().getPlayerManager();
      b.addEventListener(a.PLAYING, this.I);
      b.addEventListener(a.PAUSE, this.H);
      b.addEventListener(a.MEDIA_FINISHED, this.w);
      b.addEventListener(a.BUFFERING, this.o);
      b.addEventListener(a.SEEKING, this.K);
      b.addEventListener(a.SEEKED, this.J);
      b.addEventListener(a.STALLED, this.M);
      b.addEventListener(a.PLAYER_LOADING, this.D);
      b.addEventListener(a.ERROR, this.C);
      b.addEventListener(a.BITRATE_CHANGED, this.f);
    };

    _.h.destroy = function () {
      var a = this,
          b,
          c;
      return _.z(function (d) {
        b = cast.framework.events.EventType;
        c = cast.framework.CastReceiverContext.getInstance().getPlayerManager();
        c.removeEventListener(b.PLAYING, a.I);
        c.removeEventListener(b.PAUSE, a.H);
        c.removeEventListener(b.MEDIA_FINISHED, a.w);
        c.removeEventListener(b.BUFFERING, a.o);
        c.removeEventListener(b.SEEKING, a.K);
        c.removeEventListener(b.SEEKED, a.J);
        c.removeEventListener(b.STALLED, a.M);
        c.removeEventListener(b.PLAYER_LOADING, a.D);
        c.removeEventListener(b.ERROR, a.C);
        c.removeEventListener(b.BITRATE_CHANGED, a.f);
        return _.v(d, ZI.prototype.destroy.call(a), 0);
      });
    };

    _.h.Jg = function () {
      this.a.trigger(new _.M(_.Kd));
      this.fa(_.no);
    };

    _.h.Ig = function () {
      this.fa(_.No);
    };

    _.h.Ri = function () {
      this.fa(_.Io);
    };

    _.h.Ji = function (a) {
      a.isBuffering ? this.fa(_.jn) : (a = this.a.isPaused() ? _.No : _.no, this.fa(a));
    };

    _.h.Lg = function () {
      this.h = 1;
      this.a.trigger(new _.M(_.Ae));
    };

    _.h.Kg = function () {
      this.a.trigger(new _.M(_.ze));
    };

    _.h.kj = function () {
      this.h = 2;
    };

    _.h.Vi = function () {
      this.fa(_.Mo);
    };

    _.h.Gg = function (a) {
      var b = this.a.getStats();
      this.a.trigger(new _.M(_.dc, {
        detail: {
          bandwidth: a.totalBitrate,
          width: b.width,
          height: b.height
        }
      }));
    };

    _.h.Hg = function (a) {
      a = new _.K(_.L, 7, 7300, {
        detailedErrorCode: a.detailedErrorCode,
        error: a.error,
        reason: a.reason
      });
      this.a.trigger(new _.M(_.Rc, {
        detail: a
      }));
      this.fa(_.hm);
    };

    zJ.prototype.init = function () {
      cast.framework.CastReceiverContext.getInstance().getPlayerManager().addEventListener(AJ(), this.a);
    };

    zJ.prototype.release = function () {
      cast.framework.CastReceiverContext.getInstance().getPlayerManager().removeEventListener(AJ(), this.a);
    };

    zJ.prototype.getTimelineCues = function () {
      return cast.framework.CastReceiverContext.getInstance().getPlayerManager().getTimedMetadata().map(function (a) {
        return BJ(a);
      });
    };

    zJ.prototype.f = function (a) {
      if (a instanceof cast.framework.events.TimedMetadataEvent) {
        var b = null;

        switch (a.type) {
          case cast.framework.events.EventType.TIMED_METADATA_CHANGED:
            b = _.mh;
            break;

          case cast.framework.events.EventType.TIMED_METADATA_ENTER:
            b = _.oh;
            break;

          case cast.framework.events.EventType.TIMED_METADATA_EXIT:
            b = _.ph;
        }

        b && this.Mb(new _.M(b, {
          detail: BJ(a.timedMetadataInfo)
        }));
      } else for (a = _.t(this.getTimelineCues()), b = a.next(); !b.done; b = a.next()) {
        this.Mb(new _.M(_.mh, {
          detail: b.value
        }));
      }
    };

    _.u(CJ, _.R);

    _.h = CJ.prototype;

    _.h.Cb = function (a) {
      this.l = a;
      DJ().addEventListener(cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, this.m);
    };

    _.h.release = function () {
      this.h = [];
      this.j = [];
      this.a = this.f = null;
    };

    _.h.load = function () {};

    _.h.destroy = function () {
      this.l = null;
      DJ().removeEventListener(cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, this.m);
    };

    _.h.getVideoTracks = function () {
      return [];
    };

    _.h.getAudioTracks = function () {
      return this.h;
    };

    _.h.da = function () {
      return this.j;
    };

    _.h.ea = function () {
      return null;
    };

    _.h.wa = function () {
      var a = this.ga();
      return a && a.renditions[0];
    };

    _.h.ya = function () {
      var a = this.ha();
      return a && a.renditions[0];
    };

    _.h.Na = function () {
      return null;
    };

    _.h.Wa = function () {
      return null;
    };

    _.h.Xa = function () {
      return null;
    };

    _.h.za = function () {
      return null;
    };

    _.h.ga = function () {
      var a = null;

      if (this.f) {
        var b = this.f.getActiveId();
        _typeof(b) === _.ud && (b = b.toString(), a = this.getAudioTracks().find(function (c) {
          return c.id === b;
        }) || null);
      }

      return a;
    };

    _.h.ha = function () {
      var a = null;

      if (this.a) {
        var b = this.a.getActiveIds()[0];
        _typeof(b) === _.ud && (b = b.toString(), a = this.da().find(function (c) {
          return c.id === b;
        }) || null);
      }

      return a;
    };

    _.h.Ta = function () {
      this.g.warn("Video tracks unavailable on Cast");
    };

    _.h.ka = function (a) {
      a && this.f && this.f.setActiveById(+a.id);
    };

    _.h.sa = function (a) {
      this.a && (a ? this.a.setActiveByIds([+a.id]) : this.a.setActiveByIds([]));
    };

    _.h.Sa = function () {
      this.g.warn("Video renditions unavailable on Cast");
    };

    _.h.eb = function (a) {
      this.ka(a && a.track);
    };

    _.h.gb = function (a) {
      this.sa(a && a.track);
    };

    _.h.addTextTrack = function (a) {
      var b = this,
          c,
          d;
      return _.z(function (e) {
        if (1 == e.a) return _.v(e, bJ(a, Object.values(cast.framework.messages.CaptionMimeType), b.l.getNetworkEngine()), 2);

        if ((c = e.f) && b.a) {
          d = new cast.framework.messages.Track(b.o++, cast.framework.messages.TrackType.TEXT);
          d.isInBand = !1;
          d.language = c.language;
          d.name = c.label;
          d.subtype = c.kind;
          d.trackContentId = c.url;
          d.trackContentType = c.mimeType;
          d.customData = {
            mimeType: a.mimeType,
            url: a.url
          };

          try {
            b.a.addTracks([d]), FJ(b);
          } catch (f) {
            throw b.g.warn("failed on track", a), f;
          }
        }

        _.w(e);
      });
    };

    _.h.na = function () {
      return !0;
    };

    _.h.pj = function () {
      this.f = DJ().getAudioTracksManager();
      var a = this.f.getTracks();
      this.h = EJ(_.Q, a);
      FJ(this);
      a = this.l.getConfiguration();
      GJ(this, _.Q, a.preferredAudioLanguage, a.preferredAudioRole);
      GJ(this, _.O, a.preferredTextLanguage, a.preferredTextRole);
    };

    CJ.prototype.isAbrEnabled = CJ.prototype.na;
    CJ.prototype.addTextTrack = CJ.prototype.addTextTrack;
    CJ.prototype.setTextRendition = CJ.prototype.gb;
    CJ.prototype.setAudioRendition = CJ.prototype.eb;
    CJ.prototype.setVideoRendition = CJ.prototype.Sa;
    CJ.prototype.setTextTrack = CJ.prototype.sa;
    CJ.prototype.setAudioTrack = CJ.prototype.ka;
    CJ.prototype.setVideoTrack = CJ.prototype.Ta;
    CJ.prototype.getTextTrack = CJ.prototype.ha;
    CJ.prototype.getAudioTrack = CJ.prototype.ga;
    CJ.prototype.getVideoTrack = CJ.prototype.za;
    CJ.prototype.getLoadingTextRendition = CJ.prototype.Xa;
    CJ.prototype.getLoadingAudioRendition = CJ.prototype.Wa;
    CJ.prototype.getLoadingVideoRendition = CJ.prototype.Na;
    CJ.prototype.getTextRendition = CJ.prototype.ya;
    CJ.prototype.getAudioRendition = CJ.prototype.wa;
    CJ.prototype.getVideoRendition = CJ.prototype.ea;
    CJ.prototype.getTextTracks = CJ.prototype.da;
    CJ.prototype.getAudioTracks = CJ.prototype.getAudioTracks;
    CJ.prototype.getVideoTracks = CJ.prototype.getVideoTracks;

    _.u(HJ, _.Vh);

    _.h = HJ.prototype;

    _.h.init = function (a, b) {
      var c = this;
      this.A = a;
      b && (this.g = this.o = b);
      var d = IJ();
      d.setMessageInterceptor(cast.framework.messages.MessageType.MEDIA_STATUS, this.Xi.bind(this));
      d.setMediaPlaybackInfoHandler(this.sg.bind(this));
      this.a = new yJ(this);
      this.a.init();
      this.h = new CJ();
      this.h.Cb(this);
      this.m = new zJ(function (e) {
        return c.trigger(e);
      });
      this.m.init();
    };

    _.h.unload = function () {
      var a = IJ();
      a.getPlayerState() !== cast.framework.messages.PlayerState.IDLE && a.stop();
      this.h && this.h.release();
      this.m && this.m.release();
      this.f = null;
      return Promise.resolve();
    };

    _.h.release = function () {
      var a = this;
      return this.unload().then(function () {
        a.a && a.a.release();
      });
    };

    _.h.destroy = function () {
      var a = this;
      return _.z(function (b) {
        if (1 == b.a) return a.A = null, a.o = _.Dj(), a.g = a.o, a.j = -1, a.w = null, a.a ? _.v(b, a.a.destroy(), 3) : b.G(2);
        2 != b.a && (a.a = null);
        a.h && (a.h.destroy(), a.h = null);

        _.w(b);
      });
    };

    _.h.play = function () {
      var a = IJ();
      if (null !== a.getBreakManager().getBreakClipCurrentTimeSec()) return Promise.reject("Cannot play during ads playout.");
      a.play();
      return Promise.resolve();
    };

    _.h.pause = function () {
      var a = IJ();
      if (null !== a.getBreakManager().getBreakClipCurrentTimeSec()) return Promise.reject("Cannot pause during ads playout.");
      a.pause();
      return Promise.resolve();
    };

    _.h.isPaused = function () {
      return IJ().getPlayerState() === cast.framework.messages.PlayerState.PAUSED;
    };

    _.h.isEnded = function () {
      return IJ().getPlayerState() === cast.framework.messages.PlayerState.IDLE;
    };

    _.h.seek = function (a) {
      var b = IJ();
      if (null !== b.getBreakManager().getBreakClipCurrentTimeSec()) return Promise.reject(MI);
      b.seek(a);
      return Promise.resolve();
    };

    _.h.getPosition = function () {
      return IJ().getCurrentTimeSec();
    };

    _.h.getDuration = function () {
      return IJ().getDurationSec();
    };

    _.h.getPlaybackRate = function () {
      return IJ().getPlaybackRate();
    };

    _.h.setPlaybackRate = function (a) {
      if (0 < a) {
        var b = new cast.framework.messages.SetPlaybackRateRequestData();
        b.playbackRate = a;
        IJ().sendLocalMediaRequest(b);
      }
    };

    _.h.getVolume = function () {
      return cast.framework.CastReceiverContext.getInstance().getSystemVolume().level || null;
    };

    _.h.setVolume = function (a) {
      0 <= a && 1 >= a && cast.framework.CastReceiverContext.getInstance().setSystemVolumeLevel(a);
    };

    _.h.setMuted = function (a) {
      cast.framework.CastReceiverContext.getInstance().setSystemVolumeMuted(a);
    };

    _.h.isMuted = function () {
      return cast.framework.CastReceiverContext.getInstance().getSystemVolume().muted || null;
    };

    _.h.getLoadedSource = function () {
      var a = IJ().getMediaInformation();

      if (a) {
        var b = IJ().getPlaybackConfig();
        b = !!b && b.protectionSystem !== cast.framework.ContentProtection.NONE;
        var c = this.w && -1 !== this.j ? this.w[this.j] : null;
        c = c ? c.name : void 0;
        !c && a.metadata && (c = a.metadata.title);
        return {
          url: a.contentId,
          type: a.contentType,
          gk: b,
          name: c
        };
      }

      return null;
    };

    _.h.getDrmInfo = function () {
      return null;
    };

    _.h.getPresentationStartTime = function () {
      var a = IJ().getMediaInformation();
      return a ? a.startAbsoluteTime || 0 : 0;
    };

    _.h.getSeekRange = function () {
      var a = {
        start: 0,
        end: this.getDuration()
      };

      if (this.isLive()) {
        var b = IJ().getLiveSeekableRange();
        b && _typeof(b.start) === _.ud && _typeof(b.end) === _.ud && (a = {
          start: b.start,
          end: b.end
        });
      }

      return a;
    };

    _.h.getState = function () {
      return this.a ? this.a.getState() : _.Do;
    };

    _.h.getStats = function () {
      var a = _.Yl();

      if (this.f) {
        a = IJ().getStats();
        this.f.m = a.estimatedBandwidth || NaN;
        this.f.A = a.streamBandwidth || NaN;
        var b = this.f,
            c = a.height || NaN;
        b.j = a.width || NaN;
        b.f = c;
        b = this.f;
        c = _typeof(a.decodedFrames) === _.ud ? a.decodedFrames : NaN;
        b.h = _typeof(a.droppedFrames) === _.ud ? a.droppedFrames : NaN;
        b.g = c;
        a = this.f.getStats();
      }

      return a;
    };

    _.h.isLive = function () {
      return -1 === this.getDuration();
    };

    _.h.load = function (a) {
      var b = this,
          c,
          d;
      return _.z(function (e) {
        b.f = new _.Xl();
        b.a.j = b.f.a;
        b.w = _.um(a);
        _.Gj(a) && (b.g = _.Fj(b.o, a));
        if (b.B) return b.B = !1, e["return"]();
        c = b.w[b.j];
        d = new cast.framework.messages.LoadRequestData();
        d.autoplay = b.g.autoplay;
        _typeof(b.g.startTime) === _.ud && (d.currentTime = b.g.startTime);
        c.type && (d.media.contentType = c.type);
        d.media.contentId = c.url;
        d.media.customData = {
          playerConfiguration: $I(b.g),
          local: !0
        };
        return _.v(e, IJ().load(d), 0);
      });
    };

    _.h.getBufferInfo = function () {
      this.C.warn(_.qa);
      return new _.Uh();
    };

    _.h.getTrackManager = function () {
      return this.h;
    };

    _.h.getConfiguration = function () {
      return this.g;
    };

    _.h.getSurface = function () {
      return this.A;
    };

    _.h.setNetworkEngine = function (a) {
      this.D = a;
    };

    _.h.getNetworkEngine = function () {
      return this.D;
    };

    _.h.getSourceIndex = function () {
      return this.j;
    };

    _.h.setSourceIndex = function (a) {
      this.j = a;
    };

    _.h.getPeriods = function () {
      return [];
    };

    _.h.namespace = function () {
      return UI;
    };

    _.h.getTimelineCues = function () {
      return this.m && this.m.getTimelineCues() || [];
    };

    _.h.resetAbr = function () {
      this.C.warn(QI);
    };

    _.h.onError = function (a) {
      this.trigger(new _.M(_.Rc, {
        detail: a
      }));
    };

    _.h.canPlay = function () {
      return _.Bi() ? 2 : 0;
    };

    _.h.Xi = function (a) {
      a.customData || (a.customData = {});
      a.customData.stats = $I(this.getStats());
      return a;
    };

    _.h.sg = function (a, b) {
      var c = null;
      a.media.customData && (c = aJ(a.media.customData.playerConfiguration));
      var d = c ? c.abr : null;
      d && _typeof(d.defaultBandwidthEstimate) === _.ud ? b.initialBandwidth = d.defaultBandwidthEstimate : b.initialBandwidth = void 0;
      LJ(c, b);
      return b;
    };

    _.h.getTextDisplayer = function () {
      return null;
    };

    _.h.setDrmCustomDataModifier = function () {};

    _.h.setCdnErrorCallback = function () {};

    HJ.prototype.getTextDisplayer = HJ.prototype.getTextDisplayer;
    HJ.prototype.getNetworkEngine = HJ.prototype.getNetworkEngine;
    HJ.prototype.setNetworkEngine = HJ.prototype.setNetworkEngine;
    _.h = Z.prototype;

    _.h.kb = function () {
      return "Google Cast Framework";
    };

    _.h.lb = function () {
      return cast.framework.VERSION;
    };

    _.h.qb = function () {
      return 0;
    };

    _.h.Z = function () {
      return "";
    };

    _.h.getCreativeId = function () {
      return "";
    };

    _.h.getApiFramework = function () {
      return null;
    };

    _.h.getAdSystem = function () {
      return "";
    };

    _.h.getAdvertiserName = function () {
      return "";
    };

    _.h.getTitle = function () {
      return this.a.title || "";
    };

    _.h.getDuration = function () {
      return this.a.duration || 0;
    };

    _.h.getSkipTimeOffset = function () {
      return this.a.whenSkippable || 0;
    };

    _.h.Xb = function () {
      return !1;
    };

    _.h.Db = function () {
      return this.a.clickThroughUrl || null;
    };

    _.h.getMediaUrl = function () {
      return this.a.contentUrl || this.a.contentId || null;
    };

    _.h.nb = function () {
      return 0;
    };

    _.h.mb = function () {
      return 0;
    };

    _.h.Ya = function () {
      return 0;
    };

    _.h.Oa = function () {
      switch (this.Eb()) {
        case 0:
          return 0;

        case -1:
          return 2;

        default:
          return 1;
      }
    };

    _.h.getPodIndex = function () {
      return this.g;
    };

    _.h.Eb = function () {
      return this.f.position;
    };

    _.h.Fb = function () {
      return this.h;
    };

    _.h.pb = function () {
      return this.j;
    };

    _.h.getWrapperAdIds = function () {
      return [];
    };

    _.h.getWrapperAdSystems = function () {
      return [];
    };

    _.h.getWrapperCreativeIds = function () {
      return [];
    };

    Z.prototype.getWrapperCreativeIds = Z.prototype.getWrapperCreativeIds;
    Z.prototype.getWrapperAdSystems = Z.prototype.getWrapperAdSystems;
    Z.prototype.getWrapperAdIds = Z.prototype.getWrapperAdIds;
    Z.prototype.getSequenceLength = Z.prototype.pb;
    Z.prototype.getPositionInSequence = Z.prototype.Fb;
    Z.prototype.getPodTimeOffset = Z.prototype.Eb;
    Z.prototype.getPodIndex = Z.prototype.getPodIndex;
    Z.prototype.getPodType = Z.prototype.Oa;
    Z.prototype.getMediaBitrate = Z.prototype.Ya;
    Z.prototype.getMediaHeight = Z.prototype.mb;
    Z.prototype.getMediaWidth = Z.prototype.nb;
    Z.prototype.getMediaUrl = Z.prototype.getMediaUrl;
    Z.prototype.getClickThroughUrl = Z.prototype.Db;
    Z.prototype.isBumper = Z.prototype.Xb;
    Z.prototype.getSkipTimeOffset = Z.prototype.getSkipTimeOffset;
    Z.prototype.getDuration = Z.prototype.getDuration;
    Z.prototype.getTitle = Z.prototype.getTitle;
    Z.prototype.getAdvertiserName = Z.prototype.getAdvertiserName;
    Z.prototype.getAdSystem = Z.prototype.getAdSystem;
    Z.prototype.getApiFramework = Z.prototype.getApiFramework;
    Z.prototype.getCreativeId = Z.prototype.getCreativeId;
    Z.prototype.getId = Z.prototype.Z;
    Z.prototype.getTechnology = Z.prototype.qb;
    Z.prototype.getAdManagerVersion = Z.prototype.lb;
    Z.prototype.getAdManagerName = Z.prototype.kb;

    MJ.prototype.getCuePoints = function () {
      return this.a.map(function (a) {
        return a.position;
      });
    };

    MJ.prototype.Gb = function () {
      return !!this.a.find(function (a) {
        return 0 === a.position;
      });
    };

    MJ.prototype.Za = function () {
      return !!this.a.find(function (a) {
        return -1 === a.position;
      });
    };

    MJ.prototype.hasPostroll = MJ.prototype.Za;
    MJ.prototype.hasPreroll = MJ.prototype.Gb;
    MJ.prototype.getCuePoints = MJ.prototype.getCuePoints;
    _.h = OJ.prototype;

    _.h.load = function () {
      var a = this;
      return _.z(function (b) {
        PJ && (PJ = !1, UJ(a, 0));

        _.w(b);
      });
    };

    _.h.start = function () {
      return _.z(function (a) {
        NJ().play();

        _.w(a);
      });
    };

    _.h.resume = function () {
      -1 !== this.getPosition() && NJ().play();
    };

    _.h.pause = function () {
      -1 !== this.getPosition() && NJ().pause();
    };

    _.h.skip = function () {};

    _.h.getVolume = function () {
      return this.l.getVolume() || 0;
    };

    _.h.setVolume = function (a) {
      this.l.setVolume(a);
    };

    _.h.getPosition = function () {
      var a = this.a && this.a.getBreakClipCurrentTimeSec();
      return _typeof(a) === _.ud ? a : -1;
    };

    _.h.dispose = function () {
      var a = this;
      return _.z(function (b) {
        NJ().removeEventListener(a.f, a.g);

        _.w(b);
      });
    };

    _.h.Mg = function (a) {
      var b = cast.framework.events.EndedReason;

      switch (a.type) {
        case cast.framework.events.EventType.PLAYER_LOADING:
          this.a = NJ().getBreakManager();
          this.a.setPlayWatchedBreak(!0);
          a = this.a.getBreaks();
          this.l.trigger(new _.M(_.Kb, {
            adsTimeline: new MJ(a)
          }));
          break;

        case cast.framework.events.EventType.BREAK_CLIP_LOADING:
          TJ(this, _.Ab, a);
          break;

        case cast.framework.events.EventType.BREAK_STARTED:
          TJ(this, _.sb, a);
          break;

        case cast.framework.events.EventType.BREAK_ENDED:
          TJ(this, _.tb, a);
          break;

        case cast.framework.events.EventType.BREAK_CLIP_STARTED:
          TJ(this, _.Gb, a);
          break;

        case cast.framework.events.EventType.BREAK_CLIP_ENDED:
          a.endedReason === b.SKIPPED ? (TJ(this, _.Fb, a), TJ(this, _.Hb, a)) : a.endedReason === b.STOPPED ? TJ(this, _.Hb, a) : a.endedReason === b.END_OF_STREAM ? (TJ(this, _.wb, a), TJ(this, _.Hb, a)) : a.endedReason === b.ERROR && UJ(this, 1);
          break;

        case cast.framework.events.EventType.PLAYING:
          TJ(this, _.Eb, a);
          break;

        case cast.framework.events.EventType.PAUSE:
          TJ(this, _.Cb, a);
          break;

        case cast.framework.events.EventType.BUFFERING:
          a.isBuffering ? TJ(this, _.ub, a) : TJ(this, _.Eb, a);
      }
    };

    OJ.prototype.getPosition = OJ.prototype.getPosition;
    OJ.prototype.setVolume = OJ.prototype.setVolume;
    OJ.prototype.getVolume = OJ.prototype.getVolume;
    OJ.prototype.skip = OJ.prototype.skip;
    OJ.prototype.pause = OJ.prototype.pause;
    OJ.prototype.resume = OJ.prototype.resume;
    var PJ = !1;
    _.h = VJ.prototype;

    _.h.init = function (a) {
      var b = this;
      a && (this.f = new HJ(), _.so(a, this.f), this.l = a, this.o.on(window, "unload", function () {
        return _.z(function (c) {
          return b.l && b.l.getState() !== _.Co ? _.v(c, YI(b.l), 0) : c.G(0);
        });
      }));
    };

    _.h.start = function () {
      if (!this.a && window.cast && cast.framework && cast.framework.CastReceiverContext) {
        this.a = !0;
        var a = cast.framework.CastReceiverContext.getInstance(),
            b = a.getPlayerManager(),
            c = new cast.framework.CastReceiverOptions();
        c.customNamespaces = {};
        c.customNamespaces[WI] = cast.framework.system.MessageType.JSON;
        var d = new cast.framework.PlaybackConfig();
        d.manifestHandler = this.ri.bind(this);
        c.playbackConfig = d;
        if (d = this.l && this.l.getSurface().getMedia()) c.mediaElement = d;
        b.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, this.pi.bind(this));
        b.addEventListener(cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, this.A);
        a.start(c);
        a.addCustomMessageListener(WI, this.w);
      }
    };

    _.h.stop = function () {
      if (this.a) {
        this.a = !1;
        this.o.release();
        var a = cast.framework.CastReceiverContext.getInstance();
        a.getPlayerManager().removeEventListener(cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, this.A);
        a.removeCustomMessageListener(WI, this.w);
        a.stop();
        this.l = this.f = null;
      }
    };

    _.h.Xc = function (a) {
      this.j = a;
    };

    _.h.Cj = function (a) {
      this.m = a;
    };

    _.h.on = function (a, b) {
      cast.framework.CastReceiverContext.getInstance().addEventListener(a, b);
    };

    _.h.off = function (a, b) {
      cast.framework.CastReceiverContext.getInstance().removeEventListener(a, b);
    };

    _.h.addMessageListener = function (a) {
      _typeof(a) === _.Tc && this.g.add(a);
    };

    _.h.removeMessageListener = function (a) {
      _typeof(a) === _.Tc && this.g["delete"](a);
    };

    _.h.sendMessage = function (a, b) {
      cast.framework.CastReceiverContext.getInstance().sendCustomMessage(WI, b, $I(a));
    };

    _.h.Vb = function () {
      return this.a;
    };

    _.h.ei = function () {
      var a = null,
          b = cast.framework.CastReceiverContext.getInstance().getPlayerManager().getMediaInformation();
      b && b.metadata && (a = b.metadata);
      return _.B.ua(a);
    };

    _.h.ri = function (a) {
      a = a.trim();
      if (a.startsWith("#EXTM3U")) return ZJ(this, a);

      try {
        var b = new DOMParser().parseFromString(a, _.qe);
      } catch (q) {
        return a;
      }

      var c = b.getElementsByTagName("MPD")[0];

      if (c) {
        a = c;
        this.h.debug("Detected DASH, parsing");
        b = cast.framework.CastReceiverContext.getInstance();
        c = a.getElementsByTagName("Period");

        for (var d = c.length - 1; 0 <= d; --d) {
          for (var e = c[d].getElementsByTagName(_.ka), f = e.length - 1; 0 <= f; --f) {
            var g = e[f].getAttribute("contentType");

            if (g === _.Ee || g === _.Xb) {
              g = e[f].getAttribute(_.kd);

              for (var k = e[f].getElementsByTagName(_.fb), l = k.length - 1; 0 <= l; --l) {
                var m = k[l].getAttribute(_.kd) || g,
                    n = k[l].getAttribute(_.xc),
                    p = k[l].getAttribute(_.Te) || void 0,
                    r = k[l].getAttribute(_.Uc) || void 0;
                void 0 !== p && (p = +p);
                void 0 !== r && (r = +r);
                b.canDisplayType(m, n, p, r) || e[f].removeChild(k[l]);
              }

              e[f].getElementsByTagName(_.fb).length || c[d].removeChild(e[f]);
            }
          }

          c[d].getElementsByTagName(_.ka).length || a.removeChild(c[d]);
        }

        return new XMLSerializer().serializeToString(a);
      }

      if (c = b.getElementsByTagName(_.kb)[0]) {
        a = c;
        this.h.debug("Detected Smooth, parsing");
        b = cast.framework.CastReceiverContext.getInstance();
        c = a.getElementsByTagName("StreamIndex");

        for (d = c.length - 1; 0 <= d; --d) {
          if (c[d].getAttribute("Type") === _.Ee) {
            e = c[d].getElementsByTagName(_.db);

            for (f = e.length - 1; 0 <= f; --f) {
              g = e[f].getAttribute(_.Ta) || void 0, k = e[f].getAttribute(_.Qa) || void 0, void 0 !== g && (g = +g), void 0 !== k && (k = +k), b.canDisplayType(_.Ge, void 0, g, k) || c[d].removeChild(e[f]);
            }

            c[d].getElementsByTagName(_.db).length || a.removeChild(c[d]);
          }
        }

        a = new XMLSerializer().serializeToString(a);
      }

      return a;
    };

    _.h.pi = function (a) {
      var b = this,
          c,
          d,
          e,
          f;
      return _.z(function (g) {
        switch (g.a) {
          case 1:
            a.media.customData && (c = aJ(a.media.customData.playerConfiguration));

            if (!b.l || !c) {
              g.G(2);
              break;
            }

            if (!b.j) {
              g.G(3);
              break;
            }

            return _.v(g, Promise.resolve(b.j(c)), 4);

          case 4:
            c = (d = g.f) || c;

          case 3:
            if (!c.ima) {
              g.G(5);
              break;
            }

            return _.v(g, RJ(a.media, c.ima, b.l.getNetworkEngine()), 5);

          case 5:
            _typeof(c.startTime) === _.ud && c.startTime !== a.currentTime && (a.currentTime = c.startTime);

            if (a.media.customData.local) {
              g.G(7);
              break;
            }

            b.f.B = !0;
            return _.v(g, _.xo(b.l, c), 8);

          case 8:
            return _.v(g, _.yo(b.l), 9);

          case 9:
            e = b.l.getLoadedSource(), a.media.contentId = e.url, a.media.contentType = e.type, e.xb && (a.media.hlsVideoSegmentFormat = cJ(e.xb, _.sh)), e.audioMimeType && (a.media.hlsSegmentFormat = cJ(e.audioMimeType, _.Q));

          case 7:
            void 0 === a.autoplay && (a.autoplay = b.l.getConfiguration().autoplay);

          case 2:
            if (!b.m) {
              g.G(10);
              break;
            }

            return _.v(g, Promise.resolve(b.m(a)), 11);

          case 11:
            (f = g.f) && (a = f);

          case 10:
            return g["return"](a);
        }
      });
    };

    _.h.Ui = function (a) {
      !this.l || a.media.customData && a.media.customData.local || _.Ao(this.l);
    };

    _.h.Fg = function (a) {
      if (0 < this.g.size) {
        var b = aJ(a.data);
        this.g.forEach(function (c) {
          return c(b);
        });
      }
    };

    _.A(VI, VJ);

    VJ.prototype.getContentMetadata = VJ.prototype.ei;
    VJ.prototype.isApiReady = VJ.prototype.Vb;
    VJ.prototype.sendMessage = VJ.prototype.sendMessage;
    VJ.prototype.removeMessageListener = VJ.prototype.removeMessageListener;
    VJ.prototype.addMessageListener = VJ.prototype.addMessageListener;
    VJ.prototype.off = VJ.prototype.off;
    VJ.prototype.on = VJ.prototype.on;
    VJ.prototype.setLoadRequestDataInterceptor = VJ.prototype.Cj;
    VJ.prototype.setPlayerConfigInterceptor = VJ.prototype.Xc;
    VJ.prototype.stop = VJ.prototype.stop;
    VJ.prototype.start = VJ.prototype.start;
    VJ.prototype.init = VJ.prototype.init;
    VJ.getInstance = XJ;
    var WJ = null;
    _.h = $J.prototype;

    _.h.load = function () {
      var a = this,
          b,
          c,
          d,
          e,
          f;
      return _.z(function (g) {
        a.a = a.f.o;
        if (a.a) for (b = a.a.controller, c = a.mj.bind(a), d = _.t(a.h), e = d.next(); !e.done; e = d.next()) {
          f = e.value, a.g.on(b, f, c);
        }

        _.w(g);
      });
    };

    _.h.start = function () {
      return _.z(function (a) {
        _.w(a);
      });
    };

    _.h.resume = function () {
      this.a && this.a.isPlayingBreak && this.a.isPaused && this.a.controller.playOrPause();
    };

    _.h.pause = function () {
      this.a && this.a.isPlayingBreak && !this.a.isPaused && this.a.controller.playOrPause();
    };

    _.h.skip = function () {
      var a = this.f.a;
      a && this.f.sendMessage(XI, {
        type: "SKIP_AD",
        requestId: Math.round(1E3 * Math.random()),
        mediaSessionId: a.mediaSessionId
      });
    };

    _.h.getVolume = function () {
      return this.f.getVolume() || 0;
    };

    _.h.setVolume = function (a) {
      this.f.setVolume(a);
    };

    _.h.getPosition = function () {
      var a = -1,
          b = this.f.a;
      b && (b = b.getEstimatedBreakClipTime(), _typeof(b) === _.ud && (a = b));
      return a;
    };

    _.h.dispose = function () {
      var a = this;
      return _.z(function (b) {
        a.g.release();

        _.w(b);
      });
    };

    _.h.mj = function (a) {
      switch (a.field) {
        case "mediaInfo":
          a.value && (a = a.value, a.breaks && this.f.trigger(new _.M(_.Kb, {
            adsTimeline: new MJ(a.breaks)
          })));
          break;

        case "isPlayingBreak":
          a.value ? bK(this, _.sb) : (bK(this, _.wb), bK(this, _.Hb), bK(this, _.tb));
          break;

        case "currentBreakClipNumber":
          0 <= a.value && (0 < a.value && (bK(this, _.wb), bK(this, _.Hb)), bK(this, _.Gb));
          break;

        case "isPaused":
          this.a.isPlayingBreak && (a.value ? bK(this, _.Cb) : bK(this, _.Eb));
      }
    };

    $J.prototype.getPosition = $J.prototype.getPosition;
    $J.prototype.setVolume = $J.prototype.setVolume;
    $J.prototype.getVolume = $J.prototype.getVolume;
    $J.prototype.skip = $J.prototype.skip;
    $J.prototype.pause = $J.prototype.pause;
    $J.prototype.resume = $J.prototype.resume;

    cK.prototype.name = function () {
      return "clpp.cast.ads.SenderAdsManagerFactory";
    };

    cK.prototype.$ = function (a, b) {
      return a.namespace() !== _.tc ? !1 : !(!b || !b.ima);
    };

    cK.prototype.create = function (a) {
      return new $J(a.a);
    };

    cK.prototype.create = cK.prototype.create;
    cK.prototype.isSupported = cK.prototype.$;
    cK.prototype.name = cK.prototype.name;

    _.ep(new cK());

    dK.prototype.name = function () {
      return "clpp.cast.ads.AdsManagerFactory";
    };

    dK.prototype.$ = function (a, b) {
      return XJ().Vb() ? !(!b || !b.ima) : !1;
    };

    dK.prototype.create = function (a) {
      return new OJ(a);
    };

    dK.prototype.create = dK.prototype.create;
    dK.prototype.isSupported = dK.prototype.$;
    dK.prototype.name = dK.prototype.name;

    _.ep(new dK());
  };

  if (typeof module != "undefined" && module.exports) {
    var x = require("./cl.core.min.js");

    _ = x._;
    f.call(g, this);
    module.exports = g;
  } else if (typeof define != "undefined" && define.amd) {
    define(["./cl.core.min"], function (c) {
      _ = c._;
      f.call(g, this);
      return g;
    });
  } else {
    _ = this.clpp._;
    f.call(g, this);
  }
})();