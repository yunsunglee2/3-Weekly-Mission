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

/***/ "./components/main/index.js":
/*!**********************************!*\
  !*** ./components/main/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_main_MainSearch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/main/MainSearch.js */ \"./components/main/MainSearch.js\");\n/* harmony import */ var _components_main_MainFiles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/main/MainFiles.js */ \"./components/main/MainFiles.js\");\n/* harmony import */ var _components_main_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/main/buttons.js */ \"./components/main/buttons.js\");\n/* harmony import */ var _components_main_fnc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/main/fnc.js */ \"./components/main/fnc.js\");\n/* harmony import */ var _components_main_addFolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/main/addFolder */ \"./components/main/addFolder.js\");\n/* harmony import */ var _components_main_emptyFile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/main/emptyFile.js */ \"./components/main/emptyFile.js\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main.module.css */ \"./components/main/main.module.css\");\n/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _public_shareImg_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/public/shareImg.svg */ \"./public/shareImg.svg\");\n/* harmony import */ var _public_deleteImg_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/public/deleteImg.svg */ \"./public/deleteImg.svg\");\n/* harmony import */ var _public_changeName_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/public/changeName.svg */ \"./public/changeName.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main(param) {\n    let { links, folders, page } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentFolder, setCurrentFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: 1,\n        name: \"전체\"\n    });\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let filteredLinks = links;\n    // const getFilteredLink = async (id) => {\n    //   const filteredLinks = links.filter((info) => {\n    //       return (\n    //         info.url?.toLowerCase().includes(search.toLowerCase()) ||\n    //         info.title?.toLowerCase().includes(search.toLowerCase()) ||\n    //         info.description?.toLowerCase().includes(search.toLowerCase())\n    //       );\n    //     });\n    // };\n    const getFilteredLink = ()=>{\n        if (currentFolder.id === 1) {\n            filteredLinks = links;\n        } else {\n            filteredLinks = links.filter((link)=>link.id === currentFolder.id);\n        }\n        return filteredLinks;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getFilteredLink(currentFolder.id);\n    }, [\n        search\n    ]);\n    const handleClickFolder = (folder)=>{\n        // setCurrentFolder(folder);\n        // getFilteredLink(folder.id);\n        cookieStore.delete(accessToken);\n        cookieStore.delete(refreshToken);\n    // router.push(`/${page}/${folder.id}`)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().Main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().item01),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_MainSearch_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setSearch: setSearch\n                    }, void 0, false, {\n                        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().item02),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().fileList),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().buttonBundle),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().listAllButton),\n                                            onClick: ()=>handleClickFolder({\n                                                    id: \"all\",\n                                                    name: \"전체\"\n                                                }),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),\n                                                children: \"전체\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Buttons, {\n                                            onClick: handleClickFolder,\n                                            folders: folders\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().addFolderWrapper),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().text),\n                                            children: \"폴더 추가\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_addFolder__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().functionBundle),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().currentFolder),\n                                    children: currentFolder.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                currentFolder.name !== \"전체\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_main_module_css__WEBPACK_IMPORTED_MODULE_12___default().fncBtn),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_fnc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            src: _public_shareImg_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                            value: \"공유\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_fnc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            src: _public_changeName_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                                            value: \"이름변경\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_fnc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            src: _public_deleteImg_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                                            value: \"삭제\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        links ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_MainFiles_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            links: filteredLinks\n                        }, void 0, false, {\n                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 20\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_emptyFile_js__WEBPACK_IMPORTED_MODULE_8__.EmptyFile, {}, void 0, false, {\n                            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 54\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ywswg_lee/Desktop/LYS/3-Weekly-Mission/components/main/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"+skCiAuormF1BHD7c4TvqX0kB3Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ1YscUVBQUtBOzRCQUFDVSxPQUFPVTs7Ozs7aURBQW9CLDhEQUFDaEIsb0VBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9EO0dBbkZTSzs7UUFDUVgsa0RBQVNBOzs7S0FEakJXO0FBcUZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbi9pbmRleC5qcz9kNGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE1haW5TZWFyY2ggZnJvbSBcIkAvY29tcG9uZW50cy9tYWluL01haW5TZWFyY2guanNcIjtcbmltcG9ydCBMaW5rcyBmcm9tIFwiQC9jb21wb25lbnRzL21haW4vTWFpbkZpbGVzLmpzXCI7XG5pbXBvcnQgeyBCdXR0b25zIH0gZnJvbSBcIkAvY29tcG9uZW50cy9tYWluL2J1dHRvbnMuanNcIjtcbmltcG9ydCBGbmMgZnJvbSBcIkAvY29tcG9uZW50cy9tYWluL2ZuYy5qc1wiO1xuaW1wb3J0IEFkZEZvbGRlciBmcm9tIFwiQC9jb21wb25lbnRzL21haW4vYWRkRm9sZGVyXCI7XG5pbXBvcnQgeyBFbXB0eUZpbGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL21haW4vZW1wdHlGaWxlLmpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21haW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFNIQVJFX0lNRyBmcm9tIFwiQC9wdWJsaWMvc2hhcmVJbWcuc3ZnXCI7XG5pbXBvcnQgREVMRVRFX0lNRyBmcm9tIFwiQC9wdWJsaWMvZGVsZXRlSW1nLnN2Z1wiO1xuaW1wb3J0IENIQU5HRV9JTUcgZnJvbSBcIkAvcHVibGljL2NoYW5nZU5hbWUuc3ZnXCI7XG5cbmZ1bmN0aW9uIE1haW4oeyBsaW5rcywgZm9sZGVycywgcGFnZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY3VycmVudEZvbGRlciwgc2V0Q3VycmVudEZvbGRlcl0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCLsoITssrRcIixcbiAgfSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgbGV0IGZpbHRlcmVkTGlua3MgPSBsaW5rcztcblxuICAvLyBjb25zdCBnZXRGaWx0ZXJlZExpbmsgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgIFxuICAvLyAgIGNvbnN0IGZpbHRlcmVkTGlua3MgPSBsaW5rcy5maWx0ZXIoKGluZm8pID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICBpbmZvLnVybD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgLy8gICAgICAgICBpbmZvLnRpdGxlPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAvLyAgICAgICAgIGluZm8uZGVzY3JpcHRpb24/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gIC8vICAgICAgICk7XG4gIC8vICAgICB9KTtcbiAgLy8gfTtcblxuICBcbiAgY29uc3QgZ2V0RmlsdGVyZWRMaW5rID0gKCkgPT4geyAgICBcbiAgICBpZihjdXJyZW50Rm9sZGVyLmlkID09PSAxKSB7XG4gICAgICBmaWx0ZXJlZExpbmtzID0gbGlua3NcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyZWRMaW5rcyA9IGxpbmtzLmZpbHRlcigobGluayk9PiBsaW5rLmlkID09PSBjdXJyZW50Rm9sZGVyLmlkKVxuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRMaW5rc1xuICB9IFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRGaWx0ZXJlZExpbmsoY3VycmVudEZvbGRlci5pZCk7XG4gIH0sIFtzZWFyY2hdKTtcblxuICBjb25zdCBoYW5kbGVDbGlja0ZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAvLyBzZXRDdXJyZW50Rm9sZGVyKGZvbGRlcik7XG4gICAgLy8gZ2V0RmlsdGVyZWRMaW5rKGZvbGRlci5pZCk7XG4gICAgY29va2llU3RvcmUuZGVsZXRlKGFjY2Vzc1Rva2VuKTtcbiAgICBjb29raWVTdG9yZS5kZWxldGUocmVmcmVzaFRva2VuKTtcbiAgICAvLyByb3V0ZXIucHVzaChgLyR7cGFnZX0vJHtmb2xkZXIuaWR9YClcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbTAxfT5cbiAgICAgICAgICB7Lyog6rKA7IOJIOuwlCDsnoXri4jri6QgKi99XG4gICAgICAgICAgPE1haW5TZWFyY2ggc2V0U2VhcmNoPXtzZXRTZWFyY2h9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW0wMn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWxlTGlzdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJ1bmRsZX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXN0QWxsQnV0dG9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrRm9sZGVyKHsgaWQ6ICdhbGwnLCBuYW1lOiBcIuyghOyytFwiIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57XCLsoITssrRcIn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHsvKiDrsoTtirwg66qp66GdIOyeheuLiOuLpCAqL31cbiAgICAgICAgICAgICAgPEJ1dHRvbnMgb25DbGljaz17aGFuZGxlQ2xpY2tGb2xkZXJ9IGZvbGRlcnM9e2ZvbGRlcnN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiDtj7TrjZQg66qp66GdIOyasOy4oSDtlIzrn6zsiqQg67KE7Yq8IOyeheuLiOuLpCAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZEZvbGRlcldyYXBwZXJ9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT7tj7TrjZQg7LaU6rCAPC9zcGFuPlxuICAgICAgICAgICAgICA8QWRkRm9sZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bmN0aW9uQnVuZGxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEZvbGRlcn0+e2N1cnJlbnRGb2xkZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIHtjdXJyZW50Rm9sZGVyLm5hbWUgIT09IFwi7KCE7LK0XCIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZuY0J0bn0+XG4gICAgICAgICAgICAgICAgPEZuYyBzcmM9e1NIQVJFX0lNR30gdmFsdWU9XCLqs7XsnKBcIiAvPlxuICAgICAgICAgICAgICAgIDxGbmMgc3JjPXtDSEFOR0VfSU1HfSB2YWx1ZT1cIuydtOumhOuzgOqyvVwiIC8+XG4gICAgICAgICAgICAgICAgPEZuYyBzcmM9e0RFTEVURV9JTUd9IHZhbHVlPVwi7IKt7KCcXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiDrp4HtgazqsIAg7KG07J6s7ZWY66m0IOunge2BrCDrqqnroZ3snYQg67O07Jes7KO86rOgIOyXhuycvOuptCDruYTsl4jsnYzsnYQg7Lac66Cl7ZW07KO864qUIOyhsOqxtOu2gCDroIzrjZTrp4EgICovfVxuICAgICAgICAgIHtsaW5rcyA/IDxMaW5rcyBsaW5rcz17ZmlsdGVyZWRMaW5rc30gLz4gOiA8RW1wdHlGaWxlIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTWFpblNlYXJjaCIsIkxpbmtzIiwiQnV0dG9ucyIsIkZuYyIsIkFkZEZvbGRlciIsIkVtcHR5RmlsZSIsInN0eWxlcyIsIlNIQVJFX0lNRyIsIkRFTEVURV9JTUciLCJDSEFOR0VfSU1HIiwiTWFpbiIsImxpbmtzIiwiZm9sZGVycyIsInBhZ2UiLCJyb3V0ZXIiLCJjdXJyZW50Rm9sZGVyIiwic2V0Q3VycmVudEZvbGRlciIsImlkIiwibmFtZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImZpbHRlcmVkTGlua3MiLCJnZXRGaWx0ZXJlZExpbmsiLCJmaWx0ZXIiLCJsaW5rIiwiaGFuZGxlQ2xpY2tGb2xkZXIiLCJmb2xkZXIiLCJjb29raWVTdG9yZSIsImRlbGV0ZSIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm94IiwiaXRlbTAxIiwiaXRlbTAyIiwiZmlsZUxpc3QiLCJidXR0b25CdW5kbGUiLCJidXR0b24iLCJsaXN0QWxsQnV0dG9uIiwib25DbGljayIsInRleHQiLCJhZGRGb2xkZXJXcmFwcGVyIiwic3BhbiIsImZ1bmN0aW9uQnVuZGxlIiwiZm5jQnRuIiwic3JjIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main/index.js\n"));

/***/ })

});