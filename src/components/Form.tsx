import { useState } from 'react';
import {
  FormStep1,
  FormStep2,
  FormStep3,
  FormStep4,
  FormStep5,
} from './FormSteps';
import { FormProvider, useForm } from 'react-hook-form';

type FormProps = {
  activeStep: number;
  handleActiveStep: (step: number) => void;
};

type FormValues = {
  name: string;
  email: string;
  phonenumber: string;
  selectedPlan: string | null;
  selectedAddOns: string[] | null;
};

export default function Form({ activeStep, handleActiveStep }: FormProps) {
  const methods = useForm<FormValues>({
    // initialice only this value
    defaultValues: {
      selectedAddOns: [],
    },
    shouldUnregister: false,
  });
  const {
    formState: { errors },
  } = methods;

  // See if i can remove one of this states
  const [planTime, setPlanTime] = useState('monthly');
  const [isChecked, setIsChecked] = useState(false);

  //  second step
  // const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  // console.log(selectedPlan);

  // third step
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // month or year toggle
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setPlanTime(isChecked ? 'monthly' : 'yearly');
  };

  // third step
  const handleSelectAddOn = (name: string, selected: boolean) => {
    if (selected) {
      setSelectedAddOns([...selectedAddOns, name]);
    } else {
      setSelectedAddOns(selectedAddOns.filter((addOn) => addOn !== name));
    }
  };

  const handleNextStep = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    // nextStep: number,
  ) => {
    e.preventDefault();
    // Validate fields on first step
    if (activeStep === 1) {
      const isStepValid = await methods.trigger([
        'name',
        'email',
        'phonenumber',
      ]);

      if (isStepValid) {
        handleActiveStep(activeStep + 1); // next step
      } else {
        console.log('Error validating fields on first step');
      }
    }

    if (activeStep === 2) {
      // Validate fields on second step
      const isStep2Valid = await methods.trigger(['selectedPlan']);
      if (isStep2Valid) {
        handleActiveStep(activeStep + 1); // next step
      } else {
        console.log('Error validating fields on second step');
      }
    }

    if (activeStep === 3) {
      handleActiveStep(activeStep + 1);
    }
  };

  const onSubmit = async (data: FormValues) => {
    // Ejecutar validación de todos los campos para encontrar errores
    const isFormValid = await methods.trigger();

    console.log('Errores: ', methods.formState.errors);

    console.log(data);

    if (!isFormValid) {
      // Redirect to the first error step - Unused for now since the form is validated on every step
      if (errors.name || errors.email || errors.phonenumber) {
        handleActiveStep(1); // Redirige al primer paso
      } else if (errors.selectedPlan) {
        handleActiveStep(2); // Redirige al segundo paso si el plan no está seleccionado
        // } else if (errors.selectedAddOns) {
        //   handleActiveStep(3); // Redirige al tercer paso si falta algo en los add-ons
      }

      console.log('Errores en el formulario. No se puede continuar.');
    } else {
      console.log('Formulario válido. Enviando datos...');
      console.log(data);
      handleActiveStep(activeStep + 1); // Avanza al siguiente paso si no hay errores
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="absolute -top-20 left-0 right-0 flex min-h-[calc(100vh-120px)] flex-col gap-6 lg:static lg:min-h-full lg:justify-center"
        noValidate
      >
        {/* Step 1 */}
        {activeStep === 1 ? (
          <FormStep1 />
        ) : (
          <div className="absolute h-0 w-0 overflow-hidden">
            <FormStep1 />
          </div>
        )}

        {/* Step 2 */}
        {activeStep === 2 ? (
          <FormStep2
            planTime={planTime}
            isChecked={isChecked}
            handleToggle={handleToggle}
          />
        ) : (
          <div className="absolute h-0 w-0 overflow-hidden">
            <FormStep2
              planTime={planTime}
              isChecked={isChecked}
              handleToggle={handleToggle}
            />
          </div>
        )}

        {/* Step 3 */}
        {activeStep === 3 ? (
          <FormStep3
            planTime={planTime}
            selectedAddOns={selectedAddOns}
            handleSelectAddOn={handleSelectAddOn}
          />
        ) : (
          <div className="absolute h-0 w-0 overflow-hidden">
            <FormStep3
              planTime={planTime}
              selectedAddOns={selectedAddOns}
              handleSelectAddOn={handleSelectAddOn}
            />
          </div>
        )}

        {/* Step 4 */}
        {activeStep === 4 ? (
          <FormStep4 planTime={planTime} handleActiveStep={handleActiveStep} />
        ) : (
          <div className="absolute h-0 w-0 overflow-hidden">
            <FormStep4
              planTime={planTime}
              handleActiveStep={handleActiveStep}
            />
          </div>
        )}

        {/* Step 5 */}
        {activeStep === 5 && <FormStep5 />}

        {/* Buttons */}
        {activeStep !== 5 && (
          <div className="mt-auto flex w-full items-center justify-between bg-alabaster px-2">
            {activeStep > 1 && (
              <button
                type="button"
                className="rounded-md p-3 font-bold text-cool-gray"
                onClick={() => handleActiveStep(activeStep - 1)}
              >
                Go Back
              </button>
            )}

            {activeStep === 4 ? (
              <button
                type="submit"
                className="my-4 ml-auto rounded-md bg-purplish-blue p-3 font-bold text-alabaster"
              >
                Confirm
              </button>
            ) : (
              <button
                type="button"
                className="my-4 ml-auto rounded-md bg-marine-blue p-3 font-bold text-alabaster"
                onClick={(e) => handleNextStep(e)}
              >
                Next Step
              </button>
            )}
          </div>
        )}
      </form>
    </FormProvider>
  );
}
