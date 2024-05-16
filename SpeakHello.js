// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
  var helloSpeaker = {}; // Create an object called 'helloSpeaker'
  var speakWord = "Hello"; // Move the speakWord variable inside the IIFE

  helloSpeaker.speak = function (name) {
    // Rewrite the 'speak' function and attach it to helloSpeaker object
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Expose the helloSpeaker object to the global scope
})(window);
