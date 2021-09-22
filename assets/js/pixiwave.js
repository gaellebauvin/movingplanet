let width = window.innerWidth;
let height = window.innerHeight;

const app = new PIXI.Application({
    width: width, height: height/2,
    transparent: true,
    resolution: window.devicePixelRatio || 1,
    autoResize:true,
    resizeTo: window,
});

app.view.style.width = width+'px';
app.view.style.height = height+'px';
app.view.originWidth = width;
app.view.originHeigh = height;

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

// Move container to the center
//waveContainer.x = app.screen.width / 2;
//waveContainer.y = app.screen.height / 2;
waveContainer.x = app.screen.width / 2;
waveContainer.y = app.screen.height / 3.5;

//Set the scale container
waveContainer.scale.set((app.screen.width +400)/ 1000);
app.stage.addChild(waveContainer);

waveContainer.addChild(strip);

app.ticker.add(() => {
    count += 0.020;
    // make the waves
    for (let i = 0; i < points.length; i++) {
        points[i].y = Math.sin((i * 0.5) + count) * 30;
        points[i].x = i * ropeLength + Math.cos((i * 0.2) + count) * 20;
    }
});

