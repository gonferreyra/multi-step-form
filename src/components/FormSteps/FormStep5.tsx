import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';

export default function FormStep5() {
  return (
    // Ojo, le cambie el padding en relacion a los otros div de los steps, cuando haga el componente reutilizable ver que no va a quedar igual
    <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md lg:w-[380px] lg:px-0 lg:py-14 lg:shadow-none">
      <i className="mx-auto my-4">
        <img src="/icon-thank-you.svg" alt="thank you icon" />
      </i>
      <FormTitle className="text-center">Thank you!</FormTitle>
      <FormSubtitle className="text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please fell free to email us at
        support@loremipsum.com.
      </FormSubtitle>
    </div>
  );
}
