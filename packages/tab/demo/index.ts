import { VantComponent } from '../../common/component';

VantComponent({
  data: {
    tabs2: [1, 2],
    tabs3: [1, 2, 3],
    tabs4: [1, 2, 3, 4],
    tabs6: [1, 2, 3, 4, 5, 6],
    tabsWithName: [
      { name: 'a', index: 1 },
      { name: 'b', index: 2 },
      { name: 'c', index: 3 },
    ],
  },

  methods: {
    onClickDisabled(event) {
      tt.showToast({
        title: `标签 ${event.detail.index + 1} 已被禁用`,
        icon: 'none',
      });
    },

    onChange(event) {
      tt.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: 'none',
      });
    },

    onClickNavRight() {
      tt.showToast({
        title: '点击 right nav',
        icon: 'none',
      });
    },

    onClick(event) {
      tt.showToast({
        title: `点击标签 ${event.detail.index + 1}`,
        icon: 'none',
      });
    },
  },
});
