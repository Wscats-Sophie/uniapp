<template>
  <view class="page">
    <view class="box">
      <view>2312</view>
      <view>2312</view>
    </view>
   </view>
</template>

<script>
import models from '@/models';
export default {
  data() {
    const currentdate = new Date();
    const imageUrl = models.image();
    return {
      //图标
      imageUrl,
      //月度汇总
      monthlySummaryFooter: false,
      grayCard: false,
      monthlySummaryRowUrl: imageUrl.downIcon,
      monthlySummaryRowLabel: '展开汇总',
      //零星工资
      sporadicWagesDefaultShow: true,
      sporadicWagesDefaultHide: false,
      sporadicWagesRowUrl: imageUrl.downIcon,
      sporadicWagesRowLabel: '展开汇总',
      sporadicWagesUrl: imageUrl.moneyBlueIco,
      sporadicWagesLabel: '实发合计',
      //公司福利
      companyWelfareDefaultShow: true,
      companyWelfareDefaultHide: false,
      companyWelfareRowUrl: imageUrl.downIcon,
      companyWelfareRowLabel: '展开汇总',
      companyWelfareUrl: imageUrl.moneyBlueIco,
      companyWelfareLabel: '实发合计',
      animationData:{},
    };
  },
  methods: {
    //月度汇总展开折叠
    monthlySummaryClick() {
      this.animation=uni.createAnimation();
      this.monthlySummaryFooter = !this.monthlySummaryFooter;
      this.grayCard = !this.grayCard;
      if (this.monthlySummaryFooter) {
        this.monthlySummaryRowLabel = '收起';
        this.monthlySummaryRowUrl = this.imageUrl.upIcon;
        this.animation.opacity(0).step().opacity(1).step({duration:1000})
        this.animationData=this.animation.export();
      } else {
        this.monthlySummaryRowLabel = '展开汇总';
        this.monthlySummaryRowUrl = this.imageUrl.downIcon;
        this.animation.opacity(1).step().opacity(0).step({duration:1000})
        this.animationData=this.animation.export();
      }
    },
    //零星工资
    sporadicWagesClick() {
      this.sporadicWagesDefaultShow = !this.sporadicWagesDefaultShow;
      this.sporadicWagesDefaultHide = !this.sporadicWagesDefaultHide;
      if (this.sporadicWagesDefaultHide) {
        this.sporadicWagesRowLabel = '收起';
        this.sporadicWagesRowUrl = this.imageUrl.upIcon;
        this.sporadicWagesLabel = '备注';
        this.sporadicWagesUrl = this.imageUrl.moneyIco;
      } else {
        this.sporadicWagesRowLabel = '展开汇总';
        this.sporadicWagesRowUrl = this.imageUrl.downIcon;
        this.sporadicWagesLabel = '实发合计';
        this.sporadicWagesUrl = this.imageUrl.moneyBlueIco;
      }
    },
    //公司福利
    companyWelfareClick() {
      this.companyWelfareDefaultShow = !this.companyWelfareDefaultShow;
      this.companyWelfareDefaultHide = !this.companyWelfareDefaultHide;
      if (this.companyWelfareDefaultHide) {
        this.companyWelfareRowLabel = '收起';
        this.companyWelfareRowUrl = this.imageUrl.upIcon;
        this.companyWelfareLabel = '';
        this.companyWelfareUrl = '';
      } else {
        this.companyWelfareRowLabel = '展开汇总';
        this.companyWelfareRowUrl = this.imageUrl.downIcon;
        this.companyWelfareLabel = '实发合计';
        this.companyWelfareUrl = this.imageUrl.moneyBlueIco;
      }
    }
  }
};
</script>

<style lang="scss">
  view{
    box-sizing: border-box;
  }
  .page{
    padding: 44rpx 30rpx;
  }
.monthly-summary {
  border-radius: 20rpx;
  .title {
    font-size: 24rpx;
    color: $uni-text-color;
    margin: $uni-spacing-col-base 0;
  }
  .card {
    background: #f5f5f5;
    border-radius: 20rpx;
    .yellow-card {
      background-color: #fae892;
      border-radius: 20rpx;
      padding: 30rpx;
      .header {
        display: flex;
        justify-content: space-between;
      }
      .middle {
        display: flex;
        justify-content: space-between;
        padding: $uni-spacing-row-base 0;
        text:nth-child(1) {
          color: #333333;
          font-size: 64rpx;
          font-weight: bold;
        }
        text:nth-child(2) {
          font-size: 30rpx;
          margin-top: $uni-spacing-col-base;
          color: $uni-text-color;
        }
      }
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: $uni-spacing-col-base * 2;
        font-size: 30rpx;
        view:nth-child(1) {
          display: flex;
          flex: 1;
          justify-content: space-between;
        }
        view:nth-child(3) {
          display: flex;
          flex: 1;
          justify-content: space-between;
        }
      }
    }
    .gray-card {
      padding: 30rpx 30rpx 30rpx 30rpx;
      border-radius: 0 0 20rpx 20rpx;
      border: 1px solid #E6E6E6;
      border-top:none;
      margin-top: -25rpx;
      .title {
        color: $uni-text-color;
        font-size: 30rpx;
        font-weight: bold;
      }
      .content {
        font-size: 24rpx;
        color: #4d4d4d;
        & > view {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: $uni-spacing-col-base * 2;
          view:nth-child(1) {
            display: flex;
            flex: 1;
            justify-content: space-between;
          }
          view:nth-child(3) {
            display: flex;
            flex: 1;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
