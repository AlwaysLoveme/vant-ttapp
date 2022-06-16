import { useChildren } from '../common/relation';
import { VantComponent } from '../common/component';

type TrivialInstance = WechatMiniprogram.Component.TrivialInstance;

VantComponent({
  field: true,

  relation: useChildren('checkbox', function (target) {
    this.updateChild(target);
  }),

  props: {
    max: Number,
    value: {
      type: Array,
      observer: 'updateChildren',
    },
    disabled: {
      type: Boolean,
      observer: 'updateChildren',
    },
    direction: {
      type: String,
      value: 'vertical',
    },
  },

  methods: {
    updateChildren() {
      Array.isArray(this.children) &&
        this.children.forEach((child) => this.updateChild(child));
    },

    updateChild(child: TrivialInstance) {
      const { value, disabled, direction } = this.data;
      child.setData({
        value: value.indexOf(child.data.name) !== -1,
        parentDisabled: disabled,
        direction,
      });
    },
  },
});
