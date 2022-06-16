import { VantComponent } from '../../common/component';

VantComponent({
  data: {
    value: '',
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail,
      });
    },

    onSearch() {
      if (this.data.value) {
        tt.showToast({
          title: '搜索：' + this.data.value,
          icon: 'none',
        });
      }
    },

    onClick() {
      if (this.data.value) {
        tt.showToast({
          title: '搜索：' + this.data.value,
          icon: 'none',
        });
      }
    },

    onCancel() {
      tt.showToast({
        title: '取消',
        icon: 'none',
      });
    },

    onClear() {
      tt.showToast({
        title: '清空',
        icon: 'none',
      });
    },
  },
});
