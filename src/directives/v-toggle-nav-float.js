/**
 * TOGGLE NAV FLOAT CUSTOM DIRECTIVE
 *
 * positionFromTop (window.scrollY) is the position of the
 * top of the docuement in the viewport in relation to the
 * docuement top.
 * - starts at 0, increases with downwards scroll
 *
 * if positionFromTop is greater than viewHeight, show nav-float
 *
 * if not, hide nav-float
 */


/* eslint-disable no-param-reassign */
import Vue from 'vue';

function toggleOpacity(el, vH) {
  if (!el) return;
  const pos = window.scrollY;
  if (pos > vH) {
    el.style.display = 'flex';
    el.style.opacity = 1;
  } else if (pos < vH) {
    el.style.opacity = 0;
    el.style.display = 'none';
  }
}

export default Vue.directive('toggle-nav-float', {
  inserted(el, { value: { viewportDimensions: { height } } }) {
    window.addEventListener('scroll', () => toggleOpacity(el, height));
  },
});
