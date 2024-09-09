import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const Recommendedservice = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-8 md:mt-32'>
                <h1 className='text-5xl font-bold'>Recommended Service</h1>
            </div>
            <div className='mt-8'>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="bg-[#EEE]">
                        <TabsTrigger value="ac-servicing">AC Servicing</TabsTrigger>
                        <TabsTrigger value="home-cleaning">Home Cleaning</TabsTrigger>
                        <TabsTrigger value="ambulance">Ambulance</TabsTrigger>
                        <TabsTrigger value="caregiver">Caregiver</TabsTrigger>
                        <TabsTrigger value="pest-Control">Pest Control</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ac-servicing">
                        <Card>
                            <h1 className='text-center font-bold'>AC Servicing</h1>
                        </Card>
                    </TabsContent>
                    <TabsContent value="home-cleaning">
                        <Card>
                            <h1 className='text-center font-bold'>Home Cleaning</h1>
                        </Card>
                    </TabsContent>
                    <TabsContent value="ambulance">
                        <Card>
                            <h1 className='text-center font-bold'>Ambulance</h1>
                        </Card>
                    </TabsContent>
                    <TabsContent value="caregiver">
                        <Card>
                            <h1 className='text-center font-bold'>Caregiver</h1>
                        </Card>
                    </TabsContent>
                    <TabsContent value="pest-Control">
                        <Card>
                            <h1 className='text-center font-bold'>Pest Control</h1>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};
export default Recommendedservice;