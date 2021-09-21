document.getElementById('undo-btn')?.addEventListener('click', async () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("G4", "8n", now + 0.5);
    synth.triggerAttackRelease("A4", "8n", now + 1);
    synth.triggerAttackRelease("G2", "8n", now + 2);
    synth.triggerAttackRelease("E4", "8n", now + 3);
    synth.triggerAttackRelease("B1", "8n", now + 4);
    synth.triggerAttackRelease("G2", "8n", now + 5);
    synth.triggerAttackRelease("A3", "8n", now + 5.5);
})
