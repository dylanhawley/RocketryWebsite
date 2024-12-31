// Function to format date with timezone
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to create launch status badge
function getStatusBadge(status) {
    const statusColors = {
        'Go': '#00C853',
        'Success': '#00C853',
        'TBC': '#FF9800',
        'TBD': '#FF9800',
        'Hold': '#F44336',
        'Failure': '#F44336',
        'Partial Failure': '#FF9800',
        'In Flight': '#2196F3'
    };
    
    const backgroundColor = statusColors[status] || '#757575';
    return `<span style="background: ${backgroundColor}; color: white; padding: 4px 8px; border-radius: 6px; font-size: 0.875rem; font-weight: 500;">${status}</span>`;
}

// Function to create launch card with more details
function createLaunchCard(launch) {
    const probability = launch.probability !== null ? `${launch.probability}%` : 'N/A';
    const weatherConcerns = launch.weather_concerns || 'No concerns reported';
    
    return `
        <div class="launch-card" style="background: var(--card-background); padding: 1.5rem; border-radius: 16px; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.25rem;">${launch.name}</h3>
                ${getStatusBadge(launch.status.name)}
            </div>
            <div style="display: grid; gap: 1rem;">
                <p><strong style="color: var(--text-color);">Launch Provider:</strong> <span style="color: var(--text-secondary)">${launch.launch_service_provider.name}</span></p>
                <p><strong style="color: var(--text-color);">Date:</strong> <span style="color: var(--text-secondary)">${formatDate(launch.net)}</span></p>
                <p><strong style="color: var(--text-color);">Location:</strong> <span style="color: var(--text-secondary)">${launch.pad.name}, ${launch.pad.location.name}</span></p>
                <p><strong style="color: var(--text-color);">Mission:</strong> <span style="color: var(--text-secondary)">${launch.mission ? launch.mission.description : 'Mission details unavailable'}</span></p>
                <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">
                    <p><strong style="color: var(--text-color);">Weather:</strong></p>
                    <p style="color: var(--text-secondary); margin-top: 0.5rem;">Concerns: ${weatherConcerns}</p>
                    <p style="color: var(--text-secondary);">Launch Probability: ${probability}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to fetch and populate launches
async function populateLaunches() {
    const launchList = document.getElementById('launch-list');
    if (!launchList) return;

    try {
        // Show loading state
        launchList.innerHTML = '<div style="text-align: center; color: var(--text-secondary);">Loading launches...</div>';

        const response = await fetch('https://ll.thespacedevs.com/2.3.0/launches/upcoming/?limit=5');
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const launchesHTML = data.results
                .map(launch => createLaunchCard(launch))
                .join('');
            
            launchList.innerHTML = launchesHTML;
        } else {
            launchList.innerHTML = '<div style="text-align: center; color: var(--text-secondary);">No upcoming launches found</div>';
        }
    } catch (error) {
        console.error('Error fetching launches:', error);
        launchList.innerHTML = '<div style="text-align: center; color: var(--text-secondary);">Failed to load launches. Please try again later.</div>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateLaunches();
    
    // Refresh launches every 5 minutes
    setInterval(populateLaunches, 5 * 60 * 1000);
}); 