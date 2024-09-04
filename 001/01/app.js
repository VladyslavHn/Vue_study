const App = {
    data() {
        return {
            placeholder: "Write your task",
            title: "To Do List",
            inputValue: "", 
            notes: this.loadTasks()
        }
    },
    methods: {
        addTask() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue);
                this.inputValue = "";
                this.saveTasks(); 
            }
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        removeTask(i) {
            this.notes.splice(i, 1);
            this.saveTasks(); 
        },
        saveTasks() {
            localStorage.setItem('notes', JSON.stringify(this.notes));
        },
        loadTasks() {
            const savedNotes = localStorage.getItem('notes');
            return savedNotes ? JSON.parse(savedNotes) : [];
        }
    }
}

Vue.createApp(App).mount('#app');
