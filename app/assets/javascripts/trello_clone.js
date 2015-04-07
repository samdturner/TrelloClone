window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.boards = new TrelloClone.Collections.Boards();

    var $rootEl = $('#main');
    var router = new TrelloClone.Routers.BoardRouter({
      boards: this.boards,
      $rootEl: $rootEl });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
