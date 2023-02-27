/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ERC721BasicTokenMockInterface extends utils.Interface {
  functions: {
    "InterfaceId_ERC165()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "exists(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "testint()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "InterfaceId_ERC165"
      | "approve"
      | "balanceOf"
      | "burn"
      | "exists"
      | "getApproved"
      | "isApprovedForAll"
      | "mint"
      | "ownerOf"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "supportsInterface"
      | "testint"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "InterfaceId_ERC165",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "testint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "InterfaceId_ERC165",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  _owner: string;
  _approved: string;
  _tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  _owner: string;
  _operator: string;
  _approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferEventObject {
  _from: string;
  _to: string;
  _tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ERC721BasicTokenMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721BasicTokenMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    InterfaceId_ERC165(overrides?: CallOverrides): Promise<[string]>;

    approve(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exists(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getApproved(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "safeTransferFrom(address,address,uint256)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _to: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testint(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  InterfaceId_ERC165(overrides?: CallOverrides): Promise<string>;

  approve(
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exists(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getApproved(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    _owner: PromiseOrValue<string>,
    _operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ownerOf(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "safeTransferFrom(address,address,uint256)"(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _to: PromiseOrValue<string>,
    _approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  testint(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    InterfaceId_ERC165(overrides?: CallOverrides): Promise<string>;

    approve(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    exists(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getApproved(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "safeTransferFrom(address,address,uint256)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      _to: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testint(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      _owner?: null,
      _approved?: null,
      _tokenId?: null
    ): ApprovalEventFilter;
    Approval(
      _owner?: null,
      _approved?: null,
      _tokenId?: null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      _owner?: null,
      _operator?: null,
      _approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      _owner?: null,
      _operator?: null,
      _approved?: null
    ): ApprovalForAllEventFilter;

    "Transfer(address,address,uint256)"(
      _from?: null,
      _to?: null,
      _tokenId?: null
    ): TransferEventFilter;
    Transfer(_from?: null, _to?: null, _tokenId?: null): TransferEventFilter;
  };

  estimateGas: {
    InterfaceId_ERC165(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exists(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApproved(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      _to: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testint(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    InterfaceId_ERC165(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exists(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApproved(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      _owner: PromiseOrValue<string>,
      _operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      _to: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
