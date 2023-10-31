// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function() {
    const flightStatus = document.getElementById("flightStatus");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeoff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    // console.log("page is fully loaded");

    takeoff.addEventListener("click", function() {

      let response = window.confirm("Confirm that the shuttle is ready for takeoff."); // returns boolean true or false
      if (response == true) {
        shuttleBackground.style.backgroundColor = "skyblue";
        flightStatus.innerHTML = "Shuttle in flight";
        spaceShuttleHeight.innerHTML = "10000";
      }
    });
    
    landing.addEventListener("click", function () {
      let response = window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The Shuttle has landed";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = "0";
    })

    missionAbort.addEventListener("click", function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response == true) {
            flightStatus.innerHTML = "Mission Aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    });

    let up = this.document.getElementById("up");
    up.addEventListener("click", function () {
    if(spaceShuttleHeight.innerHTML != "25000") {
        movement = parseInt(rocket.style.bottom) +10 + "px";
        rocket.style.bottom=movement;
        spaceShuttleHeight.innerHTML=parseInt(shuttleHeight.innerHTML) + 10000;
    }
    })  
    let down = this.document.getElementById("down");
    down.addEventListener("click", function () {
    if(spaceShuttleHeight.innerHTML != "25000") {
        movement = parseInt(rocket.style.bottom) -10 + "px";
        rocket.style.bottom=movement;
        spaceShuttleHeight.innerHTML=parseInt(shuttleHeight.innerHTML) - 10000;
    }
    })

})