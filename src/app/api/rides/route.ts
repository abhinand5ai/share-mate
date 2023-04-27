import { rideFactoryContract, getRideContract } from "@/ethereum/rides"



export async function GET(request: Request): Promise<Response> {
  // get the URL parameter address and query for it
  const rides = [1, 2, 3, 4]

  const response = new Response(JSON.stringify(rides), {
    headers: { "content-type": "application/json" },
  });
  return response;
}
