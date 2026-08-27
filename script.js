const iconContent = {
    icon1: {
        title: "Recycle Bin",
        icon: "assets/bin-icon.png",
        content: `
          <div class="exp-chrome">
            <div class="exp-menubar">
              <span class="exp-menu-item" data-menu="file">File</span>
              <span class="exp-menu-item" data-menu="edit">Edit</span>
              <span class="exp-menu-item" data-menu="view">View</span>
              <span class="exp-menu-item" data-menu="favorites">Favorites</span>
              <span class="exp-menu-item" data-menu="tools">Tools</span>
              <span class="exp-menu-item" data-menu="help">Help</span>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="file">
              <div class="exp-dropdown-item" data-action="empty">Empty Recycle Bin</div>
              <div class="exp-dropdown-item" data-action="properties">Properties</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="edit">
              <div class="exp-dropdown-item" data-action="undo">Undo</div>
              <div class="exp-dropdown-item" data-action="redo">Redo</div>
              <div class="exp-dropdown-divider"></div>
              <div class="exp-dropdown-item" data-action="cut">Cut</div>
              <div class="exp-dropdown-item" data-action="copy">Copy</div>
              <div class="exp-dropdown-item" data-action="paste">Paste</div>
              <div class="exp-dropdown-item" data-action="delete">Delete</div>
              <div class="exp-dropdown-item" data-action="rename">Rename</div>
              <div class="exp-dropdown-item" data-action="selectall">Select All</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="view">
              <div class="exp-dropdown-item" data-action="details">Details</div>
              <div class="exp-dropdown-item" data-action="list">List</div>
              <div class="exp-dropdown-item" data-action="tiles">Tiles</div>
              <div class="exp-dropdown-item" data-action="thumbnails">Thumbnails</div>
              <div class="exp-dropdown-item" data-action="arrangelineup">Arrange Icons →</div>
              <div class="exp-dropdown-hidden" data-dropdown="arrangelineup_submenu">
                <div class="exp-dropdown-item" data-action="arrangelineupbyname">by Name</div>
                <div class="exp-dropdown-item" data-action="arrangelineupbysize">by Size</div>
                <div class="exp-dropdown-item" data-action="arrangelineupbytype">by Type</div>
                <div class="exp-dropdown-item" data-action="arrangelineupbymodified">by Modified</div>
              </div>
              <div class="exp-dropdown-item" data-action="aligntogrid">Align to Grid</div>
              <div class="exp-dropdown-item" data-action="autoadjust">Auto Arrange</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="favorites">
              <div class="exp-dropdown-item" data-action="addtofavorites">Add to Favorites...</div>
              <div class="exp-dropdown-item" data-action="organizefavorites">Organize Favorites...</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="tools">
              <div class="exp-dropdown-item" data-action="mapnetworkdrive">Map Network Drive...</div>
              <div class="exp-dropdown-item" data-action="disconnectnetworkdrive">Disconnect Network Drive</div>
              <div class="exp-dropdown-item" data-action="toolsoptions">Tools Options...</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="help">
              <div class="exp-dropdown-item" data-action="helpcontents">Help Contents</div>
              <div class="exp-dropdown-item" data-action="helpsearch">Help Search</div>
              <div class="exp-dropdown-item" data-action="helptutorial">Help Tutorial</div>
              <div class="exp-dropdown-divider"></div>
              <div class="exp-dropdown-item" data-action="about">About Windows Explorer</div>
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
              <span class="ie-menu-item" data-menu="file">File</span>
              <span class="ie-menu-item" data-menu="edit">Edit</span>
              <span class="ie-menu-item" data-menu="view">View</span>
              <span class="ie-menu-item" data-menu="favorites">Favorites</span>
              <span class="ie-menu-item" data-menu="tools">Tools</span>
              <span class="ie-menu-item" data-menu="help">Help</span>
              <img class="ie-logo" src="assets/internet-explorer-icon.png" alt="">
            </div>
            <div class="ie-dropdown hidden" data-dropdown="file">
              <div class="ie-dropdown-item" data-action="new">New</div>
              <div class="ie-dropdown-item" data-action="open">Open...</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="save">Save As...</div>
              <div class="ie-dropdown-item" data-action="saveas">Save As...</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="print">Print...</div>
              <div class="ie-dropdown-item" data-action="printpreview">Print Preview</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="properties">Properties</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="edit">
              <div class="ie-dropdown-item" data-action="cut">Cut</div>
              <div class="ie-dropdown-item" data-action="copy">Copy</div>
              <div class="ie-dropdown-item" data-action="paste">Paste</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="selectall">Select All</div>
              <div class="ie-dropdown-item" data-action="find">Find (on this page)...</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="view">
              <div class="ie-dropdown-item" data-action="toolbar">Toolbars</div>
              <div class="ie-dropdown-item" data-action="explorerbar">Explorer Bars</div>
              <div class="ie-dropdown-item" data-action="statusbar">Status Bar</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="favorites">
              <div class="ie-dropdown-item" data-action="addtofavorites">Add to Favorites...</div>
              <div class="ie-dropdown-item" data-action="organizefavorites">Organize Favorites...</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-description="Links" data-action="links">Links</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="tools">
              <div class="ie-dropdown-item" data-action="internetoptions">Internet Options...</div>
              <div class="ie-dropdown-item" data-action="windowsupdate">Windows Update</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="help">
              <div class="ie-dropdown-item" data-action="helpcontents">Help Contents</div>
              <div class="ie-dropdown-item" data-action="helptutorial">Help Tutorial</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="about">About Internet Explorer</div>
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
              <span class="exp-menu-item" data-menu="file">File</span>
              <span class="exp-menu-item" data-menu="edit">Edit</span>
              <span class="exp-menu-item" data-menu="view">View</span>
              <span class="exp-menu-item" data-menu="favorites">Favorites</span>
              <span class="exp-menu-item" data-menu="tools">Tools</span>
              <span class="exp-menu-item" data-menu="help">Help</span>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="file">
              <div class="exp-dropdown-item" data-action="new">New</div>
              <div class="exp-dropdown-item" data-action="open">Open...</div>
              <div class="exp-dropdown-item" data-action="save">Save</div>
              <div class="exp-dropdown-item" data-action="saveas">Save As...</div>
              <div class="exp-dropdown-divider"></div>
              <div class="exp-dropdown-item" data-action="print">Print...</div>
              <div class="exp-dropdown-item" data-action="properties">Properties</div>
              <div class="exp-dropdown-divider"></div>
              <div class="exp-dropdown-item" data-action="close">Close</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="edit">
              <div class="exp-dropdown-item" data-action="undo">Undo</div>
              <div class="exp-dropdown-item" data-action="redo">Redo</div>
              <div class="exp-dropdown-divider"></div>
              <div class="exp-dropdown-item" data-action="cut">Cut</div>
              <div class="exp-dropdown-item" data-action="copy">Copy</div>
              <div class="exp-dropdown-item" data-action="paste">Paste</div>
              <div class="exp-dropdown-item" data-action="delete">Delete</div>
              <div class="exp-dropdown-item" data-action="rename">Rename</div>
              <div class="exp-dropdown-item" data-action="selectall">Select All</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="view">
              <div class="exp-dropdown-item" data-action="details">Details</div>
              <div class="exp-dropdown-item" data-action="list">List</div>
              <div class="exp-dropdown-item" data-action="tiles">Tiles</div>
              <div class="exp-dropdown-item" data-action="thumbnails">Thumbnails</div>
              <div class="exp-dropdown-item" data-action="arrangelineup">Arrange Icons →</div>
              <div class="exp-dropdown-hidden" data-dropdown="arrangelineup_submenu">
                <div class="exp-dropdown-item" data-action="arrangelineupbyname">by Name</div>
                <div class="exp-dropdown-item" data-action="arrangelineupbysize">by Size</div>
                <div class="exp-dropdown-item" data-action="arrangelineupbytype">by Type</div>
                <div class="exp-dropdown-item" data-action="arrangelineupbymodified">by Modified</div>
              </div>
              <div class="exp-dropdown-item" data-action="aligntogrid">Align to Grid</div>
              <div class="exp-dropdown-item" data-action="autoadjust">Auto Arrange</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="favorites">
              <div class="exp-dropdown-item" data-action="addtofavorites">Add to Favorites...</div>
              <div class="exp-dropdown-item" data-action="organizefavorites">Organize Favorites...</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="tools">
              <div class="exp-dropdown-item" data-action="mapnetworkdrive">Map Network Drive...</div>
              <div class="exp-dropdown-item" data-action="disconnectnetworkdrive">Disconnect Network Drive</div>
              <div class="exp-dropdown-item" data-action="toolsoptions">Tools Options...</div>
            </div>
            <div class="exp-dropdown hidden" data-dropdown="help">
              <div class="exp-dropdown-item" data-action="helpcontents">Help Contents</div>
              <div class="exp-dropdown-item" data-action="helpsearch">Help Search</div>
              <div class="exp-dropdown-item" data-action="helptutorial">Help Tutorial</div>
              <div class="exp-dropdown-divider"></div>
              <div class="exp-dropdown-item" data-action="about">About Windows Explorer</div>
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
          <div class="paint-menubar">
            <span class="paint-menu-item" data-menu="file">File</span>
            <span class="paint-menu-item" data-menu="edit">Edit</span>
            <span class="paint-menu-item" data-menu="image">Image</span>
            <span class="paint-menu-item" data-menu="colors">Colors</span>
            <span class="paint-menu-item" data-menu="help">Help</span>
          </div>
          <div class="paint-dropdown hidden" data-dropdown="file">
            <div class="paint-dropdown-item" data-action="new">New</div>
            <div class="paint-dropdown-item" data-action="open">Open...</div>
            <div class="paint-dropdown-item" data-action="save">Save</div>
            <div class="paint-dropdown-item" data-action="saveas">Save as...</div>
            <div class="paint-dropdown-divider"></div>
            <div class="paint-dropdown-item" data-action="printsetup">Print Setup...</div>
            <div class="paint-dropdown-item" data-action="print">Print...</div>
            <div class="paint-dropdown-item" data-action="exit">Exit</div>
          </div>
          <div class="paint-dropdown hidden" data-dropdown="edit">
            <div class="paint-dropdown-item" data-action="undo">Undo</div>
            <div class="paint-dropdown-item" data-action="redo">Redo</div>
            <div class="paint-dropdown-divider"></div>
            <div class="paint-dropdown-item" data-action="cut">Cut</div>
            <div class="paint-dropdown-item" data-action="copy">Copy</div>
            <div class="paint-dropdown-item" data-action="paste">Paste</div>
            <div class="paint-dropdown-item" data-action="pastetransparent">Paste Transparent</div>
            <div class="paint-dropdown-item" data-action="selectall">Select All</div>
            <div class="paint-dropdown-item" data-action="invertselection">Invert Selection</div>
          </div>
          <div class="paint-dropdown hidden" data-dropdown="image">
            <div class="paint-dropdown-item" data-action="fliprotate">Flip/Rotate</div>
            <div class="paint-dropdown-item" data-action="stretchandskew">Stretch and Skew</div>
            <div class="paint-dropdown-item" data-action="invertcolors">Invert Colors</div>
            <div class="paint-dropdown-item" data-action="attributes">Attributes</div>
            <div class="paint-dropdown-item" data-action="clearimage">Clear Image</div>
            <div class="paint-dropdown-item" data-action="drawopaque">Draw Opaque</div>
          </div>
          <div class="paint-dropdown hidden" data-dropdown="colors">
            <div class="paint-dropdown-item" data-action="editcolors">Edit Colors</div>
          </div>
          <div class="paint-dropdown hidden" data-dropdown="help">
            <div class="paint-dropdown-item" data-action="viewhelp">View Help</div>
            <div class="paint-dropdown-divider"></div>
            <div class="paint-dropdown-item" data-action="about">About Paint</div>
          </div>
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
          </div>
          <div class="np-dropdown hidden" data-dropdown="file">
            <div class="np-dropdown-item" data-action="new">New</div>
            <div class="np-dropdown-item" data-action="open">Open...</div>
            <div class="np-dropdown-item" data-action="save">Save</div>
            <div class="np-dropdown-item" data-action="saveas">Save As...</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="pagesetup">Page Setup...</div>
            <div class="np-dropdown-item" data-action="print">Print...</div>
            <div class="np-dropdown-item" data-action="printpreview">Print Preview</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="exit">Exit</div>
          </div>
          <div class="np-dropdown hidden" data-dropdown="edit">
            <div class="np-dropdown-item" data-action="undo">Undo</div>
            <div class="np-dropdown-item" data-action="redo">Redo</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="cut">Cut</div>
            <div class="np-dropdown-item" data-action="copy">Copy</div>
            <div class="np-dropdown-item" data-action="paste">Paste</div>
            <div class="np-dropdown-item" data-action="delete">Delete</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="find">Find...</div>
            <div class="np-dropdown-item" data-action="findnext">Find Next</div>
            <div class="np-dropdown-item" data-action="replace">Replace...</div>
            <div class="np-dropdown-item" data-action="gotoline">Go To...</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="selectall">Select All</div>
            <div class="np-dropdown-item" data-action="time/date">Time/Date</div>
          </div>
          <div class="np-dropdown hidden" data-dropdown="format">
            <div class="np-dropdown-item" data-action="wordwrap">Word Wrap</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="font">Font...</div>
          </div>
          <div class="np-dropdown hidden" data-dropdown="view">
            <div class="np-dropdown-item" data-action="statusbar">Status Bar</div>
          </div>
          <div class="np-dropdown hidden" data-dropdown="help">
            <div class="np-dropdown-item" data-action="helpcontents">Help Contents</div>
            <div class="np-dropdown-item" data-action="helptutorial">Help Tutorial</div>
            <div class="np-dropdown-divider"></div>
            <div class="np-dropdown-item" data-action="about">About Notepad</div>
          </div>
          <textarea class="np-textarea" spellcheck="false"></textarea>
        `
    },
    icon9: {
        title: "Snake",
        icon: "assets/snake-icon.png",
        content: `
          <div class="snake-app">
            <div class="snake-toolbar">
              <button class="snake-btn" data-action="start">Start</button>
              <button class="snake-btn" data-action="pause" disabled>Pause</button>
              <button class="snake-btn" data-action="restart">Restart</button>
              <span class="snake-score">Score: 0</span>
              <span class="snake-best">Best: 0</span>
            </div>
            <div class="snake-stage">
              <canvas class="snake-canvas" width="400" height="400"></canvas>
              <div class="snake-overlay hidden">
                <div class="snake-msg"></div>
                <button class="snake-btn" data-action="start">Play Again</button>
              </div>
              <div class="snake-dpad">
                <button class="snake-dpad-btn" data-dir="up">&#9650;</button>
                <button class="snake-dpad-btn" data-dir="left">&#9664;</button>
                <button class="snake-dpad-btn" data-dir="down">&#9660;</button>
                <button class="snake-dpad-btn" data-dir="right">&#9654;</button>
              </div>
            </div>
            <div class="snake-hint">Arrow keys / WASD to steer &middot; P to pause</div>
          </div>
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

// Persistent contents of folders created from the right-click menu, keyed by
// the folder's owner id ('dyn-N') so images dropped in survive close/reopen.
const newFolderFiles = {};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach((icon, i) => {
        attachIconListeners(icon);
        // Give the built-in icons a modified date (staggered so sorting works)
        if (!icon.dataset.mtime) {
            icon.dataset.mtime = String(Date.now() - (i + 1) * 3600000);
        }
    });
    setupContextMenus();
    setupMarqueeSelection();
    setupDesktopTouch();

    // Preload image dimensions so Properties / Arrange by Size are accurate
    document.querySelectorAll('.icon.image-file').forEach(icon => {
        if (icon.dataset.image) getImageInfo(icon.dataset.image);
    });

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
        if (desktopTouchJustDragged) {
            desktopTouchJustDragged = false;
            return; // don't clear the selection right after a touch marquee
        }
        if (!e.target.closest('.icon')) {
            deselectAllIcons();
        }
    }, { passive: false });

    setupStartMenu();
    setupClock();

    // Keep windows usable when the viewport changes (rotation / resize)
    window.addEventListener('resize', () => {
        Object.values(openWindows).forEach(w => {
            if (w.style.display !== 'none') clampWindowToScreen(w);
        });
    });

    const notepadIcon = document.getElementById('icon5');
    if (notepadIcon) {
        openWindow(notepadIcon);
        // Initial Notepad position: a bit more to the right (desktop only;
        // on mobile the window is clamped to fit the screen)
        const notepadWin = openWindows['icon5'];
        if (notepadWin && !isMobileLayout()) {
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
let longPressFired = false;          // a long-press already opened a context menu
let desktopTouchJustDragged = false; // suppress the body deselect after a touch marquee

// Highlight icon on click or tap (Ctrl/Cmd+click toggles one icon)
function highlightIcon(e) {
    const targetIcon = e.target.closest('.icon');
    if (!targetIcon) return;
    if (iconDragJustEnded) { iconDragJustEnded = false; return; } // after a drag, keep the selection
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

// Touch marquee + long-press context menu on the desktop background
function setupDesktopTouch() {
    const desktop = document.querySelector('.desktop');
    const marquee = document.querySelector('.selection-marquee');
    if (!desktop || !marquee) return;

    let tActive = false;
    let tMoved = false;
    let tStartX = 0;
    let tStartY = 0;
    let lpTimer = null;

    desktop.addEventListener('touchstart', (e) => {
        if (e.target.closest('.icon')) return;
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        tActive = true;
        tMoved = false;
        tStartX = t.clientX;
        tStartY = t.clientY;
        clearTimeout(lpTimer);
        lpTimer = setTimeout(() => {
            showContextMenu(t.clientX, t.clientY, getDesktopContextMenu());
        }, 480);
    }, { passive: false });

    desktop.addEventListener('touchmove', (e) => {
        if (!tActive) return;
        const t = e.touches[0];
        const dx = t.clientX - tStartX;
        const dy = t.clientY - tStartY;
        if (!tMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
            tMoved = true;
            clearTimeout(lpTimer);
            lpTimer = null;
            deselectAllIcons();
            e.preventDefault();
        }
        if (!tMoved) return;
        e.preventDefault();
        const dr = desktop.getBoundingClientRect();
        marquee.style.display = 'block';
        marquee.style.left = (Math.min(tStartX, t.clientX) - dr.left) + 'px';
        marquee.style.top = (Math.min(tStartY, t.clientY) - dr.top) + 'px';
        marquee.style.width = Math.abs(dx) + 'px';
        marquee.style.height = Math.abs(dy) + 'px';
        const mrect = {
            left: Math.min(tStartX, t.clientX),
            right: Math.max(tStartX, t.clientX),
            top: Math.min(tStartY, t.clientY),
            bottom: Math.max(tStartY, t.clientY)
        };
        document.querySelectorAll('.desktop .icon').forEach(icon => {
            const r = icon.getBoundingClientRect();
            icon.classList.toggle('selected', rectsIntersect(mrect, r));
        });
    }, { passive: false });

    function endTouch() {
        clearTimeout(lpTimer);
        lpTimer = null;
        if (tMoved) {
            marquee.style.display = 'none';
            desktopTouchJustDragged = true;
        }
        tActive = false;
        tMoved = false;
    }

    desktop.addEventListener('touchend', endTouch);
    desktop.addEventListener('touchcancel', endTouch);
}

// Mouse-based icon drag-and-drop
let dragMoved = false;
let dragStartClientX = 0;
let dragStartClientY = 0;
let dragGroup = []; // [{ icon, startLeft, startTop }] icons being dragged together
let iconDragJustEnded = false; // suppress the click-selection right after a drag

function iconMouseDown(e) {
    e.preventDefault();
    currentIcon = e.target.closest('.icon');
    offsetX = e.clientX - currentIcon.getBoundingClientRect().left;
    offsetY = e.clientY - currentIcon.getBoundingClientRect().top;
    dragMoved = false;
    iconDragJustEnded = false;
    dragStartClientX = e.clientX;
    dragStartClientY = e.clientY;

    // Pressing an unselected icon starts a fresh selection. Ctrl/Cmd+click is
    // still handled by the click handler, so don't touch selection then.
    if (!e.ctrlKey && !e.metaKey && !currentIcon.classList.contains('selected')) {
        deselectAllIcons();
        currentIcon.classList.add('selected');
    }

    // If this icon is part of a multi-selection, drag the whole selection
    // together (like Windows XP). Otherwise just drag this one icon.
    const selected = getSelectedIcons();
    if (selected.length > 1 && selected.includes(currentIcon)) {
        dragGroup = selected.map(icon => ({
            icon,
            startLeft: icon.offsetLeft,
            startTop: icon.offsetTop
        }));
    } else {
        dragGroup = [{ icon: currentIcon, startLeft: currentIcon.offsetLeft, startTop: currentIcon.offsetTop }];
    }

    currentIcon.style.position = 'absolute';
    currentIcon.classList.add('dragging');
    document.addEventListener('mousemove', iconMouseMove);
    document.addEventListener('mouseup', iconMouseUp);
}

function iconMouseMove(e) {
    if (!currentIcon) return;
    const dx = e.clientX - dragStartClientX;
    const dy = e.clientY - dragStartClientY;
    if (!dragMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        dragMoved = true;
    }
    dragGroup.forEach(({ icon, startLeft, startTop }) => {
        icon.style.left = `${startLeft + dx}px`;
        icon.style.top = `${startTop + dy}px`;
    });
    updateFolderDropHighlight(e.clientX, e.clientY);
}

function iconMouseUp(e) {
    if (!currentIcon) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    clearFolderDropHighlight();

    const drop = dragMoved ? getDropTarget(e.clientX, e.clientY) : null;
    if (drop && drop.kind === 'folder' && currentIcon.classList.contains('image-file')) {
        // Drop every image in the dragged group into the folder; non-image
        // members snap back onto the grid and stay selected.
        dragGroup.map(g => g.icon).filter(i => i.classList.contains('image-file'))
            .forEach(icon => moveImageToFolder(icon, drop.el));
        dragGroup.map(g => g.icon).filter(i => !i.classList.contains('image-file'))
            .forEach(icon => {
                icon.classList.remove('dragging');
                icon.classList.add('selected');
                const s = snapToGrid(parseFloat(icon.style.left) || icon.offsetLeft, parseFloat(icon.style.top) || icon.offsetTop);
                icon.style.left = s.x + 'px';
                icon.style.top = s.y + 'px';
            });
        document.removeEventListener('mousemove', iconMouseMove);
        document.removeEventListener('mouseup', iconMouseUp);
        dragGroup = [];
        currentIcon = null;
        return;
    }
    if (drop && drop.kind === 'bin' && isDeletable(currentIcon)) {
        // The whole selection is moved to the Recycle Bin together
        moveSelectionToBin(currentIcon);
        document.removeEventListener('mousemove', iconMouseMove);
        document.removeEventListener('mouseup', iconMouseUp);
        dragGroup = [];
        currentIcon = null;
        return;
    }

    // Snap the dragged anchor back to the grid and move the rest of the group
    // by the same offset so the selection keeps its layout.
    const snapped = snapToGrid(x, y);
    const adjX = snapped.x - (parseFloat(currentIcon.style.left) || currentIcon.offsetLeft);
    const adjY = snapped.y - (parseFloat(currentIcon.style.top) || currentIcon.offsetTop);
    dragGroup.forEach(({ icon }) => {
        const l = parseFloat(icon.style.left) || icon.offsetLeft;
        const t = parseFloat(icon.style.top) || icon.offsetTop;
        icon.style.left = `${l + adjX}px`;
        icon.style.top = `${t + adjY}px`;
        icon.classList.remove('dragging');
    });
    document.removeEventListener('mousemove', iconMouseMove);
    document.removeEventListener('mouseup', iconMouseUp);
    iconDragJustEnded = dragMoved;
    dragGroup = [];
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

    // A long-press already handled this gesture (context menu is showing)
    if (longPressFired) {
        longPressFired = false;
        if (currentIcon) {
            currentIcon.style.transform = '';
            currentIcon = null;
        }
        return;
    }

    // A quick tap without dragging opens the item (mobile-friendly)
    if (!dragMoved && touchDuration < 300) {
        if (currentIcon) openIconWindow(currentIcon);
        lastTapTime = touchEndTime;
    }

    if (!currentIcon) return;
    const touch = e.changedTouches[0];
    const x = touch.clientX - offsetX;
    const y = touch.clientY - offsetY;

    clearFolderDropHighlight();

    const drop = dragMoved ? getDropTarget(touch.clientX, touch.clientY) : null;
    if (drop && drop.kind === 'folder' && currentIcon.classList.contains('image-file')) {
        moveImageToFolder(currentIcon, drop.el);
        currentIcon = null;
        return;
    }
    if (drop && drop.kind === 'bin' && isDeletable(currentIcon)) {
        moveSelectionToBin(currentIcon);
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
//
// The image is pinned to the centre of the stage and panned/zoomed with a
// single CSS transform, so zoom always scales around the middle of the image
// (or the cursor for wheel zoom) instead of jumping to the corner.
function setupImageViewer(win, collection, index) {
    const img = win.querySelector('.img-stage img');
    const label = win.querySelector('.img-zoom-label');
    const titleEl = win.querySelector('.popup-title');
    const stage = win.querySelector('.img-stage');

    const images = Array.isArray(collection) && collection.length
        ? collection
        : [{ src: img.getAttribute('src'), name: img.getAttribute('alt') || 'Image' }];
    let current = typeof index === 'number' && index >= 0 ? index : 0;

    let fitMode = true;  // true = Best Fit, false = Actual Size
    let zoom = 1;        // user zoom multiplier (0.1 - 8)
    let rotation = 0;
    let tx = 0;          // pan offset in screen px (image centre vs stage centre)
    let ty = 0;
    let loaded = false;
    let lastScale = 1;

    const MIN_ZOOM = 0.1;
    const MAX_ZOOM = 8;
    const TRANS_BTN = 'transform 0.22s cubic-bezier(0.22, 0.61, 0.36, 1)'; // smooth for toolbar zoom
    const TRANS_WHEEL = 'transform 0.09s ease-out';                        // snappy but smooth for wheel

    // Padding of the stage, so the fitted image keeps a small border inside it.
    const stageStyle = getComputedStyle(stage);
    const PAD_X = parseFloat(stageStyle.paddingLeft) + parseFloat(stageStyle.paddingRight);
    const PAD_Y = parseFloat(stageStyle.paddingTop) + parseFloat(stageStyle.paddingBottom);

    function setTitle(name) {
        titleEl.textContent = `${name} - Windows Picture and Fax Viewer`;
    }

    // Content area of the stage (padding removed).
    function availSize() {
        return {
            w: Math.max(1, stage.clientWidth - PAD_X),
            h: Math.max(1, stage.clientHeight - PAD_Y)
        };
    }

    // Natural image size, swapping width/height once rotated 90/270.
    function naturalSize() {
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        if (rotation % 180 !== 0) { const t = w; w = h; h = t; }
        return { w, h };
    }

    function baseFitScale() {
        const nat = naturalSize();
        const av = availSize();
        if (!nat.w || !nat.h) return 1;
        return Math.min(av.w / nat.w, av.h / nat.h);
    }

    function currentScale() {
        return fitMode ? baseFitScale() * zoom : zoom;
    }

    // Keep the image at least partially inside the stage, and centred again
    // as soon as it is small enough to fully fit.
    function clampPan() {
        const av = availSize();
        const s = currentScale();
        const nat = naturalSize();
        const effW = nat.w * s;
        const effH = nat.h * s;
        if (effW <= av.w) {
            tx = 0;
        } else {
            const range = (av.w + effW) / 2;
            tx = Math.min(Math.max(tx, -range), range);
        }
        if (effH <= av.h) {
            ty = 0;
        } else {
            const range = (av.h + effH) / 2;
            ty = Math.min(Math.max(ty, -range), range);
        }
    }

    function render() {
        const s = currentScale();
        img.style.transform =
            `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${s}) rotate(${rotation}deg)`;
    }

    function updatePanCursor() {
        const av = availSize();
        const s = currentScale();
        const nat = naturalSize();
        const canP = nat.w * s > av.w + 1 || nat.h * s > av.h + 1;
        stage.classList.toggle('pannable', canP);
    }

    function apply() {
        if (!loaded) return;
        clampPan();
        const s = currentScale();
        lastScale = s;
        render();
        label.textContent = (fitMode ? 'Fit ' : '') + Math.round(zoom * 100) + '%';
        updatePanCursor();
    }

    // Change zoom while keeping a fixed screen anchor fixed. With no anchor
    // the stage centre is used, so zoom-in/zoom-out grow the image from its
    // middle (exactly what "zoom into the centre" should do).
    function setZoom(newZoom, anchor) {
        newZoom = Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM);
        if (newZoom === zoom) return;
        const oldScale = currentScale();
        zoom = newZoom;
        const newScale = currentScale();
        const rect = stage.getBoundingClientRect();
        const ax = anchor ? anchor.x : rect.width / 2;
        const ay = anchor ? anchor.y : rect.height / 2;
        const k = newScale / oldScale;
        tx = (ax - rect.width / 2) + k * (tx + rect.width / 2 - ax);
        ty = (ay - rect.height / 2) + k * (ty + rect.height / 2 - ay);
        apply();
    }

    function onImageLoaded() {
        loaded = true;
        fitMode = true;
        zoom = 1;
        rotation = 0;
        tx = 0;
        ty = 0;
        // Appear instantly at fit size, then re-enable the animated zoom.
        img.style.transition = 'none';
        apply();
        requestAnimationFrame(() => { img.style.transition = ''; });
    }
    img.addEventListener('load', onImageLoaded);
    if (img.complete && img.naturalWidth) onImageLoaded();

    function loadImage(i) {
        current = (i + images.length) % images.length;
        const item = images[current];
        loaded = false;
        label.textContent = 'Loading...';
        img.src = item.src;
        img.alt = item.name;
        setTitle(item.name);
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
        'zoom-in': () => { img.style.transition = TRANS_BTN; setZoom(zoom * 1.25); },
        'zoom-out': () => { img.style.transition = TRANS_BTN; setZoom(zoom / 1.25); },
        'actual-size': () => { img.style.transition = TRANS_BTN; fitMode = false; zoom = 1; tx = 0; ty = 0; apply(); },
        'best-fit': () => { img.style.transition = TRANS_BTN; fitMode = true; zoom = 1; tx = 0; ty = 0; apply(); },
        'rotate-left': () => { img.style.transition = TRANS_BTN; rotation = (rotation - 90 + 360) % 360; apply(); },
        'rotate-right': () => { img.style.transition = TRANS_BTN; rotation = (rotation + 90) % 360; apply(); },
        'save': () => saveImage()
    };

    win.querySelectorAll('.img-btn').forEach((btn) => {
        if (btn.disabled) return; // inert buttons (delete/print/copy/help)
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (actions[action]) actions[action]();
        });
    });

    // Scroll to zoom toward the cursor (the point under the mouse stays put)
    stage.addEventListener('wheel', (e) => {
        if (!loaded) return;
        e.preventDefault();
        const rect = stage.getBoundingClientRect();
        const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
        img.style.transition = TRANS_WHEEL;
        setZoom(zoom * factor, { x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, { passive: false });

    // Drag with the mouse to pan around a zoomed image
    let panning = false;
    let panStartX = 0;
    let panStartY = 0;
    let panStartTx = 0;
    let panStartTy = 0;

    stage.addEventListener('mousedown', (e) => {
        if (!loaded || e.button !== 0) return; // left button only
        const av = availSize();
        const s = currentScale();
        const nat = naturalSize();
        if (nat.w * s <= av.w + 1 && nat.h * s <= av.h + 1) return;
        panning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        panStartTx = tx;
        panStartTy = ty;
        img.style.transition = 'none';
        stage.classList.add('panning');
        e.preventDefault();
    });

    function onDocMouseMove(e) {
        if (!panning) return;
        tx = panStartTx + (e.clientX - panStartX);
        ty = panStartTy + (e.clientY - panStartY);
        clampPan();
        render();
    }

    function onDocMouseUp() {
        if (!panning) return;
        panning = false;
        stage.classList.remove('panning');
        img.style.transition = TRANS_BTN;
    }

    document.addEventListener('mousemove', onDocMouseMove);
    document.addEventListener('mouseup', onDocMouseUp);

    // Touch: one-finger pan, two-finger pinch-zoom, double-tap to toggle zoom
    let lastTouch = null;
    let pinchDist = 0;
    let pinchZoomStart = 1;
    let lastTapT = 0;

    function touchDist(a, b) {
        return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    }

    stage.addEventListener('touchstart', (e) => {
        if (!loaded) return;
        img.style.transition = 'none';
        if (e.touches.length === 1) {
            const t = e.touches[0];
            lastTouch = { x: t.clientX, y: t.clientY, tx, ty };
            pinchDist = 0;
        } else if (e.touches.length === 2) {
            lastTouch = null;
            pinchDist = touchDist(e.touches[0], e.touches[1]);
            pinchZoomStart = zoom;
        }
    }, { passive: false });

    stage.addEventListener('touchmove', (e) => {
        if (!loaded) return;
        e.preventDefault();
        if (e.touches.length === 1 && lastTouch) {
            tx = lastTouch.tx + (e.touches[0].clientX - lastTouch.x);
            ty = lastTouch.ty + (e.touches[0].clientY - lastTouch.y);
            clampPan();
            render();
        } else if (e.touches.length === 2 && pinchDist) {
            const d = touchDist(e.touches[0], e.touches[1]);
            const rect = stage.getBoundingClientRect();
            const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
            const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
            setZoom(pinchZoomStart * (d / pinchDist), { x: mx, y: my });
        }
    }, { passive: false });

    stage.addEventListener('touchend', (e) => {
        if (!loaded) return;
        if (e.changedTouches.length === 1 && e.touches.length === 0) {
            const now = Date.now();
            if (now - lastTapT < 300) {
                // Double-tap: toggle between fit and ~2.5x about the tap point
                const t = e.changedTouches[0];
                const rect = stage.getBoundingClientRect();
                img.style.transition = 'none';
                setZoom(zoom > 1.5 ? 1 : 2.5, { x: t.clientX - rect.left, y: t.clientY - rect.top });
                lastTapT = 0;
            } else {
                lastTapT = now;
            }
        }
        lastTouch = null;
        pinchDist = 0;
        img.style.transition = TRANS_BTN;
    }, { passive: false });

    // Keep the fit / zoom correct when the window is resized or maximized.
    function onStageResize() {
        if (!loaded) return;
        if (stage.clientWidth === 0 || stage.clientHeight === 0) return; // minimized / hidden
        // Keep the image point currently under the stage centre fixed.
        const px = lastScale ? tx / lastScale : 0;
        const py = lastScale ? ty / lastScale : 0;
        tx = px * currentScale();
        ty = py * currentScale();
        if (fitMode && zoom === 1) { tx = 0; ty = 0; }
        apply();
    }
    let ro = null;
    if (typeof ResizeObserver === 'function') {
        ro = new ResizeObserver(onStageResize);
        ro.observe(stage);
    }
    win._cleanup = () => {
        document.removeEventListener('mousemove', onDocMouseMove);
        document.removeEventListener('mouseup', onDocMouseUp);
        if (ro) ro.disconnect();
    };

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

// Drag-and-drop helpers: move image files into any Folder window (the main
// Folder or a folder created from the right-click menu).
function isFolderOwner(ownerId) {
    if (!ownerId) return false;
    if (ownerId === 'icon3') return true;
    const icon = document.getElementById(ownerId);
    return !!icon && icon.classList.contains('folder-new');
}

// All open folder windows, top-most first.
function getFolderWindows() {
    return [...document.querySelectorAll('.popup')]
        .filter(p => isFolderOwner(p.dataset.owner))
        .sort((a, b) => (parseFloat(b.style.zIndex) || 0) - (parseFloat(a.style.zIndex) || 0));
}

// All folder icons on the desktop (main Folder + created folders).
function getFolderIcons() {
    return [document.getElementById('icon3'), ...[...document.querySelectorAll('.icon.folder-new')]].filter(Boolean);
}

function isOverElement(clientX, clientY, el) {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;
}

function updateFolderDropHighlight(clientX, clientY) {
    const hovering = currentIcon && currentIcon.id !== 'icon1';
    const target = hovering ? getDropTarget(clientX, clientY) : null;
    const isImage = currentIcon && currentIcon.classList.contains('image-file');

    getFolderWindows().forEach(w => w.classList.toggle('drop-target', !!target && target.kind === 'folder' && isImage));
    getFolderIcons().forEach(i => i.classList.toggle('drop-target-icon', !!target && target.kind === 'folder' && isImage));

    const binWin = getBinWindow();
    const binIcon = document.getElementById('icon1');
    const binDroppable = currentIcon && isDeletable(currentIcon);
    if (binWin) binWin.classList.toggle('drop-target', !!target && target.kind === 'bin' && binDroppable);
    if (binIcon) binIcon.classList.toggle('drop-target-icon', !!target && target.kind === 'bin' && binDroppable);
}

function clearFolderDropHighlight() {
    getFolderWindows().forEach(w => w.classList.remove('drop-target'));
    getFolderIcons().forEach(i => i.classList.remove('drop-target-icon'));
    const binWin = getBinWindow();
    if (binWin) binWin.classList.remove('drop-target');
    const binIcon = document.getElementById('icon1');
    if (binIcon) binIcon.classList.remove('drop-target-icon');
}

function getDropTarget(clientX, clientY) {
    // Open folder windows are checked top-most first, then the desktop icons.
    for (const fw of getFolderWindows()) {
        if (isOverElement(clientX, clientY, fw)) return { kind: 'folder', el: fw };
    }
    for (const fi of getFolderIcons()) {
        if (isOverElement(clientX, clientY, fi)) return { kind: 'folder', el: fi };
    }
    const binWin = getBinWindow();
    if (binWin && isOverElement(clientX, clientY, binWin)) return { kind: 'bin', el: binWin };
    const binIcon = document.getElementById('icon1');
    if (binIcon && isOverElement(clientX, clientY, binIcon)) return { kind: 'bin', el: binIcon };
    return null;
}

function moveImageToFolder(icon, targetEl) {
    const src = icon.dataset.image;
    const name = icon.dataset.name || (icon.querySelector('span') ? icon.querySelector('span').textContent : 'Image');

    // Resolve the folder to drop into from the hovered target: an open folder
    // window, or a folder icon on the desktop.
    const ownerId = (targetEl && (targetEl.dataset.owner || targetEl.id)) || 'icon3';
    let folderWin = targetEl && targetEl.classList.contains('popup') ? targetEl : null;
    if (!folderWin) {
        // Folder isn't open yet - dropping onto its icon opens it first
        openWindow(document.getElementById(ownerId));
        folderWin = document.querySelector(`.popup[data-owner="${ownerId}"]`);
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
        // XP behavior: right-clicking an icon already in a multi-selection
        // keeps the whole selection; otherwise select just this icon.
        const selected = getSelectedIcons();
        if (!(selected.length > 1 && selected.includes(icon))) {
            deselectAllIcons();
            icon.classList.add('selected');
        }
        showContextMenu(e.clientX, e.clientY, getIconContextMenu(icon));
    });

    // Long-press opens the context menu (mobile: there's no right-click)
    icon.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        clearTimeout(icon._lpTimer);
        icon._lpTimer = setTimeout(() => {
            longPressFired = true;
            const sel = getSelectedIcons();
            if (!(sel.length > 1 && sel.includes(icon))) {
                deselectAllIcons();
                icon.classList.add('selected');
            }
            showContextMenu(t.clientX, t.clientY, getIconContextMenu(icon));
        }, 480);
    }, { passive: false });
    ['touchmove', 'touchend', 'touchcancel'].forEach(evt =>
        icon.addEventListener(evt, () => { clearTimeout(icon._lpTimer); icon._lpTimer = null; }, { passive: false })
    );
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
    icon.dataset.mtime = String(Date.now());
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
            { label: 'Name', action: () => arrangeIconsBy('name') },
            { label: 'Size', action: () => arrangeIconsBy('size') },
            { label: 'Type', action: () => arrangeIconsBy('type') },
            { label: 'Modified', action: () => arrangeIconsBy('modified') },
            { sep: true },
            { label: 'Align to Grid', action: () => alignIconsToGrid() }
        ]},
        { label: 'Refresh', action: () => location.reload() },
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

// ---- Icon info (sizes, types, dates) used by Properties + Arrange Icons By ----
function formatBytes(bytes) {
    if (!bytes || bytes <= 0) return '0 bytes';
    if (bytes >= 1048576) return (bytes / 1048576).toFixed(1) + ' MB';
    if (bytes >= 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return bytes + ' bytes';
}

function formatDate(ts) {
    if (!ts) return '\u2014';
    const d = new Date(ts);
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// Cache of image info (byte size / pixel dimensions) keyed by image source
const imageInfoCache = {};
function getImageInfo(src) {
    if (!src) return { bytes: 0, w: 0, h: 0 };
    if (imageInfoCache[src]) return imageInfoCache[src];
    const info = { bytes: 0, w: 0, h: 0 };
    imageInfoCache[src] = info;
    if (src.startsWith('data:')) {
        // Embedded (canvas) images: compute the actual byte size from the data
        const comma = src.indexOf(',');
        const base64 = comma >= 0 ? src.slice(comma + 1) : '';
        const padding = (src.match(/=+$/) || [''])[0].length;
        info.bytes = Math.floor(base64.length * 3 / 4) - padding;
    } else {
        // File images: load them once to read the real pixel dimensions
        const im = new Image();
        im.onload = () => { info.w = im.naturalWidth; info.h = im.naturalHeight; };
        im.src = src;
    }
    return info;
}

// Descriptive type for an icon (used by Properties and Arrange by Type)
function getIconType(icon) {
    if (icon.classList.contains('image-file')) {
        const src = icon.dataset.image || '';
        if (/\.png$/i.test(src)) return 'PNG Image';
        if (/\.jpe?g$/i.test(src)) return 'JPEG Image';
        return 'Bitmap Image';
    }
    if (icon.classList.contains('folder-new') || icon.id === 'icon3' || icon.dataset.opens === 'icon3') return 'File Folder';
    if (icon.classList.contains('text-file') || icon.id === 'icon5' || icon.dataset.opens === 'icon5') return 'Text Document';
    if (icon.dataset.opens) return 'Shortcut';
    return 'Application';
}

// Info used for both sorting and the Properties dialog
function getIconInfo(icon) {
    const name = icon.querySelector('span').textContent;
    const type = getIconType(icon);
    const mtime = parseInt(icon.dataset.mtime || '0', 10) || 0;
    let sizeValue = 0;
    let sizeLabel = '0 bytes';

    if (icon.classList.contains('image-file')) {
        const info = getImageInfo(icon.dataset.image);
        if (info.bytes) {
            sizeValue = info.bytes;
            sizeLabel = formatBytes(info.bytes);
        } else if (info.w && info.h) {
            sizeValue = info.w * info.h; // pixel count is the sortable "size"
            sizeLabel = `${info.w} \u00d7 ${info.h} pixels`;
        } else {
            sizeLabel = 'Loading\u2026';
        }
    } else if (icon.classList.contains('folder-new') || icon.id === 'icon3' || icon.dataset.opens === 'icon3') {
        const list = icon.classList.contains('folder-new')
            ? (newFolderFiles[icon.id] || [])
            : folderFiles;
        sizeValue = list.length;
        sizeLabel = list.length + (list.length === 1 ? ' item' : ' items');
    } else if (icon.classList.contains('text-file') || icon.id === 'icon5') {
        sizeValue = 0;
        sizeLabel = '0 bytes';
    } else {
        // Applications / shortcuts: nominal size
        sizeValue = 1;
        sizeLabel = '1 KB';
    }

    return { name, type, sizeValue, sizeLabel, mtime, modifiedLabel: formatDate(mtime) };
}

// Arrange desktop icons by a criteria (Name / Size / Type / Modified)
function arrangeIconsBy(criteria) {
    const icons = [...document.querySelectorAll('.desktop .icon')];
    const keyed = icons.map(icon => {
        const info = getIconInfo(icon);
        let key;
        if (criteria === 'name') key = info.name.toLowerCase();
        else if (criteria === 'size') key = info.sizeValue;
        else if (criteria === 'type') key = (info.type === 'File Folder' ? '0 ' : '1 ') + info.type.toLowerCase();
        else if (criteria === 'modified') key = info.mtime;
        return { icon, key };
    });
    keyed.sort((a, b) => {
        if (typeof a.key === 'number' && typeof b.key === 'number') return a.key - b.key;
        return String(a.key).localeCompare(String(b.key));
    });
    // Lay them out top-to-bottom in two columns, like Windows XP
    const n = keyed.length;
    const perCol = Math.max(1, Math.ceil(n / 2));
    keyed.forEach((item, i) => {
        item.icon.style.left = (Math.floor(i / perCol) * 90) + 'px';
        item.icon.style.top = ((i % perCol) * 90) + 'px';
    });
    deselectAllIcons();
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
    // Menu actions apply to the whole selection, like Windows XP
    const selected = getSelectedIcons();
    const affected = selected.length ? selected : [icon];
    const canMoveToBin = affected.some(isDeletable);
    return [
        { label: 'Open', icon: iconSrc, action: () => openIconWindow(icon) },
        { sep: true },
        { label: 'Create Shortcut', icon: iconSrc, action: () => createShortcut(icon) },
        { label: 'Move to Recycle Bin', icon: 'assets/bin-icon.png', disabled: !canMoveToBin, action: () => moveSelectionToBin() },
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

// Currently selected desktop icons (empty when nothing is selected).
function getSelectedIcons() {
    return [...document.querySelectorAll('.desktop .icon.selected')];
}

// System icons (My Computer, My Documents, Recycle Bin, Folder, Paint,
// Notepad) can't be deleted or dragged to the Recycle Bin, like real XP.
function isDeletable(icon) {
    return !!icon && !['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon9'].includes(icon.id);
}

// Build the Recycle Bin entry for a desktop icon (keeps all info for Restore)
function binEntryFor(icon) {
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
    return entry;
}

// Move one or more desktop icons into the Recycle Bin (keeps info for Restore).
function moveIconsToBin(icons) {
    const list = (Array.isArray(icons) ? icons : [icons]).filter(i => i && i.isConnected && isDeletable(i));
    if (!list.length) return;
    list.forEach(icon => {
        if (icon.classList.contains('folder-new') && newFolderFiles[icon.id]) {
            // Deleted folders take their contents with them
            delete newFolderFiles[icon.id];
        }
        recycleBin.push(binEntryFor(icon));
        icon.remove();
    });
    deselectAllIcons();
    refreshBinWindows();
}

// Move a single desktop icon into the Recycle Bin.
function moveIconToBin(icon) {
    moveIconsToBin([icon]);
}

// Move the whole current selection (plus an optional anchor icon) to the bin.
function moveSelectionToBin(anchor) {
    const icons = getSelectedIcons();
    if (anchor && !icons.includes(anchor)) icons.push(anchor);
    moveIconsToBin(icons.length ? icons : [anchor]);
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
        if (save && newLabel !== oldLabel) icon.dataset.mtime = String(Date.now());
    };
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); commit(true); }
        else if (e.key === 'Escape') { commit(false); }
    });
    input.addEventListener('blur', () => commit(true));
}

// ---- Properties dialogs ----
function showIconProperties(icon) {
    const img = icon.querySelector('img');
    const iconSrc = img ? img.getAttribute('src') : 'assets/image-file-icon.png';
    const info = getIconInfo(icon);
    showPropertiesDialog(info.name, iconSrc, [
        ['Type', info.type],
        ['Location', 'Desktop'],
        ['Size', info.sizeLabel],
        ['Modified', info.modifiedLabel]
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

// True when we're on a phone-sized / narrow layout
function isMobileLayout() {
    return window.matchMedia('(max-width: 720px)').matches;
}

// Keep windows usable on small screens: clamp size/position to the viewport
function clampWindowToScreen(win) {
    if (!isMobileLayout()) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight - 40; // leave room for the taskbar
    const r = win.getBoundingClientRect();
    let w = parseFloat(win.style.width) || r.width;
    let h = parseFloat(win.style.height) || r.height;
    const minW = Math.min(parseInt(win.dataset.minW || '0', 10) || 0, vw - 8);
    const minH = Math.min(parseInt(win.dataset.minH || '0', 10) || 0, vh - 4);
    w = Math.max(minW, Math.min(w, vw - 8));
    h = Math.max(minH, Math.min(h, vh - 4));
    win.style.width = Math.round(w) + 'px';
    win.style.height = Math.round(h) + 'px';
    // Keep the whole window on screen when possible
    const left = parseFloat(win.style.left) || r.left;
    const top = parseFloat(win.style.top) || r.top;
    const maxLeft = Math.max(4, vw - w - 4);
    const maxTop = Math.max(4, vh - h + 4);
    win.style.left = Math.round(Math.min(Math.max(left, 4), maxLeft)) + 'px';
    win.style.top = Math.round(Math.min(Math.max(top, 4), maxTop)) + 'px';
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
        // A folder created from the right-click menu: works like the main
        // Folder, with its own persistent file list (drag images in/out).
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
                      <div class="exp-project-list"></div>
                      <div class="exp-preview">
                        <h3>Select a project</h3>
                        <p>Choose a project from the list to see its summary and open it.</p>
                      </div>
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
    } else if (icon.id === 'icon9') {
        // Snake game window
        win.style.width = '460px';
        win.style.height = '540px';
        win.dataset.minW = '380';
        win.dataset.minH = '440';
    } else {
        win.style.width = '400px';
        win.style.height = '300px';
    }

    clampWindowToScreen(win);

    if (icon.id === 'icon1') {
        contentEl.classList.add('no-padding');
        setupBin(win);
    } else if (icon.id === 'icon2') {
        contentEl.classList.add('no-padding');
        setupBrowser(win);
    } else if (icon.id === 'icon4') {
        contentEl.classList.add('no-padding');
        setupPaint(win);
    } else if (icon.id === 'icon5') {
        contentEl.classList.add('no-padding');
        setupNotepad(win, initialNotepad);
        initialNotepad = false;
    } else if (icon.id === 'icon9') {
        contentEl.classList.add('no-padding');
        setupSnake(win);
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
    // Clamp again last: setup functions (e.g. the image viewer) may change the
    // window size after the initial clamp, which could push it off-screen.
    clampWindowToScreen(win);
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

    function moveWindow(x, y) {
        // Keep the title bar reachable on small screens
        if (isMobileLayout()) {
            x = Math.max(-win.offsetWidth + 80, Math.min(x, window.innerWidth - 80));
            y = Math.max(0, Math.min(y, window.innerHeight - 60));
        }
        win.style.left = x + 'px';
        win.style.top = y + 'px';
    }

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
        moveWindow(e.clientX - startX, e.clientY - startY);
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
        moveWindow(touch.clientX - startX, touch.clientY - startY);
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

    // Resizing by touch
    handle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        rw = win.offsetWidth;
        rh = win.offsetHeight;
        rx = e.touches[0].clientX;
        ry = e.touches[0].clientY;
        document.addEventListener('touchmove', onResizeTouchMove, { passive: false });
        document.addEventListener('touchend', onResizeTouchUp);
    }, { passive: false });

    function onResizeTouchMove(e) {
        e.preventDefault();
        if (!isResizing) return;
        const minW = parseInt(win.dataset.minW || '200', 10);
        const minH = parseInt(win.dataset.minH || '150', 10);
        win.style.width = Math.max(rw + (e.touches[0].clientX - rx), minW) + 'px';
        win.style.height = Math.max(rh + (e.touches[0].clientY - ry), minH) + 'px';
    }

    function onResizeTouchUp() {
        isResizing = false;
        document.removeEventListener('touchmove', onResizeTouchMove);
        document.removeEventListener('touchend', onResizeTouchUp);
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
    if (typeof win._cleanup === 'function') {
        try { win._cleanup(); } catch (e) { /* ignore */ }
    }
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

// Folder / Explorer app - shows projects and lets you drag image files in.
// The main Folder uses the shared `folderFiles` list; folders created from the
// right-click menu pass their own persistent list (`newFolderFiles[owner]`).
function setupFolder(win, files) {
    const projectList = win.querySelector('.exp-project-list');
    const preview = win.querySelector('.exp-preview');

    if (!files) files = folderFiles; // persistent - survives closing/reopening the Folder

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

    // Menu bar functionality
    const menubar = win.querySelector('.exp-menubar');
    if (menubar) {
        const menuItems = menubar.querySelectorAll('.exp-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const menuName = item.dataset.menu;
                // Close any open dropdowns first
                menubar.querySelectorAll('.exp-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.exp-menu-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });

                // Show dropdown for clicked menu (if it exists)
                const dropdown = menubar.querySelector(`.exp-dropdown[data-dropdown="${menuName}"]`);
                if (dropdown) {
                    dropdown.classList.remove('hidden');
                    item.classList.add('active');

                    // Position dropdown below the menu item
                    const rect = item.getBoundingClientRect();
                    const menubarRect = menubar.getBoundingClientRect();
                    dropdown.style.top = (rect.bottom - menubarRect.top) + 'px';
                    dropdown.style.left = (rect.left - menubarRect.left) + 'px';
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.exp-menubar')) {
                menubar.querySelectorAll('.exp-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.exp-menu-item.active').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
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

// New folder created from the right-click menu: behaves exactly like the main
// Folder (drag images in/out), with its own persistent file list so dropped
// images survive closing/reopening the window.
function setupNewFolderWindow(win) {
    const title = win.querySelector('.popup-title').textContent;
    const addr = win.querySelector('.exp-address-name');
    if (addr) addr.textContent = '📁 ' + title;

    const ownerId = win.dataset.owner;
    if (!newFolderFiles[ownerId]) newFolderFiles[ownerId] = [];
    setupFolder(win, newFolderFiles[ownerId]);
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

    // Menu bar functionality
    const menubar = win.querySelector('.exp-menubar');
    if (menubar) {
        const menuItems = menubar.querySelectorAll('.exp-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const menuName = item.dataset.menu;
                // Close any open dropdowns first
                menubar.querySelectorAll('.exp-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.exp-menu-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });

                // Show dropdown for clicked menu (if it exists)
                const dropdown = menubar.querySelector(`.exp-dropdown[data-dropdown="${menuName}"]`);
                if (dropdown) {
                    dropdown.classList.remove('hidden');
                    item.classList.add('active');

                    // Position dropdown below the menu item
                    const rect = item.getBoundingClientRect();
                    const menubarRect = menubar.getBoundingClientRect();
                    dropdown.style.top = (rect.bottom - menubarRect.top) + 'px';
                    dropdown.style.left = (rect.left - menubarRect.left) + 'px';
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.exp-menubar')) {
                menubar.querySelectorAll('.exp-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.exp-menu-item.active').forEach(item => {
                    item.classList.remove('active');
                });
            }
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

    // Menu bar functionality
    const menubar = win.querySelector('.ie-menubar');
    if (menubar) {
        const menuItems = menubar.querySelectorAll('.ie-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const menuName = item.textContent.trim().toLowerCase();
                // Close any open dropdowns first
                menubar.querySelectorAll('.ie-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.ie-menu-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });

                // Show dropdown for clicked menu (if it exists)
                const dropdown = menubar.querySelector(`.ie-dropdown[data-dropdown="${menuName}"]`);
                if (dropdown) {
                    dropdown.classList.remove('hidden');
                    item.classList.add('active');

                    // Position dropdown below the menu item
                    const rect = item.getBoundingClientRect();
                    const menubarRect = menubar.getBoundingClientRect();
                    dropdown.style.top = (rect.bottom - menubarRect.top) + 'px';
                    dropdown.style.left = (rect.left - menubarRect.left) + 'px';
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.ie-menubar')) {
                menubar.querySelectorAll('.ie-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.ie-menu-item.active').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }

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

                if (action === 'time/date') {
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

    // File dropdown functionality
    const fileDropdown = win.querySelector('.np-dropdown[data-dropdown="file"]');
    if (fileDropdown) {
        fileDropdown.addEventListener('click', (e) => e.stopPropagation());

        fileDropdown.querySelectorAll('.np-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'new') {
                    textarea.value = '';
                    textarea.focus();
                    win.title = "Untitled - Notepad";
                } else if (action === 'open') {
                    // In a real app, this would open a file dialog
                    alert('Open dialog would appear here in a real Notepad application.');
                } else if (action === 'save') {
                    // In a real app, this would save the current file
                    if (win.title === "Untitled - Notepad") {
                        alert('Save As dialog would appear here for untitled files.');
                    } else {
                        alert('File saved successfully.');
                    }
                } else if (action === 'saveas') {
                    // In a real app, this would open a save as dialog
                    alert('Save As dialog would appear here.');
                } else if (action === 'pagesetup') {
                    alert('Page Setup dialog would appear here.');
                } else if (action === 'print') {
                    alert('Print dialog would appear here.');
                } else if (action === 'printpreview') {
                    alert('Print Preview would appear here.');
                } else if (action === 'exit') {
                    win.close();
                }

                fileDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // Format dropdown functionality
    const formatDropdown = win.querySelector('.np-dropdown[data-dropdown="format"]');
    if (formatDropdown) {
        formatDropdown.addEventListener('click', (e) => e.stopPropagation());

        formatDropdown.querySelectorAll('.np-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'wordwrap') {
                    // Toggle word wrap
                    textarea.style.wordWrap = textarea.style.wordWrap === 'break-word' ? 'normal' : 'break-word';
                    // Update checkbox appearance (simplified)
                    item.textContent = textarea.style.wordWrap === 'break-word' ? 'Word Wrap' : 'Word Wrap';
                } else if (action === 'font') {
                    alert('Font dialog would appear here.');
                }

                formatDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // View dropdown functionality
    const viewDropdown = win.querySelector('.np-dropdown[data-dropdown="view"]');
    if (viewDropdown) {
        viewDropdown.addEventListener('click', (e) => e.stopPropagation());

        viewDropdown.querySelectorAll('.np-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'statusbar') {
                    // Toggle status bar (simplified - Notepad XP doesn't have a visible status bar by default)
                    alert('Status bar toggled.');
                }

                viewDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // Help dropdown functionality
    const helpDropdown = win.querySelector('.np-dropdown[data-dropdown="help"]');
    if (helpDropdown) {
        helpDropdown.addEventListener('click', (e) => e.stopPropagation());

        helpDropdown.querySelectorAll('.np-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'helpcontents') {
                    alert('Help Contents would appear here.');
                } else if (action === 'helptutorial') {
                    alert('Help Tutorial would appear here.');
                } else if (action === 'about') {
                    alert('About Notepad\n\nNotepad is a simple text editor for Microsoft Windows.\n\n© 1985-2002 Microsoft Corp.');
                }

                helpDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }
}
// Paint app - handles menu functionality for the Paint application
function setupPaint(win) {
    const menubar = win.querySelector('.paint-menubar');
    if (menubar) {
        const menuItems = menubar.querySelectorAll('.paint-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const menuName = item.dataset.menu;
                // Close any open dropdowns first
                menubar.querySelectorAll('.paint-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.paint-menu-item.active').forEach(activeItem => {
                    activeItem.classList.remove('active');
                });

                // Show dropdown for clicked menu (if it exists)
                const dropdown = menubar.querySelector(`.paint-dropdown[data-dropdown="${menuName}"]`);
                if (dropdown) {
                    dropdown.classList.remove('hidden');
                    item.classList.add('active');

                    // Position dropdown below the menu item
                    const rect = item.getBoundingClientRect();
                    const menubarRect = menubar.getBoundingClientRect();
                    dropdown.style.top = (rect.bottom - menubarRect.top) + 'px';
                    dropdown.style.left = (rect.left - menubarRect.left) + 'px';
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.paint-menubar')) {
                menubar.querySelectorAll('.paint-dropdown').forEach(dropdown => {
                    dropdown.classList.add('hidden');
                });
                menubar.querySelectorAll('.paint-menu-item.active').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }

    // File dropdown functionality
    const fileDropdown = win.querySelector('.paint-dropdown[data-dropdown="file"]');
    if (fileDropdown) {
        fileDropdown.addEventListener('click', (e) => e.stopPropagation());

        fileDropdown.querySelectorAll('.paint-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'new') {
                    // In a real app, this would clear the canvas
                    alert('New canvas would be created.');
                } else if (action === 'open') {
                    // In a real app, this would open a file dialog
                    alert('Open dialog would appear here.');
                } else if (action === 'save') {
                    // In a real app, this would save the current image
                    alert('Save dialog would appear here.');
                } else if (action === 'saveas') {
                    // In a real app, this would open a save as dialog
                    alert('Save As dialog would appear here.');
                } else if (action === 'printsetup') {
                    alert('Print Setup dialog would appear here.');
                } else if (action === 'print') {
                    alert('Print dialog would appear here.');
                } else if (action === 'exit') {
                    win.close();
                }

                fileDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // Edit dropdown functionality
    const editDropdown = win.querySelector('.paint-dropdown[data-dropdown="edit"]');
    if (editDropdown) {
        editDropdown.addEventListener('click', (e) => e.stopPropagation());

        editDropdown.querySelectorAll('.paint-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'undo') {
                    alert('Undo action would be performed.');
                } else if (action === 'redo') {
                    alert('Redo action would be performed.');
                } else if (action === 'cut') {
                    alert('Cut action would be performed.');
                } else if (action === 'copy') {
                    alert('Copy action would be performed.');
                } else if (action === 'paste') {
                    alert('Paste action would be performed.');
                } else if (action === 'pastetransparent') {
                    alert('Paste Transparent action would be performed.');
                } else if (action === 'selectall') {
                    alert('Select All action would be performed.');
                } else if (action === 'invertselection') {
                    alert('Invert Selection action would be performed.');
                }

                editDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // Image dropdown functionality
    const imageDropdown = win.querySelector('.paint-dropdown[data-dropdown="image"]');
    if (imageDropdown) {
        imageDropdown.addEventListener('click', (e) => e.stopPropagation());

        imageDropdown.querySelectorAll('.paint-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'fliprotate') {
                    alert('Flip/Rotate dialog would appear here.');
                } else if (action === 'stretchandskew') {
                    alert('Stretch and Skew dialog would appear here.');
                } else if (action === 'invertcolors') {
                    alert('Invert Colors action would be performed.');
                } else if (action === 'attributes') {
                    alert('Attributes dialog would appear here.');
                } else if (action === 'clearimage') {
                    alert('Clear Image action would be performed.');
                } else if (action === 'drawopaque') {
                    alert('Draw Opaque toggle would be changed.');
                }

                imageDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // Colors dropdown functionality
    const colorsDropdown = win.querySelector('.paint-dropdown[data-dropdown="colors"]');
    if (colorsDropdown) {
        colorsDropdown.addEventListener('click', (e) => e.stopPropagation());

        colorsDropdown.querySelectorAll('.paint-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'editcolors') {
                    alert('Edit Colors dialog would appear here.');
                }

                colorsDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }

    // Help dropdown functionality
    const helpDropdown = win.querySelector('.paint-dropdown[data-dropdown="help"]');
    if (helpDropdown) {
        helpDropdown.addEventListener('click', (e) => e.stopPropagation());

        helpDropdown.querySelectorAll('.paint-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;

                if (action === 'viewhelp') {
                    alert('Help would appear here.');
                } else if (action === 'about') {
                    alert('About Paint\n\nPaint is a simple graphics painting program that has been included with all versions of Microsoft Windows.\n\n© 1985-2002 Microsoft Corp.');
                }

                helpDropdown.classList.add('hidden');
                menuItems.forEach(m => m.classList.remove('active'));
            });
        });
    }
}

// Snake game - a small playable app window.
function setupSnake(win) {
    const canvas = win.querySelector('.snake-canvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = win.querySelector('.snake-score');
    const bestEl = win.querySelector('.snake-best');
    const overlay = win.querySelector('.snake-overlay');
    const msgEl = win.querySelector('.snake-msg');

    const COLS = 20;
    const ROWS = 20;
    const CELL = canvas.width / COLS;
    const BEST_KEY = 'xpSnakeBest';

    let snake = [];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let food = null;
    let score = 0;
    let best = parseInt(localStorage.getItem(BEST_KEY) || '0', 10) || 0;
    let running = false;
    let paused = false;
    let gameOver = false;
    let timer = null;

    bestEl.textContent = 'Best: ' + best;

    function randomFood() {
        const taken = new Set(snake.map(s => s.x + ',' + s.y));
        const free = [];
        for (let x = 0; x < COLS; x++) {
            for (let y = 0; y < ROWS; y++) {
                if (!taken.has(x + ',' + y)) free.push({ x, y });
            }
        }
        return free.length ? free[Math.floor(Math.random() * free.length)] : null;
    }

    function reset() {
        stopTimer();
        snake = [{ x: 5, y: 10 }, { x: 4, y: 10 }, { x: 3, y: 10 }];
        dir = { x: 1, y: 0 };
        nextDir = { x: 1, y: 0 };
        score = 0;
        running = false;
        paused = false;
        gameOver = false;
        food = randomFood();
        scoreEl.textContent = 'Score: 0';
        overlay.classList.add('hidden');
        setPauseBtn();
        draw();
    }

    // Start (or restart) the game. `initialDir` lets a keypress start the
    // game already moving in the pressed direction.
    function start(initialDir) {
        if (gameOver) reset();
        if (initialDir) { dir = { ...initialDir }; nextDir = { ...initialDir }; }
        running = true;
        paused = false;
        stopTimer();
        overlay.classList.add('hidden');
        timer = setInterval(tick, 120);
        setPauseBtn();
        draw();
    }

    function pause() {
        if (!running || gameOver) return;
        paused = !paused;
        if (paused) stopTimer();
        else timer = setInterval(tick, 120);
        setPauseBtn();
    }

    function stopTimer() {
        if (timer) { clearInterval(timer); timer = null; }
    }

    function setPauseBtn() {
        const btn = win.querySelector('.snake-btn[data-action="pause"]');
        if (!btn) return;
        btn.disabled = !running || gameOver;
        btn.textContent = paused ? 'Resume' : 'Pause';
    }

    function tick() {
        if (!running || paused || gameOver) return;
        dir = nextDir;
        const head = snake[0];
        const nx = head.x + dir.x;
        const ny = head.y + dir.y;

        // Wall collision
        if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) return endGame(false);

        // Self collision (the tail cell is safe unless we're growing)
        const willGrow = food && nx === food.x && ny === food.y;
        const body = willGrow ? snake : snake.slice(0, -1);
        if (body.some(s => s.x === nx && s.y === ny)) return endGame(false);

        snake.unshift({ x: nx, y: ny });
        if (willGrow) {
            score++;
            scoreEl.textContent = 'Score: ' + score;
            if (score > best) {
                best = score;
                localStorage.setItem(BEST_KEY, String(best));
                bestEl.textContent = 'Best: ' + best;
            }
            food = randomFood();
            if (!food) return endGame(true); // cleared the whole board
        } else {
            snake.pop();
        }
        draw();
    }

    function endGame(won) {
        running = false;
        gameOver = true;
        stopTimer();
        draw();
        msgEl.textContent = won ? 'You win!' : 'Game Over';
        overlay.querySelector('.snake-btn').textContent = 'Play Again';
        overlay.classList.remove('hidden');
        setPauseBtn();
    }

    function draw() {
        ctx.fillStyle = '#0c2e0c';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Subtle grid
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1;
        for (let i = 1; i < COLS; i++) {
            ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, canvas.height); ctx.stroke();
        }
        for (let i = 1; i < ROWS; i++) {
            ctx.beginPath(); ctx.moveTo(0, i * CELL); ctx.lineTo(canvas.width, i * CELL); ctx.stroke();
        }

        // Apple
        if (food) {
            const cx = food.x * CELL + CELL / 2;
            const cy = food.y * CELL + CELL / 2;
            ctx.fillStyle = '#e23b2e';
            ctx.beginPath(); ctx.arc(cx, cy, CELL / 2 - 2, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#7dbf4a';
            ctx.fillRect(cx - 2, cy - CELL / 2 - 3, 4, 5);
        }

        // Snake body (tail first so the head draws on top)
        for (let i = snake.length - 1; i >= 0; i--) {
            const s = snake[i];
            const shade = Math.min(i * 2, 26);
            ctx.fillStyle = i === 0 ? '#8bf077' : `rgb(${78 - shade}, ${178 - shade}, ${70})`;
            ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
        }

        // Eyes on the head
        if (snake.length) {
            const h = snake[0];
            const ex = h.x * CELL;
            const ey = h.y * CELL;
            ctx.fillStyle = '#fff';
            ctx.fillRect(ex + CELL * 0.28, ey + CELL * 0.22, CELL * 0.2, CELL * 0.26);
            ctx.fillRect(ex + CELL * 0.55, ey + CELL * 0.22, CELL * 0.2, CELL * 0.26);
            ctx.fillStyle = '#111';
            ctx.fillRect(ex + CELL * 0.34, ey + CELL * 0.28, CELL * 0.1, CELL * 0.14);
            ctx.fillRect(ex + CELL * 0.6, ey + CELL * 0.28, CELL * 0.1, CELL * 0.14);
        }
    }

    // Steer the snake (also starts the game when it isn't running)
    function steer(d) {
        if (!running || gameOver) { start(d); return; }
        if (!(d.x === -dir.x && d.y === -dir.y)) nextDir = d;
    }

    function onKey(e) {
        if (!win.classList.contains('active-window')) return;
        const k = e.key.toLowerCase();
        const dirs = {
            arrowup: { x: 0, y: -1 }, w: { x: 0, y: -1 },
            arrowdown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
            arrowleft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
            arrowright: { x: 1, y: 0 }, d: { x: 1, y: 0 }
        };
        if (dirs[k]) {
            e.preventDefault();
            steer(dirs[k]);
        } else if (k === 'p') {
            pause();
        }
    }
    document.addEventListener('keydown', onKey);

    win.querySelectorAll('.snake-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (action === 'start') start();
            else if (action === 'pause') pause();
            else if (action === 'restart') reset();
        });
    });

    // On-screen D-pad for touch devices
    const DPAD_DIRS = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } };
    win.querySelectorAll('.snake-dpad-btn').forEach(btn => {
        const d = DPAD_DIRS[btn.dataset.dir];
        const press = (ev) => { ev.preventDefault(); steer(d); };
        btn.addEventListener('touchstart', press, { passive: false });
        btn.addEventListener('click', press);
    });

    reset();

    // Stop the game loop and release keys when the window closes
    win._cleanup = () => {
        stopTimer();
        document.removeEventListener('keydown', onKey);
    };
}

// Start menu
// Apps available on this desktop (opened from the Start menu)
const startAppTargets = {
    internet: 'icon2',
    notepad: 'icon5',
    paint: 'icon4',
    snake: 'icon9',
    mydocuments: 'icon3'
};

// Friendly names for the "Application not found" dialog
const startAppNames = {
    internet: 'Internet Explorer', email: 'Outlook Express', minesweeper: 'Minesweeper',
    notepad: 'Notepad', winamp: 'Winamp', paint: 'Paint', snake: 'Snake',
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