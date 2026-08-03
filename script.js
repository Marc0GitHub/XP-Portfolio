const iconContent = {
    icon1: {
        title: "Recycle Bin",
        icon: "assets/bin-icon.png",
        content: `
          <div class="exp-chrome">
            <div class="exp-menubar">
              <span class="exp-menu-item">File</span>
              <span class="exp-menu-item">Edit</span>
              <span class="exp-menu-item">View</span>
              <span class="exp-menu-item">Favorites</span>
              <span class="exp-menu-item">Tools</span>
              <span class="exp-menu-item">Help</span>
            </div>
            <div class="exp-toolbar">
              <button class="exp-tool-btn">&#8592; Back</button>
              <button class="exp-tool-btn">Forward &#8594;</button>
              <button class="exp-tool-btn">&#8593; Up</button>
              <span class="exp-tool-sep"></span>
              <button class="exp-tool-btn">Search</button>
              <button class="exp-tool-btn">Folders</button>
              <span class="exp-tool-sep"></span>
              <button class="exp-tool-btn">Views</button>
            </div>
            <div class="exp-address-bar">
              <span class="exp-address-label">Address</span>
              <div class="exp-address-input">&#128465; Recycle Bin</div>
            </div>
            <div class="exp-body">
              <div class="exp-sidebar">
                <div class="exp-panel">
                  <div class="exp-panel-title">Recycle Bin Tasks</div>
                  <div class="exp-panel-item" data-bin-action="empty">Empty the Recycle Bin</div>
                  <div class="exp-panel-item" data-bin-action="restore-all">Restore all items</div>
                </div>
                <div class="exp-panel">
                  <div class="exp-panel-title">Other Places</div>
                  <div class="exp-panel-item">My Documents</div>
                  <div class="exp-panel-item">My Computer</div>
                </div>
              </div>
              <div class="exp-files-area">
                <div class="bin-list"></div>
              </div>
            </div>
            <div class="exp-statusbar">Recycle Bin</div>
          </div>
        `
    },
    icon2: {
        title: "Internet Explorer",
        icon: "assets/internet-explorer-2-icon.png",
        content: `
          <div class="ie-chrome">
            <div class="ie-menubar">
              <span class="ie-menu-item">File</span>
              <span class="ie-menu-item">Edit</span>
              <span class="ie-menu-item">View</span>
              <span class="ie-menu-item">Favorites</span>
              <span class="ie-menu-item">Tools</span>
              <span class="ie-menu-item">Help</span>
              <img class="ie-logo" src="assets/internet-explorer-icon.png" alt="">
            </div>
            <div class="ie-toolbar">
              <button class="ie-nav-btn" id="browserBack"><span class="ie-nav-icon">&#8592;</span><span>Back</span></button>
              <button class="ie-nav-btn" id="browserForward"><span class="ie-nav-icon">&#8594;</span><span>Forward</span></button>
              <button class="ie-nav-btn" id="browserRefresh"><span class="ie-nav-icon">&#8635;</span><span>Refresh</span></button>
              <button class="ie-nav-btn" id="browserHome"><span class="ie-nav-icon">&#8962;</span><span>Home</span></button>
            </div>
            <div class="ie-address-bar">
              <span class="ie-address-title">Address</span>
              <div class="ie-address-input-wrap">
                <img src="assets/internet-explorer-icon.png" alt="">
                <input type="text" id="browserUrl" value="https://en.wikipedia.org">
              </div>
              <button id="browserGo">Go</button>
            </div>
            <iframe id="browserFrame" src="https://en.wikipedia.org"></iframe>
            <div class="ie-status-bar">
              <span id="ieStatusText">Done</span>
              <span class="ie-zone">Internet</span>
            </div>
          </div>
        `
    },
    icon3: {
        title: "Folder",
        icon: "assets/folder-icon.png",
        content: `
          <div class="exp-chrome">
            <div class="exp-menubar">
              <span class="exp-menu-item">File</span>
              <span class="exp-menu-item">Edit</span>
              <span class="exp-menu-item">View</span>
              <span class="exp-menu-item">Favorites</span>
              <span class="exp-menu-item">Tools</span>
              <span class="exp-menu-item">Help</span>
            </div>
            <div class="exp-toolbar">
              <button class="exp-tool-btn">&#8592; Back</button>
              <button class="exp-tool-btn">Forward &#8594;</button>
              <button class="exp-tool-btn">&#8593; Up</button>
              <span class="exp-tool-sep"></span>
              <button class="exp-tool-btn">Search</button>
              <button class="exp-tool-btn">Folders</button>
              <span class="exp-tool-sep"></span>
              <button class="exp-tool-btn">Views</button>
            </div>
            <div class="exp-address-bar">
              <span class="exp-address-label">Address</span>
              <div class="exp-address-input">&#128193; My Documents\\Portfolio</div>
            </div>
            <div class="exp-body">
              <div class="exp-sidebar">
                <div class="exp-panel">
                  <div class="exp-panel-title">System Tasks</div>
                  <div class="exp-panel-item">View system information</div>
                  <div class="exp-panel-item">Add or remove programs</div>
                  <div class="exp-panel-item">Change a setting</div>
                </div>
                <div class="exp-panel">
                  <div class="exp-panel-title">Other Places</div>
                  <div class="exp-panel-item">My Documents</div>
                  <div class="exp-panel-item">My Pictures</div>
                  <div class="exp-panel-item">My Music</div>
                </div>
              </div>
              <div class="exp-files-area">
                <div class="exp-project-list"></div>
                <div class="exp-preview">
                  <h3>Select a project</h3>
                  <p>Choose a project from the list to see its summary and open it.</p>
                </div>
              </div>
            </div>
            <div class="exp-statusbar">Objects</div>
          </div>
        `
    },
    icon4: {
        title: "Untitled - Paint",
        icon: "assets/paint-icon.png",
        content: `
          <iframe id="paintFrame" src="https://jspaint.app/"
            style="display:block;width:100%;height:100%;background-color:rgb(192,192,192);border:none;flex:1;min-height:0;">
          </iframe>
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
let initialNotepad = true; // the Notepad opened on site load gets the typewriter effect

// Persistent contents of the Folder window. Image files dragged in from the
// desktop are stored here so they survive closing and reopening the Folder.
const folderFiles = [
    {
        kind: 'project',
        name: 'XP Portfolio',
        type: 'Website',
        summary: 'A Windows XP-inspired portfolio that opens as a desktop experience.',
        url: 'https://github.com/Marc0GitHub/XP-Portfolio'
    },
    {
        kind: 'project',
        name: 'My GitHub Profile',
        type: 'Profile',
        summary: 'Browse my repositories and public work from this portfolio desktop.',
        url: 'https://github.com/Marc0GitHub'
    },
    {
        kind: 'project',
        name: 'Project Three',
        type: 'App',
        summary: 'Replace this card with one of your own completed projects.',
        url: 'https://github.com/Marc0GitHub'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach(icon => {
        attachIconListeners(icon);
    });
    setupContextMenus();
    setupMarqueeSelection();

    document.body.addEventListener('click', (e) => {
        if (marqueeJustDragged) {
            marqueeJustDragged = false;
            return; // don't clear the selection right after a marquee drag
        }
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
        // Initial Notepad position: a bit more to the right
        const notepadWin = openWindows['icon5'];
        if (notepadWin) {
            const cascadeOffset = (windowCounter % 8) * 25;
            notepadWin.style.left = (190 + cascadeOffset) + 'px';
            notepadWin.style.top = (60 + cascadeOffset) + 'px';
        }
    }
});

let currentIcon = null;
let offsetX = 0;
let offsetY = 0;
let touchStartTime = 0;
let lastTapTime = 0;

// Highlight icon on click or tap (Ctrl/Cmd+click toggles one icon)
function highlightIcon(e) {
    const targetIcon = e.target.closest('.icon');
    if (!targetIcon) return;
    if (e.ctrlKey || e.metaKey) {
        targetIcon.classList.toggle('selected');
    } else {
        deselectAllIcons();
        targetIcon.classList.add('selected');
    }
}

function deselectAllIcons() {
    document.querySelectorAll('.icon').forEach(i => i.classList.remove('selected'));
}

// Marquee (click-and-drag rubber-band) selection on the desktop, like Windows XP
let marqueeActive = false;
let marqueeStartX = 0;
let marqueeStartY = 0;
let marqueeMoved = false;
let marqueeJustDragged = false;

function setupMarqueeSelection() {
    const desktop = document.querySelector('.desktop');
    if (!desktop) return;
    const marquee = document.createElement('div');
    marquee.className = 'selection-marquee';
    desktop.appendChild(marquee);

    desktop.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;      // left button only
        if (e.target.closest('.icon')) return; // icons drag on their own
        e.preventDefault();
        marqueeActive = true;
        marqueeMoved = false;
        marqueeStartX = e.clientX;
        marqueeStartY = e.clientY;
        document.addEventListener('mousemove', onMarqueeMove);
        document.addEventListener('mouseup', onMarqueeUp);
    });

    function onMarqueeMove(e) {
        if (!marqueeActive) return;
        const dx = e.clientX - marqueeStartX;
        const dy = e.clientY - marqueeStartY;
        if (!marqueeMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
            marqueeMoved = true;
            deselectAllIcons();
        }
        if (!marqueeMoved) return;

        const dr = desktop.getBoundingClientRect();
        marquee.style.display = 'block';
        marquee.style.left = (Math.min(marqueeStartX, e.clientX) - dr.left) + 'px';
        marquee.style.top = (Math.min(marqueeStartY, e.clientY) - dr.top) + 'px';
        marquee.style.width = Math.abs(dx) + 'px';
        marquee.style.height = Math.abs(dy) + 'px';

        // Live-select every icon the rectangle touches
        const mrect = {
            left: Math.min(marqueeStartX, e.clientX),
            right: Math.max(marqueeStartX, e.clientX),
            top: Math.min(marqueeStartY, e.clientY),
            bottom: Math.max(marqueeStartY, e.clientY)
        };
        document.querySelectorAll('.desktop .icon').forEach(icon => {
            const r = icon.getBoundingClientRect();
            icon.classList.toggle('selected', rectsIntersect(mrect, r));
        });
    }

    function onMarqueeUp() {
        if (!marqueeActive) return;
        marqueeActive = false;
        marquee.style.display = 'none';
        if (marqueeMoved) marqueeJustDragged = true;
        document.removeEventListener('mousemove', onMarqueeMove);
        document.removeEventListener('mouseup', onMarqueeUp);
    }
}

function rectsIntersect(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

// Mouse-based icon drag-and-drop
let dragMoved = false;

function iconMouseDown(e) {
    e.preventDefault();
    currentIcon = e.target.closest('.icon');
    offsetX = e.clientX - currentIcon.getBoundingClientRect().left;
    offsetY = e.clientY - currentIcon.getBoundingClientRect().top;
    dragMoved = false;

    currentIcon.style.position = 'absolute';
    currentIcon.classList.add('dragging');

    document.addEventListener('mousemove', iconMouseMove);
    document.addEventListener('mouseup', iconMouseUp);
}

function iconMouseMove(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    if (!dragMoved && (Math.abs(x - currentIcon.offsetLeft) > 5 || Math.abs(y - currentIcon.offsetTop) > 5)) {
        dragMoved = true;
    }
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
    updateFolderDropHighlight(e.clientX, e.clientY);
}

function iconMouseUp(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    clearFolderDropHighlight();

    const drop = dragMoved ? getDropTarget(e.clientX, e.clientY) : null;
    if (drop && drop.kind === 'folder' && currentIcon.classList.contains('image-file')) {
        moveImageToFolder(currentIcon);
        document.removeEventListener('mousemove', iconMouseMove);
        document.removeEventListener('mouseup', iconMouseUp);
        currentIcon = null;
        return;
    }
    if (drop && drop.kind === 'bin' && currentIcon.id !== 'icon1') {
        moveIconToBin(currentIcon);
        document.removeEventListener('mousemove', iconMouseMove);
        document.removeEventListener('mouseup', iconMouseUp);
        currentIcon = null;
        return;
    }

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
    dragMoved = false;

    currentIcon.style.position = 'absolute';
}

function touchMove(e) {
    e.preventDefault();
    if (!currentIcon) return;
    const touch = e.touches[0];
    const x = touch.clientX - offsetX;
    const y = touch.clientY - offsetY;
    if (!dragMoved && (Math.abs(x - currentIcon.offsetLeft) > 5 || Math.abs(y - currentIcon.offsetTop) > 5)) {
        dragMoved = true;
    }
    currentIcon.style.left = `${x}px`;
    currentIcon.style.top = `${y}px`;
    updateFolderDropHighlight(touch.clientX, touch.clientY);
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

    clearFolderDropHighlight();

    const drop = dragMoved ? getDropTarget(touch.clientX, touch.clientY) : null;
    if (drop && drop.kind === 'folder' && currentIcon.classList.contains('image-file')) {
        moveImageToFolder(currentIcon);
        currentIcon = null;
        return;
    }
    if (drop && drop.kind === 'bin' && currentIcon.id !== 'icon1') {
        moveIconToBin(currentIcon);
        currentIcon = null;
        return;
    }

    const snapped = snapToGrid(x, y);
    currentIcon.style.left = `${snapped.x}px`;
    currentIcon.style.top = `${snapped.y}px`;

    currentIcon.style.transform = '';
    currentIcon = null;
}

// Photo viewer window styled like Windows Picture and Fax Viewer.
// Functional buttons: Previous, Next, Zoom (in/out/actual/best fit),
// Rotate, and Save. The remaining toolbar buttons are display only.
function setupImageViewer(win, collection, index) {
    const img = win.querySelector('.img-stage img');
    const label = win.querySelector('.img-zoom-label');
    const titleEl = win.querySelector('.popup-title');

    const images = Array.isArray(collection) && collection.length
        ? collection
        : [{ src: img.getAttribute('src'), name: img.getAttribute('alt') || 'Image' }];
    let current = typeof index === 'number' && index >= 0 ? index : 0;

    let fitMode = true;  // true = Best Fit, false = Actual Size
    let zoom = 1;
    let rotation = 0;

    function setTitle(name) {
        titleEl.textContent = `${name} - Windows Picture and Fax Viewer`;
    }

    function apply() {
        img.classList.toggle('actual-size', !fitMode);
        if (fitMode) {
            img.style.width = '';
            img.style.height = '';
        } else {
            img.style.width = img.naturalWidth + 'px';
            img.style.height = img.naturalHeight + 'px';
        }
        img.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
        label.textContent = (fitMode ? 'Fit ' : '') + Math.round(zoom * 100) + '%';
        if (typeof updatePanCursor === 'function') updatePanCursor();
    }

    function loadImage(i) {
        current = (i + images.length) % images.length;
        const item = images[current];
        img.onload = () => {
            fitMode = true;
            zoom = 1;
            rotation = 0;
            apply();
        };
        img.src = item.src;
        img.alt = item.name;
        setTitle(item.name);
        label.textContent = 'Loading...';
    }

    function saveImage() {
        const item = images[current];
        const a = document.createElement('a');
        a.href = item.src;
        a.download = item.name || 'image.jpg';
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    const actions = {
        'prev': () => loadImage(current - 1),
        'next': () => loadImage(current + 1),
        'zoom-in': () => { zoom = Math.min(zoom * 1.25, 8); apply(); },
        'zoom-out': () => { zoom = Math.max(zoom / 1.25, 0.1); apply(); },
        'actual-size': () => { fitMode = false; zoom = 1; apply(); },
        'best-fit': () => { fitMode = true; zoom = 1; apply(); },
        'rotate-left': () => { rotation = (rotation - 90 + 360) % 360; apply(); },
        'rotate-right': () => { rotation = (rotation + 90) % 360; apply(); },
        'save': () => saveImage()
    };

    win.querySelectorAll('.img-btn').forEach((btn) => {
        if (btn.disabled) return; // inert buttons (delete/print/copy/help)
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (actions[action]) actions[action]();
        });
    });

    // Scroll to zoom (zoom toward the cursor when possible)
    const stage = win.querySelector('.img-stage');
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const oldZoom = zoom;
        const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
        zoom = Math.min(Math.max(zoom * factor, 0.1), 8);
        if (zoom === oldZoom) return;

        const rect = stage.getBoundingClientRect();
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;
        const scaleFactor = zoom / oldZoom;

        apply();

        // Keep the point under the cursor roughly fixed while zooming
        stage.scrollLeft = (stage.scrollLeft + cx) * scaleFactor - cx;
        stage.scrollTop = (stage.scrollTop + cy) * scaleFactor - cy;
    }, { passive: false });

    // Show a "grab" cursor when there's content to pan (zoomed / actual size)
    function updatePanCursor() {
        const canPan = stage.scrollWidth > stage.clientWidth + 1 || stage.scrollHeight > stage.clientHeight + 1;
        stage.classList.toggle('pannable', canPan);
    }
    stage.addEventListener('scroll', updatePanCursor);
    window.addEventListener('resize', updatePanCursor);
    // Re-check once the scale transition finishes (background tabs throttle
    // transitions, so also fall back to a timeout as a safety net)
    img.addEventListener('transitionend', updatePanCursor);
    setTimeout(updatePanCursor, 200);

    // Drag with the mouse to pan around a zoomed image
    let panning = false;
    let panStartX = 0;
    let panStartY = 0;
    let panStartLeft = 0;
    let panStartTop = 0;

    stage.addEventListener('mousedown', (e) => {
        const canPan = stage.scrollWidth > stage.clientWidth + 1 || stage.scrollHeight > stage.clientHeight + 1;
        if (!canPan) return;
        if (e.button !== 0) return; // left button only
        panning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        panStartLeft = stage.scrollLeft;
        panStartTop = stage.scrollTop;
        stage.classList.add('panning');
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!panning) return;
        stage.scrollLeft = panStartLeft - (e.clientX - panStartX);
        stage.scrollTop = panStartTop - (e.clientY - panStartY);
    });

    document.addEventListener('mouseup', () => {
        if (!panning) return;
        panning = false;
        stage.classList.remove('panning');
    });

    apply();
    updatePanCursor();

    // Give photo windows a larger default size
    win.style.width = '520px';
    win.style.height = '400px';
}

// Collection helpers for Next / Previous navigation
function getDesktopImageCollection() {
    return [...document.querySelectorAll('.icon.image-file')]
        .filter(i => i.dataset.image)
        .map(i => ({
            src: i.dataset.image,
            name: i.dataset.name || (i.querySelector('span') ? i.querySelector('span').textContent : 'Image')
        }));
}

function getFolderImageCollection(folderWin) {
    if (!folderWin || !folderWin.files) return [];
    return folderWin.files
        .filter(f => f.kind === 'image')
        .map(f => ({ src: f.src, name: f.name }));
}

// Drag-and-drop helpers: move image files into the Folder window
function getFolderWindow() {
    return document.querySelector('.popup[data-owner="icon3"]');
}

function isOverElement(clientX, clientY, el) {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;
}

function updateFolderDropHighlight(clientX, clientY) {
    const hovering = currentIcon && currentIcon.id !== 'icon1';
    const target = hovering ? getDropTarget(clientX, clientY) : null;
    const folderWin = getFolderWindow();
    const folderIcon = document.getElementById('icon3');
    const binWin = getBinWindow();
    const binIcon = document.getElementById('icon1');
    const isImage = currentIcon && currentIcon.classList.contains('image-file');

    if (folderWin) folderWin.classList.toggle('drop-target', !!target && target.kind === 'folder' && isImage);
    if (folderIcon) folderIcon.classList.toggle('drop-target-icon', !!target && target.kind === 'folder' && isImage);
    if (binWin) binWin.classList.toggle('drop-target', !!target && target.kind === 'bin');
    if (binIcon) binIcon.classList.toggle('drop-target-icon', !!target && target.kind === 'bin');
}

function clearFolderDropHighlight() {
    const folderWin = getFolderWindow();
    if (folderWin) folderWin.classList.remove('drop-target');
    const folderIcon = document.getElementById('icon3');
    if (folderIcon) folderIcon.classList.remove('drop-target-icon');
    const binWin = getBinWindow();
    if (binWin) binWin.classList.remove('drop-target');
    const binIcon = document.getElementById('icon1');
    if (binIcon) binIcon.classList.remove('drop-target-icon');
}

function getDropTarget(clientX, clientY) {
    const folderWin = getFolderWindow();
    if (folderWin && isOverElement(clientX, clientY, folderWin)) return { kind: 'folder', el: folderWin };
    const folderIcon = document.getElementById('icon3');
    if (folderIcon && isOverElement(clientX, clientY, folderIcon)) return { kind: 'folder', el: folderIcon };
    const binWin = getBinWindow();
    if (binWin && isOverElement(clientX, clientY, binWin)) return { kind: 'bin', el: binWin };
    const binIcon = document.getElementById('icon1');
    if (binIcon && isOverElement(clientX, clientY, binIcon)) return { kind: 'bin', el: binIcon };
    return null;
}

function moveImageToFolder(icon) {
    const src = icon.dataset.image;
    const name = icon.dataset.name || (icon.querySelector('span') ? icon.querySelector('span').textContent : 'Image');

    let folderWin = getFolderWindow();
    if (!folderWin) {
        // Folder isn't open yet - dropping onto the folder icon opens it first
        openWindow(document.getElementById('icon3'));
        folderWin = getFolderWindow();
    }
    if (folderWin && typeof folderWin.addImageFile === 'function') {
        folderWin.addImageFile(src, name);
    }

    icon.remove();
    deselectAllIcons();
}

// Drag an image out of the Folder window back onto the desktop
function attachFolderImageDrag(item, win, file, index) {
    item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX;
        const startY = e.clientY;
        let moved = false;

        const ghost = document.createElement('div');
        ghost.className = 'drag-ghost';
        const img = new Image();
        img.src = file.src;
        img.alt = file.name;
        ghost.appendChild(img);
        ghost.style.display = 'none';
        document.body.appendChild(ghost);

        function onMove(ev) {
            const x = ev.clientX;
            const y = ev.clientY;
            if (!moved && (Math.abs(x - startX) > 5 || Math.abs(y - startY) > 5)) {
                moved = true;
                ghost.style.display = 'block';
            }
            if (moved) {
                ghost.style.left = (x - 16) + 'px';
                ghost.style.top = (y - 16) + 'px';
            }
        }

        function onUp(ev) {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            ghost.remove();
            if (!moved) return;

            const x = ev.clientX;
            const y = ev.clientY;
            // A valid drop target is the desktop: not over any open window,
            // and not over the taskbar.
            const overWindow = [...document.querySelectorAll('.popup')].some(p => isOverElement(x, y, p));
            const taskbar = document.querySelector('.taskbar');
            const overTaskbar = taskbar && isOverElement(x, y, taskbar);
            if (!overWindow && !overTaskbar) {
                if (typeof win.removeImageFile === 'function') {
                    win.removeImageFile(index);
                }
                addImageToDesktop(file.src, file.name, x, y);
            }
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
}

// Re-create a desktop image icon (e.g. when moving an image out of the Folder)
function addImageToDesktop(src, name, x, y) {
    createDesktopIcon({
        iconSrc: 'assets/image-file-icon.png',
        label: name,
        className: 'image-file',
        dataset: { image: src, name },
        x, y
    });
}

/* ===== Right-click context menu (Windows XP style) ===== */
let activeContextMenu = null;
let lastContextMenuPos = { x: 0, y: 0 };

function setupContextMenus() {
    const desktop = document.querySelector('.desktop');

    // Right-click on the empty desktop background
    desktop.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.icon')) return;
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, getDesktopContextMenu());
    });

    // Global dismissal
    document.addEventListener('click', () => hideContextMenu());
    document.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.context-menu')) return;
        if (!e.defaultPrevented) hideContextMenu();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideContextMenu(); });
    document.addEventListener('scroll', hideContextMenu, true);
    window.addEventListener('resize', hideContextMenu);
    window.addEventListener('blur', hideContextMenu);
}

function hideContextMenu() {
    if (activeContextMenu) {
        activeContextMenu.remove();
        activeContextMenu = null;
    }
}

function showContextMenu(x, y, items) {
    hideContextMenu();
    lastContextMenuPos = { x, y };
    const menu = document.createElement('div');
    menu.className = 'context-menu';
    menu.appendChild(buildContextMenuItems(items));
    document.body.appendChild(menu);

    const r = menu.getBoundingClientRect();
    const left = (x + r.width > window.innerWidth - 4) ? Math.max(4, window.innerWidth - r.width - 4) : x;
    const top = (y + r.height > window.innerHeight - 4) ? Math.max(4, window.innerHeight - r.height - 4) : y;
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';
    activeContextMenu = menu;
}

function buildContextMenuItems(items) {
    const body = document.createElement('div');
    body.className = 'context-menu-body';
    items.forEach((item) => {
        if (item.sep) {
            const s = document.createElement('div');
            s.className = 'context-menu-separator';
            body.appendChild(s);
            return;
        }
        const el = document.createElement('div');
        el.className = 'context-menu-item' + (item.disabled ? ' context-menu-item-disabled' : '');
        el.innerHTML = `<span class="context-menu-icon">${item.icon ? `<img src="${item.icon}" alt="">` : ''}</span>` +
            `<span class="context-menu-label">${item.label}</span>` +
            (item.submenu ? '<span class="context-menu-arrow">&#9656;</span>' : '');

        if (item.submenu) {
            const sub = document.createElement('div');
            sub.className = 'context-menu submenu';
            sub.appendChild(buildContextMenuItems(item.submenu));
            el.appendChild(sub);
            el.addEventListener('mouseenter', () => {
                const er = el.getBoundingClientRect();
                sub.classList.toggle('open-left', er.right + sub.offsetWidth > window.innerWidth - 4);
            });
        }

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            if (item.disabled) return;
            if (item.submenu) return; // submenus open on hover; clicking the parent shouldn't close the menu
            if (item.action) item.action();
            hideContextMenu();
        });
        body.appendChild(el);
    });
    return body;
}

// ---- Desktop icon creation / shared listeners ----
function attachIconListeners(icon) {
    icon.addEventListener('dblclick', () => openIconWindow(icon));
    icon.addEventListener('mousedown', iconMouseDown);
    icon.addEventListener('click', highlightIcon);
    icon.addEventListener('touchstart', touchStart, { passive: false });
    icon.addEventListener('touchmove', touchMove, { passive: false });
    icon.addEventListener('touchend', touchEnd, { passive: false });
    icon.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        highlightIcon(e);
        showContextMenu(e.clientX, e.clientY, getIconContextMenu(icon));
    });
}

function openIconWindow(icon) {
    const targetId = icon.dataset.opens;
    openWindow(targetId ? document.getElementById(targetId) : icon);
}

function createDesktopIcon({ iconSrc, label, className, dataset, dataOpens, x, y }) {
    const desktop = document.querySelector('.desktop');
    if (!desktop) return null;
    const icon = document.createElement('div');
    icon.className = 'icon' + (className ? ' ' + className : '');
    icon.id = 'dyn-' + (++windowCounter);
    if (dataOpens) icon.dataset.opens = dataOpens;
    if (dataset) Object.assign(icon.dataset, dataset);
    icon.innerHTML = `<img src="${iconSrc}" alt="${label}"><span>${label}</span>`;
    icon.style.position = 'absolute';
    const snapped = snapToGrid(
        x != null ? Math.max(0, x - 45) : 0,
        y != null ? Math.max(0, y - 20) : 0
    );
    icon.style.left = snapped.x + 'px';
    icon.style.top = snapped.y + 'px';
    attachIconListeners(icon);
    desktop.appendChild(icon);
    return icon;
}

function uniqueDesktopName(base) {
    const names = new Set([...document.querySelectorAll('.desktop .icon span')].map(s => s.textContent));
    if (!names.has(base)) return base;
    let n = 2;
    while (names.has(`${base} (${n})`)) n++;
    return `${base} (${n})`;
}

// ---- Desktop menu actions ----
function getDesktopContextMenu() {
    return [
        { label: 'Arrange Icons By', submenu: [
            { label: 'Name', action: () => {} },
            { label: 'Size', action: () => {} },
            { label: 'Type', action: () => {} },
            { label: 'Modified', action: () => {} },
            { sep: true },
            { label: 'Align to Grid', action: () => alignIconsToGrid() }
        ]},
        { label: 'Refresh', action: () => alignIconsToGrid() },
        { sep: true },
        { label: 'Paste', disabled: true },
        { label: 'Paste Shortcut', disabled: true },
        { sep: true },
        { label: 'New', submenu: [
            { label: 'Folder', icon: 'assets/folder-icon.png', action: () => newFolderOnDesktop() },
            { label: 'Text Document', icon: 'assets/notepad-icon.png', action: () => newTextFileOnDesktop() },
            { label: 'Bitmap Image', icon: 'assets/image-file-icon.png', action: () => newBitmapOnDesktop() }
        ]},
        { sep: true },
        { label: 'Properties', action: () => showDesktopProperties() }
    ];
}

function alignIconsToGrid() {
    document.querySelectorAll('.desktop .icon').forEach(icon => {
        const snapped = snapToGrid(
            parseInt(icon.style.left, 10) || icon.offsetLeft,
            parseInt(icon.style.top, 10) || icon.offsetTop
        );
        icon.style.left = snapped.x + 'px';
        icon.style.top = snapped.y + 'px';
    });
}

function newFolderOnDesktop() {
    const { x, y } = lastContextMenuPos;
    createDesktopIcon({
        iconSrc: 'assets/folder-icon.png',
        label: uniqueDesktopName('New Folder'),
        className: 'folder-new',
        x, y
    });
}

function newTextFileOnDesktop() {
    const { x, y } = lastContextMenuPos;
    createDesktopIcon({
        iconSrc: 'assets/notepad-icon.png',
        label: uniqueDesktopName('New Text Document.txt'),
        className: 'text-file',
        x, y
    });
}

function newBitmapOnDesktop() {
    const { x, y } = lastContextMenuPos;
    const label = uniqueDesktopName('New Bitmap Image.bmp');
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 320, 200);
    const dataUrl = canvas.toDataURL('image/png');
    createDesktopIcon({
        iconSrc: 'assets/image-file-icon.png',
        label,
        className: 'image-file',
        dataset: { image: dataUrl, name: label },
        x, y
    });
}

// ---- Icon menu actions ----
function getIconContextMenu(icon) {
    const img = icon.querySelector('img');
    const iconSrc = img ? img.getAttribute('src') : 'assets/image-file-icon.png';
    const system = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5'].includes(icon.id);
    return [
        { label: 'Open', icon: iconSrc, action: () => openIconWindow(icon) },
        { sep: true },
        { label: 'Create Shortcut', icon: iconSrc, action: () => createShortcut(icon) },
        { label: 'Delete', icon: 'assets/bin-icon.png', disabled: system, action: () => deleteIcon(icon) },
        { label: 'Rename', icon: 'assets/notepad-icon.png', action: () => renameIcon(icon) },
        { sep: true },
        { label: 'Properties', icon: 'assets/image-file-icon.png', action: () => showIconProperties(icon) }
    ];
}

function createShortcut(icon) {
    const img = icon.querySelector('img');
    const iconSrc = img ? img.getAttribute('src') : 'assets/image-file-icon.png';
    const base = (icon.querySelector('span').textContent || 'Shortcut').replace(/\.(jpeg|jpg|png|bmp|txt)$/i, '');
    const label = uniqueDesktopName(base + ' - Shortcut');
    const opts = {
        iconSrc,
        label,
        x: (parseInt(icon.style.left, 10) || 0) + 30,
        y: (parseInt(icon.style.top, 10) || 0) + 30
    };
    if (icon.classList.contains('image-file')) {
        opts.className = 'image-file';
        opts.dataset = { image: icon.dataset.image, name: label };
    } else {
        opts.dataOpens = icon.dataset.opens || icon.id;
    }
    createDesktopIcon(opts);
}

function deleteIcon(icon) {
    if (icon.id === 'icon1') return; // the Recycle Bin itself can't be deleted
    moveIconToBin(icon);
}

/* ===== Recycle Bin ===== */
const recycleBin = []; // persists for the session (survives closing/reopening the bin)

function getBinWindow() {
    return document.querySelector('.popup[data-owner="icon1"]');
}

function refreshBinWindows() {
    document.querySelectorAll('.popup[data-owner="icon1"]').forEach(w => {
        if (typeof w.refreshBin === 'function') w.refreshBin();
    });
}

function escHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Move a desktop icon into the Recycle Bin (keeps all its info for Restore)
function moveIconToBin(icon) {
    if (icon.id === 'icon1') return;
    const img = icon.querySelector('img');
    const entry = {
        type: icon.classList.contains('image-file') ? 'image-file'
            : icon.classList.contains('folder-new') ? 'folder-new'
            : icon.classList.contains('text-file') ? 'text-file'
            : 'shortcut',
        label: icon.querySelector('span').textContent,
        iconSrc: img ? img.getAttribute('src') : 'assets/image-file-icon.png',
        x: parseInt(icon.style.left, 10) || icon.offsetLeft,
        y: parseInt(icon.style.top, 10) || icon.offsetTop
    };
    if (entry.type === 'image-file') {
        entry.dataset = { image: icon.dataset.image, name: entry.label };
    } else {
        entry.dataOpens = icon.dataset.opens || null;
    }
    recycleBin.push(entry);
    icon.remove();
    deselectAllIcons();
    refreshBinWindows();
}

function restoreBinItem(index) {
    const entry = recycleBin[index];
    if (!entry) return;
    recycleBin.splice(index, 1);
    createDesktopIcon({
        iconSrc: entry.iconSrc,
        label: entry.label,
        className: entry.type === 'shortcut' ? '' : entry.type,
        dataset: entry.dataset,
        dataOpens: entry.dataOpens,
        x: entry.x,
        y: entry.y
    });
    refreshBinWindows();
}

function deleteBinItemForever(index) {
    if (index < 0 || index >= recycleBin.length) return;
    const entry = recycleBin[index];
    showConfirmDialog('Delete Forever', 'assets/bin-icon.png',
        `Are you sure you want to permanently delete "${escHtml(entry.label)}"? This action cannot be undone.`,
        () => {
            recycleBin.splice(index, 1);
            refreshBinWindows();
        });
}

function restoreAllBinItems() {
    recycleBin.slice().forEach(entry => {
        createDesktopIcon({
            iconSrc: entry.iconSrc,
            label: entry.label,
            className: entry.type === 'shortcut' ? '' : entry.type,
            dataset: entry.dataset,
            dataOpens: entry.dataOpens,
            x: entry.x,
            y: entry.y
        });
    });
    recycleBin.length = 0;
    refreshBinWindows();
}

function emptyRecycleBin() {
    if (!recycleBin.length) return;
    showConfirmDialog('Empty Recycle Bin', 'assets/bin-icon.png',
        'Are you sure you want to permanently delete all items in the Recycle Bin?',
        () => {
            recycleBin.length = 0;
            refreshBinWindows();
        });
}

function renameIcon(icon) {
    const span = icon.querySelector('span');
    if (!span) return;
    const oldLabel = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'icon-rename-input';
    input.value = oldLabel;
    span.replaceWith(input);
    input.focus();
    input.select();

    let finished = false;
    const commit = (save) => {
        if (finished) return;
        finished = true;
        const newLabel = save ? (input.value.trim() || oldLabel) : oldLabel;
        const newSpan = document.createElement('span');
        newSpan.textContent = newLabel;
        input.replaceWith(newSpan);
        if (save && icon.dataset.name) icon.dataset.name = newLabel;
    };
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); commit(true); }
        else if (e.key === 'Escape') { commit(false); }
    });
    input.addEventListener('blur', () => commit(true));
}

// ---- Properties dialogs ----
function showIconProperties(icon) {
    const name = icon.querySelector('span').textContent;
    const img = icon.querySelector('img');
    const iconSrc = img ? img.getAttribute('src') : 'assets/image-file-icon.png';
    let type = 'Shortcut';
    if (icon.classList.contains('image-file')) type = 'Bitmap Image';
    else if (icon.classList.contains('folder-new') || icon.dataset.opens === 'icon3' || icon.id === 'icon3') type = 'File Folder';
    else if (icon.classList.contains('text-file') || icon.dataset.opens === 'icon5' || icon.id === 'icon5') type = 'Text Document';
    else if (iconContent[icon.id]) type = 'Application';
    const size = icon.classList.contains('image-file') ? '~12 KB' : '0 KB';
    showPropertiesDialog(name, iconSrc, [
        ['Type', type],
        ['Location', 'Desktop'],
        ['Size', size]
    ]);
}

function showDesktopProperties() {
    const items = document.querySelectorAll('.desktop .icon').length;
    showPropertiesDialog('Desktop', 'assets/folder-icon.png', [
        ['Type', 'Folder'],
        ['Items', String(items)],
        ['Location', 'My Computer']
    ]);
}

function showPropertiesDialog(title, iconSrc, rows) {
    document.querySelectorAll('.props-dialog').forEach(d => d.remove());
    const dlg = document.createElement('div');
    dlg.className = 'props-dialog';
    dlg.innerHTML = `
        <div class="popup-header">
            <img class="popup-icon" src="${iconSrc}" alt="" draggable="false">
            <span class="popup-title">${title} Properties</span>
            <div class="popup-controls">
                <button class="win-btn win-btn-close props-dialog-close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="props-dialog-body">
            <img src="${iconSrc}" alt="">
            <div>
                <h3>${title}</h3>
                ${rows.map(([k, v]) => `<div class="props-row"><strong>${k}:</strong> ${v}</div>`).join('')}
            </div>
        </div>
        <div class="props-dialog-buttons">
            <button class="props-dialog-ok">OK</button>
        </div>
    `;
    document.body.appendChild(dlg);
    const rect = dlg.getBoundingClientRect();
    dlg.style.left = Math.max(0, (window.innerWidth - rect.width) / 2) + 'px';
    dlg.style.top = Math.max(0, (window.innerHeight - rect.height) / 2) + 'px';
    const close = () => dlg.remove();
    dlg.querySelector('.props-dialog-close').addEventListener('click', close);
    dlg.querySelector('.props-dialog-ok').addEventListener('click', close);
}

// Simple XP-style Yes/No confirmation dialog
function showConfirmDialog(title, iconSrc, message, onConfirm) {
    document.querySelectorAll('.props-dialog').forEach(d => d.remove());
    const dlg = document.createElement('div');
    dlg.className = 'props-dialog';
    dlg.innerHTML = `
        <div class="popup-header">
            <img class="popup-icon" src="${iconSrc}" alt="" draggable="false">
            <span class="popup-title">${title}</span>
            <div class="popup-controls">
                <button class="win-btn win-btn-close confirm-close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="props-dialog-body">
            <img src="${iconSrc}" alt="">
            <div>
                <p style="font-size:11px;color:#000;margin:0;line-height:1.4;">${message}</p>
            </div>
        </div>
        <div class="props-dialog-buttons">
            <button class="props-dialog-ok confirm-yes">Yes</button>
            <button class="props-dialog-ok confirm-no" style="margin-left:8px;">No</button>
        </div>
    `;
    document.body.appendChild(dlg);
    const rect = dlg.getBoundingClientRect();
    dlg.style.left = Math.max(0, (window.innerWidth - rect.width) / 2) + 'px';
    dlg.style.top = Math.max(0, (window.innerHeight - rect.height) / 2) + 'px';
    const close = () => dlg.remove();
    dlg.querySelector('.confirm-close').addEventListener('click', close);
    dlg.querySelector('.confirm-no').addEventListener('click', close);
    dlg.querySelector('.confirm-yes').addEventListener('click', () => { close(); if (onConfirm) onConfirm(); });
}

// Open an image in its own viewer window (used from the Folder app)
function openImageFileWindow(src, name, collection) {
    const fakeIcon = document.createElement('div');
    fakeIcon.className = 'icon image-file';
    fakeIcon.id = 'imgwin-' + (++windowCounter);
    fakeIcon.dataset.image = src;
    fakeIcon.dataset.name = name;
    if (collection) fakeIcon._imgCollection = collection;
    openWindow(fakeIcon);
}

// Open (or focus existing) window for an icon
function openWindow(icon) {
    if (openWindows[icon.id]) {
        const existing = openWindows[icon.id];
        if (existing.style.display === 'none') {
            // Restore a minimized window (animated out of the taskbar)
            restoreWindow(existing);
        } else {
            existing.style.display = 'flex';
            bringToFront(existing);
            updateTaskbarItemState(existing);
        }
        return;
    }
    createWindowElement(icon);
}

function createWindowElement(icon) {
    let data = iconContent[icon.id];

    // Image files (desktop icons or files inside the Folder) don't need an
    // entry in iconContent - build the viewer content on the fly.
    if (!data && icon.classList.contains('image-file')) {
        const src = icon.dataset.image;
        const name = icon.dataset.name || (src ? src.split('/').pop() : 'Image');
        data = {
            title: `${name} - Windows Picture and Fax Viewer`,
            icon: 'assets/image-file-icon.png',
            content: `
                <div class="img-viewer">
                    <div class="img-stage">
                        <img src="${src}" alt="${name}">
                    </div>
                    <div class="img-toolbar">
                        <button class="img-btn" data-action="prev" title="Previous Image"><img class="img-btn-icon" src="assets/viewer-prev.png" alt=""></button>
                        <button class="img-btn" data-action="next" title="Next Image"><img class="img-btn-icon" src="assets/viewer-next.png" alt=""></button>
                        <span class="img-sep"></span>
                        <button class="img-btn" data-action="zoom-in" title="Zoom In"><img class="img-btn-icon" src="assets/viewer-zoom-in.png" alt=""></button>
                        <button class="img-btn" data-action="zoom-out" title="Zoom Out"><img class="img-btn-icon" src="assets/viewer-zoom-out.png" alt=""></button>
                        <button class="img-btn" data-action="actual-size" title="Actual Size"><img class="img-btn-icon" src="assets/viewer-actual-size.png" alt=""></button>
                        <button class="img-btn" data-action="best-fit" title="Best Fit"><img class="img-btn-icon" src="assets/viewer-best-fit.png" alt=""></button>
                        <span class="img-sep"></span>
                        <button class="img-btn" data-action="rotate-left" title="Rotate Counterclockwise"><img class="img-btn-icon" src="assets/viewer-rotate-left.png" alt=""></button>
                        <button class="img-btn" data-action="rotate-right" title="Rotate Clockwise"><img class="img-btn-icon" src="assets/viewer-rotate-right.png" alt=""></button>
                        <span class="img-sep"></span>
                        <button class="img-btn" data-action="save" title="Save"><img class="img-btn-icon" src="assets/viewer-save.png" alt=""></button>
                        <span class="img-sep"></span>
                        <button class="img-btn img-btn-inert" data-action="delete" title="Delete" disabled><img class="img-btn-icon" src="assets/viewer-delete.png" alt=""></button>
                        <button class="img-btn img-btn-inert" data-action="print" title="Print" disabled><img class="img-btn-icon" src="assets/viewer-print.png" alt=""></button>
                        <button class="img-btn img-btn-inert" data-action="copy" title="Copy to..." disabled><img class="img-btn-icon" src="assets/viewer-copy.png" alt=""></button>
                        <button class="img-btn img-btn-inert" data-action="help" title="Help" disabled><img class="img-btn-icon" src="assets/viewer-help.png" alt=""></button>
                        <span class="img-zoom-label">Fit 100%</span>
                    </div>
                </div>`
        };
    } else if (!data && icon.classList.contains('folder-new')) {
        // A folder created from the right-click menu: its own empty window
        const folderLabel = icon.querySelector('span').textContent || 'New Folder';
        data = {
            title: folderLabel,
            icon: 'assets/folder-icon.png',
            content: `
                <div class="exp-chrome">
                  <div class="exp-menubar">
                    <span class="exp-menu-item">File</span>
                    <span class="exp-menu-item">Edit</span>
                    <span class="exp-menu-item">View</span>
                    <span class="exp-menu-item">Favorites</span>
                    <span class="exp-menu-item">Tools</span>
                    <span class="exp-menu-item">Help</span>
                  </div>
                  <div class="exp-toolbar">
                    <button class="exp-tool-btn">&#8592; Back</button>
                    <button class="exp-tool-btn">Forward &#8594;</button>
                    <button class="exp-tool-btn">&#8593; Up</button>
                    <span class="exp-tool-sep"></span>
                    <button class="exp-tool-btn">Search</button>
                    <button class="exp-tool-btn">Folders</button>
                    <span class="exp-tool-sep"></span>
                    <button class="exp-tool-btn">Views</button>
                  </div>
                  <div class="exp-address-bar">
                    <span class="exp-address-label">Address</span>
                    <div class="exp-address-input exp-address-name"></div>
                  </div>
                  <div class="exp-body">
                    <div class="exp-sidebar">
                      <div class="exp-panel">
                        <div class="exp-panel-title">File and Folder Tasks</div>
                        <div class="exp-panel-item">Make a new folder</div>
                        <div class="exp-panel-item">Publish this folder to the Web</div>
                        <div class="exp-panel-item">Share this folder</div>
                      </div>
                      <div class="exp-panel">
                        <div class="exp-panel-title">Other Places</div>
                        <div class="exp-panel-item">My Documents</div>
                        <div class="exp-panel-item">My Computer</div>
                      </div>
                    </div>
                    <div class="exp-files-area">
                      <div class="exp-empty">This folder is empty.</div>
                    </div>
                  </div>
                  <div class="exp-statusbar">0 objects</div>
                </div>`
        };
    } else if (!data && icon.classList.contains('text-file')) {
        // A text document created from the right-click menu: its own empty Notepad
        const textLabel = icon.querySelector('span').textContent || 'New Text Document.txt';
        data = {
            title: textLabel + ' - Notepad',
            icon: 'assets/notepad-icon.png',
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
                <textarea class="np-textarea" spellcheck="false"></textarea>`
        };
    }

    windowCounter++;

    const win = document.createElement('div');
    win.className = 'popup';
    win.dataset.owner = icon.id;
    win.dataset.icon = data.icon;

    win.innerHTML = `
        <div class="popup-header">
            <img class="popup-icon" src="${data.icon}" alt="" draggable="false">
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
    if (icon.id === 'icon1') {
        // Recycle Bin window, sized like the Folder app
        win.style.width = '560px';
        win.style.height = '420px';
        win.dataset.minW = '400';
        win.dataset.minH = '300';
    } else if (icon.id === 'icon5') {
        // Notepad opens ~14% bigger (400x300 * 1.14)
        win.style.width = '456px';
        win.style.height = '342px';
    } else if (icon.id === 'icon3') {
        // Folder opens large like the XP Explorer, with a minimum resize size
        const defW = Math.min(680, Math.max(480, window.innerWidth - 40));
        const defH = Math.min(460, Math.max(360, window.innerHeight - 80));
        win.style.width = defW + 'px';
        win.style.height = defH + 'px';
        win.dataset.minW = '480';
        win.dataset.minH = '360';
    } else if (icon.classList.contains('folder-new')) {
        // New folders get their own larger empty window
        win.style.width = '560px';
        win.style.height = '420px';
        win.dataset.minW = '400';
        win.dataset.minH = '300';
    } else if (icon.classList.contains('text-file')) {
        // New text documents open like Notepad
        win.style.width = '456px';
        win.style.height = '342px';
    } else {
        win.style.width = '400px';
        win.style.height = '300px';
    }

    if (icon.id === 'icon1') {
        contentEl.classList.add('no-padding');
        setupBin(win);
    } else if (icon.id === 'icon2') {
        contentEl.classList.add('no-padding');
        setupBrowser(win);
    } else if (icon.id === 'icon4') {
        contentEl.classList.add('no-padding');
    } else if (icon.id === 'icon5') {
        contentEl.classList.add('no-padding');
        setupNotepad(win, initialNotepad);
        initialNotepad = false;
    } else if (icon.id === 'icon3') {
        contentEl.classList.add('no-padding');
        setupFolder(win);
    } else if (icon.classList.contains('folder-new')) {
        contentEl.classList.add('no-padding');
        setupNewFolderWindow(win);
    } else if (icon.classList.contains('text-file')) {
        contentEl.classList.add('no-padding');
        setupNewNotepadWindow(win);
    } else if (icon.classList.contains('image-file')) {
        contentEl.classList.add('no-padding');
        const collection = icon._imgCollection || getDesktopImageCollection();
        const index = Math.max(0, collection.findIndex(i => i.src === icon.dataset.image));
        setupImageViewer(win, collection, index);
    } else {
        contentEl.classList.remove('no-padding');
    }

    setupWindowControls(win);
    bringToFront(win);
    addTaskbarButton(win);
    openWindows[icon.id] = win;
}

function bringToFront(win) {
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
    document.querySelectorAll('.popup').forEach(w => w.classList.remove('active-window'));
    win.classList.add('active-window');
    document.querySelectorAll('.taskbar-item').forEach(item => {
        item.classList.toggle('active', item.dataset.owner === win.dataset.owner);
    });
}

function addTaskbarButton(win) {
    const taskbarWindows = document.querySelector('.taskbar-windows');
    if (!taskbarWindows) return;

    const existingItem = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"]`);
    if (existingItem) {
        updateTaskbarItemState(win);
        return;
    }

    const title = win.querySelector('.popup-title').textContent;
    const iconSrc = win.dataset.icon;
    const item = document.createElement('div');
    item.className = 'taskbar-item';
    item.dataset.owner = win.dataset.owner;
    item.innerHTML = `<img src="${iconSrc}" alt=""><span>${title}</span>`;

    item.addEventListener('click', () => {
        const isMinimized = win.style.display === 'none';
        const isActive = win.classList.contains('active-window');

        if (isMinimized) {
            // Restore a minimized window (animated out of the taskbar)
            restoreWindow(win);
        } else if (isActive) {
            // Minimize the highlighted (active) window
            minimizeWindow(win);
        } else {
            // Window is open but behind others - bring it to front
            bringToFront(win);
            updateTaskbarItemState(win);
        }
    });

    taskbarWindows.appendChild(item);
    updateTaskbarItemState(win);
}

function updateTaskbarItemState(win) {
    const item = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"]`);
    if (!item) return;

    // A minimized window's taskbar button looks "closed" (light blue), not pressed
    const minimized = win.style.display === 'none';
    item.classList.toggle('active', win.classList.contains('active-window') && !minimized);
}

function setupWindowControls(win) {
    const header = win.querySelector('.popup-header');
    const minimizeBtn = win.querySelector('.popup-minimize');
    const maximizeBtn = win.querySelector('.popup-maximize');
    const closeBtn = win.querySelector('.popup-close');
    const handle = win.querySelector('.resize-handle');

    let isMaximized = false;

    win.addEventListener('mousedown', () => bringToFront(win));

    minimizeBtn.addEventListener('click', () => minimizeWindow(win));
    closeBtn.addEventListener('click', () => closeWindow(win));

    maximizeBtn.addEventListener('click', () => {
        if (isMaximized) {
            const prev = win._maxPrev;
            if (!prev) return;
            animateWindowTo(win, prev, 180, 'cubic-bezier(0.25, 0.1, 0.25, 1)', () => {
                win.style.left = prev.left + 'px';
                win.style.top = prev.top + 'px';
                win.style.width = prev.width + 'px';
                win.style.height = prev.height + 'px';
                win._maxPrev = null;
                isMaximized = false;
                win.dispatchEvent(new CustomEvent('windowResized'));
            });
        } else {
            const r = win.getBoundingClientRect();
            win._maxPrev = {
                left: parseFloat(win.style.left) || r.left,
                top: parseFloat(win.style.top) || r.top,
                width: r.width,
                height: r.height
            };
            const target = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight - 40 };
            animateWindowTo(win, target, 180, 'cubic-bezier(0.25, 0.1, 0.25, 1)', () => {
                win.style.left = '0';
                win.style.top = '0';
                win.style.width = '100vw';
                win.style.height = 'calc(100vh - 40px)';
                isMaximized = true;
                win.dispatchEvent(new CustomEvent('windowResized'));
            });
        }
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
        const minW = parseInt(win.dataset.minW || '200', 10);
        const minH = parseInt(win.dataset.minH || '150', 10);
        win.style.width = Math.max(rw + (e.clientX - rx), minW) + 'px';
        win.style.height = Math.max(rh + (e.clientY - ry), minH) + 'px';
    }

    function onResizeUp() {
        isResizing = false;
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', onResizeUp);
        win.dispatchEvent(new CustomEvent('windowResized'));
    }
}

// Where a window "flies" to on the taskbar when minimizing
function getTaskbarTargetRect(win) {
    const item = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"]`);
    if (item) {
        const r = item.getBoundingClientRect();
        return { left: r.left + r.width / 2, top: r.top + r.height / 2, width: r.width, height: r.height };
    }
    return { left: window.innerWidth / 2, top: window.innerHeight - 15, width: 60, height: 30 };
}

// Animate the window to a target rect (used for maximize / restore)
function animateWindowTo(win, to, duration, easing, onDone) {
    const from = win.getBoundingClientRect();
    const anim = win.animate([
        { left: from.left + 'px', top: from.top + 'px', width: from.width + 'px', height: from.height + 'px' },
        { left: to.left + 'px', top: to.top + 'px', width: to.width + 'px', height: to.height + 'px' }
    ], { duration, easing, fill: 'forwards' });
    onAnimComplete(anim, () => {
        win.getAnimations().forEach(a => a.cancel());
        if (onDone) onDone();
    }, duration);
}

// Run a completion callback once the animation ends. A timeout fallback makes
// sure it runs even if the tab is backgrounded (where animation events are
// throttled and may not fire until the tab is visible again).
function onAnimComplete(anim, onDone, duration) {
    let done = false;
    const finish = () => {
        if (done) return;
        done = true;
        clearTimeout(fallback);
        onDone();
    };
    const fallback = setTimeout(finish, (duration || 200) + 80);
    anim.onfinish = finish;
}

// Minimize: shrink the window down into its taskbar button
function minimizeWindow(win) {
    if (win.dataset.busy === '1') return;
    win.dataset.busy = '1';
    const r = win.getBoundingClientRect();
    win._restoreRect = { left: r.left, top: r.top, width: r.width, height: r.height };
    const t = getTaskbarTargetRect(win);
    const anim = win.animate([
        { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', opacity: 1 },
        { left: (t.left - t.width / 2) + 'px', top: (t.top - t.height / 2) + 'px', width: t.width + 'px', height: t.height + 'px', opacity: 0 }
    ], { duration: 200, easing: 'cubic-bezier(0.55, 0, 0.85, 0.36)', fill: 'forwards' });
    onAnimComplete(anim, () => {
        win.style.display = 'none';
        win.style.opacity = '';
        win.getAnimations().forEach(a => a.cancel());
        delete win.dataset.busy;
        updateTaskbarItemState(win);
    }, 200);
}

// Restore a minimized window: grow it back out of the taskbar button
function restoreWindow(win) {
    const restore = win._restoreRect || { left: 80, top: 60, width: 400, height: 300 };
    const t = getTaskbarTargetRect(win);
    win.getAnimations().forEach(a => a.cancel());
    delete win.dataset.busy;
    win.style.display = 'flex';
    win.style.opacity = '1';
    bringToFront(win);
    const anim = win.animate([
        { left: (t.left - t.width / 2) + 'px', top: (t.top - t.height / 2) + 'px', width: t.width + 'px', height: t.height + 'px', opacity: 0 },
        { left: restore.left + 'px', top: restore.top + 'px', width: restore.width + 'px', height: restore.height + 'px', opacity: 1 }
    ], { duration: 200, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', fill: 'backwards' });
    onAnimComplete(anim, () => {
        win.style.left = restore.left + 'px';
        win.style.top = restore.top + 'px';
        win.style.width = restore.width + 'px';
        win.style.height = restore.height + 'px';
        win.style.opacity = '';
        win.getAnimations().forEach(a => a.cancel());
        updateTaskbarItemState(win);
    }, 200);
}

// Close: quick shrink + fade, then remove the window
function closeWindow(win) {
    if (win.dataset.busy === '1') return;
    win.dataset.busy = '1';
    const anim = win.animate([
        { transform: 'scale(1)', opacity: 1, transformOrigin: '50% 100%' },
        { transform: 'scale(0.75)', opacity: 0 }
    ], { duration: 160, easing: 'ease-in', fill: 'forwards' });
    onAnimComplete(anim, () => {
        delete openWindows[win.dataset.owner];
        const taskbarItem = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"]`);
        if (taskbarItem) taskbarItem.remove();
        win.remove();
    }, 160);
}

// Folder / Explorer app - shows projects and lets you drag image files in
function setupFolder(win) {
    const projectList = win.querySelector('.exp-project-list');
    const preview = win.querySelector('.exp-preview');

    const files = folderFiles; // persistent - survives closing/reopening the Folder

    let activeIndex = 0;

    function render() {
        projectList.innerHTML = files.map((file, index) => {
            const iconHtml = file.kind === 'image'
                ? `<img class="exp-file-icon" src="assets/image-file-icon.png" alt="">`
                : `<div class="exp-project-icon">📄</div>`;
            const type = file.kind === 'image' ? 'Image' : file.type;
            return `
                <button class="exp-project-item${index === activeIndex ? ' active' : ''}" data-index="${index}">
                    ${iconHtml}
                    <div class="exp-project-text">
                        <strong>${file.name}</strong>
                        <span>${type}</span>
                    </div>
                </button>`;
        }).join('');

        projectList.querySelectorAll('.exp-project-item').forEach((item) => {
            item.addEventListener('click', () => {
                activeIndex = parseInt(item.dataset.index, 10);
                render();
                updatePreview();
            });
            const idx = parseInt(item.dataset.index, 10);
            if (files[idx] && files[idx].kind === 'image') {
                // Images can be dragged back out of the Folder onto the desktop
                attachFolderImageDrag(item, win, files[idx], idx);
            }
        });
    }

    function updatePreview() {
        const file = files[activeIndex];
        if (!file) return;

        if (file.kind === 'image') {
            preview.innerHTML = `
                <h3>${file.name}</h3>
                <div class="exp-image-preview"><img src="${file.src}" alt="${file.name}"></div>
                <div class="exp-preview-actions">
                    <button class="exp-open-btn">Open image</button>
                </div>`;
            preview.querySelector('.exp-open-btn').addEventListener('click', () => {
                openImageFileWindow(file.src, file.name, getFolderImageCollection(win));
            });
        } else {
            preview.innerHTML = `
                <h3>${file.name}</h3>
                <p>${file.summary}</p>
                <div class="exp-preview-actions">
                    <button class="exp-open-btn">Open project</button>
                </div>`;
            preview.querySelector('.exp-open-btn').addEventListener('click', () => {
                window.open(file.url, '_blank', 'noopener,noreferrer');
            });
        }
    }

    // Expose the file list (used for Next/Previous navigation in the viewer)
    win.files = files;

    // Called when an image file is dragged in from the desktop
    win.addImageFile = (src, name) => {
        files.push({ kind: 'image', src, name });
        activeIndex = files.length - 1;
        render();
        updatePreview();
    };

    // Called when an image file is dragged back out onto the desktop
    win.removeImageFile = (index) => {
        files.splice(index, 1);
        if (activeIndex >= files.length) activeIndex = Math.max(0, files.length - 1);
        render();
        updatePreview();
    };

    render();
    updatePreview();
}

// New folder created from the right-click menu: fills in the window title/address
function setupNewFolderWindow(win) {
    const title = win.querySelector('.popup-title').textContent;
    const addr = win.querySelector('.exp-address-name');
    if (addr) addr.textContent = '📁 ' + title;
}

// New text document created from the right-click menu: an empty Notepad
function setupNewNotepadWindow(win) {
    setupNotepad(win, false, '');
}

// Recycle Bin window: lists deleted items with Restore / Delete Forever
function setupBin(win) {
    const list = win.querySelector('.bin-list');
    const status = win.querySelector('.exp-statusbar');
    let activeIndex = -1;

    function render() {
        if (!recycleBin.length) {
            list.innerHTML = '<div class="bin-empty">The Recycle Bin is empty.</div>';
            if (status) status.textContent = 'The Recycle Bin is empty';
            return;
        }
        list.innerHTML = recycleBin.map((item, index) => `
            <button class="bin-item${index === activeIndex ? ' active' : ''}" data-index="${index}">
                <img class="bin-item-icon" src="${item.iconSrc}" alt="">
                <span class="bin-item-name">${escHtml(item.label)}</span>
                <span class="bin-item-loc">Desktop</span>
            </button>`).join('');
        if (status) status.textContent = recycleBin.length + (recycleBin.length === 1 ? ' object' : ' objects');

        list.querySelectorAll('.bin-item').forEach(el => {
            const idx = parseInt(el.dataset.index, 10);
            el.addEventListener('click', () => {
                activeIndex = idx;
                render();
            });
            el.addEventListener('dblclick', () => restoreBinItem(idx));
            el.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                activeIndex = idx;
                render();
                const item = recycleBin[idx];
                if (!item) return;
                showContextMenu(e.clientX, e.clientY, [
                    { label: 'Restore', icon: item.iconSrc, action: () => restoreBinItem(idx) },
                    { sep: true },
                    { label: 'Delete Forever', icon: 'assets/bin-icon.png', action: () => deleteBinItemForever(idx) }
                ]);
            });
        });
    }

    const emptyBtn = win.querySelector('[data-bin-action="empty"]');
    const restoreAllBtn = win.querySelector('[data-bin-action="restore-all"]');
    if (emptyBtn) emptyBtn.addEventListener('click', () => emptyRecycleBin());
    if (restoreAllBtn) restoreAllBtn.addEventListener('click', () => restoreAllBinItems());

    win.refreshBin = render;
    render();
}

// Note: GitHub can't be embedded in an iframe (CSP frame-ancestors 'none'),
// so the homepage stays on Wikipedia, which allows embedding.
const HOME_URL = 'https://en.wikipedia.org';

function setupBrowser(win) {
    const urlInput = win.querySelector('#browserUrl');
    const goButton = win.querySelector('#browserGo');
    const frame = win.querySelector('#browserFrame');
    const backButton = win.querySelector('#browserBack');
    const forwardButton = win.querySelector('#browserForward');
    const refreshButton = win.querySelector('#browserRefresh');
    const homeButton = win.querySelector('#browserHome');
    const statusText = win.querySelector('#ieStatusText');

    let browserHistory = [HOME_URL];
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

    homeButton.addEventListener('click', () => navigateBrowser(HOME_URL, true));

    function navigateBrowser(rawUrl, addToHistory) {
        let url = rawUrl.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        statusText.textContent = 'Opening page ' + url + '...';
        frame.src = url;
        urlInput.value = url;

        if (addToHistory) {
            browserHistory = browserHistory.slice(0, browserHistoryIndex + 1);
            browserHistory.push(url);
            browserHistoryIndex++;
        }

        const loadTimeout = setTimeout(() => {
            statusText.textContent = "This page can't be displayed in a window";
        }, 3000);

        frame.addEventListener('load', () => {
            clearTimeout(loadTimeout);
            statusText.textContent = 'Done';
        }, { once: true });
    }
}

// Paint app now loads the full classic Windows Paint (all tools & menus)
// via an embedded iframe to https://jspaint.app/ - see iconContent.icon4.

// Notepad app
function setupNotepad(win, typewriter, initialText) {
    const menuItems = win.querySelectorAll('.np-menu-item');
    const textarea = win.querySelector('.np-textarea');

    textarea.value = initialText != null ? initialText : WELCOME_NOTE_TEXT;

    // Typewriter effect (only on the initial Notepad that opens with the site)
    if (typewriter) {
        textarea.value = '';
        textarea.readOnly = true;
        let i = 0;
        const typeChar = () => {
            if (!document.contains(textarea)) return; // window was closed
            if (i < WELCOME_NOTE_TEXT.length) {
                textarea.value = WELCOME_NOTE_TEXT.slice(0, i + 1);
                i++;
                setTimeout(typeChar, 28);
            } else {
                textarea.readOnly = false;
            }
        };
        typeChar();
    }

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
// Apps available on this desktop (opened from the Start menu)
const startAppTargets = {
    internet: 'icon2',
    notepad: 'icon5',
    paint: 'icon4',
    mydocuments: 'icon3'
};

// Friendly names for the "Application not found" dialog
const startAppNames = {
    internet: 'Internet Explorer', email: 'Outlook Express', minesweeper: 'Minesweeper',
    notepad: 'Notepad', winamp: 'Winamp', paint: 'Paint',
    mediaplayer: 'Windows Media Player', messenger: 'Windows Messenger', allprograms: 'All Programs',
    mydocuments: 'My Documents', myrecent: 'My Recent Documents', mypictures: 'My Pictures',
    mymusic: 'My Music', mycomputer: 'My Computer', controlpanel: 'Control Panel',
    setaccess: 'Set Program Access and Defaults', connectto: 'Connect To', printers: 'Printers and Faxes',
    help: 'Help and Support', search: 'Search', run: 'Run'
};

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
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const app = item.dataset.app;
            startMenu.classList.add('hidden');
            const targetId = startAppTargets[app];
            if (targetId) {
                openWindow(document.getElementById(targetId));
            } else {
                showAppNotFound(startAppNames[app] || app);
            }
        });
    });
}

// "Application not found" error dialog + error sound (like the reference)
function playErrorSound() {
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const now = ctx.currentTime;
        // Windows XP error-style beep: two short descending tones
        [[880, 0], [660, 0.16]].forEach(([freq, offset]) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = freq;
            const t = now + offset;
            gain.gain.setValueAtTime(0.0001, t);
            gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
            osc.connect(gain).connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.22);
        });
    } catch (e) { /* audio not available */ }
}

function showAppNotFound(appName) {
    playErrorSound();

    document.querySelectorAll('.error-dialog').forEach(d => d.remove());

    const dlg = document.createElement('div');
    dlg.className = 'error-dialog';
    dlg.innerHTML = `
        <div class="popup-header">
            <img class="popup-icon" src="assets/error-icon.png" alt="" draggable="false">
            <span class="popup-title">C:\\</span>
            <div class="popup-controls">
                <button class="win-btn win-btn-close error-dialog-close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="error-dialog-body">
            <img class="error-dialog-icon" src="assets/error-icon.png" alt="">
            <div>
                <p style="color:#666;">C:\\</p>
                <p><strong>Application not found</strong></p>
                <p style="color:#888; font-size:11px;">${appName}</p>
            </div>
        </div>
        <div class="error-dialog-buttons">
            <button class="error-dialog-ok">OK</button>
        </div>
    `;
    document.body.appendChild(dlg);

    const rect = dlg.getBoundingClientRect();
    dlg.style.left = Math.max(0, (window.innerWidth - rect.width) / 2) + 'px';
    dlg.style.top = Math.max(0, (window.innerHeight - rect.height) / 2) + 'px';

    const close = () => dlg.remove();
    dlg.querySelector('.error-dialog-close').addEventListener('click', close);
    dlg.querySelector('.error-dialog-ok').addEventListener('click', close);
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