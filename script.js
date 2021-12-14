const app = {
    data() {
        return {
            name: '',
            results: false
        }
    },
    methods: {
        async search() {
            //
            console.log(this.name)
            const result = await axios.get(''+this.name)
            this.results = result.data
        }
    },
}

Vue.createApp(app).mount('.foo')