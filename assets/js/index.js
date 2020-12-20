
$("#add_student").submit(function(event) {
    console.log("created new student")
})

$("#update_student").submit(function(event) {
    console.log("starting to edit student")

    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n){
        data[n['name']] = n['value']
    })

    console.log(unindexed_array)
    console.log(data)

    var request = {
        "url" : `http://localhost:3000/api/students/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        console.log("edited student")
    })

    window.location = "/";
})

if(window.location.pathname == "/") {
    $ondelete =  $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id =$(this).attr("data-id")
       
        var request = {
            "url" : `http://localhost:3000/api/students/${id}`,
            "method" : "DELETE"
        }

        // if(confirm("You sure you wanna do this, dumbfuck?")) {
            $.ajax(request).done(function(response){
                console.log("student dead");
                location.reload();
            })
        // }
    })
}

$("#update_teacher").submit(function(event) {
    console.log("starting to edit teacher")

    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n){
        data[n['name']] = n['value']
    })

    console.log(unindexed_array)
    console.log(data)

    var request = {
        "url" : `http://localhost:3000/api/teachers/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        console.log("edited teacher")
    })

    window.location = "/teachers";
})

console.log(window.location.pathname)

if(window.location.pathname == "/teachers") {
    $ondelete =  $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id =$(this).attr("data-id")
       
        var request = {
            "url" : `http://localhost:3000/api/teachers/${id}`,
            "method" : "DELETE"
        }

        // if(confirm("You sure you wanna do this, dumbfuck?")) {
            $.ajax(request).done(function(response){
                console.log("teacher dead");
                location.reload();
            })
        // }
    })
}
