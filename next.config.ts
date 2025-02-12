import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    env: {
        GOOGLE_CLIENT_ID: "750328625141-mp9f99753car31gj3447b9ng7ealrq8b.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",

        NEXTAUTH_SECRET: "WX4P90QcFw64te+VG8HtZIhgkUPOslybMVA4SUtEnSk=",
        NEXTAUTH_URL: "http://localhost:3000",
    }
};

export default nextConfig;
