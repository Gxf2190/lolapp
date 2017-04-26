<template>
	<div class="p">
		<head-top></head-top>
		  <select-area></select-area>
      <div class="rank">
        <ul>
          <li v-for="(player, index) in rankgrade" class="ranklist">
            <span class="lista">{{index}}</span>
            <span class="listb">{{player.uName}}</span>
            <span class="listc" :class="{changecolor: player.cevValue > 42000, changecolors:   player.cevValue < 40000 }"><i>战斗力</i> {{player.cevValue}}</span>
          </li>
        </ul>
      </div>
    <footers></footers>
	</div>
</template>

<script>
import foot from '../components/footer.vue'
import header from '../components/header.vue'
import selectarea from '../components/selectArea'
  export default {
  	data(){
  		return {
  			gxf: ''
  		}
  	},
    computed:{
      rank(){return this.$store.state.rank},
      rankgrade(){return this.$store.state.rankgrade}
    },
  	 components:{
    	footers: foot,	
    	headTop: header,
      selectArea: selectarea
  	},
    updated(){
       this.$store.dispatch('GET_RANK_GRADE', {id: 2, champion: this.rank})
    },
    
   
  }

</script>

<style lang="less">
  .p{
    width: 100%;
    height: 100%;
    .rank{
      position: relative;
      top: 40px;
      .ranklist{
        display: flex;
        font-size: 20px;
        text-align: center;

        .lista{
          flex: 1;
        }
        .listb{
          flex: 2;
            color: #408bcb;
        }
        .listc{
          flex: 2;
        }
        .changecolor{
          color: red;
        }
        .changecolors{
          color: green;
        }
      }
    }
  }
</style>