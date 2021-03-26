var app = new Vue(
  {
    el: '#todo-list',
    data:{
      listaSpesa: ['Comprare il pane', 'Comprare la pasta', 'Comprare la frutta', 'Comprare la verdura'],
    },
    methods: {
      deleteElement: function(elementIndex) {
        this.listaSpesa.splice(elementIndex, 1);
      }
    }

});
