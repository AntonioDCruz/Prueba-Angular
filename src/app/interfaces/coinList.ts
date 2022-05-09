export interface CoinList {
  Response:   string;
  Message:    string;
  Data:       { [key: string]: Data };
  RateLimit:  RateLimit;
  HasWarning: boolean;
  Type:       number;
}

export interface Data {
  Id:                    string;
  Url:                   string;
  ImageUrl?:             string;
  ContentCreatedOn:      number;
  Name:                  string;
  Symbol:                string;
  CoinName:              string;
  FullName:              string;
  Description:           string;
  AssetTokenStatus:      AssetTokenStatus;
  Algorithm:             string;
  ProofType:             string;
  SortOrder:             string;
  Sponsored:             boolean;
  Taxonomy:              Taxonomy;
  Rating:                Rating;
  IsTrading:             boolean;
  TotalCoinsMined?:      number | null;
  CirculatingSupply?:    number;
  BlockNumber?:          number;
  NetHashesPerSecond?:   number | null;
  BlockReward?:          number | null;
  BlockTime?:            number;
  AssetLaunchDate?:      Date | AssetLaunchDateEnum;
  AssetWhitepaperUrl?:   string;
  AssetWebsiteUrl?:      null | string;
  MaxSupply?:            number | null;
  MktCapPenalty?:        number;
  IsUsedInDefi?:         number;
  IsUsedInNft?:          number;
  PlatformType?:         PlatformType;
  AlgorithmType?:        string;
  Difficulty?:           number;
  BuiltOn?:              string;
  SmartContractAddress?: string;
  DecimalPoints?:        number;
}

export enum AssetLaunchDateEnum {
  The00000000 = "0000-00-00",
  The20160524 = "2016/05/24",
  The20180420 = " 2018-04-20  ",
  The20181113 = "2018-11-13 ",
  The20190120 = " 2019-01-20",
  The20200907 = " 2020-09-07",
  The20210615 = " 2021-06-15",
  The20220104 = "2022- 01-04",
}

export enum AssetTokenStatus {
  Finished = "Finished",
  NA = "N/A",
  Ongoing = "Ongoing",
  Upcoming = "Upcoming",
}

export enum PlatformType {
  Blockchain = "blockchain",
  Derivative = "derivative",
  Token = "token",
}

export interface Rating {
  Weiss: Weiss;
}

export interface Weiss {
  Rating:                   MarketPerformanceRatingEnum;
  TechnologyAdoptionRating: MarketPerformanceRatingEnum;
  MarketPerformanceRating:  MarketPerformanceRatingEnum;
}

export enum MarketPerformanceRatingEnum {
  A = "A-",
  B = "B-",
  C = "C",
  D = "D-",
  E = "E+",
  Empty = "",
  PurpleB = "B",
  PurpleC = "C+",
  PurpleD = "D",
  PurpleE = "E-",
  RatingA = "A",
  RatingB = "B+",
  RatingC = "C-",
  RatingD = "D+",
  RatingE = "E",
}

export interface Taxonomy {
  Access:                  Access;
  FCA:                     Fca;
  FINMA:                   Finma;
  Industry:                Industry;
  CollateralizedAsset:     CollateralizedAsset;
  CollateralizedAssetType: CollateralizedAssetType;
  CollateralType:          CollateralType;
  CollateralInfo:          string;
}

export enum Access {
  Empty = "",
  Permissioned = "Permissioned",
  Permissionless = "Permissionless",
}

export enum CollateralType {
  Bond = "Bond",
  Commodity = "Commodity",
  Currency = "Currency",
  Empty = "",
  Equity = "Equity",
}

export enum CollateralizedAsset {
  Empty = "",
  No = "No",
  Partially = "Partially",
  Yes = "Yes",
}

export enum CollateralizedAssetType {
  Empty = "",
  SecurityToken = "Security Token",
  Stablecoin = "Stablecoin",
}

export enum Fca {
  Asset = "Asset",
  Empty = "",
  Exchange = "Exchange",
  ExchangeAsset = "Exchange,Asset",
  ExchangeUtility = "Exchange,Utility",
  Utility = "Utility",
  UtilityAsset = "Utility,Asset",
}

export enum Finma {
  Asset = "Asset",
  Empty = "",
  Payment = "Payment",
  PaymentAsset = "Payment,Asset",
  PaymentUtility = "Payment,Utility",
  Utility = "Utility",
  UtilityAsset = "Utility,Asset",
}

export enum Industry {
  ArtsEntertainmentAndRecreation = "Arts, Entertainment and Recreation",
  BlockchainSpecificApplication = "Blockchain-Specific Application",
  Empty = "",
  FinancialAndInsuranceActivities = "Financial and Insurance Activities",
  InformationAndCommunication = "Information and Communication",
  ProfessionalScientificAndTechnicalActivities = "Professional, Scientific and Technical Activities",
  PublicAdministrationAndDefence = "Public Administration and Defence",
  TransportationAndStorage = "Transportation and Storage",
  WholesaleAndRetailTrade = "Wholesale and Retail Trade",
}

export interface RateLimit {
}
