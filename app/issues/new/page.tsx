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

  const atSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (e) {
      setError("SORRY, SOMETHING WENT WRONG");
      setSubmitting(false);
    }
  });

  return (
    <div className="container">
      <div className="mb-4">
        {!error && <h1>New Issue</h1>}
        {error && <h1 className="text-danger">{error}</h1>}
      </div>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={atSubmit}>
            <div className="mb-3">
              <input
                {...register("title")}
                className="fs-3 shadow-primary form-control"
              />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </div>
            <div className="mb-4">
              <textarea
                {...register("description")}
                rows={5}
                className="fs-3 shadow-primary form-control"
              />
              <ErrorMessage>{errors.description?.message}</ErrorMessage>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="shadow-primary fs-3 btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}
    </div>
  );
}
