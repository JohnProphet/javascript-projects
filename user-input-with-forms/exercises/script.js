<script>
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        let testName = document.querySelector("input[name=testName]");
        let testDate = document.querySelector("input[name=testDate]");
        let rocketType = document.querySelector("input[name=rocketType]");
        let numRocketBoosters = document.querySelector("input[name=numRocketBoosters]");
        let windRating = document.querySelector("input[name=windRating]");
        let productionServers = document.querySelector("input[name=productionServers]");
        if (testName.value === "" || testDate.value === "" || rocketType === "" || numRocketBoosters === "" || windRating === "" || productionServers === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
        }
        });
    });
</script>