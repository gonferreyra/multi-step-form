import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';

export default function FormStep1() {
  return (
    <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md">
      <FormTitle>Personal info</FormTitle>

      <FormSubtitle>
        Please provide your name, email address, and phone number.
      </FormSubtitle>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-marine-blue">
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
        <label htmlFor="email" className="text-sm font-medium text-marine-blue">
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
        <label htmlFor="phone" className="text-sm font-medium text-marine-blue">
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
  );
}
