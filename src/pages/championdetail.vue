<template>
	<div class="deatil" >
	    <div class="info">
        <div class="icon"> 
            <img    class="images" :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+championDetail.key +'.png'" >
          </div> 
        <div class="dec">
           <h3 class="title">英雄标签</h3>
            <p class="descinfo">
               <span v-for="(desc, key) in championDetail.info ">{{key | change}}:{{desc}}; </span>
            </p>
            <h3 class="passive" v-html="championDetail.passive.name">{{championDetail.passive.name}}</h3>
            <p class="passiveinfo">
              {{championDetail.passive.description}}
            </p>
        </div>
        
      </div> 
      <div class="skillwrapper">
        <ul class="skill">
          <li v-for="skill in championDetail.spells" class="skilllist">
            <img :src="'http://ddragon.leagueoflegends.com/cdn/6.21.1/img/spell/'+skill.id+'.png'" alt="无法显示" class="image left">
             <div class="skillcontent">
                <h4 class="skillname">{{skill.name}}</h4>
                <p class="skilldesc" v-html="skill.tooltip">{{skill.tooltip}}</p>
             </div>
          </li>
        </ul>
      </div>	 
  </div>

</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
  export default {
    data(){
      return {
       
        id:''
      }
    },
  	props:{
  		
  	},
    filters:{
      change(key){
        let str = {attack:'攻击', defense: '防御', difficulty: '难度', magic: '魔法系数'}
        
        return str[key]
      }
    },
  	computed: {
  		 championDetail(){  return this.$store.state.championDetail}
  		
  	},
  	methods:{
  		 showdetail(){
          let cid = this.$route.params.id
          
          this.$store.dispatch('GET_CHAMPION_DETAIL',{id:cid})
       }
  		
  	},
  	created(){

  	   this.showdetail()
  	}

  }

</script>

<style lang="less">
  .deatil{

    width: 100%;
    height: 100%;
    padding: 10px 0 10px 10px;
    background-color: #ead994;
    border: #d0ad5b solid 1px;
    .info{
      display: flex;
      .images{
        width: 100px;
        height: 100px;
      }
      .icon{
        flex: 1;
      }
      .dec{
        margin-left: 10px;
        flex: 3;
        .title, .passive{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #750d09; 
          font-size: 20px;
        }
        .passive{
          width: 250px;
        }
        .descinfo{
          font-size: 15px;
        }
        .passiveinfo{
          width: 200px;
          white-space: normal;
          text-overflow: ellipsis;
          line-height: 12px;
          padding: 5px;
          overflow: hidden;
          font-size: 10px;
          height: 52px;
          text-indent: 20px;
        }
      }
    }
    .skillwrapper{
      width: 100%;
      .skill{
        width: 100%;
        .skilllist{
          height: 100%;
          margin-bottom: 20px;
          border-bottom: #d0ad5b solid 1px;
          .image{
            float: left;
            margin-right: 10px;
          }
          .skillcontent{
            display: inline-block;
              .skillname{
              font-size: 12px;
            }
            .skilldesc{
              width: 9rem;
              font-size: 12px;
            }
          }
        }
      }

    }
  }
</style>
