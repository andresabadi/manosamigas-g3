let likesCount = 0;
let hasLiked = false;
const likeButton = document.querySelector('.like-button');
const likesCountElement = document.querySelector('.likes-count');
const notificationsList = document.getElementById('notifications-list');
const notificationMessage = document.querySelector('.notification-message');

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
