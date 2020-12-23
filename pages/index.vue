<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos" :key="todo.id">
                <a href="#" @click="removeTodo(todo, index)">{{todo.todo}}</a>
                </li>
            </ul>
            
            <form @submit.prevent="submitData">
              <div class="form-group mt-5">
                <input type="text" class="form-control" placeholder="Add a Todo" v-model="todo">
                <button type="submit" class="btn btn-outline-primary mt-3">Add Todo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      todo: '',
      // todos: [
      //   "Workout",
      //   "Drink a Coke",
      //   "Protein Shake",
      //   "Learning"
      // ]
    }
  },

  computed: {
    todos(){
      return this.$store.state.todos;
    }
  },
  mounted() {
    firebase.firestore().collection('todos').get()
    .then((res) => {
      res.forEach(x => {
        console.log(x.data())
        this.$store.commit('setTodo', x.data());
      });
    });
  },
  methods: {
    submitData() {
      if (this.todo) {
        // this.todos.push(this.todo);
        // this.$store.commit('addTodo', this.todo);
        firebase.firestore().collection('todos').add({})
        .then((res) => {
          firebase.firestore().collection('todos').doc(res.id).set({
            todo: this.todo,
            id: res.id
          }).then(() => {
            this.$store.commit('addTodo', ({todo: this.todo, id: res.id}));
            this.todo = '';
          })
        })
      }
    },

    removeTodo(todo, index) {
      // this.todos.splice(index, 1);
      // this.$delete(this.todos, index);
      // this.$store.commit('removeTodo', index);

      firebase.firestore().collection('todos').doc(todo.id).delete()
      .then(() => {
        this.$store.commit('removeTodo', index);
      })
    }
  }
}
</script>
