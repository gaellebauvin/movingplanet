document.addEventListener("DOMContentLoaded", function () {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()

    //PLay note with Synth
    function playSynth(note, duration, time) {
        synth.triggerAttackRelease(note, duration, time)
    }

    //OnClick undo button
    document.getElementById('undo-btn')?.addEventListener('click', async () => {
        playSynth("C4", "4n", now);
        playSynth("G4", "4n", now + 0.5);
        playSynth("A4", "4n", now + 1);
        playSynth("G2", "4n", now + 2);
        playSynth("G2", "4n", now + 3);
        playSynth("B4", "4n", now + 4);
        playSynth("C4", "4n", now + 5);
        playSynth("C3", "4n", now + 5.5);
    })
});
