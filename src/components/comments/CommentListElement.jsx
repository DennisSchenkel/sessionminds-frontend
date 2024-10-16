import styles from "../../assets/styles/ItemList.module.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axiosInstance from "../../api/axiosDefault";

export default function CommentListElement({ comment, onDeletingComment }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Handle the deletion of a comment
  const handleDelete = async () => {
    // Send the delete request to the API
    try {
      const response = await axiosInstance.delete(`/comments/${comment.id}/`);
      // Call the onDeletingComment function if it was passed
      if (response.status === 204 || response.status === 200) {
        onDeletingComment(comment.id, "Comment deleted successfully.", "info");
      }
      // Handle any errors
    } catch (error) {
      onDeletingComment(
        comment.id,
        "Error when deleting the comment. Please try again later.",
        "danger"
      );
      // Close the modal
    } finally {
      setShowDeleteModal(false);
    }
  };

  // Render the comment element
  return (
    <>
      <div className="row pb-5">
        <div className="col-auto">
          <Image
            src={comment.profile.image}
            width={50}
            height={50}
            alt={`Profile image of ${comment.profile.first_name} ${comment.profile.last_name}`}
            className="rounded-circle"
          />
        </div>
        <div className="col-auto">
          <div className="pt-1 pb-2">
            <h4>
              {comment.profile.first_name} {comment.profile.last_name}
            </h4>
            <span className={`${styles["list-item-desc-misc"]}`}>
              {comment.created_at}
            </span>
          </div>
          <div>
            <p className="mb-0">{comment.text}</p>
            {comment.profile.is_owner ? (
              <Link
                className={`${styles["list-item-desc-misc"]} text-danger`}
                onClick={() => setShowDeleteModal(true)}
              >
                Delete comment
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Deleting comment...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you really want to delete this comment?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              type="delete"
              aria-label="Delete Comment"
              onClick={handleDelete}
            >
              Delete Comment!
            </Button>

            <Link onClick={() => setShowDeleteModal(false)}>
              <Button variant="primary" aria-label="Keep Comment">
                No, keep it!
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
