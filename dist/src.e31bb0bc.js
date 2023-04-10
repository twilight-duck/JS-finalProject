// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/goods-image.svg":[function(require,module,exports) {
module.exports = "/goods-image.e3b9e4a9.svg";
},{}],"img/blue-tshirt-image.svg":[function(require,module,exports) {
module.exports = "/blue-tshirt-image.cd3cff6c.svg";
},{}],"img/hat-image.svg":[function(require,module,exports) {
module.exports = "/hat-image.5315c398.svg";
},{}],"img/case-image.svg":[function(require,module,exports) {
module.exports = "/case-image.a2d24665.svg";
},{}],"img/hat-2-image.svg":[function(require,module,exports) {
module.exports = "/hat-2-image.f05c43f5.svg";
},{}],"img/white-case-image.svg":[function(require,module,exports) {
module.exports = "/white-case-image.6f43b3c1.svg";
},{}],"img/blue-case-image.svg":[function(require,module,exports) {
module.exports = "/blue-case-image.e00b105a.svg";
},{}],"img/green-tshirt-image.svg":[function(require,module,exports) {
module.exports = "/green-tshirt-image.075c1268.svg";
},{}],"img/red-case-image.svg":[function(require,module,exports) {
module.exports = "/red-case-image.9f16f314.svg";
},{}],"img/red-tshirt-image.svg":[function(require,module,exports) {
module.exports = "/red-tshirt-image.315cbe21.svg";
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _goodsImage = _interopRequireDefault(require("/img/goods-image.svg"));
var _blueTshirtImage = _interopRequireDefault(require("/img/blue-tshirt-image.svg"));
var _hatImage = _interopRequireDefault(require("/img/hat-image.svg"));
var _caseImage = _interopRequireDefault(require("/img/case-image.svg"));
var _hat2Image = _interopRequireDefault(require("/img/hat-2-image.svg"));
var _whiteCaseImage = _interopRequireDefault(require("/img/white-case-image.svg"));
var _blueCaseImage = _interopRequireDefault(require("/img/blue-case-image.svg"));
var _greenTshirtImage = _interopRequireDefault(require("/img/green-tshirt-image.svg"));
var _redCaseImage = _interopRequireDefault(require("/img/red-case-image.svg"));
var _redTshirtImage = _interopRequireDefault(require("/img/red-tshirt-image.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var buttonNext = document.querySelector('.next-button');
var buttonPrev = document.querySelector('.prev-button');
var slider = document.querySelector('.slider');
var offset = 0;
buttonNext.addEventListener('click', function () {
  offset = offset + 950;
  slider.style.left = -offset + 'px';
});
buttonPrev.addEventListener('click', function () {
  offset = offset - 950;
  slider.style.left = -offset + 'px';
});
function createElement(tagName, options) {
  var element = Object.assign(document.createElement(tagName), options);
  return element;
}
var catalogueItems = [{
  src: _goodsImage.default,
  id: '01',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне'
}, {
  src: _blueTshirtImage.default,
  id: '02',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне'
}, {
  src: _hatImage.default,
  id: '03',
  price: '1375 ₽',
  oldPrice: '2 499 ₽',
  title: 'Бейсболка с дизайнерским принтом Super Shape 01 белая',
  description: 'Бейсболка с дизайнерским принтом Super Shape 01 белая'
}, {
  src: _caseImage.default,
  id: '04',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03'
}, {
  src: _goodsImage.default,
  id: '05',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне'
}, {
  src: _hat2Image.default,
  id: '06',
  price: '1375 ₽',
  oldPrice: '2 499 ₽',
  title: 'Бейсболка с дизайнерским принтом Super Shape 02 абстракция',
  description: 'Бейсболка с дизайнерским принтом Super Shape 02 абстракция'
}, {
  src: _whiteCaseImage.default,
  id: '07',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03'
}, {
  src: _blueCaseImage.default,
  id: '08',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 02',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 02'
}, {
  src: _greenTshirtImage.default,
  id: '09',
  price: '1999 ₽',
  oldPrice: '3 179 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 зеленая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на зеленом фоне'
}, {
  src: _redCaseImage.default,
  id: '10',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 06',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 06'
}, {
  src: _redTshirtImage.default,
  id: '11',
  price: '2399 ₽',
  oldPrice: '3 790 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 06 абстракция',
  description: 'Футболка с дизайнерским принтом Super Shape 06 абстракция'
}, {
  src: _blueTshirtImage.default,
  id: '12',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне'
}];
function createCatalogueItem(item) {
  var goodsWrapper = document.querySelector('.goods__wrapper');
  var goodsItem = createElement("article", {
    className: "goods__item"
  });
  var goodsItemHeader = createElement("header", {
    className: "goods__item-header"
  });
  var itemHeaderImage = createElement("div", {
    className: "item-header-image"
  });
  var itemHeaderPicture = createElement("img", {
    src: item.src,
    alt: "Goods-image",
    className: "goods__item-image"
  });
  var itemImageDiscount = createElement("span", {
    className: "item-image-discount",
    textContent: "-25%"
  });
  itemHeaderImage.insertAdjacentElement("beforeend", itemHeaderPicture);
  itemHeaderImage.insertAdjacentElement("beforeend", itemImageDiscount);
  goodsItemHeader.insertAdjacentElement("beforeend", itemHeaderImage);
  goodsItem.insertAdjacentElement("beforeend", goodsItemHeader);
  var priceWrapper = createElement("div", {
    className: "goods__item-price"
  });
  var goodsItemPrice = createElement("span", {
    className: "goods__item-discount",
    textContent: item.price
  });
  var goodsItemOldPrice = createElement("span", {
    className: "goods__item-old-price",
    textContent: item.oldPrice
  });
  priceWrapper.insertAdjacentElement("beforeend", goodsItemPrice);
  priceWrapper.insertAdjacentElement("beforeend", goodsItemOldPrice);
  goodsItem.insertAdjacentElement("beforeend", priceWrapper);
  var rankingWrapper = createElement("div", {
    className: "ranking__wrapper"
  });
  var rankingText = createElement("span", {
    className: "ranking__text",
    textContent: "4.9"
  });
  var rankingNumber = createElement("span", {
    className: "ranking__number",
    textContent: "14 отзывов"
  });
  rankingWrapper.insertAdjacentElement("beforeend", rankingText);
  rankingWrapper.insertAdjacentElement("beforeend", rankingNumber);
  goodsItem.insertAdjacentElement("beforeend", rankingWrapper);
  var goodsItemText = createElement("p", {
    className: "goods__item-text",
    textContent: item.title
  });
  var goodsItemMoreText = createElement("p", {
    className: "goods__item-text-hover",
    textContent: item.description
  });
  var itemButton = createElement("button", {
    className: "goods__item-button",
    id: "item-button",
    textContent: " В корзину"
  });
  itemButton.setAttribute('data-cart', 'add');
  goodsItem.insertAdjacentElement("beforeend", goodsItemText);
  goodsItem.insertAdjacentElement("beforeend", goodsItemMoreText);
  goodsItem.insertAdjacentElement("beforeend", itemButton);
  goodsWrapper.insertAdjacentElement("beforeend", goodsItem);
  goodsItem.setAttribute('data-id', "".concat(item.id));
  return goodsItem;
}
catalogueItems.forEach(function (item) {
  createCatalogueItem(item);
});
},{"/img/goods-image.svg":"img/goods-image.svg","/img/blue-tshirt-image.svg":"img/blue-tshirt-image.svg","/img/hat-image.svg":"img/hat-image.svg","/img/case-image.svg":"img/case-image.svg","/img/hat-2-image.svg":"img/hat-2-image.svg","/img/white-case-image.svg":"img/white-case-image.svg","/img/blue-case-image.svg":"img/blue-case-image.svg","/img/green-tshirt-image.svg":"img/green-tshirt-image.svg","/img/red-case-image.svg":"img/red-case-image.svg","/img/red-tshirt-image.svg":"img/red-tshirt-image.svg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52427" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map