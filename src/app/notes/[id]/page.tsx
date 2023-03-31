async function getNote(noteId: String) {
    const response = await fetch(`/api/notes/${noteId}`);
    const note = await response.json();
    return note;

}

export default function NotePage() {
    // const note = await getNote();
    return (
        // <div>
        //     <h1>{note.title}</h1>
        //     <p>{note.body}</p>
        // </div>
    );
}