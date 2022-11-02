import { BigNumber, Token } from "@defi.org/web3-candies";
import { TimeFormat } from "./store/TimeFormat";
import Web3 from "web3";
interface BaseState {
  reset: () => void;
}

export interface GlobalState extends BaseState {
  showConfirmation: boolean;
  setShowConfirmation: (value: boolean) => void;
  disclaimerAccepted: boolean;
  setDisclaimerAccepted: (value: boolean) => void;
}

export interface SrcTokenState extends BaseState {
  srcTokenInfo?: TokenInfo;
  srcToken?: Token;
  srcTokenAmount?: BigNumber;
  setSrcToken: (value?: TokenInfo, keepAmount?: boolean) => void;
  setSrcTokenAmount: (value?: BigNumber) => void;
  onChange: (value: string) => void;
  srcTokenAmountUi?: string;
}

export interface DstTokenState extends BaseState {
  dstTokenInfo?: TokenInfo;
  dstToken?: Token;
  setDstToken: (value?: TokenInfo) => void;
}

export interface MaxDurationState extends BaseState {
  millis: number;
  timeFormat: TimeFormat;
  computed: {
    deadline: number;
    deadlineUi: string;
  };
  onChange: (timeFormat: TimeFormat, millis: number) => void;
}

export interface TradeIntervalState extends BaseState {
  millis: number;
  timeFormat: TimeFormat;

  customInterval: boolean;
  setCustomInterval: (value: boolean) => void;
  onChange: (timeFormat: TimeFormat, millis: number) => void;
  computed: {
    intervalUi: string;
  };
  onDrivedChange: (maxDurationMillis: number, totalTrades: number) => void;
}

export interface TradeSizeState extends BaseState {
  tradeSize?: BigNumber;
  setTradeSize: (tradeSize?: BigNumber) => void;
  totalTrades: number;
  onChange: (value: string) => void;
  tradeSizeUi?: string;
}

export interface Web3State {
  web3?: Web3;
  setWeb3: (web3?: Web3) => void;
  account?: string;
  setAccount: (value?: string) => void;
  chain?: number;
  setChain: (chain?: number) => void;
  integrationChain?: number;
  setIntegrationChain: (value?: number) => void;
  integrationKey?: string;
  setIntegrationKey: (value?: string) => void;
}

export interface PriceState extends BaseState {
  isLimitOrder: boolean;
  toggleLimit: (limitPrice?: BigNumber) => void;
  limitPrice?: BigNumber;
  setLimitPrice: (value?: BigNumber) => void;
  hideLimit: () => void;
}

export interface TokenInfo {
  symbol: string;
  address: string;
  decimals: number;
  logoUrl?: string;
  isNative?: boolean;
}

export enum OrderStatus {
  Open = "Open",
  Canceled = "Canceled",
  Filled = "Filled",
  Expired = "Expired",
}

export type Order = {
  srcToken: Token;
  dstToken: Token;
  srcTokenAmount: BigNumber;
  tradeSize: BigNumber;
  dstMinAmount: BigNumber;
  deadline: number;
  delay: number;
  id: string;
  status: OrderStatus;
  srcFilledAmount: BigNumber;
  time: number;
  tradeIntervalUi: string;
  createdAtUi: string;
  deadlineUi: string;
  progress: number;
  srcRemainingAmount: BigNumber;
  isMarketOrder: boolean;
  dstLimitPrice: BigNumber;
  dstAmount: BigNumber;
  prefix: string;
  srcTokenInfo: TokenInfo;
  dstTokenInfo: TokenInfo;
  srcUsdValueUi: string;
  dstUsdValueUi: string;
  srcTokenAmountUi: string;
  dstTokenAmountUi: string;
  tradeSizeAmountUi: string;
  tradeSizeUsdValueUi: string;
  srcFilledAmountUi: string;
  srcRemainingAmountUi: string;
  srcFilledUsdValueUi: string;
  srcRemainingUsdValueUi: string;
};
