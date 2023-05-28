import { hooks, Orders, OrdersAdapter, Translations } from "@orbs-network/twap-ui";
import { memo, useEffect, useState } from "react";
import translations from "./i18n/en.json";
import { ChronosOrdersProps } from "./types";
import { config, parseToken } from "./hooks";

function OrderHistory(props: ChronosOrdersProps) {
  const parsedTokens = hooks.useParseTokens(props.dappTokens, (rawToken) => parseToken(props.getTokenLogoURL, rawToken));
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setAppReady(true);
  }, []);

  if (!appReady) return null;
  return (
    <OrdersAdapter
      account={props.account}
      config={config}
      provider={props.provider}
      translations={translations as Translations}
      tokenList={parsedTokens}
      maxFeePerGas={props.maxFeePerGas}
      priorityFeePerGas={props.priorityFeePerGas}
    >
      <Orders disableAnimation={true} />
    </OrdersAdapter>
  );
}

export default memo(OrderHistory);
