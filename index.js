// Presale setup
// smartbchtestnet
const tokenAddress = '0x855E56ADD0F10B6b15bAcC1c0Dda75C269295244';
const tokenSaleAddress = '0x81aBde1AbA337563A062f6890Cda05Ef1F146Cad';


// const pricePerWei = 46640000000000; // 0.00004664 BCH -- real presale price
const pricePerWei = 466400000000; // 0.0000 00 4664 BCH -- testnet presale price

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

function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');
    ethereum.request({ method: 'eth_requestAccounts' })
    const web3 = new Web3(Web3.givenProvider);
    TokenSale = new web3.eth.Contract(TokenSale_json_interface["abi"], tokenSaleAddress);
    web3.eth.getBlockNumber().then(function (result) {
      currentBlock = parseInt(result);
    });
  } else {
    $("#found").text(`MetaMask not found!`);
    console.log('Please install MetaMask!');
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
  let cost = nTokensToBuy * pricePerWei * 10**-18; 
  $("#cost").html('Cost ' + cost + ' BCH');
}


async function requestpayment() {
  $("#cost").text = `Processing payment... `;

  let tokensToBuyString = $("#tokensToBuy").val();
  console.log(tokensToBuyString);
  let tokensToBuy = 0;
  if ("" !== tokensToBuyString) tokensToBuy = parseInt(tokensToBuyString);
  const bnTokensToBuy = new BigNumber(tokensToBuy);


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
