// components/custom/CProduct/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题文本
    config: {
      type: Object,
      value: {
        isDisplayProductName: 1,
        isDisplayProductDetail: 1,
        isDisplayProductPrice: 1,
        isDisplayProductMessage: 1,
        listTemplate: 4 //哪个模板
      }
    },
    detail: {
      type: Array,
      value: [{
        componentId: "37a23e3bc4b34099aa5e8eb4f142cb48",
        cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190829/9cd70a415f594a6fa4a05363eb4fad55.jpeg",
        id: "576bce4669fd4f048250f001051259e3",
        mark: {
          size: 'medium',
          type: '5',
          text: '最后3天，最后3天',
          color: '#fff',
          bgcolor:'#000',
          src: 'https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190817/0d86c788ede14da891bfd78f1ddf7f1e.jpeg'
        },
        price:{
          current: '12.08',
          delete:'1.00'
        },
        detail:{
          text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
        },
        message:{
          value:[{
            text:'广东广州',
            size:'30',
            color: '#ccc',
          },
          {
            text:'10/19周六',
            size:'30',
            color: '#ccc',
          }]
        },
        statistics:{
          name: 'like',
          size: '30',
          color:'red'
        },
        tags:{
          value:[{
            type:'plain',
            color:'#f2826a',
            text:'标签1'
          },
          {
            type:'round',
            color:'#f2826a',
            text:'标签2'
          },
          {
            type:'mark',
            color:'#f2826a',
            text:'标签3'
          }]
        },
        numLimit: 50,
        productName: "灰度环灰度环灰度环灰度环灰度环灰度环灰度环",
        refId: "0c1149937d2b4ebf982e2b2df6389dc0",
        type: 1
      },
      {
        componentId: "37a23e3bc4b34099aa5e8eb4f142cb48",
        cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190817/0d86c788ede14da891bfd78f1ddf7f1e.jpeg",
        id: "459cfa6e7cd0446dbaac19b5f84b81e2",
        mark: {
          size: 'large',
          type: '1',
          text: '文案',
          color: '#fff',
          bgcolor:'#000'
        },
        price:{
          current: '0.01',
          delete:'1.00'
        },
        detail:{
          text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
        },
        message:{
          value:[{
            text:'广东广州',
            size:'30',
            color: '#ccc',
          },
          {
            text:'10/19周六',
            size:'30',
            color: '#ccc',
          }]
        },
        statistics:{
          name: 'like',
          size: '30',
          color:'red'
        },
        numLimit: 50,
        productName: "测试预约给钱",
        refId: "481225325dd2455f9f6b72322c5bc529",
        type: 1
      },
      {
        componentId: "37a23e3bc4b34099aa5e8eb4f142cb48",
        cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190805/108845bdf82242dda9f3cfc79825b7cc.jpeg",
        id: "f3ade0ed8eee47aaac5be4c2a2e5d98d",
        mark: {
          size: 'large',
          type: '1',
          text: '文案文',
          color: '#fff',
          bgcolor:'#000'
        },
        price:{
          current: '0.01',
          delete:'1.00'
        },
        detail:{
          text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
        },
        message:{
          value:[{
            text:'广东广州',
            size:'30',
            color: '#ccc',
          },
          {
            text:'10/19周六',
            size:'30',
            color: '#ccc',
          }]
        },
        statistics:{
          name: 'like',
          size: '30',
          color:'red'
        },
        numLimit: 50,
        productName: "多规格_展示型",
        refId: "f8c1c6e773e24c3fadcd2080163402f4",
        type: 1
      },
      {
        componentId: "37a23e3bc4b34099aa5e8eb4f142cb48",
        cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190805/108845bdf82242dda9f3cfc79825b7cc.jpeg",
        id: "f3ade0ed8eee47aaac5be4c2a2e5d98d",
        mark: {
          size: 'large',
          type: '1',
          text: '文案文案',
          color: '#fff',
          bgcolor:'#000'
        },
        price:{
          current: '0.01',
          delete:'1.00'
        },
        detail:{
          text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
        },
        message:{
          value:[{
            text:'广东广州',
            size:'30',
            color: '#ccc',
          },
          {
            text:'10/19周六',
            size:'30',
            color: '#ccc',
          }]
        },
        statistics:{
          name: 'like',
          size: '30',
          color:'red'
        },
        numLimit: 50,
        productName: "多规格_展示型",
        refId: "f8c1c6e773e24c3fadcd2080163402f4",
        type: 1
      },
      {
        componentId: "37a23e3bc4b34099aa5e8eb4f142cb48",
        cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190805/108845bdf82242dda9f3cfc79825b7cc.jpeg",
        id: "f3ade0ed8eee47aaac5be4c2a2e5d98d",
        mark: {
          size: 'large',
          type: '1',
          text: '文案文案',
          color: '#fff',
          bgcolor:'#000'
        },
        price:{
          current: '0.01',
          delete:'1.00'
        },
        detail:{
          text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
        },
        message:{
          value:[{
            text:'广东广州',
            size:'30',
            color: '#ccc',
          },
          {
            text:'10/19周六',
            size:'30',
            color: '#ccc',
          }]
        },
        statistics:{
          name: 'like',
          size: '30',
          color:'red'
        },
        numLimit: 50,
        productName: "多规格_展示型",
        refId: "f8c1c6e773e24c3fadcd2080163402f4",
        type: 1
      }]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
