'use client'
import React from 'react';
import { getRideFactoryContract, getRideContract } from "@/ethereum/rides";
import { Button, Card } from "semantic-ui-react";
import Link from 'next/link';


async function getRides() {
    const rideFactoryContract = await getRideFactoryContract()
    if (!rideFactoryContract) {
        return []
    }
    const rides = await rideFactoryContract.methods.getRides().call();
    // console.log("rideFactoryContractMethods", rideFactoryContract.methods);
    const rideDetails = Promise.all(rides.map(async (ride: any) => {
        const rideContract = await getRideContract(ride);
        if (!rideContract) {
            return {}
        }
        const driver = await rideContract.methods.driver().call();
        const price = await rideContract.methods.price().call();
        const origin = await rideContract.methods.origin().call();
        const destination = await rideContract.methods.destination().call();

        return { driver, price, address: ride, origin, destination };

    }));
    return rideDetails;
}

function renderCards(rides: any[]) {
    const items = rides.map((ride, index) => {
        return {
            header: ride.driver,
            description: (
                <div>
                    <p>Ride from {ride.origin} to {ride.destination}</p>
                    <p>Price: {ride.price}</p>
                    <Link href={`/rides/${ride.address}`}>
                        View Ride
                    </Link>
                </div>
            ),
            meta: index,
            color: 'sage',
            fluid: true
        }

    })

    return <Card.Group items={items} />


}
export default function RidesPage() {
    const [rides, setRides] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        getRides().then(setRides);
        setLoading(false);
    }, []);

    return (
        <div>
            <h1>Rides</h1>
            {loading ? <p>Loading...</p> : renderCards(rides)}
            <p>Num Rides {rides.length}</p>
            <Link href="/rides/new">
                <Button primary>Create Ride</Button>
            </Link>
        </div>
    );
}