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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//Header.scss */ \"(app-pages-browser)/./src/components/Header/Header.scss\");\n/* harmony import */ var _utils_Api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Api.js */ \"(app-pages-browser)/./src/utils/Api.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _img_img_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/_img.js */ \"(app-pages-browser)/./src/img/_img.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// import {Link} from 'react-router-dom';\n\n\n\n\n\nasync function getData() {\n    const data = await _utils_Api_js__WEBPACK_IMPORTED_MODULE_2__.api.getCities();\n    const cities1 = data[0].areas;\n    return cities1;\n}\nasync function Header(param) {\n    let { findUniversities } = param;\n    let test = await getData();\n    // const [burgerIsActive, setBurgerIsActive] = useState(false);\n    // const [valueInputUnivers, setValueInputUnivers] = useState('');\n    // const modalUniversVisable = useSelector(state => state.visable.modalUniversVisable);\n    // const cities = useSelector(state => state.cities.cities);\n    let cityFromLocalStorage = JSON.parse(localStorage.getItem(\"city\"));\n    // const [citiesToRender, setCitiesToRender] = useState(cities);\n    // const dispatch = useDispatch();\n    // const modalCitiesVisable = useSelector(state => state.visable.modalCitiesVisable);\n    // const [modalCitiesVisable, setModalCitiesVisable] = useState(false);\n    function handleFilteredCities(param) {\n        let findCities = cities.filter((item)=>item.name.toLowerCase().includes(param.toLowerCase()));\n        setCitiesToRender(findCities);\n    }\n    function handleModalCities() {\n    // setModalCitiesVisable(!modalCitiesVisable);\n    // setCitiesToRender(cities);\n    }\n    function closeModalUnivers() {\n        dispatch(ToggleUnivers(false));\n        setValueInputUnivers(\"\");\n    }\n    function handleInput(evt) {\n        let params = evt.target.value;\n        setValueInputUnivers(params);\n        return function(dispatch1) {\n            dispatch1(findUniversities(params));\n        };\n    }\n    function handleMobileMenu() {\n        dispatch(ToggleMobileMenu());\n        setBurgerIsActive(!burgerIsActive);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/\",\n                            children: \"Main\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/region\",\n                            children: \"Region\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/univers\",\n                            children: \"Univers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header__content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"header__logo\",\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.logo,\n                                    alt: \"Логотип\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__city-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-arrow icon border\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.arrow,\n                                            alt: \"\",\n                                            onClick: handleModalCities\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalCitiesList, {\n                                        isVisable: modalCitiesVisable,\n                                        setIsVisable: setModalCitiesVisable,\n                                        cities: cities,\n                                        citiesToRender: citiesToRender,\n                                        handleFilteredCities: handleFilteredCities\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXlDO0FBQ2pCO0FBQ2U7QUFDUjtBQUNGO0FBQ2lCO0FBQzlDLGVBQWVLO0lBQ2IsTUFBTUMsT0FBTyxNQUFNTiw4Q0FBR0EsQ0FBQ08sU0FBUztJQUNoQyxNQUFNQyxVQUFTRixJQUFJLENBQUMsRUFBRSxDQUFDRyxLQUFLO0lBQzVCLE9BQU9EO0FBQ1Q7QUFFZSxlQUFlRSxPQUFPLEtBQWtCO1FBQWxCLEVBQUNDLGdCQUFnQixFQUFDLEdBQWxCO0lBQ25DLElBQUlDLE9BQU8sTUFBTVA7SUFFakIsK0RBQStEO0lBQy9ELGtFQUFrRTtJQUNsRSx1RkFBdUY7SUFDdkYsNERBQTREO0lBQzVELElBQUlRLHVCQUF1QkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDM0QsZ0VBQWdFO0lBQ2hFLGtDQUFrQztJQUNsQyxxRkFBcUY7SUFDckYsdUVBQXVFO0lBRXZFLFNBQVNDLHFCQUFxQkMsS0FBSztRQUNqQyxJQUFJQyxhQUFhWixPQUFPYSxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNOLE1BQU1LLFdBQVc7UUFDekZFLGtCQUFrQk47SUFDcEI7SUFFQSxTQUFTTztJQUNQLDhDQUE4QztJQUM5Qyw2QkFBNkI7SUFDL0I7SUFDQSxTQUFTQztRQUNQQyxTQUFTQyxjQUFjO1FBQ3ZCQyxxQkFBcUI7SUFDdkI7SUFDQSxTQUFTQyxZQUFZQyxHQUFHO1FBQ3RCLElBQUlDLFNBQVNELElBQUlFLE1BQU0sQ0FBQ0MsS0FBSztRQUM3QkwscUJBQXFCRztRQUNyQixPQUFPLFNBQVVMLFNBQVE7WUFDdkJBLFVBQVNsQixpQkFBaUJ1QjtRQUM1QjtJQUNGO0lBQ0EsU0FBU0c7UUFDUFIsU0FBU1M7UUFDVEMsa0JBQWtCLENBQUNDO0lBQ3JCO0lBQ0EscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FDQyw0RUFBQzFDLGlEQUFJQTs0QkFBQzJDLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0Q7a0NBQ0MsNEVBQUMxQyxpREFBSUE7NEJBQUMyQyxNQUFLO3NDQUFVOzs7Ozs7Ozs7OztrQ0FFdkIsOERBQUNEO2tDQUNDLDRFQUFDMUMsaURBQUlBOzRCQUFDMkMsTUFBSztzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDQztnQkFBSUosV0FBVTswQkFDYiw0RUFBQ0k7b0JBQUlKLFdBQVU7OEJBSWIsNEVBQUNJO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ3hDLGlEQUFJQTtnQ0FBQ3dDLFdBQVU7Z0NBQWVHLE1BQUs7MENBQ2xDLDRFQUFDRTtvQ0FBSUMsS0FBSzdDLDZDQUFJQTtvQ0FBRThDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUV0Qiw4REFBQ0g7Z0NBQUlKLFdBQVU7O2tEQUNiLDhEQUFDUTt3Q0FBS1IsV0FBVTtrREFDZCw0RUFBQ0s7NENBQUlDLEtBQUs1Qyw4Q0FBS0E7NENBQUU2QyxLQUFJOzRDQUFHRSxTQUFTeEI7Ozs7Ozs7Ozs7O2tEQUVuQyw4REFBQ3VCO3dDQUFLUixXQUFVOzs7Ozs7a0RBQ2hCLDhEQUFDVTt3Q0FDQ0MsV0FBV0M7d0NBQ1hDLGNBQWNDO3dDQUNkaEQsUUFBUUE7d0NBQ1JpRCxnQkFBZ0JBO3dDQUNoQnZDLHNCQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRnRDO0tBdEo4QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3g/MzE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG4vLyBpbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4vL0hlYWRlci5zY3NzJztcclxuaW1wb3J0IHthcGl9IGZyb20gJy4uLy4uL3V0aWxzL0FwaS5qcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtsb2dvLCBhcnJvd30gZnJvbSAnLi4vLi4vaW1nL19pbWcuanMnO1xyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0Q2l0aWVzKCk7XHJcbiAgY29uc3QgY2l0aWVzID0gZGF0YVswXS5hcmVhcztcclxuICByZXR1cm4gY2l0aWVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIZWFkZXIoe2ZpbmRVbml2ZXJzaXRpZXN9KSB7XHJcbiAgbGV0IHRlc3QgPSBhd2FpdCBnZXREYXRhKCk7XHJcblxyXG4gIC8vIGNvbnN0IFtidXJnZXJJc0FjdGl2ZSwgc2V0QnVyZ2VySXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFt2YWx1ZUlucHV0VW5pdmVycywgc2V0VmFsdWVJbnB1dFVuaXZlcnNdID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIGNvbnN0IG1vZGFsVW5pdmVyc1Zpc2FibGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS52aXNhYmxlLm1vZGFsVW5pdmVyc1Zpc2FibGUpO1xyXG4gIC8vIGNvbnN0IGNpdGllcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNpdGllcy5jaXRpZXMpO1xyXG4gIGxldCBjaXR5RnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSk7XHJcbiAgLy8gY29uc3QgW2NpdGllc1RvUmVuZGVyLCBzZXRDaXRpZXNUb1JlbmRlcl0gPSB1c2VTdGF0ZShjaXRpZXMpO1xyXG4gIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAvLyBjb25zdCBtb2RhbENpdGllc1Zpc2FibGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS52aXNhYmxlLm1vZGFsQ2l0aWVzVmlzYWJsZSk7XHJcbiAgLy8gY29uc3QgW21vZGFsQ2l0aWVzVmlzYWJsZSwgc2V0TW9kYWxDaXRpZXNWaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRmlsdGVyZWRDaXRpZXMocGFyYW0pIHtcclxuICAgIGxldCBmaW5kQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgIHNldENpdGllc1RvUmVuZGVyKGZpbmRDaXRpZXMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTW9kYWxDaXRpZXMoKSB7XHJcbiAgICAvLyBzZXRNb2RhbENpdGllc1Zpc2FibGUoIW1vZGFsQ2l0aWVzVmlzYWJsZSk7XHJcbiAgICAvLyBzZXRDaXRpZXNUb1JlbmRlcihjaXRpZXMpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsVW5pdmVycygpIHtcclxuICAgIGRpc3BhdGNoKFRvZ2dsZVVuaXZlcnMoZmFsc2UpKTtcclxuICAgIHNldFZhbHVlSW5wdXRVbml2ZXJzKCcnKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZXZ0KSB7XHJcbiAgICBsZXQgcGFyYW1zID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgIHNldFZhbHVlSW5wdXRVbml2ZXJzKHBhcmFtcyk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZpbmRVbml2ZXJzaXRpZXMocGFyYW1zKSk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVNb2JpbGVNZW51KCkge1xyXG4gICAgZGlzcGF0Y2goVG9nZ2xlTW9iaWxlTWVudSgpKTtcclxuICAgIHNldEJ1cmdlcklzQWN0aXZlKCFidXJnZXJJc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5NYWluPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpb25cIj5SZWdpb248L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3VuaXZlcnNcIj5Vbml2ZXJzPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlcl9fYnVyZ2VyICR7YnVyZ2VySXNBY3RpdmUgJiYgJ2hlYWRlcl9fYnVyZ2VyX2FjdGl2ZSd9YH0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudX0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cItCb0L7Qs9C+0YLQuNC/XCIgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2l0eS1ib3hcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX2NpdHktYXJyb3cgaWNvbiBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnJvd30gYWx0PVwiXCIgb25DbGljaz17aGFuZGxlTW9kYWxDaXRpZXN9IC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fY2l0eS1uYW1lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxNb2RhbENpdGllc0xpc3RcclxuICAgICAgICAgICAgICAgIGlzVmlzYWJsZT17bW9kYWxDaXRpZXNWaXNhYmxlfVxyXG4gICAgICAgICAgICAgICAgc2V0SXNWaXNhYmxlPXtzZXRNb2RhbENpdGllc1Zpc2FibGV9XHJcbiAgICAgICAgICAgICAgICBjaXRpZXM9e2NpdGllc31cclxuICAgICAgICAgICAgICAgIGNpdGllc1RvUmVuZGVyPXtjaXRpZXNUb1JlbmRlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcmVkQ2l0aWVzPXtoYW5kbGVGaWx0ZXJlZENpdGllc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtIGhlYWRlcl9faXRlbV90eXBlX2lucHV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQo9GH0LXQsdC90L7QtSDQt9Cw0LLQtdC00LXQvdC40LVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlSW5wdXRVbml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGhhbmRsZUlucHV0KGV2dCkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYnRuIGhlYWRlcl9fYnRuIG5vbmVDb2xvciAgICR7bW9kYWxVbml2ZXJzVmlzYWJsZSAmJiAnaGVhZGVyX19idG5fdmlzYWJsZSd9YH0gb25DbGljaz17Y2xvc2VNb2RhbFVuaXZlcnN9PlxyXG4gICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxNb2RhVW5pdmVyc2l0aWVzTGlzdCBpc1Zpc2FibGU9e21vZGFsVW5pdmVyc1Zpc2FibGV9IGNsb3NlTW9kYWxVbml2ZXJzPXtjbG9zZU1vZGFsVW5pdmVyc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtIGhlYWRlcl9faXRlbV90eXBlX3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3Byb2ZpbGUtYXZhdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19wcm9maWxlLW5hbWVcIj7QkNCy0YLQvtGA0LjQt9Cw0YbQuNGPPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyLWNvbnRlaW5lciBzd2lwZXJcIj5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfbGlzdCAgc3dpcGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uXX1cclxuICAgICAgICAgICAgICBsb29wPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsnYXV0byd9XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA9ezJ9XHJcbiAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXsyNX1cclxuICAgICAgICAgICAgICBzaW11bGF0ZVRvdWNoPXtmYWxzZX1cclxuICAgICAgICAgICAgICB3YXRjaE92ZXJmbG93PXt0cnVlfVxyXG4gICAgICAgICAgICAgIGtleWJvYXJkPXt7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25seUluVmlld3BvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYWdlVXBEb3duOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGlvbj17e25leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLCBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J319PlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCS0YPQt9GLPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCa0L7Qu9C70LXQtNC20Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KLQtdGF0L3QuNC60YPQvNGLPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCj0YfQuNC70LjRidCwPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCh0L/QtdGG0LjQsNC70YzQvdC+0YHRgtC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCf0YDQvtGE0LXRgdGB0LjQuDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QntGC0LfRi9Cy0Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KPRh9C10LHQvdGL0Lwg0LfQsNCy0LXQtNC10L3QuNGP0Lw8L2E+eycgJ31cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCi0LXRgdGCINC90LAg0L/RgNC+0YTQvtGA0LjQtdC90YLQsNGG0LjRjjwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCi0LXRgdGCINC90LAg0L/RgNC+0YTQvtGA0LjQtdC90YLQsNGG0LjRjjwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLXByZXZcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImFwaSIsIkltYWdlIiwiTGluayIsImxvZ28iLCJhcnJvdyIsImdldERhdGEiLCJkYXRhIiwiZ2V0Q2l0aWVzIiwiY2l0aWVzIiwiYXJlYXMiLCJIZWFkZXIiLCJmaW5kVW5pdmVyc2l0aWVzIiwidGVzdCIsImNpdHlGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUZpbHRlcmVkQ2l0aWVzIiwicGFyYW0iLCJmaW5kQ2l0aWVzIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2V0Q2l0aWVzVG9SZW5kZXIiLCJoYW5kbGVNb2RhbENpdGllcyIsImNsb3NlTW9kYWxVbml2ZXJzIiwiZGlzcGF0Y2giLCJUb2dnbGVVbml2ZXJzIiwic2V0VmFsdWVJbnB1dFVuaXZlcnMiLCJoYW5kbGVJbnB1dCIsImV2dCIsInBhcmFtcyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTW9iaWxlTWVudSIsIlRvZ2dsZU1vYmlsZU1lbnUiLCJzZXRCdXJnZXJJc0FjdGl2ZSIsImJ1cmdlcklzQWN0aXZlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsImhyZWYiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwib25DbGljayIsIk1vZGFsQ2l0aWVzTGlzdCIsImlzVmlzYWJsZSIsIm1vZGFsQ2l0aWVzVmlzYWJsZSIsInNldElzVmlzYWJsZSIsInNldE1vZGFsQ2l0aWVzVmlzYWJsZSIsImNpdGllc1RvUmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.jsx\n"));

/***/ })

});