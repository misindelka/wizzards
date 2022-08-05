// external improts
import { useCallback, useContext, useEffect, useState } from 'react'
import { Box, Modal } from '@mui/material'

// internal imports
import { WizzardCard } from './Components/WizzardCard'
import { WizardContext } from '../../context/WizzardContext'
import mysteryMoon from '../../assets/mystery-bg.jpg'
import { WizzardDetail } from './Components/WizzardDetail'

// import types
import { IWizzard } from '../../types/wizzardTypes'

export const WizzardList: React.FC = () => {
  const wizzards = useContext(WizardContext)
  const [selectedWizzard, setWizzard] = useState<IWizzard | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)

  // handle close modal on ESC
  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal(false)
      }
    },
    [setOpenModal, openModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [handleEscapeKey])

  const selectWizzard = (id: string) => {
    const filteredWizzard = Object.assign(
      {},
      wizzards?.filter((wizzard: IWizzard) => wizzard?.id === id)[0],
    )

    setWizzard(filteredWizzard)
  }

  const handleOpenModal = (id: string) => {
    selectWizzard(id)
    setOpenModal(true)
  }

  const handleCloseModal = () => setOpenModal(false)

  // logs
  console.log('WizzardList :', selectedWizzard)

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 400px)',
        justifyContent: 'center',
        alignItems: 'center',
        gridGap: '20px',
        padding: 10,
        height: 'auto',
        backgroundImage: `url(${mysteryMoon})`,
        backgroundSize: 'cover',
      }}
    >
      {wizzards?.map((wizzard: IWizzard) => (
        <Box key={wizzard?.id} onClick={() => handleOpenModal(wizzard?.id)}>
          <WizzardCard wizzard={wizzard} />
        </Box>
      ))}
      <Modal open={openModal} onClose={handleCloseModal}>
        <WizzardDetail selectedWizzard={selectedWizzard} />
      </Modal>
    </Box>
  )
}
