/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 615:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/styles/style.scss
var style = __webpack_require__(738);
// EXTERNAL MODULE: ./src/components/ui/Button/button.scss
var Button_button = __webpack_require__(159);
;// ./src/components/ui/Button/Button.js

class Button {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const btn = document.createElement("button");
    !Array.isArray(this.params.class) ? btn.classList.add(this.params.class) : btn.classList.add(...this.params.class);
    btn.innerHTML = this.params.text;
    btn.type = this.params.type;
    return btn;
  }
}
// EXTERNAL MODULE: ./src/components/ui/Div/div.scss
var div = __webpack_require__(645);
;// ./src/components/ui/Div/Div.js

class Div {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const div = document.createElement("div");
    !Array.isArray(this.params.class) ? div.classList.add(this.params.class) : div.classList.add(...this.params.class);
    if (this.params.id) div.id = this.params.id;
    return div;
  }
}
// EXTERNAL MODULE: ./src/components/ui/Heading/heading.scss
var heading = __webpack_require__(181);
;// ./src/components/ui/Heading/Heading.js

class Heading {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const heading = document.createElement(`h${this.getLevel()}`);
    heading.classList.add(this.params.class);
    heading.textContent = this.params.text;
    return heading;
  }
  getLevel() {
    if (this.params.level in [1, 2, 3, 4, 5, 6]) return this.params.level;
    throw new Error("Вы указали не число или число не входящее в промежутке от 1 до 6");
  }
}
;// ./src/environment/environment.js
const API_ROOT = "MISSING_ENV_VAR".API_ROOT || "https://ahj-homeworks-workers-backend.onrender.com";
/* harmony default export */ const environment = (API_ROOT);
// EXTERNAL MODULE: ./src/components/ui/Img/Img.scss
var Img = __webpack_require__(421);
;// ./src/components/ui/Img/Img.js

class Img_Img {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const img = document.createElement("img");
    img.classList.add(this.params.class);
    img.src = this.params.src;
    return img;
  }
}
// EXTERNAL MODULE: ./src/components/ui/Li/li.scss
var li = __webpack_require__(13);
;// ./src/components/ui/Li/Li.js

class Li {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const li = document.createElement("li");
    !Array.isArray(this.params.class) ? li.classList.add(this.params.class) : li.classList.add(...this.params.class);
    return li;
  }
}
// EXTERNAL MODULE: ./src/components/ui/Paragraph/paragraph.scss
var paragraph = __webpack_require__(541);
;// ./src/components/ui/Paragraph/Paragraph.js

class Paragraph {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const p = document.createElement("p");
    !Array.isArray(this.params.class) ? p.classList.add(this.params.class) : p.classList.add(...this.params.class);
    if (this.params.text) p.textContent = this.params.text;
    if (this.params.innerHTML) p.innerHTML = this.params.innerHTML;
    return p;
  }
}
// EXTERNAL MODULE: ./src/components/ui/Span/span.scss
var span = __webpack_require__(683);
;// ./src/components/ui/Span/Span.js

class Span {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const span = document.createElement("span");
    !Array.isArray(this.params.class) ? span.classList.add(this.params.class) : span.classList.add(...this.params.class);
    if (this.params.text) span.textContent = this.params.text;
    return span;
  }
}
;// ./src/components/MovieNews/MovieNews.js






class MovieNews {
  constructor(elParent, params) {
    this.elParent = elParent;
    this.params = params;
  }
  bindToDOM() {
    this.movieNewsEl = new Li({
      class: "movie-news-el"
    }).element;
    this.titleMovieNews = new Heading({
      class: "title-movie-news",
      text: this.params.data.title,
      level: 2
    }).element;
    this.imgTextMovieNews = new Div({
      class: "img-text-movie-news"
    }).element;
    this.imgMovieNews = new Img_Img({
      class: "img-movie-news",
      src: this.params.data.imgSrc
    }).element;
    this.textMovieNewsContainer = new Div({
      class: "text-movie-news-conatiner"
    }).element;
    this.textMovieNews = new Paragraph({
      class: "text-movie-news",
      text: this.params.data.text
    }).element;
    this.textMovieNewsContainer.appendChild(this.textMovieNews);
    this.imgTextMovieNews.append(this.imgMovieNews, this.textMovieNewsContainer);
    this.movieNewsEl.append(this.titleMovieNews, this.imgTextMovieNews);
    this.elParent.appendChild(this.movieNewsEl);
  }
  loadingMovieNews() {
    this.movieNewsElLoading = new Li({
      class: ["movie-news-el", "movie-news-el_loading"]
    }).element;
    this.titleMovieNewsLoading = new Span({
      class: ["title-movie-news", "title-movie-news_loading"]
    }).element;
    this.imgTextMovieNewsLoading = new Div({
      class: "img-text-movie-news"
    }).element;
    this.imgMovieNewsLoading = new Span({
      class: ["img-movie-news", "img-movie-news_loading"]
    }).element;
    this.textMovieNewsLoadingContainer = new Div({
      class: "text-movie-news-conatiner"
    }).element;
    this.textMovieNewsLoadingFirst = new Span({
      class: ["text-movie-news", "text-movie-news_loading"]
    }).element;
    this.textMovieNewsLoadingSecond = new Span({
      class: ["text-movie-news", "text-movie-news_loading"]
    }).element;
    this.textMovieNewsLoadingContainer.append(this.textMovieNewsLoadingFirst, this.textMovieNewsLoadingSecond);
    this.imgTextMovieNewsLoading.append(this.imgMovieNewsLoading, this.textMovieNewsLoadingContainer);
    this.movieNewsElLoading.append(this.titleMovieNewsLoading, this.imgTextMovieNewsLoading);
    this.elParent.appendChild(this.movieNewsElLoading);
  }
}
// EXTERNAL MODULE: ./src/components/ui/Ul/ul.scss
var ul = __webpack_require__(81);
;// ./src/components/ui/Ul/Ul.js

class Ul {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const ul = document.createElement("ul");
    !Array.isArray(this.params.class) ? ul.classList.add(this.params.class) : ul.classList.add(...this.params.class);
    return ul;
  }
}
;// ./src/components/MovieNewsList/MovieNewsList.js


class MovieNewsList {
  constructor(elParent, params) {
    this.elParent = elParent;
    this.params = params;
  }
  bindToDOM() {
    this.movieNewsList = new Ul({
      class: "movie-news-list"
    }).element;
    this.params.data.forEach(movieNews => {
      this.movieNews = new MovieNews(this.movieNewsList, {
        data: movieNews
      });
      this.movieNews.bindToDOM();
    });
    this.elParent.appendChild(this.movieNewsList);
  }
  loadingMovieNewsList() {
    let listLoading = [];
    this.movieNewsListLoading = new Ul({
      class: ["movie-news-list", "movie-news-list_loading"]
    }).element;
    if (typeof this.params.data === "number") {
      for (let i = 0; i < this.params.data; i++) {
        listLoading.push(i);
      }
      listLoading.forEach(movieNews => {
        this.movieNews = new MovieNews(this.movieNewsListLoading, {
          data: movieNews
        });
        this.movieNews.loadingMovieNews();
      });
      this.elParent.appendChild(this.movieNewsListLoading);
    }
  }
}
;// ./src/components/LoadingStyling/LoadingStyling.js






const url = `${environment}/movie-world-news`;
class LoadingStyling {
  constructor(elParent) {
    this.elParent = elParent;
  }
  init() {
    this.bindToDom();
    this.updateListNews();
  }
  bindToDom() {
    this.container = new Div({
      class: "container"
    }).element;
    this.titleBtn = new Div({
      class: "title-btn"
    }).element;
    this.title = new Heading({
      class: "title-news",
      text: "Новости мира кино",
      level: 1
    }).element;
    this.updateNewsBtn = new Button({
      class: "update-news-btn",
      type: "button",
      text: "Обновить"
    }).element;
    this.titleBtn.append(this.title, this.updateNewsBtn);
    this.container.appendChild(this.titleBtn);
    this.elParent.appendChild(this.container);
    this.updateNewsBtn.addEventListener("click", this.updateListNews.bind(this));
  }
  async updateListNews() {
    this.updateNewsBtn.disabled = true;
    this.movieNewsList = new MovieNewsList(this.container, {
      data: 5
    });
    const movieNewsList = this.elParent.querySelector(".movie-news-list");
    movieNewsList && movieNewsList.remove();
    this.movieNewsList.loadingMovieNewsList();
    const movieNewsListLoading = this.elParent.querySelector(".movie-news-list_loading");
    try {
      const response = await fetch(url, {
        method: "GET"
      });
      const data = await response.json();
      movieNewsListLoading.remove();
      this.movieNewsList = new MovieNewsList(this.container, {
        data: data.news
      });
      this.movieNewsList.bindToDOM();
      this.updateNewsBtn.disabled = false;
    } catch (err) {
      console.error(err);
      this.updateNewsBtn.disabled = true;
      const newslist = document.querySelector(".movie-news-list");
      newslist.remove();
      this.container.classList.add("container_data-error");
      const textDataError = new Paragraph({
        class: "text-data-error",
        innerHTML: "Не удалось загрузить данные <br>Проверьте подключение <br>и обновите страницу"
      }).element;
      this.movieNewsList.loadingMovieNewsList();
      const containerError = new Div({
        class: "container-text-error"
      }).element;
      containerError.appendChild(textDataError);
      this.elParent.appendChild(containerError);
    }
  }
}
;// ./src/js/app.js

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js");
      console.log(`Регистрация serviceWorker прошла успешно - ${registration.scope}`);
    } catch (error) {
      console.error(`Ошибка регистрации serviceWorker - ${error}`);
    }
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  registerServiceWorker();
  const loadingStyling = new LoadingStyling(app);
  loadingStyling.init();
});
;// ./src/index.js



/***/ }),

/***/ 140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */

var normalizeUrl = __webpack_require__(918);
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ 918:
/***/ ((module) => {



/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ 159:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486548
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 645:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486552
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 181:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486533
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 421:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486678
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 13:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486674
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 541:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486539
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 683:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486684
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 81:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486626
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ 738:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1734808486446
        var cssReload = __webpack_require__(140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("87ef0fa4a4a546b91f66")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "workers-frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateworkers_frontend"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(615);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7Ozs7VUUzZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvRGl2L0Rpdi5qcyIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvSGVhZGluZy9IZWFkaW5nLmpzIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL0ltZy9JbWcuanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL0xpL0xpLmpzIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy91aS9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy91aS9TcGFuL1NwYW4uanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllTmV3cy9Nb3ZpZU5ld3MuanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL1VsL1VsLmpzIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZU5ld3NMaXN0L01vdmllTmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdTdHlsaW5nL0xvYWRpbmdTdHlsaW5nLmpzIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL25vcm1hbGl6ZS11cmwuanMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL0J1dHRvbi9idXR0b24uc2Nzcz8xNzJkIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy91aS9EaXYvZGl2LnNjc3M/ZGU2ZiIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvSGVhZGluZy9oZWFkaW5nLnNjc3M/NDAwMyIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvSW1nL0ltZy5zY3NzP2QwODMiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL0xpL2xpLnNjc3M/MGE5ZCIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvUGFyYWdyYXBoL3BhcmFncmFwaC5zY3NzP2FiZWQiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL1NwYW4vc3Bhbi5zY3NzP2UwYmIiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3VpL1VsL3VsLnNjc3M/MTU4MCIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2E1YjQiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vd29ya2Vycy1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dvcmtlcnMtZnJvbnRlbmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93b3JrZXJzLWZyb250ZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2J1dHRvbi5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgIUFycmF5LmlzQXJyYXkodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA/IGJ0bi5jbGFzc0xpc3QuYWRkKHRoaXMucGFyYW1zLmNsYXNzKVxuICAgICAgOiBidG4uY2xhc3NMaXN0LmFkZCguLi50aGlzLnBhcmFtcy5jbGFzcyk7XG5cbiAgICBidG4uaW5uZXJIVE1MID0gdGhpcy5wYXJhbXMudGV4dDtcbiAgICBidG4udHlwZSA9IHRoaXMucGFyYW1zLnR5cGU7XG5cbiAgICByZXR1cm4gYnRuO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL2Rpdi5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdiB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgIUFycmF5LmlzQXJyYXkodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA/IGRpdi5jbGFzc0xpc3QuYWRkKHRoaXMucGFyYW1zLmNsYXNzKVxuICAgICAgOiBkaXYuY2xhc3NMaXN0LmFkZCguLi50aGlzLnBhcmFtcy5jbGFzcyk7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMuaWQpIGRpdi5pZCA9IHRoaXMucGFyYW1zLmlkO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9oZWFkaW5nLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZyB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7dGhpcy5nZXRMZXZlbCgpfWApO1xuXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKHRoaXMucGFyYW1zLmNsYXNzKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGhpcy5wYXJhbXMudGV4dDtcblxuICAgIHJldHVybiBoZWFkaW5nO1xuICB9XG5cbiAgZ2V0TGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMucGFyYW1zLmxldmVsIGluIFsxLCAyLCAzLCA0LCA1LCA2XSkgcmV0dXJuIHRoaXMucGFyYW1zLmxldmVsO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwi0JLRiyDRg9C60LDQt9Cw0LvQuCDQvdC1INGH0LjRgdC70L4g0LjQu9C4INGH0LjRgdC70L4g0L3QtSDQstGF0L7QtNGP0YnQtdC1INCyINC/0YDQvtC80LXQttGD0YLQutC1INC+0YIgMSDQtNC+IDZcIixcbiAgICApO1xuICB9XG59XG4iLCJjb25zdCBBUElfUk9PVCA9XG4gIHByb2Nlc3MuZW52LkFQSV9ST09UIHx8IFwiaHR0cHM6Ly9haGotaG9tZXdvcmtzLXdvcmtlcnMtYmFja2VuZC5vbnJlbmRlci5jb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgQVBJX1JPT1Q7IiwiaW1wb3J0IFwiLi9JbWcuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWcge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGltZy5jbGFzc0xpc3QuYWRkKHRoaXMucGFyYW1zLmNsYXNzKTtcbiAgICBpbWcuc3JjID0gdGhpcy5wYXJhbXMuc3JjO1xuXG4gICAgcmV0dXJuIGltZztcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9saS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgIUFycmF5LmlzQXJyYXkodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA/IGxpLmNsYXNzTGlzdC5hZGQodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA6IGxpLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5wYXJhbXMuY2xhc3MpO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL3BhcmFncmFwaC5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAhQXJyYXkuaXNBcnJheSh0aGlzLnBhcmFtcy5jbGFzcylcbiAgICAgID8gcC5jbGFzc0xpc3QuYWRkKHRoaXMucGFyYW1zLmNsYXNzKVxuICAgICAgOiBwLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5wYXJhbXMuY2xhc3MpO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zLnRleHQpIHAudGV4dENvbnRlbnQgPSB0aGlzLnBhcmFtcy50ZXh0O1xuICAgIGlmICh0aGlzLnBhcmFtcy5pbm5lckhUTUwpIHAuaW5uZXJIVE1MID0gdGhpcy5wYXJhbXMuaW5uZXJIVE1MO1xuXG4gICAgcmV0dXJuIHA7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4vc3Bhbi5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYW4ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgIUFycmF5LmlzQXJyYXkodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA/IHNwYW4uY2xhc3NMaXN0LmFkZCh0aGlzLnBhcmFtcy5jbGFzcylcbiAgICAgIDogc3Bhbi5jbGFzc0xpc3QuYWRkKC4uLnRoaXMucGFyYW1zLmNsYXNzKTtcblxuICAgIGlmICh0aGlzLnBhcmFtcy50ZXh0KSBzcGFuLnRleHRDb250ZW50ID0gdGhpcy5wYXJhbXMudGV4dDtcblxuICAgIHJldHVybiBzcGFuO1xuICB9XG59XG4iLCJpbXBvcnQgRGl2IGZyb20gXCIuLi91aS9EaXYvRGl2XCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi4vdWkvSGVhZGluZy9IZWFkaW5nXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuLi91aS9JbWcvSW1nXCI7XG5pbXBvcnQgTGkgZnJvbSBcIi4uL3VpL0xpL0xpXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi91aS9QYXJhZ3JhcGgvUGFyYWdyYXBoXCI7XG5pbXBvcnQgU3BhbiBmcm9tIFwiLi4vdWkvU3Bhbi9TcGFuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllTmV3cyB7XG4gIGNvbnN0cnVjdG9yKGVsUGFyZW50LCBwYXJhbXMpIHtcbiAgICB0aGlzLmVsUGFyZW50ID0gZWxQYXJlbnQ7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBiaW5kVG9ET00oKSB7XG4gICAgdGhpcy5tb3ZpZU5ld3NFbCA9IG5ldyBMaSh7IGNsYXNzOiBcIm1vdmllLW5ld3MtZWxcIiB9KS5lbGVtZW50O1xuICAgIHRoaXMudGl0bGVNb3ZpZU5ld3MgPSBuZXcgSGVhZGluZyh7XG4gICAgICBjbGFzczogXCJ0aXRsZS1tb3ZpZS1uZXdzXCIsXG4gICAgICB0ZXh0OiB0aGlzLnBhcmFtcy5kYXRhLnRpdGxlLFxuICAgICAgbGV2ZWw6IDIsXG4gICAgfSkuZWxlbWVudDtcbiAgICB0aGlzLmltZ1RleHRNb3ZpZU5ld3MgPSBuZXcgRGl2KHsgY2xhc3M6IFwiaW1nLXRleHQtbW92aWUtbmV3c1wiIH0pLmVsZW1lbnQ7XG4gICAgdGhpcy5pbWdNb3ZpZU5ld3MgPSBuZXcgSW1nKHtcbiAgICAgIGNsYXNzOiBcImltZy1tb3ZpZS1uZXdzXCIsXG4gICAgICBzcmM6IHRoaXMucGFyYW1zLmRhdGEuaW1nU3JjLFxuICAgIH0pLmVsZW1lbnQ7XG4gICAgdGhpcy50ZXh0TW92aWVOZXdzQ29udGFpbmVyID0gbmV3IERpdih7XG4gICAgICBjbGFzczogXCJ0ZXh0LW1vdmllLW5ld3MtY29uYXRpbmVyXCIsXG4gICAgfSkuZWxlbWVudDtcbiAgICB0aGlzLnRleHRNb3ZpZU5ld3MgPSBuZXcgUGFyYWdyYXBoKHtcbiAgICAgIGNsYXNzOiBcInRleHQtbW92aWUtbmV3c1wiLFxuICAgICAgdGV4dDogdGhpcy5wYXJhbXMuZGF0YS50ZXh0LFxuICAgIH0pLmVsZW1lbnQ7XG5cbiAgICB0aGlzLnRleHRNb3ZpZU5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZXh0TW92aWVOZXdzKTtcbiAgICB0aGlzLmltZ1RleHRNb3ZpZU5ld3MuYXBwZW5kKFxuICAgICAgdGhpcy5pbWdNb3ZpZU5ld3MsXG4gICAgICB0aGlzLnRleHRNb3ZpZU5ld3NDb250YWluZXIsXG4gICAgKTtcbiAgICB0aGlzLm1vdmllTmV3c0VsLmFwcGVuZCh0aGlzLnRpdGxlTW92aWVOZXdzLCB0aGlzLmltZ1RleHRNb3ZpZU5ld3MpO1xuICAgIHRoaXMuZWxQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5tb3ZpZU5ld3NFbCk7XG4gIH1cblxuICBsb2FkaW5nTW92aWVOZXdzKCkge1xuICAgIHRoaXMubW92aWVOZXdzRWxMb2FkaW5nID0gbmV3IExpKHtcbiAgICAgIGNsYXNzOiBbXCJtb3ZpZS1uZXdzLWVsXCIsIFwibW92aWUtbmV3cy1lbF9sb2FkaW5nXCJdLFxuICAgIH0pLmVsZW1lbnQ7XG4gICAgdGhpcy50aXRsZU1vdmllTmV3c0xvYWRpbmcgPSBuZXcgU3Bhbih7XG4gICAgICBjbGFzczogW1widGl0bGUtbW92aWUtbmV3c1wiLCBcInRpdGxlLW1vdmllLW5ld3NfbG9hZGluZ1wiXSxcbiAgICB9KS5lbGVtZW50O1xuICAgIHRoaXMuaW1nVGV4dE1vdmllTmV3c0xvYWRpbmcgPSBuZXcgRGl2KHtcbiAgICAgIGNsYXNzOiBcImltZy10ZXh0LW1vdmllLW5ld3NcIixcbiAgICB9KS5lbGVtZW50O1xuICAgIHRoaXMuaW1nTW92aWVOZXdzTG9hZGluZyA9IG5ldyBTcGFuKHtcbiAgICAgIGNsYXNzOiBbXCJpbWctbW92aWUtbmV3c1wiLCBcImltZy1tb3ZpZS1uZXdzX2xvYWRpbmdcIl0sXG4gICAgfSkuZWxlbWVudDtcbiAgICB0aGlzLnRleHRNb3ZpZU5ld3NMb2FkaW5nQ29udGFpbmVyID0gbmV3IERpdih7XG4gICAgICBjbGFzczogXCJ0ZXh0LW1vdmllLW5ld3MtY29uYXRpbmVyXCIsXG4gICAgfSkuZWxlbWVudDtcbiAgICB0aGlzLnRleHRNb3ZpZU5ld3NMb2FkaW5nRmlyc3QgPSBuZXcgU3Bhbih7XG4gICAgICBjbGFzczogW1widGV4dC1tb3ZpZS1uZXdzXCIsIFwidGV4dC1tb3ZpZS1uZXdzX2xvYWRpbmdcIl0sXG4gICAgfSkuZWxlbWVudDtcbiAgICB0aGlzLnRleHRNb3ZpZU5ld3NMb2FkaW5nU2Vjb25kID0gbmV3IFNwYW4oe1xuICAgICAgY2xhc3M6IFtcInRleHQtbW92aWUtbmV3c1wiLCBcInRleHQtbW92aWUtbmV3c19sb2FkaW5nXCJdLFxuICAgIH0pLmVsZW1lbnQ7XG5cbiAgICB0aGlzLnRleHRNb3ZpZU5ld3NMb2FkaW5nQ29udGFpbmVyLmFwcGVuZChcbiAgICAgIHRoaXMudGV4dE1vdmllTmV3c0xvYWRpbmdGaXJzdCxcbiAgICAgIHRoaXMudGV4dE1vdmllTmV3c0xvYWRpbmdTZWNvbmQsXG4gICAgKTtcbiAgICB0aGlzLmltZ1RleHRNb3ZpZU5ld3NMb2FkaW5nLmFwcGVuZChcbiAgICAgIHRoaXMuaW1nTW92aWVOZXdzTG9hZGluZyxcbiAgICAgIHRoaXMudGV4dE1vdmllTmV3c0xvYWRpbmdDb250YWluZXIsXG4gICAgKTtcbiAgICB0aGlzLm1vdmllTmV3c0VsTG9hZGluZy5hcHBlbmQoXG4gICAgICB0aGlzLnRpdGxlTW92aWVOZXdzTG9hZGluZyxcbiAgICAgIHRoaXMuaW1nVGV4dE1vdmllTmV3c0xvYWRpbmcsXG4gICAgKTtcbiAgICB0aGlzLmVsUGFyZW50LmFwcGVuZENoaWxkKHRoaXMubW92aWVOZXdzRWxMb2FkaW5nKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi91bC5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgIUFycmF5LmlzQXJyYXkodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA/IHVsLmNsYXNzTGlzdC5hZGQodGhpcy5wYXJhbXMuY2xhc3MpXG4gICAgICA6IHVsLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5wYXJhbXMuY2xhc3MpO1xuXG4gICAgcmV0dXJuIHVsO1xuICB9XG59XG4iLCJpbXBvcnQgTW92aWVOZXdzIGZyb20gXCIuLi9Nb3ZpZU5ld3MvTW92aWVOZXdzXCI7XG5pbXBvcnQgVWwgZnJvbSBcIi4uL3VpL1VsL1VsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllTmV3c0xpc3Qge1xuICBjb25zdHJ1Y3RvcihlbFBhcmVudCwgcGFyYW1zKSB7XG4gICAgdGhpcy5lbFBhcmVudCA9IGVsUGFyZW50O1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgYmluZFRvRE9NKCkge1xuICAgIHRoaXMubW92aWVOZXdzTGlzdCA9IG5ldyBVbCh7IGNsYXNzOiBcIm1vdmllLW5ld3MtbGlzdFwiIH0pLmVsZW1lbnQ7XG5cbiAgICB0aGlzLnBhcmFtcy5kYXRhLmZvckVhY2goKG1vdmllTmV3cykgPT4ge1xuICAgICAgdGhpcy5tb3ZpZU5ld3MgPSBuZXcgTW92aWVOZXdzKHRoaXMubW92aWVOZXdzTGlzdCwgeyBkYXRhOiBtb3ZpZU5ld3MgfSk7XG4gICAgICB0aGlzLm1vdmllTmV3cy5iaW5kVG9ET00oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWxQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5tb3ZpZU5ld3NMaXN0KTtcbiAgfVxuXG4gIGxvYWRpbmdNb3ZpZU5ld3NMaXN0KCkge1xuICAgIGxldCBsaXN0TG9hZGluZyA9IFtdO1xuICAgIHRoaXMubW92aWVOZXdzTGlzdExvYWRpbmcgPSBuZXcgVWwoe1xuICAgICAgY2xhc3M6IFtcIm1vdmllLW5ld3MtbGlzdFwiLCBcIm1vdmllLW5ld3MtbGlzdF9sb2FkaW5nXCJdLFxuICAgIH0pLmVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucGFyYW1zLmRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbXMuZGF0YTsgaSsrKSB7XG4gICAgICAgIGxpc3RMb2FkaW5nLnB1c2goaSk7XG4gICAgICB9XG5cbiAgICAgIGxpc3RMb2FkaW5nLmZvckVhY2goKG1vdmllTmV3cykgPT4ge1xuICAgICAgICB0aGlzLm1vdmllTmV3cyA9IG5ldyBNb3ZpZU5ld3ModGhpcy5tb3ZpZU5ld3NMaXN0TG9hZGluZywge1xuICAgICAgICAgIGRhdGE6IG1vdmllTmV3cyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW92aWVOZXdzLmxvYWRpbmdNb3ZpZU5ld3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmVsUGFyZW50LmFwcGVuZENoaWxkKHRoaXMubW92aWVOZXdzTGlzdExvYWRpbmcpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IERpdiBmcm9tIFwiLi4vdWkvRGl2L0RpdlwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL3VpL0hlYWRpbmcvSGVhZGluZ1wiO1xuXG5pbXBvcnQgQVBJX1JPT1QgZnJvbSBcIi4uLy4uL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5cbmltcG9ydCBNb3ZpZU5ld3NMaXN0IGZyb20gXCIuLi9Nb3ZpZU5ld3NMaXN0L01vdmllTmV3c0xpc3RcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4uL3VpL1BhcmFncmFwaC9QYXJhZ3JhcGhcIjtcblxuY29uc3QgdXJsID0gYCR7QVBJX1JPT1R9L21vdmllLXdvcmxkLW5ld3NgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU3R5bGluZyB7XG4gIGNvbnN0cnVjdG9yKGVsUGFyZW50KSB7XG4gICAgdGhpcy5lbFBhcmVudCA9IGVsUGFyZW50O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJpbmRUb0RvbSgpO1xuICAgIHRoaXMudXBkYXRlTGlzdE5ld3MoKTtcbiAgfVxuXG4gIGJpbmRUb0RvbSgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBEaXYoeyBjbGFzczogXCJjb250YWluZXJcIiB9KS5lbGVtZW50O1xuICAgIHRoaXMudGl0bGVCdG4gPSBuZXcgRGl2KHsgY2xhc3M6IFwidGl0bGUtYnRuXCIgfSkuZWxlbWVudDtcbiAgICB0aGlzLnRpdGxlID0gbmV3IEhlYWRpbmcoe1xuICAgICAgY2xhc3M6IFwidGl0bGUtbmV3c1wiLFxuICAgICAgdGV4dDogXCLQndC+0LLQvtGB0YLQuCDQvNC40YDQsCDQutC40L3QvlwiLFxuICAgICAgbGV2ZWw6IDEsXG4gICAgfSkuZWxlbWVudDtcbiAgICB0aGlzLnVwZGF0ZU5ld3NCdG4gPSBuZXcgQnV0dG9uKHtcbiAgICAgIGNsYXNzOiBcInVwZGF0ZS1uZXdzLWJ0blwiLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIHRleHQ6IFwi0J7QsdC90L7QstC40YLRjFwiLFxuICAgIH0pLmVsZW1lbnQ7XG5cbiAgICB0aGlzLnRpdGxlQnRuLmFwcGVuZCh0aGlzLnRpdGxlLCB0aGlzLnVwZGF0ZU5ld3NCdG4pO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGVCdG4pO1xuICAgIHRoaXMuZWxQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgdGhpcy51cGRhdGVOZXdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLnVwZGF0ZUxpc3ROZXdzLmJpbmQodGhpcyksXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUxpc3ROZXdzKCkge1xuICAgIHRoaXMudXBkYXRlTmV3c0J0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLm1vdmllTmV3c0xpc3QgPSBuZXcgTW92aWVOZXdzTGlzdCh0aGlzLmNvbnRhaW5lciwgeyBkYXRhOiA1IH0pO1xuXG4gICAgY29uc3QgbW92aWVOZXdzTGlzdCA9IHRoaXMuZWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZpZS1uZXdzLWxpc3RcIik7XG5cbiAgICBtb3ZpZU5ld3NMaXN0ICYmIG1vdmllTmV3c0xpc3QucmVtb3ZlKCk7XG5cbiAgICB0aGlzLm1vdmllTmV3c0xpc3QubG9hZGluZ01vdmllTmV3c0xpc3QoKTtcblxuICAgIGNvbnN0IG1vdmllTmV3c0xpc3RMb2FkaW5nID0gdGhpcy5lbFBhcmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubW92aWUtbmV3cy1saXN0X2xvYWRpbmdcIixcbiAgICApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBtb3ZpZU5ld3NMaXN0TG9hZGluZy5yZW1vdmUoKTtcbiAgICAgIHRoaXMubW92aWVOZXdzTGlzdCA9IG5ldyBNb3ZpZU5ld3NMaXN0KHRoaXMuY29udGFpbmVyLCB7XG4gICAgICAgIGRhdGE6IGRhdGEubmV3cyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tb3ZpZU5ld3NMaXN0LmJpbmRUb0RPTSgpO1xuICAgICAgdGhpcy51cGRhdGVOZXdzQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB0aGlzLnVwZGF0ZU5ld3NCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgY29uc3QgbmV3c2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmllLW5ld3MtbGlzdFwiKTtcbiAgICAgIG5ld3NsaXN0LnJlbW92ZSgpO1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lcl9kYXRhLWVycm9yXCIpO1xuICAgICAgY29uc3QgdGV4dERhdGFFcnJvciA9IG5ldyBQYXJhZ3JhcGgoe1xuICAgICAgICBjbGFzczogXCJ0ZXh0LWRhdGEtZXJyb3JcIixcbiAgICAgICAgaW5uZXJIVE1MOlxuICAgICAgICAgIFwi0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1IDxicj7Qn9GA0L7QstC10YDRjNGC0LUg0L/QvtC00LrQu9GO0YfQtdC90LjQtSA8YnI+0Lgg0L7QsdC90L7QstC40YLQtSDRgdGC0YDQsNC90LjRhtGDXCIsXG4gICAgICB9KS5lbGVtZW50O1xuXG4gICAgICB0aGlzLm1vdmllTmV3c0xpc3QubG9hZGluZ01vdmllTmV3c0xpc3QoKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVycm9yID0gbmV3IERpdih7IGNsYXNzOiBcImNvbnRhaW5lci10ZXh0LWVycm9yXCIgfSkuZWxlbWVudDtcbiAgICAgIGNvbnRhaW5lckVycm9yLmFwcGVuZENoaWxkKHRleHREYXRhRXJyb3IpO1xuICAgICAgdGhpcy5lbFBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXJFcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgTG9hZGluZ1N0eWxpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1N0eWxpbmcvTG9hZGluZ1N0eWxpbmdcIjtcblxuY29uc3QgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFxuICAgICAgICBcIi4vc2VydmljZS13b3JrZXIuanNcIixcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBg0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyBzZXJ2aWNlV29ya2VyINC/0YDQvtGI0LvQsCDRg9GB0L/QtdGI0L3QviAtICR7cmVnaXN0cmF0aW9uLnNjb3BlfWAsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGDQntGI0LjQsdC60LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCBzZXJ2aWNlV29ya2VyIC0gJHtlcnJvcn1gKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XG5cbiAgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XG5cbiAgY29uc3QgbG9hZGluZ1N0eWxpbmcgPSBuZXcgTG9hZGluZ1N0eWxpbmcoYXBwKTtcbiAgbG9hZGluZ1N0eWxpbmcuaW5pdCgpO1xufSk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2pzL2FwcC5qc1wiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cblxudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCIuL25vcm1hbGl6ZS11cmxcIik7XG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6IHZvaWQpfCp9XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9ICggLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9kb2N1bWVudC5jdXJyZW50U2NyaXB0KS5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1hcFxuICAgKiBAcmV0dXJucyB7bnVsbCB8IHN0cmluZ1tdfVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuICBpZiAoIWlzVXJsUmVxdWVzdCggLyoqIEB0eXBlIHtzdHJpbmd9ICovdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXVybCB8fCAhKHVybC5pbmRleE9mKFwiLmNzc1wiKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuaHJlZiA9IFwiXCIuY29uY2F0KHVybCwgXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtcbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKiBAcGFyYW0ge1RPRE99IHNyY1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmVsb2FkU3R5bGUoc3JjKSB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG5cbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vRG9jdW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtcbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1tdKS5qb2luKFwiL1wiKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY1NDhcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY1NTJcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY1MzNcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY2NzhcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY2NzRcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY1MzlcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY2ODRcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY2MjZcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MzQ4MDg0ODY0NDZcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIm1haW4uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4N2VmMGZhNGE0YTU0NmI5MWY2NlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ3b3JrZXJzLWZyb250ZW5kOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly8gaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xudmFyIGNyZWF0ZVN0eWxlc2hlZXQgPSAoY2h1bmtJZCwgZnVsbGhyZWYsIG9sZFRhZywgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdGxpbmtUYWcubm9uY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jO1xuXHR9XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgZXZlbnQudHlwZTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgZXJyb3JUeXBlICsgXCI6IFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIubmFtZSA9IFwiQ2h1bmtMb2FkRXJyb3JcIjtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGlmIChsaW5rVGFnLnBhcmVudE5vZGUpIGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cblx0aWYgKG9sZFRhZykge1xuXHRcdG9sZFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rVGFnLCBvbGRUYWcubmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdH1cblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgbnVsbCwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbnZhciBvbGRUYWdzID0gW107XG52YXIgbmV3VGFncyA9IFtdO1xudmFyIGFwcGx5SGFuZGxlciA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7IGRpc3Bvc2U6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2xkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG9sZFRhZyA9IG9sZFRhZ3NbaV07XG5cdFx0XHRpZihvbGRUYWcucGFyZW50Tm9kZSkgb2xkVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkVGFnKTtcblx0XHR9XG5cdFx0b2xkVGFncy5sZW5ndGggPSAwO1xuXHR9LCBhcHBseTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuZXdUYWdzLmxlbmd0aDsgaSsrKSBuZXdUYWdzW2ldLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRcdG5ld1RhZ3MubGVuZ3RoID0gMDtcblx0fSB9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLm1pbmlDc3MgPSAoY2h1bmtJZHMsIHJlbW92ZWRDaHVua3MsIHJlbW92ZWRNb2R1bGVzLCBwcm9taXNlcywgYXBwbHlIYW5kbGVycywgdXBkYXRlZE1vZHVsZXNMaXN0KSA9PiB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjaHVua0lkcy5mb3JFYWNoKChjaHVua0lkKSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0dmFyIG9sZFRhZyA9IGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKTtcblx0XHRpZighb2xkVGFnKSByZXR1cm47XG5cdFx0cHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR2YXIgdGFnID0gY3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgb2xkVGFnLCAoKSA9PiB7XG5cdFx0XHRcdHRhZy5hcyA9IFwic3R5bGVcIjtcblx0XHRcdFx0dGFnLnJlbCA9IFwicHJlbG9hZFwiO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0b2xkVGFncy5wdXNoKG9sZFRhZyk7XG5cdFx0XHRuZXdUYWdzLnB1c2godGFnKTtcblx0XHR9KSk7XG5cdH0pO1xufVxuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWQiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdDc5MjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZXdvcmtlcnNfZnJvbnRlbmRcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0ID0gbmV3TW9kdWxlRmFjdG9yeVxuXHRcdFx0XHQ/IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZClcblx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIxKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjE1KTtcbiIsIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJjb25zdHJ1Y3RvciIsInBhcmFtcyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnRuIiwiZG9jdW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInRleHQiLCJ0eXBlIiwiRGl2IiwiZGl2IiwiaWQiLCJIZWFkaW5nIiwiaGVhZGluZyIsImdldExldmVsIiwidGV4dENvbnRlbnQiLCJsZXZlbCIsIkVycm9yIiwiQVBJX1JPT1QiLCJwcm9jZXNzIiwiZW52IiwiSW1nIiwiaW1nIiwic3JjIiwiTGkiLCJsaSIsIlBhcmFncmFwaCIsInAiLCJTcGFuIiwic3BhbiIsIk1vdmllTmV3cyIsImVsUGFyZW50IiwiYmluZFRvRE9NIiwibW92aWVOZXdzRWwiLCJ0aXRsZU1vdmllTmV3cyIsImRhdGEiLCJ0aXRsZSIsImltZ1RleHRNb3ZpZU5ld3MiLCJpbWdNb3ZpZU5ld3MiLCJpbWdTcmMiLCJ0ZXh0TW92aWVOZXdzQ29udGFpbmVyIiwidGV4dE1vdmllTmV3cyIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwibG9hZGluZ01vdmllTmV3cyIsIm1vdmllTmV3c0VsTG9hZGluZyIsInRpdGxlTW92aWVOZXdzTG9hZGluZyIsImltZ1RleHRNb3ZpZU5ld3NMb2FkaW5nIiwiaW1nTW92aWVOZXdzTG9hZGluZyIsInRleHRNb3ZpZU5ld3NMb2FkaW5nQ29udGFpbmVyIiwidGV4dE1vdmllTmV3c0xvYWRpbmdGaXJzdCIsInRleHRNb3ZpZU5ld3NMb2FkaW5nU2Vjb25kIiwiVWwiLCJ1bCIsIk1vdmllTmV3c0xpc3QiLCJtb3ZpZU5ld3NMaXN0IiwiZm9yRWFjaCIsIm1vdmllTmV3cyIsImxvYWRpbmdNb3ZpZU5ld3NMaXN0IiwibGlzdExvYWRpbmciLCJtb3ZpZU5ld3NMaXN0TG9hZGluZyIsImkiLCJwdXNoIiwidXJsIiwiTG9hZGluZ1N0eWxpbmciLCJpbml0IiwiYmluZFRvRG9tIiwidXBkYXRlTGlzdE5ld3MiLCJjb250YWluZXIiLCJ0aXRsZUJ0biIsInVwZGF0ZU5ld3NCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImRpc2FibGVkIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwibmV3cyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm5ld3NsaXN0IiwidGV4dERhdGFFcnJvciIsImNvbnRhaW5lckVycm9yIiwicmVnaXN0ZXJTZXJ2aWNlV29ya2VyIiwibmF2aWdhdG9yIiwicmVnaXN0cmF0aW9uIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwibG9nIiwic2NvcGUiLCJhcHAiLCJsb2FkaW5nU3R5bGluZyJdLCJzb3VyY2VSb290IjoiIn0=