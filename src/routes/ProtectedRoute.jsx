import { Navigate } from "react-router-dom";

/**
 * Protects routes based on access rules.
 * @param {JSX.Element} element - The component to render if access is allowed
 * @param {boolean} isAllowed - Whether access is allowed
 * @param {string} redirectTo - Where to redirect if access is denied
 */
function ProtectedRoute({ element, isAllowed, redirectTo = "/login" }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return element;
}

export default ProtectedRoute;
