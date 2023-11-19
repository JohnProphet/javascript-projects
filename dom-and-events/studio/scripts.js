window.addEventListener("load",  function(event) 
{
  const takeoff = this.document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const landing = document.getElementById("landing");
  const abort = document.getElementById("missionAbort");
  const rocket = this.document.getElementById("rocket");
  const up = this.document.getElementById("up");
  const down = this.document.getElementById("down");
  const left = this.document.getElementById("left");
  const right = this.document.getElementById("right");
  rocket.style.position = "absolute";
  rocket.style.bottom = "0px";
  rocket.style.left = "250px";

  takeoff.addEventListener("click", function(event) 
  {
      let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirm) 
    {
      console.log("confirmed");
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
    }
  });
  
  landing.addEventListener("click", function(event) 
  {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      rocket.style.bottom = "0px";
      rocket.style.left = "250px";
  });

  abort.addEventListener("click", function(event) 
  {
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if (confirm) 
    {
      flightStatus.innerHTML = "Mission aborted";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      rocket.style.bottom = "0px";
      rocket.style.left = "250px";
    }
  });

  up.addEventListener("click", function(event) 
  {
    if(shuttleHeight.innerHTML < 250000) 
    {
      let move = String(parseInt(rocket.style.bottom) + 10) + 'px';
      rocket.style.bottom = move;
      shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
    }   
  });

  down.addEventListener("click", function(event) 
  {
    if(shuttleHeight.innerHTML > 0) 
    {
      let move = String(parseInt(rocket.style.bottom) - 10) + 'px';
      rocket.style.bottom = move;
      shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) - 10000);
    }
  });

  left.addEventListener("click", function(event) 
  {
    if(parseInt(rocket.style.left) > 0) 
    {
      let move = String(parseInt(rocket.style.left) - 10) + 'px';
      rocket.style.left = move;
    }
  });

  right.addEventListener("click", function(event) 
  {
      if(parseInt(rocket.style.left) < 500) 
      {
        let move = String(parseInt(rocket.style.left) + 10) + 'px';
        rocket.style.left = move;
      }
  });

});