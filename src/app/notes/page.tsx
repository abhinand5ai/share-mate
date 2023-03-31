import Link from "next/link";
import { getNotes, Note } from "../../database/notes";
import { ListResult } from "pocketbase";


export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
            <h1>Notes</h1>
            <Notes notes={notes} />
        </div>
    );
}

function Notes({ notes }: { notes: ListResult<Note> }) {
    return (
        <ul>
            {
                notes.items.map((note) => (
                    <li key={note.id}>
                        <Link href={`/notes/${note.id}`}>
                            {note.title}
                        </Link>
                        <p>{note.content}</p>
                    </li>
                ))
            }
        </ul>
    );
}