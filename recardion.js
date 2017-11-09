;(function () {

    var recardion = document.querySelectorAll('.recardion');

    recardion.forEach(function (t, i) {

        recardion[i].onclick = function (event) {

            var target = event.target;
            var h = target.closest('h4');
            if (!h) return;
            if (!recardion[i].contains(h)) return;

            _onClick(h);

            // Останавливаем всплытие события
            event.stopPropagation();
        };

    });


    function _onClick(h) {
        h.parentElement.classList.toggle("active");
    }

})();
