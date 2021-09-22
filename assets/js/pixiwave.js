const app = new PIXI.Application({
    width: 1200, height: 800, resolution: window.devicePixelRatio || 1,
transparent: true });
document.body.appendChild(app.view);

let count = 0;

// build a rope!
const ropeLength = 918 / 20;

const points = [];

for (let i = 0; i < 20; i++) {
    points.push(new PIXI.Point(i * ropeLength, 0));
}

const strip = new PIXI.SimpleRope(PIXI.Texture.from('assets/images/lines-2.svg'), points);

strip.x = -459;

const waveContainer = new PIXI.Container();
waveContainer.x = 370;
waveContainer.y = 300;

waveContainer.scale.set(1750 / 1950);
app.stage.addChild(waveContainer);

waveContainer.addChild(strip);

app.ticker.add(() => {
    count += 0.1;

    // make the waves
    for (let i = 0; i < points.length; i++) {
        points[i].y = Math.sin((i * 0.5) + count) * 30;
        points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
    }
});

