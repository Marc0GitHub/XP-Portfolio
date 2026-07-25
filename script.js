const iconContent = {
    icon1: {
        title: "Bin",
        icon: "assets/bin-icon.png",
        content: "<p>This is the Recycle Bin. It's empty.</p>"
    },
    icon2: {
        title: "Internet Explorer",
        icon: "assets/internet-explorer-2-icon.png",
        content: `
          <div class="ie-toolbar">
            <button class="ie-nav-btn" id="browserBack">&#8592; Back</button>
            <button class="ie-nav-btn" id="browserForward">Forward &#8594;</button>
            <button class="ie-nav-btn" id="browserRefresh">&#8635;</button>
            <button class="ie-nav-btn" id="browserHome">&#8962;</button>
          </div>
          <div class="ie-address-bar">
            <span>Address</span>
            <input type="text" id="browserUrl" value="https://en.wikipedia.org">
            <button id="browserGo">Go</button>
          </div>
          <iframe id="browserFrame" src="https://en.wikipedia.org"></iframe>
          <div class="ie-status-bar">Done</div>
        `
    },
    icon3: {
        title: "Folder",
        icon: "assets/folder-icon.png",
        content: `
          <div class="exp-toolbar">
            <button class="exp-btn">&#8592; Back</button>
            <button class="exp-btn">Forward &#8594;</button>
            <button class="exp-btn">&#8593; Up</button>
            <button class="exp-btn">Search</button>
            <button class="exp-btn">Folders</button>
          </div>
          <div class="exp-address-bar">
            <span>Address</span>
            <div class="exp-address-input">&#128193; My Documents\\Portfolio</div>
            <button class="exp-go">Go</button>
          </div>
          <div class="exp-body">
            <div class="exp-sidebar">
              <div class="exp-panel">
                <div class="exp-panel-header">File and Folder Tasks</div>
                <div class="exp-panel-item">Make a new folder</div>
                <div class="exp-panel-item">Publish this folder to the Web</div>
                <div class="exp-panel-item">Share this folder</div>
              </div>
              <div class="exp-panel">
                <div class="exp-panel-header">Other Places</div>
                <div class="exp-panel-item">My Documents</div>
                <div class="exp-panel-item">My Computer</div>
              </div>
            </div>
            <div class="exp-files">
              <p class="exp-empty">This folder is empty.</p>
            </div>
          </div>
        `
    },
    icon4: {
        title: "Untitled - Paint",
        icon: "assets/paint-icon.png",
        content: `
          <div class="paint-menubar">
            <span>File</span><span>Edit</span><span>View</span><span>Image</span><span>Colors</span><span>Help</span>
          </div>
          <div class="paint-body">
            <div class="paint-toolbox">
              <button class="paint-tool active" data-tool="pencil" title="Pencil">&#9998;</button>
              <button class="paint-tool" data-tool="eraser" title="Eraser">&#9670;</button>
            </div>
            <canvas id="paintCanvas"></canvas>
          </div>
          <div class="paint-palette">
            <div class="paint-current-color" id="paintCurrentColor"></div>
            <div class="paint-swatches" id="paintSwatches"></div>
          </div>
        `
    },
    icon5: {
        title: "Untitled - Notepad",
        icon: "assets/notepad-icon.png",
        content: `
          <div class="np-menubar">
            <span class="np-menu-item" data-menu="file">File</span>
            <span class="np-menu-item" data-menu="edit">Edit</span>
            <span class="np-menu-item" data-menu="format">Format</span>
            <span class="np-menu-item" data-menu="view">View</span>
            <span class="np-menu-item" data-menu="help">Help</span>
            <div class="np-dropdown hidden" data-dropdown="edit">
              <div class="np-dropdown-item" data-action="undo">Undo</div>
              <div class="np-dropdown-item" data-action="redo">Redo</div>
              <div class="np-dropdown-divider"></div>
              <div class="np-dropdown-item" data-action="find">Find</div>
              <div class="np-dropdown-item" data-action="replace">Replace</div>
              <div class="np-dropdown-divider"></div>
              <div class="np-dropdown-item" data-action="datetime">Date/Time</div>
            </div>
          </div>
          <textarea class="np-textarea" spellcheck="false"></textarea>
        `
    }
};

const paintColors = [
    "#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200",
    "#22b14c", "#00a2e8", "#3f48cc", "#a349a4",
    "#ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0",
    "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7"
];

const GRID_SIZE_X = 90;
const GRID_SIZE_Y = 90;
const WELCOME_NOTE_TEXT = "Hi, my name is Marco, welcome to my portfolio, feel free to navigate through the desktop to find what you need";

function snapToGrid(x, y) {
    const snappedX = Math.round(x / GRID_SIZE_X) * GRID_SIZE_X;
    const snappedY = Math.round(y / GRID_SIZE_Y) * GRID_SIZE_Y;
    return { x: snappedX, y: snappedY };
}

// Multi-window state
let openWindows = {};
let zIndexCounter = 100;
let windowCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('dblclick', () => openWindow(icon));
        icon.addEventListener('mousedown', iconMouseDown);
        icon.addEventListener('click', highlightIcon);

        icon.addEventListener('touchstart', touchStart, { passive: false });
        icon.addEventListener('touchmove', touchMove, { passive: false });
        icon.addEventListener('touchend', touchEnd, { passive: false });
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.icon')) {
            deselectAllIcons();
        }
    });

    document.body.addEventListener('touchend', (e) => {
        if (!e.target.closest('.icon')) {
            deselectAllIcons();
        }
    }, { passive: false });

    setupStartMenu();
    setupClock();

    const notepadIcon = document.getElementById('icon5');
    if (notepadIcon) {
        openWindow(notepadIcon);
    }
});

let currentIcon = null;
let offsetX = 0;
let offsetY = 0;
let touchStartTime = 0;
let lastTapTime = 0;

// Highlight icon on click or tap
function highlightIcon(e) {
    deselectAllIcons();
    const targetIcon = e.target.closest('.icon');
    if (targetIcon) {
        targetIcon.classList.add('selected');
    }
}

function deselectAllIcons() {
    document.querySelectorAll('.icon').forEach(i => i.classList.remove('selected'));
}

// Mouse-based icon drag-and-drop
function iconMouseDown(e) {
    e.preventDefault();
    currentIcon = e.target.closest('.icon');
    offsetX = e.clientX - currentIcon.getBoundingClientRect().left;
    offsetY = e.clientY - currentIcon.getBoundingClientRect().top;

    currentIcon.style.position = 'absolute';
    currentIcon.classList.add('dragging');

    document.addEventListener('mousemove', iconMouseMove);
    document.addEventListener('mouseup', iconMouseUp);
}

function iconMouseMove(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
}

function iconMouseUp(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    const snapped = snapToGrid(x, y);
    currentIcon.classList.remove('dragging');
    currentIcon.style.left = `${snapped.x}px`;
    currentIcon.style.top = `${snapped.y}px`;

    document.removeEventListener('mousemove', iconMouseMove);
    document.removeEventListener('mouseup', iconMouseUp);
    currentIcon = null;
}

// Touch-based icon drag-and-drop and highlight
function touchStart(e) {
    e.preventDefault();
    touchStartTime = Date.now();
    currentIcon = e.target.closest('.icon');
    const touch = e.touches[0];
    offsetX = touch.clientX - currentIcon.getBoundingClientRect().left;
    offsetY = touch.clientY - currentIcon.getBoundingClientRect().top;

    currentIcon.style.position = 'absolute';
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
        if (touchEndTime - lastTapTime < 300) {
            openWindow(currentIcon);
        } else {
            highlightIcon(e);
        }
        lastTapTime = touchEndTime;
    }

    if (!currentIcon) return;
    const touch = e.changedTouches[0];
    const x = touch.clientX - offsetX;
    const y = touch.clientY - offsetY;

    const snapped = snapToGrid(x, y);
    currentIcon.style.left = `${snapped.x}px`;
    currentIcon.style.top = `${snapped.y}px`;

    currentIcon.style.transform = '';
    currentIcon = null;
}

// Open (or focus existing) window for an icon
function openWindow(icon) {
    if (openWindows[icon.id]) {
        const existing = openWindows[icon.id];
        existing.style.display = 'flex';
        bringToFront(existing);
        const taskbarItem = document.querySelector(`.taskbar-item[data-owner="${icon.id}"]`);
        if (taskbarItem) taskbarItem.remove();
        return;
    }
    createWindowElement(icon);
}

function createWindowElement(icon) {
    const data = iconContent[icon.id];
    windowCounter++;

    const win = document.createElement('div');
    win.className = 'popup';
    win.dataset.owner = icon.id;
    win.dataset.icon = data.icon;

    win.innerHTML = `
        <div class="popup-header">
            <span class="popup-title">${data.title}</span>
            <div class="popup-controls">
                <button class="win-btn popup-minimize">
                    <svg viewBox="0 0 10 10"><rect x="1" y="7" width="8" height="1.5"></rect></svg>
                </button>
                <button class="win-btn popup-maximize">
                    <svg viewBox="0 0 10 10"><path d="M0 0v10h10V0H0zm1 1h8v8H1V1z"></path></svg>
                </button>
                <button class="win-btn win-btn-close popup-close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="popup-content"></div>
        <div class="resize-handle"></div>
    `;

    document.body.appendChild(win);

    const contentEl = win.querySelector('.popup-content');
    contentEl.innerHTML = data.content;

    const cascadeOffset = (windowCounter % 8) * 25;
    win.style.left = (80 + cascadeOffset) + 'px';
    win.style.top = (60 + cascadeOffset) + 'px';
    win.style.width = '400px';
    win.style.height = '300px';

    if (icon.id === 'icon2') {
        contentEl.classList.add('no-padding');
        setupBrowser(win);
    } else if (icon.id === 'icon4') {
        contentEl.classList.add('no-padding');
        setupPaint(win);
    } else if (icon.id === 'icon5') {
        contentEl.classList.add('no-padding');
        setupNotepad(win);
    } else if (icon.id === 'icon3') {
        contentEl.classList.add('no-padding');
    } else {
        contentEl.classList.remove('no-padding');
    }

    setupWindowControls(win);
    bringToFront(win);
    openWindows[icon.id] = win;
}

function bringToFront(win) {
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
    document.querySelectorAll('.popup').forEach(w => w.classList.remove('active-window'));
    win.classList.add('active-window');
}

function setupWindowControls(win) {
    const header = win.querySelector('.popup-header');
    const minimizeBtn = win.querySelector('.popup-minimize');
    const maximizeBtn = win.querySelector('.popup-maximize');
    const closeBtn = win.querySelector('.popup-close');
    const handle = win.querySelector('.resize-handle');

    let isMaximized = false;
    let previousState = null;

    win.addEventListener('mousedown', () => bringToFront(win));

    minimizeBtn.addEventListener('click', () => minimizeWindow(win));
    closeBtn.addEventListener('click', () => closeWindow(win));

    maximizeBtn.addEventListener('click', () => {
        if (isMaximized) {
            win.style.width = previousState.width;
            win.style.height = previousState.height;
            win.style.left = previousState.left;
            win.style.top = previousState.top;
            isMaximized = false;
        } else {
            previousState = {
                width: win.style.width,
                height: win.style.height,
                left: win.style.left,
                top: win.style.top
            };
            win.style.width = '100vw';
            win.style.height = 'calc(100vh - 40px)';
            win.style.left = '0';
            win.style.top = '0';
            isMaximized = true;
        }
        win.dispatchEvent(new CustomEvent('windowResized'));
    });

    // Dragging by header (mouse)
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    header.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        bringToFront(win);
        startX = e.clientX - win.offsetLeft;
        startY = e.clientY - win.offsetTop;
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });

    function onMove(e) {
        if (!isDragging) return;
        win.style.left = (e.clientX - startX) + 'px';
        win.style.top = (e.clientY - startY) + 'px';
    }

    function onUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    }

    // Dragging by header (touch)
    header.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDragging = true;
        bringToFront(win);
        const touch = e.touches[0];
        startX = touch.clientX - win.offsetLeft;
        startY = touch.clientY - win.offsetTop;
        document.addEventListener('touchmove', onTouchMoveHeader, { passive: false });
        document.addEventListener('touchend', onTouchEndHeader, { passive: false });
    });

    function onTouchMoveHeader(e) {
        e.preventDefault();
        if (!isDragging) return;
        const touch = e.touches[0];
        win.style.left = (touch.clientX - startX) + 'px';
        win.style.top = (touch.clientY - startY) + 'px';
    }

    function onTouchEndHeader() {
        isDragging = false;
        document.removeEventListener('touchmove', onTouchMoveHeader);
        document.removeEventListener('touchend', onTouchEndHeader);
    }

    // Resizing
    let isResizing = false;
    let rw = 0, rh = 0, rx = 0, ry = 0;

    handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        rw = win.offsetWidth;
        rh = win.offsetHeight;
        rx = e.clientX;
        ry = e.clientY;
        document.addEventListener('mousemove', onResizeMove);
        document.addEventListener('mouseup', onResizeUp);
    });

    function onResizeMove(e) {
        if (!isResizing) return;
        win.style.width = Math.max(rw + (e.clientX - rx), 200) + 'px';
        win.style.height = Math.max(rh + (e.clientY - ry), 150) + 'px';
    }

    function onResizeUp() {
        isResizing = false;
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', onResizeUp);
        win.dispatchEvent(new CustomEvent('windowResized'));
    }
}

function minimizeWindow(win) {
    win.style.display = 'none';
    const title = win.querySelector('.popup-title').textContent;
    const iconSrc = win.dataset.icon;

    const taskbarWindows = document.querySelector('.taskbar-windows');
    const item = document.createElement('div');
    item.className = 'taskbar-item';
    item.dataset.owner = win.dataset.owner;
    item.innerHTML = `<img src="${iconSrc}" alt=""><span>${title}</span>`;

    item.addEventListener('click', () => {
        win.style.display = 'flex';
        bringToFront(win);
        item.remove();
    });
    taskbarWindows.appendChild(item);
}

function closeWindow(win) {
    delete openWindows[win.dataset.owner];
    const taskbarItem = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"]`);
    if (taskbarItem) taskbarItem.remove();
    win.remove();
}

// Internet Explorer app
function setupBrowser(win) {
    const urlInput = win.querySelector('#browserUrl');
    const goButton = win.querySelector('#browserGo');
    const frame = win.querySelector('#browserFrame');
    const backButton = win.querySelector('#browserBack');
    const forwardButton = win.querySelector('#browserForward');
    const refreshButton = win.querySelector('#browserRefresh');
    const homeButton = win.querySelector('#browserHome');
    const statusBar = win.querySelector('.ie-status-bar');

    let browserHistory = ['https://en.wikipedia.org'];
    let browserHistoryIndex = 0;

    goButton.addEventListener('click', () => navigateBrowser(urlInput.value, true));

    urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') navigateBrowser(urlInput.value, true);
    });

    backButton.addEventListener('click', () => {
        if (browserHistoryIndex > 0) {
            browserHistoryIndex--;
            navigateBrowser(browserHistory[browserHistoryIndex], false);
        }
    });

    forwardButton.addEventListener('click', () => {
        if (browserHistoryIndex < browserHistory.length - 1) {
            browserHistoryIndex++;
            navigateBrowser(browserHistory[browserHistoryIndex], false);
        }
    });

    refreshButton.addEventListener('click', () => {
        frame.src = frame.src;
    });

    homeButton.addEventListener('click', () => navigateBrowser('https://en.wikipedia.org', true));

    function navigateBrowser(rawUrl, addToHistory) {
        let url = rawUrl.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        statusBar.textContent = 'Opening page ' + url + '...';
        frame.src = url;
        urlInput.value = url;

        if (addToHistory) {
            browserHistory = browserHistory.slice(0, browserHistoryIndex + 1);
            browserHistory.push(url);
            browserHistoryIndex++;
        }

        const loadTimeout = setTimeout(() => {
            statusBar.textContent = "This page can't be displayed in a window";
        }, 3000);

        frame.addEventListener('load', () => {
            clearTimeout(loadTimeout);
            statusBar.textContent = 'Done';
        }, { once: true });
    }
}

// Paint app
function setupPaint(win) {
    const canvas = win.querySelector('#paintCanvas');
    const ctx = canvas.getContext('2d');
    const currentColorBox = win.querySelector('#paintCurrentColor');
    const swatchContainer = win.querySelector('#paintSwatches');
    const toolButtons = win.querySelectorAll('.paint-tool');
    const contentBox = canvas.closest('.popup-content');

    canvas.width = contentBox.clientWidth - 44;
    canvas.height = contentBox.clientHeight - 60;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    win.addEventListener('windowResized', () => {
        const savedDrawing = document.createElement('canvas');
        savedDrawing.width = canvas.width;
        savedDrawing.height = canvas.height;
        savedDrawing.getContext('2d').drawImage(canvas, 0, 0);

        canvas.width = contentBox.clientWidth - 44;
        canvas.height = contentBox.clientHeight - 60;

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(savedDrawing, 0, 0);
    });

    let currentColor = "#000000";
    let currentTool = "pencil";
    currentColorBox.style.backgroundColor = currentColor;

    paintColors.forEach((color) => {
        const swatch = document.createElement('div');
        swatch.className = 'paint-swatch';
        swatch.style.backgroundColor = color;
        swatch.addEventListener('click', () => {
            currentColor = color;
            currentColorBox.style.backgroundColor = color;
        });
        swatchContainer.appendChild(swatch);
    });

    toolButtons.forEach((button) => {
        button.addEventListener('click', () => {
            toolButtons.forEach((b) => b.classList.remove('active'));
            button.classList.add('active');
            currentTool = button.dataset.tool;
        });
    });

    let isDrawing = false;

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        draw(e);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) draw(e);
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    function draw(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = currentTool === 'eraser' ? 16 : 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentTool === 'eraser' ? '#ffffff' : currentColor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

// Notepad app
function setupNotepad(win) {
    const menuItems = win.querySelectorAll('.np-menu-item');
    const textarea = win.querySelector('.np-textarea');

    textarea.value = WELCOME_NOTE_TEXT;

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
            e.stopPropagation();
            const menuName = menuItem.dataset.menu;
            const dropdown = win.querySelector(`.np-dropdown[data-dropdown="${menuName}"]`);

            const wasOpen = dropdown && !dropdown.classList.contains('hidden');
            win.querySelectorAll('.np-dropdown').forEach(d => d.classList.add('hidden'));
            win.querySelectorAll('.np-menu-item').forEach(m => m.classList.remove('active'));

            if (dropdown && !wasOpen) {
                dropdown.classList.remove('hidden');
                menuItem.classList.add('active');
            }
        });
    });

    document.addEventListener('click', () => {
        win.querySelectorAll('.np-dropdown').forEach(d => d.classList.add('hidden'));
        win.querySelectorAll('.np-menu-item').forEach(m => m.classList.remove('active'));
    });

    const editDropdown = win.querySelector('.np-dropdown[data-dropdown="edit"]');
    if (editDropdown) {
        editDropdown.addEventListener('click', (e) => e.stopPropagation());

        editDropdown.querySelectorAll('.np-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'datetime') {
                    const now = new Date();
                    const stamp = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) +
                        ' ' + now.toLocaleDateString();

                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const before = textarea.value.slice(0, start);
                    const after = textarea.value.slice(end);

                    textarea.value = before + stamp + after;
                    const newPos = start + stamp.length;
                    textarea.focus();
                    textarea.setSelectionRange(newPos, newPos);
                } else if (action === 'undo' || action === 'redo') {
                    textarea.focus();
                    document.execCommand(action);
                }

                editDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }
}

// Start menu
function setupStartMenu() {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('#start-menu') && !e.target.closest('#start-button')) {
            startMenu.classList.add('hidden');
        }
    });

    document.querySelectorAll('.start-menu-item').forEach((item) => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.target;
            const icon = document.getElementById(targetId);
            openWindow(icon);
            startMenu.classList.add('hidden');
        });
    });
}

// Taskbar clock
function setupClock() {
    const clockEl = document.getElementById('taskbar-clock');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();

        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        if (hours === 0) hours = 12;

        const paddedMinutes = minutes.toString().padStart(2, '0');

        clockEl.textContent = `${hours}:${paddedMinutes} ${ampm}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}