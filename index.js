function shout(string) {
return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(inputString) {
    if (typeof inputString === 'string') {
      if (inputString.toLowerCase() === inputString) {
        return "I can't hear you!";
      } else if (inputString.toUpperCase() === inputString) {
        return `YES INDEED!`;
      }
    } else (string === "Let's have dinner together!")
    return "I would love to!"
  }
