import { useInitWeb3, store, validation } from "./store/store";

import NumericInput from "./base-components/NumericInput";
import ActionButton from "./base-components/ActionButton";
import Card from "./base-components/Card";
import Icon from "./base-components/Icon";
import Label from "./base-components/Label";
import SmallLabel from "./base-components/SmallLabel";
import Switch from "./base-components/Switch";
import TimeSelector from "./base-components/TimeSelector";
import TokenLogo from "./base-components/TokenLogo";
import TokenName from "./base-components/TokenName";
import Layout from "./base-components/Layout";
import ChangeTokensOrder from "./base-components/ChangeTokensOrder";
import Price from "./components/Price";
import Tooltip from "./base-components/Tooltip";
import IconButton from "./base-components/IconButton";
import Text from "./base-components/Text";

export default {
  initializer: useInitWeb3,
  store,
  baseComponents: { Text, IconButton, NumericInput, ActionButton, Card, Icon, Label, SmallLabel, Switch, TimeSelector, TokenLogo, TokenName, Layout, ChangeTokensOrder, Tooltip },
  components: { Price },
  validation,
};
