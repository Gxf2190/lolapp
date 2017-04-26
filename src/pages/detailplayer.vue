<template>
	
		<div class="battleinfo">
			<div class="battletitle">
				<span class="battletitles">比赛类型</span>
				<span class="battletitles">总场次</span>
				<span class="battletitles">胜率</span>
				<span class="battletitles">胜场</span>
				<span class="battletitles">负场</span>
				<span class="battletitles">段位</span>
				<span class="battletitles">胜点</span>
			</div>
			<div class="battledata">
				<ul class="datalist">
					<li class="datacontent" v-for="eve in playerDetail">
						<span class="data">{{eve.battle_type | battleType }}</span>
						 <span class="data">{{eve.total_num}}</span>
						 <span class="data" v-if="eve.total_num != 0">{{eve.win_num / eve.total_num | toFix}}</span>
						 <span class="data" v-else>0%</span>
						 <span class="data">{{eve.win_num}}</span>
						 <span class="data">{{eve.lose_num}}</span>
						 <span class="data">{{eve.tier}}</span>
						 <span class="data">{{eve.win_point}}</span>
					</li>
				</ul>
			</div>
			
		</div>
	
</template>

<script>
import {mapState, mapActions} from 'vuex'
import { battleType , toFix, TOKEN} from '../config/data'
import axios from 'vue'

export default {
	data(){
		return{
			
		}
	},
	components:{
		
	},
	filters:{
		battleType,
		toFix,
		
	},
	computed:{
		...mapState(['playerDetail']),
		
	},
	methods:{
		getInfo(){
			let qquin =  this.$route.params.qquin
			let vaid =  this.$route.params.vaid
			this.$store.dispatch('GET_PLAYER_FIGHT_DEATIL',{qquin: qquin, vaid: vaid})
		},
		
	},
	created(){
		this.getInfo()

	}

}

</script>

<style lang="less">
  .battleinfo{
  	width: 100%;
  	.battletitle{
  		padding-top: 10px;
  		background-color: rgb(161,216,185);
  		font-size: 0;
  		display: flex;
  		.battletitles:first-child{
  					flex:1.5;
  				}
  		.battletitles{
  			flex:1;
  			text-align: center;
  			height: 24px;
  			line-height: 24px;
  			font-size: 14px;
  			color: #666;
  			font-weight: 700;
  		}
  	}
  	.battledata{
  		width: 100%;
  		font-size: 0;
  		.datalist{
  			width: 100%;
  			.datacontent{
  				display: flex;
  				margin: 5px 0;
  				.data:first-child{
  					flex:1.5;
  				}
  				.data{
  					flex:1;
  					font-size: 12px;
  					text-align: center;
  				}
  				.data:nth-child(4){
  					color:#52c15f;
  				}
  				.data:nth-last-child(3){
  					color:#ef3d3d;
  				}
  			}

  		}
  	}
  }
</style>