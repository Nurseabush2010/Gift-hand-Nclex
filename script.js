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
