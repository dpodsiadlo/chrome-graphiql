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
/* eslint-disable no-undef */function graphQLFetcher(graphQLParams){return new Promise(function(resolve){chrome.storage.sync.get(['settings'],function(options){return fetch(options.settings.apiUrl,{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify(graphQLParams),credentials:'same-origin'}).then(function(response){return response.json();}).then(function(json){return resolve(json);});});});}var query='{\n  allUsers{\n    firstName\n    lastName\n    email\n  }\n}';__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_graphiql___default.a,{fetcher:graphQLFetcher,query:query}),document.getElementById('root'));

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "editor.html";

/***/ })

},[148]);