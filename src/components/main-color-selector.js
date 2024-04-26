import React from 'react'
import styled from 'styled-components'
import Slider from './slider'
import DynamicInput from './dynamic-input'
import { numberToHex } from '../utils'

const InputsRow = styled.div`
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

const InputsRowItem = styled.div`
  margin-right: 40px;
  flex-shrink: 0;
  width: ${props => props.wide ? 192 : 96}px;
`

const SliderLabel = styled.div`
  margin-right: 12px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  position: relative;
  top: 2px;
`

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MainColorSelector = ({
  mainColor,
  h,
  s,
  l,
  onInputChange,
  onInputBlur,
  onHChange,
  onSChange,
  onLChange,
}) => (
  <InputsRow>
    <InputsRowItem wide>
      <DynamicInput color={numberToHex(mainColor)} value={mainColor} onChange={onInputChange} onBlur={onInputBlur} prefix='#' label='Color' />

      <SliderWrapper>
        <SliderLabel>
          H
        </SliderLabel>
        <Slider type='range' min={0} max={360} color={numberToHex(mainColor)} value={h} onChange={onHChange} />
      </SliderWrapper>
      <SliderWrapper>
        <SliderLabel>
          S
        </SliderLabel>
        <Slider type='range' min={0} max={100} color={numberToHex(mainColor)} value={s} onChange={onSChange} />
      </SliderWrapper>
      <SliderWrapper>
        <SliderLabel>
          L
        </SliderLabel>
        <Slider type='range' min={0} max={100} color={numberToHex(mainColor)} value={l} onChange={onLChange} />
      </SliderWrapper>
    </InputsRowItem>
  </InputsRow>
)

export default MainColorSelector
