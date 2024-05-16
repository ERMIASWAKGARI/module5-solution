// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
  var byeSpeaker = {}; // Create an object called 'byeSpeaker'
  var speakWord = "Good Bye"; // Move the speakWord variable inside the IIFE

  byeSpeaker.speak = function (name) {
    // Rewrite the 'speak' function and attach it to byeSpeaker object
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Expose the byeSpeaker object to the global scope
})(window);
