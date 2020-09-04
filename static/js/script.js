(function(){
    const analyseBTN = document.querySelector('.main-action input[type="button"]');
    const analyseTEXT = document.querySelector('.main-action input[type="text"]');
    const resultContainer = document.querySelector('.result-container');
    const loadingDIV = resultContainer.querySelector('.spinner-grow');
    const container = resultContainer.querySelector('.container');

    analyseBTN.addEventListener("click", function(){
        resultContainer.classList.add('text-center');
        container.classList.add('d-none');
        loadingDIV.classList.remove("d-none");
    }, false);

    stopLoading = function(){
        resultContainer.classList.remove('text-center');
        container.classList.remove('d-none');
        loadingDIV.classList.add("d-none");
    }

})();