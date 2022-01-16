import React,{useEffect} from "react";
import { useFormContext,useForm,FormContext } from "react-hook-form";
import _ from "lodash";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";



export const FormOne = ({ formContent }) => {
    const methods = useFormContext();
    const { reset, register } = methods;

    useEffect(() => {
        reset(formContent.one , { errors: true });
    }, []);

    return (
       <></>
    );
};

export const FormTwo = ({ formContent }) => {
    const methods = useFormContext();
    const { reset, register } = methods;

    useEffect(() => {
        reset({ ...formContent.two }, { errors: true });
    }, []);

    return (
        <></>
    );
};

export const FormThree = ({ formContent }) => {
    const methods = useFormContext();
    const { reset, register } = methods;

    useEffect(() => {
        reset({ ...formContent.three }, { errors: true });
    }, []);

    return (
        <></>
    );
};


function getSteps() {
    return ["One", "Two", "Three"];
}

function getStepContent(step, formContent) {
    switch (step) {
        case 0:
            return <FormOne formContent={formContent} />;
        case 1:
            return <FormTwo {...{ formContent }} />;
        case 2:
            return <FormThree {...{ formContent }} />;
        default:
            return "Unknown step";
    }
}

export const FormStepper = () => {
    const { watch, errors } = useFormContext();
    const [activeStep, setActiveStep] = React.useState(0);
    const [compiledForm, setCompiledForm] = React.useState({});
    const steps = getSteps();
    const form = watch();

    const handleNext = () => {
        let canContinue = true;

        switch (activeStep) {
            case 0:
                setCompiledForm({ ...compiledForm, one: form });
                canContinue = true;
                break;
            case 1:
                setCompiledForm({ ...compiledForm, two: form });
                canContinue = true;
                break;
            case 2:
                setCompiledForm({ ...compiledForm, three: form });
                canContinue = true;
                break;
            case 3:
                setCompiledForm({ ...compiledForm, three: form });
                canContinue = handleSubmit({ ...compiledForm, three: form });
            default:
                return "not a valid step";
        }
        if (canContinue) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
            switch (activeStep) {
                case 1:
                    setCompiledForm({ ...compiledForm, two: form });
                    break;
                case 2:
                    setCompiledForm({ ...compiledForm, three: form });
                    break;
                default:
                    return "not a valid step";
            }
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompiledForm({});
    };

    const handleSubmit = form => {
        if (_.isEmpty(errors)) {
            console.log("submit", form);
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                        <>
                            <Button variant="contained" color="primary" onClick={handleReset}>Completed</Button>
                        </>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep, compiledForm)}
                        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                            <Button variant="contained" color="secondary" onClick={handleBack}>Back</Button>
                            <Button variant="contained" color="primary" style={{ marginLeft: '2vw'}} onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function StepperApp() {
    const methods = useForm({ mode: "onBlur" });
    const { watch, errors } = methods;

    useEffect(() => {
        console.log("FORM CONTEXT", watch(), errors);
    }, [watch, errors]);

    return (
        <FormContext {...methods}>
            <FormStepper />
        </FormContext>
    );
}