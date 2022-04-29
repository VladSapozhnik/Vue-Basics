const App = {
    //method es5 data: function () {}
    data() {
        return {
            counter: 0,
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1']
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        AddHandler() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        // inputKeyPress(event) {
        //     // console.log(event.key)
        //     if (event.key === 'Enter') {
        //         this.AddHandler()
        //     }
        // }
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeItem(idx) {
            this.notes.splice(idx, 1)
        }
    },
    //computed всегда возвращает, что-то return
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    //называем как переменную в Watch
    // watch: {
    //     inputValue(value) {
    //         console.log(value)
    //     }
    // }
}

Vue.createApp(App).mount('#app')