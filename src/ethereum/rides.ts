import { getWeb3 } from "./web3";
import { AbiItem } from "web3-utils";

export const getRideFactoryContract = async () => {
  const isClient = typeof window !== "undefined";
  const apiURL = isClient ? "/api/contracts?name=RideFactory" : "http://localhost:3000/api/contracts?name=RideFactory";
  const rideFactoryJson = await fetch(apiURL).then((res) => res.json());
  const rideFactoryABI = rideFactoryJson.abi as AbiItem[];

  const web3 = await getWeb3();
  if (!web3) return;
  const contractAddress = "0xF1aAB2FA4Fe71A780Ff039223eA3a18b9Fb0c7CE";
  return new web3.eth.Contract(rideFactoryABI, contractAddress);
}

export const getRideContract = async (rideAddress: string) => {
  const isClient = typeof window !== "undefined";
  const apiURL = isClient ? "/api/contracts?name=Ride" : "http://localhost:3000/api/contracts?name=Ride";
  const rideJson = await fetch(apiURL).then((res) => res.json());
  const rideABI = rideJson.abi as AbiItem[];
  const web3 = await getWeb3();
  if (!web3) return;
  return new web3.eth.Contract(rideABI, rideAddress);
}

// const contractAddress = "0xF1aAB2FA4Fe71A780Ff039223eA3a18b9Fb0c7CE"

// const rideContract = new web3.eth.Contract(RideFactoryABI, contractAddress);
