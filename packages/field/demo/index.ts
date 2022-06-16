import { VantComponent } from '../../common/component';

VantComponent({
  data: {
    sms: '',
    value: '',
    password: '',
    username: '',
    username2: '',
    username3: '',
    message: '',
    phone: '1365577',
  },

  methods: {
    onClickIcon() {
      tt.showToast({
        icon: 'none',
        title: '点击图标',
      });
    },
  },
});
