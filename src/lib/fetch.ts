import { AmericanToBritish } from "@/types/amerian2british";
import { ErrorMessage } from "@/types/errorMessage";

export async function fetchWords(): Promise<AmericanToBritish[]> {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/words/british`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch words");
  }
  return res.json();
}

export async function fetchErrorMessage(): Promise<ErrorMessage[]> {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/api/error-message`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch error message");
  }
  return res.json();
}
