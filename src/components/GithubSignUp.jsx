import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const GithubSignUp = () => {
    const githubSignUp = async() => {
        const data = await authClient.signIn.social({
        provider: "github"
    })

    }
    return (
        <Button
            className="flex"
            variant="bordered"
            onClick={githubSignUp}
        >
            <FaGithub className="text-xl" />
            GitHub
        </Button>
    );
};

export default GithubSignUp;