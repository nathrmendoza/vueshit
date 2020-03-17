const app = new Vue ({
    el : "#app",
    data : {
        products : []
    },
    created : function() {
        fetch ('https://api.myjson.com/bins/74163')
            .then(response => response.json())
            .then(json=> {
                this.products = json.products
            })
    }
});