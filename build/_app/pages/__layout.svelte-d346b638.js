import{D as s,S as e,i as a,s as t,e as r,k as l,E as c,t as i,c as o,a as f,d as n,n as v,g as h,F as d,b as p,G as u,f as g,H as m,I as b,J as x,K as E,j as $,m as z,o as q,L as k,x as w,u as A,v as L}from"../chunks/vendor-9cfe2213.js";const I={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function y(s){let e,a,t,x,E,$,z,q,k,w,A,L,I,y,_,S,j,B,D,H,K,M,T,U,V,C,F,G,N,O,R;return{c(){e=r("header"),a=r("div"),t=r("a"),x=r("img"),$=l(),z=r("nav"),q=c("svg"),k=c("path"),w=l(),A=r("ul"),L=r("li"),I=r("a"),y=i("Home"),_=l(),S=r("li"),j=r("a"),B=i("About"),D=l(),H=r("li"),K=r("a"),M=i("Todos"),T=l(),U=r("li"),V=r("a"),C=i("Users"),F=l(),G=c("svg"),N=c("path"),O=l(),R=r("div"),this.h()},l(s){e=o(s,"HEADER",{class:!0});var r=f(e);a=o(r,"DIV",{class:!0});var l=f(a);t=o(l,"A",{href:!0,class:!0});var c=f(t);x=o(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(n),l.forEach(n),$=v(r),z=o(r,"NAV",{class:!0});var i=f(z);q=o(i,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=f(q);k=o(d,"path",{d:!0,class:!0},1),f(k).forEach(n),d.forEach(n),w=v(i),A=o(i,"UL",{class:!0});var p=f(A);L=o(p,"LI",{class:!0});var u=f(L);I=o(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=f(I);y=h(g,"Home"),g.forEach(n),u.forEach(n),_=v(p),S=o(p,"LI",{class:!0});var m=f(S);j=o(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=f(j);B=h(b,"About"),b.forEach(n),m.forEach(n),D=v(p),H=o(p,"LI",{class:!0});var E=f(H);K=o(E,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Z=f(K);M=h(Z,"Todos"),Z.forEach(n),E.forEach(n),T=v(p),U=o(p,"LI",{class:!0});var J=f(U);V=o(J,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var P=f(V);C=h(P,"Users"),P.forEach(n),J.forEach(n),p.forEach(n),F=v(i),G=o(i,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Y=f(G);N=o(Y,"path",{d:!0,class:!0},1),f(N).forEach(n),Y.forEach(n),i.forEach(n),O=v(r),R=o(r,"DIV",{class:!0}),f(R).forEach(n),r.forEach(n),this.h()},h(){d(x.src,E="/_app/assets/svelte-logo.87df40b8.svg")||p(x,"src","/_app/assets/svelte-logo.87df40b8.svg"),p(x,"alt","SvelteKit"),p(x,"class","svelte-z0q9f3"),p(t,"href","https://kit.svelte.dev"),p(t,"class","svelte-z0q9f3"),p(a,"class","corner svelte-z0q9f3"),p(k,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),p(k,"class","svelte-z0q9f3"),p(q,"viewBox","0 0 2 3"),p(q,"aria-hidden","true"),p(q,"class","svelte-z0q9f3"),p(I,"sveltekit:prefetch",""),p(I,"href","/"),p(I,"class","svelte-z0q9f3"),p(L,"class","svelte-z0q9f3"),u(L,"active","/"===s[0].path),p(j,"sveltekit:prefetch",""),p(j,"href","/about"),p(j,"class","svelte-z0q9f3"),p(S,"class","svelte-z0q9f3"),u(S,"active","/about"===s[0].path),p(K,"sveltekit:prefetch",""),p(K,"href","/todos"),p(K,"class","svelte-z0q9f3"),p(H,"class","svelte-z0q9f3"),u(H,"active","/todos"===s[0].path),p(V,"sveltekit:prefetch",""),p(V,"href","/users"),p(V,"class","svelte-z0q9f3"),p(U,"class","svelte-z0q9f3"),u(U,"active","/users"===s[0].path),p(A,"class","svelte-z0q9f3"),p(N,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),p(N,"class","svelte-z0q9f3"),p(G,"viewBox","0 0 2 3"),p(G,"aria-hidden","true"),p(G,"class","svelte-z0q9f3"),p(z,"class","svelte-z0q9f3"),p(R,"class","corner svelte-z0q9f3"),p(e,"class","svelte-z0q9f3")},m(s,r){g(s,e,r),m(e,a),m(a,t),m(t,x),m(e,$),m(e,z),m(z,q),m(q,k),m(z,w),m(z,A),m(A,L),m(L,I),m(I,y),m(A,_),m(A,S),m(S,j),m(j,B),m(A,D),m(A,H),m(H,K),m(K,M),m(A,T),m(A,U),m(U,V),m(V,C),m(z,F),m(z,G),m(G,N),m(e,O),m(e,R)},p(s,[e]){1&e&&u(L,"active","/"===s[0].path),1&e&&u(S,"active","/about"===s[0].path),1&e&&u(H,"active","/todos"===s[0].path),1&e&&u(U,"active","/users"===s[0].path)},i:b,o:b,d(s){s&&n(e)}}}function _(s,e,a){let t;return x(s,I,(s=>a(0,t=s))),[t]}class S extends e{constructor(s){super(),a(this,s,_,y,t,{})}}function j(s){let e,a,t,c,d,u,b,x,$,z,q,L;const I=s[0].default,y=E(I,s,s[1],null);return{c(){e=r("main"),y&&y.c(),a=l(),t=r("footer"),c=r("p"),d=i("visit "),u=r("a"),b=i("kit.svelte.dev"),x=i(" to learn SvelteKit"),$=l(),z=r("style"),q=i("main{box-sizing:border-box;flex:1;margin:0 auto;max-width:1024px;padding:1rem;width:100%}footer,main{display:flex;flex-direction:column}footer{align-items:center;justify-content:center;padding:40px}footer a{font-weight:700}@media (min-width:480px){footer{padding:40px 0}}"),this.h()},l(s){e=o(s,"MAIN",{});var r=f(e);y&&y.l(r),r.forEach(n),a=v(s),t=o(s,"FOOTER",{});var l=f(t);c=o(l,"P",{});var i=f(c);d=h(i,"visit "),u=o(i,"A",{href:!0});var p=f(u);b=h(p,"kit.svelte.dev"),p.forEach(n),x=h(i," to learn SvelteKit"),i.forEach(n),l.forEach(n),$=v(s),z=o(s,"STYLE",{});var g=f(z);q=h(g,"main{box-sizing:border-box;flex:1;margin:0 auto;max-width:1024px;padding:1rem;width:100%}footer,main{display:flex;flex-direction:column}footer{align-items:center;justify-content:center;padding:40px}footer a{font-weight:700}@media (min-width:480px){footer{padding:40px 0}}"),g.forEach(n),this.h()},h(){p(u,"href","https://kit.svelte.dev")},m(s,r){g(s,e,r),y&&y.m(e,null),g(s,a,r),g(s,t,r),m(t,c),m(c,d),m(c,u),m(u,b),m(c,x),g(s,$,r),g(s,z,r),m(z,q),L=!0},p(s,e){y&&y.p&&(!L||2&e)&&k(y,I,s,s[1],L?e:-1,null,null)},i(s){L||(w(y,s),L=!0)},o(s){A(y,s),L=!1},d(s){s&&n(e),y&&y.d(s),s&&n(a),s&&n(t),s&&n($),s&&n(z)}}}function B(s){let e,a,t;e=new S({props:{$$slots:{default:[j]},$$scope:{ctx:s}}});const r=s[0].default,c=E(r,s,s[1],null);return{c(){$(e.$$.fragment),a=l(),c&&c.c()},l(s){z(e.$$.fragment,s),a=v(s),c&&c.l(s)},m(s,r){q(e,s,r),g(s,a,r),c&&c.m(s,r),t=!0},p(s,[a]){const l={};2&a&&(l.$$scope={dirty:a,ctx:s}),e.$set(l),c&&c.p&&(!t||2&a)&&k(c,r,s,s[1],t?a:-1,null,null)},i(s){t||(w(e.$$.fragment,s),w(c,s),t=!0)},o(s){A(e.$$.fragment,s),A(c,s),t=!1},d(s){L(e,s),s&&n(a),c&&c.d(s)}}}function D(s,e,a){let{$$slots:t={},$$scope:r}=e;return s.$$set=s=>{"$$scope"in s&&a(1,r=s.$$scope)},[t,r]}export default class extends e{constructor(s){super(),a(this,s,D,B,t,{})}}