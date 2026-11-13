(()=>{var jt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Yd=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sh(){let i=Qs("canvas");return i.style.display="block",i}function er(...i){let e="THREE."+i.shift();cs?cs("log",e,...i):console.log(e,...i)}function Eh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Fe(...i){i=Eh(i);let e="THREE."+i.shift();if(cs)cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Be(...i){i=Eh(i);let e="THREE."+i.shift();if(cs)cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ci(...i){let e=i.join(" ");e in ru||(ru[e]=!0,Fe(...i))}function wh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _i(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function vc(i,e){return(i%e+e)%e}function Jd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Kd(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function ep(i,e=1){return e-Math.abs(vc(i,e*2)-e)}function tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sp(i,e){return i+Math.random()*(e-i)}function rp(i){return i*(.5-Math.random())}function ap(i){i!==void 0&&(au=i);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function op(i){return i*rs}function lp(i){return i*us}function cp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),p=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*f,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*f,o*c);break;case"ZYZ":i.set(l*f,l*d,o*h,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yc(i,e){if(e.constructor===Float32Array)return i;let t=Zo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function _c(i,e){if(e.constructor===Float32Array)return i;let t=Zo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function dp(){let i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:e,whitePoint:n,transfer:Ks,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function wl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function xu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=_i()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function Qr(i,e,t,n,s,r){es.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*es.x-s*es.y,Gs.y=s*es.x+r*es.y):Gs.copy(es),i.copy(e),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(Ch)}function Cp(i,e,t,n,s,r,a,o){let l;if(e.side===Mt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===sn,o),l===null)return null;oa.copy(o),oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:i}}function la(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let h=Cp(i,e,t,n,ia,sa,ra,Su);if(h){let p=new R;Tn.getBarycoord(Su,ia,sa,ra,p),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,p,new be)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,p,new be)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,p,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Tn.getNormal(ia,sa,ra,u.normal),h.face=u,h.barycoord=p}return h}function da(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ba.fromBufferAttribute(o,s),za.fromBufferAttribute(o,r),t.distanceSqToSegment(Ba,za,Ll,Cu)>n)return;Ll.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ll);if(!(c<e.near||c>e.far))return{distance:c,point:Cu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Lu(i,e,t,n,s,r,a){let o=Gl.distanceSqToPoint(i);if(o<t){let l=new R;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Mc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function Uu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ip(i,e){let t=1-i;return t*t*e}function Lp(i,e){return 2*(1-i)*i*e}function Dp(i,e){return i*i*e}function Ys(i,e,t,n){return Ip(i,e)+Lp(i,t)+Dp(i,n)}function Np(i,e){let t=1-i;return t*t*t*e}function Up(i,e){let t=1-i;return 3*t*t*i*e}function Fp(i,e){return 3*(1-i)*i*i*e}function Op(i,e){return i*i*i*e}function Zs(i,e,t,n,s){return Np(i,e)+Up(i,t)+Fp(i,n)+Op(i,s)}function zi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fu(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=zi(i[t]);for(let s in n)e[s]=n[s]}return e}function Fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}function ns(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ph(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Vp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ph(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Gp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Ou(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Bu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function qu(i,e){return i.distance-e.distance}function $l(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)$l(r[a],e,t,!0)}}function Ac(i,e,t,n){let s=Kp(n);switch(t){case uc:return i*e;case mo:return i*e/s.components*s.byteLength;case go:return i*e/s.components*s.byteLength;case yi:return i*e*2/s.components*s.byteLength;case vo:return i*e*2/s.components*s.byteLength;case hc:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case xo:return i*e*4/s.components*s.byteLength;case Tr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case So:case Eo:case Ao:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ir:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case qo:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $o:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lr:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kp(i){switch(i){case Ht:case ac:return{byteLength:1,components:1};case ws:case oc:case Mn:return{byteLength:2,components:1};case po:case fo:return{byteLength:2,components:4};case bn:case ho:case mn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var vi,xi,Wu,Yl,$u,wr,Xu,Ms,sn,Mt,Ft,Ni,Ss,Ln,Zl,jl,Yu,Ui,Zu,ju,Ju,Ku,Qu,eh,th,nh,Jl,Kl,ih,sh,rh,ah,oh,lh,ch,uh,hh,Sa,Ea,wa,os,Aa,Ta,Ca,Ra,oo,dh,ph,Dn,Ql,ec,tc,Fi,nc,ic,sc,rc,Oi,Es,lo,co,Pa,Cn,Ia,xt,fh,Ar,Lt,uo,Yn,Ht,ac,oc,ws,ho,bn,mn,Mn,po,fo,Bi,lc,cc,uc,hc,rn,qn,Zn,mo,go,yi,vo,xo,Tr,Cr,Rr,Pr,yo,_o,bo,Mo,So,Eo,wo,Ao,To,Ir,Co,Ro,Po,Io,Lo,Do,No,Uo,Fo,Oo,Bo,zo,ko,Ho,Go,Vo,qo,Wo,$o,Xo,Lr,Yo,js,La,ba,Bl,zl,kl,Hl,mh,Dr,gh,jn,Pt,Js,Ks,nt,Ma,vh,xh,yh,_h,dc,bh,Mh,pc,fc,mc,gc,dn,ls,ru,cs,Ah,_n,zt,au,rs,us,bc,be,Qt,R,dl,ou,ze,pl,lu,cu,Ye,Hi,Da,pp,hs,fp,ml,$t,dt,Na,en,tr,Ua,Ke,Gi,vn,mp,gp,ni,qr,Jt,uu,hu,Rn,ds,vp,du,Vi,Bn,Wr,Os,xp,yp,pu,fu,mu,gu,_p,qi,gl,gt,Nt,bp,ps,Th,ii,$r,Ne,kt,nr,Wn,xn,zn,xl,kn,Wi,$i,vu,yl,_l,bl,Ml,Sl,El,Tn,Yt,Hn,yn,Xr,Xi,Yi,Zi,si,ri,Ei,Bs,Yr,Zr,wi,_t,jr,Mp,Ze,ir,sr,ht,Sp,zs,Al,Pn,Ep,hn,Tl,ji,Kt,ks,Rt,lt,Fa,qt,rr,Cl,wp,Ap,Wt,Tp,pn,fs,Ji,Hs,Ki,Qi,es,Gs,Ch,Jr,Vs,Kr,yu,Rl,_u,ar,Gn,Pl,ea,ta,$n,tn,bu,Ai,na,Mu,ia,sa,ra,Il,aa,Su,oa,je,Ri,oi,ts,Eu,ca,wu,Rp,qs,Ws,li,Ti,Pp,ua,ci,Au,Oa,ui,Ba,za,Tu,$s,ha,Ll,Cu,ms,Ru,Pu,or,gs,Iu,Gl,pa,fa,hi,lr,di,Xn,cr,ur,In,ma,ga,Dl,va,hr,fn,dr,ka,Du,Nu,Nl,Ul,Fl,vs,Ha,Ga,Va,qa,Wa,pr,$a,Bp,fr,pi,mr,gr,Rh,kp,Hp,Ut,Xa,Pi,xs,vr,Ya,Za,fi,ja,Ja,Ka,Qa,nn,mi,eo,to,no,xr,gi,io,so,Ih,ro,ys,yr,Ol,zu,ku,_r,ya,_a,An,br,ai,Hu,Gu,It,Vl,Mr,Sr,ql,Ii,is,ss,_s,ao,Ec,qp,wc,Wp,$p,Xp,Yp,Zp,jp,Jp,Wl,ot,wx,Vu,Li,Di,bs,Xl,Er,Tc=jt(()=>{vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wu=0,Yl=1,$u=2,wr=1,Xu=2,Ms=3,sn=0,Mt=1,Ft=2,Ni=0,Ss=1,Ln=2,Zl=3,jl=4,Yu=5,Ui=100,Zu=101,ju=102,Ju=103,Ku=104,Qu=200,eh=201,th=202,nh=203,Jl=204,Kl=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,uh=213,hh=214,Sa=0,Ea=1,wa=2,os=3,Aa=4,Ta=5,Ca=6,Ra=7,oo=0,dh=1,ph=2,Dn=0,Ql=1,ec=2,tc=3,Fi=4,nc=5,ic=6,sc=7,rc=300,Oi=301,Es=302,lo=303,co=304,Pa=1e3,Cn=1001,Ia=1002,xt=1003,fh=1004,Ar=1005,Lt=1006,uo=1007,Yn=1008,Ht=1009,ac=1010,oc=1011,ws=1012,ho=1013,bn=1014,mn=1015,Mn=1016,po=1017,fo=1018,Bi=1020,lc=35902,cc=35899,uc=1021,hc=1022,rn=1023,qn=1026,Zn=1027,mo=1028,go=1029,yi=1030,vo=1031,xo=1033,Tr=33776,Cr=33777,Rr=33778,Pr=33779,yo=35840,_o=35841,bo=35842,Mo=35843,So=36196,Eo=37492,wo=37496,Ao=37488,To=37489,Ir=37490,Co=37491,Ro=37808,Po=37809,Io=37810,Lo=37811,Do=37812,No=37813,Uo=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,ko=37819,Ho=37820,Go=37821,Vo=36492,qo=36494,Wo=36495,$o=36283,Xo=36284,Lr=36285,Yo=36286,js=2300,La=2301,ba=2302,Bl=2303,zl=2400,kl=2401,Hl=2402,mh=3200,Dr=0,gh=1,jn="",Pt="srgb",Js="srgb-linear",Ks="linear",nt="srgb",Ma=7680,vh=519,xh=512,yh=513,_h=514,dc=515,bh=516,Mh=517,pc=518,fc=519,mc=35044,gc="300 es",dn=2e3,ls=2001;ru={},cs=null;Ah={[Sa]:Sa,[wa]:Ca,[Aa]:Aa,[os]:Ta,[Ea]:Ea,[Ca]:wa,[Ra]:Ra,[Ta]:os},_n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,rs=Math.PI/180,us=180/Math.PI;bc={DEG2RAD:rs,RAD2DEG:us,generateUUID:_i,clamp:Ve,euclideanModulo:vc,mapLinear:Jd,inverseLerp:Kd,lerp:Xs,damp:Qd,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:ap,degToRad:op,radToDeg:lp,isPowerOfTwo:cp,ceilPowerOfTwo:up,floorPowerOfTwo:xc,setQuaternionFromProperEuler:hp,normalize:_c,denormalize:yc},be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],d=r[a+1],f=r[a+2],x=r[a+3];if(p!==x||l!==u||c!==d||h!==f){let m=l*u+c*d+h*f+p*x;m<0&&(u=-u,d=-d,f=-f,x=-x,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,o=Math.sin(o*y)/b,l=l*g+u*o,c=c*g+d*o,h=h*g+f*o,p=p*g+x*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+f*o,p=p*g+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=y,c*=y,h*=y,p*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],d=r[a+2],f=r[a+3];return e[t]=o*f+h*p+l*d-c*u,e[t+1]=l*f+h*u+c*p-o*d,e[t+2]=c*f+h*d+o*u-l*p,e[t+3]=h*f-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),d=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p-u*d*f;break;case"YXZ":this._x=u*h*p+c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p+u*d*f;break;case"ZXY":this._x=u*h*p-c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p-u*d*f;break;case"ZYX":this._x=u*h*p-c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p+u*d*f;break;case"YZX":this._x=u*h*p+c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p-u*d*f;break;case"XZY":this._x=u*h*p-c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p+u*d*f;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new R,ou=new Qt,ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],d=n[5],f=n[8],x=s[0],m=s[3],g=s[6],y=s[1],b=s[4],E=s[7],A=s[2],w=s[5],v=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*m+o*b+l*w,r[6]=a*g+o*E+l*v,r[1]=c*x+h*y+p*A,r[4]=c*m+h*b+p*w,r[7]=c*g+h*E+p*v,r[2]=u*x+d*y+f*A,r[5]=u*m+d*b+f*w,r[8]=u*g+d*E+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,u=o*l-h*r,d=c*r-a*l,f=t*p+n*u+s*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=p*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pl.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pl=new ze,lu=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye=dp();Da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=Qs("canvas")),Hi.width=e.width,Hi.height=e.height;let s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pp=0,hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fl(s[a].image)):r.push(fl(s[a]))}else r=fl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};fp=0,ml=new R,$t=class i extends _n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Lt,a=Yn,o=rn,l=Ht,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=_i(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=rc;$t.DEFAULT_ANISOTROPY=1;dt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,E=(d+1)/2,A=(g+1)/2,w=(h+u)/4,v=(p+x)/4,S=(f+m)/4;return b>E&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=v/n):E>A?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=v/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-f)*(m-f)+(p-x)*(p-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(p-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends _n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tr=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ua=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ke=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,p,u,d,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,u,d,f,x,m)}set(e,t,n,s,r,a,o,l,c,h,p,u,d,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=p,g[14]=u,g[3]=d,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*p,f=o*h,x=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+f*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=f+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*p,f=c*h,x=c*p;t[0]=u+x*o,t[4]=f*o-d,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=d*o-f,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*p,f=c*h,x=c*p;t[0]=u-x*o,t[4]=-a*p,t[8]=f+d*o,t[1]=d+f*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*p,f=o*h,x=o*p;t[0]=l*h,t[4]=f*c-d,t[8]=u*c+x,t[1]=l*p,t[5]=x*c+u,t[9]=d*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=x-u*p,t[8]=f*p+d,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+f,t[10]=u-x*p}else if(e.order==="XZY"){let u=a*l,d=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+x,t[5]=a*h,t[9]=d*p-f,t[2]=f*p-d,t[6]=o*h,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ni.crossVectors(n,Jt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ni.crossVectors(n,Jt)),ni.normalize(),qr.crossVectors(Jt,ni),s[0]=ni.x,s[4]=qr.x,s[8]=Jt.x,s[1]=ni.y,s[5]=qr.y,s[9]=Jt.y,s[2]=ni.z,s[6]=qr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],d=n[13],f=n[2],x=n[6],m=n[10],g=n[14],y=n[3],b=n[7],E=n[11],A=n[15],w=s[0],v=s[4],S=s[8],N=s[12],P=s[1],L=s[5],H=s[9],X=s[13],I=s[2],q=s[6],k=s[10],O=s[14],Y=s[3],G=s[7],K=s[11],ne=s[15];return r[0]=a*w+o*P+l*I+c*Y,r[4]=a*v+o*L+l*q+c*G,r[8]=a*S+o*H+l*k+c*K,r[12]=a*N+o*X+l*O+c*ne,r[1]=h*w+p*P+u*I+d*Y,r[5]=h*v+p*L+u*q+d*G,r[9]=h*S+p*H+u*k+d*K,r[13]=h*N+p*X+u*O+d*ne,r[2]=f*w+x*P+m*I+g*Y,r[6]=f*v+x*L+m*q+g*G,r[10]=f*S+x*H+m*k+g*K,r[14]=f*N+x*X+m*O+g*ne,r[3]=y*w+b*P+E*I+A*Y,r[7]=y*v+b*L+E*q+A*G,r[11]=y*S+b*H+E*k+A*K,r[15]=y*N+b*X+E*O+A*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],f=e[3],x=e[7],m=e[11],g=e[15],y=l*d-c*u,b=o*d-c*p,E=o*u-l*p,A=a*d-c*h,w=a*u-l*h,v=a*p-o*h;return t*(x*y-m*b+g*E)-n*(f*y-m*A+g*w)+s*(f*b-x*A+g*v)-r*(f*E-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],f=e[12],x=e[13],m=e[14],g=e[15],y=t*o-n*a,b=t*l-s*a,E=t*c-r*a,A=n*l-s*o,w=n*c-r*o,v=s*c-r*l,S=h*x-p*f,N=h*m-u*f,P=h*g-d*f,L=p*m-u*x,H=p*g-d*x,X=u*g-d*m,I=y*X-b*H+E*L+A*P-w*N+v*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(o*X-l*H+c*L)*q,e[1]=(s*H-n*X-r*L)*q,e[2]=(x*v-m*w+g*A)*q,e[3]=(u*w-p*v-d*A)*q,e[4]=(l*P-a*X-c*N)*q,e[5]=(t*X-s*P+r*N)*q,e[6]=(m*E-f*v-g*b)*q,e[7]=(h*v-u*E+d*b)*q,e[8]=(a*H-o*P+c*S)*q,e[9]=(n*P-t*H-r*S)*q,e[10]=(f*w-x*E+g*y)*q,e[11]=(p*E-h*w-d*y)*q,e[12]=(o*N-a*L-l*S)*q,e[13]=(t*L-n*N+s*S)*q,e[14]=(x*b-f*A-m*y)*q,e[15]=(h*A-p*b+u*y)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,u=r*c,d=r*h,f=r*p,x=a*h,m=a*p,g=o*p,y=l*c,b=l*h,E=l*p,A=n.x,w=n.y,v=n.z;return s[0]=(1-(x+g))*A,s[1]=(d+E)*A,s[2]=(f-b)*A,s[3]=0,s[4]=(d-E)*w,s[5]=(1-(u+g))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(f+b)*v,s[9]=(m-y)*v,s[10]=(1-(u+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let c=1/a,h=1/o,p=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=dn,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,x;if(l)f=r/(a-r),x=a*r/(a-r);else if(o===dn)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ls)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),f,x;if(l)f=1/(a-r),x=a/(a-r);else if(o===dn)f=-2/(a-r),x=-(a+r)/(a-r);else if(o===ls)f=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new R,vn=new Ke,mp=new R(0,0,0),gp=new R(1,1,1),ni=new R,qr=new R,Jt=new R,uu=new Ke,hu=new Qt,Rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vp=0,du=new R,Vi=new Qt,Bn=new Ke,Wr=new R,Os=new R,xp=new R,yp=new Qt,pu=new R(1,0,0),fu=new R(0,1,0),mu=new R(0,0,1),gu={type:"added"},_p={type:"removed"},qi={type:"childadded",child:null},gl={type:"childremoved",child:null},gt=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Rn,n=new Qt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Os,Wr,this.up):Bn.lookAt(Wr,Os,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),qi.child=e,this.dispatchEvent(qi),qi.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),d=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new R(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Nt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,f=.005;c.inputState.pinching&&u>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},$r={h:0,s:0,l:0};Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=vc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vl(a,r,e+1/3),this.g=vl(a,r,e),this.b=vl(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ye.workingToColorSpace(kt.copy(this),e),Math.round(Ve(kt.r*255,0,255))*65536+Math.round(Ve(kt.g*255,0,255))*256+Math.round(Ve(kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(kt.copy(this),t);let n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Pt){Ye.workingToColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,s=kt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL($r);let n=Xs(ii.h,$r.h,t),s=Xs(ii.s,$r.s,t),r=Xs(ii.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Ne;Ne.NAMES=Th;nr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Wn=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new R,zn=new R,xl=new R,kn=new R,Wi=new R,$i=new R,vu=new R,yl=new R,_l=new R,bl=new R,Ml=new dt,Sl=new dt,El=new dt,Tn=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),zn.subVectors(n,t),xl.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(zn),l=xn.dot(xl),c=zn.dot(zn),h=zn.dot(xl),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,f=(a*h-o*l)*u;return r.set(1-d-f,f,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ml.setScalar(0),Sl.setScalar(0),El.setScalar(0),Ml.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,n),El.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ml,r.x),a.addScaledVector(Sl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),zn.subVectors(e,t),xn.cross(zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),$i.subVectors(r,n),yl.subVectors(e,n);let l=Wi.dot(yl),c=$i.dot(yl);if(l<=0&&c<=0)return t.copy(n);_l.subVectors(e,s);let h=Wi.dot(_l),p=$i.dot(_l);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Wi,a);bl.subVectors(e,r);let d=Wi.dot(bl),f=$i.dot(bl);if(f>=0&&d<=f)return t.copy(r);let x=d*c-l*f;if(x<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector($i,o);let m=h*f-d*p;if(m<=0&&p-h>=0&&d-f>=0)return vu.subVectors(r,s),o=(p-h)/(p-h+(d-f)),t.copy(s).addScaledVector(vu,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(Wi,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Yr.subVectors(this.max,Bs),Xi.subVectors(e.a,Bs),Yi.subVectors(e.b,Bs),Zi.subVectors(e.c,Bs),si.subVectors(Yi,Xi),ri.subVectors(Zi,Yi),Ei.subVectors(Xi,Zi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!wl(t,Xi,Yi,Zi,Yr)||(t=[1,0,0,0,1,0,0,0,1],!wl(t,Xi,Yi,Zi,Yr))?!1:(Zr.crossVectors(si,ri),t=[Zr.x,Zr.y,Zr.z],wl(t,Xi,Yi,Zi,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hn=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,Xr=new Yt,Xi=new R,Yi=new R,Zi=new R,si=new R,ri=new R,Ei=new R,Bs=new R,Yr=new R,Zr=new R,wi=new R;_t=new R,jr=new be,Mp=0,Ze=class extends _n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=e!==void 0?Zo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_c(e,this.array)}},ir=class extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}},sr=class extends Ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ht=class extends Ze{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sp=new Yt,zs=new R,Al=new R,Pn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Al)),this.expandByPoint(zs.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ep=0,hn=new Ke,Tl=new gt,ji=new R,Kt=new Yt,ks=new Yt,Rt=new R,lt=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Kt.min,ks.min),Kt.expandByPoint(Rt),Rt.addVectors(Kt.max,ks.max),Kt.expandByPoint(Rt)):(Kt.expandByPoint(ks.min),Kt.expandByPoint(ks.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),Rt.add(ji)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new R,l[N]=new R;let h=new R,p=new R,u=new R,d=new be,f=new be,x=new be,m=new R,g=new R;function y(N,P,L){c[N]=c[P]=c[L]=1,h.fromBufferAttribute(n,N),p.fromBufferAttribute(n,P),u.fromBufferAttribute(n,L),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,P),x.fromBufferAttribute(r,L),p.sub(h),u.sub(h),f.sub(d),x.sub(d);let H=1/(f.x*x.y-x.x*f.y);isFinite(H)&&(m.copy(p).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(H),g.copy(u).multiplyScalar(f.x).addScaledVector(p,-x.x).multiplyScalar(H),o[N].add(m),o[P].add(m),o[L].add(m),l[N].add(g),l[P].add(g),l[L].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,P=b.length;N<P;++N){let L=b[N],H=L.start,X=L.count;for(let I=H,q=H+X;I<q;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let E=new R,A=new R,w=new R,v=new R;function S(N){w.fromBufferAttribute(s,N),v.copy(w);let P=o[N];E.copy(P),E.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(v,P);let H=A.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,H)}for(let N=0,P=n.count;N<P;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,p=new R;if(e)for(let u=0,d=e.count;u<d;u+=3){let f=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,f=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)u[f++]=c[d++]}return new Ze(u,h,p)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=xu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=xu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};qt=new R,rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Zo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_c(e,this.data.array)}},Cl=new R,wp=new R,Ap=new ze,Wt=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Cl.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Cl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ap.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tp=0,pn=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Ss,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fs=class extends pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs=new R,Ki=new R,Qi=new R,es=new be,Gs=new be,Ch=new Ke,Jr=new R,Vs=new R,Kr=new R,yu=new be,Rl=new be,_u=new be,ar=class extends gt{constructor(e=new fs){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fa(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new rr(n,3,0,!1)),Ji.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Ji,this.material=e,this.center=new be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),Ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Qr(Jr.set(-.5,-.5,0),Qi,a,Ki,s,r),Qr(Vs.set(.5,-.5,0),Qi,a,Ki,s,r),Qr(Kr.set(.5,.5,0),Qi,a,Ki,s,r),yu.set(0,0),Rl.set(1,0),_u.set(1,1);let o=e.ray.intersectTriangle(Jr,Vs,Kr,!1,Hs);if(o===null&&(Qr(Vs.set(-.5,.5,0),Qi,a,Ki,s,r),Rl.set(0,1),o=e.ray.intersectTriangle(Jr,Kr,Vs,!1,Hs),o===null))return;let l=e.ray.origin.distanceTo(Hs);l<e.near||l>e.far||t.push({distance:l,point:Hs.clone(),uv:Tn.getInterpolation(Hs,Jr,Vs,Kr,yu,Rl,_u,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};Gn=new R,Pl=new R,ea=new R,ta=new R,$n=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ta.copy(this.origin).sub(Pl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=ta.dot(this.direction),l=-ta.dot(ea),c=ta.lengthSq(),h=Math.abs(1-a*a),p,u,d,f;if(h>0)if(p=a*l-o,u=a*o-l,f=r*h,p>=0)if(u>=-f)if(u<=f){let x=1/h;p*=x,u*=x,d=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-f?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=f?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Pl).addScaledVector(ea,u),d}intersectSphere(e,t){if(e.radius<0)return null;Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,u=e.y-a.y,d=e.z-a.z,f=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,y=n.y-a.y,b=n.z-a.z,E=Math.abs(l),A=Math.abs(c),w=Math.abs(h),v,S,N,P,L,H,X,I,q,k,O,Y;if(E>=A&&E>=w?(N=l,H=p,q=f,Y=g,l>=0?(v=c,S=h,P=u,L=d,X=x,I=m,k=y,O=b):(v=h,S=c,P=d,L=u,X=m,I=x,k=b,O=y)):A>=w?(N=c,H=u,q=x,Y=y,c>=0?(v=h,S=l,P=d,L=p,X=m,I=f,k=b,O=g):(v=l,S=h,P=p,L=d,X=f,I=m,k=g,O=b)):(N=h,H=d,q=m,Y=b,h>=0?(v=l,S=c,P=p,L=u,X=f,I=x,k=g,O=y):(v=c,S=l,P=u,L=p,X=x,I=f,k=y,O=g)),N===0)return null;let G=v/N,K=S/N,ne=1/N,ye=P-G*H,Ie=L-K*H,Q=X-G*q,ue=I-K*q,Ee=k-G*Y,Pe=O-K*Y,T=Ee*ue-Pe*Q,Z=ye*Pe-Ie*Ee,z=Q*Ie-ue*ye;if(s){if(T<0||Z<0||z<0)return null}else if((T<0||Z<0||z<0)&&(T>0||Z>0||z>0))return null;let U=T+Z+z;if(U===0)return null;let ae=ne*(T*H+Z*q+z*Y);return(U>0?ae<0:ae>0)?null:this.at(ae/U,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bu=new Ke,Ai=new $n,na=new Pn,Mu=new R,ia=new R,sa=new R,ra=new R,Il=new R,aa=new R,Su=new R,oa=new R,je=class extends gt{constructor(e=new lt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Il.fromBufferAttribute(p,e),a?aa.addScaledVector(Il,h):aa.addScaledVector(Il.sub(t),h))}t.add(aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(na.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(na,Mu)===null||Ai.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(bu.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=u.length;f<x;f++){let m=u[f],g=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,A=b;E<A;E+=3){let w=o.getX(E),v=o.getX(E+1),S=o.getX(E+2);s=la(this,g,e,n,c,h,p,w,v,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=f,g=x;m<g;m+=3){let y=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);s=la(this,a,e,n,c,h,p,y,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=u.length;f<x;f++){let m=u[f],g=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,A=b;E<A;E+=3){let w=E,v=E+1,S=E+2;s=la(this,g,e,n,c,h,p,w,v,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=f,g=x;m<g;m+=3){let y=m,b=m+1,E=m+2;s=la(this,a,e,n,c,h,p,y,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ri=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=xt,h=xt,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends Ze{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new Ke,Eu=new Ke,ca=[],wu=new Yt,Rp=new Ke,qs=new je,Ws=new Pn,li=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),wu.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Ws.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Eu.multiplyMatrices(n,ts),qs.matrixWorld=Eu,qs.raycast(e,ca);for(let a=0,o=ca.length;a<o;a++){let l=ca[a];l.instanceId=r,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ri(new Float32Array(s*this.count),s,this.count,mo,mn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Pn,Pp=new be(.5,.5),ua=new R,ci=class{constructor(e=new Wt,t=new Wt,n=new Wt,s=new Wt,r=new Wt,a=new Wt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],f=r[8],x=r[9],m=r[10],g=r[11],y=r[12],b=r[13],E=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,g-f,A-y).normalize(),s[1].setComponents(c+a,d+h,g+f,A+y).normalize(),s[2].setComponents(c+o,d+p,g+x,A+b).normalize(),s[3].setComponents(c-o,d-p,g-x,A-b).normalize(),n)s[4].setComponents(l,u,m,E).normalize(),s[5].setComponents(c-l,d-u,g-m,A-E).normalize();else if(s[4].setComponents(c-l,d-u,g-m,A-E).normalize(),t===dn)s[5].setComponents(c+l,d+u,g+m,A+E).normalize();else if(t===ls)s[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Pp.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Au=new Ke,Oa=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Au.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ci),n[s].setFromProjectionMatrix(Au,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ci),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},ui=class extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ba=new R,za=new R,Tu=new Ke,$s=new $n,ha=new Pn,Ll=new R,Cu=new R,ms=class extends gt{constructor(e=new lt,t=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ba.distanceTo(za);e.setAttribute("lineDistance",new ht(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Tu.copy(s).invert(),$s.copy(e.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let x=d,m=f-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),b=da(this,e,$s,l,g,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(f-1),m=h.getX(d),g=da(this,e,$s,l,x,m,f-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,m=f-1;x<m;x+=c){let g=da(this,e,$s,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=da(this,e,$s,l,f-1,d,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ru=new R,Pu=new R,or=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ru.fromBufferAttribute(t,s),Pu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ru.distanceTo(Pu);e.setAttribute("lineDistance",new ht(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gs=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new Ke,Gl=new $n,pa=new Pn,fa=new R,hi=class extends gt{constructor(e=new lt,t=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Iu.copy(s).invert(),Gl.copy(e.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let f=u,x=d;f<x;f++){let m=c.getX(f);fa.fromBufferAttribute(p,m),Lu(fa,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let f=u,x=d;f<x;f++)fa.fromBufferAttribute(p,f),Lu(fa,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};lr=class extends $t{constructor(e=[],t=Oi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends $t{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class extends $t{constructor(e,t,n=bn,s,r,a,o=xt,l=xt,c,h=qn,p=1){if(h!==qn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cr=class extends Xn{constructor(e,t=bn,n=Oi,s,r,a=xt,o=xt,l,c=qn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ur=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},In=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,d=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2));function f(x,m,g,y,b,E,A,w,v,S,N){let P=E/v,L=A/S,H=E/2,X=A/2,I=w/2,q=v+1,k=S+1,O=0,Y=0,G=new R;for(let K=0;K<k;K++){let ne=K*L-X;for(let ye=0;ye<q;ye++){let Ie=ye*P-H;G[x]=Ie*y,G[m]=ne*b,G[g]=I,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),p.push(ye/v),p.push(1-K/S),O+=1}}for(let K=0;K<S;K++)for(let ne=0;ne<v;ne++){let ye=u+ne+q*K,Ie=u+ne+q*(K+1),Q=u+(ne+1)+q*(K+1),ue=u+(ne+1)+q*K;l.push(ye,Ie,ue),l.push(Ie,Q,ue),Y+=6}o.addGroup(d,Y,N),d+=Y,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ma=new R,ga=new R,Dl=new R,va=new Tn,hr=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(rs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],p=new Array(3),u=new Map,d=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:x,b:m,c:g}=va;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),va.getNormal(Dl),p[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,p[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,p[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let y=0;y<3;y++){let b=(y+1)%3,E=p[y],A=p[b],w=va[h[y]],v=va[h[b]],S=`${E}_${A}`,N=`${A}_${E}`,P=u.get(N);P?(Dl.dot(P.normal)<=r&&(d.push(w.x,w.y,w.z),d.push(v.x,v.y,v.z)),u.set(N,null)):u.has(S)||u.set(S,{index0:c[y],index1:c[b],normal:Dl.clone()})}}for(let f of u.values())if(f){let{index0:x,index1:m}=f;ma.fromBufferAttribute(o,x),ga.fromBufferAttribute(o,m),d.push(ma.x,ma.y,ma.z),d.push(ga.x,ga.y,ga.z)}this.setAttribute("position",new ht(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new be:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],a=[],o=new R,l=new Ke;for(let d=0;d<=e;d++){let f=d/e;s[d]=this.getTangentAt(f,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,f))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ve(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],d*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},dr=class extends fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ka=class extends dr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Du=new R,Nu=new R,Nl=new Mc,Ul=new Mc,Fl=new Mc,vs=class extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nu.subVectors(s[0],s[1]).add(s[0]),c=Nu);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Du.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Du),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Nl.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,f,x,m),Ul.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,f,x,m),Fl.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,f,x,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Ul.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Fl.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Nl.calc(l),Ul.calc(l),Fl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ha=class extends fn{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,s.x,r.x,a.x,o.x),Zs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends fn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,s.x,r.x,a.x,o.x),Zs(e,s.y,r.y,a.y,o.y),Zs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends fn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends fn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,s.x,r.x,a.x),Ys(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pr=class extends fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,s.x,r.x,a.x),Ys(e,s.y,r.y,a.y),Ys(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Uu(o,l.x,c.x,h.x,p.x),Uu(o,l.y,c.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Bp=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:vs,CubicBezierCurve:Ha,CubicBezierCurve3:Ga,EllipseCurve:dr,LineCurve:Va,LineCurve3:qa,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:pr,SplineCurve:$a}),fr=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,d=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*u-a;for(let b=0;b<c;b++){let E=b*p-r;f.push(E,-y,0),x.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let b=y+c*g,E=y+c*(g+1),A=y+1+c*(g+1),w=y+1+c*g;d.push(b,E,w),d.push(E,A,w)}this.setIndex(d),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},pi=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new R,u=new R,d=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],b=g/n,E=a+b*o,A=e*Math.cos(E),w=Math.sqrt(e*e-A*A),v=0;g===0&&a===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let N=S/t,P=s+N*r;p.x=-w*Math.cos(P),p.y=A,p.z=w*Math.sin(P),f.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),m.push(N+v,1-b),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let b=h[g][y+1],E=h[g][y],A=h[g+1][y],w=h[g+1][y+1];(g!==0||a>0)&&d.push(b,E,w),(g!==n-1||l<Math.PI)&&d.push(E,A,w)}this.setIndex(d),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},mr=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new R,d=new R,f=new R;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),h.push(f.x,f.y,f.z),p.push(g/s),p.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,E=(s+1)*x+m;l.push(g,y,E),l.push(y,b,E)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},gr=class i extends lt{constructor(e=new pr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new be,h=new R,p=[],u=[],d=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),y(),g()}function m(b){h=e.getPointAt(b/t,h);let E=a.normals[b],A=a.binormals[b];for(let w=0;w<=s;w++){let v=w/s*Math.PI*2,S=Math.sin(v),N=-Math.cos(v);l.x=N*E.x+S*A.x,l.y=N*E.y+S*A.y,l.z=N*E.z+S*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,p.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let E=1;E<=s;E++){let A=(s+1)*(b-1)+(E-1),w=(s+1)*b+(E-1),v=(s+1)*b+E,S=(s+1)*(b-1)+E;f.push(A,w,S),f.push(w,v,S)}}function y(){for(let b=0;b<=t;b++)for(let E=0;E<=s;E++)c.x=b/t,c.y=E/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Bp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};Rh={clone:zi,merge:Gt},kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xa=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pi=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xs=class extends Pi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},vr=class extends pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=oo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ya=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=e,o=2*t-n;break;case Hl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*n-t;break;case Hl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(n-t)/(s-t),x=f*f,m=x*f,g=-u*m+2*u*x-u*f,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*f+1,b=(-1-d)*m+(1.5+d)*x+.5*f,E=d*m-d*x;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+y*a[c+A]+b*a[l+A]+E*a[p+A];return r}},Ja=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Ka=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends fi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let f=(n-t)/(s-t),x=1-f;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*f;return r}let u=o*2,d=e-1;for(let f=0;f!==o;++f){let x=a[c+f],m=a[l+f],g=d*u+f*2,y=p[g],b=p[g+1],E=e*u+f*2,A=h[E],w=h[E+1],v=Vp(n,t,y,A,s);r[f]=Ph(v,x,b,w,m)}return r}};nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xa(e.settings)&&(n.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break;case Bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;xa(this.settings)&&(Ou(this.settings.inTangents,e),Ou(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xa(this.settings)&&(Bu(this.settings.inTangents,e),Bu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&jd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,d=p+n;for(let f=0;f!==n;++f){let x=t[p+f];if(x!==t[u+f]||x!==t[d+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[p+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=La;mi=class extends nn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=js;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;eo=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="color";to=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="number";no=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Qt.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;gi=class extends nn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=js;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;io=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};io.prototype.ValueTypeName="vector";so=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],f=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ih=new so,ro=class{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";ys=class extends gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yr=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ol=new Ke,zu=new R,ku=new R,_r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Ht,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ci,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ol,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ya=new R,_a=new Qt,An=new R,br=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ya,_a,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,_a,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ya,_a,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,_a,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new R,Hu=new be,Gu=new be,It=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Gu),t.subVectors(Gu,Hu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vl=class extends _r{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}},Mr=class extends ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Sr=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ql=class extends _r{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},is=-90,ss=1,_s=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(is,ss,e,t);s.layers=this.layers,this.add(s);let r=new It(is,ss,e,t);r.layers=this.layers,this.add(r);let a=new It(is,ss,e,t);a.layers=this.layers,this.add(a);let o=new It(is,ss,e,t);o.layers=this.layers,this.add(o);let l=new It(is,ss,e,t);l.layers=this.layers,this.add(l);let c=new It(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ao=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ec="\\[\\]\\.:\\/",qp=new RegExp("["+Ec+"]","g"),wc="[^"+Ec+"]",Wp="[^"+Ec.replace("\\.","")+"]",$p=/((?:WC+[\/:])*)/.source.replace("WC",wc),Xp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),jp=new RegExp("^"+$p+Xp+Yp+Zp+"$"),Jp=["material","materials","bones","map"],Wl=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(e){let t=jp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Wl;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];wx=new Float32Array(1),Vu=new Ke,Li=class{constructor(e,t,n=0,s=1/0){this.ray=new $n(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vu),this}intersectObject(e,t=!0,n=[]){return $l(e,this,n,t),n.sort(qu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$l(e[s],this,n,t);return n.sort(qu),n}};Di=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},bs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Xl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},Er=class extends _n{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Qh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ef(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,f)=>d.start-f.start);let u=0;for(let d=1;d<p.length;d++){let f=p[u],x=p[d];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++u,p[u]=x)}p.length=u+1;for(let d=0,f=p.length;d<f;d++){let x=p[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Fg(i,e,t,n,s,r){let a=new Ne(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let E=y.backgroundBlurriness>0;b=e.get(b,E)}return b}function f(y){let b=!1,E=d(y);E===null?m(a,o):E&&E.isColor&&(m(E,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,b){let E=d(b);E&&E.isCubeTexture?(c===void 0&&(c=new je(new In(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:zi(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ed),c.material.toneMapped=Ye.getTransfer(E.colorSpace)!==nt,(h!==E||p!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new je(new fr(2,2),new Ut({name:"BackgroundMaterial",uniforms:zi(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(E.colorSpace)!==nt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,p=E.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(jo,Sc(i)),t.buffers.color.setClear(jo.r,jo.g,jo.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:f,addToRenderList:x,dispose:g}}function Og(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,H,X,I,q){let k=!1,O=p(L,I,X,H);r!==O&&(r=O,c(r.object)),k=d(L,I,X,q),k&&f(L,I,X,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,E(L,H,X,I),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function p(L,H,X,I){let q=I.wireframe===!0,k=n[H.id];k===void 0&&(k={},n[H.id]=k);let O=L.isInstancedMesh===!0?L.id:0,Y=k[O];Y===void 0&&(Y={},k[O]=Y);let G=Y[X.id];G===void 0&&(G={},Y[X.id]=G);let K=G[q];return K===void 0&&(K=u(l()),G[q]=K),K}function u(L){let H=[],X=[],I=[];for(let q=0;q<t;q++)H[q]=0,X[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,H,X,I){let q=r.attributes,k=H.attributes,O=0,Y=X.getAttributes();for(let G in Y)if(Y[G].location>=0){let ne=q[G],ye=k[G];if(ye===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ye=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ye=L.instanceColor)),ne===void 0||ne.attribute!==ye||ye&&ne.data!==ye.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function f(L,H,X,I){let q={},k=H.attributes,O=0,Y=X.getAttributes();for(let G in Y)if(Y[G].location>=0){let ne=k[G];ne===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));let ye={};ye.attribute=ne,ne&&ne.data&&(ye.data=ne.data),q[G]=ye,O++}r.attributes=q,r.attributesNum=O,r.index=I}function x(){let L=r.newAttributes;for(let H=0,X=L.length;H<X;H++)L[H]=0}function m(L){g(L,0)}function g(L,H){let X=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;X[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),q[L]!==H&&(i.vertexAttribDivisor(L,H),q[L]=H)}function y(){let L=r.newAttributes,H=r.enabledAttributes;for(let X=0,I=H.length;X<I;X++)H[X]!==L[X]&&(i.disableVertexAttribArray(X),H[X]=0)}function b(L,H,X,I,q,k,O){O===!0?i.vertexAttribIPointer(L,H,X,q,k):i.vertexAttribPointer(L,H,X,I,q,k)}function E(L,H,X,I){x();let q=I.attributes,k=X.getAttributes(),O=H.defaultAttributeValues;for(let Y in k){let G=k[Y];if(G.location>=0){let K=q[Y];if(K===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let ne=K.normalized,ye=K.itemSize,Ie=e.get(K);if(Ie===void 0)continue;let Q=Ie.buffer,ue=Ie.type,Ee=Ie.bytesPerElement,Pe=ue===i.INT||ue===i.UNSIGNED_INT||K.gpuType===ho;if(K.isInterleavedBufferAttribute){let T=K.data,Z=T.isInterleavedBuffer===!0?T.stride:T.itemSize,z=K.offset;if(T.isInstancedInterleavedBuffer||T.isInstancedBufferAttribute){for(let U=0;U<G.locationSize;U++)g(G.location+U,T.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let U=0;U<G.locationSize;U++)m(G.location+U);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let U=0;U<G.locationSize;U++)b(G.location+U,ye/G.locationSize,ue,ne,Z*Ee,(z+ye/G.locationSize*U)*Ee,Pe)}else{if(K.isInstancedBufferAttribute){for(let T=0;T<G.locationSize;T++)g(G.location+T,K.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let T=0;T<G.locationSize;T++)m(G.location+T);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let T=0;T<G.locationSize;T++)b(G.location+T,ye/G.locationSize,ue,ne,ye*Ee,ye/G.locationSize*T*Ee,Pe)}}else if(O!==void 0){let ne=O[Y];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(G.location,ne);break;case 3:i.vertexAttrib3fv(G.location,ne);break;case 4:i.vertexAttrib4fv(G.location,ne);break;default:i.vertexAttrib1fv(G.location,ne)}}}}y()}function A(){N();for(let L in n){let H=n[L];for(let X in H){let I=H[X];for(let q in I){let k=I[q];for(let O in k)h(k[O].object),delete k[O];delete I[q]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let H=n[L.id];for(let X in H){let I=H[X];for(let q in I){let k=I[q];for(let O in k)h(k[O].object),delete k[O];delete I[q]}}delete n[L.id]}function v(L){for(let H in n){let X=n[H];for(let I in X){let q=X[I];if(q[L.id]===void 0)continue;let k=q[L.id];for(let O in k)h(k[O].object),delete k[O];delete q[L.id]}}}function S(L){for(let H in n){let X=n[H],I=L.isInstancedMesh===!0?L.id:0,q=X[I];if(q!==void 0){for(let k in q){let O=q[k];for(let Y in O)h(O[Y].object),delete O[Y];delete q[k]}delete X[I],Object.keys(X).length===0&&delete n[H]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Bg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==rn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let S=v===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Ht&&v!==mn&&!S&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:A,samples:w}}function kg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Wt,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||s;return s=u,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let f=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,g=i.get(p);if(!s||f===null||f.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,b=y*4,E=g.clippingState||null;l.value=E,E=h(f,u,b,d);for(let A=0;A!==b;++A)E[A]=t[A];g.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,d,f){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=d+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,E=d;b!==x;++b,E+=4)a.copy(p[b]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dh(i,e,t){return new Fr(i,{minFilter:Yn,generateMipmaps:e,type:Mn,colorSpace:Js,depthBuffer:t})}function Or(i,e,t){return new Ut({name:i,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:Mt,blending:Ni,depthTest:!1,depthWrite:!1})}function $g(){return Or("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${td}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xg(){return Or("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yg(){return Or("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nh(){return Or("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Uh(){return Or("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===lo||d===co)if(e.has(u)){let f=e.get(u).texture;return o(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let x=new Fr(f.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,f=d===lo||d===co,x=d===Oi||d===Es;if(f||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ts(i)),m=f?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return f&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Ts(i)),m=f?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===lo?u.mapping=Oi:d===co&&(u.mapping=Es),u}function l(u){let d=0,f=6;for(let x=0;x<f;x++)u[x]!==void 0&&d++;return d===f}function c(u){let d=u.target;d.removeEventListener("dispose",c);let f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function jg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function Jg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function o(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id],a.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(f){let x=f.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function p(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?sr:ir,E=new b(Math.ceil(y/3)*6,1),A=E.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,N=0;S<y;S+=3){let P=v[S+0],L=v[S+1],H=v[S+2];A[N++]=P,A[N++]=L,A[N++]=L,A[N++]=H,A[N++]=H,A[N++]=P}}else{g=m.version;for(let v=0,S=0;v<y;v+=3){let N=v+0,P=v+1,L=v+2;A[S++]=N,A[S++]=P,A[S++]=P,A[S++]=L,A[S++]=L,A[S++]=N}}E.version=g;let w=r.get(f);w&&e.remove(w),r.set(f,E)}function u(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&p(f)}else p(f);return r.get(f)}function d(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Kg(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function c(p,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,p*a,d),t.update(u,n,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function e0(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let N=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;d===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let E=o.attributes.position.count*b,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*A*4*p),v=new tr(w,E,A,p);v.type=mn,v.needsUpdate=!0;let S=b*4;for(let P=0;P<p;P++){let L=m[P],H=g[P],X=y[P],I=E*A*4*P;for(let q=0;q<L.count;q++){let k=q*S;d===!0&&(s.fromBufferAttribute(L,q),w[I+k+0]=s.x,w[I+k+1]=s.y,w[I+k+2]=s.z,w[I+k+3]=0),f===!0&&(s.fromBufferAttribute(H,q),w[I+k+4]=s.x,w[I+k+5]=s.y,w[I+k+6]=s.z,w[I+k+7]=0),x===!0&&(s.fromBufferAttribute(X,q),w[I+k+8]=s.x,w[I+k+9]=s.y,w[I+k+10]=s.z,w[I+k+11]=X.itemSize===4?s.w:1)}}u={count:p,texture:v,size:new be(E,A)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let f=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function t0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function i0(i,e,t,n,s,r){let a=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new lt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let p=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new je(h,p),d=new Sr(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,y=null,b=[],E=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let v=0;v<b.length;v++){let S=b[v];S.setSize&&S.setSize(A,w)}},this.setEffects=function(A){b=A,E=b.length>0&&b[0].isRenderPass===!0;let w=a.width,v=a.height;b.length>0&&o===null&&(o=new en(w,v,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new en(w,v,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Xn(w,v),r===!0&&(c.format=Zn,c.type=Bi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<b.length;N++){let P=b[N];P.setSize&&P.setSize(w,v),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===Dn&&b.length===0)return!1;if(y=w,w!==null){let v=w.width,S=w.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return E===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Dn,!0},this.hasRenderPass=function(){return E},this.end=function(A,w){A.toneMapping=g,m=!0;let v=a,S=o;for(let N=0;N<b.length;N++){let P=b[N];P.enabled!==!1&&(P.render(A,S,v,w),P.needsSwap!==!1&&(v=S,S=S===o?l:o))}if(f!==A.outputColorSpace||x!==A.toneMapping){f=A.outputColorSpace,x=A.toneMapping,p.defines={},Ye.getTransfer(f)===nt&&(p.defines.SRGB_TRANSFER="");let N=n0[x];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(y),A.render(u,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}function Rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function s0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Et(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;zh.set(n),i.uniformMatrix3fv(this.addr,!1,zh),Et(t,n)}}function u0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),Et(t,n)}}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function p0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function m0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Qo(i){return i.version===0&&(i.compareFunction=fc,i.needsUpdate=!0),i}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Qo(sd):r=id,t.setTexture2D(e||r,s)}function _0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||od,s)}function b0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Qo(rd):r=ld,t.setTextureCube(e||r,s)}function M0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ad,s)}function S0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return f0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return M0}}function E0(i,e){i.uniform1fv(this.addr,e)}function w0(i,e){let t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function A0(i,e){let t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function T0(i,e){let t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function C0(i,e){let t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R0(i,e){let t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function P0(i,e){let t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I0(i,e){i.uniform1iv(this.addr,e)}function L0(i,e){i.uniform2iv(this.addr,e)}function D0(i,e){i.uniform3iv(this.addr,e)}function N0(i,e){i.uniform4iv(this.addr,e)}function U0(i,e){i.uniform1uiv(this.addr,e)}function F0(i,e){i.uniform2uiv(this.addr,e)}function O0(i,e){i.uniform3uiv(this.addr,e)}function B0(i,e){i.uniform4uiv(this.addr,e)}function z0(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qo(sd):a=id;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function k0(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||od,r[a])}function H0(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Qo(rd):a=ld;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function G0(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ad,r[a])}function V0(i){switch(i){case 5126:return E0;case 35664:return w0;case 35665:return A0;case 35666:return T0;case 35674:return C0;case 35675:return R0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return N0;case 5125:return U0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}function Hh(i,e){i.seq.push(e),i.map[e.id]=e}function q0(i,e,t){let n=i.name,s=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hh(t,c===void 0?new Pc(o,i,e):new Ic(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Lc(o),Hh(t,p)),t=p}}}function Gh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function X0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Y0(i){Ye._getMatrix(Vh,Ye.workingColorSpace,i);let e=`mat3( ${Vh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Ks:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+X0(i.getShaderSource(e),o)}else return r}function Z0(i,e){let t=Y0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function J0(i,e){let t=j0[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function K0(){Ye.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function ev(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ur(i){return i!==""}function Wh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $h(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Dc(i){return i.replace(nv,iv)}function iv(i,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Dc(t)}function Xh(i){return i.replace(sv,rv)}function rv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ov(i){return av[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function hv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uv[i.combine]||"ENVMAP_BLENDING_NONE"}function dv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ov(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=cv(t),p=hv(t),u=Q0(t),d=ev(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ur).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ur).join(`
`),m.length>0&&(m+=`
`)):(x=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),m=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?We.tonemapping_pars_fragment:"",t.toneMapping!==Dn?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Dc(a),a=Wh(a,t),a=$h(a,t),o=Dc(o),o=Wh(o,t),o=$h(o,t),a=Xh(a),o=Xh(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+a,b=g+m+o,E=Gh(s,s.VERTEX_SHADER,y),A=Gh(s,s.FRAGMENT_SHADER,b);s.attachShader(f,E),s.attachShader(f,A),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function w(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(f)||"",H=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(A)||"",I=L.trim(),q=H.trim(),k=X.trim(),O=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,E,A);else{let G=qh(s,E,"vertex"),K=qh(s,A,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+G+`
`+K)}else I!==""?Fe("WebGLProgram: Program Info Log:",I):(q===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:O,programLog:I,vertexShader:{log:q,prefix:x},fragmentShader:{log:k,prefix:m}})}s.deleteShader(E),s.deleteShader(A),v=new As(s,f),S=tv(s,f)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(f,W0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=A,this}function fv(i){return i===yi||i===Ir||i===Lr}function mv(i,e,t,n,s,r){let a=new ds,o=new Nc,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,N,P,L,H){let X=P.fog,I=L.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||q,k),Y=u[v.type],G=n.precision;v.precision!==null&&(G=n.getMaxPrecision(v.precision),G!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",G,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ne=K!==void 0?K.length:0,ye=0;I.morphAttributes.position!==void 0&&(ye=1),I.morphAttributes.normal!==void 0&&(ye=2),I.morphAttributes.color!==void 0&&(ye=3);let Ie,Q,ue,Ee;if(Y){let Me=Un[Y];Ie=Me.vertexShader,Q=Me.fragmentShader}else{Ie=v.vertexShader,Q=v.fragmentShader;let Me=o.getVertexShaderStage(v),it=o.getFragmentShaderStage(v);o.update(v,Me,it),ue=Me.id,Ee=it.id}let Pe=i.getRenderTarget(),T=i.state.buffers.depth.getReversed(),Z=L.isInstancedMesh===!0,z=L.isBatchedMesh===!0,U=!!v.map,ae=!!v.matcap,oe=!!O,Ae=oe&&O.isPMREMTexture===!0,pt=!!v.aoMap,vt=!!v.lightMap,Xt=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,wn=!!v.displacementMap,At=!!v.emissiveMap,on=!!v.metalnessMap,ln=!!v.roughnessMap,cn=v.anisotropy>0,B=v.clearcoat>0,un=v.diffuseRoughness>0,ct=v.dispersion>0,ut=v.retroreflectivity>0,_e=v.iridescence>0,bt=v.sheen>0,Oe=v.transmission>0,ke=cn&&!!v.anisotropyMap,C=B&&!!v.clearcoatMap,_=B&&!!v.clearcoatNormalMap,W=B&&!!v.clearcoatRoughnessMap,le=un&&!!v.diffuseRoughnessMap,re=_e&&!!v.iridescenceMap,de=_e&&!!v.iridescenceThicknessMap,ve=bt&&!!v.sheenColorMap,te=bt&&!!v.sheenRoughnessMap,ie=!!v.specularMap,fe=!!v.specularColorMap,D=!!v.specularIntensityMap,se=Oe&&!!v.transmissionMap,ee=Oe&&!!v.thicknessMap,me=!!v.gradientMap,he=!!v.alphaMap,pe=v.alphaTest>0,De=!!v.alphaHash,qe=!!v.extensions,ce=Dn;v.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ue=Ae?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Ge={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:Q,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:G,batching:z,batchingColor:z&&L._colorsTexture!==null,instancing:Z,instancingColor:Z&&L.instanceColor!==null,instancingMorph:Z&&L.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:U,matcap:ae,envMap:oe,envMapMode:oe&&O.mapping,envMapPMREM:Ae,envMapMaxLod:Ae?Ue.length-1:null,envMapSize:Ae?Ue[0].width:null,aoMap:pt,lightMap:vt,bumpMap:Xt,normalMap:ft,displacementMap:wn,emissiveMap:At,normalMapObjectSpace:ft&&v.normalMapType===gh,normalMapTangentSpace:ft&&v.normalMapType===Dr,packedNormalMap:ft&&v.normalMapType===Dr&&fv(v.normalMap.format),metalnessMap:on,roughnessMap:ln,anisotropy:cn,anisotropyMap:ke,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:_,clearcoatRoughnessMap:W,diffuseRoughness:un,diffuseRoughnessMap:le,dispersion:ct,retroreflection:ut,iridescence:_e,iridescenceMap:re,iridescenceThicknessMap:de,sheen:bt,sheenColorMap:ve,sheenRoughnessMap:te,specularMap:ie,specularColorMap:fe,specularIntensityMap:D,transmission:Oe,transmissionMap:se,thicknessMap:ee,gradientMap:me,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:De,combine:v.combine,mapUv:U&&d(v.map.channel),aoMapUv:pt&&d(v.aoMap.channel),lightMapUv:vt&&d(v.lightMap.channel),bumpMapUv:Xt&&d(v.bumpMap.channel),normalMapUv:ft&&d(v.normalMap.channel),displacementMapUv:wn&&d(v.displacementMap.channel),emissiveMapUv:At&&d(v.emissiveMap.channel),metalnessMapUv:on&&d(v.metalnessMap.channel),roughnessMapUv:ln&&d(v.roughnessMap.channel),anisotropyMapUv:ke&&d(v.anisotropyMap.channel),clearcoatMapUv:C&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:te&&d(v.sheenRoughnessMap.channel),specularMapUv:ie&&d(v.specularMap.channel),specularColorMapUv:fe&&d(v.specularColorMap.channel),specularIntensityMapUv:D&&d(v.specularIntensityMap.channel),transmissionMapUv:se&&d(v.transmissionMap.channel),thicknessMapUv:ee&&d(v.thicknessMap.channel),alphaMapUv:he&&d(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||cn),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(U||he),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:T,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ye,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:U&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ft,flipSided:v.side===Mt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:qe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&v.extensions.multiDraw===!0||z)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){let S=u[v.type],N;if(S){let P=Un[S];N=Rh.clone(P.uniforms)}else N=v.uniforms;return N}function b(v,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new dv(i,S,v,s),c.push(N),h.set(S,N)),N}function E(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function w(){o.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:w}}function gv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,f,x,m,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:f,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=f,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,d,f,x,m,g,y){y.reversedDepth===!0&&(m=-m);let b=o(u,d,f,x,m,g);f.transmission>0?n.push(b):f.transparent===!0?s.push(b):t.push(b)}function c(u,d,f,x,m,g){let y=o(u,d,f,x,m,g);f.transmission>0?n.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||vv),n.length>1&&n.sort(d||Zh),s.length>1&&s.sort(d||Zh)}function p(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function xv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new jh,i.set(n,[a])):s>=r.length?(a=new jh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ne};break;case"SpotLight":t={position:new R,direction:new R,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function _v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Mv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sv(i){let e=new yv,t=_v(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Ke,a=new Ke;function o(c){let h=0,p=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let d=0,f=0,x=0,m=0,g=0,y=0,b=0,E=0,A=0,w=0,v=0,S=0,N=0,P=0;c.sort(Mv);for(let H=0,X=c.length;H<X;H++){let I=c[H],q=I.color,k=I.intensity,O=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===yi?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*k,p+=q.g*k,u+=q.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);P++}else if(I.isSunLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ne=t.get(I);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[f]=ne,n.sunShadowMap[f]=Y;let ye=K.getViewportCount();for(let Ie=0;Ie<ye;Ie++)n.sunShadowMatrix[x+Ie]=K.getMatrix(Ie),n.sunShadowCascade[x+Ie]=K._cascadeData[Ie];x+=ye,f++}n.sun[d]=G,d++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ne=t.get(I);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=I.shadow.matrix,A++}n.directional[m]=G,m++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(q).multiplyScalar(k),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[y]=G;let K=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,K.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[y]=K.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=Y,v++}y++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(q).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=G,b++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let K=I.shadow,ne=t.get(I);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[E]=G,E++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==b||L.hemiLength!==E||L.numSunShadows!==f||L.numDirectionalShadows!==A||L.numPointShadows!==w||L.numSpotShadows!==v||L.numSpotMaps!==S||L.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=E,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=b,L.hemiLength=E,L.numSunShadows=f,L.numDirectionalShadows=A,L.numPointShadows=w,L.numSpotShadows=v,L.numSpotMaps=S,L.numLightProbes=P,n.version=bv++)}function l(c,h){let p=0,u=0,d=0,f=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let E=c[y];if(E.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(g),p++}else if(E.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),u++}else if(E.isSpotLight){let A=n.spot[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(E.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Jh(i){let e=new Sv(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ev(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Jh(i),e.set(s,[o])):r>=a.length?(o=new Jh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Rv(i,e,t){let n=new ci,s=new be,r=new be,a=new dt,o=new Ya,l=new Za,c={},h=t.maxTextureSize,p={[sn]:Mt,[Mt]:sn,[Ft]:Ft},u=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:wv,fragmentShader:Av}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let f=new lt;f.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new je(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let g=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Xu&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let N=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ni),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let X=g!==this.type;X&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=w.length;I<q;I++){let k=w[I],O=k.shadow;if(O===void 0){Fe("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Y=O.getFrameExtents();s.multiply(Y),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||X===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ms){if(k.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new en(s.x,s.y,{format:yi,type:Mn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new Xn(s.x,s.y,mn),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xt,O.map.depthTexture.magFilter=xt}else k.isPointLight?(O.map=new Fr(s.x),O.map.depthTexture=new cr(s.x,bn)):(O.map=new en(s.x,s.y),O.map.depthTexture=new Xn(s.x,s.y,bn)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=qn,this.type===wr?(O.map.depthTexture.compareFunction=G?pc:dc,O.map.depthTexture.minFilter=Lt,O.map.depthTexture.magFilter=Lt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xt,O.map.depthTexture.magFilter=xt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let K=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();k.isPointLight!==!0&&O.updateMatrices(k,S);let ne=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ye=0;ye<K;ye++){let Ie=O.getCamera(ye);if(k.isPointLight){let Q=O.camera,ue=O.matrix,Ee=k.distance||Q.far;Ee!==Q.far&&(Q.far=Ee,Q.updateProjectionMatrix()),Nr.setFromMatrixPosition(k.matrixWorld),Q.position.copy(Nr),Rc.copy(Q.position),Rc.add(Tv[ye]),Q.up.copy(Cv[ye]),Q.lookAt(Rc),Q.updateMatrixWorld(),ue.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Kh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Kh,Q.coordinateSystem,Q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(O.map),i.clear());let Q=O.getViewport(ye);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),H.viewport(a)}n=O.getFrustum(ye),E(v,S,Ie,k,ne,this.type)}O.isPointLightShadow!==!0&&this.type===Ms&&y(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(N,P,L)};function y(w,v){let S=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:yi,type:Mn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(v,null,S,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(v,null,S,d,x,null)}function b(w,v,S,N){let P=null,L=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)P=L;else if(P=S.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let H=P.uuid,X=v.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let q=I[X];q===void 0&&(q=P.clone(),I[X]=q,v.addEventListener("dispose",A)),P=q}if(P.visible=v.visible,P.wireframe=v.wireframe,N===Ms?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:p[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=i.properties.get(P);H.light=S}return P}function E(w,v,S,N,P,L){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Ms)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=e.update(w),q=w.material;if(Array.isArray(q)){let k=I.groups;for(let O=0,Y=k.length;O<Y;O++){let G=k[O],K=q[G.materialIndex];if(K&&K.visible){let ne=b(w,K,N,L);w.onBeforeShadow(i,w,v,S,I,ne,G),i.renderBufferDirect(S,null,I,ne,w,G),w.onAfterShadow(i,w,v,S,I,ne,G)}}}else if(q.visible){let k=b(w,q,N,L);w.onBeforeShadow(i,w,v,S,I,k,null),i.renderBufferDirect(S,null,I,k,w,null),w.onAfterShadow(i,w,v,S,I,k,null)}}let X=w.children;for(let I=0,q=X.length;I<q;I++)E(X[I],v,S,N,P,L)}function A(w){w.target.removeEventListener("dispose",A);for(let S in c){let N=c[S],P=w.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function Pv(i,e){function t(){let D=!1,se=new dt,ee=null,me=new dt(0,0,0,0);return{setMask:function(he){ee!==he&&!D&&(i.colorMask(he,he,he,he),ee=he)},setLocked:function(he){D=he},setClear:function(he,pe,De,qe,ce){ce===!0&&(he*=qe,pe*=qe,De*=qe),se.set(he,pe,De,qe),me.equals(se)===!1&&(i.clearColor(he,pe,De,qe),me.copy(se))},reset:function(){D=!1,ee=null,me.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,ee=null,me=null,he=null;return{setReversed:function(pe){if(se!==pe){let De=e.get("EXT_clip_control");pe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),se=pe;let qe=he;he=null,this.setClear(qe)}},getReversed:function(){return se},setTest:function(pe){pe?T(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(pe){ee!==pe&&!D&&(i.depthMask(pe),ee=pe)},setFunc:function(pe){if(se&&(pe=Ah[pe]),me!==pe){switch(pe){case Sa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=pe}},setLocked:function(pe){D=pe},setClear:function(pe){he!==pe&&(he=pe,se&&(pe=1-pe),i.clearDepth(pe))},reset:function(){D=!1,ee=null,me=null,he=null,se=!1}}}function s(){let D=!1,se=null,ee=null,me=null,he=null,pe=null,De=null,qe=null,ce=null;return{setTest:function(Ue){D||(Ue?T(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Ue){se!==Ue&&!D&&(i.stencilMask(Ue),se=Ue)},setFunc:function(Ue,Ge,Me){(ee!==Ue||me!==Ge||he!==Me)&&(i.stencilFunc(Ue,Ge,Me),ee=Ue,me=Ge,he=Me)},setOp:function(Ue,Ge,Me){(pe!==Ue||De!==Ge||qe!==Me)&&(i.stencilOp(Ue,Ge,Me),pe=Ue,De=Ge,qe=Me)},setLocked:function(Ue){D=Ue},setClear:function(Ue){ce!==Ue&&(i.clearStencil(Ue),ce=Ue)},reset:function(){D=!1,se=null,ee=null,me=null,he=null,pe=null,De=null,qe=null,ce=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},p={},u={},d=new WeakMap,f=[],x=null,m=!1,g=null,y=null,b=null,E=null,A=null,w=null,v=null,S=new Ne(0,0,0),N=0,P=!1,L=null,H=null,X=null,I=null,q=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=Y>=2);let K=null,ne={},ye=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Q=new dt().fromArray(ye),ue=new dt().fromArray(Ie);function Ee(D,se,ee,me){let he=new Uint8Array(4),pe=i.createTexture();i.bindTexture(D,pe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ee;De++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(se+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return pe}let Pe={};Pe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),T(i.DEPTH_TEST),a.setFunc(os),Xt(!1),ft(Yl),T(i.CULL_FACE),pt(Ni);function T(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Z(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function z(D,se){return u[D]!==se?(i.bindFramebuffer(D,se),u[D]=se,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function U(D,se){let ee=f,me=!1;if(D){ee=d.get(se),ee===void 0&&(ee=[],d.set(se,ee));let he=D.textures;if(ee.length!==he.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,De=he.length;pe<De;pe++)ee[pe]=i.COLOR_ATTACHMENT0+pe;ee.length=he.length,me=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,me=!0);me&&i.drawBuffers(ee)}function ae(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let oe={[Ui]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};oe[Ju]=i.MIN,oe[Ku]=i.MAX;let Ae={[Qu]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(D,se,ee,me,he,pe,De,qe,ce,Ue){if(D===Ni){m===!0&&(Z(i.BLEND),m=!1);return}if(m===!1&&(T(i.BLEND),m=!0),D!==Yu){if(D!==g||Ue!==P){if((y!==Ui||A!==Ui)&&(i.blendEquation(i.FUNC_ADD),y=Ui,A=Ui),Ue)switch(D){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ln:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Be("WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",D);break}b=null,E=null,w=null,v=null,S.set(0,0,0),N=0,g=D,P=Ue}return}he=he||se,pe=pe||ee,De=De||me,(se!==y||he!==A)&&(i.blendEquationSeparate(oe[se],oe[he]),y=se,A=he),(ee!==b||me!==E||pe!==w||De!==v)&&(i.blendFuncSeparate(Ae[ee],Ae[me],Ae[pe],Ae[De]),b=ee,E=me,w=pe,v=De),(qe.equals(S)===!1||ce!==N)&&(i.blendColor(qe.r,qe.g,qe.b,ce),S.copy(qe),N=ce),g=D,P=!1}function vt(D,se){D.side===Ft?Z(i.CULL_FACE):T(i.CULL_FACE);let ee=D.side===Mt;se&&(ee=!ee),Xt(ee),D.blending===Ss&&D.transparent===!1?pt(Ni):pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?T(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function ft(D){D!==Wu?(T(i.CULL_FACE),D!==H&&(D===Yl?i.cullFace(i.BACK):D===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),H=D}function wn(D){D!==X&&(O&&i.lineWidth(D),X=D)}function At(D,se,ee){D?(T(i.POLYGON_OFFSET_FILL),(I!==se||q!==ee)&&(I=se,q=ee,a.getReversed()&&(se=-se,ee=-ee),i.polygonOffset(se,ee))):Z(i.POLYGON_OFFSET_FILL)}function on(D){D?T(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function ln(D){D===void 0&&(D=i.TEXTURE0+k-1),K!==D&&(i.activeTexture(D),K=D)}function cn(D,se,ee){ee===void 0&&(K===null?ee=i.TEXTURE0+k-1:ee=K);let me=ne[ee];me===void 0&&(me={type:void 0,texture:void 0},ne[ee]=me),(me.type!==D||me.texture!==se)&&(K!==ee&&(i.activeTexture(ee),K=ee),i.bindTexture(D,se||Pe[D]),me.type=D,me.texture=se)}function B(){let D=ne[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function un(){try{i.compressedTexImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function ut(){try{i.texSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function _e(){try{i.texSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function bt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function ke(){try{i.texStorage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function C(){try{i.texStorage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function _(){try{i.texImage2D(...arguments)}catch(D){Be("WebGLState:",D)}}function W(){try{i.texImage3D(...arguments)}catch(D){Be("WebGLState:",D)}}function le(D){return p[D]!==void 0?p[D]:i.getParameter(D)}function re(D,se){p[D]!==se&&(i.pixelStorei(D,se),p[D]=se)}function de(D){Q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function ve(D){ue.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function te(D,se){let ee=c.get(se);ee===void 0&&(ee=new WeakMap,c.set(se,ee));let me=ee.get(D);me===void 0&&(me=i.getUniformBlockIndex(se,D.name),i.uniformBlockBinding(se,me,me),ee.set(D,me))}function ie(D,se,ee){let he=c.get(se).get(D);l[he]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,ee),l[he]=ee)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},K=null,ne={},u={},l={},d=new WeakMap,f=[],x=null,m=!1,g=null,y=null,b=null,E=null,A=null,w=null,v=null,S=new Ne(0,0,0),N=0,P=!1,L=null,H=null,X=null,I=null,q=null,Q.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:T,disable:Z,bindFramebuffer:z,drawBuffers:U,useProgram:ae,setBlending:pt,setMaterial:vt,setFlipSided:Xt,setCullFace:ft,setLineWidth:wn,setPolygonOffset:At,setScissorTest:on,activeTexture:ln,bindTexture:cn,unbindTexture:B,compressedTexImage2D:un,compressedTexImage3D:ct,texImage2D:_,texImage3D:W,pixelStorei:re,getParameter:le,updateUBOMapping:te,uniformBlockBinding:ie,texStorage2D:ke,texStorage3D:C,texSubImage2D:ut,texSubImage3D:_e,compressedTexSubImage2D:bt,compressedTexSubImage3D:Oe,scissor:de,viewport:ve,reset:fe}}function Iv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap,p=new Set,u,d=new WeakMap,f=new Set,x=new FinalizationRegistry(C=>f.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return m?new OffscreenCanvas(C,_):Qs("canvas")}function y(C,_,W){let le=1,re=ke(C);if((re.width>W||re.height>W)&&(le=W/Math.max(re.width,re.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(le*re.width),ve=Math.floor(le*re.height);u===void 0&&(u=g(de,ve));let te=_?g(de,ve):u;return te.width=de,te.height=ve,te.getContext("2d").drawImage(C,0,0,de,ve),Fe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+ve+")."),te}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function b(C){return C.generateMipmaps}function E(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,_,W,le,re,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;le&&(ve=e.get("EXT_texture_norm16"),ve||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=_;if(_===i.RED&&(W===i.FLOAT&&(te=i.R32F),W===i.HALF_FLOAT&&(te=i.R16F),W===i.UNSIGNED_BYTE&&(te=i.R8),W===i.UNSIGNED_SHORT&&ve&&(te=ve.R16_EXT),W===i.SHORT&&ve&&(te=ve.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.R8UI),W===i.UNSIGNED_SHORT&&(te=i.R16UI),W===i.UNSIGNED_INT&&(te=i.R32UI),W===i.BYTE&&(te=i.R8I),W===i.SHORT&&(te=i.R16I),W===i.INT&&(te=i.R32I)),_===i.RG&&(W===i.FLOAT&&(te=i.RG32F),W===i.HALF_FLOAT&&(te=i.RG16F),W===i.UNSIGNED_BYTE&&(te=i.RG8),W===i.UNSIGNED_SHORT&&ve&&(te=ve.RG16_EXT),W===i.SHORT&&ve&&(te=ve.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RG8UI),W===i.UNSIGNED_SHORT&&(te=i.RG16UI),W===i.UNSIGNED_INT&&(te=i.RG32UI),W===i.BYTE&&(te=i.RG8I),W===i.SHORT&&(te=i.RG16I),W===i.INT&&(te=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGB8UI),W===i.UNSIGNED_SHORT&&(te=i.RGB16UI),W===i.UNSIGNED_INT&&(te=i.RGB32UI),W===i.BYTE&&(te=i.RGB8I),W===i.SHORT&&(te=i.RGB16I),W===i.INT&&(te=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),W===i.UNSIGNED_INT&&(te=i.RGBA32UI),W===i.BYTE&&(te=i.RGBA8I),W===i.SHORT&&(te=i.RGBA16I),W===i.INT&&(te=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&ve&&(te=ve.RGB16_EXT),W===i.SHORT&&ve&&(te=ve.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),_===i.RGBA){let ie=de?Ks:Ye.getTransfer(re);W===i.FLOAT&&(te=i.RGBA32F),W===i.HALF_FLOAT&&(te=i.RGBA16F),W===i.UNSIGNED_BYTE&&(te=ie===nt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ve&&(te=ve.RGBA16_EXT),W===i.SHORT&&ve&&(te=ve.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(C,_){let W;return C?_===null||_===bn||_===Bi?W=i.DEPTH24_STENCIL8:_===mn?W=i.DEPTH32F_STENCIL8:_===ws&&(W=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bn||_===Bi?W=i.DEPTH_COMPONENT24:_===mn?W=i.DEPTH_COMPONENT32F:_===ws&&(W=i.DEPTH_COMPONENT16),W}function S(C,_){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==xt&&C.minFilter!==Lt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function N(C){let _=new WeakRef(C);n.get(C).__ref=_,f.add(_),x.register(C,_,_)}function P(C){let _=n.get(C).__ref;_!==void 0&&(f.delete(_),x.unregister(_))}function L(C){X(C.target)}function H(C){I(C.target)}function X(C){C.removeEventListener("dispose",L),P(C),k(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&p.delete(C)}function I(C){C.removeEventListener("dispose",H),P(C),Y(C)}function q(){for(let C of f){let _=C.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):X(_))}f.clear(),p.clear()}function k(C){let _=n.get(C);if(_.__webglInit===void 0)return;let W=C.source,le=d.get(W);if(le){let re=le[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(C),Object.keys(le).length===0&&d.delete(W)}n.remove(C)}function O(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let W=C.source,le=d.get(W);delete le[_.__cacheKey],a.memory.textures--}function Y(C){let _=n.get(C);_.__depthDisposeCallback&&_.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&X(W),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(_.__webglFramebuffer[re]))for(let de=0;de<_.__webglFramebuffer[re].length;de++)i.deleteFramebuffer(_.__webglFramebuffer[re][de]);else i.deleteFramebuffer(_.__webglFramebuffer[re]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[re])}else{if(Array.isArray(_.__webglFramebuffer))for(let re=0;re<_.__webglFramebuffer.length;re++)i.deleteFramebuffer(_.__webglFramebuffer[re]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let re=0;re<_.__webglColorRenderbuffer.length;re++)_.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[re]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let le=C.textures;for(let re=0,de=le.length;re<de;re++){let ve=n.get(le[re]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(le[re])}n.remove(C)}let G=0;function K(){G=0}function ne(){return G}function ye(C){G=C}function Ie(){let C=G;return C>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,C}function Q(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.mipmapsAutoUpdate),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function ue(C,_){let W=n.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let le=C.image;if(le===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(W,C,_);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function Ee(C,_){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){vt(W,C,_);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function Pe(C,_){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){vt(W,C,_);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function T(C,_){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Xt(W,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}let Z={[Pa]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},z={[xt]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},U={[xh]:i.NEVER,[fc]:i.ALWAYS,[yh]:i.LESS,[dc]:i.LEQUAL,[_h]:i.EQUAL,[pc]:i.GEQUAL,[bh]:i.GREATER,[Mh]:i.NOTEQUAL};function ae(C,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Lt||_.magFilter===uo||_.magFilter===Ar||_.magFilter===Yn||_.minFilter===Lt||_.minFilter===uo||_.minFilter===Ar||_.minFilter===Yn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Z[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,z[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,z[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,U[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===xt||_.minFilter!==Ar&&_.minFilter!==Yn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(C,_){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",L),N(_));let le=_.source,re=d.get(le);re===void 0&&(re={},d.set(le,re));let de=Q(_);if(de!==C.__cacheKey){re[de]===void 0&&(re[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),re[de].usedTimes++;let ve=re[C.__cacheKey];ve!==void 0&&(re[C.__cacheKey].usedTimes--,ve.usedTimes===0&&O(_)),C.__cacheKey=de,C.__webglTexture=re[de].texture}return W}function Ae(C,_,W){return Math.floor(Math.floor(C/W)/_)}function pt(C,_,W,le){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,le,_.data);else{de.sort((D,se)=>D.start-se.start);let ve=0;for(let D=1;D<de.length;D++){let se=de[ve],ee=de[D],me=se.start+se.count,he=Ae(ee.start,_.width,4),pe=Ae(se.start,_.width,4);ee.start<=me+1&&he===pe&&Ae(ee.start+ee.count-1,_.width,4)===he?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++ve,de[ve]=ee)}de.length=ve+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let D=0,se=de.length;D<se;D++){let ee=de[D],me=Math.floor(ee.start/4),he=Math.ceil(ee.count/4),pe=me%_.width,De=Math.floor(me/_.width),qe=he,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,pe,De,qe,ce,W,le,_.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function vt(C,_,W){let le=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(le=i.TEXTURE_3D);let re=oe(C,_),de=_.source;t.bindTexture(le,C.__webglTexture,i.TEXTURE0+W);let ve=n.get(de);if(de.version!==ve.__version||re===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ce=Ye.getPrimaries(Ye.workingColorSpace),Ue=_.colorSpace===jn?null:Ye.getPrimaries(_.colorSpace),Ge=_.colorSpace===jn||ce===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=y(_.image,!1,s.maxTextureSize);ie=Oe(_,ie);let fe=r.convert(_.format,_.colorSpace),D=r.convert(_.type),se=w(_.internalFormat,fe,D,_.normalized,_.colorSpace,_.isVideoTexture);ae(le,_);let ee,me=_.mipmaps,he=_.isVideoTexture!==!0,pe=ve.__version===void 0||re===!0,De=de.dataReady,qe=S(_,ie);if(_.isDepthTexture)se=v(_.format===Zn,_.type),pe&&(he?t.texStorage2D(i.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,fe,D,null));else if(_.isDataTexture)if(me.length>0){he&&pe&&t.texStorage2D(i.TEXTURE_2D,qe,se,me[0].width,me[0].height);for(let ce=0,Ue=me.length;ce<Ue;ce++)ee=me[ce],he?De&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ee.width,ee.height,fe,D,ee.data):t.texImage2D(i.TEXTURE_2D,ce,se,ee.width,ee.height,0,fe,D,ee.data);_.generateMipmaps=!1}else he?(pe&&t.texStorage2D(i.TEXTURE_2D,qe,se,ie.width,ie.height),De&&pt(_,ie,fe,D)):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,fe,D,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){he&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,se,me[0].width,me[0].height,ie.depth);for(let ce=0,Ue=me.length;ce<Ue;ce++)if(ee=me[ce],_.format!==rn)if(fe!==null)if(he){if(De)if(_.layerUpdates.size>0){let Ge=Ac(ee.width,ee.height,_.format,_.type);for(let Me of _.layerUpdates){let it=ee.data.subarray(Me*Ge/ee.data.BYTES_PER_ELEMENT,(Me+1)*Ge/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Me,ee.width,ee.height,1,fe,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ee.width,ee.height,ie.depth,fe,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,se,ee.width,ee.height,ie.depth,0,ee.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ee.width,ee.height,ie.depth,fe,D,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,se,ee.width,ee.height,ie.depth,0,fe,D,ee.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{he&&pe&&t.texStorage2D(i.TEXTURE_2D,qe,se,me[0].width,me[0].height);for(let ce=0,Ue=me.length;ce<Ue;ce++)ee=me[ce],_.format!==rn?fe!==null?he?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ee.width,ee.height,fe,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,se,ee.width,ee.height,0,ee.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?De&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ee.width,ee.height,fe,D,ee.data):t.texImage2D(i.TEXTURE_2D,ce,se,ee.width,ee.height,0,fe,D,ee.data)}else if(_.isDataArrayTexture)if(he){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,se,ie.width,ie.height,ie.depth),De)if(_.layerUpdates.size>0){let ce=Ac(ie.width,ie.height,_.format,_.type);for(let Ue of _.layerUpdates){let Ge=ie.data.subarray(Ue*ce/ie.data.BYTES_PER_ELEMENT,(Ue+1)*ce/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,ie.width,ie.height,1,fe,D,Ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,D,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,fe,D,ie.data);else if(_.isData3DTexture)he?(pe&&t.texStorage3D(i.TEXTURE_3D,qe,se,ie.width,ie.height,ie.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,D,ie.data)):t.texImage3D(i.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,fe,D,ie.data);else if(_.isFramebufferTexture){if(pe)if(he)t.texStorage2D(i.TEXTURE_2D,qe,se,ie.width,ie.height);else{let ce=ie.width,Ue=ie.height;for(let Ge=0;Ge<qe;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,se,ce,Ue,0,fe,D,null),ce>>=1,Ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ie.parentNode!==ce){ce.appendChild(ie),p.add(_),ce.onpaint=Ue=>{let Ge=Ue.changedElements;for(let Me of p)Ge.includes(Me.image)&&(Me.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Ge=i.RGBA,Me=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,Me,it,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(me.length>0){if(he&&pe){let ce=ke(me[0]);t.texStorage2D(i.TEXTURE_2D,qe,se,ce.width,ce.height)}for(let ce=0,Ue=me.length;ce<Ue;ce++)ee=me[ce],he?De&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,fe,D,ee):t.texImage2D(i.TEXTURE_2D,ce,se,fe,D,ee);_.generateMipmaps=!1}else if(he){if(pe){let ce=ke(ie);t.texStorage2D(i.TEXTURE_2D,qe,se,ce.width,ce.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,D,ie)}else t.texImage2D(i.TEXTURE_2D,0,se,fe,D,ie);b(_)&&_.mipmapsAutoUpdate===!0&&E(le),ve.__version=de.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Xt(C,_,W){if(_.image.length!==6)return;let le=oe(C,_),re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let de=n.get(re);if(re.version!==de.__version||le===!0){t.activeTexture(i.TEXTURE0+W);let ve=Ye.getPrimaries(Ye.workingColorSpace),te=_.colorSpace===jn?null:Ye.getPrimaries(_.colorSpace),ie=_.colorSpace===jn||ve===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,D=_.image[0]&&_.image[0].isDataTexture,se=[];for(let Me=0;Me<6;Me++)!fe&&!D?se[Me]=y(_.image[Me],!0,s.maxCubemapSize):se[Me]=D?_.image[Me].image:_.image[Me],se[Me]=Oe(_,se[Me]);let ee=se[0],me=r.convert(_.format,_.colorSpace),he=r.convert(_.type),pe=w(_.internalFormat,me,he,_.normalized,_.colorSpace),De=_.isVideoTexture!==!0,qe=de.__version===void 0||le===!0,ce=re.dataReady,Ue=S(_,ee);ae(i.TEXTURE_CUBE_MAP,_);let Ge;if(_.isDepthTexture){if(pe=v(_.format===Zn,_.type),qe)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,ee.width,ee.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,ee.width,ee.height,0,me,he,null)}else if(fe){De&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,pe,ee.width,ee.height);for(let Me=0;Me<6;Me++){Ge=se[Me].mipmaps;for(let it=0;it<Ge.length;it++){let Tt=Ge[it];_.format!==rn?me!==null?De?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it,0,0,Tt.width,Tt.height,me,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it,pe,Tt.width,Tt.height,0,Tt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it,0,0,Tt.width,Tt.height,me,he,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it,pe,Tt.width,Tt.height,0,me,he,Tt.data)}}}else{if(Ge=_.mipmaps,De&&qe){Ge.length>0&&Ue++;let Me=ke(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,pe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(D){De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,se[Me].width,se[Me].height,me,he,se[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,se[Me].width,se[Me].height,0,me,he,se[Me].data);for(let it=0;it<Ge.length;it++){let ei=Ge[it].image[Me].image;De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it+1,0,0,ei.width,ei.height,me,he,ei.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it+1,pe,ei.width,ei.height,0,me,he,ei.data)}}else{De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me,he,se[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,me,he,se[Me]);for(let it=0;it<Ge.length;it++){let Tt=Ge[it];De?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it+1,0,0,me,he,Tt.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,it+1,pe,me,he,Tt.image[Me])}}}b(_)&&_.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),de.__version=re.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ft(C,_,W,le,re,de){let ve=r.convert(W.format,W.colorSpace),te=r.convert(W.type),ie=w(W.internalFormat,ve,te,W.normalized,W.colorSpace),fe=n.get(_),D=n.get(W);if(D.__renderTarget=_,!fe.__hasExternalTextures){let se=Math.max(1,_.width>>de),ee=Math.max(1,_.height>>de);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,de,ie,se,ee,_.depth,0,ve,te,null):t.texImage2D(re,de,ie,se,ee,0,ve,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,re,D.__webglTexture,0,ut(_)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,re,D.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function wn(C,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let le=_.depthTexture,re=le&&le.isDepthTexture?le.type:null,de=v(_.stencilBuffer,re),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(_),de,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(_),de,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,de,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,C)}else{let le=_.textures;for(let re=0;re<le.length;re++){let de=le[re],ve=r.convert(de.format,de.colorSpace),te=r.convert(de.type),ie=w(de.internalFormat,ve,te,de.normalized,de.colorSpace);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(_),ie,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(C,_,W){let le=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(_.depthTexture);re.__renderTarget=_;let de=le?_.depthTexture.image[0]:_.depthTexture.image;(!re.__webglTexture||de.width!==_.width||de.height!==_.height)&&(de.width=_.width,de.height=_.height,_.depthTexture.needsUpdate=!0),le?T(_.depthTexture,0):ue(_.depthTexture,0);let ve=re.__webglTexture,te=ut(_),ie=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,fe=_.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===qn)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ie,ve,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ie,ve,0);else if(_.depthTexture.format===Zn)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ie,ve,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ie,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(C){let _=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let le=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),le){let re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,le.removeEventListener("dispose",re)};le.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=le}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let le=0;le<6;le++)At(_.__webglFramebuffer[le],C,le);else C.texture.mipmaps.length>0?At(_.__webglFramebuffer[0],C,0):At(_.__webglFramebuffer,C,0);else if(W){_.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[le]),_.__webglDepthbuffer[le]===void 0)_.__webglDepthbuffer[le]=i.createRenderbuffer(),wn(_.__webglDepthbuffer[le],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),wn(_.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ln(C,_,W){let le=n.get(C);_!==void 0&&ft(le.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&on(C)}function cn(C){let _=C.texture,W=n.get(C),le=n.get(_);C.addEventListener("dispose",H),N(C);let re=C.textures,de=C.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=_.version,a.memory.textures++),de){W.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps.length>0){W.__webglFramebuffer[te]=[];for(let ie=0;ie<_.mipmaps.length;ie++)W.__webglFramebuffer[te][ie]=i.createFramebuffer()}else W.__webglFramebuffer[te]=i.createFramebuffer()}else{if(_.mipmaps.length>0){W.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)W.__webglFramebuffer[te]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ve)for(let te=0,ie=re.length;te<ie;te++){let fe=n.get(re[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&_e(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let te=0;te<re.length;te++){let ie=re[te];W.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[te]);let fe=r.convert(ie.format,ie.colorSpace),D=r.convert(ie.type),se=w(ie.internalFormat,fe,D,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),ee=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,W.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),wn(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),ae(i.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)ft(W.__webglFramebuffer[te][ie],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else ft(W.__webglFramebuffer[te],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);b(_)?E(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let te=0,ie=re.length;te<ie;te++){let fe=re[te],D=n.get(fe),se=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,D.__webglTexture),ae(se,fe),ft(W.__webglFramebuffer,C,fe,i.COLOR_ATTACHMENT0+te,se,0),b(fe)&&E(se)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,le.__webglTexture),ae(te,_),_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)ft(W.__webglFramebuffer[ie],C,_,i.COLOR_ATTACHMENT0,te,ie);else ft(W.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,te,0);b(_)?E(te):_.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&on(C)}function B(C){let _=C.textures;for(let W=0,le=_.length;W<le;W++){let re=_[W];if(b(re)&&re.mipmapsAutoUpdate===!0){let de=A(C),ve=n.get(re).__webglTexture;t.bindTexture(de,ve),E(de),t.unbindTexture()}}}let un=[];function ct(C){if(C.samples>0){if(_e(C)===!1){let _=C.textures,W=C.width,le=C.height,re=i.COLOR_BUFFER_BIT,de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),te=_.length>1;if(te)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);let D=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,W,le,0,0,W,le,re,i.NEAREST),l===!0&&(un.length=0,un.push(i.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&un.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,un))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);let D=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ut(C){return Math.min(s.maxSamples,C.samples)}function _e(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Oe(C,_){let W=C.colorSpace,le=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Js&&W!==jn&&(Ye.getTransfer(W)===nt?(le!==rn||re!==Ht)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",W)),_}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=K,this.getTextureUnits=ne,this.setTextureUnits=ye,this.setTexture2D=ue,this.setTexture2DArray=Ee,this.setTexture3D=Pe,this.setTextureCube=T,this.rebindTextures=ln,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=_e,this.dispose=q}function Lv(i,e){function t(n,s=jn){let r,a=Ye.getTransfer(s);if(n===Ht)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ac)return i.BYTE;if(n===oc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===uc)return i.ALPHA;if(n===hc)return i.RGB;if(n===rn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===mo)return i.RED;if(n===go)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===Tr||n===Cr||n===Rr||n===Pr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===_o||n===bo||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===Eo||n===wo||n===Ao||n===To||n===Ir||n===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===Eo)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===qo||n===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Xo||n===Lr||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Fv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Sc(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,b,E){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),p(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,E)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,E=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ov(i,e,t,n){let s={},r={};function a(y,b){let E=b.program;n.uniformBlockBinding(y,E,s[y.id])}function o(y,b){let E=s[y.id];E===void 0&&(f(y),E=l(y),s[y.id]=E,y.addEventListener("dispose",m));let A=b.program;n.updateUBOMapping(y,A);let w=e.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let b=i.createBuffer(),E=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],E=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,v=E.length;w<v;w++){let S=E[w];if(Array.isArray(S))for(let N=0,P=S.length;N<P;N++)h(S[N],w,N,A);else h(S,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,b,E,A){if(u(y,b,E,A)===!0){let w=y.__offset,v=y.value;if(Array.isArray(v)){let S=0;for(let N=0;N<v.length;N++){let P=v[N],L=x(P,!0);p(P,y.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function p(y,b,E){typeof y=="number"||typeof y=="boolean"?b[E]=y:y.isMatrix3?(b[E]=y.elements[0],b[E+1]=y.elements[1],b[E+2]=y.elements[2],b[E+3]=0,b[E+4]=y.elements[3],b[E+5]=y.elements[4],b[E+6]=y.elements[5],b[E+7]=0,b[E+8]=y.elements[6],b[E+9]=y.elements[7],b[E+10]=y.elements[8],b[E+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-E),E):y.toArray(b,E)}function u(y,b,E,A){let w=y.value,v=b+"_"+E;if(Array.isArray(w)){A[v]===void 0&&(A[v]=[]);let S=A[v],N=!1;for(let P=0;P<w.length;P++)d(w[P],S,P)===!0&&(N=!0);return N}return d(w,A,v)}function d(y,b,E){if(b[E]===void 0)return typeof y=="number"||typeof y=="boolean"?b[E]=y:ArrayBuffer.isView(y)?b[E]=y.slice():b[E]=y.clone(),!0;{let A=b[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return b[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function f(y){let b=y.uniforms,E=0,A=16;for(let v=0,S=b.length;v<S;v++){let N=Array.isArray(b[v])?b[v]:[b[v]];for(let P=0,L=N.length;P<L;P++){let H=N[P],X=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(b[v])||Array.isArray(H.value),q=E;for(let O=0,Y=X.length;O<Y;O++){let G=X[O],K=x(G,I),ne=E%A,ye=ne%K.boundary,Ie=ne+ye;E+=ye,Ie!==0&&A-Ie<K.storage&&(E+=A-Ie),O===0&&(q=E),E+=K.storage}let k=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new k((E-q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=q}}let w=E%A;return w>0&&(E+=A-w),y.__size=E,y.__cache={},this}function x(y,b){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(y){let b=y.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}function zv(){return Nn===null&&(Nn=new Ri(Bv,16,16,yi,Mn),Nn.name="DFG_LUT",Nn.minFilter=Lt,Nn.magFilter=Lt,Nn.wrapS=Cn,Nn.wrapT=Cn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var tf,nf,sf,rf,af,of,lf,cf,uf,hf,df,pf,ff,mf,gf,vf,xf,yf,_f,bf,Mf,Sf,Ef,wf,Af,Tf,Cf,Rf,Pf,If,Lf,Df,Nf,Uf,Ff,Of,Bf,zf,kf,Hf,Gf,Vf,qf,Wf,$f,Xf,Yf,Zf,jf,Jf,Kf,Qf,em,tm,nm,im,sm,rm,am,om,lm,cm,um,hm,dm,pm,fm,mm,gm,vm,xm,ym,_m,bm,Mm,Sm,Em,wm,Am,Tm,Cm,Rm,Pm,Im,Lm,Dm,Nm,Um,Fm,Om,Bm,zm,km,Hm,Gm,Vm,qm,Wm,$m,Xm,Ym,Zm,jm,Jm,Km,Qm,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,ug,hg,dg,pg,fg,mg,gg,vg,xg,yg,_g,bg,Mg,Sg,Eg,wg,Ag,Tg,Cg,Rg,Pg,Ig,Lg,Dg,Ng,We,Se,Un,jo,Ug,ed,Fr,Lh,Hg,Gg,td,nd,Vg,qg,Wg,Ts,n0,id,sd,rd,ad,od,ld,Fh,Oh,Bh,zh,kh,Pc,Ic,Lc,Cc,As,W0,$0,Vh,j0,Jo,nv,sv,av,lv,uv,pv,Nc,Uc,bv,wv,Av,Tv,Cv,Kh,Nr,Rc,Dv,Nv,Fc,Oc,Uv,cd,Bv,Nn,Cs,Ps=jt(()=>{Tc();Tc();tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:tf,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:uf,batching_vertex:hf,begin_vertex:df,beginnormal_vertex:pf,bsdfs:ff,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:_f,color_fragment:bf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:Ef,common:wf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Tf,displacementmap_vertex:Cf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Pf,colorspace_fragment:If,colorspace_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Uf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Xf,envmap_vertex:Of,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Vf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Wf,lights_pars_begin:$f,lights_toon_fragment:Yf,lights_toon_pars_fragment:Zf,lights_phong_fragment:jf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Qf,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:um,map_particle_pars_fragment:hm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:pm,morphinstance_vertex:fm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:vm,morphtarget_vertex:xm,normal_fragment_begin:ym,normal_fragment_maps:_m,normal_pars_fragment:bm,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Cm,opaque_fragment:Rm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Hm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:qm,specularmap_fragment:Wm,specularmap_pars_fragment:$m,tonemapping_fragment:Xm,tonemapping_pars_fragment:Ym,transmission_fragment:Zm,transmission_pars_fragment:jm,uv_pars_fragment:Jm,uv_pars_vertex:Km,uv_vertex:Qm,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:lg,distance_vert:cg,distance_frag:ug,equirect_vert:hg,equirect_frag:dg,linedashed_vert:pg,linedashed_frag:fg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:vg,meshlambert_frag:xg,meshmatcap_vert:yg,meshmatcap_frag:_g,meshnormal_vert:bg,meshnormal_frag:Mg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:wg,meshphysical_frag:Ag,meshtoon_vert:Tg,meshtoon_frag:Cg,points_vert:Rg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},Se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Un={basic:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Gt([Se.common,Se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Gt([Se.lights,Se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Un.physical={uniforms:Gt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};jo={r:0,b:0,g:0},Ug=new Ke,ed=new ze;ed.set(-1,0,0,0,1,0,0,0,1);Fr=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new In(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:Ni});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Lt),new _s(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Lh=256,Hg=3,Gg=20,td=256,nd=16,Vg=3,qg=new R,Wg=new Ne,Ts=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _s(1,10,null),this._boxMesh=new je(new In(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=qg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Wg));let m=new _s(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=f,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lh,xc(e))}_fromTexture(e,t){e.mapping===Oi||e.mapping===Es?this._setSize(e.image.length===0?Lh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Dh(e,!1,!1),n=Math.log2(e)-Hg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Dh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Oi||e.mapping===Es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$g(),this._integrationMaterial=Xg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/nd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Vg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(td*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};n0={[Ql]:"LINEAR_TONE_MAPPING",[ec]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[Fi]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};id=new $t,sd=new Xn(1,1),rd=new cr(1),ad=new tr,od=new Ua,ld=new lr,Fh=[],Oh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}},Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);q0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};W0=37297,$0=0;Vh=new ze;j0={[Ql]:"Linear",[ec]:"Reinhard",[tc]:"Cineon",[Fi]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};Jo=new R;nv=/^[ \t]*#include +<([\w\d./]+)>/gm;sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;av={[wr]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};lv={[Es]:"ENVMAP_MODE_REFRACTION"};uv={[oo]:"ENVMAP_BLENDING_MULTIPLY",[dh]:"ENVMAP_BLENDING_MIX",[ph]:"ENVMAP_BLENDING_ADD"};pv=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}};bv=0;wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Cv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Kh=new Ke,Nr=new R,Rc=new R;Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ut({vertexShader:Dv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends _n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,f=null,x=typeof XRWebGLBinding<"u",m=new Fc,g={},y=t.getContextAttributes(),b=null,E=null,A=[],w=[],v=new be,S=null,N=null,P=new It;P.viewport=new dt;let L=new It;L.viewport=new dt;let H=[P,L],X=new ao,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=A[Q];return ue===void 0&&(ue=new ps,A[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=A[Q];return ue===void 0&&(ue=new ps,A[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=A[Q];return ue===void 0&&(ue=new ps,A[Q]=ue),ue.getHandSpace()};function k(Q){let ue=w.indexOf(Q.inputSource);if(ue===-1)return;let Ee=A[ue];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||a),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<A.length;Q++){let ue=w[Q];ue!==null&&(w[Q]=null,A[Q].disconnect(ue))}I=null,q=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(b),d=null,u=null,p=null,s=null,E=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),N!==null){let Q=N.camera;Q.fov=N.fov,Q.zoom=N.zoom,Q.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Pe=null,T=null;y.depth&&(T=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?Zn:qn,Pe=y.stencil?Bi:bn);let Z={colorFormat:t.RGBA8,depthFormat:T,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Z),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new en(u.textureWidth,u.textureHeight,{format:rn,type:Ht,depthTexture:new Xn(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new en(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Q){for(let ue=0;ue<Q.removed.length;ue++){let Ee=Q.removed[ue],Pe=w.indexOf(Ee);Pe>=0&&(w[Pe]=null,A[Pe].disconnect(Ee))}for(let ue=0;ue<Q.added.length;ue++){let Ee=Q.added[ue],Pe=w.indexOf(Ee);if(Pe===-1){for(let Z=0;Z<A.length;Z++)if(Z>=w.length){w.push(Ee),Pe=Z;break}else if(w[Z]===null){w[Z]=Ee,Pe=Z;break}if(Pe===-1)break}let T=A[Pe];T&&T.connect(Ee)}}function G(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,Ee=Q.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),X.near=L.near=P.near=ue,X.far=L.far=P.far=Ee,(I!==X.near||q!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,q=X.far),X.layers.mask=Q.layers.mask|6,P.layers.mask=X.layers.mask&-5,L.layers.mask=X.layers.mask&-3;let Pe=Q.parent,T=X.cameras;G(X,Pe);for(let Z=0;Z<T.length;Z++)G(T[Z],Pe);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Q.isPerspectiveCamera&&(N={camera:Q,fov:Q.fov,zoom:Q.zoom}),K(Q,X,Pe)};function K(Q,ue,Ee){Ee===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=us*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(Q){return g[Q]};let ne=null;function ye(Q,ue){if(h=ue.getViewerPose(c||a),f=ue,h!==null){let Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let Pe=!1;Ee.length!==X.cameras.length&&(X.cameras.length=0,Pe=!0);for(let U=0;U<Ee.length;U++){let ae=Ee[U],oe=null;if(d!==null)oe=d.getViewport(ae);else{let pt=p.getViewSubImage(u,ae);oe=pt.viewport,U===0&&(e.setRenderTargetTextures(E,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(E))}let Ae=H[U];Ae===void 0&&(Ae=new It,Ae.layers.enable(U),Ae.viewport=new dt,H[U]=Ae),Ae.matrix.fromArray(ae.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ae.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(oe.x,oe.y,oe.width,oe.height),U===0&&(X.matrix.copy(Ae.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Pe===!0&&X.cameras.push(Ae)}let T=s.enabledFeatures;if(T&&T.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let U=p.getDepthInformation(Ee[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(T&&T.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let U=0;U<Ee.length;U++){let ae=Ee[U].camera;if(ae){let oe=g[ae];oe||(oe=new ur,g[ae]=oe);let Ae=p.getCameraImage(ae);oe.sourceTexture=Ae}}}}for(let Ee=0;Ee<A.length;Ee++){let Pe=w[Ee],T=A[Ee];Pe!==null&&T!==void 0&&T.update(Pe,ue,c||a)}ne&&ne(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),f=null}let Ie=new Qh;Ie.setAnimationLoop(ye),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}},Uv=new Ke,cd=new ze;cd.set(-1,0,0,0,1,0,0,0,1);Bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;Cs=class{constructor(e={}){let{canvas:t=Sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ht}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=d,m=new Set([xo,vo,go]),g=new Set([Ht,bn,ws,Bi,po,fo]),y=new Uint32Array(4),b=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},A=null,w=null,v=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,H=null,X=null,I=null,q=null;this._outputColorSpace=Pt;let k=0,O=0,Y=null,G=-1,K=null,ne=new dt,ye=new dt,Ie=null,Q=new Ne(0),ue=0,Ee=t.width,Pe=t.height,T=1,Z=null,z=null,U=new dt(0,0,Ee,Pe),ae=new dt(0,0,Ee,Pe),oe=!1,Ae=new ci,pt=new Oa,vt=!1,Xt=!1,ft=new Ke,wn=new R,At=new dt,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ln=!1;function cn(){return Y===null?T:1}let B=n;function un(M,F){return t.getContext(M,F)}let ct,ut,_e,bt,Oe,ke,C,_,W,le,re,de,ve,te,ie,fe,D,se,ee,me,he,pe,De;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){let F="webgl2";if(B=un(F,M),B===null)throw un(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(M){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Be("WebGLRenderer: "+M.message),M}function qe(){ct=new jg(B),ct.init(),he=new Lv(B,ct),ut=new zg(B,ct,e,he),_e=new Pv(B,ct),ut.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),X=B.createFramebuffer(),I=B.createFramebuffer(),q=B.createFramebuffer(),bt=new Qg(B),Oe=new gv,ke=new Iv(B,ct,_e,Oe,ut,he,bt),C=new Zg(P),_=new ef(B),pe=new Og(B,_),W=new Jg(B,_,bt,pe),le=new t0(B,W,_,pe,bt),se=new e0(B,ut,ke),ie=new kg(Oe),re=new mv(P,C,ct,ut,pe,ie),de=new Fv(P,Oe),ve=new xv,te=new Ev(ct),D=new Fg(P,C,_e,le,f,l),fe=new Rv(P,le,ut),De=new Ov(B,bt,ut,_e),ee=new Bg(B,ct,bt),me=new Kg(B,ct,bt),bt.programs=re.programs,P.capabilities=ut,P.extensions=ct,P.properties=Oe,P.renderLists=ve,P.shadowMap=fe,P.state=_e,P.info=bt}x!==Ht&&(N=new i0(x,t.width,t.height,o,s,r));let ce=new Oc(P,B);this.xr=ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(M){M!==void 0&&(T=M,this.setSize(Ee,Pe,!1))},this.getSize=function(M){return M.set(Ee,Pe)},this.setSize=function(M,F,J=!0){if(ce.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=M,Pe=F,t.width=Math.floor(M*T),t.height=Math.floor(F*T),J===!0&&(t.style.width=M+"px",t.style.height=F+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ee*T,Pe*T).floor()},this.setDrawingBufferSize=function(M,F,J){Ee=M,Pe=F,T=J,t.width=Math.floor(M*J),t.height=Math.floor(F*J),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(x===Ht){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ne)},this.getViewport=function(M){return M.copy(U)},this.setViewport=function(M,F,J,V){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,F,J,V),_e.viewport(ne.copy(U).multiplyScalar(cn()).round())},this.getScissor=function(M){return M.copy(ae)},this.setScissor=function(M,F,J,V){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,F,J,V),_e.scissor(ye.copy(ae).multiplyScalar(cn()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){_e.setScissorTest(oe=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){z=M},this.getClearColor=function(M){return M.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,J=!0){let V=0;if(M){let $=!1;if(Y!==null){let xe=Y.texture.format;$=m.has(xe)}if($){let xe=Y.texture.type,Te=g.has(xe),ge=D.getClearColor(),we=D.getClearAlpha(),Le=ge.r,He=ge.g,$e=ge.b;Te?(y[0]=Le,y[1]=He,y[2]=$e,y[3]=we,B.clearBufferuiv(B.COLOR,0,y)):(b[0]=Le,b[1]=He,b[2]=$e,b[3]=we,B.clearBufferiv(B.COLOR,0,b))}else V|=B.COLOR_BUFFER_BIT}F&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),D.dispose(),ve.dispose(),te.dispose(),ke.dispose(),Oe.dispose(),C.dispose(),le.dispose(),W.dispose(),pe.dispose(),De.dispose(),re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Zc),ce.removeEventListener("sessionend",jc),bi.stop()};function Ue(M){M.preventDefault(),er("WebGLRenderer: Context Lost."),L=!0}function Ge(){er("WebGLRenderer: Context Restored."),L=!1;let M=bt.autoReset,F=fe.enabled,J=fe.autoUpdate,V=fe.needsUpdate,$=fe.type;qe(),bt.autoReset=M,fe.enabled=F,fe.autoUpdate=J,fe.needsUpdate=V,fe.type=$}function Me(M){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function it(M){let F=M.target;F.removeEventListener("dispose",it),Tt(F)}function Tt(M){ei(M),Oe.remove(M)}function ei(M){let F=Oe.get(M).programs;F!==void 0&&(F.forEach(function(J){re.releaseProgram(J)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,J,V,$,xe){F===null&&(F=on);let Te=$.isMesh&&$.matrixWorld.determinantAffine()<0,ge=Wd(M,F,J,V,$);_e.setMaterial(V,Te);let we=J.index,Le=1;if(V.wireframe===!0){if(we=W.getWireframeAttribute(J),we===void 0)return;Le=2}let He=J.drawRange,$e=J.attributes.position,Ce=He.start*Le,Xe=(He.start+He.count)*Le;xe!==null&&(Ce=Math.max(Ce,xe.start*Le),Xe=Math.min(Xe,(xe.start+xe.count)*Le)),we!==null?(Ce=Math.max(Ce,0),Xe=Math.min(Xe,we.count)):$e!=null&&(Ce=Math.max(Ce,0),Xe=Math.min(Xe,$e.count));let yt=Xe-Ce;if(yt<0||yt===1/0)return;pe.setup($,V,ge,J,we);let rt,st=ee;if(we!==null&&(rt=_.get(we),st=me,st.setIndex(rt)),$.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*cn()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if($.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),_e.setLineWidth(Ot*cn()),$.isLineSegments?st.setMode(B.LINES):$.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else $.isPoints?st.setMode(B.POINTS):$.isSprite&&st.setMode(B.TRIANGLES);if($.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))st.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ot=$._multiDrawStarts,Re=$._multiDrawCounts,Vt=$._multiDrawCount,Qe=we?_.get(we).bytesPerElement:1,Mi=Oe.get(V).currentProgram.getUniforms();for(let Bt=0;Bt<Vt;Bt++)Mi.setValue(B,"_gl_DrawID",Bt),st.render(Ot[Bt]/Qe,Re[Bt])}else if($.isInstancedMesh)st.renderInstances(Ce,yt,$.count);else if(J.isInstancedBufferGeometry){let Ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,Ot);st.renderInstances(Ce,yt,Re)}else st.render(Ce,yt)};function Yc(M,F,J,V){H!==null&&M.isNodeMaterial&&H.setObject(V,M),vt===!0&&ie.setState(M,J,!1),M.transparent===!0&&M.side===Ft&&M.forceSinglePass===!1?(M.side=Mt,M.needsUpdate=!0,Fs(M,F,V),M.side=sn,M.needsUpdate=!0,Fs(M,F,V),M.side=Ft):Fs(M,F,V)}this.compile=function(M,F,J=null){J===null&&(J=M),H!==null&&H.renderStart(M,F,J),w=te.get(J),w.init(F),S.push(w),J.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),M!==J&&M.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),Xt=this.localClippingEnabled,vt=ie.init(this.clippingPlanes,Xt),vt===!0&&ie.setGlobalState(this.clippingPlanes,F),H!==null&&fe.render(w.state.shadowsArray,J,F);let V=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let xe=$.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){let ge=xe[Te];Yc(ge,J,F,$),V.add(ge)}else Yc(xe,J,F,$),V.add(xe)}),w=S.pop(),H!==null&&H.renderEnd(),V},this.compileAsync=function(M,F,J=null){let V=this.compile(M,F,J);return new Promise($=>{function xe(){if(V.forEach(function(Te){let we=Oe.get(Te).currentProgram;(we===void 0||we.isReady())&&V.delete(Te)}),V.size===0){$(M);return}setTimeout(xe,10)}ct.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ul=null;function Vd(M){ul&&ul(M)}function Zc(){bi.stop()}function jc(){bi.start()}let bi=new Qh;bi.setAnimationLoop(Vd),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(M){ul=M,ce.setAnimationLoop(M),M===null?bi.stop():bi.start()},ce.addEventListener("sessionstart",Zc),ce.addEventListener("sessionend",jc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;H!==null&&H.renderStart(M,F);let J=ce.enabled===!0&&ce.isPresenting===!0,V=N!==null&&(Y===null||J)&&N.begin(P,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,F,Y),w=te.get(M,S.length),w.init(F),w.state.textureUnits=ke.getTextureUnits(),S.push(w),ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pt.setFromArrayCamera(F):Ae.setFromProjectionMatrix(ft,dn,F.reversedDepth),Xt=this.localClippingEnabled,vt=ie.init(this.clippingPlanes,Xt),A=ve.get(M,v.length),A.init(),v.push(A),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Te=P.xr.getDepthSensingMesh();Te!==null&&hl(Te,F,-1/0,P.sortObjects)}hl(M,F,0,P.sortObjects),A.finish(),H!==null&&H.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(Z,z),ln=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ln&&D.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),vt===!0&&ie.beginShadows();let $=w.state.shadowsArray;if(fe.render($,M,F),vt===!0&&ie.endShadows(),(V&&N.hasRenderPass())===!1){let Te=A.opaque,ge=A.transmissive;if(w.setupLights(),F.isArrayCamera){let we=F.cameras;if(ge.length>0)for(let Le=0,He=we.length;Le<He;Le++){let $e=we[Le];Kc(Te,ge,M,$e)}ln&&D.render(M);for(let Le=0,He=we.length;Le<He;Le++){let $e=we[Le];Jc(A,M,$e,$e.viewport)}}else ge.length>0&&Kc(Te,ge,M,F),ln&&D.render(M),Jc(A,M,F)}Y!==null&&O===0&&(ke.updateMultisampleRenderTarget(Y),ke.updateRenderTargetMipmap(Y)),V&&N.end(P),M.isScene===!0&&M.onAfterRender(P,M,F),pe.resetDefaultState(),G=-1,K=null,S.pop(),S.length>0?(w=S[S.length-1],ke.setTextureUnits(w.state.textureUnits),vt===!0&&ie.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,H!==null&&H.renderEnd()};function hl(M,F,J,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let Te=F.isArrayCamera?pt:Ae;if(!M.frustumCulled||M.intersectsFrustum(Te)){V&&At.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ft);let ge=le.update(M),we=M.material;we.visible&&A.push(M,ge,we,J,At.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){let Te=F.isArrayCamera?pt:Ae;if(!M.frustumCulled||M.intersectsFrustum(Te)){let ge=le.update(M),we=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),At.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),At.copy(ge.boundingSphere.center)),At.applyMatrix4(M.matrixWorld).applyMatrix4(ft)),Array.isArray(we)){let Le=ge.groups;for(let He=0,$e=Le.length;He<$e;He++){let Ce=Le[He],Xe=we[Ce.materialIndex];Xe&&Xe.visible&&A.push(M,ge,Xe,J,At.z,Ce,F)}}else we.visible&&A.push(M,ge,we,J,At.z,null,F)}}}let xe=M.children;for(let Te=0,ge=xe.length;Te<ge;Te++)hl(xe[Te],F,J,V)}function Jc(M,F,J,V){let{opaque:$,transmissive:xe,transparent:Te}=M;w.setupLightsView(J),vt===!0&&ie.setGlobalState(P.clippingPlanes,J),V&&_e.viewport(ne.copy(V)),$.length>0&&Gr($,F,J),xe.length>0&&Gr(xe,F,J),Te.length>0&&Gr(Te,F,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Kc(M,F,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ce=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:Ce?Mn:Ht,minFilter:Yn,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let xe=w.state.transmissionRenderTarget[V.id],Te=V.viewport||ne;xe.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),we=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(Q),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),ln&&D.render(J);let He=P.toneMapping;P.toneMapping=Dn;let $e=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),vt===!0&&ie.setGlobalState(P.clippingPlanes,V),Gr(M,J,V),ke.updateMultisampleRenderTarget(xe),ke.updateRenderTargetMipmap(xe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Xe=0,yt=F.length;Xe<yt;Xe++){let rt=F[Xe],{object:st,geometry:Ot,material:Re,group:Vt}=rt;if(Re.side===Ft&&st.layers.test(V.layers)){let Qe=Re.side;Re.side=Mt,Re.needsUpdate=!0,Qc(st,J,V,Ot,Re,Vt),Re.side=Qe,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(ke.updateMultisampleRenderTarget(xe),ke.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,we,Le),P.setClearColor(Q,ue),$e!==void 0&&(V.viewport=$e),P.toneMapping=He}function Gr(M,F,J){let V=F.isScene===!0?F.overrideMaterial:null;for(let $=0,xe=M.length;$<xe;$++){let Te=M[$],{object:ge,geometry:we,group:Le}=Te,He=Te.material;He.allowOverride===!0&&V!==null&&(He=V),ge.layers.test(J.layers)&&Qc(ge,F,J,we,He,Le)}}function Qc(M,F,J,V,$,xe){H!==null&&$.isNodeMaterial&&H.setObject(M,$),M.onBeforeRender(P,F,J,V,$,xe),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(P,F,J,V,M,xe),$.transparent===!0&&$.side===Ft&&$.forceSinglePass===!1?($.side=Mt,$.needsUpdate=!0,P.renderBufferDirect(J,F,V,$,M,xe),$.side=sn,$.needsUpdate=!0,P.renderBufferDirect(J,F,V,$,M,xe),$.side=Ft):P.renderBufferDirect(J,F,V,$,M,xe),M.onAfterRender(P,F,J,V,$,xe)}function eu(M){let F=0;for(let J of M)J.texture!==null&&F++;return F}function Fs(M,F,J){F.isScene!==!0&&(F=on);let V=Oe.get(M),$=w.state.lights,xe=w.state.shadowsArray,Te=$.state.version,ge=re.getParameters(M,$.state,xe,F,J,w.state.lightProbeGridArray),we=re.getProgramCacheKey(ge),Le=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=C.get(M.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",it),Le=new Map,V.programs=Le,V.programVariants=new Map);let $e=Le.get(we);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===Te)return nu(M,ge),$e}else ge.uniforms=re.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,J,ge),M.onBeforeCompile(ge,P),$e=re.acquireProgram(ge,we),Le.set(we,$e),V.uniforms=ge.uniforms;let Ce=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),nu(M,ge),V.needsLights=Xd(M),V.lightsStateVersion=Te,V.needsLights&&(Ce.ambientLightColor.value=$.state.ambient,Ce.lightProbe.value=$.state.probe,Ce.sunLights.value=$.state.sun,Ce.sunLightShadows.value=$.state.sunShadow,Ce.directionalLights.value=$.state.directional,Ce.directionalLightShadows.value=$.state.directionalShadow,Ce.spotLights.value=$.state.spot,Ce.spotLightShadows.value=$.state.spotShadow,Ce.rectAreaLights.value=$.state.rectArea,Ce.ltc_1.value=$.state.rectAreaLTC1,Ce.ltc_2.value=$.state.rectAreaLTC2,Ce.pointLights.value=$.state.point,Ce.pointLightShadows.value=$.state.pointShadow,Ce.hemisphereLights.value=$.state.hemi,Ce.sunShadowMatrix.value=$.state.sunShadowMatrix,Ce.sunShadowCascade.value=$.state.sunShadowCascade,Ce.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ce.spotLightMatrix.value=$.state.spotLightMatrix,Ce.spotLightMap.value=$.state.spotLightMap,Ce.pointShadowMatrix.value=$.state.pointShadowMatrix),V.numLightProbeGrids=eu(w.state.lightProbeGridArray),V.currentProgram=$e,V.uniformsList=null,$e}function qd(M,F,J,V,$){let xe=Oe.get(M),Te=xe.currentProgram.id+","+V+","+$,ge=xe.programVariants.get(Te);return ge===void 0?(ge=Fs(M,F,J),xe.programVariants.set(Te,ge)):(xe.currentProgram=ge,xe.uniformsList=null,xe.outputColorSpace=V,xe.toneMapping=$),ge}function tu(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=As.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function nu(M,F){let J=Oe.get(M);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Wd(M,F,J,V,$){F.isScene!==!0&&(F=on),ke.resetTextureUnits();let xe=F.fog,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,ge=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ye.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Le=C.get(V.envMap||Te,we),He=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!J.morphAttributes.position,Xe=!!J.morphAttributes.normal,yt=!!J.morphAttributes.color,rt=Dn;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(rt=P.toneMapping);let st=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ot=st!==void 0?st.length:0,Re=Oe.get(V),Vt=w.state.lights;if(vt===!0&&(Xt===!0||M!==K)){let mt=M===K&&V.id===G;ie.setState(V,M,mt)}let Qe=!1,Mi=!1;V.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Vt.state.version||$.isBatchedMesh&&Re.batching===!1||!$.isBatchedMesh&&Re.batching===!0||$.isBatchedMesh&&Re.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Re.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||$.isInstancedMesh&&Re.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Re.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Re.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Re.instancingMorph===!1&&$.morphTexture!==null||Re.envMap!==Le||V.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==He||Re.vertexTangents!==$e||Re.morphTargets!==Ce||Re.morphNormals!==Xe||Re.morphColors!==yt||Re.morphTargetsCount!==Ot||Re.numLightProbeGrids!==eu(w.state.lightProbeGridArray)?Qe=!0:(Re.outputColorSpace!==ge||Re.toneMapping!==rt)&&(Mi=!0):(Qe=!0,Re.__version=V.version);let Bt=Re.currentProgram;(Qe===!0||Mi===!0)&&(Bt=Mi===!0?qd(V,F,$,ge,rt):Fs(V,F,$),H&&V.isNodeMaterial&&H.onUpdateProgram(V,Bt,Re));let Vr=!1,ti=!1,Si=!1,Je=Bt.getUniforms(),Dt=Re.uniforms;if(_e.useProgram(Bt.program)&&(Vr=!0,ti=!0,Si=!0),V.id!==G&&(G=V.id,ti=!0),Vr||K!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Je.setValue(B,"projectionMatrix",M.projectionMatrix),Je.setValue(B,"viewMatrix",M.matrixWorldInverse);let Ct=Je.map.cameraPosition;Ct!==void 0&&Ct.setValue(B,wn.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&Je.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Je.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,ti=!0,Si=!0)}if(Re.needsLights&&(Vt.state.sunShadowMap.length>0&&Je.setValue(B,"sunShadowMap",Vt.state.sunShadowMap,ke),Vt.state.directionalShadowMap.length>0&&Je.setValue(B,"directionalShadowMap",Vt.state.directionalShadowMap,ke),Vt.state.spotShadowMap.length>0&&Je.setValue(B,"spotShadowMap",Vt.state.spotShadowMap,ke),Vt.state.pointShadowMap.length>0&&Je.setValue(B,"pointShadowMap",Vt.state.pointShadowMap,ke)),$.isSkinnedMesh){Je.setOptional(B,$,"bindMatrix"),Je.setOptional(B,$,"bindMatrixInverse");let mt=$.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),Je.setValue(B,"boneTexture",mt.boneTexture,ke))}$.isBatchedMesh&&(Je.setOptional(B,$,"batchingTexture"),Je.setValue(B,"batchingTexture",$._matricesTexture,ke),Je.setOptional(B,$,"batchingIdTexture"),Je.setValue(B,"batchingIdTexture",$._indirectTexture,ke),Je.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&Je.setValue(B,"batchingColorTexture",$._colorsTexture,ke));let gn=J.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&se.update($,J,Bt),(ti||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,Je.setValue(B,"receiveShadow",$.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=zv()),ti){if(Je.setValue(B,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&$d(Dt,Si),xe&&V.fog===!0&&de.refreshFogUniforms(Dt,xe),de.refreshMaterialUniforms(Dt,V,T,Pe,w.state.transmissionRenderTarget[M.id]),Re.needsLights&&Re.numLightProbeGrids>0){let mt=E,Ct=0;for(let On of w.state.lightProbeGridArray)On.texture!==null&&(mt.textures[Ct]=On.texture,mt.min[Ct]=On.boundingBox.min,mt.max[Ct]=On.boundingBox.max,mt.resolution[Ct]=On.resolution,Ct++);for(let On in mt)mt[On].length=Ct;Dt.probesSH.value=mt.textures,Dt.probesMin.value=mt.min,Dt.probesMax.value=mt.max,Dt.probesResolution.value=mt.resolution}As.upload(B,tu(Re),Dt,ke)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(As.upload(B,tu(Re),Dt,ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Je.setValue(B,"center",$.center),Je.setValue(B,"modelViewMatrix",$.modelViewMatrix),Je.setValue(B,"normalMatrix",$.normalMatrix),Je.setValue(B,"modelMatrix",$.matrixWorld),V.uniformsGroups!==void 0){let mt=V.uniformsGroups;for(let Ct=0,On=mt.length;Ct<On;Ct++){let su=mt[Ct];De.update(su,Bt),De.bind(su,Bt)}}return Bt}function $d(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Xd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,F,J){let V=Oe.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Oe.get(M.texture).__webglTexture=F,Oe.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let J=Oe.get(M);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,J=0){Y=M,k=F,O=J;let V=null,$=!1,xe=!1;if(M){let ge=Oe.get(M);if(ge.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(B.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(M.viewport),ye.copy(M.scissor),Ie=M.scissorTest,_e.viewport(ne),_e.scissor(ye),_e.setScissorTest(Ie),G=-1;return}else if(ge.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(ge.__hasExternalTextures)ke.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let He=M.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&Oe.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}let we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);let Le=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?V=Le[F][J]:V=Le[F],$=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?V=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[J]:V=Le,ne.copy(M.viewport),ye.copy(M.scissor),Ie=M.scissorTest}else ne.copy(U).multiplyScalar(T).floor(),ye.copy(ae).multiplyScalar(T).floor(),Ie=oe;if(J!==0&&(V=X),_e.bindFramebuffer(B.FRAMEBUFFER,V)&&_e.drawBuffers(M,V),_e.viewport(ne),_e.scissor(ye),_e.setScissorTest(Ie),$){let ge=Oe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,J)}else if(xe){let ge=F;for(let we=0;we<M.textures.length;we++){let Le=Oe.get(M.textures[we]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+we,Le.__webglTexture,J,ge)}}else if(M!==null&&J!==0){let ge=Oe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,J)}G=-1};function iu(M){let F=Oe.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=ut.textureFormatReadable(M.format),F.__typeReadable=ut.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,J,V,$,xe,Te,ge=0){if(!(M&&M.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te],Array.isArray(we)&&(we=we[0])),we){_e.bindFramebuffer(B.FRAMEBUFFER,we);try{let Le=M.textures[ge],He=Le.format,$e=Le.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge);let Ce=iu(Le);if(Ce.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&J>=0&&J<=M.height-$&&B.readPixels(F,J,V,$,he.convert(He),he.convert($e),xe)}finally{let Le=Y!==null?Oe.get(Y).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,F,J,V,$,xe,Te,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te],Array.isArray(we)&&(we=we[0])),we)if(F>=0&&F<=M.width-V&&J>=0&&J<=M.height-$){_e.bindFramebuffer(B.FRAMEBUFFER,we);let Le=M.textures[ge],He=Le.format,$e=Le.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge);let Ce=iu(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(F,J,V,$,he.convert(He),he.convert($e),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let yt=Y!==null?Oe.get(Y).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,yt);let rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await wh(B,rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Xe),B.deleteSync(rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,J=0){let V=Math.pow(2,-J),$=Math.floor(M.image.width*V),xe=Math.floor(M.image.height*V),Te=F!==null?F.x:0,ge=F!==null?F.y:0;ke.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Te,ge,$,xe),_e.unbindTexture()},this.copyTextureToTexture=function(M,F,J=null,V=null,$=0,xe=0){let Te,ge,we,Le,He,$e,Ce,Xe,yt,rt=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(J!==null)Te=J.max.x-J.min.x,ge=J.max.y-J.min.y,we=J.isBox3?J.max.z-J.min.z:1,Le=J.min.x,He=J.min.y,$e=J.isBox3?J.min.z:0;else{let Je=Math.pow(2,-$);Te=Math.floor(rt.width*Je),ge=Math.floor(rt.height*Je),M.isDataArrayTexture?we=rt.depth:M.isData3DTexture?we=Math.floor(rt.depth*Je):we=1,Le=0,He=0,$e=0}V!==null?(Ce=V.x,Xe=V.y,yt=V.z):(Ce=0,Xe=0,yt=0);let st=he.convert(F.format),Ot=he.convert(F.type),Re;F.isData3DTexture?(ke.setTexture3D(F,0),Re=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),Re=B.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),Re=B.TEXTURE_2D),_e.activeTexture(B.TEXTURE0),_e.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),_e.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_e.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let Vt=_e.getParameter(B.UNPACK_ROW_LENGTH),Qe=_e.getParameter(B.UNPACK_IMAGE_HEIGHT),Mi=_e.getParameter(B.UNPACK_SKIP_PIXELS),Bt=_e.getParameter(B.UNPACK_SKIP_ROWS),Vr=_e.getParameter(B.UNPACK_SKIP_IMAGES);_e.pixelStorei(B.UNPACK_ROW_LENGTH,rt.width),_e.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt.height),_e.pixelStorei(B.UNPACK_SKIP_PIXELS,Le),_e.pixelStorei(B.UNPACK_SKIP_ROWS,He),_e.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);let ti=M.isDataArrayTexture||M.isData3DTexture,Si=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Je=Oe.get(M),Dt=Oe.get(F),gn=Oe.get(Je.__renderTarget),mt=Oe.get(Dt.__renderTarget);_e.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Ct=0;Ct<we;Ct++)ti&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(M).__webglTexture,$,$e+Ct),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(F).__webglTexture,xe,yt+Ct)),B.blitFramebuffer(Le,He,Le+Te,He+ge,Ce,Xe,Ce+Te,Xe+ge,B.DEPTH_BUFFER_BIT,B.NEAREST);_e.bindFramebuffer(B.READ_FRAMEBUFFER,null),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||Oe.has(M)){let Je=Oe.get(M),Dt=Oe.get(F);_e.bindFramebuffer(B.READ_FRAMEBUFFER,I),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let gn=0;gn<we;gn++)ti?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Je.__webglTexture,$,$e+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Je.__webglTexture,$),Si?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,xe,yt+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,xe),$!==0?B.blitFramebuffer(Le,He,Le+Te,He+ge,Ce,Xe,Ce+Te,Xe+ge,B.COLOR_BUFFER_BIT,B.NEAREST):Si?B.copyTexSubImage3D(Re,xe,Ce,Xe,yt+gn,Le,He,Te,ge):B.copyTexSubImage2D(Re,xe,Ce,Xe,Le,He,Te,ge);_e.bindFramebuffer(B.READ_FRAMEBUFFER,null),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Si?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Re,xe,Ce,Xe,yt,Te,ge,we,st,Ot,rt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Re,xe,Ce,Xe,yt,Te,ge,we,st,rt.data):B.texSubImage3D(Re,xe,Ce,Xe,yt,Te,ge,we,st,Ot,rt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,Ce,Xe,Te,ge,st,Ot,rt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,Ce,Xe,rt.width,rt.height,st,rt.data):B.texSubImage2D(B.TEXTURE_2D,xe,Ce,Xe,Te,ge,st,Ot,rt);_e.pixelStorei(B.UNPACK_ROW_LENGTH,Vt),_e.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),_e.pixelStorei(B.UNPACK_SKIP_PIXELS,Mi),_e.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),_e.pixelStorei(B.UNPACK_SKIP_IMAGES,Vr),xe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Re),_e.unbindTexture()},this.initRenderTarget=function(M){Oe.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){k=0,O=0,Y=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}});var Is,at,ud,Fn,Jn,Kn,hd,el=jt(()=>{Is={frontal:{name:"Lobe frontal",en:"Frontal lobe",color:"#d98c6a"},parietal:{name:"Lobe pari\xE9tal",en:"Parietal lobe",color:"#6fa8c9"},temporal:{name:"Lobe temporal",en:"Temporal lobe",color:"#8fbf7a"},occipital:{name:"Lobe occipital",en:"Occipital lobe",color:"#c9a0d6"},limbique:{name:"Cortex cingulaire (limbique)",en:"Cingulate (limbic) cortex",color:"#e2c26a"},insula:{name:"Insula",en:"Insula",color:"#e29a9a"}},at={moteur:{name:"Cortex moteur primaire",en:"Primary motor cortex",group:"cortex",lobe:"frontal",color:"#e0754f",desc:"Bande de cortex situ\xE9e juste en avant du sillon central (gyrus pr\xE9central). Ses neurones envoient les ordres de mouvement volontaire vers la moelle \xE9pini\xE8re, puis les muscles.",role:"Commande des mouvements volontaires. L'h\xE9misph\xE8re gauche commande surtout le c\xF4t\xE9 droit du corps, et inversement (controlat\xE9ralit\xE9).",limite:"Ici, la r\xE9gion correspond au gyrus pr\xE9central et au sillon central : la fronti\xE8re exacte avec le cortex somesth\xE9sique est simplifi\xE9e."},premoteur:{name:"Cortex pr\xE9moteur",en:"Premotor cortex",group:"cortex",lobe:"frontal",color:"#e89a6c",desc:"Zone en avant du cortex moteur primaire.",role:"Pr\xE9pare et organise les mouvements avant leur ex\xE9cution, en lien avec le cortex moteur.",limite:"R\xE9gion approxim\xE9e par les sillons pr\xE9centraux."},prefrontal:{name:"Cortex pr\xE9frontal lat\xE9ral",en:"Lateral prefrontal cortex",group:"cortex",lobe:"frontal",color:"#d9a066",desc:"Grande partie avant du lobe frontal, sur la face externe du cerveau.",role:"Planifier, se concentrer, garder une information en t\xEAte, contr\xF4ler ses impulsions. Participe \xE0 de nombreux r\xE9seaux (contr\xF4le, attention).",limite:""},pfc_median:{name:"Cortex pr\xE9frontal m\xE9dian",en:"Medial prefrontal cortex",group:"cortex",lobe:"frontal",color:"#f0b884",desc:"Face interne (m\xE9diane) du lobe frontal, visible quand on masque l'autre h\xE9misph\xE8re.",role:"Participe \xE0 la r\xE9gulation des \xE9motions (\xAB frein \xBB du circuit d'alarme), \xE0 la prise de d\xE9cision et \xE0 la pens\xE9e sur soi.",limite:"R\xE9gion d\xE9limit\xE9e g\xE9om\xE9triquement (face m\xE9diane du gyrus frontal sup\xE9rieur)."},frontal_inf:{name:"Gyrus frontal inf\xE9rieur (aire de Broca \xE0 gauche)",en:"Inferior frontal gyrus (Broca's area, left)",group:"cortex",lobe:"frontal",color:"#c98a5a",desc:"Partie inf\xE9rieure du lobe frontal. \xC0 gauche, chez la plupart des personnes, elle contient l'aire de Broca.",role:"Production du langage (\xE0 gauche), contr\xF4le de l'action.",limite:""},orbitofrontal:{name:"Cortex orbitofrontal",en:"Orbitofrontal cortex",group:"cortex",lobe:"frontal",color:"#b97b55",desc:"Face inf\xE9rieure du lobe frontal, au-dessus des orbites (yeux).",role:"\xC9value la valeur des r\xE9compenses et des cons\xE9quences de nos choix ; lien avec les \xE9motions et la motivation.",limite:""},cingulaire_ant:{name:"Cortex cingulaire ant\xE9rieur",en:"Anterior cingulate cortex",group:"cortex",lobe:"limbique",color:"#e2c26a",desc:"Face interne, autour de l'avant du corps calleux.",role:"D\xE9tecte les conflits et les erreurs, participe \xE0 la douleur ressentie et aux \xE9motions.",limite:""},cingulaire_post:{name:"Cortex cingulaire post\xE9rieur",en:"Posterior cingulate cortex",group:"cortex",lobe:"limbique",color:"#d4b85c",desc:"Face interne, au-dessus de l'arri\xE8re du corps calleux.",role:"Pi\xE8ce centrale du r\xE9seau du \xAB mode par d\xE9faut \xBB (r\xEAverie, souvenirs personnels).",limite:""},insula:{name:"Insula",en:"Insula",group:"cortex",lobe:"insula",color:"#e29a9a",desc:"Cortex cach\xE9 au fond de la scissure lat\xE9rale : on ne le voit qu'en \xE9cartant les lobes ou en vue profonde.",role:"Perception de l'\xE9tat interne du corps (c\u0153ur, estomac\u2026), d\xE9go\xFBt, conscience des \xE9motions.",limite:""},somesthesique:{name:"Cortex somesth\xE9sique primaire",en:"Primary somatosensory cortex",group:"cortex",lobe:"parietal",color:"#5b9bd5",desc:"Bande de cortex juste en arri\xE8re du sillon central (gyrus postcentral).",role:"Re\xE7oit les messages du toucher, de la temp\xE9rature, de la douleur et de la position du corps.",limite:""},parietal:{name:"Cortex pari\xE9tal associatif",en:"Parietal association cortex",group:"cortex",lobe:"parietal",color:"#7fb3d5",desc:"Reste du lobe pari\xE9tal (lobules sup\xE9rieur et inf\xE9rieur, pr\xE9cun\xE9us).",role:"Situer son corps et les objets dans l'espace, orienter l'attention, calcul.",limite:""},auditif:{name:"Cortex auditif primaire",en:"Primary auditory cortex",group:"cortex",lobe:"temporal",color:"#5fae6e",desc:"Petit gyrus transverse (gyrus de Heschl) sur la face sup\xE9rieure du lobe temporal.",role:"Premi\xE8re \xE9tape corticale du traitement des sons.",limite:""},temporal:{name:"Cortex temporal",en:"Temporal cortex",group:"cortex",lobe:"temporal",color:"#9ccc85",desc:"Lobe temporal lat\xE9ral et inf\xE9rieur (dont le gyrus fusiforme).",role:"Compr\xE9hension du langage (\xE0 gauche), reconnaissance des objets et des visages, m\xE9moire des connaissances.",limite:""},parahippocampique:{name:"Gyrus parahippocampique",en:"Parahippocampal gyrus",group:"cortex",lobe:"temporal",color:"#b5d99c",desc:"Face interne du lobe temporal, contre l'hippocampe.",role:"Porte d'entr\xE9e des informations vers l'hippocampe ; m\xE9moire des lieux.",limite:""},visuel:{name:"Cortex visuel primaire",en:"Primary visual cortex",group:"cortex",lobe:"occipital",color:"#a970c4",desc:"Autour de la scissure calcarine, tout \xE0 l'arri\xE8re du cerveau (p\xF4le occipital).",role:"Re\xE7oit les messages venant des yeux (via le thalamus) : premi\xE8re \xE9tape de la vision consciente.",limite:"Approxim\xE9 par la scissure calcarine et le p\xF4le occipital."},occipital:{name:"Cortex visuel associatif",en:"Visual association cortex",group:"cortex",lobe:"occipital",color:"#c9a0d6",desc:"Reste du lobe occipital.",role:"Analyse des formes, des couleurs, du mouvement.",limite:""},paroi_mediane:{name:"Paroi m\xE9diane (non corticale)",en:"Medial wall",group:"cortex",lobe:null,color:"#8a8f99",desc:"Zone de la face interne o\xF9 passent le corps calleux et les structures profondes : ce n'est pas du cortex.",role:"",limite:"Artefact de la surface corticale moyenne (fsaverage).",hidden:!0},hippocampe:{name:"Hippocampe",en:"Hippocampus",group:"profond",color:"#f2c14e",desc:"Structure enroul\xE9e \xE0 l'int\xE9rieur du lobe temporal, en forme d'hippocampe (le poisson).",role:"Indispensable pour former de nouveaux souvenirs d'\xE9v\xE9nements et de faits ; les souvenirs sont ensuite consolid\xE9s dans des r\xE9seaux du cortex, notamment pendant le sommeil.",limite:""},amygdale:{name:"Amygdale",en:"Amygdala",group:"profond",color:"#e4572e",desc:"Petit noyau en forme d'amande, \xE0 l'avant de l'hippocampe, dans le lobe temporal.",role:"D\xE9tecte rapidement ce qui est important pour nous (danger mais aussi r\xE9compense) et d\xE9clenche des r\xE9actions du corps. Elle travaille en r\xE9seau avec le cortex pr\xE9frontal, qui la module.",limite:""},thalamus:{name:"Thalamus",en:"Thalamus",group:"profond",color:"#76b7b2",desc:"Gros noyau au centre du cerveau, de chaque c\xF4t\xE9 du 3e ventricule.",role:"Relais et filtre des messages sensoriels (sauf l'odorat) vers le cortex.",limite:""},caude:{name:"Noyau caud\xE9",en:"Caudate nucleus",group:"profond",color:"#4e79a7",desc:"Noyau en forme de virgule, qui longe le ventricule lat\xE9ral. Fait partie du striatum.",role:"Apprentissage des habitudes et des actions dirig\xE9es vers un but.",limite:""},putamen:{name:"Putamen",en:"Putamen",group:"profond",color:"#5f8fc4",desc:"Noyau situ\xE9 en dehors du pallidum. Fait partie du striatum.",role:"Apprentissage et automatisation des gestes (savoir-faire moteurs).",limite:""},pallidum:{name:"Pallidum (globus pallidus)",en:"Globus pallidus",group:"profond",color:"#9c755f",desc:"Noyau interne aux putamen.",role:"Sortie inhibitrice (GABA) des noyaux gris centraux : \xAB freine \xBB ou \xAB lib\xE8re \xBB les mouvements.",limite:""},accumbens:{name:"Noyau accumbens",en:"Nucleus accumbens",group:"profond",color:"#ff9da7",desc:"Petit noyau \xE0 l'avant du striatum, sous la t\xEAte du noyau caud\xE9.",role:"Carrefour de la motivation : re\xE7oit la dopamine venant de l'aire tegmentale ventrale. Les drogues et certaines conduites addictives d\xE9tournent ce circuit.",limite:""},hypothalamus:{name:"Hypothalamus",en:"Hypothalamus",group:"profond",color:"#edc948",desc:"Petite r\xE9gion sous le thalamus, au-dessus de l'hypophyse.",role:"R\xE9gule faim, soif, temp\xE9rature, sommeil, stress (axe hormonal du stress) et comportements de reproduction.",limite:""},ventricule:{name:"Ventricule lat\xE9ral",en:"Lateral ventricle",group:"profond",color:"#9fd0e8",desc:"Cavit\xE9 remplie de liquide c\xE9r\xE9brospinal.",role:"Produit et fait circuler le liquide qui prot\xE8ge et nourrit le cerveau.",limite:""},corps_calleux:{name:"Corps calleux",en:"Corpus callosum",group:"profond",color:"#e8e2d0",desc:"Large faisceau de fibres nerveuses (substance blanche) qui relie les deux h\xE9misph\xE8res.",role:"Permet aux deux h\xE9misph\xE8res d'\xE9changer des informations.",limite:"Forme approxim\xE9e \xE0 partir de la substance blanche m\xE9diane du template MNI."},vta:{name:"Aire tegmentale ventrale (ATV / VTA)",en:"Ventral tegmental area",group:"tronc",color:"#ff6f91",desc:"Petit groupe de neurones au sommet du tronc c\xE9r\xE9bral (m\xE9senc\xE9phale).",role:"Source de la dopamine du circuit de la motivation (vers le noyau accumbens et le cortex pr\xE9frontal).",limite:""},substance_noire:{name:"Substance noire",en:"Substantia nigra",group:"tronc",color:"#6b5b95",desc:"Noyau du m\xE9senc\xE9phale, riche en neurones \xE0 dopamine.",role:"Envoie de la dopamine au striatum pour faciliter le mouvement (sa d\xE9g\xE9n\xE9rescence cause la maladie de Parkinson).",limite:""},locus_coeruleus:{name:"Locus coeruleus",en:"Locus coeruleus",group:"tronc",color:"#3b8ea5",desc:"Minuscule noyau bleut\xE9 du tronc c\xE9r\xE9bral (pont).",role:"Source de la noradr\xE9naline du cerveau : vigilance, alerte, r\xE9action au stress.",limite:"Position approximative (petite capsule) : le noyau est trop petit pour l'atlas utilis\xE9.",approx:!0},raphe:{name:"Noyaux du raph\xE9",en:"Raphe nuclei",group:"tronc",color:"#c06c84",desc:"Colonne de noyaux sur la ligne m\xE9diane du tronc c\xE9r\xE9bral.",role:"Source de la s\xE9rotonine : humeur, sommeil, app\xE9tit.",limite:"Position approximative (capsule sch\xE9matique).",approx:!0},pag:{name:"Substance grise p\xE9riaqueducale (SGPA)",en:"Periaqueductal gray",group:"tronc",color:"#f08a5d",desc:"Substance grise autour de l'aqueduc, dans le m\xE9senc\xE9phale.",role:"D\xE9clenche des r\xE9actions de survie (fuite, immobilisation, cris) et module la douleur.",limite:"Position approximative (capsule sch\xE9matique).",approx:!0},meynert:{name:"Noyau basal de Meynert",en:"Nucleus basalis of Meynert",group:"profond",color:"#59a14f",desc:"Groupe de neurones sous le striatum (\xAB cerveau ant\xE9rieur basal \xBB).",role:"Source principale de l'ac\xE9tylcholine du cortex : attention, apprentissage.",limite:"Position approximative (capsule sch\xE9matique).",approx:!0},tronc:{name:"Tronc c\xE9r\xE9bral",en:"Brainstem",group:"tronc",color:"#b07aa1",desc:"Relie le cerveau \xE0 la moelle \xE9pini\xE8re (m\xE9senc\xE9phale, pont, bulbe).",role:"Fonctions vitales (respiration, rythme cardiaque), \xE9veil ; passage de tous les messages entre cerveau et moelle \xE9pini\xE8re.",limite:"La moelle \xE9pini\xE8re et les nerfs ne sont pas repr\xE9sent\xE9s dans cet atlas."},cervelet:{name:"Cervelet",en:"Cerebellum",group:"cervelet",color:"#86bcb6",desc:"Structure pliss\xE9e sous le lobe occipital, en arri\xE8re du tronc c\xE9r\xE9bral.",role:"Coordination et pr\xE9cision des mouvements, \xE9quilibre, apprentissage des gestes.",limite:"Surface liss\xE9e : les fines lamelles (folia) ne sont pas repr\xE9sent\xE9es."}},ud=[{title:"Lobe frontal",keys:["moteur","premoteur","prefrontal","pfc_median","frontal_inf","orbitofrontal"]},{title:"Lobe pari\xE9tal",keys:["somesthesique","parietal"]},{title:"Lobe temporal",keys:["auditif","temporal","parahippocampique"]},{title:"Lobe occipital",keys:["visuel","occipital"]},{title:"Cortex cingulaire et insula",keys:["cingulaire_ant","cingulaire_post","insula"]},{title:"Structures profondes",keys:["hippocampe","amygdale","thalamus","hypothalamus","caude","putamen","pallidum","accumbens","meynert","corps_calleux","ventricule"]},{title:"Tronc c\xE9r\xE9bral et cervelet",keys:["tronc","vta","substance_noire","raphe","locus_coeruleus","pag","cervelet"]}],Fn=[null,{id:"vis",name:"R\xE9seau visuel",en:"Visual network",color:"#9b59b6",desc:"Traite les informations visuelles."},{id:"smn",name:"R\xE9seau somatomoteur",en:"Somatomotor network",color:"#4a90d9",desc:"Commander les mouvements et sentir son corps : cortex moteur et somesth\xE9sique travaillent ensemble."},{id:"dan",name:"R\xE9seau de l'attention dorsale",en:"Dorsal attention network",color:"#2ca02c",desc:"Orienter volontairement son attention vers un objet ou un endroit."},{id:"sal",name:"R\xE9seau de saillance",en:"Salience / ventral attention network",color:"#d62ab5",desc:"Rep\xE8re ce qui est important (inattendu, \xE9motionnel) et fait basculer l'attention."},{id:"lim",name:"R\xE9seau limbique",en:"Limbic network",color:"#d9c45a",desc:"Faces inf\xE9rieures frontale et temporale : valeur des r\xE9compenses, \xE9motions."},{id:"fpn",name:"R\xE9seau de contr\xF4le fronto-pari\xE9tal",en:"Frontoparietal control network",color:"#f39c34",desc:"Planifier, r\xE9soudre un probl\xE8me, garder une consigne en t\xEAte."},{id:"dmn",name:"R\xE9seau du mode par d\xE9faut",en:"Default mode network",color:"#d64541",desc:"Actif quand on pense \xE0 soi, aux autres, quand on se souvient ou qu'on imagine l'avenir."}],Jn={glutamate:{name:"Glutamate",type:"exc",color:"#3fb6ff",desc:"Principal neurotransmetteur excitateur : il \xAB active \xBB le neurone suivant. Exemples de voies : thalamus \u2192 cortex, cortex \u2192 striatum, hippocampe \u2192 cortex pr\xE9frontal.",routes:[["thalamus","somesthesique"],["thalamus","visuel"],["thalamus","moteur"],["prefrontal","caude"],["moteur","putamen"],["hippocampe","pfc_median"],["moteur","tronc"]]},gaba:{name:"GABA",type:"inh",color:"#ff7a59",desc:"Principal neurotransmetteur inhibiteur : il \xAB freine \xBB le neurone suivant. Exemples : striatum \u2192 pallidum \u2192 thalamus (contr\xF4le du mouvement).",routes:[["putamen","pallidum"],["caude","pallidum"],["pallidum","thalamus"],["caude","substance_noire"],["accumbens","vta"]]},dopamine:{name:"Dopamine",type:"mod",color:"#ff4f8b",desc:"Signal de la motivation et de l'apprentissage par la r\xE9compense (\xAB vouloir \xBB, plus que \xAB aimer \xBB), et de la facilitation du mouvement. Voies : ATV \u2192 accumbens (m\xE9solimbique), ATV \u2192 pr\xE9frontal (m\xE9socorticale), substance noire \u2192 striatum. Cible commune des drogues stimulantes.",routes:[["vta","accumbens"],["vta","pfc_median"],["vta","prefrontal"],["substance_noire","putamen"],["substance_noire","caude"]]},serotonine:{name:"S\xE9rotonine",type:"mod",color:"#b78cff",desc:"Module l'humeur, le sommeil, l'app\xE9tit. Les noyaux du raph\xE9 envoient des fibres vers presque tout le cerveau.",routes:[["raphe","prefrontal"],["raphe","hippocampe"],["raphe","amygdale"],["raphe","caude"],["raphe","cervelet"],["raphe","cingulaire_ant"]]},noradrenaline:{name:"Noradr\xE9naline",type:"mod",color:"#3fd0b0",desc:"Vigilance et alerte : le locus coeruleus \xAB r\xE9veille \xBB tout le cerveau en cas de danger ou de surprise (c\u0153ur qui acc\xE9l\xE8re, muscles pr\xEAts).",routes:[["locus_coeruleus","prefrontal"],["locus_coeruleus","hippocampe"],["locus_coeruleus","amygdale"],["locus_coeruleus","thalamus"],["locus_coeruleus","cervelet"],["locus_coeruleus","parietal"]]},acetylcholine:{name:"Ac\xE9tylcholine",type:"mod",color:"#9ad94f",desc:"Attention et apprentissage dans le cerveau (noyau basal de Meynert \u2192 cortex). C'est aussi le neurotransmetteur de la jonction neurone\u2013muscle.",routes:[["meynert","prefrontal"],["meynert","parietal"],["meynert","temporal"],["meynert","hippocampe"],["meynert","amygdale"]]},histamine:{name:"Histamine",type:"mod",color:"#ffd23f",desc:"Maintient l'\xE9veil (d'o\xF9 la somnolence caus\xE9e par certains antihistaminiques). Source : hypothalamus post\xE9rieur.",routes:[["hypothalamus","prefrontal"],["hypothalamus","thalamus"],["hypothalamus","cingulaire_ant"],["hypothalamus","hippocampe"]]},orexine:{name:"Orexine",type:"mod",color:"#ff9f1c",desc:"Stabilise l'\xE9veil et l'app\xE9tit ; active les autres syst\xE8mes d'\xE9veil (locus coeruleus, raph\xE9, ATV). Source : hypothalamus lat\xE9ral.",routes:[["hypothalamus","locus_coeruleus"],["hypothalamus","raphe"],["hypothalamus","vta"],["hypothalamus","prefrontal"]]}},Kn={seeking:{name:"RECHERCHE (SEEKING)",valence:"agr\xE9able",color:"#ff4f8b",desc:"Envie d'explorer, curiosit\xE9, motivation \xE0 obtenir quelque chose. Circuit de la dopamine : hypothalamus lat\xE9ral \u2192 aire tegmentale ventrale \u2192 noyau accumbens \u2192 cortex pr\xE9frontal m\xE9dian. C'est ce circuit que les drogues et les conduites addictives d\xE9tournent.",structures:["hypothalamus","vta","accumbens","pfc_median","orbitofrontal"],circuit:[["hypothalamus","vta"],["vta","accumbens"],["accumbens","pfc_median"],["vta","pfc_median"]]},fear:{name:"PEUR (FEAR)",valence:"d\xE9sagr\xE9able",color:"#e4572e",desc:"R\xE9action \xE0 un danger : l'amygdale d\xE9clenche l'alerte, l'hypothalamus et la substance grise p\xE9riaqueducale (SGPA) d\xE9clenchent les r\xE9actions du corps (fuite, immobilisation, c\u0153ur qui bat vite). Le cortex pr\xE9frontal m\xE9dian peut moduler cette alarme.",structures:["amygdale","hypothalamus","pag","pfc_median"],circuit:[["amygdale","hypothalamus"],["hypothalamus","pag"],["amygdale","pag"],["pfc_median","amygdale"]]},rage:{name:"COL\xC8RE (RAGE)",valence:"d\xE9sagr\xE9able",color:"#c0392b",desc:"R\xE9action \xE0 une frustration ou une contrainte. Circuit amygdale m\xE9diane \u2192 hypothalamus \u2192 SGPA.",structures:["amygdale","hypothalamus","pag"],circuit:[["amygdale","hypothalamus"],["hypothalamus","pag"]]},lust:{name:"D\xC9SIR SEXUEL (LUST)",valence:"agr\xE9able",color:"#e86fb0",desc:"D\xE9sir et plaisir li\xE9s \xE0 la reproduction. Les messages des r\xE9cepteurs sensoriels (toucher) arrivent au cortex somesth\xE9sique ; l'hypothalamus, l'amygdale et le circuit de la r\xE9compense participent \xE0 la sensation de plaisir.",structures:["hypothalamus","amygdale","somesthesique","insula","accumbens","vta"],circuit:[["amygdale","hypothalamus"],["hypothalamus","pag"],["vta","accumbens"],["somesthesique","insula"]]},care:{name:"SOIN (CARE)",valence:"agr\xE9able",color:"#f2a65a",desc:"Tendresse, envie de prendre soin des autres (attachement parent\u2013enfant, amiti\xE9). Hypothalamus (aire pr\xE9optique), aire tegmentale ventrale, noyau accumbens, cortex cingulaire ant\xE9rieur.",structures:["hypothalamus","vta","accumbens","cingulaire_ant"],circuit:[["hypothalamus","vta"],["vta","accumbens"],["cingulaire_ant","hypothalamus"]]},panic:{name:"D\xC9TRESSE (PANIC/GRIEF)",valence:"d\xE9sagr\xE9able",color:"#5b7db1",desc:"Tristesse et d\xE9tresse de la s\xE9paration (sentiment de solitude). Cortex cingulaire ant\xE9rieur \u2192 thalamus/hypothalamus \u2192 SGPA.",structures:["cingulaire_ant","thalamus","hypothalamus","pag"],circuit:[["cingulaire_ant","thalamus"],["thalamus","hypothalamus"],["hypothalamus","pag"]]},play:{name:"JEU (PLAY)",valence:"agr\xE9able",color:"#2bb673",desc:"Joie du jeu social, du rire, des jeux de bagarre \xAB pour de faux \xBB. Thalamus, SGPA, cortex somesth\xE9sique (toucher) et circuit de la r\xE9compense.",structures:["thalamus","pag","somesthesique","accumbens","pfc_median"],circuit:[["pag","thalamus"],["thalamus","somesthesique"],["thalamus","accumbens"],["accumbens","pfc_median"]]}},hd=[["cerebellum","cervelet"],["brainstem","tronc c\xE9r\xE9bral"],["deep structures","structures profondes"],["hippocampus","hippocampe"],["amygdala","amygdale"],["nucleus accumbens","noyau accumbens"],["ventral tegmental area (VTA)","aire tegmentale ventrale (ATV)"],["pathway","voie (nerveuse)"],["slice","coupe"],["axial / coronal / sagittal","horizontale / frontale / sagittale"],["reward / seeking","r\xE9compense / recherche (motivation)"],["network","r\xE9seau"],["lobe","lobe"],["cortex","cortex"],["gyrus / sulcus","circonvolution / sillon"],["white matter / grey matter","substance blanche / substance grise"],["neurotransmitter","neurotransmetteur"],["receptor","r\xE9cepteur"],["synapse / synaptic cleft","synapse / fente synaptique"],["excitatory / inhibitory","excitateur / inhibiteur"],["left / right hemisphere","h\xE9misph\xE8re gauche / droit"],["medial / lateral","m\xE9dian (vers le milieu) / lat\xE9ral (vers l'ext\xE9rieur)"],["anterior / posterior","ant\xE9rieur (avant) / post\xE9rieur (arri\xE8re)"],["superior / inferior","sup\xE9rieur (haut) / inf\xE9rieur (bas)"],["fear / play / care","peur / jeu / soin"]]});var ki,dd,pd,zc=jt(()=>{ki={tag:{name:"Trouble anxieux g\xE9n\xE9ralis\xE9 (TAG)",short:"Anxi\xE9t\xE9 persistante",level:"B",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"Dans les mod\xE8les neurobiologiques de l'anxi\xE9t\xE9 chronique, le circuit d'alarme (amygdale, insula) est hyper-r\xE9actif, tandis que la r\xE9gulation par le cortex pr\xE9frontal m\xE9dian (\xAB frein \xBB) est moins efficace.",up:["amygdale","insula","locus_coeruleus"],down:["pfc_median","cingulaire_ant"],lenses:{circuit:"Amygdale et insula en suractivation (\u2191 alerte corporelle) ; frein du cortex pr\xE9frontal m\xE9dian et du cortex cingulaire ant\xE9rieur affaibli (\u2193 r\xE9gulation).",etudes:"M\xE9ta-analyses d'IRMf montrent en moyenne une r\xE9activit\xE9 accrue de l'amygdale face aux stimuli ambigus et une connectivit\xE9 pr\xE9fronto-amygdalienne r\xE9duite (niveau B : coh\xE9rent entre groupes, grande variabilit\xE9 individuelle).",symptomes:"Inqui\xE9tudes difficiles \xE0 contr\xF4ler, tension musculaire, vigilance excessive, fatigue, troubles du sommeil.",traitements:"Th\xE9rapies cognitivo-comportementales (TCC \u2014 entra\xEEnent la r\xE9gulation pr\xE9frontale), hygi\xE8ne du sommeil, parfois m\xE9dicaments agissant sur la s\xE9rotonine ou le GABA."}},tspt:{name:"Trouble de stress post-traumatique (TSPT)",short:"Stress post-traumatique",level:"A",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"Apr\xE8s un traumatisme, l'alarme (amygdale) reste en hypervigilance (\u2191), l'hippocampe contextualise moins bien la m\xE9moire du souvenir (\u2193 volume/fonction en moyenne), et le cortex pr\xE9frontal m\xE9dian peine \xE0 \xE9teindre la peur apprise (\u2193).",up:["amygdale","locus_coeruleus","insula"],down:["pfc_median","hippocampe"],lenses:{circuit:"Amygdale \u2191 (alerte imm\xE9diate), cortex pr\xE9frontal m\xE9dian \u2193 (extinction de la peur frein\xE9e), hippocampe \u2193 (difficult\xE9 \xE0 replacer le souvenir dans le pass\xE9 s\xE9curis\xE9).",etudes:"Mod\xE8le parmi les mieux r\xE9pliqu\xE9s en neuroimagerie clinique (niveau A pour le profil amygdale/pr\xE9frontal m\xE9dian, bien qu'aucun examen IRM ne permette un diagnostic individuel).",symptomes:"Reviviscences (flash-backs), \xE9vitement, hypervigilance, r\xE9actions de sursaut intenses.",traitements:"Psychoth\xE9rapies centr\xE9es sur le trauma (TCC, EMDR) pour retraiter le souvenir en s\xE9curit\xE9 ; accompagnement m\xE9dical si n\xE9cessaire."}},addiction:{name:"Circuit de la motivation d\xE9tourn\xE9 (addiction)",short:"D\xE9pendance (substance / comportement)",level:"A",disclaimer:"Note : dans The Folded Mind, l'addiction n'est pas list\xE9e dans les 10 diagnostics ; ce mod\xE8le illustre la voie dopamine / SEEKING conforme au programme de 3\xE8me.",circuitDesc:"Les drogues ou r\xE9compenses al\xE9atoires provoquent des pics anormaux de dopamine dans le noyau accumbens (depuis l'ATV). Avec la r\xE9p\xE9tition, le circuit se modifie (plasticit\xE9) : le \xAB vouloir \xBB augmente alors que le contr\xF4le pr\xE9frontal diminue (\u2193).",up:["vta","accumbens","caude","putamen"],down:["pfc_median","orbitofrontal"],lenses:{circuit:"Voie m\xE9solimbique ATV \u2192 noyau accumbens sur-sollicit\xE9e (\u2191 \xAB vouloir \xBB et conditionnement), striatum dorsal recrut\xE9 (habitudes automatiques), contr\xF4le orbitofrontal/pr\xE9frontal r\xE9duit (\u2193 frein sur l'impulsion).",etudes:"Neurobiologie de la d\xE9pendance solidement \xE9tablie chez l'animal et l'humain par imagerie TEP/IRM (niveau A sur le r\xF4le de la dopamine dans la saillance incitative : vouloir \u2260 aimer).",symptomes:"Perte de contr\xF4le, poursuite du comportement malgr\xE9 les cons\xE9quences n\xE9gatives, besoin irr\xE9pressible (craving), tol\xE9rance.",traitements:"Pr\xE9vention (lois limitant l'exposition des mineurs), accompagnement psychosocial, th\xE9rapies, substituts ou traitements m\xE9dicamenteux selon les substances."}},depression:{name:"\xC9pisode d\xE9pressif caract\xE9ris\xE9 (mod\xE8le circuit)",short:"D\xE9pression (mod\xE8le)",level:"B",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"R\xE9activit\xE9 moindre du circuit de la r\xE9compense (noyau accumbens \u2193 : perte de plaisir/motivation) et activit\xE9 \xE9lev\xE9e du r\xE9seau du mode par d\xE9faut / cortex cingulaire ant\xE9rieur sous-g\xE9nual (\u2191 ruminations).",up:["cingulaire_ant","cingulaire_post","amygdale"],down:["accumbens","prefrontal"],lenses:{circuit:"Noyau accumbens \u2193 (anh\xE9donie, baisse de l'\xE9lan), cortex cingulaire ant\xE9rieur et r\xE9seau par d\xE9faut \u2191 (ruminations), cortex pr\xE9frontal dorsolat\xE9ral \u2193 (effort cognitif plus difficile).",etudes:"R\xE9sultats convergents sur les circuits r\xE9compense/ruminations (niveau B : les m\xE9canismes sont multiples et h\xE9t\xE9rog\xE8nes selon les personnes).",symptomes:"Tristesse persistante, perte d'int\xE9r\xEAt, fatigue, troubles du sommeil et de la concentration.",traitements:"Psychoth\xE9rapies, activit\xE9 physique r\xE9guli\xE8re, traitements antid\xE9presseurs (modulant s\xE9rotonine/noradr\xE9naline) et soutien social."}},tdah:{name:"Trouble du d\xE9ficit de l'attention (TDAH)",short:"TDAH (mod\xE8le)",level:"B",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"Particularit\xE9s de maturation et de modulation dopaminergique/noradr\xE9nergique dans les r\xE9seaux fronto-striataux (cortex pr\xE9frontal \u2194 noyau caud\xE9) et difficult\xE9 \xE0 mettre en veille le r\xE9seau du mode par d\xE9faut.",up:["cingulaire_post"],down:["prefrontal","caude","locus_coeruleus"],lenses:{circuit:"Boucles cortex pr\xE9frontal \u2013 noyau caud\xE9 \u2013 cervelet moins stabilis\xE9es (\u2193 r\xE9gulation attentionnelle) ; maintien du r\xE9seau de contr\xF4le plus exigeant face aux distractions.",etudes:"\xC9tudes longitudinales d'IRM structurelle et fonctionnelle \xE0 large cohorte (niveau B : diff\xE9rences statistiques de groupe, inutilisables comme test diagnostique individuel).",symptomes:"Difficult\xE9 \xE0 maintenir l'attention, impulsivit\xE9, agitation motrice selon les profils.",traitements:"Am\xE9nagements scolaires et comportementaux, accompagnement \xE9ducatif, parfois traitements modulant dopamine et noradr\xE9naline."}}},dd={A:{label:"Niveau A \xB7 Solide",color:"#2bb673",desc:"Confirm\xE9 par de nombreuses \xE9tudes convergentes et des m\xE9ta-analyses r\xE9pliqu\xE9es (ex. : r\xF4le de l'hippocampe dans la m\xE9moire \xE9pisodique ; nature chimique de la synapse)."},B:{label:"Niveau B \xB7 Mod\xE9r\xE9",color:"#f39c34",desc:"S\xE9rieux et coh\xE9rent dans plusieurs \xE9tudes, mais avec des variations selon les personnes ou des limites m\xE9thodologiques (ex. : \xE9tudes sur la dur\xE9e du sommeil chez des groupes d'\xE9l\xE8ves)."},C:{label:"Niveau C \xB7 Pr\xE9liminaire / Mod\xE8le",color:"#d64541",desc:"Hypoth\xE8se th\xE9orique ou r\xE9sultats encore d\xE9battus/indirects (ex. : d\xE9coupage exact des 7 syst\xE8mes de Panksepp transpos\xE9 directement \xE0 l'humain)."}},pd=[{id:"lib_effort_10pct",title:"Effort musculaire et r\xE9futation du neuromythe des \xAB 10 % du cerveau \xBB",level:"A",source:"Inserm Canal D\xE9tox ; CNRS ; sujet DNB M\xE9tropole 2018 (18GENSCMEAG3)",summary:"Le cerveau p\xE8se ~2 % du corps mais consomme ~20 % de l'\xE9nergie totale (O\u2082 + glucose). \xC0 l'effort (70 \u2192 180 bpm), c\u0153ur, poumons, cortex moteur, aires sensorielles et cervelet coop\xE8rent en r\xE9seau.",activite:"A1"},{id:"lib_audition",title:"Audition, \xE9chelle des d\xE9cibels et l\xE9sions des cellules cili\xE9es",level:"A",source:"OMS ; DNB Am\xE9rique du Nord juin 2018 (audiogramme M. X) ; DNB Pro 2022",summary:"Chaque +3 dB divise par 2 la dur\xE9e d'\xE9coute tol\xE9rable sans risque (seuil 85 dB, douleur 120 dB). Les cellules cili\xE9es d\xE9truites ne se renouvellent pas, privant le cortex auditif (lobe temporal) des aigus.",activite:"A2"},{id:"lib_securite_routiere",title:"Temps de r\xE9action, distracteurs au volant et r\xE9flexe m\xE9dullaire",level:"A",source:"S\xE9curit\xE9 routi\xE8re France ; manuels SVT Cycle 4",summary:"\xC0 50 km/h, un conducteur attentif parcourt d\xE9j\xE0 15 m durant ~1 s avant de freiner ; un SMS (~5 s) fait rouler 70\u201383 m \xE0 l'aveugle (risque \xD723). Le mouvement volontaire passe par le cortex, contrairement au r\xE9flexe m\xE9dullaire.",activite:"A3"},{id:"lib_synapse",title:"Neurones s\xE9par\xE9s, exp\xE9rience de Claude Bernard et synapse chimique (~20 nm)",level:"A",source:"Claude Bernard (1856) ; Golgi & Cajal (Nobel 1906) ; Lelivrescolaire.fr SVT 3e",summary:"Les neurones communiquent via une fente synaptique (~20 nm) par neurotransmetteurs et r\xE9cepteurs sp\xE9cifiques. Le curare bloque la jonction neurone\u2013muscle sans d\xE9truire ni le nerf ni le muscle.",activite:"A4"},{id:"lib_sommeil_enclass",title:"Sommeil des coll\xE9giens, smartphones le soir et consolidation mn\xE9sique",level:"A",source:"EnCLASS 2024 (OFDT/Sant\xE9 publique France) ; ANSES 13 janv. 2026 ; Scoville & Milner 1957 ; Gais, Lucas & Born 2006",summary:"26,7 % des coll\xE9giens sont en dette de sommeil et 58 % des 12\u201317 ans utilisent les r\xE9seaux sociaux chaque jour. Les exp\xE9riences contr\xF4l\xE9es prouvent que le sommeil consolide activement les traces mn\xE9siques dans l'hippocampe.",activite:"A5 / DNB3"},{id:"lib_recompense_puffs",title:"Circuit de la r\xE9compense, puffs \xE0 la nicotine et maturation pr\xE9frontale",level:"A",source:"EnCLASS 2024 ; Loi n\xB0 2025-175 (24 f\xE9v. 2025) ; Lelivrescolaire.fr Doc. 8 ; Volkow et al.",summary:"Nicotine et boucles de r\xE9compense al\xE9atoires d\xE9tournent la voie dopaminergique ATV \u2192 noyau accumbens (~82\u201388 UA), tandis que le cortex pr\xE9frontal r\xE9gulateur m\xFBrit jusqu'\xE0 ~25 ans.",activite:"A6"}]});var fd,tl,md=jt(()=>{fd={intro:"Cette application articule l'exploration 3D r\xE9elle (IRM MNI152 + parcellation corticale/sous-corticale) avec 6 activit\xE9s progressives de Cycle 4 et 1 sujet type DNB (10 pts), ancr\xE9s dans des sources contemporaines et historiques v\xE9rifi\xE9es.",niveaux:[{niveau:"5e (D\xE9but de cycle)",place:"A1 \xB7 Effort & 10 % / A2 \xB7 Audition",attendus:"Relier effort musculaire et adaptations cardiaque, respiratoire et nerveuse. D\xE9couvrir le r\xF4le int\xE9grateur du cerveau (lobes, cervelet) et la pr\xE9vention auditive, sans d\xE9velopper l'\xE9chelle cellulaire."},{niveau:"4e (Milieu de cycle)",place:"A2 \xB7 Int\xE9gration / A3 \xB7 R\xE9flexe & route",attendus:"Distinguer mouvement volontaire et r\xE9flexe m\xE9dullaire, localiser les voies sensorielles et motrices (controlat\xE9ralit\xE9), expliquer le temps de r\xE9action et ses perturbations (t\xE9l\xE9phone, alcool)."},{niveau:"3e (Fin de cycle)",place:"A4 \xB7 Synapse / A5 \xB7 Sommeil / A6 \xB7 Puffs & DNB 3",attendus:"Expliquer le message nerveux \xE0 l'\xE9chelle cellulaire et mol\xE9culaire (neurone, synapse, neurotransmetteurs), la plasticit\xE9 (sommeil/m\xE9moire) et les m\xE9canismes des conduites addictives."}],gardefous:["Donn\xE9es authentiques uniquement : chaque chiffre cit\xE9 provient de sources nomm\xE9es et dat\xE9es (Inserm, OMS, ANSES, EnCLASS/OFDT, S\xE9curit\xE9 routi\xE8re, DNB officiels, exp\xE9riences historiques).","Sobri\xE9t\xE9 cognitive : 3 documents maximum par activit\xE9, 4 \xE0 5 mots de vocabulaire essentiels, une question cibl\xE9e par document.","Distinction faits scientifiques vs croyances/neuromythes (\xAB utiliser 10 % du cerveau \xBB, \xAB corr\xE9lation = causalit\xE9 \xBB, \xAB l'oreille s'habitue au volume fort \xBB)."]},tl=[{id:"A1",code:"A1",niveau:"5e",semaine:"S\xE9ance 1\u20132",duree:"45 min",titre:"Effort sportif et neuromythe des \xAB 10 % du cerveau \xBB",type:"D\xE9marche d'investigation \xB7 Esprit critique",accroche:"Une vid\xE9o virale sur TikTok pr\xE9tend que \xAB les champions utilisent plus que les 10 % habituels de leur cerveau \xBB. Dans sa chronique Canal D\xE9tox, l'Inserm d\xE9monte cette id\xE9e re\xE7ue gr\xE2ce \xE0 l'imagerie et au bilan \xE9nerg\xE9tique.",sourceAccroche:"Inserm Canal D\xE9tox ; sujet DNB M\xE9tropole 2018 (18GENSCMEAG3)",problematique:"Comment les syst\xE8mes nerveux, cardiaque et respiratoire collaborent-ils lors d'un effort \u2014 et utilise-t-on vraiment \xAB seulement 10 % \xBB de notre cerveau ?",obstacle:"Croire que seul le muscle travaille pendant le sport et que 90 % du cerveau reste \xAB \xE9teint \xBB au repos.",rupture:"Le cerveau repr\xE9sente ~2 % de la masse du corps mais consomme ~20 % de son \xE9nergie, et m\xEAme un effort simple coordonne plusieurs r\xE9gions c\xE9r\xE9brales, le c\u0153ur et les poumons.",vocab:[{term:"Syst\xE8me nerveux",def:"Ensemble form\xE9 par le cerveau, la moelle \xE9pini\xE8re et les nerfs qui coordonne le corps."},{term:"Rythme cardiaque",def:"Nombre de battements du c\u0153ur par minute (bpm), qui augmente \xE0 l\u2019effort."},{term:"Cortex moteur",def:"Zone du lobe frontal qui d\xE9clenche les mouvements volontaires des muscles."},{term:"Cervelet",def:"Organe situ\xE9 \xE0 l\u2019arri\xE8re qui assure l\u2019\xE9quilibre et la pr\xE9cision des gestes."}],scenario3d:[{label:"1. R\xE9seau somatomoteur (bouger & sentir)",action:{colorMode:"networks",network:2,view:"lat_L",deep:!1}},{label:"2. Isoler le cervelet (\xE9quilibre & posture)",action:{isolate:"cervelet",view:"post",deep:!1}},{label:"3. Coupe IRM r\xE9elle + cortex moteur",action:{isolate:"moteur",view:"mri_34",mri:{open:!0,axis:"sag",sliceMm:-32,clip:!0,overlay:!0}}}],docs:[{num:"Doc. 1",title:"Un organisme mobilis\xE9 pendant une course",type:"tableau",source:"DNB M\xE9tropole 2018 (18GENSCMEAG3) \u2014 Mesures sur tapis roulant",text:"Pour alimenter les muscles en dioxyg\xE8ne et en glucose pendant l'effort, le syst\xE8me nerveux adapte automatiquement le c\u0153ur et les poumons.",table:{headers:["Situation","Rythme cardiaque","Besoin musculaire"],rows:[["Repos avant la course","70 bpm","Faible (apport de base)"],["Effort maximal sur tapis","180 bpm","Tr\xE8s \xE9lev\xE9 (O\u2082 + glucose)"]]},legend:"Le c\u0153ur passe de 70 \xE0 180 battements/min sous le contr\xF4le des centres nerveux."},{num:"Doc. 2",title:"Le co\xFBt \xE9nerg\xE9tique r\xE9el du cerveau",type:"texte",source:"Inserm Canal D\xE9tox & CNRS (neuroimagerie)",text:"Le cerveau ne p\xE8se qu'environ 2 % de la masse totale du corps (~1,35 kg chez l'adulte), mais il consomme \xE0 lui seul pr\xE8s de 20 % du dioxyg\xE8ne et du glucose utilis\xE9s par l'organisme, m\xEAme lorsque nous sommes immobiles ou endormis. Si 90 % du cerveau \xE9tait inutile, aucune l\xE9sion \xE9tendue n'aurait d'effet, ce que d\xE9ment la m\xE9decine.",legend:"Un organe aussi \xE9nergivore travaille en permanence en r\xE9seaux distribu\xE9s."},{num:"Doc. 3",title:"Observer les r\xE9gions actives lors d\u2019un geste sportif",type:"3d",source:"Atlas 3D MNI152 (IRM & parcellation c\xE9r\xE9brale)",text:"Pendant une course ou un dribble, le cortex moteur (lobe frontal) envoie l'ordre aux muscles, le cortex somesth\xE9sique re\xE7oit les appuis du pied et le cervelet ajuste l'\xE9quilibre en continu.",legend:"Active les boutons 3D ci-dessus pour observer l'ensemble des zones sollicit\xE9es."}],voie1:{consigne:"Un camarade soutient que courir \xAB ne demande que des jambes \xBB et qu'on \xAB n'utilise que 10 % de son cerveau \xBB. R\xE9dige une r\xE9ponse argument\xE9e (6 \xE0 8 lignes) mobilisant les Docs 1 \xE0 3 pour corriger ces deux id\xE9es re\xE7ues.",fields:[{id:"a1_tache",label:"R\xE9ponse scientifique argument\xE9e (Docs 1, 2 et 3) :",rows:6,placeholder:"Lors d'un effort, les muscles ont besoin... (citer 70 \u2192 180 bpm, 2 % vs 20 %, et au moins deux zones c\xE9r\xE9brales)..."}]},voie2:{consigne:"R\xE9ponds dans l\u2019ordre en t\u2019appuyant sur un seul document \xE0 la fois :",fields:[{id:"a1_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Calculer l\u2019augmentation du rythme cardiaque entre le repos et l\u2019effort maximal, et indiquer pourquoi les muscles en ont besoin.",rows:2,placeholder:"De 70 bpm \xE0 180 bpm (+110 bpm), pour apporter plus de..."},{id:"a1_q2",label:"Q2 (Doc. 2 \xB7 Argumenter) : \xC0 l\u2019aide de deux valeurs chiffr\xE9es, expliquer pourquoi l\u2019affirmation \xAB 90 % du cerveau est inactif \xBB est fausse.",rows:2,placeholder:"Le cerveau p\xE8se environ 2 % du corps mais consomme 20 % de..."},{id:"a1_q3",label:"Q3 (Doc. 3 \xB7 Observer en 3D) : Citer deux structures c\xE9r\xE9brales qui coop\xE8rent pendant un mouvement sportif et leur r\xF4le.",rows:2,placeholder:"Le cortex moteur commande... et le cervelet assure..."}]},mdl:{verbeAction:"Calculer \xB7 Argumenter \xB7 Citer",marqueurs:["donc","car","en effet","en revanche"],structure:"Constat chiffr\xE9 (Doc. 1/2) \u2192 Cause biologique (O\u2082/\xE9nergie/r\xE9seaux) \u2192 R\xE9futation du mythe."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q1, fais la soustraction : valeur \xE0 l\u2019effort \u2212 valeur au repos. Pour Q2, cherche les deux pourcentages dans le texte du Doc. 2."},{niv:"Niveau 2 \xB7 Indice",txt:"Compare 2 % de la masse corporelle avec 20 % de la consommation en O\u2082 et glucose : c\u2019est 10 fois sup\xE9rieur \xE0 son poids !"},{niv:"Niveau 3 \xB7 Notion",txt:"Compl\xE8te : \xAB Pendant la course, le rythme cardiaque passe de ___ \xE0 ___ bpm pour nourrir ___. Le cerveau, qui p\xE8se ___ % du corps mais consomme ___ % de l\u2019\xE9nergie, mobilise ___ et ___ : le mythe des 10 % est donc faux. \xBB"}],avantDeRendre:["J'ai cit\xE9 les valeurs exactes des Docs 1 et 2 (70 \u2192 180 bpm ; 2 % et 20 %).","J'ai nomm\xE9 au moins deux r\xE9gions observ\xE9es en 3D (cortex moteur, cervelet).","J'ai distingu\xE9 croyance populaire (mythe des 10 %) et fait scientifique v\xE9rifi\xE9."],traceEcrite:"Lors d'un effort musculaire, les rythmes cardiaque (ex. 70 \u2192 180 bpm) et respiratoire augmentent sous contr\xF4le nerveux pour approvisionner les muscles en dioxyg\xE8ne et nutriments. Le mythe des \xAB 10 % du cerveau \xBB est faux : pesant ~2 % du corps, le cerveau consomme ~20 % de l'\xE9nergie totale et coordonne le geste via plusieurs r\xE9seaux (cortex moteur, aires sensorielles, cervelet).",notions:["Effort musculaire","Syst\xE8mes nerveux, cardiaque et respiratoire","R\xE9seaux c\xE9r\xE9braux","Fait scientifique vs neuromythe"],lsu:["D4 \xB7 Exploiter des mesures (bpm)","D1.3 \xB7 Argumenter contre une id\xE9e re\xE7ue","D3 \xB7 Relier effort et besoins des organes"],fds:"Faire des sciences : distinguer un neuromythe viral d'un fait mesur\xE9 par bilan \xE9nerg\xE9tique et imagerie.",prof:{corrige:["Q1 : Le rythme cardiaque passe de 70 bpm \xE0 180 bpm (+110 bpm, soit \xD72,57). Cette acc\xE9l\xE9ration augmente le d\xE9bit sanguin pour apporter davantage de dioxyg\xE8ne (O\u2082) et de glucose aux muscles actifs.","Q2 : Le cerveau ne repr\xE9sente que ~2 % de la masse corporelle mais consomme ~20 % du dioxyg\xE8ne et du glucose totaux : il fonctionne en permanence en r\xE9seaux (d'ailleurs toute l\xE9sion c\xE9r\xE9brale \xE9tendue entra\xEEne des troubles observables).","Q3 : Le cortex moteur (lobe frontal) d\xE9clenche la commande volontaire vers les muscles, tandis que le cervelet r\xE9gule l'\xE9quilibre et la pr\xE9cision du geste (avec les aires sensorielles pour ajuster l'appui)."],bareme:"Q1 : 3 pts (relev\xE9 chiffr\xE9 1,5 + besoin O\u2082/glucose 1,5) \xB7 Q2 : 3,5 pts (2 % vs 20 % = 2 + r\xE9futation 1,5) \xB7 Q3 : 2,5 pts (2 structures et r\xF4les) \xB7 MDL & soin : 1 pt = 10 pts.",erreursFrequentes:["Oublier le dioxyg\xE8ne/glucose et dire seulement \xAB le c\u0153ur bat plus vite parce qu'on court \xBB.","Confondre l'utilisation simultan\xE9e (par r\xE9seaux) et la capacit\xE9 maximale instantan\xE9e."],lsu:{MI:"Rel\xE8ve un chiffre mais n'explique pas le lien muscle\u2013sang\u2013cerveau.",MF:"Identifie l'augmentation cardiaque (70 \u2192 180 bpm) et cite une r\xE9gion c\xE9r\xE9brale, sans chiffrer la r\xE9futation du Doc. 2.",MS:"Relie correctement l'adaptation cardiaque aux besoins musculaires et r\xE9fute le mythe des 10 % avec les deux pourcentages.",TBM:"Articule fluidement \xE9chelles de l'organisme (c\u0153ur/muscles/cerveau), chiffres exacts et critique argument\xE9e du neuromythe."}}},{id:"A2",code:"A2",niveau:"5e / 4e",semaine:"S\xE9ance 3\u20134",duree:"50 min",titre:"Concerts, \xE9couteurs : comment prot\xE9ger son audition ?",type:"Exploitation de donn\xE9es \xB7 \xC9ducation \xE0 la sant\xE9",accroche:"L'OMS alerte : plus d'un milliard de jeunes (12\u201335 ans) risquent une perte auditive pr\xE9matur\xE9e \xE0 cause d'\xE9couteurs r\xE9gl\xE9s trop fort ou de concerts d\xE9passant les seuils biologiques.",sourceAccroche:"OMS ; DNB Am\xE9rique du Nord juin 2018 ; DNB Pro 2022 (22PROSCMEAG1)",problematique:"Comment le cerveau transforme-t-il les sons per\xE7us en audition \u2014 et \xE0 partir de quel seuil le bruit d\xE9truit-il irr\xE9versiblement l'oreille ?",obstacle:"Penser que l'oreille \xAB s'habitue \xBB au volume \xE9lev\xE9 ou que les acouph\xE8nes finissent toujours par dispara\xEEtre sans d\xE9g\xE2t.",rupture:"L'oreille capte les vibrations gr\xE2ce \xE0 des cellules cili\xE9es qui ne se renouvellent pas ; une exposition excessive d\xE9truit ces capteurs et prive d\xE9finitivement le cortex auditif d'une partie des fr\xE9quences.",vocab:[{term:"R\xE9cepteur sensoriel",def:"Cellule sp\xE9cialis\xE9e (ici cellules cili\xE9es de l\u2019oreille) qui capte un stimulus et cr\xE9e un message nerveux."},{term:"Cortex auditif",def:"Zone du lobe temporal qui re\xE7oit et interpr\xE8te les messages nerveux des sons."},{term:"D\xE9cibel (dB)",def:"Unit\xE9 mesurant l\u2019intensit\xE9 sonore ; le seuil de risque d\xE9bute \xE0 85 dB."},{term:"L\xE9sion irr\xE9versible",def:"Destruction d\xE9finitive de cellules cili\xE9es qui ne sont pas remplac\xE9es."}],scenario3d:[{label:"1. Isoler le cortex auditif (lobe temporal)",action:{isolate:"auditif",view:"lat_L",deep:!1}},{label:"2. Comparer avec le cortex visuel (lobe occipital)",action:{isolate:"visuel",view:"post",deep:!1}},{label:"3. Ouvrir le doc. interactif Audition & Bruit (DNB)",action:{doc:"audition"}}],docs:[{num:"Doc. 1",title:"Du capteur sensoriel au cerveau",type:"3d",source:"Atlas 3D MNI152 \u2014 Aires sensorielles corticales",text:"Chaque organe sensoriel envoie des messages nerveux sp\xE9cifiques vers une r\xE9gion d\xE9di\xE9e du cortex : le nerf auditif relie l'oreille au cortex auditif (lobe temporal), tandis que le nerf optique relie l'\u0153il au cortex visuel (lobe occipital). Le cerveau int\xE8gre ensemble ces informations multiples.",legend:"Compare sur le mod\xE8le 3D le cortex auditif (lat\xE9ral temporal) et le cortex visuel (post\xE9rieur occipital)."},{num:"Doc. 2",title:"\xC9chelle officielle des niveaux sonores",type:"tableau",source:"OMS & sujet DNB Pro 2022 (22PROSCMEAG1)",text:"Le risque d\xE9pend \xE0 la fois du niveau sonore (en dB) et de la dur\xE9e d'\xE9coute : chaque augmentation de +3 dB double l'\xE9nergie sonore et divise par 2 la dur\xE9e tol\xE9rable sans danger.",table:{headers:["Niveau sonore","Exemple courant","Effet biologique"],rows:[["60 dB","Conversation calme","Aucun danger"],["85 dB","Trafic dense \xB7 Seuil d\u2019alerte","Seuil de risque si dur\xE9e prolong\xE9e"],["105\u2013110 dB","Concert / \xE9couteurs au max","Danger grave en quelques minutes"],["\u2265 120 dB","Seuil de douleur","L\xE9sions irr\xE9versibles imm\xE9diates"]]},legend:"Les \xE9couteurs r\xE9gl\xE9s au maximum atteignent souvent 100 \xE0 110 dB."},{num:"Doc. 3",title:"Audiogramme d\u2019un travailleur expos\xE9 au bruit (M. X, 60 ans)",type:"observation",source:"DNB Am\xE9rique du Nord juin 2018 \u2014 T\xE9moin 60 ans vs M. X (chaudronnier)",text:"Le seuil normal de perte auditive est inf\xE9rieur \xE0 20 dB. Chez un t\xE9moin de 60 ans non expos\xE9 au bruit fort, la perte \xE0 1 000 Hz n'est que d'environ 5 dB. Chez M. X (expos\xE9 sans protection), l'audition est proche du t\xE9moin dans les graves (125\u2013500 Hz), mais la perte atteint ~30 dB \xE0 1 000 Hz et s'aggrave nettement dans les aigus (2 000\u20134 000 Hz) suite \xE0 la destruction des cellules cili\xE9es.",legend:"Ouvre le document interactif \xAB Audition & Bruit \xBB pour lire la courbe compl\xE8te."}],voie1:{consigne:"Tu r\xE9diges un message de pr\xE9vention pour l'entr\xE9e d'un festival lyc\xE9en (6 \xE0 8 lignes). Explique le trajet de l'information sonore jusqu'au cerveau et justifie deux r\xE8gles de protection \xE0 l'aide des seuils et de l'audiogramme de M. X.",fields:[{id:"a2_tache",label:"Affiche argument\xE9e de pr\xE9vention auditive (Docs 1, 2 et 3) :",rows:6,placeholder:"Les sons capt\xE9s par l'oreille sont transmis... Au-dessus de 85 dB (et jusqu'\xE0 110 dB en concert), les cellules cili\xE9es..."}]},voie2:{consigne:"R\xE9ponds \xE9tape par \xE9tape en exploitant chaque document :",fields:[{id:"a2_q1",label:"Q1 (Doc. 1 \xB7 Localiser) : Nommer le lobe et la zone du cerveau qui re\xE7oivent les messages nerveux auditifs, puis indiquer par quoi ils voyagent depuis l\u2019oreille.",rows:2,placeholder:"Ils voyagent par le nerf... jusqu\u2019au cortex... situ\xE9 dans le lobe..."},{id:"a2_q2",label:"Q2 (Doc. 2 \xB7 Relever & comparer) : Citer le seuil de risque et expliquer pourquoi \xE9couter \xE0 110 dB est bien plus dangereux qu\u2019\xE0 85 dB.",rows:2,placeholder:"Le seuil de risque est 85 dB ; chaque +3 dB divise par 2..."},{id:"a2_q3",label:"Q3 (Doc. 3 \xB7 Interpr\xE9ter) : Comparer la perte \xE0 1 000 Hz de M. X et du t\xE9moin, puis expliquer pourquoi cette perte de M. X est d\xE9finitive.",rows:2,placeholder:"Le t\xE9moin perd ~5 dB contre ~30 dB pour M. X car les cellules cili\xE9es..."}]},mdl:{verbeAction:"Localiser \xB7 Comparer \xB7 Justifier",marqueurs:["tandis que","par cons\xE9quent","car","notamment"],structure:"Trajet nerf \u2192 cortex auditif + Comparaison chiffr\xE9e t\xE9moin/M. X + R\xE8gle de pr\xE9vention."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q3, compare toujours deux valeurs \xE0 la m\xEAme fr\xE9quence (1 000 Hz) avant de conclure : valeur du t\xE9moin vs valeur de M. X."},{niv:"Niveau 2 \xB7 Indice",txt:"Seuil normal = < 20 dB de perte. \xC0 1 000 Hz : t\xE9moin \u2248 5 dB (normal), M. X \u2248 30 dB (d\xE9pass\xE9 \u2192 surdit\xE9 partielle dans les aigus)."},{niv:"Niveau 3 \xB7 Notion",txt:"L\u2019oreille contient des cellules cili\xE9es qui transforment le son en message nerveux vers le lobe temporal ; d\xE9truites au-del\xE0 de 85\u2013120 dB, elles ne se renouvellent pas."}],avantDeRendre:["J'ai nomm\xE9 le nerf auditif et le cortex auditif (lobe temporal).","J'ai cit\xE9 les seuils 85 dB et 120 dB (et les valeurs 5 dB vs 30 dB \xE0 1 000 Hz).","J'ai propos\xE9 un geste concret : baisser le volume, faire des pauses ou porter des bouchons d'oreille."],traceEcrite:"L'oreille transforme les vibrations sonores en messages nerveux conduits par le nerf auditif jusqu'au cortex auditif (lobe temporal), o\xF9 le cerveau les int\xE8gre avec nos autres sens. Au-del\xE0 de 85 dB (et d\xE8s quelques minutes \xE0 110 dB ou 120 dB), le bruit d\xE9truit d\xE9finitivement les cellules cili\xE9es non renouvelables : limiter le volume, la dur\xE9e et porter des protections pr\xE9serve l'audition.",notions:["R\xE9ception et int\xE9gration c\xE9r\xE9brale","Nerf sensitif et cortex sensoriel","Seuil sonore et pr\xE9vention"],lsu:["D1.3 \xB7 Lire un graphique / tableau d\u2019audiogramme","D3 \xB7 Adopter un comportement responsable pour la sant\xE9"],fds:"Faire des sciences : utiliser la notion de seuil et de dur\xE9e d'exposition pour fonder une r\xE8gle de s\xE9curit\xE9.",prof:{corrige:["Q1 : Les messages nerveux auditifs voyagent par le nerf auditif jusqu'au cortex auditif, situ\xE9 dans le lobe temporal.","Q2 : Le seuil de risque d\xE9bute \xE0 85 dB (douleur \xE0 120 dB). \xC0 110 dB (+25 dB au-dessus du seuil), comme chaque +3 dB divise par 2 la dur\xE9e tol\xE9rable, la dur\xE9e sans risque tombe \xE0 quelques minutes seulement.","Q3 : \xC0 1 000 Hz, le t\xE9moin a une perte d'environ 5 dB (audition normale < 20 dB), tandis que M. X atteint ~30 dB de perte (surdit\xE9 nette dans les m\xE9diums/aigus). C'est irr\xE9versible car les cellules cili\xE9es d\xE9truites ne se r\xE9g\xE9n\xE8rent pas."],bareme:"Q1 : 2,5 pts \xB7 Q2 : 3 pts (+3 dB / seuils) \xB7 Q3 : 3,5 pts (comparaison 5 vs 30 dB + cellules cili\xE9es non renouvelables) \xB7 MDL : 1 pt = 10 pts.",erreursFrequentes:["Dire \xAB le cerveau est ab\xEEm\xE9 par le bruit \xBB alors que ce sont les r\xE9cepteurs de l'oreille interne (cellules cili\xE9es) qui sont d\xE9truits.","Lire la perte auditive \xE0 l'envers (penser que 30 dB est \xAB mieux \xBB que 5 dB)."],lsu:{MI:"Rep\xE8re un seuil du tableau mais situe mal l'organe atteint.",MF:"Nomme le lobe temporal et le seuil 85 dB, mais ne compare pas les valeurs t\xE9moin/M. X.",MS:"Explique le trajet nerf auditif \u2192 lobe temporal et exploite l'audiogramme avec les seuils exacts.",TBM:"R\xE9dige une pr\xE9vention rigoureuse expliquant la loi +3 dB, les cellules cili\xE9es et la perte irr\xE9versible."}}},{id:"A3",code:"A3",niveau:"4e",semaine:"S\xE9ance 5\u20136",duree:"50 min",titre:"T\xE9l\xE9phone au volant : r\xE9flexe, commande volontaire et temps de r\xE9action",type:"Exp\xE9rimentation \xB7 S\xE9curit\xE9 routi\xE8re",accroche:"Selon la S\xE9curit\xE9 routi\xE8re, lire un SMS pendant ~5 secondes \xE0 50 km/h revient \xE0 rouler 70 \xE0 83 m\xE8tres \xAB \xE0 l'aveugle \xBB. Pourtant, chacun pense \xAB freiner tout de suite \xBB si un pi\xE9ton traverse.",sourceAccroche:"S\xE9curit\xE9 routi\xE8re France \u2014 Distracteurs au volant & alcool",problematique:"Pourquoi aucun freinage n'est-il instantan\xE9 devant un danger \u2014 et en quoi un mouvement volontaire diff\xE8re-t-il d'un r\xE9flexe ?",obstacle:"Croire que le temps de r\xE9action vaut 0 s (\xAB j'ai de bons r\xE9flexes \xBB) et confondre freinage volontaire et r\xE9flexe m\xE9dullaire.",rupture:"Tout message nerveux circule \xE0 vitesse finie de l'\u0153il aux centres nerveux puis aux muscles ; un SMS ou l'alcool saturent le traitement c\xE9r\xE9bral, contrairement au r\xE9flexe court qui passe par la moelle \xE9pini\xE8re.",vocab:[{term:"Mouvement volontaire",def:"Action d\xE9cid\xE9e apr\xE8s perception : le message traverse les cortex visuel puis moteur (cerveau)."},{term:"R\xE9flexe",def:"R\xE9ponse rapide et involontaire qui passe par la moelle \xE9pini\xE8re sans attendre l\u2019analyse du cerveau."},{term:"Moelle \xE9pini\xE8re",def:"Centre nerveux log\xE9 dans la colonne vert\xE9brale qui relaie les messages et commande les r\xE9flexes."},{term:"Temps de r\xE9action",def:"Dur\xE9e entre la perception d\u2019un danger et le d\xE9but de l\u2019action musculaire (~1 s au volant)."}],scenario3d:[{label:"1. Cortex moteur droit / gauche (commande controlat\xE9rale)",action:{isolate:"moteur",view:"lat_R",deep:!1}},{label:"2. Tronc c\xE9r\xE9bral sous verre (relais vers moelle \xE9pini\xE8re)",action:{isolate:"tronc",view:"ant",deep:!0}},{label:"3. Doc. interactif Moelle \xE9pini\xE8re & chronom\xE8tre R\xE9flexe",action:{doc:"reflexe"}}],docs:[{num:"Doc. 1",title:"Donn\xE9es de la S\xE9curit\xE9 routi\xE8re sur le temps de r\xE9action",type:"tableau",source:"S\xE9curit\xE9 routi\xE8re France",text:"Un conducteur repos\xE9 met en moyenne ~1 seconde pour r\xE9agir (distance parcourue avant m\xEAme de toucher le frein : 15 m \xE0 50 km/h, 24 m \xE0 80 km/h). Les distracteurs allongent ce d\xE9lai ou d\xE9tournent le regard.",table:{headers:["Situation au volant","Impact mesur\xE9","Risque d\u2019accident"],rows:[["Conducteur sobre et attentif","Temps moyen ~1 s (15 m \xE0 50 km/h)","R\xE9f\xE9rence (\xD71)"],["Appel t\xE9l\xE9phonique","Temps de r\xE9action +46 %","\xD73"],["Lire / \xE9crire un SMS (~5 s)","Temps +37 % \xB7 70\u201383 m \xE0 l\u2019aveugle","\xD723"],["Alcool\xE9mie positive","Temps augment\xE9 d\u2019au moins +13 %","Sur-risque majeur"]]},legend:"Pendant les ~5 s d\u2019un SMS \xE0 50 km/h, aucun freinage ne peut m\xEAme commencer."},{num:"Doc. 2",title:"Comparer deux trajets nerveux en classe",type:"experience",source:"Protocole classe (test de la r\xE8gle / chronom\xE8tre visuel)",text:"Pour un arr\xEAt volontaire devant un feu rouge, le message part de l'\u0153il, rejoint le cortex visuel (analyse), puis le cortex moteur (d\xE9cision), descend par le tronc c\xE9r\xE9bral et la moelle \xE9pini\xE8re vers les nerfs moteurs du pied (~0,25 \xE0 1 s). \xC0 l'inverse, retirer sa main d'un objet br\xFBlant est un r\xE9flexe : le message va du capteur cutan\xE9 \xE0 la moelle \xE9pini\xE8re, qui renvoie aussit\xF4t l'ordre au muscle avant m\xEAme la prise de conscience.",legend:"Teste toi-m\xEAme ton temps de r\xE9action visuel dans le doc. \xAB R\xE9flexe \xBB ci-dessus."},{num:"Doc. 3",title:"Un croisement gauche\u2013droite dans le tronc c\xE9r\xE9bral",type:"3d",source:"Atlas 3D MNI152 \u2014 Commande controlat\xE9rale",text:"Les fibres motrices qui partent du cortex moteur gauche croisent la ligne m\xE9diane au niveau du tronc c\xE9r\xE9bral pour commander les muscles du c\xF4t\xE9 droit du corps (et inversement).",legend:"Observe sur l\u2019atlas 3D l\u2019h\xE9misph\xE8re moteur et son prolongement vers le tronc c\xE9r\xE9bral."}],voie1:{consigne:"Lors d'un d\xE9bat sur la s\xE9curit\xE9 \xE0 trottinette et en voiture, r\xE9dige une explication scientifique (6 \xE0 8 lignes) comparant le trajet nerveux d'un r\xE9flexe et celui d'un freinage volontaire, et explique pourquoi le SMS multiplie le risque par 23.",fields:[{id:"a3_tache",label:"Argumentaire scientifique & s\xE9curit\xE9 routi\xE8re (Docs 1, 2 et 3) :",rows:6,placeholder:"Contrairement au r\xE9flexe qui passe par la moelle \xE9pini\xE8re, freiner devant un pi\xE9ton est un mouvement volontaire..."}]},voie2:{consigne:"Suis le trajet de l\u2019information document par document :",fields:[{id:"a3_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Comparer la distance parcourue avant freinage \xE0 50 km/h avec un conducteur attentif (~1 s) puis en lisant un SMS (~5 s), et relever l\u2019impact sur le risque.",rows:2,placeholder:"\xC0 50 km/h attentif : 15 m ; pendant un SMS : 70 \xE0 83 m \xE0 l\u2019aveugle, risque \xD723..."},{id:"a3_q2",label:"Q2 (Doc. 2 \xB7 Sch\xE9matiser en cha\xEEne) : Citer dans l\u2019ordre les 4 \xE9tapes du trajet nerveux d\u2019un freinage volontaire devant un danger visuel.",rows:2,placeholder:"\u0152il (capteur) \u2192 nerf optique \u2192 cortex visuel \u2192 cortex moteur \u2192 moelle \xE9pini\xE8re \u2192 nerf moteur \u2192 muscle."},{id:"a3_q3",label:"Q3 (Docs 2 & 3 \xB7 Comparer) : Indiquer la diff\xE9rence entre ce freinage volontaire et un r\xE9flexe de retrait de la main, et pr\xE9ciser l\u2019effet du t\xE9l\xE9phone/alcool.",rows:2,placeholder:"Le r\xE9flexe ne passe que par la moelle \xE9pini\xE8re ; le t\xE9l\xE9phone et l\u2019alcool allongent le temps de traitement c\xE9r\xE9bral..."}]},mdl:{verbeAction:"Comparer \xB7 Ordonner \xB7 Justifier",marqueurs:["tandis que","au contraire","puis","par cons\xE9quent"],structure:"Cha\xEEne orient\xE9e (Capteur \u2192 Centre \u2192 Muscle) + Contraste R\xE9flexe vs Volontaire + Chiffres."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q2, suis la r\xE8gle \xAB Organe sensoriel \u2192 Nerf sensitif \u2192 Centre nerveux \u2192 Nerf moteur \u2192 Muscle effecteur \xBB."},{niv:"Niveau 2 \xB7 Indice",txt:"Attention ! En voiture, freiner en voyant un pi\xE9ton n\u2019est PAS un r\xE9flexe : c\u2019est un mouvement volontaire qui exige l\u2019\u0153il ET le cortex c\xE9r\xE9bral."},{niv:"Niveau 3 \xB7 Notion",txt:"Le SMS combine deux dangers : +37 % de temps de r\xE9action ET 5 secondes sans regarder la route (70\u201383 m \xE0 50 km/h, risque \xD723)."}],avantDeRendre:["J'ai distingu\xE9 moelle \xE9pini\xE8re (r\xE9flexe) et cortex moteur (mouvement volontaire).","J'ai cit\xE9 les valeurs de la S\xE9curit\xE9 routi\xE8re (15 m vs 70\u201383 m, \xD73, \xD723, +13 % alcool).","J'ai pr\xE9cis\xE9 le r\xF4le des nerfs comme c\xE2bles conducteurs du message nerveux."],traceEcrite:"Un mouvement volontaire (freiner devant un obstacle) n\xE9cessite l'int\xE9gration des informations par le cerveau (cortex visuel \u2192 cortex moteur) puis la descente du message via le tronc c\xE9r\xE9bral (croisement controlat\xE9ral) et la moelle \xE9pini\xE8re. Un r\xE9flexe suit un circuit plus court passant directement par la moelle \xE9pini\xE8re. T\xE9l\xE9phone (+37 % \xE0 +46 %, SMS \xD723) et alcool (+13 %) retardent le traitement c\xE9r\xE9bral et allongent la distance d'arr\xEAt.",notions:["Mouvement volontaire vs r\xE9flexe","Centres nerveux (cerveau, moelle \xE9pini\xE8re) et nerfs","Temps de r\xE9action"],lsu:["D4 \xB7 Exploiter des donn\xE9es statistiques","D1.3 \xB7 Ordonner un trajet fonctionnel","D3 \xB7 Comportements responsables"],fds:"Faire des sciences : montrer les limites d'un atlas c\xE9r\xE9bral seul (absence de la moelle \xE9pini\xE8re) en le compl\xE9tant par un sch\xE9ma m\xE9dullaire et des mesures.",prof:{corrige:["Q1 : \xC0 50 km/h, un conducteur attentif parcourt d\xE9j\xE0 15 m pendant ~1 s de r\xE9action ; en lisant un SMS (~5 s), il parcourt 70 \xE0 83 m \xAB \xE0 l'aveugle \xBB (+37 % sur le temps de r\xE9action) et le risque d'accident est multipli\xE9 par 23.","Q2 : \u0152il (r\xE9cepteur) \u2192 nerf optique \u2192 cortex visuel \u2192 cortex moteur \u2192 tronc c\xE9r\xE9bral / moelle \xE9pini\xE8re \u2192 nerf moteur \u2192 muscle de la jambe/du pied.","Q3 : Le freinage passe par le cortex c\xE9r\xE9bral (plus lent, sensible \xE0 l'attention), alors qu'un r\xE9flexe passe directement par la moelle \xE9pini\xE8re sans analyse consciente pr\xE9alable. L'alcool (+13 % min.) et le t\xE9l\xE9phone (+37 \xE0 +46 %) perturbent l'analyse c\xE9r\xE9brale."],bareme:"Q1 : 3 pts \xB7 Q2 : 3 pts (cha\xEEne compl\xE8te ordonn\xE9e) \xB7 Q3 : 3 pts (volontaire/r\xE9flexe + perturbateurs) \xB7 MDL : 1 pt = 10 pts.",erreursFrequentes:["Appeler \xAB r\xE9flexe \xBB le fait de freiner au feu rouge (dans le langage courant on le dit, mais en SVT c'est un mouvement volontaire appris).","Oublier la moelle \xE9pini\xE8re dans le trajet descendant vers les muscles du pied."],lsu:{MI:"Confond r\xE9flexe et mouvement volontaire ou oublie le r\xF4le des nerfs.",MF:"Cite les risques du SMS mais pr\xE9sente un trajet nerveux incomplet.",MS:"Distingue clairement trajet volontaire (cortex + moelle) et r\xE9flexe (moelle) en s'appuyant sur les chiffres.",TBM:"Int\xE8gre la limite du mod\xE8le 3D (moelle \xE9pini\xE8re) et le croisement controlat\xE9ral dans une explication structur\xE9e."}}},{id:"A4",code:"A4",niveau:"3e",semaine:"S\xE9ance 7\u20138",duree:"50 min",titre:"Curare, anesth\xE9sie et synapse : comment communiquent les neurones ?",type:"Histoire des sciences \xB7 Changement d\u2019\xE9chelle",accroche:"En 1856, le physiologiste Claude Bernard \xE9tudie le curare, poison de fl\xE8ches paralysant en quelques secondes. Au m\xEAme moment, Golgi et Cajal s'opposent : les neurones forment-ils un r\xE9seau continu ou des cellules s\xE9par\xE9es ?",sourceAccroche:"Claude Bernard (1856) ; Prix Nobel 1906 (Golgi & Cajal) ; Lelivrescolaire.fr SVT 3e Docs 1, 5 & 7",problematique:"Comment le message nerveux passe-t-il d'un neurone \xE0 un autre (ou \xE0 un muscle) \u2014 et comment des mol\xE9cules comme le curare peuvent-elles le bloquer ?",obstacle:"Imaginer les nerfs comme des c\xE2bles \xE9lectriques continus o\xF9 rien ne s'interpose d'une cellule \xE0 l'autre.",rupture:"\xC0 l'\xE9chelle de ~20 nanom\xE8tres, les neurones sont s\xE9par\xE9s par une fente synaptique : la transmission est chimique (neurotransmetteurs + r\xE9cepteurs), ce qui explique comment une mol\xE9cule peut la bloquer ou la mimer.",vocab:[{term:"Neurone",def:"Cellule sp\xE9cialis\xE9e du syst\xE8me nerveux qui conduit et transmet les messages nerveux."},{term:"Synapse",def:"Zone de jonction (~20 nm) s\xE9parant deux neurones ou un neurone et une fibre musculaire."},{term:"Neurotransmetteur",def:"Messager chimique lib\xE9r\xE9 dans la fente synaptique (ex. glutamate, GABA, dopamine)."},{term:"R\xE9cepteur sp\xE9cifique",def:"Prot\xE9ine de la cellule suivante sur laquelle se fixe le neurotransmetteur."}],scenario3d:[{label:"1. Voie excitatrice Glutamate (cerveau en transparence)",action:{pathway:"glutamate",deep:!0,view:"lat_L"}},{label:"2. Voie inhibitrice GABA (freinage synaptique)",action:{pathway:"gaba",deep:!0,view:"lat_L"}},{label:"3. Simulateur 20 nm : Synapse, Curare (X) & Agoniste (Y)",action:{doc:"synapse"}},{label:"4. Micro-Monde 3D : Synapse normale (~20 nm)",action:{microStage:"synapse",synapseMode:"normal"}},{label:"5. Micro-Monde 3D : Synapse bloqu\xE9e au Curare",action:{microStage:"synapse",synapseMode:"curare"}},{label:"6. Micro-Monde 3D : Potentiel d'action (ms)",action:{microStage:"pa"}}],docs:[{num:"Doc. 1",title:"Controverse Golgi vs Cajal et microscopie \xE9lectronique",type:"observation",source:"Prix Nobel de m\xE9decine (25 oct. 1906) & MEB Lelivrescolaire.fr Doc. 5",text:"Camillo Golgi pensait que les cellules nerveuses fusionnaient en un r\xE9seau continu ; Santiago Ram\xF3n y Cajal montra au microscope qu'il s'agissait de cellules ind\xE9pendantes (neurones). La microscopie \xE9lectronique a confirm\xE9 qu'une fente synaptique de ~20 nm s\xE9pare deux neurones, avec des v\xE9sicules c\xF4t\xE9 \xE9metteur.",legend:"Le message \xE9lectrique dans le neurone ne peut donc pas \xAB sauter \xBB directement la fente."},{num:"Doc. 2",title:"Exp\xE9rience historique de Claude Bernard sur le curare",type:"experience",source:"Claude Bernard (1856) sur nerf sciatique + muscle de grenouille",text:"On isole un muscle reli\xE9 \xE0 son nerf sciatique chez une grenouille pr\xE9par\xE9e, puis on applique du curare \xE0 trois endroits distincts avant de stimuler :",table:{headers:["Zone mise en contact avec le curare","Zone stimul\xE9e","Contraction du muscle"],rows:[["1. Nerf seul (muscle \xE9pargn\xE9)","Nerf","Oui (normale)"],["2. Muscle baign\xE9 (jonction atteinte)","Nerf","Non (paralysie)"],["3. Muscle baign\xE9 (jonction atteinte)","Muscle directement","Oui (normale)"]]},legend:"Utilise le simulateur \xAB Synapse \xBB (Mol\xE9cule X) pour visualiser l\u2019action \xE0 20 nm."},{num:"Doc. 3",title:"Excitation et inhibition dans les r\xE9seaux c\xE9r\xE9braux",type:"3d",source:"Atlas 3D \u2014 Voies Glutamate & GABA",text:"Dans le cerveau, selon le type de neurotransmetteur et son r\xE9cepteur, une synapse peut activer le neurone suivant (ex. glutamate) ou le freiner (ex. GABA). De nombreux anesth\xE9siques chirurgicaux ciblent pr\xE9cis\xE9ment ces jonctions synaptiques pour interrompre la douleur ou le tonus musculaire.",legend:"Compare les voies Glutamate et GABA en 3D pour passer de l\u2019\xE9chelle macro \xE0 l\u2019\xE9chelle cellulaire."}],voie1:{consigne:"\xC0 l'aide des r\xE9sultats de Claude Bernard (Doc. 2) et des donn\xE9es microscopiques (Docs 1 et 3), r\xE9dige un texte argument\xE9 (6 \xE0 8 lignes) expliquant o\xF9 et comment agit le curare \xE0 l'\xE9chelle de la synapse.",fields:[{id:"a4_tache",label:"Explication du m\xE9canisme cellulaire et mol\xE9culaire (Docs 1, 2 et 3) :",rows:6,placeholder:"Les essais 1 et 3 montrent que le nerf et le muscle restent intacts... Le curare agit donc \xE0 l\u2019\xE9chelle de la synapse..."}]},voie2:{consigne:"Passe de l\u2019observation microscopique au raisonnement exp\xE9rimental :",fields:[{id:"a4_q1",label:"Q1 (Doc. 1 \xB7 Conclure) : Quelle observation prouve que l\u2019hypoth\xE8se de Cajal (neurones s\xE9par\xE9s) l\u2019emporte sur celle de Golgi ?",rows:2,placeholder:"La microscopie \xE9lectronique montre une fente synaptique de ~20 nm..."},{id:"a4_q2",label:"Q2 (Doc. 2 \xB7 Interpr\xE9ter) : En comparant les trois essais de Claude Bernard, d\xE9montrer que le curare n\u2019ab\xEEme ni le nerf ni le muscle mais bloque leur jonction.",rows:3,placeholder:"Essai 1 : le nerf conduit toujours ; Essai 3 : le muscle se contracte ; Essai 2 : le passage nerf \u2192 muscle est bloqu\xE9..."},{id:"a4_q3",label:"Q3 (Docs 2 & 3 \xB7 Mod\xE9liser) : Expliquer le r\xF4le du neurotransmetteur et du r\xE9cepteur dans le blocage par le curare (mol\xE9cule X du simulateur).",rows:2,placeholder:"Le curare se fixe sur les r\xE9cepteurs sans les activer, emp\xEAchant le neurotransmetteur..."}]},mdl:{verbeAction:"Interpr\xE9ter \xB7 D\xE9montrer \xB7 Mod\xE9liser",marqueurs:["alors que","donc","cependant","en revanche"],structure:"Analyse des 3 t\xE9moins/essais \u2192 D\xE9duction du site d\u2019action \u2192 Explication mol\xE9culaire (r\xE9cepteur)."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q2, exploite chaque essai s\xE9par\xE9ment : que v\xE9rifie l\u2019essai 1 sur le nerf ? Que v\xE9rifie l\u2019essai 3 sur le muscle ? Que reste-t-il entre les deux dans l\u2019essai 2 ?"},{niv:"Niveau 2 \xB7 Indice",txt:"Si l\u2019essai 1 contracte le muscle, le nerf n\u2019est pas cass\xE9. Si l\u2019essai 3 contracte le muscle, le muscle n\u2019est pas paralys\xE9 lui-m\xEAme. Seule la synapse nerf\u2013muscle est bloqu\xE9e !"},{niv:"Niveau 3 \xB7 Notion",txt:"Compl\xE8te : \xAB Le neurone lib\xE8re un ___ dans la ___ (~20 nm). Le curare occupe les ___ sans les ___, bloquant la transmission. \xBB"}],avantDeRendre:["J'ai utilis\xE9 le mot-cl\xE9 \xAB fente synaptique (~20 nm) \xBB et \xAB v\xE9sicules \xBB.","J'ai interpr\xE9t\xE9 les 3 essais de Claude Bernard sans en oublier un.","J'ai expliqu\xE9 la diff\xE9rence entre message \xE9lectrique (dans le neurone) et message chimique (dans la synapse)."],traceEcrite:"Les neurones communiquent entre eux (ou avec un muscle) au niveau de synapses chimiques (~20 nm). \xC0 l'arriv\xE9e d'un message nerveux \xE9lectrique, l'\xE9l\xE9ment pr\xE9synaptique lib\xE8re des neurotransmetteurs dans la fente synaptique ; leur fixation sur des r\xE9cepteurs sp\xE9cifiques d\xE9clenche ou inhibe un message dans la cellule suivante (sens unidirectionnel). Certaines mol\xE9cules (curare, anesth\xE9siques) bloquent ces r\xE9cepteurs.",notions:["Neurone et fente synaptique","Neurotransmetteurs et r\xE9cepteurs","Histoire des sciences (construction du savoir)"],lsu:["D4 \xB7 Interpr\xE9ter un protocole exp\xE9rimental historique","D5 \xB7 Situer l\u2019\xE9volution d\u2019une th\xE9orie (Golgi/Cajal)","D1.3 \xB7 Changer d\u2019\xE9chelle (organe \u2192 mol\xE9cule)"],fds:"Faire des sciences : comprendre comment une controverse (Golgi/Cajal) est tranch\xE9e par une nouvelle technique (MEB) et une exp\xE9rience rigoureuse.",prof:{corrige:["Q1 : La microscopie \xE9lectronique r\xE9v\xE8le une discontinuit\xE9 physique (~20 nm de fente synaptique) et des v\xE9sicules asym\xE9triques, validant la th\xE9orie neuronale de Cajal.","Q2 : L'essai 1 prouve que le curare ne d\xE9truit pas la conduction du nerf ; l'essai 3 prouve que le muscle reste capable de se contracter. L'\xE9chec de l'essai 2 (nerf stimul\xE9 mais muscle baignant dans le curare) d\xE9montre que le curare bloque uniquement la jonction nerf\u2013muscle (synapse neuromusculaire).","Q3 : Le message chimique passe par un neurotransmetteur lib\xE9r\xE9 dans la fente ; une mol\xE9cule bloquante (type curare / X) occupe le r\xE9cepteur postsynaptique sans l'activer, emp\xEAchant le neurotransmetteur naturel de se fixer."],bareme:"Q1 : 2 pts \xB7 Q2 : 4 pts (exploitation logique des 3 essais) \xB7 Q3 : 3 pts (fente, neurotransmetteur, r\xE9cepteur) \xB7 MDL : 1 pt = 10 pts.",erreursFrequentes:["Confondre l'ordre \xAB \xE9lectrique puis chimique \xBB et croire que \xAB l'\xE9lectricit\xE9 traverse l'espace entre neurones \xBB.","N\xE9gliger l'essai 3 dans la d\xE9monstration de Claude Bernard."],lsu:{MI:"D\xE9crit un r\xE9sultat du tableau sans conclure sur la jonction.",MF:"Conna\xEEt le mot synapse mais peine \xE0 articuler les 3 essais exp\xE9rimentaux.",MS:"D\xE9montre par \xE9limination gr\xE2ce aux 3 essais que la jonction nerf\u2013muscle est cibl\xE9e et explique la fixation sur r\xE9cepteur.",TBM:"R\xE9dige une synth\xE8se rigoureuse reliant controverse historique, \xE9chelle nanom\xE9trique et blocage mol\xE9culaire."}}},{id:"A5",code:"A5",niveau:"3e",semaine:"S\xE9ance 9\u201310",duree:"55 min",titre:"Sommeil, smartphone le soir et m\xE9moire au coll\xE8ge",type:"Enqu\xEAte nationale & d\xE9marche exp\xE9rimentale",accroche:"Dans son avis du 13 janvier 2026 relay\xE9 par Le Monde, l'ANSES alerte sur l'usage quotidien des r\xE9seaux sociaux par 58 % des 12\u201317 ans \u2014 au moment o\xF9 l'enqu\xEAte EnCLASS 2024 montre que plus d'un quart des coll\xE9giens accumule une dette de sommeil.",sourceAccroche:"EnCLASS 2024 (OFDT / Sant\xE9 publique France) ; ANSES 13 janv. 2026 / Le Monde ; Scoville & Milner (1957) ; Gais, Lucas & Born (2006)",problematique:"Comment le manque de sommeil et l'usage tardif du smartphone perturbent-ils le fonctionnement c\xE9r\xE9bral et la consolidation des apprentissages ?",obstacle:"Croire que dormir est une \xAB perte de temps o\xF9 le cerveau s'\xE9teint \xBB et que \xAB la m\xE9moire se trouve dans un seul tiroir \xBB.",rupture:"Le sommeil est actif : l'hippocampe et le cortex rejouent les connexions form\xE9es le jour (consolidation), tandis qu'\xE9crans et dette de sommeil fragmentent ce tri ; la m\xE9moire mobilise en r\xE9alit\xE9 plusieurs circuits (hippocampe vs cervelet).",vocab:[{term:"Dette de sommeil",def:"D\xE9ficit chronique en semaine r\xE9v\xE9l\xE9 par plus de 2 h de rattrapage le week-end."},{term:"Hippocampe",def:"Structure profonde indispensable pour former les nouveaux souvenirs conscients (le\xE7ons, faits)."},{term:"Consolidation mn\xE9sique",def:"Stabilisation nocturne des r\xE9seaux de synapses reliant hippocampe et cortex."},{term:"Plasticit\xE9 c\xE9r\xE9brale",def:"Capacit\xE9 des synapses et circuits c\xE9r\xE9braux \xE0 se modifier durablement par apprentissage."}],scenario3d:[{label:"1. Isoler l\u2019hippocampe sous verre (souvenirs conscients)",action:{isolate:"hippocampe",deep:!0,view:"medial"}},{label:"2. Comparer avec le cervelet (gestes appris, cas H.M.)",action:{isolate:"cervelet",deep:!0,view:"post"}},{label:"3. Doc. interactif Sommeil, EnCLASS 2024 & ANSES 2026",action:{doc:"sommeil"}},{label:"4. Micro-Monde 3D : Un morceau de cortex (r\xE9seaux)",action:{microStage:"cortex"}},{label:"5. Micro-Monde 3D : Un neurone & ses \xE9pines dendritiques",action:{microStage:"neurone"}}],docs:[{num:"Doc. 1",title:"\xC9tat r\xE9el du sommeil des coll\xE9giens en France",type:"tableau",source:"Enqu\xEAte nationale EnCLASS 2024 (OFDT / Sant\xE9 publique France / EHESP)",text:"Les besoins physiologiques d'un coll\xE9gien se situent entre 8 h et 9 h par nuit en semaine. L'enqu\xEAte EnCLASS 2024 r\xE9v\xE8le une \xE9rosion pr\xE9occupante :",table:{headers:["Indicateur (coll\xE9giens en semaine)","Mesure EnCLASS 2024"],rows:[["Dur\xE9e moyenne de sommeil (semaine)","8 h 16 min"],["\xC9l\xE8ves dormant moins de 7 h / nuit","13,8 %"],["En dette de sommeil (> 2 h rattrap\xE9es le week-end)","26,7 %"],["Fatigu\xE9s presque tous les matins","30,6 %"]]},legend:"Plus d\u2019un \xE9l\xE8ve sur quatre manque chroniquement de sommeil pendant les semaines de cours."},{num:"Doc. 2",title:"Smartphones le soir : alerte ANSES (janvier 2026)",type:"texte",source:"ANSES, avis du 13 janvier 2026 & Le Monde",text:"Chez les 12\u201317 ans, pr\xE8s de 90 % utilisent un smartphone chaque jour (42 % y passent 2 \xE0 5 h/jour, et 9 % plus de 5 h/jour) et 58 % consultent les r\xE9seaux sociaux quotidiennement. Leur usage le soir retarde l'endormissement par excitation \xE9motionnelle, notifications et lumi\xE8re, d\xE9gradant ensuite attention, humeur et m\xE9morisation.",legend:"Retrouve la synth\xE8se compl\xE8te dans le doc. interactif \xAB Sommeil & \xC9crans \xBB."},{num:"Doc. 3",title:"Hippocampe, cervelet et preuve exp\xE9rimentale du sommeil",type:"experience",source:"Scoville & Milner (1957, patient H.M.) ; Gais, Lucas & Born (2006, Learning & Memory)",text:"Le patient H.M., priv\xE9 de ses deux hippocampes, ne retenait aucun fait nouveau mais progressait encore en habilet\xE9 motrice (dessin en miroir) gr\xE2ce au cervelet et aux noyaux gris. De plus, Gais & Born (2006) ont montr\xE9 sur deux groupes apprenant des paires de mots que le groupe dormant juste apr\xE8s l'apprentissage retient significativement plus de mots que le groupe rest\xE9 \xE9veill\xE9 sur la m\xEAme dur\xE9e, prouvant que le sommeil consolide activement l'hippocampe.",legend:"Compare en 3D hippocampe (faits/le\xE7ons) et cervelet (gestes/automatismes)."}],voie1:{consigne:"Lors d'un conseil de vie coll\xE9gienne sur le bien-\xEAtre, r\xE9dige un plaidoyer scientifique (6 \xE0 8 lignes) expliquant pourquoi \xAB couper le smartphone 1 h avant de dormir \xBB prot\xE8ge la m\xE9moire et la sant\xE9 scolaire, en citant EnCLASS 2024, ANSES 2026 et le r\xF4le de l'hippocampe.",fields:[{id:"a5_tache",label:"Argumentaire scientifique complet (Docs 1, 2 et 3) :",rows:6,placeholder:"D\u2019apr\xE8s EnCLASS 2024, 26,7 % des coll\xE9giens sont en dette de sommeil... L\u2019ANSES (2026) montre... Or l\u2019hippocampe a besoin de sommeil pour..."}]},voie2:{consigne:"R\xE9ponds pr\xE9cis\xE9ment aux 3 questions cibl\xE9es :",fields:[{id:"a5_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Citer deux indicateurs chiffr\xE9s d\u2019EnCLASS 2024 montrant l\u2019ampleur du manque de sommeil au coll\xE8ge.",rows:2,placeholder:"13,8 % dorment moins de 7 h, 26,7 % sont en dette de sommeil, 30,6 % se disent fatigu\xE9s..."},{id:"a5_q2",label:"Q2 (Doc. 2 \xB7 Expliquer) : Citer les chiffres d\u2019usage du smartphone chez les 12\u201317 ans et deux raisons pour lesquelles l\u2019\xE9cran le soir nuit au sommeil.",rows:2,placeholder:"58 % sur les r\xE9seaux sociaux/jour (42 % de 2 \xE0 5 h) ; retarde l\u2019endormissement par..."},{id:"a5_q3",label:"Q3 (Doc. 3 \xB7 D\xE9montrer) : Expliquer ce que prouvent le cas H.M. et l\u2019exp\xE9rience de Gais & Born (2006) sur les organes de la m\xE9moire et l\u2019effet du sommeil.",rows:3,placeholder:"H.M. prouve que l\u2019hippocampe g\xE8re les faits nouveaux (vs cervelet pour les gestes) ; Gais & Born prouvent que dormir juste apr\xE8s apprendre..."}]},mdl:{verbeAction:"Relever \xB7 Expliquer \xB7 D\xE9montrer",marqueurs:["tout d\u2019abord","en effet","de plus","c\u2019est pourquoi"],structure:"Constat \xE9pid\xE9miologique \u2192 Facteur comportemental (\xE9crans) \u2192 Preuve biologique (hippocampe/sommeil)."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Distingue bien deux types de donn\xE9es : un sondage (Docs 1 et 2 : d\xE9crit une fr\xE9quence) et une exp\xE9rience contr\xF4l\xE9e (Doc. 3 : prouve une cause)."},{niv:"Niveau 2 \xB7 Indice",txt:"H.M. \xE9choue \xE0 retenir les mots/visages (sans hippocampe) mais r\xE9ussit le dessin en miroir (cervelet intact) \u2192 la m\xE9moire n\u2019est pas localis\xE9e dans une seule zone !"},{niv:"Niveau 3 \xB7 Notion",txt:"Pendant le sommeil, les r\xE9seaux de synapses entre l\u2019hippocampe et le cortex se r\xE9activent et se renforcent (consolidation / plasticit\xE9 c\xE9r\xE9brale)."}],avantDeRendre:["J'ai cit\xE9 au moins deux chiffres exacts d'EnCLASS 2024 et de l'ANSES 2026.","J'ai diff\xE9renci\xE9 le r\xF4le de l'hippocampe et celui du cervelet.","J'ai expliqu\xE9 pourquoi le sommeil consolide activement les souvenirs (au lieu d'\xE9teindre le cerveau)."],traceEcrite:"La m\xE9moire mobilise plusieurs r\xE9seaux sp\xE9cialis\xE9s (hippocampe pour les savoirs nouveaux, cervelet/striatum pour les gestes). Chez les adolescents (EnCLASS 2024 : 26,7 % en dette de sommeil), l'usage tardif des \xE9crans (ANSES 2026) retarde l'endormissement et prive le cerveau du sommeil n\xE9cessaire pour consolider les synapses de la m\xE9moire.",notions:["Hygi\xE8ne du sommeil et \xE9crans","Hippocampe, cervelet et m\xE9moires multiples","Plasticit\xE9 c\xE9r\xE9brale et consolidation"],lsu:["D4 \xB7 Distinguer enqu\xEAte observationnelle et exp\xE9rience","D3 \xB7 Hygi\xE8ne du syst\xE8me nerveux","D1.3 \xB7 Argumenter avec des chiffres sourc\xE9s"],fds:"Faire des sciences : distinguer une corr\xE9lation issue d'une enqu\xEAte d'une causalit\xE9 \xE9tablie par groupe t\xE9moin exp\xE9riment\xE9 (Gais & Born).",prof:{corrige:["Q1 : En semaine, 13,8 % des coll\xE9giens dorment moins de 7 h, 26,7 % sont en dette de sommeil (> 2 h de rattrapage le week-end) et 30,6 % se d\xE9clarent fatigu\xE9s presque tous les matins.","Q2 : Pr\xE8s de 90 % des 12\u201317 ans utilisent un smartphone par jour (42 % entre 2 et 5 h, 9 % > 5 h) et 58 % consultent les r\xE9seaux sociaux quotidiennement. Le soir, notifications, stimulation \xE9motionnelle et lumi\xE8re retardent l'endormissement et fragmentent la nuit.","Q3 : Le cas H.M. d\xE9montre qu'il existe plusieurs m\xE9moires distinctes : l'hippocampe est n\xE9cessaire aux souvenirs conscients nouveaux, tandis que le cervelet (et le striatum) g\xE8rent l'apprentissage moteur. Gais & Born (2006) prouvent exp\xE9rimentalement que dormir juste apr\xE8s l'apprentissage am\xE9liore durablement la r\xE9tention par rapport \xE0 l'\xE9veil."],bareme:"Q1 : 2,5 pts \xB7 Q2 : 3 pts \xB7 Q3 : 3,5 pts (H.M. + Gais & Born) \xB7 MDL : 1 pt = 10 pts.",erreursFrequentes:["Dire \xAB le cerveau dort et se repose sans rien faire \xBB alors que la consolidation nocturne est active.","Affirmer que \xAB la m\xE9moire est uniquement dans l'hippocampe \xBB en oubliant le cortex et le cervelet."],lsu:{MI:"Cite des conseils g\xE9n\xE9raux sur les \xE9crans sans mobiliser les chiffres ni l'hippocampe.",MF:"Rel\xE8ve quelques chiffres d'EnCLASS/ANSES mais confond les r\xF4les de l'hippocampe et du cervelet.",MS:"Relie pr\xE9cis\xE9ment EnCLASS, ANSES et la preuve exp\xE9rimentale sur l'hippocampe et le cervelet.",TBM:"Explique clairement plasticit\xE9 synaptique nocturne, m\xE9moires multiples et distinction enqu\xEAte/exp\xE9rience."}}},{id:"A6",code:"A6",niveau:"3e",semaine:"S\xE9ance 11\u201312",duree:"55 min",titre:"Puffs, nicotine et \xE9crans : comprendre l\u2019addiction par le cerveau",type:"Sant\xE9 publique \xB7 Neurobiologie des addictions",accroche:"En f\xE9vrier 2025, la France a adopt\xE9 une loi interdisant les puffs jetables, apr\xE8s que l'enqu\xEAte EnCLASS 2024 a alert\xE9 sur l'essor du vapotage (~46 % d'exp\xE9rimentation au lyc\xE9e) malgr\xE9 le recul du tabac fum\xE9. L'ANSES (janvier 2026) pointe aussi les boucles de r\xE9compense des \xE9crans.",sourceAccroche:"OFDT EnCLASS 2024 ; Loi n\xB0 2025-175 du 24 f\xE9v. 2025 ; ANSES janv. 2026 ; Lelivrescolaire.fr Docs 4, 5 & 8",problematique:"Comment la nicotine \u2014 ou certaines boucles de r\xE9compense num\xE9riques \u2014 d\xE9tourne-t-elle le circuit c\xE9r\xE9bral normal jusqu'\xE0 installer une d\xE9pendance chez l'adolescent ?",obstacle:"Croire que la d\xE9pendance n'est qu'un \xAB manque de volont\xE9 \xBB ou que la dopamine est \xAB la mol\xE9cule du bonheur simple \xBB.",rupture:"Les besoins vitaux lib\xE8rent naturellement de la dopamine dans le circuit ATV \u2192 noyau accumbens \u2192 pr\xE9frontal (apprentissage/motivation). La nicotine et les substances d\xE9tournent ces synapses ; chez l'adolescent, le cortex pr\xE9frontal qui freine les impulsions est encore en maturation.",vocab:[{term:"Circuit de la r\xE9compense",def:"R\xE9seau reliant notamment l\u2019ATV, le noyau accumbens et le cortex pr\xE9frontal, impliqu\xE9 dans la motivation."},{term:"Dopamine",def:"Neurotransmetteur qui signale l\u2019attente d\u2019une r\xE9compense et renforce la r\xE9p\xE9tition d\u2019un comportement."},{term:"Addiction",def:"Perte de contr\xF4le et besoin compulsif malgr\xE9 la connaissance des risques pour la sant\xE9."},{term:"Cortex pr\xE9frontal",def:"R\xE9gion frontale contr\xF4lant le recul, la planification et le frein aux impulsions (maturation jusqu\u2019\xE0 ~25 ans)."}],scenario3d:[{label:"1. Voie Dopamine (ATV \u2192 accumbens \u2192 pr\xE9frontal)",action:{pathway:"dopamine",deep:!0,view:"medial"}},{label:"2. Isoler le noyau accumbens sous verre (c\u0153ur du circuit)",action:{isolate:"accumbens",deep:!0,view:"ant"}},{label:"3. Isoler le cortex pr\xE9frontal & ouvrir Doc. R\xE9compense",action:{isolate:"prefrontal",deep:!1,view:"lat_L",doc:"recompense"}},{label:"4. Micro-Monde 3D : Synapse suractiv\xE9e par la Nicotine",action:{microStage:"synapse",synapseMode:"nicotine"}},{label:"5. Micro-Monde 3D : Activit\xE9 de r\xE9seau (76 neurones)",action:{microStage:"activite"}}],docs:[{num:"Doc. 1",title:"Du tabac aux puffs et r\xE9seaux : enjeux de sant\xE9 publique",type:"texte",source:"OFDT EnCLASS 2024 \xB7 Loi n\xB0 2025-175 (24 f\xE9v. 2025) \xB7 ANSES (13 janv. 2026)",text:"Au coll\xE8ge, le tabac fum\xE9 recule nettement (7,7 % d'exp\xE9rimentation ; 0,9 % d'usage quotidien selon EnCLASS 2024). En revanche, l'attrait des puffs jetables sucr\xE9es contenant souvent de la nicotine a pouss\xE9 pr\xE8s de 46 % des lyc\xE9ens \xE0 tester le vapotage, conduisant \xE0 l'interdiction l\xE9gale des puffs en f\xE9vrier 2025. Parall\xE8lement, l'ANSES (2026) souligne que les m\xE9canismes de scroll infini et r\xE9compenses impr\xE9visibles captent fortement l'attention adolescente.",legend:"Pourquoi un produit ou un usage peut-il cr\xE9er une envie irr\xE9sistible de recommencer ?"},{num:"Doc. 2",title:"Lib\xE9ration de dopamine selon l\u2019activit\xE9",type:"graphique",source:"Lelivrescolaire.fr SVT 3e (Doc. 8 \u2014 Unit\xE9 arbitraire 0\u2013100)",text:"Mesure relative de la lib\xE9ration de dopamine dans le circuit de la r\xE9compense (en unit\xE9 arbitraire sur 100) selon la situation v\xE9cue :",table:{headers:["Situation test\xE9e","Lib\xE9ration de dopamine (UA / 100)","R\xF4le biologique / Risque"],rows:[["Manger / Boire","~88 UA / ~88 UA","Survie de l\u2019organisme"],["Obtenir une bonne note","~52 UA","Renforcement scolaire"],["R\xE9diger une punition","~3 UA","\xC9vitement (d\xE9sagr\xE9able)"],["Addiction \xE0 un jeu","~82 UA","D\xE9tournement au niveau d\u2019un besoin vital"]]},legend:"Visualise le graphique complet dans le document interactif \xAB R\xE9compense & Puffs \xBB."},{num:"Doc. 3",title:"Action synaptique et vuln\xE9rabilit\xE9 du cerveau adolescent",type:"3d",source:"Lelivrescolaire.fr Docs 4\u20135 ; Volkow et al. (neurobiologie des addictions)",text:"\xC0 l'\xE9chelle cellulaire, la nicotine ou d'autres mol\xE9cules psychoactives se fixent sur les r\xE9cepteurs synaptiques et d\xE9clenchent une lib\xE9ration artificielle et brutale de dopamine entre l'ATV et le noyau accumbens. R\xE9p\xE9t\xE9e, cette surstimulation diminue la sensibilit\xE9 basale des synapses (besoin d'augmenter les doses, malaise en manque), alors que le cortex pr\xE9frontal r\xE9gulateur ach\xE8ve sa maturation vers 20\u201325 ans.",legend:"Observe en 3D le trajet m\xE9solimbique (ATV \u2192 accumbens) puis le cortex pr\xE9frontal."}],voie1:{consigne:"En t'appuyant sur les 3 documents et l'atlas 3D, r\xE9dige une explication scientifique (6 \xE0 8 lignes) expliquant pourquoi l'interdiction des puffs en 2025 repose sur des arguments biologiques pr\xE9cis li\xE9s aux synapses, \xE0 la dopamine et au cerveau adolescent.",fields:[{id:"a6_tache",label:"Note scientifique sur la pr\xE9vention des addictions (Docs 1, 2 et 3) :",rows:6,placeholder:"Alors que le tabac fum\xE9 recule (7,7 % au coll\xE8ge), les puffs apportent de la nicotine... Or \xE0 l\u2019\xE9chelle du circuit de la r\xE9compense..."}]},voie2:{consigne:"Relie donn\xE9es de sant\xE9 publique, graphique et m\xE9canisme synaptique :",fields:[{id:"a6_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Comparer l\u2019usage du tabac fum\xE9 au coll\xE8ge et du vapotage au lyc\xE9e (EnCLASS 2024), et rappeler la d\xE9cision de f\xE9vrier 2025.",rows:2,placeholder:"Au coll\xE8ge : 7,7 % exp\xE9rimentation tabac (0,9 % quotidien) ; vapotage ~46 % au lyc\xE9e \u2192 interdiction des puffs en f\xE9v. 2025..."},{id:"a6_q2",label:"Q2 (Doc. 2 \xB7 Comparer) : Comparer la dopamine lib\xE9r\xE9e lors d\u2019un besoin vital (manger/boire) \xE0 celle observ\xE9e lors d\u2019une addiction, et conclure sur le d\xE9tournement du circuit.",rows:2,placeholder:"Manger/boire (~88 UA) et l\u2019addiction (~82 UA) produisent des pics tr\xE8s proches, bien au-dessus d\u2019une bonne note (~52 UA)..."},{id:"a6_q3",label:"Q3 (Doc. 3 \xB7 Expliquer) : D\xE9crire l\u2019action de la nicotine sur les synapses dopaminergiques et expliquer pourquoi les adolescents sont plus vuln\xE9rables.",rows:2,placeholder:"La nicotine d\xE9clenche un pic artificiel entre ATV et noyau accumbens... le cortex pr\xE9frontal n\u2019est pas encore mature..."}]},mdl:{verbeAction:"Comparer \xB7 Expliquer \xB7 Justifier",marqueurs:["alors que","c\u2019est pourquoi","par cons\xE9quent","de plus"],structure:"Donn\xE9es EnCLASS/Loi 2025 \u2192 Comparaison chiffr\xE9e Doc. 2 \u2192 M\xE9canisme synaptique + Pr\xE9frontal."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Dans Q2, cite les trois valeurs (88 UA, 52 UA, 82 UA) pour montrer ce que signifie \xAB d\xE9tourner un circuit utile \xE0 la survie \xBB."},{niv:"Niveau 2 \xB7 Indice",txt:"Chez l\u2019adolescent, l\u2019acc\xE9l\xE9rateur \xE9motionnel/r\xE9compense (accumbens) r\xE9pond tr\xE8s vite alors que le \xAB frein \xBB (cortex pr\xE9frontal) est encore en construction."},{niv:"Niveau 3 \xB7 Notion",txt:"La nicotine agit sur les r\xE9cepteurs synaptiques : elle provoque une lib\xE9ration excessive de dopamine dans le noyau accumbens, puis une tol\xE9rance qui pousse \xE0 recommencer."}],avantDeRendre:["J'ai nomm\xE9 les structures cl\xE9s : ATV, noyau accumbens, cortex pr\xE9frontal.","J'ai cit\xE9 les donn\xE9es v\xE9rifi\xE9es d'EnCLASS 2024 et les valeurs UA du Doc. 2.","J'ai expliqu\xE9 la d\xE9pendance par un m\xE9canisme biologique (synapse/dopamine) et non par jugement moral."],traceEcrite:"Le circuit de la r\xE9compense (ATV \u2192 noyau accumbens \u2192 cortex pr\xE9frontal) lib\xE8re de la dopamine pour motiver des actes vitaux (manger, boire, apprendre). La nicotine des puffs, les drogues et certains usages addictifs d\xE9tournent ce m\xE9canisme \xE0 l'\xE9chelle des synapses : la surstimulation puis la d\xE9sensibilisation favorisent la d\xE9pendance, aggrav\xE9e \xE0 l'adolescence par la maturation encore inachev\xE9e du cortex pr\xE9frontal.",notions:["Circuit de la r\xE9compense et dopamine","Perturbations synaptiques","Pr\xE9vention des conduites addictives"],lsu:["D4 \xB7 Exploiter des donn\xE9es graphiques et \xE9pid\xE9miologiques","D3 \xB7 Pr\xE9vention des addictions et sant\xE9 publique"],fds:"Faire des sciences : montrer comment des donn\xE9es neurobiologiques et \xE9pid\xE9miologiques \xE9clairent une loi de sant\xE9 publique.",prof:{corrige:["Q1 : Au coll\xE8ge (EnCLASS 2024), seuls 7,7 % ont test\xE9 le tabac fum\xE9 (0,9 % quotidien), alors que pr\xE8s de 46 % des lyc\xE9ens ont exp\xE9riment\xE9 le vapotage ; face \xE0 l'essor des puffs nicotin\xE9es, la France les a interdites par la loi du 24 f\xE9vrier 2025.","Q2 : Manger et boire lib\xE8rent ~88 UA de dopamine et l'addiction atteint ~82 UA (contre ~52 UA pour une bonne note et ~3 UA pour une punition) : le comportement addictif d\xE9tourne donc un circuit normalement destin\xE9 aux besoins vitaux.","Q3 : La nicotine se fixe sur les r\xE9cepteurs des synapses dopaminergiques (ATV \u2192 noyau accumbens), lib\xE9rant une dose excessive et r\xE9p\xE9t\xE9e de dopamine qui diminue ensuite la sensibilit\xE9 naturelle ; comme le cortex pr\xE9frontal (contr\xF4le/d\xE9cision) m\xFBrit jusqu'\xE0 ~25 ans, le risque addictif est plus \xE9lev\xE9 chez l'adolescent."],bareme:"Q1 : 2,5 pts \xB7 Q2 : 3 pts (88 / 82 / 52 UA + d\xE9tournement) \xB7 Q3 : 3,5 pts (synapse + accumbens + pr\xE9frontal) \xB7 MDL : 1 pt = 10 pts.",erreursFrequentes:["\xC9crire \xAB on est accro parce qu'on a trop de dopamine tout le temps \xBB (c'est l'alternance pic artificiel / baisse basale en manque qui entretient la d\xE9pendance).","Oublier le r\xF4le de contr\xF4le du cortex pr\xE9frontal."],lsu:{MI:"\xC9voque le danger des puffs mais n'explique ni la dopamine ni le circuit c\xE9r\xE9bral.",MF:"Cite le circuit de la r\xE9compense sans exploiter le graphique (UA) ni le r\xF4le du pr\xE9frontal.",MS:"Compare avec exactitude les valeurs UA et explique le d\xE9tournement synaptique entre ATV, accumbens et pr\xE9frontal.",TBM:"Relie \xE9chelle mol\xE9culaire (synapse/r\xE9cepteur), maturation c\xE9r\xE9brale adolescente et d\xE9cision de sant\xE9 publique."}}},{id:"DNB3",code:"DNB 3",niveau:"3e \xB7 Brevet",semaine:"\xC9preuve blanche",duree:"30 min",titre:"\xC9valuation DNB (10,0 pts) \u2014 Sommeil, \xE9crans et synapse mn\xE9sique",type:"Sujet type Brevet 2027 \xB7 Bar\xE8me 10,0 pts",accroche:"Lors de la derni\xE8re demi-heure de l'\xE9preuve de Sciences au DNB (SVT \u2014 10 points), l'\xE9l\xE8ve doit exploiter trois documents compl\xE9mentaires d'\xE9chelles diff\xE9rentes et r\xE9diger une synth\xE8se argument\xE9e r\xE9pondant aux crit\xE8res de Ma\xEEtrise de la langue.",sourceAccroche:"R\xE9f\xE9rentiel Nouveau DNB SVT (10,0 pts) \xB7 Sources : EnCLASS 2024, ANSES 2026, Gais/Born 2006, Synapse",problematique:"Comment montrer, \xE0 partir de donn\xE9es de sant\xE9 publique, d'exp\xE9riences sur la m\xE9moire et d'un sch\xE9ma synaptique, pourquoi le sommeil consolide les apprentissages ?",obstacle:"Paraphraser les documents sans comparer de valeurs chiffr\xE9es ni changer d'\xE9chelle (organisme \u2192 cerveau \u2192 synapse).",rupture:"Au Brevet, chaque r\xE9ponse relie pr\xE9cis\xE9ment des donn\xE9es extraites (chiffres/t\xE9moin) aux m\xE9canismes biologiques (hippocampe, synapse \xE0 ~20 nm) avec des connecteurs logiques.",vocab:[{term:"Dette de sommeil",def:"Rattrapage sup\xE9rieur \xE0 2 h le week-end traduisant un d\xE9ficit en semaine."},{term:"Groupe t\xE9moin",def:"Groupe de comparaison indispensable pour \xE9tablir un lien de cause \xE0 effet."},{term:"Hippocampe",def:"Centre profond cl\xE9 pour m\xE9moriser durablement les savoirs conscients."},{term:"Fente synaptique",def:"Espace (~20 nm) o\xF9 les neurotransmetteurs transmettent le signal entre neurones."}],scenario3d:[{label:"1. Isoler l\u2019hippocampe sous verre (Doc. 2)",action:{isolate:"hippocampe",deep:!0,view:"medial"}},{label:"2. Doc. Sommeil EnCLASS 2024 & Gais/Born (Docs 1 & 2)",action:{doc:"sommeil"}},{label:"3. Doc. Synapse ~20 nm \u2014 neurone \xE0 neurone (Doc. 3)",action:{doc:"synapse"}},{label:"4. Micro-Monde 3D : Un neurone (dendrites, soma, axone)",action:{microStage:"neurone"}},{label:"5. Micro-Monde 3D : Synapse ~20 nm (bouton & r\xE9cepteurs)",action:{microStage:"synapse",synapseMode:"normal"}}],docs:[{num:"Doc. 1",title:"Sommeil et smartphones chez les adolescents fran\xE7ais",type:"tableau",source:"EnCLASS 2024 (OFDT / Sant\xE9 publique France) & ANSES (avis du 13 janv. 2026)",text:"Le besoin recommand\xE9 au coll\xE8ge est de 8 \xE0 9 h par nuit. Les deux \xE9tudes nationales dressent le bilan suivant chez les jeunes :",table:{headers:["Indicateur mesur\xE9","Valeur officielle","Source"],rows:[["Dur\xE9e moyenne de sommeil (coll\xE8ge, semaine)","8 h 16 min (13,8 % < 7 h)","EnCLASS 2024"],["Coll\xE9giens en dette de sommeil (> 2 h rattrap\xE9es)","26,7 % (30,6 % fatigu\xE9s le matin)","EnCLASS 2024"],["Usage quotidien des r\xE9seaux sociaux (12\u201317 ans)","58 % (42 % de 2 \xE0 5 h/j sur smartphone)","ANSES, 2026"]]},legend:"Attention : une enqu\xEAte d\xE9crit une fr\xE9quence ; elle ne suffit pas seule \xE0 prouver un m\xE9canisme."},{num:"Doc. 2",title:"Protocole exp\xE9rimental : sommeil ou \xE9veil apr\xE8s apprentissage ?",type:"experience",source:"D\u2019apr\xE8s Gais, Lucas & Born (Learning & Memory, 2006) et Plihal & Born (1997)",text:"Des chercheurs font apprendre une liste de paires de mots le soir \xE0 deux groupes d'\xE9l\xE8ves/jeunes volontaires comparables. Le groupe \xAB Sommeil \xBB dort imm\xE9diatement apr\xE8s l'apprentissage ; le groupe \xAB \xC9veil \xBB reste \xE9veill\xE9 pendant la m\xEAme dur\xE9e avant d'\xEAtre test\xE9 (ou ne dort que plus tard apr\xE8s une phase d'\xE9veil \xE9quivalente). R\xE9sultat reproduit : le groupe ayant dormi juste apr\xE8s l'apprentissage retient significativement plus de mots et r\xE9siste mieux aux interf\xE9rences ; l'IRM montre une r\xE9activation de l'hippocampe pendant le sommeil.",legend:"Comparer \xAB Sommeil imm\xE9diat \xBB et \xAB \xC9veil \xE9quivalent \xBB \xE9carte le simple effet de la fatigue."},{num:"Doc. 3",title:"Consolidation synaptique \xE0 l\u2019\xE9chelle cellulaire",type:"observation",source:"Atlas 3D & Sch\xE9ma microscopique de la synapse chimique (~20 nm)",text:"Chaque souvenir appris s'inscrit dans un r\xE9seau reliant l'hippocampe et le cortex gr\xE2ce \xE0 des connexions entre neurones : les synapses (~20 nm). La r\xE9p\xE9tition et le sommeil stabilisent la lib\xE9ration de neurotransmetteurs depuis les v\xE9sicules pr\xE9synaptiques vers les r\xE9cepteurs du neurone suivant.",legend:"Aide-toi du doc. interactif \xAB Synapse \xBB (mode Neurone \u2192 Neurone) pour v\xE9rifier les l\xE9gendes."}],voie1:{consigne:"Mode DNB complet (30 min \xB7 10,0 pts) : r\xE9ponds directement \xE0 la synth\xE8se finale en int\xE9grant Q1, Q2 et Q3 (ou bascule en Parcours guid\xE9 pour composer chaque question du bar\xE8me officiel).",fields:[{id:"dnb3_tache",label:"Synth\xE8se compl\xE8te type Brevet (exploitation Docs 1, 2, 3 + conseil argument\xE9 \u2014 10 pts) :",rows:8,placeholder:"D\u2019apr\xE8s EnCLASS 2024 et l\u2019ANSES (2026)... L\u2019exp\xE9rience de Gais & Born prouve... \xC0 l\u2019\xE9chelle de l\u2019hippocampe et des synapses... Je conseille donc..."}]},voie2:{consigne:"Bar\xE8me officiel du sujet type Brevet \u2014 Total exact = 10,0 points (Q1 : 2 + Q2 : 2,5 + Q3 : 2 + Q4 : 3,5) :",fields:[{id:"dnb3_q1",label:"Q1 (2,0 pts \xB7 Relever) : \xC0 partir du Doc. 1, relever deux donn\xE9es chiffr\xE9es montrant la d\xE9gradation du sommeil au coll\xE8ge et l\u2019exposition aux r\xE9seaux sociaux.",rows:2,placeholder:"13,8 % dorment moins de 7 h (26,7 % en dette) et 58 % des 12\u201317 ans utilisent les r\xE9seaux sociaux chaque jour..."},{id:"dnb3_q2",label:"Q2 (2,5 pts \xB7 Exploiter un protocole) : Expliquer ce que d\xE9montre la comparaison \xAB Sommeil \xBB vs \xAB \xC9veil \xBB dans le Doc. 2, et justifier l\u2019int\xE9r\xEAt du groupe t\xE9moin.",rows:2,placeholder:"La dur\xE9e d\u2019attente est la m\xEAme mais seul le groupe ayant dormi juste apr\xE8s consolide mieux ; cela prouve la causalit\xE9..."},{id:"dnb3_q3",label:"Q3 (2,0 pts \xB7 Relier les \xE9chelles) : Nommer la structure c\xE9r\xE9brale cl\xE9 des souvenirs conscients (Doc. 2/3) et d\xE9crire en 2 phrases la transmission \xE0 travers une synapse (~20 nm).",rows:2,placeholder:"Il s\u2019agit de l\u2019hippocampe. \xC0 la synapse, l\u2019\xE9l\xE9ment pr\xE9synaptique lib\xE8re des neurotransmetteurs dans la fente..."},{id:"dnb3_q4",label:"Q4 (3,5 pts \xB7 Argumenter \xB7 MDL) : R\xE9diger 5 \xE0 7 lignes pour conseiller un camarade qui r\xE9vise jusqu\u2019\xE0 minuit sur son t\xE9l\xE9phone avant le DNB (au moins 2 arguments tir\xE9s des docs).",rows:4,placeholder:"R\xE9viser tard sur t\xE9l\xE9phone jusqu\u2019\xE0 minuit nuit \xE0 ton Brevet pour deux raisons scientifiques : tout d\u2019abord... ensuite... Donc..."}]},mdl:{verbeAction:"Relever \xB7 Exploiter \xB7 D\xE9crire \xB7 Argumenter",marqueurs:["tout d\u2019abord","en revanche","car","c\u2019est pourquoi"],structure:"R\xE9ponses autonomes sans pronoms ambigus + connecteurs de cause/cons\xE9quence + orthographe des termes SVT."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode (DNB)",txt:"Dans Q1, recopie bien les unit\xE9s (% / heures). Dans Q4, structure avec \xAB Tout d\u2019abord\u2026 Ensuite\u2026 Par cons\xE9quent\u2026 \xBB."},{niv:"Niveau 2 \xB7 Indice",txt:"Pour Q2, compare le groupe Sommeil et le groupe \xC9veil : la seule variable modifi\xE9e juste apr\xE8s l\u2019apprentissage est le sommeil, pas le temps \xE9coul\xE9 !"},{niv:"Niveau 3 \xB7 Notion",txt:"Vocabulaire attendu dans Q3/Q4 : hippocampe, cortex, synapse (~20 nm), v\xE9sicule, neurotransmetteur, r\xE9cepteur, dette de sommeil."}],avantDeRendre:["Q1 : j'ai cit\xE9 au moins deux chiffres exacts du Doc. 1.","Q2 : j'ai compar\xE9 les deux groupes du Doc. 2 (sommeil imm\xE9diat vs \xE9veil).","Q3 : j'ai utilis\xE9 4 mots scientifiques justes (hippocampe, fente, neurotransmetteur, r\xE9cepteur).","Q4 : mon paragraphe conseille concr\xE8tement sans faute majeure de syntaxe."],traceEcrite:"Sujet type DNB r\xE9ussi : mobiliser des chiffres sourc\xE9s (EnCLASS 2024 / ANSES 2026), prouver la consolidation active dans l'hippocampe via un groupe t\xE9moin (Gais & Born), expliquer la transmission chimique synaptique (~20 nm) et formuler une recommandation sanitaire rigoureuse.",notions:["Exploitation DNB multi-\xE9chelles","M\xE9thodologie groupe t\xE9moin","Sommeil, \xE9crans, hippocampe et synapse"],lsu:["D4 \xB7 Extraire et interpr\xE9ter (4,5 pts)","D1.3 \xB7 R\xE9diger et argumenter MDL (3,5 pts)","D1.3 \xB7 Mod\xE9liser une synapse (2,0 pts)"],fds:"M\xE9thode Brevet 2027 : z\xE9ro paraphrase, toujours comparer valeur vs t\xE9moin et conclure avec un connecteur logique.",prof:{corrige:["Q1 (2,0 pts) : Ex. 26,7 % des coll\xE9giens sont en dette de sommeil (> 2 h de rattrapage), 13,8 % dorment moins de 7 h en semaine, 30,6 % sont fatigu\xE9s presque tous les matins (EnCLASS 2024) ; 58 % des 12\u201317 ans utilisent quotidiennement les r\xE9seaux sociaux (ANSES 2026). [1 pt par donn\xE9e exacte sourc\xE9e, max 2 pts]","Q2 (2,5 pts) : En comparant deux groupes sur une m\xEAme dur\xE9e apr\xE8s apprentissage, la seule variable qui diff\xE8re est la pr\xE9sence imm\xE9diate de sommeil. Le meilleur rappel du groupe \xAB Sommeil \xBB montre que le sommeil consolide activement les souvenirs (au-del\xE0 d'une simple absence de fatigue) ; le groupe t\xE9moin est indispensable pour \xE9tablir un lien causal que le sondage seul ne donne pas.","Q3 (2,0 pts) : Structure : l'hippocampe (1 pt). Synapse (~20 nm) : le message \xE9lectrique arrive \xE0 la terminaison pr\xE9synaptique, provoque la lib\xE9ration de neurotransmetteurs dans la fente synaptique qui se fixent sur les r\xE9cepteurs sp\xE9cifiques du neurone postsynaptique (1 pt).","Q4 (3,5 pts dont 0,5 pt MDL) : R\xE9ponse structur\xE9e conseillant d'arr\xEAter le smartphone ~1 h avant le coucher et de viser 8\u20139 h de sommeil. Argument 1 (Doc. 1 & 2) : les \xE9crans retardent l'endormissement et aggravent la dette de sommeil ; Argument 2 (Doc. 2 & 3) : priv\xE9 de sommeil imm\xE9diat, l'hippocampe ne consolide pas efficacement les synapses form\xE9es lors des r\xE9visions. R\xE9daction claire, connecteurs et terminologie juste."],bareme:"Total strict = 10,0 points : Q1 (2,0 pts) + Q2 (2,5 pts) + Q3 (2,0 pts) + Q4 (3,0 pts fond + 0,5 pt Ma\xEEtrise de la langue = 3,5 pts).",erreursFrequentes:["Citer seulement un pourcentage sans son intitul\xE9 exact dans Q1.","Confondre l'effet des \xE9crans le soir avec une \xAB perte de cellules \xBB irr\xE9versible (ici c'est un trouble fonctionnel d'endormissement et de consolidation, contrairement au bruit sur les cellules cili\xE9es)."],lsu:{MI:"0 \xE0 3,5 pts : rel\xE8ve partiellement des \xE9l\xE9ments isol\xE9s sans lien causal ni vocabulaire scientifique.",MF:"4 \xE0 6 pts : extrait les donn\xE9es du Doc. 1 mais reste impr\xE9cis sur le t\xE9moin (Q2) ou la synapse (Q3).",MS:"6,5 \xE0 8,5 pts : r\xE9pond juste aux 4 questions avec donn\xE9es sourc\xE9es, hippocampe, synapse et conseil argument\xE9.",TBM:"9 \xE0 10 pts : articulation fluide entre donn\xE9es \xE9pid\xE9miologiques, d\xE9marche exp\xE9rimentale, \xE9chelle ~20 nm et r\xE9daction DNB exemplaire."}}}]});function gd(i){let e=85,t={85:{ex:"Trafic dense \xB7 Seuil de risque OMS",rule:"Dur\xE9e rep\xE8re : ~8 h max sans protection ; au-del\xE0, risque cumulatif pour les cellules cili\xE9es.",color:"#d99b00"},100:{ex:"\xC9couteurs volume \xE9lev\xE9",rule:"+15 dB (+5 paliers de +3 dB \u2192 temps tol\xE9r\xE9 \xF7 32) : risque en ~15 minutes.",color:"#e67e22"},110:{ex:"Concert / bo\xEEte / casque au max",rule:"+25 dB au-dessus du seuil de risque : danger grave en quelques minutes sans bouchons.",color:"#e4572e"},120:{ex:"Seuil de douleur (sir\xE8ne, enceinte)",rule:"L\xE9sions m\xE9caniques et destruction irr\xE9versible imm\xE9diate des cellules cili\xE9es.",color:"#b82424"}};function n(){let s=t[e],r=["125 Hz","250 Hz","500 Hz","1000 Hz","2000 Hz","4000 Hz"],a=[70,150,230,310,390,470],o=u=>24+u/60*126,l=[10,10,8,5,10,15],c=[12,14,18,30,42,48],h=a.map((u,d)=>`${u},${o(l[d]).toFixed(1)}`).join(" "),p=a.map((u,d)=>`${u},${o(c[d]).toFixed(1)}`).join(" ");i.innerHTML=`
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activit\xE9 A2 \xB7 OMS \xB7 DNB Am\xE9rique du Nord 2018 &amp; DNB Pro 2022</span>
            <h3>Audiogramme clinique &amp; r\xE8gle physique du +3 dB</h3>
          </div>
          <div class="doc-controls">
            ${[85,100,110,120].map(u=>`<button type="button" class="pill ${e===u?"on":""}" data-db="${u}">${u} dB</button>`).join("")}
          </div>
        </div>

        <p class="doc-note" style="margin:0 0 8px;border-left:4px solid ${s.color}">
          <strong>${e} dB (${s.ex}) :</strong> ${s.rule}
        </p>

        <svg viewBox="0 0 530 185" class="sci-svg" role="img" aria-label="Audiogramme comparant t\xE9moin 60 ans et M. X chaudronnier">
          <!-- Zones normal (<20 dB) vs perte -->
          <rect x="52" y="24" width="446" height="${o(20)-24}" fill="rgba(29,154,108,0.10)"/>
          <line x1="52" y1="${o(20)}" x2="498" y2="${o(20)}" stroke="#1d9a6c" stroke-width="1.6" stroke-dasharray="5 3"/>
          <text x="494" y="${o(20)-4}" text-anchor="end" class="svg-tag" fill="#1d9a6c">Seuil normal (&lt; 20 dB de perte)</text>

          <!-- Axes et graduations -->
          <line x1="52" y1="24" x2="52" y2="152" stroke="var(--fg-3)" stroke-width="1.4"/>
          <line x1="52" y1="24" x2="498" y2="24" stroke="var(--fg-3)" stroke-width="1.2"/>
          ${[0,10,20,30,40,50].map(u=>`
            <text x="46" y="${o(u)+3}" text-anchor="end" class="svg-sub">${u}</text>
            <line x1="52" y1="${o(u)}" x2="498" y2="${o(u)}" stroke="var(--line)" stroke-width="0.6"/>
          `).join("")}
          <text x="12" y="92" transform="rotate(-90 12 92)" text-anchor="middle" class="svg-sub">Perte auditive (dB)</text>

          ${a.map((u,d)=>`
            <line x1="${u}" y1="24" x2="${u}" y2="152" stroke="var(--line)" stroke-width="0.6"/>
            <text x="${u}" y="168" text-anchor="middle" class="svg-sub">${r[d]}</text>
          `).join("")}

          <!-- Courbe t\xE9moin 60 ans -->
          <polyline fill="none" stroke="#1d9a6c" stroke-width="2.6" points="${h}"/>
          ${a.map((u,d)=>`<circle cx="${u}" cy="${o(l[d])}" r="3.8" fill="#1d9a6c"/>`).join("")}
          <text x="310" y="${o(5)-6}" text-anchor="middle" class="svg-tag" fill="#1d9a6c">T\xE9moin (~5 dB \xE0 1000 Hz)</text>

          <!-- Courbe M. X -->
          <polyline fill="none" stroke="#e4572e" stroke-width="2.6" points="${p}"/>
          ${a.map((u,d)=>`<circle cx="${u}" cy="${o(c[d])}" r="4" fill="#e4572e"/>`).join("")}
          <text x="322" y="${o(30)+14}" text-anchor="start" class="svg-tag" fill="#e4572e">M. X (~30 dB \xE0 1000 Hz, chute aigus)</text>
        </svg>

        <p class="doc-note">
          <strong>Lecture DNB :</strong> dans les sons graves (125\u2013500 Hz), M. X reste sous les 20 dB. \xC0 1 000 Hz et dans les aigus (2 000\u20134 000 Hz), ses <strong>cellules cili\xE9es</strong> (non renouvelables) ont \xE9t\xE9 d\xE9truites par le bruit r\xE9p\xE9t\xE9.
        </p>
      </div>
    `,i.querySelectorAll("[data-db]").forEach(u=>{u.addEventListener("click",()=>{e=Number(u.dataset.db),n()})})}n()}function vd(i){let e="reflexe",t="idle",n=0,s=null,r=[];function a(){let o=e==="volontaire";i.innerHTML=`
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activit\xE9 A3 \xB7 S\xE9curit\xE9 routi\xE8re France &amp; protocole classe</span>
            <h3>Comparer r\xE9flexe m\xE9dullaire et mouvement volontaire</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${o?"":"on"}" data-cmode="reflexe">1. R\xE9flexe (moelle \xE9pini\xE8re)</button>
            <button type="button" class="pill ${o?"on":""}" data-cmode="volontaire">2. Freinage volontaire (cerveau)</button>
          </div>
        </div>

        <svg viewBox="0 0 540 200" class="sci-svg" role="img" aria-label="Comparaison trajet nerveux r\xE9flexe vs mouvement volontaire">
          <defs>
            <marker id="arrRef" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,1 L8,5 L0,9 z" fill="currentColor"/>
            </marker>
          </defs>

          <!-- Cerveau -->
          <rect x="200" y="14" width="160" height="44" rx="12"
                fill="${o?"rgba(106,63,176,0.20)":"rgba(128,140,160,0.08)"}"
                stroke="${o?"#6a3fb0":"var(--fg-3)"}" stroke-width="${o?2.4:1.3}"/>
          <text x="280" y="34" text-anchor="middle" class="svg-lbl">Cerveau (Cortex visuel \u2192 moteur)</text>
          <text x="280" y="49" text-anchor="middle" class="svg-sub">${o?"Int\xE9gration consciente indispensable (~0,25 \xE0 1 s)":"Inform\xE9 APR\xC8S l\u2019ordre r\xE9flexe"}</text>

          <!-- Moelle \xE9pini\xE8re -->
          <rect x="205" y="102" width="150" height="58" rx="10" fill="rgba(63,182,255,0.14)" stroke="#3fb6ff" stroke-width="2.2"/>
          <text x="280" y="126" text-anchor="middle" class="svg-lbl">Moelle \xE9pini\xE8re</text>
          <text x="280" y="143" text-anchor="middle" class="svg-sub">${o?"Relais descendant vers les nerfs":"Centre nerveux du r\xE9flexe court"}</text>

          <!-- Capteur -->
          <rect x="22" y="108" width="110" height="46" rx="8" fill="rgba(29,154,108,0.16)" stroke="#1d9a6c" stroke-width="2"/>
          <text x="77" y="128" text-anchor="middle" class="svg-lbl">${o?"\u0152il (danger)":"Peau (chaleur)"}</text>
          <text x="77" y="143" text-anchor="middle" class="svg-sub">R\xE9cepteur sensoriel</text>

          <!-- Muscle -->
          <rect x="408" y="108" width="110" height="46" rx="8" fill="rgba(228,87,46,0.16)" stroke="#e4572e" stroke-width="2"/>
          <text x="463" y="128" text-anchor="middle" class="svg-lbl">Muscle</text>
          <text x="463" y="143" text-anchor="middle" class="svg-sub">${o?"Pied sur le frein":"Retrait de la main"}</text>

          ${o?`
            <!-- Boucle longue volontaire -->
            <path d="M84,106 Q110,40 195,38" fill="none" stroke="#1d9a6c" stroke-width="2.8" marker-end="url(#arrRef)" style="color:#1d9a6c"/>
            <text x="112" y="54" text-anchor="middle" class="svg-tag" fill="#1d9a6c">Nerf optique</text>
            <path d="M280,60 L280,98" stroke="#6a3fb0" stroke-width="2.8" marker-end="url(#arrRef)" style="color:#6a3fb0"/>
            <path d="M358,136 L403,136" stroke="#e4572e" stroke-width="3" marker-end="url(#arrRef)" style="color:#e4572e"/>
            <text x="380" y="168" text-anchor="middle" class="svg-tag" fill="#e4572e">Nerf moteur</text>
          `:`
            <!-- Boucle courte r\xE9flexe -->
            <path d="M134,124 L201,124" stroke="#1d9a6c" stroke-width="3" marker-end="url(#arrRef)" style="color:#1d9a6c"/>
            <text x="167" y="114" text-anchor="middle" class="svg-tag" fill="#1d9a6c">Nerf sensitif</text>
            <path d="M358,136 L403,136" stroke="#e4572e" stroke-width="3" marker-end="url(#arrRef)" style="color:#e4572e"/>
            <text x="380" y="168" text-anchor="middle" class="svg-tag" fill="#e4572e">Nerf moteur</text>
            <path d="M280,100 L280,62" stroke="var(--fg-3)" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrRef)" style="color:var(--fg-3)"/>
          `}
        </svg>

        <table class="data-table" style="margin-top:8px">
          <thead><tr><th>Situation (S\xE9curit\xE9 routi\xE8re France)</th><th>Temps de r\xE9action</th><th>Distance avant freinage / Risque</th></tr></thead>
          <tbody>
            <tr><td>Conducteur sobre et attentif</td><td><strong>~1 s</strong></td><td>15 m \xE0 50 km/h \xB7 24 m \xE0 80 km/h</td></tr>
            <tr><td>Appel t\xE9l\xE9phonique</td><td><strong>+46 %</strong></td><td>Risque d\u2019accident <strong>\xD73</strong></td></tr>
            <tr><td>Lire / \xE9crire un SMS (~5 s)</td><td><strong>+37 %</strong></td><td><strong>70 \xE0 83 m</strong> \xAB \xE0 l\u2019aveugle \xBB \xE0 50 km/h \xB7 <strong>\xD723</strong></td></tr>
            <tr><td>Alcool\xE9mie positive</td><td><strong>+13 % minimum</strong></td><td>Ralentissement c\xE9r\xE9bral global</td></tr>
          </tbody>
        </table>

        <div class="react-box">
          <h4>Mesure exp\xE9rimentale en classe : chronom\xE8tre de mouvement volontaire (test de la r\xE8gle)</h4>
          <p class="muted" style="margin:2px 0 8px;font-size:12px">Clique sur \xAB D\xE9marrer \xBB, puis clique d\xE8s que le bouton passe au VERT (temps \u0153il \u2192 cortex visuel \u2192 cortex moteur \u2192 doigt).</p>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <button type="button" class="btn-primary" id="btnReactStart">D\xE9marrer un essai</button>
            <button type="button" class="react-pad" id="btnReactCatch" disabled>En attente\u2026</button>
            <button type="button" class="btn-ghost" id="btnReactReset">Effacer (${r.length})</button>
          </div>
          <div class="react-stats" id="reactStats"></div>
        </div>
      </div>
    `,i.querySelectorAll("[data-cmode]").forEach(d=>{d.addEventListener("click",()=>{e=d.dataset.cmode,a()})});let l=i.querySelector("#btnReactStart"),c=i.querySelector("#btnReactCatch"),h=i.querySelector("#btnReactReset"),p=i.querySelector("#reactStats");function u(d=""){let f=r.length?Math.round(r.reduce((m,g)=>m+g,0)/r.length):0,x=r.length?(50/3.6*(f/1e3)).toFixed(1):"\u2014";h.textContent=`Effacer (${r.length})`,p.innerHTML=`
        ${d?`<span class="badge">${d}</span>`:""}
        <span>Essais : <strong>${r.length?r.map(m=>`${m} ms`).join(", "):"\u2014"}</strong></span>
        <span>Moyenne : <strong>${f?`${f} ms (${x} m \xE0 50 km/h)`:"\u2014"}</strong></span>
      `}l.addEventListener("click",()=>{clearTimeout(s),t="wait",c.disabled=!1,c.classList.remove("ready"),c.textContent="Attends le VERT\u2026",s=setTimeout(()=>{t="go",n=performance.now(),c.classList.add("ready"),c.textContent="CLIQUE MAINTENANT !"},1100+Math.random()*1900)}),c.addEventListener("click",()=>{if(t==="wait")clearTimeout(s),t="idle",c.disabled=!0,c.textContent="Trop t\xF4t !",u("Faux d\xE9part (anticipation)");else if(t==="go"){let d=Math.round(performance.now()-n);r.push(d),t="idle",c.disabled=!0,c.classList.remove("ready"),c.textContent=`${d} ms`,u(`Mesure enregistr\xE9e : ${d} ms`)}}),h.addEventListener("click",()=>{clearTimeout(s),r.length=0,t="idle",a()}),u()}a()}function xd(i){let e="normal",t="muscle",n=!1,s=null,r={},a=[{id:"pre",text:"\xC9l\xE9ment pr\xE9synaptique",x:108,y:55},{id:"vesicule",text:"V\xE9sicule synaptique",x:192,y:112},{id:"fente",text:"Fente synaptique (~20 nm)",x:262,y:38},{id:"nt",text:"Neurotransmetteur",x:262,y:158},{id:"rec",text:"R\xE9cepteur sp\xE9cifique",x:374,y:74},{id:"post",text:"\xC9l\xE9ment postsynaptique",x:432,y:55}];function o(){let l=e==="block",c=e==="mimic",h=t==="muscle"?"Fibre musculaire (jonction neuromusculaire)":"Neurone postsynaptique",p=l?"Blocage type curare (Claude Bernard, 1856) / anesth\xE9sique : la mol\xE9cule X occupe les r\xE9cepteurs sans les activer \u2192 aucun message transmis malgr\xE9 nerf et muscle intacts.":c?"Mol\xE9cule Y (mim\xE9tique / agoniste) : imite la forme du neurotransmetteur naturel et active directement les r\xE9cepteurs.":"Transmission normale (Cajal, Nobel 1906) : le message \xE9lectrique d\xE9clenche l\u2019ouverture des v\xE9sicules ; les neurotransmetteurs traversent la fente (~20 nm) de fa\xE7on UNIDIRECTIONNELLE.",u=!l,d=t==="muscle"?u?"Contraction musculaire":"Paralysie (message bloqu\xE9)":u?"Nouveau message nerveux":"Aucun message transmis";i.innerHTML=`
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activit\xE9 A4 &amp; DNB 3 \xB7 \xC9chelle ~20 nm (Cajal 1906 / Claude Bernard 1856)</span>
            <h3>La synapse chimique (${t==="muscle"?"neurone \u2192 muscle":"neurone \u2192 neurone"})</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${t==="muscle"?"on":""}" data-target="muscle">Neurone\u2013Muscle</button>
            <button type="button" class="pill ${t==="neurone"?"on":""}" data-target="neurone">Neurone\u2013Neurone</button>
            <button type="button" class="pill ${n?"on":""}" data-quiz="1">${n?"Quitter quiz l\xE9gende":"Quiz l\xE9gende (DNB)"}</button>
          </div>
        </div>

        <div class="doc-controls" style="margin-bottom:8px">
          <button type="button" class="pill ${e==="normal"?"on":""}" data-mode="normal">1. Normal</button>
          <button type="button" class="pill ${e==="block"?"on":""}" data-mode="block">2. Curare / Mol\xE9cule X (bloquante)</button>
          <button type="button" class="pill ${e==="mimic"?"on":""}" data-mode="mimic">3. Mol\xE9cule Y (mim\xE9tique)</button>
        </div>

        ${n?`
          <div class="quiz-bank">
            <span class="muted">Clique sur une \xE9tiquette puis sur la pastille correspondante sur le sch\xE9ma :</span>
            <div class="quiz-chips">
              ${a.map(f=>{let x=r[f.id]===f.id;return`<button type="button" class="qchip ${s===f.id?"sel":""} ${x?"done":""}" data-pick="${f.id}">${f.text}${x?" \u2713":""}</button>`}).join("")}
            </div>
          </div>
        `:""}

        <svg viewBox="0 0 540 235" class="sci-svg" role="img" aria-label="Sch\xE9ma fonctionnel de la synapse chimique">
          <defs>
            <linearGradient id="synPre" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#3a6ea5" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#3a6ea5" stop-opacity="0.55"/>
            </linearGradient>
            <linearGradient id="synPost" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="${t==="muscle"?"#c9624a":"#6a3fb0"}" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="${t==="muscle"?"#c9624a":"#6a3fb0"}" stop-opacity="0.22"/>
            </linearGradient>
            <marker id="arrSyn" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,1 L8,5 L0,9 z" fill="currentColor"/>
            </marker>
          </defs>

          <rect x="236" y="45" width="54" height="145" rx="6" fill="rgba(128,150,190,0.08)" stroke="rgba(128,150,190,0.28)" stroke-dasharray="4 3"/>

          <path d="M12,92 L130,92 Q185,55 232,68 Q242,120 232,172 Q185,185 130,148 L12,148 Z"
                fill="url(#synPre)" stroke="#4c8fd6" stroke-width="2.2"/>
          <text x="20" y="198" class="svg-sub">Sens unidirectionnel \u2192</text>
          <path d="M24,120 L118,120" stroke="#ffd23f" stroke-width="3.5" marker-end="url(#arrSyn)" style="color:#ffd23f"/>
          <text x="20" y="110" class="svg-tag" fill="#d99b00">Message \xE9lectrique</text>

          <circle cx="165" cy="100" r="14" fill="rgba(63,182,255,0.22)" stroke="#3fb6ff" stroke-width="1.8"/>
          <circle cx="161" cy="97" r="3" fill="#3fb6ff"/><circle cx="169" cy="103" r="3" fill="#3fb6ff"/>
          <circle cx="195" cy="128" r="14" fill="rgba(63,182,255,0.22)" stroke="#3fb6ff" stroke-width="1.8"/>
          <circle cx="192" cy="125" r="3" fill="#3fb6ff"/><circle cx="199" cy="131" r="3" fill="#3fb6ff"/>

          ${c?`
            <g class="nt-float">
              <polygon points="256,88 262,98 250,98" fill="#2bb673"/>
              <polygon points="274,116 280,126 268,126" fill="#2bb673"/>
              <polygon points="260,142 266,152 254,152" fill="#2bb673"/>
            </g>
          `:`
            <g class="nt-float">
              <circle cx="250" cy="96" r="4.2" fill="#3fb6ff"/>
              <circle cx="264" cy="120" r="4.2" fill="#3fb6ff"/>
              <circle cx="252" cy="144" r="4.2" fill="#3fb6ff"/>
              <circle cx="274" cy="106" r="4.2" fill="#3fb6ff"/>
              <circle cx="272" cy="135" r="4.2" fill="#3fb6ff"/>
            </g>
          `}

          <path d="M294,68 Q340,56 392,84 L528,84 L528,158 L392,158 Q340,186 294,172 Q284,120 294,68 Z"
                fill="url(#synPost)" stroke="${t==="muscle"?"#d96b52":"#8b63d9"}" stroke-width="2.2"/>
          <text x="415" y="198" text-anchor="middle" class="svg-sub">${h}</text>

          ${[86,120,152].map(f=>`
            <path d="M286,${f-7} L298,${f-7} L298,${f+7} L286,${f+7}" fill="none" stroke="#e2a832" stroke-width="3"/>
            ${l?`<rect x="280" y="${f-5}" width="11" height="10" rx="2" fill="#e4572e"/>`:c?`<polygon points="282,${f} 292,${f-5} 292,${f+5}" fill="#2bb673"/>`:`<circle cx="288" cy="${f}" r="4.5" fill="#3fb6ff"/>`}
          `).join("")}

          <path d="M370,120 L488,120" stroke="${u?"#2bb673":"#e4572e"}" stroke-width="3.5"
                stroke-dasharray="${u?"none":"5 5"}" marker-end="url(#arrSyn)"
                style="color:${u?"#2bb673":"#e4572e"}"/>
          <text x="366" y="109" class="svg-tag" fill="${u?"#1b8a54":"#c0392b"}">${d}</text>

          ${a.map((f,x)=>{if(!n)return`<g>
                <rect x="${f.x-65}" y="${f.y-11}" width="142" height="18" rx="4" fill="var(--surface-solid)" stroke="var(--line)"/>
                <text x="${f.x+6}" y="${f.y+1}" text-anchor="middle" class="svg-lbl">${f.text}</text>
              </g>`;let m=r[f.id]===f.id;return`<g class="svg-slot" data-slot="${f.id}" style="cursor:pointer">
              <circle cx="${f.x}" cy="${f.y}" r="11" fill="${m?"#2bb673":"var(--accent)"}"/>
              <text x="${f.x}" y="${f.y+4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">${m?"\u2713":x+1}</text>
            </g>`}).join("")}
        </svg>

        <p class="doc-note ${l?"warn":""}">${p}</p>
      </div>
    `,i.querySelectorAll("[data-mode]").forEach(f=>f.addEventListener("click",()=>{e=f.dataset.mode,o()})),i.querySelectorAll("[data-target]").forEach(f=>f.addEventListener("click",()=>{t=f.dataset.target,o()})),i.querySelector("[data-quiz]")?.addEventListener("click",()=>{n=!n,s=null,o()}),i.querySelectorAll("[data-pick]").forEach(f=>f.addEventListener("click",()=>{s=f.dataset.pick,o()})),i.querySelectorAll("[data-slot]").forEach(f=>f.addEventListener("click",()=>{s&&(s===f.dataset.slot?(r[f.dataset.slot]=s,s=null):f.querySelector("circle")?.setAttribute("fill","#e4572e"),o())}))}o()}function yd(i){let e="enclass";function t(){let n=e==="protocole";i.innerHTML=`
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activit\xE9 A5 &amp; DNB 3 \xB7 EnCLASS 2024 \xB7 ANSES (13 janv. 2026) \xB7 Gais &amp; Born</span>
            <h3>Sommeil, smartphones et consolidation de la m\xE9moire</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${n?"":"on"}" data-stab="enclass">1. Enqu\xEAtes France (2024\u20132026)</button>
            <button type="button" class="pill ${n?"on":""}" data-stab="protocole">2. Exp\xE9rience Gais &amp; Born + H.M.</button>
          </div>
        </div>

        ${n?`
          <table class="data-table">
            <thead>
              <tr><th>\xC9tude scientifique</th><th>Protocole / Observation</th><th>Conclusion valid\xE9e</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gais, Lucas &amp; Born (2006)</strong><br><em>Learning &amp; Memory</em></td>
                <td>2 groupes comparables apprennent des paires de mots : le <strong>groupe Sommeil</strong> dort juste apr\xE8s ; le <strong>groupe \xC9veil</strong> attend la m\xEAme dur\xE9e r\xE9veill\xE9 avant d'\xEAtre test\xE9.</td>
                <td>Le sommeil suivant imm\xE9diatement l'apprentissage consolide activement le rappel et prot\xE8ge contre l'oubli/interf\xE9rence.</td>
              </tr>
              <tr>
                <td><strong>Patient H.M. (Scoville &amp; Milner, 1957)</strong></td>
                <td>Retrait des deux <strong>hippocampes</strong> : aucun nouveau souvenir conscient, mais progression conserv\xE9e au dessin en miroir.</td>
                <td>M\xE9moires multiples : <strong>hippocampe + cortex</strong> (savoirs/le\xE7ons) vs <strong>cervelet + striatum</strong> (gestes).</td>
              </tr>
            </tbody>
          </table>
          <p class="doc-note"><strong>M\xE9canisme cellulaire :</strong> durant le sommeil, l'hippocampe r\xE9active les r\xE9seaux de synapses form\xE9s le jour, stabilisant la trace mn\xE9sique dans le cortex.</p>
        `:`
          <p style="margin:0 0 8px"><strong>Besoin physiologique au coll\xE8ge : 8 \xE0 9 h par nuit.</strong> Dur\xE9e moyenne mesur\xE9e en semaine (<em>EnCLASS 2024</em>) : <strong>8 h 16 min</strong>.</p>
          <svg viewBox="0 0 520 165" class="sci-svg" role="img" aria-label="Donn\xE9es officielles EnCLASS 2024 et ANSES 2026">
            <!-- EnCLASS 2024 -->
            <text x="14" y="20" class="svg-tag" fill="var(--accent)">EnCLASS 2024 \u2014 Coll\xE9giens (OFDT / Sant\xE9 publique France)</text>
            ${[{lbl:"Dorment moins de 7 h / nuit",val:13.8,col:"#e67e22",y:34},{lbl:"En dette de sommeil (> 2 h le week-end)",val:26.7,col:"#e4572e",y:58},{lbl:"Fatigu\xE9s presque tous les matins",val:30.6,col:"#c0392b",y:82}].map(s=>`
              <text x="14" y="${s.y+12}" class="svg-sub">${s.lbl}</text>
              <rect x="250" y="${s.y}" width="${s.val/100*215}" height="16" rx="4" fill="${s.col}"/>
              <text x="${256+s.val/100*215}" y="${s.y+12}" class="svg-lbl">${String(s.val).replace(".",",")} %</text>
            `).join("")}

            <!-- ANSES 2026 -->
            <text x="14" y="120" class="svg-tag" fill="#1d9a6c">ANSES (avis du 13 janv. 2026) \u2014 Jeunes de 12\u201317 ans</text>
            ${[{lbl:"Consultent les r\xE9seaux sociaux chaque jour",val:58,col:"#6a3fb0",y:132},{lbl:"Passent 2 \xE0 5 h/jour sur smartphone",val:42,col:"#3a6ea5",y:156}].map(s=>`
              <text x="14" y="${s.y+2}" class="svg-sub">${s.lbl}</text>
              <rect x="250" y="${s.y-10}" width="${s.val/100*215}" height="15" rx="4" fill="${s.col}"/>
              <text x="${256+s.val/100*215}" y="${s.y+2}" class="svg-lbl">${s.val.toFixed(0)} % (et 9 % &gt; 5 h/j)</text>
            `).join("")}
          </svg>
          <p class="doc-note"><strong>M\xE9thode (DNB) :</strong> ces enqu\xEAtes d\xE9crivent une situation fr\xE9quente ; pour prouver que le sommeil cause la consolidation, il faut une exp\xE9rience contr\xF4l\xE9e (onglet 2).</p>
        `}
      </div>
    `,i.querySelectorAll("[data-stab]").forEach(s=>{s.addEventListener("click",()=>{e=s.dataset.stab,t()})})}t()}function _d(i){let e=!0,t=[{lbl:"Manger (besoin vital)",val:88,col:"#1d9a6c"},{lbl:"Boire (besoin vital)",val:88,col:"#2bb673"},{lbl:"Obtenir une bonne note",val:52,col:"#3a6ea5"},{lbl:"R\xE9diger une punition",val:3,col:"#7f8c8d"},{lbl:"Addiction \xE0 un jeu",val:82,col:"#e4572e"}];function n(){i.innerHTML=`
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activit\xE9 A6 \xB7 Lelivrescolaire.fr SVT 3e (Doc. 8) &amp; EnCLASS 2024 / Loi f\xE9v. 2025</span>
            <h3>Dopamine dans le circuit de la r\xE9compense &amp; maturation du contr\xF4le</h3>
          </div>
          <button type="button" class="pill ${e?"on":""}" id="btnTogglePfc">${e?"Masquer note pr\xE9frontale":"Afficher note ado"}</button>
        </div>

        <svg viewBox="0 0 520 165" class="sci-svg" role="img" aria-label="Lib\xE9ration relative de dopamine en unit\xE9 arbitraire">
          <text x="14" y="20" class="svg-tag" fill="var(--fg)">Lib\xE9ration relative de dopamine (Unit\xE9 arbitraire / 100 \u2014 d\u2019apr\xE8s Lelivrescolaire Doc. 8)</text>
          ${t.map((s,r)=>{let a=34+r*25;return`
              <text x="14" y="${a+13}" class="svg-sub">${s.lbl}</text>
              <rect x="210" y="${a+2}" width="${s.val/100*245}" height="15" rx="4" fill="${s.col}"/>
              <text x="${216+s.val/100*245}" y="${a+13}" class="svg-lbl">~${s.val} UA</text>
            `}).join("")}
        </svg>

        <table class="data-table" style="margin-top:8px">
          <thead><tr><th>Indicateur sant\xE9 publique</th><th>Mesure officielle</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>Tabac fum\xE9 au coll\xE8ge</td><td><strong>7,7 %</strong> d'exp\xE9rimentation \xB7 <strong>0,9 %</strong> quotidien</td><td>EnCLASS 2024</td></tr>
            <tr><td>Vapotage au lyc\xE9e / puffs</td><td>Pr\xE8s de <strong>46 %</strong> d'exp\xE9rimentation au lyc\xE9e \u2192 <strong>puffs interdites</strong></td><td>EnCLASS 2024 \xB7 Loi 24 f\xE9v. 2025</td></tr>
          </tbody>
        </table>

        ${e?`
          <p class="doc-note warn">
            <strong>Pourquoi les adolescents sont-ils plus vuln\xE9rables ?</strong> Le noyau accumbens r\xE9pond d\xE9j\xE0 tr\xE8s fortement aux pics artificiels (nicotine des puffs, boucles de r\xE9compense al\xE9atoire), tandis que le <strong>cortex pr\xE9frontal</strong> (frein, \xE9valuation des risques) poursuit sa maturation jusqu'\xE0 ~25 ans.
          </p>
        `:""}
      </div>
    `,i.querySelector("#btnTogglePfc")?.addEventListener("click",()=>{e=!e,n()})}n()}var bd=jt(()=>{});function kr(i,e){var t=Jv(i);return t+8>i.length&&En(6,"invalid gzip data"),Zv(i.subarray(t,-8),{i:2},e&&e.out||new an(Kv(i)),e&&e.dictionary)}var an,Ls,kv,Md,Sd,Hv,Ed,wd,Ad,Gv,Td,Vv,Pb,Gc,Qn,et,Br,zr,et,et,et,et,Cd,et,qv,Wv,kc,Sn,Hc,$v,Xv,Yv,En,Zv,jv,Jv,Kv,Qv,ex,Rd=jt(()=>{an=Uint8Array,Ls=Uint16Array,kv=Int32Array,Md=new an([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Sd=new an([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hv=new an([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ed=function(i,e){for(var t=new Ls(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new kv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},wd=Ed(Md,2),Ad=wd.b,Gv=wd.r;Ad[28]=258,Gv[258]=28;Td=Ed(Sd,0),Vv=Td.b,Pb=Td.r,Gc=new Ls(32768);for(et=0;et<32768;++et)Qn=(et&43690)>>1|(et&21845)<<1,Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,Gc[et]=((Qn&65280)>>8|(Qn&255)<<8)>>1;Br=(function(i,e,t){for(var n=i.length,s=0,r=new Ls(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new Ls(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Ls(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=e-i[s],p=a[i[s]-1]++<<h,u=p|(1<<h)-1;p<=u;++p)o[Gc[p]>>l]=c}else for(o=new Ls(n),s=0;s<n;++s)i[s]&&(o[s]=Gc[a[i[s]-1]++]>>15-i[s]);return o}),zr=new an(288);for(et=0;et<144;++et)zr[et]=8;for(et=144;et<256;++et)zr[et]=9;for(et=256;et<280;++et)zr[et]=7;for(et=280;et<288;++et)zr[et]=8;Cd=new an(32);for(et=0;et<32;++et)Cd[et]=5;qv=Br(zr,9,1),Wv=Br(Cd,5,1),kc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Sn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Hc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},$v=function(i){return(i+7)/8|0},Xv=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new an(i.subarray(e,t))},Yv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],En=function(i,e,t){var n=new Error(e||Yv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,En),!t)throw n;return n},Zv=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new an(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new an(s*3));var c=function(U){var ae=t.length;if(U>ae){var oe=new an(Math.max(ae*2,U));oe.set(t),t=oe}},h=e.f||0,p=e.p||0,u=e.b||0,d=e.l,f=e.d,x=e.m,m=e.n,g=s*8;do{if(!d){h=Sn(i,p,1);var y=Sn(i,p+1,3);if(p+=3,y)if(y==1)d=qv,f=Wv,x=9,m=5;else if(y==2){var w=Sn(i,p,31)+257,v=Sn(i,p+10,15)+4,S=w+Sn(i,p+5,31)+1;p+=14;for(var N=new an(S),P=new an(19),L=0;L<v;++L)P[Hv[L]]=Sn(i,p+L*3,7);p+=v*3;for(var H=kc(P),X=(1<<H)-1,I=Br(P,H,1),L=0;L<S;){var q=I[Sn(i,p,X)];p+=q&15;var b=q>>4;if(b<16)N[L++]=b;else{var k=0,O=0;for(b==16?(O=3+Sn(i,p,3),p+=2,k=N[L-1]):b==17?(O=3+Sn(i,p,7),p+=3):b==18&&(O=11+Sn(i,p,127),p+=7);O--;)N[L++]=k}}var Y=N.subarray(0,w),G=N.subarray(w);x=kc(Y),m=kc(G),d=Br(Y,x,1),f=Br(G,m,1)}else En(1);else{var b=$v(p)+4,E=i[b-4]|i[b-3]<<8,A=b+E;if(A>s){l&&En(0);break}o&&c(u+E),t.set(i.subarray(b,A),u),e.b=u+=E,e.p=p=A*8,e.f=h;continue}if(p>g){l&&En(0);break}}o&&c(u+131072);for(var K=(1<<x)-1,ne=(1<<m)-1,ye=p;;ye=p){var k=d[Hc(i,p)&K],Ie=k>>4;if(p+=k&15,p>g){l&&En(0);break}if(k||En(2),Ie<256)t[u++]=Ie;else if(Ie==256){ye=p,d=null;break}else{var Q=Ie-254;if(Ie>264){var L=Ie-257,ue=Md[L];Q=Sn(i,p,(1<<ue)-1)+Ad[L],p+=ue}var Ee=f[Hc(i,p)&ne],Pe=Ee>>4;Ee||En(3),p+=Ee&15;var G=Vv[Pe];if(Pe>3){var ue=Sd[Pe];G+=Hc(i,p)&(1<<ue)-1,p+=ue}if(p>g){l&&En(0);break}o&&c(u+131072);var T=u+Q;if(u<G){var Z=r-G,z=Math.min(G,T);for(Z+u<0&&En(3);u<z;++u)t[u]=n[Z+u]}for(;u<T;++u)t[u]=t[u-G]}}e.l=d,e.p=ye,e.b=u,e.f=h,d&&(h=1,e.m=x,e.d=f,e.n=m)}while(!h);return u!=t.length&&a?Xv(t,0,u):t.subarray(0,u)},jv=new an(0),Jv=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&En(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Kv=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};Qv=typeof TextDecoder<"u"&&new TextDecoder,ex=0;try{Qv.decode(jv,{stream:!0}),ex=1}catch{}});function nl(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Pd(){let i=window.BRAIN_DATA,e=kr(nl(window.BRAIN_BLOB)),t=e.buffer,n=e.byteOffset,s=i.quant;return{parts:i.parts.map(a=>{let o=new Int16Array(t,n+a.pos,a.nv*3),l=new Int8Array(t,n+a.nrm,a.nv*3),c=new Uint8Array(t,n+a.shade,a.nv),h=a.i32?new Uint32Array(t,n+a.idx,a.ni):new Uint16Array(t,n+a.idx,a.ni),p=a.net!==void 0?new Uint8Array(t,n+a.net,a.nv):null,u=new Float32Array(a.nv*3);for(let x=0;x<u.length;x++)u[x]=o[x]*s;let d=new Float32Array(a.nv*3);for(let x=0;x<d.length;x++)d[x]=l[x]/127;let f=new Float32Array(a.nv);for(let x=0;x<f.length;x++)f[x]=c[x]/255;return{...a,positions:u,normals:d,shade:f,indices:h,net:p}})}}function Id(){let i=window.MRI_DATA,e=kr(nl(window.MRI_T1)),t=kr(nl(window.MRI_LAB));return{shape:i.shape,origin:i.origin,vox:i.vox,labels:i.labels,t1:e,lab:t}}function Ld(){let i=window.MICRO_DATA;if(!i||!window.MICRO_BLOB)return null;let e=kr(nl(window.MICRO_BLOB)),t=e.buffer,n=e.byteOffset,s=i.quant,r=i.parts.map(o=>{let l=new Int16Array(t,n+o.offPos,o.nv*3),c=new Int8Array(t,n+o.offNrm,o.nv*3),h=new Uint8Array(t,n+o.offShade,o.nv),p=new Uint8Array(t,n+o.offComp,o.nv),u=new Uint8Array(t,n+o.offTalong,o.nv),d=o.i32?new Uint32Array(t,n+o.offIdx,o.ni):new Uint16Array(t,n+o.offIdx,o.ni),f=new Float32Array(o.nv*3);for(let b=0;b<f.length;b++)f[b]=l[b]*s;let x=new Float32Array(o.nv*3);for(let b=0;b<x.length;b++)x[b]=c[b]/127;let m=new Float32Array(o.nv);for(let b=0;b<m.length;b++)m[b]=h[b]/255;let g=new Float32Array(o.nv),y=new Float32Array(o.nv);for(let b=0;b<o.nv;b++)g[b]=p[b],y[b]=u[b]/255;return{...o,positions:f,normals:x,shade:m,comp:g,tAlong:y,indices:d}}),a=new Uint8Array(t,n+i.swarm.offTraces,i.swarm.lenTraces);return{parts:r,synapsePaths:i.synapsePaths,swarm:{...i.swarm,traces:a}}}var Dd=jt(()=>{Rd()});function nx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fd),this.state=tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=tt.DOLLY;break;case vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}break;case vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(qc)}function ax(i){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ox(i){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(i.preventDefault(),this.dispatchEvent(qc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fd))}function lx(i){this.enabled!==!1&&this._handleKeyDown(i)}function cx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1){this.state=tt.NONE;break}this._handleTouchStartRotate(i),this.state=tt.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1){this.state=tt.NONE;break}this._handleTouchStartPan(i),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=tt.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(qc)}function ux(i){switch(this._trackPointer(i),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=tt.NONE}}function hx(i){this.enabled!==!1&&i.preventDefault()}function dx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function px(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nd,qc,Fd,il,Ud,tx,wt,Zt,tt,Vc,Ds,Wc=jt(()=>{Ps();Nd={type:"change"},qc={type:"start"},Fd={type:"end"},il=new $n,Ud=new Wt,tx=Math.cos(70*bc.DEG2RAD),wt=new R,Zt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vc=1e-6,Ds=class extends Er{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Qt,this._lastTargetPosition=new R,this._quat=new Qt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bs,this._sphericalDelta=new bs,this._scale=1,this._panOffset=new R,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new R,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ix.bind(this),this._onPointerDown=nx.bind(this),this._onPointerUp=sx.bind(this),this._onContextMenu=hx.bind(this),this._onMouseWheel=ox.bind(this),this._onKeyDown=lx.bind(this),this._onTouchStart=cx.bind(this),this._onTouchMove=ux.bind(this),this._onMouseDown=rx.bind(this),this._onMouseMove=ax.bind(this),this._interceptControlDown=dx.bind(this),this._interceptControlUp=px.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nd),this.update(),this.state=tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),s<-Math.PI?s+=Zt:s>Math.PI&&(s-=Zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=wt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(il.origin.copy(this.object.position),il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(il.direction))<tx?this.object.lookAt(this.target):(Ud.setFromNormalAndCoplanarPoint(this.object.up,this.target),il.intersectPlane(Ud,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vc||this._lastTargetPosition.distanceToSquared(this.target)>Vc?(this.dispatchEvent(Nd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function Ns(i){return new vr({color:0,emissive:16777215,emissiveIntensity:i})}var sl,Od=jt(()=>{Ps();sl=class extends Wn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new In;e.deleteAttribute("uv");let t=new Pi({side:Mt}),n=new Pi,s=new Mr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new li(e,n,6),o=new gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new je(e,Ns(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new je(e,Ns(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new je(e,Ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let p=new je(e,Ns(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new je(e,Ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new je(e,Ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});function $c(i){return new Ne(i)}var fx,rl,Bd=jt(()=>{Ps();Wc();Od();el();zc();fx=new R(0,0,1);rl=class{constructor(e,t,n,s={}){this.canvas=e,this.brainData=t,this.mri=n,this.cb=s,this.state={theme:"light",deep:!1,hemiMode:"both",colorMode:"regions",activeNetwork:0,isolatedKey:null,hoveredPart:null,activePathway:null,activeRouteIdx:-1,activeSystem:null,activeClinical:null,mriOpen:!1,mriAxis:"sag",mriPosMm:[24,-22,6],mriClip:!1,mriOverlay:!0},this._initRenderer(),this._initScene(),this._buildBrainMeshes(),this._initMriPlane(),this._bindEvents(),this.flyAnim=null,this.paused=!1,this.clock=new Di,this.pathwayGroup=new Nt,this.brainRoot.add(this.pathwayGroup),this.particles=[],this.routeMeshes=[],this.routeEndpoints=[],this._applyMaterials(),this._animate()}_initRenderer(){let e=new Cs({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=Pt,e.toneMapping=Fi,e.toneMappingExposure=1.06,e.localClippingEnabled=!0,this.renderer=e;let t=new Ts(e);this.envTex=t.fromScene(new sl,.04).texture,t.dispose()}_initScene(){let e=new Wn;e.environment=this.envTex,this.scene=e;let t=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight,s=new It(34,t/n,1,1600);this.camera=s;let r=new Ds(s,this.canvas);r.enableDamping=!0,r.dampingFactor=.08,r.rotateSpeed=.78,r.zoomSpeed=.9,r.minDistance=95,r.maxDistance=600,this.controls=r;let a=new yr(16185599,2502205,.55);e.add(a);let o=new Ii(16775149,1.35);o.position.set(-140,180,120),e.add(o);let l=new Ii(14149375,.55);l.position.set(160,40,-130),e.add(l);let c=new Ii(12176639,.75);c.position.set(40,-120,160),e.add(c);let h=new Nt;h.rotation.x=-Math.PI/2,e.add(h),this.brainRoot=h,this.centerMni=new R(0,-16,4),this.centerWorld=new R(0,4,16),r.target.copy(this.centerWorld),s.position.set(-335,28,22),r.update(),this.clipPlane=new Wt(new R(-1,0,0),0)}_buildBrainMeshes(){this.parts=[],this.partsByKey=new Map;let e=new Yt;for(let t of this.brainData.parts){let n=new lt;n.setAttribute("position",new Ze(t.positions,3)),n.setAttribute("normal",new Ze(t.normals,3)),n.setIndex(new Ze(t.indices,1));let s=new Float32Array(t.nv*3);n.setAttribute("color",new Ze(s,3));let r=t.shade;if(t.key==="cervelet"){r=new Float32Array(t.nv);for(let u=0;u<t.nv;u++){let d=t.positions[u*3+1],f=t.positions[u*3+2],x=.9+.1*Math.sin(f*1.45+d*.35);r[u]=t.shade[u]*x}}let a=t.kind!=="cortex"&&t.kind!=="medial",o=t.kind==="medial"||t.key==="insula"||t.key==="pfc_median",l=new xs({vertexColors:!0,roughness:a?.34:.48,metalness:.02,clearcoat:a?.42:.22,clearcoatRoughness:.36,envMapIntensity:.68,side:o?Ft:sn}),c=new xs({vertexColors:!0,transparent:!0,opacity:.14,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.25,envMapIntensity:.55,side:o?Ft:sn}),h=new je(n,l);h.userData.partRef=t,this.brainRoot.add(h);let p={...t,geom:n,colors:s,effectiveShade:r,solidMat:l,ghostMat:c,mesh:h,isDeep:a,centerVec:new R(...t.center)};this.parts.push(p),this.partsByKey.has(t.key)||this.partsByKey.set(t.key,[]),this.partsByKey.get(t.key).push(p),t.kind!=="medial"&&(e.expandByPoint(new R(...t.min)),e.expandByPoint(new R(...t.max)))}e.getCenter(this.centerMni),this.centerWorld.set(this.centerMni.x,this.centerMni.z,-this.centerMni.y),this.controls.target.copy(this.centerWorld),this.camera.position.set(this.centerWorld.x-335,this.centerWorld.y+22,this.centerWorld.z+12),this.controls.update(),this._recolorVertices()}_recolorVertices(){let e=this.state.colorMode,t=this.state.activeNetwork,n=new Ne,s=new Ne("#8f97a4"),r=Fn.map(a=>a?new Ne(a.color):s);for(let a of this.parts){let o=at[a.key]||{color:"#99a2b0",lobe:null},l=$c(o.color);e==="lobes"&&o.lobe&&Is[o.lobe]&&(l=$c(Is[o.lobe].color));let c=a.colors,h=a.effectiveShade;if(e==="networks"&&a.net)for(let p=0;p<a.nv;p++){let u=a.net[p],d=u>0&&(t===0||t===u)?r[u]:s,f=t>0&&u!==t?.52:1,x=h[p]*f;c[p*3]=d.r*x,c[p*3+1]=d.g*x,c[p*3+2]=d.b*x}else{let p=e==="networks"&&!a.net?s:l,u=e==="networks"&&!a.net?.55:1;for(let d=0;d<a.nv;d++){let f=h[d]*u;c[d*3]=p.r*f,c[d*3+1]=p.g*f,c[d*3+2]=p.b*f}}a.geom.attributes.color.needsUpdate=!0,n.copy(l)}}_applyMaterials(){let e=this.state,t=e.theme==="light",n=e.isolatedKey?.08:e.deep?.14:.12,s=e.isolatedKey?.11:.16,r=e.activeClinical?ki[e.activeClinical]:null,a=e.activeSystem?Kn[e.activeSystem]:null,o=e.colorMode==="networks"&&e.activeNetwork>0,l=!!(e.activePathway||a||r),c=e.hemiMode!=="onlyR",h=e.hemiMode!=="onlyL",p=e.mriOpen&&e.mriClip?[this.clipPlane]:[];for(let u of this.parts){if(u.hemi==="L"&&!c){u.mesh.visible=!1;continue}if(u.hemi==="R"&&!h){u.mesh.visible=!1;continue}u.key==="paroi_mediane"&&e.hemiMode==="both"&&e.isolatedKey,u.mesh.visible=!0;let d=!0,f=!1;if(e.isolatedKey)d=u.key===e.isolatedKey;else if(r)d=r.up.includes(u.key)||r.down.includes(u.key);else if(a){let x=a.structures.includes(u.key);d=x&&u.isDeep,f=x&&!u.isDeep}else if(e.activePathway){let x=Jn[e.activePathway],g=new Set(x.routes.flat()).has(u.key);d=g&&u.isDeep,f=g&&!u.isDeep}else o?d=u.kind==="cortex":e.deep&&(d=u.isDeep);if(u.key==="paroi_mediane"&&(e.deep||e.isolatedKey||l||o)){u.mesh.visible=!1;continue}if(d){u.mesh.material=u.solidMat,u.mesh.renderOrder=0;let x=e.hoveredPart&&e.hoveredPart.key===u.key,m=e.isolatedKey===u.key;u.solidMat.emissive.setHex(m?2497090:x?1975606:0),u.solidMat.emissiveIntensity=m?.45:x?.55:0,u.solidMat.clippingPlanes=p,u.solidMat.needsUpdate=!0}else u.mesh.material=u.ghostMat,u.mesh.renderOrder=1,u.ghostMat.opacity=f?.34:u.isDeep?s:n,u.ghostMat.color.setHex(f?16777215:t?13161186:11715552),u.ghostMat.emissive.setHex(t?4544632:2899034),u.ghostMat.emissiveIntensity=f?.08:t?.12:.22,u.ghostMat.clippingPlanes=p,u.ghostMat.needsUpdate=!0}}_rebuildPathways(){for(;this.pathwayGroup.children.length;){let d=this.pathwayGroup.children[0];this.pathwayGroup.remove(d),d.geometry&&d.geometry.dispose(),d.material&&d.material.dispose()}this.particles=[],this.routeMeshes=[],this.routeEndpoints=[];let e=this.state.activePathway,t=this.state.activeSystem,n=[],s="mod",r="#ae8cff";if(e&&Jn[e]){let d=Jn[e];n=d.routes,s=d.type,r=d.color}else if(t&&Kn[t]){let d=Kn[t];n=d.circuit,s="mod",r=d.color}else return;let a=new Ne(r),o=this.state.hemiMode!=="onlyR",l=this.state.hemiMode!=="onlyL",c=(d,f)=>{let x=this.partsByKey.get(d)||[],m=this.partsByKey.get(f)||[],g=[];for(let y of x)if(!(y.hemi==="L"&&!o||y.hemi==="R"&&!l))for(let b of m)b.hemi==="L"&&!o||b.hemi==="R"&&!l||y.hemi!=="M"&&b.hemi!=="M"&&y.hemi!==b.hemi||g.push([y,b]);return g},h=new pi(1.55,12,12),p=new mr(1.85,.44,10,22),u=new pi(1.35,10,10);n.forEach(([d,f],x)=>{let m=this.state.activeRouteIdx===x,g=this.state.activeRouteIdx>=0&&!m,y=c(d,f);for(let[b,E]of y){let A=b.centerVec,w=E.centerVec,v=A.clone().add(w).multiplyScalar(.5),S=v.clone().sub(this.centerMni);S.lengthSq()<1&&S.set(0,0,1),S.normalize();let N=A.distanceTo(w);v.addScaledVector(S,Math.min(18,N*.24));let P=new vs([A.clone(),v,w.clone()]),L=new gr(P,28,m?.85:.48,8,!1),H=new tn({color:a,transparent:!0,opacity:g?.14:m?.85:.42,depthWrite:!1}),X=new je(L,H);if(X.userData.routeIdx=x,this.pathwayGroup.add(X),this.routeMeshes.push(X),m&&this.routeEndpoints.push({text:at[d]?.name||d,posMni:A.clone(),color:r},{text:at[f]?.name||f,posMni:w.clone(),color:r}),g)continue;let I=m?5:3,q=s==="exc"?h:s==="inh"?p:u;for(let k=0;k<I;k++){let O=new tn({color:s==="inh"?16752762:s==="exc"?8378623:a,transparent:!0,opacity:.95});s==="mod"&&O.color.lerp(new Ne("#ffffff"),.28);let Y=new je(q,O);this.pathwayGroup.add(Y),this.particles.push({mesh:Y,curve:P,type:s,phase:k/I+x*.17%1,speed:s==="exc"?.48:s==="inh"?.34:.38})}}})}_initMriPlane(){let e=new lt;e.setAttribute("position",new Ze(new Float32Array(12),3)),e.setAttribute("uv",new Ze(new Float32Array([0,0,1,0,1,1,0,1]),2)),e.setIndex([0,1,2,0,2,3]),this.mriCanvas=document.createElement("canvas"),this.mriTex=new di(this.mriCanvas),this.mriTex.colorSpace=Pt,this.mriTex.flipY=!1,this.mriTex.minFilter=Lt,this.mriTex.magFilter=Lt;let t=new tn({map:this.mriTex,side:Ft,transparent:!0,opacity:.94,toneMapped:!1});this.mriMesh=new je(e,t),this.mriMesh.visible=!1,this.mriMesh.renderOrder=0;let n=new lt;n.setAttribute("position",new Ze(new Float32Array(15),3));let s=new ui({color:11439359,transparent:!0,opacity:.7});this.mriFrame=new ms(n,s),this.mriFrame.visible=!1,this.brainRoot.add(this.mriMesh),this.brainRoot.add(this.mriFrame)}_updateMriPlane(){let e=this.state.mriOpen;if(this.mriMesh.visible=e,this.mriFrame.visible=e,!e)return;let{shape:t,origin:n,vox:s,t1:r,lab:a,labels:o}=this.mri,[l,c,h]=t,[p,u,d]=n,[f,x,m]=this.state.mriPosMm,g=this.state.mriAxis,y=(O,Y,G)=>Math.max(Y,Math.min(G,O)),b=y(Math.round((f-p)/s),0,l-1),E=y(Math.round((x-u)/s),0,c-1),A=y(Math.round((m-d)/s),0,h-1),w=0,v=0,S=new Float32Array(12);if(g==="ax"){w=l,v=c;let O=d+A*s,Y=p-.5*s,G=p+(l-.5)*s,K=u-.5*s,ne=u+(c-.5)*s;S.set([Y,K,O,G,K,O,G,ne,O,Y,ne,O])}else if(g==="cor"){w=l,v=h;let O=u+E*s,Y=p-.5*s,G=p+(l-.5)*s,K=d-.5*s,ne=d+(h-.5)*s;S.set([Y,O,K,G,O,K,G,O,ne,Y,O,ne])}else{w=c,v=h;let O=p+b*s,Y=u-.5*s,G=u+(c-.5)*s,K=d-.5*s,ne=d+(h-.5)*s;S.set([O,Y,K,O,G,K,O,G,ne,O,Y,ne])}this._updateClipPlane();let N=this.mriMesh.geometry.attributes.position;N.array.set(S),N.needsUpdate=!0;let P=this.mriFrame.geometry.attributes.position.array;P.set(S,0),P[12]=S[0],P[13]=S[1],P[14]=S[2],this.mriFrame.geometry.attributes.position.needsUpdate=!0,this.mriCanvas.width=w,this.mriCanvas.height=v;let L=this.mriCanvas.getContext("2d"),H=L.createImageData(w,v),X=H.data,I=o.map(O=>{if(!O)return null;let Y=O.replace(/_[LR]$/,""),G=at[Y];if(!G)return null;let K=$c(G.color);return[Math.round(K.r*255),Math.round(K.g*255),Math.round(K.b*255),Y]}),q=this.state.mriOverlay,k=this.state.isolatedKey;for(let O=0;O<v;O++)for(let Y=0;Y<w;Y++){let G=b,K=E,ne=A;g==="ax"?(G=Y,K=O):g==="cor"?(G=Y,ne=O):(K=Y,ne=O);let ye=G+l*(K+c*ne),Ie=r[ye],Q=a[ye],ue=(O*w+Y)*4;if(Ie<12&&Q===0){X[ue]=0,X[ue+1]=0,X[ue+2]=0,X[ue+3]=0;continue}let Ee=Ie,Pe=Ie,T=Ie;if(q&&Q>0&&I[Q]){let[Z,z,U,ae]=I[Q],oe=k&&ae===k?.62:k?.12:.34;Ee=Math.round(Ee*(1-oe)+Z*oe),Pe=Math.round(Pe*(1-oe)+z*oe),T=Math.round(T*(1-oe)+U*oe)}X[ue]=Ee,X[ue+1]=Pe,X[ue+2]=T,X[ue+3]=242}L.putImageData(H,0,0),this.mriTex.needsUpdate=!0}_bindEvents(){this.raycaster=new Li,this.pointer=new be;let e=null,t=0,n=r=>{let a=this.canvas.getBoundingClientRect();this.pointer.x=(r.clientX-a.left)/a.width*2-1,this.pointer.y=-((r.clientY-a.top)/a.height)*2+1},s=()=>{this.raycaster.setFromCamera(this.pointer,this.camera);let r=this.parts.filter(o=>o.mesh.visible&&(!this.state.deep||o.isDeep||this.state.isolatedKey===o.key)).map(o=>o.mesh),a=this.raycaster.intersectObjects(r,!1);if(a.length)return a[0].object.userData.partRef;if(this.state.deep){let o=this.parts.filter(c=>c.mesh.visible&&c.key!=="paroi_mediane").map(c=>c.mesh),l=this.raycaster.intersectObjects(o,!1);if(l.length)return l[0].object.userData.partRef}return null};this.canvas.addEventListener("pointerdown",r=>{e={x:r.clientX,y:r.clientY}}),this.canvas.addEventListener("pointermove",r=>{n(r);let a=s();a!==this.state.hoveredPart&&(this.state.hoveredPart=a,this.canvas.classList.toggle("pointer",!!a),this._applyMaterials()),this.cb.onHover&&this.cb.onHover(a,r.clientX,r.clientY)}),this.canvas.addEventListener("pointerup",r=>{if(!e)return;let a=Math.hypot(r.clientX-e.x,r.clientY-e.y);if(e=null,a>6)return;let o=performance.now();if(o-t<310){t=0,this.isolate(null);return}t=o,n(r);let l=s();l?this.isolate(l.key===this.state.isolatedKey?null:l.key):this.state.isolatedKey&&this.isolate(null)}),this.canvas.addEventListener("pointerleave",()=>{this.state.hoveredPart&&(this.state.hoveredPart=null,this._applyMaterials()),this.cb.onHover&&this.cb.onHover(null,0,0)}),window.addEventListener("resize",()=>this.resize())}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}setTheme(e){this.state.theme=e,this._applyMaterials()}setDeep(e){this.state.deep=!!e,this._applyMaterials(),this.cb.onStateChange?.(this.state)}setHemiMode(e){this.state.hemiMode=e,this._applyMaterials(),this._rebuildPathways(),this.cb.onStateChange?.(this.state)}flipSide(){if(this.state.hemiMode==="onlyR")this.setHemiMode("onlyL"),this.setView("lat_R");else if(this.state.hemiMode==="onlyL")this.setHemiMode("onlyR"),this.setView("lat_L");else{let e=this.camera.position.x<this.centerWorld.x;this.setView(e?"lat_R":"lat_L")}}setColorMode(e,t=0){this.state.colorMode=e,this.state.activeNetwork=t,e==="networks"&&(this.state.activePathway=null,this.state.activeSystem=null,this.state.activeClinical=null,this.state.isolatedKey=null,this.state.deep=!1,this._rebuildPathways()),this._recolorVertices(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}isolate(e){this.state.isolatedKey=e||null,this._applyMaterials(),this.state.mriOpen&&this._updateMriPlane(),this.cb.onSelectStructure?.(this.state.isolatedKey),this.cb.onStateChange?.(this.state)}setPathway(e,t=-1){this.state.activePathway=e||null,this.state.activeRouteIdx=t,e&&(this.state.activeSystem=null,this.state.activeClinical=null),this._rebuildPathways(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setSystem(e){this.state.activeSystem=e||null,this.state.activeRouteIdx=-1,e&&(this.state.activePathway=null,this.state.activeClinical=null),this._rebuildPathways(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setClinical(e){this.state.activeClinical=e||null,e&&(this.state.activePathway=null,this.state.activeSystem=null,this._rebuildPathways()),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setMri(e={}){if(e.open!==void 0&&(this.state.mriOpen=e.open),e.axis&&(this.state.mriAxis=e.axis),e.sliceMm!==void 0){let t=this.state.mriAxis==="sag"?0:this.state.mriAxis==="cor"?1:2;this.state.mriPosMm[t]=e.sliceMm}e.posMm&&(this.state.mriPosMm=[...e.posMm]),e.clip!==void 0&&(this.state.mriClip=e.clip),e.overlay!==void 0&&(this.state.mriOverlay=e.overlay),this._updateMriPlane(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setView(e){let t=this.centerWorld,n=335,s=new R(-n,20,12);if(e==="lat_L")s.set(-n,16,10);else if(e==="lat_R")s.set(n,16,10);else if(e==="mri_34")s.set(n*.72,62,-n*.62);else if(e==="medial"){this.state.hemiMode==="both"&&this.setHemiMode("onlyR");let a=this.state.hemiMode==="onlyL"?1:-1;s.set(a*(n*.92),16,6)}else e==="sup"?s.set(0,n,16):e==="inf"?s.set(0,-n,16):e==="ant"?s.set(0,14,-n):e==="post"?s.set(0,14,n):e==="reset"&&(this.state.deep=!1,this.state.isolatedKey=null,this.state.activePathway=null,this.state.activeSystem=null,this.state.activeClinical=null,this.state.colorMode="regions",this.state.activeNetwork=0,this.state.hemiMode="both",this.state.mriOpen=!1,this.state.mriClip=!1,this._recolorVertices(),this._rebuildPathways(),this._updateMriPlane(),this._applyMaterials(),this.cb.onSelectStructure?.(null),this.cb.onStateChange?.(this.state),s.set(-n,22,12));let r=t.clone().add(s);this.flyAnim={t0:performance.now(),dur:420,from:this.camera.position.clone(),to:r}}applyAction(e){e&&(e.hemiMode&&this.setHemiMode(e.hemiMode),e.hideLeft!==void 0&&this.setHemiMode(e.hideLeft?"onlyR":"both"),e.deep!==void 0&&this.setDeep(e.deep),e.colorMode!==void 0?this.setColorMode(e.colorMode,e.network||0):e.network!==void 0&&this.setColorMode(e.network>0?"networks":"regions",e.network),e.isolate!==void 0&&this.isolate(e.isolate),e.pathway!==void 0&&this.setPathway(e.pathway),e.system!==void 0&&this.setSystem(e.system),e.clinical!==void 0&&this.setClinical(e.clinical),e.mri!==void 0&&this.setMri(e.mri),e.view&&this.setView(e.view),e.flipSide&&this.flipSide())}capturePng(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}projectMniToScreen(e){let t=e.clone().applyMatrix4(this.brainRoot.matrixWorld);t.project(this.camera);let n=this.canvas.clientWidth,s=this.canvas.clientHeight;return{x:(t.x*.5+.5)*n,y:(-t.y*.5+.5)*s,visible:t.z<1}}_updateClipPlane(){let[e,t,n]=this.state.mriPosMm,s=this.state.mriAxis;if(s==="ax"){let r=this.camera.position.y>=n;this.clipPlane.normal.set(0,r?-1:1,0),this.clipPlane.constant=r?n:-n}else if(s==="cor"){let r=this.camera.position.z<=-t;this.clipPlane.normal.set(0,0,r?1:-1),this.clipPlane.constant=r?t:-t}else{let r=this.camera.position.x>=e;this.clipPlane.normal.set(r?-1:1,0,0),this.clipPlane.constant=r?e:-e}}focusMriOn(e){let t=this.partsByKey.get(e);if(!t||!t.length)return;let n=t.find(s=>this.state.hemiMode==="onlyR"?s.hemi!=="L":!0)||t[0];this.setMri({open:!0,posMm:n.center.map(s=>Math.round(s))})}_animate(){requestAnimationFrame(()=>this._animate());let e=Math.min(this.clock.getDelta(),.05);if(this.paused)return;let t=performance.now();if(this.flyAnim){let n=Math.min(1,(t-this.flyAnim.t0)/this.flyAnim.dur),s=1-Math.pow(1-n,3);this.camera.position.lerpVectors(this.flyAnim.from,this.flyAnim.to,s),n>=1&&(this.flyAnim=null)}if(this.controls.update(),this.particles.length){let n=new R;for(let s of this.particles)s.phase=(s.phase+e*s.speed)%1,s.curve.getPointAt(s.phase,s.mesh.position),s.type==="inh"&&(s.curve.getTangentAt(s.phase,n),s.mesh.quaternion.setFromUnitVectors(fx,n))}if(this.state.activeClinical){let n=ki[this.state.activeClinical],s=t*.005,r=.5+.5*Math.sin(s*1.6),a=.5+.5*Math.sin(s*.7);for(let o of this.parts)!o.mesh.visible||o.mesh.material!==o.solidMat||(n.up.includes(o.key)?(o.solidMat.emissive.setHex(14235678),o.solidMat.emissiveIntensity=.25+.55*r):n.down.includes(o.key)&&(o.solidMat.emissive.setHex(2980036),o.solidMat.emissiveIntensity=.18+.35*a))}this.state.mriOpen&&this.state.mriClip&&this._updateClipPlane(),this.renderer.render(this.scene,this.camera),this.cb.onFrame?.()}}});function al(i,e=.25){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64),[r,a,o]=i;s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.22,`rgba(${r},${a},${o},0.92)`),s.addColorStop(.55,`rgba(${r},${a},${o},0.32)`),s.addColorStop(1,`rgba(${r},${a},${o},0)`),n.fillStyle=s,n.fillRect(0,0,128,128);let l=new di(t),c=new fs({map:l,transparent:!0,opacity:0,blending:Ln,depthWrite:!1}),h=new ar(c);return h.scale.set(e,e,1),{sprite:h,mat:c,tex:l}}function zd(i,e=72){let n=new Float32Array(84),s=new Float32Array(28);for(let l=0;l<28;l++)s[l]=l;let r=new lt;r.setAttribute("position",new Ze(n,3)),r.setAttribute("aIdx",new Ze(s,1));let a=new Ut({uniforms:{uHeadSize:{value:e},uOpacity:{value:0},uColor:{value:new Ne(i)}},vertexShader:`
      attribute float aIdx;
      uniform float uHeadSize;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float age = aIdx / 28.0;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vAlpha = pow(1.0 - age, 1.55) * uOpacity;
        gl_PointSize = uHeadSize * (0.35 + 0.65 * pow(1.0 - age, 1.2)) * (1.0 / max(0.05, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        float r = length(gl_PointCoord - 0.5);
        if (r > 0.5) discard;
        float core = smoothstep(0.5, 0.0, r);
        gl_FragColor = vec4(uColor, core * core * vAlpha);
      }
    `,transparent:!0,blending:Ln,depthWrite:!1}),o=new hi(r,a);return o.frustumCulled=!1,{points:o,mat:a,positions:n,geom:r,N:28}}function ol(i,e,t){let n=i.length;if(!n)return t.set(0,0,0);let s=Math.max(0,Math.min(1,e))*(n-1),r=Math.floor(s),a=s-r;return r>=n-1?t.copy(i[n-1]):t.copy(i[r]).lerp(i[r+1],a)}function Xc(i,e,t,n=.1/27){let s=new R;for(let r=0;r<i.N;r++)ol(e,Math.max(0,t-r*n),s),i.positions[r*3]=s.x,i.positions[r*3+1]=s.y,i.positions[r*3+2]=s.z;i.geom.getAttribute("position").needsUpdate=!0}var Hr,mx,gx,vx,xx,yx,_x,ll,kd=jt(()=>{Ps();Wc();Hr=[{id:"cortex",num:"1/5",short:"Cortex (~1 mm\xB3)",title:"Un morceau de cortex c\xE9r\xE9bral",scale:"\xC9chelle : ~1 mm\xB3 \xB7 ~100 000 neurones",summary:"Dans 1 mm\xB3 de cortex visuel, des neurones excitateurs (pyramidaux, bleu) re\xE7oivent et transmettent l\u2019information tandis que des interneurones inhibiteurs (Pvalb, chandelier, Martinotti, bipolaire) r\xE9gulent finement l\u2019activit\xE9 du r\xE9seau."},{id:"neurone",num:"2/5",short:"Un neurone",title:"Architecture d\u2019un neurone pyramidal",scale:"\xC9chelle : cellulaire (~100 \xE0 1 200 \xB5m)",summary:"Les dendrites (garnies d\u2019\xE9pines) re\xE7oivent des milliers de signaux ; le corps cellulaire (soma) les int\xE8gre ; l\u2019axone conduit le message \xE9lectrique (potentiel d\u2019action) vers les neurones suivants."},{id:"synapse",num:"3/5",short:"Une synapse",title:"La jonction synaptique (~20 nm)",scale:"\xC9chelle : nanom\xE9trique (~20 nm)",summary:"Les neurones sont s\xE9par\xE9s par une fente synaptique de ~20 nm (Cajal). \xC0 l\u2019arriv\xE9e d\u2019un message, les v\xE9sicules lib\xE8rent des neurotransmetteurs chimiques qui se fixent sur les r\xE9cepteurs du neurone suivant."},{id:"pa",num:"4/5",short:"Potentiel d\u2019action",title:"Propagation d\u2019un potentiel d\u2019action",scale:"\xC9chelle : milliseconde \xB7 fibre \u2192 synapse \u2192 neurone",summary:"Un influx \xE9lectrique parcourt l\u2019axone pr\xE9synaptique dor\xE9, d\xE9clenche la transmission chimique \xE0 la synapse, puis engendre un nouveau potentiel d\u2019action dans le neurone pyramidal bleu."},{id:"activite",num:"5/5",short:"Activit\xE9",title:"Activit\xE9 d\u2019une population corticale",scale:"\xC9chelle : r\xE9seau vivant \xB7 imagerie calcique",summary:"Pendant une t\xE2che sensorielle ou cognitive, des dizaines de neurones pyramidaux interconnect\xE9s d\xE9chargent en vagues synchronis\xE9es pour coder et traiter l\u2019information nerveuse."}],mx=`
  attribute float aAo;
  attribute float aComp;
  attribute float aTalong;
  varying float vAo;
  varying float vComp;
  varying float vTalong;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vAo = aAo;
    vComp = aComp;
    vTalong = aTalong;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,gx=`
  precision highp float;
  uniform vec3 uColor;
  uniform vec3 uEdgeColor;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uFocusComp;   // 0=tout, 1=soma, 2=axone, 34=dendrites+\xE9pines
  uniform float uPulse;
  uniform float uFlowPhase;   // <0 inactif, 0..1 onde le long de aTalong
  uniform float uWaveComp;    // filtre compartiment pour uFlowPhase (-1 = tous)
  uniform float uTransMode;   // 1 = rendre le bouton dor\xE9 translucide sur comp==2

  varying float vAo;
  varying float vComp;
  varying float vTalong;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);
    float facing = abs(dot(N, V));
    float fres = pow(1.0 - max(0.0, facing), 2.3);

    vec3 L1 = normalize(vec3(0.45, 0.75, 0.55));
    vec3 L2 = normalize(vec3(-0.6, -0.3, 0.4));
    float nd1 = max(0.0, abs(dot(N, L1)));
    float nd2 = max(0.0, abs(dot(N, L2)));
    float ao = mix(0.56, 1.0, vAo);
    float lit = (0.58 + 0.44 * nd1 + 0.28 * nd2) * ao;

    vec3 baseCol = uColor;
    float alpha = uOpacity;
    bool isBouton = (uTransMode > 0.5 && vComp > 1.5 && vComp < 2.5);

    // Coloration sp\xE9cialis\xE9e sur l'ultrastructure synaptique
    if (vComp > 5.5 && vComp < 6.5) {
      // R\xE9cepteurs postsynaptiques : cyan brillant (+ teinte \xE9meraude modul\xE9e sans saturer en blanc)
      baseCol = mix(vec3(0.14, 0.78, 0.98), vec3(0.32, 0.95, 0.76), clamp(uPulse, 0.0, 1.0));
      lit += 0.10 + 0.16 * clamp(uPulse, 0.0, 1.0);
    } else if (vComp > 6.5 && vComp < 7.5) {
      // V\xE9sicules synaptiques : ambre dor\xE9 luminescent
      baseCol = vec3(1.0, 0.78, 0.20);
      lit += 0.22 + 0.25 * clamp(uPulse, 0.0, 1.0);
    } else if (vComp > 7.5) {
      // Mitochondrie interne : corail chaud
      baseCol = vec3(0.95, 0.40, 0.32);
      lit += 0.18;
    } else if (vComp > 4.5 && vComp < 5.5 && uTransMode > 0.5) {
      // \xC9pine dendritique cible
      baseCol = vec3(0.32, 0.62, 1.0);
    }

    // Mode translucide du bouton pr\xE9synaptique pour voir les v\xE9sicules \xE0 l'int\xE9rieur sans halo \xE9blouissant
    if (isBouton) {
      alpha *= mix(0.10, 0.42, pow(1.0 - max(0.0, facing), 1.5));
      lit *= 0.45;
    }

    // Surbrillance p\xE9dagogique de compartiment (\xC9tape Neurone)
    if (uFocusComp > 0.5) {
      bool match = false;
      if (uFocusComp < 1.5 && vComp < 1.5) match = true;
      else if (uFocusComp > 1.5 && uFocusComp < 2.5 && vComp > 1.5 && vComp < 2.5) match = true;
      else if (uFocusComp > 10.0 && (vComp > 2.5 && vComp < 5.5)) match = true;
      if (!match) {
        alpha *= 0.22;
        lit *= 0.55;
      } else {
        lit *= 1.32;
      }
    }

    // Onde de potentiel d'action glissant le long de la membrane
    float flowGlow = 0.0;
    if (uFlowPhase >= -0.05) {
      bool compOk = (uWaveComp < -0.5) ||
        (abs(vComp - uWaveComp) < 0.6) ||
        (uWaveComp > 30.0 && vComp > 2.5 && vComp < 5.5);
      if (compOk) {
        float d = vTalong - uFlowPhase;
        flowGlow = exp(-d * d * 42.0) * 1.45;
      }
    }

    float pulseGain = isBouton ? 0.0 : clamp(uPulse, 0.0, 1.0);
    float rimAmp = isBouton ? 0.26 : (0.28 + 0.45 * pulseGain + 0.90 * flowGlow);
    vec3 iri = mix(uEdgeColor, vec3(0.85, 0.55, 1.0), 0.35 + 0.35 * sin(uTime * 0.7 + vTalong * 6.0));
    vec3 rim = mix(baseCol, iri, isBouton ? 0.25 : 0.55) * fres * rimAmp;
    vec3 waveCol = mix(uEdgeColor, vec3(1.0, 0.96, 0.82), 0.6) * flowGlow;
    vec3 finalCol = baseCol * lit + rim + baseCol * (0.24 * pulseGain) + waveCol;

    gl_FragColor = vec4(finalCol, clamp(alpha, 0.0, 1.0));
  }
`,vx=`
  attribute float aAo;
  attribute float aCellId;
  attribute float aCellHue;
  uniform sampler2D uActivityTex;
  uniform float uTexWidth;
  varying float vActivity;
  varying float vAo;
  varying float vHue;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float u = (aCellId + 0.5) / uTexWidth;
    vActivity = texture2D(uActivityTex, vec2(u, 0.5)).r;
    vAo = aAo;
    vHue = aCellHue;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * (mat3(instanceMatrix) * normal));
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,xx=`
  precision highp float;
  uniform float uTime;
  uniform float uStyle; // 0 = essaim calcique multicolore, 1 = ondes spectrales plasma
  varying float vActivity;
  varying float vAo;
  varying float vHue;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  vec3 hsl2rgb(float h, float s, float l) {
    vec3 rgb = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return l + s * (rgb - 0.5) * (1.0 - abs(2.0 * l - 1.0));
  }

  void main() {
    float a = clamp(vActivity, 0.0, 1.0);
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);
    float ndotl = abs(dot(N, normalize(vec3(0.4, 0.7, 0.6))));
    float fres = pow(1.0 - max(0.0, dot(N, V)), 2.4);
    float ao = mix(0.45, 1.0, vAo);

    vec3 col;
    vec3 rim;
    float glow;

    if (uStyle < 0.5) {
      // Essaim calcique multicolore (angle d'or HSL -> flambe vers blanc chaud)
      vec3 baseC = hsl2rgb(fract(vHue / 360.0), 0.82, 0.60);
      vec3 hotC = mix(baseC, vec3(1.0, 0.98, 0.92), 0.72);
      col = mix(baseC * 0.55, hotC, smoothstep(0.12, 0.90, a));
      float lit = (0.48 + 0.52 * ndotl) * ao;
      glow = 0.25 + a * a * 2.25;
      rim = mix(col, vec3(0.75, 0.92, 1.0), 0.45) * fres * (0.45 + 1.4 * a);
      gl_FragColor = vec4(col * lit + rim + col * glow, 0.95);
    } else {
      // Rampe asym\xE9trique exacte whatisabrain : indigo -> violet -> magenta -> rose -> blanc chaud
      const vec3 BASE_DEEP = vec3(0.06, 0.04, 0.16);
      const vec3 BASE_MID  = vec3(0.32, 0.18, 0.55);
      const vec3 HOT_LO    = vec3(0.85, 0.30, 0.95);
      const vec3 HOT_MID   = vec3(1.00, 0.55, 0.85);
      const vec3 HOT_HI    = vec3(1.00, 0.93, 0.78);

      float shifted = clamp(0.18 + a * 0.82, 0.0, 1.0);
      if (shifted < 0.5) {
        col = mix(BASE_DEEP, BASE_MID, smoothstep(0.0, 1.0, shifted * 2.0));
      } else {
        float t = (shifted - 0.5) * 2.0;
        col = mix(BASE_MID, HOT_LO, smoothstep(0.0, 0.55, t));
        col = mix(col, HOT_MID, smoothstep(0.45, 0.85, t));
        col = mix(col, HOT_HI, smoothstep(0.75, 1.0, t));
      }
      float lit = (0.55 + 0.45 * ndotl) * ao;
      vec3 iri = mix(vec3(0.45, 0.65, 1.0), vec3(1.0, 0.45, 0.95), 0.5 + 0.5 * sin(uTime * 0.6 + shifted * 5.0));
      rim = mix(col, iri, 0.65) * fres * (0.6 + 1.6 * a);
      glow = pow(max(0.0, a - 0.35), 1.5) * 1.55;
      gl_FragColor = vec4(col * lit + rim + col * glow, 1.0);
    }
  }
`,yx=`
  attribute float aCellId;
  uniform sampler2D uActivityTex;
  uniform float uTexWidth;
  varying float vActivity;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float u = (aCellId + 0.5) / uTexWidth;
    vActivity = texture2D(uActivityTex, vec2(u, 0.5)).r;
    vec3 inflated = position + normal * 0.0085;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(inflated, 1.0);
    vNormal = normalize(normalMatrix * (mat3(instanceMatrix) * normal));
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`,_x=`
  precision highp float;
  varying float vActivity;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float fres = pow(1.0 - max(0.0, dot(normalize(vNormal), normalize(vViewDir))), 3.0);
    float a = clamp(vActivity, 0.0, 1.0);
    vec3 cool = vec3(0.55, 0.50, 1.00);
    vec3 warm = vec3(1.00, 0.55, 0.90);
    vec3 col = mix(cool, warm, smoothstep(0.35, 0.92, a));
    float intensity = fres * (0.28 + 1.25 * a);
    gl_FragColor = vec4(col * intensity, intensity);
  }
`;ll=class{constructor(e,t,n={}){this.canvas=e,this.data=t,this.cb=n,this.paused=!0,this.state={stage:"cortex",compartment:"all",synapseMode:"normal",autoLoop:!0,slowMo:!1,activityPlaying:!0,activityStyle:"swarm",autoRotate:!0,selectedCellKey:null,hoveredCell:null},this._initRenderer(),this._initScene(),this._buildStageGroups(),this._buildBackgroundSomas(),this._buildApPulsePool(),this._buildNeurotransmitters(),this._bindEvents(),this.flyAnim=null,this.clock=new Di,this.simTime=0,this.neuronDemoPhase=-1,this.stimulusWaveAt=-99,this.lastAutoApAt=-2,this.synapseFlash=0,this.setActivityStyle("swarm"),this.setStage("cortex",{immediateCamera:!0}),this._animate()}_initRenderer(){let e=new Cs({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=Pt,e.toneMapping=Fi,e.toneMappingExposure=1.05,this.renderer=e}_initScene(){this.scene=new Wn,this.scene.fog=new nr(263692,.14);let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera=new It(54,e/t,.004,120),this.controls=new Ds(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!0,this.controls.screenSpacePanning=!0,this.controls.minDistance=.05,this.controls.maxDistance=12,this.raycaster=new Li,this.pointerNdc=new be,this.userDragging=!1,this.controls.addEventListener("start",()=>{this.userDragging=!0}),this.controls.addEventListener("end",()=>{this.userDragging=!1}),this.bgAura=al([120,80,200],3.8),this.bgAura.sprite.position.set(0,-.1,-1.2),this.bgAura.mat.opacity=.13,this.bgAura.mat.depthTest=!1,this.bgAura.sprite.renderOrder=-10,this.scene.add(this.bgAura.sprite)}_buildGeometry(e){let t=new lt;return t.setAttribute("position",new Ze(e.positions,3)),t.setAttribute("normal",new Ze(e.normals,3)),t.setAttribute("aAo",new Ze(e.shade,1)),t.setAttribute("aComp",new Ze(e.comp,1)),t.setAttribute("aTalong",new Ze(e.tAlong,1)),t.setIndex(new Ze(e.indices,1)),t}_makeNeuronShader(e,t="#a7f0ff",n=0){return new Ut({uniforms:{uColor:{value:new Ne(e)},uEdgeColor:{value:new Ne(t)},uOpacity:{value:.94},uTime:{value:0},uFocusComp:{value:0},uPulse:{value:0},uFlowPhase:{value:-1},uWaveComp:{value:-1},uTransMode:{value:n}},vertexShader:mx,fragmentShader:gx,transparent:!0,depthWrite:!0,side:Ft})}_buildStageGroups(){this.partsByKey=new Map;for(let y of this.data.parts)this.partsByKey.set(y.key,y);this.cortexGroup=new Nt,this.scene.add(this.cortexGroup),this.clusterCells=[],this.clusterHitMeshes=[];for(let y of this.data.parts){if(y.group!=="cluster")continue;let b=this._buildGeometry(y),E=this._makeNeuronShader(y.color,"#9de8ff"),A=new je(b,E);A.position.set(...y.pos),A.scale.setScalar(y.scale),A.userData.cellMeta=y,this.cortexGroup.add(A);let w=new tn({color:y.color,wireframe:!0,transparent:!0,opacity:.045,depthWrite:!1}),v=new je(b,w);A.add(v),this.clusterCells.push({p:y,mesh:A,mat:E,wireMat:w}),this.clusterHitMeshes.push(A)}let e=new hr(new In(1.75,1.75,1.75)),t=new ui({color:6458623,transparent:!0,opacity:.22});this.cortexCube=new or(e,t),this.cortexGroup.add(this.cortexCube),this.heroGroup=new Nt,this.scene.add(this.heroGroup);let n=this.partsByKey.get("hero_pyramidal");if(n){let y=this._buildGeometry(n);this.heroMat=this._makeNeuronShader("#5b7cff","#7ee0ff"),this.heroMesh=new je(y,this.heroMat),this.heroMesh.position.set(...n.pos),this.heroMesh.scale.setScalar(n.scale),this.heroGroup.add(this.heroMesh);let b=new tn({color:"#88cfff",wireframe:!0,transparent:!0,opacity:.04,depthWrite:!1});this.heroMesh.add(new je(y,b));let E=n.comp.length,A=[0,0,0],w=0,v=-1/0,S=0;for(let k=0;k<E;k++){let O=Math.round(n.comp[k]),Y=n.positions[k*3+1];O===1&&(A[0]+=n.positions[k*3],A[1]+=Y,A[2]+=n.positions[k*3+2],w+=1),(O===3||O===4)&&Y>v&&(v=Y,S=k)}let N=w>0?new R(A[0]/w,A[1]/w,A[2]/w):new R(0,0,0),P=[0,0,0],L=0,H=0;for(let k=0;k<E;k++){if(Math.round(n.comp[k])!==2)continue;let O=n.positions[k*3]-N.x,Y=n.positions[k*3+1]-N.y,G=n.positions[k*3+2]-N.z;H=Math.max(H,Math.hypot(O,Y,G))}for(let k=0;k<E;k++){if(Math.round(n.comp[k])!==2)continue;let O=n.positions[k*3],Y=n.positions[k*3+1],G=n.positions[k*3+2],K=Math.hypot(O-N.x,Y-N.y,G-N.z);K>H*.35&&K<H*.78&&(P[0]+=O,P[1]+=Y,P[2]+=G,L+=1)}let X=k=>k.multiplyScalar(n.scale).add(new R(...n.pos)),I=new R(n.positions[S*3],v*.72+N.y*.28,n.positions[S*3+2]),q=L>0?new R(P[0]/L,P[1]/L,P[2]/L):new R(N.x+.25,N.y-.1,N.z);this.heroAnchors={soma:X(N.clone()),dendrites:X(I),axon:X(q)}}this.synGroup=new Nt,this.scene.add(this.synGroup);let s=this.partsByKey.get("synapse_post"),r=this.partsByKey.get("synapse_pre"),a=this.partsByKey.get("synapse_detail");if(s&&(this.synPostMat=this._makeNeuronShader("#4a8bff","#9ad4ff"),this.synPostMesh=new je(this._buildGeometry(s),this.synPostMat),this.synGroup.add(this.synPostMesh)),r&&(this.synPreMat=this._makeNeuronShader("#ffd24a","#fff0a8"),this.synPreMesh=new je(this._buildGeometry(r),this.synPreMat),this.synGroup.add(this.synPreMesh)),a){let y=[],b=[],E=a.indices;for(let w=0;w<E.length;w+=3){let v=E[w],S=E[w+1],N=E[w+2];Math.round(a.comp[v])===2&&Math.round(a.comp[S])===2&&Math.round(a.comp[N])===2?b.push(v,S,N):y.push(v,S,N)}let A=this._buildGeometry(a);if(A.setIndex(new Ze(new Uint32Array(y),1)),this.synDetailMat=this._makeNeuronShader("#ffd24a","#a7f0ff",1),this.synDetailMesh=new je(A,this.synDetailMat),this.synDetailMesh.renderOrder=1,this.synGroup.add(this.synDetailMesh),b.length>0){let w=this._buildGeometry(a);w.setIndex(new Ze(new Uint32Array(b),1)),this.synBoutonMat=this._makeNeuronShader("#ffd24a","#ffe8a3",1),this.synBoutonMat.depthWrite=!1,this.synBoutonMat.side=sn,this.synBoutonMesh=new je(w,this.synBoutonMat),this.synBoutonMesh.renderOrder=3,this.synGroup.add(this.synBoutonMesh)}}let o=this.data.synapsePaths;this.synPaths={center:new R(...o.synapse_center),spineHead:new R(...o.spine_head),boutonCenter:new R(...o.bouton_center),cleftDir:new R(...o.cleft_dir),receptors:o.receptors.map(y=>new R(...y)),preAxon:o.pre_axon.map(y=>new R(...y)),postApical:o.post_apical.map(y=>new R(...y)),postAxon:o.post_axon.map(y=>new R(...y))},this.synMarker=al([156,232,192],.065),this.synMarker.sprite.position.copy(this.synPaths.center),this.synGroup.add(this.synMarker.sprite),this.curareGroup=new Nt,this.nicotineGroup=new Nt;let l=new pi(.0014,16,12),c=new tn({color:16728166}),h=new tn({color:2025632});this.blockerMeshes=[],this.nicMeshes=[];for(let y of this.synPaths.receptors){let b=new je(l,c);b.position.copy(y).addScaledVector(this.synPaths.cleftDir,.0016),this.curareGroup.add(b),this.blockerMeshes.push(b);let E=new je(l,h);E.position.copy(y).addScaledVector(this.synPaths.cleftDir,.0014),this.nicotineGroup.add(E),this.nicMeshes.push(E)}this.curareGroup.visible=!1,this.nicotineGroup.visible=!1,this.synGroup.add(this.curareGroup),this.synGroup.add(this.nicotineGroup),this.swarmGroup=new Nt,this.scene.add(this.swarmGroup);let p=this.data.swarm,u=new Uint8Array((p.nCells+1)*4);u.fill(40),this.activityTexData=u,this.activityTex=new Ri(u,p.nCells+1,1,rn,Ht),this.activityTex.minFilter=xt,this.activityTex.magFilter=xt,this.activityTex.needsUpdate=!0,this.swarmCoreMat=new Ut({uniforms:{uActivityTex:{value:this.activityTex},uTexWidth:{value:p.nCells+1},uTime:{value:0},uStyle:{value:0}},vertexShader:vx,fragmentShader:xx,transparent:!0,side:Ft}),this.swarmHaloMat=new Ut({uniforms:{uActivityTex:{value:this.activityTex},uTexWidth:{value:p.nCells+1}},vertexShader:yx,fragmentShader:_x,transparent:!0,blending:Ln,depthWrite:!1,side:Mt});let d=Array.from({length:8},()=>[]);for(let y of p.instances)d[y.arch%8].push(y);let f=new gt;this.swarmHaloMeshes=[],this.somaFlashPoints=null,d.forEach((y,b)=>{if(!y.length)return;let E=this.partsByKey.get(`swarm_arch_${b}`);if(!E)return;let A=this._buildGeometry(E),w=y.length,v=new Float32Array(w),S=new Float32Array(w);for(let H=0;H<w;H++)v[H]=y[H].id,S[H]=y[H].hue;let N=A.clone();N.setAttribute("aCellId",new oi(v,1)),N.setAttribute("aCellHue",new oi(S,1));let P=new li(N,this.swarmCoreMat,w),L=new li(N,this.swarmHaloMat,w);for(let H=0;H<w;H++){let X=y[H];f.position.set(...X.pos),f.rotation.set(0,X.rotY,0),f.scale.setScalar(X.scale),f.updateMatrix(),P.setMatrixAt(H,f.matrix),L.setMatrixAt(H,f.matrix)}P.instanceMatrix.needsUpdate=!0,L.instanceMatrix.needsUpdate=!0,this.swarmGroup.add(P),this.swarmGroup.add(L),this.swarmHaloMeshes.push(L)});let x=new Float32Array(p.nCells*3),m=new Float32Array(p.nCells);for(let y=0;y<p.nCells;y++){let b=p.instances[y];x[y*3]=b.pos[0],x[y*3+1]=b.pos[1],x[y*3+2]=b.pos[2],m[y]=b.id}let g=new lt;g.setAttribute("position",new Ze(x,3)),g.setAttribute("aCellId",new Ze(m,1)),this.somaFlashMat=new Ut({uniforms:{uActivityTex:{value:this.activityTex},uTexWidth:{value:p.nCells+1}},vertexShader:`
        attribute float aCellId;
        uniform sampler2D uActivityTex;
        uniform float uTexWidth;
        varying float vAct;
        void main() {
          vAct = texture2D(uActivityTex, vec2((aCellId + 0.5) / uTexWidth, 0.5)).r;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (10.0 + 38.0 * vAct * vAct) * (1.0 / max(0.25, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying float vAct;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          float c = pow(smoothstep(0.5, 0.0, r), 2.4);
          vec3 col = mix(vec3(0.55, 0.45, 1.0), vec3(1.0, 0.94, 0.85), vAct);
          gl_FragColor = vec4(col, c * (0.02 + 0.44 * vAct * vAct));
        }
      `,transparent:!0,blending:Ln,depthWrite:!1}),this.somaFlashPoints=new hi(g,this.somaFlashMat),this.swarmGroup.add(this.somaFlashPoints)}_buildBackgroundSomas(){let t=new Float32Array(660),n=new Float32Array(880);for(let r=0;r<220;r++){let a=1.8+Math.random()*4.5,o=Math.random()*Math.PI*2,l=(Math.random()-.5)*4.2,c=.02+Math.random()*.06;n[r*4]=a,n[r*4+1]=o,n[r*4+2]=l,n[r*4+3]=c,t[r*3]=Math.cos(o)*a,t[r*3+1]=l,t[r*3+2]=Math.sin(o)*a}let s=new lt;s.setAttribute("position",new Ze(t,3)),s.setAttribute("seed",new Ze(n,4)),this.bgSomasMat=new Ut({uniforms:{uTime:{value:0},uOpacity:{value:.55}},vertexShader:`
        attribute vec4 seed;
        uniform float uTime;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float r = seed.x;
          float a = seed.y + uTime * seed.w;
          vec3 p = vec3(cos(a) * r, seed.z + sin(a * 0.4) * 0.25, sin(a) * r);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float twinkle = 0.45 + 0.55 * sin(uTime * 1.1 + seed.y * 5.0);
          vAlpha = clamp(1.0 / (1.0 + length(mv.xyz) * 0.22), 0.06, 0.5) * twinkle * uOpacity;
          gl_PointSize = (1.5 - clamp(length(mv.xyz) * 0.14, 0.0, 1.0)) * twinkle * (180.0 / max(0.3, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          float core = pow(1.0 - r * 2.0, 1.8);
          vec3 col = mix(vec3(0.50, 0.65, 1.0), vec3(0.95, 0.85, 1.0), core);
          gl_FragColor = vec4(col * core, core * vAlpha);
        }
      `,transparent:!0,blending:Ln,depthWrite:!1}),this.bgSomas=new hi(s,this.bgSomasMat),this.scene.add(this.bgSomas)}_buildApPulsePool(){this.apPool=[];for(let e=0;e<8;e++){let t={axonBloom:al([255,216,96],.24),pyrBloom:al([136,207,255],.24),trailGold:zd("#ffe28a",68),trailBlue:zd("#9ad4ff",68),firedAt:-1};this.synGroup.add(t.axonBloom.sprite),this.synGroup.add(t.pyrBloom.sprite),this.synGroup.add(t.trailGold.points),this.synGroup.add(t.trailBlue.points),this.apPool.push(t)}}_buildNeurotransmitters(){this.ntCount=32,this.ntPos=new Float32Array(this.ntCount*3),this.ntSeeds=Array.from({length:this.ntCount},(a,o)=>({lat1:Math.sin(o*12.9898)*.5*.0052,lat2:Math.cos(o*78.233)*.5*.0052,delay:o%8*.035,speed:.78+o%5*.08}));let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.92)"),n.addColorStop(.8,"rgba(255,255,255,0.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new di(e),r=new lt;r.setAttribute("position",new Ze(this.ntPos,3)),this.ntMat=new gs({size:.0034,map:s,alphaTest:.004,color:"#a8ffda",transparent:!0,opacity:0,blending:Ln,depthWrite:!1,sizeAttenuation:!0}),this.ntPoints=new hi(r,this.ntMat),this.ntPoints.frustumCulled=!1,this.synGroup.add(this.ntPoints),this.ntBurstAt=-99}_bindEvents(){this.canvas.addEventListener("pointermove",e=>{if(this.paused||this.state.stage!=="cortex")return;let t=this.canvas.getBoundingClientRect();this.pointerNdc.x=(e.clientX-t.left)/t.width*2-1,this.pointerNdc.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointerNdc,this.camera);let n=this.raycaster.intersectObjects(this.clusterHitMeshes,!1),s=n.length?n[0].object.userData.cellMeta:null;this.state.hoveredCell=s,this.canvas.classList.toggle("pointer",!!s),this.cb.onHoverCell?.(s,e.clientX,e.clientY)}),this.canvas.addEventListener("click",e=>{if(!this.paused){if(this.state.stage==="synapse"||this.state.stage==="pa")this.fireActionPotential();else if(this.state.stage==="cortex"&&this.state.hoveredCell){let t=this.state.hoveredCell.key;this.state.selectedCellKey=this.state.selectedCellKey===t?null:t,this.cb.onSelectCell?.(this.state.selectedCellKey?this.state.hoveredCell:null)}}})}setStage(e,t={}){this.state.stage=e,this.state.selectedCellKey=null,this.state.hoveredCell=null,e==="synapse"&&(this.state.synapseZoom=t.synapseZoom||"contact");let n=e==="activite"?40:54;this.camera.fov!==n&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),this.scene.fog&&(this.scene.fog.density=e==="cortex"?.15:e==="neurone"?.12:e==="activite"?.07:.05),this.cortexGroup.visible=e==="cortex"||e==="neurone"||e==="synapse"||e==="pa",this.heroGroup.visible=e==="neurone",this.synGroup.visible=e==="synapse"||e==="pa",this.swarmGroup.visible=e==="activite",this.cortexCube&&(this.cortexCube.visible=!1);let s=t.immediateCamera?0:760;for(let r of this.apPool)r.firedAt=-1;if(this.ntBurstAt=-99,e==="cortex"){this.cortexGroup.rotation.y=0;for(let r of this.clusterCells)r.mesh.visible=!0,r.mat.uniforms.uOpacity.value=.94,r.wireMat.opacity=.04;this.controls.minDistance=.7,this.controls.maxDistance=8,this._flyTo([.16,.16,3.35],[-.24,-.2,0],s)}else if(e==="neurone"){for(let r of this.clusterCells)r.mesh.visible=r.p.key!=="cluster_pyramidal_1",r.mat.uniforms.uOpacity.value=.065,r.wireMat.opacity=.008;this.controls.minDistance=.45,this.controls.maxDistance=6.5,this.fireNeuronDemo(),this._flyTo([-.18,.08,2.15],[-.22,-.24,0],s)}else if(e==="synapse"){for(let r of this.clusterCells)r.mesh.visible=r.p.key!=="cluster_pyramidal_1",r.mat.uniforms.uOpacity.value=.032,r.wireMat.opacity=.003;this._applySynapseZoom(s),this.fireActionPotential()}else if(e==="pa"){for(let r of this.clusterCells)r.mesh.visible=r.p.key!=="cluster_pyramidal_1",r.mat.uniforms.uOpacity.value=.032,r.wireMat.opacity=.003;this.synDetailMesh&&(this.synDetailMesh.visible=!1),this.synBoutonMesh&&(this.synBoutonMesh.visible=!1),this.curareGroup.visible=!1,this.nicotineGroup.visible=!1,this.ntPoints.visible=!1,this.controls.minDistance=.35,this.controls.maxDistance=6,this._flyTo([.24,-.14,2.48],[.02,-.34,0],s),this.fireActionPotential()}else if(e==="activite"){let r=new Yt().setFromObject(this.swarmGroup),a=r.getCenter(new R),o=r.getSize(new R),c=(Math.max(o.x,o.y,o.z)*.56+.32)/Math.tan(40*Math.PI/360);this.controls.minDistance=1.1,this.controls.maxDistance=12,this._flyTo([a.x+.65*c-.28,a.y+.4*c,a.z+.86*c],[a.x-.36,a.y-.04,a.z],s)}this.cb.onStateChange?.(this.state)}_applySynapseZoom(e=740){let t=this.state.synapseZoom==="ultra";if(this.synDetailMesh&&(this.synDetailMesh.visible=t),this.synBoutonMesh&&(this.synBoutonMesh.visible=t),this.curareGroup.visible=t&&this.state.synapseMode==="curare",this.nicotineGroup.visible=t&&this.state.synapseMode==="nicotine",this.ntPoints.visible=t,this.controls.minDistance=.025,this.controls.maxDistance=2.4,t){let n=this.synPaths.center;this._flyTo([n.x+.01,n.y+.008,n.z+.09],[n.x-.005,n.y,n.z],e)}else this._flyTo([.08,.02,1.12],[.14,-.06,0],e)}setSynapseZoom(e){if(this.state.synapseZoom=e==="ultra"?"ultra":"contact",this.state.stage==="synapse"){for(let t of this.apPool)t.firedAt=-1;this._applySynapseZoom(740),this.fireActionPotential()}this.cb.onStateChange?.(this.state)}setCompartment(e){this.state.compartment=e,this.heroMat&&(this.heroMat.uniforms.uFocusComp.value=e==="soma"?1:e==="axon"?2:e==="dendrites"?34:0),e!=="all"&&this.fireNeuronDemo(),this.cb.onStateChange?.(this.state)}fireNeuronDemo(){this.neuronDemoPhase=0}setSynapseMode(e){this.state.synapseMode=e,(e==="curare"||e==="nicotine")&&(this.state.synapseZoom="ultra"),this.state.stage==="synapse"?this._applySynapseZoom(680):(this.curareGroup.visible=e==="curare",this.nicotineGroup.visible=e==="nicotine");for(let t of this.apPool)t.firedAt=-1;this.fireActionPotential(),this.cb.onStateChange?.(this.state)}fireActionPotential(){let e=this.apPool.find(t=>t.firedAt<0)||this.apPool[0];e.firedAt=this.simTime,this.lastAutoApAt=this.simTime,this.state.stage==="synapse"&&(this.ntBurstAt=this.simTime)}setSlowMo(e){this.state.slowMo=!!e,this.cb.onStateChange?.(this.state)}setAutoLoop(e){this.state.autoLoop=!!e,this.cb.onStateChange?.(this.state)}setActivityPlaying(e){this.state.activityPlaying=!!e,this.cb.onStateChange?.(this.state)}setActivityStyle(e){this.state.activityStyle=e;let t=e==="waves";this.swarmCoreMat.uniforms.uStyle.value=t?1:0;for(let n of this.swarmHaloMeshes)n.visible=t;this.somaFlashPoints.visible=!t,this.cb.onStateChange?.(this.state)}triggerCorticalWave(){this.stimulusWaveAt=this.simTime}setAutoRotate(e){this.state.autoRotate=!!e,this.cb.onStateChange?.(this.state)}getClusterCells(){return this.clusterCells.map(e=>e.p)}focusCell(e){let t=!e||this.state.selectedCellKey===e?null:e;this.state.selectedCellKey=t;let n=t&&this.clusterCells.find(s=>s.p.key===t)?.p||null;this.cb.onSelectCell?.(n),this.cb.onStateChange?.(this.state)}resetView(){this.setStage(this.state.stage,{immediateCamera:!1,synapseZoom:this.state.synapseZoom})}projectPointToScreen(e){let t=e.clone().project(this.camera),n=this.canvas.clientWidth||window.innerWidth,s=this.canvas.clientHeight||window.innerHeight;return{visible:t.z<1&&t.z>-1,x:(t.x*.5+.5)*n,y:(-t.y*.5+.5)*s}}getNeuronCallouts(){if(this.state.stage!=="neurone")return[];let e=this.heroAnchors||{dendrites:new R(.14,.38,0),soma:new R(0,-.15,0),axon:new R(.42,-.25,0)};return[{id:"dendrites",label:"Dendrites & \xE9pines \xB7 R\xE9ception",pos:e.dendrites},{id:"soma",label:"Corps cellulaire (soma) \xB7 Int\xE9gration",pos:e.soma},{id:"axon",label:"Axone \xB7 Conduction du message",pos:e.axon}].map(t=>({...t,...this.projectPointToScreen(t.pos)}))}getSynapseCallouts(){if(this.state.stage!=="synapse")return[];let e=this.synPaths;return this.state.synapseZoom!=="ultra"?[{label:"Arborisation axonale pr\xE9synaptique (dor\xE9)",pos:new R(.36,.16,0)},{label:"Zone de contact synaptique (~20 nm)",pos:e.center.clone().add(new R(0,.03,0))},{label:"Dendrite apicale postsynaptique (bleu)",pos:new R(-.08,-.22,0)}].map(t=>({...t,...this.projectPointToScreen(t.pos)})):[{label:"Bouton pr\xE9synaptique & v\xE9sicules",pos:e.boutonCenter.clone().add(new R(.008,.015,0))},{label:"Fente synaptique (~20 nm)",pos:e.center.clone().add(new R(0,-.02,0))},{label:"\xC9pine & r\xE9cepteurs postsynaptiques",pos:e.spineHead.clone().add(new R(-.014,.015,0))}].map(t=>({...t,...this.projectPointToScreen(t.pos)}))}_flyTo(e,t,n=750){let s=new R(...e),r=new R(...t);if(n<=0){this.camera.position.copy(s),this.controls.target.copy(r),this.controls.update(),this.flyAnim=null;return}this.flyAnim={t0:performance.now(),dur:n,from:this.camera.position.clone(),to:s,fromTarget:this.controls.target.clone(),toTarget:r}}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}capturePng(){this.renderer.render(this.scene,this.camera);let e=this.canvas.width,t=this.canvas.height,n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d"),r=s.createRadialGradient(e*.5,t*.45,0,e*.5,t*.5,Math.max(e,t)*.65);return r.addColorStop(0,"#1c2742"),r.addColorStop(1,"#04060c"),s.fillStyle=r,s.fillRect(0,0,e,t),s.drawImage(this.canvas,0,0),n.toDataURL("image/png")}_updateSynapseAndAp(e){let t=this.state.stage==="synapse",n=this.state.stage==="pa";if(!t&&!n)return;let s=this.state.slowMo?.35:1,r=t?3.2:3.9,a=this.apPool.some(b=>b.firedAt>=0);this.state.autoLoop&&!a&&this.simTime-this.lastAutoApAt>(t?.8:.7)&&this.fireActionPotential();let o=.3,l=.4,c=.67,h=.96,p=-1,u=-1,d=-1,f=0;for(let b of this.apPool){if(b.firedAt<0){b.axonBloom.mat.opacity=0,b.pyrBloom.mat.opacity=0,b.axonBloom.sprite.visible=!1,b.pyrBloom.sprite.visible=!1,b.trailGold.mat.uniforms.uOpacity.value=0,b.trailBlue.mat.uniforms.uOpacity.value=0;continue}let A=(this.simTime-b.firedAt)*s/r;if(A>=1){b.firedAt=-1;continue}let w=this.state.synapseMode==="curare",v=this.state.synapseMode==="nicotine",S=t&&this.state.synapseZoom==="ultra",N=S?.008:t?.024:.088,P=S?0:t?.42:.92;if(b.axonBloom.sprite.scale.setScalar(N),b.pyrBloom.sprite.scale.setScalar(N*(v?1.12:1)),A<o){let L=A/o;ol(this.synPaths.preAxon,L,b.axonBloom.sprite.position),b.axonBloom.mat.opacity=.95*P,b.axonBloom.sprite.visible=P>.01,b.pyrBloom.sprite.visible=!1,Xc(b.trailGold,this.synPaths.preAxon,L),b.trailGold.mat.uniforms.uOpacity.value=S?0:.85,b.trailBlue.mat.uniforms.uOpacity.value=0,p=L}else if(A<l){let L=(A-o)/(l-o);b.axonBloom.sprite.position.copy(this.synPaths.boutonCenter),b.pyrBloom.sprite.position.copy(this.synPaths.spineHead),b.axonBloom.mat.opacity=.95*(1-L)*P,b.axonBloom.sprite.visible=P>.01,b.pyrBloom.mat.opacity=w?0:.92*L*P,b.pyrBloom.sprite.visible=!w&&P>.01,b.trailGold.mat.uniforms.uOpacity.value=S?0:.8*(1-L),b.trailBlue.mat.uniforms.uOpacity.value=0,f=Math.max(f,w?.25:1),this.ntBurstAt<b.firedAt&&(this.ntBurstAt=this.simTime)}else if(!w&&A<c){let L=(A-l)/(c-l);ol(this.synPaths.postApical,L,b.pyrBloom.sprite.position),b.axonBloom.sprite.visible=!1,b.pyrBloom.mat.opacity=.96*P,b.pyrBloom.sprite.visible=P>.01,Xc(b.trailBlue,this.synPaths.postApical,L),b.trailGold.mat.uniforms.uOpacity.value=0,b.trailBlue.mat.uniforms.uOpacity.value=S?0:.85,u=.85-.7*L,d=34,f=Math.max(f,.75)}else if(!w&&A<h){let L=(A-c)/(h-c);ol(this.synPaths.postAxon,L,b.pyrBloom.sprite.position),b.axonBloom.sprite.visible=!1,b.pyrBloom.mat.opacity=.96*P,b.pyrBloom.sprite.visible=P>.01,Xc(b.trailBlue,this.synPaths.postAxon,L),b.trailGold.mat.uniforms.uOpacity.value=0,b.trailBlue.mat.uniforms.uOpacity.value=S?0:.85,u=L,d=2,f=Math.max(f,.55)}else b.axonBloom.sprite.visible=!1,b.pyrBloom.sprite.visible=!1,b.trailGold.mat.uniforms.uOpacity.value=0,b.trailBlue.mat.uniforms.uOpacity.value=0}this.synPreMat&&(this.synPreMat.uniforms.uFlowPhase.value=p,this.synPreMat.uniforms.uWaveComp.value=2,this.synPreMat.uniforms.uTime.value=this.simTime),this.synPostMat&&(this.synPostMat.uniforms.uFlowPhase.value=u,this.synPostMat.uniforms.uWaveComp.value=d,this.synPostMat.uniforms.uPulse.value=f,this.synPostMat.uniforms.uTime.value=this.simTime);let x=this.state.synapseMode==="curare"?.1:Math.max(f,this.state.synapseMode==="nicotine"?.55:0);this.synDetailMat&&(this.synDetailMat.uniforms.uPulse.value=x,this.synDetailMat.uniforms.uTime.value=this.simTime),this.synBoutonMat&&(this.synBoutonMat.uniforms.uPulse.value=x,this.synBoutonMat.uniforms.uTime.value=this.simTime);let m=1+.22*Math.sin(this.simTime*Math.PI*2/2.8),g=this.state.stage==="pa"||t&&this.state.synapseZoom!=="ultra";this.synMarker.sprite.visible=g,this.synMarker.mat.opacity=(t?.62:.85)*m,this.synMarker.sprite.scale.setScalar((t?.055:.092)*m);let y=(this.simTime-this.ntBurstAt)*s;if(y>=0&&y<2.2){let b=this.ntPoints.geometry.getAttribute("position"),E=this.state.synapseMode==="curare",A=this.state.synapseMode==="nicotine",w=this.synPaths.cleftDir,v=new R(-w.y,w.x,0).normalize(),S=new R().crossVectors(w,v).normalize();for(let N=0;N<this.ntCount;N++){let P=this.ntSeeds[N],L=Math.max(0,Math.min(1,(y-P.delay)*P.speed*.72));E&&L>.65&&(L=.65+.08*Math.sin(L*12+N));let H=this.synPaths.spineHead.clone().addScaledVector(w,.02),X=this.synPaths.spineHead.clone().addScaledVector(w,.0112),I=H.lerp(X,L);I.addScaledVector(v,P.lat1*(1+L*.4)),I.addScaledVector(S,P.lat2*(1+L*.4)),this.ntPos[N*3]=I.x,this.ntPos[N*3+1]=I.y,this.ntPos[N*3+2]=I.z}b.needsUpdate=!0,this.ntMat.color.setHex(E?16757575:A?3732152:11075546),this.ntMat.opacity=y<.2?y/.2:Math.max(0,1-(y-.5)/1.7)}else this.ntMat.opacity=0}_updateSwarm(){if(this.state.stage!=="activite")return;let e=this.data.swarm,n=(this.simTime%e.seconds+e.seconds)%e.seconds*e.fps,s=Math.floor(n)%e.frames,r=(s+1)%e.frames,a=n-Math.floor(n),o=this.simTime-this.stimulusWaveAt;for(let l=0;l<e.nCells;l++){let c=e.traces[s*e.nCells+l],h=e.traces[r*e.nCells+l],p=c+(h-c)*a;if(o>=0&&o<3.6){let x=(e.instances[l].pos[0]+2.4)*.42,m=o-x;m>0&&m<1.2&&(p=Math.min(255,p+215*Math.exp(-m*2.5)*(1-Math.exp(-m*25))))}let u=Math.min(255,Math.max(0,p|0)),d=l*4;this.activityTexData[d]=u,this.activityTexData[d+1]=u,this.activityTexData[d+2]=u,this.activityTexData[d+3]=255}this.activityTex.needsUpdate=!0,this.swarmCoreMat.uniforms.uTime.value=this.simTime}_animate(){requestAnimationFrame(()=>this._animate());let e=Math.min(this.clock.getDelta(),.05);if(this.paused)return;if((this.state.stage!=="activite"||this.state.activityPlaying)&&(this.simTime+=e),this.flyAnim){let n=Math.min(1,(performance.now()-this.flyAnim.t0)/this.flyAnim.dur),s=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;this.camera.position.lerpVectors(this.flyAnim.from,this.flyAnim.to,s),this.controls.target.lerpVectors(this.flyAnim.fromTarget,this.flyAnim.toTarget,s),n>=1&&(this.flyAnim=null)}if(this.state.autoRotate&&!this.userDragging&&!this.flyAnim&&(this.state.stage==="cortex"&&(this.cortexGroup.rotation.y+=e*.06),this.state.stage==="neurone"&&this.heroMesh&&(this.heroMesh.rotation.y+=e*.08),this.state.stage==="activite"&&(this.swarmGroup.rotation.y+=e*.055)),this.state.stage==="cortex")for(let n=0;n<this.clusterCells.length;n++){let s=this.clusterCells[n];s.mat.uniforms.uTime.value=this.simTime;let r=this.state.selectedCellKey,a=r?s.p.key===r?1:.16:.94;s.mat.uniforms.uOpacity.value=a,s.mat.uniforms.uFlowPhase.value=(this.simTime*.25+n*.37)%2.4-.2,s.mat.uniforms.uPulse.value=r&&s.p.key===r?.55:0}if(this.state.stage==="neurone"&&this.heroMat&&(this.heroMat.uniforms.uTime.value=this.simTime,this.neuronDemoPhase>=0))if(this.neuronDemoPhase+=e*.42,this.neuronDemoPhase>1.35)this.neuronDemoPhase=-1,this.heroMat.uniforms.uFlowPhase.value=-1,this.heroMat.uniforms.uPulse.value=0;else if(this.neuronDemoPhase<.45){let n=this.neuronDemoPhase/.45;this.heroMat.uniforms.uWaveComp.value=34,this.heroMat.uniforms.uFlowPhase.value=1-n,this.heroMat.uniforms.uPulse.value=.25*n}else if(this.neuronDemoPhase<.6)this.heroMat.uniforms.uWaveComp.value=1,this.heroMat.uniforms.uFlowPhase.value=0,this.heroMat.uniforms.uPulse.value=.85;else{let n=(this.neuronDemoPhase-.6)/.75;this.heroMat.uniforms.uWaveComp.value=2,this.heroMat.uniforms.uFlowPhase.value=n,this.heroMat.uniforms.uPulse.value=.4*(1-n)}this._updateSynapseAndAp(e),this._updateSwarm(),this.bgSomasMat.uniforms.uTime.value=this.simTime,this.controls.update(),this.renderer.render(this.scene,this.camera),this.cb.onFrame?.()}}});function bx(i){let e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}var cl,Hd=jt(()=>{el();cl=class{constructor(e,t,n,s={}){this.root=e,this.mri=t,this.brain=n,this.cb=s,this.lutRgb=this.mri.labels.map(r=>{if(!r)return null;let a=r.replace(/_[LR]$/,""),o=at[a];return o?[...bx(o.color),a]:null}),this.renderShell()}renderShell(){this.root.innerHTML=`
      <div class="mri-panel">
        <div class="mri-head">
          <div>
            <strong>IRM triplanaire r\xE9elle (MNI ICBM152)</strong>
            <span class="mri-coords" id="mriCoords">x=0 y=0 z=0 mm</span>
          </div>
          <div class="mri-actions">
            <label class="chk"><input type="checkbox" id="chkMriOverlay" checked> R\xE9gions color\xE9es</label>
            <label class="chk"><input type="checkbox" id="chkMriClip"> Sectionner le 3D</label>
          </div>
        </div>
        <div class="mri-grid">
          <div class="mri-view" data-axis="ax">
            <div class="mri-vhead"><span>Axiale (Z)</span><span class="mri-mm" id="mmAx"></span></div>
            <canvas id="cvAx"></canvas>
          </div>
          <div class="mri-view" data-axis="cor">
            <div class="mri-vhead"><span>Coronale (Y)</span><span class="mri-mm" id="mmCor"></span></div>
            <canvas id="cvCor"></canvas>
          </div>
          <div class="mri-view" data-axis="sag">
            <div class="mri-vhead"><span>Sagittale (X)</span><span class="mri-mm" id="mmSag"></span></div>
            <canvas id="cvSag"></canvas>
          </div>
        </div>
        <div class="mri-readout" id="mriReadout">Cliquez sur une coupe pour d\xE9placer le plan ou s\xE9lectionner la structure.</div>
      </div>
    `,this.cv={ax:this.root.querySelector("#cvAx"),cor:this.root.querySelector("#cvCor"),sag:this.root.querySelector("#cvSag")},this.lbl={coords:this.root.querySelector("#mriCoords"),ax:this.root.querySelector("#mmAx"),cor:this.root.querySelector("#mmCor"),sag:this.root.querySelector("#mmSag"),readout:this.root.querySelector("#mriReadout")};let e=this.root.querySelector("#chkMriOverlay"),t=this.root.querySelector("#chkMriClip");e.checked=this.brain.state.mriOverlay,t.checked=this.brain.state.mriClip,e.addEventListener("change",()=>this.brain.setMri({overlay:e.checked})),t.addEventListener("change",()=>this.brain.setMri({clip:t.checked}));for(let n of["ax","cor","sag"]){let s=this.cv[n],r=!1,a=(o,l)=>{let c=s.getBoundingClientRect(),h=Math.max(0,Math.min(.999,(o.clientX-c.left)/c.width)),p=Math.max(0,Math.min(.999,(o.clientY-c.top)/c.height)),{shape:u,origin:d,vox:f}=this.mri,[x,m,g]=u,[y,b,E]=d,A=[...this.brain.state.mriPosMm];if(n==="ax"?(A[0]=Math.round(y+Math.floor(h*x)*f),A[1]=Math.round(b+Math.floor((1-p)*m)*f)):n==="cor"?(A[0]=Math.round(y+Math.floor(h*x)*f),A[2]=Math.round(E+Math.floor((1-p)*g)*f)):(A[1]=Math.round(b+Math.floor(h*m)*f),A[2]=Math.round(E+Math.floor((1-p)*g)*f)),this.brain.setMri({open:!0,axis:n,posMm:A}),l){let w=this._labelAtMm(A);w&&this.brain.isolate(w)}};s.addEventListener("pointerdown",o=>{r=!0,s.setPointerCapture(o.pointerId),a(o,!0)}),s.addEventListener("pointermove",o=>{r&&a(o,!1)}),s.addEventListener("pointerup",()=>{r=!1})}}_mmToIjk([e,t,n]){let{shape:s,origin:r,vox:a}=this.mri,o=(l,c)=>Math.max(0,Math.min(c-1,l));return[o(Math.round((e-r[0])/a),s[0]),o(Math.round((t-r[1])/a),s[1]),o(Math.round((n-r[2])/a),s[2])]}_labelAtMm(e){let[t,n,s]=this._mmToIjk(e),[r,a]=this.mri.shape,o=this.mri.lab[t+r*(n+a*s)];if(!o)return null;let l=this.mri.labels[o];return l?l.replace(/_[LR]$/,""):null}update(){let e=this.root.querySelector("#chkMriOverlay"),t=this.root.querySelector("#chkMriClip");e&&(e.checked=this.brain.state.mriOverlay),t&&(t.checked=this.brain.state.mriClip);let n=this.brain.state.mriPosMm,[s,r,a]=this._mmToIjk(n),[o,l,c]=this.mri.shape;this.lbl.coords.textContent=`x=${n[0]} \xB7 y=${n[1]} \xB7 z=${n[2]} mm`,this.lbl.ax.textContent=`${n[2]} mm`,this.lbl.cor.textContent=`${n[1]} mm`,this.lbl.sag.textContent=`${n[0]} mm`,this.root.querySelectorAll(".mri-view").forEach(u=>{u.classList.toggle("active",u.dataset.axis===this.brain.state.mriAxis)});let h=this._labelAtMm(n),p=h&&at[h];this.lbl.readout.innerHTML=p?`Sous le r\xE9ticule : <strong>${p.name}</strong> <span class="muted">(${p.en})</span>`:"Sous le r\xE9ticule : substance blanche / liquide / hors masque",this._drawSlice("ax",o,l,s,r,a,["G","D","A","P"]),this._drawSlice("cor",o,c,s,r,a,["G","D","S","I"]),this._drawSlice("sag",l,c,s,r,a,["P","A","S","I"])}_drawSlice(e,t,n,s,r,a,o){let l=this.cv[e];(l.width!==t||l.height!==n)&&(l.width=t,l.height=n);let c=l.getContext("2d"),h=c.createImageData(t,n),p=h.data,{shape:u,t1:d,lab:f}=this.mri,[x,m,g]=u,y=this.brain.state.mriOverlay,b=this.brain.state.isolatedKey;for(let w=0;w<n;w++)for(let v=0;v<t;v++){let S=s,N=r,P=a;e==="ax"?(S=v,N=m-1-w):e==="cor"?(S=v,P=g-1-w):(N=v,P=g-1-w);let L=S+x*(N+m*P),H=d[L],X=f[L],I=H,q=H,k=H;if(y&&X>0&&this.lutRgb[X]){let[Y,G,K,ne]=this.lutRgb[X],ye=b&&ne===b?.65:b?.14:.36;I=Math.round(I*(1-ye)+Y*ye),q=Math.round(q*(1-ye)+G*ye),k=Math.round(k*(1-ye)+K*ye)}let O=(w*t+v)*4;p[O]=I,p[O+1]=q,p[O+2]=k,p[O+3]=255}c.putImageData(h,0,0);let E=e==="sag"?r+.5:s+.5,A=e==="ax"?m-1-r+.5:g-1-a+.5;c.strokeStyle="rgba(174, 140, 255, 0.85)",c.lineWidth=1,c.beginPath(),c.moveTo(E,0),c.lineTo(E,n),c.moveTo(0,A),c.lineTo(t,A),c.stroke(),c.font="bold 9px monospace",c.fillStyle="rgba(235, 240, 250, 0.78)",c.fillText(o[0],3,n/2+3),c.fillText(o[1],t-9,n/2+3),c.fillText(o[2],t/2-3,9),c.fillText(o[3],t/2-3,n-3)}}});var Sx=Yd(()=>{Ps();el();zc();md();bd();Dd();Bd();kd();Hd();var Gd="cerveau_plie_svt_v1";function Mx(){try{return JSON.parse(localStorage.getItem(Gd)||"{}")}catch{return{}}}function Us(i){try{localStorage.setItem(Gd,JSON.stringify(i))}catch{}}function j(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}window.addEventListener("DOMContentLoaded",()=>{let i=Mx(),e={theme:i.theme||"light",leftTab:"regions",rightTab:"activites",actId:i.actId||"A1",voie:i.voie||1,answers:i.answers||{},captures:i.captures||{},projMode:!1,microMode:!1,drawerLeftOpen:!0,drawerRightOpen:!0};document.documentElement.setAttribute("data-theme",e.theme);let t=document.getElementById("stageCanvas"),n=document.getElementById("microCanvas"),s=Pd(),r=Id(),a=null,o=null,l=null,c=null,h=document.getElementById("hoverTip"),p=document.getElementById("orientLayer"),u=document.getElementById("endpointsLayer"),d=document.getElementById("microCallouts"),f=document.getElementById("mriDock"),x=document.getElementById("macroToolbar"),m=document.getElementById("microHudCard"),g=document.getElementById("microToolbar"),b=[{lbl:"G",vec:new R(-88,-14,6)},{lbl:"D",vec:new R(88,-14,6)},{lbl:"A",vec:new R(0,88,6)},{lbl:"P",vec:new R(0,-118,6)},{lbl:"S",vec:new R(0,-14,94)},{lbl:"I",vec:new R(0,-14,-74)}].map(T=>{let Z=document.createElement("div");return Z.className="orient-lbl",Z.textContent=T.lbl,p.appendChild(Z),{...T,el:Z}});function E(){if(!l)return;let T=t.clientWidth,Z=t.clientHeight;for(let z of b){let U=l.projectMniToScreen(z.vec),ae=U.visible&&U.x>16&&U.x<T-16&&U.y>16&&U.y<Z-16;z.el.style.opacity=ae?"0.9":"0",ae&&(z.el.style.left=`${U.x}px`,z.el.style.top=`${U.y}px`)}u.innerHTML="";for(let z of l.routeEndpoints){let U=l.projectMniToScreen(z.posMni);if(!U.visible)continue;let ae=document.createElement("div");ae.className="ep-lbl",ae.style.left=`${U.x}px`,ae.style.top=`${U.y}px`,ae.style.borderColor=z.color,ae.textContent=z.text,u.appendChild(ae)}}l=new rl(t,s,r,{onHover(T,Z,z){if(!T||!at[T.key]){h.hidden=!0;return}let U=at[T.key],ae=T.hemi==="L"?" (G)":T.hemi==="R"?" (D)":"";h.innerHTML=`<strong>${j(U.name)}${ae}</strong><small>${j(U.en)}</small>`,h.style.left=`${Z}px`,h.style.top=`${z}px`,h.hidden=!1},onSelectStructure(T){T?e.rightTab==="fiche"?Y():O():Y(),q()},onStateChange(T){X(T),f.hidden=!T.mriOpen,T.mriOpen&&o&&o.update()},onFrame:E}),l.setTheme(e.theme),l.resize(),o=new cl(f,r,l),f.hidden=!0,document.getElementById("loader").hidden=!0;let A=document.getElementById("searchInput"),w=document.getElementById("searchResults"),v=[];for(let[T,Z]of Object.entries(at))Z.hidden||v.push({kind:"structure",id:T,label:Z.name,sub:Z.en});for(let[T,Z]of Object.entries(Jn))v.push({kind:"pathway",id:T,label:`Voie : ${Z.name}`,sub:Z.type==="exc"?"Excitateur":Z.type==="inh"?"Inhibiteur":"Neuromodulateur"});for(let T=1;T<Fn.length;T++)v.push({kind:"network",id:T,label:Fn[T].name,sub:Fn[T].en});for(let[T,Z]of Object.entries(Kn))v.push({kind:"system",id:T,label:Z.name,sub:`Syst\xE8me \xE9motionnel (${Z.valence})`});A.addEventListener("input",()=>{let T=A.value.trim().toLowerCase();if(!T){w.hidden=!0;return}let Z=v.filter(z=>z.label.toLowerCase().includes(T)||z.sub.toLowerCase().includes(T)).slice(0,12);if(!Z.length){w.innerHTML='<div class="sr-item muted">Aucun r\xE9sultat\u2026</div>',w.hidden=!1;return}w.innerHTML=Z.map((z,U)=>`<button type="button" class="sr-item" data-sidx="${U}"><span>${j(z.label)}</span><small>${j(z.sub)}</small></button>`).join(""),w.hidden=!1,w.querySelectorAll("[data-sidx]").forEach(z=>{z.addEventListener("click",()=>{let U=Z[Number(z.dataset.sidx)];A.value="",w.hidden=!0,U.kind==="structure"?((at[U.id]?.group==="profond"||at[U.id]?.group==="tronc")&&l.setDeep(!0),l.isolate(U.id),e.rightTab="fiche"):U.kind==="pathway"?(e.leftTab="voies",l.setDeep(!0),l.setPathway(U.id),e.rightTab="fiche"):U.kind==="network"?(e.leftTab="reseaux",l.setColorMode("networks",U.id),e.rightTab="fiche"):U.kind==="system"&&(e.leftTab="emotions",l.setDeep(!0),l.setSystem(U.id),e.rightTab="fiche"),q(),Y()})})}),document.addEventListener("click",T=>{T.target.closest(".search-wrap")||(w.hidden=!0)}),document.getElementById("btnTheme").addEventListener("click",()=>{e.theme=e.theme==="light"?"dark":"light",document.documentElement.setAttribute("data-theme",e.theme),l.setTheme(e.theme),i.theme=e.theme,Us(i),document.getElementById("btnTheme").textContent=e.theme==="light"?"\u263E Sombre":"\u2600 Clair"}),document.getElementById("btnTheme").textContent=e.theme==="light"?"\u263E Sombre":"\u2600 Clair",document.getElementById("btnProj").addEventListener("click",()=>{e.projMode=!e.projMode,document.body.classList.toggle("proj-mode",e.projMode),document.getElementById("btnProj").classList.toggle("on",e.projMode)});function S(){if(!e.microMode||!c){d.innerHTML="";return}let T=c.state.stage==="neurone"?c.getNeuronCallouts():c.state.stage==="synapse"?c.getSynapseCallouts():[],Z=n.clientWidth,z=n.clientHeight,U="";for(let ae of T)!ae.visible||ae.x<40||ae.x>Z-40||ae.y<60||ae.y>z-75||(U+=`<div class="micro-callout" style="left:${ae.x.toFixed(1)}px;top:${ae.y.toFixed(1)}px">${j(ae.label)}</div>`);d.innerHTML=U}function N(){return c||(a||(a=Ld()),a?(c=new ll(n,a,{onHoverCell(T,Z,z){if(!e.microMode)return;if(!T){h.hidden=!0;return}let U=T.role==="excitatory"?"Excitateur":T.role==="inhibitory"?"Inhibiteur":"Projection";h.innerHTML=`<strong>${j(T.label)}</strong><small>${U} \xB7 ${j(T.source)}</small>`,h.style.left=`${Z}px`,h.style.top=`${z}px`,h.hidden=!1},onSelectCell(){P()},onStateChange(){P()},onFrame:S}),c):null)}function P(){if(!e.microMode||!c)return;let T=c.state,Z=Hr.find(U=>U.id===T.stage)||Hr[0],z="";if(T.stage==="cortex"){let U=c.getClusterCells(),ae=T.selectedCellKey?U.find(oe=>oe.key===T.selectedCellKey):null;z=`
        <div class="grp-title" style="margin-top:0">10 neurones r\xE9els (Allen VISp / MTG \xB7 cliquer pour isoler)</div>
        <div class="micro-legend">
          ${U.map(oe=>`
            <button type="button" class="micro-leg-item ${T.selectedCellKey===oe.key?"on":""}" data-cellkey="${j(oe.key)}">
              <span class="micro-dot" style="background:${oe.color};box-shadow:0 0 8px ${oe.color}"></span>
              <span>${j(oe.label)}</span>
            </button>
          `).join("")}
        </div>
        ${ae?`
          <div class="micro-info-box">
            <strong>${j(ae.label)}</strong><br>
            Sp\xE9cimen Allen : <code>${j(ae.source)}</code><br>
            R\xF4le : ${ae.role==="excitatory"?"Lib\xE8re du glutamate (stimule les cibles).":ae.role==="inhibitory"?"Lib\xE8re du GABA (freine le circuit local).":"Transmet des signaux entre aires corticales."}
          </div>
        `:""}
      `}else if(T.stage==="neurone")z=`
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroNeuronPulse">\u26A1 Simuler l\u2019influx</button>
        </div>
        <div class="seg-row">
          ${[["all","Tout voir"],["dendrites","Dendrites"],["soma","Corps cellulaire"],["axon","Axone"]].map(([ae,oe])=>`<button type="button" class="seg-btn ${T.compartment===ae?"on":""}" data-comp="${ae}">${oe}</button>`).join("")}
        </div>
        <div class="micro-info-box">
          ${T.compartment==="dendrites"?"<strong>Dendrites & \xE9pines :</strong> re\xE7oivent les neurotransmetteurs venus d\u2019autres neurones (~1 000 \xE0 10 000 synapses).":T.compartment==="soma"?"<strong>Corps cellulaire (soma) :</strong> contient le noyau et int\xE8gre l\u2019ensemble des signaux excitateurs et inhibiteurs.":T.compartment==="axon"?"<strong>Axone :</strong> long prolongement unique conduisant le potentiel d\u2019action jusqu\u2019aux terminaisons synaptiques.":"<strong>Neurone humain H16.06 (couche 5) :</strong> cliquez sur une zone pour isoler r\xE9ception, int\xE9gration ou conduction."}
        </div>
      `;else if(T.stage==="synapse"){let U=[["normal","Normale (A4)"],["curare","Curare \xB7 Bloqu\xE9 (A4)"],["nicotine","Nicotine \xB7 Suractiv\xE9e (A6)"]];z=`
        <div class="seg-row" style="margin-bottom:7px;">
          <button type="button" class="seg-btn ${T.synapseZoom!=="ultra"?"on":""}" data-synzoom="contact">\u{1F52D} Contact r\xE9el</button>
          <button type="button" class="seg-btn ${T.synapseZoom==="ultra"?"on":""}" data-synzoom="ultra">\u{1F52C} Zoom ~20 nm</button>
        </div>
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroFireAp">\u26A1 Envoyer un signal</button>
          <button type="button" class="btn-ghost" id="btnMicroLoop">${T.autoLoop?"\u{1F501} Boucle : ON":"\u{1F501} Boucle : OFF"}</button>
        </div>
        <div class="seg-row">
          ${U.map(([ae,oe])=>`<button type="button" class="seg-btn ${T.synapseMode===ae?"on":""}" data-synmode="${ae}">${oe}</button>`).join("")}
        </div>
        <div class="micro-info-box ${T.synapseMode==="curare"?"warn":T.synapseMode==="nicotine"?"ok":""}">
          ${T.synapseMode==="curare"?"<strong>Blocage par le curare (rouge) :</strong> les mol\xE9cules de curare occupent les r\xE9cepteurs sans les activer. Les neurotransmetteurs s\u2019accumulent dans la fente de 20 nm : aucun influx ne part !":T.synapseMode==="nicotine"?"<strong>Action de la nicotine (\xE9meraude) :</strong> elle imite le neurotransmetteur naturel, force l\u2019ouverture prolong\xE9e des r\xE9cepteurs et provoque des d\xE9charges r\xE9p\xE9t\xE9es (dopamine / d\xE9pendance).":T.synapseZoom!=="ultra"?"<strong>Contact synaptique r\xE9el :</strong> l\u2019arborisation axonale dor\xE9e vient toucher la dendrite apicale du neurone pyramidal bleu. Passez en <em>Zoom ~20 nm</em> ou testez Curare / Nicotine pour observer la fente synaptique.":"<strong>Transmission chimique (~20 nm) :</strong> l\u2019influx provoque l\u2019exocytose des v\xE9sicules dor\xE9es ; les neurotransmetteurs traversent la fente (~20 nm) et activent les r\xE9cepteurs cyan."}
        </div>
      `}else T.stage==="pa"?z=`
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroFireAp">\u26A1 Envoyer un potentiel d\u2019action</button>
          <button type="button" class="btn-ghost" id="btnMicroSlow">${T.slowMo?"\u{1F422} Ralenti \xD70,35":"\u25B6 Vitesse \xD71"}</button>
          <button type="button" class="btn-ghost" id="btnMicroLoop">${T.autoLoop?"\u{1F501} Boucle : ON":"\u{1F501} Boucle : OFF"}</button>
        </div>
        <div class="micro-info-box">
          <strong>S\xE9quence observ\xE9e (4 s) :</strong><br>
          1. Com\xE8te dor\xE9e le long de l\u2019axone pr\xE9synaptique<br>
          2. Relais chimique dans la synapse (~20 nm)<br>
          3. Propagation bleue dendrite \u2192 soma<br>
          4. D\xE9charge d\u2019un nouvel influx le long de l\u2019axone bleu
        </div>
      `:T.stage==="activite"&&(z=`
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroWave">\u{1F30A} Vague corticale</button>
          <button type="button" class="btn-ghost" id="btnMicroPlay">${T.activityPlaying?"\u23F8 Pause":"\u25B6 Lecture"}</button>
        </div>
        <div class="seg-row">
          <button type="button" class="seg-btn ${T.activityStyle==="swarm"?"on":""}" data-actstyle="swarm">Essaim calcique</button>
          <button type="button" class="seg-btn ${T.activityStyle==="waves"?"on":""}" data-actstyle="waves">Ondes Fresnel</button>
        </div>
        <div class="micro-info-box">
          <strong>76 neurones pyramidaux r\xE9els (Allen VISp / MTG) :</strong> glissez pour pivoter. L\u2019activit\xE9 oscille spontan\xE9ment puis s\u2019embrase lorsqu\u2019une vague sensorielle traverse la colonne corticale.
        </div>
      `);m.innerHTML=`
      <div class="micro-eyebrow">Micro-Monde 3D \xB7 \xC9tape ${j(Z.num)}</div>
      <h2>${j(Z.title)}</h2>
      <div class="micro-scale">${j(Z.scale)}</div>
      <p class="micro-summary">${j(Z.summary)}</p>
      ${z}
    `,m.querySelectorAll("[data-cellkey]").forEach(U=>{U.addEventListener("click",()=>c.focusCell(U.dataset.cellkey))}),m.querySelectorAll("[data-comp]").forEach(U=>{U.addEventListener("click",()=>c.setCompartment(U.dataset.comp))}),m.querySelector("#btnMicroNeuronPulse")?.addEventListener("click",()=>c.fireNeuronDemo()),m.querySelector("#btnMicroFireAp")?.addEventListener("click",()=>c.fireActionPotential()),m.querySelector("#btnMicroSlow")?.addEventListener("click",()=>c.setSlowMo(!T.slowMo)),m.querySelector("#btnMicroLoop")?.addEventListener("click",()=>c.setAutoLoop(!T.autoLoop)),m.querySelectorAll("[data-synzoom]").forEach(U=>{U.addEventListener("click",()=>c.setSynapseZoom(U.dataset.synzoom))}),m.querySelectorAll("[data-synmode]").forEach(U=>{U.addEventListener("click",()=>c.setSynapseMode(U.dataset.synmode))}),m.querySelector("#btnMicroPlay")?.addEventListener("click",()=>c.setActivityPlaying(!T.activityPlaying)),m.querySelector("#btnMicroWave")?.addEventListener("click",()=>c.triggerCorticalWave()),m.querySelectorAll("[data-actstyle]").forEach(U=>{U.addEventListener("click",()=>c.setActivityStyle(U.dataset.actstyle))}),g.innerHTML=`
      ${Hr.map(U=>`
        <button type="button" class="tbtn ${T.stage===U.id?"stage-on":""}" data-mstage="${U.id}">${j(U.short)}</button>
      `).join("")}
      <span class="tsep"></span>
      <button type="button" class="tbtn" id="btnMicroReset">Reset vue</button>
      <button type="button" class="tbtn ${T.autoRotate?"on":""}" id="btnMicroRot">\u21BB Rotation</button>
      <button type="button" class="tbtn" id="btnMicroCap">\u{1F4F8} Capture</button>
      <button type="button" class="tbtn" id="btnMicroBack">\u2190 Atlas</button>
    `,g.querySelectorAll("[data-mstage]").forEach(U=>{U.addEventListener("click",()=>c.setStage(U.dataset.mstage))}),g.querySelector("#btnMicroReset")?.addEventListener("click",()=>c.resetView()),g.querySelector("#btnMicroRot")?.addEventListener("click",()=>c.setAutoRotate(!c.state.autoRotate)),g.querySelector("#btnMicroCap")?.addEventListener("click",()=>Ie()),g.querySelector("#btnMicroBack")?.addEventListener("click",()=>H(!0))}function L(T="cortex",Z={}){let z=N();z&&(e.microMode=!0,e.projMode=!1,l.paused=!0,z.paused=!1,document.body.classList.remove("proj-mode"),document.body.classList.add("micro-mode"),document.body.classList.toggle("micro-hide-right",!Z.keepRight),document.getElementById("btnProj").classList.remove("on"),document.getElementById("btnNavMicro").classList.add("on"),document.getElementById("btnNavExplore").classList.remove("on"),document.getElementById("btnNavActivites").classList.toggle("on",!!Z.keepRight),t.hidden=!0,n.hidden=!1,p.hidden=!0,u.hidden=!0,h.hidden=!0,f.hidden=!0,x.hidden=!0,m.hidden=!1,g.hidden=!1,d.hidden=!1,z.resize(),z.setStage(T),Z.synapseMode&&z.setSynapseMode(Z.synapseMode),Z.compartment&&z.setCompartment(Z.compartment),P())}function H(T=!1){e.microMode&&(e.microMode=!1,c&&(c.paused=!0),l.paused=!1,document.body.classList.remove("micro-mode","micro-hide-right"),document.getElementById("btnNavMicro").classList.remove("on"),document.getElementById("btnNavExplore").classList.toggle("on",!T),document.getElementById("btnNavActivites").classList.toggle("on",T),n.hidden=!0,t.hidden=!1,p.hidden=!1,u.hidden=!1,h.hidden=!0,x.hidden=!1,m.hidden=!0,g.hidden=!0,d.hidden=!0,f.hidden=!l.state.mriOpen,l.resize())}window.addEventListener("resize",()=>{e.microMode&&c&&c.resize()}),document.getElementById("btnNavExplore").addEventListener("click",()=>{H(!1),e.projMode=!1,document.body.classList.remove("proj-mode"),document.getElementById("btnProj").classList.remove("on"),document.getElementById("btnNavExplore").classList.add("on"),document.getElementById("btnNavActivites").classList.remove("on"),e.rightTab="fiche",Y()}),document.getElementById("btnNavMicro").addEventListener("click",()=>{L(c?.state.stage||"cortex")}),document.getElementById("btnNavActivites").addEventListener("click",()=>{if(e.microMode){if(document.body.classList.contains("micro-hide-right")){document.body.classList.remove("micro-hide-right"),document.getElementById("btnNavActivites").classList.add("on"),e.rightTab="activites",Y();return}H(!0)}e.projMode=!1,document.body.classList.remove("proj-mode"),document.getElementById("btnProj").classList.remove("on"),document.getElementById("btnNavActivites").classList.add("on"),document.getElementById("btnNavExplore").classList.remove("on"),e.rightTab="activites",Y()}),document.getElementById("btnNavDocs").addEventListener("click",()=>Q("synapse")),document.getElementById("btnNavSources").addEventListener("click",()=>ue()),document.querySelectorAll("[data-view]").forEach(T=>{T.addEventListener("click",()=>l.setView(T.dataset.view))}),document.getElementById("btnDeep").addEventListener("click",()=>l.setDeep(!l.state.deep)),document.getElementById("btnFlip").addEventListener("click",()=>l.flipSide()),document.getElementById("btnMri").addEventListener("click",()=>l.setMri({open:!l.state.mriOpen})),document.getElementById("btnPathways").addEventListener("click",()=>{l.state.activePathway?l.setPathway(null):(e.leftTab="voies",l.setDeep(!0),l.setPathway("glutamate"),q(),Y())}),document.getElementById("btnCapture").addEventListener("click",()=>Ie());function X(T){document.getElementById("btnDeep").classList.toggle("on",T.deep),document.getElementById("btnMri").classList.toggle("on",T.mriOpen),document.getElementById("btnPathways").classList.toggle("on",!!T.activePathway)}document.addEventListener("keydown",T=>{if(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName)){T.key==="Escape"&&document.activeElement.blur();return}let Z=T.key.toLowerCase();Z==="d"?(T.preventDefault(),l.setDeep(!l.state.deep)):Z==="m"?(T.preventDefault(),l.setMri({open:!l.state.mriOpen})):Z==="n"?(T.preventDefault(),document.getElementById("btnPathways").click()):T.key==="/"?(T.preventDefault(),A.focus()):T.key==="Escape"&&(document.getElementById("modalBackdrop").hidden?l.isolate(null):ye())});let I=document.getElementById("leftBody");document.querySelectorAll("#leftTabs .tab").forEach(T=>{T.addEventListener("click",()=>{e.leftTab=T.dataset.ltab,q()})});function q(){document.querySelectorAll("#leftTabs .tab").forEach(Z=>Z.classList.toggle("on",Z.dataset.ltab===e.leftTab));let T=l.state;if(e.leftTab==="regions"){let Z=`
        <div class="seg-row">
          <button type="button" class="seg-btn ${T.colorMode==="regions"?"on":""}" data-cm="regions">R\xE9gions</button>
          <button type="button" class="seg-btn ${T.colorMode==="lobes"?"on":""}" data-cm="lobes">Lobes</button>
        </div>
        <div class="seg-row">
          <button type="button" class="seg-btn ${T.hemiMode==="both"?"on":""}" data-hm="both">2 h\xE9misph\xE8res</button>
          <button type="button" class="seg-btn ${T.hemiMode==="onlyR"?"on":""}" data-hm="onlyR">Masquer G.</button>
          <button type="button" class="seg-btn ${T.hemiMode==="onlyL"?"on":""}" data-hm="onlyL">Masquer D.</button>
        </div>
      `;T.isolatedKey&&(Z+='<button type="button" class="btn-ghost" id="btnClearIso" style="width:100%;margin-bottom:6px">\u2715 Tout r\xE9afficher (\xC9chap)</button>');for(let z of ud){Z+=`<div class="grp-title">${j(z.title)}</div>`;for(let U of z.keys){let ae=at[U];if(!ae||ae.hidden)continue;let oe=T.colorMode==="lobes"&&ae.lobe?Is[ae.lobe].color:ae.color,Ae=T.isolatedKey===U;Z+=`<button type="button" class="item-btn ${Ae?"on":""}" data-struct="${U}">
            <span class="dot" style="background:${oe}"></span>
            <span>${j(ae.name)}</span>
          </button>`}}I.innerHTML=Z,I.querySelectorAll("[data-cm]").forEach(z=>z.addEventListener("click",()=>{l.setColorMode(z.dataset.cm,0),q()})),I.querySelectorAll("[data-hm]").forEach(z=>z.addEventListener("click",()=>{l.setHemiMode(z.dataset.hm),q()})),I.querySelector("#btnClearIso")?.addEventListener("click",()=>l.isolate(null)),I.querySelectorAll("[data-struct]").forEach(z=>z.addEventListener("click",()=>{let U=z.dataset.struct;(at[U]?.group==="profond"||at[U]?.group==="tronc")&&l.setDeep(!0),l.isolate(T.isolatedKey===U?null:U),e.rightTab="fiche",Y()}));return}if(e.leftTab==="voies"){let Z=`
        <div class="legend-box">
          <strong>L\xE9gende des particules (touche N)</strong><br>
          \u25CF <strong>Sph\xE8res pleines</strong> = Excitateur (Glutamate)<br>
          \u25CB <strong>Anneaux</strong> = Inhibiteur / freinage (GABA)<br>
          \u2726 <strong>Impulsions</strong> = Neuromodulateur<br>
          <small class="muted">\xC9chelle macroscopique : pour voir la fente synaptique, ouvre le doc. Synapse (A2).</small>
        </div>
        <button type="button" class="btn-ghost" id="btnOpenSynFromVoies" style="width:100%;margin-bottom:8px">\u{1F52C} Changer d'\xE9chelle : doc. Synapse (A2)</button>
      `;T.activePathway&&(Z+='<button type="button" class="btn-ghost" id="btnClearPw" style="width:100%;margin-bottom:8px">\u2715 Masquer les voies</button>');for(let[z,U]of Object.entries(Jn)){let ae=T.activePathway===z,oe=U.type==="exc"?"Excitateur \u25CF":U.type==="inh"?"Inhibiteur \u25CB":"Modulateur \u2726";Z+=`<button type="button" class="item-btn ${ae?"on":""}" data-pw="${z}">
          <span class="dot" style="background:${U.color}"></span>
          <span style="flex:1">${j(U.name)}</span>
          <small class="muted">${oe}</small>
        </button>`,ae&&(Z+='<div class="route-list">'+U.routes.map(([Ae,pt],vt)=>`
            <button type="button" class="route-btn ${T.activeRouteIdx===vt?"on":""}" data-ridx="${vt}">
              ${j(at[Ae]?.name||Ae)} \u2192 ${j(at[pt]?.name||pt)}
            </button>`).join("")+"</div>")}I.innerHTML=Z,I.querySelector("#btnOpenSynFromVoies")?.addEventListener("click",()=>Q("synapse")),I.querySelector("#btnClearPw")?.addEventListener("click",()=>{l.setPathway(null),q(),Y()}),I.querySelectorAll("[data-pw]").forEach(z=>z.addEventListener("click",()=>{let U=z.dataset.pw;l.setDeep(!0),l.setPathway(T.activePathway===U?null:U),e.rightTab="fiche",q(),Y()})),I.querySelectorAll("[data-ridx]").forEach(z=>z.addEventListener("click",()=>{let U=Number(z.dataset.ridx);l.setPathway(T.activePathway,T.activeRouteIdx===U?-1:U),q()}));return}if(e.leftTab==="reseaux"){let Z=`
        <p class="muted" style="margin:0 0 8px;font-size:12px">Une fonction mobilise un <strong>r\xE9seau distribu\xE9</strong> sur plusieurs lobes (parcellation de Yeo, 2011) \u2014 jamais une seule case isol\xE9e.</p>
        <button type="button" class="item-btn ${T.colorMode==="networks"&&T.activeNetwork===0?"on":""}" data-net="0">
          <span class="dot" style="background:var(--accent)"></span>
          <span>Tous les 7 r\xE9seaux</span>
        </button>
      `;for(let z=1;z<Fn.length;z++){let U=Fn[z],ae=T.colorMode==="networks"&&T.activeNetwork===z;Z+=`<button type="button" class="item-btn ${ae?"on":""}" data-net="${z}">
          <span class="dot" style="background:${U.color}"></span>
          <span>${j(U.name)}</span>
        </button>`}Z+='<button type="button" class="btn-ghost" id="btnNetReset" style="width:100%;margin-top:8px">Revenir aux couleurs anatomiques</button>',I.innerHTML=Z,I.querySelectorAll("[data-net]").forEach(z=>z.addEventListener("click",()=>{l.setDeep(!1),l.isolate(null),l.setColorMode("networks",Number(z.dataset.net)),e.rightTab="fiche",q(),Y()})),I.querySelector("#btnNetReset")?.addEventListener("click",()=>{l.setColorMode("regions",0),q()});return}if(e.leftTab==="emotions"){let Z=`
        <div class="legend-box">
          <strong>Mod\xE8le de Panksepp (7 syst\xE8mes)</strong><br>
          <span class="muted">Mod\xE8le th\xE9orique (niveau C) incluant des \xE9motions <strong>agr\xE9ables</strong> ET <strong>d\xE9sagr\xE9ables</strong> (garde-fou programme 2025).</span>
        </div>
      `;T.activeSystem&&(Z+='<button type="button" class="btn-ghost" id="btnClearSys" style="width:100%;margin-bottom:8px">\u2715 Masquer le circuit</button>');for(let[z,U]of Object.entries(Kn)){let ae=T.activeSystem===z,oe=U.valence==="agr\xE9able"?"good":"bad";Z+=`<button type="button" class="item-btn ${ae?"on":""}" data-sys="${z}">
          <span class="dot" style="background:${U.color}"></span>
          <span style="flex:1">${j(U.name)}</span>
          <span class="badge ${oe}">${j(U.valence)}</span>
        </button>`}I.innerHTML=Z,I.querySelector("#btnClearSys")?.addEventListener("click",()=>{l.setSystem(null),q(),Y()}),I.querySelectorAll("[data-sys]").forEach(z=>z.addEventListener("click",()=>{let U=z.dataset.sys;l.setDeep(!0),l.setSystem(T.activeSystem===U?null:U),e.rightTab="fiche",q(),Y()}));return}if(e.leftTab==="clinique"){let Z=`
        <div class="ethic-banner">
          <strong>\xC9ducation, pas diagnostic :</strong> ces mod\xE8les illustrent des tendances statistiques de circuits en recherche. Ils ne permettent jamais de diagnostiquer une personne.
        </div>
        <div class="legend-box">
          <span style="color:#d9381e;font-weight:700">\u25CF Pulsation rouge (\u2191)</span> : suractivation / alerte<br>
          <span style="color:#2d78c4;font-weight:700">\u25CF Pulsation bleue (\u2193)</span> : r\xE9gulation / frein affaibli
        </div>
      `;T.activeClinical&&(Z+='<button type="button" class="btn-ghost" id="btnClearClin" style="width:100%;margin-bottom:8px">\u2715 Quitter la lentille clinique</button>');for(let[z,U]of Object.entries(ki)){let ae=T.activeClinical===z;Z+=`<button type="button" class="item-btn ${ae?"on":""}" data-clin="${z}">
          <span class="badge neutral">Niv. ${U.level}</span>
          <span>${j(U.short)}</span>
        </button>`}I.innerHTML=Z,I.querySelector("#btnClearClin")?.addEventListener("click",()=>{l.setClinical(null),q(),Y()}),I.querySelectorAll("[data-clin]").forEach(z=>z.addEventListener("click",()=>{let U=z.dataset.clin;l.setDeep(!0),l.setClinical(T.activeClinical===U?null:U),e.rightTab="fiche",q(),Y()}))}}let k=document.getElementById("rightBody");document.querySelectorAll("#rightTabs .tab").forEach(T=>{T.addEventListener("click",()=>{e.rightTab=T.dataset.rtab,Y()})});function O(){let T=document.getElementById("activeSelBanner");if(!T)return;let Z=l.state.isolatedKey;Z&&at[Z]?(T.innerHTML=`<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:7px 10px;border-color:var(--accent)">
        <span>\u{1F4CC} <strong>${j(at[Z].name)}</strong> <small class="muted">(${j(at[Z].en)})</small></span>
        <span style="display:flex;gap:4px;white-space:nowrap;flex-shrink:0">
          <button type="button" class="pill" id="btnBannerFiche">Fiche</button>
          <button type="button" class="pill" id="btnBannerMri">IRM</button>
          <button type="button" class="pill" id="btnBannerEsc">\u2715</button>
        </span>
      </div>`,T.querySelector("#btnBannerFiche")?.addEventListener("click",()=>{e.rightTab="fiche",Y()}),T.querySelector("#btnBannerMri")?.addEventListener("click",()=>l.focusMriOn(Z)),T.querySelector("#btnBannerEsc")?.addEventListener("click",()=>l.isolate(null))):T.innerHTML=""}function Y(){document.querySelectorAll("#rightTabs .tab").forEach(z=>z.classList.toggle("on",z.dataset.rtab===e.rightTab));let T=l.state;if(e.rightTab==="fiche"){let z="";if(T.isolatedKey&&at[T.isolatedKey]){let U=at[T.isolatedKey];z+=`
          <div class="card">
            <div class="meta-row">
              <span class="badge">${j(U.group)}</span>
              ${U.lobe?`<span class="badge neutral">${j(Is[U.lobe]?.name||U.lobe)}</span>`:""}
              ${U.approx?'<span class="badge bad">Position approxim\xE9e</span>':""}
            </div>
            <h2 style="margin:2px 0;font-family:var(--f-display)">${j(U.name)}</h2>
            <div class="muted" style="font-family:var(--f-mono);font-size:12px;margin-bottom:8px">EN : ${j(U.en)}</div>
            <p style="margin:0 0 8px">${j(U.desc)}</p>
            <p style="margin:0 0 8px"><strong>R\xF4le biologique :</strong> ${j(U.role)}</p>
            ${U.limite?`<p class="doc-note"><strong>Limite du mod\xE8le :</strong> ${j(U.limite)}</p>`:""}
            <div class="doc-controls" style="margin-top:10px">
              <button type="button" class="btn-primary" id="btnFicheMri">Centrer l'IRM ici</button>
              <button type="button" class="btn-ghost" id="btnFicheClear">Lib\xE9rer (\xC9chap)</button>
            </div>
          </div>
        `}if(T.activePathway&&Jn[T.activePathway]){let U=Jn[T.activePathway];z+=`
          <div class="card">
            <div class="meta-row">
              <span class="badge">${U.type==="exc"?"Excitateur \u25CF":U.type==="inh"?"Inhibiteur \u25CB":"Neuromodulateur \u2726"}</span>
            </div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">Voie : ${j(U.name)}</h3>
            <p style="margin:6px 0">${j(U.desc)}</p>
            <button type="button" class="btn-ghost" id="btnFicheSyn">Ouvrir le doc. Synapse microscopique</button>
          </div>
        `}if(T.activeSystem&&Kn[T.activeSystem]){let U=Kn[T.activeSystem];z+=`
          <div class="card">
            <div class="meta-row">
              <span class="badge ${U.valence==="agr\xE9able"?"good":"bad"}">Valence : ${j(U.valence)}</span>
              <span class="badge neutral">Mod\xE8le de Panksepp (niveau C)</span>
            </div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">${j(U.name)}</h3>
            <p style="margin:6px 0">${j(U.desc)}</p>
          </div>
        `}if(T.colorMode==="networks"&&T.activeNetwork>0&&Fn[T.activeNetwork]){let U=Fn[T.activeNetwork];z+=`
          <div class="card">
            <div class="meta-row"><span class="badge">R\xE9seau distribu\xE9 (Yeo 2011)</span></div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">${j(U.name)}</h3>
            <div class="muted" style="font-family:var(--f-mono);font-size:11.5px;margin-bottom:6px">EN : ${j(U.en)}</div>
            <p style="margin:0">${j(U.desc)}</p>
          </div>
        `}if(T.activeClinical&&ki[T.activeClinical]){let U=ki[T.activeClinical];z+=`
          <div class="card">
            <div class="ethic-banner">${j(U.disclaimer)}</div>
            <div class="meta-row">
              <span class="badge">4 lentilles</span>
              <span class="badge neutral">Niveau de preuve ${U.level}</span>
            </div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">${j(U.name)}</h3>
            <p style="margin:6px 0">${j(U.circuitDesc)}</p>
            <p style="margin:6px 0"><strong>1. Circuit :</strong> ${j(U.lenses.circuit)}</p>
            <p style="margin:6px 0"><strong>2. Donn\xE9es d'\xE9tudes :</strong> ${j(U.lenses.etudes)}</p>
            <p style="margin:6px 0"><strong>3. Manifestations :</strong> ${j(U.lenses.symptomes)}</p>
            <p style="margin:6px 0"><strong>4. Accompagnement :</strong> ${j(U.lenses.traitements)}</p>
          </div>
        `}z||(z=`
          <div class="card">
            <h3 style="margin:0 0 6px;font-family:var(--f-display)">Explorer le mod\xE8le 3D</h3>
            <p style="margin:0 0 8px">Clique sur une r\xE9gion du cerveau (ou utilise l'Index \xE0 gauche) pour l'isoler tout en gardant le contexte 3D.</p>
            <ul style="margin:0;padding-left:18px;font-size:12.5px">
              <li><strong>Touche D</strong> : rendre le cortex translucide (\xAB sous verre \xBB)</li>
              <li><strong>Double-clic / \xC9chap</strong> : r\xE9afficher tout le cerveau</li>
              <li><strong>Touche M</strong> : ouvrir les coupes IRM r\xE9elles (MNI152)</li>
              <li><strong>Touche N</strong> : animer les voies de neurotransmetteurs</li>
            </ul>
            <button type="button" class="btn-primary" id="btnGoAct" style="margin-top:10px;width:100%">Ouvrir la s\xE9quence A1\u2013A6 & DNB 3 \u2192</button>
          </div>
        `),k.innerHTML=z,k.querySelector("#btnFicheMri")?.addEventListener("click",()=>l.focusMriOn(T.isolatedKey)),k.querySelector("#btnFicheClear")?.addEventListener("click",()=>l.isolate(null)),k.querySelector("#btnFicheSyn")?.addEventListener("click",()=>Q("synapse")),k.querySelector("#btnGoAct")?.addEventListener("click",()=>{e.rightTab="activites",Y()});return}let Z=`<div class="act-nav">
      <button type="button" class="act-chip ${e.actId==="PROG"?"on":""}" data-act="PROG">Prog.</button>
      ${tl.map(z=>`<button type="button" class="act-chip ${e.actId===z.id?"on":""}" data-act="${z.id}">${j(z.code)}</button>`).join("")}
    </div><div id="activeSelBanner"></div>`;if(e.actId==="PROG"){let z=fd;k.innerHTML=Z+`
        <div class="card">
          <div class="meta-row"><span class="badge">Programme SVT \xB7 Cycle 4</span><span class="badge good">Nouvelle s\xE9quence</span></div>
          <h3 style="margin:0 0 6px;font-family:var(--f-display)">Progression spiralaire Cycle 4 (5e \u2192 4e \u2192 3e)</h3>
          <p style="margin:0 0 8px">${j(z.intro)}</p>
          <table class="data-table">
            <thead><tr><th>Niveau</th><th>Activit\xE9s</th><th>Attendus officiels</th></tr></thead>
            <tbody>
              ${z.niveaux.map(U=>`<tr><td><strong>${j(U.niveau)}</strong></td><td>${j(U.place)}</td><td>${j(U.attendus)}</td></tr>`).join("")}
            </tbody>
          </table>
          <div class="grp-title" style="margin-top:10px">Principes didactiques &amp; rigueur des sources</div>
          <ul style="margin:4px 0 0;padding-left:18px;font-size:12px">
            ${z.gardefous.map(U=>`<li style="margin-bottom:4px">${j(U)}</li>`).join("")}
          </ul>
        </div>
      `}else{let z=tl.find(oe=>oe.id===e.actId)||tl[0],U=e.voie===1?z.voie1:z.voie2,ae=e.captures[z.id]||[];k.innerHTML=Z+`
        <div class="card">
          <div class="meta-row">
            <span class="badge">${j(z.niveau)}</span>
            <span class="badge neutral">${j(z.type)}</span>
            <span class="badge neutral">${j(z.semaine)} \xB7 ${j(z.duree)}</span>
          </div>
          <h3 style="margin:2px 0 8px;font-family:var(--f-display)">${j(z.code)} \u2014 ${j(z.titre)}</h3>
          <div class="ctx-box">
            <div class="box-kicker">\u{1F4CC} Situation d'ancrage r\xE9elle</div>
            <p style="margin:2px 0 4px">${j(z.accroche)}</p>
            <div class="muted" style="font-size:11px">Source : ${j(z.sourceAccroche)}</div>
          </div>
          <div class="prob-box">
            <div class="box-kicker">\u2753 Probl\xE9matique</div>
            <p style="margin:2px 0 0;font-weight:600">${j(z.problematique)}</p>
          </div>
          <details class="hint-box" style="margin-top:6px">
            <summary>\u{1F4D6} Les mots pour comprendre (${z.vocab.length}) &amp; obstacle initial</summary>
            <div class="vocab-mini">
              ${z.vocab.map(oe=>`<div class="v-item"><strong>${j(oe.term)}</strong> : ${j(oe.def)}</div>`).join("")}
            </div>
            <p style="margin:6px 0 2px;font-size:11.5px"><span class="badge bad">Conception initiale</span> ${j(z.obstacle)}</p>
            <p style="margin:2px 0 0;font-size:11.5px"><strong>Rupture :</strong> ${j(z.rupture)}</p>
          </details>
        </div>

        <div class="card">
          <div class="grp-title" style="margin-top:0">Exploration 3D &amp; documents interactifs (cliquer pour piloter)</div>
          <div style="margin-bottom:8px">
            ${z.scenario3d.map((oe,Ae)=>`<button type="button" class="step-btn" data-step="${Ae}">${j(oe.label)}</button>`).join("")}
          </div>
          <div class="grp-title" style="margin-top:8px">Corpus documentaire (3 documents)</div>
          ${z.docs.map(oe=>`
            <div class="doc-mini">
              <div class="doc-mini-head">
                <span class="badge">${j(oe.num)}</span>
                <strong>${j(oe.title)}</strong>
              </div>
              <div class="muted" style="font-size:10.5px;margin-bottom:4px">Source : ${j(oe.source)}</div>
              <p style="margin:0 0 5px;font-size:12px">${j(oe.text)}</p>
              ${oe.table?`
                <table class="data-table" style="margin-bottom:5px;font-size:11.5px">
                  <thead><tr>${oe.table.headers.map(Ae=>`<th>${j(Ae)}</th>`).join("")}</tr></thead>
                  <tbody>${oe.table.rows.map(Ae=>`<tr>${Ae.map(pt=>`<td>${j(pt)}</td>`).join("")}</tr>`).join("")}</tbody>
                </table>
              `:""}
              <div class="doc-mini-leg">${j(oe.legend)}</div>
            </div>
          `).join("")}
        </div>

        <div class="card">
          <div class="seg-row">
            <button type="button" class="seg-btn ${e.voie===1?"on":""}" data-voie="1">Voie 1 \xB7 T\xE2che autonome</button>
            <button type="button" class="seg-btn ${e.voie===2?"on":""}" data-voie="2">Voie 2 \xB7 Parcours guid\xE9</button>
          </div>
          <p style="margin:4px 0 6px;font-size:12.5px">${j(U.consigne)}</p>
          <div class="mdl-bar">
            <span><strong>MDL \xB7 Verbes :</strong> ${j(z.mdl.verbeAction)}</span>
            <span><strong>Connecteurs :</strong> ${z.mdl.marqueurs.map(oe=>`<code>${j(oe)}</code>`).join(" ")}</span>
          </div>
          ${U.fields.map(oe=>`
            <label class="field-lbl" for="fld_${oe.id}">${j(oe.label)}</label>
            <textarea class="stu-input" id="fld_${oe.id}" rows="${oe.rows}" data-fid="${oe.id}" placeholder="${j(oe.placeholder)}">${j(e.answers[oe.id]||"")}</textarea>
          `).join("")}

          <div class="check-box">
            <div style="font-weight:600;font-size:11.5px;margin-bottom:3px">\u2714 Avant de rendre (auto-v\xE9rification) :</div>
            <ul style="margin:0;padding-left:16px;font-size:11.5px">
              ${z.avantDeRendre.map(oe=>`<li>${j(oe)}</li>`).join("")}
            </ul>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;gap:6px;flex-wrap:wrap">
            <strong style="font-size:12px">Captures 3D (${ae.length})</strong>
            <div style="display:flex;gap:5px;flex-wrap:wrap">
              <button type="button" class="btn-ghost" id="btnActCap">+ Capture 3D</button>
              <button type="button" class="btn-primary" id="btnPrintAct">\u{1F5A8}\uFE0F Fiche \xC9l\xE8ve A4</button>
              <button type="button" class="btn-ghost" id="btnPrintProf">\u{1F4CB} Guide Prof A4</button>
            </div>
          </div>
          ${ae.length?`<div class="cap-grid">${ae.map((oe,Ae)=>`
            <div class="cap-card">
              <img src="${oe.img}" alt="Capture ${Ae+1}">
              <div class="cap-meta">
                <span>${j(oe.caption||"Capture 3D")}</span>
                <button type="button" class="pill" data-delcap="${Ae}" title="Supprimer">\u2715</button>
              </div>
            </div>`).join("")}</div>`:""}
        </div>

        <div class="card">
          <div class="grp-title" style="margin-top:0">Coups de pouce progressifs (N1 \u2192 N3)</div>
          ${z.coupsDePouce.map(oe=>`
            <details class="hint-box"><summary>${j(oe.niv)}</summary><p style="margin:4px 0 0">${j(oe.txt)}</p></details>
          `).join("")}
          <details class="hint-box" style="margin-top:8px">
            <summary>\u270D\uFE0F Trace \xE9crite \xAB Je retiens \xBB &amp; Notions</summary>
            <p style="margin:6px 0">${j(z.traceEcrite)}</p>
            <div class="meta-row">${z.notions.map(oe=>`<span class="badge neutral">${j(oe)}</span>`).join("")}</div>
            <p style="margin:6px 0 0;font-size:12px"><strong>Rep\xE8re \xAB Faire des sciences \xBB :</strong> ${j(z.fds)}</p>
          </details>
          <details class="hint-box" style="margin-top:6px">
            <summary>\u{1F469}\u200D\u{1F3EB} Corrig\xE9, bar\xE8me &amp; grille LSU (Professeur)</summary>
            <div style="margin:6px 0 4px;font-size:12px"><strong>Bar\xE8me :</strong> ${j(z.prof.bareme)}</div>
            <ul style="margin:4px 0 6px;padding-left:16px;font-size:12px">
              ${z.prof.corrige.map(oe=>`<li style="margin-bottom:3px">${j(oe)}</li>`).join("")}
            </ul>
            <div style="font-size:11.5px;margin-bottom:4px"><strong>Erreurs fr\xE9quentes :</strong> ${j(z.prof.erreursFrequentes.join(" \xB7 "))}</div>
            <div style="font-size:11.5px">
              <strong>LSU :</strong>
              MI : ${j(z.prof.lsu.MI)} |
              MF : ${j(z.prof.lsu.MF)} |
              MS : ${j(z.prof.lsu.MS)} |
              TBM : ${j(z.prof.lsu.TBM)}
            </div>
          </details>
        </div>
      `,O(),k.querySelectorAll("[data-step]").forEach(oe=>{oe.addEventListener("click",()=>{let Ae=z.scenario3d[Number(oe.dataset.step)];if(Ae.action?.microStage){L(Ae.action.microStage,{keepRight:!0,synapseMode:Ae.action.synapseMode,compartment:Ae.action.compartment});return}e.microMode&&H(!0),Ae.action&&("view"in Ae.action||"isolate"in Ae.action||"pathway"in Ae.action||"colorMode"in Ae.action||"mri"in Ae.action||"deep"in Ae.action)&&l.applyAction({hemiMode:"both",deep:!1,colorMode:"regions",network:0,isolate:null,pathway:null,system:null,clinical:null,mri:{open:!1,clip:!1},...Ae.action}),Ae.action?.doc&&Q(Ae.action.doc),q()})}),k.querySelectorAll("[data-voie]").forEach(oe=>{oe.addEventListener("click",()=>{e.voie=Number(oe.dataset.voie),i.voie=e.voie,Us(i),Y()})}),k.querySelectorAll("[data-fid]").forEach(oe=>{oe.addEventListener("input",()=>{e.answers[oe.dataset.fid]=oe.value,i.answers=e.answers,Us(i)})}),k.querySelector("#btnActCap")?.addEventListener("click",()=>Ie()),k.querySelector("#btnPrintAct")?.addEventListener("click",()=>Ee(z)),k.querySelector("#btnPrintProf")?.addEventListener("click",()=>Pe(z)),k.querySelectorAll("[data-delcap]").forEach(oe=>{oe.addEventListener("click",()=>{ae.splice(Number(oe.dataset.delcap),1),e.captures[z.id]=ae,i.captures=e.captures,Us(i),Y()})})}k.querySelectorAll("[data-act]").forEach(z=>{z.addEventListener("click",()=>{e.actId=z.dataset.act,i.actId=e.actId,Us(i),Y()})})}let G=document.getElementById("modalBackdrop"),K=document.getElementById("modalTitle"),ne=document.getElementById("modalBody");document.getElementById("modalClose").addEventListener("click",ye),G.addEventListener("click",T=>{T.target===G&&ye()});function ye(){G.hidden=!0,ne.innerHTML=""}function Ie(){let T=e.microMode&&c?c.capturePng():l.capturePng(),Z=e.actId==="PROG"?"A1":e.actId,z=e.microMode&&c?Hr.find(ae=>ae.id===c.state.stage):null,U=z?`Micro-Monde \xB7 ${z.title} (${Z})`:l.state.isolatedKey&&at[l.state.isolatedKey]?`${at[l.state.isolatedKey].name} (${Z})`:`Observation 3D (${Z})`;K.textContent="Capture 3D \xB7 Enregistrer ou t\xE9l\xE9charger",ne.innerHTML=`
      <img src="${T}" alt="Aper\xE7u capture 3D" style="width:100%;border-radius:10px;border:1px solid var(--line);margin-bottom:10px">
      <label class="field-lbl" for="capLegend">L\xE9gende / annotation de la capture :</label>
      <input id="capLegend" class="stu-input" value="${j(U)}" style="margin-bottom:10px">
      <div class="doc-controls">
        <button type="button" class="btn-primary" id="btnSaveCap">Enregistrer dans la fiche ${j(Z)}</button>
        <a class="btn-ghost" href="${T}" download="cerveau_${Z.toLowerCase()}.png" style="text-decoration:none">T\xE9l\xE9charger PNG</a>
      </div>
    `,G.hidden=!1,ne.querySelector("#btnSaveCap").addEventListener("click",()=>{let ae=ne.querySelector("#capLegend").value.trim();e.captures[Z]||(e.captures[Z]=[]),e.captures[Z].push({img:T,caption:ae}),i.captures=e.captures,Us(i),ye(),e.rightTab="activites",e.actId==="PROG"&&(e.actId=Z),Y()})}function Q(T="synapse"){K.textContent="Documents compl\xE9mentaires (donn\xE9es sourc\xE9es & changements d\u2019\xE9chelle)",ne.innerHTML=`
      <div class="seg-row" style="margin-bottom:12px">
        <button type="button" class="seg-btn ${T==="audition"?"on":""}" data-dtab="audition">\u{1F3A7} Audition (A2)</button>
        <button type="button" class="seg-btn ${T==="reflexe"?"on":""}" data-dtab="reflexe">\u26A1 R\xE9flexe (A3)</button>
        <button type="button" class="seg-btn ${T==="synapse"?"on":""}" data-dtab="synapse">\u{1F52C} Synapse (A4 / DNB)</button>
        <button type="button" class="seg-btn ${T==="sommeil"?"on":""}" data-dtab="sommeil">\u{1F319} Sommeil (A5 / DNB)</button>
        <button type="button" class="seg-btn ${T==="recompense"?"on":""}" data-dtab="recompense">\u{1F3AF} R\xE9compense (A6)</button>
      </div>
      <div id="docMount"></div>
    `,G.hidden=!1;let Z=z=>{ne.querySelectorAll("[data-dtab]").forEach(ae=>ae.classList.toggle("on",ae.dataset.dtab===z));let U=ne.querySelector("#docMount");z==="audition"?gd(U):z==="reflexe"?vd(U):z==="synapse"?xd(U):z==="sommeil"?yd(U):_d(U)};ne.querySelectorAll("[data-dtab]").forEach(z=>z.addEventListener("click",()=>Z(z.dataset.dtab))),Z(T)}function ue(){K.textContent="Lexique FR\u2194EN, Biblioth\xE8que A/B/C & Sources ouvertes",ne.innerHTML=`
      <div class="card">
        <h3 style="margin:0 0 6px;font-family:var(--f-display)">Lexique bilingue FR \u2194 EN</h3>
        <table class="data-table">
          <thead><tr><th>Anglais (litt\xE9rature / ressources)</th><th>Fran\xE7ais (programme SVT)</th></tr></thead>
          <tbody>
            ${hd.map(([T,Z])=>`<tr><td style="font-family:var(--f-mono)">${j(T)}</td><td>${j(Z)}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>

      <div class="card">
        <h3 style="margin:0 0 6px;font-family:var(--f-display)">Biblioth\xE8que scientifique & Niveaux de preuve (EMI)</h3>
        <div class="meta-row" style="margin-bottom:8px">
          ${Object.entries(dd).map(([T,Z])=>`<span class="badge" style="background:${Z.color}22;color:${Z.color}" title="${j(Z.desc)}">${j(Z.label)}</span>`).join("")}
        </div>
        ${pd.map(T=>`
          <div style="border-top:1px solid var(--line);padding:7px 0">
            <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
              <strong>${j(T.title)}</strong>
              <span class="badge neutral">Niv. ${T.level} \xB7 ${T.activite}</span>
            </div>
            <div class="muted" style="font-size:11.5px;margin:2px 0">${j(T.source)}</div>
            <p style="margin:4px 0 0;font-size:12.5px">${j(T.summary)}</p>
          </div>
        `).join("")}
      </div>

      <div class="card">
        <h3 style="margin:0 0 6px;font-family:var(--f-display)">Sources des donn\xE9es 3D, IRM & Licences (Faire des sciences)</h3>
        <p style="margin:0 0 6px;font-size:12.5px">Cet atlas autonome est construit \xE0 partir de donn\xE9es scientifiques libres et ouvertes :</p>
        <ul style="margin:0;padding-left:18px;font-size:12px">
          <li><strong>Template IRM MNI ICBM152 2009 sym\xE9trique</strong> \u2014 Copyright \xA9 1993\u20132009 Louis Collins, McConnell Brain Imaging Centre, Montreal Neurological Institute, McGill University (Fonov et al., 2009/2011).</li>
          <li><strong>Surfaces corticales fsaverage6</strong> \u2014 FreeSurfer (Fischl et al., 1999) + <strong>Parcellation de Destrieux</strong> (Destrieux et al., 2010).</li>
          <li><strong>Structures sous-corticales</strong> \u2014 Atlas Harvard-Oxford (FSL, Desikan/Makris) + Atlas CIT168 (Pauli et al., 2018) + Talairach / Lancaster 2000 (cervelet).</li>
          <li><strong>R\xE9seaux \xE0 grande \xE9chelle (Yeo 2011)</strong> \u2014 via la parcellation de Schaefer et al. (2018), licence MIT.</li>
          <li><strong>\xC9chelle microscopique (Micro-Monde 3D : cortex, neurone, synapse, potentiel d'action, essaim calcique)</strong> \u2014 Reconstructions morphologiques SWC r\xE9elles (cellules pyramidales humaines L2/3 & L5 et interneurones Pvalb, Chandelier Vipr2, Martinotti Sst, Vip) issues de l'<strong>Allen Brain Atlas \xB7 Cell Types Database</strong> (Allen Institute for Brain Science, licence ouverte / Terms of Use CC BY 4.0).</li>
          <li><strong>Rendu WebGL & Occlusion ambiante</strong> \u2014 Three.js (licence MIT) + occlusion ambiante par sommet calcul\xE9e avec Blender 4.4 Cycles (macro-cerveau & micro-maillages).</li>
          <li><strong>Usage p\xE9dagogique uniquement</strong> : inspiration fonctionnelle issue de l'exploration p\xE9dagogique du projet <em>The Folded Mind</em> et de la progression multi-\xE9chelle <em>What Is a Brain</em>, avec un code et des maillages reconstruits de fa\xE7on ind\xE9pendante et en fran\xE7ais. Ne constitue pas un outil de diagnostic m\xE9dical.</li>
        </ul>
      </div>
    `,G.hidden=!1}function Ee(T){let Z=e.voie===1?T.voie1:T.voie2,z=e.captures[T.id]||[],U=document.getElementById("printSheet");U.innerHTML=`
      <div class="ps-topbar">
        <span><strong>SVT \xB7 Cycle 4</strong> \xB7 ${j(T.niveau)} \xB7 ${j(T.type)}</span>
        <span>${j(T.semaine)} \xB7 ${j(T.duree)} \xB7 Voie ${e.voie}</span>
      </div>
      <div class="ps-identity">
        <span>Nom / Pr\xE9nom : __________________________</span>
        <span>Classe : ________</span>
        <span>Date : ____ / ____ / 20__</span>
      </div>
      <div class="ps-hero">
        <h1>${j(T.code)} \u2014 ${j(T.titre)}</h1>
        <div class="ps-meta">Comp\xE9tences : ${j(T.lsu.join(" \xB7 "))}</div>
      </div>

      <div class="ps-box ps-context">
        <div class="ps-box-lbl">Situation d'ancrage r\xE9elle (${j(T.sourceAccroche)})</div>
        <div>${j(T.accroche)}</div>
      </div>
      <div class="ps-box ps-problem">
        <div class="ps-box-lbl">Probl\xE9matique scientifique</div>
        <div><strong>${j(T.problematique)}</strong></div>
      </div>

      <div class="ps-box ps-vocab">
        <div class="ps-box-lbl">Les mots pour comprendre</div>
        <div class="ps-vocab-grid">
          ${T.vocab.map(ae=>`<div><strong>${j(ae.term)}</strong> : ${j(ae.def)}</div>`).join("")}
        </div>
      </div>

      <div class="ps-docs">
        ${T.docs.map(ae=>`
          <div class="ps-doc">
            <div class="ps-doc-head"><span class="ps-doc-num">${j(ae.num)}</span><strong>${j(ae.title)}</strong> <span class="ps-src">(${j(ae.source)})</span></div>
            <p>${j(ae.text)}</p>
            ${ae.table?`<table class="ps-tbl"><thead><tr>${ae.table.headers.map(oe=>`<th>${j(oe)}</th>`).join("")}</tr></thead><tbody>${ae.table.rows.map(oe=>`<tr>${oe.map(Ae=>`<td>${j(Ae)}</td>`).join("")}</tr>`).join("")}</tbody></table>`:""}
            <div class="ps-leg">${j(ae.legend)}</div>
          </div>
        `).join("")}
      </div>

      <div class="ps-questions">
        <div class="ps-q-intro"><strong>Travail demand\xE9 (Voie ${e.voie}) :</strong> ${j(Z.consigne)} <em>(Connecteurs MDL : ${j(T.mdl.marqueurs.join(", "))})</em></div>
        ${Z.fields.map(ae=>`
          <div class="ps-block">
            <div class="ps-qlbl">${j(ae.label)}</div>
            <div class="ps-ans">${j(e.answers[ae.id]||"")}</div>
          </div>
        `).join("")}
      </div>

      ${z.length?`<div class="ps-block"><strong>Captures 3D annot\xE9es :</strong><div class="ps-caps">${z.map(ae=>`<div><img src="${ae.img}"><div>${j(ae.caption)}</div></div>`).join("")}</div></div>`:""}

      <div class="ps-box ps-check">
        <div class="ps-box-lbl">Avant de rendre (auto-v\xE9rification)</div>
        <ul>${T.avantDeRendre.map(ae=>`<li>\u2610 ${j(ae)}</li>`).join("")}</ul>
      </div>

      <div class="ps-box ps-wonder">
        <div class="ps-box-lbl">Trace \xE9crite \u2014 Je retiens (${j(T.notions.join(" \xB7 "))})</div>
        <div>${j(T.traceEcrite)}</div>
      </div>
    `,window.print()}function Pe(T){let Z=document.getElementById("printSheet");Z.innerHTML=`
      <div class="ps-topbar">
        <span><strong>GUIDE PROFESSEUR \xB7 CORRIG\xC9 &amp; \xC9VALUATION</strong></span>
        <span>${j(T.code)} \xB7 ${j(T.niveau)} \xB7 ${j(T.duree)}</span>
      </div>
      <div class="ps-hero">
        <h1>Corrig\xE9 \u2014 ${j(T.code)} : ${j(T.titre)}</h1>
        <div class="ps-meta">Sources : ${j(T.sourceAccroche)}</div>
      </div>

      <div class="ps-box ps-context">
        <div class="ps-box-lbl">Obstacle initial &amp; Rupture didactique</div>
        <div><strong>Conception initiale :</strong> ${j(T.obstacle)}<br><strong>Rupture :</strong> ${j(T.rupture)}</div>
      </div>

      <div class="ps-box">
        <div class="ps-box-lbl">R\xE9ponses attendues (Parcours guid\xE9 &amp; T\xE2che complexe)</div>
        <ul style="margin:4pt 0 0;padding-left:16pt">
          ${T.prof.corrige.map(z=>`<li style="margin-bottom:4pt">${j(z)}</li>`).join("")}
        </ul>
      </div>

      <div class="ps-box ps-problem">
        <div class="ps-box-lbl">Bar\xE8me &amp; Ma\xEEtrise de la langue (MDL)</div>
        <div><strong>Bar\xE8me :</strong> ${j(T.prof.bareme)}<br><strong>Crit\xE8res MDL :</strong> ${j(T.mdl.structure)} \xB7 Mots-cl\xE9s : ${j(T.mdl.marqueurs.join(", "))}</div>
      </div>

      <div class="ps-box">
        <div class="ps-box-lbl">Erreurs fr\xE9quentes \xE0 anticiper</div>
        <ul style="margin:4pt 0 0;padding-left:16pt">${T.prof.erreursFrequentes.map(z=>`<li>${j(z)}</li>`).join("")}</ul>
      </div>

      <table class="ps-tbl" style="margin-top:8pt">
        <thead><tr><th>Niveau LSU</th><th>Descripteur de ma\xEEtrise</th></tr></thead>
        <tbody>
          <tr><td><strong>MI</strong> (Ma\xEEtrise insuffisante)</td><td>${j(T.prof.lsu.MI)}</td></tr>
          <tr><td><strong>MF</strong> (Ma\xEEtrise fragile)</td><td>${j(T.prof.lsu.MF)}</td></tr>
          <tr><td><strong>MS</strong> (Ma\xEEtrise satisfaisante)</td><td>${j(T.prof.lsu.MS)}</td></tr>
          <tr><td><strong>TBM</strong> (Tr\xE8s bonne ma\xEEtrise)</td><td>${j(T.prof.lsu.TBM)}</td></tr>
        </tbody>
      </table>
    `,window.print()}q(),Y()})});Sx();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
