"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import { Issue } from "@/app/generated/prisma/client";
import { updateIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  issue: Issue;
}

const statuses = ["OPEN", "CLOSED", "WIP"];

export default function EditIssueForm({ issue }: Props) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateIssueSchema),
  });

  const onEdit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.patch(`/api/issues/${issue.id}`, data);
      router.push(`/issues/${issue.id}`);
    } catch (e) {
      setError("SORRY, SOMETHING WENT WRONG");
      setSubmitting(false);
    }
  });

  return (
    <div className="arch container">
      <div className="mb-4">
        {!error && <h1 className="fw-bold">EDIT ISSUE</h1>}
        {error && <h1 className="text-danger">{error}</h1>}
      </div>

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={onEdit}>
            <div className="mb-3">
              <input
                defaultValue={issue.title}
                {...register("title")}
                className="brico fs-3 shadow-primary form-control"
              />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </div>

            <div className="mb-4">
              <select
                defaultValue={issue.status}
                {...register("status")}
                className="fs-3 shadow-primary form-select"
                aria-label="Default select example"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <textarea
                placeholder="DESCRIPTION"
                defaultValue={issue.description}
                {...register("description")}
                rows={5}
                className="brico fs-3 shadow-primary form-control"
              />
              <ErrorMessage>{errors.description?.message}</ErrorMessage>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="fw-bold shadow-primary fs-3 btn btn-primary"
            >
              UPDATE
            </button>
          </form>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}
    </div>
  );
}
