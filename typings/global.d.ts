declare namespace NodeJS {
  /**
   * Add custom environment variables
   */
  interface ProcessEnv {
    /* Google tag manager (optional), read when pages are served */
    readonly GTAG?: string;
  }
}
