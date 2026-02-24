import authOptions from "@/app/auth/authOptions";
import { createIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: session.user!.email! },
  });

  if (!user) return NextResponse.json("Invalid user", { status: 404 });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
      userId: user.id,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
