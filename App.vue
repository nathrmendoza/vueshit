<template>
    <cart>
        <store :storename_data="Nike" :prods_data="[{name : 'Jordan 1'}, {name : 'Jordan 2'}, {name : 'Jordan 3'}]"></store>
    </cart>
</template>

<script>
    import Cart from './components/cart.vue';
    import Store from './components/store.vue';
export default {
    components : {
        'store':Store,
        'cart':Cart
    }
}
</script>

<style>

</style>