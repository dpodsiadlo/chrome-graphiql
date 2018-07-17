webpackJsonp([1],{

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(308);
module.exports = __webpack_require__(319);


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_theme_styled__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options_styled__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_urls__ = __webpack_require__(79);
function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable no-undef */var Options=function(_React$Component){_inherits(Options,_React$Component);function Options(props){_classCallCheck(this,Options);var _this=_possibleConstructorReturn(this,(Options.__proto__||Object.getPrototypeOf(Options)).call(this,props));_this.handleSettingChange=function(setting){return function(event){return _this.setState(_defineProperty({},setting,event.target.value));};};_this.handleSaveClick=function(){chrome.storage.sync.set({settings:_this.state});var _this$state=_this.state,apiAuthCookieName=_this$state.apiAuthCookieName,apiUrl=_this$state.apiUrl,apiAuthCookieValue=_this$state.apiAuthCookieValue;if(apiAuthCookieName&&apiUrl){chrome.cookies.set({url:apiUrl,name:apiAuthCookieName,value:apiAuthCookieValue});}_this.goToEditor();};_this.goToEditor=function(){chrome.tabs.query({url:__WEBPACK_IMPORTED_MODULE_4__common_urls__["a" /* default */].editor},function(tabs){tabs.forEach(function(tab){chrome.tabs.update(tab.id,{active:true});});window.close();});};_this.render=function(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__options_styled__["a" /* default */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,'API url'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',value:_this.state.apiUrl,onInput:_this.handleSettingChange('apiUrl')})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'splitter'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,'Auth cookie name'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',value:_this.state.apiAuthCookieName,onInput:_this.handleSettingChange('apiAuthCookieName')})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,'Auth cookie value'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{type:'text',value:_this.state.apiAuthCookieValue,onInput:_this.handleSettingChange('apiAuthCookieValue')})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'row right'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{onClick:_this.handleSaveClick},'Save')));};_this.state={apiUrl:'https://fakerql.com/graphql',apiAuthCookieName:'',apiAuthCookieValue:''};chrome.storage.sync.get(['settings'],function(options){_this.setState(options.settings);});return _this;}return Options;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(Object(__WEBPACK_IMPORTED_MODULE_2__common_theme_styled__["a" /* default */])(Options),document.getElementById('root'));

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
var _templateObject=_taggedTemplateLiteral(['\n\n'],['\n\n']),_templateObject2=_taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  height: auto;\n  white-space: nowrap;\n  margin: 0;\n  \n  .row {\n    box-sizing: border-box;\n    padding: 0.5em;\n    display: flex;\n    \n    span {\n      display: inline-block;\n      width: 40%;    \n    }\n    \n    input {\n      width: 60%;\n      outline: none;\n    }\n  }\n  \n  .splitter {\n    box-sizing: border-box;\n    margin: 0.5em;\n    padding: 0;\n    display: flex;\n    height: 1px;\n    border-bottom: 1px inset;\n\n  }\n  \n  .right {\n    flex-direction: row-reverse;\n  }\n  \n  \n  button {\n    display: inline-block;\n    box-sizing: border-box;\n    border: none;\n    background: ',';\n    padding: 0.7em 2em;\n    margin: 0;\n    cursor: pointer;\n    text-align: left;\n    outline: none;\n    \n    &:hover{\n       background: ',';\n       color: ',';\n    }\n  }\n \n  \n'],['\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  height: auto;\n  white-space: nowrap;\n  margin: 0;\n  \n  .row {\n    box-sizing: border-box;\n    padding: 0.5em;\n    display: flex;\n    \n    span {\n      display: inline-block;\n      width: 40%;    \n    }\n    \n    input {\n      width: 60%;\n      outline: none;\n    }\n  }\n  \n  .splitter {\n    box-sizing: border-box;\n    margin: 0.5em;\n    padding: 0;\n    display: flex;\n    height: 1px;\n    border-bottom: 1px inset;\n\n  }\n  \n  .right {\n    flex-direction: row-reverse;\n  }\n  \n  \n  button {\n    display: inline-block;\n    box-sizing: border-box;\n    border: none;\n    background: ',';\n    padding: 0.7em 2em;\n    margin: 0;\n    cursor: pointer;\n    text-align: left;\n    outline: none;\n    \n    &:hover{\n       background: ',';\n       color: ',';\n    }\n  }\n \n  \n']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["injectGlobal"])(_templateObject);/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2,function(props){return props.theme.default.bg;},function(props){return props.theme.primary.bg;},function(props){return props.theme.primary.fg;}));

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "options.html";

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
var primaryPalette={'50':'#fbe0f3','100':'#f6b3e0','200':'#f080cc','300':'#ea4db7','400':'#e626a7','500':'#e10098','600':'#dd0090','700':'#d90085','800':'#d5007b','900':'#cd006a','A100':'#fff5f9','A200':'#ffc2de','A400':'#ff8fc2','A700':'#ff75b4',contrast:{'50':'#000000','100':'#000000','200':'#000000','300':'#000000','400':'#ffffff','500':'#ffffff','600':'#ffffff','700':'#ffffff','800':'#ffffff','900':'#ffffff','A100':'#000000','A200':'#000000','A400':'#000000','A700':'#ffffff'}};var createTheme=function createTheme(palette){return{bg:palette['500'],fg:palette.contrast['500']};};var theme={primary:createTheme(primaryPalette),default:{bg:'#ffffff'}};/* harmony default export */ __webpack_exports__["a"] = (function(Component){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_components__["ThemeProvider"],{theme:theme},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component,null));});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-undef *//* harmony default export */ __webpack_exports__["a"] = ({editor:chrome.extension.getURL('editor.html'),options:'chrome://extensions/?options='+chrome.runtime.id});

/***/ })

},[307]);