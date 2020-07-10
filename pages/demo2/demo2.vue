<template>
  <view class="app-form">
    <view class="app-form-item" v-for="(item, index) in create">
      <view class="label">{{ item.label }}</view>
      <view class="content">
        <input
          v-if="item.type == 'text'"
          :type="item.type"
          :placeholder="item.placeholder"
          @input="onChange(index, $event)"
        />
        <radio-group
          v-else-if="item.type == 'radio'"
          class="radio-group"
          @change="radioChange"
        >
          <label
            class="radio-group-item"
            v-for="(radio, index) in item.range"
            :key="index"
          >
            <radio
              style="transform:scale(0.8)"
              class="radio"
              :value="radio.value"
              :checked="index === item.current"
            />
            <view class="radio-label">{{ radio.label }}</view>
          </label>
        </radio-group>
        <picker
          v-else-if="item.type == 'picker'"
          class="picker"
          :mode="item.mode"
          :value="item.value"
          :range="item.range"
          :range-key="item.rangeKey"
          @change="onChange(index, $event)"
        >
          <view class="picker-value">
            {{
              currentPickIndex === -1
                ? '请选择'
                : item.range[currentPickIndex].label
            }}
          </view>
        </picker>
      </view>
    </view>
    <button class="submit" @click="onSubmit">提交</button>
  </view>
</template>

<script>
import models from '@/models';
import Vue from 'vue';

export default {
  data() {
    const create = models.create();
    return {
      create,
      index: 0,
      currentPickIndex: -1,
    };
  },
  computed: {
    objValue() {}
  },
  onLoad() {},
  computed: {
    payload() {
      const { create } = this;
      const payload = {};
      create.forEach((item, index) => {
        payload[`${item.prop}`] = item.value;
      });
      console.log(payload);
    }
  },
  methods: {
    onChange(index, e) {
      console.log(e);
      if (e.type == 'input') {
        this.create[index].value = e.detail.value;
      }
      //如果是pick选择
      else if (e.type == 'change') {
        this.currentPickIndex = e.detail.value;
        this.create[index].value = this.create[index].range[
          e.detail.value
        ].label;
      }
    },
    onSubmit() {
      const { payload } = this;
      payload;
    },
    radioChange() {}
  }
};
</script>

<style lang="scss" scoped>
page {
  background: white;
  padding: 0;
}

.app-form {
  padding: 20rpx 30rpx;
  &-item {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 25rpx;
    border-bottom: 1px solid #eee;

    .label {
      flex: 0 0 150rpx;
      font-size: 28rpx;
    }

    .content {
      display: flex;
      justify-content: flex-end;
      flex: 1 0;
      text-align: right;
      padding-right: 50rpx;

      input {
      }

      .radio-group {
        display: flex;
        text-align: right;

        &-item {
          display: flex;
          align-items: center;
          &:nth-child(1) {
            margin-left: 20rpx;
          }

          .radio-label {
            font-size: 28rpx;
          }
        }
      }
      .picker {
        flex: 1 0;
        .picker-value {
          color: grey;
          font-size: 28rpx;
        }
      }
    }
  }

  .submit {
    margin: 60rpx 60rpx 0 60rpx;
    background: blue;
    color: white;
    border-radius: 20rpx;
  }
}
</style>
