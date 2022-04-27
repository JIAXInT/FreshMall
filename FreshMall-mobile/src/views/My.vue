<template>
  <div class="container">
    <van-nav-bar
      title="个人中心"
      fixed
      placeholder
    />

    <!-- 用户信息 -->
    <div class="user" v-if="username">
      <van-image
        round
        width="70px"
        height="70px"
        src="https://img.zcool.cn/community/01972c5f110b9fa801206621eba569.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100"
      />
      <span class="user-name">Hi~ {{username}}</span>
      <van-grid direction="horizontal" :column-num="3" :border="false">
        <van-grid-item>
          <span>优惠券</span>
          <p>3</p>
        </van-grid-item>
        <van-grid-item>
          <span>余额</span>
          <p>600.0</p>
        </van-grid-item>
        <van-grid-item>
          <span>金币</span>
          <p>50</p>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="user" v-else>
      <van-image
        round
        width="70px"
        height="70px"
        src="https://img.zcool.cn/community/01972c5f110b9fa801206621eba569.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100"
      />
      <router-link to="/login" class="user-name">登录/注册</router-link>
    </div>

    <!-- 订单板块 -->
    <van-cell-group inset>
      <van-cell title="我的订单" is-link icon="balance-list-o" to="/order" :border="false"/>
      <van-grid :border="false">
        <van-grid-item icon="todo-list" icon-color="red" text="代付款" />
        <van-grid-item icon="balance-list" text="备货中" />
        <van-grid-item icon="bag" text="待收货" />
        <van-grid-item icon="bill" text="售后" />
      </van-grid>
    </van-cell-group>

    <van-cell-group inset>
      <van-cell title="我的地址" is-link icon="location-o" to="/address" :border="false"/>
      <van-grid :border="false">
        <van-grid-item icon="map-marked" icon-color="red" text="地址列表" />
        <van-grid-item icon="add-square" text="新增地址" />
      </van-grid>
    </van-cell-group>

    <van-cell-group inset>
      <van-cell title="其他服务" is-link icon="setting-o" to="/address" :border="false"/>
      <van-grid :border="false">
        <van-grid-item icon="delete" icon-color="red" text="退出登录" @click="logout"/>
      </van-grid>
    </van-cell-group>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: this.$store.state.username
    }
  },
  methods: {
    logout () {
        this.axios.post('/user/logout').then(() => {
        Toast.success('退出成功')
        this.$store.dispatch('saveUserName', '')
        window.sessionStorage.setItem('token', '')
        window.location.reload()
      })
    }
  }

}
</script>

<style lang="scss" scoped>
    .user{
      margin: 20px 20px 0 20px;
      .user-name {
          position: relative;
          top: -28px;
          left: 17px;
          color: black;
          font-size: 25px;
      }
      .van-grid-item{
        p{
          position: relative;
          top: 1px;
          left: 5px;
          font-size: 20px;
          font-weight: 600;
          color: #27ba9b;
        }
      }
      /deep/.van-grid-item__content{
        padding: 0;
        background-color: rgba(0,0,0,0);
      }
    }

    .van-cell-group{
      margin-bottom: 20px;
    }

    /deep/.van-icon:before{
      color:#27ba9b
    }
    .custom-title{
      position: relative;
      top: -16px;
      left: 20px;
      font-size: 20px;
    }
    /deep/.van-card__thumb img{
      border-radius: 50px;
    }

      /deep/.van-grid-item__content{
        padding: 8px 8px;
        background-color: rgba(0,0,0,0);
      }

</style>