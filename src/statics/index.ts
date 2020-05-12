export const EXTENSION_ID = "kfcdhcbocembkiohhbellipdmpmfpebl";
export const SERVER_URL = "https://horizon-testnet.stellar.org";

export enum SERVICE_TYPES {
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
  LOAD_ACCOUNT = "LOAD_ACCOUNT",
  GET_MNEMONIC_PHRASE = "GET_MNEMONIC_PHRASE",
  CONFIRM_MNEMONIC_PHRASE = "CONFIRM_MNEMONIC_PHRASE",
  RECOVER_ACCOUNT = "RECOVER_ACCOUNT",
  CONFIRM_PASSWORD = "CONFIRM_PASSWORD",
  REJECT_ACCESS = "REJECT_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS",
  SIGN_TRANSACTION = "SIGN_TRANSACTION",
  REJECT_TRANSACTION = "REJECT_TRANSACTION",
}

export enum EXTERNAL_SERVICE_TYPES {
  REQUEST_ACCESS = "REQUEST_ACCESS",
  SUBMIT_TRANSACTION = "SUBMIT_TRANSACTION",
}

export enum APPLICATION_STATE {
  APPLICATION_LOADING = "APPLICATION_LOADING",
  APPLICATION_STARTED = "APPLICATION_STARTED",
  PASSWORD_CREATED = "PASSWORD_CREATED",
  MNEMONIC_PHRASE_CONFIRMED = "MNEMONIC_PHRASE_CONFIRMED",
  MNEMONIC_PHRASE_FAILED = "MNEMONIC_PHRASE_FAILED",
}

declare const DEVELOPMENT: string;
const _DEVELOPMENT = DEVELOPMENT;
export { _DEVELOPMENT as DEVELOPMENT };
