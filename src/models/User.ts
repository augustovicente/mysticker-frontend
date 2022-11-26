import { toast } from "react-toastify";
import { api } from "services/api";
import { connect, get_contract, web3 } from "services/web3";

const getPackages = async () =>
{
    let contract = await get_contract();
    let user_address = await connect();
    return await contract.methods.getUserPackage(user_address[0]).call();
};

const buy_package = async (package_type: number, amount: number, price: number) =>
{
    const nftContract = await get_contract();

    const accounts = await connect();
    const tx = await nftContract.methods
        .buyPackage(package_type, amount)
        .send({
            from: accounts[0],
            value: web3.utils.toWei(price.toString(), 'ether')
        });

    return tx;
};

const open_package = async (package_type: number) =>
{
    const { 0: address } = await connect();
    await api.post('open-package', { package_type, address });
}

const paste_stickers = async (country_id: number) =>
{
    const { 0: address } = await connect();
    await api.post('paste-stickers', { country_id, address });
}

const connect_wallet = async () =>
{
    const { 0: address } = await connect();

    if (address)
    {
        api.post('vinculate-wallet', {
            wallet: address
         })
            .then((res) => {
                toast.success('Carteira vinculada com sucesso!');
            })
            .catch((err) => {
                toast.error(`Erro ao vincular carteira`);
                console.log(err);
            })
    }
}

export {
    getPackages,
    buy_package,
    open_package,
    paste_stickers,
    connect_wallet
}
