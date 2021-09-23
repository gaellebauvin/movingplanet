let firstLevel = document.getElementById('first-level');
let greatFinalNotes = {
    'note1': 'C4',
    'note2': 'G4',
    'note3': 'A4',
    'note4': 'G2',
    'note5': 'G2',
    'note6': 'B4',
    'note7': 'C4',
    'note8': 'C3',
}

let finalNotes = {
    'note1': 'A1',
    'note2': 'A1',
    'note3': 'A1',
    'note4': 'A1',
    'note5': 'A1',
    'note6': 'A1',
    'note7': 'A1',
    'note8': 'A1',
}
console.log(finalNotes)

function foundNote(numberNote, note, offset) {
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

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();

    synth.triggerAttackRelease(finalNote, "4n", now);
    finalNotes[numberNote] = note
    console.log('insert : ' + finalNotes + 'number : ' + numberNote + '&' + note)

}

function resultNotes(finalNotes, greatFinalNotes) {
    console.log(finalNotes, greatFinalNotes)

    if (JSON.stringify(finalNotes) === JSON.stringify(greatFinalNotes)) {
        alert("bravoooooo!")
        console.log(finalNotes, greatFinalNotes)
    } else {
        alert('bruh')
        console.log(finalNotes, greatFinalNotes)
    }

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

        $('#play-btn').on('click', async function () {
            resultNotes(finalNotes, greatFinalNotes)
        });
    });
}

$('.planet').on('mouseup', function () {
    $(this).css('width', 'auto');

    if ($(this).css('inset') >= "0px 0px 0px 0px" && $(this).css('inset') <= "50px 50px 50px 50px") {
        //la planete est bien placée
        $(this).draggable( "disable" );

        if( $(this).hasClass('planet-2')){
            $(this).children().attr('src', 'assets/images/planets/planet-good-2.svg');
        } else if($(this).hasClass('planet-3')) {
            $(this).children().attr('src', 'assets/images/planets/planet-good-3.svg');
        } else if($(this).hasClass('planet-4')) {
            $(this).children().attr('src', 'assets/images/planets/planet-good-4.svg');
        }else if($(this).hasClass('planet-5')){
            $(this).children().attr('src', 'assets/images/planets/planet-good-5.svg');
        } else if($(this).hasClass('planet-6')){
            $(this).children().attr('src', 'assets/images/planets/planet-good-6.svg');
        } else if($(this).hasClass('planet-7')){
            $(this).children().attr('src', 'assets/images/planets/planet-good-7.svg');
        } else if($(this).hasClass('planet-8')){
            $(this).children().attr('src', 'assets/images/planets/planet-good-8.svg');
        } else if($(this).hasClass('planet-9')){
            $(this).children().attr('src', 'assets/images/planets/planet-good-9.svg');
        }
    }
})

$(document).ready(function () {
    var planets = $('.planet');
    $.each(planets, function (index, div) {
        var randomX = Math.floor((Math.random() * 125));
        var randomY = Math.floor((Math.random() * 125));

        $(this).css({"inset": randomX + "px auto auto " + randomY + "px"});
    })

    $('.planet').on('mouseup', function () {
        var arrayTop = $(this).css('top').split("p");
        var top = arrayTop[0];
        var arrayLeft = $(this).css('left').split("p");
        var left = arrayLeft[0];
        if (-50 <= top && top <= 50 && -50 <= left && left <= 50) {
            //la planete est bien placée
            console.log("bien placé");
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();
            synth.triggerAttackRelease($(this).data('great-note'), "4n", now);
        } else {
            // Tant qu'on a pas trouvé dans quel interval se trouve la planète on continue,
            // quand on a trouvé on lui donne un chiffre ( variable entier)
            var i = false;
            var entier = 1;
            var difference = 51;

            while (i !== true) {
                if (-difference <= top && top <= difference && -difference <= left && left <= difference) {
                    console.log("pas bien place", entier)
                    console.log('errror found : ' + $(this).data('great-note'), entier)
                    foundNote($(this).data('note-number'), $(this).data('great-note'), entier)
                    i = true;
                } else {
                    entier = entier + 1;
                    difference = difference + 100;
                }
            }
        }
    })
});

$('.planet').draggable({
    containment: "document",
    scroll: false,
});
