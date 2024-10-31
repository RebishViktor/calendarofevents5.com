document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const eventModal = document.getElementById('event-modal');
    const closeModal = document.querySelector('.close');
    const saveEventBtn = document.getElementById('save-event');
    const deleteEventBtn = document.getElementById('delete-event');
    const eventTitleInput = document.getElementById('event-title');
    const eventDescriptionInput = document.getElementById('event-description');

    let selectedDate = null;
    let events = JSON.parse(localStorage.getItem('events')) || {};

    function generateCalendar() {
        const daysInMonth = 30;
        calendar.innerHTML = '';
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.innerText = i;

            if (events[i]) {
                day.style.backgroundColor = '#ffeb3b';
            }

            day.addEventListener('click', () => openModal(i));
            calendar.appendChild(day);
        }
    }

    function openModal(date) {
        selectedDate = date;
        const event = events[selectedDate] || { title: '', description: '' };
        eventTitleInput.value = event.title;
        eventDescriptionInput.value = event.description;
        eventModal.style.display = 'flex';
    }

    function closeModalFunction() {
        eventModal.style.display = 'none';
    }

    function saveEvent() {
        if (eventTitleInput.value.trim()) {
            events[selectedDate] = {
                title: eventTitleInput.value,
                description: eventDescriptionInput.value
            };
            localStorage.setItem('events', JSON.stringify(events));
            closeModalFunction();
            generateCalendar();
        }
    }

    function deleteEvent() {
        delete events[selectedDate];
        localStorage.setItem('events', JSON.stringify(events));
        closeModalFunction();
        generateCalendar();
    }

    closeModal.addEventListener('click', closeModalFunction);
    saveEventBtn.addEventListener('click', saveEvent);
    deleteEventBtn.addEventListener('click', deleteEvent);

    window.onclick = (event) => {
        if (event.target == eventModal) closeModalFunction();
    };

    generateCalendar();
});
