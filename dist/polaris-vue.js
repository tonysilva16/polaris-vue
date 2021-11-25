import Vue, { openBlock, createBlock, resolveDynamicComponent, normalizeClass, withCtx, renderSlot, createElementBlock } from 'vue';
import { Component, Prop, Vue as Vue$1 } from 'vue-property-decorator';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function variationName(name, value) {
    return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

let Styles = class Styles extends Vue {
};
Styles = __decorate([
    Component
], Styles);
var script$4 = Styles;

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.element), {
    class: normalizeClass(_ctx.className)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".Polaris-List {\n  padding-left: 2rem;\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style: disc outside none;\n}\n.Polaris-List + .Polaris-List {\n  margin-top: 1.6rem;\n}\n.Polaris-List--typeNumber {\n  padding-left: 3.2rem;\n  list-style: decimal outside none;\n}\n.Polaris-List__Item {\n  margin-bottom: 0.8rem;\n}\n.Polaris-List__Item:last-child {\n  margin-bottom: 0;\n}\n.Polaris-List__Item .Polaris-List:first-child {\n  margin-top: 0.8rem;\n}";
styleInject(css_248z$2);

script$4.render = render$4;
script$4.__file = "src/components/List/Styles.vue";

/**
 * <br/>
 * <h4 class="desc">
 * Lists display a set of related text-only content.
 * Each list item begins with a bullet or a number.
 * </h4>
 */
let List$1 = class List extends Vue {
    constructor() {
        super(...arguments);
        this.element = this.type === 'bullet' ? 'ul' : 'ol';
    }
    get className() {
        const name = classNames(this.$style.List, this.type && this.$style[variationName('type', this.type)]);
        console.log(this.$style, name);
        return classNames(this.$style.List, this.type && this.$style[variationName('type', this.type)]);
    }
};
__decorate([
    Prop({ type: String, default: 'bullet' })
], List$1.prototype, "type", void 0);
List$1 = __decorate([
    Component({
        mixins: [script$4],
    })
], List$1);
var script$3 = List$1;

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.element), {
    class: normalizeClass(_ctx.className)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

script$3.render = render$3;
script$3.__file = "src/components/List/List.vue";

let Item$1 = class Item extends Vue$1 {
    constructor() {
        super(...arguments);
        this.className = this.$style.Item;
    }
};
Item$1 = __decorate([
    Component({
        mixins: [script$4],
    })
], Item$1);
var script$2 = Item$1;

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.className)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/components/List/components/Item/Item.vue";

/**
 * <br/>
 * <h4 class="desc">
 * Lists display a set of related text-only content.
 * Each list item begins with a bullet or a number.
 * </h4>
 */
let List = class List extends Vue {
    constructor() {
        super(...arguments);
        this.element = this.type === 'bullet' ? 'ul' : 'ol';
    }
    get className() {
        const name = classNames(this.$style.ListOption, this.type && this.$style[variationName('type', this.type)]);
        console.log(this.$style, name);
        return classNames(this.$style.ListOption, this.type && this.$style[variationName('type', this.type)]);
    }
};
__decorate([
    Prop({ type: String, default: 'bullet' })
], List.prototype, "type", void 0);
List = __decorate([
    Component
], List);
var script$1 = List;

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.element), {
    class: normalizeClass(_ctx.className)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["class"]))
}

var css_248z$1 = ".Polaris-ListOption {\n  margin-top: 0;\n  margin-bottom: 10px;\n  list-style: disc outside none;\n}\n.Polaris-ListOption + .Polaris-ListOption {\n  margin-top: 10px;\n}\n.Polaris-ListOption--typeNumber {\n  list-style: decimal outside none;\n}\n.Polaris-ListOption__Item {\n  margin-bottom: 10px;\n}\n.Polaris-ListOption__Item:last-child {\n  margin-bottom: 0;\n}\n.Polaris-ListOption__Item .Polaris-ListOption:first-child {\n  margin-top: 10px;\n}";
styleInject(css_248z$1);

var style0$1 = {"ListOption":"_ListOption_10ph8_1","typeNumber":"_typeNumber_10ph8_10","Item":"_Item_10ph8_14"};

const cssModules$1 = script$1.__cssModules = {};
cssModules$1["$style"] = style0$1;

script$1.render = render$1;
script$1.__file = "src/components/ListOption/ListOption.vue";

let Item = class Item extends Vue$1 {
    constructor() {
        super(...arguments);
        this.className = this.$style.Item;
    }
};
Item = __decorate([
    Component
], Item);
var script = Item;

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.className)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

var css_248z = ".Polaris-ListOption-Item {\n  margin-bottom: 20px;\n}\n.Polaris-ListOption-Item:last-child {\n  margin-bottom: 0;\n}\n.Polaris-ListOption-Item .Polaris-ListOption-Item__ListOption:first-child {\n  margin-top: 10px;\n}\n.Polaris-ListOption-Item .Polaris-ListOption-Item__ListOption .Polaris-ListOption-Item--typeNumber {\n  margin-right: 10px;\n}";
styleInject(css_248z);

var style0 = {"Item":"_Item_azxxb_1","ListOption":"_ListOption_azxxb_7","typeNumber":"_typeNumber_azxxb_10"};

const cssModules = script.__cssModules = {};
cssModules["$style"] = style0;

script.render = render;
script.__file = "src/components/ListOption/components/Item/Item.vue";

const components = [
    script$3,
    script$2,
];
const PolarisVue = {
    name: 'PolarisVue',
    install(Vue) {
        // Define each component to the whole package
        components.forEach((c) => {
            Vue.component(c.name, c);
        });
    },
};

export { script$3 as List, script$2 as ListItem, PolarisVue as default };
