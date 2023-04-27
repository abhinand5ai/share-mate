import Web3 from "web3";

declare global {
    interface Window {
        web3: Web3;
        ethereum: any;
    }
}

export const getWeb3 = async () => {
    if (typeof window == "undefined") {
        const provider = new Web3.providers.HttpProvider(
            "https://goerli.infura.io/v3/b40af8f8d3fc4238a17cd368f70d4c60"
        );
        return new Web3(provider);
    }
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            return window.web3;
        } catch (error) {
            console.error(error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        return window.web3;
    }
    // Non-dapp browsers...
    else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
    }
};
