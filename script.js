const app = {
    data() {
        return {
            name: 'Mario',
            results: false
        }
    },
    methods: {
        async search() {
            const result = await axios.get(`https://swapi.dev/api/people/?search=${this.name}&format=json`)
            this.results = result.data
        }
    },
    async mounted() {
        await this.search();
    }
}

Vue.createApp(app).mount('.foo')