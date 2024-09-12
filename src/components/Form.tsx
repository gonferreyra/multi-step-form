import { useActiveId } from '../lib/hooks';
import FormTitle from '../ui/FormTitle';

export default function Form() {
  const stepNumber = useActiveId();
  return (
    <form className="absolute -top-20 left-0 right-0 flex h-[calc(100vh-120px)] flex-col">
      {/* Step 1 */}
      {stepNumber === 1 && (
        <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
          <FormTitle>Personal info</FormTitle>

          <p className="text-cool-gray">
            Please provide your name, email address, and phone number.
          </p>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-marine-blue"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              id="name"
              required
              className="w-full border bg-inherit px-3 py-2 text-cool-gray"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-marine-blue"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. 0sB4Z@example.com"
              id="email"
              required
              className="w-full border bg-inherit px-3 py-2 text-cool-gray"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-marine-blue"
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. +1 234 567 890"
              id="phone"
              required
              className="w-full border bg-inherit px-3 py-2 text-cool-gray"
            />
          </div>
        </div>
      )}

      <div className="mt-auto flex w-full justify-end bg-alabaster">
        <button className="my-4 rounded-md bg-marine-blue p-3 text-alabaster">
          Next Step
        </button>
      </div>
    </form>
  );
}
