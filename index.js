//like-btn + modal
const likeBtns = document.querySelectorAll('.like-btn');
const likeModal = document.getElementById('like-modal');

let isActive = false;

likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', function() {
        isActive = !isActive;

        if (isActive) {
            likeBtn.classList.add('active');
            likeModal.classList.add('open');

            setTimeout(() => {
                likeModal.classList.remove('open');
            }, 2000);
        } else {
            likeBtn.classList.remove('active');
        }
    });
});

document.getElementById("more").addEventListener("click", function() {
    document.getElementById('more-modal').classList.add('open')
})

document.getElementById("close").addEventListener("click", function() {
    document.getElementById('more-modal').classList.remove('open')
})

document.querySelector("#more-modal .more-modal-content").addEventListener("click", event => {
    event._isClickInModal = true;
})

document.getElementById("more-modal").addEventListener('click', event => {
    if (event._isClickInModal) return;
    event.currentTarget.classList.remove("open");
})

