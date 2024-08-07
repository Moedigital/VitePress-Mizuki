import {
  ClickOutside,
  Intersect,
  Ripple,
  Touch,
  VTooltip
} from "./chunk-HJIBXDYC.js";
import {
  isObject
} from "./chunk-6HW37BVU.js";
import {
  h,
  mergeProps,
  render,
  resolveComponent
} from "./chunk-574YRH25.js";
import "./chunk-BUSYA2B4.js";

// node_modules/vuetify/lib/directives/mutate/index.mjs
function mounted(el, binding) {
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    once,
    immediate,
    ...modifierKeys
  } = modifiers;
  const defaultValue = !Object.keys(modifierKeys).length;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {
      attributes: (modifierKeys == null ? void 0 : modifierKeys.attr) ?? defaultValue,
      characterData: (modifierKeys == null ? void 0 : modifierKeys.char) ?? defaultValue,
      childList: (modifierKeys == null ? void 0 : modifierKeys.child) ?? defaultValue,
      subtree: (modifierKeys == null ? void 0 : modifierKeys.sub) ?? defaultValue
    }
  };
  const observer = new MutationObserver(function() {
    let mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    handler == null ? void 0 : handler(mutations, observer2);
    if (once) unmounted(el, binding);
  });
  if (immediate) handler == null ? void 0 : handler([], observer);
  el._mutate = Object(el._mutate);
  el._mutate[binding.instance.$.uid] = {
    observer
  };
  observer.observe(el, options);
}
function unmounted(el, binding) {
  var _a;
  if (!((_a = el._mutate) == null ? void 0 : _a[binding.instance.$.uid])) return;
  el._mutate[binding.instance.$.uid].observer.disconnect();
  delete el._mutate[binding.instance.$.uid];
}
var Mutate = {
  mounted,
  unmounted
};

// node_modules/vuetify/lib/directives/resize/index.mjs
function mounted2(el, binding) {
  var _a, _b;
  const handler = binding.value;
  const options = {
    passive: !((_a = binding.modifiers) == null ? void 0 : _a.active)
  };
  window.addEventListener("resize", handler, options);
  el._onResize = Object(el._onResize);
  el._onResize[binding.instance.$.uid] = {
    handler,
    options
  };
  if (!((_b = binding.modifiers) == null ? void 0 : _b.quiet)) {
    handler();
  }
}
function unmounted2(el, binding) {
  var _a;
  if (!((_a = el._onResize) == null ? void 0 : _a[binding.instance.$.uid])) return;
  const {
    handler,
    options
  } = el._onResize[binding.instance.$.uid];
  window.removeEventListener("resize", handler, options);
  delete el._onResize[binding.instance.$.uid];
}
var Resize = {
  mounted: mounted2,
  unmounted: unmounted2
};

// node_modules/vuetify/lib/directives/scroll/index.mjs
function mounted3(el, binding) {
  const {
    self = false
  } = binding.modifiers ?? {};
  const value = binding.value;
  const options = typeof value === "object" && value.options || {
    passive: true
  };
  const handler = typeof value === "function" || "handleEvent" in value ? value : value.handler;
  const target = self ? el : binding.arg ? document.querySelector(binding.arg) : window;
  if (!target) return;
  target.addEventListener("scroll", handler, options);
  el._onScroll = Object(el._onScroll);
  el._onScroll[binding.instance.$.uid] = {
    handler,
    options,
    // Don't reference self
    target: self ? void 0 : target
  };
}
function unmounted3(el, binding) {
  var _a;
  if (!((_a = el._onScroll) == null ? void 0 : _a[binding.instance.$.uid])) return;
  const {
    handler,
    options,
    target = el
  } = el._onScroll[binding.instance.$.uid];
  target.removeEventListener("scroll", handler, options);
  delete el._onScroll[binding.instance.$.uid];
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) return;
  unmounted3(el, binding);
  mounted3(el, binding);
}
var Scroll = {
  mounted: mounted3,
  unmounted: unmounted3,
  updated
};

// node_modules/vuetify/lib/composables/directiveComponent.mjs
function useDirectiveComponent(component, props) {
  const concreteComponent = typeof component === "string" ? resolveComponent(component) : component;
  const hook = mountComponent(concreteComponent, props);
  return {
    mounted: hook,
    updated: hook,
    unmounted(el) {
      render(null, el);
    }
  };
}
function mountComponent(component, props) {
  return function(el, binding, vnode) {
    var _a, _b, _c;
    const _props = typeof props === "function" ? props(binding) : props;
    const text = ((_a = binding.value) == null ? void 0 : _a.text) ?? binding.value ?? (_props == null ? void 0 : _props.text);
    const value = isObject(binding.value) ? binding.value : {};
    const children = () => text ?? el.innerHTML;
    const provides = (vnode.ctx === binding.instance.$ ? (_b = findComponentParent(vnode, binding.instance.$)) == null ? void 0 : _b.provides : (_c = vnode.ctx) == null ? void 0 : _c.provides) ?? binding.instance.$.provides;
    const node = h(component, mergeProps(_props, value), children);
    node.appContext = Object.assign(/* @__PURE__ */ Object.create(null), binding.instance.$.appContext, {
      provides
    });
    render(node, el);
  };
}
function findComponentParent(vnode, root) {
  const stack = /* @__PURE__ */ new Set();
  const walk = (children) => {
    var _a, _b;
    for (const child of children) {
      if (!child) continue;
      if (child === vnode) {
        return true;
      }
      stack.add(child);
      let result2;
      if (child.suspense) {
        result2 = walk([child.ssContent]);
      } else if (Array.isArray(child.children)) {
        result2 = walk(child.children);
      } else if ((_a = child.component) == null ? void 0 : _a.vnode) {
        result2 = walk([(_b = child.component) == null ? void 0 : _b.subTree]);
      }
      if (result2) {
        return result2;
      }
      stack.delete(child);
    }
    return false;
  };
  if (!walk([root.subTree])) {
    throw new Error("Could not find original vnode");
  }
  const result = Array.from(stack).reverse();
  for (const child of result) {
    if (child.component) {
      return child.component;
    }
  }
  return root;
}

// node_modules/vuetify/lib/directives/tooltip/index.mjs
var Tooltip = useDirectiveComponent(VTooltip, (binding) => {
  var _a;
  return {
    activator: "parent",
    location: ((_a = binding.arg) == null ? void 0 : _a.replace("-", " ")) ?? "top",
    text: typeof binding.value === "boolean" ? void 0 : binding.value
  };
});
export {
  ClickOutside,
  Intersect,
  Mutate,
  Resize,
  Ripple,
  Scroll,
  Tooltip,
  Touch
};
//# sourceMappingURL=vuetify_directives.js.map
