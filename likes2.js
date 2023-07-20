let likesCount = 0;
let hasLiked = false;
const likeButton = document.querySelector('.like-button');
const likesCountElement = document.querySelector('.likes-count');
const notificationsList = document.getElementById('notifications-list');

likeButton.addEventListener('click', toggleLike);

function toggleLike() {
  if (!hasLiked) {
    hasLiked = true;
    likeButton.classList.add('liked');
    likesCount++;
    showNotification('¡Has valorado positivamente al trabajador!');
  } else {
    hasLiked = false;
    likeButton.classList.remove('liked');
    likesCount--;
    // showNotification('Has quitado tu valoración al trabajador.');
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
