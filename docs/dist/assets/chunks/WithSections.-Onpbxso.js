import { E as EditIcon, D as DeleteIcon } from "./Preview.vue_vue_type_style_index_0_lang.vIfP4F2u.js";
import { I as ImportIcon, E as ExportIcon } from "./ImportIcon.5_e-GgvE.js";
import { d as defineComponent, h as ref, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, a as createTextVNode } from "./framework.1qnja6qJ.js";
const _hoisted_1 = { style: { "height": "250px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WithSections",
  setup(__props) {
    const active = ref(true);
    const toggleActive = () => {
      active.value = !active.value;
    };
    const sections = [
      {
        title: "File options",
        items: [
          { content: "Import file", icon: ImportIcon },
          { content: "Export file", icon: ExportIcon }
        ]
      },
      {
        title: "Bulk actions",
        items: [
          { content: "Edit", icon: EditIcon },
          { content: "Delete", icon: DeleteIcon }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      const _component_ActionList = resolveComponent("ActionList");
      const _component_Popover = resolveComponent("Popover");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Popover, {
          active: active.value,
          autofocusTarget: "first-node",
          onClose: toggleActive
        }, {
          activator: withCtx(() => [
            createVNode(_component_Button, {
              onClick: toggleActive,
              disclosure: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" More actions ")
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_ActionList, {
              actionRole: "menuitem",
              sections
            })
          ]),
          _: 1
        }, 8, ["active"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};