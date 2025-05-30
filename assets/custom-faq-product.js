document.addEventListener('DOMContentLoaded', function () {
    const questionContainers = document.querySelectorAll('.faq-question-container');

    questionContainers.forEach((question) => {
      question.addEventListener('click', function () {
        const answer = this.nextElementSibling;

        // Close all other open items
        questionContainers.forEach((otherQuestion) => {
          const otherAnswer = otherQuestion.nextElementSibling;

          if (otherAnswer !== answer) {
            otherAnswer.classList.remove('open');
            otherQuestion.classList.remove('open');
          }
        });

        // Toggle the clicked item
        const isOpen = answer.classList.contains('open');
        answer.classList.toggle('open', !isOpen);
        this.classList.toggle('open', !isOpen);
      });
    });
  });
