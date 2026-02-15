import { updateIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import delay from "delay";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const body = await request.json();
  const validation = updateIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const { id } = await context.params;
  let issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const { title, description, status } = body;

  issue = await prisma.issue.update({
    where: { id: issue.id },
    data: { title, description, status },
  });

  return NextResponse.json(issue);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  await delay(5000);
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) return NextResponse.json("Invalid issue", { status: 404 });
  await prisma.issue.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({});
}
