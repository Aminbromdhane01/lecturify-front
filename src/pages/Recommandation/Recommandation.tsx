'use client'
import Input from '@/layouts/Input/Input'
import { Avatar, Box, Button, Divider, Grid, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import RecommandationCard from '@/components/RecommandationCard/RecommandationCard'
import { CardMedia } from '@mui/material';
import VoiceSelect from '@/components/VoiceSelect/VoiceSelect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLazyGetRecommendationsQuery } from '@/RTK/api/RecommandationApi'
import jsPDF from 'jspdf'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { downloadPdf } from '@/helpers/downloadPdf'
import { useGetAudioMutation } from '@/RTK/api/TextToSpeechApi'
import LoadingRecommandation from '@/components/Recommandation/LoadingRecommandation'
import NotDataFound from '@/components/Recommandation/NotDataFound'
import ControlledAlert from '@/components/ControlledAlert/ControllerdAlert'
import { RecommendationQueryParams } from '@/RTK/api/types/recommandation-api.types'
import { StyledAudioPlayer, StyledButton } from '@/components/RecommandationPage/RecommandationPage.style'




const Recommandation = () => {
  
  

  return (
    <></>
  
  )
}

export default Recommandation
