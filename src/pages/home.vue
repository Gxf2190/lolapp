<<template>
  
  <div class="ss">
    <header-top></header-top>
  	<div class="home">
      <h2 class="weekfree">周免英雄</h2>
      <ul class="freelist">
        <li v-for="heroinfo in championFree[0]">{{heroinfo.name}}
         <router-link :to="{name: 'id', params:{id: heroinfo.key}}">
           <img  class="images" :src="'http://cdn.tgp.qq.com/pallas/images/champions_id/'+ heroinfo.key + '.png'" >
         </router-link>
        </li>
      </ul>
      <ul class="lastvideo">
        <li v-for="video in getNewstVideos" class="content">
          <div class="images">
            <span class="play-wrapper icon-play2"><a :href="video.content | http " class="href"></a></span>
            <img :src="video.img" alt="无法显示" class="img">
            <div class="title-wrapper">
              <h3 class="title">{{video.title}}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
     
    <footers></footers>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import foot from '../components/footer.vue'
import header from '../components/header.vue'

export default {
 
  data () {
    return {
      hreoId: [],
      championId: 0

    }
  },
  filters:{
    http(str){
      return str.match(/[a-zA-z]+:\/\/[^\s]*0/g)
    }
  },
  components:{
    footers: foot,
    headerTop: header,
    
  },
  computed: {
      championDeatil() {return this.$store.state.championDeatil},
      championList() {return this.$store.state.championList},
      championFree(){ return this.$store.state.championFree},
      getNewstVideos(){return this.$store.state.getNewstVideos.splice(10)}
    
   
    
    },
  methods:{
  	 ...mapActions({
  	   	 	getList: 'GET_CHAMPION_LIST',
  	   	 	getFree: 'GET_CHAMPION_FREE',
          getVideo: 'GET_NEWST_VIDEOS'
  	   	 }),
       
  },
  created(){
  	/*this.getList()*/
  	this.getFree(),
    this.getVideo()
  }
}
</script>


<style lang="less">
  .home{
    position: relative;
    margin-top: 40px;
    .weekfree{
      font-size: 17px;
      text-align: center;
      font-weight: 200;
      opacity: 0.5;
    
      
    }
    .freelist{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        flex: 0 0 3.2rem;
        height: 100%;
        background-color:#000;
        color: #fff;
        text-align: center;
        font-size: 12px;
        .images{
          width: 3.2rem;
          height: 3rem;
        }
      }
    }
    .lastvideo{
      width: 100%;
      height: 100%;
      
      display: flex;
      flex-wrap: wrap;
      .content{
        flex: 0 0 8rem;
        position: relative;
        .images{
          width: 100%;
          height: 100%;
          .play-wrapper{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            text-align: center;
            background-color: rgba(0,0,0,0.2);
            &:before{
              color: #fff;
              display: block;
              position: absolute;
              top: 25%;
              left: 40%;
              }
            .href{
              position: absolute;
              display: inline-block;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;

            }
            

          }
          .img{
            width: 8rem;
            display: block;

            height: 4.1rem;
          }
          .title-wrapper{
            width: 100%;
            height: 40px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.6);
            z-index: 100;
            text-align: center;
            padding: 0 5px;
             .title{
              display: inline-block; 
              width: 100%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 12px;
              line-height: 40px;
              color: #fff;
          }
          }
         
        }
      }
    }
  }

</style>
