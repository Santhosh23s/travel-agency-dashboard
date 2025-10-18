import React from 'react'
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {MobileNavItems, NavItems} from "../../../components";
import {sidebarItems} from "~/constants";
import {Outlet} from "react-router";

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            <MobileNavItems />

            <aside className="w-full max-w-[270px] hidden lg:block">
                <SidebarComponent width={270} enableGestures={false}>
                    <NavItems />
                </SidebarComponent>
            </aside>

            <aside>
                <Outlet />
            </aside>
        </div>
    )
}
export default AdminLayout;