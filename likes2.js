let likesCount = 0;
const likeButton = document.querySelector('.like-button');
const likesCountElement = document.querySelector('.likes-count');
const notificationsList = document.getElementById('notifications-list');

likeButton.addEventListener('click', toggleLike);

function toggleLike() {
  if (likeButton.classList.contains('liked')) {
    likeButton.classList.remove('liked');
    likesCount--;
  } else {
    likeButton.classList.add('liked');
    likesCount++;
    showNotification('¡Has valorado positivamente a un profesional!');
  }

  likesCountElement.textContent = likesCount;
}

function showNotification(message) {
  const notification = document.createElement('li');
  notification.textContent = message;
  notificationsList.appendChild(notification);

  // Eliminar la notificación después de 3 segundos
  setTimeout(() => {
    notification.remove();
  }, 3000);
}