<template>
  <div class="container">

    <van-nav-bar
      title="我的地址"
      left-text="返回"
      right-text="首页"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      chosenAddressId: '1',
      addressList: this.$store.state.addressList,
      disabledList: this.$store.state.disabledList
    }
  },
  methods: {
    onAdd () {
      this.$router.push('/addressedit')
    },
    onEdit (item, index) {
      Toast('编辑地址:' + index)
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push('/home/my')
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 650px;
  background-color: #fafafa;
}

.van-tag--danger{
  background-color: #27ba9b;
}

.van-address-list__bottom{
  background-color: rgba(0,0,0,0);
}

.van-button--danger{
  background-color: #27ba9b;
  border: solid 1px #27ba9b;
}

</style>