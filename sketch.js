let mic,
  smoothedVol = 0,
  smoothingFactor = 0.25;

// for tweaking the curve offsets
const yAdj = [1.4, 1.1, 1.05];

function setup() {
  const cnv = createCanvas(1090, 1000);
  cnv.parent('p5-wrapper');

  mic = new p5.AudioIn();
  mic.start();
  noStroke();
}

function draw() {
  background('#dcebfd');

  let rawVol = Math.round(mic.getLevel() * 50) / 50;
  let clampedVol = rawVol > 0.025 ? rawVol : 0;
  smoothedVol = lerp(smoothedVol, clampedVol, smoothingFactor);

  let baseRamp = map(smoothedVol, 0, 0.2, 0, 200);

  for (let i = 0; i < 5; i++) {
    let xOffset = i * 200 + i * 20 + 5;
    let rampLeft = ((baseRamp * (i + 1)) / 3) * 0.9;
    let rampRight = ((baseRamp * (i + 1)) / 3) * (yAdj[i] || 1);
    drawM(xOffset, 850, rampLeft, rampRight);
  }
}

function drawM(xOffset, yOffset, rampLeft, rampRight) {
  fill('#002253');

  beginShape();

  // top right
  vertex(xOffset + 155.981, yOffset + 0.913003 - rampRight);
  bezierVertex(
    xOffset + 131.758,
    yOffset + 0.913003 - rampRight,
    xOffset + 112.055,
    yOffset + 19.985 - rampRight,
    xOffset + 112.055,
    yOffset + 43.431 - rampRight
  );
  vertex(xOffset + 112.055, yOffset + 97.401);

  bezierVertex(
    xOffset + 112.055,
    yOffset + 103.714,
    xOffset + 106.762,
    yOffset + 108.838,
    xOffset + 100.24,
    yOffset + 108.838
  );
  bezierVertex(
    xOffset + 93.717,
    yOffset + 108.838,
    xOffset + 88.424,
    yOffset + 103.714,
    xOffset + 88.424,
    yOffset + 97.401
  );

  // top left
  vertex(xOffset + 88.424, yOffset + 43.505 - rampLeft);
  bezierVertex(
    xOffset + 88.439,
    yOffset + 20.073 - rampLeft,
    xOffset + 68.736,
    yOffset + 1 - rampLeft,
    xOffset + 44.513,
    yOffset + 1 - rampLeft
  );
  bezierVertex(
    xOffset + 20.29,
    yOffset + 1 - rampLeft,
    xOffset + 0.587006,
    yOffset + 20.072 - rampLeft,
    xOffset + 0.587006,
    yOffset + 43.518 - rampLeft
  );

  vertex(xOffset + 0.587006, yOffset + 136.79);
  vertex(xOffset + 32.698, yOffset + 136.79);

  // bottom left
  vertex(xOffset + 32.698, yOffset + 43.505 - rampLeft);
  bezierVertex(
    xOffset + 32.698,
    yOffset + 37.191 - rampLeft,
    xOffset + 37.991,
    yOffset + 32.067 - rampLeft,
    xOffset + 44.513,
    yOffset + 32.067 - rampLeft
  );
  bezierVertex(
    xOffset + 51.035,
    yOffset + 32.067 - rampLeft,
    xOffset + 56.329,
    yOffset + 37.191 - rampLeft,
    xOffset + 56.329,
    yOffset + 43.505 - rampLeft
  );

  vertex(xOffset + 56.329, yOffset + 97.4);
  bezierVertex(
    xOffset + 56.329,
    yOffset + 120.846,
    xOffset + 76.032,
    yOffset + 139.918,
    xOffset + 100.255,
    yOffset + 139.918
  );
  bezierVertex(
    xOffset + 124.478,
    yOffset + 139.918,
    xOffset + 144.18,
    yOffset + 120.846,
    xOffset + 144.18,
    yOffset + 97.4
  );

  // bottom right
  vertex(xOffset + 144.18, yOffset + 43.43 - rampRight);
  bezierVertex(
    xOffset + 144.18,
    yOffset + 37.117 - rampRight,
    xOffset + 149.474,
    yOffset + 31.993 - rampRight,
    xOffset + 155.996,
    yOffset + 31.993 - rampRight
  );
  bezierVertex(
    xOffset + 162.518,
    yOffset + 31.993 - rampRight,
    xOffset + 167.812,
    yOffset + 37.117 - rampRight,
    xOffset + 167.812,
    yOffset + 43.43 - rampRight
  );

  vertex(xOffset + 167.812, yOffset + 136.79);
  vertex(xOffset + 199.922, yOffset + 136.79);
  vertex(xOffset + 199.922, yOffset + 43.43 - rampRight);
  bezierVertex(
    xOffset + 199.922,
    yOffset + 19.984 - rampRight,
    xOffset + 180.219,
    yOffset + 0.912003 - rampRight,
    xOffset + 155.996,
    yOffset + 0.912003 - rampRight
  );
  vertex(xOffset + 155.981, yOffset + 0.913003 - rampRight);

  endShape(CLOSE);
}

// start audio capture
function mousePressed() {
  userStartAudio();
}
