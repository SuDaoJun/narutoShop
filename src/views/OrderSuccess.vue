<template>
    <div>
      <nav-header></nav-header>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>订单确认</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>确认地址</span></li>
            <li class="cur"><span>查看订单</span></li>
            <li class="cur"><span>订单确认</span></li>
            <li><span>支付金额</span></li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>恭喜! <br>你的订单正在处理中!</h3>
            <p>
              <span>订单流水号：{{orderId}}</span>
              <span>订单总额：{{orderTotal|currency('$')}}</span>
              <br><br>
              <span>订单地址：{{address}}</span>
              <span>联系电话：{{tel}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link class="btn btn--m" to="/cart">购物车清单</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link class="btn btn--m" to="/orderPay">订单支付</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import NavBread from './../components/NavBread'
    import {currency} from './../util/currency'
    import axios from 'axios'
    export default{
        data(){
            return{
                orderId:'',
                orderTotal:0,
                address:'',
                tel:''
            }
        },
        components:{
          NavHeader,
          NavFooter,
          NavBread
        },
        filters:{
          currency:currency
        },
        mounted(){
            var orderId = this.$route.query.orderId;
            if(!orderId){
              return;
            }
            axios.get("/users/orderDetail",{
                params:{
                  orderId:orderId
                }
            }).then((response)=>{
                let res = response.data;
                if(res.status=='0'){
                    this.orderId = orderId;
                    this.orderTotal = res.result.orderTotal;
                    this.address = res.result.streetName;
                    this.tel = res.result.tel;
                }
            });
        }
    }
</script>
