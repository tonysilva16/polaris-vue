import { d as defineComponent, h as ref, D as resolveComponent, o as openBlock, b as createBlock } from "./framework.1qnja6qJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Email",
  setup(__props) {
    const value = ref("contact@qikify.com");
    return (_ctx, _cache) => {
      const _component_TextField = resolveComponent("TextField");
      return openBlock(), createBlock(_component_TextField, {
        type: "email",
        label: "Email",
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        autoComplete: "email"
      }, null, 8, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};