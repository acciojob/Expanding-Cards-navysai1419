//your JS code here. If required.
function expandCard(panelNumber) {
        // Reset all panels to default state
        for (let i = 1; i <= 5; i++) {
            const panel = document.getElementById(`panel-${i}`);
            panel.classList.remove('active');
        }

        // Expand the clicked panel
        const activePanel = document.getElementById(`panel-${panelNumber}`);
        activePanel.classList.add('active');
    }