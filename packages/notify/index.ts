import { VantComponent } from '../common/component';
import { WHITE } from '../common/color';
import { getSystemInfoSync, nextTick } from '../common/utils';

VantComponent({
  props: {
    message: String,
    background: String,
    type: {
      type: String,
      value: 'danger',
    },
    color: {
      type: String,
      value: WHITE,
    },
    duration: {
      type: Number,
      value: 3000,
    },
    zIndex: {
      type: Number,
      value: 110,
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: false,
    },
    top: null,
  },

  data: {
    show: false,
    onOpened: null as unknown as () => void,
    onClose: null as unknown as () => void,
    onClick: null as unknown as (detail: Record<string, null>) => void,
  },

  created() {
    const { statusBarHeight } = getSystemInfoSync();
    this.setData({ statusBarHeight });
  },

  methods: {
    show() {
      const { duration, onOpened } = this.data;

      clearTimeout(this.timer);
      this.setData({ show: true });

      nextTick(onOpened);

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(() => {
          this.hide();
        }, duration);
      }
    },

    hide() {
      const { onClose } = this.data;

      clearTimeout(this.timer);
      this.setData({ show: false });

      nextTick(onClose);
    },

    onTap(event: WechatMiniprogram.TouchEvent) {
      const { onClick } = this.data;
      if (onClick) {
        onClick(event.detail);
      }
    },
  },
});