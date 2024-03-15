 // Get the elements where the counters will be displayed
 var counters = document.querySelectorAll('.counter');

 // Function to animate a counter
 function animateCounter(counterElement, target, duration) {
   var start = 0;
   var end = parseInt(target.textContent); // Parse the target value
   var range = end - start;
   var current = start;
   var increment = end > start ? 1 : -1;
   var stepTime = Math.abs(Math.floor(duration / range));

   var timer = setInterval(function() {
     counterElement.textContent = current + '+'; 

     if (current === end) {
       clearInterval(timer); // Stop the timer when the counter reaches the target
     } else {
       current += increment;
     }
   }, stepTime);
 }

 // Start the counter animations for each counter
 counters.forEach(function(counter) {
   var targetValue = parseInt(counter.textContent); // Parse the target value
   var duration = 2000; // Animation duration (in milliseconds)

   // Adjust initial values and durations as needed
   switch (counter.classList[0]) {
     case 'counter1':
       targetValue = 10;
       break;
     case 'counter2':
       targetValue = 50;
       break;
     case 'counter3':
       targetValue = 4;
       break;
   }

   animateCounter(counter, {textContent: targetValue}, duration);
 });