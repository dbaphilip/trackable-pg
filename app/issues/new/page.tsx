"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewIssuePage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createIssueSchema),
  });

  const onCreate = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      const newIssueResp = await axios.post("/api/issues", data);
      const newIssue = newIssueResp.data;
      router.push(`/issues/${newIssue.id}`);
    } catch (e) {
      setError("Please sign in");
      setSubmitting(false);
    }
  });

  return (
    <div className="container">
      <div className="brico mb-4">
        {!error && <h1 className="fw-bold">new issue</h1>}
        {error && <h1 className="fw-bold text-danger">{error}</h1>}
      </div>

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={onCreate}>
            <div className="mb-3">
              <input
                placeholder="TITLE"
                {...register("title")}
                className="brico fs-3 shadow-primary form-control"
              />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="DESCRIPTION"
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
              SUBMIT
            </button>
          </form>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}
    </div>
  );
}
