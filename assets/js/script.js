let firstLevel = document.getElementById('first-level');

function foundNote(note, offset) {
    let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let noteLetter = note.substr(0, 1);
    let noteNumber = note.substr(1, 2);
    let indexNoteLetter = notes.indexOf(noteLetter);

    let newIndexNoteLetter = indexNoteLetter + offset;
    let divisionNoteLetter = Math.floor(newIndexNoteLetter / 7)
    let remainderNoteLetter = newIndexNoteLetter % 7;
    let i = 0;
    let finalNoteLetter;
    for (const note of notes) {
        i++
        if (i === remainderNoteLetter) {
            finalNoteLetter = note
        }
    }
    let finalNote = finalNoteLetter + (parseInt(noteNumber) + parseInt(divisionNoteLetter))
}

//First Level Page
if (firstLevel) {
    $(document).ready(function () {
        //OnClick undo button
        $('#undo-btn').on('click', async function () {
            await Tone.start()

            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();

            if (Tone.context.state !== 'running') {
                Tone.context.resume();
            }

            synth.triggerAttackRelease("C4", "4n", now);
            synth.triggerAttackRelease("G4", "4n", now + 0.5);
            synth.triggerAttackRelease("A4", "4n", now + 1);
            synth.triggerAttackRelease("G2", "4n", now + 2);
            synth.triggerAttackRelease("G2", "4n", now + 3);
            synth.triggerAttackRelease("B4", "4n", now + 4);
            synth.triggerAttackRelease("C4", "4n", now + 5);
            synth.triggerAttackRelease("C3", "4n", now + 5.5);
        });
    });
}

$('.planet').on('mouseup', function () {
    if ($(this).css('inset') >= "0px 0px 0px 0px" && $(this).css('inset') <= "50px 50px 50px 50px") {
        //la planete est bien placée
    }
})
$(document).ready(function () {
    var planets = $('.planet');
    $.each(planets, function (index, div) {
        var randomX = Math.floor((Math.random() * 125));
        var randomY = Math.floor((Math.random() * 125));

        $(this).css({"inset": randomX + "px auto auto " + randomY + "px"});
    })
});

$('.planet').draggable();
