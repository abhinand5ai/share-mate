import Web3 from "web3";
import { AbiItem } from "web3-utils";
import * as fs from "fs";
import * as path from "path";



async function connectToProvider(): Promise<Web3> {
    if (typeof window !== 'undefined' && window.ethereum) {
        try {
          // Connect to the provider
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          return web3;
        } catch (error) {
          console.error('Error connecting to Web3 provider:', error);
          throw error;
        }
      } else {
        console.error('Web3 provider not found');
        throw new Error('Web3 provider not found');
      }
}
    


const contractJson = fs.readFileSync(path.resolve("smart-contracts/artifacts/contracts/Ride.sol/Ride.json"), "utf8");

export const RideFactoryABI = JSON.parse(contractJson).abi as AbiItem[]; // 'as AbiItem[]' is a type assertion



// const contractAddress = "0xF1aAB2FA4Fe71A780Ff039223eA3a18b9Fb0c7CE"

// const rideContract = new web3.eth.Contract(RideFactoryABI, contractAddress);
