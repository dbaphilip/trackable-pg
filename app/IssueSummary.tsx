import Link from "next/link";
import { Status } from "./generated/prisma/enums";

interface Props {
  open: number;
  closed: number;
  wip: number;
}

export default function IssueSummary({ open, closed, wip }: Props) {
  const cards: {
    label: string;
    value: number;
    status: Status;
    classname: string;
  }[] = [
    {
      label: "Open",
      value: open,
      status: "OPEN",
      classname: "text-bg-danger",
    },
    {
      label: "In progress",
      value: wip,
      status: "WIP",
      classname: "text-bg-warning",
    },
    {
      label: "Closed",
      value: closed,
      status: "CLOSED",
      classname: "text-bg-success",
    },
  ];

  return (
    <div className="row">
      {cards.map((card) => (
        <div key={card.status} className="col-md-6 mb-4">
          <Link
            className="text-decoration-none"
            href={`/issues?status=${card.status}`}
          >
            <div className="card shadow-tile">
              <div className="card-body">
                <h5 className={`badge fs-3 card-title ${card.classname}`}>
                  {card.label}
                </h5>
                <p className="fs-1 card-text">{card.value}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
