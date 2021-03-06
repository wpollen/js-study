function isSingleInstanceProd(s) {
    var n = ["mn", "ma", "im_hi"];
    return ("|" + n.join("|") + "|").indexOf("|" + s + "|") > -1
}
function isLoginInstance(s) {
    var s = s || "login";
    return "login" == s
}
function saveInitInstance(s) {
    window._pass_popinit_instance = s
}
function getInitInstance() {
    return window._pass_popinit_instance
}
var passport = passport || window.passport || {};
passport._modulePool = passport._modulePool || {},
passport._define = passport._define ||
function(s, n) {
    passport._modulePool[s] = n && n()
},
passport._getModule = passport._getModule ||
function(s) {
    return passport._modulePool[s]
},
passport.pop = passport.pop || {},
passport.pop.insertScript = passport.pop.insertScript ||
function(s, n) {
    var i = document,
    a = i.createElement("SCRIPT");
    a.type = "text/javascript",
    a.charset = "UTF-8",
    a.readyState ? a.onreadystatechange = function() { ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, n && n())
    }: a.onload = function() {
        n && n()
    },
    a.src = s,
    i.getElementsByTagName("head")[0].appendChild(a)
},
passport.pop.init = passport.pop.init ||
function(s) {
    var n = {
        "http:": "http://passport.bdimg.com",
        "https:": "https://ss0.bdstatic.com/5LMZfyabBhJ3otebn9fN2DJv"
    };
    if (isSingleInstanceProd(s.apiOpt.product) && isLoginInstance(s.type) && getInitInstance()) return getInitInstance();
    if (s && "https" == s.protocol) var i = "https:";
    else var i = window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase();
    var a = ["pp", "mn", "wk", "cmovie", "translate", "baidugushitong", "ik", "exp", "waimai", "jn", "im", "do", "yuedu", "hao123", "tb", "netdisk", "developer", "newdev", "image_eco", "zbsc", "bpit_hcm", "defensor"],
    e = s && s.apiOpt && s.apiOpt.product || "",
    t = ("|" + a.join("|") + "|").indexOf("|" + e + "|") > -1,
    p = "/passApi/js/uni_login_55544b1.js",
    c = "/passApi/js/uni_login_tangram_8ba7bf0.js",
    o = "/passApi/css/uni_login_new_a9b11fc.css";
    t && (p = "/passApi/js/uni_loginv4_130fcac.js", c = "/passApi/js/uni_loginv4_tangram_4c69684.js", o = "/passApi/css/uni_loginv4_1c50fab.css");
    var _ = {
        uni_login: p,
        uni_login_tangram: c,
        uni_loginPad: "/passApi/js/uni_loginPad_a9d4e86.js",
        uni_loginPad_tangram: "/passApi/js/uni_loginPad_tangram_716da5b.js",
        uni_smsloginEn: "/passApi/js/uni_smsloginEn_f705da6.js",
        uni_smsloginEn_tangram: "/passApi/js/uni_smsloginEn_tangram_ec9f7a1.js",
        uni_loginWap: "/passApi/js/uni_loginWap_4d09508.js",
        uni_loginWap_tangram: "/passApi/js/uni_loginWap_4d09508.js",
        uni_accConnect: "/passApi/js/uni_accConnect_c33bc70.js",
        uni_accConnect_tangram: "/passApi/js/uni_accConnect_tangram_6b44055.js",
        uni_accRealName: "/passApi/js/uni_accRealName_9253f9e.js",
        uni_accRealName_tangram: "/passApi/js/uni_accRealName_tangram_798810e.js",
        uni_checkPhone: "/passApi/js/uni_checkPhone_47f7070.js",
        uni_checkPhone_tangram: "/passApi/js/uni_checkPhone_tangram_cf22b21.js",
        uni_checkIDcard: "/passApi/js/uni_checkIDcard_f3ee87d.js",
        uni_checkIDcard_tangram: "/passApi/js/uni_checkIDcard_tangram_297f866.js",
        uni_accSetPwd: "/passApi/js/uni_accSetPwd_63bbcea.js",
        uni_accSetPwd_tangram: "/passApi/js/uni_accSetPwd_tangram_15f9c75.js",
        uni_IDCertify: "/passApi/js/uni_IDCertify_2e792ff.js",
        uni_IDCertify_tangram: "/passApi/js/uni_IDCertify_tangram_31c978b.js",
        uni_IDCertifyQrcode: "/passApi/js/uni_IDCertifyQrcode_c5ca697.js",
        uni_IDCertifyQrcode_tangram: "/passApi/js/uni_IDCertifyQrcode_tangram_0e4ebb1.js",
        uni_loadingApi: "/passApi/js/uni_loadingApi_3468c83.js",
        uni_loadingApi_tangram: "/passApi/js/uni_loadingApi_tangram_d62984d.js",
        uni_secondCardVerify: "/passApi/js/uni_secondCardVerify_17e06f2.js",
        uni_secondCardVerify_tangram: "/passApi/js/uni_secondCardVerify_tangram_8104aba.js",
        uni_multiBind: "/passApi/js/uni_multiBind_8120b60.js",
        uni_multiBind_tangram: "/passApi/js/uni_multiBind_tangram_7304dfa.js",
        uni_multiUnbind: "/passApi/js/uni_multiUnbind_d55cdf7.js",
        uni_multiUnbind_tangram: "/passApi/js/uni_multiUnbind_tangram_dbd251f.js",
        uni_changeUser: "/passApi/js/uni_changeUser_4a79f7c.js",
        uni_changeUser_tangram: "/passApi/js/uni_changeUser_tangram_8119005.js",
        uni_loginMultichoice: "/passApi/js/uni_loginMultichoice_f30fcce.js",
        uni_loginMultichoice_tangram: "/passApi/js/uni_loginMultichoice_tangram_f31665a.js",
        uni_confirmWidget: "/passApi/js/uni_confirmWidget_1ae7571.js",
        uni_confirmWidget_tangram: "/passApi/js/uni_confirmWidget_tangram_8ec94d9.js"
    },
    r = {
        login: o,
        loginWap: "/passApi/css/uni_loginWap_f57424a.css",
        smsloginEn: "/passApi/css/uni_smsloginEn_eef0a6a.css",
        accConnect: "/passApi/css/uni_accConnect_ab6dda9.css",
        accRealName: "/passApi/css/uni_accRealName_a224a37.css",
        secondCardVerify: "/passApi/css/uni_secondCardVerify_98a0d35.css",
        checkPhone: "/passApi/css/uni_checkPhone_cd7c7a0.css",
        checkIDcard: "/passApi/css/uni_checkIDcard_be79680.css",
        accSetPwd: "/passApi/css/uni_accSetPwd_29f7784.css",
        IDCertify: "/passApi/css/uni_IDCertify_36e091b.css",
        IDCertifyQrcode: "/passApi/css/uni_IDCertifyQrcode_1e8827b.css",
        loadingApi: "/passApi/css/uni_loadingApi_f8732c0.css",
        loginPad: "/passApi/css/uni_loginPad_af389a4.css",
        multiBind: "/passApi/css/uni_multiBind_e8d24e4.css",
        multiUnbind: "/passApi/css/uni_multiUnbind_21428a6.css",
        changeUser: "/passApi/css/uni_changeUser_c7ae7b4.css",
        loginMultichoice: "/passApi/css/uni_loginMultichoice_289d3a0.css",
        confirmWidget: "/passApi/css/uni_confirmWidget_073965e.css",
        uni_rebindGuide: "/passApi/css/uni_rebindGuide_347ecf2.css"
    },
    u = n[i] || n["https:"],
    s = s || {};
    s.type = s.type || "login";
    var d, l = document,
    s = s || {},
    g = ("_PassUni" + (new Date).getTime(), u + r[s.type]);
    s.cssUrlWrapper && (g = cssUrlWrapper.join(t ? "uni_loginv4.css": "uni_login.css")),
    d = {
        show: function() {
            return d.loadPass(s.apiOpt),
            d.willShow = !0,
            d
        },
        setSubpro: function(n) {
            return s.apiOpt && (s.apiOpt.subpro = n),
            d
        },
        setMakeText: function(n) {
            return s.apiOpt && (s.apiOpt.makeText = n),
            d
        },
        loadPass: function() {
            var n = l.createElement("link");
            n.rel = "stylesheet",
            n.type = "text/css",
            n.href = g,
            n.disabled = !1,
            n.setAttribute("data-for", "result"),
            l.getElementsByTagName("head")[0].appendChild(n),
            d.show = function() {
                return d.willShow = !0,
                d
            },
            s.plugCss && (n = l.createElement("link"), n.rel = "stylesheet", n.type = "text/css", n.href = s.plugCss, n.disabled = !1, n.setAttribute("data-for", "result"), l.getElementsByTagName("head")[0].appendChild(n)),
            d.passCallback(),
            delete d.loadPass
        },
        passCallback: function() {
            d.components.length > 0 ? passport.pop.insertScript(d.components.shift(), d.passCallback) : (passport.pop[s.type](s, d,
            function() {
                d.willShow && d.show(),
                s && s.onRender && s.onRender()
            }), delete d.passCallback, delete d.components)
        },
        components: []
    };
    var m = "uni_" + s.type;
    return s.tangram && (m += "_tangram"),
    s.apiOpt && "ik" == s.apiOpt.product && Math.random() < .3 && (d.components.push(u + "/passApi/js/uni/passhunt.js"), s.hunter = !0),
    d.components.push(u + _[m]),
    s.cache && d.loadPass(s.apiOpt),
    s.id && l.getElementById(s.id) && (l.getElementById(s.id).onclick = function() {
        d.show()
    }),
    isSingleInstanceProd(s.apiOpt.product) && isLoginInstance(s.type) && saveInitInstance(d),
    d
};