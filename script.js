/* =========================================
   RESET
========================================= */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


/* =========================================
   VARIABLES
========================================= */

:root {
    --background: #0d0d0f;

    --card: #151518;
    --card-hover: #1a1a1e;

    --border: #29292e;

    --foreground: #f5f5f5;
    --muted: #9999a3;

    --accent: #8b8cff;
    --accent-2: #6f70ff;

    --max-width: 1180px;
}


/* =========================================
   BASE
========================================= */

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    background:
        radial-gradient(
            circle at 50% -10%,
            rgba(103, 104, 255, 0.13),
            transparent 35%
        ),
        var(--background);

    color: var(--foreground);

    font-family:
        Inter,
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    line-height: 1.5;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input {
    font: inherit;
}

button {
    -webkit-tap-highlight-color: transparent;
}

.container {
    width: min(
        var(--max-width),
        calc(100% - 40px)
    );

    margin: 0 auto;
}


/* =========================================
   HEADER
========================================= */

header {
    position: sticky;

    top: 0;

    z-index: 50;

    height: 76px;

    border-bottom:
        1px solid rgba(41, 41, 46, 0.75);

    background:
        rgba(13, 13, 15, 0.82);

    backdrop-filter: blur(20px);

    -webkit-backdrop-filter: blur(20px);
}

.header-inner {
    height: 76px;

    display: flex;

    align-items: center;

    gap: 32px;
}


/* =========================================
   LOGO
========================================= */

.logo {
    font-size: 25px;

    font-weight: 800;

    letter-spacing: -1.2px;
}

.logo span {
    color: var(--accent);
}


/* =========================================
   NAVIGATION
========================================= */

nav {
    margin-left: 24px;

    display: flex;

    gap: 24px;
}

nav a {
    color: var(--muted);

    font-size: 14px;

    transition:
        color 0.2s ease;
}

nav a:hover {
    color: var(--foreground);
}


/* =========================================
   HEADER ACTIONS
========================================= */

.header-actions {
    margin-left: auto;

    display: flex;

    align-items: center;

    gap: 12px;
}


/* =========================================
   SEARCH
========================================= */

.search {
    width: 250px;

    height: 42px;

    padding: 0 14px;

    border:
        1px solid var(--border);

    border-radius: 12px;

    outline: none;

    background: var(--card);

    color: var(--foreground);

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.search::placeholder {
    color: var(--muted);
}

.search:focus {
    border-color: var(--accent);

    box-shadow:
        0 0 0 3px
        rgba(139, 140, 255, 0.16);
}


/* =========================================
   CART BUTTON
========================================= */

.cart-button {
    height: 42px;

    padding: 0 16px;

    display: flex;

    align-items: center;

    gap: 8px;

    border:
        1px solid var(--border);

    border-radius: 12px;

    background: var(--card);

    color: var(--foreground);

    cursor: pointer;

    font-size: 14px;

    font-weight: 700;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease;
}

.cart-button:hover {
    transform: translateY(-2px);

    background: var(--card-hover);

    border-color: #393940;
}


/* =========================================
   HERO
========================================= */

.hero {
    position: relative;

    overflow: hidden;

    padding: 92px 0 70px;
}

.hero::before {
    content: "";

    position: absolute;

    width: 650px;

    height: 400px;

    left: 50%;

    top: -180px;

    transform: translateX(-50%);

    background:
        radial-gradient(
            ellipse,
            rgba(104, 105, 255, 0.2),
            transparent 70%
        );

    pointer-events: none;
}


/* =========================================
   EYEBROW
========================================= */

.eyebrow {
    position: relative;

    width: fit-content;

    display: inline-flex;

    align-items: center;

    gap: 8px;

    padding: 8px 12px;

    border:
        1px solid var(--border);

    border-radius: 999px;

    background: var(--card);

    color: var(--accent);

    font-size: 13px;
}

.eyebrow-dot {
    width: 7px;

    height: 7px;

    border-radius: 50%;

    background: var(--accent);

    box-shadow:
        0 0 12px var(--accent);
}


/* =========================================
   HERO TITLE
========================================= */

h1 {
    position: relative;

    max-width: 820px;

    margin: 24px 0;

    font-size:
        clamp(52px, 7vw, 88px);

    line-height: 0.98;

    letter-spacing: -5px;

    font-weight: 700;
}

.hero-title {
    color: var(--accent);
}


/* =========================================
   HERO DESCRIPTION
========================================= */

.hero-description {
    max-width: 640px;

    margin-bottom: 32px;

    color: var(--muted);

    font-size: 18px;

    line-height: 1.65;
}


/* =========================================
   STATS
========================================= */

.stats {
    margin-top: 64px;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    overflow: hidden;

    border:
        1px solid var(--border);

    border-radius: 16px;

    background: var(--border);

    gap: 1px;
}

.stat {
    padding: 24px;

    background: var(--card);
}

.stat strong {
    display: block;

    font-size: 25px;
}

.stat small {
    display: block;

    margin-top: 6px;

    color: var(--muted);
}


/* =========================================
   SOFTWARE SECTION
========================================= */

.software {
    padding: 36px 0 85px;
}

.software-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 16px;
}


/* =========================================
   SOFTWARE CARD
========================================= */

.soft-card {
    min-height: 245px;

    display: flex;

    flex-direction: column;

    padding: 22px;

    border:
        1px solid var(--border);

    border-radius: 20px;

    background:
        rgba(21, 21, 24, 0.8);

    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

.soft-card:hover {
    transform: translateY(-5px);

    border-color:
        rgba(139, 140, 255, 0.55);

    background: var(--card-hover);

    box-shadow:
        0 15px 40px
        rgba(0, 0, 0, 0.2);
}


/* =========================================
   CARD TOP
========================================= */

.card-top {
    display: flex;

    align-items: flex-start;

    justify-content: space-between;

    gap: 16px;
}


/* =========================================
   CATEGORY
========================================= */

.category {
    display: inline-block;

    padding: 4px 8px;

    border-radius: 6px;

    background: #202024;

    color: var(--accent);

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 0.5px;

    text-transform: uppercase;
}


/* =========================================
   CARD TITLE
========================================= */

.soft-card h3 {
    margin: 28px 0 8px;

    font-size: 21px;

    line-height: 1.2;

    letter-spacing: -0.6px;
}


/* =========================================
   CARD DESCRIPTION
========================================= */

.soft-card p {
    color: var(--muted);

    font-size: 14px;

    line-height: 1.65;
}


/* =========================================
   CARD BOTTOM
========================================= */

.card-bottom {
    margin-top: auto;

    padding-top: 22px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;
}

.version {
    color: var(--muted);

    font-size: 12px;
}


/* =========================================
   OPTIONS BUTTON
========================================= */

.options {
    padding: 0;

    border: 0;

    background: transparent;

    color: var(--accent);

    cursor: pointer;

    font-size: 12px;

    font-weight: 700;

    white-space: nowrap;

    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.options:hover {
    color: #aaaaff;

    transform: translateX(2px);
}


/* =========================================
   NO SEARCH RESULTS
========================================= */

.no-results {
    display: none;

    padding: 50px 20px;

    color: var(--muted);

    text-align: center;

    border:
        1px dashed var(--border);

    border-radius: 20px;
}


/* =========================================
   MODAL OVERLAY
========================================= */

.modal-overlay {
    position: fixed;

    inset: 0;

    z-index: 200;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 20px;

    background:
        rgba(0, 0, 0, 0.68);

    backdrop-filter: blur(8px);

    -webkit-backdrop-filter: blur(8px);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transition:
        opacity 0.2s ease,
        visibility 0.2s ease;
}

.modal-overlay.show {
    opacity: 1;

    visibility: visible;

    pointer-events: auto;
}


/* =========================================
   MODAL WINDOW
========================================= */

.software-modal {
    position: relative;

    width: min(380px, 100%);

    padding: 28px;

    border:
        1px solid #303037;

    border-radius: 20px;

    background: #151518;

    box-shadow:
        0 25px 80px
        rgba(0, 0, 0, 0.55);

    transform:
        scale(0.94)
        translateY(8px);

    transition:
        transform 0.2s ease;
}

.modal-overlay.show .software-modal {
    transform:
        scale(1)
        translateY(0);
}


/* =========================================
   MODAL CLOSE BUTTON
========================================= */

.modal-close {
    position: absolute;

    top: 12px;

    right: 12px;

    width: 32px;

    height: 32px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: 0;

    border-radius: 8px;

    background: transparent;

    color: var(--muted);

    cursor: pointer;

    font-size: 24px;

    line-height: 1;

    transition:
        background 0.2s ease,
        color 0.2s ease;
}

.modal-close:hover {
    background: #242428;

    color: white;
}


/* =========================================
   MODAL ICON
========================================= */

.modal-icon {
    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    margin-bottom: 18px;

    border-radius: 12px;

    background:
        rgba(139, 140, 255, 0.12);

    color: var(--accent);

    font-size: 22px;

    font-weight: 700;
}


/* =========================================
   MODAL TITLE
========================================= */

.software-modal h2 {
    margin-bottom: 6px;

    color: var(--foreground);

    font-size: 22px;

    letter-spacing: -0.5px;
}


/* =========================================
   MODAL DESCRIPTION
========================================= */

.software-modal p {
    margin-bottom: 22px;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.5;
}


/* =========================================
   MODAL OPTIONS
========================================= */

.modal-options {
    display: flex;

    flex-direction: column;

    gap: 9px;
}


/* =========================================
   MODAL BUTTON
========================================= */

.modal-button {
    width: 100%;

    min-height: 42px;

    border:
        1px solid var(--border);

    border-radius: 10px;

    background: #1c1c20;

    color: var(--foreground);

    cursor: pointer;

    font-size: 14px;

    font-weight: 600;

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

.modal-button:hover {
    background: #242428;

    border-color: #3a3a42;

    transform: translateY(-1px);
}


/* =========================================
   DOWNLOAD BUTTON
========================================= */

.modal-button.primary {
    border-color: var(--accent);

    background: var(--accent);

    color: white;
}

.modal-button.primary:hover {
    background: var(--accent-2);

    border-color: var(--accent-2);
}


/* =========================================
   CANCEL BUTTON
========================================= */

.modal-button.cancel {
    background: transparent;

    border-color: transparent;

    color: var(--muted);
}

.modal-button.cancel:hover {
    background: #1c1c20;

    color: var(--foreground);

    border-color: transparent;
}


/* =========================================
   RESPONSIVE — TABLET
========================================= */

@media (max-width: 900px) {

    .software-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .search {
        width: 200px;
    }
}


/* =========================================
   RESPONSIVE — MOBILE
========================================= */

@media (max-width: 700px) {

    .container {
        width:
            min(
                var(--max-width),
                calc(100% - 28px)
            );
    }


    nav {
        display: none;
    }


    .search {
        display: none;
    }


    .hero {
        padding: 70px 0 55px;
    }


    h1 {
        font-size:
            clamp(48px, 14vw, 70px);

        letter-spacing: -3px;
    }


    .stats {
        grid-template-columns: 1fr;
    }


    .software-grid {
        grid-template-columns: 1fr;
    }


    .card-bottom {
        align-items: flex-start;

        flex-direction: column;

        gap: 12px;
    }


    .options {
        font-size: 13px;
    }


    .software-modal {
        padding: 24px;

        border-radius: 18px;
    }

}


/* =========================================
   REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        transition: none !important;
    }
}
