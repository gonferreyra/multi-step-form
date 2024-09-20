import { create } from 'zustand';
import createSelectors from './selectors';

type Store = {
  activeStep: number;
};

const formStore = create<Store>()((set) => ({
  activeStep: 1,
}));

export default createSelectors(formStore);
