document.getElementById('eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const topic = document.getElementById('topic').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    const eventData = {
        title: title,
        topic: topic,
        day: day,
        time: time,
    };

    try {
        const response = await fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            alert('Event created successfully!');
        } else {
            alert('Error creating event.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error connecting to the server.');
    }
});