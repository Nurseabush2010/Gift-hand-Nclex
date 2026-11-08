<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NCLEX Bootcamp</title>
    <style>
        :root {
            --bg-color: #0b132b;
            --card-bg: #1c2541;
            --accent-green: #00b4d8;
            --accent-btn: #0077b6;
            --text-main: #ffffff;
            --text-sub: #90e0ef;
        }

        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: rgba(11, 19, 43, 0.8);
            border-bottom: 1px solid #1c2541;
        }

        .logo {
            font-weight: bold;
            font-size: 1.2rem;
            letter-spacing: 1px;
        }

        nav a {
            color: var(--text-sub);
            text-decoration: none;
            margin-left: 1.5rem;
            font-size: 0.9rem;
        }

        .btn-top {
            background-color: #e63946;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
        }

        main {
            flex: 1;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }

        .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
            .hero, .modes {
                grid-template-columns: 1fr !important;
            }
        }

        .hero-text h1 {
            font-size: 2.2rem;
            margin-bottom: 1rem;
        }

        .hero-text p {
            color: var(--text-sub);
            line-height: 1.5;
        }

        .hero-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .timer-box {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        .stats-grid {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            border-top: 1px solid #3a506b;
            padding-top: 1rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-num {
            font-weight: bold;
            font-size: 1.2rem;
        }

        .stat-label {
            font-size: 0.75rem;
            color: var(--text-sub);
        }

        .section-title {
            margin-top: 2rem;
            margin-bottom: 0.5rem;
        }

        .section-subtitle {
            color: var(--text-sub);
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
        }

        .modes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .mode-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .mode-card ul {
            padding-left: 1.2rem;
            color: var(--text-sub);
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .btn-action {
            display: inline-block;
            text-align: center;
            background-color: var(--accent-btn);
            color: white;
            padding: 0.8rem 1.2rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 1rem;
        }

        footer {
            background-color: #0b132b;
            border-top: 1px solid #1c2541;
            padding: 2rem;
            text-align: center;
            font-size: 0.8rem;
            color: var(--text-sub);
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">NCLEX BOOTCAMP</div>
        <nav>
            <a href="test.html">Readiness check</a>
            <a href="test.html">Practice stats</a>
            <a href="test.html" class="btn-top">Start free check</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-text">
                <h1>Practice like it's test day. Pass the NCLEX.</h1>
                <p>Timed sessions, adaptive questions, and rationale for every answer. Build the stamina and judgment to pass on your first attempt.</p>
                <br>
                <a href="test.html" class="btn-action">Check my readiness</a>
            </div>
            <div class="hero-card">
                <div>Exam prep timer</div>
                <div class="timer-box">1:00:00</div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-num">14</div>
                        <div class="stat-label">NCLEX questions</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-num">86%</div>
                        <div class="stat-label">Average score</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-num">14 days</div>
                        <div class="stat-label">Average streak</div>
                    </div>
                </div>
            </div>
        </section>

        <h2 class="section-title">Two ways to train</h2>
        <p class="section-subtitle">Learn the content in Tutor mode, then test yourself under exam conditions in Computer Adaptive mode.</p>

        <section class="modes">
            <div class="mode-card">
                <div>
                    <h3>Computer Adaptive</h3>
                    <ul>
                        <li>Timed question sets</li>
                        <li>Detailed performance overview</li>
                        <li>Pass or fail feedback after each session</li>
                    </ul>
                </div>
                <a href="test.html" class="btn-action">Start adaptive test</a>
            </div>

            <div class="mode-card">
                <div>
                    <h3>Tutor</h3>
                    <ul>
                        <li>Get instant feedback and full rationale after every question</li>
                        <li>Choose topics by category or prioritization</li>
                        <li>Review missed questions</li>
                    </ul>
                </div>
                <a href="test.html" class="btn-action">Start tutor session</a>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; NCLEX Bootcamp. All rights reserved.</p>
    </footer>

</body>
</html>
