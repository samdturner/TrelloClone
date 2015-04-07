TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST["boards/new"],

  className: "new-board",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
