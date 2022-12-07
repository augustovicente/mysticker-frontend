import { useEffect } from 'react'

const _window: any = window as any;
const provider: any = _window.ethereum;

// Listener que observa mudanças na carteira ou conta da metamask
export const useMetamaskChanged = (callback: () => void) => {
    if (!provider) {
        if (/Android|iPhone/i.test(navigator.userAgent)) {
            return window.location.href = 'https://metamask.app.link/dapp/mysticker.io/'
        }

        return;
    }

    useEffect(() => {
        provider.on('accountsChanged', callback)
        provider.on('chainChanged', callback)

        return () => {
            provider.removeListener('accountsChanged', callback)
            provider.removeListener('chainChanged', callback)
        }
    }, [])
}
