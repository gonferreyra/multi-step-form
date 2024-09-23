import { create } from 'zustand';
import createSelectors from './selectors';

type FormStore = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  planTime: 'monthly' | 'yearly';
  setPlanTime: (string: 'monthly' | 'yearly') => void;
  isChecked: boolean;
  setIsChecked: () => void;
};

const useFormStore = create<FormStore>()((set) => ({
  activeStep: 1,
  setActiveStep: (step) => {
    set((state) => ({
      ...state,
      activeStep: step,
    }));
  },
  planTime: 'monthly',
  setPlanTime: (string) => {
    set((state) => ({
      ...state,
      planTime: string,
    }));
  },
  isChecked: false,
  setIsChecked: () => {
    set((state) => ({
      ...state,
      isChecked: !state.isChecked,
    }));
  },
}));

export default createSelectors(useFormStore);
