<template>
    <div class="my-cart">
        <h1>{{owner.name}}s Cart</h1>
        <ul>
            <li v-for="item in items" v-bind:key="item" v-on:addItem="addToCart($event)">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : {
            owner_data : {
                type : Object,
                default : function () {
                    return {name : "nath", location : "marikina"}
                }
            },
            items_data : Array
        },
        data : function () {
            return {
                owner : this.owner_data,
                items : this.items_data
            }
        },
        methods : {
            addToCart : function(item) {
                this.items.push(item)
            }
        }
    }
</script>

<style>
    .my-cart {background: blue; color: white;}
</style>