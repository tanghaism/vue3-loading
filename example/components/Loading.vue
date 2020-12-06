<template>
    <div class="loading-box">
        <div class="loading-wrap">
            <div class="ball">
                <i class="bg shaozi"></i>
                <i class="bg chazi"></i>
            </div>
            <div class="shadow">
                <div></div>
            </div>
        </div>
        <p class="tips">{{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      show: true, // 是否显示loading
      title: '加载中...' // 加载提示语
    }
  }
}
</script>

<style scoped>
    .loading-box{
        border-radius: 8px;
        background-color: #ffffff;
        box-sizing: border-box;
        box-shadow: 1px 1px 10px 2px rgba(190,190,190, 0.4);
    }
    .loading-wrap{
        padding-top: 14px;
        padding-bottom: 6px;
        width: 94px;
    }
    .ball{
        position: relative;
        margin: auto;
        width: 40px;
        height: 40px;
        animation: jump 1s linear infinite;
        z-index: 10;
        background-color: #FFDA00;
        border-radius: 50%;
        backface-visibility: hidden;
    }
    .shadow{
        position: relative;
        margin-top: 4px;
        width: 100%;
        z-index: 5;
        backface-visibility: hidden;
    }
    .shadow div{
        margin: auto;
        width: 35%;
        height: 6px;
        animation: scale 1s linear infinite;
        transform-origin: top center;
        background: #e1e1e1;
        border-radius: 50%;
        backface-visibility: hidden;
    }
    .bg{
        position: absolute;
        top: 8px;
        left: 8px;
        display: block;
        width: 24px;
        height: 24px;
        background-image: url("./Easi.png");
        background-repeat: no-repeat;
        background-color: transparent;
        background-size: 68px 24px;
        z-index: 10;
        backface-visibility: hidden;
    }
    .shaozi{
        margin-top: 1px;
        margin-left: -3px;
        background-position: 0 0;
        animation: shaozi 1s linear infinite;
    }
    .chazi{
        margin-top: 1px;
        margin-left: 3px;
        background-position: -44px 0;
        animation: chazi 1s linear infinite;
    }
    .tips{
        margin-top: 2px;
        padding-bottom: 14px;
        font-size: 12px;
        line-height: 1.5;
        color: #cccccc;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    @keyframes jump {
        0%, 100% {
            transform: translate3d(0,0,0) scale(1);
            animation-timing-function: cubic-bezier(0.45,0,0.9,0.55);
        }
        50% {
            transform: translate3d(0,10px,0) scale(.8);
            animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);
        }
    }

    @keyframes scale {
        0%, 100% {
            animation-timing-function: cubic-bezier(0.45,0,0.9,0.55);
            opacity: 1;
        }
        50% {
            transform: scale(.5);
            animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);
            opacity: .4;
        }
    }

    @keyframes chazi {
        0%, 100%{
            transform:translateX(0) rotate(0);
        }
        50%{
            transform:translateX(-6px) rotate(-90deg);
        }
    }

    @keyframes shaozi {
        0%, 100%{
            transform:translateX(0) rotate(0);
        }
        50%{
            transform:translateX(6px) rotate(90deg);
        }
    }
</style>
