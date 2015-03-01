import NotesParameters = require("../notes/NotesParameters");
require("./style.less")
class NoteAdd {

    notesParameters: NotesParameters;
    text = ko.observable("");

    constructor(params: { notesParameters: NotesParameters }) {
        this.notesParameters = params.notesParameters;
    }

    addByEnter(sender,event:KeyboardEvent) { 
        if (event.keyCode == 13) { 
            this.add();
        }
        return true;
    }

    add() {
        var text = this.text().trim();
        if (text == "") {
            return;
        }
        this.text("");
        this.notesParameters.notes.push({ key: Date.now(), text: text });
    }
}

ko.components.register('note-add', {
    viewModel: NoteAdd,
    template: require("html!./view.html")
});