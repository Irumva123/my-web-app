// auth.js - simple stub for demonstration
function authenticate(username, password) {
  // demo: accept any non-empty username/password
  if (!username || !password) return false;
  return true;
}
module.exports = { authenticate };

