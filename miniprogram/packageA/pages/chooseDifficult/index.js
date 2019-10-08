
var app = getApp();

Page({

  //奖品配置
  awardsConfig: {
    awards: [
      { 'index': 0, 'name': '默认' },
      { 'index': 1, 'name': '默认' }
    ]
  },

  data: {
    awardsList: {},
    animationData: {},
    inputText: '',
    awards: [
      { 'index': 0, 'name': '默认' },
      { 'index': 1, 'name': '默认' }
    ],
    startFlag:true,
    show: false
  },

  onReady: function (e) {
    this.drawAwardRoundel();

    //分享
    wx.showShareMenu({
      withShareTicket: true
    });
  },

  //画抽奖圆盘
  drawAwardRoundel: function () {
    var awards = this.awardsConfig.awards;
    var awardsList = [];
    var turnNum = 1 / awards.length;  // 文字旋转 turn 值

    // 奖项列表
    for (var i = 0; i < awards.length; i++) {
      awardsList.push({ turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awards[i].name });
    }

    this.setData({
      awardsList: awardsList
    });
  },

  //发起抽奖
  playReward: function () {
    //中奖index
    if(!this.data.startFlag){
      return;
    }

    var awardIndex = this.randomNumber();
    console.log(awardIndex)
    var runNum = 10;//旋转8周
    var duration = 9000;//时长
    var fenpei = this.awardsConfig.awards.length;

    // 旋转角度
    this.runDeg = this.runDeg || 0;
    this.runDeg = this.runDeg + (360 - this.runDeg % 360) + (360 * runNum - awardIndex * (360 / fenpei))
    //创建动画
    var animationRun = wx.createAnimation({
      duration: duration,
      timingFunction: 'ease'
    })
    animationRun.rotate(this.runDeg).step();
    this.setData({
      animationData: animationRun.export(),
      startFlag : false
    });

    // 中奖提示
    var awardsConfig = this.awardsConfig;
    console.log(awardsConfig.awards)
    setTimeout(() => {
      wx.showModal({
        title: '最终决定',
        content: '结果是' + (awardsConfig.awards[awardIndex].name),
        showCancel: false
      });
      this.setData({
        startFlag: true
      });
    },duration);

  },

  onShareAppMessage: function () {
    // var that = this;
    // return util.doShare("大转盘抽奖", "pages/zp/zp", that);
  },
  build() {
    let buildNum = parseInt(this.data.inputText);
    if (buildNum <= 1 || this.data.inputText.indexOf('.') > -1 || buildNum>20) {
      wx.showModal({
        title: '提示',
        content: '请填写2-20的正整数!',
        showCancel: false
      });
      this.setData({
        inputText: ''
      });
      return;
    }
    let deviationNum = this.awardsConfig.awards.length;

    if (this.awardsConfig.awards.length > buildNum){

      for (let k = 0; k < deviationNum - buildNum ;k++){
        this.data.awards.splice(deviationNum - k - 1, 1);
        this.awardsConfig.awards.splice(deviationNum - k - 1, 1);
      }

      this.setData({
        awards: this.data.awards
      });
      this.drawAwardRoundel();

    }else{

      let temArr = [];
      for (let i = 0; i < buildNum - deviationNum ; i++) {
        let tem = {
          index: deviationNum + '',
          name: '默认'
        };
        temArr.push(tem);
      }
      this.setData({
        awards: this.data.awards.concat(temArr)
      });
      this.awardsConfig.awards = this.awardsConfig.awards.concat(temArr);
      this.drawAwardRoundel();

    }
  },
  inputSet(e) {
    this.setData({
      inputText: e.detail.value
    });
  },
  startRotate(e) {
    this.playReward();
  },
  formSubmit(e) {
    for (let i = 0; i < this.data.awards.length; i++) {
        this.awardsConfig.awards[i].name = e.detail.value[i];
    }
    this.drawAwardRoundel();
    this.setData({ show: false });
  },
  randomNumber(){
    let min = 0;
    let max = this.awardsConfig.awards.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  openSetting() {
    this.setData({ show: !this.data.show });
  }

})
