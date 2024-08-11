import Credits from '../../components/credits/Credits';
import PageHeading from '../../components/headings/PageHeading';

export default function CreditsPage() {
  return (
    <div className='md:bg-light-grey min-h-[calc(100lvh-12rem)] md:flex md:flex-col md:justify-center md:items-center'>
      <div className='md:bg-white md:rounded-3xl md:max-w-[516px] md:mx-auto w-full md:shadow-card-shadow md:p-10 relative md:min-h-[655px] md:my-5'>
        <PageHeading title={'credits'} className='md:p-0' />
        <Credits />
      </div>
    </div>
  );
}
