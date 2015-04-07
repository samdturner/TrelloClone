TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards', // urlRoot + '/' + this.id

  lists: function () {
    if(!this._lists){
      this._lists = new TrelloClone.Collections.Lists([], { board: this });
    }

    return this._lists;
  },

  parse: function (response) {
    debugger
    if(response.lists){
      this.lists().set(response.lists, {parse: true});
      delete response.lists;
    }

    // _.each(this.lists().models, function(list) {
    //   this.cards(list).set(list.get('cards'));
    //   list.unset('cards');
    // }.bind(this));

    return response;
  }
});
