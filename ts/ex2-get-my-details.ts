import { User } from "snyk-api-client";

async function main() {
  try {
    const res = await User.getMyDetails();
    console.log("My details: ", res.response);
  } catch (error) {
    console.error(error);
  }
}

main();
