// Presale setup
// smartbchtestnet
const tokenSymbol = 'NFTC';
const tokenAddress = '0x855E56ADD0F10B6b15bAcC1c0Dda75C269295244';
const tokenSaleAddress = '0x81aBde1AbA337563A062f6890Cda05Ef1F146Cad';


// const pricePerWei = 46640000000000; // 0.00004664 BCH -- real presale price
const pricePerWei = 466400000000; // 0.0000 00 4664 BCH -- testnet presale price

const presaleSupply = 2144082; // 2.14... million



const bnPricePerWei = new BigNumber(pricePerWei);
// constants
const divideForsBCH = 10 ** 18;




if (window.ethereum) {
  handleEthereum();
} else {
  window.addEventListener('ethereum#initialized', handleEthereum,
    {
      once: true,
    });

  // If the event is not dispatched by the end of the timeout,
  // the user probably doesn't have MetaMask installed.
  setTimeout(handleEthereum, 3000); // 3 seconds
}

async function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');
    ethereum.request({ method: 'eth_requestAccounts' })
    const web3 = new Web3(Web3.givenProvider);

    TokenSale = new web3.eth.Contract(TokenSale_json_interface["abi"], tokenSaleAddress);

    tokensSold = await TokenSale.methods.tokensSold().call();
    tokensRemaining = presaleSupply - tokensSold;
    $("#supply").html('<b>' + tokensRemaining + ' / ' + presaleSupply + ' ' + tokenSymbol + '</b> remaining');


    // web3.eth.getBlockNumber().then(function (result) {
    //   currentBlock = parseInt(result);
    // });
  } else {
    $("#found").text(`MetaMask not found!`);
    console.log('Please install MetaMask!');
  }
}


async function addTokenToMetaMask() {
  // const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513'; // use the one defined above
  // const tokenSymbol = 'NFTC'; // use the one defined above
  const tokenDecimals = 18;
  const tokenImage = ''; // need a logo
  // const tokenImage = 'http://placekitten.com/200/300'; // need a logo

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });

    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }
  } catch (error) {
    console.log(error);
  }

}





function updateText(textId, textInput) {
  console.log(textId + " " + textInput);
  $("#" + textId).val(textInput);
  showCost();
}


function showCost() {
  let tokensToBuyString = $("#tokensToBuy").val();
  console.log(tokensToBuyString);
  let tokensToBuy = 0;
  if ("" !== tokensToBuyString) tokensToBuy = parseInt(tokensToBuyString);
  const nTokensToBuy = tokensToBuy;
  let cost = Math.round(nTokensToBuy * pricePerWei * 10 ** -12) * 10 ** -6; // get rid of stupid numbers at the end of the value with round
  $("#cost").html('Cost: <b>' + cost + ' BCH</b>');
}


async function requestpayment() {
  $("#cost").text = `Processing payment... `;

  let tokensToBuyString = $("#tokensToBuy").val();
  console.log(tokensToBuyString);
  let tokensToBuy = 0;
  if ("" !== tokensToBuyString) tokensToBuy = parseInt(tokensToBuyString);
  const bnTokensToBuy = new BigNumber(tokensToBuy);


  tokensSold = await TokenSale.methods.tokensSold().call();
  tokensRemaining = presaleSupply - tokensSold;
  $("#supply").html(tokensRemaining + ' / ' + presaleSupply + ' tokens remaining');

  console.log(`Buyer buys ${tokensToBuy} tokens`);
  await TokenSale.methods.buyTokens(bnTokensToBuy).send(
    {
      from: ethereum.selectedAddress,
      value: bnTokensToBuy.times(bnPricePerWei)
    }
  );
  // .then(() => {
  //   console.log('TokenSale: Sale is active: ' + await TokenSale.saleActive());
  //   console.log('TokenSale sells tokens for ' + (await TokenSale.tokenPrice() * 10 ** -18).toString() + ' BCH per token');
  //   console.log((await TokenSale.tokensSold()).toString() + ' / ' + presaleSupply + ' tokens sold');
  //   console.log('TokenSale has ' + (await SimpleToken.balanceOf(tokenSaleAddress) * 10 ** -18).toString() + ' tokens left');
  //   console.log('TokenSale contract currently has ' + (await ethers.provider.getBalance(TokenSale.address) * 10 ** -18).toString() + ' sBCH');


  // });
  // .then(() => {
  //   $("#cost").text(`Transaction finished.`);
  // });
}
