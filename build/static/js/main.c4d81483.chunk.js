(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        112: function(e, t, n) {
            'use strict';
            n.d(t, 'a', function() {
                return i;
            }),
                n.d(t, 'b', function() {
                    return c;
                }),
                n.d(t, 'c', function() {
                    return s;
                });
            var r = n(353),
                a = n(95),
                o = Object(r.a)({ baseURL: a.a.api.base }, {}),
                i = o.api,
                c = o.authApi,
                s = o.saga;
        },
        118: function(e, t, n) {
            'use strict';
            var r = n(1),
                a = n.n(r);
            n.d(t, 'd', function() {
                return a.a;
            });
            n(0);
            var o = n(36);
            n.d(t, 'h', function() {
                return o.compose;
            }),
                n.d(t, 'g', function() {
                    return o.bindActionCreators;
                });
            var i = n(33);
            n.d(t, 'j', function() {
                return i.connect;
            });
            var c = n(4);
            n.d(t, 'l', function() {
                return c;
            });
            var s = n(41);
            n.d(t, 'e', function() {
                return s.b;
            }),
                n.d(t, 'f', function() {
                    return s.c;
                }),
                n.d(t, 'c', function() {
                    return s.a;
                });
            var u = n(37);
            n.d(t, 'a', function() {
                return u.a;
            });
            var l = n(42);
            n.d(t, 'b', function() {
                return l.FormattedMessage;
            }),
                n.d(t, 'k', function() {
                    return l.injectIntl;
                });
            var d = n(95);
            n.d(t, 'i', function() {
                return d.a;
            });
        },
        149: function(e, t, n) {
            'use strict';
            var r = n(31),
                a = n(320),
                o = n(54),
                i = n(150),
                c = n(112),
                s = n(68),
                u = n(1),
                l = n.n(u),
                d = n(84),
                p = n.n(d),
                f = n(37),
                m = function(e) {
                    e.showError, e.small;
                    return {};
                },
                h = function() {
                    return {};
                },
                g = function(e) {
                    var t = e.input,
                        n = e.label,
                        r = e.id,
                        a = e.disabled,
                        o = e.meta,
                        i = o.error,
                        c = o.touched,
                        u = e.type,
                        d = e.withLabel,
                        g = e.style,
                        v = e.small,
                        b = c && i;
                    return l.a.createElement(
                        f.a,
                        { showError: b, small: v, rule: m },
                        d &&
                            l.a.createElement(f.a, {
                                rule: h,
                                render: function(e) {
                                    e.className;
                                    return l.a.createElement('label', { htmlFor: r }, n);
                                },
                            }),
                        l.a.createElement(
                            p.a,
                            Object(s.a)({ id: r, disabled: a, type: u, style: g, placeholder: d ? null : n }, t),
                        ),
                    );
                };
            g.defaultProps = { disabled: !1, withLabel: !1, style: {}, small: !1 };
            var v = g,
                b = n(118),
                w = function() {
                    return b.d.createElement(b.b, { id: 'loader.title' });
                },
                k = { LOGIN_FORM: ''.concat('auth/', 'LOGIN_FORM') },
                y = o.actions,
                A = (y.login, y.logout),
                O = Object(a.a)(o.selectors.authUser, function(e) {
                    return e ? e.email : '';
                }),
                E = { logout: b.d.createElement(b.b, { id: 'logout' }) };
            var j = function(e) {
                    var t = e.logout,
                        n = e.userEmail;
                    return b.d.createElement(
                        b.d.Fragment,
                        null,
                        b.d.createElement('div', null, 'Signed in user: ', n),
                        b.d.createElement('button', { type: 'button', onClick: t }, E.logout),
                    );
                },
                x = { logout: A },
                C = Object(b.j)(function(e) {
                    return { userEmail: O(e) };
                }, x)(j),
                I = function(e) {
                    var t = e.handleSubmit,
                        n = e.intl,
                        a = e.submitting,
                        o = e.error;
                    return b.d.createElement(
                        r.Form,
                        { onSubmit: t },
                        b.d.createElement(r.Field, {
                            disabled: a,
                            id: 'email',
                            name: 'email',
                            component: v,
                            type: 'text',
                            label: n.formatMessage({ id: 'login.email' }),
                            withLabel: !0,
                        }),
                        b.d.createElement(r.Field, {
                            disabled: a,
                            id: 'password',
                            name: 'password',
                            component: v,
                            type: 'password',
                            label: n.formatMessage({ id: 'login.password' }),
                            withLabel: !0,
                        }),
                        b.d.createElement(
                            'button',
                            { type: 'submit', disabled: a, id: 'submitButton' },
                            n.formatMessage({ id: 'login.submit' }),
                        ),
                        o && b.d.createElement('p', null, o),
                    );
                };
            I.defaultProps = { error: '' };
            var S = I,
                L = Object(i.a)(b.i.forms.login, function() {
                    return { type: k.LOGIN_FORM };
                }),
                T = {
                    form: b.i.forms.login,
                    validate: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = {};
                        return e.email || (t.email = 'Required'), e.password || (t.password = 'Required'), t;
                    },
                },
                R = Object(b.h)(
                    b.k,
                    Object(b.j)(null, function(e) {
                        return Object(b.g)({ onSubmit: L }, e);
                    }),
                    Object(r.reduxForm)(T),
                )(S),
                q = (0, o.HOC.authorizable)(C, R, w),
                F = n(9),
                N = n.n(F),
                U = N.a.mark(B);
            function B(e) {
                var t, n, r, a, o, i;
                return N.a.wrap(
                    function(s) {
                        for (;;)
                            switch ((s.prev = s.next)) {
                                case 0:
                                    return (
                                        (t = e.email),
                                        (n = e.password),
                                        (s.next = 3),
                                        c.a.post(b.i.api.signin, { email: t, password: n })
                                    );
                                case 3:
                                    return (
                                        (r = s.sent),
                                        (a = r.data),
                                        (o = a.credentials),
                                        (i = a.user),
                                        s.abrupt('return', { tokens: o, user: i })
                                    );
                                case 6:
                                case 'end':
                                    return s.stop();
                            }
                    },
                    U,
                    this,
                );
            }
            var _ = N.a.mark(P);
            function P(e) {
                var t, n, r;
                return N.a.wrap(
                    function(a) {
                        for (;;)
                            switch ((a.prev = a.next)) {
                                case 0:
                                    return (
                                        (t = e.refreshToken),
                                        (a.next = 3),
                                        c.a.post(b.i.api.refresh, null, { params: { token: t.token } })
                                    );
                                case 3:
                                    return (
                                        (n = a.sent),
                                        (r = n.data.credentials),
                                        a.abrupt('return', { accessToken: r.accessToken, refreshToken: t })
                                    );
                                case 6:
                                case 'end':
                                    return a.stop();
                            }
                    },
                    _,
                    this,
                );
            }
            var M = N.a.mark(D);
            function D() {
                var e;
                return N.a.wrap(
                    function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), c.b.get(b.i.api.me);
                                case 2:
                                    return (e = t.sent), t.abrupt('return', e.data);
                                case 4:
                                case 'end':
                                    return t.stop();
                            }
                    },
                    M,
                    this,
                );
            }
            var W = o.configure({
                    handlers: { authenticate: B, refreshTokens: P, getAuthUser: D },
                    options: {},
                    initialState: {},
                }),
                H = W.saga,
                G = W.reducer,
                z = N.a.mark(Z),
                V = N.a.mark($),
                Y = b.l.put,
                X = b.l.take,
                J = b.l.takeEvery;
            function Z(e) {
                var t;
                return N.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.next = 2), e.startSubmit();
                                case 2:
                                    return (n.next = 4), Y(o.actions.login(e.data));
                                case 4:
                                    return (
                                        (n.next = 6),
                                        X([o.actionTypes.AUTH_LOGIN_SUCCESS, o.actionTypes.AUTH_LOGIN_FAILURE])
                                    );
                                case 6:
                                    return (
                                        n.sent.type === o.actionTypes.AUTH_LOGIN_FAILURE &&
                                            (t = { _error: 'Login failed' }),
                                        (n.next = 10),
                                        e.stopSubmit(t)
                                    );
                                case 10:
                                case 'end':
                                    return n.stop();
                            }
                    },
                    z,
                    this,
                );
            }
            function $() {
                return N.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), J(k.LOGIN_FORM, Z);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    V,
                    this,
                );
            }
            var K = N.a.mark(ee),
                Q = b.l.all;
            function ee() {
                return N.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Q([$(), H()]);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    K,
                    this,
                );
            }
            n.d(t, 'a', function() {
                return q;
            }),
                n.d(t, 'c', function() {
                    return ee;
                }),
                n.d(t, 'b', function() {
                    return G;
                });
        },
        337: function(e, t) {},
        339: function(e, t, n) {
            (e.exports = n(165)(!0)).push([
                e.i,
                "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}",
                '',
                {
                    version: 3,
                    sources: [
                        '/Users/borecekbaji/Documents/Ackee/testing-playground/src/modules/core/modules/fela/styles/resets.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;;;;;;IAaI,UAAU;IACV,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB,yBAAyB;CAC5B;;AAED;;IAEI,eAAe;CAClB;;AAED;IACI,eAAe;CAClB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,aAAa;CAChB;;AAED;;IAEI,YAAY;IACZ,cAAc;CACjB;;AAED;IACI,0BAA0B;IAC1B,kBAAkB;CACrB',
                    file: 'resets.css',
                    sourcesContent: [
                        "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}",
                    ],
                    sourceRoot: '',
                },
            ]);
        },
        341: function(e, t) {
            e.exports = {
                'menu.title': 'Skeleton',
                'menu.user.logout': 'Odhl\xe1sit',
                'languages.cs': '\u010ce\u0161tina',
                'languages.en': 'Angli\u010dtina',
                'loader.title': 'Na\u010d\xedt\xe1m',
                'loader.title.creating': 'Vytv\xe1\u0159\xedm',
                'loader.title.updating': 'Ukl\xe1d\xe1m',
                'login.title': 'Skeleton',
                'login.subtitle': 'P\u0159ihla\u0161te se do syst\xe9mu',
                'login.email': 'P\u0159ihla\u0161ovac\xed jm\xe9no',
                'login.password': 'Heslo',
                'login.button': 'P\u0159ihl\xe1sit se',
                'login.tip': 'P\u0159ihla\u0161uji',
                'login.error': 'Zadan\xe9 jm\xe9no nebo heslo neexistuje',
                'login.submit': 'Potvrdit',
                logout: 'Odhl\xe1sit',
                'page.home.title': 'Home',
                'page.home.content': 'Hello world',
                'page.auth.title': 'Auth',
                'page.noMatch.title': 'No match',
                'page.noMatch.content': 'Str\xe1nka nenalezena',
                'error.general': 'Whoops, something went wrong.',
            };
        },
        349: function(e, t, n) {
            (t = e.exports = n(165)(!0)).i(n(783), ''),
                t.push([
                    e.i,
                    '',
                    '',
                    { version: 3, sources: [], names: [], mappings: '', file: 'vendors.css', sourceRoot: '' },
                ]);
        },
        368: function(e, t, n) {
            e.exports = n(816);
        },
        387: function(e, t) {},
        393: function(e, t) {},
        816: function(e, t, n) {
            'use strict';
            n.r(t);
            var r = {};
            n.r(r),
                n.d(r, 'env', function() {
                    return l;
                });
            var a = {};
            n.r(a),
                n.d(a, 'register', function() {
                    return f;
                }),
                n.d(a, 'unregister', function() {
                    return h;
                });
            var o = n(1),
                i = n.n(o),
                c = n(68),
                s = n(15),
                u = n.n(s),
                l = { PRODUCTION: 'production', DEVELOPMENT: 'development' },
                d = n(118),
                p = Boolean(
                    'localhost' === window.location.hostname ||
                        '[::1]' === window.location.hostname ||
                        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
                );
            function f(e) {
                if ('serviceWorker' in navigator) {
                    if (new URL('', window.location.href).origin !== window.location.origin) return;
                    window.addEventListener('load', function() {
                        var t = ''.concat('', '/service-worker.js');
                        p
                            ? (!(function(e, t) {
                                  fetch(e)
                                      .then(function(n) {
                                          var r = n.headers.get('content-type');
                                          404 === n.status || (null != r && -1 === r.indexOf('javascript'))
                                              ? navigator.serviceWorker.ready.then(function(e) {
                                                    e.unregister().then(function() {
                                                        window.location.reload();
                                                    });
                                                })
                                              : m(e, t);
                                      })
                                      .catch(function() {
                                          console.log('No internet connection found. App is running in offline mode.');
                                      });
                              })(t, e),
                              navigator.serviceWorker.ready.then(function() {
                                  console.log(
                                      'This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA',
                                  );
                              }))
                            : m(t, e);
                    });
                }
            }
            function m(e, t) {
                navigator.serviceWorker
                    .register(e)
                    .then(function(e) {
                        e.onupdatefound = function() {
                            var n = e.installing;
                            null != n &&
                                (n.onstatechange = function() {
                                    'installed' === n.state &&
                                        (navigator.serviceWorker.controller
                                            ? (console.log(
                                                  'New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA.',
                                              ),
                                              t && t.onUpdate && t.onUpdate(e))
                                            : (console.log('Content is cached for offline use.'),
                                              t && t.onSuccess && t.onSuccess(e)));
                                });
                        };
                    })
                    .catch(function(e) {
                        console.error('Error during service worker registration:', e);
                    });
            }
            function h() {
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
            }
            n(0);
            var g = n(65),
                v = n(37),
                b = n(329),
                w = n(224),
                k = n(339),
                y = n.n(k),
                A = function(e, t, n) {
                    var r = Array.isArray(t) ? t : [t];
                    n && r.push(y.a);
                    var a = r.reduce(function(e, t) {
                        return e + t.toString();
                    }, '');
                    e.renderStatic(a);
                },
                O = n(159),
                E = function(e, t) {
                    var n = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                            var c = o.value,
                                s = Object(O.a)(c, 1)[0],
                                u = s.name,
                                l = s.files,
                                d = s.options;
                            e.renderFont(u, l, d);
                        }
                    } catch (p) {
                        (r = !0), (a = p);
                    } finally {
                        try {
                            n || null == i.return || i.return();
                        } finally {
                            if (r) throw a;
                        }
                    }
                },
                j = 'production' !== r.env.PRODUCTION,
                x = [],
                C = [];
            j && (x.push(Object(b.a)()), C.push(Object(w.a)({ logInvalid: !0, deleteInvalid: !0, useCSSLint: !0 })));
            var I = { devMode: j, enhancers: x, plugins: C },
                S = function(e) {
                    var t = e.staticCSS,
                        n = e.theme,
                        r = e.reset,
                        a = e.children,
                        o = e.fonts,
                        c = Object(g.b)(I);
                    return (
                        A(c, t, r),
                        E(c, o),
                        i.a.createElement(v.b, { renderer: c }, i.a.createElement(v.c, { theme: n }, a))
                    );
                };
            S.defaultProps = { theme: {}, staticCSS: [], reset: !0, fonts: [] };
            var L = S,
                T = n(9),
                R = n.n(T),
                q = n(4),
                F = n(33),
                N = n(36),
                U = n(98),
                B = n(31),
                _ = n(137),
                P = n(275),
                M = n.n(P),
                D = n(83),
                W = M()(),
                H = Object(D.routerMiddleware)(W),
                G = Object(D.connectRouter)(W),
                z = function(e) {
                    var t = e.children;
                    return i.a.createElement(D.ConnectedRouter, { history: W }, t);
                },
                V = n(111),
                Y = n(158),
                X = n(42),
                J = n(340),
                Z = n.n(J),
                $ = n(342),
                K = n.n($),
                Q = n(341),
                ee = n.n(Q);
            Object(X.addLocaleData)(Object(Y.a)(Z.a));
            var te = ['cs'],
                ne = { cs: ee.a },
                re = { cs: K.a },
                ae = Object(V.translatableHOC)(ne, re),
                oe = (function() {
                    var e = te[0],
                        t = window.navigator.language,
                        n = t.split('-')[0];
                    return te.includes(t) ? (e = t) : te.includes(n) && (e = n), e;
                })(),
                ie = Object(V.reducer)(oe),
                ce = n(150),
                se = n(95),
                ue = {
                    dsn: '',
                    debug: 'production' === r.env.DEVELOPMENT,
                    environment: 'production',
                    release: ''.concat('testing-playground', '@').concat('0.1.0'),
                };
            if (!ue.dsn) {
                var le = window.encodeURIComponent(se.a.appName),
                    de = 'https://sentree.ack.ee/sentry/'.concat(le, '/settings/keys');
                console.warn("[Sentry]: Add 'dsn' of your project.\n".concat(de));
            }
            var pe = function() {
                    _.init(ue);
                },
                fe = R.a.mark(ge),
                me = q.takeEvery;
            function he(e) {
                var t = e.error,
                    n = e.extra;
                _.withScope(function(e) {
                    if ('object' === typeof n)
                        for (var r = Object.entries(n), a = 0; a < r.length; a++) {
                            var o = r[a],
                                i = Object(O.a)(o, 2),
                                c = i[0],
                                s = i[1];
                            e.setExtra(c, s);
                        }
                    _.captureException(t);
                });
            }
            function ge() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), me(ce.b.logging.LOG_ERROR, he);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    fe,
                    this,
                );
            }
            var ve = q.all,
                be = R.a.mark(function e() {
                    return R.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                    case 'end':
                                        return e.stop();
                                }
                        },
                        e,
                        this,
                    );
                }),
                we = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
                        t = [ge()];
                    return R.a.mark(function n() {
                        var r = arguments;
                        return R.a.wrap(
                            function(n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (n.next = 2), ve(t.concat([e.apply(void 0, r)]));
                                        case 2:
                                        case 'end':
                                            return n.stop();
                                    }
                            },
                            n,
                            this,
                        );
                    });
                },
                ke = function(e) {
                    var t = e.initialState,
                        n = e.reducers,
                        a = e.saga,
                        o = e.middlewares,
                        i = 'production' !== r.env.PRODUCTION,
                        s = Object(U.a)({
                            onError: function(e) {
                                i && console.error(e), _.captureException(e);
                            },
                        }),
                        u = [H, s].concat(o),
                        l = [N.applyMiddleware.apply(void 0, Object(Y.a)(u))];
                    if (i) {
                        var d = window.__REDUX_DEVTOOLS_EXTENSION__;
                        l.push(
                            d
                                ? d()
                                : function(e) {
                                      return e;
                                  },
                        );
                    }
                    var p = (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return Object(N.combineReducers)(
                                Object(c.a)({}, e, { translate: ie, form: B.reducer, router: G }),
                            );
                        })(n),
                        f = N.compose.apply(void 0, l),
                        m = Object(N.createStore)(p, t, f),
                        h = we(a);
                    return s.run(h), m;
                },
                ye = function(e) {
                    var t = e.children,
                        n = e.initialState,
                        r = e.reducers,
                        a = e.saga,
                        o = e.middlewares,
                        c = ke({ initialState: n, reducers: r, saga: a, middlewares: o });
                    return i.a.createElement(F.Provider, { store: c }, t);
                };
            ye.defaultProps = {
                initialState: {},
                saga: R.a.mark(function e() {
                    return R.a.wrap(
                        function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return void (e.next = 2);
                                    case 2:
                                    case 'end':
                                        return e.stop();
                                }
                        },
                        e,
                        this,
                    );
                }),
                middlewares: [],
            };
            var Ae = ye,
                Oe = n(318),
                Ee = function() {
                    return {
                        minHeight: '150px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '16px',
                        lineHeight: '19px',
                        maxWidth: '800px',
                        margin: '0 auto',
                    };
                },
                je = function() {
                    return i.a.createElement(
                        v.a,
                        { style: Ee },
                        i.a.createElement(X.FormattedMessage, { id: 'error.general' }),
                    );
                },
                xe = n.n(Oe)()(je),
                Ce = Object(d.h)(ae, xe)(function(e) {
                    return (0, e.children)({ location: e.location });
                }),
                Ie = function(e) {
                    var t = e.children,
                        n = e.fela,
                        r = e.redux;
                    return d.d.createElement(
                        Ae,
                        r,
                        d.d.createElement(L, n, d.d.createElement(z, null, d.d.createElement(Ce, null, t))),
                    );
                };
            Ie.defaultProps = { fela: {}, redux: {} };
            var Se = Ie,
                Le = { serviceWorker: !1, sentry: !0 };
            var Te = { colors: { white: '#FFFFFF', black: '#000000' } },
                Re = n(349),
                qe = n.n(Re),
                Fe = n(149),
                Ne = n(99),
                Ue = { auth: Fe.b, history: Ne.reducer },
                Be = n(112),
                _e = R.a.mark(Pe);
            function Pe() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(q.all)([Object(Fe.c)()]);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    _e,
                    this,
                );
            }
            var Me = n(152),
                De = R.a.mark(We);
            function We() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(q.all)([Object(Me.a)(), Object(Ne.saga)()]);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    De,
                    this,
                );
            }
            var He = n(117),
                Ge = n(222),
                ze = n(157),
                Ve = n(34),
                Ye = function(e, t, n) {
                    return (
                        (n &&
                            !(function(e, t) {
                                var n = ['key', 'action'];
                                return Object(Ve.isEqual)(Object(Ve.omit)(e, n), Object(Ve.omit)(t, n));
                            })(e.payload, t.payload)) ||
                        !n
                    );
                },
                Xe = R.a.mark(Je);
            function Je(e) {
                var t,
                    n,
                    r,
                    a,
                    o,
                    i = arguments;
                return R.a.wrap(
                    function(s) {
                        for (;;)
                            switch ((s.prev = s.next)) {
                                case 0:
                                    if (
                                        ((t = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                                        (n = i.length > 2 && void 0 !== i[2] ? i[2] : ze.a),
                                        !(r = Object(c.a)({ skipEqualLocations: !1, initialTrigger: !0 }, t))
                                            .initialTrigger)
                                    ) {
                                        s.next = 6;
                                        break;
                                    }
                                    return (s.next = 6), Object(Ge.a)(e, n);
                                case 6:
                                    a = { payload: {} };
                                case 7:
                                    return (s.next = 10), Object(q.take)(D.LOCATION_CHANGE);
                                case 10:
                                    if (((o = s.sent), !Ye(a, o, r.skipEqualLocations))) {
                                        s.next = 14;
                                        break;
                                    }
                                    return (s.next = 14), Object(Ge.a)(e, n);
                                case 14:
                                    (a = o), (s.next = 7);
                                    break;
                                case 17:
                                case 'end':
                                    return s.stop();
                            }
                    },
                    Xe,
                    this,
                );
            }
            var Ze = R.a.mark(Qe),
                $e = R.a.mark(rt),
                Ke = Object(Ne.previousLocationSelectorFactory)('history');
            function Qe() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    console.log('Root route handler was triggered.');
                                case 1:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    Ze,
                    this,
                );
            }
            var et = { '/': Qe },
                tt = Object(He.a)(et),
                nt = Object(He.a)();
            function rt() {
                var e;
                return R.a.wrap(
                    function(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (
                                        (e = { skipEqualLocations: !0, initialTrigger: !1 }),
                                        (t.next = 3),
                                        Object(q.all)([Je(tt, e), Je(nt, e, Ke)])
                                    );
                                case 3:
                                case 'end':
                                    return t.stop();
                            }
                    },
                    $e,
                    this,
                );
            }
            var at = R.a.mark(it),
                ot = R.a.mark(ut);
            function it() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    console.log('user is authorized and "/my-auth-route" route saga was triggered.');
                                case 1:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    at,
                    this,
                );
            }
            var ct = { '/my-auth-route': it },
                st = Object(He.a)(ct);
            function ut() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Je(st, { skipEqualLocations: !0 });
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    ot,
                    this,
                );
            }
            var lt = n(54),
                dt = R.a.mark(ft),
                pt = R.a.mark(mt);
            function ft() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(q.all)([ut()]);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    dt,
                    this,
                );
            }
            function mt() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(lt.withAuthSession)(ft);
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    pt,
                    this,
                );
            }
            var ht = R.a.mark(gt);
            function gt() {
                return R.a.wrap(
                    function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.next = 2),
                                        Object(q.all)([Object(Be.c)(), Object(V.saga)(), Pe(), We(), rt(), mt()])
                                    );
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                    },
                    ht,
                    this,
                );
            }
            var vt = { loading: i.a.createElement(X.FormattedMessage, { id: 'loader.title' }) },
                bt = {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                },
                wt = function() {
                    return i.a.createElement(v.a, { style: bt, render: 'div' }, vt.loading, '...');
                },
                kt = i.a.lazy(function() {
                    return Promise.all([n.e(3), n.e(4)]).then(n.bind(null, 844));
                });
            (function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'root',
                    n = Object(c.a)({}, Le, e);
                return {
                    render: function(e, r) {
                        n.sentry && pe(),
                            u.a.render(
                                d.d.createElement(Se, n, function(t) {
                                    return d.d.createElement(
                                        o.Suspense,
                                        { fallback: d.d.createElement(r, null) },
                                        d.d.createElement(e, t),
                                    );
                                }),
                                document.getElementById(t),
                            ),
                            n.serviceWorker ? a.register() : a.unregister();
                    },
                };
            })({
                redux: { reducers: Ue, saga: gt, initialState: {}, middlewares: [] },
                fela: { theme: Te, staticCSS: [qe.a], fonts: [] },
                serviceWorker: !1,
                sentry: 'production' === l.PRODUCTION,
            }).render(kt, wt);
        },
        95: function(e, t, n) {
            'use strict';
            var r = n(34),
                a = {
                    development: {
                        api: { base: 'http://api-'.concat('testing-playground', '-development.ack.ee/api') },
                        devTools: !0,
                    },
                    stage: { api: { base: 'https://skeleton' } },
                    production: { api: { base: 'https://skeleton' } },
                }.production,
                o = Object(r.merge)(
                    {
                        appName: 'testing-playground',
                        devTools: !0,
                        api: {
                            trips: '/v1/admin/trips',
                            trip: '/v1/admin/trips/:id',
                            signin: '/v1/auth/sign-in',
                            signup: '/v1/auth/sign-up',
                            me: '/v1/users/me',
                            refresh: '/v1/auth/refresh',
                        },
                        firebase: {
                            notifications: function(e) {
                                return { path: '/notifications/'.concat(e), store: 'notifications.'.concat(e) };
                            },
                            notificationsCount: function(e) {
                                return {
                                    path: '/notifications/'.concat(e, '/count'),
                                    storeAs: 'notifications_'.concat(e, '_count'),
                                };
                            },
                        },
                        chat: { supportedImageTypes: ['image/jpeg', 'image/png'] },
                        date: 'HH:mm DD.MM.YYYY',
                        forms: { login: 'loginForm' },
                        imageServer: { options: { width: 250, height: 250, crop: 'fill' } },
                        map: { center: { lat: 50, lng: 16 }, zoom: 7 },
                    },
                    a,
                );
            n.d(t, 'a', function() {
                return o;
            });
        },
    },
    [[368, 1, 2]],
]);
//# sourceMappingURL=main.c4d81483.chunk.js.map
