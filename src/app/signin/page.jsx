"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries())
    
        const { data, error } = await authClient.signIn.email({
          email: userData.email,
          password: userData.password,
        //   callbackURL: "/",
        });
        if(data){    
          toast.success("Login Successful")  
          router.push("/");      
        }
        if(error){
          toast.error(error.message)
        }
      };
    return (
        <Card className="border mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Log In</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4"
             onSubmit={onSubmit}
             >

                <TextField
                    isRequired
                    name="email"
                    type="email"
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    {/* <FieldError /> */}
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    {/* <FieldError /> */}
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>

                <div className="divider"></div>

                <div className="flex flex-col gap-2">
                    <p className="text-center text-small text-default-500">
                        Or sign in with
                    </p>
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            className="flex"
                            variant="bordered"
                            onPress={() => handleSocialLogin("google")}
                        >
                            <FcGoogle className="text-xl" />
                            Google
                        </Button>
                        <Button
                            className="flex"
                            variant="bordered"
                            onPress={() => handleSocialLogin("github")}
                        >
                            <FaGithub className="text-xl" />
                            GitHub
                        </Button>
                    </div>
                </div>
                <h2 className="text-center text-sm ">Don&apos;t have an account? <Link href={"/signup"} className="text-blue-600">Signup here</Link> </h2>
            </Form>
        </Card>
    );
};

export default SignInPage;