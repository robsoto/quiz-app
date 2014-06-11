Responses = new Meteor.Collection('responses')

 Meteor.startup(function () {
    // code to run on server at startup
     /*
    if (Responses.find().count() == 0)
    {
      Responses.insert({responseContent: "Your responses will appear here.", username: "Teacher", timestamp: 0})
    }
    */
  })   
