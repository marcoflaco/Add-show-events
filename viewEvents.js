async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:3000/events');
        const events = await response.json();

        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = ''; // Clear existing events.

        for (let event of events) {
            const li = document.createElement('li');
            li.innerText = `${event.title} - ${event.topic} on ${event.day} at ${event.time}`;
            eventsList.appendChild(li);
        }
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

fetchEvents();
