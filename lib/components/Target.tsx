import React, { Component } from 'react'
import { percentages } from '../constants/constants'

interface TargetProps {
  name: string
}

export default class Target extends Component<TargetProps, any> {
  state = {
    price: 0,
    sl: 0,
    target: 0,
    tp: 1,
    sp: 0.5,
  }

  onChange = (e: React.ChangeEvent<any>): void => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.calculate()
    })
  }

  calculate = (): void => {
    const { price, tp, sp } = this.state
    const target = Number(
      Number(price) + this.getPercentage(tp, price)
    ).toFixed(2)
    const sl = Number(Number(price) - this.getPercentage(sp, price)).toFixed(2)
    this.setState({ sl, target })
  }

  getPercentage = (percentage: number, price: number): number => {
    return (+percentage / 100) * +price
  }

  render() {
    const { name } = this.props
    const { price, sl, target, tp, sp } = this.state

    return (
      <div className='my-2 text-center'>
        <div className='my-1'>
          <h1>{name}</h1>
        </div>
        <div className='flex text-center'>
          <div className='w-6/12'>
            <input
              value={price || ''}
              type='number'
              name='price'
              id='price'
              onChange={this.onChange}
              placeholder='Price'
              className='w-full'
              pattern='\d*'
            />
          </div>
          <div className='w-3/12'>
            <select
              value={tp}
              name='tp'
              id='tp'
              onChange={this.onChange}
              className='w-full'
            >
              <option value=''>TP</option>
              {percentages.target.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className='w-3/12'>
            <select
              value={sp}
              name='sp'
              id='sp'
              onChange={this.onChange}
              className='w-full'
            >
              <option value=''>SP</option>
              {percentages.sl.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex text-center'>
          <div className='w-1/2 text-green-500'>
            <p>Target</p>
            <p className='text-xl'>{target}</p>
          </div>
          <div className='w-1/2 text-red-500'>
            <p>Stop Loss</p>
            <p className='text-xl'>{sl}</p>
          </div>
        </div>
      </div>
    )
  }
}
