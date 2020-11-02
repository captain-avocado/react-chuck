import axios, { CancelTokenSource } from 'axios';

interface CancelTokens {
  list: Record<string, CancelTokenSource | null>;
  cancel(tokenKey: string): void;
}

export const cancelTokens: CancelTokens = {
  list: {},

  cancel(tokenKey: string): void {
    if (cancelTokens.list && tokenKey in cancelTokens.list) {
      if (cancelTokens.list[tokenKey]) {
        //eslint-disable-next-line
        cancelTokens.list[tokenKey]!.cancel();
      }
    } else {
      cancelTokens.list[tokenKey] = null;
    }
    cancelTokens.list[tokenKey] = axios.CancelToken.source();
  }
};
