//your JS code here. If required.
 function togglePanel(panelNumber) {
    // Remove 'active' class from all panels
    document.querySelectorAll('.panel').forEach(panel => {
      panel.classList.remove('active');
    });

    // Add 'active' class to the clicked panel
    document.getElementById(`panel-${panelNumber}`).classList.add('active');
  }