import React from "react";
import { getRideContract } from "../../ethereum/rides";

async function getRides() {
    const rideContract = await getRideContract();
    console.log(rideContract);
    if (!rideContract) {
        return [];
    }
    // const rides = await rideContract.methods.getRides.call();
    return [];
}

export default async function RidesPage() {
    const rides = await getRides();
    console.log(rides);
    return (
        <div>
            <h1>Rides</h1>
            <ul>
                {rides.map((index, ride) => (
                    <li key={index}>{ride}</li>
                ))}
            </ul>
        </div>
    );
}