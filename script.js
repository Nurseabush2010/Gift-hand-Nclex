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
