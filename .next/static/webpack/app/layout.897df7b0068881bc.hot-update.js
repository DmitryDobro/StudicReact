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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//Header.scss */ \"(app-pages-browser)/./src/components/Header/Header.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _img_img_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/_img.js */ \"(app-pages-browser)/./src/img/_img.js\");\n/* harmony import */ var _Modals_ModalCitiesList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modals/ModalCitiesList.jsx */ \"(app-pages-browser)/./src/components/Modals/ModalCitiesList.jsx\");\n/* harmony import */ var _Modals_ModaUniversitiesList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modals/ModaUniversitiesList.jsx */ \"(app-pages-browser)/./src/components/Modals/ModaUniversitiesList.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import {Link} from 'react-router-dom';\n\n\n\n\n\n\n\nfunction Header(param) {\n    let { univers, cities, findUniversities } = param;\n    _s();\n    const [modalCitiesVisable, setModalCitiesVisable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [citiesToRender, setCitiesToRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cities);\n    const [burgerIsActive, setBurgerIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [modalUniversVisable, setModalUniversVisable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [valueInputUnivers, setValueInputUnivers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // const modalUniversVisable = useSelector(state => state.visable.modalUniversVisable);\n    let cityFromLocalStorage = JSON.parse(localStorage.getItem(\"city\"));\n    function handleFilteredCities(param) {\n        let findCities = cities.filter((item)=>item.name.toLowerCase().includes(param.toLowerCase()));\n        setCitiesToRender(findCities);\n    }\n    function handleModalCities() {\n        setModalCitiesVisable(!modalCitiesVisable);\n        setCitiesToRender(cities);\n    }\n    function closeModalUnivers() {\n        setModalUniversVisable(false);\n        setValueInputUnivers(\"\");\n    }\n    function handleInput(evt) {\n        let params = evt.target.value;\n        setValueInputUnivers(params);\n        if (params.length >= 3) {\n            let test = findUniversities(params);\n            log;\n        } else {\n            setModalUniversVisable(false);\n        }\n    }\n    function handleMobileMenu() {\n        dispatch(ToggleMobileMenu());\n        setBurgerIsActive(!burgerIsActive);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header__content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__burger \".concat(burgerIsActive && \"header__burger_active\"),\n                        onClick: handleMobileMenu,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"header__logo\",\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.logo,\n                                    alt: \"Логотип\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__city-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-arrow icon border\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.arrow,\n                                            alt: \"\",\n                                            onClick: handleModalCities\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-name\",\n                                        children: cityFromLocalStorage ? cityFromLocalStorage.name : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ModalCitiesList_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        isVisable: modalCitiesVisable,\n                                        citiesToRender: citiesToRender,\n                                        handleFilteredCities: handleFilteredCities,\n                                        setModalCitiesVisable: setModalCitiesVisable,\n                                        univers: univers\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__item header__item_type_input\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header__input\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Учебное заведение\",\n                                    value: valueInputUnivers,\n                                    onChange: (evt)=>handleInput(evt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn header__btn noneColor \".concat(modalUniversVisable && \"header__btn_visable\"),\n                                    onClick: closeModalUnivers,\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ModaUniversitiesList_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    isVisable: modalUniversVisable,\n                                    closeModalUnivers: closeModalUnivers,\n                                    univers: univers\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"oZYrkqiHaCasvRW1yQPmJsew+Lg=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF5QztBQUNqQjtBQUNrQjtBQUNYO0FBQ0Y7QUFDaUI7QUFDYztBQUNVO0FBQ3ZELFNBQVNRLE9BQU8sS0FBbUM7UUFBbkMsRUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFDLEdBQW5DOztJQUM3QixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUNVO0lBQ3JELE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2tCLHFCQUFxQkMsdUJBQXVCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUMvRCxNQUFNLENBQUNvQixtQkFBbUJDLHFCQUFxQixHQUFHckIsK0NBQVFBLENBQUM7SUFDM0QsdUZBQXVGO0lBQ3ZGLElBQUlzQix1QkFBdUJDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO0lBRTNELFNBQVNDLHFCQUFxQkMsS0FBSztRQUNqQyxJQUFJQyxhQUFhbkIsT0FBT29CLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ04sTUFBTUssV0FBVztRQUN6RmxCLGtCQUFrQmM7SUFDcEI7SUFFQSxTQUFTTTtRQUNQdEIsc0JBQXNCLENBQUNEO1FBQ3ZCRyxrQkFBa0JMO0lBQ3BCO0lBQ0EsU0FBUzBCO1FBQ1BqQix1QkFBdUI7UUFDdkJFLHFCQUFxQjtJQUN2QjtJQUNBLFNBQVNnQixZQUFZQyxHQUFHO1FBQ3RCLElBQUlDLFNBQVNELElBQUlFLE1BQU0sQ0FBQ0MsS0FBSztRQUM3QnBCLHFCQUFxQmtCO1FBQ3JCLElBQUlBLE9BQU9HLE1BQU0sSUFBSSxHQUFHO1lBQ3RCLElBQUlDLE9BQU9oQyxpQkFBaUI0QjtZQUM1Qks7UUFDRixPQUFPO1lBQ0x6Qix1QkFBdUI7UUFDekI7SUFDRjtJQUNBLFNBQVMwQjtRQUNQQyxTQUFTQztRQUNUOUIsa0JBQWtCLENBQUNEO0lBQ3JCO0lBQ0EscUJBQ0UsOERBQUNnQztRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVyxrQkFBNEQsT0FBMUNqQyxrQkFBa0I7d0JBQTJCbUMsU0FBU047a0NBQ3RGLDRFQUFDTzs7Ozs7Ozs7OztrQ0FFSCw4REFBQ0Y7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDOUMsaURBQUlBO2dDQUFDOEMsV0FBVTtnQ0FBZUksTUFBSzswQ0FDbEMsNEVBQUNuRCxrREFBS0E7b0NBQUNvRCxLQUFLbEQsNkNBQUlBO29DQUFFbUQsS0FBSTs7Ozs7Ozs7Ozs7MENBRXhCLDhEQUFDTDtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUFLSCxXQUFVO2tEQUNkLDRFQUFDL0Msa0RBQUtBOzRDQUFDb0QsS0FBS2pELDhDQUFLQTs0Q0FBRWtELEtBQUk7NENBQUdKLFNBQVNoQjs7Ozs7Ozs7Ozs7a0RBRXJDLDhEQUFDaUI7d0NBQUtILFdBQVU7a0RBQXFCM0IsdUJBQXVCQSxxQkFBcUJVLElBQUksR0FBRzs7Ozs7O2tEQUN4Riw4REFBQzFCLG1FQUFlQTt3Q0FDZGtELFdBQVc1Qzt3Q0FDWEUsZ0JBQWdCQTt3Q0FDaEJhLHNCQUFzQkE7d0NBQ3RCZCx1QkFBdUJBO3dDQUN2QkosU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZiw4REFBQ3lDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNRO29DQUFNQyxNQUFLO29DQUFPQyxhQUFZO29DQUFvQmxCLE9BQU9yQjtvQ0FBbUJ3QyxVQUFVdEIsQ0FBQUEsTUFBT0QsWUFBWUM7Ozs7Ozs4Q0FDMUcsOERBQUN1QjtvQ0FBT1osV0FBVyw2QkFBMEUsT0FBN0MvQix1QkFBdUI7b0NBQXlCaUMsU0FBU2Y7OENBQW1COzs7Ozs7OENBRzVILDhEQUFDN0Isd0VBQW9CQTtvQ0FBQ2lELFdBQVd0QztvQ0FBcUJrQixtQkFBbUJBO29DQUFtQjNCLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRW5IO0dBbkl3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3g/MzE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbi8vIGltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi8vSGVhZGVyLnNjc3MnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge2xvZ28sIGFycm93fSBmcm9tICcuLi8uLi9pbWcvX2ltZy5qcyc7XHJcbmltcG9ydCBNb2RhbENpdGllc0xpc3QgZnJvbSAnLi4vTW9kYWxzL01vZGFsQ2l0aWVzTGlzdC5qc3gnO1xyXG5pbXBvcnQgTW9kYVVuaXZlcnNpdGllc0xpc3QgZnJvbSAnLi4vTW9kYWxzL01vZGFVbml2ZXJzaXRpZXNMaXN0LmpzeCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7dW5pdmVycywgY2l0aWVzLCBmaW5kVW5pdmVyc2l0aWVzfSkge1xyXG4gIGNvbnN0IFttb2RhbENpdGllc1Zpc2FibGUsIHNldE1vZGFsQ2l0aWVzVmlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NpdGllc1RvUmVuZGVyLCBzZXRDaXRpZXNUb1JlbmRlcl0gPSB1c2VTdGF0ZShjaXRpZXMpO1xyXG4gIGNvbnN0IFtidXJnZXJJc0FjdGl2ZSwgc2V0QnVyZ2VySXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbFVuaXZlcnNWaXNhYmxlLCBzZXRNb2RhbFVuaXZlcnNWaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsdWVJbnB1dFVuaXZlcnMsIHNldFZhbHVlSW5wdXRVbml2ZXJzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBjb25zdCBtb2RhbFVuaXZlcnNWaXNhYmxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudmlzYWJsZS5tb2RhbFVuaXZlcnNWaXNhYmxlKTtcclxuICBsZXQgY2l0eUZyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJlZENpdGllcyhwYXJhbSkge1xyXG4gICAgbGV0IGZpbmRDaXRpZXMgPSBjaXRpZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGFyYW0udG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgc2V0Q2l0aWVzVG9SZW5kZXIoZmluZENpdGllcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVNb2RhbENpdGllcygpIHtcclxuICAgIHNldE1vZGFsQ2l0aWVzVmlzYWJsZSghbW9kYWxDaXRpZXNWaXNhYmxlKTtcclxuICAgIHNldENpdGllc1RvUmVuZGVyKGNpdGllcyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWxVbml2ZXJzKCkge1xyXG4gICAgc2V0TW9kYWxVbml2ZXJzVmlzYWJsZShmYWxzZSk7XHJcbiAgICBzZXRWYWx1ZUlucHV0VW5pdmVycygnJyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0KGV2dCkge1xyXG4gICAgbGV0IHBhcmFtcyA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRWYWx1ZUlucHV0VW5pdmVycyhwYXJhbXMpO1xyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPj0gMykge1xyXG4gICAgICBsZXQgdGVzdCA9IGZpbmRVbml2ZXJzaXRpZXMocGFyYW1zKTtcclxuICAgICAgbG9nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNb2RhbFVuaXZlcnNWaXNhYmxlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlTW9iaWxlTWVudSgpIHtcclxuICAgIGRpc3BhdGNoKFRvZ2dsZU1vYmlsZU1lbnUoKSk7XHJcbiAgICBzZXRCdXJnZXJJc0FjdGl2ZSghYnVyZ2VySXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXJfX2J1cmdlciAke2J1cmdlcklzQWN0aXZlICYmICdoZWFkZXJfX2J1cmdlcl9hY3RpdmUnfWB9IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnV9PlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwi0JvQvtCz0L7RgtC40L9cIiAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jaXR5LWJveFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fY2l0eS1hcnJvdyBpY29uIGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YXJyb3d9IGFsdD1cIlwiIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2l0aWVzfSAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX2NpdHktbmFtZVwiPntjaXR5RnJvbUxvY2FsU3RvcmFnZSA/IGNpdHlGcm9tTG9jYWxTdG9yYWdlLm5hbWUgOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPE1vZGFsQ2l0aWVzTGlzdFxyXG4gICAgICAgICAgICAgICAgaXNWaXNhYmxlPXttb2RhbENpdGllc1Zpc2FibGV9XHJcbiAgICAgICAgICAgICAgICBjaXRpZXNUb1JlbmRlcj17Y2l0aWVzVG9SZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXJlZENpdGllcz17aGFuZGxlRmlsdGVyZWRDaXRpZXN9XHJcbiAgICAgICAgICAgICAgICBzZXRNb2RhbENpdGllc1Zpc2FibGU9e3NldE1vZGFsQ2l0aWVzVmlzYWJsZX1cclxuICAgICAgICAgICAgICAgIHVuaXZlcnM9e3VuaXZlcnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pdGVtIGhlYWRlcl9faXRlbV90eXBlX2lucHV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0KPRh9C10LHQvdC+0LUg0LfQsNCy0LXQtNC10L3QuNC1XCIgdmFsdWU9e3ZhbHVlSW5wdXRVbml2ZXJzfSBvbkNoYW5nZT17ZXZ0ID0+IGhhbmRsZUlucHV0KGV2dCl9IC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gaGVhZGVyX19idG4gbm9uZUNvbG9yICR7bW9kYWxVbml2ZXJzVmlzYWJsZSAmJiAnaGVhZGVyX19idG5fdmlzYWJsZSd9YH0gb25DbGljaz17Y2xvc2VNb2RhbFVuaXZlcnN9PlxyXG4gICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxNb2RhVW5pdmVyc2l0aWVzTGlzdCBpc1Zpc2FibGU9e21vZGFsVW5pdmVyc1Zpc2FibGV9IGNsb3NlTW9kYWxVbml2ZXJzPXtjbG9zZU1vZGFsVW5pdmVyc30gdW5pdmVycz17dW5pdmVyc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW0gaGVhZGVyX19pdGVtX3R5cGVfcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcHJvZmlsZS1hdmF0YXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3Byb2ZpbGUtbmFtZVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXItY29udGVpbmVyIHN3aXBlclwiPlxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9saXN0ICBzd2lwZXItd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb25dfVxyXG4gICAgICAgICAgICAgIGxvb3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9eydhdXRvJ31cclxuICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cD17Mn1cclxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezI1fVxyXG4gICAgICAgICAgICAgIHNpbXVsYXRlVG91Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHdhdGNoT3ZlcmZsb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAga2V5Ym9hcmQ9e3tcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhZ2VVcERvd246IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt7bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnfX0+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JLRg9C30Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQvtC70LvQtdC00LbQuDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QotC10YXQvdC40LrRg9C80Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KPRh9C40LvQuNGJ0LA8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0J/RgNC+0YTQtdGB0YHQuNC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCe0YLQt9GL0LLRizwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7Qo9GH0LXQsdC90YvQvCDQt9Cw0LLQtdC00LXQvdC40Y/QvDwvYT57JyAnfVxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KLQtdGB0YIg0L3QsCDQv9GA0L7RhNC+0YDQuNC10L3RgtCw0YbQuNGOPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KLQtdGB0YIg0L3QsCDQv9GA0L7RhNC+0YDQuNC10L3RgtCw0YbQuNGOPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJsb2dvIiwiYXJyb3ciLCJNb2RhbENpdGllc0xpc3QiLCJNb2RhVW5pdmVyc2l0aWVzTGlzdCIsIkhlYWRlciIsInVuaXZlcnMiLCJjaXRpZXMiLCJmaW5kVW5pdmVyc2l0aWVzIiwibW9kYWxDaXRpZXNWaXNhYmxlIiwic2V0TW9kYWxDaXRpZXNWaXNhYmxlIiwiY2l0aWVzVG9SZW5kZXIiLCJzZXRDaXRpZXNUb1JlbmRlciIsImJ1cmdlcklzQWN0aXZlIiwic2V0QnVyZ2VySXNBY3RpdmUiLCJtb2RhbFVuaXZlcnNWaXNhYmxlIiwic2V0TW9kYWxVbml2ZXJzVmlzYWJsZSIsInZhbHVlSW5wdXRVbml2ZXJzIiwic2V0VmFsdWVJbnB1dFVuaXZlcnMiLCJjaXR5RnJvbUxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVGaWx0ZXJlZENpdGllcyIsInBhcmFtIiwiZmluZENpdGllcyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZU1vZGFsQ2l0aWVzIiwiY2xvc2VNb2RhbFVuaXZlcnMiLCJoYW5kbGVJbnB1dCIsImV2dCIsInBhcmFtcyIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwidGVzdCIsImxvZyIsImhhbmRsZU1vYmlsZU1lbnUiLCJkaXNwYXRjaCIsIlRvZ2dsZU1vYmlsZU1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwic3BhbiIsImhyZWYiLCJzcmMiLCJhbHQiLCJpc1Zpc2FibGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.jsx\n"));

/***/ })

});