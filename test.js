function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  alert('getUserMedia() is supported in your browser');
} else {
  alert('getUserMedia() is not supported in your browser');
}
