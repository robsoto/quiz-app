Responses = new Meteor.Collection('responses')

function getCurrentUser () 
  {
    return Meteor.user().emails[0].address.split('@')[0]
  }

function insertResponse()
  {
    var currentUser =  getCurrentUser()
    var currentResponseObject = $('#userResponseTextArea')
    var currentResponse = currentResponseObject.val()
    if(currentResponse != "") {
    
        Responses.insert({response: currentResponse, username: currentUser, timestamp: (new Date()).getTime()})
    $('#userResponseTextArea').val("")
    }
  }

    Template.studentView.events({
        'click #sendResponse': function() {
            insertResponse()
        },
        
        'keydown #userResponseTextArea': function(keypressed) {
        if(keypressed.which == 13){
            event.preventDefault()
            insertResponse()
            }
        }  
    })
