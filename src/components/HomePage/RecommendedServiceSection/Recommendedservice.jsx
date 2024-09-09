import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RecommendedService = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 md:mt-32">
        <h1 className="text-5xl font-bold">Recommended Service</h1>
      </div>
      <div className="mt-8">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="bg-[#EEE]">
            <TabsTrigger value="ac-servicing">AC Servicing</TabsTrigger>
            <TabsTrigger value="home-cleaning">Home Cleaning</TabsTrigger>
            <TabsTrigger value="ambulance">Ambulance</TabsTrigger>
            <TabsTrigger value="caregiver">Caregiver</TabsTrigger>
            <TabsTrigger value="pest-Control">Pest Control</TabsTrigger>
          </TabsList>
          <TabsContent value="ac-servicing">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="home-cleaning">Home Cleaning.</TabsContent>
          <TabsContent value="ambulance">Ambulance service.</TabsContent>
          <TabsContent value="caregiver">Caregiver service.</TabsContent>
          <TabsContent value="pest-Control">Pest contorl service.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RecommendedService;
