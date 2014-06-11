Display = Meteor.collection('responses')

Template.teacherView.lines = function() {
    return Responses.find({}, {sort:{timestamp:1}} ).fetch()   
}

function displayResponse(){
    
}

Template.studentView.events({
        'click .select': function() {
            insertResponse();
        }