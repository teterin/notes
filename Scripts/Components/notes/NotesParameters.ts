import NoteData = require("./NoteData");

class NotesParameters {
    notes: KnockoutObservableArray<NoteData> = ko.observableArray([]);
    now:KnockoutObservable<number> = ko.observable(Date.now());
}
export =NotesParameters;