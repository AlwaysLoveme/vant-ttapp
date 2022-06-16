import { VantComponent } from '../../common/component';

VantComponent({
  data: {
    fileList1: [],
    fileList2: [
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
    ],
    fileList3: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
    fileList4: [],
    fileList5: [],
    fileList6: [],
    cloudPath: [],
    fileList7: [],
    fileList8: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'uploading',
        message: '上传中',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'failed',
        message: '上传失败',
      },
    ],
  },

  methods: {
    beforeRead(event) {
      const { file, callback = () => {} } = event.detail;
      if (file.url.indexOf('jpeg') < 0) {
        tt.showToast({ title: '请选择jpg图片上传', icon: 'none' });
        callback(false);
        return;
      }
      callback(true);
    },

    afterRead(event) {
      const { file, name } = event.detail;
      console.log(JSON.stringify(file, null, 2));
      const fileList = this.data[`fileList${name}`];

      this.setData({ [`fileList${name}`]: fileList.concat(file) });
    },

    oversize() {
      tt.showToast({ title: '文件超出大小限制', icon: 'none' });
    },

    delete(event) {
      const { index, name } = event.detail;
      const fileList = this.data[`fileList${name}`];
      fileList.splice(index, 1);
      this.setData({ [`fileList${name}`]: fileList });
    },

    clickPreview() {},

    uploadToCloud() {
      tt.cloud.init();
      const { fileList6: fileList = [] } = this.data;
      if (!fileList.length) {
        tt.showToast({ title: '请选择图片', icon: 'none' });
      } else {
        const uploadTasks = fileList.map((file, index) =>
          this.uploadFilePromise(`my-photo${index}.png`, file)
        );
        Promise.all(uploadTasks)
          .then((data) => {
            tt.showToast({ title: '上传成功', icon: 'none' });
            const fileList = data.map((item) => ({ url: item.fileID }));
            this.setData({
              cloudPath: data as any,
              fileList6: fileList as any,
            });
          })
          .catch((e) => {
            tt.showToast({ title: '上传失败', icon: 'none' });
            console.log(e);
          });
      }
    },

    uploadFilePromise(fileName, chooseResult) {
      return tt.cloud.uploadFile({
        cloudPath: fileName,
        filePath: chooseResult.path,
      });
    },
  },
});
