// JavaScript for the countdown timer
    // Set the date for the countdown (change this to your desired date)
    const countdownDate = new Date('December 31, 2023 23:59:59').getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Countdown is over!';
      }
    }, 1000);