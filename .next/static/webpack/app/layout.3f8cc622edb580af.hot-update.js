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

/***/ "(app-pages-browser)/./src/components/Modals/ModaUniversitiesList.jsx":
/*!********************************************************!*\
  !*** ./src/components/Modals/ModaUniversitiesList.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.scss */ \"(app-pages-browser)/./src/components/Modals/Modal.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction ModaUniversitiesList(param) {\n    let { isVisable, closeModalUnivers, univers } = param;\n    function addUniversityToLS(university) {\n        localStorage.setItem(\"university\", JSON.stringify(university));\n        closeModalUnivers();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"modal modal_type_universitiesList \".concat(isVisable && \"modal_isVisable\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal__list\",\n            children: univers.length > 0 ? univers.map((university)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    to: \"/univers/\".concat(university.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>{\n                            addUniversityToLS(university);\n                        },\n                        children: university.text\n                    }, university.id, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Modals\\\\ModaUniversitiesList.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 15\n                    }, this)\n                }, university.id, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Modals\\\\ModaUniversitiesList.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Ничего не найдено\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Modals\\\\ModaUniversitiesList.jsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Modals\\\\ModaUniversitiesList.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Рабочий стол\\\\Studic_React\\\\studic\\\\src\\\\components\\\\Modals\\\\ModaUniversitiesList.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ModaUniversitiesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModaUniversitiesList);\nvar _c;\n$RefreshReg$(_c, \"ModaUniversitiesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vZGFscy9Nb2RhVW5pdmVyc2l0aWVzTGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDNkI7QUFDUDtBQUN0QixTQUFTQyxxQkFBcUIsS0FBdUM7UUFBdkMsRUFBQ0MsU0FBUyxFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTyxFQUFDLEdBQXZDO0lBQzVCLFNBQVNDLGtCQUFrQkMsVUFBVTtRQUNuQ0MsYUFBYUMsT0FBTyxDQUFDLGNBQWNDLEtBQUtDLFNBQVMsQ0FBQ0o7UUFDbERIO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1E7UUFBUUMsV0FBVyxxQ0FBb0UsT0FBL0JWLGFBQWE7a0JBQ3BFLDRFQUFDVztZQUFJRCxXQUFVO3NCQUNaUixRQUFRVSxNQUFNLEdBQUcsSUFDaEJWLFFBQVFXLEdBQUcsQ0FBQ1QsQ0FBQUEsMkJBQ1YsOERBQUNOLGlEQUFJQTtvQkFBcUJnQixJQUFJLFlBQTBCLE9BQWRWLFdBQVdXLEVBQUU7OEJBQ3JELDRFQUFDQzt3QkFDQ0MsU0FBUzs0QkFDUGQsa0JBQWtCQzt3QkFDcEI7a0NBRUNBLFdBQVdjLElBQUk7dUJBRFhkLFdBQVdXLEVBQUU7Ozs7O21CQUxYWCxXQUFXVyxFQUFFOzs7OzBDQVcxQiw4REFBQ0M7MEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7S0ExQlNqQjtBQTJCVCwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFscy9Nb2RhVW5pdmVyc2l0aWVzTGlzdC5qc3g/MmIzMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnLi9Nb2RhbC5zY3NzJztcclxuZnVuY3Rpb24gTW9kYVVuaXZlcnNpdGllc0xpc3Qoe2lzVmlzYWJsZSwgY2xvc2VNb2RhbFVuaXZlcnMsIHVuaXZlcnN9KSB7XHJcbiAgZnVuY3Rpb24gYWRkVW5pdmVyc2l0eVRvTFModW5pdmVyc2l0eSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXZlcnNpdHknLCBKU09OLnN0cmluZ2lmeSh1bml2ZXJzaXR5KSk7XHJcbiAgICBjbG9zZU1vZGFsVW5pdmVycygpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgbW9kYWwgbW9kYWxfdHlwZV91bml2ZXJzaXRpZXNMaXN0ICR7aXNWaXNhYmxlICYmICdtb2RhbF9pc1Zpc2FibGUnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19saXN0XCI+XHJcbiAgICAgICAge3VuaXZlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIHVuaXZlcnMubWFwKHVuaXZlcnNpdHkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e3VuaXZlcnNpdHkuaWR9IHRvPXtgL3VuaXZlcnMvJHt1bml2ZXJzaXR5LmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFVuaXZlcnNpdHlUb0xTKHVuaXZlcnNpdHkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGtleT17dW5pdmVyc2l0eS5pZH0+XHJcbiAgICAgICAgICAgICAgICB7dW5pdmVyc2l0eS50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHNwYW4+0J3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L48L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2RhVW5pdmVyc2l0aWVzTGlzdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJNb2RhVW5pdmVyc2l0aWVzTGlzdCIsImlzVmlzYWJsZSIsImNsb3NlTW9kYWxVbml2ZXJzIiwidW5pdmVycyIsImFkZFVuaXZlcnNpdHlUb0xTIiwidW5pdmVyc2l0eSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImxlbmd0aCIsIm1hcCIsInRvIiwiaWQiLCJzcGFuIiwib25DbGljayIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Modals/ModaUniversitiesList.jsx\n"));

/***/ })

});