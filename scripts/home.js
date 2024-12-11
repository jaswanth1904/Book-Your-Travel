
// Swap stations when clicking on the exchange button
document.getElementById('swapButton').addEventListener('click', function() {
    var fromStation = document.querySelector('[placeholder="From Station"]').value;
    var toStation = document.querySelector('[placeholder="To Station"]').value;

    // Swap the values
    document.querySelector('[placeholder="From Station"]').value = toStation;
    document.querySelector('[placeholder="To Station"]').value = fromStation;
});

// Change date to today
document.getElementById('btn-pad').addEventListener('click', function() {
    var today = new Date().toISOString().split('T')[0]; // Get today's date
    document.getElementById('btn-date').value = today; // Set the value of the date input
});

// Change date to tomorrow
document.getElementById('btn-pad').addEventListener('click', function() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day
    document.getElementById('btn-date').value = tomorrow.toISOString().split('T')[0]; // Set the value of the date input
});


const dateInput = document.getElementById('btn-date');
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

dateInput.min = `${year}-${month}-${day}`;
dateInput.value = `${year}-${month}-${day}`;

    function refreshPage() {
      window.location.reload();
    }
   

        document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const faqAnswer = this.nextElementSibling;
            if (faqAnswer.style.display === 'block') {
                faqAnswer.style.display = 'none';
                this.textContent = this.textContent.replace('-', '+');
            } else {
                faqAnswer.style.display = 'block';
                this.textContent = this.textContent.replace('+', '-');
            }
        });
    });
});

// for bus search page
        document.querySelectorAll('.view-seats-btn').forEach(button => {
            button.addEventListener('click', () => {
            });
        });
    // for train 
    function refreshPage() {
        location.reload();
    }