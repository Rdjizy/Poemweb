document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("imageModal");

    var modalImg = document.getElementById("modalImage");

    var span = document.getElementsByClassName("close-button")[0];

    var thumbnails = document.querySelectorAll('.poem-thumbnail');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            var captionText = document.getElementById("modalCaption");
            captionText.innerHTML = this.alt;
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    if (dropbtn) {
        dropbtn.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownContent.classList.toggle('show');
        });
    }

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && (!event.target.closest('.dropdown-content'))) {
            if (dropdownContent && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    document.querySelector('html').style.scrollBehavior = 'smooth';
});