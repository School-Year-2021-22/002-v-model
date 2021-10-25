const app = {
    data() {
        return {
            name: 'Mario',
            results: false
        }
    },
    async mounted() {
        const result = await axios.get('https://swapi.dev/api/people/?search=Luke&format=json')
        this.results = result.data
    }
}

Vue.createApp(app).mount('.foo')