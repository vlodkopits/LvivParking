angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'парковка Арсен',
    place: 200,
    cost:'',
    open: '8:00 -23:00',
    lat: 49.8227768,
    lng: 23.9566649,
    address:'вул. Патона, 37',
    options:'disable, bike'

  }, {
    id: 1,
    name: 'парковка Арсен',
    place: 200,
    cost:'',
    open: '8:00 -23:00',
    lat: 49.862573,
    lng: 24.005623,
    address:'просп. В\'ячеслава Чорновола,, 93',
    options:'disable, bike'
  }];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
