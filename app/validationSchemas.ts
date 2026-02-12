import z from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(3, "Title is too short").max(255),
  description: z.string().min(3, "Description is too short"),
});