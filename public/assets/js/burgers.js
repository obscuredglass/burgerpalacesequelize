$(document).ready(function() {

  // bind event listener to form submit
  $("#burger-form").on("submit", function(e) {

    e.preventDefault();

    // package up form data for req.body purposes
    const burgerData = {
      name: $("#name-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData // req.body
    })
    .then(function() {
      // reload the page
      location.reload();
    })
    .catch(err => console.log(err));

  });

  // update burger
  $(".update-burger").on("click", function(e) {
    e.preventDefault();
    // read back burger's id and eaten status
    const burgerId = $(this).attr("data-id");
    const eaten = $(this).attr("data-eaten")

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        eaten: eaten
      } // req.body
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  $(".delete-burger").on("click", function(e) {
    e.preventDefault();
    // get burger's id
    const burgerId = $(this).attr("data-id");

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "DELETE"
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

});