import Vue from 'vue';

export default {

    setTodo(state, payload) {
        state.todos.push(payload);
    },
    addTodo(state, payload) {
        state.todos.push(payload);
    },

    removeTodo(state, payload) {
        Vue.delete(state.todos, payload);   
    }
}