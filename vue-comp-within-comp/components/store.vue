<template>
  <div class="store-cont">
    <h1>{{sname}}</h1>
    <ul>
        <li v-for="(prod, index) in prods" v-bind:key="prod">{{prod.name}}<button @click="addItem(index)">+</button></li>
    </ul>
</div>
</template>

<script>
export default {
    props : {
        prods_data : {
            type : Array,
            default : function() {
                return [{name : "item1"}, {name : "item2"}, {name: "item3"}]
            }
        },
        storename_data : {
            type : String,
            default : "New Store"
        }
    },
    data : function() {
        return {
            prods : this.prods_data,
            sname : this.storename_data
        }
    },
    methods : {
        addItem : function (i) {
            this.$emit('addItem', this.prods[i])
        }
    }
}
</script>

<style>
    .store-cont {
        background: orange; color: white;
    }
</style>