"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  issueId: number;
  onError: (hasError: boolean) => void;
}

export default function DeleteIssueButton({ issueId, onError }: Props) {
  const router = useRouter();
  const [isDeleting, setDeleting] = useState(false);

  return (
    <>
      {/* Button trigger modal */}

      <button
        disabled={isDeleting}
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
        className="fw-bold brico btn btn-danger shadow-primary fs-3"
      >
        delete
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="brico modal-dialog">
          <div className="modal-content">
            <div className="fs-2 modal-body">Are you sure?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="fw-bold fs-4 shadow-primary btn btn-secondary"
                data-bs-dismiss="modal"
              >
                cancel
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="fs-4 shadow-primary fw-bold btn btn-danger"
                onClick={async () => {
                  try {
                    setDeleting(true);
                    await axios.delete(`/api/issues/${issueId}`);
                    router.push("/issues");
                    router.refresh();
                  } catch (error) {
                    onError(true);
                    setDeleting(false);
                  }
                }}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
