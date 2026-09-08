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
              <div class="ie-dropdown-item" data-action="new">New Window</div>
              <div class="ie-dropdown-item" data-action="open">Open...</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="opentab">Open in a Real Browser Tab</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="properties">Properties</div>
              <div class="ie-dropdown-item" data-action="close">Close</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="edit">
              <div class="ie-dropdown-item" data-action="cut">Cut</div>
              <div class="ie-dropdown-item" data-action="copy">Copy</div>
              <div class="ie-dropdown-item" data-action="copyurl">Copy Address</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="find">Find (on this page)...</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="view">
              <div class="ie-dropdown-item" data-action="stop">Stop<span class="ie-accel">Esc</span></div>
              <div class="ie-dropdown-item" data-action="refresh">Refresh<span class="ie-accel">F5</span></div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="togglelinks">Links Bar</div>
              <div class="ie-dropdown-item" data-action="toggletime">Time Machine Bar</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="source">Source</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="favorites">
              <div class="ie-dropdown-item" data-action="addtofavorites">Add to Favorites...</div>
              <div class="ie-dropdown-item" data-action="organizefavorites">Organize Favorites...</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="links">Show Links Bar</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="tools">
              <div class="ie-dropdown-item" data-action="searchengine">Change Search Engine...</div>
              <div class="ie-dropdown-item" data-action="timemachine">Time Machine...</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="history">Show History</div>
              <div class="ie-dropdown-item" data-action="internetoptions">Internet Options...</div>
              <div class="ie-dropdown-item" data-action="windowsupdate">Windows Update</div>
            </div>
            <div class="ie-dropdown hidden" data-dropdown="help">
              <div class="ie-dropdown-item" data-action="helpcontents">Contents and Index</div>
              <div class="ie-dropdown-item" data-action="whyblocked">Why won't some pages load?</div>
              <div class="ie-dropdown-divider"></div>
              <div class="ie-dropdown-item" data-action="about">About Internet Explorer</div>
            </div>
            <div class="ie-toolbar">
              <button class="ie-nav-btn" id="browserBack" disabled><span class="ie-nav-icon">&#8592;</span><span>Back</span></button>
              <button class="ie-nav-btn" id="browserForward" disabled><span class="ie-nav-icon">&#8594;</span><span>Forward</span></button>
              <button class="ie-nav-btn ie-icon-btn" id="browserStop" title="Stop"><span class="ie-nav-icon ie-stop">&#10005;</span></button>
              <button class="ie-nav-btn ie-icon-btn" id="browserRefresh" title="Refresh"><span class="ie-nav-icon">&#8635;</span></button>
              <button class="ie-nav-btn ie-icon-btn" id="browserHome" title="Home"><span class="ie-nav-icon">&#8962;</span></button>
              <span class="ie-tool-sep"></span>
              <button class="ie-nav-btn" id="browserSearch"><span class="ie-nav-icon">&#128269;</span><span>Search</span></button>
              <button class="ie-nav-btn" id="browserFavorites"><span class="ie-nav-icon">&#9733;</span><span>Favorites</span></button>
              <button class="ie-nav-btn" id="browserHistory"><span class="ie-nav-icon">&#128340;</span><span>History</span></button>
            </div>
            <div class="ie-address-bar">
              <span class="ie-address-title">Address</span>
              <div class="ie-address-input-wrap">
                <img id="ieFavicon" src="assets/internet-explorer-icon.png" alt="">
                <input type="text" id="browserUrl" placeholder="Type a web address or search the web&hellip;" autocomplete="off" spellcheck="false">
              </div>
              <button id="browserGo">Go</button>
            </div>
            <!-- The Time Machine: the same page, as it looked in any year. Powered
                 by the Internet Archive, which is why it works on sites that refuse
                 to be embedded live. -->
            <div class="ie-era-bar" id="ieEraBar">
              <label class="ie-era-label" for="ieEra">View as it looked in</label>
              <select class="ie-era-select" id="ieEra"></select>
              <span class="ie-era-note" id="ieEraNote"></span>
            </div>
            <div class="ie-progress" id="ieProgress"><div class="ie-progress-fill" id="ieProgressFill"></div></div>
            <div class="ie-bookmarks-bar ie-bookmarks-visible" id="ieBookmarksBar">
              <span class="ie-bm-label">Links</span>
            </div>
            <div class="ie-content-area">
              <iframe id="browserFrame" title="Browser content"
                referrerpolicy="no-referrer"
                sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              <div class="ie-error-page" id="ieErrorPage" style="display:none">
                <div class="ie-error-head">
                  <div class="ie-error-icon">&#9888;</div>
                  <div>
                    <h2 class="ie-error-title">This page cannot be displayed</h2>
                    <p class="ie-error-msg" id="ieErrorMsg"></p>
                  </div>
                </div>
                <div class="ie-error-url" id="ieErrorUrl"></div>
                <div class="ie-error-actions" id="ieErrorActions"></div>
                <p class="ie-error-fine">Cannot find server or DNS Error &mdash; Internet Explorer</p>
              </div>
              <!-- Non-modal nudge: browsers give JavaScript no way to detect a
                   refused frame, so instead of guessing we offer the way out. -->
              <div class="ie-nudge" id="ieNudge" hidden>
                <span class="ie-nudge-text" id="ieNudgeText"></span>
                <button class="ie-nudge-btn" id="ieNudgeGo">View in the Time Machine</button>
                <button class="ie-nudge-btn ie-nudge-alt" id="ieNudgeTab">Open in a real tab</button>
                <button class="ie-nudge-x" id="ieNudgeClose" title="Close">&#10005;</button>
              </div>
            </div>
            <div class="ie-status-bar">
              <span id="ieStatusText">Done</span>
              <span class="ie-status-right">
                <button class="ie-status-hint" id="ieStatusHint" hidden>Page blank? View it in the Time Machine</button>
                <span class="ie-zone" id="ieZone">Internet</span>
              </span>
            </div>
          </div>
        `
    },
    icon3: {
        title: "Projects",
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
              <div class="exp-address-input">&#128193; Projects</div>
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
              <label class="snake-diff-label">Difficulty
                <select class="snake-diff" id="snakeDifficulty">
                  <option value="easy">Easy</option>
                  <option value="medium" selected>Medium</option>
                  <option value="hard">Hard</option>
                  <option value="extreme" disabled>Locked: Extreme</option>
                </select>
              </label>
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
            <div class="snake-hint">Arrow keys / WASD to steer &middot; P to pause &middot; Win on Hard to unlock Extreme</div>
          </div>
        `
    },
    icon10: {
        title: "Outlook Express",
        icon: "assets/start-email.png",
        content: `
          <div class="mail-app">
            <div class="oe-menubar">
              <span class="oe-menu-item">File</span>
              <span class="oe-menu-item">Edit</span>
              <span class="oe-menu-item">View</span>
              <span class="oe-menu-item">Tools</span>
              <span class="oe-menu-item">Message</span>
              <span class="oe-menu-item">Help</span>
            </div>
            <div class="oe-toolbar">
              <button class="oe-tool" data-action="compose"><span class="oe-tool-ic">&#9993;</span>Create Mail</button>
              <span class="oe-sep"></span>
              <button class="oe-tool" data-action="reply"><span class="oe-tool-ic">&#8617;</span>Reply</button>
              <button class="oe-tool" data-action="replyall"><span class="oe-tool-ic">&#8646;</span>Reply All</button>
              <button class="oe-tool" data-action="forward"><span class="oe-tool-ic">&#8618;</span>Forward</button>
              <span class="oe-sep"></span>
              <button class="oe-tool" data-action="sendrecv"><span class="oe-tool-ic">&#8635;</span>Send/Recv</button>
              <button class="oe-tool" data-action="addresses"><span class="oe-tool-ic">&#9787;</span>Addresses</button>
              <button class="oe-tool" data-action="find"><span class="oe-tool-ic">&#9906;</span>Find</button>
            </div>
            <div class="oe-body">
              <div class="oe-folders">
                <div class="oe-folder oe-folder-root">Outlook Express</div>
                <div class="oe-folder oe-folder-group">Local Folders</div>
                <div class="oe-folder active" data-folder="inbox">Inbox</div>
                <div class="oe-folder" data-folder="outbox">Outbox</div>
                <div class="oe-folder" data-folder="sent">Sent Items</div>
                <div class="oe-folder" data-folder="deleted">Deleted Items</div>
                <div class="oe-folder" data-folder="drafts">Drafts</div>
              </div>
              <div class="oe-main">
                <div class="oe-list-head">
                  <span class="oe-col-from">From</span>
                  <span class="oe-col-subject">Subject</span>
                  <span class="oe-col-date">Received</span>
                </div>
                <div class="oe-msglist"></div>
                <div class="oe-preview">
                  <div class="oe-preview-head"></div>
                  <div class="oe-preview-content"></div>
                </div>
              </div>
            </div>
            <div class="oe-statusbar"></div>
          </div>
        `
    },
    'mail-compose': {
        title: "New Message",
        icon: "assets/start-email.png",
        content: `
          <div class="mail-compose">
            <div class="oe-menubar">
              <span class="oe-menu-item">File</span>
              <span class="oe-menu-item">Edit</span>
              <span class="oe-menu-item">View</span>
              <span class="oe-menu-item">Insert</span>
              <span class="oe-menu-item">Format</span>
              <span class="oe-menu-item">Tools</span>
              <span class="oe-menu-item">Message</span>
              <span class="oe-menu-item">Help</span>
            </div>
            <div class="oe-toolbar oe-comp-toolbar">
              <button class="oe-tool oe-tool-send" data-action="send"><span class="oe-tool-ic">&#9993;</span>Send</button>
              <span class="oe-sep"></span>
              <button class="oe-tool" data-cmd="undo"><span class="oe-tool-ic">&#8630;</span>Undo</button>
              <button class="oe-tool" data-cmd="redo"><span class="oe-tool-ic">&#8631;</span>Redo</button>
              <span class="oe-sep"></span>
              <button class="oe-tool" data-cmd="cut"><span class="oe-tool-ic">&#9986;</span>Cut</button>
              <button class="oe-tool" data-cmd="copy"><span class="oe-tool-ic">&#10697;</span>Copy</button>
              <button class="oe-tool" data-cmd="paste"><span class="oe-tool-ic">&#128203;</span>Paste</button>
              <span class="oe-sep"></span>
              <button class="oe-tool" data-cmd="spell"><span class="oe-tool-ic">&#10004;</span>Spell</button>
              <button class="oe-tool" data-action="attach"><span class="oe-tool-ic">&#128206;</span>Attach</button>
              <button class="oe-tool" data-action="sign"><span class="oe-tool-ic">&#9998;</span>Sign</button>
            </div>
            <div class="oe-fields">
              <div class="oe-field"><label>From:</label><input class="oe-from" type="text" spellcheck="false" placeholder="your@email.com"></div>
              <div class="oe-field"><label>To:</label><input class="oe-to" type="text" spellcheck="false"></div>
              <div class="oe-field"><label>Cc:</label><input class="oe-cc" type="text" spellcheck="false"></div>
              <div class="oe-field"><label>Subject:</label><input class="oe-subject" type="text" spellcheck="false"></div>
            </div>
            <div class="oe-formatbar">
              <select class="oe-ffont" title="Font">
                <option>Tahoma</option>
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Courier New</option>
                <option>Verdana</option>
                <option>Georgia</option>
                <option>Comic Sans MS</option>
              </select>
              <select class="oe-fsize" title="Font size">
                <option value="1">8</option>
                <option value="2">10</option>
                <option value="3" selected>12</option>
                <option value="4">14</option>
                <option value="5">18</option>
                <option value="6">24</option>
                <option value="7">36</option>
              </select>
              <span class="oe-fsep"></span>
              <button class="oe-fbtn" data-cmd="bold" title="Bold"><b>B</b></button>
              <button class="oe-fbtn" data-cmd="italic" title="Italic"><i>I</i></button>
              <button class="oe-fbtn" data-cmd="underline" title="Underline"><u>U</u></button>
              <button class="oe-fbtn" data-cmd="strikeThrough" title="Strikethrough"><s>S</s></button>
              <span class="oe-fsep"></span>
              <label class="oe-fbtn oe-color-wrap" title="Font color"><span>A</span><input type="color" class="oe-color" value="#000000"></label>
              <label class="oe-fbtn oe-color-wrap" title="Highlight"><span class="oe-hilite-span">A</span><input type="color" class="oe-hilite" value="#ffff00"></label>
              <span class="oe-fsep"></span>
              <button class="oe-fbtn" data-cmd="insertUnorderedList" title="Bulleted list"><span class="oe-li oe-li-b">&#8226;</span></button>
              <button class="oe-fbtn" data-cmd="insertOrderedList" title="Numbered list"><span class="oe-li oe-li-n">1.</span></button>
              <span class="oe-fsep"></span>
              <button class="oe-fbtn" data-cmd="justifyLeft" title="Align left"><span class="oe-bar oe-bar-l"></span></button>
              <button class="oe-fbtn" data-cmd="justifyCenter" title="Center"><span class="oe-bar oe-bar-c"></span></button>
              <button class="oe-fbtn" data-cmd="justifyRight" title="Align right"><span class="oe-bar oe-bar-r"></span></button>
              <span class="oe-fsep"></span>
              <button class="oe-fbtn" data-cmd="createLink" title="Insert hyperlink"><span class="oe-link">&#128279;</span></button>
              <button class="oe-fbtn" data-cmd="removeFormat" title="Remove formatting"><span class="oe-x">&#10005;</span></button>
            </div>
            <div class="oe-editor" contenteditable="true" spellcheck="false"></div>
            <div class="oe-statusbar">Ready</div>
          </div>
        `
    },
    'mail-read': {
        title: "Message",
        icon: "assets/start-email.png",
        content: `
          <div class="mail-read">
            <div class="oe-menubar">
              <span class="oe-menu-item">File</span>
              <span class="oe-menu-item">Edit</span>
              <span class="oe-menu-item">View</span>
              <span class="oe-menu-item">Tools</span>
              <span class="oe-menu-item">Message</span>
              <span class="oe-menu-item">Help</span>
            </div>
            <div class="oe-toolbar oe-read-toolbar">
              <button class="oe-tool" data-action="reply"><span class="oe-tool-ic">&#8617;</span>Reply</button>
              <button class="oe-tool" data-action="replyall"><span class="oe-tool-ic">&#8646;</span>Reply All</button>
              <button class="oe-tool" data-action="forward"><span class="oe-tool-ic">&#8618;</span>Forward</button>
              <span class="oe-sep"></span>
              <button class="oe-tool" data-action="delete"><span class="oe-tool-ic">&#10005;</span>Delete</button>
            </div>
            <div class="oe-read-head"></div>
            <div class="oe-read-body"></div>
          </div>
        `
    },
    // ── Command Prompt (cmd.exe) ──
    cmd: {
        title: "Command Prompt",
        icon: null, // generated below
        content: `
          <div class="cmd-chrome">
            <div class="cmd-output" id="cmdOutput"></div>
            <div class="cmd-input-line">
              <span class="cmd-prompt" id="cmdPrompt">C:\\&gt;</span>
              <input type="text" class="cmd-input" id="cmdInput" spellcheck="false" autocomplete="off">
            </div>
          </div>
        `
    },
    // ── Blog ──
    blog: {
        title: "Marco's Blog",
        icon: null, // generated below
        content: `
          <div class="blog-chrome">
            <div class="blog-toolbar">
              <span class="blog-tool-title">Marco's Blog</span>
            </div>
            <div class="blog-body">
              <div class="blog-sidebar" id="blogSidebar">
                <div class="blog-post-list" id="blogPostList"></div>
              </div>
              <div class="blog-main" id="blogMain">
                <div class="blog-welcome">
                  <h2>Welcome to my blog</h2>
                  <p>Select a post from the list to read it.</p>
                </div>
              </div>
            </div>
            <div class="blog-statusbar" id="blogStatusbar">0 posts</div>
          </div>
        `
    },
    // ── Minesweeper ──
    minesweeper: {
        title: "Minesweeper",
        icon: 'assets/start-minesweeper.png',
        content: `
          <div class="ms-app">
            <div class="ms-toolbar">
              <span class="ms-counter" id="msMineCount">010</span>
              <button class="ms-face" id="msFace">😊</button>
              <span class="ms-timer" id="msTimer">000</span>
            </div>
            <div class="ms-board" id="msBoard"></div>
            <div class="ms-statusbar">Left-click to reveal &middot; Right-click / long-press to flag</div>
          </div>
        `
    }
};
// Aliases so iconContent['icon11'] / iconContent['icon12'] / etc resolve
iconContent.icon11 = iconContent.cmd;
iconContent.icon12 = iconContent.blog;
iconContent.icon13 = iconContent.minesweeper;

const GRID_SIZE_X = 90;
const GRID_SIZE_Y = 90;
const WELCOME_NOTE_TEXT = "Hi, my name is Marco, welcome to my portfolio, feel free to navigate through the desktop to find what you need";

// ---- Outlook Express mailbox ----
// Module-level store so messages survive closing/reopening the mailbox window.
const MAILBOX_EMAIL = 'marco.tancredi178@gmail.com';
const MAIL_BODY_PLACEHOLDER = `
    <p>Hi Marco,</p>
    <p>I love this Windows XP portfolio you built! I would love to share a few ideas with you.</p>
    <p><br></p>
    <p>Start typing below &mdash; maybe more retro apps, some games, a guestbook, or anything that would make this desktop feel even more authentic.</p>
    <p><br></p>
    <p>Thanks,<br>Your visitor</p>
`;

let mailCounter = 1;
const mailStore = {
    folders: {
        inbox: [
            {
                id: 1,
                from: 'Marco Tancredi',
                address: MAILBOX_EMAIL,
                to: MAILBOX_EMAIL,
                subject: 'Welcome to my mailbox!',
                date: new Date().toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }),
                body: `
                    <p>Hi there!</p>
                    <p>This is my little Windows&nbsp;XP mailbox. I built this whole desktop experience with plain HTML, CSS and JavaScript.</p>
                    <p>Click <b>Create Mail</b> on the toolbar and send me your ideas &mdash; I read every message that lands here.</p>
                    <p>Marco</p>`,
                read: false
            }
        ],
        outbox: [],
        sent: [],
        deleted: [],
        drafts: []
    }
};

function escHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Escape a string for use inside an HTML attribute value.
function escAttr(s) {
    return escHtml(s);
}

/* ===== System helpers =====================================================
   Small utilities the whole desktop leans on: the real taskbar height (it
   changes on mobile), the usable work area, and a cleanup chain so several
   setup functions can register teardown on the same window without one
   overwriting another.
   ========================================================================= */

// Actual taskbar height in px (30 on desktop, 40 on the mobile layout).
function getTaskbarHeight() {
    const tb = document.querySelector('.taskbar');
    const h = tb ? tb.offsetHeight : 0;
    return h || (isMobileLayout() ? 40 : 30);
}

// The desktop work area: everything above the taskbar.
function workAreaHeight() {
    return window.innerHeight - getTaskbarHeight();
}

// Register a teardown callback on a window without clobbering existing ones.
function addCleanup(win, fn) {
    const prev = win._cleanup;
    win._cleanup = () => {
        try { fn(); } catch (e) { /* keep tearing down */ }
        if (prev) { try { prev(); } catch (e) { /* ignore */ } }
    };
}

/* ===== Persistent storage =================================================
   Every localStorage read/write goes through here so a disabled/full storage
   (private browsing, quota) degrades to an in-memory session instead of
   throwing somewhere deep in the UI.
   ========================================================================= */
const Store = {
    get(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (raw == null) return fallback;
            return JSON.parse(raw);
        } catch (e) { return fallback; }
    },
    set(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); return true; }
        catch (e) { return false; }
    },
    del(key) {
        try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
    }
};

// ---- Real email delivery (EmailJS, free static-site email service) ----
// The message is truly delivered to MAILBOX_EMAIL from the visitor's browser.
// To activate it:
//   1) Create a free account at https://www.emailjs.com
//   2) Add an Email Service and an Email Template. In the template use these
//      variable names: {{to_email}} {{from_email}} {{from_name}} {{reply_to}}
//      {{subject}} {{message_html}} {{message}}
//   3) Paste the Public Key, Service ID and Template ID below (they look like
//      "abc123...", "service_xxxxxxx" and "template_xxxxxxx").
// Until the keys are filled in, Send falls back to opening the visitor's own
// email program with the message ready to go (a mailto: link).
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_SDK_URL = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

const emailjsConfigured = () =>
    !EMAILJS_PUBLIC_KEY.startsWith('YOUR_') &&
    !EMAILJS_SERVICE_ID.startsWith('YOUR_') &&
    !EMAILJS_TEMPLATE_ID.startsWith('YOUR_');

function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

// Convert the rich-text editor HTML into plain text (used by the mailto
// fallback, which cannot send HTML).
function htmlToText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
    div.querySelectorAll('p, div').forEach(el => {
        el.append(document.createTextNode('\n'));
    });
    const text = div.textContent
        .replace(/\u00a0/g, ' ')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n[ \t]+/g, '\n')   // strip leading indentation left by the HTML markup
        .replace(/\n{3,}/g, '\n\n');
    return text.trim();
}

function loadEmailJS() {
    return new Promise((resolve, reject) => {
        if (window.emailjs) { resolve(); return; }
        const s = document.createElement('script');
        s.src = EMAILJS_SDK_URL;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('EmailJS SDK could not be loaded.'));
        document.head.appendChild(s);
    });
}

// Send a message to Marco's mailbox. Returns a promise that resolves on
// success and rejects on failure.
async function sendMail({ fromEmail, fromName, toEmail, subject, bodyHtml, bodyText }) {
    if (emailjsConfigured()) {
        await loadEmailJS();
        const emailjs = window.emailjs;
        return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: toEmail,
            from_email: fromEmail,
            from_name: fromName || fromEmail,
            reply_to: fromEmail,
            subject: subject,
            message_html: bodyHtml,
            message: bodyText
        }, { publicKey: EMAILJS_PUBLIC_KEY });
    }
    // Fallback: open the visitor's own email program with everything filled in
    const href = 'mailto:' + toEmail +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyText + '\n\n— Sent from ' + (fromName || fromEmail));
    const a = document.createElement('a');
    a.href = href;
    document.body.appendChild(a);
    a.click();
    a.remove();
    return { status: 'mailto-fallback' };
}

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
        name: 'XP-Portfolio',
        type: 'JavaScript',
        summary: 'The Windows XP-inspired portfolio you are browsing right now — a full desktop experience in the browser.',
        url: 'https://github.com/Marc0GitHub/XP-Portfolio',
        screenshot: 'assets/screenshots/XP-Portfolio.png'
    },
    {
        kind: 'project',
        name: 'pizzeria-sito-2',
        type: 'HTML',
        summary: 'One of my first websites, made for a local pizzeria.',
        url: 'https://github.com/Marc0GitHub/pizzeria-sito-2',
        screenshot: 'assets/screenshots/pizzeria-sito-2.png'
    },
    {
        kind: 'project',
        name: 'Snake-game',
        type: 'JavaScript',
        summary: 'A simple, playable Snake game.',
        url: 'https://github.com/Marc0GitHub/Snake-game',
        screenshot: 'assets/screenshots/Snake-game.png'
    },
    {
        kind: 'project',
        name: 'Password-Generator',
        type: 'CSS',
        summary: 'A simple tool for generating passwords.',
        url: 'https://github.com/Marc0GitHub/Password-Generator',
        screenshot: 'assets/screenshots/Password-Generator.png'
    },
    {
        kind: 'project',
        name: 'Song-lyrics',
        type: 'CSS',
        summary: 'A demo of a Nirvana song with lyrics.',
        url: 'https://github.com/Marc0GitHub/Song-lyrics'
    },
    {
        kind: 'project',
        name: 'Google-clone',
        type: 'CSS',
        summary: 'A clone of the Google search page.',
        url: 'https://github.com/Marc0GitHub/Google-clone',
        screenshot: 'assets/screenshots/Google-clone.png'
    },
    {
        kind: 'project',
        name: 'Images-Converter',
        type: 'JavaScript',
        summary: 'A simple image converter tool.',
        url: 'https://github.com/Marc0GitHub/Images-Converter',
        screenshot: 'assets/screenshots/Images-Converter.png'
    },
    {
        kind: 'project',
        name: 'Minimal-portfolio',
        type: 'CSS',
        summary: 'A minimal portfolio website.',
        url: 'https://github.com/Marc0GitHub/Minimal-portfolio',
        screenshot: 'assets/screenshots/Minimal-portfolio.png'
    },
    {
        kind: 'project',
        name: 'To-Do-App',
        type: 'JavaScript',
        summary: 'A simple to-do list app.',
        url: 'https://github.com/Marc0GitHub/To-Do-App',
        screenshot: 'assets/screenshots/To-Do-App.png'
    },
    {
        kind: 'project',
        name: 'PIzzeria-Bella-Italia-2024',
        type: 'CSS',
        summary: 'A pizzeria website project from 2024.',
        url: 'https://github.com/Marc0GitHub/PIzzeria-Bella-Italia-2024',
        screenshot: 'assets/screenshots/PIzzeria-Bella-Italia-2024.png'
    },
    {
        kind: 'project',
        name: 'Simpsons',
        type: 'HTML',
        summary: 'One of my first websites, all about The Simpsons.',
        url: 'https://github.com/Marc0GitHub/Simpsons',
        screenshot: 'assets/screenshots/Simpsons.png'
    },
    {
        kind: 'project',
        name: 'Pizzeria-Bella-Italia',
        type: 'HTML',
        summary: 'A website for Pizzeria Bella Italia.',
        url: 'https://github.com/Marc0GitHub/Pizzeria-Bella-Italia',
        screenshot: 'assets/screenshots/Pizzeria-Bella-Italia.png'
    },
    {
        kind: 'project',
        name: 'Marc0GitHub.github.io',
        type: 'CSS',
        summary: 'My personal GitHub Pages site.',
        url: 'https://github.com/Marc0GitHub/Marc0GitHub.github.io'
    },
    {
        kind: 'project',
        name: 'silver-enigma',
        type: 'CSS',
        summary: 'An early experimental project.',
        url: 'https://github.com/Marc0GitHub/silver-enigma',
        screenshot: 'assets/screenshots/silver-enigma.png'
    }
];

// Persistent contents of folders created from the right-click menu, keyed by
// the folder's owner id ('dyn-N') so images dropped in survive close/reopen.
const newFolderFiles = {};

document.addEventListener('DOMContentLoaded', () => {
    // Boot -> logon -> desktop. Defined further down in the depth layer.
    runBootSequence();

    // Apply the user's saved wallpaper (or the default XP image)
    setWallpaper(getSavedWallpaper());

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

    // Generate the Command Prompt icon (black square with "C:\" in white)
    (function generateCmdIcon() {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');
        // Black background with subtle gradient
        const bg = ctx.createLinearGradient(0, 0, 48, 48);
        bg.addColorStop(0, '#1a1a1a');
        bg.addColorStop(1, '#000000');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 48, 48);
        // Border
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1;
        ctx.strokeRect(0.5, 0.5, 47, 47);
        // "C:\" text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Courier New", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('C:\\', 24, 20);
        // Blinking cursor underscore
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(33, 25, 8, 2);
        const dataURL = canvas.toDataURL();

        // Set on start menu icon
        const startIcon = document.querySelector('.cmd-start-icon');
        if (startIcon) startIcon.src = dataURL;

        // Set in iconContent so window headers use it
        iconContent.cmd.icon = dataURL;
    })();

    // Generate the Blog icon (blue square with pen)
    (function generateBlogIcon() {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');
        // Blue gradient background
        const bg = ctx.createLinearGradient(0, 0, 48, 48);
        bg.addColorStop(0, '#3a6fc5');
        bg.addColorStop(1, '#1a4a8a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 48, 48);
        ctx.strokeStyle = '#6aa0e0';
        ctx.lineWidth = 1;
        ctx.strokeRect(0.5, 0.5, 47, 47);
        // White document shape
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(10, 6, 28, 34);
        // Lines on document
        ctx.strokeStyle = '#3a6fc5';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(15, 14); ctx.lineTo(33, 14); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(15, 19); ctx.lineTo(33, 19); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(15, 24); ctx.lineTo(28, 24); ctx.stroke();
        // Pen tip
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath(); ctx.moveTo(37, 8); ctx.lineTo(42, 13); ctx.lineTo(39, 16); ctx.lineTo(34, 11); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = '#b89000';
        ctx.lineWidth = 0.8;
        ctx.stroke();
        const dataURL = canvas.toDataURL();

        const startIcon = document.querySelector('.blog-start-icon');
        if (startIcon) startIcon.src = dataURL;
        iconContent.blog.icon = dataURL;
    })();
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
        const tapped = currentIcon;
        lastTapTime = touchEndTime;
        currentIcon = null;
        if (tapped) {
            deselectAllIcons();
            tapped.classList.add('selected');
            tapped.style.transform = '';
            openIconWindow(tapped);
        }
        return;
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
    addCleanup(win, () => {
        document.removeEventListener('mousemove', onDocMouseMove);
        document.removeEventListener('mouseup', onDocMouseUp);
        if (ro) ro.disconnect();
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
        .map(i => ({ src: i.dataset.image, name: i.dataset.name || iconLabel(i) || 'Image' }));
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
    const name = icon.dataset.name || iconLabel(icon) || 'Image';

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
        el.innerHTML = `<span class="context-menu-icon">${item.icon ? `<img src="${escAttr(item.icon)}" alt="">` : ''}</span>` +
            `<span class="context-menu-label">${item.html || escHtml(item.label)}</span>` +
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
    // Documents opened from the desktop show up in My Recent Documents
    if (icon.classList.contains('image-file') || icon.classList.contains('text-file')) {
        rememberRecent({
            name: iconLabel(icon),
            path: VFS.join(VFS.DESKTOP, iconLabel(icon)),
            icon: (icon.querySelector('img') || {}).src
        });
    }
    openWindow(targetId ? document.getElementById(targetId) : icon);
}

// Grid slots that already have an icon on them, as "x,y" keys.
function occupiedDesktopSlots(except) {
    const taken = new Set();
    document.querySelectorAll('.desktop .icon').forEach(icon => {
        if (icon === except) return;
        const s = snapToGrid(parseInt(icon.style.left, 10) || icon.offsetLeft,
                             parseInt(icon.style.top, 10) || icon.offsetTop);
        taken.add(s.x + ',' + s.y);
    });
    return taken;
}

// The next free grid slot at or after (x, y), walking down each column and
// then across — the order Windows fills the desktop in.
function freeDesktopSlot(x, y) {
    const taken = occupiedDesktopSlots();
    const rows = Math.max(1, Math.floor(workAreaHeight() / GRID_SIZE_Y));
    const cols = Math.max(1, Math.floor(window.innerWidth / GRID_SIZE_X));
    const start = snapToGrid(Math.max(0, x || 0), Math.max(0, y || 0));
    let col = Math.round(start.x / GRID_SIZE_X);
    let row = Math.round(start.y / GRID_SIZE_Y);
    for (let n = 0; n < rows * cols; n++) {
        const px = col * GRID_SIZE_X;
        const py = row * GRID_SIZE_Y;
        if (!taken.has(px + ',' + py)) return { x: px, y: py };
        row++;
        if (row >= rows) { row = 0; col = (col + 1) % cols; }
    }
    return start;   // desktop is full; stack rather than lose the icon
}

function createDesktopIcon({ iconSrc, label, className, dataset, dataOpens, x, y }) {
    const desktop = document.querySelector('.desktop');
    if (!desktop) return null;
    const icon = document.createElement('div');
    icon.className = 'icon' + (className ? ' ' + className : '');
    icon.id = 'dyn-' + (++windowCounter);
    if (dataOpens) icon.dataset.opens = dataOpens;
    if (dataset) Object.assign(icon.dataset, dataset);
    icon.innerHTML = `<img src="${escAttr(iconSrc)}" alt="" draggable="false"><span>${escHtml(label)}</span>`;
    icon.dataset.mtime = String(Date.now());
    icon.style.position = 'absolute';
    // Land on the drop point when there is one, otherwise on the first free
    // slot — and never stack two icons on the same square.
    const spot = freeDesktopSlot(
        x != null ? Math.max(0, x - 45) : 0,
        y != null ? Math.max(0, y - 20) : 0
    );
    icon.style.left = spot.x + 'px';
    icon.style.top = spot.y + 'px';
    attachIconListeners(icon);
    desktop.appendChild(icon);
    return icon;
}

function uniqueDesktopName(base) {
    const names = new Set([...document.querySelectorAll('.desktop .icon')].map(iconLabel));
    if (!names.has(base)) return base;
    let n = 2;
    while (names.has(`${base} (${n})`)) n++;
    return `${base} (${n})`;
}

// ---- Desktop menu actions ----
const WALLPAPER_KEY = 'xpWallpaper';
const DEFAULT_WALLPAPER = 'assets/xp-desktop.webp';
// Free, real photo wallpapers (Unsplash License) in assets/wallpapers/*.jpg
const WALLPAPERS = [
    { src: 'assets/wallpapers/bliss.jpg', label: 'Green Valley' },
    { src: 'assets/wallpapers/green.jpg', label: 'Foggy Mountains' },
    { src: 'assets/wallpapers/clouds.jpg', label: 'Golden Field' },
    { src: 'assets/wallpapers/autumn.jpg', label: 'Sunset' },
    { src: 'assets/wallpapers/twilight.jpg', label: 'Mountain Night' },
    { src: 'assets/wallpapers/space.jpg', label: 'Starry Sky' },
    { src: 'assets/wallpapers/desert.jpg', label: 'Desert' },
    { src: 'assets/wallpapers/beach.jpg', label: 'Beach' },
    { src: 'assets/wallpapers/mountains.jpg', label: 'Mountains' },
    { src: 'assets/wallpapers/forest.jpg', label: 'Forest' }
];
// Free animated wallpapers (Mixkit License) - video loops
const ANIMATED_WALLPAPERS = [
    { src: 'assets/wallpapers/aurora-anim.mp4', poster: 'assets/wallpapers/twilight.jpg', label: 'Aurora' },
    { src: 'assets/wallpapers/stars-anim.mp4', poster: 'assets/wallpapers/space.jpg', label: 'Starry Night' },
    { src: 'assets/wallpapers/clouds-anim.mp4', poster: 'assets/wallpapers/clouds.jpg', label: 'Drifting Clouds' }
];

function getSavedWallpaper() {
    try {
        const saved = localStorage.getItem(WALLPAPER_KEY);
        if (!saved) return DEFAULT_WALLPAPER;
        // Accept known wallpapers AND custom images the user set
        const known = [DEFAULT_WALLPAPER,
            ...WALLPAPERS.map(w => w.src),
            ...ANIMATED_WALLPAPERS.map(w => w.src)];
        if (known.includes(saved)) return saved;
        // Also accept any data-URL or file-URL (custom Set as Wallpaper)
        // Only a data: URL survives a reload -- a blob: URL dies with the
        // document that created it and file: is blocked from an https page,
        // so honouring either just guarantees a blank desktop next visit.
        if (/^data:/.test(saved)) return saved;
        if (saved.startsWith('assets/')) return saved; // any asset image
        return DEFAULT_WALLPAPER;
    } catch (e) { return DEFAULT_WALLPAPER; }
}

function isAnimatedWallpaper(src) {
    return /\.mp4$/i.test(src);
}

function getWallpaperVideo() {
    let video = document.getElementById('wallpaper-video');
    if (!video) {
        video = document.createElement('video');
        video.id = 'wallpaper-video';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100svh;object-fit:cover;z-index:0;pointer-events:none;display:none;';
        document.body.insertBefore(video, document.body.firstChild);
    }
    return video;
}

function setWallpaper(src, isFallback) {
    const video = getWallpaperVideo();
    if (isAnimatedWallpaper(src)) {
        // Show the animated (video) wallpaper
        document.body.style.backgroundImage = 'none';
        const poster = (ANIMATED_WALLPAPERS.find(w => w.src === src) || {}).poster || '';
        if (poster) video.poster = poster;
        video.style.display = '';
        if (video.src !== src) {
            video.src = src;
            video.load();
        }
        video.onerror = isFallback ? null : () => fallbackWallpaper(src);
        const p = video.play();
        if (p) p.catch(() => { /* autoplay may need a gesture */ });
    } else {
        // Static image wallpaper
        video.pause();
        video.removeAttribute('src');
        video.load();
        video.style.display = 'none';
        document.body.style.backgroundImage = `url(${src})`;
        // An image that never loads leaves the desktop a blank white void with
        // the icon labels invisible on it, and the dud choice would be saved --
        // so every later visit would come back broken too. Probe it and undo.
        if (!isFallback && !/^data:/i.test(src)) {
            const probe = new Image();
            probe.onerror = () => fallbackWallpaper(src);
            probe.src = src;
        }
    }
    try { localStorage.setItem(WALLPAPER_KEY, src); } catch (e) { /* ignore */ }
}

// Recover from a wallpaper that cannot be displayed. Guarded so that a missing
// default cannot send this into a loop.
function fallbackWallpaper(failed) {
    if (failed === DEFAULT_WALLPAPER) return;
    setWallpaper(DEFAULT_WALLPAPER, true);
}

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
        { label: 'Refresh', action: () => { refreshExplorerWindows(); XPAudio.play('navigate'); } },
        { sep: true },
        { label: 'Paste', disabled: !clipboard, action: () => pasteClipboardToDesktop() },
        { label: 'Paste Shortcut', disabled: true },
        { sep: true },
        { label: 'New', submenu: [
            { label: 'Folder', icon: 'assets/folder-icon.png', action: () => newFolderOnDesktop() },
            { label: 'Text Document', icon: 'assets/notepad-icon.png', action: () => newTextFileOnDesktop() },
            { label: 'Bitmap Image', icon: 'assets/image-file-icon.png', action: () => newBitmapOnDesktop() }
        ]},
        { sep: true },
        { label: Mascot.on ? 'Hide Desktop Buddy' : 'Show Desktop Buddy',
          action: () => {
              const on = Mascot.toggle();
              notify({
                  title: on ? 'Desktop Buddy' : 'Desktop Buddy hidden',
                  text: on
                      ? 'He is back. Move the mouse near him to watch him bolt.'
                      : 'Right-click the desktop, or use Display Properties, to bring him back.',
                  timeout: 5000
              });
          } },
        { sep: true },
        { label: 'Change Background', icon: 'assets/xp-desktop.webp', action: () => showDisplayProperties('desktop') },
        { sep: true },
        { label: 'Properties', icon: 'assets/xp-desktop.webp', action: () => showDisplayProperties('themes') }
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
    const TB = 1099511627776, GB = 1073741824, MB = 1048576, KB = 1024;
    if (bytes >= TB) return (bytes / TB).toFixed(1) + ' TB';
    if (bytes >= GB) return (bytes / GB).toFixed(1) + ' GB';
    if (bytes >= MB) return (bytes / MB).toFixed(1) + ' MB';
    if (bytes >= KB) return (bytes / KB).toFixed(1) + ' KB';
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
    const name = iconLabel(icon);
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
    // Lay them out top-to-bottom, filling each column before starting the
    // next one, exactly like Windows XP's "Arrange Icons By".
    const perCol = Math.max(1, Math.floor(workAreaHeight() / GRID_SIZE_Y));
    keyed.forEach((item, i) => {
        item.icon.style.left = (Math.floor(i / perCol) * GRID_SIZE_X) + 'px';
        item.icon.style.top = ((i % perCol) * GRID_SIZE_Y) + 'px';
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
    // Is this an image file (or a shortcut to one)? -> offer "Set as Wallpaper"
    const imageSrc = icon.classList.contains('image-file') && icon.dataset.image ? icon.dataset.image : null;
    const menu = [
        { label: 'Open', icon: iconSrc, action: () => openIconWindow(icon) },
        { sep: true },
        { label: 'Create Shortcut', icon: iconSrc, action: () => createShortcut(icon) },
        { label: 'Move to Recycle Bin', icon: 'assets/bin-icon.png', disabled: !canMoveToBin, action: () => moveSelectionToBin() },
        { label: 'Rename', icon: 'assets/notepad-icon.png', action: () => renameIcon(icon) }
    ];
    if (imageSrc) {
        menu.push({ label: 'Set as Wallpaper', icon: iconSrc, action: () => setWallpaper(imageSrc) });
    }
    menu.push(
        { sep: true },
        { label: 'Properties', icon: 'assets/image-file-icon.png', action: () => showIconProperties(icon) }
    );
    return menu;
}

function createShortcut(icon) {
    const img = icon.querySelector('img');
    const iconSrc = img ? img.getAttribute('src') : 'assets/image-file-icon.png';
    const base = (iconLabel(icon) || 'Shortcut').replace(/\.(jpeg|jpg|png|bmp|txt)$/i, '');
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

// Currently selected desktop icons (empty when nothing is selected).
function getSelectedIcons() {
    return [...document.querySelectorAll('.desktop .icon.selected')];
}

// System icons (My Computer, My Documents, Recycle Bin, Folder, Paint,
// Notepad) can't be deleted or dragged to the Recycle Bin, like real XP.
function isDeletable(icon) {
    return !!icon && !['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon9', 'icon10', 'icon11'].includes(icon.id);
}

// Build the Recycle Bin entry for a desktop icon (keeps all info for Restore)
function binEntryFor(icon) {
    const img = icon.querySelector('img');
    const entry = {
        type: icon.classList.contains('image-file') ? 'image-file'
            : icon.classList.contains('folder-new') ? 'folder-new'
            : icon.classList.contains('text-file') ? 'text-file'
            : 'shortcut',
        label: iconLabel(icon),
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
    XPAudio.play('recycle');
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
    // Items deleted from Explorer go back where they came from
    if (entry.type === 'vfs') {
        VFS.add(entry.fromPath, entry.node);
        refreshExplorerWindows();
        refreshBinWindows();
        XPAudio.play('restore');
        return;
    }
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
        if (entry.type === 'vfs') { VFS.add(entry.fromPath, entry.node); return; }
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
    refreshExplorerWindows();
    refreshBinWindows();
    XPAudio.play('restore');
}

function emptyRecycleBin() {
    if (!recycleBin.length) return;
    showConfirmDialog('Empty Recycle Bin', 'assets/bin-icon.png',
        'Are you sure you want to permanently delete all items in the Recycle Bin?',
        () => {
            recycleBin.length = 0;
            refreshBinWindows();
            XPAudio.play('recycle');
        });
}

// The visible label of a desktop icon (works mid-rename, when the <span>
// has been swapped for the inline text input).
function iconLabel(icon) {
    if (!icon) return '';
    const span = icon.querySelector('span');
    if (span) return span.textContent;
    const input = icon.querySelector('.icon-rename-input');
    return input ? input.value : (icon.dataset.name || '');
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
            <span class="popup-title">${escHtml(title)} Properties</span>
            <div class="popup-controls">
                <button class="win-btn win-btn-close props-dialog-close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="props-dialog-body">
            <img src="${escAttr(iconSrc)}" alt="">
            <div>
                <h3>${escHtml(title)}</h3>
                ${rows.map(([k, v]) => `<div class="props-row"><strong>${escHtml(k)}:</strong> ${escHtml(v)}</div>`).join('')}
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
    XPAudio.unlock();
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
    const vw = window.innerWidth;
    const vh = workAreaHeight(); // leave room for the taskbar
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
    const maxLeft = Math.max(0, vw - w);
    const maxTop = Math.max(0, vh - h);
    win.style.left = Math.round(Math.min(Math.max(left, 0), maxLeft)) + 'px';
    win.style.top = Math.round(Math.min(Math.max(top, 0), maxTop)) + 'px';
}

function createWindowElement(icon) {
    // Windows opened by the app launcher carry their whole definition on the
    // icon (`_windowSpec`), so new apps don't need an entry in `iconContent`
    // or a branch in the id ladder below.
    const spec = icon._windowSpec || null;
    let data = spec || iconContent[icon.id];

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
                        <img src="${escAttr(src)}" alt="${escAttr(name)}">
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
        const textLabel = iconLabel(icon) || 'New Text Document.txt';
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
            <img class="popup-icon" src="${escAttr(data.icon)}" alt="" draggable="false">
            <span class="popup-title">${escHtml(data.title)}</span>
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
    } else if (icon.id === 'icon10') {
        // Outlook Express mailbox opens large like the XP Explorer
        const defW = Math.min(760, Math.max(560, window.innerWidth - 60));
        const defH = Math.min(560, Math.max(420, window.innerHeight - 80));
        win.style.width = defW + 'px';
        win.style.height = defH + 'px';
        win.dataset.minW = '520';
        win.dataset.minH = '380';
    } else if (icon.id === 'mail-compose') {
        // New Message compose window
        win.style.width = '640px';
        win.style.height = '520px';
        win.dataset.minW = '440';
        win.dataset.minH = '380';
    } else if (icon.id === 'mail-read') {
        // Read-message window
        win.style.width = '520px';
        win.style.height = '420px';
        win.dataset.minW = '380';
        win.dataset.minH = '300';
    } else if (icon.id === 'icon11') {
        // Command Prompt
        win.style.width = '620px';
        win.style.height = '420px';
        win.dataset.minW = '400';
        win.dataset.minH = '260';
    } else if (icon.id === 'icon12') {
        // Blog
        const defW = Math.min(780, Math.max(600, window.innerWidth - 40));
        const defH = Math.min(560, Math.max(440, window.innerHeight - 80));
        win.style.width = defW + 'px';
        win.style.height = defH + 'px';
        win.dataset.minW = '520';
        win.dataset.minH = '380';
    } else if (icon.id === 'icon13') {
        // Minesweeper
        win.style.width = '360px';
        win.style.height = '440px';
        win.dataset.minW = '320';
        win.dataset.minH = '400';
    } else if (spec) {
        win.style.width = (spec.width || 520) + 'px';
        win.style.height = (spec.height || 400) + 'px';
        win.dataset.minW = String(spec.minW || 320);
        win.dataset.minH = String(spec.minH || 220);
    } else {
        win.style.width = '400px';
        win.style.height = '300px';
    }

    if (spec && spec.center) {
        win.style.left = Math.max(0, Math.round((window.innerWidth - parseFloat(win.style.width)) / 2)) + 'px';
        win.style.top = Math.max(0, Math.round((workAreaHeight() - parseFloat(win.style.height)) / 2)) + 'px';
    }

    clampWindowToScreen(win);

    if (spec && typeof spec.setup === 'function') {
        contentEl.classList.add('no-padding');
        win._appId = spec.appId || null;
        spec.setup(win, icon);
    } else if (icon.id === 'icon1') {
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
    } else if (icon.id === 'icon10') {
        contentEl.classList.add('no-padding');
        setupMail(win);
    } else if (icon.id === 'icon11') {
        contentEl.classList.add('no-padding');
        setupTerminal(win);
    } else if (icon.id === 'icon12') {
        contentEl.classList.add('no-padding');
        setupBlog(win);
    } else if (icon.id === 'icon13') {
        contentEl.classList.add('no-padding');
        setupMinesweeper(win);
    } else if (icon.id === 'mail-compose') {
        contentEl.classList.add('no-padding');
        setupMailCompose(win, icon._mailPrefill || {});
    } else if (icon.id === 'mail-read') {
        contentEl.classList.add('no-padding');
        setupMailRead(win, icon._mailMessage);
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
    item.innerHTML = `<img src="${escAttr(iconSrc)}" alt=""><span>${escHtml(title)}</span>`;

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

    enhanceTaskbarItem(item, win);
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

    // Exposed so the title-bar double-click, the window menu, the taskbar
    // context menu and the snap logic can all drive the same code path.
    win._isMaximized = () => isMaximized;
    win._toggleMaximize = () => {
        if (win.dataset.busy === '1') return;
        XPAudio.play(isMaximized ? 'restore' : 'maximize');
        if (isMaximized) {
            const prev = win._maxPrev;
            if (!prev) return;
            animateWindowTo(win, prev, 180, 'cubic-bezier(0.25, 0.1, 0.25, 1)', () => {
                win.style.left = prev.left + 'px';
                win.style.top = prev.top + 'px';
                win.style.width = prev.width + 'px';
                win.style.height = prev.height + 'px';
                win._maxPrev = null;
                win.classList.remove('maximized');
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
            win._snapped = null;
            const target = { left: 0, top: 0, width: window.innerWidth, height: workAreaHeight() };
            animateWindowTo(win, target, 180, 'cubic-bezier(0.25, 0.1, 0.25, 1)', () => {
                win.style.left = '0';
                win.style.top = '0';
                win.style.width = window.innerWidth + 'px';
                win.style.height = workAreaHeight() + 'px';
                win.classList.add('maximized');
                isMaximized = true;
                win.dispatchEvent(new CustomEvent('windowResized'));
            });
        }
    };

    maximizeBtn.addEventListener('click', win._toggleMaximize);
    // Double-clicking the title bar maximizes / restores, like every Windows
    header.addEventListener('dblclick', (e) => {
        if (e.target.closest('.popup-controls')) return;
        win._toggleMaximize();
    });

    // Dragging by header (mouse)
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    function moveWindow(x, y) {
        // The title bar always stays grabbable: never let it leave the screen
        // sideways completely, and never let it slide under the taskbar.
        x = Math.max(-win.offsetWidth + 90, Math.min(x, window.innerWidth - 90));
        y = Math.max(0, Math.min(y, workAreaHeight() - 24));
        win.style.left = x + 'px';
        win.style.top = y + 'px';
    }

    header.addEventListener('mousedown', (e) => {
        // The control buttons and the system-menu icon handle their own clicks
        if (e.target.closest('.popup-controls, .popup-icon')) return;
        e.preventDefault();
        isDragging = true;
        bringToFront(win);
        startX = e.clientX - win.offsetLeft;
        startY = e.clientY - win.offsetTop;
        // Grab ratio, so restoring a maximized window keeps it under the cursor
        win._grabRatio = e.clientX / Math.max(1, win.offsetWidth);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });

    function onMove(e) {
        if (!isDragging) return;
        // Pulling a maximized (or snapped) window off the top restores it
        if ((isMaximized || win._snapped) && win._maxPrev) {
            const prev = win._maxPrev;
            win.getAnimations().forEach(a => a.cancel());
            win.classList.remove('maximized');
            win.style.width = prev.width + 'px';
            win.style.height = prev.height + 'px';
            isMaximized = false;
            win._snapped = null;
            startX = Math.round(prev.width * (win._grabRatio || 0.5));
            startY = Math.min(startY, 16);
            win.dispatchEvent(new CustomEvent('windowResized'));
        }
        moveWindow(e.clientX - startX, e.clientY - startY);
        updateSnapPreview(e.clientX, e.clientY);
    }

    function onUp(e) {
        if (!isDragging) return;
        isDragging = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        const zone = e ? snapZoneFor(e.clientX, e.clientY) : null;
        hideSnapPreview();
        if (zone) applySnap(win, zone);
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
        win.dispatchEvent(new CustomEvent('windowResizing'));
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

    // Edge/corner resizing, the window (system) menu and focus sounds
    installEdgeResizers(win);
    installWindowMenu(win);
}

// Shared Windows XP menu-bar behaviour. Clicking a menu item toggles its
// dropdown (positioned under the item) and clicking anywhere outside closes
// all of them. itemCls/dropdownCls are the CSS class names used by the
// menubar, e.g. 'paint-menu-item' / 'paint-dropdown'. Dropdowns are looked up
// anywhere in the window (they are siblings of the menubar in the HTML).
function setupMenubar(win, itemCls, dropdownCls) {
    const menubarCls = itemCls.replace('-menu-item', '-menubar');
    const menubar = win.querySelector('.' + menubarCls);
    if (!menubar) return;
    const menuItems = menubar.querySelectorAll('.' + itemCls);
    const dropdowns = win.querySelectorAll('.' + dropdownCls);

    const closeAll = () => {
        dropdowns.forEach(d => d.classList.add('hidden'));
        menuItems.forEach(m => m.classList.remove('active'));
    };

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = win.querySelector(`.${dropdownCls}[data-dropdown="${item.dataset.menu}"]`);
            const wasOpen = dropdown ? !dropdown.classList.contains('hidden') : false;
            closeAll();
            if (dropdown && !wasOpen) {
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

    // Close the menus when clicking anywhere outside this window's menubar.
    // The handler is kept in a variable so cleanup can actually remove it
    // (removing `closeAll` would have removed nothing).
    const onDocClick = (e) => {
        if (!e.target.closest('.' + menubarCls)) closeAll();
    };
    document.addEventListener('click', onDocClick);

    // Hovering another menu title while one is open switches to it, like XP.
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const anyOpen = [...dropdowns].some(d => !d.classList.contains('hidden'));
            if (anyOpen && !item.classList.contains('active')) item.click();
        });
    });

    // Escape closes the open menu
    const onKey = (e) => { if (e.key === 'Escape') closeAll(); };
    document.addEventListener('keydown', onKey);

    addCleanup(win, () => {
        document.removeEventListener('click', onDocClick);
        document.removeEventListener('keydown', onKey);
    });
}

// Generic XP "not implemented" dialog for menu items that have no real
// behaviour in this demo (kept consistent with the XP error/info style).
function showNotImplemented(feature) {
    showInfoDialog('Not Available', 'assets/error-icon.png',
        `<b>${escHtml(feature)}</b> is not available in this demo.<br><br>` +
        `This is a portfolio recreation of Windows XP, so some menu items are decorative.`);
}

// Wire up a dropdown's items to a map of { actionName: handler }. Clicking an
// item runs its handler (if defined) then closes the dropdown. itemCls is the
// dropdown item class, e.g. 'exp-dropdown-item'.
function setupDropdownActions(win, itemCls, actions) {
    win.querySelectorAll('.' + itemCls).forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const fn = actions[item.dataset.action];
            if (fn) fn(item);
            // Close the dropdown + deactivate the menu item
            const menubar = win.querySelector('.' + itemCls.replace('-dropdown-item', '-menubar'));
            if (menubar) {
                menubar.querySelectorAll('.' + itemCls.replace('-dropdown-item', '-menu-item')).forEach(m => m.classList.remove('active'));
            }
            win.querySelectorAll('.' + itemCls.replace('-dropdown-item', '-dropdown')).forEach(d => d.classList.add('hidden'));
        });
    });
}

// Where a window "flies" to on the taskbar when minimizing
function getTaskbarTargetRect(win) {
    const item = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"]`);
    if (item) {
        const r = item.getBoundingClientRect();
        return { left: r.left + r.width / 2, top: r.top + r.height / 2, width: r.width, height: r.height };
    }
    return { left: window.innerWidth / 2, top: window.innerHeight - getTaskbarHeight() / 2, width: 60, height: getTaskbarHeight() };
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
    XPAudio.play('minimize');
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
    XPAudio.play('restore');
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
    XPAudio.play('close');
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
                        <strong>${escHtml(file.name)}</strong>
                        <span>${escHtml(type)}</span>
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
                <h3>${escHtml(file.name)}</h3>
                <div class="exp-image-preview"><img src="${escAttr(file.src)}" alt="${escAttr(file.name)}"></div>
                <div class="exp-preview-actions">
                    <button class="exp-open-btn">Open image</button>
                </div>`;
            preview.querySelector('.exp-open-btn').addEventListener('click', () => {
                openImageFileWindow(file.src, file.name, getFolderImageCollection(win));
            });
        } else {
            const screenshotHtml = file.screenshot
                ? `<div class="exp-project-shot"><img src="${escAttr(file.screenshot)}" alt="${escAttr(file.name)}" loading="lazy"></div>`
                : '';
            preview.innerHTML = `
                <h3>${escHtml(file.name)}</h3>
                ${screenshotHtml}
                <p>${escHtml(file.summary)}</p>
                <div class="exp-preview-actions">
                    <button class="exp-open-btn">Open project</button>
                </div>`;
            preview.querySelector('.exp-open-btn').addEventListener('click', () => {
                window.open(file.url, '_blank', 'noopener,noreferrer');
            });
        }
    }

    // Menu bar functionality (shared dropdown logic)
    setupMenubar(win, 'exp-menu-item', 'exp-dropdown');

    // Dropdown menu actions (File / Edit / View / Favorites / Tools / Help)
    setupDropdownActions(win, 'exp-dropdown-item', {
        // File
        new: () => newFolderOnDesktop(),
        open: () => { const f = files[activeIndex]; if (f) window.open(f.url, '_blank', 'noopener,noreferrer'); },
        save: () => showNotImplemented('Save'),
        saveas: () => showNotImplemented('Save As'),
        print: () => showNotImplemented('Print'),
        properties: () => showDesktopProperties(),
        close: () => closeWindow(win),
        // Edit
        undo: () => showNotImplemented('Undo'),
        redo: () => showNotImplemented('Redo'),
        cut: () => showNotImplemented('Cut'),
        copy: () => showNotImplemented('Copy'),
        paste: () => showNotImplemented('Paste'),
        delete: () => { const f = files[activeIndex]; if (f && f.kind === 'image') win.removeImageFile(activeIndex); },
        rename: () => showNotImplemented('Rename'),
        selectall: () => showNotImplemented('Select All'),
        // View
        details: () => showNotImplemented('Details'),
        list: () => showNotImplemented('List'),
        tiles: () => showNotImplemented('Tiles'),
        thumbnails: () => showNotImplemented('Thumbnails'),
        arrangelineupbyname: () => arrangeIconsBy('name'),
        arrangelineupbysize: () => arrangeIconsBy('size'),
        arrangelineupbytype: () => arrangeIconsBy('type'),
        arrangelineupbymodified: () => arrangeIconsBy('modified'),
        aligntogrid: () => alignIconsToGrid(),
        autoadjust: () => showNotImplemented('Auto Arrange'),
        // Favorites
        addtofavorites: () => showNotImplemented('Add to Favorites'),
        organizefavorites: () => showNotImplemented('Organize Favorites'),
        // Tools
        mapnetworkdrive: () => showNotImplemented('Map Network Drive'),
        disconnectnetworkdrive: () => showNotImplemented('Disconnect Network Drive'),
        toolsoptions: () => showNotImplemented('Tools Options'),
        // Help
        helpcontents: () => showNotImplemented('Help Contents'),
        helpsearch: () => showNotImplemented('Help Search'),
        helptutorial: () => showNotImplemented('Help Tutorial'),
        about: () => showInfoDialog('About Windows Explorer', 'assets/folder-icon.png',
            'Windows Explorer<br><br>Part of the Windows XP Portfolio desktop recreation.')
    });

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

// Open a brand-new empty Notepad window (used by File > New)
function openNewNotepad() {
    const fakeIcon = document.createElement('div');
    fakeIcon.className = 'icon text-file';
    fakeIcon.id = 'notepad-' + (++windowCounter);
    fakeIcon.innerHTML = '<span>Untitled.txt</span>';
    openWindow(fakeIcon);
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
    setupMenubar(win, 'exp-menu-item', 'exp-dropdown');

    // Dropdown menu actions (File / Edit / View / Favorites / Tools / Help)
    setupDropdownActions(win, 'exp-dropdown-item', {
        // File
        empty: () => emptyRecycleBin(),
        properties: () => showDesktopProperties(),
        undo: () => showNotImplemented('Undo'),
        redo: () => showNotImplemented('Redo'),
        cut: () => showNotImplemented('Cut'),
        copy: () => showNotImplemented('Copy'),
        paste: () => showNotImplemented('Paste'),
        delete: () => emptyRecycleBin(),
        rename: () => showNotImplemented('Rename'),
        selectall: () => showNotImplemented('Select All'),
        details: () => showNotImplemented('Details'),
        list: () => showNotImplemented('List'),
        tiles: () => showNotImplemented('Tiles'),
        thumbnails: () => showNotImplemented('Thumbnails'),
        arrangelineupbyname: () => arrangeIconsBy('name'),
        arrangelineupbysize: () => arrangeIconsBy('size'),
        arrangelineupbytype: () => arrangeIconsBy('type'),
        arrangelineupbymodified: () => arrangeIconsBy('modified'),
        aligntogrid: () => alignIconsToGrid(),
        autoadjust: () => showNotImplemented('Auto Arrange'),
        addtofavorites: () => showNotImplemented('Add to Favorites'),
        organizefavorites: () => showNotImplemented('Organize Favorites'),
        mapnetworkdrive: () => showNotImplemented('Map Network Drive'),
        disconnectnetworkdrive: () => showNotImplemented('Disconnect Network Drive'),
        toolsoptions: () => showNotImplemented('Tools Options'),
        helpcontents: () => showNotImplemented('Help Contents'),
        helpsearch: () => showNotImplemented('Help Search'),
        helptutorial: () => showNotImplemented('Help Tutorial'),
        about: () => showInfoDialog('About Windows Explorer', 'assets/bin-icon.png',
            'Windows Explorer<br><br>Part of the Windows XP Portfolio desktop recreation.')
    });

    const emptyBtn = win.querySelector('[data-bin-action="empty"]');
    const restoreAllBtn = win.querySelector('[data-bin-action="restore-all"]');
    if (emptyBtn) emptyBtn.addEventListener('click', () => emptyRecycleBin());
    if (restoreAllBtn) restoreAllBtn.addEventListener('click', () => restoreAllBinItems());

    win.refreshBin = render;
    render();
}

// Note: Most modern websites block iframe embedding via X-Frame-Options / CSP.
// The browser tries the iframe first; if it fails (detected via timeout), it shows
// a fallback page with an "Open in New Tab" button.
// Sites known to allow iframe embedding: Wikipedia, DuckDuckGo Lite, Hacker News,
// Stack Overflow, Britannica, and many older/static sites.

/* ===== Internet Explorer ===================================================
   A browser inside a browser has one hard problem: most sites send
   X-Frame-Options or CSP frame-ancestors, which forbids embedding them, and
   the browser deliberately gives JavaScript NO way to detect that it happened
   (a refused frame and a loaded frame are indistinguishable — same load event,
   same null contentDocument, same SecurityError on any property read).

   So this app does not guess. It does three things instead:
     1. Ships a verified table of which hosts allow embedding and which don't,
        so a known-refusing site shows a real IE error page instead of a blank
        white rectangle.
     2. Offers the Time Machine — the Internet Archive's `if_` URL form, which
        serves any archived page with no framing restrictions at all. That
        makes almost the entire web browsable, in period-correct form, which on
        a Windows XP desktop is the point rather than a consolation.
     3. Always leaves the era selector and "open in a real tab" one click away.

   The Time Machine needs no API call, no CORS and no third-party proxy: the
   archive resolves <year>1022173245 to its nearest real snapshot itself, via a
   redirect the iframe follows on its own.
   ========================================================================= */

const IE_HOME = 'about:home';

// Years the Internet Archive covers well enough to browse for fun.
const IE_ERAS = [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2012, 2015, 2018, 2021];

// The archive resolves this fixed month/day/time to the closest real capture.
const IE_ERA_STAMP = '1022173245';
const IE_LATEST_STAMP = '29991231235959';

const IE_SEARCH_ENGINES = {
    google: { name: 'Google', url: 'https://www.google.com/search?igu=1&q=' },
    wiby: { name: 'Wiby (the old web)', url: 'https://wiby.me/?q=' },
    marginalia: { name: 'Marginalia (indie web)', url: 'https://search.marginalia.nu/search?query=' },
    bing: { name: 'Bing', url: 'https://www.bing.com/search?q=' },
    wikipedia: { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=' },
    searx: { name: 'SearXNG', url: 'https://searx.be/search?q=' }
};

// Verified by checking X-Frame-Options and CSP frame-ancestors on each host.
// These load correctly inside a frame, so they are safe to offer as links.
const IE_BOOKMARKS = [
    { name: 'Wikipedia', url: 'https://en.wikipedia.org' },
    { name: 'Internet Archive', url: 'https://archive.org' },
    { name: 'Lobsters', url: 'https://lobste.rs' },
    { name: 'NPR Text', url: 'https://text.npr.org' },
    { name: 'JS Paint', url: 'https://jspaint.app' },
    { name: 'Photopea', url: 'https://www.photopea.com' },
    { name: 'CyberChef', url: 'https://gchq.github.io/CyberChef' },
    { name: 'Winamp Skins', url: 'https://skins.webamp.org' },
    { name: 'js-dos', url: 'https://js-dos.com' },
    { name: "Cameron's World", url: 'https://cameronsworld.net' },
    { name: 'The First Website', url: 'http://info.cern.ch/hypertext/WWW/TheProject.html' },
    { name: 'xkcd', url: 'https://xkcd.com' },
    { name: 'daedalOS', url: 'https://dustinbrett.com' }
];

// Sites confirmed to refuse embedding. Loading these would show a blank frame
// with no error, so we show a proper IE error page and offer the Time Machine.
const IE_BLOCKED_HOSTS = new Set([
    'github.com', 'www.github.com', 'gist.github.com',
    'news.ycombinator.com', 'stackoverflow.com', 'serverfault.com', 'superuser.com',
    'developer.mozilla.org', 'www.w3schools.com', 'w3schools.com',
    'youtube.com', 'www.youtube.com', 'm.youtube.com',
    'reddit.com', 'www.reddit.com', 'old.reddit.com',
    'x.com', 'twitter.com', 'www.twitter.com',
    'facebook.com', 'www.facebook.com', 'instagram.com', 'www.instagram.com',
    'linkedin.com', 'www.linkedin.com', 'tiktok.com', 'www.tiktok.com',
    'amazon.com', 'www.amazon.com', 'ebay.com', 'www.ebay.com',
    'netflix.com', 'www.netflix.com', 'spotify.com', 'open.spotify.com',
    'duckduckgo.com', 'html.duckduckgo.com', 'lite.duckduckgo.com',
    'www.mojeek.com', 'mojeek.com', 'search.brave.com', 'www.ecosia.org',
    'www.startpage.com', 'www.qwant.com',
    'www.openstreetmap.org', 'openstreetmap.org',
    'neal.fun', 'www.neal.fun', 'lite.cnn.com', 'legiblenews.com',
    'classicreload.com', 'www.classicreload.com', 'emupedia.net',
    'regex101.com', 'bestmotherfucking.website',
    'gitlab.com', 'bitbucket.org', 'npmjs.com', 'www.npmjs.com',
    'medium.com', 'www.medium.com', 'quora.com', 'www.quora.com',
    'pinterest.com', 'www.pinterest.com', 'twitch.tv', 'www.twitch.tv'
]);

function ieHostOf(url) {
    try { return new URL(url).hostname.toLowerCase(); } catch (e) { return ''; }
}

function ieIsBlockedHost(url) {
    const host = ieHostOf(url);
    if (!host) return false;
    if (IE_BLOCKED_HOSTS.has(host)) return true;
    // Bare google.com refuses framing; only the ?igu=1 endpoints allow it.
    if (/(^|\.)google\.(com?|[a-z]{2}|com\.[a-z]{2}|co\.[a-z]{2})$/.test(host) && !/[?&]igu=1(&|$)/.test(url)) return true;
    return false;
}

// Wrap a URL so the Internet Archive serves it. `if_` is the archive's iframe
// mode: no toolbar banner, and in-page links stay inside the archive.
function ieWaybackUrl(url, era) {
    const stamp = era === 'latest' ? IE_LATEST_STAMP : String(era) + IE_ERA_STAMP;
    return 'https://web.archive.org/web/' + stamp + 'if_/' + url;
}

// A drive root ("C:"), a drive path, "My Computer" and about: URLs are all
// places on this computer. Anything with a space in it is a search phrase, so
// these have to be recognised BEFORE that rule or "My Computer" becomes a query.
function ieIsLocalAddress(text) {
    const t = String(text || '').trim();
    return /^about:/i.test(t) || /^[A-Za-z]:(\\|$)/.test(t) || t === MY_COMPUTER;
}

function ieIsSearch(text) {
    const t = String(text || '').trim();
    if (!t) return false;
    if (ieIsLocalAddress(t)) return false;
    if (/^https?:/i.test(t)) return false;
    if (/\s/.test(t)) return true;                       // a phrase is a search
    return !looksLikeURL(t);
}

/* ---- pages we render ourselves -------------------------------------------
   These go into the frame via srcdoc under a stricter sandbox (no
   allow-same-origin), so they get an opaque origin and cannot touch this
   page. They talk back by postMessage, which the parent only accepts from an
   opaque origin — a remote site can never impersonate them.
   ------------------------------------------------------------------------- */

const IE_LOCAL_STYLE = `
  <style>
    * { box-sizing: border-box; }
    body { margin:0; font:13px Tahoma, "Noto Sans", sans-serif; color:#00246b;
           background:#fff; }
    a { color:#0d4fa8; text-decoration:none; cursor:pointer; }
    a:hover { text-decoration:underline; }
    .hero { background:linear-gradient(to bottom,#3f7fdc,#1d4fa8);
            color:#fff; padding:18px 22px 22px; }
    .hero h1 { margin:0 0 2px; font-size:22px; letter-spacing:-.4px;
               text-shadow:1px 1px 2px rgba(0,0,0,.35); }
    .hero p { margin:0; font-size:11px; color:#cfe0ff; }
    .searchrow { display:flex; gap:6px; margin-top:14px; max-width:520px; }
    .searchrow input { flex:1; height:26px; padding:0 7px; border:1px solid #16407f;
                       font:13px Tahoma, sans-serif; }
    .searchrow button { height:26px; padding:0 14px; cursor:pointer;
                        font:11px Tahoma, sans-serif; border:1px solid #7a7a7a;
                        border-radius:3px;
                        background:linear-gradient(to bottom,#fdfdfd,#e4e4dc); }
    .wrap { padding:16px 22px 24px; }
    h2 { font-size:12px; text-transform:uppercase; letter-spacing:.6px;
         color:#4a6ea8; margin:18px 0 8px; border-bottom:1px solid #d6e0f0;
         padding-bottom:4px; }
    h2:first-child { margin-top:0; }
    ul.links { list-style:none; margin:0; padding:0; display:grid;
               grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:3px 16px; }
    ul.links li { padding:3px 0; font-size:12px; }
    ul.links li::before { content:"\\00BB"; color:#6f93cc; margin-right:6px; }
    .note { margin-top:20px; padding:10px 12px; background:#fffbe6;
            border:1px solid #e3d69a; font-size:11px; line-height:1.6; color:#5a4a12; }
    .note b { color:#3d3208; }
  </style>`;

// Where each "the web in <year>" link lands - a site worth seeing in that year.
const IE_ERA_LANDINGS = {
    1996: 'http://www.yahoo.com',
    1999: 'http://www.google.com',
    2001: 'http://www.apple.com',
    2004: 'http://www.myspace.com',
    2008: 'http://www.nokia.com'
};

// The IE start page, styled like a 2003 portal.
function ieHomePage(engineKey) {
    const engine = IE_SEARCH_ENGINES[engineKey] || IE_SEARCH_ENGINES.google;
    const link = (b) => `<li><a data-go="${escAttr(b.url)}">${escHtml(b.name)}</a></li>`;
    const era = (y) => `<li><a data-era="${y}">The web in ${y}</a></li>`;
    return `<!doctype html><html><head><meta charset="utf-8">${IE_LOCAL_STYLE}</head><body>
      <div class="hero">
        <h1>Marco Tancredi &mdash; Internet Explorer</h1>
        <p>Search the live web, or travel back and browse it as it was.</p>
        <form class="searchrow" id="f">
          <input id="q" type="text" placeholder="Search with ${escAttr(engine.name)}&hellip;" autofocus>
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="wrap">
        <h2>Places that work in here</h2>
        <ul class="links">${IE_BOOKMARKS.map(link).join('')}</ul>
        <h2>Time Machine</h2>
        <ul class="links">${[1996, 1999, 2001, 2004, 2008].map(era).join('')}</ul>
        <div class="note">
          <b>Why do some sites show an error?</b> Most modern sites send a header
          that forbids being displayed inside another page, and browsers give
          scripts no way to detect it. When that happens, pick a year above and
          the Internet Archive will serve you the page instead &mdash; that works
          almost everywhere.
        </div>
      </div>
      <script>
        var send = function (msg) { parent.postMessage(Object.assign({ xpBrowser: 1 }, msg), '*'); };
        document.addEventListener('click', function (e) {
          var a = e.target.closest('a[data-go], a[data-era]');
          if (!a) return;
          e.preventDefault();
          if (a.dataset.era) send({ era: a.dataset.era });
          else send({ url: a.dataset.go });
        });
        document.getElementById('f').addEventListener('submit', function (e) {
          e.preventDefault();
          var v = document.getElementById('q').value.trim();
          if (v) send({ search: v });
        });
      <\/script>
    </body></html>`;
}

// Browsing the virtual file system from the address bar, Apache-index style.
function ieDirectoryIndex(path) {
    const node = path === MY_COMPUTER ? null : VFS.get(path);
    const entries = path === MY_COMPUTER
        ? myComputerEntries().map(e => ({ name: e.name, path: e.path, folder: true }))
        : (node && node.type === 'folder'
            ? (node.children || []).map(c => ({
                name: c.name,
                path: VFS.join(path, c.name),
                folder: c.type === 'folder',
                size: c.type === 'folder' ? '-' : formatBytes(VFS.sizeOf(c)),
                modified: c.mtime ? formatDate(c.mtime) : '-'
            }))
            : null);

    if (!entries) {
        return `<!doctype html><html><head><meta charset="utf-8">${IE_LOCAL_STYLE}</head><body>
          <div class="wrap"><h2>404 Not Found</h2>
          <p>The requested path <b>${escHtml(path)}</b> was not found on this computer.</p>
          </div></body></html>`;
    }

    const parent = path === MY_COMPUTER ? null
        : (/^[A-Za-z]:$/.test(path) ? MY_COMPUTER : VFS.parentOf(path));
    const row = (e) => `<tr>
        <td><a data-go="${escAttr(e.path)}">${escHtml(e.name)}${e.folder ? '/' : ''}</a></td>
        <td>${escHtml(e.modified || '-')}</td>
        <td class="r">${escHtml(e.size || '-')}</td></tr>`;

    return `<!doctype html><html><head><meta charset="utf-8">${IE_LOCAL_STYLE}
      <style>
        table { border-collapse:collapse; width:100%; font-size:12px; }
        th { text-align:left; border-bottom:1px solid #99a; padding:4px 8px; font-size:11px; }
        td { padding:2px 8px; }
        td.r, th.r { text-align:right; }
        tr:hover td { background:#eef4ff; }
      </style></head><body>
      <div class="wrap">
        <h2>Index of ${escHtml(path)}</h2>
        <table>
          <tr><th>Name</th><th>Last modified</th><th class="r">Size</th></tr>
          ${parent ? `<tr><td><a data-go="${escAttr(parent)}">../</a></td><td>-</td><td class="r">-</td></tr>` : ''}
          ${entries.sort((a, b) => (b.folder - a.folder) || a.name.localeCompare(b.name)).map(row).join('')}
        </table>
      </div>
      <script>
        document.addEventListener('click', function (e) {
          var a = e.target.closest('a[data-go]');
          if (!a) return;
          e.preventDefault();
          parent.postMessage({ xpBrowser: 1, url: a.dataset.go }, '*');
        });
      <\/script>
    </body></html>`;
}

// Does this look like an address rather than something to search for?
function looksLikeURL(text) {
    const t = String(text || '').trim();
    if (!t || /\s/.test(t)) return false;
    if (/^https?:\/\//i.test(t)) return true;
    if (ieIsLocalAddress(t)) return true;
    if (/^([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(\/|\?|#|$)/.test(t)) return true;
    if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d+)?(\/|$)/.test(t)) return true;
    if (/^localhost(:\d+)?(\/|$)/.test(t)) return true;
    return false;
}

function normalizeURL(text) {
    const t = String(text || '').trim();
    if (/^(https?:\/\/|about:)/i.test(t)) return t;
    // Anything else (javascript:, data:, vbscript:, file:) is treated as a
    // hostname, so it can never be handed to the frame as a live scheme.
    return 'https://' + t.replace(/^[a-z][a-z0-9+.-]*:/i, '');
}

const IE_ENGINE_KEY = 'xpBrowserEngine';
const IE_ERA_KEY = 'xpBrowserEra';

// localStorage is shared by every project on a *.github.io origin, and eras can
// also arrive from a page message, so never trust a stored era unread.
function ieValidEra(value) {
    const v = String(value);
    return v === 'live' || v === 'latest' || IE_ERAS.includes(Number(v));
}

function setupBrowser(win) {
    const urlInput = win.querySelector('#browserUrl');
    let frame = win.querySelector('#browserFrame');
    const backBtn = win.querySelector('#browserBack');
    const fwdBtn = win.querySelector('#browserForward');
    const stopBtn = win.querySelector('#browserStop');
    const refreshBtn = win.querySelector('#browserRefresh');
    const homeBtn = win.querySelector('#browserHome');
    const statusText = win.querySelector('#ieStatusText');
    const zoneText = win.querySelector('#ieZone');
    const progressBar = win.querySelector('#ieProgress');
    const progressFill = win.querySelector('#ieProgressFill');
    const errorPage = win.querySelector('#ieErrorPage');
    const errorMsg = win.querySelector('#ieErrorMsg');
    const errorUrl = win.querySelector('#ieErrorUrl');
    const errorActions = win.querySelector('#ieErrorActions');
    const faviconImg = win.querySelector('#ieFavicon');
    const bookmarksBar = win.querySelector('#ieBookmarksBar');
    const eraSelect = win.querySelector('#ieEra');
    const eraBar = win.querySelector('#ieEraBar');
    const eraNote = win.querySelector('#ieEraNote');
    const nudge = win.querySelector('#ieNudge');
    const nudgeText = win.querySelector('#ieNudgeText');
    const statusHint = win.querySelector('#ieStatusHint');
    const titleEl = win.querySelector('.popup-title');

    const REMOTE_SANDBOX = 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts';
    const LOCAL_SANDBOX = 'allow-scripts';

    let history = [];
    let index = -1;
    let era = 'live';                                  // every session starts live
    const storedEra = String(Store.get(IE_ERA_KEY, '2004'));
    let preferredEra = ieValidEra(storedEra) && storedEra !== 'live' ? storedEra : '2004';
    let engineKey = Store.get(IE_ENGINE_KEY, 'google');
    let loadTimer = null;
    let loadSeq = 0;
    let showingLocalPage = false;

    const current = () => (index >= 0 ? history[index] : null);
    const isLocal = ieIsLocalAddress;

    /* ---- era selector ---- */
    eraSelect.innerHTML =
        '<option value="live">Today &mdash; the live web</option>' +
        '<optgroup label="Internet Archive">' +
        '<option value="latest">Latest archived copy</option>' +
        IE_ERAS.map(y => `<option value="${y}">${y}</option>`).join('') +
        '</optgroup>';
    eraSelect.value = era;

    function setEra(next, reload = true) {
        if (!ieValidEra(next)) return;
        era = next;
        eraSelect.value = next;
        if (next !== 'live') {
            preferredEra = next;
            Store.set(IE_ERA_KEY, next);
        }
        eraBar.classList.toggle('ie-era-active', next !== 'live');
        eraNote.textContent = next === 'live'
            ? ''
            : (next === 'latest' ? 'Serving the most recent archived copy.'
                : 'Serving the page as the Internet Archive saw it in ' + next + '.');
        zoneText.textContent = next === 'live' ? 'Internet' : 'Internet Archive';
        if (reload && current() && !isLocal(current())) navigate(current(), { push: false });
    }

    /* ---- progress + status ---- */
    function startLoading() {
        progressBar.classList.add('ie-progress-active');
        progressFill.style.transition = 'none';
        progressFill.style.width = '0%';
        void progressFill.offsetHeight;
        progressFill.style.transition = 'width 1.6s cubic-bezier(0.1,0.6,0.3,1)';
        progressFill.style.width = '78%';
    }
    function finishLoading(ok) {
        if (ok) {
            progressFill.style.transition = 'width .3s ease-out';
            progressFill.style.width = '100%';
            setTimeout(() => {
                progressBar.classList.remove('ie-progress-active');
                progressFill.style.width = '0%';
            }, 320);
        } else {
            progressBar.classList.remove('ie-progress-active');
            progressFill.style.width = '0%';
        }
    }

    // Only fetch a favicon from a host we are actually about to load. Asking
    // github.com for one while telling the user we refused to open it would be
    // a credentialed request to a site they never visited - and in Time Machine
    // mode the live site is not the one being shown at all.
    function setFavicon(addr) {
        const fallback = 'assets/internet-explorer-icon.png';
        if (isLocal(addr) || era !== 'live' || ieIsBlockedHost(addr)) {
            faviconImg.src = fallback;
            return;
        }
        try {
            faviconImg.referrerPolicy = 'no-referrer';
            faviconImg.src = new URL(addr).origin + '/favicon.ico';
            faviconImg.onerror = () => { faviconImg.src = fallback; };
        } catch (e) {
            faviconImg.src = fallback;
        }
    }

    function setTitle(addr) {
        let label = 'Internet Explorer';
        if (addr === IE_HOME) label = 'Home';
        else if (isLocal(addr)) label = addr;
        else label = ieHostOf(addr) || addr;
        const full = label + ' - Microsoft Internet Explorer';
        if (titleEl) titleEl.textContent = full;
        const tb = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"] span`);
        if (tb) tb.textContent = full;
    }

    /* ---- error page + nudge ---- */
    function hideChrome() {
        errorPage.style.display = 'none';
        nudge.hidden = true;
        statusHint.hidden = true;
    }

    function showErrorPage(addr, headline, detail, actions) {
        parkFrame();
        frame.style.display = 'none';
        errorPage.style.display = 'block';
        errorPage.querySelector('.ie-error-title').textContent = headline;
        errorMsg.innerHTML = detail;
        errorUrl.textContent = addr;
        errorActions.innerHTML = '';
        actions.forEach(a => {
            const b = document.createElement('button');
            b.className = 'ie-error-btn' + (a.primary ? '' : ' ie-error-btn-secondary');
            b.textContent = a.label;
            b.addEventListener('click', a.action);
            errorActions.appendChild(b);
        });
        finishLoading(false);
        statusText.textContent = 'Done';
    }

    function showNudge(addr) {
        nudgeText.textContent = ieHostOf(addr) + ' refuses to be displayed inside another page.';
        nudge.hidden = false;
    }

    /* ---- the one place that decides what the frame shows ---- */
    function render(addr) {
        hideChrome();
        setFavicon(addr);
        setTitle(addr);
        urlInput.value = addr === IE_HOME ? '' : addr;
        urlInput.placeholder = addr === IE_HOME
            ? 'Type a web address or search the web\u2026'
            : 'Type a web address or search the web\u2026';

        if (loadTimer) { clearTimeout(loadTimer); loadTimer = null; }

        // Pages we generate ourselves
        if (isLocal(addr)) {
            const html = addr === IE_HOME ? ieHomePage(engineKey)
                : addr === 'about:blank' ? BLANK_DOC
                : ieDirectoryIndex(addr);
            swapFrame(LOCAL_SANDBOX, (f) => { f.srcdoc = html; });
            showingLocalPage = true;
            statusText.textContent = 'Done';
            finishLoading(true);
            eraBar.classList.add('ie-era-na');
            return;
        }
        eraBar.classList.remove('ie-era-na');

        // A site we know refuses framing, browsed live: say so honestly rather
        // than showing a blank rectangle the user cannot explain.
        if (era === 'live' && ieIsBlockedHost(addr)) {
            showingLocalPage = false;
            const host = ieHostOf(addr);
            showErrorPage(addr, 'This page cannot be displayed',
                `<b>${escHtml(host)}</b> sends a security header that forbids other sites from ` +
                `displaying it, and there is no way for this browser to override that.<br><br>` +
                `The Internet Archive is not bound by it, so the Time Machine can usually still show you the page.`,
                [
                    { label: 'View in the Time Machine', primary: true, action: () => { setEra(preferredEra, false); navigate(addr, { push: false }); } },
                    { label: 'Open in a real browser tab', action: () => window.open(addr, '_blank', 'noopener,noreferrer') },
                    { label: 'Try anyway', action: () => loadRemote(addr, true) }
                ]);
            return;
        }

        loadRemote(addr, false);
    }

    function loadRemote(addr, force) {
        showingLocalPage = false;
        errorPage.style.display = 'none';
        nudge.hidden = true;

        // Offer the way out for every live remote page: we cannot tell whether
        // this one will render, so the escape hatch is simply always there.
        statusHint.hidden = era !== 'live';

        const target = era === 'live' ? addr : ieWaybackUrl(addr, era);
        statusText.textContent = 'Opening ' + target + '\u2026';
        startLoading();
        swapFrame(REMOTE_SANDBOX, (f) => { f.src = target; });

        // Browsers hide whether a frame was refused, so the only honest signal
        // is that nothing arrived at all within a generous window.
        loadTimer = setTimeout(() => {
            finishLoading(false);
            statusText.textContent = 'The page is taking a long time to respond';
        }, 20000);

        if (force || (era === 'live' && ieIsBlockedHost(addr))) {
            setTimeout(() => { if (current() === addr) showNudge(addr); }, 900);
        }
    }

    function onFrameLoad(e) {
        if (e.target !== frame) return;                       // a retired frame
        if (loadTimer) { clearTimeout(loadTimer); loadTimer = null; }
        finishLoading(true);
        if (frame.dataset.quiet === '1') return;              // a parked blank frame
        statusText.textContent = 'Done';
    }

    // Every navigation gets a brand new iframe, with its src or srcdoc set
    // BEFORE insertion so exactly one load event fires. This also destroys the
    // outgoing document instead of leaving it running behind an error page,
    // and gives Stop something real to do: a cross-origin contentWindow.stop()
    // is unreachable, so cancelling means discarding the frame.
    function swapFrame(sandbox, apply, quiet) {
        const next = document.createElement('iframe');
        next.id = 'browserFrame';
        next.title = 'Browser content';
        next.referrerPolicy = 'no-referrer';
        next.setAttribute('sandbox', sandbox);
        next.dataset.seq = String(++loadSeq);
        if (quiet) next.dataset.quiet = '1';
        next.addEventListener('load', onFrameLoad);
        if (apply) apply(next);
        frame.replaceWith(next);
        frame = next;
        return next;
    }

    const BLANK_DOC = '<!doctype html><html><body style="background:#fff"></body></html>';

    // Discard whatever is loaded or loading, without announcing anything.
    function parkFrame() {
        if (loadTimer) { clearTimeout(loadTimer); loadTimer = null; }
        swapFrame(LOCAL_SANDBOX, (f) => { f.srcdoc = BLANK_DOC; }, true);
    }

    /* ---- navigation ---- */
    function navigate(input, opts = {}) {
        const push = opts.push !== false;
        let addr = String(input || '').trim();
        if (!addr) return;

        // Locality first: a path on this computer must never be mistaken for a
        // search, however much it looks like prose.
        if (!isLocal(addr)) {
            if (ieIsSearch(addr)) {
                const engine = IE_SEARCH_ENGINES[engineKey] || IE_SEARCH_ENGINES.google;
                addr = engine.url + encodeURIComponent(addr);
            } else {
                addr = normalizeURL(addr);
            }
        }

        // A path pointing at a file, not a folder, belongs to whichever app
        // handles that file - the browser hands it over rather than rendering it.
        if (/^[A-Za-z]:\\/.test(addr)) {
            const node = VFS.get(addr);
            if (node && node.type === 'file') {
                openVfsFile(node, addr);
                // The browser is still showing whatever it was showing, so put
                // the address bar and status back to describing that.
                const shown = current();
                urlInput.value = shown && shown !== IE_HOME ? shown : '';
                statusText.textContent = 'Done';
                return;
            }
        }

        if (push) {
            history = history.slice(0, index + 1);
            if (history[history.length - 1] !== addr) history.push(addr);
            index = history.length - 1;
        }
        updateNav();
        XPAudio.play('navigate');
        render(addr);
    }

    function updateNav() {
        backBtn.disabled = index <= 0;
        fwdBtn.disabled = index >= history.length - 1;
    }

    backBtn.addEventListener('click', () => { if (index > 0) { index--; updateNav(); render(history[index]); } });
    fwdBtn.addEventListener('click', () => { if (index < history.length - 1) { index++; updateNav(); render(history[index]); } });
    homeBtn.addEventListener('click', () => navigate(IE_HOME));
    refreshBtn.addEventListener('click', () => { if (current()) render(current()); });
    stopBtn.addEventListener('click', () => {
        const wasLoading = !!loadTimer;
        parkFrame();
        finishLoading(false);
        // Pressing Stop with nothing in flight should not claim to have
        // cancelled something, nor poison the next navigation's status.
        if (wasLoading) statusText.textContent = 'Stopped';
    });
    win.querySelector('#browserGo').addEventListener('click', () => navigate(urlInput.value));
    win.querySelector('#browserSearch').addEventListener('click', () => { urlInput.focus(); urlInput.select(); });
    win.querySelector('#browserFavorites').addEventListener('click', () => bookmarksBar.classList.toggle('ie-bookmarks-visible'));
    win.querySelector('#browserHistory').addEventListener('click', showHistoryMenu);

    urlInput.addEventListener('keydown', (e) => {
        e.stopPropagation();
        if (e.key === 'Enter') navigate(urlInput.value);
    });
    urlInput.addEventListener('focus', () => urlInput.select());

    eraSelect.addEventListener('change', () => setEra(eraSelect.value));

    win.querySelector('#ieNudgeGo').addEventListener('click', () => {
        setEra(era === 'live' ? preferredEra : era, false);
        if (current()) navigate(current(), { push: false });
    });
    win.querySelector('#ieNudgeTab').addEventListener('click', () => {
        if (current()) window.open(current(), '_blank', 'noopener,noreferrer');
    });
    win.querySelector('#ieNudgeClose').addEventListener('click', () => { nudge.hidden = true; });
    statusHint.addEventListener('click', () => {
        setEra(preferredEra, false);
        if (current()) navigate(current(), { push: false });
    });

    /* ---- links bar ---- */
    IE_BOOKMARKS.forEach(b => {
        const a = document.createElement('a');
        a.className = 'ie-bm-link';
        a.textContent = b.name;
        a.title = b.url;
        a.addEventListener('click', (e) => { e.preventDefault(); navigate(b.url); });
        bookmarksBar.appendChild(a);
    });

    function showHistoryMenu() {
        const r = win.querySelector('#browserHistory').getBoundingClientRect();
        const items = history.slice().reverse().slice(0, 15).map((h, i) => ({
            label: h === IE_HOME ? 'Home' : h,
            action: () => { const target = history.length - 1 - i; index = target; updateNav(); render(history[target]); }
        }));
        showContextMenu(r.left, r.bottom, items.length ? items : [{ label: '(empty)', disabled: true }]);
    }

    /* ---- messages from our own generated pages ---- */
    function onMessage(e) {
        // Our srcdoc pages run under a sandbox without allow-same-origin, so
        // their origin is opaque. A remote site can also obtain an opaque
        // origin by serving itself with `Content-Security-Policy: sandbox`,
        // so origin alone is not enough - we also require that the frame is
        // currently showing a page we generated.
        if (!showingLocalPage) return;
        if (e.source !== frame.contentWindow) return;
        if (e.origin !== 'null') return;
        const d = e.data;
        if (!d || d.xpBrowser !== 1) return;
        if (d.era) {
            if (!ieValidEra(d.era)) return;
            setEra(d.era, false);
            const landing = Object.prototype.hasOwnProperty.call(IE_ERA_LANDINGS, d.era)
                ? IE_ERA_LANDINGS[d.era] : 'http://www.yahoo.com';
            navigate(landing);
        }
        else if (d.search) navigate(d.search);
        else if (d.url) navigate(d.url);
    }
    window.addEventListener('message', onMessage);

    /* ---- menus ---- */
    setupMenubar(win, 'ie-menu-item', 'ie-dropdown');
    setupDropdownActions(win, 'ie-dropdown-item', {
        new: () => navigate(IE_HOME),
        open: () => { urlInput.focus(); urlInput.select(); },
        opentab: () => { if (current() && !isLocal(current())) window.open(current(), '_blank', 'noopener,noreferrer'); },
        properties: () => showPropertiesDialog(ieHostOf(current() || '') || 'Internet Explorer',
            'assets/internet-explorer-icon.png', [
                ['Address', current() || ''],
                ['Mode', era === 'live' ? 'Live web' : 'Internet Archive ' + era],
                ['Zone', era === 'live' ? 'Internet' : 'Internet Archive'],
                ['Search', (IE_SEARCH_ENGINES[engineKey] || {}).name || 'Google']
            ]),
        close: () => closeWindow(win),
        cut: () => showNotImplemented('Cut'),
        copy: () => showNotImplemented('Copy'),
        copyurl: () => {
            const v = current() || '';
            if (navigator.clipboard) navigator.clipboard.writeText(v).catch(() => {});
            statusText.textContent = 'Address copied';
        },
        find: () => { urlInput.focus(); urlInput.select(); },
        stop: () => stopBtn.click(),
        refresh: () => refreshBtn.click(),
        togglelinks: () => bookmarksBar.classList.toggle('ie-bookmarks-visible'),
        toggletime: () => eraBar.classList.toggle('hidden'),
        source: () => showNotImplemented('View Source'),
        addtofavorites: () => showNotImplemented('Add to Favorites'),
        organizefavorites: () => showNotImplemented('Organize Favorites'),
        links: () => bookmarksBar.classList.add('ie-bookmarks-visible'),
        searchengine: chooseSearchEngine,
        timemachine: () => { eraBar.classList.remove('hidden'); eraSelect.focus(); },
        history: showHistoryMenu,
        internetoptions: chooseSearchEngine,
        windowsupdate: () => navigate('https://web.archive.org/web/20010801000000if_/http://windowsupdate.microsoft.com/'),
        helpcontents: () => openHelpCenter(),
        whyblocked: explainBlocking,
        about: () => showInfoDialog('About Internet Explorer', 'assets/internet-explorer-icon.png',
            'Microsoft&reg; Internet Explorer<br>Version 6.0 (Portfolio Edition)<br><br>' +
            'Browses the live web where sites allow it, and the Internet Archive everywhere else.')
    });

    function chooseSearchEngine() {
        const dlg = showDialog({
            title: 'Internet Options',
            icon: 'assets/internet-explorer-icon.png',
            width: 380,
            bodyHtml: `<label class="xp-field"><span>Search using:</span>
                 <select class="ie-engine-pick">${Object.entries(IE_SEARCH_ENGINES)
                    .map(([k, v]) => `<option value="${k}" ${k === engineKey ? 'selected' : ''}>${escHtml(v.name)}</option>`)
                    .join('')}</select></label>
               <label class="xp-field"><span>Default era:</span>
                 <select class="ie-era-pick">
                   ${[['live', 'Today (live web)'], ['latest', 'Latest archived copy']]
                     .concat(IE_ERAS.map(y => [String(y), String(y)]))
                     .map(([v, label]) => `<option value="${v}" ${String(era) === v ? 'selected' : ''}>${escHtml(label)}</option>`)
                     .join('')}
                 </select></label>
               <p class="dp-hint">Only engines that allow being displayed in a frame are listed.
                  DuckDuckGo and Mojeek refuse, so they are not offered.</p>`,
            buttons: [
                { label: 'OK', primary: true, action: (el) => {
                    const nextEngine = el.querySelector('.ie-engine-pick').value;
                    const nextEra = el.querySelector('.ie-era-pick').value;
                    if (nextEngine !== engineKey) {
                        engineKey = nextEngine;
                        Store.set(IE_ENGINE_KEY, engineKey);
                        if (current() === IE_HOME) render(IE_HOME);
                    }
                    if (nextEra !== era) setEra(nextEra);
                }},
                { label: 'Cancel' }   // nothing was applied yet, so this really cancels
            ]
        });
    }

    function explainBlocking() {
        showInfoDialog('Why won\'t some pages load?', 'assets/internet-explorer-icon.png',
            'Most large sites send an <b>X-Frame-Options</b> or <b>Content-Security-Policy</b> header ' +
            'that forbids other pages from embedding them. Browsers enforce that and, by design, give ' +
            'scripts no way to even detect it &mdash; a refused page looks exactly like a blank one.<br><br>' +
            'That is why this browser ships a list of the sites that refuse, and offers the ' +
            '<b>Time Machine</b> instead: the Internet Archive serves its copies without those headers, ' +
            'so almost any site can still be read &mdash; as it looked in the year you pick.');
    }

    /* ---- keyboard ---- */
    function onKey(e) {
        if (!win.classList.contains('active-window')) return;
        if (document.activeElement === urlInput) return;
        const meta = e.ctrlKey || e.metaKey;
        if (e.key === 'F5' || (meta && e.key.toLowerCase() === 'r')) { e.preventDefault(); refreshBtn.click(); }
        else if (meta && e.key.toLowerCase() === 'l') { e.preventDefault(); urlInput.focus(); urlInput.select(); }
        else if (e.key === 'Escape') stopBtn.click();
        else if (e.altKey && e.key === 'ArrowLeft') { e.preventDefault(); backBtn.click(); }
        else if (e.altKey && e.key === 'ArrowRight') { e.preventDefault(); fwdBtn.click(); }
        else if (e.altKey && e.key.toLowerCase() === 'home') { e.preventDefault(); homeBtn.click(); }
    }
    document.addEventListener('keydown', onKey);

    addCleanup(win, () => {
        if (loadTimer) clearTimeout(loadTimer);
        document.removeEventListener('keydown', onKey);
        window.removeEventListener('message', onMessage);
    });

    // Let the rest of the desktop drive this window (Run box, shortcuts).
    win._browserGo = (addr) => navigate(addr);

    setEra(era, false);
    navigate(IE_HOME);
}

// Paint app now loads the full classic Windows Paint (all tools & menus)
// via an embedded iframe to https://jspaint.app/ - see iconContent.icon4.

// Notepad app
function setupNotepad(win, typewriter, initialText, boundFile) {
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

    // Menu bar dropdown behaviour (shared logic)
    setupMenubar(win, 'np-menu-item', 'np-dropdown');

    // Dropdown menu actions (File / Edit / Format / View / Help)
    setupDropdownActions(win, 'np-dropdown-item', {
        // File
        new: () => openNewNotepad(),
        open: () => openExplorer(VFS.DOCS),
        save: () => saveNotepad(false),
        saveas: () => saveNotepad(true),
        pagesetup: () => showNotImplemented('Page Setup'),
        print: () => showNotImplemented('Print'),
        printpreview: () => showNotImplemented('Print Preview'),
        exit: () => closeWindow(win),
        // Edit
        undo: () => { textarea.focus(); document.execCommand('undo'); },
        redo: () => { textarea.focus(); document.execCommand('redo'); },
        cut: () => { textarea.focus(); document.execCommand('cut'); },
        copy: () => { textarea.focus(); document.execCommand('copy'); },
        paste: () => { textarea.focus(); document.execCommand('paste'); },
        delete: () => { textarea.focus(); document.execCommand('delete'); },
        find: () => showNotImplemented('Find'),
        findnext: () => showNotImplemented('Find Next'),
        replace: () => showNotImplemented('Replace'),
        gotoline: () => showNotImplemented('Go To'),
        selectall: () => { textarea.focus(); textarea.select(); },
        'time/date': () => {
            const now = new Date();
            const stamp = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) +
                ' ' + now.toLocaleDateString();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            textarea.value = textarea.value.slice(0, start) + stamp + textarea.value.slice(end);
            const newPos = start + stamp.length;
            textarea.focus();
            textarea.setSelectionRange(newPos, newPos);
        },
        // Format
        wordwrap: () => {
            textarea.style.wordWrap = textarea.style.wordWrap === 'break-word' ? 'normal' : 'break-word';
        },
        font: () => showNotImplemented('Font'),
        // View
        statusbar: () => showNotImplemented('Status Bar'),
        // Help
        helpcontents: () => showNotImplemented('Help Contents'),
        helptutorial: () => showNotImplemented('Help Tutorial'),
        about: () => showInfoDialog('About Notepad', 'assets/notepad-icon.png',
            'Notepad<br><br>Part of the Windows XP Portfolio desktop recreation.')
    });

    // Save the buffer back into the file system (Save As prompts for a name).
    function saveNotepad(askForName) {
        const titleEl = win.querySelector('.popup-title');
        if (!askForName && boundFile && VFS.get(boundFile.path)) {
            VFS.writeFile(boundFile.path, textarea.value);
            refreshExplorerWindows();
            notify({ title: 'Notepad', text: `${boundFile.name} saved.`,
                     icon: 'assets/notepad-icon.png', timeout: 2600 });
            return;
        }
        const suggested = boundFile ? boundFile.name : 'Untitled.txt';
        const dlg = showDialog({
            title: 'Save As', icon: 'assets/notepad-icon.png', width: 380,
            bodyHtml: `<label class="xp-field"><span>File name:</span>
                         <input class="np-saveas" type="text" value="${escAttr(suggested)}" spellcheck="false"></label>
                       <p class="dp-hint">Saved into My Documents.</p>`,
            buttons: [
                { label: 'Save', primary: true, action: (el) => {
                    let name = el.querySelector('.np-saveas').value.trim() || 'Untitled.txt';
                    if (!/\.[A-Za-z0-9]+$/.test(name)) name += '.txt';
                    const node = VFS.add(VFS.DOCS, VFS.file(name, {
                        kind: 'text', icon: 'assets/notepad-icon.png', content: textarea.value
                    }));
                    if (node) {
                        boundFile = { path: VFS.join(VFS.DOCS, node.name), name: node.name };
                        if (titleEl) titleEl.textContent = node.name + ' - Notepad';
                        refreshExplorerWindows();
                        notify({ title: 'Notepad', text: `${node.name} saved to My Documents.`,
                                 icon: 'assets/notepad-icon.png', timeout: 3000 });
                    }
                }},
                { label: 'Cancel' }
            ]
        });
        setTimeout(() => {
            const input = dlg.el.querySelector('.np-saveas');
            if (input) { input.focus(); input.select(); }
        }, 40);
    }

    // Ctrl+S saves without touching the menu
    const onSaveKey = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && win.classList.contains('active-window')) {
            e.preventDefault();
            saveNotepad(false);
        }
    };
    document.addEventListener('keydown', onSaveKey);
    addCleanup(win, () => document.removeEventListener('keydown', onSaveKey));
}

// Paint app - handles menu functionality for the Paint application
function setupPaint(win) {
    // Menu bar dropdown behaviour (shared logic)
    setupMenubar(win, 'paint-menu-item', 'paint-dropdown');

    // Dropdown menu actions (File / Edit / Image / Colors / Help)
    setupDropdownActions(win, 'paint-dropdown-item', {
        // File
        new: () => showNotImplemented('New'),
        open: () => showNotImplemented('Open'),
        save: () => showNotImplemented('Save'),
        saveas: () => showNotImplemented('Save As'),
        printsetup: () => showNotImplemented('Print Setup'),
        print: () => showNotImplemented('Print'),
        exit: () => closeWindow(win),
        // Edit
        undo: () => showNotImplemented('Undo'),
        redo: () => showNotImplemented('Redo'),
        cut: () => showNotImplemented('Cut'),
        copy: () => showNotImplemented('Copy'),
        paste: () => showNotImplemented('Paste'),
        pastetransparent: () => showNotImplemented('Paste Transparent'),
        selectall: () => showNotImplemented('Select All'),
        invertselection: () => showNotImplemented('Invert Selection'),
        // Image
        fliprotate: () => showNotImplemented('Flip/Rotate'),
        stretchandskew: () => showNotImplemented('Stretch and Skew'),
        invertcolors: () => showNotImplemented('Invert Colors'),
        attributes: () => showNotImplemented('Attributes'),
        clearimage: () => showNotImplemented('Clear Image'),
        drawopaque: () => showNotImplemented('Draw Opaque'),
        // Colors
        editcolors: () => showNotImplemented('Edit Colors'),
        // Help
        viewhelp: () => showNotImplemented('Help'),
        about: () => showInfoDialog('About Paint', 'assets/paint-icon.png',
            'Paint<br><br>Part of the Windows XP Portfolio desktop recreation.')
    });
}

// Snake game - a small playable app window.
function setupSnake(win) {
    const canvas = win.querySelector('.snake-canvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = win.querySelector('.snake-score');
    const bestEl = win.querySelector('.snake-best');
    const overlay = win.querySelector('.snake-overlay');
    const msgEl = win.querySelector('.snake-msg');
    const diffSelect = win.querySelector('.snake-diff');

    const COLS = 20;
    const ROWS = 20;
    const CELL = canvas.width / COLS;
    const BEST_KEY = 'xpSnakeBest';
    const UNLOCK_KEY = 'xpSnakeHardDone';

    // Difficulty = snake speed (ms per tick). Lower = faster.
    const SPEEDS = { easy: 180, medium: 120, hard: 80, extreme: 55 };
    const DIFF_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard', extreme: 'Extreme' };

    let snake = [];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let food = null;
    let score = 0;
    let appleCount = 0; // apples eaten this round (every 10th spawns a big apple)
    let best = parseInt(localStorage.getItem(BEST_KEY) || '0', 10) || 0;
    let running = false;
    let paused = false;
    let gameOver = false;
    let timer = null;
    let difficulty = 'medium';

    function isHardDone() {
        return localStorage.getItem(UNLOCK_KEY) === '1';
    }
    function getSpeed() { return SPEEDS[difficulty]; }

    // Enable/refresh the Extreme option based on the Hard unlock flag
    function refreshDifficultyOptions() {
        const extremeOpt = diffSelect.querySelector('option[value="extreme"]');
        if (extremeOpt) {
            extremeOpt.disabled = !isHardDone();
            extremeOpt.textContent = isHardDone() ? 'Extreme' : 'Locked: Extreme';
        }
    }

    bestEl.textContent = 'Best: ' + best;

    function randomFood() {
        const taken = new Set(snake.map(s => s.x + ',' + s.y));
        const free = [];
        for (let x = 0; x < COLS; x++) {
            for (let y = 0; y < ROWS; y++) {
                if (!taken.has(x + ',' + y)) free.push({ x, y });
            }
        }
        if (!free.length) return null;
        const cell = free[Math.floor(Math.random() * free.length)];
        // Every 10th apple is a big golden apple worth +3
        // (the 10th, 20th, 30th... apple the player eats)
        return { x: cell.x, y: cell.y, big: (appleCount + 1) % 10 === 0 };
    }

    function reset() {
        stopTimer();
        snake = [{ x: 5, y: 10 }, { x: 4, y: 10 }, { x: 3, y: 10 }];
        dir = { x: 1, y: 0 };
        nextDir = { x: 1, y: 0 };
        score = 0;
        appleCount = 0;
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
        timer = setInterval(tick, getSpeed());
        setPauseBtn();
        draw();
    }

    function pause() {
        if (!running || gameOver) return;
        paused = !paused;
        if (paused) stopTimer();
        else timer = setInterval(tick, getSpeed());
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
            const gained = food.big ? 3 : 1;
            score += gained;
            appleCount++;
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
        if (won && difficulty === 'hard' && !isHardDone()) {
            // Completing Hard mode unlocks Extreme
            localStorage.setItem(UNLOCK_KEY, '1');
            refreshDifficultyOptions();
            msgEl.textContent = 'You win! Max length reached! Hard complete — Extreme unlocked! 🔓';
        } else {
            msgEl.textContent = won ? 'You win! Max length reached!' : 'Game Over';
        }
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
            if (food.big) {
                // Big golden apple worth +3
                const r = CELL * 0.6;
                ctx.fillStyle = 'rgba(255, 200, 60, 0.3)';
                ctx.beginPath(); ctx.arc(cx, cy, r + 4, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#ffb020';
                ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#e08c00';
                ctx.beginPath(); ctx.arc(cx + r * 0.25, cy - r * 0.25, r * 0.35, 0, Math.PI * 2); ctx.fill();
                // Leaf
                ctx.fillStyle = '#7dbf4a';
                ctx.fillRect(cx - 3, cy - r - 4, 6, 7);
                // +3 badge
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 9px Tahoma, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('+3', cx, cy + 1);
            } else {
                // Normal red apple worth +1
                ctx.fillStyle = '#e23b2e';
                ctx.beginPath(); ctx.arc(cx, cy, CELL / 2 - 2, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#7dbf4a';
                ctx.fillRect(cx - 2, cy - CELL / 2 - 3, 4, 5);
            }
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

    // Keyboard -> direction mapping (arrows + WASD)
    const KEY_DIRS = {
        arrowup: 'up', w: 'up',
        arrowdown: 'down', s: 'down',
        arrowleft: 'left', a: 'left',
        arrowright: 'right', d: 'right'
    };
    const heldKeys = new Set(); // keys currently held down

    function getDpadBtn(dir) {
        return win.querySelector(`.snake-dpad-btn[data-dir="${dir}"]`);
    }

    // Highlight / un-highlight a D-pad button
    function highlightDir(dir, on) {
        const btn = getDpadBtn(dir);
        if (btn) btn.classList.toggle('pressed', on);
    }

    function onKey(e) {
        if (!win.classList.contains('active-window')) return;
        const k = e.key.toLowerCase();
        if (KEY_DIRS[k]) {
            e.preventDefault();
            heldKeys.add(k);
            highlightDir(KEY_DIRS[k], true);
            const dir = KEY_DIRS[k];
            steer({ up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } }[dir]);
        } else if (k === 'p') {
            pause();
        }
    }

    function onKeyUp(e) {
        if (!win.classList.contains('active-window')) return;
        const k = e.key.toLowerCase();
        if (KEY_DIRS[k]) {
            heldKeys.delete(k);
            const dir = KEY_DIRS[k];
            // Only un-highlight if no other held key points in the same direction
            const stillHeld = [...heldKeys].some(kk => KEY_DIRS[kk] === dir);
            if (!stillHeld) highlightDir(dir, false);
        }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('keyup', onKeyUp);

    win.querySelectorAll('.snake-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (action === 'start') start();
            else if (action === 'pause') pause();
            else if (action === 'restart') reset();
        });
    });

    // Difficulty selector: change snake speed (resets the board)
    diffSelect.addEventListener('change', () => {
        difficulty = diffSelect.value;
        reset();
    });

    // On-screen D-pad for touch devices (with real-time press highlight)
    const DPAD_DIRS = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } };
    win.querySelectorAll('.snake-dpad-btn').forEach(btn => {
        const d = DPAD_DIRS[btn.dataset.dir];
        const steerBtn = (ev) => { ev.preventDefault(); steer(d); };
        const hlOn = () => btn.classList.add('pressed');
        const hlOff = () => btn.classList.remove('pressed');
        // Touch: highlight while the finger is down
        btn.addEventListener('touchstart', (e) => { hlOn(); steerBtn(e); }, { passive: false });
        btn.addEventListener('touchend', hlOff);
        btn.addEventListener('touchcancel', hlOff);
        // Mouse: highlight while the button is held
        btn.addEventListener('mousedown', hlOn);
        btn.addEventListener('mouseup', hlOff);
        btn.addEventListener('mouseleave', hlOff);
        btn.addEventListener('click', steerBtn);
    });

    // Initialize difficulty state (persist the chosen difficulty per session)
    difficulty = diffSelect.value || 'medium';
    refreshDifficultyOptions();
    reset();

    // Stop the game loop and release keys when the window closes
    addCleanup(win, () => {
        stopTimer();
        document.removeEventListener('keydown', onKey);
        document.removeEventListener('keyup', onKeyUp);
        // Clear any stuck D-pad highlight
        ['up', 'down', 'left', 'right'].forEach(dir => highlightDir(dir, false));
    });
}

// ---- Outlook Express mailbox ----
function openMailCompose(prefill = {}) {
    const fakeIcon = document.createElement('div');
    fakeIcon.className = 'icon';
    fakeIcon.id = 'mail-compose';
    fakeIcon._mailPrefill = prefill;
    openWindow(fakeIcon);
}

function openMailRead(message) {
    const fakeIcon = document.createElement('div');
    fakeIcon.className = 'icon';
    fakeIcon.id = 'mail-read';
    fakeIcon._mailMessage = message;
    openWindow(fakeIcon);
}

// Small XP-style informational dialog (reuses the properties-dialog chrome)
function showInfoDialog(title, iconSrc, messageHtml) {
    document.querySelectorAll('.props-dialog').forEach(d => d.remove());
    const dlg = document.createElement('div');
    dlg.className = 'props-dialog';
    dlg.innerHTML = `
        <div class="popup-header">
            <img class="popup-icon" src="${iconSrc}" alt="" draggable="false">
            <span class="popup-title">${title}</span>
            <div class="popup-controls">
                <button class="win-btn win-btn-close info-close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="props-dialog-body">
            <img src="${iconSrc}" alt="">
            <div>
                <p style="font-size:11px;color:#000;margin:0;line-height:1.5;">${messageHtml}</p>
            </div>
        </div>
        <div class="props-dialog-buttons">
            <button class="props-dialog-ok info-ok">OK</button>
        </div>
    `;
    document.body.appendChild(dlg);
    const rect = dlg.getBoundingClientRect();
    dlg.style.left = Math.max(0, (window.innerWidth - rect.width) / 2) + 'px';
    dlg.style.top = Math.max(0, (window.innerHeight - rect.height) / 2) + 'px';
    const close = () => dlg.remove();
    dlg.querySelector('.info-close').addEventListener('click', close);
    dlg.querySelector('.info-ok').addEventListener('click', close);
}

// ── Command Prompt (cmd.exe) ──
function setupTerminal(win) {
    const outputEl = win.querySelector('#cmdOutput');
    const inputEl = win.querySelector('#cmdInput');
    const promptEl = win.querySelector('#cmdPrompt');

    let cwd = 'C:\\Users\\Marco';
    let cmdHistory = [];
    let historyIdx = -1;

    // Available commands
    const commands = {
        help: {
            desc: 'Shows this help list.',
            fn: () => {
                const list = Object.entries(commands)
                    .map(([name, c]) => `  <span class="cmd-cmd">${name.padEnd(12)}</span> ${c.desc}`)
                    .join('\n');
                return { html: `Available commands:\n${list}\n\nType a command followed by /? for usage info.` };
            }
        },
        dir: {
            desc: 'Lists files and folders in the current directory.',
            fn: () => {
                const now = new Date();
                const pad = n => String(n).padStart(2, '0');
                const h = now.getHours(), m = now.getMinutes();
                const ampm = h >= 12 ? 'PM' : 'AM';
                const h12 = h % 12 || 12;
                const timeStr = `${pad(h12)}:${pad(m)} ${ampm}`;
                const dateStr = `${pad(now.getMonth()+1)}/${pad(now.getDate())}/${now.getFullYear()}`;
                return { html: ` Volume in drive C has no label.\n Volume Serial Number is 7C2A-1F8E\n\n Directory of ${escHtml(cwd)}\n\n`
                    + `${dateStr}  ${timeStr}    <span class="cmd-dir">.</span>\n`
                    + `${dateStr}  ${timeStr}    <span class="cmd-dir">..</span>\n`
                    + `${dateStr}  ${timeStr}    <span class="cmd-dir">Desktop</span>\n`
                    + `${dateStr}  ${timeStr}    <span class="cmd-dir">Documents</span>\n`
                    + `${dateStr}  ${timeStr}    <span class="cmd-dir">Downloads</span>\n`
                    + `${dateStr}  ${timeStr}    <span class="cmd-dir">Pictures</span>\n`
                    + `${dateStr}  ${timeStr}             2,048 readme.txt\n`
                    + `${dateStr}  ${timeStr}               512 config.sys\n`
                    + `               8 File(s)              2,560 bytes\n`
                    + `               5 Dir(s)  127,482,953,728 bytes free` };
            }
        },
        cls: {
            desc: 'Clears the screen.',
            fn: () => { outputEl.innerHTML = ''; return ''; }
        },
        echo: {
            desc: 'Displays a message.',
            fn: (args) => args || 'ECHO is on.'
        },
        date: {
            desc: 'Displays or sets the date.',
            fn: () => {
                const d = new Date();
                return `The current date is: ${d.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}`;
            }
        },
        time: {
            desc: 'Displays or sets the time.',
            fn: () => {
                const d = new Date();
                return `The current time is: ${d.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true })}`;
            }
        },
        ver: {
            desc: 'Displays the Windows version.',
            fn: () => `\nMicrosoft Windows XP [Version 5.1.2600]\n`
        },
        whoami: {
            desc: 'Displays the current user name.',
            fn: () => `marco-pc\\Marco`
        },
        cd: {
            desc: 'Changes the current directory.',
            fn: (args) => {
                if (!args || args === '..') {
                    const parts = cwd.split('\\');
                    if (parts.length > 1) {
                        parts.pop();
                        cwd = parts.join('\\');
                    }
                    return '';
                }
                cwd = cwd + '\\' + args;
                return '';
            }
        },
        title: {
            desc: 'Sets the window title.',
            fn: (args) => {
                if (args) {
                    const titleEl = win.querySelector('.popup-title');
                    if (titleEl) titleEl.textContent = args;
                }
                return '';
            }
        },
        color: {
            desc: 'Sets the console colors. Usage: color [bg][fg] (e.g. color 0a)',
            fn: (args) => {
                const colors = {
                    '0': '#000000', '1': '#000080', '2': '#008000', '3': '#008080',
                    '4': '#800000', '5': '#800080', '6': '#808000', '7': '#c0c0c0',
                    '8': '#808080', '9': '#0000ff', 'a': '#00ff00', 'b': '#00ffff',
                    'c': '#ff0000', 'd': '#ff00ff', 'e': '#ffff00', 'f': '#ffffff'
                };
                if (!args || args.length < 2) return 'Usage: color [bg][fg]\n  0=Black  1=Blue  2=Green  3=Aqua  4=Red  5=Purple  6=Yellow  7=White\n  8=Gray  9=Lt Blue  A=Lt Green  B=Lt Aqua  C=Lt Red  D=Lt Purple  E=Lt Yellow  F=Bright White';
                const bg = colors[args[0].toLowerCase()];
                const fg = colors[args[1].toLowerCase()];
                if (!bg || !fg) return 'Invalid color code.';
                outputEl.style.backgroundColor = bg;
                outputEl.style.color = fg;
                return '';
            }
        },
        ping: {
            desc: 'Pings a host. Usage: ping [host]',
            fn: (args) => {
                if (!args) return 'Usage: ping [host]';
                const host = args.split(' ')[0];
                const times = [12, 14, 11, 13];
                let out = `\nPinging ${host} [192.168.1.${Math.floor(Math.random()*254)+1}] with 32 bytes of data:\n\n`;
                for (let i = 0; i < 4; i++) {
                    out += `Reply from 192.168.1.1: bytes=32 time=${times[i]}ms TTL=128\n`;
                }
                out += `\nPing statistics for 192.168.1.1:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),\n`;
                out += `Approximate round trip times in milli-seconds:\n    Minimum = 11ms, Maximum = 14ms, Average = 12ms\n`;
                return out;
            }
        },
        ipconfig: {
            desc: 'Displays network configuration.',
            fn: () => `\nWindows IP Configuration\n\nEthernet adapter Local Area Connection:\n\n   Connection-specific DNS Suffix  . : home\n   IP Address. . . . . . . . . . . . : 192.168.1.42\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . : 192.168.1.1\n`
        },
        tree: {
            desc: 'Displays the directory structure.',
            fn: () => `Folder PATH listing for volume SYSTEM\nVolume serial number is 7C2A-1F8E\n${cwd.toUpperCase()}\n├───Desktop\n│   ├───Projects\n│   └───Shortcuts\n├───Documents\n│   ├───Notes\n│   └───Resume\n├───Downloads\n├───Music\n└───Pictures\n    ├───Screenshots\n    └───Wallpapers\n`
        },
        mem: {
            desc: 'Displays memory usage.',
            fn: () => `\n    655360 bytes total conventional memory\n    655360 bytes available to MS-DOS\n    598336 largest executable program size\n\n   1048576 bytes total contiguous extended memory\n         0 bytes available contiguous extended memory\n    941056 bytes available XMS memory\n           MS-DOS resident in High Memory Area\n`
        },
        netstat: {
            desc: 'Displays active network connections.',
            fn: () => `\nActive Connections\n\n  Proto  Local Address          Foreign Address        State\n  TCP    192.168.1.42:2869     151.101.1.69:https     ESTABLISHED\n  TCP    192.168.1.42:49321    140.82.114.4:https     ESTABLISHED\n  TCP    192.168.1.42:52017    13.107.42.14:https     TIME_WAIT\n`
        },
        exit: {
            desc: 'Closes the Command Prompt.',
            fn: () => { closeWindow(win); return ''; }
        }
    };

    // Commands return either a plain string (escaped) or { html } for the few
    // that colourise their own output (dir, help). Never inject raw user text.
    function print(result) {
        if (!result) return;
        const html = (typeof result === 'object' && result.html != null)
            ? String(result.html)
            : escHtml(String(result));
        const line = document.createElement('div');
        line.className = 'cmd-line';
        line.innerHTML = html.replace(/\n/g, '<br>').replace(/ {2}/g, '&nbsp;&nbsp;');
        outputEl.appendChild(line);
        outputEl.scrollTop = outputEl.scrollHeight;
    }

    function printPrompt() {
        const line = document.createElement('div');
        line.className = 'cmd-line';
        line.innerHTML = `<span class="cmd-prompt-echo">${escHtml(cwd)}&gt;</span>`;
        outputEl.appendChild(line);
        outputEl.scrollTop = outputEl.scrollHeight;
    }

    function execute(cmdLine) {
        const trimmed = cmdLine.trim();
        if (!trimmed) { printPrompt(); return; }

        const parts = trimmed.match(/(?:[^\s"]+|"[^"]*")+/g) || [trimmed];
        const cmdName = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ').replace(/^"|"$/g, '');

        const cmd = commands[cmdName];
        if (cmd) {
            const result = cmd.fn(args);
            if (result) print(result);
        } else {
            print(`'${cmdName}' is not recognized as an internal or external command,\noperable program or batch file.`);
        }
        if (cmdName !== 'cls') printPrompt();
    }

    function updatePrompt() {
        promptEl.textContent = cwd + '>';
    }

    // Initial welcome message
    print('Microsoft Windows XP [Version 5.1.2600]');
    print('(C) Copyright 1985-2001 Microsoft Corp.');
    print('');
    updatePrompt();
    printPrompt();

    // Handle input
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmdText = inputEl.value;
            // Echo the command
            const echoLine = document.createElement('div');
            echoLine.className = 'cmd-line';
            echoLine.innerHTML = `<span class="cmd-prompt-echo">${escHtml(cwd)}&gt;</span> ${escHtml(cmdText)}`;
            outputEl.appendChild(echoLine);

            inputEl.value = '';
            cmdHistory.push(cmdText);
            historyIdx = cmdHistory.length;
            execute(cmdText);
            updatePrompt();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIdx > 0) {
                historyIdx--;
                inputEl.value = cmdHistory[historyIdx];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx < cmdHistory.length - 1) {
                historyIdx++;
                inputEl.value = cmdHistory[historyIdx];
            } else {
                historyIdx = cmdHistory.length;
                inputEl.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const val = inputEl.value.toLowerCase();
            const matches = Object.keys(commands).filter(c => c.startsWith(val));
            if (matches.length === 1) {
                inputEl.value = matches[0];
            } else if (matches.length > 1) {
                print(matches.join('   '));
                printPrompt();
            }
        }
    });

    // Keep input focused
    inputEl.addEventListener('blur', () => {
        setTimeout(() => {
            if (document.contains(inputEl) && win.classList.contains('active-window')) {
                inputEl.focus();
            }
        }, 50);
    });

    // Click anywhere in the output area to focus input
    outputEl.addEventListener('click', () => inputEl.focus());

    // Focus input when window becomes active
    const observer = new MutationObserver(() => {
        if (win.classList.contains('active-window')) {
            inputEl.focus();
        }
    });
    observer.observe(win, { attributes: true, attributeFilter: ['class'] });

    // Initial focus
    setTimeout(() => inputEl.focus(), 100);

    // Cleanup
    addCleanup(win, () => observer.disconnect());
}

// ── Minesweeper ──
function setupMinesweeper(win) {
    const ROWS = 9, COLS = 9, MINES = 10;
    const CELL = 32;
    const boardEl = win.querySelector('#msBoard');
    const mineCountEl = win.querySelector('#msMineCount');
    const timerEl = win.querySelector('#msTimer');
    const faceEl = win.querySelector('#msFace');

    let grid = [];        // 2D array of { mine, revealed, flagged, adjacent }
    let firstClick = true;
    let alive = true;
    let flagCount = 0;
    let revealedCount = 0;
    let timerSec = 0;
    let timerInterval = null;

    function initGrid() {
        grid = [];
        for (let r = 0; r < ROWS; r++) {
            grid[r] = [];
            for (let c = 0; c < COLS; c++) {
                grid[r][c] = { mine: false, revealed: false, flagged: false, adjacent: 0 };
            }
        }
        firstClick = true;
        alive = true;
        flagCount = 0;
        revealedCount = 0;
        timerSec = 0;
        stopTimer();
        updateDisplay();
        faceEl.textContent = '\uD83D\uDE0A';
        boardEl.classList.remove('ms-gameover');
    }

    function plantMines(safeR, safeC) {
        const safe = new Set([safeR + ',' + safeC]);
        // Also protect the 8 neighbours of the first click
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                safe.add((safeR + dr) + ',' + (safeC + dc));
            }
        }
        let planted = 0;
        while (planted < MINES) {
            const r = Math.floor(Math.random() * ROWS);
            const c = Math.floor(Math.random() * COLS);
            const key = r + ',' + c;
            if (!safe.has(key) && !grid[r][c].mine) {
                grid[r][c].mine = true;
                planted++;
            }
        }
        // Compute adjacent mine counts
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c].mine) continue;
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc].mine) count++;
                    }
                }
                grid[r][c].adjacent = count;
            }
        }
    }

    function reveal(r, c) {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
        const cell = grid[r][c];
        if (cell.revealed || cell.flagged || !alive) return;
        cell.revealed = true;
        revealedCount++;
        if (cell.mine) { endGame(false); return; }
        if (cell.adjacent === 0) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr || dc) reveal(r + dr, c + dc);
                }
            }
        }
        if (revealedCount === ROWS * COLS - MINES) endGame(true);
    }

    function endGame(won) {
        alive = false;
        stopTimer();
        faceEl.textContent = won ? '\uD83D\uDE0E' : '\uD83D\uDE35';
        boardEl.classList.toggle('ms-gameover', !won);
        // Reveal all mines
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c].mine) grid[r][c].revealed = true;
            }
        }
        render();
    }

    function toggleFlag(r, c) {
        if (!alive || grid[r][c].revealed) return;
        grid[r][c].flagged = !grid[r][c].flagged;
        flagCount += grid[r][c].flagged ? 1 : -1;
        updateDisplay();
        render();
    }

    function chord(r, c) {
        if (!alive || !grid[r][c].revealed || grid[r][c].adjacent === 0) return;
        let flags = 0;
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc].flagged) flags++;
            }
        }
        if (flags === grid[r][c].adjacent) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr || dc) reveal(r + dr, c + dc);
                }
            }
        }
    }

    function startTimer() {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            timerSec++;
            updateDisplay();
        }, 1000);
    }
    function stopTimer() { clearInterval(timerInterval); timerInterval = null; }
    function updateDisplay() {
        mineCountEl.textContent = String(Math.max(0, MINES - flagCount)).padStart(3, '0');
        timerEl.textContent = String(Math.min(999, timerSec)).padStart(3, '0');
    }

    function render() {
        boardEl.style.gridTemplateColumns = `repeat(${COLS}, ${CELL}px)`;
        boardEl.style.gridTemplateRows = `repeat(${ROWS}, ${CELL}px)`;
        let html = '';
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const cell = grid[r][c];
                let cls = 'ms-cell';
                let content = '';
                if (cell.revealed) {
                    cls += ' ms-revealed';
                    if (cell.mine) {
                        cls += ' ms-mine';
                        content = '\uD83D\uDCA3';
                    } else if (cell.adjacent > 0) {
                        cls += ' ms-n' + cell.adjacent;
                        content = cell.adjacent;
                    }
                } else if (cell.flagged) {
                    cls += ' ms-flagged';
                    content = '\uD83D\uDEA9';
                }
                html += `<div class="${cls}" data-r="${r}" data-c="${c}">${content}</div>`;
            }
        }
        boardEl.innerHTML = html;
    }

    boardEl.addEventListener('click', (e) => {
        const cellEl = e.target.closest('.ms-cell');
        if (!cellEl || !alive) return;
        const r = +cellEl.dataset.r, c = +cellEl.dataset.c;
        if (grid[r][c].flagged) return;
        if (firstClick) {
            plantMines(r, c);
            startTimer();
            firstClick = false;
        }
        if (grid[r][c].revealed && grid[r][c].adjacent > 0) { chord(r, c); }
        else { reveal(r, c); }
        render();
    });

    boardEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const cellEl = e.target.closest('.ms-cell');
        if (!cellEl || !alive) return;
        const r = +cellEl.dataset.r, c = +cellEl.dataset.c;
        toggleFlag(r, c);
    });

    // Long-press to flag on touch
    let lpTimer = null;
    boardEl.addEventListener('touchstart', (e) => {
        const cellEl = e.target.closest('.ms-cell');
        if (!cellEl || !alive) return;
        lpTimer = setTimeout(() => {
            lpTimer = null;
            const r = +cellEl.dataset.r, c = +cellEl.dataset.c;
            toggleFlag(r, c);
        }, 400);
    }, { passive: true });
    boardEl.addEventListener('touchend', () => { clearTimeout(lpTimer); lpTimer = null; });
    boardEl.addEventListener('touchmove', () => { clearTimeout(lpTimer); lpTimer = null; });

    faceEl.addEventListener('click', () => initGrid());

    // Cleanup
    addCleanup(win, stopTimer);

    initGrid();
    render();
}

// ── Blog ──
// Blog posts live directly in the code: edit this array to publish a post.
// Every visitor sees exactly these posts (dates shown as-is).
// To add a post: copy one of the entries, change the id/title/content/date.
const BLOG_POSTS = [
    {
        id: 'welcome',
        title: 'Welcome to My Blog!',
        content: "Hey there! 👋\n\nWelcome to my corner of the internet. This is my personal blog where I'll be sharing thoughts, projects, and whatever else I find interesting.\n\nStay tuned for more posts — I'll be updating this regularly.\n\n— Marco",
        date: '2026-08-06'
    },
    {
        id: 'ai-and-addiction',
        title: 'AI and Addiction',
        content: "I've been thinking a lot lately about AI and addiction.\n\nIt's strange how something designed to help can also be so easy to get hooked on. The endless feed, the instant answers, the feeling that there's always one more thing to ask or one more scroll to make.\n\nI don't think AI itself is the problem — it's how easily it fits into the habits we already have. The same dopamine loop as social media, just smarter about keeping our attention.\n\nI want to write more about this soon. For now, I think the important thing is being honest with ourselves about how much time we spend with it, and asking whether it's serving us or we're serving it.\n\n— Marco",
        date: '2026-08-07'
    }
];

// Legacy key used by the old admin editor: any posts you created there are
// still in localStorage and get merged in below so nothing is lost.
const BLOG_STORAGE_KEY = 'xpBlogPosts';

function loadBlogPosts() {
    const codePosts = [...BLOG_POSTS];
    // Merge in posts saved by the old admin editor so previously published
    // posts keep showing up. Code-defined posts win on id conflicts.
    try {
        const raw = localStorage.getItem(BLOG_STORAGE_KEY);
        if (raw) {
            const stored = JSON.parse(raw);
            if (Array.isArray(stored)) {
                const codeIds = new Set(codePosts.map(p => p.id));
                const codeTitles = new Set(codePosts.map(p => p.title));
                for (const p of stored) {
                    // Skip posts that duplicate a code post (same id or same title,
                    // e.g. the old "Welcome to My Blog!" seed)
                    if (p && p.id && !codeIds.has(p.id) && !codeTitles.has(p.title)) {
                        codePosts.push(p);
                        codeIds.add(p.id);
                        codeTitles.add(p.title);
                    }
                }
            }
        }
    } catch (e) { /* corrupted or inaccessible — ignore */ }
    return codePosts;
}

const BLOG_LIKES_KEY = 'xpBlogLikes';
const BLOG_LIKED_KEY = 'xpBlogLikedPosts';

function loadLikes() {
    try {
        const raw = localStorage.getItem(BLOG_LIKES_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
}

function saveLikes(likes) {
    try {
        localStorage.setItem(BLOG_LIKES_KEY, JSON.stringify(likes));
    } catch (e) { /* silently fail */ }
}

function loadLikedPosts() {
    try {
        const raw = localStorage.getItem(BLOG_LIKED_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
}

function saveLikedPosts(liked) {
    try {
        localStorage.setItem(BLOG_LIKED_KEY, JSON.stringify(liked));
    } catch (e) { /* silently fail */ }
}

function formatBlogDate(isoString) {
    const d = new Date(isoString);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function setupBlog(win) {
    const postList = win.querySelector('#blogPostList');
    const mainArea = win.querySelector('#blogMain');
    const statusBar = win.querySelector('#blogStatusbar');

    const posts = loadBlogPosts();
    let likes = loadLikes();
    let likedPosts = loadLikedPosts();
    let selectedPostId = null;

    function refresh() {
        renderPostList();
        updateStatus();
    }

    function renderPostList() {
        const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        const likeCounts = loadLikes();
        postList.innerHTML = sorted.map(p => {
            const count = likeCounts[p.id] || 0;
            return `
            <div class="blog-post-item" data-id="${escHtml(p.id)}">
                <span class="blog-post-item-title">${escHtml(p.title)}</span>
                <span class="blog-post-item-meta">
                    <span class="blog-post-item-date">${formatBlogDate(p.date)}</span>
                    <span class="blog-post-item-likes">${count > 0 ? '❤️ ' + count : ''}</span>
                </span>
            </div>`;
        }).join('') || '<div class="blog-empty">No posts yet.</div>';

        postList.querySelectorAll('.blog-post-item').forEach(item => {
            item.addEventListener('click', () => showPost(item.dataset.id));
        });
    }

    function showPost(id) {
        const post = posts.find(p => p.id === id);
        if (!post) return;
        selectedPostId = id;

        postList.querySelectorAll('.blog-post-item').forEach(i => i.classList.remove('active'));
        const activeItem = postList.querySelector(`[data-id="${id}"]`);
        if (activeItem) activeItem.classList.add('active');

        likes = loadLikes();
        likedPosts = loadLikedPosts();
        const likeCount = likes[id] || 0;
        const hasLiked = likedPosts.includes(id);

        mainArea.innerHTML = `
            <div class="blog-post-view">
                <div class="blog-post-header">
                    <h2 class="blog-post-title">${escHtml(post.title)}</h2>
                    <span class="blog-post-date">${formatBlogDate(post.date)}</span>
                </div>
                <div class="blog-post-content">${escHtmlWithBreaks(post.content)}</div>
                <div class="blog-post-footer">
                    <div class="blog-like-area">
                        <button class="blog-like-btn ${hasLiked ? 'blog-liked' : ''}" data-action="like" data-id="${escHtml(id)}">
                            ${hasLiked ? '❤️' : '🤍'} <span class="blog-like-count">${likeCount}</span> Like${likeCount !== 1 ? 's' : ''}
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Like button
        mainArea.querySelector('[data-action="like"]')?.addEventListener('click', () => toggleLike(id));
    }

    function toggleLike(id) {
        likedPosts = loadLikedPosts();
        likes = loadLikes();

        if (likedPosts.includes(id)) {
            // Unlike
            likedPosts = likedPosts.filter(pid => pid !== id);
            likes[id] = Math.max(0, (likes[id] || 1) - 1);
        } else {
            // Like
            likedPosts.push(id);
            likes[id] = (likes[id] || 0) + 1;
        }

        saveLikes(likes);
        saveLikedPosts(likedPosts);
        showPost(id);
        renderPostList();
    }

    function updateStatus() {
        statusBar.textContent = `${posts.length} post${posts.length === 1 ? '' : 's'}`;
    }

    // Turn a plain-text post into well-formed paragraphs (blank line = new <p>)
    function escHtmlWithBreaks(text) {
        return String(text || '')
            .split(/\n{2,}/)
            .map(par => par.trim())
            .filter(Boolean)
            .map(par => `<p>${escHtml(par).replace(/\n/g, '<br>')}</p>`)
            .join('');
    }

    // Initial render
    refresh();
    if (posts.length > 0) {
        const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        showPost(sorted[0].id);
    }
}

function quoteMessage(m) {
    return `<p><br></p><hr><p><b>-----Original Message-----</b><br>
        <b>From:</b> ${escHtml(m.from)}<br>
        <b>To:</b> ${escHtml(m.to)}<br>
        <b>Subject:</b> ${escHtml(m.subject)}<br>
        <b>Received:</b> ${escHtml(m.date)}</p>
        ${m.body}`;
}

// The main mailbox window: folder tree + message list + preview pane
function setupMail(win) {
    const folderEls = win.querySelectorAll('.oe-folder[data-folder]');
    const msgList = win.querySelector('.oe-msglist');
    const previewHead = win.querySelector('.oe-preview-head');
    const previewContent = win.querySelector('.oe-preview-content');
    const statusbar = win.querySelector('.oe-statusbar');
    const FOLDER_LABELS = { inbox: 'Inbox', outbox: 'Outbox', sent: 'Sent Items', deleted: 'Deleted Items', drafts: 'Drafts' };

    let activeFolder = 'inbox';
    let selectedId = null;

    function renderFolders() {
        folderEls.forEach(f => {
            const name = f.dataset.folder;
            const unread = mailStore.folders[name].filter(m => !m.read).length;
            const badge = f.querySelector('.oe-unread-badge');
            if (badge) badge.remove();
            if (unread > 0 && name === 'inbox') {
                const b = document.createElement('span');
                b.className = 'oe-unread-badge';
                b.textContent = unread;
                f.appendChild(b);
            }
            f.classList.toggle('active', name === activeFolder);
        });
    }

    function renderList() {
        const msgs = mailStore.folders[activeFolder];
        statusbar.textContent = `${msgs.length} message${msgs.length === 1 ? '' : 's'} in ${FOLDER_LABELS[activeFolder]}`;
        if (!msgs.length) {
            msgList.innerHTML = `<div class="oe-empty">There are no messages in ${FOLDER_LABELS[activeFolder]}.</div>`;
            previewHead.innerHTML = '';
            previewContent.innerHTML = '';
            return;
        }
        msgList.innerHTML = msgs.map(m => `
            <div class="oe-msg-row${m.read ? '' : ' unread'}${m.id === selectedId ? ' active' : ''}" data-id="${m.id}">
                <span class="oe-col-from">${m.read ? '' : '<b class="oe-unread-dot">&#8226;</b>'}${escHtml(m.from)}</span>
                <span class="oe-col-subject">${escHtml(m.subject)}</span>
                <span class="oe-col-date">${escHtml(m.date)}</span>
            </div>`).join('');

        msgList.querySelectorAll('.oe-msg-row').forEach(row => {
            row.addEventListener('click', () => {
                const m = mailStore.folders[activeFolder].find(x => x.id === +row.dataset.id);
                if (!m) return;
                m.read = true;
                selectedId = m.id;
                renderList();
                renderFolders();
                showPreview(m);
            });
            row.addEventListener('dblclick', () => {
                const m = mailStore.folders[activeFolder].find(x => x.id === +row.dataset.id);
                if (m) openMailRead(m);
            });
        });
    }

    function showPreview(m) {
        previewHead.innerHTML = `
            <div><b>From:</b> ${escHtml(m.from)} &lt;${escHtml(m.address || m.to)}&gt;</div>
            <div><b>To:</b> ${escHtml(m.to)}</div>
            <div><b>Subject:</b> ${escHtml(m.subject)}</div>
            <div><b>Received:</b> ${escHtml(m.date)}</div>`;
        previewContent.innerHTML = m.body;
    }

    function getSelected() {
        return mailStore.folders[activeFolder].find(m => m.id === selectedId) || null;
    }

    function refresh(folder) {
        if (folder) activeFolder = folder;
        if (!mailStore.folders[activeFolder].some(m => m.id === selectedId)) selectedId = null;
        renderFolders();
        renderList();
        const m = getSelected();
        if (m) showPreview(m);
    }

    // Folder navigation
    folderEls.forEach(f => {
        f.addEventListener('click', () => {
            activeFolder = f.dataset.folder;
            selectedId = null;
            renderFolders();
            renderList();
        });
    });

    // Toolbar
    win.querySelector('.oe-tool[data-action="compose"]').addEventListener('click', () => openMailCompose());

    win.querySelector('.oe-tool[data-action="reply"]').addEventListener('click', () => {
        const m = getSelected();
        if (!m) { statusbar.textContent = 'Select a message to reply to.'; return; }
        openMailCompose({ to: m.address || m.from, subject: 'Re: ' + m.subject, body: quoteMessage(m) });
    });

    win.querySelector('.oe-tool[data-action="replyall"]').addEventListener('click', () => {
        const m = getSelected();
        if (!m) { statusbar.textContent = 'Select a message to reply to.'; return; }
        openMailCompose({ to: m.address || m.from, subject: 'Re: ' + m.subject, body: quoteMessage(m) });
    });

    win.querySelector('.oe-tool[data-action="forward"]').addEventListener('click', () => {
        const m = getSelected();
        if (!m) { statusbar.textContent = 'Select a message to forward.'; return; }
        openMailCompose({ to: '', subject: 'Fw: ' + m.subject, body: quoteMessage(m) });
    });

    win.querySelector('.oe-tool[data-action="sendrecv"]').addEventListener('click', () => {
        if (mailStore.folders.outbox.length) {
            mailStore.folders.sent.push(...mailStore.folders.outbox.splice(0, mailStore.folders.outbox.length));
            refresh();
            statusbar.textContent = 'Outgoing messages sent.';
        } else {
            showInfoDialog('Outlook Express', 'assets/start-email.png', 'No new messages are available.');
        }
    });

    win.querySelector('.oe-tool[data-action="addresses"]').addEventListener('click', () => {
        showInfoDialog('Address Book', 'assets/start-email.png',
            `Marco Tancredi<br><b>${escHtml(MAILBOX_EMAIL)}</b>`);
    });

    win.querySelector('.oe-tool[data-action="find"]').addEventListener('click', () => {
        const q = prompt('Find a message:', '');
        if (!q) return;
        let found = null;
        Object.keys(mailStore.folders).forEach(name => {
            const m = mailStore.folders[name].find(x =>
                (x.subject || '').toLowerCase().includes(q.toLowerCase()) ||
                (x.from || '').toLowerCase().includes(q.toLowerCase()));
            if (m && !found) { found = m; activeFolder = name; selectedId = m.id; }
        });
        if (found) {
            refresh();
            statusbar.textContent = `Found: ${found.subject}`;
        } else {
            statusbar.textContent = `No messages found matching "${q}".`;
        }
    });

    win._refreshFolder = refresh;
    refresh('inbox');
}

// The New Message compose window - rich text editing via the classic
// document.execCommand API (bold/italic/underline, sizes, colors, lists...)
function setupMailCompose(win, prefill = {}) {
    const fromInput = win.querySelector('.oe-from');
    const toInput = win.querySelector('.oe-to');
    const ccInput = win.querySelector('.oe-cc');
    const subjectInput = win.querySelector('.oe-subject');
    const editor = win.querySelector('.oe-editor');
    const statusbar = win.querySelector('.oe-statusbar');

    // Recipient defaults to Marco's mailbox (visitors share their ideas here).
    // From is the visitor's own email so Marco can reply to them.
    toInput.value = prefill.to != null ? prefill.to : MAILBOX_EMAIL;
    if (prefill.cc) ccInput.value = prefill.cc;
    subjectInput.value = prefill.subject || '';
    if (!prefill.subject) subjectInput.placeholder = 'Share your ideas with me...';
    editor.innerHTML = prefill.body != null ? prefill.body : MAIL_BODY_PLACEHOLDER;

    function exec(cmd, val) {
        editor.focus();
        document.execCommand(cmd, false, val);
        editor.focus();
    }

    // Formatting toolbar buttons
    win.querySelectorAll('.oe-fbtn[data-cmd]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            exec(btn.dataset.cmd);
        });
    });

    const fontSelect = win.querySelector('.oe-ffont');
    fontSelect.addEventListener('change', () => exec('fontName', fontSelect.value));

    const sizeSelect = win.querySelector('.oe-fsize');
    sizeSelect.addEventListener('change', () => exec('fontSize', sizeSelect.value));

    const colorInput = win.querySelector('.oe-color');
    colorInput.addEventListener('input', () => exec('foreColor', colorInput.value));
    colorInput.addEventListener('change', () => exec('foreColor', colorInput.value));

    const hiliteInput = win.querySelector('.oe-hilite');
    hiliteInput.addEventListener('input', () => exec('hiliteColor', hiliteInput.value));
    hiliteInput.addEventListener('change', () => exec('hiliteColor', hiliteInput.value));

    win.querySelector('.oe-fbtn[data-cmd="createLink"]').addEventListener('click', () => {
        const url = prompt('Enter the hyperlink URL:', 'https://');
        if (url) exec('createLink', url);
    });

    // Bold / italic / underline keyboard shortcuts inside the editor
    const onKey = (e) => {
        if (!(e.metaKey || e.ctrlKey)) return;
        const k = e.key.toLowerCase();
        if (k === 'b') { e.preventDefault(); exec('bold'); }
        else if (k === 'i') { e.preventDefault(); exec('italic'); }
        else if (k === 'u') { e.preventDefault(); exec('underline'); }
    };
    editor.addEventListener('keydown', onKey);

    // Compose toolbar: undo/redo/cut/copy/paste/spell
    win.querySelectorAll('.oe-tool[data-cmd]').forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.dataset.cmd;
            if (cmd === 'spell') { statusbar.textContent = 'Spell check complete.'; return; }
            if (cmd === 'cut' || cmd === 'copy' || cmd === 'paste') { exec(cmd); return; }
            exec(cmd);
        });
    });

    win.querySelector('.oe-tool[data-action="attach"]').addEventListener('click', () => {
        statusbar.textContent = 'Attachments are not supported in this demo.';
    });
    win.querySelector('.oe-tool[data-action="sign"]').addEventListener('click', () => {
        statusbar.textContent = 'Digital signatures are not supported in this demo.';
    });

    // Send: deliver the email for real, file it in Sent Items, then close
    win.querySelector('.oe-tool[data-action="send"]').addEventListener('click', async () => {
        const from = fromInput.value.trim();
        const to = toInput.value.trim();
        const subject = subjectInput.value.trim() || '(no subject)';
        const bodyHtml = editor.innerHTML.trim() || '<p><i>(empty message)</i></p>';
        const bodyText = htmlToText(bodyHtml) || '(empty message)';

        if (!to) {
            statusbar.textContent = 'Please enter a recipient in the To field.';
            toInput.focus();
            return;
        }
        if (!from) {
            statusbar.textContent = 'Please enter your email address in the From field so I can reply.';
            fromInput.focus();
            return;
        }
        if (!isValidEmail(from)) {
            statusbar.textContent = 'That From address does not look valid — please check it.';
            fromInput.focus();
            return;
        }

        // File the message into Sent Items (survives closing/reopening)
        const msg = {
            id: ++mailCounter,
            from: from,
            address: from,
            to: to,
            subject: subject,
            date: new Date().toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }),
            body: bodyHtml,
            read: true
        };
        mailStore.folders.sent.push(msg);

        const mailbox = openWindows['icon10'];
        if (mailbox && typeof mailbox._refreshFolder === 'function') {
            mailbox._refreshFolder('sent');
        }

        // Actually send it
        const sendBtn = win.querySelector('.oe-tool[data-action="send"]');
        sendBtn.disabled = true;
        statusbar.textContent = 'Sending message...';
        try {
            const result = await sendMail({
                fromEmail: from,
                fromName: from.split('@')[0],
                toEmail: to,
                subject: subject,
                bodyHtml: bodyHtml,
                bodyText: bodyText
            });
            if (result && result.status === 'mailto-fallback') {
                showInfoDialog('Outlook Express', 'assets/start-email.png',
                    `Your email program has opened with the message ready to send to <b>${escHtml(to)}</b>.<br><br>` +
                    `Just press Send there. (Real delivery from the browser needs EmailJS keys &mdash; see the code.)`);
            } else {
                showInfoDialog('Outlook Express', 'assets/start-email.png',
                    `Your message has been sent to <b>${escHtml(to)}</b> from <b>${escHtml(from)}</b>.<br><br>` +
                    `Thanks for sharing your ideas! Marco will get back to you at your address.`);
            }
            closeWindow(win);
        } catch (err) {
            sendBtn.disabled = false;
            statusbar.textContent = 'Could not send the message.';
            showInfoDialog('Outlook Express', 'assets/start-email.png',
                `The message could not be delivered.<br><br>` +
                `Please try again, or write to me directly at <b>${escHtml(MAILBOX_EMAIL)}</b>.`);
        }
    });

    addCleanup(win, () => editor.removeEventListener('keydown', onKey));
}

// A read-only window for double-clicked messages
function setupMailRead(win, message) {
    if (!message) { closeWindow(win); return; }
    const head = win.querySelector('.oe-read-head');
    const body = win.querySelector('.oe-read-body');

    // Title the window with the subject (before the taskbar button is added)
    const titleEl = win.querySelector('.popup-title');
    if (titleEl) titleEl.textContent = message.subject;

    head.innerHTML = `
        <div><b>From:</b> ${escHtml(message.from)} &lt;${escHtml(message.address || message.to)}&gt;</div>
        <div><b>To:</b> ${escHtml(message.to)}</div>
        <div><b>Subject:</b> ${escHtml(message.subject)}</div>
        <div><b>Received:</b> ${escHtml(message.date)}</div>`;
    body.innerHTML = message.body;

    win.querySelector('.oe-tool[data-action="reply"]').addEventListener('click', () => {
        openMailCompose({ to: message.address || message.from, subject: 'Re: ' + message.subject, body: quoteMessage(message) });
    });
    win.querySelector('.oe-tool[data-action="replyall"]').addEventListener('click', () => {
        openMailCompose({ to: message.address || message.from, subject: 'Re: ' + message.subject, body: quoteMessage(message) });
    });
    win.querySelector('.oe-tool[data-action="forward"]').addEventListener('click', () => {
        openMailCompose({ to: '', subject: 'Fw: ' + message.subject, body: quoteMessage(message) });
    });
    win.querySelector('.oe-tool[data-action="delete"]').addEventListener('click', () => {
        Object.keys(mailStore.folders).forEach(name => {
            const idx = mailStore.folders[name].findIndex(m => m.id === message.id);
            if (idx !== -1) {
                const [removed] = mailStore.folders[name].splice(idx, 1);
                removed.read = true;
                mailStore.folders.deleted.push(removed);
            }
        });
        const mailbox = openWindows['icon10'];
        if (mailbox && typeof mailbox._refreshFolder === 'function') mailbox._refreshFolder();
        closeWindow(win);
    });

}

// Start menu
// Apps available on this desktop (opened from the Start menu)
// Friendly names for the "Application not found" dialog
const startAppNames = {
    internet: 'Internet Explorer', email: 'Outlook Express', minesweeper: 'Minesweeper',
    notepad: 'Notepad', winamp: 'Winamp', paint: 'Paint', snake: 'Snake', cmd: 'Command Prompt', blog: "Marco's Blog",
    mediaplayer: 'Windows Media Player', messenger: 'Windows Messenger', allprograms: 'All Programs',
    mydocuments: 'Projects', myrecent: 'My Recent Documents', mypictures: 'My Pictures',
    mymusic: 'My Music', mycomputer: 'My Computer', controlpanel: 'Control Panel',
    setaccess: 'Set Program Access and Defaults', connectto: 'Connect To', printers: 'Printers and Faxes',
    help: 'Help and Support', search: 'Search', run: 'Run'
};

function setupStartMenu() {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        XPAudio.unlock();
        XPAudio.play('menu');
        startMenu.classList.toggle('hidden');
        startButton.classList.toggle('start-open', !startMenu.classList.contains('hidden'));
    });

    // The Windows key (and Ctrl+Esc) toggles the Start menu, like the real one
    document.addEventListener('keydown', (e) => {
        const isWinKey = e.key === 'Meta' || e.key === 'OS';
        const isCtrlEsc = e.ctrlKey && e.key === 'Escape' && !e.shiftKey;
        if (!isWinKey && !isCtrlEsc) return;
        if (e.target.closest('input, textarea, [contenteditable="true"]')) return;
        e.preventDefault();
        startMenu.classList.toggle('hidden');
        startButton.classList.toggle('start-open', !startMenu.classList.contains('hidden'));
    });

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('#start-menu') && !e.target.closest('#start-button') &&
            !e.target.closest('.start-flyout')) {
            startMenu.classList.add('hidden');
            startButton.classList.remove('start-open');
            hideAllPrograms();
        }
    });

    document.querySelectorAll('.start-menu-item').forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const app = item.dataset.app;
            if (app === 'allprograms') return;      // handled by the flyout
            startMenu.classList.add('hidden');
            startButton.classList.remove('start-open');
            hideAllPrograms();
            XPAudio.play('click');
            const route = START_ROUTES[app];
            if (typeof route === 'function') route();
            else if (route) launchApp(route);
            else showAppNotFound(startAppNames[app] || app);
        });
    });

    // Log Off / Shutdown handlers
    const logoffBtn = document.querySelector('.start-logoff');
    const shutdownBtn = document.querySelector('.start-shutdown');
    if (logoffBtn) {
        logoffBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startMenu.classList.add('hidden');
            startButton.classList.remove('start-open');
            showLogOffDialog();
        });
    }
    if (shutdownBtn) {
        shutdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startMenu.classList.add('hidden');
            startButton.classList.remove('start-open');
            showTurnOffDialog();
        });
    }
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
                <p style="color:#888; font-size:11px;">${escHtml(appName)}</p>
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

    // ---- Mini calendar that pops up above the clock (XP Date & Time style) ----
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const calendar = document.getElementById('calendar-popup');
    if (!calendar) return;

    calendar.innerHTML = `
        <div class="calendar-header">
            <button class="cal-nav" data-dir="-1" title="Previous month">&#9664;</button>
            <span class="cal-month-year"></span>
            <button class="cal-nav" data-dir="1" title="Next month">&#9654;</button>
        </div>
        <div class="cal-weekdays">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span>
            <span>Th</span><span>Fr</span><span>Sa</span>
        </div>
        <div class="cal-days"></div>
        <div class="cal-footer">
            <span class="cal-today-label"></span>
            <button class="cal-today-btn" type="button">Today</button>
        </div>
    `;

    const monthYearEl = calendar.querySelector('.cal-month-year');
    const daysGrid = calendar.querySelector('.cal-days');
    const todayLabelEl = calendar.querySelector('.cal-today-label');
    const todayBtn = calendar.querySelector('.cal-today-btn');

    // The month/year currently shown in the calendar (month is 0-based)
    let view = { year: new Date().getFullYear(), month: new Date().getMonth() };

    function todayParts() {
        const t = new Date();
        return { y: t.getFullYear(), m: t.getMonth(), d: t.getDate() };
    }

    function renderCalendar() {
        const { year, month } = view;
        const tod = todayParts();
        const first = new Date(year, month, 1);
        const startOffset = first.getDay();              // 0 = Sunday
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();
        const isCurrent = year === tod.y && month === tod.m;

        monthYearEl.textContent = `${MONTHS[month]} ${year}`;
        todayLabelEl.textContent = tod.d + ' ' + MONTHS[tod.m] + ' ' + tod.y;

        daysGrid.innerHTML = '';

        // Leading days from the previous month (dimmed)
        for (let i = startOffset - 1; i >= 0; i--) {
            const cell = document.createElement('div');
            cell.className = 'cal-day other-month';
            cell.textContent = prevMonthDays - i;
            cell.dataset.year = month === 0 ? year - 1 : year;
            cell.dataset.month = month === 0 ? 11 : month - 1;
            daysGrid.appendChild(cell);
        }

        // Days of the displayed month (today is highlighted in blue)
        for (let d = 1; d <= daysInMonth; d++) {
            const cell = document.createElement('div');
            cell.className = 'cal-day' + (isCurrent && d === tod.d ? ' today' : '');
            cell.textContent = d;
            cell.dataset.year = year;
            cell.dataset.month = month;
            daysGrid.appendChild(cell);
        }

        // Trailing days from the next month, padded to a full 6-week grid (dimmed)
        const filled = daysGrid.children.length;
        for (let i = 1; filled + i <= 42; i++) {
            const cell = document.createElement('div');
            cell.className = 'cal-day other-month';
            cell.textContent = i;
            cell.dataset.year = month === 11 ? year + 1 : year;
            cell.dataset.month = month === 11 ? 0 : month + 1;
            daysGrid.appendChild(cell);
        }
    }

    function openCalendar() {
        // Always start on today's real date when opened
        const tod = todayParts();
        view = { year: tod.y, month: tod.m };
        renderCalendar();
        calendar.classList.remove('hidden');
    }

    function closeCalendar() {
        calendar.classList.add('hidden');
    }

    clockEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (calendar.classList.contains('hidden')) openCalendar();
        else closeCalendar();
    });

    calendar.querySelectorAll('.cal-nav').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            let { year, month } = view;
            month += parseInt(btn.dataset.dir, 10);
            if (month < 0) { month = 11; year--; }
            if (month > 11) { month = 0; year++; }
            view = { year, month };
            renderCalendar();
        });
    });

    // Clicking a day jumps the view to that month (previous/next-month days too)
    daysGrid.addEventListener('click', (e) => {
        const cell = e.target.closest('.cal-day');
        if (!cell || cell.dataset.month === undefined) return;
        e.stopPropagation();
        view = { year: +cell.dataset.year, month: +cell.dataset.month };
        renderCalendar();
    });

    todayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tod = todayParts();
        view = { year: tod.y, month: tod.m };
        renderCalendar();
    });

    // Clicking anywhere outside the clock or calendar closes it
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.calendar-popup') && !e.target.closest('#taskbar-clock')) {
            closeCalendar();
        }
    });

    // Escape also closes it
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCalendar();
    });
}

/* ==========================================================================
   ==  DESKTOP DEPTH LAYER                                                 ==
   ==  Everything below turns the desktop from "a page with windows" into  ==
   ==  something that behaves like a real Windows XP session: sound, a     ==
   ==  virtual file system, a proper window manager, a system tray, the    ==
   ==  Start menu apps, and a boot/logon/shutdown lifecycle.               ==
   ========================================================================== */


/* ===== 1. Sound =============================================================
   Every sound is synthesised with the Web Audio API instead of shipping WAV
   files: it keeps the repo tiny, avoids using Microsoft's copyrighted audio,
   and still gives the desktop the audible feedback that makes it feel real.
   The context is created lazily on the first gesture because browsers refuse
   to start audio before the user interacts with the page.
   ========================================================================= */
const XPAudio = (() => {
    const VOL_KEY = 'xpVolume';
    const MUTE_KEY = 'xpMuted';

    let ctx = null;
    let master = null;
    let volume = Math.min(1, Math.max(0, Number(Store.get(VOL_KEY, 0.4)) || 0));
    let muted = Store.get(MUTE_KEY, false) === true;

    function ensure() {
        if (ctx) {
            if (ctx.state === 'suspended') ctx.resume().catch(() => {});
            return ctx;
        }
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return null;
        try {
            ctx = new Ctx();
            master = ctx.createGain();
            master.gain.value = muted ? 0 : volume;
            master.connect(ctx.destination);
        } catch (e) { ctx = null; }
        return ctx;
    }

    function applyGain() {
        if (master) master.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.01);
    }

    // A single struck-bell voice: sine carrier with an exponential decay.
    function bell(freq, when, dur, gain, type) {
        const c = ensure();
        if (!c) return;
        const t = c.currentTime + when;
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freq, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(g).connect(master);
        osc.start(t);
        osc.stop(t + dur + 0.02);
    }

    // A short burst of filtered noise — the basis of clicks and whooshes.
    function noise(when, dur, gain, filterType, startHz, endHz) {
        const c = ensure();
        if (!c) return;
        const t = c.currentTime + when;
        const frames = Math.max(1, Math.floor(c.sampleRate * dur));
        const buf = c.createBuffer(1, frames, c.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
        const src = c.createBufferSource();
        src.buffer = buf;
        const filt = c.createBiquadFilter();
        filt.type = filterType || 'bandpass';
        filt.frequency.setValueAtTime(startHz, t);
        filt.frequency.exponentialRampToValueAtTime(Math.max(40, endHz), t + dur);
        filt.Q.value = 1.2;
        const g = c.createGain();
        g.gain.setValueAtTime(gain, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(filt).connect(g).connect(master);
        src.start(t);
        src.stop(t + dur + 0.02);
    }

    const sounds = {
        // The logon chime: a rising bell arpeggio over a soft low pad.
        startup() {
            [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
                bell(f, i * 0.13, 1.9 - i * 0.15, 0.16);
                bell(f * 2, i * 0.13, 0.7, 0.035);
            });
            bell(130.81, 0, 2.4, 0.07, 'triangle');
        },
        // Shutting down: the same shape, falling instead of rising.
        shutdown() {
            [783.99, 659.25, 523.25, 392.00].forEach((f, i) => {
                bell(f, i * 0.15, 1.6, 0.14);
            });
            bell(98, 0.1, 2.0, 0.06, 'triangle');
        },
        logoff() {
            [659.25, 523.25, 392.00].forEach((f, i) => bell(f, i * 0.11, 1.1, 0.12));
        },
        // The classic notification "ding".
        ding() {
            bell(1046.50, 0, 0.9, 0.18);
            bell(1567.98, 0.005, 0.55, 0.07);
        },
        // Critical stop: two descending square tones.
        error() {
            bell(880, 0, 0.22, 0.18, 'square');
            bell(660, 0.16, 0.26, 0.18, 'square');
        },
        // Menus and buttons: a dry, almost subliminal tick.
        click() { noise(0, 0.035, 0.05, 'highpass', 2600, 1400); },
        menu()  { noise(0, 0.028, 0.035, 'highpass', 3200, 2000); },
        minimize() { noise(0, 0.16, 0.06, 'bandpass', 1800, 320); },
        maximize() { noise(0, 0.16, 0.06, 'bandpass', 320, 1800); },
        restore()  { noise(0, 0.14, 0.055, 'bandpass', 500, 1600); },
        close()    { noise(0, 0.12, 0.05, 'bandpass', 1400, 400); },
        // Emptying the Recycle Bin: paper being crushed.
        recycle() {
            for (let i = 0; i < 5; i++) noise(i * 0.045, 0.09, 0.07, 'bandpass', 2400 + Math.random() * 1800, 900);
        },
        // A small fanfare for wins.
        tada() {
            [523.25, 659.25, 783.99].forEach(f => bell(f, 0, 0.5, 0.12));
            [659.25, 783.99, 1046.50].forEach(f => bell(f, 0.16, 1.1, 0.13));
        },
        navigate() { noise(0, 0.06, 0.04, 'bandpass', 900, 2200); }
    };

    return {
        play(name) {
            if (muted || volume <= 0) return;
            const fn = sounds[name];
            if (fn) { try { fn(); } catch (e) { /* audio unavailable */ } }
        },
        get volume() { return volume; },
        set volume(v) {
            volume = Math.min(1, Math.max(0, Number(v) || 0));
            Store.set(VOL_KEY, volume);
            ensure(); applyGain();
        },
        get muted() { return muted; },
        set muted(m) {
            muted = !!m;
            Store.set(MUTE_KEY, muted);
            ensure(); applyGain();
        },
        // Called from the first real user gesture so the context can start.
        unlock() { ensure(); }
    };
})();

// Keep the old helper working — it is called from showAppNotFound.
function playErrorSound() { XPAudio.play('error'); }


/* ---- generated system icons ----------------------------------------------
   The information and network glyphs the shell needs are drawn on a canvas
   rather than shipped as files, so the repo carries no unused art and the
   icons can never 404. */
const SysIcons = (() => {
    const cache = {};

    function make(key, draw) {
        if (cache[key]) return cache[key];
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        draw(canvas.getContext('2d'));
        cache[key] = canvas.toDataURL();
        return cache[key];
    }

    function orb(ctx, from, to, stroke) {
        const g = ctx.createRadialGradient(11, 9, 2, 16, 16, 17);
        g.addColorStop(0, from);
        g.addColorStop(1, to);
        ctx.beginPath();
        ctx.arc(16, 16, 14, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1.4;
        ctx.stroke();
    }

    return {
        // Blue circle with a white "i" — the classic information balloon
        get info() {
            return make('info', ctx => {
                orb(ctx, '#a9d4ff', '#1b62c4', '#0d3f8a');
                ctx.fillStyle = '#fff';
                ctx.font = 'bold italic 19px Georgia, "Times New Roman", serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('i', 16, 17);
            });
        },
        // Yellow triangle with an exclamation mark
        get warning() {
            return make('warning', ctx => {
                ctx.beginPath();
                ctx.moveTo(16, 3); ctx.lineTo(30, 28); ctx.lineTo(2, 28);
                ctx.closePath();
                const g = ctx.createLinearGradient(0, 0, 0, 32);
                g.addColorStop(0, '#ffe66a');
                g.addColorStop(1, '#e8a800');
                ctx.fillStyle = g;
                ctx.fill();
                ctx.strokeStyle = '#8a6400';
                ctx.lineWidth = 1.4;
                ctx.stroke();
                ctx.fillStyle = '#000';
                ctx.font = 'bold 15px Tahoma, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('!', 16, 20);
            });
        },
        // Two little monitors, for network notifications
        get network() {
            return make('network', ctx => {
                const screen = (x, y, w, h) => {
                    ctx.fillStyle = '#c9c9c9';
                    ctx.fillRect(x, y, w, h);
                    ctx.strokeStyle = '#6b6b6b';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x + .5, y + .5, w - 1, h - 1);
                    const g = ctx.createLinearGradient(x, y, x + w, y + h);
                    g.addColorStop(0, '#7fc0ff');
                    g.addColorStop(1, '#1c5fbe');
                    ctx.fillStyle = g;
                    ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
                };
                ctx.strokeStyle = '#8a8a8a';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(9, 22); ctx.lineTo(9, 15); ctx.lineTo(23, 15); ctx.lineTo(23, 11);
                ctx.stroke();
                screen(15, 3, 15, 12);
                screen(2, 17, 15, 12);
            });
        }
    };
})();


/* ===== 2. Tooltips ========================================================
   The yellow XP tooltip. Any element with a `data-tip` attribute gets one
   after a short hover delay, positioned below-right of the cursor and kept
   inside the viewport.
   ========================================================================= */
const Tooltip = (() => {
    let el = null;
    let timer = null;
    let current = null;

    function hide() {
        clearTimeout(timer);
        timer = null;
        current = null;
        if (el) { el.remove(); el = null; }
    }

    function show(target, x, y) {
        const text = target.dataset.tip;
        if (!text) return;
        hide();
        current = target;
        el = document.createElement('div');
        el.className = 'xp-tooltip';
        el.textContent = text;
        document.body.appendChild(el);
        const r = el.getBoundingClientRect();
        let left = x + 14;
        let top = y + 20;
        if (left + r.width > window.innerWidth - 4) left = window.innerWidth - r.width - 4;
        if (top + r.height > window.innerHeight - 4) top = y - r.height - 8;
        el.style.left = Math.max(2, left) + 'px';
        el.style.top = Math.max(2, top) + 'px';
    }

    function init() {
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('[data-tip]');
            if (!target || target === current) return;
            hide();
            const { clientX, clientY } = e;
            timer = setTimeout(() => show(target, clientX, clientY), 600);
        });
        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('[data-tip]');
            if (target && target === current) hide();
            else if (target) clearTimeout(timer);
        });
        ['mousedown', 'wheel', 'keydown'].forEach(evt =>
            document.addEventListener(evt, hide, { passive: true }));
    }

    return { init, hide };
})();


/* ===== 3. Tray balloon notifications ======================================
   The little pop-up that rises out of the notification area. Used for
   "Your files are ready", low disk space jokes, send confirmations, etc.
   ========================================================================= */
function notify({ title, text, icon, timeout = 7000, onClick }) {
    document.querySelectorAll('.xp-balloon').forEach(b => b.remove());
    const balloon = document.createElement('div');
    balloon.className = 'xp-balloon';
    balloon.innerHTML = `
        <button class="xp-balloon-close" title="Close" aria-label="Close">&#10005;</button>
        <div class="xp-balloon-head">
            <img class="xp-balloon-icon" src="${escAttr(icon || SysIcons.info)}" alt="">
            <span class="xp-balloon-title">${escHtml(title || '')}</span>
        </div>
        <div class="xp-balloon-text">${escHtml(text || '')}</div>`;
    document.body.appendChild(balloon);

    // Point the tail at the notification area
    const tray = document.querySelector('.taskbar-tray') || document.querySelector('.taskbar-clock');
    if (tray) {
        const r = tray.getBoundingClientRect();
        const width = balloon.offsetWidth;
        balloon.style.left = Math.max(6, Math.min(r.left + r.width / 2 - width + 30,
            window.innerWidth - width - 6)) + 'px';
    }
    balloon.style.bottom = (getTaskbarHeight() + 12) + 'px';
    requestAnimationFrame(() => balloon.classList.add('xp-balloon-in'));

    let closed = false;
    const close = () => {
        if (closed) return;
        closed = true;
        clearTimeout(timerId);
        balloon.classList.remove('xp-balloon-in');
        setTimeout(() => balloon.remove(), 220);
    };
    const timerId = setTimeout(close, timeout);
    balloon.querySelector('.xp-balloon-close').addEventListener('click', (e) => {
        e.stopPropagation();
        close();
    });
    if (onClick) {
        balloon.classList.add('xp-balloon-clickable');
        balloon.addEventListener('click', () => { close(); onClick(); });
    }
    XPAudio.play('ding');
    return close;
}


/* ===== 4. Reusable dialog chrome ==========================================
   `showDialog` builds a real XP dialog: title bar, optional icon, body HTML
   and a row of buttons. Every modal in the desktop (Run, Shut Down, Delete
   confirmations, Properties) is built on top of it, so they all drag, focus
   and close the same way.
   ========================================================================= */
let dialogZ = 500000;

function showDialog({ title, icon, bodyHtml, buttons = [], width, className = '', modal = false, onClose, sound }) {
    const backdrop = modal ? document.createElement('div') : null;
    if (backdrop) {
        backdrop.className = 'xp-modal-backdrop';
        backdrop.style.zIndex = String(++dialogZ);
        document.body.appendChild(backdrop);
    }

    const dlg = document.createElement('div');
    dlg.className = 'xp-dialog ' + className;
    dlg.style.zIndex = String(++dialogZ);
    if (width) dlg.style.width = typeof width === 'number' ? width + 'px' : width;
    dlg.innerHTML = `
        <div class="popup-header xp-dialog-header">
            ${icon ? `<img class="popup-icon" src="${escAttr(icon)}" alt="" draggable="false">` : ''}
            <span class="popup-title">${escHtml(title || '')}</span>
            <div class="popup-controls">
                <button class="win-btn win-btn-close xp-dialog-x" aria-label="Close">
                    <svg viewBox="0 0 10 10"><path d="M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4z"></path></svg>
                </button>
            </div>
        </div>
        <div class="xp-dialog-body">${bodyHtml || ''}</div>
        ${buttons.length ? '<div class="xp-dialog-buttons"></div>' : ''}`;
    document.body.appendChild(dlg);

    let closed = false;
    const close = (result) => {
        if (closed) return;
        closed = true;
        document.removeEventListener('keydown', onKey, true);
        dlg.remove();
        if (backdrop) backdrop.remove();
        if (onClose) onClose(result);
    };

    const btnRow = dlg.querySelector('.xp-dialog-buttons');
    if (btnRow) {
        buttons.forEach(b => {
            const btn = document.createElement('button');
            btn.className = 'xp-btn' + (b.primary ? ' xp-btn-default' : '');
            btn.textContent = b.label;
            if (b.disabled) btn.disabled = true;
            btn.addEventListener('click', () => {
                XPAudio.play('click');
                // A handler returning `false` keeps the dialog open
                const keep = b.action ? b.action(dlg) === false : false;
                if (!keep) close(b.value != null ? b.value : b.label);
            });
            btnRow.appendChild(btn);
            if (b.primary) setTimeout(() => btn.focus(), 30);
        });
    }

    dlg.querySelector('.xp-dialog-x').addEventListener('click', () => close(null));

    // Centre it, then make the title bar draggable
    const r = dlg.getBoundingClientRect();
    dlg.style.left = Math.max(8, Math.round((window.innerWidth - r.width) / 2)) + 'px';
    dlg.style.top = Math.max(8, Math.round((workAreaHeight() - r.height) / 2)) + 'px';
    makeDraggable(dlg, dlg.querySelector('.xp-dialog-header'));

    dlg.addEventListener('mousedown', () => { dlg.style.zIndex = String(++dialogZ); });

    function onKey(e) {
        if (e.key === 'Escape') { e.stopPropagation(); close(null); }
        else if (e.key === 'Enter' && !e.target.closest('textarea')) {
            const primary = buttons.find(b => b.primary);
            if (primary && !primary.disabled) {
                e.preventDefault();
                e.stopPropagation();
                const keep = primary.action ? primary.action(dlg) === false : false;
                if (!keep) close(primary.value != null ? primary.value : primary.label);
            }
        }
    }
    document.addEventListener('keydown', onKey, true);

    if (sound !== false) XPAudio.play(sound || 'ding');
    return { el: dlg, close };
}

// Make any element draggable by a handle, clamped to the work area.
function makeDraggable(el, handle) {
    if (!handle) return;
    let sx = 0, sy = 0;
    const onMove = (e) => {
        const x = Math.max(-el.offsetWidth + 90, Math.min(e.clientX - sx, window.innerWidth - 90));
        const y = Math.max(0, Math.min(e.clientY - sy, workAreaHeight() - 24));
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    };
    const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };
    handle.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, input, select, textarea')) return;
        e.preventDefault();
        sx = e.clientX - el.offsetLeft;
        sy = e.clientY - el.offsetTop;
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
}


/* ===== 5. Virtual file system =============================================
   A real tree of folders and files behind `C:\`, so Explorer, My Computer,
   the Run box and the command prompt all talk about the same thing. Paths
   use Windows separators; every node carries the metadata the UI needs to
   render a listing (icon, type label, size, modified date).

   Node shape:
     { name, type: 'folder' | 'file', kind, icon, mtime, children[], ... }
   `kind` decides what double-clicking does:
     folder | image | text | link | app | system
   ========================================================================= */
const VFS = (() => {
    const KEY = 'xpFileSystem';
    const SEED_VERSION = 3;   // bump to re-seed everyone's tree after edits

    const USER = 'Marco';
    const PROFILE = `C:\\Documents and Settings\\${USER}`;
    const DESKTOP = `${PROFILE}\\Desktop`;
    const DOCS = `${PROFILE}\\My Documents`;
    const PICTURES = `${DOCS}\\My Pictures`;
    const MUSIC = `${DOCS}\\My Music`;

    const now = Date.now();
    const day = 86400000;

    function folder(name, children, extra) {
        return Object.assign({
            name, type: 'folder', kind: 'folder',
            icon: 'assets/folder-icon.png',
            mtime: now - day, children: children || []
        }, extra || {});
    }
    function file(name, extra) {
        return Object.assign({ name, type: 'file', kind: 'text', mtime: now - day }, extra || {});
    }

    // ---- The shipped tree -------------------------------------------------
    function seed() {
        const pictures = folder('My Pictures', [
            file('Kira at the Beach.jpg', {
                kind: 'image', src: 'assets/doggo_at_the_beach.jpg',
                icon: 'assets/image-file-icon.png', mtime: now - day * 12
            }),
            file('Kira 1.jpeg', {
                kind: 'image', src: 'assets/Kira_1.jpeg',
                icon: 'assets/image-file-icon.png', mtime: now - day * 9
            }),
            file('Kira 2.jpeg', {
                kind: 'image', src: 'assets/Kira_2.jpeg',
                icon: 'assets/image-file-icon.png', mtime: now - day * 9
            }),
            folder('Screenshots', folderFiles
                .filter(p => p.screenshot)
                .map(p => file(p.name + '.png', {
                    kind: 'image', src: p.screenshot,
                    icon: 'assets/image-file-icon.png', mtime: now - day * 20
                })), { mtime: now - day * 20 }),
            folder('Wallpapers', [...WALLPAPERS, { src: DEFAULT_WALLPAPER, label: 'Bliss (default)' }]
                .map(w => file(w.label + '.jpg', {
                    kind: 'image', src: w.src,
                    icon: 'assets/image-file-icon.png', mtime: now - day * 40
                })), { mtime: now - day * 40 })
        ], { icon: 'assets/start-mypictures.png', mtime: now - day * 9 });

        const music = folder('My Music', [
            file('Sample Music.txt', {
                kind: 'text', icon: 'assets/notepad-icon.png',
                content: 'No music files here yet.\r\n\r\nThe Winamp entry in the Start menu is a placeholder — ' +
                    'audio playback is on the list of things to build next.'
            })
        ], { icon: 'assets/start-mymusic.png' });

        const projects = folder('Projects', folderFiles
            .filter(p => p.kind === 'project')
            .map(p => file(p.name, {
                kind: 'link', url: p.url, icon: 'assets/folder-icon.png',
                typeLabel: p.type + ' project', summary: p.summary,
                screenshot: p.screenshot, mtime: now - day * (10 + Math.floor(Math.random() * 300))
            })), { mtime: now - day * 10 });

        const docs = folder('My Documents', [
            pictures, music, projects,
            file('About Me.txt', {
                kind: 'text', icon: 'assets/notepad-icon.png', mtime: now - day * 3,
                content: "Marco Tancredi — front-end developer\r\n" +
                    "=====================================\r\n\r\n" +
                    "I build things for the web with HTML, CSS and JavaScript.\r\n" +
                    "This whole desktop is one of them: no framework, no build step,\r\n" +
                    "just three files and a lot of attention to detail.\r\n\r\n" +
                    "Open the Projects folder to see what else I've made, or use\r\n" +
                    "Outlook Express in the Start menu to send me a message."
            }),
            file('Resume.txt', {
                kind: 'text', icon: 'assets/notepad-icon.png', mtime: now - day * 30,
                content: "MARCO TANCREDI\r\n" +
                    "--------------\r\n\r\n" +
                    "SKILLS\r\n" +
                    "  HTML5, CSS3, JavaScript (ES2020+)\r\n" +
                    "  Responsive layout, accessibility, DOM APIs\r\n" +
                    "  Canvas, Web Audio, Web Storage\r\n" +
                    "  Git, GitHub Pages\r\n\r\n" +
                    "SELECTED WORK\r\n" +
                    "  XP-Portfolio ......... this desktop, in vanilla JS\r\n" +
                    "  Images-Converter ..... client-side image conversion\r\n" +
                    "  Snake-game ........... canvas game with score tracking\r\n" +
                    "  Password-Generator ... configurable password tool\r\n\r\n" +
                    "CONTACT\r\n" +
                    "  " + MAILBOX_EMAIL + "\r\n" +
                    "  github.com/Marc0GitHub"
            })
        ], { icon: 'assets/start-mydocuments.png' });

        const desktop = folder('Desktop', [], { icon: 'assets/folder-icon.png' });

        const windows = folder('WINDOWS', [
            folder('system32', [
                file('cmd.exe', { kind: 'app', app: 'cmd', typeLabel: 'Application' }),
                file('notepad.exe', { kind: 'app', app: 'notepad', icon: 'assets/notepad-icon.png', typeLabel: 'Application' }),
                file('calc.exe', { kind: 'app', app: 'calc', typeLabel: 'Application' }),
                file('taskmgr.exe', { kind: 'app', app: 'taskmgr', typeLabel: 'Application' }),
                file('winmine.exe', { kind: 'app', app: 'minesweeper', icon: 'assets/start-minesweeper.png', typeLabel: 'Application' })
            ]),
            folder('Web', [folder('Wallpaper', WALLPAPERS.map(w => file(w.label + '.jpg', {
                kind: 'image', src: w.src, icon: 'assets/image-file-icon.png'
            })))]),
            folder('Media', [])
        ], { locked: true });

        const programFiles = folder('Program Files', [
            folder('Internet Explorer', [
                file('iexplore.exe', { kind: 'app', app: 'internet', icon: 'assets/internet-explorer-2-icon.png', typeLabel: 'Application' })
            ]),
            folder('Outlook Express', [
                file('msimn.exe', { kind: 'app', app: 'email', icon: 'assets/start-email.png', typeLabel: 'Application' })
            ]),
            folder('Accessories', [
                file('mspaint.exe', { kind: 'app', app: 'paint', icon: 'assets/paint-icon.png', typeLabel: 'Application' })
            ])
        ], { locked: true });

        return {
            version: SEED_VERSION,
            root: folder('Local Disk (C:)', [
                folder('Documents and Settings', [
                    folder(USER, [desktop, docs, folder('Favorites', [])], { icon: 'assets/start-avatar.png' })
                ]),
                programFiles,
                windows
            ], { icon: 'assets/start-mycomputer.png', locked: true })
        };
    }

    // ---- Load / persist ---------------------------------------------------
    let state = Store.get(KEY, null);
    if (!state || state.version !== SEED_VERSION || !state.root) state = seed();

    let saveTimer = null;
    function save() {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
            // Anything huge (pasted data-URL images) is dropped rather than
            // blowing the 5 MB storage quota and losing the whole tree.
            const ok = Store.set(KEY, state);
            if (!ok) console.warn('XP: could not persist the file system (storage full).');
        }, 250);
    }

    // ---- Path helpers -----------------------------------------------------
    function splitPath(path) {
        return String(path || '').replace(/^[A-Za-z]:\\?/, '').split('\\').filter(Boolean);
    }
    function join(path, name) {
        return path.replace(/\\+$/, '') + '\\' + name;
    }
    function parentOf(path) {
        const parts = String(path).split('\\');
        parts.pop();
        return parts.join('\\') || 'C:';
    }
    function basename(path) {
        const parts = String(path).split('\\').filter(Boolean);
        return parts[parts.length - 1] || path;
    }

    // Resolve a path to its node. 'C:' / 'C:\' is the drive root.
    function get(path) {
        const p = String(path || '').replace(/\\+$/, '');
        if (/^[A-Za-z]:$/i.test(p) || p === '') return state.root;
        let node = state.root;
        for (const part of splitPath(p)) {
            if (!node || node.type !== 'folder') return null;
            const next = (node.children || []).find(c => c.name.toLowerCase() === part.toLowerCase());
            if (!next) return null;
            node = next;
        }
        return node;
    }

    function list(path) {
        const node = get(path);
        if (!node || node.type !== 'folder') return [];
        return [...(node.children || [])];
    }

    function exists(path) { return !!get(path); }

    // A name that doesn't collide inside `parentPath` ("New Folder (2)").
    function uniqueName(parentPath, base) {
        const taken = new Set(list(parentPath).map(c => c.name.toLowerCase()));
        if (!taken.has(base.toLowerCase())) return base;
        const dot = base.lastIndexOf('.');
        const stem = dot > 0 ? base.slice(0, dot) : base;
        const ext = dot > 0 ? base.slice(dot) : '';
        let n = 2;
        while (taken.has(`${stem} (${n})${ext}`.toLowerCase())) n++;
        return `${stem} (${n})${ext}`;
    }

    function add(parentPath, node) {
        const parent = get(parentPath);
        if (!parent || parent.type !== 'folder') return null;
        node.name = uniqueName(parentPath, node.name);
        node.mtime = node.mtime || Date.now();
        parent.children = parent.children || [];
        parent.children.push(node);
        save();
        return node;
    }

    function remove(path) {
        const parent = get(parentOf(path));
        const name = basename(path);
        if (!parent || !parent.children) return null;
        const idx = parent.children.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
        if (idx === -1) return null;
        const [node] = parent.children.splice(idx, 1);
        save();
        return node;
    }

    function rename(path, newName) {
        const node = get(path);
        if (!node || node.locked) return false;
        const parent = parentOf(path);
        const clean = String(newName).replace(/[\\/:*?"<>|]/g, '').trim();
        if (!clean) return false;
        if (clean.toLowerCase() !== node.name.toLowerCase() && exists(join(parent, clean))) return false;
        node.name = clean;
        node.mtime = Date.now();
        save();
        return true;
    }

    function move(fromPath, toFolderPath) {
        const node = get(fromPath);
        const dest = get(toFolderPath);
        if (!node || !dest || dest.type !== 'folder' || node.locked) return false;
        if (toFolderPath.toLowerCase().startsWith(fromPath.toLowerCase() + '\\')) return false; // into itself
        remove(fromPath);
        add(toFolderPath, node);
        return true;
    }

    function writeFile(path, content) {
        const node = get(path);
        if (node && node.type === 'file') {
            node.content = content;
            node.mtime = Date.now();
            save();
            return node;
        }
        return add(parentOf(path), file(basename(path), {
            kind: 'text', icon: 'assets/notepad-icon.png', content
        }));
    }

    // ---- Presentation metadata -------------------------------------------
    const EXT_TYPES = {
        txt: 'Text Document', log: 'Text Document', ini: 'Configuration Settings',
        jpg: 'JPEG Image', jpeg: 'JPEG Image', png: 'PNG Image', gif: 'GIF Image',
        bmp: 'Bitmap Image', webp: 'WebP Image', svg: 'SVG Image',
        exe: 'Application', lnk: 'Shortcut', mp3: 'MP3 Audio', mp4: 'Video Clip',
        pdf: 'PDF Document', html: 'HTML Document', js: 'JScript Script File',
        css: 'Cascading Style Sheet', json: 'JSON File', md: 'Markdown Document'
    };

    function extOf(name) {
        const m = /\.([A-Za-z0-9]+)$/.exec(name || '');
        return m ? m[1].toLowerCase() : '';
    }

    function typeLabel(node) {
        if (!node) return '';
        if (node.typeLabel) return node.typeLabel;
        if (node.type === 'folder') return 'File Folder';
        if (node.kind === 'link') return 'Internet Shortcut';
        if (node.kind === 'app') return 'Application';
        return EXT_TYPES[extOf(node.name)] || ((extOf(node.name) || 'File').toUpperCase() + ' File');
    }

    function iconFor(node) {
        if (!node) return 'assets/image-file-icon.png';
        if (node.icon) return node.icon;
        if (node.type === 'folder') return 'assets/folder-icon.png';
        switch (node.kind) {
            case 'image': return 'assets/image-file-icon.png';
            case 'text': return 'assets/notepad-icon.png';
            case 'link': return 'assets/internet-explorer-2-icon.png';
            case 'app': return 'assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png';
            default: return 'assets/image-file-icon.png';
        }
    }

    // Byte size for the listing. Folders report their child count instead.
    function sizeOf(node) {
        if (!node) return 0;
        if (node.type === 'folder') return null;
        if (typeof node.size === 'number') return node.size;
        if (node.content != null) return new Blob([node.content]).size;
        if (node.src && node.src.startsWith('data:')) {
            const b64 = node.src.slice(node.src.indexOf(',') + 1);
            return Math.max(0, Math.floor(b64.length * 3 / 4));
        }
        const info = node.src ? getImageInfo(node.src) : null;
        if (info && info.bytes) return info.bytes;
        // A believable, stable stand-in derived from the name
        let h = 0;
        for (let i = 0; i < node.name.length; i++) h = (h * 31 + node.name.charCodeAt(i)) >>> 0;
        return 1024 + (h % 240000);
    }

    function reset() {
        state = seed();
        save();
    }

    return {
        USER, PROFILE, DESKTOP, DOCS, PICTURES, MUSIC,
        get, list, exists, add, remove, rename, move, writeFile,
        join, parentOf, basename, uniqueName, typeLabel, iconFor, sizeOf, extOf,
        folder, file, save, reset,
        get root() { return state.root; }
    };
})();


/* ===== 6. App registry & launcher =========================================
   One place that knows how to start every program on this desktop. The Start
   menu, Quick Launch, the Run box, Explorer double-clicks, the command
   prompt and desktop shortcuts all go through `launchApp`, so a program
   behaves identically no matter where it was started from.
   ========================================================================= */

// Programs that already have a desktop icon / iconContent entry.
const LEGACY_APPS = {
    bin: 'icon1', recyclebin: 'icon1',
    internet: 'icon2', iexplore: 'icon2', ie: 'icon2',
    projects: 'icon3', folder: 'icon3',
    paint: 'icon4', mspaint: 'icon4',
    notepad: 'icon5',
    snake: 'icon9',
    email: 'icon10', msimn: 'icon10', outlook: 'icon10',
    cmd: 'icon11', command: 'icon11',
    blog: 'icon12',
    minesweeper: 'icon13', winmine: 'icon13'
};

// Friendly display names, used by the taskbar, Task Manager and error boxes.
const APP_TITLES = {
    icon1: 'Recycle Bin', icon2: 'Internet Explorer', icon3: 'Projects',
    icon4: 'Paint', icon5: 'Notepad', icon9: 'Snake', icon10: 'Outlook Express',
    icon11: 'Command Prompt', icon12: "Marco's Blog", icon13: 'Minesweeper'
};

let virtualWindowSeq = 0;

// Build a throwaway icon element that carries a full window definition.
function makeVirtualIcon(id, spec) {
    const icon = document.createElement('div');
    icon.className = 'icon virtual-icon';
    icon.id = id;
    icon._windowSpec = spec;
    return icon;
}

// Open a window from a spec. Passing the same `id` twice focuses the window
// that is already open instead of stacking duplicates.
function openAppWindow(id, spec) {
    const existing = openWindows[id];
    if (existing) {
        if (existing.style.display === 'none') restoreWindow(existing);
        else { existing.style.display = 'flex'; bringToFront(existing); updateTaskbarItemState(existing); }
        return existing;
    }
    openWindow(makeVirtualIcon(id, spec));
    return openWindows[id];
}

// Open a window that can have several instances at once (Explorer, Notepad).
function openAppInstance(prefix, spec) {
    return openAppWindow(`${prefix}-${++virtualWindowSeq}`, spec);
}

function launchApp(appId, opts = {}) {
    XPAudio.unlock();
    const key = String(appId || '').toLowerCase().replace(/\.exe$/, '');

    const legacy = LEGACY_APPS[key];
    if (legacy) {
        let icon = document.getElementById(legacy);
        if (!icon) {
            // The desktop icon was deleted — start it from a virtual one
            icon = document.createElement('div');
            icon.className = 'icon virtual-icon';
            icon.id = legacy;
        }
        openWindow(icon);
        return openWindows[legacy];
    }

    switch (key) {
        case 'explorer':      return openExplorer(opts.path || VFS.DOCS);
        case 'mycomputer':    return openMyComputer();
        case 'mydocuments':   return openExplorer(VFS.DOCS);
        case 'mypictures':    return openExplorer(VFS.PICTURES, { view: 'thumbnails' });
        case 'mymusic':       return openExplorer(VFS.MUSIC);
        case 'desktopfolder': return openExplorer(VFS.DESKTOP);
        case 'controlpanel':
        case 'control':       return openControlPanel();
        case 'taskmgr':
        case 'taskmanager':   return openTaskManager();
        case 'calc':
        case 'calculator':    return openCalculator();
        case 'search':        return openSearch();
        case 'help':          return openHelpCenter();
        case 'display':
        case 'desk.cpl':      showDisplayProperties(opts.tab); return null;
        case 'run':           showRunDialog(); return null;
        case 'sysinfo':
        case 'winver':        showAboutWindows(); return null;
        default:
            showAppNotFound(startAppNames[key] || appId);
            return null;
    }
}


/* ===== 7. Windows Explorer =================================================
   The real thing: Back/Forward/Up history, an editable address bar, the five
   XP view modes, sortable Details columns, multi-select, rename in place,
   delete to the Recycle Bin, and the left-hand task panes that change with
   the selection.
   ========================================================================= */

const MY_COMPUTER = 'My Computer';

// The drives and shell folders shown inside My Computer.
function myComputerEntries() {
    return [
        { name: 'Local Disk (C:)', path: 'C:', icon: 'assets/start-mycomputer.png',
          type: 'folder', kind: 'drive', typeLabel: 'Local Disk',
          total: 80 * 1024 * 1024 * 1024, free: 62 * 1024 * 1024 * 1024, group: 'Hard Disk Drives' },
        { name: '3½ Floppy (A:)', path: 'A:', icon: 'assets/start-mycomputer.png',
          type: 'folder', kind: 'removable', typeLabel: '3½-Inch Floppy Disk',
          group: 'Devices with Removable Storage', empty: true },
        { name: 'CD Drive (D:)', path: 'D:', icon: 'assets/start-mediaplayer.png',
          type: 'folder', kind: 'removable', typeLabel: 'CD Drive',
          group: 'Devices with Removable Storage', empty: true },
        { name: 'My Documents', path: VFS.DOCS, icon: 'assets/start-mydocuments.png',
          type: 'folder', kind: 'folder', typeLabel: 'File Folder', group: 'Files Stored on This Computer' },
        { name: 'Shared Documents', path: `C:\\Documents and Settings\\All Users\\Documents`,
          icon: 'assets/start-mydocuments.png', type: 'folder', kind: 'shared',
          typeLabel: 'File Folder', group: 'Files Stored on This Computer', empty: true },
        { name: 'Control Panel', path: 'Control Panel', icon: 'assets/start-controlpanel.png',
          type: 'folder', kind: 'controlpanel', typeLabel: 'System Folder', group: 'Other' }
    ];
}

// Friendly title for the window / address bar.
function displayPathName(path) {
    if (path === MY_COMPUTER) return 'My Computer';
    if (/^[A-Za-z]:$/.test(path)) return VFS.root.name;
    return VFS.basename(path);
}

const EXPLORER_HTML = `
  <div class="exp2">
    <div class="exp2-menubar">
      <span class="exp2-menu-item" data-menu="file">File</span>
      <span class="exp2-menu-item" data-menu="edit">Edit</span>
      <span class="exp2-menu-item" data-menu="view">View</span>
      <span class="exp2-menu-item" data-menu="favorites">Favorites</span>
      <span class="exp2-menu-item" data-menu="tools">Tools</span>
      <span class="exp2-menu-item" data-menu="help">Help</span>
    </div>
    <div class="exp2-dropdown hidden" data-dropdown="file">
      <div class="exp2-dropdown-item" data-action="newfolder">New Folder</div>
      <div class="exp2-dropdown-item" data-action="newtext">New Text Document</div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="open">Open</div>
      <div class="exp2-dropdown-item" data-action="rename">Rename</div>
      <div class="exp2-dropdown-item" data-action="delete">Delete</div>
      <div class="exp2-dropdown-item" data-action="properties">Properties</div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="close">Close</div>
    </div>
    <div class="exp2-dropdown hidden" data-dropdown="edit">
      <div class="exp2-dropdown-item" data-action="cut">Cut<span class="exp2-accel">Ctrl+X</span></div>
      <div class="exp2-dropdown-item" data-action="copy">Copy<span class="exp2-accel">Ctrl+C</span></div>
      <div class="exp2-dropdown-item" data-action="paste">Paste<span class="exp2-accel">Ctrl+V</span></div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="selectall">Select All<span class="exp2-accel">Ctrl+A</span></div>
      <div class="exp2-dropdown-item" data-action="invertselection">Invert Selection</div>
    </div>
    <div class="exp2-dropdown hidden" data-dropdown="view">
      <div class="exp2-dropdown-item" data-action="view-thumbnails">Thumbnails</div>
      <div class="exp2-dropdown-item" data-action="view-tiles">Tiles</div>
      <div class="exp2-dropdown-item" data-action="view-icons">Icons</div>
      <div class="exp2-dropdown-item" data-action="view-list">List</div>
      <div class="exp2-dropdown-item" data-action="view-details">Details</div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="sort-name">Arrange Icons by Name</div>
      <div class="exp2-dropdown-item" data-action="sort-size">Arrange Icons by Size</div>
      <div class="exp2-dropdown-item" data-action="sort-type">Arrange Icons by Type</div>
      <div class="exp2-dropdown-item" data-action="sort-mtime">Arrange Icons by Modified</div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="refresh">Refresh<span class="exp2-accel">F5</span></div>
    </div>
    <div class="exp2-dropdown hidden" data-dropdown="favorites">
      <div class="exp2-dropdown-item" data-action="fav-docs">My Documents</div>
      <div class="exp2-dropdown-item" data-action="fav-pics">My Pictures</div>
      <div class="exp2-dropdown-item" data-action="fav-projects">Projects</div>
      <div class="exp2-dropdown-item" data-action="fav-desktop">Desktop</div>
    </div>
    <div class="exp2-dropdown hidden" data-dropdown="tools">
      <div class="exp2-dropdown-item" data-action="mapdrive">Map Network Drive...</div>
      <div class="exp2-dropdown-item" data-action="synchronize">Synchronize...</div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="folderoptions">Folder Options...</div>
    </div>
    <div class="exp2-dropdown hidden" data-dropdown="help">
      <div class="exp2-dropdown-item" data-action="helptopics">Help Topics</div>
      <div class="exp2-dropdown-divider"></div>
      <div class="exp2-dropdown-item" data-action="about">About Windows</div>
    </div>

    <div class="exp2-toolbar">
      <button class="exp2-tbtn exp2-back" data-tip="Back" disabled><span class="exp2-tico exp2-tico-back">&#10094;</span>Back</button>
      <button class="exp2-tbtn exp2-fwd exp2-icon-only" data-tip="Forward" disabled><span class="exp2-tico exp2-tico-fwd">&#10095;</span></button>
      <button class="exp2-tbtn exp2-up exp2-icon-only" data-tip="Up One Level"><span class="exp2-tico">&#8593;</span></button>
      <span class="exp2-tsep"></span>
      <button class="exp2-tbtn exp2-search-btn" data-tip="Search"><span class="exp2-tico">&#128269;</span>Search</button>
      <button class="exp2-tbtn exp2-folders-btn" data-tip="Show the folder tree"><span class="exp2-tico">&#128193;</span>Folders</button>
      <span class="exp2-tsep"></span>
      <button class="exp2-tbtn exp2-views-btn exp2-icon-only" data-tip="Views"><span class="exp2-tico">&#9783;</span><span class="exp2-caret">&#9662;</span></button>
      <div class="exp2-views-menu hidden">
        <div class="exp2-views-item" data-view="thumbnails">Thumbnails</div>
        <div class="exp2-views-item" data-view="tiles">Tiles</div>
        <div class="exp2-views-item" data-view="icons">Icons</div>
        <div class="exp2-views-item" data-view="list">List</div>
        <div class="exp2-views-item" data-view="details">Details</div>
      </div>
    </div>

    <div class="exp2-addressbar">
      <span class="exp2-address-label">Address</span>
      <div class="exp2-address-field">
        <img class="exp2-address-icon" src="assets/folder-icon.png" alt="">
        <input class="exp2-address-input" type="text" spellcheck="false" autocomplete="off">
      </div>
      <button class="exp2-go">&#10142; Go</button>
    </div>

    <div class="exp2-body">
      <div class="exp2-tree hidden"></div>
      <div class="exp2-sidebar"></div>
      <div class="exp2-files" tabindex="0">
        <div class="exp2-details-head hidden">
          <button class="exp2-col" data-sort="name" style="flex:2 1 40%">Name</button>
          <button class="exp2-col" data-sort="size" style="flex:0 0 90px">Size</button>
          <button class="exp2-col" data-sort="type" style="flex:1 1 22%">Type</button>
          <button class="exp2-col" data-sort="mtime" style="flex:1 1 24%">Date Modified</button>
        </div>
        <div class="exp2-items"></div>
        <div class="exp2-marquee"></div>
      </div>
    </div>

    <div class="exp2-statusbar">
      <span class="exp2-status-main"></span>
      <span class="exp2-status-size"></span>
      <span class="exp2-status-zone">My Computer</span>
    </div>
  </div>`;

function openExplorer(path, opts = {}) {
    return openAppInstance('explorer', {
        appId: 'explorer',
        title: displayPathName(path),
        icon: path === MY_COMPUTER ? 'assets/start-mycomputer.png' : 'assets/folder-icon.png',
        content: EXPLORER_HTML,
        width: Math.min(760, Math.max(560, window.innerWidth - 80)),
        height: Math.min(520, Math.max(400, workAreaHeight() - 80)),
        minW: 480, minH: 320,
        setup: (win) => setupExplorer(win, path, opts)
    });
}

function openMyComputer() {
    return openExplorer(MY_COMPUTER);
}

function setupExplorer(win, startPath, opts = {}) {
    const root = win.querySelector('.exp2');
    const itemsEl = win.querySelector('.exp2-items');
    const filesEl = win.querySelector('.exp2-files');
    const sidebarEl = win.querySelector('.exp2-sidebar');
    const treeEl = win.querySelector('.exp2-tree');
    const addressInput = win.querySelector('.exp2-address-input');
    const addressIcon = win.querySelector('.exp2-address-icon');
    const detailsHead = win.querySelector('.exp2-details-head');
    const marqueeEl = win.querySelector('.exp2-marquee');
    const statusMain = win.querySelector('.exp2-status-main');
    const statusSize = win.querySelector('.exp2-status-size');
    const titleEl = win.querySelector('.popup-title');
    const winIcon = win.querySelector('.popup-icon');

    const backBtn = win.querySelector('.exp2-back');
    const fwdBtn = win.querySelector('.exp2-fwd');
    const upBtn = win.querySelector('.exp2-up');
    const viewsBtn = win.querySelector('.exp2-views-btn');
    const viewsMenu = win.querySelector('.exp2-views-menu');

    let cwd = startPath;
    let history = [startPath];
    let historyIndex = 0;
    let view = opts.view || Store.get('xpExplorerView', 'tiles');
    let sortKey = 'name';
    let sortDir = 1;
    let entries = [];
    let selection = new Set();   // names of selected entries
    let lastAnchor = null;

    /* ---- reading the current folder ---- */
    function readEntries() {
        if (cwd === MY_COMPUTER) return myComputerEntries();
        if (cwd === VFS.DESKTOP) return desktopVfsEntries();
        const node = VFS.get(cwd);
        if (!node) return null;
        if (node.type !== 'folder') return [];
        return (node.children || []).map(child => ({
            name: child.name,
            path: VFS.join(cwd, child.name),
            node: child,
            type: child.type,
            kind: child.kind,
            icon: VFS.iconFor(child),
            typeLabel: VFS.typeLabel(child),
            mtime: child.mtime || 0,
            size: VFS.sizeOf(child),
            src: child.src,
            screenshot: child.screenshot,
            summary: child.summary
        }));
    }

    function sortEntries(list) {
        const dirFirst = (a, b) => (b.type === 'folder') - (a.type === 'folder');
        return [...list].sort((a, b) => {
            const d = dirFirst(a, b);
            if (d) return d;
            let r = 0;
            if (sortKey === 'name') r = a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            else if (sortKey === 'size') r = (a.size || 0) - (b.size || 0);
            else if (sortKey === 'type') r = String(a.typeLabel).localeCompare(String(b.typeLabel));
            else if (sortKey === 'mtime') r = (a.mtime || 0) - (b.mtime || 0);
            return r * sortDir;
        });
    }

    /* ---- rendering ---- */
    function render() {
        const read = readEntries();
        if (read === null) {
            itemsEl.innerHTML = `<div class="exp2-missing">
                <b>${escHtml(displayPathName(cwd))} is not accessible.</b>
                <p>The folder does not exist or has been moved.</p></div>`;
            entries = [];
            renderSidebar();
            updateStatus();
            return;
        }
        entries = sortEntries(read);

        root.className = 'exp2 exp2-view-' + view;
        detailsHead.classList.toggle('hidden', view !== 'details');
        detailsHead.querySelectorAll('.exp2-col').forEach(c => {
            c.classList.toggle('exp2-col-sorted', c.dataset.sort === sortKey);
            c.dataset.dir = sortDir > 0 ? 'asc' : 'desc';
        });

        if (!entries.length) {
            itemsEl.innerHTML = `<div class="exp2-empty">This folder is empty.</div>`;
        } else if (cwd === MY_COMPUTER) {
            renderGrouped();
        } else {
            itemsEl.innerHTML = entries.map(itemHtml).join('');
        }
        applySelectionClasses();
        updateStatus();
        renderSidebar();
    }

    // My Computer groups its contents under headings, like the real shell.
    const MY_COMPUTER_GROUPS = ['Hard Disk Drives', 'Devices with Removable Storage',
        'Files Stored on This Computer', 'Other'];

    function renderGrouped() {
        const groups = [];
        entries.forEach(e => {
            let g = groups.find(x => x.name === e.group);
            if (!g) { g = { name: e.group, items: [] }; groups.push(g); }
            g.items.push(e);
        });
        groups.sort((a, b) => MY_COMPUTER_GROUPS.indexOf(a.name) - MY_COMPUTER_GROUPS.indexOf(b.name));
        itemsEl.innerHTML = groups.map(g => `
            <div class="exp2-group">
                <div class="exp2-group-title">${escHtml(g.name)}</div>
                <div class="exp2-group-items">${g.items.map(itemHtml).join('')}</div>
            </div>`).join('');
    }

    function subtitleFor(e) {
        if (e.kind === 'drive') return `${formatBytes(e.free)} free of ${formatBytes(e.total)}`;
        if (e.type === 'folder') return e.typeLabel;
        if (e.kind === 'link') return e.typeLabel;
        return e.typeLabel + (e.size ? ' &nbsp;' + formatBytes(e.size) : '');
    }

    function itemHtml(e) {
        const thumb = (view === 'thumbnails' && (e.kind === 'image' || e.screenshot))
            ? `<div class="exp2-thumb"><img src="${escAttr(e.src || e.screenshot)}" alt="" loading="lazy"></div>`
            : `<img class="exp2-ico" src="${escAttr(e.icon)}" alt="">`;
        const driveBar = e.kind === 'drive'
            ? `<div class="exp2-drivebar"><i style="width:${Math.round((1 - e.free / e.total) * 100)}%"></i></div>`
            : '';
        return `
          <div class="exp2-item" data-name="${escAttr(e.name)}" title="${escAttr(e.name)}">
            ${thumb}
            <div class="exp2-meta">
              <span class="exp2-name">${escHtml(e.name)}</span>
              <span class="exp2-sub">${subtitleFor(e)}</span>
              ${driveBar}
            </div>
            <span class="exp2-cell exp2-cell-size">${e.type === 'folder' ? '' : formatBytes(e.size)}</span>
            <span class="exp2-cell exp2-cell-type">${escHtml(e.typeLabel)}</span>
            <span class="exp2-cell exp2-cell-date">${e.mtime ? formatDate(e.mtime) : ''}</span>
          </div>`;
    }

    function applySelectionClasses() {
        itemsEl.querySelectorAll('.exp2-item').forEach(el => {
            el.classList.toggle('selected', selection.has(el.dataset.name));
        });
    }

    function updateStatus() {
        const sel = selectedEntries();
        if (sel.length === 1) {
            const e = sel[0];
            statusMain.textContent = `${e.name}`;
            statusSize.textContent = e.type === 'folder' ? e.typeLabel : formatBytes(e.size);
        } else if (sel.length > 1) {
            const bytes = sel.reduce((n, e) => n + (e.size || 0), 0);
            statusMain.textContent = `${sel.length} objects selected`;
            statusSize.textContent = formatBytes(bytes);
        } else {
            statusMain.textContent = `${entries.length} object${entries.length === 1 ? '' : 's'}`;
            const bytes = entries.reduce((n, e) => n + (e.size || 0), 0);
            statusSize.textContent = bytes ? formatBytes(bytes) : '';
        }
        addressInput.value = cwd === MY_COMPUTER ? 'My Computer' : cwd;
        const icon = cwd === MY_COMPUTER ? 'assets/start-mycomputer.png'
            : (VFS.get(cwd) ? VFS.iconFor(VFS.get(cwd)) : 'assets/folder-icon.png');
        addressIcon.src = icon;
        if (winIcon) winIcon.src = icon;
        const label = displayPathName(cwd);
        if (titleEl) titleEl.textContent = label;
        const tbItem = document.querySelector(`.taskbar-item[data-owner="${win.dataset.owner}"] span`);
        if (tbItem) tbItem.textContent = label;
        backBtn.disabled = historyIndex <= 0;
        fwdBtn.disabled = historyIndex >= history.length - 1;
        upBtn.disabled = cwd === MY_COMPUTER;
    }

    /* ---- the XP task panes on the left ---- */
    function renderSidebar() {
        const sel = selectedEntries();
        const one = sel.length === 1 ? sel[0] : null;
        const panes = [];

        if (cwd !== MY_COMPUTER) {
            const tasks = one
                ? [
                    one.type === 'folder'
                        ? { label: 'Open this folder', act: () => openEntry(one) }
                        : { label: 'Open this file', act: () => openEntry(one) },
                    { label: 'Rename this item', act: () => beginRename(one.name) },
                    { label: 'Move this item', act: () => showNotImplemented('Move') },
                    { label: 'Copy this item', act: () => copySelection() },
                    { label: 'Delete this item', act: () => deleteSelection() }
                ]
                : [
                    { label: 'Make a new folder', act: () => newFolderHere() },
                    { label: 'Make a new text document', act: () => newTextHere() },
                    { label: 'View this folder as a slide show', act: () => slideshowHere(), only: 'images' },
                    { label: 'Publish this folder to the Web', act: () => showNotImplemented('Web Publishing Wizard') }
                ];
            panes.push({ title: one ? 'File and Folder Tasks' : 'File and Folder Tasks', items: tasks.filter(t => {
                if (t.only === 'images') return entries.some(e => e.kind === 'image');
                return true;
            }) });
        } else {
            panes.push({ title: 'System Tasks', items: [
                { label: 'View system information', act: () => showAboutWindows() },
                { label: 'Add or remove programs', act: () => openControlPanel('Add or Remove Programs') },
                { label: 'Change a setting', act: () => openControlPanel() }
            ]});
        }

        // Other Places: the parent folder first, then the usual shortcuts,
        // skipping anything that is the folder we are already looking at.
        const others = [];
        const seen = new Set();
        const addPlace = (label, path, act) => {
            const key = (path || label).toLowerCase();
            if (seen.has(key) || (path && path.toLowerCase() === cwd.toLowerCase())) return;
            seen.add(key);
            others.push({ label, act: act || (() => navigate(path)) });
        };
        if (cwd !== MY_COMPUTER) {
            const parent = VFS.parentOf(cwd);
            if (/^[A-Za-z]:$/.test(cwd)) addPlace('My Computer', MY_COMPUTER);
            else addPlace(displayPathName(parent), parent);
        }
        addPlace('My Documents', VFS.DOCS);
        addPlace('My Pictures', VFS.PICTURES);
        addPlace('My Computer', MY_COMPUTER);
        addPlace('My Network Places', null, () => showNotImplemented('My Network Places'));
        panes.push({ title: 'Other Places', items: others });

        const detailRows = one
            ? [['', `<b>${escHtml(one.name)}</b>`], ['', escHtml(one.typeLabel)],
               one.type === 'folder' ? null : ['Size', formatBytes(one.size)],
               one.mtime ? ['Modified', formatDate(one.mtime)] : null].filter(Boolean)
            : [['', `<b>${escHtml(displayPathName(cwd))}</b>`], ['', 'File Folder'],
               ['Contains', `${entries.length} item${entries.length === 1 ? '' : 's'}`]];

        sidebarEl.innerHTML = panes.map(p => `
            <div class="exp2-pane">
                <div class="exp2-pane-title">${escHtml(p.title)}</div>
                <div class="exp2-pane-body">
                    ${p.items.map((it, i) => `<button class="exp2-pane-item" data-pane="${escAttr(p.title)}" data-i="${i}">${escHtml(it.label)}</button>`).join('')}
                </div>
            </div>`).join('') + `
            <div class="exp2-pane">
                <div class="exp2-pane-title">Details</div>
                <div class="exp2-pane-body exp2-details-pane">
                    ${detailRows.map(([k, v]) => `<div>${k ? `<span class="exp2-dk">${escHtml(k)}:</span> ` : ''}${v}</div>`).join('')}
                </div>
            </div>`;

        sidebarEl.querySelectorAll('.exp2-pane-item').forEach(btn => {
            const pane = panes.find(p => p.title === btn.dataset.pane);
            const item = pane && pane.items[+btn.dataset.i];
            if (item) btn.addEventListener('click', () => { XPAudio.play('click'); item.act(); });
        });
    }

    /* ---- selection ---- */
    function selectedEntries() {
        return entries.filter(e => selection.has(e.name));
    }
    function selectOnly(name) {
        selection = new Set(name ? [name] : []);
        lastAnchor = name;
        applySelectionClasses();
        updateStatus();
        renderSidebar();
    }
    function selectAll() {
        selection = new Set(entries.map(e => e.name));
        applySelectionClasses();
        updateStatus();
        renderSidebar();
    }
    function selectRange(toName) {
        const from = entries.findIndex(e => e.name === lastAnchor);
        const to = entries.findIndex(e => e.name === toName);
        if (from === -1 || to === -1) return selectOnly(toName);
        const [a, b] = from < to ? [from, to] : [to, from];
        selection = new Set(entries.slice(a, b + 1).map(e => e.name));
        applySelectionClasses();
        updateStatus();
        renderSidebar();
    }

    /* ---- navigation ---- */
    function navigate(path, addToHistory = true) {
        if (!path) return;
        if (path !== MY_COMPUTER && path !== 'Control Panel' && !/^[A-Za-z]:$/.test(path) && !VFS.exists(path)) {
            showInfoDialog('Explorer', 'assets/error-icon.png',
                `Windows cannot find <b>${escHtml(path)}</b>.<br><br>Check the spelling and try again.`);
            return;
        }
        if (path === 'Control Panel') { openControlPanel(); return; }
        cwd = path;
        selection.clear();
        lastAnchor = null;
        if (addToHistory) {
            history = history.slice(0, historyIndex + 1);
            history.push(path);
            historyIndex = history.length - 1;
        }
        XPAudio.play('navigate');
        render();
        filesEl.scrollTop = 0;
    }

    function goUp() {
        if (cwd === MY_COMPUTER) return;
        if (/^[A-Za-z]:$/.test(cwd)) return navigate(MY_COMPUTER);
        const parent = VFS.parentOf(cwd);
        navigate(/^[A-Za-z]:$/.test(parent) ? parent : parent);
    }

    // The Desktop folder is a live view of the icons on screen, so every
    // operation there has to go through the desktop instead of the tree.
    const isDesktop = () => cwd === VFS.DESKTOP;

    /* ---- opening items ---- */
    function openEntry(e) {
        if (!e) return;
        if (e.desktopIcon) { openIconWindow(e.desktopIcon); return; }
        if (e.kind === 'controlpanel') return openControlPanel();
        if (e.kind === 'removable') {
            XPAudio.play('error');
            return showInfoDialog(displayPathName(cwd), 'assets/error-icon.png',
                `<b>${escHtml(e.name)}</b> is not accessible.<br><br>The device is not ready.`);
        }
        if (e.kind === 'shared') {
            return showInfoDialog('Shared Documents', 'assets/folder-icon.png', 'This folder is empty.');
        }
        if (e.type === 'folder' || e.kind === 'drive') return navigate(e.path);
        openVfsFile(e.node || e, e.path);
    }

    /* ---- file operations ---- */
    function newFolderHere() {
        if (cwd === MY_COMPUTER) return;
        if (isDesktop()) {
            newFolderOnDesktop();
            render();
            return;
        }
        const node = VFS.add(cwd, VFS.folder(VFS.uniqueName(cwd, 'New Folder'), []));
        if (!node) return;
        syncDesktopFromVfs(cwd);
        render();
        beginRename(node.name);
    }
    function newTextHere() {
        if (cwd === MY_COMPUTER) return;
        if (isDesktop()) {
            newTextFileOnDesktop();
            render();
            return;
        }
        const node = VFS.add(cwd, VFS.file(VFS.uniqueName(cwd, 'New Text Document.txt'), {
            kind: 'text', icon: 'assets/notepad-icon.png', content: ''
        }));
        if (!node) return;
        syncDesktopFromVfs(cwd);
        render();
        beginRename(node.name);
    }
    function copySelection() {
        const sel = selectedEntries();
        if (!sel.length || isDesktop()) return;
        clipboard = { mode: 'copy', from: cwd, names: sel.map(e => e.name) };
        statusMain.textContent = `${sel.length} item${sel.length === 1 ? '' : 's'} copied`;
    }
    function cutSelection() {
        const sel = selectedEntries();
        if (!sel.length || isDesktop()) return;
        clipboard = { mode: 'cut', from: cwd, names: sel.map(e => e.name) };
        statusMain.textContent = `${sel.length} item${sel.length === 1 ? '' : 's'} ready to move`;
    }
    function pasteHere() {
        if (!clipboard || cwd === MY_COMPUTER) return;
        if (isDesktop()) { pasteClipboardToDesktop(); render(); return; }
        clipboard.names.forEach(name => {
            const src = VFS.join(clipboard.from, name);
            const node = VFS.get(src);
            if (!node) return;
            if (clipboard.mode === 'cut') VFS.move(src, cwd);
            else VFS.add(cwd, JSON.parse(JSON.stringify(node)));
        });
        if (clipboard.mode === 'cut') { syncDesktopFromVfs(clipboard.from); clipboard = null; }
        syncDesktopFromVfs(cwd);
        refreshExplorerWindows();
    }
    function deleteSelection() {
        const sel = selectedEntries();
        if (!sel.length || cwd === MY_COMPUTER) return;
        const removable = isDesktop()
            ? sel.filter(e => isDeletable(e.desktopIcon))
            : sel.filter(e => !(e.node && e.node.locked));
        if (!removable.length) {
            XPAudio.play('error');
            showInfoDialog('Delete', 'assets/error-icon.png',
                sel.length === 1
                    ? `<b>${escHtml(sel[0].name)}</b> is a system item and cannot be deleted.`
                    : 'These are system items and cannot be deleted.');
            return;
        }
        const label = removable.length === 1 ? `"${removable[0].name}"` : `these ${removable.length} items`;
        showConfirmDialog('Confirm Delete', 'assets/bin-icon.png',
            `Are you sure you want to send ${escHtml(label)} to the Recycle Bin?`, () => {
                if (isDesktop()) moveIconsToBin(removable.map(e => e.desktopIcon));
                else {
                    removable.forEach(e => recycleVfsPath(VFS.join(cwd, e.name)));
                    XPAudio.play('recycle');
                }
                selection.clear();
                refreshExplorerWindows();
            });
    }
    function slideshowHere() {
        const images = entries.filter(e => e.kind === 'image');
        if (!images.length) return;
        openImageFileWindow(images[0].src, images[0].name,
            images.map(i => ({ src: i.src, name: i.name })));
    }
    function propertiesForSelection() {
        const sel = selectedEntries();
        if (!sel.length) {
            const n = VFS.get(cwd);
            return showPropertiesDialog(displayPathName(cwd), addressIcon.src, [
                ['Type', 'File Folder'],
                ['Location', VFS.parentOf(cwd)],
                ['Contains', `${entries.length} item${entries.length === 1 ? '' : 's'}`],
                ['Created', n && n.mtime ? formatDate(n.mtime) : '\u2014']
            ]);
        }
        const e = sel[0];
        if (e.desktopIcon) return showIconProperties(e.desktopIcon);
        showPropertiesDialog(e.name, e.icon, [
            ['Type', e.typeLabel],
            ['Location', cwd],
            ['Size', e.type === 'folder' ? `${(e.node && e.node.children || []).length} items` : formatBytes(e.size)],
            ['Modified', e.mtime ? formatDate(e.mtime) : '\u2014']
        ]);
    }

    /* ---- rename in place ---- */
    function beginRename(name) {
        const el = itemsEl.querySelector(`.exp2-item[data-name="${CSS.escape(name)}"] .exp2-name`);
        if (!el) return;
        const input = document.createElement('input');
        input.className = 'exp2-rename';
        input.value = name;
        el.replaceWith(input);
        input.focus();
        const dot = name.lastIndexOf('.');
        input.setSelectionRange(0, dot > 0 ? dot : name.length);

        let done = false;
        const finish = (save) => {
            if (done) return;
            done = true;
            const next = input.value.trim();
            if (save && next && next !== name && isDesktop()) {
                const entry = entries.find(x => x.name === name);
                const span = entry && entry.desktopIcon && entry.desktopIcon.querySelector('span');
                if (span) {
                    span.textContent = next;
                    if (entry.desktopIcon.dataset.name) entry.desktopIcon.dataset.name = next;
                    entry.desktopIcon.dataset.mtime = String(Date.now());
                    selection = new Set([next]);
                }
                refreshExplorerWindows();
                return;
            }
            if (save && next && next !== name) {
                if (!VFS.rename(VFS.join(cwd, name), next)) {
                    XPAudio.play('error');
                    showInfoDialog('Error Renaming File or Folder', 'assets/error-icon.png',
                        `Cannot rename <b>${escHtml(name)}</b>: a file with that name already exists.`);
                } else {
                    syncDesktopFromVfs(cwd);
                    selection = new Set([next]);
                }
            }
            refreshExplorerWindows();
        };
        input.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (e.key === 'Enter') { e.preventDefault(); finish(true); }
            else if (e.key === 'Escape') { e.preventDefault(); finish(false); }
        });
        input.addEventListener('blur', () => finish(true));
    }

    /* ---- mouse handling in the file area ---- */
    itemsEl.addEventListener('mousedown', (e) => {
        const item = e.target.closest('.exp2-item');
        if (!item) return;
        const name = item.dataset.name;
        if (e.shiftKey) selectRange(name);
        else if (e.ctrlKey || e.metaKey) {
            selection.has(name) ? selection.delete(name) : selection.add(name);
            lastAnchor = name;
            applySelectionClasses(); updateStatus(); renderSidebar();
        } else if (!selection.has(name)) {
            selectOnly(name);
        }
    });

    itemsEl.addEventListener('dblclick', (e) => {
        const item = e.target.closest('.exp2-item');
        if (!item) return;
        openEntry(entries.find(x => x.name === item.dataset.name));
    });

    itemsEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const item = e.target.closest('.exp2-item');
        if (item) {
            if (!selection.has(item.dataset.name)) selectOnly(item.dataset.name);
            const entry = entries.find(x => x.name === item.dataset.name);
            const many = selection.size > 1;
            showContextMenu(e.clientX, e.clientY, [
                { label: 'Open', icon: entry.icon, action: () => openEntry(entry) },
                entry.kind === 'image' ? { label: 'Set as Desktop Background', action: () => { setWallpaper(entry.src); notify({ title: 'Desktop', text: 'Background changed.', icon: SysIcons.info }); } } : null,
                { sep: true },
                { label: 'Cut', action: () => cutSelection() },
                { label: 'Copy', action: () => copySelection() },
                { sep: true },
                { label: 'Delete', icon: 'assets/bin-icon.png', action: () => deleteSelection() },
                { label: 'Rename', disabled: many, action: () => beginRename(entry.name) },
                { sep: true },
                { label: 'Properties', action: () => propertiesForSelection() }
            ].filter(Boolean));
        } else {
            selectOnly(null);
            showContextMenu(e.clientX, e.clientY, [
                { label: 'View', submenu: ['Thumbnails', 'Tiles', 'Icons', 'List', 'Details'].map(v => ({
                    label: v, action: () => setView(v.toLowerCase())
                })) },
                { label: 'Arrange Icons by', submenu: [
                    { label: 'Name', action: () => setSort('name') },
                    { label: 'Size', action: () => setSort('size') },
                    { label: 'Type', action: () => setSort('type') },
                    { label: 'Modified', action: () => setSort('mtime') }
                ]},
                { label: 'Refresh', action: () => render() },
                { sep: true },
                { label: 'Paste', disabled: !clipboard, action: () => pasteHere() },
                { sep: true },
                { label: 'New', submenu: [
                    { label: 'Folder', icon: 'assets/folder-icon.png', action: () => newFolderHere() },
                    { label: 'Text Document', icon: 'assets/notepad-icon.png', action: () => newTextHere() }
                ]},
                { sep: true },
                { label: 'Properties', action: () => propertiesForSelection() }
            ]);
        }
    });

    // Rubber-band selection over the empty part of the listing
    filesEl.addEventListener('mousedown', (e) => {
        if (e.button !== 0 || e.target.closest('.exp2-item')) return;
        if (!e.ctrlKey && !e.metaKey) selectOnly(null);
        const fr = filesEl.getBoundingClientRect();
        const sx = e.clientX, sy = e.clientY;
        let moved = false;
        const onMove = (ev) => {
            if (!moved && Math.hypot(ev.clientX - sx, ev.clientY - sy) < 4) return;
            moved = true;
            marqueeEl.style.display = 'block';
            marqueeEl.style.left = (Math.min(sx, ev.clientX) - fr.left + filesEl.scrollLeft) + 'px';
            marqueeEl.style.top = (Math.min(sy, ev.clientY) - fr.top + filesEl.scrollTop) + 'px';
            marqueeEl.style.width = Math.abs(ev.clientX - sx) + 'px';
            marqueeEl.style.height = Math.abs(ev.clientY - sy) + 'px';
            const box = { left: Math.min(sx, ev.clientX), right: Math.max(sx, ev.clientX),
                          top: Math.min(sy, ev.clientY), bottom: Math.max(sy, ev.clientY) };
            selection = new Set();
            itemsEl.querySelectorAll('.exp2-item').forEach(el => {
                if (rectsIntersect(box, el.getBoundingClientRect())) selection.add(el.dataset.name);
            });
            applySelectionClasses();
            updateStatus();
        };
        const onUp = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            marqueeEl.style.display = 'none';
            if (moved) renderSidebar();
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });

    /* ---- keyboard ---- */
    function onKeyDown(e) {
        if (!win.classList.contains('active-window')) return;
        if (e.target.closest('input, textarea')) return;
        const key = e.key;
        if ((e.ctrlKey || e.metaKey) && key.toLowerCase() === 'a') { e.preventDefault(); selectAll(); }
        else if ((e.ctrlKey || e.metaKey) && key.toLowerCase() === 'c') { e.preventDefault(); copySelection(); }
        else if ((e.ctrlKey || e.metaKey) && key.toLowerCase() === 'x') { e.preventDefault(); cutSelection(); }
        else if ((e.ctrlKey || e.metaKey) && key.toLowerCase() === 'v') { e.preventDefault(); pasteHere(); }
        else if (key === 'F5') { e.preventDefault(); render(); }
        else if (key === 'F2') { e.preventDefault(); const s = selectedEntries()[0]; if (s) beginRename(s.name); }
        else if (key === 'Delete') { e.preventDefault(); deleteSelection(); }
        else if (key === 'Enter') { e.preventDefault(); selectedEntries().forEach(openEntry); }
        else if (key === 'Backspace') { e.preventDefault(); goUp(); }
        else if (key === 'ArrowDown' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowLeft') {
            e.preventDefault();
            if (!entries.length) return;
            const cur = entries.findIndex(x => x.name === lastAnchor);
            const step = (key === 'ArrowDown' || key === 'ArrowRight') ? 1 : -1;
            const next = Math.min(entries.length - 1, Math.max(0, cur === -1 ? 0 : cur + step));
            selectOnly(entries[next].name);
            const el = itemsEl.querySelector(`.exp2-item[data-name="${CSS.escape(entries[next].name)}"]`);
            if (el) el.scrollIntoView({ block: 'nearest' });
        }
    }
    document.addEventListener('keydown', onKeyDown);

    /* ---- toolbar / address bar ---- */
    backBtn.addEventListener('click', () => {
        if (historyIndex > 0) { historyIndex--; navigate(history[historyIndex], false); }
    });
    fwdBtn.addEventListener('click', () => {
        if (historyIndex < history.length - 1) { historyIndex++; navigate(history[historyIndex], false); }
    });
    upBtn.addEventListener('click', goUp);
    win.querySelector('.exp2-search-btn').addEventListener('click', () => openSearch(cwd));
    win.querySelector('.exp2-folders-btn').addEventListener('click', () => {
        treeEl.classList.toggle('hidden');
        if (!treeEl.classList.contains('hidden')) renderTree();
    });
    win.querySelector('.exp2-go').addEventListener('click', () => navigate(addressInput.value.trim()));
    addressInput.addEventListener('keydown', (e) => {
        e.stopPropagation();
        if (e.key === 'Enter') navigate(addressInput.value.trim());
    });
    addressInput.addEventListener('focus', () => addressInput.select());

    function setView(v) {
        view = v;
        Store.set('xpExplorerView', v);
        viewsMenu.classList.add('hidden');
        render();
    }
    function setSort(key) {
        if (sortKey === key) sortDir *= -1; else { sortKey = key; sortDir = 1; }
        render();
    }
    viewsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        viewsMenu.classList.toggle('hidden');
    });
    viewsMenu.querySelectorAll('.exp2-views-item').forEach(item =>
        item.addEventListener('click', () => setView(item.dataset.view)));
    document.addEventListener('click', () => viewsMenu.classList.add('hidden'));
    detailsHead.querySelectorAll('.exp2-col').forEach(col =>
        col.addEventListener('click', () => setSort(col.dataset.sort)));

    /* ---- the optional folder tree ---- */
    function renderTree() {
        function branch(node, path, depth) {
            const kids = (node.children || []).filter(c => c.type === 'folder');
            const open = cwd.toLowerCase().startsWith(path.toLowerCase());
            return `<div class="exp2-tree-node ${path === cwd ? 'active' : ''}" data-path="${escAttr(path)}"
                       style="padding-left:${8 + depth * 14}px">
                      <img src="${escAttr(VFS.iconFor(node))}" alt="">${escHtml(node.name)}
                    </div>` +
                (open ? kids.map(k => branch(k, VFS.join(path, k.name), depth + 1)).join('') : '');
        }
        treeEl.innerHTML = `<div class="exp2-tree-head">Folders</div>` +
            `<div class="exp2-tree-node ${cwd === MY_COMPUTER ? 'active' : ''}" data-path="${MY_COMPUTER}" style="padding-left:8px">
               <img src="assets/start-mycomputer.png" alt="">My Computer</div>` +
            branch(VFS.root, 'C:', 1);
        treeEl.querySelectorAll('.exp2-tree-node').forEach(n =>
            n.addEventListener('click', () => navigate(n.dataset.path)));
    }

    /* ---- menus ---- */
    setupMenubar(win, 'exp2-menu-item', 'exp2-dropdown');
    setupDropdownActions(win, 'exp2-dropdown-item', {
        newfolder: newFolderHere, newtext: newTextHere,
        open: () => selectedEntries().forEach(openEntry),
        rename: () => { const s = selectedEntries()[0]; if (s) beginRename(s.name); },
        delete: deleteSelection,
        properties: propertiesForSelection,
        close: () => closeWindow(win),
        cut: cutSelection, copy: copySelection, paste: pasteHere,
        selectall: selectAll,
        invertselection: () => {
            const inv = entries.filter(e => !selection.has(e.name)).map(e => e.name);
            selection = new Set(inv);
            applySelectionClasses(); updateStatus(); renderSidebar();
        },
        'view-thumbnails': () => setView('thumbnails'),
        'view-tiles': () => setView('tiles'),
        'view-icons': () => setView('icons'),
        'view-list': () => setView('list'),
        'view-details': () => setView('details'),
        'sort-name': () => setSort('name'),
        'sort-size': () => setSort('size'),
        'sort-type': () => setSort('type'),
        'sort-mtime': () => setSort('mtime'),
        refresh: () => render(),
        'fav-docs': () => navigate(VFS.DOCS),
        'fav-pics': () => navigate(VFS.PICTURES),
        'fav-projects': () => navigate(VFS.join(VFS.DOCS, 'Projects')),
        'fav-desktop': () => navigate(VFS.DESKTOP),
        mapdrive: () => showNotImplemented('Map Network Drive'),
        synchronize: () => showNotImplemented('Synchronize'),
        folderoptions: () => showNotImplemented('Folder Options'),
        helptopics: () => openHelpCenter(),
        about: () => showAboutWindows()
    });

    win._explorerRefresh = () => render();
    win._explorerPath = () => cwd;
    addCleanup(win, () => document.removeEventListener('keydown', onKeyDown));

    render();
}

// Shared clipboard for Explorer cut/copy/paste.
let clipboard = null;

function getExplorerWindows() {
    return [...document.querySelectorAll('.popup')].filter(w => typeof w._explorerRefresh === 'function');
}
function refreshExplorerWindows() {
    getExplorerWindows().forEach(w => w._explorerRefresh());
}


/* ===== 8. Desktop <-> file system bridge ==================================
   The Desktop folder is special: what is on screen *is* the folder, so
   Explorer reads the live icons instead of a stored copy. Everything else
   lives in the VFS.
   ========================================================================= */
function desktopVfsEntries() {
    return [...document.querySelectorAll('.desktop .icon')].map(icon => {
        const info = getIconInfo(icon);
        const img = icon.querySelector('img');
        const isFolder = icon.classList.contains('folder-new') || icon.id === 'icon3';
        return {
            name: info.name,
            path: VFS.join(VFS.DESKTOP, info.name),
            desktopIcon: icon,
            type: isFolder ? 'folder' : 'file',
            kind: icon.classList.contains('image-file') ? 'image'
                : icon.classList.contains('text-file') ? 'text'
                : isFolder ? 'folder' : 'app',
            icon: img ? img.getAttribute('src') : 'assets/image-file-icon.png',
            typeLabel: info.type,
            mtime: info.mtime,
            size: icon.classList.contains('image-file') ? (getImageInfo(icon.dataset.image).bytes || 0) : info.sizeValue,
            src: icon.dataset.image
        };
    });
}

// After a VFS change, keep every open view in sync.
function syncDesktopFromVfs() {
    refreshExplorerWindows();
}

// Send a VFS node to the Recycle Bin (restorable).
function recycleVfsPath(path) {
    const node = VFS.get(path);
    if (!node || node.locked) return false;
    VFS.remove(path);
    recycleBin.push({
        type: 'vfs',
        label: node.name,
        iconSrc: VFS.iconFor(node),
        fromPath: VFS.parentOf(path),
        node
    });
    refreshBinWindows();
    return true;
}

// Open a file from the file system with the program that handles it.
function openVfsFile(node, path) {
    if (!node) return;
    if (node.kind !== 'app') {
        rememberRecent({ name: node.name, path, icon: VFS.iconFor(node) });
    }
    switch (node.kind) {
        case 'image': {
            const siblings = VFS.list(VFS.parentOf(path))
                .filter(n => n.kind === 'image')
                .map(n => ({ src: n.src, name: n.name }));
            openImageFileWindow(node.src, node.name, siblings);
            break;
        }
        case 'text':
            openNotepadFile(path);
            break;
        case 'link':
            window.open(node.url, '_blank', 'noopener,noreferrer');
            break;
        case 'app':
            launchApp(node.app || VFS.basename(node.name));
            break;
        default:
            XPAudio.play('error');
            showInfoDialog('Windows', 'assets/error-icon.png',
                `Windows cannot open this file:<br><br><b>${escHtml(node.name)}</b><br><br>` +
                `There is no program associated with this file type.`);
    }
}

// Notepad bound to a real file, so File > Save writes back to the tree.
function openNotepadFile(path) {
    const node = VFS.get(path);
    if (!node) return null;
    // Keyed by path, so re-opening a document focuses the window it is in
    const key = 'notepad-file:' + path.toLowerCase();
    return openAppWindow(key, {
        appId: 'notepad',
        title: node.name + ' - Notepad',
        icon: 'assets/notepad-icon.png',
        content: iconContent.icon5.content,
        width: 520, height: 400, minW: 300, minH: 200,
        setup: (win) => setupNotepad(win, false, node.content || '', { path, name: node.name })
    });
}


/* ===== 9. Run, Search, About =============================================== */

function showRunDialog() {
    const recent = Store.get('xpRunHistory', []);
    const dlg = showDialog({
        title: 'Run',
        icon: 'assets/start-run.png',
        width: 380,
        className: 'xp-run-dialog',
        bodyHtml: `
            <div class="xp-run-row">
                <img class="xp-run-img" src="assets/start-run.png" alt="">
                <p>Type the name of a program, folder, document, or Internet
                   resource, and Windows will open it for you.</p>
            </div>
            <label class="xp-field">
                <span>Open:</span>
                <input class="xp-run-input" type="text" list="xp-run-list" spellcheck="false" autocomplete="off">
                <datalist id="xp-run-list">
                    ${['notepad', 'mspaint', 'cmd', 'iexplore', 'explorer', 'control', 'taskmgr', 'calc', 'winmine']
                        .concat(recent).map(v => `<option value="${escAttr(v)}"></option>`).join('')}
                </datalist>
            </label>`,
        buttons: [
            { label: 'OK', primary: true, action: (el) => { runCommand(el.querySelector('.xp-run-input').value); } },
            { label: 'Cancel' },
            { label: 'Browse...', action: () => { openExplorer(VFS.DOCS); } }
        ]
    });
    setTimeout(() => {
        const input = dlg.el.querySelector('.xp-run-input');
        if (input) { input.focus(); input.value = recent[0] || ''; input.select(); }
    }, 40);
    return dlg;
}

// The Run box understands program names, URLs and file-system paths.
function runCommand(raw) {
    const value = String(raw || '').trim();
    if (!value) return;
    const history = [value, ...Store.get('xpRunHistory', []).filter(v => v !== value)].slice(0, 10);
    Store.set('xpRunHistory', history);

    if (/^(https?:\/\/|www\.)/i.test(value) || looksLikeURL(value)) {
        const win = launchApp('internet');
        if (win && typeof win._browserGo === 'function') win._browserGo(normalizeURL(value));
        return;
    }
    if (/^[A-Za-z]:\\/.test(value) || value === MY_COMPUTER) {
        const node = value === MY_COMPUTER ? true : VFS.get(value);
        if (!node) return runNotFound(value);
        if (value === MY_COMPUTER || node.type === 'folder') openExplorer(value);
        else openVfsFile(node, value);
        return;
    }
    const key = value.toLowerCase().replace(/\.exe$/, '').split(/\s+/)[0];
    const known = LEGACY_APPS[key] || ['explorer', 'mycomputer', 'controlpanel', 'control', 'taskmgr',
        'taskmanager', 'calc', 'calculator', 'search', 'help', 'display', 'desk.cpl', 'winver',
        'sysinfo', 'mydocuments', 'mypictures', 'mymusic'].includes(key);
    if (!known) return runNotFound(value);
    launchApp(key);
}

function runNotFound(value) {
    XPAudio.play('error');
    showDialog({
        title: 'Run', icon: 'assets/error-icon.png', width: 400, sound: false,
        bodyHtml: `<div class="xp-run-row">
            <img class="xp-run-img" src="assets/error-icon.png" alt="">
            <p>Windows cannot find '<b>${escHtml(value)}</b>'. Make sure you typed
               the name correctly, and then try again.</p></div>`,
        buttons: [{ label: 'OK', primary: true }]
    });
}

// Search Results: walks the whole tree plus the live desktop.
function openSearch(startPath) {
    return openAppInstance('search', {
        appId: 'search',
        title: 'Search Results',
        icon: 'assets/start-search.png',
        content: `
          <div class="srch">
            <div class="srch-side">
              <div class="srch-title">Search Companion</div>
              <p class="srch-hint">What do you want to search for?</p>
              <label class="srch-label">All or part of the file name:</label>
              <input class="srch-name" type="text" spellcheck="false" autocomplete="off">
              <label class="srch-label">A word or phrase in the file:</label>
              <input class="srch-text" type="text" spellcheck="false" autocomplete="off">
              <label class="srch-label">Look in:</label>
              <select class="srch-scope">
                <option value="C:">Local Disk (C:)</option>
                <option value="${escAttr(VFS.DOCS)}">My Documents</option>
                <option value="${escAttr(VFS.PICTURES)}">My Pictures</option>
                <option value="${escAttr(VFS.DESKTOP)}">Desktop</option>
              </select>
              <div class="srch-actions">
                <button class="srch-go">Search</button>
                <button class="srch-clear">Clear</button>
              </div>
            </div>
            <div class="srch-main">
              <div class="srch-head"><span>Name</span><span>In Folder</span><span>Size</span><span>Type</span></div>
              <div class="srch-results"><div class="srch-idle">To start your search, follow the instructions in the left pane.</div></div>
              <div class="srch-status">Ready</div>
            </div>
          </div>`,
        width: 720, height: 460, minW: 560, minH: 340,
        setup: (win) => setupSearch(win, startPath)
    });
}

function setupSearch(win, startPath) {
    const nameInput = win.querySelector('.srch-name');
    const textInput = win.querySelector('.srch-text');
    const scopeSel = win.querySelector('.srch-scope');
    const resultsEl = win.querySelector('.srch-results');
    const statusEl = win.querySelector('.srch-status');

    if (startPath) {
        const opt = [...scopeSel.options].find(o => o.value === startPath);
        if (opt) scopeSel.value = startPath;
    }

    function walk(path, out, depth) {
        if (depth > 8) return;
        const node = VFS.get(path);
        if (!node || node.type !== 'folder') return;
        (node.children || []).forEach(child => {
            const childPath = VFS.join(path, child.name);
            out.push({ node: child, path: childPath, folder: path });
            if (child.type === 'folder') walk(childPath, out, depth + 1);
        });
    }

    function run() {
        const namePart = nameInput.value.trim().toLowerCase();
        const textPart = textInput.value.trim().toLowerCase();
        if (!namePart && !textPart) {
            resultsEl.innerHTML = `<div class="srch-idle">Type a file name or some text to search for.</div>`;
            statusEl.textContent = 'Ready';
            return;
        }
        const all = [];
        walk(scopeSel.value === 'C:' ? 'C:' : scopeSel.value, all, 0);
        if (scopeSel.value === 'C:' || scopeSel.value === VFS.DESKTOP) {
            desktopVfsEntries().forEach(e => all.push({
                node: { name: e.name, type: e.type, kind: e.kind, icon: e.icon, mtime: e.mtime, src: e.src },
                path: e.path, folder: VFS.DESKTOP, desktopIcon: e.desktopIcon
            }));
        }
        const hits = all.filter(({ node }) => {
            const nameOk = !namePart || node.name.toLowerCase().includes(namePart);
            const textOk = !textPart || String(node.content || '').toLowerCase().includes(textPart);
            return nameOk && textOk;
        });

        statusEl.textContent = `${hits.length} file${hits.length === 1 ? '' : 's'} found`;
        XPAudio.play(hits.length ? 'navigate' : 'error');
        if (!hits.length) {
            resultsEl.innerHTML = `<div class="srch-idle">There are no results to display.</div>`;
            return;
        }
        resultsEl.innerHTML = hits.map((h, i) => `
            <div class="srch-row" data-i="${i}">
              <span class="srch-c1"><img src="${escAttr(VFS.iconFor(h.node))}" alt="">${escHtml(h.node.name)}</span>
              <span class="srch-c2">${escHtml(h.folder)}</span>
              <span class="srch-c3">${h.node.type === 'folder' ? '' : formatBytes(VFS.sizeOf(h.node))}</span>
              <span class="srch-c4">${escHtml(VFS.typeLabel(h.node))}</span>
            </div>`).join('');
        resultsEl.querySelectorAll('.srch-row').forEach(row => {
            const hit = hits[+row.dataset.i];
            row.addEventListener('click', () => {
                resultsEl.querySelectorAll('.srch-row').forEach(r => r.classList.remove('selected'));
                row.classList.add('selected');
            });
            row.addEventListener('dblclick', () => {
                if (hit.desktopIcon) openIconWindow(hit.desktopIcon);
                else if (hit.node.type === 'folder') openExplorer(hit.path);
                else openVfsFile(hit.node, hit.path);
            });
        });
    }

    win.querySelector('.srch-go').addEventListener('click', run);
    win.querySelector('.srch-clear').addEventListener('click', () => {
        nameInput.value = '';
        textInput.value = '';
        resultsEl.innerHTML = `<div class="srch-idle">To start your search, follow the instructions in the left pane.</div>`;
        statusEl.textContent = 'Ready';
    });
    [nameInput, textInput].forEach(i => i.addEventListener('keydown', (e) => {
        e.stopPropagation();
        if (e.key === 'Enter') run();
    }));
    setTimeout(() => nameInput.focus(), 60);
}

function showAboutWindows() {
    showDialog({
        title: 'About Windows',
        icon: 'assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png',
        width: 420,
        bodyHtml: `
            <div class="xp-about">
                <img class="xp-about-logo" src="assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png" alt="">
                <div>
                    <h3>Microsoft&reg; Windows</h3>
                    <p>Version 5.1 (Build 2600.xpsp_sp3) Service Pack 3</p>
                    <p class="xp-about-note">This is a recreation, not the real thing — a Windows XP
                       desktop rebuilt from scratch in HTML, CSS and JavaScript by
                       <b>Marco Tancredi</b> as a portfolio piece.</p>
                    <p class="xp-about-note">Physical memory available to Windows: 523,760 KB</p>
                </div>
            </div>`,
        buttons: [{ label: 'OK', primary: true }]
    });
}

function openHelpCenter() {
    return openAppWindow('helpcenter', {
        appId: 'help',
        title: 'Help and Support Center',
        icon: 'assets/start-help.png',
        content: `
          <div class="help-app">
            <div class="help-banner">
              <span class="help-brand">Help and Support Center</span>
              <span class="help-sub">Windows XP Portfolio Edition</span>
            </div>
            <div class="help-body">
              <div class="help-col">
                <h3>Pick a help topic</h3>
                <ul class="help-list">
                  <li data-topic="basics">What's on this desktop</li>
                  <li data-topic="keyboard">Keyboard shortcuts</li>
                  <li data-topic="files">Working with files and folders</li>
                  <li data-topic="contact">Getting in touch with Marco</li>
                  <li data-topic="about">About this project</li>
                </ul>
              </div>
              <div class="help-col help-content"></div>
            </div>
          </div>`,
        width: 640, height: 460, minW: 480, minH: 340,
        setup: (win) => {
            const TOPICS = {
                basics: `<h3>What's on this desktop</h3>
                    <p>Everything here behaves like the real thing. Double-click an icon to open it,
                    drag icons around, right-click anywhere for a context menu.</p>
                    <ul>
                      <li><b>Projects</b> — the things Marco has built, with links to the source.</li>
                      <li><b>Internet Explorer</b> — a working browser frame.</li>
                      <li><b>Outlook Express</b> — send Marco a message.</li>
                      <li><b>Notepad, Paint, Command Prompt, Calculator</b> — real, usable tools.</li>
                      <li><b>Minesweeper and Snake</b> — because it wouldn't be XP without them.</li>
                    </ul>`,
                keyboard: `<h3>Keyboard shortcuts</h3>
                    <table class="help-table">
                      <tr><td>F2</td><td>Rename the selected icon</td></tr>
                      <tr><td>Delete</td><td>Send the selection to the Recycle Bin</td></tr>
                      <tr><td>Ctrl + A</td><td>Select every icon</td></tr>
                      <tr><td>Enter</td><td>Open the selection</td></tr>
                      <tr><td>Alt + Tab</td><td>Switch between open windows</td></tr>
                      <tr><td>Alt + F4</td><td>Close the active window</td></tr>
                      <tr><td>Ctrl + Shift + Esc</td><td>Task Manager</td></tr>
                      <tr><td>F5</td><td>Refresh</td></tr>
                      <tr><td>Windows key</td><td>Open the Start menu</td></tr>
                    </table>`,
                files: `<h3>Working with files and folders</h3>
                    <p>Open <b>My Computer</b> or <b>My Documents</b> from the Start menu to browse a real
                    file system. You can create folders and text documents, rename them, delete them to the
                    Recycle Bin and restore them again — and it all survives a page reload.</p>
                    <p>Drag an image or a text file from your own computer onto the desktop and it becomes
                    a real icon you can open.</p>`,
                contact: `<h3>Getting in touch</h3>
                    <p>Open <b>Outlook Express</b> from the Start menu and click <b>Create Mail</b>.
                    Write whatever you like — ideas, feedback, work — and press Send.</p>
                    <p>Or write directly to <b>${escHtml(MAILBOX_EMAIL)}</b>.</p>`,
                about: `<h3>About this project</h3>
                    <p>A Windows XP desktop rebuilt in the browser with no framework and no build step:
                    one HTML file, one stylesheet and one script.</p>
                    <p>Source: <b>github.com/Marc0GitHub/XP-Portfolio</b></p>`
            };
            const content = win.querySelector('.help-content');
            const show = (topic) => {
                content.innerHTML = TOPICS[topic] || '';
                win.querySelectorAll('.help-list li').forEach(li =>
                    li.classList.toggle('active', li.dataset.topic === topic));
            };
            win.querySelectorAll('.help-list li').forEach(li =>
                li.addEventListener('click', () => { XPAudio.play('click'); show(li.dataset.topic); }));
            show('basics');
        }
    });
}


/* ===== 10. Calculator ====================================================== */
function openCalculator() {
    return openAppWindow('calc', {
        appId: 'calc',
        title: 'Calculator',
        icon: 'assets/start-controlpanel.png',
        content: `
          <div class="calc-app">
            <div class="calc-menubar">
              <span class="calc-menu-item">Edit</span>
              <span class="calc-menu-item">View</span>
              <span class="calc-menu-item">Help</span>
            </div>
            <div class="calc-display"><span class="calc-value">0</span></div>
            <div class="calc-keys">
              <div class="calc-memcol">
                <button class="calc-key calc-mem" data-k="MC">MC</button>
                <button class="calc-key calc-mem" data-k="MR">MR</button>
                <button class="calc-key calc-mem" data-k="MS">MS</button>
                <button class="calc-key calc-mem" data-k="M+">M+</button>
              </div>
              <div class="calc-grid">
                <button class="calc-key calc-red" data-k="Back">Backspace</button>
                <button class="calc-key calc-red" data-k="CE">CE</button>
                <button class="calc-key calc-red" data-k="C">C</button>
                <button class="calc-key calc-num" data-k="7">7</button>
                <button class="calc-key calc-num" data-k="8">8</button>
                <button class="calc-key calc-num" data-k="9">9</button>
                <button class="calc-key calc-op" data-k="/">/</button>
                <button class="calc-key calc-fn" data-k="sqrt">sqrt</button>
                <button class="calc-key calc-num" data-k="4">4</button>
                <button class="calc-key calc-num" data-k="5">5</button>
                <button class="calc-key calc-num" data-k="6">6</button>
                <button class="calc-key calc-op" data-k="*">*</button>
                <button class="calc-key calc-fn" data-k="%">%</button>
                <button class="calc-key calc-num" data-k="1">1</button>
                <button class="calc-key calc-num" data-k="2">2</button>
                <button class="calc-key calc-num" data-k="3">3</button>
                <button class="calc-key calc-op" data-k="-">-</button>
                <button class="calc-key calc-fn" data-k="1/x">1/x</button>
                <button class="calc-key calc-num" data-k="0">0</button>
                <button class="calc-key calc-num" data-k="+/-">+/-</button>
                <button class="calc-key calc-num" data-k=".">.</button>
                <button class="calc-key calc-op" data-k="+">+</button>
                <button class="calc-key calc-eq" data-k="=">=</button>
              </div>
            </div>
          </div>`,
        width: 268, height: 286, minW: 268, minH: 286,
        setup: setupCalculator
    });
}

function setupCalculator(win) {
    const display = win.querySelector('.calc-value');
    let current = '0';       // what the display shows
    let stored = null;       // left-hand operand
    let pending = null;      // pending operator
    let fresh = true;        // next digit starts a new number
    let memory = 0;

    const show = (v) => {
        const n = Number(v);
        let text = String(v);
        if (Number.isFinite(n)) {
            // Long results collapse to exponent form, like the real Calculator
            text = Math.abs(n) >= 1e16 || (n !== 0 && Math.abs(n) < 1e-9)
                ? n.toExponential(10).replace(/e([+-])(\d)$/, 'e$10$2')
                : String(parseFloat(n.toPrecision(15)));
        }
        display.textContent = text;
    };

    function digit(d) {
        if (fresh) { current = d === '.' ? '0.' : d; fresh = false; }
        else if (d === '.') { if (!current.includes('.')) current += '.'; }
        else current = current === '0' ? d : current + d;
        show(current);
    }

    function compute(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b === 0 ? 'Cannot divide by zero' : a / b;
            default: return b;
        }
    }

    function operator(op) {
        const value = parseFloat(current) || 0;
        if (pending !== null && !fresh) {
            const result = compute(stored, value, pending);
            if (typeof result === 'string') { show(result); reset(true); return; }
            stored = result;
            show(stored);
        } else {
            stored = value;
        }
        pending = op;
        fresh = true;
    }

    function equals() {
        if (pending === null) return;
        const result = compute(stored, parseFloat(current) || 0, pending);
        if (typeof result === 'string') { show(result); reset(true); return; }
        show(result);
        current = String(result);
        stored = result;
        pending = null;
        fresh = true;
    }

    function reset(keepDisplay) {
        current = '0'; stored = null; pending = null; fresh = true;
        if (!keepDisplay) show('0');
    }

    function press(k) {
        XPAudio.play('click');
        if (/^[0-9.]$/.test(k)) return digit(k);
        switch (k) {
            case '+': case '-': case '*': case '/': return operator(k);
            case '=': return equals();
            case 'C': return reset();
            case 'CE': current = '0'; fresh = true; return show('0');
            case 'Back':
                if (fresh) return;
                current = current.length > 1 ? current.slice(0, -1) : '0';
                if (current === '-' || current === '') current = '0';
                return show(current);
            case '+/-': current = String(-(parseFloat(current) || 0)); return show(current);
            case 'sqrt': {
                const v = parseFloat(current) || 0;
                if (v < 0) { show('Invalid input for function'); return reset(true); }
                current = String(Math.sqrt(v)); fresh = true; return show(current);
            }
            case '1/x': {
                const v = parseFloat(current) || 0;
                if (v === 0) { show('Cannot divide by zero'); return reset(true); }
                current = String(1 / v); fresh = true; return show(current);
            }
            case '%': {
                const v = parseFloat(current) || 0;
                current = String((stored || 0) * v / 100); fresh = true; return show(current);
            }
            case 'MC': memory = 0; return;
            case 'MR': current = String(memory); fresh = true; return show(current);
            case 'MS': memory = parseFloat(current) || 0; return;
            case 'M+': memory += parseFloat(current) || 0; return;
        }
    }

    win.querySelectorAll('.calc-key').forEach(btn =>
        btn.addEventListener('click', () => press(btn.dataset.k)));

    const KEYMAP = { Enter: '=', '\r': '=', Escape: 'C', Backspace: 'Back', Delete: 'CE', '%': '%' };
    function onKey(e) {
        if (!win.classList.contains('active-window')) return;
        const k = KEYMAP[e.key] || (/^[0-9.+\-*/=]$/.test(e.key) ? e.key : null);
        if (!k) return;
        e.preventDefault();
        press(k);
        const btn = win.querySelector(`.calc-key[data-k="${CSS.escape(k)}"]`);
        if (btn) { btn.classList.add('calc-pressed'); setTimeout(() => btn.classList.remove('calc-pressed'), 90); }
    }
    document.addEventListener('keydown', onKey);
    addCleanup(win, () => document.removeEventListener('keydown', onKey));
}


/* ===== 11. Task Manager ====================================================
   Applications lists the real open windows and can actually end them.
   Processes and Performance are simulated, but they move like the real ones.
   ========================================================================= */
function openTaskManager() {
    return openAppWindow('taskmgr', {
        appId: 'taskmgr',
        title: 'Windows Task Manager',
        icon: 'assets/start-controlpanel.png',
        content: `
          <div class="tm-app">
            <div class="tm-menubar">
              <span class="tm-menu-item">File</span><span class="tm-menu-item">Options</span>
              <span class="tm-menu-item">View</span><span class="tm-menu-item">Windows</span>
              <span class="tm-menu-item">Help</span>
            </div>
            <div class="tm-tabs">
              <button class="tm-tab active" data-tab="apps">Applications</button>
              <button class="tm-tab" data-tab="procs">Processes</button>
              <button class="tm-tab" data-tab="perf">Performance</button>
            </div>
            <div class="tm-panel tm-panel-apps">
              <div class="tm-listhead"><span>Task</span><span>Status</span></div>
              <div class="tm-applist"></div>
              <div class="tm-buttons">
                <button class="tm-btn tm-end" disabled>End Task</button>
                <button class="tm-btn tm-switch" disabled>Switch To</button>
                <button class="tm-btn tm-new">New Task...</button>
              </div>
            </div>
            <div class="tm-panel tm-panel-procs hidden">
              <div class="tm-listhead tm-proc-head"><span>Image Name</span><span>User Name</span><span>CPU</span><span>Mem Usage</span></div>
              <div class="tm-proclist"></div>
            </div>
            <div class="tm-panel tm-panel-perf hidden">
              <div class="tm-perf-row">
                <div class="tm-perf-box"><div class="tm-perf-label">CPU Usage</div>
                  <canvas class="tm-gauge" width="86" height="86"></canvas></div>
                <div class="tm-perf-box tm-perf-wide"><div class="tm-perf-label">CPU Usage History</div>
                  <canvas class="tm-graph tm-graph-cpu" width="320" height="86"></canvas></div>
              </div>
              <div class="tm-perf-row">
                <div class="tm-perf-box"><div class="tm-perf-label">PF Usage</div>
                  <canvas class="tm-gauge tm-gauge-mem" width="86" height="86"></canvas></div>
                <div class="tm-perf-box tm-perf-wide"><div class="tm-perf-label">Page File Usage History</div>
                  <canvas class="tm-graph tm-graph-mem" width="320" height="86"></canvas></div>
              </div>
              <div class="tm-totals"></div>
            </div>
            <div class="tm-statusbar">
              <span class="tm-stat-proc">Processes: 0</span>
              <span class="tm-stat-cpu">CPU Usage: 0%</span>
              <span class="tm-stat-mem">Commit Charge: 0M / 0M</span>
            </div>
          </div>`,
        width: 470, height: 520, minW: 420, minH: 400,
        setup: setupTaskManager
    });
}

function setupTaskManager(win) {
    const appList = win.querySelector('.tm-applist');
    const procList = win.querySelector('.tm-proclist');
    const endBtn = win.querySelector('.tm-end');
    const switchBtn = win.querySelector('.tm-switch');
    const totalsEl = win.querySelector('.tm-totals');
    const statProc = win.querySelector('.tm-stat-proc');
    const statCpu = win.querySelector('.tm-stat-cpu');
    const statMem = win.querySelector('.tm-stat-mem');

    let selectedOwner = null;
    let cpuHistory = new Array(60).fill(2);
    let memHistory = new Array(60).fill(30);

    // Background processes that are always "running", plus one per open window.
    const BASE_PROCS = [
        ['System Idle Process', 'SYSTEM', 92, 28],
        ['System', 'SYSTEM', 0, 236],
        ['smss.exe', 'SYSTEM', 0, 388],
        ['csrss.exe', 'SYSTEM', 0, 4128],
        ['winlogon.exe', 'SYSTEM', 0, 3624],
        ['services.exe', 'SYSTEM', 0, 4092],
        ['lsass.exe', 'SYSTEM', 0, 1268],
        ['svchost.exe', 'SYSTEM', 0, 5124],
        ['svchost.exe', 'NETWORK SERVICE', 0, 3648],
        ['spoolsv.exe', 'SYSTEM', 0, 4416],
        ['explorer.exe', VFS.USER, 1, 18452],
        ['taskmgr.exe', VFS.USER, 2, 5108]
    ];

    const IMAGE_NAMES = {
        icon2: 'iexplore.exe', icon4: 'mspaint.exe', icon5: 'notepad.exe',
        icon10: 'msimn.exe', icon11: 'cmd.exe', icon13: 'winmine.exe',
        icon9: 'snake.exe', icon12: 'blog.exe', icon1: 'explorer.exe', icon3: 'explorer.exe'
    };

    function openWindowList() {
        return [...document.querySelectorAll('.popup')].map(w => ({
            owner: w.dataset.owner,
            title: (w.querySelector('.popup-title') || {}).textContent || 'Window',
            icon: w.dataset.icon,
            minimized: w.style.display === 'none',
            el: w
        }));
    }

    function renderApps() {
        const list = openWindowList();
        if (!list.length) {
            appList.innerHTML = `<div class="tm-empty">There are no tasks running.</div>`;
        } else {
            appList.innerHTML = list.map(a => `
                <div class="tm-row ${a.owner === selectedOwner ? 'selected' : ''}" data-owner="${escAttr(a.owner)}">
                  <span class="tm-task"><img src="${escAttr(a.icon)}" alt="">${escHtml(a.title)}</span>
                  <span class="tm-status">Running</span>
                </div>`).join('');
            appList.querySelectorAll('.tm-row').forEach(row => {
                row.addEventListener('click', () => {
                    selectedOwner = row.dataset.owner;
                    renderApps();
                });
                row.addEventListener('dblclick', () => switchTo(row.dataset.owner));
            });
        }
        const has = !!(selectedOwner && document.querySelector(`.popup[data-owner="${selectedOwner}"]`));
        endBtn.disabled = !has;
        switchBtn.disabled = !has;
        statProc.textContent = `Processes: ${BASE_PROCS.length + list.length}`;
    }

    function switchTo(owner) {
        const w = document.querySelector(`.popup[data-owner="${owner}"]`);
        if (!w) return;
        if (w.style.display === 'none') restoreWindow(w); else bringToFront(w);
    }

    function renderProcs(cpu) {
        const extra = openWindowList().map(a => [
            IMAGE_NAMES[a.owner] || (String(a.owner).split('-')[0] + '.exe'),
            VFS.USER,
            Math.round(Math.random() * 3),
            8000 + Math.round(Math.random() * 24000)
        ]);
        const rows = [...BASE_PROCS, ...extra].map(([name, user, base, mem]) => {
            const jitter = name === 'System Idle Process'
                ? Math.max(0, 100 - cpu)
                : Math.max(0, base + Math.round((Math.random() - 0.6) * 2));
            return `<div class="tm-row tm-proc-row">
                <span>${escHtml(name)}</span><span>${escHtml(user)}</span>
                <span class="tm-num">${String(jitter).padStart(2, '0')}</span>
                <span class="tm-num">${(mem + Math.round((Math.random() - 0.5) * 400)).toLocaleString()} K</span>
            </div>`;
        });
        procList.innerHTML = rows.join('');
    }

    function drawGauge(canvas, value, color) {
        const ctx = canvas.getContext('2d');
        const { width: w, height: h } = canvas;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(0,160,0,0.35)';
        ctx.lineWidth = 1;
        for (let y = 0; y < h; y += 10) { ctx.beginPath(); ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); ctx.stroke(); }
        for (let x = 0; x < w; x += 10) { ctx.beginPath(); ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); ctx.stroke(); }
        const barH = Math.round(h * value / 100);
        ctx.fillStyle = color;
        ctx.fillRect(6, h - barH, w - 12, barH);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px Tahoma, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(value) + ' %', w / 2, h / 2 + 5);
    }

    function drawGraph(canvas, data, color) {
        const ctx = canvas.getContext('2d');
        const { width: w, height: h } = canvas;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(0,160,0,0.3)';
        ctx.lineWidth = 1;
        for (let y = 0; y < h; y += 12) { ctx.beginPath(); ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); ctx.stroke(); }
        for (let x = 0; x < w; x += 12) { ctx.beginPath(); ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); ctx.stroke(); }
        const step = w / (data.length - 1);
        ctx.beginPath();
        data.forEach((v, i) => {
            const x = i * step;
            const y = h - (v / 100) * h;
            i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        });
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
        ctx.fillStyle = color.replace('rgb', 'rgba').replace(')', ',0.25)');
        ctx.fill();
    }

    function tickPerf() {
        const windows = document.querySelectorAll('.popup').length;
        const target = 3 + windows * 4 + Math.random() * 14;
        const cpu = Math.min(100, Math.max(0, cpuHistory[cpuHistory.length - 1] * 0.7 + target * 0.3));
        cpuHistory = [...cpuHistory.slice(1), cpu];
        const mem = Math.min(100, 26 + windows * 5 + Math.random() * 4);
        memHistory = [...memHistory.slice(1), mem];

        drawGauge(win.querySelector('.tm-gauge'), cpu, 'rgb(0,255,0)');
        drawGauge(win.querySelector('.tm-gauge-mem'), mem, 'rgb(255,235,0)');
        drawGraph(win.querySelector('.tm-graph-cpu'), cpuHistory, 'rgb(0,255,0)');
        drawGraph(win.querySelector('.tm-graph-mem'), memHistory, 'rgb(255,235,0)');

        const commit = Math.round(mem * 10.24);
        totalsEl.innerHTML = `
            <div class="tm-totals-box"><b>Totals</b>
              <div>Handles<span>${(8400 + windows * 120).toLocaleString()}</span></div>
              <div>Threads<span>${(320 + windows * 9)}</span></div>
              <div>Processes<span>${BASE_PROCS.length + windows}</span></div>
            </div>
            <div class="tm-totals-box"><b>Physical Memory (K)</b>
              <div>Total<span>523,760</span></div>
              <div>Available<span>${(523760 - commit * 380).toLocaleString()}</span></div>
              <div>System Cache<span>${(118000 + windows * 900).toLocaleString()}</span></div>
            </div>`;
        statCpu.textContent = `CPU Usage: ${Math.round(cpu)}%`;
        statMem.textContent = `Commit Charge: ${commit}M / 1024M`;

        if (!win.querySelector('.tm-panel-procs').classList.contains('hidden')) renderProcs(cpu);
    }

    win.querySelectorAll('.tm-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            XPAudio.play('click');
            win.querySelectorAll('.tm-tab').forEach(t => t.classList.toggle('active', t === tab));
            win.querySelectorAll('.tm-panel').forEach(p =>
                p.classList.toggle('hidden', !p.classList.contains('tm-panel-' + tab.dataset.tab)));
            tickPerf();
        });
    });

    endBtn.addEventListener('click', () => {
        const w = document.querySelector(`.popup[data-owner="${selectedOwner}"]`);
        if (!w) return;
        const title = (w.querySelector('.popup-title') || {}).textContent || 'this program';
        showConfirmDialog('End Program', 'assets/error-icon.png',
            `<b>${escHtml(title)}</b><br><br>Ending this program will close it immediately. Continue?`,
            () => { closeWindow(w); selectedOwner = null; renderApps(); });
    });
    switchBtn.addEventListener('click', () => switchTo(selectedOwner));
    win.querySelector('.tm-new').addEventListener('click', () => showRunDialog());

    const appTimer = setInterval(renderApps, 1200);
    const perfTimer = setInterval(tickPerf, 1000);
    addCleanup(win, () => { clearInterval(appTimer); clearInterval(perfTimer); });

    renderApps();
    tickPerf();
}


/* ===== 12. Control Panel =================================================== */
const CONTROL_PANEL_ITEMS = [
    { name: 'Display', icon: 'assets/xp-desktop.webp', desc: 'Change the appearance of your desktop, such as the background, screen saver, colors and font sizes.', open: () => showDisplayProperties() },
    { name: 'Sounds and Audio Devices', icon: 'assets/start-mediaplayer.png', desc: 'Change the sound scheme for your computer, or configure the settings for your speakers.', open: () => showSoundProperties() },
    { name: 'Date and Time', icon: 'assets/start-controlpanel.png', desc: 'Set the date, time and time zone for your computer.', open: () => showDateTimeProperties() },
    { name: 'System', icon: 'assets/start-mycomputer.png', desc: 'See information about your computer system, and change settings for hardware and performance.', open: () => showSystemProperties() },
    { name: 'Add or Remove Programs', icon: null, desc: 'Install or remove programs and Windows components.', open: () => showAddRemovePrograms() },
    { name: 'Taskbar and Start Menu', icon: 'assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png', desc: 'Customize the Start menu and the taskbar, such as the types of items to be displayed and how they should appear.', open: () => showTaskbarProperties() },
    { name: 'User Accounts', icon: 'assets/start-avatar.png', desc: 'Change user account settings and passwords for people who share this computer.', open: () => showUserAccounts() },
    { name: 'Mouse', icon: 'assets/start-printers.png', desc: 'Customize your mouse settings, such as the button configuration and pointer speed.', open: () => showNotImplemented('Mouse Properties') },
    { name: 'Printers and Faxes', icon: 'assets/start-printers.png', desc: 'Shows installed printers and fax printers and helps you add new ones.', open: () => showInfoDialog('Printers and Faxes', 'assets/start-printers.png', 'No printers are installed on this computer.') }
];

function openControlPanel(focusName) {
    const win = openAppWindow('controlpanel', {
        appId: 'controlpanel',
        title: 'Control Panel',
        icon: 'assets/start-controlpanel.png',
        content: `
          <div class="cp-app">
            <div class="cp-toolbar">
              <button class="cp-tbtn cp-view-toggle">Switch to Category View</button>
              <span class="cp-title">Control Panel</span>
            </div>
            <div class="cp-body">
              <div class="cp-side">
                <div class="cp-pane">
                  <div class="cp-pane-title">See Also</div>
                  <button class="cp-link" data-go="windowsupdate">Windows Update</button>
                  <button class="cp-link" data-go="help">Help and Support</button>
                </div>
              </div>
              <div class="cp-items"></div>
            </div>
            <div class="cp-status"></div>
          </div>`,
        width: 660, height: 460, minW: 520, minH: 340,
        setup: (w) => setupControlPanel(w, focusName)
    });
    return win;
}

function setupControlPanel(win, focusName) {
    const itemsEl = win.querySelector('.cp-items');
    const statusEl = win.querySelector('.cp-status');
    const toggle = win.querySelector('.cp-view-toggle');
    let category = Store.get('xpCpCategory', false);

    const CATEGORIES = [
        { name: 'Appearance and Themes', icon: 'assets/xp-desktop.webp', items: ['Display', 'Taskbar and Start Menu'] },
        { name: 'Sounds, Speech, and Audio Devices', icon: 'assets/start-mediaplayer.png', items: ['Sounds and Audio Devices'] },
        { name: 'Performance and Maintenance', icon: 'assets/start-mycomputer.png', items: ['System', 'Date and Time'] },
        { name: 'Add or Remove Programs', icon: null, items: ['Add or Remove Programs'] },
        { name: 'Printers and Other Hardware', icon: 'assets/start-printers.png', items: ['Printers and Faxes', 'Mouse'] },
        { name: 'User Accounts', icon: 'assets/start-avatar.png', items: ['User Accounts'] }
    ];

    function render() {
        toggle.textContent = category ? 'Switch to Classic View' : 'Switch to Category View';
        itemsEl.className = 'cp-items' + (category ? ' cp-items-cat' : '');
        if (category) {
            itemsEl.innerHTML = CATEGORIES.map((c, i) => `
                <button class="cp-cat" data-i="${i}">
                  <img src="${escAttr(c.icon || ALL_PROGRAMS_ICON)}" alt="">
                  <div><b>${escHtml(c.name)}</b><span>${escHtml(c.items.join(', '))}</span></div>
                </button>`).join('');
            itemsEl.querySelectorAll('.cp-cat').forEach(btn => {
                const cat = CATEGORIES[+btn.dataset.i];
                btn.addEventListener('mouseenter', () => { statusEl.textContent = cat.name; });
                btn.addEventListener('click', () => {
                    XPAudio.play('click');
                    const first = CONTROL_PANEL_ITEMS.find(it => it.name === cat.items[0]);
                    if (first) first.open();
                });
            });
        } else {
            itemsEl.innerHTML = CONTROL_PANEL_ITEMS.map((it, i) => `
                <button class="cp-item" data-i="${i}" title="${escAttr(it.desc)}">
                  <img src="${escAttr(it.icon || ALL_PROGRAMS_ICON)}" alt="">
                  <span>${escHtml(it.name)}</span>
                </button>`).join('');
            itemsEl.querySelectorAll('.cp-item').forEach(btn => {
                const item = CONTROL_PANEL_ITEMS[+btn.dataset.i];
                btn.addEventListener('mouseenter', () => { statusEl.textContent = item.desc; });
                btn.addEventListener('mouseleave', () => { statusEl.textContent = ''; });
                btn.addEventListener('dblclick', () => { XPAudio.play('click'); item.open(); });
                btn.addEventListener('click', () => {
                    itemsEl.querySelectorAll('.cp-item').forEach(b => b.classList.toggle('selected', b === btn));
                });
            });
        }
    }

    toggle.addEventListener('click', () => {
        category = !category;
        Store.set('xpCpCategory', category);
        XPAudio.play('click');
        render();
    });
    win.querySelectorAll('.cp-link').forEach(link => link.addEventListener('click', () => {
        if (link.dataset.go === 'help') openHelpCenter();
        else showNotImplemented('Windows Update');
    }));

    render();
    if (focusName) {
        const item = CONTROL_PANEL_ITEMS.find(i => i.name === focusName);
        if (item) setTimeout(item.open, 120);
    }
}


/* ===== 13. Display Properties, themes and the screen saver =================
   The Appearance tab really does restyle the desktop (XP shipped Blue, Olive
   Green and Silver), and the Screen Saver tab really does start one.
   ========================================================================= */
const LUNA_THEMES = {
    blue:   { label: 'Default (blue)', cls: '' },
    olive:  { label: 'Olive Green',    cls: 'luna-olive' },
    silver: { label: 'Silver',         cls: 'luna-silver' }
};
const THEME_KEY = 'xpLunaTheme';

function applyLunaTheme(name) {
    const theme = LUNA_THEMES[name] || LUNA_THEMES.blue;
    document.body.classList.remove('luna-olive', 'luna-silver');
    if (theme.cls) document.body.classList.add(theme.cls);
    Store.set(THEME_KEY, name in LUNA_THEMES ? name : 'blue');
}

const SCREENSAVERS = {
    none:      'None',
    logo:      'Windows XP',
    starfield: 'Starfield Simulation',
    marquee:   '3D Text',
    mystify:   'Mystify'
};
const SAVER_KEY = 'xpScreenSaver';
const SAVER_WAIT_KEY = 'xpScreenSaverWait';

function showDisplayProperties(initialTab) {
    const current = getSavedWallpaper();
    const theme = Store.get(THEME_KEY, 'blue');
    const saver = Store.get(SAVER_KEY, 'logo');
    const wait = Store.get(SAVER_WAIT_KEY, 5);

    const wallpaperOptions = [{ src: DEFAULT_WALLPAPER, label: 'Bliss (default)' }, ...WALLPAPERS];

    const dlg = showDialog({
        title: 'Display Properties',
        icon: 'assets/xp-desktop.webp',
        width: 440,
        className: 'xp-tabbed',
        bodyHtml: `
          <div class="xp-tabs">
            <button class="xp-tab" data-tab="themes">Themes</button>
            <button class="xp-tab" data-tab="desktop">Desktop</button>
            <button class="xp-tab" data-tab="saver">Screen Saver</button>
            <button class="xp-tab" data-tab="appearance">Appearance</button>
            <button class="xp-tab" data-tab="settings">Settings</button>
          </div>
          <div class="xp-tabbody">

            <div class="xp-tabpage" data-page="themes">
              <p>A theme is a background plus a set of sounds, icons and other
                 elements to help you personalize your computer with one click.</p>
              <label class="xp-field"><span>Theme:</span>
                <select class="dp-theme">
                  ${Object.entries(LUNA_THEMES).map(([k, v]) =>
                    `<option value="${k}" ${k === theme ? 'selected' : ''}>Windows XP — ${escHtml(v.label)}</option>`).join('')}
                </select>
              </label>
              <div class="dp-monitor"><div class="dp-screen dp-preview-screen"></div></div>
            </div>

            <div class="xp-tabpage hidden" data-page="desktop">
              <div class="dp-monitor"><div class="dp-screen dp-wall-preview"></div></div>
              <label class="xp-label">Background:</label>
              <div class="dp-wall-list">
                ${wallpaperOptions.map(w => `<div class="dp-wall ${w.src === current ? 'selected' : ''}" data-src="${escAttr(w.src)}">${escHtml(w.label)}</div>`).join('')}
                ${ANIMATED_WALLPAPERS.map(w => `<div class="dp-wall ${w.src === current ? 'selected' : ''}" data-src="${escAttr(w.src)}" data-anim="1">${escHtml(w.label)} (video)</div>`).join('')}
              </div>
              <div class="dp-row">
                <button class="xp-btn dp-browse">Browse...</button>
                <span class="dp-hint">Right-click any image on the desktop for “Set as Wallpaper”.</span>
              </div>
              <label class="xp-check dp-buddy-row">
                <input type="checkbox" class="dp-buddy"> Show the desktop buddy
              </label>
            </div>

            <div class="xp-tabpage hidden" data-page="saver">
              <div class="dp-monitor"><div class="dp-screen dp-saver-preview"></div></div>
              <label class="xp-field"><span>Screen saver:</span>
                <select class="dp-saver">
                  ${Object.entries(SCREENSAVERS).map(([k, v]) =>
                    `<option value="${k}" ${k === saver ? 'selected' : ''}>${escHtml(v)}</option>`).join('')}
                </select>
              </label>
              <div class="dp-row">
                <button class="xp-btn dp-preview-btn">Preview</button>
                <label class="xp-field xp-field-inline"><span>Wait:</span>
                  <input class="dp-wait" type="number" min="1" max="60" value="${wait}"> <span>minutes</span>
                </label>
              </div>
              <p class="dp-hint">The screen saver starts after the desktop has been idle for this long.
                 Move the mouse or press a key to wake it.</p>
            </div>

            <div class="xp-tabpage hidden" data-page="appearance">
              <div class="dp-monitor"><div class="dp-screen dp-appearance-screen">
                 <div class="dp-fake-title">Active Window</div>
                 <div class="dp-fake-body"><button class="dp-fake-btn">OK</button></div>
              </div></div>
              <label class="xp-field"><span>Windows and buttons:</span>
                <select class="dp-style" disabled><option>Windows XP style</option></select>
              </label>
              <label class="xp-field"><span>Color scheme:</span>
                <select class="dp-color">
                  ${Object.entries(LUNA_THEMES).map(([k, v]) =>
                    `<option value="${k}" ${k === theme ? 'selected' : ''}>${escHtml(v.label)}</option>`).join('')}
                </select>
              </label>
              <label class="xp-field"><span>Font size:</span>
                <select class="dp-font"><option>Normal</option><option>Large Fonts</option><option>Extra Large Fonts</option></select>
              </label>
            </div>

            <div class="xp-tabpage hidden" data-page="settings">
              <div class="dp-monitor"><div class="dp-screen dp-settings-screen"></div></div>
              <div class="dp-row dp-settings-row">
                <label class="xp-label">Screen resolution</label>
                <div class="dp-res">${window.innerWidth} by ${window.innerHeight} pixels</div>
              </div>
              <div class="dp-row dp-settings-row">
                <label class="xp-label">Color quality</label>
                <select class="dp-depth"><option>Highest (32 bit)</option><option>Medium (16 bit)</option></select>
              </div>
              <p class="dp-hint">Resolution follows your browser window — resize it and this updates.</p>
            </div>

          </div>`,
        buttons: [
            { label: 'OK', primary: true },
            { label: 'Cancel', action: () => { /* changes apply live, so this just closes */ } },
            { label: 'Apply', action: () => false }
        ]
    });

    const el = dlg.el;
    const pages = el.querySelectorAll('.xp-tabpage');
    const tabs = el.querySelectorAll('.xp-tab');

    function selectTab(name) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
        pages.forEach(p => p.classList.toggle('hidden', p.dataset.page !== name));
    }
    tabs.forEach(t => t.addEventListener('click', () => { XPAudio.play('click'); selectTab(t.dataset.tab); }));
    selectTab(initialTab || 'desktop');

    // ---- live wallpaper preview + apply ----
    const previews = el.querySelectorAll('.dp-screen');
    function paintPreview(src) {
        previews.forEach(p => {
            p.style.backgroundImage = isAnimatedWallpaper(src)
                ? `url(${(ANIMATED_WALLPAPERS.find(w => w.src === src) || {}).poster || DEFAULT_WALLPAPER})`
                : `url(${src})`;
        });
    }
    paintPreview(current);

    el.querySelectorAll('.dp-wall').forEach(item => {
        item.addEventListener('click', () => {
            el.querySelectorAll('.dp-wall').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            setWallpaper(item.dataset.src);
            paintPreview(item.dataset.src);
            XPAudio.play('click');
        });
    });
    const buddyBox = el.querySelector('.dp-buddy');
    if (buddyBox) {
        buddyBox.checked = Mascot.on;
        buddyBox.addEventListener('change', () => {
            Mascot.set(buddyBox.checked);
            XPAudio.play('click');
        });
    }

    el.querySelector('.dp-browse').addEventListener('click', () => {
        pickLocalFiles('image/*', (files) => {
            const file = files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => { setWallpaper(reader.result); paintPreview(reader.result); };
            reader.readAsDataURL(file);
        });
    });

    // ---- theme / colour scheme ----
    const themeSel = el.querySelector('.dp-theme');
    const colorSel = el.querySelector('.dp-color');
    const setTheme = (v) => {
        applyLunaTheme(v);
        themeSel.value = v;
        colorSel.value = v;
        XPAudio.play('click');
    };
    themeSel.addEventListener('change', () => setTheme(themeSel.value));
    colorSel.addEventListener('change', () => setTheme(colorSel.value));

    // ---- screen saver ----
    const saverSel = el.querySelector('.dp-saver');
    const waitInput = el.querySelector('.dp-wait');
    saverSel.addEventListener('change', () => {
        Store.set(SAVER_KEY, saverSel.value);
        ScreenSaver.reset();
    });
    waitInput.addEventListener('change', () => {
        const v = Math.min(60, Math.max(1, parseInt(waitInput.value, 10) || 5));
        waitInput.value = v;
        Store.set(SAVER_WAIT_KEY, v);
        ScreenSaver.reset();
    });
    el.querySelector('.dp-preview-btn').addEventListener('click', () => {
        dlg.close();
        ScreenSaver.start(saverSel.value);
    });

    return dlg;
}

function showSoundProperties() {
    const dlg = showDialog({
        title: 'Sounds and Audio Devices Properties',
        icon: 'assets/start-mediaplayer.png',
        width: 400,
        bodyHtml: `
          <div class="snd-panel">
            <label class="xp-label">Device volume</label>
            <div class="snd-row">
              <span>Low</span>
              <input class="snd-slider" type="range" min="0" max="100" value="${Math.round(XPAudio.volume * 100)}">
              <span>High</span>
            </div>
            <label class="xp-check"><input type="checkbox" class="snd-mute" ${XPAudio.muted ? 'checked' : ''}> Mute</label>
            <hr>
            <label class="xp-label">Sound scheme</label>
            <select class="snd-scheme"><option>Windows XP Portfolio</option><option>No Sounds</option></select>
            <p class="dp-hint">Every sound on this desktop is generated live with the Web Audio API —
               no audio files are downloaded.</p>
            <div class="snd-test">
              ${['startup', 'ding', 'error', 'recycle', 'tada'].map(s =>
                `<button class="xp-btn snd-play" data-sound="${s}">${s}</button>`).join('')}
            </div>
          </div>`,
        buttons: [{ label: 'OK', primary: true }, { label: 'Cancel' }]
    });
    const el = dlg.el;
    const slider = el.querySelector('.snd-slider');
    const mute = el.querySelector('.snd-mute');
    slider.addEventListener('input', () => { XPAudio.volume = slider.value / 100; syncVolumeUi(); });
    slider.addEventListener('change', () => XPAudio.play('ding'));
    mute.addEventListener('change', () => { XPAudio.muted = mute.checked; syncVolumeUi(); });
    el.querySelector('.snd-scheme').addEventListener('change', (e) => {
        XPAudio.muted = e.target.value === 'No Sounds';
        mute.checked = XPAudio.muted;
        syncVolumeUi();
    });
    el.querySelectorAll('.snd-play').forEach(b =>
        b.addEventListener('click', () => XPAudio.play(b.dataset.sound)));
    return dlg;
}

function showDateTimeProperties() {
    let timer = null;
    const dlg = showDialog({
        onClose: () => clearInterval(timer),
        title: 'Date and Time Properties',
        icon: 'assets/start-controlpanel.png',
        width: 340,
        bodyHtml: `
          <div class="dt-panel">
            <div class="dt-clock"></div>
            <div class="dt-date"></div>
            <label class="xp-field"><span>Time zone:</span>
              <select class="dt-tz"><option>${escHtml(Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local time')}</option></select>
            </label>
            <p class="dp-hint">The clock follows your computer's real time.</p>
          </div>`,
        buttons: [{ label: 'OK', primary: true }, { label: 'Cancel' }]
    });
    const clock = dlg.el.querySelector('.dt-clock');
    const date = dlg.el.querySelector('.dt-date');
    const tick = () => {
        const d = new Date();
        clock.textContent = d.toLocaleTimeString();
        date.textContent = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };
    tick();
    timer = setInterval(tick, 1000);
    return dlg;
}

function showSystemProperties() {
    const nav = navigator || {};
    showDialog({
        title: 'System Properties',
        icon: 'assets/start-mycomputer.png',
        width: 420,
        bodyHtml: `
          <div class="sys-panel">
            <img class="sys-logo" src="assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png" alt="">
            <div class="sys-info">
              <b>System:</b>
              <div>Microsoft Windows XP</div>
              <div>Portfolio Edition</div>
              <div>Version 2026</div>
              <br>
              <b>Registered to:</b>
              <div>Marco Tancredi</div>
              <div>github.com/Marc0GitHub</div>
              <br>
              <b>Computer:</b>
              <div>${escHtml((nav.userAgentData && nav.userAgentData.platform) || nav.platform || 'x86 Family')}</div>
              <div>${escHtml(String(nav.hardwareConcurrency || 4))} logical processors</div>
              <div>${escHtml(String(nav.deviceMemory || 4))} GB of RAM</div>
              <div>${window.screen.width} × ${window.screen.height} display</div>
            </div>
          </div>`,
        buttons: [{ label: 'OK', primary: true }]
    });
}

function showAddRemovePrograms() {
    const programs = [
        { name: 'Internet Explorer', size: '12.4 MB', used: 'Frequently', app: 'internet' },
        { name: 'Outlook Express', size: '8.1 MB', used: 'Occasionally', app: 'email' },
        { name: 'Paint', size: '2.7 MB', used: 'Occasionally', app: 'paint' },
        { name: 'Notepad', size: '0.6 MB', used: 'Frequently', app: 'notepad' },
        { name: 'Minesweeper', size: '1.2 MB', used: 'Rarely', app: 'minesweeper' },
        { name: 'Snake', size: '0.9 MB', used: 'Rarely', app: 'snake' },
        { name: 'Command Prompt', size: '0.4 MB', used: 'Occasionally', app: 'cmd' },
        { name: "Marco's Blog", size: '3.3 MB', used: 'Frequently', app: 'blog' }
    ];
    const dlg = showDialog({
        title: 'Add or Remove Programs',
        icon: ALL_PROGRAMS_ICON,
        width: 520,
        bodyHtml: `
          <div class="arp-panel">
            <p class="dp-hint">Currently installed programs:</p>
            <div class="arp-list">
              ${programs.map((p, i) => `
                <div class="arp-row" data-i="${i}">
                  <span class="arp-name">${escHtml(p.name)}</span>
                  <span class="arp-size">Size &nbsp;<b>${escHtml(p.size)}</b></span>
                  <span class="arp-used">Used &nbsp;<b>${escHtml(p.used)}</b></span>
                  <button class="xp-btn arp-open">Open</button>
                </div>`).join('')}
            </div>
          </div>`,
        buttons: [{ label: 'Close', primary: true }]
    });
    dlg.el.querySelectorAll('.arp-row').forEach(row => {
        const p = programs[+row.dataset.i];
        row.querySelector('.arp-open').addEventListener('click', () => { dlg.close(); launchApp(p.app); });
        row.addEventListener('click', () => {
            dlg.el.querySelectorAll('.arp-row').forEach(r => r.classList.toggle('selected', r === row));
        });
    });
}

function showTaskbarProperties() {
    const cfg = Store.get('xpTaskbarPrefs', { autohide: false, clock: true, quicklaunch: true });
    const dlg = showDialog({
        title: 'Taskbar and Start Menu Properties',
        icon: 'assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png',
        width: 360,
        bodyHtml: `
          <div class="tbp-panel">
            <label class="xp-check"><input type="checkbox" data-k="autohide" ${cfg.autohide ? 'checked' : ''}> Auto-hide the taskbar</label>
            <label class="xp-check"><input type="checkbox" data-k="quicklaunch" ${cfg.quicklaunch ? 'checked' : ''}> Show Quick Launch</label>
            <label class="xp-check"><input type="checkbox" data-k="clock" ${cfg.clock ? 'checked' : ''}> Show the clock</label>
          </div>`,
        buttons: [{ label: 'OK', primary: true }, { label: 'Cancel' }]
    });
    dlg.el.querySelectorAll('input[type=checkbox]').forEach(box => {
        box.addEventListener('change', () => {
            cfg[box.dataset.k] = box.checked;
            Store.set('xpTaskbarPrefs', cfg);
            applyTaskbarPrefs();
        });
    });
}

function showUserAccounts() {
    showDialog({
        title: 'User Accounts',
        icon: 'assets/start-avatar.png',
        width: 360,
        bodyHtml: `
          <div class="ua-panel">
            <img class="ua-avatar" src="assets/start-avatar.png" alt="">
            <div>
              <h3>${escHtml(VFS.USER)}</h3>
              <p>Computer administrator</p>
              <p class="dp-hint">Password protected — well, it would be, if this were a real computer.</p>
            </div>
          </div>`,
        buttons: [{ label: 'OK', primary: true }]
    });
}

// Open the browser's file picker without leaving a stray <input> behind.
function pickLocalFiles(accept, callback, multiple = false) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept || '';
    input.multiple = !!multiple;
    input.style.display = 'none';
    document.body.appendChild(input);
    input.addEventListener('change', () => {
        callback([...input.files]);
        input.remove();
    });
    input.click();
}


/* ===== 14. Window manager extras ===========================================
   Edge resizing on all eight sides, drag-to-edge snapping with a preview,
   the system menu on the title bar, and an Alt+Tab switcher.
   ========================================================================= */

const EDGE_DIRECTIONS = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];

function installEdgeResizers(win) {
    EDGE_DIRECTIONS.forEach(dir => {
        const handle = document.createElement('div');
        handle.className = 'rs-edge rs-' + dir;
        win.appendChild(handle);
        handle.addEventListener('mousedown', (e) => {
            if (win.classList.contains('maximized')) return;
            e.preventDefault();
            e.stopPropagation();
            bringToFront(win);
            const startRect = win.getBoundingClientRect();
            const sx = e.clientX, sy = e.clientY;
            const minW = parseInt(win.dataset.minW || '200', 10);
            const minH = parseInt(win.dataset.minH || '150', 10);
            document.body.classList.add('resizing');

            const onMove = (ev) => {
                const dx = ev.clientX - sx;
                const dy = ev.clientY - sy;
                let { left, top, width, height } = {
                    left: startRect.left, top: startRect.top,
                    width: startRect.width, height: startRect.height
                };
                if (dir.includes('e')) width = Math.max(minW, startRect.width + dx);
                if (dir.includes('s')) height = Math.max(minH, startRect.height + dy);
                if (dir.includes('w')) {
                    width = Math.max(minW, startRect.width - dx);
                    left = startRect.right - width;
                }
                if (dir.includes('n')) {
                    height = Math.max(minH, startRect.height - dy);
                    top = Math.max(0, startRect.bottom - height);
                    height = startRect.bottom - top;
                }
                win.style.left = Math.round(left) + 'px';
                win.style.top = Math.round(top) + 'px';
                win.style.width = Math.round(width) + 'px';
                win.style.height = Math.round(height) + 'px';
                win.dispatchEvent(new CustomEvent('windowResizing'));
            };
            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                document.body.classList.remove('resizing');
                win.dispatchEvent(new CustomEvent('windowResized'));
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });
    });
}

/* ---- drag-to-edge snapping ---- */
let snapPreviewEl = null;

function snapZoneFor(x, y) {
    const EDGE = 12;
    if (y <= EDGE) return 'top';
    if (x <= EDGE) return 'left';
    if (x >= window.innerWidth - EDGE) return 'right';
    return null;
}

function snapRect(zone) {
    const h = workAreaHeight();
    switch (zone) {
        case 'top':   return { left: 0, top: 0, width: window.innerWidth, height: h };
        case 'left':  return { left: 0, top: 0, width: Math.round(window.innerWidth / 2), height: h };
        case 'right': return { left: Math.round(window.innerWidth / 2), top: 0,
                               width: window.innerWidth - Math.round(window.innerWidth / 2), height: h };
        default: return null;
    }
}

function updateSnapPreview(x, y) {
    const zone = snapZoneFor(x, y);
    if (!zone) return hideSnapPreview();
    const r = snapRect(zone);
    if (!snapPreviewEl) {
        snapPreviewEl = document.createElement('div');
        snapPreviewEl.className = 'snap-preview';
        document.body.appendChild(snapPreviewEl);
    }
    Object.assign(snapPreviewEl.style, {
        left: r.left + 'px', top: r.top + 'px',
        width: r.width + 'px', height: r.height + 'px', display: 'block'
    });
}

function hideSnapPreview() {
    if (snapPreviewEl) snapPreviewEl.style.display = 'none';
}

function applySnap(win, zone) {
    const r = snapRect(zone);
    if (!r) return;
    if (zone === 'top') {
        if (!win._isMaximized || !win._isMaximized()) win._toggleMaximize();
        return;
    }
    const cur = win.getBoundingClientRect();
    win._maxPrev = win._maxPrev || {
        left: parseFloat(win.style.left) || cur.left,
        top: parseFloat(win.style.top) || cur.top,
        width: cur.width, height: cur.height
    };
    win._snapped = zone;
    XPAudio.play('maximize');
    animateWindowTo(win, r, 150, 'cubic-bezier(0.25, 0.1, 0.25, 1)', () => {
        win.style.left = r.left + 'px';
        win.style.top = r.top + 'px';
        win.style.width = r.width + 'px';
        win.style.height = r.height + 'px';
        win.dispatchEvent(new CustomEvent('windowResized'));
    });
}

/* ---- the system (window) menu ---- */
function windowMenuItems(win) {
    const maximized = win._isMaximized && win._isMaximized();
    return [
        { label: 'Restore', disabled: !maximized && !win._snapped, action: () => win._toggleMaximize && win._toggleMaximize() },
        { label: 'Move', disabled: true },
        { label: 'Size', disabled: true },
        { label: 'Minimize', action: () => minimizeWindow(win) },
        { label: 'Maximize', disabled: !!maximized, action: () => win._toggleMaximize && win._toggleMaximize() },
        { sep: true },
        { html: 'Close<span class="ctx-accel">Alt+F4</span>', label: 'Close', action: () => closeWindow(win) }
    ];
}

function installWindowMenu(win) {
    const header = win.querySelector('.popup-header');
    const icon = win.querySelector('.popup-icon');
    const show = (x, y) => showContextMenu(x, y, windowMenuItems(win));
    if (icon) {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const r = icon.getBoundingClientRect();
            show(r.left, r.bottom);
        });
    }
    header.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        show(e.clientX, e.clientY);
    });
}

/* ---- Alt+Tab switcher ---- */
const TaskSwitcher = (() => {
    let overlay = null;
    let order = [];
    let index = 0;

    function openWindowsInOrder() {
        return [...document.querySelectorAll('.popup')]
            .sort((a, b) => (parseFloat(b.style.zIndex) || 0) - (parseFloat(a.style.zIndex) || 0));
    }

    function open() {
        order = openWindowsInOrder();
        if (order.length < 2) return false;
        index = 1;
        overlay = document.createElement('div');
        overlay.className = 'alt-tab';
        overlay.innerHTML = `<div class="alt-tab-grid"></div><div class="alt-tab-label"></div>`;
        document.body.appendChild(overlay);
        render();
        return true;
    }

    function render() {
        if (!overlay) return;
        const grid = overlay.querySelector('.alt-tab-grid');
        grid.innerHTML = order.map((w, i) => `
            <div class="alt-tab-item ${i === index ? 'active' : ''}">
              <img src="${escAttr(w.dataset.icon)}" alt="">
            </div>`).join('');
        overlay.querySelector('.alt-tab-label').textContent =
            (order[index].querySelector('.popup-title') || {}).textContent || '';
    }

    function next(step) {
        if (!overlay) return;
        index = (index + step + order.length) % order.length;
        render();
    }

    function commit() {
        if (!overlay) return;
        const win = order[index];
        overlay.remove();
        overlay = null;
        if (!win) return;
        if (win.style.display === 'none') restoreWindow(win);
        else bringToFront(win);
    }

    function cancel() {
        if (overlay) { overlay.remove(); overlay = null; }
    }

    return {
        get open() { return !!overlay; },
        start: open, next, commit, cancel
    };
})();


/* ===== 15. Taskbar: Quick Launch, tray, Show Desktop ======================= */

let showDesktopActive = false;
let showDesktopMemo = [];

function toggleShowDesktop() {
    const windows = [...document.querySelectorAll('.popup')];
    if (!showDesktopActive) {
        showDesktopMemo = windows.filter(w => w.style.display !== 'none');
        showDesktopMemo.forEach(minimizeWindow);
        showDesktopActive = showDesktopMemo.length > 0;
    } else {
        showDesktopMemo.filter(w => w.isConnected).forEach(restoreWindow);
        showDesktopMemo = [];
        showDesktopActive = false;
    }
}

function setupQuickLaunch() {
    const bar = document.getElementById('quick-launch');
    if (!bar) return;
    bar.querySelectorAll('.ql-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            XPAudio.play('click');
            if (btn.dataset.app === 'showdesktop') toggleShowDesktop();
            else launchApp(btn.dataset.app);
        });
    });
}

function syncVolumeUi() {
    const btn = document.getElementById('tray-volume');
    if (!btn) return;
    btn.classList.toggle('tray-muted', XPAudio.muted || XPAudio.volume === 0);
    btn.dataset.tip = XPAudio.muted ? 'Volume — muted' : `Volume — ${Math.round(XPAudio.volume * 100)}%`;
    const popup = document.querySelector('.tray-volume-popup');
    if (popup) {
        const slider = popup.querySelector('.tvp-slider');
        const mute = popup.querySelector('.tvp-mute');
        if (slider) slider.value = String(Math.round(XPAudio.volume * 100));
        if (mute) mute.checked = XPAudio.muted;
    }
}

function setupTray() {
    const volumeBtn = document.getElementById('tray-volume');
    const networkBtn = document.getElementById('tray-network');

    function closeVolumePopup() {
        document.querySelectorAll('.tray-volume-popup').forEach(p => p.remove());
    }

    if (volumeBtn) {
        volumeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            XPAudio.unlock();
            if (document.querySelector('.tray-volume-popup')) return closeVolumePopup();
            const popup = document.createElement('div');
            popup.className = 'tray-volume-popup';
            popup.innerHTML = `
                <div class="tvp-title">Volume</div>
                <input class="tvp-slider" type="range" min="0" max="100" step="1"
                       value="${Math.round(XPAudio.volume * 100)}" orient="vertical">
                <label class="tvp-mute-row"><input class="tvp-mute" type="checkbox" ${XPAudio.muted ? 'checked' : ''}> Mute</label>`;
            document.body.appendChild(popup);
            const r = volumeBtn.getBoundingClientRect();
            popup.style.left = Math.min(window.innerWidth - popup.offsetWidth - 4,
                Math.max(4, r.left + r.width / 2 - popup.offsetWidth / 2)) + 'px';
            popup.style.bottom = (getTaskbarHeight() + 4) + 'px';

            const slider = popup.querySelector('.tvp-slider');
            slider.addEventListener('input', () => { XPAudio.volume = slider.value / 100; syncVolumeUi(); });
            slider.addEventListener('change', () => XPAudio.play('ding'));
            popup.querySelector('.tvp-mute').addEventListener('change', (ev) => {
                XPAudio.muted = ev.target.checked;
                syncVolumeUi();
            });
            popup.addEventListener('click', (ev) => ev.stopPropagation());
        });
        volumeBtn.addEventListener('dblclick', () => { closeVolumePopup(); showSoundProperties(); });
        volumeBtn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showContextMenu(e.clientX, e.clientY, [
                { label: 'Open Volume Control', action: () => showSoundProperties() },
                { label: XPAudio.muted ? 'Unmute' : 'Mute', action: () => { XPAudio.muted = !XPAudio.muted; syncVolumeUi(); } },
                { sep: true },
                { label: 'Adjust Audio Properties', action: () => showSoundProperties() }
            ]);
        });
    }

    if (networkBtn) {
        networkBtn.addEventListener('click', () => {
            notify({
                title: 'Local Area Connection',
                text: 'Speed: 100.0 Mbps   Status: Connected',
                icon: SysIcons.network
            });
        });
        networkBtn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showContextMenu(e.clientX, e.clientY, [
                { label: 'Open Network Connections', action: () => showNotImplemented('Network Connections') },
                { label: 'Repair', action: () => notify({ title: 'Repair', text: 'The connection has been repaired.', icon: SysIcons.info }) },
                { sep: true },
                { label: 'Status', action: () => networkBtn.click() }
            ]);
        });
    }

    document.addEventListener('click', closeVolumePopup);
    syncVolumeUi();
}

function applyTaskbarPrefs() {
    const cfg = Store.get('xpTaskbarPrefs', { autohide: false, clock: true, quicklaunch: true });
    const taskbar = document.querySelector('.taskbar');
    const ql = document.getElementById('quick-launch');
    const clock = document.getElementById('taskbar-clock');
    if (taskbar) taskbar.classList.toggle('taskbar-autohide', !!cfg.autohide);
    if (ql) ql.classList.toggle('hidden', !cfg.quicklaunch);
    if (clock) clock.classList.toggle('hidden', !cfg.clock);
}

// Right-click / middle-click behaviour on taskbar buttons, plus hover tips.
function enhanceTaskbarItem(item, win) {
    item.dataset.tip = (win.querySelector('.popup-title') || {}).textContent || '';
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showContextMenu(e.clientX, e.clientY, windowMenuItems(win));
    });
    item.addEventListener('mousedown', (e) => {
        if (e.button === 1) { e.preventDefault(); closeWindow(win); }
    });
}

// Right-clicking the taskbar itself.
function setupTaskbarContextMenu() {
    const taskbar = document.querySelector('.taskbar');
    if (!taskbar) return;
    taskbar.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.taskbar-item, .tray-icon, #taskbar-clock')) return;
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, [
            { label: 'Cascade Windows', action: () => arrangeWindows('cascade') },
            { label: 'Tile Windows Horizontally', action: () => arrangeWindows('h') },
            { label: 'Tile Windows Vertically', action: () => arrangeWindows('v') },
            { label: 'Show the Desktop', action: () => toggleShowDesktop() },
            { sep: true },
            { label: 'Task Manager', action: () => openTaskManager() },
            { sep: true },
            { label: 'Properties', action: () => showTaskbarProperties() }
        ]);
    });
}

function arrangeWindows(mode) {
    const wins = [...document.querySelectorAll('.popup')].filter(w => w.style.display !== 'none');
    if (!wins.length) return;
    const H = workAreaHeight();
    const W = window.innerWidth;
    wins.forEach((w, i) => {
        w.classList.remove('maximized');
        w._snapped = null;
        let rect;
        if (mode === 'cascade') {
            rect = { left: 20 + i * 26, top: 20 + i * 26,
                     width: Math.min(640, W - 60 - i * 26), height: Math.min(460, H - 60 - i * 26) };
        } else if (mode === 'h') {
            const h = Math.floor(H / wins.length);
            rect = { left: 0, top: i * h, width: W, height: h };
        } else {
            const wdt = Math.floor(W / wins.length);
            rect = { left: i * wdt, top: 0, width: wdt, height: H };
        }
        animateWindowTo(w, rect, 160, 'ease-out', () => {
            w.style.left = rect.left + 'px';
            w.style.top = rect.top + 'px';
            w.style.width = Math.max(240, rect.width) + 'px';
            w.style.height = Math.max(160, rect.height) + 'px';
            w.dispatchEvent(new CustomEvent('windowResized'));
        });
    });
}


/* ===== 16. Start menu: All Programs, Log Off, Turn Off ===================== */

const ALL_PROGRAMS = [
    { name: 'Accessories', icon: null, items: [
        { name: 'Calculator', icon: 'assets/start-controlpanel.png', app: 'calc' },
        { name: 'Command Prompt', icon: null, app: 'cmd' },
        { name: 'Notepad', icon: 'assets/notepad-icon.png', app: 'notepad' },
        { name: 'Paint', icon: 'assets/paint-icon.png', app: 'paint' },
        { name: 'Windows Explorer', icon: 'assets/folder-icon.png', app: 'explorer' }
    ]},
    { name: 'Games', icon: 'assets/start-minesweeper.png', items: [
        { name: 'Minesweeper', icon: 'assets/start-minesweeper.png', app: 'minesweeper' },
        { name: 'Snake', icon: 'assets/snake-icon.png', app: 'snake' }
    ]},
    { name: 'System Tools', icon: 'assets/start-mycomputer.png', items: [
        { name: 'Task Manager', icon: 'assets/start-controlpanel.png', app: 'taskmgr' },
        { name: 'Control Panel', icon: 'assets/start-controlpanel.png', app: 'controlpanel' },
        { name: 'Search', icon: 'assets/start-search.png', app: 'search' },
        { name: 'System Information', icon: 'assets/start-mycomputer.png', app: 'sysinfo' }
    ]},
    { sep: true },
    { name: 'Internet Explorer', icon: 'assets/internet-explorer-2-icon.png', app: 'internet' },
    { name: 'Outlook Express', icon: 'assets/start-email.png', app: 'email' },
    { name: "Marco's Blog", icon: null, app: 'blog' },
    { name: 'Windows Media Player', icon: 'assets/start-mediaplayer.png', app: 'mediaplayer' }
];

// The All Programs flyout lives on <body>, not inside the Start menu: the
// menu clips its own overflow to keep the rounded corners, which would cut
// the flyout off.
let allProgramsFlyout = null;
let allProgramsHideTimer = null;

function buildAllProgramsFlyout() {
    const anchor = document.querySelector('.start-menu-all');
    const startMenu = document.getElementById('start-menu');
    if (!anchor || allProgramsFlyout) return;

    const flyout = document.createElement('div');
    flyout.className = 'start-flyout';
    flyout.style.display = 'none';

    const render = (list, container) => {
        list.forEach(entry => {
            if (entry.sep) {
                const sep = document.createElement('div');
                sep.className = 'start-flyout-sep';
                container.appendChild(sep);
                return;
            }
            const row = document.createElement('div');
            row.className = 'start-flyout-item' + (entry.items ? ' has-sub' : '');
            const iconSrc = entry.icon || (entry.app === 'cmd' ? (iconContent.cmd.icon || '')
                : entry.app === 'blog' ? (iconContent.blog.icon || '') : ALL_PROGRAMS_ICON);
            row.innerHTML = `<img src="${escAttr(iconSrc)}" alt=""><span>${escHtml(entry.name)}</span>` +
                (entry.items ? '<span class="start-chevron">&#9656;</span>' : '');
            if (entry.items) {
                const sub = document.createElement('div');
                sub.className = 'start-flyout start-flyout-sub';
                render(entry.items, sub);
                row.appendChild(sub);
            } else {
                row.addEventListener('click', (e) => {
                    e.stopPropagation();
                    hideAllPrograms();
                    startMenu.classList.add('hidden');
                    document.getElementById('start-button').classList.remove('start-open');
                    XPAudio.play('click');
                    launchApp(entry.app);
                });
            }
            container.appendChild(row);
        });
    };
    render(ALL_PROGRAMS, flyout);
    document.body.appendChild(flyout);
    allProgramsFlyout = flyout;

    const show = () => {
        clearTimeout(allProgramsHideTimer);
        const menuRect = startMenu.getBoundingClientRect();
        const itemRect = anchor.getBoundingClientRect();
        flyout.style.display = 'flex';
        const height = flyout.offsetHeight;
        flyout.style.left = Math.min(menuRect.right - 2, window.innerWidth - flyout.offsetWidth - 4) + 'px';
        flyout.style.top = Math.max(4, Math.min(itemRect.bottom - height, workAreaHeight() - height)) + 'px';
    };
    const scheduleHide = () => {
        clearTimeout(allProgramsHideTimer);
        allProgramsHideTimer = setTimeout(hideAllPrograms, 260);
    };

    anchor.addEventListener('mouseenter', show);
    anchor.addEventListener('click', (e) => { e.stopPropagation(); show(); });
    anchor.addEventListener('mouseleave', scheduleHide);
    flyout.addEventListener('mouseenter', () => clearTimeout(allProgramsHideTimer));
    flyout.addEventListener('mouseleave', scheduleHide);

    // Hovering any other Start menu entry closes the flyout, like the real menu
    document.querySelectorAll('.start-menu-item:not(.start-menu-all)').forEach(item =>
        item.addEventListener('mouseenter', hideAllPrograms));
}

function hideAllPrograms() {
    clearTimeout(allProgramsHideTimer);
    if (allProgramsFlyout) allProgramsFlyout.style.display = 'none';
}

function showLogOffDialog() {
    showDialog({
        title: 'Log Off Windows',
        icon: 'assets/start-avatar.png',
        width: 400,
        modal: true,
        className: 'xp-shell-dialog',
        sound: 'click',
        bodyHtml: `
            <div class="shell-choices">
                <button class="shell-choice" data-act="switch">
                    <span class="shell-orb shell-orb-switch">&#128100;</span>
                    <span>Switch User</span>
                </button>
                <button class="shell-choice" data-act="logoff">
                    <span class="shell-orb shell-orb-logoff">&#8631;</span>
                    <span>Log Off</span>
                </button>
            </div>
            <p class="shell-note">Are you sure you want to log off?</p>`,
        buttons: [{ label: 'Cancel' }]
    }).el.querySelectorAll('.shell-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.xp-dialog, .xp-modal-backdrop').forEach(n => n.remove());
            XPAudio.play('logoff');
            runShutdownSequence(btn.dataset.act === 'switch' ? 'switch' : 'logoff');
        });
    });
}

function showTurnOffDialog() {
    const dlg = showDialog({
        title: 'Turn off computer',
        icon: 'assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png',
        width: 440,
        modal: true,
        className: 'xp-shell-dialog xp-turnoff',
        sound: 'click',
        bodyHtml: `
            <div class="shell-choices">
                <button class="shell-choice" data-act="standby">
                    <span class="shell-orb shell-orb-standby">&#9790;</span>
                    <span>Stand By</span>
                </button>
                <button class="shell-choice" data-act="off">
                    <span class="shell-orb shell-orb-off">&#9211;</span>
                    <span>Turn Off</span>
                </button>
                <button class="shell-choice" data-act="restart">
                    <span class="shell-orb shell-orb-restart">&#8635;</span>
                    <span>Restart</span>
                </button>
            </div>`,
        buttons: [{ label: 'Cancel' }]
    });
    dlg.el.querySelectorAll('.shell-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const act = btn.dataset.act;
            document.querySelectorAll('.xp-dialog, .xp-modal-backdrop').forEach(n => n.remove());
            if (act === 'standby') { ScreenSaver.start(Store.get(SAVER_KEY, 'logo')); return; }
            XPAudio.play('shutdown');
            runShutdownSequence(act);
        });
    });
    return dlg;
}


/* ===== 17. Boot, logon and shutdown ========================================
   The lifecycle that frames the whole thing: the loader, the welcome screen
   with the user tile, and the "It is now safe…" screen on the way out.
   Returning visitors skip straight past the welcome screen.
   ========================================================================= */

const BOOT_MESSAGES = [
    'Starting Windows…',
    'Loading your personal settings…',
    'Applying your desktop preferences…',
    'Preparing the desktop…'
];

function runBootSequence() {
    const splash = document.getElementById('bootSplash');
    const logon = document.getElementById('logonScreen');
    const text = document.getElementById('bootText');
    if (!splash) { finishBoot(); return; }

    // Anyone who has been here before gets a short boot and no welcome screen
    const returning = Store.get('xpHasBooted', false);
    const bootMs = returning ? 1200 : 2400;

    let i = 0;
    const cycle = setInterval(() => {
        i = (i + 1) % BOOT_MESSAGES.length;
        if (text) text.textContent = BOOT_MESSAGES[i];
    }, bootMs / BOOT_MESSAGES.length);

    setTimeout(() => {
        clearInterval(cycle);
        splash.classList.add('boot-out');
        setTimeout(() => splash.remove(), 450);

        if (returning || !logon) {
            if (logon) logon.remove();
            finishBoot();
            return;
        }
        showLogon(logon);
    }, bootMs);
}

function showLogon(logon) {
    logon.classList.remove('hidden');
    requestAnimationFrame(() => logon.classList.add('logon-in'));

    let entering = false;
    const enter = () => {
        if (entering) return;
        entering = true;
        document.removeEventListener('keydown', onKey);
        XPAudio.unlock();
        logon.querySelector('.logon-right').innerHTML =
            `<p class="logon-prompt">Loading your personal settings…</p>
             <div class="logon-spinner"><i></i><i></i><i></i></div>`;
        setTimeout(() => {
            logon.classList.add('logon-out');
            setTimeout(() => logon.remove(), 600);
            finishBoot();
        }, 900);
    };

    // Any key also logs on, like the real welcome screen
    function onKey(e) {
        if (e.key === 'Escape') return;
        enter();
    }

    logon.querySelectorAll('.logon-user').forEach(btn => btn.addEventListener('click', enter));
    document.addEventListener('keydown', onKey);
}

// Runs once the desktop is actually visible.
function finishBoot() {
    Store.set('xpHasBooted', true);
    document.body.classList.add('booted');
    XPAudio.play('startup');
    ScreenSaver.reset();

    // The classic first-run balloon, but only the first time
    if (!Store.get('xpSeenWelcome', false)) {
        Store.set('xpSeenWelcome', true);
        setTimeout(() => notify({
            title: 'Welcome to my desktop',
            text: 'Double-click the icons, right-click anywhere, and try the Start menu. Click here for a quick tour.',
            icon: SysIcons.info,
            timeout: 12000,
            onClick: () => openHelpCenter()
        }), 2200);
    }
}

function runShutdownSequence(mode) {
    ScreenSaver.stop();
    document.querySelectorAll('.popup').forEach(w => w.remove());
    openWindows = {};
    document.querySelectorAll('.taskbar-item').forEach(i => i.remove());

    const overlay = document.createElement('div');
    overlay.className = 'shutdown-screen';
    overlay.innerHTML = `
        <div class="shutdown-inner">
            <div class="boot-brand">
                <img class="boot-flag" src="assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png" alt="">
                <div class="boot-wordmark">
                    <span class="boot-ms">Microsoft&reg;</span>
                    <span class="boot-win">Windows<span class="boot-xp">xp</span></span>
                </div>
            </div>
            <span class="shutdown-text">${mode === 'restart' ? 'Windows is restarting…'
                : mode === 'logoff' || mode === 'switch' ? 'Logging off…'
                : 'Windows is shutting down…'}</span>
            <div class="boot-progress-bar"><div class="boot-blocks"><i></i><i></i><i></i></div></div>
        </div>`;
    document.body.appendChild(overlay);

    setTimeout(() => {
        if (mode === 'restart' || mode === 'logoff' || mode === 'switch') {
            // A restart really does restart: reload and boot again
            Store.del('xpHasBooted');
            location.reload();
            return;
        }
        overlay.innerHTML = `
            <div class="shutdown-inner shutdown-off">
                <span class="shutdown-off-text">It is now safe to turn off your computer.</span>
                <button class="shutdown-restart">Turn it back on</button>
            </div>`;
        overlay.querySelector('.shutdown-restart').addEventListener('click', () => {
            Store.del('xpHasBooted');
            location.reload();
        });
    }, 2200);
}


/* ===== 18. Screen saver ====================================================
   Starts after the desktop has been idle for the configured number of
   minutes, and dies at the first sign of life.
   ========================================================================= */
const ScreenSaver = (() => {
    let canvas = null;
    let raf = null;
    let idleTimer = null;
    let running = false;

    function stop() {
        if (!running) return;
        running = false;
        cancelAnimationFrame(raf);
        if (canvas) { canvas.remove(); canvas = null; }
        document.body.classList.remove('saver-on');
        reset();
    }

    function start(kind) {
        if (running) return;
        kind = kind || Store.get(SAVER_KEY, 'logo');
        if (kind === 'none') return;
        running = true;
        document.body.classList.add('saver-on');

        canvas = document.createElement('canvas');
        canvas.className = 'screensaver';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const W = () => canvas.width;
        const H = () => canvas.height;

        const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener('resize', onResize);

        const scenes = {
            // The XP logo drifting around and bouncing off the edges
            logo: (() => {
                const img = new Image();
                img.src = 'assets/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png';
                let x = W() / 2, y = H() / 2, vx = 2.2, vy = 1.6, hue = 210;
                return () => {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, W(), H());
                    const w = 160, h = 160 * (img.naturalHeight / (img.naturalWidth || 1) || 1);
                    x += vx; y += vy;
                    if (x <= 0 || x + w >= W()) { vx *= -1; hue = (hue + 60) % 360; }
                    if (y <= 0 || y + h >= H()) { vy *= -1; hue = (hue + 60) % 360; }
                    x = Math.max(0, Math.min(x, W() - w));
                    y = Math.max(0, Math.min(y, H() - h));
                    ctx.save();
                    ctx.globalAlpha = 0.95;
                    ctx.filter = `drop-shadow(0 0 24px hsl(${hue} 90% 55%))`;
                    if (img.complete && img.naturalWidth) ctx.drawImage(img, x, y, w, h);
                    ctx.restore();
                };
            })(),

            // Flying through stars
            starfield: (() => {
                const stars = Array.from({ length: 420 }, () => ({
                    x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random()
                }));
                return () => {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, W(), H());
                    const cx = W() / 2, cy = H() / 2;
                    stars.forEach(s => {
                        s.z -= 0.006;
                        if (s.z <= 0.01) { s.x = Math.random() * 2 - 1; s.y = Math.random() * 2 - 1; s.z = 1; }
                        const k = 0.6 / s.z;
                        const px = cx + s.x * k * cx;
                        const py = cy + s.y * k * cy;
                        if (px < 0 || px > W() || py < 0 || py > H()) return;
                        const size = Math.max(0.4, (1 - s.z) * 2.6);
                        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, 1 - s.z + 0.15)})`;
                        ctx.fillRect(px, py, size, size);
                    });
                };
            })(),

            // Scrolling 3D-ish text
            marquee: (() => {
                let t = 0;
                const text = 'Marco Tancredi — XP Portfolio';
                return () => {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, W(), H());
                    t += 0.012;
                    const cx = W() / 2, cy = H() / 2;
                    ctx.save();
                    ctx.translate(cx, cy);
                    ctx.scale(1, 0.55 + 0.45 * Math.abs(Math.cos(t)));
                    ctx.rotate(Math.sin(t * 0.7) * 0.16);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.font = 'bold 62px Tahoma, sans-serif';
                    for (let d = 12; d >= 0; d--) {
                        const shade = 40 + d * 8;
                        ctx.fillStyle = d === 0
                            ? `hsl(${(t * 60) % 360} 85% 62%)`
                            : `rgb(${shade / 3},${shade / 2},${shade})`;
                        ctx.fillText(text, d * 0.9, d * 0.9);
                    }
                    ctx.restore();
                };
            })(),

            // Mystify: two drifting polygons trailing colour
            mystify: (() => {
                const makePoly = (hue) => ({
                    hue,
                    pts: Array.from({ length: 4 }, () => ({
                        x: Math.random() * W(), y: Math.random() * H(),
                        vx: (Math.random() * 2 - 1) * 2.4, vy: (Math.random() * 2 - 1) * 2.4
                    })),
                    trail: []
                });
                const polys = [makePoly(200), makePoly(320)];
                return () => {
                    ctx.fillStyle = 'rgba(0,0,0,0.14)';
                    ctx.fillRect(0, 0, W(), H());
                    polys.forEach(p => {
                        p.pts.forEach(pt => {
                            pt.x += pt.vx; pt.y += pt.vy;
                            if (pt.x < 0 || pt.x > W()) pt.vx *= -1;
                            if (pt.y < 0 || pt.y > H()) pt.vy *= -1;
                        });
                        p.trail.push(p.pts.map(pt => ({ x: pt.x, y: pt.y })));
                        if (p.trail.length > 14) p.trail.shift();
                        p.trail.forEach((frame, i) => {
                            ctx.beginPath();
                            frame.forEach((pt, j) => j ? ctx.lineTo(pt.x, pt.y) : ctx.moveTo(pt.x, pt.y));
                            ctx.closePath();
                            ctx.strokeStyle = `hsla(${(p.hue + i * 6) % 360} 90% 60% / ${(i + 1) / p.trail.length})`;
                            ctx.lineWidth = 1.4;
                            ctx.stroke();
                        });
                    });
                };
            })()
        };

        const draw = scenes[kind] || scenes.logo;
        const loop = () => {
            if (!running) return;
            draw();
            raf = requestAnimationFrame(loop);
        };
        loop();

        const wake = () => { window.removeEventListener('resize', onResize); stop(); };
        ['mousedown', 'mousemove', 'keydown', 'wheel', 'touchstart'].forEach(evt =>
            document.addEventListener(evt, wake, { once: true, passive: true }));
    }

    function reset() {
        clearTimeout(idleTimer);
        const kind = Store.get(SAVER_KEY, 'logo');
        if (kind === 'none' || !document.body.classList.contains('booted')) return;
        const minutes = Math.max(1, parseInt(Store.get(SAVER_WAIT_KEY, 5), 10) || 5);
        idleTimer = setTimeout(() => start(kind), minutes * 60000);
    }

    function init() {
        // Throttled: without this every mouse move would clear and re-arm the
        // timer, thousands of times a minute.
        let lastPoke = 0;
        const poke = () => {
            const now = Date.now();
            if (running || now - lastPoke < 1000) return;
            lastPoke = now;
            reset();
        };
        ['mousemove', 'mousedown', 'keydown', 'wheel', 'touchstart'].forEach(evt =>
            document.addEventListener(evt, poke, { passive: true }));
        reset();
    }

    return { start, stop, reset, init, get running() { return running; } };
})();


/* ===== 19. Desktop persistence =============================================
   Where icons sit, what you renamed, what you created and what you threw
   away all survive a reload — the desktop you leave is the desktop you come
   back to.
   ========================================================================= */
const LAYOUT_KEY = 'xpDesktopLayout';
const MAX_INLINE_IMAGE = 700 * 1024;   // don't persist enormous pasted images

let layoutSaveTimer = null;
function saveDesktopLayout() {
    clearTimeout(layoutSaveTimer);
    layoutSaveTimer = setTimeout(() => {
        const icons = [...document.querySelectorAll('.desktop .icon')].map(icon => {
            const img = icon.querySelector('img');
            const src = icon.dataset.image || '';
            const tooBig = src.startsWith('data:') && src.length > MAX_INLINE_IMAGE;
            return {
                id: icon.id,
                builtin: /^icon\d+$/.test(icon.id),
                label: iconLabel(icon),
                left: parseInt(icon.style.left, 10) || icon.offsetLeft,
                top: parseInt(icon.style.top, 10) || icon.offsetTop,
                cls: [...icon.classList].filter(c => c !== 'icon' && c !== 'selected' && c !== 'dragging').join(' '),
                iconSrc: img ? img.getAttribute('src') : '',
                image: tooBig ? '' : src,
                name: icon.dataset.name || '',
                opens: icon.dataset.opens || '',
                mtime: icon.dataset.mtime || ''
            };
        // A dynamic image icon whose data URL is too big to store can't be
        // rebuilt, so it is left out. Built-in icons are always kept: dropping
        // one would make it vanish from the desktop on the next reload.
        }).filter(i => i.builtin || !(i.cls.includes('image-file') && !i.image));
        Store.set(LAYOUT_KEY, { v: 1, icons });
    }, 300);
}

function restoreDesktopLayout() {
    const saved = Store.get(LAYOUT_KEY, null);
    if (!saved || !Array.isArray(saved.icons)) return;
    const byId = new Map(saved.icons.map(i => [i.id, i]));

    // Built-in icons: reposition, rename, or remove if they were deleted
    document.querySelectorAll('.desktop .icon').forEach(icon => {
        const rec = byId.get(icon.id);
        if (!rec) {
            if (/^icon\d+$/.test(icon.id)) icon.remove();   // it was thrown away
            return;
        }
        icon.style.left = rec.left + 'px';
        icon.style.top = rec.top + 'px';
        const span = icon.querySelector('span');
        if (span && rec.label && span.textContent !== rec.label) span.textContent = rec.label;
        if (rec.mtime) icon.dataset.mtime = rec.mtime;
        byId.delete(icon.id);
    });

    // Anything left is something the visitor created last time
    saved.icons.filter(rec => byId.has(rec.id) && !rec.builtin).forEach(rec => {
        const icon = createDesktopIcon({
            iconSrc: rec.iconSrc || 'assets/image-file-icon.png',
            label: rec.label,
            className: rec.cls,
            dataset: rec.image ? { image: rec.image, name: rec.name || rec.label } : undefined,
            dataOpens: rec.opens || undefined,
            x: null, y: null
        });
        if (icon) {
            // Put it back exactly where it was, not on the next free slot
            icon.style.left = rec.left + 'px';
            icon.style.top = rec.top + 'px';
            if (rec.mtime) icon.dataset.mtime = rec.mtime;
        }
    });
}

// Anything that changes the desktop schedules a save.
function watchDesktopChanges() {
    const desktop = document.querySelector('.desktop');
    if (!desktop) return;
    const observer = new MutationObserver(saveDesktopLayout);
    observer.observe(desktop, { childList: true, subtree: true, attributes: true,
        attributeFilter: ['style', 'class', 'data-name', 'data-mtime'] });
}


/* ===== 20. Desktop keyboard & drag-and-drop from the real computer ========= */

// Icons deleted with the keyboard can be brought straight back with Ctrl+Z.
const undoStack = [];

function setupDesktopKeyboard() {
    document.addEventListener('keydown', (e) => {
        // Alt+Tab is handled first: it works no matter what has focus
        if (e.key === 'Tab' && e.altKey) {
            e.preventDefault();
            if (!TaskSwitcher.open) { if (!TaskSwitcher.start()) return; }
            else TaskSwitcher.next(e.shiftKey ? -1 : 1);
            return;
        }
        if (e.key === 'F4' && e.altKey) {
            e.preventDefault();
            const active = document.querySelector('.popup.active-window');
            if (active) closeWindow(active);
            return;
        }
        if (e.ctrlKey && e.shiftKey && e.key === 'Escape') { e.preventDefault(); openTaskManager(); return; }
        if (e.key === 'Meta' || e.key === 'OS') return;

        const typing = e.target.closest('input, textarea, [contenteditable="true"]');
        const windowFocused = document.querySelector('.popup.active-window');
        if (typing || windowFocused) return;

        const selected = getSelectedIcons();
        switch (e.key) {
            case 'F2':
                if (selected.length === 1) { e.preventDefault(); renameIcon(selected[0]); }
                break;
            case 'Delete':
                if (selected.length) {
                    e.preventDefault();
                    const removable = selected.filter(isDeletable);
                    if (!removable.length) { XPAudio.play('error'); return; }
                    undoStack.push(removable.map(binEntryFor));
                    moveIconsToBin(removable);
                    XPAudio.play('recycle');
                }
                break;
            case 'Enter':
                if (selected.length) { e.preventDefault(); selected.forEach(openIconWindow); }
                break;
            case 'a': case 'A':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    document.querySelectorAll('.desktop .icon').forEach(i => i.classList.add('selected'));
                }
                break;
            case 'z': case 'Z':
                if ((e.ctrlKey || e.metaKey) && undoStack.length) {
                    e.preventDefault();
                    undoStack.pop().forEach(entry => {
                        const idx = recycleBin.findIndex(b => b.label === entry.label);
                        if (idx !== -1) restoreBinItem(idx);
                    });
                }
                break;
            case 'F5':
                e.preventDefault();
                refreshExplorerWindows();
                notify({ title: 'Desktop', text: 'Refreshed.', icon: SysIcons.info, timeout: 1800 });
                break;
            case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight': {
                const icons = [...document.querySelectorAll('.desktop .icon')];
                if (!icons.length) break;
                e.preventDefault();
                const cur = selected[0];
                const next = nearestIcon(icons, cur, e.key);
                if (next) { deselectAllIcons(); next.classList.add('selected'); }
                break;
            }
        }
    });

    // Releasing Alt commits the Alt+Tab selection
    document.addEventListener('keyup', (e) => {
        if ((e.key === 'Alt' || !e.altKey) && TaskSwitcher.open) TaskSwitcher.commit();
    });
    window.addEventListener('blur', () => TaskSwitcher.cancel());
}

// Pick the closest icon in a direction, so arrow keys walk the grid sensibly.
function nearestIcon(icons, from, key) {
    if (!from) return icons[0];
    const a = { x: from.offsetLeft, y: from.offsetTop };
    const axis = (key === 'ArrowLeft' || key === 'ArrowRight') ? 'x' : 'y';
    const sign = (key === 'ArrowRight' || key === 'ArrowDown') ? 1 : -1;
    const candidates = icons
        .filter(i => i !== from)
        .map(i => ({ el: i, x: i.offsetLeft, y: i.offsetTop }))
        .filter(i => (i[axis] - a[axis]) * sign > 0)
        .sort((p, q) => {
            const dp = Math.abs(p[axis] - a[axis]) * 2 + Math.abs(p[axis === 'x' ? 'y' : 'x'] - a[axis === 'x' ? 'y' : 'x']);
            const dq = Math.abs(q[axis] - a[axis]) * 2 + Math.abs(q[axis === 'x' ? 'y' : 'x'] - a[axis === 'x' ? 'y' : 'x']);
            return dp - dq;
        });
    return candidates.length ? candidates[0].el : null;
}

// Drop files from the visitor's own computer onto the desktop.
function setupFileDrop() {
    const desktop = document.querySelector('.desktop');
    if (!desktop) return;
    let overlay = null;

    const showOverlay = () => {
        if (overlay) return;
        overlay = document.createElement('div');
        overlay.className = 'drop-overlay';
        overlay.innerHTML = `<div class="drop-overlay-inner">
            <img src="assets/folder-icon.png" alt="">
            <span>Drop your files on the desktop</span></div>`;
        document.body.appendChild(overlay);
    };
    const hideOverlay = () => { if (overlay) { overlay.remove(); overlay = null; } };

    let depth = 0;
    document.addEventListener('dragenter', (e) => {
        if (![...(e.dataTransfer ? e.dataTransfer.types : [])].includes('Files')) return;
        depth++;
        showOverlay();
    });
    document.addEventListener('dragleave', () => {
        depth = Math.max(0, depth - 1);
        if (!depth) hideOverlay();
    });
    document.addEventListener('dragover', (e) => {
        if ([...(e.dataTransfer ? e.dataTransfer.types : [])].includes('Files')) e.preventDefault();
    });
    document.addEventListener('drop', (e) => {
        const files = e.dataTransfer && [...e.dataTransfer.files];
        if (!files || !files.length) return;
        e.preventDefault();
        depth = 0;
        hideOverlay();
        acceptDroppedFiles(files, e.clientX, e.clientY);
    });
}

function acceptDroppedFiles(files, x, y) {
    let added = 0;
    files.slice(0, 12).forEach((file, i) => {
        const dropX = (x || 200) + (i % 4) * 90;
        const dropY = (y || 200) + Math.floor(i / 4) * 90;

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                const name = uniqueDesktopName(file.name);
                createDesktopIcon({
                    iconSrc: 'assets/image-file-icon.png',
                    label: name,
                    className: 'image-file',
                    dataset: { image: reader.result, name },
                    x: dropX, y: dropY
                });
                saveDesktopLayout();
            };
            reader.readAsDataURL(file);
            added++;
        } else if (file.type.startsWith('text/') || /\.(txt|md|json|js|css|html|log|csv)$/i.test(file.name)) {
            const reader = new FileReader();
            reader.onload = () => {
                const name = uniqueDesktopName(file.name);
                VFS.add(VFS.DOCS, VFS.file(name, {
                    kind: 'text', icon: 'assets/notepad-icon.png', content: String(reader.result)
                }));
                const icon = createDesktopIcon({
                    iconSrc: 'assets/notepad-icon.png',
                    label: name,
                    className: 'text-file',
                    x: dropX, y: dropY
                });
                if (icon) icon._textContent = String(reader.result);
                refreshExplorerWindows();
                saveDesktopLayout();
            };
            reader.readAsText(file);
            added++;
        } else {
            const name = uniqueDesktopName(file.name);
            createDesktopIcon({
                iconSrc: 'assets/image-file-icon.png',
                label: name,
                className: 'foreign-file',
                x: dropX, y: dropY
            });
            added++;
        }
    });
    if (added) {
        notify({
            title: 'Copying files',
            text: `${added} item${added === 1 ? '' : 's'} copied to the Desktop.`,
            icon: 'assets/folder-icon.png',
            timeout: 4000
        });
    }
}


/* ---- the "All Programs" icon ----------------------------------------------
   Drawn on a canvas — the classic green double-chevron over a list of
   programs — so it never depends on an asset file. */
let ALL_PROGRAMS_ICON = '';

function installAllProgramsIcon() {
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext('2d');

    // A small stack of "program" rows
    const panel = ctx.createLinearGradient(0, 0, 0, 48);
    panel.addColorStop(0, '#fdfdfd');
    panel.addColorStop(1, '#d9d6c6');
    ctx.fillStyle = panel;
    ctx.fillRect(6, 8, 28, 32);
    ctx.strokeStyle = '#8d8a7a';
    ctx.lineWidth = 1;
    ctx.strokeRect(6.5, 8.5, 27, 31);
    ctx.fillStyle = '#4a7bc8';
    [14, 21, 28, 35].forEach(y => ctx.fillRect(10, y - 2, 14, 3));

    // The green chevron badge
    ctx.beginPath();
    ctx.arc(35, 33, 12, 0, Math.PI * 2);
    const orb = ctx.createRadialGradient(31, 29, 2, 35, 33, 13);
    orb.addColorStop(0, '#b6f08d');
    orb.addColorStop(1, '#3f8f22');
    ctx.fillStyle = orb;
    ctx.fill();
    ctx.strokeStyle = '#2c6b16';
    ctx.stroke();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    [-4, 1].forEach(dx => {
        ctx.beginPath();
        ctx.moveTo(33 + dx, 28);
        ctx.lineTo(38 + dx, 33);
        ctx.lineTo(33 + dx, 38);
        ctx.stroke();
    });

    ALL_PROGRAMS_ICON = canvas.toDataURL();

    // Point every reference at the real icon
    document.querySelectorAll('.allprograms-start-icon').forEach(img => {
        img.src = ALL_PROGRAMS_ICON;
    });
    const accessories = ALL_PROGRAMS.find(e => e.name === 'Accessories');
    if (accessories) accessories.icon = ALL_PROGRAMS_ICON;
    const arp = CONTROL_PANEL_ITEMS.find(i => i.name === 'Add or Remove Programs');
    if (arp) arp.icon = ALL_PROGRAMS_ICON;
}


/* ===== 21. Start menu routes & recent documents ============================ */

const START_ROUTES = {
    internet: 'internet',
    email: 'email',
    minesweeper: 'minesweeper',
    snake: 'snake',
    cmd: 'cmd',
    blog: 'blog',
    notepad: 'notepad',
    paint: 'paint',
    projects: 'projects',
    mydocuments: 'mydocuments',
    mypictures: 'mypictures',
    mymusic: 'mymusic',
    mycomputer: 'mycomputer',
    controlpanel: 'controlpanel',
    help: 'help',
    search: 'search',
    run: () => showRunDialog(),
    myrecent: () => showRecentDocuments(),
    setaccess: () => openControlPanel('Add or Remove Programs'),
    connectto: () => notify({
        title: 'Local Area Connection',
        text: 'Connected at 100.0 Mbps. No other connections are available.',
        icon: SysIcons.network
    }),
    printers: () => showInfoDialog('Printers and Faxes', 'assets/start-printers.png',
        'No printers are installed on this computer.<br><br>Add a printer from Control Panel.')
};

/* ---- My Recent Documents ---- */
const RECENT_KEY = 'xpRecentDocs';

function rememberRecent(entry) {
    if (!entry || !entry.name) return;
    const list = Store.get(RECENT_KEY, []).filter(r => r.path !== entry.path);
    list.unshift({ name: entry.name, path: entry.path || '', icon: entry.icon || '', at: Date.now() });
    Store.set(RECENT_KEY, list.slice(0, 15));
}

function showRecentDocuments() {
    const list = Store.get(RECENT_KEY, []);
    const startMenu = document.getElementById('start-menu');
    const anchor = (startMenu && startMenu.getBoundingClientRect()) || { right: 240, top: 200 };
    if (!list.length) {
        return showInfoDialog('My Recent Documents', 'assets/start-myrecent.png',
            'You have not opened any documents yet.<br><br>Open something from My Documents and it will show up here.');
    }
    showContextMenu(Math.min(anchor.right, window.innerWidth - 260), Math.max(40, anchor.top + 40),
        list.map(r => ({
            label: r.name,
            icon: r.icon || 'assets/notepad-icon.png',
            action: () => {
                const node = r.path && VFS.get(r.path);
                if (node) openVfsFile(node, r.path);
                else showInfoDialog('My Recent Documents', 'assets/error-icon.png',
                    `<b>${escHtml(r.name)}</b> could not be found. It may have been moved or deleted.`);
            }
        })).concat([{ sep: true }, {
            label: 'Clear List',
            action: () => { Store.set(RECENT_KEY, []); }
        }]));
}

// Paste files copied in Explorer straight onto the desktop.
function pasteClipboardToDesktop() {
    if (!clipboard) return;
    const { x, y } = lastContextMenuPos;
    clipboard.names.forEach((name, i) => {
        const node = VFS.get(VFS.join(clipboard.from, name));
        if (!node) return;
        if (node.kind === 'image' && node.src) {
            createDesktopIcon({
                iconSrc: 'assets/image-file-icon.png',
                label: uniqueDesktopName(node.name),
                className: 'image-file',
                dataset: { image: node.src, name: node.name },
                x: x + i * 20, y: y + i * 20
            });
        } else if (node.type === 'folder') {
            createDesktopIcon({
                iconSrc: 'assets/folder-icon.png',
                label: uniqueDesktopName(node.name),
                className: 'folder-new',
                x: x + i * 20, y: y + i * 20
            });
        } else {
            createDesktopIcon({
                iconSrc: VFS.iconFor(node),
                label: uniqueDesktopName(node.name),
                className: 'text-file',
                x: x + i * 20, y: y + i * 20
            });
        }
    });
    if (clipboard.mode === 'cut') {
        clipboard.names.forEach(name => VFS.remove(VFS.join(clipboard.from, name)));
        clipboard = null;
        refreshExplorerWindows();
    }
    saveDesktopLayout();
}


/* ===== 22. Bringing the desktop up ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Draw the All Programs icon on a canvas, the same way the Command Prompt
    // and Blog icons are made.
    installAllProgramsIcon();
    // Built here (not in setupStartMenu) so the generated icons already exist
    buildAllProgramsFlyout();

    // Restore what the visitor left behind
    applyLunaTheme(Store.get(THEME_KEY, 'blue'));
    restoreDesktopLayout();
    watchDesktopChanges();

    // Shell chrome
    Tooltip.init();
    setupQuickLaunch();
    setupTray();
    setupTaskbarContextMenu();
    applyTaskbarPrefs();

    // Input
    setupDesktopKeyboard();
    setupFileDrop();
    ScreenSaver.init();
    Mascot.init();

    // The audio context can only start from a real gesture
    ['pointerdown', 'keydown'].forEach(evt =>
        document.addEventListener(evt, () => XPAudio.unlock(), { once: true }));

    // Keep maximized and snapped windows correct when the viewport changes
    window.addEventListener('resize', () => {
        document.querySelectorAll('.popup').forEach(win => {
            if (win._isMaximized && win._isMaximized()) {
                win.style.left = '0';
                win.style.top = '0';
                win.style.width = window.innerWidth + 'px';
                win.style.height = workAreaHeight() + 'px';
                win.dispatchEvent(new CustomEvent('windowResized'));
            } else if (win._snapped) {
                applySnap(win, win._snapped);
            }
        });
    });

    // A last-resort net: report a broken app instead of failing silently
    window.addEventListener('error', (e) => {
        console.error('XP desktop error:', e.error || e.message);
    });
});


/* ===== 23. Desktop buddy ==================================================
   A small pixel-art hacker who sits on the desktop typing on his laptop, gets
   startled when the pointer comes near, and legs it to somewhere quieter.

   The whole point is that he must never get in the way, so: he lives inside
   .desktop and therefore paints *under* every window; he is pointer-events
   none, so he can never swallow a click; he only moves every 12-25 seconds and
   holds still while you are dragging an icon or rubber-band selecting; and he
   is one right-click away from being gone for good.

   The sprite is drawn from character maps rather than shipped as images, the
   same way the Command Prompt and All Programs icons are made.
   ========================================================================= */

const MASCOT_SPRITES = {
    sit1: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk....',
        '...khhhhhhhhhhhhhhk...',
        '...khhMMMMMMMMMMhhk...',
        '...khMMMMMMMMMMMMhk...',
        '...khMkkMMMMMMkkMhk...',
        '...khMkkMMMMMMkkMhk...',
        '...khMrMMMMMMMMrMhk...',
        '...khMMkMMkkMMkMMhk...',
        '...khMMMkkkkkkMMMhk...',
        '...khMMMMMkkMMMMMhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kffkkkkkkkkkkffk...',
        '...kLSSsSSSSSSSSSLk...',
        '...kLSSSsSSSSSSSSLk...',
        '...kLSSsSSSsssSSSLk...',
        '...kLLLLLLLLLLLLLLk...',
        '....kkkkkkkkkkkkkk....'
    ],
    sit2: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk....',
        '...khhhhhhhhhhhhhhk...',
        '...khhMMMMMMMMMMhhk...',
        '...khMMMMMMMMMMMMhk...',
        '...khMkkMMMMMMkkMhk...',
        '...khMkkMMMMMMkkMhk...',
        '...khMrMMMMMMMMrMhk...',
        '...khMMkMMkkMMkMMhk...',
        '...khMMMkkkkkkMMMhk...',
        '...khMMMMMkkMMMMMhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kkkkkkkkkkkkkkkk...',
        '...kffSSSSSSSSSSffk...',
        '...kLSSSSSSSSSSSSLk...',
        '...kLSSSSSSSSSSSSLk...',
        '...kLLLLLLLLLLLLLLk...',
        '....kkkkkkkkkkkkkk....'
    ],
    bare1: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk....',
        '...khhhhhhhhhhhhhhk...',
        '...khhffffffffffhhk...',
        '...khffffffffffffhk...',
        '...khfeeeffffeeefhk...',
        '...khfeppffffppefhk...',
        '...khffTfffffffffhk...',
        '...khffffffffffffhk...',
        '...khffffkmmkffffhk...',
        '...khffffffffffffhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kffkkkkkkkkkkffk...',
        '...kLSSsSSSSSSSSSLk...',
        '...kLSSSsSSSSSSSSLk...',
        '...kLSSsSSSsssSSSLk...',
        '...kLLLLLLLLLLLLLLk...',
        '....kkkkkkkkkkkkkk....'
    ],
    bare2: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk....',
        '...khhhhhhhhhhhhhhk...',
        '...khhffffffffffhhk...',
        '...khffffffffffffhk...',
        '...khfeeeffffeeefhk...',
        '...khfeppffffppefhk...',
        '...khffffffffffffhk...',
        '...khffTfffffffffhk...',
        '...khffffkmmkffffhk...',
        '...khffffffffffffhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kkkkkkkkkkkkkkkk...',
        '...kffSSSSSSSSSSffk...',
        '...kLSSSSSSSSSSSSLk...',
        '...kLSSSSSSSSSSSSLk...',
        '...kLLLLLLLLLLLLLLk...',
        '....kkkkkkkkkkkkkk....'
    ],
    run1: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk....',
        '...khhhhhhhhhhhhhhk...',
        '...khhffffffffffhhk...',
        '...khfkkfffffkkffhk...',
        '...khfeeeffffeeefhk...',
        '...khfeppffffppefhk...',
        '...khffTffffffTffhk...',
        '...khffTfkkkkfTffhk...',
        '...khfffkmmmmkfffhk...',
        '...khffffkmmkffffhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kllllllkhhhhhhk....',
        '...kLSssSLkhhhhhhk....',
        '...kLLLLLLkhhhhffk....',
        '......khhhhhhhhk......',
        '.....khhk...khhk......',
        '....kffk.....kffk.....'
    ],
    run2: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk....',
        '...khhhhhhhhhhhhhhk...',
        '...khhffffffffffhhk...',
        '...khfkkfffffkkffhk...',
        '...khfeeeffffeeefhk...',
        '...khfeppffffppefhk...',
        '...khffffffffffffhk...',
        '...khffTfkkkkfTffhk...',
        '...khffTkmmmmkTffhk...',
        '...khfffkmmmmkfffhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kllllllkhhhhhhk....',
        '...kLSssSLkhhhhhhk....',
        '...kLLLLLLkhhhhffk....',
        '......khhhhhhhhk......',
        '.......khhkkhhk.......',
        '......kffk..kffk......'
    ],
    panic: [
        '.......kkkkkkkk.......',
        '.....kkhhhhhhhhkk.....',
        '....khhhhhhhhhhhhk..T.',
        '...khhhhhhhhhhhhhhk..T',
        '...khhffffffffffhhk...',
        '...khfkkfffffkkffhk...',
        '...khfeeeffffeeefhk...',
        '...khfeppffffppefhk...',
        '...khffTffffffTffhk...',
        '...khffTfkkkkfTffhk...',
        '...khfffkmmmmkfffhk...',
        '...khffffkmmkffffhk...',
        '...khhhhhhhhhhhhhhk...',
        '....khhhhhhhhhhhhk....',
        '.....khhhhhhhhhhk.....',
        '...kllllllkhhhhhhk....',
        '...kLSssSLkhhhhhhk....',
        '...kLLLLLLkhhhhffk....',
        '......khhhhhhhhk......',
        '.....khhk...khhk......',
        '....kffk.....kffk.....'
    ],
};

// The mask on its own, so it can tumble away after it slips off.
const MASCOT_MASK = [
    '..kkkkkk..',
    '.kMMMMMMk.',
    'kMkkMMkkMk',
    'kMkkMMkkMk',
    'kMrMMMMrMk',
    'kMMkMMkMMk',
    'kMMkkkkMMk',
    '.kMMkkMMk.',
    '..kMMMMk..',
    '...kkkk...'
];

const MASCOT_PALETTE = {
    k: '#08080c',   // outline
    h: '#26262f',   // hoodie
    g: '#3d3d4d',   // hoodie fold
    f: '#f0c49c',   // bare face
    e: '#ffffff',   // eye white
    p: '#141428',   // pupil
    m: '#7a2f34',   // open mouth
    M: '#f4f1e6',   // mask
    r: '#d4564a',   // mask cheek
    T: '#7fd4ff',   // tears
    l: '#c3cadf',   // laptop shell
    L: '#828cab',   // laptop shell, shaded
    S: '#0e2a24',   // screen
    s: '#5ef2b4'    // screen glow
};

const MASCOT_KEY = 'xpMascot';
const MASCOT_SCALE = 3;

const Mascot = (() => {
    const SPRITE_W = 22;
    const SPRITE_H = 22;
    const WIDTH = SPRITE_W * MASCOT_SCALE;
    const HEIGHT = SPRITE_H * MASCOT_SCALE;

    const FLEE_RADIUS = 95;      // how close the pointer gets before he bolts
    const WALK_SPEED = 46;       // px per second, strolling
    const FLEE_SPEED = 210;      // px per second, panicking
    const IDLE_MIN = 12000;
    const IDLE_MAX = 25000;

    const cache = {};
    let el = null;
    let ctx = null;
    let raf = null;
    let enabled = false;

    let x = 0, y = 0;            // top-left within .desktop
    let targetX = 0, targetY = 0;
    let facing = 1;              // 1 right, -1 left
    let state = 'sit';           // sit | walk | flee
    let frameClock = 0;
    let frameIndex = 0;
    let nextWander = 0;
    let remaskAt = 0;            // he sits bare a moment before putting it back on
    let settledAt = 0;           // grace period so he is seen before he can bolt
    let panicUntil = 0;
    let lastTime = 0;
    let pointer = { x: -9999, y: -9999 };

    // He can only lose a mask he is currently wearing. That single rule gives
    // the whole gag: it falls on every genuine scare, but parking the cursor on
    // him does not rain masks, because a startled buddy never gets it back on.
    const wearingMask = () => state !== 'flee' && performance.now() >= remaskAt;

    const reducedMotion = () =>
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- drawing ---- */
    function sprite(name) {
        if (cache[name]) return cache[name];
        const rows = MASCOT_SPRITES[name];
        const canvas = document.createElement('canvas');
        canvas.width = SPRITE_W;
        canvas.height = SPRITE_H;
        const c = canvas.getContext('2d');
        rows.forEach((line, ry) => {
            for (let rx = 0; rx < line.length; rx++) {
                const colour = MASCOT_PALETTE[line[rx]];
                if (!colour) continue;
                c.fillStyle = colour;
                c.fillRect(rx, ry, 1, 1);
            }
        });
        cache[name] = canvas;
        return canvas;
    }

    // Built once from MASCOT_MASK, then reused for every drop.
    let maskCanvas = null;
    function maskSprite() {
        if (maskCanvas) return maskCanvas;
        maskCanvas = document.createElement('canvas');
        maskCanvas.width = 10;
        maskCanvas.height = 10;
        const c = maskCanvas.getContext('2d');
        MASCOT_MASK.forEach((line, ry) => {
            for (let rx = 0; rx < line.length; rx++) {
                const colour = MASCOT_PALETTE[line[rx]];
                if (!colour) continue;
                c.fillStyle = colour;
                c.fillRect(rx, ry, 1, 1);
            }
        });
        return maskCanvas;
    }

    // He is startled, the mask slips off, and it tumbles to the floor behind him.
    function dropMask() {
        const desktop = document.querySelector('.desktop');
        if (!desktop) return;
        const size = 10 * MASCOT_SCALE;
        const drop = document.createElement('canvas');
        drop.className = 'desktop-buddy-mask';
        drop.width = size;
        drop.height = size;
        const c = drop.getContext('2d');
        c.imageSmoothingEnabled = false;
        c.drawImage(maskSprite(), 0, 0, 10, 10, 0, 0, size, size);
        desktop.appendChild(drop);

        const startX = x + (WIDTH - size) / 2;
        const startY = y + 4 * MASCOT_SCALE;
        const drift = (Math.random() * 2 - 1) * 26;
        const spin = 140 + Math.random() * 220;
        const box = desktopBox();
        const floor = Math.min(startY + 62, box.h - size - 2);

        const anim = drop.animate([
            { transform: `translate(${startX}px, ${startY}px) rotate(0deg)`, opacity: 1, offset: 0 },
            { transform: `translate(${startX + drift * 0.4}px, ${startY - 14}px) rotate(${spin * 0.3}deg)`, opacity: 1, offset: 0.3 },
            { transform: `translate(${startX + drift}px, ${floor}px) rotate(${spin}deg)`, opacity: 1, offset: 0.75 },
            { transform: `translate(${startX + drift}px, ${floor}px) rotate(${spin}deg)`, opacity: 0, offset: 1 }
        ], { duration: 1500, easing: 'linear', fill: 'forwards' });
        anim.onfinish = () => drop.remove();
        setTimeout(() => drop.remove(), 1800);
    }

    function currentFrame() {
        // Masked and hunched over the keyboard while he works; bare-faced and
        // in tears the moment the mask comes off, and sheepish ever after.
        if (state === 'sit') {
            // Just back from a scare: a moment sniffling before the mask goes on
            if (!wearingMask()) return frameIndex % 2 ? 'bare2' : 'bare1';
            return frameIndex % 2 ? 'sit2' : 'sit1';
        }
        if (state === 'flee' && performance.now() < panicUntil) return 'panic';
        return frameIndex % 2 ? 'run1' : 'run2';
    }

    function paint() {
        const frame = sprite(currentFrame());
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.save();
        if (facing < 0) {
            ctx.translate(WIDTH, 0);
            ctx.scale(-1, 1);
        }
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(frame, 0, 0, SPRITE_W, SPRITE_H, 0, 0, WIDTH, HEIGHT);
        ctx.restore();
        el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    }

    /* ---- where he is allowed to stand ---- */
    function desktopBox() {
        const desktop = document.querySelector('.desktop');
        const r = desktop ? desktop.getBoundingClientRect() : { width: 800, height: 600 };
        return { w: Math.max(WIDTH + 20, r.width), h: Math.max(HEIGHT + 20, r.height) };
    }

    // Rectangles he should not sit on top of: open windows and desktop icons.
    function busyRects() {
        const desktop = document.querySelector('.desktop');
        const base = desktop ? desktop.getBoundingClientRect() : { left: 0, top: 0 };
        const rects = [];
        document.querySelectorAll('.popup').forEach(w => {
            if (w.style.display === 'none') return;
            const r = w.getBoundingClientRect();
            rects.push({ l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top });
        });
        document.querySelectorAll('.desktop .icon').forEach(i => {
            const r = i.getBoundingClientRect();
            rects.push({ l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top });
        });
        return rects;
    }

    function overlapArea(px, py, rects) {
        let worst = 0;
        for (const r of rects) {
            const ox = Math.max(0, Math.min(px + WIDTH, r.r) - Math.max(px, r.l));
            const oy = Math.max(0, Math.min(py + HEIGHT, r.b) - Math.max(py, r.t));
            worst += ox * oy;
        }
        return worst;
    }

    // Try a handful of spots and take the emptiest — cheap, and good enough to
    // keep him out from under windows without any real pathfinding.
    function pickSpot(awayFrom) {
        const box = desktopBox();
        const rects = busyRects();
        let best = null;
        for (let i = 0; i < 26; i++) {
            const px = 8 + Math.random() * Math.max(1, box.w - WIDTH - 16);
            const py = 8 + Math.random() * Math.max(1, box.h - HEIGHT - 16);
            let score = -overlapArea(px, py, rects);
            if (awayFrom) {
                score += Math.hypot(px + WIDTH / 2 - awayFrom.x, py + HEIGHT / 2 - awayFrom.y) * 4;
            }
            if (!best || score > best.score) best = { px, py, score };
        }
        return best;
    }

    /* ---- the loop ---- */
    function step(now) {
        if (!enabled) return;
        raf = requestAnimationFrame(step);
        const dt = Math.min(0.05, (now - lastTime) / 1000 || 0);
        lastTime = now;

        // Hold still while the desktop is busy or the screen saver is up
        const busy = document.hidden || (typeof ScreenSaver !== 'undefined' && ScreenSaver.running) ||
            (typeof marqueeActive !== 'undefined' && marqueeActive) ||
            (typeof currentIcon !== 'undefined' && currentIcon);
        if (busy) { paint(); return; }

        const box = desktopBox();
        const cx = x + WIDTH / 2;
        const cy = y + HEIGHT / 2;

        // Startle: the pointer got too close. Ignored for a moment after he
        // appears, so landing under the cursor cannot rob you of ever seeing
        // him sat there in the mask.
        if (pointer.x > -9000 && now > settledAt) {
            const d = Math.hypot(pointer.x - cx, pointer.y - cy);
            if (d < FLEE_RADIUS && state !== 'flee') {
                const spot = pickSpot(pointer);
                targetX = spot.px;
                targetY = spot.py;
                if (wearingMask()) dropMask();
                state = 'flee';
                panicUntil = now + 260;
                nextWander = now + IDLE_MIN + Math.random() * (IDLE_MAX - IDLE_MIN);
            }
        }

        if (state === 'sit') {
            if (!reducedMotion() && now > nextWander) {
                const spot = pickSpot(null);
                targetX = spot.px;
                targetY = spot.py;
                state = 'walk';
            }
        } else {
            const speed = state === 'flee' ? FLEE_SPEED : WALK_SPEED;
            const dx = targetX - x;
            const dy = targetY - y;
            const dist = Math.hypot(dx, dy);
            if (dist < 3) {
                x = targetX;
                y = targetY;
                if (state === 'flee') remaskAt = now + 1600;   // compose yourself
                state = 'sit';
                nextWander = now + IDLE_MIN + Math.random() * (IDLE_MAX - IDLE_MIN);
            } else {
                const move = Math.min(dist, speed * dt);
                x += (dx / dist) * move;
                y += (dy / dist) * move;
                if (Math.abs(dx) > 2) facing = dx < 0 ? -1 : 1;
            }
        }

        x = Math.max(0, Math.min(x, box.w - WIDTH));
        y = Math.max(0, Math.min(y, box.h - HEIGHT));

        // Feet shuffle while moving, gentle typing while sat down
        frameClock += dt * 1000;
        const period = state === 'sit' ? 420 : (state === 'flee' ? 110 : 190);
        if (frameClock > period) { frameClock = 0; frameIndex++; }

        paint();
    }

    function onPointerMove(e) {
        const desktop = document.querySelector('.desktop');
        if (!desktop) return;
        const r = desktop.getBoundingClientRect();
        pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    /* ---- public ---- */
    function show() {
        if (el) return;
        const desktop = document.querySelector('.desktop');
        if (!desktop) return;
        el = document.createElement('canvas');
        el.className = 'desktop-buddy';
        el.width = WIDTH;
        el.height = HEIGHT;
        el.setAttribute('aria-hidden', 'true');
        ctx = el.getContext('2d');
        desktop.appendChild(el);

        const box = desktopBox();
        const spot = pickSpot(null);
        x = spot ? spot.px : box.w - WIDTH - 40;
        y = spot ? spot.py : box.h - HEIGHT - 40;
        targetX = x;
        targetY = y;
        state = 'sit';
        remaskAt = 0;
        lastTime = performance.now();
        settledAt = lastTime + 1800;
        nextWander = lastTime + IDLE_MIN;

        document.addEventListener('pointermove', onPointerMove, { passive: true });
        enabled = true;
        raf = requestAnimationFrame(step);
    }

    function hide() {
        enabled = false;
        if (raf) cancelAnimationFrame(raf);
        raf = null;
        document.removeEventListener('pointermove', onPointerMove);
        document.querySelectorAll('.desktop-buddy-mask').forEach(n => n.remove());
        if (el) { el.remove(); el = null; ctx = null; }
    }

    return {
        get on() { return Store.get(MASCOT_KEY, true) !== false; },
        init() { if (this.on) show(); },
        set(next) {
            Store.set(MASCOT_KEY, !!next);
            if (next) show(); else hide();
        },
        toggle() { this.set(!this.on); return this.on; }
    };
})();
