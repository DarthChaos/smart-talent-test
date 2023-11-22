import { Heading1 } from "@/components/text";

const BadPermissionsPage = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='text-gray-900 dark:text-white'>
        <Heading1>Bad Request</Heading1>
        <p className='text-lg text-center mt-3'>
          You don't have permission to access this page.
        </p>
      </div>
    </div>
  );
};

export default BadPermissionsPage;
