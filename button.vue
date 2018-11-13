<template>
    <button class="g-button" :class="{[`icon-${ iconPosition }`]:true} ">
        <g-icon class="icon" v-if="icon" :icon="icon"></g-icon>
        <span class="content">
            <slot></slot>
        </span>
        <g-icon icon="loading" class="loading">
            loading
        </g-icon>
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
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button {
        vertical-align: middle;
        display: inline-flex; justify-content: center; align-items: center; font-size: var(--font-size);
        height: var(--button-height); padding: 0 1em;  border-radius: var(--border-radius);
        border: 1px solid var(--border-color);  background: var(--button-bg);
        &:hover {border-color: var(--border-color-hover); }
        &:active {background-color: var(--button-active-bg); }
        &:focus {outline: none; }
        .icon { order: 1; margin-right: .2em; margin-left: 0;}
        .content { order: 2; }
        &.icon-right {  .icon { order: 2; margin-left: .2em;  margin-right: 0;}   .content {  order: 1   }  }
        .loading{
            animation: spin 2s infinite linear;
        }
    }

</style>
