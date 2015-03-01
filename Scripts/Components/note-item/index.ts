import NotesParameters = require("../notes/NotesParameters");
require("./style.less")
class Note {

    key: number;
    notesParameters: NotesParameters;

    constructor(params: { key: number; notesParameters: NotesParameters }) {
        this.key = params.key;
        this.notesParameters = params.notesParameters;
    }

    get text() {
        return this.notesParameters.notes().filter((x) => x.key === this.key)[0].text;
    }

    remove() {
        var item = this.notesParameters.notes().filter((x) => x.key === this.key)[0];
        this.notesParameters.notes.remove(item);
    }

    get time() {       
        return moment(new Date(this.key)).from(new Date(this.notesParameters.now()));
    }

}

ko.components.register('note-item', {
    viewModel: Note,
    template: require("html!./view.html")
});