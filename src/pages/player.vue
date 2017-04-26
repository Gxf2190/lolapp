<template>
	<div class="o">
		<head-top></head-top>
			<div class="serach">
				<div class="serachwrapper">
					<input type="text" required="true" placeholder="搜索召唤师" v-model="name"  checked maxlength="20" minlength="2" class="username">
					<button class="btn" @click="showname">搜索</button>
				</div>

        <div class="userinfo" v-show="playerSearch.length">
           <div class="areatitle">
             <span class="title">
               用户名
             </span>
             <span class="daqu">
               大区
             </span>
             <span class="level">
               级别
             </span>
           </div>
           <div class="usernamewrapper">
              <ul>
                <li class="userlist" v-for="user in playerSearch">
                <router-link :to="{name: 'userid', params:{qquin: user.qquin, vaid: user.area_id } }" class="username">
                   <span class="username">{{user.name}}</span>
                </router-link>
                 
                <span class="area">{{user.area_id | getAreaName }}</span>
                <span class="levels">{{user.level}}</span></p>
                </li>
            </ul>
           </div>
          
        </div>
    
			</div>
     
		<footers></footers>
	</div>
</template>

<script>
import foot from '../components/footer.vue'
import header from '../components/header.vue'
import { mapActions } from 'vuex'
import {getAreaName} from '../config/data'
  export default {
  	data(){
  		return {
  			name: '',
        username: ''
      
  		}
  	},
	 components:{
    	footers: foot,
    	headTop: header
  	},
    computed:{
      playerSearch(){ return this.$store.state.playerSearch},
      
      
    },
   filters:{
     getAreaName
   },
  	methods:{
      ...mapActions({
        getArea: 'GET_AREA'
      }),
  		showname(){
  			if(this.name)
  			{
            
           
             this.name = this.name.trim()
             this.$store.dispatch('GET_PALYER_SEARCH', {id: encodeURI(encodeURI(this.name))})
              this.username = this.name

  			     
  			}
  		}
  	},
    created(){
     
    }
  }

</script>

<style lang="less">
 .serach{
  position: relative;
 	top: 40px;
 	height: 40px;
 	width: 100%;
 	.serachwrapper{
 		display: flex;
 		.username{
 			flex: 5;
 		height: 40px;
 		
 		text-indent: 5px;	
 		font-size: 20px;
 	  }
  
   	.btn{
   		flex: 1;
   		border-radius: 2px;
   		font-size: 20px;
   		cursor: pointer;
   		height: 40px;
   	}
 	}
  .userinfo{
      font-size: 0;
      .areatitle{
        margin-top: 5px;
        width: 100%;
        height: 20px;
        font-size: 0;
        display: flex;
        .title, .daqu, .level{
          flex: 1;
          font-size: 20px;
          line-height: 20px;
          text-align: center;
        }
      }
      .usernamewrapper{
         .userlist{
          margin-top: 10px;
          font-size: 20px;
          display: flex;
          .username, .area, .levels{
            flex: 1;
            text-align: center;
          }
          .username{
            color: #408bcb;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
      }
      }
     
     
  }
 }
</style>