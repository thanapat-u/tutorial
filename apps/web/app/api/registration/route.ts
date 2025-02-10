import { registrationSchema } from "../../libs/schema/registration";

const store: { [key: string]: boolean } = {};

export async function POST(req: Request) {
  const body = await req.json();

  const result = registrationSchema.safeParse(body.data);

  if (!result.success) {
    return Response.json(
      {
        success: false,
        data: result.error,
        message: "request validation failed",
      },
      { status: 400 }
    );
  }

  if (store[result.data.citizen_id] !== undefined) {
    return Response.json(
      {
        success: false,
        message: "citizen id already exist",
      },
      { status: 400 }
    );
  }

  store[result.data.citizen_id] = true;

  return Response.json(
    {
      success: true,
      message: "registration completed",
    },
    { status: 201 }
  );
}
