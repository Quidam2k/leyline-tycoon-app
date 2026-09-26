var Uu=Object.defineProperty;var Fu=(i,t,e)=>t in i?Uu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Jt=(i,t,e)=>Fu(i,typeof t!="symbol"?t+"":t,e);import{g as Hl,m as ii}from"./index-BU0UOM8q.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="186",Ou=0,Vl=1,Bu=2,Hr=1,zu=2,Is=3,Ri=0,nn=1,hn=2,Zn=0,Ti=1,Bs=2,Wl=3,Xl=4,ku=5,ji=100,Gu=101,Hu=102,Vu=103,Wu=104,Xu=200,qu=201,Yu=202,$u=203,Nh=204,Uh=205,Ku=206,Zu=207,Ju=208,Qu=209,ju=210,td=211,ed=212,nd=213,id=214,vo=0,xo=1,Mo=2,zs=3,So=4,yo=5,wo=6,Eo=7,Fh=0,sd=1,rd=2,Un=0,Oh=1,Bh=2,zh=3,kh=4,Gh=5,Hh=6,Vh=7,Wh=300,Ci=301,rs=302,ha=303,ua=304,aa=306,bo=1e3,$n=1001,To=1002,He=1003,ad=1004,js=1005,Ve=1006,da=1007,Ei=1008,un=1009,Xh=1010,qh=1011,ks=1012,dl=1013,Fn=1014,Tn=1015,On=1016,fl=1017,pl=1018,Gs=1020,Yh=35902,$h=35899,Kh=1021,Zh=1022,An=1023,Qn=1026,bi=1027,ml=1028,gl=1029,Pi=1030,_l=1031,vl=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Ao=35840,Ro=35841,Co=35842,Po=35843,Lo=36196,Io=37492,Do=37496,No=37488,Uo=37489,Kr=37490,Fo=37491,Oo=37808,Bo=37809,zo=37810,ko=37811,Go=37812,Ho=37813,Vo=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,$o=37819,Ko=37820,Zo=37821,Jo=36492,Qo=36494,jo=36495,tl=36283,el=36284,Zr=36285,nl=36286,od=3200,il=0,ld=1,ui="",cn="srgb",Jr="srgb-linear",Qr="linear",Te="srgb",fa=7680,cd=519,hd=512,ud=513,dd=514,xl=515,fd=516,pd=517,Ml=518,md=519,gd=35044,Ai=35048,ql="300 es",Nn=2e3,Hs=2001;function _d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vd(){const i=jr("canvas");return i.style.display="block",i}const Yl={};function $l(...i){const t="THREE."+i.shift();console.log(t,...i)}function Jh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function te(...i){i=Jh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Se(...i){i=Jh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function is(...i){const t=i.join(" ");t in Yl||(Yl[t]=!0,te(...i))}function xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Md={[vo]:xo,[Mo]:wo,[So]:Eo,[zs]:yo,[xo]:vo,[wo]:Mo,[Eo]:So,[yo]:zs};class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,sl=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function Sd(i,t){return(i%t+t)%t}function ma(i,t,e){return(1-e)*i+e*t}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ul=class Ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ul.prototype.isVector2=!0;let vt=Ul;class Bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*S;m<0&&(h=-h,d=-d,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+S*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+S*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fl=class Fl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fl.prototype.isVector3=!0;let I=Fl;const ga=new I,Kl=new Bn,Ol=class Ol{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],S=s[0],m=s[3],p=s[6],y=s[1],T=s[4],v=s[7],E=s[2],w=s[5],P=s[8];return r[0]=a*S+o*y+l*E,r[3]=a*m+o*T+l*w,r[6]=a*p+o*v+l*P,r[1]=c*S+u*y+f*E,r[4]=c*m+u*T+f*w,r[7]=c*p+u*v+f*P,r[2]=h*S+d*y+g*E,r[5]=h*m+d*T+g*w,r[8]=h*p+d*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=f*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_a.makeScale(t,e)),this}rotate(t){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ol.prototype.isMatrix3=!0;let se=Ol;const _a=new se,Zl=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yd(){const i={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Te&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Te&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jr]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const ge=yd();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=jr("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ed=0;class Sl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let bd=0;const xa=new I;class Ke extends Ii{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=$n,s=$n,r=Ve,a=Ei,o=An,l=un,c=Ke.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=cs(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Wh;Ke.DEFAULT_ANISOTROPY=1;const Bl=class Bl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,v=(d+1)/2,E=(p+1)/2,w=(u+h)/4,P=(f+S)/4,x=(g+m)/4;return T>v&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=P/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=P/r,s=x/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bl.prototype.isVector4=!0;let Le=Bl;class Td extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ra=class ra{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,S,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,g=o*u,S=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,S=c*f;e[0]=h+S*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,S=c*f;e[0]=h-S*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,g=o*u,S=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+S,e[1]=l*f,e[5]=S*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=S-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-S*f}else if(t.order==="XZY"){const h=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+S,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),si.crossVectors(n,an),si.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),si.crossVectors(n,an)),si.normalize(),tr.crossVectors(an,si),s[0]=si.x,s[4]=tr.x,s[8]=an.x,s[1]=si.y,s[5]=tr.y,s[9]=an.y,s[2]=si.z,s[6]=tr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],S=n[6],m=n[10],p=n[14],y=n[3],T=n[7],v=n[11],E=n[15],w=s[0],P=s[4],x=s[8],b=s[12],L=s[1],U=s[5],H=s[9],Y=s[13],F=s[2],X=s[6],$=s[10],K=s[14],ht=s[3],J=s[7],rt=s[11],at=s[15];return r[0]=a*w+o*L+l*F+c*ht,r[4]=a*P+o*U+l*X+c*J,r[8]=a*x+o*H+l*$+c*rt,r[12]=a*b+o*Y+l*K+c*at,r[1]=u*w+f*L+h*F+d*ht,r[5]=u*P+f*U+h*X+d*J,r[9]=u*x+f*H+h*$+d*rt,r[13]=u*b+f*Y+h*K+d*at,r[2]=g*w+S*L+m*F+p*ht,r[6]=g*P+S*U+m*X+p*J,r[10]=g*x+S*H+m*$+p*rt,r[14]=g*b+S*Y+m*K+p*at,r[3]=y*w+T*L+v*F+E*ht,r[7]=y*P+T*U+v*X+E*J,r[11]=y*x+T*H+v*$+E*rt,r[15]=y*b+T*Y+v*K+E*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],S=t[7],m=t[11],p=t[15],y=l*d-c*h,T=o*d-c*f,v=o*h-l*f,E=a*d-c*u,w=a*h-l*u,P=a*f-o*u;return e*(S*y-m*T+p*v)-n*(g*y-m*E+p*w)+s*(g*T-S*E+p*P)-r*(g*v-S*w+m*P)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],S=t[13],m=t[14],p=t[15],y=e*o-n*a,T=e*l-s*a,v=e*c-r*a,E=n*l-s*o,w=n*c-r*o,P=s*c-r*l,x=u*S-f*g,b=u*m-h*g,L=u*p-d*g,U=f*m-h*S,H=f*p-d*S,Y=h*p-d*m,F=y*Y-T*H+v*U+E*L-w*b+P*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/F;return t[0]=(o*Y-l*H+c*U)*X,t[1]=(s*H-n*Y-r*U)*X,t[2]=(S*P-m*w+p*E)*X,t[3]=(h*w-f*P-d*E)*X,t[4]=(l*L-a*Y-c*b)*X,t[5]=(e*Y-s*L+r*b)*X,t[6]=(m*v-g*P-p*T)*X,t[7]=(u*P-h*v+d*T)*X,t[8]=(a*H-o*L+c*x)*X,t[9]=(n*L-e*H-r*x)*X,t[10]=(g*w-S*v+p*y)*X,t[11]=(f*v-u*w-d*y)*X,t[12]=(o*b-a*U-l*x)*X,t[13]=(e*U-n*b+s*x)*X,t[14]=(S*T-g*E-m*y)*X,t[15]=(u*E-f*T+h*y)*X,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,S=a*u,m=a*f,p=o*f,y=l*c,T=l*u,v=l*f,E=n.x,w=n.y,P=n.z;return s[0]=(1-(S+p))*E,s[1]=(d+v)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(h+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+T)*P,s[9]=(m-y)*P,s[10]=(1-(h+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),l=Bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);const c=1/a,u=1/o,f=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Nn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===Nn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ra.prototype.isMatrix4=!0;let _e=ra;const Bi=new I,Mn=new _e,Rd=new I(0,0,0),Cd=new I(1,1,1),si=new I,tr=new I,an=new I,Ql=new _e,jl=new Bn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pd=0;const tc=new I,zi=new Bn,Hn=new _e,er=new I,vs=new I,Ld=new I,Id=new Bn,ec=new I(1,0,0),nc=new I(0,1,0),ic=new I(0,0,1),sc={type:"added"},Dd={type:"removed"},ki={type:"childadded",child:null},Ma={type:"childremoved",child:null};class We extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new I,e=new gn,n=new Bn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new se}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(vs,er,this.up):Hn.lookAt(er,vs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Hn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),ki.child=t,this.dispatchEvent(ki),ki.child=null):Se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}We.DEFAULT_UP=new I(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ts extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nd={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},nr={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Sd(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ya(a,r,t+1/3),this.g=ya(a,r,t),this.b=ya(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ge.workingToColorSpace($e.copy(this),t),Math.round(pe($e.r*255,0,255))*65536+Math.round(pe($e.g*255,0,255))*256+Math.round(pe($e.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=cn){ge.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(nr);const n=ma(ri.h,nr.h,e),s=ma(ri.s,nr.s,e),r=ma(ri.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Xt;Xt.NAMES=tu;class Ud extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Sn=new I,Vn=new I,wa=new I,Wn=new I,Gi=new I,Hi=new I,rc=new I,Ea=new I,ba=new I,Ta=new I,Aa=new Le,Ra=new Le,Ca=new Le;class bn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Vn.subVectors(n,e),wa.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(Vn),l=Sn.dot(wa),c=Vn.dot(Vn),u=Vn.dot(wa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Aa,r.x),a.addScaledVector(Ra,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Vn.subVectors(t,e),Sn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Hi.subVectors(r,n),Ea.subVectors(t,n);const l=Gi.dot(Ea),c=Hi.dot(Ea);if(l<=0&&c<=0)return e.copy(n);ba.subVectors(t,s);const u=Gi.dot(ba),f=Hi.dot(ba);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gi,a);Ta.subVectors(t,r);const d=Gi.dot(Ta),g=Hi.dot(Ta);if(g>=0&&d<=g)return e.copy(r);const S=d*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Hi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return rc.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(rc,o);const p=1/(m+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(Gi,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Di{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),sr.subVectors(this.max,xs),Vi.subVectors(t.a,xs),Wi.subVectors(t.b,xs),Xi.subVectors(t.c,xs),ai.subVectors(Wi,Vi),oi.subVectors(Xi,Wi),gi.subVectors(Vi,Xi);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-gi.z,gi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,gi.z,0,-gi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-gi.y,gi.x,0];return!Pa(e,Vi,Wi,Xi,sr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Vi,Wi,Xi,sr))?!1:(rr.crossVectors(ai,oi),e=[rr.x,rr.y,rr.z],Pa(e,Vi,Wi,Xi,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,ir=new Di,Vi=new I,Wi=new I,Xi=new I,ai=new I,oi=new I,gi=new I,xs=new I,sr=new I,rr=new I,_i=new I;function Pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const De=new I,ar=new vt;let Fd=0;class Qe extends Ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gd,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class eu extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nu extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Od=new Di,Ms=new I,La=new I;class $s{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(La)),this.expandByPoint(Ms.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Bd=0;const pn=new _e,Ia=new We,qi=new I,on=new Di,Ss=new Di,Ge=new I;class Be extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?nu:eu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(on.min,Ss.min),on.expandByPoint(Ge),Ge.addVectors(on.max,Ss.max),on.expandByPoint(Ge)):(on.expandByPoint(Ss.min),on.expandByPoint(Ss.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ge.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Ge.add(qi)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;const c=new I,u=new I,f=new I,h=new vt,d=new vt,g=new vt,S=new I,m=new I;function p(x,b,L){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,L),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),o[x].add(S),o[b].add(S),o[L].add(S),l[x].add(m),l[b].add(m),l[L].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,b=y.length;x<b;++x){const L=y[x],U=L.start,H=L.count;for(let Y=U,F=U+H;Y<F;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const T=new I,v=new I,E=new I,w=new I;function P(x){E.fromBufferAttribute(s,x),w.copy(E);const b=o[x];T.copy(b),T.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(w,b);const U=v.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,U)}for(let x=0,b=y.length;x<b;++x){const L=y[x],U=L.start,H=L.count;for(let Y=U,F=U+H;Y<F;Y+=3)P(t.getX(Y+0)),P(t.getX(Y+1)),P(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Qe(h,u,f)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new I,zd=new I,kd=new se;class ci{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Da.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Da),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kd.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Gd=0;class Ks extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Ti,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const qn=new I,Na=new I,or=new I,lr=new I;class Hd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=lr.dot(this.direction),l=-lr.dot(or),c=lr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Na).addScaledVector(or,h),d}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,v=Math.abs(l),E=Math.abs(c),w=Math.abs(u);let P,x,b,L,U,H,Y,F,X,$,K,ht;if(v>=E&&v>=w?(b=l,H=f,X=g,ht=p,l>=0?(P=c,x=u,L=h,U=d,Y=S,F=m,$=y,K=T):(P=u,x=c,L=d,U=h,Y=m,F=S,$=T,K=y)):E>=w?(b=c,H=h,X=S,ht=y,c>=0?(P=u,x=l,L=d,U=f,Y=m,F=g,$=T,K=p):(P=l,x=u,L=f,U=d,Y=g,F=m,$=p,K=T)):(b=u,H=d,X=m,ht=T,u>=0?(P=l,x=c,L=f,U=h,Y=g,F=S,$=p,K=y):(P=c,x=l,L=h,U=f,Y=S,F=g,$=y,K=p)),b===0)return null;const J=P/b,rt=x/b,at=1/b,Ft=L-J*H,Ot=U-rt*H,xe=Y-J*X,re=F-rt*X,oe=$-J*ht,Z=K-rt*ht,it=oe*re-Z*xe,Rt=Ft*Z-Ot*oe,Yt=xe*Ot-re*Ft;if(s){if(it<0||Rt<0||Yt<0)return null}else if((it<0||Rt<0||Yt<0)&&(it>0||Rt>0||Yt>0))return null;const Nt=it+Rt+Yt;if(Nt===0)return null;const qt=at*(it*H+Rt*X+Yt*ht);return(Nt>0?qt<0:qt>0)?null:this.at(qt/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ta extends Ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ac=new _e,vi=new Hd,cr=new $s,oc=new I,hr=new I,ur=new I,dr=new I,Ua=new I,fr=new I,lc=new I,pr=new I;class dn extends We{constructor(t=new Be,e=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ua.fromBufferAttribute(f,t),a?fr.addScaledVector(Ua,u):fr.addScaledVector(Ua.sub(e),u))}e.add(fr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(cr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(cr,oc)===null||vi.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(ac.copy(r).invert(),vi.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=T;v<E;v+=3){const w=o.getX(v),P=o.getX(v+1),x=o.getX(v+2);s=mr(this,p,t,n,c,u,f,w,P,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const y=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=mr(this,a,t,n,c,u,f,y,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=T;v<E;v+=3){const w=v,P=v+1,x=v+2;s=mr(this,p,t,n,c,u,f,w,P,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const y=m,T=m+1,v=m+2;s=mr(this,a,t,n,c,u,f,y,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Vd(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ri,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,dr);const u=Vd(i,t,e,n,hr,ur,dr,lc);if(u){const f=new I;bn.getBarycoord(lc,hr,ur,dr,f),s&&(u.uv=bn.getInterpolatedAttribute(s,o,l,c,f,new vt)),r&&(u.uv1=bn.getInterpolatedAttribute(r,o,l,c,f,new vt)),a&&(u.normal=bn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};bn.getNormal(hr,ur,dr,h.normal),u.face=h,u.barycoord=f}return u}class iu extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=He,u=He,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new _e,cc=new _e,gr=[],hc=new Di,Wd=new _e,ys=new dn,ws=new $s;class ea extends dn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),hc.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(hc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),ws.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),cc.multiplyMatrices(n,Yi),ys.matrixWorld=cc,ys.raycast(t,gr);for(let a=0,o=gr.length;a<o;a++){const l=gr[a];l.instanceId=r,l.object=this,e.push(l)}gr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new iu(new Float32Array(s*this.count),s,this.count,ml,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xi=new $s,Xd=new vt(.5,.5),_r=new I;class yl{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],S=r[9],m=r[10],p=r[11],y=r[12],T=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,d-u,p-g,E-y).normalize(),s[1].setComponents(c+a,d+u,p+g,E+y).normalize(),s[2].setComponents(c+o,d+f,p+S,E+T).normalize(),s[3].setComponents(c-o,d-f,p-S,E-T).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,d-h,p-m,E-v).normalize();else if(s[4].setComponents(c-l,d-h,p-m,E-v).normalize(),e===Nn)s[5].setComponents(c+l,d+h,p+m,E+v).normalize();else if(e===Hs)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=Xd.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends Ke{constructor(t=[],e=Ci,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ws extends Ke{constructor(t,e,n=Fn,s,r,a,o=He,l=He,c,u=Qn,f=1){if(u!==Qn&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Yd extends Ws{constructor(t,e=Fn,n=Ci,s,r,a=He,o=He,l,c=Qn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ru extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class et extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function g(S,m,p,y,T,v,E,w,P,x,b){const L=v/P,U=E/x,H=v/2,Y=E/2,F=w/2,X=P+1,$=x+1;let K=0,ht=0;const J=new I;for(let rt=0;rt<$;rt++){const at=rt*U-Y;for(let Ft=0;Ft<X;Ft++){const Ot=Ft*L-H;J[S]=Ot*y,J[m]=at*T,J[p]=F,c.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),f.push(Ft/P),f.push(1-rt/x),K+=1}}for(let rt=0;rt<x;rt++)for(let at=0;at<P;at++){const Ft=h+at+X*rt,Ot=h+at+X*(rt+1),xe=h+(at+1)+X*(rt+1),re=h+(at+1)+X*rt;l.push(Ft,Ot,re),l.push(Ot,xe,re),ht+=6}o.addGroup(d,ht,b),d+=ht,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class St extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const S=[],m=n/2;let p=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2));function y(){const v=new I,E=new I;let w=0;const P=(e-t)/n;for(let x=0;x<=r;x++){const b=[],L=x/r,U=L*(e-t)+t;for(let H=0;H<=s;H++){const Y=H/s,F=Y*l+o,X=Math.sin(F),$=Math.cos(F);E.x=U*X,E.y=-L*n+m,E.z=U*$,f.push(E.x,E.y,E.z),v.set(X,P,$).normalize(),h.push(v.x,v.y,v.z),d.push(Y,1-L),b.push(g++)}S.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){const L=S[b][x],U=S[b+1][x],H=S[b+1][x+1],Y=S[b][x+1];(t>0||b!==0)&&(u.push(L,U,Y),w+=3),(e>0||b!==r-1)&&(u.push(U,H,Y),w+=3)}c.addGroup(p,w,0),p+=w}function T(v){const E=g,w=new vt,P=new I;let x=0;const b=v===!0?t:e,L=v===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*L,0),h.push(0,L,0),d.push(.5,.5),g++;const U=g;for(let H=0;H<=s;H++){const F=H/s*l+o,X=Math.cos(F),$=Math.sin(F);P.x=b*$,P.y=m*L,P.z=b*X,f.push(P.x,P.y,P.z),h.push(0,L,0),w.x=X*.5+.5,w.y=$*.5*L+.5,d.push(w.x,w.y),g++}for(let H=0;H<s;H++){const Y=E+H,F=U+H;v===!0?u.push(F,F+1,Y):u.push(F+1,F,Y),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends St{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Re(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hs extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new I,v=new I,E=new I;for(let w=0;w<e.length;w+=3)d(e[w+0],T),d(e[w+1],v),d(e[w+2],E),l(T,v,E,y)}function l(y,T,v,E){const w=E+1,P=[];for(let x=0;x<=w;x++){P[x]=[];const b=y.clone().lerp(v,x/w),L=T.clone().lerp(v,x/w),U=w-x;for(let H=0;H<=U;H++)H===0&&x===w?P[x][H]=b:P[x][H]=b.clone().lerp(L,H/U)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){const L=Math.floor(b/2);b%2===0?(h(P[x][L+1]),h(P[x+1][L]),h(P[x][L])):(h(P[x][L+1]),h(P[x+1][L+1]),h(P[x+1][L]))}}function c(y){const T=new I;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(y),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function u(){const y=new I;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const v=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(v,1-E)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const T=a[y+0],v=a[y+2],E=a[y+4],w=Math.max(T,v,E),P=Math.min(T,v,E);w>.9&&P<.1&&(T<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,T){const v=y*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function g(){const y=new I,T=new I,v=new I,E=new I,w=new vt,P=new vt,x=new vt;for(let b=0,L=0;b<r.length;b+=9,L+=6){y.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),E.copy(y).add(T).add(v).divideScalar(3);const U=m(E);S(w,L+0,y,U),S(P,L+2,T,U),S(x,L+4,v,U)}}function S(y,T,v,E){E<0&&y.x===1&&(a[T]=y.x-1),v.x===0&&v.z===0&&(a[T]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.vertices,t.indices,t.radius,t.detail)}}class jn extends hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jn(t.radius,t.detail)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new _e;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wl extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $d extends wl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function El(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const uc=new I,dc=new I,Fa=new El,Oa=new El,Ba=new El;class Kd extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(dc.subVectors(s[0],s[1]).add(s[0]),c=dc);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Fa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,S,m),Oa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,S,m),Ba.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Oa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ba.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Fa.calc(l),Oa.calc(l),Ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zd(i,t){const e=1-i;return e*e*t}function Jd(i,t){return 2*(1-i)*i*t}function Qd(i,t){return i*i*t}function Us(i,t,e,n){return Zd(i,t)+Jd(i,e)+Qd(i,n)}function jd(i,t){const e=1-i;return e*e*e*t}function tf(i,t){const e=1-i;return 3*e*e*i*t}function ef(i,t){return 3*(1-i)*i*i*t}function nf(i,t){return i*i*i*t}function Fs(i,t,e,n,s){return jd(i,t)+tf(i,e)+ef(i,n)+nf(i,s)}class au extends zn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fs(t,s.x,r.x,a.x,o.x),Fs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sf extends zn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fs(t,s.x,r.x,a.x,o.x),Fs(t,s.y,r.y,a.y,o.y),Fs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ou extends zn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends zn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends zn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Us(t,s.x,r.x,a.x),Us(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends zn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Us(t,s.x,r.x,a.x),Us(t,s.y,r.y,a.y),Us(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cu extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(fc(o,l.x,c.x,u.x,f.x),fc(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var rl=Object.freeze({__proto__:null,ArcCurve:$d,CatmullRomCurve3:Kd,CubicBezierCurve:au,CubicBezierCurve3:sf,EllipseCurve:wl,LineCurve:ou,LineCurve3:rf,QuadraticBezierCurve:lu,QuadraticBezierCurve3:af,SplineCurve:cu});class of extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rl[s.type]().fromJSON(s))}return this}}class na extends of{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ou(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new lu(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new au(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new wl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ti extends na{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new na().fromJSON(s))}return this}}function lf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=hu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ff(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Xs(r,a,e,o,l,c,0),a}function hu(i,t,e,n,s){let r;if(s===Ef(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=pc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=pc(a/n|0,i[a],i[a+1],r);return r&&as(r,r.next)&&(Ys(r),r=r.next),r}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(as(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&vf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?hf(i,n,s,r):cf(i)){t.push(l.i,i.i,c.i),Ys(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=uf(Li(i),t),Xs(i,t,e,n,s,r,2)):a===2&&df(i,t,e,n,s,r):Xs(Li(i),t,e,n,s,r,1);break}}}function cf(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Ds(s,o,r,l,a,c,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ie(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),S=Math.max(o,l,c),m=Math.max(u,f,h),p=al(d,g,t,e,n),y=al(S,m,t,e,n);let T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=y;){if(T.x>=d&&T.x<=S&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ds(o,u,l,f,c,h,T.x,T.y)&&Ie(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=d&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ds(o,u,l,f,c,h,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=S&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ds(o,u,l,f,c,h,T.x,T.y)&&Ie(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ds(o,u,l,f,c,h,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function uf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!as(n,s)&&du(n,e,e.next,s)&&qs(n,s)&&qs(s,n)&&(t.push(n.i,e.i,s.i),Ys(e),Ys(e.next),e=i=s),e=e.next}while(e!==i);return Li(e)}function df(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sf(a,o)){let l=fu(a,o);a=Li(a,a.next),l=Li(l,l.next),Xs(a,t,e,n,s,r,0),Xs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ff(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=hu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mf(c))}s.sort(pf);for(let r=0;r<s.length;r++)e=mf(s[r],e);return e}function pf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mf(i,t){const e=gf(i,t);if(!e)return t;const n=fu(e,i);return Li(n,n.next),Li(e,e.next)}function gf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(as(i,e))return e;do{if(as(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&uu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);qs(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&_f(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function _f(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function vf(i,t,e,n){let s=i;do s.z===0&&(s.z=al(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xf(s)}function xf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function al(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function uu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ds(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&uu(i,t,e,n,s,r,a,o)}function Sf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yf(i,t)&&(qs(i,t)&&qs(t,i)&&wf(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||as(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function as(i,t){return i.x===t.x&&i.y===t.y}function du(i,t,e,n){const s=xr(Ie(i,t,e)),r=xr(Ie(i,t,n)),a=xr(Ie(e,n,i)),o=xr(Ie(e,n,t));return!!(s!==r&&a!==o||s===0&&vr(i,e,t)||r===0&&vr(i,n,t)||a===0&&vr(e,i,n)||o===0&&vr(e,t,n))}function vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xr(i){return i>0?1:i<0?-1:0}function yf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function wf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fu(i,t){const e=ol(i.i,i.x,i.y),n=ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pc(i,t,e,n){const s=ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ef(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class bf{static triangulate(t,e,n=2){return lf(t,e,n)}}class Kn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Kn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];mc(t),gc(n,t);let a=t.length;e.forEach(mc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,gc(n,e[l]);const o=bf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function mc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class oa extends Be{constructor(t=new ti([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Tf;let T,v=!1,E,w,P,x;if(p){T=p.getSpacedPoints(u),v=!0,h=!1;const st=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,st),w=new I,P=new I,x=new I}h||(m=0,d=0,g=0,S=0);const b=o.extractPoints(c);let L=b.shape;const U=b.holes;if(!Kn.isClockWise(L)){L=L.reverse();for(let st=0,dt=U.length;st<dt;st++){const pt=U[st];Kn.isClockWise(pt)&&(U[st]=pt.reverse())}}function Y(st){const pt=10000000000000001e-36;let gt=st[0];for(let Et=1;Et<=st.length;Et++){const Wt=Et%st.length,Ht=st[Wt],Kt=Ht.x-gt.x,Qt=Ht.y-gt.y,D=Kt*Kt+Qt*Qt,Me=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(gt.x),Math.abs(gt.y)),he=pt*Me*Me;if(D<=he){st.splice(Wt,1),Et--;continue}gt=Ht}}Y(L),U.forEach(Y);const F=U.length,X=L;for(let st=0;st<F;st++){const dt=U[st];L=L.concat(dt)}function $(st,dt,pt){return dt||Se("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(dt,pt)}const K=L.length;function ht(st,dt,pt){let gt,Et,Wt;const Ht=st.x-dt.x,Kt=st.y-dt.y,Qt=pt.x-st.x,D=pt.y-st.y,Me=Ht*Ht+Kt*Kt,he=Ht*D-Kt*Qt;if(Math.abs(he)>Number.EPSILON){const A=Math.sqrt(Me),_=Math.sqrt(Qt*Qt+D*D),V=dt.x-Kt/A,q=dt.y+Ht/A,j=pt.x-D/_,_t=pt.y+Qt/_,yt=((j-V)*D-(_t-q)*Qt)/(Ht*D-Kt*Qt);gt=V+Ht*yt-st.x,Et=q+Kt*yt-st.y;const tt=gt*gt+Et*Et;if(tt<=2)return new vt(gt,Et);Wt=Math.sqrt(tt/2)}else{let A=!1;Ht>Number.EPSILON?Qt>Number.EPSILON&&(A=!0):Ht<-Number.EPSILON?Qt<-Number.EPSILON&&(A=!0):Math.sign(Kt)===Math.sign(D)&&(A=!0),A?(gt=-Kt,Et=Ht,Wt=Math.sqrt(Me)):(gt=Ht,Et=Kt,Wt=Math.sqrt(Me/2))}return new vt(gt/Wt,Et/Wt)}const J=[];for(let st=0,dt=X.length,pt=dt-1,gt=st+1;st<dt;st++,pt++,gt++)pt===dt&&(pt=0),gt===dt&&(gt=0),J[st]=ht(X[st],X[pt],X[gt]);const rt=[];let at,Ft=J.concat();for(let st=0,dt=F;st<dt;st++){const pt=U[st];at=[];for(let gt=0,Et=pt.length,Wt=Et-1,Ht=gt+1;gt<Et;gt++,Wt++,Ht++)Wt===Et&&(Wt=0),Ht===Et&&(Ht=0),at[gt]=ht(pt[gt],pt[Wt],pt[Ht]);rt.push(at),Ft=Ft.concat(at)}let Ot;if(m===0)Ot=Kn.triangulateShape(X,U);else{const st=[],dt=[];for(let pt=0;pt<m;pt++){const gt=pt/m,Et=d*Math.cos(gt*Math.PI/2),Wt=g*Math.sin(gt*Math.PI/2)+S;for(let Ht=0,Kt=X.length;Ht<Kt;Ht++){const Qt=$(X[Ht],J[Ht],Wt);Rt(Qt.x,Qt.y,-Et),gt===0&&st.push(Qt)}for(let Ht=0,Kt=F;Ht<Kt;Ht++){const Qt=U[Ht];at=rt[Ht];const D=[];for(let Me=0,he=Qt.length;Me<he;Me++){const A=$(Qt[Me],at[Me],Wt);Rt(A.x,A.y,-Et),gt===0&&D.push(A)}gt===0&&dt.push(D)}}Ot=Kn.triangulateShape(st,dt)}const xe=Ot.length,re=g+S;for(let st=0;st<K;st++){const dt=h?$(L[st],Ft[st],re):L[st];v?(P.copy(E.normals[0]).multiplyScalar(dt.x),w.copy(E.binormals[0]).multiplyScalar(dt.y),x.copy(T[0]).add(P).add(w),Rt(x.x,x.y,x.z)):Rt(dt.x,dt.y,0)}for(let st=1;st<=u;st++)for(let dt=0;dt<K;dt++){const pt=h?$(L[dt],Ft[dt],re):L[dt];v?(P.copy(E.normals[st]).multiplyScalar(pt.x),w.copy(E.binormals[st]).multiplyScalar(pt.y),x.copy(T[st]).add(P).add(w),Rt(x.x,x.y,x.z)):Rt(pt.x,pt.y,f/u*st)}for(let st=m-1;st>=0;st--){const dt=st/m,pt=d*Math.cos(dt*Math.PI/2),gt=g*Math.sin(dt*Math.PI/2)+S;for(let Et=0,Wt=X.length;Et<Wt;Et++){const Ht=$(X[Et],J[Et],gt);Rt(Ht.x,Ht.y,f+pt)}for(let Et=0,Wt=U.length;Et<Wt;Et++){const Ht=U[Et];at=rt[Et];for(let Kt=0,Qt=Ht.length;Kt<Qt;Kt++){const D=$(Ht[Kt],at[Kt],gt);v?Rt(D.x,D.y+T[u-1].y,T[u-1].x+pt):Rt(D.x,D.y,f+pt)}}}oe(),Z();function oe(){const st=s.length/3;if(h){let dt=0,pt=K*dt;for(let gt=0;gt<xe;gt++){const Et=Ot[gt];Yt(Et[2]+pt,Et[1]+pt,Et[0]+pt)}dt=u+m*2,pt=K*dt;for(let gt=0;gt<xe;gt++){const Et=Ot[gt];Yt(Et[0]+pt,Et[1]+pt,Et[2]+pt)}}else{for(let dt=0;dt<xe;dt++){const pt=Ot[dt];Yt(pt[2],pt[1],pt[0])}for(let dt=0;dt<xe;dt++){const pt=Ot[dt];Yt(pt[0]+K*u,pt[1]+K*u,pt[2]+K*u)}}n.addGroup(st,s.length/3-st,0)}function Z(){const st=s.length/3;let dt=0;it(X,dt),dt+=X.length;for(let pt=0,gt=U.length;pt<gt;pt++){const Et=U[pt];it(Et,dt),dt+=Et.length}n.addGroup(st,s.length/3-st,1)}function it(st,dt){let pt=st.length;for(;--pt>=0;){const gt=pt;let Et=pt-1;Et<0&&(Et=st.length-1);for(let Wt=0,Ht=u+m*2;Wt<Ht;Wt++){const Kt=K*Wt,Qt=K*(Wt+1),D=dt+gt+Kt,Me=dt+Et+Kt,he=dt+Et+Qt,A=dt+gt+Qt;Nt(D,Me,he,A)}}}function Rt(st,dt,pt){l.push(st),l.push(dt),l.push(pt)}function Yt(st,dt,pt){qt(st),qt(dt),qt(pt);const gt=s.length/3,Et=y.generateTopUV(n,s,gt-3,gt-2,gt-1);ye(Et[0]),ye(Et[1]),ye(Et[2])}function Nt(st,dt,pt,gt){qt(st),qt(dt),qt(gt),qt(dt),qt(pt),qt(gt);const Et=s.length/3,Wt=y.generateSideWallUV(n,s,Et-6,Et-3,Et-2,Et-1);ye(Wt[0]),ye(Wt[1]),ye(Wt[3]),ye(Wt[1]),ye(Wt[2]),ye(Wt[3])}function qt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function ye(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Af(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rl[s.type]().fromJSON(s)),new oa(n,t.options)}}const Tf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new vt(r,a),new vt(o,l),new vt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new vt(a,1-l),new vt(c,1-f),new vt(h,1-g),new vt(S,1-p)]:[new vt(o,1-l),new vt(u,1-f),new vt(d,1-g),new vt(m,1-p)]}};function Af(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ue extends hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ue(t.radius,t.detail)}}class bl extends Be{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,f=new I,h=new vt,d=new I,g=new I,S=new I;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,S.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),l.push(d.x,d.y,d.z),S.copy(g)}for(let y=0;y<=e;y++){const T=n+y*u*s,v=Math.sin(T),E=Math.cos(T);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*v,f.y=t[w].y,f.z=t[w].x*E,a.push(f.x,f.y,f.z),h.x=y/e,h.y=w/(t.length-1),o.push(h.x,h.y);const P=l[3*w+0]*v,x=l[3*w+1],b=l[3*w+0]*E;c.push(P,x,b)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){const v=T+y*t.length,E=v,w=v+t.length,P=v+t.length+1,x=v+1;r.push(E,w,x),r.push(P,x,w)}this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("uv",new ve(o,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.points,t.segments,t.phiStart,t.phiLength)}}class Ee extends hs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ee(t.radius,t.detail)}}class Zs extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],S=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let T=0;T<c;T++){const v=T*f-r;g.push(v,-y,0),S.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),w=y+1+c*p;d.push(T,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tl extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new I,g=new vt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let S=0;S<s;S++){const m=S*(n+1);for(let p=0;p<n;p++){const y=p+m,T=y,v=y+n+1,E=y+n+2,w=y+1;o.push(T,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ni extends Be{constructor(t=new ti([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(a,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const g=h.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Kn.isClockWise(y)===!0&&(g[m]=y.reverse())}const S=Kn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=S.length;m<p;m++){const y=S[m],T=y[0]+f,v=y[1]+f,E=y[2]+f;n.push(T,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Ni(n,t.curveSegments)}}function Rf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class en extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,h=new I,d=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const y=[],T=p/n,v=a+T*o,E=t*Math.cos(v),w=Math.sqrt(t*t-E*E);let P=0;p===0&&a===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){const b=x/e,L=s+b*r;f.x=-w*Math.cos(L),f.y=E,f.z=w*Math.sin(L),g.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(b+P,1-T),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const T=u[p][y+1],v=u[p][y],E=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&d.push(T,v,w),(p!==n-1||l<Math.PI)&&d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends hs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _n(t.radius,t.detail)}}class ue extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new I,d=new I,g=new I;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=s;p++){const y=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,T=(s+1)*(S-1)+m,v=(s+1)*S+m;l.push(p,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(_c(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_c(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function _c(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Pf={clone:os,merge:Je};var Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Df extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nf extends Ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uf extends Ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ff extends Ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mu extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Of extends mu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const za=new _e,vc=new I,xc=new I;class Bf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mr=new I,Sr=new Bn,Pn=new I;class Al extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mr,Sr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,Sr,Pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mr,Sr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,Sr,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Mc=new vt,Sc=new vt;class En extends Al{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Mc,Sc),e.subVectors(Sc,Mc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Rl extends Al{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zf extends Bf{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yc extends mu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new zf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const $i=-90,Ki=1;class kf extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En($i,Ki,t,e);s.layers=this.layers,this.add(s);const r=new En($i,Ki,t,e);r.layers=this.layers,this.add(r);const a=new En($i,Ki,t,e);a.layers=this.layers,this.add(a);const o=new En($i,Ki,t,e);o.layers=this.layers,this.add(o);const l=new En($i,Ki,t,e);l.layers=this.layers,this.add(l);const c=new En($i,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gf extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zl=class zl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zl.prototype.isMatrix2=!0;let wc=zl;function Ec(i,t,e,n){const s=Hf(n);switch(e){case Kh:return i*t;case ml:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case Pi:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case Zh:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case vl:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:case Po:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Lo:case Io:case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case Kr:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Qo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zr:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hf(i){switch(i){case un:case Xh:return{byteLength:1,components:1};case ks:case qh:case On:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Fn:case dl:case Tn:return{byteLength:4,components:1};case Yh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],S=f[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const S=f[d];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,s0=`#ifdef USE_BUMPMAP
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f0=`#define PI 3.141592653589793
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
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m0=`vec3 transformedNormal = objectNormal;
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
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,F0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,H0=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,V0=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,om=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
}`,vm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:Qf,batching_vertex:jf,begin_vertex:t0,beginnormal_vertex:e0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:v0,emissivemap_pars_fragment:x0,colorspace_fragment:M0,colorspace_pars_fragment:S0,envmap_fragment:y0,envmap_common_pars_fragment:w0,envmap_pars_fragment:E0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:F0,envmap_vertex:T0,fog_vertex:A0,fog_pars_vertex:R0,fog_fragment:C0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:I0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:N0,lights_pars_begin:U0,lights_toon_fragment:O0,lights_toon_pars_fragment:B0,lights_phong_fragment:z0,lights_phong_pars_fragment:k0,lights_physical_fragment:G0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:W0,lights_fragment_end:X0,lightprobes_pars_fragment:q0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:Z0,map_fragment:J0,map_pars_fragment:Q0,map_particle_fragment:j0,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:yp,dithering_pars_fragment:wp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Ip,skinnormal_vertex:Dp,specularmap_fragment:Np,specularmap_pars_fragment:Up,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Gp,uv_vertex:Hp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:$p,cube_frag:Kp,depth_vert:Zp,depth_frag:Jp,distance_vert:Qp,distance_frag:jp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:am,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:vm,points_frag:xm,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:ym,sprite_frag:wm},Pt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Dn={basic:{uniforms:Je([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Je([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Je([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Je([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Je([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Je([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Je([Pt.points,Pt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Je([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Je([Pt.common,Pt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Je([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Je([Pt.sprite,Pt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Je([Pt.common,Pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Je([Pt.lights,Pt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Dn.physical={uniforms:Je([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const yr={r:0,b:0,g:0},Em=new _e,_u=new se;_u.set(-1,0,0,0,1,0,0,0,1);function bm(i,t,e,n,s,r){const a=new Xt(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const v=y.backgroundBlurriness>0;T=t.get(T,v)}return T}function g(y){let T=!1;const v=d(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,T){const v=d(T);v&&(v.isCubeTexture||v.mapping===aa)?(c===void 0&&(c=new dn(new et(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:os(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_u),c.material.toneMapped=ge.getTransfer(v.colorSpace)!==Te,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new dn(new Zs(2,2),new fn({name:"BackgroundMaterial",uniforms:os(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ge.getTransfer(v.colorSpace)!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(yr,pu(i)),e.buffers.color.setClear(yr.r,yr.g,yr.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:S,dispose:p}}function Tm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(U,H,Y,F,X){let $=!1;const K=f(U,F,Y,H);r!==K&&(r=K,c(r.object)),$=d(U,F,Y,X),$&&g(U,F,Y,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(U,H,Y,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,H,Y,F){const X=F.wireframe===!0;let $=n[H.id];$===void 0&&($={},n[H.id]=$);const K=U.isInstancedMesh===!0?U.id:0;let ht=$[K];ht===void 0&&(ht={},$[K]=ht);let J=ht[Y.id];J===void 0&&(J={},ht[Y.id]=J);let rt=J[X];return rt===void 0&&(rt=h(l()),J[X]=rt),rt}function h(U){const H=[],Y=[],F=[];for(let X=0;X<e;X++)H[X]=0,Y[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:F,object:U,attributes:{},index:null}}function d(U,H,Y,F){const X=r.attributes,$=H.attributes;let K=0;const ht=Y.getAttributes();for(const J in ht)if(ht[J].location>=0){const at=X[J];let Ft=$[J];if(Ft===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Ft=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Ft=U.instanceColor)),at===void 0||at.attribute!==Ft||Ft&&at.data!==Ft.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function g(U,H,Y,F){const X={},$=H.attributes;let K=0;const ht=Y.getAttributes();for(const J in ht)if(ht[J].location>=0){let at=$[J];at===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));const Ft={};Ft.attribute=at,at&&at.data&&(Ft.data=at.data),X[J]=Ft,K++}r.attributes=X,r.attributesNum=K,r.index=F}function S(){const U=r.newAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]=0}function m(U){p(U,0)}function p(U,H){const Y=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;Y[U]=1,F[U]===0&&(i.enableVertexAttribArray(U),F[U]=1),X[U]!==H&&(i.vertexAttribDivisor(U,H),X[U]=H)}function y(){const U=r.newAttributes,H=r.enabledAttributes;for(let Y=0,F=H.length;Y<F;Y++)H[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function T(U,H,Y,F,X,$,K){K===!0?i.vertexAttribIPointer(U,H,Y,X,$):i.vertexAttribPointer(U,H,Y,F,X,$)}function v(U,H,Y,F){S();const X=F.attributes,$=Y.getAttributes(),K=H.defaultAttributeValues;for(const ht in $){const J=$[ht];if(J.location>=0){let rt=X[ht];if(rt===void 0&&(ht==="instanceMatrix"&&U.instanceMatrix&&(rt=U.instanceMatrix),ht==="instanceColor"&&U.instanceColor&&(rt=U.instanceColor)),rt!==void 0){const at=rt.normalized,Ft=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const xe=Ot.buffer,re=Ot.type,oe=Ot.bytesPerElement,Z=re===i.INT||re===i.UNSIGNED_INT||rt.gpuType===dl;if(rt.isInterleavedBufferAttribute){const it=rt.data,Rt=it.stride,Yt=rt.offset;if(it.isInstancedInterleavedBuffer){for(let Nt=0;Nt<J.locationSize;Nt++)p(J.location+Nt,it.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Nt=0;Nt<J.locationSize;Nt++)m(J.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Nt=0;Nt<J.locationSize;Nt++)T(J.location+Nt,Ft/J.locationSize,re,at,Rt*oe,(Yt+Ft/J.locationSize*Nt)*oe,Z)}else{if(rt.isInstancedBufferAttribute){for(let it=0;it<J.locationSize;it++)p(J.location+it,rt.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<J.locationSize;it++)m(J.location+it);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let it=0;it<J.locationSize;it++)T(J.location+it,Ft/J.locationSize,re,at,Ft*oe,Ft/J.locationSize*it*oe,Z)}}else if(K!==void 0){const at=K[ht];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(J.location,at);break;case 3:i.vertexAttrib3fv(J.location,at);break;case 4:i.vertexAttrib4fv(J.location,at);break;default:i.vertexAttrib1fv(J.location,at)}}}}y()}function E(){b();for(const U in n){const H=n[U];for(const Y in H){const F=H[Y];for(const X in F){const $=F[X];for(const K in $)u($[K].object),delete $[K];delete F[X]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;const H=n[U.id];for(const Y in H){const F=H[Y];for(const X in F){const $=F[X];for(const K in $)u($[K].object),delete $[K];delete F[X]}}delete n[U.id]}function P(U){for(const H in n){const Y=n[H];for(const F in Y){const X=Y[F];if(X[U.id]===void 0)continue;const $=X[U.id];for(const K in $)u($[K].object),delete $[K];delete X[U.id]}}}function x(U){for(const H in n){const Y=n[H],F=U.isInstancedMesh===!0?U.id:0,X=Y[F];if(X!==void 0){for(const $ in X){const K=X[$];for(const ht in K)u(K[ht].object),delete K[ht];delete X[$]}delete Y[F],Object.keys(Y).length===0&&delete n[H]}}}function b(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Am(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==un&&P!==Tn&&!x&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:w}}function Cm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ci,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,T=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,T,d);for(let E=0;E!==T;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const p=d+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=d;T!==S;++T,v+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const es=4,Pm=6,Lm=20,Im=256,Es=new Rl,bc=new Xt;let ka=null,Ga=0,Ha=0,Va=!1;const Dm=new I,Mi=new I;class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Dm}=r;ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Ga,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,Zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:On,format:An,colorSpace:Jr,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Nm(r)),this._blurMaterial=Fm(r,t,e),this._ggxMaterial=Um(r,t,e)}return s}_compileMaterial(t){const e=new dn(new Be,t);this._renderer.compile(e,Es)}_sceneToCubeUV(t,e,n,s,r){const l=new En(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(bc),f.toneMapping=Un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new et,new ta({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(bc),p=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;Zi(s,v*E,T>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(S,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Zi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Es)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-es?n-g+es:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Zi(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Zi(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,Es)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-es?s-this._lodMax+es:0),h=4*(this._cubeSize-u);Zi(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Es)}}function Nm(i){const t=[],e=[];let n=i;const s=i-es+1+Pm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),S=new Float32Array(d*h*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,T=p>2?0:-1,v=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(v,d*h*p);for(let E=0;E<h;E++){const w=u[E*2]*2-1,P=u[E*2+1]*2-1;p===0?Mi.set(1,P,w):p===1?Mi.set(-w,1,-P):p===2?Mi.set(-w,P,1):p===3?Mi.set(-1,P,-w):p===4?Mi.set(-w,-1,P):Mi.set(w,P,-1),Mi.toArray(S,(p*h+E)*d)}}const m=new Be;m.setAttribute("position",new Qe(g,d)),m.setAttribute("outputDirection",new Qe(S,d)),e.push(new dn(m,null)),n>es&&n--}return{lodMeshes:e,sizeLods:t}}function Ac(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Um(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Im,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fm(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rc(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cc(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class vu extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Zn});r.uniforms.tEquirect.value=e;const a=new dn(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Ve),new kf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Om(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ha||d===ua)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new vu(g.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===ha||d===ua,S=d===Ci||d===rs;if(g||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Tc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new Tc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===ha?h.mapping=Ci:d===ua&&(h.mapping=rs),h}function l(h){let d=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Bm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(d!==null){const y=d.array;S=d.version;for(let T=0,v=y.length;T<v;T+=3){const E=y[T+0],w=y[T+1],P=y[T+2];h.push(E,w,w,P,P,E)}}else{const y=g.array;S=g.version;for(let T=0,v=y.length/3-1;T<v;T+=3){const E=T+0,w=T+1,P=T+2;h.push(E,w,w,P,P,E)}}const m=new(g.count>=65535?nu:eu)(h,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function km(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,t,e){const n=new WeakMap,s=new Le;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;d===!0&&(T=1),g===!0&&(T=2),S===!0&&(T=3);let v=o.attributes.position.count*T,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*E*4*f),P=new Qh(w,v,E,f);P.type=Tn,P.needsUpdate=!0;const x=T*4;for(let L=0;L<f;L++){const U=m[L],H=p[L],Y=y[L],F=v*E*4*L;for(let X=0;X<U.count;X++){const $=X*x;d===!0&&(s.fromBufferAttribute(U,X),w[F+$+0]=s.x,w[F+$+1]=s.y,w[F+$+2]=s.z,w[F+$+3]=0),g===!0&&(s.fromBufferAttribute(H,X),w[F+$+4]=s.x,w[F+$+5]=s.y,w[F+$+6]=s.z,w[F+$+7]=0),S===!0&&(s.fromBufferAttribute(Y,X),w[F+$+8]=s.x,w[F+$+9]=s.y,w[F+$+10]=s.z,w[F+$+11]=Y.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new vt(v,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Vm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Wm={[Oh]:"LINEAR_TONE_MAPPING",[Bh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[Gh]:"CUSTOM_TONE_MAPPING"};function Xm(i,t,e,n,s,r){const a=new Rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Be;c.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ve([0,2,0,0,2,0],2));const u=new Df({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dn(c,u),h=new Rl(-1,1,1,-1,0,1);let d=null,g=null,S=!1,m,p=null,y=[],T=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let w=0;w<y.length;w++){const P=y[w];P.setSize&&P.setSize(v,E)}},this.setEffects=function(v){y=v,T=y.length>0&&y[0].isRenderPass===!0;const E=a.width,w=a.height;y.length>0&&o===null&&(o=new Rn(E,w,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(E,w,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){const x=y[P];x.setSize&&x.setSize(E,w)}},this.begin=function(v,E){if(S||v.toneMapping===Un&&y.length===0)return!1;if(p=E,E!==null){const w=E.width,P=E.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=m,S=!0;let w=a,P=o;for(let x=0;x<y.length;x++){const b=y[x];b.enabled!==!1&&(b.render(v,P,w,E),b.needsSwap!==!1&&(w=P,P=P===o?l:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},ge.getTransfer(d)===Te&&(u.defines.SRGB_TRANSFER="");const x=Wm[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(f,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const xu=new Ke,ll=new Ws(1,1),Mu=new Qh,Su=new Ad,yu=new su,Pc=[],Lc=[],Ic=new Float32Array(16),Dc=new Float32Array(9),Nc=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Nc.set(n),i.uniformMatrix2fv(this.addr,!1,Nc),Oe(e,n)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),Oe(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ic.set(n),i.uniformMatrix4fv(this.addr,!1,Ic),Oe(e,n)}}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ll.compareFunction=e.isReversedDepthBuffer()?Ml:xl,r=ll):r=xu,e.setTexture2D(t||r,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Su,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yu,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mu,s)}function ug(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return $m;case 35666:return Km;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return jm;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,t){i.uniform1fv(this.addr,t)}function fg(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function pg(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function mg(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function gg(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _g(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xg(i,t){i.uniform1iv(this.addr,t)}function Mg(i,t){i.uniform2iv(this.addr,t)}function Sg(i,t){i.uniform3iv(this.addr,t)}function yg(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Tg(i,t){i.uniform4uiv(this.addr,t)}function Ag(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ll:a=xu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Su,r[a])}function Cg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yu,r[a])}function Pg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mu,r[a])}function Lg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return yg;case 5125:return wg;case 36294:return Eg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lg(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Uc(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){const n=i.name,s=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),a=Wa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Uc(e,c===void 0?new Ig(o,i,t):new Dg(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ng(o),Uc(e,f)),e=f}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ug(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Fc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Fg=37297;let Og=0;function Bg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Oc=new se;function zg(i){ge._getMatrix(Oc,ge.workingColorSpace,i);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bg(i.getShaderSource(t),o)}else return r}function kg(i,t){const e=zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Gg={[Oh]:"Linear",[Bh]:"Reinhard",[zh]:"Cineon",[kh]:"ACESFilmic",[Hh]:"AgX",[Vh]:"Neutral",[Gh]:"Custom"};function Hg(i,t){const e=Gg[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wr=new I;function Vg(){ge.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),t=wr.y.toFixed(4),e=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Xg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ns(i){return i!==""}function zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(Yg,Kg)}const $g=new Map;function Kg(i,t){let e=ce[t];if(e===void 0){const n=$g.get(t);if(n!==void 0)e=ce[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cl(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(Zg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Qg={[Hr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function jg(i){return Qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t_={[Ci]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function e_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const n_={[rs]:"ENVMAP_MODE_REFRACTION"};function i_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s_={[Fh]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[rd]:"ENVMAP_BLENDING_ADD"};function r_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s_[i.combine]||"ENVMAP_BLENDING_NONE"}function a_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=jg(e),c=e_(e),u=i_(e),f=r_(e),h=a_(e),d=Wg(e),g=Xg(r),S=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?ce.tonemapping_pars_fragment:"",e.toneMapping!==Un?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,kg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=cl(a),a=zc(a,e),a=kc(a,e),o=cl(o),o=zc(o,e),o=kc(o,e),a=Gc(a),o=Gc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+a,v=y+p+o,E=Fc(s,s.VERTEX_SHADER,T),w=Fc(s,s.FRAGMENT_SHADER,v);s.attachShader(S,E),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(U){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(S)||"",Y=s.getShaderInfoLog(E)||"",F=s.getShaderInfoLog(w)||"",X=H.trim(),$=Y.trim(),K=F.trim();let ht=!0,J=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,E,w);else{const rt=Bc(s,E,"vertex"),at=Bc(s,w,"fragment");Se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+rt+`
`+at)}else X!==""?te("WebGLProgram: Program Info Log:",X):($===""||K==="")&&(J=!1);J&&(U.diagnostics={runnable:ht,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(w),x=new Yr(s,S),b=qg(s,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,Fg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Og++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}let l_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h_(t),e.set(t,n)),n}}class h_{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}}function u_(i){return i===Pi||i===Kr||i===Zr}function d_(i,t,e,n,s,r){const a=new jh,o=new c_,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,b,L,U,H,Y){const F=U.fog,X=H.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ht=t.get(x.envMap||$,K),J=ht&&ht.mapping===aa?ht.image.height:null,rt=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&te("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ft=at!==void 0?at.length:0;let Ot=0;X.morphAttributes.position!==void 0&&(Ot=1),X.morphAttributes.normal!==void 0&&(Ot=2),X.morphAttributes.color!==void 0&&(Ot=3);let xe,re,oe,Z;if(rt){const de=Dn[rt];xe=de.vertexShader,re=de.fragmentShader}else{xe=x.vertexShader,re=x.fragmentShader;const de=o.getVertexShaderStage(x),fe=o.getFragmentShaderStage(x);o.update(x,de,fe),oe=de.id,Z=fe.id}const it=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Yt=H.isInstancedMesh===!0,Nt=H.isBatchedMesh===!0,qt=!!x.map,ye=!!x.matcap,st=!!ht,dt=!!x.aoMap,pt=!!x.lightMap,gt=!!x.bumpMap&&x.wireframe===!1,Et=!!x.normalMap,Wt=!!x.displacementMap,Ht=!!x.emissiveMap,Kt=!!x.metalnessMap,Qt=!!x.roughnessMap,D=x.anisotropy>0,Me=x.clearcoat>0,he=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,V=x.sheen>0,q=x.transmission>0,j=D&&!!x.anisotropyMap,_t=Me&&!!x.clearcoatMap,yt=Me&&!!x.clearcoatNormalMap,tt=Me&&!!x.clearcoatRoughnessMap,Q=_&&!!x.iridescenceMap,ut=_&&!!x.iridescenceThicknessMap,zt=V&&!!x.sheenColorMap,At=V&&!!x.sheenRoughnessMap,bt=!!x.specularMap,Gt=!!x.specularColorMap,kt=!!x.specularIntensityMap,ee=q&&!!x.transmissionMap,O=q&&!!x.thicknessMap,wt=!!x.gradientMap,nt=!!x.alphaMap,Tt=x.alphaTest>0,Lt=!!x.alphaHash,ct=!!x.extensions;let Vt=Un;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const Bt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:xe,fragmentShader:re,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Nt,batchingColor:Nt&&H._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&H.instanceColor!==null,instancingMorph:Yt&&H.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:ye,envMap:st,envMapMode:st&&ht.mapping,envMapCubeUVHeight:J,aoMap:dt,lightMap:pt,bumpMap:gt,normalMap:Et,displacementMap:Wt,emissiveMap:Ht,normalMapObjectSpace:Et&&x.normalMapType===ld,normalMapTangentSpace:Et&&x.normalMapType===il,packedNormalMap:Et&&x.normalMapType===il&&u_(x.normalMap.format),metalnessMap:Kt,roughnessMap:Qt,anisotropy:D,anisotropyMap:j,clearcoat:Me,clearcoatMap:_t,clearcoatNormalMap:yt,clearcoatRoughnessMap:tt,dispersion:he,retroreflection:A,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:ut,sheen:V,sheenColorMap:zt,sheenRoughnessMap:At,specularMap:bt,specularColorMap:Gt,specularIntensityMap:kt,transmission:q,transmissionMap:ee,thicknessMap:O,gradientMap:wt,opaque:x.transparent===!1&&x.blending===Ti&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:Tt,alphaHash:Lt,combine:x.combine,mapUv:qt&&g(x.map.channel),aoMapUv:dt&&g(x.aoMap.channel),lightMapUv:pt&&g(x.lightMap.channel),bumpMapUv:gt&&g(x.bumpMap.channel),normalMapUv:Et&&g(x.normalMap.channel),displacementMapUv:Wt&&g(x.displacementMap.channel),emissiveMapUv:Ht&&g(x.emissiveMap.channel),metalnessMapUv:Kt&&g(x.metalnessMap.channel),roughnessMapUv:Qt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:_t&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(x.sheenRoughnessMap.channel),specularMapUv:bt&&g(x.specularMap.channel),specularColorMapUv:Gt&&g(x.specularColorMap.channel),specularIntensityMapUv:kt&&g(x.specularIntensityMap.channel),transmissionMapUv:ee&&g(x.transmissionMap.channel),thicknessMapUv:O&&g(x.thicknessMap.channel),alphaMapUv:nt&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Et||D),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(qt||nt),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&Et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Rt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Ot,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Te,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===Te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(b,x),y(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const b=d[x.type];let L;if(b){const U=Dn[b];L=Pf.clone(U.uniforms)}else L=x.uniforms;return L}function v(x,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new o_(i,b,x,s),c.push(L),u.set(b,L)),L}function E(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:P}}function f_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,S,m,p){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},i[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=m,y.group=p),t++,y}function l(h,d,g,S,m,p,y){y.reversedDepth===!0&&(m=-m);const T=o(h,d,g,S,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(h,d,g,S,m,p){const y=o(h,d,g,S,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(d||Vc),s.length>1&&s.sort(d||Vc)}function f(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function m_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Wc,i.set(n,[a])):s>=r.length?(a=new Wc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function __(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let v_=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){const t=new g_,e=__(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new _e,a=new _e;function o(c){let u=0,f=0,h=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,y=0,T=0,v=0,E=0,w=0,P=0,x=0,b=0,L=0;c.sort(x_);for(let H=0,Y=c.length;H<Y;H++){const F=c[H],X=F.color,$=F.intensity,K=F.distance;let ht=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Pi?ht=F.shadow.map.texture:ht=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=X.r*$,f+=X.g*$,h+=X.b*$;else if(F.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(F.sh.coefficients[J],$);L++}else if(F.isSunLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const rt=F.shadow,at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=ht;const Ft=rt.getViewportCount();for(let Ot=0;Ot<Ft;Ot++)n.sunShadowMatrix[S+Ot]=rt.getMatrix(Ot),n.sunShadowCascade[S+Ot]=rt._cascadeData[Ot];S+=Ft,g++}n.sun[d]=J,d++}else if(F.isDirectionalLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const rt=F.shadow,at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=ht,n.directionalShadowMatrix[m]=F.shadow.matrix,E++}n.directional[m]=J,m++}else if(F.isSpotLight){const J=t.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(X).multiplyScalar($),J.distance=K,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,n.spot[y]=J;const rt=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,rt.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[y]=rt.matrix,F.castShadow){const at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.spotShadow[y]=at,n.spotShadowMap[y]=ht,P++}y++}else if(F.isRectAreaLight){const J=t.get(F);J.color.copy(X).multiplyScalar($),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),n.rectArea[T]=J,T++}else if(F.isPointLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const rt=F.shadow,at=e.get(F);at.shadowIntensity=rt.intensity,at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,at.shadowCameraNear=rt.camera.near,at.shadowCameraFar=rt.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=ht,n.pointShadowMatrix[p]=F.shadow.matrix,w++}n.point[p]=J,p++}else if(F.isHemisphereLight){const J=t.get(F);J.skyColor.copy(F.color).multiplyScalar($),J.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[v]=J,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const U=n.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==T||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==P||U.numSpotMaps!==x||U.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=L,U.sunLength=d,U.directionalLength=m,U.pointLength=p,U.spotLength=y,U.rectAreaLength=T,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=P,U.numSpotMaps=x,U.numLightProbes=L,n.version=v_++)}function l(c,u){let f=0,h=0,d=0,g=0,S=0,m=0;const p=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const v=c[y];if(v.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(v.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const E=n.rectArea[S];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Xc(i){const t=new M_(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function S_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Xc(i),t.set(s,[o])):r>=a.length?(o=new Xc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,E_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],b_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qc=new _e,bs=new I,Xa=new I;function T_(i,t,e){let n=new yl;const s=new vt,r=new vt,a=new Le,o=new Uf,l=new Ff,c={},u=e.maxTextureSize,f={[Ri]:nn,[nn]:Ri,[hn]:hn},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:y_,fragmentShader:w_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new dn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(w,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===zu&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hr);const b=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Zn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=p!==this.type;Y&&P.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(X=>X.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,X=w.length;F<X;F++){const $=w[F],K=$.shadow;if(K===void 0){te("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ht=K.getFrameExtents();s.multiply(ht),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,K.mapSize.y=r.y));const J=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=J,K.map===null||Y===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Is){if($.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Rn(s.x,s.y,{format:Pi,type:On,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new Ws(s.x,s.y,Tn),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Qn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=He,K.map.depthTexture.magFilter=He}else $.isPointLight?(K.map=new vu(s.x),K.map.depthTexture=new Yd(s.x,Fn)):(K.map=new Rn(s.x,s.y),K.map.depthTexture=new Ws(s.x,s.y,Fn)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Qn,this.type===Hr?(K.map.depthTexture.compareFunction=J?Ml:xl,K.map.depthTexture.minFilter=Ve,K.map.depthTexture.magFilter=Ve):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=He,K.map.depthTexture.magFilter=He);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const rt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,x);for(let at=0;at<rt;at++){const Ft=K.getCamera(at);if($.isPointLight){const Ot=K.camera,xe=K.matrix,re=$.distance||Ot.far;re!==Ot.far&&(Ot.far=re,Ot.updateProjectionMatrix()),bs.setFromMatrixPosition($.matrixWorld),Ot.position.copy(bs),Xa.copy(Ot.position),Xa.add(E_[at]),Ot.up.copy(b_[at]),Ot.lookAt(Xa),Ot.updateMatrixWorld(),xe.makeTranslation(-bs.x,-bs.y,-bs.z),qc.multiplyMatrices(Ot.projectionMatrix,Ot.matrixWorldInverse),K._frustum.setFromProjectionMatrix(qc,Ot.coordinateSystem,Ot.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,at),i.clear();else{at===0&&(i.setRenderTarget(K.map),i.clear());const Ot=K.getViewport(at);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),H.viewport(a)}n=K.getFrustum(at),v(P,x,Ft,$,this.type)}K.isPointLightShadow!==!0&&this.type===Is&&y(K,x),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,L,U)};function y(w,P){const x=t.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Rn(s.x,s.y,{format:Pi,type:On}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,x,h,S,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,x,d,S,null)}function T(w,P,x,b){let L=null;const U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)L=U;else if(L=x.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=L.uuid,Y=P.uuid;let F=c[H];F===void 0&&(F={},c[H]=F);let X=F[Y];X===void 0&&(X=L.clone(),F[Y]=X,P.addEventListener("dispose",E)),L=X}if(L.visible=P.visible,L.wireframe=P.wireframe,b===Is?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:f[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const H=i.properties.get(L);H.light=x}return L}function v(w,P,x,b,L){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Is)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const Y=t.update(w),F=w.material;if(Array.isArray(F)){const X=Y.groups;for(let $=0,K=X.length;$<K;$++){const ht=X[$],J=F[ht.materialIndex];if(J&&J.visible){const rt=T(w,J,b,L);w.onBeforeShadow(i,w,P,x,Y,rt,ht),i.renderBufferDirect(x,null,Y,rt,w,ht),w.onAfterShadow(i,w,P,x,Y,rt,ht)}}}else if(F.visible){const X=T(w,F,b,L);w.onBeforeShadow(i,w,P,x,Y,X,null),i.renderBufferDirect(x,null,Y,X,w,null),w.onAfterShadow(i,w,P,x,Y,X,null)}}const H=w.children;for(let Y=0,F=H.length;Y<F;Y++)v(H[Y],P,x,b,L)}function E(w){w.target.removeEventListener("dispose",E);for(const x in c){const b=c[x],L=w.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function A_(i,t){function e(){let O=!1;const wt=new Le;let nt=null;const Tt=new Le(0,0,0,0);return{setMask:function(Lt){nt!==Lt&&!O&&(i.colorMask(Lt,Lt,Lt,Lt),nt=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,ct,Vt,Bt,de){de===!0&&(Lt*=Bt,ct*=Bt,Vt*=Bt),wt.set(Lt,ct,Vt,Bt),Tt.equals(wt)===!1&&(i.clearColor(Lt,ct,Vt,Bt),Tt.copy(wt))},reset:function(){O=!1,nt=null,Tt.set(-1,0,0,0)}}}function n(){let O=!1,wt=!1,nt=null,Tt=null,Lt=null;return{setReversed:function(ct){if(wt!==ct){const Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),wt=ct;const Bt=Lt;Lt=null,this.setClear(Bt)}},getReversed:function(){return wt},setTest:function(ct){ct?it(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ct){nt!==ct&&!O&&(i.depthMask(ct),nt=ct)},setFunc:function(ct){if(wt&&(ct=Md[ct]),Tt!==ct){switch(ct){case vo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ct}},setLocked:function(ct){O=ct},setClear:function(ct){Lt!==ct&&(Lt=ct,wt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){O=!1,nt=null,Tt=null,Lt=null,wt=!1}}}function s(){let O=!1,wt=null,nt=null,Tt=null,Lt=null,ct=null,Vt=null,Bt=null,de=null;return{setTest:function(fe){O||(fe?it(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(fe){wt!==fe&&!O&&(i.stencilMask(fe),wt=fe)},setFunc:function(fe,Xe,sn){(nt!==fe||Tt!==Xe||Lt!==sn)&&(i.stencilFunc(fe,Xe,sn),nt=fe,Tt=Xe,Lt=sn)},setOp:function(fe,Xe,sn){(ct!==fe||Vt!==Xe||Bt!==sn)&&(i.stencilOp(fe,Xe,sn),ct=fe,Vt=Xe,Bt=sn)},setLocked:function(fe){O=fe},setClear:function(fe){de!==fe&&(i.clearStencil(fe),de=fe)},reset:function(){O=!1,wt=null,nt=null,Tt=null,Lt=null,ct=null,Vt=null,Bt=null,de=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],S=null,m=!1,p=null,y=null,T=null,v=null,E=null,w=null,P=null,x=new Xt(0,0,0),b=0,L=!1,U=null,H=null,Y=null,F=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ht=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=ht>=1):J.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=ht>=2);let rt=null,at={};const Ft=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),xe=new Le().fromArray(Ft),re=new Le().fromArray(Ot);function oe(O,wt,nt,Tt){const Lt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(O,ct),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<nt;Vt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(wt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return ct}const Z={};Z[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(zs),gt(!1),Et(Vl),it(i.CULL_FACE),dt(Zn);function it(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Rt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Yt(O,wt){return h[O]!==wt?(i.bindFramebuffer(O,wt),h[O]=wt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=wt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Nt(O,wt){let nt=g,Tt=!1;if(O){nt=d.get(wt),nt===void 0&&(nt=[],d.set(wt,nt));const Lt=O.textures;if(nt.length!==Lt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Vt=Lt.length;ct<Vt;ct++)nt[ct]=i.COLOR_ATTACHMENT0+ct;nt.length=Lt.length,Tt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(nt)}function qt(O){return S!==O?(i.useProgram(O),S=O,!0):!1}const ye={[ji]:i.FUNC_ADD,[Gu]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};ye[Vu]=i.MIN,ye[Wu]=i.MAX;const st={[Xu]:i.ZERO,[qu]:i.ONE,[Yu]:i.SRC_COLOR,[Nh]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Ku]:i.DST_ALPHA,[$u]:i.ONE_MINUS_SRC_COLOR,[Uh]:i.ONE_MINUS_SRC_ALPHA,[Qu]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(O,wt,nt,Tt,Lt,ct,Vt,Bt,de,fe){if(O===Zn){m===!0&&(Rt(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),O!==ku){if(O!==p||fe!==L){if((y!==ji||E!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,E=ji),fe)switch(O){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bs:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Se("WebGLState: Invalid blending: ",O);break}else switch(O){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:Se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Se("WebGLState: Invalid blending: ",O);break}T=null,v=null,w=null,P=null,x.set(0,0,0),b=0,p=O,L=fe}return}Lt=Lt||wt,ct=ct||nt,Vt=Vt||Tt,(wt!==y||Lt!==E)&&(i.blendEquationSeparate(ye[wt],ye[Lt]),y=wt,E=Lt),(nt!==T||Tt!==v||ct!==w||Vt!==P)&&(i.blendFuncSeparate(st[nt],st[Tt],st[ct],st[Vt]),T=nt,v=Tt,w=ct,P=Vt),(Bt.equals(x)===!1||de!==b)&&(i.blendColor(Bt.r,Bt.g,Bt.b,de),x.copy(Bt),b=de),p=O,L=!1}function pt(O,wt){O.side===hn?Rt(i.CULL_FACE):it(i.CULL_FACE);let nt=O.side===nn;wt&&(nt=!nt),gt(nt),O.blending===Ti&&O.transparent===!1?dt(Zn):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Tt=O.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function Et(O){O!==Ou?(it(i.CULL_FACE),O!==H&&(O===Vl?i.cullFace(i.BACK):O===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),H=O}function Wt(O){O!==Y&&(K&&i.lineWidth(O),Y=O)}function Ht(O,wt,nt){O?(it(i.POLYGON_OFFSET_FILL),(F!==wt||X!==nt)&&(F=wt,X=nt,a.getReversed()&&(wt=-wt),i.polygonOffset(wt,nt))):Rt(i.POLYGON_OFFSET_FILL)}function Kt(O){O?it(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function Qt(O){O===void 0&&(O=i.TEXTURE0+$-1),rt!==O&&(i.activeTexture(O),rt=O)}function D(O,wt,nt){nt===void 0&&(rt===null?nt=i.TEXTURE0+$-1:nt=rt);let Tt=at[nt];Tt===void 0&&(Tt={type:void 0,texture:void 0},at[nt]=Tt),(Tt.type!==O||Tt.texture!==wt)&&(rt!==nt&&(i.activeTexture(nt),rt=nt),i.bindTexture(O,wt||Z[O]),Tt.type=O,Tt.texture=wt)}function Me(){const O=at[rt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(O){Se("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){Se("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){Se("WebGLState:",O)}}function V(){try{i.texSubImage3D(...arguments)}catch(O){Se("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Se("WebGLState:",O)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Se("WebGLState:",O)}}function _t(){try{i.texStorage2D(...arguments)}catch(O){Se("WebGLState:",O)}}function yt(){try{i.texStorage3D(...arguments)}catch(O){Se("WebGLState:",O)}}function tt(){try{i.texImage2D(...arguments)}catch(O){Se("WebGLState:",O)}}function Q(){try{i.texImage3D(...arguments)}catch(O){Se("WebGLState:",O)}}function ut(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function zt(O,wt){f[O]!==wt&&(i.pixelStorei(O,wt),f[O]=wt)}function At(O){xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function bt(O){re.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Gt(O,wt){let nt=c.get(wt);nt===void 0&&(nt=new WeakMap,c.set(wt,nt));let Tt=nt.get(O);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,O.name),nt.set(O,Tt))}function kt(O,wt){const Tt=c.get(wt).get(O);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,O.__bindingPointIndex),l.set(wt,Tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},rt=null,at={},h={},d=new WeakMap,g=[],S=null,m=!1,p=null,y=null,T=null,v=null,E=null,w=null,P=null,x=new Xt(0,0,0),b=0,L=!1,U=null,H=null,Y=null,F=null,X=null,xe.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Rt,bindFramebuffer:Yt,drawBuffers:Nt,useProgram:qt,setBlending:dt,setMaterial:pt,setFlipSided:gt,setCullFace:Et,setLineWidth:Wt,setPolygonOffset:Ht,setScissorTest:Kt,activeTexture:Qt,bindTexture:D,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:A,texImage2D:tt,texImage3D:Q,pixelStorei:zt,getParameter:ut,updateUBOMapping:Gt,uniformBlockBinding:kt,texStorage2D:_t,texStorage3D:yt,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:At,viewport:bt,reset:ee}}function R_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,_){return g?new OffscreenCanvas(A,_):jr("canvas")}function m(A,_,V){let q=1;const j=he(A);if((j.width>V||j.height>V)&&(q=V/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const _t=Math.floor(q*j.width),yt=Math.floor(q*j.height);h===void 0&&(h=S(_t,yt));const tt=_?S(_t,yt):h;return tt.width=_t,tt.height=yt,tt.getContext("2d").drawImage(A,0,0,_t,yt),te("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+_t+"x"+yt+")."),tt}else return"data"in A&&te("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,_,V,q,j,_t=!1){if(A!==null){if(i[A]!==void 0)return i[A];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let yt;q&&(yt=t.get("EXT_texture_norm16"),yt||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8),V===i.UNSIGNED_SHORT&&yt&&(tt=yt.R16_EXT),V===i.SHORT&&yt&&(tt=yt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),_===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8),V===i.UNSIGNED_SHORT&&yt&&(tt=yt.RG16_EXT),V===i.SHORT&&yt&&(tt=yt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),_===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),_===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),_===i.RGB&&(V===i.UNSIGNED_SHORT&&yt&&(tt=yt.RGB16_EXT),V===i.SHORT&&yt&&(tt=yt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),_===i.RGBA){const Q=_t?Qr:ge.getTransfer(j);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=Q===Te?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&yt&&(tt=yt.RGBA16_EXT),V===i.SHORT&&yt&&(tt=yt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function E(A,_){let V;return A?_===null||_===Fn||_===Gs?V=i.DEPTH24_STENCIL8:_===Tn?V=i.DEPTH32F_STENCIL8:_===ks&&(V=i.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fn||_===Gs?V=i.DEPTH_COMPONENT24:_===Tn?V=i.DEPTH_COMPONENT32F:_===ks&&(V=i.DEPTH_COMPONENT16),V}function w(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function P(A){const _=A.target;_.removeEventListener("dispose",P),b(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),U(_)}function b(A){const _=n.get(A);if(_.__webglInit===void 0)return;const V=A.source,q=d.get(V);if(q){const j=q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(A),Object.keys(q).length===0&&d.delete(V)}n.remove(A)}function L(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const V=A.source,q=d.get(V);delete q[_.__cacheKey],a.memory.textures--}function U(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let j=0;j<_.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[q][j]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const V=A.textures;for(let q=0,j=V.length;q<j;q++){const _t=n.get(V[q]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(V[q])}n.remove(A)}let H=0;function Y(){H=0}function F(){return H}function X(A){H=A}function $(){const A=H;return A>=s.maxTextures&&te("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function K(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ht(A,_){const V=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const q=A.image;if(q===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(V,A,_);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+_)}function J(A,_){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Rt(V,A,_);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+_)}function rt(A,_){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Rt(V,A,_);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+_)}function at(A,_){const V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Yt(V,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+_)}const Ft={[bo]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},Ot={[He]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},xe={[hd]:i.NEVER,[md]:i.ALWAYS,[ud]:i.LESS,[xl]:i.LEQUAL,[dd]:i.EQUAL,[Ml]:i.GEQUAL,[fd]:i.GREATER,[pd]:i.NOTEQUAL};function re(A,_){if(_.type===Tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===da||_.magFilter===js||_.magFilter===Ei||_.minFilter===Ve||_.minFilter===da||_.minFilter===js||_.minFilter===Ei)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ft[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ft[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ft[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ot[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ot[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===He||_.minFilter!==js&&_.minFilter!==Ei||_.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(A,_){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",P));const q=_.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const _t=K(_);if(_t!==A.__cacheKey){j[_t]===void 0&&(j[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[_t].usedTimes++;const yt=j[A.__cacheKey];yt!==void 0&&(j[A.__cacheKey].usedTimes--,yt.usedTimes===0&&L(_)),A.__cacheKey=_t,A.__webglTexture=j[_t].texture}return V}function Z(A,_,V){return Math.floor(Math.floor(A/V)/_)}function it(A,_,V,q){const _t=A.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,V,q,_.data);else{_t.sort((zt,At)=>zt.start-At.start);let yt=0;for(let zt=1;zt<_t.length;zt++){const At=_t[yt],bt=_t[zt],Gt=At.start+At.count,kt=Z(bt.start,_.width,4),ee=Z(At.start,_.width,4);bt.start<=Gt+1&&kt===ee&&Z(bt.start+bt.count-1,_.width,4)===kt?At.count=Math.max(At.count,bt.start+bt.count-At.start):(++yt,_t[yt]=bt)}_t.length=yt+1;const tt=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let zt=0,At=_t.length;zt<At;zt++){const bt=_t[zt],Gt=Math.floor(bt.start/4),kt=Math.ceil(bt.count/4),ee=Gt%_.width,O=Math.floor(Gt/_.width),wt=kt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,ee,O,wt,nt,V,q,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function Rt(A,_,V){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const j=oe(A,_),_t=_.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+V);const yt=n.get(_t);if(_t.version!==yt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const nt=ge.getPrimaries(ge.workingColorSpace),Tt=_.colorSpace===ui?null:ge.getPrimaries(_.colorSpace),Lt=_.colorSpace===ui||nt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=Me(_,Q);const ut=r.convert(_.format,_.colorSpace),zt=r.convert(_.type);let At=v(_.internalFormat,ut,zt,_.normalized,_.colorSpace,_.isVideoTexture);re(q,_);let bt;const Gt=_.mipmaps,kt=_.isVideoTexture!==!0,ee=yt.__version===void 0||j===!0,O=_t.dataReady,wt=w(_,Q);if(_.isDepthTexture)At=E(_.format===bi,_.type),ee&&(kt?e.texStorage2D(i.TEXTURE_2D,1,At,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ut,zt,null));else if(_.isDataTexture)if(Gt.length>0){kt&&ee&&e.texStorage2D(i.TEXTURE_2D,wt,At,Gt[0].width,Gt[0].height);for(let nt=0,Tt=Gt.length;nt<Tt;nt++)bt=Gt[nt],kt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,bt.width,bt.height,ut,zt,bt.data):e.texImage2D(i.TEXTURE_2D,nt,At,bt.width,bt.height,0,ut,zt,bt.data);_.generateMipmaps=!1}else kt?(ee&&e.texStorage2D(i.TEXTURE_2D,wt,At,Q.width,Q.height),O&&it(_,Q,ut,zt)):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ut,zt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){kt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,Gt[0].width,Gt[0].height,Q.depth);for(let nt=0,Tt=Gt.length;nt<Tt;nt++)if(bt=Gt[nt],_.format!==An)if(ut!==null)if(kt){if(O)if(_.layerUpdates.size>0){const Lt=Ec(bt.width,bt.height,_.format,_.type);for(const ct of _.layerUpdates){const Vt=bt.data.subarray(ct*Lt/bt.data.BYTES_PER_ELEMENT,(ct+1)*Lt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,ct,bt.width,bt.height,1,ut,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,bt.width,bt.height,Q.depth,ut,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,At,bt.width,bt.height,Q.depth,0,bt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,bt.width,bt.height,Q.depth,ut,zt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,At,bt.width,bt.height,Q.depth,0,ut,zt,bt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{kt&&ee&&e.texStorage2D(i.TEXTURE_2D,wt,At,Gt[0].width,Gt[0].height);for(let nt=0,Tt=Gt.length;nt<Tt;nt++)bt=Gt[nt],_.format!==An?ut!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,bt.width,bt.height,ut,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,At,bt.width,bt.height,0,bt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,bt.width,bt.height,ut,zt,bt.data):e.texImage2D(i.TEXTURE_2D,nt,At,bt.width,bt.height,0,ut,zt,bt.data)}else if(_.isDataArrayTexture)if(kt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,Q.width,Q.height,Q.depth),O)if(_.layerUpdates.size>0){const nt=Ec(Q.width,Q.height,_.format,_.type);for(const Tt of _.layerUpdates){const Lt=Q.data.subarray(Tt*nt/Q.data.BYTES_PER_ELEMENT,(Tt+1)*nt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,Q.width,Q.height,1,ut,zt,Lt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,zt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,Q.width,Q.height,Q.depth,0,ut,zt,Q.data);else if(_.isData3DTexture)kt?(ee&&e.texStorage3D(i.TEXTURE_3D,wt,At,Q.width,Q.height,Q.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,zt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,At,Q.width,Q.height,Q.depth,0,ut,zt,Q.data);else if(_.isFramebufferTexture){if(ee)if(kt)e.texStorage2D(i.TEXTURE_2D,wt,At,Q.width,Q.height);else{let nt=Q.width,Tt=Q.height;for(let Lt=0;Lt<wt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,At,nt,Tt,0,ut,zt,null),nt>>=1,Tt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Q.parentNode!==nt){nt.appendChild(Q),f.add(_),nt.onpaint=Tt=>{const Lt=Tt.changedElements;for(const ct of f)Lt.includes(ct.image)&&(ct.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const Lt=i.RGBA,ct=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,ct,Vt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(kt&&ee){const nt=he(Gt[0]);e.texStorage2D(i.TEXTURE_2D,wt,At,nt.width,nt.height)}for(let nt=0,Tt=Gt.length;nt<Tt;nt++)bt=Gt[nt],kt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut,zt,bt):e.texImage2D(i.TEXTURE_2D,nt,At,ut,zt,bt);_.generateMipmaps=!1}else if(kt){if(ee){const nt=he(Q);e.texStorage2D(i.TEXTURE_2D,wt,At,nt.width,nt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,zt,Q)}else e.texImage2D(i.TEXTURE_2D,0,At,ut,zt,Q);p(_)&&y(q),yt.__version=_t.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Yt(A,_,V){if(_.image.length!==6)return;const q=oe(A,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const _t=n.get(j);if(j.version!==_t.__version||q===!0){e.activeTexture(i.TEXTURE0+V);const yt=ge.getPrimaries(ge.workingColorSpace),tt=_.colorSpace===ui?null:ge.getPrimaries(_.colorSpace),Q=_.colorSpace===ui||yt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ut=_.isCompressedTexture||_.image[0].isCompressedTexture,zt=_.image[0]&&_.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!ut&&!zt?At[ct]=m(_.image[ct],!0,s.maxCubemapSize):At[ct]=zt?_.image[ct].image:_.image[ct],At[ct]=Me(_,At[ct]);const bt=At[0],Gt=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),ee=v(_.internalFormat,Gt,kt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,wt=_t.__version===void 0||q===!0,nt=j.dataReady;let Tt=w(_,bt);re(i.TEXTURE_CUBE_MAP,_);let Lt;if(ut){O&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ee,bt.width,bt.height);for(let ct=0;ct<6;ct++){Lt=At[ct].mipmaps;for(let Vt=0;Vt<Lt.length;Vt++){const Bt=Lt[Vt];_.format!==An?Gt!==null?O?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Bt.width,Bt.height,Gt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,ee,Bt.width,Bt.height,0,Bt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Bt.width,Bt.height,Gt,kt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,ee,Bt.width,Bt.height,0,Gt,kt,Bt.data)}}}else{if(Lt=_.mipmaps,O&&wt){Lt.length>0&&Tt++;const ct=he(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ee,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(zt){O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,Gt,kt,At[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ee,At[ct].width,At[ct].height,0,Gt,kt,At[ct].data);for(let Vt=0;Vt<Lt.length;Vt++){const de=Lt[Vt].image[ct].image;O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,de.width,de.height,Gt,kt,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,ee,de.width,de.height,0,Gt,kt,de.data)}}else{O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Gt,kt,At[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ee,Gt,kt,At[ct]);for(let Vt=0;Vt<Lt.length;Vt++){const Bt=Lt[Vt];O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Gt,kt,Bt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,ee,Gt,kt,Bt.image[ct])}}}p(_)&&y(i.TEXTURE_CUBE_MAP),_t.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Nt(A,_,V,q,j,_t){const yt=r.convert(V.format,V.colorSpace),tt=r.convert(V.type),Q=v(V.internalFormat,yt,tt,V.normalized,V.colorSpace),ut=n.get(_),zt=n.get(V);if(zt.__renderTarget=_,!ut.__hasExternalTextures){const At=Math.max(1,_.width>>_t),bt=Math.max(1,_.height>>_t);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,_t,Q,At,bt,_.depth,0,yt,tt,null):e.texImage2D(j,_t,Q,At,bt,0,yt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Qt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,zt.__webglTexture,0,Kt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,zt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(A,_,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const q=_.depthTexture,j=q&&q.isDepthTexture?q.type:null,_t=E(_.stencilBuffer,j),yt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(_),_t,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(_),_t,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_t,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{const q=_.textures;for(let j=0;j<q.length;j++){const _t=q[j],yt=r.convert(_t.format,_t.colorSpace),tt=r.convert(_t.type),Q=v(_t.internalFormat,yt,tt,_t.normalized,_t.colorSpace);Qt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(_),Q,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(A,_,V){const q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),re(i.TEXTURE_CUBE_MAP,_.depthTexture);const ut=r.convert(_.depthTexture.format),zt=r.convert(_.depthTexture.type);let At;_.depthTexture.format===Qn?At=i.DEPTH_COMPONENT24:_.depthTexture.format===bi&&(At=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,At,_.width,_.height,0,ut,zt,null)}}else ht(_.depthTexture,0);const _t=j.__webglTexture,yt=Kt(_),tt=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,Q=_.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qn)Qt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,_t,0);else if(_.depthTexture.format===bi)Qt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){const _=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)ye(_.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?ye(_.__webglFramebuffer[0],A,0):ye(_.__webglFramebuffer,A,0)}else if(V){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),qt(_.__webglDepthbuffer[q],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,_t)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),qt(_.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(A,_,V){const q=n.get(A);_!==void 0&&Nt(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&st(A)}function pt(A){const _=A.texture,V=n.get(A),q=n.get(_);A.addEventListener("dispose",x);const j=A.textures,_t=A.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),_t){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let Q=0;Q<_.mipmaps.length;Q++)V.__webglFramebuffer[tt][Q]=i.createFramebuffer()}else V.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)V.__webglFramebuffer[tt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let tt=0,Q=j.length;tt<Q;tt++){const ut=n.get(j[tt]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Qt(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){const Q=j[tt];V.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);const ut=r.convert(Q.format,Q.colorSpace),zt=r.convert(Q.type),At=v(Q.internalFormat,ut,zt,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),bt=Kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),re(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Nt(V.__webglFramebuffer[tt][Q],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Q);else Nt(V.__webglFramebuffer[tt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(_)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let tt=0,Q=j.length;tt<Q;tt++){const ut=j[tt],zt=n.get(ut);let At=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(At=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,zt.__webglTexture),re(At,ut),Nt(V.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+tt,At,0),p(ut)&&y(At)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,q.__webglTexture),re(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Nt(V.__webglFramebuffer[Q],A,_,i.COLOR_ATTACHMENT0,tt,Q);else Nt(V.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,tt,0);p(_)&&y(tt),e.unbindTexture()}A.depthBuffer&&st(A)}function gt(A){const _=A.textures;for(let V=0,q=_.length;V<q;V++){const j=_[V];if(p(j)){const _t=T(A),yt=n.get(j).__webglTexture;e.bindTexture(_t,yt),y(_t),e.unbindTexture()}}}const Et=[],Wt=[];function Ht(A){if(A.samples>0){if(Qt(A)===!1){const _=A.textures,V=A.width,q=A.height;let j=i.COLOR_BUFFER_BIT;const _t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),tt=_.length>1;if(tt)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const zt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,j,i.NEAREST),l===!0&&(Et.length=0,Wt.length=0,Et.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Et.push(_t),Wt.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const zt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Kt(A){return Math.min(s.maxSamples,A.samples)}function Qt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Me(A,_){const V=A.colorSpace,q=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Jr&&V!==ui&&(ge.getTransfer(V)===Te?(q!==An||j!==un)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Se("WebGLTextures: Unsupported texture color space:",V)),_}function he(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.getTextureUnits=F,this.setTextureUnits=X,this.setTexture2D=ht,this.setTexture2DArray=J,this.setTexture3D=rt,this.setTextureCube=at,this.rebindTextures=dt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function C_(i,t){function e(n,s=ui){let r;const a=ge.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Kh)return i.ALPHA;if(n===Zh)return i.RGB;if(n===An)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(a===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Ro||n===Co||n===Po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Io||n===Do||n===No||n===Uo||n===Kr||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Io)return a===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return r.COMPRESSED_RG11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Qo||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return a===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===Zr||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ru(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const S=typeof XRWebGLBinding<"u",m=new I_,p={},y=e.getContextAttributes();let T=null,v=null;const E=[],w=[],P=new vt;let x=null,b=null;const L=new En;L.viewport=new Le;const U=new En;U.viewport=new Le;const H=[L,U],Y=new Gf;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=E[Z];return it===void 0&&(it=new Sa,E[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=E[Z];return it===void 0&&(it=new Sa,E[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=E[Z];return it===void 0&&(it=new Sa,E[Z]=it),it.getHandSpace()};function $(Z){const it=w.indexOf(Z.inputSource);if(it===-1)return;const Rt=E[it];Rt!==void 0&&(Rt.update(Z.inputSource,Z.frame,c||a),Rt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ht);for(let Z=0;Z<E.length;Z++){const it=w[Z];it!==null&&(w[Z]=null,E[Z].disconnect(it))}F=null,X=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(T),d=null,h=null,f=null,s=null,v=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),b!==null){const Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Yt=null,Nt=null;y.depth&&(Nt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?bi:Qn,Yt=y.stencil?Gs:Fn);const qt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(qt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Rn(h.textureWidth,h.textureHeight,{format:An,type:un,depthTexture:new Ws(h.textureWidth,h.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Rn(d.framebufferWidth,d.framebufferHeight,{format:An,type:un,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(Z){for(let it=0;it<Z.removed.length;it++){const Rt=Z.removed[it],Yt=w.indexOf(Rt);Yt>=0&&(w[Yt]=null,E[Yt].disconnect(Rt))}for(let it=0;it<Z.added.length;it++){const Rt=Z.added[it];let Yt=w.indexOf(Rt);if(Yt===-1){for(let qt=0;qt<E.length;qt++)if(qt>=w.length){w.push(Rt),Yt=qt;break}else if(w[qt]===null){w[qt]=Rt,Yt=qt;break}if(Yt===-1)break}const Nt=E[Yt];Nt&&Nt.connect(Rt)}}const J=new I,rt=new I;function at(Z,it,Rt){J.setFromMatrixPosition(it.matrixWorld),rt.setFromMatrixPosition(Rt.matrixWorld);const Yt=J.distanceTo(rt),Nt=it.projectionMatrix.elements,qt=Rt.projectionMatrix.elements,ye=Nt[14]/(Nt[10]-1),st=Nt[14]/(Nt[10]+1),dt=(Nt[9]+1)/Nt[5],pt=(Nt[9]-1)/Nt[5],gt=(Nt[8]-1)/Nt[0],Et=(qt[8]+1)/qt[0],Wt=ye*gt,Ht=ye*Et,Kt=Yt/(-gt+Et),Qt=Kt*-gt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qt),Z.translateZ(Kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const D=ye+Kt,Me=st+Kt,he=Wt-Qt,A=Ht+(Yt-Qt),_=dt*st/Me*D,V=pt*st/Me*D;Z.projectionMatrix.makePerspective(he,A,_,V,D,Me),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ft(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,Rt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),Y.near=U.near=L.near=it,Y.far=U.far=L.far=Rt,(F!==Y.near||X!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),F=Y.near,X=Y.far),Y.layers.mask=Z.layers.mask|6,L.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;const Yt=Z.parent,Nt=Y.cameras;Ft(Y,Yt);for(let qt=0;qt<Nt.length;qt++)Ft(Nt[qt],Yt);Nt.length===2?at(Y,L,U):Y.projectionMatrix.copy(L.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ot(Z,Y,Yt)};function Ot(Z,it,Rt){Rt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Rt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(Z){return p[Z]};let xe=null;function re(Z,it){if(u=it.getViewerPose(c||a),g=it,u!==null){const Rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Yt=!1;Rt.length!==Y.cameras.length&&(Y.cameras.length=0,Yt=!0);for(let st=0;st<Rt.length;st++){const dt=Rt[st];let pt=null;if(d!==null)pt=d.getViewport(dt);else{const Et=f.getViewSubImage(h,dt);pt=Et.viewport,st===0&&(t.setRenderTargetTextures(v,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(v))}let gt=H[st];gt===void 0&&(gt=new En,gt.layers.enable(st),gt.viewport=new Le,H[st]=gt),gt.matrix.fromArray(dt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(dt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(Y.matrix.copy(gt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Yt===!0&&Y.cameras.push(gt)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const st=f.getDepthInformation(Rt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Nt&&Nt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let st=0;st<Rt.length;st++){const dt=Rt[st].camera;if(dt){let pt=p[dt];pt||(pt=new ru,p[dt]=pt);const gt=f.getCameraImage(dt);pt.sourceTexture=gt}}}}for(let Rt=0;Rt<E.length;Rt++){const Yt=w[Rt],Nt=E[Rt];Yt!==null&&Nt!==void 0&&Nt.update(Yt,it,c||a)}xe&&xe(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const oe=new gu;oe.setAnimationLoop(re),this.setAnimationLoop=function(Z){xe=Z},this.dispose=function(){}}}const N_=new _e,wu=new se;wu.set(-1,0,0,0,1,0,0,0,1);function U_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),T=y.envMap,v=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const w=E.program;n.uniformBlockBinding(v,w)}function c(v,E){let w=s[v.id];w===void 0&&(m(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",y));const P=E.program;n.updateUBOMapping(v,P);const x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){const E=f();v.__bindingPointIndex=E;const w=i.createBuffer(),P=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=s[v.id],w=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,b=w.length;x<b;x++){const L=w[x];if(Array.isArray(L))for(let U=0,H=L.length;U<H;U++)d(L[U],x,U,P);else d(L,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,E,w,P){if(S(v,E,w,P)===!0){const x=v.__offset,b=v.value;if(Array.isArray(b)){let L=0;for(let U=0;U<b.length;U++){const H=b[U],Y=p(H);g(H,v.__data,L),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,w){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,w)}function S(v,E,w,P){const x=v.value,b=E+"_"+w;if(P[b]===void 0)return typeof x=="number"||typeof x=="boolean"?P[b]=x:ArrayBuffer.isView(x)?P[b]=x.slice():P[b]=x.clone(),!0;{const L=P[b];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return P[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(v){const E=v.uniforms;let w=0;const P=16;for(let b=0,L=E.length;b<L;b++){const U=Array.isArray(E[b])?E[b]:[E[b]];for(let H=0,Y=U.length;H<Y;H++){const F=U[H],X=Array.isArray(F.value)?F.value:[F.value];for(let $=0,K=X.length;$<K;$++){const ht=X[$],J=p(ht),rt=w%P,at=rt%J.boundary,Ft=rt+at;w+=at,Ft!==0&&P-Ft<J.storage&&(w+=P-Ft),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=J.storage}}}const x=w%P;return x>0&&(w+=P-x),v.__size=w,v.__cache={},this}function p(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):te("WebGLRenderer: Unsupported uniform value type.",v),E}function y(v){const E=v.target;E.removeEventListener("dispose",y);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const O_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function B_(){return Ln===null&&(Ln=new iu(O_,16,16,Pi,On),Ln.name="DFG_LUT",Ln.minFilter=Ve,Ln.magFilter=Ve,Ln.wrapS=$n,Ln.wrapT=$n,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class z_{constructor(t={}){const{canvas:e=vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=d,m=new Set([vl,_l,gl]),p=new Set([un,Fn,ks,Gs,fl,pl]),y=new Uint32Array(4),T=new Int32Array(4),v=new I;let E=null,w=null;const P=[],x=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,H=null,Y=null,F=null,X=null;this._outputColorSpace=cn;let $=0,K=0,ht=null,J=-1,rt=null;const at=new Le,Ft=new Le;let Ot=null;const xe=new Xt(0);let re=0,oe=e.width,Z=e.height,it=1,Rt=null,Yt=null;const Nt=new Le(0,0,oe,Z),qt=new Le(0,0,oe,Z);let ye=!1;const st=new yl;let dt=!1,pt=!1;const gt=new _e,Et=new I,Wt=new Le,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Qt(){return ht===null?it:1}let D=n;function Me(M,R){return e.getContext(M,R)}let he,A,_,V,q,j,_t,yt,tt,Q,ut,zt,At,bt,Gt,kt,ee,O,wt,nt,Tt,Lt,ct;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),D===null){const R="webgl2";if(D=Me(R,M),D===null)throw Me(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(M){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),Se("WebGLRenderer: "+M.message),M}function Vt(){he=new Bm(D),he.init(),Tt=new C_(D,he),A=new Rm(D,he,t,Tt),_=new A_(D,he),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),F=D.createFramebuffer(),X=D.createFramebuffer(),V=new Gm(D),q=new f_,j=new R_(D,he,_,q,A,Tt,V),_t=new Om(L),yt=new Vf(D),Lt=new Tm(D,yt),tt=new zm(D,yt,V,Lt),Q=new Vm(D,tt,yt,Lt,V),O=new Hm(D,A,j),Gt=new Cm(q),ut=new d_(L,_t,he,A,Lt,Gt),zt=new U_(L,q),At=new m_,bt=new S_(he),ee=new bm(L,_t,_,Q,g,l),kt=new T_(L,Q,A),ct=new F_(D,V,A,_),wt=new Am(D,he,V),nt=new km(D,he,V),V.programs=ut.programs,L.capabilities=A,L.extensions=he,L.properties=q,L.renderLists=At,L.shadowMap=kt,L.state=_,L.info=V}S!==un&&(b=new Xm(S,e.width,e.height,o,s,r));const Bt=new D_(L,D);this.xr=Bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(M){M!==void 0&&(it=M,this.setSize(oe,Z,!1))},this.getSize=function(M){return M.set(oe,Z)},this.setSize=function(M,R,G=!0){if(Bt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=M,Z=R,e.width=Math.floor(M*it),e.height=Math.floor(R*it),G===!0&&(e.style.width=M+"px",e.style.height=R+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(oe*it,Z*it).floor()},this.setDrawingBufferSize=function(M,R,G){oe=M,Z=R,it=G,e.width=Math.floor(M*G),e.height=Math.floor(R*G),this.setViewport(0,0,M,R)},this.setEffects=function(M){if(S===un){Se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let R=0;R<M.length;R++)if(M[R].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(at)},this.getViewport=function(M){return M.copy(Nt)},this.setViewport=function(M,R,G,B){M.isVector4?Nt.set(M.x,M.y,M.z,M.w):Nt.set(M,R,G,B),_.viewport(at.copy(Nt).multiplyScalar(it).round())},this.getScissor=function(M){return M.copy(qt)},this.setScissor=function(M,R,G,B){M.isVector4?qt.set(M.x,M.y,M.z,M.w):qt.set(M,R,G,B),_.scissor(Ft.copy(qt).multiplyScalar(it).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(M){_.setScissorTest(ye=M)},this.setOpaqueSort=function(M){Rt=M},this.setTransparentSort=function(M){Yt=M},this.getClearColor=function(M){return M.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(M=!0,R=!0,G=!0){let B=0;if(M){let N=!1;if(ht!==null){const ft=ht.texture.format;N=m.has(ft)}if(N){const ft=ht.texture.type,xt=p.has(ft),mt=ee.getClearColor(),It=ee.getClearAlpha(),Ut=mt.r,Zt=mt.g,le=mt.b;xt?(y[0]=Ut,y[1]=Zt,y[2]=le,y[3]=It,D.clearBufferuiv(D.COLOR,0,y)):(T[0]=Ut,T[1]=Zt,T[2]=le,T[3]=It,D.clearBufferiv(D.COLOR,0,T))}else B|=D.COLOR_BUFFER_BIT}R&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),ee.dispose(),At.dispose(),bt.dispose(),q.dispose(),_t.dispose(),Q.dispose(),Lt.dispose(),ct.dispose(),ut.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",rn),Bt.removeEventListener("sessionend",fs),Cn.stop()};function de(M){M.preventDefault(),$l("WebGLRenderer: Context Lost."),U=!0}function fe(){$l("WebGLRenderer: Context Restored."),U=!1;const M=V.autoReset,R=kt.enabled,G=kt.autoUpdate,B=kt.needsUpdate,N=kt.type;Vt(),V.autoReset=M,kt.enabled=R,kt.autoUpdate=G,kt.needsUpdate=B,kt.type=N}function Xe(M){Se("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function sn(M){const R=M.target;R.removeEventListener("dispose",sn),ds(R)}function ds(M){fi(M),q.remove(M)}function fi(M){const R=q.get(M).programs;R!==void 0&&(R.forEach(function(G){ut.releaseProgram(G)}),M.isShaderMaterial&&ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,G,B,N,ft){R===null&&(R=Ht);const xt=N.isMesh&&N.matrixWorld.determinantAffine()<0,mt=ot(M,R,G,B,N);_.setMaterial(B,xt);let It=G.index,Ut=1;if(B.wireframe===!0){if(It=tt.getWireframeAttribute(G),It===void 0)return;Ut=2}const Zt=G.drawRange,le=G.attributes.position;let k=Zt.start*Ut,ne=(Zt.start+Zt.count)*Ut;ft!==null&&(k=Math.max(k,ft.start*Ut),ne=Math.min(ne,(ft.start+ft.count)*Ut)),It!==null?(k=Math.max(k,0),ne=Math.min(ne,It.count)):le!=null&&(k=Math.max(k,0),ne=Math.min(ne,le.count));const Ce=ne-k;if(Ce<0||Ce===1/0)return;Lt.setup(N,B,mt,G,It);let ae,ie=wt;if(It!==null&&(ae=yt.get(It),ie=nt,ie.setIndex(ae)),N.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Qt()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(N.isLine){let be=B.linewidth;be===void 0&&(be=1),_.setLineWidth(be*Qt()),N.isLineSegments?ie.setMode(D.LINES):N.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else N.isPoints?ie.setMode(D.POINTS):N.isSprite&&ie.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(he.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,Ct=N._multiDrawCounts,ze=N._multiDrawCount,me=It?yt.get(It).bytesPerElement:1,ke=q.get(B).currentProgram.getUniforms();for(let qe=0;qe<ze;qe++)ke.setValue(D,"_gl_DrawID",qe),ie.render(be[qe]/me,Ct[qe])}else if(N.isInstancedMesh)ie.renderInstances(k,Ce,N.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ct=Math.min(G.instanceCount,be);ie.renderInstances(k,Ce,Ct)}else ie.render(k,Ce)};function pi(M,R,G,B){H!==null&&M.isNodeMaterial&&H.setObject(B,M),dt===!0&&Gt.setState(M,G,!1),M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,ni(M,R,B),M.side=Ri,M.needsUpdate=!0,ni(M,R,B),M.side=hn):ni(M,R,B)}this.compile=function(M,R,G=null){G===null&&(G=M),H!==null&&H.renderStart(M,R,G),w=bt.get(G),w.init(R),x.push(w),G.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),M!==G&&M.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),pt=this.localClippingEnabled,dt=Gt.init(this.clippingPlanes,pt),dt===!0&&Gt.setGlobalState(this.clippingPlanes,R),H!==null&&kt.render(w.state.shadowsArray,G,R);const B=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ft=N.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const mt=ft[xt];pi(mt,G,R,N),B.add(mt)}else pi(ft,G,R,N),B.add(ft)}),w=x.pop(),H!==null&&H.renderEnd(),B},this.compileAsync=function(M,R,G=null){const B=this.compile(M,R,G);return new Promise(N=>{function ft(){if(B.forEach(function(xt){const It=q.get(xt).currentProgram;(It===void 0||It.isReady())&&B.delete(xt)}),B.size===0){N(M);return}setTimeout(ft,10)}he.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ei=null;function Js(M){ei&&ei(M)}function rn(){Cn.stop()}function fs(){Cn.start()}const Cn=new gu;Cn.setAnimationLoop(Js),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(M){ei=M,Bt.setAnimationLoop(M),M===null?Cn.stop():Cn.start()},Bt.addEventListener("sessionstart",rn),Bt.addEventListener("sessionend",fs),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){Se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(M,R);const G=Bt.enabled===!0&&Bt.isPresenting===!0,B=b!==null&&(ht===null||G)&&b.begin(L,ht);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(R),R=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,R,ht),w=bt.get(M,x.length),w.init(R),w.state.textureUnits=j.getTextureUnits(),x.push(w),gt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),st.setFromProjectionMatrix(gt,Nn,R.reversedDepth),pt=this.localClippingEnabled,dt=Gt.init(this.clippingPlanes,pt),E=At.get(M,P.length),E.init(),P.push(E),Bt.enabled===!0&&Bt.isPresenting===!0){const xt=L.xr.getDepthSensingMesh();xt!==null&&Fi(xt,R,-1/0,L.sortObjects)}Fi(M,R,0,L.sortObjects),E.finish(),H!==null&&H.updateLights(w.state.lightsArray),L.sortObjects===!0&&E.sort(Rt,Yt),Kt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Kt&&ee.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Gt.beginShadows();const N=w.state.shadowsArray;if(kt.render(N,M,R),dt===!0&&Gt.endShadows(),(B&&b.hasRenderPass())===!1){const xt=E.opaque,mt=E.transmissive;if(w.setupLights(),R.isArrayCamera){const It=R.cameras;if(mt.length>0)for(let Ut=0,Zt=It.length;Ut<Zt;Ut++){const le=It[Ut];ms(xt,mt,M,le)}Kt&&ee.render(M);for(let Ut=0,Zt=It.length;Ut<Zt;Ut++){const le=It[Ut];ps(E,M,le,le.viewport)}}else mt.length>0&&ms(xt,mt,M,R),Kt&&ee.render(M),ps(E,M,R)}ht!==null&&K===0&&(j.updateMultisampleRenderTarget(ht),j.updateRenderTargetMipmap(ht)),B&&b.end(L),M.isScene===!0&&M.onAfterRender(L,M,R),Lt.resetDefaultState(),J=-1,rt=null,x.pop(),x.length>0?(w=x[x.length-1],j.setTextureUnits(w.state.textureUnits),dt===!0&&Gt.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,H!==null&&H.renderEnd()};function Fi(M,R,G,B){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(st)){B&&Wt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);const xt=Q.update(M),mt=M.material;mt.visible&&E.push(M,xt,mt,G,Wt.z,null,R)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(st))){const xt=Q.update(M),mt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Wt.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Wt.copy(xt.boundingSphere.center)),Wt.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(mt)){const It=xt.groups;for(let Ut=0,Zt=It.length;Ut<Zt;Ut++){const le=It[Ut],k=mt[le.materialIndex];k&&k.visible&&E.push(M,xt,k,G,Wt.z,le,R)}}else mt.visible&&E.push(M,xt,mt,G,Wt.z,null,R)}}const ft=M.children;for(let xt=0,mt=ft.length;xt<mt;xt++)Fi(ft[xt],R,G,B)}function ps(M,R,G,B){const{opaque:N,transmissive:ft,transparent:xt}=M;w.setupLightsView(G),dt===!0&&Gt.setGlobalState(L.clippingPlanes,G),B&&_.viewport(at.copy(B)),N.length>0&&mi(N,R,G),ft.length>0&&mi(ft,R,G),xt.length>0&&mi(xt,R,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ms(M,R,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const k=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Rn(1,1,{generateMipmaps:!0,type:k?On:un,minFilter:Ei,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const ft=w.state.transmissionRenderTarget[B.id],xt=B.viewport||at;ft.setSize(xt.z*L.transmissionResolutionScale,xt.w*L.transmissionResolutionScale);const mt=L.getRenderTarget(),It=L.getActiveCubeFace(),Ut=L.getActiveMipmapLevel();L.setRenderTarget(ft),L.getClearColor(xe),re=L.getClearAlpha(),re<1&&L.setClearColor(16777215,.5),L.clear(),Kt&&ee.render(G);const Zt=L.toneMapping;L.toneMapping=Un;const le=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),dt===!0&&Gt.setGlobalState(L.clippingPlanes,B),mi(M,G,B),j.updateMultisampleRenderTarget(ft),j.updateRenderTargetMipmap(ft),he.has("WEBGL_multisampled_render_to_texture")===!1){let k=!1;for(let ne=0,Ce=R.length;ne<Ce;ne++){const ae=R[ne],{object:ie,geometry:be,material:Ct,group:ze}=ae;if(Ct.side===hn&&ie.layers.test(B.layers)){const me=Ct.side;Ct.side=nn,Ct.needsUpdate=!0,gs(ie,G,B,be,Ct,ze),Ct.side=me,Ct.needsUpdate=!0,k=!0}}k===!0&&(j.updateMultisampleRenderTarget(ft),j.updateRenderTargetMipmap(ft))}L.setRenderTarget(mt,It,Ut),L.setClearColor(xe,re),le!==void 0&&(B.viewport=le),L.toneMapping=Zt}function mi(M,R,G){const B=R.isScene===!0?R.overrideMaterial:null;for(let N=0,ft=M.length;N<ft;N++){const xt=M[N],{object:mt,geometry:It,group:Ut}=xt;let Zt=xt.material;Zt.allowOverride===!0&&B!==null&&(Zt=B),mt.layers.test(G.layers)&&gs(mt,R,G,It,Zt,Ut)}}function gs(M,R,G,B,N,ft){H!==null&&N.isNodeMaterial&&H.setObject(M,N),M.onBeforeRender(L,R,G,B,N,ft),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(L,R,G,B,M,ft),N.transparent===!0&&N.side===hn&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,L.renderBufferDirect(G,R,B,N,M,ft),N.side=Ri,N.needsUpdate=!0,L.renderBufferDirect(G,R,B,N,M,ft),N.side=hn):L.renderBufferDirect(G,R,B,N,M,ft),M.onAfterRender(L,R,G,B,N,ft)}function ni(M,R,G){R.isScene!==!0&&(R=Ht);const B=q.get(M),N=w.state.lights,ft=w.state.shadowsArray,xt=N.state.version,mt=ut.getParameters(M,N.state,ft,R,G,w.state.lightProbeGridArray),It=ut.getProgramCacheKey(mt);let Ut=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,B.fog=R.fog;const Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=_t.get(M.envMap||B.environment,Zt),B.envMapRotation=B.environment!==null&&M.envMap===null?R.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",sn),Ut=new Map,B.programs=Ut);let le=Ut.get(It);if(le!==void 0){if(B.currentProgram===le&&B.lightsStateVersion===xt)return z(M,mt),le}else mt.uniforms=ut.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,G,mt),M.onBeforeCompile(mt,L),le=ut.acquireProgram(mt,It),Ut.set(It,le),B.uniforms=mt.uniforms;const k=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(k.clippingPlanes=Gt.uniform),z(M,mt),B.needsLights=Mt(M),B.lightsStateVersion=xt,B.needsLights&&(k.ambientLightColor.value=N.state.ambient,k.lightProbe.value=N.state.probe,k.sunLights.value=N.state.sun,k.sunLightShadows.value=N.state.sunShadow,k.directionalLights.value=N.state.directional,k.directionalLightShadows.value=N.state.directionalShadow,k.spotLights.value=N.state.spot,k.spotLightShadows.value=N.state.spotShadow,k.rectAreaLights.value=N.state.rectArea,k.ltc_1.value=N.state.rectAreaLTC1,k.ltc_2.value=N.state.rectAreaLTC2,k.pointLights.value=N.state.point,k.pointLightShadows.value=N.state.pointShadow,k.hemisphereLights.value=N.state.hemi,k.sunShadowMatrix.value=N.state.sunShadowMatrix,k.sunShadowCascade.value=N.state.sunShadowCascade,k.directionalShadowMatrix.value=N.state.directionalShadowMatrix,k.spotLightMatrix.value=N.state.spotLightMatrix,k.spotLightMap.value=N.state.spotLightMap,k.pointShadowMatrix.value=N.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=le,B.uniformsList=null,le}function C(M){if(M.uniformsList===null){const R=M.currentProgram.getUniforms();M.uniformsList=Yr.seqWithValue(R.seq,M.uniforms)}return M.uniformsList}function z(M,R){const G=q.get(M);G.outputColorSpace=R.outputColorSpace,G.batching=R.batching,G.batchingColor=R.batchingColor,G.instancing=R.instancing,G.instancingColor=R.instancingColor,G.instancingMorph=R.instancingMorph,G.skinning=R.skinning,G.morphTargets=R.morphTargets,G.morphNormals=R.morphNormals,G.morphColors=R.morphColors,G.morphTargetsCount=R.morphTargetsCount,G.numClippingPlanes=R.numClippingPlanes,G.numIntersection=R.numClipIntersection,G.vertexAlphas=R.vertexAlphas,G.vertexTangents=R.vertexTangents,G.toneMapping=R.toneMapping}function W(M,R){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(R.matrixWorld);for(let G=0,B=M.length;G<B;G++){const N=M[G];if(N.texture!==null&&N.boundingBox.containsPoint(v))return N}return null}function ot(M,R,G,B,N){R.isScene!==!0&&(R=Ht),j.resetTextureUnits();const ft=R.fog,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?R.environment:null,mt=ht===null?L.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ge.workingColorSpace,It=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ut=_t.get(B.envMap||xt,It),Zt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,le=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),k=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,Ce=!!G.morphAttributes.color;let ae=Un;B.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ae=L.toneMapping);const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=ie!==void 0?ie.length:0,Ct=q.get(B),ze=w.state.lights;if(dt===!0&&(pt===!0||M!==rt)){const Ae=M===rt&&B.id===J;Gt.setState(B,M,Ae)}let me=!1;B.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ze.state.version||Ct.outputColorSpace!==mt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Ut||B.fog===!0&&Ct.fog!==ft||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Gt.numPlanes||Ct.numIntersection!==Gt.numIntersection)||Ct.vertexAlphas!==Zt||Ct.vertexTangents!==le||Ct.morphTargets!==k||Ct.morphNormals!==ne||Ct.morphColors!==Ce||Ct.toneMapping!==ae||Ct.morphTargetsCount!==be||!!Ct.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Ct.__version=B.version);let ke=Ct.currentProgram;me===!0&&(ke=ni(B,R,N),H&&B.isNodeMaterial&&H.onUpdateProgram(B,ke,Ct));let qe=!1,je=!1,kn=!1;const $t=ke.getUniforms(),we=Ct.uniforms;if(_.useProgram(ke.program)&&(qe=!0,je=!0,kn=!0),B.id!==J&&(J=B.id,je=!0),Ct.needsLights){const Ae=W(w.state.lightProbeGridArray,N);Ct.lightProbeGrid!==Ae&&(Ct.lightProbeGrid=Ae,je=!0)}if(qe||rt!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),$t.setValue(D,"projectionMatrix",M.projectionMatrix),$t.setValue(D,"viewMatrix",M.matrixWorldInverse);const vn=$t.map.cameraPosition;vn!==void 0&&vn.setValue(D,Et.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&$t.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$t.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),rt!==M&&(rt=M,je=!0,kn=!0)}if(Ct.needsLights&&(ze.state.sunShadowMap.length>0&&$t.setValue(D,"sunShadowMap",ze.state.sunShadowMap,j),ze.state.directionalShadowMap.length>0&&$t.setValue(D,"directionalShadowMap",ze.state.directionalShadowMap,j),ze.state.spotShadowMap.length>0&&$t.setValue(D,"spotShadowMap",ze.state.spotShadowMap,j),ze.state.pointShadowMap.length>0&&$t.setValue(D,"pointShadowMap",ze.state.pointShadowMap,j)),N.isSkinnedMesh){$t.setOptional(D,N,"bindMatrix"),$t.setOptional(D,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),$t.setValue(D,"boneTexture",Ae.boneTexture,j))}N.isBatchedMesh&&($t.setOptional(D,N,"batchingTexture"),$t.setValue(D,"batchingTexture",N._matricesTexture,j),$t.setOptional(D,N,"batchingIdTexture"),$t.setValue(D,"batchingIdTexture",N._indirectTexture,j),$t.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&$t.setValue(D,"batchingColorTexture",N._colorsTexture,j));const Ze=G.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&O.update(N,G,ke),(je||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,$t.setValue(D,"receiveShadow",N.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&R.environment!==null&&(we.envMapIntensity.value=R.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=B_()),je){if($t.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ct.needsLights&&Dt(we,kn),ft&&B.fog===!0&&zt.refreshFogUniforms(we,ft),zt.refreshMaterialUniforms(we,B,it,Z,w.state.transmissionRenderTarget[M.id]),Ct.needsLights&&Ct.lightProbeGrid){const Ae=Ct.lightProbeGrid;we.probesSH.value=Ae.texture,we.probesMin.value.copy(Ae.boundingBox.min),we.probesMax.value.copy(Ae.boundingBox.max),we.probesResolution.value.copy(Ae.resolution)}Yr.upload(D,C(Ct),we,j)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Yr.upload(D,C(Ct),we,j),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$t.setValue(D,"center",N.center),$t.setValue(D,"modelViewMatrix",N.modelViewMatrix),$t.setValue(D,"normalMatrix",N.normalMatrix),$t.setValue(D,"modelMatrix",N.matrixWorld),B.uniformsGroups!==void 0){const Ae=B.uniformsGroups;for(let vn=0,Gn=Ae.length;vn<Gn;vn++){const xn=Ae[vn];ct.update(xn,ke),ct.bind(xn,ke)}}return ke}function Dt(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.sunLights.needsUpdate=R,M.sunLightShadows.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function Mt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(M,R,G){const B=q.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=R,q.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,R){const G=q.get(M);G.__webglFramebuffer=R,G.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,G=0){ht=M,$=R,K=G;let B=null,N=!1,ft=!1;if(M){const mt=q.get(M);if(mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,mt.__webglFramebuffer),at.copy(M.viewport),Ft.copy(M.scissor),Ot=M.scissorTest,_.viewport(at),_.scissor(Ft),_.setScissorTest(Ot),J=-1;return}else if(mt.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(mt.__hasExternalTextures)j.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Zt=M.depthTexture;if(mt.__boundDepthTexture!==Zt){if(Zt!==null&&q.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}const It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ut=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[R])?B=Ut[R][G]:B=Ut[R],N=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?B=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[G]:B=Ut,at.copy(M.viewport),Ft.copy(M.scissor),Ot=M.scissorTest}else at.copy(Nt).multiplyScalar(it).floor(),Ft.copy(qt).multiplyScalar(it).floor(),Ot=ye;if(G!==0&&(B=Y),_.bindFramebuffer(D.FRAMEBUFFER,B)&&_.drawBuffers(M,B),_.viewport(at),_.scissor(Ft),_.setScissorTest(Ot),N){const mt=q.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+R,mt.__webglTexture,G)}else if(ft){const mt=R;for(let It=0;It<M.textures.length;It++){const Ut=q.get(M.textures[It]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+It,Ut.__webglTexture,G,mt)}}else if(M!==null&&G!==0){const mt=q.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,G)}J=-1};function jt(M){const R=q.get(M);return(R.__readFormat!==M.format||R.__readType!==M.type)&&(R.__readFormat=M.format,R.__readType=M.type,R.__formatReadable=A.textureFormatReadable(M.format),R.__typeReadable=A.textureTypeReadable(M.type)),R}this.readRenderTargetPixels=function(M,R,G,B,N,ft,xt,mt=0){if(!(M&&M.isWebGLRenderTarget)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(It=It[xt]),It){_.bindFramebuffer(D.FRAMEBUFFER,It);try{const Ut=M.textures[mt],Zt=Ut.format,le=Ut.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt);const k=jt(Ut);if(k.__formatReadable===!1){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(k.__typeReadable===!1){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-B&&G>=0&&G<=M.height-N&&D.readPixels(R,G,B,N,Tt.convert(Zt),Tt.convert(le),ft)}finally{const Ut=ht!==null?q.get(ht).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,R,G,B,N,ft,xt,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(It=It[xt]),It)if(R>=0&&R<=M.width-B&&G>=0&&G<=M.height-N){_.bindFramebuffer(D.FRAMEBUFFER,It);const Ut=M.textures[mt],Zt=Ut.format,le=Ut.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt);const k=jt(Ut);if(k.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(k.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ne),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(R,G,B,N,Tt.convert(Zt),Tt.convert(le),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ce=ht!==null?q.get(ht).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ce);const ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xd(D,ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ne),D.deleteSync(ae),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,R=null,G=0){const B=Math.pow(2,-G),N=Math.floor(M.image.width*B),ft=Math.floor(M.image.height*B),xt=R!==null?R.x:0,mt=R!==null?R.y:0;j.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,xt,mt,N,ft),_.unbindTexture()},this.copyTextureToTexture=function(M,R,G=null,B=null,N=0,ft=0){let xt,mt,It,Ut,Zt,le,k,ne,Ce;const ae=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(G!==null)xt=G.max.x-G.min.x,mt=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Zt=G.min.y,le=G.isBox3?G.min.z:0;else{const we=Math.pow(2,-N);xt=Math.floor(ae.width*we),mt=Math.floor(ae.height*we),M.isDataArrayTexture?It=ae.depth:M.isData3DTexture?It=Math.floor(ae.depth*we):It=1,Ut=0,Zt=0,le=0}B!==null?(k=B.x,ne=B.y,Ce=B.z):(k=0,ne=0,Ce=0);const ie=Tt.convert(R.format),be=Tt.convert(R.type);let Ct;R.isData3DTexture?(j.setTexture3D(R,0),Ct=D.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(j.setTexture2DArray(R,0),Ct=D.TEXTURE_2D_ARRAY):(j.setTexture2D(R,0),Ct=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,R.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,R.unpackAlignment);const ze=_.getParameter(D.UNPACK_ROW_LENGTH),me=_.getParameter(D.UNPACK_IMAGE_HEIGHT),ke=_.getParameter(D.UNPACK_SKIP_PIXELS),qe=_.getParameter(D.UNPACK_SKIP_ROWS),je=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),_.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(D.UNPACK_SKIP_IMAGES,le);const kn=M.isDataArrayTexture||M.isData3DTexture,$t=R.isDataArrayTexture||R.isData3DTexture;if(M.isDepthTexture){const we=q.get(M),Ze=q.get(R),Ae=q.get(we.__renderTarget),vn=q.get(Ze.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Ae.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Gn=0;Gn<It;Gn++)kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(M).__webglTexture,N,le+Gn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(R).__webglTexture,ft,Ce+Gn)),D.blitFramebuffer(Ut,Zt,xt,mt,k,ne,xt,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||q.has(M)){const we=q.get(M),Ze=q.get(R);_.bindFramebuffer(D.READ_FRAMEBUFFER,F),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let Ae=0;Ae<It;Ae++)kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,N,le+Ae):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,N),$t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,ft,Ce+Ae):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,ft),N!==0?D.blitFramebuffer(Ut,Zt,xt,mt,k,ne,xt,mt,D.COLOR_BUFFER_BIT,D.NEAREST):$t?D.copyTexSubImage3D(Ct,ft,k,ne,Ce+Ae,Ut,Zt,xt,mt):D.copyTexSubImage2D(Ct,ft,k,ne,Ut,Zt,xt,mt);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ct,ft,k,ne,Ce,xt,mt,It,ie,be,ae.data):R.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,ft,k,ne,Ce,xt,mt,It,ie,ae.data):D.texSubImage3D(Ct,ft,k,ne,Ce,xt,mt,It,ie,be,ae):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,k,ne,xt,mt,ie,be,ae.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,k,ne,ae.width,ae.height,ie,ae.data):D.texSubImage2D(D.TEXTURE_2D,ft,k,ne,xt,mt,ie,be,ae);_.pixelStorei(D.UNPACK_ROW_LENGTH,ze),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),_.pixelStorei(D.UNPACK_SKIP_ROWS,qe),_.pixelStorei(D.UNPACK_SKIP_IMAGES,je),ft===0&&R.generateMipmaps&&D.generateMipmap(Ct),_.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){$=0,K=0,ht=null,_.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function Eu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Be;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Yc(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let S=0;S<a[u].length;++S)d.push(a[u][S][h]);const g=Yc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Yc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Qe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const S=u.getComponent(h,g);o.setComponent(h+f,g,S)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const k_={stone:"#8a8378",stoneDark:"#615b54",rock:"#75706a",earth:"#5b4a36",grass:"#6b8a3e",baseRim:"#2b2620",wood:"#8a5f38",woodDark:"#5a3b22",cloth:"#e3d3ae",clothDark:"#b8a47c",dark:"#3a3430",metal:"#9a968f",leather:"#6b4a2e",tunic:"#7a3b2e",hero:"#3f6fa8",skin:"#e0b890",ghost:"#c9cdf0",eye:"#ff4d5e",void:"#140622",riftStone:"#6a6275",copper:"#d97e3a",mule:"#8a7560",hoof:"#2e2620",claw:"#1a1826",brick:"#8c4a3c",bronze:"#a5683a",ivory:"#efe4cc",violet:"#5b4b8f",leaf:"#b8562a",petal:"#e9a3c0",snow:"#eef2f6",frost:"#b9c2c8"},G_={glow:2,eye:2.4,copper:.7,mana:.95,void:.9,ghost:.45},ns={day:{emissive:.28,hemi:["#fff1dc","#7d6b55",1.05],key:["#ffe2b8",1.6],back:["#c9d8ff",.3],rim:[.1,"#ffffff"]},dusk:{emissive:.6,hemi:["#ffd2b0","#2a2030",.55],key:["#ffab66",1.05],back:["#8fa0ff",.45],rim:[.25,"#ffc9a0"]},night:{emissive:1,hemi:["#a0aee6","#2a2a48",1.35],key:["#d8deff",2.1],back:["#b0c2ff",.9],rim:[.9,"#c8d4ff"]}},H_=new Xt,V_=new Xt;function Ts(i,t,e,n){return n.copy(H_.set(i)).lerp(V_.set(t),e)}function bu(i,t){const e=t??{emissive:0,hemiSky:new Xt,hemiGround:new Xt,hemiIntensity:0,keyColor:new Xt,keyIntensity:0,backColor:new Xt,backIntensity:0,rimStrength:0,rimColor:new Xt},n=Math.min(1,Math.max(0,i)),[s,r,a]=n<.5?[ns.day,ns.dusk,n*2]:[ns.dusk,ns.night,(n-.5)*2],o=(l,c)=>l+(c-l)*a;return e.emissive=o(s.emissive,r.emissive),Ts(s.hemi[0],r.hemi[0],a,e.hemiSky),Ts(s.hemi[1],r.hemi[1],a,e.hemiGround),e.hemiIntensity=o(s.hemi[2],r.hemi[2]),Ts(s.key[0],r.key[0],a,e.keyColor),e.keyIntensity=o(s.key[1],r.key[1]),Ts(s.back[0],r.back[0],a,e.backColor),e.backIntensity=o(s.back[1],r.back[1]),e.rimStrength=o(s.rim[0],r.rim[0]),Ts(s.rim[1],r.rim[1],a,e.rimColor),e}const di={uRim:{value:ns.day.rim[0]},uRimColor:{value:new Xt(ns.day.rim[1])},uToCam:{value:new I(0,1,0)},uWet:{value:0}},W_={"#000000":"#34303c","#0000FF":"#3a5cff","#00FF00":"#39e35a","#FFFF00":"#f2e23a","#FF0000":"#f0303a"},Er=i=>W_[i.toUpperCase()]??i;function X_(i,t){const e=new Xt(i),n=(e.r+e.g+e.b)/3;return e.r+=(n-e.r)*t,e.g+=(n-e.g)*t,e.b+=(n-e.b)*t,e}const $c=new Map;function q_(i,t){const e=i+(t??""),n=$c.get(e);if(n)return n;const s=t??k_[i],r=X_(s,i==="mana"||i==="glow"?.05:.14),a=G_[i]??0,o=a?i==="void"?new Xt("#3a0a66"):i==="ghost"?new Xt("#6a70d0"):r.clone():new Xt(0,0,0);o.multiplyScalar(a);const l={color:r,emit:o};return $c.set(e,l),l}const Y_="minis-emit-rim-wet";function $_(i){i.uniforms.uRim=di.uRim,i.uniforms.uRimColor=di.uRimColor,i.uniforms.uToCam=di.uToCam,i.uniforms.uWet=di.uWet,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aEmit;
varying vec3 vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vEmit = aEmit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vEmit;
uniform float uRim;
uniform vec3 uRimColor;
uniform vec3 uToCam;`).replace("#include <emissivemap_fragment>",`float rimF = pow(1.0 - clamp(dot(normalize(normal), uToCam), 0.0, 1.0), 2.5);
totalEmissiveRadiance = vEmit * emissive + uRimColor * (uRim * rimF);`)}function hl(i,t){const e=new Nf({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,emissive:16777215,emissiveIntensity:t,transparent:i==="ghost",opacity:i==="ghost"?.9:1,side:hn});return e.onBeforeCompile=$_,e.customProgramCacheKey=()=>Y_,e.userData.base=e.emissiveIntensity,e}let hi=0;const Ne=bu(0),br={wet:0,overcast:0,fog:0};let Kc=.5;const Zc=.85,K_=.42,ia={opaque:hl("opaque",Ne.emissive),ghost:hl("ghost",Ne.emissive)},Tu=new Set,Jc=i=>ia[i];function Z_(i){const t=hl(i,Ne.emissive);return Tu.add(t),t.roughness=ia.opaque.roughness,t}const Qc=()=>hi>.5,J_=()=>hi,Q_=()=>Ne,qa=new Xt,j_=new Xt("#dde1e6"),tv=new Xt("#cdd3da"),ev=new Xt("#c9ced4");function jc(i,t,e){hi=Math.min(1,Math.max(0,i)),t&&Object.assign(br,t),e!==void 0&&(Kc=e),bu(hi,Ne);const n=Math.min(1,Math.max(0,br.overcast)),s=Math.min(1,Math.max(0,br.fog));if(n>0&&(Ne.keyIntensity*=1-.5*n,Ne.hemiIntensity*=1+.9*n,Ne.keyColor.lerp(qa.copy(j_).multiplyScalar(1-.55*hi),.6*n),Ne.hemiSky.lerp(qa.copy(tv).multiplyScalar(1-.5*hi),.5*n),Ne.rimStrength*=1-.45*n),s>0){const a=qa.copy(ev).multiplyScalar(1-.6*hi);Ne.keyColor.lerp(a,.5*s),Ne.hemiSky.lerp(a,.5*s),Ne.hemiGround.lerp(a,.35*s),Ne.rimStrength*=1-.5*s,Ne.emissive*=1-.2*s}Ne.rimStrength*=1+.6*Kc*(1-n)*hi;const r=Math.min(1,Math.max(0,br.wet));for(const a of[ia.opaque,ia.ghost,...Tu])a.emissiveIntensity=Ne.emissive,a.userData.base=Ne.emissive,a.roughness=Zc+(K_-Zc)*r;di.uRim.value=Ne.rimStrength,di.uRimColor.value.copy(Ne.rimColor),di.uWet.value=r}const lt=Math.PI*2;let Yn="summer";const As=()=>Yn;function nv(i){Yn=i}const iv={spring:"#79ad48",summer:"#6b8a3e",fall:"#a9853c",winter:"#8d8a72"},th=["#b8562a","#c98a2e","#a33d22","#d4a03a"],sv={spring:"#56583a",summer:"#5b4a36",fall:"#7a4e2c",winter:"#8e8c84"},eh=["#e9a3c0","#f2e26a","#f7f2ea","#c99be0"],Ui=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Tr=new _e,Ji=new Bn,Ar=new gn,Ya=new I,$a=new I,rv=new I(0,1,0);function nh(i,t,e){const n=i.index?i.toNonIndexed():i.clone();i!==n&&i.dispose(),n.deleteAttribute("uv");const s=n.attributes.position.count,{color:r,emit:a}=q_(t,e),o=new Float32Array(s*3),l=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=r.r,o[c*3+1]=r.g,o[c*3+2]=r.b,l[c*3]=a.r,l[c*3+1]=a.g,l[c*3+2]=a.b;return n.setAttribute("color",new Qe(o,3)),n.setAttribute("aEmit",new Qe(l,3)),n}class Cl{constructor(t,e){Jt(this,"part");Jt(this,"matrix");this.part=t??this,this.matrix=e}add(t,e,n,s=0,r=0,a=0,o=0,l=0,c=0,u=1,f=1,h=1){const d=nh(t,e,n);Ar.set(o,l,c),Ji.setFromEuler(Ar),Tr.compose(Ya.set(s,r,a),Ji,$a.set(u,f,h)),d.applyMatrix4(Tr),d.applyMatrix4(this.matrix),this.part.buckets[e==="ghost"?"ghost":"opaque"].push(d)}beam(t,e,n,s,r=5){const a=new I(...t),o=new I(...e),l=a.distanceTo(o),c=nh(new St(n,n,l,r),s);Ji.setFromUnitVectors(rv,o.clone().sub(a).normalize()),Tr.compose(Ya.copy(a).lerp(o,.5),Ji,$a.set(1,1,1)),c.applyMatrix4(Tr),c.applyMatrix4(this.matrix),this.part.buckets.opaque.push(c)}crystal(t,e,n,s,r,a,o,l,c){const u=this.at(r,a,o,l,0,c);u.add(new St(n,n*.82,s,6),t,e,0,s/2,0),u.add(new Re(n,n*1.8,6),t,e,0,s+n*.9,0)}at(t,e,n,s=0,r=0,a=0){Ar.set(s,r,a),Ji.setFromEuler(Ar);const o=new _e().compose(Ya.set(t,e,n),Ji,$a.set(1,1,1));return new Cl(this.part,this.matrix.clone().multiply(o))}}class ih extends Cl{constructor(e,n={}){super(null,new _e);Jt(this,"group",new ts);Jt(this,"buckets",{opaque:[],ghost:[]});Jt(this,"baked",{opaque:[],ghost:[]});Jt(this,"detail");Jt(this,"uniqueGeometry");Jt(this,"uniqueMaterial");Jt(this,"parent");Jt(this,"name");this.name=e,this.group.name=e,this.parent=n.parent??null,this.detail=n.detail??!1,this.uniqueGeometry=n.uniqueGeometry??!1,this.uniqueMaterial=n.uniqueMaterial??!1,n.pos&&this.group.position.set(...n.pos),n.rot&&this.group.rotation.set(...n.rot),n.scale&&this.group.scale.set(...n.scale),this.parent&&this.parent.group.add(this.group)}}class av{constructor(){Jt(this,"root",new ih("root"));Jt(this,"parts",[this.root]);Jt(this,"lights",[])}part(t,e={}){const n=new ih(t,{parent:e.parent??this.root,...e});return this.parts.push(n),n}light(t,e,n,s,r=1){this.lights.push({color:t,pos:[e,n,s],strength:r})}base(t,e=1,n=1){const s=this.root,r=Ui(t),a=iv[Yn],o=Yn==="winter";s.add(new St(1.02,1.1,.16,40),"baseRim",void 0,0,.08,0,0,0,0,e,1,n),s.add(new St(1,1,.03,40),"earth",sv[Yn],0,.175,0,0,0,0,e,1,n);const l=[];for(let h=0;h<5;h++){const d=r()*lt,g=.55+r()*.35,S=.045+r()*.06,m=Math.cos(d)*g*e,p=Math.sin(d)*g*n;l.push([m,p,S]),s.add(new jn(S,0),o?"frost":"rock",void 0,m,.2,p,r()*3,r()*3,0)}const c=[],u=Yn==="summer"?9:7;for(let h=0;h<u;h++){const d=r()*lt,g=.5+r()*.42,S=Math.cos(d)*g*e,m=Math.sin(d)*g*n;c.push([S,m]);const p=o?.55:Yn==="summer"?1.15:1;for(let y=0;y<3;y++)s.add(new Re(.022,(.12+r()*.08)*p,4),"grass",a,S+(r()-.5)*.06,.25,m+(r()-.5)*.06,(r()-.5)*.6,0,(r()-.5)*.6)}if(Yn==="fall")for(let h=0;h<9;h++){const d=r()*lt,g=.15+r()*.75;s.add(new Ee(.11,0),"leaf",th[h%th.length],Math.cos(d)*g*e,.195,Math.sin(d)*g*n,0,r()*lt,0,1,.1,.6)}else if(Yn==="spring")for(let h=0;h<6&&h<c.length;h++){const[d,g]=c[h];s.add(new St(.006,.006,.12,3),"grass",a,d+.02,.31,g,.1,0,-.1),s.add(new Ue(.05,0),"petal",eh[h%eh.length],d+.03,.38,g-.01,r()*3,r()*3,0)}const f=this.part("snow",{pos:[0,.19,0]});f.add(new St(.99,.99,.09,40),"snow",void 0,0,.045,0,0,0,0,e,1,n);for(const[h,d,g]of l)f.add(new Ue(g*1.15,0),"snow",void 0,h,.03+g*.5,d,0,0,0,1,.55,1);f.group.visible=!1}compile(){const t={root:this.root.group,partNames:[],detailNames:[],bakedNames:[],uniqueGeometry:[],uniqueMaterial:[],lights:this.lights,tris:0};this.root.group.updateMatrixWorld(!0);const e=new _e;for(const n of this.parts){if(!n.detail)continue;let s=n.parent;for(;s&&s.detail;)s=s.parent;if(s){e.copy(s.group.matrixWorld).invert().multiply(n.group.matrixWorld);for(const r of["opaque","ghost"])for(const a of n.buckets[r])s.baked[r].push(a.clone().applyMatrix4(e))}}for(const n of this.parts){n!==this.root&&t.partNames.push(n.name),n.detail&&t.detailNames.push(n.name),n.uniqueGeometry&&t.uniqueGeometry.push(n.name),n.uniqueMaterial&&t.uniqueMaterial.push(n.name);for(const s of["opaque","ghost"]){const r=sh(n.buckets[s]);if(r){const o=new dn(r,Jc(s));o.name=`${n.name}#${s}`,n.group.add(o),t.tris+=r.attributes.position.count/3}const a=sh(n.baked[s]);if(a){const o=new dn(a,Jc(s));o.name=`${n.name}#baked-${s}`,o.visible=!1,n.group.add(o),t.bakedNames.push(o.name)}}}return t}}function sh(i){if(i.length===0)return null;const t=i.length===1?i[0]:Eu(i,!1);if(i.length>1)for(const e of i)e.dispose();return t}function Ka(i){const t=i.root.clone(!0),e={},n={};t.traverse(o=>{o.isMesh?n[o.name]=o:o!==t&&o.name&&(e[o.name]=o)});const s=[],r=[];for(const o of i.uniqueGeometry)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.geometry=c.geometry.clone(),c.geometry.userData.orig=c.geometry.attributes.position.array.slice(),s.push(c.geometry))}for(const o of i.uniqueMaterial)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.material=Z_(l),r.push(c.material))}const a={root:t,parts:e,meshes:n,lod:"near",setLod(o){if(o===a.lod)return;a.lod=o;const l=o==="near";for(const c of i.detailNames)e[c].visible=l;for(const c of i.bakedNames)n[c].visible=!l},dispose(){for(const o of s)o.dispose();for(const o of r)o.dispose()}};return a}const ls=(i,t,e=0,n=lt)=>new bl(i.map(([s,r])=>new vt(s,r)),t,e,n);function Qi(i,t,e,n=8,s="stone"){const r=Math.PI/n;i.add(new St(t,t*1.06,e,n),s,void 0,0,e/2,0,0,r),i.add(new St(t*1.09,t*1.09,.045,n),"stoneDark",void 0,0,e*.5,0,0,r),i.add(new et(.16,.24,.05),"dark",void 0,0,.12,t*1.03)}function Rr(i,t,e,n=8){const s=Math.PI/n;i.add(new St(t*1.14,t*1.02,.08,n),"stoneDark",void 0,0,e+.04,0,0,s);for(let r=0;r<n;r++){const a=r/n*lt+s;i.add(new et(.07,.11,.12),"stone",void 0,Math.cos(a)*t*1.06,e+.135,Math.sin(a)*t*1.06,0,-a)}}function ov(i,t,e,n,s=8,r="dark"){i.add(new Re(t,n,s),r,void 0,0,e+n/2,0,0,Math.PI/s),i.add(new Ee(.035,0),"metal",void 0,0,e+n+.02,0)}function ln(i,t,e,n,s,r=0,a="wood"){i.add(new et(t,t,t),a,void 0,e,n+t/2,s,0,r),i.add(new et(t*1.02,t*.12,t*1.02),"woodDark",void 0,e,n+t/2,s,0,r)}function $r(i,t,e,n,s,r,a=!1){const o=a?Math.PI/2:0,l=a?s+t:s+e/2;i.add(new St(t,t,e,9),"woodDark",void 0,n,l,r,o);for(const c of[-.3,.3]){const u=new ue(t*1.02,t*.1,3,12);i.add(u,"metal",void 0,n+0,l+(a?0:c*e),r+(a?c*e:0),a?0:Math.PI/2,0,0)}}function Pl(i,t,e,n,s,r,a=1,o){const l=i.part(t,{pos:[n,s,r],detail:!0});return l.add(new Re(.11*a,.34*a,6),"glow",e,0,.17*a,0),l.add(new Re(.06*a,.2*a,5),"glow","#fff4d6",0,.1*a,.01,0,.4),l.add(new _n(.035*a,0),"glow",e,.06*a,.36*a,0,.3,.2),l.add(new _n(.03*a,0),"glow",e,-.05*a,.42*a,.02,.8,1.1),l}function sa(i,t,e,n,s,r=1){const a=i.part(t,{pos:[e,n,s],detail:!0});a.group.userData.y0=n;for(let o=0;o<3;o++){const l=(.05+o*.022)*r;a.add(new Ue(l,0),"clothDark",void 0,(o%2?.03:-.03)*r,(.06+o*.14)*r,0,o,o*2)}return a}function Ll(i,t,e=1){i.position.y=i.userData.y0+t*.16*e;const n=.8+t*.45;i.scale.set(n,n,n)}function Il(i,t,e=1){const n=t*lt;i.scale.set(1+.1*e*Math.sin(n*3),1+.16*e*Math.sin(n*2+1),1+.1*e*Math.cos(n*4)),i.rotation.y=Math.sin(n*2)*.2}function wi(i,t,e,n,s,r,a=.7,o){const l=i.root;l.add(new St(.014,.018,a,5),"wood",void 0,n,s+a/2,r),l.add(new Ee(.025,0),"metal",void 0,n,s+a+.01,r);const c=i.part(t,{pos:[n,s+a-.04,r],detail:!0}),u=new ti;return u.moveTo(0,0),u.lineTo(-.28,-.06),u.lineTo(0,-.17),c.add(new Ni(u),"glow",e),c}let Au=.25;function lv(i){Au=Math.min(1,Math.max(0,i))}function Dl(i,t){const e=.45+1.4*Au;i.rotation.y=Math.sin(t*lt*2)*.3*e,i.rotation.x=Math.sin(t*lt*3+1)*.1*e}const Za=.1,cv=1,hv=1.1,uv=.7,dv=.25,fv=.08,pv=.15,rh=1.06,mv=.42,gv=6,_v=9,ah=3.6,vv=25,xv=.004,Rs=Math.PI/180;function Mv(){const i=new Be;return i.setAttribute("position",new ve([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5],3)),i.setAttribute("uv",new ve([0,0,1,0,0,1,1,1],2)),i.setIndex([0,2,1,2,3,1]),i}const oh=`
uniform float uTime;
uniform float uFlicker;
varying vec2 vUv;
varying vec3 vCol;
void main() {
  vUv = uv;
  mat4 M = instanceMatrix;
  float seed = M[0][3];
  M[0][3] = 0.0;
  float rate = 4.5 + mod(seed, 7.0) * 0.6;
  vCol = instanceColor * (1.0 + uFlicker * sin(uTime * rate + seed));
  gl_Position = projectionMatrix * modelViewMatrix * M * vec4(position, 1.0);
}`,Sv=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.0, 1.0, r);
  a *= a;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <colorspace_fragment>
}`,yv=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.5, 1.0, r);
  gl_FragColor = vec4(0.0, 0.0, 0.0, a * vCol.r);
}`,Si=new _e,Cr=new I,Ja=new I,Cs=new Bn,Pr=new gn,Lr=new Xt,wv=new I;class Ev{constructor(t,e){Jt(this,"hemi",new Of);Jt(this,"key",new yc);Jt(this,"back",new yc);Jt(this,"quad",Mv());Jt(this,"poolMat");Jt(this,"shadowMat");Jt(this,"pools");Jt(this,"shadows");Jt(this,"poolN",0);Jt(this,"shadowN",0);Jt(this,"sky",{darkness:0,sunAltDeg:45,sunAzDeg:180,moon:.5});Jt(this,"weather",{wet:0,rain:0,snow:0,snowing:0,overcast:0,fog:0,wind:0});Jt(this,"pitch",45);Jt(this,"bearing",0);Jt(this,"poolGain",Za);Jt(this,"shDx",0);Jt(this,"shDz",1);Jt(this,"shLen",1);Jt(this,"shK",0);Jt(this,"colorCache",new Map);Jt(this,"world");this.world=t,e.add(this.hemi,this.key,this.back),this.poolMat=new fn({uniforms:{uTime:{value:0},uFlicker:{value:fv}},vertexShader:oh,fragmentShader:Sv,transparent:!0,depthWrite:!1,blending:Bs,side:hn,forceSinglePass:!0}),this.shadowMat=new fn({uniforms:{uTime:{value:0},uFlicker:{value:0}},vertexShader:oh,fragmentShader:yv,transparent:!0,depthWrite:!1,side:hn,forceSinglePass:!0}),this.shadows=this.make(this.shadowMat,512,1),this.pools=this.make(this.poolMat,256,2),this.apply()}make(t,e,n){const s=new ea(this.quad,t,e);return s.instanceColor=new Vs(new Float32Array(e*3),3),s.instanceMatrix.setUsage(Ai),s.instanceColor.setUsage(Ai),s.frustumCulled=!1,s.renderOrder=n,s.count=0,this.world.add(s),s}grow(t,e,n,s){if(e<=t.instanceMatrix.count)return t;this.world.remove(t),t.dispose();let r=t.instanceMatrix.count;for(;r<e;)r*=2;return this.make(n,r,s)}setSky(t){Object.assign(this.sky,t),jc(this.sky.darkness,this.weather,this.sky.moon),this.apply()}getSky(){return{...this.sky}}setWeather(t){Object.assign(this.weather,t),jc(this.sky.darkness,this.weather,this.sky.moon),this.apply()}getWeather(){return{...this.weather}}setCamera(t,e){t===this.pitch&&e===this.bearing||(this.pitch=t,this.bearing=e,this.apply())}apply(){const t=Q_(),{darkness:e,sunAltDeg:n,sunAzDeg:s,moon:r}=this.sky,a=this.pitch*Rs,o=this.bearing*Rs,l=di.uToCam.value.set(-Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a)).normalize();this.hemi.color.copy(t.hemiSky),this.hemi.groundColor.copy(t.hemiGround),this.hemi.intensity=t.hemiIntensity;const c=Math.max(vv,n)*Rs,u=s*Rs,f=wv.set(Math.sin(u)*Math.cos(c),Math.sin(c),-Math.cos(u)*Math.cos(c)),h=Cr.set(l.x*.9+.3,.95,l.z*.9+.1).normalize();this.key.position.copy(f).lerp(h,e).normalize(),this.key.color.copy(t.keyColor);const d=.82+.36*r;this.key.intensity=t.keyIntensity*(1+(d-1)*e),this.back.position.set(Math.sin(o)*Math.sin(a)-l.x*.2,.55,-Math.cos(o)*Math.sin(a)-l.z*.2).normalize(),this.back.color.copy(t.backColor),this.back.intensity=t.backIntensity;const{wet:g,overcast:S,fog:m}=this.weather;this.poolGain=(Za+(cv-Za)*e)*(1+.3*g),this.shDx=-Math.sin(u),this.shDz=Math.cos(u);const p=Math.max(_v,n)*Rs,y=Math.min(1,S*.85+m*.6);this.shLen=Math.min(ah,1/Math.tan(p))*(1-.4*y),this.shK=mv*Math.min(1,Math.max(0,n/gv))*(1-.9*y)}begin(t,e,n){this.poolMat.uniforms.uTime.value=t/1e3%3600,this.poolN=0,this.shadowN=0,this.pools=this.grow(this.pools,e,this.poolMat,2),this.shadows=this.grow(this.shadows,n,this.shadowMat,1)}colorOf(t){let e=this.colorCache.get(t);return e||(e=new Xt(t),this.colorCache.set(t,e)),e}pool(t,e,n,s,r,a,o){const l=this.pools;if(this.poolN>=l.instanceMatrix.count)return;const c=this.poolGain*a;Lr.copy(this.colorOf(r)).multiplyScalar(c),Si.compose(Cr.set(t,e,n),Cs.identity(),Ja.set(s*2,1,s*2)),Si.elements[3]=o%64,l.setMatrixAt(this.poolN,Si),l.setColorAt(this.poolN,Lr),this.poolN++}poolFor(t,e,n,s,r,a,o,l){this.pool(t,e,n,s*(hv+uv*Math.min(1.6,a)+dv*o),r,Math.min(1.2,a),l)}shadow(t,e,n,s,r,a,o=1){const l=this.shadows,c=xv*Math.max(n,s);if(this.shadowN<l.instanceMatrix.count&&(Pr.set(0,r,0),Cs.setFromEuler(Pr),Si.compose(Cr.set(t,c,e),Cs,Ja.set(n*2*rh*o,1,s*2*rh*o)),l.setMatrixAt(this.shadowN,Si),l.setColorAt(this.shadowN,Lr.setScalar(pv)),this.shadowN++),this.shK>.01&&a>0&&this.shadowN<l.instanceMatrix.count){const u=Math.max(n,s),f=Math.max(u,Math.min(ah*u,a*u*this.shLen)),h=Math.atan2(-this.shDz,this.shDx),d=(f-u)/2;Pr.set(0,h,0),Cs.setFromEuler(Pr),Si.compose(Cr.set(t+this.shDx*d,c*1.5,e+this.shDz*d),Cs,Ja.set(f+u,1,Math.min(n,s)*1.9)),l.setMatrixAt(this.shadowN,Si),l.setColorAt(this.shadowN,Lr.setScalar(this.shK)),this.shadowN++}}end(){this.pools.count=this.poolN,this.poolN&&(this.pools.instanceMatrix.needsUpdate=!0,this.pools.instanceColor.needsUpdate=!0),this.shadows.count=this.shadowN,this.shadowN&&(this.shadows.instanceMatrix.needsUpdate=!0,this.shadows.instanceColor.needsUpdate=!0)}stats(){return{weather:this.getWeather(),pools:this.poolN,shadows:this.shadowN,darkness:+this.sky.darkness.toFixed(3),sunAltDeg:+this.sky.sunAltDeg.toFixed(1),sunAzDeg:+this.sky.sunAzDeg.toFixed(1),moon:+this.sky.moon.toFixed(2),poolGain:+this.poolGain.toFixed(3),sunShadow:+this.shK.toFixed(3),shadowLen:+this.shLen.toFixed(2)}}dispose(){this.world.remove(this.pools,this.shadows),this.pools.dispose(),this.shadows.dispose(),this.poolMat.dispose(),this.shadowMat.dispose(),this.quad.dispose()}}const bv={dust:620,burst:820,ring:720,implode:640,wisps:900},Tv={dust:11,burst:14,ring:1,implode:12,wisps:10},Qa="#b9a27c",Av=40,Rv=48,yi=512,Ir=2.399963;function mn(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}const Dr=i=>1-(1-i)*(1-i),Cv=i=>i*i*(3-2*i),Pv=`
varying vec3 vCol;
varying float vA;
void main() {
  mat4 M = instanceMatrix;
  vA = M[0][3];
  M[0][3] = 0.0;
  vCol = instanceColor;
  gl_Position = projectionMatrix * modelViewMatrix * M * vec4(position, 1.0);
}`,Lv=`
varying vec3 vCol;
varying float vA;
void main() {
  gl_FragColor = vec4(vCol, vA);
  #include <colorspace_fragment>
}`,ja=new _e,Iv=new I,Dv=new I,lh=new Bn,ch=new gn;class Nv{constructor(t){Jt(this,"effects",[]);Jt(this,"dust");Jt(this,"motes");Jt(this,"rings");Jt(this,"mats",[]);Jt(this,"geos",[]);Jt(this,"world");Jt(this,"colorCache",new Map);Jt(this,"log",[]);Jt(this,"particles",0);Jt(this,"dustN",0);Jt(this,"moteN",0);Jt(this,"ringN",0);this.world=t;const e=new _n(1,0),n=new Tl(.82,1,24);n.rotateX(-Math.PI/2),this.geos.push(e,n),this.dust=this.make(e,Ti,3),this.motes=this.make(e,Bs,4),this.rings=this.make(n,Ti,3)}make(t,e,n){const s=new fn({vertexShader:Pv,fragmentShader:Lv,transparent:!0,depthWrite:!1,blending:e,side:hn,forceSinglePass:!0});this.mats.push(s);const r=new ea(t,s,yi);return r.instanceColor=new Vs(new Float32Array(yi*3),3),r.instanceMatrix.setUsage(Ai),r.instanceColor.setUsage(Ai),r.frustumCulled=!1,r.renderOrder=n,r.count=0,r.visible=!1,r.name=`fx-${e===Bs?"motes":t===this.geos[1]?"rings":"dust"}`,this.world.add(r),r}colorOf(t){let e=this.colorCache.get(t);return e||(e=new Xt(t),this.colorCache.set(t,e)),e}spawn(t,e,n,s,r,a,o,l=1){this.effects.length>=Rv&&this.effects.shift();const c=this.effects.length*7919+(o|0)&65535;this.effects.push({kind:t,x:e,y:n,z:s,s:r*l,color:this.colorOf(a),t0:o,dur:bv[t],n:Tv[t],seed:c}),this.log.push(`${t}@${Math.round(o)}`),this.log.length>Av&&this.log.shift()}landing(t,e,n,s){this.spawn("dust",t,.02*n,e,n,Qa,s),this.spawn("ring",t,.012*n,e,n,Qa,s,.9)}puff(t,e,n,s){this.spawn("dust",t,.02*n,e,n,Qa,s,.8)}burst(t,e,n,s,r,a){this.spawn("burst",t,e,n,s,r,a)}pulse(t,e,n,s,r){this.spawn("ring",t,.014*n,e,n,s,r,1.4),this.spawn("burst",t,1.1*n,e,n,s,r,.8)}wisps(t,e,n,s,r,a){this.spawn("wisps",t,e,n,s,r,a)}implode(t,e,n,s,r,a){this.spawn("implode",t,e,n,s,r,a),this.spawn("ring",t,.014*s,n,s,r,a,.7)}active(){return this.effects.length>0}push(t,e,n,s,r,a,o,l,c,u,f){ch.set(c,c*1.7,0),lh.setFromEuler(ch),ja.compose(Iv.set(n,s,r),lh,Dv.set(a,o,l)),ja.elements[3]=f,t.setMatrixAt(e,ja),t.setColorAt(e,u)}tick(t){this.dustN=0,this.moteN=0,this.ringN=0;for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e],s=(t-n.t0)/n.dur;if(s>=1){this.effects.splice(e,1);continue}if(s<0)continue;const{x:r,y:a,z:o,s:l,color:c,n:u,seed:f}=n;switch(n.kind){case"dust":{for(let h=0;h<u&&this.dustN<yi;h++){const d=h*Ir+mn(f,h)*.9,g=(.55+.35*mn(f,h+50))*(.5+1.1*Dr(s))*l,S=(.05+.13*(1-s)*(.6+.6*mn(f,h+90)))*l,m=.22*l*Math.sin(Math.PI*Math.min(1,s*1.3))*(.5+mn(f,h+30));this.push(this.dust,this.dustN++,r+Math.cos(d)*g,a+m+S*.5,o+Math.sin(d)*g,S,S,S,s*3+h,c,.85*(1-s*s))}break}case"burst":{for(let h=0;h<u&&this.moteN<yi;h++){const d=h*Ir+mn(f,h)*1.2,g=(.15+.55*mn(f,h+40))*Dr(s)*l,S=(.25+.9*mn(f,h+80))*Dr(s)*l,m=(.03+.09*(1-s))*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*g,a+S,o+Math.sin(d)*g,m,m,m,s*4+h,c,1-s*s)}break}case"wisps":{for(let h=0;h<u&&this.moteN<yi;h++){const d=h*Ir+mn(f,h)*1.5+s*1.2,g=(.2+.5*mn(f,h+40))*(.3+.7*s)*l,S=(.1+1.3*s)*l+Math.sin(s*9+h)*.05*l,m=(.03+.07*Math.sin(Math.PI*s))*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*g,a+S,o+Math.sin(d)*g,m,m,m,s*2+h,c,.9*(1-s))}break}case"implode":{for(let h=0;h<u&&this.moteN<yi;h++){const d=h*Ir+mn(f,h)*1.2,g=(1.2+.8*mn(f,h+40))*(1-Cv(s))*l,S=(mn(f,h+80)-.3)*.8*l*(1-s),m=(.03+.08*s)*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*g,a+S,o+Math.sin(d)*g,m,m,m,s*5+h,c,.4+.6*s)}break}case"ring":{if(this.ringN<yi){const h=(.7+1.4*Dr(s))*l;this.push(this.rings,this.ringN++,r,a,o,h,1,h,0,c,.8*(1-s)*(1-s))}break}}}this.flush(this.dust,this.dustN),this.flush(this.motes,this.moteN),this.flush(this.rings,this.ringN),this.particles=this.dustN+this.moteN+this.ringN}flush(t,e){t.count=e,t.visible=e>0,e&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0)}stats(){return{effects:this.effects.length,particles:this.particles,log:[...this.log]}}clearLog(){this.log.length=0}dispose(){this.world.remove(this.dust,this.motes,this.rings),this.dust.dispose(),this.motes.dispose(),this.rings.dispose();for(const t of this.mats)t.dispose();for(const t of this.geos)t.dispose();this.effects.length=0}}const Uv=.1,Fv=1.7,hh=i=>Math.min(Fv,1+Uv*Math.max(0,(i??1)-1)),Ov={front:"z",build(i){i.base(11);const t=i.root.at(0,.185,0);t.add(new St(.78,.82,.12,8),"stone",void 0,0,.06,0,0,Math.PI/8),t.add(new St(.6,.64,.12,8),"stone",void 0,0,.18,0,0,Math.PI/8),t.add(new St(.44,.48,.1,8),"stoneDark",void 0,0,.29,0,0,Math.PI/8);for(let o=0;o<4;o++){const l=Math.PI/4+o*Math.PI/2,c=Math.cos(l)*.7,u=Math.sin(l)*.7;t.add(new St(.055,.085,.5,4),"stoneDark",void 0,c,.37,u,0,l),t.add(new Re(.058,.12,4),"stoneDark",void 0,c,.68,u,0,l),t.add(new Ee(.035,0),"glow","#ffb56b",c*.9,.42,u*.9)}const e=i.part("heart",{pos:[0,1.205,0]});i.part("core",{parent:e}).add(new Ue(.28,1),"copper",void 0,0,0,0,0,0,0,1,1.55,1),i.part("ringA",{parent:e,rot:[1.2,0,.3],detail:!0}).add(new ue(.48,.018,3,28),"glow","#ffc98a"),i.part("ringB",{parent:e,rot:[1.9,0,-.5],detail:!0}).add(new ue(.4,.014,3,24),"glow","#ffc98a");const a=i.part("orbit",{parent:e,detail:!0});for(let o=0;o<5;o++){const l=o/5*lt;a.add(new _n(.06,0),"glow","#ffb56b",Math.cos(l)*.66,Math.sin(l*2)*.12,Math.sin(l)*.66,l,l)}i.light("#ffae5a",0,1.2,0,1.3)},animate({parts:i},t,e){i.core.rotation.y=t*lt,i.heart.position.y=1.205+Math.sin(t*lt)*.05;const n=hh(e);i.heart.scale.set(n,n,n),i.ringA.rotation.z=t*lt,i.ringB.rotation.z=-t*lt,i.orbit.rotation.y=t*lt/5},pulse({parts:i},t,e){const n=hh(e)*(1+.5*Math.sin(Math.PI*t));i.heart.scale.set(n,n,n),i.heart.position.y=1.205+.18*Math.sin(Math.PI*t)}},Nr=.55,uh=1.12,Bv=.999,dh=i=>i>=Bv,to=i=>Math.min(1,Math.max(0,i??1)),zv={front:"z",build(i,t){i.base(23);const e=i.root.at(0,.185,0);[[.42,0,.1,0],[.28,-.36,.06,.2],[.24,.32,.05,-.22],[.18,.1,.04,.4]].forEach(([h,d,g,S],m)=>e.add(new jn(h,0),"rock",void 0,d,g,S,m,m*2,0,1,.55,1));const s=i.part("crystals",{pos:[0,.185,0],uniqueMaterial:!0}),r=Ui(5);s.crystal("mana",t,.17,.62,0,.12,0,.06,-.05),[[-.22,.1,.12,.4,.1,.5],[.2,.08,-.08,.34,-.2,-.45],[.08,.1,.22,.28,.5,-.15],[-.12,.08,-.2,.26,-.4,.3],[.28,.05,.16,.2,.3,-.7],[-.32,.05,-.05,.18,0,.8]].forEach(([h,d,g,S,m,p])=>s.crystal("mana",t,.06+r()*.05,S,h,d,g,m,p));const o=i.part("sparkle",{pos:[0,.185+.95,0]});for(let h=0;h<6;h++){const d=h/6*lt;o.add(new _n(.045,0),"glow",t,Math.cos(d)*.3,h%2*.12,Math.sin(d)*.3,d,d)}o.group.visible=!1;const l=[0,1.75,0];for(let h=0;h<3;h++){const d=h/3*lt+.5;e.beam([Math.cos(d)*.72,.02,Math.sin(d)*.72],l,.03,"wood")}for(let h=0;h<3;h++){const d=h/3*lt+.5,g=(h+1)/3*lt+.5;e.beam([Math.cos(d)*.5,.55,Math.sin(d)*.5],[Math.cos(g)*.5,.55,Math.sin(g)*.5],.018,"woodDark")}i.part("pulley",{pos:[0,.185+1.66,0],rot:[Math.PI/2,0,0],detail:!0}).add(new St(.09,.09,.05,10),"metal"),i.part("rope",{pos:[.09,.185+1.4,0],detail:!0}).add(new St(.008,.008,1,4),"clothDark"),i.part("bucket",{pos:[.09,.185+1.2,0],detail:!0}).add(new St(.075,.055,.11,8),"woodDark"),e.add(new et(.035,.55,.035),"woodDark",void 0,.72,.27,.32),e.add(new Ee(.06,0),"glow",t,.72,.6,.32),i.light(t,0,.8,0,1.2),i.light(t,.72,.8,.32,.5)},animate({parts:i,meshes:t},e,n){const s=1.24+(Math.sin(e*lt)*.5+.5)*.22;i.bucket.position.y=.185+s,i.rope.scale.y=1.62-s,i.rope.position.y=.185+(1.62+s)/2+.03,i.pulley.rotation.y=e*lt;const r=to(n),a=dh(r),o=Nr+(uh-Nr)*r;i.crystals.scale.set(o,o,o);const l=t["crystals#opaque"].material;l.emissiveIntensity=l.userData.base*(a?1.35+.6*Math.sin(e*lt*2):1+.35*Math.sin(e*lt));const c=i.sparkle;c.visible=a,a&&(c.rotation.y=e*lt,c.position.y=.185+.95+Math.sin(e*lt*2)*.06)},pulse({parts:i},t,e){const n=to(e),s=(Nr+(uh-Nr)*n)*(1+.3*Math.sin(Math.PI*t));i.crystals.scale.set(s,s,s)},poolGain(i,t){if(t!==0)return 1;const e=to(i);return(.3+.7*e)*(dh(e)?1.35:1)}},Os=[-.25,.185,0],Ur=(i,t,e)=>[Os[0]+i,Os[1]+t,Os[2]+e],kv={front:"x",build(i,t){i.base(37,1.3,.85);const e=i.root.at(...Os);e.add(new et(1.2,.1,.66),"wood",void 0,0,.4,0);for(const S of[-.33,.33])e.add(new et(1.2,.14,.04),"woodDark",void 0,0,.5,S);const n=[];for(let S=0;S<=10;S++){const m=Math.PI*S/10;n.push([Math.cos(m)*.36,Math.sin(m)*.42])}const s=new ti;n.forEach(([S,m],p)=>p?s.lineTo(S,m):s.moveTo(S,m)),s.lineTo(-.36,0),s.lineTo(.36,0);const r=new na;n.slice().reverse().forEach(([S,m],p)=>p?r.lineTo(S*.9,m*.9):r.moveTo(S*.9,m*.9)),s.holes.push(r);const a=new oa(s,{depth:.95,bevelEnabled:!1});a.translate(0,0,-.475),e.add(a,"cloth",void 0,-.08,.45,0,0,Math.PI/2);for(const S of[-.5,-.18,.14,.38])e.add(new ue(.37,.014,3,10,Math.PI),"clothDark",void 0,S,.45,0,0,Math.PI/2);const o=new ti;n.forEach(([S,m],p)=>p?o.lineTo(S*.9,m*.9):o.moveTo(S*.9,m*.9)),e.add(new Ni(o),"dark",void 0,.38,.45,0,0,Math.PI/2);const l=i.part("cargo",{pos:Ur(-.72,.45,0)});l.add(new et(.2,.2,.2),"wood",void 0,0,.1,.12,0,.3),l.add(new et(.15,.15,.15),"woodDark",void 0,0,.275,.1,0,.7),l.add(new Ue(.11,0),"mana",t,-.02,.09,-.18,.4,.2,0,1,.8,1),l.add(new Ue(.085,0),"mana",t,.05,.25,-.14,.1,.9,.2,1,.8,1),l.add(new Ue(.07,0),"mana",t,.12,.4,.02,.6,.3,.1,1,.75,1),l.group.visible=!1,e.add(new St(.09,.09,.22,10),"woodDark",void 0,-.2,.52,.41,Math.PI/2);for(const S of[-.07,.07])e.add(new ue(.092,.01,3,12),"metal",void 0,-.2+S,.52,.41,0,Math.PI/2);let c=0;for(const S of[-.4,.3])for(const m of[-.4,.4]){const p=i.part(`wheel${c++}`,{pos:Ur(S,.25,m),detail:!0});p.add(new ue(.2,.03,4,14),"woodDark"),p.add(new St(.045,.045,.08,8),"metal",void 0,0,0,0,Math.PI/2);for(let y=0;y<6;y++)p.add(new et(.018,.38,.018),"wood",void 0,0,0,0,0,0,y*Math.PI/6)}e.add(new et(.16,.04,.5),"woodDark",void 0,.5,.6,0);const u=e.at(.5,.62,0);u.add(new Re(.12,.3,7),"tunic",void 0,0,.15,0),u.add(new Ue(.075,0),"skin",void 0,0,.36,0),u.add(new Re(.095,.16,7),"tunic",void 0,0,.44,-.01);for(const S of[-.2,.2])e.beam([.6,.4,S],[1.02,.5,S*.6],.014,"woodDark");const f=i.part("mule",{pos:Ur(1.22,.2,0),detail:!0});f.add(new et(.46,.2,.2),"mule",void 0,0,.35,0);const h=i.part("head",{parent:f,pos:[.26,.45,0],detail:!0});h.add(new et(.1,.2,.12),"mule",void 0,0,.05,0,0,0,-.5),h.add(new et(.2,.1,.1),"mule",void 0,.1,.12,0,0,0,-.35);for(const S of[-.04,.04])h.add(new Re(.025,.12,4),"mule",void 0,.02,.22,S,S*3,0,.2);f.add(new Re(.02,.16,4),"hoof",void 0,-.25,.32,0,0,0,2.4),[[.16,.07,0],[.16,-.07,.5],[-.16,.07,.5],[-.16,-.07,0]].forEach(([S,m],p)=>{const y=i.part(`hip${p}`,{parent:f,pos:[S,.28,m],detail:!0});y.add(new et(.05,.26,.05),"mule",void 0,0,-.13,0),y.add(new et(.055,.04,.055),"hoof",void 0,0,-.27,0)}),e.add(new et(.03,.5,.03),"woodDark",void 0,.6,.75,.26),i.part("hang",{pos:Ur(.62,.98,.26),detail:!0}).add(new Ee(.055,0),"glow",t,0,-.09,0),i.light(t,.35,.95,.26,1)},animate({parts:i},t,e){const n=Math.min(1,Math.max(0,e??0)),s=i.cargo;if(s.visible=n>.001,s.visible){const a=.55+.45*n;s.scale.set(a,a,a)}for(let a=0;a<4;a++)i[`wheel${a}`].rotation.z=-t*lt/6;const r=[0,.5,.5,0];for(let a=0;a<4;a++)i[`hip${a}`].rotation.z=Math.sin((t+r[a])*lt)*.45;i.mule.position.y=Os[1]+.2+Math.abs(Math.sin(t*lt*2))*.015,i.head.rotation.z=Math.sin(t*lt*2)*.06,i.hang.rotation.x=Math.sin(t*lt)*.35}},fh={front:"z",build(i){i.base(41);const t=i.part("f",{pos:[0,.33,0]});i.part("cloak",{parent:t,detail:!0,uniqueGeometry:!0}).add(ls([[.6,0],[.5,.3],[.42,.7],[.35,1.05],[.28,1.3],[.16,1.45]],11),"ghost"),t.add(ls([[.05,1.9],[.2,1.84],[.3,1.66],[.31,1.46],[.25,1.3]],11,.35,lt-.7),"ghost"),t.add(new Ue(.19,0),"void",void 0,0,1.56,.1,0,0,0,1,1,.6);for(const s of[-.07,.07])t.add(new Ee(.04,0),"eye",void 0,s,1.58,.23);for(const s of[-1,1]){const r=i.part(s<0?"armL":"armR",{parent:t,pos:[s*.3,1.28,.04],detail:!0});r.add(new Re(.12,.6,6),"ghost",void 0,0,-.28,.12,Math.PI+.5,0,0);for(let a=-1;a<=1;a++)r.add(new Re(.018,.14,4),"claw",void 0,a*.04,-.52,.34,2.2,0,a*.2)}const n=i.part("wisps",{parent:t,detail:!0});for(let s=0;s<6;s++){const r=s/6*lt;n.add(new _n(.045,0),"glow","#a9b0ff",Math.cos(r)*.72,.1+s%3*.12,Math.sin(r)*.72,r,r)}i.light("#8f96ff",0,1.2,.3,.8),i.light("#ff4d5e",0,1.9,.5,.35)},animate({parts:i,meshes:t,lod:e},n){const s=i.f;if(s.position.y=.33+Math.sin(n*lt)*.07,s.rotation.y=Math.sin(n*lt)*.12,e!=="near")return;const r=t["cloak#ghost"].geometry,a=r.attributes.position,o=r.userData.orig;for(let l=0;l<a.count;l++){const c=o[l*3],u=o[l*3+1],f=o[l*3+2],h=Math.atan2(f,c),d=Math.max(0,1-u/.6),g=1+d*(.1*Math.sin(3*h+n*lt)+.06*Math.cos(5*h-n*lt));a.setXYZ(l,c*g,u+d*.1*Math.sin(4*h-n*lt),f*g)}a.needsUpdate=!0,i.armL.rotation.x=-.15+Math.sin(n*lt)*.12,i.armR.rotation.x=-.15+Math.sin(n*lt+1)*.12,i.wisps.rotation.y=n*lt/6,i.wisps.position.y=Math.sin(n*lt*2)*.04}},Gv={front:"z",build(i){i.base(53);const t=i.root.at(0,.185,0),e=Ui(9);for(const h of[2.3,2.9,3.5,4.1,4.7]){const d=.5+e()*.3,g=Math.cos(h)*.72,S=Math.sin(h)*.72;t.add(new et(.16,d,.12),"riftStone",void 0,g,d/2-.02,S,(e()-.5)*.25,-h,(e()-.5)*.25)}t.add(new St(.42,.5,.03,9),"void",void 0,0,.01,0),t.add(new ue(.46,.025,3,18),"glow","#b06bff",0,.03,0,Math.PI/2);const n=i.part("tear",{pos:[0,1.185,0]}),s=[],r=18;for(let h=0;h<r;h++){const d=h/r*lt,g=h%2?.82:1.05;s.push([Math.cos(d)*.36*g,Math.sin(d)*.62*g])}const a=new ti;s.forEach(([h,d],g)=>g?a.lineTo(h,d):a.moveTo(h,d));const o=new na;s.slice().reverse().forEach(([h,d],g)=>g?o.lineTo(h*.84,d*.84):o.moveTo(h*.84,d*.84)),a.holes.push(o);const l=new oa(a,{depth:.06,bevelEnabled:!1});l.translate(0,0,-.03),n.add(l,"glow","#9b4df0");const c=new ti;s.forEach(([h,d],g)=>g?c.lineTo(h*.86,d*.86):c.moveTo(h*.86,d*.86)),n.add(new Ni(c),"void"),[[.24,1],[.17,-2],[.1,3]].forEach(([h],d)=>{const g=i.part(`swirl${d}`,{parent:n,scale:[1,1.6,1],detail:!0});i.part(`arc${d}`,{parent:g,detail:!0}).add(new ue(h,.016,3,16,lt*.7),"glow","#d3a8ff",0,0,.02)});const f=i.part("debris",{pos:[0,.185,0],detail:!0});for(let h=0;h<7;h++){const d=h/7*lt;f.add(new jn(.04+h%3*.015,0),"riftStone",void 0,Math.cos(d)*.55,.25+h%4*.18,Math.sin(d)*.35,d,d)}i.light("#a24dff",0,1.2,.25,1.5)},animate({parts:i},t){const e=[1,-2,3];for(let n=0;n<3;n++)i[`arc${n}`].rotation.z=t*lt*e[n];i.debris.rotation.y=t*lt/7,i.tear.scale.set(1+Math.sin(t*lt)*.03,1+Math.cos(t*lt)*.03,1)}},Ru={you:{seed:67,cloak:"hero",tunic:"tunic",ring:"#6fb3ff",gem:"#9fd0ff",head:"hood",hand:"staff",pack:!0},cleric:{seed:61,cloak:"ivory",tunic:"cloth",ring:"#ffd54a",gem:"#ffe08a",head:"circlet",hand:"mace",pack:!1},fighter:{seed:59,cloak:"tunic",tunic:"metal",ring:"#cd7f32",gem:"#ffb070",head:"helm",hand:"sword",pack:!1},wizard:{seed:57,cloak:"violet",tunic:"violet",ring:"#7b68ee",gem:"#c8b4ff",head:"hat",hand:"staff",pack:!1}};function Cu(i,t){i.base(t.seed);const e=i.root.at(0,.185,0);e.add(new ue(.9,.022,3,44),"glow",t.ring,0,.02,0,Math.PI/2);for(const s of[-.08,.08])e.add(new et(.09,.1,.15),"leather",void 0,s,.05,.02);const n=i.part("body",{pos:[0,.185,0]});switch(n.add(ls([[.3,.05],[.27,.4],[.2,.8],[.14,.98]],10,.5,lt-1),t.cloak),n.add(new St(.13,.17,.55,8),t.tunic,void 0,0,.62,0),n.add(new ue(.16,.022,3,10),"leather",void 0,0,.6,0,Math.PI/2),n.add(new et(.05,.05,.02),"metal",void 0,0,.6,.17),n.add(new Ue(.13,1),"skin",void 0,0,1.1,0),t.head){case"hood":n.add(ls([[.02,1.36],[.13,1.32],[.17,1.18],[.16,1.02],[.13,.96]],10,.45,lt-.9),t.cloak);break;case"circlet":n.add(new ue(.12,.018,4,12),"glow",t.gem,0,1.17,0,Math.PI/2),n.add(new en(.13,8,5,0,lt,0,1.2),"leather",void 0,0,1.11,-.01);break;case"helm":n.add(new en(.15,8,5,0,lt,0,1.7),"bronze",void 0,0,1.1,0),n.add(new et(.04,.16,.06),"bronze",void 0,0,1.06,.13),n.add(new et(.04,.12,.3),"tunic",void 0,0,1.28,-.04);break;case"hat":n.add(new St(.26,.26,.025,10),t.cloak,void 0,0,1.19,0),n.add(new Re(.15,.42,9),t.cloak,void 0,.02,1.4,-.02,0,0,-.18),n.add(new ue(.14,.015,3,10),"glow",t.gem,0,1.22,0,Math.PI/2);break}if(t.pack?(n.add(new et(.24,.3,.13),"leather",void 0,0,.8,-.2),n.add(new St(.055,.055,.32,8),"cloth",void 0,0,1,-.2,0,0,Math.PI/2)):t.hand==="sword"?(n.add(new St(.24,.24,.03,12),"woodDark",void 0,0,.78,-.2,Math.PI/2),n.add(new en(.06,6,4),"bronze",void 0,0,.78,-.23),n.add(new ue(.23,.015,3,14),"bronze",void 0,0,.78,-.2)):t.hand==="mace"?(n.add(new et(.16,.14,.1),"leather",void 0,.16,.5,-.12,0,.4),n.add(new St(.035,.035,.3,6),"cloth",void 0,0,.9,-.19,0,0,.4)):(n.add(new et(.16,.2,.06),"leather",void 0,0,.75,-.19,0,0,.1),n.add(new et(.17,.03,.07),"glow",t.gem,0,.75,-.19,0,0,.1)),n.beam([.14,.92,0],[.27,.72,.1],.045,t.tunic==="metal"?"bronze":t.tunic),n.beam([-.14,.92,0],[-.2,.62,.06],.045,t.tunic==="metal"?"bronze":t.tunic),t.tunic==="metal"){for(const s of[-.15,.15])n.add(new en(.08,6,4,0,lt,0,1.6),"bronze",void 0,s,.92,0);n.add(new et(.08,.06,.03),"bronze",void 0,0,.6,.17)}if(t.hand==="staff"){e.beam([.3,0,.12],[.28,1.45,.1],.022,"wood");const s=i.part("gem",{pos:[.28,.185+1.56,.1],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new Ee(.07,0),"glow",t.gem,0,0,0,0,0,0,1,1.6,1);for(let r=0;r<3;r++){const a=r/3*lt;e.beam([.28,1.44,.1],[.28+Math.cos(a)*.06,1.6,.1+Math.sin(a)*.06],.008,"wood")}i.light(t.gem,.28,1.75,.1,1.1)}else if(t.hand==="mace"){e.beam([.3,.55,.12],[.3,1.25,.1],.02,"woodDark");const s=i.part("gem",{pos:[.3,.185+1.3,.1],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new jn(.075,0),"glow",t.gem);for(let r=0;r<4;r++)s.add(new et(.02,.1,.05),"bronze",void 0,Math.cos(r/4*lt)*.075,0,Math.sin(r/4*lt)*.075,0,-(r/4)*lt);i.light(t.gem,.3,1.45,.1,.9)}else{e.add(new et(.05,.62,.014),"metal",void 0,.3,.52,.12),e.add(new et(.16,.03,.04),"bronze",void 0,.3,.84,.12),e.add(new St(.02,.02,.16,6),"leather",void 0,.3,.94,.12);const s=i.part("gem",{pos:[.3,.185+1.04,.12],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new Ee(.035,0),"glow",t.gem),i.light(t.gem,.3,1.1,.12,.5)}}const Pu=({parts:i},t)=>{i.body.scale.y=1+Math.sin(t*lt)*.012,i.gem.position.y=i.gem.userData.y0+Math.sin(t*lt)*.02,i.gem.rotation.y=t*lt},Hv={front:"z",build(i){Cu(i,Ru.you)},animate:Pu};function eo(i){return{front:"z",build(t){Cu(t,Ru[i])},animate:Pu}}const Lu=["bare","forge","greater-forge","scriptorium","confluence","workshop","storehouse","factory"],Fr="#ff8a3a",no="#cfe6ff",Pe=.185;function io(i,t){i.add(new ue(t,t*.16,4,10),"metal");for(let e=0;e<4;e++)i.add(new et(t*.12,t*2,t*.12),"metal",void 0,0,0,0,0,0,e*Math.PI/4);for(let e=0;e<8;e++){const n=e/8*lt;i.add(new et(t*.22,t*.22,t*.24),"metal",void 0,Math.cos(n)*t*1.12,Math.sin(n)*t*1.12,0,0,0,n)}}function Vv(i){return{front:"z",build(t,e){const n=101+Lu.indexOf(i)*7;t.base(n);const s=t.root.at(0,Pe,0);switch(i){case"bare":{Qi(s,.4,.95,8,"stoneDark");for(const[r,a]of[[.55,.55],[-.55,.55],[.55,-.55],[-.55,-.55]])s.add(new St(.02,.025,1.25,5),"wood",void 0,r,.62,a);for(const r of[.55,1.1])s.beam([.55,r,.55],[-.55,r,.55],.014,"woodDark"),s.beam([.55,r,-.55],[-.55,r,-.55],.014,"woodDark"),s.beam([.55,r,.55],[.55,r,-.55],.014,"woodDark"),s.beam([-.55,r,.55],[-.55,r,-.55],.014,"woodDark");s.add(new et(.9,.03,.14),"wood",void 0,0,1.12,.5,0,0,.04),s.add(new et(.5,.03,.12),"wood",void 0,.2,.25,.75,0,.4),wi(t,"flag",e,.42,Pe+.95,-.1,.55);break}case"forge":case"greater-forge":{const r=i==="greater-forge",a=r?1.35:1.05;if(Qi(s,.4,a),Rr(s,.4,a),r)for(const l of[.3,.72])s.add(new ue(.42,.025,4,16),"copper",void 0,0,l,0,Math.PI/2);s.add(new et(.11,.17,.03),"glow",Fr,0,.13,.42),s.add(new et(.08,.1,.03),"glow",Fr,.12,a*.68,.4,0,.25),(r?[[.16,-.12],[-.2,.06]]:[[.12,-.1]]).forEach(([l,c],u)=>{s.add(new et(.2,.42,.2),"stoneDark",void 0,l,a+.2,c),s.add(new et(.24,.06,.24),"dark",void 0,l,a+.42,c),Pl(t,`fire${u}`,Fr,l,Pe+a+.42,c,r?.8:.65),sa(t,`smoke${u}`,l,Pe+a+.6,c,r?1.1:.9)}),s.add(new St(.08,.1,.16,7),"woodDark",void 0,.5,.08,.5),s.add(new et(.2,.06,.08),"metal",void 0,.5,.19,.5,0,.5),wi(t,"flag",e,-.34,Pe+a+.08,.2,.5),t.light(Fr,0,a+.5,0,r?1.2:.9);break}case"scriptorium":{Qi(s,.4,1.05),ov(s,.5,1.05,.6,8,"dark"),s.add(new ue(.44,.02,3,16),"woodDark",void 0,0,1.06,0,Math.PI/2),s.add(new et(.14,.18,.03),"glow",no,0,.72,.41),s.add(new et(.03,.2,.03),"dark",void 0,0,.72,.42),s.add(new et(.16,.03,.03),"dark",void 0,0,.72,.42),s.add(new et(.1,.12,.03),"glow",e,.28,.5,.29,0,.75);const r=t.part("pages",{pos:[0,Pe+1.75,0],detail:!0});for(let a=0;a<4;a++){const o=a/4*lt;r.add(new et(.1,.13,.008),"glow",no,Math.cos(o)*.3,a%2*.1-.05,Math.sin(o)*.3,.3,-o,.2)}s.add(new et(.05,.3,.05),"woodDark",void 0,.55,.15,.45),s.add(new et(.18,.02,.14),"cloth",void 0,.55,.31,.45,-.4,.3),wi(t,"flag",e,-.3,Pe+1,.3,.5),t.light(no,0,.8,.5,.8);break}case"confluence":{Qi(s,.4,.85),Rr(s,.4,.85),s.add(new St(.34,.3,.1,8),"stoneDark",void 0,0,.9,0,0,Math.PI/8);const r=t.part("crystals",{pos:[0,Pe+.9,0],uniqueMaterial:!0});r.crystal("mana",e,.11,.5,-.28,.02,.06,.1,-.7),r.crystal("mana","#f4f1ea",.11,.5,.28,.02,-.06,-.1,.7),r.crystal("mana",e,.05,.22,-.1,0,.22,.4,-.2),r.crystal("mana","#f4f1ea",.05,.22,.12,0,-.2,-.4,.2),t.part("ring",{pos:[0,Pe+1.55,0],rot:[1.3,0,.2],detail:!0}).add(new ue(.22,.016,3,20),"glow",e),t.part("ring2",{pos:[0,Pe+1.55,0],rot:[1.8,0,-.4],detail:!0}).add(new ue(.17,.014,3,18),"glow","#fff6e0"),t.part("drop",{pos:[0,Pe+1.55,0],detail:!0}).add(new Ee(.07,0),"glow",e,0,0,0,0,0,0,1,1.5,1),s.add(new et(.1,.13,.03),"glow",e,0,.55,.41),wi(t,"flag",e,.42,Pe+.85,-.2,.45),t.light(e,0,1.6,0,1.1);break}case"workshop":{Qi(s,.38,1),Rr(s,.38,1);for(const o of[-.32,.32])s.add(new St(.025,.03,.62,5),"wood",void 0,.82,.31,o);s.add(new et(.62,.035,.8),"woodDark",void 0,.55,.7,0,0,0,.35);for(const o of[.4,.55,.7])s.add(new et(.06,.02,.82),"wood",void 0,o,.72+(o-.55)*-.36,0,0,0,.35);s.add(new et(.4,.05,.22),"wood",void 0,.6,.3,.2);for(const o of[.12,.28])s.add(new et(.04,.28,.04),"woodDark",void 0,.6,.14,o);s.add(new et(.03,.14,.03),"wood",void 0,.5,.38,.2,0,0,.8),s.add(new et(.08,.05,.04),"metal",void 0,.45,.43,.2,0,0,.8),ln(s,.16,.65,0,-.3,.3),s.add(new St(.03,.03,.2,6),"woodDark",void 0,.42,.6,-.05,0,0,Math.PI/2);const r=t.part("gear",{pos:[.5,Pe+.6,-.05],rot:[0,Math.PI/2,0],detail:!0});io(r,.16);const a=t.part("gear2",{pos:[.5,Pe+.88,-.05],rot:[0,Math.PI/2,0],detail:!0});io(a,.09),s.add(new et(.1,.12,.03),"glow",e,-.1,.5,.39,0,-.25),wi(t,"flag",e,-.32,Pe+1,.2,.5),t.light(e,0,.7,.4,.5);break}case"storehouse":{Qi(s,.5,.75,10),Rr(s,.5,.75,10),s.add(new St(.44,.44,.04,10),"woodDark",void 0,0,.78,0,0,Math.PI/10),ln(s,.2,.1,.8,-.1,.2),ln(s,.15,-.16,.8,.12,.9),ln(s,.12,.1,1,-.1,.5,"woodDark"),ln(s,.2,.72,0,.3,.2),ln(s,.16,.62,0,-.5,.9),ln(s,.14,.72,.2,.3,.7,"woodDark"),$r(s,.1,.24,-.7,0,.3),$r(s,.1,.24,-.62,0,-.42,!0),$r(s,.09,.22,-.4,0,-.66),s.add(new en(.11,6,5),"clothDark",void 0,.3,.1,-.68,0,0,0,1,.8,1),s.add(new et(.03,.03,.34),"woodDark",void 0,.3,.62,.6);const r=t.part("sign",{pos:[.3,Pe+.62,.72],detail:!0});r.add(new et(.2,.14,.02),"glow",e,0,-.1,0),r.add(new et(.01,.06,.01),"metal",void 0,0,-.03,0),t.light(e,.3,.55,.75,.4);break}case"factory":{s.add(new et(.72,.16,.72),"stoneDark",void 0,0,.08,0),s.add(new et(.62,1.1,.62),"brick",void 0,0,.71,0);for(const o of[.45,.85])s.add(new et(.66,.04,.66),"stoneDark",void 0,0,o,0);s.add(new et(.7,.06,.7),"dark",void 0,0,1.29,0),s.add(new et(.16,.24,.05),"dark",void 0,0,.28,.32);for(const o of[-.18,.18])s.add(new et(.1,.12,.03),"glow",e,o,.7,.32);s.add(new St(.1,.13,.8,8),"stoneDark",void 0,-.18,1.7,-.18),s.add(new St(.13,.11,.08,8),"dark",void 0,-.18,2.12,-.18),sa(t,"smoke0",-.18,Pe+2.18,-.18,1.2),s.add(new St(.11,.11,.22,8),"metal",void 0,.16,1.43,.1);const r=t.part("rod",{pos:[.16,Pe+1.54,.1],detail:!0});r.add(new St(.035,.035,.3,6),"metal",void 0,0,.15,0),r.add(new et(.16,.05,.1),"dark",void 0,0,.32,0),s.add(new St(.03,.03,.16,6),"woodDark",void 0,.36,.6,.05,0,0,Math.PI/2);const a=t.part("gear",{pos:[.4,Pe+.6,.05],rot:[0,Math.PI/2,0],detail:!0});io(a,.15),s.add(new et(.34,.05,.16),"metal",void 0,.56,.24,.25),ln(s,.12,.72,.27,.25,.2),wi(t,"flag",e,-.28,Pe+1.32,.26,.5),t.light(e,0,.7,.4,.5);break}}},animate({parts:t},e){t.flag&&Dl(t.flag,e);for(let n=0;n<2;n++)t[`fire${n}`]&&Il(t[`fire${n}`],e),t[`smoke${n}`]&&Ll(t[`smoke${n}`],e);t.pages&&(t.pages.rotation.y=e*lt,t.pages.position.y=Pe+1.75+Math.sin(e*lt*2)*.03),t.ring&&(t.ring.rotation.z=e*lt),t.ring2&&(t.ring2.rotation.z=-e*lt),t.drop&&(t.drop.rotation.y=e*lt,t.drop.position.y=Pe+1.55+Math.sin(e*lt)*.04),t.gear&&(t.gear.rotation.z=e*lt),t.gear2&&(t.gear2.rotation.z=-e*lt*(16/9)),t.sign&&(t.sign.rotation.z=Math.sin(e*lt)*.12),t.rod&&(t.rod.position.y=Pe+1.54+(Math.sin(e*lt*2)*.5+.5)*.14)}}}const so="#fff1c4",ph="#ff7a2a";function mh(i){return{front:"z",build(t){t.base(i?71:73);const e=t.root.at(0,.185,0);e.add(new St(.5,.56,.1,8),"stone",void 0,0,.05,0,0,Math.PI/8),e.add(new St(.36,.4,.1,8),"stoneDark",void 0,0,.15,0,0,Math.PI/8),e.add(new St(.12,.2,.5,8),"stone",void 0,0,.45,0);for(let n=0;n<3;n++){const s=n/3*lt+.4;e.beam([Math.cos(s)*.14,.62,Math.sin(s)*.14],[Math.cos(s)*.3,.98,Math.sin(s)*.3],.018,"dark")}e.add(new St(.32,.18,.2,10,1,!0),"dark",void 0,0,.98,0),e.add(new St(.18,.18,.03,10),"dark",void 0,0,.89,0),e.add(new ue(.32,.022,4,12),"metal",void 0,0,1.08,0,Math.PI/2);for(let n=0;n<5;n++){const s=n/5*lt;e.add(new jn(.05,0),i?"glow":"rock",i?ph:void 0,Math.cos(s)*.14,.96,Math.sin(s)*.14,n,n)}for(let n=0;n<4;n++){const s=n/4*lt+Math.PI/4;e.add(new et(.1,.22,.1),"stoneDark",void 0,Math.cos(s)*.62,.11,Math.sin(s)*.62,0,-s),e.add(new Ee(.03,0),i?"glow":"metal",i?so:void 0,Math.cos(s)*.6,.2,Math.sin(s)*.6)}for(let n=0;n<3;n++)e.add(new St(.04,.04,.3,5),"woodDark",void 0,.6+n%2*.05,.04+Math.floor(n/2)*.07,-.5,Math.PI/2,0,.2);if(i){Pl(t,"fire",so,0,.185+.98,0,1.4);const n=t.part("sparks",{pos:[0,.185+1.3,0],detail:!0});for(let s=0;s<4;s++){const r=s/4*lt;n.add(new _n(.025,0),"glow",ph,Math.cos(r)*.18,s*.09,Math.sin(r)*.18,r,r)}t.light(so,0,1.4,0,1.4)}else e.add(new Ue(.05,0),"clothDark",void 0,.05,1.12,0),e.add(new Ue(.035,0),"clothDark",void 0,-.04,1.24,.03)},animate({parts:t},e){t.fire&&Il(t.fire,e,1.2),t.sparks&&(t.sparks.rotation.y=e*lt,t.sparks.position.y=.185+1.3+e*.2,t.sparks.scale.setScalar(1-e*.5))}}}const Ps="#dfe9ff",Wv={front:"z",build(i){i.base(79);const t=i.root.at(0,.185,0);t.add(new St(.42,.48,.22,8),"stone",void 0,0,.11,0,0,Math.PI/8);const e=.3,n=[[e,e],[-e,e],[e,-e],[-e,-e]];for(const[a,o]of n)t.beam([a*1.2,.2,o*1.2],[a*.8,1.55,o*.8],.035,"wood");for(const a of[.6,1.1]){const o=1.2-a/1.55*.4;t.beam([e*o,a,e*o],[-e*o,a,e*o],.02,"woodDark"),t.beam([e*o,a,-e*o],[-e*o,a,-e*o],.02,"woodDark"),t.beam([e*o,a,e*o],[e*o,a,-e*o],.02,"woodDark"),t.beam([-e*o,a,e*o],[-e*o,a,-e*o],.02,"woodDark"),t.beam([e*o,a,e*o],[-e*(o-.13),a+.45,e*(o-.13)],.012,"woodDark"),t.beam([-e*o,a,e*o],[e*(o-.13),a+.45,e*(o-.13)],.012,"woodDark")}for(let a=0;a<6;a++)t.add(new et(.2,.02,.02),"wood",void 0,0,.35+a*.22,.42-a*.03);for(const a of[-.1,.1])t.beam([a,.25,.44],[a,1.6,.26],.014,"wood");t.add(new et(.76,.06,.76),"woodDark",void 0,0,1.58,0);for(const[a,o]of n)t.add(new et(.035,.28,.035),"wood",void 0,a*1.2,1.74,o*1.2);for(const a of[-1,1])t.add(new et(.74,.025,.025),"wood",void 0,0,1.86,a*.36),t.add(new et(.025,.025,.74),"wood",void 0,a*.36,1.86,0);for(const[a,o]of n)t.add(new et(.03,.55,.03),"wood",void 0,a*1.05,2.12,o*1.05);t.add(new Re(.6,.42,4),"dark",void 0,0,2.58,0,0,Math.PI/4),t.add(new Ee(.04,0),"glow",Ps,0,2.82,0),t.add(new et(.02,.02,.16),"metal",void 0,0,2.34,.42);const s=i.part("lamp",{pos:[0,.185+2.33,.5],detail:!0});s.add(new Ee(.06,0),"glow",Ps,0,-.09,0,0,0,0,1,1.3,1),s.add(new et(.03,.03,.03),"metal",void 0,0,-.02,0),t.add(new St(.06,.08,.16,6),"woodDark",void 0,0,1.68,0);const r=i.part("ballista",{pos:[0,.185+1.78,0],detail:!0});r.add(new et(.06,.05,.5),"wood",void 0,0,0,.05,-.15),r.add(new et(.44,.03,.03),"woodDark",void 0,0,.03,.26,-.15),r.add(new St(.008,.008,.44,4),"clothDark",void 0,0,.04,.14,-.15,0,Math.PI/2),r.add(new St(.01,.01,.34,4),"metal",void 0,0,.05,.12,Math.PI/2-.15),r.add(new Re(.02,.06,4),"glow",Ps,0,.08,.31,Math.PI/2-.15),t.add(new ue(.44,.02,4,16),"glow",Ps,0,.2,0,Math.PI/2),t.add(new St(.07,.06,.28,6),"leather",void 0,.6,.14,.3);for(let a=0;a<3;a++)t.add(new St(.008,.008,.36,3),"metal",void 0,.6+(a-1)*.03,.3,.3+a%2*.03);i.light(Ps,0,2.3,.5,1)},animate({parts:i},t){i.ballista.rotation.y=Math.sin(t*lt)*.45,i.lamp.rotation.x=Math.sin(t*lt+.6)*.18}},ro="#ff8a3a",Xv={front:"z",build(i,t){i.base(83);const e=i.root.at(0,.185,0);e.add(new et(.66,.36,.56),"brick",void 0,-.12,.18,-.05),e.add(new et(.7,.05,.6),"stoneDark",void 0,-.12,.38,-.05),e.add(new et(.14,.12,.03),"glow",ro,-.12,.14,.24),e.add(new en(.28,9,7),"copper",void 0,-.12,.64,-.05),e.add(new St(.1,.18,.22,9),"copper",void 0,-.12,.98,-.05),e.add(new ue(.2,.02,4,12),"metal",void 0,-.12,.86,-.05,Math.PI/2);const n=[[-.12,1.1,-.05],[.02,1.26,-.02],[.3,1.3,.06],[.5,1.15,.14],[.58,.85,.2],[.58,.55,.2]];for(let a=0;a<n.length-1;a++)e.beam(n[a],n[a+1],.035,"copper");for(let a=0;a<3;a++)e.add(new ue(.09,.02,4,10),"copper",void 0,.58,.95-a*.12,.2,Math.PI/2);e.add(new St(.22,.18,.34,10,1,!0),"woodDark",void 0,.58,.17,.2),e.add(new St(.19,.19,.02,10),"woodDark",void 0,.58,.01,.2),e.add(new ue(.22,.015,4,12),"metal",void 0,.58,.3,.2,Math.PI/2),i.part("brew",{pos:[.58,.185+.3,.2],uniqueMaterial:!0}).add(new St(.2,.2,.03,10),"mana",t),i.part("drip",{pos:[.58,.185+.5,.2],detail:!0}).add(new Ee(.03,0),"glow",t,0,0,0,0,0,0,1,1.6,1),sa(i,"vapour",-.12,.185+1.1,-.05,.7),Pl(i,"fire",ro,-.12,.185+.02,.28,.45),ln(e,.16,-.66,0,.36,.3),ln(e,.12,-.6,.16,.34,.9,"woodDark"),$r(e,.09,.22,-.5,0,-.55,!0);for(let a=0;a<3;a++){const o=.15+a*.14;e.add(new St(.03,.05,.1,6),"glow",a===1?t:"#f4f1ea",o,.05,.62),e.add(new St(.012,.012,.05,5),"metal",void 0,o,.12,.62)}e.add(new et(.04,.04,.4),"wood",void 0,-.12,.5,-.5,-.6),i.light(t,.58,.6,.2,.8),i.light(ro,-.12,.2,.35,.5)},animate({parts:i,meshes:t},e){Ll(i.vapour,e,.7),Il(i.fire,e),i.drip.position.y=.185+.5-e%1*.16,i.drip.scale.y=1-e%1*.5;const n=t["brew#opaque"].material;n.emissiveIntensity=n.userData.base*(1+.3*Math.sin(e*lt))}},ao="#ffd9a0",Or=.185,qv={front:"x",build(i){i.base(89,1.15,.8);const t=i.part("horse",{pos:[0,Or+.32,0]});t.add(new et(.62,.24,.22),"mule",void 0,0,.3,0),t.add(new et(.2,.2,.2),"mule",void 0,-.3,.32,0,0,0,.3),t.add(new et(.14,.34,.14),"mule",void 0,.36,.5,0,0,0,-.55),t.add(new et(.24,.11,.1),"mule",void 0,.52,.66,0,0,0,-.25);for(const u of[-.04,.04])t.add(new Re(.022,.1,4),"mule",void 0,.42,.74,u,u*3,0,.1);for(let u=0;u<4;u++)t.add(new et(.05,.08,.04),"dark",void 0,.3+u*.05,.62-u*.03,0,0,0,-.5);i.part("tail",{parent:t,pos:[-.36,.36,0],detail:!0}).add(new Re(.03,.3,4),"dark",void 0,-.06,-.12,0,0,0,.4),[[.22,.07,0],[.22,-.07,.15],[-.22,.07,.55],[-.22,-.07,.7]].forEach(([u,f],h)=>{const d=i.part(`hip${h}`,{parent:t,pos:[u,.22,f],detail:!0});d.add(new et(.06,.3,.06),"mule",void 0,0,-.15,0),d.add(new et(.065,.045,.065),"hoof",void 0,0,-.32,0)}),t.add(new et(.3,.05,.28),"tunic",void 0,.02,.43,0),t.add(new et(.24,.06,.2),"leather",void 0,.02,.47,0),t.add(new St(.035,.035,.26,6),"leather",void 0,-.14,.42,.14,0,0,.3),t.add(new St(.04,.04,.02,6),"cloth",void 0,-.14-.12*Math.sin(-.3),.42+.12*Math.cos(.3),.14,0,0,.3);const s=i.part("rider",{parent:t,pos:[.02,.5,0],detail:!0});for(const u of[-.12,.12])s.add(new et(.08,.22,.07),"leather",void 0,0,-.06,u,0,0,0);s.add(new St(.1,.13,.32,7),"clothDark",void 0,0,.18,0,0,0,-.15),s.add(new Ue(.07,0),"skin",void 0,.03,.42,0),s.add(new Re(.09,.15,7),"clothDark",void 0,.02,.5,-.01,0,0,-.2),s.beam([.08,.28,.06],[.3,.2,.05],.028,"clothDark"),s.beam([.06,.28,-.06],[.28,.2,-.05],.028,"clothDark");for(const u of[-.05,.05])s.beam([.3,.2,u],[.5,.16,u*1.2],.006,"leather");i.part("cloak",{parent:s,pos:[-.06,.34,0],detail:!0}).add(new Re(.16,.42,6,1,!0),"clothDark",void 0,-.14,-.1,0,0,0,1.1),s.add(new St(.01,.012,.7,5),"wood",void 0,-.1,.35,-.16,0,0,.2);const a=i.part("flag",{parent:s,pos:[-.17,.68,-.16],detail:!0}),o=new ti;o.moveTo(0,0),o.lineTo(-.24,-.05),o.lineTo(0,-.13),a.add(new Ni(o),"glow",ao,0,0,0,0,Math.PI/2);const l=i.part("lamp",{parent:t,pos:[.18,.5,.16],detail:!0});l.add(new Ee(.04,0),"glow",ao,0,-.08,0),l.add(new St(.005,.005,.08,3),"metal",void 0,0,-.03,0);const c=i.part("dust",{pos:[-.55,Or+.05,0],detail:!0});for(let u=0;u<3;u++)c.add(new Ue(.045+u*.02,0),"clothDark",void 0,-u*.12,.04+u*.05,(u-1)*.08,u,u);i.light(ao,.2,.9,.16,.7)},animate({parts:i},t){const e=t*lt*2;i.horse.position.y=Or+.32+Math.abs(Math.sin(e))*.05,i.horse.rotation.z=Math.sin(e)*.05;const n=[0,.15,.55,.7];for(let s=0;s<4;s++)i[`hip${s}`].rotation.z=Math.sin(e+n[s]*lt)*.7;i.tail.rotation.z=Math.sin(e+1)*.25-.3,i.rider.rotation.z=Math.sin(e)*.05-.1,i.cloak.rotation.z=.2+Math.sin(e+.5)*.15,Dl(i.flag,t*2),i.lamp.rotation.z=Math.sin(e+2)*.3,i.dust.scale.setScalar(.8+t*2%1*.5),i.dust.position.y=Or+.05+t*2%1*.08}},Yv={front:"z",build(i,t){i.base(97);const e=i.root.at(0,.185,0),n=Ui(17);for(let l=0;l<6;l++){const c=l/6*lt+n()*.4,u=.38+n()*.16;e.add(new et(.28,.06,.2),"rock",void 0,Math.cos(c)*u,.05+n()*.05,Math.sin(c)*u,(n()-.5)*.3-.35,-c,(n()-.5)*.3)}e.add(new St(.22,.28,.06,7),"void",void 0,0,.03,0);const s=i.part("ring",{pos:[0,.185+.03,0],uniqueMaterial:!0});s.add(new ue(.58,.03,4,24),"glow",t,0,0,0,Math.PI/2),s.add(new ue(.3,.025,4,16),"glow",t,0,.02,0,Math.PI/2);const r=i.part("column",{pos:[0,.185+.05,0],uniqueMaterial:!0});r.crystal("mana",t,.13,.8,0,0,0,0,0),r.crystal("mana",t,.06,.5,.12,0,.08,.15,-.3),r.crystal("mana",t,.06,.45,-.1,0,-.1,-.2,.3),i.part("sheath",{pos:[0,.185+.05,0],detail:!0}).add(new Re(.26,1.3,7,1,!0),"ghost",void 0,0,.65,0,Math.PI,0,0);for(const[l,c,u]of[["sprayA",.34,1],["sprayB",.5,-1]]){const f=i.part(l,{pos:[0,.7849999999999999,0],detail:!0});for(let h=0;h<6;h++){const d=h/6*lt;f.add(new _n(.05+h%2*.02,0),"glow",t,Math.cos(d)*c,(h*u+6)%6*.08,Math.sin(d)*c,d,d*2)}}const o=i.part("motes",{pos:[0,.185+.3,0],detail:!0});for(let l=0;l<5;l++){const c=l/5*lt+.3;o.add(new Ee(.03,0),"glow","#ffffff",Math.cos(c)*.2,l*.15,Math.sin(c)*.2)}i.light(t,0,.9,0,1.6)},animate({parts:i,meshes:t},e){i.column.rotation.y=e*lt*.5,i.column.scale.y=1+Math.sin(e*lt*2)*.05,i.sheath.scale.set(1+Math.sin(e*lt*2)*.12,1+Math.sin(e*lt*2+1)*.06,1+Math.sin(e*lt*2)*.12),i.sprayA.rotation.y=e*lt,i.sprayA.position.y=.185+.6+Math.sin(e*lt)*.18,i.sprayB.rotation.y=-e*lt,i.sprayB.position.y=.185+.6+Math.cos(e*lt)*.14,i.motes.position.y=.185+.3+e*.5,i.motes.scale.setScalar(1-e*.6);for(const n of["ring#opaque","column#opaque"]){const s=t[n].material;s.emissiveIntensity=s.userData.base*(1.1+.45*Math.sin(e*lt*2))}}},oo="#9fd8ff",gh="#b9c0d6";function lo(i){return{front:"z",build(t){if(i==="shadow"){t.base(131),t.root.at(0,.185,0).add(new St(.62,.7,.025,12),"void",void 0,0,.01,0);const n=t.part("f",{pos:[0,.185,0]});n.add(new en(.34,8,6),"void",void 0,0,.36,-.05,-.3,0,0,1,.9,1.1),n.add(new en(.2,7,5),"void",void 0,0,.66,.16,0,0,0,1,.8,1);for(const r of[-.06,.06])n.add(new Ee(.035,0),"eye",void 0,r,.68,.33);for(const r of[-1,1]){const a=t.part(r<0?"armL":"armR",{parent:n,pos:[r*.26,.5,.12],detail:!0});a.beam([0,0,0],[r*.18,-.42,.28],.05,"void");for(let o=-1;o<=1;o++)a.add(new Re(.016,.12,4),"claw",void 0,r*.18+o*.04,-.46,.36,1.6,0,o*.3)}const s=t.part("wisps",{parent:n,detail:!0});for(let r=0;r<5;r++){const a=r/5*lt;s.add(new Re(.035,.22,4),"void",void 0,Math.cos(a)*.5,.1,Math.sin(a)*.5,Math.cos(a)*.6,0,-Math.sin(a)*.6)}t.light("#ff4d5e",0,.7,.35,.35)}else if(i==="specter"){t.base(137);const e=t.part("f",{pos:[0,.45,0]});e.add(ls([[.14,0],[.34,.35],[.3,.9],[.26,1.3],[.12,1.62]],9),"ghost"),e.add(new Ue(.16,0),"void",void 0,0,1.68,.06,0,0,0,1,1.25,.8),e.add(ls([[.03,2],[.2,1.92],[.26,1.7],[.22,1.5]],9,.4,lt-.8),"ghost");for(const n of[-.06,.06])e.add(new Ee(.03,0),"eye",void 0,n,1.72,.2);for(const n of[-1,1]){const s=t.part(n<0?"armL":"armR",{parent:e,pos:[n*.24,1.35,.02],detail:!0});s.beam([0,0,0],[n*.5,.25,.1],.06,"ghost"),s.add(new Ee(.045,0),"ghost",void 0,n*.54,.28,.11);for(let r=0;r<4;r++)s.add(new ue(.03,.008,3,6),"glow",gh,n*.56,.22-r*.07,.11,r%2*Math.PI/2,0,0)}for(let n=0;n<5;n++)e.add(new ue(.03,.008,3,6),"glow",gh,.2,.75-n*.07,.24,n%2*Math.PI/2,.2,0);t.light("#8f96ff",0,1.4,.3,.7)}else{t.base(139);const e=t.part("f",{pos:[0,1.1,0]}),n=t.part("core",{parent:e,uniqueMaterial:!0});n.add(new Ue(.22,1),"glow",oo),n.add(new Ue(.12,0),"glow","#ffffff",0,0,.06);const s=t.part("tails",{parent:e,detail:!0});for(let a=0;a<5;a++){const o=a/5*lt+.5,l=Math.cos(o)*.12,c=Math.sin(o)*.12;s.beam([l,-.1,c],[l*3.5,-.55-a%2*.15,c*3.5-.15],.02,"ghost")}const r=t.part("ring",{parent:e,rot:[.5,0,.2],detail:!0});for(let a=0;a<7;a++){const o=a/7*lt;r.add(new _n(.035,0),"glow",oo,Math.cos(o)*.42,0,Math.sin(o)*.42,o,o)}t.root.at(0,.185,0).add(new St(.34,.4,.02,12),"glow","#4a7ea8",0,.01,0),t.light(oo,0,1.1,0,1.2)}},animate({parts:t,meshes:e},n){const s=n*lt;if(i==="shadow")t.f.position.y=.185+Math.abs(Math.sin(s))*.03,t.f.rotation.y=Math.sin(s)*.15,t.f.scale.y=1+Math.sin(s*2)*.03,t.armL&&(t.armL.rotation.x=Math.sin(s)*.15,t.armR.rotation.x=Math.sin(s+1.5)*.15,t.wisps.rotation.y=s/5);else if(i==="specter")t.f.position.y=.45+Math.sin(s)*.1,t.f.rotation.z=Math.sin(s*.5)*.06,t.armL&&(t.armL.rotation.z=Math.sin(s)*.12,t.armR.rotation.z=-Math.sin(s+.7)*.12);else{t.f.position.set(Math.sin(s*2)*.16,1.1+Math.sin(s)*.12,Math.sin(s)*.1),t.core.rotation.y=s,t.core.scale.setScalar(1+Math.sin(s*3)*.1),t.ring&&(t.ring.rotation.y=-s);const r=e["core#opaque"].material;r.emissiveIntensity=r.userData.base*(1+.4*Math.sin(s*3))}}}}const $v={front:"z",build(i,t){i.base(103);const e=i.root.at(0,.185,0);for(let o=0;o<3;o++)e.add(new St(.11,.11,.02,6),"stone",void 0,(o-1)*.06,.01,.5+o*.16,0,o);const n=12;for(let o=0;o<n;o++){const l=o/n*lt,c=.62;e.add(new et(.17,.19,.14),o%3?"stone":"stoneDark",void 0,Math.cos(l)*c,.82+Math.sin(l)*c,0,0,0,l)}for(const o of[-1,1])e.add(new et(.2,.7,.24),"stoneDark",void 0,o*.62,.33,-.02,0,0,o*.08),e.add(new et(.3,.1,.34),"stone",void 0,o*.66,.05,-.02),e.add(new en(.1,5,4),"grass",void 0,o*.72,.1,.16,0,0,0,1,.5,1);for(const o of[-1,1]){e.add(new St(.006,.006,.12,3),"metal",void 0,o*.3,1.34,.1);const l=i.part(o<0?"lampL":"lampR",{pos:[o*.3,.185+1.28,.1],detail:!0});l.add(new et(.06,.08,.06),"metal",void 0,0,-.04,0),l.add(new Ee(.035,0),"glow","#ffd9a0",0,-.04,0)}i.part("disc",{pos:[0,.185+.82,0],uniqueMaterial:!0}).add(new St(.5,.5,.02,24),"mana",t,0,0,0,Math.PI/2);const r=i.part("ripple",{pos:[0,.185+.82,.03],detail:!0});for(let o=0;o<3;o++)r.add(new ue(.12+o*.13,.012,3,20),"glow","#ffffff",0,0,0,0,0,o*.4);const a=i.part("motes",{pos:[0,.185+.82,.1],detail:!0});for(let o=0;o<6;o++){const l=o/6*lt;a.add(new Ee(.025,0),"glow",t,Math.cos(l)*.3,Math.sin(l)*.3,o*.06)}i.light(t,0,.9,.3,1.2)},animate({parts:i,meshes:t},e){const n=e*lt;i.disc.rotation.y=n,i.disc.scale.set(1+Math.sin(n)*.03,1,1+Math.sin(n)*.03),i.ripple.rotation.z=-n*.5,i.ripple.scale.setScalar(.8+e*.35),i.motes.position.z=.1+e*.35,i.motes.rotation.z=n*.3,i.motes.scale.setScalar(1-e*.5),i.lampL.rotation.z=Math.sin(n)*.2,i.lampR.rotation.z=Math.sin(n+1)*.2;const s=t["disc#opaque"].material;s.emissiveIntensity=s.userData.base*(1.2+.3*Math.sin(n))}},Br="#ffe9a8",Kv={front:"z",build(i){i.base(107,.85,.85);const t=i.root.at(0,.185,0);t.add(new en(.42,9,6),"grass",void 0,0,-.08,0,0,0,0,1,.55,1),t.add(new en(.22,7,5),"grass",void 0,.36,-.02,.2,0,0,0,1,.5,1),t.add(new St(.07,.08,.6,6),"woodDark",void 0,-.3,.07,-.35,0,.6,Math.PI/2);const e=Ui(29);[[.18,.1,.3,.28],[-.2,.12,.34,.2],[.02,.1,-.18,.16],[.3,.1,-.12,.12]].forEach(([r,a,o,l])=>{t.add(new St(.035,.05,o,6),"cloth",void 0,r,.1+o/2,a,(e()-.5)*.2,0,(e()-.5)*.2),t.add(new Re(l,l*.7,8),"glow",Br,r,.12+o+l*.2,a);for(let c=0;c<3;c++)t.add(new Ee(.018,0),"cloth",void 0,r+(e()-.5)*l,.12+o+l*.25,a+(e()-.5)*l)}),t.beam([-.05,.14,.08],[-.02,.62,.1],.014,"grass");for(let r=0;r<2;r++)t.add(new Re(.06,.16,4),"grass",void 0,-.05+(r?.08:-.08),.32+r*.1,.09,0,0,r?-1.2:1.2);const s=i.part("bloom",{pos:[-.02,.185+.64,.1],uniqueMaterial:!0});for(let r=0;r<6;r++){const a=r/6*lt;s.add(new Re(.045,.14,4),"glow","#fff7e0",Math.cos(a)*.05,.05,Math.sin(a)*.05,Math.sin(a)*.9,0,-Math.cos(a)*.9)}s.add(new Ee(.03,0),"glow",Br,0,.03,0);for(const[r,a,o]of[["fliesA",.4,.5],["fliesB",.56,.32]]){const l=i.part(r,{pos:[0,.185+o,0],detail:!0});for(let c=0;c<4;c++){const u=c/4*lt+a;l.add(new Ee(.018,0),"glow",Br,Math.cos(u)*a,c%2*.12,Math.sin(u)*a)}}i.light(Br,0,.5,0,.6)},animate({parts:i,meshes:t},e){const n=e*lt;i.bloom.rotation.y=n*.3,i.bloom.scale.set(1+Math.sin(n)*.15,1,1+Math.sin(n)*.15),i.fliesA.rotation.y=n,i.fliesA.position.y=.185+.5+Math.sin(n*2)*.05,i.fliesB.rotation.y=-n*.7,i.fliesB.position.y=.185+.32+Math.cos(n*2)*.05;const s=t["bloom#opaque"].material;s.emissiveIntensity=s.userData.base*(1+.3*Math.sin(n))}},Zv={front:"z",build(i,t){i.base(113,.62,.62);const e=i.root.at(0,.185,0),n=Ui(31),s=[[.26,.09],[.21,.08],[.16,.07],[.11,.07]];let r=0;s.forEach(([o,l],c)=>{e.add(new St(o,o*1.05,l,6),c%2?"stone":"rock",void 0,(n()-.5)*.04,r+l/2,(n()-.5)*.04,0,n()*2),r+=l}),e.add(new Ee(.05,0),"glow",t,0,r+.05,0),e.add(new St(.02,.025,.62,5),"wood",void 0,.3,.31,.1),e.add(new et(.26,.08,.02),"woodDark",void 0,.36,.5,.11,0,-.2),e.add(new Re(.04,.05,4),"woodDark",void 0,.51,.5,.14,0,-.2,-Math.PI/2),wi(i,"flag",t,.3,.185+.62,.1,.32),i.part("mote",{pos:[0,.185+r+.2,0],detail:!0}).add(new _n(.025,0),"glow",t),i.light(t,0,.5,0,.35)},animate({parts:i},t){Dl(i.flag,t),i.mote.position.y=.185+.51+Math.sin(t*lt)*.06,i.mote.rotation.y=t*lt}},In=.185;function Jv(i){for(let t=-4;t<=4;t++)i.add(new et(.1,.03,.6),"woodDark",void 0,t*.24,.015,0);for(const t of[-.2,.2])i.add(new et(2.1,.03,.035),"metal",void 0,0,.045,t)}function _h(i,t,e,n){t.forEach((s,r)=>{for(const a of[-.24,.24]){const o=i.part(`wheel${r}${a<0?"a":"b"}`,{pos:[s,n,a],detail:!0});o.add(new St(e,e,.05,10),"metal",void 0,0,0,0,Math.PI/2),o.add(new et(.03,e*1.6,.06),"dark",void 0,0,0,0,0,0,.5),o.add(new et(.03,e*1.6,.06),"dark",void 0,0,0,0,0,0,-.5)}})}function vh(i){return{front:"x",build(t,e){t.base(i==="engine"?127:129,1.3,.7);const n=t.root.at(0,In,0);if(Jv(n),i==="engine"){n.add(new et(1.4,.08,.5),"dark",void 0,0,.26,0),n.add(new St(.22,.22,.86,12),"brick",void 0,.12,.5,0,0,0,Math.PI/2);for(const o of[-.12,.2,.44])n.add(new ue(.225,.015,4,12),"copper",void 0,o,.5,0,0,Math.PI/2);n.add(new St(.16,.2,.1,12),"metal",void 0,.6,.5,0,0,0,Math.PI/2),n.add(new St(.07,.09,.32,8),"dark",void 0,.42,.85,0),n.add(new St(.1,.07,.06,8),"dark",void 0,.42,1.03,0),n.add(new en(.08,7,5),"copper",void 0,.1,.76,0),n.add(new et(.44,.5,.5),"brick",void 0,-.42,.55,0),n.add(new et(.5,.05,.56),"dark",void 0,-.42,.82,0);for(const o of[-.26,.26])n.add(new et(.2,.18,.02),"glow","#ffd9a0",-.4,.62,o);n.add(new et(.02,.18,.2),"glow","#ffd9a0",-.65,.62,0);for(let o=0;o<4;o++)n.beam([.66,.36,-.24+o*.16],[.82,.1,-.24+o*.16],.012,"metal");const s=t.part("lamp",{pos:[.66,In+.68,0],detail:!0});s.add(new St(.06,.06,.08,8),"metal",void 0,0,0,0,0,0,Math.PI/2),s.add(new Ee(.05,0),"glow",e,.05,0,0),_h(t,[.32,0,-.32],.13,In+.16),t.part("rod",{pos:[0,In+.16,.28],detail:!0}).add(new et(.7,.03,.02),"metal",void 0,0,0,0),t.part("rod2",{pos:[0,In+.16,-.28],detail:!0}).add(new et(.7,.03,.02),"metal",void 0,0,0,0),sa(t,"smoke0",.42,In+1.08,0,1.1),t.light(e,.75,.7,0,.9),t.light("#ffd9a0",-.42,.65,0,.4)}else{n.add(new et(1.3,.08,.5),"woodDark",void 0,0,.26,0);for(const r of[-.6,.6])n.add(new et(.06,.16,.5),"woodDark",void 0,r,.38,0);n.add(new et(1.3,.04,.06),"metal",void 0,0,.22,.26),n.add(new et(1.3,.04,.06),"metal",void 0,0,.22,-.26),ln(n,.3,-.28,.3,-.05,.1),ln(n,.22,.12,.3,.1,.5),ln(n,.18,.4,.3,-.12,.2,"woodDark"),n.add(new et(.7,.28,.46),"clothDark",void 0,-.1,.5,0,0,0,.06);for(const r of[-.35,.15])n.add(new ue(.29,.01,3,10,Math.PI),"leather",void 0,r,.34,0,0,Math.PI/2);for(const r of[-.68,.68])for(const a of[-.15,.15])n.add(new St(.03,.03,.08,6),"metal",void 0,r,.28,a,0,0,Math.PI/2);n.add(new ue(.03,.008,3,8),"metal",void 0,.72,.26,0,0,Math.PI/2);const s=t.part("lamp",{pos:[-.62,In+.6,-.2],detail:!0});s.add(new et(.06,.08,.06),"metal",void 0,0,-.04,0),s.add(new Ee(.04,0),"glow",e,0,-.04,0),n.add(new et(.02,.2,.02),"metal",void 0,-.62,.5,-.2),_h(t,[.36,-.36],.12,In+.15),t.light(e,-.62,.6,-.2,.6)}},animate({parts:t},e){const n=e*lt;for(const s of Object.keys(t))s.startsWith("wheel")&&(t[s].rotation.z=-n);t.rod?(t.rod.position.x=Math.cos(-n)*.08,t.rod.position.y=In+.16+Math.sin(-n)*.08,t.rod2.position.x=Math.cos(-n+Math.PI/2)*.08,t.rod2.position.y=In+.16+Math.sin(-n+Math.PI/2)*.08,Ll(t.smoke0,e,1.1),t.lamp.scale.setScalar(1+Math.sin(n*4)*.05)):t.lamp.rotation.x=Math.sin(n)*.25}}}const Qv={jarvis:"#4f7fc9",karen:"#d99a2b",orolo:"#8656c4",none:"#6b7280"},wn="#fff8e6";function zr(i){const t=Qv[i];return{front:"z",build(e){e.base(151+["jarvis","karen","orolo","none"].indexOf(i)*3,.8,.8);const n=e.root.at(0,.185,0);for(let c=0;c<8;c++){const u=c/8*lt;n.add(new jn(.04,0),c%2?"stone":"rock",void 0,Math.cos(u)*.28,.03,Math.sin(u)*.28,c,c*2)}n.add(new jn(.11,0),"rock",void 0,.02,.06,-.02,0,.3,0,1,.7,1),n.add(new St(.022,.03,1,6),"wood",void 0,0,.5,0),n.add(new ue(.03,.012,3,8),"metal",void 0,0,.72,0,Math.PI/2);const s=e.part("board",{pos:[0,.185+1.1,0],rot:[-.45,0,0]});s.add(new St(.42,.42,.035,20),"glow",t,0,0,0,Math.PI/2),s.add(new ue(.41,.025,4,20),"glow",wn,0,0,0);const r=.03;if(i==="jarvis")s.add(new ue(.24,.028,4,6),"glow",wn,0,0,r,0,0,Math.PI/6),s.add(new St(.06,.06,.02,8),"glow",wn,0,0,r,Math.PI/2);else if(i==="karen")s.add(new et(.045,.26,.02),"glow",wn,-.2,-.09,r),s.add(new et(.045,.26,.02),"glow",wn,.2,-.09,r),s.add(new et(.44,.045,.02),"glow",wn,0,-.21,r),s.add(new et(.3,.045,.02),"glow",wn,-.11,.12,r,0,0,.72),s.add(new et(.3,.045,.02),"glow",wn,.11,.12,r,0,0,-.72),s.add(new et(.1,.14,.02),"glow",wn,0,-.15,r);else if(i==="orolo")for(let c=0;c<5;c++){const u=.06+c*.05;s.add(new ue(u,.024,4,10,Math.PI),"glow",wn,c%2?-.025:.025,0,r,0,0,c*Math.PI)}else s.add(new ue(.18,.03,4,16),"glow",wn,0,0,r);const a=e.part("ribbon",{pos:[0,.185+.66,0],detail:!0}),o=new ti;o.moveTo(-.03,0),o.lineTo(.03,0),o.lineTo(.05,-.22),o.lineTo(0,-.17),o.lineTo(-.05,-.22),a.add(new Ni(o),"glow",t,.04,0,.02),e.part("mote",{pos:[0,.185+1.6,0],detail:!0}).add(new Ee(.03,0),"glow",t,.14,0,0),e.light(t,0,1,.2,.7)},animate({parts:e},n){const s=n*lt;e.board.rotation.y=Math.sin(s)*.25,e.board.position.y=.185+1.1+Math.sin(s*2)*.01,e.ribbon.rotation.y=Math.sin(s*2+1)*.5,e.mote.rotation.y=s,e.mote.position.y=.185+1.6+Math.sin(s*2)*.03}}}const xh=Object.fromEntries(Lu.map(i=>[`tower-${i}`,Vv(i)])),Iu={nexus:Ov,extractor:zv,caravan:kv,wraith:fh,rift:Gv,hero:Hv,"hero-cleric":eo("cleric"),"hero-fighter":eo("fighter"),"hero-wizard":eo("wizard"),tower:xh["tower-bare"],...xh,ward:mh(!1),"ward-lit":mh(!0),watchtower:Wv,facility:Xv,envoy:qv,surge:Yv,"monster-shadow":lo("shadow"),"monster-specter":lo("specter"),"monster-wisp":lo("wisp"),"monster-wraith":fh,encounter:$v,gather:Kv,poi:Zv,train:vh("car"),"train-engine":vh("engine"),sigil:zr("none"),"sigil-jarvis":zr("jarvis"),"sigil-karen":zr("karen"),"sigil-orolo":zr("orolo")},jv=Object.keys(Iu),kr=Iu,co=["#FF0000","#FF8000","#FFFF00","#00FF00","#0000FF","#8000FF","#000000","#FFFFFF"],Ls="minis-3d",Mh="tower-fill",ho=24,tx=2,ex=80,Gr={nexus:1.35,extractor:1,caravan:1,wraith:1,rift:1.1,hero:.9,poi:.7,gather:.85,"hero-cleric":.85,"hero-fighter":.85,"hero-wizard":.85,train:.9,envoy:.95,sigil:.8,"sigil-jarvis":.8,"sigil-karen":.8,"sigil-orolo":.8},nx="#39e35a",uo="stress:",Sh=16.5,ix=15.25,sx=52,rx=84,yh=3,ax=.62,fo=2,po=1.15,ox={1:[[0,0]],2:[[-.7,.05],[.7,.05]],3:[[-1.25,.15],[0,-.2],[1.25,.15]]},mo=.42,go=.85,lx=.8,cx={creature:[0,-2.4],mover:[0,1.8],ward:[1.4,0],event:[-1.4,0],roster:[0,1.4],sigil:[1.4,.6],gather:[-1.4,.6]},hx=110,wh=.02,ux=.9,Eh=1.7,dx=1.5,fx={ext:"node",poi:"poi",wraith:"creature",monster:"creature",car:"mover",train:"mover",envoy:"mover",ward:"ward",roster:"roster",gather:"gather",enc:"event",surge:"event",rift:"event",sigil:"sigil",tower:"attach",fac:"attach"},bh={extractor:3,"train-engine":3,caravan:2,envoy:2,wraith:2,surge:2,rift:1,train:-1},Th={nexus:"#f2c14e",hero:"#3f6fa8","hero-cleric":"#efe4cc","hero-fighter":"#a5683a","hero-wizard":"#5b4b8f",wraith:"#c9cdf0","monster-shadow":"#6a70d0","monster-specter":"#c9cdf0","monster-wisp":"#8fd8ff","monster-wraith":"#c9cdf0",rift:"#8a3aff",ward:"#8a8378","ward-lit":"#ffb347",watchtower:"#d8d8e8",envoy:"#e3d3ae",gather:"#ffe28a",sigil:"#d97e3a","sigil-jarvis":"#d97e3a","sigil-karen":"#d97e3a","sigil-orolo":"#d97e3a"},_o="#5b4a36",px={nexus:1.6,extractor:1.9,caravan:.9,"train-engine":1,train:.8,envoy:.9,wraith:1.4,rift:1.3,hero:1.5,"hero-cleric":1.5,"hero-fighter":1.5,"hero-wizard":1.6,poi:.6,gather:.5,"tower-bare":1.3,watchtower:2.4,ward:1.2,"ward-lit":1.4,facility:1.1,surge:1,encounter:1,tray:.3},mx=1.3,gx=1.9;function Ah(i){return px[i]??(i.startsWith("tower-")?gx:mx)}const _x={caravan:[1.3,.85],envoy:[1.15,.8],gather:[.85,.85],poi:[.62,.62],sigil:[.8,.8],"sigil-jarvis":[.8,.8],"sigil-karen":[.8,.8],"sigil-orolo":[.8,.8],train:[1.3,.7],"train-engine":[1.3,.7]},vx=[1,1],Rh=.22,xx=5e3,Mx=1e3/30,Sx=100,yx=2e4,wx=2.6,Ex=.88,bx=.24,Tx={drop:640,open:900,rise:720,seal:660,dissolve:880,lunge:480,pulse:700},Ax=2.6,Ch=.9,Rx=new Set(["poi","gather","encounter","surge","hero","train","sigil","sigil-jarvis","sigil-karen","sigil-orolo"]),Nl=i=>i==="wraith"||i.startsWith("monster-");function Cx(i){return i==="rift"?"open":Nl(i)?"rise":Rx.has(i)?null:"drop"}function Px(i){return i==="rift"?"seal":Nl(i)?"dissolve":null}const Ph="#8f96ff",Lh="#a24dff",Ih=i=>1-(1-i)*(1-i),Dh=i=>i*i*(3-2*i);function Dx(i,t={}){const e=new Ud,n=new Al,s=new ts;e.add(s);const r=new Ev(s,e),a=new Nv(s);let o=null,l=!1;const c=[],u=new Map,f=new Map;let h=1;const d=[],g=[];let S=!0,m=-1,p="near",y=0,T=0,v=1;const E=new _e,w=new _e().makeRotationX(Math.PI/2);function P(C,z){const W=ii.MercatorCoordinate.fromLngLat([C,z]);y=W.x,T=W.y,v=W.meterInMercatorCoordinateUnits(),E.makeTranslation(y,T,0).scale(new I(v,-v,v)).multiply(w);for(const ot of c)x(ot);S=!0}function x(C){C.tx=C.dx=(C.mx-y)/v,C.tz=C.dz=(C.my-T)/v,C.inst.root.position.set(C.dx,0,C.dz)}const b=i.getCenter();P(b.lng,b.lat);const L=(C,z)=>`${As()}|${C}:${z}`;function U(C,z){const W=L(C,z);let ot=f.get(W);if(!ot){const Dt=new av;kr[C].build(Dt,z),ot=Dt.compile(),f.set(W,ot)}return ot}function H(C){const z=C.indexOf(":");return z===-1?null:fx[C.slice(0,z)]??null}function Y(C,z){let W=z^2654435769;for(let ot=0;ot<C.length;ot++)W=Math.imul(W^C.charCodeAt(ot),16777619);return W^=W>>>15,W=Math.imul(W,739982445),W^=W>>>12,W=Math.imul(W,695872825),W^=W>>>15,(W>>>0)%1e3/1e3}function F(C,z,W,ot,Dt,Mt){const jt=ii.MercatorCoordinate.fromLngLat([W,ot]),M=Ka(U(z,Dt)),R={id:h++,key:C,family:H(C),kind:z,color:Dt,lng:W,lat:ot,mx:jt.x,my:jt.y,phase:Mt,rate:Ex+bx*Y(C,7),heading:null,scale:1,state:1,fx:null,dying:!1,inst:M,tray:null,seat:-1,tx:0,tz:0,dx:0,dz:0,shown:!0,onScreen:!1};return x(R),s.add(M.root),c.push(R),u.set(C,R),S=!0,R}function X(C){s.remove(C.inst.root),C.inst.dispose(),u.get(C.key)===C&&u.delete(C.key);const z=c.indexOf(C);z!==-1&&c.splice(z,1),S=!0}function $(C,z,W,ot=0,Dt=0,Mt=C.color){C.fx={kind:z,t0:W,dur:Tx[z],dx:ot,dz:Dt,color:Mt,landed:!1},de()}function K(C){const z=Px(C.kind);if(!z||Q==="far"||!C.onScreen||C.dying){X(C);return}u.delete(C.key),C.dying=!0,C.tray=null,C.seat=-1;const W=performance.now();$(C,z,W);const ot=ut*(Gr[C.kind]??1)*C.scale;z==="dissolve"?a.wisps(C.dx,.6*ot,C.dz,ot,Ph,W):a.implode(C.dx,1.1*ot,C.dz,ot,Lh,W),S=!0}function ht(C){const z=Cx(C.kind);if(!z)return;const W=performance.now();$(C,z,W);const ot=ut*(Gr[C.kind]??1)*C.scale;z==="rise"?a.wisps(C.dx,.2*ot,C.dz,ot,Ph,W):z==="open"&&a.burst(C.dx,1*ot,C.dz,ot,Lh,W)}function J(C,z,W,ot,Dt){const Mt=C.inst.root;switch(z.kind){case"drop":{const jt=Ax*ot;if(W<.68){const M=W/.68;Mt.position.y=jt*(1-M*M)}else{z.landed||(z.landed=!0,a.landing(C.dx,C.dz,ot,Dt));const M=(W-.68)/.32;Mt.position.y=.16*jt*Math.sin(Math.PI*M)*(1-.4*M),Mt.scale.y*=1-.08*Math.sin(Math.PI*Math.min(1,M*2))}return-1}case"rise":{const jt=Ih(W);return Mt.scale.y*=jt,Mt.scale.x*=.6+.4*jt,Mt.scale.z*=.6+.4*jt,-1}case"open":{const jt=Ih(Math.min(1,W/.3)),M=.04+.96*Dh(Math.max(0,(W-.25)/.75));return Mt.scale.x*=M,Mt.scale.z*=M,Mt.scale.y*=jt,-1}case"seal":{const jt=.04+.96*(1-Dh(Math.min(1,W/.7)));return Mt.scale.x*=jt,Mt.scale.z*=jt,W>.7&&(Mt.scale.y*=1-(W-.7)/.3),-1}case"dissolve":return Mt.position.y=.9*ot*W,Mt.scale.x*=1-W,Mt.scale.z*=1-W,Mt.scale.y*=1+.35*W,-1;case"lunge":{const jt=Math.sin(Math.PI*W);return Mt.position.x+=z.dx*Ch*ot*jt,Mt.position.z+=z.dz*Ch*ot*jt,Mt.scale.y*=1+.15*jt,-1}case"pulse":return W}}function rt(C,z,W){if(C.lng===z&&C.lat===W)return!1;const ot=ii.MercatorCoordinate.fromLngLat([z,W]);C.lng=z,C.lat=W,C.mx=ot.x,C.my=ot.y;const Dt=(C.mx-y)/v,Mt=(C.my-T)/v;return C.dx+=Dt-C.tx,C.dz+=Mt-C.tz,C.tx=Dt,C.tz=Mt,S=!0,!0}function at(C){for(const z of[...c])z.key.startsWith(C)&&X(z)}function Ft(){de(),Bt(),O(performance.now()),i.triggerRepaint(),Fi(performance.now(),!0)}function Ot(){const C=new St(1,1.06,.14,14).toNonIndexed();C.deleteAttribute("uv");const W=C.attributes.position.count,ot=new Float32Array(W*3),Dt=C.attributes.normal;for(let R=0;R<W;R++){const G=Dt.getY(R)>.5,B=Dt.getY(R)<-.5,N=G?1:B?.15:.32;ot[R*3]=ot[R*3+1]=ot[R*3+2]=N}C.setAttribute("color",new Qe(ot,3)),C.translate(0,.07,0);const Mt=new ue(.97,.05,4,20).toNonIndexed();Mt.deleteAttribute("uv"),Mt.rotateX(Math.PI/2),Mt.translate(0,.14,0);const jt=Mt.attributes.position.count;Mt.setAttribute("color",new Qe(new Float32Array(jt*3).fill(2),3));const M=Eu([C,Mt],!1);return C.dispose(),Mt.dispose(),M}const xe=Ot(),re=new ta({vertexColors:!0});re.onBeforeCompile=C=>{C.vertexShader=C.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
if (color.r > 1.5) vColor.rgb = vec3(0.96, 0.93, 0.84);`)},re.customProgramCacheKey=()=>"minis-token-rim";let oe=it(256),Z=it(64);function it(C){const z=new ea(xe,re,C);return z.instanceColor=new Vs(new Float32Array(C*3),3),z.instanceMatrix.setUsage(Ai),z.instanceColor.setUsage(Ai),z.frustumCulled=!1,z.count=0,s.add(z),z}function Rt(C,z){if(z<=C.instanceMatrix.count)return C;s.remove(C),C.dispose();let W=C.instanceMatrix.count;for(;W<z;)W*=2;return it(W)}const Yt=new Map;function Nt(C){let z=Yt.get(C);return z||(z=new Xt(C),Yt.set(C,z)),z}const qt=new _e,ye=new I,st=new I,dt=new Bn;let pt=0;function gt(C,z,W,ot,Dt,Mt,jt,M,R){qt.compose(ye.set(W,ot,Dt),dt,st.set(Mt,jt,M)),C.setMatrixAt(z,qt),C.setColorAt(z,Nt(R))}const Et=new Zs(1.6,.8),Wt=256,Ht=new Map;function Kt(C){let z=Ht.get(C);return z||(z=new ea(Et,D(C),Wt),z.instanceMatrix.setUsage(Ai),z.frustumCulled=!1,z.renderOrder=10,z.count=0,s.add(z),Ht.set(C,z),z)}const Qt=new Map;function D(C){let z=Qt.get(C);if(z)return z;const W=document.createElement("canvas");W.width=128,W.height=64;const ot=W.getContext("2d");ot.clearRect(0,0,128,64),ot.fillStyle="rgba(20, 18, 28, 0.88)",ot.beginPath(),ot.roundRect(4,4,120,56,14),ot.fill(),ot.strokeStyle="rgba(242, 226, 190, 0.85)",ot.lineWidth=3,ot.stroke(),ot.fillStyle="#fff4d6",ot.font="bold 40px ui-sans-serif, system-ui, sans-serif",ot.textAlign="center",ot.textBaseline="middle",ot.fillText(C,64,34);const Dt=new qd(W);return Dt.colorSpace=cn,Dt.minFilter=Ve,z=new ta({map:Dt,transparent:!0,depthTest:!1,depthWrite:!1}),Qt.set(C,z),z}function Me(C=!1){for(const z of g){for(const W of z.members)W.tray=null,W.seat=-1;C&&(s.remove(z.inst.root),z.inst.dispose())}C&&(g.length=0)}function he(C,z,W){if(Me(C==="near"),C==="near")return;const ot=40075016686e-3*Math.cos(W*Math.PI/180)/(512*2**z),Dt=(C==="far"?rx:sx)*ot,Mt=new Map;for(const R of c){if(!R.family||R.family==="attach"||!R.shown||R.dying)continue;const G=(R.mx-y)/v,B=(R.my-T)/v,N=Math.floor(G/Dt),ft=Math.floor(B/Dt),xt=`${R.family}|${N}|${ft}`;let mt=Mt.get(xt);mt||(mt={family:R.family,cx:N,cz:ft,members:[],x:0,z:0,into:null},Mt.set(xt,mt)),mt.members.push(R),mt.x+=G,mt.z+=B}for(const R of Mt.values())R.x/=R.members.length,R.z/=R.members.length;const jt=R=>{for(;R.into;)R=R.into;return R};for(const R of Mt.values())for(let G=-1;G<=1;G++)for(let B=-1;B<=1;B++){if(!B&&!G)continue;const N=Mt.get(`${R.family}|${R.cx+B}|${R.cz+G}`);if(!N)continue;const ft=jt(R),xt=jt(N);if(ft!==xt&&Math.hypot(ft.x-xt.x,ft.z-xt.z)<Dt*.8){const[mt,It]=ft.members.length>=xt.members.length?[ft,xt]:[xt,ft],Ut=mt.members.length,Zt=It.members.length;mt.x=(mt.x*Ut+It.x*Zt)/(Ut+Zt),mt.z=(mt.z*Ut+It.z*Zt)/(Ut+Zt),mt.members.push(...It.members),It.into=mt}}const M=new Map;for(const R of g)M.set(R.sig,R);g.length=0;for(const R of Mt.values()){if(R.into||R.members.length<2)continue;R.members.sort((N,ft)=>(bh[ft.kind]??0)-(bh[N.kind]??0)||(N.key<ft.key?-1:1));const G=`${R.family}|${R.members.map(N=>N.key).join(",")}`;let B=M.get(G);if(B)M.delete(G),B.members=R.members,B.x=R.x,B.z=R.z,B.mx=R.x*v+y,B.my=R.z*v+T;else{const N=R.members.length,ft=N>99?"99+":String(N),xt=Ka(U("tray",_o));xt.root.position.set(R.x,0,R.z),s.add(xt.root),B={sig:G,family:R.family,members:R.members,mx:R.x*v+y,my:R.z*v+T,x:R.x,z:R.z,inst:xt,label:ft}}R.members.forEach((N,ft)=>{N.tray=B,N.seat=ft<yh?ft:-1}),g.push(B)}for(const R of M.values())s.remove(R.inst.root),R.inst.dispose()}const A={front:"z",build(C){C.base(77,fo,po)},animate(){}};kr.tray=A;const _={wet:0,rain:0,snow:0,snowing:0,overcast:0,fog:0,wind:0};let V=0;function q(C){const z=C.parts.snow;if(!z)return;const W=V>.02;z.visible!==W&&(z.visible=W),W&&(z.scale.y=.35+2.8*V)}function j(C){Object.assign(_,C),V=Math.min(1,Math.max(_.snow,.3*_.snowing)),lv(_.wind),r.setWeather(_)}function _t(C,z,W){const ot=Ka(U(z,W));return ot.root.position.copy(C.root.position),ot.root.rotation.copy(C.root.rotation),ot.root.scale.copy(C.root.scale),ot.root.visible=C.root.visible,s.remove(C.root),C.dispose(),s.add(ot.root),ot}function yt(C){if(C===As())return;const z=[...f.values()];f.clear(),nv(C);for(const W of c)W.inst=_t(W.inst,W.kind,W.color);for(const W of g)W.inst=_t(W.inst,"tray",_o);for(const W of z)W.root.traverse(ot=>ot.isMesh&&ot.geometry.dispose())}let tt="near",Q="near",ut=10,zt=0,At=0,bt=0,Gt=0;const kt=new I,ee=new gn(0,0,0,"YXZ");function O(C){var le;const z=At?Math.min(250,C-At):0;At=C;const W=i.getZoom(),ot=i.getCenter(),Dt=ii.MercatorCoordinate.fromLngLat(ot);Math.hypot(Dt.x-y,Dt.y-T)/v>xx&&P(ot.lng,ot.lat);const Mt=40075016686e-3*Math.cos(ot.lat*Math.PI/180)/(512*2**W);ut=Math.min(ex,Math.max(tx,ho*Mt)),Q=W>=Sh?"near":W>=ix?"mid":"far",tt=Q==="near"?"near":"mid";const jt=Hl(),M=jt?ii.MercatorCoordinate.fromLngLat([jt.lng,jt.lat]):null,R=C/1e3/wx,G=Q==="far",B=[];for(const k of c)(k.kind==="extractor"||k.kind==="nexus")&&B.push(k);const N=(k,ne)=>{const Ce=(k.mx-y)/v,ae=(k.my-T)/v;for(const ie of B)if(Math.hypot((ie.mx-y)/v-Ce,(ie.my-T)/v-ae)<ne)return ie;return null};let ft=!1;for(const k of c){const ne=!(Q!=="near"&&k.family==="attach"&&N(k,ut*dx)!==null);ne!==k.shown&&(k.shown=ne,ft=!0)}const xt=Math.round(W*2)/2;(S||ft||xt!==m||Q!==p)&&(he(Q,xt,ot.lat),S=!1,m=xt,p=Q,de());const mt=z?1-Math.exp(-z/hx):1;zt=0,bt=0,Gt=0,pt=0,oe=Rt(oe,c.length);const It=n.projectionMatrix;r.setCamera(i.getPitch(),i.getBearing()),r.begin(C,c.length*3+g.length,(c.length+g.length)*2);const Ut=[];for(const k of c){const ne=k.inst.root,Ce=(Gr[k.kind]??1)*k.scale;let ae=ut*Ce,ie=(k.mx-y)/v,be=(k.my-T)/v,Ct=k.shown;if(k.dying&&(G||!k.fx||C>=k.fx.t0+k.fx.dur)){Ut.push(k),ne.visible=!1;continue}if(k.tray)if(Gt++,k.seat<0||G)Ct=!1;else{const $t=ox[Math.min(yh,k.tray.members.length)],[we,Ze]=$t[k.seat];ie=k.tray.x+we*ut,be=k.tray.z+Ze*ut,ae=ut*ax*Math.min(1.15,Ce)}else if(k.family==="mover"){const $t=N(k,ut*ux);if($t){const we=(k.heading??180)*Math.PI/180;ie=($t.mx-y)/v-Math.sin(we)*ut*Eh,be=($t.my-T)/v+Math.cos(we)*ut*Eh}}k.tx=ie,k.tz=be;const ze=ie-k.dx,me=be-k.dz;if(Math.abs(ze)<wh&&Math.abs(me)<wh?(k.dx=ie,k.dz=be):(k.dx+=ze*mt,k.dz+=me*mt,de()),ne.position.set(k.dx,0,k.dz),kt.copy(ne.position).applyMatrix4(It),k.onScreen=kt.x>=-1.1&&kt.x<=1.1&&kt.y>=-1.1&&kt.y<=1.1&&kt.z>=-1&&kt.z<=1,Ct&&k.onScreen&&bt++,G){if(ne.visible=!1,Ct){const $t=ae*mo,we=Th[k.kind]??k.color;gt(oe,pt++,k.dx,0,k.dz,$t,ut*mo,$t,we),k.onScreen&&(r.shadow(k.dx,k.dz,$t,$t,0,0),r.pool(k.dx,k.dz,.02*$t,$t*1.35,we,Rh,k.id))}continue}if(ne.visible=Ct,!Ct)continue;ne.scale.setScalar(ae),k.inst.setLod(tt),q(k.inst);let ke=0,qe=0,je=0;if(k.heading!==null){const $t=k.heading*Math.PI/180;qe=Math.sin($t),je=-Math.cos($t)}else M&&(qe=(M.x-k.mx)/v,je=(M.y-k.my)/v);(qe!==0||je!==0)&&(ke=kr[k.kind].front==="z"?Math.atan2(qe,je):Math.atan2(-je,qe)),ne.rotation.y=ke;const kn=f.get(L(k.kind,k.color));if(k.onScreen||k.fx){const $t=kr[k.kind];$t.animate(k.inst,(R*k.rate+k.phase)%1,k.state);let we=1,Ze=-1;if(k.fx){const xn=(C-k.fx.t0)/k.fx.dur;xn>=1?k.fx=null:(Ze=J(k,k.fx,Math.max(0,xn),ae,C),Ze>=0&&(we=1+1.6*Math.sin(Math.PI*Ze),(le=$t.pulse)==null||le.call($t,k.inst,Ze,k.state)),de())}const Ae=(k.tray?.2*ut:0)+.009*ae,vn=Math.cos(ke),Gn=Math.sin(ke);if(kn.lights.forEach((xn,Qs)=>{const[kl,Du,Gl]=xn.pos,Nu=($t.poolGain?$t.poolGain(k.state,Qs):1)*we;r.poolFor(k.dx+(vn*kl+Gn*Gl)*ae,Ae,k.dz+(-Gn*kl+vn*Gl)*ae,ae,xn.color,xn.strength*Nu,Du,k.id*7+Qs)}),!k.tray){const[xn,Qs]=_x[k.kind]??vx;r.shadow(k.dx,k.dz,ae*xn,ae*Qs,ke,Ah(k.kind))}}zt+=kn.tris}oe.count=pt,pt&&(oe.instanceMatrix.needsUpdate=!0,oe.instanceColor.needsUpdate=!0),re.color.setScalar(1-.24*J_()),Z=Rt(Z,g.length);let Zt=0;for(const k of Ht.values())k.count=0;ee.set(-(Math.PI/2-i.getPitch()*Math.PI/180),-(i.getBearing()*Math.PI)/180,0),dt.setFromEuler(ee);for(const k of g){const[ne,Ce]=cx[k.family]??[0,0];if(k.x=(k.mx-y)/v+ne*ut,k.z=(k.my-T)/v+Ce*ut,k.inst.root.position.set(k.x,0,k.z),k.inst.root.scale.setScalar(ut),k.inst.root.visible=!G,G||q(k.inst),G){const ie=k.members[0],be=ut*go,Ct=Th[ie.kind]??ie.color;gt(Z,Zt++,k.x,0,k.z,be,ut*mo*1.6,be,Ct),r.shadow(k.x,k.z,be,be,0,0),r.pool(k.x,k.z,.02*be,be*1.3,Ct,Rh*1.3,k.members.length)}else zt+=f.get(L("tray",_o)).tris,r.shadow(k.x,k.z,ut*fo,ut*po,0,Ah("tray"));const ae=Kt(k.label);if(ae.count<Wt){const ie=ut*(G?lx:1);qt.compose(ye.set(k.x,(G?.55:1.05)*ut,k.z+(G?-.35:-.55)*ut),dt,st.set(ie,ie,ie)),ae.setMatrixAt(ae.count++,qt)}}dt.identity();for(const k of Ht.values())k.visible=k.count>0,k.count&&(k.instanceMatrix.needsUpdate=!0);Z.count=Zt,Zt&&(Z.instanceMatrix.needsUpdate=!0,Z.instanceColor.needsUpdate=!0),r.end(),a.tick(C),a.active()&&de();for(const k of Ut)X(k)}let wt=!1,nt=0,Tt=performance.now(),Lt=30,ct=0;function Vt(C){if(!wt)return;const z=C-Tt>yx;Lt=z?10:30;const W=z?Sx:Mx;C-nt>=W-1&&(nt=C,ct++,O(C),i.triggerRepaint()),requestAnimationFrame(Vt)}function Bt(){const C=c.length>0&&!document.hidden&&!l;C&&!wt?(wt=!0,requestAnimationFrame(Vt)):C||(wt=!1)}const de=()=>{Tt=performance.now()};i.on("move",de);const fe=i.getCanvas();fe.addEventListener("pointerdown",de,{passive:!0}),document.addEventListener("visibilitychange",Bt);const Xe=120,sn=new Float32Array(Xe),ds=new Float32Array(Xe);let fi=0,pi=0,ei=0,Js=0,rn=null,fs=0;function Cn(){const C=pi;let z=0,W=0;const ot=[];for(let Dt=0;Dt<C;Dt++)z+=sn[Dt],W+=ds[Dt],ot.push(ds[Dt]);return ot.sort((Dt,Mt)=>Dt-Mt),{count:c.length,fps:C?Math.round(1e3/(z/C)):0,avgMs:C?+(W/C).toFixed(2):0,p95Ms:C?+ot[Math.min(C-1,Math.floor(C*.95))].toFixed(2):0,draws:Js,onScreen:bt,tris:Math.round(zt),lod:tt,tier:Q,trays:g.length,trayed:Gt,tokens:pt,zoom:+i.getZoom().toFixed(2),night:Qc(),targetFps:Lt,ticks:ct,failed:l,light:r.stats(),fx:a.stats(),dying:c.reduce((Dt,Mt)=>Dt+(Mt.dying?1:0),0)}}function Fi(C,z=!1){var ot;if(!z&&C-fs<500)return;fs=C,rn||(rn=document.createElement("div"),rn.id="minis-hud",rn.style.cssText="position:fixed;right:8px;top:8px;z-index:20;pointer-events:none;text-align:right;font:10px/1.35 ui-monospace,Menlo,monospace;color:#fff;background:rgba(0,0,0,.55);padding:3px 6px;border-radius:6px;white-space:pre;max-width:46vw",document.body.appendChild(rn));const W=Cn();rn.style.display=W.count&&(((ot=t.showHud)==null?void 0:ot.call(t))??!0)?"":"none",rn.textContent=`minis ${W.count} · ${W.fps} fps (target ${W.targetFps})
frame ${W.avgMs} ms avg · ${W.p95Ms} ms p95
${W.draws} draws / ${W.onScreen} on screen · ${(W.tris/1e3).toFixed(1)}k tris · ${W.tier} · z${W.zoom} · ${W.night?"night":"day"}
${W.trays} trays (${W.trayed} riding) · ${W.tokens} tokens
${W.light.pools} pools · ${W.light.shadows} shadows · dark ${W.light.darkness.toFixed(2)} · sun ${Math.round(W.light.sunAzDeg)}°/${W.light.sunAltDeg>0?"+":""}${Math.round(W.light.sunAltDeg)}° · moon ${Math.round(W.light.moon*100)}%
${W.fx.effects} fx · ${W.fx.particles} particles · ${W.dying} leaving
${As()} · wet ${W.light.weather.wet.toFixed(2)} · snow ${W.light.weather.snow.toFixed(2)} · cloud ${W.light.weather.overcast.toFixed(2)} · wind ${W.light.weather.wind.toFixed(2)}`}function ps(C,z){l||(l=!0,console.error(`[minis] ${C} failed — falling back to circles`,z),setTimeout(()=>{try{i.getLayer(Ls)&&i.removeLayer(Ls)}catch{}for(const W of d)W()},0),Bt())}const ms={id:Ls,type:"custom",renderingMode:"3d",onAdd(C,z){try{o=new z_({canvas:fe,context:z,antialias:!0}),o.autoClear=!1,o.setPixelRatio(1)}catch(W){ps("renderer",W)}},onRemove(){o==null||o.dispose(),o=null},render(C,z){var Dt;if(!o||l||c.length===0)return;const W=performance.now();try{const Mt=((Dt=z.defaultProjectionData)==null?void 0:Dt.mainMatrix)??z.modelViewProjectionMatrix;n.projectionMatrix.fromArray(Mt).multiply(E),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),o.resetState(),o.setViewport(0,0,C.drawingBufferWidth,C.drawingBufferHeight),o.render(e,n),Js=o.info.render.calls}catch(Mt){ps("render",Mt);return}const ot=performance.now();ei&&(sn[fi]=ot-ei,ds[fi]=ot-W,fi=(fi+1)%Xe,pi=Math.min(Xe,pi+1)),ei=ot,Fi(ot)}};i.getLayer(Mh)?i.addLayer(ms,Mh):i.addLayer(ms);function mi(C){const z=new ii.MercatorCoordinate(C.x*v+y,C.z*v+T,0).toLngLat(),W=i.project(z);return{family:C.family,count:C.members.length,lng:z.lng,lat:z.lat,x:W.x,y:W.y,keys:C.members.map(ot=>ot.key)}}function gs(C,z){const W=ii.MercatorCoordinate.fromLngLat([C,z]);return[(W.x-y)/v,(W.y-T)/v]}const ni=C=>ut*(Gr[C.kind]??1)*C.scale;return{set(C,z,W,ot,Dt={}){const{color:Mt,heading:jt=null,scale:M=1,state:R=1,fresh:G=!1}=Dt,B=Er(Mt??nx);let N=u.get(C);if(N&&(N.kind!==z||N.color!==B)&&(X(N),N=void 0),!N){N=F(C,z,W,ot,B,Y(C,0)),N.heading=jt,N.scale=M,N.state=R,G&&ht(N),Ft();return}const ft=rt(N,W,ot);N.heading=jt,N.scale=M,N.state=R,ft&&de(),Bt(),i.triggerRepaint()},remove(C){const z=u.get(C);z&&(K(z),Ft())},collect(C){const z=u.get(C);if(!z||Q==="far")return;const W=performance.now(),ot=ni(z);$(z,"pulse",W),a.burst(z.dx,.7*ot,z.dz,ot,z.color,W),Ft()},pulse(C,z){const W=u.get(C);if(!W||Q==="far")return;const ot=performance.now(),Dt=ni(W),Mt=z?Er(z):W.color;$(W,"pulse",ot,0,0,Mt),a.pulse(W.dx,W.dz,Dt,Mt,ot),Ft()},arrive(C){const z=u.get(C);!z||Q==="far"||(a.puff(z.dx,z.dz,ni(z),performance.now()),Ft())},lunge(C,z,W,ot,Dt=6){if(Q==="far")return 0;const[Mt,jt]=gs(C,z),[M,R]=gs(W,ot),G=performance.now();let B=0;for(const N of c){if(N.dying||!Nl(N.kind))continue;const ft=(N.mx-y)/v,xt=(N.my-T)/v;if(Math.hypot(ft-Mt,xt-jt)>Dt)continue;const mt=M-ft,It=R-xt,Ut=Math.hypot(mt,It)||1;$(N,"lunge",G,mt/Ut,It/Ut),B++}return B&&Ft(),B},fxStats:()=>a.stats(),probeParts(C){var ot;const z=u.get(C);if(!z)return null;const W={};for(const[Dt,Mt]of Object.entries(z.inst.parts))W[Dt]=[Mt.position.x,Mt.position.y,Mt.position.z,Mt.rotation.x,Mt.rotation.y,Mt.rotation.z,Mt.scale.x,Mt.scale.y,Mt.scale.z,Mt.visible?1:0].map(jt=>+jt.toFixed(5));return{phase:z.phase,rate:z.rate,state:z.state,fx:((ot=z.fx)==null?void 0:ot.kind)??null,y:z.inst.root.position.y,parts:W}},removePrefix(C){at(C),Ft()},has:C=>u.has(C),stress(C){at(uo);const z=Hl()??i.getCenter(),W=Ui(1234),ot=["extractor","extractor","caravan","wraith","extractor","rift"];for(let Dt=0;Dt<C;Dt++){const Mt=Dt===0?"nexus":Dt===1?"hero":ot[Dt%ot.length],jt=W()*lt,M=Dt===1?30:40+Math.sqrt(W())*320,R=z.lat+M*Math.cos(jt)/111320,G=z.lng+M*Math.sin(jt)/(111320*Math.cos(z.lat*Math.PI/180));F(`${uo}${Dt}`,Mt,G,R,Er(co[Math.floor(W()*co.length)]),W())}pi=0,fi=0,ei=0,Ft()},place(C,z,W,ot){const Dt=F(`${uo}place:${h}`,C,z,W,Er(ot??co[3]),0);return ht(Dt),Ft(),Dt.id},probe(C){const z=c.find(N=>N.id===C);if(!z)return null;const W=fe.clientWidth,ot=fe.clientHeight,Dt=N=>[(N.x+1)/2*W,(1-N.y)/2*ot],Mt=z.inst.root.position,jt=new I(Mt.x,0,Mt.z).applyMatrix4(n.projectionMatrix),M=new I(Mt.x+ut*1.02,0,Mt.z).applyMatrix4(n.projectionMatrix),R=z.lng+ut*1.02/(111320*Math.cos(z.lat*Math.PI/180)),G=i.project([z.lng,z.lat]),B=i.project([R,z.lat]);return{three:[...Dt(jt),...Dt(M)],map:[G.x,G.y,B.x,B.y],sizeM:ut}},counts(){const C=Object.fromEntries(jv.map(z=>[z,0]));for(const z of c)C[z.kind]++;return C},trays:()=>g.map(mi),probeKey(C){const z=u.get(C);if(!z)return null;const W=fe.clientWidth,ot=fe.clientHeight;kt.set(z.dx,0,z.dz).applyMatrix4(n.projectionMatrix);const Dt=i.project([z.lng,z.lat]),Mt=z.shown&&(!z.tray||z.seat>=0);return{x:(kt.x+1)/2*W,y:(1-kt.y)/2*ot,ax:Dt.x,ay:Dt.y,shown:Mt,tray:z.tray?z.tray.members.length:0,seat:z.seat,tier:Q}},trayAt(C,z){const W=i.getZoom();if(Q==="near"||!g.length)return null;const ot=ho*(Q==="far"?go*1.3:fo*1.1),Dt=ho*(Q==="far"?go*.9:po*.8);let Mt=null,jt=1/0;for(const M of g){const R=i.project(new ii.MercatorCoordinate(M.x*v+y,M.z*v+T,0).toLngLat()),G=(C-R.x)/ot,B=z-R.y,N=B>0?B/Dt:B/(Dt*2.6),ft=G*G+N*N;ft<=1&&ft<jt&&(jt=ft,Mt=M)}return Mt?{...mi(Mt),zoom:Math.min(18,Math.max(Sh+.25,W+2.5))}:null},setSky(C){r.setSky(C),c.length&&O(performance.now()),i.triggerRepaint()},setWeather(C){j(C),c.length&&O(performance.now()),i.triggerRepaint()},getWeather:()=>({..._}),setSeason(C){C!==As()&&(yt(C),Ft())},getSeason:As,setNight(C){r.setSky({darkness:C?1:0}),c.length&&O(performance.now()),i.triggerRepaint()},isNight:Qc,stats:Cn,lightStats:()=>r.stats(),drawHistogram:()=>{const C={};return e.traverse(z=>{z.onAfterRender=()=>{var ot;const W=`${z.type}:${z.name||((ot=z.material)==null?void 0:ot.constructor.name)}`;C[W]=(C[W]??0)+1}}),new Promise(z=>{i.once("render",()=>setTimeout(()=>z({hist:C,calls:o==null?void 0:o.info.render.calls}),50)),i.triggerRepaint()})},onFail(C){d.push(C),l&&C()},dispose(){at(""),Me(!0),wt=!1,i.off("move",de),fe.removeEventListener("pointerdown",de),document.removeEventListener("visibilitychange",Bt),rn==null||rn.remove(),r.dispose(),a.dispose(),i.getLayer(Ls)&&i.removeLayer(Ls)}}}export{Ls as LAYER_ID,Dx as initMinisLayer};
