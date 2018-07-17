webpackJsonp([2],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
module.exports = __webpack_require__(306);


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphiql__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphiql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphiql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_graphiql_graphiql_css__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_graphiql_graphiql_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_graphiql_graphiql_css__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable no-undef, no-restricted-globals*/var Editor=function(_React$Component){_inherits(Editor,_React$Component);function Editor(prop){_classCallCheck(this,Editor);var _this=_possibleConstructorReturn(this,(Editor.__proto__||Object.getPrototypeOf(Editor)).call(this,prop));_this.graphQLFetcher=function(graphQLParams){return new Promise(function(resolve){chrome.storage.sync.get(['settings'],function(options){var _options$settings=options.settings;_options$settings=_options$settings===undefined?{}:_options$settings;var _options$settings$api=_options$settings.apiUrl,apiUrl=_options$settings$api===undefined?'https://fakerql.com/graphql':_options$settings$api;fetch(apiUrl,{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify(graphQLParams),credentials:'same-origin'}).then(function(response){return response.json();}).then(function(json){return resolve(json);});});});};_this.getParams=function(){return decodeURI(location.hash.replace(/^#/,'')).split('&').reduce(function(params,current){var p=current.split('=');if(p.length==2){params[p[0]]=p[1];}return params;},{});};_this.updateParams=function(){var _this$getParams=_this.getParams(),query=_this$getParams.query,variables=_this$getParams.variables;_this.setState({query:query,variables:variables});};_this.render=function(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_graphiql___default.a,{fetcher:_this.graphQLFetcher,query:_this.state.query,variables:_this.state.variables});};_this.state=_this.getParams();window.addEventListener("hashchange",_this.updateParams,false);return _this;}return Editor;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Editor,null),document.getElementById('root'));

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "editor.html";

/***/ })

},[148]);