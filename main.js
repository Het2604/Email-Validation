function validateEmail() {
    const emailInput = document.getElementById('email');
    const resultMessage = document.getElementById('result');

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    if (emailRegex.test(emailInput.value)) {
        resultMessage.style.color = 'green';
        resultMessage.textContent = 'Valid email address.';
    } else {
        resultMessage.style.color = 'red';
        resultMessage.textContent = 'Invalid email address. Please enter a valid email.';
    }
}
