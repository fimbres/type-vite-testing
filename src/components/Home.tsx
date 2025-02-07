import { useState } from 'react'

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { cn } from '@/lib/utils';

function Home() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState<'blue' | 'red'>('blue');

  return (
    <div className='h-screen w-screen bg-neutral-800 flex flex-col space-y-5 justify-center items-center'>
      <h1 className='text-blue-500 text-5xl font-bold text-center'>Vite Testing</h1>
      <Button className={cn(color === 'blue' ? 'bg-blue-500' : 'bg-red-500')} data-testid="button" disabled={isDisabled} onClick={() => setColor(c => c === 'blue' ? 'red' : 'blue')}>Test Button</Button>
      <Checkbox data-testid="checkbox" onChange={e => setIsDisabled(!!e.currentTarget.value)} />
    </div>
  )
}

export default Home
