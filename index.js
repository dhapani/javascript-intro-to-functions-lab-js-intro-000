function shout(string) {
  return string.toUpperCase()
}
function whisper(Hello) {
  return Hello.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  } else (string.toUpperCase() === string) {
    return "YES, INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}


  
