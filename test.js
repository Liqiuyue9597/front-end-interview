let transformStr = '';
let top = 0;
let left = 0;
if (firstPos === 'up') {
  left = targetPos.left + targetPos.width / 2;
  top = targetPos.top + targetPos.height + window.pageYOffset;
  if (secondPos === 'right') {
    transformStr = 'transform: translateX(-100%)';
  }
} else if (firstPos === 'down') {
  left = targetPos.left + targetPos.width / 2;
  top = targetPos.top + window.pageYOffset;
  if (secondPos === 'left') {
    transformStr = 'transform: translateY(-100%)';
  } else if (secondPos === 'center') {
    transformStr = 'transform: translate(-50%, -100%)';
  } else if (secondPos === 'right') {
    transformStr = 'transform: translate(-100%, -100%)';
  }
} else if (firstPos === 'left') {
  left = targetPos.left + targetPos.width;
  top = targetPos.top + targetPos.height / 2 + window.pageYOffset;
  if (secondPos === 'bottom') {
    transformStr = 'transform: translateY(-100%)';
  }
} else if (firstPos === 'right') {
  left = targetPos.left;
  top = targetPos.top + targetPos.height / 2 + window.pageYOffset;
  if (secondPos === 'center') {
    transformStr = 'transform: translate(-100%, -50%)';
  } else if (secondPos === 'bottom') {
    transformStr = 'transform: translate(-100%, -100%)';
  } else if (secondPos === 'top') {
    transformStr = 'transform: translateX(-100%)';
  }
}
/* eslint-disable */
// debugger;
if (transformStr === '') {
  popoverDOM.style.cssText = `left:${left}; top:${top}`;
} else {
  popoverDOM.style.cssText = `${transformStr}; left:${left}; top:${top}`;
}
