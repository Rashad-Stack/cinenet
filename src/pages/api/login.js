import { magicAdmin } from "@/lib/magic-sever";

const login = async (req, res) => {
  if (req.method === "POST") {
    try {
      const bToken = req.headers.authorization;
      const DIDToken = bToken ? bToken.substr(7) : "";
      console.log("🚀 ~ file: login.js:7 ~ login ~ DIDToken", DIDToken);
      const metadata = await magicAdmin.users.getMetadataByToken(DIDToken);
      res.json({ status: "success", result: metadata });
    } catch (error) {
      console.log("🚀 ~ file: login.js:12 ~ login ~ error", error);
      res.json({ status: "Failed", message: error });
    }
  } else {
    res.json({ status: "failed", message: "Accept only post request" });
  }
};

export default login;
