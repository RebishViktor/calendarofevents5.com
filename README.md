<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Інтерактивний календар подій</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Інтерактивний Календар Подій</h1>
    <div class="calendar-container">
        <div id="calendar"></div>
    </div>

    <div id="event-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Подія</h2>
            <input type="text" id="event-title" placeholder="Назва події">
            <textarea id="event-description" placeholder="Опис події"></textarea>
            <button id="save-event">Зберегти</button>
            <button id="delete-event">Видалити</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
