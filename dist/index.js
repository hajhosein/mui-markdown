"use strict";var e=require("react/jsx-runtime"),r=require("react"),t=require("markdown-to-jsx");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var i=n(r),a=o(r),u=n(t),c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)};var p=i.default.lazy((function(){return Promise.resolve().then((function(){return o(require("@mui/material/Link"))}))})),s=i.default.lazy((function(){return Promise.resolve().then((function(){return o(require("@mui/material/Typography"))}))})),l={a:{component:p},h1:{component:s,props:{variant:"h1"}},h2:{component:s,props:{variant:"h2"}},h3:{component:s,props:{variant:"h3"}},h4:{component:s,props:{variant:"h4"}},h5:{component:s,props:{variant:"h5"}},h6:{component:s,props:{variant:"h6"}},p:{component:s,props:{variant:"body1"}}};module.exports=function(r){return e.jsx(a.Suspense,c({fallback:e.jsx("div",{children:"..."},void 0)},{children:function(r){var t=r.children,n=r.key,o=r.options,i=r.overrides;if(o){var a=o.overrides,p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(o,["overrides"]);return a?e.jsx(u.default,c({options:c({overrides:c(c({},l),a)},p)},{children:t}),n&&n):e.jsx(u.default,c({options:c({overrides:c({},l)},p)},{children:t}),n&&n)}return i?e.jsx(u.default,c({options:{overrides:c(c({},l),i)}},{children:t}),n&&n):e.jsx(u.default,c({options:{overrides:c({},l)}},{children:t}),n&&n)}(r)}),void 0)};