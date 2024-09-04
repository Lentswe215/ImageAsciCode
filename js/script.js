const density = "Ñ@#W$9876543210?!abc;:+=-,._                         ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (var i = 0; i < video.height; i++) {
    for (var j = 0; j < video.width; j++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      let value = density.charAt(charIndex);
      if (value == "") value = "&nbsp;";
      asciiImage += value;
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}
