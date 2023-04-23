import { getWeb3 } from "./web3";
import { AbiItem } from "web3-utils";
import * as fs from "fs";
import * as path from "path";


const contractJson = fs.readFileSync(path.resolve("smart-contracts/artifacts/contracts/Ride.sol/Ride.json"), "utf8");

export const rideFactoryABI = JSON.parse(contractJson).abi as AbiItem[];


export const getRideContract = async () => {
  const web3 = await getWeb3();
  if (!web3) return;
  const contractAddress = "0xF1aAB2FA4Fe71A780Ff039223eA3a18b9Fb0c7CE";
  return new web3.eth.Contract(rideFactoryABI, contractAddress);
}


// const contractAddress = "0xF1aAB2FA4Fe71A780Ff039223eA3a18b9Fb0c7CE"

// const rideContract = new web3.eth.Contract(RideFactoryABI, contractAddress);
