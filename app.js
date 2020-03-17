Vue.component('store', {
    template : `<div class="store-cont">
    <h1>{{sname}}</h1>
    <ul>
        <li v-for="i,index in prods">{{i.name}}<button @click="addItem(index)">+</button></li>
    </ul>
</div>`,
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
});

Vue.component('cart',{
    template : `<div class="my-cart">
        <h1>{{owner.name}}s Cart</h1>
        <ul>
            <li v-for="i in items" v-on:addItem="addToCart($event)">{{i}}</li>
        </ul>
    </div>`,
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
});

new Vue ({el: "#app"});