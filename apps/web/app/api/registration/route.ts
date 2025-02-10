import { registrationSchema } from "../../libs/schema/registration";

export async function POST(req: Request) {
  const body = await req.json();

  const validatedBody = registrationSchema.safeParse(body);

  return Response.json(
    {
      body: validatedBody,
    },
    { status: 201 }
  );
}
