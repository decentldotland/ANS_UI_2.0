export type ANSData = {
  address_color: string | undefined | null;
  currentLabel: string | undefined | null;
  avatar: string | undefined | null;
} | undefined;

export const DUMMY_ANS_DATA = {
  address_color: '#ffffff',
  currentLabel: '',
  avatar: '',
}

export type userInfo = {
  userInfo: {
      user: string;
      currentLabel: string;
      ownedLabels?: {
          label: string;
          scarcity: string;
          acquisationBlock: number;
          mintedFor: number;
      }[],
      nickname?: string;
      address_color: string;
      bio?: string;
      avatar?: string;
      links?: {
          github?: string;
          twitter?: string;
          customUrl?: string;
          instagram?: string;
      },
      subdomains?: any;
      freeSubdomains: number;
  };
};


// Generated by https://quicktype.io

export interface Resobject {
  res: Res;
}

export interface Res {
  arweave_address:              string;
  evm_address:                  string;
  identity_id:                  string;
  is_evaluated:                 boolean;
  is_verified:                  boolean;
  last_modification:            number;
  last_validation:              number;
  telegram:                     Telegram;
  validator:                    string;
  ver_req_network:              string;
  verification_req:             string;
  // Member Since.. 
  first_linkage:                number;
  has_unevaluated_exotic_addrs: boolean;
  exotic_addresses:             any[];
  ANS:                          Ans;
  ENS:                          string;
  AVVY:                         string;
  GITPOAPS:                     Gitpoap[];
  POAPS:                        Poap[];
  MORALIS_NFTS:                 any |  { [key: string]: null | string }[];
  RSS3:                         any;
  GALAXY_CREDS:                 any;
  ANFTS:                        any | Anfts;
  ARWEAVE_TRANSACTIONS:         any[];
};

export interface Anfts {
  koii: Koii[];
}

export interface Koii {
  id:          string;
  poster:      string;
  timestamp:   number;
  title:       string;
  description: string;
  ticker:      string;
}

export interface Ans {
  user:           string;
  currentLabel:   string;
  ownedLabels:    OwnedLabel[];
  nickname:       string;
  address_color:  string;
  bio:            string;
  avatar:         string;
  links:          Links;
  subdomains:     any;
  freeSubdomains: number;
}

export interface Links {
  github:    string;
  twitter:   string;
  customUrl: string;
  instagram: string;
}

export interface OwnedLabel {
  label:            string;
  scarcity:         string;
  acquisationBlock: number;
  mintedFor:        number;
}

export interface ArweaveTransaction {
  txid:      string;
  timestamp: number;
  tags:      Tag[];
}

export interface Tag {
  name:  string;
  value: string;
}

export interface GalaxyCreds {
  id:                  string;
  avatar:              string;
  username:            string;
  eligibleCredentials: EligibleCredentials;
}

export interface EligibleCredentials {
  list: any[];
}

export interface Gitpoap {
  gitPoapId:        number;
  gitPoapEventId:   number;
  poapTokenId:      string;
  poapEventId:      number;
  poapEventFancyId: string;
  name:             string;
  year:             number;
  description:      string;
  imageUrl:         string;
  repositories:     string[];
  earnedAt:         string;
  mintedAt:         string;
}

export interface Poap {
  event:   Event;
  tokenId: string;
  owner:   string;
  chain:   string;
  created: string;
}

export interface Event {
  id:          number;
  fancy_id:    string;
  name:        string;
  event_url:   string;
  image_url:   string;
  country:     string;
  city:        string;
  description: string;
  year:        number;
  start_date:  string;
  end_date:    string;
  expiry_date: string;
  supply:      number;
}

export interface Rss3 {
  transactions: Transaction[];
}

export interface Transaction {
  timestamp:    string;
  hash:         string;
  owner:        string;
  fee:          string;
  address_from: string;
  address_to:   string;
  network:      string;
  platform:     string;
  tag:          string;
  type:         string;
  success:      boolean;
  actions:      Action[];
}

export interface Action {
  tag:          string;
  type:         string;
  index:        number;
  address_from: string;
  address_to:   string;
  metadata:     Metadata;
  platform:     string;
  related_urls: string[];
}

export interface Metadata {
  id:               string;
  name:             string;
  image:            string;
  symbol:           string;
  standard:         string;
  attributes:       Attribute[];
  collection:       string;
  description:      string;
  value_display:    null;
  contract_address: string;
}

export interface Attribute {
  value:      string;
  trait_type: string;
}

export interface Telegram {
  username:     string | null;
  is_verified:  boolean;
  is_evaluated: boolean;
}
