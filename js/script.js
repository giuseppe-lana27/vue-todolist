var app = new Vue(
  {
    el: '#todo-list',
    data:{
      listaSpesa: ['Comprare il pane', 'Comprare la pasta', 'Comprare la frutta', 'Comprare la verdura'],
      newElement: '',
    },
    methods: {
      deleteElement: function(itemIndex) {
        this.listaSpesa.splice(itemIndex, 1);
      },
      addElement: function() {
        if(this.newElement !== ''){
          this.listaSpesa.push(this.newElement);
          this.newElement = '';
        }
      },
    }

});
