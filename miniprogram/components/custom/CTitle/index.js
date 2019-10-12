  const app = getApp();

  Component({
    properties: {
      config: {
        type: Object,
        value: {
          type: '4',

        }
      },
      detail: {
        type: Object,
        value: {},
        observer: 'getContent'
      }
    },
    data: {
      content: '标题'
    },
    methods: {
      getContent() {
        this.setData({
          content: this.data.detail.content.replace(/\n/g, ' ')
        });
      },
      openLink() {
        console.log('点击事件');
      }
    }
  })