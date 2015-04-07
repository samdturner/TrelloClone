TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render.bind(this));
    this.listenTo(this.collection, 'add', this.render.bind(this));
  },

  events: {
    'click .create-board-button' : 'createBoard',
    'click .add-board-text' : 'renderBoardForm',
    'click .close-btn' : 'closeBoardForm'
  },

  template: JST['boards/index'],

  template2: JST['boards/form'],

  tagName: 'ul',

  className: 'board-list',

  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  },

  renderBoardForm: function () {
    $('li.add-board-list').append(this.template2());
  },

  closeBoardForm: function () {
    $('.create-board-container').remove();
  },

  createBoard: function (event) {
    event.preventDefault();
    var title = $('input.title-input').val();
    var that = this;

    newBoard = new TrelloClone.Models.Board({ title: title });
    newBoard.save({}, {
      success: function () {
        that.collection.add(newBoard, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});
