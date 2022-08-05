// external imports
import { createContext, useState, useEffect } from 'react'
import { WIZZARDS, wizzardsAPI } from '../api'

// internal imports
import { useAxios } from '../hooks/useAxios'

//  types
import { IWizzard } from '../types/wizzardTypes'

type Props = {
  children: React.ReactNode
}

export const WizardContext = createContext<IWizzard[] | null>(null)

export const WizzardProvider: React.FC<Props> = ({ children }) => {
  const [wizzards, setWizzards] = useState<IWizzard[] | null>(null)

  const { response, loading, error } = useAxios({
    method: 'get',
    url: wizzardsAPI + WIZZARDS,
  })

  useEffect(() => {
    if (response !== null) {
      setWizzards(response)
    }
  }, [response])

  return <WizardContext.Provider value={wizzards}>{children}</WizardContext.Provider>
}
