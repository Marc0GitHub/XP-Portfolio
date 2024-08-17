document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach(icon => {
        // Double-click to open popup for desktop
        icon.addEventListener('dblclick', () => openPopup(icon));

        // For desktop: mouse-based drag-and-drop
        icon.addEventListener('dragstart', dragStart);
        icon.addEventListener('drag', dragging);
        icon.addEventListener('dragend', dragEnd);

        // For desktop: single click highlight
        icon.addEventListener('click', highlightIcon);

        // For mobile: touch-based drag-and-drop and highlight/double-tap
        icon.addEventListener('touchstart', touchStart, { passive: false });
        icon.addEventListener('touchmove', touchMove, { passive: false });
        icon.addEventListener('touchend', touchEnd, { passive: false });
    });

    // Remove highlight when clicking/tapping outside icons
    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.icon')) {
            deselectAllIcons();
        }
    });

    // Remove highlight when touching outside icons
    document.body.addEventListener('touchend', (e) => {
        if (!e.target.closest('.icon')) {
            deselectAllIcons();
        }
    }, { passive: false });

    const popup = document.getElementById('popup-window');
    const minimizeButton = document.querySelector('.popup-minimize');
    const maximizeButton = document.querySelector('.popup-maximize');
    const closeButton = document.querySelector('.popup-close');

    // Add event listeners for both click and touchend for popup controls
    minimizeButton.addEventListener('click', minimizePopup);
    maximizeButton.addEventListener('click', toggleMaximizePopup);
    closeButton.addEventListener('click', closePopup);

    minimizeButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        minimizePopup();
    }, { passive: false });

    maximizeButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleMaximizePopup();
    }, { passive: false });

    closeButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        closePopup();
    }, { passive: false });

    // Make the popup draggable with both mouse and touch
    const popupHeader = popup.querySelector('.popup-header');
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    popupHeader.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Prevent text selection
        isDragging = true;
        startX = e.clientX - popup.offsetLeft;
        startY = e.clientY - popup.offsetTop;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    popupHeader.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX - popup.offsetLeft;
        startY = touch.clientY - popup.offsetTop;
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onTouchEnd, { passive: false });
    });

    function onMouseMove(e) {
        if (!isDragging) return;
        const x = e.clientX - startX;
        const y = e.clientY - startY;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    function onTouchMove(e) {
        e.preventDefault();
        if (!isDragging) return;
        const touch = e.touches[0];
        const x = touch.clientX - startX;
        const y = touch.clientY - startY;
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;
    }

    function onTouchEnd() {
        isDragging = false;
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }
});

let currentIcon = null;
let offsetX = 0;
let offsetY = 0;
let touchStartTime = 0;
let lastTapTime = 0;
let isMaximized = false;

// Highlight icon on click or tap
function highlightIcon(e) {
    deselectAllIcons(); // Deselect all icons first
    const targetIcon = e.target.closest('.icon');
    if (targetIcon) {
        targetIcon.classList.add('selected');
    }
}

function deselectAllIcons() {
    document.querySelectorAll('.icon').forEach(i => i.classList.remove('selected'));
}

// Mouse-based drag-and-drop
function dragStart(e) {
    currentIcon = e.target.closest('.icon');
    offsetX = e.clientX - currentIcon.getBoundingClientRect().left;
    offsetY = e.clientY - currentIcon.getBoundingClientRect().top;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", currentIcon.id);

    currentIcon.style.position = 'absolute'; // Ensure absolute positioning
}

function dragging(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
}

function dragEnd(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
    currentIcon.style.transform = ''; // Reset transform
    currentIcon = null;
}

// Touch-based drag-and-drop and highlight
function touchStart(e) {
    e.preventDefault();
    touchStartTime = Date.now();
    currentIcon = e.target.closest('.icon');
    const touch = e.touches[0];
    offsetX = touch.clientX - currentIcon.getBoundingClientRect().left;
    offsetY = touch.clientY - currentIcon.getBoundingClientRect().top;

    currentIcon.style.position = 'absolute'; // Ensure absolute positioning
}

function touchMove(e) {
    e.preventDefault();
    if (!currentIcon) return;
    const touch = e.touches[0];
    const x = touch.clientX - offsetX;
    const y = touch.clientY - offsetY;
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
}

function touchEnd(e) {
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;

    if (touchDuration < 200) {
        // Check for double-tap
        if (touchEndTime - lastTapTime < 300) {
            openPopup(currentIcon);
        } else {
            highlightIcon(e);
        }
        lastTapTime = touchEndTime;
    }

    if (!currentIcon) return;
    const touch = e.changedTouches[0];
    const x = touch.clientX - offsetX;
    const y = touch.clientY - offsetY;
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
    currentIcon.style.transform = ''; // Reset transform
    currentIcon = null;
}

// Popup control functions
function openPopup(icon) {
    const popup = document.getElementById('popup-window');
    const popupTitle = popup.querySelector('.popup-title');
    popupTitle.textContent = icon.querySelector('span').textContent;
    popup.classList.remove('hidden');
    popup.style.display = 'flex';
}

function minimizePopup() {
    const popup = document.getElementById('popup-window');
    popup.classList.add('hidden');
    popup.style.display = 'none';

    // Add to taskbar
    const taskbarWindows = document.querySelector('.taskbar-windows');
    const taskbarItem = document.createElement('div');
    taskbarItem.textContent = 'Window';
    taskbarItem.className = 'taskbar-item';
    taskbarItem.addEventListener('click', () => {
        popup.classList.remove('hidden');
        popup.style.display = 'flex';
        taskbarItem.remove(); // Remove from taskbar when restored
    });
    taskbarWindows.appendChild(taskbarItem);
}

function toggleMaximizePopup() {
    const popup = document.getElementById('popup-window');
    if (isMaximized) {
        popup.style.width = '400px';
        popup.style.height = '300px';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        isMaximized = false;
    } else {
        popup.style.width = '100vw';
        popup.style.height = 'calc(100vh - 40px)'; // Leave space for taskbar
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.transform = 'none';
        isMaximized = true;
    }
}

function closePopup() {
    const popup = document.getElementById('popup-window');
    popup.classList.add('hidden');
    popup.style.display = 'none';
}
