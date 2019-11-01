  const app = getApp();

  Component({
    properties: {
      config: {
        type: Object,
        value: {}
      },
      detail: {
        type: Object,
        value: [],
        observer: 'getContent'
      }
    },
    data: {
      content: ''
    },
    methods: {
      getContent() {
        this.setData({
          content: this.data.config.content.replace(/\n/g, ' ')
        });
      },
      openLink() {
        console.log('点击事件');
      }
    }
  })