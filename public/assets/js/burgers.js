//Front-end code for the cats


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  ///////////////////////////////////////////////////////////
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var isDevoured = true;

    var newDevouredState = {
      devoured : isDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log(`Burger with id = ${id} has been devoured.`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  /////////////////////////////////////////////////////////
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim()      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //////////////////////////////////////////////////////////
  $(".delete-cat").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    // Get the cat-to-be-deleted's ID:
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted cat = " + id);
        // Reload the page to get the updated list
        location.reload();
      }
    ).fail (function(jqxhr, textStatus, errorThrown)  {
      alert("Error: " + textStatus + " : " + errorThrown) ;
    });
  });

});
