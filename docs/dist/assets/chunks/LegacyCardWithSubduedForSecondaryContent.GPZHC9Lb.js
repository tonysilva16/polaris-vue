import { _ as _export_sfc, D as resolveComponent, o as openBlock, b as createBlock, w as withCtx, a as createTextVNode, I as createVNode } from "./framework.1qnja6qJ.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  const _component_LegacyCard = resolveComponent("LegacyCard");
  return openBlock(), createBlock(_component_LegacyCard, {
    title: "Deactivated staff accounts",
    sectioned: "",
    subdued: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_List, null, {
        default: withCtx(() => [
          createVNode(_component_ListItem, null, {
            default: withCtx(() => [
              createTextVNode("Felix Crafford")
            ]),
            _: 1
          }),
          createVNode(_component_ListItem, null, {
            default: withCtx(() => [
              createTextVNode("Ezequiel Manno")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const LegacyCardWithSubduedForSecondaryContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  LegacyCardWithSubduedForSecondaryContent as default
};