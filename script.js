const app = {
    data() {
        return {
            name: 'Luke',
            results: false
        }
    },
    methods: {
        async search() {
            //
            console.log(this.name)
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/'+this.name)
            this.results = result.data
        }
    },
}

Vue.createApp(app).mount('.foo')