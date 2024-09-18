import { useFormContext } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';
import clsx from 'clsx';

type FormValues = {
  name: string;
  email: string;
  phonenumber: number;
};

export default function FormStep1() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md">
      <FormTitle>Personal info</FormTitle>

      <FormSubtitle>
        Please provide your name, email address, and phone number.
      </FormSubtitle>

      <div>
        <div className="flex justify-between">
          <label
            htmlFor="name"
            className="text-sm font-medium text-marine-blue"
          >
            Name
          </label>
          {errors.name && (
            <span className="text-sm font-semibold text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>
        <input
          {...register('name', {
            required: {
              value: true,
              message: 'Name is required.',
            },
          })}
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          className={clsx(
            'w-full rounded-md border bg-inherit px-3 py-2 font-semibold text-marine-blue placeholder:font-normal focus:border-2 focus:border-marine-blue focus:outline-none',
            {
              'border-red-500/50': errors.name,
            },
          )}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="email"
            className="text-sm font-medium text-marine-blue"
          >
            Email Address
          </label>
          {errors.email && (
            <span className="text-sm font-semibold text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <input
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required.',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          placeholder="e.g. 0sB4Z@example.com"
          id="email"
          className={clsx(
            'w-full rounded-md border bg-inherit px-3 py-2 font-semibold text-marine-blue placeholder:font-normal focus:border-2 focus:border-marine-blue focus:outline-none',
            {
              'border-red-500/50': errors.email,
            },
          )}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-marine-blue"
          >
            Phone Number
          </label>
          {errors.phonenumber && (
            <span className="self-end text-right text-sm font-semibold text-red-500">
              {errors.phonenumber.message}
            </span>
          )}
        </div>

        <input
          {...register('phonenumber', {
            required: {
              value: true,
              message: 'Phone number is required.',
            },
          })}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          id="phone"
          className={clsx(
            'w-full rounded-md border bg-inherit px-3 py-2 font-semibold text-marine-blue placeholder:font-normal focus:border-2 focus:border-marine-blue focus:outline-none',
            {
              'border-red-500/50': errors.phonenumber,
            },
          )}
        />
      </div>
      <DevTool control={control} />
    </div>
  );
}
