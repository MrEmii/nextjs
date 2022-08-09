import React, { ReactNode } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return <div>Precios </div>;
}

Pricing.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
