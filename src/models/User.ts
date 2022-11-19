import { connect, get_contract, web3 } from "services/web3";

const getPackages = async () =>
{
    let contract = await get_contract();
    let user_address = await connect();
    contract.methods.getUserPackage(user_address[0]).call()
        .then((res:any) => {
            console.log(res);
        });
};

const buy_package = async (package_type: number, amount: number, price: number) =>
{
    const nftContract = await get_contract();
    
    const accounts = await connect();
    try
    {        
        const tx = await nftContract.methods
            .buyPackage(package_type, amount)
            .send({
                from: accounts[0],
                value: web3.utils.toWei(price.toString(), 'ether')
            });
        
        return tx;
    }
    catch(error)
    {
        return error;
    }
};

const open_package = async (package_type: number) =>
{
    
}

export {
    getPackages,
    buy_package
}