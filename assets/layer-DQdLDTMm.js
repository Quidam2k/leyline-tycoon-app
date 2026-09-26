var Mu=Object.defineProperty;var Su=(i,t,e)=>t in i?Mu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ee=(i,t,e)=>Su(i,typeof t!="symbol"?t+"":t,e);import{g as Dl,m as si}from"./index-B0fTXLAU.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="186",yu=0,Nl=1,Eu=2,Fr=1,wu=2,Ts=3,wi=0,ln=1,mn=2,Qn=0,yi=1,Is=2,Ul=3,Fl=4,bu=5,Ji=100,Tu=101,Au=102,Ru=103,Cu=104,Pu=200,Lu=201,Iu=202,Du=203,yh=204,Eh=205,Nu=206,Uu=207,Fu=208,Ou=209,Bu=210,zu=211,ku=212,Gu=213,Hu=214,lo=0,co=1,ho=2,Ds=3,uo=4,fo=5,po=6,mo=7,wh=0,Vu=1,Wu=2,zn=0,bh=1,Th=2,Ah=3,Rh=4,Ch=5,Ph=6,Lh=7,Ih=300,bi=301,ss=302,sa=303,ra=304,ta=306,go=1e3,Kn=1001,_o=1002,$e=1003,Xu=1004,$s=1005,Ze=1006,aa=1007,Mi=1008,gn=1009,Dh=1010,Nh=1011,Ns=1012,sl=1013,kn=1014,Ln=1015,Gn=1016,rl=1017,al=1018,Us=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,In=1023,ti=1026,Si=1027,ol=1028,ll=1029,Ti=1030,cl=1031,hl=1033,Or=33776,Br=33777,zr=33778,kr=33779,vo=35840,xo=35841,Mo=35842,So=35843,yo=36196,Eo=37492,wo=37496,bo=37488,To=37489,Vr=37490,Ao=37491,Ro=37808,Co=37809,Po=37810,Lo=37811,Io=37812,Do=37813,No=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Go=37821,Ho=36492,Vo=36494,Wo=36495,Xo=36283,qo=36284,Wr=36285,Yo=36286,qu=3200,$o=0,Yu=1,ui="",pn="srgb",Xr="srgb-linear",qr="linear",Pe="srgb",oa=7680,$u=519,Zu=512,Ku=513,Ju=514,ul=515,Qu=516,ju=517,dl=518,td=519,ed=35044,Ei=35048,Ol="300 es",Bn=2e3,Fs=2001;function nd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){const i=Yr("canvas");return i.style.display="block",i}const Bl={};function zl(...i){const t="THREE."+i.shift();console.log(t,...i)}function zh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=zh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ee(...i){i=zh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function es(...i){const t=i.join(" ");t in Bl||(Bl[t]=!0,ne(...i))}function sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const rd={[lo]:co,[ho]:po,[uo]:mo,[Ds]:fo,[co]:lo,[po]:ho,[mo]:uo,[fo]:Ds};class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Zo=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function ad(i,t){return(i%t+t)%t}function ca(i,t,e){return(1-e)*i+e*t}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Al=class Al{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;let vt=Al;class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],_=r[a+2],S=r[a+3];if(f!==S||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*S;m<0&&(h=-h,d=-d,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+S*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+S*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rl=class Rl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rl.prototype.isVector3=!0;let I=Rl;const ha=new I,kl=new Hn,Cl=class Cl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],S=s[0],m=s[3],p=s[6],y=s[1],w=s[4],x=s[7],T=s[2],E=s[5],C=s[8];return r[0]=a*S+o*y+l*T,r[3]=a*m+o*w+l*E,r[6]=a*p+o*x+l*C,r[1]=c*S+u*y+f*T,r[4]=c*m+u*w+f*E,r[7]=c*p+u*x+f*C,r[2]=h*S+d*y+_*T,r[5]=h*m+d*w+_*E,r[8]=h*p+d*x+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=e*f+n*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=f*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ua.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Cl.prototype.isMatrix3=!0;let re=Cl;const ua=new re,Gl=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){const i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pe&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pe&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const xe=od();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class ld{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ui===void 0&&(Ui=Yr("canvas")),Ui.width=t.width,Ui.height=t.height;const s=Ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cd=0;class fl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(da(s[a].image)):r.push(da(s[a]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let hd=0;const fa=new I;class tn extends Ri{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Kn,s=Kn,r=Ze,a=Mi,o=In,l=gn,c=tn.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ls(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ih;tn.DEFAULT_ANISOTROPY=1;const Pl=class Pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,x=(d+1)/2,T=(p+1)/2,E=(u+h)/4,C=(f+S)/4,v=(_+m)/4;return w>x&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=C/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pl.prototype.isVector4=!0;let Be=Pl;class ud extends Ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new tn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new fl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kh extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const jr=class jr{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,_,S,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,_,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,_=o*u,S=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,S=c*f;e[0]=h+S*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,S=c*f;e[0]=h-S*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,_=o*u,S=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+S,e[1]=l*f,e[5]=S*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-S*f}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+S,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,pd)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ri.crossVectors(n,un),ri.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ri.crossVectors(n,un)),ri.normalize(),Zs.crossVectors(un,ri),s[0]=ri.x,s[4]=Zs.x,s[8]=un.x,s[1]=ri.y,s[5]=Zs.y,s[9]=un.y,s[2]=ri.z,s[6]=Zs.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],S=n[6],m=n[10],p=n[14],y=n[3],w=n[7],x=n[11],T=n[15],E=s[0],C=s[4],v=s[8],A=s[12],P=s[1],O=s[5],z=s[9],V=s[13],F=s[2],G=s[6],Z=s[10],Y=s[14],ct=s[3],$=s[7],j=s[11],rt=s[15];return r[0]=a*E+o*P+l*F+c*ct,r[4]=a*C+o*O+l*G+c*$,r[8]=a*v+o*z+l*Z+c*j,r[12]=a*A+o*V+l*Y+c*rt,r[1]=u*E+f*P+h*F+d*ct,r[5]=u*C+f*O+h*G+d*$,r[9]=u*v+f*z+h*Z+d*j,r[13]=u*A+f*V+h*Y+d*rt,r[2]=_*E+S*P+m*F+p*ct,r[6]=_*C+S*O+m*G+p*$,r[10]=_*v+S*z+m*Z+p*j,r[14]=_*A+S*V+m*Y+p*rt,r[3]=y*E+w*P+x*F+T*ct,r[7]=y*C+w*O+x*G+T*$,r[11]=y*v+w*z+x*Z+T*j,r[15]=y*A+w*V+x*Y+T*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],S=t[7],m=t[11],p=t[15],y=l*d-c*h,w=o*d-c*f,x=o*h-l*f,T=a*d-c*u,E=a*h-l*u,C=a*f-o*u;return e*(S*y-m*w+p*x)-n*(_*y-m*T+p*E)+s*(_*w-S*T+p*C)-r*(_*x-S*E+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],S=t[13],m=t[14],p=t[15],y=e*o-n*a,w=e*l-s*a,x=e*c-r*a,T=n*l-s*o,E=n*c-r*o,C=s*c-r*l,v=u*S-f*_,A=u*m-h*_,P=u*p-d*_,O=f*m-h*S,z=f*p-d*S,V=h*p-d*m,F=y*V-w*z+x*O+T*P-E*A+C*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/F;return t[0]=(o*V-l*z+c*O)*G,t[1]=(s*z-n*V-r*O)*G,t[2]=(S*C-m*E+p*T)*G,t[3]=(h*E-f*C-d*T)*G,t[4]=(l*P-a*V-c*A)*G,t[5]=(e*V-s*P+r*A)*G,t[6]=(m*x-_*C-p*w)*G,t[7]=(u*C-h*x+d*w)*G,t[8]=(a*z-o*P+c*v)*G,t[9]=(n*P-e*z-r*v)*G,t[10]=(_*E-S*x+p*y)*G,t[11]=(f*x-u*E-d*y)*G,t[12]=(o*A-a*O-l*v)*G,t[13]=(e*O-n*A+s*v)*G,t[14]=(S*w-_*T-m*y)*G,t[15]=(u*T-f*w+h*y)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,S=a*u,m=a*f,p=o*f,y=l*c,w=l*u,x=l*f,T=n.x,E=n.y,C=n.z;return s[0]=(1-(S+p))*T,s[1]=(d+x)*T,s[2]=(_-w)*T,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(h+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+w)*C,s[9]=(m-y)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bn.copy(this);const c=1/a,u=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Bn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===Bn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Fs)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Bn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===Bn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Fs)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};jr.prototype.isMatrix4=!0;let Me=jr;const Fi=new I,bn=new Me,fd=new I(0,0,0),pd=new I(1,1,1),ri=new I,Zs=new I,un=new I,Vl=new Me,Wl=new Hn;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let md=0;const Xl=new I,Oi=new Hn,Wn=new Me,Ks=new I,fs=new I,gd=new I,_d=new Hn,ql=new I(1,0,0),Yl=new I(0,1,0),$l=new I(0,0,1),Zl={type:"added"},vd={type:"removed"},Bi={type:"childadded",child:null},pa={type:"childremoved",child:null};class Je extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new I,e=new Sn,n=new Hn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new re}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(fs,Ks,this.up):Wn.lookAt(Ks,fs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Je.DEFAULT_UP=new I(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qi extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xd={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=ad(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ga(a,r,t+1/3),this.g=ga(a,r,t),this.b=ga(a,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return xe.workingToColorSpace(je.copy(this),t),Math.round(pe(je.r*255,0,255))*65536+Math.round(pe(je.g*255,0,255))*256+Math.round(pe(je.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=pn){xe.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Js);const n=ca(ai.h,Js.h,e),s=ca(ai.s,Js.s,e),r=ca(ai.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Kt;Kt.NAMES=Hh;class Md extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new I,Xn=new I,_a=new I,qn=new I,zi=new I,ki=new I,Kl=new I,va=new I,xa=new I,Ma=new I,Sa=new Be,ya=new Be,Ea=new Be;class Pn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Xn.subVectors(n,e),_a.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Xn),l=Tn.dot(_a),c=Xn.dot(Xn),u=Xn.dot(_a),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Sa.setScalar(0),ya.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sa,r.x),a.addScaledVector(ya,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Xn.subVectors(t,e),Tn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Tn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),ki.subVectors(r,n),va.subVectors(t,n);const l=zi.dot(va),c=ki.dot(va);if(l<=0&&c<=0)return e.copy(n);xa.subVectors(t,s);const u=zi.dot(xa),f=ki.dot(xa);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(zi,a);Ma.subVectors(t,r);const d=zi.dot(Ma),_=ki.dot(Ma);if(_>=0&&d<=_)return e.copy(r);const S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ki,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Kl.subVectors(r,s),o=(f-u)/(f-u+(d-_)),e.copy(s).addScaledVector(Kl,o);const p=1/(m+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(zi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ci{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),js.subVectors(this.max,ps),Gi.subVectors(t.a,ps),Hi.subVectors(t.b,ps),Vi.subVectors(t.c,ps),oi.subVectors(Hi,Gi),li.subVectors(Vi,Hi),di.subVectors(Gi,Vi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-di.z,di.y,oi.z,0,-oi.x,li.z,0,-li.x,di.z,0,-di.x,-oi.y,oi.x,0,-li.y,li.x,0,-di.y,di.x,0];return!wa(e,Gi,Hi,Vi,js)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Gi,Hi,Vi,js))?!1:(tr.crossVectors(oi,li),e=[tr.x,tr.y,tr.z],wa(e,Gi,Hi,Vi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yn=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,Qs=new Ci,Gi=new I,Hi=new I,Vi=new I,oi=new I,li=new I,di=new I,ps=new I,js=new I,tr=new I,fi=new I;function wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const He=new I,er=new vt;let Sd=0;class sn extends Ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ed,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Vh extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const yd=new Ci,ms=new I,ba=new I;class Hs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(ba)),this.expandByPoint(ms.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ed=0;const xn=new Me,Ta=new Je,Wi=new I,dn=new Ci,gs=new Ci,qe=new I;class Xe extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?Wh:Vh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(dn.min,gs.min),dn.expandByPoint(qe),qe.addVectors(dn.max,gs.max),dn.expandByPoint(qe)):(dn.expandByPoint(gs.min),dn.expandByPoint(gs.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qe.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),qe.add(Wi)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new I,l[v]=new I;const c=new I,u=new I,f=new I,h=new vt,d=new vt,_=new vt,S=new I,m=new I;function p(v,A,P){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),_.fromBufferAttribute(r,P),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const O=1/(d.x*_.y-_.x*d.y);isFinite(O)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(O),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(O),o[v].add(S),o[A].add(S),o[P].add(S),l[v].add(m),l[A].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,A=y.length;v<A;++v){const P=y[v],O=P.start,z=P.count;for(let V=O,F=O+z;V<F;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const w=new I,x=new I,T=new I,E=new I;function C(v){T.fromBufferAttribute(s,v),E.copy(T);const A=o[v];w.copy(A),w.sub(T.multiplyScalar(T.dot(A))).normalize(),x.crossVectors(E,A);const O=x.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,O)}for(let v=0,A=y.length;v<A;++v){const P=y[v],O=P.start,z=P.count;for(let V=O,F=O+z;V<F;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new sn(h,u,f)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new I,wd=new I,bd=new re;class hi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Aa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bd.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Td=0;class Vs extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=yi,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Eh,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const $n=new I,Ra=new I,nr=new I,ir=new I;class Ad{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),ir.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(nr),o=ir.dot(this.direction),l=-ir.dot(nr),c=ir.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ra).addScaledVector(nr,h),d}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,y=n.y-a.y,w=n.z-a.z,x=Math.abs(l),T=Math.abs(c),E=Math.abs(u);let C,v,A,P,O,z,V,F,G,Z,Y,ct;if(x>=T&&x>=E?(A=l,z=f,G=_,ct=p,l>=0?(C=c,v=u,P=h,O=d,V=S,F=m,Z=y,Y=w):(C=u,v=c,P=d,O=h,V=m,F=S,Z=w,Y=y)):T>=E?(A=c,z=h,G=S,ct=y,c>=0?(C=u,v=l,P=d,O=f,V=m,F=_,Z=w,Y=p):(C=l,v=u,P=f,O=d,V=_,F=m,Z=p,Y=w)):(A=u,z=d,G=m,ct=w,u>=0?(C=l,v=c,P=f,O=h,V=_,F=S,Z=p,Y=y):(C=c,v=l,P=h,O=f,V=S,F=_,Z=y,Y=p)),A===0)return null;const $=C/A,j=v/A,rt=1/A,kt=P-$*z,Ft=O-j*z,de=V-$*G,ie=F-j*G,me=Z-$*ct,Q=Y-j*ct,st=me*ie-Q*de,Ct=kt*Q-Ft*me,Wt=de*Ft-ie*kt;if(s){if(st<0||Ct<0||Wt<0)return null}else if((st<0||Ct<0||Wt<0)&&(st>0||Ct>0||Wt>0))return null;const Ut=st+Ct+Wt;if(Ut===0)return null;const $t=rt*(st*z+Ct*G+Wt*ct);return(Ut>0?$t<0:$t>0)?null:this.at($t/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $r extends Vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jl=new Me,pi=new Ad,sr=new Hs,Ql=new I,rr=new I,ar=new I,or=new I,Ca=new I,lr=new I,jl=new I,cr=new I;class _n extends Je{constructor(t=new Xe,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ca.fromBufferAttribute(f,t),a?lr.addScaledVector(Ca,u):lr.addScaledVector(Ca.sub(e),u))}e.add(lr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(sr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(sr,Ql)===null||pi.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,T=w;x<T;x+=3){const E=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=hr(this,p,t,n,c,u,f,E,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const y=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);s=hr(this,a,t,n,c,u,f,y,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,T=w;x<T;x+=3){const E=x,C=x+1,v=x+2;s=hr(this,p,t,n,c,u,f,E,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const y=m,w=m+1,x=m+2;s=hr(this,a,t,n,c,u,f,y,w,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Rd(i,t,e,n,s,r,a,o){let l;if(t.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:i}}function hr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,rr),i.getVertexPosition(l,ar),i.getVertexPosition(c,or);const u=Rd(i,t,e,n,rr,ar,or,jl);if(u){const f=new I;Pn.getBarycoord(jl,rr,ar,or,f),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,l,c,f,new vt)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,l,c,f,new vt)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Pn.getNormal(rr,ar,or,h.normal),u.face=h,u.barycoord=f}return u}class Xh extends tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=$e,u=$e,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new Me,tc=new Me,ur=[],ec=new Ci,Cd=new Me,_s=new _n,vs=new Hs;class Zr extends _n{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),ec.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),vs.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),t.ray.intersectsSphere(vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),tc.multiplyMatrices(n,Xi),_s.matrixWorld=tc,_s.raycast(t,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xh(new Float32Array(s*this.count),s,this.count,ol,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new Hs,Pd=new vt(.5,.5),dr=new I;class pl{constructor(t=new hi,e=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],S=r[9],m=r[10],p=r[11],y=r[12],w=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,p-_,T-y).normalize(),s[1].setComponents(c+a,d+u,p+_,T+y).normalize(),s[2].setComponents(c+o,d+f,p+S,T+w).normalize(),s[3].setComponents(c-o,d-f,p-S,T-w).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,p-m,T-x).normalize();else if(s[4].setComponents(c-l,d-h,p-m,T-x).normalize(),e===Bn)s[5].setComponents(c+l,d+h,p+m,T+x).normalize();else if(e===Fs)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=Pd.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends tn{constructor(t=[],e=bi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ld extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bs extends tn{constructor(t,e,n=kn,s,r,a,o=$e,l=$e,c,u=ti,f=1){if(u!==ti&&u!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Id extends Bs{constructor(t,e=kn,n=bi,s,r,a=$e,o=$e,l,c=ti){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yh extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class et extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function _(S,m,p,y,w,x,T,E,C,v,A){const P=x/C,O=T/v,z=x/2,V=T/2,F=E/2,G=C+1,Z=v+1;let Y=0,ct=0;const $=new I;for(let j=0;j<Z;j++){const rt=j*O-V;for(let kt=0;kt<G;kt++){const Ft=kt*P-z;$[S]=Ft*y,$[m]=rt*w,$[p]=F,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[p]=E>0?1:-1,u.push($.x,$.y,$.z),f.push(kt/C),f.push(1-j/v),Y+=1}}for(let j=0;j<v;j++)for(let rt=0;rt<C;rt++){const kt=h+rt+G*j,Ft=h+rt+G*(j+1),de=h+(rt+1)+G*(j+1),ie=h+(rt+1)+G*j;l.push(kt,Ft,ie),l.push(Ft,de,ie),ct+=6}o.addGroup(d,ct,A),d+=ct,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Et extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let _=0;const S=[],m=n/2;let p=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function y(){const x=new I,T=new I;let E=0;const C=(e-t)/n;for(let v=0;v<=r;v++){const A=[],P=v/r,O=P*(e-t)+t;for(let z=0;z<=s;z++){const V=z/s,F=V*l+o,G=Math.sin(F),Z=Math.cos(F);T.x=O*G,T.y=-P*n+m,T.z=O*Z,f.push(T.x,T.y,T.z),x.set(G,C,Z).normalize(),h.push(x.x,x.y,x.z),d.push(V,1-P),A.push(_++)}S.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){const P=S[A][v],O=S[A+1][v],z=S[A+1][v+1],V=S[A][v+1];(t>0||A!==0)&&(u.push(P,O,V),E+=3),(e>0||A!==r-1)&&(u.push(O,z,V),E+=3)}c.addGroup(p,E,0),p+=E}function w(x){const T=_,E=new vt,C=new I;let v=0;const A=x===!0?t:e,P=x===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),_++;const O=_;for(let z=0;z<=s;z++){const F=z/s*l+o,G=Math.cos(F),Z=Math.sin(F);C.x=A*Z,C.y=m*P,C.z=A*G,f.push(C.x,C.y,C.z),h.push(0,P,0),E.x=G*.5+.5,E.y=Z*.5*P+.5,d.push(E.x,E.y),_++}for(let z=0;z<s;z++){const V=T+z,F=O+z;x===!0?u.push(F,F+1,V):u.push(F+1,F,V),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class De extends Et{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new De(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cs extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const w=new I,x=new I,T=new I;for(let E=0;E<e.length;E+=3)d(e[E+0],w),d(e[E+1],x),d(e[E+2],T),l(w,x,T,y)}function l(y,w,x,T){const E=T+1,C=[];for(let v=0;v<=E;v++){C[v]=[];const A=y.clone().lerp(x,v/E),P=w.clone().lerp(x,v/E),O=E-v;for(let z=0;z<=O;z++)z===0&&v===E?C[v][z]=A:C[v][z]=A.clone().lerp(P,z/O)}for(let v=0;v<E;v++)for(let A=0;A<2*(E-v)-1;A++){const P=Math.floor(A/2);A%2===0?(h(C[v][P+1]),h(C[v+1][P]),h(C[v][P])):(h(C[v][P+1]),h(C[v+1][P+1]),h(C[v+1][P]))}}function c(y){const w=new I;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(y),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function u(){const y=new I;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const x=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(x,1-T)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){const w=a[y+0],x=a[y+2],T=a[y+4],E=Math.max(w,x,T),C=Math.min(w,x,T);E>.9&&C<.1&&(w<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,w){const x=y*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function _(){const y=new I,w=new I,x=new I,T=new I,E=new vt,C=new vt,v=new vt;for(let A=0,P=0;A<r.length;A+=9,P+=6){y.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),E.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),v.set(a[P+4],a[P+5]),T.copy(y).add(w).add(x).divideScalar(3);const O=m(T);S(E,P+0,y,O),S(C,P+2,w,O),S(v,P+4,x,O)}}function S(y,w,x,T){T<0&&y.x===1&&(a[w]=y.x-1),x.x===0&&x.z===0&&(a[w]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.vertices,t.indices,t.radius,t.detail)}}class ei extends cs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ei(t.radius,t.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new Me;for(let d=0;d<=t;d++){const _=d/t;s[d]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ml extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dd extends ml{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const nc=new I,ic=new I,Pa=new gl,La=new gl,Ia=new gl;class Nd extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ic.subVectors(s[0],s[1]).add(s[0]),c=ic);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(nc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Pa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,S,m),La.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,S,m),Ia.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),La.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ia.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Pa.calc(l),La.calc(l),Ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ud(i,t){const e=1-i;return e*e*t}function Fd(i,t){return 2*(1-i)*i*t}function Od(i,t){return i*i*t}function Cs(i,t,e,n){return Ud(i,t)+Fd(i,e)+Od(i,n)}function Bd(i,t){const e=1-i;return e*e*e*t}function zd(i,t){const e=1-i;return 3*e*e*i*t}function kd(i,t){return 3*(1-i)*i*i*t}function Gd(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return Bd(i,t)+zd(i,e)+kd(i,n)+Gd(i,s)}class $h extends Vn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(t,s.x,r.x,a.x,o.x),Ps(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hd extends Vn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(t,s.x,r.x,a.x,o.x),Ps(t,s.y,r.y,a.y,o.y),Ps(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends Vn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vd extends Vn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends Vn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Cs(t,s.x,r.x,a.x),Cs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wd extends Vn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Cs(t,s.x,r.x,a.x),Cs(t,s.y,r.y,a.y),Cs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(sc(o,l.x,c.x,u.x,f.x),sc(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var Ko=Object.freeze({__proto__:null,ArcCurve:Dd,CatmullRomCurve3:Nd,CubicBezierCurve:$h,CubicBezierCurve3:Hd,EllipseCurve:ml,LineCurve:Zh,LineCurve3:Vd,QuadraticBezierCurve:Kh,QuadraticBezierCurve3:Wd,SplineCurve:Jh});class Xd extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}}class Kr extends Xd{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zh(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Kh(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new $h(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Jh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new ml(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ni extends Kr{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kr().fromJSON(s))}return this}}function qd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Qh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Jd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){const d=i[h],_=i[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return zs(r,a,e,o,l,c,0),a}function Qh(i,t,e,n,s){let r;if(s===cf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=rc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=rc(a/n|0,i[a],i[a+1],r);return r&&rs(r,r.next)&&(Gs(r),r=r.next),r}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(rs(e,e.next)||ze(e.prev,e,e.next)===0)){if(Gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&nf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?$d(i,n,s,r):Yd(i)){t.push(l.i,i.i,c.i),Gs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Zd(Ai(i),t),zs(i,t,e,n,s,r,2)):a===2&&Kd(i,t,e,n,s,r):zs(Ai(i),t,e,n,s,r,1);break}}}function Yd(i){const t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&As(s,o,r,l,a,c,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function $d(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ze(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),S=Math.max(o,l,c),m=Math.max(u,f,h),p=Jo(d,_,t,e,n),y=Jo(S,m,t,e,n);let w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=y;){if(w.x>=d&&w.x<=S&&w.y>=_&&w.y<=m&&w!==s&&w!==a&&As(o,u,l,f,c,h,w.x,w.y)&&ze(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=d&&x.x<=S&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&As(o,u,l,f,c,h,x.x,x.y)&&ze(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=S&&w.y>=_&&w.y<=m&&w!==s&&w!==a&&As(o,u,l,f,c,h,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=S&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&As(o,u,l,f,c,h,x.x,x.y)&&ze(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!rs(n,s)&&tu(n,e,e.next,s)&&ks(n,s)&&ks(s,n)&&(t.push(n.i,e.i,s.i),Gs(e),Gs(e.next),e=i=s),e=e.next}while(e!==i);return Ai(e)}function Kd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&af(a,o)){let l=eu(a,o);a=Ai(a,a.next),l=Ai(l,l.next),zs(a,t,e,n,s,r,0),zs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Jd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Qh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(rf(c))}s.sort(Qd);for(let r=0;r<s.length;r++)e=jd(s[r],e);return e}function Qd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function jd(i,t){const e=tf(i,t);if(!e)return t;const n=eu(e,i);return Ai(n,n.next),Ai(e,e.next)}function tf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(rs(i,e))return e;do{if(rs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);ks(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&ef(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function ef(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function nf(i,t,e,n){let s=i;do s.z===0&&(s.z=Jo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sf(s)}function sf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Jo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function As(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&jh(i,t,e,n,s,r,a,o)}function af(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!of(i,t)&&(ks(i,t)&&ks(t,i)&&lf(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||rs(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function rs(i,t){return i.x===t.x&&i.y===t.y}function tu(i,t,e,n){const s=pr(ze(i,t,e)),r=pr(ze(i,t,n)),a=pr(ze(e,n,i)),o=pr(ze(e,n,t));return!!(s!==r&&a!==o||s===0&&fr(i,e,t)||r===0&&fr(i,n,t)||a===0&&fr(e,i,n)||o===0&&fr(e,t,n))}function fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pr(i){return i>0?1:i<0?-1:0}function of(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ks(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function lf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function eu(i,t){const e=Qo(i.i,i.x,i.y),n=Qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rc(i,t,e,n){const s=Qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class hf{static triangulate(t,e,n=2){return qd(t,e,n)}}class Jn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Jn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ac(t),oc(n,t);let a=t.length;e.forEach(ac);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,oc(n,e[l]);const o=hf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ac(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function oc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ea extends Xe{constructor(t=new ni([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:uf;let w,x=!1,T,E,C,v;if(p){w=p.getSpacedPoints(u),x=!0,h=!1;const it=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,it),E=new I,C=new I,v=new I}h||(m=0,d=0,_=0,S=0);const A=o.extractPoints(c);let P=A.shape;const O=A.holes;if(!Jn.isClockWise(P)){P=P.reverse();for(let it=0,ht=O.length;it<ht;it++){const ut=O[it];Jn.isClockWise(ut)&&(O[it]=ut.reverse())}}function V(it){const ut=10000000000000001e-36;let dt=it[0];for(let xt=1;xt<=it.length;xt++){const qt=xt%it.length,Vt=it[qt],Zt=Vt.x-dt.x,jt=Vt.y-dt.y,D=Zt*Zt+jt*jt,we=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(dt.x),Math.abs(dt.y)),ae=ut*we*we;if(D<=ae){it.splice(qt,1),xt--;continue}dt=Vt}}V(P),O.forEach(V);const F=O.length,G=P;for(let it=0;it<F;it++){const ht=O[it];P=P.concat(ht)}function Z(it,ht,ut){return ht||Ee("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ht,ut)}const Y=P.length;function ct(it,ht,ut){let dt,xt,qt;const Vt=it.x-ht.x,Zt=it.y-ht.y,jt=ut.x-it.x,D=ut.y-it.y,we=Vt*Vt+Zt*Zt,ae=Vt*D-Zt*jt;if(Math.abs(ae)>Number.EPSILON){const b=Math.sqrt(we),g=Math.sqrt(jt*jt+D*D),k=ht.x-Zt/b,W=ht.y+Vt/b,K=ut.x-D/g,pt=ut.y+jt/g,ft=((K-k)*D-(pt-W)*jt)/(Vt*D-Zt*jt);dt=k+Vt*ft-it.x,xt=W+Zt*ft-it.y;const J=dt*dt+xt*xt;if(J<=2)return new vt(dt,xt);qt=Math.sqrt(J/2)}else{let b=!1;Vt>Number.EPSILON?jt>Number.EPSILON&&(b=!0):Vt<-Number.EPSILON?jt<-Number.EPSILON&&(b=!0):Math.sign(Zt)===Math.sign(D)&&(b=!0),b?(dt=-Zt,xt=Vt,qt=Math.sqrt(we)):(dt=Vt,xt=Zt,qt=Math.sqrt(we/2))}return new vt(dt/qt,xt/qt)}const $=[];for(let it=0,ht=G.length,ut=ht-1,dt=it+1;it<ht;it++,ut++,dt++)ut===ht&&(ut=0),dt===ht&&(dt=0),$[it]=ct(G[it],G[ut],G[dt]);const j=[];let rt,kt=$.concat();for(let it=0,ht=F;it<ht;it++){const ut=O[it];rt=[];for(let dt=0,xt=ut.length,qt=xt-1,Vt=dt+1;dt<xt;dt++,qt++,Vt++)qt===xt&&(qt=0),Vt===xt&&(Vt=0),rt[dt]=ct(ut[dt],ut[qt],ut[Vt]);j.push(rt),kt=kt.concat(rt)}let Ft;if(m===0)Ft=Jn.triangulateShape(G,O);else{const it=[],ht=[];for(let ut=0;ut<m;ut++){const dt=ut/m,xt=d*Math.cos(dt*Math.PI/2),qt=_*Math.sin(dt*Math.PI/2)+S;for(let Vt=0,Zt=G.length;Vt<Zt;Vt++){const jt=Z(G[Vt],$[Vt],qt);Ct(jt.x,jt.y,-xt),dt===0&&it.push(jt)}for(let Vt=0,Zt=F;Vt<Zt;Vt++){const jt=O[Vt];rt=j[Vt];const D=[];for(let we=0,ae=jt.length;we<ae;we++){const b=Z(jt[we],rt[we],qt);Ct(b.x,b.y,-xt),dt===0&&D.push(b)}dt===0&&ht.push(D)}}Ft=Jn.triangulateShape(it,ht)}const de=Ft.length,ie=_+S;for(let it=0;it<Y;it++){const ht=h?Z(P[it],kt[it],ie):P[it];x?(C.copy(T.normals[0]).multiplyScalar(ht.x),E.copy(T.binormals[0]).multiplyScalar(ht.y),v.copy(w[0]).add(C).add(E),Ct(v.x,v.y,v.z)):Ct(ht.x,ht.y,0)}for(let it=1;it<=u;it++)for(let ht=0;ht<Y;ht++){const ut=h?Z(P[ht],kt[ht],ie):P[ht];x?(C.copy(T.normals[it]).multiplyScalar(ut.x),E.copy(T.binormals[it]).multiplyScalar(ut.y),v.copy(w[it]).add(C).add(E),Ct(v.x,v.y,v.z)):Ct(ut.x,ut.y,f/u*it)}for(let it=m-1;it>=0;it--){const ht=it/m,ut=d*Math.cos(ht*Math.PI/2),dt=_*Math.sin(ht*Math.PI/2)+S;for(let xt=0,qt=G.length;xt<qt;xt++){const Vt=Z(G[xt],$[xt],dt);Ct(Vt.x,Vt.y,f+ut)}for(let xt=0,qt=O.length;xt<qt;xt++){const Vt=O[xt];rt=j[xt];for(let Zt=0,jt=Vt.length;Zt<jt;Zt++){const D=Z(Vt[Zt],rt[Zt],dt);x?Ct(D.x,D.y+w[u-1].y,w[u-1].x+ut):Ct(D.x,D.y,f+ut)}}}me(),Q();function me(){const it=s.length/3;if(h){let ht=0,ut=Y*ht;for(let dt=0;dt<de;dt++){const xt=Ft[dt];Wt(xt[2]+ut,xt[1]+ut,xt[0]+ut)}ht=u+m*2,ut=Y*ht;for(let dt=0;dt<de;dt++){const xt=Ft[dt];Wt(xt[0]+ut,xt[1]+ut,xt[2]+ut)}}else{for(let ht=0;ht<de;ht++){const ut=Ft[ht];Wt(ut[2],ut[1],ut[0])}for(let ht=0;ht<de;ht++){const ut=Ft[ht];Wt(ut[0]+Y*u,ut[1]+Y*u,ut[2]+Y*u)}}n.addGroup(it,s.length/3-it,0)}function Q(){const it=s.length/3;let ht=0;st(G,ht),ht+=G.length;for(let ut=0,dt=O.length;ut<dt;ut++){const xt=O[ut];st(xt,ht),ht+=xt.length}n.addGroup(it,s.length/3-it,1)}function st(it,ht){let ut=it.length;for(;--ut>=0;){const dt=ut;let xt=ut-1;xt<0&&(xt=it.length-1);for(let qt=0,Vt=u+m*2;qt<Vt;qt++){const Zt=Y*qt,jt=Y*(qt+1),D=ht+dt+Zt,we=ht+xt+Zt,ae=ht+xt+jt,b=ht+dt+jt;Ut(D,we,ae,b)}}}function Ct(it,ht,ut){l.push(it),l.push(ht),l.push(ut)}function Wt(it,ht,ut){$t(it),$t(ht),$t(ut);const dt=s.length/3,xt=y.generateTopUV(n,s,dt-3,dt-2,dt-1);Se(xt[0]),Se(xt[1]),Se(xt[2])}function Ut(it,ht,ut,dt){$t(it),$t(ht),$t(dt),$t(ht),$t(ut),$t(dt);const xt=s.length/3,qt=y.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);Se(qt[0]),Se(qt[1]),Se(qt[3]),Se(qt[1]),Se(qt[2]),Se(qt[3])}function $t(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function Se(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return df(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ko[s.type]().fromJSON(s)),new ea(n,t.options)}}const uf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new vt(r,a),new vt(o,l),new vt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],_=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new vt(a,1-l),new vt(c,1-f),new vt(h,1-_),new vt(S,1-p)]:[new vt(o,1-l),new vt(u,1-f),new vt(d,1-_),new vt(m,1-p)]}};function df(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ke extends cs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ke(t.radius,t.detail)}}class _l extends Xe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,f=new I,h=new vt,d=new I,_=new I,S=new I;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,S.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),l.push(d.x,d.y,d.z),S.copy(_)}for(let y=0;y<=e;y++){const w=n+y*u*s,x=Math.sin(w),T=Math.cos(w);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*x,f.y=t[E].y,f.z=t[E].x*T,a.push(f.x,f.y,f.z),h.x=y/e,h.y=E/(t.length-1),o.push(h.x,h.y);const C=l[3*E+0]*x,v=l[3*E+1],A=l[3*E+0]*T;c.push(C,v,A)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const x=w+y*t.length,T=x,E=x+t.length,C=x+t.length+1,v=x+1;r.push(T,E,v),r.push(C,v,E)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.points,t.segments,t.phiStart,t.phiLength)}}class Le extends cs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Le(t.radius,t.detail)}}class Ws extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let w=0;w<c;w++){const x=w*f-r;_.push(x,-y,0),S.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const w=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(w,x,E),d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class vl extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new I,_=new vt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}f+=h}for(let S=0;S<s;S++){const m=S*(n+1);for(let p=0;p<n;p++){const y=p+m,w=y,x=y+n+1,T=y+n+2,E=y+1;o.push(w,x,E),o.push(x,T,E)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pi extends Xe{constructor(t=new ni([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const _=h.holes;Jn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const y=_[m];Jn.isClockWise(y)===!0&&(_[m]=y.reverse())}const S=Jn.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const y=_[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=S.length;m<p;m++){const y=S[m],w=y[0]+f,x=y[1]+f,T=y[2]+f;n.push(w,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ff(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Pi(n,t.curveSegments)}}function ff(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class on extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,h=new I,d=[],_=[],S=[],m=[];for(let p=0;p<=n;p++){const y=[],w=p/n,x=a+w*o,T=t*Math.cos(x),E=Math.sqrt(t*t-T*T);let C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){const A=v/e,P=s+A*r;f.x=-E*Math.cos(P),f.y=T,f.z=E*Math.sin(P),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(A+C,1-w),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const w=u[p][y+1],x=u[p][y],T=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&d.push(w,x,E),(p!==n-1||l<Math.PI)&&d.push(x,T,E)}this.setIndex(d),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yn extends cs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yn(t.radius,t.detail)}}class ue extends Xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new I,d=new I,_=new I;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=s;p++){const y=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),_.subVectors(d,h).normalize(),u.push(_.x,_.y,_.z),f.push(p/s),f.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,w=(s+1)*(S-1)+m,x=(s+1)*S+m;l.push(p,y,x),l.push(y,w,x)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(lc(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function lc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const mf={clone:as,merge:nn};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class vf extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xf extends Vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mf extends Vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sf extends Vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class iu extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class yf extends iu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Da=new Me,cc=new I,hc=new I;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(cc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Da,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mr=new I,gr=new Hn,Nn=new I;class xl extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mr,gr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mr,gr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mr,gr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mr,gr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new I,uc=new vt,dc=new vt;class Cn extends xl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,uc,dc),e.subVectors(dc,uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(la*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ml extends xl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wf extends Ef{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fc extends iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new wf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const qi=-90,Yi=1;class bf extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new Cn(qi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new Cn(qi,Yi,t,e);a.layers=this.layers,this.add(a);const o=new Cn(qi,Yi,t,e);o.layers=this.layers,this.add(o);const l=new Cn(qi,Yi,t,e);l.layers=this.layers,this.add(l);const c=new Cn(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Tf extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ll=class Ll{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ll.prototype.isMatrix2=!0;let pc=Ll;function mc(i,t,e,n){const s=Af(n);switch(e){case Oh:return i*t;case ol:return i*t/s.components*s.byteLength;case ll:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case cl:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case hl:return i*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:case So:return Math.max(i,16)*Math.max(t,8)/4;case vo:case Mo:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Eo:case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Vr:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ho:case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wr:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Af(i){switch(i){case gn:case Dh:return{byteLength:1,components:1};case Ns:case Nh:case Gn:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case kn:case sl:case Ln:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function su(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],S=f[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const S=f[d];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t0=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,S0=`#ifdef USE_ENVMAP
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
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,A0=`uniform sampler2D dfgLUT;
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
}`,R0=`
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Bp=`#define DISTANCE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,Kp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,em=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,lm=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:If,alphatest_fragment:Df,alphatest_pars_fragment:Nf,aomap_fragment:Uf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:zf,beginnormal_vertex:kf,bsdfs:Gf,iridescence_fragment:Hf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:$f,color_pars_fragment:Zf,color_pars_vertex:Kf,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:t0,displacementmap_pars_vertex:e0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:o0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:S0,envmap_vertex:u0,fog_vertex:d0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:x0,lights_pars_begin:M0,lights_toon_fragment:y0,lights_toon_pars_fragment:E0,lights_phong_fragment:w0,lights_phong_pars_fragment:b0,lights_physical_fragment:T0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:P0,lightprobes_pars_fragment:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:U0,map_fragment:F0,map_pars_fragment:O0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:G0,morphinstance_vertex:H0,morphcolor_vertex:V0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:$0,normal_pars_fragment:Z0,normal_pars_vertex:K0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:fp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:xp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:yp,transmission_fragment:Ep,transmission_pars_fragment:wp,uv_pars_fragment:bp,uv_pars_vertex:Tp,uv_vertex:Ap,worldpos_vertex:Rp,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Ip,cube_vert:Dp,cube_frag:Np,depth_vert:Up,depth_frag:Fp,distance_vert:Op,distance_frag:Bp,equirect_vert:zp,equirect_frag:kp,linedashed_vert:Gp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:$p,meshnormal_vert:Zp,meshnormal_frag:Kp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:jp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:am,sprite_vert:om,sprite_frag:lm},Lt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},On={basic:{uniforms:nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:nn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:nn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:nn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:nn([Lt.lights,Lt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};On.physical={uniforms:nn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const _r={r:0,b:0,g:0},cm=new Me,ru=new re;ru.set(-1,0,0,0,1,0,0,0,1);function hm(i,t,e,n,s,r){const a=new Kt(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const x=y.backgroundBlurriness>0;w=t.get(w,x)}return w}function _(y){let w=!1;const x=d(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,w){const x=d(w);x&&(x.isCubeTexture||x.mapping===ta)?(c===void 0&&(c=new _n(new et(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:as(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ru),c.material.toneMapped=xe.getTransfer(x.colorSpace)!==Pe,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _n(new Ws(2,2),new vn({name:"BackgroundMaterial",uniforms:as(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xe.getTransfer(x.colorSpace)!==Pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(_r,nu(i)),e.buffers.color.setClear(_r.r,_r.g,_r.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:S,dispose:p}}function um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(O,z,V,F,G){let Z=!1;const Y=f(O,F,V,z);r!==Y&&(r=Y,c(r.object)),Z=d(O,F,V,G),Z&&_(O,F,V,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(O,z,V,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function f(O,z,V,F){const G=F.wireframe===!0;let Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);const Y=O.isInstancedMesh===!0?O.id:0;let ct=Z[Y];ct===void 0&&(ct={},Z[Y]=ct);let $=ct[V.id];$===void 0&&($={},ct[V.id]=$);let j=$[G];return j===void 0&&(j=h(l()),$[G]=j),j}function h(O){const z=[],V=[],F=[];for(let G=0;G<e;G++)z[G]=0,V[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:F,object:O,attributes:{},index:null}}function d(O,z,V,F){const G=r.attributes,Z=z.attributes;let Y=0;const ct=V.getAttributes();for(const $ in ct)if(ct[$].location>=0){const rt=G[$];let kt=Z[$];if(kt===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(kt=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(kt=O.instanceColor)),rt===void 0||rt.attribute!==kt||kt&&rt.data!==kt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function _(O,z,V,F){const G={},Z=z.attributes;let Y=0;const ct=V.getAttributes();for(const $ in ct)if(ct[$].location>=0){let rt=Z[$];rt===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor));const kt={};kt.attribute=rt,rt&&rt.data&&(kt.data=rt.data),G[$]=kt,Y++}r.attributes=G,r.attributesNum=Y,r.index=F}function S(){const O=r.newAttributes;for(let z=0,V=O.length;z<V;z++)O[z]=0}function m(O){p(O,0)}function p(O,z){const V=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;V[O]=1,F[O]===0&&(i.enableVertexAttribArray(O),F[O]=1),G[O]!==z&&(i.vertexAttribDivisor(O,z),G[O]=z)}function y(){const O=r.newAttributes,z=r.enabledAttributes;for(let V=0,F=z.length;V<F;V++)z[V]!==O[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function w(O,z,V,F,G,Z,Y){Y===!0?i.vertexAttribIPointer(O,z,V,G,Z):i.vertexAttribPointer(O,z,V,F,G,Z)}function x(O,z,V,F){S();const G=F.attributes,Z=V.getAttributes(),Y=z.defaultAttributeValues;for(const ct in Z){const $=Z[ct];if($.location>=0){let j=G[ct];if(j===void 0&&(ct==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ct==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const rt=j.normalized,kt=j.itemSize,Ft=t.get(j);if(Ft===void 0)continue;const de=Ft.buffer,ie=Ft.type,me=Ft.bytesPerElement,Q=ie===i.INT||ie===i.UNSIGNED_INT||j.gpuType===sl;if(j.isInterleavedBufferAttribute){const st=j.data,Ct=st.stride,Wt=j.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<$.locationSize;Ut++)p($.location+Ut,st.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<$.locationSize;Ut++)m($.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Ut=0;Ut<$.locationSize;Ut++)w($.location+Ut,kt/$.locationSize,ie,rt,Ct*me,(Wt+kt/$.locationSize*Ut)*me,Q)}else{if(j.isInstancedBufferAttribute){for(let st=0;st<$.locationSize;st++)p($.location+st,j.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let st=0;st<$.locationSize;st++)m($.location+st);i.bindBuffer(i.ARRAY_BUFFER,de);for(let st=0;st<$.locationSize;st++)w($.location+st,kt/$.locationSize,ie,rt,kt*me,kt/$.locationSize*st*me,Q)}}else if(Y!==void 0){const rt=Y[ct];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv($.location,rt);break;case 3:i.vertexAttrib3fv($.location,rt);break;case 4:i.vertexAttrib4fv($.location,rt);break;default:i.vertexAttrib1fv($.location,rt)}}}}y()}function T(){A();for(const O in n){const z=n[O];for(const V in z){const F=z[V];for(const G in F){const Z=F[G];for(const Y in Z)u(Z[Y].object),delete Z[Y];delete F[G]}}delete n[O]}}function E(O){if(n[O.id]===void 0)return;const z=n[O.id];for(const V in z){const F=z[V];for(const G in F){const Z=F[G];for(const Y in Z)u(Z[Y].object),delete Z[Y];delete F[G]}}delete n[O.id]}function C(O){for(const z in n){const V=n[z];for(const F in V){const G=V[F];if(G[O.id]===void 0)continue;const Z=G[O.id];for(const Y in Z)u(Z[Y].object),delete Z[Y];delete G[O.id]}}}function v(O){for(const z in n){const V=n[z],F=O.isInstancedMesh===!0?O.id:0,G=V[F];if(G!==void 0){for(const Z in G){const Y=G[Z];for(const ct in Y)u(Y[ct].object),delete Y[ct];delete G[Z]}delete V[F],Object.keys(V).length===0&&delete n[z]}}}function A(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function dm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&C!==Ln&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:x,maxSamples:T,samples:E}}function pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hi,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,w=y*4;let x=p.clippingState||null;l.value=x,x=u(_,h,w,d);for(let T=0;T!==w;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=d+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=d;w!==S;++w,x+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const ji=4,mm=6,gm=20,_m=256,xs=new Ml,gc=new Kt;let Na=null,Ua=0,Fa=0,Oa=!1;const vm=new I,gi=new I;class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=vm}=r;Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Ua,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Gn,format:In,colorSpace:Xr,depthBuffer:!1},s=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xm(r)),this._blurMaterial=Sm(r,t,e),this._ggxMaterial=Mm(r,t,e)}return s}_compileMaterial(t){const e=new _n(new Xe,t);this._renderer.compile(e,xs)}_sceneToCubeUV(t,e,n,s,r){const l=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(gc),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new et,new $r({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(gc),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const T=this._cubeSize;$i(s,x*T,w>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(S,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bi||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$i(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-ji?n-_+ji:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,$i(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,xs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,$i(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,xs)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-ji?s-this._lodMax+ji:0),h=4*(this._cubeSize-u);$i(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,xs)}}function xm(i){const t=[],e=[];let n=i;const s=i-ji+1+mm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),S=new Float32Array(d*h*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,w=p>2?0:-1,x=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];_.set(x,d*h*p);for(let T=0;T<h;T++){const E=u[T*2]*2-1,C=u[T*2+1]*2-1;p===0?gi.set(1,C,E):p===1?gi.set(-E,1,-C):p===2?gi.set(-E,C,1):p===3?gi.set(-1,C,-E):p===4?gi.set(-E,-1,C):gi.set(E,C,-1),gi.toArray(S,(p*h+T)*d)}}const m=new Xe;m.setAttribute("position",new sn(_,d)),m.setAttribute("outputDirection",new sn(S,d)),e.push(new _n(m,null)),n>ji&&n--}return{lodMeshes:e,sizeLods:t}}function vc(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mm(i,t,e){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:na(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Sm(i,t,e){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:gm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:na(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function xc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mc(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function na(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class au extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Qn});r.uniforms.tEquirect.value=e;const a=new _n(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Ze),new bf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function ym(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===sa||d===ra)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new au(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===sa||d===ra,S=d===bi||d===ss;if(_||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new _c(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return _&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new _c(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===sa?h.mapping=bi:d===ra&&(h.mapping=ss),h}function l(h){let d=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Em(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(d!==null){const y=d.array;S=d.version;for(let w=0,x=y.length;w<x;w+=3){const T=y[w+0],E=y[w+1],C=y[w+2];h.push(T,E,E,C,C,T)}}else{const y=_.array;S=_.version;for(let w=0,x=y.length/3-1;w<x;w+=3){const T=w+0,E=w+1,C=w+2;h.push(T,E,E,C,C,T)}}const m=new(_.count>=65535?Wh:Vh)(h,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function bm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Tm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Am(i,t,e){const n=new WeakMap,s=new Be;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;d===!0&&(w=1),_===!0&&(w=2),S===!0&&(w=3);let x=o.attributes.position.count*w,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*T*4*f),C=new kh(E,x,T,f);C.type=Ln,C.needsUpdate=!0;const v=w*4;for(let P=0;P<f;P++){const O=m[P],z=p[P],V=y[P],F=x*T*4*P;for(let G=0;G<O.count;G++){const Z=G*v;d===!0&&(s.fromBufferAttribute(O,G),E[F+Z+0]=s.x,E[F+Z+1]=s.y,E[F+Z+2]=s.z,E[F+Z+3]=0),_===!0&&(s.fromBufferAttribute(z,G),E[F+Z+4]=s.x,E[F+Z+5]=s.y,E[F+Z+6]=s.z,E[F+Z+7]=0),S===!0&&(s.fromBufferAttribute(V,G),E[F+Z+8]=s.x,E[F+Z+9]=s.y,E[F+Z+10]=s.z,E[F+Z+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new vt(x,T)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Rm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Cm={[bh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Ah]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function Pm(i,t,e,n,s,r){const a=new Dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Xe;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));const u=new vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _n(c,u),h=new Ml(-1,1,1,-1,0,1);let d=null,_=null,S=!1,m,p=null,y=[],w=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let E=0;E<y.length;E++){const C=y[E];C.setSize&&C.setSize(x,T)}},this.setEffects=function(x){y=x,w=y.length>0&&y[0].isRenderPass===!0;const T=a.width,E=a.height;y.length>0&&o===null&&(o=new Dn(T,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(T,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const v=y[C];v.setSize&&v.setSize(T,E)}},this.begin=function(x,T){if(S||x.toneMapping===zn&&y.length===0)return!1;if(p=T,T!==null){const E=T.width,C=T.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return w===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return w},this.end=function(x,T){x.toneMapping=m,S=!0;let E=a,C=o;for(let v=0;v<y.length;v++){const A=y[v];A.enabled!==!1&&(A.render(x,C,E,T),A.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==x.outputColorSpace||_!==x.toneMapping){d=x.outputColorSpace,_=x.toneMapping,u.defines={},xe.getTransfer(d)===Pe&&(u.defines.SRGB_TRANSFER="");const v=Cm[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(f,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const ou=new tn,jo=new Bs(1,1),lu=new kh,cu=new dd,hu=new qh,Sc=[],yc=[],Ec=new Float32Array(16),wc=new Float32Array(9),bc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),We(e,n)}}function Fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),We(e,n)}}function Om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),We(e,n)}}function Bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jo.compareFunction=e.isReversedDepthBuffer()?dl:ul,r=jo):r=ou,e.setTexture2D(t||r,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hu,s)}function Zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function Km(i){switch(i){case 5126:return Lm;case 35664:return Im;case 35665:return Dm;case 35666:return Nm;case 35674:return Um;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Gm;case 5125:return Hm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Zm}}function Jm(i,t){i.uniform1fv(this.addr,t)}function Qm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function jm(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function ag(i,t){i.uniform3iv(this.addr,t)}function og(i,t){i.uniform4iv(this.addr,t)}function lg(i,t){i.uniform1uiv(this.addr,t)}function cg(i,t){i.uniform2uiv(this.addr,t)}function hg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function dg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=jo:a=ou;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function fg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function pg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hu,r[a])}function mg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lu,r[a])}function gg(i){switch(i){case 5126:return Jm;case 35664:return Qm;case 35665:return jm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class _g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}}class vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}}class xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function Mg(i,t,e){const n=i.name,s=n.length;for(Ba.lastIndex=0;;){const r=Ba.exec(n),a=Ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tc(e,c===void 0?new _g(o,i,t):new vg(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new xg(o),Tc(e,f)),e=f}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Mg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sg=37297;let yg=0;function Eg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Rc=new re;function wg(i){xe._getMatrix(Rc,xe.workingColorSpace,i);const t=`mat3( ${Rc.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Eg(i.getShaderSource(t),o)}else return r}function bg(i,t){const e=wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Tg={[bh]:"Linear",[Th]:"Reinhard",[Ah]:"Cineon",[Rh]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ch]:"Custom"};function Ag(i,t){const e=Tg[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new I;function Rg(){xe.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Pg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function Pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Ig,Ng)}const Dg=new Map;function Ng(i,t){let e=ce[t];if(e===void 0){const n=Dg.get(t);if(n!==void 0)e=ce[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tl(e)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(Ug,Fg)}function Fg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Og={[Fr]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function Bg(i){return Og[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zg={[bi]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function kg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gg={[ss]:"ENVMAP_MODE_REFRACTION"};function Hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vg={[wh]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function Wg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Xg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bg(e),c=kg(e),u=Hg(e),f=Wg(e),h=Xg(e),d=Cg(e),_=Pg(r),S=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?ce.tonemapping_pars_fragment:"",e.toneMapping!==zn?Ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=tl(a),a=Pc(a,e),a=Lc(a,e),o=tl(o),o=Pc(o,e),o=Lc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+a,x=y+p+o,T=Ac(s,s.VERTEX_SHADER,w),E=Ac(s,s.FRAGMENT_SHADER,x);s.attachShader(S,T),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(O){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(E)||"",G=z.trim(),Z=V.trim(),Y=F.trim();let ct=!0,$=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,T,E);else{const j=Cc(s,T,"vertex"),rt=Cc(s,E,"fragment");Ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+j+`
`+rt)}else G!==""?ne("WebGLProgram: Program Info Log:",G):(Z===""||Y==="")&&($=!1);$&&(O.diagnostics={runnable:ct,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(T),s.deleteShader(E),v=new Gr(s,S),A=Lg(s,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,Sg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}let Yg=0;class $g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zg(t),e.set(t,n)),n}}class Zg{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}}function Kg(i){return i===Ti||i===Vr||i===Wr}function Jg(i,t,e,n,s,r){const a=new Gh,o=new $g,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,P,O,z,V){const F=O.fog,G=z.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ct=t.get(v.envMap||Z,Y),$=ct&&ct.mapping===ta?ct.image.height:null,j=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&ne("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,kt=rt!==void 0?rt.length:0;let Ft=0;G.morphAttributes.position!==void 0&&(Ft=1),G.morphAttributes.normal!==void 0&&(Ft=2),G.morphAttributes.color!==void 0&&(Ft=3);let de,ie,me,Q;if(j){const Ce=On[j];de=Ce.vertexShader,ie=Ce.fragmentShader}else{de=v.vertexShader,ie=v.fragmentShader;const Ce=o.getVertexShaderStage(v),oe=o.getFragmentShaderStage(v);o.update(v,Ce,oe),me=Ce.id,Q=oe.id}const st=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Wt=z.isInstancedMesh===!0,Ut=z.isBatchedMesh===!0,$t=!!v.map,Se=!!v.matcap,it=!!ct,ht=!!v.aoMap,ut=!!v.lightMap,dt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,qt=!!v.displacementMap,Vt=!!v.emissiveMap,Zt=!!v.metalnessMap,jt=!!v.roughnessMap,D=v.anisotropy>0,we=v.clearcoat>0,ae=v.dispersion>0,b=v.retroreflectivity>0,g=v.iridescence>0,k=v.sheen>0,W=v.transmission>0,K=D&&!!v.anisotropyMap,pt=we&&!!v.clearcoatMap,ft=we&&!!v.clearcoatNormalMap,J=we&&!!v.clearcoatRoughnessMap,nt=g&&!!v.iridescenceMap,St=g&&!!v.iridescenceThicknessMap,Gt=k&&!!v.sheenColorMap,At=k&&!!v.sheenRoughnessMap,wt=!!v.specularMap,Ht=!!v.specularColorMap,Xt=!!v.specularIntensityMap,Qt=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,Mt=!!v.gradientMap,tt=!!v.alphaMap,bt=v.alphaTest>0,Pt=!!v.alphaHash,at=!!v.extensions;let zt=zn;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(zt=i.toneMapping);const Ot={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:de,fragmentShader:ie,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Ut,batchingColor:Ut&&z._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&z.instanceColor!==null,instancingMorph:Wt&&z.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:Se,envMap:it,envMapMode:it&&ct.mapping,envMapCubeUVHeight:$,aoMap:ht,lightMap:ut,bumpMap:dt,normalMap:xt,displacementMap:qt,emissiveMap:Vt,normalMapObjectSpace:xt&&v.normalMapType===Yu,normalMapTangentSpace:xt&&v.normalMapType===$o,packedNormalMap:xt&&v.normalMapType===$o&&Kg(v.normalMap.format),metalnessMap:Zt,roughnessMap:jt,anisotropy:D,anisotropyMap:K,clearcoat:we,clearcoatMap:pt,clearcoatNormalMap:ft,clearcoatRoughnessMap:J,dispersion:ae,retroreflection:b,iridescence:g,iridescenceMap:nt,iridescenceThicknessMap:St,sheen:k,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:wt,specularColorMap:Ht,specularIntensityMap:Xt,transmission:W,transmissionMap:Qt,thicknessMap:U,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===yi&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:bt,alphaHash:Pt,combine:v.combine,mapUv:$t&&_(v.map.channel),aoMapUv:ht&&_(v.aoMap.channel),lightMapUv:ut&&_(v.lightMap.channel),bumpMapUv:dt&&_(v.bumpMap.channel),normalMapUv:xt&&_(v.normalMap.channel),displacementMapUv:qt&&_(v.displacementMap.channel),emissiveMapUv:Vt&&_(v.emissiveMap.channel),metalnessMapUv:Zt&&_(v.metalnessMap.channel),roughnessMapUv:jt&&_(v.roughnessMap.channel),anisotropyMapUv:K&&_(v.anisotropyMap.channel),clearcoatMapUv:pt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(v.sheenRoughnessMap.channel),specularMapUv:wt&&_(v.specularMap.channel),specularColorMapUv:Ht&&_(v.specularColorMap.channel),specularIntensityMapUv:Xt&&_(v.specularIntensityMap.channel),transmissionMapUv:Qt&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:tt&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||D),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&($t||tt),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Ft,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&xe.getTransfer(v.map.colorSpace)===Pe,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&xe.getTransfer(v.emissiveMap.colorSpace)===Pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(A,v),y(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function y(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){const A=d[v.type];let P;if(A){const O=On[A];P=mf.clone(O.uniforms)}else P=v.uniforms;return P}function x(v,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new qg(i,A,v,s),c.push(P),u.set(A,P)),P}function T(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:C}}function Qg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,S,m,p){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},i[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=_,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=m,y.group=p),t++,y}function l(h,d,_,S,m,p,y){y.reversedDepth===!0&&(m=-m);const w=o(h,d,_,S,m,p);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):e.push(w)}function c(h,d,_,S,m,p){const y=o(h,d,_,S,m,p);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||jg),n.length>1&&n.sort(d||Nc),s.length>1&&s.sort(d||Nc)}function f(){for(let h=t,d=i.length;h<d;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function t_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Uc,i.set(n,[a])):s>=r.length?(a=new Uc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function n_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){const t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Me,a=new Me;function o(c){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,_=0,S=0,m=0,p=0,y=0,w=0,x=0,T=0,E=0,C=0,v=0,A=0,P=0;c.sort(s_);for(let z=0,V=c.length;z<V;z++){const F=c[z],G=F.color,Z=F.intensity,Y=F.distance;let ct=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ti?ct=F.shadow.map.texture:ct=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=G.r*Z,f+=G.g*Z,h+=G.b*Z;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],Z);P++}else if(F.isSunLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,rt=e.get(F);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=rt,n.sunShadowMap[_]=ct;const kt=j.getViewportCount();for(let Ft=0;Ft<kt;Ft++)n.sunShadowMatrix[S+Ft]=j.getMatrix(Ft),n.sunShadowCascade[S+Ft]=j._cascadeData[Ft];S+=kt,_++}n.sun[d]=$,d++}else if(F.isDirectionalLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,rt=e.get(F);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=F.shadow.matrix,T++}n.directional[m]=$,m++}else if(F.isSpotLight){const $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(G).multiplyScalar(Z),$.distance=Y,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[y]=$;const j=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,j.updateMatrices(F),F.castShadow&&A++),n.spotLightMatrix[y]=j.matrix,F.castShadow){const rt=e.get(F);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=ct,C++}y++}else if(F.isRectAreaLight){const $=t.get(F);$.color.copy(G).multiplyScalar(Z),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=$,w++}else if(F.isPointLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const j=F.shadow,rt=e.get(F);rt.shadowIntensity=j.intensity,rt.shadowBias=j.bias,rt.shadowNormalBias=j.normalBias,rt.shadowRadius=j.radius,rt.shadowMapSize=j.mapSize,rt.shadowCameraNear=j.camera.near,rt.shadowCameraFar=j.camera.far,n.pointShadow[p]=rt,n.pointShadowMap[p]=ct,n.pointShadowMatrix[p]=F.shadow.matrix,E++}n.point[p]=$,p++}else if(F.isHemisphereLight){const $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(Z),$.groundColor.copy(F.groundColor).multiplyScalar(Z),n.hemi[x]=$,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const O=n.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==y||O.rectAreaLength!==w||O.hemiLength!==x||O.numSunShadows!==_||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==C||O.numSpotMaps!==v||O.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,O.sunLength=d,O.directionalLength=m,O.pointLength=p,O.spotLength=y,O.rectAreaLength=w,O.hemiLength=x,O.numSunShadows=_,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=C,O.numSpotMaps=v,O.numLightProbes=P,n.version=i_++)}function l(c,u){let f=0,h=0,d=0,_=0,S=0,m=0;const p=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const x=c[y];if(x.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(x.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const T=n.rectArea[S];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Fc(i){const t=new r_(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function a_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Fc(i),t.set(s,[o])):r>=a.length?(o=new Fc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`,c_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],h_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Oc=new Me,Ms=new I,za=new I;function u_(i,t,e){let n=new pl;const s=new vt,r=new vt,a=new Be,o=new Mf,l=new Sf,c={},u=e.maxTextureSize,f={[wi]:ln,[ln]:wi,[mn]:mn},h=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Xe;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new _n(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let p=this.type;this.render=function(E,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===wu&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fr);const A=i.getRenderTarget(),P=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Qn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=p!==this.type;V&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(G=>G.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,G=E.length;F<G;F++){const Z=E[F],Y=Z.shadow;if(Y===void 0){ne("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ct=Y.getFrameExtents();s.multiply(ct),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,Y.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ts){if(Z.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Dn(s.x,s.y,{format:Ti,type:Gn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new Bs(s.x,s.y,Ln),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=ti,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=$e,Y.map.depthTexture.magFilter=$e}else Z.isPointLight?(Y.map=new au(s.x),Y.map.depthTexture=new Id(s.x,kn)):(Y.map=new Dn(s.x,s.y),Y.map.depthTexture=new Bs(s.x,s.y,kn)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=ti,this.type===Fr?(Y.map.depthTexture.compareFunction=$?dl:ul,Y.map.depthTexture.minFilter=Ze,Y.map.depthTexture.magFilter=Ze):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=$e,Y.map.depthTexture.magFilter=$e);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Z.isPointLight!==!0&&Y.updateMatrices(Z,v);for(let rt=0;rt<j;rt++){const kt=Y.getCamera(rt);if(Z.isPointLight){const Ft=Y.camera,de=Y.matrix,ie=Z.distance||Ft.far;ie!==Ft.far&&(Ft.far=ie,Ft.updateProjectionMatrix()),Ms.setFromMatrixPosition(Z.matrixWorld),Ft.position.copy(Ms),za.copy(Ft.position),za.add(c_[rt]),Ft.up.copy(h_[rt]),Ft.lookAt(za),Ft.updateMatrixWorld(),de.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Oc.multiplyMatrices(Ft.projectionMatrix,Ft.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Oc,Ft.coordinateSystem,Ft.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(Y.map),i.clear());const Ft=Y.getViewport(rt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),z.viewport(a)}n=Y.getFrustum(rt),x(C,v,kt,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ts&&y(Y,v),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,O)};function y(E,C){const v=t.update(S);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Dn(s.x,s.y,{format:Ti,type:Gn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,v,d,S,null)}function w(E,C,v,A){let P=null;const O=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)P=O;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=P.uuid,V=C.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let G=F[V];G===void 0&&(G=P.clone(),F[V]=G,C.addEventListener("dispose",T)),P=G}if(P.visible=C.visible,P.wireframe=C.wireframe,A===Ts?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const z=i.properties.get(P);z.light=v}return P}function x(E,C,v,A,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Ts)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const V=t.update(E),F=E.material;if(Array.isArray(F)){const G=V.groups;for(let Z=0,Y=G.length;Z<Y;Z++){const ct=G[Z],$=F[ct.materialIndex];if($&&$.visible){const j=w(E,$,A,P);E.onBeforeShadow(i,E,C,v,V,j,ct),i.renderBufferDirect(v,null,V,j,E,ct),E.onAfterShadow(i,E,C,v,V,j,ct)}}}else if(F.visible){const G=w(E,F,A,P);E.onBeforeShadow(i,E,C,v,V,G,null),i.renderBufferDirect(v,null,V,G,E,null),E.onAfterShadow(i,E,C,v,V,G,null)}}const z=E.children;for(let V=0,F=z.length;V<F;V++)x(z[V],C,v,A,P)}function T(E){E.target.removeEventListener("dispose",T);for(const v in c){const A=c[v],P=E.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function d_(i,t){function e(){let U=!1;const Mt=new Be;let tt=null;const bt=new Be(0,0,0,0);return{setMask:function(Pt){tt!==Pt&&!U&&(i.colorMask(Pt,Pt,Pt,Pt),tt=Pt)},setLocked:function(Pt){U=Pt},setClear:function(Pt,at,zt,Ot,Ce){Ce===!0&&(Pt*=Ot,at*=Ot,zt*=Ot),Mt.set(Pt,at,zt,Ot),bt.equals(Mt)===!1&&(i.clearColor(Pt,at,zt,Ot),bt.copy(Mt))},reset:function(){U=!1,tt=null,bt.set(-1,0,0,0)}}}function n(){let U=!1,Mt=!1,tt=null,bt=null,Pt=null;return{setReversed:function(at){if(Mt!==at){const zt=t.get("EXT_clip_control");at?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Mt=at;const Ot=Pt;Pt=null,this.setClear(Ot)}},getReversed:function(){return Mt},setTest:function(at){at?st(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(at){tt!==at&&!U&&(i.depthMask(at),tt=at)},setFunc:function(at){if(Mt&&(at=rd[at]),bt!==at){switch(at){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=at}},setLocked:function(at){U=at},setClear:function(at){Pt!==at&&(Pt=at,Mt&&(at=1-at),i.clearDepth(at))},reset:function(){U=!1,tt=null,bt=null,Pt=null,Mt=!1}}}function s(){let U=!1,Mt=null,tt=null,bt=null,Pt=null,at=null,zt=null,Ot=null,Ce=null;return{setTest:function(oe){U||(oe?st(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(oe){Mt!==oe&&!U&&(i.stencilMask(oe),Mt=oe)},setFunc:function(oe,rn,cn){(tt!==oe||bt!==rn||Pt!==cn)&&(i.stencilFunc(oe,rn,cn),tt=oe,bt=rn,Pt=cn)},setOp:function(oe,rn,cn){(at!==oe||zt!==rn||Ot!==cn)&&(i.stencilOp(oe,rn,cn),at=oe,zt=rn,Ot=cn)},setLocked:function(oe){U=oe},setClear:function(oe){Ce!==oe&&(i.clearStencil(oe),Ce=oe)},reset:function(){U=!1,Mt=null,tt=null,bt=null,Pt=null,at=null,zt=null,Ot=null,Ce=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],S=null,m=!1,p=null,y=null,w=null,x=null,T=null,E=null,C=null,v=new Kt(0,0,0),A=0,P=!1,O=null,z=null,V=null,F=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ct=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=ct>=1):$.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=ct>=2);let j=null,rt={};const kt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),de=new Be().fromArray(kt),ie=new Be().fromArray(Ft);function me(U,Mt,tt,bt){const Pt=new Uint8Array(4),at=i.createTexture();i.bindTexture(U,at),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<tt;zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Mt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return at}const Q={};Q[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Ds),dt(!1),xt(Nl),st(i.CULL_FACE),ht(Qn);function st(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ct(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Wt(U,Mt){return h[U]!==Mt?(i.bindFramebuffer(U,Mt),h[U]=Mt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ut(U,Mt){let tt=_,bt=!1;if(U){tt=d.get(Mt),tt===void 0&&(tt=[],d.set(Mt,tt));const Pt=U.textures;if(tt.length!==Pt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,zt=Pt.length;at<zt;at++)tt[at]=i.COLOR_ATTACHMENT0+at;tt.length=Pt.length,bt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(tt)}function $t(U){return S!==U?(i.useProgram(U),S=U,!0):!1}const Se={[Ji]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};Se[Ru]=i.MIN,Se[Cu]=i.MAX;const it={[Pu]:i.ZERO,[Lu]:i.ONE,[Iu]:i.SRC_COLOR,[yh]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Eh]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(U,Mt,tt,bt,Pt,at,zt,Ot,Ce,oe){if(U===Qn){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),U!==bu){if(U!==p||oe!==P){if((y!==Ji||T!==Ji)&&(i.blendEquation(i.FUNC_ADD),y=Ji,T=Ji),oe)switch(U){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ee("WebGLState: Invalid blending: ",U);break}else switch(U){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",U);break}w=null,x=null,E=null,C=null,v.set(0,0,0),A=0,p=U,P=oe}return}Pt=Pt||Mt,at=at||tt,zt=zt||bt,(Mt!==y||Pt!==T)&&(i.blendEquationSeparate(Se[Mt],Se[Pt]),y=Mt,T=Pt),(tt!==w||bt!==x||at!==E||zt!==C)&&(i.blendFuncSeparate(it[tt],it[bt],it[at],it[zt]),w=tt,x=bt,E=at,C=zt),(Ot.equals(v)===!1||Ce!==A)&&(i.blendColor(Ot.r,Ot.g,Ot.b,Ce),v.copy(Ot),A=Ce),p=U,P=!1}function ut(U,Mt){U.side===mn?Ct(i.CULL_FACE):st(i.CULL_FACE);let tt=U.side===ln;Mt&&(tt=!tt),dt(tt),U.blending===yi&&U.transparent===!1?ht(Qn):ht(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const bt=U.stencilWrite;o.setTest(bt),bt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function xt(U){U!==yu?(st(i.CULL_FACE),U!==z&&(U===Nl?i.cullFace(i.BACK):U===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),z=U}function qt(U){U!==V&&(Y&&i.lineWidth(U),V=U)}function Vt(U,Mt,tt){U?(st(i.POLYGON_OFFSET_FILL),(F!==Mt||G!==tt)&&(F=Mt,G=tt,a.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,tt))):Ct(i.POLYGON_OFFSET_FILL)}function Zt(U){U?st(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function jt(U){U===void 0&&(U=i.TEXTURE0+Z-1),j!==U&&(i.activeTexture(U),j=U)}function D(U,Mt,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+Z-1:tt=j);let bt=rt[tt];bt===void 0&&(bt={type:void 0,texture:void 0},rt[tt]=bt),(bt.type!==U||bt.texture!==Mt)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(U,Mt||Q[U]),bt.type=U,bt.texture=Mt)}function we(){const U=rt[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{i.compressedTexImage2D(...arguments)}catch(U){Ee("WebGLState:",U)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(U){Ee("WebGLState:",U)}}function g(){try{i.texSubImage2D(...arguments)}catch(U){Ee("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){Ee("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ee("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ee("WebGLState:",U)}}function pt(){try{i.texStorage2D(...arguments)}catch(U){Ee("WebGLState:",U)}}function ft(){try{i.texStorage3D(...arguments)}catch(U){Ee("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){Ee("WebGLState:",U)}}function nt(){try{i.texImage3D(...arguments)}catch(U){Ee("WebGLState:",U)}}function St(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function Gt(U,Mt){f[U]!==Mt&&(i.pixelStorei(U,Mt),f[U]=Mt)}function At(U){de.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),de.copy(U))}function wt(U){ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function Ht(U,Mt){let tt=c.get(Mt);tt===void 0&&(tt=new WeakMap,c.set(Mt,tt));let bt=tt.get(U);bt===void 0&&(bt=i.getUniformBlockIndex(Mt,U.name),tt.set(U,bt))}function Xt(U,Mt){const bt=c.get(Mt).get(U);l.get(Mt)!==bt&&(i.uniformBlockBinding(Mt,bt,U.__bindingPointIndex),l.set(Mt,bt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,rt={},h={},d=new WeakMap,_=[],S=null,m=!1,p=null,y=null,w=null,x=null,T=null,E=null,C=null,v=new Kt(0,0,0),A=0,P=!1,O=null,z=null,V=null,F=null,G=null,de.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Ct,bindFramebuffer:Wt,drawBuffers:Ut,useProgram:$t,setBlending:ht,setMaterial:ut,setFlipSided:dt,setCullFace:xt,setLineWidth:qt,setPolygonOffset:Vt,setScissorTest:Zt,activeTexture:jt,bindTexture:D,unbindTexture:we,compressedTexImage2D:ae,compressedTexImage3D:b,texImage2D:J,texImage3D:nt,pixelStorei:Gt,getParameter:St,updateUBOMapping:Ht,uniformBlockBinding:Xt,texStorage2D:pt,texStorage3D:ft,texSubImage2D:g,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:At,viewport:wt,reset:Qt}}function f_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,g){return _?new OffscreenCanvas(b,g):Yr("canvas")}function m(b,g,k){let W=1;const K=ae(b);if((K.width>k||K.height>k)&&(W=k/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const pt=Math.floor(W*K.width),ft=Math.floor(W*K.height);h===void 0&&(h=S(pt,ft));const J=g?S(pt,ft):h;return J.width=pt,J.height=ft,J.getContext("2d").drawImage(b,0,0,pt,ft),ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+pt+"x"+ft+")."),J}else return"data"in b&&ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function p(b){return b.generateMipmaps}function y(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,g,k,W,K,pt=!1){if(b!==null){if(i[b]!==void 0)return i[b];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ft;W&&(ft=t.get("EXT_texture_norm16"),ft||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&ft&&(J=ft.R16_EXT),k===i.SHORT&&ft&&(J=ft.R16_SNORM_EXT)),g===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),g===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&ft&&(J=ft.RG16_EXT),k===i.SHORT&&ft&&(J=ft.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(k===i.UNSIGNED_SHORT&&ft&&(J=ft.RGB16_EXT),k===i.SHORT&&ft&&(J=ft.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){const nt=pt?qr:xe.getTransfer(K);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=nt===Pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ft&&(J=ft.RGBA16_EXT),k===i.SHORT&&ft&&(J=ft.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function T(b,g){let k;return b?g===null||g===kn||g===Us?k=i.DEPTH24_STENCIL8:g===Ln?k=i.DEPTH32F_STENCIL8:g===Ns&&(k=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===kn||g===Us?k=i.DEPTH_COMPONENT24:g===Ln?k=i.DEPTH_COMPONENT32F:g===Ns&&(k=i.DEPTH_COMPONENT16),k}function E(b,g){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==$e&&b.minFilter!==Ze?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function C(b){const g=b.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(b){const g=b.target;g.removeEventListener("dispose",v),O(g)}function A(b){const g=n.get(b);if(g.__webglInit===void 0)return;const k=b.source,W=d.get(k);if(W){const K=W[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(b),Object.keys(W).length===0&&d.delete(k)}n.remove(b)}function P(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const k=b.source,W=d.get(k);delete W[g.__cacheKey],a.memory.textures--}function O(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let K=0;K<g.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[W][K]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const k=b.textures;for(let W=0,K=k.length;W<K;W++){const pt=n.get(k[W]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(b)}let z=0;function V(){z=0}function F(){return z}function G(b){z=b}function Z(){const b=z;return b>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,b}function Y(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ct(b,g){const k=n.get(b);if(b.isVideoTexture&&D(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const W=b.image;if(W===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(k,b,g);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+g)}function $(b,g){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Ct(k,b,g);return}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+g)}function j(b,g){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Ct(k,b,g);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+g)}function rt(b,g){const k=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&k.__version!==b.version){Wt(k,b,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+g)}const kt={[go]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},Ft={[$e]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},de={[Zu]:i.NEVER,[td]:i.ALWAYS,[Ku]:i.LESS,[ul]:i.LEQUAL,[Ju]:i.EQUAL,[dl]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function ie(b,g){if(g.type===Ln&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ze||g.magFilter===aa||g.magFilter===$s||g.magFilter===Mi||g.minFilter===Ze||g.minFilter===aa||g.minFilter===$s||g.minFilter===Mi)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,kt[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,kt[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,kt[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Ft[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Ft[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===$e||g.minFilter!==$s&&g.minFilter!==Mi||g.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function me(b,g){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",C));const W=g.source;let K=d.get(W);K===void 0&&(K={},d.set(W,K));const pt=Y(g);if(pt!==b.__cacheKey){K[pt]===void 0&&(K[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[pt].usedTimes++;const ft=K[b.__cacheKey];ft!==void 0&&(K[b.__cacheKey].usedTimes--,ft.usedTimes===0&&P(g)),b.__cacheKey=pt,b.__webglTexture=K[pt].texture}return k}function Q(b,g,k){return Math.floor(Math.floor(b/k)/g)}function st(b,g,k,W){const pt=b.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,k,W,g.data);else{pt.sort((Gt,At)=>Gt.start-At.start);let ft=0;for(let Gt=1;Gt<pt.length;Gt++){const At=pt[ft],wt=pt[Gt],Ht=At.start+At.count,Xt=Q(wt.start,g.width,4),Qt=Q(At.start,g.width,4);wt.start<=Ht+1&&Xt===Qt&&Q(wt.start+wt.count-1,g.width,4)===Xt?At.count=Math.max(At.count,wt.start+wt.count-At.start):(++ft,pt[ft]=wt)}pt.length=ft+1;const J=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Gt=0,At=pt.length;Gt<At;Gt++){const wt=pt[Gt],Ht=Math.floor(wt.start/4),Xt=Math.ceil(wt.count/4),Qt=Ht%g.width,U=Math.floor(Ht/g.width),Mt=Xt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Qt,U,Mt,tt,k,W,g.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Ct(b,g,k){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);const K=me(b,g),pt=g.source;e.bindTexture(W,b.__webglTexture,i.TEXTURE0+k);const ft=n.get(pt);if(pt.version!==ft.__version||K===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const tt=xe.getPrimaries(xe.workingColorSpace),bt=g.colorSpace===ui?null:xe.getPrimaries(g.colorSpace),Pt=g.colorSpace===ui||tt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let nt=m(g.image,!1,s.maxTextureSize);nt=we(g,nt);const St=r.convert(g.format,g.colorSpace),Gt=r.convert(g.type);let At=x(g.internalFormat,St,Gt,g.normalized,g.colorSpace,g.isVideoTexture);ie(W,g);let wt;const Ht=g.mipmaps,Xt=g.isVideoTexture!==!0,Qt=ft.__version===void 0||K===!0,U=pt.dataReady,Mt=E(g,nt);if(g.isDepthTexture)At=T(g.format===Si,g.type),Qt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,St,Gt,null));else if(g.isDataTexture)if(Ht.length>0){Xt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,At,Ht[0].width,Ht[0].height);for(let tt=0,bt=Ht.length;tt<bt;tt++)wt=Ht[tt],Xt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,wt.width,wt.height,St,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,tt,At,wt.width,wt.height,0,St,Gt,wt.data);g.generateMipmaps=!1}else Xt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,At,nt.width,nt.height),U&&st(g,nt,St,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,St,Gt,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Xt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,At,Ht[0].width,Ht[0].height,nt.depth);for(let tt=0,bt=Ht.length;tt<bt;tt++)if(wt=Ht[tt],g.format!==In)if(St!==null)if(Xt){if(U)if(g.layerUpdates.size>0){const Pt=mc(wt.width,wt.height,g.format,g.type);for(const at of g.layerUpdates){const zt=wt.data.subarray(at*Pt/wt.data.BYTES_PER_ELEMENT,(at+1)*Pt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,at,wt.width,wt.height,1,St,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,wt.width,wt.height,nt.depth,St,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,At,wt.width,wt.height,nt.depth,0,wt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,wt.width,wt.height,nt.depth,St,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,At,wt.width,wt.height,nt.depth,0,St,Gt,wt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Xt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,At,Ht[0].width,Ht[0].height);for(let tt=0,bt=Ht.length;tt<bt;tt++)wt=Ht[tt],g.format!==In?St!==null?Xt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,At,wt.width,wt.height,0,wt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,wt.width,wt.height,St,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,tt,At,wt.width,wt.height,0,St,Gt,wt.data)}else if(g.isDataArrayTexture)if(Xt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,At,nt.width,nt.height,nt.depth),U)if(g.layerUpdates.size>0){const tt=mc(nt.width,nt.height,g.format,g.type);for(const bt of g.layerUpdates){const Pt=nt.data.subarray(bt*tt/nt.data.BYTES_PER_ELEMENT,(bt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,nt.width,nt.height,1,St,Gt,Pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,Gt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,St,Gt,nt.data);else if(g.isData3DTexture)Xt?(Qt&&e.texStorage3D(i.TEXTURE_3D,Mt,At,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,Gt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,St,Gt,nt.data);else if(g.isFramebufferTexture){if(Qt)if(Xt)e.texStorage2D(i.TEXTURE_2D,Mt,At,nt.width,nt.height);else{let tt=nt.width,bt=nt.height;for(let Pt=0;Pt<Mt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,At,tt,bt,0,St,Gt,null),tt>>=1,bt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),f.add(g),tt.onpaint=bt=>{const Pt=bt.changedElements;for(const at of f)Pt.includes(at.image)&&(at.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const Pt=i.RGBA,at=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,at,zt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Xt&&Qt){const tt=ae(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,At,tt.width,tt.height)}for(let tt=0,bt=Ht.length;tt<bt;tt++)wt=Ht[tt],Xt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,St,Gt,wt):e.texImage2D(i.TEXTURE_2D,tt,At,St,Gt,wt);g.generateMipmaps=!1}else if(Xt){if(Qt){const tt=ae(nt);e.texStorage2D(i.TEXTURE_2D,Mt,At,tt.width,tt.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,nt)}else e.texImage2D(i.TEXTURE_2D,0,At,St,Gt,nt);p(g)&&y(W),ft.__version=pt.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Wt(b,g,k){if(g.image.length!==6)return;const W=me(b,g),K=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const pt=n.get(K);if(K.version!==pt.__version||W===!0){e.activeTexture(i.TEXTURE0+k);const ft=xe.getPrimaries(xe.workingColorSpace),J=g.colorSpace===ui?null:xe.getPrimaries(g.colorSpace),nt=g.colorSpace===ui||ft===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const St=g.isCompressedTexture||g.image[0].isCompressedTexture,Gt=g.image[0]&&g.image[0].isDataTexture,At=[];for(let at=0;at<6;at++)!St&&!Gt?At[at]=m(g.image[at],!0,s.maxCubemapSize):At[at]=Gt?g.image[at].image:g.image[at],At[at]=we(g,At[at]);const wt=At[0],Ht=r.convert(g.format,g.colorSpace),Xt=r.convert(g.type),Qt=x(g.internalFormat,Ht,Xt,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,Mt=pt.__version===void 0||W===!0,tt=K.dataReady;let bt=E(g,wt);ie(i.TEXTURE_CUBE_MAP,g);let Pt;if(St){U&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Qt,wt.width,wt.height);for(let at=0;at<6;at++){Pt=At[at].mipmaps;for(let zt=0;zt<Pt.length;zt++){const Ot=Pt[zt];g.format!==In?Ht!==null?U?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,0,0,Ot.width,Ot.height,Ht,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,Qt,Ot.width,Ot.height,0,Ot.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,0,0,Ot.width,Ot.height,Ht,Xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt,Qt,Ot.width,Ot.height,0,Ht,Xt,Ot.data)}}}else{if(Pt=g.mipmaps,U&&Mt){Pt.length>0&&bt++;const at=ae(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Qt,at.width,at.height)}for(let at=0;at<6;at++)if(Gt){U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,At[at].width,At[at].height,Ht,Xt,At[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,At[at].width,At[at].height,0,Ht,Xt,At[at].data);for(let zt=0;zt<Pt.length;zt++){const Ce=Pt[zt].image[at].image;U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,0,0,Ce.width,Ce.height,Ht,Xt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,Qt,Ce.width,Ce.height,0,Ht,Xt,Ce.data)}}else{U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ht,Xt,At[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,Ht,Xt,At[at]);for(let zt=0;zt<Pt.length;zt++){const Ot=Pt[zt];U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,0,0,Ht,Xt,Ot.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,zt+1,Qt,Ht,Xt,Ot.image[at])}}}p(g)&&y(i.TEXTURE_CUBE_MAP),pt.__version=K.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Ut(b,g,k,W,K,pt){const ft=r.convert(k.format,k.colorSpace),J=r.convert(k.type),nt=x(k.internalFormat,ft,J,k.normalized,k.colorSpace),St=n.get(g),Gt=n.get(k);if(Gt.__renderTarget=g,!St.__hasExternalTextures){const At=Math.max(1,g.width>>pt),wt=Math.max(1,g.height>>pt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,pt,nt,At,wt,g.depth,0,ft,J,null):e.texImage2D(K,pt,nt,At,wt,0,ft,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),jt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,Gt.__webglTexture,0,Zt(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,Gt.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(b,g,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const W=g.depthTexture,K=W&&W.isDepthTexture?W.type:null,pt=T(g.stencilBuffer,K),ft=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(g),pt,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(g),pt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,pt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,b)}else{const W=g.textures;for(let K=0;K<W.length;K++){const pt=W[K],ft=r.convert(pt.format,pt.colorSpace),J=r.convert(pt.type),nt=x(pt.internalFormat,ft,J,pt.normalized,pt.colorSpace);jt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(g),nt,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(g),nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,nt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(b,g,k){const W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ie(i.TEXTURE_CUBE_MAP,g.depthTexture);const St=r.convert(g.depthTexture.format),Gt=r.convert(g.depthTexture.type);let At;g.depthTexture.format===ti?At=i.DEPTH_COMPONENT24:g.depthTexture.format===Si&&(At=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,g.width,g.height,0,St,Gt,null)}}else ct(g.depthTexture,0);const pt=K.__webglTexture,ft=Zt(g),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,nt=g.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===ti)jt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,J,pt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,J,pt,0);else if(g.depthTexture.format===Si)jt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,J,pt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,J,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(b){const g=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=W}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Se(g.__webglFramebuffer[W],b,W);else{const W=b.texture.mipmaps;W&&W.length>0?Se(g.__webglFramebuffer[0],b,0):Se(g.__webglFramebuffer,b,0)}else if(k){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),$t(g.__webglDepthbuffer[W],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,pt)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),$t(g.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(b,g,k){const W=n.get(b);g!==void 0&&Ut(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&it(b)}function ut(b){const g=b.texture,k=n.get(b),W=n.get(g);b.addEventListener("dispose",v);const K=b.textures,pt=b.isWebGLCubeRenderTarget===!0,ft=K.length>1;if(ft||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),pt){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let nt=0;nt<g.mipmaps.length;nt++)k.__webglFramebuffer[J][nt]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ft)for(let J=0,nt=K.length;J<nt;J++){const St=n.get(K[J]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&jt(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const nt=K[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const St=r.convert(nt.format,nt.colorSpace),Gt=r.convert(nt.type),At=x(nt.internalFormat,St,Gt,nt.normalized,nt.colorSpace,b.isXRRenderTarget===!0),wt=Zt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,At,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ie(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)Ut(k.__webglFramebuffer[J][nt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else Ut(k.__webglFramebuffer[J],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(g)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let J=0,nt=K.length;J<nt;J++){const St=K[J],Gt=n.get(St);let At=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(At=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),ie(At,St),Ut(k.__webglFramebuffer,b,St,i.COLOR_ATTACHMENT0+J,At,0),p(St)&&y(At)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),ie(J,g),g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)Ut(k.__webglFramebuffer[nt],b,g,i.COLOR_ATTACHMENT0,J,nt);else Ut(k.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,J,0);p(g)&&y(J),e.unbindTexture()}b.depthBuffer&&it(b)}function dt(b){const g=b.textures;for(let k=0,W=g.length;k<W;k++){const K=g[k];if(p(K)){const pt=w(b),ft=n.get(K).__webglTexture;e.bindTexture(pt,ft),y(pt),e.unbindTexture()}}}const xt=[],qt=[];function Vt(b){if(b.samples>0){if(jt(b)===!1){const g=b.textures,k=b.width,W=b.height;let K=i.COLOR_BUFFER_BIT;const pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(b),J=g.length>1;if(J)for(let St=0;St<g.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const nt=b.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let St=0;St<g.length;St++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);const Gt=n.get(g[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,K,i.NEAREST),l===!0&&(xt.length=0,qt.length=0,xt.push(i.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(xt.push(pt),qt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let St=0;St<g.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);const Gt=n.get(g[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Zt(b){return Math.min(s.maxSamples,b.samples)}function jt(b){const g=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(b){const g=a.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function we(b,g){const k=b.colorSpace,W=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Xr&&k!==ui&&(xe.getTransfer(k)===Pe?(W!==In||K!==gn)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",k)),g}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=F,this.setTextureUnits=G,this.setTexture2D=ct,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=rt,this.rebindTextures=ht,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function p_(i,t){function e(n,s=ui){let r;const a=xe.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===In)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===ol)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(a===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===xo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Eo||n===wo||n===bo||n===To||n===Vr||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Eo)return a===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vr)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Vo||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return a===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Wr||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _n(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends Ri{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const S=typeof XRWebGLBinding<"u",m=new __,p={},y=e.getContextAttributes();let w=null,x=null;const T=[],E=[],C=new vt;let v=null,A=null;const P=new Cn;P.viewport=new Be;const O=new Cn;O.viewport=new Be;const z=[P,O],V=new Tf;let F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=T[Q];return st===void 0&&(st=new ma,T[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=T[Q];return st===void 0&&(st=new ma,T[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=T[Q];return st===void 0&&(st=new ma,T[Q]=st),st.getHandSpace()};function Z(Q){const st=E.indexOf(Q.inputSource);if(st===-1)return;const Ct=T[st];Ct!==void 0&&(Ct.update(Q.inputSource,Q.frame,c||a),Ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ct);for(let Q=0;Q<T.length;Q++){const st=E[Q];st!==null&&(E[Q]=null,T[Q].disconnect(st))}F=null,G=null,m.reset();for(const Q in p)delete p[Q];if(t.setRenderTarget(w),d=null,h=null,f=null,s=null,x=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),A!==null){const Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Wt=null,Ut=null;y.depth&&(Ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=y.stencil?Si:ti,Wt=y.stencil?Us:kn);const $t={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer($t),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Dn(h.textureWidth,h.textureHeight,{format:In,type:gn,depthTexture:new Bs(h.textureWidth,h.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Dn(d.framebufferWidth,d.framebufferHeight,{format:In,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(Q){for(let st=0;st<Q.removed.length;st++){const Ct=Q.removed[st],Wt=E.indexOf(Ct);Wt>=0&&(E[Wt]=null,T[Wt].disconnect(Ct))}for(let st=0;st<Q.added.length;st++){const Ct=Q.added[st];let Wt=E.indexOf(Ct);if(Wt===-1){for(let $t=0;$t<T.length;$t++)if($t>=E.length){E.push(Ct),Wt=$t;break}else if(E[$t]===null){E[$t]=Ct,Wt=$t;break}if(Wt===-1)break}const Ut=T[Wt];Ut&&Ut.connect(Ct)}}const $=new I,j=new I;function rt(Q,st,Ct){$.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(Ct.matrixWorld);const Wt=$.distanceTo(j),Ut=st.projectionMatrix.elements,$t=Ct.projectionMatrix.elements,Se=Ut[14]/(Ut[10]-1),it=Ut[14]/(Ut[10]+1),ht=(Ut[9]+1)/Ut[5],ut=(Ut[9]-1)/Ut[5],dt=(Ut[8]-1)/Ut[0],xt=($t[8]+1)/$t[0],qt=Se*dt,Vt=Se*xt,Zt=Wt/(-dt+xt),jt=Zt*-dt;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(jt),Q.translateZ(Zt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ut[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const D=Se+Zt,we=it+Zt,ae=qt-jt,b=Vt+(Wt-jt),g=ht*it/we*D,k=ut*it/we*D;Q.projectionMatrix.makePerspective(ae,b,g,k,D,we),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function kt(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let st=Q.near,Ct=Q.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),V.near=O.near=P.near=st,V.far=O.far=P.far=Ct,(F!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),F=V.near,G=V.far),V.layers.mask=Q.layers.mask|6,P.layers.mask=V.layers.mask&-5,O.layers.mask=V.layers.mask&-3;const Wt=Q.parent,Ut=V.cameras;kt(V,Wt);for(let $t=0;$t<Ut.length;$t++)kt(Ut[$t],Wt);Ut.length===2?rt(V,P,O):V.projectionMatrix.copy(P.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),Ft(Q,V,Wt)};function Ft(Q,st,Ct){Ct===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(Ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Zo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Q){return p[Q]};let de=null;function ie(Q,st){if(u=st.getViewerPose(c||a),_=st,u!==null){const Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Wt=!1;Ct.length!==V.cameras.length&&(V.cameras.length=0,Wt=!0);for(let it=0;it<Ct.length;it++){const ht=Ct[it];let ut=null;if(d!==null)ut=d.getViewport(ht);else{const xt=f.getViewSubImage(h,ht);ut=xt.viewport,it===0&&(t.setRenderTargetTextures(x,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(x))}let dt=z[it];dt===void 0&&(dt=new Cn,dt.layers.enable(it),dt.viewport=new Be,z[it]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),it===0&&(V.matrix.copy(dt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Wt===!0&&V.cameras.push(dt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const it=f.getDepthInformation(Ct[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(Ut&&Ut.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let it=0;it<Ct.length;it++){const ht=Ct[it].camera;if(ht){let ut=p[ht];ut||(ut=new Yh,p[ht]=ut);const dt=f.getCameraImage(ht);ut.sourceTexture=dt}}}}for(let Ct=0;Ct<T.length;Ct++){const Wt=E[Ct],Ut=T[Ct];Wt!==null&&Ut!==void 0&&Ut.update(Wt,st,c||a)}de&&de(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const me=new su;me.setAnimationLoop(ie),this.setAnimationLoop=function(Q){de=Q},this.dispose=function(){}}}const x_=new Me,uu=new re;uu.set(-1,0,0,0,1,0,0,0,1);function M_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),w=y.envMap,x=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const E=T.program;n.uniformBlockBinding(x,E)}function c(x,T){let E=s[x.id];E===void 0&&(m(x),E=u(x),s[x.id]=E,x.addEventListener("dispose",y));const C=T.program;n.updateUBOMapping(x,C);const v=t.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const T=f();x.__bindingPointIndex=T;const E=i.createBuffer(),C=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const T=s[x.id],E=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,A=E.length;v<A;v++){const P=E[v];if(Array.isArray(P))for(let O=0,z=P.length;O<z;O++)d(P[O],v,O,C);else d(P,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,T,E,C){if(S(x,T,E,C)===!0){const v=x.__offset,A=x.value;if(Array.isArray(A)){let P=0;for(let O=0;O<A.length;O++){const z=A[O],V=p(z);_(z,x.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function _(x,T,E){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,E)}function S(x,T,E,C){const v=x.value,A=T+"_"+E;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{const P=C[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(x){const T=x.uniforms;let E=0;const C=16;for(let A=0,P=T.length;A<P;A++){const O=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,V=O.length;z<V;z++){const F=O[z],G=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,Y=G.length;Z<Y;Z++){const ct=G[Z],$=p(ct),j=E%C,rt=j%$.boundary,kt=j+rt;E+=rt,kt!==0&&C-kt<$.storage&&(E+=C-kt),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=$.storage}}}const v=E%C;return v>0&&(E+=C-v),x.__size=E,x.__cache={},this}function p(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",x),T}function y(x){const T=x.target;T.removeEventListener("dispose",y);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function E_(){return Un===null&&(Un=new Xh(y_,16,16,Ti,Gn),Un.name="DFG_LUT",Un.minFilter=Ze,Un.magFilter=Ze,Un.wrapS=Kn,Un.wrapT=Kn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class w_{constructor(t={}){const{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=gn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=d,m=new Set([hl,cl,ll]),p=new Set([gn,kn,Ns,Us,rl,al]),y=new Uint32Array(4),w=new Int32Array(4),x=new I;let T=null,E=null;const C=[],v=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let O=!1,z=null,V=null,F=null,G=null;this._outputColorSpace=pn;let Z=0,Y=0,ct=null,$=-1,j=null;const rt=new Be,kt=new Be;let Ft=null;const de=new Kt(0);let ie=0,me=e.width,Q=e.height,st=1,Ct=null,Wt=null;const Ut=new Be(0,0,me,Q),$t=new Be(0,0,me,Q);let Se=!1;const it=new pl;let ht=!1,ut=!1;const dt=new Me,xt=new I,qt=new Be,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function jt(){return ct===null?st:1}let D=n;function we(M,N){return e.getContext(M,N)}let ae,b,g,k,W,K,pt,ft,J,nt,St,Gt,At,wt,Ht,Xt,Qt,U,Mt,tt,bt,Pt,at;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",rn,!1),D===null){const N="webgl2";if(D=we(N,M),D===null)throw we(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(M){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Ee("WebGLRenderer: "+M.message),M}function zt(){ae=new Em(D),ae.init(),bt=new p_(D,ae),b=new fm(D,ae,t,bt),g=new d_(D,ae),b.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),V=D.createFramebuffer(),F=D.createFramebuffer(),G=D.createFramebuffer(),k=new Tm(D),W=new Qg,K=new f_(D,ae,g,W,b,bt,k),pt=new ym(P),ft=new Rf(D),Pt=new um(D,ft),J=new wm(D,ft,k,Pt),nt=new Rm(D,J,ft,Pt,k),U=new Am(D,b,K),Ht=new pm(W),St=new Jg(P,pt,ae,b,Pt,Ht),Gt=new M_(P,W),At=new t_,wt=new a_(ae),Qt=new hm(P,pt,g,nt,_,l),Xt=new u_(P,nt,b),at=new S_(D,k,b,g),Mt=new dm(D,ae,k),tt=new bm(D,ae,k),k.programs=St.programs,P.capabilities=b,P.extensions=ae,P.properties=W,P.renderLists=At,P.shadowMap=Xt,P.state=g,P.info=k}S!==gn&&(A=new Pm(S,e.width,e.height,o,s,r));const Ot=new v_(P,D);this.xr=Ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(M){M!==void 0&&(st=M,this.setSize(me,Q,!1))},this.getSize=function(M){return M.set(me,Q)},this.setSize=function(M,N,q=!0){if(Ot.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}me=M,Q=N,e.width=Math.floor(M*st),e.height=Math.floor(N*st),q===!0&&(e.style.width=M+"px",e.style.height=N+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(me*st,Q*st).floor()},this.setDrawingBufferSize=function(M,N,q){me=M,Q=N,st=q,e.width=Math.floor(M*q),e.height=Math.floor(N*q),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(S===gn){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(rt)},this.getViewport=function(M){return M.copy(Ut)},this.setViewport=function(M,N,q,H){M.isVector4?Ut.set(M.x,M.y,M.z,M.w):Ut.set(M,N,q,H),g.viewport(rt.copy(Ut).multiplyScalar(st).round())},this.getScissor=function(M){return M.copy($t)},this.setScissor=function(M,N,q,H){M.isVector4?$t.set(M.x,M.y,M.z,M.w):$t.set(M,N,q,H),g.scissor(kt.copy($t).multiplyScalar(st).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(M){g.setScissorTest(Se=M)},this.setOpaqueSort=function(M){Ct=M},this.setTransparentSort=function(M){Wt=M},this.getClearColor=function(M){return M.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,q=!0){let H=0;if(M){let R=!1;if(ct!==null){const _t=ct.texture.format;R=m.has(_t)}if(R){const _t=ct.texture.type,It=p.has(_t),mt=Qt.getClearColor(),Tt=Qt.getClearAlpha(),Nt=mt.r,Jt=mt.g,le=mt.b;It?(y[0]=Nt,y[1]=Jt,y[2]=le,y[3]=Tt,D.clearBufferuiv(D.COLOR,0,y)):(w[0]=Nt,w[1]=Jt,w[2]=le,w[3]=Tt,D.clearBufferiv(D.COLOR,0,w))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),Qt.dispose(),At.dispose(),wt.dispose(),W.dispose(),pt.dispose(),nt.dispose(),Pt.dispose(),at.dispose(),St.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Di),Ot.removeEventListener("sessionend",L),B.stop()};function Ce(M){M.preventDefault(),zl("WebGLRenderer: Context Lost."),O=!0}function oe(){zl("WebGLRenderer: Context Restored."),O=!1;const M=k.autoReset,N=Xt.enabled,q=Xt.autoUpdate,H=Xt.needsUpdate,R=Xt.type;zt(),k.autoReset=M,Xt.enabled=N,Xt.autoUpdate=q,Xt.needsUpdate=H,Xt.type=R}function rn(M){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function cn(M){const N=M.target;N.removeEventListener("dispose",cn),Xs(N)}function Xs(M){qs(M),W.remove(M)}function qs(M){const N=W.get(M).programs;N!==void 0&&(N.forEach(function(q){St.releaseProgram(q)}),M.isShaderMaterial&&St.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,q,H,R,_t){N===null&&(N=Vt);const It=R.isMesh&&R.matrixWorld.determinantAffine()<0,mt=Yt(M,N,q,H,R);g.setMaterial(H,It);let Tt=q.index,Nt=1;if(H.wireframe===!0){if(Tt=J.getWireframeAttribute(q),Tt===void 0)return;Nt=2}const Jt=q.drawRange,le=q.attributes.position;let Bt=Jt.start*Nt,_e=(Jt.start+Jt.count)*Nt;_t!==null&&(Bt=Math.max(Bt,_t.start*Nt),_e=Math.min(_e,(_t.start+_t.count)*Nt)),Tt!==null?(Bt=Math.max(Bt,0),_e=Math.min(_e,Tt.count)):le!=null&&(Bt=Math.max(Bt,0),_e=Math.min(_e,le.count));const Ne=_e-Bt;if(Ne<0||Ne===1/0)return;Pt.setup(R,H,mt,q,Tt);let Te,Re=Mt;if(Tt!==null&&(Te=ft.get(Tt),Re=tt,Re.setIndex(Te)),R.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*jt()),Re.setMode(D.LINES)):Re.setMode(D.TRIANGLES);else if(R.isLine){let he=H.linewidth;he===void 0&&(he=1),g.setLineWidth(he*jt()),R.isLineSegments?Re.setMode(D.LINES):R.isLineLoop?Re.setMode(D.LINE_LOOP):Re.setMode(D.LINE_STRIP)}else R.isPoints?Re.setMode(D.POINTS):R.isSprite&&Re.setMode(D.TRIANGLES);if(R.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Re.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const he=R._multiDrawStarts,Rt=R._multiDrawCounts,Ge=R._multiDrawCount,ve=Tt?ft.get(Tt).bytesPerElement:1,en=W.get(H).currentProgram.getUniforms();for(let hn=0;hn<Ge;hn++)en.setValue(D,"_gl_DrawID",hn),Re.render(he[hn]/ve,Rt[hn])}else if(R.isInstancedMesh)Re.renderInstances(Bt,Ne,R.count);else if(q.isInstancedBufferGeometry){const he=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,he);Re.renderInstances(Bt,Ne,Rt)}else Re.render(Bt,Ne)};function us(M,N,q,H){z!==null&&M.isNodeMaterial&&z.setObject(H,M),ht===!0&&Ht.setState(M,q,!1),M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,se(M,N,H),M.side=wi,M.needsUpdate=!0,se(M,N,H),M.side=mn):se(M,N,H)}this.compile=function(M,N,q=null){q===null&&(q=M),z!==null&&z.renderStart(M,N,q),E=wt.get(q),E.init(N),v.push(E),q.traverseVisible(function(R){R.isLight&&R.layers.test(N.layers)&&(E.pushLight(R),R.castShadow&&E.pushShadow(R))}),M!==q&&M.traverseVisible(function(R){R.isLight&&R.layers.test(N.layers)&&(E.pushLight(R),R.castShadow&&E.pushShadow(R))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),ut=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ut),ht===!0&&Ht.setGlobalState(this.clippingPlanes,N),z!==null&&Xt.render(E.state.shadowsArray,q,N);const H=new Set;return M.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const _t=R.material;if(_t)if(Array.isArray(_t))for(let It=0;It<_t.length;It++){const mt=_t[It];us(mt,q,N,R),H.add(mt)}else us(_t,q,N,R),H.add(_t)}),E=v.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(M,N,q=null){const H=this.compile(M,N,q);return new Promise(R=>{function _t(){if(H.forEach(function(It){const Tt=W.get(It).currentProgram;(Tt===void 0||Tt.isReady())&&H.delete(It)}),H.size===0){R(M);return}setTimeout(_t,10)}ae.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ii=null;function Ys(M){Ii&&Ii(M)}function Di(){B.stop()}function L(){B.start()}const B=new su;B.setAnimationLoop(Ys),typeof self<"u"&&B.setContext(self),this.setAnimationLoop=function(M){Ii=M,Ot.setAnimationLoop(M),M===null?B.stop():B.start()},Ot.addEventListener("sessionstart",Di),Ot.addEventListener("sessionend",L),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(M,N);const q=Ot.enabled===!0&&Ot.isPresenting===!0,H=A!==null&&(ct===null||q)&&A.begin(P,ct);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(N),N=Ot.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,N,ct),E=wt.get(M,v.length),E.init(N),E.state.textureUnits=K.getTextureUnits(),v.push(E),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),it.setFromProjectionMatrix(dt,Bn,N.reversedDepth),ut=this.localClippingEnabled,ht=Ht.init(this.clippingPlanes,ut),T=At.get(M,C.length),T.init(),C.push(T),Ot.enabled===!0&&Ot.isPresenting===!0){const It=P.xr.getDepthSensingMesh();It!==null&&X(It,N,-1/0,P.sortObjects)}X(M,N,0,P.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),P.sortObjects===!0&&T.sort(Ct,Wt),Zt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Zt&&Qt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ht.beginShadows();const R=E.state.shadowsArray;if(Xt.render(R,M,N),ht===!0&&Ht.endShadows(),(H&&A.hasRenderPass())===!1){const It=T.opaque,mt=T.transmissive;if(E.setupLights(),N.isArrayCamera){const Tt=N.cameras;if(mt.length>0)for(let Nt=0,Jt=Tt.length;Nt<Jt;Nt++){const le=Tt[Nt];Dt(It,mt,M,le)}Zt&&Qt.render(M);for(let Nt=0,Jt=Tt.length;Nt<Jt;Nt++){const le=Tt[Nt];lt(T,M,le,le.viewport)}}else mt.length>0&&Dt(It,mt,M,N),Zt&&Qt.render(M),lt(T,M,N)}ct!==null&&Y===0&&(K.updateMultisampleRenderTarget(ct),K.updateRenderTargetMipmap(ct)),H&&A.end(P),M.isScene===!0&&M.onAfterRender(P,M,N),Pt.resetDefaultState(),$=-1,j=null,v.pop(),v.length>0?(E=v[v.length-1],K.setTextureUnits(E.state.textureUnits),ht===!0&&Ht.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,z!==null&&z.renderEnd()};function X(M,N,q,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(it)){H&&qt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);const It=nt.update(M),mt=M.material;mt.visible&&T.push(M,It,mt,q,qt.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(it))){const It=nt.update(M),mt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qt.copy(M.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),qt.copy(It.boundingSphere.center)),qt.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(mt)){const Tt=It.groups;for(let Nt=0,Jt=Tt.length;Nt<Jt;Nt++){const le=Tt[Nt],Bt=mt[le.materialIndex];Bt&&Bt.visible&&T.push(M,It,Bt,q,qt.z,le,N)}}else mt.visible&&T.push(M,It,mt,q,qt.z,null,N)}}const _t=M.children;for(let It=0,mt=_t.length;It<mt;It++)X(_t[It],N,q,H)}function lt(M,N,q,H){const{opaque:R,transmissive:_t,transparent:It}=M;E.setupLightsView(q),ht===!0&&Ht.setGlobalState(P.clippingPlanes,q),H&&g.viewport(rt.copy(H)),R.length>0&&gt(R,N,q),_t.length>0&&gt(_t,N,q),It.length>0&&gt(It,N,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Dt(M,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Bt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:Bt?Gn:gn,minFilter:Mi,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const _t=E.state.transmissionRenderTarget[H.id],It=H.viewport||rt;_t.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);const mt=P.getRenderTarget(),Tt=P.getActiveCubeFace(),Nt=P.getActiveMipmapLevel();P.setRenderTarget(_t),P.getClearColor(de),ie=P.getClearAlpha(),ie<1&&P.setClearColor(16777215,.5),P.clear(),Zt&&Qt.render(q);const Jt=P.toneMapping;P.toneMapping=zn;const le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ht===!0&&Ht.setGlobalState(P.clippingPlanes,H),gt(M,q,H),K.updateMultisampleRenderTarget(_t),K.updateRenderTargetMipmap(_t),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let _e=0,Ne=N.length;_e<Ne;_e++){const Te=N[_e],{object:Re,geometry:he,material:Rt,group:Ge}=Te;if(Rt.side===mn&&Re.layers.test(H.layers)){const ve=Rt.side;Rt.side=ln,Rt.needsUpdate=!0,te(Re,q,H,he,Rt,Ge),Rt.side=ve,Rt.needsUpdate=!0,Bt=!0}}Bt===!0&&(K.updateMultisampleRenderTarget(_t),K.updateRenderTargetMipmap(_t))}P.setRenderTarget(mt,Tt,Nt),P.setClearColor(de,ie),le!==void 0&&(H.viewport=le),P.toneMapping=Jt}function gt(M,N,q){const H=N.isScene===!0?N.overrideMaterial:null;for(let R=0,_t=M.length;R<_t;R++){const It=M[R],{object:mt,geometry:Tt,group:Nt}=It;let Jt=It.material;Jt.allowOverride===!0&&H!==null&&(Jt=H),mt.layers.test(q.layers)&&te(mt,N,q,Tt,Jt,Nt)}}function te(M,N,q,H,R,_t){z!==null&&R.isNodeMaterial&&z.setObject(M,R),M.onBeforeRender(P,N,q,H,R,_t),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),R.onBeforeRender(P,N,q,H,M,_t),R.transparent===!0&&R.side===mn&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,P.renderBufferDirect(q,N,H,R,M,_t),R.side=wi,R.needsUpdate=!0,P.renderBufferDirect(q,N,H,R,M,_t),R.side=mn):P.renderBufferDirect(q,N,H,R,M,_t),M.onAfterRender(P,N,q,H,R,_t)}function se(M,N,q){N.isScene!==!0&&(N=Vt);const H=W.get(M),R=E.state.lights,_t=E.state.shadowsArray,It=R.state.version,mt=St.getParameters(M,R.state,_t,N,q,E.state.lightProbeGridArray),Tt=St.getProgramCacheKey(mt);let Nt=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const Jt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=pt.get(M.envMap||H.environment,Jt),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",cn),Nt=new Map,H.programs=Nt);let le=Nt.get(Tt);if(le!==void 0){if(H.currentProgram===le&&H.lightsStateVersion===It)return ge(M,mt),le}else mt.uniforms=St.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,q,mt),M.onBeforeCompile(mt,P),le=St.acquireProgram(mt,Tt),Nt.set(Tt,le),H.uniforms=mt.uniforms;const Bt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=Ht.uniform),ge(M,mt),H.needsLights=ke(M),H.lightsStateVersion=It,H.needsLights&&(Bt.ambientLightColor.value=R.state.ambient,Bt.lightProbe.value=R.state.probe,Bt.sunLights.value=R.state.sun,Bt.sunLightShadows.value=R.state.sunShadow,Bt.directionalLights.value=R.state.directional,Bt.directionalLightShadows.value=R.state.directionalShadow,Bt.spotLights.value=R.state.spot,Bt.spotLightShadows.value=R.state.spotShadow,Bt.rectAreaLights.value=R.state.rectArea,Bt.ltc_1.value=R.state.rectAreaLTC1,Bt.ltc_2.value=R.state.rectAreaLTC2,Bt.pointLights.value=R.state.point,Bt.pointLightShadows.value=R.state.pointShadow,Bt.hemisphereLights.value=R.state.hemi,Bt.sunShadowMatrix.value=R.state.sunShadowMatrix,Bt.sunShadowCascade.value=R.state.sunShadowCascade,Bt.directionalShadowMatrix.value=R.state.directionalShadowMatrix,Bt.spotLightMatrix.value=R.state.spotLightMatrix,Bt.spotLightMap.value=R.state.spotLightMap,Bt.pointShadowMatrix.value=R.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=le,H.uniformsList=null,le}function yt(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Gr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ge(M,N){const q=W.get(M);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function fe(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let q=0,H=M.length;q<H;q++){const R=M[q];if(R.texture!==null&&R.boundingBox.containsPoint(x))return R}return null}function Yt(M,N,q,H,R){N.isScene!==!0&&(N=Vt),K.resetTextureUnits();const _t=N.fog,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,mt=ct===null?P.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:xe.workingColorSpace,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Nt=pt.get(H.envMap||It,Tt),Jt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,le=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Bt=!!q.morphAttributes.position,_e=!!q.morphAttributes.normal,Ne=!!q.morphAttributes.color;let Te=zn;H.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Te=P.toneMapping);const Re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=Re!==void 0?Re.length:0,Rt=W.get(H),Ge=E.state.lights;if(ht===!0&&(ut===!0||M!==j)){const Ie=M===j&&H.id===$;Ht.setState(H,M,Ie)}let ve=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ge.state.version||Rt.outputColorSpace!==mt||R.isBatchedMesh&&Rt.batching===!1||!R.isBatchedMesh&&Rt.batching===!0||R.isBatchedMesh&&Rt.batchingColor===!0&&R._colorsTexture===null||R.isBatchedMesh&&Rt.batchingColor===!1&&R._colorsTexture!==null||R.isInstancedMesh&&Rt.instancing===!1||!R.isInstancedMesh&&Rt.instancing===!0||R.isSkinnedMesh&&Rt.skinning===!1||!R.isSkinnedMesh&&Rt.skinning===!0||R.isInstancedMesh&&Rt.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Rt.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Rt.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Rt.instancingMorph===!1&&R.morphTexture!==null||Rt.envMap!==Nt||H.fog===!0&&Rt.fog!==_t||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ht.numPlanes||Rt.numIntersection!==Ht.numIntersection)||Rt.vertexAlphas!==Jt||Rt.vertexTangents!==le||Rt.morphTargets!==Bt||Rt.morphNormals!==_e||Rt.morphColors!==Ne||Rt.toneMapping!==Te||Rt.morphTargetsCount!==he||!!Rt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Rt.__version=H.version);let en=Rt.currentProgram;ve===!0&&(en=se(H,N,R),z&&H.isNodeMaterial&&z.onUpdateProgram(H,en,Rt));let hn=!1,Ye=!1,En=!1;const Ae=en.getUniforms(),Fe=Rt.uniforms;if(g.useProgram(en.program)&&(hn=!0,Ye=!0,En=!0),H.id!==$&&($=H.id,Ye=!0),Rt.needsLights){const Ie=fe(E.state.lightProbeGridArray,R);Rt.lightProbeGrid!==Ie&&(Rt.lightProbeGrid=Ie,Ye=!0)}if(hn||j!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ae.setValue(D,"projectionMatrix",M.projectionMatrix),Ae.setValue(D,"viewMatrix",M.matrixWorldInverse);const ii=Ae.map.cameraPosition;ii!==void 0&&ii.setValue(D,xt.setFromMatrixPosition(M.matrixWorld)),b.logarithmicDepthBuffer&&Ae.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ae.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ye=!0,En=!0)}if(Rt.needsLights&&(Ge.state.sunShadowMap.length>0&&Ae.setValue(D,"sunShadowMap",Ge.state.sunShadowMap,K),Ge.state.directionalShadowMap.length>0&&Ae.setValue(D,"directionalShadowMap",Ge.state.directionalShadowMap,K),Ge.state.spotShadowMap.length>0&&Ae.setValue(D,"spotShadowMap",Ge.state.spotShadowMap,K),Ge.state.pointShadowMap.length>0&&Ae.setValue(D,"pointShadowMap",Ge.state.pointShadowMap,K)),R.isSkinnedMesh){Ae.setOptional(D,R,"bindMatrix"),Ae.setOptional(D,R,"bindMatrixInverse");const Ie=R.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ae.setValue(D,"boneTexture",Ie.boneTexture,K))}R.isBatchedMesh&&(Ae.setOptional(D,R,"batchingTexture"),Ae.setValue(D,"batchingTexture",R._matricesTexture,K),Ae.setOptional(D,R,"batchingIdTexture"),Ae.setValue(D,"batchingIdTexture",R._indirectTexture,K),Ae.setOptional(D,R,"batchingColorTexture"),R._colorsTexture!==null&&Ae.setValue(D,"batchingColorTexture",R._colorsTexture,K));const wn=q.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&U.update(R,q,en),(Ye||Rt.receiveShadow!==R.receiveShadow)&&(Rt.receiveShadow=R.receiveShadow,Ae.setValue(D,"receiveShadow",R.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Fe.envMapIntensity.value=N.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=E_()),Ye){if(Ae.setValue(D,"toneMappingExposure",P.toneMappingExposure),Rt.needsLights&&be(Fe,En),_t&&H.fog===!0&&Gt.refreshFogUniforms(Fe,_t),Gt.refreshMaterialUniforms(Fe,H,st,Q,E.state.transmissionRenderTarget[M.id]),Rt.needsLights&&Rt.lightProbeGrid){const Ie=Rt.lightProbeGrid;Fe.probesSH.value=Ie.texture,Fe.probesMin.value.copy(Ie.boundingBox.min),Fe.probesMax.value.copy(Ie.boundingBox.max),Fe.probesResolution.value.copy(Ie.resolution)}Gr.upload(D,yt(Rt),Fe,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gr.upload(D,yt(Rt),Fe,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ae.setValue(D,"center",R.center),Ae.setValue(D,"modelViewMatrix",R.modelViewMatrix),Ae.setValue(D,"normalMatrix",R.normalMatrix),Ae.setValue(D,"modelMatrix",R.matrixWorld),H.uniformsGroups!==void 0){const Ie=H.uniformsGroups;for(let ii=0,Ni=Ie.length;ii<Ni;ii++){const Il=Ie[ii];at.update(Il,en),at.bind(Il,en)}}return en}function be(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ke(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(M,N,q){const H=W.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=N,W.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const q=W.get(M);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,q=0){ct=M,Z=N,Y=q;let H=null,R=!1,_t=!1;if(M){const mt=W.get(M);if(mt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,mt.__webglFramebuffer),rt.copy(M.viewport),kt.copy(M.scissor),Ft=M.scissorTest,g.viewport(rt),g.scissor(kt),g.setScissorTest(Ft),$=-1;return}else if(mt.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(mt.__hasExternalTextures)K.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Jt=M.depthTexture;if(mt.__boundDepthTexture!==Jt){if(Jt!==null&&W.has(Jt)&&(M.width!==Jt.image.width||M.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(_t=!0);const Nt=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?H=Nt[N][q]:H=Nt[N],R=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?H=W.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?H=Nt[q]:H=Nt,rt.copy(M.viewport),kt.copy(M.scissor),Ft=M.scissorTest}else rt.copy(Ut).multiplyScalar(st).floor(),kt.copy($t).multiplyScalar(st).floor(),Ft=Se;if(q!==0&&(H=V),g.bindFramebuffer(D.FRAMEBUFFER,H)&&g.drawBuffers(M,H),g.viewport(rt),g.scissor(kt),g.setScissorTest(Ft),R){const mt=W.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,q)}else if(_t){const mt=N;for(let Tt=0;Tt<M.textures.length;Tt++){const Nt=W.get(M.textures[Tt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Tt,Nt.__webglTexture,q,mt)}}else if(M!==null&&q!==0){const mt=W.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,q)}$=-1};function Ue(M){const N=W.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=b.textureFormatReadable(M.format),N.__typeReadable=b.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,q,H,R,_t,It,mt=0){if(!(M&&M.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Tt=Tt[It]),Tt){g.bindFramebuffer(D.FRAMEBUFFER,Tt);try{const Nt=M.textures[mt],Jt=Nt.format,le=Nt.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt);const Bt=Ue(Nt);if(Bt.__formatReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&q>=0&&q<=M.height-R&&D.readPixels(N,q,H,R,bt.convert(Jt),bt.convert(le),_t)}finally{const Nt=ct!==null?W.get(ct).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,N,q,H,R,_t,It,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Tt=Tt[It]),Tt)if(N>=0&&N<=M.width-H&&q>=0&&q<=M.height-R){g.bindFramebuffer(D.FRAMEBUFFER,Tt);const Nt=M.textures[mt],Jt=Nt.format,le=Nt.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt);const Bt=Ue(Nt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,_t.byteLength,D.STREAM_READ),D.readPixels(N,q,H,R,bt.convert(Jt),bt.convert(le),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ne=ct!==null?W.get(ct).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ne);const Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sd(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_t),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(_e),D.deleteSync(Te),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,q=0){const H=Math.pow(2,-q),R=Math.floor(M.image.width*H),_t=Math.floor(M.image.height*H),It=N!==null?N.x:0,mt=N!==null?N.y:0;K.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,It,mt,R,_t),g.unbindTexture()},this.copyTextureToTexture=function(M,N,q=null,H=null,R=0,_t=0){let It,mt,Tt,Nt,Jt,le,Bt,_e,Ne;const Te=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(q!==null)It=q.max.x-q.min.x,mt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,Jt=q.min.y,le=q.isBox3?q.min.z:0;else{const Fe=Math.pow(2,-R);It=Math.floor(Te.width*Fe),mt=Math.floor(Te.height*Fe),M.isDataArrayTexture?Tt=Te.depth:M.isData3DTexture?Tt=Math.floor(Te.depth*Fe):Tt=1,Nt=0,Jt=0,le=0}H!==null?(Bt=H.x,_e=H.y,Ne=H.z):(Bt=0,_e=0,Ne=0);const Re=bt.convert(N.format),he=bt.convert(N.type);let Rt;N.isData3DTexture?(K.setTexture3D(N,0),Rt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),Rt=D.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),Rt=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ge=g.getParameter(D.UNPACK_ROW_LENGTH),ve=g.getParameter(D.UNPACK_IMAGE_HEIGHT),en=g.getParameter(D.UNPACK_SKIP_PIXELS),hn=g.getParameter(D.UNPACK_SKIP_ROWS),Ye=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,le);const En=M.isDataArrayTexture||M.isData3DTexture,Ae=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Fe=W.get(M),wn=W.get(N),Ie=W.get(Fe.__renderTarget),ii=W.get(wn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Ni=0;Ni<Tt;Ni++)En&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(M).__webglTexture,R,le+Ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(N).__webglTexture,_t,Ne+Ni)),D.blitFramebuffer(Nt,Jt,It,mt,Bt,_e,It,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(R!==0||M.isRenderTargetTexture||W.has(M)){const Fe=W.get(M),wn=W.get(N);g.bindFramebuffer(D.READ_FRAMEBUFFER,F),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Ie=0;Ie<Tt;Ie++)En?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,R,le+Ie):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,R),Ae?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wn.__webglTexture,_t,Ne+Ie):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wn.__webglTexture,_t),R!==0?D.blitFramebuffer(Nt,Jt,It,mt,Bt,_e,It,mt,D.COLOR_BUFFER_BIT,D.NEAREST):Ae?D.copyTexSubImage3D(Rt,_t,Bt,_e,Ne+Ie,Nt,Jt,It,mt):D.copyTexSubImage2D(Rt,_t,Bt,_e,Nt,Jt,It,mt);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ae?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Rt,_t,Bt,_e,Ne,It,mt,Tt,Re,he,Te.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,_t,Bt,_e,Ne,It,mt,Tt,Re,Te.data):D.texSubImage3D(Rt,_t,Bt,_e,Ne,It,mt,Tt,Re,he,Te):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_t,Bt,_e,It,mt,Re,he,Te.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_t,Bt,_e,Te.width,Te.height,Re,Te.data):D.texSubImage2D(D.TEXTURE_2D,_t,Bt,_e,It,mt,Re,he,Te);g.pixelStorei(D.UNPACK_ROW_LENGTH,Ge),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve),g.pixelStorei(D.UNPACK_SKIP_PIXELS,en),g.pixelStorei(D.UNPACK_SKIP_ROWS,hn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Ye),_t===0&&N.generateMipmaps&&D.generateMipmap(Rt),g.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){Z=0,Y=0,ct=null,g.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}function du(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Xe;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let _=0;_<d.count;++_)f.push(d.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Bc(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let S=0;S<a[u].length;++S)d.push(a[u][S][h]);const _=Bc(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function Bc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new sn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let _=0;_<e;_++){const S=u.getComponent(h,_);o.setComponent(h+f,_,S)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const b_={stone:"#8a8378",stoneDark:"#615b54",rock:"#75706a",earth:"#5b4a36",grass:"#6b8a3e",baseRim:"#2b2620",wood:"#8a5f38",woodDark:"#5a3b22",cloth:"#e3d3ae",clothDark:"#b8a47c",dark:"#3a3430",metal:"#9a968f",leather:"#6b4a2e",tunic:"#7a3b2e",hero:"#3f6fa8",skin:"#e0b890",ghost:"#c9cdf0",eye:"#ff4d5e",void:"#140622",riftStone:"#6a6275",copper:"#d97e3a",mule:"#8a7560",hoof:"#2e2620",claw:"#1a1826",brick:"#8c4a3c",bronze:"#a5683a",ivory:"#efe4cc",violet:"#5b4b8f"},T_={glow:2,eye:2.4,copper:.7,mana:.95,void:.9,ghost:.45},ts={day:{emissive:.28,hemi:["#fff1dc","#3a2e22",.62],key:["#ffe2b8",1.25],back:["#c9d8ff",.25],rim:[.08,"#ffffff"]},dusk:{emissive:.6,hemi:["#ffd2b0","#2a2030",.55],key:["#ffab66",1.05],back:["#8fa0ff",.45],rim:[.25,"#ffc9a0"]},night:{emissive:1,hemi:["#a0aee6","#2a2a48",1.35],key:["#d8deff",2.1],back:["#b0c2ff",.9],rim:[.9,"#c8d4ff"]}},A_=new Kt,R_=new Kt;function Ss(i,t,e,n){return n.copy(A_.set(i)).lerp(R_.set(t),e)}function fu(i,t){const e=t??{emissive:0,hemiSky:new Kt,hemiGround:new Kt,hemiIntensity:0,keyColor:new Kt,keyIntensity:0,backColor:new Kt,backIntensity:0,rimStrength:0,rimColor:new Kt},n=Math.min(1,Math.max(0,i)),[s,r,a]=n<.5?[ts.day,ts.dusk,n*2]:[ts.dusk,ts.night,(n-.5)*2],o=(l,c)=>l+(c-l)*a;return e.emissive=o(s.emissive,r.emissive),Ss(s.hemi[0],r.hemi[0],a,e.hemiSky),Ss(s.hemi[1],r.hemi[1],a,e.hemiGround),e.hemiIntensity=o(s.hemi[2],r.hemi[2]),Ss(s.key[0],r.key[0],a,e.keyColor),e.keyIntensity=o(s.key[1],r.key[1]),Ss(s.back[0],r.back[0],a,e.backColor),e.backIntensity=o(s.back[1],r.back[1]),e.rimStrength=o(s.rim[0],r.rim[0]),Ss(s.rim[1],r.rim[1],a,e.rimColor),e}const is={uRim:{value:ts.day.rim[0]},uRimColor:{value:new Kt(ts.day.rim[1])},uToCam:{value:new I(0,1,0)}},C_={"#000000":"#34303c","#0000FF":"#3a5cff","#00FF00":"#39e35a","#FFFF00":"#f2e23a","#FF0000":"#f0303a"},xr=i=>C_[i.toUpperCase()]??i;function P_(i,t){const e=new Kt(i),n=(e.r+e.g+e.b)/3;return e.r+=(n-e.r)*t,e.g+=(n-e.g)*t,e.b+=(n-e.b)*t,e}const zc=new Map;function L_(i,t){const e=i+(t??""),n=zc.get(e);if(n)return n;const s=t??b_[i],r=P_(s,i==="mana"||i==="glow"?.05:.14),a=T_[i]??0,o=a?i==="void"?new Kt("#3a0a66"):i==="ghost"?new Kt("#6a70d0"):r.clone():new Kt(0,0,0);o.multiplyScalar(a);const l={color:r,emit:o};return zc.set(e,l),l}const I_="minis-emit-rim";function D_(i){i.uniforms.uRim=is.uRim,i.uniforms.uRimColor=is.uRimColor,i.uniforms.uToCam=is.uToCam,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aEmit;
varying vec3 vEmit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vEmit = aEmit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vEmit;
uniform float uRim;
uniform vec3 uRimColor;
uniform vec3 uToCam;`).replace("#include <emissivemap_fragment>",`float rimF = pow(1.0 - clamp(dot(normalize(normal), uToCam), 0.0, 1.0), 2.5);
totalEmissiveRadiance = vEmit * emissive + uRimColor * (uRim * rimF);`)}function el(i,t){const e=new xf({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,emissive:16777215,emissiveIntensity:t,transparent:i==="ghost",opacity:i==="ghost"?.9:1,side:mn});return e.onBeforeCompile=D_,e.customProgramCacheKey=()=>I_,e.userData.base=e.emissiveIntensity,e}let Jr=0;const Zn=fu(0),nl={opaque:el("opaque",Zn.emissive),ghost:el("ghost",Zn.emissive)},pu=new Set,kc=i=>nl[i];function N_(i){const t=el(i,Zn.emissive);return pu.add(t),t}const Gc=()=>Jr>.5,U_=()=>Jr,F_=()=>Zn;function O_(i){Jr=Math.min(1,Math.max(0,i)),fu(Jr,Zn);for(const t of[nl.opaque,nl.ghost,...pu])t.emissiveIntensity=Zn.emissive,t.userData.base=Zn.emissive;is.uRim.value=Zn.rimStrength,is.uRimColor.value.copy(Zn.rimColor)}const ot=Math.PI*2,Li=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Mr=new Me,Zi=new Hn,Sr=new Sn,ka=new I,Ga=new I,B_=new I(0,1,0);function Hc(i,t,e){const n=i.index?i.toNonIndexed():i.clone();i!==n&&i.dispose(),n.deleteAttribute("uv");const s=n.attributes.position.count,{color:r,emit:a}=L_(t,e),o=new Float32Array(s*3),l=new Float32Array(s*3);for(let c=0;c<s;c++)o[c*3]=r.r,o[c*3+1]=r.g,o[c*3+2]=r.b,l[c*3]=a.r,l[c*3+1]=a.g,l[c*3+2]=a.b;return n.setAttribute("color",new sn(o,3)),n.setAttribute("aEmit",new sn(l,3)),n}class Sl{constructor(t,e){ee(this,"part");ee(this,"matrix");this.part=t??this,this.matrix=e}add(t,e,n,s=0,r=0,a=0,o=0,l=0,c=0,u=1,f=1,h=1){const d=Hc(t,e,n);Sr.set(o,l,c),Zi.setFromEuler(Sr),Mr.compose(ka.set(s,r,a),Zi,Ga.set(u,f,h)),d.applyMatrix4(Mr),d.applyMatrix4(this.matrix),this.part.buckets[e==="ghost"?"ghost":"opaque"].push(d)}beam(t,e,n,s,r=5){const a=new I(...t),o=new I(...e),l=a.distanceTo(o),c=Hc(new Et(n,n,l,r),s);Zi.setFromUnitVectors(B_,o.clone().sub(a).normalize()),Mr.compose(ka.copy(a).lerp(o,.5),Zi,Ga.set(1,1,1)),c.applyMatrix4(Mr),c.applyMatrix4(this.matrix),this.part.buckets.opaque.push(c)}crystal(t,e,n,s,r,a,o,l,c){const u=this.at(r,a,o,l,0,c);u.add(new Et(n,n*.82,s,6),t,e,0,s/2,0),u.add(new De(n,n*1.8,6),t,e,0,s+n*.9,0)}at(t,e,n,s=0,r=0,a=0){Sr.set(s,r,a),Zi.setFromEuler(Sr);const o=new Me().compose(ka.set(t,e,n),Zi,Ga.set(1,1,1));return new Sl(this.part,this.matrix.clone().multiply(o))}}class Vc extends Sl{constructor(e,n={}){super(null,new Me);ee(this,"group",new Qi);ee(this,"buckets",{opaque:[],ghost:[]});ee(this,"baked",{opaque:[],ghost:[]});ee(this,"detail");ee(this,"uniqueGeometry");ee(this,"uniqueMaterial");ee(this,"parent");ee(this,"name");this.name=e,this.group.name=e,this.parent=n.parent??null,this.detail=n.detail??!1,this.uniqueGeometry=n.uniqueGeometry??!1,this.uniqueMaterial=n.uniqueMaterial??!1,n.pos&&this.group.position.set(...n.pos),n.rot&&this.group.rotation.set(...n.rot),n.scale&&this.group.scale.set(...n.scale),this.parent&&this.parent.group.add(this.group)}}class z_{constructor(){ee(this,"root",new Vc("root"));ee(this,"parts",[this.root]);ee(this,"lights",[])}part(t,e={}){const n=new Vc(t,{parent:e.parent??this.root,...e});return this.parts.push(n),n}light(t,e,n,s,r=1){this.lights.push({color:t,pos:[e,n,s],strength:r})}base(t,e=1,n=1){const s=this.root,r=Li(t);s.add(new Et(1.02,1.1,.16,40),"baseRim",void 0,0,.08,0,0,0,0,e,1,n),s.add(new Et(1,1,.03,40),"earth",void 0,0,.175,0,0,0,0,e,1,n);for(let a=0;a<5;a++){const o=r()*ot,l=.55+r()*.35;s.add(new ei(.045+r()*.06,0),"rock",void 0,Math.cos(o)*l*e,.2,Math.sin(o)*l*n,r()*3,r()*3,0)}for(let a=0;a<7;a++){const o=r()*ot,l=.5+r()*.42,c=Math.cos(o)*l*e,u=Math.sin(o)*l*n;for(let f=0;f<3;f++)s.add(new De(.022,.12+r()*.08,4),"grass",void 0,c+(r()-.5)*.06,.25,u+(r()-.5)*.06,(r()-.5)*.6,0,(r()-.5)*.6)}}compile(){const t={root:this.root.group,partNames:[],detailNames:[],bakedNames:[],uniqueGeometry:[],uniqueMaterial:[],lights:this.lights,tris:0};this.root.group.updateMatrixWorld(!0);const e=new Me;for(const n of this.parts){if(!n.detail)continue;let s=n.parent;for(;s&&s.detail;)s=s.parent;if(s){e.copy(s.group.matrixWorld).invert().multiply(n.group.matrixWorld);for(const r of["opaque","ghost"])for(const a of n.buckets[r])s.baked[r].push(a.clone().applyMatrix4(e))}}for(const n of this.parts){n!==this.root&&t.partNames.push(n.name),n.detail&&t.detailNames.push(n.name),n.uniqueGeometry&&t.uniqueGeometry.push(n.name),n.uniqueMaterial&&t.uniqueMaterial.push(n.name);for(const s of["opaque","ghost"]){const r=Wc(n.buckets[s]);if(r){const o=new _n(r,kc(s));o.name=`${n.name}#${s}`,n.group.add(o),t.tris+=r.attributes.position.count/3}const a=Wc(n.baked[s]);if(a){const o=new _n(a,kc(s));o.name=`${n.name}#baked-${s}`,o.visible=!1,n.group.add(o),t.bakedNames.push(o.name)}}}return t}}function Wc(i){if(i.length===0)return null;const t=i.length===1?i[0]:du(i,!1);if(i.length>1)for(const e of i)e.dispose();return t}function Xc(i){const t=i.root.clone(!0),e={},n={};t.traverse(o=>{o.isMesh?n[o.name]=o:o!==t&&o.name&&(e[o.name]=o)});const s=[],r=[];for(const o of i.uniqueGeometry)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.geometry=c.geometry.clone(),c.geometry.userData.orig=c.geometry.attributes.position.array.slice(),s.push(c.geometry))}for(const o of i.uniqueMaterial)for(const l of["opaque","ghost"]){const c=n[`${o}#${l}`];c&&(c.material=N_(l),r.push(c.material))}const a={root:t,parts:e,meshes:n,lod:"near",setLod(o){if(o===a.lod)return;a.lod=o;const l=o==="near";for(const c of i.detailNames)e[c].visible=l;for(const c of i.bakedNames)n[c].visible=!l},dispose(){for(const o of s)o.dispose();for(const o of r)o.dispose()}};return a}const os=(i,t,e=0,n=ot)=>new _l(i.map(([s,r])=>new vt(s,r)),t,e,n),Ha=.1,k_=1,G_=1.1,H_=.7,V_=.25,W_=.08,X_=.15,qc=1.06,q_=.42,Y_=6,$_=9,Yc=3.6,Z_=25,K_=.004,ys=Math.PI/180;function J_(){const i=new Xe;return i.setAttribute("position",new ye([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5],3)),i.setAttribute("uv",new ye([0,0,1,0,0,1,1,1],2)),i.setIndex([0,2,1,2,3,1]),i}const $c=`
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
}`,Q_=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.0, 1.0, r);
  a *= a;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <colorspace_fragment>
}`,j_=`
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = 1.0 - smoothstep(0.5, 1.0, r);
  gl_FragColor = vec4(0.0, 0.0, 0.0, a * vCol.r);
}`,_i=new Me,yr=new I,Va=new I,Es=new Hn,Er=new Sn,wr=new Kt,tv=new I;class ev{constructor(t,e){ee(this,"hemi",new yf);ee(this,"key",new fc);ee(this,"back",new fc);ee(this,"quad",J_());ee(this,"poolMat");ee(this,"shadowMat");ee(this,"pools");ee(this,"shadows");ee(this,"poolN",0);ee(this,"shadowN",0);ee(this,"sky",{darkness:0,sunAltDeg:45,sunAzDeg:180,moon:.5});ee(this,"pitch",45);ee(this,"bearing",0);ee(this,"poolGain",Ha);ee(this,"shDx",0);ee(this,"shDz",1);ee(this,"shLen",1);ee(this,"shK",0);ee(this,"colorCache",new Map);ee(this,"world");this.world=t,e.add(this.hemi,this.key,this.back),this.poolMat=new vn({uniforms:{uTime:{value:0},uFlicker:{value:W_}},vertexShader:$c,fragmentShader:Q_,transparent:!0,depthWrite:!1,blending:Is,side:mn,forceSinglePass:!0}),this.shadowMat=new vn({uniforms:{uTime:{value:0},uFlicker:{value:0}},vertexShader:$c,fragmentShader:j_,transparent:!0,depthWrite:!1,side:mn,forceSinglePass:!0}),this.shadows=this.make(this.shadowMat,512,1),this.pools=this.make(this.poolMat,256,2),this.apply()}make(t,e,n){const s=new Zr(this.quad,t,e);return s.instanceColor=new Os(new Float32Array(e*3),3),s.instanceMatrix.setUsage(Ei),s.instanceColor.setUsage(Ei),s.frustumCulled=!1,s.renderOrder=n,s.count=0,this.world.add(s),s}grow(t,e,n,s){if(e<=t.instanceMatrix.count)return t;this.world.remove(t),t.dispose();let r=t.instanceMatrix.count;for(;r<e;)r*=2;return this.make(n,r,s)}setSky(t){Object.assign(this.sky,t),O_(this.sky.darkness),this.apply()}getSky(){return{...this.sky}}setCamera(t,e){t===this.pitch&&e===this.bearing||(this.pitch=t,this.bearing=e,this.apply())}apply(){const t=F_(),{darkness:e,sunAltDeg:n,sunAzDeg:s,moon:r}=this.sky,a=this.pitch*ys,o=this.bearing*ys,l=is.uToCam.value.set(-Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a)).normalize();this.hemi.color.copy(t.hemiSky),this.hemi.groundColor.copy(t.hemiGround),this.hemi.intensity=t.hemiIntensity;const c=Math.max(Z_,n)*ys,u=s*ys,f=tv.set(Math.sin(u)*Math.cos(c),Math.sin(c),-Math.cos(u)*Math.cos(c)),h=yr.set(l.x*.9+.3,.95,l.z*.9+.1).normalize();this.key.position.copy(f).lerp(h,e).normalize(),this.key.color.copy(t.keyColor);const d=.82+.36*r;this.key.intensity=t.keyIntensity*(1+(d-1)*e),this.back.position.set(Math.sin(o)*Math.sin(a)-l.x*.2,.55,-Math.cos(o)*Math.sin(a)-l.z*.2).normalize(),this.back.color.copy(t.backColor),this.back.intensity=t.backIntensity,this.poolGain=Ha+(k_-Ha)*e,this.shDx=-Math.sin(u),this.shDz=Math.cos(u);const _=Math.max($_,n)*ys;this.shLen=Math.min(Yc,1/Math.tan(_)),this.shK=q_*Math.min(1,Math.max(0,n/Y_))}begin(t,e,n){this.poolMat.uniforms.uTime.value=t/1e3%3600,this.poolN=0,this.shadowN=0,this.pools=this.grow(this.pools,e,this.poolMat,2),this.shadows=this.grow(this.shadows,n,this.shadowMat,1)}colorOf(t){let e=this.colorCache.get(t);return e||(e=new Kt(t),this.colorCache.set(t,e)),e}pool(t,e,n,s,r,a,o){const l=this.pools;if(this.poolN>=l.instanceMatrix.count)return;const c=this.poolGain*a;wr.copy(this.colorOf(r)).multiplyScalar(c),_i.compose(yr.set(t,e,n),Es.identity(),Va.set(s*2,1,s*2)),_i.elements[3]=o%64,l.setMatrixAt(this.poolN,_i),l.setColorAt(this.poolN,wr),this.poolN++}poolFor(t,e,n,s,r,a,o,l){this.pool(t,e,n,s*(G_+H_*Math.min(1.6,a)+V_*o),r,Math.min(1.2,a),l)}shadow(t,e,n,s,r,a,o=1){const l=this.shadows,c=K_*Math.max(n,s);if(this.shadowN<l.instanceMatrix.count&&(Er.set(0,r,0),Es.setFromEuler(Er),_i.compose(yr.set(t,c,e),Es,Va.set(n*2*qc*o,1,s*2*qc*o)),l.setMatrixAt(this.shadowN,_i),l.setColorAt(this.shadowN,wr.setScalar(X_)),this.shadowN++),this.shK>.01&&a>0&&this.shadowN<l.instanceMatrix.count){const u=Math.max(n,s),f=Math.max(u,Math.min(Yc*u,a*u*this.shLen)),h=Math.atan2(-this.shDz,this.shDx),d=(f-u)/2;Er.set(0,h,0),Es.setFromEuler(Er),_i.compose(yr.set(t+this.shDx*d,c*1.5,e+this.shDz*d),Es,Va.set(f+u,1,Math.min(n,s)*1.9)),l.setMatrixAt(this.shadowN,_i),l.setColorAt(this.shadowN,wr.setScalar(this.shK)),this.shadowN++}}end(){this.pools.count=this.poolN,this.poolN&&(this.pools.instanceMatrix.needsUpdate=!0,this.pools.instanceColor.needsUpdate=!0),this.shadows.count=this.shadowN,this.shadowN&&(this.shadows.instanceMatrix.needsUpdate=!0,this.shadows.instanceColor.needsUpdate=!0)}stats(){return{pools:this.poolN,shadows:this.shadowN,darkness:+this.sky.darkness.toFixed(3),sunAltDeg:+this.sky.sunAltDeg.toFixed(1),sunAzDeg:+this.sky.sunAzDeg.toFixed(1),moon:+this.sky.moon.toFixed(2),poolGain:+this.poolGain.toFixed(3),sunShadow:+this.shK.toFixed(3),shadowLen:+this.shLen.toFixed(2)}}dispose(){this.world.remove(this.pools,this.shadows),this.pools.dispose(),this.shadows.dispose(),this.poolMat.dispose(),this.shadowMat.dispose(),this.quad.dispose()}}const nv={dust:620,burst:820,ring:720,implode:640,wisps:900},iv={dust:11,burst:14,ring:1,implode:12,wisps:10},Wa="#b9a27c",sv=40,rv=48,vi=512,br=2.399963;function Mn(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}const Tr=i=>1-(1-i)*(1-i),av=i=>i*i*(3-2*i),ov=`
varying vec3 vCol;
varying float vA;
void main() {
  mat4 M = instanceMatrix;
  vA = M[0][3];
  M[0][3] = 0.0;
  vCol = instanceColor;
  gl_Position = projectionMatrix * modelViewMatrix * M * vec4(position, 1.0);
}`,lv=`
varying vec3 vCol;
varying float vA;
void main() {
  gl_FragColor = vec4(vCol, vA);
  #include <colorspace_fragment>
}`,Xa=new Me,cv=new I,hv=new I,Zc=new Hn,Kc=new Sn;class uv{constructor(t){ee(this,"effects",[]);ee(this,"dust");ee(this,"motes");ee(this,"rings");ee(this,"mats",[]);ee(this,"geos",[]);ee(this,"world");ee(this,"colorCache",new Map);ee(this,"log",[]);ee(this,"particles",0);ee(this,"dustN",0);ee(this,"moteN",0);ee(this,"ringN",0);this.world=t;const e=new yn(1,0),n=new vl(.82,1,24);n.rotateX(-Math.PI/2),this.geos.push(e,n),this.dust=this.make(e,yi,3),this.motes=this.make(e,Is,4),this.rings=this.make(n,yi,3)}make(t,e,n){const s=new vn({vertexShader:ov,fragmentShader:lv,transparent:!0,depthWrite:!1,blending:e,side:mn,forceSinglePass:!0});this.mats.push(s);const r=new Zr(t,s,vi);return r.instanceColor=new Os(new Float32Array(vi*3),3),r.instanceMatrix.setUsage(Ei),r.instanceColor.setUsage(Ei),r.frustumCulled=!1,r.renderOrder=n,r.count=0,r.visible=!1,r.name=`fx-${e===Is?"motes":t===this.geos[1]?"rings":"dust"}`,this.world.add(r),r}colorOf(t){let e=this.colorCache.get(t);return e||(e=new Kt(t),this.colorCache.set(t,e)),e}spawn(t,e,n,s,r,a,o,l=1){this.effects.length>=rv&&this.effects.shift();const c=this.effects.length*7919+(o|0)&65535;this.effects.push({kind:t,x:e,y:n,z:s,s:r*l,color:this.colorOf(a),t0:o,dur:nv[t],n:iv[t],seed:c}),this.log.push(`${t}@${Math.round(o)}`),this.log.length>sv&&this.log.shift()}landing(t,e,n,s){this.spawn("dust",t,.02*n,e,n,Wa,s),this.spawn("ring",t,.012*n,e,n,Wa,s,.9)}puff(t,e,n,s){this.spawn("dust",t,.02*n,e,n,Wa,s,.8)}burst(t,e,n,s,r,a){this.spawn("burst",t,e,n,s,r,a)}pulse(t,e,n,s,r){this.spawn("ring",t,.014*n,e,n,s,r,1.4),this.spawn("burst",t,1.1*n,e,n,s,r,.8)}wisps(t,e,n,s,r,a){this.spawn("wisps",t,e,n,s,r,a)}implode(t,e,n,s,r,a){this.spawn("implode",t,e,n,s,r,a),this.spawn("ring",t,.014*s,n,s,r,a,.7)}active(){return this.effects.length>0}push(t,e,n,s,r,a,o,l,c,u,f){Kc.set(c,c*1.7,0),Zc.setFromEuler(Kc),Xa.compose(cv.set(n,s,r),Zc,hv.set(a,o,l)),Xa.elements[3]=f,t.setMatrixAt(e,Xa),t.setColorAt(e,u)}tick(t){this.dustN=0,this.moteN=0,this.ringN=0;for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e],s=(t-n.t0)/n.dur;if(s>=1){this.effects.splice(e,1);continue}if(s<0)continue;const{x:r,y:a,z:o,s:l,color:c,n:u,seed:f}=n;switch(n.kind){case"dust":{for(let h=0;h<u&&this.dustN<vi;h++){const d=h*br+Mn(f,h)*.9,_=(.55+.35*Mn(f,h+50))*(.5+1.1*Tr(s))*l,S=(.05+.13*(1-s)*(.6+.6*Mn(f,h+90)))*l,m=.22*l*Math.sin(Math.PI*Math.min(1,s*1.3))*(.5+Mn(f,h+30));this.push(this.dust,this.dustN++,r+Math.cos(d)*_,a+m+S*.5,o+Math.sin(d)*_,S,S,S,s*3+h,c,.85*(1-s*s))}break}case"burst":{for(let h=0;h<u&&this.moteN<vi;h++){const d=h*br+Mn(f,h)*1.2,_=(.15+.55*Mn(f,h+40))*Tr(s)*l,S=(.25+.9*Mn(f,h+80))*Tr(s)*l,m=(.03+.09*(1-s))*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*_,a+S,o+Math.sin(d)*_,m,m,m,s*4+h,c,1-s*s)}break}case"wisps":{for(let h=0;h<u&&this.moteN<vi;h++){const d=h*br+Mn(f,h)*1.5+s*1.2,_=(.2+.5*Mn(f,h+40))*(.3+.7*s)*l,S=(.1+1.3*s)*l+Math.sin(s*9+h)*.05*l,m=(.03+.07*Math.sin(Math.PI*s))*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*_,a+S,o+Math.sin(d)*_,m,m,m,s*2+h,c,.9*(1-s))}break}case"implode":{for(let h=0;h<u&&this.moteN<vi;h++){const d=h*br+Mn(f,h)*1.2,_=(1.2+.8*Mn(f,h+40))*(1-av(s))*l,S=(Mn(f,h+80)-.3)*.8*l*(1-s),m=(.03+.08*s)*l;this.push(this.motes,this.moteN++,r+Math.cos(d)*_,a+S,o+Math.sin(d)*_,m,m,m,s*5+h,c,.4+.6*s)}break}case"ring":{if(this.ringN<vi){const h=(.7+1.4*Tr(s))*l;this.push(this.rings,this.ringN++,r,a,o,h,1,h,0,c,.8*(1-s)*(1-s))}break}}}this.flush(this.dust,this.dustN),this.flush(this.motes,this.moteN),this.flush(this.rings,this.ringN),this.particles=this.dustN+this.moteN+this.ringN}flush(t,e){t.count=e,t.visible=e>0,e&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0)}stats(){return{effects:this.effects.length,particles:this.particles,log:[...this.log]}}clearLog(){this.log.length=0}dispose(){this.world.remove(this.dust,this.motes,this.rings),this.dust.dispose(),this.motes.dispose(),this.rings.dispose();for(const t of this.mats)t.dispose();for(const t of this.geos)t.dispose();this.effects.length=0}}const dv=.1,fv=1.7,Jc=i=>Math.min(fv,1+dv*Math.max(0,(i??1)-1)),pv={front:"z",build(i){i.base(11);const t=i.root.at(0,.185,0);t.add(new Et(.78,.82,.12,8),"stone",void 0,0,.06,0,0,Math.PI/8),t.add(new Et(.6,.64,.12,8),"stone",void 0,0,.18,0,0,Math.PI/8),t.add(new Et(.44,.48,.1,8),"stoneDark",void 0,0,.29,0,0,Math.PI/8);for(let o=0;o<4;o++){const l=Math.PI/4+o*Math.PI/2,c=Math.cos(l)*.7,u=Math.sin(l)*.7;t.add(new Et(.055,.085,.5,4),"stoneDark",void 0,c,.37,u,0,l),t.add(new De(.058,.12,4),"stoneDark",void 0,c,.68,u,0,l),t.add(new Le(.035,0),"glow","#ffb56b",c*.9,.42,u*.9)}const e=i.part("heart",{pos:[0,1.205,0]});i.part("core",{parent:e}).add(new Ke(.28,1),"copper",void 0,0,0,0,0,0,0,1,1.55,1),i.part("ringA",{parent:e,rot:[1.2,0,.3],detail:!0}).add(new ue(.48,.018,3,28),"glow","#ffc98a"),i.part("ringB",{parent:e,rot:[1.9,0,-.5],detail:!0}).add(new ue(.4,.014,3,24),"glow","#ffc98a");const a=i.part("orbit",{parent:e,detail:!0});for(let o=0;o<5;o++){const l=o/5*ot;a.add(new yn(.06,0),"glow","#ffb56b",Math.cos(l)*.66,Math.sin(l*2)*.12,Math.sin(l)*.66,l,l)}i.light("#ffae5a",0,1.2,0,1.3)},animate({parts:i},t,e){i.core.rotation.y=t*ot,i.heart.position.y=1.205+Math.sin(t*ot)*.05;const n=Jc(e);i.heart.scale.set(n,n,n),i.ringA.rotation.z=t*ot,i.ringB.rotation.z=-t*ot,i.orbit.rotation.y=t*ot/5},pulse({parts:i},t,e){const n=Jc(e)*(1+.5*Math.sin(Math.PI*t));i.heart.scale.set(n,n,n),i.heart.position.y=1.205+.18*Math.sin(Math.PI*t)}},Ar=.55,Qc=1.12,mv=.999,jc=i=>i>=mv,qa=i=>Math.min(1,Math.max(0,i??1)),gv={front:"z",build(i,t){i.base(23);const e=i.root.at(0,.185,0);[[.42,0,.1,0],[.28,-.36,.06,.2],[.24,.32,.05,-.22],[.18,.1,.04,.4]].forEach(([h,d,_,S],m)=>e.add(new ei(h,0),"rock",void 0,d,_,S,m,m*2,0,1,.55,1));const s=i.part("crystals",{pos:[0,.185,0],uniqueMaterial:!0}),r=Li(5);s.crystal("mana",t,.17,.62,0,.12,0,.06,-.05),[[-.22,.1,.12,.4,.1,.5],[.2,.08,-.08,.34,-.2,-.45],[.08,.1,.22,.28,.5,-.15],[-.12,.08,-.2,.26,-.4,.3],[.28,.05,.16,.2,.3,-.7],[-.32,.05,-.05,.18,0,.8]].forEach(([h,d,_,S,m,p])=>s.crystal("mana",t,.06+r()*.05,S,h,d,_,m,p));const o=i.part("sparkle",{pos:[0,.185+.95,0]});for(let h=0;h<6;h++){const d=h/6*ot;o.add(new yn(.045,0),"glow",t,Math.cos(d)*.3,h%2*.12,Math.sin(d)*.3,d,d)}o.group.visible=!1;const l=[0,1.75,0];for(let h=0;h<3;h++){const d=h/3*ot+.5;e.beam([Math.cos(d)*.72,.02,Math.sin(d)*.72],l,.03,"wood")}for(let h=0;h<3;h++){const d=h/3*ot+.5,_=(h+1)/3*ot+.5;e.beam([Math.cos(d)*.5,.55,Math.sin(d)*.5],[Math.cos(_)*.5,.55,Math.sin(_)*.5],.018,"woodDark")}i.part("pulley",{pos:[0,.185+1.66,0],rot:[Math.PI/2,0,0],detail:!0}).add(new Et(.09,.09,.05,10),"metal"),i.part("rope",{pos:[.09,.185+1.4,0],detail:!0}).add(new Et(.008,.008,1,4),"clothDark"),i.part("bucket",{pos:[.09,.185+1.2,0],detail:!0}).add(new Et(.075,.055,.11,8),"woodDark"),e.add(new et(.035,.55,.035),"woodDark",void 0,.72,.27,.32),e.add(new Le(.06,0),"glow",t,.72,.6,.32),i.light(t,0,.8,0,1.2),i.light(t,.72,.8,.32,.5)},animate({parts:i,meshes:t},e,n){const s=1.24+(Math.sin(e*ot)*.5+.5)*.22;i.bucket.position.y=.185+s,i.rope.scale.y=1.62-s,i.rope.position.y=.185+(1.62+s)/2+.03,i.pulley.rotation.y=e*ot;const r=qa(n),a=jc(r),o=Ar+(Qc-Ar)*r;i.crystals.scale.set(o,o,o);const l=t["crystals#opaque"].material;l.emissiveIntensity=l.userData.base*(a?1.35+.6*Math.sin(e*ot*2):1+.35*Math.sin(e*ot));const c=i.sparkle;c.visible=a,a&&(c.rotation.y=e*ot,c.position.y=.185+.95+Math.sin(e*ot*2)*.06)},pulse({parts:i},t,e){const n=qa(e),s=(Ar+(Qc-Ar)*n)*(1+.3*Math.sin(Math.PI*t));i.crystals.scale.set(s,s,s)},poolGain(i,t){if(t!==0)return 1;const e=qa(i);return(.3+.7*e)*(jc(e)?1.35:1)}},Ls=[-.25,.185,0],Rr=(i,t,e)=>[Ls[0]+i,Ls[1]+t,Ls[2]+e],_v={front:"x",build(i,t){i.base(37,1.3,.85);const e=i.root.at(...Ls);e.add(new et(1.2,.1,.66),"wood",void 0,0,.4,0);for(const S of[-.33,.33])e.add(new et(1.2,.14,.04),"woodDark",void 0,0,.5,S);const n=[];for(let S=0;S<=10;S++){const m=Math.PI*S/10;n.push([Math.cos(m)*.36,Math.sin(m)*.42])}const s=new ni;n.forEach(([S,m],p)=>p?s.lineTo(S,m):s.moveTo(S,m)),s.lineTo(-.36,0),s.lineTo(.36,0);const r=new Kr;n.slice().reverse().forEach(([S,m],p)=>p?r.lineTo(S*.9,m*.9):r.moveTo(S*.9,m*.9)),s.holes.push(r);const a=new ea(s,{depth:.95,bevelEnabled:!1});a.translate(0,0,-.475),e.add(a,"cloth",void 0,-.08,.45,0,0,Math.PI/2);for(const S of[-.5,-.18,.14,.38])e.add(new ue(.37,.014,3,10,Math.PI),"clothDark",void 0,S,.45,0,0,Math.PI/2);const o=new ni;n.forEach(([S,m],p)=>p?o.lineTo(S*.9,m*.9):o.moveTo(S*.9,m*.9)),e.add(new Pi(o),"dark",void 0,.38,.45,0,0,Math.PI/2);const l=i.part("cargo",{pos:Rr(-.72,.45,0)});l.add(new et(.2,.2,.2),"wood",void 0,0,.1,.12,0,.3),l.add(new et(.15,.15,.15),"woodDark",void 0,0,.275,.1,0,.7),l.add(new Ke(.11,0),"mana",t,-.02,.09,-.18,.4,.2,0,1,.8,1),l.add(new Ke(.085,0),"mana",t,.05,.25,-.14,.1,.9,.2,1,.8,1),l.add(new Ke(.07,0),"mana",t,.12,.4,.02,.6,.3,.1,1,.75,1),l.group.visible=!1,e.add(new Et(.09,.09,.22,10),"woodDark",void 0,-.2,.52,.41,Math.PI/2);for(const S of[-.07,.07])e.add(new ue(.092,.01,3,12),"metal",void 0,-.2+S,.52,.41,0,Math.PI/2);let c=0;for(const S of[-.4,.3])for(const m of[-.4,.4]){const p=i.part(`wheel${c++}`,{pos:Rr(S,.25,m),detail:!0});p.add(new ue(.2,.03,4,14),"woodDark"),p.add(new Et(.045,.045,.08,8),"metal",void 0,0,0,0,Math.PI/2);for(let y=0;y<6;y++)p.add(new et(.018,.38,.018),"wood",void 0,0,0,0,0,0,y*Math.PI/6)}e.add(new et(.16,.04,.5),"woodDark",void 0,.5,.6,0);const u=e.at(.5,.62,0);u.add(new De(.12,.3,7),"tunic",void 0,0,.15,0),u.add(new Ke(.075,0),"skin",void 0,0,.36,0),u.add(new De(.095,.16,7),"tunic",void 0,0,.44,-.01);for(const S of[-.2,.2])e.beam([.6,.4,S],[1.02,.5,S*.6],.014,"woodDark");const f=i.part("mule",{pos:Rr(1.22,.2,0),detail:!0});f.add(new et(.46,.2,.2),"mule",void 0,0,.35,0);const h=i.part("head",{parent:f,pos:[.26,.45,0],detail:!0});h.add(new et(.1,.2,.12),"mule",void 0,0,.05,0,0,0,-.5),h.add(new et(.2,.1,.1),"mule",void 0,.1,.12,0,0,0,-.35);for(const S of[-.04,.04])h.add(new De(.025,.12,4),"mule",void 0,.02,.22,S,S*3,0,.2);f.add(new De(.02,.16,4),"hoof",void 0,-.25,.32,0,0,0,2.4),[[.16,.07,0],[.16,-.07,.5],[-.16,.07,.5],[-.16,-.07,0]].forEach(([S,m],p)=>{const y=i.part(`hip${p}`,{parent:f,pos:[S,.28,m],detail:!0});y.add(new et(.05,.26,.05),"mule",void 0,0,-.13,0),y.add(new et(.055,.04,.055),"hoof",void 0,0,-.27,0)}),e.add(new et(.03,.5,.03),"woodDark",void 0,.6,.75,.26),i.part("hang",{pos:Rr(.62,.98,.26),detail:!0}).add(new Le(.055,0),"glow",t,0,-.09,0),i.light(t,.35,.95,.26,1)},animate({parts:i},t,e){const n=Math.min(1,Math.max(0,e??0)),s=i.cargo;if(s.visible=n>.001,s.visible){const a=.55+.45*n;s.scale.set(a,a,a)}for(let a=0;a<4;a++)i[`wheel${a}`].rotation.z=-t*ot/6;const r=[0,.5,.5,0];for(let a=0;a<4;a++)i[`hip${a}`].rotation.z=Math.sin((t+r[a])*ot)*.45;i.mule.position.y=Ls[1]+.2+Math.abs(Math.sin(t*ot*2))*.015,i.head.rotation.z=Math.sin(t*ot*2)*.06,i.hang.rotation.x=Math.sin(t*ot)*.35}},th={front:"z",build(i){i.base(41);const t=i.part("f",{pos:[0,.33,0]});i.part("cloak",{parent:t,detail:!0,uniqueGeometry:!0}).add(os([[.6,0],[.5,.3],[.42,.7],[.35,1.05],[.28,1.3],[.16,1.45]],11),"ghost"),t.add(os([[.05,1.9],[.2,1.84],[.3,1.66],[.31,1.46],[.25,1.3]],11,.35,ot-.7),"ghost"),t.add(new Ke(.19,0),"void",void 0,0,1.56,.1,0,0,0,1,1,.6);for(const s of[-.07,.07])t.add(new Le(.04,0),"eye",void 0,s,1.58,.23);for(const s of[-1,1]){const r=i.part(s<0?"armL":"armR",{parent:t,pos:[s*.3,1.28,.04],detail:!0});r.add(new De(.12,.6,6),"ghost",void 0,0,-.28,.12,Math.PI+.5,0,0);for(let a=-1;a<=1;a++)r.add(new De(.018,.14,4),"claw",void 0,a*.04,-.52,.34,2.2,0,a*.2)}const n=i.part("wisps",{parent:t,detail:!0});for(let s=0;s<6;s++){const r=s/6*ot;n.add(new yn(.045,0),"glow","#a9b0ff",Math.cos(r)*.72,.1+s%3*.12,Math.sin(r)*.72,r,r)}i.light("#8f96ff",0,1.2,.3,.8),i.light("#ff4d5e",0,1.9,.5,.35)},animate({parts:i,meshes:t,lod:e},n){const s=i.f;if(s.position.y=.33+Math.sin(n*ot)*.07,s.rotation.y=Math.sin(n*ot)*.12,e!=="near")return;const r=t["cloak#ghost"].geometry,a=r.attributes.position,o=r.userData.orig;for(let l=0;l<a.count;l++){const c=o[l*3],u=o[l*3+1],f=o[l*3+2],h=Math.atan2(f,c),d=Math.max(0,1-u/.6),_=1+d*(.1*Math.sin(3*h+n*ot)+.06*Math.cos(5*h-n*ot));a.setXYZ(l,c*_,u+d*.1*Math.sin(4*h-n*ot),f*_)}a.needsUpdate=!0,i.armL.rotation.x=-.15+Math.sin(n*ot)*.12,i.armR.rotation.x=-.15+Math.sin(n*ot+1)*.12,i.wisps.rotation.y=n*ot/6,i.wisps.position.y=Math.sin(n*ot*2)*.04}},vv={front:"z",build(i){i.base(53);const t=i.root.at(0,.185,0),e=Li(9);for(const h of[2.3,2.9,3.5,4.1,4.7]){const d=.5+e()*.3,_=Math.cos(h)*.72,S=Math.sin(h)*.72;t.add(new et(.16,d,.12),"riftStone",void 0,_,d/2-.02,S,(e()-.5)*.25,-h,(e()-.5)*.25)}t.add(new Et(.42,.5,.03,9),"void",void 0,0,.01,0),t.add(new ue(.46,.025,3,18),"glow","#b06bff",0,.03,0,Math.PI/2);const n=i.part("tear",{pos:[0,1.185,0]}),s=[],r=18;for(let h=0;h<r;h++){const d=h/r*ot,_=h%2?.82:1.05;s.push([Math.cos(d)*.36*_,Math.sin(d)*.62*_])}const a=new ni;s.forEach(([h,d],_)=>_?a.lineTo(h,d):a.moveTo(h,d));const o=new Kr;s.slice().reverse().forEach(([h,d],_)=>_?o.lineTo(h*.84,d*.84):o.moveTo(h*.84,d*.84)),a.holes.push(o);const l=new ea(a,{depth:.06,bevelEnabled:!1});l.translate(0,0,-.03),n.add(l,"glow","#9b4df0");const c=new ni;s.forEach(([h,d],_)=>_?c.lineTo(h*.86,d*.86):c.moveTo(h*.86,d*.86)),n.add(new Pi(c),"void"),[[.24,1],[.17,-2],[.1,3]].forEach(([h],d)=>{const _=i.part(`swirl${d}`,{parent:n,scale:[1,1.6,1],detail:!0});i.part(`arc${d}`,{parent:_,detail:!0}).add(new ue(h,.016,3,16,ot*.7),"glow","#d3a8ff",0,0,.02)});const f=i.part("debris",{pos:[0,.185,0],detail:!0});for(let h=0;h<7;h++){const d=h/7*ot;f.add(new ei(.04+h%3*.015,0),"riftStone",void 0,Math.cos(d)*.55,.25+h%4*.18,Math.sin(d)*.35,d,d)}i.light("#a24dff",0,1.2,.25,1.5)},animate({parts:i},t){const e=[1,-2,3];for(let n=0;n<3;n++)i[`arc${n}`].rotation.z=t*ot*e[n];i.debris.rotation.y=t*ot/7,i.tear.scale.set(1+Math.sin(t*ot)*.03,1+Math.cos(t*ot)*.03,1)}},mu={you:{seed:67,cloak:"hero",tunic:"tunic",ring:"#6fb3ff",gem:"#9fd0ff",head:"hood",hand:"staff",pack:!0},cleric:{seed:61,cloak:"ivory",tunic:"cloth",ring:"#ffd54a",gem:"#ffe08a",head:"circlet",hand:"mace",pack:!1},fighter:{seed:59,cloak:"tunic",tunic:"metal",ring:"#cd7f32",gem:"#ffb070",head:"helm",hand:"sword",pack:!1},wizard:{seed:57,cloak:"violet",tunic:"violet",ring:"#7b68ee",gem:"#c8b4ff",head:"hat",hand:"staff",pack:!1}};function gu(i,t){i.base(t.seed);const e=i.root.at(0,.185,0);e.add(new ue(.9,.022,3,44),"glow",t.ring,0,.02,0,Math.PI/2);for(const s of[-.08,.08])e.add(new et(.09,.1,.15),"leather",void 0,s,.05,.02);const n=i.part("body",{pos:[0,.185,0]});switch(n.add(os([[.3,.05],[.27,.4],[.2,.8],[.14,.98]],10,.5,ot-1),t.cloak),n.add(new Et(.13,.17,.55,8),t.tunic,void 0,0,.62,0),n.add(new ue(.16,.022,3,10),"leather",void 0,0,.6,0,Math.PI/2),n.add(new et(.05,.05,.02),"metal",void 0,0,.6,.17),n.add(new Ke(.13,1),"skin",void 0,0,1.1,0),t.head){case"hood":n.add(os([[.02,1.36],[.13,1.32],[.17,1.18],[.16,1.02],[.13,.96]],10,.45,ot-.9),t.cloak);break;case"circlet":n.add(new ue(.12,.018,4,12),"glow",t.gem,0,1.17,0,Math.PI/2),n.add(new on(.13,8,5,0,ot,0,1.2),"leather",void 0,0,1.11,-.01);break;case"helm":n.add(new on(.15,8,5,0,ot,0,1.7),"bronze",void 0,0,1.1,0),n.add(new et(.04,.16,.06),"bronze",void 0,0,1.06,.13),n.add(new et(.04,.12,.3),"tunic",void 0,0,1.28,-.04);break;case"hat":n.add(new Et(.26,.26,.025,10),t.cloak,void 0,0,1.19,0),n.add(new De(.15,.42,9),t.cloak,void 0,.02,1.4,-.02,0,0,-.18),n.add(new ue(.14,.015,3,10),"glow",t.gem,0,1.22,0,Math.PI/2);break}if(t.pack?(n.add(new et(.24,.3,.13),"leather",void 0,0,.8,-.2),n.add(new Et(.055,.055,.32,8),"cloth",void 0,0,1,-.2,0,0,Math.PI/2)):t.hand==="sword"?(n.add(new Et(.24,.24,.03,12),"woodDark",void 0,0,.78,-.2,Math.PI/2),n.add(new on(.06,6,4),"bronze",void 0,0,.78,-.23),n.add(new ue(.23,.015,3,14),"bronze",void 0,0,.78,-.2)):t.hand==="mace"?(n.add(new et(.16,.14,.1),"leather",void 0,.16,.5,-.12,0,.4),n.add(new Et(.035,.035,.3,6),"cloth",void 0,0,.9,-.19,0,0,.4)):(n.add(new et(.16,.2,.06),"leather",void 0,0,.75,-.19,0,0,.1),n.add(new et(.17,.03,.07),"glow",t.gem,0,.75,-.19,0,0,.1)),n.beam([.14,.92,0],[.27,.72,.1],.045,t.tunic==="metal"?"bronze":t.tunic),n.beam([-.14,.92,0],[-.2,.62,.06],.045,t.tunic==="metal"?"bronze":t.tunic),t.tunic==="metal"){for(const s of[-.15,.15])n.add(new on(.08,6,4,0,ot,0,1.6),"bronze",void 0,s,.92,0);n.add(new et(.08,.06,.03),"bronze",void 0,0,.6,.17)}if(t.hand==="staff"){e.beam([.3,0,.12],[.28,1.45,.1],.022,"wood");const s=i.part("gem",{pos:[.28,.185+1.56,.1],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new Le(.07,0),"glow",t.gem,0,0,0,0,0,0,1,1.6,1);for(let r=0;r<3;r++){const a=r/3*ot;e.beam([.28,1.44,.1],[.28+Math.cos(a)*.06,1.6,.1+Math.sin(a)*.06],.008,"wood")}i.light(t.gem,.28,1.75,.1,1.1)}else if(t.hand==="mace"){e.beam([.3,.55,.12],[.3,1.25,.1],.02,"woodDark");const s=i.part("gem",{pos:[.3,.185+1.3,.1],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new ei(.075,0),"glow",t.gem);for(let r=0;r<4;r++)s.add(new et(.02,.1,.05),"bronze",void 0,Math.cos(r/4*ot)*.075,0,Math.sin(r/4*ot)*.075,0,-(r/4)*ot);i.light(t.gem,.3,1.45,.1,.9)}else{e.add(new et(.05,.62,.014),"metal",void 0,.3,.52,.12),e.add(new et(.16,.03,.04),"bronze",void 0,.3,.84,.12),e.add(new Et(.02,.02,.16,6),"leather",void 0,.3,.94,.12);const s=i.part("gem",{pos:[.3,.185+1.04,.12],detail:!0});s.group.userData.y0=s.group.position.y,s.add(new Le(.035,0),"glow",t.gem),i.light(t.gem,.3,1.1,.12,.5)}}const _u=({parts:i},t)=>{i.body.scale.y=1+Math.sin(t*ot)*.012,i.gem.position.y=i.gem.userData.y0+Math.sin(t*ot)*.02,i.gem.rotation.y=t*ot},xv={front:"z",build(i){gu(i,mu.you)},animate:_u};function Ya(i){return{front:"z",build(t){gu(t,mu[i])},animate:_u}}function Ki(i,t,e,n=8,s="stone"){const r=Math.PI/n;i.add(new Et(t,t*1.06,e,n),s,void 0,0,e/2,0,0,r),i.add(new Et(t*1.09,t*1.09,.045,n),"stoneDark",void 0,0,e*.5,0,0,r),i.add(new et(.16,.24,.05),"dark",void 0,0,.12,t*1.03)}function Cr(i,t,e,n=8){const s=Math.PI/n;i.add(new Et(t*1.14,t*1.02,.08,n),"stoneDark",void 0,0,e+.04,0,0,s);for(let r=0;r<n;r++){const a=r/n*ot+s;i.add(new et(.07,.11,.12),"stone",void 0,Math.cos(a)*t*1.06,e+.135,Math.sin(a)*t*1.06,0,-a)}}function Mv(i,t,e,n,s=8,r="dark"){i.add(new De(t,n,s),r,void 0,0,e+n/2,0,0,Math.PI/s),i.add(new Le(.035,0),"metal",void 0,0,e+n+.02,0)}function fn(i,t,e,n,s,r=0,a="wood"){i.add(new et(t,t,t),a,void 0,e,n+t/2,s,0,r),i.add(new et(t*1.02,t*.12,t*1.02),"woodDark",void 0,e,n+t/2,s,0,r)}function Hr(i,t,e,n,s,r,a=!1){const o=a?Math.PI/2:0,l=a?s+t:s+e/2;i.add(new Et(t,t,e,9),"woodDark",void 0,n,l,r,o);for(const c of[-.3,.3]){const u=new ue(t*1.02,t*.1,3,12);i.add(u,"metal",void 0,n+0,l+(a?0:c*e),r+(a?c*e:0),a?0:Math.PI/2,0,0)}}function yl(i,t,e,n,s,r,a=1,o){const l=i.part(t,{pos:[n,s,r],detail:!0});return l.add(new De(.11*a,.34*a,6),"glow",e,0,.17*a,0),l.add(new De(.06*a,.2*a,5),"glow","#fff4d6",0,.1*a,.01,0,.4),l.add(new yn(.035*a,0),"glow",e,.06*a,.36*a,0,.3,.2),l.add(new yn(.03*a,0),"glow",e,-.05*a,.42*a,.02,.8,1.1),l}function Qr(i,t,e,n,s,r=1){const a=i.part(t,{pos:[e,n,s],detail:!0});a.group.userData.y0=n;for(let o=0;o<3;o++){const l=(.05+o*.022)*r;a.add(new Ke(l,0),"clothDark",void 0,(o%2?.03:-.03)*r,(.06+o*.14)*r,0,o,o*2)}return a}function El(i,t,e=1){i.position.y=i.userData.y0+t*.16*e;const n=.8+t*.45;i.scale.set(n,n,n)}function wl(i,t,e=1){const n=t*ot;i.scale.set(1+.1*e*Math.sin(n*3),1+.16*e*Math.sin(n*2+1),1+.1*e*Math.cos(n*4)),i.rotation.y=Math.sin(n*2)*.2}function xi(i,t,e,n,s,r,a=.7,o){const l=i.root;l.add(new Et(.014,.018,a,5),"wood",void 0,n,s+a/2,r),l.add(new Le(.025,0),"metal",void 0,n,s+a+.01,r);const c=i.part(t,{pos:[n,s+a-.04,r],detail:!0}),u=new ni;return u.moveTo(0,0),u.lineTo(-.28,-.06),u.lineTo(0,-.17),c.add(new Pi(u),"glow",e),c}function bl(i,t){i.rotation.y=Math.sin(t*ot*2)*.3,i.rotation.x=Math.sin(t*ot*3+1)*.1}const vu=["bare","forge","greater-forge","scriptorium","confluence","workshop","storehouse","factory"],Pr="#ff8a3a",$a="#cfe6ff",Oe=.185;function Za(i,t){i.add(new ue(t,t*.16,4,10),"metal");for(let e=0;e<4;e++)i.add(new et(t*.12,t*2,t*.12),"metal",void 0,0,0,0,0,0,e*Math.PI/4);for(let e=0;e<8;e++){const n=e/8*ot;i.add(new et(t*.22,t*.22,t*.24),"metal",void 0,Math.cos(n)*t*1.12,Math.sin(n)*t*1.12,0,0,0,n)}}function Sv(i){return{front:"z",build(t,e){const n=101+vu.indexOf(i)*7;t.base(n);const s=t.root.at(0,Oe,0);switch(i){case"bare":{Ki(s,.4,.95,8,"stoneDark");for(const[r,a]of[[.55,.55],[-.55,.55],[.55,-.55],[-.55,-.55]])s.add(new Et(.02,.025,1.25,5),"wood",void 0,r,.62,a);for(const r of[.55,1.1])s.beam([.55,r,.55],[-.55,r,.55],.014,"woodDark"),s.beam([.55,r,-.55],[-.55,r,-.55],.014,"woodDark"),s.beam([.55,r,.55],[.55,r,-.55],.014,"woodDark"),s.beam([-.55,r,.55],[-.55,r,-.55],.014,"woodDark");s.add(new et(.9,.03,.14),"wood",void 0,0,1.12,.5,0,0,.04),s.add(new et(.5,.03,.12),"wood",void 0,.2,.25,.75,0,.4),xi(t,"flag",e,.42,Oe+.95,-.1,.55);break}case"forge":case"greater-forge":{const r=i==="greater-forge",a=r?1.35:1.05;if(Ki(s,.4,a),Cr(s,.4,a),r)for(const l of[.3,.72])s.add(new ue(.42,.025,4,16),"copper",void 0,0,l,0,Math.PI/2);s.add(new et(.11,.17,.03),"glow",Pr,0,.13,.42),s.add(new et(.08,.1,.03),"glow",Pr,.12,a*.68,.4,0,.25),(r?[[.16,-.12],[-.2,.06]]:[[.12,-.1]]).forEach(([l,c],u)=>{s.add(new et(.2,.42,.2),"stoneDark",void 0,l,a+.2,c),s.add(new et(.24,.06,.24),"dark",void 0,l,a+.42,c),yl(t,`fire${u}`,Pr,l,Oe+a+.42,c,r?.8:.65),Qr(t,`smoke${u}`,l,Oe+a+.6,c,r?1.1:.9)}),s.add(new Et(.08,.1,.16,7),"woodDark",void 0,.5,.08,.5),s.add(new et(.2,.06,.08),"metal",void 0,.5,.19,.5,0,.5),xi(t,"flag",e,-.34,Oe+a+.08,.2,.5),t.light(Pr,0,a+.5,0,r?1.2:.9);break}case"scriptorium":{Ki(s,.4,1.05),Mv(s,.5,1.05,.6,8,"dark"),s.add(new ue(.44,.02,3,16),"woodDark",void 0,0,1.06,0,Math.PI/2),s.add(new et(.14,.18,.03),"glow",$a,0,.72,.41),s.add(new et(.03,.2,.03),"dark",void 0,0,.72,.42),s.add(new et(.16,.03,.03),"dark",void 0,0,.72,.42),s.add(new et(.1,.12,.03),"glow",e,.28,.5,.29,0,.75);const r=t.part("pages",{pos:[0,Oe+1.75,0],detail:!0});for(let a=0;a<4;a++){const o=a/4*ot;r.add(new et(.1,.13,.008),"glow",$a,Math.cos(o)*.3,a%2*.1-.05,Math.sin(o)*.3,.3,-o,.2)}s.add(new et(.05,.3,.05),"woodDark",void 0,.55,.15,.45),s.add(new et(.18,.02,.14),"cloth",void 0,.55,.31,.45,-.4,.3),xi(t,"flag",e,-.3,Oe+1,.3,.5),t.light($a,0,.8,.5,.8);break}case"confluence":{Ki(s,.4,.85),Cr(s,.4,.85),s.add(new Et(.34,.3,.1,8),"stoneDark",void 0,0,.9,0,0,Math.PI/8);const r=t.part("crystals",{pos:[0,Oe+.9,0],uniqueMaterial:!0});r.crystal("mana",e,.11,.5,-.28,.02,.06,.1,-.7),r.crystal("mana","#f4f1ea",.11,.5,.28,.02,-.06,-.1,.7),r.crystal("mana",e,.05,.22,-.1,0,.22,.4,-.2),r.crystal("mana","#f4f1ea",.05,.22,.12,0,-.2,-.4,.2),t.part("ring",{pos:[0,Oe+1.55,0],rot:[1.3,0,.2],detail:!0}).add(new ue(.22,.016,3,20),"glow",e),t.part("ring2",{pos:[0,Oe+1.55,0],rot:[1.8,0,-.4],detail:!0}).add(new ue(.17,.014,3,18),"glow","#fff6e0"),t.part("drop",{pos:[0,Oe+1.55,0],detail:!0}).add(new Le(.07,0),"glow",e,0,0,0,0,0,0,1,1.5,1),s.add(new et(.1,.13,.03),"glow",e,0,.55,.41),xi(t,"flag",e,.42,Oe+.85,-.2,.45),t.light(e,0,1.6,0,1.1);break}case"workshop":{Ki(s,.38,1),Cr(s,.38,1);for(const o of[-.32,.32])s.add(new Et(.025,.03,.62,5),"wood",void 0,.82,.31,o);s.add(new et(.62,.035,.8),"woodDark",void 0,.55,.7,0,0,0,.35);for(const o of[.4,.55,.7])s.add(new et(.06,.02,.82),"wood",void 0,o,.72+(o-.55)*-.36,0,0,0,.35);s.add(new et(.4,.05,.22),"wood",void 0,.6,.3,.2);for(const o of[.12,.28])s.add(new et(.04,.28,.04),"woodDark",void 0,.6,.14,o);s.add(new et(.03,.14,.03),"wood",void 0,.5,.38,.2,0,0,.8),s.add(new et(.08,.05,.04),"metal",void 0,.45,.43,.2,0,0,.8),fn(s,.16,.65,0,-.3,.3),s.add(new Et(.03,.03,.2,6),"woodDark",void 0,.42,.6,-.05,0,0,Math.PI/2);const r=t.part("gear",{pos:[.5,Oe+.6,-.05],rot:[0,Math.PI/2,0],detail:!0});Za(r,.16);const a=t.part("gear2",{pos:[.5,Oe+.88,-.05],rot:[0,Math.PI/2,0],detail:!0});Za(a,.09),s.add(new et(.1,.12,.03),"glow",e,-.1,.5,.39,0,-.25),xi(t,"flag",e,-.32,Oe+1,.2,.5),t.light(e,0,.7,.4,.5);break}case"storehouse":{Ki(s,.5,.75,10),Cr(s,.5,.75,10),s.add(new Et(.44,.44,.04,10),"woodDark",void 0,0,.78,0,0,Math.PI/10),fn(s,.2,.1,.8,-.1,.2),fn(s,.15,-.16,.8,.12,.9),fn(s,.12,.1,1,-.1,.5,"woodDark"),fn(s,.2,.72,0,.3,.2),fn(s,.16,.62,0,-.5,.9),fn(s,.14,.72,.2,.3,.7,"woodDark"),Hr(s,.1,.24,-.7,0,.3),Hr(s,.1,.24,-.62,0,-.42,!0),Hr(s,.09,.22,-.4,0,-.66),s.add(new on(.11,6,5),"clothDark",void 0,.3,.1,-.68,0,0,0,1,.8,1),s.add(new et(.03,.03,.34),"woodDark",void 0,.3,.62,.6);const r=t.part("sign",{pos:[.3,Oe+.62,.72],detail:!0});r.add(new et(.2,.14,.02),"glow",e,0,-.1,0),r.add(new et(.01,.06,.01),"metal",void 0,0,-.03,0),t.light(e,.3,.55,.75,.4);break}case"factory":{s.add(new et(.72,.16,.72),"stoneDark",void 0,0,.08,0),s.add(new et(.62,1.1,.62),"brick",void 0,0,.71,0);for(const o of[.45,.85])s.add(new et(.66,.04,.66),"stoneDark",void 0,0,o,0);s.add(new et(.7,.06,.7),"dark",void 0,0,1.29,0),s.add(new et(.16,.24,.05),"dark",void 0,0,.28,.32);for(const o of[-.18,.18])s.add(new et(.1,.12,.03),"glow",e,o,.7,.32);s.add(new Et(.1,.13,.8,8),"stoneDark",void 0,-.18,1.7,-.18),s.add(new Et(.13,.11,.08,8),"dark",void 0,-.18,2.12,-.18),Qr(t,"smoke0",-.18,Oe+2.18,-.18,1.2),s.add(new Et(.11,.11,.22,8),"metal",void 0,.16,1.43,.1);const r=t.part("rod",{pos:[.16,Oe+1.54,.1],detail:!0});r.add(new Et(.035,.035,.3,6),"metal",void 0,0,.15,0),r.add(new et(.16,.05,.1),"dark",void 0,0,.32,0),s.add(new Et(.03,.03,.16,6),"woodDark",void 0,.36,.6,.05,0,0,Math.PI/2);const a=t.part("gear",{pos:[.4,Oe+.6,.05],rot:[0,Math.PI/2,0],detail:!0});Za(a,.15),s.add(new et(.34,.05,.16),"metal",void 0,.56,.24,.25),fn(s,.12,.72,.27,.25,.2),xi(t,"flag",e,-.28,Oe+1.32,.26,.5),t.light(e,0,.7,.4,.5);break}}},animate({parts:t},e){t.flag&&bl(t.flag,e);for(let n=0;n<2;n++)t[`fire${n}`]&&wl(t[`fire${n}`],e),t[`smoke${n}`]&&El(t[`smoke${n}`],e);t.pages&&(t.pages.rotation.y=e*ot,t.pages.position.y=Oe+1.75+Math.sin(e*ot*2)*.03),t.ring&&(t.ring.rotation.z=e*ot),t.ring2&&(t.ring2.rotation.z=-e*ot),t.drop&&(t.drop.rotation.y=e*ot,t.drop.position.y=Oe+1.55+Math.sin(e*ot)*.04),t.gear&&(t.gear.rotation.z=e*ot),t.gear2&&(t.gear2.rotation.z=-e*ot*(16/9)),t.sign&&(t.sign.rotation.z=Math.sin(e*ot)*.12),t.rod&&(t.rod.position.y=Oe+1.54+(Math.sin(e*ot*2)*.5+.5)*.14)}}}const Ka="#fff1c4",eh="#ff7a2a";function nh(i){return{front:"z",build(t){t.base(i?71:73);const e=t.root.at(0,.185,0);e.add(new Et(.5,.56,.1,8),"stone",void 0,0,.05,0,0,Math.PI/8),e.add(new Et(.36,.4,.1,8),"stoneDark",void 0,0,.15,0,0,Math.PI/8),e.add(new Et(.12,.2,.5,8),"stone",void 0,0,.45,0);for(let n=0;n<3;n++){const s=n/3*ot+.4;e.beam([Math.cos(s)*.14,.62,Math.sin(s)*.14],[Math.cos(s)*.3,.98,Math.sin(s)*.3],.018,"dark")}e.add(new Et(.32,.18,.2,10,1,!0),"dark",void 0,0,.98,0),e.add(new Et(.18,.18,.03,10),"dark",void 0,0,.89,0),e.add(new ue(.32,.022,4,12),"metal",void 0,0,1.08,0,Math.PI/2);for(let n=0;n<5;n++){const s=n/5*ot;e.add(new ei(.05,0),i?"glow":"rock",i?eh:void 0,Math.cos(s)*.14,.96,Math.sin(s)*.14,n,n)}for(let n=0;n<4;n++){const s=n/4*ot+Math.PI/4;e.add(new et(.1,.22,.1),"stoneDark",void 0,Math.cos(s)*.62,.11,Math.sin(s)*.62,0,-s),e.add(new Le(.03,0),i?"glow":"metal",i?Ka:void 0,Math.cos(s)*.6,.2,Math.sin(s)*.6)}for(let n=0;n<3;n++)e.add(new Et(.04,.04,.3,5),"woodDark",void 0,.6+n%2*.05,.04+Math.floor(n/2)*.07,-.5,Math.PI/2,0,.2);if(i){yl(t,"fire",Ka,0,.185+.98,0,1.4);const n=t.part("sparks",{pos:[0,.185+1.3,0],detail:!0});for(let s=0;s<4;s++){const r=s/4*ot;n.add(new yn(.025,0),"glow",eh,Math.cos(r)*.18,s*.09,Math.sin(r)*.18,r,r)}t.light(Ka,0,1.4,0,1.4)}else e.add(new Ke(.05,0),"clothDark",void 0,.05,1.12,0),e.add(new Ke(.035,0),"clothDark",void 0,-.04,1.24,.03)},animate({parts:t},e){t.fire&&wl(t.fire,e,1.2),t.sparks&&(t.sparks.rotation.y=e*ot,t.sparks.position.y=.185+1.3+e*.2,t.sparks.scale.setScalar(1-e*.5))}}}const ws="#dfe9ff",yv={front:"z",build(i){i.base(79);const t=i.root.at(0,.185,0);t.add(new Et(.42,.48,.22,8),"stone",void 0,0,.11,0,0,Math.PI/8);const e=.3,n=[[e,e],[-e,e],[e,-e],[-e,-e]];for(const[a,o]of n)t.beam([a*1.2,.2,o*1.2],[a*.8,1.55,o*.8],.035,"wood");for(const a of[.6,1.1]){const o=1.2-a/1.55*.4;t.beam([e*o,a,e*o],[-e*o,a,e*o],.02,"woodDark"),t.beam([e*o,a,-e*o],[-e*o,a,-e*o],.02,"woodDark"),t.beam([e*o,a,e*o],[e*o,a,-e*o],.02,"woodDark"),t.beam([-e*o,a,e*o],[-e*o,a,-e*o],.02,"woodDark"),t.beam([e*o,a,e*o],[-e*(o-.13),a+.45,e*(o-.13)],.012,"woodDark"),t.beam([-e*o,a,e*o],[e*(o-.13),a+.45,e*(o-.13)],.012,"woodDark")}for(let a=0;a<6;a++)t.add(new et(.2,.02,.02),"wood",void 0,0,.35+a*.22,.42-a*.03);for(const a of[-.1,.1])t.beam([a,.25,.44],[a,1.6,.26],.014,"wood");t.add(new et(.76,.06,.76),"woodDark",void 0,0,1.58,0);for(const[a,o]of n)t.add(new et(.035,.28,.035),"wood",void 0,a*1.2,1.74,o*1.2);for(const a of[-1,1])t.add(new et(.74,.025,.025),"wood",void 0,0,1.86,a*.36),t.add(new et(.025,.025,.74),"wood",void 0,a*.36,1.86,0);for(const[a,o]of n)t.add(new et(.03,.55,.03),"wood",void 0,a*1.05,2.12,o*1.05);t.add(new De(.6,.42,4),"dark",void 0,0,2.58,0,0,Math.PI/4),t.add(new Le(.04,0),"glow",ws,0,2.82,0),t.add(new et(.02,.02,.16),"metal",void 0,0,2.34,.42);const s=i.part("lamp",{pos:[0,.185+2.33,.5],detail:!0});s.add(new Le(.06,0),"glow",ws,0,-.09,0,0,0,0,1,1.3,1),s.add(new et(.03,.03,.03),"metal",void 0,0,-.02,0),t.add(new Et(.06,.08,.16,6),"woodDark",void 0,0,1.68,0);const r=i.part("ballista",{pos:[0,.185+1.78,0],detail:!0});r.add(new et(.06,.05,.5),"wood",void 0,0,0,.05,-.15),r.add(new et(.44,.03,.03),"woodDark",void 0,0,.03,.26,-.15),r.add(new Et(.008,.008,.44,4),"clothDark",void 0,0,.04,.14,-.15,0,Math.PI/2),r.add(new Et(.01,.01,.34,4),"metal",void 0,0,.05,.12,Math.PI/2-.15),r.add(new De(.02,.06,4),"glow",ws,0,.08,.31,Math.PI/2-.15),t.add(new ue(.44,.02,4,16),"glow",ws,0,.2,0,Math.PI/2),t.add(new Et(.07,.06,.28,6),"leather",void 0,.6,.14,.3);for(let a=0;a<3;a++)t.add(new Et(.008,.008,.36,3),"metal",void 0,.6+(a-1)*.03,.3,.3+a%2*.03);i.light(ws,0,2.3,.5,1)},animate({parts:i},t){i.ballista.rotation.y=Math.sin(t*ot)*.45,i.lamp.rotation.x=Math.sin(t*ot+.6)*.18}},Ja="#ff8a3a",Ev={front:"z",build(i,t){i.base(83);const e=i.root.at(0,.185,0);e.add(new et(.66,.36,.56),"brick",void 0,-.12,.18,-.05),e.add(new et(.7,.05,.6),"stoneDark",void 0,-.12,.38,-.05),e.add(new et(.14,.12,.03),"glow",Ja,-.12,.14,.24),e.add(new on(.28,9,7),"copper",void 0,-.12,.64,-.05),e.add(new Et(.1,.18,.22,9),"copper",void 0,-.12,.98,-.05),e.add(new ue(.2,.02,4,12),"metal",void 0,-.12,.86,-.05,Math.PI/2);const n=[[-.12,1.1,-.05],[.02,1.26,-.02],[.3,1.3,.06],[.5,1.15,.14],[.58,.85,.2],[.58,.55,.2]];for(let a=0;a<n.length-1;a++)e.beam(n[a],n[a+1],.035,"copper");for(let a=0;a<3;a++)e.add(new ue(.09,.02,4,10),"copper",void 0,.58,.95-a*.12,.2,Math.PI/2);e.add(new Et(.22,.18,.34,10,1,!0),"woodDark",void 0,.58,.17,.2),e.add(new Et(.19,.19,.02,10),"woodDark",void 0,.58,.01,.2),e.add(new ue(.22,.015,4,12),"metal",void 0,.58,.3,.2,Math.PI/2),i.part("brew",{pos:[.58,.185+.3,.2],uniqueMaterial:!0}).add(new Et(.2,.2,.03,10),"mana",t),i.part("drip",{pos:[.58,.185+.5,.2],detail:!0}).add(new Le(.03,0),"glow",t,0,0,0,0,0,0,1,1.6,1),Qr(i,"vapour",-.12,.185+1.1,-.05,.7),yl(i,"fire",Ja,-.12,.185+.02,.28,.45),fn(e,.16,-.66,0,.36,.3),fn(e,.12,-.6,.16,.34,.9,"woodDark"),Hr(e,.09,.22,-.5,0,-.55,!0);for(let a=0;a<3;a++){const o=.15+a*.14;e.add(new Et(.03,.05,.1,6),"glow",a===1?t:"#f4f1ea",o,.05,.62),e.add(new Et(.012,.012,.05,5),"metal",void 0,o,.12,.62)}e.add(new et(.04,.04,.4),"wood",void 0,-.12,.5,-.5,-.6),i.light(t,.58,.6,.2,.8),i.light(Ja,-.12,.2,.35,.5)},animate({parts:i,meshes:t},e){El(i.vapour,e,.7),wl(i.fire,e),i.drip.position.y=.185+.5-e%1*.16,i.drip.scale.y=1-e%1*.5;const n=t["brew#opaque"].material;n.emissiveIntensity=n.userData.base*(1+.3*Math.sin(e*ot))}},Qa="#ffd9a0",Lr=.185,wv={front:"x",build(i){i.base(89,1.15,.8);const t=i.part("horse",{pos:[0,Lr+.32,0]});t.add(new et(.62,.24,.22),"mule",void 0,0,.3,0),t.add(new et(.2,.2,.2),"mule",void 0,-.3,.32,0,0,0,.3),t.add(new et(.14,.34,.14),"mule",void 0,.36,.5,0,0,0,-.55),t.add(new et(.24,.11,.1),"mule",void 0,.52,.66,0,0,0,-.25);for(const u of[-.04,.04])t.add(new De(.022,.1,4),"mule",void 0,.42,.74,u,u*3,0,.1);for(let u=0;u<4;u++)t.add(new et(.05,.08,.04),"dark",void 0,.3+u*.05,.62-u*.03,0,0,0,-.5);i.part("tail",{parent:t,pos:[-.36,.36,0],detail:!0}).add(new De(.03,.3,4),"dark",void 0,-.06,-.12,0,0,0,.4),[[.22,.07,0],[.22,-.07,.15],[-.22,.07,.55],[-.22,-.07,.7]].forEach(([u,f],h)=>{const d=i.part(`hip${h}`,{parent:t,pos:[u,.22,f],detail:!0});d.add(new et(.06,.3,.06),"mule",void 0,0,-.15,0),d.add(new et(.065,.045,.065),"hoof",void 0,0,-.32,0)}),t.add(new et(.3,.05,.28),"tunic",void 0,.02,.43,0),t.add(new et(.24,.06,.2),"leather",void 0,.02,.47,0),t.add(new Et(.035,.035,.26,6),"leather",void 0,-.14,.42,.14,0,0,.3),t.add(new Et(.04,.04,.02,6),"cloth",void 0,-.14-.12*Math.sin(-.3),.42+.12*Math.cos(.3),.14,0,0,.3);const s=i.part("rider",{parent:t,pos:[.02,.5,0],detail:!0});for(const u of[-.12,.12])s.add(new et(.08,.22,.07),"leather",void 0,0,-.06,u,0,0,0);s.add(new Et(.1,.13,.32,7),"clothDark",void 0,0,.18,0,0,0,-.15),s.add(new Ke(.07,0),"skin",void 0,.03,.42,0),s.add(new De(.09,.15,7),"clothDark",void 0,.02,.5,-.01,0,0,-.2),s.beam([.08,.28,.06],[.3,.2,.05],.028,"clothDark"),s.beam([.06,.28,-.06],[.28,.2,-.05],.028,"clothDark");for(const u of[-.05,.05])s.beam([.3,.2,u],[.5,.16,u*1.2],.006,"leather");i.part("cloak",{parent:s,pos:[-.06,.34,0],detail:!0}).add(new De(.16,.42,6,1,!0),"clothDark",void 0,-.14,-.1,0,0,0,1.1),s.add(new Et(.01,.012,.7,5),"wood",void 0,-.1,.35,-.16,0,0,.2);const a=i.part("flag",{parent:s,pos:[-.17,.68,-.16],detail:!0}),o=new ni;o.moveTo(0,0),o.lineTo(-.24,-.05),o.lineTo(0,-.13),a.add(new Pi(o),"glow",Qa,0,0,0,0,Math.PI/2);const l=i.part("lamp",{parent:t,pos:[.18,.5,.16],detail:!0});l.add(new Le(.04,0),"glow",Qa,0,-.08,0),l.add(new Et(.005,.005,.08,3),"metal",void 0,0,-.03,0);const c=i.part("dust",{pos:[-.55,Lr+.05,0],detail:!0});for(let u=0;u<3;u++)c.add(new Ke(.045+u*.02,0),"clothDark",void 0,-u*.12,.04+u*.05,(u-1)*.08,u,u);i.light(Qa,.2,.9,.16,.7)},animate({parts:i},t){const e=t*ot*2;i.horse.position.y=Lr+.32+Math.abs(Math.sin(e))*.05,i.horse.rotation.z=Math.sin(e)*.05;const n=[0,.15,.55,.7];for(let s=0;s<4;s++)i[`hip${s}`].rotation.z=Math.sin(e+n[s]*ot)*.7;i.tail.rotation.z=Math.sin(e+1)*.25-.3,i.rider.rotation.z=Math.sin(e)*.05-.1,i.cloak.rotation.z=.2+Math.sin(e+.5)*.15,bl(i.flag,t*2),i.lamp.rotation.z=Math.sin(e+2)*.3,i.dust.scale.setScalar(.8+t*2%1*.5),i.dust.position.y=Lr+.05+t*2%1*.08}},bv={front:"z",build(i,t){i.base(97);const e=i.root.at(0,.185,0),n=Li(17);for(let l=0;l<6;l++){const c=l/6*ot+n()*.4,u=.38+n()*.16;e.add(new et(.28,.06,.2),"rock",void 0,Math.cos(c)*u,.05+n()*.05,Math.sin(c)*u,(n()-.5)*.3-.35,-c,(n()-.5)*.3)}e.add(new Et(.22,.28,.06,7),"void",void 0,0,.03,0);const s=i.part("ring",{pos:[0,.185+.03,0],uniqueMaterial:!0});s.add(new ue(.58,.03,4,24),"glow",t,0,0,0,Math.PI/2),s.add(new ue(.3,.025,4,16),"glow",t,0,.02,0,Math.PI/2);const r=i.part("column",{pos:[0,.185+.05,0],uniqueMaterial:!0});r.crystal("mana",t,.13,.8,0,0,0,0,0),r.crystal("mana",t,.06,.5,.12,0,.08,.15,-.3),r.crystal("mana",t,.06,.45,-.1,0,-.1,-.2,.3),i.part("sheath",{pos:[0,.185+.05,0],detail:!0}).add(new De(.26,1.3,7,1,!0),"ghost",void 0,0,.65,0,Math.PI,0,0);for(const[l,c,u]of[["sprayA",.34,1],["sprayB",.5,-1]]){const f=i.part(l,{pos:[0,.7849999999999999,0],detail:!0});for(let h=0;h<6;h++){const d=h/6*ot;f.add(new yn(.05+h%2*.02,0),"glow",t,Math.cos(d)*c,(h*u+6)%6*.08,Math.sin(d)*c,d,d*2)}}const o=i.part("motes",{pos:[0,.185+.3,0],detail:!0});for(let l=0;l<5;l++){const c=l/5*ot+.3;o.add(new Le(.03,0),"glow","#ffffff",Math.cos(c)*.2,l*.15,Math.sin(c)*.2)}i.light(t,0,.9,0,1.6)},animate({parts:i,meshes:t},e){i.column.rotation.y=e*ot*.5,i.column.scale.y=1+Math.sin(e*ot*2)*.05,i.sheath.scale.set(1+Math.sin(e*ot*2)*.12,1+Math.sin(e*ot*2+1)*.06,1+Math.sin(e*ot*2)*.12),i.sprayA.rotation.y=e*ot,i.sprayA.position.y=.185+.6+Math.sin(e*ot)*.18,i.sprayB.rotation.y=-e*ot,i.sprayB.position.y=.185+.6+Math.cos(e*ot)*.14,i.motes.position.y=.185+.3+e*.5,i.motes.scale.setScalar(1-e*.6);for(const n of["ring#opaque","column#opaque"]){const s=t[n].material;s.emissiveIntensity=s.userData.base*(1.1+.45*Math.sin(e*ot*2))}}},ja="#9fd8ff",ih="#b9c0d6";function to(i){return{front:"z",build(t){if(i==="shadow"){t.base(131),t.root.at(0,.185,0).add(new Et(.62,.7,.025,12),"void",void 0,0,.01,0);const n=t.part("f",{pos:[0,.185,0]});n.add(new on(.34,8,6),"void",void 0,0,.36,-.05,-.3,0,0,1,.9,1.1),n.add(new on(.2,7,5),"void",void 0,0,.66,.16,0,0,0,1,.8,1);for(const r of[-.06,.06])n.add(new Le(.035,0),"eye",void 0,r,.68,.33);for(const r of[-1,1]){const a=t.part(r<0?"armL":"armR",{parent:n,pos:[r*.26,.5,.12],detail:!0});a.beam([0,0,0],[r*.18,-.42,.28],.05,"void");for(let o=-1;o<=1;o++)a.add(new De(.016,.12,4),"claw",void 0,r*.18+o*.04,-.46,.36,1.6,0,o*.3)}const s=t.part("wisps",{parent:n,detail:!0});for(let r=0;r<5;r++){const a=r/5*ot;s.add(new De(.035,.22,4),"void",void 0,Math.cos(a)*.5,.1,Math.sin(a)*.5,Math.cos(a)*.6,0,-Math.sin(a)*.6)}t.light("#ff4d5e",0,.7,.35,.35)}else if(i==="specter"){t.base(137);const e=t.part("f",{pos:[0,.45,0]});e.add(os([[.14,0],[.34,.35],[.3,.9],[.26,1.3],[.12,1.62]],9),"ghost"),e.add(new Ke(.16,0),"void",void 0,0,1.68,.06,0,0,0,1,1.25,.8),e.add(os([[.03,2],[.2,1.92],[.26,1.7],[.22,1.5]],9,.4,ot-.8),"ghost");for(const n of[-.06,.06])e.add(new Le(.03,0),"eye",void 0,n,1.72,.2);for(const n of[-1,1]){const s=t.part(n<0?"armL":"armR",{parent:e,pos:[n*.24,1.35,.02],detail:!0});s.beam([0,0,0],[n*.5,.25,.1],.06,"ghost"),s.add(new Le(.045,0),"ghost",void 0,n*.54,.28,.11);for(let r=0;r<4;r++)s.add(new ue(.03,.008,3,6),"glow",ih,n*.56,.22-r*.07,.11,r%2*Math.PI/2,0,0)}for(let n=0;n<5;n++)e.add(new ue(.03,.008,3,6),"glow",ih,.2,.75-n*.07,.24,n%2*Math.PI/2,.2,0);t.light("#8f96ff",0,1.4,.3,.7)}else{t.base(139);const e=t.part("f",{pos:[0,1.1,0]}),n=t.part("core",{parent:e,uniqueMaterial:!0});n.add(new Ke(.22,1),"glow",ja),n.add(new Ke(.12,0),"glow","#ffffff",0,0,.06);const s=t.part("tails",{parent:e,detail:!0});for(let a=0;a<5;a++){const o=a/5*ot+.5,l=Math.cos(o)*.12,c=Math.sin(o)*.12;s.beam([l,-.1,c],[l*3.5,-.55-a%2*.15,c*3.5-.15],.02,"ghost")}const r=t.part("ring",{parent:e,rot:[.5,0,.2],detail:!0});for(let a=0;a<7;a++){const o=a/7*ot;r.add(new yn(.035,0),"glow",ja,Math.cos(o)*.42,0,Math.sin(o)*.42,o,o)}t.root.at(0,.185,0).add(new Et(.34,.4,.02,12),"glow","#4a7ea8",0,.01,0),t.light(ja,0,1.1,0,1.2)}},animate({parts:t,meshes:e},n){const s=n*ot;if(i==="shadow")t.f.position.y=.185+Math.abs(Math.sin(s))*.03,t.f.rotation.y=Math.sin(s)*.15,t.f.scale.y=1+Math.sin(s*2)*.03,t.armL&&(t.armL.rotation.x=Math.sin(s)*.15,t.armR.rotation.x=Math.sin(s+1.5)*.15,t.wisps.rotation.y=s/5);else if(i==="specter")t.f.position.y=.45+Math.sin(s)*.1,t.f.rotation.z=Math.sin(s*.5)*.06,t.armL&&(t.armL.rotation.z=Math.sin(s)*.12,t.armR.rotation.z=-Math.sin(s+.7)*.12);else{t.f.position.set(Math.sin(s*2)*.16,1.1+Math.sin(s)*.12,Math.sin(s)*.1),t.core.rotation.y=s,t.core.scale.setScalar(1+Math.sin(s*3)*.1),t.ring&&(t.ring.rotation.y=-s);const r=e["core#opaque"].material;r.emissiveIntensity=r.userData.base*(1+.4*Math.sin(s*3))}}}}const Tv={front:"z",build(i,t){i.base(103);const e=i.root.at(0,.185,0);for(let o=0;o<3;o++)e.add(new Et(.11,.11,.02,6),"stone",void 0,(o-1)*.06,.01,.5+o*.16,0,o);const n=12;for(let o=0;o<n;o++){const l=o/n*ot,c=.62;e.add(new et(.17,.19,.14),o%3?"stone":"stoneDark",void 0,Math.cos(l)*c,.82+Math.sin(l)*c,0,0,0,l)}for(const o of[-1,1])e.add(new et(.2,.7,.24),"stoneDark",void 0,o*.62,.33,-.02,0,0,o*.08),e.add(new et(.3,.1,.34),"stone",void 0,o*.66,.05,-.02),e.add(new on(.1,5,4),"grass",void 0,o*.72,.1,.16,0,0,0,1,.5,1);for(const o of[-1,1]){e.add(new Et(.006,.006,.12,3),"metal",void 0,o*.3,1.34,.1);const l=i.part(o<0?"lampL":"lampR",{pos:[o*.3,.185+1.28,.1],detail:!0});l.add(new et(.06,.08,.06),"metal",void 0,0,-.04,0),l.add(new Le(.035,0),"glow","#ffd9a0",0,-.04,0)}i.part("disc",{pos:[0,.185+.82,0],uniqueMaterial:!0}).add(new Et(.5,.5,.02,24),"mana",t,0,0,0,Math.PI/2);const r=i.part("ripple",{pos:[0,.185+.82,.03],detail:!0});for(let o=0;o<3;o++)r.add(new ue(.12+o*.13,.012,3,20),"glow","#ffffff",0,0,0,0,0,o*.4);const a=i.part("motes",{pos:[0,.185+.82,.1],detail:!0});for(let o=0;o<6;o++){const l=o/6*ot;a.add(new Le(.025,0),"glow",t,Math.cos(l)*.3,Math.sin(l)*.3,o*.06)}i.light(t,0,.9,.3,1.2)},animate({parts:i,meshes:t},e){const n=e*ot;i.disc.rotation.y=n,i.disc.scale.set(1+Math.sin(n)*.03,1,1+Math.sin(n)*.03),i.ripple.rotation.z=-n*.5,i.ripple.scale.setScalar(.8+e*.35),i.motes.position.z=.1+e*.35,i.motes.rotation.z=n*.3,i.motes.scale.setScalar(1-e*.5),i.lampL.rotation.z=Math.sin(n)*.2,i.lampR.rotation.z=Math.sin(n+1)*.2;const s=t["disc#opaque"].material;s.emissiveIntensity=s.userData.base*(1.2+.3*Math.sin(n))}},Ir="#ffe9a8",Av={front:"z",build(i){i.base(107,.85,.85);const t=i.root.at(0,.185,0);t.add(new on(.42,9,6),"grass",void 0,0,-.08,0,0,0,0,1,.55,1),t.add(new on(.22,7,5),"grass",void 0,.36,-.02,.2,0,0,0,1,.5,1),t.add(new Et(.07,.08,.6,6),"woodDark",void 0,-.3,.07,-.35,0,.6,Math.PI/2);const e=Li(29);[[.18,.1,.3,.28],[-.2,.12,.34,.2],[.02,.1,-.18,.16],[.3,.1,-.12,.12]].forEach(([r,a,o,l])=>{t.add(new Et(.035,.05,o,6),"cloth",void 0,r,.1+o/2,a,(e()-.5)*.2,0,(e()-.5)*.2),t.add(new De(l,l*.7,8),"glow",Ir,r,.12+o+l*.2,a);for(let c=0;c<3;c++)t.add(new Le(.018,0),"cloth",void 0,r+(e()-.5)*l,.12+o+l*.25,a+(e()-.5)*l)}),t.beam([-.05,.14,.08],[-.02,.62,.1],.014,"grass");for(let r=0;r<2;r++)t.add(new De(.06,.16,4),"grass",void 0,-.05+(r?.08:-.08),.32+r*.1,.09,0,0,r?-1.2:1.2);const s=i.part("bloom",{pos:[-.02,.185+.64,.1],uniqueMaterial:!0});for(let r=0;r<6;r++){const a=r/6*ot;s.add(new De(.045,.14,4),"glow","#fff7e0",Math.cos(a)*.05,.05,Math.sin(a)*.05,Math.sin(a)*.9,0,-Math.cos(a)*.9)}s.add(new Le(.03,0),"glow",Ir,0,.03,0);for(const[r,a,o]of[["fliesA",.4,.5],["fliesB",.56,.32]]){const l=i.part(r,{pos:[0,.185+o,0],detail:!0});for(let c=0;c<4;c++){const u=c/4*ot+a;l.add(new Le(.018,0),"glow",Ir,Math.cos(u)*a,c%2*.12,Math.sin(u)*a)}}i.light(Ir,0,.5,0,.6)},animate({parts:i,meshes:t},e){const n=e*ot;i.bloom.rotation.y=n*.3,i.bloom.scale.set(1+Math.sin(n)*.15,1,1+Math.sin(n)*.15),i.fliesA.rotation.y=n,i.fliesA.position.y=.185+.5+Math.sin(n*2)*.05,i.fliesB.rotation.y=-n*.7,i.fliesB.position.y=.185+.32+Math.cos(n*2)*.05;const s=t["bloom#opaque"].material;s.emissiveIntensity=s.userData.base*(1+.3*Math.sin(n))}},Rv={front:"z",build(i,t){i.base(113,.62,.62);const e=i.root.at(0,.185,0),n=Li(31),s=[[.26,.09],[.21,.08],[.16,.07],[.11,.07]];let r=0;s.forEach(([o,l],c)=>{e.add(new Et(o,o*1.05,l,6),c%2?"stone":"rock",void 0,(n()-.5)*.04,r+l/2,(n()-.5)*.04,0,n()*2),r+=l}),e.add(new Le(.05,0),"glow",t,0,r+.05,0),e.add(new Et(.02,.025,.62,5),"wood",void 0,.3,.31,.1),e.add(new et(.26,.08,.02),"woodDark",void 0,.36,.5,.11,0,-.2),e.add(new De(.04,.05,4),"woodDark",void 0,.51,.5,.14,0,-.2,-Math.PI/2),xi(i,"flag",t,.3,.185+.62,.1,.32),i.part("mote",{pos:[0,.185+r+.2,0],detail:!0}).add(new yn(.025,0),"glow",t),i.light(t,0,.5,0,.35)},animate({parts:i},t){bl(i.flag,t),i.mote.position.y=.185+.51+Math.sin(t*ot)*.06,i.mote.rotation.y=t*ot}},Fn=.185;function Cv(i){for(let t=-4;t<=4;t++)i.add(new et(.1,.03,.6),"woodDark",void 0,t*.24,.015,0);for(const t of[-.2,.2])i.add(new et(2.1,.03,.035),"metal",void 0,0,.045,t)}function sh(i,t,e,n){t.forEach((s,r)=>{for(const a of[-.24,.24]){const o=i.part(`wheel${r}${a<0?"a":"b"}`,{pos:[s,n,a],detail:!0});o.add(new Et(e,e,.05,10),"metal",void 0,0,0,0,Math.PI/2),o.add(new et(.03,e*1.6,.06),"dark",void 0,0,0,0,0,0,.5),o.add(new et(.03,e*1.6,.06),"dark",void 0,0,0,0,0,0,-.5)}})}function rh(i){return{front:"x",build(t,e){t.base(i==="engine"?127:129,1.3,.7);const n=t.root.at(0,Fn,0);if(Cv(n),i==="engine"){n.add(new et(1.4,.08,.5),"dark",void 0,0,.26,0),n.add(new Et(.22,.22,.86,12),"brick",void 0,.12,.5,0,0,0,Math.PI/2);for(const o of[-.12,.2,.44])n.add(new ue(.225,.015,4,12),"copper",void 0,o,.5,0,0,Math.PI/2);n.add(new Et(.16,.2,.1,12),"metal",void 0,.6,.5,0,0,0,Math.PI/2),n.add(new Et(.07,.09,.32,8),"dark",void 0,.42,.85,0),n.add(new Et(.1,.07,.06,8),"dark",void 0,.42,1.03,0),n.add(new on(.08,7,5),"copper",void 0,.1,.76,0),n.add(new et(.44,.5,.5),"brick",void 0,-.42,.55,0),n.add(new et(.5,.05,.56),"dark",void 0,-.42,.82,0);for(const o of[-.26,.26])n.add(new et(.2,.18,.02),"glow","#ffd9a0",-.4,.62,o);n.add(new et(.02,.18,.2),"glow","#ffd9a0",-.65,.62,0);for(let o=0;o<4;o++)n.beam([.66,.36,-.24+o*.16],[.82,.1,-.24+o*.16],.012,"metal");const s=t.part("lamp",{pos:[.66,Fn+.68,0],detail:!0});s.add(new Et(.06,.06,.08,8),"metal",void 0,0,0,0,0,0,Math.PI/2),s.add(new Le(.05,0),"glow",e,.05,0,0),sh(t,[.32,0,-.32],.13,Fn+.16),t.part("rod",{pos:[0,Fn+.16,.28],detail:!0}).add(new et(.7,.03,.02),"metal",void 0,0,0,0),t.part("rod2",{pos:[0,Fn+.16,-.28],detail:!0}).add(new et(.7,.03,.02),"metal",void 0,0,0,0),Qr(t,"smoke0",.42,Fn+1.08,0,1.1),t.light(e,.75,.7,0,.9),t.light("#ffd9a0",-.42,.65,0,.4)}else{n.add(new et(1.3,.08,.5),"woodDark",void 0,0,.26,0);for(const r of[-.6,.6])n.add(new et(.06,.16,.5),"woodDark",void 0,r,.38,0);n.add(new et(1.3,.04,.06),"metal",void 0,0,.22,.26),n.add(new et(1.3,.04,.06),"metal",void 0,0,.22,-.26),fn(n,.3,-.28,.3,-.05,.1),fn(n,.22,.12,.3,.1,.5),fn(n,.18,.4,.3,-.12,.2,"woodDark"),n.add(new et(.7,.28,.46),"clothDark",void 0,-.1,.5,0,0,0,.06);for(const r of[-.35,.15])n.add(new ue(.29,.01,3,10,Math.PI),"leather",void 0,r,.34,0,0,Math.PI/2);for(const r of[-.68,.68])for(const a of[-.15,.15])n.add(new Et(.03,.03,.08,6),"metal",void 0,r,.28,a,0,0,Math.PI/2);n.add(new ue(.03,.008,3,8),"metal",void 0,.72,.26,0,0,Math.PI/2);const s=t.part("lamp",{pos:[-.62,Fn+.6,-.2],detail:!0});s.add(new et(.06,.08,.06),"metal",void 0,0,-.04,0),s.add(new Le(.04,0),"glow",e,0,-.04,0),n.add(new et(.02,.2,.02),"metal",void 0,-.62,.5,-.2),sh(t,[.36,-.36],.12,Fn+.15),t.light(e,-.62,.6,-.2,.6)}},animate({parts:t},e){const n=e*ot;for(const s of Object.keys(t))s.startsWith("wheel")&&(t[s].rotation.z=-n);t.rod?(t.rod.position.x=Math.cos(-n)*.08,t.rod.position.y=Fn+.16+Math.sin(-n)*.08,t.rod2.position.x=Math.cos(-n+Math.PI/2)*.08,t.rod2.position.y=Fn+.16+Math.sin(-n+Math.PI/2)*.08,El(t.smoke0,e,1.1),t.lamp.scale.setScalar(1+Math.sin(n*4)*.05)):t.lamp.rotation.x=Math.sin(n)*.25}}}const Pv={jarvis:"#4f7fc9",karen:"#d99a2b",orolo:"#8656c4",none:"#6b7280"},Rn="#fff8e6";function Dr(i){const t=Pv[i];return{front:"z",build(e){e.base(151+["jarvis","karen","orolo","none"].indexOf(i)*3,.8,.8);const n=e.root.at(0,.185,0);for(let c=0;c<8;c++){const u=c/8*ot;n.add(new ei(.04,0),c%2?"stone":"rock",void 0,Math.cos(u)*.28,.03,Math.sin(u)*.28,c,c*2)}n.add(new ei(.11,0),"rock",void 0,.02,.06,-.02,0,.3,0,1,.7,1),n.add(new Et(.022,.03,1,6),"wood",void 0,0,.5,0),n.add(new ue(.03,.012,3,8),"metal",void 0,0,.72,0,Math.PI/2);const s=e.part("board",{pos:[0,.185+1.1,0],rot:[-.45,0,0]});s.add(new Et(.42,.42,.035,20),"glow",t,0,0,0,Math.PI/2),s.add(new ue(.41,.025,4,20),"glow",Rn,0,0,0);const r=.03;if(i==="jarvis")s.add(new ue(.24,.028,4,6),"glow",Rn,0,0,r,0,0,Math.PI/6),s.add(new Et(.06,.06,.02,8),"glow",Rn,0,0,r,Math.PI/2);else if(i==="karen")s.add(new et(.045,.26,.02),"glow",Rn,-.2,-.09,r),s.add(new et(.045,.26,.02),"glow",Rn,.2,-.09,r),s.add(new et(.44,.045,.02),"glow",Rn,0,-.21,r),s.add(new et(.3,.045,.02),"glow",Rn,-.11,.12,r,0,0,.72),s.add(new et(.3,.045,.02),"glow",Rn,.11,.12,r,0,0,-.72),s.add(new et(.1,.14,.02),"glow",Rn,0,-.15,r);else if(i==="orolo")for(let c=0;c<5;c++){const u=.06+c*.05;s.add(new ue(u,.024,4,10,Math.PI),"glow",Rn,c%2?-.025:.025,0,r,0,0,c*Math.PI)}else s.add(new ue(.18,.03,4,16),"glow",Rn,0,0,r);const a=e.part("ribbon",{pos:[0,.185+.66,0],detail:!0}),o=new ni;o.moveTo(-.03,0),o.lineTo(.03,0),o.lineTo(.05,-.22),o.lineTo(0,-.17),o.lineTo(-.05,-.22),a.add(new Pi(o),"glow",t,.04,0,.02),e.part("mote",{pos:[0,.185+1.6,0],detail:!0}).add(new Le(.03,0),"glow",t,.14,0,0),e.light(t,0,1,.2,.7)},animate({parts:e},n){const s=n*ot;e.board.rotation.y=Math.sin(s)*.25,e.board.position.y=.185+1.1+Math.sin(s*2)*.01,e.ribbon.rotation.y=Math.sin(s*2+1)*.5,e.mote.rotation.y=s,e.mote.position.y=.185+1.6+Math.sin(s*2)*.03}}}const ah=Object.fromEntries(vu.map(i=>[`tower-${i}`,Sv(i)])),xu={nexus:pv,extractor:gv,caravan:_v,wraith:th,rift:vv,hero:xv,"hero-cleric":Ya("cleric"),"hero-fighter":Ya("fighter"),"hero-wizard":Ya("wizard"),tower:ah["tower-bare"],...ah,ward:nh(!1),"ward-lit":nh(!0),watchtower:yv,facility:Ev,envoy:wv,surge:bv,"monster-shadow":to("shadow"),"monster-specter":to("specter"),"monster-wisp":to("wisp"),"monster-wraith":th,encounter:Tv,gather:Av,poi:Rv,train:rh("car"),"train-engine":rh("engine"),sigil:Dr("none"),"sigil-jarvis":Dr("jarvis"),"sigil-karen":Dr("karen"),"sigil-orolo":Dr("orolo")},Lv=Object.keys(xu),Nr=xu,eo=["#FF0000","#FF8000","#FFFF00","#00FF00","#0000FF","#8000FF","#000000","#FFFFFF"],bs="minis-3d",oh="tower-fill",no=24,Iv=2,Dv=80,Ur={nexus:1.35,extractor:1,caravan:1,wraith:1,rift:1.1,hero:.9,poi:.7,gather:.85,"hero-cleric":.85,"hero-fighter":.85,"hero-wizard":.85,train:.9,envoy:.95,sigil:.8,"sigil-jarvis":.8,"sigil-karen":.8,"sigil-orolo":.8},Nv="#39e35a",io="stress:",lh=16.5,Uv=15.25,Fv=52,Ov=84,ch=3,Bv=.62,so=2,ro=1.15,zv={1:[[0,0]],2:[[-.7,.05],[.7,.05]],3:[[-1.25,.15],[0,-.2],[1.25,.15]]},ao=.42,oo=.85,kv=.8,Gv={creature:[0,-2.4],mover:[0,1.8],ward:[1.4,0],event:[-1.4,0],roster:[0,1.4],sigil:[1.4,.6],gather:[-1.4,.6]},Hv=110,hh=.02,Vv=.9,uh=1.7,Wv=1.5,Xv={ext:"node",poi:"poi",wraith:"creature",monster:"creature",car:"mover",train:"mover",envoy:"mover",ward:"ward",roster:"roster",gather:"gather",enc:"event",surge:"event",rift:"event",sigil:"sigil",tower:"attach",fac:"attach"},dh={extractor:3,"train-engine":3,caravan:2,envoy:2,wraith:2,surge:2,rift:1,train:-1},fh={nexus:"#f2c14e",hero:"#3f6fa8","hero-cleric":"#efe4cc","hero-fighter":"#a5683a","hero-wizard":"#5b4b8f",wraith:"#c9cdf0","monster-shadow":"#6a70d0","monster-specter":"#c9cdf0","monster-wisp":"#8fd8ff","monster-wraith":"#c9cdf0",rift:"#8a3aff",ward:"#8a8378","ward-lit":"#ffb347",watchtower:"#d8d8e8",envoy:"#e3d3ae",gather:"#ffe28a",sigil:"#d97e3a","sigil-jarvis":"#d97e3a","sigil-karen":"#d97e3a","sigil-orolo":"#d97e3a"},ph="#5b4a36",qv={nexus:1.6,extractor:1.9,caravan:.9,"train-engine":1,train:.8,envoy:.9,wraith:1.4,rift:1.3,hero:1.5,"hero-cleric":1.5,"hero-fighter":1.5,"hero-wizard":1.6,poi:.6,gather:.5,"tower-bare":1.3,watchtower:2.4,ward:1.2,"ward-lit":1.4,facility:1.1,surge:1,encounter:1,tray:.3},Yv=1.3,$v=1.9;function mh(i){return qv[i]??(i.startsWith("tower-")?$v:Yv)}const Zv={caravan:[1.3,.85],envoy:[1.15,.8],gather:[.85,.85],poi:[.62,.62],sigil:[.8,.8],"sigil-jarvis":[.8,.8],"sigil-karen":[.8,.8],"sigil-orolo":[.8,.8],train:[1.3,.7],"train-engine":[1.3,.7]},Kv=[1,1],gh=.22,Jv=5e3,Qv=1e3/30,jv=100,tx=2e4,ex=2.6,nx=.88,ix=.24,sx={drop:640,open:900,rise:720,seal:660,dissolve:880,lunge:480,pulse:700},rx=2.6,_h=.9,ax=new Set(["poi","gather","encounter","surge","hero","train","sigil","sigil-jarvis","sigil-karen","sigil-orolo"]),Tl=i=>i==="wraith"||i.startsWith("monster-");function ox(i){return i==="rift"?"open":Tl(i)?"rise":ax.has(i)?null:"drop"}function lx(i){return i==="rift"?"seal":Tl(i)?"dissolve":null}const vh="#8f96ff",xh="#a24dff",Mh=i=>1-(1-i)*(1-i),Sh=i=>i*i*(3-2*i);function ux(i){const t=new Md,e=new xl,n=new Qi;t.add(n);const s=new ev(n,t),r=new uv(n);let a=null,o=!1;const l=[],c=new Map,u=new Map;let f=1;const h=[],d=[];let _=!0,S=-1,m="near",p=0,y=0,w=1;const x=new Me,T=new Me().makeRotationX(Math.PI/2);function E(L,B){const X=si.MercatorCoordinate.fromLngLat([L,B]);p=X.x,y=X.y,w=X.meterInMercatorCoordinateUnits(),x.makeTranslation(p,y,0).scale(new I(w,-w,w)).multiply(T);for(const lt of l)C(lt);_=!0}function C(L){L.tx=L.dx=(L.mx-p)/w,L.tz=L.dz=(L.my-y)/w,L.inst.root.position.set(L.dx,0,L.dz)}const v=i.getCenter();E(v.lng,v.lat);function A(L,B){const X=`${L}:${B}`;let lt=u.get(X);if(!lt){const Dt=new z_;Nr[L].build(Dt,B),lt=Dt.compile(),u.set(X,lt)}return lt}function P(L){const B=L.indexOf(":");return B===-1?null:Xv[L.slice(0,B)]??null}function O(L,B){let X=B^2654435769;for(let lt=0;lt<L.length;lt++)X=Math.imul(X^L.charCodeAt(lt),16777619);return X^=X>>>15,X=Math.imul(X,739982445),X^=X>>>12,X=Math.imul(X,695872825),X^=X>>>15,(X>>>0)%1e3/1e3}function z(L,B,X,lt,Dt,gt){const te=si.MercatorCoordinate.fromLngLat([X,lt]),se=Xc(A(B,Dt)),yt={id:f++,key:L,family:P(L),kind:B,color:Dt,lng:X,lat:lt,mx:te.x,my:te.y,phase:gt,rate:nx+ix*O(L,7),heading:null,scale:1,state:1,fx:null,dying:!1,inst:se,tray:null,seat:-1,tx:0,tz:0,dx:0,dz:0,shown:!0,onScreen:!1};return C(yt),n.add(se.root),l.push(yt),c.set(L,yt),_=!0,yt}function V(L){n.remove(L.inst.root),L.inst.dispose(),c.get(L.key)===L&&c.delete(L.key);const B=l.indexOf(L);B!==-1&&l.splice(B,1),_=!0}function F(L,B,X,lt=0,Dt=0,gt=L.color){L.fx={kind:B,t0:X,dur:sx[B],dx:lt,dz:Dt,color:gt,landed:!1},U()}function G(L){const B=lx(L.kind);if(!B||b==="far"||!L.onScreen||L.dying){V(L);return}c.delete(L.key),L.dying=!0,L.tray=null,L.seat=-1;const X=performance.now();F(L,B,X);const lt=g*(Ur[L.kind]??1)*L.scale;B==="dissolve"?r.wisps(L.dx,.6*lt,L.dz,lt,vh,X):r.implode(L.dx,1.1*lt,L.dz,lt,xh,X),_=!0}function Z(L){const B=ox(L.kind);if(!B)return;const X=performance.now();F(L,B,X);const lt=g*(Ur[L.kind]??1)*L.scale;B==="rise"?r.wisps(L.dx,.2*lt,L.dz,lt,vh,X):B==="open"&&r.burst(L.dx,1*lt,L.dz,lt,xh,X)}function Y(L,B,X,lt,Dt){const gt=L.inst.root;switch(B.kind){case"drop":{const te=rx*lt;if(X<.68){const se=X/.68;gt.position.y=te*(1-se*se)}else{B.landed||(B.landed=!0,r.landing(L.dx,L.dz,lt,Dt));const se=(X-.68)/.32;gt.position.y=.16*te*Math.sin(Math.PI*se)*(1-.4*se),gt.scale.y*=1-.08*Math.sin(Math.PI*Math.min(1,se*2))}return-1}case"rise":{const te=Mh(X);return gt.scale.y*=te,gt.scale.x*=.6+.4*te,gt.scale.z*=.6+.4*te,-1}case"open":{const te=Mh(Math.min(1,X/.3)),se=.04+.96*Sh(Math.max(0,(X-.25)/.75));return gt.scale.x*=se,gt.scale.z*=se,gt.scale.y*=te,-1}case"seal":{const te=.04+.96*(1-Sh(Math.min(1,X/.7)));return gt.scale.x*=te,gt.scale.z*=te,X>.7&&(gt.scale.y*=1-(X-.7)/.3),-1}case"dissolve":return gt.position.y=.9*lt*X,gt.scale.x*=1-X,gt.scale.z*=1-X,gt.scale.y*=1+.35*X,-1;case"lunge":{const te=Math.sin(Math.PI*X);return gt.position.x+=B.dx*_h*lt*te,gt.position.z+=B.dz*_h*lt*te,gt.scale.y*=1+.15*te,-1}case"pulse":return X}}function ct(L,B,X){if(L.lng===B&&L.lat===X)return!1;const lt=si.MercatorCoordinate.fromLngLat([B,X]);L.lng=B,L.lat=X,L.mx=lt.x,L.my=lt.y;const Dt=(L.mx-p)/w,gt=(L.my-y)/w;return L.dx+=Dt-L.tx,L.dz+=gt-L.tz,L.tx=Dt,L.tz=gt,_=!0,!0}function $(L){for(const B of[...l])B.key.startsWith(L)&&V(B)}function j(){U(),Qt(),nt(performance.now()),i.triggerRepaint(),Xs(performance.now(),!0)}function rt(){const L=new Et(1,1.06,.14,14).toNonIndexed();L.deleteAttribute("uv");const X=L.attributes.position.count,lt=new Float32Array(X*3),Dt=L.attributes.normal;for(let yt=0;yt<X;yt++){const ge=Dt.getY(yt)>.5,fe=Dt.getY(yt)<-.5,Yt=ge?1:fe?.15:.32;lt[yt*3]=lt[yt*3+1]=lt[yt*3+2]=Yt}L.setAttribute("color",new sn(lt,3)),L.translate(0,.07,0);const gt=new ue(.97,.05,4,20).toNonIndexed();gt.deleteAttribute("uv"),gt.rotateX(Math.PI/2),gt.translate(0,.14,0);const te=gt.attributes.position.count;gt.setAttribute("color",new sn(new Float32Array(te*3).fill(2),3));const se=du([L,gt],!1);return L.dispose(),gt.dispose(),se}const kt=rt(),Ft=new $r({vertexColors:!0});Ft.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
if (color.r > 1.5) vColor.rgb = vec3(0.96, 0.93, 0.84);`)},Ft.customProgramCacheKey=()=>"minis-token-rim";let de=me(256),ie=me(64);function me(L){const B=new Zr(kt,Ft,L);return B.instanceColor=new Os(new Float32Array(L*3),3),B.instanceMatrix.setUsage(Ei),B.instanceColor.setUsage(Ei),B.frustumCulled=!1,B.count=0,n.add(B),B}function Q(L,B){if(B<=L.instanceMatrix.count)return L;n.remove(L),L.dispose();let X=L.instanceMatrix.count;for(;X<B;)X*=2;return me(X)}const st=new Map;function Ct(L){let B=st.get(L);return B||(B=new Kt(L),st.set(L,B)),B}const Wt=new Me,Ut=new I,$t=new I,Se=new Hn;let it=0;function ht(L,B,X,lt,Dt,gt,te,se,yt){Wt.compose(Ut.set(X,lt,Dt),Se,$t.set(gt,te,se)),L.setMatrixAt(B,Wt),L.setColorAt(B,Ct(yt))}const ut=new Ws(1.6,.8),dt=256,xt=new Map;function qt(L){let B=xt.get(L);return B||(B=new Zr(ut,Zt(L),dt),B.instanceMatrix.setUsage(Ei),B.frustumCulled=!1,B.renderOrder=10,B.count=0,n.add(B),xt.set(L,B),B)}const Vt=new Map;function Zt(L){let B=Vt.get(L);if(B)return B;const X=document.createElement("canvas");X.width=128,X.height=64;const lt=X.getContext("2d");lt.clearRect(0,0,128,64),lt.fillStyle="rgba(20, 18, 28, 0.88)",lt.beginPath(),lt.roundRect(4,4,120,56,14),lt.fill(),lt.strokeStyle="rgba(242, 226, 190, 0.85)",lt.lineWidth=3,lt.stroke(),lt.fillStyle="#fff4d6",lt.font="bold 40px ui-sans-serif, system-ui, sans-serif",lt.textAlign="center",lt.textBaseline="middle",lt.fillText(L,64,34);const Dt=new Ld(X);return Dt.colorSpace=pn,Dt.minFilter=Ze,B=new $r({map:Dt,transparent:!0,depthTest:!1,depthWrite:!1}),Vt.set(L,B),B}function jt(L=!1){for(const B of d){for(const X of B.members)X.tray=null,X.seat=-1;L&&(n.remove(B.inst.root),B.inst.dispose())}L&&(d.length=0)}function D(L,B,X){if(jt(L==="near"),L==="near")return;const lt=40075016686e-3*Math.cos(X*Math.PI/180)/(512*2**B),Dt=(L==="far"?Ov:Fv)*lt,gt=new Map;for(const yt of l){if(!yt.family||yt.family==="attach"||!yt.shown||yt.dying)continue;const ge=(yt.mx-p)/w,fe=(yt.my-y)/w,Yt=Math.floor(ge/Dt),be=Math.floor(fe/Dt),ke=`${yt.family}|${Yt}|${be}`;let Ue=gt.get(ke);Ue||(Ue={family:yt.family,cx:Yt,cz:be,members:[],x:0,z:0,into:null},gt.set(ke,Ue)),Ue.members.push(yt),Ue.x+=ge,Ue.z+=fe}for(const yt of gt.values())yt.x/=yt.members.length,yt.z/=yt.members.length;const te=yt=>{for(;yt.into;)yt=yt.into;return yt};for(const yt of gt.values())for(let ge=-1;ge<=1;ge++)for(let fe=-1;fe<=1;fe++){if(!fe&&!ge)continue;const Yt=gt.get(`${yt.family}|${yt.cx+fe}|${yt.cz+ge}`);if(!Yt)continue;const be=te(yt),ke=te(Yt);if(be!==ke&&Math.hypot(be.x-ke.x,be.z-ke.z)<Dt*.8){const[Ue,M]=be.members.length>=ke.members.length?[be,ke]:[ke,be],N=Ue.members.length,q=M.members.length;Ue.x=(Ue.x*N+M.x*q)/(N+q),Ue.z=(Ue.z*N+M.z*q)/(N+q),Ue.members.push(...M.members),M.into=Ue}}const se=new Map;for(const yt of d)se.set(yt.sig,yt);d.length=0;for(const yt of gt.values()){if(yt.into||yt.members.length<2)continue;yt.members.sort((Yt,be)=>(dh[be.kind]??0)-(dh[Yt.kind]??0)||(Yt.key<be.key?-1:1));const ge=`${yt.family}|${yt.members.map(Yt=>Yt.key).join(",")}`;let fe=se.get(ge);if(fe)se.delete(ge),fe.members=yt.members,fe.x=yt.x,fe.z=yt.z,fe.mx=yt.x*w+p,fe.my=yt.z*w+y;else{const Yt=yt.members.length,be=Yt>99?"99+":String(Yt),ke=Xc(A("tray",ph));ke.root.position.set(yt.x,0,yt.z),n.add(ke.root),fe={sig:ge,family:yt.family,members:yt.members,mx:yt.x*w+p,my:yt.z*w+y,x:yt.x,z:yt.z,inst:ke,label:be}}yt.members.forEach((Yt,be)=>{Yt.tray=fe,Yt.seat=be<ch?be:-1}),d.push(fe)}for(const yt of se.values())n.remove(yt.inst.root),yt.inst.dispose()}const we={front:"z",build(L){L.base(77,so,ro)},animate(){}};Nr.tray=we;let ae="near",b="near",g=10,k=0,W=0,K=0,pt=0;const ft=new I,J=new Sn(0,0,0,"YXZ");function nt(L){var H;const B=W?Math.min(250,L-W):0;W=L;const X=i.getZoom(),lt=i.getCenter(),Dt=si.MercatorCoordinate.fromLngLat(lt);Math.hypot(Dt.x-p,Dt.y-y)/w>Jv&&E(lt.lng,lt.lat);const gt=40075016686e-3*Math.cos(lt.lat*Math.PI/180)/(512*2**X);g=Math.min(Dv,Math.max(Iv,no*gt)),b=X>=lh?"near":X>=Uv?"mid":"far",ae=b==="near"?"near":"mid";const te=Dl(),se=te?si.MercatorCoordinate.fromLngLat([te.lng,te.lat]):null,yt=L/1e3/ex,ge=b==="far",fe=[];for(const R of l)(R.kind==="extractor"||R.kind==="nexus")&&fe.push(R);const Yt=(R,_t)=>{const It=(R.mx-p)/w,mt=(R.my-y)/w;for(const Tt of fe)if(Math.hypot((Tt.mx-p)/w-It,(Tt.my-y)/w-mt)<_t)return Tt;return null};let be=!1;for(const R of l){const _t=!(b!=="near"&&R.family==="attach"&&Yt(R,g*Wv)!==null);_t!==R.shown&&(R.shown=_t,be=!0)}const ke=Math.round(X*2)/2;(_||be||ke!==S||b!==m)&&(D(b,ke,lt.lat),_=!1,S=ke,m=b,U());const Ue=B?1-Math.exp(-B/Hv):1;k=0,K=0,pt=0,it=0,de=Q(de,l.length);const M=e.projectionMatrix;s.setCamera(i.getPitch(),i.getBearing()),s.begin(L,l.length*3+d.length,(l.length+d.length)*2);const N=[];for(const R of l){const _t=R.inst.root,It=(Ur[R.kind]??1)*R.scale;let mt=g*It,Tt=(R.mx-p)/w,Nt=(R.my-y)/w,Jt=R.shown;if(R.dying&&(ge||!R.fx||L>=R.fx.t0+R.fx.dur)){N.push(R),_t.visible=!1;continue}if(R.tray)if(pt++,R.seat<0||ge)Jt=!1;else{const he=zv[Math.min(ch,R.tray.members.length)],[Rt,Ge]=he[R.seat];Tt=R.tray.x+Rt*g,Nt=R.tray.z+Ge*g,mt=g*Bv*Math.min(1.15,It)}else if(R.family==="mover"){const he=Yt(R,g*Vv);if(he){const Rt=(R.heading??180)*Math.PI/180;Tt=(he.mx-p)/w-Math.sin(Rt)*g*uh,Nt=(he.my-y)/w+Math.cos(Rt)*g*uh}}R.tx=Tt,R.tz=Nt;const le=Tt-R.dx,Bt=Nt-R.dz;if(Math.abs(le)<hh&&Math.abs(Bt)<hh?(R.dx=Tt,R.dz=Nt):(R.dx+=le*Ue,R.dz+=Bt*Ue,U()),_t.position.set(R.dx,0,R.dz),ft.copy(_t.position).applyMatrix4(M),R.onScreen=ft.x>=-1.1&&ft.x<=1.1&&ft.y>=-1.1&&ft.y<=1.1&&ft.z>=-1&&ft.z<=1,Jt&&R.onScreen&&K++,ge){if(_t.visible=!1,Jt){const he=mt*ao,Rt=fh[R.kind]??R.color;ht(de,it++,R.dx,0,R.dz,he,g*ao,he,Rt),R.onScreen&&(s.shadow(R.dx,R.dz,he,he,0,0),s.pool(R.dx,R.dz,.02*he,he*1.35,Rt,gh,R.id))}continue}if(_t.visible=Jt,!Jt)continue;_t.scale.setScalar(mt),R.inst.setLod(ae);let _e=0,Ne=0,Te=0;if(R.heading!==null){const he=R.heading*Math.PI/180;Ne=Math.sin(he),Te=-Math.cos(he)}else se&&(Ne=(se.x-R.mx)/w,Te=(se.y-R.my)/w);(Ne!==0||Te!==0)&&(_e=Nr[R.kind].front==="z"?Math.atan2(Ne,Te):Math.atan2(-Te,Ne)),_t.rotation.y=_e;const Re=u.get(`${R.kind}:${R.color}`);if(R.onScreen||R.fx){const he=Nr[R.kind];he.animate(R.inst,(yt*R.rate+R.phase)%1,R.state);let Rt=1,Ge=-1;if(R.fx){const Ye=(L-R.fx.t0)/R.fx.dur;Ye>=1?R.fx=null:(Ge=Y(R,R.fx,Math.max(0,Ye),mt,L),Ge>=0&&(Rt=1+1.6*Math.sin(Math.PI*Ge),(H=he.pulse)==null||H.call(he,R.inst,Ge,R.state)),U())}const ve=(R.tray?.2*g:0)+.009*mt,en=Math.cos(_e),hn=Math.sin(_e);if(Re.lights.forEach((Ye,En)=>{const[Ae,Fe,wn]=Ye.pos,Ie=(he.poolGain?he.poolGain(R.state,En):1)*Rt;s.poolFor(R.dx+(en*Ae+hn*wn)*mt,ve,R.dz+(-hn*Ae+en*wn)*mt,mt,Ye.color,Ye.strength*Ie,Fe,R.id*7+En)}),!R.tray){const[Ye,En]=Zv[R.kind]??Kv;s.shadow(R.dx,R.dz,mt*Ye,mt*En,_e,mh(R.kind))}}k+=Re.tris}de.count=it,it&&(de.instanceMatrix.needsUpdate=!0,de.instanceColor.needsUpdate=!0),Ft.color.setScalar(1-.24*U_()),ie=Q(ie,d.length);let q=0;for(const R of xt.values())R.count=0;J.set(-(Math.PI/2-i.getPitch()*Math.PI/180),-(i.getBearing()*Math.PI)/180,0),Se.setFromEuler(J);for(const R of d){const[_t,It]=Gv[R.family]??[0,0];if(R.x=(R.mx-p)/w+_t*g,R.z=(R.my-y)/w+It*g,R.inst.root.position.set(R.x,0,R.z),R.inst.root.scale.setScalar(g),R.inst.root.visible=!ge,ge){const Tt=R.members[0],Nt=g*oo,Jt=fh[Tt.kind]??Tt.color;ht(ie,q++,R.x,0,R.z,Nt,g*ao*1.6,Nt,Jt),s.shadow(R.x,R.z,Nt,Nt,0,0),s.pool(R.x,R.z,.02*Nt,Nt*1.3,Jt,gh*1.3,R.members.length)}else k+=u.get(`tray:${ph}`).tris,s.shadow(R.x,R.z,g*so,g*ro,0,mh("tray"));const mt=qt(R.label);if(mt.count<dt){const Tt=g*(ge?kv:1);Wt.compose(Ut.set(R.x,(ge?.55:1.05)*g,R.z+(ge?-.35:-.55)*g),Se,$t.set(Tt,Tt,Tt)),mt.setMatrixAt(mt.count++,Wt)}}Se.identity();for(const R of xt.values())R.visible=R.count>0,R.count&&(R.instanceMatrix.needsUpdate=!0);ie.count=q,q&&(ie.instanceMatrix.needsUpdate=!0,ie.instanceColor.needsUpdate=!0),s.end(),r.tick(L),r.active()&&U();for(const R of N)V(R)}let St=!1,Gt=0,At=performance.now(),wt=30,Ht=0;function Xt(L){if(!St)return;const B=L-At>tx;wt=B?10:30;const X=B?jv:Qv;L-Gt>=X-1&&(Gt=L,Ht++,nt(L),i.triggerRepaint()),requestAnimationFrame(Xt)}function Qt(){const L=l.length>0&&!document.hidden&&!o;L&&!St?(St=!0,requestAnimationFrame(Xt)):L||(St=!1)}const U=()=>{At=performance.now()};i.on("move",U);const Mt=i.getCanvas();Mt.addEventListener("pointerdown",U,{passive:!0}),document.addEventListener("visibilitychange",Qt);const tt=120,bt=new Float32Array(tt),Pt=new Float32Array(tt);let at=0,zt=0,Ot=0,Ce=0,oe=null,rn=0;function cn(){const L=zt;let B=0,X=0;const lt=[];for(let Dt=0;Dt<L;Dt++)B+=bt[Dt],X+=Pt[Dt],lt.push(Pt[Dt]);return lt.sort((Dt,gt)=>Dt-gt),{count:l.length,fps:L?Math.round(1e3/(B/L)):0,avgMs:L?+(X/L).toFixed(2):0,p95Ms:L?+lt[Math.min(L-1,Math.floor(L*.95))].toFixed(2):0,draws:Ce,onScreen:K,tris:Math.round(k),lod:ae,tier:b,trays:d.length,trayed:pt,tokens:it,zoom:+i.getZoom().toFixed(2),night:Gc(),targetFps:wt,ticks:Ht,failed:o,light:s.stats(),fx:r.stats(),dying:l.reduce((Dt,gt)=>Dt+(gt.dying?1:0),0)}}function Xs(L,B=!1){if(!B&&L-rn<500)return;rn=L,oe||(oe=document.createElement("div"),oe.id="minis-hud",oe.style.cssText="position:fixed;right:8px;top:8px;z-index:20;pointer-events:none;text-align:right;font:10px/1.35 ui-monospace,Menlo,monospace;color:#fff;background:rgba(0,0,0,.55);padding:3px 6px;border-radius:6px;white-space:pre;max-width:46vw",document.body.appendChild(oe));const X=cn();oe.style.display=X.count?"":"none",oe.textContent=`minis ${X.count} · ${X.fps} fps (target ${X.targetFps})
frame ${X.avgMs} ms avg · ${X.p95Ms} ms p95
${X.draws} draws / ${X.onScreen} on screen · ${(X.tris/1e3).toFixed(1)}k tris · ${X.tier} · z${X.zoom} · ${X.night?"night":"day"}
${X.trays} trays (${X.trayed} riding) · ${X.tokens} tokens
${X.light.pools} pools · ${X.light.shadows} shadows · dark ${X.light.darkness.toFixed(2)} · sun ${Math.round(X.light.sunAzDeg)}°/${X.light.sunAltDeg>0?"+":""}${Math.round(X.light.sunAltDeg)}° · moon ${Math.round(X.light.moon*100)}%
${X.fx.effects} fx · ${X.fx.particles} particles · ${X.dying} leaving`}function qs(L,B){o||(o=!0,console.error(`[minis] ${L} failed — falling back to circles`,B),setTimeout(()=>{try{i.getLayer(bs)&&i.removeLayer(bs)}catch{}for(const X of h)X()},0),Qt())}const us={id:bs,type:"custom",renderingMode:"3d",onAdd(L,B){try{a=new w_({canvas:Mt,context:B,antialias:!0}),a.autoClear=!1,a.setPixelRatio(1)}catch(X){qs("renderer",X)}},onRemove(){a==null||a.dispose(),a=null},render(L,B){var Dt;if(!a||o||l.length===0)return;const X=performance.now();try{const gt=((Dt=B.defaultProjectionData)==null?void 0:Dt.mainMatrix)??B.modelViewProjectionMatrix;e.projectionMatrix.fromArray(gt).multiply(x),e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),a.resetState(),a.setViewport(0,0,L.drawingBufferWidth,L.drawingBufferHeight),a.render(t,e),Ce=a.info.render.calls}catch(gt){qs("render",gt);return}const lt=performance.now();Ot&&(bt[at]=lt-Ot,Pt[at]=lt-X,at=(at+1)%tt,zt=Math.min(tt,zt+1)),Ot=lt,Xs(lt)}};i.getLayer(oh)?i.addLayer(us,oh):i.addLayer(us);function Ii(L){const B=new si.MercatorCoordinate(L.x*w+p,L.z*w+y,0).toLngLat(),X=i.project(B);return{family:L.family,count:L.members.length,lng:B.lng,lat:B.lat,x:X.x,y:X.y,keys:L.members.map(lt=>lt.key)}}function Ys(L,B){const X=si.MercatorCoordinate.fromLngLat([L,B]);return[(X.x-p)/w,(X.y-y)/w]}const Di=L=>g*(Ur[L.kind]??1)*L.scale;return{set(L,B,X,lt,Dt={}){const{color:gt,heading:te=null,scale:se=1,state:yt=1,fresh:ge=!1}=Dt,fe=xr(gt??Nv);let Yt=c.get(L);if(Yt&&(Yt.kind!==B||Yt.color!==fe)&&(V(Yt),Yt=void 0),!Yt){Yt=z(L,B,X,lt,fe,O(L,0)),Yt.heading=te,Yt.scale=se,Yt.state=yt,ge&&Z(Yt),j();return}const be=ct(Yt,X,lt);Yt.heading=te,Yt.scale=se,Yt.state=yt,be&&U(),Qt(),i.triggerRepaint()},remove(L){const B=c.get(L);B&&(G(B),j())},collect(L){const B=c.get(L);if(!B||b==="far")return;const X=performance.now(),lt=Di(B);F(B,"pulse",X),r.burst(B.dx,.7*lt,B.dz,lt,B.color,X),j()},pulse(L,B){const X=c.get(L);if(!X||b==="far")return;const lt=performance.now(),Dt=Di(X),gt=B?xr(B):X.color;F(X,"pulse",lt,0,0,gt),r.pulse(X.dx,X.dz,Dt,gt,lt),j()},arrive(L){const B=c.get(L);!B||b==="far"||(r.puff(B.dx,B.dz,Di(B),performance.now()),j())},lunge(L,B,X,lt,Dt=6){if(b==="far")return 0;const[gt,te]=Ys(L,B),[se,yt]=Ys(X,lt),ge=performance.now();let fe=0;for(const Yt of l){if(Yt.dying||!Tl(Yt.kind))continue;const be=(Yt.mx-p)/w,ke=(Yt.my-y)/w;if(Math.hypot(be-gt,ke-te)>Dt)continue;const Ue=se-be,M=yt-ke,N=Math.hypot(Ue,M)||1;F(Yt,"lunge",ge,Ue/N,M/N),fe++}return fe&&j(),fe},fxStats:()=>r.stats(),probeParts(L){var lt;const B=c.get(L);if(!B)return null;const X={};for(const[Dt,gt]of Object.entries(B.inst.parts))X[Dt]=[gt.position.x,gt.position.y,gt.position.z,gt.rotation.x,gt.rotation.y,gt.rotation.z,gt.scale.x,gt.scale.y,gt.scale.z,gt.visible?1:0].map(te=>+te.toFixed(5));return{phase:B.phase,rate:B.rate,state:B.state,fx:((lt=B.fx)==null?void 0:lt.kind)??null,y:B.inst.root.position.y,parts:X}},removePrefix(L){$(L),j()},has:L=>c.has(L),stress(L){$(io);const B=Dl()??i.getCenter(),X=Li(1234),lt=["extractor","extractor","caravan","wraith","extractor","rift"];for(let Dt=0;Dt<L;Dt++){const gt=Dt===0?"nexus":Dt===1?"hero":lt[Dt%lt.length],te=X()*ot,se=Dt===1?30:40+Math.sqrt(X())*320,yt=B.lat+se*Math.cos(te)/111320,ge=B.lng+se*Math.sin(te)/(111320*Math.cos(B.lat*Math.PI/180));z(`${io}${Dt}`,gt,ge,yt,xr(eo[Math.floor(X()*eo.length)]),X())}zt=0,at=0,Ot=0,j()},place(L,B,X,lt){const Dt=z(`${io}place:${f}`,L,B,X,xr(lt??eo[3]),0);return Z(Dt),j(),Dt.id},probe(L){const B=l.find(Yt=>Yt.id===L);if(!B)return null;const X=Mt.clientWidth,lt=Mt.clientHeight,Dt=Yt=>[(Yt.x+1)/2*X,(1-Yt.y)/2*lt],gt=B.inst.root.position,te=new I(gt.x,0,gt.z).applyMatrix4(e.projectionMatrix),se=new I(gt.x+g*1.02,0,gt.z).applyMatrix4(e.projectionMatrix),yt=B.lng+g*1.02/(111320*Math.cos(B.lat*Math.PI/180)),ge=i.project([B.lng,B.lat]),fe=i.project([yt,B.lat]);return{three:[...Dt(te),...Dt(se)],map:[ge.x,ge.y,fe.x,fe.y],sizeM:g}},counts(){const L=Object.fromEntries(Lv.map(B=>[B,0]));for(const B of l)L[B.kind]++;return L},trays:()=>d.map(Ii),probeKey(L){const B=c.get(L);if(!B)return null;const X=Mt.clientWidth,lt=Mt.clientHeight;ft.set(B.dx,0,B.dz).applyMatrix4(e.projectionMatrix);const Dt=i.project([B.lng,B.lat]),gt=B.shown&&(!B.tray||B.seat>=0);return{x:(ft.x+1)/2*X,y:(1-ft.y)/2*lt,ax:Dt.x,ay:Dt.y,shown:gt,tray:B.tray?B.tray.members.length:0,seat:B.seat,tier:b}},trayAt(L,B){const X=i.getZoom();if(b==="near"||!d.length)return null;const lt=no*(b==="far"?oo*1.3:so*1.1),Dt=no*(b==="far"?oo*.9:ro*.8);let gt=null,te=1/0;for(const se of d){const yt=i.project(new si.MercatorCoordinate(se.x*w+p,se.z*w+y,0).toLngLat()),ge=(L-yt.x)/lt,fe=B-yt.y,Yt=fe>0?fe/Dt:fe/(Dt*2.6),be=ge*ge+Yt*Yt;be<=1&&be<te&&(te=be,gt=se)}return gt?{...Ii(gt),zoom:Math.min(18,Math.max(lh+.25,X+2.5))}:null},setSky(L){s.setSky(L),l.length&&nt(performance.now()),i.triggerRepaint()},setNight(L){s.setSky({darkness:L?1:0}),l.length&&nt(performance.now()),i.triggerRepaint()},isNight:Gc,stats:cn,lightStats:()=>s.stats(),drawHistogram:()=>{const L={};return t.traverse(B=>{B.onAfterRender=()=>{var lt;const X=`${B.type}:${B.name||((lt=B.material)==null?void 0:lt.constructor.name)}`;L[X]=(L[X]??0)+1}}),new Promise(B=>{i.once("render",()=>setTimeout(()=>B({hist:L,calls:a==null?void 0:a.info.render.calls}),50)),i.triggerRepaint()})},onFail(L){h.push(L),o&&L()},dispose(){$(""),jt(!0),St=!1,i.off("move",U),Mt.removeEventListener("pointerdown",U),document.removeEventListener("visibilitychange",Qt),oe==null||oe.remove(),s.dispose(),r.dispose(),i.getLayer(bs)&&i.removeLayer(bs)}}}export{bs as LAYER_ID,ux as initMinisLayer};
