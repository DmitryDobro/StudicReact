"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//Header.scss */ \"(app-pages-browser)/./src/components/Header/Header.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _img_img_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/_img.js */ \"(app-pages-browser)/./src/img/_img.js\");\n/* harmony import */ var _Modals_ModalCitiesList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modals/ModalCitiesList.jsx */ \"(app-pages-browser)/./src/components/Modals/ModalCitiesList.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import {Link} from 'react-router-dom';\n\n\n\n\n\n\nfunction Header(param) {\n    let { findUniversities, cities } = param;\n    _s();\n    const [modalCitiesVisable, setModalCitiesVisable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [citiesToRender, setCitiesToRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cities);\n    const [burgerIsActive, setBurgerIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const [valueInputUnivers, setValueInputUnivers] = useState('');\n    // const modalUniversVisable = useSelector(state => state.visable.modalUniversVisable);\n    let cityFromLocalStorage = JSON.parse(localStorage.getItem(\"city\"));\n    function handleFilteredCities(param) {\n        let findCities = cities.filter((item)=>item.name.toLowerCase().includes(param.toLowerCase()));\n        setCitiesToRender(findCities);\n    }\n    function handleModalCities() {\n        setModalCitiesVisable(!modalCitiesVisable);\n        setCitiesToRender(cities);\n    }\n    function closeModalUnivers() {\n        dispatch(ToggleUnivers(false));\n        setValueInputUnivers(\"\");\n    }\n    function handleInput(evt) {\n        let params = evt.target.value;\n        setValueInputUnivers(params);\n        return function(dispatch1) {\n            dispatch1(findUniversities(params));\n        };\n    }\n    function handleMobileMenu() {\n        dispatch(ToggleMobileMenu());\n        setBurgerIsActive(!burgerIsActive);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header__content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__burger \".concat(burgerIsActive && \"header__burger_active\"),\n                        onClick: handleMobileMenu,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"header__logo\",\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.logo,\n                                    alt: \"Логотип\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__city-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-arrow icon border\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.arrow,\n                                            alt: \"\",\n                                            onClick: handleModalCities\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-name\",\n                                        children: cityFromLocalStorage ? cityFromLocalStorage.name : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ModalCitiesList_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        isVisable: modalCitiesVisable,\n                                        citiesToRender: citiesToRender,\n                                        handleFilteredCities: handleFilteredCities,\n                                        setModalCitiesVisable: setModalCitiesVisable\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"/2KDwce8qkc/0pJxwaXnLEfFhF4=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXlDO0FBQ2pCO0FBQ2tCO0FBQ1g7QUFDRjtBQUNpQjtBQUNjO0FBRTdDLFNBQVNPLE9BQU8sS0FBMEI7UUFBMUIsRUFBQ0MsZ0JBQWdCLEVBQUVDLE1BQU0sRUFBQyxHQUExQjs7SUFDN0IsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNZLGdCQUFnQkMsa0JBQWtCLEdBQUdiLCtDQUFRQSxDQUFDUztJQUNyRCxNQUFNLENBQUNLLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JELGtFQUFrRTtJQUNsRSx1RkFBdUY7SUFDdkYsSUFBSWdCLHVCQUF1QkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFFM0QsU0FBU0MscUJBQXFCQyxLQUFLO1FBQ2pDLElBQUlDLGFBQWFkLE9BQU9lLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ04sTUFBTUssV0FBVztRQUN6RmQsa0JBQWtCVTtJQUNwQjtJQUVBLFNBQVNNO1FBQ1BsQixzQkFBc0IsQ0FBQ0Q7UUFDdkJHLGtCQUFrQko7SUFDcEI7SUFDQSxTQUFTcUI7UUFDUEMsU0FBU0MsY0FBYztRQUN2QkMscUJBQXFCO0lBQ3ZCO0lBQ0EsU0FBU0MsWUFBWUMsR0FBRztRQUN0QixJQUFJQyxTQUFTRCxJQUFJRSxNQUFNLENBQUNDLEtBQUs7UUFDN0JMLHFCQUFxQkc7UUFDckIsT0FBTyxTQUFVTCxTQUFRO1lBQ3ZCQSxVQUFTdkIsaUJBQWlCNEI7UUFDNUI7SUFDRjtJQUNBLFNBQVNHO1FBQ1BSLFNBQVNTO1FBQ1R6QixrQkFBa0IsQ0FBQ0Q7SUFDckI7SUFDQSxxQkFDRSw4REFBQzJCO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFXLGtCQUE0RCxPQUExQzVCLGtCQUFrQjt3QkFBMkI4QixTQUFTTDtrQ0FDdEYsNEVBQUNNOzs7Ozs7Ozs7O2tDQUVILDhEQUFDRjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUN2QyxpREFBSUE7Z0NBQUN1QyxXQUFVO2dDQUFlSSxNQUFLOzBDQUNsQyw0RUFBQzVDLGtEQUFLQTtvQ0FBQzZDLEtBQUszQyw2Q0FBSUE7b0NBQUU0QyxLQUFJOzs7Ozs7Ozs7OzswQ0FFeEIsOERBQUNMO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0c7d0NBQUtILFdBQVU7a0RBQ2QsNEVBQUN4QyxrREFBS0E7NENBQUM2QyxLQUFLMUMsOENBQUtBOzRDQUFFMkMsS0FBSTs0Q0FBR0osU0FBU2Y7Ozs7Ozs7Ozs7O2tEQUVyQyw4REFBQ2dCO3dDQUFLSCxXQUFVO2tEQUFxQjFCLHVCQUF1QkEscUJBQXFCVSxJQUFJLEdBQUc7Ozs7OztrREFDeEYsOERBQUNwQixtRUFBZUE7d0NBQ2QyQyxXQUFXdkM7d0NBQ1hFLGdCQUFnQkE7d0NBQ2hCUyxzQkFBc0JBO3dDQUN0QlYsdUJBQXVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGdkM7R0FySXdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeD8zMTYwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuLy8gaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICcuLy9IZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7bG9nbywgYXJyb3d9IGZyb20gJy4uLy4uL2ltZy9faW1nLmpzJztcclxuaW1wb3J0IE1vZGFsQ2l0aWVzTGlzdCBmcm9tICcuLi9Nb2RhbHMvTW9kYWxDaXRpZXNMaXN0LmpzeCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe2ZpbmRVbml2ZXJzaXRpZXMsIGNpdGllc30pIHtcclxuICBjb25zdCBbbW9kYWxDaXRpZXNWaXNhYmxlLCBzZXRNb2RhbENpdGllc1Zpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaXRpZXNUb1JlbmRlciwgc2V0Q2l0aWVzVG9SZW5kZXJdID0gdXNlU3RhdGUoY2l0aWVzKTtcclxuICBjb25zdCBbYnVyZ2VySXNBY3RpdmUsIHNldEJ1cmdlcklzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbdmFsdWVJbnB1dFVuaXZlcnMsIHNldFZhbHVlSW5wdXRVbml2ZXJzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBjb25zdCBtb2RhbFVuaXZlcnNWaXNhYmxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudmlzYWJsZS5tb2RhbFVuaXZlcnNWaXNhYmxlKTtcclxuICBsZXQgY2l0eUZyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJlZENpdGllcyhwYXJhbSkge1xyXG4gICAgbGV0IGZpbmRDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGFyYW0udG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgc2V0Q2l0aWVzVG9SZW5kZXIoZmluZENpdGllcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVNb2RhbENpdGllcygpIHtcclxuICAgIHNldE1vZGFsQ2l0aWVzVmlzYWJsZSghbW9kYWxDaXRpZXNWaXNhYmxlKTtcclxuICAgIHNldENpdGllc1RvUmVuZGVyKGNpdGllcyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWxVbml2ZXJzKCkge1xyXG4gICAgZGlzcGF0Y2goVG9nZ2xlVW5pdmVycyhmYWxzZSkpO1xyXG4gICAgc2V0VmFsdWVJbnB1dFVuaXZlcnMoJycpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dChldnQpIHtcclxuICAgIGxldCBwYXJhbXMgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0VmFsdWVJbnB1dFVuaXZlcnMocGFyYW1zKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgZGlzcGF0Y2goZmluZFVuaXZlcnNpdGllcyhwYXJhbXMpKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZU1vYmlsZU1lbnUoKSB7XHJcbiAgICBkaXNwYXRjaChUb2dnbGVNb2JpbGVNZW51KCkpO1xyXG4gICAgc2V0QnVyZ2VySXNBY3RpdmUoIWJ1cmdlcklzQWN0aXZlKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyX19idXJnZXIgJHtidXJnZXJJc0FjdGl2ZSAmJiAnaGVhZGVyX19idXJnZXJfYWN0aXZlJ31gfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51fT5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cItCb0L7Qs9C+0YLQuNC/XCIgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2l0eS1ib3hcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX2NpdHktYXJyb3cgaWNvbiBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Fycm93fSBhbHQ9XCJcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbENpdGllc30gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19jaXR5LW5hbWVcIj57Y2l0eUZyb21Mb2NhbFN0b3JhZ2UgPyBjaXR5RnJvbUxvY2FsU3RvcmFnZS5uYW1lIDogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxNb2RhbENpdGllc0xpc3RcclxuICAgICAgICAgICAgICAgIGlzVmlzYWJsZT17bW9kYWxDaXRpZXNWaXNhYmxlfVxyXG4gICAgICAgICAgICAgICAgY2l0aWVzVG9SZW5kZXI9e2NpdGllc1RvUmVuZGVyfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyZWRDaXRpZXM9e2hhbmRsZUZpbHRlcmVkQ2l0aWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0TW9kYWxDaXRpZXNWaXNhYmxlPXtzZXRNb2RhbENpdGllc1Zpc2FibGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faXRlbSBoZWFkZXJfX2l0ZW1fdHlwZV9pbnB1dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faW5wdXRcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KPRh9C10LHQvdC+0LUg0LfQsNCy0LXQtNC10L3QuNC1XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUlucHV0VW5pdmVyc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChoYW5kbGVJbnB1dChldnQpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biBoZWFkZXJfX2J0biBub25lQ29sb3IgICAke21vZGFsVW5pdmVyc1Zpc2FibGUgJiYgJ2hlYWRlcl9fYnRuX3Zpc2FibGUnfWB9IG9uQ2xpY2s9e2Nsb3NlTW9kYWxVbml2ZXJzfT5cclxuICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8TW9kYVVuaXZlcnNpdGllc0xpc3QgaXNWaXNhYmxlPXttb2RhbFVuaXZlcnNWaXNhYmxlfSBjbG9zZU1vZGFsVW5pdmVycz17Y2xvc2VNb2RhbFVuaXZlcnN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faXRlbSBoZWFkZXJfX2l0ZW1fdHlwZV9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19wcm9maWxlLWF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcHJvZmlsZS1uYW1lXCI+0JDQstGC0L7RgNC40LfQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhci1jb250ZWluZXIgc3dpcGVyXCI+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX2xpc3QgIHN3aXBlci13cmFwcGVyXCJcclxuICAgICAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XHJcbiAgICAgICAgICAgICAgbG9vcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17J2F1dG8nfVxyXG4gICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwPXsyfVxyXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MjV9XHJcbiAgICAgICAgICAgICAgc2ltdWxhdGVUb3VjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgd2F0Y2hPdmVyZmxvdz17dHJ1ZX1cclxuICAgICAgICAgICAgICBrZXlib2FyZD17e1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnZVVwRG93bjogdHJ1ZSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG5hdmlnYXRpb249e3tuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JywgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldid9fT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QktGD0LfRizwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QmtC+0LvQu9C10LTQttC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCi0LXRhdC90LjQutGD0LzRizwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7Qo9GH0LjQu9C40YnQsDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QodC/0LXRhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7Qn9GA0L7RhNC10YHRgdC40Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0J7RgtC30YvQstGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCj0YfQtdCx0L3Ri9C8INC30LDQstC10LTQtdC90LjRj9C8PC9hPnsnICd9XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QotC10YHRgiDQvdCwINC/0YDQvtGE0L7RgNC40LXQvdGC0LDRhtC40Y48L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QotC10YHRgiDQvdCwINC/0YDQvtGE0L7RgNC40LXQvdGC0LDRhtC40Y48L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiTGluayIsImxvZ28iLCJhcnJvdyIsIk1vZGFsQ2l0aWVzTGlzdCIsIkhlYWRlciIsImZpbmRVbml2ZXJzaXRpZXMiLCJjaXRpZXMiLCJtb2RhbENpdGllc1Zpc2FibGUiLCJzZXRNb2RhbENpdGllc1Zpc2FibGUiLCJjaXRpZXNUb1JlbmRlciIsInNldENpdGllc1RvUmVuZGVyIiwiYnVyZ2VySXNBY3RpdmUiLCJzZXRCdXJnZXJJc0FjdGl2ZSIsImNpdHlGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUZpbHRlcmVkQ2l0aWVzIiwicGFyYW0iLCJmaW5kQ2l0aWVzIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlTW9kYWxDaXRpZXMiLCJjbG9zZU1vZGFsVW5pdmVycyIsImRpc3BhdGNoIiwiVG9nZ2xlVW5pdmVycyIsInNldFZhbHVlSW5wdXRVbml2ZXJzIiwiaGFuZGxlSW5wdXQiLCJldnQiLCJwYXJhbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU1vYmlsZU1lbnUiLCJUb2dnbGVNb2JpbGVNZW51IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInNwYW4iLCJocmVmIiwic3JjIiwiYWx0IiwiaXNWaXNhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.jsx\n"));

/***/ })

});