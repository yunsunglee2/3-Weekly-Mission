"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Shared/[folderId]",{

/***/ "./pages/Shared/[folderId].js":
/*!************************************!*\
  !*** ./pages/Shared/[folderId].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ SharedPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_nav_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/nav/index.js */ \"./components/nav/index.js\");\n/* harmony import */ var _components_main_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/main/index.js */ \"./components/main/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./components/header/index.js\");\n\n\n\n\nconst SharedPageStyle = {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    gap: \"40px\"\n};\nvar __N_SSP = true;\nfunction SharedPage(param) {\n    let { profile, owner, email, links, folders, accessToken } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                profileImage: profile,\n                name: owner,\n                email: email\n            }, void 0, false, {\n                fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/pages/Shared/[folderId].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Shared page\",\n                style: SharedPageStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        serachIsLoading: true\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/pages/Shared/[folderId].js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        links: links,\n                        folders: folders,\n                        page: \"Shared\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/pages/Shared/[folderId].js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/pages/Shared/[folderId].js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = SharedPage;\nvar _c;\n$RefreshReg$(_c, \"SharedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TaGFyZWQvW2ZvbGRlcklkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0QztBQUNFO0FBQ0w7QUFFekMsTUFBTUcsa0JBQWtCO0lBQ3RCQyxTQUFTO0lBQ1RDLGVBQWU7SUFDZkMsZ0JBQWdCO0lBQ2hCQyxLQUFLO0FBQ1A7O0FBc0VlLFNBQVNDLFdBQVcsS0FBc0Q7UUFBdEQsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUF0RDtJQUVqQyxxQkFDRTs7MEJBQ0UsOERBQUNaLDBEQUFNQTtnQkFBQ2EsY0FBY047Z0JBQVNPLE1BQU1OO2dCQUFPQyxPQUFPQTs7Ozs7OzBCQUNuRCw4REFBQ007Z0JBQUlDLFdBQVU7Z0JBQWNDLE9BQU9oQjs7a0NBQ2xDLDhEQUFDSCxnRUFBR0E7d0JBQUNvQixpQkFBaUI7Ozs7OztrQ0FDdEIsOERBQUNuQixpRUFBSUE7d0JBQUNXLE9BQU9BO3dCQUFPQyxTQUFTQTt3QkFBU1EsTUFBSzs7Ozs7Ozs7Ozs7Ozs7QUFJbkQ7S0FYd0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1NoYXJlZC9bZm9sZGVySWRdLmpzP2FhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0JBU0VfVVJMID0gXCJodHRwczovL2Jvb3RjYW1wLWFwaS5jb2RlaXQua3IvYXBpL2xpbmticmFyeS92MVwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiQC9jb21wb25lbnRzL25hdi9pbmRleC5qc1wiO1xuaW1wb3J0IE1haW4gZnJvbSBcIkAvY29tcG9uZW50cy9tYWluL2luZGV4LmpzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IFNoYXJlZFBhZ2VTdHlsZSA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBnYXA6IFwiNDBweFwiLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIGNvbnRleHTsl5DshJwgcmVx66W8IOy2lOy2nO2VqeuLiOuLpC5cbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHsgZm9sZGVySWQgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgLy8gcmVxIOqwneyytOyXkOyEnCDsv6DtgqTrpbwg6rCA7KC47Ji164uI64ukLlxuICBjb25zdCBjb29raWVzID0gcmVxLmNvb2tpZXM7XG5cblxuICAvLyDtlYTsmpTtlZwg7L+g7YKk66eMIOy2lOy2nO2VqeuLiOuLpC5cbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmFjY2Vzc1Rva2VuO1xuXG4gIC8vIDIuIOyVoeyEuOyKpCDthqDtgbAg7ZmV7J24IO2bhCDsnKDsoIDrjbDsnbTthLAg7JqU7LKtIOuztOuCtOq4sFxuICB0cnkge1xuICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vdXNlcnNgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgdXNlclJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB1c2VySWQgPSB1c2VyRGF0YVswXS5pZDtcblxuICAgIGNvbnN0IGdldFVzZXJEYXRhID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS91c2Vycy8ke3VzZXJJZH1gKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXJEYXRhLmpzb24oKTtcbiAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0WzBdLmltYWdlX3NvdXJjZTtcbiAgICBjb25zdCBvd25lciA9IHJlc3VsdFswXS5uYW1lO1xuICAgIGNvbnN0IGVtYWlsID0gcmVzdWx0WzBdLmVtYWlsO1xuXG4gICAgY29uc3QgZm9sZGVyUmVzcG9uc2UgPSBhd2FpdCAoXG4gICAgICBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L3VzZXJzLyR7dXNlcklkfS9mb2xkZXJzYClcbiAgICApLmpzb24oKTtcblxuICAgIGNvbnN0IGxpbmtSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7QVBJX0JBU0VfVVJMfS91c2Vycy8ke3VzZXJJZH0vbGlua3Mke2ZvbGRlcklkID8gYD9mb2xkZXJJZD0ke2ZvbGRlcklkfWAgOiAnJ31gYCR7QVBJX0JBU0VfVVJMfS91c2Vycy8ke3VzZXJJZH0vbGlua3Mke2ZvbGRlcklkID8gYD9mb2xkZXJJZD0ke2ZvbGRlcklkfWAgOiAnJ31gLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBsaW5rRGF0YSA9IGF3YWl0IGxpbmtSZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZm9sZGVyczogZm9sZGVyUmVzcG9uc2UsXG4gICAgICAgIGxpbmtzOiBsaW5rRGF0YSxcbiAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICBwcm9maWxlLFxuICAgICAgICBvd25lcixcbiAgICAgICAgZW1haWxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHJldHVybntcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGZvbGRlcnM6IFtdLFxuICAgICAgICBsaW5rczogW10sXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxuICAgICAgICBwcm9maWxlOiBudWxsLFxuICAgICAgICBvd25lcjogbnVsbCxcbiAgICAgICAgZW1haWw6IG51bGwsICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVkUGFnZSh7IHByb2ZpbGUsIG93bmVyLCBlbWFpbCwgbGlua3MsIGZvbGRlcnMsIGFjY2Vzc1Rva2VuIH0pIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgcHJvZmlsZUltYWdlPXtwcm9maWxlfSBuYW1lPXtvd25lcn0gZW1haWw9e2VtYWlsfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaGFyZWQgcGFnZVwiIHN0eWxlPXtTaGFyZWRQYWdlU3R5bGV9PlxuICAgICAgICA8TmF2IHNlcmFjaElzTG9hZGluZz17dHJ1ZX0gLz5cbiAgICAgICAgPE1haW4gbGlua3M9e2xpbmtzfSBmb2xkZXJzPXtmb2xkZXJzfSBwYWdlPVwiU2hhcmVkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdiIsIk1haW4iLCJIZWFkZXIiLCJTaGFyZWRQYWdlU3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiU2hhcmVkUGFnZSIsInByb2ZpbGUiLCJvd25lciIsImVtYWlsIiwibGlua3MiLCJmb2xkZXJzIiwiYWNjZXNzVG9rZW4iLCJwcm9maWxlSW1hZ2UiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzZXJhY2hJc0xvYWRpbmciLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Shared/[folderId].js\n"));

/***/ })

});