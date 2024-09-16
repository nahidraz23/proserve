'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import ac from '../../../assets/images/recommended/acservice.jpg'
import home from '../../../assets/images/recommended/homecleaning.jpg'
import ambulance from '../../../assets/images/recommended/ambulance.jpg'
import caregiver from '../../../assets/images/recommended/caregiver.png'
import pestcontrol from '../../../assets/images/recommended/pestcontrol.jpg'

const Recommendedservice = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-8 md:mt-32'>
                <h1 className='text-5xl font-bold'>Recommended Service</h1>
            </div>
            <div className='mt-8'>
                <Tabs className="w-full" defaultValue="ac-servicing">
                    <TabsList className="bg-[#EEE]">
                        <TabsTrigger value="ac-servicing">AC Servicing</TabsTrigger>
                        <TabsTrigger value="home-cleaning">Home Cleaning</TabsTrigger>
                        <TabsTrigger value="ambulance">Ambulance</TabsTrigger>
                        <TabsTrigger value="caregiver">Caregiver</TabsTrigger>
                        <TabsTrigger value="pest-Control">Pest Control</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ac-servicing" >
                        <Card>
                            <Image
                                src={ac}
                                width={614}
                                height={300}
                                className='rounded-xl'
                            ></Image>
                        </Card>
                    </TabsContent>
                    <TabsContent value="home-cleaning">
                        <Card>
                            <Image
                                src={home}
                                width={614}
                                height={300}
                                className='rounded-xl'
                            ></Image>
                        </Card>
                    </TabsContent>
                    <TabsContent value="ambulance">
                        <Card>
                            <Image
                                src={ambulance}
                                width={614}
                                height={300}
                                className='rounded-xl'
                            ></Image>
                        </Card>
                    </TabsContent>
                    <TabsContent value="caregiver">
                        <Card>
                            <Image
                                src={caregiver}
                                width={614}
                                height={300}
                                className='rounded-xl'
                            ></Image>
                        </Card>
                    </TabsContent>
                    <TabsContent value="pest-Control">
                        <Card>
                            <Image
                                src={pestcontrol}
                                width={614}
                                height={300}
                                className='rounded-xl'
                            ></Image>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};
export default Recommendedservice;

