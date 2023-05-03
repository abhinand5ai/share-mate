'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getRideFactoryContract } from '@/ethereum/rides';

export default function CreateRide() {
    const [price, setPrice] = useState('');
    const [driver, setDrive] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const router = useRouter();

    const create = async (event: any) => {
        event.preventDefault();
        console.log('create');
        const rideFactoryContract = await getRideFactoryContract();
        if (!rideFactoryContract) {
            return;
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
        try {
            const resp = await rideFactoryContract.methods.createRide(price, driver, origin, destination).send({
                from: window.ethereum.selectedAddress,
            });
            console.log(resp);
        }
        catch (e) {
            console.log(e);
        }
        setPrice('');
        setDrive('');
        setOrigin('');
        setDestination('');
        router.push('/rides');
    }

    return (
        <form onSubmit={create}>
            <h3>Create a new Ride</h3>
            <input

                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input

                type="text"
                placeholder="Driver"
                value={driver}
                onChange={(e) => setDrive(e.target.value)}
            />
            <input
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
            />
            <input

                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />


            <button type="submit">
                Create Ride
            </button>
        </form>
    );
}