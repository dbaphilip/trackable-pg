import authOptions from "@/app/auth/authOptions";
import { updateIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import delay from "delay";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = updateIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const { id } = await context.params;
  let issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const { title, description, status } = body;

  const user = await prisma.user.findUnique({
    where: { email: session.user!.email! },
  });

  if (!user) return NextResponse.json("Invalid user", { status: 404 });

  issue = await prisma.issue.update({
    where: { id: issue.id },
    data: { title, description, status, userId: user.id },
  });

  return NextResponse.json(issue);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const { id } = await context.params;
  await delay(5000);
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) return NextResponse.json("Invalid issue", { status: 404 });
  await prisma.issue.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({});
}
