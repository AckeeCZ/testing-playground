(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        820: function(e, t, n) {
            'use strict';
            var r = n(822);
            n.d(t, 'h', function() {
                return r.hot;
            });
            n(824);
            var a = n(118);
            n.d(t, 'b', function() {
                return a.a;
            }),
                n.d(t, 'c', function() {
                    return a.b;
                }),
                n.d(t, 'd', function() {
                    return a.c;
                }),
                n.d(t, 'e', function() {
                    return a.d;
                }),
                n.d(t, 'f', function() {
                    return a.e;
                }),
                n.d(t, 'g', function() {
                    return a.f;
                });
            var c = n(149);
            n.d(t, 'a', function() {
                return c.a;
            });
        },
        821: function(e, t, n) {
            'use strict';
            (function(e) {
                var r = n(820),
                    a = n(841),
                    c = n(840),
                    u = n(843),
                    o = n(842),
                    i = [
                        { messageId: 'page.home.title', to: '/' },
                        { messageId: 'page.auth.title', to: '/auth' },
                        { messageId: 'page.noMatch.title', to: '/no-match' },
                    ];
                t.a = Object(r.h)(e)(function() {
                    return r.e.createElement(
                        a.a,
                        null,
                        r.e.createElement(c.a, { navItems: i }),
                        r.e.createElement(
                            r.g,
                            null,
                            r.e.createElement(r.f, { path: '/', component: u.a, exact: !0 }),
                            r.e.createElement(r.f, { path: '/auth', component: r.a }),
                            r.e.createElement(r.f, { component: o.a }),
                        ),
                    );
                });
            }.call(this, n(354)(e)));
        },
        840: function(e, t, n) {
            'use strict';
            var r = n(820),
                a = function() {
                    return {
                        padding: '4px',
                        margin: '0 4px',
                        color: 'black',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                    };
                },
                c = function(e) {
                    var t = e.to,
                        n = e.messageId;
                    return r.e.createElement(r.b, { style: a }, function(e) {
                        var a = e.className;
                        return r.e.createElement(r.d, { to: t, className: a }, r.e.createElement(r.c, { id: n }));
                    });
                },
                u = function() {
                    return { display: 'flex', margin: '8px auto 16px' };
                },
                o = function(e) {
                    var t = e.navItems;
                    return r.e.createElement(
                        r.b,
                        { style: u },
                        t.map(function(e) {
                            return r.e.createElement(c, Object.assign({ key: e.to }, e));
                        }),
                    );
                };
            n.d(t, 'a', function() {
                return o;
            });
        },
        841: function(e, t, n) {
            'use strict';
            var r = n(820),
                a = function() {
                    return { margin: '0 auto', maxWidth: '800px', padding: '0 16px' };
                },
                c = function(e) {
                    var t = e.children;
                    return r.e.createElement(r.b, { style: a }, t);
                };
            n.d(t, 'a', function() {
                return c;
            });
        },
        842: function(e, t, n) {
            'use strict';
            var r = n(820);
            var a = function() {
                return r.e.createElement(r.c, { id: 'page.noMatch.content' });
            };
            n.d(t, 'a', function() {
                return a;
            });
        },
        843: function(e, t, n) {
            'use strict';
            var r = n(820),
                a = function() {
                    return r.e.createElement(r.c, { id: 'page.home.content' });
                };
            n.d(t, 'a', function() {
                return a;
            });
        },
        844: function(e, t, n) {
            'use strict';
            n.r(t);
            var r = n(821);
            n.d(t, 'default', function() {
                return r.a;
            });
        },
    },
]);
//# sourceMappingURL=4.422e4f45.chunk.js.map
