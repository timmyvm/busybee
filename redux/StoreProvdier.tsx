"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface StoreProvdierProps {
    children: React.ReactNode
}

export default function StoreProvdier( {children}:StoreProvdierProps) {
  return (
    <Provider store={store}>

        {children}
    </Provider>
  )
}
