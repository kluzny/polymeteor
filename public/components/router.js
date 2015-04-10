var router = Router({
  autoHash: true,
  '/user': {
    '/:id': {
      on: function(id){
        console.log(id);
      }
    }
  },
  notFound: function(){
    console.log('not Found');
  }
});
