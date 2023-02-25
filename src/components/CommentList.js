import { Comment } from "./Comment";
import "../styles.css";

export function CommentList({ comments }) {
  if (comments === null) {
    return <></>;
  } else {
    return comments.map((comment) => (
      <div key={comment.id} className="comment-stack">
        <Comment {...comment} />
      </div>
    ));
  }
}
