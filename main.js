/*var myModel = {
    name: "Ashley",
    age: 24,
    message: "hello"
  };*/
  
  var myViewModel = new Vue({
    el: '#my_view',
    data: {
    name: "Ashley",
    age: 24,
    message: "hello"
    }
  });
  var myNewViewModel = new Vue({
    el: '#my_newview',
    data: {
    newname: "asfasf",
    newage: 24214,
    newmessage: "qwdwqf",
    image:"./earth.jpg",
    alttext:"its there but not showing up"
    }
  });
