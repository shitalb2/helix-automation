export{};

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "dev" | "uat" | "demo",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}