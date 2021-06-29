/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksslack"] = self["webpackChunksslack"] || []).push([["pages_DirectMessage_index_tsx"],{

/***/ "./pages/DirectMessage/index.tsx":
/*!***************************************!*\
  !*** ./pages/DirectMessage/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/DirectMessage/styles.tsx\");\n/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ \"./node_modules/gravatar/index.js\");\n/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ChatBox */ \"./components/ChatBox/index.tsx\");\n/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ChatList */ \"./components/ChatList/index.tsx\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hooks/useInput */ \"./hooks/useInput.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_makeSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/makeSection */ \"./utils/makeSection.ts\");\n/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hooks/useSocket */ \"./hooks/useSocket.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DirectMessage() {\n  _s();\n\n  var _chatData$, _chatData;\n\n  const {\n    workspace,\n    id\n  } = (0,react_router__WEBPACK_IMPORTED_MODULE_11__.useParams)();\n  const {\n    data: userData\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(`/api/workspaces/${workspace}/users/${id}`, _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__.default);\n  const {\n    data: myData\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__.default);\n  const [chat, onChangeChat, setChat] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default)('');\n  const [socket] = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__.default)(workspace);\n  const scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const {\n    data: chatData,\n    mutate: mutateChat,\n    revalidate: revalidateChat,\n    setSize // page 수를 바꿔주는\n\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.useSWRInfinite)(index => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`, _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__.default); // useSWRInfinite : SWR에서 제공하는 infinite 구현하기 편한 메서드\n  // [{id: 1}, {id: 2}, {id: 3}, {id: 4}]\n  // useSWRInfinite -> [[{id: 1}, {id: 2}], [{id: 3}, {id: 4}]]\n\n  const isEmpty = (chatData === null || chatData === void 0 ? void 0 : (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0;\n  const isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20 || false; // console.log('chatData', chatData);\n\n  const onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.preventDefault();\n\n    if (chat !== null && chat !== void 0 && chat.trim() && chatData) {\n      const savedChat = chat;\n      mutateChat(prevChatData => {\n        var _chatData$0$;\n\n        prevChatData === null || prevChatData === void 0 ? void 0 : prevChatData[0].unshift({\n          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,\n          content: savedChat,\n          SenderId: myData.id,\n          Sender: myData,\n          ReceiverId: userData.id,\n          Receiver: userData,\n          createdAt: new Date()\n        });\n        return prevChatData;\n      }, false) // optimistic UI 할때는 shouldRevalidate 가 false 여야 한다.\n      .then(() => {\n        var _scrollbarRef$current;\n\n        setChat('');\n        (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 ? void 0 : _scrollbarRef$current.scrollToBottom(); // 채팅시 스크롤바 아래로\n      }); // optimistic UI\n\n      axios__WEBPACK_IMPORTED_MODULE_8___default().post(`/api/workspaces/${workspace}/dms/${id}/chats`, {\n        content: chat\n      }).then(() => {\n        setChat('');\n      }).catch(error => {\n        console.dir(error);\n        revalidateChat();\n      });\n    }\n  }, [chat, chatData, myData, userData, workspace, id]); // 로딩 시 스크롤바 제일 아래로\n\n  const onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {\n    if (data.SenderId === Number(id) && myData.id !== Number(id)) {\n      mutateChat(chatData => {\n        chatData === null || chatData === void 0 ? void 0 : chatData[0].unshift(data);\n        return chatData;\n      }, false).then(() => {\n        if (scrollbarRef.current) {\n          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollHeight() + 150 // 150px 이상 스크롤을 올렸을 때는 남이 채팅을 쳐도 bottom으로 가지 않는다.\n          ) {\n              var _scrollbarRef$current2;\n\n              console.log('scrollToBottom!', (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.getValues());\n              setTimeout(() => {\n                var _scrollbarRef$current3;\n\n                (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 ? void 0 : _scrollbarRef$current3.scrollToBottom();\n              }, 50);\n            }\n        }\n      });\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    socket === null || socket === void 0 ? void 0 : socket.on('dm', onMessage);\n    return () => {\n      socket === null || socket === void 0 ? void 0 : socket.on('dm', onMessage);\n    };\n  }, [socket, id, myData]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {\n      var _scrollbarRef$current4;\n\n      (_scrollbarRef$current4 = scrollbarRef.current) === null || _scrollbarRef$current4 === void 0 ? void 0 : _scrollbarRef$current4.scrollToBottom();\n    }\n  }, [chatData]);\n\n  if (!userData || !myData) {\n    return null;\n  }\n\n  const chatSections = (0,_utils_makeSection__WEBPACK_IMPORTED_MODULE_9__.default)(chatData ? chatData.flat().reverse() : []);\n  console.log('chatDataLists == > ', chatData === null || chatData === void 0 ? void 0 : chatData.flat().reverse()); // immutable 하게 reverse 하는 방법\n  // .flat() 다차원 배열을 1차원 배열로\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(userData.email, {\n      s: '24px',\n      d: 'retro'\n    }),\n    alt: userData.nickname\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_6__.default, {\n    chatSections: chatSections,\n    ref: scrollbarRef,\n    setSize: setSize,\n    isReachingEnd: isReachingEnd\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_5__.default, {\n    chat: chat,\n    onChangeChat: onChangeChat,\n    onSubmitForm: onSubmitForm\n  }));\n}\n\n_s(DirectMessage, \"v/KomSrXuSbVpu1xwHj/LhuqsEQ=\", false, function () {\n  return [react_router__WEBPACK_IMPORTED_MODULE_11__.useParams, swr__WEBPACK_IMPORTED_MODULE_3__.default, swr__WEBPACK_IMPORTED_MODULE_3__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useSocket__WEBPACK_IMPORTED_MODULE_10__.default, swr__WEBPACK_IMPORTED_MODULE_3__.useSWRInfinite];\n});\n\n_c = DirectMessage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectMessage);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"DirectMessage\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://sslack/./pages/DirectMessage/index.tsx?");

/***/ }),

/***/ "./pages/DirectMessage/styles.tsx":
/*!****************************************!*\
  !*** ./pages/DirectMessage/styles.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"DragOver\": () => (/* binding */ DragOver)\n/* harmony export */ });\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ \"./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\nconst Container = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\",  false ? 0 : {\n  target: \"e10g8mgq2\",\n  label: \"Container\"\n})( false ? 0 : {\n  name: \"1a0r0eh\",\n  styles: \"display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFkZHJcXHNzbGFja1xccGFnZXNcXERpcmVjdE1lc3NhZ2VcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRW1DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFkZHJcXHNzbGFja1xccGFnZXNcXERpcmVjdE1lc3NhZ2VcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XHJcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbmA7XHJcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\nconst Header = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)(\"header\",  false ? 0 : {\n  target: \"e10g8mgq1\",\n  label: \"Header\"\n})( false ? 0 : {\n  name: \"1c17pcy\",\n  styles: \"height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& img{margin-right:5px;}\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFkZHJcXHNzbGFja1xccGFnZXNcXERpcmVjdE1lc3NhZ2VcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFkZHJcXHNzbGFja1xccGFnZXNcXERpcmVjdE1lc3NhZ2VcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLXNhZi0wOiByZ2JhKHZhcigtLXNrX2ZvcmVncm91bmRfbG93LCAyOSwgMjgsIDI5KSwgMC4xMyk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS1zYWYtMCk7XHJcbiAgcGFkZGluZzogMjBweCAxNnB4IDIwcHggMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEcmFnT3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbmA7XHJcbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\nconst DragOver = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)(\"div\",  false ? 0 : {\n  target: \"e10g8mgq0\",\n  label: \"DragOver\"\n})( false ? 0 : {\n  name: \"czjct4\",\n  styles: \"position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFkZHJcXHNzbGFja1xccGFnZXNcXERpcmVjdE1lc3NhZ2VcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQyIsImZpbGUiOiJDOlxcVXNlcnNcXG1hZGRyXFxzc2xhY2tcXHBhZ2VzXFxEaXJlY3RNZXNzYWdlXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1zYWYtMDogcmdiYSh2YXIoLS1za19mb3JlZ3JvdW5kX2xvdywgMjksIDI4LCAyOSksIDAuMTMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tc2FmLTApO1xyXG4gIHBhZGRpbmc6IDIwcHggMTZweCAyMHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhZ092ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY0cHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG5gO1xyXG4iXX0= */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://sslack/./pages/DirectMessage/styles.tsx?");

/***/ })

}]);