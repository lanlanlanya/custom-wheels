<template>
    <button class="g-button" :class="{[`icon-${ iconPosition }`]:true} ">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    export default {
        name: 'wheelButton',
        // props: ['icon', 'iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    if(value!=='left'&& value!== 'right'){
                        return false;
                    }else {
                        return true;
                    }
                }

            }
        }
    }
</script>
<style lang="scss">
    .g-button {
        vertical-align: middle;
        display: inline-flex; justify-content: center; align-items: center; font-size: var(--font-size);
        height: var(--button-height); padding: 0 1em;  border-radius: var(--border-radius);
        border: 1px solid var(--border-color);  background: var(--button-bg);
        &:hover {border-color: var(--border-color-hover); }
        &:active {background-color: var(--button-active-bg); }
        &:focus {outline: none; }
        .icon { order: 1; margin-right: .3em; margin-left: 0;}
        .content { order: 2; }
        &.icon-right {  .icon { order: 2; margin-left: .3em;  margin-right: 0;}   .content {  order: 1   }  }
    }
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        overflow: hidden;
    }
</style>
