import { d as defineComponent, h as ref, D as resolveComponent, o as openBlock, b as createBlock, w as withCtx, t as toDisplayString, a as createTextVNode, I as createVNode } from "./framework.1qnja6qJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabWithCustomDisclosure",
  setup(__props) {
    const selected = ref(0);
    const handleTabChange = (selectedTabIndex) => selected.value = selectedTabIndex;
    const tabs = [
      {
        id: "all-customers-4",
        content: "All",
        accessibilityLabel: "All customers",
        panelID: "all-customers-content-4"
      },
      {
        id: "accepts-marketing-4",
        content: "Accepts marketing",
        panelID: "accepts-marketing-content-4"
      },
      {
        id: "repeat-customers-4",
        content: "Repeat customers",
        panelID: "repeat-customers-content-4"
      },
      {
        id: "prospects-4",
        content: "Prospects",
        panelID: "prospects-content-4"
      }
    ];
    return (_ctx, _cache) => {
      const _component_Text = resolveComponent("Text");
      const _component_LegacyCardSection = resolveComponent("LegacyCardSection");
      const _component_Tabs = resolveComponent("Tabs");
      const _component_LegacyCard = resolveComponent("LegacyCard");
      return openBlock(), createBlock(_component_LegacyCard, null, {
        default: withCtx(() => [
          createVNode(_component_Tabs, {
            disclosureText: "More views",
            tabs,
            selected: selected.value,
            onSelect: handleTabChange
          }, {
            default: withCtx(() => [
              createVNode(_component_LegacyCardSection, {
                title: tabs[selected.value].content
              }, {
                default: withCtx(() => [
                  createVNode(_component_Text, { as: "p" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(`Tab ${selected.value} selected`), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["selected"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};