<?php
declare(strict_types=1);

$services = [
    'Body Sculpting Fat Removal',
    'Hydra Facial',
    'Body Contouring',
    'Body Slimming',
    'Skin Tightening',
    'Lymphatic Drainage',
];

$pages = ['home', 'services', 'process', 'about', 'contact', 'book'];
$page = $_GET['page'] ?? 'home';
if (!in_array($page, $pages, true)) {
    http_response_code(404);
    $page = 'home';
}

$errors = [];
$successMessage = '';
$formData = [
    'full_name' => '',
    'phone' => '',
    'email' => '',
    'service' => '',
    'preferred_date' => '',
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    foreach ($formData as $key => $value) {
        $formData[$key] = trim((string)($_POST[$key] ?? ''));
    }

    if ($formData['full_name'] === '') {
        $errors[] = 'Please enter your full name.';
    }

    if ($formData['phone'] === '') {
        $errors[] = 'Please enter your phone number.';
    }

    if ($formData['email'] === '' || !filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address.';
    }

    if (!in_array($formData['service'], $services, true)) {
        $errors[] = 'Please select a treatment service.';
    }

    if ($formData['preferred_date'] === '') {
        $errors[] = 'Please choose a preferred date.';
    }

    if ($errors === []) {
        // Production integrations can send email, insert into MySQL, or push to a CRM here.
        $successMessage = 'Thank you, ' . htmlspecialchars($formData['full_name'], ENT_QUOTES, 'UTF-8') . '. Your appointment request has been received. Our concierge team will contact you shortly.';
        $formData = array_fill_keys(array_keys($formData), '');
        $page = 'book';
    }
}

function active_nav(string $current, string $target): string
{
    return $current === $target ? ' class="active"' : '';
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Luxury aesthetics clinic specializing in body sculpting, skin treatments, Hydra Facial, contouring, slimming, tightening, and lymphatic drainage.">
    <title>BodyNova Aesthetics | Body Sculpting & Skin Treatments</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --green: #2E8B57;
            --green-dark: #1e6840;
            --green-light: #eaf5ef;
            --gold: #D4AF37;
            --gold-dark: #b39022;
            --ink: #17251e;
            --muted: #64746c;
            --cream: #fbf8ef;
            --white: #ffffff;
            --shadow: 0 20px 50px rgba(23, 37, 30, 0.12);
            --radius: 24px;
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            color: var(--ink);
            background: var(--cream);
            font-family: "Lato", Arial, sans-serif;
            line-height: 1.65;
        }

        img, svg {
            max-width: 100%;
            display: block;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        h1, h2, h3, h4 {
            font-family: "Montserrat", Arial, sans-serif;
            line-height: 1.1;
            margin: 0 0 18px;
        }

        p {
            margin: 0 0 18px;
        }

        .container {
            width: min(1160px, calc(100% - 40px));
            margin: 0 auto;
        }

        .site-header {
            position: sticky;
            top: 0;
            z-index: 50;
            background: rgba(255, 255, 255, 0.92);
            border-bottom: 1px solid rgba(46, 139, 87, 0.12);
            backdrop-filter: blur(16px);
        }

        .nav-wrap {
            min-height: 82px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 24px;
        }

        .logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            font-family: "Montserrat", Arial, sans-serif;
            font-size: 1.2rem;
            font-weight: 800;
            letter-spacing: 0.02em;
            color: var(--green);
        }

        .logo-mark {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            color: var(--white);
            background: linear-gradient(135deg, var(--green), var(--green-dark));
            border: 2px solid var(--gold);
            border-radius: 50%;
            box-shadow: 0 10px 24px rgba(46, 139, 87, 0.22);
        }

        .nav-links {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
        }

        .nav-links a {
            padding: 10px 14px;
            border-radius: 999px;
            color: var(--muted);
            font-weight: 800;
            transition: color 0.2s ease, background 0.2s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--green);
            background: var(--green-light);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-height: 48px;
            padding: 13px 22px;
            border: 0;
            border-radius: 999px;
            color: var(--ink);
            background: var(--gold);
            font-weight: 900;
            box-shadow: 0 14px 28px rgba(212, 175, 55, 0.25);
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .button:hover {
            transform: translateY(-2px);
            background: #e3c151;
            box-shadow: 0 18px 36px rgba(212, 175, 55, 0.33);
        }

        .button.secondary {
            color: var(--green);
            background: var(--white);
            border: 1px solid rgba(46, 139, 87, 0.2);
            box-shadow: none;
        }

        .menu-toggle {
            display: none;
            width: 48px;
            height: 48px;
            border: 1px solid rgba(46, 139, 87, 0.18);
            border-radius: 16px;
            background: var(--white);
            color: var(--green);
            font-size: 1.6rem;
            cursor: pointer;
        }

        .hero {
            padding: 82px 0 70px;
            background:
                radial-gradient(circle at 12% 12%, rgba(212, 175, 55, 0.18), transparent 28%),
                linear-gradient(135deg, var(--cream), #ffffff 58%, var(--green-light));
        }

        .hero-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
            align-items: center;
            gap: 58px;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 18px;
            color: var(--green);
            font-size: 0.82rem;
            font-weight: 900;
            letter-spacing: 0.14em;
            text-transform: uppercase;
        }

        .eyebrow::before {
            content: "";
            width: 42px;
            height: 2px;
            background: var(--gold);
        }

        .hero h1 {
            max-width: 720px;
            color: var(--green-dark);
            font-size: clamp(2.6rem, 6vw, 5.7rem);
            letter-spacing: -0.055em;
        }

        .hero p {
            max-width: 650px;
            color: var(--muted);
            font-size: clamp(1.05rem, 2.1vw, 1.28rem);
        }

        .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 32px;
        }

        .hero-card {
            position: relative;
            min-height: 540px;
            overflow: hidden;
            border: 1px solid rgba(212, 175, 55, 0.34);
            border-radius: 36px;
            background:
                linear-gradient(rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.02)),
                url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=85") center/cover;
            box-shadow: var(--shadow);
        }

        .hero-card::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 35%, rgba(23, 37, 30, 0.62));
        }

        .hero-stat {
            position: absolute;
            right: 24px;
            bottom: 24px;
            z-index: 1;
            max-width: 270px;
            padding: 22px;
            color: var(--white);
            background: rgba(30, 104, 64, 0.86);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 22px;
            backdrop-filter: blur(10px);
        }

        .hero-stat strong {
            display: block;
            color: var(--gold);
            font-family: "Montserrat", Arial, sans-serif;
            font-size: 2rem;
        }

        .section {
            padding: 86px 0;
        }

        .section.green {
            color: var(--white);
            background: linear-gradient(135deg, var(--green), var(--green-dark));
        }

        .section-header {
            max-width: 750px;
            margin: 0 auto 44px;
            text-align: center;
        }

        .section-header h2 {
            color: var(--green-dark);
            font-size: clamp(2rem, 4vw, 3.4rem);
            letter-spacing: -0.035em;
        }

        .green .section-header h2,
        .green .section-header p {
            color: var(--white);
        }

        .section-header p {
            color: var(--muted);
            font-size: 1.08rem;
        }

        .service-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px;
        }

        .service-card {
            position: relative;
            min-height: 260px;
            padding: 30px;
            overflow: hidden;
            background: var(--white);
            border: 1px solid rgba(46, 139, 87, 0.12);
            border-radius: var(--radius);
            box-shadow: 0 14px 40px rgba(23, 37, 30, 0.08);
            transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
        }

        .service-card::before {
            content: "";
            position: absolute;
            inset: 0 0 auto;
            height: 5px;
            background: linear-gradient(90deg, var(--green), var(--gold));
        }

        .service-card:hover {
            transform: translateY(-8px);
            border-color: rgba(212, 175, 55, 0.55);
            box-shadow: var(--shadow);
        }

        .icon {
            width: 58px;
            height: 58px;
            display: grid;
            place-items: center;
            margin-bottom: 22px;
            color: var(--green-dark);
            background: var(--green-light);
            border: 1px solid rgba(212, 175, 55, 0.45);
            border-radius: 18px;
            font-size: 1.6rem;
        }

        .service-card h3 {
            color: var(--green-dark);
            font-size: 1.22rem;
        }

        .service-card p {
            color: var(--muted);
        }

        .process-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            counter-reset: steps;
        }

        .process-card {
            position: relative;
            padding: 34px;
            color: var(--white);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: var(--radius);
        }

        .process-card::before {
            counter-increment: steps;
            content: "0" counter(steps);
            position: absolute;
            top: 22px;
            right: 26px;
            color: rgba(255, 255, 255, 0.18);
            font-family: "Montserrat", Arial, sans-serif;
            font-size: 3.8rem;
            font-weight: 800;
            line-height: 1;
        }

        .process-card .icon {
            color: var(--ink);
            background: var(--gold);
        }

        .split {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 46px;
            align-items: center;
        }

        .feature-panel {
            padding: 36px;
            background: var(--white);
            border: 1px solid rgba(46, 139, 87, 0.12);
            border-radius: 30px;
            box-shadow: var(--shadow);
        }

        .feature-list {
            display: grid;
            gap: 16px;
            margin: 28px 0 0;
            padding: 0;
            list-style: none;
        }

        .feature-list li {
            display: flex;
            gap: 13px;
            color: var(--muted);
        }

        .feature-list li::before {
            content: "OK";
            flex: 0 0 28px;
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            color: var(--ink);
            background: var(--gold);
            border-radius: 50%;
            font-weight: 900;
        }

        .page-banner {
            padding: 76px 0;
            color: var(--white);
            background:
                linear-gradient(120deg, rgba(30, 104, 64, 0.92), rgba(46, 139, 87, 0.82)),
                url("https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80") center/cover;
        }

        .page-banner h1 {
            max-width: 850px;
            font-size: clamp(2.4rem, 5vw, 4.5rem);
            letter-spacing: -0.045em;
        }

        .page-banner p {
            max-width: 700px;
            font-size: 1.18rem;
            color: rgba(255, 255, 255, 0.86);
        }

        .appointment {
            display: grid;
            grid-template-columns: 0.92fr 1.08fr;
            gap: 34px;
            align-items: stretch;
        }

        .contact-card,
        .form-card {
            padding: 34px;
            background: var(--white);
            border: 1px solid rgba(46, 139, 87, 0.12);
            border-radius: var(--radius);
            box-shadow: 0 14px 40px rgba(23, 37, 30, 0.08);
        }

        .contact-card {
            color: var(--white);
            background: linear-gradient(145deg, var(--green), var(--green-dark));
        }

        .contact-card a {
            color: var(--white);
            font-weight: 900;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
        }

        .field.full {
            grid-column: 1 / -1;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: var(--green-dark);
            font-weight: 900;
        }

        input,
        select {
            width: 100%;
            min-height: 52px;
            padding: 0 15px;
            color: var(--ink);
            background: #fbfdfb;
            border: 1px solid rgba(46, 139, 87, 0.2);
            border-radius: 14px;
            font: inherit;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        input:focus,
        select:focus {
            border-color: var(--gold);
            box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.16);
        }

        .alert {
            margin-bottom: 22px;
            padding: 16px 18px;
            border-radius: 16px;
            font-weight: 800;
        }

        .alert.success {
            color: #17422a;
            background: #dff4e8;
            border: 1px solid rgba(46, 139, 87, 0.18);
        }

        .alert.error {
            color: #7c2727;
            background: #fff0ed;
            border: 1px solid rgba(180, 66, 43, 0.18);
        }

        .alert ul {
            margin: 8px 0 0;
            padding-left: 20px;
        }

        .map-placeholder {
            min-height: 230px;
            display: grid;
            place-items: center;
            margin-top: 28px;
            padding: 24px;
            text-align: center;
            color: rgba(255, 255, 255, 0.78);
            background:
                linear-gradient(rgba(30, 104, 64, 0.75), rgba(30, 104, 64, 0.75)),
                repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0 10px, transparent 10px 20px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 18px;
        }

        .site-footer {
            padding: 52px 0 28px;
            color: rgba(255, 255, 255, 0.86);
            background: #10281b;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr 0.8fr;
            gap: 34px;
        }

        .site-footer h3,
        .site-footer h4 {
            color: var(--white);
        }

        .footer-links {
            display: grid;
            gap: 10px;
        }

        .socials {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 16px;
        }

        .socials a {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            color: var(--ink);
            background: var(--gold);
            border-radius: 50%;
            font-weight: 900;
        }

        .copyright {
            margin-top: 38px;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.11);
            color: rgba(255, 255, 255, 0.58);
            font-size: 0.94rem;
        }

        @media (max-width: 920px) {
            .nav-wrap {
                grid-template-columns: auto auto;
                justify-content: space-between;
            }

            .menu-toggle {
                display: inline-grid;
                place-items: center;
            }

            .nav-links {
                position: absolute;
                top: 82px;
                left: 20px;
                right: 20px;
                display: none;
                flex-direction: column;
                align-items: stretch;
                padding: 18px;
                background: var(--white);
                border: 1px solid rgba(46, 139, 87, 0.12);
                border-radius: 22px;
                box-shadow: var(--shadow);
            }

            .nav-links.open {
                display: flex;
            }

            .nav-links a {
                text-align: center;
            }

            .desktop-cta {
                display: none;
            }

            .hero-grid,
            .split,
            .appointment,
            .footer-grid {
                grid-template-columns: 1fr;
            }

            .hero-card {
                min-height: 420px;
            }

            .service-grid,
            .process-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 640px) {
            .container {
                width: min(100% - 28px, 1160px);
            }

            .hero,
            .section,
            .page-banner {
                padding: 58px 0;
            }

            .service-grid,
            .process-grid,
            .form-grid {
                grid-template-columns: 1fr;
            }

            .hero-card {
                min-height: 340px;
                border-radius: 24px;
            }

            .hero-stat {
                left: 18px;
                right: 18px;
                bottom: 18px;
            }

            .contact-card,
            .form-card,
            .feature-panel,
            .service-card,
            .process-card {
                padding: 24px;
            }
        }
    </style>
</head>
<body>
    <header class="site-header">
        <div class="container nav-wrap">
            <a class="logo" href="?page=home" aria-label="BodyNova home">
                <span class="logo-mark">BN</span>
                <span>BodyNova</span>
            </a>

            <nav class="nav-links" id="primaryNav" aria-label="Primary navigation">
                <a href="?page=home"<?php echo active_nav($page, 'home'); ?>>Home</a>
                <a href="?page=services"<?php echo active_nav($page, 'services'); ?>>Services</a>
                <a href="?page=process"<?php echo active_nav($page, 'process'); ?>>Process</a>
                <a href="?page=about"<?php echo active_nav($page, 'about'); ?>>About</a>
                <a href="?page=contact"<?php echo active_nav($page, 'contact'); ?>>Contact</a>
            </nav>

            <a class="button desktop-cta" href="?page=book#appointment">Book Now</a>
            <button class="menu-toggle" type="button" aria-controls="primaryNav" aria-expanded="false">Menu</button>
        </div>
    </header>

    <main>
        <?php if ($page === 'home'): ?>
            <section class="hero">
                <div class="container hero-grid">
                    <div>
                        <span class="eyebrow">Medical Luxury Aesthetics</span>
                        <h1>Sculpt the Best Version of Yourself</h1>
                        <p>Personalized body sculpting and advanced skin treatments designed for refined, natural-looking confidence in a calm clinical setting.</p>
                        <div class="hero-actions">
                            <a class="button" href="?page=book#appointment">Request an Appointment</a>
                            <a class="button secondary" href="?page=services">Explore Treatments</a>
                        </div>
                    </div>
                    <div class="hero-card" role="img" aria-label="Luxury medical spa treatment room">
                        <div class="hero-stat">
                            <strong>6</strong>
                            signature treatments tailored to body definition, skin glow, and healthy recovery.
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Signature Services</span>
                        <h2>Results-focused treatments with a premium clinical touch.</h2>
                        <p>From non-invasive contouring to skin-refreshing facials, each service is planned around your goals, comfort, and recovery.</p>
                    </div>
                    <div class="service-grid">
                        <?php foreach ($services as $index => $service): ?>
                            <article class="service-card">
                                <div class="icon"><?php echo ['01', '02', '03', '04', '05', '06'][$index]; ?></div>
                                <h3><?php echo e($service); ?></h3>
                                <p><?php echo e([
                                    'Target stubborn areas with non-surgical technologies and personalized treatment mapping.',
                                    'Deeply cleanse, exfoliate, hydrate, and brighten with a restorative facial protocol.',
                                    'Refine silhouette balance with contour-focused sessions for waist, thighs, arms, and more.',
                                    'Support a slimmer appearance through a measured plan combining sculpting and wellness guidance.',
                                    'Encourage a firmer look with treatments designed to support visible skin elasticity.',
                                    'Promote post-treatment recovery, lightness, and circulation with gentle drainage care.',
                                ][$index]); ?></p>
                            </article>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>

            <section class="section green">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Our Process</span>
                        <h2>A clear path from consultation to glow.</h2>
                        <p>Your experience is structured, private, and tailored at every touchpoint.</p>
                    </div>
                    <div class="process-grid">
                        <article class="process-card">
                            <div class="icon">1</div>
                            <h3>Consultation</h3>
                            <p>We listen to your goals, review treatment areas, and recommend a personalized plan.</p>
                        </article>
                        <article class="process-card">
                            <div class="icon">2</div>
                            <h3>Treatment</h3>
                            <p>Relax in a polished clinical suite while trained specialists perform your selected service.</p>
                        </article>
                        <article class="process-card">
                            <div class="icon">3</div>
                            <h3>Aftercare</h3>
                            <p>Receive simple post-care guidance to support comfort, recovery, and lasting confidence.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container split">
                    <div class="feature-panel">
                        <span class="eyebrow">Why BodyNova</span>
                        <h2>Where beauty goals meet medical-grade care.</h2>
                        <p>Our clinic pairs calm hospitality with evidence-informed treatment planning, so every appointment feels elevated and purposeful.</p>
                        <ul class="feature-list">
                            <li>Private consultations and customized care plans.</li>
                            <li>Modern non-surgical treatment options.</li>
                            <li>Transparent recommendations without pressure.</li>
                        </ul>
                    </div>
                    <div class="hero-card" role="img" aria-label="Relaxing clinic interior"></div>
                </div>
            </section>
        <?php elseif ($page === 'services'): ?>
            <section class="page-banner">
                <div class="container">
                    <span class="eyebrow">Services</span>
                    <h1>Body and skin treatments designed around your ideal outcome.</h1>
                    <p>Choose from premium services that help refine contours, support recovery, and restore a polished skin glow.</p>
                </div>
            </section>
            <section class="section">
                <div class="container service-grid">
                    <?php foreach ($services as $index => $service): ?>
                        <article class="service-card">
                            <div class="icon"><?php echo ['01', '02', '03', '04', '05', '06'][$index]; ?></div>
                            <h3><?php echo e($service); ?></h3>
                            <p><?php echo e([
                                'A focused approach for areas resistant to lifestyle changes, with treatment plans customized to body shape and goals.',
                                'A glow-forward facial that cleanses, extracts, hydrates, and refreshes dull or congested skin.',
                                'A silhouette-refining service for clients seeking smoother shape and balanced body proportions.',
                                'A supportive slimming experience that pairs sculpting goals with practical care recommendations.',
                                'A treatment option for clients wanting a visibly firmer, more lifted appearance over time.',
                                'A gentle drainage service commonly chosen after contouring or when the body feels heavy and inflamed.',
                            ][$index]); ?></p>
                            <a class="button secondary" href="?page=book#appointment">Book <?php echo e($service); ?></a>
                        </article>
                    <?php endforeach; ?>
                </div>
            </section>
        <?php elseif ($page === 'process'): ?>
            <section class="page-banner">
                <div class="container">
                    <span class="eyebrow">Treatment Process</span>
                    <h1>Simple, transparent care from first visit to aftercare.</h1>
                    <p>We make every step clear, comfortable, and aligned with your body and skin goals.</p>
                </div>
            </section>
            <section class="section green">
                <div class="container process-grid">
                    <article class="process-card">
                        <div class="icon">1</div>
                        <h3>Consultation</h3>
                        <p>Your specialist reviews goals, treatment history, lifestyle factors, and the areas you want to refine.</p>
                    </article>
                    <article class="process-card">
                        <div class="icon">2</div>
                        <h3>Treatment</h3>
                        <p>Your session is performed with careful technique in a quiet, polished treatment suite.</p>
                    </article>
                    <article class="process-card">
                        <div class="icon">3</div>
                        <h3>Aftercare</h3>
                        <p>Leave with clear next steps, hydration guidance, and recommendations for future maintenance.</p>
                    </article>
                </div>
            </section>
        <?php elseif ($page === 'about'): ?>
            <section class="page-banner">
                <div class="container">
                    <span class="eyebrow">About</span>
                    <h1>A refined aesthetics destination for modern body confidence.</h1>
                    <p>BodyNova combines clinical standards, boutique hospitality, and treatment plans that respect your natural features.</p>
                </div>
            </section>
            <section class="section">
                <div class="container split">
                    <div class="hero-card" role="img" aria-label="Serene spa treatment environment"></div>
                    <div class="feature-panel">
                        <h2>Trust, comfort, and artistry in every visit.</h2>
                        <p>Our philosophy is simple: premium aesthetics should feel clear, personalized, and never rushed. We guide you through options that support your goals while keeping your comfort at the center of the experience.</p>
                        <ul class="feature-list">
                            <li>Luxury clinic atmosphere with professional standards.</li>
                            <li>Goal-led treatment recommendations and honest education.</li>
                            <li>Body sculpting and skin services delivered with discretion.</li>
                            <li>Aftercare support that helps you feel informed after every appointment.</li>
                        </ul>
                    </div>
                </div>
            </section>
        <?php elseif ($page === 'contact' || $page === 'book'): ?>
            <section class="page-banner">
                <div class="container">
                    <span class="eyebrow"><?php echo $page === 'book' ? 'Book Now' : 'Contact'; ?></span>
                    <h1>Request your private aesthetics appointment.</h1>
                    <p>Tell us what you are interested in and our concierge team will follow up with scheduling options.</p>
                </div>
            </section>
            <section class="section" id="appointment">
                <div class="container appointment">
                    <aside class="contact-card">
                        <h2>Visit BodyNova</h2>
                        <p><strong>Address:</strong><br>125 Sea Green Avenue, Suite 300<br>Miami, FL 33131</p>
                        <p><strong>Phone:</strong><br><a href="tel:+13055550142">(305) 555-0142</a></p>
                        <p><strong>Email:</strong><br><a href="mailto:hello@bodynova.example">hello@bodynova.example</a></p>
                        <p><strong>Hours:</strong><br>Mon-Fri: 9:00 AM - 7:00 PM<br>Sat: 10:00 AM - 4:00 PM</p>
                        <div class="map-placeholder">
                            Google Maps placeholder<br>
                            Replace this block with your embedded clinic map.
                        </div>
                    </aside>

                    <section class="form-card" aria-labelledby="appointment-title">
                        <h2 id="appointment-title">Request an Appointment</h2>
                        <p>Select your preferred service and date. A specialist will confirm availability and answer treatment questions.</p>

                        <?php if ($successMessage !== ''): ?>
                            <div class="alert success"><?php echo $successMessage; ?></div>
                        <?php endif; ?>

                        <?php if ($errors !== []): ?>
                            <div class="alert error">
                                Please correct the following:
                                <ul>
                                    <?php foreach ($errors as $error): ?>
                                        <li><?php echo e($error); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        <?php endif; ?>

                        <form method="post" action="?page=book#appointment" novalidate>
                            <div class="form-grid">
                                <div class="field">
                                    <label for="full_name">Full Name</label>
                                    <input type="text" id="full_name" name="full_name" value="<?php echo e($formData['full_name']); ?>" autocomplete="name" required>
                                </div>
                                <div class="field">
                                    <label for="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" value="<?php echo e($formData['phone']); ?>" autocomplete="tel" required>
                                </div>
                                <div class="field">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" value="<?php echo e($formData['email']); ?>" autocomplete="email" required>
                                </div>
                                <div class="field">
                                    <label for="service">Service</label>
                                    <select id="service" name="service" required>
                                        <option value="">Select a service</option>
                                        <?php foreach ($services as $service): ?>
                                            <option value="<?php echo e($service); ?>"<?php echo $formData['service'] === $service ? ' selected' : ''; ?>><?php echo e($service); ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="field full">
                                    <label for="preferred_date">Preferred Date</label>
                                    <input type="date" id="preferred_date" name="preferred_date" value="<?php echo e($formData['preferred_date']); ?>" required>
                                </div>
                                <div class="field full">
                                    <button class="button" type="submit">Submit Appointment Request</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        <?php endif; ?>
    </main>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3>BodyNova Aesthetics</h3>
                    <p>Luxury body sculpting and skin treatments delivered in a polished, trustworthy clinic environment.</p>
                    <div class="socials" aria-label="Social media links">
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="TikTok">TT</a>
                    </div>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>125 Sea Green Avenue, Suite 300<br>Miami, FL 33131</p>
                    <p><a href="tel:+13055550142">(305) 555-0142</a><br><a href="mailto:hello@bodynova.example">hello@bodynova.example</a></p>
                </div>
                <div>
                    <h4>Explore</h4>
                    <div class="footer-links">
                        <a href="?page=services">Services</a>
                        <a href="?page=process">Treatment Process</a>
                        <a href="?page=about">About</a>
                        <a href="?page=book#appointment">Book Now</a>
                    </div>
                </div>
            </div>
            <p class="copyright">&copy; <?php echo date('Y'); ?> BodyNova Aesthetics. All rights reserved. Placeholder website content for clinic launch.</p>
        </div>
    </footer>

    <script>
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('#primaryNav');

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                const isOpen = nav.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(isOpen));
            });

            nav.addEventListener('click', (event) => {
                if (event.target.tagName === 'A') {
                    nav.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        document.querySelectorAll('a[href*="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const url = new URL(link.href);
                if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
                    const target = document.querySelector(url.hash);
                    if (target) {
                        event.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        history.pushState(null, '', url.hash);
                    }
                }
            });
        });
    </script>
</body>
</html>
