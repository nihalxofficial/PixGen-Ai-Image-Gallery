import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignUp = () => {
    const googleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <Button
            className="flex"
            variant="bordered"
            onClick={googleSignUp}
        >
            <FcGoogle className="text-xl" />
            Google
        </Button>
    );
};

export default GoogleSignUp;