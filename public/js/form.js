/*(function () {
    const Methods = {
 
        }
    };


    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        const textElement = document.getElementById("text");

        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];     

        const resultContainer = document.getElementById("result-container");
        const resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", (event) => {
            event.preventDefault();

            try {
                // hide containers by default
            
                resultTextElement.textContent = result;
                resultContainer.classList.remove("hidden");
                errorTextElement.textContent = "";

            } catch (e) {
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
                resultTextElement.textContent ="";
            }
        });
    }
})();*/