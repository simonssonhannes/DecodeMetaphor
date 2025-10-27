// Data structure for the metaphor analysis
const metaphorData = {
    // Key matches the data-metaphor attribute in HTML
    drunkna: {
        text: "Sverige håller på att drunkna",
        conceptual: "The Nation is a Body / Illness. The source domain is WATER / DROWNING, implying complete loss of control and imminent death.",
        rhetorical: "This creates **Pathos** (emotion), evoking fear and crisis. It bypasses rational debate by presenting the situation as a life-or-death emergency."
    },
    livbat: {
        text: "SD är det enda livbåten",
        conceptual: "The Political Party is a Vessel / Savior. This extends the 'DROWNING' metaphor, making the party the only source of salvation.",
        rhetorical: "This establishes a **Dichotomy** (us vs. them) where one party holds the sole key to survival, legitimizing extreme measures and delegitimizing all other parties."
    },
    krig: {
        text: "förlorat kriget om landet",
        conceptual: "Politics is War. This is a common conceptual metaphor where opposition is the enemy and policy is strategy.",
        rhetorical: "It increases the sense of urgency and **stakes**, framing the political struggle not as an election, but as a violent conflict. This justifies aggression and uncompromising positions."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const metaphorPhrases = document.querySelectorAll('.metaphor-phrase');
    const sidebar = document.getElementById('metaphor-sidebar');
    const closeButton = document.getElementById('close-sidebar-btn');

    // Function to open the sidebar with content
    function openSidebar(key) {
        const data = metaphorData[key];

        if (data) {
            document.getElementById('metaphor-text').textContent = `"${data.text}"`;
            document.getElementById('conceptual-metaphor').textContent = data.conceptual;
            document.getElementById('rhetorical-effect').textContent = data.rhetorical;

            // Show the sidebar
            sidebar.classList.remove('sidebar-hidden');
            
            // Optional: Move main content (if you add the CSS for it)
            // document.body.classList.add('main-content-shifted');
        }
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.add('sidebar-hidden');
        // document.body.classList.remove('main-content-shifted');
    }

    // Add event listeners to all metaphor phrases
    metaphorPhrases.forEach(phrase => {
        phrase.addEventListener('click', () => {
            const metaphorKey = phrase.getAttribute('data-metaphor');
            openSidebar(metaphorKey);
        });
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', closeSidebar);

    // Close sidebar if the user presses the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !sidebar.classList.contains('sidebar-hidden')) {
            closeSidebar();
        }
    });
});
