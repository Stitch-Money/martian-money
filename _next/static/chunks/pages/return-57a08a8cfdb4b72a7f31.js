_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6R4B":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/return",function(){return t("70vD")}])},"70vD":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("o0o1"),c=t.n(r),o=t("HaE+"),u=t("q1tI"),a=t.n(u),i=t("nOHt"),s=(t("ODXe"),t("ml1f")),f=t("UdIf"),p=t("fO3t"),d="https://secure.stitch.money/connect/token";function _(e,n){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(c.a.mark((function e(n,t){var r,o,u,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={grant_type:"authorization_code",client_id:f.b,code:n,redirect_uri:f.a,code_verifier:t},o=Object(s.c)(r),e.next=4,fetch(d,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});case 4:return u=e.sent,e.next=7,u.json();case 7:return a=e.sent,console.log("Tokens: ",a),Object(p.e)(a.access_token),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=t("5M6V"),b=a.a.createElement;function l(){var e=Object(i.useRouter)(),n=e.query.code,t=null;return t=Object(p.a)(),Object(u.useEffect)((function(){function r(){return(r=Object(o.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!t){e.next=5;break}return e.next=3,_("".concat(n),t);case 3:r=e.sent,Object(p.e)(r.access_token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().then((function(n){Object(p.b)()&&e.push("/report").then((function(e){}),(function(e){}))}),(function(){}))}),[e,n,t]),b(w.a,null,"Loading...")}}},[["6R4B",0,1,2,3]]]);