const density = "Ñ@#W$9876543210?!abc;:+=-,._       ";
// const density =' .:-i|=+%0#@';
let video;
let asciiDiv;
let cnt = 0;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv('ascii-block');
  asciiDiv.position(250, 50)
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (var j= 0; j < video.height; j++) {
    for (var i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];

        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, len, 0));
        asciiImage += density.charAt(charIndex);;
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}
