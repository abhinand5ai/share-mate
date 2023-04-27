import * as fs from "fs";
import * as path from "path";


const rideJson = fs.readFileSync(path.resolve("smart-contracts/artifacts/contracts/Ride.sol/Ride.json"), "utf8");
const rideFactoryJson = fs.readFileSync(path.resolve("smart-contracts/artifacts/contracts/Ride.sol/RideFactory.json"), "utf8");



// Fetch compiled contract json from the server

export async function GET(request: Request) {
    const queryParameters = new URL(request.url).searchParams;
    const contractName = queryParameters.get("name");
    var compiledContractJson;
    if (contractName === "RideFactory") {
        compiledContractJson = rideFactoryJson;
    } else if (contractName === "Ride") {
        compiledContractJson = rideJson;
    }
    // return new Response("Hello Contracts");
    return new Response(compiledContractJson, {
        headers: {
            "content-type": "application/json",
        },
    });
}