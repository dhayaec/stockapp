import React, { Component } from 'react'

interface GainProps {
  name: string
}

export class Gain extends Component<GainProps, any> {
  state = {
    oldPrice: 0,
    newPrice: 0,
    result: 0,
    isGain: false,
  }

  onChange = (e: React.ChangeEvent<any>): void => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.calculate()
    })
  }

  calculate = (): void => {
    const { oldPrice, newPrice } = this.state
    if (oldPrice && newPrice) {
      const result = ((newPrice - oldPrice) / oldPrice) * 100
      this.setState({
        isGain: result > 0,
        result: `${result.toFixed(2)}%`,
      })
    }
  }

  render() {
    const { name } = this.props
    const { oldPrice, newPrice, result, isGain } = this.state
    return (
      <div className='my-2 text-center'>
        <div className='my-1'>
          <h1>{name}</h1>
        </div>
        <div className='flex justify-center text-center'>
          <div className='w-1/3'>
            <input
              value={oldPrice || ''}
              type='number'
              name='oldPrice'
              id='oldPrice'
              onChange={this.onChange}
              placeholder='Old Price'
              className='w-full'
              pattern='\d*'
            />
          </div>
          <div className='w-1/3'>
            <input
              value={newPrice || ''}
              type='number'
              name='newPrice'
              id='newPrice'
              onChange={this.onChange}
              placeholder='New Price'
              className='w-full'
              pattern='\d*'
            />
          </div>
          <div className='flex w-1/3 items-center justify-center border-2 border-dashed border-gray-300'>
            <p className={`${isGain ? 'text-green-500' : 'text-red-500'}`}>
              {result}
            </p>
          </div>
        </div>
        <div className='flex justify-center py-1 text-center'>
          <p className={isGain ? 'text-green-500' : 'text-red-500'}>
            {newPrice - oldPrice}
          </p>
        </div>
      </div>
    )
  }
}

export default Gain
