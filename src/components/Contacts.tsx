import React from "react";
import UserContainer from "./UserContainer";
import SidebarMenu from "./SidebarMenu";

export default function Contacts() {
    return (
        <div className="flex h-screen">
            <SidebarMenu />
            <div className="container mx-auto overflow-auto">
                <UserContainer/>
            </div>
        </div>
    );
}