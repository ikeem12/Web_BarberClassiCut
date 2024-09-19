/**
 * Validates the login data for username and password.
 *
 * @param {string} username - The username input by the user.
 * @param {string} password - The password input by the user.
 * @returns {Object} - An object containing the validation result.
 * @returns {boolean} isValid - Indicates if the login data is valid.
 * @returns {Array} [errors] - An array of error objects if the data is invalid.
 * @returns {string} errors[].field - The field that has an error ("username" or "password").
 * @returns {string} errors[].error - The type of error ("emptyField" or "notAllowedCharacters").
 */
export function validateLoginData(username, password) {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    const errors = [];

    // Check if the username is empty or contains invalid characters
    if (!username) {
        errors.push({ field: "username", error: "emptyField" });
    } else if (!usernameRegex.test(username)) {
        errors.push({ field: "username", error: "notAllowedCharacters" });
    }

    // Check if the password is empty or contains invalid characters
    if (!password) {
        errors.push({ field: "password", error: "emptyField" });
    } else if (!passwordRegex.test(password)) {
        errors.push({ field: "password", error: "notAllowedCharacters" });
    }

    // Return the validation result
    if (errors.length > 0) {
        return { isValid: false, errors };
    }

    return { isValid: true };
}