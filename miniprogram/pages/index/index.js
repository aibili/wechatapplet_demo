const data_arr = [0.1, 0.25, 0.6, 0.05]; //各类的百分比
const color_arr = ["#FDF6E2", "#EB9C68"];//现实的颜色
const color_arr2 = ["#CCEEFF", "#FFB6C1","#87CECB"];//现实的颜色
const text_arr = ["音频或视频播放器", "笔记本电脑", "智能手机", "电视"];//分类
const ctx = wx.createCanvasContext('canvas_circle'); //创建id为canvasI的绘图



Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    rewards:[],
    inputText: '',
    maskFlag: false
  },
  start() { //点击抽奖按钮, 为了达到慢速开始慢速结束的效果，在这里使用css3的过渡效果
  },
  onLoad: function (e) {},
  onReady: function () {
    this.qiedangao(2) 
  },
  onShow: function () {},
  qiedangao(num) {
    //初始坐标,从这里开始切
    let startRotate = -90;
    //多少个跨度的切
    let spanRotate = 360 / num;

    //定位文本
    let spanRotate2 = spanRotate / 2;
    let spanRotate3 = 360 / num;
    
      for (let i = 0; i < num ; i++) {
        
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, Math.PI / 180 * startRotate, Math.PI / 180 * (startRotate + spanRotate), false);
        ctx.closePath();

        if (num%2==0){
          console.log('偶数')
          let tem_i = i % 2 === 0 ? 0 : 1;
          ctx.fillStyle = color_arr[tem_i];
        }else{
          console.log('奇数')
          let tem_i = i >= 3 ? i - color_arr2.length : i;
          ctx.fillStyle = color_arr2[tem_i];
        }
       
        ctx.fill();
        
        let tem = "rewards["+i+"].rotate";
        this.setData({
          [tem]: spanRotate2
        });
        spanRotate2 = spanRotate2 + spanRotate3;
        startRotate = startRotate + spanRotate;
        
      }
    
    //绘图
    ctx.draw();
  },
  build(){
    let buildNum = parseInt(this.data.inputText);
    if (buildNum <= 1 || this.data.inputText.indexOf('.') > -1){
      wx.showModal({
        title: '提示',
        content: '填整数,而且要大于1的',
        showCancel: false
      });
      this.setData({
        inputText: ''
      });
      return;
    }
    let temArray = [];
    for (let i = 0; i < buildNum; i++) {
      let tem = {
        title: '',
        rotate: 0
      }
      temArray.push(tem);
    }
    this.setData({
      rewards: temArray
    });
    this.qiedangao(buildNum)
  },
  inputSet(e){
    this.setData({
      inputText: e.detail.value
    });
  },
  startRotate(e){
    console.log('ds')
    this.playReward();
  },
  formSubmit(e){
    for(let i=0;i<this.data.rewards.length;i++){
      let tem = "rewards["+i+"].title";
      if(e.detail.value[i] != ""){
        this.setData({
          [tem]: e.detail.value[i]
        });
      }
    }
  },
  playReward: function () { 
    //中奖index 
    var awardIndex = 2; 
    var runNum = 8;//旋转8周 
    var duration = 4000;//时长 
    // 旋转角度 
    this.runDeg = this.runDeg || 0; 
    this.runDeg = this.runDeg + (360 - this.runDeg % 360) + (360 * runNum - awardIndex * (360 / 6)) 
    //创建动画 
    var animationRun = wx.createAnimation({ 
      duration: duration, 
      timingFunction: 'ease' 
      }) 
    animationRun.rotate(this.runDeg).step(); 
    this.setData({ 
      animationData: animationRun.export()
    }); 
    // 中奖提示 
    var awardsConfig = this.awardsConfig; 
    setTimeout(function () { 
      wx.showModal({ 
        title: '恭喜', 
        content: '获得' + (awardsConfig.awards[awardIndex].name), 
        showCancel: false 
      }); 
      this.setData({ 
        btnDisabled: '' 
        }); 
    }.bind(this), duration); 
    }
  
})
