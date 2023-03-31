import Pocketbase, { Collection } from "pocketbase";


const pb = new Pocketbase("http://127.0.0.1:8090");



const notesCollection = pb.collection("notes");

interface Note {
    id: string;
    title: string;
    content: string;
}

async function getNotes() {
    const notes = await notesCollection.getList<Note>();
    return notes;
}


export { getNotes };
export type { Note };