//Survey Page Logic goes here
function validateInput(body) {
    return body && body.name && true;
}
$("#survey").submit(function(event) {
    var data = {
        name: $("#name").val(),
        age: $("#age").val(),
        rating: {
            food: $("#food").val(),
            service: $("#service").val(),
            ambience: $("#ambience").val(),
            pricing: $("#price").val()
        },
        comments: $("#comments").val()
    }
    if (!validateInput(data)) {
        alert("Check all the fields are filled!");
        return;
    }
    event.preventDefault();
    console.log(data);
    postSurvey(data, function(err, data) {
        // Handle error, return early
        if (err) {
            return;
        }

        //Build HTML from data
        var htmlString = JSON.stringify(data);
        var fData = JSON.parse(htmlString);
        // Hide the form (usually by adding a class)
        $("#resname").replaceWith( fData.name );
        $("#resage").replaceWith( fData.age );
        $("#resfood").replaceWith( fData.rating.food );
        $("#resservice").replaceWith( fData.rating.service );
        $("#resambience").replaceWith( fData.rating.ambience );
        $("#resprice").replaceWith( fData.rating.pricing );
        $("#rescomment").replaceWith( fData.comments );
        // Update success message DOM with data htmlString
        // Show success message
        $("#success").removeClass('hidden');
        $("#formStuff").addClass('hidden');


    })
});


function postSurvey(data, callback) {
    callback = callback || function() {};
    $.ajax({
        url: "/survey",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function(data, fData, status) {
            callback(null, data);
        },
        error: function(err) {
            callback(err);
        }
    });
}

//Register Logic Goes here

$("#register").submit(function(event) {
    var adminData = {
        username: $("#username").val(),
        password: $("#password").val()
    }
    console.log(adminData);
    // if (!validateInput(adminData)) {
    //     alert("Check all the fields are filled!");
    //     return;
    // }
    event.preventDefault();
    console.log(adminData);
    postUser(adminData, function(err, adminData) {
        // Handle error, return early
        if (err) {
            return;
        }
    });
});


function postUser(data, callback) {
    callback = callback || function() {};
    $.ajax({
        url: "/register",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function(data, fData, status) {
            callback(null, data);
        },
        error: function(err) {
            callback(err);
        }
    });
}