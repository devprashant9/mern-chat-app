const userEmailValidator = (email) => {
    if (typeof email !== 'string') {
        return {
            isValid: false,
            errorMessage: 'Input must be a string',
        };
    }

    // Trim and check empty
    const trimmed = email.trim();
    if (!trimmed) {
        return {
            isValid: false,
            errorMessage: 'Email cannot be empty',
        };
    }

    // Basic email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
        return {
            isValid: false,
            errorMessage: 'Invalid email format',
        };
    }

    return {
        isValid: true,
        errorMessage: '',
    };
};

export { userEmailValidator };
