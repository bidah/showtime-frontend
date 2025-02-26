import { useMemo } from "react";

import {
  useAccount,
  useSignMessage,
  useSigner,
  useNetwork,
  useSignTypedData,
  useDisconnect,
} from "wagmi";

const useWallet = () => {
  const wagmiData = useAccount();
  const { data: wagmiSignData, signMessage } = useSignMessage();
  const { data: wagmiSigner } = useSigner();
  const { chain } = useNetwork();
  const { signTypedDataAsync } = useSignTypedData();
  const { disconnect } = useDisconnect();

  const getAddress = async () => {
    return wagmiData?.address;
  };

  const connected = useMemo(
    () => !!wagmiData && !!chain && !!wagmiSigner?.provider,
    [wagmiData, chain, wagmiSigner?.provider]
  );
  const networkChanged = useMemo(() => !!chain && chain.id !== 137, [chain]);
  const signed = useMemo(() => !!wagmiSignData, [wagmiSignData]);
  const loggedIn = useMemo(() => connected, [connected]);

  return {
    getAddress,
    address: wagmiData?.address,
    connected,
    signed,
    loggedIn,
    disconnect,
    networkChanged,
    provider: wagmiSigner?.provider,
    signature: wagmiSignData,
    signMessage,
    signTypedDataAsync,
  };
};

export { useWallet };
