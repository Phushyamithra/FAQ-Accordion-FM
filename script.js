document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    // console.log('Questions:', questions); // Debug log to check if elements are selected
    questions.forEach((question) => {
        question.addEventListener('click', () => {
            // Toggle the 'active' class
            question.classList.toggle('active');
            // Toggle the answer visibility
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});
