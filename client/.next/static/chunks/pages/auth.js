/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/auth"],{

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Csp1el%5CDesktop%5Cmasters%5Cclient%5Cpages%5Cauth%5Cindex.tsx&page=%2Fauth!":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Csp1el%5CDesktop%5Cmasters%5Cclient%5Cpages%5Cauth%5Cindex.tsx&page=%2Fauth! ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/auth\",\n      function () {\n        return __webpack_require__(/*! ./pages/auth/index.tsx */ \"./pages/auth/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/auth\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzP2Fic29sdXRlUGFnZVBhdGg9QyUzQSU1Q1VzZXJzJTVDc3AxZWwlNUNEZXNrdG9wJTVDbWFzdGVycyU1Q2NsaWVudCU1Q3BhZ2VzJTVDYXV0aCU1Q2luZGV4LnRzeCZwYWdlPSUyRmF1dGghLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsc0RBQXdCO0FBQy9DO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8xNGIwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvYXV0aFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvYXV0aC9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2F1dGhcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Csp1el%5CDesktop%5Cmasters%5Cclient%5Cpages%5Cauth%5Cindex.tsx&page=%2Fauth!\n"));

/***/ }),

/***/ "./components/LoginForm.tsx":
/*!**********************************!*\
  !*** ./components/LoginForm.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"../node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ \"../node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar LoginForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), login = ref[0], setLogin = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_2__.Context).store;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return setLogin(e.currentTarget.value);\n                },\n                value: login,\n                type: \"text\",\n                placeholder: \"Введите свой логин:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return setEmail(e.currentTarget.value);\n                },\n                value: email,\n                type: \"email\",\n                placeholder: \"Введите свой E-mail:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return setPassword(e.currentTarget.value);\n                },\n                value: password,\n                type: \"password\",\n                placeholder: \"Введите свой пароль:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    store.login(email, password)\n                                ];\n                            case 1:\n                                _state.sent();\n                                if (!store.isAuth) return [\n                                    3,\n                                    3\n                                ];\n                                return [\n                                    4,\n                                    router.push(\"/dashboard\")\n                                ];\n                            case 2:\n                                _state.sent();\n                                _state.label = 3;\n                            case 3:\n                                return [\n                                    2\n                                ];\n                        }\n                    });\n                }),\n                children: \"Логин\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    store.registration(login, email, password)\n                                ];\n                            case 1:\n                                _state.sent();\n                                if (!store.isAuth) return [\n                                    3,\n                                    3\n                                ];\n                                return [\n                                    4,\n                                    router.push(\"/dashboard\")\n                                ];\n                            case 2:\n                                _state.sent();\n                                _state.label = 3;\n                            case 3:\n                                return [\n                                    2\n                                ];\n                        }\n                    });\n                }),\n                children: \"Регистрация\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return store.logout();\n                },\n                children: \"Выйти\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\components\\\\LoginForm.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, _this);\n};\n_s(LoginForm, \"2WRdeOAJtZRMGrs3LnyWLj8KeG0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(LoginForm));\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginForm\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxrREFBUzs7O0FBTHRCQyxLQUFBQSxTQUFTO0FBcUNmLCtEQUFlRixNQUFBQSx5REFBUSxDQUFDRSxTQUFTLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luRm9ybS50c3g/NWIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQge29ic2VydmVyfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IExvZ2luRm9ybTogRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2dpbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xvZ2lufVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLQstC10LTQuNGC0LUg0YHQstC+0Lkg0LvQvtCz0LjQvTpcIn0vPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi0JLQstC10LTQuNGC0LUg0YHQstC+0LkgRS1tYWlsOlwifS8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLQktCy0LXQtNC40YLQtSDRgdCy0L7QuSDQv9Cw0YDQvtC70Yw6XCJ9Lz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthc3luYygpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JlLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yZS5pc0F1dGgpIGF3YWl0IHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuICAgICAgICAgICAgfX0+0JvQvtCz0LjQvTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgc3RvcmUucmVnaXN0cmF0aW9uKGxvZ2luLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmUuaXNBdXRoKSBhd2FpdCByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXHJcbiAgICAgICAgICAgIH19PtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdG9yZS5sb2dvdXQoKX0+0JLRi9C50YLQuDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKExvZ2luRm9ybSk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29udGV4dCIsIm9ic2VydmVyIiwidXNlUm91dGVyIiwiTG9naW5Gb3JtIiwibG9naW4iLCJzZXRMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic3RvcmUiLCJyb3V0ZXIiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc0F1dGgiLCJwdXNoIiwicmVnaXN0cmF0aW9uIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.tsx\n"));

/***/ }),

/***/ "./pages/auth/index.tsx":
/*!******************************!*\
  !*** ./pages/auth/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ \"../node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoginForm */ \"./components/LoginForm.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_app */ \"./pages/_app.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Auth = function() {\n    _s();\n    var store = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_4__.Context).store;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: store.isAuth ? \"Пользователь авторизован\" : \"Пользователь не авторизован\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\pages\\\\auth\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\Desktop\\\\masters\\\\client\\\\pages\\\\auth\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Auth, \"fWWYyndAah+pK9pcP7nWnrsVVfw=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(Auth));\nvar _c, _c1;\n$RefreshReg$(_c, \"Auth\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBeUM7QUFDVTtBQUNsQjtBQUNEO0FBRWhDLElBQU1JLElBQUksR0FBRyxXQUFNOztJQUNmLElBQU0sS0FBTSxHQUFJRixpREFBVSxDQUFDQyx5Q0FBTyxDQUFDLENBQTVCRSxLQUFLO0lBRVoscUJBQU87OzBCQUNILDhEQUFDQyxJQUFFOzBCQUFFRCxLQUFLLENBQUNFLE1BQU0sR0FBRywwQkFBMEIsR0FBRyw2QkFBNkI7Ozs7O3FCQUFNOzBCQUNwRiw4REFBQ04sNkRBQVM7Ozs7cUJBQUc7O29CQUNkO0FBQ1AsQ0FBQztHQVBLRyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFTViwrREFBZUosTUFBQUEseURBQVEsQ0FBQ0ksSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvaW5kZXgudHN4PzI3MDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvZ2luRm9ybVwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi9fYXBwXCI7XHJcblxyXG5jb25zdCBBdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3N0b3JlfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8aDE+e3N0b3JlLmlzQXV0aCA/ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LDQstGC0L7RgNC40LfQvtCy0LDQvScgOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0LDQstGC0L7RgNC40LfQvtCy0LDQvSd9PC9oMT5cclxuICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoQXV0aCkiXSwibmFtZXMiOlsib2JzZXJ2ZXIiLCJMb2dpbkZvcm0iLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsIkF1dGgiLCJzdG9yZSIsImgxIiwiaXNBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Csp1el%5CDesktop%5Cmasters%5Cclient%5Cpages%5Cauth%5Cindex.tsx&page=%2Fauth!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);