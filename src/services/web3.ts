import Web3 from "web3";
import { abi, contract_address } from "./contract";

const _window: any = window as any;
const provider: any = _window.ethereum;
export const web3 = new Web3(provider);


export const checkWallet = () => {
    return new Promise((resolve, reject) => {
        if (_window.ethereum) {
            const polygonNetworkId = '137'

            web3.eth.net.getId()
                .then((networkId) => {
                    if (String(networkId) !== polygonNetworkId) return resolve('disconnect')
                    else {
                        return resolve('connected')
                    }
                })
                .catch(err => reject('disconnect'))
        } else {
            return resolve('disconnect')
        }
    })
}


export const connect: () => Promise<string[]> = () => {
    return new Promise((resolve, reject) => {
        if (_window.ethereum) {
            // check if user has polygon network added to metamask
            const polygonNetworkId = '137'

            web3.eth.net.getId()
                .then((networkId) => {
                    if (String(networkId) !== polygonNetworkId) {
                        // request to user polygon network
                        _window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: web3.utils.toHex(polygonNetworkId) }] })
                            .then(() => {
                                // request to user connect wallet
                                _window.ethereum.request({ method: 'eth_requestAccounts' })
                                    .then((accounts: string[]) => {
                                        console.log('accounts', accounts)
                                        return resolve(accounts);
                                    })
                                    .catch((error: any) => {


                                        reject(error);
                                    });
                            })
                            .catch(() => {
                                _window.ethereum.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [{
                                        chainId: web3.utils.toHex(polygonNetworkId),
                                        chainName: 'Polygon Mainnet',
                                        nativeCurrency: {
                                            name: 'MATIC',
                                            symbol: 'MATIC',
                                            decimals: 18,
                                        },
                                        rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
                                        blockExplorerUrls: ['https://polygonscan.com/'],
                                    }],
                                })
                                    .then(() => {
                                        _window.ethereum.request({ method: 'eth_requestAccounts' })
                                            .then((accounts: string[]) => {
                                                return resolve(accounts);
                                            })
                                            .catch((error: any) => {
                                                return reject(error);
                                            });
                                    })
                            })
                    } else {
                        // request to user connect wallet
                        _window.ethereum.request({ method: 'eth_requestAccounts' })
                            .then((accounts: string[]) => {
                                return resolve(accounts);
                            })
                            .catch((error: any) => {
                                reject(error);
                            });
                    }
                })
                .catch((err) => {
                    // unable to retrieve network id
                });
        }
        else {
            reject('No ethereum provider found');
        }
    })
}

export const get_contract = async () => {
    const nftContract = new web3.eth.Contract(abi as any, contract_address);
    return nftContract;
}
