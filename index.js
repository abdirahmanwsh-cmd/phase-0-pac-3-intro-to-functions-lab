
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
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

// You can test your functions by calling them and logging the result to the console
// For example:
console.log(shout("hello")); // should print "HELLO"
console.log(whisper("Hello")); // should print "hello"
logShout("hello"); // should log "HELLO"
logWhisper("Hello"); // should log "hello"
console.log(sayHiToHeadphonedRoommate("hello")); // should print "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("HELLO")); // should print "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // should print "I would love to!"
