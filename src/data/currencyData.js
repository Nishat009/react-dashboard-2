import BTC from '../images/IconBTC.png'
import VectorIcon2 from '../images/Vector2.png'
import ETH from '../images/IconETH.png'
import VectorIcon from '../images/Vector.png'
import SOL from '../images/IconSOL.png'
import VectorIcon3 from '../images/Vector3.png'
import IconWalet from '../images/IconWallet.png'
export const cardData = [
    {
      id: 1,
      icon: BTC,
      vector: VectorIcon2,
      name: "BTCUSDT",
      description: "Bitcoin",
      price: "$23,738",
      pnlDaily: {
        value: "-$2565.78",
        percentage: "+14.67%",
      },
    },
    {
      id: 2,
      icon: ETH,
      vector: VectorIcon,
      name: "ETHUSDT",
      description: "Ethereum",
      price: "$1650",
      pnlDaily: {
        value: "+$350.45",
        percentage: "-18.0%",
      },
    },
    {
      id: 3,
      icon: SOL,
      vector: VectorIcon3,
      name: "LTCUSDT",
      description: "Litecoin",
      price: "$150",
      pnlDaily: {
        value: "+$25.60",
        percentage: "+15.5%",
      },
    },
  ]

  export const BalanceData = [
    {
      id: 1,
      icon: IconWalet,
      name: "Estimated Balance",
      description: "Bitcoin",
      balance: "$123,987",
      mntProfit: {
        value: "-$2560.78",
        percentage: "15.87%",
      },
    },
  ]