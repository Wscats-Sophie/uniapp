<template>
  <view class="uni-list">
    <radio-group @change="radioChange">
      <label
        class="uni-list-cell uni-list-cell-pd"
        v-for="(item, index) in items"
        :key="item.value"
      >
        <view><radio :value="item.value" :checked="index === current" /></view>
        <view>{{ item.name }}</view>
      </label>
    </radio-group>
  </view>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          value: 'USA',
          name: '美国'
        },
        {
          value: 'CHN',
          name: '中国',
          checked: 'true'
        },
        {
          value: 'BRA',
          name: '巴西'
        },
        {
          value: 'JPN',
          name: '日本'
        },
        {
          value: 'ENG',
          name: '英国'
        },
        {
          value: 'FRA',
          name: '法国'
        }
      ],
      current: 0
    };
  },
 methods: {
   radioChange: function(e) {
     console.log(e.detail.value)
     this.$emit('change', e);
     for (let i = 0; i < this.items.length; i++) {
       if (this.items[i].value === e.detail.value) {
         this.current = i;
         break;
       }
     }
   }
 }
};
</script>

<style></style>
