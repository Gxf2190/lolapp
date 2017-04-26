<template>
	<div class="foot">
		<div class="content">
			<div class="a"><router-link to="/home">主页</router-link></div>
			<div class="b"><router-link to="/player">玩家</router-link></div>
			<div class="c"><router-link to="/rank">rank</router-link></div>
		</div>
	</div>
</template>

<script>

  export default {}

</script>

<style lang="less">
	.foot{
		position: fixed;
		z-index: 120;
		bottom: 0;
		left: 0;
		.content{
			display: flex;
			width: 16.0rem;
			height: 40px;
			background-color:  rgba(0,0,0,1);
			.a, .b, .c{
				a{
					color: #fff;
				}
				flex: 1;
				text-align: center;
				font-size: 20px;
				line-height: 45px;
			}
		}
	}
</style>