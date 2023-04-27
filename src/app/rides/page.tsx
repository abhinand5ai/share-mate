import React from "react";

import { Button, Form } from "semantic-ui-react";
import CreateRide from "./CreateRide";
import { getRideFactoryContract } from "@/ethereum/rides";

async function getRides() {
    const rideFactoryContract = await getRideFactoryContract()
    if (!rideFactoryContract) {
        return []
    }
    const rides = await rideFactoryContract.methods.getRides().call();
    console.log(rides);
    return rides as any[];
}

export default async function RidesPage() {
    const rides = await getRides();
    console.log(rides);
    return (
        <div>
            <h1>Rides</h1>
            <p>Num Rides {rides.length}</p>
            <CreateRide />
        </div>
    );
}