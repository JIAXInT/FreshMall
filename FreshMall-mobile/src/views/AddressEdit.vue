<template>
  <div>

    <van-nav-bar
      title="地址编辑"
      left-text="返回"
      right-text="首页"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { areaList } from '@vant/area-data'

export default {
  data () {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    onClickLeft () {
      this.$router.push('/address')
    },
    onClickRight() {
      this.$router.push('/home/my')
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/.van-button--danger{
    background-color: #27ba9b;
    border: solid 1px #27ba9b;
  }
</style>