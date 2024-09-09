import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const RecommendedService = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-8 md:mt-32'>
                <h1 className='text-5xl font-bold'>Recommended Service</h1>
            </div>
            <div className='mt-8'>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="bg-gray-300">
                        <TabsTrigger value="ac-servicing">AC Servicing</TabsTrigger>
                        <TabsTrigger value="home-cleaning">Home Cleaning</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ac-servicing">Make changes to your account here.</TabsContent>
                    <TabsContent value="home-cleaning">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default RecommendedService;