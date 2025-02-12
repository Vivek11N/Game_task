
window.onload = function() {
    // Show the logo for 3 seconds before showing the arena buttons
    const logo = document.getElementById('logo');
    const choices = document.getElementById('choices');

    // Show the logo for 3 seconds
    setTimeout(function() {
        logo.style.display = 'none'; // Hide the logo
        choices.style.display = 'block'; // Show the arena buttons
    }, 3000); // 3 seconds
}
// Function to check the selected answer
function checkAnswer(optionIndex, arena) {
    const stage = stages[arena][currentStage - 1]; // Get the current stage based on the arena

    if (stage.options[optionIndex].isCorrect) {
        // If the answer is correct, go to the next stage
        
        nextStage(arena);
    } else {
        // If the answer is wrong, give feedback
        showInfectionFeedback(arena);
    }
}



let currentStage = 0;
const stages = {
    train: [
        { 
            description: "Find the train ticket hidden in the abandoned station.",
            success: null, 
            image: "1.jpeg", 
            options: [
                { text: "Look under the floorboards", isCorrect: true },
                { text: "Search the cabinet", isCorrect: false },
                { text: "Check the clock", isCorrect: false },
                { text: "Open the safe", isCorrect: false }
            ]
        },
        { 
            description: "Fix the broken train engine before zombies arrive.", 
            success: null, 
            image: "2.jpeg", 
            options: [
                { text: "Check the fuel levels", isCorrect: false },
                { text: "Replace a broken part", isCorrect: false },
                { text: "Turn on the engine power", isCorrect: true },
                { text: "Call for maintenance", isCorrect: false }
            ]
        },
        { 
            description: "Defend yourself from an infected passenger!", 
            success: null, 
            image: "3.jpeg", 
            options: [
                { text: "Fight the infected with a knife", isCorrect: false },
                { text: "Try to escape by running", isCorrect: false },
                { text: "Shoot them with a gun", isCorrect: true },
                { text: "Throw a bottle to distract them", isCorrect: false }
            ]
        },
        { 
            description: "The train finally arrives at a safer location, the survivors are free to enjoy.",
            success: true,  
            image: "4.jpeg", 
            options: null 
        }
    ],
    military: [
        { 
            description: "Locate the secret keycard to open the military base's main gate.",
            success: null, 
            image: "ml3.png", 
            options: [
                { text: "Search the guard's locker", isCorrect: false },
                { text: "Jump the wall of military base", isCorrect: true },
                { text: "Look in the armory", isCorrect: false },
                { text: "Ask a soldier for help", isCorrect: false }
            ]
        },
        { 
            description: "Defend the base's entrance from a zombie horde.", 
            success: null, 
            image: "45.jpeg", 
            options: [
                { text: "Use the mounted machine gun", isCorrect: true },
                { text: "Take cover and wait", isCorrect: false },
                { text: "Throw grenades", isCorrect: false },
                { text: "Fight hand-to-hand", isCorrect: false }
            ]
        },
        { 
            description: "Repair the helicopter before escaping.", 
            success: null, 
            image: "13.jpeg", 
            options: [
                { text: "Fix the rotor blades", isCorrect: false },
                { text: "Check the fuel levels", isCorrect: false },
                { text: "Activate the emergency override", isCorrect: true },
                { text: "Search for repair tools", isCorrect: false }
            ]
        },
        { 
            description: "The military successfully evacuates, you're safe at last.",
            success: true,  
            image: "14.jpeg", 
            options: null 
        }
    ],
    tunnel: [
        { 
            description: "Find your way through the underground tunnel system.",
            success: null, 
            image: "78.png", 
            options: [
                { text: "Follow the left path", isCorrect: false },
                { text: "Follow the right path", isCorrect: true },
                { text: "Climb the ladder", isCorrect: false },
                { text: "Stay put and wait for help", isCorrect: false }
            ]
        },
        { 
            description: "You reach a locked door that requires a code to open. There are no obvious ways to unlock it.",
            success: null, 
            image: "86.png", 
            options: [
                { text: "Try entering random numbers", isCorrect: false },
                { text: "Search for a hidden clue on the walls", isCorrect: true },
                { text: "Look for a keycard nearby", isCorrect: false },
                { text: "Force the door open with your shoulder", isCorrect: false }
            ]
        },
        { 
            description: "Defend against zombies in the dark, narrow passage.",
            success: null, 
            image: "56.jpeg", 
            options: [
                { text: "Use a flashlight to blind them", isCorrect: false },
                { text: "Fight them with a crowbar", isCorrect: true },
                { text: "Use a grenade", isCorrect: false },
                { text: "Run past them", isCorrect: false }
            ]
        },
        { 
            description: "Escape through the tunnel's emergency exit.",
            success: true,  
            image: "88.png", 
            options: null 
        }
    ],
    rooftop: [
        { 
            description: "Activate the rooftop emergency signal to call for a helicopter.",
            success: null, 
            image: "rf1.png", 
            options: [
                { text: "Press the big red button", isCorrect: true },
                { text: "Look for a phone", isCorrect: false },
                { text: "Use the radio", isCorrect: false },
                { text: "Throw a flare", isCorrect: false }
            ]
        },
        { 
            description: "Defend yourself from the infected while waiting for the helicopter.",
            success: null, 
            image: "rf2.jpeg", 
            options: [
                
                { text: "Throw objects at them", isCorrect: false },
                { text: "Run to the other side of the roof", isCorrect: false },
                { text: "Shoot them from a distance", isCorrect: true },
                { text: "Use a smoke grenade", isCorrect: false }
            ]
        },
        { 
            description: "The helicopter lifts off as the rooftop becomes overrun with zombies. You make your escape, but there’s one final hurdle—the chopper has to fly through a storm!",
            success: true,  
            image: "rfh.jpeg", 
            options: [
                { text: "Try to shoot the zombies clinging to the helicopter", isCorrect: false },
                { text: "Brace for impact as the storm intensifies", isCorrect: true },
               
                { text: "Close your eyes and hope for the best", isCorrect: false },
                { text: "Jump off the helicopter to escape the storm", isCorrect: false }
            ]
        
        
        },
        { 
            description: "Escape successfully with the helicopter.",
            success: true,  
            image: "rff.png", 
            options: null 
        }
    ]
};

// Function to load the chosen arena and start the game
// Function to load the chosen arena and start the game
function loadArena(arena) {
    currentStage = 0; // Reset to the first stage
    const gameStage = document.getElementById('game-stage');
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');
    // Clear choices after selecting
    choices.innerHTML = '';

    switch (arena) {
        case 'train':
            story.innerHTML = 'You are at the train station. You must board the train before the zombies overrun the station. Solve the puzzle to open the gate!';
            nextStage('train'); // Start the train escape sequence
            break;
        case 'military':
            story.innerHTML = 'You arrive at the military base. They are evacuating survivors, but they won’t let anyone through unless you pass their security challenge.';
            // Call a function to start the military arena
            nextStage('military');
            break;
        case 'tunnel':
            story.innerHTML = 'The underground tunnels are dark and dangerous. Solve the escape route puzzle to find the exit before time runs out!';
            // Call a function to start the tunnel escape
            nextStage('tunnel');
            break;
        case 'rooftop':
            story.innerHTML = 'The rooftop is surrounded by zombies, and the helicopter is running out of time. Solve the helicopter puzzle to escape!';
            // Call a function to start the rooftop escape
            nextStage('rooftop');
            break;
        default:
            story.innerHTML = 'Invalid choice. Please select an escape route!';
            break;
    }
    
    // Show the details section
    gameStage.style.display = 'block'; // Ensure the game stage is visible
}


// Function to start the game and display the first stage
function startEscape(arena) {
    currentStage = 0;  // Reset to the first stage
    nextStage(arena);  // Move to the next stage
}
function startGame() {

    

    document.getElementById("intro-container").addEventListener("click", function() {
        const introAudio = document.getElementById("intro-audio");
        
        // Play the audio when the user clicks
        introAudio.play();
    
        // Hide the intro screen and show the game screen after the audio starts
        document.getElementById("intro-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";})
}

/// Function to load the next stage based on current progress
function nextStage(arena) {
    if (currentStage < stages[arena].length) {
        const stage = stages[arena][currentStage];
        let stageContent = `<p>${stage.description}</p>`; // Fix: use backticks for template literals

        if (stage.image) {
            stageContent += 
                `<div class="card">
                    <img src="${stage.image}" alt="Stage Image">
                </div>`;
        }

        if (stage.options) {
            stageContent += '<div class="options">';
            stage.options.forEach((option, index) => {
                stageContent += `<button onclick="checkAnswer(${index}, '${arena}')">${option.text}</button>`; // Fix: use backticks
            });
            stageContent += '</div>';
        } else if (stage.success !== null) {
            stageContent += `<button onclick="nextStage('${arena}')">Next</button>`; // Fix: use backticks
        }

        document.getElementById("game-stage").innerHTML = stageContent;
        currentStage++;
    } else {
        // Redirect to the arena selection page once the game is completed
        document.getElementById("game-stage").innerHTML = 
            `<h2>The escape was successful! Survivors are free to enjoy!</h2>
            <button onclick="window.location.href='index.html'">Play Again</button>`; // Fix: use backticks
    }
}
function showInfectionFeedback(arena) {
    const gameStage = document.getElementById("game-stage");
    const feedbackContent = `
        <h2>Oh no! You've made the wrong choice...</h2>
        <p>You have been infected by the zombie virus and have turned into a zombie!</p>
        <button onclick="window.location.href='index.html'">Go Back to Arena Selection</button>
    `;
    gameStage.innerHTML = feedbackContent; // Update the game stage with the infection message
}