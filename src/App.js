import { useState } from "react";

const steps = ["Learn React ⚛", "Apply Technologies 💢", "Make Practices 🏆"];
export default function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step >= 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <Numbers step={step} />
          <Msgs step={step} />
          <Btns previous={handlePrevious} next={handleNext} />
        </div>
      )}
    </>
  );
}

function Numbers({ step }) {
  return (
    <div className="numbers">
      <div className={`one ${step >= 0 ? "active" : ""}`}>1</div>
      <div className={`two ${step >= 1 ? "active" : ""}`}>2</div>
      <div className={`three ${step === 2 ? "active" : ""}`}>3</div>
    </div>
  );
}
function Msgs({ step }) {
  return (
    <p>
      {`Step ${step + 1}: `}
      {steps[step]}
    </p>
  );
}

function Btns({ previous, next }) {
  return (
    <div className="btns">
      <button className="previous" onClick={previous}>
        previous
      </button>
      <button className="next" onClick={next}>
        next
      </button>
    </div>
  );
}
