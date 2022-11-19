import Web3 from "web3";
import { abi, contract_address } from "./contract";

const _window:any = window as any;
const provider:any = _window.ethereum;
const web3 = new Web3(provider);

export const connect: () => Promise<string[]> = () => {
    return new Promise((resolve, reject) => {
        
        if(_window.ethereum)
        {
            _window.ethereum.request({method:'eth_requestAccounts'})
                .then((res:any) => 
                {
                    resolve(res);
                })
                .catch((err:any) =>
                {
                    reject(err);
                });
        }
        else
        {
            reject('No ethereum provider found');
        }
    })
}

export const get_contract = async () =>
{
    const nftContract = new web3.eth.Contract(abi as any, contract_address);
    return nftContract;
}

export const buy_package = async (package_type: number, amount: number, price: number) =>
{
    const nftContract = await get_contract();    
    const accounts = await connect();
    try
    {        
        const tx = await nftContract.methods
            .buyPackage(package_type, amount)
            .send({
                gas: 10000,
                from: accounts[0],
                to: contract_address,
                value: web3.utils.toWei(price.toString(), 'ether')
            });
        
        return tx;
    }
    catch(error)
    {
        return error;
    }
};