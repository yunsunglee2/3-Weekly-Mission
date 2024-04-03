import TimeDiff from "@/components/util/util";

function TimeAgo({ time }) {
  return <div className="timeDiff">{TimeDiff(time)}</div>;
}

export default TimeAgo;
