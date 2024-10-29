import React from "react";

export default function Error() {
  function handleGoBack() {
    window.history.back(); // Navigate back to the previous page
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="display-4 text-danger">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="text-muted mb-4">
        Sorry, the page you are looking for does not exist or an error has
        occurred.
      </p>
      <button className="btn btn-primary" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}
