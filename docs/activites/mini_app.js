(()=>{var Ht=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Uh=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Sr(i,e){var t=Gh(i);return t+8>i.length&&pn(6,"invalid gzip data"),Xh(i.subarray(t,-8),{i:2},e&&e.out||new Zt(Hh(i)),e&&e.dictionary)}var Zt,wi,Vh,Uc,Vc,Ih,Ic,Dc,Bc,Dh,Pc,Bh,fx,ko,Dn,Ye,ms,gs,Ye,Ye,Ye,Ye,Lc,Ye,Ph,Lh,Lo,fn,No,Nh,kh,Oh,pn,Xh,zh,Gh,Hh,Wh,qh,Nc=Ht(()=>{Zt=Uint8Array,wi=Uint16Array,Vh=Int32Array,Uc=new Zt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vc=new Zt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ih=new Zt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ic=function(i,e){for(var t=new wi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Vh(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Dc=Ic(Uc,2),Bc=Dc.b,Dh=Dc.r;Bc[28]=258,Dh[258]=28;Pc=Ic(Vc,0),Bh=Pc.b,fx=Pc.r,ko=new wi(32768);for(Ye=0;Ye<32768;++Ye)Dn=(Ye&43690)>>1|(Ye&21845)<<1,Dn=(Dn&52428)>>2|(Dn&13107)<<2,Dn=(Dn&61680)>>4|(Dn&3855)<<4,ko[Ye]=((Dn&65280)>>8|(Dn&255)<<8)>>1;ms=(function(i,e,t){for(var n=i.length,s=0,r=new wi(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new wi(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new wi(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],d=e-i[s],p=a[i[s]-1]++<<d,u=p|(1<<d)-1;p<=u;++p)o[ko[p]>>c]=l}else for(o=new wi(n),s=0;s<n;++s)i[s]&&(o[s]=ko[a[i[s]-1]++]>>15-i[s]);return o}),gs=new Zt(288);for(Ye=0;Ye<144;++Ye)gs[Ye]=8;for(Ye=144;Ye<256;++Ye)gs[Ye]=9;for(Ye=256;Ye<280;++Ye)gs[Ye]=7;for(Ye=280;Ye<288;++Ye)gs[Ye]=8;Lc=new Zt(32);for(Ye=0;Ye<32;++Ye)Lc[Ye]=5;Ph=ms(gs,9,1),Lh=ms(Lc,5,1),Lo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},fn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},No=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Nh=function(i){return(i+7)/8|0},kh=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Zt(i.subarray(e,t))},Oh=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pn=function(i,e,t){var n=new Error(e||Oh[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,pn),!t)throw n;return n},Xh=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Zt(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new Zt(s*3));var l=function(xe){var We=t.length;if(xe>We){var Oe=new Zt(Math.max(We*2,xe));Oe.set(t),t=Oe}},d=e.f||0,p=e.p||0,u=e.b||0,h=e.l,f=e.d,x=e.m,m=e.n,g=s*8;do{if(!h){d=fn(i,p,1);var E=fn(i,p+1,3);if(p+=3,E)if(E==1)h=Ph,f=Lh,x=9,m=5;else if(E==2){var S=fn(i,p,31)+257,v=fn(i,p+10,15)+4,b=S+fn(i,p+5,31)+1;p+=14;for(var B=new Zt(b),C=new Zt(19),P=0;P<v;++P)C[Ih[P]]=fn(i,p+P*3,7);p+=v*3;for(var X=Lo(C),H=(1<<X)-1,F=ms(C,X,1),P=0;P<b;){var U=F[fn(i,p,H)];p+=U&15;var A=U>>4;if(A<16)B[P++]=A;else{var L=0,V=0;for(A==16?(V=3+fn(i,p,3),p+=2,L=B[P-1]):A==17?(V=3+fn(i,p,7),p+=3):A==18&&(V=11+fn(i,p,127),p+=7);V--;)B[P++]=L}}var q=B.subarray(0,S),k=B.subarray(S);x=Lo(q),m=Lo(k),h=ms(q,x,1),f=ms(k,m,1)}else pn(1);else{var A=Nh(p)+4,M=i[A-4]|i[A-3]<<8,R=A+M;if(R>s){c&&pn(0);break}o&&l(u+M),t.set(i.subarray(A,R),u),e.b=u+=M,e.p=p=R*8,e.f=d;continue}if(p>g){c&&pn(0);break}}o&&l(u+131072);for(var Q=(1<<x)-1,$=(1<<m)-1,le=p;;le=p){var L=h[No(i,p)&Q],te=L>>4;if(p+=L&15,p>g){c&&pn(0);break}if(L||pn(2),te<256)t[u++]=te;else if(te==256){le=p,h=null;break}else{var O=te-254;if(te>264){var P=te-257,ee=Uc[P];O=fn(i,p,(1<<ee)-1)+Bc[P],p+=ee}var ie=f[No(i,p)&$],ye=ie>>4;ie||pn(3),p+=ie&15;var k=Bh[ye];if(ye>3){var ee=Vc[ye];k+=No(i,p)&(1<<ee)-1,p+=ee}if(p>g){c&&pn(0);break}o&&l(u+131072);var re=u+O;if(u<k){var we=r-k,He=Math.min(k,re);for(we+u<0&&pn(3);u<He;++u)t[u]=n[we+u]}for(;u<re;++u)t[u]=t[u-k]}}e.l=h,e.p=le,e.b=u,e.f=d,h&&(d=1,e.m=x,e.d=f,e.n=m)}while(!d);return u!=t.length&&a?kh(t,0,u):t.subarray(0,u)},zh=new Zt(0),Gh=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&pn(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Hh=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};Wh=typeof TextDecoder<"u"&&new TextDecoder,qh=0;try{Wh.decode(zh,{stream:!0}),qh=1}catch{}});function Oo(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function kc(){let i=window.BRAIN_DATA,e=Sr(Oo(window.BRAIN_BLOB)),t=e.buffer,n=e.byteOffset,s=i.quant;return{parts:i.parts.map(a=>{let o=new Int16Array(t,n+a.pos,a.nv*3),c=new Int8Array(t,n+a.nrm,a.nv*3),l=new Uint8Array(t,n+a.shade,a.nv),d=a.i32?new Uint32Array(t,n+a.idx,a.ni):new Uint16Array(t,n+a.idx,a.ni),p=a.net!==void 0?new Uint8Array(t,n+a.net,a.nv):null,u=new Float32Array(a.nv*3);for(let x=0;x<u.length;x++)u[x]=o[x]*s;let h=new Float32Array(a.nv*3);for(let x=0;x<h.length;x++)h[x]=c[x]/127;let f=new Float32Array(a.nv);for(let x=0;x<f.length;x++)f[x]=l[x]/255;return{...a,positions:u,normals:h,shade:f,indices:d,net:p}})}}function Qh(i,e,t,n){if(!["visuel","occipital","temporal","parietal"].includes(n))return"cortex_neutre";let s=Math.abs(i),r=Math.hypot((e+52)*1.05,(t-3)*1.25);if(s>36&&r<9.5)return"v5";let a=Math.hypot((e+66)*.95,(t+15)*1.15);if(s>18&&t<-6&&e>-80&&e<-52&&a<13.5)return"v4";if(n==="visuel"||n==="occipital"||n==="parietal"&&e<-66&&t<28){let o=Math.max(0,e+100),c=Math.max(0,t+15)*.65+Math.max(0,-15-t)*1.25,l=Math.hypot(o,c);if(l<15&&t<7)return"v1";if(l<24.5&&t<17)return"v2";if(l<38&&e<-63&&t>-16&&t<32)return"v3";if(n==="visuel")return"v1"}return"cortex_neutre"}function Oc(i){let e=[],t=["v1","v2","v3","v4","v5","cortex_neutre"];for(let n of["L","R"]){let s={};for(let r of t)s[r]={pos:[],nrm:[],shade:[],idx:[],nv:0};for(let r of i.parts){if(r.hemi!==n||r.kind!=="cortex")continue;let a=new Array(r.nv);for(let l=0;l<r.nv;l++)a[l]=Qh(r.positions[l*3],r.positions[l*3+1],r.positions[l*3+2],r.key);let o=r.indices.length/3,c={};for(let l=0;l<o;l++){let d=r.indices[l*3],p=r.indices[l*3+1],u=r.indices[l*3+2],h=a[d],f=a[p],x=a[u],m=h===f||h===x?h:f===x?f:h,g=s[m],E=c[m];E||(E=new Map,c[m]=E);for(let A of[d,p,u]){let M=E.get(A);M===void 0&&(M=g.nv++,E.set(A,M),g.pos.push(r.positions[A*3],r.positions[A*3+1],r.positions[A*3+2]),g.nrm.push(r.normals[A*3],r.normals[A*3+1],r.normals[A*3+2]),g.shade.push(r.shade[A])),g.idx.push(M)}}}for(let r of t){let a=s[r];if(!a.nv||!a.idx.length)continue;let o=new Float32Array(a.pos),c=new Float32Array(a.nrm),l=new Float32Array(a.shade),d=a.nv<65536?new Uint16Array(a.idx):new Uint32Array(a.idx),p=1/0,u=1/0,h=1/0,f=-1/0,x=-1/0,m=-1/0,g=0,E=0,A=0;for(let M=0;M<a.nv;M++){let R=o[M*3],S=o[M*3+1],v=o[M*3+2];R<p&&(p=R),R>f&&(f=R),S<u&&(u=S),S>x&&(x=S),v<h&&(h=v),v>m&&(m=v),g+=R,E+=S,A+=v}e.push({id:`${r}_${n}`,key:r,kind:"cortex",hemi:n,nv:a.nv,ni:d.length,positions:o,normals:c,shade:l,indices:d,net:null,center:[g/a.nv,E/a.nv,A/a.nv],min:[p,u,h],max:[f,x,m]})}}for(let n of i.parts)n.key==="paroi_mediane"||n.key==="thalamus"?e.push(n):n.key==="cervelet"?e.push({...n,key:"cervelet_neutre"}):n.key==="tronc"&&e.push({...n,key:"tronc_neutre"});return{parts:e,isVisionModel:!0}}function Xc(){let i=window.MRI_DATA,e=Sr(Oo(window.MRI_T1)),t=Sr(Oo(window.MRI_LAB));return{shape:i.shape,origin:i.origin,vox:i.vox,labels:i.labels,t1:e,lab:t}}var zc=Ht(()=>{Nc()});function Jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){let i=Us("canvas");return i.style.display="block",i}function Gl(...i){let e="THREE."+i.shift();qi?qi("log",e,...i):console.log(e,...i)}function nd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=nd(i);let e="THREE."+i.shift();if(qi)qi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function De(...i){i=nd(i);let e="THREE."+i.shift();if(qi)qi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _i(...i){let e=i.join(" ");e in Gc||(Gc[e]=!0,Ue(...i))}function id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function os(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Hl(i,e){return(i%e+e)%e}function $h(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yh(i,e,t){return i!==e?(t-i)/(e-i):0}function As(i,e,t){return(1-t)*i+t*e}function jh(i,e,t,n){return As(i,e,1-Math.exp(-t*n))}function Kh(i,e=1){return e-Math.abs(Hl(i,e*2)-e)}function ef(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sf(i,e){return i+Math.random()*(e-i)}function rf(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(Hc=i);let e=Hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function of(i){return i*Ms}function lf(i){return i*Qi}function cf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function df(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),p=r((e-n)/2),u=a((e-n)/2),h=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*p,c*u,o*l);break;case"YZY":i.set(c*u,o*d,c*p,o*l);break;case"ZXZ":i.set(c*p,c*u,o*d,o*l);break;case"XZX":i.set(o*d,c*f,c*h,o*l);break;case"YXY":i.set(c*h,o*d,c*f,o*l);break;case"ZYZ":i.set(c*f,c*h,o*d,o*l);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ql(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rd(i,e){if(e.constructor===Float32Array)return i;let t=ql(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ad(i,e){if(e.constructor===Float32Array)return i;let t=ql(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function hf(){let i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:qc,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:qc,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}function qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function el(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),d=n.dot(vi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}function wf(i,e,t,n,s,r,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_n,o),c===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:i}}function Nr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ir),i.getVertexPosition(c,Dr),i.getVertexPosition(l,Br);let d=wf(i,e,t,n,Ir,Dr,Br,su);if(d){let p=new D;ni.getBarycoord(su,Ir,Dr,Br,p),s&&(d.uv=ni.getInterpolatedAttribute(s,o,c,l,p,new Ee)),r&&(d.uv1=ni.getInterpolatedAttribute(r,o,c,l,p,new Ee)),a&&(d.normal=ni.getInterpolatedAttribute(a,o,c,l,p,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};ni.getNormal(Ir,Dr,Br,u.normal),d.face=u,d.barycoord=p}return d}function zr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(la.fromBufferAttribute(o,s),ca.fromBufferAttribute(o,r),t.distanceSqToSegment(la,ca,al,cu)>n)return;al.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(al);if(!(l<e.near||l>e.far))return{distance:l,point:cu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Jl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,p){let u=(a-r)/l-(o-r)/(l+d)+(o-a)/d,h=(o-a)/d-(c-a)/(d+p)+(c-o)/p;u*=d,h*=d,s(a,o,u,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function hu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Uf(i,e){let t=1-i;return t*t*e}function Vf(i,e){return 2*(1-i)*i*e}function If(i,e){return i*i*e}function Rs(i,e,t,n){return Uf(i,e)+Vf(i,t)+If(i,n)}function Df(i,e){let t=1-i;return t*t*t*e}function Bf(i,e){let t=1-i;return 3*t*t*i*e}function Pf(i,e){return 3*(1-i)*i*i*e}function Lf(i,e){return i*i*i*e}function Ts(i,e,t,n,s){return Df(i,e)+Bf(i,t)+Pf(i,n)+Lf(i,s)}function Ti(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fu(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ti(i[t]);for(let s in n)e[s]=n[s]}return e}function fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}function Oi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function cd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function zf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=cd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=zf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function pu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function mu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function bu(i,e){return i.distance-e.distance}function xl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xl(r[a],e,t,!0)}}function jl(i,e,t,n){let s=jf(n);switch(t){case Ll:return i*e;case Na:return i*e/s.components*s.byteLength;case ka:return i*e/s.components*s.byteLength;case hi:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case Nl:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case Xa:return i*e*4/s.components*s.byteLength;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Wa:return Math.max(i,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case qa:case Qa:case Za:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case dr:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fo:case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case go:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hr:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jf(i){switch(i){case qt:case Il:return{byteLength:1,components:1};case as:case Dl:case Sn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case bn:case Ba:case dn:return{byteLength:4,components:1};case Bl:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var ui,di,Su,_l,Eu,sr,Mu,is,_n,Ut,Wt,Ei,ss,bl,Sl,El,Au,Mi,Ru,Tu,wu,Cu,Fu,Uu,Vu,Iu,Ml,Al,Du,Bu,Pu,Lu,Nu,ku,Ou,Xu,zu,Jr,Zr,$r,Hi,Yr,jr,Kr,ea,Ua,Gu,Hu,Fn,Rl,Tl,wl,rr,Cl,Fl,Ul,Vl,Ai,rs,Va,Ia,ta,Rn,na,wt,Wu,ar,Ct,Da,qn,qt,Il,Dl,as,Ba,bn,dn,Sn,Pa,La,Ri,Bl,Pl,Ll,Nl,En,Xn,Qn,Na,ka,hi,Oa,Xa,or,lr,cr,ur,za,Ga,Ha,Wa,qa,Qa,Ja,Za,$a,dr,Ya,ja,Ka,eo,to,no,io,so,ro,ao,oo,lo,co,uo,ho,fo,po,mo,go,vo,hr,xo,ws,ia,qr,dl,hl,fl,pl,qu,fr,Qu,Jn,Pt,Cs,Fs,Ke,Qr,Ju,Zu,$u,Yu,kl,ju,Ku,Ol,Xl,ed,zl,ln,Wi,Gc,qi,sd,yn,Dt,Hc,Ms,Qi,Ql,Ee,jt,D,Xo,Wc,Be,zo,qc,Qc,Je,Ci,sa,ff,Ji,pf,Ho,zt,ct,ra,Kt,Vs,aa,et,Fi,mn,mf,gf,Yn,Er,$t,Jc,Zc,Tn,Zi,vf,$c,Ui,Bn,Mr,vs,xf,yf,Yc,jc,Kc,eu,_f,Vi,Wo,_t,xn,bf,$i,od,jn,Ar,Ie,Bt,bi,gn,Pn,Qo,Ln,Ii,Di,tu,Jo,Zo,$o,Yo,jo,Ko,ni,cn,Nn,vn,Rr,Bi,Pi,Li,Kn,ei,gi,xs,Tr,wr,vi,gt,Cr,Sf,yt,Is,Ds,ht,Ef,ys,tl,zn,Mf,on,nl,Ni,Yt,_s,Tt,Nt,il,Af,Rf,Xt,Tf,wn,kn,sl,Fr,Ur,ii,Gn,nu,xi,Vr,iu,Ir,Dr,Br,rl,Pr,su,Lr,st,Bs,Ps,ki,ru,kr,au,Cf,bs,Ss,Ls,yi,Ff,Or,si,ou,oa,Yi,la,ca,lu,Es,Xr,al,cu,Ns,ks,Os,Hn,Xs,zs,ri,un,Gs,ua,uu,du,ol,ll,cl,ji,da,ha,fa,pa,ma,Hs,ga,Nf,Ws,ai,qs,Qs,ld,Of,Xf,Cn,va,Wn,Ki,Js,xa,ya,oi,_a,ba,Sa,Ea,en,li,Ma,Aa,Ra,Zs,ci,Ta,wa,ud,Ca,es,$s,ul,gu,vu,Ys,Hr,Wr,An,js,ti,xu,yu,Lt,ml,Ks,er,gl,Si,Xi,zi,ts,Fa,$l,Hf,Yl,Wf,qf,Qf,Jf,Zf,$f,Yf,vl,at,vx,_u,tr,nr,ns,yl,ir,Kl=Ht(()=>{ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,_l=1,Eu=2,sr=1,Mu=2,is=3,_n=0,Ut=1,Wt=2,Ei=0,ss=1,bl=2,Sl=3,El=4,Au=5,Mi=100,Ru=101,Tu=102,wu=103,Cu=104,Fu=200,Uu=201,Vu=202,Iu=203,Ml=204,Al=205,Du=206,Bu=207,Pu=208,Lu=209,Nu=210,ku=211,Ou=212,Xu=213,zu=214,Jr=0,Zr=1,$r=2,Hi=3,Yr=4,jr=5,Kr=6,ea=7,Ua=0,Gu=1,Hu=2,Fn=0,Rl=1,Tl=2,wl=3,rr=4,Cl=5,Fl=6,Ul=7,Vl=300,Ai=301,rs=302,Va=303,Ia=304,ta=1e3,Rn=1001,na=1002,wt=1003,Wu=1004,ar=1005,Ct=1006,Da=1007,qn=1008,qt=1009,Il=1010,Dl=1011,as=1012,Ba=1013,bn=1014,dn=1015,Sn=1016,Pa=1017,La=1018,Ri=1020,Bl=35902,Pl=35899,Ll=1021,Nl=1022,En=1023,Xn=1026,Qn=1027,Na=1028,ka=1029,hi=1030,Oa=1031,Xa=1033,or=33776,lr=33777,cr=33778,ur=33779,za=35840,Ga=35841,Ha=35842,Wa=35843,qa=36196,Qa=37492,Ja=37496,Za=37488,$a=37489,dr=37490,Ya=37491,ja=37808,Ka=37809,eo=37810,to=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,uo=37820,ho=37821,fo=36492,po=36494,mo=36495,go=36283,vo=36284,hr=36285,xo=36286,ws=2300,ia=2301,qr=2302,dl=2303,hl=2400,fl=2401,pl=2402,qu=3200,fr=0,Qu=1,Jn="",Pt="srgb",Cs="srgb-linear",Fs="linear",Ke="srgb",Qr=7680,Ju=519,Zu=512,$u=513,Yu=514,kl=515,ju=516,Ku=517,Ol=518,Xl=519,ed=35044,zl="300 es",ln=2e3,Wi=2001;Gc={},qi=null;sd={[Jr]:Jr,[$r]:Kr,[Yr]:Yr,[Hi]:jr,[Zr]:Zr,[Kr]:$r,[ea]:ea,[jr]:Hi},yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=1234567,Ms=Math.PI/180,Qi=180/Math.PI;Ql={DEG2RAD:Ms,RAD2DEG:Qi,generateUUID:os,clamp:ke,euclideanModulo:Hl,mapLinear:$h,inverseLerp:Yh,lerp:As,damp:jh,pingpong:Kh,smoothstep:ef,smootherstep:tf,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:uf,floorPowerOfTwo:Wl,setQuaternionFromProperEuler:df,normalize:ad,denormalize:rd},Ee=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],u=r[a+0],h=r[a+1],f=r[a+2],x=r[a+3];if(p!==x||c!==u||l!==h||d!==f){let m=c*u+l*h+d*f+p*x;m<0&&(u=-u,h=-h,f=-f,x=-x,m=-m);let g=1-o;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);g=Math.sin(g*E)/A,o=Math.sin(o*E)/A,c=c*g+u*o,l=l*g+h*o,d=d*g+f*o,p=p*g+x*o}else{c=c*g+u*o,l=l*g+h*o,d=d*g+f*o,p=p*g+x*o;let E=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=E,l*=E,d*=E,p*=E}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[a],u=r[a+1],h=r[a+2],f=r[a+3];return e[t]=o*f+d*p+c*h-l*u,e[t+1]=c*f+d*u+l*p-o*h,e[t+2]=l*f+d*h+o*u-c*p,e[t+3]=d*f-o*p-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),p=o(r/2),u=c(n/2),h=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=u*d*p+l*h*f,this._y=l*h*p-u*d*f,this._z=l*d*f+u*h*p,this._w=l*d*p-u*h*f;break;case"YXZ":this._x=u*d*p+l*h*f,this._y=l*h*p-u*d*f,this._z=l*d*f-u*h*p,this._w=l*d*p+u*h*f;break;case"ZXY":this._x=u*d*p-l*h*f,this._y=l*h*p+u*d*f,this._z=l*d*f+u*h*p,this._w=l*d*p-u*h*f;break;case"ZYX":this._x=u*d*p-l*h*f,this._y=l*h*p+u*d*f,this._z=l*d*f-u*h*p,this._w=l*d*p+u*h*f;break;case"YZX":this._x=u*d*p+l*h*f,this._y=l*h*p+u*d*f,this._z=l*d*f-u*h*p,this._w=l*d*p-u*h*f;break;case"XZY":this._x=u*d*p-l*h*f,this._y=l*h*p-u*d*f,this._z=l*d*f+u*h*p,this._w=l*d*p+u*h*f;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(d-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+d)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*d,this.y=n+c*d+o*l-r*p,this.z=s+c*p+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new D,Wc=new jt,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],h=n[5],f=n[8],x=s[0],m=s[3],g=s[6],E=s[1],A=s[4],M=s[7],R=s[2],S=s[5],v=s[8];return r[0]=a*x+o*E+c*R,r[3]=a*m+o*A+c*S,r[6]=a*g+o*M+c*v,r[1]=l*x+d*E+p*R,r[4]=l*m+d*A+p*S,r[7]=l*g+d*M+p*v,r[2]=u*x+h*E+f*R,r[5]=u*m+h*A+f*S,r[8]=u*g+h*M+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=d*a-o*l,u=o*c-d*r,h=l*r-a*c,f=t*p+n*u+s*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=p*x,e[1]=(s*l-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(d*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zo.makeScale(e,t)),this}rotate(e){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zo=new Be,qc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je=hf();sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Us("canvas")),Ci.width=e.width,Ci.height=e.height;let s=Ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ff=0,Ji=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);n.url=r}return t||(e.images[this.uuid]=n),n}};pf=0,Ho=new D,zt=class i extends yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ct,a=qn,o=En,c=qt,l=i.DEFAULT_ANISOTROPY,d=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=os(),this.name="",this.source=new Ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Vl;zt.DEFAULT_ANISOTROPY=1;ct=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],p=c[8],u=c[1],h=c[5],f=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+x)<.1&&Math.abs(f+m)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,M=(h+1)/2,R=(g+1)/2,S=(d+u)/4,v=(p+x)/4,b=(f+m)/4;return A>M&&A>R?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=v/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=b/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=v/r,s=b/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-f)*(m-f)+(p-x)*(p-x)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(m-f)/E,this.y=(p-x)/E,this.z=(u-d)/E,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new zt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ji(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends ra{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vs=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},aa=class extends zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},et=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,d,p,u,h,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,p,u,h,f,x,m)}set(e,t,n,s,r,a,o,c,l,d,p,u,h,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=p,g[14]=u,g[3]=h,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*d,h=a*p,f=o*d,x=o*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=h+f*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=f+h*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*d,h=c*p,f=l*d,x=l*p;t[0]=u+x*o,t[4]=f*o-h,t[8]=a*l,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=h*o-f,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*d,h=c*p,f=l*d,x=l*p;t[0]=u-x*o,t[4]=-a*p,t[8]=f+h*o,t[1]=h+f*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*d,h=a*p,f=o*d,x=o*p;t[0]=c*d,t[4]=f*l-h,t[8]=u*l+x,t[1]=c*p,t[5]=x*l+u,t[9]=h*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,h=a*l,f=o*c,x=o*l;t[0]=c*d,t[4]=x-u*p,t[8]=f*p+h,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*p+f,t[10]=u-x*p}else if(e.order==="XZY"){let u=a*c,h=a*l,f=o*c,x=o*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=u*p+x,t[5]=a*d,t[9]=h*p-f,t[2]=f*p-h,t[6]=o*d,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Yn.crossVectors(n,$t),Yn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Yn.crossVectors(n,$t)),Yn.normalize(),Er.crossVectors($t,Yn),s[0]=Yn.x,s[4]=Er.x,s[8]=$t.x,s[1]=Yn.y,s[5]=Er.y,s[9]=$t.y,s[2]=Yn.z,s[6]=Er.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],h=n[13],f=n[2],x=n[6],m=n[10],g=n[14],E=n[3],A=n[7],M=n[11],R=n[15],S=s[0],v=s[4],b=s[8],B=s[12],C=s[1],P=s[5],X=s[9],H=s[13],F=s[2],U=s[6],L=s[10],V=s[14],q=s[3],k=s[7],Q=s[11],$=s[15];return r[0]=a*S+o*C+c*F+l*q,r[4]=a*v+o*P+c*U+l*k,r[8]=a*b+o*X+c*L+l*Q,r[12]=a*B+o*H+c*V+l*$,r[1]=d*S+p*C+u*F+h*q,r[5]=d*v+p*P+u*U+h*k,r[9]=d*b+p*X+u*L+h*Q,r[13]=d*B+p*H+u*V+h*$,r[2]=f*S+x*C+m*F+g*q,r[6]=f*v+x*P+m*U+g*k,r[10]=f*b+x*X+m*L+g*Q,r[14]=f*B+x*H+m*V+g*$,r[3]=E*S+A*C+M*F+R*q,r[7]=E*v+A*P+M*U+R*k,r[11]=E*b+A*X+M*L+R*Q,r[15]=E*B+A*H+M*V+R*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],p=e[6],u=e[10],h=e[14],f=e[3],x=e[7],m=e[11],g=e[15],E=c*h-l*u,A=o*h-l*p,M=o*u-c*p,R=a*h-l*d,S=a*u-c*d,v=a*p-o*d;return t*(x*E-m*A+g*M)-n*(f*E-m*R+g*S)+s*(f*A-x*R+g*v)-r*(f*M-x*S+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=e[9],u=e[10],h=e[11],f=e[12],x=e[13],m=e[14],g=e[15],E=t*o-n*a,A=t*c-s*a,M=t*l-r*a,R=n*c-s*o,S=n*l-r*o,v=s*l-r*c,b=d*x-p*f,B=d*m-u*f,C=d*g-h*f,P=p*m-u*x,X=p*g-h*x,H=u*g-h*m,F=E*H-A*X+M*P+R*C-S*B+v*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/F;return e[0]=(o*H-c*X+l*P)*U,e[1]=(s*X-n*H-r*P)*U,e[2]=(x*v-m*S+g*R)*U,e[3]=(u*S-p*v-h*R)*U,e[4]=(c*C-a*H-l*B)*U,e[5]=(t*H-s*C+r*B)*U,e[6]=(m*M-f*v-g*A)*U,e[7]=(d*v-u*M+h*A)*U,e[8]=(a*X-o*C+l*b)*U,e[9]=(n*C-t*X-r*b)*U,e[10]=(f*S-x*M+g*E)*U,e[11]=(p*M-d*S-h*E)*U,e[12]=(o*B-a*P-c*b)*U,e[13]=(t*P-n*B+s*b)*U,e[14]=(x*A-f*R-m*E)*U,e[15]=(d*R-p*A+u*E)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,p=o+o,u=r*l,h=r*d,f=r*p,x=a*d,m=a*p,g=o*p,E=c*l,A=c*d,M=c*p,R=n.x,S=n.y,v=n.z;return s[0]=(1-(x+g))*R,s[1]=(h+M)*R,s[2]=(f-A)*R,s[3]=0,s[4]=(h-M)*S,s[5]=(1-(u+g))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(f+A)*v,s[9]=(m-E)*v,s[10]=(1-(u+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length(),o=Fi.set(s[4],s[5],s[6]).length(),c=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let l=1/a,d=1/o,p=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=p,mn.elements[9]*=p,mn.elements[10]*=p,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ln,c=!1){let l=this.elements,d=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f,x;if(c)f=r/(a-r),x=a*r/(a-r);else if(o===ln)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Wi)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ln,c=!1){let l=this.elements,d=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),h=-(n+s)/(n-s),f,x;if(c)f=1/(a-r),x=a/(a-r);else if(o===ln)f=-2/(a-r),x=-(a+r)/(a-r);else if(o===Wi)f=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fi=new D,mn=new et,mf=new D(0,0,0),gf=new D(1,1,1),Yn=new D,Er=new D,$t=new D,Jc=new et,Zc=new jt,Tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],p=s[2],u=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";Zi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vf=0,$c=new D,Ui=new jt,Bn=new et,Mr=new D,vs=new D,xf=new D,yf=new jt,Yc=new D(1,0,0),jc=new D(0,1,0),Kc=new D(0,0,1),eu={type:"added"},_f={type:"removed"},Vi={type:"childadded",child:null},Wo={type:"childremoved",child:null},_t=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Tn,n=new jt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Be}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(vs,Mr,this.up):Bn.lookAt(Mr,vs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),p=a(e.shapes),u=a(e.skeletons),h=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new D(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;xn=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},bf={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,f=.005;l.inputState.pinching&&u>h+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Hl(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qo(a,r,e+1/3),this.g=qo(a,r,e),this.b=qo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.workingToColorSpace(Bt.copy(this),e),Math.round(ke(Bt.r*255,0,255))*65536+Math.round(ke(Bt.g*255,0,255))*256+Math.round(ke(Bt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Pt){Je.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Ar);let n=As(jn.h,Ar.h,t),s=As(jn.s,Ar.s,t),r=As(jn.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ie;Ie.NAMES=od;bi=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gn=new D,Pn=new D,Qo=new D,Ln=new D,Ii=new D,Di=new D,tu=new D,Jo=new D,Zo=new D,$o=new D,Yo=new ct,jo=new ct,Ko=new ct,ni=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gn.subVectors(s,t),Pn.subVectors(n,t),Qo.subVectors(e,t);let a=gn.dot(gn),o=gn.dot(Pn),c=gn.dot(Qo),l=Pn.dot(Pn),d=Pn.dot(Qo),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,h=(l*c-o*d)*u,f=(a*d-o*c)*u;return r.set(1-h-f,f,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Yo.setScalar(0),jo.setScalar(0),Ko.setScalar(0),Yo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),Pn.subVectors(e,t),gn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),gn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Di.subVectors(r,n),Jo.subVectors(e,n);let c=Ii.dot(Jo),l=Di.dot(Jo);if(c<=0&&l<=0)return t.copy(n);Zo.subVectors(e,s);let d=Ii.dot(Zo),p=Di.dot(Zo);if(d>=0&&p<=d)return t.copy(s);let u=c*p-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return a=c/(c-d),t.copy(n).addScaledVector(Ii,a);$o.subVectors(e,r);let h=Ii.dot($o),f=Di.dot($o);if(f>=0&&h<=f)return t.copy(r);let x=h*l-c*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Di,o);let m=d*f-h*p;if(m<=0&&p-d>=0&&h-f>=0)return tu.subVectors(r,s),o=(p-d)/(p-d+(h-f)),t.copy(s).addScaledVector(tu,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),Tr.subVectors(this.max,xs),Bi.subVectors(e.a,xs),Pi.subVectors(e.b,xs),Li.subVectors(e.c,xs),Kn.subVectors(Pi,Bi),ei.subVectors(Li,Pi),gi.subVectors(Bi,Li);let t=[0,-Kn.z,Kn.y,0,-ei.z,ei.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!el(t,Bi,Pi,Li,Tr)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Bi,Pi,Li,Tr))?!1:(wr.crossVectors(Kn,ei),t=[wr.x,wr.y,wr.z],el(t,Bi,Pi,Li,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,Rr=new cn,Bi=new D,Pi=new D,Li=new D,Kn=new D,ei=new D,gi=new D,xs=new D,Tr=new D,wr=new D,vi=new D;gt=new D,Cr=new Ee,Sf=0,yt=class extends yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ed,this.updateRanges=[],this.gpuType=dn,this.version=0,this._normalizationScale=e!==void 0?ql(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ad(e,this.array)}},Is=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ds=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ht=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ef=new cn,ys=new D,tl=new D,zn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(tl)),this.expandByPoint(ys.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mf=0,on=new et,nl=new _t,Ni=new D,Yt=new cn,_s=new cn,Tt=new D,Nt=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?Ds:Is)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Yt.min,_s.min),Yt.expandByPoint(Tt),Tt.addVectors(Yt.max,_s.max),Yt.expandByPoint(Tt)):(Yt.expandByPoint(_s.min),Yt.expandByPoint(_s.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Tt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Tt.add(Ni)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new D,c[B]=new D;let d=new D,p=new D,u=new D,h=new Ee,f=new Ee,x=new Ee,m=new D,g=new D;function E(B,C,P){l[B]=l[C]=l[P]=1,d.fromBufferAttribute(n,B),p.fromBufferAttribute(n,C),u.fromBufferAttribute(n,P),h.fromBufferAttribute(r,B),f.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),p.sub(d),u.sub(d),f.sub(h),x.sub(h);let X=1/(f.x*x.y-x.x*f.y);isFinite(X)&&(m.copy(p).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(X),g.copy(u).multiplyScalar(f.x).addScaledVector(p,-x.x).multiplyScalar(X),o[B].add(m),o[C].add(m),o[P].add(m),c[B].add(g),c[C].add(g),c[P].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,C=A.length;B<C;++B){let P=A[B],X=P.start,H=P.count;for(let F=X,U=X+H;F<U;F+=3)E(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new D,R=new D,S=new D,v=new D;function b(B){S.fromBufferAttribute(s,B),v.copy(S);let C=o[B];M.copy(C),M.sub(S.multiplyScalar(S.dot(C))).normalize(),R.crossVectors(v,C);let X=R.dot(c[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,X)}for(let B=0,C=n.count;B<C;++B)l[B]&&b(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,d=new D,p=new D;if(e)for(let u=0,h=e.count;u<h;u+=3){let f=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,p=o.normalized,u=new l.constructor(c.length*d),h=0,f=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*d;for(let g=0;g<d;g++)u[f++]=l[h++]}return new yt(u,d,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,p=l.length;d<p;d++){let u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){let h=l[p];d.push(h.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],p=r[l];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},il=new D,Af=new D,Rf=new Be,Xt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=il.subVectors(n,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rf.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tf=0,wn=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=os(),this.name="",this.type="Material",this.blending=ss,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Al,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kn=new D,sl=new D,Fr=new D,Ur=new D,ii=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sl.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(sl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Ur.dot(this.direction),c=-Ur.dot(Fr),l=Ur.lengthSq(),d=Math.abs(1-a*a),p,u,h,f;if(d>0)if(p=a*c-o,u=a*o-c,f=r*d,p>=0)if(u>=-f)if(u<=f){let x=1/d;p*=x,u*=x,h=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=r,p=Math.max(0,-(a*u+o)),h=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(a*u+o)),h=-p*p+u*(u+2*c)+l;else u<=-f?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-c),r),h=-p*p+u*(u+2*c)+l):u<=f?(p=0,u=Math.min(Math.max(-r,-c),r),h=u*(u+2*c)+l):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-c),r),h=-p*p+u*(u+2*c)+l);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),h=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(sl).addScaledVector(Fr,u),h}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,p=e.x-a.x,u=e.y-a.y,h=e.z-a.z,f=t.x-a.x,x=t.y-a.y,m=t.z-a.z,g=n.x-a.x,E=n.y-a.y,A=n.z-a.z,M=Math.abs(c),R=Math.abs(l),S=Math.abs(d),v,b,B,C,P,X,H,F,U,L,V,q;if(M>=R&&M>=S?(B=c,X=p,U=f,q=g,c>=0?(v=l,b=d,C=u,P=h,H=x,F=m,L=E,V=A):(v=d,b=l,C=h,P=u,H=m,F=x,L=A,V=E)):R>=S?(B=l,X=u,U=x,q=E,l>=0?(v=d,b=c,C=h,P=p,H=m,F=f,L=A,V=g):(v=c,b=d,C=p,P=h,H=f,F=m,L=g,V=A)):(B=d,X=h,U=m,q=A,d>=0?(v=c,b=l,C=p,P=u,H=f,F=x,L=g,V=E):(v=l,b=c,C=u,P=p,H=x,F=f,L=E,V=g)),B===0)return null;let k=v/B,Q=b/B,$=1/B,le=C-k*X,te=P-Q*X,O=H-k*U,ee=F-Q*U,ie=L-k*q,ye=V-Q*q,re=ie*ee-ye*O,we=le*ye-te*ie,He=O*te-ee*le;if(s){if(re<0||we<0||He<0)return null}else if((re<0||we<0||He<0)&&(re>0||we>0||He>0))return null;let xe=re+we+He;if(xe===0)return null;let We=$*(re*X+we*U+He*q);return(xe>0?We<0:We>0)?null:this.at(We/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nu=new et,xi=new ii,Vr=new zn,iu=new D,Ir=new D,Dr=new D,Br=new D,rl=new D,Pr=new D,su=new D,Lr=new D,st=class extends _t{constructor(e=new Nt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],p=r[c];d!==0&&(rl.fromBufferAttribute(p,e),a?Pr.addScaledVector(rl,d):Pr.addScaledVector(rl.sub(t),d))}t.add(Pr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(Vr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Vr,iu)===null||xi.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(r).invert(),xi.copy(e.ray).applyMatrix4(nu),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=u.length;f<x;f++){let m=u[f],g=a[m.materialIndex],E=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,R=A;M<R;M+=3){let S=o.getX(M),v=o.getX(M+1),b=o.getX(M+2);s=Nr(this,g,e,n,l,d,p,S,v,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=f,g=x;m<g;m+=3){let E=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=Nr(this,a,e,n,l,d,p,E,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,x=u.length;f<x;f++){let m=u[f],g=a[m.materialIndex],E=Math.max(m.start,h.start),A=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,R=A;M<R;M+=3){let S=M,v=M+1,b=M+2;s=Nr(this,g,e,n,l,d,p,S,v,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=f,g=x;m<g;m+=3){let E=m,A=m+1,M=m+2;s=Nr(this,a,e,n,l,d,p,E,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Bs=class extends zt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=wt,d=wt,p,u){super(null,a,o,c,l,d,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ps=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ki=new et,ru=new et,kr=[],au=new cn,Cf=new et,bs=new st,Ss=new zn,Ls=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),au.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Ss.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),ru.multiplyMatrices(n,ki),bs.matrixWorld=ru,bs.raycast(e,kr);for(let a=0,o=kr.length;a<o;a++){let c=kr[a];c.instanceId=r,c.object=this,t.push(c)}kr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Na,dn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yi=new zn,Ff=new Ee(.5,.5),Or=new D,si=class{constructor(e=new Xt,t=new Xt,n=new Xt,s=new Xt,r=new Xt,a=new Xt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],p=r[5],u=r[6],h=r[7],f=r[8],x=r[9],m=r[10],g=r[11],E=r[12],A=r[13],M=r[14],R=r[15];if(s[0].setComponents(l-a,h-d,g-f,R-E).normalize(),s[1].setComponents(l+a,h+d,g+f,R+E).normalize(),s[2].setComponents(l+o,h+p,g+x,R+A).normalize(),s[3].setComponents(l-o,h-p,g-x,R-A).normalize(),n)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(l-c,h-u,g-m,R-M).normalize();else if(s[4].setComponents(l-c,h-u,g-m,R-M).normalize(),t===ln)s[5].setComponents(l+c,h+u,g+m,R+M).normalize();else if(t===Wi)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);let t=Ff.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ou=new et,oa=class i{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ou.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new si),n[s].setFromProjectionMatrix(ou,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new si),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Yi=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},la=new D,ca=new D,lu=new et,Es=new ii,Xr=new zn,al=new D,cu=new D,Ns=class extends _t{constructor(e=new Nt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)la.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=la.distanceTo(ca);e.setAttribute("lineDistance",new ht(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;lu.copy(s).invert(),Es.copy(e.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=h,m=f-1;x<m;x+=l){let g=d.getX(x),E=d.getX(x+1),A=zr(this,e,Es,c,g,E,x);A&&t.push(A)}if(this.isLineLoop){let x=d.getX(f-1),m=d.getX(h),g=zr(this,e,Es,c,x,m,f-1);g&&t.push(g)}}else{let h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=h,m=f-1;x<m;x+=l){let g=zr(this,e,Es,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=zr(this,e,Es,c,f-1,h,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};ks=class extends zt{constructor(e=[],t=Ai,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Os=class extends zt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class extends zt{constructor(e,t,n=bn,s,r,a,o=wt,c=wt,l,d=Xn,p=1){if(d!==Xn&&d!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xs=class extends Hn{constructor(e,t=bn,n=Ai,s,r,a=wt,o=wt,c,l=Xn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zs=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ri=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],p=[],u=0,h=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2));function f(x,m,g,E,A,M,R,S,v,b,B){let C=M/v,P=R/b,X=M/2,H=R/2,F=S/2,U=v+1,L=b+1,V=0,q=0,k=new D;for(let Q=0;Q<L;Q++){let $=Q*P-H;for(let le=0;le<U;le++){let te=le*C-X;k[x]=te*E,k[m]=$*A,k[g]=F,l.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[g]=S>0?1:-1,d.push(k.x,k.y,k.z),p.push(le/v),p.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let $=0;$<v;$++){let le=u+$+U*Q,te=u+$+U*(Q+1),O=u+($+1)+U*(Q+1),ee=u+($+1)+U*Q;c.push(le,te,ee),c.push(te,O,ee),q+=6}o.addGroup(h,q,B),h+=q,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],u=n[s+1]-d,h=(a-d)/u;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ee:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,c=new et;for(let h=0;h<=e;h++){let f=h/e;s[h]=this.getTangentAt(f,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ke(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(o,f))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(ke(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],h*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Gs=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*p+this.aX,l=u*p+h*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ua=class extends Gs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};uu=new D,du=new D,ol=new Jl,ll=new Jl,cl=new Jl,ji=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(du.subVectors(s[0],s[1]).add(s[0]),l=du);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(uu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=uu),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(p),h),x=Math.pow(p.distanceToSquared(u),h),m=Math.pow(u.distanceToSquared(d),h);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),ol.initNonuniformCatmullRom(l.x,p.x,u.x,d.x,f,x,m),ll.initNonuniformCatmullRom(l.y,p.y,u.y,d.y,f,x,m),cl.initNonuniformCatmullRom(l.z,p.z,u.z,d.z,f,x,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,p.x,u.x,d.x,this.tension),ll.initCatmullRom(l.y,p.y,u.y,d.y,this.tension),cl.initCatmullRom(l.z,p.z,u.z,d.z,this.tension));return n.set(ol.calc(c),ll.calc(c),cl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};da=class extends un{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends un{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y),Ts(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends un{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends un{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends un{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,s.x,r.x,a.x),Rs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends un{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(e,s.x,r.x,a.x),Rs(e,s.y,r.y,a.y),Rs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(hu(o,c.x,l.x,d.x,p.x),hu(o,c.y,l.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},Nf=Object.freeze({__proto__:null,ArcCurve:ua,CatmullRomCurve3:ji,CubicBezierCurve:da,CubicBezierCurve3:ha,EllipseCurve:Gs,LineCurve:fa,LineCurve3:pa,QuadraticBezierCurve:ma,QuadraticBezierCurve3:Hs,SplineCurve:ga}),Ws=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,p=e/o,u=t/c,h=[],f=[],x=[],m=[];for(let g=0;g<d;g++){let E=g*u-a;for(let A=0;A<l;A++){let M=A*p-r;f.push(M,-E,0),x.push(0,0,1),m.push(A/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let E=0;E<o;E++){let A=E+l*g,M=E+l*(g+1),R=E+1+l*(g+1),S=E+1+l*g;h.push(A,M,S),h.push(M,R,S)}this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ai=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],p=new D,u=new D,h=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let E=[],A=g/n,M=a+A*o,R=e*Math.cos(M),S=Math.sqrt(e*e-R*R),v=0;g===0&&a===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){let B=b/t,C=s+B*r;p.x=-S*Math.cos(C),p.y=R,p.z=S*Math.sin(C),f.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),m.push(B+v,1-A),E.push(l++)}d.push(E)}for(let g=0;g<n;g++)for(let E=0;E<t;E++){let A=d[g][E+1],M=d[g][E],R=d[g+1][E],S=d[g+1][E+1];(g!==0||a>0)&&h.push(A,M,S),(g!==n-1||c<Math.PI)&&h.push(M,R,S)}this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},qs=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],d=[],p=[],u=new D,h=new D,f=new D;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let g=0;g<=s;g++){let E=g/s*r;h.x=(e+t*Math.cos(m))*Math.cos(E),h.y=(e+t*Math.cos(m))*Math.sin(E),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),u.x=e*Math.cos(E),u.y=e*Math.sin(E),f.subVectors(h,u).normalize(),d.push(f.x,f.y,f.z),p.push(g/s),p.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,E=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,M=(s+1)*x+m;c.push(g,E,M),c.push(E,A,M)}this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Qs=class i extends Nt{constructor(e=new Hs(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new Ee,d=new D,p=[],u=[],h=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function x(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),E(),g()}function m(A){d=e.getPointAt(A/t,d);let M=a.normals[A],R=a.binormals[A];for(let S=0;S<=s;S++){let v=S/s*Math.PI*2,b=Math.sin(v),B=-Math.cos(v);c.x=B*M.x+b*R.x,c.y=B*M.y+b*R.y,c.z=B*M.z+b*R.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=d.x+n*c.x,o.y=d.y+n*c.y,o.z=d.z+n*c.z,p.push(o.x,o.y,o.z)}}function g(){for(let A=1;A<=t;A++)for(let M=1;M<=s;M++){let R=(s+1)*(A-1)+(M-1),S=(s+1)*A+(M-1),v=(s+1)*A+M,b=(s+1)*(A-1)+M;f.push(R,S,b),f.push(S,v,b)}}function E(){for(let A=0;A<=t;A++)for(let M=0;M<=s;M++)l.x=A/t,l.y=M/s,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Nf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};ld={clone:Ti,merge:kt},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},va=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wn=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ki=class extends Wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Js=class extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xa=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ya=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fl:r=e,o=2*t-n;break;case pl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fl:a=e,c=2*n-t;break;case pl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,h=this._weightNext,f=(n-t)/(s-t),x=f*f,m=x*f,g=-u*m+2*u*x-u*f,E=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*f+1,A=(-1-h)*m+(1.5+h)*x+.5*f,M=h*m-h*x;for(let R=0;R!==o;++R)r[R]=g*a[d+R]+E*a[l+R]+A*a[c+R]+M*a[p+R];return r}},ba=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),p=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*p+a[c+u]*d;return r}},Sa=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ea=class extends oi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let f=(n-t)/(s-t),x=1-f;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*f;return r}let u=o*2,h=e-1;for(let f=0;f!==o;++f){let x=a[l+f],m=a[c+f],g=h*u+f*2,E=p[g],A=p[g+1],M=e*u+f*2,R=d[M],S=d[M+1],v=Gf(n,t,E,R,s);r[f]=cd(v,x,A,S,m)}return r}};en=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oi(t,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oi(e.times,Array),values:Oi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Gr(e.settings)&&(n.settings={inTangents:Oi(e.settings.inTangents,Array),outTangents:Oi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break;case dl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Gr(this.settings)&&(pu(this.settings.inTangents,e),pu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Gr(this.settings)&&(mu(this.settings.inTangents,e),mu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){De("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){De("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Zh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){De("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,u=p-n,h=p+n;for(let f=0;f!==n;++f){let x=t[p+f];if(x!==t[u+f]||x!==t[h+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let h=0;h!==n;++h)t[u+h]=t[p+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Gr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=ia;li=class extends en{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=ws;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;Ma=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Ma.prototype.ValueTypeName="color";Aa=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="number";Ra=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)jt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zs=class extends en{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;ci=class extends en{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=ws;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;Ta=class extends en{constructor(e,t,n,s){super(e,t,n,s)}};Ta.prototype.ValueTypeName="vector";wa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=l.length;p<u;p+=2){let h=l[p],f=l[p+1];if(h.global&&(h.lastIndex=0),h.test(d))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ud=new wa,Ca=class{constructor(e){this.manager=e!==void 0?e:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";es=class extends _t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ul=new et,gu=new D,vu=new D,Ys=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new si,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ul,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Wi||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hr=new D,Wr=new jt,An=new D,js=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hr,Wr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hr,Wr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new D,xu=new Ee,yu=new Ee,Lt=class extends js{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,xu,yu),t.subVectors(yu,xu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ml=class extends Ys{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}},Ks=class extends es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},er=class extends js{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gl=class extends Ys{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new gl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Xi=-90,zi=1,ts=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Xi,zi,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Xi,zi,e,t);r.layers=this.layers,this.add(r);let a=new Lt(Xi,zi,e,t);a.layers=this.layers,this.add(a);let o=new Lt(Xi,zi,e,t);o.layers=this.layers,this.add(o);let c=new Lt(Xi,zi,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Xi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Fa=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},$l="\\[\\]\\.:\\/",Hf=new RegExp("["+$l+"]","g"),Yl="[^"+$l+"]",Wf="[^"+$l.replace("\\.","")+"]",qf=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Qf=/(WCOD+)?/.source.replace("WCOD",Wf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),$f=new RegExp("^"+qf+Qf+Jf+Zf+"$"),Yf=["material","materials","bones","map"],vl=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hf,"")}static parseTrackName(e){let t=$f.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;De("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=vl;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];vx=new Float32Array(1),_u=new et,tr=class{constructor(e,t,n=0,s=1/0){this.ray=new ii(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):De("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(e,t=!0,n=[]){return xl(e,this,n,t),n.sort(bu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xl(e[s],this,n,t);return n.sort(bu),n}};nr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ns=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},yl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},ir=class extends yn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Vd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ep(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,d);else{p.sort((h,f)=>h.start-f.start);let u=0;for(let h=1;h<p.length;h++){let f=p[u],x=p[h];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++u,p[u]=x)}p.length=u+1;for(let h=0,f=p.length;h<f;h++){let x=p[h];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Bg(i,e,t,n,s,r){let a=new Ie(0),o=s===!0?0:1,c,l,d=null,p=0,u=null;function h(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let M=E.backgroundBlurriness>0;A=e.get(A,M)}return A}function f(E){let A=!1,M=h(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,A){let M=h(A);M&&M.isCubeTexture?(l===void 0&&(l=new st(new ri(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ti(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Id),l.material.toneMapped=Je.getTransfer(M.colorSpace)!==Ke,(d!==M||p!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new st(new Ws(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ti(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==Ke,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,A){E.getRGB(yo,Zl(i)),t.buffers.color.setClear(yo.r,yo.g,yo.b,A,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:f,addToRenderList:x,dispose:g}}function Pg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,X,H,F,U){let L=!1,V=p(P,F,H,X);r!==V&&(r=V,l(r.object)),L=h(P,F,H,U),L&&f(P,F,H,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,M(P,X,H,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function p(P,X,H,F){let U=F.wireframe===!0,L=n[X.id];L===void 0&&(L={},n[X.id]=L);let V=P.isInstancedMesh===!0?P.id:0,q=L[V];q===void 0&&(q={},L[V]=q);let k=q[H.id];k===void 0&&(k={},q[H.id]=k);let Q=k[U];return Q===void 0&&(Q=u(c()),k[U]=Q),Q}function u(P){let X=[],H=[],F=[];for(let U=0;U<t;U++)X[U]=0,H[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:H,attributeDivisors:F,object:P,attributes:{},index:null}}function h(P,X,H,F){let U=r.attributes,L=X.attributes,V=0,q=H.getAttributes();for(let k in q)if(q[k].location>=0){let $=U[k],le=L[k];if(le===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function f(P,X,H,F){let U={},L=X.attributes,V=0,q=H.getAttributes();for(let k in q)if(q[k].location>=0){let $=L[k];$===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let le={};le.attribute=$,$&&$.data&&(le.data=$.data),U[k]=le,V++}r.attributes=U,r.attributesNum=V,r.index=F}function x(){let P=r.newAttributes;for(let X=0,H=P.length;X<H;X++)P[X]=0}function m(P){g(P,0)}function g(P,X){let H=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;H[P]=1,F[P]===0&&(i.enableVertexAttribArray(P),F[P]=1),U[P]!==X&&(i.vertexAttribDivisor(P,X),U[P]=X)}function E(){let P=r.newAttributes,X=r.enabledAttributes;for(let H=0,F=X.length;H<F;H++)X[H]!==P[H]&&(i.disableVertexAttribArray(H),X[H]=0)}function A(P,X,H,F,U,L,V){V===!0?i.vertexAttribIPointer(P,X,H,U,L):i.vertexAttribPointer(P,X,H,F,U,L)}function M(P,X,H,F){x();let U=F.attributes,L=H.getAttributes(),V=X.defaultAttributeValues;for(let q in L){let k=L[q];if(k.location>=0){let Q=U[q];if(Q===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let $=Q.normalized,le=Q.itemSize,te=e.get(Q);if(te===void 0)continue;let O=te.buffer,ee=te.type,ie=te.bytesPerElement,ye=ee===i.INT||ee===i.UNSIGNED_INT||Q.gpuType===Ba;if(Q.isInterleavedBufferAttribute){let re=Q.data,we=re.isInterleavedBuffer===!0?re.stride:re.itemSize,He=Q.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)g(k.location+xe,re.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<k.locationSize;xe++)m(k.location+xe);i.bindBuffer(i.ARRAY_BUFFER,O);for(let xe=0;xe<k.locationSize;xe++)A(k.location+xe,le/k.locationSize,ee,$,we*ie,(He+le/k.locationSize*xe)*ie,ye)}else{if(Q.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)g(k.location+re,Q.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<k.locationSize;re++)m(k.location+re);i.bindBuffer(i.ARRAY_BUFFER,O);for(let re=0;re<k.locationSize;re++)A(k.location+re,le/k.locationSize,ee,$,le*ie,le/k.locationSize*re*ie,ye)}}else if(V!==void 0){let $=V[q];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(k.location,$);break;case 3:i.vertexAttrib3fv(k.location,$);break;case 4:i.vertexAttrib4fv(k.location,$);break;default:i.vertexAttrib1fv(k.location,$)}}}}E()}function R(){B();for(let P in n){let X=n[P];for(let H in X){let F=X[H];for(let U in F){let L=F[U];for(let V in L)d(L[V].object),delete L[V];delete F[U]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let X=n[P.id];for(let H in X){let F=X[H];for(let U in F){let L=F[U];for(let V in L)d(L[V].object),delete L[V];delete F[U]}}delete n[P.id]}function v(P){for(let X in n){let H=n[X];for(let F in H){let U=H[F];if(U[P.id]===void 0)continue;let L=U[P.id];for(let V in L)d(L[V].object),delete L[V];delete U[P.id]}}}function b(P){for(let X in n){let H=n[X],F=P.isInstancedMesh===!0?P.id:0,U=H[F];if(U!==void 0){for(let L in U){let V=U[L];for(let q in V)d(V[q].object),delete V[q];delete U[L]}delete H[F],Object.keys(H).length===0&&delete n[X]}}}function B(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Lg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ng(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==En&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let b=v===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==qt&&v!==dn&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Ue("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:R,samples:S}}function kg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Xt,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let h=p.length!==0||u||n!==0||s;return s=u,n=p.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,h){let f=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,g=i.get(p);if(!s||f===null||f.length===0||r&&!m)r?d(null):l();else{let E=r?0:n,A=E*4,M=g.clippingState||null;c.value=M,M=d(f,u,A,h);for(let R=0;R!==A;++R)M[R]=t[R];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,h,f){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,f!==!0||m===null){let g=h+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,M=h;A!==x;++A,M+=4)a.copy(p[A]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function hd(i,e,t){return new gr(i,{minFilter:qn,generateMipmaps:e,type:Sn,colorSpace:Cs,depthBuffer:t})}function vr(i,e,t){return new Cn({name:i,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Ut,blending:Ei,depthTest:!1,depthWrite:!1})}function Wg(){return vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Dd}u

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
	`)}function qg(){return vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bd}},`

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
	`)}function Qg(){return vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xg}
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
	`)}function fd(){return vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pd(){return vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,h=!1){return u==null?null:h?a(u):r(u)}function r(u){if(u&&u.isTexture){let h=u.mapping;if(h===Va||h===Ia)if(e.has(u)){let f=e.get(u).texture;return o(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let x=new gr(f.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let h=u.mapping,f=h===Va||h===Ia,x=h===Ai||h===rs;if(f||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new cs(i)),m=f?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return f&&E&&E.height>0||x&&E&&c(E)?(n===null&&(n=new cs(i)),m=f?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,h){return h===Va?u.mapping=Ai:h===Ia&&(u.mapping=rs),u}function c(u){let h=0,f=6;for(let x=0;x<f;x++)u[x]!==void 0&&h++;return h===f}function l(u){let h=u.target;h.removeEventListener("dispose",l);let f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function d(u){let h=u.target;h.removeEventListener("dispose",d);let f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Zg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_i("WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function o(f){c(f.target)}function c(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id],a.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function d(f){let x=f.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function p(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let E=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?Ds:Is,M=new A(Math.ceil(E/3)*6,1),R=M.array;if(x!==null){let v=x.array;g=x.version;for(let b=0,B=0;b<E;b+=3){let C=v[b+0],P=v[b+1],X=v[b+2];R[B++]=C,R[B++]=P,R[B++]=P,R[B++]=X,R[B++]=X,R[B++]=C}}else{g=m.version;for(let v=0,b=0;v<E;v+=3){let B=v+0,C=v+1,P=v+2;R[b++]=B,R[b++]=C,R[b++]=C,R[b++]=P,R[b++]=P,R[b++]=B}}M.version=g;let S=r.get(f);S&&e.remove(S),r.set(f,M)}function u(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&p(f)}else p(f);return r.get(f)}function h(){for(let f in s){let x=s[f].deref();x!==void 0&&c(x)}}return{get:l,update:d,getWireframeAttribute:u,dispose:h}}function Yg(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function l(p,u,h){h!==0&&(i.drawElementsInstanced(n,u,r,p*a,h),t.update(u,n,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,h);let x=0;for(let m=0;m<h;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kg(i,e,t){let n=new WeakMap,s=new ct;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==p){let B=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let h=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;h===!0&&(A=1),f===!0&&(A=2),x===!0&&(A=3);let M=o.attributes.position.count*A,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*R*4*p),v=new Vs(S,M,R,p);v.type=dn,v.needsUpdate=!0;let b=A*4;for(let C=0;C<p;C++){let P=m[C],X=g[C],H=E[C],F=M*R*4*C;for(let U=0;U<P.count;U++){let L=U*b;h===!0&&(s.fromBufferAttribute(P,U),S[F+L+0]=s.x,S[F+L+1]=s.y,S[F+L+2]=s.z,S[F+L+3]=0),f===!0&&(s.fromBufferAttribute(X,U),S[F+L+4]=s.x,S[F+L+5]=s.y,S[F+L+6]=s.z,S[F+L+7]=0),x===!0&&(s.fromBufferAttribute(H,U),S[F+L+8]=s.x,S[F+L+9]=s.y,S[F+L+10]=s.z,S[F+L+11]=H.itemSize===4?s.w:1)}}u={count:p,texture:v,size:new Ee(M,R)},n.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let f=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function e0(i,e,t,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,p=l.geometry,u=e.get(l,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}function n0(i,e,t,n,s,r){let a=new Kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,d=new Nt;d.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ht([0,2,0,0,2,0],2));let p=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new st(d,p),h=new er(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,E=null,A=[],M=!1;this.setSize=function(R,S){a.setSize(R,S),o!==null&&o.setSize(R,S),c!==null&&c.setSize(R,S);for(let v=0;v<A.length;v++){let b=A[v];b.setSize&&b.setSize(R,S)}},this.setEffects=function(R){A=R,M=A.length>0&&A[0].isRenderPass===!0;let S=a.width,v=a.height;A.length>0&&o===null&&(o=new Kt(S,v,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(S,v,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&A.some(B=>B.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Hn(S,v),r===!0&&(l.format=Qn,l.type=Ri)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let B=0;B<A.length;B++){let C=A[B];C.setSize&&C.setSize(S,v),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(R,S){if(m||R.toneMapping===Fn&&A.length===0)return!1;if(E=S,S!==null){let v=S.width,b=S.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return M===!1&&R.setRenderTarget(a),g=R.toneMapping,R.toneMapping=Fn,!0},this.hasRenderPass=function(){return M},this.end=function(R,S){R.toneMapping=g,m=!0;let v=a,b=o;for(let B=0;B<A.length;B++){let C=A[B];C.enabled!==!1&&(C.render(R,b,v,S),C.needsSwap!==!1&&(v=b,b=b===o?c:o))}if(f!==R.outputColorSpace||x!==R.toneMapping){f=R.outputColorSpace,x=R.toneMapping,p.defines={},Je.getTransfer(f)===Ke&&(p.defines.SRGB_TRANSFER="");let B=t0[x];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(E),R.render(u,h),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),d.dispose(),p.dispose()}}function us(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function So(i,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function o0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),St(t,n)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),St(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),St(t,n)}}function u0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function p0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Eo(i){return i.version===0&&(i.compareFunction=Xl,i.needsUpdate=!0),i}function x0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Eo(Ld):r=Pd,t.setTexture2D(e||r,s)}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function _0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Eo(Nd):r=Xd,t.setTextureCube(e||r,s)}function b0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kd,s)}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return h0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return b0}}function E0(i,e){i.uniform1fv(this.addr,e)}function M0(i,e){let t=us(e,this.size,2);i.uniform2fv(this.addr,t)}function A0(i,e){let t=us(e,this.size,3);i.uniform3fv(this.addr,t)}function R0(i,e){let t=us(e,this.size,4);i.uniform4fv(this.addr,t)}function T0(i,e){let t=us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w0(i,e){let t=us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){let t=us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function U0(i,e){i.uniform2iv(this.addr,e)}function V0(i,e){i.uniform3iv(this.addr,e)}function I0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function B0(i,e){i.uniform2uiv(this.addr,e)}function P0(i,e){i.uniform3uiv(this.addr,e)}function L0(i,e){i.uniform4uiv(this.addr,e)}function N0(i,e,t){let n=this.cache,s=e.length,r=So(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eo(Ld):a=Pd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function k0(i,e,t){let n=this.cache,s=e.length,r=So(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Od,r[a])}function O0(i,e,t){let n=this.cache,s=e.length,r=So(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Eo(Nd):a=Xd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function X0(i,e,t){let n=this.cache,s=e.length,r=So(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kd,r[a])}function z0(i){switch(i){case 5126:return E0;case 35664:return M0;case 35665:return A0;case 35666:return R0;case 35674:return T0;case 35675:return w0;case 35676:return C0;case 5124:case 35670:return F0;case 35667:case 35671:return U0;case 35668:case 35672:return V0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return B0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return X0}}function _d(i,e){i.seq.push(e),i.map[e.id]=e}function G0(i,e,t){let n=i.name,s=n.length;for(ec.lastIndex=0;;){let r=ec.exec(n),a=ec.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_d(t,l===void 0?new nc(o,i,e):new ic(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new sc(o),_d(t,p)),t=p}}}function bd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Q0(i){Je._getMatrix(Sd,Je.workingColorSpace,i);let e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+q0(i.getShaderSource(e),o)}else return r}function J0(i,e){let t=Q0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function $0(i,e){let t=Z0[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y0(){Je.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function K0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ev(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mr(i){return i!==""}function Md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function rc(i){return i.replace(tv,nv)}function nv(i,e){let t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return rc(t)}function Rd(i){return i.replace(iv,sv)}function sv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function av(i){return rv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function lv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ov[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function uv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cv[i.combine]||"ENVMAP_BLENDING_NONE"}function dv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=av(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=lv(t),p=uv(t),u=j0(t),h=K0(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(mr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(x=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Fn?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,J0("linearToOutputTexel",t.outputColorSpace),Y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=rc(a),a=Md(a,t),a=Ad(a,t),o=rc(o),o=Md(o,t),o=Ad(o,t),a=Rd(a),o=Rd(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=g+x+a,A=g+m+o,M=bd(s,s.VERTEX_SHADER,E),R=bd(s,s.FRAGMENT_SHADER,A);s.attachShader(f,M),s.attachShader(f,R),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function S(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(f)||"",X=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(R)||"",F=P.trim(),U=X.trim(),L=H.trim(),V=!0,q=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,M,R);else{let k=Ed(s,M,"vertex"),Q=Ed(s,R,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+k+`
`+Q)}else F!==""?Ue("WebGLProgram: Program Info Log:",F):(U===""||L==="")&&(q=!1);q&&(C.diagnostics={runnable:V,programLog:F,vertexShader:{log:U,prefix:x},fragmentShader:{log:L,prefix:m}})}s.deleteShader(M),s.deleteShader(R),v=new ls(s,f),b=ev(s,f)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(f,H0)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=R,this}function fv(i){return i===hi||i===dr||i===hr}function pv(i,e,t,n,s,r){let a=new Zi,o=new ac,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,b,B,C,P,X){let H=C.fog,F=P.geometry,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||U,L),q=u[v.type],k=n.precision;v.precision!==null&&(k=n.getMaxPrecision(v.precision),k!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",k,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=Q!==void 0?Q.length:0,le=0;F.morphAttributes.position!==void 0&&(le=1),F.morphAttributes.normal!==void 0&&(le=2),F.morphAttributes.color!==void 0&&(le=3);let te,O,ee,ie;if(q){let _e=Vn[q];te=_e.vertexShader,O=_e.fragmentShader}else{te=v.vertexShader,O=v.fragmentShader;let _e=o.getVertexShaderStage(v),nt=o.getFragmentShaderStage(v);o.update(v,_e,nt),ee=_e.id,ie=nt.id}let ye=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),we=P.isInstancedMesh===!0,He=P.isBatchedMesh===!0,xe=!!v.map,We=!!v.matcap,Oe=!!V,Ge=Oe&&V.isPMREMTexture===!0,vt=!!v.aoMap,pt=!!v.lightMap,Gt=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Mn=!!v.displacementMap,Mt=!!v.emissiveMap,nn=!!v.metalnessMap,sn=!!v.roughnessMap,rn=v.anisotropy>0,N=v.clearcoat>0,an=v.diffuseRoughness>0,ot=v.dispersion>0,lt=v.retroreflectivity>0,ve=v.iridescence>0,xt=v.sheen>0,Ve=v.transmission>0,Pe=rn&&!!v.anisotropyMap,T=N&&!!v.clearcoatMap,y=N&&!!v.clearcoatNormalMap,G=N&&!!v.clearcoatRoughnessMap,ae=an&&!!v.diffuseRoughnessMap,ne=ve&&!!v.iridescenceMap,ue=ve&&!!v.iridescenceThicknessMap,me=xt&&!!v.sheenColorMap,Y=xt&&!!v.sheenRoughnessMap,j=!!v.specularMap,he=!!v.specularColorMap,w=!!v.specularIntensityMap,K=Ve&&!!v.transmissionMap,Z=Ve&&!!v.thicknessMap,fe=!!v.gradientMap,ce=!!v.alphaMap,de=v.alphaTest>0,Ce=!!v.alphaHash,Xe=!!v.extensions,oe=Fn;v.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Fe=Ge?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ne={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:O,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:k,batching:He,batchingColor:He&&P._colorsTexture!==null,instancing:we,instancingColor:we&&P.instanceColor!==null,instancingMorph:we&&P.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:xe,matcap:We,envMap:Oe,envMapMode:Oe&&V.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Fe.length-1:null,envMapSize:Ge?Fe[0].width:null,aoMap:vt,lightMap:pt,bumpMap:Gt,normalMap:ut,displacementMap:Mn,emissiveMap:Mt,normalMapObjectSpace:ut&&v.normalMapType===Qu,normalMapTangentSpace:ut&&v.normalMapType===fr,packedNormalMap:ut&&v.normalMapType===fr&&fv(v.normalMap.format),metalnessMap:nn,roughnessMap:sn,anisotropy:rn,anisotropyMap:Pe,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:y,clearcoatRoughnessMap:G,diffuseRoughness:an,diffuseRoughnessMap:ae,dispersion:ot,retroreflection:lt,iridescence:ve,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:xt,sheenColorMap:me,sheenRoughnessMap:Y,specularMap:j,specularColorMap:he,specularIntensityMap:w,transmission:Ve,transmissionMap:K,thicknessMap:Z,gradientMap:fe,opaque:v.transparent===!1&&v.blending===ss&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ce,combine:v.combine,mapUv:xe&&h(v.map.channel),aoMapUv:vt&&h(v.aoMap.channel),lightMapUv:pt&&h(v.lightMap.channel),bumpMapUv:Gt&&h(v.bumpMap.channel),normalMapUv:ut&&h(v.normalMap.channel),displacementMapUv:Mn&&h(v.displacementMap.channel),emissiveMapUv:Mt&&h(v.emissiveMap.channel),metalnessMapUv:nn&&h(v.metalnessMap.channel),roughnessMapUv:sn&&h(v.roughnessMap.channel),anisotropyMapUv:Pe&&h(v.anisotropyMap.channel),clearcoatMapUv:T&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&h(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&h(v.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&h(v.sheenRoughnessMap.channel),specularMapUv:j&&h(v.specularMap.channel),specularColorMapUv:he&&h(v.specularColorMap.channel),specularIntensityMapUv:w&&h(v.specularIntensityMap.channel),transmissionMapUv:K&&h(v.transmissionMap.channel),thicknessMapUv:Z&&h(v.thicknessMap.channel),alphaMapUv:ce&&h(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ut||rn),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(xe||ce),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:re,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:xe&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===Ke,decodeVideoTextureEmissive:Mt&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wt,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&v.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function x(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)b.push(B),b.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let b=u[v.type],B;if(b){let C=Vn[b];B=ld.clone(C.uniforms)}else B=v.uniforms;return B}function A(v,b){let B=d.get(b);return B!==void 0?++B.usedTimes:(B=new dv(i,b,v,s),l.push(B),d.set(b,B)),B}function M(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function S(){o.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:E,acquireProgram:A,releaseProgram:M,releaseShaderCache:R,programs:l,dispose:S}}function mv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,f,x,m,g){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:h,material:f,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=E):(E.id=u.id,E.object=u,E.geometry=h,E.material=f,E.materialVariant=a(u),E.groupOrder=x,E.renderOrder=u.renderOrder,E.z=m,E.group=g),e++,E}function c(u,h,f,x,m,g,E){E.reversedDepth===!0&&(m=-m);let A=o(u,h,f,x,m,g);f.transmission>0?n.push(A):f.transparent===!0?s.push(A):t.push(A)}function l(u,h,f,x,m,g){let E=o(u,h,f,x,m,g);f.transmission>0?n.unshift(E):f.transparent===!0?s.unshift(E):t.unshift(E)}function d(u,h){t.length>1&&t.sort(u||gv),n.length>1&&n.sort(h||wd),s.length>1&&s.sort(h||wd)}function p(){for(let u=e,h=i.length;u<h;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:d}}function vv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cd,i.set(n,[a])):s>=r.length?(a=new Cd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function bv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sv(i){let e=new xv,t=yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new et,a=new et;function o(l){let d=0,p=0,u=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let h=0,f=0,x=0,m=0,g=0,E=0,A=0,M=0,R=0,S=0,v=0,b=0,B=0,C=0;l.sort(bv);for(let X=0,H=l.length;X<H;X++){let F=l[X],U=F.color,L=F.intensity,V=F.distance,q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===hi?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=U.r*L,p+=U.g*L,u+=U.b*L;else if(F.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(F.sh.coefficients[k],L);C++}else if(F.isSunLight){let k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let Q=F.shadow,$=t.get(F);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[f]=$,n.sunShadowMap[f]=q;let le=Q.getViewportCount();for(let te=0;te<le;te++)n.sunShadowMatrix[x+te]=Q.getMatrix(te),n.sunShadowCascade[x+te]=Q._cascadeData[te];x+=le,f++}n.sun[h]=k,h++}else if(F.isDirectionalLight){let k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let Q=F.shadow,$=t.get(F);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=F.shadow.matrix,R++}n.directional[m]=k,m++}else if(F.isSpotLight){let k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=V,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,n.spot[E]=k;let Q=F.shadow;if(F.map&&(n.spotLightMap[b]=F.map,b++,Q.updateMatrices(F),F.castShadow&&B++),n.spotLightMatrix[E]=Q.matrix,F.castShadow){let $=t.get(F);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[E]=$,n.spotShadowMap[E]=q,v++}E++}else if(F.isRectAreaLight){let k=e.get(F);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=k,A++}else if(F.isPointLight){let k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){let Q=F.shadow,$=t.get(F);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=k,g++}else if(F.isHemisphereLight){let k=e.get(F);k.skyColor.copy(F.color).multiplyScalar(L),k.groundColor.copy(F.groundColor).multiplyScalar(L),n.hemi[M]=k,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let P=n.hash;(P.sunLength!==h||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==E||P.rectAreaLength!==A||P.hemiLength!==M||P.numSunShadows!==f||P.numDirectionalShadows!==R||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=g,n.hemi.length=M,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-B,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=C,P.sunLength=h,P.directionalLength=m,P.pointLength=g,P.spotLength=E,P.rectAreaLength=A,P.hemiLength=M,P.numSunShadows=f,P.numDirectionalShadows=R,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=C,n.version=_v++)}function c(l,d){let p=0,u=0,h=0,f=0,x=0,m=0,g=d.matrixWorldInverse;for(let E=0,A=l.length;E<A;E++){let M=l[E];if(M.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(g),p++}else if(M.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),u++}else if(M.isSpotLight){let R=n.spot[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let R=n.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let R=n.point[h];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function Fd(i){let e=new Sv(i),t=[],n=[],s=[];function r(p){d.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function c(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function l(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ev(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Fd(i),e.set(s,[o])):r>=a.length?(o=new Fd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function wv(i,e,t){let n=new si,s=new Ee,r=new Ee,a=new ct,o=new xa,c=new ya,l={},d=t.maxTextureSize,p={[_n]:Ut,[Ut]:_n,[Wt]:Wt},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Mv,fragmentShader:Av}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let f=new Nt;f.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new st(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let g=this.type;this.render=function(S,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Mu&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let B=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ei),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let H=g!==this.type;H&&v.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(U=>U.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,U=S.length;F<U;F++){let L=S[F],V=L.shadow;if(V===void 0){Ue("WebGLShadowMap:",L,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let q=V.getFrameExtents();s.multiply(q),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,V.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===is){if(L.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Kt(s.x,s.y,{format:hi,type:Sn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=L.name+".shadowMap",V.map.depthTexture=new Hn(s.x,s.y,dn),V.map.depthTexture.name=L.name+".shadowMapDepth",V.map.depthTexture.format=Xn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt}else L.isPointLight?(V.map=new gr(s.x),V.map.depthTexture=new Xs(s.x,bn)):(V.map=new Kt(s.x,s.y),V.map.depthTexture=new Hn(s.x,s.y,bn)),V.map.depthTexture.name=L.name+".shadowMap",V.map.depthTexture.format=Xn,this.type===sr?(V.map.depthTexture.compareFunction=k?Ol:kl,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();L.isPointLight!==!0&&V.updateMatrices(L,b);let $=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let le=0;le<Q;le++){let te=V.getCamera(le);if(L.isPointLight){let O=V.camera,ee=V.matrix,ie=L.distance||O.far;ie!==O.far&&(O.far=ie,O.updateProjectionMatrix()),pr.setFromMatrixPosition(L.matrixWorld),O.position.copy(pr),tc.copy(O.position),tc.add(Rv[le]),O.up.copy(Tv[le]),O.lookAt(tc),O.updateMatrixWorld(),ee.makeTranslation(-pr.x,-pr.y,-pr.z),Ud.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ud,O.coordinateSystem,O.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,le),i.clear();else{le===0&&(i.setRenderTarget(V.map),i.clear());let O=V.getViewport(le);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),X.viewport(a)}n=V.getFrustum(le),M(v,b,te,L,$,this.type)}V.isPointLightShadow!==!0&&this.type===is&&E(V,b),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(B,C,P)};function E(S,v){let b=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null?S.mapPass=new Kt(s.x,s.y,{format:hi,type:Sn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(v,null,b,u,x,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(v,null,b,h,x,null)}function A(S,v,b,B){let C=null,P=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=b.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let X=C.uuid,H=v.uuid,F=l[X];F===void 0&&(F={},l[X]=F);let U=F[H];U===void 0&&(U=C.clone(),F[H]=U,v.addEventListener("dispose",R)),C=U}if(C.visible=v.visible,C.wireframe=v.wireframe,B===is?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:p[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=i.properties.get(C);X.light=b}return C}function M(S,v,b,B,C,P){if(S.visible===!1)return;if(S.layers.test(C)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===is)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let F=e.update(S),U=S.material;if(Array.isArray(U)){let L=F.groups;for(let V=0,q=L.length;V<q;V++){let k=L[V],Q=U[k.materialIndex];if(Q&&Q.visible){let $=A(S,Q,B,P);S.onBeforeShadow(i,S,v,b,F,$,k),i.renderBufferDirect(b,null,F,$,S,k),S.onAfterShadow(i,S,v,b,F,$,k)}}}else if(U.visible){let L=A(S,U,B,P);S.onBeforeShadow(i,S,v,b,F,L,null),i.renderBufferDirect(b,null,F,L,S,null),S.onAfterShadow(i,S,v,b,F,L,null)}}let H=S.children;for(let F=0,U=H.length;F<U;F++)M(H[F],v,b,B,C,P)}function R(S){S.target.removeEventListener("dispose",R);for(let b in l){let B=l[b],C=S.target.uuid;C in B&&(B[C].dispose(),delete B[C])}}}function Cv(i,e){function t(){let w=!1,K=new ct,Z=null,fe=new ct(0,0,0,0);return{setMask:function(ce){Z!==ce&&!w&&(i.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){w=ce},setClear:function(ce,de,Ce,Xe,oe){oe===!0&&(ce*=Xe,de*=Xe,Ce*=Xe),K.set(ce,de,Ce,Xe),fe.equals(K)===!1&&(i.clearColor(ce,de,Ce,Xe),fe.copy(K))},reset:function(){w=!1,Z=null,fe.set(-1,0,0,0)}}}function n(){let w=!1,K=!1,Z=null,fe=null,ce=null;return{setReversed:function(de){if(K!==de){let Ce=e.get("EXT_clip_control");de?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),K=de;let Xe=ce;ce=null,this.setClear(Xe)}},getReversed:function(){return K},setTest:function(de){de?re(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(de){Z!==de&&!w&&(i.depthMask(de),Z=de)},setFunc:function(de){if(K&&(de=sd[de]),fe!==de){switch(de){case Jr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Yr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=de}},setLocked:function(de){w=de},setClear:function(de){ce!==de&&(ce=de,K&&(de=1-de),i.clearDepth(de))},reset:function(){w=!1,Z=null,fe=null,ce=null,K=!1}}}function s(){let w=!1,K=null,Z=null,fe=null,ce=null,de=null,Ce=null,Xe=null,oe=null;return{setTest:function(Fe){w||(Fe?re(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Fe){K!==Fe&&!w&&(i.stencilMask(Fe),K=Fe)},setFunc:function(Fe,Ne,_e){(Z!==Fe||fe!==Ne||ce!==_e)&&(i.stencilFunc(Fe,Ne,_e),Z=Fe,fe=Ne,ce=_e)},setOp:function(Fe,Ne,_e){(de!==Fe||Ce!==Ne||Xe!==_e)&&(i.stencilOp(Fe,Ne,_e),de=Fe,Ce=Ne,Xe=_e)},setLocked:function(Fe){w=Fe},setClear:function(Fe){oe!==Fe&&(i.clearStencil(Fe),oe=Fe)},reset:function(){w=!1,K=null,Z=null,fe=null,ce=null,de=null,Ce=null,Xe=null,oe=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,d={},p={},u={},h=new WeakMap,f=[],x=null,m=!1,g=null,E=null,A=null,M=null,R=null,S=null,v=null,b=new Ie(0,0,0),B=0,C=!1,P=null,X=null,H=null,F=null,U=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=q>=2);let Q=null,$={},le=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),O=new ct().fromArray(le),ee=new ct().fromArray(te);function ie(w,K,Z,fe){let ce=new Uint8Array(4),de=i.createTexture();i.bindTexture(w,de),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<Z;Ce++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(K+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return de}let ye={};ye[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Hi),Gt(!1),ut(_l),re(i.CULL_FACE),vt(Ei);function re(w){d[w]!==!0&&(i.enable(w),d[w]=!0)}function we(w){d[w]!==!1&&(i.disable(w),d[w]=!1)}function He(w,K){return u[w]!==K?(i.bindFramebuffer(w,K),u[w]=K,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function xe(w,K){let Z=f,fe=!1;if(w){Z=h.get(K),Z===void 0&&(Z=[],h.set(K,Z));let ce=w.textures;if(Z.length!==ce.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ce=ce.length;de<Ce;de++)Z[de]=i.COLOR_ATTACHMENT0+de;Z.length=ce.length,fe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Z)}function We(w){return x!==w?(i.useProgram(w),x=w,!0):!1}let Oe={[Mi]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Oe[wu]=i.MIN,Oe[Cu]=i.MAX;let Ge={[Fu]:i.ZERO,[Uu]:i.ONE,[Vu]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(w,K,Z,fe,ce,de,Ce,Xe,oe,Fe){if(w===Ei){m===!0&&(we(i.BLEND),m=!1);return}if(m===!1&&(re(i.BLEND),m=!0),w!==Au){if(w!==g||Fe!==C){if((E!==Mi||R!==Mi)&&(i.blendEquation(i.FUNC_ADD),E=Mi,R=Mi),Fe)switch(w){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case El:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:De("WebGLState: Invalid blending: ",w);break}else switch(w){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case El:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",w);break}A=null,M=null,S=null,v=null,b.set(0,0,0),B=0,g=w,C=Fe}return}ce=ce||K,de=de||Z,Ce=Ce||fe,(K!==E||ce!==R)&&(i.blendEquationSeparate(Oe[K],Oe[ce]),E=K,R=ce),(Z!==A||fe!==M||de!==S||Ce!==v)&&(i.blendFuncSeparate(Ge[Z],Ge[fe],Ge[de],Ge[Ce]),A=Z,M=fe,S=de,v=Ce),(Xe.equals(b)===!1||oe!==B)&&(i.blendColor(Xe.r,Xe.g,Xe.b,oe),b.copy(Xe),B=oe),g=w,C=!1}function pt(w,K){w.side===Wt?we(i.CULL_FACE):re(i.CULL_FACE);let Z=w.side===Ut;K&&(Z=!Z),Gt(Z),w.blending===ss&&w.transparent===!1?vt(Ei):vt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);let fe=w.stencilWrite;o.setTest(fe),fe&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Mt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(w){P!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),P=w)}function ut(w){w!==Su?(re(i.CULL_FACE),w!==X&&(w===_l?i.cullFace(i.BACK):w===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),X=w}function Mn(w){w!==H&&(V&&i.lineWidth(w),H=w)}function Mt(w,K,Z){w?(re(i.POLYGON_OFFSET_FILL),(F!==K||U!==Z)&&(F=K,U=Z,a.getReversed()&&(K=-K,Z=-Z),i.polygonOffset(K,Z))):we(i.POLYGON_OFFSET_FILL)}function nn(w){w?re(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function sn(w){w===void 0&&(w=i.TEXTURE0+L-1),Q!==w&&(i.activeTexture(w),Q=w)}function rn(w,K,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+L-1:Z=Q);let fe=$[Z];fe===void 0&&(fe={type:void 0,texture:void 0},$[Z]=fe),(fe.type!==w||fe.texture!==K)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(w,K||ye[w]),fe.type=w,fe.texture=K)}function N(){let w=$[Q];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function an(){try{i.compressedTexImage2D(...arguments)}catch(w){De("WebGLState:",w)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(w){De("WebGLState:",w)}}function lt(){try{i.texSubImage2D(...arguments)}catch(w){De("WebGLState:",w)}}function ve(){try{i.texSubImage3D(...arguments)}catch(w){De("WebGLState:",w)}}function xt(){try{i.compressedTexSubImage2D(...arguments)}catch(w){De("WebGLState:",w)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(w){De("WebGLState:",w)}}function Pe(){try{i.texStorage2D(...arguments)}catch(w){De("WebGLState:",w)}}function T(){try{i.texStorage3D(...arguments)}catch(w){De("WebGLState:",w)}}function y(){try{i.texImage2D(...arguments)}catch(w){De("WebGLState:",w)}}function G(){try{i.texImage3D(...arguments)}catch(w){De("WebGLState:",w)}}function ae(w){return p[w]!==void 0?p[w]:i.getParameter(w)}function ne(w,K){p[w]!==K&&(i.pixelStorei(w,K),p[w]=K)}function ue(w){O.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),O.copy(w))}function me(w){ee.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),ee.copy(w))}function Y(w,K){let Z=l.get(K);Z===void 0&&(Z=new WeakMap,l.set(K,Z));let fe=Z.get(w);fe===void 0&&(fe=i.getUniformBlockIndex(K,w.name),i.uniformBlockBinding(K,fe,fe),Z.set(w,fe))}function j(w,K,Z){let ce=l.get(K).get(w);c[ce]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,Z),c[ce]=Z)}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},Q=null,$={},u={},c={},h=new WeakMap,f=[],x=null,m=!1,g=null,E=null,A=null,M=null,R=null,S=null,v=null,b=new Ie(0,0,0),B=0,C=!1,P=null,X=null,H=null,F=null,U=null,O.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:we,bindFramebuffer:He,drawBuffers:xe,useProgram:We,setBlending:vt,setMaterial:pt,setFlipSided:Gt,setCullFace:ut,setLineWidth:Mn,setPolygonOffset:Mt,setScissorTest:nn,activeTexture:sn,bindTexture:rn,unbindTexture:N,compressedTexImage2D:an,compressedTexImage3D:ot,texImage2D:y,texImage3D:G,pixelStorei:ne,getParameter:ae,updateUBOMapping:Y,uniformBlockBinding:j,texStorage2D:Pe,texStorage3D:T,texSubImage2D:lt,texSubImage3D:ve,compressedTexSubImage2D:xt,compressedTexSubImage3D:Ve,scissor:ue,viewport:me,reset:he}}function Fv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,d=new WeakMap,p=new Set,u,h=new WeakMap,f=new Set,x=new FinalizationRegistry(T=>f.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return m?new OffscreenCanvas(T,y):Us("canvas")}function E(T,y,G){let ae=1,ne=Pe(T);if((ne.width>G||ne.height>G)&&(ae=G/Math.max(ne.width,ne.height)),ae<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ue=Math.floor(ae*ne.width),me=Math.floor(ae*ne.height);u===void 0&&(u=g(ue,me));let Y=y?g(ue,me):u;return Y.width=ue,Y.height=me,Y.getContext("2d").drawImage(T,0,0,ue,me),Ue("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+me+")."),Y}else return"data"in T&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function A(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,y,G,ae,ne,ue=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let me;ae&&(me=e.get("EXT_texture_norm16"),me||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8),G===i.UNSIGNED_SHORT&&me&&(Y=me.R16_EXT),G===i.SHORT&&me&&(Y=me.R16_SNORM_EXT)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),y===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8),G===i.UNSIGNED_SHORT&&me&&(Y=me.RG16_EXT),G===i.SHORT&&me&&(Y=me.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(Y=me.RGB16_EXT),G===i.SHORT&&me&&(Y=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){let j=ue?Fs:Je.getTransfer(ne);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=j===Ke?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(Y=me.RGBA16_EXT),G===i.SHORT&&me&&(Y=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,y){let G;return T?y===null||y===bn||y===Ri?G=i.DEPTH24_STENCIL8:y===dn?G=i.DEPTH32F_STENCIL8:y===as&&(G=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===bn||y===Ri?G=i.DEPTH_COMPONENT24:y===dn?G=i.DEPTH_COMPONENT32F:y===as&&(G=i.DEPTH_COMPONENT16),G}function b(T,y){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==wt&&T.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function B(T){let y=new WeakRef(T);n.get(T).__ref=y,f.add(y),x.register(T,y,y)}function C(T){let y=n.get(T).__ref;y!==void 0&&(f.delete(y),x.unregister(y))}function P(T){H(T.target)}function X(T){F(T.target)}function H(T){T.removeEventListener("dispose",P),C(T),L(T),T.isVideoTexture&&d.delete(T),T.isHTMLTexture&&p.delete(T)}function F(T){T.removeEventListener("dispose",X),C(T),q(T)}function U(){for(let T of f){let y=T.deref();y!==void 0&&(y.isRenderTarget===!0?F(y):H(y))}f.clear(),p.clear()}function L(T){let y=n.get(T);if(y.__webglInit===void 0)return;let G=T.source,ae=h.get(G);if(ae){let ne=ae[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&V(T),Object.keys(ae).length===0&&h.delete(G)}n.remove(T)}function V(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let G=T.source,ae=h.get(G);delete ae[y.__cacheKey],a.memory.textures--}function q(T){let y=n.get(T);y.__depthDisposeCallback&&y.__depthDisposeCallback();let G=T.depthTexture;if(G&&G.renderTarget===T&&H(G),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(y.__webglFramebuffer[ne]))for(let ue=0;ue<y.__webglFramebuffer[ne].length;ue++)i.deleteFramebuffer(y.__webglFramebuffer[ne][ue]);else i.deleteFramebuffer(y.__webglFramebuffer[ne]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ne])}else{if(Array.isArray(y.__webglFramebuffer))for(let ne=0;ne<y.__webglFramebuffer.length;ne++)i.deleteFramebuffer(y.__webglFramebuffer[ne]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ne=0;ne<y.__webglColorRenderbuffer.length;ne++)y.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ne]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ae=T.textures;for(let ne=0,ue=ae.length;ne<ue;ne++){let me=n.get(ae[ne]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(ae[ne])}n.remove(T)}let k=0;function Q(){k=0}function $(){return k}function le(T){k=T}function te(){let T=k;return T>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,T}function O(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.mipmapsAutoUpdate),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function ee(T,y){let G=n.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){let ae=T.image;if(ae===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,T,y);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function ie(T,y){let G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){pt(G,T,y);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function ye(T,y){let G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){pt(G,T,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function re(T,y){let G=n.get(T);if(T.version>0&&G.__version!==T.version){Gt(G,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}let we={[ta]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},He={[wt]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},xe={[Zu]:i.NEVER,[Xl]:i.ALWAYS,[$u]:i.LESS,[kl]:i.LEQUAL,[Yu]:i.EQUAL,[Ol]:i.GEQUAL,[ju]:i.GREATER,[Ku]:i.NOTEQUAL};function We(T,y){if(y.type===dn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ct||y.magFilter===Da||y.magFilter===ar||y.magFilter===qn||y.minFilter===Ct||y.minFilter===Da||y.minFilter===ar||y.minFilter===qn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,we[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,we[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,we[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,He[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,He[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wt||y.minFilter!==ar&&y.minFilter!==qn||y.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",P),B(y));let ae=y.source,ne=h.get(ae);ne===void 0&&(ne={},h.set(ae,ne));let ue=O(y);if(ue!==T.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[ue].usedTimes++;let me=ne[T.__cacheKey];me!==void 0&&(ne[T.__cacheKey].usedTimes--,me.usedTimes===0&&V(y)),T.__cacheKey=ue,T.__webglTexture=ne[ue].texture}return G}function Ge(T,y,G){return Math.floor(Math.floor(T/G)/y)}function vt(T,y,G,ae){let ue=T.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,G,ae,y.data);else{ue.sort((w,K)=>w.start-K.start);let me=0;for(let w=1;w<ue.length;w++){let K=ue[me],Z=ue[w],fe=K.start+K.count,ce=Ge(Z.start,y.width,4),de=Ge(K.start,y.width,4);Z.start<=fe+1&&ce===de&&Ge(Z.start+Z.count-1,y.width,4)===ce?K.count=Math.max(K.count,Z.start+Z.count-K.start):(++me,ue[me]=Z)}ue.length=me+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let w=0,K=ue.length;w<K;w++){let Z=ue[w],fe=Math.floor(Z.start/4),ce=Math.ceil(Z.count/4),de=fe%y.width,Ce=Math.floor(fe/y.width),Xe=ce,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(i.TEXTURE_2D,0,de,Ce,Xe,oe,G,ae,y.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function pt(T,y,G){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);let ne=Oe(T,y),ue=y.source;t.bindTexture(ae,T.__webglTexture,i.TEXTURE0+G);let me=n.get(ue);if(ue.version!==me.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let oe=Je.getPrimaries(Je.workingColorSpace),Fe=y.colorSpace===Jn?null:Je.getPrimaries(y.colorSpace),Ne=y.colorSpace===Jn||oe===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let j=E(y.image,!1,s.maxTextureSize);j=Ve(y,j);let he=r.convert(y.format,y.colorSpace),w=r.convert(y.type),K=S(y.internalFormat,he,w,y.normalized,y.colorSpace,y.isVideoTexture);We(ae,y);let Z,fe=y.mipmaps,ce=y.isVideoTexture!==!0,de=me.__version===void 0||ne===!0,Ce=ue.dataReady,Xe=b(y,j);if(y.isDepthTexture)K=v(y.format===Qn,y.type),de&&(ce?t.texStorage2D(i.TEXTURE_2D,1,K,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,K,j.width,j.height,0,he,w,null));else if(y.isDataTexture)if(fe.length>0){ce&&de&&t.texStorage2D(i.TEXTURE_2D,Xe,K,fe[0].width,fe[0].height);for(let oe=0,Fe=fe.length;oe<Fe;oe++)Z=fe[oe],ce?Ce&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Z.width,Z.height,he,w,Z.data):t.texImage2D(i.TEXTURE_2D,oe,K,Z.width,Z.height,0,he,w,Z.data);y.generateMipmaps=!1}else ce?(de&&t.texStorage2D(i.TEXTURE_2D,Xe,K,j.width,j.height),Ce&&vt(y,j,he,w)):t.texImage2D(i.TEXTURE_2D,0,K,j.width,j.height,0,he,w,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ce&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,K,fe[0].width,fe[0].height,j.depth);for(let oe=0,Fe=fe.length;oe<Fe;oe++)if(Z=fe[oe],y.format!==En)if(he!==null)if(ce){if(Ce)if(y.layerUpdates.size>0){let Ne=jl(Z.width,Z.height,y.format,y.type);for(let _e of y.layerUpdates){let nt=Z.data.subarray(_e*Ne/Z.data.BYTES_PER_ELEMENT,(_e+1)*Ne/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,_e,Z.width,Z.height,1,he,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,j.depth,he,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,K,Z.width,Z.height,j.depth,0,Z.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,j.depth,he,w,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,K,Z.width,Z.height,j.depth,0,he,w,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ce&&de&&t.texStorage2D(i.TEXTURE_2D,Xe,K,fe[0].width,fe[0].height);for(let oe=0,Fe=fe.length;oe<Fe;oe++)Z=fe[oe],y.format!==En?he!==null?ce?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Z.width,Z.height,he,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,K,Z.width,Z.height,0,Z.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ce&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Z.width,Z.height,he,w,Z.data):t.texImage2D(i.TEXTURE_2D,oe,K,Z.width,Z.height,0,he,w,Z.data)}else if(y.isDataArrayTexture)if(ce){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,K,j.width,j.height,j.depth),Ce)if(y.layerUpdates.size>0){let oe=jl(j.width,j.height,y.format,y.type);for(let Fe of y.layerUpdates){let Ne=j.data.subarray(Fe*oe/j.data.BYTES_PER_ELEMENT,(Fe+1)*oe/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,j.width,j.height,1,he,w,Ne)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,he,w,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,j.width,j.height,j.depth,0,he,w,j.data);else if(y.isData3DTexture)ce?(de&&t.texStorage3D(i.TEXTURE_3D,Xe,K,j.width,j.height,j.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,he,w,j.data)):t.texImage3D(i.TEXTURE_3D,0,K,j.width,j.height,j.depth,0,he,w,j.data);else if(y.isFramebufferTexture){if(de)if(ce)t.texStorage2D(i.TEXTURE_2D,Xe,K,j.width,j.height);else{let oe=j.width,Fe=j.height;for(let Ne=0;Ne<Xe;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,K,oe,Fe,0,he,w,null),oe>>=1,Fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),j.parentNode!==oe){oe.appendChild(j),p.add(y),oe.onpaint=Fe=>{let Ne=Fe.changedElements;for(let _e of p)Ne.includes(_e.image)&&(_e.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Ne=i.RGBA,_e=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,_e,nt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ce&&de){let oe=Pe(fe[0]);t.texStorage2D(i.TEXTURE_2D,Xe,K,oe.width,oe.height)}for(let oe=0,Fe=fe.length;oe<Fe;oe++)Z=fe[oe],ce?Ce&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,he,w,Z):t.texImage2D(i.TEXTURE_2D,oe,K,he,w,Z);y.generateMipmaps=!1}else if(ce){if(de){let oe=Pe(j);t.texStorage2D(i.TEXTURE_2D,Xe,K,oe.width,oe.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,w,j)}else t.texImage2D(i.TEXTURE_2D,0,K,he,w,j);A(y)&&y.mipmapsAutoUpdate===!0&&M(ae),me.__version=ue.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Gt(T,y,G){if(y.image.length!==6)return;let ae=Oe(T,y),ne=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);let ue=n.get(ne);if(ne.version!==ue.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);let me=Je.getPrimaries(Je.workingColorSpace),Y=y.colorSpace===Jn?null:Je.getPrimaries(y.colorSpace),j=y.colorSpace===Jn||me===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let he=y.isCompressedTexture||y.image[0].isCompressedTexture,w=y.image[0]&&y.image[0].isDataTexture,K=[];for(let _e=0;_e<6;_e++)!he&&!w?K[_e]=E(y.image[_e],!0,s.maxCubemapSize):K[_e]=w?y.image[_e].image:y.image[_e],K[_e]=Ve(y,K[_e]);let Z=K[0],fe=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),de=S(y.internalFormat,fe,ce,y.normalized,y.colorSpace),Ce=y.isVideoTexture!==!0,Xe=ue.__version===void 0||ae===!0,oe=ne.dataReady,Fe=b(y,Z);We(i.TEXTURE_CUBE_MAP,y);let Ne;if(y.isDepthTexture){if(de=v(y.format===Qn,y.type),Xe)if(Ce)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,Z.width,Z.height,0,fe,ce,null)}else if(he){Ce&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,Z.width,Z.height);for(let _e=0;_e<6;_e++){Ne=K[_e].mipmaps;for(let nt=0;nt<Ne.length;nt++){let At=Ne[nt];y.format!==En?fe!==null?Ce?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,At.width,At.height,fe,At.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,de,At.width,At.height,0,At.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,At.width,At.height,fe,ce,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,de,At.width,At.height,0,fe,ce,At.data)}}}else{if(Ne=y.mipmaps,Ce&&Xe){Ne.length>0&&Fe++;let _e=Pe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(w){Ce?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,K[_e].width,K[_e].height,fe,ce,K[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,K[_e].width,K[_e].height,0,fe,ce,K[_e].data);for(let nt=0;nt<Ne.length;nt++){let Zn=Ne[nt].image[_e].image;Ce?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,Zn.width,Zn.height,fe,ce,Zn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,de,Zn.width,Zn.height,0,fe,ce,Zn.data)}}else{Ce?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe,ce,K[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,fe,ce,K[_e]);for(let nt=0;nt<Ne.length;nt++){let At=Ne[nt];Ce?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,fe,ce,At.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,de,fe,ce,At.image[_e])}}}A(y)&&y.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ue.__version=ne.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ut(T,y,G,ae,ne,ue){let me=r.convert(G.format,G.colorSpace),Y=r.convert(G.type),j=S(G.internalFormat,me,Y,G.normalized,G.colorSpace),he=n.get(y),w=n.get(G);if(w.__renderTarget=y,!he.__hasExternalTextures){let K=Math.max(1,y.width>>ue),Z=Math.max(1,y.height>>ue);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ue,j,K,Z,y.depth,0,me,Y,null):t.texImage2D(ne,ue,j,K,Z,0,me,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ne,w.__webglTexture,0,lt(y)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ne,w.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mn(T,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let ae=y.depthTexture,ne=ae&&ae.isDepthTexture?ae.type:null,ue=v(y.stencilBuffer,ne),me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(y),ue,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(y),ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,T)}else{let ae=y.textures;for(let ne=0;ne<ae.length;ne++){let ue=ae[ne],me=r.convert(ue.format,ue.colorSpace),Y=r.convert(ue.type),j=S(ue.internalFormat,me,Y,ue.normalized,ue.colorSpace);ve(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(y),j,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(T,y,G){let ae=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);ne.__renderTarget=y;let ue=ae?y.depthTexture.image[0]:y.depthTexture.image;(!ne.__webglTexture||ue.width!==y.width||ue.height!==y.height)&&(ue.width=y.width,ue.height=y.height,y.depthTexture.needsUpdate=!0),ae?re(y.depthTexture,0):ee(y.depthTexture,0);let me=ne.__webglTexture,Y=lt(y),j=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,he=y.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xn)ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,j,me,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,j,me,0);else if(y.depthTexture.format===Qn)ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,j,me,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,he,j,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nn(T){let y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let ae=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",ne)};ae.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=ae}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)Mt(y.__webglFramebuffer[ae],T,ae);else T.texture.mipmaps.length>0?Mt(y.__webglFramebuffer[0],T,0):Mt(y.__webglFramebuffer,T,0);else if(G){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=i.createRenderbuffer(),Mn(y.__webglDepthbuffer[ae],T,!1);else{let ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ue)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Mn(y.__webglDepthbuffer,T,!1);else{let ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(T,y,G){let ae=n.get(T);y!==void 0&&ut(ae.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&nn(T)}function rn(T){let y=T.texture,G=n.get(T),ae=n.get(y);T.addEventListener("dispose",X),B(T);let ne=T.textures,ue=T.isWebGLCubeRenderTarget===!0,me=ne.length>1;if(me||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let j=0;j<y.mipmaps.length;j++)G.__webglFramebuffer[Y][j]=i.createFramebuffer()}else G.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)G.__webglFramebuffer[Y]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let Y=0,j=ne.length;Y<j;Y++){let he=n.get(ne[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ve(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){let j=ne[Y];G.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);let he=r.convert(j.format,j.colorSpace),w=r.convert(j.type),K=S(j.internalFormat,he,w,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),Z=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,K,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Mn(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),We(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ut(G.__webglFramebuffer[Y][j],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else ut(G.__webglFramebuffer[Y],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(y)?M(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(me){for(let Y=0,j=ne.length;Y<j;Y++){let he=ne[Y],w=n.get(he),K=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,w.__webglTexture),We(K,he),ut(G.__webglFramebuffer,T,he,i.COLOR_ATTACHMENT0+Y,K,0),A(he)&&M(K)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ae.__webglTexture),We(Y,y),y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ut(G.__webglFramebuffer[j],T,y,i.COLOR_ATTACHMENT0,Y,j);else ut(G.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,Y,0);A(y)?M(Y):y.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&nn(T)}function N(T){let y=T.textures;for(let G=0,ae=y.length;G<ae;G++){let ne=y[G];if(A(ne)&&ne.mipmapsAutoUpdate===!0){let ue=R(T),me=n.get(ne).__webglTexture;t.bindTexture(ue,me),M(ue),t.unbindTexture()}}}let an=[];function ot(T){if(T.samples>0){if(ve(T)===!1){let y=T.textures,G=T.width,ae=T.height,ne=i.COLOR_BUFFER_BIT,ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(T),Y=y.length>1;if(Y)for(let he=0;he<y.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let he=0;he<y.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let w=n.get(y[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,w,0)}i.blitFramebuffer(0,0,G,ae,0,0,G,ae,ne,i.NEAREST),c===!0&&(an.length=0,an.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&an.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<y.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let w=n.get(y[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,w,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function ve(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(T){let y=a.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function Ve(T,y){let G=T.colorSpace,ae=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Cs&&G!==Jn&&(Je.getTransfer(G)===Ke?(ae!==En||ne!==qt)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",G)),y}function Pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=Q,this.getTextureUnits=$,this.setTextureUnits=le,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=ye,this.setTextureCube=re,this.rebindTextures=sn,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=nn,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ve,this.dispose=U}function Uv(i,e){function t(n,s=Jn){let r,a=Je.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Dl)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Nl)return i.RGB;if(n===En)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===Na)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===ur)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ga||n===Ha||n===Wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Qa||n===Ja||n===Za||n===$a||n===dr||n===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Qa)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return r.COMPRESSED_R11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return r.COMPRESSED_RG11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ja||n===Ka||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo||n===ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===vo||n===hr||n===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Bv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Zl(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,E,A,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),p(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&h(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,E,A):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ut&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ut&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let E=e.get(g),A=E.envMap,M=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,E,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,E){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ut&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let E=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pv(i,e,t,n){let s={},r={};function a(E,A){let M=A.program;n.uniformBlockBinding(E,M,s[E.id])}function o(E,A){let M=s[E.id];M===void 0&&(f(E),M=c(E),s[E.id]=M,E.addEventListener("dispose",m));let R=A.program;n.updateUBOMapping(E,R);let S=e.render.frame;r[E.id]!==S&&(l(E),r[E.id]=S)}function c(E){let A=i.createBuffer(),M=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(E){let A=s[E.id],M=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let S=0,v=M.length;S<v;S++){let b=M[S];if(Array.isArray(b))for(let B=0,C=b.length;B<C;B++)d(b[B],S,B,R);else d(b,S,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,A,M,R){if(u(E,A,M,R)===!0){let S=E.__offset,v=E.value;if(Array.isArray(v)){let b=0;for(let B=0;B<v.length;B++){let C=v[B],P=x(C,!0);p(C,E.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,E.__data)}}function p(E,A,M){typeof E=="number"||typeof E=="boolean"?A[M]=E:E.isMatrix3?(A[M]=E.elements[0],A[M+1]=E.elements[1],A[M+2]=E.elements[2],A[M+3]=0,A[M+4]=E.elements[3],A[M+5]=E.elements[4],A[M+6]=E.elements[5],A[M+7]=0,A[M+8]=E.elements[6],A[M+9]=E.elements[7],A[M+10]=E.elements[8],A[M+11]=0):ArrayBuffer.isView(E)?A.set(E.subarray(0,A.length-M),M):E.toArray(A,M)}function u(E,A,M,R){let S=E.value,v=A+"_"+M;if(Array.isArray(S)){R[v]===void 0&&(R[v]=[]);let b=R[v],B=!1;for(let C=0;C<S.length;C++)h(S[C],b,C)===!0&&(B=!0);return B}return h(S,R,v)}function h(E,A,M){if(A[M]===void 0)return typeof E=="number"||typeof E=="boolean"?A[M]=E:ArrayBuffer.isView(E)?A[M]=E.slice():A[M]=E.clone(),!0;{let R=A[M];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return A[M]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(R.equals(E)===!1)return R.copy(E),!0}}return!1}function f(E){let A=E.uniforms,M=0,R=16;for(let v=0,b=A.length;v<b;v++){let B=Array.isArray(A[v])?A[v]:[A[v]];for(let C=0,P=B.length;C<P;C++){let X=B[C],H=Array.isArray(X.value)?X.value:[X.value],F=Array.isArray(A[v])||Array.isArray(X.value),U=M;for(let V=0,q=H.length;V<q;V++){let k=H[V],Q=x(k,F),$=M%R,le=$%Q.boundary,te=$+le;M+=le,te!==0&&R-te<Q.storage&&(M+=R-te),V===0&&(U=M),M+=Q.storage}let L=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new L((M-U)/Float32Array.BYTES_PER_ELEMENT),X.__offset=U}}let S=M%R;return S>0&&(M+=R-S),E.__size=M,E.__cache={},this}function x(E,A){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=16,M.storage=48):E.isMatrix4?(M.boundary=16,M.storage=64):E.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(M.boundary=16,M.storage=E.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",E),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(E){let A=E.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(let E in s)i.deleteBuffer(s[E]);s={},r={}}return{bind:a,update:o,dispose:g}}function Nv(){return Un===null&&(Un=new Bs(Lv,16,16,hi,Sn),Un.name="DFG_LUT",Un.minFilter=Ct,Un.magFilter=Ct,Un.wrapS=Rn,Un.wrapT=Rn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var tp,np,ip,sp,rp,ap,op,lp,cp,up,dp,hp,fp,pp,mp,gp,vp,xp,yp,_p,bp,Sp,Ep,Mp,Ap,Rp,Tp,wp,Cp,Fp,Up,Vp,Ip,Dp,Bp,Pp,Lp,Np,kp,Op,Xp,zp,Gp,Hp,Wp,qp,Qp,Jp,Zp,$p,Yp,jp,Kp,em,tm,nm,im,sm,rm,am,om,lm,cm,um,dm,hm,fm,pm,mm,gm,vm,xm,ym,_m,bm,Sm,Em,Mm,Am,Rm,Tm,wm,Cm,Fm,Um,Vm,Im,Dm,Bm,Pm,Lm,Nm,km,Om,Xm,zm,Gm,Hm,Wm,qm,Qm,Jm,Zm,$m,Ym,jm,Km,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,ug,dg,hg,fg,pg,mg,gg,vg,xg,yg,_g,bg,Sg,Eg,Mg,Ag,Rg,Tg,wg,Cg,Fg,Ug,Vg,Ig,ze,be,Vn,yo,Dg,Id,gr,dd,Og,Xg,Dd,Bd,zg,Gg,Hg,cs,t0,Pd,Ld,Nd,kd,Od,Xd,md,gd,vd,xd,yd,nc,ic,sc,ec,ls,H0,W0,Sd,Z0,_o,tv,iv,rv,ov,cv,hv,ac,oc,_v,Mv,Av,Rv,Tv,Ud,pr,tc,Vv,Iv,lc,cc,Dv,zd,Lv,Un,bo,Mo=Ht(()=>{Kl();Kl();tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,jp=`uniform sampler2D dfgLUT;
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
}`,Kp=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
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
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform float backgroundBlurriness;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
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
}`,hg=`uniform float scale;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,xg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Mg=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Vg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:hp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:_p,color_pars_fragment:bp,color_pars_vertex:Sp,color_vertex:Ep,common:Mp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Tp,emissivemap_fragment:wp,emissivemap_pars_fragment:Cp,colorspace_fragment:Fp,colorspace_pars_fragment:Up,envmap_fragment:Vp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Dp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:qp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Np,fog_fragment:kp,fog_pars_fragment:Op,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:zp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Wp,lights_toon_fragment:Qp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Zp,lights_phong_pars_fragment:$p,lights_physical_fragment:Yp,lights_physical_pars_fragment:jp,lights_fragment_begin:Kp,lights_fragment_maps:em,lights_fragment_end:tm,lightprobes_pars_fragment:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:hm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:_m,normal_pars_vertex:bm,normal_vertex:Sm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Tm,opaque_fragment:wm,packing:Cm,premultiplied_alpha_fragment:Fm,project_vertex:Um,dithering_fragment:Vm,dithering_pars_fragment:Im,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Nm,shadowmask_pars_fragment:km,skinbase_vertex:Om,skinning_pars_vertex:Xm,skinning_vertex:zm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Wm,tonemapping_fragment:qm,tonemapping_pars_fragment:Qm,transmission_fragment:Jm,transmission_pars_fragment:Zm,uv_pars_fragment:$m,uv_pars_vertex:Ym,uv_vertex:jm,worldpos_vertex:Km,background_vert:eg,background_frag:tg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:ag,depth_frag:og,distance_vert:lg,distance_frag:cg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:hg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:vg,meshmatcap_vert:xg,meshmatcap_frag:yg,meshnormal_vert:_g,meshnormal_frag:bg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:Mg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Tg,points_vert:wg,points_frag:Cg,shadow_vert:Fg,shadow_frag:Ug,sprite_vert:Vg,sprite_frag:Ig},be={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vn={basic:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([be.points,be.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([be.common,be.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([be.sprite,be.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:kt([be.common,be.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:kt([be.lights,be.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Vn.physical={uniforms:kt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};yo={r:0,b:0,g:0},Dg=new et,Id=new Be;Id.set(-1,0,0,0,1,0,0,0,1);gr=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ks(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Ei});r.uniforms.tEquirect.value=t;let a=new st(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Ct),new ts(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},dd=256,Og=3,Xg=20,Dd=256,Bd=16,zg=3,Gg=new D,Hg=new Ie,cs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ts(1,10,null),this._boxMesh=new st(new ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Gg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,u=c.autoClearColor,h=c.autoClearDepth,f=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Hg));let m=new ts(n,s,d);return m.position.copy(o),m.update(c,e),c.autoClear=p,c.autoClearColor=u,c.autoClearDepth=h,c.autoClearStencil=f,e.background=x,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(dd,Wl(e))}_fromTexture(e,t){e.mapping===Ai||e.mapping===rs?this._setSize(e.image.length===0?dd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hd(e,!1,!1),n=Math.log2(e)-Og;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ai||e.mapping===rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Wg(),this._integrationMaterial=qg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Bd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-zg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Dd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Qg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};t0={[Rl]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Ul]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};Pd=new zt,Ld=new Hn(1,1),Nd=new Xs(1),kd=new Vs,Od=new aa,Xd=new ks,md=[],gd=[],vd=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}},sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ec=/(\w+)(\])?(\[|\.)?/g;ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);G0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};H0=37297,W0=0;Sd=new Be;Z0={[Rl]:"Linear",[Tl]:"Reinhard",[wl]:"Cineon",[rr]:"ACESFilmic",[Fl]:"AgX",[Ul]:"Neutral",[Cl]:"Custom"};_o=new D;tv=/^[ \t]*#include +<([\w\d./]+)>/gm;iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;rv={[sr]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};ov={[rs]:"ENVMAP_MODE_REFRACTION"};cv={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};hv=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oc(e),t.set(e,n)),n}},oc=class{constructor(e){this.id=hv++,this.code=e,this.usedTimes=0}};_v=0;Mv=`void main() {
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
}`,Rv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Tv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ud=new et,pr=new D,tc=new D;Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Vv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,p=null,u=null,h=null,f=null,x=typeof XRWebGLBinding<"u",m=new lc,g={},E=t.getContextAttributes(),A=null,M=null,R=[],S=[],v=new Ee,b=null,B=null,C=new Lt;C.viewport=new ct;let P=new Lt;P.viewport=new ct;let X=[C,P],H=new Fa,F=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let ee=R[O];return ee===void 0&&(ee=new $i,R[O]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(O){let ee=R[O];return ee===void 0&&(ee=new $i,R[O]=ee),ee.getGripSpace()},this.getHand=function(O){let ee=R[O];return ee===void 0&&(ee=new $i,R[O]=ee),ee.getHandSpace()};function L(O){let ee=S.indexOf(O.inputSource);if(ee===-1)return;let ie=R[ee];ie!==void 0&&(ie.update(O.inputSource,O.frame,l||a),ie.dispatchEvent({type:O.type,data:O.inputSource}))}function V(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let O=0;O<R.length;O++){let ee=S[O];ee!==null&&(S[O]=null,R[O].disconnect(ee))}F=null,U=null,m.reset();for(let O in g)delete g[O];if(e.setRenderTarget(A),h=null,u=null,p=null,s=null,M=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),B!==null){let O=B.camera;O.fov=B.fov,O.zoom=B.zoom,O.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),E.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ye=null,re=null;E.depth&&(re=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?Qn:Xn,ye=E.stencil?Ri:bn);let we={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(we),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Kt(u.textureWidth,u.textureHeight,{format:En,type:qt,depthTexture:new Hn(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Kt(h.framebufferWidth,h.framebufferHeight,{format:En,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(O){for(let ee=0;ee<O.removed.length;ee++){let ie=O.removed[ee],ye=S.indexOf(ie);ye>=0&&(S[ye]=null,R[ye].disconnect(ie))}for(let ee=0;ee<O.added.length;ee++){let ie=O.added[ee],ye=S.indexOf(ie);if(ye===-1){for(let we=0;we<R.length;we++)if(we>=S.length){S.push(ie),ye=we;break}else if(S[we]===null){S[we]=ie,ye=we;break}if(ye===-1)break}let re=R[ye];re&&re.connect(ie)}}function k(O,ee){ee===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(ee.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let ee=O.near,ie=O.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),H.near=P.near=C.near=ee,H.far=P.far=C.far=ie,(F!==H.near||U!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),F=H.near,U=H.far),H.layers.mask=O.layers.mask|6,C.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let ye=O.parent,re=H.cameras;k(H,ye);for(let we=0;we<re.length;we++)k(re[we],ye);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),B===null&&O.isPerspectiveCamera&&(B={camera:O,fov:O.fov,zoom:O.zoom}),Q(O,H,ye)};function Q(O,ee,ie){ie===null?O.matrix.copy(ee.matrixWorld):(O.matrix.copy(ie.matrixWorld),O.matrix.invert(),O.matrix.multiply(ee.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(ee.projectionMatrix),O.projectionMatrixInverse.copy(ee.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Qi*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(O){c=O,u!==null&&(u.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(O){return g[O]};let $=null;function le(O,ee){if(d=ee.getViewerPose(l||a),f=ee,d!==null){let ie=d.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let ye=!1;ie.length!==H.cameras.length&&(H.cameras.length=0,ye=!0);for(let xe=0;xe<ie.length;xe++){let We=ie[xe],Oe=null;if(h!==null)Oe=h.getViewport(We);else{let vt=p.getViewSubImage(u,We);Oe=vt.viewport,xe===0&&(e.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(M))}let Ge=X[xe];Ge===void 0&&(Ge=new Lt,Ge.layers.enable(xe),Ge.viewport=new ct,X[xe]=Ge),Ge.matrix.fromArray(We.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(We.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(H.matrix.copy(Ge.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ye===!0&&H.cameras.push(Ge)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let xe=p.getDepthInformation(ie[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,s.renderState)}if(re&&re.includes("camera-access")&&x){e.state.unbindTexture(),p=n.getBinding();for(let xe=0;xe<ie.length;xe++){let We=ie[xe].camera;if(We){let Oe=g[We];Oe||(Oe=new zs,g[We]=Oe);let Ge=p.getCameraImage(We);Oe.sourceTexture=Ge}}}}for(let ie=0;ie<R.length;ie++){let ye=S[ie],re=R[ie];ye!==null&&re!==void 0&&re.update(ye,ee,l||a)}$&&$(O,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),f=null}let te=new Vd;te.setAnimationLoop(le),this.setAnimationLoop=function(O){$=O},this.dispose=function(){}}},Dv=new et,zd=new Be;zd.set(-1,0,0,0,1,0,0,0,1);Lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;bo=class{constructor(e={}){let{canvas:t=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=qt}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=h,m=new Set([Xa,Oa,ka]),g=new Set([qt,bn,as,Ri,Pa,La]),E=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,S=null,v=[],b=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,X=null,H=null,F=null,U=null;this._outputColorSpace=Pt;let L=0,V=0,q=null,k=-1,Q=null,$=new ct,le=new ct,te=null,O=new Ie(0),ee=0,ie=t.width,ye=t.height,re=1,we=null,He=null,xe=new ct(0,0,ie,ye),We=new ct(0,0,ie,ye),Oe=!1,Ge=new si,vt=new oa,pt=!1,Gt=!1,ut=new et,Mn=new D,Mt=new ct,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},sn=!1;function rn(){return q===null?re:1}let N=n;function an(_,I){return t.getContext(_,I)}let ot,lt,ve,xt,Ve,Pe,T,y,G,ae,ne,ue,me,Y,j,he,w,K,Z,fe,ce,de,Ce;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){let I="webgl2";if(N=an(I,_),N===null)throw an(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(_){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),De("WebGLRenderer: "+_.message),_}function Xe(){ot=new Zg(N),ot.init(),ce=new Uv(N,ot),lt=new Ng(N,ot,e,ce),ve=new Cv(N,ot),lt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),H=N.createFramebuffer(),F=N.createFramebuffer(),U=N.createFramebuffer(),xt=new jg(N),Ve=new mv,Pe=new Fv(N,ot,ve,Ve,lt,ce,xt),T=new Jg(C),y=new ep(N),de=new Pg(N,y),G=new $g(N,y,xt,de),ae=new e0(N,G,y,de,xt),K=new Kg(N,lt,Pe),j=new kg(Ve),ne=new pv(C,T,ot,lt,de,j),ue=new Bv(C,Ve),me=new vv,Y=new Ev(ot),w=new Bg(C,T,ve,ae,f,c),he=new wv(C,ae,lt),Ce=new Pv(N,xt,lt,ve),Z=new Lg(N,ot,xt),fe=new Yg(N,ot,xt),xt.programs=ne.programs,C.capabilities=lt,C.extensions=ot,C.properties=Ve,C.renderLists=me,C.shadowMap=he,C.state=ve,C.info=xt}x!==qt&&(B=new n0(x,t.width,t.height,o,s,r));let oe=new cc(C,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let _=ot.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ot.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(_){_!==void 0&&(re=_,this.setSize(ie,ye,!1))},this.getSize=function(_){return _.set(ie,ye)},this.setSize=function(_,I,J=!0){if(oe.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=_,ye=I,t.width=Math.floor(_*re),t.height=Math.floor(I*re),J===!0&&(t.style.width=_+"px",t.style.height=I+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(ie*re,ye*re).floor()},this.setDrawingBufferSize=function(_,I,J){ie=_,ye=I,re=J,t.width=Math.floor(_*J),t.height=Math.floor(I*J),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(x===qt){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy($)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,I,J,z){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,I,J,z),ve.viewport($.copy(xe).multiplyScalar(rn()).round())},this.getScissor=function(_){return _.copy(We)},this.setScissor=function(_,I,J,z){_.isVector4?We.set(_.x,_.y,_.z,_.w):We.set(_,I,J,z),ve.scissor(le.copy(We).multiplyScalar(rn()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(_){ve.setScissorTest(Oe=_)},this.setOpaqueSort=function(_){we=_},this.setTransparentSort=function(_){He=_},this.getClearColor=function(_){return _.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor(...arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,J=!0){let z=0;if(_){let W=!1;if(q!==null){let ge=q.texture.format;W=m.has(ge)}if(W){let ge=q.texture.type,Me=g.has(ge),pe=w.getClearColor(),Se=w.getClearAlpha(),Te=pe.r,Le=pe.g,qe=pe.b;Me?(E[0]=Te,E[1]=Le,E[2]=qe,E[3]=Se,N.clearBufferuiv(N.COLOR,0,E)):(A[0]=Te,A[1]=Le,A[2]=qe,A[3]=Se,N.clearBufferiv(N.COLOR,0,A))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),X=_},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),w.dispose(),me.dispose(),Y.dispose(),Pe.dispose(),Ve.dispose(),T.dispose(),ae.dispose(),G.dispose(),de.dispose(),Ce.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",bc),oe.removeEventListener("sessionend",Sc),fi.stop()};function Fe(_){_.preventDefault(),Gl("WebGLRenderer: Context Lost."),P=!0}function Ne(){Gl("WebGLRenderer: Context Restored."),P=!1;let _=xt.autoReset,I=he.enabled,J=he.autoUpdate,z=he.needsUpdate,W=he.type;Xe(),xt.autoReset=_,he.enabled=I,he.autoUpdate=J,he.needsUpdate=z,he.type=W}function _e(_){De("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function nt(_){let I=_.target;I.removeEventListener("dispose",nt),At(I)}function At(_){Zn(_),Ve.remove(_)}function Zn(_){let I=Ve.get(_).programs;I!==void 0&&(I.forEach(function(J){ne.releaseProgram(J)}),_.isShaderMaterial&&ne.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,J,z,W,ge){I===null&&(I=nn);let Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=wh(_,I,J,z,W);ve.setMaterial(z,Me);let Se=J.index,Te=1;if(z.wireframe===!0){if(Se=G.getWireframeAttribute(J),Se===void 0)return;Te=2}let Le=J.drawRange,qe=J.attributes.position,Ae=Le.start*Te,Qe=(Le.start+Le.count)*Te;ge!==null&&(Ae=Math.max(Ae,ge.start*Te),Qe=Math.min(Qe,(ge.start+ge.count)*Te)),Se!==null?(Ae=Math.max(Ae,0),Qe=Math.min(Qe,Se.count)):qe!=null&&(Ae=Math.max(Ae,0),Qe=Math.min(Qe,qe.count));let mt=Qe-Ae;if(mt<0||mt===1/0)return;de.setup(W,z,pe,J,Se);let rt,it=Z;if(Se!==null&&(rt=y.get(Se),it=fe,it.setIndex(rt)),W.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*rn()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(W.isLine){let Vt=z.linewidth;Vt===void 0&&(Vt=1),ve.setLineWidth(Vt*rn()),W.isLineSegments?it.setMode(N.LINES):W.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else W.isPoints?it.setMode(N.POINTS):W.isSprite&&it.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Vt=W._multiDrawStarts,Re=W._multiDrawCounts,Ot=W._multiDrawCount,$e=Se?y.get(Se).bytesPerElement:1,pi=Ve.get(z).currentProgram.getUniforms();for(let It=0;It<Ot;It++)pi.setValue(N,"_gl_DrawID",It),it.render(Vt[It]/$e,Re[It])}else if(W.isInstancedMesh)it.renderInstances(Ae,mt,W.count);else if(J.isInstancedBufferGeometry){let Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,Vt);it.renderInstances(Ae,mt,Re)}else it.render(Ae,mt)};function _c(_,I,J,z){X!==null&&_.isNodeMaterial&&X.setObject(z,_),pt===!0&&j.setState(_,J,!1),_.transparent===!0&&_.side===Wt&&_.forceSinglePass===!1?(_.side=Ut,_.needsUpdate=!0,ps(_,I,z),_.side=_n,_.needsUpdate=!0,ps(_,I,z),_.side=Wt):ps(_,I,z)}this.compile=function(_,I,J=null){J===null&&(J=_),X!==null&&X.renderStart(_,I,J),S=Y.get(J),S.init(I),b.push(S),J.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),_!==J&&_.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),X!==null&&X.updateLights(S.state.lightsArray),Gt=this.localClippingEnabled,pt=j.init(this.clippingPlanes,Gt),pt===!0&&j.setGlobalState(this.clippingPlanes,I),X!==null&&he.render(S.state.shadowsArray,J,I);let z=new Set;return _.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let pe=ge[Me];_c(pe,J,I,W),z.add(pe)}else _c(ge,J,I,W),z.add(ge)}),S=b.pop(),X!==null&&X.renderEnd(),z},this.compileAsync=function(_,I,J=null){let z=this.compile(_,I,J);return new Promise(W=>{function ge(){if(z.forEach(function(Me){let Se=Ve.get(Me).currentProgram;(Se===void 0||Se.isReady())&&z.delete(Me)}),z.size===0){W(_);return}setTimeout(ge,10)}ot.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Bo=null;function Rh(_){Bo&&Bo(_)}function bc(){fi.stop()}function Sc(){fi.start()}let fi=new Vd;fi.setAnimationLoop(Rh),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(_){Bo=_,oe.setAnimationLoop(_),_===null?fi.stop():fi.start()},oe.addEventListener("sessionstart",bc),oe.addEventListener("sessionend",Sc),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;X!==null&&X.renderStart(_,I);let J=oe.enabled===!0&&oe.isPresenting===!0,z=B!==null&&(q===null||J)&&B.begin(C,q);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(I),I=oe.getCamera()),_.isScene===!0&&_.onBeforeRender(C,_,I,q),S=Y.get(_,b.length),S.init(I),S.state.textureUnits=Pe.getTextureUnits(),b.push(S),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?vt.setFromArrayCamera(I):Ge.setFromProjectionMatrix(ut,ln,I.reversedDepth),Gt=this.localClippingEnabled,pt=j.init(this.clippingPlanes,Gt),R=me.get(_,v.length),R.init(),v.push(R),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&Po(Me,I,-1/0,C.sortObjects)}Po(_,I,0,C.sortObjects),R.finish(),X!==null&&X.updateLights(S.state.lightsArray),C.sortObjects===!0&&R.sort(we,He),sn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,sn&&w.addToRenderList(R,_),this.info.autoReset===!0&&this.info.reset(),pt===!0&&j.beginShadows();let W=S.state.shadowsArray;if(he.render(W,_,I),pt===!0&&j.endShadows(),(z&&B.hasRenderPass())===!1){let Me=R.opaque,pe=R.transmissive;if(S.setupLights(),I.isArrayCamera){let Se=I.cameras;if(pe.length>0)for(let Te=0,Le=Se.length;Te<Le;Te++){let qe=Se[Te];Mc(Me,pe,_,qe)}sn&&w.render(_);for(let Te=0,Le=Se.length;Te<Le;Te++){let qe=Se[Te];Ec(R,_,qe,qe.viewport)}}else pe.length>0&&Mc(Me,pe,_,I),sn&&w.render(_),Ec(R,_,I)}q!==null&&V===0&&(Pe.updateMultisampleRenderTarget(q),Pe.updateRenderTargetMipmap(q)),z&&B.end(C),_.isScene===!0&&_.onAfterRender(C,_,I),de.resetDefaultState(),k=-1,Q=null,b.pop(),b.length>0?(S=b[b.length-1],Pe.setTextureUnits(S.state.textureUnits),pt===!0&&j.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,X!==null&&X.renderEnd()};function Po(_,I,J,z){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)J=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){let Me=I.isArrayCamera?vt:Ge;if(!_.frustumCulled||_.intersectsFrustum(Me)){z&&Mt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ut);let pe=ae.update(_),Se=_.material;Se.visible&&R.push(_,pe,Se,J,Mt.z,null,I)}}else if(_.isMesh||_.isLine||_.isPoints){let Me=I.isArrayCamera?vt:Ge;if(!_.frustumCulled||_.intersectsFrustum(Me)){let pe=ae.update(_),Se=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Mt.copy(_.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Mt.copy(pe.boundingSphere.center)),Mt.applyMatrix4(_.matrixWorld).applyMatrix4(ut)),Array.isArray(Se)){let Te=pe.groups;for(let Le=0,qe=Te.length;Le<qe;Le++){let Ae=Te[Le],Qe=Se[Ae.materialIndex];Qe&&Qe.visible&&R.push(_,pe,Qe,J,Mt.z,Ae,I)}}else Se.visible&&R.push(_,pe,Se,J,Mt.z,null,I)}}}let ge=_.children;for(let Me=0,pe=ge.length;Me<pe;Me++)Po(ge[Me],I,J,z)}function Ec(_,I,J,z){let{opaque:W,transmissive:ge,transparent:Me}=_;S.setupLightsView(J),pt===!0&&j.setGlobalState(C.clippingPlanes,J),z&&ve.viewport($.copy(z)),W.length>0&&_r(W,I,J),ge.length>0&&_r(ge,I,J),Me.length>0&&_r(Me,I,J),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Mc(_,I,J,z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let Ae=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new Kt(1,1,{generateMipmaps:!0,type:Ae?Sn:qt,minFilter:qn,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ge=S.state.transmissionRenderTarget[z.id],Me=z.viewport||$;ge.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Se=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(O),ee=C.getClearAlpha(),ee<1&&C.setClearColor(16777215,.5),C.clear(),sn&&w.render(J);let Le=C.toneMapping;C.toneMapping=Fn;let qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),pt===!0&&j.setGlobalState(C.clippingPlanes,z),_r(_,J,z),Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Qe=0,mt=I.length;Qe<mt;Qe++){let rt=I[Qe],{object:it,geometry:Vt,material:Re,group:Ot}=rt;if(Re.side===Wt&&it.layers.test(z.layers)){let $e=Re.side;Re.side=Ut,Re.needsUpdate=!0,Ac(it,J,z,Vt,Re,Ot),Re.side=$e,Re.needsUpdate=!0,Ae=!0}}Ae===!0&&(Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge))}C.setRenderTarget(pe,Se,Te),C.setClearColor(O,ee),qe!==void 0&&(z.viewport=qe),C.toneMapping=Le}function _r(_,I,J){let z=I.isScene===!0?I.overrideMaterial:null;for(let W=0,ge=_.length;W<ge;W++){let Me=_[W],{object:pe,geometry:Se,group:Te}=Me,Le=Me.material;Le.allowOverride===!0&&z!==null&&(Le=z),pe.layers.test(J.layers)&&Ac(pe,I,J,Se,Le,Te)}}function Ac(_,I,J,z,W,ge){X!==null&&W.isNodeMaterial&&X.setObject(_,W),_.onBeforeRender(C,I,J,z,W,ge),_.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),W.onBeforeRender(C,I,J,z,_,ge),W.transparent===!0&&W.side===Wt&&W.forceSinglePass===!1?(W.side=Ut,W.needsUpdate=!0,C.renderBufferDirect(J,I,z,W,_,ge),W.side=_n,W.needsUpdate=!0,C.renderBufferDirect(J,I,z,W,_,ge),W.side=Wt):C.renderBufferDirect(J,I,z,W,_,ge),_.onAfterRender(C,I,J,z,W,ge)}function Rc(_){let I=0;for(let J of _)J.texture!==null&&I++;return I}function ps(_,I,J){I.isScene!==!0&&(I=nn);let z=Ve.get(_),W=S.state.lights,ge=S.state.shadowsArray,Me=W.state.version,pe=ne.getParameters(_,W.state,ge,I,J,S.state.lightProbeGridArray),Se=ne.getProgramCacheKey(pe),Te=z.programs;z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let Le=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;z.envMap=T.get(_.envMap||z.environment,Le),z.envMapRotation=z.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",nt),Te=new Map,z.programs=Te,z.programVariants=new Map);let qe=Te.get(Se);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===Me)return wc(_,pe),qe}else pe.uniforms=ne.getUniforms(_),X!==null&&_.isNodeMaterial&&X.build(_,J,pe),_.onBeforeCompile(pe,C),qe=ne.acquireProgram(pe,Se),Te.set(Se,qe),z.uniforms=pe.uniforms;let Ae=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=j.uniform),wc(_,pe),z.needsLights=Fh(_),z.lightsStateVersion=Me,z.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),z.numLightProbeGrids=Rc(S.state.lightProbeGridArray),z.currentProgram=qe,z.uniformsList=null,qe}function Th(_,I,J,z,W){let ge=Ve.get(_),Me=ge.currentProgram.id+","+z+","+W,pe=ge.programVariants.get(Me);return pe===void 0?(pe=ps(_,I,J),ge.programVariants.set(Me,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=z,ge.toneMapping=W),pe}function Tc(_){if(_.uniformsList===null){let I=_.currentProgram.getUniforms();_.uniformsList=ls.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function wc(_,I){let J=Ve.get(_);J.outputColorSpace=I.outputColorSpace,J.batching=I.batching,J.batchingColor=I.batchingColor,J.instancing=I.instancing,J.instancingColor=I.instancingColor,J.instancingMorph=I.instancingMorph,J.skinning=I.skinning,J.morphTargets=I.morphTargets,J.morphNormals=I.morphNormals,J.morphColors=I.morphColors,J.morphTargetsCount=I.morphTargetsCount,J.numClippingPlanes=I.numClippingPlanes,J.numIntersection=I.numClipIntersection,J.vertexAlphas=I.vertexAlphas,J.vertexTangents=I.vertexTangents,J.toneMapping=I.toneMapping}function wh(_,I,J,z,W){I.isScene!==!0&&(I=nn),Pe.resetTextureUnits();let ge=I.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,pe=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Je.workingColorSpace,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=T.get(z.envMap||Me,Se),Le=z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qe=!!J.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!J.morphAttributes.position,Qe=!!J.morphAttributes.normal,mt=!!J.morphAttributes.color,rt=Fn;z.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(rt=C.toneMapping);let it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Vt=it!==void 0?it.length:0,Re=Ve.get(z),Ot=S.state.lights;if(pt===!0&&(Gt===!0||_!==Q)){let dt=_===Q&&z.id===k;j.setState(z,_,dt)}let $e=!1,pi=!1;z.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Ot.state.version||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Te||z.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==j.numPlanes||Re.numIntersection!==j.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==qe||Re.morphTargets!==Ae||Re.morphNormals!==Qe||Re.morphColors!==mt||Re.morphTargetsCount!==Vt||Re.numLightProbeGrids!==Rc(S.state.lightProbeGridArray)?$e=!0:(Re.outputColorSpace!==pe||Re.toneMapping!==rt)&&(pi=!0):($e=!0,Re.__version=z.version);let It=Re.currentProgram;($e===!0||pi===!0)&&(It=pi===!0?Th(z,I,W,pe,rt):ps(z,I,W),X&&z.isNodeMaterial&&X.onUpdateProgram(z,It,Re));let br=!1,$n=!1,mi=!1,Ze=It.getUniforms(),Ft=Re.uniforms;if(ve.useProgram(It.program)&&(br=!0,$n=!0,mi=!0),z.id!==k&&(k=z.id,$n=!0),br||Q!==_){ve.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Ze.setValue(N,"projectionMatrix",_.projectionMatrix),Ze.setValue(N,"viewMatrix",_.matrixWorldInverse);let Rt=Ze.map.cameraPosition;Rt!==void 0&&Rt.setValue(N,Mn.setFromMatrixPosition(_.matrixWorld)),lt.logarithmicDepthBuffer&&Ze.setValue(N,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ze.setValue(N,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,$n=!0,mi=!0)}if(Re.needsLights&&(Ot.state.sunShadowMap.length>0&&Ze.setValue(N,"sunShadowMap",Ot.state.sunShadowMap,Pe),Ot.state.directionalShadowMap.length>0&&Ze.setValue(N,"directionalShadowMap",Ot.state.directionalShadowMap,Pe),Ot.state.spotShadowMap.length>0&&Ze.setValue(N,"spotShadowMap",Ot.state.spotShadowMap,Pe),Ot.state.pointShadowMap.length>0&&Ze.setValue(N,"pointShadowMap",Ot.state.pointShadowMap,Pe)),W.isSkinnedMesh){Ze.setOptional(N,W,"bindMatrix"),Ze.setOptional(N,W,"bindMatrixInverse");let dt=W.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Ze.setValue(N,"boneTexture",dt.boneTexture,Pe))}W.isBatchedMesh&&(Ze.setOptional(N,W,"batchingTexture"),Ze.setValue(N,"batchingTexture",W._matricesTexture,Pe),Ze.setOptional(N,W,"batchingIdTexture"),Ze.setValue(N,"batchingIdTexture",W._indirectTexture,Pe),Ze.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Ze.setValue(N,"batchingColorTexture",W._colorsTexture,Pe));let hn=J.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&K.update(W,J,It),($n||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,Ze.setValue(N,"receiveShadow",W.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=Nv()),$n){if(Ze.setValue(N,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&Ch(Ft,mi),ge&&z.fog===!0&&ue.refreshFogUniforms(Ft,ge),ue.refreshMaterialUniforms(Ft,z,re,ye,S.state.transmissionRenderTarget[_.id]),Re.needsLights&&Re.numLightProbeGrids>0){let dt=M,Rt=0;for(let In of S.state.lightProbeGridArray)In.texture!==null&&(dt.textures[Rt]=In.texture,dt.min[Rt]=In.boundingBox.min,dt.max[Rt]=In.boundingBox.max,dt.resolution[Rt]=In.resolution,Rt++);for(let In in dt)dt[In].length=Rt;Ft.probesSH.value=dt.textures,Ft.probesMin.value=dt.min,Ft.probesMax.value=dt.max,Ft.probesResolution.value=dt.resolution}ls.upload(N,Tc(Re),Ft,Pe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ls.upload(N,Tc(Re),Ft,Pe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ze.setValue(N,"center",W.center),Ze.setValue(N,"modelViewMatrix",W.modelViewMatrix),Ze.setValue(N,"normalMatrix",W.normalMatrix),Ze.setValue(N,"modelMatrix",W.matrixWorld),z.uniformsGroups!==void 0){let dt=z.uniformsGroups;for(let Rt=0,In=dt.length;Rt<In;Rt++){let Fc=dt[Rt];Ce.update(Fc,It),Ce.bind(Fc,It)}}return It}function Ch(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.sunLights.needsUpdate=I,_.sunLightShadows.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function Fh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(_,I,J){let z=Ve.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ve.get(_.texture).__webglTexture=I,Ve.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:J,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){let J=Ve.get(_);J.__webglFramebuffer=I,J.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,J=0){q=_,L=I,V=J;let z=null,W=!1,ge=!1;if(_){let pe=Ve.get(_);if(pe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),$.copy(_.viewport),le.copy(_.scissor),te=_.scissorTest,ve.viewport($),ve.scissor(le),ve.setScissorTest(te),k=-1;return}else if(pe.__webglFramebuffer===void 0)Pe.setupRenderTarget(_);else if(pe.__hasExternalTextures)Pe.rebindTextures(_,Ve.get(_.texture).__webglTexture,Ve.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Le=_.depthTexture;if(pe.__boundDepthTexture!==Le){if(Le!==null&&Ve.has(Le)&&(_.width!==Le.image.width||_.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(_)}}let Se=_.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Te=Ve.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?z=Te[I][J]:z=Te[I],W=!0):_.samples>0&&Pe.useMultisampledRTT(_)===!1?z=Ve.get(_).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[J]:z=Te,$.copy(_.viewport),le.copy(_.scissor),te=_.scissorTest}else $.copy(xe).multiplyScalar(re).floor(),le.copy(We).multiplyScalar(re).floor(),te=Oe;if(J!==0&&(z=H),ve.bindFramebuffer(N.FRAMEBUFFER,z)&&ve.drawBuffers(_,z),ve.viewport($),ve.scissor(le),ve.setScissorTest(te),W){let pe=Ve.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,J)}else if(ge){let pe=I;for(let Se=0;Se<_.textures.length;Se++){let Te=Ve.get(_.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,Te.__webglTexture,J,pe)}}else if(_!==null&&J!==0){let pe=Ve.get(_.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,J)}k=-1};function Cc(_){let I=Ve.get(_);return(I.__readFormat!==_.format||I.__readType!==_.type)&&(I.__readFormat=_.format,I.__readType=_.type,I.__formatReadable=lt.textureFormatReadable(_.format),I.__typeReadable=lt.textureTypeReadable(_.type)),I}this.readRenderTargetPixels=function(_,I,J,z,W,ge,Me,pe=0){if(!(_&&_.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se){ve.bindFramebuffer(N.FRAMEBUFFER,Se);try{let Te=_.textures[pe],Le=Te.format,qe=Te.type;_.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Ae=Cc(Te);if(Ae.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-z&&J>=0&&J<=_.height-W&&N.readPixels(I,J,z,W,ce.convert(Le),ce.convert(qe),ge)}finally{let Te=q!==null?Ve.get(q).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(_,I,J,z,W,ge,Me,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se)if(I>=0&&I<=_.width-z&&J>=0&&J<=_.height-W){ve.bindFramebuffer(N.FRAMEBUFFER,Se);let Te=_.textures[pe],Le=Te.format,qe=Te.type;_.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Ae=Cc(Te);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(I,J,z,W,ce.convert(Le),ce.convert(qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let mt=q!==null?Ve.get(q).__webglFramebuffer:null;ve.bindFramebuffer(N.FRAMEBUFFER,mt);let rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await id(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qe),N.deleteSync(rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,J=0){let z=Math.pow(2,-J),W=Math.floor(_.image.width*z),ge=Math.floor(_.image.height*z),Me=I!==null?I.x:0,pe=I!==null?I.y:0;Pe.setTexture2D(_,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Me,pe,W,ge),ve.unbindTexture()},this.copyTextureToTexture=function(_,I,J=null,z=null,W=0,ge=0){let Me,pe,Se,Te,Le,qe,Ae,Qe,mt,rt=_.isCompressedTexture?_.mipmaps[ge]:_.image;if(J!==null)Me=J.max.x-J.min.x,pe=J.max.y-J.min.y,Se=J.isBox3?J.max.z-J.min.z:1,Te=J.min.x,Le=J.min.y,qe=J.isBox3?J.min.z:0;else{let Ze=Math.pow(2,-W);Me=Math.floor(rt.width*Ze),pe=Math.floor(rt.height*Ze),_.isDataArrayTexture?Se=rt.depth:_.isData3DTexture?Se=Math.floor(rt.depth*Ze):Se=1,Te=0,Le=0,qe=0}z!==null?(Ae=z.x,Qe=z.y,mt=z.z):(Ae=0,Qe=0,mt=0);let it=ce.convert(I.format),Vt=ce.convert(I.type),Re;I.isData3DTexture?(Pe.setTexture3D(I,0),Re=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Pe.setTexture2DArray(I,0),Re=N.TEXTURE_2D_ARRAY):(Pe.setTexture2D(I,0),Re=N.TEXTURE_2D),ve.activeTexture(N.TEXTURE0),ve.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),ve.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ve.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Ot=ve.getParameter(N.UNPACK_ROW_LENGTH),$e=ve.getParameter(N.UNPACK_IMAGE_HEIGHT),pi=ve.getParameter(N.UNPACK_SKIP_PIXELS),It=ve.getParameter(N.UNPACK_SKIP_ROWS),br=ve.getParameter(N.UNPACK_SKIP_IMAGES);ve.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),ve.pixelStorei(N.UNPACK_SKIP_ROWS,Le),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);let $n=_.isDataArrayTexture||_.isData3DTexture,mi=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){let Ze=Ve.get(_),Ft=Ve.get(I),hn=Ve.get(Ze.__renderTarget),dt=Ve.get(Ft.__renderTarget);ve.bindFramebuffer(N.READ_FRAMEBUFFER,hn.__webglFramebuffer),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Rt=0;Rt<Se;Rt++)$n&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.get(_).__webglTexture,W,qe+Rt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.get(I).__webglTexture,ge,mt+Rt)),N.blitFramebuffer(Te,Le,Te+Me,Le+pe,Ae,Qe,Ae+Me,Qe+pe,N.DEPTH_BUFFER_BIT,N.NEAREST);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||_.isRenderTargetTexture||Ve.has(_)){let Ze=Ve.get(_),Ft=Ve.get(I);ve.bindFramebuffer(N.READ_FRAMEBUFFER,F),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let hn=0;hn<Se;hn++)$n?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,W,qe+hn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.__webglTexture,W),mi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,ge,mt+hn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ft.__webglTexture,ge),W!==0?N.blitFramebuffer(Te,Le,Te+Me,Le+pe,Ae,Qe,Ae+Me,Qe+pe,N.COLOR_BUFFER_BIT,N.NEAREST):mi?N.copyTexSubImage3D(Re,ge,Ae,Qe,mt+hn,Te,Le,Me,pe):N.copyTexSubImage2D(Re,ge,Ae,Qe,Te,Le,Me,pe);ve.bindFramebuffer(N.READ_FRAMEBUFFER,null),ve.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mi?_.isDataTexture||_.isData3DTexture?N.texSubImage3D(Re,ge,Ae,Qe,mt,Me,pe,Se,it,Vt,rt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,ge,Ae,Qe,mt,Me,pe,Se,it,rt.data):N.texSubImage3D(Re,ge,Ae,Qe,mt,Me,pe,Se,it,Vt,rt):_.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Ae,Qe,Me,pe,it,Vt,rt.data):_.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Ae,Qe,rt.width,rt.height,it,rt.data):N.texSubImage2D(N.TEXTURE_2D,ge,Ae,Qe,Me,pe,it,Vt,rt);ve.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),ve.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e),ve.pixelStorei(N.UNPACK_SKIP_PIXELS,pi),ve.pixelStorei(N.UNPACK_SKIP_ROWS,It),ve.pixelStorei(N.UNPACK_SKIP_IMAGES,br),ge===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Re),ve.unbindTexture()},this.initRenderTarget=function(_){Ve.get(_).__webglFramebuffer===void 0&&Pe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Pe.setTextureCube(_,0):_.isData3DTexture?Pe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Pe.setTexture2DArray(_,0):Pe.setTexture2D(_,0),ve.unbindTexture()},this.resetState=function(){L=0,V=0,q=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}});function Xv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wd),this.state=je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(dc)}function Wv(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qv(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wd))}function Qv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Jv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1){this.state=je.NONE;break}this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1){this.state=je.NONE;break}this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(dc)}function Zv(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function $v(i){this.enabled!==!1&&i.preventDefault()}function Yv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gd,dc,Wd,Ao,Hd,Ov,Et,Qt,je,uc,Ro,qd=Ht(()=>{Mo();Gd={type:"change"},dc={type:"start"},Wd={type:"end"},Ao=new ii,Hd=new Xt,Ov=Math.cos(70*Ql.DEG2RAD),Et=new D,Qt=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uc=1e-6,Ro=class extends ir{constructor(e,t=null){super(e,t),this.state=je.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new jt,this._lastTargetPosition=new D,this._quat=new jt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ns,this._sphericalDelta=new ns,this._scale=1,this._panOffset=new D,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new D,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zv.bind(this),this._onPointerDown=Xv.bind(this),this._onPointerUp=Gv.bind(this),this._onContextMenu=$v.bind(this),this._onMouseWheel=qv.bind(this),this._onKeyDown=Qv.bind(this),this._onTouchStart=Jv.bind(this),this._onTouchMove=Zv.bind(this),this._onMouseDown=Hv.bind(this),this._onMouseMove=Wv.bind(this),this._interceptControlDown=Yv.bind(this),this._interceptControlUp=jv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=je.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gd),this.update(),this.state=je.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Et.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ao.origin.copy(this.object.position),Ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ao.direction))<Ov?this.object.lookAt(this.target):(Hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ao.intersectPlane(Hd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uc||this._lastTargetPosition.distanceToSquared(this.target)>uc?(this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Et.copy(s).sub(this.target);let r=Et.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function ds(i){return new Js({color:0,emissive:16777215,emissiveIntensity:i})}var To,Qd=Ht(()=>{Mo();To=class extends bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ri;e.deleteAttribute("uv");let t=new Wn({side:Ut}),n=new Wn,s=new Ks(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new st(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ls(e,n,6),o=new _t;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new st(e,ds(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new st(e,ds(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let d=new st(e,ds(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let p=new st(e,ds(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new st(e,ds(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let h=new st(e,ds(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var hc,Jt,Jd,wo,Co,Fo=Ht(()=>{hc={frontal:{name:"Lobe frontal",en:"Frontal lobe",color:"#d98c6a"},parietal:{name:"Lobe pari\xE9tal",en:"Parietal lobe",color:"#6fa8c9"},temporal:{name:"Lobe temporal",en:"Temporal lobe",color:"#8fbf7a"},occipital:{name:"Lobe occipital",en:"Occipital lobe",color:"#c9a0d6"},limbique:{name:"Cortex cingulaire (limbique)",en:"Cingulate (limbic) cortex",color:"#e2c26a"},insula:{name:"Insula",en:"Insula",color:"#e29a9a"}},Jt={moteur:{name:"Cortex moteur primaire",en:"Primary motor cortex",group:"cortex",lobe:"frontal",color:"#e0754f",desc:"Bande de cortex situ\xE9e juste en avant du sillon central (gyrus pr\xE9central). Ses neurones envoient les ordres de mouvement volontaire vers la moelle \xE9pini\xE8re, puis les muscles.",role:"Commande des mouvements volontaires. L'h\xE9misph\xE8re gauche commande surtout le c\xF4t\xE9 droit du corps, et inversement (controlat\xE9ralit\xE9).",limite:"Ici, la r\xE9gion correspond au gyrus pr\xE9central et au sillon central : la fronti\xE8re exacte avec le cortex somesth\xE9sique est simplifi\xE9e."},premoteur:{name:"Cortex pr\xE9moteur",en:"Premotor cortex",group:"cortex",lobe:"frontal",color:"#e89a6c",desc:"Zone en avant du cortex moteur primaire.",role:"Pr\xE9pare et organise les mouvements avant leur ex\xE9cution, en lien avec le cortex moteur.",limite:"R\xE9gion approxim\xE9e par les sillons pr\xE9centraux."},prefrontal:{name:"Cortex pr\xE9frontal lat\xE9ral",en:"Lateral prefrontal cortex",group:"cortex",lobe:"frontal",color:"#d9a066",desc:"Grande partie avant du lobe frontal, sur la face externe du cerveau.",role:"Planifier, se concentrer, garder une information en t\xEAte, contr\xF4ler ses impulsions. Participe \xE0 de nombreux r\xE9seaux (contr\xF4le, attention).",limite:""},pfc_median:{name:"Cortex pr\xE9frontal m\xE9dian",en:"Medial prefrontal cortex",group:"cortex",lobe:"frontal",color:"#f0b884",desc:"Face interne (m\xE9diane) du lobe frontal, visible quand on masque l'autre h\xE9misph\xE8re.",role:"Participe \xE0 la r\xE9gulation des \xE9motions (\xAB frein \xBB du circuit d'alarme), \xE0 la prise de d\xE9cision et \xE0 la pens\xE9e sur soi.",limite:"R\xE9gion d\xE9limit\xE9e g\xE9om\xE9triquement (face m\xE9diane du gyrus frontal sup\xE9rieur)."},frontal_inf:{name:"Gyrus frontal inf\xE9rieur (aire de Broca \xE0 gauche)",en:"Inferior frontal gyrus (Broca's area, left)",group:"cortex",lobe:"frontal",color:"#c98a5a",desc:"Partie inf\xE9rieure du lobe frontal. \xC0 gauche, chez la plupart des personnes, elle contient l'aire de Broca.",role:"Production du langage (\xE0 gauche), contr\xF4le de l'action.",limite:""},orbitofrontal:{name:"Cortex orbitofrontal",en:"Orbitofrontal cortex",group:"cortex",lobe:"frontal",color:"#b97b55",desc:"Face inf\xE9rieure du lobe frontal, au-dessus des orbites (yeux).",role:"\xC9value la valeur des r\xE9compenses et des cons\xE9quences de nos choix ; lien avec les \xE9motions et la motivation.",limite:""},cingulaire_ant:{name:"Cortex cingulaire ant\xE9rieur",en:"Anterior cingulate cortex",group:"cortex",lobe:"limbique",color:"#e2c26a",desc:"Face interne, autour de l'avant du corps calleux.",role:"D\xE9tecte les conflits et les erreurs, participe \xE0 la douleur ressentie et aux \xE9motions.",limite:""},cingulaire_post:{name:"Cortex cingulaire post\xE9rieur",en:"Posterior cingulate cortex",group:"cortex",lobe:"limbique",color:"#d4b85c",desc:"Face interne, au-dessus de l'arri\xE8re du corps calleux.",role:"Pi\xE8ce centrale du r\xE9seau du \xAB mode par d\xE9faut \xBB (r\xEAverie, souvenirs personnels).",limite:""},insula:{name:"Insula",en:"Insula",group:"cortex",lobe:"insula",color:"#e29a9a",desc:"Cortex cach\xE9 au fond de la scissure lat\xE9rale : on ne le voit qu'en \xE9cartant les lobes ou en vue profonde.",role:"Perception de l'\xE9tat interne du corps (c\u0153ur, estomac\u2026), d\xE9go\xFBt, conscience des \xE9motions.",limite:""},somesthesique:{name:"Cortex somesth\xE9sique primaire",en:"Primary somatosensory cortex",group:"cortex",lobe:"parietal",color:"#5b9bd5",desc:"Bande de cortex juste en arri\xE8re du sillon central (gyrus postcentral).",role:"Re\xE7oit les messages du toucher, de la temp\xE9rature, de la douleur et de la position du corps.",limite:""},parietal:{name:"Cortex pari\xE9tal associatif",en:"Parietal association cortex",group:"cortex",lobe:"parietal",color:"#7fb3d5",desc:"Reste du lobe pari\xE9tal (lobules sup\xE9rieur et inf\xE9rieur, pr\xE9cun\xE9us).",role:"Situer son corps et les objets dans l'espace, orienter l'attention, calcul.",limite:""},auditif:{name:"Cortex auditif primaire",en:"Primary auditory cortex",group:"cortex",lobe:"temporal",color:"#5fae6e",desc:"Petit gyrus transverse (gyrus de Heschl) sur la face sup\xE9rieure du lobe temporal.",role:"Premi\xE8re \xE9tape corticale du traitement des sons.",limite:""},temporal:{name:"Cortex temporal",en:"Temporal cortex",group:"cortex",lobe:"temporal",color:"#9ccc85",desc:"Lobe temporal lat\xE9ral et inf\xE9rieur (dont le gyrus fusiforme).",role:"Compr\xE9hension du langage (\xE0 gauche), reconnaissance des objets et des visages, m\xE9moire des connaissances.",limite:""},parahippocampique:{name:"Gyrus parahippocampique",en:"Parahippocampal gyrus",group:"cortex",lobe:"temporal",color:"#b5d99c",desc:"Face interne du lobe temporal, contre l'hippocampe.",role:"Porte d'entr\xE9e des informations vers l'hippocampe ; m\xE9moire des lieux.",limite:""},visuel:{name:"Cortex visuel primaire",en:"Primary visual cortex",group:"cortex",lobe:"occipital",color:"#a970c4",desc:"Autour de la scissure calcarine, tout \xE0 l'arri\xE8re du cerveau (p\xF4le occipital).",role:"Re\xE7oit les messages venant des yeux (via le thalamus) : premi\xE8re \xE9tape de la vision consciente.",limite:"Approxim\xE9 par la scissure calcarine et le p\xF4le occipital."},occipital:{name:"Cortex visuel associatif",en:"Visual association cortex",group:"cortex",lobe:"occipital",color:"#c9a0d6",desc:"Reste du lobe occipital.",role:"Analyse des formes, des couleurs, du mouvement.",limite:""},paroi_mediane:{name:"Paroi m\xE9diane (non corticale)",en:"Medial wall",group:"cortex",lobe:null,color:"#8a8f99",desc:"Zone de la face interne o\xF9 passent le corps calleux et les structures profondes : ce n'est pas du cortex.",role:"",limite:"Artefact de la surface corticale moyenne (fsaverage).",hidden:!0},v1:{name:"Aire visuelle V1 (cortex visuel primaire)",en:"Primary visual area V1",group:"cortex",lobe:"occipital",color:"#f5d11d",desc:"Situ\xE9e tout \xE0 l'arri\xE8re du lobe occipital (p\xF4le occipital). Premi\xE8re zone corticale atteinte par les messages nerveux issus des yeux (via le nerf optique et le thalamus).",role:"Re\xE7oit l'information visuelle brute (luminosit\xE9, orientation des traits) transmise par les yeux. Une l\xE9sion de V1 entra\xEEne une c\xE9cit\xE9 corticale (perte de la vision dans la zone correspondante), m\xEAme si les yeux sont intacts.",limite:"D\xE9limitation adapt\xE9e au sch\xE9ma p\xE9dagogique des aires visuelles V1\u2013V5.",hidden:!0},v2:{name:"Aire visuelle V2 (aire secondaire \u2014 relais)",en:"Visual area V2",group:"cortex",lobe:"occipital",color:"#f59e42",desc:"Couronne entourant l'aire V1 dans le lobe occipital. Elle re\xE7oit les signaux de V1 et les distribue vers les aires sp\xE9cialis\xE9es V3, V4 et V5.",role:"Analyse les contours et oriente chaque type d'information visuelle (formes, couleurs, mouvements) vers les aires V3, V4 et V5.",limite:"D\xE9limitation adapt\xE9e au sch\xE9ma p\xE9dagogique des aires visuelles V1\u2013V5.",hidden:!0},v3:{name:"Aire visuelle V3 (reconnaissance des formes)",en:"Visual area V3 (forms)",group:"cortex",lobe:"occipital",color:"#3898d4",desc:"Zone sup\xE9rieure et post\xE9rieure du cortex occipital (en bleu sur le document 4). C'est la zone touch\xE9e par la l\xE9sion du patient B (Doc. 2 & 3).",role:"Analyse et reconna\xEEt les formes g\xE9om\xE9triques et les contours des objets. Une l\xE9sion de V3 emp\xEAche d'identifier les formes (patient B : barre les mauvaises formes au test de Benson), bien que les yeux et les couleurs restent per\xE7us.",limite:"D\xE9limitation adapt\xE9e au sch\xE9ma p\xE9dagogique des aires visuelles V1\u2013V5.",hidden:!0},v4:{name:"Aire visuelle V4 (perception des couleurs)",en:"Visual area V4 (color)",group:"cortex",lobe:"occipital",color:"#8cc63f",desc:"Zone inf\xE9rieure \xE0 la jonction occipito-temporale, juste au-dessus du cervelet (en vert sur le document 4). C'est la zone touch\xE9e par la l\xE9sion du patient A (Doc. 1 & 3).",role:"Traite et reconstitue les couleurs des objets vus. Une l\xE9sion de V4 provoque une achromatopsie c\xE9r\xE9brale (perte de la vision des couleurs : le patient A dessine la pomme et les feuilles en teintes gris\xE2tres/ternes).",limite:"D\xE9limitation adapt\xE9e au sch\xE9ma p\xE9dagogique des aires visuelles V1\u2013V5.",hidden:!0},v5:{name:"Aire visuelle V5 / MT (perception du mouvement)",en:"Visual area V5 / MT (motion)",group:"cortex",lobe:"temporal",color:"#e04636",desc:"Petite r\xE9gion situ\xE9e \xE0 la jonction temporo-occipitale lat\xE9rale (en rouge sur le document 4).",role:"D\xE9tecte la direction et la vitesse des objets en mouvement. Une l\xE9sion de V5 provoque une akin\xE9topsie : le patient per\xE7oit les formes et les couleurs mais voit les mouvements comme une suite d'images fixes saccad\xE9es.",limite:"D\xE9limitation adapt\xE9e au sch\xE9ma p\xE9dagogique des aires visuelles V1\u2013V5.",hidden:!0},cortex_neutre:{name:"Reste du cortex c\xE9r\xE9bral (hors aires visuelles)",en:"Non-visual cortex",group:"cortex",lobe:null,color:"#ddd6cb",desc:"R\xE9gions corticales non directement cibl\xE9es dans l'exercice sur la vision.",role:"Les lobes frontal, pari\xE9tal et temporal non visuels assurent d'autres fonctions (motricit\xE9, toucher, audition, langage) et restent neutres sur ce mod\xE8le simplifi\xE9.",limite:"",hidden:!0},cervelet_neutre:{name:"Cervelet (rep\xE8re anatomique)",en:"Cerebellum",group:"cervelet",color:"#c29688",desc:"Structure situ\xE9e sous le lobe occipital (rep\xE8re anatomique identique aux sch\xE9mas de l'exercice).",role:"\xC9quilibre et coordination des mouvements (hors l\xE9sion visuelle dans l'exercice).",limite:"",hidden:!0},tronc_neutre:{name:"Tronc c\xE9r\xE9bral (rep\xE8re anatomique)",en:"Brainstem",group:"tronc",color:"#e2dcd3",desc:"Relais entre le cerveau et la moelle \xE9pini\xE8re.",role:"Rep\xE8re anatomique du sch\xE9ma de profil.",limite:"",hidden:!0},hippocampe:{name:"Hippocampe",en:"Hippocampus",group:"profond",color:"#f2c14e",desc:"Structure enroul\xE9e \xE0 l'int\xE9rieur du lobe temporal, en forme d'hippocampe (le poisson).",role:"Indispensable pour former de nouveaux souvenirs d'\xE9v\xE9nements et de faits ; les souvenirs sont ensuite consolid\xE9s dans des r\xE9seaux du cortex, notamment pendant le sommeil.",limite:""},amygdale:{name:"Amygdale",en:"Amygdala",group:"profond",color:"#e4572e",desc:"Petit noyau en forme d'amande, \xE0 l'avant de l'hippocampe, dans le lobe temporal.",role:"D\xE9tecte rapidement ce qui est important pour nous (danger mais aussi r\xE9compense) et d\xE9clenche des r\xE9actions du corps. Elle travaille en r\xE9seau avec le cortex pr\xE9frontal, qui la module.",limite:""},thalamus:{name:"Thalamus",en:"Thalamus",group:"profond",color:"#76b7b2",desc:"Gros noyau au centre du cerveau, de chaque c\xF4t\xE9 du 3e ventricule.",role:"Relais et filtre des messages sensoriels (sauf l'odorat) vers le cortex.",limite:""},caude:{name:"Noyau caud\xE9",en:"Caudate nucleus",group:"profond",color:"#4e79a7",desc:"Noyau en forme de virgule, qui longe le ventricule lat\xE9ral. Fait partie du striatum.",role:"Apprentissage des habitudes et des actions dirig\xE9es vers un but.",limite:""},putamen:{name:"Putamen",en:"Putamen",group:"profond",color:"#5f8fc4",desc:"Noyau situ\xE9 en dehors du pallidum. Fait partie du striatum.",role:"Apprentissage et automatisation des gestes (savoir-faire moteurs).",limite:""},pallidum:{name:"Pallidum (globus pallidus)",en:"Globus pallidus",group:"profond",color:"#9c755f",desc:"Noyau interne aux putamen.",role:"Sortie inhibitrice (GABA) des noyaux gris centraux : \xAB freine \xBB ou \xAB lib\xE8re \xBB les mouvements.",limite:""},accumbens:{name:"Noyau accumbens",en:"Nucleus accumbens",group:"profond",color:"#ff9da7",desc:"Petit noyau \xE0 l'avant du striatum, sous la t\xEAte du noyau caud\xE9.",role:"Carrefour de la motivation : re\xE7oit la dopamine venant de l'aire tegmentale ventrale. Les drogues et certaines conduites addictives d\xE9tournent ce circuit.",limite:""},hypothalamus:{name:"Hypothalamus",en:"Hypothalamus",group:"profond",color:"#edc948",desc:"Petite r\xE9gion sous le thalamus, au-dessus de l'hypophyse.",role:"R\xE9gule faim, soif, temp\xE9rature, sommeil, stress (axe hormonal du stress) et comportements de reproduction.",limite:""},ventricule:{name:"Ventricule lat\xE9ral",en:"Lateral ventricle",group:"profond",color:"#9fd0e8",desc:"Cavit\xE9 remplie de liquide c\xE9r\xE9brospinal.",role:"Produit et fait circuler le liquide qui prot\xE8ge et nourrit le cerveau.",limite:""},corps_calleux:{name:"Corps calleux",en:"Corpus callosum",group:"profond",color:"#e8e2d0",desc:"Large faisceau de fibres nerveuses (substance blanche) qui relie les deux h\xE9misph\xE8res.",role:"Permet aux deux h\xE9misph\xE8res d'\xE9changer des informations.",limite:"Forme approxim\xE9e \xE0 partir de la substance blanche m\xE9diane du template MNI."},vta:{name:"Aire tegmentale ventrale (ATV / VTA)",en:"Ventral tegmental area",group:"tronc",color:"#ff6f91",desc:"Petit groupe de neurones au sommet du tronc c\xE9r\xE9bral (m\xE9senc\xE9phale).",role:"Source de la dopamine du circuit de la motivation (vers le noyau accumbens et le cortex pr\xE9frontal).",limite:""},substance_noire:{name:"Substance noire",en:"Substantia nigra",group:"tronc",color:"#6b5b95",desc:"Noyau du m\xE9senc\xE9phale, riche en neurones \xE0 dopamine.",role:"Envoie de la dopamine au striatum pour faciliter le mouvement (sa d\xE9g\xE9n\xE9rescence cause la maladie de Parkinson).",limite:""},locus_coeruleus:{name:"Locus coeruleus",en:"Locus coeruleus",group:"tronc",color:"#3b8ea5",desc:"Minuscule noyau bleut\xE9 du tronc c\xE9r\xE9bral (pont).",role:"Source de la noradr\xE9naline du cerveau : vigilance, alerte, r\xE9action au stress.",limite:"Position approximative (petite capsule) : le noyau est trop petit pour l'atlas utilis\xE9.",approx:!0},raphe:{name:"Noyaux du raph\xE9",en:"Raphe nuclei",group:"tronc",color:"#c06c84",desc:"Colonne de noyaux sur la ligne m\xE9diane du tronc c\xE9r\xE9bral.",role:"Source de la s\xE9rotonine : humeur, sommeil, app\xE9tit.",limite:"Position approximative (capsule sch\xE9matique).",approx:!0},pag:{name:"Substance grise p\xE9riaqueducale (SGPA)",en:"Periaqueductal gray",group:"tronc",color:"#f08a5d",desc:"Substance grise autour de l'aqueduc, dans le m\xE9senc\xE9phale.",role:"D\xE9clenche des r\xE9actions de survie (fuite, immobilisation, cris) et module la douleur.",limite:"Position approximative (capsule sch\xE9matique).",approx:!0},meynert:{name:"Noyau basal de Meynert",en:"Nucleus basalis of Meynert",group:"profond",color:"#59a14f",desc:"Groupe de neurones sous le striatum (\xAB cerveau ant\xE9rieur basal \xBB).",role:"Source principale de l'ac\xE9tylcholine du cortex : attention, apprentissage.",limite:"Position approximative (capsule sch\xE9matique).",approx:!0},tronc:{name:"Tronc c\xE9r\xE9bral",en:"Brainstem",group:"tronc",color:"#b07aa1",desc:"Relie le cerveau \xE0 la moelle \xE9pini\xE8re (m\xE9senc\xE9phale, pont, bulbe).",role:"Fonctions vitales (respiration, rythme cardiaque), \xE9veil ; passage de tous les messages entre cerveau et moelle \xE9pini\xE8re.",limite:"La moelle \xE9pini\xE8re et les nerfs ne sont pas repr\xE9sent\xE9s dans cet atlas."},cervelet:{name:"Cervelet",en:"Cerebellum",group:"cervelet",color:"#86bcb6",desc:"Structure pliss\xE9e sous le lobe occipital, en arri\xE8re du tronc c\xE9r\xE9bral.",role:"Coordination et pr\xE9cision des mouvements, \xE9quilibre, apprentissage des gestes.",limite:"Surface liss\xE9e : les fines lamelles (folia) ne sont pas repr\xE9sent\xE9es."}},Jd=[null,{id:"vis",name:"R\xE9seau visuel",en:"Visual network",color:"#9b59b6",desc:"Traite les informations visuelles."},{id:"smn",name:"R\xE9seau somatomoteur",en:"Somatomotor network",color:"#4a90d9",desc:"Commander les mouvements et sentir son corps : cortex moteur et somesth\xE9sique travaillent ensemble."},{id:"dan",name:"R\xE9seau de l'attention dorsale",en:"Dorsal attention network",color:"#2ca02c",desc:"Orienter volontairement son attention vers un objet ou un endroit."},{id:"sal",name:"R\xE9seau de saillance",en:"Salience / ventral attention network",color:"#d62ab5",desc:"Rep\xE8re ce qui est important (inattendu, \xE9motionnel) et fait basculer l'attention."},{id:"lim",name:"R\xE9seau limbique",en:"Limbic network",color:"#d9c45a",desc:"Faces inf\xE9rieures frontale et temporale : valeur des r\xE9compenses, \xE9motions."},{id:"fpn",name:"R\xE9seau de contr\xF4le fronto-pari\xE9tal",en:"Frontoparietal control network",color:"#f39c34",desc:"Planifier, r\xE9soudre un probl\xE8me, garder une consigne en t\xEAte."},{id:"dmn",name:"R\xE9seau du mode par d\xE9faut",en:"Default mode network",color:"#d64541",desc:"Actif quand on pense \xE0 soi, aux autres, quand on se souvient ou qu'on imagine l'avenir."}],wo={glutamate:{name:"Glutamate",type:"exc",color:"#3fb6ff",desc:"Principal neurotransmetteur excitateur : il \xAB active \xBB le neurone suivant. Exemples de voies : thalamus \u2192 cortex, cortex \u2192 striatum, hippocampe \u2192 cortex pr\xE9frontal.",routes:[["thalamus","somesthesique"],["thalamus","visuel"],["thalamus","moteur"],["prefrontal","caude"],["moteur","putamen"],["hippocampe","pfc_median"],["moteur","tronc"]]},gaba:{name:"GABA",type:"inh",color:"#ff7a59",desc:"Principal neurotransmetteur inhibiteur : il \xAB freine \xBB le neurone suivant. Exemples : striatum \u2192 pallidum \u2192 thalamus (contr\xF4le du mouvement).",routes:[["putamen","pallidum"],["caude","pallidum"],["pallidum","thalamus"],["caude","substance_noire"],["accumbens","vta"]]},dopamine:{name:"Dopamine",type:"mod",color:"#ff4f8b",desc:"Signal de la motivation et de l'apprentissage par la r\xE9compense (\xAB vouloir \xBB, plus que \xAB aimer \xBB), et de la facilitation du mouvement. Voies : ATV \u2192 accumbens (m\xE9solimbique), ATV \u2192 pr\xE9frontal (m\xE9socorticale), substance noire \u2192 striatum. Cible commune des drogues stimulantes.",routes:[["vta","accumbens"],["vta","pfc_median"],["vta","prefrontal"],["substance_noire","putamen"],["substance_noire","caude"]]},serotonine:{name:"S\xE9rotonine",type:"mod",color:"#b78cff",desc:"Module l'humeur, le sommeil, l'app\xE9tit. Les noyaux du raph\xE9 envoient des fibres vers presque tout le cerveau.",routes:[["raphe","prefrontal"],["raphe","hippocampe"],["raphe","amygdale"],["raphe","caude"],["raphe","cervelet"],["raphe","cingulaire_ant"]]},noradrenaline:{name:"Noradr\xE9naline",type:"mod",color:"#3fd0b0",desc:"Vigilance et alerte : le locus coeruleus \xAB r\xE9veille \xBB tout le cerveau en cas de danger ou de surprise (c\u0153ur qui acc\xE9l\xE8re, muscles pr\xEAts).",routes:[["locus_coeruleus","prefrontal"],["locus_coeruleus","hippocampe"],["locus_coeruleus","amygdale"],["locus_coeruleus","thalamus"],["locus_coeruleus","cervelet"],["locus_coeruleus","parietal"]]},acetylcholine:{name:"Ac\xE9tylcholine",type:"mod",color:"#9ad94f",desc:"Attention et apprentissage dans le cerveau (noyau basal de Meynert \u2192 cortex). C'est aussi le neurotransmetteur de la jonction neurone\u2013muscle.",routes:[["meynert","prefrontal"],["meynert","parietal"],["meynert","temporal"],["meynert","hippocampe"],["meynert","amygdale"]]},histamine:{name:"Histamine",type:"mod",color:"#ffd23f",desc:"Maintient l'\xE9veil (d'o\xF9 la somnolence caus\xE9e par certains antihistaminiques). Source : hypothalamus post\xE9rieur.",routes:[["hypothalamus","prefrontal"],["hypothalamus","thalamus"],["hypothalamus","cingulaire_ant"],["hypothalamus","hippocampe"]]},orexine:{name:"Orexine",type:"mod",color:"#ff9f1c",desc:"Stabilise l'\xE9veil et l'app\xE9tit ; active les autres syst\xE8mes d'\xE9veil (locus coeruleus, raph\xE9, ATV). Source : hypothalamus lat\xE9ral.",routes:[["hypothalamus","locus_coeruleus"],["hypothalamus","raphe"],["hypothalamus","vta"],["hypothalamus","prefrontal"]]},vision_integration:{name:"Int\xE9gration visuelle (V1 \u2192 V2 \u2192 V3 + V4 + V5)",type:"exc",color:"#3fb6ff",hidden:!0,desc:"Flux de messages nerveux reliant le thalamus (relais des yeux), l'aire primaire V1, le relais V2, puis en parall\xE8le V3 (formes), V4 (couleurs) et V5 (mouvement), qui coop\xE8rent pour construire une vision globale.",routes:[["thalamus","v1"],["v1","v2"],["v2","v3"],["v2","v4"],["v2","v5"],["v3","v4"],["v3","v5"],["v4","v5"]]}},Co={seeking:{name:"RECHERCHE (SEEKING)",valence:"agr\xE9able",color:"#ff4f8b",desc:"Envie d'explorer, curiosit\xE9, motivation \xE0 obtenir quelque chose. Circuit de la dopamine : hypothalamus lat\xE9ral \u2192 aire tegmentale ventrale \u2192 noyau accumbens \u2192 cortex pr\xE9frontal m\xE9dian. C'est ce circuit que les drogues et les conduites addictives d\xE9tournent.",structures:["hypothalamus","vta","accumbens","pfc_median","orbitofrontal"],circuit:[["hypothalamus","vta"],["vta","accumbens"],["accumbens","pfc_median"],["vta","pfc_median"]]},fear:{name:"PEUR (FEAR)",valence:"d\xE9sagr\xE9able",color:"#e4572e",desc:"R\xE9action \xE0 un danger : l'amygdale d\xE9clenche l'alerte, l'hypothalamus et la substance grise p\xE9riaqueducale (SGPA) d\xE9clenchent les r\xE9actions du corps (fuite, immobilisation, c\u0153ur qui bat vite). Le cortex pr\xE9frontal m\xE9dian peut moduler cette alarme.",structures:["amygdale","hypothalamus","pag","pfc_median"],circuit:[["amygdale","hypothalamus"],["hypothalamus","pag"],["amygdale","pag"],["pfc_median","amygdale"]]},rage:{name:"COL\xC8RE (RAGE)",valence:"d\xE9sagr\xE9able",color:"#c0392b",desc:"R\xE9action \xE0 une frustration ou une contrainte. Circuit amygdale m\xE9diane \u2192 hypothalamus \u2192 SGPA.",structures:["amygdale","hypothalamus","pag"],circuit:[["amygdale","hypothalamus"],["hypothalamus","pag"]]},lust:{name:"D\xC9SIR SEXUEL (LUST)",valence:"agr\xE9able",color:"#e86fb0",desc:"D\xE9sir et plaisir li\xE9s \xE0 la reproduction. Les messages des r\xE9cepteurs sensoriels (toucher) arrivent au cortex somesth\xE9sique ; l'hypothalamus, l'amygdale et le circuit de la r\xE9compense participent \xE0 la sensation de plaisir.",structures:["hypothalamus","amygdale","somesthesique","insula","accumbens","vta"],circuit:[["amygdale","hypothalamus"],["hypothalamus","pag"],["vta","accumbens"],["somesthesique","insula"]]},care:{name:"SOIN (CARE)",valence:"agr\xE9able",color:"#f2a65a",desc:"Tendresse, envie de prendre soin des autres (attachement parent\u2013enfant, amiti\xE9). Hypothalamus (aire pr\xE9optique), aire tegmentale ventrale, noyau accumbens, cortex cingulaire ant\xE9rieur.",structures:["hypothalamus","vta","accumbens","cingulaire_ant"],circuit:[["hypothalamus","vta"],["vta","accumbens"],["cingulaire_ant","hypothalamus"]]},panic:{name:"D\xC9TRESSE (PANIC/GRIEF)",valence:"d\xE9sagr\xE9able",color:"#5b7db1",desc:"Tristesse et d\xE9tresse de la s\xE9paration (sentiment de solitude). Cortex cingulaire ant\xE9rieur \u2192 thalamus/hypothalamus \u2192 SGPA.",structures:["cingulaire_ant","thalamus","hypothalamus","pag"],circuit:[["cingulaire_ant","thalamus"],["thalamus","hypothalamus"],["hypothalamus","pag"]]},play:{name:"JEU (PLAY)",valence:"agr\xE9able",color:"#2bb673",desc:"Joie du jeu social, du rire, des jeux de bagarre \xAB pour de faux \xBB. Thalamus, SGPA, cortex somesth\xE9sique (toucher) et circuit de la r\xE9compense.",structures:["thalamus","pag","somesthesique","accumbens","pfc_median"],circuit:[["pag","thalamus"],["thalamus","somesthesique"],["thalamus","accumbens"],["accumbens","pfc_median"]]}}});var fc,Zd=Ht(()=>{fc={tag:{name:"Trouble anxieux g\xE9n\xE9ralis\xE9 (TAG)",short:"Anxi\xE9t\xE9 persistante",level:"B",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"Dans les mod\xE8les neurobiologiques de l'anxi\xE9t\xE9 chronique, le circuit d'alarme (amygdale, insula) est hyper-r\xE9actif, tandis que la r\xE9gulation par le cortex pr\xE9frontal m\xE9dian (\xAB frein \xBB) est moins efficace.",up:["amygdale","insula","locus_coeruleus"],down:["pfc_median","cingulaire_ant"],lenses:{circuit:"Amygdale et insula en suractivation (\u2191 alerte corporelle) ; frein du cortex pr\xE9frontal m\xE9dian et du cortex cingulaire ant\xE9rieur affaibli (\u2193 r\xE9gulation).",etudes:"M\xE9ta-analyses d'IRMf montrent en moyenne une r\xE9activit\xE9 accrue de l'amygdale face aux stimuli ambigus et une connectivit\xE9 pr\xE9fronto-amygdalienne r\xE9duite (niveau B : coh\xE9rent entre groupes, grande variabilit\xE9 individuelle).",symptomes:"Inqui\xE9tudes difficiles \xE0 contr\xF4ler, tension musculaire, vigilance excessive, fatigue, troubles du sommeil.",traitements:"Th\xE9rapies cognitivo-comportementales (TCC \u2014 entra\xEEnent la r\xE9gulation pr\xE9frontale), hygi\xE8ne du sommeil, parfois m\xE9dicaments agissant sur la s\xE9rotonine ou le GABA."}},tspt:{name:"Trouble de stress post-traumatique (TSPT)",short:"Stress post-traumatique",level:"A",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"Apr\xE8s un traumatisme, l'alarme (amygdale) reste en hypervigilance (\u2191), l'hippocampe contextualise moins bien la m\xE9moire du souvenir (\u2193 volume/fonction en moyenne), et le cortex pr\xE9frontal m\xE9dian peine \xE0 \xE9teindre la peur apprise (\u2193).",up:["amygdale","locus_coeruleus","insula"],down:["pfc_median","hippocampe"],lenses:{circuit:"Amygdale \u2191 (alerte imm\xE9diate), cortex pr\xE9frontal m\xE9dian \u2193 (extinction de la peur frein\xE9e), hippocampe \u2193 (difficult\xE9 \xE0 replacer le souvenir dans le pass\xE9 s\xE9curis\xE9).",etudes:"Mod\xE8le parmi les mieux r\xE9pliqu\xE9s en neuroimagerie clinique (niveau A pour le profil amygdale/pr\xE9frontal m\xE9dian, bien qu'aucun examen IRM ne permette un diagnostic individuel).",symptomes:"Reviviscences (flash-backs), \xE9vitement, hypervigilance, r\xE9actions de sursaut intenses.",traitements:"Psychoth\xE9rapies centr\xE9es sur le trauma (TCC, EMDR) pour retraiter le souvenir en s\xE9curit\xE9 ; accompagnement m\xE9dical si n\xE9cessaire."}},addiction:{name:"Circuit de la motivation d\xE9tourn\xE9 (addiction)",short:"D\xE9pendance (substance / comportement)",level:"A",disclaimer:"Note : dans The Folded Mind, l'addiction n'est pas list\xE9e dans les 10 diagnostics ; ce mod\xE8le illustre la voie dopamine / SEEKING conforme au programme de 3\xE8me.",circuitDesc:"Les drogues ou r\xE9compenses al\xE9atoires provoquent des pics anormaux de dopamine dans le noyau accumbens (depuis l'ATV). Avec la r\xE9p\xE9tition, le circuit se modifie (plasticit\xE9) : le \xAB vouloir \xBB augmente alors que le contr\xF4le pr\xE9frontal diminue (\u2193).",up:["vta","accumbens","caude","putamen"],down:["pfc_median","orbitofrontal"],lenses:{circuit:"Voie m\xE9solimbique ATV \u2192 noyau accumbens sur-sollicit\xE9e (\u2191 \xAB vouloir \xBB et conditionnement), striatum dorsal recrut\xE9 (habitudes automatiques), contr\xF4le orbitofrontal/pr\xE9frontal r\xE9duit (\u2193 frein sur l'impulsion).",etudes:"Neurobiologie de la d\xE9pendance solidement \xE9tablie chez l'animal et l'humain par imagerie TEP/IRM (niveau A sur le r\xF4le de la dopamine dans la saillance incitative : vouloir \u2260 aimer).",symptomes:"Perte de contr\xF4le, poursuite du comportement malgr\xE9 les cons\xE9quences n\xE9gatives, besoin irr\xE9pressible (craving), tol\xE9rance.",traitements:"Pr\xE9vention (lois limitant l'exposition des mineurs), accompagnement psychosocial, th\xE9rapies, substituts ou traitements m\xE9dicamenteux selon les substances."}},depression:{name:"\xC9pisode d\xE9pressif caract\xE9ris\xE9 (mod\xE8le circuit)",short:"D\xE9pression (mod\xE8le)",level:"B",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"R\xE9activit\xE9 moindre du circuit de la r\xE9compense (noyau accumbens \u2193 : perte de plaisir/motivation) et activit\xE9 \xE9lev\xE9e du r\xE9seau du mode par d\xE9faut / cortex cingulaire ant\xE9rieur sous-g\xE9nual (\u2191 ruminations).",up:["cingulaire_ant","cingulaire_post","amygdale"],down:["accumbens","prefrontal"],lenses:{circuit:"Noyau accumbens \u2193 (anh\xE9donie, baisse de l'\xE9lan), cortex cingulaire ant\xE9rieur et r\xE9seau par d\xE9faut \u2191 (ruminations), cortex pr\xE9frontal dorsolat\xE9ral \u2193 (effort cognitif plus difficile).",etudes:"R\xE9sultats convergents sur les circuits r\xE9compense/ruminations (niveau B : les m\xE9canismes sont multiples et h\xE9t\xE9rog\xE8nes selon les personnes).",symptomes:"Tristesse persistante, perte d'int\xE9r\xEAt, fatigue, troubles du sommeil et de la concentration.",traitements:"Psychoth\xE9rapies, activit\xE9 physique r\xE9guli\xE8re, traitements antid\xE9presseurs (modulant s\xE9rotonine/noradr\xE9naline) et soutien social."}},tdah:{name:"Trouble du d\xE9ficit de l'attention (TDAH)",short:"TDAH (mod\xE8le)",level:"B",disclaimer:"Mod\xE8le p\xE9dagogique simplifi\xE9 : ne sert jamais \xE0 poser un diagnostic.",circuitDesc:"Particularit\xE9s de maturation et de modulation dopaminergique/noradr\xE9nergique dans les r\xE9seaux fronto-striataux (cortex pr\xE9frontal \u2194 noyau caud\xE9) et difficult\xE9 \xE0 mettre en veille le r\xE9seau du mode par d\xE9faut.",up:["cingulaire_post"],down:["prefrontal","caude","locus_coeruleus"],lenses:{circuit:"Boucles cortex pr\xE9frontal \u2013 noyau caud\xE9 \u2013 cervelet moins stabilis\xE9es (\u2193 r\xE9gulation attentionnelle) ; maintien du r\xE9seau de contr\xF4le plus exigeant face aux distractions.",etudes:"\xC9tudes longitudinales d'IRM structurelle et fonctionnelle \xE0 large cohorte (niveau B : diff\xE9rences statistiques de groupe, inutilisables comme test diagnostique individuel).",symptomes:"Difficult\xE9 \xE0 maintenir l'attention, impulsivit\xE9, agitation motrice selon les profils.",traitements:"Am\xE9nagements scolaires et comportementaux, accompagnement \xE9ducatif, parfois traitements modulant dopamine et noradr\xE9naline."}}}});function pc(i){return new Ie(i)}var Kv,Uo,$d=Ht(()=>{Mo();qd();Qd();Fo();Zd();Kv=new D(0,0,1);Uo=class{constructor(e,t,n,s={}){this.canvas=e,this.brainData=t,this.mri=n,this.cb=s,this.state={theme:"light",deep:!1,hemiMode:"both",colorMode:"regions",activeNetwork:0,isolatedKey:null,hoveredPart:null,activePathway:null,activeRouteIdx:-1,activeSystem:null,activeClinical:null,visionLesions:null,visionHideAreaColors:!1,mriOpen:!1,mriAxis:"sag",mriPosMm:[24,-22,6],mriClip:!1,mriOverlay:!0},this._initRenderer(),this._initScene(),this._buildBrainMeshes(),this._initMriPlane(),this._bindEvents(),this.flyAnim=null,this.paused=!1,this.clock=new nr,this.pathwayGroup=new xn,this.brainRoot.add(this.pathwayGroup),this.lesionGroup=new xn,this.brainRoot.add(this.lesionGroup),this.lesionMeshes=[],this.particles=[],this.routeMeshes=[],this.routeEndpoints=[],this.brainData.isVisionModel&&(this.visionAnchors=this._computeVisionAnchors()),this._applyMaterials(),this._animate()}_initRenderer(){let e=new bo({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=Pt,e.toneMapping=rr,e.toneMappingExposure=1.06,e.localClippingEnabled=!0,this.renderer=e;let t=new cs(e);this.envTex=t.fromScene(new To,.04).texture,t.dispose()}_initScene(){let e=new bi;e.environment=this.envTex,this.scene=e;let t=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight,s=new Lt(34,t/n,1,1600);this.camera=s;let r=new Ro(s,this.canvas);r.enableDamping=!0,r.dampingFactor=.08,r.rotateSpeed=.78,r.zoomSpeed=.9,r.minDistance=95,r.maxDistance=600,this.controls=r;let a=new $s(16185599,2502205,.55);e.add(a);let o=new Si(16775149,1.35);o.position.set(-140,180,120),e.add(o);let c=new Si(14149375,.55);c.position.set(160,40,-130),e.add(c);let l=new Si(12176639,.75);l.position.set(40,-120,160),e.add(l);let d=new xn;d.rotation.x=-Math.PI/2,e.add(d),this.brainRoot=d,this.centerMni=new D(0,-16,4),this.centerWorld=new D(0,4,16),r.target.copy(this.centerWorld),s.position.set(-335,28,22),r.update(),this.clipPlane=new Xt(new D(-1,0,0),0)}_buildBrainMeshes(){this.parts=[],this.partsByKey=new Map;let e=new cn;for(let t of this.brainData.parts){let n=new Nt;n.setAttribute("position",new yt(t.positions,3)),n.setAttribute("normal",new yt(t.normals,3)),n.setIndex(new yt(t.indices,1));let s=new Float32Array(t.nv*3);n.setAttribute("color",new yt(s,3));let r=t.shade;if(t.key==="cervelet"){r=new Float32Array(t.nv);for(let u=0;u<t.nv;u++){let h=t.positions[u*3+1],f=t.positions[u*3+2],x=.9+.1*Math.sin(f*1.45+h*.35);r[u]=t.shade[u]*x}}let a=t.kind!=="cortex"&&t.kind!=="medial",o=t.kind==="medial"||t.key==="insula"||t.key==="pfc_median",c=new Ki({vertexColors:!0,roughness:a?.34:.48,metalness:.02,clearcoat:a?.42:.22,clearcoatRoughness:.36,envMapIntensity:.68,side:o?Wt:_n}),l=new Ki({vertexColors:!0,transparent:!0,opacity:.14,depthWrite:!1,roughness:.22,metalness:0,clearcoat:.55,clearcoatRoughness:.25,envMapIntensity:.55,side:o?Wt:_n}),d=new st(n,c);d.userData.partRef=t,this.brainRoot.add(d);let p={...t,geom:n,colors:s,effectiveShade:r,solidMat:c,ghostMat:l,mesh:d,isDeep:a,centerVec:new D(...t.center)};this.parts.push(p),this.partsByKey.has(t.key)||this.partsByKey.set(t.key,[]),this.partsByKey.get(t.key).push(p),t.kind!=="medial"&&(e.expandByPoint(new D(...t.min)),e.expandByPoint(new D(...t.max)))}e.getCenter(this.centerMni),this.centerWorld.set(this.centerMni.x,this.centerMni.z,-this.centerMni.y),this.controls.target.copy(this.centerWorld),this.camera.position.set(this.centerWorld.x-335,this.centerWorld.y+22,this.centerWorld.z+12),this.controls.update(),this._recolorVertices()}_recolorVertices(){let e=this.state.colorMode,t=this.state.activeNetwork,n=new Ie,s=new Ie("#8f97a4"),r=Jd.map(a=>a?new Ie(a.color):s);for(let a of this.parts){let o=Jt[a.key]||{color:"#99a2b0",lobe:null},c=this.state.visionHideAreaColors&&/^v[1-5]$/.test(a.key),l=pc(c?"#ddd6cb":o.color);e==="lobes"&&o.lobe&&hc[o.lobe]&&(l=pc(hc[o.lobe].color));let d=a.colors,p=a.effectiveShade;if(e==="networks"&&a.net)for(let u=0;u<a.nv;u++){let h=a.net[u],f=h>0&&(t===0||t===h)?r[h]:s,x=t>0&&h!==t?.52:1,m=p[u]*x;d[u*3]=f.r*m,d[u*3+1]=f.g*m,d[u*3+2]=f.b*m}else{let u=e==="networks"&&!a.net?s:l,h=e==="networks"&&!a.net?.55:1;for(let f=0;f<a.nv;f++){let x=p[f]*h;d[f*3]=u.r*x,d[f*3+1]=u.g*x,d[f*3+2]=u.b*x}}a.geom.attributes.color.needsUpdate=!0,n.copy(l)}}_applyMaterials(){let e=this.state,t=e.theme==="light",n=e.isolatedKey?.08:e.deep?.14:.12,s=e.isolatedKey?.11:.16,r=e.activeClinical?fc[e.activeClinical]:null,a=e.activeSystem?Co[e.activeSystem]:null,o=e.colorMode==="networks"&&e.activeNetwork>0,c=!!(e.activePathway||a||r),l=e.hemiMode!=="onlyR",d=e.hemiMode!=="onlyL",p=e.mriOpen&&e.mriClip?[this.clipPlane]:[];for(let u of this.parts){if(u.hemi==="L"&&!l){u.mesh.visible=!1;continue}if(u.hemi==="R"&&!d){u.mesh.visible=!1;continue}u.key==="paroi_mediane"&&e.hemiMode==="both"&&e.isolatedKey,u.mesh.visible=!0;let h=!0,f=!1;if(e.isolatedKey)h=u.key===e.isolatedKey;else if(r)h=r.up.includes(u.key)||r.down.includes(u.key);else if(a){let m=a.structures.includes(u.key);h=m&&u.isDeep,f=m&&!u.isDeep}else if(e.activePathway){let m=wo[e.activePathway],E=new Set(m.routes.flat()).has(u.key);e.activePathway==="vision_integration"?h=E:(h=E&&u.isDeep,f=E&&!u.isDeep)}else o?h=u.kind==="cortex":e.deep&&(h=u.isDeep);if(u.key==="paroi_mediane"&&(e.deep||e.isolatedKey||c||o)){u.mesh.visible=!1;continue}let x=this.brainData.isVisionModel&&(u.key==="cortex_neutre"||u.key==="cervelet_neutre"||u.key==="tronc_neutre");if(h){u.mesh.material=u.solidMat,u.mesh.renderOrder=0;let m=!x&&e.hoveredPart&&e.hoveredPart.key===u.key,g=e.isolatedKey===u.key;u.solidMat.emissive.setHex(g?2497090:m?1975606:0),u.solidMat.emissiveIntensity=g?.45:m?.55:0,u.solidMat.clippingPlanes=p,u.solidMat.needsUpdate=!0}else{u.mesh.material=u.ghostMat,u.mesh.renderOrder=1;let m=this.brainData.isVisionModel&&x?e.isolatedKey?.22:.16:u.isDeep?s:n;u.ghostMat.opacity=f?.34:m,u.ghostMat.color.setHex(f?16777215:t?13161186:11715552),u.ghostMat.emissive.setHex(t?4544632:2899034),u.ghostMat.emissiveIntensity=f?.08:t?.12:.22,u.ghostMat.clippingPlanes=p,u.ghostMat.needsUpdate=!0}}}_rebuildPathways(){for(;this.pathwayGroup.children.length;){let h=this.pathwayGroup.children[0];this.pathwayGroup.remove(h),h.geometry&&h.geometry.dispose(),h.material&&h.material.dispose()}this.particles=[],this.routeMeshes=[],this.routeEndpoints=[];let e=this.state.activePathway,t=this.state.activeSystem,n=[],s="mod",r="#ae8cff";if(e&&wo[e]){let h=wo[e];n=h.routes,s=h.type,r=h.color}else if(t&&Co[t]){let h=Co[t];n=h.circuit,s="mod",r=h.color}else return;let a=new Ie(r),o=this.state.hemiMode!=="onlyR",c=this.state.hemiMode!=="onlyL",l=(h,f)=>{let x=this.partsByKey.get(h)||[],m=this.partsByKey.get(f)||[],g=[];for(let E of x)if(!(E.hemi==="L"&&!o||E.hemi==="R"&&!c))for(let A of m)A.hemi==="L"&&!o||A.hemi==="R"&&!c||E.hemi!=="M"&&A.hemi!=="M"&&E.hemi!==A.hemi||g.push([E,A]);return g},d=new ai(1.55,12,12),p=new qs(1.85,.44,10,22),u=new ai(1.35,10,10);n.forEach(([h,f],x)=>{let m=this.state.activeRouteIdx===x,g=this.state.activeRouteIdx>=0&&!m,E=l(h,f);for(let[A,M]of E){let R=A.centerVec,S=M.centerVec,v=R.clone().add(S).multiplyScalar(.5),b=v.clone().sub(this.centerMni);b.lengthSq()<1&&b.set(0,0,1),b.normalize();let B=R.distanceTo(S);v.addScaledVector(b,Math.min(18,B*.24));let C=new ji([R.clone(),v,S.clone()]),P=new Qs(C,28,m?.85:.48,8,!1),X=new Gn({color:a,transparent:!0,opacity:g?.14:m?.85:.42,depthWrite:!1}),H=new st(P,X);if(H.userData.routeIdx=x,this.pathwayGroup.add(H),this.routeMeshes.push(H),m&&this.routeEndpoints.push({text:Jt[h]?.name||h,posMni:R.clone(),color:r},{text:Jt[f]?.name||f,posMni:S.clone(),color:r}),g)continue;let F=m?5:3,U=s==="exc"?d:s==="inh"?p:u;for(let L=0;L<F;L++){let V=new Gn({color:s==="inh"?16752762:s==="exc"?8378623:a,transparent:!0,opacity:.95});s==="mod"&&V.color.lerp(new Ie("#ffffff"),.28);let q=new st(U,V);this.pathwayGroup.add(q),this.particles.push({mesh:q,curve:C,type:s,phase:L/F+x*.17%1,speed:s==="exc"?.48:s==="inh"?.34:.38})}}})}_initMriPlane(){let e=new Nt;e.setAttribute("position",new yt(new Float32Array(12),3)),e.setAttribute("uv",new yt(new Float32Array([0,0,1,0,1,1,0,1]),2)),e.setIndex([0,1,2,0,2,3]),this.mriCanvas=document.createElement("canvas"),this.mriTex=new Os(this.mriCanvas),this.mriTex.colorSpace=Pt,this.mriTex.flipY=!1,this.mriTex.minFilter=Ct,this.mriTex.magFilter=Ct;let t=new Gn({map:this.mriTex,side:Wt,transparent:!0,opacity:.94,toneMapped:!1});this.mriMesh=new st(e,t),this.mriMesh.visible=!1,this.mriMesh.renderOrder=0;let n=new Nt;n.setAttribute("position",new yt(new Float32Array(15),3));let s=new Yi({color:11439359,transparent:!0,opacity:.7});this.mriFrame=new Ns(n,s),this.mriFrame.visible=!1,this.brainRoot.add(this.mriMesh),this.brainRoot.add(this.mriFrame)}_updateMriPlane(){let e=this.state.mriOpen;if(this.mriMesh.visible=e,this.mriFrame.visible=e,!e)return;let{shape:t,origin:n,vox:s,t1:r,lab:a,labels:o}=this.mri,[c,l,d]=t,[p,u,h]=n,[f,x,m]=this.state.mriPosMm,g=this.state.mriAxis,E=(V,q,k)=>Math.max(q,Math.min(k,V)),A=E(Math.round((f-p)/s),0,c-1),M=E(Math.round((x-u)/s),0,l-1),R=E(Math.round((m-h)/s),0,d-1),S=0,v=0,b=new Float32Array(12);if(g==="ax"){S=c,v=l;let V=h+R*s,q=p-.5*s,k=p+(c-.5)*s,Q=u-.5*s,$=u+(l-.5)*s;b.set([q,Q,V,k,Q,V,k,$,V,q,$,V])}else if(g==="cor"){S=c,v=d;let V=u+M*s,q=p-.5*s,k=p+(c-.5)*s,Q=h-.5*s,$=h+(d-.5)*s;b.set([q,V,Q,k,V,Q,k,V,$,q,V,$])}else{S=l,v=d;let V=p+A*s,q=u-.5*s,k=u+(l-.5)*s,Q=h-.5*s,$=h+(d-.5)*s;b.set([V,q,Q,V,k,Q,V,k,$,V,q,$])}this._updateClipPlane();let B=this.mriMesh.geometry.attributes.position;B.array.set(b),B.needsUpdate=!0;let C=this.mriFrame.geometry.attributes.position.array;C.set(b,0),C[12]=b[0],C[13]=b[1],C[14]=b[2],this.mriFrame.geometry.attributes.position.needsUpdate=!0,this.mriCanvas.width=S,this.mriCanvas.height=v;let P=this.mriCanvas.getContext("2d"),X=P.createImageData(S,v),H=X.data,F=o.map(V=>{if(!V)return null;let q=V.replace(/_[LR]$/,""),k=Jt[q];if(!k)return null;let Q=pc(k.color);return[Math.round(Q.r*255),Math.round(Q.g*255),Math.round(Q.b*255),q]}),U=this.state.mriOverlay,L=this.state.isolatedKey;for(let V=0;V<v;V++)for(let q=0;q<S;q++){let k=A,Q=M,$=R;g==="ax"?(k=q,Q=V):g==="cor"?(k=q,$=V):(Q=q,$=V);let le=k+c*(Q+l*$),te=r[le],O=a[le],ee=(V*S+q)*4;if(te<12&&O===0){H[ee]=0,H[ee+1]=0,H[ee+2]=0,H[ee+3]=0;continue}let ie=te,ye=te,re=te;if(U&&O>0&&F[O]){let[we,He,xe,We]=F[O],Oe=L&&We===L?.62:L?.12:.34;ie=Math.round(ie*(1-Oe)+we*Oe),ye=Math.round(ye*(1-Oe)+He*Oe),re=Math.round(re*(1-Oe)+xe*Oe)}H[ee]=ie,H[ee+1]=ye,H[ee+2]=re,H[ee+3]=242}P.putImageData(X,0,0),this.mriTex.needsUpdate=!0}_bindEvents(){this.raycaster=new tr,this.pointer=new Ee;let e=null,t=0,n=r=>{let a=this.canvas.getBoundingClientRect();this.pointer.x=(r.clientX-a.left)/a.width*2-1,this.pointer.y=-((r.clientY-a.top)/a.height)*2+1},s=()=>{if(this.raycaster.setFromCamera(this.pointer,this.camera),this.lesionMeshes.length){let o=this.raycaster.intersectObjects(this.lesionMeshes,!1);if(o.length)return o[0].object.userData.partRef}let r=this.parts.filter(o=>o.mesh.visible&&(!this.state.deep||o.isDeep||this.state.isolatedKey===o.key)).map(o=>o.mesh),a=this.raycaster.intersectObjects(r,!1);if(a.length)return a[0].object.userData.partRef;if(this.state.deep){let o=this.parts.filter(l=>l.mesh.visible&&l.key!=="paroi_mediane").map(l=>l.mesh),c=this.raycaster.intersectObjects(o,!1);if(c.length)return c[0].object.userData.partRef}return null};this.canvas.addEventListener("pointerdown",r=>{e={x:r.clientX,y:r.clientY}}),this.canvas.addEventListener("pointermove",r=>{n(r);let a=s();if(a!==this.state.hoveredPart){this.state.hoveredPart=a;let o=this.brainData.isVisionModel&&a&&(a.key==="cortex_neutre"||a.key==="cervelet_neutre"||a.key==="tronc_neutre");this.canvas.classList.toggle("pointer",!!(a&&!o)),this._applyMaterials()}this.cb.onHover&&this.cb.onHover(a,r.clientX,r.clientY)}),this.canvas.addEventListener("pointerup",r=>{if(!e)return;let a=Math.hypot(r.clientX-e.x,r.clientY-e.y);if(e=null,a>6)return;let o=performance.now();if(o-t<310){t=0,this.isolate(null);return}t=o,n(r);let c=s();if(c){if(this.brainData.isVisionModel&&(c.key==="cortex_neutre"||c.key==="cervelet_neutre"||c.key==="tronc_neutre")){this.state.isolatedKey&&this.isolate(null),this.cb.onSelectStructure?.(c.key,c);return}this.isolate(c.key===this.state.isolatedKey?null:c.key,c)}else this.state.isolatedKey&&this.isolate(null)}),this.canvas.addEventListener("pointerleave",()=>{this.state.hoveredPart&&(this.state.hoveredPart=null,this._applyMaterials()),this.cb.onHover&&this.cb.onHover(null,0,0)}),window.addEventListener("resize",()=>this.resize())}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}setTheme(e){this.state.theme=e,this._applyMaterials()}setDeep(e){this.state.deep=!!e,this._applyMaterials(),this.cb.onStateChange?.(this.state)}setHemiMode(e){this.state.hemiMode=e,this._applyMaterials(),this._rebuildPathways(),this.cb.onStateChange?.(this.state)}flipSide(){if(this.state.hemiMode==="onlyR")this.setHemiMode("onlyL"),this.setView("lat_R");else if(this.state.hemiMode==="onlyL")this.setHemiMode("onlyR"),this.setView("lat_L");else{let e=this.camera.position.x<this.centerWorld.x;this.setView(e?"lat_R":"lat_L")}}setColorMode(e,t=0){this.state.colorMode=e,this.state.activeNetwork=t,e==="networks"&&(this.state.activePathway=null,this.state.activeSystem=null,this.state.activeClinical=null,this.state.isolatedKey=null,this.state.deep=!1,this._rebuildPathways()),this._recolorVertices(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}isolate(e,t=null){this.state.isolatedKey=e||null,this._applyMaterials(),this.state.mriOpen&&this._updateMriPlane(),this.cb.onSelectStructure?.(this.state.isolatedKey,t),this.cb.onStateChange?.(this.state)}_computeVisionAnchors(){let e={v1:{y:-96,z:-6,maxX:-16},v2:{y:-90,z:4,maxX:-24},v3:{y:-79,z:12,maxX:-28},v4:{y:-66,z:-14,maxX:-30},v5:{y:-51,z:4,maxX:-44}},t={};for(let[n,s]of Object.entries(e)){let r=(this.partsByKey.get(n)||[]).find(c=>c.hemi==="L");if(!r)continue;let a=1/0,o=new D(...r.center);for(let c=0;c<r.nv;c++){let l=r.positions[c*3],d=r.positions[c*3+1],p=r.positions[c*3+2];if(l>s.maxX)continue;let u=(d-s.y)*(d-s.y)+(p-s.z)*(p-s.z)+l*.45;u<a&&(a=u,o.set(l,d,p))}t[n]=o}return t.v4&&(t.lesionA=t.v4.clone().add(new D(-1.4,0,0))),t.v3&&(t.lesionB=t.v3.clone().add(new D(-1.4,0,0))),t}setVisionHideAreaColors(e){let t=!!e;this.state.visionHideAreaColors!==t&&(this.state.visionHideAreaColors=t,this._recolorVertices())}setVisionLesions(e){for(this.state.visionLesions=e||null;this.lesionGroup.children.length;){let n=this.lesionGroup.children[0];this.lesionGroup.remove(n),n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}if(this.lesionMeshes=[],!e||!this.visionAnchors){this.cb.onStateChange?.(this.state);return}let t=[];(e==="both"||e==="A")&&this.visionAnchors.lesionA&&t.push({lesionId:"A",key:"v4",name:"L\xE9sion Patient A (Aire V4 \xB7 Couleurs)",pos:this.visionAnchors.lesionA,r:5.8}),(e==="both"||e==="B")&&this.visionAnchors.lesionB&&t.push({lesionId:"B",key:"v3",name:"L\xE9sion Patient B (Aire V3 \xB7 Formes)",pos:this.visionAnchors.lesionB,r:7.4});for(let n of t){let s=new ai(n.r,22,22),r=new Wn({color:15018784,emissive:14230811,emissiveIntensity:.45,roughness:.32,transparent:!0,opacity:.92}),a=new st(s,r);a.position.copy(n.pos),a.userData.partRef={key:n.key,lesionId:n.lesionId,isLesionMarker:!0,name:n.name},this.lesionGroup.add(a),this.lesionMeshes.push(a);let o=new ai(n.r*1.28,22,22),c=new Gn({color:16730942,transparent:!0,opacity:.24,depthWrite:!1}),l=new st(o,c);l.position.copy(n.pos),l.userData.isHalo=!0,this.lesionGroup.add(l)}this.cb.onStateChange?.(this.state)}setPathway(e,t=-1){this.state.activePathway=e||null,this.state.activeRouteIdx=t,e&&(this.state.activeSystem=null,this.state.activeClinical=null),this._rebuildPathways(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setSystem(e){this.state.activeSystem=e||null,this.state.activeRouteIdx=-1,e&&(this.state.activePathway=null,this.state.activeClinical=null),this._rebuildPathways(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setClinical(e){this.state.activeClinical=e||null,e&&(this.state.activePathway=null,this.state.activeSystem=null,this._rebuildPathways()),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setMri(e={}){if(e.open!==void 0&&(this.state.mriOpen=e.open),e.axis&&(this.state.mriAxis=e.axis),e.sliceMm!==void 0){let t=this.state.mriAxis==="sag"?0:this.state.mriAxis==="cor"?1:2;this.state.mriPosMm[t]=e.sliceMm}e.posMm&&(this.state.mriPosMm=[...e.posMm]),e.clip!==void 0&&(this.state.mriClip=e.clip),e.overlay!==void 0&&(this.state.mriOverlay=e.overlay),this._updateMriPlane(),this._applyMaterials(),this.cb.onStateChange?.(this.state)}setView(e){let t=this.centerWorld,n=335,s=new D(-n,20,12);if(e==="lat_L")s.set(-n,16,10);else if(e==="lat_R")s.set(n,16,10);else if(e==="mri_34")s.set(n*.72,62,-n*.62);else if(e==="medial"){this.state.hemiMode==="both"&&this.setHemiMode("onlyR");let a=this.state.hemiMode==="onlyL"?1:-1;s.set(a*(n*.92),16,6)}else e==="sup"?s.set(0,n,16):e==="inf"?s.set(0,-n,16):e==="ant"?s.set(0,14,-n):e==="post"?s.set(0,14,n):e==="reset"&&(this.state.deep=!1,this.state.isolatedKey=null,this.state.activePathway=null,this.state.activeSystem=null,this.state.activeClinical=null,this.state.visionLesions=null,this.state.visionHideAreaColors=!1,this.state.colorMode="regions",this.state.activeNetwork=0,this.state.hemiMode="both",this.state.mriOpen=!1,this.state.mriClip=!1,this._recolorVertices(),this._rebuildPathways(),this.setVisionLesions(null),this._updateMriPlane(),this._applyMaterials(),this.cb.onSelectStructure?.(null),this.cb.onStateChange?.(this.state),s.set(-n,22,12));let r=t.clone().add(s);this.flyAnim={t0:performance.now(),dur:420,from:this.camera.position.clone(),to:r}}applyAction(e){e&&(e.hideVisualColors!==void 0&&this.setVisionHideAreaColors(e.hideVisualColors),e.lesions!==void 0&&this.setVisionLesions(e.lesions),e.hemiMode&&this.setHemiMode(e.hemiMode),e.hideLeft!==void 0&&this.setHemiMode(e.hideLeft?"onlyR":"both"),e.deep!==void 0&&this.setDeep(e.deep),e.colorMode!==void 0?this.setColorMode(e.colorMode,e.network||0):e.network!==void 0&&this.setColorMode(e.network>0?"networks":"regions",e.network),e.isolate!==void 0&&this.isolate(e.isolate),e.pathway!==void 0&&this.setPathway(e.pathway),e.system!==void 0&&this.setSystem(e.system),e.clinical!==void 0&&this.setClinical(e.clinical),e.mri!==void 0&&this.setMri(e.mri),e.view&&this.setView(e.view),e.flipSide&&this.flipSide())}capturePng(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}projectMniToScreen(e){let t=e.clone().applyMatrix4(this.brainRoot.matrixWorld);t.project(this.camera);let n=this.canvas.clientWidth,s=this.canvas.clientHeight;return{x:(t.x*.5+.5)*n,y:(-t.y*.5+.5)*s,visible:t.z<1}}_updateClipPlane(){let[e,t,n]=this.state.mriPosMm,s=this.state.mriAxis;if(s==="ax"){let r=this.camera.position.y>=n;this.clipPlane.normal.set(0,r?-1:1,0),this.clipPlane.constant=r?n:-n}else if(s==="cor"){let r=this.camera.position.z<=-t;this.clipPlane.normal.set(0,0,r?1:-1),this.clipPlane.constant=r?t:-t}else{let r=this.camera.position.x>=e;this.clipPlane.normal.set(r?-1:1,0,0),this.clipPlane.constant=r?e:-e}}focusMriOn(e){let t=this.partsByKey.get(e);if(!t||!t.length)return;let n=t.find(s=>this.state.hemiMode==="onlyR"?s.hemi!=="L":!0)||t[0];this.setMri({open:!0,posMm:n.center.map(s=>Math.round(s))})}_animate(){requestAnimationFrame(()=>this._animate());let e=Math.min(this.clock.getDelta(),.05);if(this.paused)return;let t=performance.now();if(this.flyAnim){let n=Math.min(1,(t-this.flyAnim.t0)/this.flyAnim.dur),s=1-Math.pow(1-n,3);this.camera.position.lerpVectors(this.flyAnim.from,this.flyAnim.to,s),n>=1&&(this.flyAnim=null)}if(this.controls.update(),this.particles.length){let n=new D;for(let s of this.particles)s.phase=(s.phase+e*s.speed)%1,s.curve.getPointAt(s.phase,s.mesh.position),s.type==="inh"&&(s.curve.getTangentAt(s.phase,n),s.mesh.quaternion.setFromUnitVectors(Kv,n))}if(this.state.activeClinical){let n=fc[this.state.activeClinical],s=t*.005,r=.5+.5*Math.sin(s*1.6),a=.5+.5*Math.sin(s*.7);for(let o of this.parts)!o.mesh.visible||o.mesh.material!==o.solidMat||(n.up.includes(o.key)?(o.solidMat.emissive.setHex(14235678),o.solidMat.emissiveIntensity=.25+.55*r):n.down.includes(o.key)&&(o.solidMat.emissive.setHex(2980036),o.solidMat.emissiveIntensity=.18+.35*a))}if(this.state.visionLesions&&this.lesionGroup.children.length){let n=.5+.5*Math.sin(t*.005);for(let s of this.lesionGroup.children)if(s.userData.isHalo){let r=.96+.14*n;s.scale.set(r,r,r),s.material.opacity=.14+.16*n}else s.material&&s.material.emissiveIntensity!==void 0&&(s.material.emissiveIntensity=.3+.42*n)}this.state.mriOpen&&this.state.mriClip&&this._updateClipPlane(),this.renderer.render(this.scene,this.camera),this.cb.onFrame?.()}}});function ex(i){let e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}var Vo,Yd=Ht(()=>{Fo();Vo=class{constructor(e,t,n,s={}){this.root=e,this.mri=t,this.brain=n,this.cb=s,this.lutRgb=this.mri.labels.map(r=>{if(!r)return null;let a=r.replace(/_[LR]$/,""),o=Jt[a];return o?[...ex(o.color),a]:null}),this.renderShell()}renderShell(){this.root.innerHTML=`
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
    `,this.cv={ax:this.root.querySelector("#cvAx"),cor:this.root.querySelector("#cvCor"),sag:this.root.querySelector("#cvSag")},this.lbl={coords:this.root.querySelector("#mriCoords"),ax:this.root.querySelector("#mmAx"),cor:this.root.querySelector("#mmCor"),sag:this.root.querySelector("#mmSag"),readout:this.root.querySelector("#mriReadout")};let e=this.root.querySelector("#chkMriOverlay"),t=this.root.querySelector("#chkMriClip");e.checked=this.brain.state.mriOverlay,t.checked=this.brain.state.mriClip,e.addEventListener("change",()=>this.brain.setMri({overlay:e.checked})),t.addEventListener("change",()=>this.brain.setMri({clip:t.checked}));for(let n of["ax","cor","sag"]){let s=this.cv[n],r=!1,a=(o,c)=>{let l=s.getBoundingClientRect(),d=Math.max(0,Math.min(.999,(o.clientX-l.left)/l.width)),p=Math.max(0,Math.min(.999,(o.clientY-l.top)/l.height)),{shape:u,origin:h,vox:f}=this.mri,[x,m,g]=u,[E,A,M]=h,R=[...this.brain.state.mriPosMm];if(n==="ax"?(R[0]=Math.round(E+Math.floor(d*x)*f),R[1]=Math.round(A+Math.floor((1-p)*m)*f)):n==="cor"?(R[0]=Math.round(E+Math.floor(d*x)*f),R[2]=Math.round(M+Math.floor((1-p)*g)*f)):(R[1]=Math.round(A+Math.floor(d*m)*f),R[2]=Math.round(M+Math.floor((1-p)*g)*f)),this.brain.setMri({open:!0,axis:n,posMm:R}),c){let S=this._labelAtMm(R);S&&this.brain.isolate(S)}};s.addEventListener("pointerdown",o=>{r=!0,s.setPointerCapture(o.pointerId),a(o,!0)}),s.addEventListener("pointermove",o=>{r&&a(o,!1)}),s.addEventListener("pointerup",()=>{r=!1})}}_mmToIjk([e,t,n]){let{shape:s,origin:r,vox:a}=this.mri,o=(c,l)=>Math.max(0,Math.min(l-1,c));return[o(Math.round((e-r[0])/a),s[0]),o(Math.round((t-r[1])/a),s[1]),o(Math.round((n-r[2])/a),s[2])]}_labelAtMm(e){let[t,n,s]=this._mmToIjk(e),[r,a]=this.mri.shape,o=this.mri.lab[t+r*(n+a*s)];if(!o)return null;let c=this.mri.labels[o];return c?c.replace(/_[LR]$/,""):null}update(){let e=this.root.querySelector("#chkMriOverlay"),t=this.root.querySelector("#chkMriClip");e&&(e.checked=this.brain.state.mriOverlay),t&&(t.checked=this.brain.state.mriClip);let n=this.brain.state.mriPosMm,[s,r,a]=this._mmToIjk(n),[o,c,l]=this.mri.shape;this.lbl.coords.textContent=`x=${n[0]} \xB7 y=${n[1]} \xB7 z=${n[2]} mm`,this.lbl.ax.textContent=`${n[2]} mm`,this.lbl.cor.textContent=`${n[1]} mm`,this.lbl.sag.textContent=`${n[0]} mm`,this.root.querySelectorAll(".mri-view").forEach(u=>{u.classList.toggle("active",u.dataset.axis===this.brain.state.mriAxis)});let d=this._labelAtMm(n),p=d&&Jt[d];this.lbl.readout.innerHTML=p?`Sous le r\xE9ticule : <strong>${p.name}</strong> <span class="muted">(${p.en})</span>`:"Sous le r\xE9ticule : substance blanche / liquide / hors masque",this._drawSlice("ax",o,c,s,r,a,["G","D","A","P"]),this._drawSlice("cor",o,l,s,r,a,["G","D","S","I"]),this._drawSlice("sag",c,l,s,r,a,["P","A","S","I"])}_drawSlice(e,t,n,s,r,a,o){let c=this.cv[e];(c.width!==t||c.height!==n)&&(c.width=t,c.height=n);let l=c.getContext("2d"),d=l.createImageData(t,n),p=d.data,{shape:u,t1:h,lab:f}=this.mri,[x,m,g]=u,E=this.brain.state.mriOverlay,A=this.brain.state.isolatedKey;for(let S=0;S<n;S++)for(let v=0;v<t;v++){let b=s,B=r,C=a;e==="ax"?(b=v,B=m-1-S):e==="cor"?(b=v,C=g-1-S):(B=v,C=g-1-S);let P=b+x*(B+m*C),X=h[P],H=f[P],F=X,U=X,L=X;if(E&&H>0&&this.lutRgb[H]){let[q,k,Q,$]=this.lutRgb[H],le=A&&$===A?.65:A?.14:.36;F=Math.round(F*(1-le)+q*le),U=Math.round(U*(1-le)+k*le),L=Math.round(L*(1-le)+Q*le)}let V=(S*t+v)*4;p[V]=F,p[V+1]=U,p[V+2]=L,p[V+3]=255}l.putImageData(d,0,0);let M=e==="sag"?r+.5:s+.5,R=e==="ax"?m-1-r+.5:g-1-a+.5;l.strokeStyle="rgba(174, 140, 255, 0.85)",l.lineWidth=1,l.beginPath(),l.moveTo(M,0),l.lineTo(M,n),l.moveTo(0,R),l.lineTo(t,R),l.stroke(),l.font="bold 9px monospace",l.fillStyle="rgba(235, 240, 250, 0.78)",l.fillText(o[0],3,n/2+3),l.fillText(o[1],t-9,n/2+3),l.fillText(o[2],t/2-3,9),l.fillText(o[3],t/2-3,n-3)}}});var jd,Kd,eh=Ht(()=>{jd={A1:{id:"A1",code:"A1",niveau:"5e",semaine:"S\xE9ance 1\u20132",duree:"45 min",titre:"Effort sportif et neuromythe des \xAB 10 % du cerveau \xBB",type:"D\xE9marche d'investigation \xB7 Esprit critique",accroche:"Une vid\xE9o virale sur TikTok pr\xE9tend que \xAB les champions utilisent plus que les 10 % habituels de leur cerveau \xBB. Dans sa chronique Canal D\xE9tox, l'Inserm d\xE9monte cette id\xE9e re\xE7ue gr\xE2ce \xE0 l'imagerie et au bilan \xE9nerg\xE9tique.",sourceAccroche:"Inserm Canal D\xE9tox ; sujet DNB M\xE9tropole 2018 (18GENSCMEAG3)",problematique:"Comment les syst\xE8mes nerveux, cardiaque et respiratoire collaborent-ils lors d'un effort \u2014 et utilise-t-on vraiment \xAB seulement 10 % \xBB de notre cerveau ?",obstacle:"Croire que seul le muscle travaille pendant le sport et que 90 % du cerveau reste \xAB \xE9teint \xBB au repos.",rupture:"Le cerveau repr\xE9sente ~2 % de la masse du corps mais consomme ~20 % de son \xE9nergie, et m\xEAme un effort simple coordonne plusieurs r\xE9gions c\xE9r\xE9brales, le c\u0153ur et les poumons.",vocab:[{term:"Syst\xE8me nerveux",def:"Ensemble form\xE9 par le cerveau, la moelle \xE9pini\xE8re et les nerfs qui coordonne le corps."},{term:"Rythme cardiaque",def:"Nombre de battements du c\u0153ur par minute (bpm), qui augmente \xE0 l\u2019effort."},{term:"Cortex moteur",def:"Zone du lobe frontal qui d\xE9clenche les mouvements volontaires des muscles."},{term:"Cervelet",def:"Organe situ\xE9 \xE0 l\u2019arri\xE8re qui assure l\u2019\xE9quilibre et la pr\xE9cision des gestes."}],docs:[{num:"Doc. 1",title:"Un organisme mobilis\xE9 pendant une course",type:"tableau",source:"DNB M\xE9tropole 2018 (18GENSCMEAG3) \u2014 Mesures sur tapis roulant",text:"Pour alimenter les muscles en dioxyg\xE8ne et en glucose pendant l'effort, le syst\xE8me nerveux adapte automatiquement le c\u0153ur et les poumons.",table:{headers:["Situation","Rythme cardiaque","Besoin musculaire"],rows:[["Repos avant la course","70 bpm","Faible (apport de base)"],["Effort maximal sur tapis","180 bpm","Tr\xE8s \xE9lev\xE9 (O\u2082 + glucose)"]]},legend:"Le c\u0153ur passe de 70 \xE0 180 battements/min sous le contr\xF4le des centres nerveux."},{num:"Doc. 2",title:"Le co\xFBt \xE9nerg\xE9tique r\xE9el du cerveau",type:"texte",source:"Inserm Canal D\xE9tox & CNRS (neuroimagerie)",text:"Le cerveau ne p\xE8se qu'environ 2 % de la masse totale du corps (~1,35 kg chez l'adulte), mais il consomme \xE0 lui seul pr\xE8s de 20 % du dioxyg\xE8ne et du glucose utilis\xE9s par l'organisme, m\xEAme lorsque nous sommes immobiles ou endormis. Si 90 % du cerveau \xE9tait inutile, aucune l\xE9sion \xE9tendue n'aurait d'effet, ce que d\xE9ment la m\xE9decine.",legend:"Un organe aussi \xE9nergivore travaille en permanence en r\xE9seaux distribu\xE9s."},{num:"Doc. 3",title:"Observer les r\xE9gions actives lors d\u2019un geste sportif",type:"3d",source:"Atlas 3D MNI152 (IRM & parcellation c\xE9r\xE9brale)",text:"Pendant une course ou un dribble, le cortex moteur (lobe frontal) envoie l'ordre aux muscles, le cortex somesth\xE9sique re\xE7oit les appuis du pied et le cervelet ajuste l'\xE9quilibre en continu.",legend:"Active les boutons 3D ci-dessus pour observer l'ensemble des zones sollicit\xE9es."}],voie1:{consigne:"Un camarade soutient que courir \xAB ne demande que des jambes \xBB et qu'on \xAB n'utilise que 10 % de son cerveau \xBB. R\xE9dige une r\xE9ponse argument\xE9e (6 \xE0 8 lignes) mobilisant les Docs 1 \xE0 3 pour corriger ces deux id\xE9es re\xE7ues.",fields:[{id:"a1_tache",label:"R\xE9ponse scientifique argument\xE9e (Docs 1, 2 et 3) :",rows:6,placeholder:"Lors d'un effort, les muscles ont besoin... (citer 70 \u2192 180 bpm, 2 % vs 20 %, et au moins deux zones c\xE9r\xE9brales)..."}]},voie2:{consigne:"R\xE9ponds dans l\u2019ordre en t\u2019appuyant sur un seul document \xE0 la fois :",fields:[{id:"a1_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Calculer l\u2019augmentation du rythme cardiaque entre le repos et l\u2019effort maximal, et indiquer pourquoi les muscles en ont besoin.",rows:2,placeholder:"De 70 bpm \xE0 180 bpm (+110 bpm), pour apporter plus de..."},{id:"a1_q2",label:"Q2 (Doc. 2 \xB7 Argumenter) : \xC0 l\u2019aide de deux valeurs chiffr\xE9es, expliquer pourquoi l\u2019affirmation \xAB 90 % du cerveau est inactif \xBB est fausse.",rows:2,placeholder:"Le cerveau p\xE8se environ 2 % du corps mais consomme 20 % de..."},{id:"a1_q3",label:"Q3 (Doc. 3 \xB7 Observer en 3D) : Citer deux structures c\xE9r\xE9brales qui coop\xE8rent pendant un mouvement sportif et leur r\xF4le.",rows:2,placeholder:"Le cortex moteur commande... et le cervelet assure..."}]},mdl:{verbeAction:"Calculer \xB7 Argumenter \xB7 Citer",marqueurs:["donc","car","en effet","en revanche"],structure:"Constat chiffr\xE9 (Doc. 1/2) \u2192 Cause biologique (O\u2082/\xE9nergie/r\xE9seaux) \u2192 R\xE9futation du mythe."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q1, fais la soustraction : valeur \xE0 l\u2019effort \u2212 valeur au repos. Pour Q2, cherche les deux pourcentages dans le texte du Doc. 2."},{niv:"Niveau 2 \xB7 Indice",txt:"Compare 2 % de la masse corporelle avec 20 % de la consommation en O\u2082 et glucose : c\u2019est 10 fois sup\xE9rieur \xE0 son poids !"},{niv:"Niveau 3 \xB7 Notion",txt:"Compl\xE8te : \xAB Pendant la course, le rythme cardiaque passe de ___ \xE0 ___ bpm pour nourrir ___. Le cerveau, qui p\xE8se ___ % du corps mais consomme ___ % de l\u2019\xE9nergie, mobilise ___ et ___ : le mythe des 10 % est donc faux. \xBB"}],avantDeRendre:["J'ai cit\xE9 les valeurs exactes des Docs 1 et 2 (70 \u2192 180 bpm ; 2 % et 20 %).","J'ai nomm\xE9 au moins deux r\xE9gions observ\xE9es en 3D (cortex moteur, cervelet).","J'ai distingu\xE9 croyance populaire (mythe des 10 %) et fait scientifique v\xE9rifi\xE9."],lsu:["D4 \xB7 Exploiter des mesures (bpm)","D1.3 \xB7 Argumenter contre une id\xE9e re\xE7ue","D3 \xB7 Relier effort et besoins des organes"]},A2:{id:"A2",code:"A2",niveau:"5e / 4e",semaine:"S\xE9ance 3\u20134",duree:"50 min",titre:"Concerts, \xE9couteurs : comment prot\xE9ger son audition ?",type:"Exploitation de donn\xE9es \xB7 \xC9ducation \xE0 la sant\xE9",accroche:"L'OMS alerte : plus d'un milliard de jeunes (12\u201335 ans) risquent une perte auditive pr\xE9matur\xE9e \xE0 cause d'\xE9couteurs r\xE9gl\xE9s trop fort ou de concerts d\xE9passant les seuils biologiques.",sourceAccroche:"OMS ; DNB Am\xE9rique du Nord juin 2018 ; DNB Pro 2022 (22PROSCMEAG1)",problematique:"Comment le cerveau transforme-t-il les sons per\xE7us en audition \u2014 et \xE0 partir de quel seuil le bruit d\xE9truit-il irr\xE9versiblement l'oreille ?",obstacle:"Penser que l'oreille \xAB s'habitue \xBB au volume \xE9lev\xE9 ou que les acouph\xE8nes finissent toujours par dispara\xEEtre sans d\xE9g\xE2t.",rupture:"L'oreille capte les vibrations gr\xE2ce \xE0 des cellules cili\xE9es qui ne se renouvellent pas ; une exposition excessive d\xE9truit ces capteurs et prive d\xE9finitivement le cortex auditif d'une partie des fr\xE9quences.",vocab:[{term:"R\xE9cepteur sensoriel",def:"Cellule sp\xE9cialis\xE9e (ici cellules cili\xE9es de l\u2019oreille) qui capte un stimulus et cr\xE9e un message nerveux."},{term:"Cortex auditif",def:"Zone du lobe temporal qui re\xE7oit et interpr\xE8te les messages nerveux des sons."},{term:"D\xE9cibel (dB)",def:"Unit\xE9 mesurant l\u2019intensit\xE9 sonore ; le seuil de risque d\xE9bute \xE0 85 dB."},{term:"L\xE9sion irr\xE9versible",def:"Destruction d\xE9finitive de cellules cili\xE9es qui ne sont pas remplac\xE9es."}],docs:[{num:"Doc. 1",title:"Du capteur sensoriel au cerveau",type:"3d",source:"Atlas 3D MNI152 \u2014 Aires sensorielles corticales",text:"Chaque organe sensoriel envoie des messages nerveux sp\xE9cifiques vers une r\xE9gion d\xE9di\xE9e du cortex : le nerf auditif relie l'oreille au cortex auditif (lobe temporal), tandis que le nerf optique relie l'\u0153il au cortex visuel (lobe occipital). Le cerveau int\xE8gre ensemble ces informations multiples.",legend:"Compare sur le mod\xE8le 3D le cortex auditif (lat\xE9ral temporal) et le cortex visuel (post\xE9rieur occipital)."},{num:"Doc. 2",title:"\xC9chelle officielle des niveaux sonores",type:"tableau",source:"OMS & sujet DNB Pro 2022 (22PROSCMEAG1)",text:"Le risque d\xE9pend \xE0 la fois du niveau sonore (en dB) et de la dur\xE9e d'\xE9coute : chaque augmentation de +3 dB double l'\xE9nergie sonore et divise par 2 la dur\xE9e tol\xE9rable sans danger.",table:{headers:["Niveau sonore","Exemple courant","Effet biologique"],rows:[["60 dB","Conversation calme","Aucun danger"],["85 dB","Trafic dense \xB7 Seuil d\u2019alerte","Seuil de risque si dur\xE9e prolong\xE9e"],["105\u2013110 dB","Concert / \xE9couteurs au max","Danger grave en quelques minutes"],["\u2265 120 dB","Seuil de douleur","L\xE9sions irr\xE9versibles imm\xE9diates"]]},legend:"Les \xE9couteurs r\xE9gl\xE9s au maximum atteignent souvent 100 \xE0 110 dB."},{num:"Doc. 3",title:"Audiogramme d\u2019un travailleur expos\xE9 au bruit (M. X, 60 ans)",type:"observation",source:"DNB Am\xE9rique du Nord juin 2018 \u2014 T\xE9moin 60 ans vs M. X (chaudronnier)",text:"Le seuil normal de perte auditive est inf\xE9rieur \xE0 20 dB. Chez un t\xE9moin de 60 ans non expos\xE9 au bruit fort, la perte \xE0 1 000 Hz n'est que d'environ 5 dB. Chez M. X (expos\xE9 sans protection), l'audition est proche du t\xE9moin dans les graves (125\u2013500 Hz), mais la perte atteint ~30 dB \xE0 1 000 Hz et s'aggrave nettement dans les aigus (2 000\u20134 000 Hz) suite \xE0 la destruction des cellules cili\xE9es.",legend:"Ouvre le document interactif \xAB Audition & Bruit \xBB pour lire la courbe compl\xE8te."}],voie1:{consigne:"Tu r\xE9diges un message de pr\xE9vention pour l'entr\xE9e d'un festival lyc\xE9en (6 \xE0 8 lignes). Explique le trajet de l'information sonore jusqu'au cerveau et justifie deux r\xE8gles de protection \xE0 l'aide des seuils et de l'audiogramme de M. X.",fields:[{id:"a2_tache",label:"Affiche argument\xE9e de pr\xE9vention auditive (Docs 1, 2 et 3) :",rows:6,placeholder:"Les sons capt\xE9s par l'oreille sont transmis... Au-dessus de 85 dB (et jusqu'\xE0 110 dB en concert), les cellules cili\xE9es..."}]},voie2:{consigne:"R\xE9ponds \xE9tape par \xE9tape en exploitant chaque document :",fields:[{id:"a2_q1",label:"Q1 (Doc. 1 \xB7 Localiser) : Nommer le lobe et la zone du cerveau qui re\xE7oivent les messages nerveux auditifs, puis indiquer par quoi ils voyagent depuis l\u2019oreille.",rows:2,placeholder:"Ils voyagent par le nerf... jusqu\u2019au cortex... situ\xE9 dans le lobe..."},{id:"a2_q2",label:"Q2 (Doc. 2 \xB7 Relever & comparer) : Citer le seuil de risque et expliquer pourquoi \xE9couter \xE0 110 dB est bien plus dangereux qu\u2019\xE0 85 dB.",rows:2,placeholder:"Le seuil de risque est 85 dB ; chaque +3 dB divise par 2..."},{id:"a2_q3",label:"Q3 (Doc. 3 \xB7 Interpr\xE9ter) : Comparer la perte \xE0 1 000 Hz de M. X et du t\xE9moin, puis expliquer pourquoi cette perte de M. X est d\xE9finitive.",rows:2,placeholder:"Le t\xE9moin perd ~5 dB contre ~30 dB pour M. X car les cellules cili\xE9es..."}]},mdl:{verbeAction:"Localiser \xB7 Comparer \xB7 Justifier",marqueurs:["tandis que","par cons\xE9quent","car","notamment"],structure:"Trajet nerf \u2192 cortex auditif + Comparaison chiffr\xE9e t\xE9moin/M. X + R\xE8gle de pr\xE9vention."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q3, compare toujours deux valeurs \xE0 la m\xEAme fr\xE9quence (1 000 Hz) avant de conclure : valeur du t\xE9moin vs valeur de M. X."},{niv:"Niveau 2 \xB7 Indice",txt:"Seuil normal = < 20 dB de perte. \xC0 1 000 Hz : t\xE9moin \u2248 5 dB (normal), M. X \u2248 30 dB (d\xE9pass\xE9 \u2192 surdit\xE9 partielle dans les aigus)."},{niv:"Niveau 3 \xB7 Notion",txt:"L\u2019oreille contient des cellules cili\xE9es qui transforment le son en message nerveux vers le lobe temporal ; d\xE9truites au-del\xE0 de 85\u2013120 dB, elles ne se renouvellent pas."}],avantDeRendre:["J'ai nomm\xE9 le nerf auditif et le cortex auditif (lobe temporal).","J'ai cit\xE9 les seuils 85 dB et 120 dB (et les valeurs 5 dB vs 30 dB \xE0 1 000 Hz).","J'ai propos\xE9 un geste concret : baisser le volume, faire des pauses ou porter des bouchons d'oreille."],lsu:["D1.3 \xB7 Lire un graphique / tableau d\u2019audiogramme","D3 \xB7 Adopter un comportement responsable pour la sant\xE9"]},A3:{id:"A3",code:"A3",niveau:"4e",semaine:"S\xE9ance 5\u20136",duree:"50 min",titre:"T\xE9l\xE9phone au volant : r\xE9flexe, commande volontaire et temps de r\xE9action",type:"Exp\xE9rimentation \xB7 S\xE9curit\xE9 routi\xE8re",accroche:"Selon la S\xE9curit\xE9 routi\xE8re, lire un SMS pendant ~5 secondes \xE0 50 km/h revient \xE0 rouler 70 \xE0 83 m\xE8tres \xAB \xE0 l'aveugle \xBB. Pourtant, chacun pense \xAB freiner tout de suite \xBB si un pi\xE9ton traverse.",sourceAccroche:"S\xE9curit\xE9 routi\xE8re France \u2014 Distracteurs au volant & alcool",problematique:"Pourquoi aucun freinage n'est-il instantan\xE9 devant un danger \u2014 et en quoi un mouvement volontaire diff\xE8re-t-il d'un r\xE9flexe ?",obstacle:"Croire que le temps de r\xE9action vaut 0 s (\xAB j'ai de bons r\xE9flexes \xBB) et confondre freinage volontaire et r\xE9flexe m\xE9dullaire.",rupture:"Tout message nerveux circule \xE0 vitesse finie de l'\u0153il aux centres nerveux puis aux muscles ; un SMS ou l'alcool saturent le traitement c\xE9r\xE9bral, contrairement au r\xE9flexe court qui passe par la moelle \xE9pini\xE8re.",vocab:[{term:"Mouvement volontaire",def:"Action d\xE9cid\xE9e apr\xE8s perception : le message traverse les cortex visuel puis moteur (cerveau)."},{term:"R\xE9flexe",def:"R\xE9ponse rapide et involontaire qui passe par la moelle \xE9pini\xE8re sans attendre l\u2019analyse du cerveau."},{term:"Moelle \xE9pini\xE8re",def:"Centre nerveux log\xE9 dans la colonne vert\xE9brale qui relaie les messages et commande les r\xE9flexes."},{term:"Temps de r\xE9action",def:"Dur\xE9e entre la perception d\u2019un danger et le d\xE9but de l\u2019action musculaire (~1 s au volant)."}],docs:[{num:"Doc. 1",title:"Donn\xE9es de la S\xE9curit\xE9 routi\xE8re sur le temps de r\xE9action",type:"tableau",source:"S\xE9curit\xE9 routi\xE8re France",text:"Un conducteur repos\xE9 met en moyenne ~1 seconde pour r\xE9agir (distance parcourue avant m\xEAme de toucher le frein : 15 m \xE0 50 km/h, 24 m \xE0 80 km/h). Les distracteurs allongent ce d\xE9lai ou d\xE9tournent le regard.",table:{headers:["Situation au volant","Impact mesur\xE9","Risque d\u2019accident"],rows:[["Conducteur sobre et attentif","Temps moyen ~1 s (15 m \xE0 50 km/h)","R\xE9f\xE9rence (\xD71)"],["Appel t\xE9l\xE9phonique","Temps de r\xE9action +46 %","\xD73"],["Lire / \xE9crire un SMS (~5 s)","Temps +37 % \xB7 70\u201383 m \xE0 l\u2019aveugle","\xD723"],["Alcool\xE9mie positive","Temps augment\xE9 d\u2019au moins +13 %","Sur-risque majeur"]]},legend:"Pendant les ~5 s d\u2019un SMS \xE0 50 km/h, aucun freinage ne peut m\xEAme commencer."},{num:"Doc. 2",title:"Comparer deux trajets nerveux en classe",type:"experience",source:"Protocole classe (test de la r\xE8gle / chronom\xE8tre visuel)",text:"Pour un arr\xEAt volontaire devant un feu rouge, le message part de l'\u0153il, rejoint le cortex visuel (analyse), puis le cortex moteur (d\xE9cision), descend par le tronc c\xE9r\xE9bral et la moelle \xE9pini\xE8re vers les nerfs moteurs du pied (~0,25 \xE0 1 s). \xC0 l'inverse, retirer sa main d'un objet br\xFBlant est un r\xE9flexe : le message va du capteur cutan\xE9 \xE0 la moelle \xE9pini\xE8re, qui renvoie aussit\xF4t l'ordre au muscle avant m\xEAme la prise de conscience.",legend:"Teste toi-m\xEAme ton temps de r\xE9action visuel dans le doc. \xAB R\xE9flexe \xBB ci-dessus."},{num:"Doc. 3",title:"Un croisement gauche\u2013droite dans le tronc c\xE9r\xE9bral",type:"3d",source:"Atlas 3D MNI152 \u2014 Commande controlat\xE9rale",text:"Les fibres motrices qui partent du cortex moteur gauche croisent la ligne m\xE9diane au niveau du tronc c\xE9r\xE9bral pour commander les muscles du c\xF4t\xE9 droit du corps (et inversement).",legend:"Observe sur l\u2019atlas 3D l\u2019h\xE9misph\xE8re moteur et son prolongement vers le tronc c\xE9r\xE9bral."}],voie1:{consigne:"Lors d'un d\xE9bat sur la s\xE9curit\xE9 \xE0 trottinette et en voiture, r\xE9dige une explication scientifique (6 \xE0 8 lignes) comparant le trajet nerveux d'un r\xE9flexe et celui d'un freinage volontaire, et explique pourquoi le SMS multiplie le risque par 23.",fields:[{id:"a3_tache",label:"Argumentaire scientifique & s\xE9curit\xE9 routi\xE8re (Docs 1, 2 et 3) :",rows:6,placeholder:"Contrairement au r\xE9flexe qui passe par la moelle \xE9pini\xE8re, freiner devant un pi\xE9ton est un mouvement volontaire..."}]},voie2:{consigne:"Suis le trajet de l\u2019information document par document :",fields:[{id:"a3_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Comparer la distance parcourue avant freinage \xE0 50 km/h avec un conducteur attentif (~1 s) puis en lisant un SMS (~5 s), et relever l\u2019impact sur le risque.",rows:2,placeholder:"\xC0 50 km/h attentif : 15 m ; pendant un SMS : 70 \xE0 83 m \xE0 l\u2019aveugle, risque \xD723..."},{id:"a3_q2",label:"Q2 (Doc. 2 \xB7 Sch\xE9matiser en cha\xEEne) : Citer dans l\u2019ordre les 4 \xE9tapes du trajet nerveux d\u2019un freinage volontaire devant un danger visuel.",rows:2,placeholder:"\u0152il (capteur) \u2192 nerf optique \u2192 cortex visuel \u2192 cortex moteur \u2192 moelle \xE9pini\xE8re \u2192 nerf moteur \u2192 muscle."},{id:"a3_q3",label:"Q3 (Docs 2 & 3 \xB7 Comparer) : Indiquer la diff\xE9rence entre ce freinage volontaire et un r\xE9flexe de retrait de la main, et pr\xE9ciser l\u2019effet du t\xE9l\xE9phone/alcool.",rows:2,placeholder:"Le r\xE9flexe ne passe que par la moelle \xE9pini\xE8re ; le t\xE9l\xE9phone et l\u2019alcool allongent le temps de traitement c\xE9r\xE9bral..."}]},mdl:{verbeAction:"Comparer \xB7 Ordonner \xB7 Justifier",marqueurs:["tandis que","au contraire","puis","par cons\xE9quent"],structure:"Cha\xEEne orient\xE9e (Capteur \u2192 Centre \u2192 Muscle) + Contraste R\xE9flexe vs Volontaire + Chiffres."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q2, suis la r\xE8gle \xAB Organe sensoriel \u2192 Nerf sensitif \u2192 Centre nerveux \u2192 Nerf moteur \u2192 Muscle effecteur \xBB."},{niv:"Niveau 2 \xB7 Indice",txt:"Attention ! En voiture, freiner en voyant un pi\xE9ton n\u2019est PAS un r\xE9flexe : c\u2019est un mouvement volontaire qui exige l\u2019\u0153il ET le cortex c\xE9r\xE9bral."},{niv:"Niveau 3 \xB7 Notion",txt:"Le SMS combine deux dangers : +37 % de temps de r\xE9action ET 5 secondes sans regarder la route (70\u201383 m \xE0 50 km/h, risque \xD723)."}],avantDeRendre:["J'ai distingu\xE9 moelle \xE9pini\xE8re (r\xE9flexe) et cortex moteur (mouvement volontaire).","J'ai cit\xE9 les valeurs de la S\xE9curit\xE9 routi\xE8re (15 m vs 70\u201383 m, \xD73, \xD723, +13 % alcool).","J'ai pr\xE9cis\xE9 le r\xF4le des nerfs comme c\xE2bles conducteurs du message nerveux."],lsu:["D4 \xB7 Exploiter des donn\xE9es statistiques","D1.3 \xB7 Ordonner un trajet fonctionnel","D3 \xB7 Comportements responsables"]},A4:{id:"A4",code:"A4",niveau:"3e",semaine:"S\xE9ance 7\u20138",duree:"50 min",titre:"Curare, anesth\xE9sie et synapse : comment communiquent les neurones ?",type:"Histoire des sciences \xB7 Changement d\u2019\xE9chelle",accroche:"En 1856, le physiologiste Claude Bernard \xE9tudie le curare, poison de fl\xE8ches paralysant en quelques secondes. Au m\xEAme moment, Golgi et Cajal s'opposent : les neurones forment-ils un r\xE9seau continu ou des cellules s\xE9par\xE9es ?",sourceAccroche:"Claude Bernard (1856) ; Prix Nobel 1906 (Golgi & Cajal) ; Lelivrescolaire.fr SVT 3e Docs 1, 5 & 7",problematique:"Comment le message nerveux passe-t-il d'un neurone \xE0 un autre (ou \xE0 un muscle) \u2014 et comment des mol\xE9cules comme le curare peuvent-elles le bloquer ?",obstacle:"Imaginer les nerfs comme des c\xE2bles \xE9lectriques continus o\xF9 rien ne s'interpose d'une cellule \xE0 l'autre.",rupture:"\xC0 l'\xE9chelle de ~20 nanom\xE8tres, les neurones sont s\xE9par\xE9s par une fente synaptique : la transmission est chimique (neurotransmetteurs + r\xE9cepteurs), ce qui explique comment une mol\xE9cule peut la bloquer ou la mimer.",vocab:[{term:"Neurone",def:"Cellule sp\xE9cialis\xE9e du syst\xE8me nerveux qui conduit et transmet les messages nerveux."},{term:"Synapse",def:"Zone de jonction (~20 nm) s\xE9parant deux neurones ou un neurone et une fibre musculaire."},{term:"Neurotransmetteur",def:"Messager chimique lib\xE9r\xE9 dans la fente synaptique (ex. glutamate, GABA, dopamine)."},{term:"R\xE9cepteur sp\xE9cifique",def:"Prot\xE9ine de la cellule suivante sur laquelle se fixe le neurotransmetteur."}],docs:[{num:"Doc. 1",title:"Controverse Golgi vs Cajal et microscopie \xE9lectronique",type:"observation",source:"Prix Nobel de m\xE9decine (25 oct. 1906) & MEB Lelivrescolaire.fr Doc. 5",text:"Camillo Golgi pensait que les cellules nerveuses fusionnaient en un r\xE9seau continu ; Santiago Ram\xF3n y Cajal montra au microscope qu'il s'agissait de cellules ind\xE9pendantes (neurones). La microscopie \xE9lectronique a confirm\xE9 qu'une fente synaptique de ~20 nm s\xE9pare deux neurones, avec des v\xE9sicules c\xF4t\xE9 \xE9metteur.",legend:"Le message \xE9lectrique dans le neurone ne peut donc pas \xAB sauter \xBB directement la fente."},{num:"Doc. 2",title:"Exp\xE9rience historique de Claude Bernard sur le curare",type:"experience",source:"Claude Bernard (1856) sur nerf sciatique + muscle de grenouille",text:"On isole un muscle reli\xE9 \xE0 son nerf sciatique chez une grenouille pr\xE9par\xE9e, puis on applique du curare \xE0 trois endroits distincts avant de stimuler :",table:{headers:["Zone mise en contact avec le curare","Zone stimul\xE9e","Contraction du muscle"],rows:[["1. Nerf seul (muscle \xE9pargn\xE9)","Nerf","Oui (normale)"],["2. Muscle baign\xE9 (jonction atteinte)","Nerf","Non (paralysie)"],["3. Muscle baign\xE9 (jonction atteinte)","Muscle directement","Oui (normale)"]]},legend:"Utilise le simulateur \xAB Synapse \xBB (Mol\xE9cule X) pour visualiser l\u2019action \xE0 20 nm."},{num:"Doc. 3",title:"Excitation et inhibition dans les r\xE9seaux c\xE9r\xE9braux",type:"3d",source:"Atlas 3D \u2014 Voies Glutamate & GABA",text:"Dans le cerveau, selon le type de neurotransmetteur et son r\xE9cepteur, une synapse peut activer le neurone suivant (ex. glutamate) ou le freiner (ex. GABA). De nombreux anesth\xE9siques chirurgicaux ciblent pr\xE9cis\xE9ment ces jonctions synaptiques pour interrompre la douleur ou le tonus musculaire.",legend:"Compare les voies Glutamate et GABA en 3D pour passer de l\u2019\xE9chelle macro \xE0 l\u2019\xE9chelle cellulaire."}],voie1:{consigne:"\xC0 l'aide des r\xE9sultats de Claude Bernard (Doc. 2) et des donn\xE9es microscopiques (Docs 1 et 3), r\xE9dige un texte argument\xE9 (6 \xE0 8 lignes) expliquant o\xF9 et comment agit le curare \xE0 l'\xE9chelle de la synapse.",fields:[{id:"a4_tache",label:"Explication du m\xE9canisme cellulaire et mol\xE9culaire (Docs 1, 2 et 3) :",rows:6,placeholder:"Les essais 1 et 3 montrent que le nerf et le muscle restent intacts... Le curare agit donc \xE0 l\u2019\xE9chelle de la synapse..."}]},voie2:{consigne:"Passe de l\u2019observation microscopique au raisonnement exp\xE9rimental :",fields:[{id:"a4_q1",label:"Q1 (Doc. 1 \xB7 Conclure) : Quelle observation prouve que l\u2019hypoth\xE8se de Cajal (neurones s\xE9par\xE9s) l\u2019emporte sur celle de Golgi ?",rows:2,placeholder:"La microscopie \xE9lectronique montre une fente synaptique de ~20 nm..."},{id:"a4_q2",label:"Q2 (Doc. 2 \xB7 Interpr\xE9ter) : En comparant les trois essais de Claude Bernard, d\xE9montrer que le curare n\u2019ab\xEEme ni le nerf ni le muscle mais bloque leur jonction.",rows:3,placeholder:"Essai 1 : le nerf conduit toujours ; Essai 3 : le muscle se contracte ; Essai 2 : le passage nerf \u2192 muscle est bloqu\xE9..."},{id:"a4_q3",label:"Q3 (Docs 2 & 3 \xB7 Mod\xE9liser) : Expliquer le r\xF4le du neurotransmetteur et du r\xE9cepteur dans le blocage par le curare (mol\xE9cule X du simulateur).",rows:2,placeholder:"Le curare se fixe sur les r\xE9cepteurs sans les activer, emp\xEAchant le neurotransmetteur..."}]},mdl:{verbeAction:"Interpr\xE9ter \xB7 D\xE9montrer \xB7 Mod\xE9liser",marqueurs:["alors que","donc","cependant","en revanche"],structure:"Analyse des 3 t\xE9moins/essais \u2192 D\xE9duction du site d\u2019action \u2192 Explication mol\xE9culaire (r\xE9cepteur)."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Pour Q2, exploite chaque essai s\xE9par\xE9ment : que v\xE9rifie l\u2019essai 1 sur le nerf ? Que v\xE9rifie l\u2019essai 3 sur le muscle ? Que reste-t-il entre les deux dans l\u2019essai 2 ?"},{niv:"Niveau 2 \xB7 Indice",txt:"Si l\u2019essai 1 contracte le muscle, le nerf n\u2019est pas cass\xE9. Si l\u2019essai 3 contracte le muscle, le muscle n\u2019est pas paralys\xE9 lui-m\xEAme. Seule la synapse nerf\u2013muscle est bloqu\xE9e !"},{niv:"Niveau 3 \xB7 Notion",txt:"Compl\xE8te : \xAB Le neurone lib\xE8re un ___ dans la ___ (~20 nm). Le curare occupe les ___ sans les ___, bloquant la transmission. \xBB"}],avantDeRendre:["J'ai utilis\xE9 le mot-cl\xE9 \xAB fente synaptique (~20 nm) \xBB et \xAB v\xE9sicules \xBB.","J'ai interpr\xE9t\xE9 les 3 essais de Claude Bernard sans en oublier un.","J'ai expliqu\xE9 la diff\xE9rence entre message \xE9lectrique (dans le neurone) et message chimique (dans la synapse)."],lsu:["D4 \xB7 Interpr\xE9ter un protocole exp\xE9rimental historique","D5 \xB7 Situer l\u2019\xE9volution d\u2019une th\xE9orie (Golgi/Cajal)","D1.3 \xB7 Changer d\u2019\xE9chelle (organe \u2192 mol\xE9cule)"]},A5:{id:"A5",code:"A5",niveau:"3e",semaine:"S\xE9ance 9\u201310",duree:"55 min",titre:"Sommeil, smartphone le soir et m\xE9moire au coll\xE8ge",type:"Enqu\xEAte nationale & d\xE9marche exp\xE9rimentale",accroche:"Dans son avis du 13 janvier 2026 relay\xE9 par Le Monde, l'ANSES alerte sur l'usage quotidien des r\xE9seaux sociaux par 58 % des 12\u201317 ans \u2014 au moment o\xF9 l'enqu\xEAte EnCLASS 2024 montre que plus d'un quart des coll\xE9giens accumule une dette de sommeil.",sourceAccroche:"EnCLASS 2024 (OFDT / Sant\xE9 publique France) ; ANSES 13 janv. 2026 / Le Monde ; Scoville & Milner (1957) ; Gais, Lucas & Born (2006)",problematique:"Comment le manque de sommeil et l'usage tardif du smartphone perturbent-ils le fonctionnement c\xE9r\xE9bral et la consolidation des apprentissages ?",obstacle:"Croire que dormir est une \xAB perte de temps o\xF9 le cerveau s'\xE9teint \xBB et que \xAB la m\xE9moire se trouve dans un seul tiroir \xBB.",rupture:"Le sommeil est actif : l'hippocampe et le cortex rejouent les connexions form\xE9es le jour (consolidation), tandis qu'\xE9crans et dette de sommeil fragmentent ce tri ; la m\xE9moire mobilise en r\xE9alit\xE9 plusieurs circuits (hippocampe vs cervelet).",vocab:[{term:"Dette de sommeil",def:"D\xE9ficit chronique en semaine r\xE9v\xE9l\xE9 par plus de 2 h de rattrapage le week-end."},{term:"Hippocampe",def:"Structure profonde indispensable pour former les nouveaux souvenirs conscients (le\xE7ons, faits)."},{term:"Consolidation mn\xE9sique",def:"Stabilisation nocturne des r\xE9seaux de synapses reliant hippocampe et cortex."},{term:"Plasticit\xE9 c\xE9r\xE9brale",def:"Capacit\xE9 des synapses et circuits c\xE9r\xE9braux \xE0 se modifier durablement par apprentissage."}],docs:[{num:"Doc. 1",title:"\xC9tat r\xE9el du sommeil des coll\xE9giens en France",type:"tableau",source:"Enqu\xEAte nationale EnCLASS 2024 (OFDT / Sant\xE9 publique France / EHESP)",text:"Les besoins physiologiques d'un coll\xE9gien se situent entre 8 h et 9 h par nuit en semaine. L'enqu\xEAte EnCLASS 2024 r\xE9v\xE8le une \xE9rosion pr\xE9occupante :",table:{headers:["Indicateur (coll\xE9giens en semaine)","Mesure EnCLASS 2024"],rows:[["Dur\xE9e moyenne de sommeil (semaine)","8 h 16 min"],["\xC9l\xE8ves dormant moins de 7 h / nuit","13,8 %"],["En dette de sommeil (> 2 h rattrap\xE9es le week-end)","26,7 %"],["Fatigu\xE9s presque tous les matins","30,6 %"]]},legend:"Plus d\u2019un \xE9l\xE8ve sur quatre manque chroniquement de sommeil pendant les semaines de cours."},{num:"Doc. 2",title:"Smartphones le soir : alerte ANSES (janvier 2026)",type:"texte",source:"ANSES, avis du 13 janvier 2026 & Le Monde",text:"Chez les 12\u201317 ans, pr\xE8s de 90 % utilisent un smartphone chaque jour (42 % y passent 2 \xE0 5 h/jour, et 9 % plus de 5 h/jour) et 58 % consultent les r\xE9seaux sociaux quotidiennement. Leur usage le soir retarde l'endormissement par excitation \xE9motionnelle, notifications et lumi\xE8re, d\xE9gradant ensuite attention, humeur et m\xE9morisation.",legend:"Retrouve la synth\xE8se compl\xE8te dans le doc. interactif \xAB Sommeil & \xC9crans \xBB."},{num:"Doc. 3",title:"Hippocampe, cervelet et preuve exp\xE9rimentale du sommeil",type:"experience",source:"Scoville & Milner (1957, patient H.M.) ; Gais, Lucas & Born (2006, Learning & Memory)",text:"Le patient H.M., priv\xE9 de ses deux hippocampes, ne retenait aucun fait nouveau mais progressait encore en habilet\xE9 motrice (dessin en miroir) gr\xE2ce au cervelet et aux noyaux gris. De plus, Gais & Born (2006) ont montr\xE9 sur deux groupes apprenant des paires de mots que le groupe dormant juste apr\xE8s l'apprentissage retient significativement plus de mots que le groupe rest\xE9 \xE9veill\xE9 sur la m\xEAme dur\xE9e, prouvant que le sommeil consolide activement l'hippocampe.",legend:"Compare en 3D hippocampe (faits/le\xE7ons) et cervelet (gestes/automatismes)."}],voie1:{consigne:"Lors d'un conseil de vie coll\xE9gienne sur le bien-\xEAtre, r\xE9dige un plaidoyer scientifique (6 \xE0 8 lignes) expliquant pourquoi \xAB couper le smartphone 1 h avant de dormir \xBB prot\xE8ge la m\xE9moire et la sant\xE9 scolaire, en citant EnCLASS 2024, ANSES 2026 et le r\xF4le de l'hippocampe.",fields:[{id:"a5_tache",label:"Argumentaire scientifique complet (Docs 1, 2 et 3) :",rows:6,placeholder:"D\u2019apr\xE8s EnCLASS 2024, 26,7 % des coll\xE9giens sont en dette de sommeil... L\u2019ANSES (2026) montre... Or l\u2019hippocampe a besoin de sommeil pour..."}]},voie2:{consigne:"R\xE9ponds pr\xE9cis\xE9ment aux 3 questions cibl\xE9es :",fields:[{id:"a5_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Citer deux indicateurs chiffr\xE9s d\u2019EnCLASS 2024 montrant l\u2019ampleur du manque de sommeil au coll\xE8ge.",rows:2,placeholder:"13,8 % dorment moins de 7 h, 26,7 % sont en dette de sommeil, 30,6 % se disent fatigu\xE9s..."},{id:"a5_q2",label:"Q2 (Doc. 2 \xB7 Expliquer) : Citer les chiffres d\u2019usage du smartphone chez les 12\u201317 ans et deux raisons pour lesquelles l\u2019\xE9cran le soir nuit au sommeil.",rows:2,placeholder:"58 % sur les r\xE9seaux sociaux/jour (42 % de 2 \xE0 5 h) ; retarde l\u2019endormissement par..."},{id:"a5_q3",label:"Q3 (Doc. 3 \xB7 D\xE9montrer) : Expliquer ce que prouvent le cas H.M. et l\u2019exp\xE9rience de Gais & Born (2006) sur les organes de la m\xE9moire et l\u2019effet du sommeil.",rows:3,placeholder:"H.M. prouve que l\u2019hippocampe g\xE8re les faits nouveaux (vs cervelet pour les gestes) ; Gais & Born prouvent que dormir juste apr\xE8s apprendre..."}]},mdl:{verbeAction:"Relever \xB7 Expliquer \xB7 D\xE9montrer",marqueurs:["tout d\u2019abord","en effet","de plus","c\u2019est pourquoi"],structure:"Constat \xE9pid\xE9miologique \u2192 Facteur comportemental (\xE9crans) \u2192 Preuve biologique (hippocampe/sommeil)."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Distingue bien deux types de donn\xE9es : un sondage (Docs 1 et 2 : d\xE9crit une fr\xE9quence) et une exp\xE9rience contr\xF4l\xE9e (Doc. 3 : prouve une cause)."},{niv:"Niveau 2 \xB7 Indice",txt:"H.M. \xE9choue \xE0 retenir les mots/visages (sans hippocampe) mais r\xE9ussit le dessin en miroir (cervelet intact) \u2192 la m\xE9moire n\u2019est pas localis\xE9e dans une seule zone !"},{niv:"Niveau 3 \xB7 Notion",txt:"Pendant le sommeil, les r\xE9seaux de synapses entre l\u2019hippocampe et le cortex se r\xE9activent et se renforcent (consolidation / plasticit\xE9 c\xE9r\xE9brale)."}],avantDeRendre:["J'ai cit\xE9 au moins deux chiffres exacts d'EnCLASS 2024 et de l'ANSES 2026.","J'ai diff\xE9renci\xE9 le r\xF4le de l'hippocampe et celui du cervelet.","J'ai expliqu\xE9 pourquoi le sommeil consolide activement les souvenirs (au lieu d'\xE9teindre le cerveau)."],lsu:["D4 \xB7 Distinguer enqu\xEAte observationnelle et exp\xE9rience","D3 \xB7 Hygi\xE8ne du syst\xE8me nerveux","D1.3 \xB7 Argumenter avec des chiffres sourc\xE9s"]},A6:{id:"A6",code:"A6",niveau:"3e",semaine:"S\xE9ance 11\u201312",duree:"55 min",titre:"Puffs, nicotine et \xE9crans : comprendre l\u2019addiction par le cerveau",type:"Sant\xE9 publique \xB7 Neurobiologie des addictions",accroche:"En f\xE9vrier 2025, la France a adopt\xE9 une loi interdisant les puffs jetables, apr\xE8s que l'enqu\xEAte EnCLASS 2024 a alert\xE9 sur l'essor du vapotage (~46 % d'exp\xE9rimentation au lyc\xE9e) malgr\xE9 le recul du tabac fum\xE9. L'ANSES (janvier 2026) pointe aussi les boucles de r\xE9compense des \xE9crans.",sourceAccroche:"OFDT EnCLASS 2024 ; Loi n\xB0 2025-175 du 24 f\xE9v. 2025 ; ANSES janv. 2026 ; Lelivrescolaire.fr Docs 4, 5 & 8",problematique:"Comment la nicotine \u2014 ou certaines boucles de r\xE9compense num\xE9riques \u2014 d\xE9tourne-t-elle le circuit c\xE9r\xE9bral normal jusqu'\xE0 installer une d\xE9pendance chez l'adolescent ?",obstacle:"Croire que la d\xE9pendance n'est qu'un \xAB manque de volont\xE9 \xBB ou que la dopamine est \xAB la mol\xE9cule du bonheur simple \xBB.",rupture:"Les besoins vitaux lib\xE8rent naturellement de la dopamine dans le circuit ATV \u2192 noyau accumbens \u2192 pr\xE9frontal (apprentissage/motivation). La nicotine et les substances d\xE9tournent ces synapses ; chez l'adolescent, le cortex pr\xE9frontal qui freine les impulsions est encore en maturation.",vocab:[{term:"Circuit de la r\xE9compense",def:"R\xE9seau reliant notamment l\u2019ATV, le noyau accumbens et le cortex pr\xE9frontal, impliqu\xE9 dans la motivation."},{term:"Dopamine",def:"Neurotransmetteur qui signale l\u2019attente d\u2019une r\xE9compense et renforce la r\xE9p\xE9tition d\u2019un comportement."},{term:"Addiction",def:"Perte de contr\xF4le et besoin compulsif malgr\xE9 la connaissance des risques pour la sant\xE9."},{term:"Cortex pr\xE9frontal",def:"R\xE9gion frontale contr\xF4lant le recul, la planification et le frein aux impulsions (maturation jusqu\u2019\xE0 ~25 ans)."}],docs:[{num:"Doc. 1",title:"Du tabac aux puffs et r\xE9seaux : enjeux de sant\xE9 publique",type:"texte",source:"OFDT EnCLASS 2024 \xB7 Loi n\xB0 2025-175 (24 f\xE9v. 2025) \xB7 ANSES (13 janv. 2026)",text:"Au coll\xE8ge, le tabac fum\xE9 recule nettement (7,7 % d'exp\xE9rimentation ; 0,9 % d'usage quotidien selon EnCLASS 2024). En revanche, l'attrait des puffs jetables sucr\xE9es contenant souvent de la nicotine a pouss\xE9 pr\xE8s de 46 % des lyc\xE9ens \xE0 tester le vapotage, conduisant \xE0 l'interdiction l\xE9gale des puffs en f\xE9vrier 2025. Parall\xE8lement, l'ANSES (2026) souligne que les m\xE9canismes de scroll infini et r\xE9compenses impr\xE9visibles captent fortement l'attention adolescente.",legend:"Pourquoi un produit ou un usage peut-il cr\xE9er une envie irr\xE9sistible de recommencer ?"},{num:"Doc. 2",title:"Lib\xE9ration de dopamine selon l\u2019activit\xE9",type:"graphique",source:"Lelivrescolaire.fr SVT 3e (Doc. 8 \u2014 Unit\xE9 arbitraire 0\u2013100)",text:"Mesure relative de la lib\xE9ration de dopamine dans le circuit de la r\xE9compense (en unit\xE9 arbitraire sur 100) selon la situation v\xE9cue :",table:{headers:["Situation test\xE9e","Lib\xE9ration de dopamine (UA / 100)","R\xF4le biologique / Risque"],rows:[["Manger / Boire","~88 UA / ~88 UA","Survie de l\u2019organisme"],["Obtenir une bonne note","~52 UA","Renforcement scolaire"],["R\xE9diger une punition","~3 UA","\xC9vitement (d\xE9sagr\xE9able)"],["Addiction \xE0 un jeu","~82 UA","D\xE9tournement au niveau d\u2019un besoin vital"]]},legend:"Visualise le graphique complet dans le document interactif \xAB R\xE9compense & Puffs \xBB."},{num:"Doc. 3",title:"Action synaptique et vuln\xE9rabilit\xE9 du cerveau adolescent",type:"3d",source:"Lelivrescolaire.fr Docs 4\u20135 ; Volkow et al. (neurobiologie des addictions)",text:"\xC0 l'\xE9chelle cellulaire, la nicotine ou d'autres mol\xE9cules psychoactives se fixent sur les r\xE9cepteurs synaptiques et d\xE9clenchent une lib\xE9ration artificielle et brutale de dopamine entre l'ATV et le noyau accumbens. R\xE9p\xE9t\xE9e, cette surstimulation diminue la sensibilit\xE9 basale des synapses (besoin d'augmenter les doses, malaise en manque), alors que le cortex pr\xE9frontal r\xE9gulateur ach\xE8ve sa maturation vers 20\u201325 ans.",legend:"Observe en 3D le trajet m\xE9solimbique (ATV \u2192 accumbens) puis le cortex pr\xE9frontal."}],voie1:{consigne:"En t'appuyant sur les 3 documents et l'atlas 3D, r\xE9dige une explication scientifique (6 \xE0 8 lignes) expliquant pourquoi l'interdiction des puffs en 2025 repose sur des arguments biologiques pr\xE9cis li\xE9s aux synapses, \xE0 la dopamine et au cerveau adolescent.",fields:[{id:"a6_tache",label:"Note scientifique sur la pr\xE9vention des addictions (Docs 1, 2 et 3) :",rows:6,placeholder:"Alors que le tabac fum\xE9 recule (7,7 % au coll\xE8ge), les puffs apportent de la nicotine... Or \xE0 l\u2019\xE9chelle du circuit de la r\xE9compense..."}]},voie2:{consigne:"Relie donn\xE9es de sant\xE9 publique, graphique et m\xE9canisme synaptique :",fields:[{id:"a6_q1",label:"Q1 (Doc. 1 \xB7 Relever) : Comparer l\u2019usage du tabac fum\xE9 au coll\xE8ge et du vapotage au lyc\xE9e (EnCLASS 2024), et rappeler la d\xE9cision de f\xE9vrier 2025.",rows:2,placeholder:"Au coll\xE8ge : 7,7 % exp\xE9rimentation tabac (0,9 % quotidien) ; vapotage ~46 % au lyc\xE9e \u2192 interdiction des puffs en f\xE9v. 2025..."},{id:"a6_q2",label:"Q2 (Doc. 2 \xB7 Comparer) : Comparer la dopamine lib\xE9r\xE9e lors d\u2019un besoin vital (manger/boire) \xE0 celle observ\xE9e lors d\u2019une addiction, et conclure sur le d\xE9tournement du circuit.",rows:2,placeholder:"Manger/boire (~88 UA) et l\u2019addiction (~82 UA) produisent des pics tr\xE8s proches, bien au-dessus d\u2019une bonne note (~52 UA)..."},{id:"a6_q3",label:"Q3 (Doc. 3 \xB7 Expliquer) : D\xE9crire l\u2019action de la nicotine sur les synapses dopaminergiques et expliquer pourquoi les adolescents sont plus vuln\xE9rables.",rows:2,placeholder:"La nicotine d\xE9clenche un pic artificiel entre ATV et noyau accumbens... le cortex pr\xE9frontal n\u2019est pas encore mature..."}]},mdl:{verbeAction:"Comparer \xB7 Expliquer \xB7 Justifier",marqueurs:["alors que","c\u2019est pourquoi","par cons\xE9quent","de plus"],structure:"Donn\xE9es EnCLASS/Loi 2025 \u2192 Comparaison chiffr\xE9e Doc. 2 \u2192 M\xE9canisme synaptique + Pr\xE9frontal."},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Dans Q2, cite les trois valeurs (88 UA, 52 UA, 82 UA) pour montrer ce que signifie \xAB d\xE9tourner un circuit utile \xE0 la survie \xBB."},{niv:"Niveau 2 \xB7 Indice",txt:"Chez l\u2019adolescent, l\u2019acc\xE9l\xE9rateur \xE9motionnel/r\xE9compense (accumbens) r\xE9pond tr\xE8s vite alors que le \xAB frein \xBB (cortex pr\xE9frontal) est encore en construction."},{niv:"Niveau 3 \xB7 Notion",txt:"La nicotine agit sur les r\xE9cepteurs synaptiques : elle provoque une lib\xE9ration excessive de dopamine dans le noyau accumbens, puis une tol\xE9rance qui pousse \xE0 recommencer."}],avantDeRendre:["J'ai nomm\xE9 les structures cl\xE9s : ATV, noyau accumbens, cortex pr\xE9frontal.","J'ai cit\xE9 les donn\xE9es v\xE9rifi\xE9es d'EnCLASS 2024 et les valeurs UA du Doc. 2.","J'ai expliqu\xE9 la d\xE9pendance par un m\xE9canisme biologique (synapse/dopamine) et non par jugement moral."],lsu:["D4 \xB7 Exploiter des donn\xE9es graphiques et \xE9pid\xE9miologiques","D3 \xB7 Pr\xE9vention des addictions et sant\xE9 publique"]},A7:{id:"A7",code:"A7",niveau:"4e / 3e",semaine:"Activit\xE9 ind\xE9pendante",duree:"50 min",titre:"Les conditions d\u2019une bonne perception visuelle : aires V1 \xE0 V5 et int\xE9gration c\xE9r\xE9brale",type:"D\xE9marche clinique \xB7 Int\xE9gration c\xE9r\xE9brale",accroche:"Apr\xE8s un accident c\xE9r\xE9bral (AVC), deux patients ont des yeux parfaitement intacts mais des troubles visuels diff\xE9rents : le patient A ne voit plus les couleurs, tandis que le patient B ne reconna\xEEt plus les formes.",sourceAccroche:"Exercice \xAB Les conditions d\u2019une bonne perception visuelle \xBB ; D.F. Benson",problematique:"Comment expliquer que des l\xE9sions c\xE9r\xE9brales diff\xE9rentes provoquent des troubles diff\xE9rents de la vision pour comprendre comment le cerveau traite les informations visuelles ?",obstacle:"Croire que seuls les yeux suffisent pour voir, ou qu\u2019une seule zone du cerveau fabrique toute l\u2019image.",rupture:"\xC9tudier les effets de l\xE9sions localis\xE9es du cerveau permet de comprendre comment diff\xE9rentes zones participent \xE0 la vision.",vocab:[{term:"Cortex visuel (V1\u2013V5)",def:"Zones \xE0 l\u2019arri\xE8re du cerveau impliqu\xE9es dans la vision."},{term:"L\xE9sion c\xE9r\xE9brale",def:"Atteinte d\u2019une zone du cerveau perturbant une fonction pr\xE9cise."},{term:"Sp\xE9cialisation",def:"Chaque aire visuelle traite un aspect pr\xE9cis de l\u2019image."},{term:"Int\xE9gration c\xE9r\xE9brale",def:"Mise en relation des messages de plusieurs aires du cerveau."}],docs:[{num:"Doc. 1",title:"Dessins du patient A",type:"observation",source:"Exercice (Doc. 1)",text:"Le patient A (yeux sains) dessine une pomme rouge et des feuilles vertes : les contours sont corrects mais les couleurs sont perdues."},{num:"Doc. 2",title:"Test des formes du patient B",type:"tableau",source:"D.F. Benson, Archives of Neurology (Doc. 2)",text:"Le patient B (yeux sains) doit barrer sur chaque ligne la figure de m\xEAme forme que le mod\xE8le : 0 r\xE9ussite sur 4.",table:{headers:["Mod\xE8le","Choix du patient B","Bilan"],rows:[["1 \xB7 Triangle blanc","Disque plein noir","Erreur"],["2 \xB7 Trap\xE8ze noir","Triangle noir","Erreur"],["3 \xB7 Lettre X","Cercle barr\xE9 \xD8","Erreur"],["4 \xB7 Cl\xE9 noire","\xC9pingle \xE0 nourrice","Erreur"]]}},{num:"Doc. 3",title:"L\xE9sions A/B et aires V1\u2013V5 (Mod\xE8le 3D)",type:"3d",source:"Documents 3 & 4 \xB7 Mod\xE8le 3D",text:"Compare la position des l\xE9sions A et B avec la carte des aires visuelles V1 \xE0 V5 sur les sch\xE9mas et le mod\xE8le 3D."}],voie1:{consigne:"\xC0 partir des documents et du mod\xE8le 3D, explique comment les cas des patients A et B permettent de comprendre comment le cerveau traite les informations visuelles pour assurer une vision correcte.",fields:[{id:"a7_tache",label:"Ta r\xE9ponse argument\xE9e :",rows:6,placeholder:"\xC9cris ta r\xE9ponse ici..."}]},voie2:{consigne:"R\xE9ponds aux 3 questions \xE0 l\u2019aide des documents, du simulateur et du mod\xE8le 3D :",fields:[{id:"a7_q1",label:"Q1 (Docs 1 & 2) : Compare les troubles des patients A et B. Que montrent-ils sur le traitement de la vision par le cerveau ?",rows:2,placeholder:"\xC9cris ta r\xE9ponse ici..."},{id:"a7_q2",label:"Q2 (Docs 3 & 4 / 3D) : Identifie l\u2019aire visuelle l\xE9s\xE9e chez le patient A et chez le patient B, puis indique le r\xF4le de chacune.",rows:2,placeholder:"\xC9cris ta r\xE9ponse ici..."},{id:"a7_q3",label:"Q3 (Synth\xE8se) : Explique pourquoi les diff\xE9rentes aires visuelles doivent communiquer entre elles (int\xE9gration) pour permettre une vision correcte.",rows:3,placeholder:"\xC9cris ta r\xE9ponse ici..."}]},mdl:{verbeAction:"Comparer \xB7 Identifier \xB7 Expliquer",marqueurs:["tandis que","donc","en effet","c\u2019est pourquoi"],structure:"1. Comparer les troubles (A et B) \u2192 2. Relier chaque l\xE9sion \xE0 une aire \u2192 3. Expliquer la coop\xE9ration des aires"},coupsDePouce:[{niv:"Niveau 1 \xB7 M\xE9thode",txt:"Que r\xE9ussit et que rate chaque patient dans les documents 1 et 2 ?"},{niv:"Niveau 2 \xB7 Indice",txt:"Superpose l\u2019emplacement des l\xE9sions A et B (Doc. 3) avec la carte des aires V1 \xE0 V5 (Doc. 4 ou Mod\xE8le 3D)."},{niv:"Niveau 3 \xB7 Notion",txt:"Chaque aire traite une partie de l\u2019image (formes, couleurs, mouvement). Que se passe-t-il si elles ne communiquent pas entre elles ?"}],avantDeRendre:["J'ai compar\xE9 ce que voient le patient A et le patient B.","J'ai reli\xE9 la l\xE9sion de chaque patient \xE0 une aire visuelle pr\xE9cise (V1 \xE0 V5).","J'ai expliqu\xE9 la n\xE9cessit\xE9 d'une int\xE9gration entre les aires visuelles."],lsu:["D4.2 \xB7 Mettre en relation des documents (sympt\xF4mes \u2194 l\xE9sions \u2194 carte V1\u2013V5)","D1.3 \xB7 Expliquer un m\xE9canisme d\u2019int\xE9gration c\xE9r\xE9brale"]},A8:{id:"A8",code:"Activit\xE9 8",niveau:"4e / 3e",semaine:"S\xE9quence Syst\xE8me nerveux & Sant\xE9",duree:"50 min",titre:"Effets et modes d'action des drogues (alcool, cannabis, coca\xEFne) sur le syst\xE8me nerveux",type:"D\xE9marche explicative \xB7 Perturbation synaptique",accroche:"Alcool, cannabis, coca\xEFne, h\xE9ro\xEFne ou ecstasy modifient rapidement les perceptions, l'attention, la m\xE9moire et le comportement du consommateur. Tous agissent au c\u0153ur des zones de jonction entre neurones : les synapses.",sourceAccroche:"Observation MET (\xD7 10 000) de zone de jonction synaptique & Tableau des modes d\u2019action (Docs 1\u20133)",problematique:"Comment expliquer que diff\xE9rentes drogues (alcool, cannabis, coca\xEFne...) provoquent des troubles du syst\xE8me nerveux en perturbant la transmission du message nerveux au niveau des synapses ?",obstacle:"Penser que les drogues \xAB d\xE9truisent physiquement \xBB instantan\xE9ment tous les nerfs, ou confondre l'extr\xE9mit\xE9 pr\xE9synaptique (neurones A/B \xE0 v\xE9sicules) avec le corps cellulaire postsynaptique (neurone C).",rupture:"Au microscope \xE9lectronique, la transmission repose sur la lib\xE9ration de messagers chimiques contenus dans des v\xE9sicules des neurones A et B. Chaque drogue perturbe pr\xE9cis\xE9ment une \xE9tape de ce transfert chimique.",vocab:[{term:"Zone de jonction (Synapse)",def:"Espace \xE9troit (~20 nm) s\xE9parant la terminaison d\u2019un neurone (A ou B) du corps cellulaire du neurone suivant (C)."},{term:"V\xE9sicules synaptiques",def:"Petits \xE9l\xE9ments circulaires situ\xE9s dans les terminaisons des neurones A et B, contenant les messagers chimiques (neurotransmetteurs)."},{term:"Substance d\xE9vers\xE9e (Neurotransmetteur)",def:"Mol\xE9cule lib\xE9r\xE9e par les v\xE9sicules dans l\u2019espace synaptique et qui vient se fixer sur la membrane du neurone C."},{term:"D\xE9pendance & troubles nerveux",def:"Modification du fonctionnement normal des r\xE9seaux neuronaux (euphorie, troubles de l\u2019attention, de la m\xE9moire, hallucinations, d\xE9pendance)."}],docs:[{num:"Doc. 1",title:"Zone de jonction entre les neurones A et B et le neurone C (MET \xD7 10 000)",type:"observation",source:"Microscopie \xE9lectronique \xE0 transmission (vue en coupe longitudinale)",text:"Le clich\xE9 montre deux terminaisons d'axone (neurones A et B) en contact \xE9troit avec le corps cellulaire d'un neurone C. En fort grossissement, avant la transmission du message (1), la terminaison B contient de nombreuses v\xE9sicules circulaires ferm\xE9es, alors que le neurone C n'en contient pas et qu'un espace clair s\xE9pare les deux membranes. Pendant la transmission (2), certaines v\xE9sicules s'ouvrent contre la membrane et d\xE9versent leur contenu dans l'espace de la zone de jonction.",legend:"Avant transmission : v\xE9sicules stock\xE9es dans A/B \xB7 Pendant transmission : lib\xE9ration dans l'espace synaptique."},{num:"Doc. 2",title:"Mode d'action des drogues et de l'alcool au niveau synaptique",type:"tableau",source:"Tableau de synth\xE8se des m\xE9canismes synaptiques",text:"Chaque substance chimique perturbe \xE0 sa mani\xE8re la transmission du message nerveux au niveau de la zone de jonction :",table:{headers:["Drogues","Modes d'action sur la synapse"],rows:[["Cannabis et h\xE9ro\xEFne","Se fixent sur la membrane des neurones A ou B et emp\xEAchent la majorit\xE9 des v\xE9sicules de d\xE9verser les substances qu'elles contiennent dans l'espace de la zone de jonction."],["Coca\xEFne et ecstasy","Maintiennent la substance d\xE9vers\xE9e par les v\xE9sicules du neurone A ou B dans l'espace de la zone de jonction (pas d'\xE9limination du messager)."],["Alcool","Emp\xEAche la substance d\xE9vers\xE9e par les v\xE9sicules d'agir sur la membrane du neurone C (blocage des r\xE9cepteurs du neurone C)."],["Amph\xE9tamines","P\xE9n\xE8trent dans les v\xE9sicules du neurone A ou B, qui se vident alors de leur contenu dans l'espace de la zone de jonction ; la substance d\xE9vers\xE9e s'accumule dans l'espace."]]},legend:"Trois lieux d'action distincts : extr\xE9mit\xE9 des neurones A/B, espace de la zone de jonction, ou membrane du neurone C."},{num:"Doc. 3",title:"Effets ressentis par le consommateur et lieux d\u2019action",type:"comparaison",source:"Atelier clinique & bilan anatomique (neurones A, B et C)",text:"Le cannabis provoque euphorie l\xE9g\xE8re, relaxation, amplification sensorielle mais aussi agitation, troubles de l'attention (apathie, somnolence), de la motivation, de la m\xE9morisation et donc de l'apprentissage. L'h\xE9ro\xEFne d\xE9clenche euphorie, hallucinations, comportement compulsif et forte d\xE9pendance (d\xE9pression et douleurs au sevrage). Cannabis et h\xE9ro\xEFne se fixent sur la membrane des neurones A ou B ; coca\xEFne et ecstasy agissent dans l'espace synaptique ; l'alcool bloque la membrane du neurone C.",legend:"Lieu 1 : membrane A/B \xB7 Lieu 2 : espace synaptique \xB7 Lieu 3 : membrane du neurone C."},{num:"Doc. 4",title:"Mod\xE8le 3D des circuits c\xE9r\xE9braux cibl\xE9s par les drogues",type:"3d",source:"Atlas c\xE9r\xE9bral 3D \xB7 Circuits Dopamine, Glutamate/GABA, Hippocampe & Pr\xE9frontal",text:"Observe dans l'onglet Mod\xE8le 3D les circuits profonds o\xF9 s'exercent ces perturbations synaptiques : la voie de la dopamine (ATV \u2192 noyau accumbens), les voies excitatrice/inhibitrice (Glutamate / GABA), l'hippocampe (m\xE9moire) et le cervelet (\xE9quilibre et coordination perturb\xE9s par l'alcool).",legend:"Cliquer sur \xAB Explorer en 3D \xBB pour visualiser les r\xE9gions touch\xE9es."}],voie1:{titre:"Voie 1 \xB7 T\xE2che complexe (Synth\xE8se scientifique)",consigne:"R\xE9dige un texte argument\xE9 expliquant d'abord comment se transmet un message nerveux au niveau de la zone de jonction entre les neurones B et C (Doc. 1), puis comment les diff\xE9rentes drogues (cannabis/h\xE9ro\xEFne, coca\xEFne/ecstasy, alcool, amph\xE9tamines) perturbent cette transmission \xE0 des endroits pr\xE9cis (Doc. 2 et 3) et provoquent des troubles nerveux.",fields:[{id:"a8_tache",label:"Votre explication compl\xE8te (transmission synaptique + modes et lieux d\u2019action des drogues)",rows:6,placeholder:"\xC9cris ta r\xE9ponse ici..."}]},voie2:{titre:"Voie 2 \xB7 Parcours guid\xE9 (3 \xE9tapes)",consigne:"Observe les documents et manipule le simulateur de synapse, puis r\xE9ponds aux 3 questions.",fields:[{id:"a8_q1",label:"Q1 (Doc. 1 et 3) \u2014 Comparer le contenu des neurones B et C avant et pendant la transmission, et relever les principaux troubles nerveux li\xE9s aux drogues.",rows:3,placeholder:"\xC9cris ta r\xE9ponse ici..."},{id:"a8_q2",label:"Q2 (Doc. 1) \u2014 Expliquer comment se d\xE9roule la transmission d\u2019un message nerveux au niveau de la zone de jonction (devenir des \xE9l\xE9ments circulaires).",rows:3,placeholder:"\xC9cris ta r\xE9ponse ici..."},{id:"a8_q3",label:"Q3 (Doc. 2 et 3) \u2014 En d\xE9duire comment et \xE0 quel endroit pr\xE9cis chaque drogue (cannabis/h\xE9ro\xEFne, coca\xEFne/ecstasy, alcool, amph\xE9tamines) perturbe la transmission.",rows:4,placeholder:"\xC9cris ta r\xE9ponse ici..."}]},mdl:{verbeAction:"Comparer \xB7 Expliquer \xB7 D\xE9duire",marqueurs:["avant / pendant","alors que","donc","tandis que","par cons\xE9quent"],structure:"1. Diff\xE9rences neurones B vs C \u2192 2. Lib\xE9ration des v\xE9sicules dans la synapse \u2192 3. Perturbation cibl\xE9e par chaque drogue (lieu + effet)"},coupsDePouce:[{niv:"Niveau 1 \xB7 Observation (Q1)",txt:"Regarde les petits cercles (v\xE9sicules) dans le clich\xE9 MET : sont-ils dans le neurone B ou dans le neurone C ? Que change-t-il au niveau de la membrane entre le clich\xE9 1 et le clich\xE9 2 ?"},{niv:"Niveau 2 \xB7 M\xE9canisme (Q2)",txt:"Pendant la transmission, les v\xE9sicules du neurone B s\u2019ouvrent et lib\xE8rent une substance chimique dans l\u2019espace qui le s\xE9pare du neurone C."},{niv:"Niveau 3 \xB7 Lieux d\u2019action (Q3)",txt:"Classe les drogues selon le sch\xE9ma du Doc. 3 : quelles drogues agissent sur la membrane A/B ? Dans l\u2019espace synaptique ? Sur la membrane du neurone C ?"}],avantDeRendre:["J'ai compar\xE9 le contenu du neurone B (pr\xE9sence de v\xE9sicules) et du neurone C (absence de v\xE9sicules) avant et pendant la transmission.","J'ai expliqu\xE9 le devenir des v\xE9sicules (ouverture et lib\xE9ration du messager chimique dans l'espace de la zone de jonction).","J'ai pr\xE9cis\xE9 le mode et le lieu d'action du cannabis/h\xE9ro\xEFne, de la coca\xEFne/ecstasy, de l'alcool et des amph\xE9tamines."],lsu:["D4.2 \xB7 Comparer des \xE9lectronographies et mettre en relation mode et lieu d\u2019action","D4.1 \xB7 Mod\xE9liser la transmission chimique synaptique et sa perturbation"]}},Kd={A1:"SRJGRVNTV3JRQltDVxIIFX5fQEQSVBVCXBBXUVRfQEMSXUdEUUVeVltCVxsSXFdEEkJLQ1pdV0QSU1NFVllTRkdVEh9XSBwXBQAS1bSiEgYKABJVQl0bF1dEEkVXQ0JeQFFGWFtCVxdTRVVaV15GUlxEEkRdRUEXUV9cQ0DzhltXEFxSQEZXQkoQQlhHQhJWQkBAWERZQV5dXlxSQBBeUkEQX0JBU15SQRBXWRJUW1hKSVX0ml5XF1dEEllHREBeX1VcQ0EeEntXEF9ORlhXF1ZVQRfwmxIGAhAXF1ZFElRXQkRSU0US9YkQV0RGEFRWR0gSDRJAV0RTXkYXTAISEhJURxdRX0BHQRwSW1cQUVJARldWRxBRWFxDXVpfVRJJAAASEhJUVxdeF/GeXFVAUFtVEkNdRFNbVxBXQxJTXVhAVF1ZXFUSW1cQVVJBRFcXRFlTF0JcR0RbVUdFQRBA9JtDV1ZHSBIfUV9AQ1dIElpdRFdCQBwSVltCV0QSQ1dZQV9AXldcXlJBHBJUV0JEUl5VRh4cEh4VXF9GXl1eQRUIaxByVFZdRUYQX0JBU0dbU1lAUhAcEGRLQ0b0ml1XRBJeV0VEVUdPHhBRVkBUW1ZDRVcXV0QSRVdDQl5AUUZYW0JXFR4SYPSbQ1dWR0gSVPGZQPSbUkBWR0gQGxB2U15GEEFUW1VcQ1tWW0ZHVRJBQRBcUkdCXVpLRFpSEG0eFVRUQRUIEnRWW0JXF1ZVQRdBU1tSXFNXRBIKElNbQ0ZeXFdHUkAQR1kSXldCQF9fTkZYVxdEWUBWXhBWEEdeElFTWUYXX1VBQkDzmxdCUUAXUFleVlwQ8Z5cVUBQ8ZlGXkNFVxdXRBJeX1FVUkBZVxkQHBBHQF9UFQhLEFRdQkBeVVUQDWkSYwYSChJ7VxBATkZYX1ISU1NFVllTRkdVEkdTQ0FSElRXFwUAElVCXRL0khADDwIQUEdfEBocAwECF1BAXxsSQ11eRhDxoAAcBwAbHhJ0V0RGUhJRUVTxmV70m0JTQ1tfXBdTRVVaV15GUhJcVxdW85tVW0QSRFNeVUJbXhJHXUVAF1NAQlhARFdFElRTQVNeRlZVVRJTVxBWXl1IS1DxmFxSEhh91bCyGxdXRBJTVxBVW0dTXURXEFNCShBfQkFTXlJBEFNURllURBwSHhVjAhINEnxXF1FVQEFXUUcXXFUSRVdAQPSbQ1dZRlUSRkdVEkkAEBcXVlUSW1MQX1ZBQ1cXUV9AR11CV1teVRJaU1lBF1FfXERdXV9SEk4ABxIVElNHEFZeXUhLUPGYXFISVUYXVkUSUF5FUVhBVRJDXURTQkoQCBdbXBJRXV5RQ1tfXFlXEFdZEkBXRV9RXFJcU1cXV14SRfGZQVJTRUoXGlQVVltcXlJHQkEXRl9HQ1cQXvSbQ1tYXBBR9JtC8Z5QQlNbVxDxnkZVXFNHVRJSXERAVvGeXFISVFdEEkRAWEdSXlJBEF1VQVVAQVNSXlJBGRwVHhJjBBIKEntXEFFYQERXTxJdXUNXRUAXGlxdVVcQVEVdXkZWXhkSU/GZUVtXXlFfVxBeVhJTXVpfUVxTVxBEWF5fXENTWUBSEkZXRUEQXlJBEF9CQVNeUkEcEkNTXlZeQRBDQlcQXlISU1dFRFVeUkYQQPSbV0dbVxBeEPGZQ0JbXFtVQFUSUkYQXlYSQED0m1NbRFtfXBdWRRJQV0NGUhIYU0FXUxJbV0MSVltCV0QSQ1dZQV9AXldcXlJBEEJYR0ISVlhFQUNXQhJbFVFCR0dZGxkQbR4VUFFAUl9VEA0QYQMXCBABF0JEQRcaQldbV0bxnhJTWl5UVkD0mxADGwcQGRdQVUFYW14SeNCysBhVXEdUXUNXFwMcBx4S8oUXYwISDRIDHgISQEZEEhgAFxcQREQSAgIXFxAPFwAQGRdA85tRR0RTQ1tfXBcDHAceEvKFF2MDEg0SAh4CEkBGRBIYABdBREBCUURHRVdDElJGEED0hlxXRBsQ8IASfXZ7EhYSRF1ZXBcIEAMXQkQSChIBAhdCREEZEBwQUkBCV0JAQ3RFV0FHUlxEV0QQCmkVfUVQW1tVQBdeVRJTW19KTlXzmllXH1VbR1NdRFcQV0MSVFtFVxBBUkdcV1pXXkYX8JsSW1cQUfKhRUAXUFFGF0JcR0QSRltDVxBCVkBTVxdDRRVYXBBRWEdCRhfwixwVHhJxWFxWXVlWQlcXXhdHQ1tcW0RTRFtYXBBBXl9FXkNTXvGeVxAaR1NCEkXxmUFSU0VKHhJVRhdeURJUU0BTVFtE8Z4SXVNPW11TW1cQW1lBRFNZRlFc9JtVHBVvHBBbQUUQDUkSf34QChBlV1zxn0RVEkJcEFFfW1ZURVcQX1ZbQxJZFVVKR15ZQ0JXEEJWQRBeUhJcW1JcEF9CQVNeUtCwoURTXlXVsqNRUkBGV1ZHHhAbEH10FQgSe1NXXkZeVFlXF14XU0JVXVdZRlFGXl1eElRTQlZeU0FHUhIYBQcS0rSlEgEKBxJSQlobEFdDElNbQ1cQR1lXEED0m1dbWFwQUfSbQvGeUEJTW1ccEkRTXkEXUVhbUVRCV0USXFMXQPObUUdEU0NbX1wXVkUSc11THBcAHhAbEH1hFQgSYFJeWVcXUV9ARVdTRlJfVVxDElwVVlZRQkNTRFtYXBBRVkBUW1ZDRVcXU0VKF1BVQVhbXkEXX0VBVEdcU15AVUEXV0QSRfGZVEJGVRJbVxBfTkZYVxdWVUEXAwASEhJRRFJREF5SQRBWUkdIEkddRUBUV15GVlVVQRkQHBBjcH0QDRBxQENbU0dbVxBUW0dZVlJfVVxDEvObVFpVXltXQxJTVxBeEF1CVVZcWUFaVxAaVPejR0UdXUdEUVxXRB1TV0VEVVNCGxwSVFpZVFFAVUEXV0hTVEZDElJGEFFFW0RbRkdVElZAV0daV15G9JtVElNHEFxSR0JdWktEWlIcEk9KTw==",A2:"SRJGRVNTV3JRQltDVxIIFX4XXUVXWV5bVxBGRVNeQVFdQl9SElxXRBJGW1VAUUZeXV5BF0FfXFhAVUEXV14SWldDQVZVVUEXXFVAQVdFShdRX1xTR1lGRBJAU0USXFcXXFVAURJRR1NbRFtRElpHRENFFVZHEFFYQERXTxJRR1NbRFtREhheWFBVEkNXXUJYQFFeHh4QXfSLEF5SElNXRURVU0ISXFdEEllcQ/GYVUVXEFNBV1MSWV1DElZHREBSQRBBUlxDHBdzRR9TV1zxlxJUVxcKBRJTcBAaUkYQVvSaQxJGR1VeRkdVQRdfWVxCRlVBF/GQEgYDABJTcBBdQhIBAAcSVHAeHhBeUhJSQEJbRBJT8ZlGRUdZRhdW85tRW15bQ1tGV1pXXkYXXlVBF1FVXltHXFdEElNbW1vzm1JBEFxYXBBAUlxfR0FXXFNVXlVBFwgQXl5fWUZSQBBeUhJGXVtHXVcbElxTF1ZFQPSbVRJSRhBCWEBEV0USVFdEEkBAWEZVUUNbX1xEEkBA9JtDV0VEVRJbFVFHU1tEW1hcHhAbEF5dQ1tfXEQQCmkVYPObVFdARl5dXhJSRhBbWUbzm1BAUUZeXV4SVPGZQPSbUkBWXlUQGxB+V0VUEEFSXENbQ1tWElJGEFFYQERXTxJDV1lBX0BeV1wQGxBjV0JbXBJEXV5dRVcQV0MSQED0m0ZXWUZZXVkQbR4VVFRBFQgSdFZbQlcXVlVBF0FTW1JcU1dEEgoSQkZZXl5BVUAXXlESWV1EW1hcEFZSEkNXQltcElJGEFZSElRHRfGZVxdWF1dPQl9BXkZZXVkSQF1CQBBUWFxUV0USRVxSEkLxn1VcVxdWVRJE8ZlRQkBZRvSbHhAbEEBAWFQSCEwQU11FQFlVUhAKaRVjARINEnxXRBJdV0RBUVVSQRBcUkBGV0JKEFNCVllGXlRDEkFdSVNQV15GF0JRQBdeVRJZV0JUF1NFVl5GWVQXWEVBRkcXU0ISU11FRlVKF1NFVl5GWVQbEkNbQ0fzmxdWUVxEElxXF15fUFISRFdaQl9AVl4eEBsQYQAXCBB+UhJDV0JbXBJTVxBAXkFBR1ISVPGeUEVGUhLzkhcKBRJTcBAaU11FXlJHQhL0khADBQIQVnUbHhL0shADBgIQVnUSGBkFBxBWdRJRRxpWVUFER0MSU0cQQVJHWV4eHhBRWF9dVxdRWFNGR1USHAEQVnUSVFtBW0NXF0JRQBcAEF5WElRHRfGZVxdGX170m0JTVV5VHhdeURJTR0LxnlcQQVZcQxJFW0NDQlcQRlhfUlcX8ZASRkdVXkZHVUEXX1lcQkZVQRdBVUdbV11XWUYeEBsQYQEXCBDxtxIBEgcCABJ/SBwSW1cQRvSbXV1eXBBTF0deVxdCVUBDVxBWEFdeRF5AX1wXBxBWdRIYU0JWWUZeXV4SWV1CX1ZeVRILEgICF1ZyGxsSRFNZVllBF0NFVxd/HhJvElFGQ1dZXEMSTgEHElRwF1ZVEkdXQkZSEhhBQkBUW0PxmRJZV0RGUhJUU1lBEF5SQRBf9JtUW0JfQx1WW1dHRBseEnQVVUFDEllARfGZRFJAQ1tVXlUSVFNCEltXQxJUV1xeQl5VQRdRWV5e8ZlXRBJU8Z5GQkdeRlVBF1xVEkRXEED0m1fxnlzzmkVXXkYXQlFBGRBtHhVQUUBSX1UQDRBhAxcIEAAbBxBCQ0EQ8IASYQAXCBABF0JEQRcaGwEXVnISGBJDV0JbXEEeEvKFF2MDEg0SAx4CEkBGRBIYUVhfQFNFU1lBWFwQBxdEQxIEAhBWdRIbElRXXF5CXlVBF1FZXl7xmVdEEl5dWRJCV1ldRURSXlFQW1dDGxfwhxJ6dnwSDRIBEkdGEA8XAwASR0ZDHBUeEldFQFVHRUF2QFJDRVdZRlVBFQhrEHNbQlcX8JsSW1cQUVJARldWRxBXREYQU1Xxnl/0mxBCVkAQXlISUkBCW0QS9YkQU1tdQkEXQ0VXF1FVEkRdXkYXXlVBF0Dzm1RXQEZSR0JBF1ZVElsVX0BSW1xeUhJZXENXQlxSEhhRUl5cR1tXQxJUW1xb9JtVQR4SQUdeEkNdWUYQVvSbREBCW0RBGRAcEHtbQlcXXlESR1dCRlISUUdTW0RbQVcQ8ZcSXBVSXEZXRUEQGkdXXkFSQBBDQlcQAQcSVHAXV0NGF/CbElpbVUdPEvKJF0NFVxcHEFZ1Gx4Qah4SXkRHEghMEH17FQgSYFJC85pFVxBHWRJDV0JbXBJTRxBGVlBcV1ZHEF9WW0MSRFtER1ISXVNbElwVWEBXU1lXEFNDRlVbWUYeEBsQfXQVCBJ8WF9dVxdeVRJbXVJXF0ZVX0ddQlNbElVGF15VEkRXRVtbEggHF1ZyHhdfUVtEEl5XF1FfX0dTQlcXQlFBF15VQRdEUV5SR0JBF0bzm1pdWVwYfx4SbxwSHhV/YxANEHVKR15ZQ0JXEF5SEkRAVlhVRhdcVUBRElFHU1tEW1ES0rSlElxdVVcQRlJfQF1FU1wSUkYQV09CXF1eRlUSWxVRR1NbX1VFU11fUhJRRFJREF5SQRBBUkdZXkQSVUpWUURBGRAcEGNwfRANEGLxnlZZVVISRVxSEkBA9JtGV1lGWV1ZEkJbUF1FQFJHQ1cXV0hCW1tBR1ZcRBJbUxBeWFsQGQQSVHAbElxXRBJTV1teRV5SQRBRXl5Z8Z5XQxJSRhBeVhJAV0VGVRJeQELxnkRVQERbUl5SHBJPSk8=",A3:"SRJGRVNTV3JRQltDVxIIFWdeElpdRURSX1VcQxJGXVtdXkZWW0JXFxpWQFJbXldFElRXQVNeRhdHXhJYUENGVlFcVx4SXvGeUVVBRFtEVxdeF1tZRvObUEBRRl5dXhJTV0MSXlxWXUVfUUZeXV5BF0JRQBdeVRJUV0JEUlNFEh9RX0BDV0gSQVtDR1JeENCxoBBRWEBEV08SXV1DV0VAHhJAR15BEF5WElRXRFFVXENXEFZCEl1XREFRVVISRltWElxXF0ZCXVlREFH0m0LxnlBCU1sSGFFFXVlBUl9VXEMSU11ZRkJdW1NE8Z5AUV4eElVGF15RElpdVV5bVxDxnkJZXF7xmEBSHBBnWRJC8Z5UXFdPVxBBQltEEkJcEFFeQFNHXkYQQltHQxJUXUVAQxJAU0RBUVxDElRbRVdTRlJfVVxDEkBTRRJcUxdfX1dbXlUS9JtAW1lb85pFVx4SY/GZXvSbQFpYXFUSHxkDBRcXEPGXEhsGARIVHhdhfWEX8acABBsQV0MSUV5UXV9eFxobAwQSFRsXQFVGVkBUV1lGEF5SEkRAVltEV1pXXkYXUfObRfGZUEVTXBJSRhBTW15fXFBXXkYXXlESU1tDRlZcU1cXVhdTRUDzmEMcEh4VXF9GXl1eQRUIaxB6XUVEUl9VXEMSRl1bXV5GVltCVxdEQxJF8ZlUW1dIVxUeEnFSXERAUkEQXFJARldCShAaVFdCRFJTRR4XX19XW15VEvSbQFtZW/OaRVcZElJGEFxSQFZBFR4SZlJfQEEXVlUSRfGZU1RGWV1ZEG0eFVRUQRUIEnRWW0JXF1ZVQRdBU1tSXFNXRBIKElpdXkZFV0ISW1dDEltbXVtDV0MSUxVFXBdTRF5WQRBR9JtC8Z5QQlNbEkNXQl4QGlZQQ1dZUVUSU1cQXlYSXV1SXlxXF/GZQl5cWfGfQFUbF1deEltXEFFYX0Be9JtEU1lGEEJWQBBHWRJDUV/xmV9WEl3xnlZFXltTWUBSElVGF1ZVQRdfVUFCQFVBGRAcEEdAX1QVCEsQVF1CQF5VVRANaRJjBhIKEvSyEAcHEltfGFocEkJcEFFYXFRHVEZVR0USUUZDV15GXlQQQlZAU11CQEQSU/GZWPSSEAMCEl0SR1deVlZcRBJJAxBBF1ZVEkXxmVNURlldWRILElJcEF5eQVFcQxJFXBdhfWEXGk4HF0EZHhdbXBJHU0JRWEdCRhcFABL0khAKBBJdEvWZEPGXElwVVkRVR1BeVRL1iRAaHAEHEhISQ0dFElxXF0ZVX0dBEFZSEkLxnlNTRl5dXhsXV0QSW1cQQF5BQUdSElQVVlFTW1NXXkYXV0NGF19FXkNbQF5e8ZkSR1NCEgUBHhAbEGEAFwgQ96VbXBIfQPObVFdARlJHQhsX0LagF1xVQFESX0JDW0FHUhLStKUSU11FRlVKF0RZQUJXXBLVtKISVF1CRlJKEF9YRlVHRRLStKUSREBYXFMSVPGZQPSbUkBWXhAdF19fV1teVRL0m0BbWVvzmkVXENCxoBBcUkBWElpdRFdCQBDQsaAQX0JBU15SElRXF15REl1TXVBSHVRHF0JZV1McEh4VYwMSDRJ8VxdUQldeXFFVUhJAU0RBVRJHU0ISW1cQUVhARFdPElPxnkDzm1VAUV4XGkBeQkEQXlJcRB4XQVVcRFtSXlIS85IXXhdTQ0ZVXENbX1weHhBTW11CQRdDRRVCXBBA9JtWXlJKVRJHU0NBUhJUW0VXU0ZSX1VcQxJAU0USXFMXX19XW15VEvSbQFtZW/OaRVcQQVZcQxJWXFFeTkFVElRdXkFUW1VcQ1cQQkXxmVNbU1JeUhwQfhBTXFFYXVwSHxkBARcXEF9eXB4bF1dEEltXEEb0m1zxnkJYXVlXEBocAQcS9JIQGQMEEBceEkBXRUZFQFVXXkYXXhdTWVNcS0RXEFH0m0LxnlBCU1tXHhBqHhJQVkBVX1IQChBmAxAIFwEQQkNBEPCAEmEAFwgQARdCREEXGlNaVvGeXFISU11aQlzxn0ZVElhAVF1ZXPObUhsQ8IASYQEXCBABF0JEQRcaRl1bXV5GVltCVxhA85tRXlVKUhIbEkdXQkZCQFJTQ1dFQEQbEPCAEn12exIKEgYSQEYXDxADBxJARkQcEh4VV0JAUkdCQXFAVUNCV15GUkESCGwQcUJHV1xXRRLymRdA85tRXlVKUhLyiRdeVRJRU1lGF1ZVElFAVVtZV0ISVkcQVFJHEEBYR1dXFxpUU1lBEF5SElxTWVVRVVISU11CQFFcQxJfXBdeVRJTW0QeF19RW0QSVVwXYWZmF1EXV0RGEEdZEl1dQkRVX1JcRBJBXVxdWUZRW0VXEFNHQkJbRBseEBsQf0dVXllXRRJcUxdfX1dbXlUS9JtAW1lb85pFVxBWVlxDEltXEEZFU1pXQxJUV0RRVVxTU15GF0RVQEQSXFdEEl1HRFFcV0QSVEcXQllXUxwSbxsQXEFCEApJFX95EA0Qc11ZVF9cUxJC8Z5UXFdPVxBXQxJdXUJEVV9SXEQSQV1cXVlGUVtFVxBdQhJfR1VeWVcXXlUSRfGEXlISVFdEEl5XRVRDHBUeEn9xEAoQdFtEVxdeVUEXQFlBRkdVQRdWRRJkf2MSWlNZQRdCQvGeQVVcQ1cQR1kSREBWWFVGF1xVQEFXRUoXW15RWF9AXlJGHhAbEH1hFQgSdl5BRFtZVUVXF1FcU15AVV9SXEQSQ0BRWFJGEERYXl9cQ1NZQFISGFFYQERXTxIbElpdVV5bVxkSUkYQQPSbVl5SSlUSH19fV1teVRsXV14SRBVRQkdHSVNZRhBBQkAQXlJBEFFfW1ZURVdDHBUeEmZ1fxIIFXteRvSaV0BSElxTF15ZX15GVRJTRxBfWFbzmltXEAFzEhhfWFdcXlIS85tHW15b9JpCVx4SVUYXXlUSVEBfW0RXXVdZRhBRWFxEQFheUUb0m0JTWxJUU1lBEEdZVxBXT0JcW1RTRFtYXBBBQ0BFUUNHQvGeVx4QSk9N",A4:"SRJGRVNTV3JRQltDVxIIFX5VQRdcVUdFXV5XRBJTXVpfRVxeQ0VXWUYQV1lGQlcXV0VKFxpfRxdTRldUEkVcF19FQVReVRsXU0USWVtGV1ZHEFZSEkNLWVNAQVJBEFFfW11bRkdVQRcaTgAHEl5fHhwQ8bcSXBVWQEJbQfGZVxdWF0dZEl1XREFRVVISXldFRFVHTxLzm1tXU0ZFW0FHUh4QXhDxmV70m11XWUYQQkXxmUFOXFFCQ1tBR1ISXFtV8ZhAUhJUV0QSXldCQF9GRVNeQVpXREZSR0JBF1ZRXEQSXFMXVFVcQ1cQQU5cUUJDW0FHUhILEltXRUAXVFlKVkZZXVkSQ0dFElRXRBJC8Z5RVUJDV0VARBJDQvSbU1tRW0FHUkEQVvSbU15SXFNaUhJfRxdbXlpeUFUSQlwQX1JBQ1NQVxBWVlxDEltTEFFSXlxHW1cQQUJbRlNZRlUSH0FVXEQSRVxeVllAUlFEW1hcXldbGx4SdFdCRlZbXldEEl1dW/GZUUJeVUEXGlNHRVNCVxsSUVxSQURa9JtDW0ZHVUEeElJeWENFV1lGEFFSQRBA9JtTV0dGVUdFQR4QGxBeXUNbX1xEEAppFXxVR0VdXlcXV0QSUVdeRlISQ0tZU0BGXkNFVxUeEnxSR0JdQ0BRXERfVUZDV0VARBJVRhdA85tUV0BGUkdCQRUeEnpeQURdXkBVElNXQxJEUVlXWVFVQRcaU11ZQURAQlFEW1hcEFZCEkNTQV1ZQB4QbR4VVFRBFQgSdFZbQlcXVlVBF0FTW1JcU1dEEgoSVF1dQkVXXlZFVxBRWF9dV1lGEEdZVxBRWFxEQFhEVUBEVxAacF1cVV4dc1NdU1wbF1dDRhdGQlNZUVjxnlcQQlZAEEdZVxBcWEdGV1teVRJDV1NaWVtBR1ISGH9ycBkSUkYQR1lXEFdPQvObRVtVXFRXEEBeVV9HRVdFQVIcEh4VQkJdURAKSRVRX0BFW1dXFQhrEGYDEAgXflESWltTQFhBU11HW1US9JtcV1RGQl1ZW0FHUhJC8Z5E85pbVxBHWVcQVl5BU11ZRllcQltE8Z4SQFpOQVlDQlcQGkkAABJZXxBWUhJWV1lGVRJES15TR0ZZQ0JXGRJSRhBWUkEQRPSbQ1tUR1xXRBJRQU5f85tDQFlDQldDHhdEUV5eVlFcQxJcUxdGWPGeXUJbUhJeV0JAX1xWXlUSU1cQcVZYUV4ZEBwQZgAQCBd+F1dEQVFbFwMQQkVdRURSEkFHUhJcVxdRRUBWQFUSWVcQVvSbREBCW0QSR1NDEltTEFFYXFRHVEZZXVkSVEcXXFVAURILElsVVUFEU1kSBBJAQFhHRlcXQ0VXF15VElpHQ1FbVxBAUkFEVxdRUUJWUFxXF1ZVEkRXEFFYXERAVlFEV0UcEH4Q8ZlRX1dTElNXEF4QV0NBVlsQABcaXldFVBBBQ1tdR1vxmRJaU1lBF19FQVReVRJVU1lVWVNeRhdWUVxEElxXF1FFQFZAVRsXVvObWl1eRkVXEENCVxBeUhJTR0VTQlcXUFxdRkdVEkJcWUNCV11XWUYQXlYSWl1ZUURbWFwQXFJAVtC3oV1HRFFcVxcaQ0tZU0BBUhJeV0JAX19CQVNHW1NZQFIbHhAbEGEBFwgQflISXVdEQVFVUhJTWl5fWUNCVxBCVkFDVxdCUUAXR14SWVdFQFhGQlNZQV1XQ0ZVR0USXFtV8ZlA9JsQVlZcQxJbUxBUUlxEVxcJEEdZVxBfWF7zm1RHXFcXUFxdRkdRXENXEBpDS0BXF1FFQFZAVRIYEmgbF11TUUJCVRJbVxBA9JtTV0dGVUdFEkBdREZDS1lTQEZeQ0VXF0FRXEQSXBVWUURbQVdCHhdXXUL0mFNaVlxEEltXEFxSR0JdQ0BRXERfVUZDV0VAF1xRRkJAVV4XVlUSRFcQVF5KVUAZEG0eFVBRQFJfVRANEGEDFwgQABdCREEX8IcSZgAQCBcGEEJDQRAaUkpAXlhbRFNDW19cF15fVV5DRVcXVlVBFwEQV0RBUVtEGxDwgBJhARcIEAEXQkRBFxpWV1lGVR4XXFVHRV1EQFZcQ19SRkRXQkAcEkXxmVFSQkRXQkAZEvWFEH9zfhAIFwMQQkMSDRIGAhBCQ0EeEBsQVUBFV0VARHRCV0ZHVVxDV0MQDWkScVhcVl1ZVkJXF14XXUVWQlcX8JsS9JtcV1RGQltGR1USR0dZQRdRWFtaW0FHUhLyiRdXRBJUQF9bRVcQQ0JXEPCcElwV9JtcV1RGQltUW0TxnhJEQFZEVUBEVxBeEFdDQlZRVRJSXERAUhJeV0JAX1xSQRDwjBwSHhV885tQXllVUkAQXhBXQ0FWWxABF1ZRXEQSXFMXVvObWl1eQUNAUUZeXV4SU1cQcVtTRVZSEnJXRVxRQFMcEm8bEFxBQhAKSRV/eRANEHTxnlFCW0MSRVwXQPObREdcRlZGEFZCEkRTVV5VU0ISQ1NZQRBRWFxTXkJAVRJER0ISW1MQWFhcU0ZeXV4cFR4Sf3EQChB0XV5cVvGeRhdeVRJaXUQSREteU0dBVRJaU1lBF0JVW1lXEPGXElFAQ1tTR1tXQhJbV0MSBBJVQURTWUEXV0hC9JtCW1pXXkZWR0gcFR4Sf2QQChBz8ZlfWFxEQFISQFNFEvObW1tdW1lTRFtYXBBVRfGSUVISUUdPEgMSUkFDU15BEENCVxBeVhJaXVlRRFtYXBBcUkBW0LehXUdEUVxXF1dDRhdRWVBb8ZlXF1dEElJKQF5eQ0VXF15RElFbSFNDW19cF0FFQBdA85tUV0BGUkdCHBUeEmZ1fxIIFWDzm1NbV1cXR15XF0FJXENa85pEVxBAXlVfR0VXRUFSEkJXW1tRXEMSU11ZRkJdQVdCQVISWFtERl9AXkNFVxsS85tUWlVeW1cQXFZcX1/0m0RAXkNFVxdXRBJVXl9RVlVVElpdXPGeUUVeVltCVxkQTU9K",A5:"SRJGRVNTV3JRQltDVxIIFX5RElrxmV9YW0JXF19fUF5eWUFSEkBeQkFZV0JAQxJF8ZlBUlNFShdBQPGeUVlTW1tD8Z5BEBpfW0BCWFFRX0dXEEJYR0ISW1dDEkRTRl1eQEMSWV1FRFJTRUobElNXRURVXlJGH0FDQFlTQ0ddEkddRUAXXlVBF1VVQUNXQxsZEnNaUkgQXlJBEFNTXVxXRFFVXENBEBpyXHN+dmFjEgUCAgYXCBAAAR4HEhISVVwXVlVGQ1cQVlISQ11aX1VbWxscElsVRUFWVVUSQ1NCVl5UEFZSQRDxnlFCU1lBEBp2fGN3ZBICAgUEGRJFV0RTRVZVElsVVVxTXUJfXkFDV1pXXkYXV0QSR0BZRFISXFcXUVVAQVdRRxdWRRJEXV1fUltcElnxmVFSQUNTXkBVEkddRUAXUV9cRF1cW1NXQhJbV0MSREteU0dBVUEXVlUSW1MQX/SbXV1eQFUcFR4SXFhGWV1ZQRIIbBB4S1Bb85pZVxBWQhJDXVpfVVtbElVGF/GZUUVTXkEVHhJ6XkJAXVRTXUJSHhBRUkBGV1tXRBJSRhBf9JtdXV5AVUEXX0VeQ1tAXlJBEh4VYlxTREZZUV5G85sXUfObRfGZUEVTXFcXV0QSVF1eQVheWVZWRlldWRBtHhVUVEEVCBJ0VltCVxdWVUEXQVNbUlxTV0QSChJTW0NGXlxXR1JAEEdZVxBRWEBC8Z5eUUZeXV4SXkFDR1ISVBVCXFUSUlxBR/SYRFcXVhdHWVcQUVZHQ1NbW0TxnhLzm0NTUl5eVxBCVkAQVUVdRUJSEkTxnl9fW1kSVUpH8ZlAXl9VXEPxmRIfdVFbRBIWEnVdQlweHBIeFUJCXVEQCkkVUV9ARVtXVxUIaxBmAxAIF3deEkRXXVNeXFUeFwMDHg8SFRJTV0MSVF1cXvSbV1tSXEMSU11CX1JcRBJaXVlcRBJUVxcFEFobEgIEGwUQFxdBX1xDElVcF1ZVRkNXEFZSEkNdWl9VW1sSGAwXABBaF1ZVEkVTREZFU0BTUFcQXlISR1dSWR1XWVYZElJGEAEHHgYSEhJDVxdW85tUXlFAUlxEElFTRFtQR/ObRBJAQFJBQUdSEkRdQkEQXlJBEF9WRllcRBwSHhVjAhINEmBA9JpDElNXEAsHEhUSU1dDEgYA0rKkAwcSVlxDEkJGWV5eQVVcQxJFXBdBXVNFRkBaWFxVEkdTQhJdXUVAFxoEABcXEFdZRkJXFwAQV0MSBRJfHhALFxcQDBcHEFoeElVGFwcIEhISU11ZQUVeQ1deRhdeVUEXQPObRFdRR08SQ11UW1FHTxJBR1hGWVZeV15cUl9VXEMcEH5SEkNdXkAcElldRFtRW1NTQ1tfXEQeEEFDW11HW1NEW1hcEPGeX19GXl1eXFJeXFcXV0QSW0ddW/SaQlcXQFVGVkBUV1lGEF4QV15WWEBdW0RBVV9SXEQSUkYQVEVTV19SXERXWUYQXlYSXkdeRh4QGxBhARcIEH5SElNTRBJ4HHocEFb0m11dWUZCVxdDRRVeXhBXT1tDRlISQF5CQVlXQkBDElrxmV9YW0JXRBJUW0RGWVxURlVBFwgQXhBaWUJHXVNTWkJVElJBRBJZ8ZlRUkFDU15AVRJWR0gSRF1FRFJcWUBEElNdWUFTW1JcREEXXF9HQVdRR08eEEZWXFRbRBJBR1ISXFcXUVVAQVdcV0MSGFdDElxXF0FEQF5TREdaGxBV9JpCV1lGEF4QU0BCRVdeRl5BQ1NQVxBfWEZVR0UcEHVWW0MSERJyXUVcEBoFAgAEHhJAQFhHRldZRhBXT0Lzm0VbXVdZRlFeUl9VXEMSQUdSElRdRV9ZQBdYRUFDVxBTR0DzmkQSXBVWQkBAUlxEW0RBUVVSElFf9JtcW1hAVRJTR0JTVV5VX1JcRBJbUxBA9JtEV1lGWV1ZEkBTRRJCU0dCX0BDEvOSF14X8Z5EVVtbHBJvGxBSU0VXXVcVCBJjBhIKEgUeBRJHRkMS9YUQYwUSChIEEkBGRBLyhRdjAxINEgMeAhJARkQSGHoZfx4SHBJ3U15BEBQXcF9AWRsQ8IASfXZ7EgoSBhJARhcPEAMHEkBGRBwSHhVXQkBSR0JBcUBVQ0JXXkZSQRIIbBB0W0VXEPCcElxXF1FVQEFXUUcXVl9AQxJVRhdBVRJFV0BdRFcQQVZcQxJFW1VcF1RRW0VXEPCMElFeWEBDEkZHVRJbUxBRWFxDXVtbVFNDW19cF1xfUUNHQlxSElVBQxJRUUNbRlcZEBwQdlRWW0VfVUAXQ0VXF/CbEltTEF/0m11dXkBVElJBRBJCXFlDQlddV1lGEFZWXEMSWxVYW0dCX1FWX0BXF/CLElJcEF1CUFxbVlxEEltXEFFYQERXTxJVRhdeVRJUV0JEUl5VRhkQbR4VXkNHFQhLEHp7EggVcVlGUhJUV0QSU11ZQVVbW0EQVfSbXvGeQFFHTxJDR0USXFdEEvObVEBRXEQSQ1NZQRBfWFBZXl5BVUAXXlVBF1FYW1FUQldEEl5bF14XWl5CQF1UU11CUhwSHhV/dhANEGJXW/GYRFISQUdSXkFHUkEQUV9bVlRFV0MSUxV1XHR+cWFkHXF8ZHdjElpTWUEXUV9cUV1eVhdeVUEXQPOGW1dDElNXEF4QWllCR11TU1pCVRJSRhBWQhJTV0VEVV5SRh4QGxB9YRUIEmBSXllXF0JC8Z5RWUH0m11XWUYQd1lxfHNkYRwSdnxjd2QSVUYXXlESR0BVR0FXEFdPQvObRVtdV1lGUV5SEkNHRRJcFV9bQEJYUVFfR1cQV0MSXFcXUVVAQVdcV0McEh4VZnJ/FQgSd09CXFtGR1USVF5RW0VXXVdZRhBCW1NDRl5RWUb0mxBBTlxRQkNbQUdSEl5dVEZFQFlXHBJa8ZlfWFtCV0QSXUdbRllCW1dDElJGEFZeQURbWVFEW1hcEFdZQ0XxnUZVHVJKQPGeQFlXWVFVHBVPTU8=",A6:"SRJGRVNTV3JRQltDVxIIFX5VElRbQlFCW0QSU1cQXlYSQvGeUV9fR1deQVISGHNjZBDQsaAQXFhLUUcXU1NRQl9SV1lBENCxoBBRWEBEV08SQED0m1ZAWFxEU1sbEF5eUPOaRVcQVlISXFMXVl9CVl9ZXFISQF1CQBBfWEZZRFJAEFZSQRBTVEZVQRdEWUZWR0gSH19RXFBXQh4XUF9bRVccElZCQEBSXFRAUhseEntTEFxeUV9GXlxVElNXQxJHR1ZURB4QXlJBEFZFXVdHUkEQV0MSU1dFRlFbWUEQR0RTV1dEElFWU1tTRl5UQxJT8ZlGWEdCXFJcRBJUVxBf9JtTU1lbQ19SEvOSF14X8Z5RWFdbXlUSU1dDEkRLXlNHQVVBFwgQXlYSQ0dFQURbWkdcU0NbX1wXQkVbRBJcUxdW85tEV15BXlBZXl5BUUZeXV4SUVNGXUVbQ1dZRhBeVhJU8Z5CVVxTU15RUh4QU1BVQlNB8ZlXF/GQElsVUVZYXlVBVFdeUVISQFNFElxTF19RRkJAUUZeXV4SUlxTXUVXEFtZU1NaUkTzm1ISVEcXUV9AQ1dIEkdA85tRQF9cQ1NcHBUeElxYRlldWUESCGwQc1tFUUVbQxJUVxdeURJF8ZlRWF9AV1lBVRJSRhBWWEJRX15cVRAbEGBXRUZFQFVTRFtYXEMSREteU0dGWUNCV0MQGxBgQPSbRldZRlldWRJUV0QSU11ZVkVbQ1dDElZWVFtURllEUkESbxsQVlZEEAoQcVNZQFISVFdEEkNRXldeUVJBEAgXX19cQ0BVQBdRX19aV15GF1ZVQRdWX1xZ8ZlXRBJeV0JAX1BeXVxdUFtBR1JBEFdDEvObR1tU8Z5fWV1bXVdbRkdVQRfxmVFbU1lAUlxEEkJcVRJbXVkSU1cQQVZcRPGeEkBHVV5ZQ0JXHhAbEEBAWFQSCEwQU11FQFlVUhAKaRVjARINEnFHF1FfXlvxmFVSEhh3WXF8c2RhEAAHAAQbGxJDV0JeQxIAHgcSEhJfXEMSRFdERvObF15VEkNTUlNUElZHWvGZEh8CHAsXFxBDQl1EW1NbVVweHhBTW11CQRdDRVcXQkLxn0EQVlISBAQXFxBWUkEQXk5R85tSXEMSWFxEElJKQPGeQFlfUlxE8Z4SXFcXRFFCWEZRVVISCxJRU1NXF/GQElsVVUFEXUISU1dDEkdHVlREEl5bVF1EW1nxmVdEHhBeVhJ2QFZcU1cXXlVBF1MQW1lGVUBTW0RXRBJAU0USXFMXXl9bF1ZFEgUGEFT0m0ZAXldCEgUCAgcZEBwQZgAQCBd/UVxQV0ISUkYQUFhbQlcXXllQ9JpCV1lGEEwPChBndhJUVxdWX0JWX1lcUhJVRhdeF1NTVllRQ1tfXBdTREZSW15GF0wIABdncRIfUV9cQ0BVEkkHAhJicxBCWEdCEkJcVRJVXV5cUhJeXUNXEFdDEk4BF2dxEkddRUAXR15XF0JFXF5GWV1ZGxAIF15VElRdXUJYQERXWldeRhdTVFZeUURbURJU8Z5GX0dFXFUSU11eURdHXhJUW0JRQltEElldQl9WXlVfUlxEElNXQ0ZeXPObF1NFShdQVUFYW15BF0RZRlZHSBwVHhJjBBIKEntTEFxeUV9GXlxVEkRXEFReSlUSREdCEltXQxJF8ZlRUkJEV0JAQxJTV0MSREteU0dBVUEXVl9CVl9ZXFJAV1tGR1VBFxpxZmES0rSlEl5dTlNFElZRU0daUFVcRBscEltbUvGeQFFcQxJFXFISVF1EVxBXT1FVQURbRlcXV0QSRfGZQvSbRPGeVxBWUhJUXUdTXVtZVxBDQlsQVl5fWVxCVxBXWUFFW0NXEF5WEkNXWUFZUF5eWUb0mxBcVkZFQFJeXFcXCRBRWF9dVxdeVRJUXUJGUkoQQkXxmVRFXV5GVl4QGlRdXkZF8YReUh1U8Z5RWUFeXV4bF1/ziUVbRBJdR0NDQhXzkhdMAgcXU15BGxJcVxdAWUFGR1USVlZUW1RGWVQXV0NGF0JcR0QS85tbV0bxnhJTWlJIEF4QU1RdW1dDUVJcRBwVbxwQVVNCV1pXEggVYwESDRICHgISQEZEEvKFF2MCEg0SAxJHRkMSHwoIEhgSCAAXHRAHBRJlcxcZEFb0m0RdQkBeV1pXXkYeEvKFF2MDEg0SAx4CEkBGRBIYQU5cUUJEVxAZF1NTUUJfUldZQRAZF0JC8Z5UQl1ZRlFeHhLyhRd/dH4XCBADF0JEEgoSAQIXQkRBGRAcEFJAQldCQEN0RVdBR1JcRFdEEAppFfG5UUVbQlcX8JsSWFwQV0RGEFNUUUJdF0JRQFRXEENCFV9cF1MQRkVdQBJTVxBWWEJRX15cVRJDXUVGF15VEkNXXUJEEvKJFxpTFVJBRBJbFVFeQ1dCXFZcU1cXQllRF1NCRl5UWVFeV1wSGBJSU15BQ1cXUFFBVl5VElJcEF9WXEFHUhJBR14SVVxDQFVGXldeRhdeURJT8ZlCUlxUU1lRVRsZEBwQeEdSXl5XQhJbVxBA9IZcVxdWVRJUXV5GRfGEXlISVEcXUV9AQ1dIEkdA85tRQF9cQ1NcHBVvHBBbQUUQDUkSf34QChD0u0ZdRkdVEltXEFZWXFdXRRJUV0QSQEdRVEMSWlNZQRdcF1dPQlxbRkdVEllbEF5WElRdR1NdW1lXEFxeElxXF1FZQFRHWUYXUfObRfGZUEVTXBwVHhJ/cRAKEHRbRFcXXlUSVFtCUUJbRBJTVxBeVhJC8Z5RX19HV15BUhJDU1lBEFdPQlxdXkZVQBdeVRJQQFFCX1tBR1ISGGd2GxBcXhJcVxdA84ZbVxBWQhJAQPSbVkBYXERTWxwSHhV/YxANEHNdWkJRQFISUURSURBXT1NTRl5GRVZSElxXRBJGU1tXRUBEEmVzF1dEElJKQF5eQ0VXF15VElPxmUZYR0JcUl9VXEMSQ0tZU0BGXkNFVxdXXkZFVxBzY2QcElZRU0daUFVcRBJVRhdCQvGeVEJdWUZRXhkQHBBjcH0QDRBiV1tbVRL0m1NaUl5cVxdfX170m1NHW1NZQFISGEFOXFFCRFcfQPSbU1dHRlVHRRscElpTREdFU0RbWFwQUfSbQvGeUEJTW1cQU1NdXFdEUVVcQ1cQV0MSVPGeUVlBXl1eElNXEEFWXETxnhJAR1VeWUNCVx4QSk9N",A7:"SRJGRVNTV3JRQltDVxIIFX5REkdXQlFSQkRbWFwQRF5BRVdbXlUSWVcQVvSbQFdZVhBCVkEQQVJHXFdaV15GF1ZVQRdLVUdPHhBfVltDElNXEEJbR0NbUkdCQRdTWUBSQRBBR/GZUV5TXFtE8ZlXRBJURxdRX0BDV0gSVPGZQPSbUkBWXhAaYQMQ8ZcSZgceEgoSYQMQQFLxl11eRhBeUkEQX1JBQ1NQV0MSWVdCRFJHSBJBW0NHUl5DHhdkAhJbV0MSRVdcU15XHBJhARBTWVNcS0RXEF5SQRBUWEBdV0QSGF70m0PxnlcQUV9XShJbVxBCVkZZV1lGEHAeHhBkAxJcV0QSU11CXlVHRUEQGlvxmUH0m1USVFpVSBdeVRJHU0RbUlxEEnYbEFdDEmYHF15VElpdRURSX1VcQxwQZ1lXEF70m0NbWFwQXlhRUV5eQfObUhJDR0dCQltaVxBHWRJRQUdXU0YXQkLxnlFZQRdWVRJbUxBEXkFZXVkcEGJYR0ISQV1ZQBdWVRJRU/OVWFwQVVtdUlNbVxBXQxJTXV/xmUBSXERXGxJcVxdRVUBBV1FHF0Dzm1ZeWUFSEkVcUhJZXEPxmVVFU0RbWFwQV1kSXVdDRlFcQxJVXBdAVV5WRlldWRJcFVZRRFtBW0TxnhJUVxdGX0dDV0MSVFdDElZbQldEHBIeFVxfRl5dXkEVCGsQdltCV0QSRltER1VeW1dDEmEDEPGXEmYHFR4SYUfxmVFeU1xbRFNEW1hcEFFYQERbVFNcVxUeEn70m0NbWFxDElTxmUD0m1JAVl5VQRdeX1FWXllB9JtVQRUeEntZRvObUEBRRl5dXhJU8ZlA9JtSQFZeVRBqHhJUU0ESCBV0UVtFVxBWUkEQQVRbVVxUV0MSDRJFRl5eWUFSQBBeEPGZRkJWVRJTVxBRVkEQUVtbXltGR1VBF15fUVZeWUH0m0MSH1/zm0NaX1ZSElFcVkZfX1gfU15eXFlDQlcZEkddRUAXUV9fR0BVXFNAVRJbVxBUWFxTRl5dXlxSX1VcQxJeXUVfUV4XVkUSVFdCRFJTRRJSXBBA9JtDV1ZHHhAbEEBAWFQSCEwQU11FQFlVUhAKaRVjARINEnxXF0JRRl5XXkYXcxBAUkJCXVNHWUYXUV9ARVdTRlJfVVxDElxXRBJWXUVfVUEXGkBdWl9VHhdUVUdeXlxXRBsQX1ZbQxJHV0JWF15REkdXQlFSQkRbWFwQVlJBEFFYR1xXQkBDEgwS85IXXhdbWURVQERXHBJbVxBCVkZZV1lGEHAX8ZlRX11FVxdGX0ZWXlVfUlxEEvSSEEBSUV9cWVPznENAVRJTV0MSUV1CX1JBEFtTV15GXkNFV0QSGAIYBhBTQhJEV0RGEFZSEnJXWUFfXB4cEHFSQRBGRV1FUFtXQxJTW0NBWFFZ8Z5BEF9YXERAUlxEEkZHF1tbElVKXkFEVxdCXEdEW1VHRUEQSFhcVUEXUfObRfGZUEVTXFdEElRbREZZXFRGVUEXV0QSRELzm1RbUV5eQfObUkEQQlhHQhJDQFFbQ1dCElNbVlT0m0JXWUZDElZBQFdURkMSU1cQXlYSRltEW19cGRAcEGYAEAgXd14SREdAV0VCX0FWXEQSW1MQUVZARFcXVlVBF17zm0RbX1xEEhh2WFEeEgQbEFdDElNXW15VElNXQxJWW0JXRBJGW0RHVV5bV0MSH3ZfURkSBBIYEn1dU/GYXlISA3YeHhBeVhJc8Z5BWV1ZEllcUfGZQF5XRUBSElRHF0JRRl5XXkYXcxBRWEBCV0RCX1xTEvOSF14XU15AVRJhBhAaQVdCRlIbHBJEQvObVFtRXl5B85tSElRTWUEQXlYSQFdFUVVCQ1tfXBdWVUEXUV9HW1dFQEQeEEZWXFRbRBJBR1ISXFMXXvObRFtfXBdBRUL0m0JbUkdCVxdWRRJHU0RbUlxEEnUSU11FQFVBR11eVhfxkBJbFVFbRVcQZAQSGFBbV0VXHh4QW1pCXFtGR/ObUhJUU1lBEF5WEkJXVF1eXFZbQ0FWXFNXF1ZVQRdUX0BaV0McFR4SYwQSChJ7V0MSWldDQVZVVUEXXFVAQVdFShdbQ0FCQRBWUkEQS1JHSBJWQEJbQVdeRhdTRRJUXUJGUkoQRF5BRVdbEkBAXl9RW0VXEGQGEhhA9JtTV0dGWV1ZGxwSR1NDQVJcRBJHU0ISWxVRW0VXEGQFEhhAUl5RW0QbHBJHR1lBF0FfXEMSVFtERkJbVUfzm0QSVVwXQlFAVl5c8Z9eVRJBV0JBF2QDEh9UX0BaV0MbGxJmBhcaU11CXlVHRUEZElJGEGQCEhhfWEdGV1pXXkYeHBBzQlFFXFISUVtFVxBBUkdcVxdcVRJER1ZUXkYQCBdeF1tZRvObUEBRRl5dXhJU8ZlA9JtSQFZeVRIfX1lBUhJVXBdAVV5WRlldWRJUVxdeF1dZQVVfVV5VElNXEFFSQRBTXkBVQRdXXhJF8ZlBUlNFGxdXQ0YXW15WXkFAV1lBUVBbVxBCWEdCEkdXQlFSRF9bRRJFXBddUlhSRhBRWF9AXlJGEBpEUxBUWEBdVxsSQ1MXUV9HW1dFQBdXRBJEXV4SWl1FRFJfVVxDEkNbWkdcRlZc85taV15GHhwSbxsQUlNFV11XFQgSYwYSChIEEkBGRBIYVl5BQ11UW1FGXl1eEnYdchLVtKISR15FQV5XRUBEEkpdWVdDGxfwhxJmABAIFwEQQkNBEBp2Eg0SYQYQUVhHXFdCQEMSDBJyEgoSZgEXVF9AWldDGxfwhxJmARAIFwEQQkNBEBpDQFFYUkYQZAbQtqBhANK0pWQDHWEGH2QCEhsSWV1EW1hcEFYQW15G9JtXQFZGWV1ZGxDwgBJ9dnsSChIGEkBGFw8QAwcSQEZEHBIeFVdCQFJHQkFxQFVDQldeRlJBEghsEHNdWVRfXFNAVRJbFVFGQ1dZXENXEFZSElxTF0Dzm0NbXlcXGlRTW0ZfXF5BXVcbEl1LWEJZVx4SUURSURBHWVcQXvSbQ1tYXBBRWEBEW1RTXFcXGllRXhJcV0QSSVdCShBBWFxEEl5cRFNURkMbGRAcEH5cRldFQVVAF15RElvxmUFeXV4SdhIYZAMeEFtZVPObRVtVR0VXHBJUXUVeUkdCQR4SVUYXXlESW/GZQV5dXhJ1EhhkBB4QQUJC85tFW1VHRVccElFdQl9SQRkcFR4SfUJQXFtSQBBWUhJaR0RGWVReV0ISW1MQXPSbU1dEQVlG9JsQVlISXFMXUV9fWkdeW1RTRFtYXBBXWUZCVxdTWUBSQRAaXlxE8Z5VQlNDW19cHhJUU1lBEF5WEkNLWUZY8Z9BVRwVbxwQW0FFEA1JEn9+EAoQc/GZUUVbRBJCXBBWUkFDW1kSX0cXR15XF1tdU1BXEEFWXEMSRVdcW1JAEF5SEkRAWEdSXlIS85IXR15XF0hfXFISQED0m1NbRFcQVkISU1dFRFVTQhwSHhV/dhANEHFBRF1TW1ISRVwXQlFGXldeRhfxkBJCXFUSTV1eVxdfUVtEEl4VUkpAXl5DRVcXXFkSW1MQQUfxmVFeU1xbRFNEW1hcEFxeElxTF19ZQVISVVwXQFVeVkZZXVkSVFdEElFbRVdDEmED0rKkZAUcFR4Sf2QQChB+VlVcQ1tWW1ISZgYXGkBTQ1tVXEMScRsXV0QSYQEQGkdTRFtSXEQSdRscElNbQ0ZeXFdHUhJcV0JAQxJF8YReUkEQV0MSVUpHXllDQlcQXhBbXkb0m1dAVkZZXVkSVVxDQFUSW1dDElZbQldEEkZbREdVXltXQxwVHhJmdX8SCBVzQkZeUUVeUhJCW1BdRUBSR0NXWldeRhdeVUEXXVJBUkBGU0NbX1xEElNeXlxZQ0JXQxIfdl9RRBIB0LehAhsbElxTF15fUVZeWUFWRlldWRJRXFZGX19eQ0VXFxp0XVRBEAHVsqMGFx0QAXMbEFdDElxTF1zzm1RXQ0FeRvObF1RfXFRGWV1ZXFVeW1cQVlISXBVeXETxnlVCU0NbX1wXV14SRfGZQVJTRRIfZAES9JIQZAIbHhBKT00=",A8:"SRJGRVNTV3JRQltDVxIIFX5REkNAUVxEX1lBRFtfXBdWF0dZEl1XREFRVVISXldFRFVHTxJUFUJcEFxSR0JdWVcQGnYSX0cXcBkSVkcQXFJHQl1ZVxBBQltGU1lGEBp0GxBBUhJWU15GEFNCEl5bQVdRRxdWF0dZVxBIWFxVElNXEFhYXFNGXl1eEh9BSVxWQkNXHhIKEltdQkFGR1USW1cQX1JBQ1NQVxBTRUBZRFIeEFZSQRBE9JtDW1RHXFdEElRHF1xVR0VdXlcXcBBW9JtGV0VBVVxDEkVcUhJDR1VBRFNZUVUSVFpZX15DRVcXVlFcRBJcFVJBQFNUVxBBTlxRQkNbQUdSHhBDQlsQU1BbRBJSXENHXkZVEkRHQhJbUxBfUl9SQFZcVRJTRxBcUkdCXVlXEHEZEnxXRBJUQFhVRVdEElVGF14XU1tRX11bEkBXRUZFQFVXXkYXUVVGQ1cQUVhfXUdZW1NTQ1tfXBcIEF5SElNTWVxRUF5BEFdDElwVX/GZQFjxn1xSEkNXF1RZSlJcRBJER0ISW1MQX1JfUkBWXFUSdh1yElJGEFBbXUFHUlxEEltTEF5eUPObRVNEW1hcEFZSQRBE9JtDW1RHXFdEEgsSW1dDElZfQFr0m0RTWlteV0QSVl1FUVVcQxJcV0QSRvGeQVlRQl5VQRfxkBJEVxBEXlZVQBcJEF5WElNdVFPznVlXEFdDElwVUlFDRlZBSRJaU1lcQ1tVXFlXXkYXXlESREdSQUNTXlFSElRTWUEQXhBXQ0JWUVUSREteU0dGWUNCVxAJF14XU1tRX11bElVfR/GaUV9XEF5WEkNHVUFEU1lRVRJTFVFVXkAQQUJAEF5WEl1XWlBCU1lXEFZCEl5XQkBfXFIScxwXcVVBF0JVQENHQlBWRlldWUEQV09CXFtGR1VcQxJcV0QSREBYR1JeUkEQVlISXBVWRkRXWUZZXVkeEFZSElxTF1/zm1pdWUBSHhBeUkEQWlZeXEdUW15TQ1tfXEQSVUYXXlESU/GZQlJcVFNZUVUcFR4SXFhGWV1ZQRIIbBBjS1lTQEFSEh8SbV1eVxdWVRJdXV5RQ1tfXBUeEmT0m0NbVEdcV0QSQ0tZU0BGXkNFV0QQHBB5V0VAWEZCU1lBXVdDRlVHRUESHhV/X1ZSQRBXQxJcW1JHSBJT0LCrVlFEW1hcEFZSQRBWRV1XR1JBEh4VZkJdQlBcV0QSXldFRFVHTxIWElPxmUJSXFRTWVFVEGoeElRTQRIIFXRRW0VXEFZSQRBBVFtVXFRXQxINEkBTREFVQBdWVRJbFfObVFpVXltXEF9eUUJdRFFfQl5DRVcXGn13YxLzpRcDABIHAgASUxVFXFISQ0tZU0BBUhsQU0JKEFdRVFVGRBJTXVpCX0BDV11XWUZRR08SX1BEV0JEVlBcV0QS85IXXhfxnlFYV1teVRJTVxBeEF1CVVZcWUFaVx4QGxBAQFhUEghMEFNdRUBZVVIQCmkVYwESDRJxRFZcRBJbUxBGRVNeQVpbQ0FeXV4eF15REkNXQl9eXFFbRF1eElNHEFxSR0JdWVcQcBdRX1xDW1VcQxJUVxdcX19VQFVHRFdDEkHxmUFeUUVeUkEQUV5AU0dbU1lAUkEQU1tdQkEXQ0VXF15VElRdQkJEElNXW15FXlZbQlcXVkUSWVdFQFhcVRJ0El4VUlwQUVhcRFtSXEQSVkdTR1lXEBpeXhBXREYQQfSbQFNF8ZkSR1NCEkJcEFdEQlFRUhJDS1lTQEZeQ0VXHhwQYlJcVFNZRhBeVhJEQFZcQ19eQUNbWFwcElpdWVxEElRXF0Tzm0RbU0dbV0MSUlxEW/SaQldEEkJXREZVXEMS85tbXVlVWfGZV0QSVFcXXlESWlddUEVTXlcXV0QSVFdCRlZbXldEElZHRFtfXFlXXkYYQRddQkRCV1lGEERSQEMSWxVVQUdTU1cXQUlcVkJEW0ZHVRwXZkJdQlBcV0QSXldFRFVHTxJCV1tXRvGeQRAac11THBcBGRINElVHR1pfQF5XHBJDQF9HVV5VQRdWVRJbFVFGQ1deRl5dXhIfU0BTQ1pZVxsSQ11aXF9eUlxTVx4eEEZFXUVQW1dDElNXEF5WEl3xnl9fQF5BUUZeXV4SUkYQVlISXBVWQkBAUlxEW0RBUVVSHhBTUFtEU0NbX1wbElhTW15FUV5cUUZeXV5BF1dEElPxmUJSXFRTWVFVHBUeEmMFEgoS9LIQXhBTQkBeRPObUhJURxdfVUFEU1dXF1xVQEFXRUobElxXRBJG8Z5BWVFCXlVBF1ZFEllXRUBYXFUSdRJdW1BAVVxDEkZXRUEQXlYSXVdaUEJTWVccEkQVSRJYR0ZAUlxEElJGEFb0m0ZXRUFVXEMSXFdCQBBRWFxEV1lHEBpER1JBQ1NeUVISU1peX1lDQlcQHRdcVUdFXURAVlxDX1JGRFdCQBkSU1NeQRdeF1dEQlFRUhJUVxdeURJNXV5XF1ZVEl1dXlFDW19cFwkQUVISXVdEQVFVUkAQRF5XXkYXV15BQltEVxdTV1tFEkNHRRJcUxdfVV9VQFFcUhJURxdcVUdFXV5XF3EQQlhHQhJDQFFcRF9VRkNAVRJbVxBfUkFDU1BXHhAbEGEBFwgQflJBEFZFXVdHUkEQQlJAREdFUFVcQxJcUxdBSVxWQkNXF/GQEgQSXFtSR0gSR0Dzm1RbQxINEhgDHhJ1SkNA85taW0TxnhJUV0QSXldCQF9cUkEQcxddRRJ1EgoSVFNeXFZQWUEXV0QSX/GZQFjxn1xSEkNXF1RZSlJcRBJER0ISW1MQX1JfUkBWXFUSdh1yElJGEFdaQvOYVFpVXEMSXFMXX1FYWEBZRvSbEFZSQRBE9JtDW1RHXFdEElRXF15ZUPSbQldFElxXQkAQQUJQQ0ZWXFNXGxJEU1lWWUEXQ0VXF15VQRdTXUJf8ZlGVl9ZXFJBEEL0m17xn0ZCV1lGEFZWXEMSW1dDEkHxmUFeUUVeUkEQQ0JbEEFSEkZbU1deRhdXSFFSQUNbQVddV1lGEAkXGgIbF3dDQlZRVRJTVxBeVhJKXVlXEFZSElpdWVFEW1hcEAgXUV9RVvGfXFISVUYXV1NBQ1NDSxdfUVtZRllXWVxVXEMSXFMXQUVQREZRXFRXEFb0m0ZXRUHzm1ISVFNZQRBeEFdDQlZRVRJES15TR0ZZQ0JXEBpWUVNHWkdcU0NbX1wYQUVAGkFEW1pHXFNDW19cHhILEh8BGRJ6V11QRVNeVxdWRRJZV0VAWFxVEnQSChJbFVFeVF1fXhdXXUL0mFNaUhJcUxdBRVBERlFcVFcQVvSbRldFQfObUhJUFVZVWUAXQUVAF15RElpXXVBFU15XF1ZFEllXRUBYXFUSdBwSbxsQUlNFV11XFQgSYwYSChIEEkBGRBIYUVhfQFNFU1lBWFwQcBdEQxJ0ElFEVlxEHUdXXlZWXEQSHBJEQFhHUl5SQRBcUkBGV0JKGRL1hRBjBRIKEgQSQEZEEhhf9JtTU1lbQ19SEkbxnkFZUUJeUVtFVxBBTlxRQkNbQUdSGxDwgBJhARcIEAEXQkRBFxpdXVNXQxIREgMSW1tVR08SVBVWUURbWFwQCBdzH3AbElVBR1NTVxsScxsX8IcSenZ8Eg0SARJHRhAPFwMAEkdGQxwVHhJXRUBVR0VBdkBSQ0VXWUZVQRUIaxB0QF9bRVcQQ0JXEF5SQRBE9JtDW1RHXFdEEkNXF0ZCXUJEVVxDElRTWUEQXlISU11FQkMSVFdcXkJeUVtFVxBWQhJeV0JAX1xSEnMSH1dcXlJBEEFYXEQSQlxZQ0JXXVdZRhBWVlxDEltXQxJDV0JfXlxRW0RdXkEXVlVBF1xVR0VdXldEEnESUkYQcB4cEh4VcV9cUV1eVkVXEF5SQRBf9JtTU1lbQ19SQRAIF14XU1tRX11bElJeWENFVxdeF1NURlldWRJDR0USXFcXXFVHRV1eVxdxEBpF8ZlRUkJEW1hcGR4XXlUSVFNeXFZQWUEYWvObRV3znVlXEFBbXUFHUhJcUxdeWVD0m0JTQ1tfXBdCUUAXcx9wGxJEU1lWWUEXQ0VXF1FfUVbxn1xSHVFfR1rzm0NTXVtZV0MSVkdXX1JcRFdZRhBeVhJBR1ZcRFtD8ZkSU1cQX1JBQ1NQV0ISU1NeQRdeF1dEQlFRUhJDS1lTQEZeQ0VXGRAcEHhHUl5eV0ISU1cQQFJeWVdFElxTF0JVQENHQlBWRlldWRJDS1lTQEZeQ0VXF1NFShdGQl1CUFxXRBJeV0VEVUdPEkJXREFVXENbQxIfX/ObWl1ZQFIeEFNDRlVcQ1tfXBsSVPGeQlVcU1NeUVIbHhBqHhJeREcSCEwQfXsVCBJ29JtTQF5GEEdZW0FHUl9VXEMSVFdEEkBdXlxEQRdcX1tFQRBdQhJUV0QSVVRRV0RBF0FRXEQSXl1aX1VAF1xZEltXQxJB8ZlBXlFFXlJBEFxeElxXQkAQQPSGXFcXVlFcRBJcUxdBSVxWQkNXGRAcEHp0EggVe1RXWUZZVF5XEF5SQRBE9JtDW1RHXFdEElRTWUEQcBdfUVtEEl4VUkpAXl5DRVcXQlFBF15REltbUvGeQFFGXl1eElRaWV9eQ0VXF11FElRdXlRYXFQSW1dDEltbVUdPElQVVlFEW1hcEFZSQRBWRV1XR1JBHhAbEH1hFQgSd09CXFtGR1USW1MQRkVTXkFaW0NBXl1eEkdTQhJbW1LxnkBRRl5dXhJTVxBE9JtDW1RHXFdEElRXF3AQRFJAQxJ0ElVGF1ZZQUNbXlVCVxBeUhJC8YNeVRJTRxBRVlxeU1VbQx4XVlUSW1MQUVhRUfGYXFUSUkYQVlISXBVWXlNdWF4eEBsQZHB6EAoQdF1dQlZAVRJWRFVRF0BZVUJXRUAXXlVBF1FcW1Ra85tEEn13YxJRRFZcRB1HV15WVlxEHhdXSEJbW0FHUhJcVxdf85tUU15bRF9VEkRLXlNHRllDQlcQV0MSQ1tDR1USUkpRUUNXXVdZRhBeUkEQARdeWVdCShBWEFNTRl5dXhIfcx9wGxJVQUdTU1cXQUlcVkJEW0ZHVR4XX1VfVUBRXFIScxsXV14SW1tVXBdTRldUElxXRBJEQFhHUl5SQRBcUkBGV0JKHhBKT00="}});function th(i){let e=85,t={85:{ex:"Trafic dense \xB7 Seuil de risque OMS",rule:"Dur\xE9e rep\xE8re : ~8 h max sans protection ; au-del\xE0, risque cumulatif pour les cellules cili\xE9es.",color:"#d99b00"},100:{ex:"\xC9couteurs volume \xE9lev\xE9",rule:"+15 dB (+5 paliers de +3 dB \u2192 temps tol\xE9r\xE9 \xF7 32) : risque en ~15 minutes.",color:"#e67e22"},110:{ex:"Concert / bo\xEEte / casque au max",rule:"+25 dB au-dessus du seuil de risque : danger grave en quelques minutes sans bouchons.",color:"#e4572e"},120:{ex:"Seuil de douleur (sir\xE8ne, enceinte)",rule:"L\xE9sions m\xE9caniques et destruction irr\xE9versible imm\xE9diate des cellules cili\xE9es.",color:"#b82424"}};function n(){let s=t[e],r=["125 Hz","250 Hz","500 Hz","1000 Hz","2000 Hz","4000 Hz"],a=[70,150,230,310,390,470],o=u=>24+u/60*126,c=[10,10,8,5,10,15],l=[12,14,18,30,42,48],d=a.map((u,h)=>`${u},${o(c[h]).toFixed(1)}`).join(" "),p=a.map((u,h)=>`${u},${o(l[h]).toFixed(1)}`).join(" ");i.innerHTML=`
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

          ${a.map((u,h)=>`
            <line x1="${u}" y1="24" x2="${u}" y2="152" stroke="var(--line)" stroke-width="0.6"/>
            <text x="${u}" y="168" text-anchor="middle" class="svg-sub">${r[h]}</text>
          `).join("")}

          <!-- Courbe t\xE9moin 60 ans -->
          <polyline fill="none" stroke="#1d9a6c" stroke-width="2.6" points="${d}"/>
          ${a.map((u,h)=>`<circle cx="${u}" cy="${o(c[h])}" r="3.8" fill="#1d9a6c"/>`).join("")}
          <text x="310" y="${o(5)-6}" text-anchor="middle" class="svg-tag" fill="#1d9a6c">T\xE9moin (~5 dB \xE0 1000 Hz)</text>

          <!-- Courbe M. X -->
          <polyline fill="none" stroke="#e4572e" stroke-width="2.6" points="${p}"/>
          ${a.map((u,h)=>`<circle cx="${u}" cy="${o(l[h])}" r="4" fill="#e4572e"/>`).join("")}
          <text x="322" y="${o(30)+14}" text-anchor="start" class="svg-tag" fill="#e4572e">M. X (~30 dB \xE0 1000 Hz, chute aigus)</text>
        </svg>

        <p class="doc-note">
          <strong>Lecture DNB :</strong> dans les sons graves (125\u2013500 Hz), M. X reste sous les 20 dB. \xC0 1 000 Hz et dans les aigus (2 000\u20134 000 Hz), ses <strong>cellules cili\xE9es</strong> (non renouvelables) ont \xE9t\xE9 d\xE9truites par le bruit r\xE9p\xE9t\xE9.
        </p>
      </div>
    `,i.querySelectorAll("[data-db]").forEach(u=>{u.addEventListener("click",()=>{e=Number(u.dataset.db),n()})})}n()}function nh(i){let e="reflexe",t="idle",n=0,s=null,r=[];function a(){let o=e==="volontaire";i.innerHTML=`
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
    `,i.querySelectorAll("[data-cmode]").forEach(h=>{h.addEventListener("click",()=>{e=h.dataset.cmode,a()})});let c=i.querySelector("#btnReactStart"),l=i.querySelector("#btnReactCatch"),d=i.querySelector("#btnReactReset"),p=i.querySelector("#reactStats");function u(h=""){let f=r.length?Math.round(r.reduce((m,g)=>m+g,0)/r.length):0,x=r.length?(50/3.6*(f/1e3)).toFixed(1):"\u2014";d.textContent=`Effacer (${r.length})`,p.innerHTML=`
        ${h?`<span class="badge">${h}</span>`:""}
        <span>Essais : <strong>${r.length?r.map(m=>`${m} ms`).join(", "):"\u2014"}</strong></span>
        <span>Moyenne : <strong>${f?`${f} ms (${x} m \xE0 50 km/h)`:"\u2014"}</strong></span>
      `}c.addEventListener("click",()=>{clearTimeout(s),t="wait",l.disabled=!1,l.classList.remove("ready"),l.textContent="Attends le VERT\u2026",s=setTimeout(()=>{t="go",n=performance.now(),l.classList.add("ready"),l.textContent="CLIQUE MAINTENANT !"},1100+Math.random()*1900)}),l.addEventListener("click",()=>{if(t==="wait")clearTimeout(s),t="idle",l.disabled=!0,l.textContent="Trop t\xF4t !",u("Faux d\xE9part (anticipation)");else if(t==="go"){let h=Math.round(performance.now()-n);r.push(h),t="idle",l.disabled=!0,l.classList.remove("ready"),l.textContent=`${h} ms`,u(`Mesure enregistr\xE9e : ${h} ms`)}}),d.addEventListener("click",()=>{clearTimeout(s),r.length=0,t="idle",a()}),u()}a()}function ih(i){let e="normal",t="muscle",n=!1,s=null,r={},a=[{id:"pre",text:"\xC9l\xE9ment pr\xE9synaptique",x:108,y:55},{id:"vesicule",text:"V\xE9sicule synaptique",x:192,y:112},{id:"fente",text:"Fente synaptique (~20 nm)",x:262,y:38},{id:"nt",text:"Neurotransmetteur",x:262,y:158},{id:"rec",text:"R\xE9cepteur sp\xE9cifique",x:374,y:74},{id:"post",text:"\xC9l\xE9ment postsynaptique",x:432,y:55}];function o(){let c=e==="block",l=e==="mimic",d=t==="muscle"?"Fibre musculaire (jonction neuromusculaire)":"Neurone postsynaptique",p=c?"Blocage type curare (Claude Bernard, 1856) / anesth\xE9sique : la mol\xE9cule X occupe les r\xE9cepteurs sans les activer \u2192 aucun message transmis malgr\xE9 nerf et muscle intacts.":l?"Mol\xE9cule Y (mim\xE9tique / agoniste) : imite la forme du neurotransmetteur naturel et active directement les r\xE9cepteurs.":"Transmission normale (Cajal, Nobel 1906) : le message \xE9lectrique d\xE9clenche l\u2019ouverture des v\xE9sicules ; les neurotransmetteurs traversent la fente (~20 nm) de fa\xE7on UNIDIRECTIONNELLE.",u=!c,h=t==="muscle"?u?"Contraction musculaire":"Paralysie (message bloqu\xE9)":u?"Nouveau message nerveux":"Aucun message transmis";i.innerHTML=`
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

          ${l?`
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
          <text x="415" y="198" text-anchor="middle" class="svg-sub">${d}</text>

          ${[86,120,152].map(f=>`
            <path d="M286,${f-7} L298,${f-7} L298,${f+7} L286,${f+7}" fill="none" stroke="#e2a832" stroke-width="3"/>
            ${c?`<rect x="280" y="${f-5}" width="11" height="10" rx="2" fill="#e4572e"/>`:l?`<polygon points="282,${f} 292,${f-5} 292,${f+5}" fill="#2bb673"/>`:`<circle cx="288" cy="${f}" r="4.5" fill="#3fb6ff"/>`}
          `).join("")}

          <path d="M370,120 L488,120" stroke="${u?"#2bb673":"#e4572e"}" stroke-width="3.5"
                stroke-dasharray="${u?"none":"5 5"}" marker-end="url(#arrSyn)"
                style="color:${u?"#2bb673":"#e4572e"}"/>
          <text x="366" y="109" class="svg-tag" fill="${u?"#1b8a54":"#c0392b"}">${h}</text>

          ${a.map((f,x)=>{if(!n)return`<g>
                <rect x="${f.x-65}" y="${f.y-11}" width="142" height="18" rx="4" fill="var(--surface-solid)" stroke="var(--line)"/>
                <text x="${f.x+6}" y="${f.y+1}" text-anchor="middle" class="svg-lbl">${f.text}</text>
              </g>`;let m=r[f.id]===f.id;return`<g class="svg-slot" data-slot="${f.id}" style="cursor:pointer">
              <circle cx="${f.x}" cy="${f.y}" r="11" fill="${m?"#2bb673":"var(--accent)"}"/>
              <text x="${f.x}" y="${f.y+4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">${m?"\u2713":x+1}</text>
            </g>`}).join("")}
        </svg>

        <p class="doc-note ${c?"warn":""}">${p}</p>
      </div>
    `,i.querySelectorAll("[data-mode]").forEach(f=>f.addEventListener("click",()=>{e=f.dataset.mode,o()})),i.querySelectorAll("[data-target]").forEach(f=>f.addEventListener("click",()=>{t=f.dataset.target,o()})),i.querySelector("[data-quiz]")?.addEventListener("click",()=>{n=!n,s=null,o()}),i.querySelectorAll("[data-pick]").forEach(f=>f.addEventListener("click",()=>{s=f.dataset.pick,o()})),i.querySelectorAll("[data-slot]").forEach(f=>f.addEventListener("click",()=>{s&&(s===f.dataset.slot?(r[f.dataset.slot]=s,s=null):f.querySelector("circle")?.setAttribute("fill","#e4572e"),o())}))}o()}function sh(i){let e="enclass";function t(){let n=e==="protocole";i.innerHTML=`
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
    `,i.querySelectorAll("[data-stab]").forEach(s=>{s.addEventListener("click",()=>{e=s.dataset.stab,t()})})}t()}function rh(i){let e=!0,t=[{lbl:"Manger (besoin vital)",val:88,col:"#1d9a6c"},{lbl:"Boire (besoin vital)",val:88,col:"#2bb673"},{lbl:"Obtenir une bonne note",val:52,col:"#3a6ea5"},{lbl:"R\xE9diger une punition",val:3,col:"#7f8c8d"},{lbl:"Addiction \xE0 un jeu",val:82,col:"#e4572e"}];function n(){i.innerHTML=`
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
    `,i.querySelector("#btnTogglePfc")?.addEventListener("click",()=>{e=!e,n()})}n()}var ah=Ht(()=>{});function oh({v1:i,v2:e,v3:t,v4:n,v5:s,integration:r}){if(!i)return`
      <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Simulation visuelle : aire V1 l\xE9s\xE9e, c\xE9cit\xE9 corticale">
        <rect x="0" y="0" width="360" height="155" rx="8" fill="#0d1117"/>
        <text x="180" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#f8fafc">Aucune perception visuelle consciente</text>
        <text x="180" y="90" text-anchor="middle" font-size="10.5" fill="#94a3b8">Aire V1 inactive : les messages des yeux n'arrivent pas au cortex</text>
        <text x="180" y="138" text-anchor="middle" font-size="10" fill="#f5d11d">C\xE9cit\xE9 corticale (yeux sains mais V1 l\xE9s\xE9e)</text>
      </svg>
    `;if(!e)return`
      <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Simulation visuelle : aire V2 coup\xE9e, relais d\xE9sorganis\xE9">
        <rect x="0" y="0" width="360" height="155" rx="8" fill="#1e2430"/>
        <g opacity="0.35">
          <circle cx="95" cy="78" r="24" fill="#888"/>
          <circle cx="115" cy="70" r="18" fill="#aaa"/>
          <rect x="200" y="55" width="75" height="40" rx="8" fill="#777"/>
        </g>
        <text x="180" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="#f59e42">Signaux re\xE7us en V1 mais non tri\xE9s (V2 coup\xE9e)</text>
        <text x="180" y="88" text-anchor="middle" font-size="10.5" fill="#cbd5e1">Les aires V3, V4 et V5 ne re\xE7oivent plus correctement le relais</text>
      </svg>
    `;if(!r)return`
      <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Informations fragment\xE9es sans int\xE9gration c\xE9r\xE9brale">
        <rect x="8" y="8" width="108" height="114" rx="8" fill="rgba(56,152,212,0.1)" stroke="#3898d4" stroke-width="1.5"/>
        <text x="62" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#3898d4">V3 seule (Formes)</text>
        ${t?`
          <path d="M62 46 C46 46 38 60 40 76 C42 94 53 102 62 99 C71 102 82 94 84 76 C86 60 78 46 62 46 Z" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M62 46 Q74 32 86 38 Q74 49 62 46 Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <text x="62" y="114" text-anchor="middle" font-size="9" class="svg-sub">Contour sans couleur</text>
        `:'<text x="62" y="74" text-anchor="middle" font-size="10" fill="#c84b31">V3 inactive</text>'}

        <rect x="126" y="8" width="108" height="114" rx="8" fill="rgba(140,198,63,0.1)" stroke="#8cc63f" stroke-width="1.5"/>
        <text x="180" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#5e8f1d">V4 seule (Couleurs)</text>
        ${n?`
          <circle cx="174" cy="73" r="19" fill="${n?"#d93829":"#7b8088"}" opacity="0.72"/>
          <circle cx="192" cy="52" r="12" fill="${n?"#4ba336":"#7b8088"}" opacity="0.72"/>
          <text x="180" y="114" text-anchor="middle" font-size="9" class="svg-sub">Taches sans contour</text>
        `:'<text x="180" y="74" text-anchor="middle" font-size="10" fill="#c84b31">V4 inactive</text>'}

        <rect x="244" y="8" width="108" height="114" rx="8" fill="rgba(224,70,54,0.1)" stroke="#e04636" stroke-width="1.5"/>
        <text x="298" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#e04636">V5 seule (Mouv.)</text>
        ${s?`
          <line x1="264" y1="70" x2="328" y2="70" stroke="#e04636" stroke-width="3" stroke-dasharray="5 3"/>
          <polygon points="326,64 338,70 326,76" fill="#e04636"/>
          <text x="298" y="114" text-anchor="middle" font-size="9" class="svg-sub">Vecteur sans objet</text>
        `:'<text x="298" y="74" text-anchor="middle" font-size="10" fill="#c84b31">V5 inactive</text>'}

        <text x="180" y="143" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c84b31">\u26A0\uFE0F Liens coup\xE9s : pas d'int\xE9gration \u2192 pas d'objet unifi\xE9 reconnu !</text>
      </svg>
    `;let a=n?"#d93829":"#7a7a75",o=n?"#4ca635":"#8a867c",c=t,l=s;return`
    <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Perception r\xE9sultante selon les aires V3, V4 et V5 actives">
      <!-- Fond de sc\xE8ne -->
      <rect x="6" y="6" width="348" height="122" rx="8" fill="var(--surface)" stroke="currentColor" stroke-opacity="0.14"/>

      <!-- Pomme & feuille (statiques, test de V3 formes & V4 couleurs) -->
      <g transform="translate(86, 72)">
        ${c?`
          <path d="M0,-24 C-20,-24 -30,-8 -28,12 C-26,30 -12,38 0,34 C12,38 26,30 28,12 C30,-8 20,-24 0,-24 Z" fill="${a}" stroke="#334155" stroke-width="1.3"/>
          <path d="M0,-24 Q0,-34 4,-38" fill="none" stroke="#5c4033" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M2,-31 Q22,-42 28,-24 Q14,-18 2,-31 Z" fill="${o}" stroke="#334155" stroke-width="1"/>
        `:`
          <!-- V3 l\xE9s\xE9e (Patient B) : formes brouill\xE9es / m\xE9connaissables -->
          <polygon points="-24,-18 14,-28 28,4 6,34 -26,18" fill="${a}" opacity="0.65"/>
          <ellipse cx="14" cy="-22" rx="16" ry="6" transform="rotate(24)" fill="${o}" opacity="0.65"/>
          <text x="0" y="48" text-anchor="middle" font-size="9" fill="#c84b31">Formes confuses (V3)</text>
        `}
      </g>

      <!-- Test de formes (style Patient B) -->
      <g transform="translate(178, 42)">
        ${c?`
          <polygon points="14,0 28,24 0,24" fill="none" stroke="currentColor" stroke-width="2"/>
          <polygon points="14,34 28,58 0,58" fill="${n?"#3898d4":"#64748b"}"/>
          <text x="14" y="76" text-anchor="middle" font-size="9" class="svg-sub">Formes nettes</text>
        `:`
          <path d="M2,12 Q16,2 28,18 Q10,28 2,12 Z" fill="none" stroke="#c84b31" stroke-width="1.8" stroke-dasharray="3 2"/>
          <path d="M0,45 Q18,32 28,54 Q8,62 0,45 Z" fill="${n?"#3898d4":"#64748b"}" opacity="0.65"/>
          <text x="14" y="76" text-anchor="middle" font-size="9" fill="#c84b31">Appariement impossible</text>
        `}
      </g>

      <!-- Balle en mouvement (test de V5) -->
      <g transform="translate(232, 24)">
        <rect x="0" y="0" width="110" height="90" rx="8" fill="var(--chip)" stroke="currentColor" stroke-opacity="0.12"/>
        <text x="55" y="15" text-anchor="middle" font-size="9" font-weight="700" class="svg-sub">${l?"Mouvement fluide (V5)":"Images saccad\xE9es (V5 OFF)"}</text>
        ${l?`
          <circle cx="22" cy="52" r="11" fill="${n?"#e04636":"#64748b"}" class="vision-ball-move">
            <animate attributeName="cx" values="22;88;22" dur="2.1s" repeatCount="indefinite"/>
          </circle>
        `:`
          <circle cx="22" cy="52" r="10" fill="${n?"#e04636":"#64748b"}" opacity="0.25"/>
          <circle cx="55" cy="52" r="10" fill="${n?"#e04636":"#64748b"}" opacity="0.5"/>
          <circle cx="88" cy="52" r="10" fill="${n?"#e04636":"#64748b"}" opacity="0.9"/>
          <text x="55" y="80" text-anchor="middle" font-size="8.5" fill="#c84b31">Effet stroboscopique</text>
        `}
      </g>

      <text x="180" y="144" text-anchor="middle" font-size="10.5" font-weight="700" fill="${t&&n&&s?"#1d9a6c":"#c84b31"}">
        ${t&&n&&s?"\u2713 Vision globale correcte : formes (V3) + couleurs (V4) + mouvement (V5) int\xE9gr\xE9s":!n&&t&&s?"Patient A (V4 l\xE9s\xE9e) : formes et mouvements vus, mais couleurs perdues":!t&&n&&s?"Patient B (V3 l\xE9s\xE9e) : couleurs et mouvements vus, mais formes m\xE9connaissables":s?"Plusieurs aires l\xE9s\xE9es : perception visuelle partielle":"L\xE9sion V5 : couleurs et formes vues, mais perte de la fluidit\xE9 du mouvement"}
      </text>
    </svg>
  `}function ch(i,e,t=null){if(e.innerHTML="",i==="A1"){e.innerHTML=`
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Graphiques scientifiques \xE0 analyser \xB7 Activit\xE9 A1</span>
            <h3>Adaptation cardiaque (DNB 2018) &amp; part \xE9nerg\xE9tique du cerveau (Inserm / CNRS)</h3>
          </div>
        </div>
        <div class="charts-grid-2">
          <div>
            <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Graphique du rythme cardiaque avant et pendant un effort maximal : 70 contre 180 battements par minute">
              <title>Rythme cardiaque au repos vs effort maximal (DNB M\xE9tropole 2018)</title>
              <text x="160" y="18" text-anchor="middle" class="svg-lbl">1. Rythme cardiaque (DNB M\xE9tropole 2018)</text>
              ${[0,50,100,150,200].map(n=>{let s=165-n/200*125;return`
                  <line x1="52" y1="${s}" x2="296" y2="${s}" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${n===0?"":"3 3"}"/>
                  <text x="46" y="${s+3.5}" text-anchor="end" class="svg-sub">${n}</text>
                `}).join("")}
              <line x1="52" y1="36" x2="52" y2="165" stroke="currentColor" stroke-opacity="0.5"/>
              <text x="14" y="102" transform="rotate(-90 14 102)" text-anchor="middle" class="svg-sub">bpm</text>
              <rect x="86" y="${165-70/200*125}" width="54" height="${70/200*125}" rx="5" fill="#2b6de0"/>
              <text x="113" y="${165-70/200*125-6}" text-anchor="middle" class="svg-lbl">70 bpm</text>
              <text x="113" y="182" text-anchor="middle" class="svg-sub">Repos</text>
              <rect x="196" y="${165-180/200*125}" width="54" height="${180/200*125}" rx="5" fill="#d64531"/>
              <text x="223" y="${165-180/200*125-6}" text-anchor="middle" class="svg-lbl">180 bpm</text>
              <text x="223" y="182" text-anchor="middle" class="svg-sub">Effort maximal</text>
              <text x="160" y="198" text-anchor="middle" class="svg-sub">Besoins musculaires en O\u2082 et glucose : tr\xE8s \xE9lev\xE9s</text>
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Comparaison part du poids du corps 2 pour cent versus part \xE9nerg\xE9tique 20 pour cent">
              <title>Masse corporelle vs consommation \xE9nerg\xE9tique du cerveau (Inserm / CNRS)</title>
              <text x="160" y="18" text-anchor="middle" class="svg-lbl">2. Co\xFBt \xE9nerg\xE9tique r\xE9el (Inserm &amp; CNRS)</text>
              ${[0,5,10,15,20,25].map(n=>{let s=165-n/25*125;return`
                  <line x1="52" y1="${s}" x2="296" y2="${s}" stroke="${n===10?"#d64531":"currentColor"}" stroke-opacity="${n===10?"0.6":"0.16"}" stroke-dasharray="${n===0?"":"4 3"}"/>
                  <text x="46" y="${s+3.5}" text-anchor="end" class="svg-sub">${n} %</text>
                `}).join("")}
              <line x1="52" y1="36" x2="52" y2="165" stroke="currentColor" stroke-opacity="0.5"/>
              <text x="58" y="${165-10/25*125-5}" text-anchor="start" class="svg-sub" fill="#d64531">Mythe des 10 %</text>
              <rect x="86" y="${165-2/25*125}" width="54" height="${2/25*125}" rx="3" fill="#1d9a6c"/>
              <text x="113" y="${165-2/25*125-6}" text-anchor="middle" class="svg-lbl">~2 %</text>
              <text x="113" y="182" text-anchor="middle" class="svg-sub">Masse du corps</text>
              <rect x="196" y="${165-20/25*125}" width="54" height="${20/25*125}" rx="5" fill="#d98200"/>
              <text x="223" y="${165-20/25*125-6}" text-anchor="middle" class="svg-lbl">~20 %</text>
              <text x="223" y="182" text-anchor="middle" class="svg-sub">O\u2082 + glucose utilis\xE9s</text>
              <text x="160" y="198" text-anchor="middle" class="svg-sub">Le cerveau consomme ~10\xD7 plus que sa part de poids</text>
            </svg>
          </div>
        </div>
      </div>
    `;return}if(i==="A2"){let n=document.createElement("div");e.appendChild(n),th(n);return}if(i==="A3"){let n=document.createElement("div");n.className="doc-card",n.innerHTML=`
      <div class="doc-head">
        <div>
          <span class="badge-scale">Graphique de s\xE9curit\xE9 routi\xE8re \xB7 Activit\xE9 A3</span>
          <h3>Distance parcourue avant freinage \xE0 50 km/h &amp; sur-risque (S\xE9curit\xE9 routi\xE8re)</h3>
        </div>
      </div>
      <svg viewBox="0 0 540 175" class="sci-svg" role="img" aria-label="Distances parcourues pendant le temps de r\xE9action \xE0 50 km/h : 15 m attentif contre 70 \xE0 83 m en \xE9crivant un SMS">
        <title>Distances sans freiner \xE0 50 km/h et multiplicateur de risque d'accident</title>
        <text x="270" y="19" text-anchor="middle" class="svg-lbl">\xC0 50 km/h (~14 m/s), distance parcourue avant m\xEAme de toucher la p\xE9dale de frein</text>
        ${[0,20,40,60,80,90].map(r=>{let a=148+r/95*330;return`
            <line x1="${a}" y1="32" x2="${a}" y2="136" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${r===0?"":"3 3"}"/>
            <text x="${a}" y="150" text-anchor="middle" class="svg-sub">${r} m</text>
          `}).join("")}
        <!-- Ligne 1 : Attentif ~1 s -> 15 m -->
        <text x="140" y="54" text-anchor="end" class="svg-lbl">Conducteur attentif (~1 s)</text>
        <rect x="148" y="40" width="${15/95*330}" height="20" rx="4" fill="#1d9a6c"/>
        <text x="${148+15/95*330+6}" y="54" class="svg-lbl">~15 m \xB7 Risque \xD71</text>

        <!-- Ligne 2 : Appel (+46 % -> ~1,5 s -> ~21 m) -->
        <text x="140" y="88" text-anchor="end" class="svg-lbl">T\xE9l\xE9phone en appel (+46 %)</text>
        <rect x="148" y="74" width="${21/95*330}" height="20" rx="4" fill="#d98200"/>
        <text x="${148+21/95*330+6}" y="88" class="svg-lbl">+46 % de r\xE9action \xB7 Risque \xD73</text>

        <!-- Ligne 3 : SMS ~5 s -> 70 \xE0 83 m \xE0 l'aveugle -->
        <text x="140" y="122" text-anchor="end" class="svg-lbl">Lire / \xE9crire un SMS (~5 s)</text>
        <rect x="148" y="108" width="${70/95*330}" height="20" rx="4" fill="#c84b31"/>
        <rect x="${148+70/95*330}" y="108" width="${13/95*330}" height="20" rx="3" fill="#c84b31" fill-opacity="0.55"/>
        <text x="${148+83/95*330+6}" y="122" class="svg-lbl" fill="#c84b31">70\u201383 m \xB7 \xD723</text>

        <text x="270" y="167" text-anchor="middle" class="svg-sub">Source : S\xE9curit\xE9 routi\xE8re France \xB7 DNB (alcool\xE9mie positive : au moins +13 % sur le temps de r\xE9action)</text>
      </svg>
    `;let s=document.createElement("div");e.appendChild(n),e.appendChild(s),nh(s);return}if(i==="A4"){let n=document.createElement("div");n.className="doc-card",n.innerHTML=`
      <div class="doc-head">
        <div>
          <span class="badge-scale">Exp\xE9riences historiques comparatives \xB7 Activit\xE9 A4</span>
          <h3>Protocole de Claude Bernard sur le curare (1856)</h3>
        </div>
      </div>
      <svg viewBox="0 0 540 165" class="sci-svg" role="img" aria-label="Sch\xE9ma des 3 exp\xE9riences de Claude Bernard montrant que le curare bloque uniquement la jonction entre le nerf et le muscle">
        <title>Exp\xE9riences historiques de Claude Bernard (1856) sur nerf, jonction nerf-muscle et muscle</title>
        <!-- Montage 1 -->
        <rect x="10" y="10" width="166" height="142" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.24"/>
        <text x="93" y="28" text-anchor="middle" class="svg-lbl">1. T\xE9moin (sans curare)</text>
        <text x="93" y="45" text-anchor="middle" class="svg-sub">Stimulation \xE9lectrique du nerf</text>
        <line x1="36" y1="68" x2="106" y2="68" stroke="#2b6de0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="112" cy="68" r="5" fill="#1d9a6c"/>
        <ellipse cx="138" cy="68" rx="18" ry="11" fill="#e0754f" fill-opacity="0.8"/>
        <text x="93" y="96" text-anchor="middle" class="svg-sub">Nerf \u2192 Jonction \u2192 Muscle</text>
        <rect x="30" y="108" width="126" height="28" rx="6" fill="rgba(29,154,108,0.16)" stroke="#1d9a6c"/>
        <text x="93" y="126" text-anchor="middle" class="svg-lbl" fill="#1d9a6c">Contraction : OUI</text>

        <!-- Montage 2 -->
        <rect x="187" y="10" width="166" height="142" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.24"/>
        <text x="270" y="28" text-anchor="middle" class="svg-lbl">2. Curare sur le nerf seul</text>
        <text x="270" y="45" text-anchor="middle" class="svg-sub">Jonction prot\xE9g\xE9e (ligature)</text>
        <rect x="218" y="57" x="34" height="22" rx="5" fill="rgba(217,130,0,0.2)" stroke="#d98200"/>
        <line x1="212" y1="68" x2="282" y2="68" stroke="#2b6de0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="288" cy="68" r="5" fill="#1d9a6c"/>
        <ellipse cx="314" cy="68" rx="18" ry="11" fill="#e0754f" fill-opacity="0.8"/>
        <text x="270" y="96" text-anchor="middle" class="svg-sub">Nerf conducteur intact</text>
        <rect x="207" y="108" width="126" height="28" rx="6" fill="rgba(29,154,108,0.16)" stroke="#1d9a6c"/>
        <text x="270" y="126" text-anchor="middle" class="svg-lbl" fill="#1d9a6c">Contraction : OUI</text>

        <!-- Montage 3 -->
        <rect x="364" y="10" width="166" height="142" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.35"/>
        <text x="447" y="28" text-anchor="middle" class="svg-lbl">3. Curare sur la jonction</text>
        <text x="447" y="45" text-anchor="middle" class="svg-sub">Via le sang (nerf stimul\xE9)</text>
        <line x1="388" y1="68" x2="458" y2="68" stroke="#2b6de0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="464" cy="68" r="7" fill="#c84b31"/>
        <ellipse cx="492" cy="68" rx="18" ry="11" fill="#e0754f" fill-opacity="0.4"/>
        <text x="447" y="96" text-anchor="middle" class="svg-sub">Stimulation directe muscle : OUI</text>
        <rect x="384" y="108" width="126" height="28" rx="6" fill="rgba(200,75,49,0.16)" stroke="#c84b31"/>
        <text x="447" y="126" text-anchor="middle" class="svg-lbl" fill="#c84b31">Via nerf : PARALYSIE</text>
      </svg>
    `;let s=document.createElement("div");e.appendChild(n),e.appendChild(s),ih(s);return}if(i==="A5"){let n=document.createElement("div");n.className="doc-card",n.innerHTML=`
      <div class="doc-head">
        <div>
          <span class="badge-scale">Graphiques \xE9pid\xE9miologiques \xB7 Activit\xE9 A5</span>
          <h3>Sommeil r\xE9el des coll\xE9giens (EnCLASS 2024) &amp; \xE9crans 12\u201317 ans (ANSES 2026)</h3>
        </div>
      </div>
      <div class="charts-grid-2">
        <div>
          <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Enqu\xEAte EnCLASS 2024 : 13,8 pour cent dorment moins de 7h, 26,7 pour cent en dette de sommeil, 30,6 pour cent fatigu\xE9s le matin">
            <title>Indicateurs de manque de sommeil au coll\xE8ge (EnCLASS 2024)</title>
            <text x="160" y="18" text-anchor="middle" class="svg-lbl">EnCLASS 2024 \xB7 Coll\xE9giens (France)</text>
            ${[0,10,20,30,40].map(r=>{let a=160-r/40*120;return`
                <line x1="44" y1="${a}" x2="300" y2="${a}" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${r===0?"":"3 3"}"/>
                <text x="38" y="${a+3.5}" text-anchor="end" class="svg-sub">${r}%</text>
              `}).join("")}
            <line x1="44" y1="36" x2="44" y2="160" stroke="currentColor" stroke-opacity="0.5"/>
            <rect x="64" y="${160-13.8/40*120}" width="50" height="${13.8/40*120}" rx="4" fill="#d98200"/>
            <text x="89" y="${160-13.8/40*120-5}" text-anchor="middle" class="svg-lbl">13,8 %</text>
            <text x="89" y="176" text-anchor="middle" class="svg-sub">&lt; 7 h / nuit</text>
            <rect x="140" y="${160-26.7/40*120}" width="50" height="${26.7/40*120}" rx="4" fill="#e0754f"/>
            <text x="165" y="${160-26.7/40*120-5}" text-anchor="middle" class="svg-lbl">26,7 %</text>
            <text x="165" y="176" text-anchor="middle" class="svg-sub">Dette &gt; 2 h</text>
            <rect x="216" y="${160-30.6/40*120}" width="50" height="${30.6/40*120}" rx="4" fill="#c84b31"/>
            <text x="241" y="${160-30.6/40*120-5}" text-anchor="middle" class="svg-lbl">30,6 %</text>
            <text x="241" y="176" text-anchor="middle" class="svg-sub">Fatigu\xE9s matin</text>
            <text x="160" y="196" text-anchor="middle" class="svg-sub">Moyenne semaine : 8 h 16 (besoin recommand\xE9 : 8\u20139 h)</text>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Enqu\xEAte ANSES janvier 2026 chez les 12 \xE0 17 ans : 90 pour cent smartphone par jour, 58 pour cent r\xE9seaux, 42 pour cent 2 \xE0 5h, 9 pour cent plus de 5h">
            <title>Usages smartphone et r\xE9seaux sociaux 12\u201317 ans (ANSES 2026)</title>
            <text x="160" y="18" text-anchor="middle" class="svg-lbl">ANSES (13 janv. 2026) \xB7 12\u201317 ans</text>
            ${[0,25,50,75,100].map(r=>{let a=160-r/100*120;return`
                <line x1="44" y1="${a}" x2="300" y2="${a}" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${r===0?"":"3 3"}"/>
                <text x="38" y="${a+3.5}" text-anchor="end" class="svg-sub">${r}%</text>
              `}).join("")}
            <line x1="44" y1="36" x2="44" y2="160" stroke="currentColor" stroke-opacity="0.5"/>
            <rect x="58" y="${160-90/100*120}" width="44" height="${90/100*120}" rx="4" fill="#2b6de0"/>
            <text x="80" y="${160-90/100*120-5}" text-anchor="middle" class="svg-lbl">~90 %</text>
            <text x="80" y="176" text-anchor="middle" class="svg-sub">T\xE9l./jour</text>
            <rect x="118" y="${160-58/100*120}" width="44" height="${58/100*120}" rx="4" fill="#7c5cd6"/>
            <text x="140" y="${160-58/100*120-5}" text-anchor="middle" class="svg-lbl">58 %</text>
            <text x="140" y="176" text-anchor="middle" class="svg-sub">R\xE9seaux/j</text>
            <rect x="178" y="${160-42/100*120}" width="44" height="${42/100*120}" rx="4" fill="#d98200"/>
            <text x="200" y="${160-42/100*120-5}" text-anchor="middle" class="svg-lbl">42 %</text>
            <text x="200" y="176" text-anchor="middle" class="svg-sub">2 \xE0 5 h/j</text>
            <rect x="238" y="${160-9/100*120}" width="44" height="${9/100*120}" rx="4" fill="#c84b31"/>
            <text x="260" y="${160-9/100*120-5}" text-anchor="middle" class="svg-lbl">9 %</text>
            <text x="260" y="176" text-anchor="middle" class="svg-sub">&gt; 5 h/j</text>
            <text x="160" y="196" text-anchor="middle" class="svg-sub">Usage tardif : endormissement retard\xE9 et fragmentation</text>
          </svg>
        </div>
      </div>
    `;let s=document.createElement("div");e.appendChild(n),e.appendChild(s),sh(s);return}if(i==="A6"){let n=document.createElement("div"),s=document.createElement("div");s.className="doc-card",s.innerHTML=`
      <div class="doc-head">
        <div>
          <span class="badge-scale">Donn\xE9es nationales \xB7 Activit\xE9 A6</span>
          <h3>Tabac vs Vapotage / Puffs chez les jeunes (EnCLASS 2024 \xB7 Loi 24 f\xE9v. 2025)</h3>
        </div>
      </div>
      <svg viewBox="0 0 540 145" class="sci-svg" role="img" aria-label="Comparaison coll\xE8ge et lyc\xE9e : 0,9 pour cent tabac quotidien au coll\xE8ge, 7,7 pour cent exp\xE9rimentation tabac, contre environ 46 pour cent exp\xE9rimentation vapotage au lyc\xE9e">
        <title>Exposition tabac et vapotage chez les jeunes fran\xE7ais (EnCLASS 2024)</title>
        ${[0,10,20,30,40,50].map(r=>{let a=186+r/52*304;return`
            <line x1="${a}" y1="22" x2="${a}" y2="108" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${r===0?"":"3 3"}"/>
            <text x="${a}" y="122" text-anchor="middle" class="svg-sub">${r}%</text>
          `}).join("")}
        <text x="178" y="42" text-anchor="end" class="svg-lbl">Tabac quotidien (coll\xE8ge)</text>
        <rect x="186" y="29" width="${Math.max(4,.9/52*304)}" height="18" rx="3" fill="#1d9a6c"/>
        <text x="${186+.9/52*304+8}" y="42" class="svg-lbl">0,9 %</text>

        <text x="178" y="70" text-anchor="end" class="svg-lbl">Exp\xE9rimentation tabac (coll\xE8ge)</text>
        <rect x="186" y="57" width="${7.7/52*304}" height="18" rx="4" fill="#d98200"/>
        <text x="${186+7.7/52*304+8}" y="70" class="svg-lbl">7,7 %</text>

        <text x="178" y="98" text-anchor="end" class="svg-lbl">Exp. vapotage / puffs (lyc\xE9e)</text>
        <rect x="186" y="85" width="${46/52*304}" height="18" rx="4" fill="#ff4f8b"/>
        <text x="${186+46/52*304+8}" y="98" class="svg-lbl" fill="#c84b31">~46 %</text>

        <text x="270" y="138" text-anchor="middle" class="svg-sub">EnCLASS 2024 (OFDT) \xB7 Loi du 24 f\xE9vrier 2025 : interdiction des puffs jetables en France</text>
      </svg>
    `,e.appendChild(n),rh(n),e.appendChild(s);return}if(i==="A7"){let a=function(){let o=hs[r.selectedZone]||hs.v4,c=r.mode==="explore",l=c?{v1:r.selectedZone!=="v1",v2:r.selectedZone!=="v2",v3:r.selectedZone!=="v3",v4:r.selectedZone!=="v4",v5:r.selectedZone!=="v5",integration:!0}:{v1:r.v1,v2:r.v2,v3:r.v3,v4:r.v4,v5:r.v5,integration:r.integration};s.innerHTML=`
        <div class="doc-head">
          <div>
            <span class="badge-scale">Simulateur \xB7 V1\u2013V5 &amp; Int\xE9gration</span>
            <h3>Explore les aires visuelles puis teste leur coop\xE9ration</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${c?"on":""}" data-vmode="explore">1. Cliquer les zones (V1\u2013V5)</button>
            <button type="button" class="pill ${c?"":"on"}" data-vmode="integrate">2. Tester l'int\xE9gration</button>
          </div>
        </div>

        ${c?`
          <div class="vision-sim-grid">
            <div class="vision-brain-map">
              <p class="vision-map-hint">Clique sur une zone (V1 \xE0 V5) pour voir son r\xF4le et l'effet d'une l\xE9sion :</p>
              <svg viewBox="0 0 360 250" class="sci-svg" role="img" aria-label="Sch\xE9ma interactif des aires visuelles V1 \xE0 V5 et l\xE9sions A et B">
                <!-- Cerveau neutre (profil gauche) -->
                <path d="M56,128 C44,104 54,64 88,46 C125,27 185,22 238,34 C284,46 318,86 316,130 C314,164 290,184 256,188 C236,190 218,184 204,174 C188,162 162,158 142,164 C112,172 72,160 56,128 Z" fill="#eee7dc" stroke="#9b8e7b" stroke-width="2"/>
                <!-- Cervelet neutre -->
                <path d="M188,174 C194,205 228,216 260,202 C272,196 278,186 276,180 C248,188 214,184 188,174 Z" fill="#cca596" stroke="#9b786a" stroke-width="1.5"/>
                <!-- Tronc c\xE9r\xE9bral neutre -->
                <path d="M206,188 L224,240 L246,240 L232,192 Z" fill="#eae4da" stroke="#a69a88" stroke-width="1.4"/>
                <!-- Sillons sch\xE9matiques -->
                <path d="M108,124 Q152,118 195,94" fill="none" stroke="#b6aa98" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M148,48 Q154,84 146,112" fill="none" stroke="#b6aa98" stroke-width="1.4" stroke-linecap="round"/>

                <!-- Zones visuelles cliquables V3, V2, V1, V4, V5 -->
                <g class="vzone-hit ${r.selectedZone==="v3"?"active":""}" data-vzone="v3" tabindex="0" role="button" aria-label="Aire V3 (Formes \xB7 Patient B)">
                  <path d="M250,82 C276,72 302,88 311,120 C316,144 307,172 292,181 L248,184 C244,158 248,116 250,82 Z" fill="#3898d4" fill-opacity="0.88" stroke="#1e4e79" stroke-width="${r.selectedZone==="v3"?3:1.3}"/>
                  <text x="278" y="108" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">V3</text>
                </g>
                <g class="vzone-hit ${r.selectedZone==="v2"?"active":""}" data-vzone="v2" tabindex="0" role="button" aria-label="Aire V2 (Relais)">
                  <path d="M255,184 C252,148 265,120 285,118 C302,116 311,142 304,178 Z" fill="#f59e42" fill-opacity="0.93" stroke="#9a5610" stroke-width="${r.selectedZone==="v2"?3:1.3}"/>
                  <text x="282" y="138" text-anchor="middle" font-size="11.5" font-weight="800" fill="#141c28">V2</text>
                </g>
                <g class="vzone-hit ${r.selectedZone==="v1"?"active":""}" data-vzone="v1" tabindex="0" role="button" aria-label="Aire V1 (Cortex visuel primaire)">
                  <path d="M266,184 C266,158 276,142 290,142 C300,142 305,160 298,182 Z" fill="#f5d11d" fill-opacity="0.95" stroke="#8f7400" stroke-width="${r.selectedZone==="v1"?3:1.3}"/>
                  <text x="286" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="#141c28">V1</text>
                </g>
                <g class="vzone-hit ${r.selectedZone==="v4"?"active":""}" data-vzone="v4" tabindex="0" role="button" aria-label="Aire V4 (Couleurs \xB7 Patient A)">
                  <path d="M225,182 C226,166 244,162 252,184 Z" fill="#8cc63f" fill-opacity="0.95" stroke="#456e12" stroke-width="${r.selectedZone==="v4"?3:1.3}"/>
                  <text x="239" y="178" text-anchor="middle" font-size="10.5" font-weight="800" fill="#141c28">V4</text>
                </g>
                <g class="vzone-hit ${r.selectedZone==="v5"?"active":""}" data-vzone="v5" tabindex="0" role="button" aria-label="Aire V5 (Mouvement)">
                  <path d="M188,128 L206,120 L203,136 L191,137 Z" fill="#e04636" fill-opacity="0.95" stroke="#7f1d1d" stroke-width="${r.selectedZone==="v5"?3:1.3}"/>
                  <text x="197" y="114" text-anchor="middle" font-size="11" font-weight="800" fill="#c84b31">V5</text>
                </g>

                <!-- Badges rapides Patients A & B -->
                <g class="vzone-hit" data-vzone="v4" role="button">
                  <circle cx="239" cy="176" r="6" fill="none" stroke="#e52b20" stroke-width="2" stroke-dasharray="2 2"/>
                  <rect x="82" y="196" width="102" height="22" rx="6" fill="${r.selectedZone==="v4"?"#8cc63f":"#ffffff"}" stroke="#456e12"/>
                  <text x="133" y="211" text-anchor="middle" font-size="10" font-weight="700" fill="#141c28">L\xE9sion Patient A (V4)</text>
                </g>
                <g class="vzone-hit" data-vzone="v3" role="button">
                  <circle cx="277" cy="105" r="8" fill="none" stroke="#e52b20" stroke-width="2" stroke-dasharray="2 2"/>
                  <rect x="82" y="222" width="102" height="22" rx="6" fill="${r.selectedZone==="v3"?"#3898d4":"#ffffff"}" stroke="#1e4e79"/>
                  <text x="133" y="237" text-anchor="middle" font-size="10" font-weight="700" fill="${r.selectedZone==="v3"?"#ffffff":"#141c28"}">L\xE9sion Patient B (V3)</text>
                </g>
              </svg>
              <div class="quiz-chips" style="margin-top:8px">
                ${["v1","v2","v3","v4","v5"].map(d=>{let p=hs[d];return`<button type="button" class="qchip ${r.selectedZone===d?"sel":""}" data-vzone="${d}" style="${r.selectedZone===d?`background:${p.color};border-color:${p.color};color:${p.textDark?"#141c28":"#fff"}`:""}">${p.code} \xB7 ${d==="v1"?"R\xE9ception":d==="v2"?"Relais":d==="v3"?"Formes (B)":d==="v4"?"Couleurs (A)":"Mouvement"}</button>`}).join("")}
              </div>
            </div>

            <div class="vision-zone-detail">
              <div class="vzd-head">
                <span class="vzd-badge" style="background:${o.color};color:${o.textDark?"#141c28":"#fff"}">${o.code}</span>
                <div>
                  <h4>${o.title}</h4>
                  <small>${o.subtitle}</small>
                </div>
              </div>
              <p class="vzd-role"><strong>R\xF4le dans la vision :</strong> ${o.role}</p>
              <div class="vzd-lesion">
                <strong>\u26A0\uFE0F ${o.lesionTitle}</strong>
                <p>${o.lesionDesc}</p>
                <div class="vzd-media-row">
                  <img src="${o.img}" alt="${o.imgCaption}">
                </div>
                <small class="vzd-cap">${o.imgCaption}</small>
              </div>
              <div style="margin-top:8px">
                <strong style="display:block;font-size:11.5px;margin-bottom:4px;color:var(--fg-2)">Simulation : ce que per\xE7oit le patient en cas de l\xE9sion de ${o.code}</strong>
                ${oh(l)}
              </div>
              ${t?`<button type="button" class="btn-primary" id="btnSimGo3d" style="margin-top:8px;width:100%">Observer ${o.code} sur le cerveau 3D \u2192</button>`:""}
            </div>
          </div>
        `:`
          <div>
            <p style="margin:0 0 8px;font-size:13px;color:var(--fg-2)">Active ou d\xE9sactive les zones et leurs liens pour tester l'int\xE9gration :</p>
            <div class="vision-toggles">
              ${[["v1","V1 \xB7 R\xE9ception","#f5d11d"],["v2","V2 \xB7 Relais","#f59e42"],["v3","V3 \xB7 Formes","#3898d4"],["v4","V4 \xB7 Couleurs","#8cc63f"],["v5","V5 \xB7 Mouvement","#e04636"],["integration","\u{1F517} Int\xE9gration (liens)","#2b6de0"]].map(([d,p,u])=>`
                <label class="vtoggle ${r[d]?"on":"off"}">
                  <input type="checkbox" data-vtoggle="${d}" ${r[d]?"checked":""}>
                  <span class="leg-dot" style="background:${u}"></span>
                  <span>${p}</span>
                </label>
              `).join("")}
            </div>
            <div class="quiz-chips" style="margin:8px 0">
              <button type="button" class="qchip" data-vpreset="normal">\u2713 Vision saine (tout int\xE9gr\xE9)</button>
              <button type="button" class="qchip" data-vpreset="patientA">Patient A (V4 coup\xE9e)</button>
              <button type="button" class="qchip" data-vpreset="patientB">Patient B (V3 coup\xE9e)</button>
              <button type="button" class="qchip" data-vpreset="noIntegration">\u26A0\uFE0F Sans int\xE9gration (aires isol\xE9es)</button>
            </div>
            ${oh(l)}
            ${t?`<button type="button" class="btn-primary" id="btnSimGo3dNet" style="margin-top:10px">Voir le r\xE9seau d'int\xE9gration anim\xE9 sur le cerveau 3D \u2192</button>`:""}
          </div>
        `}
      `,s.querySelectorAll("[data-vmode]").forEach(d=>{d.addEventListener("click",()=>{r.mode=d.dataset.vmode,a()})}),s.querySelectorAll("[data-vzone]").forEach(d=>{d.addEventListener("click",()=>{r.selectedZone=d.dataset.vzone,a()})}),s.querySelectorAll("[data-vtoggle]").forEach(d=>{d.addEventListener("change",()=>{r[d.dataset.vtoggle]=d.checked,a()})}),s.querySelectorAll("[data-vpreset]").forEach(d=>{d.addEventListener("click",()=>{let p=d.dataset.vpreset;r.v1=!0,r.v2=!0,r.v3=!0,r.v4=!0,r.v5=!0,r.integration=!0,p==="patientA"?r.v4=!1:p==="patientB"?r.v3=!1:p==="noIntegration"&&(r.integration=!1),a()})}),s.querySelector("#btnSimGo3d")?.addEventListener("click",()=>t(r.selectedZone)),s.querySelector("#btnSimGo3dNet")?.addEventListener("click",()=>t("integration"))},n=document.createElement("div");n.className="doc-card",n.innerHTML=`
      <div class="doc-head">
        <div>
          <span class="badge-scale">Documents de l'exercice \xB7 Activit\xE9 A7</span>
          <h3>Cas cliniques (Patients A et B) et aires visuelles (V1 \xE0 V5)</h3>
        </div>
      </div>
      <div class="vision-orig-grid">
        <figure class="vision-orig-fig">
          <img src="img/vision_doc1.png" alt="Document 1 : mod\xE8les pomme et feuilles en haut, dessins d\xE9color\xE9s du patient A en bas" loading="eager">
          <figcaption><strong>Doc. 1 \u2014 Patient A :</strong> formes justes, couleurs perdues.</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/vision_doc2.png" alt="Document 2 : test de D.F. Benson o\xF9 le patient B barre de mauvaises formes" loading="eager">
          <figcaption><strong>Doc. 2 \u2014 Patient B :</strong> test des formes (<em>D.F. Benson</em>).</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/vision_doc3.png" alt="Document 3 : localisation des l\xE9sions c\xE9r\xE9brales des patients A et B sur l'h\xE9misph\xE8re gauche" loading="eager">
          <figcaption><strong>Doc. 3 \u2014 L\xE9sions :</strong> patient A (bas) et patient B (haut).</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/vision_doc4.png" alt="Document 4 : aires c\xE9r\xE9brales impliqu\xE9es dans la vision V1 \xE0 V5" loading="eager">
          <figcaption><strong>Doc. 4 \u2014 Aires visuelles :</strong> zones V1 \xE0 V5.</figcaption>
        </figure>
      </div>
    `;let s=document.createElement("div");s.className="doc-card";let r={mode:"explore",selectedZone:"v4",v1:!0,v2:!0,v3:!0,v4:!0,v5:!0,integration:!0};e.appendChild(n),e.appendChild(s),a();return}if(i==="A8"){let o=function(){let c=s[a]||s.normal,l=[110,140,165,195,225,250,128,178,212,240,152,265],d=[125,132,122,134,124,131,137,128,136,123,129,135],p=l.slice(0,c.cleftMessengers).map((h,f)=>`<circle cx="${h}" cy="${d[f]}" r="4.2" fill="#0d9488" stroke="#ffffff" stroke-width="0.9"/>`).join(""),u="";c.drugType==="cannabis"?u=`
          <rect x="88" y="106" width="84" height="10" rx="5" fill="#dc2626"/>
          <rect x="198" y="106" width="84" height="10" rx="5" fill="#dc2626"/>
          <text x="180" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">\u2B07 Fixation sur membrane A / B (lib\xE9ration bloqu\xE9e)</text>
        `:c.drugType==="cocaine"?u=`
          <rect x="102" y="119" width="168" height="22" rx="6" fill="#7c3aed" fill-opacity="0.16" stroke="#7c3aed" stroke-dasharray="3 2"/>
          <text x="186" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7c3aed">\u2605 Maintien excessif dans l\u2019espace synaptique</text>
        `:c.drugType==="alcool"?u=`
          <rect x="105" y="143" width="22" height="11" rx="4" fill="#ea580c"/>
          <rect x="175" y="143" width="22" height="11" rx="4" fill="#ea580c"/>
          <rect x="245" y="143" width="22" height="11" rx="4" fill="#ea580c"/>
          <text x="186" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ea580c">\u2B07 Blocage sur la membrane du neurone C</text>
        `:c.drugType==="amphet"&&(u=`
          <text x="186" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#be185d">\u2B07 P\xE9n\xE9tration dans les v\xE9sicules \u2192 vidange massive</text>
        `),r.innerHTML=`
        <div class="doc-head">
          <div>
            <span class="badge-scale">Simulateur interactif \xB7 Zone de jonction (Synapse)</span>
            <h3>Comparer la transmission normale et l'action de chaque drogue</h3>
          </div>
        </div>

        <div class="quiz-chips" style="margin-bottom:10px">
          ${Object.entries(s).map(([h,f])=>`<button type="button" class="qchip ${a===h?"sel":""}" data-drug="${h}">${f.label}</button>`).join("")}
        </div>

        <div class="vision-sim-grid" style="grid-template-columns:1.05fr 0.95fr;align-items:center">
          <div class="vision-brain-map">
            <svg viewBox="0 0 360 220" class="sci-svg" role="img" aria-label="Sch\xE9ma fonctionnel de la synapse entre neurones A, B et neurone C">
              <rect x="0" y="0" width="360" height="220" rx="10" fill="#f8fafc"/>
              <!-- Neurone A (gauche) & Neurone B (droite) -->
              <path d="M84,35 L168,35 L168,104 Q168,112 158,112 L94,112 Q84,112 84,104 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
              <text x="126" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Neurone A</text>
              <path d="M194,35 L278,35 L278,104 Q278,112 268,112 L204,112 Q194,112 194,104 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
              <text x="236" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Neurone B</text>

              <!-- V\xE9sicules dans A et B -->
              ${[[108,72],[132,76],[150,70],[115,93],[142,92],[216,72],[238,76],[258,72],[222,93],[250,92]].map(([h,f],x)=>{let m=x>=10-c.vesicleRelease*2;return`<circle cx="${h}" cy="${f}" r="7.5" fill="${m?"#e2e8f0":"#0f766e"}" fill-opacity="${m?"0.4":"0.85"}" stroke="#0f172a" stroke-width="1.1"/>`}).join("")}

              <!-- Espace de la zone de jonction (fente synaptique) -->
              <text x="38" y="131" text-anchor="middle" font-size="8.5" font-weight="700" fill="#64748b">Espace synaptique</text>
              ${p}

              <!-- Corps cellulaire du neurone C -->
              <path d="M72,150 Q180,144 288,150 L288,205 L72,205 Z" fill="${c.receptorsActive?"#dbeafe":"#e2e8f0"}" stroke="#1d4ed8" stroke-width="2"/>
              <!-- R\xE9cepteurs sur membrane C -->
              <path d="M108,148 v-6 h14 v6 M178,146 v-6 h14 v6 M248,148 v-6 h14 v6" fill="none" stroke="#1e40af" stroke-width="2.5"/>
              <text x="180" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">Corps cellulaire \xB7 Neurone C</text>
              <text x="180" y="194" text-anchor="middle" font-size="10" font-weight="700" fill="${c.receptorsActive?"#0f766e":"#b91c1c"}">${c.signalC}</text>

              ${u}
            </svg>
          </div>

          <div class="vision-zone-detail">
            <div class="vzd-head">
              <span class="vzd-badge" style="background:#0f766e;color:#fff">${c.badge}</span>
            </div>
            <h4 style="margin:6px 0 4px;font-size:14.5px">${c.title}</h4>
            <p class="vzd-role" style="margin:0 0 6px;font-size:12.5px"><strong>Lieu d\u2019action :</strong> ${c.lieu}</p>
            <p style="margin:0 0 10px;font-size:12.5px;line-height:1.45;color:var(--fg-2)">${c.desc}</p>
            ${t?'<button type="button" class="btn-primary" id="btnDrugGo3d" style="width:100%">Observer le circuit Dopamine / Hippocampe en 3D \u2192</button>':""}
          </div>
        </div>
      `,r.querySelectorAll("[data-drug]").forEach(h=>{h.addEventListener("click",()=>{a=h.dataset.drug,o()})}),r.querySelector("#btnDrugGo3d")?.addEventListener("click",()=>t("dopamine"))},n=document.createElement("div");n.className="doc-card",n.innerHTML=`
      <div class="doc-head">
        <div>
          <span class="badge-scale">Documents de l'exercice \xB7 Activit\xE9 A8</span>
          <h3>Zone de jonction (MET \xD7 10 000) &amp; Modes d'action des drogues</h3>
        </div>
      </div>
      <div class="vision-orig-grid" style="grid-template-columns:1fr">
        <figure class="vision-orig-fig">
          <img src="img/drogues_doc1.png" alt="Document 1 : microscopie \xE9lectronique \xE0 transmission de la zone de jonction entre neurones A et B et neurone C avant et pendant transmission" loading="eager">
          <figcaption><strong>Doc. 1 \u2014 Zone de jonction (Synapse) :</strong> Terminaisons A et B face au corps cellulaire C (1 : avant \xB7 2 : pendant transmission).</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/drogues_doc2.png" alt="Document 2 : tableau des modes d'action du cannabis, h\xE9ro\xEFne, coca\xEFne, ecstasy, alcool et amph\xE9tamines" loading="eager">
          <figcaption><strong>Doc. 2 \u2014 Tableau des modes d'action :</strong> cannabis, h\xE9ro\xEFne, coca\xEFne, ecstasy, alcool et amph\xE9tamines.</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/drogues_doc3.png" alt="Document 3 : effets ressentis par le consommateur et localisation membranaire A/B pour cannabis et h\xE9ro\xEFne" loading="eager">
          <figcaption><strong>Doc. 3 \u2014 Effets ressentis &amp; Lieux d'action :</strong> cons\xE9quences comportementales et cibles cellulaires.</figcaption>
        </figure>
      </div>
    `;let s={avant:{label:"1. Avant transmission",badge:"Repos \xB7 Avant message",title:"Neurones A et B au repos (avant l\u2019arriv\xE9e du message)",lieu:"Aucun passage actif dans la fente synaptique",desc:"Les terminaisons des neurones A et B contiennent de nombreuses v\xE9sicules circulaires remplies de messagers chimiques. Le corps cellulaire du neurone C ne contient aucune v\xE9sicule et l'espace synaptique est vide.",vesicleRelease:0,cleftMessengers:0,drugType:"none",receptorsActive:!1,signalC:"En attente"},normal:{label:"2. Transmission normale",badge:"Physiologique \xB7 Pendant transmission",title:"Transmission normale du message nerveux (B \u2192 C)",lieu:"V\xE9sicules (A/B) \u2192 Espace synaptique \u2192 Membrane du neurone C",desc:"Lorsqu'un message nerveux arrive, des v\xE9sicules du neurone A ou B s'ouvrent sur la membrane et d\xE9versent leur substance chimique dans l'espace synaptique. Cette substance se fixe sur la membrane du neurone C qui \xE9met un message nerveux normal.",vesicleRelease:3,cleftMessengers:5,drugType:"none",receptorsActive:!0,signalC:"Message normal transmis \u2713"},cannabis:{label:"\u{1F33F} Cannabis & H\xE9ro\xEFne",badge:"Lieu : Membrane neurones A/B",title:"Cannabis & H\xE9ro\xEFne : blocage sur la membrane des neurones A ou B",lieu:"Membrane des terminaisons axonales A ou B",desc:"Ces drogues se fixent sur la membrane des neurones A ou B et emp\xEAchent la majorit\xE9 des v\xE9sicules de d\xE9verser leurs substances dans l'espace de la zone de jonction. Cons\xE9quences : relaxation, somnolence, troubles de l'attention, de la m\xE9moire et de l'apprentissage (cannabis) ou hallucinations et d\xE9pendance (h\xE9ro\xEFne).",vesicleRelease:0,cleftMessengers:1,drugType:"cannabis",receptorsActive:!1,signalC:"Transmission fortement diminu\xE9e \u26A0\uFE0F"},cocaine:{label:"\u2744\uFE0F Coca\xEFne & Ecstasy",badge:"Lieu : Espace synaptique",title:"Coca\xEFne & Ecstasy : maintien dans l\u2019espace de la zone de jonction",lieu:"Espace de la zone de jonction (fente synaptique)",desc:"Au moment de l'arriv\xE9e du message, coca\xEFne et ecstasy maintiennent la substance d\xE9vers\xE9e par les v\xE9sicules A ou B dans l'espace de la zone de jonction (elle n'est plus \xE9limin\xE9e). Le neurone C est sur-stimul\xE9 en continu (hyperactivit\xE9, puis \xE9puisement et d\xE9pendance).",vesicleRelease:3,cleftMessengers:11,drugType:"cocaine",receptorsActive:!0,signalC:"Sur-stimulation continue \u26A1"},alcool:{label:"\u{1F37A} Alcool",badge:"Lieu : Membrane neurone C",title:"Alcool : blocage d\u2019action sur la membrane du neurone C",lieu:"Membrane du corps cellulaire du neurone C",desc:"Les v\xE9sicules des neurones A ou B lib\xE8rent normalement la substance dans l'espace, mais l'alcool emp\xEAche cette substance d'agir sur la membrane du neurone C. Cons\xE9quences : baisse des r\xE9flexes, troubles de l'\xE9quilibre, mauvais jugement et somnolence.",vesicleRelease:3,cleftMessengers:5,drugType:"alcool",receptorsActive:!1,signalC:"R\xE9ception bloqu\xE9e sur C \u26A0\uFE0F"},amphet:{label:"\u{1F48A} Amph\xE9tamines",badge:"Lieu : V\xE9sicules neurones A/B",title:"Amph\xE9tamines : vidange massive des v\xE9sicules A ou B",lieu:"Int\xE9rieur des v\xE9sicules des neurones A ou B",desc:"Les amph\xE9tamines p\xE9n\xE8trent directement dans les v\xE9sicules du neurone A ou B : celles-ci se vident de leur contenu dans l'espace de la zone de jonction o\xF9 la substance d\xE9vers\xE9e s'accumule fortement.",vesicleRelease:5,cleftMessengers:12,drugType:"amphet",receptorsActive:!0,signalC:"Accumulation & hyper-stimulation \u26A1"}},r=document.createElement("div");r.className="doc-card";let a="normal";e.appendChild(n),e.appendChild(r),o()}}var lh,hs,uh=Ht(()=>{ah();lh={A1:{triggerImg:"img/a1.jpg",triggerAlt:"Athl\xE8te en pleine course avec illustration du cerveau actif en r\xE9seau et c\u0153ur acc\xE9l\xE9r\xE9",triggerCaption:"Pendant l'effort physique, muscles et c\u0153ur acc\xE9l\xE8rent \u2014 mais que fait le cerveau au m\xEAme moment ?",needsMri:!0,targetKeys:["moteur","somesthesique","cervelet"],presets3d:[{id:"a1_net",label:"1. R\xE9seau bouger & sentir",subtitle:"R\xE9seau somatomoteur (lobe frontal + pari\xE9tal)",role:"Pendant une course, plusieurs aires travaillent ensemble : d\xE9clencher la foul\xE9e et recevoir les appuis du corps.",action:{colorMode:"networks",network:2,view:"lat_L",deep:!1},legend:[{color:"#4a90d9",name:"R\xE9seau somatomoteur (mouvement + toucher)"}]},{id:"a1_moteur",label:"2. Cortex moteur",subtitle:"Lobe frontal \xB7 Commande volontaire",role:"Envoie l'ordre nerveux volontaire aux muscles des jambes et adapte l'intensit\xE9 de la course.",action:{isolate:"moteur",view:"lat_L",deep:!1},legend:[{color:"#e0754f",name:"Cortex moteur primaire"}]},{id:"a1_cervelet",label:"3. Cervelet",subtitle:"\xC0 l\u2019arri\xE8re \xB7 \xC9quilibre et pr\xE9cision",role:"Coordonne l'\xE9quilibre, la posture et la pr\xE9cision de chaque geste sportif sans y penser consciemment.",action:{isolate:"cervelet",view:"post",deep:!1},legend:[{color:"#86bcb6",name:"Cervelet"}]},{id:"a1_somes",label:"4. Cortex somesth\xE9sique",subtitle:"Lobe pari\xE9tal \xB7 Sensations corporelles",role:"Re\xE7oit en direct les informations des articulations et des appuis du pied sur le sol.",action:{isolate:"somesthesique",view:"lat_L",deep:!1},legend:[{color:"#5b9bd5",name:"Cortex somesth\xE9sique primaire"}]},{id:"a1_irm",label:"5. Coupe IRM r\xE9elle",subtitle:"Atlas ICBM152 \xB7 Coupe anatomique sagittale",role:"Une vraie coupe IRM montre l'ensemble des tissus nerveux : aucune r\xE9gion du cerveau ne reste \xAB \xE9teinte \xE0 90 % \xBB.",action:{isolate:"moteur",view:"mri_34",mri:{open:!0,axis:"sag",sliceMm:-32,clip:!0,overlay:!0}},legend:[{color:"#e0754f",name:"Cortex moteur + plan IRM sagittal"}]}]},A2:{triggerImg:"img/a2.jpg",triggerAlt:"Adolescent avec casque audio et sc\xE8ne de concert lumineuse, ondes sonores vers le lobe temporal",triggerCaption:"Casque \xE0 fond ou concert : quel chemin suit le son jusqu'au cerveau et o\xF9 commence le danger ?",needsMri:!1,targetKeys:["auditif","visuel","somesthesique"],presets3d:[{id:"a2_auditif",label:"1. Cortex auditif primaire",subtitle:"Lobe temporal \xB7 Int\xE9gration des sons",role:"Re\xE7oit les messages nerveux \xE9mis par les cellules cili\xE9es de la cochl\xE9e (oreille interne) via le nerf auditif.",action:{isolate:"auditif",view:"lat_L",deep:!1},legend:[{color:"#5fae6e",name:"Cortex auditif primaire (lobe temporal)"}]},{id:"a2_visuel",label:"2. Comparer : Cortex visuel",subtitle:"Lobe occipital \xB7 \xC0 l\u2019arri\xE8re du cerveau",role:"Montre la sp\xE9cialisation c\xE9r\xE9brale : la vue est trait\xE9e \xE0 l'arri\xE8re, tandis que le son arrive sur le c\xF4t\xE9.",action:{isolate:"visuel",view:"post",deep:!1},legend:[{color:"#a970c4",name:"Cortex visuel primaire (lobe occipital)"}]},{id:"a2_somes",label:"3. Comparer : Cortex toucher",subtitle:"Cortex somesth\xE9sique \xB7 Lobe pari\xE9tal",role:"Distingue l'aire du toucher/pression de celle de l'audition : chaque sens poss\xE8de son territoire.",action:{isolate:"somesthesique",view:"lat_L",deep:!1},legend:[{color:"#5b9bd5",name:"Cortex somesth\xE9sique primaire"}]},{id:"a2_lobes",label:"4. Vue globale des lobes",subtitle:"Les 4 lobes de chaque h\xE9misph\xE8re",role:"Permet de rep\xE9rer o\xF9 se situe le lobe temporal (audition) par rapport au reste du cerveau.",action:{colorMode:"lobes",view:"lat_L",deep:!1},legend:[{color:"#5fae6e",name:"Lobe temporal (zone auditive)"}]}]},A3:{triggerImg:"img/a3.jpg",triggerAlt:"Vue int\xE9rieure d un v\xE9hicule avec smartphone distrayant le conducteur et pi\xE9ton traversant",triggerCaption:"Lire un message en roulant ralentit la prise de d\xE9cision : quel circuit nerveux est alors ralenti ?",needsMri:!1,targetKeys:["visuel","moteur","tronc"],presets3d:[{id:"a3_visuel",label:"1. Cortex visuel (percevoir)",subtitle:"\xC9tape 1 \xB7 Lobe occipital",role:"Les yeux transmettent le signal du danger jusqu'\xE0 l'arri\xE8re du cerveau : sans regard sur la route, pas d'alerte.",action:{isolate:"visuel",view:"post",deep:!1},legend:[{color:"#a970c4",name:"Cortex visuel primaire"}]},{id:"a3_moteur",label:"2. Cortex moteur (freiner)",subtitle:"\xC9tape 2 \xB7 Lobe frontal (commande volontaire)",role:"\xC9labore la r\xE9ponse motrice consciente pour lever l'acc\xE9l\xE9rateur et appuyer sur la p\xE9dale de frein.",action:{isolate:"moteur",view:"lat_L",deep:!1},legend:[{color:"#e0754f",name:"Cortex moteur primaire"}]},{id:"a3_tronc",label:"3. Tronc c\xE9r\xE9bral (croisement)",subtitle:"Relais vers la moelle \xE9pini\xE8re",role:"Zone de passage o\xF9 les voies motrices croisent gauche \u2194 droite avant de descendre dans la moelle \xE9pini\xE8re.",action:{isolate:"tronc",view:"ant",deep:!0},legend:[{color:"#b07aa1",name:"Tronc c\xE9r\xE9bral"}]},{id:"a3_flip",label:"4. Basculer h\xE9misph\xE8re G \u2194 D",subtitle:"Contr\xF4le crois\xE9 des deux c\xF4t\xE9s du corps",role:"L'h\xE9misph\xE8re gauche commande la droite du corps (et inversement) gr\xE2ce au croisement dans le tronc c\xE9r\xE9bral.",action:{isolate:"moteur",hemiToggle:!0},legend:[{color:"#e0754f",name:"Cortex moteur (c\xF4t\xE9 G ou D)"}]}]},A4:{triggerImg:"img/a4.jpg",triggerAlt:"Illustration scientifique de synapse neuronale lib\xE9rant des v\xE9sicules face \xE0 un blocage par curare",triggerCaption:"Les neurones ne se touchent pas : comment le signal traverse-t-il l'espace de 20 nm et comment agit le curare ?",needsMri:!1,targetKeys:["moteur","tronc","cervelet"],presets3d:[{id:"a4_glut",label:"1. Voie excitatrice Glutamate",subtitle:"Active les neurones suivants",role:"Principal neurotransmetteur excitateur du cerveau : favorise le d\xE9clenchement d'un nouveau signal \xE9lectrique.",action:{pathway:"glutamate",deep:!0,view:"lat_L"},legend:[{color:"#3fb6ff",name:"Voie Glutamate (excitatrice)"}]},{id:"a4_gaba",label:"2. Voie inhibitrice GABA",subtitle:"Freine les neurones cibles",role:"Principal neurotransmetteur inhibiteur : diminue l'excitation pour r\xE9guler l'activit\xE9 nerveuse.",action:{pathway:"gaba",deep:!0,view:"lat_L"},legend:[{color:"#ff7a59",name:"Voie GABA (inhibitrice)"}]},{id:"a4_moteur",label:"3. Cortex moteur (vers muscle)",subtitle:"Origine du message vers le nerf moteur",role:"Le message descend vers les nerfs moteurs puis traverse la synapse nerf\u2013muscle (bloqu\xE9e par le curare).",action:{isolate:"moteur",view:"lat_L",deep:!1},legend:[{color:"#e0754f",name:"Cortex moteur primaire"}]},{id:"a4_transp",label:"4. Vue globale en transparence",subtitle:"Milliards de connexions synaptiques",role:"Rappelle que tout le cerveau communique d'un neurone \xE0 l'autre par des synapses chimiques (~20 nm).",action:{deep:!0,view:"mri_34"},legend:[{color:"#7ea2c9",name:"Cerveau transparent (r\xE9seaux)"}]}]},A5:{triggerImg:"img/a5.jpg",triggerAlt:"Chambre sombre le soir : bureau avec cahier de r\xE9visions et smartphone lumineux retardant le sommeil",triggerCaption:"R\xE9viser tard ou garder son t\xE9l\xE9phone la nuit : quel r\xF4le joue l'hippocampe pendant le sommeil ?",needsMri:!1,targetKeys:["hippocampe","cervelet","prefrontal","pfc_median"],presets3d:[{id:"a5_hippo",label:"1. Hippocampe (savoirs)",subtitle:"Lobe temporal interne \xB7 Souvenirs conscients",role:"Indispensable pour fixer puis consolider pendant le sommeil les connaissances r\xE9vis\xE9es (l\xE9s\xE9 chez le patient H.M.).",action:{isolate:"hippocampe",deep:!0,view:"medial"},legend:[{color:"#f2c14e",name:"Hippocampe"}]},{id:"a5_cervelet",label:"2. Cervelet (gestes moteurs)",subtitle:"Apprentissages moteurs automatiques",role:"G\xE8re la m\xE9moire des gestes (ex. dessin dans le cas H.M.), qui reste fonctionnelle sans l'hippocampe.",action:{isolate:"cervelet",deep:!1,view:"post"},legend:[{color:"#86bcb6",name:"Cervelet"}]},{id:"a5_pfc",label:"3. Cortex pr\xE9frontal (attention)",subtitle:"Avant du lobe frontal \xB7 Concentration",role:"Sensible \xE0 la dette de sommeil (< 8 h) : fatigue matinale, baisse d'attention et erreurs en classe.",action:{isolate:"prefrontal",deep:!1,view:"ant"},legend:[{color:"#d9a066",name:"Cortex pr\xE9frontal lat\xE9ral"}]},{id:"a5_medial",label:"4. Coupe m\xE9diale transparente",subtitle:"Voir hippocampe et cortex ensemble",role:"Permet de visualiser l'hippocampe profond et les cortex associatifs o\xF9 les souvenirs se stabilisent.",action:{hemiMode:"onlyR",deep:!0,view:"medial"},legend:[{color:"#f2c14e",name:"Hippocampe (interne)"},{color:"#86bcb6",name:"Cervelet"}]}]},A6:{triggerImg:"img/a6.jpg",triggerAlt:"Design color\xE9 de puff et notifications compar\xE9 au circuit c\xE9r\xE9bral de la dopamine",triggerCaption:"Pourquoi les puffs et \xE9crans tr\xE8s stimulants cr\xE9ent-ils rapidement une envie irr\xE9pressible ?",needsMri:!1,targetKeys:["accumbens","vta","prefrontal","pfc_median"],presets3d:[{id:"a6_dopa",label:"1. Voie Dopamine (r\xE9compense)",subtitle:"Faisceau ATV \u2192 Accumbens \u2192 Pr\xE9frontal",role:"Circuit chimique de la r\xE9compense : la nicotine provoque un pic brutal et rapide de dopamine dans ce trajet.",action:{pathway:"dopamine",deep:!0,view:"medial"},legend:[{color:"#ff4f8b",name:"Voie Dopamine"}]},{id:"a6_acc",label:"2. Noyau accumbens",subtitle:"C\u0153ur du plaisir et du besoin de r\xE9p\xE9ter",role:"Re\xE7oit la dopamine lib\xE9r\xE9e ; la r\xE9p\xE9tition d\xE9r\xE8gle ce noyau et entretient la d\xE9pendance.",action:{isolate:"accumbens",deep:!0,view:"ant"},legend:[{color:"#ff9da7",name:"Noyau accumbens"}]},{id:"a6_vta",label:"3. ATV (source dopamine)",subtitle:"Aire tegmentale ventrale \xB7 Tronc c\xE9r\xE9bral",role:"Contient les neurones \xE0 dopamine directement stimul\xE9s par la nicotine absorb\xE9e via les poumons.",action:{isolate:"vta",deep:!0,view:"medial"},legend:[{color:"#ff6f91",name:"Aire tegmentale ventrale (ATV)"}]},{id:"a6_pfc",label:"4. Cortex pr\xE9frontal (contr\xF4le)",subtitle:"Frein des impulsions (maturation ~25 ans)",role:"Encore en d\xE9veloppement chez l'adolescent : sa maturit\xE9 inachev\xE9e explique la plus grande vuln\xE9rabilit\xE9 aux addictions.",action:{isolate:"prefrontal",deep:!1,view:"ant"},legend:[{color:"#d9a066",name:"Cortex pr\xE9frontal lat\xE9ral"}]}]},A7:{triggerImg:"img/a7.jpg",triggerAlt:"Carte des aires visuelles V1 \xE0 V5 et dessins d\xE9color\xE9s du patient A face \xE0 une pomme rouge et des feuilles vertes",triggerCaption:"Des yeux intacts mais des troubles visuels diff\xE9rents apr\xE8s une l\xE9sion c\xE9r\xE9brale.",needsMri:!1,isVisionModel:!0,targetKeys:["v1","v2","v3","v4","v5","thalamus"],presets3d:[{id:"a7_all",label:"1. Carte des 5 aires visuelles (Doc. 4)",subtitle:"Aires V1 \xE0 V5 uniquement color\xE9es",role:"Seules les zones visuelles sont color\xE9es. Clique sur une aire pour conna\xEEtre son r\xF4le.",action:{lesions:null,hideVisualColors:!1,pathway:null,isolate:null,view:"lat_L",deep:!1},legend:[{color:"#f5d11d",name:"V1 (R\xE9ception)"},{color:"#f59e42",name:"V2 (Relais)"},{color:"#3898d4",name:"V3 (Formes)"},{color:"#8cc63f",name:"V4 (Couleurs)"},{color:"#e04636",name:"V5 (Mouvement)"}]},{id:"a7_lesions",label:"2. L\xE9sions Patients A et B (Doc. 3)",subtitle:"Zones l\xE9s\xE9es sur l\u2019h\xE9misph\xE8re gauche",role:"Compare la l\xE9sion A (bas) et la l\xE9sion B (haut) avec le Document 3.",action:{lesions:"both",hideVisualColors:!0,pathway:null,isolate:null,view:"lat_L",deep:!1},legend:[{color:"#e52b20",name:"L\xE9sion Patient A (basse) & Patient B (haute)"}]},{id:"a7_superpose",label:"3. Superposer L\xE9sions + Aires V1\u2013V5",subtitle:"Croiser Doc. 3 et Doc. 4 en 3D",role:"Superpose les l\xE9sions A et B sur les aires V1\u2013V5 pour identifier chaque zone touch\xE9e.",action:{lesions:"both",hideVisualColors:!1,pathway:null,isolate:null,view:"lat_L",deep:!1},legend:[{color:"#8cc63f",name:"L\xE9sion A \u2192 Aire V4 (couleurs)"},{color:"#3898d4",name:"L\xE9sion B \u2192 Aire V3 (formes)"}]},{id:"a7_v4",label:"4. Patient A \xB7 Aire V4 (Couleurs)",subtitle:"L\xE9sion basse \xB7 Doc. 1",role:"V4 traite les couleurs. Sa l\xE9sion supprime la vision des couleurs (Patient A).",action:{isolate:"v4",lesions:"A",hideVisualColors:!1,pathway:null,view:"lat_L",deep:!1},legend:[{color:"#8cc63f",name:"Aire V4 + L\xE9sion Patient A"}]},{id:"a7_v3",label:"5. Patient B \xB7 Aire V3 (Formes)",subtitle:"L\xE9sion haute \xB7 Doc. 2",role:"V3 analyse les formes. Sa l\xE9sion emp\xEAche de reconna\xEEtre les figures (Patient B).",action:{isolate:"v3",lesions:"B",hideVisualColors:!1,pathway:null,view:"lat_L",deep:!1},legend:[{color:"#3898d4",name:"Aire V3 + L\xE9sion Patient B"}]},{id:"a7_v1v2",label:"6. Aires V1 & V2 (Entr\xE9e & Relais)",subtitle:"P\xF4le occipital arri\xE8re",role:"V1 re\xE7oit les signaux des yeux et V2 les distribue vers V3, V4 et V5.",action:{isolate:"v1",lesions:null,hideVisualColors:!1,pathway:null,view:"post",deep:!1},legend:[{color:"#f5d11d",name:"Aire V1 (r\xE9ception)"},{color:"#f59e42",name:"Aire V2 (relais)"}]},{id:"a7_v5",label:"7. Aire V5 \xB7 Mouvement",subtitle:"Zone temporo-occipitale lat\xE9rale",role:"V5 d\xE9tecte le mouvement et la vitesse des objets.",action:{isolate:"v5",lesions:null,hideVisualColors:!1,pathway:null,view:"lat_L",deep:!1},legend:[{color:"#e04636",name:"Aire V5 / MT (mouvement)"}]},{id:"a7_integration",label:"8. \u{1F517} Int\xE9gration c\xE9r\xE9brale (R\xE9seau)",subtitle:"Thalamus \u2192 V1 \u2192 V2 \u2192 V3 + V4 + V5",role:"Toutes les aires V1 \xE0 V5 communiquent en r\xE9seau pour former une vision compl\xE8te.",action:{pathway:"vision_integration",lesions:null,hideVisualColors:!1,isolate:null,view:"lat_L",deep:!1},legend:[{color:"#3fb6ff",name:"Messages nerveux d\u2019int\xE9gration entre aires"},{color:"#76b7b2",name:"Thalamus (relais des yeux)"}]}]},A8:{triggerImg:"img/a8.jpg",triggerAlt:"Observation au microscope \xE9lectronique d une synapse (terminaisons neurones A et B face au neurone C)",triggerCaption:"Au niveau d'une synapse, comment se transmet le message nerveux et \xE0 quel endroit chaque drogue bloque-t-elle ou d\xE9r\xE8gle-t-elle cette transmission ?",needsMri:!1,targetKeys:["accumbens","vta","prefrontal","hippocampe","cervelet"],presets3d:[{id:"a8_dopa",label:"1. Circuit Dopamine (R\xE9compense)",subtitle:"ATV \u2192 Noyau accumbens \u2192 Pr\xE9frontal",role:"Les drogues (coca\xEFne, h\xE9ro\xEFne, cannabis, alcool, amph\xE9tamines) d\xE9r\xE8glent la transmission synaptique dans ce circuit et provoquent une d\xE9pendance.",action:{pathway:"dopamine",deep:!0,view:"medial"},legend:[{color:"#ff4f8b",name:"Voie Dopamine (circuit de la r\xE9compense)"}]},{id:"a8_glut_gaba",label:"2. Voies Glutamate & GABA",subtitle:"Synapses excitatrices et inhibitrices",role:"L'alcool bloque les synapses excitatrices et modifie le GABA, ralentissant les r\xE9flexes, l'attention et la coordination motrice.",action:{pathway:"gaba",deep:!0,view:"lat_L"},legend:[{color:"#ff7a59",name:"Voie GABA (inhibitrice)"}]},{id:"a8_hippo",label:"3. Hippocampe (M\xE9moire & apprentissage)",subtitle:"Lobe temporal interne",role:"Cibl\xE9 par le cannabis : perturbation synaptique entra\xEEnant troubles de l'attention, de la m\xE9morisation et des apprentissages.",action:{isolate:"hippocampe",deep:!0,view:"medial"},legend:[{color:"#f2c14e",name:"Hippocampe (m\xE9moire)"}]},{id:"a8_cervelet",label:"4. Cervelet (\xC9quilibre & r\xE9flexes)",subtitle:"\xC0 l\u2019arri\xE8re du cerveau",role:"Perturb\xE9 par l'alcool : perte d'\xE9quilibre, gestes impr\xE9cis et temps de r\xE9action allong\xE9.",action:{isolate:"cervelet",deep:!1,view:"post"},legend:[{color:"#86bcb6",name:"Cervelet"}]}]}},hs={v1:{code:"V1",color:"#f5d11d",textDark:!0,title:"Aire visuelle V1 (r\xE9ception)",subtitle:"P\xF4le occipital \xB7 Entr\xE9e",role:"Re\xE7oit en premier les messages nerveux venant des yeux.",lesionTitle:"L\xE9sion de V1 : c\xE9cit\xE9 corticale",lesionDesc:"L'information visuelle n'arrive plus au cortex : perte de la vision.",img:"img/vision_doc4.png",imgCaption:"Doc. 4 \u2014 V1 (jaune) : entr\xE9e des messages visuels."},v2:{code:"V2",color:"#f59e42",textDark:!0,title:"Aire visuelle V2 (relais)",subtitle:"Tri et distribution",role:"Trie et envoie les messages de V1 vers V3, V4 et V5.",lesionTitle:"L\xE9sion de V2 : relais coup\xE9",lesionDesc:"Les messages ne sont plus r\xE9partis vers les aires sp\xE9cialis\xE9es.",img:"img/vision_doc4.png",imgCaption:"Doc. 4 \u2014 V2 (orange) : relais vers V3, V4 et V5."},v3:{code:"V3",color:"#3898d4",textDark:!1,title:"Aire visuelle V3 (formes)",subtitle:"L\xE9sion du Patient B",role:"Analyse les contours et permet de reconna\xEEtre les formes.",lesionTitle:"L\xE9sion Patient B (Docs 2 & 3) : formes perdues",lesionDesc:"Le patient B ne reconna\xEEt plus les formes (0/4 au test de Benson).",img:"img/vision_doc2.png",imgCaption:"Doc. 2 \u2014 Test du patient B (D.F. Benson) : formes non reconnues."},v4:{code:"V4",color:"#8cc63f",textDark:!0,title:"Aire visuelle V4 (couleurs)",subtitle:"L\xE9sion du Patient A",role:"Traite et reconstitue les couleurs des objets.",lesionTitle:"L\xE9sion Patient A (Docs 1 & 3) : couleurs perdues",lesionDesc:"Le patient A garde les formes mais dessine tout en gris/brun.",img:"img/vision_doc1.png",imgCaption:"Doc. 1 \u2014 Dessins du patient A : formes justes mais sans couleur."},v5:{code:"V5",color:"#e04636",textDark:!1,title:"Aire visuelle V5 (mouvement)",subtitle:"Vitesse et direction",role:"D\xE9tecte les d\xE9placements et la vitesse des objets.",lesionTitle:"L\xE9sion de V5 : mouvement saccad\xE9",lesionDesc:"Les objets en mouvement apparaissent comme des images fig\xE9es.",img:"img/vision_doc4.png",imgCaption:"Doc. 4 \u2014 V5 (rouge) : analyse du mouvement."},thalamus:{code:"Thalamus",color:"#76b7b2",textDark:!0,title:"Thalamus (relais des yeux)",subtitle:"Relais profond",role:"Transmet les messages des yeux (nerf optique) jusqu'\xE0 V1.",lesionTitle:"Relais thalamique interrompu",lesionDesc:"Les messages des yeux n'atteignent plus le cortex visuel.",img:"img/vision_doc4.png",imgCaption:"Le thalamus relaie les messages visuels vers V1."}}});function yr(i){return i?String(i).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/['’`]/g," ").replace(/[-‐‑–—/]/g," ").replace(/\s+/g," ").trim():""}function fh(i){return String(i).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function mc(i){return String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Io(i){let e=String(i||"").trim().toUpperCase();return e==="VISION"||e==="VISION_A7"?"A7":e==="DROGUES"||e==="DROGUE"||e==="DROGUES_A8"?"A8":/^A[1-8]$/.test(e)?e:"A7"}function tn(i,e,t){if(t instanceof RegExp)return t.test(i)||t.test(e);let n=yr(t);if(!n)return!1;let s=fh(n).replace(/\\ /g,"[\\s\\-']+");return new RegExp("(?:^|[^a-z0-9])"+s+"s?(?=$|[^a-z0-9])","i").test(i)}function dh(i,e,t){let n=[];for(let s of t){let r=typeof s=="object"&&!(s instanceof RegExp)?s.label:String(s);(typeof s=="object"&&!(s instanceof RegExp)?s.patterns:[s]).some(o=>tn(i,e,o))&&(n.includes(r)||n.push(r))}return n}function fs(i){let e=String(i||"").replace(/['’]/g," ").replace(/[^\p{L}\p{N}\s-]/gu," ").trim();return e?e.split(/\s+/).filter(Boolean).length:0}function mh(i){let e=String(i||"").trim();if(!e)return{sentenceCount:0,completeSentences:0,hasTwoDistinctSentences:!1,startsWithCapital:!1,endsWithPunctuation:!1};let t=e.split(/(?:[.!?]+(?:\s+|$)|\n+)/).map(d=>d.trim()).filter(d=>fs(d)>=3),n=(e.match(/[.!?]+/g)||[]).length,r=(e.match(/[^.!?]+[.!?]+/g)||[]).map(d=>d.replace(/[.!?]+$/,"").trim()).filter(d=>fs(d)>=4&&/^[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ0-9]/.test(d)),a=/^[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]/.test(e),o=/[.!?]\s*$/.test(e),c=r.length,l=r.length>=2;return{sentenceCount:t.length,completeSentences:r.length,hasTwoDistinctSentences:l,startsWithCapital:a,endsWithPunctuation:o,punctuatedCount:n}}function Do(i){let e=String(i||"").trim(),t=yr(e),n=fs(e),s=mh(e),r=[],a=[];for(let[u,h]of Object.entries(gc)){let f=!1;for(let x of h)tn(t,e,x)&&(r.includes(x)||r.push(x),f=!0);f&&a.push(u)}let o=0;r.length>=2?o=.5:r.length===1&&(o=.25);let c=0;s.hasTwoDistinctSentences&&(c+=.25),n>=20&&(c+=.25);let l=Math.round((o+c)*100)/100,d=[],p=[];return n<20&&(d.push(`R\xE9ponse encore trop courte (${n} mots).`),p.push("D\xE9veloppe ta justification en r\xE9digeant au moins 2 phrases compl\xE8tes (20 mots ou plus).")),s.hasTwoDistinctSentences||(d.push("Phrases incompl\xE8tes ou ponctuation absente (majuscules / points)."),p.push("R\xE9dige des phrases compl\xE8tes (Sujet + Verbe + Compl\xE9ment) commen\xE7ant par une majuscule et termin\xE9es par un point.")),r.length===0?(d.push("Aucun connecteur logique d\xE9tect\xE9 pour relier les faits scientifiques et les explications."),p.push("Utilise des connecteurs logiques comme \xAB car \xBB, \xAB parce que \xBB, \xAB alors que \xBB, \xAB tandis que \xBB, \xAB donc \xBB ou \xAB c'est pourquoi \xBB.")):r.length===1&&p.push("Tu as utilis\xE9 1 connecteur logique (\xAB "+r[0]+" \xBB) : ajoutes-en un second (ex. d'opposition ou de cons\xE9quence : \xAB alors que \xBB, \xAB donc \xBB) pour obtenir 0,5/0,5."),{score:l,max:1,l1Score:o,l2Score:c,wordCount:n,sentenceCount:s.sentenceCount,completeSentences:s.completeSentences,hasTwoDistinctSentences:s.hasTwoDistinctSentences,connectorsFound:r,categoriesUsed:a,erreursLangue:d,conseilsLangue:p}}function hh(i,e,t,n){let s=0;return i&&e?s=1:(i||e)&&(s=.5),{score:s,matched:Array.from(new Set([...t,...n]))}}function tt(i,e,t,n=2){let s=[],r=0;for(let o of t)o.patterns.some(l=>tn(i,e,l))&&(r++,s.push(o.label));let a=0;return r>=n?a=1:r>=1&&(a=.5),{score:a,matched:s,hits:r}}function vc(i,e,t="VOIE_GUIDEE"){let n=Io(e),s=xr[n]||xr.A7,r=String(i||"").trim(),a=yr(r),o=Do(r),c=[],l=[],d=[];for(let b of s.criteria){let B=b.evaluate(a,r);c.push({id:b.id,titre:b.titre,competence:b.competence,description:b.description,score:B.score,max:1,matched:B.matched});for(let C of B.matched)l.includes(C)||l.push(C);B.score<1&&d.push({critere:b.titre,score:B.score,conseil:b.adviceIfIncomplete})}let p=c[0]?.score||0,u=c[1]?.score||0,h=c[2]?.score||0,f=c[3]?.score||0,x=Math.round((p+u+h+f)*100)/100,m=Math.round((x+o.score)*100)/100,g=typeof s.detectErrors=="function"?s.detectErrors(a,r):[],E=c.filter(b=>b.score===0).map(b=>`Crit\xE8re manquant (${b.titre}) : cet \xE9l\xE9ment n'appara\xEEt pas encore dans ta r\xE9ponse.`),A=c.filter(b=>b.score===.5).map(b=>`Crit\xE8re incomplet (${b.titre}) : bonne piste, mais il manque une pr\xE9cision pour obtenir 1/1.`),M=[...g,...E,...A,...o.erreursLangue];for(let b of o.conseilsLangue)d.push({critere:"Ma\xEEtrise de la langue",score:o.score,conseil:b});let R="Ma\xEEtrise insuffisante";m>=4.25?R="Tr\xE8s bonne ma\xEEtrise":m>=3.25?R="Ma\xEEtrise satisfaisante":m>=2&&(R="Ma\xEEtrise fragile");let S=d.length>0?d.slice(0,3).map(b=>`[${b.critere}] ${b.conseil}`).join(" | "):"Crit\xE8res complets et r\xE9daction structur\xE9e !",v=[`Note ${m}/5 (${R})`,`C1:${p} C2:${u} C3:${h} C4:${f} Langue:${o.score} (L1:${o.l1Score} L2:${o.l2Score})`,g.length?`Confusions: ${g.length}`:"",`Mots:${o.wordCount} Phrases:${o.sentenceCount} Connecteurs:${o.connectorsFound.length}`].filter(Boolean).join(" | ");return{actId:n,titre:s.titre,modalite:t,c1:p,c2:u,c3:h,c4:f,sciScore:x,langue:o.score,langDetail:o,total:m,total20:Math.round(m*4*10)/10,niveauMaitrise:R,criteria:c,keywordsFound:l,connectorsFound:o.connectorsFound,scientificErrors:g,erreursDetectees:M,conseilsProgression:d,relanceTexte:S,bilanTexte:v}}function xc({eleve:i,classe:e,actId:t,modalite:n,tentative1Text:s,tentative2Text:r="",evalObj:a}){let o=Io(t),c=new Date,l=u=>String(u).padStart(2,"0"),d=`${c.getFullYear()}-${l(c.getMonth()+1)}-${l(c.getDate())} ${l(c.getHours())}:${l(c.getMinutes())}:${l(c.getSeconds())}`,p=[...a.keywordsFound||[],...(a.connectorsFound||[]).map(u=>`conn:${u}`)];return{Horodateur:d,Modalite:n||"VOIE_GUIDEE",Classe:String(e||"4eme1").trim(),Eleve:String(i||"\xC9l\xE8ve").trim(),Sujet:o,Tentative_1:String(s||""),Relance_Systeme:String(a.relanceTexte||""),Tentative_2:String(r||""),Score_C1:a.c1,Score_C2:a.c2,Score_C3:a.c3,Score_C4:a.c4,Score_Langue:a.langue,Note_Finale_5:a.total,Mots_Detectes:p.join(", "),Bilan_Texte:a.bilanTexte}}function yc(i,e){let t=Io(e),n=xr[t]||xr.A7,s=String(i||"");if(!s.trim())return'<em style="color:#94a3b8;">(Aucune r\xE9ponse saisie)</em>';let r=[...n.highlightTerms||[]].sort((f,x)=>x.length-f.length),a=[...ph].sort((f,x)=>x.length-f.length),o=[],c=[];for(let f=0;f<s.length;f++){let m=s[f].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();for(let g=0;g<m.length;g++)o.push(m[g]),c.push(f)}let l=o.join(""),d=[],p=(f,x)=>{for(let m of f){let g=yr(m);if(!g||g.length<2)continue;let E=fh(g).replace(/\\ /g,"[\\s\\-'\u2019]+"),A=new RegExp(`(^|[^a-z0-9])(${E}s?)(?=$|[^a-z0-9])`,"g"),M;for(;(M=A.exec(l))!==null;){let R=M.index+M[1].length,S=R+M[2].length-1,v=c[R],b=(c[S]!==void 0?c[S]:s.length-1)+1;d.some(C=>!(b<=C.start||v>=C.end))||d.push({start:v,end:b,cls:x})}}};p(r,"hl-sci"),p(a,"hl-conn"),d.sort((f,x)=>f.start-x.start);let u="",h=0;for(let f of d)f.start>h&&(u+=mc(s.slice(h,f.start))),u+=`<mark class="${f.cls}">${mc(s.slice(f.start,f.end))}</mark>`,h=f.end;return h<s.length&&(u+=mc(s.slice(h))),u.replace(/\n/g,"<br>")}var gc,ph,tx,xr,nx,gh=Ht(()=>{gc={opposition:["tandis que","alors que","en revanche","au contraire","cependant","pourtant","par contre","mais","a l inverse"],cause:["parce que","car","puisque","etant donne que","grace a","a cause de","en raison de","du fait de","du fait que"],consequence:["c est pourquoi","par consequent","donc","ainsi","de ce fait","ce qui provoque","ce qui entraine","ce qui explique","si bien que","pour cette raison"],addition_organisation:["d une part","d autre part","tout d abord","ensuite","enfin","de plus","par ailleurs","en effet","notamment","premi\xE8rement","premierement","deuxiemement"]},ph=Object.values(gc).flat();tx={A1:{id:"A1",titre:"A1 \u2014 Le cerveau, un organe hyperactif (Besoins & IRMf)"},A2:{id:"A2",titre:"A2 \u2014 Audition et pr\xE9vention des risques sonores"},A3:{id:"A3",titre:"A3 \u2014 Temps de r\xE9action et s\xE9curit\xE9 routi\xE8re"},A4:{id:"A4",titre:"A4 \u2014 Communication synaptique et action du curare"},A5:{id:"A5",titre:"A5 \u2014 Sommeil, m\xE9moire et \xE9crans le soir"},A6:{id:"A6",titre:"A6 \u2014 Addictions, dopamine et cerveau adolescent"},A7:{id:"A7",titre:"A7 \u2014 Vision et int\xE9gration c\xE9r\xE9brale"},A8:{id:"A8",titre:"A8 \u2014 Mode d'action des drogues sur les synapses"}};xr={A7:{id:"A7",titre:"Vision et int\xE9gration c\xE9r\xE9brale",highlightTerms:["patient a","patient b","v1","v2","v3","v4","v5","thalamus","couleur","couleurs","gris","achromatopsie","forme","formes","benson","agnosie","mouvement","mouvements","reception","relais","cortex visuel","cortex occipital","occipital","lesion","lesions","integration","integrer","reseau","communiquer","cooperer","aires visuelles","specialisees","specialisee","faisceaux","retine","oeil","yeux"],criteria:[{id:"c1",titre:"Dissociation clinique (Patients A et B)",competence:"D4.2",description:"D\xE9crire pr\xE9cis\xE9ment les sympt\xF4mes oppos\xE9s du patient A (perte des couleurs, formes conserv\xE9es) et du patient B (perte des formes, couleurs conserv\xE9es).",adviceIfIncomplete:"Compare pr\xE9cis\xE9ment les deux patients du Doc. 1 et 2 : qu'est-ce que le patient A continue de voir vs ce qu'il perd ? Et pour le patient B (test de Benson) ?",evaluate(i,e){let t=tn(i,e,"patient a")||tn(i,e,"premier patient"),n=tn(i,e,"patient b")||tn(i,e,"deuxieme patient")||tn(i,e,"second patient"),s=dh(i,e,[{label:"perte des couleurs / gris",patterns:["gris","achromatopsie","noir et blanc","sans couleur","ne voit plus les couleurs","perd les couleurs","plus les couleurs","trouble des couleurs"]},{label:"couleurs",patterns:["couleur","couleurs"]}]),r=dh(i,e,[{label:"test de Benson (0/4)",patterns:["benson","0/4","0 sur 4","objets"]},{label:"trouble des formes",patterns:["forme","formes","dessins","agnosie","reconnaitre les formes","identifier les objets"]}]),a=t&&s.length>0||s.includes("perte des couleurs / gris"),o=n&&r.length>0||r.includes("test de Benson (0/4)")||r.includes("trouble des formes");return hh(a,o,s,r)}},{id:"c2",titre:"Sp\xE9cialisation des aires V4 et V3",competence:"D4.2",description:"Relier la perte des couleurs du patient A \xE0 une l\xE9sion de V4 et la perte des formes du patient B \xE0 une l\xE9sion de V3.",adviceIfIncomplete:"Nomme les deux aires l\xE9s\xE9es (Doc. 2 et cerveau 3D) et associe clairement chacune \xE0 sa fonction : quelle aire traite les couleurs ? Quelle aire traite les formes ?",evaluate(i,e){let t=tn(i,e,"v4"),n=tn(i,e,"v3"),s=tn(i,e,"couleur"),r=tn(i,e,"forme")||tn(i,e,"objet"),a=/v4[^.!?\n]{0,45}couleur|couleur[^.!?\n]{0,45}v4|patient a[^.!?\n]{0,45}v4|v4[^.!?\n]{0,45}patient a/i.test(i),o=/v3[^.!?\n]{0,45}(forme|objet|benson)|(forme|objet|benson)[^.!?\n]{0,45}v3|patient b[^.!?\n]{0,45}v3|v3[^.!?\n]{0,45}patient b/i.test(i),c=[];t&&c.push("aire V4"),n&&c.push("aire V3");let l=a||t&&s&&!/v4[^.!?\n]{0,25}forme/i.test(i),d=o||n&&r&&!/v3[^.!?\n]{0,25}couleur/i.test(i);return hh(l,d,l?["V4 -> couleurs"]:t?["V4"]:[],d?["V3 -> formes"]:n?["V3"]:[])}},{id:"c3",titre:"Organisation modulaire (V1, V2, V5, Thalamus)",competence:"D4.1",description:"Identifier que le cortex visuel occipital poss\xE8de plusieurs aires sp\xE9cialis\xE9es (V1 r\xE9ception, V2 relais/contours, V5 mouvement).",adviceIfIncomplete:"Explique comment l'information arrive au cortex visuel et cite d'autres aires sp\xE9cialis\xE9es du mod\xE8le 3D (comme V1 qui re\xE7oit le message, V2 qui relaie ou V5 qui analyse le mouvement).",evaluate(i,e){return tt(i,e,[{label:"aire V1 (r\xE9ception)",patterns:["v1","aire primaire","premiere etape","recoit le message"]},{label:"aire V2 (relais/contours)",patterns:["v2","relais","contours","distribue"]},{label:"aire V5 (mouvement)",patterns:["v5","mouvement","mouvements"]},{label:"aires sp\xE9cialis\xE9es / cortex occipital",patterns:["aires specialisees","zones specialisees","cortex occipital","lobe occipital","cortex visuel"]},{label:"thalamus / voies visuelles",patterns:["thalamus","nerf optique","retine"]}],2)}},{id:"c4",titre:"Fonction d'int\xE9gration c\xE9r\xE9brale en r\xE9seau",competence:"D1.3",description:"Conclure que la vision normale exige l'int\xE9gration : les aires sp\xE9cialis\xE9es doivent communiquer et coop\xE9rer en r\xE9seau.",adviceIfIncomplete:"R\xE9dige une conclusion sur l'int\xE9gration c\xE9r\xE9brale : pourquoi une seule aire ne suffit-elle pas et que doivent faire toutes ces aires ensemble pour reconstruire une image compl\xE8te ?",evaluate(i,e){return tt(i,e,[{label:"notion d'int\xE9gration",patterns:["integration","integrer","integre","integrent"]},{label:"communication / mise en relation / r\xE9seau",patterns:["communiquent","communiquer","communication","reseau","faisceaux","mise en relation","connectees","echangent","reliees"]},{label:"coop\xE9ration / synth\xE8se compl\xE8te",patterns:["cooperer","cooperent","ensemble","combiner","rassembler","assembler","image complete","vision complete","perception complete"]}],2)}}],detectErrors(i){let e=[],t=i.split(/[.!?\n;]|,\s*(?:alors que|tandis que|en revanche)|\b(?:alors que|tandis que|en revanche)\b/i).map(r=>r.trim()).filter(Boolean),n=!1;for(let r of t){let a=/\bv3\b/.test(r),o=/\bv4\b/.test(r),c=/\b(couleur|couleurs|gris|achromatopsie)\b/.test(r),l=/\b(forme|formes|benson|agnosie)\b/.test(r),d=/\bpatient a\b/.test(r),p=/\bpatient b\b/.test(r);a&&!o&&!l&&(c||d)&&(n=!0),o&&!a&&!c&&(l||p)&&(n=!0)}return n&&e.push("Confusion V3 / V4 : attention, tu sembles associer V3 aux couleurs ou V4 aux formes. V\xE9rifie dans le tableau du Doc. 2 (et dans le mod\xE8le 3D) : c'est V4 qui traite les couleurs (Patient A) et V3 qui traite les formes (Patient B)."),/(oeil|yeux|retine)[^.!?\n,;]{0,35}(abime|lese|detruit|malade|ne fonctionne pas|responsable)/i.test(i)&&e.push("Confusion \u0153il / cerveau : d'apr\xE8s le Doc. 1, les yeux et la r\xE9tine des deux patients sont parfaitement normaux. La cause du trouble est une l\xE9sion dans une zone pr\xE9cise du cerveau."),e}},A1:{id:"A1",titre:"Besoins \xE9nerg\xE9tiques & imagerie c\xE9r\xE9brale (IRMf)",highlightTerms:["2 %","2%","20 %","20%","dioxygene","o2","glucose","sang","arteres","arteres cerebrales","irrigation","irmf","zones actives","aires","10 %","10%","mythe","neuromythe","100 %","reseau","energie"],criteria:[{id:"c1",titre:"Disproportion masse (2 %) / \xE9nergie (20 %)",competence:"D4.2",description:"Relever que le cerveau p\xE8se environ 2 % du corps mais consomme 20 % du dioxyg\xE8ne et du glucose.",adviceIfIncomplete:"Appuie-toi sur les chiffres du Doc. 1 : compare la part du cerveau dans la masse du corps (%) et sa part dans la consommation d'\xE9nergie (%).",evaluate(i,e){return tt(i,e,[{label:"2 % de la masse",patterns:["2 %","2%","deux pour cent","1,4 kg","1 4 kg"]},{label:"20 % de la consommation",patterns:["20 %","20%","vingt pour cent","un cinquieme"]},{label:"dioxyg\xE8ne et glucose",patterns:["dioxygene","o2","glucose","sucre","energie"]}],2)}},{id:"c2",titre:"Approvisionnement par les art\xE8res c\xE9r\xE9brales",competence:"D4.1",description:"Expliquer que le sang des art\xE8res c\xE9r\xE9brales apporte en permanence dioxyg\xE8ne et glucose aux neurones.",adviceIfIncomplete:"Explique comment le dioxyg\xE8ne et le glucose arrivent jusqu'au cerveau (r\xF4le du sang et des art\xE8res c\xE9r\xE9brales).",evaluate(i,e){return tt(i,e,[{label:"art\xE8res c\xE9r\xE9brales / vaisseaux",patterns:["artere","arteres","vaisseau","vaisseaux","irrigation","irrigation sanguine"]},{label:"apport sanguin continu / AVC",patterns:["sang","circulation sanguine","en permanence","continu","avc","privation"]}],2)}},{id:"c3",titre:"Exploitation de l'imagerie fonctionnelle (IRMf)",competence:"D4.2",description:"Montrer \xE0 l'aide de l'IRMf que plusieurs aires sp\xE9cialis\xE9es s'activent selon les t\xE2ches r\xE9alis\xE9es.",adviceIfIncomplete:"Explique ce que montre l'IRMf (Doc. 3) : voit-on une seule zone active ou plusieurs aires diff\xE9rentes selon la t\xE2che ?",evaluate(i,e){return tt(i,e,[{label:"IRMf / imagerie c\xE9r\xE9brale",patterns:["irm","irmf","imagerie"]},{label:"activation de multiples zones",patterns:["plusieurs aires","plusieurs zones","differentes zones","zones actives","activite cerebrale","debit sanguin"]}],2)}},{id:"c4",titre:"R\xE9futation argument\xE9e du mythe des 10 %",competence:"D1.3",description:"Conclure que l'id\xE9e qu'on n'utilise que 10 % du cerveau est fausse : 100 % des aires travaillent en r\xE9seau.",adviceIfIncomplete:"R\xE9ponds clairement au mythe des \xAB 10 % du cerveau \xBB : est-il vrai ou faux ? Justifie avec les besoins \xE9nerg\xE9tiques et l'IRMf.",evaluate(i,e){return tt(i,e,[{label:"r\xE9futation du mythe des 10 %",patterns:["10 %","10%","mythe","neuromythe","faux","fausse","idee recue"]},{label:"utilisation compl\xE8te / en r\xE9seau",patterns:["100 %","totalite","entierement","tout le cerveau","en reseau","au fil des taches","sommeil"]}],2)}}],detectErrors(i){let e=[];return/on n utilise que 10|vrai.{0,20}10\s?%/i.test(i)&&!/faux|mythe|refut/i.test(i)&&e.push("Attention : affirmer qu'on n'utilise que 10 % du cerveau est un neuromythe. L'IRMf et l'\xE9norme consommation d'\xE9nergie (20 %) prouvent que tout le cerveau est utilis\xE9."),e}},A2:{id:"A2",titre:"Audition et pr\xE9vention des risques sonores",highlightTerms:["oreille","tympan","osselets","cochlee","cellules ciliees","nerf auditif","cortex auditif","lobe temporal","85 db","100 db","decibels","duree","irreversible","detruites","surdite","acouphenes","bouchons","volume","pauses"],criteria:[{id:"c1",titre:"Trajet du message auditif jusqu'au cortex",competence:"D4.1",description:"D\xE9crire la cha\xEEne oreille/tympan \u2192 cochl\xE9e (cellules cili\xE9es) \u2192 nerf auditif \u2192 cortex auditif.",adviceIfIncomplete:"D\xE9cris le trajet complet du son : organes de l'oreille (tympan, cochl\xE9e et cellules cili\xE9es) puis nerf auditif jusqu'au cortex auditif.",evaluate(i,e){return tt(i,e,[{label:"cochl\xE9e / cellules cili\xE9es",patterns:["cochlee","cellules ciliees","cellule ciliee","oreille interne","tympan"]},{label:"nerf auditif",patterns:["nerf auditif"]},{label:"cortex auditif / cerveau",patterns:["cortex auditif","aire auditive","lobe temporal","cerveau"]}],2)}},{id:"c2",titre:"Exploitation des seuils en d\xE9cibels et dur\xE9e",competence:"D4.2",description:"Citer le seuil de danger (85 dB) et/ou le niveau d'un concert/casque (\u2265 100 dB) ainsi que le r\xF4le de la dur\xE9e d'exposition.",adviceIfIncomplete:"Appuie-toi sur les valeurs du graphique (seuil de danger \xE0 85 dB, 100 dB en concert/\xE9couteurs et dur\xE9e d'exposition maximale).",evaluate(i,e){return tt(i,e,[{label:"seuil 85 dB / d\xE9cibels",patterns:["85","100","105","decibel","db"]},{label:"dur\xE9e d'exposition",patterns:["duree","temps d exposition","heures","minutes","seuil"]}],2)}},{id:"c3",titre:"L\xE9sion irr\xE9versible des cellules cili\xE9es",competence:"D4.1",description:"Expliquer que les cellules cili\xE9es d\xE9truites ne se renouvellent pas (surdit\xE9 d\xE9finitive, acouph\xE8nes).",adviceIfIncomplete:"Explique pourquoi les dommages auditifs sont graves : les cellules cili\xE9es d\xE9truites peuvent-elles repousser ? Quelles cons\xE9quences (acouph\xE8nes, surdit\xE9) ?",evaluate(i,e){return tt(i,e,[{label:"destruction irr\xE9versible",patterns:["irreversible","definitif","definitive","ne se renouvellent pas","ne repoussent pas","ne se regenerent pas","detruites","detruit"]},{label:"acouph\xE8nes / surdit\xE9",patterns:["acouphene","acouphenes","surdite","sourd","bourdonnement","sifflement"]}],2)}},{id:"c4",titre:"Mesures concr\xE8tes de pr\xE9vention",competence:"D3.4",description:"Proposer au moins deux gestes efficaces de protection (bouchons d'oreilles, baisser le volume, pauses, s'\xE9loigner des enceintes).",adviceIfIncomplete:"Propose des r\xE8gles concr\xE8tes pour prot\xE9ger l'audition en concert ou au casque (bouchons, volume, pauses, distance aux enceintes).",evaluate(i,e){return tt(i,e,[{label:"bouchons / protection",patterns:["bouchon","bouchons","casque anti bruit","protection"]},{label:"limiter volume / pauses / distance",patterns:["baisser le volume","limiter le volume","volume","pause","pauses","eloigner","enceintes","duree d ecoute"]}],2)}}],detectErrors(i){let e=[];return/cellules ciliees.{0,30}(repoussent|guerissent|se regenerent)/i.test(i)&&!/ne.{0,10}(repoussent|regenerent|renouvellent)/i.test(i)&&e.push("Erreur scientifique : chez l'\xEAtre humain, les cellules cili\xE9es d\xE9truites ne se renouvellent jamais ; la perte auditive est irr\xE9versible."),e}},A3:{id:"A3",titre:"Temps de r\xE9action, t\xE9l\xE9phone et s\xE9curit\xE9 routi\xE8re",highlightTerms:["oeil","recepteur","nerf sensitif","cerveau","aires visuelles","aire motrice","moelle epiniere","nerf moteur","muscle","muscles","temps de reaction","1 s","2,5 s","15 m","35 m","70 m","83 m","distance d arret","cortex prefrontal","attention","surcharge","sms","telephone"],criteria:[{id:"c1",titre:"Trajet de la commande nerveuse du freinage",competence:"D4.1",description:"Tracer la cha\xEEne : \u0153il (r\xE9cepteur) \u2192 nerf sensitif \u2192 cerveau \u2192 moelle \xE9pini\xE8re / nerf moteur \u2192 muscle.",adviceIfIncomplete:"D\xE9cris le trajet complet du message nerveux lors du freinage : de l'\u0153il (r\xE9cepteur) aux muscles (effecteurs) en passant par les nerfs et les centres nerveux.",evaluate(i,e){return tt(i,e,[{label:"r\xE9cepteur + voie sensitive",patterns:["oeil","retine","recepteur","nerf sensitif","nerf optique","message sensitif"]},{label:"centres nerveux (cerveau / moelle)",patterns:["cerveau","aire motrice","cortex","moelle epiniere"]},{label:"voie motrice + muscle effecteur",patterns:["nerf moteur","message moteur","muscle","muscles","pied","effecteur"]}],2)}},{id:"c2",titre:"Comparaison chiffr\xE9e des distances \xE0 50 km/h",competence:"D4.2",description:"Exploiter les donn\xE9es (temps de r\xE9action multipli\xE9 par ~2,5 avec SMS, distance de r\xE9action 14-15 m vs 35 m, arr\xEAt total ~70-83 m).",adviceIfIncomplete:"Utilise les chiffres du document \xE0 50 km/h : compare la distance de r\xE9action normale (~15 m) \xE0 celle avec un SMS (~35 m) et la distance d'arr\xEAt totale.",evaluate(i,e){return tt(i,e,[{label:"temps de r\xE9action augment\xE9",patterns:["temps de reaction","1 s","2,5 s","2.5 s","plus long","ralentit","allonge"]},{label:"distances en m\xE8tres (15 m / 35 m / 70-83 m)",patterns:["14 m","15 m","35 m","70 m","83 m","distance de reaction","distance d arret","distance de freinage"]}],2)}},{id:"c3",titre:"Explication c\xE9r\xE9brale (surcharge attentionnelle)",competence:"D4.1",description:"Expliquer que le cortex pr\xE9frontal/cerveau ne peut pas traiter deux t\xE2ches attentionnelles simultan\xE9ment (surcharge cognitive).",adviceIfIncomplete:"Explique ce qui se passe dans le cerveau quand on lit un message en conduisant (r\xF4le du cortex pr\xE9frontal et limite du traitement simultan\xE9).",evaluate(i,e){return tt(i,e,[{label:"surcharge / attention divis\xE9e",patterns:["attention","surcharge","distrait","distraction","deux taches","en meme temps","simultane","multitache"]},{label:"cortex pr\xE9frontal / traitement",patterns:["cortex prefrontal","prefrontal","traite l information","traitement","prise de decision"]}],2)}},{id:"c4",titre:"Argumentation pr\xE9vention & s\xE9curit\xE9 routi\xE8re",competence:"D3.4",description:"Formuler une conclusion argument\xE9e montrant le danger d'accident et les r\xE8gles de s\xE9curit\xE9 (ne pas utiliser le t\xE9l\xE9phone au volant/v\xE9lo).",adviceIfIncomplete:"R\xE9dige une conclusion de pr\xE9vention claire reliant le risque d'accident aux distances parcourues sans freiner.",evaluate(i,e){return tt(i,e,[{label:"risque de collision / accident",patterns:["accident","collision","danger","obstacle","pieton","percuter","trop tard"]},{label:"r\xE8gle de s\xE9curit\xE9 / pas de t\xE9l\xE9phone",patterns:["interdit","ne pas utiliser","mode avion","ne pas regarder","securite","concentration","conduite"]}],2)}}],detectErrors(i){let e=[];return/cerveau.{0,25}deux taches.{0,20}sans probleme|pas de danger/i.test(i)&&e.push("Attention : le cerveau ne sait pas traiter efficacement deux t\xE2ches cognitives complexes en m\xEAme temps ; le cortex pr\xE9frontal bascule de l'une \xE0 l'autre, ce qui allonge dangereusement le temps de r\xE9action."),e}},A4:{id:"A4",titre:"Communication synaptique et mode d'action du curare",highlightTerms:["claude bernard","grenouille","curare","jonction","synapse","fente synaptique","20 nm","vesicules","neurotransmetteur","acetylcholine","messager chimique","recepteurs","neurone presynaptique","postsynaptique","bloque","paralysie","exocytose"],criteria:[{id:"c1",titre:"Localisation par l'exp\xE9rience de Claude Bernard",competence:"D4.2",description:"Montrer que le nerf et le muscle restent individuellement fonctionnels, mais que la transmission \xE9choue \xE0 la jonction nerf-muscle.",adviceIfIncomplete:"Explique ce que prouvent les r\xE9sultats de Claude Bernard (Doc. 1) : le nerf est-il d\xE9truit ? Le muscle ? O\xF9 agit exactement le curare ?",evaluate(i,e){return tt(i,e,[{label:"Claude Bernard / exp\xE9riences",patterns:["claude bernard","grenouille","ligature","nerf sciatique"]},{label:"jonction nerf-muscle cibl\xE9e",patterns:["jonction","entre le nerf et le muscle","passage du message","nerf fonctionne","muscle se contracte"]}],2)}},{id:"c2",titre:"Organisation de la synapse (fente synaptique)",competence:"D4.1",description:"D\xE9crire la discontinuit\xE9 physique entre les deux cellules : fente synaptique (~20 nm), v\xE9sicules et membranes.",adviceIfIncomplete:"D\xE9cris l'\xE9chelle microscopique de la synapse : les neurones se touchent-ils ? Quel espace les s\xE9pare et que contiennent les v\xE9sicules ?",evaluate(i,e){return tt(i,e,[{label:"synapse / fente synaptique",patterns:["synapse","fente synaptique","espace synaptique","20 nm","ne se touchent pas","discontinuite"]},{label:"v\xE9sicules / \xE9l\xE9ments pr\xE9 et post",patterns:["vesicule","vesicules","presynaptique","postsynaptique","bouton synaptique"]}],2)}},{id:"c3",titre:"Transmission chimique par neurotransmetteurs",competence:"D4.1",description:"Expliquer que l'arriv\xE9e du message \xE9lectrique d\xE9clenche la lib\xE9ration de neurotransmetteurs qui se fixent sur des r\xE9cepteurs sp\xE9cifiques.",adviceIfIncomplete:"Explique comment le message franchit la fente synaptique : par quel messager chimique et sur quelle structure se fixe-t-il ?",evaluate(i,e){return tt(i,e,[{label:"lib\xE9ration de neurotransmetteur",patterns:["neurotransmetteur","neurotransmetteurs","acetylcholine","messager chimique","molecule chimique","liberation","libere","exocytose"]},{label:"fixation sur r\xE9cepteurs sp\xE9cifiques",patterns:["recepteur","recepteurs","se fixe","se fixent","clef serrure","cle serrure","contraction"]}],2)}},{id:"c4",titre:"M\xE9canisme de blocage par le curare",competence:"D1.3",description:"Expliquer que le curare prend la place du neurotransmetteur sur les r\xE9cepteurs sans activer le muscle \u2192 paralysie.",adviceIfIncomplete:"Explique au niveau mol\xE9culaire pourquoi le curare bloque la contraction musculaire (comp\xE9tition sur les r\xE9cepteurs).",evaluate(i,e){return tt(i,e,[{label:"blocage comp\xE9titif des r\xE9cepteurs",patterns:["bloque","blocage","prend la place","empeche la fixation","leurre","inhibiteur","occupe les recepteurs"]},{label:"cons\xE9quence : absence de contraction / paralysie",patterns:["paralysie","paralyse","ne se contracte plus","pas de contraction","message bloque","asphyxie"]}],2)}}],detectErrors(i){let e=[];return/detruit le nerf|brule le muscle|detruit le muscle/i.test(i)&&e.push("Attention : les exp\xE9riences de Claude Bernard montrent que le curare ne d\xE9truit ni le nerf ni le muscle (le muscle se contracte encore si on le stimule directement). Il bloque uniquement la synapse entre les deux."),e}},A5:{id:"A5",titre:"Sommeil, apprentissages et \xE9crans le soir",highlightTerms:["enclass","anses","ecrans","lumiere bleue","melatonine","dette de sommeil","gais","born","48 h","privation","hippocampe","cortex","synapses","consolidation","memoire","reactivation","tri","couvre feu","9 h"],criteria:[{id:"c1",titre:"Constat sanitaire (\xE9crans et manque de sommeil)",competence:"D4.2",description:"Relever l'impact des \xE9crans le soir (lumi\xE8re bleue, retard d'endormissement / m\xE9latonine) et la dette de sommeil au coll\xE8ge.",adviceIfIncomplete:"Appuie-toi sur les donn\xE9es d'enqu\xEAte (EnCLASS / ANSES) : quel est l'effet des \xE9crans le soir sur l'horloge biologique et la dur\xE9e de sommeil ?",evaluate(i,e){return tt(i,e,[{label:"\xE9crans / lumi\xE8re bleue / m\xE9latonine",patterns:["ecran","ecrans","smartphone","lumiere bleue","melatonine","endormissement"]},{label:"donn\xE9es de dette de sommeil",patterns:["enclass","anses","dette de sommeil","manque de sommeil","7 h","8 h","9 h","heures de sommeil"]}],2)}},{id:"c2",titre:"Exp\xE9rience de Gais & Born (m\xE9morisation \xE0 48 h)",competence:"D4.2",description:"Comparer le groupe ayant dormi au groupe priv\xE9 de sommeil : le sommeil am\xE9liore durablement la restitution.",adviceIfIncomplete:"Compare les deux groupes de l'exp\xE9rience de Gais et Born (Doc. 2) : que deviennent les performances apr\xE8s 48 h selon qu'on a dormi ou non ?",evaluate(i,e){return tt(i,e,[{label:"exp\xE9rience Gais & Born / groupes compar\xE9s",patterns:["gais","born","groupe","temoin","prive de sommeil","48 h","48 heures","mots"]},{label:"meilleure m\xE9morisation apr\xE8s sommeil",patterns:["mieux memorise","retient mieux","meilleur rappel","meilleurs resultats","performance","chute"]}],2)}},{id:"c3",titre:"M\xE9canismes c\xE9r\xE9braux nocturnes (hippocampe & synapses)",competence:"D4.1",description:"Expliquer que pendant le sommeil, le cerveau est actif : l'hippocampe r\xE9active les souvenirs et renforce/trie les synapses.",adviceIfIncomplete:"Explique ce que fait le cerveau pendant la nuit (r\xF4le de l'hippocampe, r\xE9activation des neurones et consolidation des synapses).",evaluate(i,e){return tt(i,e,[{label:"consolidation / hippocampe",patterns:["hippocampe","consolidation","consolide","memoire a long terme","reactivation","rejoue"]},{label:"plasticit\xE9 des synapses / nettoyage",patterns:["synapse","synapses","connexions","tri","renforcement","renforce","elimine","cerveau actif"]}],2)}},{id:"c4",titre:"R\xE8gles d'hygi\xE8ne du sommeil",competence:"D3.4",description:"Proposer des habitudes protectrices concr\xE8tes (arr\xEAt des \xE9crans 1 h avant de dormir, horaires r\xE9guliers, dur\xE9e adapt\xE9e).",adviceIfIncomplete:"Propose au moins deux conseils concrets d'hygi\xE8ne du sommeil pour un coll\xE9gien (couvre-feu des \xE9crans, r\xE9gularit\xE9, dur\xE9e).",evaluate(i,e){return tt(i,e,[{label:"coupure \xE9crans avant coucher",patterns:["couvre feu","arreter les ecrans","sans ecran","hors de la chambre","1 heure avant","1h avant","pas de telephone"]},{label:"horaires r\xE9guliers / dur\xE9e suffisante",patterns:["horaires reguliers","heure fixe","dormir 9","9 heures","8 a 10 heures","chambre calme","obscurite"]}],2)}}],detectErrors(i){let e=[];return/cerveau.{0,20}eteint|cerveau.{0,20}se repose completement|ne fait rien la nuit/i.test(i)&&e.push("Id\xE9e re\xE7ue : pendant le sommeil, le cerveau ne s'\xE9teint pas ! Il reste tr\xE8s actif pour trier les informations, consolider la m\xE9moire et renforcer les synapses."),e}},A6:{id:"A6",titre:"Addictions, circuit de la r\xE9compense et vuln\xE9rabilit\xE9 adolescente",highlightTerms:["puff","puffs","nicotine","tabac","dopamine","circuit de la recompense","atv","noyau accumbens","100 ua","250","1000","cortex prefrontal","immature","25 ans","dependance","tolerance","manque","prevention"],criteria:[{id:"c1",titre:"Constat sur les puffs et la nicotine chez les jeunes",competence:"D4.2",description:"Relever l'exposition pr\xE9coce (13-15 ans) aux puffs contenant de la nicotine et le risque de passage au tabac.",adviceIfIncomplete:"Appuie-toi sur les donn\xE9es d'enqu\xEAte (Doc. 1) concernant la consommation des puffs chez les coll\xE9giens et la pr\xE9sence de nicotine.",evaluate(i,e){return tt(i,e,[{label:"puffs / nicotine / tabac",patterns:["puff","puffs","nicotine","cigarette electronique","tabac","porte d entree"]},{label:"donn\xE9es adolescents (13-15 ans)",patterns:["13 15 ans","collegiens","adolescents","jeunes","aromes"]}],2)}},{id:"c2",titre:"Circuit de la r\xE9compense et lib\xE9ration de dopamine",competence:"D4.2",description:"Expliquer l'activation du circuit de la r\xE9compense (ATV \u2192 noyau accumbens) et la lib\xE9ration massive et artificielle de dopamine.",adviceIfIncomplete:"D\xE9cris l'action de la drogue/nicotine sur le circuit de la r\xE9compense : quelle mol\xE9cule augmente anormalement (dopamine) et dans quelles zones (ATV, noyau accumbens) ?",evaluate(i,e){return tt(i,e,[{label:"dopamine (pic anormal)",patterns:["dopamine","pic","250","1000","100 ua","massivement","artificiellement"]},{label:"circuit de la r\xE9compense (ATV / accumbens)",patterns:["circuit de la recompense","recompense","atv","accumbens","plaisir"]}],2)}},{id:"c3",titre:"Vuln\xE9rabilit\xE9 du cerveau adolescent (immaturit\xE9 pr\xE9frontale)",competence:"D4.1",description:"Expliquer le d\xE9s\xE9quilibre entre un syst\xE8me de r\xE9compense hyperactif et un cortex pr\xE9frontal encore immature (~25 ans).",adviceIfIncomplete:"Explique pourquoi le cerveau d'un adolescent est plus vuln\xE9rable \xE0 l'addiction que celui d'un adulte (maturation tardive du cortex pr\xE9frontal vers 25 ans).",evaluate(i,e){return tt(i,e,[{label:"cortex pr\xE9frontal immature (~25 ans)",patterns:["cortex prefrontal","prefrontal","immature","maturation","25 ans","controle","frein"]},{label:"vuln\xE9rabilit\xE9 adolescente accrue",patterns:["vulnerable","vulnerabilite","hyperactif","desequilibre","adolescent","adolescence","impulsif"]}],2)}},{id:"c4",titre:"D\xE9pendance / tol\xE9rance et arguments de pr\xE9vention",competence:"D3.4",description:"Expliquer l'installation de la d\xE9pendance (besoin d'augmenter les doses, manque) et formuler des moyens d'\xE9viter le pi\xE8ge.",adviceIfIncomplete:"Explique comment s'installe la d\xE9pendance (tol\xE9rance, sensation de manque) et donne des arguments pour refuser ces produits.",evaluate(i,e){return tt(i,e,[{label:"d\xE9pendance / tol\xE9rance / manque",patterns:["dependance","addiction","addict","tolerance","manque","augmenter les doses","besoin"]},{label:"pr\xE9vention / esprit critique",patterns:["refuser","prevention","aide","tabac info service","marketing","piege","eviter"]}],2)}}],detectErrors(i){let e=[];return/puff.{0,25}(sans danger|inoffensive|pas de nicotine)/i.test(i)&&e.push("Attention : les puffs sont loin d'\xEAtre inoffensives ; la majorit\xE9 contiennent de la nicotine fortement addictive qui d\xE9r\xE8gle le circuit de la r\xE9compense."),e}},A8:{id:"A8",titre:"Mode d'action des drogues sur les synapses",highlightTerms:["vesicule","vesicules","neurone a","neurone b","neurone c","zone de jonction","synapse","espace synaptique","substance","neurotransmetteur","membrane","cannabis","heroine","cocaine","ecstasy","alcool","amphetamines","euphorie","attention","memoire","memorisation","hallucinations","dependance"],criteria:[{id:"c1",competence:"D4.2",titre:"Comparaison neurones B/C (avant/pendant) & troubles nerveux",description:"Comparer le contenu des neurones B (v\xE9sicules) et C (sans v\xE9sicules) avant et pendant la transmission et relever les troubles nerveux.",adviceIfIncomplete:"Compare d'abord les clich\xE9s avant/pendant (v\xE9sicules pr\xE9sentes dans B mais absentes dans C) et rel\xE8ve les troubles nerveux du Doc. 3 (attention, m\xE9moire, euphorie, d\xE9pendance).",evaluate(i,e){return tt(i,e,[{label:"v\xE9sicules dans B / absentes dans C",patterns:["vesicule","vesicules",/neurone\s*c.{0,35}(aucun|pas\s*de|sans|vide)/]},{label:"\xE9volution avant / pendant la transmission",patterns:[/avant.{0,35}pendant/,/cliche\s*1.{0,35}cliche\s*2/,"moins de vesicule",/s.?ouvrent/,/fusionn/]},{label:"troubles nerveux (attention, m\xE9moire, euphorie, d\xE9pendance)",patterns:["trouble","attention","memoire","memorisation","apprentissage","euphorie","hallucination","dependance","apathie","somnolence","agitation"]}],2)}},{id:"c2",competence:"D4.1",titre:"Transmission normale : lib\xE9ration v\xE9siculaire dans l'espace synaptique",description:"Expliquer que les v\xE9sicules du neurone B s'ouvrent et lib\xE8rent une substance chimique dans l'espace de jonction qui agit sur le neurone C.",adviceIfIncomplete:"Explique le m\xE9canisme normal au niveau de la synapse : les v\xE9sicules du neurone B d\xE9versent une substance chimique dans l'espace de jonction, qui agit sur la membrane du neurone C.",evaluate(i,e){return tt(i,e,[{label:"d\xE9versement / lib\xE9ration par les v\xE9sicules",patterns:[/devers/,/liber/,/vide.{0,25}contenu/,/ouverture.{0,20}vesicule/,/s.?ouvrent/]},{label:"substance chimique dans l'espace synaptique",patterns:["substance","messager","neurotransmetteur","espace synaptique","zone de jonction","synapse","fente"]},{label:"action sur la membrane du neurone C",patterns:[/membrane.{0,25}neurone\s*c/,/agit\s*sur.{0,25}neurone\s*c/,/vers\s*le\s*neurone\s*c/,"recepteur"]}],2)}},{id:"c3",competence:"D4.2",titre:"Action sur A/B et dans l'espace synaptique (cannabis, h\xE9ro\xEFne, coca\xEFne, amph\xE9tamines)",description:"Pr\xE9ciser l'action du cannabis/h\xE9ro\xEFne (bloquent les v\xE9sicules sur A/B), de la coca\xEFne/ecstasy (maintiennent la substance dans l'espace) et des amph\xE9tamines (vident les v\xE9sicules).",adviceIfIncomplete:"D\xE9cris le mode et le lieu d'action du cannabis/h\xE9ro\xEFne (membrane A/B, bloquent les v\xE9sicules), de la coca\xEFne/ecstasy (maintiennent la substance dans l'espace synaptique) et des amph\xE9tamines (vident les v\xE9sicules).",evaluate(i,e){return tt(i,e,[{label:"cannabis / h\xE9ro\xEFne (membrane A/B, bloquent lib\xE9ration)",patterns:[/cannabis.{0,65}(empech|bloqu|membrane)/,/heroine.{0,65}(empech|bloqu|membrane)/]},{label:"coca\xEFne / ecstasy (maintien dans l'espace synaptique)",patterns:[/cocaine.{0,65}(maintien|espace|accumul|reste)/,/ecstasy.{0,65}(maintien|espace|accumul|reste)/]},{label:"amph\xE9tamines (vident les v\xE9sicules dans l'espace)",patterns:[/amphetamine.{0,65}(penetr|vid|accumul)/]}],2)}},{id:"c4",competence:"D4.1",titre:"Action de l'alcool sur le neurone C et perturbation du message nerveux",description:"Indiquer que l'alcool emp\xEAche la substance d'agir sur la membrane du neurone C et relier ces perturbations aux troubles nerveux.",adviceIfIncomplete:"Pr\xE9cise le mode et le lieu d'action de l'alcool (emp\xEAche la substance d'agir sur la membrane du neurone C) et montre comment cela perturbe le message nerveux.",evaluate(i,e){return tt(i,e,[{label:"alcool bloque l'action sur la membrane du neurone C",patterns:[/alcool.{0,65}(empech|bloqu|agit\s*pas).{0,80}(membrane|neurone\s*c)/,/membrane.{0,35}neurone\s*c.{0,45}alcool/]},{label:"perturbation de la transmission du message nerveux / d\xE9pendance",patterns:[/perturb/,/dereg/,/modifi.{0,25}(transmission|message)/,"dependance","trouble"]}],2)}}],detectErrors(i){let e=[];return/neurone\s*c.{0,30}(contient|possede|a\s*des|avec\s*des).{0,20}vesicule/.test(i)&&!/aucun|pas\s*de\s*vesicule|sans\s*vesicule/.test(i)&&e.push("Attention aux clich\xE9s MET : le corps cellulaire du neurone C ne contient aucune v\xE9sicule ; elles se trouvent uniquement dans les terminaisons des neurones A et B."),(/alcool.{0,45}(empech|bloqu|vid|cibl|fix).{0,35}(vesicule|neurone\s*b|neurone\s*a)/.test(i)||/alcool.{0,35}(vesicule|neurone\s*b|neurone\s*a).{0,25}(empech|bloqu|vid)/.test(i))&&!/membrane.{0,25}neurone\s*c/.test(i)&&e.push("Attention : l'alcool n'emp\xEAche pas les v\xE9sicules de sortir, il emp\xEAche la substance d\xE9j\xE0 d\xE9vers\xE9e d'agir sur la membrane du neurone C."),/(cannabis|heroine).{0,35}(maintien|accumul.{0,20}espace)/.test(i)&&e.push("Attention \xE0 ne pas confondre : cannabis et h\xE9ro\xEFne emp\xEAchent les v\xE9sicules (A/B) de lib\xE9rer leur contenu ; ce sont la coca\xEFne, l'ecstasy et les amph\xE9tamines qui augmentent/maintiennent la substance dans l'espace synaptique."),/cannabis.{0,25}(sans danger|inoffensif|aucun effet|pas de dependance)/.test(i)&&e.push("Attention au Doc. 3 : le cannabis provoque des troubles de l'attention, de la m\xE9morisation et de l'apprentissage."),e}}};nx={ACTIVITIES_META:tx,RUBRICS:xr,CONNECTEURS_CATEGORIES:gc,ALL_CONNECTEURS:ph,normalizeText:yr,normalizeActivityId:Io,countWords:fs,analyzeSentences:mh,evaluateLanguage:Do,evaluateActivityResponse:vc,buildSheetRowPayload:xc,highlightStudentTextHTML:yc};typeof window<"u"&&(window.CerveauScoring=nx)});var dx=Uh(()=>{zc();$d();Yd();Fo();eh();uh();gh();var ix="2027",vh="cerveau_gs_url",xh="cerveau_local_copies_v1",yh="cerveau_pending_gs_v1",_h="cerveau_student_profile_v1",bh="https://script.google.com/macros/s/AKfycbwBA_zUE5hnlWr0xdUgpzg1Y5zvr_aZjcRUv40hGpWed0o_twZN90hWKlIgEes0T0_H/exec",sx="cerveau-svt-2026";function Sh(){try{if(window.CERVEAU_SECRET_CONFIG&&window.CERVEAU_SECRET_CONFIG.gsUrl)return String(window.CERVEAU_SECRET_CONFIG.gsUrl).trim();let e=new URLSearchParams(window.location.search).get("gs");if(e&&e.startsWith("http"))return localStorage.setItem(vh,e.trim()),e.trim();let t=(localStorage.getItem(vh)||"").trim();return t&&t.startsWith("http")?t:bh}catch{return bh}}function rx(){try{if(window.CERVEAU_SECRET_CONFIG&&window.CERVEAU_SECRET_CONFIG.token)return String(window.CERVEAU_SECRET_CONFIG.token).trim()}catch{}return sx}function ax(i){try{let e=JSON.parse(localStorage.getItem(xh)||"[]"),t=e.findIndex(n=>String(n.Classe||"").trim().toLowerCase()===String(i.Classe||"").trim().toLowerCase()&&String(n.Eleve||"").trim().toLowerCase()===String(i.Eleve||"").trim().toLowerCase()&&String(n.Sujet||"").trim().toUpperCase()===String(i.Sujet||"").trim().toUpperCase()&&String(n.Modalite||"").trim()===String(i.Modalite||"").trim());t>=0?(i.Tentative_2&&e[t].Tentative_1&&(i.Tentative_1=e[t].Tentative_1),e[t]={...e[t],...i}):e.push(i),localStorage.setItem(xh,JSON.stringify(e))}catch{}}async function Eh(i,e,t=12e3){let n=new AbortController,s=setTimeout(()=>n.abort(),t);try{return await fetch(i,{...e,signal:n.signal})}finally{clearTimeout(s)}}async function ox(i,e,t){if(!i||!i.startsWith("http"))return{status:"no_url",message:"URL Google Sheet non configur\xE9e (copie enregistr\xE9e localement pour le Dashboard)."};let n=JSON.stringify({action:"append",token:rx(),idEnvoi:t,...e});for(let s=1;s<=2;s++)try{let r=await Eh(i,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:n},12e3);if(r.ok){let a=await r.text();try{let o=JSON.parse(a);if(o&&o.ok)return{status:"sent",message:"Copie bien re\xE7ue dans le Google Sheet du professeur \u2705"}}catch{return{status:"sent",message:"Copie transmise au Google Sheet du professeur \u2705"}}}}catch{}try{return await Eh(i,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:n},1e4),{status:"sent_nocors",message:"Copie transmise au Google Sheet du professeur \u2705"}}catch{try{let s=JSON.parse(localStorage.getItem(yh)||"[]");s.push({idEnvoi:t,gsUrl:i,rowObj:e}),localStorage.setItem(yh,JSON.stringify(s))}catch{}return{status:"queued",message:"Hors-ligne : copie sauvegard\xE9e localement, pr\xEAte \xE0 \xEAtre synchronis\xE9e."}}}function se(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function lx(i,e){let t=atob(i),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);let s=new TextEncoder().encode(e),r=new Uint8Array(n.length);for(let a=0;a<n.length;a++)r[a]=n[a]^s[a%s.length];return JSON.parse(new TextDecoder().decode(r))}function Mh(i){try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}}function Ah(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}function cx(){let i=window.MINI_ACT_ID||"A1",e=jd[i],t=lh[i],n=Kd[i];if(!e||!t){document.body.innerHTML='<p style="padding:24px">Activit\xE9 introuvable.</p>';return}let s=`cerveau_mini_${i}_v1`,r=Mh(s),a=Mh(_h);Sh();let o=String(a.classe||"").trim(),c=/^4e[A-E]$/i.test(o)?"4eme1":o||"4eme1",l={tab:"pb",voie:r.voie==="voie1"?"voie1":"voie2",answers:r.answers||{},checks:r.checks||{},submissions:r.submissions||{},eleve:a.eleve||"",classe:c,theme:r.theme==="dark"?"dark":"light",presetIdx:0,unlockedData:null,sideIsRight:!1};document.documentElement.setAttribute("data-theme",l.theme);function d(){Ah(s,{voie:l.voie,answers:l.answers,checks:l.checks,submissions:l.submissions,theme:l.theme}),Ah(_h,{eleve:l.eleve,classe:l.classe})}let p=document.getElementById("app");p.innerHTML=`
    <header class="mini-header">
      <div class="mh-id">
        <span class="mh-code">${se(e.code)}</span>
        <span class="mh-lvl">${se(e.niveau)}</span>
        <div class="mh-titles">
          <h1>${se(e.titre)}</h1>
          <small>${se(e.semaine)} \xB7 ${se(e.duree)} \xB7 ${se(e.type)}</small>
        </div>
      </div>
      <nav class="mini-tabs" role="tablist" aria-label="Navigation de l'activit\xE9">
        <button type="button" class="mtab active" data-tab="pb" role="tab" aria-selected="true">1. Probl\xE9matique</button>
        <button type="button" class="mtab" data-tab="act" role="tab" aria-selected="false">2. Activit\xE9 &amp; Graphiques</button>
        <button type="button" class="mtab" data-tab="3d" role="tab" aria-selected="false">3. Mod\xE8le 3D</button>
        <button type="button" class="mtab" data-tab="corr" role="tab" aria-selected="false" id="tabCorrBtn">\u{1F512} 4. Correction</button>
      </nav>
      <div class="mh-actions">
        <button type="button" class="icon-btn" id="btnTheme" title="Changer le th\xE8me clair / sombre">${l.theme==="dark"?"\u2600\uFE0F Clair":"\u{1F319} Sombre"}</button>
        <button type="button" class="icon-btn" id="btnPrint" title="Imprimer ou exporter ma fiche en PDF">\u{1F5A8}\uFE0F Fiche \xE9l\xE8ve</button>
        <a class="icon-btn" href="./index.html" title="Retour \xE0 toutes les activit\xE9s">Toutes les activit\xE9s</a>
      </div>
    </header>

    <main class="mini-main">
      <!-- ONGLET 1 : PROBL\xC9MATIQUE -->
      <section class="panel active" id="panel-pb"></section>

      <!-- ONGLET 2 : ACTIVIT\xC9 & GRAPHIQUES -->
      <section class="panel" id="panel-act"></section>

      <!-- ONGLET 3 : MOD\xC8LE 3D SIMPLIFI\xC9 -->
      <section class="panel" id="panel-3d"></section>

      <!-- ONGLET 4 : CORRECTION VERROUILL\xC9E (CODE 2027) -->
      <section class="panel" id="panel-corr"></section>
    </main>

    <div class="hover-tip" id="hoverTip" hidden></div>
    <div id="printSheet" aria-hidden="true"></div>
  `;function u(){let S=document.getElementById("panel-pb");S.innerHTML=`
      <div class="prob-hero">
        <div class="prob-media">
          <img src="${se(t.triggerImg)}" alt="${se(t.triggerAlt)}" loading="eager">
          <div class="prob-caption">${se(t.triggerCaption)}</div>
        </div>
        <div class="prob-body">
          <div>
            <span class="kicker">Situation d\xE9clenchante \xB7 ${se(e.niveau)}</span>
            <p class="accroche-txt" style="margin-top:8px">${se(e.accroche)}</p>
          </div>

          <div class="pb-callout">
            <small>Probl\xE9matique scientifique</small>
            <p>${se(e.problematique)}</p>
          </div>

          <div class="prob-cta">
            <button type="button" class="btn-ghost" id="btnGo3dFromPb">Aper\xE7u 3D rapide</button>
            <button type="button" class="btn-primary" id="btnStartAct">D\xE9marrer l'activit\xE9 \u2192</button>
          </div>
        </div>
      </div>

      <div class="fold-stack">
        <details class="fold-panel">
          <summary>\u{1F4A1} Id\xE9e re\xE7ue &amp; piste de recherche</summary>
          <div class="fold-body">
            <div class="ruse-grid">
              <div class="ruse-card myth">
                <strong>Id\xE9e re\xE7ue fr\xE9quente</strong>
                ${se(e.obstacle)}
              </div>
              <div class="ruse-card fact">
                <strong>Piste d'investigation</strong>
                ${se(e.rupture)}
              </div>
            </div>
            <p class="source-tag" style="margin-top:8px"><strong>Sources :</strong> ${se(e.sourceAccroche)}</p>
          </div>
        </details>

        <details class="fold-panel">
          <summary>\u{1F4D6} Vocabulaire utile (${e.vocab.length} mots-cl\xE9s)</summary>
          <div class="fold-body">
            <div class="vocab-grid">
              ${e.vocab.map(v=>`
                <div class="vocab-card">
                  <strong>${se(v.term)}</strong>
                  <span>${se(v.def)}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </details>
      </div>
    `,S.querySelector("#btnStartAct").addEventListener("click",()=>R("act")),S.querySelector("#btnGo3dFromPb").addEventListener("click",()=>R("3d"))}function h(){let S=document.getElementById("panel-act"),v=e.docs.map(U=>{let L="";U.table&&(L=`
          <table class="data-table">
            <thead><tr>${U.table.headers.map(q=>`<th>${se(q)}</th>`).join("")}</tr></thead>
            <tbody>${U.table.rows.map(q=>`<tr>${q.map(k=>`<td>${se(k)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        `);let V=U.type==="3d"?`<button type="button" class="btn-ghost go-3d-doc" style="margin-top:8px">Ouvrir l'onglet Mod\xE8le 3D \u2192</button>`:"";return`
        <details class="doc-fold">
          <summary>
            <span class="doc-num">${se(U.num)}</span>
            <strong>${se(U.title)}</strong>
            <button type="button" class="btn-doc-fs btn-doc-fs-sm" data-fs-fold title="Afficher ce document en plein \xE9cran">\u26F6 Plein \xE9cran</button>
          </summary>
          <div class="doc-fold-body">
            <p class="doc-src">Source : ${se(U.source)}</p>
            <p class="doc-txt">${se(U.text)}</p>
            ${L}
            ${U.legend?`<p class="doc-legend">${se(U.legend)}</p>`:""}
            ${V}
          </div>
        </details>
      `}).join("");S.innerHTML=`
      <div class="act-layout">
        <div class="act-docs">
          <div class="docs-fs-bar">
            <span class="docs-fs-hint">\u{1F50D} Clique sur une image ou sur <strong>\u26F6 Plein \xE9cran</strong> pour agrandir un document</span>
            <button type="button" class="btn-doc-fs" id="btnAllDocsFs" title="Afficher tous les documents en plein \xE9cran">\u26F6 Documents en plein \xE9cran</button>
          </div>
          <div id="visualsMount"></div>
          <details class="fold-panel docs-drawer">
            <summary>\u{1F4C4} Textes et tableau r\xE9capitulatif des documents 1 \xE0 3 (cliquer pour d\xE9rouler)</summary>
            <div class="docs-drawer-body">
              ${v}
            </div>
          </details>
        </div>

        <aside class="act-work">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
            <strong style="font-size:15px">Ton espace de r\xE9ponse</strong>
            <span class="save-badge" id="saveStatus">Enregistr\xE9 automatiquement</span>
          </div>

          <div class="student-id-bar">
            <div class="sid-field">
              <label for="studentNameInput">Nom &amp; Pr\xE9nom</label>
              <input type="text" id="studentNameInput" placeholder="Ex : L\xE9na Martin" value="${se(l.eleve)}" autocomplete="name">
            </div>
            <div class="sid-field sid-class">
              <label for="studentClassSelect">Classe</label>
              <select id="studentClassSelect">
                ${["4eme1","4eme2","4eme3","4eme4","4eme5","4eme6","4eme7","Autre"].map(U=>`<option value="${se(U)}" ${l.classe===U?"selected":""}>${se(U)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="voie-switch" role="group" aria-label="Choix du parcours">
            <button type="button" class="voie-btn ${l.voie==="voie2"?"on":""}" data-voie="voie2">Parcours guid\xE9 (Q1 \u2192 Q3)</button>
            <button type="button" class="voie-btn ${l.voie==="voie1"?"on":""}" data-voie="voie1">T\xE2che complexe (Synth\xE8se)</button>
          </div>

          <div id="fieldsHost"></div>

          <div class="live-writing-bar" id="liveWritingBar" aria-live="polite">
            <span id="lwWords">0 mot</span>
            <span id="lwSentences">0 phrase compl\xE8te</span>
            <span id="lwConns">0 connecteur logique</span>
          </div>

          <details class="fold-panel">
            <summary>\u{1F4A1} Coups de pouce (si tu es bloqu\xE9)</summary>
            <div class="fold-body">
              <div class="hints-box">
                ${e.coupsDePouce.map(U=>`
                  <details>
                    <summary>${se(U.niv)}</summary>
                    <p>${se(U.txt)}</p>
                  </details>
                `).join("")}
              </div>
            </div>
          </details>

          <details class="fold-panel">
            <summary>\u270D\uFE0F Aide \xE0 la r\xE9daction &amp; auto-v\xE9rification</summary>
            <div class="fold-body" style="display:flex;flex-direction:column;gap:10px">
              <div class="mdl-box">
                <strong>Coup d'\u0153il r\xE9daction (${se(e.mdl.verbeAction)}) :</strong> ${se(e.mdl.structure)}
                <div class="mdl-chips">
                  ${e.mdl.marqueurs.map(U=>`<span>${se(U)}</span>`).join("")}
                </div>
              </div>
              <div>
                <strong style="display:block;font-size:12px;margin-bottom:4px">Avant de passer \xE0 la correction :</strong>
                <ul class="check-list">
                  ${e.avantDeRendre.map((U,L)=>`
                    <li>
                      <label style="display:flex;gap:7px;align-items:flex-start;cursor:pointer">
                        <input type="checkbox" class="chk-ready" data-chk="${L}" ${l.checks[L]?"checked":""}>
                        <span>${se(U)}</span>
                      </label>
                    </li>
                  `).join("")}
                </ul>
              </div>
            </div>
          </details>

          <div class="work-actions">
            <button type="button" class="btn-ghost" id="btnGo3dAct">Explorer en 3D \u2192</button>
            <div class="work-actions-right">
              <button type="button" class="btn-send-prof" id="btnSendProf">\u{1F4E4} Envoyer au professeur</button>
              <button type="button" class="btn-primary" id="btnGoCorrAct">Aller \xE0 la Correction \u{1F512}</button>
            </div>
          </div>

          <div id="studentEvalBox" class="student-eval-box" style="display:none"></div>
        </aside>
      </div>
    `,ch(i,S.querySelector("#visualsMount"),U=>{if(R("3d"),t.isVisionModel&&E){let V={v4:3,v3:4,v1:5,v2:5,v5:6,integration:7}[U]??0;E(V),U==="v2"&&f?.isolate("v2")}}),ux(S);function b(){return e[l.voie].fields.map(L=>{let V=S.querySelector(`#${CSS.escape(L.id)}`),q=V?V.value:l.answers[L.id]||"";return String(q||"").trim()}).filter(Boolean).join(`

`)}function B(){let U=b(),L=Do(U),V=S.querySelector("#lwWords"),q=S.querySelector("#lwSentences"),k=S.querySelector("#lwConns");V&&(V.textContent=`${L.wordCount} mot${L.wordCount>1?"s":""}`,V.classList.toggle("ok",L.wordCount>=20)),q&&(q.textContent=`${L.sentenceCount} phrase${L.sentenceCount>1?"s":""} compl\xE8te${L.sentenceCount>1?"s":""}`,q.classList.toggle("ok",L.hasTwoDistinctSentences)),k&&(k.textContent=`${L.connectorsFound.length} connecteur${L.connectorsFound.length>1?"s":""}`,k.classList.toggle("ok",L.connectorsFound.length>=2))}function C(U,L,V,q=1,k=0){let Q=S.querySelector("#studentEvalBox");if(!Q)return;Q.style.display="block";let $=U.total>=3.5?"high":U.total>=2?"mid":"low",le=Math.min(100,Math.round(U.total/5*100)),te=V?`<div class="se-send-status ${se(V.status)}">${se(V.message)}</div>`:"",O=q>=2?k>0?`<span class="se-delta pos">+${k.toFixed(2).replace(/\.?0+$/,"")} pt vs 1er envoi \u{1F389}</span>`:`<span class="se-delta">${k===0?"Tentative 2 enregistr\xE9e":`${k.toFixed(2)} pt`}</span>`:"",ee=U.criteria.map((xe,We)=>{let Oe=xe.score>=1?"ok":xe.score>=.5?"mid":"miss",Ge=xe.score>=1?"Acquis (1/1)":xe.score>=.5?"Partiel (0,5/1)":"\xC0 compl\xE9ter (0/1)",vt=xe.matched&&xe.matched.length?`<div class="se-tags">${xe.matched.map(pt=>`<span>${se(pt)}</span>`).join("")}</div>`:"";return`
          <div class="se-crit-item ${Oe}">
            <div class="se-crit-top">
              <span><strong>C${We+1}. ${se(xe.titre)}</strong> <small>(${se(xe.competence)})</small></span>
              <span class="se-crit-badge ${Oe}">${Ge}</span>
            </div>
            ${vt}
          </div>
        `}).join(""),ie=U.langDetail,ye=U.langue>=.75?"ok":U.langue>=.5?"mid":"miss",re=U.erreursDetectees.length>0?`
          <div class="se-errors">
            <strong>\u26A0\uFE0F Mes erreurs ou oublis d\xE9tect\xE9s :</strong>
            <ul>
              ${U.erreursDetectees.map(xe=>`<li>${se(xe)}</li>`).join("")}
            </ul>
          </div>
        `:`
          <div class="se-success-msg">
            <strong>\u2705 Aucune erreur ni oubli majeur d\xE9tect\xE9 !</strong> Ta r\xE9ponse mobilise l'ensemble des crit\xE8res attendus.
          </div>
        `,we=U.conseilsProgression.length>0?`
          <div class="se-advice">
            <strong>\u{1F680} Comment progresser pour am\xE9liorer mon score :</strong>
            <ul>
              ${U.conseilsProgression.map(xe=>`<li><strong>${se(xe.critere)} :</strong> ${se(xe.conseil)}</li>`).join("")}
            </ul>
          </div>
        `:"",He=yc(L,i);Q.innerHTML=`
        <div class="se-head">
          <div>
            <span class="se-kicker">Bilan imm\xE9diat \xB7 Tentative ${q}</span>
            <h4>Analyse de ta r\xE9ponse</h4>
          </div>
          <div class="se-score-wrap">
            <div class="se-score-pill ${$}">
              <strong>${U.total.toFixed(2).replace(/\.?0+$/,"")}</strong><span>/ 5</span>
            </div>
            <small>${se(U.niveauMaitrise)} (${U.total20}/20)</small>
            ${O}
          </div>
        </div>

        <div class="se-progress-track" aria-hidden="true">
          <div class="se-progress-fill ${$}" style="width:${le}%"></div>
        </div>

        ${te}

        <div class="se-crit-list">
          ${ee}
          <div class="se-crit-item ${ye}">
            <div class="se-crit-top">
              <span><strong>Ma\xEEtrise de la langue</strong> <small>(D1.3 \xB7 Connecteurs + Phrases compl\xE8tes)</small></span>
              <span class="se-crit-badge ${ye}">${U.langue.toFixed(2).replace(/\.?0+$/,"")} / 1</span>
            </div>
            <div class="se-lang-sub">
              <span>\u{1F517} Connecteurs logiques : <strong>${ie.l1Score}/0.5</strong> (${ie.connectorsFound.length?ie.connectorsFound.map(xe=>se(xe)).join(", "):"aucun"})</span>
              <span>\u270D\uFE0F Phrases compl\xE8tes (${ie.sentenceCount}) &amp; longueur (${ie.wordCount} mots) : <strong>${ie.l2Score}/0.5</strong></span>
            </div>
          </div>
        </div>

        ${re}
        ${we}

        <details class="se-copy-details">
          <summary>\u{1F50D} Voir ma r\xE9ponse analys\xE9e (mots scientifiques et connecteurs rep\xE9r\xE9s)</summary>
          <div class="se-copy-legend">
            <span class="leg-sci">Notions scientifiques rep\xE9r\xE9es</span>
            <span class="leg-conn">Connecteurs logiques</span>
          </div>
          <div class="se-highlighted-copy">${He}</div>
        </details>

        <div class="se-footer-actions">
          <button type="button" class="btn-ghost" id="btnImproveReply" style="font-size:12.5px">\u270F\uFE0F Am\xE9liorer ma r\xE9ponse et renvoyer au professeur</button>
          <button type="button" class="se-reset-sub" id="btnResetAttempt" title="Effacer l'historique d'envoi local pour tester avec un autre \xE9l\xE8ve">Nouvel \xE9l\xE8ve \u21BA</button>
        </div>
      `,Q.querySelector("#btnImproveReply")?.addEventListener("click",()=>{let xe=S.querySelector("#fieldsHost textarea");xe&&(xe.focus(),xe.scrollIntoView({behavior:"smooth",block:"center"}))}),Q.querySelector("#btnResetAttempt")?.addEventListener("click",()=>{delete l.submissions[l.voie],d(),Q.style.display="none",Q.innerHTML=""})}function P(){let U=S.querySelector("#studentEvalBox"),L=l.submissions[l.voie];if(!U||!L||!L.lastEval){U&&(U.style.display="none",U.innerHTML="");return}let V=!!L.t2Text,q=V&&L.t1Eval?Math.round((L.lastEval.total-L.t1Eval.total)*100)/100:0;C(L.lastEval,L.t2Text||L.t1Text,{status:"sent",message:"Dernier envoi enregistr\xE9 localement \u2705"},V?2:1,q)}function X(){let U=S.querySelector("#fieldsHost"),L=e[l.voie];U.innerHTML=`
        <p style="margin:0 0 8px;font-size:12.5px;color:var(--fg-2)">${se(L.consigne)}</p>
        ${L.fields.map(V=>`
          <div class="q-field" style="margin-bottom:9px">
            <label for="${se(V.id)}">${se(V.label)}</label>
            <textarea id="${se(V.id)}" rows="${V.rows||3}" placeholder="\xC9cris ta r\xE9ponse ici...">${se(l.answers[V.id]||"")}</textarea>
          </div>
        `).join("")}
      `,U.querySelectorAll("textarea").forEach(V=>{V.addEventListener("input",()=>{l.answers[V.id]=V.value,d();let q=S.querySelector("#saveStatus");q.textContent="Sauvegard\xE9 \xB7 "+new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),B()})}),B()}X(),P();let H=S.querySelector("#studentNameInput"),F=S.querySelector("#studentClassSelect");H?.addEventListener("input",()=>{l.eleve=H.value,d()}),F?.addEventListener("change",()=>{l.classe=F.value,d()}),S.querySelectorAll("[data-voie]").forEach(U=>{U.addEventListener("click",()=>{l.voie=U.dataset.voie,d(),S.querySelectorAll("[data-voie]").forEach(L=>L.classList.toggle("on",L===U)),X(),P()})}),S.querySelectorAll(".chk-ready").forEach(U=>{U.addEventListener("change",()=>{l.checks[U.dataset.chk]=U.checked,d()})}),S.querySelector("#btnSendProf")?.addEventListener("click",async()=>{let U=(S.querySelector("#studentNameInput")?.value||l.eleve||"").trim(),L=(S.querySelector("#studentClassSelect")?.value||l.classe||"4eme1").trim(),V=b(),q=S.querySelector("#studentEvalBox");if(!U){q.style.display="block",q.innerHTML=`<div class="se-errors"><strong>\u26A0\uFE0F Indique d'abord ton Nom et Pr\xE9nom</strong> dans le champ en haut de l'espace de r\xE9ponse avant d'envoyer ta copie au professeur.</div>`,S.querySelector("#studentNameInput")?.focus();return}if(fs(V)<5){q.style.display="block",q.innerHTML=`<div class="se-errors"><strong>\u26A0\uFE0F R\xE9ponse trop courte pour \xEAtre \xE9valu\xE9e :</strong> r\xE9dige d'abord au moins une phrase compl\xE8te dans ton espace de r\xE9ponse.</div>`,S.querySelector("#fieldsHost textarea")?.focus();return}l.eleve=U,l.classe=L;let k=S.querySelector("#btnSendProf");k&&(k.disabled=!0,k.textContent="\u23F3 Analyse & envoi...");let Q=l.voie==="voie1"?"TACHE_COMPLEXE":"VOIE_GUIDEE",$=vc(V,i,Q),le=l.submissions[l.voie],te=1,O=0,ee=V,ie="",ye=$.relanceTexte;le&&le.t1Text&&le.t1Text!==V?(te=2,ee=le.t1Text,ie=V,ye=le.t1Eval?le.t1Eval.relanceTexte:$.relanceTexte,O=Math.round(($.total-(le.t1Eval?.total??0))*100)/100,l.submissions[l.voie]={t1Text:ee,t1Eval:le.t1Eval,t2Text:ie,lastEval:$}):l.submissions[l.voie]={t1Text:V,t1Eval:$,t2Text:"",lastEval:$},d();let re=xc({eleve:U,classe:L,actId:i,modalite:Q,tentative1Text:ee,tentative2Text:ie,evalObj:$});re.Relance_Systeme=ye,ax(re);let we=Sh(),He=`${i}_${L}_${U}_${Date.now()}`,xe=await ox(we,re,He);C($,V,xe,te,O),k&&(k.disabled=!1,k.textContent=te>=2?"\u{1F4E4} Renvoyer au professeur":"\u{1F4E4} Envoyer au professeur")}),S.querySelectorAll(".go-3d-doc").forEach(U=>U.addEventListener("click",()=>R("3d"))),S.querySelector("#btnGo3dAct").addEventListener("click",()=>R("3d")),S.querySelector("#btnGoCorrAct").addEventListener("click",()=>R("corr"))}let f=null,x=null,m=!1,g=null,E=null;function A(){if(m)return;m=!0;let S=document.getElementById("panel-3d");S.innerHTML=`
      <div class="view3d-layout">
        <aside class="v3d-side">
          <div>
            <h2>Zones utiles pour ${se(e.code)}</h2>
            <p style="margin:3px 0 0;font-size:12px;color:var(--fg-3)">${t.isVisionModel?"Seules les aires visuelles V1 \xE0 V5 sont color\xE9es : clique sur une zone pour voir son r\xF4le et sa l\xE9sion.":"Interface simplifi\xE9e : s\xE9lectionne une \xE9tape pour l'observer en 3D."}</p>
          </div>

          <div class="preset-list" id="presetList">
            ${t.presets3d.map((te,O)=>`
              <button type="button" class="preset-btn ${O===0?"on":""}" data-pidx="${O}">
                <strong>${se(te.label)}</strong>
                <small>${se(te.subtitle)}</small>
              </button>
            `).join("")}
          </div>

          <div class="focus-card" id="focusCard"></div>

          <div>
            <strong style="display:block;font-size:11.5px;color:var(--fg-3);margin-bottom:5px">Contr\xF4les rapides de la cam\xE9ra</strong>
            <div class="cam-strip">
              <button type="button" class="pill" id="camSide">Gauche / Droite</button>
              <button type="button" class="pill" id="camTop">Dessus</button>
              <button type="button" class="pill" id="camDeep">Transparent</button>
              <button type="button" class="pill" id="camReset">Recentrer</button>
              <button type="button" class="pill" id="camShot">\u{1F4F7} Capture</button>
            </div>
          </div>
        </aside>

        <div class="v3d-stage" id="v3dStage">
          <canvas id="stageCanvas" aria-label="Mod\xE8le 3D interactif du cerveau centr\xE9 sur l'activit\xE9 ${se(e.code)}"></canvas>
          ${t.isVisionModel?'<div class="vision-labels" id="visionLabels"></div>':""}
          <div class="stage-tip">
            <span class="stage-pill">Cliquer-glisser : tourner \xB7 Molette : zoomer</span>
            <span class="stage-pill" id="clickFeedback">Survole ou clique une r\xE9gion color\xE9e</span>
          </div>
        </div>
      </div>
      ${t.needsMri?'<div class="mri-wrap" id="mriDock" hidden></div>':""}
    `;let v=S.querySelector("#stageCanvas"),b=document.getElementById("hoverTip"),B=S.querySelector("#clickFeedback"),C=S.querySelector("#mriDock"),P=S.querySelector("#camDeep"),X=S.querySelector("#visionLabels"),H=kc(),F=t.isVisionModel?Oc(H):H,U=t.needsMri&&window.MRI_DATA?Xc():null,L=[];function V(){if(!X||!f?.visionAnchors)return;let te=[{key:"v1",text:"V1",color:"#f5d11d",dark:!0,anchor:"v1"},{key:"v2",text:"V2",color:"#f59e42",dark:!0,anchor:"v2"},{key:"v3",text:"V3 \xB7 Formes",color:"#3898d4",dark:!1,anchor:"v3"},{key:"v4",text:"V4 \xB7 Couleurs",color:"#8cc63f",dark:!0,anchor:"v4"},{key:"v5",text:"V5 \xB7 Mouvement",color:"#e04636",dark:!1,anchor:"v5"},{key:"v4",text:"L\xE9sion Patient A",color:"#e52b20",dark:!1,anchor:"lesionA",lesion:"A"},{key:"v3",text:"L\xE9sion Patient B",color:"#e52b20",dark:!1,anchor:"lesionB",lesion:"B"}];for(let O of te){let ee=f.visionAnchors[O.anchor];if(!ee)continue;let ie=document.createElement("button");ie.type="button",ie.className=`v3d-tag ${O.lesion?"lesion":""}`,ie.style.setProperty("--tag-col",O.color),ie.style.color=O.dark?"#141c28":"#ffffff",ie.textContent=O.text,ie.addEventListener("click",ye=>{ye.stopPropagation(),f.isolate(f.state.isolatedKey===O.key?null:O.key,{key:O.key,lesionId:O.lesion||null,isLesionMarker:!!O.lesion})}),X.appendChild(ie),L.push({...O,pos:ee,btn:ie})}}function q(){if(!L.length||l.tab!=="3d"||!f)return;let te=f.state.hemiMode!=="onlyR"&&f.camera.position.x<=f.centerWorld.x+65,O=v.clientWidth,ee=v.clientHeight,ie=f.state.visionLesions,ye=f.state.isolatedKey;for(let re of L){let we=te;if(re.lesion?we=we&&(ie==="both"||ie===re.lesion):f.state.visionHideAreaColors&&(we=!1),!we){re.btn.hidden=!0;continue}let He=f.projectMniToScreen(re.pos);if(!He.visible||He.x<24||He.x>O-24||He.y<18||He.y>ee-18){re.btn.hidden=!0;continue}re.btn.hidden=!1,re.btn.classList.toggle("on",ye===re.key),re.btn.style.transform=`translate(${Math.round(He.x)}px, ${Math.round(He.y)}px) translate(-50%, -50%)`}}f=new Uo(v,F,U,{onHover(te,O,ee){if(!te||!Jt[te.key]){b.hidden=!0;return}if(t.isVisionModel&&(te.key==="cortex_neutre"||te.key==="cervelet_neutre"||te.key==="tronc_neutre")){b.innerHTML=`<strong>${se(Jt[te.key].name)}</strong><small>Hors aires visuelles \u2014 clique sur V1 \xE0 V5</small>`,b.style.left=`${O}px`,b.style.top=`${ee}px`,b.hidden=!1;return}let ie=Jt[te.key],ye=te.isLesionMarker&&te.name?te.name:ie.name,re=te.isLesionMarker?"Cliquer pour afficher l'image de l\xE9sion":t.targetKeys.includes(te.key)?"Zone cl\xE9 de cette activit\xE9 (cliquer)":"Autre r\xE9gion du cortex";b.innerHTML=`<strong>${se(ye)}</strong><small>${se(re)}</small>`,b.style.left=`${O}px`,b.style.top=`${ee}px`,b.hidden=!1},onSelectStructure(te,O){if(!te||!Jt[te]){B.textContent="Survole ou clique une r\xE9gion color\xE9e",t.isVisionModel&&Q(t.presets3d[l.presetIdx]);return}if(t.isVisionModel&&(te==="cortex_neutre"||te==="cervelet_neutre"||te==="tronc_neutre")){B.textContent="Zone hors vision \u2014 clique sur une aire color\xE9e V1 \xE0 V5",Q(t.presets3d[l.presetIdx]);return}let ee=Jt[te];t.targetKeys.includes(te)?(B.textContent=O?.lesionId?`L\xE9sion Patient ${O.lesionId} \u2192 ${ee.name}`:`S\xE9lection : ${ee.name}`,$(ee,te)):B.textContent=`Zone cliqu\xE9e : ${ee.name} (hors cible principale de ${e.code})`},onStateChange(te){P.classList.toggle("on",!!te.deep),C&&(C.hidden=!te.mriOpen,te.mriOpen&&x&&x.update()),q()},onFrame(){q()}}),t.isVisionModel&&V(),f.setTheme(l.theme);let k=f.renderer.render.bind(f.renderer);f.renderer.render=(te,O)=>{l.tab==="3d"&&k(te,O)},f.resize(),U&&C&&(x=new Vo(C,U,f),C.hidden=!0),g=new ResizeObserver(()=>f?.resize()),g.observe(S.querySelector("#v3dStage"));function Q(te){let O=S.querySelector("#focusCard"),ee=te.action?.isolate,ie=t.isVisionModel&&ee?hs[ee]:null;O.innerHTML=`
        <h3>${se(te.label.replace(/^\d+\.\s*/,""))}</h3>
        <p>${se(te.role)}</p>
        ${ie?`
          <div class="v3d-lesion-box">
            <strong>\u26A0\uFE0F ${se(ie.lesionTitle)}</strong>
            <p>${se(ie.lesionDesc)}</p>
            <img src="${se(ie.img)}" alt="${se(ie.imgCaption)}">
            <small>${se(ie.imgCaption)}</small>
          </div>
        `:""}
        <div class="legend-row">
          ${te.legend.map(ye=>`
            <span class="leg-item"><span class="leg-dot" style="background:${se(ye.color)}"></span>${se(ye.name)}</span>
          `).join("")}
        </div>
      `}function $(te,O){let ee=S.querySelector("#focusCard"),ie=t.isVisionModel?hs[O]:null;if(ie){ee.innerHTML=`
          <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px">
            <h3 style="margin:0">${se(ie.title)}</h3>
            <button type="button" class="qchip" id="btnV3dShowAll">Tout V1\u2013V5</button>
          </div>
          <p><strong>R\xF4le :</strong> ${se(ie.role)}</p>
          <div class="v3d-lesion-box">
            <strong>\u26A0\uFE0F ${se(ie.lesionTitle)}</strong>
            <p>${se(ie.lesionDesc)}</p>
            <img src="${se(ie.img)}" alt="${se(ie.imgCaption)}">
            <small>${se(ie.imgCaption)}</small>
          </div>
          <div class="legend-row" style="margin-top:6px">
            <span class="leg-item"><span class="leg-dot" style="background:${se(ie.color)}"></span>${se(ie.code)}</span>
          </div>
        `,ee.querySelector("#btnV3dShowAll")?.addEventListener("click",()=>le(0));return}ee.innerHTML=`
        <h3>${se(te.name)}</h3>
        <p>${se(te.role||te.desc||"Structure impliqu\xE9e dans cette activit\xE9.")}</p>
        <div class="legend-row">
          <span class="leg-item"><span class="leg-dot" style="background:${se(te.color)}"></span>${se(te.name)}</span>
        </div>
      `}function le(te){l.presetIdx=te;let O=t.presets3d[te];S.querySelectorAll(".preset-btn").forEach((ie,ye)=>ie.classList.toggle("on",ye===te));let ee={...O.action};ee.hemiToggle&&(delete ee.hemiToggle,l.sideIsRight=!l.sideIsRight,ee.view=l.sideIsRight?"lat_R":"lat_L"),f.applyAction({hemiMode:"both",deep:!1,colorMode:"regions",network:0,isolate:null,pathway:null,system:null,clinical:null,lesions:null,hideVisualColors:!1,mri:{open:!1,clip:!1},...ee}),Q(O)}E=le,S.querySelectorAll(".preset-btn").forEach(te=>{te.addEventListener("click",()=>le(Number(te.dataset.pidx)))}),S.querySelector("#camSide").addEventListener("click",()=>{l.sideIsRight=!l.sideIsRight,f.setView(l.sideIsRight?"lat_R":"lat_L")}),S.querySelector("#camTop").addEventListener("click",()=>f.setView("sup")),P.addEventListener("click",()=>f.setDeep(!f.state.deep)),S.querySelector("#camReset").addEventListener("click",()=>le(l.presetIdx)),S.querySelector("#camShot").addEventListener("click",()=>{let te=document.createElement("a");te.href=f.capturePng(),te.download=`cerveau_${e.code.toLowerCase()}.png`,te.click()}),le(0)}function M(){let S=document.getElementById("panel-corr"),v=document.getElementById("tabCorrBtn");if(!l.unlockedData){v.textContent="\u{1F512} 4. Correction",v.classList.remove("unlocked"),S.innerHTML=`
        <div class="lock-card" id="lockCard">
          <div class="lock-icon">\u{1F512}</div>
          <h2>Correction &amp; Bilan verrouill\xE9s</h2>
          <p>R\xE9dige d'abord tes r\xE9ponses dans l'onglet <strong>2. Activit\xE9</strong>, puis saisis le code donn\xE9 par ton professeur pour afficher la correction d\xE9taill\xE9e et le bilan \xE0 retenir.</p>
          <form class="lock-form" id="unlockForm" autocomplete="off">
            <label for="unlockCodeInput" class="sr-only" style="position:absolute;left:-9999px">Code correction</label>
            <input type="password" inputmode="numeric" maxlength="8" id="unlockCodeInput" placeholder="Code..." aria-label="Code de d\xE9verrouillage correction">
            <button type="submit" class="btn-primary">D\xE9verrouiller</button>
          </form>
          <div class="lock-err" id="lockErr" role="alert"></div>
        </div>
      `;let H=S.querySelector("#unlockForm"),F=S.querySelector("#unlockCodeInput"),U=S.querySelector("#lockErr"),L=S.querySelector("#lockCard");H.addEventListener("submit",V=>{V.preventDefault();let q=F.value.trim();if(q!==ix){U.textContent="Code incorrect \u2014 demande le code au professeur.",L.classList.remove("shake"),L.offsetWidth,L.classList.add("shake"),F.select();return}try{l.unlockedData=lx(n,q),M()}catch{U.textContent="Erreur de d\xE9verrouillage."}});return}v.textContent="\u{1F513} 4. Correction",v.classList.add("unlocked");let b=l.unlockedData,B=b.prof,C=e.voie2.fields,P=e.voie1.fields[0],X=(l.answers[P.id]||"").trim();S.innerHTML=`
      <div class="corr-wrap">
        <div class="corr-banner">
          <div>
            <strong>\u{1F513} Correction d\xE9verrouill\xE9e (${se(e.code)})</strong>
            <span style="display:block;font-size:12.5px;color:var(--fg-2)">Compare chaque r\xE9ponse attendue avec ton brouillon puis recopie le bilan \xE0 retenir.</span>
          </div>
          <button type="button" class="btn-ghost" id="btnRelock">\u{1F512} Verrouiller</button>
        </div>

        <article class="bilan-card">
          <h3>Bilan \xE0 retenir (\xAB Je retiens \xBB)</h3>
          <p style="margin:0;font-size:14.5px;line-height:1.58">${se(b.traceEcrite)}</p>
          <p style="margin:8px 0 0;font-size:12.5px;color:var(--fg-2)"><strong>Esprit scientifique :</strong> ${se(b.fds)}</p>
          <div class="notions-row">
            ${b.notions.map(H=>`<span>${se(H)}</span>`).join("")}
          </div>
        </article>

        <div>
          <h3 class="sec-title">Questions corrig\xE9es (${se(e.code)})</h3>
          <div class="corr-list">
            ${B.corrige.map((H,F)=>{let U=C[F],L=U?(l.answers[U.id]||"").trim():"";return`
                <div class="corr-qcard">
                  <div><strong>${se(H.split(":")[0])} :</strong> ${se(H.split(":").slice(1).join(":").trim())}</div>
                  ${L?`<div class="corr-my"><strong>Ta r\xE9ponse (${se(U.id.toUpperCase())}) :</strong> ${se(L)}</div>`:""}
                </div>
              `}).join("")}
            ${X?`
              <div class="corr-qcard">
                <strong>Ta synth\xE8se (T\xE2che complexe) :</strong>
                <div class="corr-my">${se(X)}</div>
              </div>
            `:""}
          </div>
        </div>

        <div class="corr-grid2">
          <div class="corr-qcard">
            <h4 style="margin:0 0 6px;color:var(--warn)">Erreurs fr\xE9quentes \xE0 \xE9viter</h4>
            <ul style="margin:0;padding-left:18px;font-size:13px">
              ${B.erreursFrequentes.map(H=>`<li>${se(H)}</li>`).join("")}
            </ul>
          </div>
          <div class="corr-qcard">
            <h4 style="margin:0 0 6px">Bar\xE8me &amp; rep\xE8res de r\xE9ussite</h4>
            <p style="margin:0 0 6px;font-size:12.5px;font-weight:600">${se(B.bareme)}</p>
            <ul style="margin:0;padding-left:18px;font-size:12px;color:var(--fg-2)">
              <li><strong>MI :</strong> ${se(B.lsu.MI)}</li>
              <li><strong>MF :</strong> ${se(B.lsu.MF)}</li>
              <li><strong>MS :</strong> ${se(B.lsu.MS)}</li>
              <li><strong>TBM :</strong> ${se(B.lsu.TBM)}</li>
            </ul>
          </div>
        </div>
      </div>
    `,S.querySelector("#btnRelock").addEventListener("click",()=>{l.unlockedData=null,M()})}function R(S){l.tab=S,document.querySelectorAll(".mtab").forEach(v=>{let b=v.dataset.tab===S;v.classList.toggle("active",b),v.setAttribute("aria-selected",b?"true":"false")}),document.querySelectorAll(".panel").forEach(v=>{v.classList.toggle("active",v.id===`panel-${S}`)}),S==="3d"&&(A(),requestAnimationFrame(()=>f?.resize()))}document.querySelectorAll(".mtab").forEach(S=>{S.addEventListener("click",()=>R(S.dataset.tab))}),document.getElementById("btnTheme").addEventListener("click",S=>{l.theme=l.theme==="dark"?"light":"dark",document.documentElement.setAttribute("data-theme",l.theme),S.currentTarget.textContent=l.theme==="dark"?"\u2600\uFE0F Clair":"\u{1F319} Sombre",f?.setTheme(l.theme),d()}),document.getElementById("btnPrint").addEventListener("click",()=>{let S=document.getElementById("printSheet"),v=e[l.voie].fields,b="";l.unlockedData&&(b=`
        <div class="ps-pb" style="border-left-color:#1d9a6c;background:#effaf5;margin-top:10pt">
          <strong>Bilan \xE0 retenir :</strong> ${se(l.unlockedData.traceEcrite)}
        </div>
      `),S.innerHTML=`
      <div class="ps-head">
        <span>SVT Cycle 4 \xB7 ${se(e.code)} (${se(e.niveau)}) \xB7 Nom / Pr\xE9nom : _________________________</span>
        <span>${new Date().toLocaleDateString("fr-FR")}</span>
      </div>
      <h1 class="ps-title">${se(e.titre)}</h1>
      <div class="ps-pb"><strong>Probl\xE9matique :</strong> ${se(e.problematique)}</div>
      ${v.map(B=>`
        <div class="ps-ans">
          <strong>${se(B.label)}</strong>
          <div>${se(l.answers[B.id]||"").replaceAll(`
`,"<br>")||'<span style="color:#94a3b8">(R\xE9ponse manuscrite ou \xE0 compl\xE9ter)</span>'}</div>
        </div>
      `).join("")}
      ${b}
    `,window.print()}),u(),h(),M()}var ft={overlaysReady:!1,activeEl:null,lightboxOpen:!1,zoom:100};function ux(i){function e(){document.querySelectorAll("[data-fs-card]").forEach(f=>{let x=f.closest(".doc-card"),m=!!(x&&x.classList.contains("is-fs-active"));f.textContent=m?"\u2715 Quitter le plein \xE9cran":"\u26F6 Plein \xE9cran"}),document.querySelectorAll("[data-fs-fold]").forEach(f=>{let x=f.closest(".doc-fold"),m=!!(x&&x.classList.contains("is-fs-active"));f.textContent=m?"\u2715 Quitter":"\u26F6 Plein \xE9cran"});let u=document.getElementById("btnAllDocsFs"),h=document.querySelector("#panel-act .act-docs");if(u&&h){let f=h.classList.contains("is-fs-active");u.textContent=f?"\u2715 Quitter le plein \xE9cran":"\u26F6 Documents en plein \xE9cran"}}function t(){ft.activeEl&&(ft.activeEl.classList.remove("is-fs-active"),ft.activeEl=null);let u=document.getElementById("docFsBackdrop"),h=document.getElementById("docFsToolbar");if(u&&(u.hidden=!0),h&&(h.hidden=!0),ft.lightboxOpen||(document.body.style.overflow=""),document.fullscreenElement&&!ft.lightboxOpen)try{document.exitFullscreen().catch(()=>{})}catch{}e()}function n(u,h){if(!u)return;if(ft.activeEl===u){t();return}ft.activeEl&&ft.activeEl.classList.remove("is-fs-active"),c(),ft.activeEl=u,u.classList.add("is-fs-active");let f=document.getElementById("docFsBackdrop"),x=document.getElementById("docFsToolbar"),m=document.getElementById("docFsTitle");m&&(m.textContent=`\u{1F4C4} ${String(h||"Document p\xE9dagogique").trim()}`),f&&(f.hidden=!1),x&&(x.hidden=!1),document.body.style.overflow="hidden",e()}function s(u){ft.zoom=Math.max(60,Math.min(250,u));let h=document.getElementById("docImgLightboxTarget"),f=document.getElementById("lbZoomPct");h&&(h.style.setProperty("--img-zoom",String(ft.zoom)),h.classList.toggle("custom-zoom",ft.zoom!==100)),f&&(f.textContent=`${ft.zoom}%`)}function r(){let u=document.getElementById("docImgLightbox");if(u&&(u.hidden=!0),ft.lightboxOpen=!1,!ft.activeEl&&(document.body.style.overflow="",document.fullscreenElement))try{document.exitFullscreen().catch(()=>{})}catch{}}function a(u){if(!u||!u.getAttribute("src"))return;c();let h=document.getElementById("docImgLightbox"),f=document.getElementById("docImgLightboxTarget"),x=document.getElementById("docImgLightboxCap"),m=document.getElementById("lbImgTitle"),E=u.closest("figure, .vzd-media-row, .prob-media")?.querySelector("figcaption, .vzd-cap, .prob-caption")?.textContent?.trim()||u.alt||"";f&&(f.src=u.src,f.alt=u.alt||"Document SVT"),x&&(x.textContent=E,x.style.display=E?"block":"none"),m&&(m.textContent=`\u{1F50D} ${u.alt||"Document en plein \xE9cran"}`),ft.lightboxOpen=!0,s(100),h&&(h.hidden=!1),document.body.style.overflow="hidden"}function o(){try{document.fullscreenElement?document.exitFullscreen()?.catch(()=>{}):document.documentElement.requestFullscreen()?.catch(()=>{})}catch{}}function c(){if(ft.overlaysReady)return;ft.overlaysReady=!0;let u=document.createElement("div");u.id="docFsBackdrop",u.hidden=!0;let h=document.createElement("div");h.id="docFsToolbar",h.hidden=!0,h.innerHTML=`
      <span id="docFsTitle">\u{1F4C4} Document p\xE9dagogique</span>
      <div class="doc-fs-toolbar-actions">
        <button type="button" class="btn-doc-fs" id="btnDocNativeFs">\u26F6 Plein \xE9cran navigateur</button>
        <button type="button" class="btn-doc-fs primary" id="btnDocFsClose">\u2715 Quitter le plein \xE9cran (\xC9chap)</button>
      </div>
    `;let f=document.createElement("div");f.id="docImgLightbox",f.hidden=!0,f.setAttribute("role","dialog"),f.setAttribute("aria-modal","true"),f.innerHTML=`
      <div class="lb-toolbar">
        <span class="lb-title" id="lbImgTitle">\u{1F50D} Document en plein \xE9cran</span>
        <div class="lb-controls">
          <button type="button" class="btn-doc-fs" id="btnLbZoomOut" title="Zoom arri\xE8re">\u{1F50D} -</button>
          <button type="button" class="btn-doc-fs" id="btnLbZoomReset" title="Taille d'origine"><span id="lbZoomPct">100%</span></button>
          <button type="button" class="btn-doc-fs" id="btnLbZoomIn" title="Zoom avant">\u{1F50D} +</button>
          <button type="button" class="btn-doc-fs" id="btnLbNativeFs" title="Plein \xE9cran navigateur">\u26F6</button>
          <button type="button" class="btn-doc-fs primary" id="btnLbClose">\u2715 Fermer (\xC9chap)</button>
        </div>
      </div>
      <div class="lb-stage" id="lbStage">
        <img id="docImgLightboxTarget" src="" alt="">
        <div id="docImgLightboxCap"></div>
      </div>
    `,document.body.append(u,h,f),u.addEventListener("click",t),h.querySelector("#btnDocFsClose").addEventListener("click",t),h.querySelector("#btnDocNativeFs").addEventListener("click",o),f.querySelector("#btnLbClose").addEventListener("click",r),f.querySelector("#btnLbZoomOut").addEventListener("click",()=>s(ft.zoom-25)),f.querySelector("#btnLbZoomIn").addEventListener("click",()=>s(ft.zoom+25)),f.querySelector("#btnLbZoomReset").addEventListener("click",()=>s(100)),f.querySelector("#btnLbNativeFs").addEventListener("click",o),f.querySelector("#lbStage").addEventListener("click",x=>{x.target.id==="lbStage"&&r()}),document.addEventListener("keydown",x=>{x.key==="Escape"&&(ft.lightboxOpen?r():ft.activeEl&&t())}),document.getElementById("panel-pb")?.addEventListener("click",x=>{let m=x.target.closest("[data-fs-img-btn]");if(m){x.preventDefault(),x.stopPropagation();let g=m.closest(".prob-media")?.querySelector("img");g&&a(g);return}x.target.tagName==="IMG"&&x.target.closest(".prob-media")&&a(x.target)})}let l=!1;function d(){if(!l){l=!0;try{i.querySelectorAll("#visualsMount .doc-card").forEach(u=>{if(!u.querySelector(".btn-doc-fs-card")){let h=document.createElement("button");h.type="button",h.className="btn-doc-fs btn-doc-fs-card",h.dataset.fsCard="1",h.title="Afficher ce document / simulateur en plein \xE9cran",h.textContent=u.classList.contains("is-fs-active")?"\u2715 Quitter le plein \xE9cran":"\u26F6 Plein \xE9cran";let f=u.querySelector(".doc-head");f?f.appendChild(h):u.prepend(h)}}),document.querySelectorAll(".act-docs .vision-orig-fig, .act-docs .vzd-media-row, #panel-pb .prob-media").forEach(u=>{if(u.querySelector("img")&&!u.querySelector(".img-zoom-badge")){let h=document.createElement("button");h.type="button",h.className="img-zoom-badge",h.dataset.fsImgBtn="1",h.title="Agrandir cette image en plein \xE9cran",h.textContent="\u{1F50D} Plein \xE9cran",u.appendChild(h)}}),e()}finally{l=!1}}}c(),d();let p=i.querySelector("#visualsMount");p&&!p.dataset.fsObserved&&(p.dataset.fsObserved="1",new MutationObserver(()=>d()).observe(p,{childList:!0,subtree:!0})),i.addEventListener("click",u=>{let h=u.target.closest("[data-fs-card]");if(h){u.preventDefault(),u.stopPropagation();let g=h.closest(".doc-card"),E=g?.querySelector("h3")?.textContent||"Document interactif";n(g,E);return}if(u.target.closest("#btnAllDocsFs")){u.preventDefault(),u.stopPropagation(),n(i.querySelector(".act-docs"),"Documents de l\u2019activit\xE9");return}let x=u.target.closest("[data-fs-fold]");if(x){u.preventDefault(),u.stopPropagation();let g=x.closest(".doc-fold");if(g){g.open=!0;let E=g.querySelector("summary strong")?.textContent||"Document";n(g,E)}return}let m=u.target.closest("[data-fs-img-btn]");if(m){u.preventDefault(),u.stopPropagation();let g=m.closest("figure, .vzd-media-row")?.querySelector("img");g&&a(g);return}u.target.tagName==="IMG"&&u.target.closest(".act-docs")&&a(u.target)})}cx()});dx();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
