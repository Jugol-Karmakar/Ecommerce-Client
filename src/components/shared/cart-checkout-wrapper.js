import React from "react";
import {
  Box,
  Container,
  Step,
  StepButton,
  StepLabel,
  Stepper,
} from "@mui/material";

const steps = ["Cart", "Details", "Payment", "Review"];

const CartCheckoutWrapper = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: 600, mx: "auto", my: 5 }}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{
            "& .MuiStepConnector-line": {
              borderTopWidth: 0,
              border: "2px solid",
              borderColor: "primary.light",
            },
          }}
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={completed[index]}
              sx={{
                p: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <StepButton
                color="primary"
                onClick={handleStep(index)}
                sx={{
                  py: 0.9,
                  width: 90,
                  backgroundColor:
                    index === activeStep ? "primary.main" : "primary.light",
                  borderRadius: 25,
                }}
              >
                <StepLabel
                  sx={{
                    "& .MuiSvgIcon-root": {
                      display: "none",
                    },
                    "& .MuiStepLabel-label": {
                      color: index === activeStep ? "white" : "primary.main",
                      fontWeight: 500,
                    },
                    "& .MuiStepLabel-label.Mui-active": {
                      color: "white",
                    },
                  }}
                >
                  {index + 1}. {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      {/* <div>
    {allStepsCompleted() ? (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
          Step {activeStep + 1}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
          {activeStep !== steps.length &&
            (completed[activeStep] ? (
              <Typography
                variant="caption"
                sx={{ display: "inline-block" }}
              >
                Step {activeStep + 1} already completed
              </Typography>
            ) : (
              <Button onClick={handleComplete}>
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Complete Step"}
              </Button>
            ))}
        </Box>
      </React.Fragment>
    )}
  </div> */}
      {children}
    </Container>
  );
};

export default CartCheckoutWrapper;
