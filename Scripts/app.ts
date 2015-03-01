import NotesParameters = require("./Components/notes/NotesParameters");
import NoteData = require("./Components/notes/NoteData");

require("../style.less")
require("./Components/notes/index")

var lsKey = "notes";

var notesParameters = new NotesParameters();
var data = localStorage.getItem(lsKey);
if (data) {
    notesParameters.notes(JSON.parse(data));
}
notesParameters.notes.subscribe((value: NoteData[]) => {
    localStorage.setItem(lsKey, JSON.stringify(value));
});
refresh();
ko.applyBindings({ notesParameters: notesParameters });

function refresh() { 
    notesParameters.now(Date.now());
    setTimeout(refresh, 1000);
}
