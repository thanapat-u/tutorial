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

  const fullname = result.data.first_name + " " + result.data.last_name;
  if (store[fullname] !== undefined) {
    return Response.json(
      {
        success: false,
        message: "user already exists",
      },
      { status: 400 }
    );
  }

  store[fullname] = true;

  return Response.json(
    {
      success: true,
      message: "registration completed",
    },
    { status: 201 }
  );
}
