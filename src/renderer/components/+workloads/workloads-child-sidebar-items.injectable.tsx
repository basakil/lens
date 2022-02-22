/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable, getInjectionToken } from "@ogre-tools/injectable";
import type { IComputedValue } from "mobx";
import type { ISidebarItem } from "../layout/sidebar";
import { getSidebarItems } from "../layout/get-sidebar-items";

export const workloadsChildSidebarItemsInjectionToken = getInjectionToken<
  IComputedValue<ISidebarItem[]>
>({
  id: "workloads-child-sidebar-items-injection-token",
});

const workloadsChildSidebarItemsInjectable = getInjectable({
  id: "workloads-child-sidebar-items",

  instantiate: (di) => {
    const childRegistrations = di.injectMany(workloadsChildSidebarItemsInjectionToken);

    return getSidebarItems(childRegistrations);
  },
});

export default workloadsChildSidebarItemsInjectable;
