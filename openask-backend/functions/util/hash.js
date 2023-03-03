const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/ad8bc3258461465caec6501141cb764b"
);
const BigNumber = require("bignumber.js");
const InputDataDecoder = require("ethereum-input-data-decoder");
const abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_fulfiller",
        type: "address",
      },
      { indexed: false, internalType: "string", name: "_data", type: "string" },
    ],
    name: "ActionPerformed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_changer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_approvers",
        type: "address[]",
      },
    ],
    name: "BountyApproversUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_changer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address payable[]",
        name: "_approvers",
        type: "address[]",
      },
      { indexed: false, internalType: "string", name: "_data", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "BountyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_changer",
        type: "address",
      },
      { indexed: false, internalType: "string", name: "_data", type: "string" },
    ],
    name: "BountyDataChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_changer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "BountyDeadlineChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "BountyDrained",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fulfillmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable[]",
        name: "_fulfillers",
        type: "address[]",
      },
      { indexed: false, internalType: "string", name: "_data", type: "string" },
      {
        indexed: false,
        internalType: "address",
        name: "_submitter",
        type: "address",
      },
    ],
    name: "BountyFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "_creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_approvers",
        type: "address[]",
      },
      { indexed: false, internalType: "string", name: "_data", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenVersion",
        type: "uint256",
      },
    ],
    name: "BountyIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_changer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
    ],
    name: "BountyIssuersUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_contributionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "_contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ContributionAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_contributionId",
        type: "uint256",
      },
    ],
    name: "ContributionRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_contributionIds",
        type: "uint256[]",
      },
    ],
    name: "ContributionsRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fulfillmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_approver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_tokenAmounts",
        type: "uint256[]",
      },
    ],
    name: "FulfillmentAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_bountyId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fulfillmentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable[]",
        name: "_fulfillers",
        type: "address[]",
      },
      { indexed: false, internalType: "string", name: "_data", type: "string" },
    ],
    name: "FulfillmentUpdated",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_fulfillmentId", type: "uint256" },
      { internalType: "uint256", name: "_approverId", type: "uint256" },
      { internalType: "uint256[]", name: "_tokenAmounts", type: "uint256[]" },
    ],
    name: "acceptFulfillment",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "address[]", name: "_approvers", type: "address[]" },
    ],
    name: "addApprovers",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      {
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
    ],
    name: "addIssuers",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "bounties",
    outputs: [
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "tokenVersion", type: "uint256" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "bool", name: "hasPaidOut", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "callStarted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "uint256", name: "_approverId", type: "uint256" },
      { internalType: "address payable", name: "_approver", type: "address" },
    ],
    name: "changeApprover",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      {
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
      {
        internalType: "address payable[]",
        name: "_approvers",
        type: "address[]",
      },
      { internalType: "string", name: "_data", type: "string" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
    ],
    name: "changeBounty",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "string", name: "_data", type: "string" },
    ],
    name: "changeData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
    ],
    name: "changeDeadline",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "uint256", name: "_issuerIdToChange", type: "uint256" },
      { internalType: "address payable", name: "_newIssuer", type: "address" },
    ],
    name: "changeIssuer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "uint256", name: "_issuerIdToChange", type: "uint256" },
      { internalType: "uint256", name: "_approverIdToChange", type: "uint256" },
      { internalType: "address payable", name: "_issuer", type: "address" },
    ],
    name: "changeIssuerAndApprover",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address payable", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "contribute",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address payable", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      { internalType: "uint256[]", name: "_amounts", type: "uint256[]" },
    ],
    name: "drainBounty",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      {
        internalType: "address payable[]",
        name: "_fulfillers",
        type: "address[]",
      },
      { internalType: "string", name: "_data", type: "string" },
      { internalType: "uint256", name: "_approverId", type: "uint256" },
      { internalType: "uint256[]", name: "_tokenAmounts", type: "uint256[]" },
    ],
    name: "fulfillAndAccept",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      {
        internalType: "address payable[]",
        name: "_fulfillers",
        type: "address[]",
      },
      { internalType: "string", name: "_data", type: "string" },
    ],
    name: "fulfillBounty",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_bountyId", type: "uint256" }],
    name: "getBounty",
    outputs: [
      {
        components: [
          {
            internalType: "address payable[]",
            name: "issuers",
            type: "address[]",
          },
          { internalType: "address[]", name: "approvers", type: "address[]" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "address", name: "token", type: "address" },
          { internalType: "uint256", name: "tokenVersion", type: "uint256" },
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "bool", name: "hasPaidOut", type: "bool" },
          {
            components: [
              {
                internalType: "address payable[]",
                name: "fulfillers",
                type: "address[]",
              },
              { internalType: "address", name: "submitter", type: "address" },
            ],
            internalType: "struct StandardBounties.Fulfillment[]",
            name: "fulfillments",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address payable",
                name: "contributor",
                type: "address",
              },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bool", name: "refunded", type: "bool" },
            ],
            internalType: "struct StandardBounties.Contribution[]",
            name: "contributions",
            type: "tuple[]",
          },
        ],
        internalType: "struct StandardBounties.Bounty",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address payable", name: "_sender", type: "address" },
      {
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
      { internalType: "address[]", name: "_approvers", type: "address[]" },
      { internalType: "string", name: "_data", type: "string" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_tokenVersion", type: "uint256" },
      { internalType: "uint256", name: "_depositAmount", type: "uint256" },
    ],
    name: "issueAndContribute",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address payable", name: "_sender", type: "address" },
      {
        internalType: "address payable[]",
        name: "_issuers",
        type: "address[]",
      },
      { internalType: "address[]", name: "_approvers", type: "address[]" },
      { internalType: "string", name: "_data", type: "string" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_tokenVersion", type: "uint256" },
    ],
    name: "issueBounty",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "metaTxRelayer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "numBounties",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "string", name: "_data", type: "string" },
    ],
    name: "performAction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_contributionId", type: "uint256" },
    ],
    name: "refundContribution",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_issuerId", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "_contributionIds",
        type: "uint256[]",
      },
    ],
    name: "refundContributions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "_contributionIds",
        type: "uint256[]",
      },
    ],
    name: "refundMyContributions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_relayer", type: "address" }],
    name: "setMetaTxRelayer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "tokenBalances",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_sender", type: "address" },
      { internalType: "uint256", name: "_bountyId", type: "uint256" },
      { internalType: "uint256", name: "_fulfillmentId", type: "uint256" },
      {
        internalType: "address payable[]",
        name: "_fulfillers",
        type: "address[]",
      },
      { internalType: "string", name: "_data", type: "string" },
    ],
    name: "updateFulfillment",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const actionPerformedEventAbi = {
  anonymous: false,
  inputs: [
    {
      indexed: false,
      internalType: "uint256",
      name: "_bountyId",
      type: "uint256",
    },
    {
      indexed: false,
      internalType: "address",
      name: "_fulfiller",
      type: "address",
    },
    { indexed: false, internalType: "string", name: "_data", type: "string" },
  ],
  name: "ActionPerformed",
  type: "event",
};

const web3 = new Web3(provider);
const decoder = new InputDataDecoder(abi);

const getParsedIssueAndContributeEvents = async (transactionHash) => {
  // Declare a variable to store the result
  let receipt;
  // Use the built-in web3 library to parse the transaction hash
  receipt = await web3.eth.getTransactionReceipt(transactionHash);
  return receipt.logs;
  //   const logs = receipt.logs;
};

const getBountyIdAndQuestionIdFromBountyIssueAndContributeHash = async (
  transactionHash
) => {
  const logs = await getParsedIssueAndContributeEvents(transactionHash);
  const actionPerformedLog = logs[0];
  //   console.log("logs: ", logs[0].data);
  const decodedLog = web3.eth.abi.decodeLog(
    actionPerformedEventAbi.inputs,
    actionPerformedLog.data,
    actionPerformedLog.topics.slice(1)
  );
  const questionId = decodedLog._data;
  const bountyId = decodedLog._bountyId;
  return { questionId, bountyId };
};

const getParsedBountyIssueAndContributeInputs = async (transactionHash) => {
  const tx = await web3.eth.getTransaction(transactionHash);
  const inputs = tx.input;
  const decodedInputs = decoder.decodeData(inputs);
  return decodedInputs;
};

const getTokenTypeAndDepositAmountFromIssueAndContributeHash = async (
  transactionHash
) => {
  const decodedInputs = await getParsedBountyIssueAndContributeInputs(
    transactionHash
  );
  const tokenAddress = decodedInputs.inputs[5];
  const depositAmount = new BigNumber(decodedInputs.inputs[7]._hex).toNumber();
  return { tokenAddress, depositAmount };
};

const getAnswerIdFromBountyFulfillHash = async (transactionHash) => {
  const tx = await web3.eth.getTransaction(transactionHash);

  const decoder = new InputDataDecoder(abi);

  const inputs = tx.input;

  const decodedInput = decoder.decodeData(inputs);
  const answerId = decodedInput.inputs[3];
  console.log("answerId: ", answerId);
  // get Data (answerId)
  return answerId;
};

module.exports = {
  getBountyIdAndQuestionIdFromBountyIssueAndContributeHash,
  getTokenTypeAndDepositAmountFromIssueAndContributeHash,
  getAnswerIdFromBountyFulfillHash,
};
