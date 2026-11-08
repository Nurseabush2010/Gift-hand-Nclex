/* NCLEX Question Bank — self-contained, no dependencies.
 * Usage: <div id="app"></div><script src="nclex-quiz.js"></script>
 * Add questions to QUESTIONS; change timing in CONFIG. */
(function () {
  "use strict";

  const CONFIG = {
    secondsPerQuestion: 90,
    shuffleQuestions: true,
    warnAtSeconds: 30,
    dangerAtSeconds: 10,
  };

  // answer = index into options (0-based). mnemonic is optional.
  const QUESTIONS = [
    {
      category: "Pharmacology",
      question: "A client receiving digoxin has an apical pulse of 52 beats/min before the morning dose. What is the nurse's priority action?",
      options: [
        "Administer the dose and recheck the pulse in 1 hour",
        "Hold the dose and notify the healthcare provider",
        "Give the dose with a potassium-rich food",
        "Administer half of the prescribed dose",
      ],
      answer: 1,
      rationale: "Digoxin slows conduction through the AV node. In adults, hold the dose and notify the provider if the apical pulse is below 60 beats/min, because bradycardia can signal toxicity. Check for other signs of toxicity (nausea, visual changes such as yellow-green halos, new dysrhythmias) and review the digoxin level, potassium level, and renal function. Never halve a dose on your own, and never give the drug while bradycardic.",
      mnemonic: "Apical pulse for a full minute before digoxin: <60 hold, call.",
    },
    {
      category: "Surgical",
      question: "Two hours after a total thyroidectomy, which finding should the nurse report to the provider immediately?",
      options: [
        "Mild sore throat",
        "Incisional discomfort rated 3/10",
        "Noisy respirations with increasing neck swelling",
        "Temperature of 37.4 °C (99.3 °F)",
      ],
      answer: 2,
      rationale: "Airway comes first (ABCs). Neck swelling with noisy breathing or stridor suggests hematoma or laryngeal edema compressing the trachea, which is an emergency. Keep a tracheostomy set and suction at the bedside. A mild sore throat, minor pain, and a low-grade temperature are expected early after surgery. Also monitor for tetany (hypocalcemia from parathyroid injury): numbness around the mouth and a positive Chvostek or Trousseau sign.",
      mnemonic: "Airway > Breathing > Circulation.",
    },
    {
      category: "Fluids & Electrolytes",
      question: "Which ECG finding is most consistent with hypokalemia?",
      options: [
        "Tall, peaked T waves",
        "Widened QRS complex",
        "Flattened T waves with a prominent U wave",
        "Shortened PR interval",
      ],
      answer: 2,
      rationale: "Hypokalemia (K+ below 3.5 mEq/L) produces flattened or inverted T waves, ST depression, and U waves. Tall peaked T waves and a widened QRS are hallmarks of hyperkalemia. Related signs of low potassium include muscle weakness, leg cramps, constipation, and an increased risk of digoxin toxicity.",
      mnemonic: "Hypo-K: flat T and a U wave appear. Hyper-K: peaked T, wide QRS.",
    },
    {
      category: "Pharmacology",
      question: "A client receiving a continuous heparin infusion develops active bleeding. Which medication should the nurse anticipate administering?",
      options: ["Vitamin K (phytonadione)", "Protamine sulfate", "Naloxone", "Flumazenil"],
      answer: 1,
      rationale: "Protamine sulfate is the antidote for heparin. Vitamin K reverses warfarin, naloxone reverses opioids, and flumazenil reverses benzodiazepines. Heparin therapy is monitored with aPTT (target about 1.5–2.5 times control); warfarin is monitored with PT/INR.",
      mnemonic: "Heparin → Protamine (both start with P-ish sounds: 'Hep-Pro'). Warfarin → Vitamin K.",
    },
    {
      category: "Endocrine",
      question: "A client with type 1 diabetes is diaphoretic, shaky, and anxious. The fingerstick glucose is 54 mg/dL and the client is alert and able to swallow. What should the nurse do first?",
      options: [
        "Give 15 g of a fast-acting carbohydrate, such as 120 mL (4 oz) of juice",
        "Administer the next scheduled dose of insulin",
        "Give a high-protein snack",
        "Recheck the glucose in 1 hour",
      ],
      answer: 0,
      rationale: "Follow the rule of 15: give 15 g of fast-acting carbohydrate, recheck glucose in 15 minutes, and repeat if still below 70 mg/dL. Once glucose recovers, follow with a snack containing protein and complex carbohydrate if the next meal is not soon. If the client cannot swallow or is unresponsive, use IV dextrose or IM/SC glucagon. Insulin would worsen the hypoglycemia, and waiting an hour is unsafe.",
      mnemonic: "Rule of 15: 15 g carbs, 15 minutes, recheck.",
    },
    {
      category: "Respiratory",
      question: "While caring for a client with a chest tube, the nurse finds that the tubing has become disconnected from the drainage system. What is the best immediate action?",
      options: [
        "Clamp the chest tube close to the client's chest",
        "Cut off the contaminated end of the tube",
        "Place the end of the tube in a container of sterile water or saline",
        "Remove the chest tube",
      ],
      answer: 2,
      rationale: "Submerging the open end in sterile water creates a temporary water seal that lets air escape while preventing air from entering the pleural space. Then obtain a new sterile system, reconnect, and notify the provider. Do not clamp the tube: trapped air can cause a tension pneumothorax. Never remove the tube yourself. Assess respiratory status and obtain a chest x-ray as ordered.",
      mnemonic: "Disconnected? Dunk it. Never clamp it.",
    },
    {
      category: "Pediatrics",
      question: "A 3-year-old is sitting upright, leaning forward, drooling, and has a muffled voice and high fever. What is the nurse's best action?",
      options: [
        "Examine the throat with a tongue depressor",
        "Place the child supine for a respiratory assessment",
        "Offer sips of cool water",
        "Keep the child calm and notify the provider, preparing for emergency airway management",
      ],
      answer: 3,
      rationale: "This presentation (tripod position, drooling, dysphagia, muffled voice, fever) is classic for epiglottitis, a life-threatening airway emergency. Do not inspect the throat, use a tongue depressor, or lay the child flat, because any of these can trigger complete airway obstruction. Keep the child calm with a parent present, allow a position of comfort, have intubation and tracheostomy equipment ready, and give oxygen as tolerated.",
      mnemonic: "The 4 D's: Drooling, Dysphagia, Dysphonia, Distress. Hands off the throat.",
    },
    {
      category: "Pharmacology",
      question: "A client taking lisinopril reports a persistent dry cough. What is the most appropriate nursing response?",
      options: [
        "Tell the client to stop the medication immediately",
        "Explain that this is a known effect and the provider may change the medication",
        "Advise the client to double the dose",
        "Tell the client the cough indicates a lung infection",
      ],
      answer: 1,
      rationale: "A dry, nonproductive cough is a common adverse effect of ACE inhibitors caused by bradykinin accumulation. The client should report it so the provider can consider switching to an angiotensin receptor blocker (ARB). Clients should not stop antihypertensives on their own. Teach the client to report facial or tongue swelling right away (angioedema, an emergency), and monitor potassium and renal function.",
      mnemonic: "ACE inhibitor: Cough, Angioedema, hyperKalemia (the 3 C-A-K signals).",
    },
    {
      category: "Management of Care",
      question: "Which task is most appropriate for the RN to delegate to unlicensed assistive personnel (UAP)?",
      options: [
        "Obtaining vital signs on a stable client who is 2 days post-op",
        "Assessing the client's pain after IV medication",
        "Teaching a newly diagnosed diabetic client about insulin injection",
        "Developing the plan of care for a new admission",
      ],
      answer: 0,
      rationale: "UAP can perform routine tasks on stable clients: vital signs, hygiene, feeding, ambulation, intake and output. The RN retains assessment, evaluation, teaching, care planning, and any task requiring clinical judgment. The RN remains accountable for interpreting the vital signs the UAP reports.",
      mnemonic: "RN keeps: Assess, Teach, Evaluate, Plan. UAP does: routine tasks on stable clients.",
    },
    {
      category: "Maternal-Newborn",
      question: "One hour after vaginal delivery, the nurse palpates a boggy uterus above the umbilicus with heavy vaginal bleeding. What should the nurse do first?",
      options: [
        "Massage the fundus until it is firm",
        "Place the client in Trendelenburg and call the provider",
        "Encourage the client to void and walk",
        "Increase oral fluids",
      ],
      answer: 0,
      rationale: "A boggy, displaced uterus indicates uterine atony, the most common cause of early postpartum hemorrhage. Fundal massage is the first intervention. Then check for a full bladder (a full bladder displaces the uterus and prevents contraction), anticipate oxytocin or other uterotonics, monitor vital signs and blood loss, and notify the provider.",
      mnemonic: "Boggy uterus: Massage, empty bladder, medicate (uterotonics).",
    },
    {
      category: "Respiratory",
      question: "A client with COPD is receiving supplemental oxygen. Which SpO2 target is most appropriate for this client?",
      options: ["98–100%", "94–98%", "88–92%", "Below 85%"],
      answer: 2,
      rationale: "Clients with chronic CO2 retention can lose their hypoxic respiratory drive if oxygen is over-delivered. The usual target is 88–92% using the lowest flow that achieves it (often 1–3 L/min by nasal cannula). Watch for increasing drowsiness or confusion as a sign of worsening CO2 retention. Do not withhold oxygen from a client who is truly hypoxic.",
      mnemonic: "COPD = 88 to 92.",
    },
    {
      category: "Safety & Infection Control",
      question: "A client is admitted with suspected active pulmonary tuberculosis. Which precautions should the nurse implement?",
      options: [
        "Standard precautions with a surgical mask",
        "Contact precautions in a private room",
        "Droplet precautions in a private room",
        "Airborne precautions in a negative-pressure room with an N95 respirator for staff",
      ],
      answer: 3,
      rationale: "TB spreads by airborne droplet nuclei that remain suspended for long periods. Place the client in a negative-pressure airborne infection isolation room with the door closed, and wear a fit-tested N95 or higher respirator. The client wears a surgical mask during transport. Other airborne diseases: measles (rubeola), varicella, and disseminated zoster.",
      mnemonic: "MTV: Measles, TB, Varicella = Airborne.",
    },
    {
      category: "Mental Health",
      question: "A client says, \"I can't take this anymore. Everyone would be better off without me.\" Which response by the nurse is best?",
      options: [
        "\"You have so much to live for.\"",
        "\"Are you thinking about killing yourself? Do you have a plan?\"",
        "\"Let's talk about something more positive.\"",
        "\"I'm sure things will look better tomorrow.\"",
      ],
      answer: 1,
      rationale: "Ask directly and without judgment about suicidal thoughts, plan, means, and intent. Asking does not plant the idea; it opens communication and lets you assess lethality and imminence. Reassurance, changing the subject, and false optimism dismiss the client's feelings. Stay with the client, remove hazards, and follow facility policy for safety precautions.",
      mnemonic: "Direct question, then assess Plan, Means, Intent.",
    },
    {
      category: "Pharmacology",
      question: "During a blood transfusion, the client develops chills, fever, flank pain, and hypotension. What is the nurse's first action?",
      options: [
        "Slow the infusion rate and reassess in 15 minutes",
        "Administer acetaminophen",
        "Stop the transfusion and infuse 0.9% sodium chloride through new tubing",
        "Send the remaining blood to the blood bank and continue the infusion",
      ],
      answer: 2,
      rationale: "These findings suggest an acute hemolytic reaction. Stop the transfusion immediately, keep the IV open with 0.9% normal saline using new tubing (so no more incompatible blood enters), notify the provider and blood bank, stay with the client, monitor vital signs and urine output, and send the blood bag, tubing, and ordered samples to the lab. Do not continue the transfusion or treat only the fever.",
      mnemonic: "Reaction? Stop, new tubing + saline, call, check.",
    },
  ];

  // ---------- helpers ----------
  const $ = (tag, props = {}, ...kids) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    kids.flat().forEach((c) => node.append(c));
    return node;
  };
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  const CSS = `
  .nq{--ink:#14213d;--paper:#f2f7f8;--card:#fff;--line:#d3e0e4;--teal:#0e7c86;--ok:#1b7f5c;--okbg:#e3f4ec;--bad:#b3261e;--badbg:#fbe9e7;--warn:#b7791f;--warnbg:#fdf3dc;
    font:16px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink);background:var(--paper);min-height:100vh;padding:24px 16px}
  .nq *{box-sizing:border-box}
  .nq-wrap{max-width:720px;margin:0 auto}
  .nq h1{font:700 1.9rem/1.2 Georgia,"Times New Roman",serif;margin:0 0 .5rem}
  .nq p{margin:.4rem 0}
  .nq-card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:22px}
  .nq-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px;font-size:.9rem}
  .nq-chip{display:inline-block;padding:2px 10px;border-radius:99px;background:#dff0f2;color:#0a5a62;font-weight:600;font-size:.82rem}
  .nq-score{font-variant-numeric:tabular-nums;font-weight:600}
  .nq-bar{height:8px;border-radius:99px;background:var(--line);overflow:hidden;margin:6px 0 4px}
  .nq-bar>i{display:block;height:100%;width:100%;background:var(--ok);transition:width .25s linear,background .3s}
  .nq-bar.warn>i{background:var(--warn)}.nq-bar.danger>i{background:var(--bad)}
  .nq-time{font-variant-numeric:tabular-nums;font-weight:700}
  .nq-time.warn{color:var(--warn)}.nq-time.danger{color:var(--bad)}
  .nq-q{font:1.2rem/1.5 Georgia,"Times New Roman",serif;margin:16px 0}
  .nq-opts{display:grid;gap:10px;margin:0;padding:0;list-style:none}
  .nq-opt{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;font:inherit;color:inherit;background:var(--card);
    border:2px solid var(--line);border-radius:8px;padding:12px 14px;cursor:pointer}
  .nq-opt:hover:not(:disabled){border-color:var(--teal)}
  .nq-opt:focus-visible,.nq-btn:focus-visible{outline:3px solid var(--teal);outline-offset:2px}
  .nq-opt:disabled{cursor:default}
  .nq-key{flex:none;width:26px;height:26px;border-radius:50%;background:#e6eef0;display:grid;place-items:center;font-weight:700;font-size:.85rem}
  .nq-opt.correct{border-color:var(--ok);background:var(--okbg)}.nq-opt.correct .nq-key{background:var(--ok);color:#fff}
  .nq-opt.wrong{border-color:var(--bad);background:var(--badbg)}.nq-opt.wrong .nq-key{background:var(--bad);color:#fff}
  .nq-fb{margin-top:16px;border-radius:8px;padding:14px 16px;border-left:6px solid}
  .nq-fb.ok{background:var(--okbg);border-color:var(--ok)}.nq-fb.no{background:var(--badbg);border-color:var(--bad)}.nq-fb.late{background:var(--warnbg);border-color:var(--warn)}
  .nq-fb strong.t{display:block;margin-bottom:4px}
  .nq-mn{margin-top:10px;padding:8px 12px;border-radius:6px;background:#fff;border:1px dashed var(--teal);font-size:.92rem}
  .nq-btn{font:600 1rem system-ui,sans-serif;border:0;border-radius:8px;padding:11px 22px;background:var(--ink);color:#fff;cursor:pointer;margin-top:16px}
  .nq-btn.alt{background:#fff;color:var(--ink);border:2px solid var(--ink);margin-left:8px}
  .nq-big{font:700 3rem/1 Georgia,serif;margin:10px 0}
  .nq table{width:100%;border-collapse:collapse;margin:14px 0;font-size:.95rem}
  .nq th,.nq td{padding:8px 10px;border-bottom:1px solid var(--line);text-align:left}
  .nq td.n{text-align:right;font-variant-numeric:tabular-nums}
  .nq details{border:1px solid var(--line);border-radius:8px;padding:10px 14px;margin:8px 0;background:#fff}
  .nq summary{cursor:pointer;font-weight:600}
  .nq .tag-ok{color:var(--ok)}.nq .tag-no{color:var(--bad)}.nq .tag-late{color:var(--warn)}
  @media (prefers-reduced-motion:reduce){.nq-bar>i{transition:none}}
  `;

  // ---------- quiz ----------
  function NCLEXQuiz(root) {
    let deck = [], idx = 0, score = 0, results = [];
    let deadline = 0, timerId = null, locked = false;

    const view = () => { root.replaceChildren(); return root; };
    const page = (content) => { view().append($("div", { class: "nq-wrap" }, content)); };

    function renderStart() {
      stopTimer();
      page($("div", { class: "nq-card" },
        $("h1", {}, "NCLEX Question Bank"),
        $("p", {}, `${QUESTIONS.length} questions across ${new Set(QUESTIONS.map((q) => q.category)).size} categories.`),
        $("p", {}, `You have ${CONFIG.secondsPerQuestion} seconds per question. If time runs out, the question is marked incorrect and the answer is revealed. Keys 1–4 select an option; Enter moves on.`),
        $("button", { class: "nq-btn", onclick: start }, "Start quiz")
      ));
    }

    function start() {
      deck = CONFIG.shuffleQuestions ? shuffle(QUESTIONS) : QUESTIONS.slice();
      idx = 0; score = 0; results = [];
      renderQuestion();
    }

    function renderQuestion() {
      stopTimer();
      locked = false;
      const q = deck[idx];

      const bar = $("div", { class: "nq-bar", role: "progressbar", "aria-label": "Time remaining" }, $("i"));
      const time = $("span", { class: "nq-time", "aria-live": "off" }, fmt(CONFIG.secondsPerQuestion));
      const opts = q.options.map((text, i) =>
        $("button", { class: "nq-opt", type: "button", "data-i": i, onclick: () => submit(i) },
          $("span", { class: "nq-key" }, LETTERS[i]), $("span", {}, text))
      );
      const feedback = $("div", { "aria-live": "polite" });
      const nextBtn = $("button", { class: "nq-btn", style: "display:none", onclick: next },
        idx === deck.length - 1 ? "See results" : "Next question");

      page($("div", { class: "nq-card" },
        $("div", { class: "nq-top" },
          $("span", {}, $("span", { class: "nq-chip" }, q.category), ` Question ${idx + 1} of ${deck.length}`),
          $("span", { class: "nq-score" }, `Score ${score}/${idx}`)),
        $("div", { class: "nq-top" }, $("span", {}, "Time left"), time),
        bar,
        $("p", { class: "nq-q" }, q.question),
        $("div", { class: "nq-opts" }, opts),
        feedback, nextBtn));

      ui = { bar, time, opts, feedback, nextBtn };
      deadline = Date.now() + CONFIG.secondsPerQuestion * 1000;
      tick();
      timerId = setInterval(tick, 250);
    }

    let ui = {};

    function tick() {
      const msLeft = Math.max(0, deadline - Date.now());
      const secs = Math.ceil(msLeft / 1000);
      ui.time.textContent = fmt(secs);
      ui.bar.firstChild.style.width = `${(msLeft / (CONFIG.secondsPerQuestion * 1000)) * 100}%`;
      const level = secs <= CONFIG.dangerAtSeconds ? "danger" : secs <= CONFIG.warnAtSeconds ? "warn" : "";
      ui.bar.className = `nq-bar ${level}`;
      ui.time.className = `nq-time ${level}`;
      if (msLeft === 0 && !locked) submit(null);
    }

    function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }

    // Check the answer, update the score, reveal the rationale.
    function submit(choice) {
      if (locked) return;
      locked = true;
      stopTimer();
      const q = deck[idx];
      const timedOut = choice === null;
      const correct = choice === q.answer;
      if (correct) score++;
      results.push({ q, choice, correct, timedOut });

      ui.opts.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add("correct");
        else if (i === choice) btn.classList.add("wrong");
      });

      const cls = correct ? "ok" : timedOut ? "late" : "no";
      const head = correct ? "Correct" : timedOut ? `Time's up. The answer is ${LETTERS[q.answer]}.` : `Incorrect. The answer is ${LETTERS[q.answer]}.`;
      ui.feedback.replaceChildren($("div", { class: `nq-fb ${cls}` },
        $("strong", { class: "t" }, head),
        $("p", {}, q.rationale),
        q.mnemonic ? $("div", { class: "nq-mn" }, $("strong", {}, "Memory aid: "), q.mnemonic) : ""));
      ui.nextBtn.style.display = "inline-block";
      ui.nextBtn.focus();
      root.querySelector(".nq-score").textContent = `Score ${score}/${idx + 1}`;
    }

    function next() {
      idx++;
      idx < deck.length ? renderQuestion() : renderResults();
    }

    function renderResults() {
      stopTimer();
      const pct = Math.round((score / deck.length) * 100);
      const byCat = {};
      results.forEach((r) => {
        const c = (byCat[r.q.category] ||= { right: 0, total: 0 });
        c.total++; if (r.correct) c.right++;
      });
      const rows = Object.entries(byCat)
        .sort((a, b) => a[1].right / a[1].total - b[1].right / b[1].total)
        .map(([name, c]) => $("tr", {},
          $("td", {}, name),
          $("td", { class: "n" }, `${c.right}/${c.total}`),
          $("td", { class: "n" }, `${Math.round((c.right / c.total) * 100)}%`)));

      const review = results.map((r, i) => {
        const status = r.correct ? ["Correct", "tag-ok"] : r.timedOut ? ["Timed out", "tag-late"] : ["Incorrect", "tag-no"];
        return $("details", {},
          $("summary", {}, `${i + 1}. ${r.q.question.slice(0, 80)}${r.q.question.length > 80 ? "…" : ""} `,
            $("span", { class: status[1] }, `(${status[0]})`)),
          $("p", {}, r.timedOut ? "You did not answer in time." : `Your answer: ${LETTERS[r.choice]}. ${r.q.options[r.choice]}`),
          $("p", {}, $("strong", {}, `Correct answer: ${LETTERS[r.q.answer]}. `), r.q.options[r.q.answer]),
          $("p", {}, r.q.rationale),
          r.q.mnemonic ? $("div", { class: "nq-mn" }, $("strong", {}, "Memory aid: "), r.q.mnemonic) : "");
      });

      page($("div", { class: "nq-card" },
        $("h1", {}, "Results"),
        $("div", { class: "nq-big" }, `${pct}%`),
        $("p", {}, `${score} of ${deck.length} correct.`),
        $("table", {}, $("thead", {}, $("tr", {}, $("th", {}, "Category (weakest first)"), $("th", { class: "n" }, "Right"), $("th", { class: "n" }, "%"))), $("tbody", {}, rows)),
        $("h2", {}, "Review"), review,
        $("button", { class: "nq-btn", onclick: start }, "Retake quiz"),
        $("button", { class: "nq-btn alt", onclick: renderStart }, "Home")));
    }

    // Keyboard: 1-4 pick an option, Enter advances after answering.
    document.addEventListener("keydown", (e) => {
      if (!root.querySelector(".nq-opts")) return;
      if (!locked && /^[1-9]$/.test(e.key)) {
        const i = Number(e.key) - 1;
        if (i < deck[idx].options.length) submit(i);
      } else if (locked && e.key === "Enter" && document.activeElement === document.body) {
        next();
      }
    });

    renderStart();
  }

  // ---------- boot ----------
  function boot() {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    let root = document.getElementById("app");
    if (!root) { root = document.createElement("div"); root.id = "app"; document.body.appendChild(root); }
    root.classList.add("nq");
    NCLEXQuiz(root);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();

  window.NCLEXQuestions = QUESTIONS; // exposed so you can inspect or extend the bank
})();
