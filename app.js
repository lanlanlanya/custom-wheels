import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
new Vue({
    el:'#app',
    data(){
        return {
            loading1:true,
            loading2:false,
            loading3:true
        }
    }
});
//单元测试
import chai from 'chai'
import spies from 'chai-spies'
const expect=chai.expect
chai.use(spies)
{
    const div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings'
        }
    });
    vm.$mount(div);
    let useElement=vm.$el.querySelector('use');
    let href=useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    vm.$el.remove();
    vm.$destroy();
 }


{
    const div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    });
    vm.$mount(div);
    let useElement=vm.$el.querySelector('use');
    let href=useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings'
        }
    });
    vm.$mount(div);
    let svg=vm.$el.querySelector('svg');
    let {order}=window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div=document.createElement('div');
    document.body.appendChild(div);
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    });
    vm.$mount(div);
    let svg=vm.$el.querySelector('svg');
    let {order}=window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
}
{
    //moc
    const Constructor=Vue.extend(Button);
    const gButton=new Constructor({
        propsData:{
            icon:'settings'
        }
    });
    gButton.$mount();
    let spy=chai.spy(()=>{});
    gButton.$on('click',spy);
    let button=gButton.$el;
    button.click();
     expect(spy).to.have.been.called();
}

