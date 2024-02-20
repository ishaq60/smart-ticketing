document.getElementById("scrollButton").addEventListener("click", function () {
  var targetSection = document.getElementById("ticket-section");

  targetSection.scrollIntoView({ behavior: "smooth" });
});

var selectedSeats = 0;
var totalSeats = 40;

function highlightTopSeats(seatId) {
  var button = document.getElementById(seatId);
  if (button) {
    // Check if the person has already selected 4 seats
    if (selectedSeats < 4) {
      button.style.backgroundColor = "green";

      selectedSeats++;

      totalSeats--;

      document.getElementById("totalSeats").textContent = totalSeats;
    } else {
      alert("You can only select up to 4 seats.");
    }
  }
}
