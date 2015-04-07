TrelloClone.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.boards = options.boards;
    this.$rootEl = options["$rootEl"];
  },

  routes: {
    "" : "boardIndex",
    "boards/:id" : "boardShow"
  },

  boardIndex: function () {
    this.boards.fetch();
    var indexView = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this._swapView(indexView);

    // var newView = new TrelloClone.Views.BoardNew();
    // this.$rootEl.append(newView.render().$el);
  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);
    board.fetch();
    var showView = new TrelloClone.Views.BoardShow({ model: board });
    this.$rootEl.html(showView.render().$el);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
