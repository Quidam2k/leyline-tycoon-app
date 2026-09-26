var Nu=Object.defineProperty;var Uu=(i,t,e)=>t in i?Nu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Jt=(i,t,e)=>Uu(i,typeof t!="symbol"?t+"":t,e);import{g as Gl,m as ei}from"./index-CNgELeiY.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="186",Fu=0,Hl=1,Ou=2,Gr=1,Bu=2,Ds=3,Ai=0,rn=1,hn=2,Zn=0,bi=1,zs=2,Vl=3,Wl=4,zu=5,es=100,ku=101,Gu=102,Hu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,Dh=204,Nh=205,$u=206,Ku=207,Zu=208,Ju=209,Qu=210,ju=211,td=212,ed=213,nd=214,_o=0,vo=1,xo=2,ks=3,Mo=4,So=5,yo=6,wo=7,Uh=0,id=1,sd=2,On=0,Fh=1,Oh=2,Bh=3,zh=4,kh=5,Gh=6,Hh=7,Vh=300,Ri=301,os=302,ca=303,ha=304,ra=306,Eo=1e3,$n=1001,bo=1002,We=1003,rd=1004,Qs=1005,Xe=1006,ua=1007,wi=1008,un=1009,Wh=1010,Xh=1011,Gs=1012,ul=1013,Bn=1014,An=1015,zn=1016,dl=1017,fl=1018,Hs=1020,qh=35902,Yh=35899,$h=1021,Kh=1022,Rn=1023,Qn=1026,Ei=1027,pl=1028,ml=1029,Ci=1030,gl=1031,_l=1033,Hr=33776,Vr=33777,Wr=33778,Xr=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Po=36196,Lo=37492,Io=37496,Do=37488,No=37489,$r=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Go=37813,Ho=37814,Vo=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,$o=37820,Ko=37821,Zo=36492,Jo=36494,Qo=36495,jo=36283,tl=36284,Kr=36285,el=36286,ad=3200,nl=0,od=1,ci="",cn="srgb",Zr="srgb-linear",Jr="linear",Re="srgb",da=7680,ld=519,cd=512,hd=513,ud=514,vl=515,dd=516,fd=517,xl=518,pd=519,md=35044,Ti=35048,Xl="300 es",Fn=2e3,Vs=2001;function gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){const i=Qr("canvas");return i.style.display="block",i}const ql={};function Yl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Zh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=Zh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ye(...i){i=Zh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rs(...i){const t=i.join(" ");t in ql||(ql[t]=!0,Qt(...i))}function vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const xd={[_o]:vo,[xo]:yo,[Mo]:wo,[ks]:So,[vo]:_o,[yo]:xo,[wo]:Mo,[So]:ks};class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,il=180/Math.PI;function us(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function Md(i,t){return(i%t+t)%t}function pa(i,t,e){return(1-e)*i+e*t}function vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nl=class Nl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nl.prototype.isVector2=!0;let gt=Nl;class kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*S;m<0&&(h=-h,d=-d,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+S*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+S*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ul=class Ul{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ul.prototype.isVector3=!0;let I=Ul;const ma=new I,$l=new kn,Fl=class Fl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],S=s[0],m=s[3],p=s[6],y=s[1],E=s[4],M=s[7],b=s[2],w=s[5],C=s[8];return r[0]=a*S+o*y+l*b,r[3]=a*m+o*E+l*w,r[6]=a*p+o*M+l*C,r[1]=c*S+u*y+f*b,r[4]=c*m+u*E+f*w,r[7]=c*p+u*M+f*C,r[2]=h*S+d*y+g*b,r[5]=h*m+d*E+g*w,r[8]=h*p+d*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=f*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ga.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fl.prototype.isMatrix3=!0;let ne=Fl;const ga=new ne,Kl=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const i={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Re&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Re&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zr]:{primaries:t,whitePoint:n,transfer:Jr,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const ve=Sd();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class yd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=Qr("canvas")),zi.width=t.width,zi.height=t.height;const s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wd=0;class Ml{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_a(s[a].image)):r.push(_a(s[a]))}else r=_a(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let Ed=0;const va=new I;class Ze extends Li{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=$n,s=$n,r=Xe,a=wi,o=Rn,l=un,c=Ze.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=us(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Vh;Ze.DEFAULT_ANISOTROPY=1;const Ol=class Ol{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(d+1)/2,b=(p+1)/2,w=(u+h)/4,C=(f+S)/4,x=(g+m)/4;return E>M&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=C/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ol.prototype.isVector4=!0;let De=Ol;class bd extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ml(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const sa=class sa{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,S,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,g=o*u,S=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,S=c*f;e[0]=h+S*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,S=c*f;e[0]=h-S*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,g=o*u,S=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+S,e[1]=l*f,e[5]=S*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=S-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-S*f}else if(t.order==="XZY"){const h=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+S,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Rd)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ni.crossVectors(n,an),ni.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ni.crossVectors(n,an)),ni.normalize(),js.crossVectors(an,ni),s[0]=ni.x,s[4]=js.x,s[8]=an.x,s[1]=ni.y,s[5]=js.y,s[9]=an.y,s[2]=ni.z,s[6]=js.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],S=n[6],m=n[10],p=n[14],y=n[3],E=n[7],M=n[11],b=n[15],w=s[0],C=s[4],x=s[8],T=s[12],P=s[1],F=s[5],G=s[9],q=s[13],U=s[2],W=s[6],J=s[10],Z=s[14],ht=s[3],Q=s[7],rt=s[11],nt=s[15];return r[0]=a*w+o*P+l*U+c*ht,r[4]=a*C+o*F+l*W+c*Q,r[8]=a*x+o*G+l*J+c*rt,r[12]=a*T+o*q+l*Z+c*nt,r[1]=u*w+f*P+h*U+d*ht,r[5]=u*C+f*F+h*W+d*Q,r[9]=u*x+f*G+h*J+d*rt,r[13]=u*T+f*q+h*Z+d*nt,r[2]=g*w+S*P+m*U+p*ht,r[6]=g*C+S*F+m*W+p*Q,r[10]=g*x+S*G+m*J+p*rt,r[14]=g*T+S*q+m*Z+p*nt,r[3]=y*w+E*P+M*U+b*ht,r[7]=y*C+E*F+M*W+b*Q,r[11]=y*x+E*G+M*J+b*rt,r[15]=y*T+E*q+M*Z+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],S=t[7],m=t[11],p=t[15],y=l*d-c*h,E=o*d-c*f,M=o*h-l*f,b=a*d-c*u,w=a*h-l*u,C=a*f-o*u;return e*(S*y-m*E+p*M)-n*(g*y-m*b+p*w)+s*(g*E-S*b+p*C)-r*(g*M-S*w+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],S=t[13],m=t[14],p=t[15],y=e*o-n*a,E=e*l-s*a,M=e*c-r*a,b=n*l-s*o,w=n*c-r*o,C=s*c-r*l,x=u*S-f*g,T=u*m-h*g,P=u*p-d*g,F=f*m-h*S,G=f*p-d*S,q=h*p-d*m,U=y*q-E*G+M*F+b*P-w*T+C*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/U;return t[0]=(o*q-l*G+c*F)*W,t[1]=(s*G-n*q-r*F)*W,t[2]=(S*C-m*w+p*b)*W,t[3]=(h*w-f*C-d*b)*W,t[4]=(l*P-a*q-c*T)*W,t[5]=(e*q-s*P+r*T)*W,t[6]=(m*M-g*C-p*E)*W,t[7]=(u*C-h*M+d*E)*W,t[8]=(a*G-o*P+c*x)*W,t[9]=(n*P-e*G-r*x)*W,t[10]=(g*w-S*M+p*y)*W,t[11]=(f*M-u*w-d*y)*W,t[12]=(o*T-a*F-l*x)*W,t[13]=(e*F-n*T+s*x)*W,t[14]=(S*E-g*b-m*y)*W,t[15]=(u*b-f*E+h*y)*W,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,S=a*u,m=a*f,p=o*f,y=l*c,E=l*u,M=l*f,b=n.x,w=n.y,C=n.z;return s[0]=(1-(S+p))*b,s[1]=(d+M)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(h+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+E)*C,s[9]=(m-y)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),l=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);const c=1/a,u=1/o,f=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Fn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===Fn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sa.prototype.isMatrix4=!0;let xe=sa;const ki=new I,Sn=new xe,Ad=new I(0,0,0),Rd=new I(1,1,1),ni=new I,js=new I,an=new I,Jl=new xe,Ql=new kn;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cd=0;const jl=new I,Gi=new kn,Hn=new xe,tr=new I,xs=new I,Pd=new I,Ld=new kn,tc=new I(1,0,0),ec=new I(0,1,0),nc=new I(0,0,1),ic={type:"added"},Id={type:"removed"},Hi={type:"childadded",child:null},xa={type:"childremoved",child:null};class qe extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new _n,n=new kn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ne}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(xs,tr,this.up):Hn.lookAt(tr,xs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ns extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},er={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=Md(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Sa(a,r,t+1/3),this.g=Sa(a,r,t),this.b=Sa(a,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ve.workingToColorSpace(Ke.copy(this),t),Math.round(fe(Ke.r*255,0,255))*65536+Math.round(fe(Ke.g*255,0,255))*256+Math.round(fe(Ke.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=cn){ve.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(er);const n=pa(ii.h,er.h,e),s=pa(ii.s,er.s,e),r=pa(ii.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new qt;qt.NAMES=jh;class Nd extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new I,Vn=new I,ya=new I,Wn=new I,Vi=new I,Wi=new I,sc=new I,wa=new I,Ea=new I,ba=new I,Ta=new De,Aa=new De,Ra=new De;class Tn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Vn.subVectors(n,e),ya.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Vn),l=yn.dot(ya),c=Vn.dot(Vn),u=Vn.dot(ya),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ta.setScalar(0),Aa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(Aa,r.y),a.addScaledVector(Ra,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Vn.subVectors(t,e),yn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),yn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Vi.subVectors(s,n),Wi.subVectors(r,n),wa.subVectors(t,n);const l=Vi.dot(wa),c=Wi.dot(wa);if(l<=0&&c<=0)return e.copy(n);Ea.subVectors(t,s);const u=Vi.dot(Ea),f=Wi.dot(Ea);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Vi,a);ba.subVectors(t,r);const d=Vi.dot(ba),g=Wi.dot(ba);if(g>=0&&d<=g)return e.copy(r);const S=d*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Wi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return sc.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(sc,o);const p=1/(m+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),ir.subVectors(this.max,Ms),Xi.subVectors(t.a,Ms),qi.subVectors(t.b,Ms),Yi.subVectors(t.c,Ms),si.subVectors(qi,Xi),ri.subVectors(Yi,qi),mi.subVectors(Xi,Yi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-mi.z,mi.y,si.z,0,-si.x,ri.z,0,-ri.x,mi.z,0,-mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-mi.y,mi.x,0];return!Ca(e,Xi,qi,Yi,ir)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Xi,qi,Yi,ir))?!1:(sr.crossVectors(si,ri),e=[sr.x,sr.y,sr.z],Ca(e,Xi,qi,Yi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,nr=new Ii,Xi=new I,qi=new I,Yi=new I,si=new I,ri=new I,mi=new I,Ms=new I,ir=new I,sr=new I,gi=new I;function Ca(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ue=new I,rr=new gt;let Ud=0;class je extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=md,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class tu extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Fd=new Ii,Ss=new I,Pa=new I;class Ks{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Pa)),this.expandByPoint(Ss.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Od=0;const mn=new xe,La=new qe,$i=new I,on=new Ii,ys=new Ii,Ve=new I;class ke extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?eu:tu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(on.min,ys.min),on.expandByPoint(Ve),Ve.addVectors(on.max,ys.max),on.expandByPoint(Ve)):(on.expandByPoint(ys.min),on.expandByPoint(ys.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ve.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),Ve.add($i)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;const c=new I,u=new I,f=new I,h=new gt,d=new gt,g=new gt,S=new I,m=new I;function p(x,T,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),o[x].add(S),o[T].add(S),o[P].add(S),l[x].add(m),l[T].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,T=y.length;x<T;++x){const P=y[x],F=P.start,G=P.count;for(let q=F,U=F+G;q<U;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const E=new I,M=new I,b=new I,w=new I;function C(x){b.fromBufferAttribute(s,x),w.copy(b);const T=o[x];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(w,T);const F=M.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,F)}for(let x=0,T=y.length;x<T;++x){const P=y[x],F=P.start,G=P.count;for(let q=F,U=F+G;q<U;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new je(h,u,f)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new I,Bd=new I,zd=new ne;class oi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ia),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let kd=0;class Zs extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=us(),this.name="",this.type="Material",this.blending=bi,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Nh,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const qn=new I,Da=new I,ar=new I,or=new I;class Gd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Da.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),or.copy(this.origin).sub(Da);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=or.dot(this.direction),l=-or.dot(ar),c=or.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Da).addScaledVector(ar,h),d}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,y=n.y-a.y,E=n.z-a.z,M=Math.abs(l),b=Math.abs(c),w=Math.abs(u);let C,x,T,P,F,G,q,U,W,J,Z,ht;if(M>=b&&M>=w?(T=l,G=f,W=g,ht=p,l>=0?(C=c,x=u,P=h,F=d,q=S,U=m,J=y,Z=E):(C=u,x=c,P=d,F=h,q=m,U=S,J=E,Z=y)):b>=w?(T=c,G=h,W=S,ht=y,c>=0?(C=u,x=l,P=d,F=f,q=m,U=g,J=E,Z=p):(C=l,x=u,P=f,F=d,q=g,U=m,J=p,Z=E)):(T=u,G=d,W=m,ht=E,u>=0?(C=l,x=c,P=f,F=h,q=g,U=S,J=p,Z=y):(C=c,x=l,P=h,F=f,q=S,U=g,J=y,Z=p)),T===0)return null;const Q=C/T,rt=x/T,nt=1/T,Ht=P-Q*G,zt=F-rt*G,ge=q-Q*W,ee=U-rt*W,ae=J-Q*ht,tt=Z-rt*ht,at=ae*ee-tt*ge,Rt=Ht*tt-zt*ae,Yt=ge*zt-ee*Ht;if(s){if(at<0||Rt<0||Yt<0)return null}else if((at<0||Rt<0||Yt<0)&&(at>0||Rt>0||Yt>0))return null;const It=at+Rt+Yt;if(It===0)return null;const $t=nt*(at*G+Rt*W+Yt*ht);return(It>0?$t<0:$t>0)?null:this.at($t/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jr extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rc=new xe,_i=new Gd,lr=new Ks,ac=new I,cr=new I,hr=new I,ur=new I,Na=new I,dr=new I,oc=new I,fr=new I;class dn extends qe{constructor(t=new ke,e=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Na.fromBufferAttribute(f,t),a?dr.addScaledVector(Na,u):dr.addScaledVector(Na.sub(e),u))}e.add(dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(lr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(lr,ac)===null||_i.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=E;M<b;M+=3){const w=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=pr(this,p,t,n,c,u,f,w,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=pr(this,a,t,n,c,u,f,y,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=E;M<b;M+=3){const w=M,C=M+1,x=M+2;s=pr(this,p,t,n,c,u,f,w,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const y=m,E=m+1,M=m+2;s=pr(this,a,t,n,c,u,f,y,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hd(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ai,o),l===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:i}}function pr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,cr),i.getVertexPosition(l,hr),i.getVertexPosition(c,ur);const u=Hd(i,t,e,n,cr,hr,ur,oc);if(u){const f=new I;Tn.getBarycoord(oc,cr,hr,ur,f),s&&(u.uv=Tn.getInterpolatedAttribute(s,o,l,c,f,new gt)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,o,l,c,f,new gt)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Tn.getNormal(cr,hr,ur,h.normal),u.face=h,u.barycoord=f}return u}class nu extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=We,u=We,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new xe,lc=new xe,mr=[],cc=new Ii,Vd=new xe,ws=new dn,Es=new Ks;class ta extends dn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),cc.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(cc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Es.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),lc.multiplyMatrices(n,Ki),ws.matrixWorld=lc,ws.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){const l=mr[a];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nu(new Float32Array(s*this.count),s,this.count,pl,An));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vi=new Ks,Wd=new gt(.5,.5),gr=new I;class Sl{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],S=r[9],m=r[10],p=r[11],y=r[12],E=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,d-u,p-g,b-y).normalize(),s[1].setComponents(c+a,d+u,p+g,b+y).normalize(),s[2].setComponents(c+o,d+f,p+S,b+E).normalize(),s[3].setComponents(c-o,d-f,p-S,b-E).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,b-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,b-M).normalize(),e===Fn)s[5].setComponents(c+l,d+h,p+m,b+M).normalize();else if(e===Vs)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);const e=Wd.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends Ze{constructor(t=[],e=Ri,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends Ze{constructor(t,e,n=Bn,s,r,a,o=We,l=We,c,u=Qn,f=1){if(u!==Qn&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class qd extends Xs{constructor(t,e=Bn,n=Ri,s,r,a=We,o=We,l,c=Qn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class su extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class et extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function g(S,m,p,y,E,M,b,w,C,x,T){const P=M/C,F=b/x,G=M/2,q=b/2,U=w/2,W=C+1,J=x+1;let Z=0,ht=0;const Q=new I;for(let rt=0;rt<J;rt++){const nt=rt*F-q;for(let Ht=0;Ht<W;Ht++){const zt=Ht*P-G;Q[S]=zt*y,Q[m]=nt*E,Q[p]=U,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[m]=0,Q[p]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Ht/C),f.push(1-rt/x),Z+=1}}for(let rt=0;rt<x;rt++)for(let nt=0;nt<C;nt++){const Ht=h+nt+W*rt,zt=h+nt+W*(rt+1),ge=h+(nt+1)+W*(rt+1),ee=h+(nt+1)+W*rt;l.push(Ht,zt,ee),l.push(zt,ge,ee),ht+=6}o.addGroup(d,ht,T),d+=ht,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class St extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const S=[],m=n/2;let p=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function y(){const M=new I,b=new I;let w=0;const C=(e-t)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,F=P*(e-t)+t;for(let G=0;G<=s;G++){const q=G/s,U=q*l+o,W=Math.sin(U),J=Math.cos(U);b.x=F*W,b.y=-P*n+m,b.z=F*J,f.push(b.x,b.y,b.z),M.set(W,C,J).normalize(),h.push(M.x,M.y,M.z),d.push(q,1-P),T.push(g++)}S.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const P=S[T][x],F=S[T+1][x],G=S[T+1][x+1],q=S[T][x+1];(t>0||T!==0)&&(u.push(P,F,q),w+=3),(e>0||T!==r-1)&&(u.push(F,G,q),w+=3)}c.addGroup(p,w,0),p+=w}function E(M){const b=g,w=new gt,C=new I;let x=0;const T=M===!0?t:e,P=M===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),g++;const F=g;for(let G=0;G<=s;G++){const U=G/s*l+o,W=Math.cos(U),J=Math.sin(U);C.x=T*J,C.y=m*P,C.z=T*W,f.push(C.x,C.y,C.z),h.push(0,P,0),w.x=W*.5+.5,w.y=J*.5*P+.5,d.push(w.x,w.y),g++}for(let G=0;G<s;G++){const q=b+G,U=F+G;M===!0?u.push(U,U+1,q):u.push(U+1,U,q),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pe extends St{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Pe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new I,M=new I,b=new I;for(let w=0;w<e.length;w+=3)d(e[w+0],E),d(e[w+1],M),d(e[w+2],b),l(E,M,b,y)}function l(y,E,M,b){const w=b+1,C=[];for(let x=0;x<=w;x++){C[x]=[];const T=y.clone().lerp(M,x/w),P=E.clone().lerp(M,x/w),F=w-x;for(let G=0;G<=F;G++)G===0&&x===w?C[x][G]=T:C[x][G]=T.clone().lerp(P,G/F)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){const P=Math.floor(T/2);T%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function c(y){const E=new I;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(y),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){const y=new I;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const M=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(M,1-b)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const E=a[y+0],M=a[y+2],b=a[y+4],w=Math.max(E,M,b),C=Math.min(E,M,b);w>.9&&C<.1&&(E<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,E){const M=y*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){const y=new I,E=new I,M=new I,b=new I,w=new gt,C=new gt,x=new gt;for(let T=0,P=0;T<r.length;T+=9,P+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),w.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),b.copy(y).add(E).add(M).divideScalar(3);const F=m(b);S(w,P+0,y,F),S(C,P+2,E,F),S(x,P+4,M,F)}}function S(y,E,M,b){b<0&&y.x===1&&(a[E]=y.x-1),M.x===0&&M.z===0&&(a[E]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.vertices,t.indices,t.radius,t.detail)}}class jn extends ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jn(t.radius,t.detail)}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new xe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yl extends Gn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yd extends yl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const hc=new I,uc=new I,Ua=new wl,Fa=new wl,Oa=new wl;class $d extends Gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(uc.subVectors(s[0],s[1]).add(s[0]),c=uc);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(hc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Ua.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,S,m),Fa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,S,m),Oa.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Fa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Oa.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ua.calc(l),Fa.calc(l),Oa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Kd(i,t){const e=1-i;return e*e*t}function Zd(i,t){return 2*(1-i)*i*t}function Jd(i,t){return i*i*t}function Fs(i,t,e,n){return Kd(i,t)+Zd(i,e)+Jd(i,n)}function Qd(i,t){const e=1-i;return e*e*e*t}function jd(i,t){const e=1-i;return 3*e*e*i*t}function tf(i,t){return 3*(1-i)*i*i*t}function ef(i,t){return i*i*i*t}function Os(i,t,e,n,s){return Qd(i,t)+jd(i,e)+tf(i,n)+ef(i,s)}class ru extends Gn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,s.x,r.x,a.x,o.x),Os(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nf extends Gn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,s.x,r.x,a.x,o.x),Os(t,s.y,r.y,a.y,o.y),Os(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class au extends Gn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends Gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Gn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(t,s.x,r.x,a.x),Fs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends Gn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Fs(t,s.x,r.x,a.x),Fs(t,s.y,r.y,a.y),Fs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(dc(o,l.x,c.x,u.x,f.x),dc(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var sl=Object.freeze({__proto__:null,ArcCurve:Yd,CatmullRomCurve3:$d,CubicBezierCurve:ru,CubicBezierCurve3:nf,EllipseCurve:yl,LineCurve:au,LineCurve3:sf,QuadraticBezierCurve:ou,QuadraticBezierCurve3:rf,SplineCurve:lu});class af extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new sl[s.type]().fromJSON(s))}return this}}class ea extends af{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new au(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ou(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new ru(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new yl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ti extends ea{constructor(t){super(t),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ea().fromJSON(s))}return this}}function of(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=cu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=df(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return qs(r,a,e,o,l,c,0),a}function cu(i,t,e,n,s){let r;if(s===wf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=fc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=fc(a/n|0,i[a],i[a+1],r);return r&&ls(r,r.next)&&($s(r),r=r.next),r}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Ne(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&_f(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?cf(i,n,s,r):lf(i)){t.push(l.i,i.i,c.i),$s(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=hf(Pi(i),t),qs(i,t,e,n,s,r,2)):a===2&&uf(i,t,e,n,s,r):qs(Pi(i),t,e,n,s,r,1);break}}}function lf(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Ns(s,o,r,l,a,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ne(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),S=Math.max(o,l,c),m=Math.max(u,f,h),p=rl(d,g,t,e,n),y=rl(S,m,t,e,n);let E=i.prevZ,M=i.nextZ;for(;E&&E.z>=p&&M&&M.z<=y;){if(E.x>=d&&E.x<=S&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ns(o,u,l,f,c,h,E.x,E.y)&&Ne(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=d&&M.x<=S&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ns(o,u,l,f,c,h,M.x,M.y)&&Ne(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=S&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ns(o,u,l,f,c,h,E.x,E.y)&&Ne(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=S&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ns(o,u,l,f,c,h,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function hf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&uu(n,e,e.next,s)&&Ys(n,s)&&Ys(s,n)&&(t.push(n.i,e.i,s.i),$s(e),$s(e.next),e=i=s),e=e.next}while(e!==i);return Pi(e)}function uf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mf(a,o)){let l=du(a,o);a=Pi(a,a.next),l=Pi(l,l.next),qs(a,t,e,n,s,r,0),qs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function df(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=cu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(xf(c))}s.sort(ff);for(let r=0;r<s.length;r++)e=pf(s[r],e);return e}function ff(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function pf(i,t){const e=mf(i,t);if(!e)return t;const n=du(e,i);return Pi(n,n.next),Pi(e,e.next)}function mf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&hu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Ys(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&gf(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function gf(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function _f(i,t,e,n){let s=i;do s.z===0&&(s.z=rl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vf(s)}function vf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ns(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&hu(i,t,e,n,s,r,a,o)}function Mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sf(i,t)&&(Ys(i,t)&&Ys(t,i)&&yf(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||ls(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function uu(i,t,e,n){const s=vr(Ne(i,t,e)),r=vr(Ne(i,t,n)),a=vr(Ne(e,n,i)),o=vr(Ne(e,n,t));return!!(s!==r&&a!==o||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||a===0&&_r(e,i,n)||o===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function yf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function du(i,t){const e=al(i.i,i.x,i.y),n=al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fc(i,t,e,n){const s=al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ef{static triangulate(t,e,n=2){return of(t,e,n)}}class Kn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Kn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];pc(t),mc(n,t);let a=t.length;e.forEach(pc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,mc(n,e[l]);const o=Ef.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function pc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class aa extends ke{constructor(t=new ti([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:bf;let E,M=!1,b,w,C,x;if(p){E=p.getSpacedPoints(u),M=!0,h=!1;const st=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,st),w=new I,C=new I,x=new I}h||(m=0,d=0,g=0,S=0);const T=o.extractPoints(c);let P=T.shape;const F=T.holes;if(!Kn.isClockWise(P)){P=P.reverse();for(let st=0,ut=F.length;st<ut;st++){const dt=F[st];Kn.isClockWise(dt)&&(F[st]=dt.reverse())}}function q(st){const dt=10000000000000001e-36;let pt=st[0];for(let yt=1;yt<=st.length;yt++){const Vt=yt%st.length,Wt=st[Vt],Kt=Wt.x-pt.x,jt=Wt.y-pt.y,D=Kt*Kt+jt*jt,Ee=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(pt.x),Math.abs(pt.y)),ce=dt*Ee*Ee;if(D<=ce){st.splice(Vt,1),yt--;continue}pt=Wt}}q(P),F.forEach(q);const U=F.length,W=P;for(let st=0;st<U;st++){const ut=F[st];P=P.concat(ut)}function J(st,ut,dt){return ut||ye("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ut,dt)}const Z=P.length;function ht(st,ut,dt){let pt,yt,Vt;const Wt=st.x-ut.x,Kt=st.y-ut.y,jt=dt.x-st.x,D=dt.y-st.y,Ee=Wt*Wt+Kt*Kt,ce=Wt*D-Kt*jt;if(Math.abs(ce)>Number.EPSILON){const A=Math.sqrt(Ee),v=Math.sqrt(jt*jt+D*D),H=ut.x-Kt/A,Y=ut.y+Wt/A,j=dt.x-D/v,mt=dt.y+jt/v,xt=((j-H)*D-(mt-Y)*jt)/(Wt*D-Kt*jt);pt=H+Wt*xt-st.x,yt=Y+Kt*xt-st.y;const $=pt*pt+yt*yt;if($<=2)return new gt(pt,yt);Vt=Math.sqrt($/2)}else{let A=!1;Wt>Number.EPSILON?jt>Number.EPSILON&&(A=!0):Wt<-Number.EPSILON?jt<-Number.EPSILON&&(A=!0):Math.sign(Kt)===Math.sign(D)&&(A=!0),A?(pt=-Kt,yt=Wt,Vt=Math.sqrt(Ee)):(pt=Wt,yt=Kt,Vt=Math.sqrt(Ee/2))}return new gt(pt/Vt,yt/Vt)}const Q=[];for(let st=0,ut=W.length,dt=ut-1,pt=st+1;st<ut;st++,dt++,pt++)dt===ut&&(dt=0),pt===ut&&(pt=0),Q[st]=ht(W[st],W[dt],W[pt]);const rt=[];let nt,Ht=Q.concat();for(let st=0,ut=U;st<ut;st++){const dt=F[st];nt=[];for(let pt=0,yt=dt.length,Vt=yt-1,Wt=pt+1;pt<yt;pt++,Vt++,Wt++)Vt===yt&&(Vt=0),Wt===yt&&(Wt=0),nt[pt]=ht(dt[pt],dt[Vt],dt[Wt]);rt.push(nt),Ht=Ht.concat(nt)}let zt;if(m===0)zt=Kn.triangulateShape(W,F);else{const st=[],ut=[];for(let dt=0;dt<m;dt++){const pt=dt/m,yt=d*Math.cos(pt*Math.PI/2),Vt=g*Math.sin(pt*Math.PI/2)+S;for(let Wt=0,Kt=W.length;Wt<Kt;Wt++){const jt=J(W[Wt],Q[Wt],Vt);Rt(jt.x,jt.y,-yt),pt===0&&st.push(jt)}for(let Wt=0,Kt=U;Wt<Kt;Wt++){const jt=F[Wt];nt=rt[Wt];const D=[];for(let Ee=0,ce=jt.length;Ee<ce;Ee++){const A=J(jt[Ee],nt[Ee],Vt);Rt(A.x,A.y,-yt),pt===0&&D.push(A)}pt===0&&ut.push(D)}}zt=Kn.triangulateShape(st,ut)}const ge=zt.length,ee=g+S;for(let st=0;st<Z;st++){const ut=h?J(P[st],Ht[st],ee):P[st];M?(C.copy(b.normals[0]).multiplyScalar(ut.x),w.copy(b.binormals[0]).multiplyScalar(ut.y),x.copy(E[0]).add(C).add(w),Rt(x.x,x.y,x.z)):Rt(ut.x,ut.y,0)}for(let st=1;st<=u;st++)for(let ut=0;ut<Z;ut++){const dt=h?J(P[ut],Ht[ut],ee):P[ut];M?(C.copy(b.normals[st]).multiplyScalar(dt.x),w.copy(b.binormals[st]).multiplyScalar(dt.y),x.copy(E[st]).add(C).add(w),Rt(x.x,x.y,x.z)):Rt(dt.x,dt.y,f/u*st)}for(let st=m-1;st>=0;st--){const ut=st/m,dt=d*Math.cos(ut*Math.PI/2),pt=g*Math.sin(ut*Math.PI/2)+S;for(let yt=0,Vt=W.length;yt<Vt;yt++){const Wt=J(W[yt],Q[yt],pt);Rt(Wt.x,Wt.y,f+dt)}for(let yt=0,Vt=F.length;yt<Vt;yt++){const Wt=F[yt];nt=rt[yt];for(let Kt=0,jt=Wt.length;Kt<jt;Kt++){const D=J(Wt[Kt],nt[Kt],pt);M?Rt(D.x,D.y+E[u-1].y,E[u-1].x+dt):Rt(D.x,D.y,f+dt)}}}ae(),tt();function ae(){const st=s.length/3;if(h){let ut=0,dt=Z*ut;for(let pt=0;pt<ge;pt++){const yt=zt[pt];Yt(yt[2]+dt,yt[1]+dt,yt[0]+dt)}ut=u+m*2,dt=Z*ut;for(let pt=0;pt<ge;pt++){const yt=zt[pt];Yt(yt[0]+dt,yt[1]+dt,yt[2]+dt)}}else{for(let ut=0;ut<ge;ut++){const dt=zt[ut];Yt(dt[2],dt[1],dt[0])}for(let ut=0;ut<ge;ut++){const dt=zt[ut];Yt(dt[0]+Z*u,dt[1]+Z*u,dt[2]+Z*u)}}n.addGroup(st,s.length/3-st,0)}function tt(){const st=s.length/3;let ut=0;at(W,ut),ut+=W.length;for(let dt=0,pt=F.length;dt<pt;dt++){const yt=F[dt];at(yt,ut),ut+=yt.length}n.addGroup(st,s.length/3-st,1)}function at(st,ut){let dt=st.length;for(;--dt>=0;){const pt=dt;let yt=dt-1;yt<0&&(yt=st.length-1);for(let Vt=0,Wt=u+m*2;Vt<Wt;Vt++){const Kt=Z*Vt,jt=Z*(Vt+1),D=ut+pt+Kt,Ee=ut+yt+Kt,ce=ut+yt+jt,A=ut+pt+jt;It(D,Ee,ce,A)}}}function Rt(st,ut,dt){l.push(st),l.push(ut),l.push(dt)}function Yt(st,ut,dt){$t(st),$t(ut),$t(dt);const pt=s.length/3,yt=y.generateTopUV(n,s,pt-3,pt-2,pt-1);we(yt[0]),we(yt[1]),we(yt[2])}function It(st,ut,dt,pt){$t(st),$t(ut),$t(pt),$t(ut),$t(dt),$t(pt);const yt=s.length/3,Vt=y.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);we(Vt[0]),we(Vt[1]),we(Vt[3]),we(Vt[1]),we(Vt[2]),we(Vt[3])}function $t(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function we(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Tf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sl[s.type]().fromJSON(s)),new aa(n,t.options)}}const bf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-f),new gt(h,1-g),new gt(S,1-p)]:[new gt(o,1-l),new gt(u,1-f),new gt(d,1-g),new gt(m,1-p)]}};function Tf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oe extends ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oe(t.radius,t.detail)}}class El extends ke{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,f=new I,h=new gt,d=new I,g=new I,S=new I;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,S.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),l.push(d.x,d.y,d.z),S.copy(g)}for(let y=0;y<=e;y++){const E=n+y*u*s,M=Math.sin(E),b=Math.cos(E);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*M,f.y=t[w].y,f.z=t[w].x*b,a.push(f.x,f.y,f.z),h.x=y/e,h.y=w/(t.length-1),o.push(h.x,h.y);const C=l[3*w+0]*M,x=l[3*w+1],T=l[3*w+0]*b;c.push(C,x,T)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){const M=E+y*t.length,b=M,w=M+t.length,C=M+t.length+1,x=M+1;r.push(b,w,x),r.push(C,x,w)}this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.points,t.segments,t.phiStart,t.phiLength)}}class be extends ds{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new be(t.radius,t.detail)}}class Js extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],S=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let E=0;E<c;E++){const M=E*f-r;g.push(M,-y,0),S.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),w=y+1+c*p;d.push(E,M,w),d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.width,t.height,t.widthSegments,t.heightSegments)}}class bl extends ke{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new I,g=new gt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let S=0;S<s;S++){const m=S*(n+1);for(let p=0;p<n;p++){const y=p+m,E=y,M=y+n+1,b=y+n+2,w=y+1;o.push(E,M,w),o.push(M,b,w)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Di extends ke{constructor(t=new ti([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(a,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const g=h.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Kn.isClockWise(y)===!0&&(g[m]=y.reverse())}const S=Kn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=S.length;m<p;m++){const y=S[m],E=y[0]+f,M=y[1]+f,b=y[2]+f;n.push(E,M,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Af(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Di(n,t.curveSegments)}}function Af(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class sn extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,h=new I,d=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n,M=a+E*o,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b);let C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=s+T*r;f.x=-w*Math.cos(P),f.y=b,f.z=w*Math.sin(P),g.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(T+C,1-E),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const E=u[p][y+1],M=u[p][y],b=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&d.push(E,M,w),(p!==n-1||l<Math.PI)&&d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vn extends ds{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vn(t.radius,t.detail)}}class de extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new I,d=new I,g=new I;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=s;p++){const y=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,M=(s+1)*S+m;l.push(p,y,M),l.push(y,E,M)}this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(gc(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function gc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Cf={clone:cs,merge:Qe};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class If extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Df extends Zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uf extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pu extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ff extends pu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ba=new xe,_c=new I,vc=new I;class Of{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;_c.setFromMatrixPosition(t.matrixWorld),e.position.copy(_c),vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xr=new I,Mr=new kn,In=new I;class Tl extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xr,Mr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xr,Mr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,Mr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new I,xc=new gt,Mc=new gt;class bn extends Tl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,xc,Mc),e.subVectors(Mc,xc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Al extends Tl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bf extends Of{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sc extends pu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Bf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zi=-90,Ji=1;class zf extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const r=new bn(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const a=new bn(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const o=new bn(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const l=new bn(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new bn(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kf extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Bl=class Bl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Bl.prototype.isMatrix2=!0;let yc=Bl;function wc(i,t,e,n){const s=Gf(n);switch(e){case $h:return i*t;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case Kh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case _l:return i*t*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(i,16)*Math.max(t,8)/4;case To:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Lo:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Io:case $r:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kr:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gf(i){switch(i){case un:case Wh:return{byteLength:1,components:1};case Gs:case Xh:case zn:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Bn:case ul:case An:return{byteLength:4,components:1};case qh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],S=f[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const S=f[d];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
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
#endif`,G0=`uniform sampler2D dfgLUT;
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
}`,H0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:$f,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:jf,beginnormal_vertex:t0,bsdfs:e0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:v0,colorspace_fragment:x0,colorspace_pars_fragment:M0,envmap_fragment:S0,envmap_common_pars_fragment:y0,envmap_pars_fragment:w0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:U0,envmap_vertex:b0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:L0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:z0,lights_physical_fragment:k0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:W0,lightprobes_pars_fragment:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:K0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:Q0,map_particle_pars_fragment:j0,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ep,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:xp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:yp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Ip,specularmap_fragment:Dp,specularmap_pars_fragment:Np,tonemapping_fragment:Up,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:kp,uv_vertex:Gp,worldpos_vertex:Hp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:$p,depth_vert:Kp,depth_frag:Zp,distance_vert:Jp,distance_frag:Qp,equirect_vert:jp,equirect_frag:tm,linedashed_vert:em,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:xm,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:ym},Pt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Un={basic:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Qe([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Qe([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Qe([Pt.points,Pt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Qe([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Qe([Pt.common,Pt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Qe([Pt.sprite,Pt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Qe([Pt.common,Pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Qe([Pt.lights,Pt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Un.physical={uniforms:Qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Sr={r:0,b:0,g:0},wm=new xe,gu=new ne;gu.set(-1,0,0,0,1,0,0,0,1);function Em(i,t,e,n,s,r){const a=new qt(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const M=y.backgroundBlurriness>0;E=t.get(E,M)}return E}function g(y){let E=!1;const M=d(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,E){const M=d(E);M&&(M.isCubeTexture||M.mapping===ra)?(c===void 0&&(c=new dn(new et(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:cs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gu),c.material.toneMapped=ve.getTransfer(M.colorSpace)!==Re,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new dn(new Js(2,2),new fn({name:"BackgroundMaterial",uniforms:cs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ve.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(Sr,fu(i)),e.buffers.color.setClear(Sr.r,Sr.g,Sr.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:S,dispose:p}}function bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(F,G,q,U,W){let J=!1;const Z=f(F,U,q,G);r!==Z&&(r=Z,c(r.object)),J=d(F,U,q,W),J&&g(F,U,q,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(F,G,q,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function f(F,G,q,U){const W=U.wireframe===!0;let J=n[G.id];J===void 0&&(J={},n[G.id]=J);const Z=F.isInstancedMesh===!0?F.id:0;let ht=J[Z];ht===void 0&&(ht={},J[Z]=ht);let Q=ht[q.id];Q===void 0&&(Q={},ht[q.id]=Q);let rt=Q[W];return rt===void 0&&(rt=h(l()),Q[W]=rt),rt}function h(F){const G=[],q=[],U=[];for(let W=0;W<e;W++)G[W]=0,q[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:U,object:F,attributes:{},index:null}}function d(F,G,q,U){const W=r.attributes,J=G.attributes;let Z=0;const ht=q.getAttributes();for(const Q in ht)if(ht[Q].location>=0){const nt=W[Q];let Ht=J[Q];if(Ht===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(Ht=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(Ht=F.instanceColor)),nt===void 0||nt.attribute!==Ht||Ht&&nt.data!==Ht.data)return!0;Z++}return r.attributesNum!==Z||r.index!==U}function g(F,G,q,U){const W={},J=G.attributes;let Z=0;const ht=q.getAttributes();for(const Q in ht)if(ht[Q].location>=0){let nt=J[Q];nt===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor));const Ht={};Ht.attribute=nt,nt&&nt.data&&(Ht.data=nt.data),W[Q]=Ht,Z++}r.attributes=W,r.attributesNum=Z,r.index=U}function S(){const F=r.newAttributes;for(let G=0,q=F.length;G<q;G++)F[G]=0}function m(F){p(F,0)}function p(F,G){const q=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;q[F]=1,U[F]===0&&(i.enableVertexAttribArray(F),U[F]=1),W[F]!==G&&(i.vertexAttribDivisor(F,G),W[F]=G)}function y(){const F=r.newAttributes,G=r.enabledAttributes;for(let q=0,U=G.length;q<U;q++)G[q]!==F[q]&&(i.disableVertexAttribArray(q),G[q]=0)}function E(F,G,q,U,W,J,Z){Z===!0?i.vertexAttribIPointer(F,G,q,W,J):i.vertexAttribPointer(F,G,q,U,W,J)}function M(F,G,q,U){S();const W=U.attributes,J=q.getAttributes(),Z=G.defaultAttributeValues;for(const ht in J){const Q=J[ht];if(Q.location>=0){let rt=W[ht];if(rt===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(rt=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(rt=F.instanceColor)),rt!==void 0){const nt=rt.normalized,Ht=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;const ge=zt.buffer,ee=zt.type,ae=zt.bytesPerElement,tt=ee===i.INT||ee===i.UNSIGNED_INT||rt.gpuType===ul;if(rt.isInterleavedBufferAttribute){const at=rt.data,Rt=at.stride,Yt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<Q.locationSize;It++)p(Q.location+It,at.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<Q.locationSize;It++)m(Q.location+It);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let It=0;It<Q.locationSize;It++)E(Q.location+It,Ht/Q.locationSize,ee,nt,Rt*ae,(Yt+Ht/Q.locationSize*It)*ae,tt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<Q.locationSize;at++)p(Q.location+at,rt.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<Q.locationSize;at++)m(Q.location+at);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let at=0;at<Q.locationSize;at++)E(Q.location+at,Ht/Q.locationSize,ee,nt,Ht*ae,Ht/Q.locationSize*at*ae,tt)}}else if(Z!==void 0){const nt=Z[ht];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Q.location,nt);break;case 3:i.vertexAttrib3fv(Q.location,nt);break;case 4:i.vertexAttrib4fv(Q.location,nt);break;default:i.vertexAttrib1fv(Q.location,nt)}}}}y()}function b(){T();for(const F in n){const G=n[F];for(const q in G){const U=G[q];for(const W in U){const J=U[W];for(const Z in J)u(J[Z].object),delete J[Z];delete U[W]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;const G=n[F.id];for(const q in G){const U=G[q];for(const W in U){const J=U[W];for(const Z in J)u(J[Z].object),delete J[Z];delete U[W]}}delete n[F.id]}function C(F){for(const G in n){const q=n[G];for(const U in q){const W=q[U];if(W[F.id]===void 0)continue;const J=W[F.id];for(const Z in J)u(J[Z].object),delete J[Z];delete W[F.id]}}}function x(F){for(const G in n){const q=n[G],U=F.isInstancedMesh===!0?F.id:0,W=q[U];if(W!==void 0){for(const J in W){const Z=W[J];for(const ht in Z)u(Z[ht].object),delete Z[ht];delete W[J]}delete q[U],Object.keys(q).length===0&&delete n[G]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Tm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==un&&C!==An&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,maxSamples:b,samples:w}}function Rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new oi,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,E=y*4;let M=p.clippingState||null;l.value=M,M=u(g,h,E,d);for(let b=0;b!==E;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const p=d+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==S;++E,M+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const is=4,Cm=6,Pm=20,Lm=256,bs=new Al,Ec=new qt;let za=null,ka=0,Ga=0,Ha=!1;const Im=new I,xi=new I;class bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Im}=r;za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(za,ka,Ga),this._renderer.xr.enabled=Ha,t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:zn,format:Rn,colorSpace:Zr,depthBuffer:!1},s=Tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dm(r)),this._blurMaterial=Um(r,t,e),this._ggxMaterial=Nm(r,t,e)}return s}_compileMaterial(t){const e=new dn(new ke,t);this._renderer.compile(e,bs)}_sceneToCubeUV(t,e,n,s,r){const l=new bn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ec),f.toneMapping=On,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new et,new jr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Ec),p=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const b=this._cubeSize;Qi(s,M*b,E>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(S,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ri||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-is?n-g+is:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Qi(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,bs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Qi(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,bs)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-is?s-this._lodMax+is:0),h=4*(this._cubeSize-u);Qi(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,bs)}}function Dm(i){const t=[],e=[];let n=i;const s=i-is+1+Cm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),S=new Float32Array(d*h*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,E=p>2?0:-1,M=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];g.set(M,d*h*p);for(let b=0;b<h;b++){const w=u[b*2]*2-1,C=u[b*2+1]*2-1;p===0?xi.set(1,C,w):p===1?xi.set(-w,1,-C):p===2?xi.set(-w,C,1):p===3?xi.set(-1,C,-w):p===4?xi.set(-w,-1,C):xi.set(w,C,-1),xi.toArray(S,(p*h+b)*d)}}const m=new ke;m.setAttribute("position",new je(g,d)),m.setAttribute("outputDirection",new je(S,d)),e.push(new dn(m,null)),n>is&&n--}return{lodMeshes:e,sizeLods:t}}function Tc(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nm(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Um(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ac(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rc(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _u extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new iu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Zn});r.uniforms.tEquirect.value=e;const a=new dn(s,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Xe),new zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Fm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ca||d===ha)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new _u(g.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===ca||d===ha,S=d===Ri||d===os;if(g||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new bc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new bc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===ca?h.mapping=Ri:d===ha&&(h.mapping=os),h}function l(h){let d=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(d!==null){const y=d.array;S=d.version;for(let E=0,M=y.length;E<M;E+=3){const b=y[E+0],w=y[E+1],C=y[E+2];h.push(b,w,w,C,C,b)}}else{const y=g.array;S=g.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const b=E+0,w=E+1,C=E+2;h.push(b,w,w,C,C,b)}}const m=new(g.count>=65535?eu:tu)(h,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function km(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,t,e){const n=new WeakMap,s=new De;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),S===!0&&(E=3);let M=o.attributes.position.count*E,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*b*4*f),C=new Jh(w,M,b,f);C.type=An,C.needsUpdate=!0;const x=E*4;for(let P=0;P<f;P++){const F=m[P],G=p[P],q=y[P],U=M*b*4*P;for(let W=0;W<F.count;W++){const J=W*x;d===!0&&(s.fromBufferAttribute(F,W),w[U+J+0]=s.x,w[U+J+1]=s.y,w[U+J+2]=s.z,w[U+J+3]=0),g===!0&&(s.fromBufferAttribute(G,W),w[U+J+4]=s.x,w[U+J+5]=s.y,w[U+J+6]=s.z,w[U+J+7]=0),S===!0&&(s.fromBufferAttribute(q,W),w[U+J+8]=s.x,w[U+J+9]=s.y,w[U+J+10]=s.z,w[U+J+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new gt(M,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Hm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Vm={[Fh]:"LINEAR_TONE_MAPPING",[Oh]:"REINHARD_TONE_MAPPING",[Bh]:"CINEON_TONE_MAPPING",[zh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Hh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function Wm(i,t,e,n,s,r){const a=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new ke;c.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Se([0,2,0,0,2,0],2));const u=new If({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dn(c,u),h=new Al(-1,1,1,-1,0,1);let d=null,g=null,S=!1,m,p=null,y=[],E=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let w=0;w<y.length;w++){const C=y[w];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){y=M,E=y.length>0&&y[0].isRenderPass===!0;const b=a.width,w=a.height;y.length>0&&o===null&&(o=new Cn(b,w,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(b,w,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const x=y[C];x.setSize&&x.setSize(b,w)}},this.begin=function(M,b){if(S||M.toneMapping===On&&y.length===0)return!1;if(p=b,b!==null){const w=b.width,C=b.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return E===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=On,!0},this.hasRenderPass=function(){return E},this.end=function(M,b){M.toneMapping=m,S=!0;let w=a,C=o;for(let x=0;x<y.length;x++){const T=y[x];T.enabled!==!1&&(T.render(M,C,w,b),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,u.defines={},ve.getTransfer(d)===Re&&(u.defines.SRGB_TRANSFER="");const x=Vm[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(f,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const vu=new Ze,ol=new Xs(1,1),xu=new Jh,Mu=new Td,Su=new iu,Cc=[],Pc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Dc.set(n),i.uniformMatrix2fv(this.addr,!1,Dc),ze(e,n)}}function Zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),ze(e,n)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),ze(e,n)}}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=e.isReversedDepthBuffer()?xl:vl,r=ol):r=vu,e.setTexture2D(t||r,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Su,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xu,s)}function hg(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _g(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vg(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function Sg(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function wg(i,t){i.uniform2uiv(this.addr,t)}function Eg(i,t){i.uniform3uiv(this.addr,t)}function bg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ol:a=vu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ag(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mu,r[a])}function Rg(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Su,r[a])}function Cg(i,t,e){const n=this.cache,s=t.length,r=la(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xu,r[a])}function Pg(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return yg;case 36294:return wg;case 36295:return Eg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function Ng(i,t,e){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nc(e,c===void 0?new Lg(o,i,t):new Ig(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Dg(o),Nc(e,f)),e=f}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ng(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ug=37297;let Fg=0;function Og(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Fc=new ne;function Bg(i){ve._getMatrix(Fc,ve.workingColorSpace,i);const t=`mat3( ${Fc.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case Jr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),o)}else return r}function zg(i,t){const e=Bg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const kg={[Fh]:"Linear",[Oh]:"Reinhard",[Bh]:"Cineon",[zh]:"ACESFilmic",[Gh]:"AgX",[Hh]:"Neutral",[kh]:"Custom"};function Gg(i,t){const e=kg[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yr=new I;function Hg(){ve.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),t=yr.y.toFixed(4),e=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Wg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Us(i){return i!==""}function Bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(qg,$g)}const Yg=new Map;function $g(i,t){let e=le[t];if(e===void 0){const n=Yg.get(t);if(n!==void 0)e=le[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ll(e)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(Kg,Zg)}function Zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Jg={[Gr]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function Qg(i){return Jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jg={[Ri]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function t_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const e_={[os]:"ENVMAP_MODE_REFRACTION"};function n_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i_={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};function s_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":i_[i.combine]||"ENVMAP_BLENDING_NONE"}function r_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function a_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qg(e),c=t_(e),u=n_(e),f=s_(e),h=r_(e),d=Vg(e),g=Wg(r),S=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?le.tonemapping_pars_fragment:"",e.toneMapping!==On?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),Hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),a=ll(a),a=Bc(a,e),a=zc(a,e),o=ll(o),o=Bc(o,e),o=zc(o,e),a=kc(a),o=kc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,M=y+p+o,b=Uc(s,s.VERTEX_SHADER,E),w=Uc(s,s.FRAGMENT_SHADER,M);s.attachShader(S,b),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(F){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(S)||"",q=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(w)||"",W=G.trim(),J=q.trim(),Z=U.trim();let ht=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,w);else{const rt=Oc(s,b,"vertex"),nt=Oc(s,w,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+rt+`
`+nt)}else W!==""?Qt("WebGLProgram: Program Info Log:",W):(J===""||Z==="")&&(Q=!1);Q&&(F.diagnostics={runnable:ht,programLog:W,vertexShader:{log:J,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(b),s.deleteShader(w),x=new qr(s,S),T=Xg(s,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,Ug)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}let o_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c_(t),e.set(t,n)),n}}class c_{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}}function h_(i){return i===Ci||i===$r||i===Kr}function u_(i,t,e,n,s,r){const a=new Qh,o=new l_,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,T,P,F,G,q){const U=F.fog,W=G.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ht=t.get(x.envMap||J,Z),Q=ht&&ht.mapping===ra?ht.image.height:null,rt=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Qt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ht=nt!==void 0?nt.length:0;let zt=0;W.morphAttributes.position!==void 0&&(zt=1),W.morphAttributes.normal!==void 0&&(zt=2),W.morphAttributes.color!==void 0&&(zt=3);let ge,ee,ae,tt;if(rt){const Me=Un[rt];ge=Me.vertexShader,ee=Me.fragmentShader}else{ge=x.vertexShader,ee=x.fragmentShader;const Me=o.getVertexShaderStage(x),_e=o.getFragmentShaderStage(x);o.update(x,Me,_e),ae=Me.id,tt=_e.id}const at=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Yt=G.isInstancedMesh===!0,It=G.isBatchedMesh===!0,$t=!!x.map,we=!!x.matcap,st=!!ht,ut=!!x.aoMap,dt=!!x.lightMap,pt=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Vt=!!x.displacementMap,Wt=!!x.emissiveMap,Kt=!!x.metalnessMap,jt=!!x.roughnessMap,D=x.anisotropy>0,Ee=x.clearcoat>0,ce=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,H=x.sheen>0,Y=x.transmission>0,j=D&&!!x.anisotropyMap,mt=Ee&&!!x.clearcoatMap,xt=Ee&&!!x.clearcoatNormalMap,$=Ee&&!!x.clearcoatRoughnessMap,K=v&&!!x.iridescenceMap,wt=v&&!!x.iridescenceThicknessMap,Gt=H&&!!x.sheenColorMap,At=H&&!!x.sheenRoughnessMap,Et=!!x.specularMap,Ot=!!x.specularColorMap,Xt=!!x.specularIntensityMap,Zt=Y&&!!x.transmissionMap,O=Y&&!!x.thicknessMap,bt=!!x.gradientMap,it=!!x.alphaMap,Tt=x.alphaTest>0,Lt=!!x.alphaHash,ct=!!x.extensions;let kt=On;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(kt=i.toneMapping);const Nt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:ee,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:It,batchingColor:It&&G._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&G.instanceColor!==null,instancingMorph:Yt&&G.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$t,matcap:we,envMap:st,envMapMode:st&&ht.mapping,envMapCubeUVHeight:Q,aoMap:ut,lightMap:dt,bumpMap:pt,normalMap:yt,displacementMap:Vt,emissiveMap:Wt,normalMapObjectSpace:yt&&x.normalMapType===od,normalMapTangentSpace:yt&&x.normalMapType===nl,packedNormalMap:yt&&x.normalMapType===nl&&h_(x.normalMap.format),metalnessMap:Kt,roughnessMap:jt,anisotropy:D,anisotropyMap:j,clearcoat:Ee,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:$,dispersion:ce,retroreflection:A,iridescence:v,iridescenceMap:K,iridescenceThicknessMap:wt,sheen:H,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:Et,specularColorMap:Ot,specularIntensityMap:Xt,transmission:Y,transmissionMap:Zt,thicknessMap:O,gradientMap:bt,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:Tt,alphaHash:Lt,combine:x.combine,mapUv:$t&&g(x.map.channel),aoMapUv:ut&&g(x.aoMap.channel),lightMapUv:dt&&g(x.lightMap.channel),bumpMapUv:pt&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:Vt&&g(x.displacementMap.channel),emissiveMapUv:Wt&&g(x.emissiveMap.channel),metalnessMapUv:Kt&&g(x.metalnessMap.channel),roughnessMapUv:jt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(x.sheenRoughnessMap.channel),specularMapUv:Et&&g(x.specularMap.channel),specularColorMapUv:Ot&&g(x.specularColorMap.channel),specularIntensityMapUv:Xt&&g(x.specularIntensityMap.channel),transmissionMapUv:Zt&&g(x.transmissionMap.channel),thicknessMapUv:O&&g(x.thicknessMap.channel),alphaMapUv:it&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(yt||D),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&($t||it),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Rt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:zt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:$t&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Re,decodeVideoTextureEmissive:Wt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===Re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){const T=d[x.type];let P;if(T){const F=Un[T];P=Cf.clone(F.uniforms)}else P=x.uniforms;return P}function M(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new a_(i,T,x,s),c.push(P),u.set(T,P)),P}function b(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function d_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,S,m,p){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},i[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=m,y.group=p),t++,y}function l(h,d,g,S,m,p,y){y.reversedDepth===!0&&(m=-m);const E=o(h,d,g,S,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(h,d,g,S,m,p){const y=o(h,d,g,S,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||f_),n.length>1&&n.sort(d||Hc),s.length>1&&s.sort(d||Hc)}function f(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function p_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vc,i.set(n,[a])):s>=r.length?(a=new Vc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function m_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let __=0;function v_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x_(i){const t=new m_,e=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new xe,a=new xe;function o(c){let u=0,f=0,h=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,y=0,E=0,M=0,b=0,w=0,C=0,x=0,T=0,P=0;c.sort(v_);for(let G=0,q=c.length;G<q;G++){const U=c[G],W=U.color,J=U.intensity,Z=U.distance;let ht=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ci?ht=U.shadow.map.texture:ht=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=W.r*J,f+=W.g*J,h+=W.b*J;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],J);P++}else if(U.isSunLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const rt=U.shadow,nt=e.get(U);nt.shadowIntensity=rt.intensity,nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=ht;const Ht=rt.getViewportCount();for(let zt=0;zt<Ht;zt++)n.sunShadowMatrix[S+zt]=rt.getMatrix(zt),n.sunShadowCascade[S+zt]=rt._cascadeData[zt];S+=Ht,g++}n.sun[d]=Q,d++}else if(U.isDirectionalLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const rt=U.shadow,nt=e.get(U);nt.shadowIntensity=rt.intensity,nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize=rt.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=ht,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=Q,m++}else if(U.isSpotLight){const Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(W).multiplyScalar(J),Q.distance=Z,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[y]=Q;const rt=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,rt.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[y]=rt.matrix,U.castShadow){const nt=e.get(U);nt.shadowIntensity=rt.intensity,nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize=rt.mapSize,n.spotShadow[y]=nt,n.spotShadowMap[y]=ht,C++}y++}else if(U.isRectAreaLight){const Q=t.get(U);Q.color.copy(W).multiplyScalar(J),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[E]=Q,E++}else if(U.isPointLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const rt=U.shadow,nt=e.get(U);nt.shadowIntensity=rt.intensity,nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize=rt.mapSize,nt.shadowCameraNear=rt.camera.near,nt.shadowCameraFar=rt.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=ht,n.pointShadowMatrix[p]=U.shadow.matrix,w++}n.point[p]=Q,p++}else if(U.isHemisphereLight){const Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(J),Q.groundColor.copy(U.groundColor).multiplyScalar(J),n.hemi[M]=Q,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const F=n.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==E||F.hemiLength!==M||F.numSunShadows!==g||F.numDirectionalShadows!==b||F.numPointShadows!==w||F.numSpotShadows!==C||F.numSpotMaps!==x||F.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=y,F.rectAreaLength=E,F.hemiLength=M,F.numSunShadows=g,F.numDirectionalShadows=b,F.numPointShadows=w,F.numSpotShadows=C,F.numSpotMaps=x,F.numLightProbes=P,n.version=__++)}function l(c,u){let f=0,h=0,d=0,g=0,S=0,m=0;const p=u.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){const M=c[y];if(M.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Wc(i){const t=new x_(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function M_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Wc(i),t.set(s,[o])):r>=a.length?(o=new Wc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,w_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],E_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Xc=new xe,Ts=new I,Wa=new I;function b_(i,t,e){let n=new Sl;const s=new gt,r=new gt,a=new De,o=new Nf,l=new Uf,c={},u=e.maxTextureSize,f={[Ai]:rn,[rn]:Ai,[hn]:hn},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:S_,fragmentShader:y_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new dn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(w,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Bu&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Zn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=p!==this.type;q&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(W=>W.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,W=w.length;U<W;U++){const J=w[U],Z=J.shadow;if(Z===void 0){Qt("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const ht=Z.getFrameExtents();s.multiply(ht),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,Z.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Q,Z.map===null||q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ds){if(J.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Cn(s.x,s.y,{format:Ci,type:zn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new Xs(s.x,s.y,An),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Qn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=We,Z.map.depthTexture.magFilter=We}else J.isPointLight?(Z.map=new _u(s.x),Z.map.depthTexture=new qd(s.x,Bn)):(Z.map=new Cn(s.x,s.y),Z.map.depthTexture=new Xs(s.x,s.y,Bn)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Qn,this.type===Gr?(Z.map.depthTexture.compareFunction=Q?xl:vl,Z.map.depthTexture.minFilter=Xe,Z.map.depthTexture.magFilter=Xe):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=We,Z.map.depthTexture.magFilter=We);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);const rt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,x);for(let nt=0;nt<rt;nt++){const Ht=Z.getCamera(nt);if(J.isPointLight){const zt=Z.camera,ge=Z.matrix,ee=J.distance||zt.far;ee!==zt.far&&(zt.far=ee,zt.updateProjectionMatrix()),Ts.setFromMatrixPosition(J.matrixWorld),zt.position.copy(Ts),Wa.copy(zt.position),Wa.add(w_[nt]),zt.up.copy(E_[nt]),zt.lookAt(Wa),zt.updateMatrixWorld(),ge.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Xc.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Xc,zt.coordinateSystem,zt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(Z.map),i.clear());const zt=Z.getViewport(nt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),G.viewport(a)}n=Z.getFrustum(nt),M(C,x,Ht,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Ds&&y(Z,x),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,F)};function y(w,C){const x=t.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Cn(s.x,s.y,{format:Ci,type:zn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,S,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,x,d,S,null)}function E(w,C,x,T){let P=null;const F=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)P=F;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=P.uuid,q=C.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let W=U[q];W===void 0&&(W=P.clone(),U[q]=W,C.addEventListener("dispose",b)),P=W}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Ds?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const G=i.properties.get(P);G.light=x}return P}function M(w,C,x,T,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ds)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const q=t.update(w),U=w.material;if(Array.isArray(U)){const W=q.groups;for(let J=0,Z=W.length;J<Z;J++){const ht=W[J],Q=U[ht.materialIndex];if(Q&&Q.visible){const rt=E(w,Q,T,P);w.onBeforeShadow(i,w,C,x,q,rt,ht),i.renderBufferDirect(x,null,q,rt,w,ht),w.onAfterShadow(i,w,C,x,q,rt,ht)}}}else if(U.visible){const W=E(w,U,T,P);w.onBeforeShadow(i,w,C,x,q,W,null),i.renderBufferDirect(x,null,q,W,w,null),w.onAfterShadow(i,w,C,x,q,W,null)}}const G=w.children;for(let q=0,U=G.length;q<U;q++)M(G[q],C,x,T,P)}function b(w){w.target.removeEventListener("dispose",b);for(const x in c){const T=c[x],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function T_(i,t){function e(){let O=!1;const bt=new De;let it=null;const Tt=new De(0,0,0,0);return{setMask:function(Lt){it!==Lt&&!O&&(i.colorMask(Lt,Lt,Lt,Lt),it=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,ct,kt,Nt,Me){Me===!0&&(Lt*=Nt,ct*=Nt,kt*=Nt),bt.set(Lt,ct,kt,Nt),Tt.equals(bt)===!1&&(i.clearColor(Lt,ct,kt,Nt),Tt.copy(bt))},reset:function(){O=!1,it=null,Tt.set(-1,0,0,0)}}}function n(){let O=!1,bt=!1,it=null,Tt=null,Lt=null;return{setReversed:function(ct){if(bt!==ct){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),bt=ct;const Nt=Lt;Lt=null,this.setClear(Nt)}},getReversed:function(){return bt},setTest:function(ct){ct?at(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ct){it!==ct&&!O&&(i.depthMask(ct),it=ct)},setFunc:function(ct){if(bt&&(ct=xd[ct]),Tt!==ct){switch(ct){case _o:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ct}},setLocked:function(ct){O=ct},setClear:function(ct){Lt!==ct&&(Lt=ct,bt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){O=!1,it=null,Tt=null,Lt=null,bt=!1}}}function s(){let O=!1,bt=null,it=null,Tt=null,Lt=null,ct=null,kt=null,Nt=null,Me=null;return{setTest:function(_e){O||(_e?at(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(_e){bt!==_e&&!O&&(i.stencilMask(_e),bt=_e)},setFunc:function(_e,tn,en){(it!==_e||Tt!==tn||Lt!==en)&&(i.stencilFunc(_e,tn,en),it=_e,Tt=tn,Lt=en)},setOp:function(_e,tn,en){(ct!==_e||kt!==tn||Nt!==en)&&(i.stencilOp(_e,tn,en),ct=_e,kt=tn,Nt=en)},setLocked:function(_e){O=_e},setClear:function(_e){Me!==_e&&(i.clearStencil(_e),Me=_e)},reset:function(){O=!1,bt=null,it=null,Tt=null,Lt=null,ct=null,kt=null,Nt=null,Me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],S=null,m=!1,p=null,y=null,E=null,M=null,b=null,w=null,C=null,x=new qt(0,0,0),T=0,P=!1,F=null,G=null,q=null,U=null,W=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ht=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=ht>=1):Q.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=ht>=2);let rt=null,nt={};const Ht=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),ge=new De().fromArray(Ht),ee=new De().fromArray(zt);function ae(O,bt,it,Tt){const Lt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(O,ct),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<it;kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(bt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return ct}const tt={};tt[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(ks),pt(!1),yt(Hl),at(i.CULL_FACE),ut(Zn);function at(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Rt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Yt(O,bt){return h[O]!==bt?(i.bindFramebuffer(O,bt),h[O]=bt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function It(O,bt){let it=g,Tt=!1;if(O){it=d.get(bt),it===void 0&&(it=[],d.set(bt,it));const Lt=O.textures;if(it.length!==Lt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,kt=Lt.length;ct<kt;ct++)it[ct]=i.COLOR_ATTACHMENT0+ct;it.length=Lt.length,Tt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(it)}function $t(O){return S!==O?(i.useProgram(O),S=O,!0):!1}const we={[es]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};we[Hu]=i.MIN,we[Vu]=i.MAX;const st={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[Dh]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[$u]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[Nh]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(O,bt,it,Tt,Lt,ct,kt,Nt,Me,_e){if(O===Zn){m===!0&&(Rt(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),O!==zu){if(O!==p||_e!==P){if((y!==es||b!==es)&&(i.blendEquation(i.FUNC_ADD),y=es,b=es),_e)switch(O){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ye("WebGLState: Invalid blending: ",O);break}else switch(O){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",O);break}E=null,M=null,w=null,C=null,x.set(0,0,0),T=0,p=O,P=_e}return}Lt=Lt||bt,ct=ct||it,kt=kt||Tt,(bt!==y||Lt!==b)&&(i.blendEquationSeparate(we[bt],we[Lt]),y=bt,b=Lt),(it!==E||Tt!==M||ct!==w||kt!==C)&&(i.blendFuncSeparate(st[it],st[Tt],st[ct],st[kt]),E=it,M=Tt,w=ct,C=kt),(Nt.equals(x)===!1||Me!==T)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Me),x.copy(Nt),T=Me),p=O,P=!1}function dt(O,bt){O.side===hn?Rt(i.CULL_FACE):at(i.CULL_FACE);let it=O.side===rn;bt&&(it=!it),pt(it),O.blending===bi&&O.transparent===!1?ut(Zn):ut(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Tt=O.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Wt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){F!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),F=O)}function yt(O){O!==Fu?(at(i.CULL_FACE),O!==G&&(O===Hl?i.cullFace(i.BACK):O===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),G=O}function Vt(O){O!==q&&(Z&&i.lineWidth(O),q=O)}function Wt(O,bt,it){O?(at(i.POLYGON_OFFSET_FILL),(U!==bt||W!==it)&&(U=bt,W=it,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,it))):Rt(i.POLYGON_OFFSET_FILL)}function Kt(O){O?at(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function jt(O){O===void 0&&(O=i.TEXTURE0+J-1),rt!==O&&(i.activeTexture(O),rt=O)}function D(O,bt,it){it===void 0&&(rt===null?it=i.TEXTURE0+J-1:it=rt);let Tt=nt[it];Tt===void 0&&(Tt={type:void 0,texture:void 0},nt[it]=Tt),(Tt.type!==O||Tt.texture!==bt)&&(rt!==it&&(i.activeTexture(it),rt=it),i.bindTexture(O,bt||tt[O]),Tt.type=O,Tt.texture=bt)}function Ee(){const O=nt[rt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function mt(){try{i.texStorage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function xt(){try{i.texStorage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function $(){try{i.texImage2D(...arguments)}catch(O){ye("WebGLState:",O)}}function K(){try{i.texImage3D(...arguments)}catch(O){ye("WebGLState:",O)}}function wt(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function Gt(O,bt){f[O]!==bt&&(i.pixelStorei(O,bt),f[O]=bt)}function At(O){ge.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ge.copy(O))}function Et(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Ot(O,bt){let it=c.get(bt);it===void 0&&(it=new WeakMap,c.set(bt,it));let Tt=it.get(O);Tt===void 0&&(Tt=i.getUniformBlockIndex(bt,O.name),it.set(O,Tt))}function Xt(O,bt){const Tt=c.get(bt).get(O);l.get(bt)!==Tt&&(i.uniformBlockBinding(bt,Tt,O.__bindingPointIndex),l.set(bt,Tt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},rt=null,nt={},h={},d=new WeakMap,g=[],S=null,m=!1,p=null,y=null,E=null,M=null,b=null,w=null,C=null,x=new qt(0,0,0),T=0,P=!1,F=null,G=null,q=null,U=null,W=null,ge.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Rt,bindFramebuffer:Yt,drawBuffers:It,useProgram:$t,setBlending:ut,setMaterial:dt,setFlipSided:pt,setCullFace:yt,setLineWidth:Vt,setPolygonOffset:Wt,setScissorTest:Kt,activeTexture:jt,bindTexture:D,unbindTexture:Ee,compressedTexImage2D:ce,compressedTexImage3D:A,texImage2D:$,texImage3D:K,pixelStorei:Gt,getParameter:wt,updateUBOMapping:Ot,uniformBlockBinding:Xt,texStorage2D:mt,texStorage3D:xt,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:At,viewport:Et,reset:Zt}}function A_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,v){return g?new OffscreenCanvas(A,v):Qr("canvas")}function m(A,v,H){let Y=1;const j=ce(A);if((j.width>H||j.height>H)&&(Y=H/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const mt=Math.floor(Y*j.width),xt=Math.floor(Y*j.height);h===void 0&&(h=S(mt,xt));const $=v?S(mt,xt):h;return $.width=mt,$.height=xt,$.getContext("2d").drawImage(A,0,0,mt,xt),Qt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+mt+"x"+xt+")."),$}else return"data"in A&&Qt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,v,H,Y,j,mt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xt;Y&&(xt=t.get("EXT_texture_norm16"),xt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8),H===i.UNSIGNED_SHORT&&xt&&($=xt.R16_EXT),H===i.SHORT&&xt&&($=xt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),v===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8),H===i.UNSIGNED_SHORT&&xt&&($=xt.RG16_EXT),H===i.SHORT&&xt&&($=xt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&xt&&($=xt.RGB16_EXT),H===i.SHORT&&xt&&($=xt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){const K=mt?Jr:ve.getTransfer(j);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=K===Re?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&xt&&($=xt.RGBA16_EXT),H===i.SHORT&&xt&&($=xt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(A,v){let H;return A?v===null||v===Bn||v===Hs?H=i.DEPTH24_STENCIL8:v===An?H=i.DEPTH32F_STENCIL8:v===Gs&&(H=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bn||v===Hs?H=i.DEPTH_COMPONENT24:v===An?H=i.DEPTH_COMPONENT32F:v===Gs&&(H=i.DEPTH_COMPONENT16),H}function w(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==Xe?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(A){const v=A.target;v.removeEventListener("dispose",x),F(v)}function T(A){const v=n.get(A);if(v.__webglInit===void 0)return;const H=A.source,Y=d.get(H);if(Y){const j=Y[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(A),Object.keys(Y).length===0&&d.delete(H)}n.remove(A)}function P(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const H=A.source,Y=d.get(H);delete Y[v.__cacheKey],a.memory.textures--}function F(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let j=0;j<v.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=A.textures;for(let Y=0,j=H.length;Y<j;Y++){const mt=n.get(H[Y]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(H[Y])}n.remove(A)}let G=0;function q(){G=0}function U(){return G}function W(A){G=A}function J(){const A=G;return A>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function Z(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ht(A,v){const H=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const Y=A.image;if(Y===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(H,A,v);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function Q(A,v){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Rt(H,A,v);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function rt(A,v){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Rt(H,A,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function nt(A,v){const H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Yt(H,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const Ht={[Eo]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},zt={[We]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},ge={[cd]:i.NEVER,[pd]:i.ALWAYS,[hd]:i.LESS,[vl]:i.LEQUAL,[ud]:i.EQUAL,[xl]:i.GEQUAL,[dd]:i.GREATER,[fd]:i.NOTEQUAL};function ee(A,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Xe||v.magFilter===ua||v.magFilter===Qs||v.magFilter===wi||v.minFilter===Xe||v.minFilter===ua||v.minFilter===Qs||v.minFilter===wi)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ht[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ht[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ht[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,zt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,zt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===We||v.minFilter!==Qs&&v.minFilter!==wi||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(A,v){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const mt=Z(v);if(mt!==A.__cacheKey){j[mt]===void 0&&(j[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[mt].usedTimes++;const xt=j[A.__cacheKey];xt!==void 0&&(j[A.__cacheKey].usedTimes--,xt.usedTimes===0&&P(v)),A.__cacheKey=mt,A.__webglTexture=j[mt].texture}return H}function tt(A,v,H){return Math.floor(Math.floor(A/H)/v)}function at(A,v,H,Y){const mt=A.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,Y,v.data);else{mt.sort((Gt,At)=>Gt.start-At.start);let xt=0;for(let Gt=1;Gt<mt.length;Gt++){const At=mt[xt],Et=mt[Gt],Ot=At.start+At.count,Xt=tt(Et.start,v.width,4),Zt=tt(At.start,v.width,4);Et.start<=Ot+1&&Xt===Zt&&tt(Et.start+Et.count-1,v.width,4)===Xt?At.count=Math.max(At.count,Et.start+Et.count-At.start):(++xt,mt[xt]=Et)}mt.length=xt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Gt=0,At=mt.length;Gt<At;Gt++){const Et=mt[Gt],Ot=Math.floor(Et.start/4),Xt=Math.ceil(Et.count/4),Zt=Ot%v.width,O=Math.floor(Ot/v.width),bt=Xt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Zt,O,bt,it,H,Y,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function Rt(A,v,H){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ae(A,v),mt=v.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+H);const xt=n.get(mt);if(mt.version!==xt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const it=ve.getPrimaries(ve.workingColorSpace),Tt=v.colorSpace===ci?null:ve.getPrimaries(v.colorSpace),Lt=v.colorSpace===ci||it===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=m(v.image,!1,s.maxTextureSize);K=Ee(v,K);const wt=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type);let At=M(v.internalFormat,wt,Gt,v.normalized,v.colorSpace,v.isVideoTexture);ee(Y,v);let Et;const Ot=v.mipmaps,Xt=v.isVideoTexture!==!0,Zt=xt.__version===void 0||j===!0,O=mt.dataReady,bt=w(v,K);if(v.isDepthTexture)At=b(v.format===Ei,v.type),Zt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,At,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,At,K.width,K.height,0,wt,Gt,null));else if(v.isDataTexture)if(Ot.length>0){Xt&&Zt&&e.texStorage2D(i.TEXTURE_2D,bt,At,Ot[0].width,Ot[0].height);for(let it=0,Tt=Ot.length;it<Tt;it++)Et=Ot[it],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Et.width,Et.height,wt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,it,At,Et.width,Et.height,0,wt,Gt,Et.data);v.generateMipmaps=!1}else Xt?(Zt&&e.texStorage2D(i.TEXTURE_2D,bt,At,K.width,K.height),O&&at(v,K,wt,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,K.width,K.height,0,wt,Gt,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,At,Ot[0].width,Ot[0].height,K.depth);for(let it=0,Tt=Ot.length;it<Tt;it++)if(Et=Ot[it],v.format!==Rn)if(wt!==null)if(Xt){if(O)if(v.layerUpdates.size>0){const Lt=wc(Et.width,Et.height,v.format,v.type);for(const ct of v.layerUpdates){const kt=Et.data.subarray(ct*Lt/Et.data.BYTES_PER_ELEMENT,(ct+1)*Lt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ct,Et.width,Et.height,1,wt,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Et.width,Et.height,K.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,At,Et.width,Et.height,K.depth,0,Et.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Et.width,Et.height,K.depth,wt,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,At,Et.width,Et.height,K.depth,0,wt,Gt,Et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xt&&Zt&&e.texStorage2D(i.TEXTURE_2D,bt,At,Ot[0].width,Ot[0].height);for(let it=0,Tt=Ot.length;it<Tt;it++)Et=Ot[it],v.format!==Rn?wt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,it,At,Et.width,Et.height,0,Et.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Et.width,Et.height,wt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,it,At,Et.width,Et.height,0,wt,Gt,Et.data)}else if(v.isDataArrayTexture)if(Xt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,At,K.width,K.height,K.depth),O)if(v.layerUpdates.size>0){const it=wc(K.width,K.height,v.format,v.type);for(const Tt of v.layerUpdates){const Lt=K.data.subarray(Tt*it/K.data.BYTES_PER_ELEMENT,(Tt+1)*it/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,K.width,K.height,1,wt,Gt,Lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,wt,Gt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,K.width,K.height,K.depth,0,wt,Gt,K.data);else if(v.isData3DTexture)Xt?(Zt&&e.texStorage3D(i.TEXTURE_3D,bt,At,K.width,K.height,K.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,wt,Gt,K.data)):e.texImage3D(i.TEXTURE_3D,0,At,K.width,K.height,K.depth,0,wt,Gt,K.data);else if(v.isFramebufferTexture){if(Zt)if(Xt)e.texStorage2D(i.TEXTURE_2D,bt,At,K.width,K.height);else{let it=K.width,Tt=K.height;for(let Lt=0;Lt<bt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,At,it,Tt,0,wt,Gt,null),it>>=1,Tt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),K.parentNode!==it){it.appendChild(K),f.add(v),it.onpaint=Tt=>{const Lt=Tt.changedElements;for(const ct of f)Lt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Lt=i.RGBA,ct=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,ct,kt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Xt&&Zt){const it=ce(Ot[0]);e.texStorage2D(i.TEXTURE_2D,bt,At,it.width,it.height)}for(let it=0,Tt=Ot.length;it<Tt;it++)Et=Ot[it],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,wt,Gt,Et):e.texImage2D(i.TEXTURE_2D,it,At,wt,Gt,Et);v.generateMipmaps=!1}else if(Xt){if(Zt){const it=ce(K);e.texStorage2D(i.TEXTURE_2D,bt,At,it.width,it.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Gt,K)}else e.texImage2D(i.TEXTURE_2D,0,At,wt,Gt,K);p(v)&&y(Y),xt.__version=mt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Yt(A,v,H){if(v.image.length!==6)return;const Y=ae(A,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const mt=n.get(j);if(j.version!==mt.__version||Y===!0){e.activeTexture(i.TEXTURE0+H);const xt=ve.getPrimaries(ve.workingColorSpace),$=v.colorSpace===ci?null:ve.getPrimaries(v.colorSpace),K=v.colorSpace===ci||xt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const wt=v.isCompressedTexture||v.image[0].isCompressedTexture,Gt=v.image[0]&&v.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!wt&&!Gt?At[ct]=m(v.image[ct],!0,s.maxCubemapSize):At[ct]=Gt?v.image[ct].image:v.image[ct],At[ct]=Ee(v,At[ct]);const Et=At[0],Ot=r.convert(v.format,v.colorSpace),Xt=r.convert(v.type),Zt=M(v.internalFormat,Ot,Xt,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,bt=mt.__version===void 0||Y===!0,it=j.dataReady;let Tt=w(v,Et);ee(i.TEXTURE_CUBE_MAP,v);let Lt;if(wt){O&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Zt,Et.width,Et.height);for(let ct=0;ct<6;ct++){Lt=At[ct].mipmaps;for(let kt=0;kt<Lt.length;kt++){const Nt=Lt[kt];v.format!==Rn?Ot!==null?O?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,Nt.width,Nt.height,Ot,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,Zt,Nt.width,Nt.height,0,Nt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,Nt.width,Nt.height,Ot,Xt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,Zt,Nt.width,Nt.height,0,Ot,Xt,Nt.data)}}}else{if(Lt=v.mipmaps,O&&bt){Lt.length>0&&Tt++;const ct=ce(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Zt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Gt){O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,Ot,Xt,At[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,At[ct].width,At[ct].height,0,Ot,Xt,At[ct].data);for(let kt=0;kt<Lt.length;kt++){const Me=Lt[kt].image[ct].image;O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Me.width,Me.height,Ot,Xt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,Zt,Me.width,Me.height,0,Ot,Xt,Me.data)}}else{O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ot,Xt,At[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,Ot,Xt,At[ct]);for(let kt=0;kt<Lt.length;kt++){const Nt=Lt[kt];O?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Ot,Xt,Nt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,Zt,Ot,Xt,Nt.image[ct])}}}p(v)&&y(i.TEXTURE_CUBE_MAP),mt.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function It(A,v,H,Y,j,mt){const xt=r.convert(H.format,H.colorSpace),$=r.convert(H.type),K=M(H.internalFormat,xt,$,H.normalized,H.colorSpace),wt=n.get(v),Gt=n.get(H);if(Gt.__renderTarget=v,!wt.__hasExternalTextures){const At=Math.max(1,v.width>>mt),Et=Math.max(1,v.height>>mt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,mt,K,At,Et,v.depth,0,xt,$,null):e.texImage2D(j,mt,K,At,Et,0,xt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),jt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Gt.__webglTexture,0,Kt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Gt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const Y=v.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,mt=b(v.stencilBuffer,j),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(v),mt,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(v),mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,A)}else{const Y=v.textures;for(let j=0;j<Y.length;j++){const mt=Y[j],xt=r.convert(mt.format,mt.colorSpace),$=r.convert(mt.type),K=M(mt.internalFormat,xt,$,mt.normalized,mt.colorSpace);jt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(v),K,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(A,v,H){const Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v.depthTexture);const wt=r.convert(v.depthTexture.format),Gt=r.convert(v.depthTexture.type);let At;v.depthTexture.format===Qn?At=i.DEPTH_COMPONENT24:v.depthTexture.format===Ei&&(At=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,At,v.width,v.height,0,wt,Gt,null)}}else ht(v.depthTexture,0);const mt=j.__webglTexture,xt=Kt(v),$=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,K=v.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Qn)jt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,K,$,mt,0);else if(v.depthTexture.format===Ei)jt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,K,$,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){const v=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)we(v.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?we(v.__webglFramebuffer[0],A,0):we(v.__webglFramebuffer,A,0)}else if(H){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),$t(v.__webglDepthbuffer[Y],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,mt)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$t(v.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,v,H){const Y=n.get(A);v!==void 0&&It(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&st(A)}function dt(A){const v=A.texture,H=n.get(A),Y=n.get(v);A.addEventListener("dispose",x);const j=A.textures,mt=A.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),mt){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let K=0;K<v.mipmaps.length;K++)H.__webglFramebuffer[$][K]=i.createFramebuffer()}else H.__webglFramebuffer[$]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)H.__webglFramebuffer[$]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xt)for(let $=0,K=j.length;$<K;$++){const wt=n.get(j[$]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&jt(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){const K=j[$];H.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);const wt=r.convert(K.format,K.colorSpace),Gt=r.convert(K.type),At=M(K.internalFormat,wt,Gt,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),Et=Kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)It(H.__webglFramebuffer[$][K],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else It(H.__webglFramebuffer[$],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(v)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let $=0,K=j.length;$<K;$++){const wt=j[$],Gt=n.get(wt);let At=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(At=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),ee(At,wt),It(H.__webglFramebuffer,A,wt,i.COLOR_ATTACHMENT0+$,At,0),p(wt)&&y(At)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,Y.__webglTexture),ee($,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)It(H.__webglFramebuffer[K],A,v,i.COLOR_ATTACHMENT0,$,K);else It(H.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,$,0);p(v)&&y($),e.unbindTexture()}A.depthBuffer&&st(A)}function pt(A){const v=A.textures;for(let H=0,Y=v.length;H<Y;H++){const j=v[H];if(p(j)){const mt=E(A),xt=n.get(j).__webglTexture;e.bindTexture(mt,xt),y(mt),e.unbindTexture()}}}const yt=[],Vt=[];function Wt(A){if(A.samples>0){if(jt(A)===!1){const v=A.textures,H=A.width,Y=A.height;let j=i.COLOR_BUFFER_BIT;const mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),$=v.length>1;if($)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const K=A.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[wt]);const Gt=n.get(v[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,j,i.NEAREST),l===!0&&(yt.length=0,Vt.length=0,yt.push(i.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(yt.push(mt),Vt.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[wt]);const Gt=n.get(v[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Kt(A){return Math.min(s.maxSamples,A.samples)}function jt(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Ee(A,v){const H=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Zr&&H!==ci&&(ve.getTransfer(H)===Re?(Y!==Rn||j!==un)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",H)),v}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.getTextureUnits=U,this.setTextureUnits=W,this.setTexture2D=ht,this.setTexture2DArray=Q,this.setTexture3D=rt,this.setTextureCube=nt,this.rebindTextures=ut,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=It,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(i,t){function e(n,s=ci){let r;const a=ve.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Kh)return i.RGB;if(n===Rn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===Hr||n===Vr||n===Wr||n===Xr)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Io||n===Do||n===No||n===$r||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Io)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===tl||n===Kr||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new su(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends Li{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const S=typeof XRWebGLBinding<"u",m=new L_,p={},y=e.getContextAttributes();let E=null,M=null;const b=[],w=[],C=new gt;let x=null,T=null;const P=new bn;P.viewport=new De;const F=new bn;F.viewport=new De;const G=[P,F],q=new kf;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=b[tt];return at===void 0&&(at=new Ma,b[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=b[tt];return at===void 0&&(at=new Ma,b[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=b[tt];return at===void 0&&(at=new Ma,b[tt]=at),at.getHandSpace()};function J(tt){const at=w.indexOf(tt.inputSource);if(at===-1)return;const Rt=b[at];Rt!==void 0&&(Rt.update(tt.inputSource,tt.frame,c||a),Rt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ht);for(let tt=0;tt<b.length;tt++){const at=w[tt];at!==null&&(w[tt]=null,b[tt].disconnect(at))}U=null,W=null,m.reset();for(const tt in p)delete p[tt];if(t.setRenderTarget(E),d=null,h=null,f=null,s=null,M=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){const tt=T.camera;tt.fov=T.fov,tt.zoom=T.zoom,tt.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Yt=null,It=null;y.depth&&(It=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?Ei:Qn,Yt=y.stencil?Hs:Bn);const $t={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer($t),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Cn(h.textureWidth,h.textureHeight,{format:Rn,type:un,depthTexture:new Xs(h.textureWidth,h.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Cn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(tt){for(let at=0;at<tt.removed.length;at++){const Rt=tt.removed[at],Yt=w.indexOf(Rt);Yt>=0&&(w[Yt]=null,b[Yt].disconnect(Rt))}for(let at=0;at<tt.added.length;at++){const Rt=tt.added[at];let Yt=w.indexOf(Rt);if(Yt===-1){for(let $t=0;$t<b.length;$t++)if($t>=w.length){w.push(Rt),Yt=$t;break}else if(w[$t]===null){w[$t]=Rt,Yt=$t;break}if(Yt===-1)break}const It=b[Yt];It&&It.connect(Rt)}}const Q=new I,rt=new I;function nt(tt,at,Rt){Q.setFromMatrixPosition(at.matrixWorld),rt.setFromMatrixPosition(Rt.matrixWorld);const Yt=Q.distanceTo(rt),It=at.projectionMatrix.elements,$t=Rt.projectionMatrix.elements,we=It[14]/(It[10]-1),st=It[14]/(It[10]+1),ut=(It[9]+1)/It[5],dt=(It[9]-1)/It[5],pt=(It[8]-1)/It[0],yt=($t[8]+1)/$t[0],Vt=we*pt,Wt=we*yt,Kt=Yt/(-pt+yt),jt=Kt*-pt;if(at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(jt),tt.translateZ(Kt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const D=we+Kt,Ee=st+Kt,ce=Vt-jt,A=Wt+(Yt-jt),v=ut*st/Ee*D,H=dt*st/Ee*D;tt.projectionMatrix.makePerspective(ce,A,v,H,D,Ee),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Ht(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let at=tt.near,Rt=tt.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),q.near=F.near=P.near=at,q.far=F.far=P.far=Rt,(U!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),U=q.near,W=q.far),q.layers.mask=tt.layers.mask|6,P.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const Yt=tt.parent,It=q.cameras;Ht(q,Yt);for(let $t=0;$t<It.length;$t++)Ht(It[$t],Yt);It.length===2?nt(q,P,F):q.projectionMatrix.copy(P.projectionMatrix),T===null&&tt.isPerspectiveCamera&&(T={camera:tt,fov:tt.fov,zoom:tt.zoom}),zt(tt,q,Yt)};function zt(tt,at,Rt){Rt===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(Rt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=il*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(tt){return p[tt]};let ge=null;function ee(tt,at){if(u=at.getViewerPose(c||a),g=at,u!==null){const Rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Yt=!1;Rt.length!==q.cameras.length&&(q.cameras.length=0,Yt=!0);for(let st=0;st<Rt.length;st++){const ut=Rt[st];let dt=null;if(d!==null)dt=d.getViewport(ut);else{const yt=f.getViewSubImage(h,ut);dt=yt.viewport,st===0&&(t.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(M))}let pt=G[st];pt===void 0&&(pt=new bn,pt.layers.enable(st),pt.viewport=new De,G[st]=pt),pt.matrix.fromArray(ut.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ut.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(dt.x,dt.y,dt.width,dt.height),st===0&&(q.matrix.copy(pt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Yt===!0&&q.cameras.push(pt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const st=f.getDepthInformation(Rt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(It&&It.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let st=0;st<Rt.length;st++){const ut=Rt[st].camera;if(ut){let dt=p[ut];dt||(dt=new su,p[ut]=dt);const pt=f.getCameraImage(ut);dt.sourceTexture=pt}}}}for(let Rt=0;Rt<b.length;Rt++){const Yt=w[Rt],It=b[Rt];Yt!==null&&It!==void 0&&It.update(Yt,at,c||a)}ge&&ge(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const ae=new mu;ae.setAnimationLoop(ee),this.setAnimationLoop=function(tt){ge=tt},this.dispose=function(){}}}const D_=new xe,yu=new ne;yu.set(-1,0,0,0,1,0,0,0,1);function N_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,M=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const w=b.program;n.uniformBlockBinding(M,w)}function c(M,b){let w=s[M.id];w===void 0&&(m(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",y));const C=b.program;n.updateUBOMapping(M,C);const x=t.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){const b=f();M.__bindingPointIndex=b;const w=i.createBuffer(),C=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=s[M.id],w=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=w.length;x<T;x++){const P=w[x];if(Array.isArray(P))for(let F=0,G=P.length;F<G;F++)d(P[F],x,F,C);else d(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,b,w,C){if(S(M,b,w,C)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let F=0;F<T.length;F++){const G=T[F],q=p(G);g(G,M.__data,P),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function S(M,b,w,C){const x=M.value,T=b+"_"+w;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){const b=M.uniforms;let w=0;const C=16;for(let T=0,P=b.length;T<P;T++){const F=Array.isArray(b[T])?b[T]:[b[T]];for(let G=0,q=F.length;G<q;G++){const U=F[G],W=Array.isArray(U.value)?U.value:[U.value];for(let J=0,Z=W.length;J<Z;J++){const ht=W[J],Q=p(ht),rt=w%C,nt=rt%Q.boundary,Ht=rt+nt;w+=nt,Ht!==0&&C-Ht<Q.storage&&(w+=C-Ht),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=Q.storage}}}const x=w%C;return x>0&&(w+=C-x),M.__size=w,M.__cache={},this}function p(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",M),b}function y(M){const b=M.target;b.removeEventListener("dispose",y);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}const F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function O_(){return Dn===null&&(Dn=new nu(F_,16,16,Ci,zn),Dn.name="DFG_LUT",Dn.minFilter=Xe,Dn.magFilter=Xe,Dn.wrapS=$n,Dn.wrapT=$n,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class B_{constructor(t={}){const{canvas:e=_d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=d,m=new Set([_l,gl,ml]),p=new Set([un,Bn,Gs,Hs,dl,fl]),y=new Uint32Array(4),E=new Int32Array(4),M=new I;let b=null,w=null;const C=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let F=!1,G=null,q=null,U=null,W=null;this._outputColorSpace=cn;let J=0,Z=0,ht=null,Q=-1,rt=null;const nt=new De,Ht=new De;let zt=null;const ge=new qt(0);let ee=0,ae=e.width,tt=e.height,at=1,Rt=null,Yt=null;const It=new De(0,0,ae,tt),$t=new De(0,0,ae,tt);let we=!1;const st=new Sl;let ut=!1,dt=!1;const pt=new xe,yt=new I,Vt=new De,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function jt(){return ht===null?at:1}let D=n;function Ee(_,L){return e.getContext(_,L)}let ce,A,v,H,Y,j,mt,xt,$,K,wt,Gt,At,Et,Ot,Xt,Zt,O,bt,it,Tt,Lt,ct;try{const _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",tn,!1),D===null){const L="webgl2";if(D=Ee(L,_),D===null)throw Ee(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(_){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",tn,!1),ye("WebGLRenderer: "+_.message),_}function kt(){ce=new Om(D),ce.init(),Tt=new R_(D,ce),A=new Am(D,ce,t,Tt),v=new T_(D,ce),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),q=D.createFramebuffer(),U=D.createFramebuffer(),W=D.createFramebuffer(),H=new km(D),Y=new d_,j=new A_(D,ce,v,Y,A,Tt,H),mt=new Fm(P),xt=new Hf(D),Lt=new bm(D,xt),$=new Bm(D,xt,H,Lt),K=new Hm(D,$,xt,Lt,H),O=new Gm(D,A,j),Ot=new Rm(Y),wt=new u_(P,mt,ce,A,Lt,Ot),Gt=new N_(P,Y),At=new p_,Et=new M_(ce),Zt=new Em(P,mt,v,K,g,l),Xt=new b_(P,K,A),ct=new U_(D,H,A,v),bt=new Tm(D,ce,H),it=new zm(D,ce,H),H.programs=wt.programs,P.capabilities=A,P.extensions=ce,P.properties=Y,P.renderLists=At,P.shadowMap=Xt,P.state=v,P.info=H}S!==un&&(T=new Wm(S,e.width,e.height,o,s,r));const Nt=new I_(P,D);this.xr=Nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const _=ce.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=ce.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(_){_!==void 0&&(at=_,this.setSize(ae,tt,!1))},this.getSize=function(_){return _.set(ae,tt)},this.setSize=function(_,L,k=!0){if(Nt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=_,tt=L,e.width=Math.floor(_*at),e.height=Math.floor(L*at),k===!0&&(e.style.width=_+"px",e.style.height=L+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(ae*at,tt*at).floor()},this.setDrawingBufferSize=function(_,L,k){ae=_,tt=L,at=k,e.width=Math.floor(_*k),e.height=Math.floor(L*k),this.setViewport(0,0,_,L)},this.setEffects=function(_){if(S===un){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let L=0;L<_.length;L++)if(_[L].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(nt)},this.getViewport=function(_){return _.copy(It)},this.setViewport=function(_,L,k,N){_.isVector4?It.set(_.x,_.y,_.z,_.w):It.set(_,L,k,N),v.viewport(nt.copy(It).multiplyScalar(at).round())},this.getScissor=function(_){return _.copy($t)},this.setScissor=function(_,L,k,N){_.isVector4?$t.set(_.x,_.y,_.z,_.w):$t.set(_,L,k,N),v.scissor(Ht.copy($t).multiplyScalar(at).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(_){v.setScissorTest(we=_)},this.setOpaqueSort=function(_){Rt=_},this.setTransparentSort=function(_){Yt=_},this.getClearColor=function(_){return _.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,k=!0){let N=0;if(_){let z=!1;if(ht!==null){const ft=ht.texture.format;z=m.has(ft)}if(z){const ft=ht.texture.type,_t=p.has(ft),Mt=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Bt=Mt.r,ie=Mt.g,X=Mt.b;_t?(y[0]=Bt,y[1]=ie,y[2]=X,y[3]=Dt,D.clearBufferuiv(D.COLOR,0,y)):(E[0]=Bt,E[1]=ie,E[2]=X,E[3]=Dt,D.clearBufferiv(D.COLOR,0,E))}else N|=D.COLOR_BUFFER_BIT}L&&(N|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),G=_},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",tn,!1),Zt.dispose(),At.dispose(),Et.dispose(),Y.dispose(),mt.dispose(),K.dispose(),Lt.dispose(),ct.dispose(),wt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",ps),Nt.removeEventListener("sessionend",ms),Pn.stop()};function Me(_){_.preventDefault(),Yl("WebGLRenderer: Context Lost."),F=!0}function _e(){Yl("WebGLRenderer: Context Restored."),F=!1;const _=H.autoReset,L=Xt.enabled,k=Xt.autoUpdate,N=Xt.needsUpdate,z=Xt.type;kt(),H.autoReset=_,Xt.enabled=L,Xt.autoUpdate=k,Xt.needsUpdate=N,Xt.type=z}function tn(_){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function en(_){const L=_.target;L.removeEventListener("dispose",en),ui(L)}function ui(_){Ui(_),Y.remove(_)}function Ui(_){const L=Y.get(_).programs;L!==void 0&&(L.forEach(function(k){wt.releaseProgram(k)}),_.isShaderMaterial&&wt.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,k,N,z,ft){L===null&&(L=Wt);const _t=z.isMesh&&z.matrixWorld.determinantAffine()<0,Mt=Ut(_,L,k,N,z);v.setMaterial(N,_t);let Dt=k.index,Bt=1;if(N.wireframe===!0){if(Dt=$.getWireframeAttribute(k),Dt===void 0)return;Bt=2}const ie=k.drawRange,X=k.attributes.position;let Ct=ie.start*Bt,pe=(ie.start+ie.count)*Bt;ft!==null&&(Ct=Math.max(Ct,ft.start*Bt),pe=Math.min(pe,(ft.start+ft.count)*Bt)),Dt!==null?(Ct=Math.max(Ct,0),pe=Math.min(pe,Dt.count)):X!=null&&(Ct=Math.max(Ct,0),pe=Math.min(pe,X.count));const me=pe-Ct;if(me<0||me===1/0)return;Lt.setup(z,N,Mt,k,Dt);let re,oe=bt;if(Dt!==null&&(re=xt.get(Dt),oe=it,oe.setIndex(re)),z.isMesh)N.wireframe===!0?(v.setLineWidth(N.wireframeLinewidth*jt()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(z.isLine){let Le=N.linewidth;Le===void 0&&(Le=1),v.setLineWidth(Le*jt()),z.isLineSegments?oe.setMode(D.LINES):z.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else z.isPoints?oe.setMode(D.POINTS):z.isSprite&&oe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Ft=z._multiDrawCounts,Ge=z._multiDrawCount,he=Dt?xt.get(Dt).bytesPerElement:1,He=Y.get(N).currentProgram.getUniforms();for(let Ye=0;Ye<Ge;Ye++)He.setValue(D,"_gl_DrawID",Ye),oe.render(Le[Ye]/he,Ft[Ye])}else if(z.isInstancedMesh)oe.renderInstances(Ct,me,z.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ft=Math.min(k.instanceCount,Le);oe.renderInstances(Ct,me,Ft)}else oe.render(Ct,me)};function di(_,L,k,N){G!==null&&_.isNodeMaterial&&G.setObject(N,_),ut===!0&&Ot.setState(_,k,!1),_.transparent===!0&&_.side===hn&&_.forceSinglePass===!1?(_.side=rn,_.needsUpdate=!0,R(_,L,N),_.side=Ai,_.needsUpdate=!0,R(_,L,N),_.side=hn):R(_,L,N)}this.compile=function(_,L,k=null){k===null&&(k=_),G!==null&&G.renderStart(_,L,k),w=Et.get(k),w.init(L),x.push(w),k.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),_!==k&&_.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),dt=this.localClippingEnabled,ut=Ot.init(this.clippingPlanes,dt),ut===!0&&Ot.setGlobalState(this.clippingPlanes,L),G!==null&&Xt.render(w.state.shadowsArray,k,L);const N=new Set;return _.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){const Mt=ft[_t];di(Mt,k,L,z),N.add(Mt)}else di(ft,k,L,z),N.add(ft)}),w=x.pop(),G!==null&&G.renderEnd(),N},this.compileAsync=function(_,L,k=null){const N=this.compile(_,L,k);return new Promise(z=>{function ft(){if(N.forEach(function(_t){const Dt=Y.get(_t).currentProgram;(Dt===void 0||Dt.isReady())&&N.delete(_t)}),N.size===0){z(_);return}setTimeout(ft,10)}ce.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Fi=null;function pn(_){Fi&&Fi(_)}function ps(){Pn.stop()}function ms(){Pn.start()}const Pn=new mu;Pn.setAnimationLoop(pn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(_){Fi=_,Nt.setAnimationLoop(_),_===null?Pn.stop():Pn.start()},Nt.addEventListener("sessionstart",ps),Nt.addEventListener("sessionend",ms),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(_,L);const k=Nt.enabled===!0&&Nt.isPresenting===!0,N=T!==null&&(ht===null||k)&&T.begin(P,ht);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(L),L=Nt.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,L,ht),w=Et.get(_,x.length),w.init(L),w.state.textureUnits=j.getTextureUnits(),x.push(w),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),st.setFromProjectionMatrix(pt,Fn,L.reversedDepth),dt=this.localClippingEnabled,ut=Ot.init(this.clippingPlanes,dt),b=At.get(_,C.length),b.init(),C.push(b),Nt.enabled===!0&&Nt.isPresenting===!0){const _t=P.xr.getDepthSensingMesh();_t!==null&&Oi(_t,L,-1/0,P.sortObjects)}Oi(_,L,0,P.sortObjects),b.finish(),G!==null&&G.updateLights(w.state.lightsArray),P.sortObjects===!0&&b.sort(Rt,Yt),Kt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Kt&&Zt.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Ot.beginShadows();const z=w.state.shadowsArray;if(Xt.render(z,_,L),ut===!0&&Ot.endShadows(),(N&&T.hasRenderPass())===!1){const _t=b.opaque,Mt=b.transmissive;if(w.setupLights(),L.isArrayCamera){const Dt=L.cameras;if(Mt.length>0)for(let Bt=0,ie=Dt.length;Bt<ie;Bt++){const X=Dt[Bt];_s(_t,Mt,_,X)}Kt&&Zt.render(_);for(let Bt=0,ie=Dt.length;Bt<ie;Bt++){const X=Dt[Bt];gs(b,_,X,X.viewport)}}else Mt.length>0&&_s(_t,Mt,_,L),Kt&&Zt.render(_),gs(b,_,L)}ht!==null&&Z===0&&(j.updateMultisampleRenderTarget(ht),j.updateRenderTargetMipmap(ht)),N&&T.end(P),_.isScene===!0&&_.onAfterRender(P,_,L),Lt.resetDefaultState(),Q=-1,rt=null,x.pop(),x.length>0?(w=x[x.length-1],j.setTextureUnits(w.state.textureUnits),ut===!0&&Ot.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,G!==null&&G.renderEnd()};function Oi(_,L,k,N){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(st)){N&&Vt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(pt);const _t=K.update(_),Mt=_.material;Mt.visible&&b.push(_,_t,Mt,k,Vt.z,null,L)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(st))){const _t=K.update(_),Mt=_.material;if(N&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Vt.copy(_.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Vt.copy(_t.boundingSphere.center)),Vt.applyMatrix4(_.matrixWorld).applyMatrix4(pt)),Array.isArray(Mt)){const Dt=_t.groups;for(let Bt=0,ie=Dt.length;Bt<ie;Bt++){const X=Dt[Bt],Ct=Mt[X.materialIndex];Ct&&Ct.visible&&b.push(_,_t,Ct,k,Vt.z,X,L)}}else Mt.visible&&b.push(_,_t,Mt,k,Vt.z,null,L)}}const ft=_.children;for(let _t=0,Mt=ft.length;_t<Mt;_t++)Oi(ft[_t],L,k,N)}function gs(_,L,k,N){const{opaque:z,transmissive:ft,transparent:_t}=_;w.setupLightsView(k),ut===!0&&Ot.setGlobalState(P.clippingPlanes,k),N&&v.viewport(nt.copy(N)),z.length>0&&fi(z,L,k),ft.length>0&&fi(ft,L,k),_t.length>0&&fi(_t,L,k),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _s(_,L,k,N){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[N.id]===void 0){const Ct=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[N.id]=new Cn(1,1,{generateMipmaps:!0,type:Ct?zn:un,minFilter:wi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}const ft=w.state.transmissionRenderTarget[N.id],_t=N.viewport||nt;ft.setSize(_t.z*P.transmissionResolutionScale,_t.w*P.transmissionResolutionScale);const Mt=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Bt=P.getActiveMipmapLevel();P.setRenderTarget(ft),P.getClearColor(ge),ee=P.getClearAlpha(),ee<1&&P.setClearColor(16777215,.5),P.clear(),Kt&&Zt.render(k);const ie=P.toneMapping;P.toneMapping=On;const X=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),w.setupLightsView(N),ut===!0&&Ot.setGlobalState(P.clippingPlanes,N),fi(_,k,N),j.updateMultisampleRenderTarget(ft),j.updateRenderTargetMipmap(ft),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let pe=0,me=L.length;pe<me;pe++){const re=L[pe],{object:oe,geometry:Le,material:Ft,group:Ge}=re;if(Ft.side===hn&&oe.layers.test(N.layers)){const he=Ft.side;Ft.side=rn,Ft.needsUpdate=!0,Bi(oe,k,N,Le,Ft,Ge),Ft.side=he,Ft.needsUpdate=!0,Ct=!0}}Ct===!0&&(j.updateMultisampleRenderTarget(ft),j.updateRenderTargetMipmap(ft))}P.setRenderTarget(Mt,Dt,Bt),P.setClearColor(ge,ee),X!==void 0&&(N.viewport=X),P.toneMapping=ie}function fi(_,L,k){const N=L.isScene===!0?L.overrideMaterial:null;for(let z=0,ft=_.length;z<ft;z++){const _t=_[z],{object:Mt,geometry:Dt,group:Bt}=_t;let ie=_t.material;ie.allowOverride===!0&&N!==null&&(ie=N),Mt.layers.test(k.layers)&&Bi(Mt,L,k,Dt,ie,Bt)}}function Bi(_,L,k,N,z,ft){G!==null&&z.isNodeMaterial&&G.setObject(_,z),_.onBeforeRender(P,L,k,N,z,ft),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),z.onBeforeRender(P,L,k,N,_,ft),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,P.renderBufferDirect(k,L,N,z,_,ft),z.side=Ai,z.needsUpdate=!0,P.renderBufferDirect(k,L,N,z,_,ft),z.side=hn):P.renderBufferDirect(k,L,N,z,_,ft),_.onAfterRender(P,L,k,N,z,ft)}function R(_,L,k){L.isScene!==!0&&(L=Wt);const N=Y.get(_),z=w.state.lights,ft=w.state.shadowsArray,_t=z.state.version,Mt=wt.getParameters(_,z.state,ft,L,k,w.state.lightProbeGridArray),Dt=wt.getProgramCacheKey(Mt);let Bt=N.programs;N.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,N.fog=L.fog;const ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;N.envMap=mt.get(_.envMap||N.environment,ie),N.envMapRotation=N.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Bt===void 0&&(_.addEventListener("dispose",en),Bt=new Map,N.programs=Bt);let X=Bt.get(Dt);if(X!==void 0){if(N.currentProgram===X&&N.lightsStateVersion===_t)return V(_,Mt),X}else Mt.uniforms=wt.getUniforms(_),G!==null&&_.isNodeMaterial&&G.build(_,k,Mt),_.onBeforeCompile(Mt,P),X=wt.acquireProgram(Mt,Dt),Bt.set(Dt,X),N.uniforms=Mt.uniforms;const Ct=N.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ct.clippingPlanes=Ot.uniform),V(_,Mt),N.needsLights=te(_),N.lightsStateVersion=_t,N.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.sunLights.value=z.state.sun,Ct.sunLightShadows.value=z.state.sunShadow,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.sunShadowMatrix.value=z.state.sunShadowMatrix,Ct.sunShadowCascade.value=z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),N.lightProbeGrid=w.state.lightProbeGridArray.length>0,N.currentProgram=X,N.uniformsList=null,X}function B(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=qr.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function V(_,L){const k=Y.get(_);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function ot(_,L){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let k=0,N=_.length;k<N;k++){const z=_[k];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function Ut(_,L,k,N,z){L.isScene!==!0&&(L=Wt),j.resetTextureUnits();const ft=L.fog,_t=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?L.environment:null,Mt=ht===null?P.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ve.workingColorSpace,Dt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Bt=mt.get(N.envMap||_t,Dt),ie=N.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,X=!!k.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ct=!!k.morphAttributes.position,pe=!!k.morphAttributes.normal,me=!!k.morphAttributes.color;let re=On;N.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(re=P.toneMapping);const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Le=oe!==void 0?oe.length:0,Ft=Y.get(N),Ge=w.state.lights;if(ut===!0&&(dt===!0||_!==rt)){const Ae=_===rt&&N.id===Q;Ot.setState(N,_,Ae)}let he=!1;N.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ge.state.version||Ft.outputColorSpace!==Mt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Bt||N.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ot.numPlanes||Ft.numIntersection!==Ot.numIntersection)||Ft.vertexAlphas!==ie||Ft.vertexTangents!==X||Ft.morphTargets!==Ct||Ft.morphNormals!==pe||Ft.morphColors!==me||Ft.toneMapping!==re||Ft.morphTargetsCount!==Le||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Ft.__version=N.version);let He=Ft.currentProgram;he===!0&&(He=R(N,L,z),G&&N.isNodeMaterial&&G.onUpdateProgram(N,He,Ft));let Ye=!1,xn=!1,Te=!1;const ue=He.getUniforms(),Ce=Ft.uniforms;if(v.useProgram(He.program)&&(Ye=!0,xn=!0,Te=!0),N.id!==Q&&(Q=N.id,xn=!0),Ft.needsLights){const Ae=ot(w.state.lightProbeGridArray,z);Ft.lightProbeGrid!==Ae&&(Ft.lightProbeGrid=Ae,xn=!0)}if(Ye||rt!==_){v.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ue.setValue(D,"projectionMatrix",_.projectionMatrix),ue.setValue(D,"viewMatrix",_.matrixWorldInverse);const Mn=ue.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,yt.setFromMatrixPosition(_.matrixWorld)),A.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ue.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),rt!==_&&(rt=_,xn=!0,Te=!0)}if(Ft.needsLights&&(Ge.state.sunShadowMap.length>0&&ue.setValue(D,"sunShadowMap",Ge.state.sunShadowMap,j),Ge.state.directionalShadowMap.length>0&&ue.setValue(D,"directionalShadowMap",Ge.state.directionalShadowMap,j),Ge.state.spotShadowMap.length>0&&ue.setValue(D,"spotShadowMap",Ge.state.spotShadowMap,j),Ge.state.pointShadowMap.length>0&&ue.setValue(D,"pointShadowMap",Ge.state.pointShadowMap,j)),z.isSkinnedMesh){ue.setOptional(D,z,"bindMatrix"),ue.setOptional(D,z,"bindMatrixInverse");const Ae=z.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ue.setValue(D,"boneTexture",Ae.boneTexture,j))}z.isBatchedMesh&&(ue.setOptional(D,z,"batchingTexture"),ue.setValue(D,"batchingTexture",z._matricesTexture,j),ue.setOptional(D,z,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",z._indirectTexture,j),ue.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",z._colorsTexture,j));const Ln=k.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&O.update(z,k,He),(xn||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,ue.setValue(D,"receiveShadow",z.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&L.environment!==null&&(Ce.envMapIntensity.value=L.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=O_()),xn){if(ue.setValue(D,"toneMappingExposure",P.toneMappingExposure),Ft.needsLights&&vt(Ce,Te),ft&&N.fog===!0&&Gt.refreshFogUniforms(Ce,ft),Gt.refreshMaterialUniforms(Ce,N,at,tt,w.state.transmissionRenderTarget[_.id]),Ft.needsLights&&Ft.lightProbeGrid){const Ae=Ft.lightProbeGrid;Ce.probesSH.value=Ae.texture,Ce.probesMin.value.copy(Ae.boundingBox.min),Ce.probesMax.value.copy(Ae.boundingBox.max),Ce.probesResolution.value.copy(Ae.resolution)}qr.upload(D,B(Ft),Ce,j)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(qr.upload(D,B(Ft),Ce,j),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ue.setValue(D,"center",z.center),ue.setValue(D,"modelViewMatrix",z.modelViewMatrix),ue.setValue(D,"normalMatrix",z.normalMatrix),ue.setValue(D,"modelMatrix",z.matrixWorld),N.uniformsGroups!==void 0){const Ae=N.uniformsGroups;for(let Mn=0,Je=Ae.length;Mn<Je;Mn++){const pi=Ae[Mn];ct.update(pi,He),ct.bind(pi,He)}}return He}function vt(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.sunLights.needsUpdate=L,_.sunLightShadows.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function te(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(_,L,k){const N=Y.get(_);N.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Y.get(_.texture).__webglTexture=L,Y.get(_.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:k,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){const k=Y.get(_);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,k=0){ht=_,J=L,Z=k;let N=null,z=!1,ft=!1;if(_){const Mt=Y.get(_);if(Mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,Mt.__webglFramebuffer),nt.copy(_.viewport),Ht.copy(_.scissor),zt=_.scissorTest,v.viewport(nt),v.scissor(Ht),v.setScissorTest(zt),Q=-1;return}else if(Mt.__webglFramebuffer===void 0)j.setupRenderTarget(_);else if(Mt.__hasExternalTextures)j.rebindTextures(_,Y.get(_.texture).__webglTexture,Y.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ie=_.depthTexture;if(Mt.__boundDepthTexture!==ie){if(ie!==null&&Y.has(ie)&&(_.width!==ie.image.width||_.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(_)}}const Dt=_.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ft=!0);const Bt=Y.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Bt[L])?N=Bt[L][k]:N=Bt[L],z=!0):_.samples>0&&j.useMultisampledRTT(_)===!1?N=Y.get(_).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[k]:N=Bt,nt.copy(_.viewport),Ht.copy(_.scissor),zt=_.scissorTest}else nt.copy(It).multiplyScalar(at).floor(),Ht.copy($t).multiplyScalar(at).floor(),zt=we;if(k!==0&&(N=q),v.bindFramebuffer(D.FRAMEBUFFER,N)&&v.drawBuffers(_,N),v.viewport(nt),v.scissor(Ht),v.setScissorTest(zt),z){const Mt=Y.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,Mt.__webglTexture,k)}else if(ft){const Mt=L;for(let Dt=0;Dt<_.textures.length;Dt++){const Bt=Y.get(_.textures[Dt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Dt,Bt.__webglTexture,k,Mt)}}else if(_!==null&&k!==0){const Mt=Y.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,k)}Q=-1};function se(_){const L=Y.get(_);return(L.__readFormat!==_.format||L.__readType!==_.type)&&(L.__readFormat=_.format,L.__readType=_.type,L.__formatReadable=A.textureFormatReadable(_.format),L.__typeReadable=A.textureTypeReadable(_.type)),L}this.readRenderTargetPixels=function(_,L,k,N,z,ft,_t,Mt=0){if(!(_&&_.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Y.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(Dt=Dt[_t]),Dt){v.bindFramebuffer(D.FRAMEBUFFER,Dt);try{const Bt=_.textures[Mt],ie=Bt.format,X=Bt.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);const Ct=se(Bt);if(Ct.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-N&&k>=0&&k<=_.height-z&&D.readPixels(L,k,N,z,Tt.convert(ie),Tt.convert(X),ft)}finally{const Bt=ht!==null?Y.get(ht).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(_,L,k,N,z,ft,_t,Mt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Y.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(Dt=Dt[_t]),Dt)if(L>=0&&L<=_.width-N&&k>=0&&k<=_.height-z){v.bindFramebuffer(D.FRAMEBUFFER,Dt);const Bt=_.textures[Mt],ie=Bt.format,X=Bt.type;_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);const Ct=se(Bt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(L,k,N,z,Tt.convert(ie),Tt.convert(X),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const me=ht!==null?Y.get(ht).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,me);const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vd(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pe),D.deleteSync(re),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,k=0){const N=Math.pow(2,-k),z=Math.floor(_.image.width*N),ft=Math.floor(_.image.height*N),_t=L!==null?L.x:0,Mt=L!==null?L.y:0;j.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,_t,Mt,z,ft),v.unbindTexture()},this.copyTextureToTexture=function(_,L,k=null,N=null,z=0,ft=0){let _t,Mt,Dt,Bt,ie,X,Ct,pe,me;const re=_.isCompressedTexture?_.mipmaps[ft]:_.image;if(k!==null)_t=k.max.x-k.min.x,Mt=k.max.y-k.min.y,Dt=k.isBox3?k.max.z-k.min.z:1,Bt=k.min.x,ie=k.min.y,X=k.isBox3?k.min.z:0;else{const Ce=Math.pow(2,-z);_t=Math.floor(re.width*Ce),Mt=Math.floor(re.height*Ce),_.isDataArrayTexture?Dt=re.depth:_.isData3DTexture?Dt=Math.floor(re.depth*Ce):Dt=1,Bt=0,ie=0,X=0}N!==null?(Ct=N.x,pe=N.y,me=N.z):(Ct=0,pe=0,me=0);const oe=Tt.convert(L.format),Le=Tt.convert(L.type);let Ft;L.isData3DTexture?(j.setTexture3D(L,0),Ft=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(j.setTexture2DArray(L,0),Ft=D.TEXTURE_2D_ARRAY):(j.setTexture2D(L,0),Ft=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Ge=v.getParameter(D.UNPACK_ROW_LENGTH),he=v.getParameter(D.UNPACK_IMAGE_HEIGHT),He=v.getParameter(D.UNPACK_SKIP_PIXELS),Ye=v.getParameter(D.UNPACK_SKIP_ROWS),xn=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),v.pixelStorei(D.UNPACK_SKIP_ROWS,ie),v.pixelStorei(D.UNPACK_SKIP_IMAGES,X);const Te=_.isDataArrayTexture||_.isData3DTexture,ue=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){const Ce=Y.get(_),Ln=Y.get(L),Ae=Y.get(Ce.__renderTarget),Mn=Y.get(Ln.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,Ae.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Je=0;Je<Dt;Je++)Te&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(_).__webglTexture,z,X+Je),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(L).__webglTexture,ft,me+Je)),D.blitFramebuffer(Bt,ie,_t,Mt,Ct,pe,_t,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||_.isRenderTargetTexture||Y.has(_)){const Ce=Y.get(_),Ln=Y.get(L);v.bindFramebuffer(D.READ_FRAMEBUFFER,U),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let Ae=0;Ae<Dt;Ae++)Te?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,z,X+Ae):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,z),ue?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,ft,me+Ae):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,ft),z!==0?D.blitFramebuffer(Bt,ie,_t,Mt,Ct,pe,_t,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):ue?D.copyTexSubImage3D(Ft,ft,Ct,pe,me+Ae,Bt,ie,_t,Mt):D.copyTexSubImage2D(Ft,ft,Ct,pe,Bt,ie,_t,Mt);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ue?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(Ft,ft,Ct,pe,me,_t,Mt,Dt,oe,Le,re.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,ft,Ct,pe,me,_t,Mt,Dt,oe,re.data):D.texSubImage3D(Ft,ft,Ct,pe,me,_t,Mt,Dt,oe,Le,re):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,Ct,pe,_t,Mt,oe,Le,re.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,Ct,pe,re.width,re.height,oe,re.data):D.texSubImage2D(D.TEXTURE_2D,ft,Ct,pe,_t,Mt,oe,Le,re);v.pixelStorei(D.UNPACK_ROW_LENGTH,Ge),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),v.pixelStorei(D.UNPACK_SKIP_PIXELS,He),v.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),v.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),ft===0&&L.generateMipmaps&&D.generateMipmap(Ft),v.unbindTexture()},this.initRenderTarget=function(_){Y.get(_).__webglFramebuffer===void 0&&j.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?j.setTextureCube(_,0):_.isData3DTexture?j.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?j.setTexture2DArray(_,0):j.setTexture2D(_,0),v.unbindTexture()},this.resetState=function(){J=0,Z=0,ht=null,v.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}function wu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ke;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=qc(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let S=0;S<a[u].length;++S)d.push(a[u][S][h]);const g=qc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function qc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new je(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const S=u.getComponent(h,g);o.setComponent(h+f,g,S)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const z_={stone:"#8a8378",stoneDark:"#615b54",rock:"#75706a",earth:"#5b4a36",grass:"#6b8a3e",baseRim:"#2b2620",wood:"#8a5f38",woodDark:"#5a3b22",cloth:"#e3d3ae",clothDark:"#b8a47c",dark:"#3a3430",metal:"#9a968f",leather:"#6b4a2e",tunic:"#7a3b2e",hero:"#3f6fa8",skin:"#e0b890",ghost:"#c9cdf0",eye:"#ff4d5e",void:"#140622",riftStone:"#6a6275",copper:"#d97e3a",mule:"#8a7560",hoof:"#2e2620",claw:"#1a1826",brick:"#8c4a3c",bronze:"#a5683a",ivory:"#efe4cc",violet:"#5b4b8f",leaf:"#b8562a",petal:"#e9a3c0",snow:"#eef2f6",frost:"#b9c2c8"},k_={glow:2,eye:2.4,copper:.7,mana:.95,void:.9,ghost:.45},ss={day:{emissive:.28,hemi:["#fff1dc","#6b5b47",.9],key:["#ffe2b8",1.45],back:["#c9d8ff",.3],rim:[.1,"#ffffff"]},dusk:{emissive:.6,hemi:["#ffd2b0","#2a2030",.55],key:["#ffab66",1.05],back:["#8fa0ff",.45],rim:[.25,"#ffc9a0"]},night:{emissive:1,hemi:["#a0aee6","#2a2a48",1.35],key:["#d8deff",2.1],back:["#b0c2ff",.9],rim:[.9,"#c8d4ff"]}},G_=new qt,H_=new qt;function As(i,t,e,n){return n.copy(G_.set(i)).lerp(H_.set(t),e)}function Eu(i,t){const e=t??{emissive:0,hemiSky:new qt,hemiGround:new qt,hemiIntensity:0,keyColor:new qt,keyIntensity:0,backColor:new qt,backIntensity:0,rimStrength:0,rimColor:new qt},n=Math.min(1,Math.max(0,i)),[s,r,a]=n<.5?[ss.day,ss.dusk,n*2]:[ss.dusk,ss.night,(n-.5)*2],o=(l,c)=>l+(c-l)*a;return e.emissive=o(s.emissive,r.emissive),As(s.hemi[0],r.hemi[0],a,e.hemiSky),As(s.hemi[1],r.hemi[1],a,e.hemiGround),e.hemiIntensity=o(s.hemi[2],r.hemi[2]),As(s.key[0],r.key[0],a,e.keyColor),e.keyIntensity=o(s.key[1],r.key[1]),As(s.back[0],r.back[0],a,e.backColor),e.backIntensity=o(s.back[1],r.back[1]),e.rimStrength=o(s.rim[0],r.rim[0]),As(s.rim[1],r.rim[1],a,e.rimColor),e}const hi={uRim:{value:ss.day.rim[0]},uRimColor:{value:new qt(ss.day.rim[1])},uToCam:{value:new I(0,1,0)},uWet:{value:0}},V_={"#000000":"#34303c","#0000FF":"#3a5cff","#00FF00":"#39e35a","#FFFF00":"#f2e23a","#FF0000":"#f0303a"},wr=i=>V_[i.toUpperCase()]??i;function W_(i,t){const e=new qt(i),n=(e.r+e.g+e.b)/3;return e.r+=(n-e.r)*t,e.g+=(n-e.g)*t,e.b+=(n-e.b)*t,e}const Yc=new Map;function X_(i,t){const e=i+(t??""),n=Yc.get(e);if(n)return n;const s=t??z_[i],r=W_(s,i==="mana"||i==="glow"?.05:.14),a=k_[i]??0,o=a?i==="void"?new qt("#3a0a66"):i==="ghost"?new qt("#6a70d0"):r.clone():new qt(0,0,0);o.multiplyScalar(a);const l={color:r,emit:o};return Yc.set(e,l),l}const q_="minis-emit-rim-wet";function Y_(i){i.uniforms.uRim=hi.uRim,i.uniforms.uRimColor=hi.uRimColor,i.uniforms.uToCam=hi.uToCam,i.uniforms.uWet=hi.uWet,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aEmit;
varying vec3 vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vEmit = aEmit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vEmit;
uniform float uRim;
uniform vec3 uRimColor;
uniform vec3 uToCam;`).replace("#include <emissivemap_fragment>",`float rimF = pow(1.0 - clamp(dot(normalize(normal), uToCam), 0.0, 1.0), 2.5);
totalEmissiveRadiance = vEmit * emissive + uRimColor * (uRim * rimF);`)}function cl(i,t){const e=new Df({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,emissive:16777215,emissiveIntensity:t,transparent:i==="ghost",opacity:i==="ghost"?.9:1,side:hn});return e.onBeforeCompile=Y_,e.customProgramCacheKey=()=>q_,e.userData.base=e.emissiveIntensity,e}let li=0;const Fe=Eu(0),Er={wet:0,overcast:0,fog:0};let $c=.5;const Kc=.85,$_=.42,na={opaque:cl("opaque",Fe.emissive),ghost:cl("ghost",Fe.emissive)},bu=new Set,Zc=i=>na[i];function K_(i){const t=cl(i,Fe.emissive);return bu.add(t),t.roughness=na.opaque.roughness,t}const Jc=()=>li>.5,Z_=()=>li,J_=()=>Fe,Xa=new qt,Q_=new qt("#dde1e6"),j_=new qt("#cdd3da"),tv=new qt("#c9ced4");function Qc(i,t,e){li=Math.min(1,Math.max(0,i)),t&&Object.assign(Er,t),e!==void 0&&($c=e),Eu(li,Fe);const n=Math.min(1,Math.max(0,Er.overcast)),s=Math.min(1,Math.max(0,Er.fog));if(n>0&&(Fe.keyIntensity*=1-.5*n,Fe.hemiIntensity*=1+.9*n,Fe.keyColor.lerp(Xa.copy(Q_).multiplyScalar(1-.55*li),.6*n),Fe.hemiSky.lerp(Xa.copy(j_).multiplyScalar(1-.5*li),.5*n),Fe.rimStrength*=1-.45*n),s>0){const a=Xa.copy(tv).multiplyScalar(1-.6*li);Fe.keyColor.lerp(a,.5*s),Fe.hemiSky.lerp(a,.5*s),Fe.hemiGround.lerp(a,.35*s),Fe.rimStrength*=1-.5*s,Fe.emissive*=1-.2*s}Fe.rimStrength*=1+.6*$c*(1-n)*li;const r=Math.min(1,Math.max(0,Er.wet));for(const a of[na.opaque,na.ghost,...bu])a.emissiveIntensity=Fe.emissive,a.userData.base=Fe.emissive,a.roughness=Kc+($_-Kc)*r;hi.uRim.value=Fe.rimStrength,hi.uRimColor.value.copy(Fe.rimColor),hi.uWet.value=r}const lt=Math.PI*2;let Yn="summer";const Rs=()=>Yn;function ev(i){Yn=i}const nv={spring:"#79ad48",summer:"#6b8a3e",fall:"#a9853c",winter:"#8d8a72"},jc=["#b8562a","#c98a2e","#a33d22","#d4a03a"],iv={spring:"#56583a",summer:"#5b4a36",fall:"#7a4e2c",winter:"#8e8c84"},th=["#e9a3c0","#f2e26a","#f7f2ea","#c99be0"],Ni=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},br=new xe,ji=new kn,Tr=new _n,qa=new I,Ya=new I,sv=new I(0,1,0);function eh(i,t,e){const n=i.index?i.toNonIndexed():i.clone();i!==n&&i.dispose(),n.deleteAttribute("uv");const s=n.attributes.position.count,{color:r,emit:a}=X_(t,e),o=new Float32Array(s*3),l=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=r.r,o[c*3+1]=r.g,o[c*3+2]=r.b,l[c*3]=a.r,l[c*3+1]=a.g,l[c*3+2]=a.b;return n.setAttribute("color",new je(o,3)),n.setAttribute("aEmit",new je(l,3)),n}class Rl{constructor(t,e){Jt(this,"part");Jt(this,"matrix");this.part=t??this,this.matrix=e}add(t,e,n,s=0,r=0,a=0,o=0,l=0,c=0,u=1,f=1,h=1){const d=eh(t,e,n);Tr.set(o,l,c),ji.setFromEuler(Tr),br.compose(qa.set(s,r,a),ji,Ya.set(u,f,h)),d.applyMatrix4(br),d.applyMatrix4(this.matrix),this.part.buckets[e==="ghost"?"ghost":"opaque"].push(d)}beam(t,e,n,s,r=5){const a=new I(...t),o=new I(...e),l=a.distanceTo(o),c=eh(new St(n,n,l,r),s);ji.setFromUnitVectors(sv,o.clone().sub(a).normalize()),br.compose(qa.copy(a).lerp(o,.5),ji,Ya.set(1,1,1)),c.applyMatrix4(br),c.applyMatrix4(this.matrix),this.part.buckets.opaque.push(c)}crystal(t,e,n,s,r,a,o,l,c){const u=this.at(r,a,o,l,0,c);u.add(new St(n,n*.82,s,6),t,e,0,s/2,0),u.add(new Pe(n,n*1.8,6),t,e,0,s+n*.9,0)}at(t,e,n,s=0,r=0,a=0){Tr.set(s,r,a),ji.setFromEuler(Tr);const o=new xe().compose(qa.set(t,e,n),ji,Ya.set(1,1,1));return new Rl(this.part,this.matrix.clone().multiply(o))}}class nh extends Rl{constructor(e,n={}){super(null,new xe);Jt(this,"group",new ns);Jt(this,"buckets",{opaque:[],ghost:[]});Jt(this,"baked",{opaque:[],ghost:[]});Jt(this,"detail");Jt(this,"uniqueGeometry");Jt(this,"uniqueMaterial");Jt(this,"parent");Jt(this,"name");this.name=e,this.group.name=e,this.parent=n.parent??null,this.detail=n.detail??!1,this.uniqueGeometry=n.uniqueGeometry??!1,this.uniqueMaterial=n.uniqueMaterial??!1,n.pos&&this.group.position.set(...n.pos),n.rot&&this.group.rotation.set(...n.rot),n.scale&&this.group.scale.set(...n.scale),this.parent&&this.parent.group.add(this.group)}}class rv{constructor(){Jt(this,"root",new nh("root"));Jt(this,"parts",[this.root]);Jt(this,"lights",[])}part(t,e={}){const n=new nh(t,{parent:e.parent??this.root,...e});return this.parts.push(n),n}light(t,e,n,s,r=1){this.lights.push({color:t,pos:[e,n,s],strength:r})}base(t,e=1,n=1){const s=this.root,r=Ni(t),a=nv[Yn],o=Yn==="winter";s.add(new St(1.02,1.1,.16,40),"baseRim",void 0,0,.08,0,0,0,0,e,1,n),s.add(new St(1,1,.03,40),"earth",iv[Yn],0,.175,0,0,0,0,e,1,n);const l=[];for(let h=0;h<5;h++){const d=r()*lt,g=.55+r()*.35,S=.045+r()*.06,m=Math.cos(d)*g*e,p=Math.sin(d)*g*n;l.push([m,p,S]),s.add(new jn(S,0),o?"frost":"rock",void 0,m,.2,p,r()*3,r()*3,0)}const c=[],u=Yn==="summer"?9:7;for(let h=0;h<u;h++){const d=r()*lt,g=.5+r()*.42,S=Math.cos(d)*g*e,m=Math.sin(d)*g*n;c.push([S,m]);const p=o?.55:Yn==="summer"?1.15:1;for(let y=0;y<3;y++)s.add(new Pe(.022,(.12+r()*.08)*p,4),"grass",a,S+(r()-.5)*.06,.25,m+(r()-.5)*.06,(r()-.5)*.6,0,(r()-.5)*.6)}if(Yn==="fall")for(let h=0;h<9;h++){const d=r()*lt,g=.15+r()*.75;s.add(new be(.11,0),"leaf",jc[h%jc.length],Math.cos(d)*g*e,.195,Math.sin(d)*g*n,0,r()*lt,0,1,.1,.6)}else if(Yn==="spring")for(let h=0;h<6&&h<c.length;h++){const[d,g]=c[h];s.add(new St(.006,.006,.12,3),"grass",a,d+.02,.31,g,.1,0,-.1),s.add(new Oe(.05,0),"petal",th[h%th.length],d+.03,.38,g-.01,r()*3,r()*3,0)}const f=this.part("snow",{pos:[0,.19,0]});f.add(new St(.99,.99,.09,40),"snow",void 0,0,.045,0,0,0,0,e,1,n);for(const[h,d,g]of l)f.add(new Oe(g*1.15,0),"snow",void 0,h,.03+g*.5,d,0,0,0,1,.55,1);f.group.visible=!1}compile(){const t={root:this.root.group,partNames:[],detailNames:[],bakedNames:[],uniqueGeometry:[],uniqueMaterial:[],lights:this.lights,tris:0};this.root.group.updateMatrixWorld(!0);const e=new xe;for(const n of this.parts){if(!n.detail)continue;let s=n.parent;for(;s&&s.detail;)s=s.parent;if(s){e.copy(s.group.matrixWorld).invert().multiply(n.group.matrixWorld);for(const r of["opaque","ghost"])for(const a of n.buckets[r])s.baked[r].push(a.clone().applyMatrix4(e))}}for(const n of this.parts){n!==this.root&&t.partNames.push(n.name),n.detail&&t.detailNames.push(n.name),n.uniqueGeometry&&t.uniqueGeometry.push(n.name),n.uniqueMaterial&&t.uniqueMaterial.push(n.name);for(const s of["opaque","ghost"]){const r=ih(n.buckets[s]);if(r){const o=new dn(r,Zc(s));o.name=`${n.name}#${s}`,n.group.add(o),t.tris+=r.attributes.position.count/3}const a=ih(n.baked[s]);if(a){const o=new dn(a,Zc(s));o.name=`${n.name}#baked-${s}`,o.visible=!1,n.group.add(o),t.bakedNames.push(o.name)}}}return t}}function ih(i){if(i.length===0)return null;const t=i.length===1?i[0]:wu(i,!1);if(i.length>1)for(const e of i)e.dispose();return t}function $a(i){const t=i.root.clone(!0),e={},n={};t.traverse(o=>{o.isMesh?n[o.name]=o:o!==t&&o.name&&(e[o.name]=o)});const s=[],r=[];for(const o of i.uniqueGeometry)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.geometry=c.geometry.clone(),c.geometry.userData.orig=c.geometry.attributes.position.array.slice(),s.push(c.geometry))}for(const o of i.uniqueMaterial)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.material=K_(l),r.push(c.material))}const a={root:t,parts:e,meshes:n,lod:"near",setLod(o){if(o===a.lod)return;a.lod=o;const l=o==="near";for(const c of i.detailNames)e[c].visible=l;for(const c of i.bakedNames)n[c].visible=!l},dispose(){for(const o of s)o.dispose();for(const o of r)o.dispose()}};return a}const hs=(i,t,e=0,n=lt)=>new El(i.map(([s,r])=>new gt(s,r)),t,e,n);function ts(i,t,e,n=8,s="stone"){const r=Math.PI/n;i.add(new St(t,t*1.06,e,n),s,void 0,0,e/2,0,0,r),i.add(new St(t*1.09,t*1.09,.045,n),"stoneDark",void 0,0,e*.5,0,0,r),i.add(new et(.16,.24,.05),"dark",void 0,0,.12,t*1.03)}function Ar(i,t,e,n=8){const s=Math.PI/n;i.add(new St(t*1.14,t*1.02,.08,n),"stoneDark",void 0,0,e+.04,0,0,s);for(let r=0;r<n;r++){const a=r/n*lt+s;i.add(new et(.07,.11,.12),"stone",void 0,Math.cos(a)*t*1.06,e+.135,Math.sin(a)*t*1.06,0,-a)}}function av(i,t,e,n,s=8,r="dark"){i.add(new Pe(t,n,s),r,void 0,0,e+n/2,0,0,Math.PI/s),i.add(new be(.035,0),"metal",void 0,0,e+n+.02,0)}function ln(i,t,e,n,s,r=0,a="wood"){i.add(new et(t,t,t),a,void 0,e,n+t/2,s,0,r),i.add(new et(t*1.02,t*.12,t*1.02),"woodDark",void 0,e,n+t/2,s,0,r)}function Yr(i,t,e,n,s,r,a=!1){const o=a?Math.PI/2:0,l=a?s+t:s+e/2;i.add(new St(t,t,e,9),"woodDark",void 0,n,l,r,o);for(const c of[-.3,.3]){const u=new de(t*1.02,t*.1,3,12);i.add(u,"metal",void 0,n+0,l+(a?0:c*e),r+(a?c*e:0),a?0:Math.PI/2,0,0)}}function Cl(i,t,e,n,s,r,a=1,o){const l=i.part(t,{pos:[n,s,r],detail:!0});return l.add(new Pe(.11*a,.34*a,6),"glow",e,0,.17*a,0),l.add(new Pe(.06*a,.2*a,5),"glow","#fff4d6",0,.1*a,.01,0,.4),l.add(new vn(.035*a,0),"glow",e,.06*a,.36*a,0,.3,.2),l.add(new vn(.03*a,0),"glow",e,-.05*a,.42*a,.02,.8,1.1),l}function ia(i,t,e,n,s,r=1){const a=i.part(t,{pos:[e,n,s],detail:!0});a.group.userData.y0=n;for(let o=0;o<3;o++){const l=(.05+o*.022)*r;a.add(new Oe(l,0),"clothDark",void 0,(o%2?.03:-.03)*r,(.06+o*.14)*r,0,o,o*2)}return a}function Pl(i,t,e=1){i.position.y=i.userData.y0+t*.16*e;const n=.8+t*.45;i.scale.set(n,n,n)}function Ll(i,t,e=1){const n=t*lt;i.scale.set(1+.1*e*Math.sin(n*3),1+.16*e*Math.sin(n*2+1),1+.1*e*Math.cos(n*4)),i.rotation.y=Math.sin(n*2)*.2}function yi(i,t,e,n,s,r,a=.7,o){const l=i.root;l.add(new St(.014,.018,a,5),"wood",void 0,n,s+a/2,r),l.add(new be(.025,0),"metal",void 0,n,s+a+.01,r);const c=i.part(t,{pos:[n,s+a-.04,r],detail:!0}),u=new ti;return u.moveTo(0,0),u.lineTo(-.28,-.06),u.lineTo(0,-.17),c.add(new Di(u),"glow",e),c}let Tu=.25;function ov(i){Tu=Math.min(1,Math.max(0,i))}function Il(i,t){const e=.45+1.4*Tu;i.rotation.y=Math.sin(t*lt*2)*.3*e,i.rotation.x=Math.sin(t*lt*3+1)*.1*e}const Ka=.1,lv=1,cv=1.1,hv=.7,uv=.25,dv=.08,fv=.15,sh=1.06,pv=.42,mv=6,gv=9,rh=3.6,_v=25,vv=.004,Cs=Math.PI/180;function xv(){const i=new ke;return i.setAttribute("position",new Se([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5],3)),i.setAttribute("uv",new Se([0,0,1,0,0,1,1,1],2)),i.setIndex([0,2,1,2,3,1]),i}const ah=`
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
}`,Mv=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.0, 1.0, r);
  a *= a;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <colorspace_fragment>
}`,Sv=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.5, 1.0, r);
  gl_FragColor = vec4(0.0, 0.0, 0.0, a * vCol.r);
}`,Mi=new xe,Rr=new I,Za=new I,Ps=new kn,Cr=new _n,Pr=new qt,yv=new I;class wv{constructor(t,e){Jt(this,"hemi",new Ff);Jt(this,"key",new Sc);Jt(this,"back",new Sc);Jt(this,"quad",xv());Jt(this,"poolMat");Jt(this,"shadowMat");Jt(this,"pools");Jt(this,"shadows");Jt(this,"poolN",0);Jt(this,"shadowN",0);Jt(this,"sky",{darkness:0,sunAltDeg:45,sunAzDeg:180,moon:.5});Jt(this,"weather",{wet:0,rain:0,snow:0,snowing:0,overcast:0,fog:0,wind:0});Jt(this,"pitch",45);Jt(this,"bearing",0);Jt(this,"poolGain",Ka);Jt(this,"shDx",0);Jt(this,"shDz",1);Jt(this,"shLen",1);Jt(this,"shK",0);Jt(this,"colorCache",new Map);Jt(this,"world");this.world=t,e.add(this.hemi,this.key,this.back),this.poolMat=new fn({uniforms:{uTime:{value:0},uFlicker:{value:dv}},vertexShader:ah,fragmentShader:Mv,transparent:!0,depthWrite:!1,blending:zs,side:hn,forceSinglePass:!0}),this.shadowMat=new fn({uniforms:{uTime:{value:0},uFlicker:{value:0}},vertexShader:ah,fragmentShader:Sv,transparent:!0,depthWrite:!1,side:hn,forceSinglePass:!0}),this.shadows=this.make(this.shadowMat,512,1),this.pools=this.make(this.poolMat,256,2),this.apply()}make(t,e,n){const s=new ta(this.quad,t,e);return s.instanceColor=new Ws(new Float32Array(e*3),3),s.instanceMatrix.setUsage(Ti),s.instanceColor.setUsage(Ti),s.frustumCulled=!1,s.renderOrder=n,s.count=0,this.world.add(s),s}grow(t,e,n,s){if(e<=t.instanceMatrix.count)return t;this.world.remove(t),t.dispose();let r=t.instanceMatrix.count;for(;r<e;)r*=2;return this.make(n,r,s)}setSky(t){Object.assign(this.sky,t),Qc(this.sky.darkness,this.weather,this.sky.moon),this.apply()}getSky(){return{...this.sky}}setWeather(t){Object.assign(this.weather,t),Qc(this.sky.darkness,this.weather,this.sky.moon),this.apply()}getWeather(){return{...this.weather}}setCamera(t,e){t===this.pitch&&e===this.bearing||(this.pitch=t,this.bearing=e,this.apply())}apply(){const t=J_(),{darkness:e,sunAltDeg:n,sunAzDeg:s,moon:r}=this.sky,a=this.pitch*Cs,o=this.bearing*Cs,l=hi.uToCam.value.set(-Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a)).normalize();this.hemi.color.copy(t.hemiSky),this.hemi.groundColor.copy(t.hemiGround),this.hemi.intensity=t.hemiIntensity;const c=Math.max(_v,n)*Cs,u=s*Cs,f=yv.set(Math.sin(u)*Math.cos(c),Math.sin(c),-Math.cos(u)*Math.cos(c)),h=Rr.set(l.x*.9+.3,.95,l.z*.9+.1).normalize();this.key.position.copy(f).lerp(h,e).normalize(),this.key.color.copy(t.keyColor);const d=.82+.36*r;this.key.intensity=t.keyIntensity*(1+(d-1)*e),this.back.position.set(Math.sin(o)*Math.sin(a)-l.x*.2,.55,-Math.cos(o)*Math.sin(a)-l.z*.2).normalize(),this.back.color.copy(t.backColor),this.back.intensity=t.backIntensity;const{wet:g,overcast:S,fog:m}=this.weather;this.poolGain=(Ka+(lv-Ka)*e)*(1+.3*g),this.shDx=-Math.sin(u),this.shDz=Math.cos(u);const p=Math.max(gv,n)*Cs,y=Math.min(1,S*.85+m*.6);this.shLen=Math.min(rh,1/Math.tan(p))*(1-.4*y),this.shK=pv*Math.min(1,Math.max(0,n/mv))*(1-.9*y)}begin(t,e,n){this.poolMat.uniforms.uTime.value=t/1e3%3600,this.poolN=0,this.shadowN=0,this.pools=this.grow(this.pools,e,this.poolMat,2),this.shadows=this.grow(this.shadows,n,this.shadowMat,1)}colorOf(t){let e=this.colorCache.get(t);return e||(e=new qt(t),this.colorCache.set(t,e)),e}pool(t,e,n,s,r,a,o){const l=this.pools;if(this.poolN>=l.instanceMatrix.count)return;const c=this.poolGain*a;Pr.copy(this.colorOf(r)).multiplyScalar(c),Mi.compose(Rr.set(t,e,n),Ps.identity(),Za.set(s*2,1,s*2)),Mi.elements[3]=o%64,l.setMatrixAt(this.poolN,Mi),l.setColorAt(this.poolN,Pr),this.poolN++}poolFor(t,e,n,s,r,a,o,l){this.pool(t,e,n,s*(cv+hv*Math.min(1.6,a)+uv*o),r,Math.min(1.2,a),l)}shadow(t,e,n,s,r,a,o=1){const l=this.shadows,c=vv*Math.max(n,s);if(this.shadowN<l.instanceMatrix.count&&(Cr.set(0,r,0),Ps.setFromEuler(Cr),Mi.compose(Rr.set(t,c,e),Ps,Za.set(n*2*sh*o,1,s*2*sh*o)),l.setMatrixAt(this.shadowN,Mi),l.setColorAt(this.shadowN,Pr.setScalar(fv)),this.shadowN++),this.shK>.01&&a>0&&this.shadowN<l.instanceMatrix.count){const u=Math.max(n,s),f=Math.max(u,Math.min(rh*u,a*u*this.shLen)),h=Math.atan2(-this.shDz,this.shDx),d=(f-u)/2;Cr.set(0,h,0),Ps.setFromEuler(Cr),Mi.compose(Rr.set(t+this.shDx*d,c*1.5,e+this.shDz*d),Ps,Za.set(f+u,1,Math.min(n,s)*1.9)),l.setMatrixAt(this.shadowN,Mi),l.setColorAt(this.shadowN,Pr.setScalar(this.shK)),this.shadowN++}}end(){this.pools.count=this.poolN,this.poolN&&(this.pools.instanceMatrix.needsUpdate=!0,this.pools.instanceColor.needsUpdate=!0),this.shadows.count=this.shadowN,this.shadowN&&(this.shadows.instanceMatrix.needsUpdate=!0,this.shadows.instanceColor.needsUpdate=!0)}stats(){return{weather:this.getWeather(),pools:this.poolN,shadows:this.shadowN,darkness:+this.sky.darkness.toFixed(3),sunAltDeg:+this.sky.sunAltDeg.toFixed(1),sunAzDeg:+this.sky.sunAzDeg.toFixed(1),moon:+this.sky.moon.toFixed(2),poolGain:+this.poolGain.toFixed(3),sunShadow:+this.shK.toFixed(3),shadowLen:+this.shLen.toFixed(2)}}dispose(){this.world.remove(this.pools,this.shadows),this.pools.dispose(),this.shadows.dispose(),this.poolMat.dispose(),this.shadowMat.dispose(),this.quad.dispose()}}const Ev={dust:620,burst:820,ring:720,implode:640,wisps:900},bv={dust:11,burst:14,ring:1,implode:12,wisps:10},Ja="#b9a27c",Tv=40,Av=48,Si=512,Lr=2.399963;function gn(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}const Ir=i=>1-(1-i)*(1-i),Rv=i=>i*i*(3-2*i),Cv=`
varying vec3 vCol;
varying float vA;
void main() {
  mat4 M = instanceMatrix;
  vA = M[0][3];
  M[0][3] = 0.0;
  vCol = instanceColor;
  gl_Position = projectionMatrix * modelViewMatrix * M * vec4(position, 1.0);
}`,Pv=`
varying vec3 vCol;
varying float vA;
void main() {
  gl_FragColor = vec4(vCol, vA);
  #include <colorspace_fragment>
}`,Qa=new xe,Lv=new I,Iv=new I,oh=new kn,lh=new _n;class Dv{constructor(t){Jt(this,"effects",[]);Jt(this,"dust");Jt(this,"motes");Jt(this,"rings");Jt(this,"mats",[]);Jt(this,"geos",[]);Jt(this,"world");Jt(this,"colorCache",new Map);Jt(this,"log",[]);Jt(this,"particles",0);Jt(this,"dustN",0);Jt(this,"moteN",0);Jt(this,"ringN",0);this.world=t;const e=new vn(1,0),n=new bl(.82,1,24);n.rotateX(-Math.PI/2),this.geos.push(e,n),this.dust=this.make(e,bi,3),this.motes=this.make(e,zs,4),this.rings=this.make(n,bi,3)}make(t,e,n){const s=new fn({vertexShader:Cv,fragmentShader:Pv,transparent:!0,depthWrite:!1,blending:e,side:hn,forceSinglePass:!0});this.mats.push(s);const r=new ta(t,s,Si);return r.instanceColor=new Ws(new Float32Array(Si*3),3),r.instanceMatrix.setUsage(Ti),r.instanceColor.setUsage(Ti),r.frustumCulled=!1,r.renderOrder=n,r.count=0,r.visible=!1,r.name=`fx-${e===zs?"motes":t===this.geos[1]?"rings":"dust"}`,this.world.add(r),r}colorOf(t){let e=this.colorCache.get(t);return e||(e=new qt(t),this.colorCache.set(t,e)),e}spawn(t,e,n,s,r,a,o,l=1){this.effects.length>=Av&&this.effects.shift();const c=this.effects.length*7919+(o|0)&65535;this.effects.push({kind:t,x:e,y:n,z:s,s:r*l,color:this.colorOf(a),t0:o,dur:Ev[t],n:bv[t],seed:c}),this.log.push(`${t}@${Math.round(o)}`),this.log.length>Tv&&this.log.shift()}landing(t,e,n,s){this.spawn("dust",t,.02*n,e,n,Ja,s),this.spawn("ring",t,.012*n,e,n,Ja,s,.9)}puff(t,e,n,s){this.spawn("dust",t,.02*n,e,n,Ja,s,.8)}burst(t,e,n,s,r,a){this.spawn("burst",t,e,n,s,r,a)}pulse(t,e,n,s,r){this.spawn("ring",t,.014*n,e,n,s,r,1.4),this.spawn("burst",t,1.1*n,e,n,s,r,.8)}wisps(t,e,n,s,r,a){this.spawn("wisps",t,e,n,s,r,a)}implode(t,e,n,s,r,a){this.spawn("implode",t,e,n,s,r,a),this.spawn("ring",t,.014*s,n,s,r,a,.7)}active(){return this.effects.length>0}push(t,e,n,s,r,a,o,l,c,u,f){lh.set(c,c*1.7,0),oh.setFromEuler(lh),Qa.compose(Lv.set(n,s,r),oh,Iv.set(a,o,l)),Qa.elements[3]=f,t.setMatrixAt(e,Qa),t.setColorAt(e,u)}tick(t){this.dustN=0,this.moteN=0,this.ringN=0;for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e],s=(t-n.t0)/n.dur;if(s>=1){this.effects.splice(e,1);continue}if(s<0)continue;const{x:r,y:a,z:o,s:l,color:c,n:u,seed:f}=n;switch(n.kind){case"dust":{for(let h=0;h<u&&this.dustN<Si;h++){const d=h*Lr+gn(f,h)*.9,g=(.55+.35*gn(f,h+50))*(.5+1.1*Ir(s))*l,S=(.05+.13*(1-s)*(.6+.6*gn(f,h+90)))*l,m=.22*l*Math.sin(Math.PI*Math.min(1,s*1.3))*(.5+gn(f,h+30));this.push(this.dust,this.dustN++,r+Math.cos(d)*g,a+m+S*.5,o+Math.sin(d)*g,S,S,S,s*3+h,c,.85*(1-s*s))}break}case"burst":{for(let h=0;h<u&&this.moteN<Si;h++){const d=h*Lr+gn(f,h)*1.2,g=(.15+.55*gn(f,h+40))*Ir(s)*l,S=(.25+.9*gn(f,h+80))*Ir(s)*l,m=(.03+.09*(1-s))*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*g,a+S,o+Math.sin(d)*g,m,m,m,s*4+h,c,1-s*s)}break}case"wisps":{for(let h=0;h<u&&this.moteN<Si;h++){const d=h*Lr+gn(f,h)*1.5+s*1.2,g=(.2+.5*gn(f,h+40))*(.3+.7*s)*l,S=(.1+1.3*s)*l+Math.sin(s*9+h)*.05*l,m=(.03+.07*Math.sin(Math.PI*s))*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*g,a+S,o+Math.sin(d)*g,m,m,m,s*2+h,c,.9*(1-s))}break}case"implode":{for(let h=0;h<u&&this.moteN<Si;h++){const d=h*Lr+gn(f,h)*1.2,g=(1.2+.8*gn(f,h+40))*(1-Rv(s))*l,S=(gn(f,h+80)-.3)*.8*l*(1-s),m=(.03+.08*s)*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*g,a+S,o+Math.sin(d)*g,m,m,m,s*5+h,c,.4+.6*s)}break}case"ring":{if(this.ringN<Si){const h=(.7+1.4*Ir(s))*l;this.push(this.rings,this.ringN++,r,a,o,h,1,h,0,c,.8*(1-s)*(1-s))}break}}}this.flush(this.dust,this.dustN),this.flush(this.motes,this.moteN),this.flush(this.rings,this.ringN),this.particles=this.dustN+this.moteN+this.ringN}flush(t,e){t.count=e,t.visible=e>0,e&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0)}stats(){return{effects:this.effects.length,particles:this.particles,log:[...this.log]}}clearLog(){this.log.length=0}dispose(){this.world.remove(this.dust,this.motes,this.rings),this.dust.dispose(),this.motes.dispose(),this.rings.dispose();for(const t of this.mats)t.dispose();for(const t of this.geos)t.dispose();this.effects.length=0}}const Nv=.1,Uv=1.7,ch=i=>Math.min(Uv,1+Nv*Math.max(0,(i??1)-1)),Fv={front:"z",build(i){i.base(11);const t=i.root.at(0,.185,0);t.add(new St(.78,.82,.12,8),"stone",void 0,0,.06,0,0,Math.PI/8),t.add(new St(.6,.64,.12,8),"stone",void 0,0,.18,0,0,Math.PI/8),t.add(new St(.44,.48,.1,8),"stoneDark",void 0,0,.29,0,0,Math.PI/8);for(let o=0;o<4;o++){const l=Math.PI/4+o*Math.PI/2,c=Math.cos(l)*.7,u=Math.sin(l)*.7;t.add(new St(.055,.085,.5,4),"stoneDark",void 0,c,.37,u,0,l),t.add(new Pe(.058,.12,4),"stoneDark",void 0,c,.68,u,0,l),t.add(new be(.035,0),"glow","#ffb56b",c*.9,.42,u*.9)}const e=i.part("heart",{pos:[0,1.205,0]});i.part("core",{parent:e}).add(new Oe(.28,1),"copper",void 0,0,0,0,0,0,0,1,1.55,1),i.part("ringA",{parent:e,rot:[1.2,0,.3],detail:!0}).add(new de(.48,.018,3,28),"glow","#ffc98a"),i.part("ringB",{parent:e,rot:[1.9,0,-.5],detail:!0}).add(new de(.4,.014,3,24),"glow","#ffc98a");const a=i.part("orbit",{parent:e,detail:!0});for(let o=0;o<5;o++){const l=o/5*lt;a.add(new vn(.06,0),"glow","#ffb56b",Math.cos(l)*.66,Math.sin(l*2)*.12,Math.sin(l)*.66,l,l)}i.light("#ffae5a",0,1.2,0,1.3)},animate({parts:i},t,e){i.core.rotation.y=t*lt,i.heart.position.y=1.205+Math.sin(t*lt)*.05;const n=ch(e);i.heart.scale.set(n,n,n),i.ringA.rotation.z=t*lt,i.ringB.rotation.z=-t*lt,i.orbit.rotation.y=t*lt/5},pulse({parts:i},t,e){const n=ch(e)*(1+.5*Math.sin(Math.PI*t));i.heart.scale.set(n,n,n),i.heart.position.y=1.205+.18*Math.sin(Math.PI*t)}},Dr=.55,hh=1.12,Ov=.999,uh=i=>i>=Ov,ja=i=>Math.min(1,Math.max(0,i??1)),Bv={front:"z",build(i,t){i.base(23);const e=i.root.at(0,.185,0);[[.42,0,.1,0],[.28,-.36,.06,.2],[.24,.32,.05,-.22],[.18,.1,.04,.4]].forEach(([h,d,g,S],m)=>e.add(new jn(h,0),"rock",void 0,d,g,S,m,m*2,0,1,.55,1));const s=i.part("crystals",{pos:[0,.185,0],uniqueMaterial:!0}),r=Ni(5);s.crystal("mana",t,.17,.62,0,.12,0,.06,-.05),[[-.22,.1,.12,.4,.1,.5],[.2,.08,-.08,.34,-.2,-.45],[.08,.1,.22,.28,.5,-.15],[-.12,.08,-.2,.26,-.4,.3],[.28,.05,.16,.2,.3,-.7],[-.32,.05,-.05,.18,0,.8]].forEach(([h,d,g,S,m,p])=>s.crystal("mana",t,.06+r()*.05,S,h,d,g,m,p));const o=i.part("sparkle",{pos:[0,.185+.95,0]});for(let h=0;h<6;h++){const d=h/6*lt;o.add(new vn(.045,0),"glow",t,Math.cos(d)*.3,h%2*.12,Math.sin(d)*.3,d,d)}o.group.visible=!1;const l=[0,1.75,0];for(let h=0;h<3;h++){const d=h/3*lt+.5;e.beam([Math.cos(d)*.72,.02,Math.sin(d)*.72],l,.03,"wood")}for(let h=0;h<3;h++){const d=h/3*lt+.5,g=(h+1)/3*lt+.5;e.beam([Math.cos(d)*.5,.55,Math.sin(d)*.5],[Math.cos(g)*.5,.55,Math.sin(g)*.5],.018,"woodDark")}i.part("pulley",{pos:[0,.185+1.66,0],rot:[Math.PI/2,0,0],detail:!0}).add(new St(.09,.09,.05,10),"metal"),i.part("rope",{pos:[.09,.185+1.4,0],detail:!0}).add(new St(.008,.008,1,4),"clothDark"),i.part("bucket",{pos:[.09,.185+1.2,0],detail:!0}).add(new St(.075,.055,.11,8),"woodDark"),e.add(new et(.035,.55,.035),"woodDark",void 0,.72,.27,.32),e.add(new be(.06,0),"glow",t,.72,.6,.32),i.light(t,0,.8,0,1.2),i.light(t,.72,.8,.32,.5)},animate({parts:i,meshes:t},e,n){const s=1.24+(Math.sin(e*lt)*.5+.5)*.22;i.bucket.position.y=.185+s,i.rope.scale.y=1.62-s,i.rope.position.y=.185+(1.62+s)/2+.03,i.pulley.rotation.y=e*lt;const r=ja(n),a=uh(r),o=Dr+(hh-Dr)*r;i.crystals.scale.set(o,o,o);const l=t["crystals#opaque"].material;l.emissiveIntensity=l.userData.base*(a?1.35+.6*Math.sin(e*lt*2):1+.35*Math.sin(e*lt));const c=i.sparkle;c.visible=a,a&&(c.rotation.y=e*lt,c.position.y=.185+.95+Math.sin(e*lt*2)*.06)},pulse({parts:i},t,e){const n=ja(e),s=(Dr+(hh-Dr)*n)*(1+.3*Math.sin(Math.PI*t));i.crystals.scale.set(s,s,s)},poolGain(i,t){if(t!==0)return 1;const e=ja(i);return(.3+.7*e)*(uh(e)?1.35:1)}},Bs=[-.25,.185,0],Nr=(i,t,e)=>[Bs[0]+i,Bs[1]+t,Bs[2]+e],zv={front:"x",build(i,t){i.base(37,1.3,.85);const e=i.root.at(...Bs);e.add(new et(1.2,.1,.66),"wood",void 0,0,.4,0);for(const S of[-.33,.33])e.add(new et(1.2,.14,.04),"woodDark",void 0,0,.5,S);const n=[];for(let S=0;S<=10;S++){const m=Math.PI*S/10;n.push([Math.cos(m)*.36,Math.sin(m)*.42])}const s=new ti;n.forEach(([S,m],p)=>p?s.lineTo(S,m):s.moveTo(S,m)),s.lineTo(-.36,0),s.lineTo(.36,0);const r=new ea;n.slice().reverse().forEach(([S,m],p)=>p?r.lineTo(S*.9,m*.9):r.moveTo(S*.9,m*.9)),s.holes.push(r);const a=new aa(s,{depth:.95,bevelEnabled:!1});a.translate(0,0,-.475),e.add(a,"cloth",void 0,-.08,.45,0,0,Math.PI/2);for(const S of[-.5,-.18,.14,.38])e.add(new de(.37,.014,3,10,Math.PI),"clothDark",void 0,S,.45,0,0,Math.PI/2);const o=new ti;n.forEach(([S,m],p)=>p?o.lineTo(S*.9,m*.9):o.moveTo(S*.9,m*.9)),e.add(new Di(o),"dark",void 0,.38,.45,0,0,Math.PI/2);const l=i.part("cargo",{pos:Nr(-.72,.45,0)});l.add(new et(.2,.2,.2),"wood",void 0,0,.1,.12,0,.3),l.add(new et(.15,.15,.15),"woodDark",void 0,0,.275,.1,0,.7),l.add(new Oe(.11,0),"mana",t,-.02,.09,-.18,.4,.2,0,1,.8,1),l.add(new Oe(.085,0),"mana",t,.05,.25,-.14,.1,.9,.2,1,.8,1),l.add(new Oe(.07,0),"mana",t,.12,.4,.02,.6,.3,.1,1,.75,1),l.group.visible=!1,e.add(new St(.09,.09,.22,10),"woodDark",void 0,-.2,.52,.41,Math.PI/2);for(const S of[-.07,.07])e.add(new de(.092,.01,3,12),"metal",void 0,-.2+S,.52,.41,0,Math.PI/2);let c=0;for(const S of[-.4,.3])for(const m of[-.4,.4]){const p=i.part(`wheel${c++}`,{pos:Nr(S,.25,m),detail:!0});p.add(new de(.2,.03,4,14),"woodDark"),p.add(new St(.045,.045,.08,8),"metal",void 0,0,0,0,Math.PI/2);for(let y=0;y<6;y++)p.add(new et(.018,.38,.018),"wood",void 0,0,0,0,0,0,y*Math.PI/6)}e.add(new et(.16,.04,.5),"woodDark",void 0,.5,.6,0);const u=e.at(.5,.62,0);u.add(new Pe(.12,.3,7),"tunic",void 0,0,.15,0),u.add(new Oe(.075,0),"skin",void 0,0,.36,0),u.add(new Pe(.095,.16,7),"tunic",void 0,0,.44,-.01);for(const S of[-.2,.2])e.beam([.6,.4,S],[1.02,.5,S*.6],.014,"woodDark");const f=i.part("mule",{pos:Nr(1.22,.2,0),detail:!0});f.add(new et(.46,.2,.2),"mule",void 0,0,.35,0);const h=i.part("head",{parent:f,pos:[.26,.45,0],detail:!0});h.add(new et(.1,.2,.12),"mule",void 0,0,.05,0,0,0,-.5),h.add(new et(.2,.1,.1),"mule",void 0,.1,.12,0,0,0,-.35);for(const S of[-.04,.04])h.add(new Pe(.025,.12,4),"mule",void 0,.02,.22,S,S*3,0,.2);f.add(new Pe(.02,.16,4),"hoof",void 0,-.25,.32,0,0,0,2.4),[[.16,.07,0],[.16,-.07,.5],[-.16,.07,.5],[-.16,-.07,0]].forEach(([S,m],p)=>{const y=i.part(`hip${p}`,{parent:f,pos:[S,.28,m],detail:!0});y.add(new et(.05,.26,.05),"mule",void 0,0,-.13,0),y.add(new et(.055,.04,.055),"hoof",void 0,0,-.27,0)}),e.add(new et(.03,.5,.03),"woodDark",void 0,.6,.75,.26),i.part("hang",{pos:Nr(.62,.98,.26),detail:!0}).add(new be(.055,0),"glow",t,0,-.09,0),i.light(t,.35,.95,.26,1)},animate({parts:i},t,e){const n=Math.min(1,Math.max(0,e??0)),s=i.cargo;if(s.visible=n>.001,s.visible){const a=.55+.45*n;s.scale.set(a,a,a)}for(let a=0;a<4;a++)i[`wheel${a}`].rotation.z=-t*lt/6;const r=[0,.5,.5,0];for(let a=0;a<4;a++)i[`hip${a}`].rotation.z=Math.sin((t+r[a])*lt)*.45;i.mule.position.y=Bs[1]+.2+Math.abs(Math.sin(t*lt*2))*.015,i.head.rotation.z=Math.sin(t*lt*2)*.06,i.hang.rotation.x=Math.sin(t*lt)*.35}},dh={front:"z",build(i){i.base(41);const t=i.part("f",{pos:[0,.33,0]});i.part("cloak",{parent:t,detail:!0,uniqueGeometry:!0}).add(hs([[.6,0],[.5,.3],[.42,.7],[.35,1.05],[.28,1.3],[.16,1.45]],11),"ghost"),t.add(hs([[.05,1.9],[.2,1.84],[.3,1.66],[.31,1.46],[.25,1.3]],11,.35,lt-.7),"ghost"),t.add(new Oe(.19,0),"void",void 0,0,1.56,.1,0,0,0,1,1,.6);for(const s of[-.07,.07])t.add(new be(.04,0),"eye",void 0,s,1.58,.23);for(const s of[-1,1]){const r=i.part(s<0?"armL":"armR",{parent:t,pos:[s*.3,1.28,.04],detail:!0});r.add(new Pe(.12,.6,6),"ghost",void 0,0,-.28,.12,Math.PI+.5,0,0);for(let a=-1;a<=1;a++)r.add(new Pe(.018,.14,4),"claw",void 0,a*.04,-.52,.34,2.2,0,a*.2)}const n=i.part("wisps",{parent:t,detail:!0});for(let s=0;s<6;s++){const r=s/6*lt;n.add(new vn(.045,0),"glow","#a9b0ff",Math.cos(r)*.72,.1+s%3*.12,Math.sin(r)*.72,r,r)}i.light("#8f96ff",0,1.2,.3,.8),i.light("#ff4d5e",0,1.9,.5,.35)},animate({parts:i,meshes:t,lod:e},n){const s=i.f;if(s.position.y=.33+Math.sin(n*lt)*.07,s.rotation.y=Math.sin(n*lt)*.12,e!=="near")return;const r=t["cloak#ghost"].geometry,a=r.attributes.position,o=r.userData.orig;for(let l=0;l<a.count;l++){const c=o[l*3],u=o[l*3+1],f=o[l*3+2],h=Math.atan2(f,c),d=Math.max(0,1-u/.6),g=1+d*(.1*Math.sin(3*h+n*lt)+.06*Math.cos(5*h-n*lt));a.setXYZ(l,c*g,u+d*.1*Math.sin(4*h-n*lt),f*g)}a.needsUpdate=!0,i.armL.rotation.x=-.15+Math.sin(n*lt)*.12,i.armR.rotation.x=-.15+Math.sin(n*lt+1)*.12,i.wisps.rotation.y=n*lt/6,i.wisps.position.y=Math.sin(n*lt*2)*.04}},kv={front:"z",build(i){i.base(53);const t=i.root.at(0,.185,0),e=Ni(9);for(const h of[2.3,2.9,3.5,4.1,4.7]){const d=.5+e()*.3,g=Math.cos(h)*.72,S=Math.sin(h)*.72;t.add(new et(.16,d,.12),"riftStone",void 0,g,d/2-.02,S,(e()-.5)*.25,-h,(e()-.5)*.25)}t.add(new St(.42,.5,.03,9),"void",void 0,0,.01,0),t.add(new de(.46,.025,3,18),"glow","#b06bff",0,.03,0,Math.PI/2);const n=i.part("tear",{pos:[0,1.185,0]}),s=[],r=18;for(let h=0;h<r;h++){const d=h/r*lt,g=h%2?.82:1.05;s.push([Math.cos(d)*.36*g,Math.sin(d)*.62*g])}const a=new ti;s.forEach(([h,d],g)=>g?a.lineTo(h,d):a.moveTo(h,d));const o=new ea;s.slice().reverse().forEach(([h,d],g)=>g?o.lineTo(h*.84,d*.84):o.moveTo(h*.84,d*.84)),a.holes.push(o);const l=new aa(a,{depth:.06,bevelEnabled:!1});l.translate(0,0,-.03),n.add(l,"glow","#9b4df0");const c=new ti;s.forEach(([h,d],g)=>g?c.lineTo(h*.86,d*.86):c.moveTo(h*.86,d*.86)),n.add(new Di(c),"void"),[[.24,1],[.17,-2],[.1,3]].forEach(([h],d)=>{const g=i.part(`swirl${d}`,{parent:n,scale:[1,1.6,1],detail:!0});i.part(`arc${d}`,{parent:g,detail:!0}).add(new de(h,.016,3,16,lt*.7),"glow","#d3a8ff",0,0,.02)});const f=i.part("debris",{pos:[0,.185,0],detail:!0});for(let h=0;h<7;h++){const d=h/7*lt;f.add(new jn(.04+h%3*.015,0),"riftStone",void 0,Math.cos(d)*.55,.25+h%4*.18,Math.sin(d)*.35,d,d)}i.light("#a24dff",0,1.2,.25,1.5)},animate({parts:i},t){const e=[1,-2,3];for(let n=0;n<3;n++)i[`arc${n}`].rotation.z=t*lt*e[n];i.debris.rotation.y=t*lt/7,i.tear.scale.set(1+Math.sin(t*lt)*.03,1+Math.cos(t*lt)*.03,1)}},Au={you:{seed:67,cloak:"hero",tunic:"tunic",ring:"#6fb3ff",gem:"#9fd0ff",head:"hood",hand:"staff",pack:!0},cleric:{seed:61,cloak:"ivory",tunic:"cloth",ring:"#ffd54a",gem:"#ffe08a",head:"circlet",hand:"mace",pack:!1},fighter:{seed:59,cloak:"tunic",tunic:"metal",ring:"#cd7f32",gem:"#ffb070",head:"helm",hand:"sword",pack:!1},wizard:{seed:57,cloak:"violet",tunic:"violet",ring:"#7b68ee",gem:"#c8b4ff",head:"hat",hand:"staff",pack:!1}};function Ru(i,t){i.base(t.seed);const e=i.root.at(0,.185,0);e.add(new de(.9,.022,3,44),"glow",t.ring,0,.02,0,Math.PI/2);for(const s of[-.08,.08])e.add(new et(.09,.1,.15),"leather",void 0,s,.05,.02);const n=i.part("body",{pos:[0,.185,0]});switch(n.add(hs([[.3,.05],[.27,.4],[.2,.8],[.14,.98]],10,.5,lt-1),t.cloak),n.add(new St(.13,.17,.55,8),t.tunic,void 0,0,.62,0),n.add(new de(.16,.022,3,10),"leather",void 0,0,.6,0,Math.PI/2),n.add(new et(.05,.05,.02),"metal",void 0,0,.6,.17),n.add(new Oe(.13,1),"skin",void 0,0,1.1,0),t.head){case"hood":n.add(hs([[.02,1.36],[.13,1.32],[.17,1.18],[.16,1.02],[.13,.96]],10,.45,lt-.9),t.cloak);break;case"circlet":n.add(new de(.12,.018,4,12),"glow",t.gem,0,1.17,0,Math.PI/2),n.add(new sn(.13,8,5,0,lt,0,1.2),"leather",void 0,0,1.11,-.01);break;case"helm":n.add(new sn(.15,8,5,0,lt,0,1.7),"bronze",void 0,0,1.1,0),n.add(new et(.04,.16,.06),"bronze",void 0,0,1.06,.13),n.add(new et(.04,.12,.3),"tunic",void 0,0,1.28,-.04);break;case"hat":n.add(new St(.26,.26,.025,10),t.cloak,void 0,0,1.19,0),n.add(new Pe(.15,.42,9),t.cloak,void 0,.02,1.4,-.02,0,0,-.18),n.add(new de(.14,.015,3,10),"glow",t.gem,0,1.22,0,Math.PI/2);break}if(t.pack?(n.add(new et(.24,.3,.13),"leather",void 0,0,.8,-.2),n.add(new St(.055,.055,.32,8),"cloth",void 0,0,1,-.2,0,0,Math.PI/2)):t.hand==="sword"?(n.add(new St(.24,.24,.03,12),"woodDark",void 0,0,.78,-.2,Math.PI/2),n.add(new sn(.06,6,4),"bronze",void 0,0,.78,-.23),n.add(new de(.23,.015,3,14),"bronze",void 0,0,.78,-.2)):t.hand==="mace"?(n.add(new et(.16,.14,.1),"leather",void 0,.16,.5,-.12,0,.4),n.add(new St(.035,.035,.3,6),"cloth",void 0,0,.9,-.19,0,0,.4)):(n.add(new et(.16,.2,.06),"leather",void 0,0,.75,-.19,0,0,.1),n.add(new et(.17,.03,.07),"glow",t.gem,0,.75,-.19,0,0,.1)),n.beam([.14,.92,0],[.27,.72,.1],.045,t.tunic==="metal"?"bronze":t.tunic),n.beam([-.14,.92,0],[-.2,.62,.06],.045,t.tunic==="metal"?"bronze":t.tunic),t.tunic==="metal"){for(const s of[-.15,.15])n.add(new sn(.08,6,4,0,lt,0,1.6),"bronze",void 0,s,.92,0);n.add(new et(.08,.06,.03),"bronze",void 0,0,.6,.17)}if(t.hand==="staff"){e.beam([.3,0,.12],[.28,1.45,.1],.022,"wood");const s=i.part("gem",{pos:[.28,.185+1.56,.1],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new be(.07,0),"glow",t.gem,0,0,0,0,0,0,1,1.6,1);for(let r=0;r<3;r++){const a=r/3*lt;e.beam([.28,1.44,.1],[.28+Math.cos(a)*.06,1.6,.1+Math.sin(a)*.06],.008,"wood")}i.light(t.gem,.28,1.75,.1,1.1)}else if(t.hand==="mace"){e.beam([.3,.55,.12],[.3,1.25,.1],.02,"woodDark");const s=i.part("gem",{pos:[.3,.185+1.3,.1],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new jn(.075,0),"glow",t.gem);for(let r=0;r<4;r++)s.add(new et(.02,.1,.05),"bronze",void 0,Math.cos(r/4*lt)*.075,0,Math.sin(r/4*lt)*.075,0,-(r/4)*lt);i.light(t.gem,.3,1.45,.1,.9)}else{e.add(new et(.05,.62,.014),"metal",void 0,.3,.52,.12),e.add(new et(.16,.03,.04),"bronze",void 0,.3,.84,.12),e.add(new St(.02,.02,.16,6),"leather",void 0,.3,.94,.12);const s=i.part("gem",{pos:[.3,.185+1.04,.12],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new be(.035,0),"glow",t.gem),i.light(t.gem,.3,1.1,.12,.5)}}const Cu=({parts:i},t)=>{i.body.scale.y=1+Math.sin(t*lt)*.012,i.gem.position.y=i.gem.userData.y0+Math.sin(t*lt)*.02,i.gem.rotation.y=t*lt},Gv={front:"z",build(i){Ru(i,Au.you)},animate:Cu};function to(i){return{front:"z",build(t){Ru(t,Au[i])},animate:Cu}}const Pu=["bare","forge","greater-forge","scriptorium","confluence","workshop","storehouse","factory"],Ur="#ff8a3a",eo="#cfe6ff",Ie=.185;function no(i,t){i.add(new de(t,t*.16,4,10),"metal");for(let e=0;e<4;e++)i.add(new et(t*.12,t*2,t*.12),"metal",void 0,0,0,0,0,0,e*Math.PI/4);for(let e=0;e<8;e++){const n=e/8*lt;i.add(new et(t*.22,t*.22,t*.24),"metal",void 0,Math.cos(n)*t*1.12,Math.sin(n)*t*1.12,0,0,0,n)}}function Hv(i){return{front:"z",build(t,e){const n=101+Pu.indexOf(i)*7;t.base(n);const s=t.root.at(0,Ie,0);switch(i){case"bare":{ts(s,.4,.95,8,"stoneDark");for(const[r,a]of[[.55,.55],[-.55,.55],[.55,-.55],[-.55,-.55]])s.add(new St(.02,.025,1.25,5),"wood",void 0,r,.62,a);for(const r of[.55,1.1])s.beam([.55,r,.55],[-.55,r,.55],.014,"woodDark"),s.beam([.55,r,-.55],[-.55,r,-.55],.014,"woodDark"),s.beam([.55,r,.55],[.55,r,-.55],.014,"woodDark"),s.beam([-.55,r,.55],[-.55,r,-.55],.014,"woodDark");s.add(new et(.9,.03,.14),"wood",void 0,0,1.12,.5,0,0,.04),s.add(new et(.5,.03,.12),"wood",void 0,.2,.25,.75,0,.4),yi(t,"flag",e,.42,Ie+.95,-.1,.55);break}case"forge":case"greater-forge":{const r=i==="greater-forge",a=r?1.35:1.05;if(ts(s,.4,a),Ar(s,.4,a),r)for(const l of[.3,.72])s.add(new de(.42,.025,4,16),"copper",void 0,0,l,0,Math.PI/2);s.add(new et(.11,.17,.03),"glow",Ur,0,.13,.42),s.add(new et(.08,.1,.03),"glow",Ur,.12,a*.68,.4,0,.25),(r?[[.16,-.12],[-.2,.06]]:[[.12,-.1]]).forEach(([l,c],u)=>{s.add(new et(.2,.42,.2),"stoneDark",void 0,l,a+.2,c),s.add(new et(.24,.06,.24),"dark",void 0,l,a+.42,c),Cl(t,`fire${u}`,Ur,l,Ie+a+.42,c,r?.8:.65),ia(t,`smoke${u}`,l,Ie+a+.6,c,r?1.1:.9)}),s.add(new St(.08,.1,.16,7),"woodDark",void 0,.5,.08,.5),s.add(new et(.2,.06,.08),"metal",void 0,.5,.19,.5,0,.5),yi(t,"flag",e,-.34,Ie+a+.08,.2,.5),t.light(Ur,0,a+.5,0,r?1.2:.9);break}case"scriptorium":{ts(s,.4,1.05),av(s,.5,1.05,.6,8,"dark"),s.add(new de(.44,.02,3,16),"woodDark",void 0,0,1.06,0,Math.PI/2),s.add(new et(.14,.18,.03),"glow",eo,0,.72,.41),s.add(new et(.03,.2,.03),"dark",void 0,0,.72,.42),s.add(new et(.16,.03,.03),"dark",void 0,0,.72,.42),s.add(new et(.1,.12,.03),"glow",e,.28,.5,.29,0,.75);const r=t.part("pages",{pos:[0,Ie+1.75,0],detail:!0});for(let a=0;a<4;a++){const o=a/4*lt;r.add(new et(.1,.13,.008),"glow",eo,Math.cos(o)*.3,a%2*.1-.05,Math.sin(o)*.3,.3,-o,.2)}s.add(new et(.05,.3,.05),"woodDark",void 0,.55,.15,.45),s.add(new et(.18,.02,.14),"cloth",void 0,.55,.31,.45,-.4,.3),yi(t,"flag",e,-.3,Ie+1,.3,.5),t.light(eo,0,.8,.5,.8);break}case"confluence":{ts(s,.4,.85),Ar(s,.4,.85),s.add(new St(.34,.3,.1,8),"stoneDark",void 0,0,.9,0,0,Math.PI/8);const r=t.part("crystals",{pos:[0,Ie+.9,0],uniqueMaterial:!0});r.crystal("mana",e,.11,.5,-.28,.02,.06,.1,-.7),r.crystal("mana","#f4f1ea",.11,.5,.28,.02,-.06,-.1,.7),r.crystal("mana",e,.05,.22,-.1,0,.22,.4,-.2),r.crystal("mana","#f4f1ea",.05,.22,.12,0,-.2,-.4,.2),t.part("ring",{pos:[0,Ie+1.55,0],rot:[1.3,0,.2],detail:!0}).add(new de(.22,.016,3,20),"glow",e),t.part("ring2",{pos:[0,Ie+1.55,0],rot:[1.8,0,-.4],detail:!0}).add(new de(.17,.014,3,18),"glow","#fff6e0"),t.part("drop",{pos:[0,Ie+1.55,0],detail:!0}).add(new be(.07,0),"glow",e,0,0,0,0,0,0,1,1.5,1),s.add(new et(.1,.13,.03),"glow",e,0,.55,.41),yi(t,"flag",e,.42,Ie+.85,-.2,.45),t.light(e,0,1.6,0,1.1);break}case"workshop":{ts(s,.38,1),Ar(s,.38,1);for(const o of[-.32,.32])s.add(new St(.025,.03,.62,5),"wood",void 0,.82,.31,o);s.add(new et(.62,.035,.8),"woodDark",void 0,.55,.7,0,0,0,.35);for(const o of[.4,.55,.7])s.add(new et(.06,.02,.82),"wood",void 0,o,.72+(o-.55)*-.36,0,0,0,.35);s.add(new et(.4,.05,.22),"wood",void 0,.6,.3,.2);for(const o of[.12,.28])s.add(new et(.04,.28,.04),"woodDark",void 0,.6,.14,o);s.add(new et(.03,.14,.03),"wood",void 0,.5,.38,.2,0,0,.8),s.add(new et(.08,.05,.04),"metal",void 0,.45,.43,.2,0,0,.8),ln(s,.16,.65,0,-.3,.3),s.add(new St(.03,.03,.2,6),"woodDark",void 0,.42,.6,-.05,0,0,Math.PI/2);const r=t.part("gear",{pos:[.5,Ie+.6,-.05],rot:[0,Math.PI/2,0],detail:!0});no(r,.16);const a=t.part("gear2",{pos:[.5,Ie+.88,-.05],rot:[0,Math.PI/2,0],detail:!0});no(a,.09),s.add(new et(.1,.12,.03),"glow",e,-.1,.5,.39,0,-.25),yi(t,"flag",e,-.32,Ie+1,.2,.5),t.light(e,0,.7,.4,.5);break}case"storehouse":{ts(s,.5,.75,10),Ar(s,.5,.75,10),s.add(new St(.44,.44,.04,10),"woodDark",void 0,0,.78,0,0,Math.PI/10),ln(s,.2,.1,.8,-.1,.2),ln(s,.15,-.16,.8,.12,.9),ln(s,.12,.1,1,-.1,.5,"woodDark"),ln(s,.2,.72,0,.3,.2),ln(s,.16,.62,0,-.5,.9),ln(s,.14,.72,.2,.3,.7,"woodDark"),Yr(s,.1,.24,-.7,0,.3),Yr(s,.1,.24,-.62,0,-.42,!0),Yr(s,.09,.22,-.4,0,-.66),s.add(new sn(.11,6,5),"clothDark",void 0,.3,.1,-.68,0,0,0,1,.8,1),s.add(new et(.03,.03,.34),"woodDark",void 0,.3,.62,.6);const r=t.part("sign",{pos:[.3,Ie+.62,.72],detail:!0});r.add(new et(.2,.14,.02),"glow",e,0,-.1,0),r.add(new et(.01,.06,.01),"metal",void 0,0,-.03,0),t.light(e,.3,.55,.75,.4);break}case"factory":{s.add(new et(.72,.16,.72),"stoneDark",void 0,0,.08,0),s.add(new et(.62,1.1,.62),"brick",void 0,0,.71,0);for(const o of[.45,.85])s.add(new et(.66,.04,.66),"stoneDark",void 0,0,o,0);s.add(new et(.7,.06,.7),"dark",void 0,0,1.29,0),s.add(new et(.16,.24,.05),"dark",void 0,0,.28,.32);for(const o of[-.18,.18])s.add(new et(.1,.12,.03),"glow",e,o,.7,.32);s.add(new St(.1,.13,.8,8),"stoneDark",void 0,-.18,1.7,-.18),s.add(new St(.13,.11,.08,8),"dark",void 0,-.18,2.12,-.18),ia(t,"smoke0",-.18,Ie+2.18,-.18,1.2),s.add(new St(.11,.11,.22,8),"metal",void 0,.16,1.43,.1);const r=t.part("rod",{pos:[.16,Ie+1.54,.1],detail:!0});r.add(new St(.035,.035,.3,6),"metal",void 0,0,.15,0),r.add(new et(.16,.05,.1),"dark",void 0,0,.32,0),s.add(new St(.03,.03,.16,6),"woodDark",void 0,.36,.6,.05,0,0,Math.PI/2);const a=t.part("gear",{pos:[.4,Ie+.6,.05],rot:[0,Math.PI/2,0],detail:!0});no(a,.15),s.add(new et(.34,.05,.16),"metal",void 0,.56,.24,.25),ln(s,.12,.72,.27,.25,.2),yi(t,"flag",e,-.28,Ie+1.32,.26,.5),t.light(e,0,.7,.4,.5);break}}},animate({parts:t},e){t.flag&&Il(t.flag,e);for(let n=0;n<2;n++)t[`fire${n}`]&&Ll(t[`fire${n}`],e),t[`smoke${n}`]&&Pl(t[`smoke${n}`],e);t.pages&&(t.pages.rotation.y=e*lt,t.pages.position.y=Ie+1.75+Math.sin(e*lt*2)*.03),t.ring&&(t.ring.rotation.z=e*lt),t.ring2&&(t.ring2.rotation.z=-e*lt),t.drop&&(t.drop.rotation.y=e*lt,t.drop.position.y=Ie+1.55+Math.sin(e*lt)*.04),t.gear&&(t.gear.rotation.z=e*lt),t.gear2&&(t.gear2.rotation.z=-e*lt*(16/9)),t.sign&&(t.sign.rotation.z=Math.sin(e*lt)*.12),t.rod&&(t.rod.position.y=Ie+1.54+(Math.sin(e*lt*2)*.5+.5)*.14)}}}const io="#fff1c4",fh="#ff7a2a";function ph(i){return{front:"z",build(t){t.base(i?71:73);const e=t.root.at(0,.185,0);e.add(new St(.5,.56,.1,8),"stone",void 0,0,.05,0,0,Math.PI/8),e.add(new St(.36,.4,.1,8),"stoneDark",void 0,0,.15,0,0,Math.PI/8),e.add(new St(.12,.2,.5,8),"stone",void 0,0,.45,0);for(let n=0;n<3;n++){const s=n/3*lt+.4;e.beam([Math.cos(s)*.14,.62,Math.sin(s)*.14],[Math.cos(s)*.3,.98,Math.sin(s)*.3],.018,"dark")}e.add(new St(.32,.18,.2,10,1,!0),"dark",void 0,0,.98,0),e.add(new St(.18,.18,.03,10),"dark",void 0,0,.89,0),e.add(new de(.32,.022,4,12),"metal",void 0,0,1.08,0,Math.PI/2);for(let n=0;n<5;n++){const s=n/5*lt;e.add(new jn(.05,0),i?"glow":"rock",i?fh:void 0,Math.cos(s)*.14,.96,Math.sin(s)*.14,n,n)}for(let n=0;n<4;n++){const s=n/4*lt+Math.PI/4;e.add(new et(.1,.22,.1),"stoneDark",void 0,Math.cos(s)*.62,.11,Math.sin(s)*.62,0,-s),e.add(new be(.03,0),i?"glow":"metal",i?io:void 0,Math.cos(s)*.6,.2,Math.sin(s)*.6)}for(let n=0;n<3;n++)e.add(new St(.04,.04,.3,5),"woodDark",void 0,.6+n%2*.05,.04+Math.floor(n/2)*.07,-.5,Math.PI/2,0,.2);if(i){Cl(t,"fire",io,0,.185+.98,0,1.4);const n=t.part("sparks",{pos:[0,.185+1.3,0],detail:!0});for(let s=0;s<4;s++){const r=s/4*lt;n.add(new vn(.025,0),"glow",fh,Math.cos(r)*.18,s*.09,Math.sin(r)*.18,r,r)}t.light(io,0,1.4,0,1.4)}else e.add(new Oe(.05,0),"clothDark",void 0,.05,1.12,0),e.add(new Oe(.035,0),"clothDark",void 0,-.04,1.24,.03)},animate({parts:t},e){t.fire&&Ll(t.fire,e,1.2),t.sparks&&(t.sparks.rotation.y=e*lt,t.sparks.position.y=.185+1.3+e*.2,t.sparks.scale.setScalar(1-e*.5))}}}const Ls="#dfe9ff",Vv={front:"z",build(i){i.base(79);const t=i.root.at(0,.185,0);t.add(new St(.42,.48,.22,8),"stone",void 0,0,.11,0,0,Math.PI/8);const e=.3,n=[[e,e],[-e,e],[e,-e],[-e,-e]];for(const[a,o]of n)t.beam([a*1.2,.2,o*1.2],[a*.8,1.55,o*.8],.035,"wood");for(const a of[.6,1.1]){const o=1.2-a/1.55*.4;t.beam([e*o,a,e*o],[-e*o,a,e*o],.02,"woodDark"),t.beam([e*o,a,-e*o],[-e*o,a,-e*o],.02,"woodDark"),t.beam([e*o,a,e*o],[e*o,a,-e*o],.02,"woodDark"),t.beam([-e*o,a,e*o],[-e*o,a,-e*o],.02,"woodDark"),t.beam([e*o,a,e*o],[-e*(o-.13),a+.45,e*(o-.13)],.012,"woodDark"),t.beam([-e*o,a,e*o],[e*(o-.13),a+.45,e*(o-.13)],.012,"woodDark")}for(let a=0;a<6;a++)t.add(new et(.2,.02,.02),"wood",void 0,0,.35+a*.22,.42-a*.03);for(const a of[-.1,.1])t.beam([a,.25,.44],[a,1.6,.26],.014,"wood");t.add(new et(.76,.06,.76),"woodDark",void 0,0,1.58,0);for(const[a,o]of n)t.add(new et(.035,.28,.035),"wood",void 0,a*1.2,1.74,o*1.2);for(const a of[-1,1])t.add(new et(.74,.025,.025),"wood",void 0,0,1.86,a*.36),t.add(new et(.025,.025,.74),"wood",void 0,a*.36,1.86,0);for(const[a,o]of n)t.add(new et(.03,.55,.03),"wood",void 0,a*1.05,2.12,o*1.05);t.add(new Pe(.6,.42,4),"dark",void 0,0,2.58,0,0,Math.PI/4),t.add(new be(.04,0),"glow",Ls,0,2.82,0),t.add(new et(.02,.02,.16),"metal",void 0,0,2.34,.42);const s=i.part("lamp",{pos:[0,.185+2.33,.5],detail:!0});s.add(new be(.06,0),"glow",Ls,0,-.09,0,0,0,0,1,1.3,1),s.add(new et(.03,.03,.03),"metal",void 0,0,-.02,0),t.add(new St(.06,.08,.16,6),"woodDark",void 0,0,1.68,0);const r=i.part("ballista",{pos:[0,.185+1.78,0],detail:!0});r.add(new et(.06,.05,.5),"wood",void 0,0,0,.05,-.15),r.add(new et(.44,.03,.03),"woodDark",void 0,0,.03,.26,-.15),r.add(new St(.008,.008,.44,4),"clothDark",void 0,0,.04,.14,-.15,0,Math.PI/2),r.add(new St(.01,.01,.34,4),"metal",void 0,0,.05,.12,Math.PI/2-.15),r.add(new Pe(.02,.06,4),"glow",Ls,0,.08,.31,Math.PI/2-.15),t.add(new de(.44,.02,4,16),"glow",Ls,0,.2,0,Math.PI/2),t.add(new St(.07,.06,.28,6),"leather",void 0,.6,.14,.3);for(let a=0;a<3;a++)t.add(new St(.008,.008,.36,3),"metal",void 0,.6+(a-1)*.03,.3,.3+a%2*.03);i.light(Ls,0,2.3,.5,1)},animate({parts:i},t){i.ballista.rotation.y=Math.sin(t*lt)*.45,i.lamp.rotation.x=Math.sin(t*lt+.6)*.18}},so="#ff8a3a",Wv={front:"z",build(i,t){i.base(83);const e=i.root.at(0,.185,0);e.add(new et(.66,.36,.56),"brick",void 0,-.12,.18,-.05),e.add(new et(.7,.05,.6),"stoneDark",void 0,-.12,.38,-.05),e.add(new et(.14,.12,.03),"glow",so,-.12,.14,.24),e.add(new sn(.28,9,7),"copper",void 0,-.12,.64,-.05),e.add(new St(.1,.18,.22,9),"copper",void 0,-.12,.98,-.05),e.add(new de(.2,.02,4,12),"metal",void 0,-.12,.86,-.05,Math.PI/2);const n=[[-.12,1.1,-.05],[.02,1.26,-.02],[.3,1.3,.06],[.5,1.15,.14],[.58,.85,.2],[.58,.55,.2]];for(let a=0;a<n.length-1;a++)e.beam(n[a],n[a+1],.035,"copper");for(let a=0;a<3;a++)e.add(new de(.09,.02,4,10),"copper",void 0,.58,.95-a*.12,.2,Math.PI/2);e.add(new St(.22,.18,.34,10,1,!0),"woodDark",void 0,.58,.17,.2),e.add(new St(.19,.19,.02,10),"woodDark",void 0,.58,.01,.2),e.add(new de(.22,.015,4,12),"metal",void 0,.58,.3,.2,Math.PI/2),i.part("brew",{pos:[.58,.185+.3,.2],uniqueMaterial:!0}).add(new St(.2,.2,.03,10),"mana",t),i.part("drip",{pos:[.58,.185+.5,.2],detail:!0}).add(new be(.03,0),"glow",t,0,0,0,0,0,0,1,1.6,1),ia(i,"vapour",-.12,.185+1.1,-.05,.7),Cl(i,"fire",so,-.12,.185+.02,.28,.45),ln(e,.16,-.66,0,.36,.3),ln(e,.12,-.6,.16,.34,.9,"woodDark"),Yr(e,.09,.22,-.5,0,-.55,!0);for(let a=0;a<3;a++){const o=.15+a*.14;e.add(new St(.03,.05,.1,6),"glow",a===1?t:"#f4f1ea",o,.05,.62),e.add(new St(.012,.012,.05,5),"metal",void 0,o,.12,.62)}e.add(new et(.04,.04,.4),"wood",void 0,-.12,.5,-.5,-.6),i.light(t,.58,.6,.2,.8),i.light(so,-.12,.2,.35,.5)},animate({parts:i,meshes:t},e){Pl(i.vapour,e,.7),Ll(i.fire,e),i.drip.position.y=.185+.5-e%1*.16,i.drip.scale.y=1-e%1*.5;const n=t["brew#opaque"].material;n.emissiveIntensity=n.userData.base*(1+.3*Math.sin(e*lt))}},ro="#ffd9a0",Fr=.185,Xv={front:"x",build(i){i.base(89,1.15,.8);const t=i.part("horse",{pos:[0,Fr+.32,0]});t.add(new et(.62,.24,.22),"mule",void 0,0,.3,0),t.add(new et(.2,.2,.2),"mule",void 0,-.3,.32,0,0,0,.3),t.add(new et(.14,.34,.14),"mule",void 0,.36,.5,0,0,0,-.55),t.add(new et(.24,.11,.1),"mule",void 0,.52,.66,0,0,0,-.25);for(const u of[-.04,.04])t.add(new Pe(.022,.1,4),"mule",void 0,.42,.74,u,u*3,0,.1);for(let u=0;u<4;u++)t.add(new et(.05,.08,.04),"dark",void 0,.3+u*.05,.62-u*.03,0,0,0,-.5);i.part("tail",{parent:t,pos:[-.36,.36,0],detail:!0}).add(new Pe(.03,.3,4),"dark",void 0,-.06,-.12,0,0,0,.4),[[.22,.07,0],[.22,-.07,.15],[-.22,.07,.55],[-.22,-.07,.7]].forEach(([u,f],h)=>{const d=i.part(`hip${h}`,{parent:t,pos:[u,.22,f],detail:!0});d.add(new et(.06,.3,.06),"mule",void 0,0,-.15,0),d.add(new et(.065,.045,.065),"hoof",void 0,0,-.32,0)}),t.add(new et(.3,.05,.28),"tunic",void 0,.02,.43,0),t.add(new et(.24,.06,.2),"leather",void 0,.02,.47,0),t.add(new St(.035,.035,.26,6),"leather",void 0,-.14,.42,.14,0,0,.3),t.add(new St(.04,.04,.02,6),"cloth",void 0,-.14-.12*Math.sin(-.3),.42+.12*Math.cos(.3),.14,0,0,.3);const s=i.part("rider",{parent:t,pos:[.02,.5,0],detail:!0});for(const u of[-.12,.12])s.add(new et(.08,.22,.07),"leather",void 0,0,-.06,u,0,0,0);s.add(new St(.1,.13,.32,7),"clothDark",void 0,0,.18,0,0,0,-.15),s.add(new Oe(.07,0),"skin",void 0,.03,.42,0),s.add(new Pe(.09,.15,7),"clothDark",void 0,.02,.5,-.01,0,0,-.2),s.beam([.08,.28,.06],[.3,.2,.05],.028,"clothDark"),s.beam([.06,.28,-.06],[.28,.2,-.05],.028,"clothDark");for(const u of[-.05,.05])s.beam([.3,.2,u],[.5,.16,u*1.2],.006,"leather");i.part("cloak",{parent:s,pos:[-.06,.34,0],detail:!0}).add(new Pe(.16,.42,6,1,!0),"clothDark",void 0,-.14,-.1,0,0,0,1.1),s.add(new St(.01,.012,.7,5),"wood",void 0,-.1,.35,-.16,0,0,.2);const a=i.part("flag",{parent:s,pos:[-.17,.68,-.16],detail:!0}),o=new ti;o.moveTo(0,0),o.lineTo(-.24,-.05),o.lineTo(0,-.13),a.add(new Di(o),"glow",ro,0,0,0,0,Math.PI/2);const l=i.part("lamp",{parent:t,pos:[.18,.5,.16],detail:!0});l.add(new be(.04,0),"glow",ro,0,-.08,0),l.add(new St(.005,.005,.08,3),"metal",void 0,0,-.03,0);const c=i.part("dust",{pos:[-.55,Fr+.05,0],detail:!0});for(let u=0;u<3;u++)c.add(new Oe(.045+u*.02,0),"clothDark",void 0,-u*.12,.04+u*.05,(u-1)*.08,u,u);i.light(ro,.2,.9,.16,.7)},animate({parts:i},t){const e=t*lt*2;i.horse.position.y=Fr+.32+Math.abs(Math.sin(e))*.05,i.horse.rotation.z=Math.sin(e)*.05;const n=[0,.15,.55,.7];for(let s=0;s<4;s++)i[`hip${s}`].rotation.z=Math.sin(e+n[s]*lt)*.7;i.tail.rotation.z=Math.sin(e+1)*.25-.3,i.rider.rotation.z=Math.sin(e)*.05-.1,i.cloak.rotation.z=.2+Math.sin(e+.5)*.15,Il(i.flag,t*2),i.lamp.rotation.z=Math.sin(e+2)*.3,i.dust.scale.setScalar(.8+t*2%1*.5),i.dust.position.y=Fr+.05+t*2%1*.08}},qv={front:"z",build(i,t){i.base(97);const e=i.root.at(0,.185,0),n=Ni(17);for(let l=0;l<6;l++){const c=l/6*lt+n()*.4,u=.38+n()*.16;e.add(new et(.28,.06,.2),"rock",void 0,Math.cos(c)*u,.05+n()*.05,Math.sin(c)*u,(n()-.5)*.3-.35,-c,(n()-.5)*.3)}e.add(new St(.22,.28,.06,7),"void",void 0,0,.03,0);const s=i.part("ring",{pos:[0,.185+.03,0],uniqueMaterial:!0});s.add(new de(.58,.03,4,24),"glow",t,0,0,0,Math.PI/2),s.add(new de(.3,.025,4,16),"glow",t,0,.02,0,Math.PI/2);const r=i.part("column",{pos:[0,.185+.05,0],uniqueMaterial:!0});r.crystal("mana",t,.13,.8,0,0,0,0,0),r.crystal("mana",t,.06,.5,.12,0,.08,.15,-.3),r.crystal("mana",t,.06,.45,-.1,0,-.1,-.2,.3),i.part("sheath",{pos:[0,.185+.05,0],detail:!0}).add(new Pe(.26,1.3,7,1,!0),"ghost",void 0,0,.65,0,Math.PI,0,0);for(const[l,c,u]of[["sprayA",.34,1],["sprayB",.5,-1]]){const f=i.part(l,{pos:[0,.7849999999999999,0],detail:!0});for(let h=0;h<6;h++){const d=h/6*lt;f.add(new vn(.05+h%2*.02,0),"glow",t,Math.cos(d)*c,(h*u+6)%6*.08,Math.sin(d)*c,d,d*2)}}const o=i.part("motes",{pos:[0,.185+.3,0],detail:!0});for(let l=0;l<5;l++){const c=l/5*lt+.3;o.add(new be(.03,0),"glow","#ffffff",Math.cos(c)*.2,l*.15,Math.sin(c)*.2)}i.light(t,0,.9,0,1.6)},animate({parts:i,meshes:t},e){i.column.rotation.y=e*lt*.5,i.column.scale.y=1+Math.sin(e*lt*2)*.05,i.sheath.scale.set(1+Math.sin(e*lt*2)*.12,1+Math.sin(e*lt*2+1)*.06,1+Math.sin(e*lt*2)*.12),i.sprayA.rotation.y=e*lt,i.sprayA.position.y=.185+.6+Math.sin(e*lt)*.18,i.sprayB.rotation.y=-e*lt,i.sprayB.position.y=.185+.6+Math.cos(e*lt)*.14,i.motes.position.y=.185+.3+e*.5,i.motes.scale.setScalar(1-e*.6);for(const n of["ring#opaque","column#opaque"]){const s=t[n].material;s.emissiveIntensity=s.userData.base*(1.1+.45*Math.sin(e*lt*2))}}},ao="#9fd8ff",mh="#b9c0d6";function oo(i){return{front:"z",build(t){if(i==="shadow"){t.base(131),t.root.at(0,.185,0).add(new St(.62,.7,.025,12),"void",void 0,0,.01,0);const n=t.part("f",{pos:[0,.185,0]});n.add(new sn(.34,8,6),"void",void 0,0,.36,-.05,-.3,0,0,1,.9,1.1),n.add(new sn(.2,7,5),"void",void 0,0,.66,.16,0,0,0,1,.8,1);for(const r of[-.06,.06])n.add(new be(.035,0),"eye",void 0,r,.68,.33);for(const r of[-1,1]){const a=t.part(r<0?"armL":"armR",{parent:n,pos:[r*.26,.5,.12],detail:!0});a.beam([0,0,0],[r*.18,-.42,.28],.05,"void");for(let o=-1;o<=1;o++)a.add(new Pe(.016,.12,4),"claw",void 0,r*.18+o*.04,-.46,.36,1.6,0,o*.3)}const s=t.part("wisps",{parent:n,detail:!0});for(let r=0;r<5;r++){const a=r/5*lt;s.add(new Pe(.035,.22,4),"void",void 0,Math.cos(a)*.5,.1,Math.sin(a)*.5,Math.cos(a)*.6,0,-Math.sin(a)*.6)}t.light("#ff4d5e",0,.7,.35,.35)}else if(i==="specter"){t.base(137);const e=t.part("f",{pos:[0,.45,0]});e.add(hs([[.14,0],[.34,.35],[.3,.9],[.26,1.3],[.12,1.62]],9),"ghost"),e.add(new Oe(.16,0),"void",void 0,0,1.68,.06,0,0,0,1,1.25,.8),e.add(hs([[.03,2],[.2,1.92],[.26,1.7],[.22,1.5]],9,.4,lt-.8),"ghost");for(const n of[-.06,.06])e.add(new be(.03,0),"eye",void 0,n,1.72,.2);for(const n of[-1,1]){const s=t.part(n<0?"armL":"armR",{parent:e,pos:[n*.24,1.35,.02],detail:!0});s.beam([0,0,0],[n*.5,.25,.1],.06,"ghost"),s.add(new be(.045,0),"ghost",void 0,n*.54,.28,.11);for(let r=0;r<4;r++)s.add(new de(.03,.008,3,6),"glow",mh,n*.56,.22-r*.07,.11,r%2*Math.PI/2,0,0)}for(let n=0;n<5;n++)e.add(new de(.03,.008,3,6),"glow",mh,.2,.75-n*.07,.24,n%2*Math.PI/2,.2,0);t.light("#8f96ff",0,1.4,.3,.7)}else{t.base(139);const e=t.part("f",{pos:[0,1.1,0]}),n=t.part("core",{parent:e,uniqueMaterial:!0});n.add(new Oe(.22,1),"glow",ao),n.add(new Oe(.12,0),"glow","#ffffff",0,0,.06);const s=t.part("tails",{parent:e,detail:!0});for(let a=0;a<5;a++){const o=a/5*lt+.5,l=Math.cos(o)*.12,c=Math.sin(o)*.12;s.beam([l,-.1,c],[l*3.5,-.55-a%2*.15,c*3.5-.15],.02,"ghost")}const r=t.part("ring",{parent:e,rot:[.5,0,.2],detail:!0});for(let a=0;a<7;a++){const o=a/7*lt;r.add(new vn(.035,0),"glow",ao,Math.cos(o)*.42,0,Math.sin(o)*.42,o,o)}t.root.at(0,.185,0).add(new St(.34,.4,.02,12),"glow","#4a7ea8",0,.01,0),t.light(ao,0,1.1,0,1.2)}},animate({parts:t,meshes:e},n){const s=n*lt;if(i==="shadow")t.f.position.y=.185+Math.abs(Math.sin(s))*.03,t.f.rotation.y=Math.sin(s)*.15,t.f.scale.y=1+Math.sin(s*2)*.03,t.armL&&(t.armL.rotation.x=Math.sin(s)*.15,t.armR.rotation.x=Math.sin(s+1.5)*.15,t.wisps.rotation.y=s/5);else if(i==="specter")t.f.position.y=.45+Math.sin(s)*.1,t.f.rotation.z=Math.sin(s*.5)*.06,t.armL&&(t.armL.rotation.z=Math.sin(s)*.12,t.armR.rotation.z=-Math.sin(s+.7)*.12);else{t.f.position.set(Math.sin(s*2)*.16,1.1+Math.sin(s)*.12,Math.sin(s)*.1),t.core.rotation.y=s,t.core.scale.setScalar(1+Math.sin(s*3)*.1),t.ring&&(t.ring.rotation.y=-s);const r=e["core#opaque"].material;r.emissiveIntensity=r.userData.base*(1+.4*Math.sin(s*3))}}}}const Yv={front:"z",build(i,t){i.base(103);const e=i.root.at(0,.185,0);for(let o=0;o<3;o++)e.add(new St(.11,.11,.02,6),"stone",void 0,(o-1)*.06,.01,.5+o*.16,0,o);const n=12;for(let o=0;o<n;o++){const l=o/n*lt,c=.62;e.add(new et(.17,.19,.14),o%3?"stone":"stoneDark",void 0,Math.cos(l)*c,.82+Math.sin(l)*c,0,0,0,l)}for(const o of[-1,1])e.add(new et(.2,.7,.24),"stoneDark",void 0,o*.62,.33,-.02,0,0,o*.08),e.add(new et(.3,.1,.34),"stone",void 0,o*.66,.05,-.02),e.add(new sn(.1,5,4),"grass",void 0,o*.72,.1,.16,0,0,0,1,.5,1);for(const o of[-1,1]){e.add(new St(.006,.006,.12,3),"metal",void 0,o*.3,1.34,.1);const l=i.part(o<0?"lampL":"lampR",{pos:[o*.3,.185+1.28,.1],detail:!0});l.add(new et(.06,.08,.06),"metal",void 0,0,-.04,0),l.add(new be(.035,0),"glow","#ffd9a0",0,-.04,0)}i.part("disc",{pos:[0,.185+.82,0],uniqueMaterial:!0}).add(new St(.5,.5,.02,24),"mana",t,0,0,0,Math.PI/2);const r=i.part("ripple",{pos:[0,.185+.82,.03],detail:!0});for(let o=0;o<3;o++)r.add(new de(.12+o*.13,.012,3,20),"glow","#ffffff",0,0,0,0,0,o*.4);const a=i.part("motes",{pos:[0,.185+.82,.1],detail:!0});for(let o=0;o<6;o++){const l=o/6*lt;a.add(new be(.025,0),"glow",t,Math.cos(l)*.3,Math.sin(l)*.3,o*.06)}i.light(t,0,.9,.3,1.2)},animate({parts:i,meshes:t},e){const n=e*lt;i.disc.rotation.y=n,i.disc.scale.set(1+Math.sin(n)*.03,1,1+Math.sin(n)*.03),i.ripple.rotation.z=-n*.5,i.ripple.scale.setScalar(.8+e*.35),i.motes.position.z=.1+e*.35,i.motes.rotation.z=n*.3,i.motes.scale.setScalar(1-e*.5),i.lampL.rotation.z=Math.sin(n)*.2,i.lampR.rotation.z=Math.sin(n+1)*.2;const s=t["disc#opaque"].material;s.emissiveIntensity=s.userData.base*(1.2+.3*Math.sin(n))}},Or="#ffe9a8",$v={front:"z",build(i){i.base(107,.85,.85);const t=i.root.at(0,.185,0);t.add(new sn(.42,9,6),"grass",void 0,0,-.08,0,0,0,0,1,.55,1),t.add(new sn(.22,7,5),"grass",void 0,.36,-.02,.2,0,0,0,1,.5,1),t.add(new St(.07,.08,.6,6),"woodDark",void 0,-.3,.07,-.35,0,.6,Math.PI/2);const e=Ni(29);[[.18,.1,.3,.28],[-.2,.12,.34,.2],[.02,.1,-.18,.16],[.3,.1,-.12,.12]].forEach(([r,a,o,l])=>{t.add(new St(.035,.05,o,6),"cloth",void 0,r,.1+o/2,a,(e()-.5)*.2,0,(e()-.5)*.2),t.add(new Pe(l,l*.7,8),"glow",Or,r,.12+o+l*.2,a);for(let c=0;c<3;c++)t.add(new be(.018,0),"cloth",void 0,r+(e()-.5)*l,.12+o+l*.25,a+(e()-.5)*l)}),t.beam([-.05,.14,.08],[-.02,.62,.1],.014,"grass");for(let r=0;r<2;r++)t.add(new Pe(.06,.16,4),"grass",void 0,-.05+(r?.08:-.08),.32+r*.1,.09,0,0,r?-1.2:1.2);const s=i.part("bloom",{pos:[-.02,.185+.64,.1],uniqueMaterial:!0});for(let r=0;r<6;r++){const a=r/6*lt;s.add(new Pe(.045,.14,4),"glow","#fff7e0",Math.cos(a)*.05,.05,Math.sin(a)*.05,Math.sin(a)*.9,0,-Math.cos(a)*.9)}s.add(new be(.03,0),"glow",Or,0,.03,0);for(const[r,a,o]of[["fliesA",.4,.5],["fliesB",.56,.32]]){const l=i.part(r,{pos:[0,.185+o,0],detail:!0});for(let c=0;c<4;c++){const u=c/4*lt+a;l.add(new be(.018,0),"glow",Or,Math.cos(u)*a,c%2*.12,Math.sin(u)*a)}}i.light(Or,0,.5,0,.6)},animate({parts:i,meshes:t},e){const n=e*lt;i.bloom.rotation.y=n*.3,i.bloom.scale.set(1+Math.sin(n)*.15,1,1+Math.sin(n)*.15),i.fliesA.rotation.y=n,i.fliesA.position.y=.185+.5+Math.sin(n*2)*.05,i.fliesB.rotation.y=-n*.7,i.fliesB.position.y=.185+.32+Math.cos(n*2)*.05;const s=t["bloom#opaque"].material;s.emissiveIntensity=s.userData.base*(1+.3*Math.sin(n))}},Kv={front:"z",build(i,t){i.base(113,.62,.62);const e=i.root.at(0,.185,0),n=Ni(31),s=[[.26,.09],[.21,.08],[.16,.07],[.11,.07]];let r=0;s.forEach(([o,l],c)=>{e.add(new St(o,o*1.05,l,6),c%2?"stone":"rock",void 0,(n()-.5)*.04,r+l/2,(n()-.5)*.04,0,n()*2),r+=l}),e.add(new be(.05,0),"glow",t,0,r+.05,0),e.add(new St(.02,.025,.62,5),"wood",void 0,.3,.31,.1),e.add(new et(.26,.08,.02),"woodDark",void 0,.36,.5,.11,0,-.2),e.add(new Pe(.04,.05,4),"woodDark",void 0,.51,.5,.14,0,-.2,-Math.PI/2),yi(i,"flag",t,.3,.185+.62,.1,.32),i.part("mote",{pos:[0,.185+r+.2,0],detail:!0}).add(new vn(.025,0),"glow",t),i.light(t,0,.5,0,.35)},animate({parts:i},t){Il(i.flag,t),i.mote.position.y=.185+.51+Math.sin(t*lt)*.06,i.mote.rotation.y=t*lt}},Nn=.185;function Zv(i){for(let t=-4;t<=4;t++)i.add(new et(.1,.03,.6),"woodDark",void 0,t*.24,.015,0);for(const t of[-.2,.2])i.add(new et(2.1,.03,.035),"metal",void 0,0,.045,t)}function gh(i,t,e,n){t.forEach((s,r)=>{for(const a of[-.24,.24]){const o=i.part(`wheel${r}${a<0?"a":"b"}`,{pos:[s,n,a],detail:!0});o.add(new St(e,e,.05,10),"metal",void 0,0,0,0,Math.PI/2),o.add(new et(.03,e*1.6,.06),"dark",void 0,0,0,0,0,0,.5),o.add(new et(.03,e*1.6,.06),"dark",void 0,0,0,0,0,0,-.5)}})}function _h(i){return{front:"x",build(t,e){t.base(i==="engine"?127:129,1.3,.7);const n=t.root.at(0,Nn,0);if(Zv(n),i==="engine"){n.add(new et(1.4,.08,.5),"dark",void 0,0,.26,0),n.add(new St(.22,.22,.86,12),"brick",void 0,.12,.5,0,0,0,Math.PI/2);for(const o of[-.12,.2,.44])n.add(new de(.225,.015,4,12),"copper",void 0,o,.5,0,0,Math.PI/2);n.add(new St(.16,.2,.1,12),"metal",void 0,.6,.5,0,0,0,Math.PI/2),n.add(new St(.07,.09,.32,8),"dark",void 0,.42,.85,0),n.add(new St(.1,.07,.06,8),"dark",void 0,.42,1.03,0),n.add(new sn(.08,7,5),"copper",void 0,.1,.76,0),n.add(new et(.44,.5,.5),"brick",void 0,-.42,.55,0),n.add(new et(.5,.05,.56),"dark",void 0,-.42,.82,0);for(const o of[-.26,.26])n.add(new et(.2,.18,.02),"glow","#ffd9a0",-.4,.62,o);n.add(new et(.02,.18,.2),"glow","#ffd9a0",-.65,.62,0);for(let o=0;o<4;o++)n.beam([.66,.36,-.24+o*.16],[.82,.1,-.24+o*.16],.012,"metal");const s=t.part("lamp",{pos:[.66,Nn+.68,0],detail:!0});s.add(new St(.06,.06,.08,8),"metal",void 0,0,0,0,0,0,Math.PI/2),s.add(new be(.05,0),"glow",e,.05,0,0),gh(t,[.32,0,-.32],.13,Nn+.16),t.part("rod",{pos:[0,Nn+.16,.28],detail:!0}).add(new et(.7,.03,.02),"metal",void 0,0,0,0),t.part("rod2",{pos:[0,Nn+.16,-.28],detail:!0}).add(new et(.7,.03,.02),"metal",void 0,0,0,0),ia(t,"smoke0",.42,Nn+1.08,0,1.1),t.light(e,.75,.7,0,.9),t.light("#ffd9a0",-.42,.65,0,.4)}else{n.add(new et(1.3,.08,.5),"woodDark",void 0,0,.26,0);for(const r of[-.6,.6])n.add(new et(.06,.16,.5),"woodDark",void 0,r,.38,0);n.add(new et(1.3,.04,.06),"metal",void 0,0,.22,.26),n.add(new et(1.3,.04,.06),"metal",void 0,0,.22,-.26),ln(n,.3,-.28,.3,-.05,.1),ln(n,.22,.12,.3,.1,.5),ln(n,.18,.4,.3,-.12,.2,"woodDark"),n.add(new et(.7,.28,.46),"clothDark",void 0,-.1,.5,0,0,0,.06);for(const r of[-.35,.15])n.add(new de(.29,.01,3,10,Math.PI),"leather",void 0,r,.34,0,0,Math.PI/2);for(const r of[-.68,.68])for(const a of[-.15,.15])n.add(new St(.03,.03,.08,6),"metal",void 0,r,.28,a,0,0,Math.PI/2);n.add(new de(.03,.008,3,8),"metal",void 0,.72,.26,0,0,Math.PI/2);const s=t.part("lamp",{pos:[-.62,Nn+.6,-.2],detail:!0});s.add(new et(.06,.08,.06),"metal",void 0,0,-.04,0),s.add(new be(.04,0),"glow",e,0,-.04,0),n.add(new et(.02,.2,.02),"metal",void 0,-.62,.5,-.2),gh(t,[.36,-.36],.12,Nn+.15),t.light(e,-.62,.6,-.2,.6)}},animate({parts:t},e){const n=e*lt;for(const s of Object.keys(t))s.startsWith("wheel")&&(t[s].rotation.z=-n);t.rod?(t.rod.position.x=Math.cos(-n)*.08,t.rod.position.y=Nn+.16+Math.sin(-n)*.08,t.rod2.position.x=Math.cos(-n+Math.PI/2)*.08,t.rod2.position.y=Nn+.16+Math.sin(-n+Math.PI/2)*.08,Pl(t.smoke0,e,1.1),t.lamp.scale.setScalar(1+Math.sin(n*4)*.05)):t.lamp.rotation.x=Math.sin(n)*.25}}}const Jv={jarvis:"#4f7fc9",karen:"#d99a2b",orolo:"#8656c4",none:"#6b7280"},En="#fff8e6";function Br(i){const t=Jv[i];return{front:"z",build(e){e.base(151+["jarvis","karen","orolo","none"].indexOf(i)*3,.8,.8);const n=e.root.at(0,.185,0);for(let c=0;c<8;c++){const u=c/8*lt;n.add(new jn(.04,0),c%2?"stone":"rock",void 0,Math.cos(u)*.28,.03,Math.sin(u)*.28,c,c*2)}n.add(new jn(.11,0),"rock",void 0,.02,.06,-.02,0,.3,0,1,.7,1),n.add(new St(.022,.03,1,6),"wood",void 0,0,.5,0),n.add(new de(.03,.012,3,8),"metal",void 0,0,.72,0,Math.PI/2);const s=e.part("board",{pos:[0,.185+1.1,0],rot:[-.45,0,0]});s.add(new St(.42,.42,.035,20),"glow",t,0,0,0,Math.PI/2),s.add(new de(.41,.025,4,20),"glow",En,0,0,0);const r=.03;if(i==="jarvis")s.add(new de(.24,.028,4,6),"glow",En,0,0,r,0,0,Math.PI/6),s.add(new St(.06,.06,.02,8),"glow",En,0,0,r,Math.PI/2);else if(i==="karen")s.add(new et(.045,.26,.02),"glow",En,-.2,-.09,r),s.add(new et(.045,.26,.02),"glow",En,.2,-.09,r),s.add(new et(.44,.045,.02),"glow",En,0,-.21,r),s.add(new et(.3,.045,.02),"glow",En,-.11,.12,r,0,0,.72),s.add(new et(.3,.045,.02),"glow",En,.11,.12,r,0,0,-.72),s.add(new et(.1,.14,.02),"glow",En,0,-.15,r);else if(i==="orolo")for(let c=0;c<5;c++){const u=.06+c*.05;s.add(new de(u,.024,4,10,Math.PI),"glow",En,c%2?-.025:.025,0,r,0,0,c*Math.PI)}else s.add(new de(.18,.03,4,16),"glow",En,0,0,r);const a=e.part("ribbon",{pos:[0,.185+.66,0],detail:!0}),o=new ti;o.moveTo(-.03,0),o.lineTo(.03,0),o.lineTo(.05,-.22),o.lineTo(0,-.17),o.lineTo(-.05,-.22),a.add(new Di(o),"glow",t,.04,0,.02),e.part("mote",{pos:[0,.185+1.6,0],detail:!0}).add(new be(.03,0),"glow",t,.14,0,0),e.light(t,0,1,.2,.7)},animate({parts:e},n){const s=n*lt;e.board.rotation.y=Math.sin(s)*.25,e.board.position.y=.185+1.1+Math.sin(s*2)*.01,e.ribbon.rotation.y=Math.sin(s*2+1)*.5,e.mote.rotation.y=s,e.mote.position.y=.185+1.6+Math.sin(s*2)*.03}}}const vh=Object.fromEntries(Pu.map(i=>[`tower-${i}`,Hv(i)])),Lu={nexus:Fv,extractor:Bv,caravan:zv,wraith:dh,rift:kv,hero:Gv,"hero-cleric":to("cleric"),"hero-fighter":to("fighter"),"hero-wizard":to("wizard"),tower:vh["tower-bare"],...vh,ward:ph(!1),"ward-lit":ph(!0),watchtower:Vv,facility:Wv,envoy:Xv,surge:qv,"monster-shadow":oo("shadow"),"monster-specter":oo("specter"),"monster-wisp":oo("wisp"),"monster-wraith":dh,encounter:Yv,gather:$v,poi:Kv,train:_h("car"),"train-engine":_h("engine"),sigil:Br("none"),"sigil-jarvis":Br("jarvis"),"sigil-karen":Br("karen"),"sigil-orolo":Br("orolo")},Qv=Object.keys(Lu),zr=Lu,lo=["#FF0000","#FF8000","#FFFF00","#00FF00","#0000FF","#8000FF","#000000","#FFFFFF"],Is="minis-3d",xh="tower-fill",co=24,jv=2,tx=80,kr={nexus:1.35,extractor:1,caravan:1,wraith:1,rift:1.1,hero:.9,poi:.7,gather:.85,"hero-cleric":.85,"hero-fighter":.85,"hero-wizard":.85,train:.9,envoy:.95,sigil:.8,"sigil-jarvis":.8,"sigil-karen":.8,"sigil-orolo":.8},ex="#39e35a",ho="stress:",Mh=16.5,nx=15.25,ix=52,sx=84,Sh=3,rx=.62,uo=2,fo=1.15,ax={1:[[0,0]],2:[[-.7,.05],[.7,.05]],3:[[-1.25,.15],[0,-.2],[1.25,.15]]},po=.42,mo=.85,ox=.8,lx={creature:[0,-2.4],mover:[0,1.8],ward:[1.4,0],event:[-1.4,0],roster:[0,1.4],sigil:[1.4,.6],gather:[-1.4,.6]},cx=110,yh=.02,hx=.9,wh=1.7,ux=1.5,dx={ext:"node",poi:"poi",wraith:"creature",monster:"creature",car:"mover",train:"mover",envoy:"mover",ward:"ward",roster:"roster",gather:"gather",enc:"event",surge:"event",rift:"event",sigil:"sigil",tower:"attach",fac:"attach"},Eh={extractor:3,"train-engine":3,caravan:2,envoy:2,wraith:2,surge:2,rift:1,train:-1},bh={nexus:"#f2c14e",hero:"#3f6fa8","hero-cleric":"#efe4cc","hero-fighter":"#a5683a","hero-wizard":"#5b4b8f",wraith:"#c9cdf0","monster-shadow":"#6a70d0","monster-specter":"#c9cdf0","monster-wisp":"#8fd8ff","monster-wraith":"#c9cdf0",rift:"#8a3aff",ward:"#8a8378","ward-lit":"#ffb347",watchtower:"#d8d8e8",envoy:"#e3d3ae",gather:"#ffe28a",sigil:"#d97e3a","sigil-jarvis":"#d97e3a","sigil-karen":"#d97e3a","sigil-orolo":"#d97e3a"},go="#5b4a36",fx={nexus:1.6,extractor:1.9,caravan:.9,"train-engine":1,train:.8,envoy:.9,wraith:1.4,rift:1.3,hero:1.5,"hero-cleric":1.5,"hero-fighter":1.5,"hero-wizard":1.6,poi:.6,gather:.5,"tower-bare":1.3,watchtower:2.4,ward:1.2,"ward-lit":1.4,facility:1.1,surge:1,encounter:1,tray:.3},px=1.3,mx=1.9;function Th(i){return fx[i]??(i.startsWith("tower-")?mx:px)}const gx={caravan:[1.3,.85],envoy:[1.15,.8],gather:[.85,.85],poi:[.62,.62],sigil:[.8,.8],"sigil-jarvis":[.8,.8],"sigil-karen":[.8,.8],"sigil-orolo":[.8,.8],train:[1.3,.7],"train-engine":[1.3,.7]},_x=[1,1],Ah=.22,vx=5e3,xx=1e3/30,Mx=100,Sx=2e4,yx=2.6,wx=.88,Ex=.24,bx={drop:640,open:900,rise:720,seal:660,dissolve:880,lunge:480,pulse:700},Tx=2.6,Rh=.9,Ax=new Set(["poi","gather","encounter","surge","hero","train","sigil","sigil-jarvis","sigil-karen","sigil-orolo"]),Dl=i=>i==="wraith"||i.startsWith("monster-");function Rx(i){return i==="rift"?"open":Dl(i)?"rise":Ax.has(i)?null:"drop"}function Cx(i){return i==="rift"?"seal":Dl(i)?"dissolve":null}const Ch="#8f96ff",Ph="#a24dff",Lh=i=>1-(1-i)*(1-i),Ih=i=>i*i*(3-2*i);function Ix(i){const t=new Nd,e=new Tl,n=new ns;t.add(n);const s=new wv(n,t),r=new Dv(n);let a=null,o=!1;const l=[],c=new Map,u=new Map;let f=1;const h=[],d=[];let g=!0,S=-1,m="near",p=0,y=0,E=1;const M=new xe,b=new xe().makeRotationX(Math.PI/2);function w(R,B){const V=ei.MercatorCoordinate.fromLngLat([R,B]);p=V.x,y=V.y,E=V.meterInMercatorCoordinateUnits(),M.makeTranslation(p,y,0).scale(new I(E,-E,E)).multiply(b);for(const ot of l)C(ot);g=!0}function C(R){R.tx=R.dx=(R.mx-p)/E,R.tz=R.dz=(R.my-y)/E,R.inst.root.position.set(R.dx,0,R.dz)}const x=i.getCenter();w(x.lng,x.lat);const T=(R,B)=>`${Rs()}|${R}:${B}`;function P(R,B){const V=T(R,B);let ot=u.get(V);if(!ot){const Ut=new rv;zr[R].build(Ut,B),ot=Ut.compile(),u.set(V,ot)}return ot}function F(R){const B=R.indexOf(":");return B===-1?null:dx[R.slice(0,B)]??null}function G(R,B){let V=B^2654435769;for(let ot=0;ot<R.length;ot++)V=Math.imul(V^R.charCodeAt(ot),16777619);return V^=V>>>15,V=Math.imul(V,739982445),V^=V>>>12,V=Math.imul(V,695872825),V^=V>>>15,(V>>>0)%1e3/1e3}function q(R,B,V,ot,Ut,vt){const te=ei.MercatorCoordinate.fromLngLat([V,ot]),se=$a(P(B,Ut)),_={id:f++,key:R,family:F(R),kind:B,color:Ut,lng:V,lat:ot,mx:te.x,my:te.y,phase:vt,rate:wx+Ex*G(R,7),heading:null,scale:1,state:1,fx:null,dying:!1,inst:se,tray:null,seat:-1,tx:0,tz:0,dx:0,dz:0,shown:!0,onScreen:!1};return C(_),n.add(se.root),l.push(_),c.set(R,_),g=!0,_}function U(R){n.remove(R.inst.root),R.inst.dispose(),c.get(R.key)===R&&c.delete(R.key);const B=l.indexOf(R);B!==-1&&l.splice(B,1),g=!0}function W(R,B,V,ot=0,Ut=0,vt=R.color){R.fx={kind:B,t0:V,dur:bx[B],dx:ot,dz:Ut,color:vt,landed:!1},Nt()}function J(R){const B=Cx(R.kind);if(!B||$==="far"||!R.onScreen||R.dying){U(R);return}c.delete(R.key),R.dying=!0,R.tray=null,R.seat=-1;const V=performance.now();W(R,B,V);const ot=K*(kr[R.kind]??1)*R.scale;B==="dissolve"?r.wisps(R.dx,.6*ot,R.dz,ot,Ch,V):r.implode(R.dx,1.1*ot,R.dz,ot,Ph,V),g=!0}function Z(R){const B=Rx(R.kind);if(!B)return;const V=performance.now();W(R,B,V);const ot=K*(kr[R.kind]??1)*R.scale;B==="rise"?r.wisps(R.dx,.2*ot,R.dz,ot,Ch,V):B==="open"&&r.burst(R.dx,1*ot,R.dz,ot,Ph,V)}function ht(R,B,V,ot,Ut){const vt=R.inst.root;switch(B.kind){case"drop":{const te=Tx*ot;if(V<.68){const se=V/.68;vt.position.y=te*(1-se*se)}else{B.landed||(B.landed=!0,r.landing(R.dx,R.dz,ot,Ut));const se=(V-.68)/.32;vt.position.y=.16*te*Math.sin(Math.PI*se)*(1-.4*se),vt.scale.y*=1-.08*Math.sin(Math.PI*Math.min(1,se*2))}return-1}case"rise":{const te=Lh(V);return vt.scale.y*=te,vt.scale.x*=.6+.4*te,vt.scale.z*=.6+.4*te,-1}case"open":{const te=Lh(Math.min(1,V/.3)),se=.04+.96*Ih(Math.max(0,(V-.25)/.75));return vt.scale.x*=se,vt.scale.z*=se,vt.scale.y*=te,-1}case"seal":{const te=.04+.96*(1-Ih(Math.min(1,V/.7)));return vt.scale.x*=te,vt.scale.z*=te,V>.7&&(vt.scale.y*=1-(V-.7)/.3),-1}case"dissolve":return vt.position.y=.9*ot*V,vt.scale.x*=1-V,vt.scale.z*=1-V,vt.scale.y*=1+.35*V,-1;case"lunge":{const te=Math.sin(Math.PI*V);return vt.position.x+=B.dx*Rh*ot*te,vt.position.z+=B.dz*Rh*ot*te,vt.scale.y*=1+.15*te,-1}case"pulse":return V}}function Q(R,B,V){if(R.lng===B&&R.lat===V)return!1;const ot=ei.MercatorCoordinate.fromLngLat([B,V]);R.lng=B,R.lat=V,R.mx=ot.x,R.my=ot.y;const Ut=(R.mx-p)/E,vt=(R.my-y)/E;return R.dx+=Ut-R.tx,R.dz+=vt-R.tz,R.tx=Ut,R.tz=vt,g=!0,!0}function rt(R){for(const B of[...l])B.key.startsWith(R)&&U(B)}function nt(){Nt(),kt(),Zt(performance.now()),i.triggerRepaint(),Pn(performance.now(),!0)}function Ht(){const R=new St(1,1.06,.14,14).toNonIndexed();R.deleteAttribute("uv");const V=R.attributes.position.count,ot=new Float32Array(V*3),Ut=R.attributes.normal;for(let _=0;_<V;_++){const L=Ut.getY(_)>.5,k=Ut.getY(_)<-.5,N=L?1:k?.15:.32;ot[_*3]=ot[_*3+1]=ot[_*3+2]=N}R.setAttribute("color",new je(ot,3)),R.translate(0,.07,0);const vt=new de(.97,.05,4,20).toNonIndexed();vt.deleteAttribute("uv"),vt.rotateX(Math.PI/2),vt.translate(0,.14,0);const te=vt.attributes.position.count;vt.setAttribute("color",new je(new Float32Array(te*3).fill(2),3));const se=wu([R,vt],!1);return R.dispose(),vt.dispose(),se}const zt=Ht(),ge=new jr({vertexColors:!0});ge.onBeforeCompile=R=>{R.vertexShader=R.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
if (color.r > 1.5) vColor.rgb = vec3(0.96, 0.93, 0.84);`)},ge.customProgramCacheKey=()=>"minis-token-rim";let ee=tt(256),ae=tt(64);function tt(R){const B=new ta(zt,ge,R);return B.instanceColor=new Ws(new Float32Array(R*3),3),B.instanceMatrix.setUsage(Ti),B.instanceColor.setUsage(Ti),B.frustumCulled=!1,B.count=0,n.add(B),B}function at(R,B){if(B<=R.instanceMatrix.count)return R;n.remove(R),R.dispose();let V=R.instanceMatrix.count;for(;V<B;)V*=2;return tt(V)}const Rt=new Map;function Yt(R){let B=Rt.get(R);return B||(B=new qt(R),Rt.set(R,B)),B}const It=new xe,$t=new I,we=new I,st=new kn;let ut=0;function dt(R,B,V,ot,Ut,vt,te,se,_){It.compose($t.set(V,ot,Ut),st,we.set(vt,te,se)),R.setMatrixAt(B,It),R.setColorAt(B,Yt(_))}const pt=new Js(1.6,.8),yt=256,Vt=new Map;function Wt(R){let B=Vt.get(R);return B||(B=new ta(pt,jt(R),yt),B.instanceMatrix.setUsage(Ti),B.frustumCulled=!1,B.renderOrder=10,B.count=0,n.add(B),Vt.set(R,B),B)}const Kt=new Map;function jt(R){let B=Kt.get(R);if(B)return B;const V=document.createElement("canvas");V.width=128,V.height=64;const ot=V.getContext("2d");ot.clearRect(0,0,128,64),ot.fillStyle="rgba(20, 18, 28, 0.88)",ot.beginPath(),ot.roundRect(4,4,120,56,14),ot.fill(),ot.strokeStyle="rgba(242, 226, 190, 0.85)",ot.lineWidth=3,ot.stroke(),ot.fillStyle="#fff4d6",ot.font="bold 40px ui-sans-serif, system-ui, sans-serif",ot.textAlign="center",ot.textBaseline="middle",ot.fillText(R,64,34);const Ut=new Xd(V);return Ut.colorSpace=cn,Ut.minFilter=Xe,B=new jr({map:Ut,transparent:!0,depthTest:!1,depthWrite:!1}),Kt.set(R,B),B}function D(R=!1){for(const B of d){for(const V of B.members)V.tray=null,V.seat=-1;R&&(n.remove(B.inst.root),B.inst.dispose())}R&&(d.length=0)}function Ee(R,B,V){if(D(R==="near"),R==="near")return;const ot=40075016686e-3*Math.cos(V*Math.PI/180)/(512*2**B),Ut=(R==="far"?sx:ix)*ot,vt=new Map;for(const _ of l){if(!_.family||_.family==="attach"||!_.shown||_.dying)continue;const L=(_.mx-p)/E,k=(_.my-y)/E,N=Math.floor(L/Ut),z=Math.floor(k/Ut),ft=`${_.family}|${N}|${z}`;let _t=vt.get(ft);_t||(_t={family:_.family,cx:N,cz:z,members:[],x:0,z:0,into:null},vt.set(ft,_t)),_t.members.push(_),_t.x+=L,_t.z+=k}for(const _ of vt.values())_.x/=_.members.length,_.z/=_.members.length;const te=_=>{for(;_.into;)_=_.into;return _};for(const _ of vt.values())for(let L=-1;L<=1;L++)for(let k=-1;k<=1;k++){if(!k&&!L)continue;const N=vt.get(`${_.family}|${_.cx+k}|${_.cz+L}`);if(!N)continue;const z=te(_),ft=te(N);if(z!==ft&&Math.hypot(z.x-ft.x,z.z-ft.z)<Ut*.8){const[_t,Mt]=z.members.length>=ft.members.length?[z,ft]:[ft,z],Dt=_t.members.length,Bt=Mt.members.length;_t.x=(_t.x*Dt+Mt.x*Bt)/(Dt+Bt),_t.z=(_t.z*Dt+Mt.z*Bt)/(Dt+Bt),_t.members.push(...Mt.members),Mt.into=_t}}const se=new Map;for(const _ of d)se.set(_.sig,_);d.length=0;for(const _ of vt.values()){if(_.into||_.members.length<2)continue;_.members.sort((N,z)=>(Eh[z.kind]??0)-(Eh[N.kind]??0)||(N.key<z.key?-1:1));const L=`${_.family}|${_.members.map(N=>N.key).join(",")}`;let k=se.get(L);if(k)se.delete(L),k.members=_.members,k.x=_.x,k.z=_.z,k.mx=_.x*E+p,k.my=_.z*E+y;else{const N=_.members.length,z=N>99?"99+":String(N),ft=$a(P("tray",go));ft.root.position.set(_.x,0,_.z),n.add(ft.root),k={sig:L,family:_.family,members:_.members,mx:_.x*E+p,my:_.z*E+y,x:_.x,z:_.z,inst:ft,label:z}}_.members.forEach((N,z)=>{N.tray=k,N.seat=z<Sh?z:-1}),d.push(k)}for(const _ of se.values())n.remove(_.inst.root),_.inst.dispose()}const ce={front:"z",build(R){R.base(77,uo,fo)},animate(){}};zr.tray=ce;const A={wet:0,rain:0,snow:0,snowing:0,overcast:0,fog:0,wind:0};let v=0;function H(R){const B=R.parts.snow;if(!B)return;const V=v>.02;B.visible!==V&&(B.visible=V),V&&(B.scale.y=.35+2.8*v)}function Y(R){Object.assign(A,R),v=Math.min(1,Math.max(A.snow,.3*A.snowing)),ov(A.wind),s.setWeather(A)}function j(R,B,V){const ot=$a(P(B,V));return ot.root.position.copy(R.root.position),ot.root.rotation.copy(R.root.rotation),ot.root.scale.copy(R.root.scale),ot.root.visible=R.root.visible,n.remove(R.root),R.dispose(),n.add(ot.root),ot}function mt(R){if(R===Rs())return;const B=[...u.values()];u.clear(),ev(R);for(const V of l)V.inst=j(V.inst,V.kind,V.color);for(const V of d)V.inst=j(V.inst,"tray",go);for(const V of B)V.root.traverse(ot=>ot.isMesh&&ot.geometry.dispose())}let xt="near",$="near",K=10,wt=0,Gt=0,At=0,Et=0;const Ot=new I,Xt=new _n(0,0,0,"YXZ");function Zt(R){var ie;const B=Gt?Math.min(250,R-Gt):0;Gt=R;const V=i.getZoom(),ot=i.getCenter(),Ut=ei.MercatorCoordinate.fromLngLat(ot);Math.hypot(Ut.x-p,Ut.y-y)/E>vx&&w(ot.lng,ot.lat);const vt=40075016686e-3*Math.cos(ot.lat*Math.PI/180)/(512*2**V);K=Math.min(tx,Math.max(jv,co*vt)),$=V>=Mh?"near":V>=nx?"mid":"far",xt=$==="near"?"near":"mid";const te=Gl(),se=te?ei.MercatorCoordinate.fromLngLat([te.lng,te.lat]):null,_=R/1e3/yx,L=$==="far",k=[];for(const X of l)(X.kind==="extractor"||X.kind==="nexus")&&k.push(X);const N=(X,Ct)=>{const pe=(X.mx-p)/E,me=(X.my-y)/E;for(const re of k)if(Math.hypot((re.mx-p)/E-pe,(re.my-y)/E-me)<Ct)return re;return null};let z=!1;for(const X of l){const Ct=!($!=="near"&&X.family==="attach"&&N(X,K*ux)!==null);Ct!==X.shown&&(X.shown=Ct,z=!0)}const ft=Math.round(V*2)/2;(g||z||ft!==S||$!==m)&&(Ee($,ft,ot.lat),g=!1,S=ft,m=$,Nt());const _t=B?1-Math.exp(-B/cx):1;wt=0,At=0,Et=0,ut=0,ee=at(ee,l.length);const Mt=e.projectionMatrix;s.setCamera(i.getPitch(),i.getBearing()),s.begin(R,l.length*3+d.length,(l.length+d.length)*2);const Dt=[];for(const X of l){const Ct=X.inst.root,pe=(kr[X.kind]??1)*X.scale;let me=K*pe,re=(X.mx-p)/E,oe=(X.my-y)/E,Le=X.shown;if(X.dying&&(L||!X.fx||R>=X.fx.t0+X.fx.dur)){Dt.push(X),Ct.visible=!1;continue}if(X.tray)if(Et++,X.seat<0||L)Le=!1;else{const Te=ax[Math.min(Sh,X.tray.members.length)],[ue,Ce]=Te[X.seat];re=X.tray.x+ue*K,oe=X.tray.z+Ce*K,me=K*rx*Math.min(1.15,pe)}else if(X.family==="mover"){const Te=N(X,K*hx);if(Te){const ue=(X.heading??180)*Math.PI/180;re=(Te.mx-p)/E-Math.sin(ue)*K*wh,oe=(Te.my-y)/E+Math.cos(ue)*K*wh}}X.tx=re,X.tz=oe;const Ft=re-X.dx,Ge=oe-X.dz;if(Math.abs(Ft)<yh&&Math.abs(Ge)<yh?(X.dx=re,X.dz=oe):(X.dx+=Ft*_t,X.dz+=Ge*_t,Nt()),Ct.position.set(X.dx,0,X.dz),Ot.copy(Ct.position).applyMatrix4(Mt),X.onScreen=Ot.x>=-1.1&&Ot.x<=1.1&&Ot.y>=-1.1&&Ot.y<=1.1&&Ot.z>=-1&&Ot.z<=1,Le&&X.onScreen&&At++,L){if(Ct.visible=!1,Le){const Te=me*po,ue=bh[X.kind]??X.color;dt(ee,ut++,X.dx,0,X.dz,Te,K*po,Te,ue),X.onScreen&&(s.shadow(X.dx,X.dz,Te,Te,0,0),s.pool(X.dx,X.dz,.02*Te,Te*1.35,ue,Ah,X.id))}continue}if(Ct.visible=Le,!Le)continue;Ct.scale.setScalar(me),X.inst.setLod(xt),H(X.inst);let he=0,He=0,Ye=0;if(X.heading!==null){const Te=X.heading*Math.PI/180;He=Math.sin(Te),Ye=-Math.cos(Te)}else se&&(He=(se.x-X.mx)/E,Ye=(se.y-X.my)/E);(He!==0||Ye!==0)&&(he=zr[X.kind].front==="z"?Math.atan2(He,Ye):Math.atan2(-Ye,He)),Ct.rotation.y=he;const xn=u.get(T(X.kind,X.color));if(X.onScreen||X.fx){const Te=zr[X.kind];Te.animate(X.inst,(_*X.rate+X.phase)%1,X.state);let ue=1,Ce=-1;if(X.fx){const Je=(R-X.fx.t0)/X.fx.dur;Je>=1?X.fx=null:(Ce=ht(X,X.fx,Math.max(0,Je),me,R),Ce>=0&&(ue=1+1.6*Math.sin(Math.PI*Ce),(ie=Te.pulse)==null||ie.call(Te,X.inst,Ce,X.state)),Nt())}const Ln=(X.tray?.2*K:0)+.009*me,Ae=Math.cos(he),Mn=Math.sin(he);if(xn.lights.forEach((Je,pi)=>{const[zl,Iu,kl]=Je.pos,Du=(Te.poolGain?Te.poolGain(X.state,pi):1)*ue;s.poolFor(X.dx+(Ae*zl+Mn*kl)*me,Ln,X.dz+(-Mn*zl+Ae*kl)*me,me,Je.color,Je.strength*Du,Iu,X.id*7+pi)}),!X.tray){const[Je,pi]=gx[X.kind]??_x;s.shadow(X.dx,X.dz,me*Je,me*pi,he,Th(X.kind))}}wt+=xn.tris}ee.count=ut,ut&&(ee.instanceMatrix.needsUpdate=!0,ee.instanceColor.needsUpdate=!0),ge.color.setScalar(1-.24*Z_()),ae=at(ae,d.length);let Bt=0;for(const X of Vt.values())X.count=0;Xt.set(-(Math.PI/2-i.getPitch()*Math.PI/180),-(i.getBearing()*Math.PI)/180,0),st.setFromEuler(Xt);for(const X of d){const[Ct,pe]=lx[X.family]??[0,0];if(X.x=(X.mx-p)/E+Ct*K,X.z=(X.my-y)/E+pe*K,X.inst.root.position.set(X.x,0,X.z),X.inst.root.scale.setScalar(K),X.inst.root.visible=!L,L||H(X.inst),L){const re=X.members[0],oe=K*mo,Le=bh[re.kind]??re.color;dt(ae,Bt++,X.x,0,X.z,oe,K*po*1.6,oe,Le),s.shadow(X.x,X.z,oe,oe,0,0),s.pool(X.x,X.z,.02*oe,oe*1.3,Le,Ah*1.3,X.members.length)}else wt+=u.get(T("tray",go)).tris,s.shadow(X.x,X.z,K*uo,K*fo,0,Th("tray"));const me=Wt(X.label);if(me.count<yt){const re=K*(L?ox:1);It.compose($t.set(X.x,(L?.55:1.05)*K,X.z+(L?-.35:-.55)*K),st,we.set(re,re,re)),me.setMatrixAt(me.count++,It)}}st.identity();for(const X of Vt.values())X.visible=X.count>0,X.count&&(X.instanceMatrix.needsUpdate=!0);ae.count=Bt,Bt&&(ae.instanceMatrix.needsUpdate=!0,ae.instanceColor.needsUpdate=!0),s.end(),r.tick(R),r.active()&&Nt();for(const X of Dt)U(X)}let O=!1,bt=0,it=performance.now(),Tt=30,Lt=0;function ct(R){if(!O)return;const B=R-it>Sx;Tt=B?10:30;const V=B?Mx:xx;R-bt>=V-1&&(bt=R,Lt++,Zt(R),i.triggerRepaint()),requestAnimationFrame(ct)}function kt(){const R=l.length>0&&!document.hidden&&!o;R&&!O?(O=!0,requestAnimationFrame(ct)):R||(O=!1)}const Nt=()=>{it=performance.now()};i.on("move",Nt);const Me=i.getCanvas();Me.addEventListener("pointerdown",Nt,{passive:!0}),document.addEventListener("visibilitychange",kt);const _e=120,tn=new Float32Array(_e),en=new Float32Array(_e);let ui=0,Ui=0,di=0,Fi=0,pn=null,ps=0;function ms(){const R=Ui;let B=0,V=0;const ot=[];for(let Ut=0;Ut<R;Ut++)B+=tn[Ut],V+=en[Ut],ot.push(en[Ut]);return ot.sort((Ut,vt)=>Ut-vt),{count:l.length,fps:R?Math.round(1e3/(B/R)):0,avgMs:R?+(V/R).toFixed(2):0,p95Ms:R?+ot[Math.min(R-1,Math.floor(R*.95))].toFixed(2):0,draws:Fi,onScreen:At,tris:Math.round(wt),lod:xt,tier:$,trays:d.length,trayed:Et,tokens:ut,zoom:+i.getZoom().toFixed(2),night:Jc(),targetFps:Tt,ticks:Lt,failed:o,light:s.stats(),fx:r.stats(),dying:l.reduce((Ut,vt)=>Ut+(vt.dying?1:0),0)}}function Pn(R,B=!1){if(!B&&R-ps<500)return;ps=R,pn||(pn=document.createElement("div"),pn.id="minis-hud",pn.style.cssText="position:fixed;right:8px;top:8px;z-index:20;pointer-events:none;text-align:right;font:10px/1.35 ui-monospace,Menlo,monospace;color:#fff;background:rgba(0,0,0,.55);padding:3px 6px;border-radius:6px;white-space:pre;max-width:46vw",document.body.appendChild(pn));const V=ms();pn.style.display=V.count?"":"none",pn.textContent=`minis ${V.count} · ${V.fps} fps (target ${V.targetFps})
frame ${V.avgMs} ms avg · ${V.p95Ms} ms p95
${V.draws} draws / ${V.onScreen} on screen · ${(V.tris/1e3).toFixed(1)}k tris · ${V.tier} · z${V.zoom} · ${V.night?"night":"day"}
${V.trays} trays (${V.trayed} riding) · ${V.tokens} tokens
${V.light.pools} pools · ${V.light.shadows} shadows · dark ${V.light.darkness.toFixed(2)} · sun ${Math.round(V.light.sunAzDeg)}°/${V.light.sunAltDeg>0?"+":""}${Math.round(V.light.sunAltDeg)}° · moon ${Math.round(V.light.moon*100)}%
${V.fx.effects} fx · ${V.fx.particles} particles · ${V.dying} leaving
${Rs()} · wet ${V.light.weather.wet.toFixed(2)} · snow ${V.light.weather.snow.toFixed(2)} · cloud ${V.light.weather.overcast.toFixed(2)} · wind ${V.light.weather.wind.toFixed(2)}`}function Oi(R,B){o||(o=!0,console.error(`[minis] ${R} failed — falling back to circles`,B),setTimeout(()=>{try{i.getLayer(Is)&&i.removeLayer(Is)}catch{}for(const V of h)V()},0),kt())}const gs={id:Is,type:"custom",renderingMode:"3d",onAdd(R,B){try{a=new B_({canvas:Me,context:B,antialias:!0}),a.autoClear=!1,a.setPixelRatio(1)}catch(V){Oi("renderer",V)}},onRemove(){a==null||a.dispose(),a=null},render(R,B){var Ut;if(!a||o||l.length===0)return;const V=performance.now();try{const vt=((Ut=B.defaultProjectionData)==null?void 0:Ut.mainMatrix)??B.modelViewProjectionMatrix;e.projectionMatrix.fromArray(vt).multiply(M),e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),a.resetState(),a.setViewport(0,0,R.drawingBufferWidth,R.drawingBufferHeight),a.render(t,e),Fi=a.info.render.calls}catch(vt){Oi("render",vt);return}const ot=performance.now();di&&(tn[ui]=ot-di,en[ui]=ot-V,ui=(ui+1)%_e,Ui=Math.min(_e,Ui+1)),di=ot,Pn(ot)}};i.getLayer(xh)?i.addLayer(gs,xh):i.addLayer(gs);function _s(R){const B=new ei.MercatorCoordinate(R.x*E+p,R.z*E+y,0).toLngLat(),V=i.project(B);return{family:R.family,count:R.members.length,lng:B.lng,lat:B.lat,x:V.x,y:V.y,keys:R.members.map(ot=>ot.key)}}function fi(R,B){const V=ei.MercatorCoordinate.fromLngLat([R,B]);return[(V.x-p)/E,(V.y-y)/E]}const Bi=R=>K*(kr[R.kind]??1)*R.scale;return{set(R,B,V,ot,Ut={}){const{color:vt,heading:te=null,scale:se=1,state:_=1,fresh:L=!1}=Ut,k=wr(vt??ex);let N=c.get(R);if(N&&(N.kind!==B||N.color!==k)&&(U(N),N=void 0),!N){N=q(R,B,V,ot,k,G(R,0)),N.heading=te,N.scale=se,N.state=_,L&&Z(N),nt();return}const z=Q(N,V,ot);N.heading=te,N.scale=se,N.state=_,z&&Nt(),kt(),i.triggerRepaint()},remove(R){const B=c.get(R);B&&(J(B),nt())},collect(R){const B=c.get(R);if(!B||$==="far")return;const V=performance.now(),ot=Bi(B);W(B,"pulse",V),r.burst(B.dx,.7*ot,B.dz,ot,B.color,V),nt()},pulse(R,B){const V=c.get(R);if(!V||$==="far")return;const ot=performance.now(),Ut=Bi(V),vt=B?wr(B):V.color;W(V,"pulse",ot,0,0,vt),r.pulse(V.dx,V.dz,Ut,vt,ot),nt()},arrive(R){const B=c.get(R);!B||$==="far"||(r.puff(B.dx,B.dz,Bi(B),performance.now()),nt())},lunge(R,B,V,ot,Ut=6){if($==="far")return 0;const[vt,te]=fi(R,B),[se,_]=fi(V,ot),L=performance.now();let k=0;for(const N of l){if(N.dying||!Dl(N.kind))continue;const z=(N.mx-p)/E,ft=(N.my-y)/E;if(Math.hypot(z-vt,ft-te)>Ut)continue;const _t=se-z,Mt=_-ft,Dt=Math.hypot(_t,Mt)||1;W(N,"lunge",L,_t/Dt,Mt/Dt),k++}return k&&nt(),k},fxStats:()=>r.stats(),probeParts(R){var ot;const B=c.get(R);if(!B)return null;const V={};for(const[Ut,vt]of Object.entries(B.inst.parts))V[Ut]=[vt.position.x,vt.position.y,vt.position.z,vt.rotation.x,vt.rotation.y,vt.rotation.z,vt.scale.x,vt.scale.y,vt.scale.z,vt.visible?1:0].map(te=>+te.toFixed(5));return{phase:B.phase,rate:B.rate,state:B.state,fx:((ot=B.fx)==null?void 0:ot.kind)??null,y:B.inst.root.position.y,parts:V}},removePrefix(R){rt(R),nt()},has:R=>c.has(R),stress(R){rt(ho);const B=Gl()??i.getCenter(),V=Ni(1234),ot=["extractor","extractor","caravan","wraith","extractor","rift"];for(let Ut=0;Ut<R;Ut++){const vt=Ut===0?"nexus":Ut===1?"hero":ot[Ut%ot.length],te=V()*lt,se=Ut===1?30:40+Math.sqrt(V())*320,_=B.lat+se*Math.cos(te)/111320,L=B.lng+se*Math.sin(te)/(111320*Math.cos(B.lat*Math.PI/180));q(`${ho}${Ut}`,vt,L,_,wr(lo[Math.floor(V()*lo.length)]),V())}Ui=0,ui=0,di=0,nt()},place(R,B,V,ot){const Ut=q(`${ho}place:${f}`,R,B,V,wr(ot??lo[3]),0);return Z(Ut),nt(),Ut.id},probe(R){const B=l.find(N=>N.id===R);if(!B)return null;const V=Me.clientWidth,ot=Me.clientHeight,Ut=N=>[(N.x+1)/2*V,(1-N.y)/2*ot],vt=B.inst.root.position,te=new I(vt.x,0,vt.z).applyMatrix4(e.projectionMatrix),se=new I(vt.x+K*1.02,0,vt.z).applyMatrix4(e.projectionMatrix),_=B.lng+K*1.02/(111320*Math.cos(B.lat*Math.PI/180)),L=i.project([B.lng,B.lat]),k=i.project([_,B.lat]);return{three:[...Ut(te),...Ut(se)],map:[L.x,L.y,k.x,k.y],sizeM:K}},counts(){const R=Object.fromEntries(Qv.map(B=>[B,0]));for(const B of l)R[B.kind]++;return R},trays:()=>d.map(_s),probeKey(R){const B=c.get(R);if(!B)return null;const V=Me.clientWidth,ot=Me.clientHeight;Ot.set(B.dx,0,B.dz).applyMatrix4(e.projectionMatrix);const Ut=i.project([B.lng,B.lat]),vt=B.shown&&(!B.tray||B.seat>=0);return{x:(Ot.x+1)/2*V,y:(1-Ot.y)/2*ot,ax:Ut.x,ay:Ut.y,shown:vt,tray:B.tray?B.tray.members.length:0,seat:B.seat,tier:$}},trayAt(R,B){const V=i.getZoom();if($==="near"||!d.length)return null;const ot=co*($==="far"?mo*1.3:uo*1.1),Ut=co*($==="far"?mo*.9:fo*.8);let vt=null,te=1/0;for(const se of d){const _=i.project(new ei.MercatorCoordinate(se.x*E+p,se.z*E+y,0).toLngLat()),L=(R-_.x)/ot,k=B-_.y,N=k>0?k/Ut:k/(Ut*2.6),z=L*L+N*N;z<=1&&z<te&&(te=z,vt=se)}return vt?{..._s(vt),zoom:Math.min(18,Math.max(Mh+.25,V+2.5))}:null},setSky(R){s.setSky(R),l.length&&Zt(performance.now()),i.triggerRepaint()},setWeather(R){Y(R),l.length&&Zt(performance.now()),i.triggerRepaint()},getWeather:()=>({...A}),setSeason(R){R!==Rs()&&(mt(R),nt())},getSeason:Rs,setNight(R){s.setSky({darkness:R?1:0}),l.length&&Zt(performance.now()),i.triggerRepaint()},isNight:Jc,stats:ms,lightStats:()=>s.stats(),drawHistogram:()=>{const R={};return t.traverse(B=>{B.onAfterRender=()=>{var ot;const V=`${B.type}:${B.name||((ot=B.material)==null?void 0:ot.constructor.name)}`;R[V]=(R[V]??0)+1}}),new Promise(B=>{i.once("render",()=>setTimeout(()=>B({hist:R,calls:a==null?void 0:a.info.render.calls}),50)),i.triggerRepaint()})},onFail(R){h.push(R),o&&R()},dispose(){rt(""),D(!0),O=!1,i.off("move",Nt),Me.removeEventListener("pointerdown",Nt),document.removeEventListener("visibilitychange",kt),pn==null||pn.remove(),s.dispose(),r.dispose(),i.getLayer(Is)&&i.removeLayer(Is)}}}export{Is as LAYER_ID,Ix as initMinisLayer};
