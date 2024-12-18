'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

<<<<<<< HEAD
import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '@/components/Alert';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';

const MeetingPage = () => {
  const { id } = useParams();
=======

import Alert from '@/components/Alert';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';
import { useGetCallById } from '@/hooks/useGetCallById';

const MeetingPage = ({params: {id}}: { params: {id: string}}) => {
 
>>>>>>> 079589dd1b759445a305ca357a00dce0c33df934
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

<<<<<<< HEAD
  if (!call) return (
=======
  if (!call) return ( 
>>>>>>> 079589dd1b759445a305ca357a00dce0c33df934
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

<<<<<<< HEAD
  // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
=======
>>>>>>> 079589dd1b759445a305ca357a00dce0c33df934
  const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>

        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <MeetingRoom />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
