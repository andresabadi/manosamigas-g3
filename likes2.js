const cards = document.querySelectorAll('.card_services_likes_container');

cards.forEach(card => {
  let likesCount = 0;
  let hasLiked = false;
  const likeButton = card.querySelector('.like-button');
  const likesCountElement = card.querySelector('.likes-count');
  const notificationsList = card.querySelector('.notifications-list');
  const notificationMessage = card.querySelector('.notification-message');

  likeButton.addEventListener('click', toggleLike);

  function toggleLike() {
    if (!hasLiked) {
      hasLiked = true;
      likeButton.classList.add('liked');
      likesCount++;
      updateLikes();
      showNotification('¡Has valorado positivamente al trabajador!');
    } else {
      hasLiked = false;
      likeButton.classList.remove('liked');
      likesCount--;
      updateLikes();
      hideNotification();
    }
  }

  function updateLikes() {
    likesCountElement.textContent = likesCount;
  }

  function showNotification(message) {
    notificationMessage.style.display = 'block';
    notificationMessage.textContent = message;
  }

  function hideNotification() {
    notificationMessage.style.display = 'none';
  }
});
