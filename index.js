const numberInput=document.querySelector('.number')
const rangeInput=document.querySelector('.range')
const text=document.querySelector('p')

const state = {
    value: 0
};

const proxy = new Proxy(state, {
    set(target, prop, val) {
        if (prop === 'value') {
            target[prop] = val;

            text.innerHTML=val
            rangeInput.value=val
            numberInput.value=val
        } else {
            throw new Error('Invalid Prop')
        }
    }
});

numberInput.addEventListener('input',(e)=>{
    proxy.value = e.target.value;
})

rangeInput.addEventListener('input',(e)=>{
    proxy.value = e.target.value;
})


