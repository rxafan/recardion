;(function () {
    var recardion = document.querySelectorAll('.recardion h4');

    recardion.forEach(function (t, i) {
        recardion[i].onclick =  _onClick;
    });

    function _onClick() {
        this.parentElement.classList.toggle("active");
    }

})();