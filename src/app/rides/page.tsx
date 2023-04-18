import React from "react";


async function getRideContracts() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('notes');
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default function RidesPage() {
    return (
        <div>
            <h1>Rides</h1>
        </div>
    );
}