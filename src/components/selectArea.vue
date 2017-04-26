<template>
	<div class="Area">
	  <select id="server" class="server" v-model="selected">
        <option :value="0">艾欧尼亚</option>
        <option :value="1">祖安</option>
        <option :value="2">诺克萨斯</option>
        <option :value="3">班德尔城</option>
        <option :value="4">皮尔特沃夫</option>
        <option :value="5">战争学院</option>
        <option :value="6">巨神峰</option>
        <option :value="7">雷瑟守备</option>
        <option :value="8">裁决之地</option>
        <option :value="9">黑色玫瑰</option>
        <option :value="10">暗影岛</option>
        <option :value="11">钢铁烈阳</option>
        <option :value="12">均衡教派</option>
        <option :value="13">水晶之痕</option>
        <option :value="14">影流</option>
        <option :value="15">守望之海</option>
        <option :value="16">征服之海</option>
        <option :value="17">卡拉曼达</option>
        <option :value="18">皮城警备</option>
        <option :value="19">比尔吉沃特</option>
        <option :value="20">德玛西亚</option>
        <option :value="21">弗雷尔卓德</option>
        <option :value="22">无畏先锋</option>
        <option :value="23">恕瑞玛</option>
        <option :value="24">扭曲丛林</option>
        <option :value="25">巨龙之巢</option>
        <option :value="26">教育网专区</option>
      </select>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	data(){
		return{
			selected: 0
		}
	},
	components:{
	
	},
	computed:{
		
	},
	methods:{

	},
	updated(){
		this.$store.dispatch('GET_RANK', this.selected)
	},
	created(){
		this.$store.dispatch('GET_RANK', this.selected)
	}

}

</script>

<style lang="less">
	.Area{
		position: relative;
		top: 36px;
		.server{
			width: 100%;

			height: 30px;
			color: #408bcb;
			font-size: 20px;
			line-height:24px;
			border-radius: 10px;
			text-indent: 10px;
			-webkit-appearance: none;
			
		}
	}
</style>