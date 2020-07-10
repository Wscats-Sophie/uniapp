<script>
export default {
  // onLaunch: function() {
  // 	console.log('App Launch')
  // },
  // onShow: function() {
  // 	console.log('App Show')
  // },
  // onHide: function() {
  // 	console.log('App Hide')
  // }
};
</script>

<style lang="scss">
/*每个页面公共css */
page{
  background: #FAFAFA;
  padding-top: $uni-spacing-col-base*5;
}
.page {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  position: absolute;
  box-sizing:border-box;
  /* background-image: url(static/bgj.jpg); */
}

.pageblock {
  background-color: #f8f8f8;
}

/* 图标文字共用样式 */
.icon-label {
  display: flex;
  align-items: center;
  .icon {
    margin-right: $uni-spacing-row-sm/2;
    margin-top: 5rpx;
    width: 36rpx;
    height: 36rpx;
    &.icon-row {
      // margin-top: 0;
      width: 24rpx;
      height: 12rpx;
    }
  }
  .label {
    margin-left: $uni-spacing-row-sm/2;
    display: flex;
    flex-direction: column;
    font-size: 26rpx;
    text {
      color: #ff8000;
      &.label-default {
        color: #4D4D4D;
      }
      &.label-gray {
        color: #A6A6A6;
      }
      &.label-blue {
        color: #3071F3;
      }
    }
    text:nth-child(2){
      margin-top: $uni-spacing-col-sm;
      color: $uni-text-color;
      font-weight: bold;
    }
  }
}

// 直线样式
.horizontal-line {
  background: #D9D9D9;
  height: 1rpx;
  margin: 0 -30rpx;
}
//竖线
.vertical-line {
  background: $uni-text-color;
  height: 10px;
  width: 1px;
  margin: 0 $uni-spacing-row-base;
}
</style>
