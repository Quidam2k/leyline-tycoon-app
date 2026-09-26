var jh=Object.defineProperty;var eu=(i,e,t)=>e in i?jh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var dt=(i,e,t)=>eu(i,typeof e!="symbol"?e+"":e,t);import{g as yl,m as mi}from"./index-BwzbwDa-.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="186",tu=0,El=1,nu=2,Ts=1,iu=2,br=3,wi=0,cn=1,Mn=2,Qn=0,Rr=1,Ja=2,wl=3,bl=4,ru=5,Ji=100,su=101,au=102,ou=103,lu=104,cu=200,hu=201,uu=202,du=203,th=204,nh=205,fu=206,pu=207,mu=208,gu=209,_u=210,vu=211,xu=212,Mu=213,Su=214,Qa=0,ja=1,eo=2,Ir=3,to=4,no=5,io=6,ro=7,ih=0,yu=1,Eu=2,zn=0,rh=1,sh=2,ah=3,oh=4,lh=5,ch=6,hh=7,uh=300,bi=301,rr=302,$s=303,Zs=304,Ws=306,so=1e3,Kn=1001,ao=1002,$t=1003,wu=1004,Wr=1005,Zt=1006,Ks=1007,yi=1008,mn=1009,dh=1010,fh=1011,Nr=1012,Zo=1013,kn=1014,Cn=1015,Gn=1016,Ko=1017,Jo=1018,Ur=1020,ph=35902,mh=35899,gh=1021,_h=1022,Pn=1023,ei=1026,Ei=1027,Qo=1028,jo=1029,Ti=1030,el=1031,tl=1033,As=33776,Rs=33777,Cs=33778,Ps=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Is=37490,_o=37491,vo=37808,xo=37809,Mo=37810,So=37811,yo=37812,Eo=37813,wo=37814,bo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Do=36492,Io=36494,No=36495,Uo=36283,Fo=36284,Ns=36285,Oo=36286,bu=3200,Bo=0,Tu=1,pi="",pn="srgb",Us="srgb-linear",Fs="linear",bt="srgb",Js=7680,Au=519,Ru=512,Cu=513,Pu=514,nl=515,Lu=516,Du=517,il=518,Iu=519,Nu=35044,Cr=35048,Tl="300 es",Bn=2e3,Fr=2001;function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fu(){const i=Os("canvas");return i.style.display="block",i}const Al={};function Rl(...i){const e="THREE."+i.shift();console.log(e,...i)}function vh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=vh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function vt(...i){i=vh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tr(...i){const e=i.join(" ");e in Al||(Al[e]=!0,je(...i))}function Ou(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Bu={[Qa]:ja,[eo]:io,[to]:ro,[Ir]:no,[ja]:Qa,[io]:eo,[ro]:to,[no]:Ir};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,zo=180/Math.PI;function lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function zu(i,e){return(i%e+e)%e}function js(i,e,t){return(1-t)*i+t*e}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gl=class gl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gl.prototype.isVector2=!0;let _e=gl;class ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],d=s[a+1],g=s[a+2],y=s[a+3];if(f!==y||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*y;m<0&&(u=-u,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+y*o;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],u=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),u=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _l=class _l{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_l.prototype.isVector3=!0;let L=_l;const ea=new L,Cl=new ii,vl=class vl{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],y=r[0],m=r[3],p=r[6],S=r[1],A=r[4],x=r[7],w=r[2],E=r[5],R=r[8];return s[0]=a*y+o*S+l*w,s[3]=a*m+o*A+l*E,s[6]=a*p+o*x+l*R,s[1]=c*y+h*S+f*w,s[4]=c*m+h*A+f*E,s[7]=c*p+h*x+f*R,s[2]=u*y+d*S+g*w,s[5]=u*m+d*A+g*E,s[8]=u*p+d*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,g=t*f+n*u+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ta.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vl.prototype.isMatrix3=!0;let tt=vl;const ta=new tt,Pl=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){const i={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?Fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Us]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const ft=ku();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Gu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Os("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hu=0;class rl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Vu=0;const ia=new L;class en extends Ri{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Kn,r=Kn,s=Zt,a=yi,o=Pn,l=mn,c=en.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=lr(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=uh;en.DEFAULT_ANISOTROPY=1;const xl=class xl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(d+1)/2,w=(p+1)/2,E=(h+u)/4,R=(f+y)/4,v=(g+m)/4;return A>x&&A>w?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=E/n,s=R/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=v/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xl.prototype.isVector4=!0;let Ft=xl;class Wu extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new en(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new rl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xu extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vs=class Vs{constructor(e,t,n,r,s,a,o,l,c,h,f,u,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,f,u,d,g,y,m)}set(e,t,n,r,s,a,o,l,c,h,f,u,d,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,d=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,y=c*f;t[0]=u+y*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-y*f}else if(e.order==="XZY"){const u=a*l,d=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qu,e,Yu)}lookAt(e,t,n){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),li.crossVectors(n,un),li.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),li.crossVectors(n,un)),li.normalize(),Xr.crossVectors(un,li),r[0]=li.x,r[4]=Xr.x,r[8]=un.x,r[1]=li.y,r[5]=Xr.y,r[9]=un.y,r[2]=li.z,r[6]=Xr.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],A=n[7],x=n[11],w=n[15],E=r[0],R=r[4],v=r[8],T=r[12],C=r[1],I=r[5],O=r[9],V=r[13],D=r[2],G=r[6],$=r[10],X=r[14],se=r[3],Y=r[7],ne=r[11],re=r[15];return s[0]=a*E+o*C+l*D+c*se,s[4]=a*R+o*I+l*G+c*Y,s[8]=a*v+o*O+l*$+c*ne,s[12]=a*T+o*V+l*X+c*re,s[1]=h*E+f*C+u*D+d*se,s[5]=h*R+f*I+u*G+d*Y,s[9]=h*v+f*O+u*$+d*ne,s[13]=h*T+f*V+u*X+d*re,s[2]=g*E+y*C+m*D+p*se,s[6]=g*R+y*I+m*G+p*Y,s[10]=g*v+y*O+m*$+p*ne,s[14]=g*T+y*V+m*X+p*re,s[3]=S*E+A*C+x*D+w*se,s[7]=S*R+A*I+x*G+w*Y,s[11]=S*v+A*O+x*$+w*ne,s[15]=S*T+A*V+x*X+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*d-c*u,A=o*d-c*f,x=o*u-l*f,w=a*d-c*h,E=a*u-l*h,R=a*f-o*h;return t*(y*S-m*A+p*x)-n*(g*S-m*w+p*E)+r*(g*A-y*w+p*R)-s*(g*x-y*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*o-n*a,A=t*l-r*a,x=t*c-s*a,w=n*l-r*o,E=n*c-s*o,R=r*c-s*l,v=h*y-f*g,T=h*m-u*g,C=h*p-d*g,I=f*m-u*y,O=f*p-d*y,V=u*p-d*m,D=S*V-A*O+x*I+w*C-E*T+R*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/D;return e[0]=(o*V-l*O+c*I)*G,e[1]=(r*O-n*V-s*I)*G,e[2]=(y*R-m*E+p*w)*G,e[3]=(u*E-f*R-d*w)*G,e[4]=(l*C-a*V-c*T)*G,e[5]=(t*V-r*C+s*T)*G,e[6]=(m*x-g*R-p*A)*G,e[7]=(h*R-u*x+d*A)*G,e[8]=(a*O-o*C+c*v)*G,e[9]=(n*C-t*O-s*v)*G,e[10]=(g*E-y*x+p*S)*G,e[11]=(f*x-h*E-d*S)*G,e[12]=(o*T-a*I-l*v)*G,e[13]=(t*I-n*T+r*v)*G,e[14]=(y*A-g*w-m*S)*G,e[15]=(h*w-f*A+u*S)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,g=s*f,y=a*h,m=a*f,p=o*f,S=l*c,A=l*h,x=l*f,w=n.x,E=n.y,R=n.z;return r[0]=(1-(y+p))*w,r[1]=(d+x)*w,r[2]=(g-A)*w,r[3]=0,r[4]=(d-x)*E,r[5]=(1-(u+p))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(g+A)*R,r[9]=(m-S)*R,r[10]=(1-(u+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),l=Ui.set(r[8],r[9],r[10]).length();s<0&&(a=-a),En.copy(this);const c=1/a,h=1/o,f=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Bn,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let g,y;if(l)g=s/(a-s),y=a*s/(a-s);else if(o===Bn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Fr)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Bn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,y;if(l)g=1/(a-s),y=a/(a-s);else if(o===Bn)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Fr)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vs.prototype.isMatrix4=!0;let mt=Vs;const Ui=new L,En=new mt,qu=new L(0,0,0),Yu=new L(1,1,1),li=new L,Xr=new L,un=new L,Dl=new mt,Il=new ii;class Dn{constructor(e=0,t=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $u=0;const Nl=new L,Fi=new ii,Wn=new mt,qr=new L,dr=new L,Zu=new L,Ku=new ii,Ul=new L(1,0,0),Fl=new L(0,1,0),Ol=new L(0,0,1),Bl={type:"added"},Ju={type:"removed"},Oi={type:"childadded",child:null},ra={type:"childremoved",child:null};class Kt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new L,t=new Dn,n=new ii,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new tt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(dr,qr,this.up):Wn.lookAt(qr,dr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new L(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qi extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=zu(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=aa(a,s,e+1/3),this.g=aa(a,s,e),this.b=aa(a,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=pn){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return ft.workingToColorSpace(jt.copy(this),e),Math.round(lt(jt.r*255,0,255))*65536+Math.round(lt(jt.g*255,0,255))*256+Math.round(lt(jt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(jt.copy(this),t);const n=jt.r,r=jt.g,s=jt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=pn){ft.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,r=jt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Yr);const n=js(ci.h,Yr.h,t),r=js(ci.s,Yr.s,t),s=js(ci.l,Yr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Je;Je.NAMES=Sh;class ju extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new L,Xn=new L,oa=new L,qn=new L,Bi=new L,zi=new L,zl=new L,la=new L,ca=new L,ha=new L,ua=new Ft,da=new Ft,fa=new Ft;class Rn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wn.subVectors(r,t),Xn.subVectors(n,t),oa.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Xn),l=wn.dot(oa),c=Xn.dot(Xn),h=Xn.dot(oa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ua,s.x),a.addScaledVector(da,s.y),a.addScaledVector(fa,s.z),a}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Xn.subVectors(e,t),wn.cross(Xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,n),zi.subVectors(s,n),la.subVectors(e,n);const l=Bi.dot(la),c=zi.dot(la);if(l<=0&&c<=0)return t.copy(n);ca.subVectors(e,r);const h=Bi.dot(ca),f=zi.dot(ca);if(h>=0&&f<=h)return t.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);ha.subVectors(e,s);const d=Bi.dot(ha),g=zi.dot(ha);if(g>=0&&d<=g)return t.copy(s);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(zi,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return zl.subVectors(s,r),o=(f-h)/(f-h+(d-g)),t.copy(r).addScaledVector(zl,o);const p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ci{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Zr.subVectors(this.max,fr),ki.subVectors(e.a,fr),Gi.subVectors(e.b,fr),Hi.subVectors(e.c,fr),hi.subVectors(Gi,ki),ui.subVectors(Hi,Gi),gi.subVectors(ki,Hi);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-gi.z,gi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,gi.z,0,-gi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-gi.y,gi.x,0];return!pa(t,ki,Gi,Hi,Zr)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,ki,Gi,Hi,Zr))?!1:(Kr.crossVectors(hi,ui),t=[Kr.x,Kr.y,Kr.z],pa(t,ki,Gi,Hi,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,$r=new Ci,ki=new L,Gi=new L,Hi=new L,hi=new L,ui=new L,gi=new L,fr=new L,Zr=new L,Kr=new L,_i=new L;function pa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){_i.fromArray(i,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gt=new L,Jr=new _e;let ed=0;class an extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yh extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eh extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const td=new Ci,pr=new L,ma=new L;class Gr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(ma)),this.expandByPoint(pr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nd=0;const xn=new mt,ga=new Kt,Vi=new L,dn=new Ci,mr=new Ci,Xt=new L;class qt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Eh:yh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(dn.min,mr.min),dn.expandByPoint(Xt),Xt.addVectors(dn.max,mr.max),dn.expandByPoint(Xt)):(dn.expandByPoint(mr.min),dn.expandByPoint(mr.max))}dn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),Xt.add(Vi)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new L,l[v]=new L;const c=new L,h=new L,f=new L,u=new _e,d=new _e,g=new _e,y=new L,m=new L;function p(v,T,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(y),o[T].add(y),o[C].add(y),l[v].add(m),l[T].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,T=S.length;v<T;++v){const C=S[v],I=C.start,O=C.count;for(let V=I,D=I+O;V<D;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new L,x=new L,w=new L,E=new L;function R(v){w.fromBufferAttribute(r,v),E.copy(w);const T=o[v];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),x.crossVectors(E,T);const I=x.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,I)}for(let v=0,T=S.length;v<T;++v){const C=S[v],I=C.start,O=C.count;for(let V=I,D=I+O;V<D;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new an(u,h,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new L,id=new L,rd=new tt;class fi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_a.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(_a),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rd.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sd=0;class Hr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Rr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $n=new L,va=new L,Qr=new L,jr=new L;class ad{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){va.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(va);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=jr.dot(this.direction),l=-jr.dot(Qr),c=jr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=s*h,f>=0)if(u>=-g)if(u<=g){const y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(va).addScaledVector(Qr,u),d}intersectSphere(e,t){if(e.radius<0)return null;$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,x=Math.abs(l),w=Math.abs(c),E=Math.abs(h);let R,v,T,C,I,O,V,D,G,$,X,se;if(x>=w&&x>=E?(T=l,O=f,G=g,se=p,l>=0?(R=c,v=h,C=u,I=d,V=y,D=m,$=S,X=A):(R=h,v=c,C=d,I=u,V=m,D=y,$=A,X=S)):w>=E?(T=c,O=u,G=y,se=S,c>=0?(R=h,v=l,C=d,I=f,V=m,D=g,$=A,X=p):(R=l,v=h,C=f,I=d,V=g,D=m,$=p,X=A)):(T=h,O=d,G=m,se=A,h>=0?(R=l,v=c,C=f,I=u,V=g,D=y,$=p,X=S):(R=c,v=l,C=u,I=f,V=y,D=g,$=S,X=p)),T===0)return null;const Y=R/T,ne=v/T,re=1/T,Ge=C-Y*O,Fe=I-ne*O,ht=V-Y*G,st=D-ne*G,ut=$-Y*se,K=X-ne*se,ee=ut*st-K*ht,Te=Ge*K-Fe*ut,$e=ht*Fe-st*Ge;if(r){if(ee<0||Te<0||$e<0)return null}else if((ee<0||Te<0||$e<0)&&(ee>0||Te>0||$e>0))return null;const Le=ee+Te+$e;if(Le===0)return null;const Ye=re*(ee*O+Te*G+$e*se);return(Le>0?Ye<0:Ye>0)?null:this.at(Ye/Le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bs extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kl=new mt,vi=new ad,es=new Gr,Gl=new L,ts=new L,ns=new L,is=new L,xa=new L,rs=new L,Hl=new L,ss=new L;class gn extends Kt{constructor(e=new qt,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(xa.fromBufferAttribute(f,e),a?rs.addScaledVector(xa,h):rs.addScaledVector(xa.sub(t),h))}t.add(rs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(es.containsPoint(vi.origin)===!1&&(vi.intersectSphere(es,Gl)===null||vi.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(kl.copy(s).invert(),vi.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,w=A;x<w;x+=3){const E=o.getX(x),R=o.getX(x+1),v=o.getX(x+2);r=as(this,p,e,n,c,h,f,E,R,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const S=o.getX(m),A=o.getX(m+1),x=o.getX(m+2);r=as(this,a,e,n,c,h,f,S,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,w=A;x<w;x+=3){const E=x,R=x+1,v=x+2;r=as(this,p,e,n,c,h,f,E,R,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const S=m,A=m+1,x=m+2;r=as(this,a,e,n,c,h,f,S,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function od(i,e,t,n,r,s,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===wi,o),l===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:i}}function as(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ts),i.getVertexPosition(l,ns),i.getVertexPosition(c,is);const h=od(i,e,t,n,ts,ns,is,Hl);if(h){const f=new L;Rn.getBarycoord(Hl,ts,ns,is,f),r&&(h.uv=Rn.getInterpolatedAttribute(r,o,l,c,f,new _e)),s&&(h.uv1=Rn.getInterpolatedAttribute(s,o,l,c,f,new _e)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Rn.getNormal(ts,ns,is,u.normal),h.face=u,h.barycoord=f}return h}class wh extends en{constructor(e=null,t=1,n=1,r,s,a,o,l,c=$t,h=$t,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs extends an{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new mt,Vl=new mt,os=[],Wl=new Ci,ld=new mt,gr=new gn,_r=new Gr;class ko extends gn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ld)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Wl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),_r.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wi),Vl.multiplyMatrices(n,Wi),gr.matrixWorld=Vl,gr.raycast(e,os);for(let a=0,o=os.length;a<o;a++){const l=os[a];l.instanceId=s,l.object=this,t.push(l)}os.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(r*this.count),r,this.count,Qo,Cn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xi=new Gr,cd=new _e(.5,.5),ls=new L;class sl{constructor(e=new fi,t=new fi,n=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],g=s[8],y=s[9],m=s[10],p=s[11],S=s[12],A=s[13],x=s[14],w=s[15];if(r[0].setComponents(c-a,d-h,p-g,w-S).normalize(),r[1].setComponents(c+a,d+h,p+g,w+S).normalize(),r[2].setComponents(c+o,d+f,p+y,w+A).normalize(),r[3].setComponents(c-o,d-f,p-y,w-A).normalize(),n)r[4].setComponents(l,u,m,x).normalize(),r[5].setComponents(c-l,d-u,p-m,w-x).normalize();else if(r[4].setComponents(c-l,d-u,p-m,w-x).normalize(),t===Bn)r[5].setComponents(c+l,d+u,p+m,w+x).normalize();else if(t===Fr)r[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=cd.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ls.x=r.normal.x>0?e.max.x:e.min.x,ls.y=r.normal.y>0?e.max.y:e.min.y,ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bh extends en{constructor(e=[],t=bi,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hd extends en{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Or extends en{constructor(e,t,n=kn,r,s,a,o=$t,l=$t,c,h=ei,f=1){if(h!==ei&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ud extends Or{constructor(e,t=kn,n=bi,r,s,a=$t,o=$t,l,c=ei){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Th extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Q extends qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function g(y,m,p,S,A,x,w,E,R,v,T){const C=x/R,I=w/v,O=x/2,V=w/2,D=E/2,G=R+1,$=v+1;let X=0,se=0;const Y=new L;for(let ne=0;ne<$;ne++){const re=ne*I-V;for(let Ge=0;Ge<G;Ge++){const Fe=Ge*C-O;Y[y]=Fe*S,Y[m]=re*A,Y[p]=D,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ge/R),f.push(1-ne/v),X+=1}}for(let ne=0;ne<v;ne++)for(let re=0;re<R;re++){const Ge=u+re+G*ne,Fe=u+re+G*(ne+1),ht=u+(re+1)+G*(ne+1),st=u+(re+1)+G*ne;l.push(Ge,Fe,st),l.push(Fe,ht,st),se+=6}o.addGroup(d,se,T),d+=se,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Se extends qt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],d=[];let g=0;const y=[],m=n/2;let p=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function S(){const x=new L,w=new L;let E=0;const R=(t-e)/n;for(let v=0;v<=s;v++){const T=[],C=v/s,I=C*(t-e)+e;for(let O=0;O<=r;O++){const V=O/r,D=V*l+o,G=Math.sin(D),$=Math.cos(D);w.x=I*G,w.y=-C*n+m,w.z=I*$,f.push(w.x,w.y,w.z),x.set(G,R,$).normalize(),u.push(x.x,x.y,x.z),d.push(V,1-C),T.push(g++)}y.push(T)}for(let v=0;v<r;v++)for(let T=0;T<s;T++){const C=y[T][v],I=y[T+1][v],O=y[T+1][v+1],V=y[T][v+1];(e>0||T!==0)&&(h.push(C,I,V),E+=3),(t>0||T!==s-1)&&(h.push(I,O,V),E+=3)}c.addGroup(p,E,0),p+=E}function A(x){const w=g,E=new _e,R=new L;let v=0;const T=x===!0?e:t,C=x===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;const I=g;for(let O=0;O<=r;O++){const D=O/r*l+o,G=Math.cos(D),$=Math.sin(D);R.x=T*$,R.y=m*C,R.z=T*G,f.push(R.x,R.y,R.z),u.push(0,C,0),E.x=G*.5+.5,E.y=$*.5*C+.5,d.push(E.x,E.y),g++}for(let O=0;O<r;O++){const V=w+O,D=I+O;x===!0?h.push(D,D+1,V):h.push(D+1,D,V),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Se(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rt extends Se{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Rt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cr extends qt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new L,x=new L,w=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],A),d(t[E+1],x),d(t[E+2],w),l(A,x,w,S)}function l(S,A,x,w){const E=w+1,R=[];for(let v=0;v<=E;v++){R[v]=[];const T=S.clone().lerp(x,v/E),C=A.clone().lerp(x,v/E),I=E-v;for(let O=0;O<=I;O++)O===0&&v===E?R[v][O]=T:R[v][O]=T.clone().lerp(C,O/I)}for(let v=0;v<E;v++)for(let T=0;T<2*(E-v)-1;T++){const C=Math.floor(T/2);T%2===0?(u(R[v][C+1]),u(R[v+1][C]),u(R[v][C])):(u(R[v][C+1]),u(R[v+1][C+1]),u(R[v+1][C]))}}function c(S){const A=new L;for(let x=0;x<s.length;x+=3)A.x=s[x+0],A.y=s[x+1],A.z=s[x+2],A.normalize().multiplyScalar(S),s[x+0]=A.x,s[x+1]=A.y,s[x+2]=A.z}function h(){const S=new L;for(let A=0;A<s.length;A+=3){S.x=s[A+0],S.y=s[A+1],S.z=s[A+2];const x=m(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;a.push(x,1-w)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const A=a[S+0],x=a[S+2],w=a[S+4],E=Math.max(A,x,w),R=Math.min(A,x,w);E>.9&&R<.1&&(A<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function u(S){s.push(S.x,S.y,S.z)}function d(S,A){const x=S*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function g(){const S=new L,A=new L,x=new L,w=new L,E=new _e,R=new _e,v=new _e;for(let T=0,C=0;T<s.length;T+=9,C+=6){S.set(s[T+0],s[T+1],s[T+2]),A.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),w.copy(S).add(A).add(x).divideScalar(3);const I=m(w);y(E,C+0,S,I),y(R,C+2,A,I),y(v,C+4,x,I)}}function y(S,A,x,w){w<0&&S.x===1&&(a[A]=S.x-1),x.x===0&&x.z===0&&(a[A]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.vertices,e.indices,e.radius,e.detail)}}class ti extends cr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ti(e.radius,e.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,d=(a-h)/u;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new _e:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,r=[],s=[],a=[],o=new L,l=new mt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(lt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(lt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class al extends Vn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dd extends al{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,r(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Xl=new L,ql=new L,Ma=new ol,Sa=new ol,ya=new ol;class fd extends Vn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(ql.subVectors(r[0],r[1]).add(r[0]),c=ql);const f=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Xl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Xl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ma.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,m),Sa.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,m),ya.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Sa.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ya.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ma.calc(l),Sa.calc(l),ya.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function pd(i,e){const t=1-i;return t*t*e}function md(i,e){return 2*(1-i)*i*e}function gd(i,e){return i*i*e}function Pr(i,e,t,n){return pd(i,e)+md(i,t)+gd(i,n)}function _d(i,e){const t=1-i;return t*t*t*e}function vd(i,e){const t=1-i;return 3*t*t*i*e}function xd(i,e){return 3*(1-i)*i*i*e}function Md(i,e){return i*i*i*e}function Lr(i,e,t,n,r){return _d(i,e)+vd(i,t)+xd(i,n)+Md(i,r)}class Ah extends Vn{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(e,r.x,s.x,a.x,o.x),Lr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sd extends Vn{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(e,r.x,s.x,a.x,o.x),Lr(e,r.y,s.y,a.y,o.y),Lr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rh extends Vn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends Vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends Vn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Pr(e,r.x,s.x,a.x),Pr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends Vn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Pr(e,r.x,s.x,a.x),Pr(e,r.y,s.y,a.y),Pr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Yl(o,l.x,c.x,h.x,f.x),Yl(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var Go=Object.freeze({__proto__:null,ArcCurve:dd,CatmullRomCurve3:fd,CubicBezierCurve:Ah,CubicBezierCurve3:Sd,EllipseCurve:al,LineCurve:Rh,LineCurve3:yd,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Ed,SplineCurve:Ph});class wd extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Go[r.type]().fromJSON(r))}return this}}class ks extends wd{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rh(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Ch(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Ah(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ph(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new al(e,t,n,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ni extends ks{constructor(e){super(e),this.uuid=lr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ks().fromJSON(r))}return this}}function bd(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Lh(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Pd(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<r;u+=t){const d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Br(s,a,t,o,l,c,0),a}function Lh(i,e,t,n,r){let s;if(r===Gd(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=$l(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=$l(a/n|0,i[a],i[a+1],s);return s&&sr(s,s.next)&&(kr(s),s=s.next),s}function Ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Ud(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Ad(i,n,r,s):Td(i)){e.push(l.i,i.i,c.i),kr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rd(Ai(i),e),Br(i,e,t,n,r,s,2)):a===2&&Cd(i,e,t,n,r,s):Br(Ai(i),e,t,n,r,s,1);break}}}function Td(i){const e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(r,s,a),f=Math.min(o,l,c),u=Math.max(r,s,a),d=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Tr(r,o,s,l,a,c,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ad(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Ot(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,f=s.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),y=Math.max(o,l,c),m=Math.max(h,f,u),p=Ho(d,g,e,t,n),S=Ho(y,m,e,t,n);let A=i.prevZ,x=i.nextZ;for(;A&&A.z>=p&&x&&x.z<=S;){if(A.x>=d&&A.x<=y&&A.y>=g&&A.y<=m&&A!==r&&A!==a&&Tr(o,h,l,f,c,u,A.x,A.y)&&Ot(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Tr(o,h,l,f,c,u,x.x,x.y)&&Ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=y&&A.y>=g&&A.y<=m&&A!==r&&A!==a&&Tr(o,h,l,f,c,u,A.x,A.y)&&Ot(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Tr(o,h,l,f,c,u,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rd(i,e){let t=i;do{const n=t.prev,r=t.next.next;!sr(n,r)&&Ih(n,t,t.next,r)&&zr(n,r)&&zr(r,n)&&(e.push(n.i,t.i,r.i),kr(t),kr(t.next),t=i=r),t=t.next}while(t!==i);return Ai(t)}function Cd(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bd(a,o)){let l=Nh(a,o);a=Ai(a,a.next),l=Ai(l,l.next),Br(a,e,t,n,r,s,0),Br(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Pd(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Lh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Od(c))}r.sort(Ld);for(let s=0;s<r.length;s++)t=Dd(r[s],t);return t}function Ld(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Dd(i,e){const t=Id(i,e);if(!t)return e;const n=Nh(t,i);return Ai(n,n.next),Ai(t,t.next)}function Id(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(sr(i,t))return t;do{if(sr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Dh(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const f=Math.abs(r-t.y)/(n-t.x);zr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Nd(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Nd(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function Ud(i,e,t,n){let r=i;do r.z===0&&(r.z=Ho(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Fd(r)}function Fd(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Ho(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Od(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Dh(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Tr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Dh(i,e,t,n,r,s,a,o)}function Bd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zd(i,e)&&(zr(i,e)&&zr(e,i)&&kd(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||sr(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sr(i,e){return i.x===e.x&&i.y===e.y}function Ih(i,e,t,n){const r=hs(Ot(i,e,t)),s=hs(Ot(i,e,n)),a=hs(Ot(t,n,i)),o=hs(Ot(t,n,e));return!!(r!==s&&a!==o||r===0&&cs(i,t,e)||s===0&&cs(i,n,e)||a===0&&cs(t,i,n)||o===0&&cs(t,e,n))}function cs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hs(i){return i>0?1:i<0?-1:0}function zd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ih(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zr(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function kd(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nh(i,e){const t=Vo(i.i,i.x,i.y),n=Vo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function $l(i,e,t,n){const r=Vo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gd(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Hd{static triangulate(e,t,n=2){return bd(e,t,n)}}class Jn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Jn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Zl(e),Kl(n,e);let a=e.length;t.forEach(Zl);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Kl(n,t[l]);const o=Hd.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Zl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Xs extends qt{constructor(e=new ni([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Vd;let A,x=!1,w,E,R,v;if(p){A=p.getSpacedPoints(h),x=!0,u=!1;const ie=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ie),E=new L,R=new L,v=new L}u||(m=0,d=0,g=0,y=0);const T=o.extractPoints(c);let C=T.shape;const I=T.holes;if(!Jn.isClockWise(C)){C=C.reverse();for(let ie=0,ce=I.length;ie<ce;ie++){const ue=I[ie];Jn.isClockWise(ue)&&(I[ie]=ue.reverse())}}function V(ie){const ue=10000000000000001e-36;let de=ie[0];for(let ye=1;ye<=ie.length;ye++){const Xe=ye%ie.length,Ne=ie[Xe],Ce=Ne.x-de.x,Ze=Ne.y-de.y,P=Ce*Ce+Ze*Ze,pt=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(de.x),Math.abs(de.y)),nt=ue*pt*pt;if(P<=nt){ie.splice(Xe,1),ye--;continue}de=Ne}}V(C),I.forEach(V);const D=I.length,G=C;for(let ie=0;ie<D;ie++){const ce=I[ie];C=C.concat(ce)}function $(ie,ce,ue){return ce||vt("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ce,ue)}const X=C.length;function se(ie,ce,ue){let de,ye,Xe;const Ne=ie.x-ce.x,Ce=ie.y-ce.y,Ze=ue.x-ie.x,P=ue.y-ie.y,pt=Ne*Ne+Ce*Ce,nt=Ne*P-Ce*Ze;if(Math.abs(nt)>Number.EPSILON){const b=Math.sqrt(pt),_=Math.sqrt(Ze*Ze+P*P),F=ce.x-Ce/b,H=ce.y+Ne/b,Z=ue.x-P/_,pe=ue.y+Ze/_,ve=((Z-F)*P-(pe-H)*Ze)/(Ne*P-Ce*Ze);de=F+Ne*ve-ie.x,ye=H+Ce*ve-ie.y;const J=de*de+ye*ye;if(J<=2)return new _e(de,ye);Xe=Math.sqrt(J/2)}else{let b=!1;Ne>Number.EPSILON?Ze>Number.EPSILON&&(b=!0):Ne<-Number.EPSILON?Ze<-Number.EPSILON&&(b=!0):Math.sign(Ce)===Math.sign(P)&&(b=!0),b?(de=-Ce,ye=Ne,Xe=Math.sqrt(pt)):(de=Ne,ye=Ce,Xe=Math.sqrt(pt/2))}return new _e(de/Xe,ye/Xe)}const Y=[];for(let ie=0,ce=G.length,ue=ce-1,de=ie+1;ie<ce;ie++,ue++,de++)ue===ce&&(ue=0),de===ce&&(de=0),Y[ie]=se(G[ie],G[ue],G[de]);const ne=[];let re,Ge=Y.concat();for(let ie=0,ce=D;ie<ce;ie++){const ue=I[ie];re=[];for(let de=0,ye=ue.length,Xe=ye-1,Ne=de+1;de<ye;de++,Xe++,Ne++)Xe===ye&&(Xe=0),Ne===ye&&(Ne=0),re[de]=se(ue[de],ue[Xe],ue[Ne]);ne.push(re),Ge=Ge.concat(re)}let Fe;if(m===0)Fe=Jn.triangulateShape(G,I);else{const ie=[],ce=[];for(let ue=0;ue<m;ue++){const de=ue/m,ye=d*Math.cos(de*Math.PI/2),Xe=g*Math.sin(de*Math.PI/2)+y;for(let Ne=0,Ce=G.length;Ne<Ce;Ne++){const Ze=$(G[Ne],Y[Ne],Xe);Te(Ze.x,Ze.y,-ye),de===0&&ie.push(Ze)}for(let Ne=0,Ce=D;Ne<Ce;Ne++){const Ze=I[Ne];re=ne[Ne];const P=[];for(let pt=0,nt=Ze.length;pt<nt;pt++){const b=$(Ze[pt],re[pt],Xe);Te(b.x,b.y,-ye),de===0&&P.push(b)}de===0&&ce.push(P)}}Fe=Jn.triangulateShape(ie,ce)}const ht=Fe.length,st=g+y;for(let ie=0;ie<X;ie++){const ce=u?$(C[ie],Ge[ie],st):C[ie];x?(R.copy(w.normals[0]).multiplyScalar(ce.x),E.copy(w.binormals[0]).multiplyScalar(ce.y),v.copy(A[0]).add(R).add(E),Te(v.x,v.y,v.z)):Te(ce.x,ce.y,0)}for(let ie=1;ie<=h;ie++)for(let ce=0;ce<X;ce++){const ue=u?$(C[ce],Ge[ce],st):C[ce];x?(R.copy(w.normals[ie]).multiplyScalar(ue.x),E.copy(w.binormals[ie]).multiplyScalar(ue.y),v.copy(A[ie]).add(R).add(E),Te(v.x,v.y,v.z)):Te(ue.x,ue.y,f/h*ie)}for(let ie=m-1;ie>=0;ie--){const ce=ie/m,ue=d*Math.cos(ce*Math.PI/2),de=g*Math.sin(ce*Math.PI/2)+y;for(let ye=0,Xe=G.length;ye<Xe;ye++){const Ne=$(G[ye],Y[ye],de);Te(Ne.x,Ne.y,f+ue)}for(let ye=0,Xe=I.length;ye<Xe;ye++){const Ne=I[ye];re=ne[ye];for(let Ce=0,Ze=Ne.length;Ce<Ze;Ce++){const P=$(Ne[Ce],re[Ce],de);x?Te(P.x,P.y+A[h-1].y,A[h-1].x+ue):Te(P.x,P.y,f+ue)}}}ut(),K();function ut(){const ie=r.length/3;if(u){let ce=0,ue=X*ce;for(let de=0;de<ht;de++){const ye=Fe[de];$e(ye[2]+ue,ye[1]+ue,ye[0]+ue)}ce=h+m*2,ue=X*ce;for(let de=0;de<ht;de++){const ye=Fe[de];$e(ye[0]+ue,ye[1]+ue,ye[2]+ue)}}else{for(let ce=0;ce<ht;ce++){const ue=Fe[ce];$e(ue[2],ue[1],ue[0])}for(let ce=0;ce<ht;ce++){const ue=Fe[ce];$e(ue[0]+X*h,ue[1]+X*h,ue[2]+X*h)}}n.addGroup(ie,r.length/3-ie,0)}function K(){const ie=r.length/3;let ce=0;ee(G,ce),ce+=G.length;for(let ue=0,de=I.length;ue<de;ue++){const ye=I[ue];ee(ye,ce),ce+=ye.length}n.addGroup(ie,r.length/3-ie,1)}function ee(ie,ce){let ue=ie.length;for(;--ue>=0;){const de=ue;let ye=ue-1;ye<0&&(ye=ie.length-1);for(let Xe=0,Ne=h+m*2;Xe<Ne;Xe++){const Ce=X*Xe,Ze=X*(Xe+1),P=ce+de+Ce,pt=ce+ye+Ce,nt=ce+ye+Ze,b=ce+de+Ze;Le(P,pt,nt,b)}}}function Te(ie,ce,ue){l.push(ie),l.push(ce),l.push(ue)}function $e(ie,ce,ue){Ye(ie),Ye(ce),Ye(ue);const de=r.length/3,ye=S.generateTopUV(n,r,de-3,de-2,de-1);St(ye[0]),St(ye[1]),St(ye[2])}function Le(ie,ce,ue,de){Ye(ie),Ye(ce),Ye(de),Ye(ce),Ye(ue),Ye(de);const ye=r.length/3,Xe=S.generateSideWallUV(n,r,ye-6,ye-3,ye-2,ye-1);St(Xe[0]),St(Xe[1]),St(Xe[3]),St(Xe[1]),St(Xe[2]),St(Xe[3])}function Ye(ie){r.push(l[ie*3+0]),r.push(l[ie*3+1]),r.push(l[ie*3+2])}function St(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wd(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Go[r.type]().fromJSON(r)),new Xs(n,e.options)}}const Vd={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new _e(s,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[r*3],d=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-f),new _e(u,1-g),new _e(y,1-p)]:[new _e(o,1-l),new _e(h,1-f),new _e(d,1-g),new _e(m,1-p)]}};function Wd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hn extends cr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hn(e.radius,e.detail)}}class ll extends qt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=lt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,f=new L,u=new _e,d=new L,g=new L,y=new L;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let S=0;S<=t;S++){const A=n+S*h*r,x=Math.sin(A),w=Math.cos(A);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*x,f.y=e[E].y,f.z=e[E].x*w,a.push(f.x,f.y,f.z),u.x=S/t,u.y=E/(e.length-1),o.push(u.x,u.y);const R=l[3*E+0]*x,v=l[3*E+1],T=l[3*E+0]*w;c.push(R,v,T)}}for(let S=0;S<t;S++)for(let A=0;A<e.length-1;A++){const x=A+S*e.length,w=x,E=x+e.length,R=x+e.length+1,v=x+1;s.push(w,E,v),s.push(R,v,E)}this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("uv",new yt(o,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.points,e.segments,e.phiStart,e.phiLength)}}class Tt extends cr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tt(e.radius,e.detail)}}class Vr extends qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const S=p*u-a;for(let A=0;A<c;A++){const x=A*f-s;g.push(x,-S,0),y.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const A=S+c*p,x=S+c*(p+1),w=S+1+c*(p+1),E=S+1+c*p;d.push(A,x,E),d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pi extends qt{constructor(e=new ni([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(s,3)),this.setAttribute("uv",new yt(a,2));function c(h){const f=r.length/3,u=h.extractPoints(t);let d=u.shape;const g=u.holes;Jn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Jn.isClockWise(S)===!0&&(g[m]=S.reverse())}const y=Jn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=y.length;m<p;m++){const S=y[m],A=S[0]+f,x=S[1]+f,w=S[2]+f;n.push(A,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Xd(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Pi(n,e.curveSegments)}}function Xd(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class ln extends qt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new L,u=new L,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const S=[],A=p/n,x=a+A*o,w=e*Math.cos(x),E=Math.sqrt(e*e-w*w);let R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const T=v/t,C=r+T*s;f.x=-E*Math.cos(C),f.y=w,f.z=E*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(T+R,1-A),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const A=h[p][S+1],x=h[p][S],w=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&d.push(A,x,E),(p!==n-1||l<Math.PI)&&d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hn extends cr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hn(e.radius,e.detail)}}class ot extends qt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],h=[],f=[],u=new L,d=new L,g=new L;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let p=0;p<=r;p++){const S=p/r*s;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=r;m++){const p=(r+1)*y+m-1,S=(r+1)*(y-1)+m-1,A=(r+1)*(y-1)+m,x=(r+1)*y+m;l.push(p,S,x),l.push(S,A,x)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Jl(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Jl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const r in n)e[r]=n[r]}return e}function Jl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Yd={clone:ar,merge:sn};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(r.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(r.value);break;case"v3":this.uniforms[n].value=new L().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(r.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kd extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jd extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jd extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fh extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ef extends Fh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ea=new mt,Ql=new L,jl=new L;class tf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ea,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const us=new L,ds=new ii,Nn=new L;class cl extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,ds,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,ds,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new L,ec=new _e,tc=new _e;class An extends cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hl extends cl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nf extends tf{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nc extends Fh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new nf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Xi=-90,qi=1;class rf extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Xi,qi,e,t);r.layers=this.layers,this.add(r);const s=new An(Xi,qi,e,t);s.layers=this.layers,this.add(s);const a=new An(Xi,qi,e,t);a.layers=this.layers,this.add(a);const o=new An(Xi,qi,e,t);o.layers=this.layers,this.add(o);const l=new An(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new An(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sf extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ml=class Ml{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ml.prototype.isMatrix2=!0;let ic=Ml;function rc(i,e,t,n){const r=af(n);switch(t){case gh:return i*e;case Qo:return i*e/r.components*r.byteLength;case jo:return i*e/r.components*r.byteLength;case Ti:return i*e*2/r.components*r.byteLength;case el:return i*e*2/r.components*r.byteLength;case _h:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case tl:return i*e*4/r.components*r.byteLength;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(e,8)/4;case oo:case co:return Math.max(i,8)*Math.max(e,8)/2;case uo:case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case Is:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Do:case Io:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ns:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function af(i){switch(i){case mn:case dh:return{byteLength:1,components:1};case Nr:case fh:case Gn:return{byteLength:2,components:1};case Ko:case Jo:return{byteLength:2,components:4};case kn:case Zo:case Cn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oh(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function of(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,a0=`uniform sampler2D dfgLUT;
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
}`,o0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
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
}`,mp=`#if DEPTH_PACKING == 3200
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
}`,gp=`#define DISTANCE
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
}`,_p=`#define DISTANCE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`uniform float scale;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Ep=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define NORMAL
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
}`,Pp=`#define PHONG
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
}`,Lp=`#define PHONG
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
}`,Dp=`#define STANDARD
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
}`,Ip=`#define STANDARD
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
}`,Np=`#define TOON
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
}`,Up=`#define TOON
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
}`,Fp=`uniform float size;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 color;
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
}`,kp=`uniform float rotation;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:vf,beginnormal_vertex:xf,bsdfs:Mf,iridescence_fragment:Sf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Tf,color_fragment:Af,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:Pf,common:Lf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:If,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:zf,envmap_fragment:kf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:e0,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:Yf,fog_pars_fragment:$f,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Qf,lights_pars_begin:jf,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,lightprobes_pars_fragment:h0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:M0,morphinstance_vertex:S0,morphcolor_vertex:y0,morphnormal_vertex:E0,morphtarget_pars_vertex:w0,morphtarget_vertex:b0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:G0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:$0,skinning_pars_vertex:Z0,skinning_vertex:K0,skinnormal_vertex:J0,specularmap_fragment:Q0,specularmap_pars_fragment:j0,tonemapping_fragment:ep,tonemapping_pars_fragment:tp,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:rp,uv_pars_vertex:sp,uv_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:hp,backgroundCube_frag:up,cube_vert:dp,cube_frag:fp,depth_vert:pp,depth_frag:mp,distance_vert:gp,distance_frag:_p,equirect_vert:vp,equirect_frag:xp,linedashed_vert:Mp,linedashed_frag:Sp,meshbasic_vert:yp,meshbasic_frag:Ep,meshlambert_vert:wp,meshlambert_frag:bp,meshmatcap_vert:Tp,meshmatcap_frag:Ap,meshnormal_vert:Rp,meshnormal_frag:Cp,meshphong_vert:Pp,meshphong_frag:Lp,meshphysical_vert:Dp,meshphysical_frag:Ip,meshtoon_vert:Np,meshtoon_frag:Up,points_vert:Fp,points_frag:Op,shadow_vert:Bp,shadow_frag:zp,sprite_vert:kp,sprite_frag:Gp},Ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},On={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};On.physical={uniforms:sn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const fs={r:0,b:0,g:0},Hp=new mt,Bh=new tt;Bh.set(-1,0,0,0,1,0,0,0,1);function Vp(i,e,t,n,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const x=S.backgroundBlurriness>0;A=e.get(A,x)}return A}function g(S){let A=!1;const x=d(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,A){const x=d(A);x&&(x.isCubeTexture||x.mapping===Ws)?(c===void 0&&(c=new gn(new Q(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ar(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bh),c.material.toneMapped=ft.getTransfer(x.colorSpace)!==bt,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new gn(new Vr(2,2),new Sn({name:"BackgroundMaterial",uniforms:ar(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ft.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(fs,Uh(i)),t.buffers.color.setClear(fs.r,fs.g,fs.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Wp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,O,V,D,G){let $=!1;const X=f(I,D,V,O);s!==X&&(s=X,c(s.object)),$=d(I,D,V,G),$&&g(I,D,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(I,O,V,D),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,O,V,D){const G=D.wireframe===!0;let $=n[O.id];$===void 0&&($={},n[O.id]=$);const X=I.isInstancedMesh===!0?I.id:0;let se=$[X];se===void 0&&(se={},$[X]=se);let Y=se[V.id];Y===void 0&&(Y={},se[V.id]=Y);let ne=Y[G];return ne===void 0&&(ne=u(l()),Y[G]=ne),ne}function u(I){const O=[],V=[],D=[];for(let G=0;G<t;G++)O[G]=0,V[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,O,V,D){const G=s.attributes,$=O.attributes;let X=0;const se=V.getAttributes();for(const Y in se)if(se[Y].location>=0){const re=G[Y];let Ge=$[Y];if(Ge===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Ge=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Ge=I.instanceColor)),re===void 0||re.attribute!==Ge||Ge&&re.data!==Ge.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function g(I,O,V,D){const G={},$=O.attributes;let X=0;const se=V.getAttributes();for(const Y in se)if(se[Y].location>=0){let re=$[Y];re===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const Ge={};Ge.attribute=re,re&&re.data&&(Ge.data=re.data),G[Y]=Ge,X++}s.attributes=G,s.attributesNum=X,s.index=D}function y(){const I=s.newAttributes;for(let O=0,V=I.length;O<V;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){const V=s.newAttributes,D=s.enabledAttributes,G=s.attributeDivisors;V[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),G[I]!==O&&(i.vertexAttribDivisor(I,O),G[I]=O)}function S(){const I=s.newAttributes,O=s.enabledAttributes;for(let V=0,D=O.length;V<D;V++)O[V]!==I[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function A(I,O,V,D,G,$,X){X===!0?i.vertexAttribIPointer(I,O,V,G,$):i.vertexAttribPointer(I,O,V,D,G,$)}function x(I,O,V,D){y();const G=D.attributes,$=V.getAttributes(),X=O.defaultAttributeValues;for(const se in $){const Y=$[se];if(Y.location>=0){let ne=G[se];if(ne===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const re=ne.normalized,Ge=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;const ht=Fe.buffer,st=Fe.type,ut=Fe.bytesPerElement,K=st===i.INT||st===i.UNSIGNED_INT||ne.gpuType===Zo;if(ne.isInterleavedBufferAttribute){const ee=ne.data,Te=ee.stride,$e=ne.offset;if(ee.isInstancedInterleavedBuffer){for(let Le=0;Le<Y.locationSize;Le++)p(Y.location+Le,ee.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Le=0;Le<Y.locationSize;Le++)m(Y.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Le=0;Le<Y.locationSize;Le++)A(Y.location+Le,Ge/Y.locationSize,st,re,Te*ut,($e+Ge/Y.locationSize*Le)*ut,K)}else{if(ne.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee,ne.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ee=0;ee<Y.locationSize;ee++)A(Y.location+ee,Ge/Y.locationSize,st,re,Ge*ut,Ge/Y.locationSize*ee*ut,K)}}else if(X!==void 0){const re=X[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Y.location,re);break;case 3:i.vertexAttrib3fv(Y.location,re);break;case 4:i.vertexAttrib4fv(Y.location,re);break;default:i.vertexAttrib1fv(Y.location,re)}}}}S()}function w(){T();for(const I in n){const O=n[I];for(const V in O){const D=O[V];for(const G in D){const $=D[G];for(const X in $)h($[X].object),delete $[X];delete D[G]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const V in O){const D=O[V];for(const G in D){const $=D[G];for(const X in $)h($[X].object),delete $[X];delete D[G]}}delete n[I.id]}function R(I){for(const O in n){const V=n[O];for(const D in V){const G=V[D];if(G[I.id]===void 0)continue;const $=G[I.id];for(const X in $)h($[X].object),delete $[X];delete G[I.id]}}}function v(I){for(const O in n){const V=n[O],D=I.isInstancedMesh===!0?I.id:0,G=V[D];if(G!==void 0){for(const $ in G){const X=G[$];for(const se in X)h(X[se].object),delete X[se];delete G[$]}delete V[D],Object.keys(V).length===0&&delete n[O]}}}function T(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function Xp(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function qp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mn&&R!==Cn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:x,maxSamples:w,samples:E}}function Yp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new fi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||r;return r=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,A=S*4;let x=p.clippingState||null;l.value=x,x=h(g,u,A,d);for(let w=0;w!==A;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=d+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,x=d;A!==y;++A,x+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ji=4,$p=6,Zp=20,Kp=256,vr=new hl,sc=new Je;let wa=null,ba=0,Ta=0,Aa=!1;const Jp=new L,Mi=new L;class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Jp}=s;wa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,ba,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Gn,format:Pn,colorSpace:Us,depthBuffer:!1},r=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qp(s)),this._blurMaterial=em(s,e,t),this._ggxMaterial=jp(s,e,t)}return r}_compileMaterial(e){const t=new gn(new qt,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,r,s){const l=new An(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(sc),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new Q,new Bs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(sc),p=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const w=this._cubeSize;Yi(r,x*w,A>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bi||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ji?n-g+ji:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Yi(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(o,vr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Yi(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(o,vr)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[r],f=3*h*(r>this._lodMax-ji?r-this._lodMax+ji:0),u=4*(this._cubeSize-h);Yi(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,vr)}}function Qp(i){const e=[],t=[];let n=i;const r=i-ji+1+$p;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let p=0;p<f;p++){const S=p%3*2/3-1,A=p>2?0:-1,x=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(x,d*u*p);for(let w=0;w<u;w++){const E=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?Mi.set(1,R,E):p===1?Mi.set(-E,1,-R):p===2?Mi.set(-E,R,1):p===3?Mi.set(-1,R,-E):p===4?Mi.set(-E,-1,R):Mi.set(E,R,-1),Mi.toArray(y,(p*u+w)*d)}}const m=new qt;m.setAttribute("position",new an(g,d)),m.setAttribute("outputDirection",new an(y,d)),t.push(new gn(m,null)),n>ji&&n--}return{lodMeshes:t,sizeLods:e}}function oc(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jp(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qs(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function em(i,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Zp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qs(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function lc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qs(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function cc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function qs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class zh extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Q(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Qn});s.uniforms.tEquirect.value=t;const a=new gn(r,s),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=Zt),new rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function tm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===$s||d===Zs)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new zh(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,g=d===$s||d===Zs,y=d===bi||d===rr;if(g||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ac(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new ac(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===$s?u.mapping=bi:d===Zs&&(u.mapping=rr),u}function l(u){let d=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&tr("WebGLRenderer: "+n+" extension not supported."),r}}}function im(i,e,t,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(d!==null){const S=d.array;y=d.version;for(let A=0,x=S.length;A<x;A+=3){const w=S[A+0],E=S[A+1],R=S[A+2];u.push(w,E,E,R,R,w)}}else{const S=g.array;y=g.version;for(let A=0,x=S.length/3-1;A<x;A+=3){const w=A+0,E=A+1,R=A+2;u.push(w,E,E,R,R,w)}}const m=new(g.count>=65535?Eh:yh)(u,1);m.version=y;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function rm(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,s,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,s,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:vt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function am(i,e,t){const n=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;d===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let x=o.attributes.position.count*A,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*w*4*f),R=new xh(E,x,w,f);R.type=Cn,R.needsUpdate=!0;const v=A*4;for(let C=0;C<f;C++){const I=m[C],O=p[C],V=S[C],D=x*w*4*C;for(let G=0;G<I.count;G++){const $=G*v;d===!0&&(r.fromBufferAttribute(I,G),E[D+$+0]=r.x,E[D+$+1]=r.y,E[D+$+2]=r.z,E[D+$+3]=0),g===!0&&(r.fromBufferAttribute(O,G),E[D+$+4]=r.x,E[D+$+5]=r.y,E[D+$+6]=r.z,E[D+$+7]=0),y===!0&&(r.fromBufferAttribute(V,G),E[D+$+8]=r.x,E[D+$+9]=r.y,E[D+$+10]=r.z,E[D+$+11]=V.itemSize===4?r.w:1)}}u={count:f,texture:R,size:new _e(x,w)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function om(i,e,t,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const lm={[rh]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function cm(i,e,t,n,r,s){const a=new Ln(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new qt;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));const h=new Kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new gn(c,h),u=new hl(-1,1,1,-1,0,1);let d=null,g=null,y=!1,m,p=null,S=[],A=!1;this.setSize=function(x,w){a.setSize(x,w),o!==null&&o.setSize(x,w),l!==null&&l.setSize(x,w);for(let E=0;E<S.length;E++){const R=S[E];R.setSize&&R.setSize(x,w)}},this.setEffects=function(x){S=x,A=S.length>0&&S[0].isRenderPass===!0;const w=a.width,E=a.height;S.length>0&&o===null&&(o=new Ln(w,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(w,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const v=S[R];v.setSize&&v.setSize(w,E)}},this.begin=function(x,w){if(y||x.toneMapping===zn&&S.length===0)return!1;if(p=w,w!==null){const E=w.width,R=w.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return A===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return A},this.end=function(x,w){x.toneMapping=m,y=!0;let E=a,R=o;for(let v=0;v<S.length;v++){const T=S[v];T.enabled!==!1&&(T.render(x,R,E,w),T.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},ft.getTransfer(d)===bt&&(h.defines.SRGB_TRANSFER="");const v=lm[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(f,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const kh=new en,Wo=new Or(1,1),Gh=new xh,Hh=new Xu,Vh=new bh,hc=[],uc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hc[r];if(s===void 0&&(s=new Float32Array(r),hc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ys(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;pc.set(n),i.uniformMatrix2fv(this.addr,!1,pc),Vt(t,n)}}function mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;fc.set(n),i.uniformMatrix3fv(this.addr,!1,fc),Vt(t,n)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),Vt(t,n)}}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Wo.compareFunction=t.isReversedDepthBuffer()?il:nl,s=Wo):s=kh,t.setTexture2D(e||s,r)}function Tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hh,r)}function Am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vh,r)}function Rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gh,r)}function Cm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return ym;case 36295:return Em;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(i,e){i.uniform1fv(this.addr,e)}function Lm(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Dm(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Im(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Um(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fm(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Om(i,e){i.uniform1iv(this.addr,e)}function Bm(i,e){i.uniform2iv(this.addr,e)}function zm(i,e){i.uniform3iv(this.addr,e)}function km(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function Hm(i,e){i.uniform2uiv(this.addr,e)}function Vm(i,e){i.uniform3uiv(this.addr,e)}function Wm(i,e){i.uniform4uiv(this.addr,e)}function Xm(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wo:a=kh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function qm(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hh,s[a])}function Ym(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vh,s[a])}function $m(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gh,s[a])}function Zm(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Nm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Gm;case 36294:return Hm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cm(t.type)}}class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function mc(i,e){i.seq.push(e),i.map[e.id]=e}function jm(i,e,t){const n=i.name,r=n.length;for(Ra.lastIndex=0;;){const s=Ra.exec(n),a=Ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mc(t,c===void 0?new Km(o,i,e):new Jm(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Qm(o),mc(t,f)),t=f}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jm(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const eg=37297;let tg=0;function ng(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _c=new tt;function ig(i){ft._getMatrix(_c,ft.workingColorSpace,i);const e=`mat3( ${_c.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ng(i.getShaderSource(e),o)}else return s}function rg(i,e){const t=ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sg={[rh]:"Linear",[sh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function ag(i,e){const t=sg[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new L;function og(){ft.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function cg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ar(i){return i!==""}function xc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(ug,fg)}const dg=new Map;function fg(i,e){let t=at[e];if(t===void 0){const n=dg.get(e);if(n!==void 0)t=at[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xo(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(i){return i.replace(pg,mg)}function mg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const gg={[Ts]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function _g(i){return gg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vg={[bi]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function xg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mg={[rr]:"ENVMAP_MODE_REFRACTION"};function Sg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yg={[ih]:"ENVMAP_BLENDING_MULTIPLY",[yu]:"ENVMAP_BLENDING_MIX",[Eu]:"ENVMAP_BLENDING_ADD"};function Eg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yg[i.combine]||"ENVMAP_BLENDING_NONE"}function wg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_g(t),c=xg(t),h=Sg(t),f=Eg(t),u=wg(t),d=lg(t),g=cg(s),y=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(m=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?at.tonemapping_pars_fragment:"",t.toneMapping!==zn?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,rg("linearToOutputTexel",t.outputColorSpace),og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Xo(a),a=xc(a,t),a=Mc(a,t),o=Xo(o),o=xc(o,t),o=Mc(o,t),a=Sc(a),o=Sc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=S+m+a,x=S+p+o,w=gc(r,r.VERTEX_SHADER,A),E=gc(r,r.FRAGMENT_SHADER,x);r.attachShader(y,w),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(I){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(w)||"",D=r.getShaderInfoLog(E)||"",G=O.trim(),$=V.trim(),X=D.trim();let se=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,w,E);else{const ne=vc(r,w,"vertex"),re=vc(r,E,"fragment");vt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+ne+`
`+re)}else G!==""?je("WebGLProgram: Program Info Log:",G):($===""||X==="")&&(Y=!1);Y&&(I.diagnostics={runnable:se,programLog:G,vertexShader:{log:$,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(w),r.deleteShader(E),v=new Ls(r,y),T=hg(r,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(y,eg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=E,this}let Tg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rg(e),t.set(e,n)),n}}class Rg{constructor(e){this.id=Tg++,this.code=e,this.usedTimes=0}}function Cg(i){return i===Ti||i===Is||i===Ns}function Pg(i,e,t,n,r,s){const a=new Mh,o=new Ag,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,C,I,O,V){const D=I.fog,G=O.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||$,X),Y=se&&se.mapping===Ws?se.image.height:null,ne=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ge=re!==void 0?re.length:0;let Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let ht,st,ut,K;if(ne){const wt=On[ne];ht=wt.vertexShader,st=wt.fragmentShader}else{ht=v.vertexShader,st=v.fragmentShader;const wt=o.getVertexShaderStage(v),gt=o.getFragmentShaderStage(v);o.update(v,wt,gt),ut=wt.id,K=gt.id}const ee=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),$e=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,Ye=!!v.map,St=!!v.matcap,ie=!!se,ce=!!v.aoMap,ue=!!v.lightMap,de=!!v.bumpMap&&v.wireframe===!1,ye=!!v.normalMap,Xe=!!v.displacementMap,Ne=!!v.emissiveMap,Ce=!!v.metalnessMap,Ze=!!v.roughnessMap,P=v.anisotropy>0,pt=v.clearcoat>0,nt=v.dispersion>0,b=v.retroreflectivity>0,_=v.iridescence>0,F=v.sheen>0,H=v.transmission>0,Z=P&&!!v.anisotropyMap,pe=pt&&!!v.clearcoatMap,ve=pt&&!!v.clearcoatNormalMap,J=pt&&!!v.clearcoatRoughnessMap,te=_&&!!v.iridescenceMap,xe=_&&!!v.iridescenceThicknessMap,Oe=F&&!!v.sheenColorMap,Me=F&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,He=!!v.specularColorMap,qe=!!v.specularIntensityMap,Qe=H&&!!v.transmissionMap,U=H&&!!v.thicknessMap,we=!!v.gradientMap,j=!!v.alphaMap,ge=v.alphaTest>0,Re=!!v.alphaHash,oe=!!v.extensions;let Ve=zn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const ke={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:ht,fragmentShader:st,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:$e,instancingColor:$e&&O.instanceColor!==null,instancingMorph:$e&&O.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:St,envMap:ie,envMapMode:ie&&se.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:ue,bumpMap:de,normalMap:ye,displacementMap:Xe,emissiveMap:Ne,normalMapObjectSpace:ye&&v.normalMapType===Tu,normalMapTangentSpace:ye&&v.normalMapType===Bo,packedNormalMap:ye&&v.normalMapType===Bo&&Cg(v.normalMap.format),metalnessMap:Ce,roughnessMap:Ze,anisotropy:P,anisotropyMap:Z,clearcoat:pt,clearcoatMap:pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:J,dispersion:nt,retroreflection:b,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:xe,sheen:F,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:Ee,specularColorMap:He,specularIntensityMap:qe,transmission:H,transmissionMap:Qe,thicknessMap:U,gradientMap:we,opaque:v.transparent===!1&&v.blending===Rr&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:ge,alphaHash:Re,combine:v.combine,mapUv:Ye&&g(v.map.channel),aoMapUv:ce&&g(v.aoMap.channel),lightMapUv:ue&&g(v.lightMap.channel),bumpMapUv:de&&g(v.bumpMap.channel),normalMapUv:ye&&g(v.normalMap.channel),displacementMapUv:Xe&&g(v.displacementMap.channel),emissiveMapUv:Ne&&g(v.emissiveMap.channel),metalnessMapUv:Ce&&g(v.metalnessMap.channel),roughnessMapUv:Ze&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:pe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(v.sheenRoughnessMap.channel),specularMapUv:Ee&&g(v.specularMap.channel),specularColorMapUv:He&&g(v.specularColorMap.channel),specularIntensityMapUv:qe&&g(v.specularIntensityMap.channel),transmissionMapUv:Qe&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||P),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Ye||j),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:Fe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:Ne&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(T,v),S(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const T=d[v.type];let C;if(T){const I=On[T];C=Yd.clone(I.uniforms)}else C=v.uniforms;return C}function x(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new bg(i,T,v,r),c.push(C),h.set(T,C)),C}function w(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function Lg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,m,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,d,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);const A=o(u,d,g,y,m,p);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):t.push(A)}function c(u,d,g,y,m,p){const S=o(u,d,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function h(u,d){t.length>1&&t.sort(u||Dg),n.length>1&&n.sort(d||Ec),r.length>1&&r.sort(d||Ec)}function f(){for(let u=e,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function Ig(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new wc,i.set(n,[a])):r>=s.length?(a=new wc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ng(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Je};break;case"SpotLight":t={position:new L,direction:new L,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fg=0;function Og(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bg(i){const e=new Ng,t=Ug(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new mt,a=new mt;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,S=0,A=0,x=0,w=0,E=0,R=0,v=0,T=0,C=0;c.sort(Og);for(let O=0,V=c.length;O<V;O++){const D=c[O],G=D.color,$=D.intensity,X=D.distance;let se=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ti?se=D.shadow.map.texture:se=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=G.r*$,f+=G.g*$,u+=G.b*$;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],$);C++}else if(D.isSunLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,re=t.get(D);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=se;const Ge=ne.getViewportCount();for(let Fe=0;Fe<Ge;Fe++)n.sunShadowMatrix[y+Fe]=ne.getMatrix(Fe),n.sunShadowCascade[y+Fe]=ne._cascadeData[Fe];y+=Ge,g++}n.sun[d]=Y,d++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,re=t.get(D);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(G).multiplyScalar($),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[S]=Y;const ne=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,ne.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[S]=ne.matrix,D.castShadow){const re=t.get(D);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.spotShadow[S]=re,n.spotShadowMap[S]=se,R++}S++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(G).multiplyScalar($),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=Y,A++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ne=D.shadow,re=t.get(D);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar($),Y.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[x]=Y,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==S||I.rectAreaLength!==A||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==v||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=S,I.rectAreaLength=A,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=v,I.numLightProbes=C,n.version=Fg++)}function l(c,h){let f=0,u=0,d=0,g=0,y=0,m=0;const p=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){const x=c[S];if(x.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(x.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function bc(i){const e=new Bg(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new bc(i),e.set(r,[o])):s>=a.length?(o=new bc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
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
}`,Hg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Vg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Tc=new mt,xr=new L,Ca=new L;function Wg(i,e,t){let n=new sl;const r=new _e,s=new _e,a=new Ft,o=new Qd,l=new jd,c={},h=t.maxTextureSize,f={[wi]:cn,[cn]:wi,[Mn]:Mn},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:kg,fragmentShader:Gg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new gn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let p=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===iu&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Qn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=E.length;D<G;D++){const $=E[D],X=$.shadow;if(X===void 0){je("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const se=X.getFrameExtents();r.multiply(se),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,X.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===br){if($.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ln(r.x,r.y,{format:Ti,type:Gn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new Or(r.x,r.y,Cn),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=ei,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t}else $.isPointLight?(X.map=new zh(r.x),X.map.depthTexture=new ud(r.x,kn)):(X.map=new Ln(r.x,r.y),X.map.depthTexture=new Or(r.x,r.y,kn)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=ei,this.type===Ts?(X.map.depthTexture.compareFunction=Y?il:nl,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const ne=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();$.isPointLight!==!0&&X.updateMatrices($,v);for(let re=0;re<ne;re++){const Ge=X.getCamera(re);if($.isPointLight){const Fe=X.camera,ht=X.matrix,st=$.distance||Fe.far;st!==Fe.far&&(Fe.far=st,Fe.updateProjectionMatrix()),xr.setFromMatrixPosition($.matrixWorld),Fe.position.copy(xr),Ca.copy(Fe.position),Ca.add(Hg[re]),Fe.up.copy(Vg[re]),Fe.lookAt(Ca),Fe.updateMatrixWorld(),ht.makeTranslation(-xr.x,-xr.y,-xr.z),Tc.multiplyMatrices(Fe.projectionMatrix,Fe.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Tc,Fe.coordinateSystem,Fe.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,re),i.clear();else{re===0&&(i.setRenderTarget(X.map),i.clear());const Fe=X.getViewport(re);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),O.viewport(a)}n=X.getFrustum(re),x(R,v,Ge,$,this.type)}X.isPointLightShadow!==!0&&this.type===br&&S(X,v),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,I)};function S(E,R){const v=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ln(r.x,r.y,{format:Ti,type:Gn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,v,d,y,null)}function A(E,R,v,T){let C=null;const I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=C.uuid,V=R.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let G=D[V];G===void 0&&(G=C.clone(),D[V]=G,R.addEventListener("dispose",w)),C=G}if(C.visible=R.visible,C.wireframe=R.wireframe,T===br?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=i.properties.get(C);O.light=v}return C}function x(E,R,v,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===br)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const V=e.update(E),D=E.material;if(Array.isArray(D)){const G=V.groups;for(let $=0,X=G.length;$<X;$++){const se=G[$],Y=D[se.materialIndex];if(Y&&Y.visible){const ne=A(E,Y,T,C);E.onBeforeShadow(i,E,R,v,V,ne,se),i.renderBufferDirect(v,null,V,ne,E,se),E.onAfterShadow(i,E,R,v,V,ne,se)}}}else if(D.visible){const G=A(E,D,T,C);E.onBeforeShadow(i,E,R,v,V,G,null),i.renderBufferDirect(v,null,V,G,E,null),E.onAfterShadow(i,E,R,v,V,G,null)}}const O=E.children;for(let V=0,D=O.length;V<D;V++)x(O[V],R,v,T,C)}function w(E){E.target.removeEventListener("dispose",w);for(const v in c){const T=c[v],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Xg(i,e){function t(){let U=!1;const we=new Ft;let j=null;const ge=new Ft(0,0,0,0);return{setMask:function(Re){j!==Re&&!U&&(i.colorMask(Re,Re,Re,Re),j=Re)},setLocked:function(Re){U=Re},setClear:function(Re,oe,Ve,ke,wt){wt===!0&&(Re*=ke,oe*=ke,Ve*=ke),we.set(Re,oe,Ve,ke),ge.equals(we)===!1&&(i.clearColor(Re,oe,Ve,ke),ge.copy(we))},reset:function(){U=!1,j=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,we=!1,j=null,ge=null,Re=null;return{setReversed:function(oe){if(we!==oe){const Ve=e.get("EXT_clip_control");oe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=oe;const ke=Re;Re=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(oe){oe?ee(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(oe){j!==oe&&!U&&(i.depthMask(oe),j=oe)},setFunc:function(oe){if(we&&(oe=Bu[oe]),ge!==oe){switch(oe){case Qa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Re!==oe&&(Re=oe,we&&(oe=1-oe),i.clearDepth(oe))},reset:function(){U=!1,j=null,ge=null,Re=null,we=!1}}}function r(){let U=!1,we=null,j=null,ge=null,Re=null,oe=null,Ve=null,ke=null,wt=null;return{setTest:function(gt){U||(gt?ee(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(gt){we!==gt&&!U&&(i.stencilMask(gt),we=gt)},setFunc:function(gt,B,q){(j!==gt||ge!==B||Re!==q)&&(i.stencilFunc(gt,B,q),j=gt,ge=B,Re=q)},setOp:function(gt,B,q){(oe!==gt||Ve!==B||ke!==q)&&(i.stencilOp(gt,B,q),oe=gt,Ve=B,ke=q)},setLocked:function(gt){U=gt},setClear:function(gt){wt!==gt&&(i.clearStencil(gt),wt=gt)},reset:function(){U=!1,we=null,j=null,ge=null,Re=null,oe=null,Ve=null,ke=null,wt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,S=null,A=null,x=null,w=null,E=null,R=null,v=new Je(0,0,0),T=0,C=!1,I=null,O=null,V=null,D=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,se=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=se>=2);let ne=null,re={};const Ge=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),ht=new Ft().fromArray(Ge),st=new Ft().fromArray(Fe);function ut(U,we,j,ge){const Re=new Uint8Array(4),oe=i.createTexture();i.bindTexture(U,oe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<j;Ve++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(we+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return oe}const K={};K[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ir),de(!1),ye(El),ee(i.CULL_FACE),ce(Qn);function ee(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Te(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function $e(U,we){return u[U]!==we?(i.bindFramebuffer(U,we),u[U]=we,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Le(U,we){let j=g,ge=!1;if(U){j=d.get(we),j===void 0&&(j=[],d.set(we,j));const Re=U.textures;if(j.length!==Re.length||j[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ve=Re.length;oe<Ve;oe++)j[oe]=i.COLOR_ATTACHMENT0+oe;j.length=Re.length,ge=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ge=!0);ge&&i.drawBuffers(j)}function Ye(U){return y!==U?(i.useProgram(U),y=U,!0):!1}const St={[Ji]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};St[ou]=i.MIN,St[lu]=i.MAX;const ie={[cu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[nh]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(U,we,j,ge,Re,oe,Ve,ke,wt,gt){if(U===Qn){m===!0&&(Te(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),U!==ru){if(U!==p||gt!==C){if((S!==Ji||w!==Ji)&&(i.blendEquation(i.FUNC_ADD),S=Ji,w=Ji),gt)switch(U){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:vt("WebGLState: Invalid blending: ",U);break}else switch(U){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",U);break}A=null,x=null,E=null,R=null,v.set(0,0,0),T=0,p=U,C=gt}return}Re=Re||we,oe=oe||j,Ve=Ve||ge,(we!==S||Re!==w)&&(i.blendEquationSeparate(St[we],St[Re]),S=we,w=Re),(j!==A||ge!==x||oe!==E||Ve!==R)&&(i.blendFuncSeparate(ie[j],ie[ge],ie[oe],ie[Ve]),A=j,x=ge,E=oe,R=Ve),(ke.equals(v)===!1||wt!==T)&&(i.blendColor(ke.r,ke.g,ke.b,wt),v.copy(ke),T=wt),p=U,C=!1}function ue(U,we){U.side===Mn?Te(i.CULL_FACE):ee(i.CULL_FACE);let j=U.side===cn;we&&(j=!j),de(j),U.blending===Rr&&U.transparent===!1?ce(Qn):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function ye(U){U!==tu?(ee(i.CULL_FACE),U!==O&&(U===El?i.cullFace(i.BACK):U===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),O=U}function Xe(U){U!==V&&(X&&i.lineWidth(U),V=U)}function Ne(U,we,j){U?(ee(i.POLYGON_OFFSET_FILL),(D!==we||G!==j)&&(D=we,G=j,a.getReversed()&&(we=-we),i.polygonOffset(we,j))):Te(i.POLYGON_OFFSET_FILL)}function Ce(U){U?ee(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Ze(U){U===void 0&&(U=i.TEXTURE0+$-1),ne!==U&&(i.activeTexture(U),ne=U)}function P(U,we,j){j===void 0&&(ne===null?j=i.TEXTURE0+$-1:j=ne);let ge=re[j];ge===void 0&&(ge={type:void 0,texture:void 0},re[j]=ge),(ge.type!==U||ge.texture!==we)&&(ne!==j&&(i.activeTexture(j),ne=j),i.bindTexture(U,we||K[U]),ge.type=U,ge.texture=we)}function pt(){const U=re[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(U){vt("WebGLState:",U)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(U){vt("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){vt("WebGLState:",U)}}function F(){try{i.texSubImage3D(...arguments)}catch(U){vt("WebGLState:",U)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(U){vt("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){vt("WebGLState:",U)}}function pe(){try{i.texStorage2D(...arguments)}catch(U){vt("WebGLState:",U)}}function ve(){try{i.texStorage3D(...arguments)}catch(U){vt("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){vt("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){vt("WebGLState:",U)}}function xe(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function Oe(U,we){f[U]!==we&&(i.pixelStorei(U,we),f[U]=we)}function Me(U){ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function Ee(U){st.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),st.copy(U))}function He(U,we){let j=c.get(we);j===void 0&&(j=new WeakMap,c.set(we,j));let ge=j.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(we,U.name),j.set(U,ge))}function qe(U,we){const ge=c.get(we).get(U);l.get(we)!==ge&&(i.uniformBlockBinding(we,ge,U.__bindingPointIndex),l.set(we,ge))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ne=null,re={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,S=null,A=null,x=null,w=null,E=null,R=null,v=new Je(0,0,0),T=0,C=!1,I=null,O=null,V=null,D=null,G=null,ht.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Te,bindFramebuffer:$e,drawBuffers:Le,useProgram:Ye,setBlending:ce,setMaterial:ue,setFlipSided:de,setCullFace:ye,setLineWidth:Xe,setPolygonOffset:Ne,setScissorTest:Ce,activeTexture:Ze,bindTexture:P,unbindTexture:pt,compressedTexImage2D:nt,compressedTexImage3D:b,texImage2D:J,texImage3D:te,pixelStorei:Oe,getParameter:xe,updateUBOMapping:He,uniformBlockBinding:qe,texStorage2D:pe,texStorage3D:ve,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:Me,viewport:Ee,reset:Qe}}function qg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,_){return g?new OffscreenCanvas(b,_):Os("canvas")}function m(b,_,F){let H=1;const Z=nt(b);if((Z.width>F||Z.height>F)&&(H=F/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const pe=Math.floor(H*Z.width),ve=Math.floor(H*Z.height);u===void 0&&(u=y(pe,ve));const J=_?y(pe,ve):u;return J.width=pe,J.height=ve,J.getContext("2d").drawImage(b,0,0,pe,ve),je("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+pe+"x"+ve+")."),J}else return"data"in b&&je("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function p(b){return b.generateMipmaps}function S(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,_,F,H,Z,pe=!1){if(b!==null){if(i[b]!==void 0)return i[b];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ve;H&&(ve=e.get("EXT_texture_norm16"),ve||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8),F===i.UNSIGNED_SHORT&&ve&&(J=ve.R16_EXT),F===i.SHORT&&ve&&(J=ve.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),_===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8),F===i.UNSIGNED_SHORT&&ve&&(J=ve.RG16_EXT),F===i.SHORT&&ve&&(J=ve.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&ve&&(J=ve.RGB16_EXT),F===i.SHORT&&ve&&(J=ve.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){const te=pe?Fs:ft.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=te===bt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ve&&(J=ve.RGBA16_EXT),F===i.SHORT&&ve&&(J=ve.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(b,_){let F;return b?_===null||_===kn||_===Ur?F=i.DEPTH24_STENCIL8:_===Cn?F=i.DEPTH32F_STENCIL8:_===Nr&&(F=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===kn||_===Ur?F=i.DEPTH_COMPONENT24:_===Cn?F=i.DEPTH_COMPONENT32F:_===Nr&&(F=i.DEPTH_COMPONENT16),F}function E(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==$t&&b.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){const _=b.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function v(b){const _=b.target;_.removeEventListener("dispose",v),I(_)}function T(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,H=d.get(F);if(H){const Z=H[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(b),Object.keys(H).length===0&&d.delete(F)}n.remove(b)}function C(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,H=d.get(F);delete H[_.__cacheKey],a.memory.textures--}function I(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Z=0;Z<_.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let H=0,Z=F.length;H<Z;H++){const pe=n.get(F[H]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(b)}let O=0;function V(){O=0}function D(){return O}function G(b){O=b}function $(){const b=O;return b>=r.maxTextures&&je("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,b}function X(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function se(b,_){const F=n.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const H=b.image;if(H===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Y(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Te(F,b,_);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ne(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Te(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function re(b,_){const F=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){$e(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const Ge={[so]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},Fe={[$t]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Ks]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ht={[Ru]:i.NEVER,[Iu]:i.ALWAYS,[Cu]:i.LESS,[nl]:i.LEQUAL,[Pu]:i.EQUAL,[il]:i.GEQUAL,[Lu]:i.GREATER,[Du]:i.NOTEQUAL};function st(b,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===Ks||_.magFilter===Wr||_.magFilter===yi||_.minFilter===Zt||_.minFilter===Ks||_.minFilter===Wr||_.minFilter===yi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ge[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ge[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ge[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Fe[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Fe[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==Wr&&_.minFilter!==yi||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));const H=_.source;let Z=d.get(H);Z===void 0&&(Z={},d.set(H,Z));const pe=X(_);if(pe!==b.__cacheKey){Z[pe]===void 0&&(Z[pe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[pe].usedTimes++;const ve=Z[b.__cacheKey];ve!==void 0&&(Z[b.__cacheKey].usedTimes--,ve.usedTimes===0&&C(_)),b.__cacheKey=pe,b.__webglTexture=Z[pe].texture}return F}function K(b,_,F){return Math.floor(Math.floor(b/F)/_)}function ee(b,_,F,H){const pe=b.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,H,_.data);else{pe.sort((Oe,Me)=>Oe.start-Me.start);let ve=0;for(let Oe=1;Oe<pe.length;Oe++){const Me=pe[ve],Ee=pe[Oe],He=Me.start+Me.count,qe=K(Ee.start,_.width,4),Qe=K(Me.start,_.width,4);Ee.start<=He+1&&qe===Qe&&K(Ee.start+Ee.count-1,_.width,4)===qe?Me.count=Math.max(Me.count,Ee.start+Ee.count-Me.start):(++ve,pe[ve]=Ee)}pe.length=ve+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Oe=0,Me=pe.length;Oe<Me;Oe++){const Ee=pe[Oe],He=Math.floor(Ee.start/4),qe=Math.ceil(Ee.count/4),Qe=He%_.width,U=Math.floor(He/_.width),we=qe,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Qe,U,we,j,F,H,_.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Te(b,_,F){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);const Z=ut(b,_),pe=_.source;t.bindTexture(H,b.__webglTexture,i.TEXTURE0+F);const ve=n.get(pe);if(pe.version!==ve.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=ft.getPrimaries(ft.workingColorSpace),ge=_.colorSpace===pi?null:ft.getPrimaries(_.colorSpace),Re=_.colorSpace===pi||j===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,r.maxTextureSize);te=pt(_,te);const xe=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type);let Me=x(_.internalFormat,xe,Oe,_.normalized,_.colorSpace,_.isVideoTexture);st(H,_);let Ee;const He=_.mipmaps,qe=_.isVideoTexture!==!0,Qe=ve.__version===void 0||Z===!0,U=pe.dataReady,we=E(_,te);if(_.isDepthTexture)Me=w(_.format===Ei,_.type),Qe&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Me,te.width,te.height,0,xe,Oe,null));else if(_.isDataTexture)if(He.length>0){qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,we,Me,He[0].width,He[0].height);for(let j=0,ge=He.length;j<ge;j++)Ee=He[j],qe?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ee.width,Ee.height,xe,Oe,Ee.data):t.texImage2D(i.TEXTURE_2D,j,Me,Ee.width,Ee.height,0,xe,Oe,Ee.data);_.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(i.TEXTURE_2D,we,Me,te.width,te.height),U&&ee(_,te,xe,Oe)):t.texImage2D(i.TEXTURE_2D,0,Me,te.width,te.height,0,xe,Oe,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Me,He[0].width,He[0].height,te.depth);for(let j=0,ge=He.length;j<ge;j++)if(Ee=He[j],_.format!==Pn)if(xe!==null)if(qe){if(U)if(_.layerUpdates.size>0){const Re=rc(Ee.width,Ee.height,_.format,_.type);for(const oe of _.layerUpdates){const Ve=Ee.data.subarray(oe*Re/Ee.data.BYTES_PER_ELEMENT,(oe+1)*Re/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,oe,Ee.width,Ee.height,1,xe,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,te.depth,xe,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Me,Ee.width,Ee.height,te.depth,0,Ee.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,te.depth,xe,Oe,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Me,Ee.width,Ee.height,te.depth,0,xe,Oe,Ee.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,we,Me,He[0].width,He[0].height);for(let j=0,ge=He.length;j<ge;j++)Ee=He[j],_.format!==Pn?xe!==null?qe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Me,Ee.width,Ee.height,0,Ee.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ee.width,Ee.height,xe,Oe,Ee.data):t.texImage2D(i.TEXTURE_2D,j,Me,Ee.width,Ee.height,0,xe,Oe,Ee.data)}else if(_.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Me,te.width,te.height,te.depth),U)if(_.layerUpdates.size>0){const j=rc(te.width,te.height,_.format,_.type);for(const ge of _.layerUpdates){const Re=te.data.subarray(ge*j/te.data.BYTES_PER_ELEMENT,(ge+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,te.width,te.height,1,xe,Oe,Re)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,xe,Oe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,xe,Oe,te.data);else if(_.isData3DTexture)qe?(Qe&&t.texStorage3D(i.TEXTURE_3D,we,Me,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,xe,Oe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,xe,Oe,te.data);else if(_.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(i.TEXTURE_2D,we,Me,te.width,te.height);else{let j=te.width,ge=te.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,Me,j,ge,0,xe,Oe,null),j>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),f.add(_),j.onpaint=ge=>{const Re=ge.changedElements;for(const oe of f)Re.includes(oe.image)&&(oe.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const Re=i.RGBA,oe=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,oe,Ve,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(He.length>0){if(qe&&Qe){const j=nt(He[0]);t.texStorage2D(i.TEXTURE_2D,we,Me,j.width,j.height)}for(let j=0,ge=He.length;j<ge;j++)Ee=He[j],qe?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,xe,Oe,Ee):t.texImage2D(i.TEXTURE_2D,j,Me,xe,Oe,Ee);_.generateMipmaps=!1}else if(qe){if(Qe){const j=nt(te);t.texStorage2D(i.TEXTURE_2D,we,Me,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Oe,te)}else t.texImage2D(i.TEXTURE_2D,0,Me,xe,Oe,te);p(_)&&S(H),ve.__version=pe.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function $e(b,_,F){if(_.image.length!==6)return;const H=ut(b,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const pe=n.get(Z);if(Z.version!==pe.__version||H===!0){t.activeTexture(i.TEXTURE0+F);const ve=ft.getPrimaries(ft.workingColorSpace),J=_.colorSpace===pi?null:ft.getPrimaries(_.colorSpace),te=_.colorSpace===pi||ve===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,Oe=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!xe&&!Oe?Me[oe]=m(_.image[oe],!0,r.maxCubemapSize):Me[oe]=Oe?_.image[oe].image:_.image[oe],Me[oe]=pt(_,Me[oe]);const Ee=Me[0],He=s.convert(_.format,_.colorSpace),qe=s.convert(_.type),Qe=x(_.internalFormat,He,qe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,we=pe.__version===void 0||H===!0,j=Z.dataReady;let ge=E(_,Ee);st(i.TEXTURE_CUBE_MAP,_);let Re;if(xe){U&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Qe,Ee.width,Ee.height);for(let oe=0;oe<6;oe++){Re=Me[oe].mipmaps;for(let Ve=0;Ve<Re.length;Ve++){const ke=Re[Ve];_.format!==Pn?He!==null?U?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,0,0,ke.width,ke.height,He,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,Qe,ke.width,ke.height,0,ke.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,0,0,ke.width,ke.height,He,qe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,Qe,ke.width,ke.height,0,He,qe,ke.data)}}}else{if(Re=_.mipmaps,U&&we){Re.length>0&&ge++;const oe=nt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Oe){U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,He,qe,Me[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Me[oe].width,Me[oe].height,0,He,qe,Me[oe].data);for(let Ve=0;Ve<Re.length;Ve++){const wt=Re[Ve].image[oe].image;U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,0,0,wt.width,wt.height,He,qe,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,Qe,wt.width,wt.height,0,He,qe,wt.data)}}else{U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,He,qe,Me[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,He,qe,Me[oe]);for(let Ve=0;Ve<Re.length;Ve++){const ke=Re[Ve];U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,0,0,He,qe,ke.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,Qe,He,qe,ke.image[oe])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),pe.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Le(b,_,F,H,Z,pe){const ve=s.convert(F.format,F.colorSpace),J=s.convert(F.type),te=x(F.internalFormat,ve,J,F.normalized,F.colorSpace),xe=n.get(_),Oe=n.get(F);if(Oe.__renderTarget=_,!xe.__hasExternalTextures){const Me=Math.max(1,_.width>>pe),Ee=Math.max(1,_.height>>pe);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,pe,te,Me,Ee,_.depth,0,ve,J,null):t.texImage2D(Z,pe,te,Me,Ee,0,ve,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Ze(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Oe.__webglTexture,0,Ce(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Oe.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const H=_.depthTexture,Z=H&&H.isDepthTexture?H.type:null,pe=w(_.stencilBuffer,Z),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(_),pe,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(_),pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,b)}else{const H=_.textures;for(let Z=0;Z<H.length;Z++){const pe=H[Z],ve=s.convert(pe.format,pe.colorSpace),J=s.convert(pe.type),te=x(pe.internalFormat,ve,J,pe.normalized,pe.colorSpace);Ze(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(_),te,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(_),te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(b,_,F){const H=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),st(i.TEXTURE_CUBE_MAP,_.depthTexture);const xe=s.convert(_.depthTexture.format),Oe=s.convert(_.depthTexture.type);let Me;_.depthTexture.format===ei?Me=i.DEPTH_COMPONENT24:_.depthTexture.format===Ei&&(Me=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Me,_.width,_.height,0,xe,Oe,null)}}else se(_.depthTexture,0);const pe=Z.__webglTexture,ve=Ce(_),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,te=_.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ei)Ze(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,pe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,pe,0);else if(_.depthTexture.format===Ei)Ze(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,pe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const H=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=H}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)St(_.__webglFramebuffer[H],b,H);else{const H=b.texture.mipmaps;H&&H.length>0?St(_.__webglFramebuffer[0],b,0):St(_.__webglFramebuffer,b,0)}else if(F){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Ye(_.__webglDepthbuffer[H],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,pe)}}else{const H=b.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ye(_.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(b,_,F){const H=n.get(b);_!==void 0&&Le(H.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ie(b)}function ue(b){const _=b.texture,F=n.get(b),H=n.get(_);b.addEventListener("dispose",v);const Z=b.textures,pe=b.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),pe){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)F.__webglFramebuffer[J][te]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let J=0,te=Z.length;J<te;J++){const xe=n.get(Z[J]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ze(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const te=Z[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const xe=s.convert(te.format,te.colorSpace),Oe=s.convert(te.type),Me=x(te.internalFormat,xe,Oe,te.normalized,te.colorSpace,b.isXRRenderTarget===!0),Ee=Ce(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Me,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),st(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Le(F.__webglFramebuffer[J][te],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else Le(F.__webglFramebuffer[J],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let J=0,te=Z.length;J<te;J++){const xe=Z[J],Oe=n.get(xe);let Me=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Me=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Oe.__webglTexture),st(Me,xe),Le(F.__webglFramebuffer,b,xe,i.COLOR_ATTACHMENT0+J,Me,0),p(xe)&&S(Me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),st(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Le(F.__webglFramebuffer[te],b,_,i.COLOR_ATTACHMENT0,J,te);else Le(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&S(J),t.unbindTexture()}b.depthBuffer&&ie(b)}function de(b){const _=b.textures;for(let F=0,H=_.length;F<H;F++){const Z=_[F];if(p(Z)){const pe=A(b),ve=n.get(Z).__webglTexture;t.bindTexture(pe,ve),S(pe),t.unbindTexture()}}}const ye=[],Xe=[];function Ne(b){if(b.samples>0){if(Ze(b)===!1){const _=b.textures,F=b.width,H=b.height;let Z=i.COLOR_BUFFER_BIT;const pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(b),J=_.length>1;if(J)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const te=b.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const Oe=n.get(_[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,Z,i.NEAREST),l===!0&&(ye.length=0,Xe.length=0,ye.push(i.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(ye.push(pe),Xe.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const Oe=n.get(_[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ce(b){return Math.min(r.maxSamples,b.samples)}function Ze(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function pt(b,_){const F=b.colorSpace,H=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Us&&F!==pi&&(ft.getTransfer(F)===bt?(H!==Pn||Z!==mn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",F)),_}function nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=se,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yg(i,e){function t(n,r=pi){let s;const a=ft.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dh)return i.BYTE;if(n===fh)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Pn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Qo)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===el)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===As||n===Rs||n===Cs||n===Ps)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===As)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===As)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===Is||n===_o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uo||n===fo)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===po)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return s.COMPRESSED_R11_EAC;if(n===go)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Is)return s.COMPRESSED_RG11_EAC;if(n===_o)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===wo||n===bo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Io||n===No)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Do)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===Ns||n===Oo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`;class Kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:$g,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jg extends Ri{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new Kg,p={},S=t.getContextAttributes();let A=null,x=null;const w=[],E=[],R=new _e;let v=null,T=null;const C=new An;C.viewport=new Ft;const I=new An;I.viewport=new Ft;const O=[C,I],V=new sf;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=w[K];return ee===void 0&&(ee=new sa,w[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=w[K];return ee===void 0&&(ee=new sa,w[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=w[K];return ee===void 0&&(ee=new sa,w[K]=ee),ee.getHandSpace()};function $(K){const ee=E.indexOf(K.inputSource);if(ee===-1)return;const Te=w[ee];Te!==void 0&&(Te.update(K.inputSource,K.frame,c||a),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",se);for(let K=0;K<w.length;K++){const ee=E[K];ee!==null&&(E[K]=null,w[K].disconnect(ee))}D=null,G=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(A),d=null,u=null,f=null,r=null,x=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",X),r.addEventListener("inputsourceschange",se),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,$e=null,Le=null;S.depth&&(Le=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=S.stencil?Ei:ei,$e=S.stencil?Ur:kn);const Ye={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ye),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ln(u.textureWidth,u.textureHeight,{format:Pn,type:mn,depthTexture:new Or(u.textureWidth,u.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(K){for(let ee=0;ee<K.removed.length;ee++){const Te=K.removed[ee],$e=E.indexOf(Te);$e>=0&&(E[$e]=null,w[$e].disconnect(Te))}for(let ee=0;ee<K.added.length;ee++){const Te=K.added[ee];let $e=E.indexOf(Te);if($e===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=E.length){E.push(Te),$e=Ye;break}else if(E[Ye]===null){E[Ye]=Te,$e=Ye;break}if($e===-1)break}const Le=w[$e];Le&&Le.connect(Te)}}const Y=new L,ne=new L;function re(K,ee,Te){Y.setFromMatrixPosition(ee.matrixWorld),ne.setFromMatrixPosition(Te.matrixWorld);const $e=Y.distanceTo(ne),Le=ee.projectionMatrix.elements,Ye=Te.projectionMatrix.elements,St=Le[14]/(Le[10]-1),ie=Le[14]/(Le[10]+1),ce=(Le[9]+1)/Le[5],ue=(Le[9]-1)/Le[5],de=(Le[8]-1)/Le[0],ye=(Ye[8]+1)/Ye[0],Xe=St*de,Ne=St*ye,Ce=$e/(-de+ye),Ze=Ce*-de;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const P=St+Ce,pt=ie+Ce,nt=Xe-Ze,b=Ne+($e-Ze),_=ce*ie/pt*P,F=ue*ie/pt*P;K.projectionMatrix.makePerspective(nt,b,_,F,P,pt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ge(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ee=K.near,Te=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),V.near=I.near=C.near=ee,V.far=I.far=C.far=Te,(D!==V.near||G!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,G=V.far),V.layers.mask=K.layers.mask|6,C.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const $e=K.parent,Le=V.cameras;Ge(V,$e);for(let Ye=0;Ye<Le.length;Ye++)Ge(Le[Ye],$e);Le.length===2?re(V,C,I):V.projectionMatrix.copy(C.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Fe(K,V,$e)};function Fe(K,ee,Te){Te===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let ht=null;function st(K,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let $e=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,$e=!0);for(let ie=0;ie<Te.length;ie++){const ce=Te[ie];let ue=null;if(d!==null)ue=d.getViewport(ce);else{const ye=f.getViewSubImage(u,ce);ue=ye.viewport,ie===0&&(e.setRenderTargetTextures(x,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(x))}let de=O[ie];de===void 0&&(de=new An,de.layers.enable(ie),de.viewport=new Ft,O[ie]=de),de.matrix.fromArray(ce.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ce.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ue.x,ue.y,ue.width,ue.height),ie===0&&(V.matrix.copy(de.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),$e===!0&&V.cameras.push(de)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const ie=f.getDepthInformation(Te[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,r.renderState)}if(Le&&Le.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let ie=0;ie<Te.length;ie++){const ce=Te[ie].camera;if(ce){let ue=p[ce];ue||(ue=new Th,p[ce]=ue);const de=f.getCameraImage(ce);ue.sourceTexture=de}}}}for(let Te=0;Te<w.length;Te++){const $e=E[Te],Le=w[Te];$e!==null&&Le!==void 0&&Le.update($e,ee,c||a)}ht&&ht(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ut=new Oh;ut.setAnimationLoop(st),this.setAnimationLoop=function(K){ht=K},this.dispose=function(){}}}const Qg=new mt,Wh=new tt;Wh.set(-1,0,0,0,1,0,0,0,1);function jg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Uh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),A=S.envMap,x=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const E=w.program;n.uniformBlockBinding(x,E)}function c(x,w){let E=r[x.id];E===void 0&&(m(x),E=h(x),r[x.id]=E,x.addEventListener("dispose",S));const R=w.program;n.updateUBOMapping(x,R);const v=e.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){const w=f();x.__bindingPointIndex=w;const E=i.createBuffer(),R=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=r[x.id],E=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,T=E.length;v<T;v++){const C=E[v];if(Array.isArray(C))for(let I=0,O=C.length;I<O;I++)d(C[I],v,I,R);else d(C,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,w,E,R){if(y(x,w,E,R)===!0){const v=x.__offset,T=x.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){const O=T[I],V=p(O);g(O,x.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,w,E){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,E)}function y(x,w,E,R){const v=x.value,T=w+"_"+E;if(R[T]===void 0)return typeof v=="number"||typeof v=="boolean"?R[T]=v:ArrayBuffer.isView(v)?R[T]=v.slice():R[T]=v.clone(),!0;{const C=R[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(x){const w=x.uniforms;let E=0;const R=16;for(let T=0,C=w.length;T<C;T++){const I=Array.isArray(w[T])?w[T]:[w[T]];for(let O=0,V=I.length;O<V;O++){const D=I[O],G=Array.isArray(D.value)?D.value:[D.value];for(let $=0,X=G.length;$<X;$++){const se=G[$],Y=p(se),ne=E%R,re=ne%Y.boundary,Ge=ne+re;E+=re,Ge!==0&&R-Ge<Y.storage&&(E+=R-Ge),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Y.storage}}}const v=E%R;return v>0&&(E+=R-v),x.__size=E,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):je("WebGLRenderer: Unsupported uniform value type.",x),w}function S(x){const w=x.target;w.removeEventListener("dispose",S);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function A(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:A}}const t_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function n_(){return Un===null&&(Un=new wh(t_,16,16,Ti,Gn),Un.name="DFG_LUT",Un.minFilter=Zt,Un.magFilter=Zt,Un.wrapS=Kn,Un.wrapT=Kn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class i_{constructor(e={}){const{canvas:t=Fu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=d,m=new Set([tl,el,jo]),p=new Set([mn,kn,Nr,Ur,Ko,Jo]),S=new Uint32Array(4),A=new Int32Array(4),x=new L;let w=null,E=null;const R=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,O=null,V=null,D=null,G=null;this._outputColorSpace=pn;let $=0,X=0,se=null,Y=-1,ne=null;const re=new Ft,Ge=new Ft;let Fe=null;const ht=new Je(0);let st=0,ut=t.width,K=t.height,ee=1,Te=null,$e=null;const Le=new Ft(0,0,ut,K),Ye=new Ft(0,0,ut,K);let St=!1;const ie=new sl;let ce=!1,ue=!1;const de=new mt,ye=new L,Xe=new Ft,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ze(){return se===null?ee:1}let P=n;function pt(M,N){return t.getContext(M,N)}let nt,b,_,F,H,Z,pe,ve,J,te,xe,Oe,Me,Ee,He,qe,Qe,U,we,j,ge,Re,oe;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",B,!1),P===null){const N="webgl2";if(P=pt(N,M),P===null)throw pt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(M){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",B,!1),vt("WebGLRenderer: "+M.message),M}function Ve(){nt=new nm(P),nt.init(),ge=new Yg(P,nt),b=new qp(P,nt,e,ge),_=new Xg(P,nt),b.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=P.createFramebuffer(),D=P.createFramebuffer(),G=P.createFramebuffer(),F=new sm(P),H=new Lg,Z=new qg(P,nt,_,H,b,ge,F),pe=new tm(C),ve=new of(P),Re=new Wp(P,ve),J=new im(P,ve,F,Re),te=new om(P,J,ve,Re,F),U=new am(P,b,Z),He=new Yp(H),xe=new Pg(C,pe,nt,b,Re,He),Oe=new jg(C,H),Me=new Ig,Ee=new zg(nt),Qe=new Vp(C,pe,_,te,g,l),qe=new Wg(C,te,b),oe=new e_(P,F,b,_),we=new Xp(P,nt,F),j=new rm(P,nt,F),F.programs=xe.programs,C.capabilities=b,C.extensions=nt,C.properties=H,C.renderLists=Me,C.shadowMap=qe,C.state=_,C.info=F}y!==mn&&(T=new cm(y,t.width,t.height,o,r,s));const ke=new Jg(C,P);this.xr=ke,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(ut,K,!1))},this.getSize=function(M){return M.set(ut,K)},this.setSize=function(M,N,W=!0){if(ke.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=M,K=N,t.width=Math.floor(M*ee),t.height=Math.floor(N*ee),W===!0&&(t.style.width=M+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(ut*ee,K*ee).floor()},this.setDrawingBufferSize=function(M,N,W){ut=M,K=N,ee=W,t.width=Math.floor(M*W),t.height=Math.floor(N*W),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(y===mn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,N,W,z){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,N,W,z),_.viewport(re.copy(Le).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,N,W,z){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,N,W,z),_.scissor(Ge.copy(Ye).multiplyScalar(ee).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(M){_.setScissorTest(St=M)},this.setOpaqueSort=function(M){Te=M},this.setTransparentSort=function(M){$e=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,W=!0){let z=0;if(M){let k=!1;if(se!==null){const be=se.texture.format;k=m.has(be)}if(k){const be=se.texture.type,Ie=p.has(be),fe=Qe.getClearColor(),Pe=Qe.getClearAlpha(),ze=fe.r,et=fe.g,rt=fe.b;Ie?(S[0]=ze,S[1]=et,S[2]=rt,S[3]=Pe,P.clearBufferuiv(P.COLOR,0,S)):(A[0]=ze,A[1]=et,A[2]=rt,A[3]=Pe,P.clearBufferiv(P.COLOR,0,A))}else z|=P.COLOR_BUFFER_BIT}N&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",B,!1),Qe.dispose(),Me.dispose(),Ee.dispose(),H.dispose(),pe.dispose(),te.dispose(),Re.dispose(),oe.dispose(),xe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Et),ke.removeEventListener("sessionend",me),it.stop()};function wt(M){M.preventDefault(),Rl("WebGLRenderer: Context Lost."),I=!0}function gt(){Rl("WebGLRenderer: Context Restored."),I=!1;const M=F.autoReset,N=qe.enabled,W=qe.autoUpdate,z=qe.needsUpdate,k=qe.type;Ve(),F.autoReset=M,qe.enabled=N,qe.autoUpdate=W,qe.needsUpdate=z,qe.type=k}function B(M){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function q(M){const N=M.target;N.removeEventListener("dispose",q),he(N)}function he(M){De(M),H.remove(M)}function De(M){const N=H.get(M).programs;N!==void 0&&(N.forEach(function(W){xe.releaseProgram(W)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,W,z,k,be){N===null&&(N=Ne);const Ie=k.isMesh&&k.matrixWorld.determinantAffine()<0,fe=ri(M,N,W,z,k);_.setMaterial(z,Ie);let Pe=W.index,ze=1;if(z.wireframe===!0){if(Pe=J.getWireframeAttribute(W),Pe===void 0)return;ze=2}const et=W.drawRange,rt=W.attributes.position;let Be=et.start*ze,Mt=(et.start+et.count)*ze;be!==null&&(Be=Math.max(Be,be.start*ze),Mt=Math.min(Mt,(be.start+be.count)*ze)),Pe!==null?(Be=Math.max(Be,0),Mt=Math.min(Mt,Pe.count)):rt!=null&&(Be=Math.max(Be,0),Mt=Math.min(Mt,rt.count));const Nt=Mt-Be;if(Nt<0||Nt===1/0)return;Re.setup(k,z,fe,W,Pe);let It,Pt=we;if(Pe!==null&&(It=ve.get(Pe),Pt=j,Pt.setIndex(It)),k.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Ze()),Pt.setMode(P.LINES)):Pt.setMode(P.TRIANGLES);else if(k.isLine){let Jt=z.linewidth;Jt===void 0&&(Jt=1),_.setLineWidth(Jt*Ze()),k.isLineSegments?Pt.setMode(P.LINES):k.isLineLoop?Pt.setMode(P.LINE_LOOP):Pt.setMode(P.LINE_STRIP)}else k.isPoints?Pt.setMode(P.POINTS):k.isSprite&&Pt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Jt=k._multiDrawStarts,Ue=k._multiDrawCounts,rn=k._multiDrawCount,_t=Pe?ve.get(Pe).bytesPerElement:1,vn=H.get(z).currentProgram.getUniforms();for(let In=0;In<rn;In++)vn.setValue(P,"_gl_DrawID",In),Pt.render(Jt[In]/_t,Ue[In])}else if(k.isInstancedMesh)Pt.renderInstances(Be,Nt,k.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ue=Math.min(W.instanceCount,Jt);Pt.renderInstances(Be,Nt,Ue)}else Pt.render(Be,Nt)};function We(M,N,W,z){O!==null&&M.isNodeMaterial&&O.setObject(z,M),ce===!0&&He.setState(M,W,!1),M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,_n(M,N,z),M.side=wi,M.needsUpdate=!0,_n(M,N,z),M.side=Mn):_n(M,N,z)}this.compile=function(M,N,W=null){W===null&&(W=M),O!==null&&O.renderStart(M,N,W),E=Ee.get(W),E.init(N),v.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),M!==W&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),ue=this.localClippingEnabled,ce=He.init(this.clippingPlanes,ue),ce===!0&&He.setGlobalState(this.clippingPlanes,N),O!==null&&qe.render(E.state.shadowsArray,W,N);const z=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const be=k.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const fe=be[Ie];We(fe,W,N,k),z.add(fe)}else We(be,W,N,k),z.add(be)}),E=v.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(M,N,W=null){const z=this.compile(M,N,W);return new Promise(k=>{function be(){if(z.forEach(function(Ie){const Pe=H.get(Ie).currentProgram;(Pe===void 0||Pe.isReady())&&z.delete(Ie)}),z.size===0){k(M);return}setTimeout(be,10)}nt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ke=null;function Lt(M){Ke&&Ke(M)}function Et(){it.stop()}function me(){it.start()}const it=new Oh;it.setAnimationLoop(Lt),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(M){Ke=M,ke.setAnimationLoop(M),M===null?it.stop():it.start()},ke.addEventListener("sessionstart",Et),ke.addEventListener("sessionend",me),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(M,N);const W=ke.enabled===!0&&ke.isPresenting===!0,z=T!==null&&(se===null||W)&&T.begin(C,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(N),N=ke.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,N,se),E=Ee.get(M,v.length),E.init(N),E.state.textureUnits=Z.getTextureUnits(),v.push(E),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ie.setFromProjectionMatrix(de,Bn,N.reversedDepth),ue=this.localClippingEnabled,ce=He.init(this.clippingPlanes,ue),w=Me.get(M,R.length),w.init(),R.push(w),ke.enabled===!0&&ke.isPresenting===!0){const Ie=C.xr.getDepthSensingMesh();Ie!==null&&ct(Ie,N,-1/0,C.sortObjects)}ct(M,N,0,C.sortObjects),w.finish(),O!==null&&O.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(Te,$e),Ce=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ce&&Qe.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&He.beginShadows();const k=E.state.shadowsArray;if(qe.render(k,M,N),ce===!0&&He.endShadows(),(z&&T.hasRenderPass())===!1){const Ie=w.opaque,fe=w.transmissive;if(E.setupLights(),N.isArrayCamera){const Pe=N.cameras;if(fe.length>0)for(let ze=0,et=Pe.length;ze<et;ze++){const rt=Pe[ze];Ct(Ie,fe,M,rt)}Ce&&Qe.render(M);for(let ze=0,et=Pe.length;ze<et;ze++){const rt=Pe[ze];xt(w,M,rt,rt.viewport)}}else fe.length>0&&Ct(Ie,fe,M,N),Ce&&Qe.render(M),xt(w,M,N)}se!==null&&X===0&&(Z.updateMultisampleRenderTarget(se),Z.updateRenderTargetMipmap(se)),z&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,N),Re.resetDefaultState(),Y=-1,ne=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),ce===!0&&He.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,O!==null&&O.renderEnd()};function ct(M,N,W,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ie)){z&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const Ie=te.update(M),fe=M.material;fe.visible&&w.push(M,Ie,fe,W,Xe.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ie))){const Ie=te.update(M),fe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Xe.copy(Ie.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(de)),Array.isArray(fe)){const Pe=Ie.groups;for(let ze=0,et=Pe.length;ze<et;ze++){const rt=Pe[ze],Be=fe[rt.materialIndex];Be&&Be.visible&&w.push(M,Ie,Be,W,Xe.z,rt,N)}}else fe.visible&&w.push(M,Ie,fe,W,Xe.z,null,N)}}const be=M.children;for(let Ie=0,fe=be.length;Ie<fe;Ie++)ct(be[Ie],N,W,z)}function xt(M,N,W,z){const{opaque:k,transmissive:be,transparent:Ie}=M;E.setupLightsView(W),ce===!0&&He.setGlobalState(C.clippingPlanes,W),z&&_.viewport(re.copy(z)),k.length>0&&Bt(k,N,W),be.length>0&&Bt(be,N,W),Ie.length>0&&Bt(Ie,N,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ct(M,N,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Be=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Ln(1,1,{generateMipmaps:!0,type:Be?Gn:mn,minFilter:yi,samples:Math.max(4,b.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const be=E.state.transmissionRenderTarget[z.id],Ie=z.viewport||re;be.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Pe=C.getActiveCubeFace(),ze=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(ht),st=C.getClearAlpha(),st<1&&C.setClearColor(16777215,.5),C.clear(),Ce&&Qe.render(W);const et=C.toneMapping;C.toneMapping=zn;const rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ce===!0&&He.setGlobalState(C.clippingPlanes,z),Bt(M,W,z),Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Mt=0,Nt=N.length;Mt<Nt;Mt++){const It=N[Mt],{object:Pt,geometry:Jt,material:Ue,group:rn}=It;if(Ue.side===Mn&&Pt.layers.test(z.layers)){const _t=Ue.side;Ue.side=cn,Ue.needsUpdate=!0,kt(Pt,W,z,Jt,Ue,rn),Ue.side=_t,Ue.needsUpdate=!0,Be=!0}}Be===!0&&(Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be))}C.setRenderTarget(fe,Pe,ze),C.setClearColor(ht,st),rt!==void 0&&(z.viewport=rt),C.toneMapping=et}function Bt(M,N,W){const z=N.isScene===!0?N.overrideMaterial:null;for(let k=0,be=M.length;k<be;k++){const Ie=M[k],{object:fe,geometry:Pe,group:ze}=Ie;let et=Ie.material;et.allowOverride===!0&&z!==null&&(et=z),fe.layers.test(W.layers)&&kt(fe,N,W,Pe,et,ze)}}function kt(M,N,W,z,k,be){O!==null&&k.isNodeMaterial&&O.setObject(M,k),M.onBeforeRender(C,N,W,z,k,be),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(C,N,W,z,M,be),k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,C.renderBufferDirect(W,N,z,k,M,be),k.side=wi,k.needsUpdate=!0,C.renderBufferDirect(W,N,z,k,M,be),k.side=Mn):C.renderBufferDirect(W,N,z,k,M,be),M.onAfterRender(C,N,W,z,k,be)}function _n(M,N,W){N.isScene!==!0&&(N=Ne);const z=H.get(M),k=E.state.lights,be=E.state.shadowsArray,Ie=k.state.version,fe=xe.getParameters(M,k.state,be,N,W,E.state.lightProbeGridArray),Pe=xe.getProgramCacheKey(fe);let ze=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=pe.get(M.envMap||z.environment,et),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",q),ze=new Map,z.programs=ze);let rt=ze.get(Pe);if(rt!==void 0){if(z.currentProgram===rt&&z.lightsStateVersion===Ie)return ae(M,fe),rt}else fe.uniforms=xe.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,W,fe),M.onBeforeCompile(fe,C),rt=xe.acquireProgram(fe,Pe),ze.set(Pe,rt),z.uniforms=fe.uniforms;const Be=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=He.uniform),ae(M,fe),z.needsLights=Wt(M),z.lightsStateVersion=Ie,z.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.sunLights.value=k.state.sun,Be.sunLightShadows.value=k.state.sunShadow,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.sunShadowMatrix.value=k.state.sunShadowMatrix,Be.sunShadowCascade.value=k.state.sunShadowCascade,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=rt,z.uniformsList=null,rt}function yn(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Ls.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ae(M,N){const W=H.get(M);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function tn(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let W=0,z=M.length;W<z;W++){const k=M[W];if(k.texture!==null&&k.boundingBox.containsPoint(x))return k}return null}function ri(M,N,W,z,k){N.isScene!==!0&&(N=Ne),Z.resetTextureUnits();const be=N.fog,Ie=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,fe=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ft.workingColorSpace,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,ze=pe.get(z.envMap||Ie,Pe),et=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Be=!!W.morphAttributes.position,Mt=!!W.morphAttributes.normal,Nt=!!W.morphAttributes.color;let It=zn;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(It=C.toneMapping);const Pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=Pt!==void 0?Pt.length:0,Ue=H.get(z),rn=E.state.lights;if(ce===!0&&(ue===!0||M!==ne)){const Dt=M===ne&&z.id===Y;He.setState(z,M,Dt)}let _t=!1;z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==rn.state.version||Ue.outputColorSpace!==fe||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==ze||z.fog===!0&&Ue.fog!==be||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==He.numPlanes||Ue.numIntersection!==He.numIntersection)||Ue.vertexAlphas!==et||Ue.vertexTangents!==rt||Ue.morphTargets!==Be||Ue.morphNormals!==Mt||Ue.morphColors!==Nt||Ue.toneMapping!==It||Ue.morphTargetsCount!==Jt||!!Ue.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ue.__version=z.version);let vn=Ue.currentProgram;_t===!0&&(vn=_n(z,N,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,vn,Ue));let In=!1,si=!1,Di=!1;const At=vn.getUniforms(),zt=Ue.uniforms;if(_.useProgram(vn.program)&&(In=!0,si=!0,Di=!0),z.id!==Y&&(Y=z.id,si=!0),Ue.needsLights){const Dt=tn(E.state.lightProbeGridArray,k);Ue.lightProbeGrid!==Dt&&(Ue.lightProbeGrid=Dt,si=!0)}if(In||ne!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),At.setValue(P,"projectionMatrix",M.projectionMatrix),At.setValue(P,"viewMatrix",M.matrixWorldInverse);const oi=At.map.cameraPosition;oi!==void 0&&oi.setValue(P,ye.setFromMatrixPosition(M.matrixWorld)),b.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&At.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),ne!==M&&(ne=M,si=!0,Di=!0)}if(Ue.needsLights&&(rn.state.sunShadowMap.length>0&&At.setValue(P,"sunShadowMap",rn.state.sunShadowMap,Z),rn.state.directionalShadowMap.length>0&&At.setValue(P,"directionalShadowMap",rn.state.directionalShadowMap,Z),rn.state.spotShadowMap.length>0&&At.setValue(P,"spotShadowMap",rn.state.spotShadowMap,Z),rn.state.pointShadowMap.length>0&&At.setValue(P,"pointShadowMap",rn.state.pointShadowMap,Z)),k.isSkinnedMesh){At.setOptional(P,k,"bindMatrix"),At.setOptional(P,k,"bindMatrixInverse");const Dt=k.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),At.setValue(P,"boneTexture",Dt.boneTexture,Z))}k.isBatchedMesh&&(At.setOptional(P,k,"batchingTexture"),At.setValue(P,"batchingTexture",k._matricesTexture,Z),At.setOptional(P,k,"batchingIdTexture"),At.setValue(P,"batchingIdTexture",k._indirectTexture,Z),At.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&At.setValue(P,"batchingColorTexture",k._colorsTexture,Z));const ai=W.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&U.update(k,W,vn),(si||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,At.setValue(P,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(zt.envMapIntensity.value=N.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=n_()),si){if(At.setValue(P,"toneMappingExposure",C.toneMappingExposure),Ue.needsLights&&Yt(zt,Di),be&&z.fog===!0&&Oe.refreshFogUniforms(zt,be),Oe.refreshMaterialUniforms(zt,z,ee,K,E.state.transmissionRenderTarget[M.id]),Ue.needsLights&&Ue.lightProbeGrid){const Dt=Ue.lightProbeGrid;zt.probesSH.value=Dt.texture,zt.probesMin.value.copy(Dt.boundingBox.min),zt.probesMax.value.copy(Dt.boundingBox.max),zt.probesResolution.value.copy(Dt.resolution)}Ls.upload(P,yn(Ue),zt,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ls.upload(P,yn(Ue),zt,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&At.setValue(P,"center",k.center),At.setValue(P,"modelViewMatrix",k.modelViewMatrix),At.setValue(P,"normalMatrix",k.normalMatrix),At.setValue(P,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const Dt=z.uniformsGroups;for(let oi=0,Ii=Dt.length;oi<Ii;oi++){const Sl=Dt[oi];oe.update(Sl,vn),oe.bind(Sl,vn)}}return vn}function Yt(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Wt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,N,W){const z=H.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=N,H.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const W=H.get(M);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,W=0){se=M,$=N,X=W;let z=null,k=!1,be=!1;if(M){const fe=H.get(M);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,fe.__webglFramebuffer),re.copy(M.viewport),Ge.copy(M.scissor),Fe=M.scissorTest,_.viewport(re),_.scissor(Ge),_.setScissorTest(Fe),Y=-1;return}else if(fe.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(fe.__hasExternalTextures)Z.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const et=M.depthTexture;if(fe.__boundDepthTexture!==et){if(et!==null&&H.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(be=!0);const ze=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?z=ze[N][W]:z=ze[N],k=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?z=H.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[W]:z=ze,re.copy(M.viewport),Ge.copy(M.scissor),Fe=M.scissorTest}else re.copy(Le).multiplyScalar(ee).floor(),Ge.copy(Ye).multiplyScalar(ee).floor(),Fe=St;if(W!==0&&(z=V),_.bindFramebuffer(P.FRAMEBUFFER,z)&&_.drawBuffers(M,z),_.viewport(re),_.scissor(Ge),_.setScissorTest(Fe),k){const fe=H.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,W)}else if(be){const fe=N;for(let Pe=0;Pe<M.textures.length;Pe++){const ze=H.get(M.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,ze.__webglTexture,W,fe)}}else if(M!==null&&W!==0){const fe=H.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,W)}Y=-1};function nn(M){const N=H.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=b.textureFormatReadable(M.format),N.__typeReadable=b.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,W,z,k,be,Ie,fe=0){if(!(M&&M.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Pe=Pe[Ie]),Pe){_.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const ze=M.textures[fe],et=ze.format,rt=ze.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe);const Be=nn(ze);if(Be.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&W>=0&&W<=M.height-k&&P.readPixels(N,W,z,k,ge.convert(et),ge.convert(rt),be)}finally{const ze=se!==null?H.get(se).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,N,W,z,k,be,Ie,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Pe=Pe[Ie]),Pe)if(N>=0&&N<=M.width-z&&W>=0&&W<=M.height-k){_.bindFramebuffer(P.FRAMEBUFFER,Pe);const ze=M.textures[fe],et=ze.format,rt=ze.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe);const Be=nn(ze);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Mt),P.bufferData(P.PIXEL_PACK_BUFFER,be.byteLength,P.STREAM_READ),P.readPixels(N,W,z,k,ge.convert(et),ge.convert(rt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const Nt=se!==null?H.get(se).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Nt);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ou(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Mt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,be),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Mt),P.deleteSync(It),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,W=0){const z=Math.pow(2,-W),k=Math.floor(M.image.width*z),be=Math.floor(M.image.height*z),Ie=N!==null?N.x:0,fe=N!==null?N.y:0;Z.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Ie,fe,k,be),_.unbindTexture()},this.copyTextureToTexture=function(M,N,W=null,z=null,k=0,be=0){let Ie,fe,Pe,ze,et,rt,Be,Mt,Nt;const It=M.isCompressedTexture?M.mipmaps[be]:M.image;if(W!==null)Ie=W.max.x-W.min.x,fe=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,ze=W.min.x,et=W.min.y,rt=W.isBox3?W.min.z:0;else{const zt=Math.pow(2,-k);Ie=Math.floor(It.width*zt),fe=Math.floor(It.height*zt),M.isDataArrayTexture?Pe=It.depth:M.isData3DTexture?Pe=Math.floor(It.depth*zt):Pe=1,ze=0,et=0,rt=0}z!==null?(Be=z.x,Mt=z.y,Nt=z.z):(Be=0,Mt=0,Nt=0);const Pt=ge.convert(N.format),Jt=ge.convert(N.type);let Ue;N.isData3DTexture?(Z.setTexture3D(N,0),Ue=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ue=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ue=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const rn=_.getParameter(P.UNPACK_ROW_LENGTH),_t=_.getParameter(P.UNPACK_IMAGE_HEIGHT),vn=_.getParameter(P.UNPACK_SKIP_PIXELS),In=_.getParameter(P.UNPACK_SKIP_ROWS),si=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,It.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,It.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(P.UNPACK_SKIP_ROWS,et),_.pixelStorei(P.UNPACK_SKIP_IMAGES,rt);const Di=M.isDataArrayTexture||M.isData3DTexture,At=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const zt=H.get(M),ai=H.get(N),Dt=H.get(zt.__renderTarget),oi=H.get(ai.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,Dt.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Ii=0;Ii<Pe;Ii++)Di&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(M).__webglTexture,k,rt+Ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(N).__webglTexture,be,Nt+Ii)),P.blitFramebuffer(ze,et,Ie,fe,Be,Mt,Ie,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||H.has(M)){const zt=H.get(M),ai=H.get(N);_.bindFramebuffer(P.READ_FRAMEBUFFER,D),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,G);for(let Dt=0;Dt<Pe;Dt++)Di?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,k,rt+Dt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zt.__webglTexture,k),At?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ai.__webglTexture,be,Nt+Dt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ai.__webglTexture,be),k!==0?P.blitFramebuffer(ze,et,Ie,fe,Be,Mt,Ie,fe,P.COLOR_BUFFER_BIT,P.NEAREST):At?P.copyTexSubImage3D(Ue,be,Be,Mt,Nt+Dt,ze,et,Ie,fe):P.copyTexSubImage2D(Ue,be,Be,Mt,ze,et,Ie,fe);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else At?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ue,be,Be,Mt,Nt,Ie,fe,Pe,Pt,Jt,It.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Ue,be,Be,Mt,Nt,Ie,fe,Pe,Pt,It.data):P.texSubImage3D(Ue,be,Be,Mt,Nt,Ie,fe,Pe,Pt,Jt,It):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,be,Be,Mt,Ie,fe,Pt,Jt,It.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,be,Be,Mt,It.width,It.height,Pt,It.data):P.texSubImage2D(P.TEXTURE_2D,be,Be,Mt,Ie,fe,Pt,Jt,It);_.pixelStorei(P.UNPACK_ROW_LENGTH,rn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),_.pixelStorei(P.UNPACK_SKIP_PIXELS,vn),_.pixelStorei(P.UNPACK_SKIP_ROWS,In),_.pixelStorei(P.UNPACK_SKIP_IMAGES,si),be===0&&N.generateMipmaps&&P.generateMipmap(Ue),_.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){$=0,X=0,se=null,_.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function Xh(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new qt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in s){const f=Ac(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][u]);const g=Ac(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Ac(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new an(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){const y=h.getComponent(u,g);o.setComponent(u+f,g,y)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const r_={stone:"#8a8378",stoneDark:"#615b54",rock:"#75706a",earth:"#5b4a36",grass:"#6b8a3e",baseRim:"#2b2620",wood:"#8a5f38",woodDark:"#5a3b22",cloth:"#e3d3ae",clothDark:"#b8a47c",dark:"#3a3430",metal:"#9a968f",leather:"#6b4a2e",tunic:"#7a3b2e",hero:"#3f6fa8",skin:"#e0b890",ghost:"#c9cdf0",eye:"#ff4d5e",void:"#140622",riftStone:"#6a6275",copper:"#d97e3a",mule:"#8a7560",hoof:"#2e2620",claw:"#1a1826",brick:"#8c4a3c",bronze:"#a5683a",ivory:"#efe4cc",violet:"#5b4b8f"},s_={glow:2,eye:2.4,copper:.7,mana:.95,void:.9,ghost:.45},er={day:{emissive:.28,hemi:["#fff1dc","#3a2e22",.62],key:["#ffe2b8",1.25],back:["#c9d8ff",.25],rim:[.08,"#ffffff"]},dusk:{emissive:.6,hemi:["#ffd2b0","#2a2030",.55],key:["#ffab66",1.05],back:["#8fa0ff",.45],rim:[.25,"#ffc9a0"]},night:{emissive:1,hemi:["#a0aee6","#2a2a48",1.35],key:["#d8deff",2.1],back:["#b0c2ff",.9],rim:[.9,"#c8d4ff"]}},a_=new Je,o_=new Je;function Mr(i,e,t,n){return n.copy(a_.set(i)).lerp(o_.set(e),t)}function qh(i,e){const t=e??{emissive:0,hemiSky:new Je,hemiGround:new Je,hemiIntensity:0,keyColor:new Je,keyIntensity:0,backColor:new Je,backIntensity:0,rimStrength:0,rimColor:new Je},n=Math.min(1,Math.max(0,i)),[r,s,a]=n<.5?[er.day,er.dusk,n*2]:[er.dusk,er.night,(n-.5)*2],o=(l,c)=>l+(c-l)*a;return t.emissive=o(r.emissive,s.emissive),Mr(r.hemi[0],s.hemi[0],a,t.hemiSky),Mr(r.hemi[1],s.hemi[1],a,t.hemiGround),t.hemiIntensity=o(r.hemi[2],s.hemi[2]),Mr(r.key[0],s.key[0],a,t.keyColor),t.keyIntensity=o(r.key[1],s.key[1]),Mr(r.back[0],s.back[0],a,t.backColor),t.backIntensity=o(r.back[1],s.back[1]),t.rimStrength=o(r.rim[0],s.rim[0]),Mr(r.rim[1],s.rim[1],a,t.rimColor),t}const ir={uRim:{value:er.day.rim[0]},uRimColor:{value:new Je(er.day.rim[1])},uToCam:{value:new L(0,1,0)}},l_={"#000000":"#34303c","#0000FF":"#3a5cff","#00FF00":"#39e35a","#FFFF00":"#f2e23a","#FF0000":"#f0303a"},Pa=i=>l_[i.toUpperCase()]??i;function c_(i,e){const t=new Je(i),n=(t.r+t.g+t.b)/3;return t.r+=(n-t.r)*e,t.g+=(n-t.g)*e,t.b+=(n-t.b)*e,t}const Rc=new Map;function h_(i,e){const t=i+(e??""),n=Rc.get(t);if(n)return n;const r=e??r_[i],s=c_(r,i==="mana"||i==="glow"?.05:.14),a=s_[i]??0,o=a?i==="void"?new Je("#3a0a66"):i==="ghost"?new Je("#6a70d0"):s.clone():new Je(0,0,0);o.multiplyScalar(a);const l={color:s,emit:o};return Rc.set(t,l),l}const u_="minis-emit-rim";function d_(i){i.uniforms.uRim=ir.uRim,i.uniforms.uRimColor=ir.uRimColor,i.uniforms.uToCam=ir.uToCam,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aEmit;
varying vec3 vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vEmit = aEmit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vEmit;
uniform float uRim;
uniform vec3 uRimColor;
uniform vec3 uToCam;`).replace("#include <emissivemap_fragment>",`float rimF = pow(1.0 - clamp(dot(normalize(normal), uToCam), 0.0, 1.0), 2.5);
totalEmissiveRadiance = vEmit * emissive + uRimColor * (uRim * rimF);`)}function qo(i,e){const t=new Jd({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,emissive:16777215,emissiveIntensity:e,transparent:i==="ghost",opacity:i==="ghost"?.9:1,side:Mn});return t.onBeforeCompile=d_,t.customProgramCacheKey=()=>u_,t.userData.base=t.emissiveIntensity,t}let Gs=0;const Zn=qh(0),Yo={opaque:qo("opaque",Zn.emissive),ghost:qo("ghost",Zn.emissive)},Yh=new Set,Cc=i=>Yo[i];function f_(i){const e=qo(i,Zn.emissive);return Yh.add(e),e}const Pc=()=>Gs>.5,p_=()=>Gs,m_=()=>Zn;function g_(i){Gs=Math.min(1,Math.max(0,i)),qh(Gs,Zn);for(const e of[Yo.opaque,Yo.ghost,...Yh])e.emissiveIntensity=Zn.emissive,e.userData.base=Zn.emissive;ir.uRim.value=Zn.rimStrength,ir.uRimColor.value.copy(Zn.rimColor)}const le=Math.PI*2,Li=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},ms=new mt,$i=new ii,gs=new Dn,La=new L,Da=new L,__=new L(0,1,0);function Lc(i,e,t){const n=i.index?i.toNonIndexed():i.clone();i!==n&&i.dispose(),n.deleteAttribute("uv");const r=n.attributes.position.count,{color:s,emit:a}=h_(e,t),o=new Float32Array(r*3),l=new Float32Array(r*3);for(let c=0;c<r;c++)o[c*3]=s.r,o[c*3+1]=s.g,o[c*3+2]=s.b,l[c*3]=a.r,l[c*3+1]=a.g,l[c*3+2]=a.b;return n.setAttribute("color",new an(o,3)),n.setAttribute("aEmit",new an(l,3)),n}class ul{constructor(e,t){dt(this,"part");dt(this,"matrix");this.part=e??this,this.matrix=t}add(e,t,n,r=0,s=0,a=0,o=0,l=0,c=0,h=1,f=1,u=1){const d=Lc(e,t,n);gs.set(o,l,c),$i.setFromEuler(gs),ms.compose(La.set(r,s,a),$i,Da.set(h,f,u)),d.applyMatrix4(ms),d.applyMatrix4(this.matrix),this.part.buckets[t==="ghost"?"ghost":"opaque"].push(d)}beam(e,t,n,r,s=5){const a=new L(...e),o=new L(...t),l=a.distanceTo(o),c=Lc(new Se(n,n,l,s),r);$i.setFromUnitVectors(__,o.clone().sub(a).normalize()),ms.compose(La.copy(a).lerp(o,.5),$i,Da.set(1,1,1)),c.applyMatrix4(ms),c.applyMatrix4(this.matrix),this.part.buckets.opaque.push(c)}crystal(e,t,n,r,s,a,o,l,c){const h=this.at(s,a,o,l,0,c);h.add(new Se(n,n*.82,r,6),e,t,0,r/2,0),h.add(new Rt(n,n*1.8,6),e,t,0,r+n*.9,0)}at(e,t,n,r=0,s=0,a=0){gs.set(r,s,a),$i.setFromEuler(gs);const o=new mt().compose(La.set(e,t,n),$i,Da.set(1,1,1));return new ul(this.part,this.matrix.clone().multiply(o))}}class Dc extends ul{constructor(t,n={}){super(null,new mt);dt(this,"group",new Qi);dt(this,"buckets",{opaque:[],ghost:[]});dt(this,"baked",{opaque:[],ghost:[]});dt(this,"detail");dt(this,"uniqueGeometry");dt(this,"uniqueMaterial");dt(this,"parent");dt(this,"name");this.name=t,this.group.name=t,this.parent=n.parent??null,this.detail=n.detail??!1,this.uniqueGeometry=n.uniqueGeometry??!1,this.uniqueMaterial=n.uniqueMaterial??!1,n.pos&&this.group.position.set(...n.pos),n.rot&&this.group.rotation.set(...n.rot),n.scale&&this.group.scale.set(...n.scale),this.parent&&this.parent.group.add(this.group)}}class v_{constructor(){dt(this,"root",new Dc("root"));dt(this,"parts",[this.root]);dt(this,"lights",[])}part(e,t={}){const n=new Dc(e,{parent:t.parent??this.root,...t});return this.parts.push(n),n}light(e,t,n,r,s=1){this.lights.push({color:e,pos:[t,n,r],strength:s})}base(e,t=1,n=1){const r=this.root,s=Li(e);r.add(new Se(1.02,1.1,.16,40),"baseRim",void 0,0,.08,0,0,0,0,t,1,n),r.add(new Se(1,1,.03,40),"earth",void 0,0,.175,0,0,0,0,t,1,n);for(let a=0;a<5;a++){const o=s()*le,l=.55+s()*.35;r.add(new ti(.045+s()*.06,0),"rock",void 0,Math.cos(o)*l*t,.2,Math.sin(o)*l*n,s()*3,s()*3,0)}for(let a=0;a<7;a++){const o=s()*le,l=.5+s()*.42,c=Math.cos(o)*l*t,h=Math.sin(o)*l*n;for(let f=0;f<3;f++)r.add(new Rt(.022,.12+s()*.08,4),"grass",void 0,c+(s()-.5)*.06,.25,h+(s()-.5)*.06,(s()-.5)*.6,0,(s()-.5)*.6)}}compile(){const e={root:this.root.group,partNames:[],detailNames:[],bakedNames:[],uniqueGeometry:[],uniqueMaterial:[],lights:this.lights,tris:0};this.root.group.updateMatrixWorld(!0);const t=new mt;for(const n of this.parts){if(!n.detail)continue;let r=n.parent;for(;r&&r.detail;)r=r.parent;if(r){t.copy(r.group.matrixWorld).invert().multiply(n.group.matrixWorld);for(const s of["opaque","ghost"])for(const a of n.buckets[s])r.baked[s].push(a.clone().applyMatrix4(t))}}for(const n of this.parts){n!==this.root&&e.partNames.push(n.name),n.detail&&e.detailNames.push(n.name),n.uniqueGeometry&&e.uniqueGeometry.push(n.name),n.uniqueMaterial&&e.uniqueMaterial.push(n.name);for(const r of["opaque","ghost"]){const s=Ic(n.buckets[r]);if(s){const o=new gn(s,Cc(r));o.name=`${n.name}#${r}`,n.group.add(o),e.tris+=s.attributes.position.count/3}const a=Ic(n.baked[r]);if(a){const o=new gn(a,Cc(r));o.name=`${n.name}#baked-${r}`,o.visible=!1,n.group.add(o),e.bakedNames.push(o.name)}}}return e}}function Ic(i){if(i.length===0)return null;const e=i.length===1?i[0]:Xh(i,!1);if(i.length>1)for(const t of i)t.dispose();return e}function Nc(i){const e=i.root.clone(!0),t={},n={};e.traverse(o=>{o.isMesh?n[o.name]=o:o!==e&&o.name&&(t[o.name]=o)});const r=[],s=[];for(const o of i.uniqueGeometry)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.geometry=c.geometry.clone(),c.geometry.userData.orig=c.geometry.attributes.position.array.slice(),r.push(c.geometry))}for(const o of i.uniqueMaterial)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.material=f_(l),s.push(c.material))}const a={root:e,parts:t,meshes:n,lod:"near",setLod(o){if(o===a.lod)return;a.lod=o;const l=o==="near";for(const c of i.detailNames)t[c].visible=l;for(const c of i.bakedNames)n[c].visible=!l},dispose(){for(const o of r)o.dispose();for(const o of s)o.dispose()}};return a}const or=(i,e,t=0,n=le)=>new ll(i.map(([r,s])=>new _e(r,s)),e,t,n),Ia=.1,x_=1,M_=1.1,S_=.7,y_=.25,E_=.08,w_=.15,Uc=1.06,b_=.42,T_=6,A_=9,Fc=3.6,R_=25,C_=.004,Sr=Math.PI/180;function P_(){const i=new qt;return i.setAttribute("position",new yt([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5],3)),i.setAttribute("uv",new yt([0,0,1,0,0,1,1,1],2)),i.setIndex([0,2,1,2,3,1]),i}const Oc=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  vUv = uv;
  vCol = instanceColor;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`,L_=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.0, 1.0, r);
  a *= a;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <colorspace_fragment>
}`,D_=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.5, 1.0, r);
  gl_FragColor = vec4(0.0, 0.0, 0.0, a * vCol.r);
}`,Zi=new mt,_s=new L,Na=new L,yr=new ii,vs=new Dn,xs=new Je,I_=new L;class N_{constructor(e,t){dt(this,"hemi",new ef);dt(this,"key",new nc);dt(this,"back",new nc);dt(this,"quad",P_());dt(this,"poolMat");dt(this,"shadowMat");dt(this,"pools");dt(this,"shadows");dt(this,"poolN",0);dt(this,"shadowN",0);dt(this,"sky",{darkness:0,sunAltDeg:45,sunAzDeg:180,moon:.5});dt(this,"pitch",45);dt(this,"bearing",0);dt(this,"now",0);dt(this,"poolGain",Ia);dt(this,"shDx",0);dt(this,"shDz",1);dt(this,"shLen",1);dt(this,"shK",0);dt(this,"colorCache",new Map);dt(this,"world");this.world=e,t.add(this.hemi,this.key,this.back),this.poolMat=new Sn({vertexShader:Oc,fragmentShader:L_,transparent:!0,depthWrite:!1,blending:Ja,side:Mn,forceSinglePass:!0}),this.shadowMat=new Sn({vertexShader:Oc,fragmentShader:D_,transparent:!0,depthWrite:!1,side:Mn,forceSinglePass:!0}),this.shadows=this.make(this.shadowMat,512,1),this.pools=this.make(this.poolMat,256,2),this.apply()}make(e,t,n){const r=new ko(this.quad,e,t);return r.instanceColor=new zs(new Float32Array(t*3),3),r.instanceMatrix.setUsage(Cr),r.instanceColor.setUsage(Cr),r.frustumCulled=!1,r.renderOrder=n,r.count=0,this.world.add(r),r}grow(e,t,n,r){if(t<=e.instanceMatrix.count)return e;this.world.remove(e),e.dispose();let s=e.instanceMatrix.count;for(;s<t;)s*=2;return this.make(n,s,r)}setSky(e){Object.assign(this.sky,e),g_(this.sky.darkness),this.apply()}getSky(){return{...this.sky}}setCamera(e,t){e===this.pitch&&t===this.bearing||(this.pitch=e,this.bearing=t,this.apply())}apply(){const e=m_(),{darkness:t,sunAltDeg:n,sunAzDeg:r,moon:s}=this.sky,a=this.pitch*Sr,o=this.bearing*Sr,l=ir.uToCam.value.set(-Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a)).normalize();this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const c=Math.max(R_,n)*Sr,h=r*Sr,f=I_.set(Math.sin(h)*Math.cos(c),Math.sin(c),-Math.cos(h)*Math.cos(c)),u=_s.set(l.x*.9+.3,.95,l.z*.9+.1).normalize();this.key.position.copy(f).lerp(u,t).normalize(),this.key.color.copy(e.keyColor);const d=.82+.36*s;this.key.intensity=e.keyIntensity*(1+(d-1)*t),this.back.position.set(Math.sin(o)*Math.sin(a)-l.x*.2,.55,-Math.cos(o)*Math.sin(a)-l.z*.2).normalize(),this.back.color.copy(e.backColor),this.back.intensity=e.backIntensity,this.poolGain=Ia+(x_-Ia)*t,this.shDx=-Math.sin(h),this.shDz=Math.cos(h);const g=Math.max(A_,n)*Sr;this.shLen=Math.min(Fc,1/Math.tan(g)),this.shK=b_*Math.min(1,Math.max(0,n/T_))}begin(e,t,n){this.now=e,this.poolN=0,this.shadowN=0,this.pools=this.grow(this.pools,t,this.poolMat,2),this.shadows=this.grow(this.shadows,n,this.shadowMat,1)}colorOf(e){let t=this.colorCache.get(e);return t||(t=new Je(e),this.colorCache.set(e,t)),t}pool(e,t,n,r,s,a,o){const l=this.pools;if(this.poolN>=l.instanceMatrix.count)return;const c=4.5+o%7*.6,h=1+E_*Math.sin(this.now*.001*c+o),f=this.poolGain*a*h;xs.copy(this.colorOf(s)).multiplyScalar(f),Zi.compose(_s.set(e,t,n),yr.identity(),Na.set(r*2,1,r*2)),l.setMatrixAt(this.poolN,Zi),l.setColorAt(this.poolN,xs),this.poolN++}poolFor(e,t,n,r,s,a,o,l){this.pool(e,t,n,r*(M_+S_*Math.min(1.6,a)+y_*o),s,Math.min(1.2,a),l)}shadow(e,t,n,r,s,a,o=1){const l=this.shadows,c=C_*Math.max(n,r);if(this.shadowN<l.instanceMatrix.count&&(vs.set(0,s,0),yr.setFromEuler(vs),Zi.compose(_s.set(e,c,t),yr,Na.set(n*2*Uc*o,1,r*2*Uc*o)),l.setMatrixAt(this.shadowN,Zi),l.setColorAt(this.shadowN,xs.setScalar(w_)),this.shadowN++),this.shK>.01&&a>0&&this.shadowN<l.instanceMatrix.count){const h=Math.max(n,r),f=Math.max(h,Math.min(Fc*h,a*h*this.shLen)),u=Math.atan2(-this.shDz,this.shDx),d=(f-h)/2;vs.set(0,u,0),yr.setFromEuler(vs),Zi.compose(_s.set(e+this.shDx*d,c*1.5,t+this.shDz*d),yr,Na.set(f+h,1,Math.min(n,r)*1.9)),l.setMatrixAt(this.shadowN,Zi),l.setColorAt(this.shadowN,xs.setScalar(this.shK)),this.shadowN++}}end(){this.pools.count=this.poolN,this.poolN&&(this.pools.instanceMatrix.needsUpdate=!0,this.pools.instanceColor.needsUpdate=!0),this.shadows.count=this.shadowN,this.shadowN&&(this.shadows.instanceMatrix.needsUpdate=!0,this.shadows.instanceColor.needsUpdate=!0)}stats(){return{pools:this.poolN,shadows:this.shadowN,darkness:+this.sky.darkness.toFixed(3),sunAltDeg:+this.sky.sunAltDeg.toFixed(1),sunAzDeg:+this.sky.sunAzDeg.toFixed(1),moon:+this.sky.moon.toFixed(2),poolGain:+this.poolGain.toFixed(3),sunShadow:+this.shK.toFixed(3),shadowLen:+this.shLen.toFixed(2)}}dispose(){this.world.remove(this.pools,this.shadows),this.pools.dispose(),this.shadows.dispose(),this.poolMat.dispose(),this.shadowMat.dispose(),this.quad.dispose()}}const U_={front:"z",build(i){i.base(11);const e=i.root.at(0,.185,0);e.add(new Se(.78,.82,.12,8),"stone",void 0,0,.06,0,0,Math.PI/8),e.add(new Se(.6,.64,.12,8),"stone",void 0,0,.18,0,0,Math.PI/8),e.add(new Se(.44,.48,.1,8),"stoneDark",void 0,0,.29,0,0,Math.PI/8);for(let o=0;o<4;o++){const l=Math.PI/4+o*Math.PI/2,c=Math.cos(l)*.7,h=Math.sin(l)*.7;e.add(new Se(.055,.085,.5,4),"stoneDark",void 0,c,.37,h,0,l),e.add(new Rt(.058,.12,4),"stoneDark",void 0,c,.68,h,0,l),e.add(new Tt(.035,0),"glow","#ffb56b",c*.9,.42,h*.9)}const t=i.part("heart",{pos:[0,1.205,0]});i.part("core",{parent:t}).add(new hn(.28,1),"copper",void 0,0,0,0,0,0,0,1,1.55,1),i.part("ringA",{parent:t,rot:[1.2,0,.3],detail:!0}).add(new ot(.48,.018,3,28),"glow","#ffc98a"),i.part("ringB",{parent:t,rot:[1.9,0,-.5],detail:!0}).add(new ot(.4,.014,3,24),"glow","#ffc98a");const a=i.part("orbit",{parent:t,detail:!0});for(let o=0;o<5;o++){const l=o/5*le;a.add(new Hn(.06,0),"glow","#ffb56b",Math.cos(l)*.66,Math.sin(l*2)*.12,Math.sin(l)*.66,l,l)}i.light("#ffae5a",0,1.2,0,1.3)},animate({parts:i},e){i.core.rotation.y=e*le,i.heart.position.y=1.205+Math.sin(e*le)*.05,i.ringA.rotation.z=e*le,i.ringB.rotation.z=-e*le,i.orbit.rotation.y=e*le/5}},F_={front:"z",build(i,e){i.base(23);const t=i.root.at(0,.185,0);[[.42,0,.1,0],[.28,-.36,.06,.2],[.24,.32,.05,-.22],[.18,.1,.04,.4]].forEach(([f,u,d,g],y)=>t.add(new ti(f,0),"rock",void 0,u,d,g,y,y*2,0,1,.55,1));const r=i.part("crystals",{pos:[0,.185,0],uniqueMaterial:!0}),s=Li(5);r.crystal("mana",e,.17,.62,0,.12,0,.06,-.05),[[-.22,.1,.12,.4,.1,.5],[.2,.08,-.08,.34,-.2,-.45],[.08,.1,.22,.28,.5,-.15],[-.12,.08,-.2,.26,-.4,.3],[.28,.05,.16,.2,.3,-.7],[-.32,.05,-.05,.18,0,.8]].forEach(([f,u,d,g,y,m])=>r.crystal("mana",e,.06+s()*.05,g,f,u,d,y,m));const o=[0,1.75,0];for(let f=0;f<3;f++){const u=f/3*le+.5;t.beam([Math.cos(u)*.72,.02,Math.sin(u)*.72],o,.03,"wood")}for(let f=0;f<3;f++){const u=f/3*le+.5,d=(f+1)/3*le+.5;t.beam([Math.cos(u)*.5,.55,Math.sin(u)*.5],[Math.cos(d)*.5,.55,Math.sin(d)*.5],.018,"woodDark")}i.part("pulley",{pos:[0,.185+1.66,0],rot:[Math.PI/2,0,0],detail:!0}).add(new Se(.09,.09,.05,10),"metal"),i.part("rope",{pos:[.09,.185+1.4,0],detail:!0}).add(new Se(.008,.008,1,4),"clothDark"),i.part("bucket",{pos:[.09,.185+1.2,0],detail:!0}).add(new Se(.075,.055,.11,8),"woodDark"),t.add(new Q(.035,.55,.035),"woodDark",void 0,.72,.27,.32),t.add(new Tt(.06,0),"glow",e,.72,.6,.32),i.light(e,0,.8,0,1.2),i.light(e,.72,.8,.32,.5)},animate({parts:i,meshes:e},t){const n=1.24+(Math.sin(t*le)*.5+.5)*.22;i.bucket.position.y=.185+n,i.rope.scale.y=1.62-n,i.rope.position.y=.185+(1.62+n)/2+.03,i.pulley.rotation.y=t*le;const r=e["crystals#opaque"].material;r.emissiveIntensity=r.userData.base*(1+.35*Math.sin(t*le))}},Dr=[-.25,.185,0],Ua=(i,e,t)=>[Dr[0]+i,Dr[1]+e,Dr[2]+t],O_={front:"x",build(i,e){i.base(37,1.3,.85);const t=i.root.at(...Dr);t.add(new Q(1.2,.1,.66),"wood",void 0,0,.4,0);for(const g of[-.33,.33])t.add(new Q(1.2,.14,.04),"woodDark",void 0,0,.5,g);const n=[];for(let g=0;g<=10;g++){const y=Math.PI*g/10;n.push([Math.cos(y)*.36,Math.sin(y)*.42])}const r=new ni;n.forEach(([g,y],m)=>m?r.lineTo(g,y):r.moveTo(g,y)),r.lineTo(-.36,0),r.lineTo(.36,0);const s=new ks;n.slice().reverse().forEach(([g,y],m)=>m?s.lineTo(g*.9,y*.9):s.moveTo(g*.9,y*.9)),r.holes.push(s);const a=new Xs(r,{depth:.95,bevelEnabled:!1});a.translate(0,0,-.475),t.add(a,"cloth",void 0,-.08,.45,0,0,Math.PI/2);for(const g of[-.5,-.18,.14,.38])t.add(new ot(.37,.014,3,10,Math.PI),"clothDark",void 0,g,.45,0,0,Math.PI/2);const o=new ni;n.forEach(([g,y],m)=>m?o.lineTo(g*.9,y*.9):o.moveTo(g*.9,y*.9)),t.add(new Pi(o),"dark",void 0,.38,.45,0,0,Math.PI/2),t.add(new Q(.2,.2,.2),"wood",void 0,-.72,.55,.12,0,.3),t.add(new Q(.15,.15,.15),"woodDark",void 0,-.72,.72,.1,0,.7),t.add(new Se(.09,.09,.22,10),"woodDark",void 0,-.2,.52,.41,Math.PI/2);for(const g of[-.07,.07])t.add(new ot(.092,.01,3,12),"metal",void 0,-.2+g,.52,.41,0,Math.PI/2);let l=0;for(const g of[-.4,.3])for(const y of[-.4,.4]){const m=i.part(`wheel${l++}`,{pos:Ua(g,.25,y),detail:!0});m.add(new ot(.2,.03,4,14),"woodDark"),m.add(new Se(.045,.045,.08,8),"metal",void 0,0,0,0,Math.PI/2);for(let p=0;p<6;p++)m.add(new Q(.018,.38,.018),"wood",void 0,0,0,0,0,0,p*Math.PI/6)}t.add(new Q(.16,.04,.5),"woodDark",void 0,.5,.6,0);const c=t.at(.5,.62,0);c.add(new Rt(.12,.3,7),"tunic",void 0,0,.15,0),c.add(new hn(.075,0),"skin",void 0,0,.36,0),c.add(new Rt(.095,.16,7),"tunic",void 0,0,.44,-.01);for(const g of[-.2,.2])t.beam([.6,.4,g],[1.02,.5,g*.6],.014,"woodDark");const h=i.part("mule",{pos:Ua(1.22,.2,0),detail:!0});h.add(new Q(.46,.2,.2),"mule",void 0,0,.35,0);const f=i.part("head",{parent:h,pos:[.26,.45,0],detail:!0});f.add(new Q(.1,.2,.12),"mule",void 0,0,.05,0,0,0,-.5),f.add(new Q(.2,.1,.1),"mule",void 0,.1,.12,0,0,0,-.35);for(const g of[-.04,.04])f.add(new Rt(.025,.12,4),"mule",void 0,.02,.22,g,g*3,0,.2);h.add(new Rt(.02,.16,4),"hoof",void 0,-.25,.32,0,0,0,2.4),[[.16,.07,0],[.16,-.07,.5],[-.16,.07,.5],[-.16,-.07,0]].forEach(([g,y],m)=>{const p=i.part(`hip${m}`,{parent:h,pos:[g,.28,y],detail:!0});p.add(new Q(.05,.26,.05),"mule",void 0,0,-.13,0),p.add(new Q(.055,.04,.055),"hoof",void 0,0,-.27,0)}),t.add(new Q(.03,.5,.03),"woodDark",void 0,.6,.75,.26),i.part("hang",{pos:Ua(.62,.98,.26),detail:!0}).add(new Tt(.055,0),"glow",e,0,-.09,0),i.light(e,.35,.95,.26,1)},animate({parts:i},e){for(let n=0;n<4;n++)i[`wheel${n}`].rotation.z=-e*le/6;const t=[0,.5,.5,0];for(let n=0;n<4;n++)i[`hip${n}`].rotation.z=Math.sin((e+t[n])*le)*.45;i.mule.position.y=Dr[1]+.2+Math.abs(Math.sin(e*le*2))*.015,i.head.rotation.z=Math.sin(e*le*2)*.06,i.hang.rotation.x=Math.sin(e*le)*.35}},Bc={front:"z",build(i){i.base(41);const e=i.part("f",{pos:[0,.33,0]});i.part("cloak",{parent:e,detail:!0,uniqueGeometry:!0}).add(or([[.6,0],[.5,.3],[.42,.7],[.35,1.05],[.28,1.3],[.16,1.45]],11),"ghost"),e.add(or([[.05,1.9],[.2,1.84],[.3,1.66],[.31,1.46],[.25,1.3]],11,.35,le-.7),"ghost"),e.add(new hn(.19,0),"void",void 0,0,1.56,.1,0,0,0,1,1,.6);for(const r of[-.07,.07])e.add(new Tt(.04,0),"eye",void 0,r,1.58,.23);for(const r of[-1,1]){const s=i.part(r<0?"armL":"armR",{parent:e,pos:[r*.3,1.28,.04],detail:!0});s.add(new Rt(.12,.6,6),"ghost",void 0,0,-.28,.12,Math.PI+.5,0,0);for(let a=-1;a<=1;a++)s.add(new Rt(.018,.14,4),"claw",void 0,a*.04,-.52,.34,2.2,0,a*.2)}const n=i.part("wisps",{parent:e,detail:!0});for(let r=0;r<6;r++){const s=r/6*le;n.add(new Hn(.045,0),"glow","#a9b0ff",Math.cos(s)*.72,.1+r%3*.12,Math.sin(s)*.72,s,s)}i.light("#8f96ff",0,1.2,.3,.8),i.light("#ff4d5e",0,1.9,.5,.35)},animate({parts:i,meshes:e,lod:t},n){const r=i.f;if(r.position.y=.33+Math.sin(n*le)*.07,r.rotation.y=Math.sin(n*le)*.12,t!=="near")return;const s=e["cloak#ghost"].geometry,a=s.attributes.position,o=s.userData.orig;for(let l=0;l<a.count;l++){const c=o[l*3],h=o[l*3+1],f=o[l*3+2],u=Math.atan2(f,c),d=Math.max(0,1-h/.6),g=1+d*(.1*Math.sin(3*u+n*le)+.06*Math.cos(5*u-n*le));a.setXYZ(l,c*g,h+d*.1*Math.sin(4*u-n*le),f*g)}a.needsUpdate=!0,i.armL.rotation.x=-.15+Math.sin(n*le)*.12,i.armR.rotation.x=-.15+Math.sin(n*le+1)*.12,i.wisps.rotation.y=n*le/6,i.wisps.position.y=Math.sin(n*le*2)*.04}},B_={front:"z",build(i){i.base(53);const e=i.root.at(0,.185,0),t=Li(9);for(const u of[2.3,2.9,3.5,4.1,4.7]){const d=.5+t()*.3,g=Math.cos(u)*.72,y=Math.sin(u)*.72;e.add(new Q(.16,d,.12),"riftStone",void 0,g,d/2-.02,y,(t()-.5)*.25,-u,(t()-.5)*.25)}e.add(new Se(.42,.5,.03,9),"void",void 0,0,.01,0),e.add(new ot(.46,.025,3,18),"glow","#b06bff",0,.03,0,Math.PI/2);const n=i.part("tear",{pos:[0,1.185,0]}),r=[],s=18;for(let u=0;u<s;u++){const d=u/s*le,g=u%2?.82:1.05;r.push([Math.cos(d)*.36*g,Math.sin(d)*.62*g])}const a=new ni;r.forEach(([u,d],g)=>g?a.lineTo(u,d):a.moveTo(u,d));const o=new ks;r.slice().reverse().forEach(([u,d],g)=>g?o.lineTo(u*.84,d*.84):o.moveTo(u*.84,d*.84)),a.holes.push(o);const l=new Xs(a,{depth:.06,bevelEnabled:!1});l.translate(0,0,-.03),n.add(l,"glow","#9b4df0");const c=new ni;r.forEach(([u,d],g)=>g?c.lineTo(u*.86,d*.86):c.moveTo(u*.86,d*.86)),n.add(new Pi(c),"void"),[[.24,1],[.17,-2],[.1,3]].forEach(([u],d)=>{const g=i.part(`swirl${d}`,{parent:n,scale:[1,1.6,1],detail:!0});i.part(`arc${d}`,{parent:g,detail:!0}).add(new ot(u,.016,3,16,le*.7),"glow","#d3a8ff",0,0,.02)});const f=i.part("debris",{pos:[0,.185,0],detail:!0});for(let u=0;u<7;u++){const d=u/7*le;f.add(new ti(.04+u%3*.015,0),"riftStone",void 0,Math.cos(d)*.55,.25+u%4*.18,Math.sin(d)*.35,d,d)}i.light("#a24dff",0,1.2,.25,1.5)},animate({parts:i},e){const t=[1,-2,3];for(let n=0;n<3;n++)i[`arc${n}`].rotation.z=e*le*t[n];i.debris.rotation.y=e*le/7,i.tear.scale.set(1+Math.sin(e*le)*.03,1+Math.cos(e*le)*.03,1)}},$h={you:{seed:67,cloak:"hero",tunic:"tunic",ring:"#6fb3ff",gem:"#9fd0ff",head:"hood",hand:"staff",pack:!0},cleric:{seed:61,cloak:"ivory",tunic:"cloth",ring:"#ffd54a",gem:"#ffe08a",head:"circlet",hand:"mace",pack:!1},fighter:{seed:59,cloak:"tunic",tunic:"metal",ring:"#cd7f32",gem:"#ffb070",head:"helm",hand:"sword",pack:!1},wizard:{seed:57,cloak:"violet",tunic:"violet",ring:"#7b68ee",gem:"#c8b4ff",head:"hat",hand:"staff",pack:!1}};function Zh(i,e){i.base(e.seed);const t=i.root.at(0,.185,0);t.add(new ot(.9,.022,3,44),"glow",e.ring,0,.02,0,Math.PI/2);for(const r of[-.08,.08])t.add(new Q(.09,.1,.15),"leather",void 0,r,.05,.02);const n=i.part("body",{pos:[0,.185,0]});switch(n.add(or([[.3,.05],[.27,.4],[.2,.8],[.14,.98]],10,.5,le-1),e.cloak),n.add(new Se(.13,.17,.55,8),e.tunic,void 0,0,.62,0),n.add(new ot(.16,.022,3,10),"leather",void 0,0,.6,0,Math.PI/2),n.add(new Q(.05,.05,.02),"metal",void 0,0,.6,.17),n.add(new hn(.13,1),"skin",void 0,0,1.1,0),e.head){case"hood":n.add(or([[.02,1.36],[.13,1.32],[.17,1.18],[.16,1.02],[.13,.96]],10,.45,le-.9),e.cloak);break;case"circlet":n.add(new ot(.12,.018,4,12),"glow",e.gem,0,1.17,0,Math.PI/2),n.add(new ln(.13,8,5,0,le,0,1.2),"leather",void 0,0,1.11,-.01);break;case"helm":n.add(new ln(.15,8,5,0,le,0,1.7),"bronze",void 0,0,1.1,0),n.add(new Q(.04,.16,.06),"bronze",void 0,0,1.06,.13),n.add(new Q(.04,.12,.3),"tunic",void 0,0,1.28,-.04);break;case"hat":n.add(new Se(.26,.26,.025,10),e.cloak,void 0,0,1.19,0),n.add(new Rt(.15,.42,9),e.cloak,void 0,.02,1.4,-.02,0,0,-.18),n.add(new ot(.14,.015,3,10),"glow",e.gem,0,1.22,0,Math.PI/2);break}if(e.pack?(n.add(new Q(.24,.3,.13),"leather",void 0,0,.8,-.2),n.add(new Se(.055,.055,.32,8),"cloth",void 0,0,1,-.2,0,0,Math.PI/2)):e.hand==="sword"?(n.add(new Se(.24,.24,.03,12),"woodDark",void 0,0,.78,-.2,Math.PI/2),n.add(new ln(.06,6,4),"bronze",void 0,0,.78,-.23),n.add(new ot(.23,.015,3,14),"bronze",void 0,0,.78,-.2)):e.hand==="mace"?(n.add(new Q(.16,.14,.1),"leather",void 0,.16,.5,-.12,0,.4),n.add(new Se(.035,.035,.3,6),"cloth",void 0,0,.9,-.19,0,0,.4)):(n.add(new Q(.16,.2,.06),"leather",void 0,0,.75,-.19,0,0,.1),n.add(new Q(.17,.03,.07),"glow",e.gem,0,.75,-.19,0,0,.1)),n.beam([.14,.92,0],[.27,.72,.1],.045,e.tunic==="metal"?"bronze":e.tunic),n.beam([-.14,.92,0],[-.2,.62,.06],.045,e.tunic==="metal"?"bronze":e.tunic),e.tunic==="metal"){for(const r of[-.15,.15])n.add(new ln(.08,6,4,0,le,0,1.6),"bronze",void 0,r,.92,0);n.add(new Q(.08,.06,.03),"bronze",void 0,0,.6,.17)}if(e.hand==="staff"){t.beam([.3,0,.12],[.28,1.45,.1],.022,"wood");const r=i.part("gem",{pos:[.28,.185+1.56,.1],detail:!0});r.group.userData.y0=r.group.position.y,r.add(new Tt(.07,0),"glow",e.gem,0,0,0,0,0,0,1,1.6,1);for(let s=0;s<3;s++){const a=s/3*le;t.beam([.28,1.44,.1],[.28+Math.cos(a)*.06,1.6,.1+Math.sin(a)*.06],.008,"wood")}i.light(e.gem,.28,1.75,.1,1.1)}else if(e.hand==="mace"){t.beam([.3,.55,.12],[.3,1.25,.1],.02,"woodDark");const r=i.part("gem",{pos:[.3,.185+1.3,.1],detail:!0});r.group.userData.y0=r.group.position.y,r.add(new ti(.075,0),"glow",e.gem);for(let s=0;s<4;s++)r.add(new Q(.02,.1,.05),"bronze",void 0,Math.cos(s/4*le)*.075,0,Math.sin(s/4*le)*.075,0,-(s/4)*le);i.light(e.gem,.3,1.45,.1,.9)}else{t.add(new Q(.05,.62,.014),"metal",void 0,.3,.52,.12),t.add(new Q(.16,.03,.04),"bronze",void 0,.3,.84,.12),t.add(new Se(.02,.02,.16,6),"leather",void 0,.3,.94,.12);const r=i.part("gem",{pos:[.3,.185+1.04,.12],detail:!0});r.group.userData.y0=r.group.position.y,r.add(new Tt(.035,0),"glow",e.gem),i.light(e.gem,.3,1.1,.12,.5)}}const Kh=({parts:i},e)=>{i.body.scale.y=1+Math.sin(e*le)*.012,i.gem.position.y=i.gem.userData.y0+Math.sin(e*le)*.02,i.gem.rotation.y=e*le},z_={front:"z",build(i){Zh(i,$h.you)},animate:Kh};function Fa(i){return{front:"z",build(e){Zh(e,$h[i])},animate:Kh}}function Ki(i,e,t,n=8,r="stone"){const s=Math.PI/n;i.add(new Se(e,e*1.06,t,n),r,void 0,0,t/2,0,0,s),i.add(new Se(e*1.09,e*1.09,.045,n),"stoneDark",void 0,0,t*.5,0,0,s),i.add(new Q(.16,.24,.05),"dark",void 0,0,.12,e*1.03)}function Ms(i,e,t,n=8){const r=Math.PI/n;i.add(new Se(e*1.14,e*1.02,.08,n),"stoneDark",void 0,0,t+.04,0,0,r);for(let s=0;s<n;s++){const a=s/n*le+r;i.add(new Q(.07,.11,.12),"stone",void 0,Math.cos(a)*e*1.06,t+.135,Math.sin(a)*e*1.06,0,-a)}}function k_(i,e,t,n,r=8,s="dark"){i.add(new Rt(e,n,r),s,void 0,0,t+n/2,0,0,Math.PI/r),i.add(new Tt(.035,0),"metal",void 0,0,t+n+.02,0)}function fn(i,e,t,n,r,s=0,a="wood"){i.add(new Q(e,e,e),a,void 0,t,n+e/2,r,0,s),i.add(new Q(e*1.02,e*.12,e*1.02),"woodDark",void 0,t,n+e/2,r,0,s)}function Ds(i,e,t,n,r,s,a=!1){const o=a?Math.PI/2:0,l=a?r+e:r+t/2;i.add(new Se(e,e,t,9),"woodDark",void 0,n,l,s,o);for(const c of[-.3,.3]){const h=new ot(e*1.02,e*.1,3,12);i.add(h,"metal",void 0,n+0,l+(a?0:c*t),s+(a?c*t:0),a?0:Math.PI/2,0,0)}}function dl(i,e,t,n,r,s,a=1,o){const l=i.part(e,{pos:[n,r,s],detail:!0});return l.add(new Rt(.11*a,.34*a,6),"glow",t,0,.17*a,0),l.add(new Rt(.06*a,.2*a,5),"glow","#fff4d6",0,.1*a,.01,0,.4),l.add(new Hn(.035*a,0),"glow",t,.06*a,.36*a,0,.3,.2),l.add(new Hn(.03*a,0),"glow",t,-.05*a,.42*a,.02,.8,1.1),l}function Hs(i,e,t,n,r,s=1){const a=i.part(e,{pos:[t,n,r],detail:!0});a.group.userData.y0=n;for(let o=0;o<3;o++){const l=(.05+o*.022)*s;a.add(new hn(l,0),"clothDark",void 0,(o%2?.03:-.03)*s,(.06+o*.14)*s,0,o,o*2)}return a}function fl(i,e,t=1){i.position.y=i.userData.y0+e*.16*t;const n=.8+e*.45;i.scale.set(n,n,n)}function pl(i,e,t=1){const n=e*le;i.scale.set(1+.1*t*Math.sin(n*3),1+.16*t*Math.sin(n*2+1),1+.1*t*Math.cos(n*4)),i.rotation.y=Math.sin(n*2)*.2}function Si(i,e,t,n,r,s,a=.7,o){const l=i.root;l.add(new Se(.014,.018,a,5),"wood",void 0,n,r+a/2,s),l.add(new Tt(.025,0),"metal",void 0,n,r+a+.01,s);const c=i.part(e,{pos:[n,r+a-.04,s],detail:!0}),h=new ni;return h.moveTo(0,0),h.lineTo(-.28,-.06),h.lineTo(0,-.17),c.add(new Pi(h),"glow",t),c}function ml(i,e){i.rotation.y=Math.sin(e*le*2)*.3,i.rotation.x=Math.sin(e*le*3+1)*.1}const Jh=["bare","forge","greater-forge","scriptorium","confluence","workshop","storehouse","factory"],Ss="#ff8a3a",Oa="#cfe6ff",Ut=.185;function Ba(i,e){i.add(new ot(e,e*.16,4,10),"metal");for(let t=0;t<4;t++)i.add(new Q(e*.12,e*2,e*.12),"metal",void 0,0,0,0,0,0,t*Math.PI/4);for(let t=0;t<8;t++){const n=t/8*le;i.add(new Q(e*.22,e*.22,e*.24),"metal",void 0,Math.cos(n)*e*1.12,Math.sin(n)*e*1.12,0,0,0,n)}}function G_(i){return{front:"z",build(e,t){const n=101+Jh.indexOf(i)*7;e.base(n);const r=e.root.at(0,Ut,0);switch(i){case"bare":{Ki(r,.4,.95,8,"stoneDark");for(const[s,a]of[[.55,.55],[-.55,.55],[.55,-.55],[-.55,-.55]])r.add(new Se(.02,.025,1.25,5),"wood",void 0,s,.62,a);for(const s of[.55,1.1])r.beam([.55,s,.55],[-.55,s,.55],.014,"woodDark"),r.beam([.55,s,-.55],[-.55,s,-.55],.014,"woodDark"),r.beam([.55,s,.55],[.55,s,-.55],.014,"woodDark"),r.beam([-.55,s,.55],[-.55,s,-.55],.014,"woodDark");r.add(new Q(.9,.03,.14),"wood",void 0,0,1.12,.5,0,0,.04),r.add(new Q(.5,.03,.12),"wood",void 0,.2,.25,.75,0,.4),Si(e,"flag",t,.42,Ut+.95,-.1,.55);break}case"forge":case"greater-forge":{const s=i==="greater-forge",a=s?1.35:1.05;if(Ki(r,.4,a),Ms(r,.4,a),s)for(const l of[.3,.72])r.add(new ot(.42,.025,4,16),"copper",void 0,0,l,0,Math.PI/2);r.add(new Q(.11,.17,.03),"glow",Ss,0,.13,.42),r.add(new Q(.08,.1,.03),"glow",Ss,.12,a*.68,.4,0,.25),(s?[[.16,-.12],[-.2,.06]]:[[.12,-.1]]).forEach(([l,c],h)=>{r.add(new Q(.2,.42,.2),"stoneDark",void 0,l,a+.2,c),r.add(new Q(.24,.06,.24),"dark",void 0,l,a+.42,c),dl(e,`fire${h}`,Ss,l,Ut+a+.42,c,s?.8:.65),Hs(e,`smoke${h}`,l,Ut+a+.6,c,s?1.1:.9)}),r.add(new Se(.08,.1,.16,7),"woodDark",void 0,.5,.08,.5),r.add(new Q(.2,.06,.08),"metal",void 0,.5,.19,.5,0,.5),Si(e,"flag",t,-.34,Ut+a+.08,.2,.5),e.light(Ss,0,a+.5,0,s?1.2:.9);break}case"scriptorium":{Ki(r,.4,1.05),k_(r,.5,1.05,.6,8,"dark"),r.add(new ot(.44,.02,3,16),"woodDark",void 0,0,1.06,0,Math.PI/2),r.add(new Q(.14,.18,.03),"glow",Oa,0,.72,.41),r.add(new Q(.03,.2,.03),"dark",void 0,0,.72,.42),r.add(new Q(.16,.03,.03),"dark",void 0,0,.72,.42),r.add(new Q(.1,.12,.03),"glow",t,.28,.5,.29,0,.75);const s=e.part("pages",{pos:[0,Ut+1.75,0],detail:!0});for(let a=0;a<4;a++){const o=a/4*le;s.add(new Q(.1,.13,.008),"glow",Oa,Math.cos(o)*.3,a%2*.1-.05,Math.sin(o)*.3,.3,-o,.2)}r.add(new Q(.05,.3,.05),"woodDark",void 0,.55,.15,.45),r.add(new Q(.18,.02,.14),"cloth",void 0,.55,.31,.45,-.4,.3),Si(e,"flag",t,-.3,Ut+1,.3,.5),e.light(Oa,0,.8,.5,.8);break}case"confluence":{Ki(r,.4,.85),Ms(r,.4,.85),r.add(new Se(.34,.3,.1,8),"stoneDark",void 0,0,.9,0,0,Math.PI/8);const s=e.part("crystals",{pos:[0,Ut+.9,0],uniqueMaterial:!0});s.crystal("mana",t,.11,.5,-.28,.02,.06,.1,-.7),s.crystal("mana","#f4f1ea",.11,.5,.28,.02,-.06,-.1,.7),s.crystal("mana",t,.05,.22,-.1,0,.22,.4,-.2),s.crystal("mana","#f4f1ea",.05,.22,.12,0,-.2,-.4,.2),e.part("ring",{pos:[0,Ut+1.55,0],rot:[1.3,0,.2],detail:!0}).add(new ot(.22,.016,3,20),"glow",t),e.part("ring2",{pos:[0,Ut+1.55,0],rot:[1.8,0,-.4],detail:!0}).add(new ot(.17,.014,3,18),"glow","#fff6e0"),e.part("drop",{pos:[0,Ut+1.55,0],detail:!0}).add(new Tt(.07,0),"glow",t,0,0,0,0,0,0,1,1.5,1),r.add(new Q(.1,.13,.03),"glow",t,0,.55,.41),Si(e,"flag",t,.42,Ut+.85,-.2,.45),e.light(t,0,1.6,0,1.1);break}case"workshop":{Ki(r,.38,1),Ms(r,.38,1);for(const o of[-.32,.32])r.add(new Se(.025,.03,.62,5),"wood",void 0,.82,.31,o);r.add(new Q(.62,.035,.8),"woodDark",void 0,.55,.7,0,0,0,.35);for(const o of[.4,.55,.7])r.add(new Q(.06,.02,.82),"wood",void 0,o,.72+(o-.55)*-.36,0,0,0,.35);r.add(new Q(.4,.05,.22),"wood",void 0,.6,.3,.2);for(const o of[.12,.28])r.add(new Q(.04,.28,.04),"woodDark",void 0,.6,.14,o);r.add(new Q(.03,.14,.03),"wood",void 0,.5,.38,.2,0,0,.8),r.add(new Q(.08,.05,.04),"metal",void 0,.45,.43,.2,0,0,.8),fn(r,.16,.65,0,-.3,.3),r.add(new Se(.03,.03,.2,6),"woodDark",void 0,.42,.6,-.05,0,0,Math.PI/2);const s=e.part("gear",{pos:[.5,Ut+.6,-.05],rot:[0,Math.PI/2,0],detail:!0});Ba(s,.16);const a=e.part("gear2",{pos:[.5,Ut+.88,-.05],rot:[0,Math.PI/2,0],detail:!0});Ba(a,.09),r.add(new Q(.1,.12,.03),"glow",t,-.1,.5,.39,0,-.25),Si(e,"flag",t,-.32,Ut+1,.2,.5),e.light(t,0,.7,.4,.5);break}case"storehouse":{Ki(r,.5,.75,10),Ms(r,.5,.75,10),r.add(new Se(.44,.44,.04,10),"woodDark",void 0,0,.78,0,0,Math.PI/10),fn(r,.2,.1,.8,-.1,.2),fn(r,.15,-.16,.8,.12,.9),fn(r,.12,.1,1,-.1,.5,"woodDark"),fn(r,.2,.72,0,.3,.2),fn(r,.16,.62,0,-.5,.9),fn(r,.14,.72,.2,.3,.7,"woodDark"),Ds(r,.1,.24,-.7,0,.3),Ds(r,.1,.24,-.62,0,-.42,!0),Ds(r,.09,.22,-.4,0,-.66),r.add(new ln(.11,6,5),"clothDark",void 0,.3,.1,-.68,0,0,0,1,.8,1),r.add(new Q(.03,.03,.34),"woodDark",void 0,.3,.62,.6);const s=e.part("sign",{pos:[.3,Ut+.62,.72],detail:!0});s.add(new Q(.2,.14,.02),"glow",t,0,-.1,0),s.add(new Q(.01,.06,.01),"metal",void 0,0,-.03,0),e.light(t,.3,.55,.75,.4);break}case"factory":{r.add(new Q(.72,.16,.72),"stoneDark",void 0,0,.08,0),r.add(new Q(.62,1.1,.62),"brick",void 0,0,.71,0);for(const o of[.45,.85])r.add(new Q(.66,.04,.66),"stoneDark",void 0,0,o,0);r.add(new Q(.7,.06,.7),"dark",void 0,0,1.29,0),r.add(new Q(.16,.24,.05),"dark",void 0,0,.28,.32);for(const o of[-.18,.18])r.add(new Q(.1,.12,.03),"glow",t,o,.7,.32);r.add(new Se(.1,.13,.8,8),"stoneDark",void 0,-.18,1.7,-.18),r.add(new Se(.13,.11,.08,8),"dark",void 0,-.18,2.12,-.18),Hs(e,"smoke0",-.18,Ut+2.18,-.18,1.2),r.add(new Se(.11,.11,.22,8),"metal",void 0,.16,1.43,.1);const s=e.part("rod",{pos:[.16,Ut+1.54,.1],detail:!0});s.add(new Se(.035,.035,.3,6),"metal",void 0,0,.15,0),s.add(new Q(.16,.05,.1),"dark",void 0,0,.32,0),r.add(new Se(.03,.03,.16,6),"woodDark",void 0,.36,.6,.05,0,0,Math.PI/2);const a=e.part("gear",{pos:[.4,Ut+.6,.05],rot:[0,Math.PI/2,0],detail:!0});Ba(a,.15),r.add(new Q(.34,.05,.16),"metal",void 0,.56,.24,.25),fn(r,.12,.72,.27,.25,.2),Si(e,"flag",t,-.28,Ut+1.32,.26,.5),e.light(t,0,.7,.4,.5);break}}},animate({parts:e},t){e.flag&&ml(e.flag,t);for(let n=0;n<2;n++)e[`fire${n}`]&&pl(e[`fire${n}`],t),e[`smoke${n}`]&&fl(e[`smoke${n}`],t);e.pages&&(e.pages.rotation.y=t*le,e.pages.position.y=Ut+1.75+Math.sin(t*le*2)*.03),e.ring&&(e.ring.rotation.z=t*le),e.ring2&&(e.ring2.rotation.z=-t*le),e.drop&&(e.drop.rotation.y=t*le,e.drop.position.y=Ut+1.55+Math.sin(t*le)*.04),e.gear&&(e.gear.rotation.z=t*le),e.gear2&&(e.gear2.rotation.z=-t*le*(16/9)),e.sign&&(e.sign.rotation.z=Math.sin(t*le)*.12),e.rod&&(e.rod.position.y=Ut+1.54+(Math.sin(t*le*2)*.5+.5)*.14)}}}const za="#fff1c4",zc="#ff7a2a";function kc(i){return{front:"z",build(e){e.base(i?71:73);const t=e.root.at(0,.185,0);t.add(new Se(.5,.56,.1,8),"stone",void 0,0,.05,0,0,Math.PI/8),t.add(new Se(.36,.4,.1,8),"stoneDark",void 0,0,.15,0,0,Math.PI/8),t.add(new Se(.12,.2,.5,8),"stone",void 0,0,.45,0);for(let n=0;n<3;n++){const r=n/3*le+.4;t.beam([Math.cos(r)*.14,.62,Math.sin(r)*.14],[Math.cos(r)*.3,.98,Math.sin(r)*.3],.018,"dark")}t.add(new Se(.32,.18,.2,10,1,!0),"dark",void 0,0,.98,0),t.add(new Se(.18,.18,.03,10),"dark",void 0,0,.89,0),t.add(new ot(.32,.022,4,12),"metal",void 0,0,1.08,0,Math.PI/2);for(let n=0;n<5;n++){const r=n/5*le;t.add(new ti(.05,0),i?"glow":"rock",i?zc:void 0,Math.cos(r)*.14,.96,Math.sin(r)*.14,n,n)}for(let n=0;n<4;n++){const r=n/4*le+Math.PI/4;t.add(new Q(.1,.22,.1),"stoneDark",void 0,Math.cos(r)*.62,.11,Math.sin(r)*.62,0,-r),t.add(new Tt(.03,0),i?"glow":"metal",i?za:void 0,Math.cos(r)*.6,.2,Math.sin(r)*.6)}for(let n=0;n<3;n++)t.add(new Se(.04,.04,.3,5),"woodDark",void 0,.6+n%2*.05,.04+Math.floor(n/2)*.07,-.5,Math.PI/2,0,.2);if(i){dl(e,"fire",za,0,.185+.98,0,1.4);const n=e.part("sparks",{pos:[0,.185+1.3,0],detail:!0});for(let r=0;r<4;r++){const s=r/4*le;n.add(new Hn(.025,0),"glow",zc,Math.cos(s)*.18,r*.09,Math.sin(s)*.18,s,s)}e.light(za,0,1.4,0,1.4)}else t.add(new hn(.05,0),"clothDark",void 0,.05,1.12,0),t.add(new hn(.035,0),"clothDark",void 0,-.04,1.24,.03)},animate({parts:e},t){e.fire&&pl(e.fire,t,1.2),e.sparks&&(e.sparks.rotation.y=t*le,e.sparks.position.y=.185+1.3+t*.2,e.sparks.scale.setScalar(1-t*.5))}}}const Er="#dfe9ff",H_={front:"z",build(i){i.base(79);const e=i.root.at(0,.185,0);e.add(new Se(.42,.48,.22,8),"stone",void 0,0,.11,0,0,Math.PI/8);const t=.3,n=[[t,t],[-t,t],[t,-t],[-t,-t]];for(const[a,o]of n)e.beam([a*1.2,.2,o*1.2],[a*.8,1.55,o*.8],.035,"wood");for(const a of[.6,1.1]){const o=1.2-a/1.55*.4;e.beam([t*o,a,t*o],[-t*o,a,t*o],.02,"woodDark"),e.beam([t*o,a,-t*o],[-t*o,a,-t*o],.02,"woodDark"),e.beam([t*o,a,t*o],[t*o,a,-t*o],.02,"woodDark"),e.beam([-t*o,a,t*o],[-t*o,a,-t*o],.02,"woodDark"),e.beam([t*o,a,t*o],[-t*(o-.13),a+.45,t*(o-.13)],.012,"woodDark"),e.beam([-t*o,a,t*o],[t*(o-.13),a+.45,t*(o-.13)],.012,"woodDark")}for(let a=0;a<6;a++)e.add(new Q(.2,.02,.02),"wood",void 0,0,.35+a*.22,.42-a*.03);for(const a of[-.1,.1])e.beam([a,.25,.44],[a,1.6,.26],.014,"wood");e.add(new Q(.76,.06,.76),"woodDark",void 0,0,1.58,0);for(const[a,o]of n)e.add(new Q(.035,.28,.035),"wood",void 0,a*1.2,1.74,o*1.2);for(const a of[-1,1])e.add(new Q(.74,.025,.025),"wood",void 0,0,1.86,a*.36),e.add(new Q(.025,.025,.74),"wood",void 0,a*.36,1.86,0);for(const[a,o]of n)e.add(new Q(.03,.55,.03),"wood",void 0,a*1.05,2.12,o*1.05);e.add(new Rt(.6,.42,4),"dark",void 0,0,2.58,0,0,Math.PI/4),e.add(new Tt(.04,0),"glow",Er,0,2.82,0),e.add(new Q(.02,.02,.16),"metal",void 0,0,2.34,.42);const r=i.part("lamp",{pos:[0,.185+2.33,.5],detail:!0});r.add(new Tt(.06,0),"glow",Er,0,-.09,0,0,0,0,1,1.3,1),r.add(new Q(.03,.03,.03),"metal",void 0,0,-.02,0),e.add(new Se(.06,.08,.16,6),"woodDark",void 0,0,1.68,0);const s=i.part("ballista",{pos:[0,.185+1.78,0],detail:!0});s.add(new Q(.06,.05,.5),"wood",void 0,0,0,.05,-.15),s.add(new Q(.44,.03,.03),"woodDark",void 0,0,.03,.26,-.15),s.add(new Se(.008,.008,.44,4),"clothDark",void 0,0,.04,.14,-.15,0,Math.PI/2),s.add(new Se(.01,.01,.34,4),"metal",void 0,0,.05,.12,Math.PI/2-.15),s.add(new Rt(.02,.06,4),"glow",Er,0,.08,.31,Math.PI/2-.15),e.add(new ot(.44,.02,4,16),"glow",Er,0,.2,0,Math.PI/2),e.add(new Se(.07,.06,.28,6),"leather",void 0,.6,.14,.3);for(let a=0;a<3;a++)e.add(new Se(.008,.008,.36,3),"metal",void 0,.6+(a-1)*.03,.3,.3+a%2*.03);i.light(Er,0,2.3,.5,1)},animate({parts:i},e){i.ballista.rotation.y=Math.sin(e*le)*.45,i.lamp.rotation.x=Math.sin(e*le+.6)*.18}},ka="#ff8a3a",V_={front:"z",build(i,e){i.base(83);const t=i.root.at(0,.185,0);t.add(new Q(.66,.36,.56),"brick",void 0,-.12,.18,-.05),t.add(new Q(.7,.05,.6),"stoneDark",void 0,-.12,.38,-.05),t.add(new Q(.14,.12,.03),"glow",ka,-.12,.14,.24),t.add(new ln(.28,9,7),"copper",void 0,-.12,.64,-.05),t.add(new Se(.1,.18,.22,9),"copper",void 0,-.12,.98,-.05),t.add(new ot(.2,.02,4,12),"metal",void 0,-.12,.86,-.05,Math.PI/2);const n=[[-.12,1.1,-.05],[.02,1.26,-.02],[.3,1.3,.06],[.5,1.15,.14],[.58,.85,.2],[.58,.55,.2]];for(let a=0;a<n.length-1;a++)t.beam(n[a],n[a+1],.035,"copper");for(let a=0;a<3;a++)t.add(new ot(.09,.02,4,10),"copper",void 0,.58,.95-a*.12,.2,Math.PI/2);t.add(new Se(.22,.18,.34,10,1,!0),"woodDark",void 0,.58,.17,.2),t.add(new Se(.19,.19,.02,10),"woodDark",void 0,.58,.01,.2),t.add(new ot(.22,.015,4,12),"metal",void 0,.58,.3,.2,Math.PI/2),i.part("brew",{pos:[.58,.185+.3,.2],uniqueMaterial:!0}).add(new Se(.2,.2,.03,10),"mana",e),i.part("drip",{pos:[.58,.185+.5,.2],detail:!0}).add(new Tt(.03,0),"glow",e,0,0,0,0,0,0,1,1.6,1),Hs(i,"vapour",-.12,.185+1.1,-.05,.7),dl(i,"fire",ka,-.12,.185+.02,.28,.45),fn(t,.16,-.66,0,.36,.3),fn(t,.12,-.6,.16,.34,.9,"woodDark"),Ds(t,.09,.22,-.5,0,-.55,!0);for(let a=0;a<3;a++){const o=.15+a*.14;t.add(new Se(.03,.05,.1,6),"glow",a===1?e:"#f4f1ea",o,.05,.62),t.add(new Se(.012,.012,.05,5),"metal",void 0,o,.12,.62)}t.add(new Q(.04,.04,.4),"wood",void 0,-.12,.5,-.5,-.6),i.light(e,.58,.6,.2,.8),i.light(ka,-.12,.2,.35,.5)},animate({parts:i,meshes:e},t){fl(i.vapour,t,.7),pl(i.fire,t),i.drip.position.y=.185+.5-t%1*.16,i.drip.scale.y=1-t%1*.5;const n=e["brew#opaque"].material;n.emissiveIntensity=n.userData.base*(1+.3*Math.sin(t*le))}},Ga="#ffd9a0",ys=.185,W_={front:"x",build(i){i.base(89,1.15,.8);const e=i.part("horse",{pos:[0,ys+.32,0]});e.add(new Q(.62,.24,.22),"mule",void 0,0,.3,0),e.add(new Q(.2,.2,.2),"mule",void 0,-.3,.32,0,0,0,.3),e.add(new Q(.14,.34,.14),"mule",void 0,.36,.5,0,0,0,-.55),e.add(new Q(.24,.11,.1),"mule",void 0,.52,.66,0,0,0,-.25);for(const h of[-.04,.04])e.add(new Rt(.022,.1,4),"mule",void 0,.42,.74,h,h*3,0,.1);for(let h=0;h<4;h++)e.add(new Q(.05,.08,.04),"dark",void 0,.3+h*.05,.62-h*.03,0,0,0,-.5);i.part("tail",{parent:e,pos:[-.36,.36,0],detail:!0}).add(new Rt(.03,.3,4),"dark",void 0,-.06,-.12,0,0,0,.4),[[.22,.07,0],[.22,-.07,.15],[-.22,.07,.55],[-.22,-.07,.7]].forEach(([h,f],u)=>{const d=i.part(`hip${u}`,{parent:e,pos:[h,.22,f],detail:!0});d.add(new Q(.06,.3,.06),"mule",void 0,0,-.15,0),d.add(new Q(.065,.045,.065),"hoof",void 0,0,-.32,0)}),e.add(new Q(.3,.05,.28),"tunic",void 0,.02,.43,0),e.add(new Q(.24,.06,.2),"leather",void 0,.02,.47,0),e.add(new Se(.035,.035,.26,6),"leather",void 0,-.14,.42,.14,0,0,.3),e.add(new Se(.04,.04,.02,6),"cloth",void 0,-.14-.12*Math.sin(-.3),.42+.12*Math.cos(.3),.14,0,0,.3);const r=i.part("rider",{parent:e,pos:[.02,.5,0],detail:!0});for(const h of[-.12,.12])r.add(new Q(.08,.22,.07),"leather",void 0,0,-.06,h,0,0,0);r.add(new Se(.1,.13,.32,7),"clothDark",void 0,0,.18,0,0,0,-.15),r.add(new hn(.07,0),"skin",void 0,.03,.42,0),r.add(new Rt(.09,.15,7),"clothDark",void 0,.02,.5,-.01,0,0,-.2),r.beam([.08,.28,.06],[.3,.2,.05],.028,"clothDark"),r.beam([.06,.28,-.06],[.28,.2,-.05],.028,"clothDark");for(const h of[-.05,.05])r.beam([.3,.2,h],[.5,.16,h*1.2],.006,"leather");i.part("cloak",{parent:r,pos:[-.06,.34,0],detail:!0}).add(new Rt(.16,.42,6,1,!0),"clothDark",void 0,-.14,-.1,0,0,0,1.1),r.add(new Se(.01,.012,.7,5),"wood",void 0,-.1,.35,-.16,0,0,.2);const a=i.part("flag",{parent:r,pos:[-.17,.68,-.16],detail:!0}),o=new ni;o.moveTo(0,0),o.lineTo(-.24,-.05),o.lineTo(0,-.13),a.add(new Pi(o),"glow",Ga,0,0,0,0,Math.PI/2);const l=i.part("lamp",{parent:e,pos:[.18,.5,.16],detail:!0});l.add(new Tt(.04,0),"glow",Ga,0,-.08,0),l.add(new Se(.005,.005,.08,3),"metal",void 0,0,-.03,0);const c=i.part("dust",{pos:[-.55,ys+.05,0],detail:!0});for(let h=0;h<3;h++)c.add(new hn(.045+h*.02,0),"clothDark",void 0,-h*.12,.04+h*.05,(h-1)*.08,h,h);i.light(Ga,.2,.9,.16,.7)},animate({parts:i},e){const t=e*le*2;i.horse.position.y=ys+.32+Math.abs(Math.sin(t))*.05,i.horse.rotation.z=Math.sin(t)*.05;const n=[0,.15,.55,.7];for(let r=0;r<4;r++)i[`hip${r}`].rotation.z=Math.sin(t+n[r]*le)*.7;i.tail.rotation.z=Math.sin(t+1)*.25-.3,i.rider.rotation.z=Math.sin(t)*.05-.1,i.cloak.rotation.z=.2+Math.sin(t+.5)*.15,ml(i.flag,e*2),i.lamp.rotation.z=Math.sin(t+2)*.3,i.dust.scale.setScalar(.8+e*2%1*.5),i.dust.position.y=ys+.05+e*2%1*.08}},X_={front:"z",build(i,e){i.base(97);const t=i.root.at(0,.185,0),n=Li(17);for(let l=0;l<6;l++){const c=l/6*le+n()*.4,h=.38+n()*.16;t.add(new Q(.28,.06,.2),"rock",void 0,Math.cos(c)*h,.05+n()*.05,Math.sin(c)*h,(n()-.5)*.3-.35,-c,(n()-.5)*.3)}t.add(new Se(.22,.28,.06,7),"void",void 0,0,.03,0);const r=i.part("ring",{pos:[0,.185+.03,0],uniqueMaterial:!0});r.add(new ot(.58,.03,4,24),"glow",e,0,0,0,Math.PI/2),r.add(new ot(.3,.025,4,16),"glow",e,0,.02,0,Math.PI/2);const s=i.part("column",{pos:[0,.185+.05,0],uniqueMaterial:!0});s.crystal("mana",e,.13,.8,0,0,0,0,0),s.crystal("mana",e,.06,.5,.12,0,.08,.15,-.3),s.crystal("mana",e,.06,.45,-.1,0,-.1,-.2,.3),i.part("sheath",{pos:[0,.185+.05,0],detail:!0}).add(new Rt(.26,1.3,7,1,!0),"ghost",void 0,0,.65,0,Math.PI,0,0);for(const[l,c,h]of[["sprayA",.34,1],["sprayB",.5,-1]]){const f=i.part(l,{pos:[0,.7849999999999999,0],detail:!0});for(let u=0;u<6;u++){const d=u/6*le;f.add(new Hn(.05+u%2*.02,0),"glow",e,Math.cos(d)*c,(u*h+6)%6*.08,Math.sin(d)*c,d,d*2)}}const o=i.part("motes",{pos:[0,.185+.3,0],detail:!0});for(let l=0;l<5;l++){const c=l/5*le+.3;o.add(new Tt(.03,0),"glow","#ffffff",Math.cos(c)*.2,l*.15,Math.sin(c)*.2)}i.light(e,0,.9,0,1.6)},animate({parts:i,meshes:e},t){i.column.rotation.y=t*le*.5,i.column.scale.y=1+Math.sin(t*le*2)*.05,i.sheath.scale.set(1+Math.sin(t*le*2)*.12,1+Math.sin(t*le*2+1)*.06,1+Math.sin(t*le*2)*.12),i.sprayA.rotation.y=t*le,i.sprayA.position.y=.185+.6+Math.sin(t*le)*.18,i.sprayB.rotation.y=-t*le,i.sprayB.position.y=.185+.6+Math.cos(t*le)*.14,i.motes.position.y=.185+.3+t*.5,i.motes.scale.setScalar(1-t*.6);for(const n of["ring#opaque","column#opaque"]){const r=e[n].material;r.emissiveIntensity=r.userData.base*(1.1+.45*Math.sin(t*le*2))}}},Ha="#9fd8ff",Gc="#b9c0d6";function Va(i){return{front:"z",build(e){if(i==="shadow"){e.base(131),e.root.at(0,.185,0).add(new Se(.62,.7,.025,12),"void",void 0,0,.01,0);const n=e.part("f",{pos:[0,.185,0]});n.add(new ln(.34,8,6),"void",void 0,0,.36,-.05,-.3,0,0,1,.9,1.1),n.add(new ln(.2,7,5),"void",void 0,0,.66,.16,0,0,0,1,.8,1);for(const s of[-.06,.06])n.add(new Tt(.035,0),"eye",void 0,s,.68,.33);for(const s of[-1,1]){const a=e.part(s<0?"armL":"armR",{parent:n,pos:[s*.26,.5,.12],detail:!0});a.beam([0,0,0],[s*.18,-.42,.28],.05,"void");for(let o=-1;o<=1;o++)a.add(new Rt(.016,.12,4),"claw",void 0,s*.18+o*.04,-.46,.36,1.6,0,o*.3)}const r=e.part("wisps",{parent:n,detail:!0});for(let s=0;s<5;s++){const a=s/5*le;r.add(new Rt(.035,.22,4),"void",void 0,Math.cos(a)*.5,.1,Math.sin(a)*.5,Math.cos(a)*.6,0,-Math.sin(a)*.6)}e.light("#ff4d5e",0,.7,.35,.35)}else if(i==="specter"){e.base(137);const t=e.part("f",{pos:[0,.45,0]});t.add(or([[.14,0],[.34,.35],[.3,.9],[.26,1.3],[.12,1.62]],9),"ghost"),t.add(new hn(.16,0),"void",void 0,0,1.68,.06,0,0,0,1,1.25,.8),t.add(or([[.03,2],[.2,1.92],[.26,1.7],[.22,1.5]],9,.4,le-.8),"ghost");for(const n of[-.06,.06])t.add(new Tt(.03,0),"eye",void 0,n,1.72,.2);for(const n of[-1,1]){const r=e.part(n<0?"armL":"armR",{parent:t,pos:[n*.24,1.35,.02],detail:!0});r.beam([0,0,0],[n*.5,.25,.1],.06,"ghost"),r.add(new Tt(.045,0),"ghost",void 0,n*.54,.28,.11);for(let s=0;s<4;s++)r.add(new ot(.03,.008,3,6),"glow",Gc,n*.56,.22-s*.07,.11,s%2*Math.PI/2,0,0)}for(let n=0;n<5;n++)t.add(new ot(.03,.008,3,6),"glow",Gc,.2,.75-n*.07,.24,n%2*Math.PI/2,.2,0);e.light("#8f96ff",0,1.4,.3,.7)}else{e.base(139);const t=e.part("f",{pos:[0,1.1,0]}),n=e.part("core",{parent:t,uniqueMaterial:!0});n.add(new hn(.22,1),"glow",Ha),n.add(new hn(.12,0),"glow","#ffffff",0,0,.06);const r=e.part("tails",{parent:t,detail:!0});for(let a=0;a<5;a++){const o=a/5*le+.5,l=Math.cos(o)*.12,c=Math.sin(o)*.12;r.beam([l,-.1,c],[l*3.5,-.55-a%2*.15,c*3.5-.15],.02,"ghost")}const s=e.part("ring",{parent:t,rot:[.5,0,.2],detail:!0});for(let a=0;a<7;a++){const o=a/7*le;s.add(new Hn(.035,0),"glow",Ha,Math.cos(o)*.42,0,Math.sin(o)*.42,o,o)}e.root.at(0,.185,0).add(new Se(.34,.4,.02,12),"glow","#4a7ea8",0,.01,0),e.light(Ha,0,1.1,0,1.2)}},animate({parts:e,meshes:t},n){const r=n*le;if(i==="shadow")e.f.position.y=.185+Math.abs(Math.sin(r))*.03,e.f.rotation.y=Math.sin(r)*.15,e.f.scale.y=1+Math.sin(r*2)*.03,e.armL&&(e.armL.rotation.x=Math.sin(r)*.15,e.armR.rotation.x=Math.sin(r+1.5)*.15,e.wisps.rotation.y=r/5);else if(i==="specter")e.f.position.y=.45+Math.sin(r)*.1,e.f.rotation.z=Math.sin(r*.5)*.06,e.armL&&(e.armL.rotation.z=Math.sin(r)*.12,e.armR.rotation.z=-Math.sin(r+.7)*.12);else{e.f.position.set(Math.sin(r*2)*.16,1.1+Math.sin(r)*.12,Math.sin(r)*.1),e.core.rotation.y=r,e.core.scale.setScalar(1+Math.sin(r*3)*.1),e.ring&&(e.ring.rotation.y=-r);const s=t["core#opaque"].material;s.emissiveIntensity=s.userData.base*(1+.4*Math.sin(r*3))}}}}const q_={front:"z",build(i,e){i.base(103);const t=i.root.at(0,.185,0);for(let o=0;o<3;o++)t.add(new Se(.11,.11,.02,6),"stone",void 0,(o-1)*.06,.01,.5+o*.16,0,o);const n=12;for(let o=0;o<n;o++){const l=o/n*le,c=.62;t.add(new Q(.17,.19,.14),o%3?"stone":"stoneDark",void 0,Math.cos(l)*c,.82+Math.sin(l)*c,0,0,0,l)}for(const o of[-1,1])t.add(new Q(.2,.7,.24),"stoneDark",void 0,o*.62,.33,-.02,0,0,o*.08),t.add(new Q(.3,.1,.34),"stone",void 0,o*.66,.05,-.02),t.add(new ln(.1,5,4),"grass",void 0,o*.72,.1,.16,0,0,0,1,.5,1);for(const o of[-1,1]){t.add(new Se(.006,.006,.12,3),"metal",void 0,o*.3,1.34,.1);const l=i.part(o<0?"lampL":"lampR",{pos:[o*.3,.185+1.28,.1],detail:!0});l.add(new Q(.06,.08,.06),"metal",void 0,0,-.04,0),l.add(new Tt(.035,0),"glow","#ffd9a0",0,-.04,0)}i.part("disc",{pos:[0,.185+.82,0],uniqueMaterial:!0}).add(new Se(.5,.5,.02,24),"mana",e,0,0,0,Math.PI/2);const s=i.part("ripple",{pos:[0,.185+.82,.03],detail:!0});for(let o=0;o<3;o++)s.add(new ot(.12+o*.13,.012,3,20),"glow","#ffffff",0,0,0,0,0,o*.4);const a=i.part("motes",{pos:[0,.185+.82,.1],detail:!0});for(let o=0;o<6;o++){const l=o/6*le;a.add(new Tt(.025,0),"glow",e,Math.cos(l)*.3,Math.sin(l)*.3,o*.06)}i.light(e,0,.9,.3,1.2)},animate({parts:i,meshes:e},t){const n=t*le;i.disc.rotation.y=n,i.disc.scale.set(1+Math.sin(n)*.03,1,1+Math.sin(n)*.03),i.ripple.rotation.z=-n*.5,i.ripple.scale.setScalar(.8+t*.35),i.motes.position.z=.1+t*.35,i.motes.rotation.z=n*.3,i.motes.scale.setScalar(1-t*.5),i.lampL.rotation.z=Math.sin(n)*.2,i.lampR.rotation.z=Math.sin(n+1)*.2;const r=e["disc#opaque"].material;r.emissiveIntensity=r.userData.base*(1.2+.3*Math.sin(n))}},Es="#ffe9a8",Y_={front:"z",build(i){i.base(107,.85,.85);const e=i.root.at(0,.185,0);e.add(new ln(.42,9,6),"grass",void 0,0,-.08,0,0,0,0,1,.55,1),e.add(new ln(.22,7,5),"grass",void 0,.36,-.02,.2,0,0,0,1,.5,1),e.add(new Se(.07,.08,.6,6),"woodDark",void 0,-.3,.07,-.35,0,.6,Math.PI/2);const t=Li(29);[[.18,.1,.3,.28],[-.2,.12,.34,.2],[.02,.1,-.18,.16],[.3,.1,-.12,.12]].forEach(([s,a,o,l])=>{e.add(new Se(.035,.05,o,6),"cloth",void 0,s,.1+o/2,a,(t()-.5)*.2,0,(t()-.5)*.2),e.add(new Rt(l,l*.7,8),"glow",Es,s,.12+o+l*.2,a);for(let c=0;c<3;c++)e.add(new Tt(.018,0),"cloth",void 0,s+(t()-.5)*l,.12+o+l*.25,a+(t()-.5)*l)}),e.beam([-.05,.14,.08],[-.02,.62,.1],.014,"grass");for(let s=0;s<2;s++)e.add(new Rt(.06,.16,4),"grass",void 0,-.05+(s?.08:-.08),.32+s*.1,.09,0,0,s?-1.2:1.2);const r=i.part("bloom",{pos:[-.02,.185+.64,.1],uniqueMaterial:!0});for(let s=0;s<6;s++){const a=s/6*le;r.add(new Rt(.045,.14,4),"glow","#fff7e0",Math.cos(a)*.05,.05,Math.sin(a)*.05,Math.sin(a)*.9,0,-Math.cos(a)*.9)}r.add(new Tt(.03,0),"glow",Es,0,.03,0);for(const[s,a,o]of[["fliesA",.4,.5],["fliesB",.56,.32]]){const l=i.part(s,{pos:[0,.185+o,0],detail:!0});for(let c=0;c<4;c++){const h=c/4*le+a;l.add(new Tt(.018,0),"glow",Es,Math.cos(h)*a,c%2*.12,Math.sin(h)*a)}}i.light(Es,0,.5,0,.6)},animate({parts:i,meshes:e},t){const n=t*le;i.bloom.rotation.y=n*.3,i.bloom.scale.set(1+Math.sin(n)*.15,1,1+Math.sin(n)*.15),i.fliesA.rotation.y=n,i.fliesA.position.y=.185+.5+Math.sin(n*2)*.05,i.fliesB.rotation.y=-n*.7,i.fliesB.position.y=.185+.32+Math.cos(n*2)*.05;const r=e["bloom#opaque"].material;r.emissiveIntensity=r.userData.base*(1+.3*Math.sin(n))}},$_={front:"z",build(i,e){i.base(113,.62,.62);const t=i.root.at(0,.185,0),n=Li(31),r=[[.26,.09],[.21,.08],[.16,.07],[.11,.07]];let s=0;r.forEach(([o,l],c)=>{t.add(new Se(o,o*1.05,l,6),c%2?"stone":"rock",void 0,(n()-.5)*.04,s+l/2,(n()-.5)*.04,0,n()*2),s+=l}),t.add(new Tt(.05,0),"glow",e,0,s+.05,0),t.add(new Se(.02,.025,.62,5),"wood",void 0,.3,.31,.1),t.add(new Q(.26,.08,.02),"woodDark",void 0,.36,.5,.11,0,-.2),t.add(new Rt(.04,.05,4),"woodDark",void 0,.51,.5,.14,0,-.2,-Math.PI/2),Si(i,"flag",e,.3,.185+.62,.1,.32),i.part("mote",{pos:[0,.185+s+.2,0],detail:!0}).add(new Hn(.025,0),"glow",e),i.light(e,0,.5,0,.35)},animate({parts:i},e){ml(i.flag,e),i.mote.position.y=.185+.51+Math.sin(e*le)*.06,i.mote.rotation.y=e*le}},Fn=.185;function Z_(i){for(let e=-4;e<=4;e++)i.add(new Q(.1,.03,.6),"woodDark",void 0,e*.24,.015,0);for(const e of[-.2,.2])i.add(new Q(2.1,.03,.035),"metal",void 0,0,.045,e)}function Hc(i,e,t,n){e.forEach((r,s)=>{for(const a of[-.24,.24]){const o=i.part(`wheel${s}${a<0?"a":"b"}`,{pos:[r,n,a],detail:!0});o.add(new Se(t,t,.05,10),"metal",void 0,0,0,0,Math.PI/2),o.add(new Q(.03,t*1.6,.06),"dark",void 0,0,0,0,0,0,.5),o.add(new Q(.03,t*1.6,.06),"dark",void 0,0,0,0,0,0,-.5)}})}function Vc(i){return{front:"x",build(e,t){e.base(i==="engine"?127:129,1.3,.7);const n=e.root.at(0,Fn,0);if(Z_(n),i==="engine"){n.add(new Q(1.4,.08,.5),"dark",void 0,0,.26,0),n.add(new Se(.22,.22,.86,12),"brick",void 0,.12,.5,0,0,0,Math.PI/2);for(const o of[-.12,.2,.44])n.add(new ot(.225,.015,4,12),"copper",void 0,o,.5,0,0,Math.PI/2);n.add(new Se(.16,.2,.1,12),"metal",void 0,.6,.5,0,0,0,Math.PI/2),n.add(new Se(.07,.09,.32,8),"dark",void 0,.42,.85,0),n.add(new Se(.1,.07,.06,8),"dark",void 0,.42,1.03,0),n.add(new ln(.08,7,5),"copper",void 0,.1,.76,0),n.add(new Q(.44,.5,.5),"brick",void 0,-.42,.55,0),n.add(new Q(.5,.05,.56),"dark",void 0,-.42,.82,0);for(const o of[-.26,.26])n.add(new Q(.2,.18,.02),"glow","#ffd9a0",-.4,.62,o);n.add(new Q(.02,.18,.2),"glow","#ffd9a0",-.65,.62,0);for(let o=0;o<4;o++)n.beam([.66,.36,-.24+o*.16],[.82,.1,-.24+o*.16],.012,"metal");const r=e.part("lamp",{pos:[.66,Fn+.68,0],detail:!0});r.add(new Se(.06,.06,.08,8),"metal",void 0,0,0,0,0,0,Math.PI/2),r.add(new Tt(.05,0),"glow",t,.05,0,0),Hc(e,[.32,0,-.32],.13,Fn+.16),e.part("rod",{pos:[0,Fn+.16,.28],detail:!0}).add(new Q(.7,.03,.02),"metal",void 0,0,0,0),e.part("rod2",{pos:[0,Fn+.16,-.28],detail:!0}).add(new Q(.7,.03,.02),"metal",void 0,0,0,0),Hs(e,"smoke0",.42,Fn+1.08,0,1.1),e.light(t,.75,.7,0,.9),e.light("#ffd9a0",-.42,.65,0,.4)}else{n.add(new Q(1.3,.08,.5),"woodDark",void 0,0,.26,0);for(const s of[-.6,.6])n.add(new Q(.06,.16,.5),"woodDark",void 0,s,.38,0);n.add(new Q(1.3,.04,.06),"metal",void 0,0,.22,.26),n.add(new Q(1.3,.04,.06),"metal",void 0,0,.22,-.26),fn(n,.3,-.28,.3,-.05,.1),fn(n,.22,.12,.3,.1,.5),fn(n,.18,.4,.3,-.12,.2,"woodDark"),n.add(new Q(.7,.28,.46),"clothDark",void 0,-.1,.5,0,0,0,.06);for(const s of[-.35,.15])n.add(new ot(.29,.01,3,10,Math.PI),"leather",void 0,s,.34,0,0,Math.PI/2);for(const s of[-.68,.68])for(const a of[-.15,.15])n.add(new Se(.03,.03,.08,6),"metal",void 0,s,.28,a,0,0,Math.PI/2);n.add(new ot(.03,.008,3,8),"metal",void 0,.72,.26,0,0,Math.PI/2);const r=e.part("lamp",{pos:[-.62,Fn+.6,-.2],detail:!0});r.add(new Q(.06,.08,.06),"metal",void 0,0,-.04,0),r.add(new Tt(.04,0),"glow",t,0,-.04,0),n.add(new Q(.02,.2,.02),"metal",void 0,-.62,.5,-.2),Hc(e,[.36,-.36],.12,Fn+.15),e.light(t,-.62,.6,-.2,.6)}},animate({parts:e},t){const n=t*le;for(const r of Object.keys(e))r.startsWith("wheel")&&(e[r].rotation.z=-n);e.rod?(e.rod.position.x=Math.cos(-n)*.08,e.rod.position.y=Fn+.16+Math.sin(-n)*.08,e.rod2.position.x=Math.cos(-n+Math.PI/2)*.08,e.rod2.position.y=Fn+.16+Math.sin(-n+Math.PI/2)*.08,fl(e.smoke0,t,1.1),e.lamp.scale.setScalar(1+Math.sin(n*4)*.05)):e.lamp.rotation.x=Math.sin(n)*.25}}}const K_={jarvis:"#4f7fc9",karen:"#d99a2b",orolo:"#8656c4",none:"#6b7280"},Tn="#fff8e6";function ws(i){const e=K_[i];return{front:"z",build(t){t.base(151+["jarvis","karen","orolo","none"].indexOf(i)*3,.8,.8);const n=t.root.at(0,.185,0);for(let c=0;c<8;c++){const h=c/8*le;n.add(new ti(.04,0),c%2?"stone":"rock",void 0,Math.cos(h)*.28,.03,Math.sin(h)*.28,c,c*2)}n.add(new ti(.11,0),"rock",void 0,.02,.06,-.02,0,.3,0,1,.7,1),n.add(new Se(.022,.03,1,6),"wood",void 0,0,.5,0),n.add(new ot(.03,.012,3,8),"metal",void 0,0,.72,0,Math.PI/2);const r=t.part("board",{pos:[0,.185+1.1,0],rot:[-.45,0,0]});r.add(new Se(.42,.42,.035,20),"glow",e,0,0,0,Math.PI/2),r.add(new ot(.41,.025,4,20),"glow",Tn,0,0,0);const s=.03;if(i==="jarvis")r.add(new ot(.24,.028,4,6),"glow",Tn,0,0,s,0,0,Math.PI/6),r.add(new Se(.06,.06,.02,8),"glow",Tn,0,0,s,Math.PI/2);else if(i==="karen")r.add(new Q(.045,.26,.02),"glow",Tn,-.2,-.09,s),r.add(new Q(.045,.26,.02),"glow",Tn,.2,-.09,s),r.add(new Q(.44,.045,.02),"glow",Tn,0,-.21,s),r.add(new Q(.3,.045,.02),"glow",Tn,-.11,.12,s,0,0,.72),r.add(new Q(.3,.045,.02),"glow",Tn,.11,.12,s,0,0,-.72),r.add(new Q(.1,.14,.02),"glow",Tn,0,-.15,s);else if(i==="orolo")for(let c=0;c<5;c++){const h=.06+c*.05;r.add(new ot(h,.024,4,10,Math.PI),"glow",Tn,c%2?-.025:.025,0,s,0,0,c*Math.PI)}else r.add(new ot(.18,.03,4,16),"glow",Tn,0,0,s);const a=t.part("ribbon",{pos:[0,.185+.66,0],detail:!0}),o=new ni;o.moveTo(-.03,0),o.lineTo(.03,0),o.lineTo(.05,-.22),o.lineTo(0,-.17),o.lineTo(-.05,-.22),a.add(new Pi(o),"glow",e,.04,0,.02),t.part("mote",{pos:[0,.185+1.6,0],detail:!0}).add(new Tt(.03,0),"glow",e,.14,0,0),t.light(e,0,1,.2,.7)},animate({parts:t},n){const r=n*le;t.board.rotation.y=Math.sin(r)*.25,t.board.position.y=.185+1.1+Math.sin(r*2)*.01,t.ribbon.rotation.y=Math.sin(r*2+1)*.5,t.mote.rotation.y=r,t.mote.position.y=.185+1.6+Math.sin(r*2)*.03}}}const Wc=Object.fromEntries(Jh.map(i=>[`tower-${i}`,G_(i)])),Qh={nexus:U_,extractor:F_,caravan:O_,wraith:Bc,rift:B_,hero:z_,"hero-cleric":Fa("cleric"),"hero-fighter":Fa("fighter"),"hero-wizard":Fa("wizard"),tower:Wc["tower-bare"],...Wc,ward:kc(!1),"ward-lit":kc(!0),watchtower:H_,facility:V_,envoy:W_,surge:X_,"monster-shadow":Va("shadow"),"monster-specter":Va("specter"),"monster-wisp":Va("wisp"),"monster-wraith":Bc,encounter:q_,gather:Y_,poi:$_,train:Vc("car"),"train-engine":Vc("engine"),sigil:ws("none"),"sigil-jarvis":ws("jarvis"),"sigil-karen":ws("karen"),"sigil-orolo":ws("orolo")},J_=Object.keys(Qh),bs=Qh,Wa=["#FF0000","#FF8000","#FFFF00","#00FF00","#0000FF","#8000FF","#000000","#FFFFFF"],wr="minis-3d",Xc="tower-fill",Xa=24,Q_=2,j_=80,ev={nexus:1.35,extractor:1,caravan:1,wraith:1,rift:1.1,hero:.9,poi:.7,gather:.85,"hero-cleric":.85,"hero-fighter":.85,"hero-wizard":.85,train:.9,envoy:.95,sigil:.8,"sigil-jarvis":.8,"sigil-karen":.8,"sigil-orolo":.8},tv="#39e35a",qa="stress:",qc=16.5,nv=15.25,iv=52,rv=84,Yc=3,sv=.62,Ya=2,$a=1.15,av={1:[[0,0]],2:[[-.7,.05],[.7,.05]],3:[[-1.25,.15],[0,-.2],[1.25,.15]]},Za=.42,Ka=.85,ov=.8,lv={creature:[0,-2.4],mover:[0,1.8],ward:[1.4,0],event:[-1.4,0],roster:[0,1.4],sigil:[1.4,.6],gather:[-1.4,.6]},cv=110,$c=.02,hv=.9,Zc=1.7,uv=1.5,dv={ext:"node",poi:"poi",wraith:"creature",monster:"creature",car:"mover",train:"mover",envoy:"mover",ward:"ward",roster:"roster",gather:"gather",enc:"event",surge:"event",rift:"event",sigil:"sigil",tower:"attach",fac:"attach"},Kc={extractor:3,"train-engine":3,caravan:2,envoy:2,wraith:2,surge:2,rift:1,train:-1},Jc={nexus:"#f2c14e",hero:"#3f6fa8","hero-cleric":"#efe4cc","hero-fighter":"#a5683a","hero-wizard":"#5b4b8f",wraith:"#c9cdf0","monster-shadow":"#6a70d0","monster-specter":"#c9cdf0","monster-wisp":"#8fd8ff","monster-wraith":"#c9cdf0",rift:"#8a3aff",ward:"#8a8378","ward-lit":"#ffb347",watchtower:"#d8d8e8",envoy:"#e3d3ae",gather:"#ffe28a",sigil:"#d97e3a","sigil-jarvis":"#d97e3a","sigil-karen":"#d97e3a","sigil-orolo":"#d97e3a"},Qc="#5b4a36",fv={nexus:1.6,extractor:1.9,caravan:.9,"train-engine":1,train:.8,envoy:.9,wraith:1.4,rift:1.3,hero:1.5,"hero-cleric":1.5,"hero-fighter":1.5,"hero-wizard":1.6,poi:.6,gather:.5,"tower-bare":1.3,watchtower:2.4,ward:1.2,"ward-lit":1.4,facility:1.1,surge:1,encounter:1,tray:.3},pv=1.3,mv=1.9;function jc(i){return fv[i]??(i.startsWith("tower-")?mv:pv)}const gv={caravan:[1.3,.85],envoy:[1.15,.8],gather:[.85,.85],poi:[.62,.62],sigil:[.8,.8],"sigil-jarvis":[.8,.8],"sigil-karen":[.8,.8],"sigil-orolo":[.8,.8],train:[1.3,.7],"train-engine":[1.3,.7]},_v=[1,1],eh=.22,vv=5e3,xv=1e3/30,Mv=100,Sv=2e4,yv=2.6;function bv(i){const e=new ju,t=new cl,n=new Qi;e.add(n);const r=new N_(n,e);let s=null,a=!1;const o=[],l=new Map,c=new Map;let h=1;const f=[],u=[];let d=!0,g=-1,y="near",m=0,p=0,S=1;const A=new mt,x=new mt().makeRotationX(Math.PI/2);function w(B,q){const he=mi.MercatorCoordinate.fromLngLat([B,q]);m=he.x,p=he.y,S=he.meterInMercatorCoordinateUnits(),A.makeTranslation(m,p,0).scale(new L(S,-S,S)).multiply(x);for(const De of o)E(De);d=!0}function E(B){B.tx=B.dx=(B.mx-m)/S,B.tz=B.dz=(B.my-p)/S,B.inst.root.position.set(B.dx,0,B.dz)}const R=i.getCenter();w(R.lng,R.lat);function v(B,q){const he=`${B}:${q}`;let De=c.get(he);if(!De){const We=new v_;bs[B].build(We,q),De=We.compile(),c.set(he,De)}return De}function T(B){const q=B.indexOf(":");return q===-1?null:dv[B.slice(0,q)]??null}function C(B,q,he,De,We,Ke){const Lt=mi.MercatorCoordinate.fromLngLat([he,De]),Et=Nc(v(q,We)),me={id:h++,key:B,family:T(B),kind:q,color:We,lng:he,lat:De,mx:Lt.x,my:Lt.y,phase:Ke,heading:null,scale:1,inst:Et,tray:null,seat:-1,tx:0,tz:0,dx:0,dz:0,shown:!0,onScreen:!1};return E(me),n.add(Et.root),o.push(me),l.set(B,me),d=!0,me}function I(B){n.remove(B.inst.root),B.inst.dispose(),l.delete(B.key);const q=o.indexOf(B);q!==-1&&o.splice(q,1),d=!0}function O(B,q,he){if(B.lng===q&&B.lat===he)return;const De=mi.MercatorCoordinate.fromLngLat([q,he]);B.lng=q,B.lat=he,B.mx=De.x,B.my=De.y;const We=(B.mx-m)/S,Ke=(B.my-p)/S;B.dx+=We-B.tx,B.dz+=Ke-B.tz,B.tx=We,B.tz=Ke,d=!0}function V(B){for(const q of[...o])q.key.startsWith(B)&&I(q)}function D(){Oe(),xe(),F(performance.now()),i.triggerRepaint(),Ve(performance.now(),!0)}function G(){const B=new Se(1,1.06,.14,14).toNonIndexed();B.deleteAttribute("uv");const he=B.attributes.position.count,De=new Float32Array(he*3),We=B.attributes.normal;for(let me=0;me<he;me++){const it=We.getY(me)>.5,ct=We.getY(me)<-.5,xt=it?1:ct?.15:.32;De[me*3]=De[me*3+1]=De[me*3+2]=xt}B.setAttribute("color",new an(De,3)),B.translate(0,.07,0);const Ke=new ot(.97,.05,4,20).toNonIndexed();Ke.deleteAttribute("uv"),Ke.rotateX(Math.PI/2),Ke.translate(0,.14,0);const Lt=Ke.attributes.position.count;Ke.setAttribute("color",new an(new Float32Array(Lt*3).fill(2),3));const Et=Xh([B,Ke],!1);return B.dispose(),Ke.dispose(),Et}const $=G(),X=new Bs({vertexColors:!0});X.onBeforeCompile=B=>{B.vertexShader=B.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
if (color.r > 1.5) vColor.rgb = vec3(0.96, 0.93, 0.84);`)},X.customProgramCacheKey=()=>"minis-token-rim";let se=ne(256),Y=ne(64);function ne(B){const q=new ko($,X,B);return q.instanceColor=new zs(new Float32Array(B*3),3),q.instanceMatrix.setUsage(Cr),q.instanceColor.setUsage(Cr),q.frustumCulled=!1,q.count=0,n.add(q),q}function re(B,q){if(q<=B.instanceMatrix.count)return B;n.remove(B),B.dispose();let he=B.instanceMatrix.count;for(;he<q;)he*=2;return ne(he)}const Ge=new Map;function Fe(B){let q=Ge.get(B);return q||(q=new Je(B),Ge.set(B,q)),q}const ht=new mt,st=new L,ut=new L,K=new ii;let ee=0;function Te(B,q,he,De,We,Ke,Lt,Et,me){ht.compose(st.set(he,De,We),K,ut.set(Ke,Lt,Et)),B.setMatrixAt(q,ht),B.setColorAt(q,Fe(me))}const $e=new Vr(1.6,.8),Le=256,Ye=new Map;function St(B){let q=Ye.get(B);return q||(q=new ko($e,ce(B),Le),q.instanceMatrix.setUsage(Cr),q.frustumCulled=!1,q.renderOrder=10,q.count=0,n.add(q),Ye.set(B,q),q)}const ie=new Map;function ce(B){let q=ie.get(B);if(q)return q;const he=document.createElement("canvas");he.width=128,he.height=64;const De=he.getContext("2d");De.clearRect(0,0,128,64),De.fillStyle="rgba(20, 18, 28, 0.88)",De.beginPath(),De.roundRect(4,4,120,56,14),De.fill(),De.strokeStyle="rgba(242, 226, 190, 0.85)",De.lineWidth=3,De.stroke(),De.fillStyle="#fff4d6",De.font="bold 40px ui-sans-serif, system-ui, sans-serif",De.textAlign="center",De.textBaseline="middle",De.fillText(B,64,34);const We=new hd(he);return We.colorSpace=pn,We.minFilter=Zt,q=new Bs({map:We,transparent:!0,depthTest:!1,depthWrite:!1}),ie.set(B,q),q}function ue(B=!1){for(const q of u){for(const he of q.members)he.tray=null,he.seat=-1;B&&(n.remove(q.inst.root),q.inst.dispose())}B&&(u.length=0)}function de(B,q,he){if(ue(B==="near"),B==="near")return;const De=40075016686e-3*Math.cos(he*Math.PI/180)/(512*2**q),We=(B==="far"?rv:iv)*De,Ke=new Map;for(const me of o){if(!me.family||me.family==="attach"||!me.shown)continue;const it=(me.mx-m)/S,ct=(me.my-p)/S,xt=Math.floor(it/We),Ct=Math.floor(ct/We),Bt=`${me.family}|${xt}|${Ct}`;let kt=Ke.get(Bt);kt||(kt={family:me.family,cx:xt,cz:Ct,members:[],x:0,z:0,into:null},Ke.set(Bt,kt)),kt.members.push(me),kt.x+=it,kt.z+=ct}for(const me of Ke.values())me.x/=me.members.length,me.z/=me.members.length;const Lt=me=>{for(;me.into;)me=me.into;return me};for(const me of Ke.values())for(let it=-1;it<=1;it++)for(let ct=-1;ct<=1;ct++){if(!ct&&!it)continue;const xt=Ke.get(`${me.family}|${me.cx+ct}|${me.cz+it}`);if(!xt)continue;const Ct=Lt(me),Bt=Lt(xt);if(Ct!==Bt&&Math.hypot(Ct.x-Bt.x,Ct.z-Bt.z)<We*.8){const[kt,_n]=Ct.members.length>=Bt.members.length?[Ct,Bt]:[Bt,Ct],yn=kt.members.length,ae=_n.members.length;kt.x=(kt.x*yn+_n.x*ae)/(yn+ae),kt.z=(kt.z*yn+_n.z*ae)/(yn+ae),kt.members.push(..._n.members),_n.into=kt}}const Et=new Map;for(const me of u)Et.set(me.sig,me);u.length=0;for(const me of Ke.values()){if(me.into||me.members.length<2)continue;me.members.sort((xt,Ct)=>(Kc[Ct.kind]??0)-(Kc[xt.kind]??0)||(xt.key<Ct.key?-1:1));const it=`${me.family}|${me.members.map(xt=>xt.key).join(",")}`;let ct=Et.get(it);if(ct)Et.delete(it),ct.members=me.members,ct.x=me.x,ct.z=me.z,ct.mx=me.x*S+m,ct.my=me.z*S+p;else{const xt=me.members.length,Ct=xt>99?"99+":String(xt),Bt=Nc(v("tray",Qc));Bt.root.position.set(me.x,0,me.z),n.add(Bt.root),ct={sig:it,family:me.family,members:me.members,mx:me.x*S+m,my:me.z*S+p,x:me.x,z:me.z,inst:Bt,label:Ct}}me.members.forEach((xt,Ct)=>{xt.tray=ct,xt.seat=Ct<Yc?Ct:-1}),u.push(ct)}for(const me of Et.values())n.remove(me.inst.root),me.inst.dispose()}const ye={front:"z",build(B){B.base(77,Ya,$a)},animate(){}};bs.tray=ye;let Xe="near",Ne="near",Ce=10,Ze=0,P=0,pt=0,nt=0;const b=new L,_=new Dn(0,0,0,"YXZ");function F(B){const q=P?Math.min(250,B-P):0;P=B;const he=i.getZoom(),De=i.getCenter(),We=mi.MercatorCoordinate.fromLngLat(De);Math.hypot(We.x-m,We.y-p)/S>vv&&w(De.lng,De.lat);const Ke=40075016686e-3*Math.cos(De.lat*Math.PI/180)/(512*2**he);Ce=Math.min(j_,Math.max(Q_,Xa*Ke)),Ne=he>=qc?"near":he>=nv?"mid":"far",Xe=Ne==="near"?"near":"mid";const Lt=yl(),Et=Lt?mi.MercatorCoordinate.fromLngLat([Lt.lng,Lt.lat]):null,me=B/1e3/yv,it=Ne==="far",ct=[];for(const ae of o)(ae.kind==="extractor"||ae.kind==="nexus")&&ct.push(ae);const xt=(ae,tn)=>{const ri=(ae.mx-m)/S,Yt=(ae.my-p)/S;for(const Wt of ct)if(Math.hypot((Wt.mx-m)/S-ri,(Wt.my-p)/S-Yt)<tn)return Wt;return null};let Ct=!1;for(const ae of o){const tn=!(Ne!=="near"&&ae.family==="attach"&&xt(ae,Ce*uv)!==null);tn!==ae.shown&&(ae.shown=tn,Ct=!0)}const Bt=Math.round(he*2)/2;(d||Ct||Bt!==g||Ne!==y)&&(de(Ne,Bt,De.lat),d=!1,g=Bt,y=Ne,Oe());const kt=q?1-Math.exp(-q/cv):1;Ze=0,pt=0,nt=0,ee=0,se=re(se,o.length);const _n=t.projectionMatrix;r.setCamera(i.getPitch(),i.getBearing()),r.begin(B,o.length*3+u.length,(o.length+u.length)*2);for(const ae of o){const tn=ae.inst.root,ri=(ev[ae.kind]??1)*ae.scale;let Yt=Ce*ri,Wt=(ae.mx-m)/S,nn=(ae.my-p)/S,M=ae.shown;if(ae.tray)if(nt++,ae.seat<0||it)M=!1;else{const fe=av[Math.min(Yc,ae.tray.members.length)],[Pe,ze]=fe[ae.seat];Wt=ae.tray.x+Pe*Ce,nn=ae.tray.z+ze*Ce,Yt=Ce*sv*Math.min(1.15,ri)}else if(ae.family==="mover"){const fe=xt(ae,Ce*hv);if(fe){const Pe=(ae.heading??180)*Math.PI/180;Wt=(fe.mx-m)/S-Math.sin(Pe)*Ce*Zc,nn=(fe.my-p)/S+Math.cos(Pe)*Ce*Zc}}ae.tx=Wt,ae.tz=nn;const N=Wt-ae.dx,W=nn-ae.dz;if(Math.abs(N)<$c&&Math.abs(W)<$c?(ae.dx=Wt,ae.dz=nn):(ae.dx+=N*kt,ae.dz+=W*kt,Oe()),tn.position.set(ae.dx,0,ae.dz),b.copy(tn.position).applyMatrix4(_n),ae.onScreen=b.x>=-1.1&&b.x<=1.1&&b.y>=-1.1&&b.y<=1.1&&b.z>=-1&&b.z<=1,M&&ae.onScreen&&pt++,it){if(tn.visible=!1,M){const fe=Yt*Za,Pe=Jc[ae.kind]??ae.color;Te(se,ee++,ae.dx,0,ae.dz,fe,Ce*Za,fe,Pe),ae.onScreen&&(r.shadow(ae.dx,ae.dz,fe,fe,0,0),r.pool(ae.dx,ae.dz,.02*fe,fe*1.35,Pe,eh,ae.id))}continue}if(tn.visible=M,!M)continue;tn.scale.setScalar(Yt),ae.inst.setLod(Xe);let z=0,k=0,be=0;if(ae.heading!==null){const fe=ae.heading*Math.PI/180;k=Math.sin(fe),be=-Math.cos(fe)}else Et&&(k=(Et.x-ae.mx)/S,be=(Et.y-ae.my)/S);(k!==0||be!==0)&&(z=bs[ae.kind].front==="z"?Math.atan2(k,be):Math.atan2(-be,k)),tn.rotation.y=z;const Ie=c.get(`${ae.kind}:${ae.color}`);if(ae.onScreen){bs[ae.kind].animate(ae.inst,(me+ae.phase)%1);const fe=(ae.tray?.2*Ce:0)+.009*Yt,Pe=Math.cos(z),ze=Math.sin(z);if(Ie.lights.forEach((et,rt)=>{const[Be,Mt,Nt]=et.pos;r.poolFor(ae.dx+(Pe*Be+ze*Nt)*Yt,fe,ae.dz+(-ze*Be+Pe*Nt)*Yt,Yt,et.color,et.strength,Mt,ae.id*7+rt)}),!ae.tray){const[et,rt]=gv[ae.kind]??_v;r.shadow(ae.dx,ae.dz,Yt*et,Yt*rt,z,jc(ae.kind))}}Ze+=Ie.tris}se.count=ee,ee&&(se.instanceMatrix.needsUpdate=!0,se.instanceColor.needsUpdate=!0),X.color.setScalar(1-.24*p_()),Y=re(Y,u.length);let yn=0;for(const ae of Ye.values())ae.count=0;_.set(-(Math.PI/2-i.getPitch()*Math.PI/180),-(i.getBearing()*Math.PI)/180,0),K.setFromEuler(_);for(const ae of u){const[tn,ri]=lv[ae.family]??[0,0];if(ae.x=(ae.mx-m)/S+tn*Ce,ae.z=(ae.my-p)/S+ri*Ce,ae.inst.root.position.set(ae.x,0,ae.z),ae.inst.root.scale.setScalar(Ce),ae.inst.root.visible=!it,it){const Wt=ae.members[0],nn=Ce*Ka,M=Jc[Wt.kind]??Wt.color;Te(Y,yn++,ae.x,0,ae.z,nn,Ce*Za*1.6,nn,M),r.shadow(ae.x,ae.z,nn,nn,0,0),r.pool(ae.x,ae.z,.02*nn,nn*1.3,M,eh*1.3,ae.members.length)}else Ze+=c.get(`tray:${Qc}`).tris,r.shadow(ae.x,ae.z,Ce*Ya,Ce*$a,0,jc("tray"));const Yt=St(ae.label);if(Yt.count<Le){const Wt=Ce*(it?ov:1);ht.compose(st.set(ae.x,(it?.55:1.05)*Ce,ae.z+(it?-.35:-.55)*Ce),K,ut.set(Wt,Wt,Wt)),Yt.setMatrixAt(Yt.count++,ht)}}K.identity();for(const ae of Ye.values())ae.visible=ae.count>0,ae.count&&(ae.instanceMatrix.needsUpdate=!0);Y.count=yn,yn&&(Y.instanceMatrix.needsUpdate=!0,Y.instanceColor.needsUpdate=!0),r.end()}let H=!1,Z=0,pe=performance.now(),ve=30,J=0;function te(B){if(!H)return;const q=B-pe>Sv;ve=q?10:30;const he=q?Mv:xv;B-Z>=he-1&&(Z=B,J++,F(B),i.triggerRepaint()),requestAnimationFrame(te)}function xe(){const B=o.length>0&&!document.hidden&&!a;B&&!H?(H=!0,requestAnimationFrame(te)):B||(H=!1)}const Oe=()=>{pe=performance.now()};i.on("move",Oe);const Me=i.getCanvas();Me.addEventListener("pointerdown",Oe,{passive:!0}),document.addEventListener("visibilitychange",xe);const Ee=120,He=new Float32Array(Ee),qe=new Float32Array(Ee);let Qe=0,U=0,we=0,j=0,ge=null,Re=0;function oe(){const B=U;let q=0,he=0;const De=[];for(let We=0;We<B;We++)q+=He[We],he+=qe[We],De.push(qe[We]);return De.sort((We,Ke)=>We-Ke),{count:o.length,fps:B?Math.round(1e3/(q/B)):0,avgMs:B?+(he/B).toFixed(2):0,p95Ms:B?+De[Math.min(B-1,Math.floor(B*.95))].toFixed(2):0,draws:j,onScreen:pt,tris:Math.round(Ze),lod:Xe,tier:Ne,trays:u.length,trayed:nt,tokens:ee,zoom:+i.getZoom().toFixed(2),night:Pc(),targetFps:ve,ticks:J,failed:a,light:r.stats()}}function Ve(B,q=!1){if(!q&&B-Re<500)return;Re=B,ge||(ge=document.createElement("div"),ge.id="minis-hud",ge.style.cssText="position:fixed;right:8px;top:8px;z-index:20;pointer-events:none;text-align:right;font:10px/1.35 ui-monospace,Menlo,monospace;color:#fff;background:rgba(0,0,0,.55);padding:3px 6px;border-radius:6px;white-space:pre;max-width:46vw",document.body.appendChild(ge));const he=oe();ge.style.display=he.count?"":"none",ge.textContent=`minis ${he.count} · ${he.fps} fps (target ${he.targetFps})
frame ${he.avgMs} ms avg · ${he.p95Ms} ms p95
${he.draws} draws / ${he.onScreen} on screen · ${(he.tris/1e3).toFixed(1)}k tris · ${he.tier} · z${he.zoom} · ${he.night?"night":"day"}
${he.trays} trays (${he.trayed} riding) · ${he.tokens} tokens
${he.light.pools} pools · ${he.light.shadows} shadows · dark ${he.light.darkness.toFixed(2)} · sun ${Math.round(he.light.sunAzDeg)}°/${he.light.sunAltDeg>0?"+":""}${Math.round(he.light.sunAltDeg)}° · moon ${Math.round(he.light.moon*100)}%`}function ke(B,q){a||(a=!0,console.error(`[minis] ${B} failed — falling back to circles`,q),setTimeout(()=>{try{i.getLayer(wr)&&i.removeLayer(wr)}catch{}for(const he of f)he()},0),xe())}const wt={id:wr,type:"custom",renderingMode:"3d",onAdd(B,q){try{s=new i_({canvas:Me,context:q,antialias:!0}),s.autoClear=!1,s.setPixelRatio(1)}catch(he){ke("renderer",he)}},onRemove(){s==null||s.dispose(),s=null},render(B,q){var We;if(!s||a||o.length===0)return;const he=performance.now();try{const Ke=((We=q.defaultProjectionData)==null?void 0:We.mainMatrix)??q.modelViewProjectionMatrix;t.projectionMatrix.fromArray(Ke).multiply(A),t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),s.resetState(),s.setViewport(0,0,B.drawingBufferWidth,B.drawingBufferHeight),s.render(e,t),j=s.info.render.calls}catch(Ke){ke("render",Ke);return}const De=performance.now();we&&(He[Qe]=De-we,qe[Qe]=De-he,Qe=(Qe+1)%Ee,U=Math.min(Ee,U+1)),we=De,Ve(De)}};i.getLayer(Xc)?i.addLayer(wt,Xc):i.addLayer(wt);function gt(B){const q=new mi.MercatorCoordinate(B.x*S+m,B.z*S+p,0).toLngLat(),he=i.project(q);return{family:B.family,count:B.members.length,lng:q.lng,lat:q.lat,x:he.x,y:he.y,keys:B.members.map(De=>De.key)}}return{set(B,q,he,De,We,Ke=null,Lt=1){const Et=Pa(We??tv);let me=l.get(B);if(me&&(me.kind!==q||me.color!==Et)&&(I(me),me=void 0),!me){let it=0;for(let ct=0;ct<B.length;ct++)it=it*31+B.charCodeAt(ct)|0;me=C(B,q,he,De,Et,(it>>>0)%1e3/1e3),me.heading=Ke,me.scale=Lt,D();return}O(me,he,De),me.heading=Ke,me.scale=Lt,Oe(),xe(),i.triggerRepaint()},remove(B){const q=l.get(B);q&&(I(q),D())},removePrefix(B){V(B),D()},has:B=>l.has(B),stress(B){V(qa);const q=yl()??i.getCenter(),he=Li(1234),De=["extractor","extractor","caravan","wraith","extractor","rift"];for(let We=0;We<B;We++){const Ke=We===0?"nexus":We===1?"hero":De[We%De.length],Lt=he()*le,Et=We===1?30:40+Math.sqrt(he())*320,me=q.lat+Et*Math.cos(Lt)/111320,it=q.lng+Et*Math.sin(Lt)/(111320*Math.cos(q.lat*Math.PI/180));C(`${qa}${We}`,Ke,it,me,Pa(Wa[Math.floor(he()*Wa.length)]),he())}U=0,Qe=0,we=0,D()},place(B,q,he,De){const We=C(`${qa}place:${h}`,B,q,he,Pa(De??Wa[3]),0);return D(),We.id},probe(B){const q=o.find(xt=>xt.id===B);if(!q)return null;const he=Me.clientWidth,De=Me.clientHeight,We=xt=>[(xt.x+1)/2*he,(1-xt.y)/2*De],Ke=q.inst.root.position,Lt=new L(Ke.x,0,Ke.z).applyMatrix4(t.projectionMatrix),Et=new L(Ke.x+Ce*1.02,0,Ke.z).applyMatrix4(t.projectionMatrix),me=q.lng+Ce*1.02/(111320*Math.cos(q.lat*Math.PI/180)),it=i.project([q.lng,q.lat]),ct=i.project([me,q.lat]);return{three:[...We(Lt),...We(Et)],map:[it.x,it.y,ct.x,ct.y],sizeM:Ce}},counts(){const B=Object.fromEntries(J_.map(q=>[q,0]));for(const q of o)B[q.kind]++;return B},trays:()=>u.map(gt),probeKey(B){const q=l.get(B);if(!q)return null;const he=Me.clientWidth,De=Me.clientHeight;b.set(q.dx,0,q.dz).applyMatrix4(t.projectionMatrix);const We=i.project([q.lng,q.lat]),Ke=q.shown&&(!q.tray||q.seat>=0);return{x:(b.x+1)/2*he,y:(1-b.y)/2*De,ax:We.x,ay:We.y,shown:Ke,tray:q.tray?q.tray.members.length:0,seat:q.seat,tier:Ne}},trayAt(B,q){const he=i.getZoom();if(Ne==="near"||!u.length)return null;const De=Xa*(Ne==="far"?Ka*1.3:Ya*1.1),We=Xa*(Ne==="far"?Ka*.9:$a*.8);let Ke=null,Lt=1/0;for(const Et of u){const me=i.project(new mi.MercatorCoordinate(Et.x*S+m,Et.z*S+p,0).toLngLat()),it=(B-me.x)/De,ct=q-me.y,xt=ct>0?ct/We:ct/(We*2.6),Ct=it*it+xt*xt;Ct<=1&&Ct<Lt&&(Lt=Ct,Ke=Et)}return Ke?{...gt(Ke),zoom:Math.min(18,Math.max(qc+.25,he+2.5))}:null},setSky(B){r.setSky(B),o.length&&F(performance.now()),i.triggerRepaint()},setNight(B){r.setSky({darkness:B?1:0}),o.length&&F(performance.now()),i.triggerRepaint()},isNight:Pc,stats:oe,lightStats:()=>r.stats(),drawHistogram:()=>{const B={};return e.traverse(q=>{q.onAfterRender=()=>{var De;const he=`${q.type}:${q.name||((De=q.material)==null?void 0:De.constructor.name)}`;B[he]=(B[he]??0)+1}}),new Promise(q=>{i.once("render",()=>setTimeout(()=>q({hist:B,calls:s==null?void 0:s.info.render.calls}),50)),i.triggerRepaint()})},onFail(B){f.push(B),a&&B()},dispose(){V(""),ue(!0),H=!1,i.off("move",Oe),Me.removeEventListener("pointerdown",Oe),document.removeEventListener("visibilitychange",xe),ge==null||ge.remove(),r.dispose(),i.getLayer(wr)&&i.removeLayer(wr)}}}export{wr as LAYER_ID,bv as initMinisLayer};
