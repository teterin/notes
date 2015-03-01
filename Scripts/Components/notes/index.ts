import NotesParameters = require("./NotesParameters");
require("../note-item/index")
require("../note-add/index")

class Notes {
    notesParameters: NotesParameters
    constructor(params: { notesParameters: NotesParameters }) {
        this.notesParameters = params.notesParameters;
    }
    get notes() {
        return this.notesParameters.notes();
    }
}

ko.components.register('notes', {
    viewModel: Notes,
    template: require("html!./view.html")
});