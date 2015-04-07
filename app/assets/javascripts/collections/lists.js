TrelloClone.Collections.Lists = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.board = options.board;
  },

  url: function () {
    return this.board.url() + '/lists';
  },

  model: TrelloClone.Models.List,

  comparator: function (list) {
    return list.get('ord');
  }
});
