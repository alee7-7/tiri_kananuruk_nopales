const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  //==============================================================
  //❓Create a new speech recognition
  //==============================================================
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";          // Set language to English
    recognition.continuous = true;       // Keep listening until stopped
    recognition.interimResults = true;   // Show partial results while speaking

  //==============================================================
  //❓Start recognition when "#startBtn" button is clicked
  //==============================================================
    document.querySelector("#startBtn").addEventListener("click", () => {
      recognition.start(); // Start listening
      document.querySelector("#startBtn").style.display = "none"; // Hide button after click
    });

  //==============================================================
  //✅ Define keywords and what happens when they are spoken

    // (Welcome) Tiri Kananuruk to a (guest lecture) on (February 27), at (4:30pm). 
    // Meet her at (room 410) at (808) commonwealth avenue or on (zoom). (See you then!)
  
  //==============================================================
    const keywords = {
      "Welcome": () => {
        document.querySelector("#mainText").className = "variable0";
        document.querySelector("#image").src = "./img/A1.png"
        document.body.style.backgroundColor = rgb(115, 63, 28);
      },
      "guest lecture": () => {
        document.querySelector("#mainText").className = "variable1";
        document.querySelector("#image").src = "./img/A2.png"
        document.body.style.backgroundColor = "tan";
      },
      "February 27": () => {
        document.querySelector("#mainText").className = "variable2";
        document.querySelector("#image").src = "./img/A3.png"
        document.body.style.backgroundColor = "beige";
      },
      "4:30": () =>{
        document.querySelector("#mainText").className = "variable3";
        document.querySelector("#image").src = "./img/A4.png"
        document.body.style.backgroundColor = rgb(115, 63, 28);
      },
      "room 410": () =>{
        document.querySelector("#mainText").className = "variable4";
        document.querySelector("#image").src = "./img/A5.png"
        document.body.style.backgroundColor = "tan";
      },
      "808": () =>{
        document.querySelector("#mainText").className = "variable5";
        document.querySelector("#image").src = "./img/A6.png"
        document.body.style.backgroundColor = "beige";
      },
      "on Zoom": () =>{
        document.querySelector("#mainText").className = "variable6";
        document.querySelector("#image").src = "./img/A7.png"
        document.body.style.backgroundColor = "tan";
      },
      "See you then": () =>{
        document.querySelector("#mainText").className = "variable7";
        document.querySelector("#image").src = "./img/D.gif"
        document.querySelector("#mainText").textContent = "Tiri Kananuruk";
        document.body.style.backgroundColor = "tan";
      },
    };


  //==============================================================
  //❓Process recognized speech results
  //==============================================================
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      document.querySelector("#mainText").textContent = transcript; // Show what user said
      const lowerTranscript = transcript.toLowerCase();
      for (const key in keywords) { 
        if (lowerTranscript.includes(key.toLowerCase())) { // Check if keyword is spoken
          document.querySelector("#mainText").textContent = key; // Display the keyword
          keywords[key](); // Run the keyword action
          break; // Stop checking after first match
        }
      }
    };

  //==============================================================
  //❓Restart recognition automatically when it ends
  //==============================================================
    recognition.onend = () => {
      recognition.start();
    };

  //==============================================================
}
