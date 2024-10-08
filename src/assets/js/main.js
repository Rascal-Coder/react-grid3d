/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
import Masonry from "masonry-layout";
import { classie } from "./classie";
import AnimOnScroll from "./animOnScroll";
import dynamics from "dynamics.js";
import {
  getComputedTranslateY,
  scrollY,
  extend,
  initAnimationFrame,
} from "../../utils/css";

const { requestAnimationFrame } = initAnimationFrame();
/**
 * Isometric grid obj
 */
function IsoGrid(el, options) {
  this.isolayerEl = el;

  this.options = extend({}, this.options);
  extend(this.options, options);

  this.gridEl = this.isolayerEl.querySelector(".grid");

  // grid items
  this.gridItems = [].slice.call(this.gridEl.querySelectorAll(".grid__item"));
  this.gridItemsTotal = this.gridItems.length;

  this.didscroll = false;

  this._init();
}

IsoGrid.prototype.options = {
  // static or scrollable
  type: "static",
  // grid perspective value
  perspective: 0,
  // grid transform
  transform: "",
  // each grid item animation (for the subitems)
  stackItemsAnimation: {
    // this follows the dynamics .js (https://github.com/michaelvillar/dynamics .js) animate fn syntax
    // properties (pos is the current subitem position)
    properties: function (pos) {
      return {
        translateZ: (pos + 1) * 50,
      };
    },
    // animation options (pos is the current subitem position); itemstotal is the total number of subitems
    options: function () {
      return {
        type: dynamics.bezier,
        duration: 500,
        points: [
          { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
          { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
        ],
      };
    },
  },
  // callback for loaded grid
  onGridLoaded: function () {
    return false;
  },
};

IsoGrid.prototype._init = function () {
  // const self = this;

  window.imagesLoaded(this.gridEl, () => {
    // initialize masonry
    this.msnry = new Masonry(this.gridEl, {
      itemSelector: ".grid__item",
      isFitWidth: true,
    });

    // the isolayer div element will be positioned fixed and will have a transformation based on the values defined in the HTML (data-attrs for the isolayer div element)
    if (this.options.type === "scrollable") {
      this.isolayerEl.style.position = "fixed";
    }

    this.isolayerEl.style.WebkitTransformStyle =
      this.isolayerEl.style.transformStyle = "preserve-3d";

    const transformValue =
      this.options.perspective != 0
        ? "perspective(" +
          this.options.perspective +
          "px) " +
          this.options.transform
        : this.options.transform;
    this.isolayerEl.style.WebkitTransform = this.isolayerEl.style.transform =
      transformValue;

    // create the div element that will force the height for scrolling
    if (this.options.type === "scrollable") {
      this._createPseudoScroller();
    }

    // init/bind events
    this._initEvents();

    // effects for loading grid elements:
    if (this.options.type === "scrollable") {
      new AnimOnScroll(this.gridEl, {
        minDuration: 1,
        maxDuration: 1.2,
        viewportFactor: 0,
      });
    }

    // grid is "loaded" (all images are loaded)
    this.options.onGridLoaded();
    classie.add(this.gridEl, "grid--loaded");
  });
};

/**
 * Creates the div element that will force the height for scrolling
 */
IsoGrid.prototype._createPseudoScroller = function () {
  // element that will force the height for scrolling
  this.pseudoScrollerEl = document.createElement("div");
  this.pseudoScrollerEl.className = "pseudo-scroller";
  // insert it inside the main container (same level of isolayerEl)
  this.isolayerEl.parentNode.insertBefore(
    this.pseudoScrollerEl,
    this.isolayerEl
  );
  // set the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page - value set for the translation on the Y axis)
  this.pseudoScrollerEl.style.height =
    this.gridEl.offsetHeight +
    getComputedTranslateY(this.isolayerEl) * Math.sqrt(2) +
    "px";
};

/**
 * Initialize/Bind events fn.
 */
IsoGrid.prototype._initEvents = function () {
  const self = this;

  const scrollHandler = function () {
      requestAnimationFrame(function () {
        if (!self.didscroll) {
          self.didscroll = true;
          self._scrollPage();
        }
      });
    },
    mouseenterHandler = function (ev) {
      self._expandSubItems(ev.target);
    },
    mouseleaveHandler = function (ev) {
      self._collapseSubItems(ev.target);
    };

  if (this.options.type === "scrollable") {
    // update the transform (ty) on scroll
    window.addEventListener("scroll", scrollHandler, false);
    // on resize (layoutComplete for the masonry instance) recalculate height
    this.msnry.on("layoutComplete", function () {
      // reset the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page)
      self.pseudoScrollerEl.style.height =
        self.gridEl.offsetHeight +
        self.isolayerEl.offsetTop * Math.sqrt(2) +
        "px";
      self._scrollPage();
    });
  }

  this.gridItems.forEach(function (item) {
    item.addEventListener("mouseenter", mouseenterHandler);
    item.addEventListener("mouseleave", mouseleaveHandler);
  });
};

IsoGrid.prototype._expandSubItems = function (item) {
  const self = this,
    itemLink = item.querySelector("a"),
    subItems = [].slice.call(itemLink.querySelectorAll(".layer"));

  itemLink.style.zIndex = item.style.zIndex = this.gridItemsTotal;

  subItems.forEach(function (subitem, pos) {
    dynamics.stop(subitem);
    dynamics.animate(
      subitem,
      self.options.stackItemsAnimation.properties(pos),
      self.options.stackItemsAnimation.options()
    );
  });
};

IsoGrid.prototype._collapseSubItems = function (item) {
  const itemLink = item.querySelector("a");
  [].slice
    .call(itemLink.querySelectorAll(".layer"))
    .forEach(function (subitem) {
      dynamics.stop(subitem);
      dynamics.animate(
        subitem,
        {
          translateZ: 0, // enough to reset any transform value previously set
        },
        {
          duration: 100,
          complete: function () {
            itemLink.style.zIndex = item.style.zIndex = 1;
          },
        }
      );
    });
};

IsoGrid.prototype._scrollPage = function () {
  this.gridEl.style.WebkitTransform = this.gridEl.style.transform =
    "translate3d(0,-" + scrollY() + "px,0)";
  this.didscroll = false;
};
// window.IsoGrid = IsoGrid;

export default IsoGrid;
