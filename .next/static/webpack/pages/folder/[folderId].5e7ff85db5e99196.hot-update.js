"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/folder/[folderId]",{

/***/ "./components/nav/Account/index.js":
/*!*****************************************!*\
  !*** ./components/nav/Account/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_nav_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/nav/Button/Button.js */ \"./components/nav/Button/Button.js\");\n/* harmony import */ var _AccountEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountEmail */ \"./components/nav/Account/AccountEmail.js\");\n/* harmony import */ var _AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountImage */ \"./components/nav/Account/AccountImage.js\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.module.css */ \"./components/nav/Account/account.module.css\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_account_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nconst API_BASE_URL = \"https://bootcamp-api.codeit.kr/api/linkbrary/v1\";\n\n\n\n\n\nfunction Account(param) {\n    let { profileImage, name, email } = param;\n    const handleClick = ()=>{\n        document.cookie = \"accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n        document.cookie = \"refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_5___default().account),\n        children: [\n            email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_5___default().accountWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AccountImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: profileImage,\n                        name: name\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AccountEmail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: email\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            email ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onClick: handleClick,\n                    children: \"로그아웃\"\n                }, void 0, false, {\n                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttonsWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/LoginPage\",\n                        style: {\n                            textDecoration: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: (_account_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_button),\n                            children: \"로그인 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/SignupPage\",\n                        style: {\n                            textDecoration: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            className: (_account_module_css__WEBPACK_IMPORTED_MODULE_5___default().signup_button),\n                            children: \"회원가입\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/nav/Account/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9BY2NvdW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsZUFBZTtBQUNrQztBQUNiO0FBQ0E7QUFDQTtBQUNiO0FBRTdCLFNBQVNNLFFBQVEsS0FBNkI7UUFBN0IsRUFBRUMsWUFBWSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUE3QjtJQUVmLE1BQU1DLGNBQWM7UUFDbEJDLFNBQVNDLE1BQU0sR0FBRztRQUNsQkQsU0FBU0MsTUFBTSxHQUFHO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdWLG9FQUFjOztZQUMzQkssdUJBQ0MsOERBQUNJO2dCQUFJQyxXQUFXViwyRUFBcUI7O2tDQUNuQyw4REFBQ0QscURBQVlBO3dCQUFDYyxLQUFLVjt3QkFBY0MsTUFBTUE7Ozs7OztrQ0FDdkMsOERBQUNOLHFEQUFZQTtrQ0FBRU87Ozs7Ozs7Ozs7OztZQUdsQkEsc0JBQ0MsOERBQUNKLGtEQUFJQTtnQkFBQ2EsTUFBTTswQkFDViw0RUFBQ2pCLHdFQUFNQTtvQkFBQ2tCLFNBQVNUOzhCQUFhOzs7Ozs7Ozs7O3FDQUdoQyw4REFBQ0c7Z0JBQUlDLFdBQVdWLDJFQUFxQjs7a0NBQ25DLDhEQUFDQyxrREFBSUE7d0JBQUNhLE1BQU07d0JBQWNHLE9BQU87NEJBQUNDLGdCQUFnQjt3QkFBTTtrQ0FDdEQsNEVBQUNyQix3RUFBTUE7NEJBQUNhLFdBQVdWLHlFQUFtQjtzQ0FBRTs7Ozs7Ozs7Ozs7a0NBRTFDLDhEQUFDQyxrREFBSUE7d0JBQUNhLE1BQU07d0JBQWVHLE9BQU87NEJBQUNDLGdCQUFnQjt3QkFBTTtrQ0FDdkQsNEVBQUNyQix3RUFBTUE7NEJBQUNhLFdBQVdWLDBFQUFvQjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7S0EvQlNFO0FBaUNULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2L0FjY291bnQvaW5kZXguanM/MmViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfQkFTRV9VUkwgPSBcImh0dHBzOi8vYm9vdGNhbXAtYXBpLmNvZGVpdC5rci9hcGkvbGlua2JyYXJ5L3YxXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvbmF2L0J1dHRvbi9CdXR0b24uanNcIjtcbmltcG9ydCBBY2NvdW50RW1haWwgZnJvbSBcIi4vQWNjb3VudEVtYWlsXCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuL0FjY291bnRJbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hY2NvdW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQWNjb3VudCh7IHByb2ZpbGVJbWFnZSwgbmFtZSwgZW1haWwgfSkge1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiYWNjZXNzVG9rZW49OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87XCI7XG4gICAgZG9jdW1lbnQuY29va2llID0gXCJyZWZyZXNoVG9rZW49OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87XCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudH0+XG4gICAgICB7ZW1haWwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRXcmFwcGVyfT5cbiAgICAgICAgICA8QWNjb3VudEltYWdlIHNyYz17cHJvZmlsZUltYWdlfSBuYW1lPXtuYW1lfSAvPlxuICAgICAgICAgIDxBY2NvdW50RW1haWw+e2VtYWlsfTwvQWNjb3VudEVtYWlsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7ZW1haWwgPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7roZzqt7jslYTsm4M8L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zV3JhcHBlcn0+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvTG9naW5QYWdlXCJ9IHN0eWxlPXt7dGV4dERlY29yYXRpb246ICdub25lJ319PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9idXR0b259PuuhnOq3uOyduCA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvU2lnbnVwUGFnZVwifSBzdHlsZT17e3RleHREZWNvcmF0aW9uOiAnbm9uZSd9fT5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwX2J1dHRvbn0+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iXSwibmFtZXMiOlsiQVBJX0JBU0VfVVJMIiwiQnV0dG9uIiwiQWNjb3VudEVtYWlsIiwiQWNjb3VudEltYWdlIiwic3R5bGVzIiwiTGluayIsIkFjY291bnQiLCJwcm9maWxlSW1hZ2UiLCJuYW1lIiwiZW1haWwiLCJoYW5kbGVDbGljayIsImRvY3VtZW50IiwiY29va2llIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWNjb3VudCIsImFjY291bnRXcmFwcGVyIiwic3JjIiwiaHJlZiIsIm9uQ2xpY2siLCJidXR0b25zV3JhcHBlciIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJsb2dpbl9idXR0b24iLCJzaWdudXBfYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/Account/index.js\n"));

/***/ })

});