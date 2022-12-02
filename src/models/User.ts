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
    let count_feedback = 0;
    const accounts = await connect();
    const gasPrice = await web3.eth.getGasPrice()
    const tx = await nftContract.methods
        .buyPackage(package_type, amount)
        .send({
            gasPrice: gasPrice,
            from: accounts[0],
            value: web3.utils.toWei(price.toString(), 'ether')
        })
        .on('transactionHash', (hash: any) =>
        {
            if(count_feedback === 0)
            {
                api.post('buy-package', {
                    hash,
                    wallet: accounts[0],
                }).finally(() =>
                {
                    toast.success(
                        `Transação enviada com sucesso! Aguarde a confirmação da transação.`,
                        { autoClose: false }
                    );
                    count_feedback++;
                });
            }
        });

    return tx;
};

const open_package = async (package_type: number, amount:number) =>
{
    const { 0: address } = await connect();
    return await api.post('open-package', { package_type, address, amount });
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
                localStorage.setItem('wallet', address.toString());
            })
            .catch((err) => {
                toast.error(`Erro ao vincular carteira`);
                console.log(err);
            })

            return address
    }
}

const get_owned_tokens = async (players: number[]) =>
{
    const { 0: address } = await connect();
    const nftContract = await get_contract();

    if(address && nftContract && players.length === 11)
    {
        const addresses: string[] = [0,1,2,3,4,5,6,7,8,9,10].map(times => address)
        const tx = await nftContract.methods
            .balanceOfBatch(addresses , players)
            .call();
        return tx
    }
}

const get_owned_teams = async (sticker_ids: number[]) =>
{
    const { 0: address } = await connect();
    const nftContract = await get_contract();

    if(address && nftContract && sticker_ids.length)
    {
        const tx = await nftContract.methods
            .balanceOfBatch(
                sticker_ids.map(() => address),
                sticker_ids
            )
            .call();
        return tx
    }
}

export {
    getPackages,
    buy_package,
    open_package,
    paste_stickers,
    connect_wallet,
    get_owned_tokens,
    get_owned_teams
}
