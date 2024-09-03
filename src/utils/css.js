const docElem = window.document.documentElement;

// some helper functions
export function scrollY() {
  return window.pageYOffset || docElem.scrollTop;
}

export function getViewportH() {
  const client = docElem["clientHeight"],
    inner = window["innerHeight"];

  if (client < inner) return inner;
  else return client;
}

// http://stackoverflow.com/a/5598797/989439
export function getOffset(el) {
  let offsetTop = 0,
    offsetLeft = 0;
  do {
    if (!isNaN(el.offsetTop)) {
      offsetTop += el.offsetTop;
    }
    if (!isNaN(el.offsetLeft)) {
      offsetLeft += el.offsetLeft;
    }
  } while ((el = el.offsetParent) !== null);

  return {
    top: offsetTop,
    left: offsetLeft,
  };
}

export function inViewport(el, h = 0) {
  let elH = el.offsetHeight, // 获取元素的高度
    scrolled = scrollY(), // 获取页面已滚动的垂直距离
    viewed = scrolled + getViewportH(), // 计算视口的底部位置
    elTop = getOffset(el).top; // 获取元素相对于文档顶部的偏移量

  return elTop + elH * h <= viewed; // && (elBottom - elH * h) >= scrolled;
}

export function extend(a, b) {
  for (let key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
}
// from: http://stackoverflow.com/a/21913575

export function getComputedTranslateY(obj) {
  // 如果浏览器不支持getComputedStyle方法，则直接返回（通常不会发生）。
  if (!window.getComputedStyle) return;

  // 获取元素的样式对象（CSS样式）。
  const style = getComputedStyle(obj),
    // 获取元素的transform属性的值（可能是transform、webkitTransform或mozTransform）。
    transform = style.transform || style.webkitTransform || style.mozTransform;

  // 匹配transform属性值是否是3D变换矩阵（matrix3d）。
  let mat = transform.match(/^matrix3d\((.+)\)$/);

  // 如果是3D变换矩阵，从中提取第14个值（索引13），并将其转换为浮点数返回。
  if (mat) return parseFloat(mat[1].split(", ")[13]);

  // 如果不是3D变换矩阵，匹配是否是2D变换矩阵（matrix）。
  mat = transform.match(/^matrix\((.+)\)$/);

  // 如果是2D变换矩阵，从中提取第6个值（索引5），并将其转换为浮点数返回。
  return mat ? parseFloat(mat[1].split(", ")[5]) : 0;
}

export function initAnimationFrame() {
  /**********************************************/
  /** https://gist.github.com/desandro/1866474 **/
  /**********************************************/
  let lastTime = 0; // 上一次执行回调函数的时间戳，用于计算下一帧的时间
  let prefixes = "webkit moz ms o".split(" "); // 不同浏览器前缀，用于兼容性处理

  // 尝试获取没有前缀的 requestAnimationFrame 和 cancelAnimationFrame 方法
  let requestAnimationFrame = window.requestAnimationFrame;
  let cancelAnimationFrame = window.cancelAnimationFrame;

  // 通过循环遍历前缀数组，获取带前缀的 requestAnimationFrame 和 cancelAnimationFrame 方法
  let prefix;
  for (let i = 0; i < prefixes.length; i++) {
    // 如果已经找到 requestAnimationFrame 和 cancelAnimationFrame，则退出循环
    if (requestAnimationFrame && cancelAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    // 尝试获取带前缀的 requestAnimationFrame 方法
    requestAnimationFrame =
      requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
    // 尝试获取带前缀的 cancelAnimationFrame 方法
    cancelAnimationFrame =
      cancelAnimationFrame ||
      window[prefix + "CancelAnimationFrame"] || // 有的浏览器实现是 CancelAnimationFrame
      window[prefix + "CancelRequestAnimationFrame"]; // 有的浏览器实现是 CancelRequestAnimationFrame
  }

  // 如果浏览器不支持 requestAnimationFrame 或 cancelAnimationFrame，则使用 setTimeout 和 clearTimeout 作为后备方案
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback) {
      const currTime = new Date().getTime(); // 获取当前时间戳
      const timeToCall = Math.max(0, 16 - (currTime - lastTime)); // 计算下一帧的延迟时间，确保大约每16ms调用一次
      const id = window.setTimeout(function () {
        callback(currTime + timeToCall); // 在计算的时间后执行回调函数
      }, timeToCall);
      lastTime = currTime + timeToCall; // 更新 lastTime 为当前时间加上延迟时间
      return id; // 返回定时器的 ID
    };

    cancelAnimationFrame = function (id) {
      window.clearTimeout(id); // 通过 clearTimeout 来取消定时器
    };
  }
  return { requestAnimationFrame, cancelAnimationFrame };
}
