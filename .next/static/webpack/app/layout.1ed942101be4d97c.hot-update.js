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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//Header.scss */ \"(app-pages-browser)/./src/components/Header/Header.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _img_img_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/_img.js */ \"(app-pages-browser)/./src/img/_img.js\");\n/* harmony import */ var _Modals_ModalCitiesList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modals/ModalCitiesList.jsx */ \"(app-pages-browser)/./src/components/Modals/ModalCitiesList.jsx\");\n/* harmony import */ var _Modals_ModaUniversitiesList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modals/ModaUniversitiesList.jsx */ \"(app-pages-browser)/./src/components/Modals/ModaUniversitiesList.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import {Link} from 'react-router-dom';\n\n\n\n\n\n\n\nfunction Header(param) {\n    let { univers, cities } = param;\n    _s();\n    const [modalCitiesVisable, setModalCitiesVisable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [citiesToRender, setCitiesToRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cities);\n    const [burgerIsActive, setBurgerIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [modalUniversVisable, setModalUniversVisable] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [valueInputUnivers, setValueInputUnivers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // const modalUniversVisable = useSelector(state => state.visable.modalUniversVisable);\n    let cityFromLocalStorage = JSON.parse(localStorage.getItem(\"city\"));\n    function handleFilteredCities(param) {\n        let findCities = cities.filter((item)=>item.name.toLowerCase().includes(param.toLowerCase()));\n        setCitiesToRender(findCities);\n    }\n    function handleModalCities() {\n        setModalCitiesVisable(!modalCitiesVisable);\n        setCitiesToRender(cities);\n    }\n    function closeModalUnivers() {\n        setModalUniversVisable(false);\n        setValueInputUnivers(\"\");\n    }\n    function handleInput(evt) {\n        let params = evt.target.value;\n        setValueInputUnivers(params);\n        if (params.length >= 3) {\n            findUniversities(params);\n        } else {\n            setModalUniversVisable(false);\n        }\n    }\n    function handleMobileMenu() {\n        dispatch(ToggleMobileMenu());\n        setBurgerIsActive(!burgerIsActive);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header__content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__burger \".concat(burgerIsActive && \"header__burger_active\"),\n                        onClick: handleMobileMenu,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"header__logo\",\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.logo,\n                                    alt: \"Логотип\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header__city-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-arrow icon border\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: _img_img_js__WEBPACK_IMPORTED_MODULE_5__.arrow,\n                                            alt: \"\",\n                                            onClick: handleModalCities\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"header__city-name\",\n                                        children: cityFromLocalStorage ? cityFromLocalStorage.name : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ModalCitiesList_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        isVisable: modalCitiesVisable,\n                                        citiesToRender: citiesToRender,\n                                        handleFilteredCities: handleFilteredCities,\n                                        setModalCitiesVisable: setModalCitiesVisable,\n                                        univers: univers\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header__item header__item_type_input\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header__input\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Учебное заведение\",\n                                    value: valueInputUnivers,\n                                    onChange: (evt)=>handleInput(evt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn header__btn noneColor \".concat(modalUniversVisable && \"header__btn_visable\"),\n                                    onClick: closeModalUnivers,\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ModaUniversitiesList_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    isVisable: modalUniversVisable,\n                                    closeModalUnivers: closeModalUnivers,\n                                    univers: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"oZYrkqiHaCasvRW1yQPmJsew+Lg=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF5QztBQUNqQjtBQUNrQjtBQUNYO0FBQ0Y7QUFDaUI7QUFDYztBQUNVO0FBQ3ZELFNBQVNRLE9BQU8sS0FBaUI7UUFBakIsRUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUMsR0FBakI7O0lBQzdCLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR1osK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQ1U7SUFDckQsTUFBTSxDQUFDSyxnQkFBZ0JDLGtCQUFrQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDaUIscUJBQXFCQyx1QkFBdUIsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ21CLG1CQUFtQkMscUJBQXFCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUMzRCx1RkFBdUY7SUFDdkYsSUFBSXFCLHVCQUF1QkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFFM0QsU0FBU0MscUJBQXFCQyxLQUFLO1FBQ2pDLElBQUlDLGFBQWFsQixPQUFPbUIsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDTixNQUFNSyxXQUFXO1FBQ3pGbEIsa0JBQWtCYztJQUNwQjtJQUVBLFNBQVNNO1FBQ1B0QixzQkFBc0IsQ0FBQ0Q7UUFDdkJHLGtCQUFrQko7SUFDcEI7SUFDQSxTQUFTeUI7UUFDUGpCLHVCQUF1QjtRQUN2QkUscUJBQXFCO0lBQ3ZCO0lBQ0EsU0FBU2dCLFlBQVlDLEdBQUc7UUFDdEIsSUFBSUMsU0FBU0QsSUFBSUUsTUFBTSxDQUFDQyxLQUFLO1FBQzdCcEIscUJBQXFCa0I7UUFDckIsSUFBSUEsT0FBT0csTUFBTSxJQUFJLEdBQUc7WUFDdEJDLGlCQUFpQko7UUFDbkIsT0FBTztZQUNMcEIsdUJBQXVCO1FBQ3pCO0lBQ0Y7SUFDQSxTQUFTeUI7UUFDUEMsU0FBU0M7UUFDVDdCLGtCQUFrQixDQUFDRDtJQUNyQjtJQUNBLHFCQUNFLDhEQUFDK0I7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVcsa0JBQTRELE9BQTFDaEMsa0JBQWtCO3dCQUEyQmtDLFNBQVNOO2tDQUN0Riw0RUFBQ087Ozs7Ozs7Ozs7a0NBRUgsOERBQUNGO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQzVDLGlEQUFJQTtnQ0FBQzRDLFdBQVU7Z0NBQWVJLE1BQUs7MENBQ2xDLDRFQUFDakQsa0RBQUtBO29DQUFDa0QsS0FBS2hELDZDQUFJQTtvQ0FBRWlELEtBQUk7Ozs7Ozs7Ozs7OzBDQUV4Qiw4REFBQ0w7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDRzt3Q0FBS0gsV0FBVTtrREFDZCw0RUFBQzdDLGtEQUFLQTs0Q0FBQ2tELEtBQUsvQyw4Q0FBS0E7NENBQUVnRCxLQUFJOzRDQUFHSixTQUFTZjs7Ozs7Ozs7Ozs7a0RBRXJDLDhEQUFDZ0I7d0NBQUtILFdBQVU7a0RBQXFCMUIsdUJBQXVCQSxxQkFBcUJVLElBQUksR0FBRzs7Ozs7O2tEQUN4Riw4REFBQ3pCLG1FQUFlQTt3Q0FDZGdELFdBQVczQzt3Q0FDWEUsZ0JBQWdCQTt3Q0FDaEJhLHNCQUFzQkE7d0NBQ3RCZCx1QkFBdUJBO3dDQUN2QkgsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZiw4REFBQ3VDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNRO29DQUFNQyxNQUFLO29DQUFPQyxhQUFZO29DQUFvQmpCLE9BQU9yQjtvQ0FBbUJ1QyxVQUFVckIsQ0FBQUEsTUFBT0QsWUFBWUM7Ozs7Ozs4Q0FDMUcsOERBQUNzQjtvQ0FBT1osV0FBVyw2QkFBMEUsT0FBN0M5Qix1QkFBdUI7b0NBQXlCZ0MsU0FBU2Q7OENBQW1COzs7Ozs7OENBRzVILDhEQUFDNUIsd0VBQW9CQTtvQ0FBQytDLFdBQVdyQztvQ0FBcUJrQixtQkFBbUJBO29DQUFtQjFCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFakg7R0FsSXdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeD8zMTYwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuLy8gaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICcuLy9IZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7bG9nbywgYXJyb3d9IGZyb20gJy4uLy4uL2ltZy9faW1nLmpzJztcclxuaW1wb3J0IE1vZGFsQ2l0aWVzTGlzdCBmcm9tICcuLi9Nb2RhbHMvTW9kYWxDaXRpZXNMaXN0LmpzeCc7XHJcbmltcG9ydCBNb2RhVW5pdmVyc2l0aWVzTGlzdCBmcm9tICcuLi9Nb2RhbHMvTW9kYVVuaXZlcnNpdGllc0xpc3QuanN4JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHt1bml2ZXJzLCBjaXRpZXN9KSB7XHJcbiAgY29uc3QgW21vZGFsQ2l0aWVzVmlzYWJsZSwgc2V0TW9kYWxDaXRpZXNWaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2l0aWVzVG9SZW5kZXIsIHNldENpdGllc1RvUmVuZGVyXSA9IHVzZVN0YXRlKGNpdGllcyk7XHJcbiAgY29uc3QgW2J1cmdlcklzQWN0aXZlLCBzZXRCdXJnZXJJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsVW5pdmVyc1Zpc2FibGUsIHNldE1vZGFsVW5pdmVyc1Zpc2FibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWx1ZUlucHV0VW5pdmVycywgc2V0VmFsdWVJbnB1dFVuaXZlcnNdID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIGNvbnN0IG1vZGFsVW5pdmVyc1Zpc2FibGUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS52aXNhYmxlLm1vZGFsVW5pdmVyc1Zpc2FibGUpO1xyXG4gIGxldCBjaXR5RnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbHRlcmVkQ2l0aWVzKHBhcmFtKSB7XHJcbiAgICBsZXQgZmluZENpdGllcyA9IGNpdGllcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwYXJhbS50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICBzZXRDaXRpZXNUb1JlbmRlcihmaW5kQ2l0aWVzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU1vZGFsQ2l0aWVzKCkge1xyXG4gICAgc2V0TW9kYWxDaXRpZXNWaXNhYmxlKCFtb2RhbENpdGllc1Zpc2FibGUpO1xyXG4gICAgc2V0Q2l0aWVzVG9SZW5kZXIoY2l0aWVzKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbFVuaXZlcnMoKSB7XHJcbiAgICBzZXRNb2RhbFVuaXZlcnNWaXNhYmxlKGZhbHNlKTtcclxuICAgIHNldFZhbHVlSW5wdXRVbml2ZXJzKCcnKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZXZ0KSB7XHJcbiAgICBsZXQgcGFyYW1zID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgIHNldFZhbHVlSW5wdXRVbml2ZXJzKHBhcmFtcyk7XHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgIGZpbmRVbml2ZXJzaXRpZXMocGFyYW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1vZGFsVW5pdmVyc1Zpc2FibGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVNb2JpbGVNZW51KCkge1xyXG4gICAgZGlzcGF0Y2goVG9nZ2xlTW9iaWxlTWVudSgpKTtcclxuICAgIHNldEJ1cmdlcklzQWN0aXZlKCFidXJnZXJJc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlcl9fYnVyZ2VyICR7YnVyZ2VySXNBY3RpdmUgJiYgJ2hlYWRlcl9fYnVyZ2VyX2FjdGl2ZSd9YH0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudX0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCLQm9C+0LPQvtGC0LjQv1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2NpdHktYm94XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19jaXR5LWFycm93IGljb24gYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthcnJvd30gYWx0PVwiXCIgb25DbGljaz17aGFuZGxlTW9kYWxDaXRpZXN9IC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fY2l0eS1uYW1lXCI+e2NpdHlGcm9tTG9jYWxTdG9yYWdlID8gY2l0eUZyb21Mb2NhbFN0b3JhZ2UubmFtZSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8TW9kYWxDaXRpZXNMaXN0XHJcbiAgICAgICAgICAgICAgICBpc1Zpc2FibGU9e21vZGFsQ2l0aWVzVmlzYWJsZX1cclxuICAgICAgICAgICAgICAgIGNpdGllc1RvUmVuZGVyPXtjaXRpZXNUb1JlbmRlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlcmVkQ2l0aWVzPXtoYW5kbGVGaWx0ZXJlZENpdGllc31cclxuICAgICAgICAgICAgICAgIHNldE1vZGFsQ2l0aWVzVmlzYWJsZT17c2V0TW9kYWxDaXRpZXNWaXNhYmxlfVxyXG4gICAgICAgICAgICAgICAgdW5pdmVycz17dW5pdmVyc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW0gaGVhZGVyX19pdGVtX3R5cGVfaW5wdXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQo9GH0LXQsdC90L7QtSDQt9Cw0LLQtdC00LXQvdC40LVcIiB2YWx1ZT17dmFsdWVJbnB1dFVuaXZlcnN9IG9uQ2hhbmdlPXtldnQgPT4gaGFuZGxlSW5wdXQoZXZ0KX0gLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biBoZWFkZXJfX2J0biBub25lQ29sb3IgJHttb2RhbFVuaXZlcnNWaXNhYmxlICYmICdoZWFkZXJfX2J0bl92aXNhYmxlJ31gfSBvbkNsaWNrPXtjbG9zZU1vZGFsVW5pdmVyc30+XHJcbiAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPE1vZGFVbml2ZXJzaXRpZXNMaXN0IGlzVmlzYWJsZT17bW9kYWxVbml2ZXJzVmlzYWJsZX0gY2xvc2VNb2RhbFVuaXZlcnM9e2Nsb3NlTW9kYWxVbml2ZXJzfSB1bml2ZXJzLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2l0ZW0gaGVhZGVyX19pdGVtX3R5cGVfcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcHJvZmlsZS1hdmF0YXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3Byb2ZpbGUtbmFtZVwiPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXItY29udGVpbmVyIHN3aXBlclwiPlxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9saXN0ICBzd2lwZXItd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb25dfVxyXG4gICAgICAgICAgICAgIGxvb3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9eydhdXRvJ31cclxuICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cD17Mn1cclxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezI1fVxyXG4gICAgICAgICAgICAgIHNpbXVsYXRlVG91Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHdhdGNoT3ZlcmZsb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAga2V5Ym9hcmQ9e3tcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhZ2VVcERvd246IHRydWUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt7bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnfX0+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JLRg9C30Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQvtC70LvQtdC00LbQuDwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QotC10YXQvdC40LrRg9C80Ys8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KPRh9C40LvQuNGJ0LA8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Lg8L2E+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhcl9zbGlkZSAgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0J/RgNC+0YTQtdGB0YHQuNC4PC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgIFN3aXBlclNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCe0YLQt9GL0LLRizwvYT5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJoZWFkZXItbmF2YmFyX3NsaWRlICBTd2lwZXJTbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7Qo9GH0LXQsdC90YvQvCDQt9Cw0LLQtdC00LXQvdC40Y/QvDwvYT57JyAnfVxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KLQtdGB0YIg0L3QsCDQv9GA0L7RhNC+0YDQuNC10L3RgtCw0YbQuNGOPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cImhlYWRlci1uYXZiYXJfc2xpZGUgU3dpcGVyU2xpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0KLQtdGB0YIg0L3QsCDQv9GA0L7RhNC+0YDQuNC10L3RgtCw0YbQuNGOPC9hPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJsb2dvIiwiYXJyb3ciLCJNb2RhbENpdGllc0xpc3QiLCJNb2RhVW5pdmVyc2l0aWVzTGlzdCIsIkhlYWRlciIsInVuaXZlcnMiLCJjaXRpZXMiLCJtb2RhbENpdGllc1Zpc2FibGUiLCJzZXRNb2RhbENpdGllc1Zpc2FibGUiLCJjaXRpZXNUb1JlbmRlciIsInNldENpdGllc1RvUmVuZGVyIiwiYnVyZ2VySXNBY3RpdmUiLCJzZXRCdXJnZXJJc0FjdGl2ZSIsIm1vZGFsVW5pdmVyc1Zpc2FibGUiLCJzZXRNb2RhbFVuaXZlcnNWaXNhYmxlIiwidmFsdWVJbnB1dFVuaXZlcnMiLCJzZXRWYWx1ZUlucHV0VW5pdmVycyIsImNpdHlGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUZpbHRlcmVkQ2l0aWVzIiwicGFyYW0iLCJmaW5kQ2l0aWVzIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlTW9kYWxDaXRpZXMiLCJjbG9zZU1vZGFsVW5pdmVycyIsImhhbmRsZUlucHV0IiwiZXZ0IiwicGFyYW1zIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJmaW5kVW5pdmVyc2l0aWVzIiwiaGFuZGxlTW9iaWxlTWVudSIsImRpc3BhdGNoIiwiVG9nZ2xlTW9iaWxlTWVudSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJzcGFuIiwiaHJlZiIsInNyYyIsImFsdCIsImlzVmlzYWJsZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.jsx\n"));

/***/ })

});