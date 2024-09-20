import { create } from 'zustand';
import createSelectors from './selectors';

type FormStore = {
  activeStep: number;
  setActiveStep: (step: number) => void;
};

const useFormStore = create<FormStore>()((set) => ({
  activeStep: 1,
  setActiveStep: (step) => {
    set((state) => ({
      ...state,
      activeStep: step,
    }));
  },
}));

export default createSelectors(useFormStore);
