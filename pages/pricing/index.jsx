import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <div>Precios </div>
  )
}


Pricing.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);