"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoadingNewIssuePage() {
  return (
    <div className="container">
      <div className="mb-4">
        <h1>NEW ISSUE</h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input className="fs-3 shadow-primary form-control" />
            </div>
            <div className="mb-4">
              <textarea rows={5} className="fs-3 shadow-primary form-control" />
            </div>

            <button
              type="submit"
              disabled={true}
              className="shadow-primary fs-3 btn btn-primary"
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
