document.addEventListener("DOMContentLoaded", function() {
    const btnHome = document.getElementById('btnBemutatkozas');
    btnHome.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnRoplabda = document.getElementById('btnRoplabda');
    btnRoplabda.addEventListener('click', function() {
        window.location.href = 'roplabda.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnRoplabda = document.getElementById('btnKosarlabda');
    btnRoplabda.addEventListener('click', function() {
        window.location.href = 'kosarlabda.html'; 
    });
});
