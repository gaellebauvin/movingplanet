let firstLevel = document.getElementById('first-level');
let notesLevel1 = {
    'note1': ['C4', 0],
    'note2': ['G4', 0.5],
    'note3': ['A4', 1],
    'note4': ['G2', 2],
    'note5': ['G2', 3],
    'note6': ['B4', 4],
    'note7': ['C4', 5],
    'note8': ['C3', 5.5],
}

let resultNotes = {
    'note1': ['A1', 0],
    'note2': ['A1', 0.5],
    'note3': ['A1', 1],
    'note4': ['A1', 2],
    'note5': ['A1', 3],
    'note6': ['A1', 4],
    'note7': ['A1', 5],
    'note8': ['A1', 5.5],
}

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
}

function resultNotesLevel(resultNotes, notesLevel1) {
    if (JSON.stringify(resultNotes) === JSON.stringify(notesLevel1)) {
        playSynth(resultNotes)
        levelUp();
    } else {
        //TODO: Add wrong final notes
    }
}

function levelUp() {
    if ($('#first-level').addClass('level-up')) {
        $('.header h1').html('Bravo !');
        $('.buttons').html('<a href="" class="btn-next-level">Niveau suivant</a>');
    }
}

async function playSynth(notes) {
    await Tone.start()

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();

    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }


    let delay = 0;
    for (let z = 2; z<=10; z++){
        $('.planet-'+z).addClass('planet-move').css('animation-delay', delay+'s');

        if( z >= 4){
            delay = delay + 1;
        } else {
            delay = delay + 0.5;
        }

        $('.planet-'+z).on('animationend', function (){
            $('.planet-'+z).removeClass('planet-move');
        })
    }

    for (let note in notes) {
        synth.triggerAttackRelease(notes[note][0], "4n", now + notes[note][1]);
    }
}

//First Level Page
if (firstLevel) {
    $(document).ready(function () {
        //OnClick undo button
        $('#undo-btn').on('click', async function () {
            playSynth(notesLevel1)
        });

        $('#play-btn').on('click', async function () {
            resultNotesLevel(resultNotes, notesLevel1)
        });
    });
}

$(document).ready(function () {
    var planets = $('.planet');
    $.each(planets, function (index, div) {
        var randomX = Math.floor((Math.random() * 125));
        var randomY = Math.floor((Math.random() * 125));

        $(this).css({"inset": randomX + "px auto auto " + randomY + "px"});
    })

    $('.planet').on('mouseup', function () {
        $(this).css('width', 'auto');

        var arrayTop = $(this).css('top').split("p");
        var top = arrayTop[0];
        var arrayLeft = $(this).css('left').split("p");
        var left = arrayLeft[0];
        if (-50 <= top && top <= 50 && -50 <= left && left <= 50) {
            //la planete est bien placée
            //add the right note in the table "resultNotes".
            resultNotes[$(this).data('note-number')][0] = $(this).data('great-note')

            $(this).draggable("disable");

            if ($(this).hasClass('planet-2')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-2.svg');
            } else if ($(this).hasClass('planet-3')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-3.svg');
            } else if ($(this).hasClass('planet-4')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-4.svg');
            } else if ($(this).hasClass('planet-5')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-5.svg');
            } else if ($(this).hasClass('planet-6')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-6.svg');
            } else if ($(this).hasClass('planet-7')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-7.svg');
            } else if ($(this).hasClass('planet-8')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-8.svg');
            } else if ($(this).hasClass('planet-9')) {
                $(this).children().attr('src', 'assets/images/planets/planet-good-9.svg');
            }

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
