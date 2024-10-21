"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const menu = [
    {
 title: "Doctor",
 services:[
    {
        title: "Telehelth",
        siug: "tele-helth",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
    },
    
        {
            title: "Telehelth",
            siug: "tele-helth",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
        {
            title: "Urgent care visit",
            siug: "urgent-care-visit",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
        {
            title: "Mental health consult",
            siug: "mental-health-consult",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
        {
            title: "ED consult",
            siug: "ed-consult",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
        {
            title: "UTI consult",
            siug: "uti-consult",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
        {
            title: "Video prescription refill",
            siug: "video-prescription-refill",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
        {
            title: "Weight loss",
            siug: "weight-loss",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
        },
   
 ]
    },
    {
        title: "Top Booked",
        services:[
           {
               title: "Telehelth",
               siug: "tele-helth",
               description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
           },
           
               {
                   title: "Telehelth",
                   siug: "tele-helth",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               {
                   title: "Urgent care visit",
                   siug: "urgent-care-visit",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               {
                   title: "Mental health consult",
                   siug: "mental-health-consult",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               {
                   title: "ED consult",
                   siug: "ed-consult",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               {
                   title: "UTI consult",
                   siug: "uti-consult",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               {
                   title: "Video prescription refill",
                   siug: "video-prescription-refill",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               {
                   title: "Weight loss",
                   siug: "weight-loss",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
          
        ]
           },
           {
            title: "Specialists",
            services:[
               {
                   title: "Telehelth",
                   siug: "tele-helth",
                   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
               },
               
                   {
                       title: "Telehelth",
                       siug: "tele-helth",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   {
                       title: "Urgent care visit",
                       siug: "urgent-care-visit",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   {
                       title: "Mental health consult",
                       siug: "mental-health-consult",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   {
                       title: "ED consult",
                       siug: "ed-consult",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   {
                       title: "UTI consult",
                       siug: "uti-consult",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   {
                       title: "Video prescription refill",
                       siug: "video-prescription-refill",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   {
                       title: "Weight loss",
                       siug: "weight-loss",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
              
            ]
               },
               {
                title: "Symptoms",
                services:[
                   {
                       title: "Telehelth",
                       siug: "tele-helth",
                       description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                   },
                   
                       {
                           title: "Telehelth",
                           siug: "tele-helth",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                       {
                           title: "Urgent care visit",
                           siug: "urgent-care-visit",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                       {
                           title: "Mental health consult",
                           siug: "mental-health-consult",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                       {
                           title: "ED consult",
                           siug: "ed-consult",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                       {
                           title: "UTI consult",
                           siug: "uti-consult",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                       {
                           title: "Video prescription refill",
                           siug: "video-prescription-refill",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                       {
                           title: "Weight loss",
                           siug: "weight-loss",
                           description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae nam deserunt totam eveniet sunt veniam saepe placeat sed veritatis, officia maiores esse?"
                       },
                  
                ]
                   },
                  
                      
                    ]
   





// Urgent care visit

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" space-x-4">
       
        {
            menu.map((item,i)=>{
                return(
                    <NavigationMenuItem key={i}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.services.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={`/services${component.siug}`}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
            })
        }
       
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
